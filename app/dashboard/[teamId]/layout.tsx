'use client';
import SidebarLayout, { SidebarItem } from "@/components/sidebar-layout"; // sidebar
import { SelectedTeamSwitcher, useUser } from "@stackframe/stack";
import { BarChart4, Columns3, Globe, Key, Settings2, MessageCircleWarning, DiamondPlus, Users } from "lucide-react"; // icons for menu
import { useParams, useRouter } from "next/navigation"; // nav loading

const navigationItems: SidebarItem[] = [
  {
    name: "Overview",
    href: "/", // main dashboard page
    icon: Globe,
    type: "item",
  },
  {
    type: 'label',
    name: 'Management',
  },
  {
    name: "New Chat",
    href: "/sections/new-chat",
    icon: DiamondPlus,
    type: "item",
  },
  {
    name: "Insights",
    href: "/sections/insights",
    icon: BarChart4,
    type: "item",
  },
  {
    name: "Chat Memory",
    href: "/sections/chat-memory",
    icon: Columns3,
    type: "item",
  },
  {
    name: "StarTools",
    href: "/sections/startools",
    icon: Key,
    type: "item",
  },
  {
    type: 'label',
    name: 'Collaboration',
  },
  {
    name: "Invitations",
    href: "/sections/invitations",
    icon: MessageCircleWarning,
    type: "item",
  },
  {
    name: "Team Chat",
    href: "/sections/team-chat",
    icon: Users,
    type: "item",
  },
  {
    type: 'label',
    name: 'Settings',
  },
  {
    name: "Configuration",
    href: "/sections/config",
    icon: Settings2,
    type: "item",
  },
];

export default function Layout(props: { children: React.ReactNode }) {
  const params = useParams<{ teamId: string }>();
  const user = useUser({ or: 'redirect' });
  const team = user.useTeam(params.teamId);
  const router = useRouter();

  if (!team) {
    router.push('/dashboard');
    return null;
  }

  // Update the navigation items with the actual team ID
  const navigationItemsWithTeamId = navigationItems.map(item => {
    if (item.type === "item" && item.href) {
      return {
        ...item,
        href: item.href.replace(/\[teamId\]/g, team.id), // Replace dynamic part to fix href errors
      };
    }
    return item; // Return unchanged items
  });

  return (
    <SidebarLayout
      items={navigationItemsWithTeamId} 
      basePath={`/dashboard/${team.id}`}
      sidebarTop={<SelectedTeamSwitcher
        selectedTeam={team}
        urlMap={(team) => `/dashboard/${team.id}`}
      />}
      baseBreadcrumb={[{
        title: team.displayName,
        href: `/dashboard/${team.id}`,
      }]}
    >
      {props.children}
    </SidebarLayout>
  );
}


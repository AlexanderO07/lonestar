import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing";
import { stackServerApp } from "@/stack";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ComponentIcon, Workflow, ServerCog, Users } from "lucide-react";

export default async function IndexPage() {
  const project = await stackServerApp.getProject();
  if (!project.config.clientTeamCreationEnabled) {
    return (
      <div className="w-full min-h-96 flex items-center justify-center">
        <div className="max-w-xl gap-4">
          <p className="font-bold text-xl">Setup Required</p>
          <p className="">
            {
              "To start using this project, please enable client-side team creation in the Stack Auth dashboard (Project > Team Settings). This message will disappear once the feature is enabled."
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
          <div className="screen-container">
            <div className="marquee">
              <div className="wrapper">
                <div className="itemLeft item1">Buy Milk and Cookies</div>
                <div className="itemLeft item2">Attend team meeting on Tuesday</div>
                <div className="itemLeft item3">Complete project report</div>
                <div className="itemLeft item4">Schedule doctor’s appointment</div>
                <div className="itemLeft item5">Clean the house</div>
                <div className="itemLeft item6">Take Chompers to the vet</div>
                <div className="itemLeft item7">Pick up dry cleaning</div>
                <div className="itemLeft item8">Call Grandma</div>
              </div>
              <div className="wrapper">
                <div className="itemRight item1">Research vacation options</div>
                <div className="itemRight item2">Attend yoga class</div>
                <div className="itemRight item3">
                  Mail card to Sarah for her birthday
                </div>
                <div className="itemRight item4">Pick up Dylan from daycare</div>
                <div className="itemRight item5">Research vacation options</div>
                <div className="itemRight item6">Water all houseplants</div>
                <div className="itemRight item7">Buy replacement washer </div>
                <div className="itemRight item8">
                  Try making chicken tikka masala on Tuesday night
                </div>
              </div>
              <div className="wrapper">
                <div className="itemLeft item1">Buy Milk and Cookies</div>
                <div className="itemLeft item2">Attend team meeting on Tuesday</div>
                <div className="itemLeft item3">Complete project report</div>
                <div className="itemLeft item4">Schedule doctor’s appointment</div>
                <div className="itemLeft item5">Clean the house</div>
                <div className="itemLeft item6">Take Chompers to the vet</div>
                <div className="itemLeft item7">Pick up dry cleaning</div>
                <div className="itemLeft item8">Call Grandma</div>
              </div>
              <div className="wrapper">
                <div className="itemRight item1">Research vacation options</div>
                <div className="itemRight item2">Attend yoga class</div>
                <div className="itemRight item3">
                  Mail card to Sarah for her birthday
                </div>
                <div className="itemRight item4">Pick up Dylan from daycare</div>
                <div className="itemRight item5">Research vacation options</div>
                <div className="itemRight item6">Water all houseplants</div>
                <div className="itemRight item7">Buy replacement washer </div>
                <div className="itemRight item8">
                  Try making chicken tikka masala on Tuesday night
                </div>
              </div>
              <div className="wrapper">
                <div className="itemLeft item1">Buy Milk and Cookies</div>
                <div className="itemLeft item2">Attend team meeting on Tuesday</div>
                <div className="itemLeft item3">Complete project report</div>
                <div className="itemLeft item4">Schedule doctor’s appointment</div>
                <div className="itemLeft item5">Clean the house</div>
                <div className="itemLeft item6">Take Chompers to the vet</div>
                <div className="itemLeft item7">Pick up dry cleaning</div>
                <div className="itemLeft item8">Call Grandma</div>
              </div>
              <div className="wrapper">
                <div className="itemRight item1">Research vacation options</div>
                <div className="itemRight item2">Attend yoga class</div>
                <div className="itemRight item3">
                  Mail card to Sarah for her birthday
                </div>
                <div className="itemRight item4">Pick up Dylan from daycare</div>
                <div className="itemRight item5">Research vacation options</div>
                <div className="itemRight item6">Water all houseplants</div>
                <div className="itemRight item7">Buy replacement washer </div>
                <div className="itemRight item8">
                  Try making chicken tikka masala on Tuesday night
                </div>
              </div>
            </div>
            <Hero
              title="LoneStar"
              subtitle="Your AI-powered task management assistant that prioritizes tasks based on urgency, deadlines, and user habits."
              primaryCtaText="Get Started"
              primaryCtaLink={stackServerApp.urls.signUp}
              secondaryCtaText="GitHub"
              secondaryCtaLink="https://github.com/AlexanderO07"
            />
          </div>
      <div id="features" />
      <FeatureGrid
        title="Features"
        subtitle="Your Guiding Light for Productivity"
        items={[
          {
            icon: <Workflow className="h-12 w-12" />,
            title: "Streamlined Task Management",
            description:
              "CRUD functionality (Create, Read, Update, Delete) to manage tasks.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-12 w-12 fill-current"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="22"
                />
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="22"
                />
              </svg>
            ),
            title: "Fully Costumizable",
            description:
              "Modern and user-friendly task list for you to adjust to your own needs.",
          },
          {
            icon: <ServerCog className="h-12 w-12" />,
            title: "Chat History and Habit Analysis",
            description:
              "Storage of chats and data visualization for easier productivity.",
          },
          {
            icon: <Users className="h-12 w-12" />,
            title: "AI-Powered Task Prioritization",
            description:
              "The MLM used was trained on over 45 terabytes of data or 7.5 trillion words.",
          },
          {
            icon: <GitHubLogoIcon className="h-12 w-12" />,
            title: "100% Free and Open-source",
            description: "Source code and this app will always be availiable.",
          },
          {
            icon: <ComponentIcon className="h-12 w-12" />,
            title: "Modular Design",
            description: "Clear intructions to help you get started with.",
          },
        ]}
      />

      <div id="pricing" />
      <PricingGrid
        title="Pricing"
        subtitle="Flexible plans for all your needs."
        items={[
          {
            title: "Basic",
            price: "$0.00",
            description: "For individuals and small projects.",
            features: [
              "Full source code",
              "100% Open-source",
              "Community support",
              "Free forever",
              "No credit card required",
            ],
            buttonText: "Get Started",
            buttonHref: stackServerApp.urls.signUp,
          },
          {
            title: "Pro",
            price: "$0.00",
            description: "Ideal for growing teams and businesses.",
            features: [
              "Full source code",
              "100% Open-source",
              "Community support",
              "Free forever",
              "No credit card required",
              "Increased chat memory storage",
            ],
            buttonText: "Upgrade to Pro",
            isPopular: true,
            buttonHref: stackServerApp.urls.signUp,
          },
          {
            title: "Enterprise",
            price: "$0.00",
            description: "For large organizations.",
            features: [
              "Full source code",
              "100% Open-source",
              "VIP Community support",
              "Free forever",
              "No credit card required",
              "Maximum chat memory storage",
              "24/7 Developer Support",
            ],
            buttonText: "Contact Us",
            buttonHref: stackServerApp.urls.signUp,
          },
        ]}
      />
    </>
  );
}

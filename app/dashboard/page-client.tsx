"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";

export function PageClient() {
  const router = useRouter();
  const user = useUser({ or: "redirect" });
  const teams = user.useTeams();
  const [topicDisplayName, settopicDisplayName] = React.useState("");
  const [error, setError] = React.useState(""); // State for error messages

  React.useEffect(() => {
    if (teams.length > 0 && !user.selectedTeam) {
      user.setSelectedTeam(teams[0]);
    }
  }, [teams, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await user.createTeam({ displayName: topicDisplayName });
      // Optionally, reset the input field or navigate to another page
      settopicDisplayName(""); // Clear input
    } catch (error) {
      setError("Failed to create team. Please try again."); // Set error message
      console.error("Failed to create team:", error);
    }
  };

  if (teams.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="max-w-xs w-full">
          <h1 className="text-center text-2xl font-semibold">Welcome!</h1>
          <p className="text-center text-gray-500">
            Create a task topic to get started
          </p>
          {error && <p className="text-red-500 text-center">{error}</p>} {/* Error message display */}
          <form className="mt-4" onSubmit={handleSubmit}>
            <div>
              <Label className="text-sm">Topic name</Label>
              <Input
                placeholder="Topic name"
                value={topicDisplayName}
                onChange={(e) => settopicDisplayName(e.target.value)}
              />
            </div>
            <Button className="mt-4 w-full">Create Chat</Button>
          </form>
        </div>
      </div>
    );
  } else if (user.selectedTeam) {
    router.push(`/dashboard/${user.selectedTeam.id}`);
  }

  return null;
}

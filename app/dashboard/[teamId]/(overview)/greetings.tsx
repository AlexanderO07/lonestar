import { useEffect, useState } from "react";
import { CurrentUser } from '@stackframe/stack';
import '../../../globals.css' 

type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

interface GreetingsByTime {
  [key: string]: {
    greetings: string[];
    questions: string[];
  };
}

const greetingsByTime: GreetingsByTime = {
  morning: {
    greetings: ["Good morning", "Hope you slept well", "Nice to see you", "Hey there"],
    questions: ["Up early", "Ready to start the day", "How did you sleep"]
  },
  afternoon: {
    greetings: ["Good afternoon", "Welcome", "Good seeing you again", "Hi"],
    questions: ["Having a good day", "Enjoying your afternoon", "How's your day going"]
  },
  evening: {
    greetings: ["Good evening", "Hope you're having a great day", "Nice to see you"],
    questions: ["Had a good day", "Ready to wind down", "Any plans for the evening"]
  },
  night: {
    greetings: ["Good night", "Sleep well", "Sweet dreams", "Don't forget to rest"],
    questions: ["Up late tonight", "Working late", "Still going strong"]
  }
};

function getRandomGreeting() {
  const hour = new Date().getHours(); // Gets the current hour
  let timeOfDay: TimeOfDay;

  if (hour >= 5 && hour < 12) {
    timeOfDay = 'morning'; // Morning (5 AM - 12 PM)
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = 'afternoon'; // Afternoon (12 PM - 6 PM)
  } else if (hour >= 18 && hour < 20) {
    timeOfDay = 'evening'; // Evening (6 PM - 8 PM)
  } else {
    timeOfDay = 'night'; // Night (8 PM - 5 AM)
  }

  // Randomly choose between a greeting or a question 
  const isQuestion = Math.random() < 0.4; // 40% chance
  const greetingList = isQuestion ? greetingsByTime[timeOfDay].questions : greetingsByTime[timeOfDay].greetings;

  // Selecting a random greeting or question from the chosen list
  const randomGreeting = greetingList[Math.floor(Math.random() * greetingList.length)];
  
  //determine punctuation based on whether it's a question or a greeting
  const punctuation = isQuestion ? '?' : '!';

  return { greeting: randomGreeting, punctuation };
}

interface GreetingsProps {
  user: CurrentUser | null;
}

export function Greetings({ user }: GreetingsProps) {
  const [greetingMessage, setGreetingMessage] = useState<{ greeting: string; punctuation: string } | null>(null);

  // Only generate the greeting once on mount
  useEffect(() => {
    if (!greetingMessage) {
      const { greeting, punctuation } = getRandomGreeting();
      setGreetingMessage({ greeting, punctuation });
    }
  }, [greetingMessage]);

  const displayName = user?.displayName || (user?.primaryEmail ? user.primaryEmail.split('@')[0] : "user");

  //render if the greeting has been set
  return (
    <span className="ogreeting" style={{ position: "relative", display: "flex", flexWrap: "wrap" }}>
      {greetingMessage ? `${greetingMessage.greeting}, ${displayName}${greetingMessage.punctuation}` : ''}
    </span>
  );
}

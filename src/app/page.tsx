"use client";

import { useQuery } from "convex/react";
import { Authenticated, Unauthenticated } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Authenticated>
        <h1>You are logged in!</h1>
        <div className="mt-4">
          <h2 className="font-bold mb-2">Tasks:</h2>
          {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
        </div>
      </Authenticated>
      <Unauthenticated>
        <h1>Please sign in to see tasks</h1>
      </Unauthenticated>
    </main>
  );
}

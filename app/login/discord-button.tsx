"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";

export default function DiscordButton() {
  const supabase = createClientComponentClient<Database>();
  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <button
      onClick={handleSignIn}
      className="hover:bg-gray-800 p-4 rounded-xl flex items-center"
    >
      <Image
        src="/discord-mark-blue.png"
        alt="Discord logo"
        width={50}
        height={50}
      />
      <span className="text-gray-400 text-xl ml-4">Sign in with Discord</span>
    </button>
  );
}

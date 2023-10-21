"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";

export default function GithubButton() {
  const supabase = createClientComponentClient<Database>();
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
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
        src="/github-mark-white.png"
        alt="GitHub logo"
        width={50}
        height={50}
      />
      <span className="text-gray-400 text-xl ml-4">Sign in with GitHub</span>
    </button>
  );
}

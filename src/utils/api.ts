import { CDN_ENDPOINT } from "../../config";
import { getAll } from "@vercel/edge-config";

export async function fetchUser() {
  const res = await fetch("/api/user", {
    credentials: "include",
  });

  // optional: use zod
  return (await res.json()) as User;
}

export function resolveUserAvatar(user: User) {
  if (user.avatar)
    return `${CDN_ENDPOINT}/avatars/${user.id}/${user.avatar}.${
      user.avatar.startsWith("a_") ? "gif" : "png"
    }`;

  return `${CDN_ENDPOINT}/embed/avatars/${user.discriminator % 5}.png`;
}

export type User = {
  id: string;
  username: string;
  discriminator: number;
  avatar?: string;
};

export async function fetchGuild() {
  const config = await getAll<{
    guilds: number;
    members: number;
  }>(["guilds", "members"]);

  return {
    serverMembers: config?.members || 10000,
    guildCount: config?.guilds || 100_000,
  } as const;
}

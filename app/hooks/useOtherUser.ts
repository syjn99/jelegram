import { User } from "@prisma/client";
import { FullConversationType } from "../types";
import { useSession } from "next-auth/react";
import { useMemo } from "react";

export default function useOtherUser(
  conversation:
    | FullConversationType
    | {
        users: User[];
      }
) {
  const session = useSession();

  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;

    const _otherUsers = conversation.users.filter((user) => user.email !== currentUserEmail);

    return _otherUsers[0];
  }, [session?.data?.user?.email, conversation.users]);

  return otherUser;
}

"use server";

import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const actionsOnUser = async (action: string, id: string) => {
  const session = await getServerSession(authOption);
//   if (!session || session.data.role !== "ADMIN") {
//     console.log("no session");
//     return null;
//   }

console.log(action,id)
  try {
    const res = await fetch(
      `http://localhost:8000/user/actionOnUser?action=${action}&userId=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data);
    revalidateTag("doctor_verify");

    return data;
  } catch (error) {
    console.log(error);
  }
};




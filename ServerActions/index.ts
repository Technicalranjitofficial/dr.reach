"use server";

import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const changeSession = async () => {
  const session = await getServerSession(authOption);

  if (session)
    // session.user.email = "ram@kiit.ac.in";

    console.log(session);

  return session;
};

export const updateUser = async (data: any) => {
  console.log(data);
  try {
    const res = await fetch("http://localhost:8000/user/updateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      const data = await res.json();

      // console.log("Updated",session);
      return data;
    }

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const createDoctorProfile = async () => {
  const session = await getServerSession(authOption);
  if (!session) {
    console.log("no session");
    return null;
  }
  try {
    const res = await fetch(`http://localhost:8000/user/createDoctorProfile/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session?.data.id,
      }),

      

    });

    const data = await res.json();

    revalidateTag("ApplyDoctor")
    
    return data;
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};


export const updateDoctorProfile=async(data:any)=>{
  console.log(data);
  try {
    const res = await fetch("http://localhost:8000/user/updateDoctorProfile",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    });
    console.log(res);
    revalidateTag("ApplyDoctor")
    return {
      status:201,
      message:"Doctor Profile Updated",
      data:await res.json()
    
    };
  } catch (error) {
    console.log(error);
  }
}
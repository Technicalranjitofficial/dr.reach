import ApplyDoctor from "@/components/buttons/ApplyDoctor";
import DoctorsProfileSettings from "@/components/doctor/dashboard/DoctorsProfileSettings";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOption);
  if (!session || !session?.data?.id) return <div>Not Authorized</div>;
  const res = await fetch(
    `http://localhost:8000/user/getDoctor/${session.data.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next:{
        tags:['ApplyDoctor']
      }
    }
  );

  console.log(res.status);
  if (res.status === 404) {
    return (
      <div>
        <ApplyDoctor />
      </div>
    );
  }
  const doctorProfile = await res.json();

  return <div>
    <DoctorsProfileSettings/>
  </div>;
};

export default page;

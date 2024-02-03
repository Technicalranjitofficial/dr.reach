import Header from "@/components/Landing/Header";
import MeetDoctors from "@/components/Landing/MeetDoctors/MeetDoctors";
import { Services } from "@/components/Landing/Services/Services";
import Dashboard from "@/components/dashboard/Dashboard";
import Login from "@/components/dashboard/Login";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session  =await getServerSession(authOption);

  console.log(session)

  if(session && session.data.role === "NORMAL"){
    return redirect("/user/dashboard");
  }else if(session && session.data.role === "DOCTOR"){
    return redirect("/doctor/dashboard");
  }
  return (
 
    <>
    <Header/>
      <Services/>
      <MeetDoctors/>
    </>

  );
}

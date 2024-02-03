
import TagInput from '@/components/Input/TagsInput'

import DoctorDashboard from './DoctorDashboard'
import { getServerSession } from 'next-auth';
import { authOption } from '@/lib/AuthOptions/authOptions';
import { redirect } from 'next/navigation';

const DoctorsProfileSettings = async() => {
  const session = await getServerSession(authOption);
  if(!session || !session.user){
    return redirect("/")
  }


  const res = await fetch(`http://localhost:8000/user/getDoctor/${session.data.id}`,{
    method:"GET",
    headers: {
      "Content-Type": "application/json",
    },
    next:{
      tags:['ApplyDoctor']
    }
  });

  const data = await res.json();

  // const d = {};

  console.log(data);



  return (
 <DoctorDashboard datas={data}/>

  )
}

export default DoctorsProfileSettings
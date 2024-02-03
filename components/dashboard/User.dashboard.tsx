import React from "react";
import AppointmentUserTable from "../User/AppointmentUserTable";
import FindDoctors from "../User/dashboard/FindDoctors";

const data = [
  {
    doctorName: "Dr. Ruby Perrin",
    doctorImage: "/assets/doctor-1.jpg",
    AppointmentDate: "14 Nov 2019",
    BookedDate: "12 Nov 2019",
    Amount: "$160",
    status: "Confirmed",
    specialization: "MBBS",
  },

  {
    doctorName: "Dr. Ramesh Thakur",
    doctorImage: "/assets/doctor-2.jpg",
    AppointmentDate: "15 Nov 2021",
    BookedDate: "13 Nov 2022",
    Amount: "$505",
    status: "Pending",
    specialization: "Teeth",
  },
];
const UserDashboard = () => {
  return (
  //  <FindDoctors/>
  <h1>Helo</h1>
  );
};

export default UserDashboard;

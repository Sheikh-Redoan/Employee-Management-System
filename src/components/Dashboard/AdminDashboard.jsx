import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10 text-white">
      <Header></Header>
      <CreateTask></CreateTask>
      <AllTask></AllTask>
    </div>
  );
};

export default AdminDashboard;

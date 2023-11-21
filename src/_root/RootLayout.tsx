import Bottombar from "@/components/ui/shared/Bottombar";
import LeftSiderbar from "@/components/ui/shared/LeftSiderbar";
import Topbar from "@/components/ui/shared/Topbar";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSiderbar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <Bottombar />
    </div>
  );
};

export default RootLayout;

import { FC, ReactNode } from "react";
import Sidebar from "../../_components/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="h-full pt-3">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50" >
      </div>
      <div className=" hidden md:flex w-56 flex-col fixed inset-y-0 z-50 ">
      <Sidebar/>
      </div>
      <main className="md:pl-56  h-full">
      {children}

      </main>
      </div>
  );
};

export default DashboardLayout;

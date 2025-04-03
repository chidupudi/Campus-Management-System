import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Calendar from "react-calendar";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BoyIcon from "@mui/icons-material/Boy";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import Notice from "../notices/Notice";
import ShowNotice from "../notices/ShowNotice";
import ReplyIcon from "@mui/icons-material/Reply";

const Body = () => {
  const [open, setOpen] = useState(false);
  const [openNotice, setOpenNotice] = useState({});
  const notices = useSelector((state) => state.admin.notices.result);
  const [value, onChange] = useState(new Date());
  const students = useSelector((state) => state.admin.allStudent);
  const faculties = useSelector((state) => state.admin.allFaculty);
  const admins = useSelector((state) => state.admin.allAdmin);
  const departments = useSelector((state) => state.admin.allDepartment);

  // New color scheme
  const colors = {
    facultyIcon: "bg-purple-100 text-purple-600",
    studentIcon: "bg-teal-100 text-teal-600",
    adminIcon: "bg-amber-100 text-amber-600",
    deptIcon: "bg-pink-100 text-pink-600",
    cardBg: "bg-white",
    calendarBg: "bg-white",
    noticeBg: "bg-white",
    border: "border-gray-200",
    textPrimary: "text-gray-800",
    textSecondary: "text-gray-600"
  };

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className={`flex ${colors.textSecondary} items-center space-x-2`}>
          <HomeIcon />
          <h1>Dashboard</h1>
        </div>
        <div className="flex flex-col mr-5 space-y-4 overflow-y-hidden">
          <div className={`${colors.cardBg} h-[8rem] rounded-xl shadow-lg grid grid-cols-4 justify-between px-8 items-center space-x-4`}>
            <div className="flex items-center space-x-4 border-r-2">
              <EngineeringIcon
                className={`rounded-full py-2 ${colors.facultyIcon}`}
                sx={{ fontSize: 40 }}
              />
              <div className="flex flex-col">
                <h1 className={colors.textSecondary}>Faculty</h1>
                <h2 className="text-2xl font-bold text-purple-700">{faculties?.length}</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-r-2">
              <BoyIcon
                className={`rounded-full py-2 ${colors.studentIcon}`}
                sx={{ fontSize: 40 }}
              />
              <div className="flex flex-col">
                <h1 className={colors.textSecondary}>Student</h1>
                <h2 className="text-2xl font-bold text-teal-700">{students?.length}</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-r-2">
              <SupervisorAccountIcon
                className={`rounded-full py-2 ${colors.adminIcon}`}
                sx={{ fontSize: 40 }}
              />
              <div className="flex flex-col">
                <h1 className={colors.textSecondary}>Admin</h1>
                <h2 className="text-2xl font-bold text-amber-700">{admins?.length}</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MenuBookIcon
                className={`rounded-full py-2 ${colors.deptIcon}`}
                sx={{ fontSize: 40 }}
              />
              <div className="flex flex-col">
                <h1 className={colors.textSecondary}>Department</h1>
                <h2 className="text-2xl font-bold text-pink-700">{departments?.length}</h2>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-4 w-2/6">
              <div className={`${colors.calendarBg} h-[17rem] rounded-xl shadow-lg`}>
                <Calendar 
                  onChange={onChange} 
                  value={value} 
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className={`${colors.noticeBg} h-[17rem] w-full rounded-xl shadow-lg flex flex-col pt-3`}>
              <div className="flex px-3">
                {open && (
                  <ReplyIcon
                    onClick={() => setOpen(false)}
                    className="cursor-pointer text-gray-600 hover:text-gray-800"
                  />
                )}
                <h1 className={`font-bold text-xl w-full text-center ${colors.textPrimary}`}>
                  Notices
                </h1>
              </div>
              <div className="mx-5 mt-5 space-y-3 overflow-y-auto h-[12rem]">
                {!open ? (
                  notices?.map((notice, idx) => (
                    <div
                      onClick={() => {
                        setOpen(true);
                        setOpenNotice(notice);
                      }}
                      className="hover:bg-gray-50 rounded-lg p-1 cursor-pointer"
                    >
                      <Notice idx={idx} notice={notice} notFor="" />
                    </div>
                  ))
                ) : (
                  <ShowNotice notice={openNotice} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import chevron from "../assets/chevron.png";
import { useGetUserScheduleMutation } from "../redux/slices/compaxApiSlice";
import { useEffect, useState } from "react";

const SchedulePage = () => {
  const data = JSON.parse(localStorage.userInfo ?? null);
  const [getUserSchedule] = useGetUserScheduleMutation();
  const [schedule, setShedule] = useState([]);
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();

    // Get the day of the week as a number (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = currentDate.getDay();

    // Define an array with the names of the days of the week
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Get the name of the current day based on the dayOfWeek value
    const dayName = daysOfWeek[dayOfWeek];

    // Update the state with the current day name
    setCurrentDay(dayName);
  }, []);
  useEffect(() => {
    const getSchedule = async () => {
      const res = await getUserSchedule({
        year_group: data.year_group,
        department: data.department,
      });
      setShedule(res.data);
      console.log(schedule);
      console.log(res);
    };
    getSchedule();
  }, []);

  return (
    <div className=" flex  flex-col items-center justify-center space-y-5 ">
      <h1 className="text-[20px] font-semibold">Your Schedule For Today</h1>
      <div className="flex  items-center justify-center">
        <div
          style={{
            background: "#CDE5CE",
            boxShadow: "0px 4px 44px rgba(0, 0, 0, 0.06)",
            borderRadius: "10px",
          }}
          className="flex h-[109px] p-2 space-x-4 max-w-md w-[350px]  items-center"
        >
          <div className="w-[57px] h-[57px] bg-[#F4850B]  ">
            {" "}
            <img src={profile2} alt="" />
          </div>
          <div className="">
            <p className="text-[#ABABAB] text-[18px]">{data.username}</p>
            <p className=" text-[25px]">{currentDay}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "white",
          boxShadow: "0px 4px 47px rgba(48, 5, 7, 0.08)",
          borderRadius: "10px",
        }}
        className=" h-full flex justify-center p-5  items-center flex-col m-3 max-w-md w-full  "
      >
        <div className="grid grid-cols-2 gap-5">
          {schedule &&
            schedule?.map((item) => (
              <div className=" rounded-[20px] px-[25px] py-[15px] bg-[#F5F5F5]">
                <h1 className="  font-semibold">
                  {" "}
                  {item?.course_code}-{item?.course_name}
                </h1>
                <p className=" text-[#f4850b]">location:{item?.class_name}</p>
                <p>
                  {item?.start_time}-{item?.end_time}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;

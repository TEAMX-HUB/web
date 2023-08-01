import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import chevron from "../assets/chevron.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const data = JSON.parse(localStorage.userInfo ?? null);
  const navigate = useNavigate();
  return (
    <div className=" flex  flex-col items-center justify-center space-y-5 ">
      <h1 className="text-[20px] font-semibold text-[25px]"> Your Profile</h1>
      <div className="flex ">
        <div
          style={{
            background: "#CDE5CE",
            boxShadow: "0px 4px 44px rgba(0, 0, 0, 0.06)",
            borderRadius: "10px",
          }}
          className="flex h-[109px] gap-5 p-2  max-w-md w-[350px]  items-center"
        >
          <div className="w-[57px] h-[57px] bg-[#F4850B]  ">
            <img src={profile2} alt="" />
          </div>
          <div className=" ">
            <h1 className=" max-w-md text-[20px]">{data.student_reference}</h1>
            <p className="text-[#ABABAB] text-[18px]">{data.username}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "white",
          boxShadow: "0px 4px 47px rgba(48, 5, 7, 0.08)",
          borderRadius: "10px",
        }}
        className=" h-[350px]  px-[1%] pt-[5%] m-3 max-w-md w-full  "
      >
        <div
          onClick={() => {
            navigate("/schedule");
          }}
          className="flex  cursor-pointer items-center p-5 space-x-4"
        >
          <div className="w-[40px] h-[40px]">
            <img src={profile} alt="" />
          </div>
          <div className=" max-w-md  ">
            <h1>My Schedule</h1>
            <p className=" max-w-md  text-[11px]   ">Get Today's schedule</p>
          </div>
          <div className="px-[50px] ">
            <img src={chevron} alt="" />
          </div>
        </div>
        <div className="flex items-center p-5 space-x-4">
          <div className="w-[40px] h-[40px]">
            <img src={profile} alt="" />
          </div>
          <div className=" max-w-md  ">
            <h1>{data.department}</h1>
            <p className=" max-w-md  text-[11px]   ">Year {data.year_group}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

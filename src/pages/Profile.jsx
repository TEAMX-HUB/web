import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import chevron from "../assets/chevron.png";

const Profile = () => {
  return (
    <div className=" space-y-5 ">
      <h1 className="text-[20px]">Profile</h1>
      <div className="flex items-center justify-center">
        <div
          style={{
            background: "#CDE5CE",
            boxShadow: "0px 4px 44px rgba(0, 0, 0, 0.06)",
            borderRadius: "10px",
          }}
          className="flex h-[109px] p-2 space-x-4 max-w-md w-[383px]  items-center"
        >
          <div className="w-[57px] h-[57px] bg-[#F4850B]  ">
            {" "}
            <img src={profile2} alt="" />
          </div>
          <div className="">
            <h1 className="text-[20px]">Itunuoluwa Abidoye</h1>
            <p className="text-[#ABABAB] text-[18px]">
              Itunuoluwa@petra.africa
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "white",
          boxShadow: "0px 4px 47px rgba(48, 5, 7, 0.08)",
          borderRadius: "10px",
        }}
        className=" h-[350px] m-3 max-w-md w-[383px]  "
      >
        <div className="flex items-center p-5 space-x-4">
          <div className="w-[40px] h-[40px]">
            <img src={profile} alt="" />
          </div>
          <div className=" max-w-md  ">
            <h1>My Accounts</h1>
            <p className=" max-w-md  text-[11px]   ">
              make changes to your account
            </p>
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
            <h1>My Schedule</h1>
            <p className=" max-w-md  text-[11px]   ">
              Manage your saved account
            </p>
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
            <h1>BSC Computer Engineering</h1>
            <p className=" max-w-md  text-[11px]   ">
              College of Engineering, FECE.
            </p>
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
            <h1>Change Account Details</h1>
            <p className=" max-w-md  text-[11px]   ">
              Update Username and Password
            </p>
          </div>
          <div className="px-[50px] ">
            <img src={chevron} alt="" />
          </div>
        </div>
      </div>
      <div className="">
        <h1>previously searched classes</h1>
      </div>
    </div>
  );
};

export default Profile;

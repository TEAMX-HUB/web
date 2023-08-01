import React from "react";
import Map from "./Map";
import image from "../assets/compax.png";
import menu from "../assets/menu.png";
import Input from "../components/reusables/Input";
import Button from "../components/reusables/Button";
const btn = {
  width: "100%",
  background: "#CDE5CE",
  color: "black",
};
const MapPage = () => {
  return (
    <div>
      <div className="fixed  top-0 z-40 flex px-3 justify-between  items-center left-0 w-full">
        <div className="w-[57px] h-[57px]">
          {" "}
          <img src={image} alt="" />
        </div>
        <div className="">
          <img src={menu} alt="" />
        </div>
      </div>
      <Map />
      <div
        style={{
          background: "white",
          boxShadow: "0px 4px 47px rgba(48, 5, 7, 0.08)",
          borderRadius: "30px",
        }}
        className=" h-[400px] space-y-4 p-4 fixed bottom-0  left-0  w-full  "
      >
        <h1 className="text-[20px]">Select Location</h1>
        <Input placeholder="search location here" />
        <p>Save as</p>
        <div className="grid grid-cols-2 gap-4">
          <div className=" w-full h-[40px] bg-[#F5F5F5] ">
            <p>classrooms</p>
          </div>
          <div className=" w-full h-[40px] bg-[#F5F5F5]">
            <p>stuff offices</p>
          </div>
          <div className=" w- h-[40px] bg-[#F5F5F5]">
            <p>lecture halls</p>
          </div>
          <div className=" w-full h-[40px] bg-[#F5F5F5]">
            <p>laboratories</p>
          </div>
        </div>
        <Button style={btn}>search for location</Button>
      </div>
    </div>
  );
};

export default MapPage;

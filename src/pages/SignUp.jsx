import Input from "../components/reusables/Input";
import arrow from "../assets/arrow.png";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

import compax from "../assets/compax.png";
import Button from "../components/reusables/Button";
import { Link } from "react-router-dom";
const btn = {
  width: "259px",
  background: "#CDE5CE",
  color: "black",
};

const supabaseUrl = "https://begwammyzvzoyqntgxml.supabase.co"; // Replace with your Supabase URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZ3dhbW15enZ6b3lxbnRneG1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2NjkwMjUsImV4cCI6MjAwNjI0NTAyNX0.a3lB_NM1DSYXXzyPQnoroo7o5hEGG0bYngyDmYcVR90"; // Replace with your Supabase anonymous key or public key

const supabase = createClient(supabaseUrl, supabaseKey);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
      console.log(user);
      if (error) throw error;
      setUser(user);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center  p-6 space-x-[100px]">
        <Link to="/login">
          {" "}
          <div className="">
            {" "}
            <img src={arrow} alt="" />
          </div>
        </Link>
        <h1 className="text-[20px]">SIGNUP</h1>
      </div>
      <div className="flex flex-col items-center space-y-[40px] pt-6 ">
        <div className="flex flex-col items-center">
          <img src={compax} alt="" />
        </div>
        <div className="">
          <Input
            id="name"
            style={{ width: "300px" }}
            placeholder="What’s your first name?"
          />
          <Input id="name" placeholder="And your last name?" />
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "300px" }}
            placeholder="student mail"
          />

          <Input
            id="name"
            type="password"
            style={{ width: "300px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type in Your Password"
          />
        </div>
        <Button onClick={handleSignUp} style={btn}>
          SignUp
        </Button>
      </div>
    </>
  );
};

export default SignUp;

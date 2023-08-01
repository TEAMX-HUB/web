import Input from "../components/reusables/Input";
import arrow from "../assets/arrow.png";
import { createClient } from "@supabase/supabase-js";
import compax from "../assets/compax.png";
import Button from "../components/reusables/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const btn = {
  width: "259px",
  background: "#CDE5CE",
  color: "black",
};

const supabaseUrl = "https://begwammyzvzoyqntgxml.supabase.co"; // Replace with your Supabase URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZ3dhbW15enZ6b3lxbnRneG1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2NjkwMjUsImV4cCI6MjAwNjI0NTAyNX0.a3lB_NM1DSYXXzyPQnoroo7o5hEGG0bYngyDmYcVR90"; // Replace with your Supabase anonymous key or public key

const supabase = createClient(supabaseUrl, supabaseKey);
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(res);
      if (res.data) {
        navigate("/map");
      } else {
        alert("hello");
      }

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
        <Link to="/">
          {" "}
          <div className="">
            {" "}
            <img src={arrow} alt="" />
          </div>
        </Link>
        <h1 className="text-[20px]">LOGIN</h1>
      </div>
      <div className="flex flex-col items-center space-y-[80px] pt-6 ">
        <div className="flex flex-col items-center">
          <h1
            className="text-[60px]"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundImage:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(180,45,191,1) 41%, rgba(0,212,255,1) 100%)",
            }}
          >
            COMPAX
          </h1>

          <img src={compax} alt="" />
        </div>
        <div className="">
          <Input
            id="name"
            style={{ width: "300px" }}
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="student mail"
          />
          <Input
            id="name"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type in your password"
          />
        </div>
        <div className="space-y-5">
          <Button onClick={handleLogin} style={btn}>
            Login
          </Button>
          <p>
            Dont have an account?
            <Link to="/signup">
              <span className=" px-2 text-red-300 text-center">Signup</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

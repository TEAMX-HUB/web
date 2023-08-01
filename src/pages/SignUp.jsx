import Input from "../components/reusables/Input";
import arrow from "../assets/arrow.png";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import compax from "../assets/compax.png";
import Button from "../components/reusables/Button";
import { Link } from "react-router-dom";
import { setCredentials } from "../redux/slices/authSlice";
import { useCreateUserMutation } from "../redux/slices/compaxApiSlice";
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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [ref, setRef] = useState();
  const [createUser] = useCreateUserMutation();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.userInfo ?? null);
  console.log(data);

  const handleSignUp = async () => {
    try {
      const res = await supabase.auth.signUp({
        email,
        password,
      });
      console.log(res);
      const user = await createUser({
        id: res.data.user.id,
        username: email,
        student_reference: ref,
        department: selectedDepart,
        year_group: selectedYear,
        password: password,
        created_at: "2022-07-31T22:22:51.236Z",
        is_classrep: false,
        is_admin: false,
        is_deleted: false,
        is_exams_officer: false,
      });
      console.log(user);
      if (user) {
        navigate("/map");
      }
      const userData = {
        id: res.data.user.id,
        username: email,
        student_reference: ref,
        department: selectedDepart,
        year_group: selectedYear,
        password: password,
        created_at: "2022-07-31T22:22:51.236Z",
        is_classrep: false,
        is_admin: false,
        is_deleted: false,
        is_exams_officer: false,
      };
      console.log(userData);
      dispatch(setCredentials(JSON.stringify(userData)));
      if (res.data) {
        alert("account created successfully");
      }
      console.log(res);
      if (error) throw error;
      setUser(res.data);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };
  const [selectedYear, setSelectedYear] = useState();
  const [selectedDepart, , setSelectedDepart] = useState(
    "Computer Engineering"
  );

  const handleCategoryChange = (e) => {
    setSelectedYear(e.target.value);
  };
  const handleDepart = (e) => {
    setSelectedDepart(e.target.value);
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
            id="ref"
            value={ref}
            onChange={(e) => setRef(e.target.value)}
            type="number"
            placeholder="reference number"
          />
          <select
            className=" w-[300px] mb-[10px] h-[5vh] ring-2 rounded-[37px] pl-[4%] ring-red-500"
            value={selectedYear}
            onChange={handleCategoryChange}
          >
            <option value={1}>1</option>
            <option value={2}>year 2</option>
            <option value={3}>year 3</option>
          </select>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "300px" }}
            placeholder="student mail"
          />
          <select
            className=" w-[300px] mb-[10px] h-[5vh] ring-2 rounded-[37px] pl-[4%] ring-red-500"
            value={selectedDepart}
            onChange={handleDepart}
          >
            <option value="Computer Engineering">Computer engineering</option>
          </select>

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

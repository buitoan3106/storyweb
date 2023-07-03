import DefaultLayout from "../layouts/defaultlayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const navigate = useNavigate();

    const user = [username, password, email, name, age];
    if (user != null) {
      fetch("http://localhost:9999/users", {
        method: "POST",
        headers: { "Content-Type": "Application/Json" },
        body: JSON.stringify(user),
      })
        .then(() => {
          alert("Add new success.");
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <DefaultLayout>
      <div className="row">
        <div className="col-lg-6" style={{ borderRight: "1px solid white" }}>
          <h3>Sign Up</h3>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <label>
              Username:<br></br>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </label>
            <br></br>
            <label>
              Password:<br></br>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </label>
            <br></br>
            <label>
              Name:<br></br>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </label>
            <br></br>
            <label>
              Age:<br></br>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
              />
            </label>
            <br></br>
            <label>
              Email:<br></br>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
              />
            </label>
            <br></br>
            <button type="submit">Register Now</button>
          </form>
          <br />
          <br />
          <p>
            Already have an account?{" "}
            <a href="/login" style={{ color: "red" }}>
              Log In!
            </a>
          </p>
        </div>

        <div className="col-lg-6">
          <img
            src={require("../components/image/11.jpg")}
            style={{ width: "70%" }}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}

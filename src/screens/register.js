import DefaultLayout from "../layouts/defaultlayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [id, setId] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isAdmin, setisAdmin] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { id, username, password, email, name, age, isAdmin };
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
      <div className="container">
        <div className="row">
          <div className="col-lg-6 border-right-white">
            <h3>Sign Up</h3>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <label value={id} disabled></label>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input
                  type="number"
                  className="form-control"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter your age"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Register Now
              </button>
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
              alt="Image"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

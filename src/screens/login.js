import DefaultLayout from "../layouts/defaultlayout";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <DefaultLayout>
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

        <button type="submit">Login</button>
      </form>
    </DefaultLayout>
  );
}

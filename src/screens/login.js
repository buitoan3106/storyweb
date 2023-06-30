import DefaultLayout from "../layouts/defaultlayout";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
    };
    return (
        <DefaultLayout>

            <div className="row login">
                <div className="col-lg-6">
                    <div className="row">
                        <h3>Login</h3>
                        <br />
                        <br />
                        <form onSubmit={handleSubmit}>
                            <label>
                                Username<br></br>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
                            </label>
                            <br />
                            <br />
                            <label>
                                Password<br></br>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                            </label>
                            <br></br>



                            <div className="row">
                                <div className="col-lg-6" style={{ paddingLeft: '50px' }}>
                                    <button type="submit">Login Now</button>
                                </div>

                                <div className="col-lg-6" style={{ marginTop: '25px' }}>
                                    <a href="/">Forgot Your Password?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <br />
                    <br />

                </div>

                <div className="col-lg-6" style={{ borderLeft: '1px solid white' }}>
                    <div style={{ marginLeft: '30px' }}>
                        <h3>Don’t Have An Account?</h3>
                        <button type="submit">Rigister Now</button>
                    </div>
                </div>
            </div>

        </DefaultLayout>
    )
}

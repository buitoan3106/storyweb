import DefaultLayout from "../layouts/defaultlayout";
import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${username}, Password: ${password}, Name: ${name}, Age: ${age}, Email: ${email}`);
    };

    return (
        <DefaultLayout>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6" style={{ borderRight: '1px solid white' }}>
                        <h3>Sign Up</h3>
                        <br />
                        <br />
                        <label>
                            Username:<br></br>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
                        </label><br></br>
                        <label>
                            Password:<br></br>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                        </label><br></br>
                        <label>
                            Name:<br></br>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                        </label><br></br>
                        <label>
                            Age:<br></br>
                            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" />
                        </label><br></br>
                        <label>
                            Email:<br></br>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
                        </label><br></br>
                        <button type="submit">Register Now</button>
                        <br />
                        <br />
                        <p>Already have an account? <a href="/login" style={{ color: 'red' }}>Log In!</a></p>
                    </div>

                    <div className="col-lg-6">
                        <img src={require("../components/image/11.jpg")} style={{ width: '80%' }} alt="" />
                    </div>

                </div>


            </form>
        </DefaultLayout>
    );
}
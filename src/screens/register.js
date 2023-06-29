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
                <label>
                    Username:<br></br>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username"/>
                </label><br></br>
                <label>
                    Password:<br></br>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
                </label><br></br>
                <label>
                    Name:<br></br>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
                </label><br></br>
                <label>
                    Age:<br></br>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age"/>
                </label><br></br>
                <label>
                    Email:<br></br>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email"/>
                </label><br></br>
                
                <button type="submit">Register</button>
            </form>
        </DefaultLayout>
    );
}
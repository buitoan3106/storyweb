import DefaultLayout from "../layouts/defaultlayout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:9999/users/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username', username);
                        sessionStorage.setItem('userrole', resp.role);
                        usenavigate('/')
                    } else {
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }


    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <DefaultLayout >
            <ToastContainer />
            <form onSubmit={ProceedLogin}>
                <div className="row">
                    <div className="col-lg-6">
                        <h3>Login</h3>
                        <br />
                        <br />
                        <label>User Name <span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <input type="text" value={username} onChange={e => usernameupdate(e.target.value)} ></input>
                        <br />
                        <br />
                        <label>Password <span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} ></input>
                        <br></br>
                        <div className="row">
                            <div className="col-lg-6" style={{ paddingLeft: '50px' }}>
                                <button type="submit">Login Now</button>
                            </div>
                            <div className="col-lg-6" style={{ marginTop: '25px' }}>
                                <a href="/">Forgot Your Password?</a>
                            </div>
                        </div>
                        <br />
                        <br />

                    </div>

                    <div className="col-lg-6" style={{ borderLeft: '1px solid white' }}>
                        <div style={{ marginLeft: '30px' }}>
                            <h3>Dont’t Have An Account?</h3>
                            <button type="submit">Rigister Now</button>
                        </div>
                    </div>
                </div>
            </form>
            <br />
            <br />
        </DefaultLayout>
    );
}

// import DefaultLayout from "../layouts/defaultlayout";
// import React, { useState } from "react";

// export default function Login() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(`Username: ${username}, Password: ${password}`);
//     };
//     return (
//         <DefaultLayout>

//             <div className="row login">
//                 <div className="col-lg-6">
//                     <div className="row form-login">
//                         <h3>Login</h3>
//                         <br />
//                         <br />
//                         <form onSubmit={handleSubmit}>
//                             <label>
//                                 Username<br></br>
//                                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
//                             </label>
//                             <br />
//                             <br />
//                             <label>
//                                 Password<br></br>
//                                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
//                             </label>
//                             <br></br>



//                             <div className="row">
//                                 <div className="col-lg-6" style={{ paddingLeft: '50px' }}>
//                                     <button type="submit">Login Now</button>
//                                 </div>

//                                 <div className="col-lg-6" style={{ marginTop: '25px' }}>
//                                     <a href="/">Forgot Your Password?</a>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                     <br />
//                     <br />

//                 </div>

//                 <div className="col-lg-6" style={{ borderLeft: '1px solid white' }}>
//                     <div style={{ marginLeft: '30px' }}>
//                         <h3>Don’t Have An Account?</h3>
//                         <button type="submit">Rigister Now</button>
//                     </div>
//                 </div>
//             </div>

//         </DefaultLayout>
//     )
// }

import DefaultLayout from "../layouts/defaultlayout";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
            fetch("http://localhost:9999/users?username=" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp[0].password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username', username);
                        sessionStorage.setItem('isAdmin', resp[0].isAdmin);
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

    console.log(password);
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
            <form onSubmit={ProceedLogin} style={{marginLeft:'-100px'}}>
                <div className="row">
                    <div className="col-lg-6">
                        <h3>Login</h3>
                        <br />
                        <br />
                        <label>User Name <span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <input type="text" value={username} onChange={e => usernameupdate(e.target.value)} placeholder="Tên Đăng Nhập" style={{width:'90%'}}></input>
                        <br />
                        <br />
                        <label>Password <span style={{ color: 'red' }}>*</span></label>
                        <br />
                        <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} placeholder="Mật khẩu" style={{width:'90%'}}></input>
                        <br></br>
                        <div className="row">
                            <div className="col-lg-6" style={{ paddingLeft: '50px' }}>
                                <button type="submit">Đăng Nhập</button>
                            </div>
                            <div className="col-lg-6" style={{ marginTop: '25px' }}>
                                <a href="/">Quên Mật Khẩu?</a>
                            </div>
                        </div>
                        <br />
                        <br />

                    </div>

                    <div className="col-lg-6" style={{ borderLeft: '1px solid white'}}>
                        <div style={{ marginLeft: '30px' }}>
                            <h3>Chưa có tài khoản</h3>
                            <button type="submit">
                                <Link to={'/register'} style={{color:'white'}}>Đăng ký ngay</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <br />
            <br />
        </DefaultLayout>
    );
}


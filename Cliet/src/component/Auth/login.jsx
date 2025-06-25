import './log.css'
import { useState } from 'react';
import axios from 'axios';


export default function Login(){


    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    const login = async (e) => {
        e.preventDefault();
        try {
            const res = axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {email,password})

                localStorage.setItem('token', res.data.token);
                window.location.href = '/';
            }
            
        catch (error) {
            console.log('Error:', error);
        }

    }

    return(
        <div>
            <div className='loginmain'>
                <div className="login">
                    <h2>Login</h2>
                    <div className='input'>Email :  <input type="text"  placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/></div>
                    <div className='input'>Password :  <input type="password"  placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/></div>
                    <a href="">Forget Password</a>
                    <div>
                        <button className='Loginbtn' onClick={login}>Login</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
import './log.css'
import { useState } from 'react';
import axios from 'axios'
export default function SignUp(){
        const [name,setName]= useState('');
        const [email,setEmail]= useState('');
        const [password,setPassword]= useState('');

    const sign= async (e) => {
        e.preventDefault();
        try {
            const res =axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/signup`, {name,email,password})
                localStorage.setItem('token', res.data.token);
                window.location.href = '/';
            }
            
        catch (error) {
            console.log('Error:', error);
        }

    }

    return(
        <div>
            <div className='signupmain'>
                <div className="signup">
                    <h2>Sign Up</h2>
                    <div className="input">Name : <input type="text"  placeholder="Name" onChange={(e)=>setName(e.target.value)}/></div>
                    <div className='input'>Email :  <input type="text"  placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/></div>
                    <div className='input'>Password :  <input type="password"  placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/></div>
                    <a href="">Forget Password</a>
                    <div>

                        <button className='signbtn' onClick={sign}>Sign Up</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
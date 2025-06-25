import './contact.css'
import contact from '../../assets/contact.jpg'
import congif from '../../assets/contact.gif'
import axios from 'axios'
import { useState } from 'react'

export default function Contact() {
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [say,setSay]= useState('');
    const [success, setSuccess] = useState(false);
    const [complete, setcomplete] = useState(false);
    const [error, setError] = useState(false);



    function whyusHandler(e){
        e.preventDefault()

        if(name === '' || email === '' || say === '') {
            setcomplete(true);
            setTimeout(() => setcomplete(false), 3000); // Hide message after 3s
            return;
        }
        axios.post('api/contactus', {name,email,message: say }).
        then((res) => {
        console.log(res);
      setSuccess(true);
      setError(false);
      setTimeout(() => setSuccess(false), 3000); // Hide message after 3s
      setName('');
      setEmail('');
      setSay('');
      document.querySelector('.name').value = '';
      document.querySelector('.email').value = '';
      document.querySelector('.say').value = '';

      
    }

    )
        .catch(err => {
            console.log(err)
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);

        })
    }
    return(
        <div className='contactmain'>
            <div className='contact'>
                <div><h2>Contact Us</h2></div>
                <div className='input'>Name : <input className='name' onChange={(e)=>setName(e.target.value)} type="text"  placeholder="Name"/></div>
                <div className= 'input'>Email : <input className='email' onChange={(e)=>setEmail(e.target.value)}  type="text" placeholder='Email'/></div>
                <div className='textarea'>Your say : <textarea className='say' onChange={(e)=>setSay(e.target.value)}></textarea></div>
                <div className='conbtn'>
                {error && (
                    <p style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}>'Oop! Request failed . Please try again '</p>
                    
                )}
                {success && (
                    <p style={{ color: "green", marginTop: "10px", fontWeight: "bold" }}>
                        ✅ Email sent successfully!
                    </p>)}
                

                {complete && (
                    <p style={{ color: "green", marginTop: "10px", fontWeight: "bold" }}>
                    All fields are required!
                    </p>
                )}
                <button className='bookbtn' onClick={whyusHandler}>Send</button>

                </div>
            </div>
            <div className='contactright'>
                <div className='imgh4'>
                    
                    <img className='contactgif' src={congif} alt="" /> 
                    <h4>To Help You</h4>    
                </div>
                <img className='contactimg' src={contact} alt="" />
            </div>
        </div>
    )
}
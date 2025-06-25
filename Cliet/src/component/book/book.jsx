import './book.css'
import house from '../../assets/house.jpg'
import bed from '../../assets/bed.png'
import shower from '../../assets/shower.png'
import axios from 'axios'
import { useState } from 'react'

export default function Book(){
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [sDate,setsDate]= useState('');
    const [eDate,seteDate]=  useState(''); 
    const [success, setSuccess] = useState(false);
    const [complete, setcomplete] = useState(false);


    function bookHandler(e){
        e.preventDefault()
        
        if (name === '' || email === '' || sDate === '' || eDate === '') {
            setcomplete(true);
            setTimeout(() => setcomplete(false), 3000); // Hide message after 3s
            return;
        }
        
        axios.post('api/book',{name,email,sDate,eDate }).
        then((res) => {
            console.log(res);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000); // Hide message after 3s
            setName('');
            setEmail('');
            setsDate('');
            seteDate('');
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#sDate').value = '';
            document.querySelector('#eDate').value = '';
    }).catch(err => console.log('here is frontend error',err))
    }


    return(
        <>
        <div className='bookmain'>
            <div className= 'book'>
               <h3>Request</h3>
               <div> 
                Name :<input className='bIn' type="text" id='name' onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div>Email: <input className='bIn' type="text" id='email' onChange={(e)=>{setEmail(e.target.value)}} /></div>
            
                <div>
                    <h5>Reserve Date</h5>
                    From: <input className='bIn' type="date" id='sDate' onChange={(e)=>{setsDate(e.target.value)}} />
                    <div>To: <input className='bIn' type="date" id='eDate' onChange={(e)=>{seteDate(e.target.value)}}/> </div>
                </div>
                <div className='bkbtn'>
                    <button className='bookbtn' onClick={bookHandler}> Make Request</button>
                    {success && (
                    <p style={{ color: "green", marginTop: "10px", background:'#fff',fontWeight: "bold" }}>
                        ✅ Email sent successfully!
                    </p>)}
                    {complete && (
                    <p style={{ color: "green", marginTop: "10px", background:'#fff',fontWeight: "bold" }}>
                         All fields are required!
                    </p>)}
                </div>




            </div>

            <div className='rigth'>
            <div className='head'>   
                <img className='houseimg hpic' src={house} alt="" />
                <div className='dis'>
                    <h2>Price : 200 Euro per day</h2>
                    <h4>Location : Cassino,Italy</h4>
                    <div className='icon'>
                        <img src={bed} className='room' alt="" />
                        <img src={shower} className='room' alt="" />
                    </div>
                                             
                </div>
                
            </div>
                
            </div>
        </div>
        </>
    )
}
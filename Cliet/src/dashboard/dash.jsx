import './dash.css'
import search from '../assets/search.png'
import logo from '../assets/logo.png'
import menu from '../assets/bars-solid.svg'
import cross from '../assets/cross.png'
export default function Dash() {
    function slider(e) {
        e.preventDefault()
        document.querySelector('.menu').className = 'menumin'
        document.querySelector('.menuimg').className = 'imgGone'
        document.querySelector('.slidermin').className = 'menut'
        document.querySelector('.cross').className = 'crossimg'

    }
    
    function sliderof(e) {
        e.preventDefault()
        document.querySelector('.menumin').className = 'menu'
        document.querySelector('.imgGone').className = 'menuimg'
        document.querySelector('.menut').className = 'slidermin'
        document.querySelector('.crossimg').className = 'cross'

    }

    function tologin() {
        window.location.href = '/Login'
        document.querySelector('.nav').className = 'disnav'  
    }
    return (
        <>
        <div className='container'>
            <div className='logo'>
                <img className='logoimg' src={logo} alt="" />
                <div className="Listsearch">
                    <input type="text" className='search' placeholder='Search'/>
                    <img src={search} className='searchimg'/>
                </div>
                <button className='buttons' onClick={tologin}>Login</button>
                <button className='buttons' onClick={()=>{window.location.href = '/Signup'}}>SignUp</button>

            </div>
            <nav className="nav">
                <ul className="list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/why-us">Why Us</a></li>
                    <li><a href="/ContactUs">Contact Us</a></li>

                </ul>
                <img src={menu} className='menuimg' onClick={slider} alt="" />
                <div className="menu">
                    <img src={cross} className='cross'  onClick={sliderof} alt="" />
                    <ul className="slidermin">
                    <li><a href="/">Home</a></li>
                    <li><a href="/why-us">Why Us</a></li>
                    <li><a href="/ContactUs">Contact Us</a></li>
                    <button className='btnlog' onClick={tologin}>Login</button>
                    <button className='btnsign' onClick={()=>{window.location.href = '/Signup'}}>SignUp</button>

                    </ul>
                
                </div>
            </nav>
            
        </div>
        </>
    )
}
import './card.css'
import house from '../assets/house.jpg'
import fav from '../assets/fav.png'
export default function Card2() {
    return(
        <div className="card">
            <div className='cardimg'><img className= "Himg"src={house} alt="" /></div>
            <div className='cardtext'>
                <div className='Info'>
                    <h4>Price : 200 Euro</h4>
                    <h5>Location : Cassino,Italy</h5>
                </div>
                <div>
                    <img className= 'fav' src={fav} />
                </div>
            </div>
            <div className='HouseInfo'><button className="button"  onClick={() => {window.location.href = '/Description'}}>More Details</button></div>
        </div>
    )
}
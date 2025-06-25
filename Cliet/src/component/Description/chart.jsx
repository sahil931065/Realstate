import house from '../../assets/house.jpg'
import './chart.css'
import bed from '../../assets/bed.png'
import shower from '../../assets/shower.png'
import house1 from '../../assets/house1.jpg'
import house2 from '../../assets/house2.jpg'
import house3 from '../../assets/house3.jpg'
export default function Description(){
    return(
        <div className="containerDis">
            <div>
                <h2>Your Rental</h2>
                <div className='main'>
                    
                    <div className='head'>   
                        <img className='houseimg' src={house} alt="" />
                        <div className='dis'>
                            <h2>Price : 200 Euro per day</h2>
                            <h4>Location : Cassino,Italy</h4>
                            <div>
                                <img src={bed} className='room' alt="" />
                                <img src={shower} className='room' alt="" />
                            </div>
                            
                            <button className='bookbtn' onClick={() => {window.location.href = '/Book'}}>Book Now!</button>
                        </div>

                    </div>
                    

                    <div className='housesimg'>
                        <div className='house'>
                            <img src={house1} className='house1'/>
                            <img src={house2} className='house2'/>
                        </div>
                        
                        <img src={house3} className='house3' />
                    </div>
                
                </div>
                <div className='discription'> 
                
                    <h3>Description</h3>
                    <h4>CasaDirect is a modern, responsive real estate listing interface designed to provide users with a clean and intuitive way to browse rental or sale properties.</h4>
                </div>
                
            </div>
        </div>
    )
}
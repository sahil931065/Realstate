import'./Home.css'

import Card from './cards/card.jsx'
import Card2 from './cards/card2.jsx'
import Card3 from './cards/card2.jsx'
import Card4 from './cards/card2.jsx'
export default function Home() {
    return (
        <>
        <div className="home">

            <div className="homeRight">
                <div className='cards'>
                    <Card/>
                    <Card2/>
                    
                </div>
                <div className='cards'>
                    <Card3/>
                    <Card4/>
                </div>
            </div>
        </div>
        </>
    )
}   
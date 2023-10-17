import "../css/Home.css"
import {GiKangaroo} from "react-icons/gi"
function Home() {


    return (
        <main className="home-page">        
            <div id='home'>
            
                <GiKangaroo id="deliveroo-image"/>
            <h2 id="welcome_banner">Welcome to Take That!</h2>
            <p>
            Find yourself a delicious takeaway...
            <br />
            <br />
            Browse through our extensive list of restaurants
            <br />
            <br />
            Start by having a look at all the cuisine's we have to offer.
            </p>
            </div>
          
    </main>
    )
  }
  
  export default Home
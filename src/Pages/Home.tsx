import MainData from "../Components/Main Data/MainData";
import SideBar from "../Components/SideBar/SideBar";
import NightImage from "../assets/night.jpg"

function Home(){
    return(
        <div className="h-[100vh] px-8 py-8 flex flex-row justify-center items-stretch" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${NightImage})`}}>
            
                <SideBar />
                <MainData />
            
        </div>
        
    )
}


export default Home;
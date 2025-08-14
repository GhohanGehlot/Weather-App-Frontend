import { useEffect } from "react";
import MainData from "../Components/Main Data/MainData";
import SideBar from "../Components/SideBar/SideBar";
import NightImage from "../assets/night.jpg"
import { fetchData } from "../Redux/Slices/forecastSlice";
import { useAppDispatch } from "../Hooks/hooks";

function Home(){

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchData())
    } , [])


    return(
        <div className="h-[100vh] px-8 py-8 flex flex-row justify-center items-stretch" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${NightImage})`}}>

                <SideBar />
                <MainData />
            
        </div>
        
    )
}


export default Home;
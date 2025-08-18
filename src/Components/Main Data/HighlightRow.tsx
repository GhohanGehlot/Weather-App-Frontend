import { useSelector } from "react-redux";
import HighlightCard from "../HighlightCard";
import type ReduxState from "../../Interfaces/ReduxState";

function HighlightRow(){

     const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData);

     function UvRange(){
        if (currentData.uv <= 5) return "Low";
        else if (currentData.uv > 5 && currentData.uv < 8 ) return "moderate";
        else return "High";
        }
     


    return(
        <div className="flex flex-wrap gap-7 justify-around py-12 px-2 ">
            <HighlightCard title= "UV Index" data={currentData.uv.toString()} footer={UvRange()} />
            <HighlightCard title= "Wind Status" data={currentData.wind_kmph.toString()}  footer="km/h" />
            <HighlightCard title= "Humidity" data={currentData.humidity.toString() + "%"}  footer="" />
            <HighlightCard title= "Visibility" data={currentData.vis_kmph}  footer="Low"/>
            <HighlightCard title= "Sunrise" data={currentData.sunrise}  footer={currentData.sunset}/>
             <HighlightCard title= "Air Quality" data={currentData.aqi.toString()}  footer="Low"/>
        </div>
    )
}

export default HighlightRow;
import TempCard from "../TempCard"
import Sunny from "../../assets/Sun.png"

function WeakRow(){
    return(
        <div className="w-full px-12 py-2 flex flex-wrap gap-6">
            <TempCard title="Friday" temperature="25°C" image={Sunny} />
            <TempCard title="Friday" temperature="25°C" image={Sunny} />
            <TempCard title="Friday" temperature="25°C" image={Sunny} />
            <TempCard title="Friday" temperature="25°C" image={Sunny} />
            <TempCard title="Friday" temperature="25°C" image={Sunny} />
            <TempCard title="Friday" temperature="25°C" image={Sunny} />
            <TempCard title="Friday" temperature="25°C" image={Sunny} />
           


            
            
        </div>

    )
}

export default WeakRow
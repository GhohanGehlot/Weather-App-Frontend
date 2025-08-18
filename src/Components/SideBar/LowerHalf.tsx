import { AiFillCloud } from "react-icons/ai";
import { BsDropletFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { useSelector } from "react-redux";
import type ReduxState from "../../Interfaces/ReduxState";

function LowerHalf(){

    const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData)

    return(
        <div className="h-[50%] w-full p-4 flex flex-col justify-between">

            <div className="flex flex-col">
                <div className="flex items-center gap-4 my-2 text-black text-sm">

                    <div>
                        <AiFillCloud />
                    </div>
                    <div>
                       {currentData.condition}
                    </div>

                </div>

                <div className="flex itmes-center gap-4 my-2  text-black text-sm">
                    <div>
                        <BsDropletFill />
                    </div>
                    <div>
                        Perc - {currentData.chance_of_rain}%
                    </div>
                </div>


            </div>

            <div className=" flex text-black">
               <div><MdLocationPin /></div> 
               <div>Mumbai, Maharastra, India</div> 
            </div>

        </div>
    )
}

export default LowerHalf;
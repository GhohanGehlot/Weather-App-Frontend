import { AiFillCloud } from "react-icons/ai";
import { BsDropletFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

function LowerHalf(){
    return(
        <div className="h-[50%] w-full p-4 flex flex-col justify-between">

            <div className="flex flex-col">
                <div className="flex items-center gap-4 my-2 text-black text-sm">

                    <div>
                        <AiFillCloud />
                    </div>
                    <div>
                        Partially Cloudy 
                    </div>

                </div>

                <div className="flex itmes-center gap-4 my-2  text-black text-sm">
                    <div>
                        <BsDropletFill />
                    </div>
                    <div>
                        Perc - 10%
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
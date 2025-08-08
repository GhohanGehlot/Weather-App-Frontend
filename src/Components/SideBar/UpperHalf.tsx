import { AiOutlineSearch } from "react-icons/ai";
import Night from "../../assets/Moon.png";

function UpperHalf(){
    return(
        <div className="max-h-[30rem] w-full p-4 flex flex-col justify-center items-start ">
            <div className="flex flex-start w-full mt-7 ">
                <input type="text" placeholder="Search.." className="px-4 py-2 rounded-tl-md rounded-bl-md basis-3/4 bg-white text-black " />
                <button className="basis-1/6 block text-lg bg-sky-500 p-2 flex justify-center font-semibold rounded-br-md rounded-tr-md">
                    <AiOutlineSearch />
                </button>
            </div>


            <div className="w-[100%] h-[80%] flex justify-center">
                <img src={Night} alt="Cloudy Night" className="w-[50%] h-[100%] mt-4 p-4 " />

            </div>


            <div className="flex flex-col mt-3 ">
                <div className=" text-8xl  text-black flex flex-row item-start ">
                   <div>25.4</div>  
                   <div className="text-4xl">°C</div>
                </div>

                <div className="text-black text-md">
                    Friday, 09:34 
                </div>

            </div>
        </div>
    )
}

export default UpperHalf;
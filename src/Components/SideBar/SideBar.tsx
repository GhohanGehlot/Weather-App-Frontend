import LowerHalf from "./LowerHalf";
import UpperHalf from "./UpperHalf";

function SideBar(){
    return(
        <div className="basis-3/12 flex flex-col  items-center justify-center text-white h-full rounded-tl-3xl rounded-bl-3xl" style={{background: 'rgba(255 , 255 ,255 , 0.81)'}}>
            
            <UpperHalf />
            <div className="h-[1px] w-[85%] bg-white mt-8 rounded-md "></div>
            <LowerHalf />

        </div>
    )
}

export default SideBar;
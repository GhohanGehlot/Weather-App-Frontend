import HighlightRow from "./HighlightRow";
import TopRow from "./TopRow";
import WeakRow from "./WeakRow";

function MainData(){
    return(
        <div className=" flex flex-col justify-between py-4 items-center  basis-9/12 text-black h-full rounded-tr-3xl rounded-br-3xl bg-[#f6f6f8]">
            
            <TopRow />
            <WeakRow />
            <div>
                Today's Highlight
            </div>
            <HighlightRow />
        </div>
    )
}

export default MainData;
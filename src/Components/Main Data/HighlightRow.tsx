import HighlightCard from "../HighlightCard";

function HighlightRow(){
    return(
        <div className="flex flex-wrap gap-3 py-12 px-2 ">
            <HighlightCard title= "UV Index" data="3.8" footer="Low"/>
            <HighlightCard title= "UV Index" data="3.8" footer="Low"/>
            <HighlightCard title= "UV Index" data="3.8" footer="Low"/>
            <HighlightCard title= "UV Index" data="3.8" footer="Low"/>
            <HighlightCard title= "UV Index" data="3.8" footer="Low"/>
        </div>
    )
}

export default HighlightRow;
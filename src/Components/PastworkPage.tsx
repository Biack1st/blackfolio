import Video from "./Video"

function PastworkPage() {
    return (
        <div className="pt-10">
            <div className="w-3/4 m-auto items-center h-3/4" >
            <h2 className="font-semibold text-4xl   text-center text-black">Past Work</h2> 
                <p className="text-center font-normal pt-[10px] text-lg items-center vertial ">
                    This section will showcase my past work:
                </p>
                <div className="grid place-items-center grid-cols-4 gap-[0px]">
                    <Video url="https://thumbs.gfycat.com/CreepyAdorableFruitfly-mobile.mp4"/> 
                    <Video url="https://thumbs.gfycat.com/CreepyAdorableFruitfly-mobile.mp4"/> 

                </div> 
            </div>    
        </div>
              
    )
}

export default PastworkPage
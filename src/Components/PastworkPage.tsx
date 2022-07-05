import Video from "./Video"

function PastworkPage() {
    return (
        <div className="pt-10 ">
            <div className="w-3/4 m-auto items-center h-3/4" >
            <h2 className="font-semibold text-4xl  text-center text-black">Past Work</h2> 
                <p className="text-center font-normal pt-[10px] text-lg items-center ">
                    This section will showcase my past work:
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3">
                    <Video url="https://thumbs.gfycat.com/HollowRewardingCrustacean-mobile.mp4" title="Leaderboard with Podium" ></Video>
                    <Video url="https://thumbs.gfycat.com/ZealousShyCleanerwrasse-mobile.mp4" title="Map Voting system" ></Video>
                </div> 
            </div>    
        </div>
              
    )
} 

export default PastworkPage
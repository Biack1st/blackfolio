import Video from "./Video"
import videos from "../videosList"

function PastworkPage() {
    return (
        <div className="pt-10 ">
            <div className="w-3/4 m-auto items-center h-3/4" >
                <h2 className="font-semibold text-4xl  text-center text-black">Past Work</h2> 
                <p className="text-center font-normal pt-[10px] text-lg items-center ">
                    This section will showcase my past work:
                </p>
                <h3 className="font-semibold text-2xl  text-center text-black">HTTP systems</h3> 
                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3">
                    {/* <Video url="https://thumbs.gfycat.com/HollowRewardingCrustacean-mobile.mp4" title="Leaderboard with Podium" ></Video>
                    <Video url="https://thumbs.gfycat.com/ZealousShyCleanerwrasse-mobile.mp4" title="Map Voting system" ></Video> */}
                    {videos.map((videoData: any) => {
                        if (videoData.section === "http") {
                            return (
                                <Video url={videoData.url} title={videoData.title}></Video>
                            )
                        }
                        return null
                    })}
                </div>
                <h3 className="font-semibold text-2xl  text-center text-black top-10">Game util</h3>  
                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3">
                    {/* <Video url="https://thumbs.gfycat.com/HollowRewardingCrustacean-mobile.mp4" title="Leaderboard with Podium" ></Video>
                    <Video url="https://thumbs.gfycat.com/ZealousShyCleanerwrasse-mobile.mp4" title="Map Voting system" ></Video> */}
                    {videos.map((videoData: any) => {
                        if (videoData.section === "gUtil") {
                            return (
                                <Video url={videoData.url} title={videoData.title}></Video>
                            )
                        }
                        return null
                    })}
                </div>
            </div>    
        </div>
              
    )
} 

export default PastworkPage
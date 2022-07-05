import React from "react"

interface props {
    url: string
}

class Video extends React.Component<props> {
    render(): React.ReactNode {
        return (
            <div className="w-11/12 h-11/12 items-center justify-center  bg-blue-500 rounded-lg ">
                <h1 className="text-center text-white font-semibold">cool title lol</h1>
                <video className="rounded-lg w-11/12 h-1/2 content-center m-auto" controls>
                    <source src={this.props.url}/>
                </video>
            </div>
        )
    }
}

export default Video
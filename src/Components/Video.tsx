import React from "react"

interface props {
    url: string,
    title: string,
}

class Video extends React.Component<props> {
    render(): React.ReactNode {
        return (
            <div className=" place-items-center bg-blue-500 rounded-lg top">
                <h1 className="text-center text-white font-semibold text-lg">{this.props.title}</h1>
                <video className="rounded-t-none rounded-lg  content-center m-auto " typeof="video/mp4" controls>
                    <source src={this.props.url}/>
                    your browser doesn't support HTML videos ¯\_(ツ)_/¯
                </video>
            </div>
        )
    }
}

export default Video
import React from "react"

interface props {
    url: string,
    title: string,
}

class Video extends React.Component<props> {
    render(): React.ReactNode {
        return (
            <div className="w-11/2 h-[12/12] place-items-center bg-blue-500 rounded-lg">
                <h1 className="text-center text-white font-semibold text-lg">{this.props.title}</h1>
                <video className="rounded-t-none rounded-lg w-[1/4] h-[1/4] content-center m-auto" controls>
                    <source src={this.props.url}/>
                </video>
            </div>
        )
    }
}

export default Video
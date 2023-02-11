import React from "react";

interface props {
    title: string,
    link: string,
}

class Link extends React.Component<props> {
    render(): React.ReactNode {
        return (
            <a href={this.props.link}>{this.props.title}</a>
        )
    }
}


export default Link
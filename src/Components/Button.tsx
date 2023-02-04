import React from "react";

interface ButtonProps {
    onClick: () => void
    text: string
    sizeX?: number
    sizeY?: number
}

export class Button extends React.Component<ButtonProps> {
    render() {
        return (
            // make text be semi bold
            // change button size to the sizeX and sizeY
            <button onClick={this.props.onClick} className={`bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors font-semibold py-[${this.props.sizeY}] px-${this.props.sizeX}`}>
                {this.props.text}
            </button>
        )
    }
}
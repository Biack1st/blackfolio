import React from "react";

interface ButtonProps {
    onClick: () => void
    text: string
}

export class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <button onClick={this.props.onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {this.props.text}
            </button>
        )
    }
}
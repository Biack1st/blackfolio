import React from "react"

interface ListItemProps {
    text: string
}

function listItem(props: ListItemProps) {
    return (
        <li className="text-center pt-1 text-lg">{props.text}</li>
    )
}

class TosPage extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="pt-10">
                <h2 className="font-semibold text-4xl   text-center text-black">Terms of Service</h2>
                <ul className="list-decimal list-inside items-center">
                  {listItem({text: "I can cancel the commission without any reason."})}
                  {listItem({text: "If you cancel the commission, I require some form of compensation. If none is given, I will make the system a free model  for anyone's use."})}
                  {listItem({text: "If the commission has multiple tasks, I may ask for payment to be per task instead of after completion."})}
                  {listItem({text: "When paying, you must include the 30% tax. This only applies to gamepass payment. This can be calculated by getting the original price and dividing it by 0.7."})}
                  {listItem({text: "I will give you the final product after you paid in full. This is to prevent me from getting scammed"})}
                  {listItem({text: "Before I start doing the commission. You must show proof of funds via screen shot. This must include robux count and username. This is to prevent me from wasting time"})}
                  <p className="text-center pt-2 text-red-600 font-bold text-lg">When you commission me, you automatically accept these terms. <strong>NO EXCEPTIONS</strong></p>
                </ul>
            </div>
            
        )
    }
}

export default TosPage
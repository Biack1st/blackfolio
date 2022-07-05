
interface ListItemProps {
    text: string
}

function listItem(props: ListItemProps) {
    return (
        <li className="text-center pt-1 text-lg list-none">{props.text}</li>
    )
}

export function AvailabilityPage() {
    return (
        <div className="pt-10">
            <div className="w-4/5 m-auto items-center h-3/4 origin-center" >
                <h2 className="font-semibold text-4xl text-center text-black">Availability</h2>
                {listItem({text: "COMMISSIONS: OPEN"})}
                {listItem({text: "Please keep in mind, my time zone is CST. I'm usually available every day for a couple of hours. Sometimes, I may not be online do to having school work to finish or others stuff going on. I'm most available during weekends as that is when I don't have school work."})}
            </div>
        </div>
    )
}
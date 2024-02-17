import { toggleDoors } from "./methods";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Doors = props => {
    const {doors, power, setDoors, setPower} = props

    return (
        <div className="flex flex-col items-center bg-red-100 w-full">
            <h1 className="my-5">Doors Control</h1>
            <button onClick={() => toggleDoors(power, doors, setPower, setDoors)}
            className={`${doors ? "bg-red-500 text-white border border-red-500" : "bg-red-100 hover:bg-red-500 text-red-500 hover:text-white border border-red-500"} font-bold py-2 px-4 rounded`}
            >{doors ? "Close Doors" : "Open Doors"}</button>
            <div className="h-[15rem] w-[15rem] my-5">
                <CircularProgressbar value={!doors} maxValue={1} strokeWidth={50} background
                styles={buildStyles({
                    textColor: '#ef4444',
                    pathColor: '#ef4444',
                    backgroundColor: '#fff',
                    trailColor: "transparent",
                    pathTransitionDuration: 0.5,
                    strokeLinecap: 'butt'
                })}
                />
            </div>
        </div>
    )
}

export default Doors;
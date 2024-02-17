import { toggleDoors } from "./methods";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Controls = props => {
    const {doors, heat, power, setDoors, setHeat, setPower} = props

    return(
        <div className='grid grid-cols-2 mt-10'>
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

            <div className="flex flex-col items-center bg-blue-100 w-full">
                <h1 className="my-5">Heat Control</h1>
                <div>
                    <button onClick={() => heat >= 10 ? null : setHeat(heat+1)}
                    className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded"
                    >+</button>

                    <button onClick={() => setHeat(0)}
                    className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 mx-4 rounded"
                    >Off</button>

                    <button onClick={() => heat <= 0 ? null : setHeat(heat-1)}
                    className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded"
                    >-</button>
                </div>
                <div className="h-[15rem] w-[15rem] my-5">
                    <CircularProgressbar value={heat} maxValue={10} text={`${heat}`} background backgroundPadding={6}
                    styles={buildStyles({
                        textColor: 'rgb(59 130 246)',
                        pathColor: 'rgb(59 130 246)',
                        backgroundColor: '#fff',
                        trailColor: "transparent",
                        pathTransitionDuration: 0.5
                    })}
                    />
                </div>

            </div>
        </div>
    )
}

export default Controls;
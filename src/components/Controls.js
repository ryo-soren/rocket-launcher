import { toggleDoors } from "./methods";

const Controls = props => {
    const {doors, heat, power, setDoors, setHeat, setPower} = props

    return(
        <div className='grid grid-cols-2 mt-10'>
            <div>
                <button onClick={() => toggleDoors(power, doors, setPower, setDoors)}
                className={`${doors ? "bg-blue-50 hover:bg-blue-500 text-blue-500 hover:text-white border border-blue-500" : "bg-blue-500 text-white border border-blue-500"} font-bold py-2 px-4 rounded`}
                >{doors ? "Close Doors" : "Open Doors"}</button>
            </div>
            <div className="flex gap-16">
                {heat < 10 ? (
                    <button onClick={() => {setHeat(heat+1)}}
                    className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded"
                    >Increase Heat</button>
                ):(
                    ""
                )}
                {heat > 0 ? (
                    <button onClick={() => setHeat(heat-1)}
                    className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded"
                    >Decrease Heat</button>
                ):(
                    ""
                )}
            </div>
        </div>
    )
}

export default Controls;
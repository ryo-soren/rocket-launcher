import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Heat = props => {
    const {heat, setHeat} = props

    return(
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
    )
}

export default Heat;
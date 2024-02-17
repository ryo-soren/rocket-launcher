import Doors from "./Doors";
import Heat from "./Heat";

const Controls = props => {
    const {doors, heat, power, setDoors, setHeat, setPower} = props

    return(
        <div className='grid grid-cols-2 mt-10'>
            <Doors doors={doors} power={power} setDoors={setDoors} setPower={setPower} />
            <Heat heat={heat} setHeat={setHeat} />
        </div>
    )
}

export default Controls;
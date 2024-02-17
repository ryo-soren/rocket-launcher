import { useEffect, useState } from "react";
import './dashboardStyles.css';
import PowerComponent from './Power';
import Controls from './Controls';
import { intervalMethod } from "./methods";

const Dashboard = () => {
  const [power, setPower] = useState(100)
  const [doors, setDoors] = useState(false)
  const [heat, setHeat] = useState(0)

  useEffect(() => {
    if (power < 100 || heat > 0) {
      const intervalId = setInterval(() => {
        intervalMethod(heat, power, setPower, setHeat)
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [power, heat])


  return(
    <>
      <div className='w-3/4 mx-auto'>
        <PowerComponent power={power} />
        <Controls doors={doors} heat={heat} power={power} setDoors={setDoors} setHeat={setHeat} setPower={setPower}/>
      </div>
    </>
  )
}

export default Dashboard;
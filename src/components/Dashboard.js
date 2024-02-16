import { useState } from'react';

const Dashboard = () => {

  const [power, setPower] = useState(10)
  const [doors, setDoors] = useState(false)
  const [heat, setHeat] = useState(0)

  return(
    <div>
      <h1>Dashboard</h1>
      <p>Power: {power}</p>
      <p>Doors: {doors}</p>
      <p>Heat: {heat}</p>
    </div>
  )
}

export default Dashboard;
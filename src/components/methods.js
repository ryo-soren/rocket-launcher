// Power source - status (3 different levels - High, Low, Off)
// Control Doors - open, closed
// Heat Level Control - changes heat, reduces power level - Based on heat level, control power level

export const checkPowerLevel = (power) => {
    if (power > 10){
        return 0;
    }
    alert('Wait for power to recharge');
    return 1;
}

export const toggleDoors = (power, doors, setPower, setDoors) => {
    if (checkPowerLevel(power)){
      return;
    }
    setDoors(!doors)
    setPower(power - 5)
}

export const reducePowerLevel = (power, heat) => {
    if (heat <= 0){
        return power;
    }
    if (heat < 11 && heat > 8){
        return power - 10
    }
    if (heat < 9 && heat > 6){
        return power - 8
    }
    if (heat < 7 && heat > 4){
        return power - 6
    }
    if (heat < 5 && heat > 2){
        return power - 4
    }
    if (heat < 3 && heat > 0){
        return power - 2
    }
}

const changeHeatLevel = (heat, power, setPower, setHeat) => {
    if (checkPowerLevel(power)){
        setHeat(0)
        return;
    }
    setPower(reducePowerLevel(power, heat))
}

const rechargePowerLevel = (heat, power, setPower) => {
    console.log(heat, power);
    if (heat <= 0 && power < 100){
        power + 2 > 100 ? setPower(power + 1) : setPower(power + 2)
    }
    return 0;
}

export const intervalMethod = (heat, power, setPower, setHeat) => {
    console.log(heat > 0, "heat:" + heat);
    if (heat <= 0){
        rechargePowerLevel(heat, power, setPower)
    }else{
        changeHeatLevel(heat, power, setPower, setHeat)
    }
}
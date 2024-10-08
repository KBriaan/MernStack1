import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";


export const useWorkoutContext =() =>{
    const context = useContext(WorkoutsContext)
    if (!context){
        throw Error('useWorkoutsContext should be used inside a workoutsContextProvider ')
    }
    return context
}


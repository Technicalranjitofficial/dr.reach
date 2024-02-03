

import { InitialUserInterface } from "@/interfaces/InitialUserInterface";
import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";





const initialState:InitialUserInterface = {
  
specializatins:[],
dob:"",
loading:false,
activeDoctorTab:0,




}
const UserSlice = createSlice({
    name:"UserSlice",
    initialState,
    reducers:{

        setSpecializations:(state,action)=>{
            state.specializatins=action.payload
        },

        addSpecialization:(state,action)=>{
            state.specializatins.push(action.payload)
        },

        removeSpecialization:(state,action)=>{
            const {index} = action.payload;
            state.specializatins.splice(index,1)
        },

        setDob:(state,action)=>{
            state.dob=action.payload
        },


        setLoading:(state,action)=>{
            state.loading=action.payload
        },

        setActiveDotcorTab:(state,action)=>{
            state.activeDoctorTab=action.payload
        }
        
    }
    
})

export const {addSpecialization,removeSpecialization,setSpecializations,setDob,setLoading,setActiveDotcorTab} = UserSlice.actions



export default UserSlice.reducer;
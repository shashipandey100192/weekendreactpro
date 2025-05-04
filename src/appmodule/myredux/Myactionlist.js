import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    age:20
  }


  export const Mysliceer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.age += 1
      },
      oldage:(state)=>{
        state.age=500;
      }
    }
  })
  
  export const { increment,oldage} = Mysliceer.actions
  
  export default Mysliceer.reducer
import { configureStore } from '@reduxjs/toolkit'
import Myactionlist from "./Myactionlist"

export const Mydatastore = configureStore({
  reducer: {
    counter:Myactionlist
  },
})
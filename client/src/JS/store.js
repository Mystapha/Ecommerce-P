import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import  productSlice  from './productslice'
import commandeSlice from './commandeSlice'


export const store = configureStore({
  reducer: {
    user:userSlice,
    product: productSlice,
    commande: commandeSlice
  },
})
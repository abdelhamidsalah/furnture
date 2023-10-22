import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 cardItems:[],
 totalAmount:0,
 totalQuantity:0
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
  
    addItem : (state , action) => {
      const newItem = action.payload;
      const exitItem = state.cardItems.find(item => item.id === newItem.id);
      state.totalQuantity++;

     

      if(!exitItem){
        state.cardItems.push({
          id:newItem.id,
          productName:newItem.productName,
          price:newItem.price,
          imgUrl:newItem.imgUrl,
          quantity:1,
          totalPrice:newItem.price
        });
        
        }
        else{
          exitItem.quantity ++
          exitItem.totalPrice= Number(exitItem.totalPrice) + Number(newItem.price)
        }
    
       


        state.totalAmount = state.cardItems.reduce((total , item) => total + Number(item.price) * Number(item.quantity),0);
        console.log(state.totalQuantity)
      },
      deleteItem :(state , action) =>{
        const id = action.payload
        const exitItem = state.cardItems.find(item => item.id === id)
        if(exitItem){
          state.cardItems = state.cardItems.find(item => item.id !== id)
          state.totalQuantity = state.totalQuantity - exitItem.quantity
        }
        state.totalAmount = state.cardItems.reduce((total , item) => total + Number(item.price) * Number(item.quantity),0);
      }
    }

  }

);

export const cartActions = CartSlice.actions

export default CartSlice.reducer
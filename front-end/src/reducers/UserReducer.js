
export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => (item.prodPrice*item.quantity) + amount, 0);

  export const getProdIds=(basket)=>
  basket?.map(item=>item.prodId)

  export const getProdQuantities=(basket)=>basket?.map(item=>item.quantity);

const userReducer = (state, action) => {

    switch (action.type) {
        case "signIn":

        console.log(state.user);
            return {
                ...state,
                user: action.payload
            }

        case "signOut":
            return {
                basket: [],
                user: null
            }



        case "addToBasket":
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }

            case "removeFromBasket":
                

            const res=state.basket.filter((item)=>{
                return item.prodId!==action.payload.prodId
            })
            console.log(res);
            return{
                ...state,
                basket:res
            }


        case "clearBasket":
        return{
            ...state,
            basket:[]
        }    

        default:
            return state

    }
}

export default userReducer
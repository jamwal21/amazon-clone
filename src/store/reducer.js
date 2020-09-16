export const initialState = {
    basket: [],
    user: null
};

//Selector
export const cartTotal = (basket) => (
    basket?.reduce(( amount, item ) => item.price + amount, 0)
)

const reducer = (state, action) => {
    console.log(action);
    
    switch(action.type){
        case "ADD_TO_BASKET" : 
            return {
                ...state,
                basket: [...state.basket,action.item]
            };

        case "REMOVE_FROM_BASKET" :
            
            var itemRemoving = state.basket.findIndex( item => item.id === action.id)
            console.log(itemRemoving);
            var updatedState = [...state.basket]
            updatedState.splice(itemRemoving,1)
            return{
                ...state,
                basket: updatedState
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        
        default : return initialState;
    }
}

export default reducer
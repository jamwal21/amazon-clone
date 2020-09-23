export const initialState = {
    basket: [],
    user: null
};

//Selector
export const cartTotal = (basket) => (
    basket?.reduce((amount, item) => item.price*item.quantity + amount, 0)
)

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "ADD_TO_BASKET":
            const itemIncreasing = state.basket.find( item => item.id === action.item.id)

            let updatedIncreaseState;

            if(itemIncreasing !== undefined){
                const duplicateState = [...state.basket];
                const qtyIncreasing = itemIncreasing.quantity

                updatedIncreaseState = duplicateState.map(item => {
                    if (item.id === action.item.id) {
                        item = {
                            ...item,
                            quantity: qtyIncreasing + 1
                        }
                    }
                    return item;
                })
            }else{
                updatedIncreaseState = [...state.basket, action.item]
            }

            return {
                ...state,
                basket: updatedIncreaseState
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            };

        case "REMOVE_FROM_BASKET":

            const itemDecreasing = state.basket.find(item => item.id === action.id)
            const qtyDecreasing = itemDecreasing.quantity
            const itemRemovingIndex = state.basket.findIndex(item => item.id === action.id)

            // console.log(itemRemoving);
            let updatedDecreaseState;

            if (qtyDecreasing === 1) {
                updatedDecreaseState = [...state.basket]
                updatedDecreaseState.splice(itemRemovingIndex, 1)
            } else {

                const duplicateState = [...state.basket];

                updatedDecreaseState = duplicateState.map(item => {
                    if (item.id === action.id) {
                        item = {
                            ...item,
                            quantity: qtyDecreasing - 1
                        }
                    }
                    return item;
                })
            }

            return {
                ...state,
                basket: updatedDecreaseState
            };

            // case "INCREASE_IN_BASKET" :

            //     const itemIncreasing = state.basket.find( item => item.id === action.id)
            //     console.log(itemIncreasing);
            //     const qtyIncreasing = itemIncreasing.quantity
            //     const itemIncreasingIndex = state.basket.findIndex( item => item.id === action.id)
            //     const updatedIncreaseState = [...state.basket]

            //     updatedIncreaseState[itemIncreasingIndex].quantity = qtyIncreasing + 1

            //     return{
            //         ...state,
            //         basket: updatedIncreaseState
            //     };

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

            default:
                return initialState;
    }
}

export default reducer
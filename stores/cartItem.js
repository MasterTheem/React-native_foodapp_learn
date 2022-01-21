const cartItems = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            //return [...state, action.payload]
            return [...state.filter(p => p.id !== action.payload.id), action.payload]; //can't add dupicate id
        case 'REMOVE_FROM_CART':
        //return state.filter(cartItem => cartItem.id !== action.payload.id)
        return action.payload
    }       

    return state
}

export default cartItems
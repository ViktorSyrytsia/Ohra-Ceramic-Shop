const initialState = {
        items: [],
        totalItems: 0
}

export default (state = initialState, action) => {
        switch (action.type) {
                case 'ADD_TO_CART':
                        const id = action.payload.id;

                        return {
                                ...state,
                                items: [
                                        ...state.items,
                                        action.payload
                                ]
                        };
                case 'REMOVE_FROM_CART':


                        return {
                                ...state,
                                items: state.items.filter(item => item.id !== action.payload)
                        }
                default:
                        return state;
        }
}
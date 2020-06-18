const initialState = {
        items: [],
        totalItems: 0
}

export default (state = initialState, action) => {
        switch (action.type) {
                case 'ADD_TO_CART':
                        const id = action.payload.id;
                        const itemIndex = state.items.findIndex(item => item.id === id);
                        const newItems = [...state.items];

                        if (itemIndex >= 0) {

                                return {
                                        ...state,
                                        items: newItems.map((item, index) => {
                                                if (index !== itemIndex) {
                                                        return item
                                                } else {
                                                        return {
                                                                ...item,
                                                                count: item.count + 1,

                                                        }
                                                }

                                        })
                                }

                        }


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
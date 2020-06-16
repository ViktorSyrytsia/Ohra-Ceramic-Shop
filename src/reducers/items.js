const initialState = {
        itemsList: [],
        isReady: false,
}

export default (state = initialState, action) => {
        switch (action.type) {
                case 'SET_ITEMS':
                        return {

                                itemsList: [...state.itemsList, ...action.payload],
                                isReady: true
                        }
                case 'SET_IS_READY':
                        return {

                                ...state,
                                isReady: action.payload
                        }
                default:
                        return state;
        }
} 
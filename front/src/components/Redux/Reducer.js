import { GET_FAVORITOS } from "./Actions"

const initialState = {
    favoritos: [],

}


export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case GET_FAVORITOS:
            return {
                ...state,
                render: [...state.favoritos, action.payload]
            }
        default:
            return { ...state }
    }

}


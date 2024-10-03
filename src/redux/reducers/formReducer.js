
import { ADD_DATA, UPDATE_DATA, DELETE_DATA } from '../actions/formActions';

const initialState = {
    formData: [],
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                formData: [...state.formData, action.payload],
            };
        case UPDATE_DATA:
            const updatedData = [...state.formData];
            updatedData[action.payload.index] = action.payload.data;
            return {
                ...state,
                formData: updatedData,
            };
        case DELETE_DATA:
            return {
                ...state,
                formData: state.formData.filter((_, index) => index !== action.payload),
            };
        default:
            return state;
    }
};

export default formReducer;

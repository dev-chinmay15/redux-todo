
export const ADD_DATA = 'ADD_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export const addData = (data) => ({
    type: ADD_DATA,
    payload: data,
});

export const updateData = (index, data) => ({
    type: UPDATE_DATA,
    payload: { index, data },
});

export const deleteData = (index) => ({
    type: DELETE_DATA,
    payload: index,
});

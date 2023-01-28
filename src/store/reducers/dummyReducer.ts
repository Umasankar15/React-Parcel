type InitialStateType = {
    todos: any[]
;}

const initialState: InitialStateType = {
    todos: []
}

export default function dummyReducer(state=initialState, action: any): InitialStateType {
    const {type, payload} = action;

    switch(type) {
        case 'GET_TODOS':
                return {
                  ...state,
                  todos: [payload]
                }
        default:
            return {...state};
    }
    
}
import { SHOW_LOADER, HIDE_LOADER } from "./types"

const initialState={
    load:false
}

export const appReducer = (state=initialState,action) =>{
    switch(action.type){
        case SHOW_LOADER:
            return {...state, load:true}
        case HIDE_LOADER:
            return {...state, load:false}
        default: return state
    }
}
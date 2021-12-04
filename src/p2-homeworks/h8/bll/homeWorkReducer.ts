import {UserType} from "../HW8";


type ActionType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | 18
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {

            if (action.payload === 'up') {
                return [...state.sort((a,b) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1}
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1}
                    return 0
                })]
            }

            if (action.payload === 'down') {
                return [...state.sort((b,a) => {

                    if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1}
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1}
                    return 0
            })]
            }
        }
        case 'check':
            if (action.payload === 18) {
                return [...state.filter(el => el.age <= 18)]
        }
        default: return state
    }
}
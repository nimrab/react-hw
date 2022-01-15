
export type initialStateType = {
    loading: boolean
}

const initState = {
    loading: false
}

type ActionTypes = loadingACType

export const loadingReducer = (state:initialStateType = initState, action: ActionTypes): initialStateType => { // fix any
    switch (action.type) {
        case 'SWITCH-LOADER': {
            return {...state, loading: action.value}
        }
        default:
            return state
    }
}

type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (value: boolean) => {
    return {
        type: 'SWITCH-LOADER',
        value
    } as const

} // fix any

type PlotOptionsType = {
    [key: string]: string
}

export type InitialStyleStateType = {
    styles: PlotOptionsType,
    current: string
}


const initialState = {
    styles: {
        default: 'none',
        style1: 'blue',
        style2: 'green',
        style3: 'yellow',
    },
    current: 'none'
}


type actionType = ChangeBgACType

export const styleReducer = (state: InitialStyleStateType = initialState, action: actionType): InitialStyleStateType => {

    switch (action.type) {

        case 'CHANGE-BG':

            const keys: string[] = Object.keys(state.styles)
            const valueKey: string = keys.find(el => el === action.value) ?? 'default'

            return {...state, current: state.styles[valueKey]}

        default:
            return state
    }

}

type ChangeBgACType = ReturnType<typeof changeBgAC>

export const changeBgAC = (value: string) => {
    return {
        type: 'CHANGE-BG',
        value
    } as const
}
//export type ThemeType = 'default' | 'dark' | 'red' | 'soft'

type InitStateType = {
    exactTheme: string
}

const initState: InitStateType = {
    exactTheme: 'default'
}


export const themeReducer = (state: InitStateType = initState, action: AllActionsType): InitStateType => {
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {...state, exactTheme: action.exactTheme};
        }
        default:
            return state;
    }
};

type AllActionsType = ReturnType<typeof ChangeThemeAC>


export const ChangeThemeAC = (exactTheme: string) => {
    return {
        type: 'CHANGE_THEME',
        exactTheme
    } as const
};

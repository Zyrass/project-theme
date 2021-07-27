// Chargements des actions
import * as Actions from '../Actions/themeActions';

// Chargements des themes
import * as theme from '../../Themes/themes';

// Conception d'un tableau de theme
const arrayThemes = [
  theme.darkTheme, theme.brownTheme, theme.greenTheme, theme.redTheme,
  theme.blueTheme, theme.purpleTheme, theme.pinkTheme
];

// InitialState
const initialState = {
  theme: arrayThemes[ Math.floor( Math.random() * arrayThemes.length )]
}

// Export themeReducer
export const themeReducer = ( state:any = initialState, action: any ) => {
  switch ( action.type ) {
    case Actions.APPLY_THEME: {
      // vielle méthode (shallow copy);
      // return Object.assign({}, {theme: action.payload});

      // Nouvelle méthode ( deep copy);
      return JSON.parse( JSON.stringify({theme: action.payload}))
    }
    default: {
      return state;
    }
  }
}

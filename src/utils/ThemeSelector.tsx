// Dépendances
import styled from "styled-components";
import { useDispatch } from 'react-redux';

// Chargements des themes
import {
  darkTheme, brownTheme, greenTheme, blueTheme, redTheme, purpleTheme, pinkTheme
} from '../Themes/themes';

// Chargement de la méthode applyTheme dans themeActions
import { applyTheme } from '../Store/Actions/themeActions';

// Styled Components
const BTN = styled.button`
  padding: 5px;
  margin: 2px;
  height: 30px;
  width: 30px;
  border-radius: 3px;
  border: 1px dotted ${(props:any) => props.theme.primary };
`;

function ThemeSelector() {
  // hooks
  const dispatch = useDispatch();

  // Méthode pour changer de theme
  const handledChangedTheme = ( theme: any ) => {
    dispatch( applyTheme( theme ) );
  }

  return (
    <div style={{ display: "flex" }}>
      <BTN 
        onClick={() => handledChangedTheme(darkTheme)}
        style={{ backgroundColor: '#252525'}}
      ></BTN>

      <BTN 
        onClick={() => handledChangedTheme(brownTheme)}
        style={{ backgroundColor: '#7f4828'}}
      ></BTN>

      <BTN 
        onClick={() => handledChangedTheme(greenTheme)}
        style={{ backgroundColor: '#2b611c'}}
      ></BTN>

      <BTN 
        onClick={() => handledChangedTheme(blueTheme)}
        style={{ backgroundColor: '#253d73'}}
      ></BTN>

      <BTN 
        onClick={() => handledChangedTheme(purpleTheme)}
        style={{ backgroundColor: '#81329c'}}
      ></BTN>

      <BTN 
        onClick={() => handledChangedTheme(pinkTheme)}
        style={{ backgroundColor: '#ab0057'}}
      ></BTN>

      <BTN 
        onClick={() => handledChangedTheme(redTheme)}
        style={{ backgroundColor: '#b10001'}}
      ></BTN>

    </div>
  );
}

export default ThemeSelector;

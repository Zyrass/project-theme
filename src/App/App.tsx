// Dépendances
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

// Composants
import Navbar from '../Components/Navbar/Navbar';

// CSS
import './App.css';

// Styled Component
const GlobalStyled = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.backgroundColor };
    margin: 0;
  }
`;
const StyledP = styled.p`
  max-width: 900px;
  margin: 20px auto;
  padding: 25px;
  color: ${(props:any) => props.theme.primary };
`;
const StyledA = styled.a`
  color: ${(props:any) => props.theme.secondary };
  letter-spacing: 2px;
  text-decoration: none;
`;
const StyledEm = styled.em`
  color: ${(props:any) => props.theme.secondary };
  font-weight: 100;
`;
const StyledStrong = styled.strong`
  color: ${(props:any) => props.theme.secondary };
  font-weight: 700;
`;

function App() {

  // Hooks
  const theme = useSelector((state:any) => state.theme );
  
  return (
    <ThemeProvider theme = {theme}>
      <div className="App">
        <GlobalStyled />
        <Navbar />
        <main className="App__main">
          <StyledP>
            <StyledStrong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</StyledStrong> Animi omnis totam vel amet hic esse facilis id beatae quidem non, <StyledEm>aliquid qui sit sint molestias</StyledEm> repudiandae perspiciatis nemo delectus. Repudiandae dolorem nemo <StyledEm>similique</StyledEm> quo, obcaecati nihil dicta aspernatur numquam delectus sequi ipsa molestias voluptates quisquam saepe eveniet ut <StyledStrong>temporibus quos</StyledStrong>.
          </StyledP>
          <StyledA
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >Learn React</StyledA>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

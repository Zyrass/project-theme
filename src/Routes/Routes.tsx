// Dépendances
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Composants
import App from '../App/App';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={ () => <App /> } />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;

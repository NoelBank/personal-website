import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import Imprint from "./pages/imprint/Imprint";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/imprint">
          <Imprint />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

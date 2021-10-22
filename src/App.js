import "./App.css";

import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Currencies from "./pages/Currencies";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/currencies">
          <Currencies />
        </Route>

        <Route
          path="/price/:symbol"
          render={(routerProps) => <Price {...routerProps} />}
        >
          <Price />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

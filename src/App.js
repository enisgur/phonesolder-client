import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Components/Landing";
import GetQuoteModel from "./Components/Landing/Pages/GetQuote/PhoneModel";
import GetQuoteDetails from "./Components/Landing/Pages/GetQuote/QuoteDetails";

import {
  homePage,
  getQuotePage,
  getQuoteDetailsPage,
} from "./configs/datas/links";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={homePage} exact>
            <Landing />
          </Route>
          <Route path={getQuotePage} exact>
            <GetQuoteModel />
          </Route>
          <Route path={getQuoteDetailsPage}>
            <GetQuoteDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

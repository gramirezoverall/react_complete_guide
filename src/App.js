import {Route, Switch} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/quotes' exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail></QuoteDetail>
        </Route>
        <Route path='/new-quote'>
          <NewQuote></NewQuote>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

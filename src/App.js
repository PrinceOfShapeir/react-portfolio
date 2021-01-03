import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Main from './components/MainComponent'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Main />
          </Route>          
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/*import logo from './logo.svg';*/
import './App.css';
import { Route, BrowserRouter as Router, Switch, /*Redirect*/} from 'react-router-dom';
import Main from './components/MainComponent';
import Projects from './components/ProjectsComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Main />
          </Route>     
        </Switch>
      </Router>
    </div>
  );
}

export default App;

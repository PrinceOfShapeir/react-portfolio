/*import logo from './logo.svg';*/
import './App.css';
import { Route, BrowserRouter as Router, Switch, /*Redirect*/} from 'react-router-dom';
import Main from './components/MainComponent';
import Projects from './components/ProjectsComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

let baseUrl = process.env.PUBLIC_URL;
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={baseUrl + "/home"}>
            <Main />
          </Route>
          <Route path={baseUrl + "/projects"}>
            <Projects />
          </Route>
          <Route path={baseUrl + "/"}>
            <Main />
          </Route>     
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <TopBar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/posts'>
            <Home/>
          </Route>
          <Route exact path='/post/:postId'>
            <Single/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

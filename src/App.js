import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './Home';
import Create from './components/Create/Create';
import Update from './components/Update/Update';
import IdeaDetail from './components/IdeaDetail/IdeaDetail';
import{ BrowserRouter as Router,Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App h-screen">
      <Navigation/>
      <div className="content">
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/create">
            <Create/>
          </Route>
          <Route exact path="/ideas/:id/edit">
            <Update/>
          </Route>
          <Route exact path="/ideas/:id">
            <IdeaDetail/>
          </Route>
        </Switch>
      </div>   
    </div>
    </Router>
  );
}

export default App;

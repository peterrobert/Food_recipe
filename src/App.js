import './App.css';
import { Route, Switch } from 'react-router-dom';
import Categories from './components/containers/Categories';
import Group from './components/containers/Group';
import Recipe from './components/containers/Recipe';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Categories} exact />
        <Route path="/groups/:title/:name" component={Recipe} />
        <Route path="/groups/:title" component={Group} />
      </Switch>
    </main>
  );
}

export default App;

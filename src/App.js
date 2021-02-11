import './App.css';
import { Route, Switch } from 'react-router-dom';
import Categories from './components/Categories';
import Group from './components/Group';


function App() {
  return (
    <main>
    <Switch>
    <Route path='/' component={Categories}  exact/>
    <Route path='/groups/:title' component= {Group} />
     
    </Switch>
    </main>
  );
}

export default App;

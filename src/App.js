import logo from './logo.svg';
import './App.css';

//to bring the store
import { Provider } from 'react-redux'
import store from './store'

// for the router
// npm i react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Menu from './manu';

//bring components
import ShowProducts from './component/showProducts';
import ShowSelectedProducts from './component/showSelectedProducts'
import Payment from './component/payment'
import About from './component/about';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <Router>

          <Menu /> {/* to know the Menu */}

          <Switch>

            <Route path="/showProducts">
              <ShowProducts />
            </Route>
            <Route path="/showSelectedProducts">
              <ShowSelectedProducts />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/about">
              <About />
            </Route>

          </Switch>

        </Router>

      </Provider>
    </div>
  );
}

export default App;

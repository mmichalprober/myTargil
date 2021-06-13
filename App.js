
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './component/login/login'

import AllUser from './component/allUser'
import Aaaaaa from './component/aaaaaa'

import Register from './component/login/register'
import Home from './component/navbar/navbar'
import store from './redux/store'
import PictureHistory from './component/pictureHistory'
import AddPIcture from './component/addPIcture'
// import LoginMain from './component/login/loginMain'
import LoginP from './component/loginP'
import './App.css';

// import Background from './Assets/background'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Background/>  */}
        <Router>

          <Home></Home>

          <Switch>
            <Route path="/allUser" component={AllUser} />
            <Route path="/aaaaaa" component={Aaaaaa} />

            <Route path="/SignUP" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/LoginP" component={LoginP} />


            <Route path="/addPicture" component={AddPIcture} />
            <Route path="/PictureHistory" component={PictureHistory} />
            <Route path='/' component={Login} />
          </Switch>

        </Router>

      </Provider>
    </div>
  );
}

export default App;








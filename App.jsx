import {  Switch, Route} from 'react-router-dom';
import Login from './component/Login';
import Success from './component/Success';

 export default function App() {
  return (
    <>
    <div className="content-section">
      <Switch>
         <Route exact path="/">
            <Login />
          </Route>
         <Route exact path="/success">
            <Success />
          </Route>
      </Switch>
    </div>
    </>
  );
}




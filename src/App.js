import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AppContext from './app/context/AppContext';
import EntityView from './view/entity';
import Index from './view/index'
import AppCTX from './app/context/AppContext';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/entities/:id?" component={EntityView} />
          <Route path="/entities/add" component={EntityView} />
        </Switch>
      </BrowserRouter>
    );
  }
}
App.contextType = AppContext
export default props => (
  <AppCTX>
    <App  {...props} />
  </AppCTX>
)
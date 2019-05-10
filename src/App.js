import React,{Component} from 'react';
import AppContext from './app/context/AppContext';
import EntityView from './view/entity';
import AppCTX from './app/context/AppContext';

class App extends Component {
  render(){
    console.log(this)
    return (
      <EntityView />
    );
  }
}
App.contextType = AppContext
export default props => (
  <AppCTX>
    <App  {...props} />
  </AppCTX>
)
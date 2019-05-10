import React,{Component} from 'react'
import {EntityContext} from '../../app/context/EntityContext';
import EntityList from './list';
import EntityCTX from '../../app/context/EntityContext';

export class Entity extends Component {
    
    componentDidMount(){
        console.log(this)
    }
    render(){
        return (
            <React.Fragment>
                <EntityList />
            </React.Fragment>
        )
    }
}
Entity.contextType = EntityContext
export default props => (
    <EntityCTX>
        <Entity {...props} />
    </EntityCTX>
)
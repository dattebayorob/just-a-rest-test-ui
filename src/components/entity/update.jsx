import React,{Component} from 'react'
import { EntityContext } from '../../app/context/EntityContext';

export class EntityUpdate extends Component{
    
    render(){
        return (
            <div>
                update
            </div>
        )
    }
}

EntityUpdate.contextType = EntityContext
export default EntityUpdate
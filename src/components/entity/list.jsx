import React,{Component} from 'react'
import { EntityContext } from '../../app/context/EntityContext';

export class EntityList extends Component{
    
    render(){
        return (
            <div>
                list
            </div>
        )
    }
}

EntityList.contextType = EntityContext
export default EntityList
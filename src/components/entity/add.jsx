import React,{Component} from 'react'
import { EntityContext } from '../../app/context/EntityContext';

export class EntityAdd extends Component{
    
    render(){
        return (
            <div>
                add
            </div>
        )
    }
}

EntityAdd.contextType = EntityContext
export default EntityAdd
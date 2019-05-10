import React,{Component} from 'react'
import { Entity } from '../../components/entity';
import { AppContext } from '../../app/context/AppContext';

export class EntityView extends Component{
    componentDidMount(){
    }

    render(){
        console.log(this)

        return (
            <Entity />
        )
    }
}
EntityView.contextType = AppContext
export default EntityView

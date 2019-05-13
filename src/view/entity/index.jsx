import React,{Component} from 'react'
import { Entity } from '../../components/entity';
import { AppContext } from '../../app/context/AppContext';
import EntityCTX from '../../app/context/EntityContext'

export class EntityView extends Component{
    componentDidMount(){
    }

    render(){
        let {id} = this.props.match.params
        let view = 'list'
        if(id){
            view = 'update'
        }
        if(id && id === 'add'){
            view = 'add'
        }

        return (
            <Entity view={view} id={id}/>
        )
    }
}
EntityView.contextType = AppContext
export default props => (
    <EntityCTX>
      <EntityView  {...props} />
    </EntityCTX>
  )

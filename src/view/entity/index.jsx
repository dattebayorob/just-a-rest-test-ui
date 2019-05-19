import React,{Component} from 'react'
import { Entity } from '../../components/entity';
import { AppContext } from '../../app/context/AppContext';
import EntityCTX from '../../app/context/EntityContext';
import RenderIf from '../../components/common/renderif'
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

export class EntityView extends Component{
    componentDidMount(){
    }

    add = () => {
        this.props.history.push('/entities/add')
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
            <React.Fragment>
                <Entity view={view} id={id}/>
                <RenderIf test={view==='list'}>
                    <Fab color="secondary" aria-label="save" onClick={this.add}>
                        <Icon>add_icon</Icon>
                    </Fab>
                </RenderIf>
            </React.Fragment>
        )
    }
}
EntityView.contextType = AppContext
export default props => (
    <EntityCTX>
      <EntityView  {...props} />
    </EntityCTX>
  )

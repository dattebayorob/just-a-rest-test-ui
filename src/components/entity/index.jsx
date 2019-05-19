import React,{Component} from 'react'
import {EntityContext} from '../../app/context/EntityContext';
import EntityList from './list';
import EntityAdd from './add';
import EntityUpdate from './update';
import RenderIf from '../common/renderif'
import Loading from '../common/loading'

export class Entity extends Component {
    
    componentDidMount(){
    }
    
    render(){
        let {view, id} = this.props
        let {showLoading} = this.context
        return (
            <React.Fragment>
                <Loading show={showLoading}/>
                <RenderIf test={view==='list'}>
                    <EntityList />
                </RenderIf>
                <RenderIf test={view==='add'}>
                    <EntityAdd />
                </RenderIf>
                <RenderIf test={view==='update'}>
                    <EntityUpdate id={id}/>
                </RenderIf>
            </React.Fragment>
        )
    }
}
Entity.contextType = EntityContext
export default Entity
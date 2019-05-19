import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
export const EntityContext = React.createContext()
export const EntityProvider = EntityContext.Provider
export const EntityConsumer = EntityContext.Consumer

class EntityCTX extends Component{
    
    state = {
        entities: [],
        entity: {},
        filters: {},
        page: {},
        showLoading: false,
        reload: false
    }

    setEntities = (entities) => {
        this.setState({entities})
    }

    setFilters = (filters) => {
        this.setState({filters})
    }

    setPage = (page) => {
        this.setState({page})
    }

    setEntity = (entity) => {
        this.setState({entity})
    }

    setReload = () => {
        let {reload}  = this.state
        this.setState({reload: !reload})
    }

    setShowLoading = (show) => {
        this.setState({showLoading: show})
    }

    redirect = (uri) => {
        this.props.history.push(uri)
    }

    render(){
        let ctx = {
            ...this.state,
            ...this
        }
        return (
            <EntityProvider value={ctx} >
                {this.props.children}
            </EntityProvider>
        )
    }
}
export default withRouter(EntityCTX)
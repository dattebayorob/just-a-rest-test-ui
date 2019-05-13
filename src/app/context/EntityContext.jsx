import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
export const EntityContext = React.createContext()
export const EntityProvider = EntityContext.Provider
export const EntityConsumer = EntityContext.Consumer

class EntityCTX extends Component{
    
    state = {
        entities: [],
        entity: {},
        filters: {}
    }

    setEntities = (entities) => {
        this.setState({entities})
    }

    setFilters = (filters) => {
        this.setState({filters})
    }

    setEntity = (entity) => {
        this.setState({entity})
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
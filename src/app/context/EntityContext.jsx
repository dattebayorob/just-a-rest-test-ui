import React,{Component} from 'react'

export const EntityContext = React.createContext()
export const EntityContextConsumer = EntityContext.Consumer

export default class EntityCTX extends Component{
    view = {
        list:{
            title: "Entity",
            icon: "",
            small: "Search Entities"
        },
        edit:{
            title: "Entity",
            icon: "",
            small: "Edite Entity"
        },
        insert:{
            title: "Entity",
            icon: "",
            small: "Insert Entity"
        }
    }
    state = {
        view: this.view.list,
        entities: [],
        entity: {},
        filters: {}
    }

    setView = (nextView) => {
        this.setState({view: this.view[nextView]})
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

    render(){
        console.log(this)
        let ctx = {
            ...this.state,
            setEntity: this.setEntity
        }
        return (
            <EntityContext.Provider value={ctx} >
                {this.props.children}
            </EntityContext.Provider>
        )
    }
}
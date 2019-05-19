import React, { Component } from 'react';
import { EntityContext } from '../../app/context/EntityContext';
import { Api } from '../../app/service/entity';
import { handleErrors } from '../../app/utils/errors'
import { showSuccess } from '../../app/utils/toastify';
import EntityForm from '../common/form/Entity'

export class EntityUpdate extends Component{
    state = {
        entity: {},
    }
    constructor(){
        super()
        this.service = new Api()
    }
    componentDidMount(){
        this.getById(this.props.id)
    }

    getById = async (id) => {
        try{
            this.context.setShowLoading(true)
            let response = await this.service.getById(id)
            this.setState({entity: response.data.data})
        }catch(exception){
            handleErrors(exception)
            this.list()  
        }
        this.context.setShowLoading(false)
    }

    save = async (event) => {
        event.preventDefault()
        let {entity} = this.state
        try{
            this.context.setShowLoading(true)
            await this.service.update(entity)
            showSuccess(`Entity updated succefully`)
            this.context.setShowLoading(false)
            this.list()
        }catch(exception){
            handleErrors(exception)
        }
    }

    list = () => {
        this.context.setReload()
        this.context.redirect('/entities')
    }

    onChange = event => {
        let {entity} = this.state
        let {id, value} = event.target
        entity[id] = value
        this.setState({entity})
    }

    render(){
        let {entity} = this.state
        return (
            <EntityForm data={entity} 
                onSubmit={this.save}
                onChange={this.onChange}
                onCancel={this.list}
                 />
        )
    }
}

EntityUpdate.contextType = EntityContext
export default EntityUpdate
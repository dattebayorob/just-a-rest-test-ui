import React,{Component} from 'react'
import { EntityContext } from '../../app/context/EntityContext';
import { Api } from '../../app/service/entity';
import { handleErrors } from '../../app/utils/errors'
import { showSuccess } from '../../app/utils/toastify';
import EntityForm from '../common/form/Entity'

export class EntityAdd extends Component{
    state = {
        entity: {},
    }
    constructor(){
        super()
        this.service = new Api()
    }

    componentDidMount(){

    }

    save = async (event) => {
        event.preventDefault()
        let {entity} = this.state
        try{
            this.context.setShowLoading(true)
            const response = await this.service.save(entity)
            showSuccess(`Entity saved succefully`)
            this.context.setShowLoading(false)
            this.context.redirect(`/entities/${response.data.data.id}`)
        }catch(exception){
            handleErrors(exception)
        }
    }

    onCancel = () => {
        this.setState({entity : {}})
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
                onCancel={this.onCancel}
                 />
        )
    }
}

EntityAdd.contextType = EntityContext
export default EntityAdd
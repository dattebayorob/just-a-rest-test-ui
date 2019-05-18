import React,{Component} from 'react'
import { EntityContext } from '../../app/context/EntityContext';
import { Api } from '../../app/service/entity';
import Error from '../common/error'
import { TextField, Button, FormControl } from '@material-ui/core';

export class EntityUpdate extends Component{
    state = {
        entity: {},
        errors: []
    }
    constructor(){
        super()
        this.service = new Api()
    }
    componentDidMount(){
        this.getById(this.props.id)
    }

    getById = async (id) => {
        await this.service.getById(id).then(response => {
            this.setState({entity: response.data.data})
        }).catch(exception => {
            console.log(exception)
        })
    }

    save = async (event) => {
        event.preventDefault()
        let {entity} = this.state
        
        await this.service.update(entity).then(response => {
            alert('Saved')
            this.list()
        }).catch(exception => {
            this.setState({errors: exception.response.data.errors})
        })
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
        let {entity,errors} = this.state
        return (
            <form style={{display:'flex', justifyContent: 'center', flexDirection: 'column'}} 
                onSubmit={(event) => this.save(event)}>
                <FormControl>
                    <TextField id="name" label="Name" value={entity.name || ''} 
                        onChange={(event) => this.onChange(event)} margin="normal" required />
                    <TextField id="cpf" label="Cpf" value={entity.cpf || ''}
                        onChange={(event)=>this.onChange(event)} margin="normal" required />
                    <TextField id="rg" label="Date" value={entity.rg || ''}
                        onChange={(event)=>this.onChange(event)} margin="normal" required />
                    <Button color="primary" type="submit">Save</Button>
                    <Button color="secondary" onClick={()=> this.context.redirect('/entities')}>Cancel</Button>
                </FormControl>
                <Error errors={errors}/>
            </form>
            
        )
    }
}

EntityUpdate.contextType = EntityContext
export default EntityUpdate
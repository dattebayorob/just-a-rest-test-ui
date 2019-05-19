import { Button, FormControl, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { EntityContext } from '../../app/context/EntityContext';
import { Api } from '../../app/service/entity';
import { handleErrors } from '../../app/utils/errors'
import { showSuccess } from '../../app/utils/toastify';

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
        await this.service.getById(id).then(response => {
            this.setState({entity: response.data.data})
        }).catch(exception => {
            handleErrors(exception)
            this.list()
        })
    }

    save = async (event) => {
        event.preventDefault()
        let {entity} = this.state
        
        await this.service.update(entity).then(response => {
                showSuccess("Entity updated succefully!")
                this.list()
        }).catch(exception => handleErrors(exception))
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
            </form>
            
        )
    }
}

EntityUpdate.contextType = EntityContext
export default EntityUpdate
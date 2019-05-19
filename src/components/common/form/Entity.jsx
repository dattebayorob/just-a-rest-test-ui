import React from 'react'
import { Button, FormControl, TextField } from '@material-ui/core';

export default props => {
    let {data, onChange, onCancel, onSubmit} = props
    return (
    <form style={{display:'flex', justifyContent: 'center', flexDirection: 'column'}}
        onSubmit={(event) => onSubmit(event)}>
        <FormControl>
            <TextField id="name" label="Name" value={data.name || ''} 
                onChange={(event) => onChange(event)} margin="normal" required />
            <TextField id="cpf" label="Cpf" value={data.cpf || ''}
                onChange={(event)=> onChange(event)} margin="normal" required />
            <TextField id="rg" label="Rg" value={data.rg || ''}
                onChange={(event)=> onChange(event)} margin="normal" required />
            <Button color="primary" type="submit">Save</Button>
            <Button color="secondary" onClick={()=> onCancel()}>Cancel</Button>
        </FormControl>
    </form>
)}
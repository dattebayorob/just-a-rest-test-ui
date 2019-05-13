import React,{Component} from 'react'
import { EntityContext } from '../../app/context/EntityContext';
import { Api } from '../../app/service/entity'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconEdit from '@material-ui/icons/Edit'
import IconDelete from '@material-ui/icons/Delete'
import { TableFooter, TablePagination } from '@material-ui/core';

export class EntityList extends Component{
    state ={
        entities: [],
        page : {
            size: 5,
            number: 0,
            offset: 0,
            pages: 0,
            total: 0
        },
        filters: {}
    }

    constructor(){
        super()
        this.service = new Api()
    }

    componentDidMount(){
        this.get()
    }

    get = () => {
        let filters = this.filter()
        this.service.get(filters).then(response => {
            let {content, ...pagination} = response.data
            this.context.setEntities(content)
            this.setState({entities: content, page: this.convertPagination(pagination)})
        }).catch(exception => {
            console.log(exception)
        })
    }

    filter = () => {
        let { page } = this.state
        let { filters } = this.state
        filters['page'] = page.number
        filters['size'] = page.size
        this.setState({filters})
        return filters
    }

    convertPagination = (pagination) => {
        let {pageable, totalPages, totalElements} = pagination
        let page = {
            size: pageable.pageSize,
            number: pageable.pageNumber,
            offset: pageable.offset,
            pages: totalPages,
            total: totalElements
        }
        this.setState({page})
        return page
    }

    edit = (id) => {
        this.context.redirect(`/entities/${id}`)
    }

    add = () => {
        this.context.redirect('/entities/add')
    }

    delete = (id) => {
        this.service.delete(id).then(response => {
            alert('Deleted')
            this.get()
        }).catch(exception => {
            console.log(exception)
        })
    }

    onChangePage = (event, pageNumber) => {
        let {page} = this.state
        page['number'] = pageNumber
        this.setState({page},()=>this.get())
    }

    onChangeRowsPerPage = (event) => {
        let {value} = event.target
        let {page} = this.state
        page['size'] = value
        this.setState({page},()=>this.get())
    }

    render(){
        let {entities, page} = this.state
        return (
            <div>
                <Table>

                <TableHead>
                    <TableRow>
                        <TableCell padding="default" align="center" colSpan={1}>ID</TableCell>
                        <TableCell padding="default" colSpan={2}>Name</TableCell>
                        <TableCell padding="default" colSpan={2}>Cpf</TableCell>
                        <TableCell padding="default" colSpan={1}></TableCell>    
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(entities) && 
                            entities.map(entity => {
                                return (
                                    <TableRow key={entity.id} >
                                        <TableCell align='center' padding='default' colSpan={1}>
                                            {entity.id}
                                        </TableCell>
                                        <TableCell align='left' padding='default' colSpan={2}>
                                            {entity.name}
                                        </TableCell>
                                        <TableCell align='left' padding='default' colSpan={2}>
                                            {entity.cpf}
                                        </TableCell>
                                        <TableCell align='right'>
                                            <IconEdit onClick={() => this.edit(entity.id)}
                                                style={{cursor: 'pointer'}}/>
                                            <IconDelete onClick={() => this.delete(entity.id)}
                                                style={{cursor: 'pointer'}}/>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination 
                            rowsPerPageOptions={[5, 10, 20]}
                            count={page.total}
                            rowsPerPage={page.size}
                            page={page.number}
                            onChangePage={this.onChangePage}
                            onChangeRowsPerPage={this.onChangeRowsPerPage}
                            />
                    </TableRow>
                </TableFooter>
                </Table>
            </div>
        )
    }
}

EntityList.contextType = EntityContext
export default EntityList
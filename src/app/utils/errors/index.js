import {showError, showWarning} from '../toastify'

export const handleErrors = (error) => {
    if(error.response){
        errorWithResponse(error.response);
        return
    }
    if(error.request){
        errorRequest(error.request)
        return
    }
    showError("Something went wrong!")
}

const errorRequest = (request) => {
    console.log(request)
    showError("Error contacting Api")
}

const errorWithResponse = (response) => {
    switch(response.status){
        case 404:
            notFound(response); break;
        case 400:
            badRequest(response); break;
        default:
            showWarning('error'); break;
    }
}

const badRequest = (response) => {
    let{errors} = response.data
    if(errors){
        errors.map(error => {
            showError(error)
        })
    }
}

const notFound = (response) => {
    let { errors } = response.data
    if(!errors){
        showError('Resource not found');
        return
    }
    errors.map(error => {
        showError(error)
    })
}
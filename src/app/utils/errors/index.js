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
    console.log(error)
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
    mapErrors("Bad Request", errors)
}

const notFound = (response) => {
    let { errors } = response.data
    mapErrors("Resource Not Found", errors)
}

function mapErrors(defaultMessage, errors){
    if(!errors){
        showError(defaultMessage)
        return
    }
    errors.map(error => showError(error))
}
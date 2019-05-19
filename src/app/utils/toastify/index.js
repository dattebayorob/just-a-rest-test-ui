import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import './styles.css'

const defaultOptions = {
  duration: 5000,
  close: true
}

export const showWarning = (message) => {
  Toastify({
      ...defaultOptions,
      text: `Warning<br />${message}`,
      className: "toastify toastify-warning",
    }).showToast();
}

export const showError = (message) => {
  Toastify({
    ...defaultOptions,
    text: `Error<br />${message}`,
    className: "toastify toastify-error",
  }).showToast();
}

export const showSuccess = (message) => {
  Toastify({
    ...defaultOptions,
    text: `Error<br />${message}`,
    className: "toastify toastify-success",
  }).showToast();
}
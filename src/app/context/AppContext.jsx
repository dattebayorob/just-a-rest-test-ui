import React, {Component} from 'react'

export const AppContext = React.createContext()
export const AppContextConsumer = AppContext.Provider

export default class AppCTX extends Component{

    render(){
        let ctx = {
            test: true
        }
        return (
            <AppContext.Provider value={ctx}>
                <AppContextConsumer>
                    {this.props.children}
                </AppContextConsumer>
            </AppContext.Provider>
        )
    }
}
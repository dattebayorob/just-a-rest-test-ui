import React, {Component} from 'react'

export const AppContext = React.createContext()
// export const AppContextConsumer = AppContext.Provider

export default class AppCTX extends Component{

    render(){
        let ctx = {
            appName: "ITS JUST A REST TEST!"
        }
        
        return (
            <AppContext.Provider value={ctx}>
                    {this.props.children}
            </AppContext.Provider>
        )
    }
}
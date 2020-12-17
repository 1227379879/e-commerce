import React from "react"
import {Route ,Switch ,  BrowserRouter} from "react-router-dom"
import Home from "../page/home/index"
import commodity from "../page/commodityType/index"

const App = ()=> (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/commodity" exact={true} component={commodity}/>
        </Switch>

    </BrowserRouter>
)

export default App
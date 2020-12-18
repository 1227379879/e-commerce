import React from "react"
import {Route ,Switch ,  BrowserRouter} from "react-router-dom"
import Home from "../page/home/index"
import commodity from "../page/commodityType/index"
import tabs from "../page/tabs";
import manageInventory from "../page/manageInventory";
const App = ()=> (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/commodity" exact={true} component={commodity}/>
            <Route path="/tabs" exact={true} component={tabs}/>
            <Route path="/manageInventory" exact={true} component={manageInventory}/>
        </Switch>

    </BrowserRouter>
)

export default App
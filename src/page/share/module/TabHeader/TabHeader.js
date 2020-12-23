import React,{useState} from "react"
import "./TabHeader.css"
import {Tabs} from 'antd';
import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import Tab3 from "../components/Tab3";

function TabHeader() {
    const { TabPane } = Tabs;
    let [data] = useState({

    })
    let callback = (key) => {
        console.log(key);
    }
    return (
        <div className="TabHeader">
            <Tabs onChange={callback} type="card">
                <TabPane tab="货件" key="1">
                    <Tab1></Tab1>
                </TabPane>
                <TabPane tab="入库计划" key="2">
                    <Tab2></Tab2>
                </TabPane>
                <TabPane tab="共享的货件" key="3">
                    <Tab3></Tab3>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default TabHeader
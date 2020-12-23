import React from "react"
import "./Tab3.css"
import {MessageOutlined} from '@ant-design/icons';
import THeaderTab from "../../THeaderTab";

function Tab3() {
    return (
        <div className="TabHeader-Tab3">
            <div className="TabHeader-Tab3-scope">
                日期范围:
                <select>
                    <option value="...">所有</option>
                </select>
            </div>
            <THeaderTab></THeaderTab>
            <div className="TabHeader-message">
                <div className="THeader-message-left">
                    <MessageOutlined/>
                </div>
                <div className="THeader-message-right">
                    请使用供应链关联与您的供应链参与者共享货件。供应链关联为您的供应商提供了一个中心门户，让他们可以轻松下载亚马逊物流货件标签并更准确地处理您的亚马逊物流货件。
                    <span>详细了解供应链关联</span>
                </div>
            </div>
        </div>
    )
}

export default Tab3
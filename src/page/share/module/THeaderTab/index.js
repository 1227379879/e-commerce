import React from "react"
import "./THeaderTab.css"

function THeaderTab(){
return(
    <div>
        <div className="TabHeader-Tab3-show">
            <div className="THeader-T3-show-left">
                <span>显示:</span>
                <input type="radio" name="show" id="show1"/>
                <label htmlFor="show1">所有</label>
                <input type="radio" name="show" id="show2"/>
                <label htmlFor="show2">处理中</label>
                <input type="radio" name="show" id="show3"/>
                <label htmlFor="show3">在途</label>
                <input type="radio" name="show" id="show4"/>
                <label htmlFor="show4">运营中心</label>
                <input type="radio" name="show" id="show5"/>
                <label htmlFor="show5">已完成</label>
                <input type="radio" name="show" id="show6"/>
                <label htmlFor="show6">已移除</label>
            </div>
            <div className="THeader-T3-show-right">
                <input placeholder="按货件编号搜索"/>
                <button>GO</button>
            </div>
        </div>
    </div>
)
}

export default THeaderTab
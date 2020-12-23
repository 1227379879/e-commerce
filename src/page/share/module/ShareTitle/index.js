import React from "react"
import "./title.css"

function ShareTitle() {
    return(
        <div className="share-title">
            <div className="share-title-left">
                <span>货物处理进度</span>
                <span>了解更多信息</span>
            </div>
            <div className="share-title-right">
                <button>查看"已接受库存"报告。</button>
                <button>继续处理入库计划</button>
            </div>
        </div>
    )
}

export default ShareTitle
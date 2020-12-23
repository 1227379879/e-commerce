import React from "react"
import "./TopNavigation.css"

function TopNavigation() {
    return (
        <div className="TopNavigation">
            <a>Send to Amazon</a><span>|</span>
            <div className="TopNavigation-color1">新功能</div><span>|</span>
            <div className="TopNavigation-color2">货件处理进度</div><span>|</span>
            <a>入库问题一览</a><span>|</span>
            <a>扫描和贴标</a><span>|</span>
            <a>上传入库计划文件</a>
        </div>
    )
}

export default TopNavigation
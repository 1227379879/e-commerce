import React, {useState} from "react"
import "./Tab1.css"
import THeaderTab from "../../THeaderTab";

function Tab1() {
    let [data] = useState({
        productList: [
            {
                id: 1,
                name: "tangUi1212",
                number: "FBA15V1",
                time: "2020年12月12日",
                updata: "2020年12月20日",
                MSKU: "1",
                shipments: "2",
                receive: "0",
                destination: "ONT8",
                status: "已删除"
            },
            {
                id: 2,
                name: "tangHui1212",
                number: "FBA15V2",
                time: "2020年12月12日",
                updata: "2020年12月20日",
                MSKU: "3",
                shipments: "4",
                receive: "0",
                destination: "STL4",
                status: "已删除"
            },
            {
                id: 3,
                name: "tangI1212",
                number: "FBA15V3",
                time: "2020年12月12日",
                updata: "2020年12月20日",
                MSKU: "9",
                shipments: "1",
                receive: "0",
                destination: "IND20",
                status: "已删除"
            },
            {
                id: 4,
                name: "tangI1212",
                number: "FBA15V3",
                time: "2020年12月12日",
                updata: "2020年12月20日",
                MSKU: "5",
                shipments: "5",
                receive: "0",
                destination: "IND21",
                status: "已删除"
            },
            {
                id: 5,
                name: "tangI12120",
                number: "FBA15V32",
                time: "2020年12月12日",
                updata: "2020年12月20日",
                MSKU: "3",
                shipments: "1",
                receive: "0",
                destination: "IND22",
                status: "已删除"
            },
            {
                id: 6,
                name: "tangI1211",
                number: "FBA15V33",
                time: "2020年12月12日",
                updata: "2020年12月20日",
                MSKU: "4",
                shipments: "7",
                receive: "0",
                destination: "IND23",
                status: "已删除"
            },
            {
                id: 7,
                name: "tangI1213",
                number: "FBA15V3",
                time: "2020年12月12日",
                updata: "2020年12月20日",
                MSKU: "5",
                shipments: "8",
                receive: "0",
                destination: "IND23",
                status: "已删除"
            },
            {
                id: 8,
                name: "tangI12124",
                number: "FBA15V34",
                time: "2020年12月12日",
                updata: "2020年12月20日",
                MSKU: "6",
                shipments: "9",
                receive: "0",
                destination: "IND24",
                status: "已删除"
            },
        ]
    })

    return (
        <div className="TabHeader-Tab1">
            <div className="TabHeader-Tab3-scope">
                日期范围:
                <select>
                    <option value="...">所有</option>
                </select>
            </div>
            <THeaderTab></THeaderTab>
            <div className="THeader-Tab1">
                <div></div>
                <div className="THeader-Tab1-right">
                    <span>页</span>
                    <span>1</span>
                    <span>下一页></span>
                </div>
            </div>
            <div className="THeader-Tab1-productList-title">
                <div className="TH-T1-pList-name TH-T1-pList-global">
                    姓名
                </div>
                <div className="TH-T1-pList-number TH-T1-pList-global">
                    货件编号
                </div>
                <div className="TH-T1-pList-time TH-T1-pList-global">
                    创建时间
                </div>
                <div className="TH-T1-pList-update TH-T1-pList-global">
                    上次更新
                </div>
                <div className="TH-T1-pList-maku TH-T1-pList-global">
                    MSKU
                </div>
                <div className="TH-T1-pList-shipments TH-T1-pList-global">
                    与发货
                </div>
                <div className="TH-T1-pList-receive TH-T1-pList-global">
                    与收到
                </div>
                <div className="TH-T1-pList-destination TH-T1-pList-global">
                    目的地
                </div>
                <div className="TH-T1-pList-status TH-T1-pList-global">
                    状态
                </div>
            </div>
            {
                data.productList.map(item => {
                    return (
                        <div className="THeader-Tab1-productList" key={item.id}>
                            <div className="TH-T1-pList-name TH-T1-pList-global">
                                {item.name}
                            </div>
                            <div className="TH-T1-pList-number TH-T1-pList-global">
                                {item.number}
                            </div>
                            <div className="TH-T1-pList-time TH-T1-pList-global">
                                {item.time}
                            </div>
                            <div className="TH-T1-pList-update TH-T1-pList-global">
                                {item.updata}
                            </div>
                            <div className="TH-T1-pList-maku TH-T1-pList-global">
                                {item.MSKU}
                            </div>
                            <div className="TH-T1-pList-shipments TH-T1-pList-global">
                                {item.shipments}
                            </div>
                            <div className="TH-T1-pList-receive TH-T1-pList-global">
                                {item.receive}
                            </div>
                            <div className="TH-T1-pList-destination TH-T1-pList-global">
                                {item.destination}
                            </div>
                            <div className="TH-T1-pList-status TH-T1-pList-global">
                                {item.status}
                            </div>
                            <div className="TH-T1-pList-button TH-T1-pList-global">
                                <button>查看货件</button>
                                <div>
                                    下载<span>SKU</span>列表
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="THeader-Tab1">
                <div></div>
                <div className="THeader-Tab1-right">
                    <span>页</span>
                    <span>1</span>
                    <span>下一页></span>
                </div>
            </div>
            <div style={{fontSize: "12px"}}>
                *请注意，您必须自行根据库存所在地的规定进行报告、支付销售、使用、财产、收入、其他税务方面的费用。
            </div>
        </div>
    )
}

export default Tab1
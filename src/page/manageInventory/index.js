import React,{useState} from "react"
import "./manage-inventory.css"
import FooterCom from "../../components/FooterCom/FooterCom";
import HeaderCom from "../../components/HeaderCom/HeaderCom";
import IconFont from "../../components/Icon/Icon";

function ManageInventory() {
    let [data] = useState({
        ManageInventoryList:[
            {id: 1, state: "未完成", image:""},
            {id: 2, state: "不可售", image:""},
            {id: 3, state: "禁止显示", image:""}
        ]
    });


    return (
        <div>
            <HeaderCom></HeaderCom>
            <div className="manageInventory">
                <ul className="manageInventory-header">
                    <li>所有库存</li>
                    <span>|</span>
                    <li>不活动(7)</li>
                    <span>|</span>
                    <li>修复无在售信息的亚马逊库存(1)</li>
                    <span>|</span>
                    <li>修复价格警告(1)</li>
                    <span>|</span>
                    <li>品牌健康度(0)</li>
                    <span>|</span>
                    <li>禁止显示</li>
                    <span>|</span>
                    <li>管理定价</li>
                    <span>|</span>
                    <li>亚马逊存库</li>
                    <span>|</span>
                    <li>货件处理进度</li>
                    <span>|</span>
                    <li>库存控制面板</li>
                    <span>|</span>
                    <li>商品信息质量控制面板</li>
                    <li>新功能</li>
                </ul>
                <div className="manageInventory-Title">
                    <div className="manage-Title-left">
                        <div className="manage-Tit-l">管理库存</div>
                        <div className="manage-Tit-r">
                            <span>了解更多信息</span>
                            <span>|</span>
                            <span>浏览</span>
                        </div>
                    </div>
                    <div className="manage-Title-right">
                        <button>添加一个商品变体</button>
                        <button>添加新商品</button>
                        <button>首选项：隐藏2列</button>
                        <span>新功能</span>
                    </div>
                </div>
                <div className="manageInventory-DropdownSearch">
                    <select>
                        <option value="...">应用于0件选定商品</option>
                    </select>
                    <div className="manageInventory-Search">
                        <IconFont type="icon-sousuo"/>
                        <input placeholder="搜索 SKU、标题、ISBN"/>
                    </div>
                    <button>搜索</button>
                    <div className="manageInventory-Piece">126件商品</div>
                </div>
                <div className="manageInventory-radio">
                    <div className="manageInventory-screen">筛选条件:</div>
                    <div className="manageInventory-state">
                        商品状态:
                        <input type="radio" name="state" id="state1"/>
                        <label htmlFor="state1">所有</label>
                        <input type="radio" name="state" id="state2"/>
                        <label htmlFor="state2">在售</label>
                        <input type="radio" name="state" id="state3"/>
                        <label htmlFor="state3">不可售</label>
                        <input type="radio" name="state" id="state4"/>
                        <label htmlFor="state4">不完整</label>
                        <input type="radio" name="state" id="state5"/>
                        <label htmlFor="state5">商品信息已删除</label>
                    </div>
                    <span>|</span>
                    <div className="manageInventory-state">
                        商品状态:
                        <input type="radio" name="type" id="type1"/>
                        <label htmlFor="type1">所有</label>
                        <input type="radio" name="type" id="type2"/>
                        <label htmlFor="type2">亚马逊</label>
                        <input type="radio" name="type" id="type3"/>
                        <label htmlFor="type3">卖家</label>
                    </div>
                    <span>|</span>
                    <select>
                        <option value="...">筛选其他条件</option>
                    </select>
                </div>
                <div className="manageInventory-orderForm">
                    <div className="manage-orderForm-top">
                        <div className="manage-orderForm-radio manage-orderForm-margin">
                            <input type="checkbox" name="item"></input>
                        </div>
                        <div className="manage-orderForm-color manage-orderForm-state manage-orderForm-margin">
                            状态
                        </div>
                        <div className="manage-orderForm-image manage-orderForm-margin">
                            图片
                        </div>
                        <div className="manage-orderForm-condition manage-orderForm-margin">
                            <div>SKU</div>
                            <div className="manage-orderForm-weight">状况</div>
                        </div>
                        <div className="manage-orderForm-serialNumber manage-orderForm-margin">
                            商品编号
                        </div>
                        <div className="manage-orderForm-name manage-orderForm-margin">
                            <div className="manage-orderForm-color">
                                商品名称
                            </div>
                            <div className="manage-orderForm-weight">
                                ASIN
                            </div>
                        </div>
                        <div className="manage-orderForm-date manage-orderForm-margin">
                            <div>创建日期</div>
                            <div className="manage-orderForm-weight">状况更新日期</div>
                        </div>
                        <div className="manage-orderForm-color manage-orderForm-endibility manage-orderForm-margin">
                            可售
                        </div>
                        <div className="manage-orderForm-color manage-orderForm-bePutInStorage manage-orderForm-margin">
                            入库数量
                        </div>
                        <div className="manage-orderForm-color manage-orderForm-doNotSell manage-orderForm-margin">
                            不可售数量
                        </div>
                        <div className="manage-orderForm-color manage-orderForm-reserved manage-orderForm-margin">
                            预留数量
                        </div>
                        <div className="manage-orderForm-estimatedCost manage-orderForm-margin">
                            每件售出商品的预计费用
                        </div>
                        <div className="manage-orderForm-price manage-orderForm-margin">
                            <div className="manage-orderForm-color">
                                价格
                            </div>
                            <div className="manage-orderForm-weight">
                                + 配送费
                            </div>
                        </div>
                        <div className="manage-orderForm-enterprisePrice manage-orderForm-margin">
                            <div>
                                企业商品价格
                            </div>
                            <div className="manage-orderForm-weight">
                                + 配送费
                            </div>
                        </div>
                        <div className="manage-orderForm-reservePrice manage-orderForm-margin">
                            <div>
                                最低价
                            </div>
                            <div className="manage-orderForm-weight">
                                + 配送费
                            </div>
                        </div>
                        <div className="manage-orderForm-salesRank manage-orderForm-margin">
                            销售排名
                        </div>
                        <div className="manage-orderForm-buttonPrice manage-orderForm-margin">
                            <div>
                                购买按钮价格
                            </div>
                            <div className="manage-orderForm-weight">
                                +配送费
                            </div>
                        </div>
                        <div className="manage-orderForm-buttonStatus manage-orderForm-margin">
                            获得购买按钮价格的资格
                        </div>
                        <div className="manage-orderForm-fnSku manage-orderForm-margin">
                            FN SKU
                        </div>
                        <div className="manage-orderForm-color manage-orderForm-distribution manage-orderForm-margin">
                            订单配送方
                        </div>
                        <div className="manage-orderForm-upcEan manage-orderForm-margin">
                            UPC/EAN
                        </div>
                        <div className="manage-orderForm-save manage-orderForm-margin">
                            <button>保存所有</button>
                        </div>
                    </div>
                    <div>
                        {
                            data.ManageInventoryList.map((item,index)=>{
                                return(
                                    <div className="manage-orderForm-data" key={item.id}>
                                        <div className="manage-orderForm-radio manage-orderForm-dingDan">
                                            <input type="checkbox" name="item"></input>
                                        </div>
                                        <div className=" manage-orderForm-state manage-orderForm-dingDan">
                                            {item.state}
                                        </div>
                                        <div className="manage-orderForm-image manage-orderForm-dingDan">
                                            <img src={item.image}></img>
                                        </div>
                                        <div className="manage-orderForm-condition manage-orderForm-dingDan">
                                            <div>
                                                POLO11
                                            </div>
                                            <div className="manage-orderForm-weight">状况</div>
                                        </div>
                                        <div className="manage-orderForm-serialNumber manage-orderForm-dingDan">
                                            jdhjashjbc1235
                                        </div>
                                        <div className="manage-orderForm-name manage-orderForm-dingDan">
                                            <div className="">
                                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                            </div>
                                            <div className="manage-orderForm-weight">
                                                bbbbbbbbb
                                            </div>
                                        </div>
                                        <div className="manage-orderForm-date manage-orderForm-dingDan">
                                            <div>12/13/2020 02:32:03</div>
                                            <div className="manage-orderForm-weight">
                                                12/13/2020 02:31:41
                                            </div>
                                        </div>
                                        <div className=" manage-orderForm-endibility manage-orderForm-dingDan">
                                            <input type="text" placeholder={0}/>
                                        </div>
                                        <div className=" manage-orderForm-bePutInStorage manage-orderForm-dingDan">
                                            {item.bePutInStorage}
                                        </div>
                                        <div className=" manage-orderForm-doNotSell manage-orderForm-dingDan">
                                            {item.doNotSell}-
                                        </div>
                                        <div className=" manage-orderForm-reserved manage-orderForm-dingDan">
                                            {item.reserved}-
                                        </div>
                                        <div className="manage-orderForm-estimatedCost manage-orderForm-dingDan">
                                            {item.estimatedCost}--
                                        </div>
                                        <div className="manage-orderForm-price manage-orderForm-dingDan">
                                            <div className="">
                                                <input type="text" placeholder={0}/>
                                            </div>
                                            + --
                                            <div className="manage-orderForm-weight">
                                                + 配送费
                                            </div>
                                        </div>
                                        <div className="manage-orderForm-enterprisePrice manage-orderForm-dingDan">
                                            <div>
                                                <input type="text" placeholder={0}/>
                                            </div>
                                            <div className="manage-orderForm-weight">
                                                + 配送费
                                            </div>
                                        </div>
                                        <div className="manage-orderForm-reservePrice manage-orderForm-dingDan">
                                            <div>
                                                -
                                            </div>
                                            <div className="manage-orderForm-weight">
                                                + --
                                            </div>
                                        </div>
                                        <div className="manage-orderForm-salesRank manage-orderForm-dingDan">
                                            -
                                        </div>
                                        <div className="manage-orderForm-buttonPrice manage-orderForm-dingDan">
                                            <div>
                                                -
                                            </div>
                                            <div className="manage-orderForm-weight">
                                                + --
                                            </div>
                                        </div>
                                        <div className="manage-orderForm-buttonStatus manage-orderForm-dingDan">
                                            -
                                        </div>
                                        <div className="manage-orderForm-fnSku manage-orderForm-dingDan">

                                        </div>
                                        <div className="manage-orderForm-distribution manage-orderForm-dingDan">
                                            卖家
                                        </div>
                                        <div className="manage-orderForm-upcEan manage-orderForm-dingDan">
                                            B08PTW9RCN
                                        </div>
                                        <div className="manage-orderForm-save manage-orderForm-dingDan">
                                            <select>
                                                <option value="...">编辑</option>
                                            </select>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <FooterCom></FooterCom>
        </div>
    )
}

export default ManageInventory
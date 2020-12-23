import React from "react"
import "./share.css"
import HeaderCom from "../../components/HeaderCom/HeaderCom";
import FooterCom from "../../components/FooterCom/FooterCom";
import TabHeader from "./module/TabHeader/TabHeader";
import Hint from "./module/Hint";
import ShareTitle from "./module/ShareTitle";
import TopNavigation from "./module/TopNavigation";

function share() {
    return (
        <div>
            <HeaderCom></HeaderCom>
            <TopNavigation></TopNavigation>
            <div className="share">
                <Hint></Hint>
                <ShareTitle></ShareTitle>
                <TabHeader></TabHeader>
            </div>
            <FooterCom></FooterCom>
        </div>
    )
}

export default share
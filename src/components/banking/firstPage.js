import React from "react"
import { Select } from 'antd';
import "antd/dist/antd.css"
import "../../styles/banking.css"

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// import dummy images
import logo from "../../images/logo.jpg"
import useravatar from "../../images/user-icon.png"

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default function FirstPage() {
    return (
        <div id="banking-pageone">
            {/* Header */}
            <div className="header">
                <div>
                    <img src={logo} />
                </div>
                <div>
                    <img src={useravatar} />
                </div>
            </div>

            <h2 className="header-address">
                Home/Epropshow/Banking
            </h2>

            {/* ----------------------- */}
            <h1 style={{ "color": "#000" }}>Banking</h1>

            <Select defaultValue="hdfcBank" className="select-bank" onChange={handleChange}>
                <Option value="hdfcBank">HDFC BANK</Option>
                <Option value="lucy">Lucy</Option>
            </Select>

            <Select defaultValue="yesBank" className="select-bank" onChange={handleChange}>
                <Option value="yesBank">YES BANK</Option>
                <Option value="lucy">Lucy</Option>
            </Select>

            <Select defaultValue="canaraBank" className="select-bank" onChange={handleChange}>
                <Option value="canaraBank">CANARA BANK</Option>
                <Option value="lucy">Lucy</Option>
            </Select>
        </div >
    )
} 
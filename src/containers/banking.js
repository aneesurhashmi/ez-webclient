import React, { useState } from 'react';
import "antd/dist/antd.css"
import "../styles/banking.css"
import FirstPage from "../components/banking/firstPage";
import OtherServices from "../components/banking/otherServices"

import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';


import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';

import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SendIcon from '@material-ui/icons/Send';

export default function Banking() {

    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };


    return (
        <div>
            <FirstPage />
            <div className="banking-form-container">
                <div className="banking-form-desc">
                    <h1>To know more about Banking Process</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <Form
                    labelCol={{
                        span: 4,
                    }}
                    // wrapperCol={{
                    //     span: 14,
                    // }}
                    layout="horizontal"
                    initialValues={{
                        size: componentSize,
                    }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                    className="banking-form"
                >


                    <Form.Item style={{ "margin": "4px 0px" }}>
                        <Input
                            placeholder="First Name"
                            prefix={<PersonIcon />}
                            style={{ "height": "50px", "minWidth": "200px" }}
                        />
                    </Form.Item>
                    <Form.Item style={{ "margin": "4px 0px" }}>
                        <Input
                            placeholder="Company Name"
                            prefix={<BusinessIcon />}
                            style={{ "height": "50px" }}
                        />
                    </Form.Item>
                    <Form.Item style={{ "margin": "4px 0px" }}>
                        <Input
                            placeholder="Mobile Number"
                            prefix={<SmartphoneIcon />}
                            style={{ "height": "50px" }}
                        />
                    </Form.Item>
                    <Form.Item style={{ "margin": "4px 0px" }}>
                        <Input
                            placeholder="Loan Amount"
                            prefix={<AttachMoneyIcon />}
                            style={{ "height": "50px" }}
                        />
                    </Form.Item>

                    {/* <Form.Item label="InputNumber">
                        <InputNumber style={{ "width": "100%" }}
                            prefix={<UserOutlined className="site-form-item-icon" />}
                        />

                    </Form.Item> */}
                    <button id="banking-form-submit" type="submit"><SendIcon style={{ "marginRight": "10px" }} />Submit</button>
                </Form>
            </div>
            <OtherServices />
        </div >
    )
}




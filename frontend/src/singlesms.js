import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

const AddStudent = () => {
  const [sender, setSender] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const SubmitStudent = async () => {
    try {
      const response = await axios.post("http://localhost:5000/singlesms", {
        sender,
        phone,
        message,
      });
      const result = response.data;
        switch (result) {
            case "1000":
                console.log("Message sent");
                break;
            case "1002":
                console.log("Message not sent");
                break;
            case "1003":
                console.log("You don't have enough balance");
                break;
            case "1004":
                console.log("Invalid API Key");
                break;
            case "1005":
                console.log("Phone number not valid");
                break;
            case "1006":
                console.log("Invalid Sender ID"); 
                break;
            case "1008":
                console.log("Empty message");
                break;
            default:
                console.log("Unknown response code:", result);
                break;
        }
    } catch (error) {
        console.error("Error sending SMS:", error);
    }
};

  return (
    <div>
      <div className="">
        <Form layout="vertical" onFinish={SubmitStudent}>
          <Form.Item label="Phone Number">
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Item>
          <Form.Item label="Message">
            <Input value={message} onChange={(e) => setMessage(e.target.value)} />
          </Form.Item>
          <Form.Item label="Sender">
            <Input value={sender} onChange={(e) => setSender(e.target.value)} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddStudent;

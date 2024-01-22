import { FC, FormEvent, useState } from "react";
import { Form, Input, Button, Alert, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Values } from "../datatypes/CustomDataTypes";
const { Title } = Typography;

const LoginComponent: FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const onFinish = (values: Values) => {
    console.log("Received values of form: ", values);
    if (values.remember) {
      localStorage.setItem("username", values.username);
      localStorage.setItem("password", values.password);
    }
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if(userName=='admin' && password=='admin123') {
      navigate('/home');
    } else {
      setErrorMessage("Please Enter Valid Credentials.");
    }
    console.log("Handle registration logic here");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card style={{ width: 500 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Title level={2}>Login with credentials </Title>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handleLogin}
              block
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        {
          errorMessage.length>0 && <Alert message={errorMessage} type="error" />
        }
        
      </Card>
    </div>
  );
};

export default LoginComponent;

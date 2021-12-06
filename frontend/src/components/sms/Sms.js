import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { allUsers, deleteUser, clearErrors } from '../../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { Select, Button, Form, Input } from 'antd';
const basePath = 'http://localhost:4000';

const initialState = {
  numbers: [],
  body: '',
};

const { Option } = Select;

const Sms = () => {
  const [values, setValues] = useState(initialState);
  const { loading, error, users } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  const { body, numbers } = values;

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${basePath}/api/v1/sms/new`,
        {
          numbers,
          body,
        },
        {
          'Content-Type': 'application/json',
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  console.log(values);

  return (
    <Form
      name="Sms"
      onFinish={handleSubmit}
      initialValues={{ remember: true }}
      layout="vertical"
      className="mt-2"
    >
      <Form.Item
        label="Body Message"
        name="name"
        rules={[{ required: true, message: 'Write message' }]}
      >
        <Input
          name="body"
          value={body}
          placeholder="Message"
          onChange={handleChange}
          style={{ height: '100px' }}
        />
      </Form.Item>
      <Select
        name="Subs"
        className="form-control"
        placeholder="Select Users"
        mode="multiple"
        onChange={(value) => setValues({ ...values, numbers: value })}
        value={numbers}
      >
        {/* {users.length > 0 &&
          users.map((c) => (
            <Option value={c.phone} key={c._id}>
              {c.name} - {c.phone}
            </Option>
          ))} */}
        <Option value="573144261190">573144261190</Option>
        <Option value="573143419685">573143419685</Option>
        <Option value="573133308473">573133308473</Option>
      </Select>
      <Button block className="colorbtn mt-4" type="primary" htmlType="submit">
        Crear
      </Button>
    </Form>
  );
};

export default Sms;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import * as yup from 'yup';
import clsx from 'clsx';
import { Form, Input, Select, Button, Checkbox, notification, Spin } from 'antd';

import { setPrivacyPolicy, postContact, setRequiredPrivacy } from '../../redux/userSlices/contactUserSlice';
import { inquiryType, yourSource, requiredMessage } from './constant/constant';
import style from './style.module.scss';

const schema = yup.object().shape({
  name: yup.string().required(requiredMessage),
  company_name: yup.string().required(requiredMessage),
  email: yup
    .string()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'The email address you entered is invalid')
    .required(requiredMessage),
});

const ContactPage = () => {
  const privacyPolicy = useSelector((state) => state.userContact.privacyPolicy);
  const requiredPrivacyPolicy = useSelector((state) => state.userContact.requiredPrivacyPolicy);
  const loading = useSelector((state) => state.userContact.loading);
  const dispatch = useDispatch();
  const { TextArea } = Input;

  const yupSync = {
    async validator({ field }, value) {
      await schema.validateSyncAt(field, { [field]: value });
    },
  };

  const openNotification = (message, type) => {
    notification.open({
      message: message,
      type: type,
    });
  };

  const changePrivacy = (event) => {
    dispatch(setPrivacyPolicy(event.target.checked));
  };

  const sendContactForm = async (data) => {
    if (privacyPolicy) {
      data.inquiry_type = data.inquiry_type ? data.inquiry_type : 4;
      data.your_source = data.your_source ? data.your_source : 5;
      await dispatch(postContact(data));
      dispatch(setRequiredPrivacy(true));
      openNotification('sending success', 'success');
      return;
    }
    dispatch(setRequiredPrivacy(false));
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        <strong>
          For inquiries / consultations from customers, please use the form below.
          <br />
          Depending on the content of your inquiry, it may take several days to reply.
        </strong>
      </div>
      <Form layout="vertical" onFinish={sendContactForm}>
        <Form.Item label="Name" name="name" rules={[yupSync]} className={style.item}>
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item label="Company Name" name="company_name" rules={[yupSync]} className={style.item}>
          <Input placeholder="Company Name" />
        </Form.Item>
        <Form.Item label="Email Address" name="email" rules={[yupSync]} className={style.item}>
          <Input placeholder="Email address" />
        </Form.Item>
        <Form.Item label="Phone number" name="phone" className={style.item}>
          <Input label="Phone number" placeholder="Phone number" />
        </Form.Item>
        <Form.Item label="Inquiry type" name="inquiry_type" className={style.item}>
          <Select className={style.contactSelect} options={inquiryType} defaultValue={inquiryType[0]} />
        </Form.Item>
        <Form.Item label="How did you get to know our website ?" name="your_source" className={style.item}>
          <Select className={style.contactSelect} options={yourSource} defaultValue={yourSource[0]} />
        </Form.Item>
        <Form.Item label="Content of inquiry" name="content" className={style.item}>
          <TextArea placeholder="Content of inquiry" rows={5} />
        </Form.Item>
        <Form.Item className={clsx(style.checkBox, style.center)}>
          <Checkbox checked={privacyPolicy} onChange={changePrivacy}>
            I agree to the privacy policy
          </Checkbox>
        </Form.Item>
        <Form.Item className={clsx(style.error, { [style.hidden]: requiredPrivacyPolicy })}>
          <p>You must agree to the privacy policy</p>
        </Form.Item>
        <Form.Item className={clsx(style.item, style.center)}>
          <Link href="/privacy" target="_blank" className={style.link}>
            Click here for our privacy policy
          </Link>
        </Form.Item>
        <Form.Item className={clsx(style.item, style.center)}>
          <Button htmlType="submit" className={style.sendBtn}>
            <Spin className={clsx({ [style.hidden]: !loading })} />
            &emsp; send with this content
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactPage;

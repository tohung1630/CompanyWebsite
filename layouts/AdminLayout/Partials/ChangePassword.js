import { yupResolver } from '@hookform/resolvers/yup';
import React, { use, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { ChangePasswordRedux } from '../../../redux/slices/changePassword';
import style from '../style.module.scss';

const registerSchema = Yup.object({
  oldPassword: Yup.string().min(6, 'oil password have a minimum length of 6').required('Old password is required'),
  newPassword: Yup.string().min(6, 'oil password have a minimum length of 6').required('New password is required'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('newPassword'), null], 'Confirm password must match'),
});

const ChangePassword = ({ handleCloseModal }) => {
  const [showTittle, setShowTittle] = useState('');
  const [showErrorPassword, setShowErrorPassword] = useState(false);
  const [postNewPassword, setPostNewPassword] = useState(false);

  const router = useRouter();
  const listStatus = useSelector((state) => state.changePassword);
  const dispatch = useDispatch();
  const status = listStatus?.list;

  const [form] = Form.useForm();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = (data) => {
    dispatch(ChangePasswordRedux(data));
    setPostNewPassword(true);
  };

  const handleShowTittle = (tittle) => {
    setShowTittle(tittle);
  };
  const handleHideTittle = () => {
    setShowTittle('');
  };
  const handleCloseChangePassword = () => {
    handleCloseModal();
  };

  useEffect(() => {
    if (status?.status === 'success' && postNewPassword) {
      router.push('/admin/signin');
      return;
    }

    if (status?.status === 'error') {
      setShowErrorPassword(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status?.status]);

  return (
    <div className={style.modal}>
      <h1 className={style.modalHeader}>Change password</h1>
      <CloseOutlined className={style.modalClose} onClick={handleCloseChangePassword} />
      <Form onFinish={handleSubmit(onSubmit)} form={form} name="form1" size="large">
        <Controller
          control={control}
          name="oldPassword"
          render={({ field }) => (
            <Form.Item className={style.modalInput}>
              <Input.Password
                placeholder={showTittle === 'oldPassword' ? '' : 'Old Password *'}
                onFocus={() => handleShowTittle('oldPassword')}
                onBlur={handleHideTittle}
                {...field}
              />
              {showErrorPassword && <p className={style.textError}>Sai mật khẩu</p>}
              {errors.oldPassword && <p className={style.textError}>{errors.oldPassword.message}</p>}
              {showTittle === 'oldPassword' && <div className={style.oldPasswordItem}>Old Password *</div>}
            </Form.Item>
          )}
        />
        <Controller
          control={control}
          name="newPassword"
          render={({ field }) => (
            <Form.Item className={style.modalInput}>
              <Input.Password
                placeholder={showTittle === 'newPassword' ? '' : 'New Password *'}
                onFocus={() => handleShowTittle('newPassword')}
                onBlur={handleHideTittle}
                {...field}
              />
              {errors.newPassword && <p className={style.textError}>{errors.newPassword.message}</p>}
              {showTittle === 'newPassword' && <div className={style.newPasswordItem}>New Password *</div>}
            </Form.Item>
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <Form.Item className={style.modalInput}>
              <Input.Password
                placeholder={showTittle === 'confirmPassword' ? '' : 'Confirm Password *'}
                onFocus={() => handleShowTittle('confirmPassword')}
                onBlur={handleHideTittle}
                {...field}
              />
              {errors.confirmPassword && <p className={style.textError}>{errors.confirmPassword.message}</p>}
              {showTittle === 'confirmPassword' && <div className={style.confirmPasswordItem}>Confirm Password *</div>}
            </Form.Item>
          )}
        />

        <Form.Item>
          <Button type="primary" htmlType="submit">
            <div className={style.modalBtn}>Change</div>
          </Button>
        </Form.Item>
      </Form>
      {showTittle !== '' && <div className={style.modalWrapper} onClick={handleHideTittle}></div>}
    </div>
  );
};

export default ChangePassword;

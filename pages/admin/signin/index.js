import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

import { login } from '../../../redux/slices/loginSlices';
import LayoutSignIn from '../../../layouts/LayoutSignIn';
import { isEmail } from '../../../utils/constant';
import style from './style.module.scss';

const SignIn = () => {
  // const userTokken = getCookie("access_token");
  const userTokken = useSelector((state) => state.logins.access_token) ?? '';
  const unsuccessful = useSelector((state) => state.logins.handleJSX.wrongPassword) ?? false;
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (userTokken) {
      router.push('/admin/dashboard');
    }
  }, [userTokken]);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.name}>Relipa</div>

          <div className={unsuccessful ? style.unsuccessful : style.successful}>Login unsuccessful</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.div_input}>
              <input
                {...register('firstEmail')}
                required="true"
                pattern={isEmail}
                className={style.input}
                type="text"
                placeholder=" "
              />
              <label className={style.label_email} for="email">
                Email Address *
              </label>
              {/* <p className={style.message_email}>
                {errors?.firstEmail?.message}
              </p> */}
            </div>
            <div className={style.div_input}>
              <input
                {...register('firstPassword')}
                required="true"
                className={style.input}
                type="password"
                placeholder=" "
              />
              <label className={style.label_pass} for="password">
                Password *
              </label>
              {/* <p>{errors?.firstPassword?.message}</p> */}
            </div>
            <input type="checkbox" />
            <label className={style.label_checkbox}>Remember me</label>
            <button type="submit" className={style.btn_login}>
              SING IN
            </button>
          </form>
          <div>
            <a href="#" className={style.a_Forgot}>
              Forgot password?
            </a>
            <a href="#" className={style.a_SignUp}>
              Don't have an account? Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

SignIn.Layout = LayoutSignIn;

export default SignIn;

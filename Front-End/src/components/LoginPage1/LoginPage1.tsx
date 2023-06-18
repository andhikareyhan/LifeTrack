import { memo, useState } from 'react';
import type { FC } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import resets from '../_resets.module.css';
import { Checkbox_StateDefault } from './Checkbox_StateDefault/Checkbox_StateDefault';
import { ForgotPassword_StateDefault } from './ForgotPassword_StateDefault/ForgotPassword_StateDefault';
import { LogIn_StateDefault } from './LogIn_StateDefault/LogIn_StateDefault';
import { LogInGoogle_StateDefault } from './LogInGoogle_StateDefault/LogInGoogle_StateDefault';
import classes from './LoginPage1.module.css';
import { Logo } from './Logo/Logo';
import { SignUp_StateDefault } from './SignUp_StateDefault/SignUp_StateDefault';

interface Props {
  className?: string;
}

/* @figmaId 13:3 */
export const LoginPage1: FC<Props> = memo(function LoginPage1(props = {}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      toast.dismiss();

      const response = await axios.post(`http://localhost:3001/login`, { email, password });      
      if (response.data.success) {
        window.location.href = '/patients/';
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      if ((error as any).response) {
        toast.error('Invalid email or password');
      } else if ((error as any).request) {
        toast.error('Network error');
      } else {
        toast.error('An error occured');
      }
    }
  };

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.background}></div>
      <SignUp_StateDefault className={classes.signUp} />
      <div className={classes.donTHaveAnAccountYet}>Don’t have an account yet?</div>
      <LogIn_StateDefault 
        email={email} 
        password={password} 
        onLogin={handleLogin} 
        className={classes.logIn} 
      />
      <ForgotPassword_StateDefault className={classes.forgotPassword} />
      <Checkbox_StateDefault
        className={classes.checkbox}
        text={{
          label: <div className={classes.label}>Remember for 30 days</div>,
        }}
      />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={classes.line6} placeholder="Password" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={classes.line5} placeholder="Email" />
      <div className={classes.line4}></div>
      <div className={classes.or}>Or</div>
      <div className={classes.line3}></div>
      <LogInGoogle_StateDefault className={classes.logInGoogle} classes={{ googleLogo: classes.googleLogo }} />
      <div className={classes.welcomeBackPleaseEnterYourDeta}>Welcome back! Please enter your details.</div>
      <div className={classes.welcomeBack}>Welcome Back</div>
      <Logo className={classes.logo} />
      <div className={classes.frame1}>
        <div className={classes.doctorPerformsPhysicalExaminat}></div>
      </div>
      <ToastContainer autoClose={2000} hideProgressBar closeOnClick={false} pauseOnFocusLoss={false}/>
    </div>
  );
});
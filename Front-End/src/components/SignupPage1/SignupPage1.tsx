import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CreateAcc_StateDefault } from './CreateAcc_StateDefault/CreateAcc_StateDefault';
import { LogIn_StateDefault } from './LogIn_StateDefault/LogIn_StateDefault';
import { Logo } from './Logo/Logo';
import { SignUpGoogle_StateDefault } from './SignUpGoogle_StateDefault/SignUpGoogle_StateDefault';
import classes from './SignupPage1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 23:2 */
export const SignupPage1: FC<Props> = memo(function SignupPage1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.background}></div>
      <LogIn_StateDefault className={classes.logIn} />
      <div className={classes.alreadyHaveAnAccount}>Already have an account?</div>
      <CreateAcc_StateDefault className={classes.createAcc} />
      <input type="password" className={classes.line5} placeholder="Password" />
      <input type="email" className={classes.line52} placeholder="Email" />
      <input type="text" className={classes.line53} placeholder="Name" />
      <div className={classes.line4}></div>
      <div className={classes.or}>Or</div>
      <div className={classes.line3}></div>
      <SignUpGoogle_StateDefault className={classes.signUpGoogle} classes={{ googleLogo: classes.googleLogo }} />
      <div className={classes.letSGetStartedWithYourAccount}>Let’s get started with your account.</div>
      <div className={classes.createAnAccount}>Create an Account</div>
      <Logo className={classes.logo} />
      <div className={classes.frame2}>
        <div className={classes.doctorThumbLarge1}></div>
      </div>
    </div>
  );
});
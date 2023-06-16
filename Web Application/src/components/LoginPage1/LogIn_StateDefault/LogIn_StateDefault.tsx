import { memo, useEffect, useState } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './LogIn_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    logInButton?: string;
  };
  email: string;
  password: string;
  onLogin: () => void;
  onClick?: () => void;
}

/* @figmaId 256:313 */
export const LogIn_StateDefault: FC<Props> = memo(function LogIn_StateDefault(props = {
  email: '',
  password: '',
  onLogin: function (): void {
    throw new Error('Function not implemented.');
  }
}) {
  const [isValid, setIsValid] = useState(false);

  const validCredentials = [
    { email: 'andhikareyhan@gmail.com', password: 'password1' },
    { email: 'john.smith@gmail.com', password: 'password2' },
  ];

  useEffect(() => {
    setIsValid(validateForm());
  }, [props.email, props.password]);

  const handleLogin = () => {
    if (isValid) {
      props.onLogin();
    }
  };

  const validateForm = () => {
    const isValidEmail = props.email !== '';
    const isValidPassword = props.password !== '';
    const isValidCredentials = validCredentials.some(
      (credentials) => credentials.email === props.email && credentials.password === props.password
    );

    return isValidEmail && isValidPassword && isValidCredentials;
  }
  
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <button type="button" className={classes.logIn} onClick={handleLogin}>Log in</button>
    </div>
  );
});

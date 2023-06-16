import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SignupPage1 } from '../components/SignupPage1/SignupPage1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SignupPage1 />
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ForgotPassword1 } from '../components/ForgotPassword1/ForgotPassword1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ForgotPassword1 />
  </StrictMode>,
);

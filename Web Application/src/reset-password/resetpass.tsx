import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ResetPassword1 } from '../components/ResetPassword1/ResetPassword1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetPassword1 />
  </StrictMode>,
);

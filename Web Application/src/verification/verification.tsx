import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { VerificationPage1 } from '../components/VerificationPage1/VerificationPage1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VerificationPage1 />
  </StrictMode>,
);

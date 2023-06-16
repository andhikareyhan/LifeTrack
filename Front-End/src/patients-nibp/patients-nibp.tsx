import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { PatientsDetailNIBP } from '../components/PatientsDetailNIBP/PatientsDetailNIBP';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PatientsDetailNIBP />
  </StrictMode>,
);

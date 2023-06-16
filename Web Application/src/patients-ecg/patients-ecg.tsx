import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { PatientsDetailECG } from '../components/PatientsDetailECG/PatientsDetailECG';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PatientsDetailECG />
  </StrictMode>,
);

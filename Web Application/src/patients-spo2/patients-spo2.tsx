import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { PatientsDetailSpO2 } from '../components/PatientsDetailSpO2/PatientsDetailSpO2';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PatientsDetailSpO2 />
  </StrictMode>,
);

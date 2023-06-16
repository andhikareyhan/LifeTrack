import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AddPatientMedicalHistory1 } from '../components/AddPatientMedicalHistory1/AddPatientMedicalHistory1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AddPatientMedicalHistory1 />
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { EditPatientMedicalHistory } from '../components/EditPatientMedicalHistory/EditPatientMedicalHistory';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EditPatientMedicalHistory />
  </StrictMode>,
);

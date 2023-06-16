import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { EditPatientPersonalDetails } from '../components/EditPatientPersonalDetails/EditPatientPersonalDetails';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EditPatientPersonalDetails />
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AddPatientAssignedDevices1 } from '../components/AddPatientAssignedDevices1/AddPatientAssignedDevices1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AddPatientAssignedDevices1 />
  </StrictMode>,
);

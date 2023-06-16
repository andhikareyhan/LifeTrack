import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { EditPatientAssignedDevices } from '../components/EditPatientAssignedDevices/EditPatientAssignedDevices';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EditPatientAssignedDevices />
  </StrictMode>,
);

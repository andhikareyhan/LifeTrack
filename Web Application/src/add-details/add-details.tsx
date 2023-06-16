import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AddPatientPersonalDetails1 } from '../components/AddPatientPersonalDetails1/AddPatientPersonalDetails1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AddPatientPersonalDetails1 />
  </StrictMode>,
);

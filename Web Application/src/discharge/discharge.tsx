import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { DischargePatient1 } from '../components/DischargePatient1/DischargePatient1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DischargePatient1 />
  </StrictMode>,
);

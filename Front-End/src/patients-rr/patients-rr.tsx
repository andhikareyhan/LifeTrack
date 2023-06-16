import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { PatientsDetailRR } from '../components/PatientsDetailRR/PatientsDetailRR';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PatientsDetailRR />
  </StrictMode>,
);

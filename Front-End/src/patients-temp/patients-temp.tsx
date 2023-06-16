import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { PatientsDetailTemp } from '../components/PatientsDetailTemp/PatientsDetailTemp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PatientsDetailTemp />
  </StrictMode>,
);

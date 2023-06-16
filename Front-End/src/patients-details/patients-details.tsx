import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { PatientsDetailOverviewAll } from '../components/PatientsDetailOverviewAll/PatientsDetailOverviewAll';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PatientsDetailOverviewAll />
  </StrictMode>,
);

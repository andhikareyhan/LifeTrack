import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { PatientsOverview } from '../components/PatientsOverview/PatientsOverview';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PatientsOverview />
  </StrictMode>,
);

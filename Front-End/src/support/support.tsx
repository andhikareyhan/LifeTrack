import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SupportOverview } from '../components/SupportOverview/SupportOverview';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SupportOverview />
  </StrictMode>,
);

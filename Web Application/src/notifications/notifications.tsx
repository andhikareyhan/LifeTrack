import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Notifications1 } from '../components/Notifications1/Notifications1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Notifications1 />
  </StrictMode>,
);

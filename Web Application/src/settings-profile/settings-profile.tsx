import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SettingsData } from '../components/SettingsData/SettingsData';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsData />
  </StrictMode>,
);

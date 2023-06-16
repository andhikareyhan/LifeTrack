import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SettingsSecurity1 } from '../components/SettingsSecurity1/SettingsSecurity1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsSecurity1 />
  </StrictMode>,
);

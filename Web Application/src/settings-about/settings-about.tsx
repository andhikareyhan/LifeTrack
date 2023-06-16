import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SettingsAbout } from '../components/SettingsAbout/SettingsAbout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsAbout />
  </StrictMode>,
);

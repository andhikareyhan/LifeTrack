import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SettingsPrivacy } from '../components/SettingsPrivacy/SettingsPrivacy';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsPrivacy />
  </StrictMode>,
);

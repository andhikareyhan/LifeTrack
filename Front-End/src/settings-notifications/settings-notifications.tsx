import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SettingsNotifications } from '../components/SettingsNotifications/SettingsNotifications';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsNotifications />
  </StrictMode>,
);

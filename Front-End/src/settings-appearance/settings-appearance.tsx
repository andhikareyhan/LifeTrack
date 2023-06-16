import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SettingsAppearance } from '../components/SettingsAppearance/SettingsAppearance';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsAppearance />
  </StrictMode>,
);

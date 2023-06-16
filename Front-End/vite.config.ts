import { resolve } from 'path'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        signup: resolve(root, 'signup', 'index.html'),
        verification: resolve(root, 'verification', 'index.html'),
        forgotpassword: resolve(root, 'forgotpassword', 'index.html'),
        resetpassword: resolve(root, 'resetpassword', 'index.html'),
        patients: resolve(root, 'patients', 'index.html'),
        patients_details: resolve(root, 'patients-details', 'index.html'),
        patients_ecg: resolve(root, 'patients-ecg', 'index.html'),
        patients_nibp: resolve(root, 'patients-nibp', 'index.html'),
        patients_rr: resolve(root, 'patients-rr', 'index.html'),
        patients_spo2: resolve(root, 'patients-spo2', 'index.html'),
        patients_temp: resolve(root, 'patients-temp', 'index.html'),
        add_details: resolve(root, 'add-details', 'index.html'),
        add_medhist: resolve(root, 'add-medhist', 'index.html'),
        add_device: resolve(root, 'add-device', 'index.html'),
        edit_details: resolve(root, 'edit-details', 'index.html'),
        edit_medhist: resolve(root, 'edit-medhist', 'index.html'),
        edit_device: resolve(root, 'edit-device', 'index.html'),
        discharge: resolve(root, 'discharge', 'index.html'),
        notifications: resolve(root, 'notifications', 'index.html'),
        settings_appearance: resolve(root, 'settings-appearance', 'index.html'),
        settings_notifications: resolve(root, 'settings-notifications', 'index.html'),
        settings_security: resolve(root, 'settings-security', 'index.html'),
        settings_privacy: resolve(root, 'settings-privacy', 'index.html'),
        settings_profile: resolve(root, 'settings-profile', 'index.html'),
        settings_about: resolve(root, 'settings-about', 'index.html'),
        support: resolve(root, 'support', 'index.html'),
      }
    }
  }
});
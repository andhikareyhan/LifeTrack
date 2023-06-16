import { memo, useState, useEffect } from 'react';
import { format } from "date-fns";
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Logo } from './Logo/Logo';
import { LogOut_StateDefault } from './LogOut_StateDefault/LogOut_StateDefault';
import { MaterialSymbolsSettingsIcon } from './MaterialSymbolsSettingsIcon.js';
import { MdiStarFourPointsOutlineIcon } from './MdiStarFourPointsOutlineIcon.js';
import { Profile } from './Profile/Profile';
import { ResetPassword2_StateInactive } from './ResetPassword2_StateInactive/ResetPassword2_StateInactive';
import { Set_TypeAboutStateInactive } from './Set_TypeAboutStateInactive/Set_TypeAboutStateInactive';
import { Set_TypeAppearanceStateInactiv } from './Set_TypeAppearanceStateInactiv/Set_TypeAppearanceStateInactiv';
import { Set_TypeNotificationsStateInac } from './Set_TypeNotificationsStateInac/Set_TypeNotificationsStateInac';
import { Set_TypePrivacyStateInactive } from './Set_TypePrivacyStateInactive/Set_TypePrivacyStateInactive';
import { Set_TypeProfileStateInactive } from './Set_TypeProfileStateInactive/Set_TypeProfileStateInactive';
import { Set_TypeSecurityStateActive } from './Set_TypeSecurityStateActive/Set_TypeSecurityStateActive';
import classes from './SettingsSecurity1.module.css';
import { SidebarPages_PagesLogOutStateD } from './SidebarPages_PagesLogOutStateD/SidebarPages_PagesLogOutStateD';
import { SidebarPages_PagesNotification } from './SidebarPages_PagesNotification/SidebarPages_PagesNotification';
import { SidebarPages_PagesPatientsStat } from './SidebarPages_PagesPatientsStat/SidebarPages_PagesPatientsStat';
import { SidebarPages_PagesSettingsStat } from './SidebarPages_PagesSettingsStat/SidebarPages_PagesSettingsStat';
import { SidebarPages_PagesSupportState } from './SidebarPages_PagesSupportState/SidebarPages_PagesSupportState';
import { Toggle_StateOff } from './Toggle_StateOff/Toggle_StateOff';
import { Overlay } from '../LogoutOverlay/Overlay';

interface Props {
  className?: string;
}
/* @figmaId 738:2052 */
export const SettingsSecurity1: FC<Props> = memo(function SettingsSecurity1(props = {}) {
    // [1] Date Time Functions
    useEffect(() => {
      const updateDateTime = () => {
        const dateTimeElement = document.getElementById("dateTime");
        if (dateTimeElement) {
          const currentDate = new Date();
  
          const formattedDateTime = format(currentDate, "EEE, dd MMM yyyy HH:mm");
          dateTimeElement.textContent = formattedDateTime;
        }
      };
  
      updateDateTime();
  
      // Update the date and time every second
      const interval = setInterval(updateDateTime, 1000);
  
      // Clean up interval
      return () => clearInterval(interval);
    }, []);
  
    // [2] Sign out page overlay
    const [showOverlay, setShowOverlay] = useState(false);
  
    const handleOpenOverlay = () => {
      setShowOverlay(true);
    }
  
    const handleCloseOverlay = () => {
      setShowOverlay(false);
    }  
  
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.background}></div>
      <div className={classes.profile2}></div>
      <div className={classes.menu}></div>
      <Profile
        className={classes.profile}
        swap={{
          ellipse1: <Ellipse1Icon className={classes.icon} />,
        }}
      />
      <Logo className={classes.logo} />
      
      <a href="/settings-appearance/" className={classes.settings}>
        <MaterialSymbolsSettingsIcon className={classes.icon3} />
        Settings
      </a>
      
      <div id="dateTime" className={classes.today}></div>
      
      <div className={classes.settings2}>Settings</div>
      
      <SidebarPages_PagesLogOutStateD className={classes.sidebarPages} onOpenOverlay={handleOpenOverlay} />
      {showOverlay && <Overlay onClose={handleCloseOverlay} />}
      <SidebarPages_PagesSupportState className={classes.sidebarPages2} />
      <SidebarPages_PagesSettingsStat className={classes.sidebarPages3} />
      <SidebarPages_PagesNotification className={classes.sidebarPages4} />
      <SidebarPages_PagesPatientsStat className={classes.sidebarPages5} />
      
      <div className={classes.frame17}>
        <div className={classes.security}>Security</div>
        <div className={classes.keepLifeTrackSafeToUseForYou}>Keep LifeTrack safe to use for you.</div>
        <div className={classes.line18}></div>
        <div className={classes.keepYourAccountSecureByEnablin}>
          Keep your account secure by enabling 2FA via SMS or using a temporary one-time passcode (OTP).
        </div>
        <div className={classes.changeYourCurrentPassword}>Change your current password.</div>
        <div className={classes.twoFactorAuthentication}>Two-factor Authentication</div>
        <div className={classes.changePassword}>Change Password</div>
        <Toggle_StateOff className={classes.toggle} />
        <div className={classes.currentPassword}>Current Password</div>
        <div className={classes.newPassword}>New Password</div>
        <div className={classes.confirmPassword}>Confirm Password</div>
        <div className={classes.unnamed}>*************</div>
        <div className={classes.enterNewPassword}>Enter new password</div>
        <div className={classes.confirmNewPassword}>Confirm new password</div>
        <div className={classes.rectangle74}></div>
        <div className={classes.rectangle75}></div>
        <div className={classes.rectangle76}></div>
        <LogOut_StateDefault
          className={classes.logOut2}
          text={{
            logOut: <div className={classes.logOut}>Save</div>,
          }}
        />
        <ResetPassword2_StateInactive className={classes.resetPassword2} />
      </div>
      
      <Set_TypeAppearanceStateInactiv
        className={classes.set}
        swap={{
          mdiStarFourPointsOutline: <MdiStarFourPointsOutlineIcon className={classes.icon2} />,
        }}
        link='/settings-appearance/'
      />
      <Set_TypeNotificationsStateInac className={classes.set2} />
      <Set_TypeSecurityStateActive className={classes.set3} />
      <Set_TypePrivacyStateInactive className={classes.set4} />
      <Set_TypeProfileStateInactive className={classes.set5} />
      <Set_TypeAboutStateInactive className={classes.set6} />
    </div>
  );
});

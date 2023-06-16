import { memo, useState, useEffect } from 'react';
import { format } from "date-fns";
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { FontStyle_TypeSansSerif } from './FontStyle_TypeSansSerif/FontStyle_TypeSansSerif';
import { Logo } from './Logo/Logo';
import { LogOut_StateDefault } from './LogOut_StateDefault/LogOut_StateDefault';
import { MaterialSymbolsSettingsIcon } from './MaterialSymbolsSettingsIcon.js';
import { MdiStarFourPointsOutlineIcon } from './MdiStarFourPointsOutlineIcon.js';
import { Profile } from './Profile/Profile';
import { Set_TypeAboutStateInactive } from './Set_TypeAboutStateInactive/Set_TypeAboutStateInactive';
import { Set_TypeAppearanceStateActive } from './Set_TypeAppearanceStateActive/Set_TypeAppearanceStateActive';
import { Set_TypeNotificationsStateInac } from './Set_TypeNotificationsStateInac/Set_TypeNotificationsStateInac';
import { Set_TypePrivacyStateInactive } from './Set_TypePrivacyStateInactive/Set_TypePrivacyStateInactive';
import { Set_TypeProfileStateInactive } from './Set_TypeProfileStateInactive/Set_TypeProfileStateInactive';
import { Set_TypeSecurityStateInactive } from './Set_TypeSecurityStateInactive/Set_TypeSecurityStateInactive';
import classes from './SettingsAppearance.module.css';
import { SidebarPages_PagesLogOutStateD } from './SidebarPages_PagesLogOutStateD/SidebarPages_PagesLogOutStateD';
import { SidebarPages_PagesNotification } from './SidebarPages_PagesNotification/SidebarPages_PagesNotification';
import { SidebarPages_PagesPatientsStat } from './SidebarPages_PagesPatientsStat/SidebarPages_PagesPatientsStat';
import { SidebarPages_PagesSettingsStat } from './SidebarPages_PagesSettingsStat/SidebarPages_PagesSettingsStat';
import { SidebarPages_PagesSupportState } from './SidebarPages_PagesSupportState/SidebarPages_PagesSupportState';
import { Slider_Value } from './Slider_Value/Slider_Value';
import { Overlay } from '../LogoutOverlay/Overlay';

interface Props {
  className?: string;
}
/* @figmaId 414:2116 */
export const SettingsAppearance: FC<Props> = memo(function SettingsAppearance(props = {}) {
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
        <div className={classes.appearance}>Appearance</div>
        <div className={classes.changeHowLifeTrackLooksAndFeel}>
          Change how LifeTrack looks and feels in your device.
        </div>
        <div className={classes.selectYourUITheme}>Select your UI theme.</div>
        <div className={classes.setYourDesiredFontSize}>Set your desired font size.</div>
        <div className={classes.aa}>Aa</div>
        <div className={classes.aa2}>Aa</div>
        <div className={classes.selectYourDesiredFontStyle}>Select your desired font style.</div>
        <div className={classes.interfaceTheme}>Interface Theme</div>
        <div className={classes.dark}>Dark</div>
        <div className={classes.light}>Light</div>
        <div className={classes.systemPreference}>System Preference</div>
        <div className={classes.fontSize}>Font Size</div>
        <div className={classes.fontStyle2}>Font Style</div>
        <div className={classes.line18}></div>
        <div className={classes.frame18}>
          <div className={classes.rectangle66}></div>
          <div className={classes.rectangle72}></div>
          <div className={classes.rectangle65}></div>
          <div className={classes.rectangle69}></div>
          <div className={classes.rectangle67}></div>
          <div className={classes.rectangle70}></div>
          <div className={classes.rectangle68}></div>
          <div className={classes.rectangle71}></div>
          <div className={classes.line19}></div>
        </div>
        <div className={classes.frame19}>
          <div className={classes.rectangle692}></div>
          <div className={classes.rectangle672}></div>
          <div className={classes.rectangle682}></div>
        </div>
        <div className={classes.frame20}>
          <div className={classes.rectangle652}></div>
          <div className={classes.rectangle702}></div>
          <div className={classes.rectangle712}></div>
        </div>
        <Slider_Value className={classes.slider} />
        <FontStyle_TypeSansSerif className={classes.fontStyle} />
        <LogOut_StateDefault
          className={classes.logOut2}
          text={{
            logOut: <div className={classes.logOut}>Save</div>,
          }}
        />
        
      </div>
      <Set_TypeAppearanceStateActive
        className={classes.set}
        swap={{
          mdiStarFourPointsOutline: <MdiStarFourPointsOutlineIcon className={classes.icon2} />,
        }}
        link='/settings-appearance/'
      />
      <Set_TypeNotificationsStateInac className={classes.set2} />
      <Set_TypeSecurityStateInactive className={classes.set3} />
      <Set_TypePrivacyStateInactive className={classes.set4} />
      <Set_TypeProfileStateInactive className={classes.set5} />
      <Set_TypeAboutStateInactive className={classes.set6} />
    </div>
  );
});

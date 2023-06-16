import { memo, useState, useEffect } from 'react';
import { format } from "date-fns";
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse21Icon } from './Ellipse21Icon.js';
import { Filter } from './Filter/Filter';
import { Logo } from './Logo/Logo';
import { LogOut_StateDefault } from './LogOut_StateDefault/LogOut_StateDefault';
import { MaterialSymbolsArrowDropDownIc2 } from './MaterialSymbolsArrowDropDownIc2.js';
import { MaterialSymbolsArrowDropDownIc3 } from './MaterialSymbolsArrowDropDownIc3.js';
import { MaterialSymbolsArrowDropDownIc } from './MaterialSymbolsArrowDropDownIc.js';
import { MaterialSymbolsSettingsIcon } from './MaterialSymbolsSettingsIcon.js';
import { MdiStarFourPointsOutlineIcon } from './MdiStarFourPointsOutlineIcon.js';
import { Profile } from './Profile/Profile';
import { Set_TypeAboutStateInactive } from './Set_TypeAboutStateInactive/Set_TypeAboutStateInactive';
import { Set_TypeAppearanceStateInactiv } from './Set_TypeAppearanceStateInactiv/Set_TypeAppearanceStateInactiv';
import { Set_TypeNotificationsStateInac } from './Set_TypeNotificationsStateInac/Set_TypeNotificationsStateInac';
import { Set_TypePrivacyStateInactive } from './Set_TypePrivacyStateInactive/Set_TypePrivacyStateInactive';
import { Set_TypeProfileStateActive } from './Set_TypeProfileStateActive/Set_TypeProfileStateActive';
import { Set_TypeSecurityStateInactive } from './Set_TypeSecurityStateInactive/Set_TypeSecurityStateInactive';
import classes from './SettingsData.module.css';
import { SidebarPages_PagesLogOutStateD } from './SidebarPages_PagesLogOutStateD/SidebarPages_PagesLogOutStateD';
import { SidebarPages_PagesNotification } from './SidebarPages_PagesNotification/SidebarPages_PagesNotification';
import { SidebarPages_PagesPatientsStat } from './SidebarPages_PagesPatientsStat/SidebarPages_PagesPatientsStat';
import { SidebarPages_PagesSettingsStat } from './SidebarPages_PagesSettingsStat/SidebarPages_PagesSettingsStat';
import { SidebarPages_PagesSupportState } from './SidebarPages_PagesSupportState/SidebarPages_PagesSupportState';
import { Overlay } from '../LogoutOverlay/Overlay';

interface Props {
  className?: string;
}
/* @figmaId 743:2322 */
export const SettingsData: FC<Props> = memo(function SettingsData(props = {}) {
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
        <MaterialSymbolsSettingsIcon className={classes.icon6} />
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
        <div className={classes.profile3}>Profile</div>
        <div className={classes.viewAndUpdateYourLifeTrackProf}>
          View and update your LifeTrack profile information.
        </div>
        <div className={classes.line18}></div>
        <div className={classes.ellipse21}>
          <Ellipse21Icon className={classes.icon7} />
        </div>
        <div className={classes.cardiologist}>Cardiologist</div>
        <div className={classes.doctor}>Doctor</div>
        <div className={classes.john}>John</div>
        <div className={classes.johnSmithHospitalAcId}>
          <a href='mailto:john.smith@hospital.ac.id' target='_blank' rel='noreferrer' className={classes.textBlock}>
            john.smith@hospital.ac.id
          </a>
        </div>
        <div className={classes._82140297645}>082140297645</div>
        <div className={classes.cardiologist2}>Cardiologist</div>
        <div className={classes.smith}>Smith</div>
        <div className={classes.johnSmith}>John Smith</div>
        <div className={classes.personalInformation}>Personal Information</div>
        <div className={classes.additionalInformation}>Additional Information</div>
        <div className={classes.firstName}>First Name</div>
        <div className={classes.emailAddress}>Email Address</div>
        <div className={classes.languagePreference}>Language Preference</div>
        <div className={classes.timeZone}>Time Zone</div>
        <div className={classes.position}>Position</div>
        <div className={classes.departement}>Departement</div>
        <div className={classes.phoneNumber}>Phone Number</div>
        <div className={classes.lastName}>Last Name</div>
        <div className={classes.rectangle74}></div>
        <div className={classes.rectangle76}></div>
        <div className={classes.rectangle79}></div>
        <div className={classes.rectangle77}></div>
        <div className={classes.rectangle75}></div>
        <Filter
          className={classes.filter}
          classes={{ box: classes.box }}
          swap={{
            materialSymbolsArrowDropDown: <MaterialSymbolsArrowDropDownIc className={classes.icon2} />,
          }}
          text={{
            label: <div className={classes.label}>Doctor</div>,
          }}
        />
        <Filter
          className={classes.filter2}
          classes={{ box: classes.box2 }}
          swap={{
            materialSymbolsArrowDropDown: <MaterialSymbolsArrowDropDownIc2 className={classes.icon3} />,
          }}
          text={{
            label: <div className={classes.label2}>English</div>,
          }}
        />
        <Filter
          className={classes.filter3}
          classes={{ box: classes.box3 }}
          swap={{
            materialSymbolsArrowDropDown: <MaterialSymbolsArrowDropDownIc3 className={classes.icon4} />,
          }}
          text={{
            label: <div className={classes.label3}>WIB</div>,
          }}
        />
        <LogOut_StateDefault
          className={classes.logOut2}
          text={{
            logOut: <div className={classes.logOut}>Save</div>,
          }}
        />
      </div>
      <Set_TypeAppearanceStateInactiv
        className={classes.set}
        swap={{
          mdiStarFourPointsOutline: <MdiStarFourPointsOutlineIcon className={classes.icon5} />,
        }}
        link='/settings-appearance/'
      />
      <Set_TypeNotificationsStateInac className={classes.set2} />
      <Set_TypeSecurityStateInactive className={classes.set3} />
      <Set_TypePrivacyStateInactive className={classes.set4} />
      <Set_TypeProfileStateActive className={classes.set5} />
      <Set_TypeAboutStateInactive className={classes.set6} />
    </div>
  );
});

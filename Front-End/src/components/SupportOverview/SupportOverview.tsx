import { memo, useState, useEffect } from 'react';
import { format } from "date-fns";
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse22Icon2 } from './Ellipse22Icon2.js';
import { Ellipse22Icon3 } from './Ellipse22Icon3.js';
import { Ellipse22Icon } from './Ellipse22Icon.js';
import { IcTwotoneHelpOutlineIcon } from './IcTwotoneHelpOutlineIcon.js';
import { Logo } from './Logo/Logo';
import { MaterialSymbolsQuickReferenceO2 } from './MaterialSymbolsQuickReferenceO2.js';
import { MaterialSymbolsQuickReferenceO } from './MaterialSymbolsQuickReferenceO.js';
import { MaterialSymbolsSearchRoundedIc } from './MaterialSymbolsSearchRoundedIc.js';
import { MdiBugOutlineIcon } from './MdiBugOutlineIcon.js';
import { Profile } from './Profile/Profile';
import { SidebarPages_PagesLogOutStateD } from './SidebarPages_PagesLogOutStateD/SidebarPages_PagesLogOutStateD';
import { SidebarPages_PagesNotification } from './SidebarPages_PagesNotification/SidebarPages_PagesNotification';
import { SidebarPages_PagesPatientsStat } from './SidebarPages_PagesPatientsStat/SidebarPages_PagesPatientsStat';
import { SidebarPages_PagesSettingsStat } from './SidebarPages_PagesSettingsStat/SidebarPages_PagesSettingsStat';
import { SidebarPages_PagesSupportState } from './SidebarPages_PagesSupportState/SidebarPages_PagesSupportState';
import { SupportCard } from './SupportCard/SupportCard';
import classes from './SupportOverview.module.css';
import { VectorIcon } from './VectorIcon.js';
import { WpfFaqIcon } from './WpfFaqIcon.js';
import { Overlay } from '../LogoutOverlay/Overlay';

interface Props {
  className?: string;
}
/* @figmaId 414:2189 */
export const SupportOverview: FC<Props> = memo(function SupportOverview(props = {}) {
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
      
      <a href="/support/" className={classes.support}>
        <IcTwotoneHelpOutlineIcon className={classes.icon5} />
        Support
      </a>
      
      <div id="dateTime" className={classes.today}></div>
      
      <div className={classes.support2}>Support</div>
      
      <SidebarPages_PagesLogOutStateD className={classes.sidebarPages} onOpenOverlay={handleOpenOverlay} />
      {showOverlay && <Overlay onClose={handleCloseOverlay} />}
      <SidebarPages_PagesSupportState className={classes.sidebarPages2} />
      <SidebarPages_PagesSettingsStat className={classes.sidebarPages3} />
      <SidebarPages_PagesNotification className={classes.sidebarPages4} />
      <SidebarPages_PagesPatientsStat className={classes.sidebarPages5} />
      <SupportCard
        className={classes.supportCard}
        swap={{
          ellipse22: <Ellipse22Icon className={classes.icon2} />,
        }}
        text={{
          title: <div className={classes.title}>FAQ</div>,
          description: (
            <div className={classes.description}>Find answers to frequently asked questions about LifeTrack</div>
          ),
        }}
      />
      <SupportCard
        className={classes.supportCard2}
        swap={{
          ellipse22: <Ellipse22Icon2 className={classes.icon3} />,
        }}
        text={{
          title: <div className={classes.title2}>Bug Report</div>,
          description: (
            <div className={classes.description2}>
              Report and track any issues or problems you encounter while using LifeTrack
            </div>
          ),
        }}
      />
      <SupportCard
        className={classes.supportCard3}
        swap={{
          ellipse22: <Ellipse22Icon3 className={classes.icon4} />,
        }}
        text={{
          title: <div className={classes.title3}>References</div>,
          description: (
            <div className={classes.description3}>
              Comprehensive guide and detailed documentation to help you understand our platform
            </div>
          ),
        }}
      />
      <div className={classes.box}></div>
      <div className={classes.materialSymbolsSearchRounded}>
        <MaterialSymbolsSearchRoundedIc className={classes.icon6} />
      </div>
      <div className={classes.searchForHelp}>Search for Help</div>
      <div className={classes.forFurtherInquiriesOrInformati}>
        For further inquiries or information, you can contact:
      </div>
      <div className={classes.frame22}>
        <div className={classes.andhikareyhanGmailCom}>andhikareyhan@gmail.com</div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon7} />
        </div>
      </div>
      <div className={classes.howCanWeHelpYou}>How can we help you?</div>
      <div className={classes.wpfFaq}>
        <WpfFaqIcon className={classes.icon8} />
      </div>
      <div className={classes.mdiBugOutline}>
        <MdiBugOutlineIcon className={classes.icon9} />
      </div>
      <div className={classes.materialSymbolsQuickReferenceO}>
        <MaterialSymbolsQuickReferenceO className={classes.icon10} />
      </div>
      <div className={classes.materialSymbolsQuickReferenceO2}>
        <MaterialSymbolsQuickReferenceO2 className={classes.icon11} />
      </div>
    </div>
  );
});

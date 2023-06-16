import { memo, useState, useEffect } from 'react';
import { format } from "date-fns";
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Filter } from './Filter/Filter';
import { ForgotPassword_StateDefault } from './ForgotPassword_StateDefault/ForgotPassword_StateDefault';
import { Logo } from './Logo/Logo';
import { MaterialSymbolsSearchRoundedIc } from './MaterialSymbolsSearchRoundedIc.js';
import { MdiAlarmLightOutlineIcon2 } from './MdiAlarmLightOutlineIcon2.js';
import { MdiAlarmLightOutlineIcon } from './MdiAlarmLightOutlineIcon.js';
import { Notification_StateRead } from './Notification_StateRead/Notification_StateRead';
import { Notification_StateUnread } from './Notification_StateUnread/Notification_StateUnread';
import classes from './Notifications1.module.css';
import { PageNav_Property1Page1 } from './PageNav_Property1Page1/PageNav_Property1Page1';
import { PhBellBoldIcon } from './PhBellBoldIcon.js';
import { Profile } from './Profile/Profile';
import { SidebarPages_PagesLogOutStateD } from './SidebarPages_PagesLogOutStateD/SidebarPages_PagesLogOutStateD';
import { SidebarPages_PagesNotification } from './SidebarPages_PagesNotification/SidebarPages_PagesNotification';
import { SidebarPages_PagesPatientsStat } from './SidebarPages_PagesPatientsStat/SidebarPages_PagesPatientsStat';
import { SidebarPages_PagesSettingsStat } from './SidebarPages_PagesSettingsStat/SidebarPages_PagesSettingsStat';
import { SidebarPages_PagesSupportState } from './SidebarPages_PagesSupportState/SidebarPages_PagesSupportState';
import { Overlay } from '../LogoutOverlay/Overlay';

interface Props {
  className?: string;
}
/* @figmaId 414:1707 */
export const Notifications1: FC<Props> = memo(function Notifications1(props = {}) {
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
      <PageNav_Property1Page1 className={classes.pageNav} />
      <div className={classes.showing7Of7Entries}>
        <p className={classes.labelWrapper8}>
          <span className={classes.label25}>Showing </span>
          <span className={classes.label26}>7</span>
          <span className={classes.label27}> of </span>
          <span className={classes.label28}>7</span>
          <span className={classes.label29}> entries</span>
        </p>
      </div>

      <a href="/notifications/" className={classes.notifications}>
        <PhBellBoldIcon className={classes.icon2} />
        Notifications
      </a>

      <div id="dateTime" className={classes.today}></div>
      <div className={classes.notifications2}>Notifications</div>
      
      <SidebarPages_PagesLogOutStateD className={classes.sidebarPages} onOpenOverlay={handleOpenOverlay} />
      {showOverlay && <Overlay onClose={handleCloseOverlay} />}
      <SidebarPages_PagesSupportState className={classes.sidebarPages2} />
      <SidebarPages_PagesSettingsStat className={classes.sidebarPages3} />
      <SidebarPages_PagesNotification className={classes.sidebarPages4} />
      <SidebarPages_PagesPatientsStat className={classes.sidebarPages5} />
      
      <Filter
        className={classes.filter}
        text={{
          label: <div className={classes.label}>Category</div>,
        }}
      />
      <div className={classes.box}></div>
      <div className={classes.materialSymbolsSearchRounded}>
        <MaterialSymbolsSearchRoundedIc className={classes.icon3} />
      </div>
      <div className={classes.searchNote}>Search Note</div>
      <Notification_StateUnread
        className={classes.notification}
        classes={{ rectangle61: classes.rectangle61 }}
        text={{
          insertTextHere: (
            <div className={classes.insertTextHere}>
              <p className={classes.labelWrapper}>
                <span className={classes.label2}>dr. Maya Hawke</span>
                <span className={classes.label3}> added a note with the title “</span>
                <span className={classes.label4}>Medical prescription ready</span>
                <span className={classes.label5}>”</span>
              </p>
            </div>
          ),
          time: <div className={classes.time}>17:06</div>,
          category: <div className={classes.category}>Note</div>,
        }}
      />
      <Notification_StateRead
        className={classes.notification2}
        classes={{ rectangle61: classes.rectangle612 }}
        text={{
          insertTextHere: (
            <div className={classes.insertTextHere2}>
              <p className={classes.labelWrapper2}>
                <span className={classes.label6}>Nicole Green</span>
                <span className={classes.label7}> added a note with the title “</span>
                <span className={classes.label8}>Checkup results</span>
                <span className={classes.label9}>”</span>
              </p>
            </div>
          ),
          time: <div className={classes.time2}>Apr 6</div>,
          category: <div className={classes.category2}>Note</div>,
        }}
      />
      <Notification_StateRead
        className={classes.notification3}
        classes={{ rectangle61: classes.rectangle613 }}
        text={{
          insertTextHere: (
            <div className={classes.insertTextHere3}>
              <p className={classes.labelWrapper3}>
                <span className={classes.label10}>Low priority alarm</span>
                <span className={classes.label11}> - pulse oximeter disconnected</span>
              </p>
            </div>
          ),
          time: <div className={classes.time3}>Apr 6</div>,
          category: <div className={classes.category3}>Alarm</div>,
        }}
      />
      <Notification_StateRead
        className={classes.notification4}
        classes={{ rectangle61: classes.rectangle614 }}
        text={{
          insertTextHere: (
            <div className={classes.insertTextHere4}>
              <p className={classes.labelWrapper4}>
                <span className={classes.label12}>Nicole Green</span>
                <span className={classes.label13}> added a note with the title “</span>
                <span className={classes.label14}>Anticoagulants administered</span>
                <span className={classes.label15}>”</span>
              </p>
            </div>
          ),
          time: <div className={classes.time4}>Apr 5</div>,
          category: <div className={classes.category4}>Note</div>,
        }}
      />
      <Notification_StateRead
        className={classes.notification5}
        classes={{ rectangle61: classes.rectangle615 }}
        text={{
          insertTextHere: (
            <div className={classes.insertTextHere5}>
              <p className={classes.labelWrapper5}>
                <span className={classes.label16}>High priority alarm</span>
                <span className={classes.label17}> - systolic blood pressure exceeds upper threshold</span>
              </p>
            </div>
          ),
          time: <div className={classes.time5}>Apr 7</div>,
          category: <div className={classes.category5}>Alarm</div>,
        }}
      />
      <div className={classes.mdiAlarmLightOutline}>
        <MdiAlarmLightOutlineIcon className={classes.icon4} />
      </div>
      <div className={classes.mdiAlarmLightOutline2}>
        <MdiAlarmLightOutlineIcon2 className={classes.icon5} />
      </div>
      <Notification_StateUnread
        className={classes.notification6}
        classes={{ rectangle61: classes.rectangle616 }}
        text={{
          insertTextHere: (
            <div className={classes.insertTextHere6}>
              <p className={classes.labelWrapper6}>
                <span className={classes.label18}>dr. Chris Martin</span>
                <span className={classes.label19}> added a note with the title “</span>
                <span className={classes.label20}>General checkup request</span>
                <span className={classes.label21}>”</span>
              </p>
            </div>
          ),
          time: <div className={classes.time6}>Apr 5</div>,
          category: <div className={classes.category6}>Note</div>,
        }}
      />
      <Notification_StateRead
        className={classes.notification7}
        classes={{ rectangle61: classes.rectangle617 }}
        text={{
          insertTextHere: (
            <div className={classes.insertTextHere7}>
              <p className={classes.labelWrapper7}>
                <span className={classes.label22}>Nicole Green</span>
                <span className={classes.label23}> shared a note with with you through </span>
                <span className={classes.label24}>email</span>
              </p>
            </div>
          ),
          time: <div className={classes.time7}>Apr 6</div>,
          category: <div className={classes.category7}>Note</div>,
        }}
      />
      <ForgotPassword_StateDefault
        className={classes.forgotPassword2}
        text={{
          forgotPassword: <div className={classes.forgotPassword}>Mark as read</div>,
        }}
      />
    </div>
  );
});

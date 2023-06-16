import { memo, useState, useEffect } from "react";
import { format } from "date-fns";
import type { FC } from "react";

import resets from "../_resets.module.css";
import { ActionButton_TypeCheckoutState } from "./ActionButton_TypeCheckoutState/ActionButton_TypeCheckoutState";
import { ActionButton_TypeDetailStateDe } from "./ActionButton_TypeDetailStateDe/ActionButton_TypeDetailStateDe";
import { AddButton_StateDefault } from "./AddButton_StateDefault/AddButton_StateDefault";
import { Ellipse1Icon } from "./Ellipse1Icon.js";
import { Filter } from "./Filter/Filter";
import { HealthiconsUiUserProfileOutlin2 } from "./HealthiconsUiUserProfileOutlin2.js";
import { HealthiconsUiUserProfileOutlin3 } from "./HealthiconsUiUserProfileOutlin3.js";
import { HealthiconsUiUserProfileOutlin4 } from "./HealthiconsUiUserProfileOutlin4.js";
import { HealthiconsUiUserProfileOutlin5 } from "./HealthiconsUiUserProfileOutlin5.js";
import { HealthiconsUiUserProfileOutlin6 } from "./HealthiconsUiUserProfileOutlin6.js";
import { HealthiconsUiUserProfileOutlin7 } from "./HealthiconsUiUserProfileOutlin7.js";
import { HealthiconsUiUserProfileOutlin8 } from "./HealthiconsUiUserProfileOutlin8.js";
import { HealthiconsUiUserProfileOutlin9 } from "./HealthiconsUiUserProfileOutlin9.js";
import { HealthiconsUiUserProfileOutlin10 } from "./HealthiconsUiUserProfileOutlin10.js";
import { HealthiconsUiUserProfileOutlin11 } from "./HealthiconsUiUserProfileOutlin11.js";
import { HealthiconsUiUserProfileOutlin } from "./HealthiconsUiUserProfileOutlin.js";
import { Logo } from "./Logo/Logo";
import { MaterialSymbolsArrowDropDownIc } from "./MaterialSymbolsArrowDropDownIc.js";
import { MaterialSymbolsPatientListIcon } from "./MaterialSymbolsPatientListIcon.js";
import { MaterialSymbolsSearchRoundedIc } from "./MaterialSymbolsSearchRoundedIc.js";
import { PageNav_Property1Page1 } from "./PageNav_Property1Page1/PageNav_Property1Page1";
import classes from "./PatientsOverview.module.css";
import { Profile } from "./Profile/Profile";
import { SidebarPages_PagesLogOutStateD } from "./SidebarPages_PagesLogOutStateD/SidebarPages_PagesLogOutStateD";
import { SidebarPages_PagesNotification } from "./SidebarPages_PagesNotification/SidebarPages_PagesNotification";
import { SidebarPages_PagesPatientsStat } from "./SidebarPages_PagesPatientsStat/SidebarPages_PagesPatientsStat";
import { SidebarPages_PagesSettingsStat } from "./SidebarPages_PagesSettingsStat/SidebarPages_PagesSettingsStat";
import { SidebarPages_PagesSupportState } from "./SidebarPages_PagesSupportState/SidebarPages_PagesSupportState";
import { StatusButton_TypeCritical } from "./StatusButton_TypeCritical/StatusButton_TypeCritical";
import { StatusButton_TypeStable } from "./StatusButton_TypeStable/StatusButton_TypeStable";
import { StatusButton_TypeUnstable } from "./StatusButton_TypeUnstable/StatusButton_TypeUnstable";
import { Overlay } from '../LogoutOverlay/Overlay';

interface Props {
  className?: string;
}
/* @figmaId 29:43 */
export const PatientsOverview: FC<Props> = memo(function PatientsOverview(
  props = {}
) {
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

  // [3] Insert table functions here if needed

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
      <SidebarPages_PagesLogOutStateD className={classes.sidebarPages} onOpenOverlay={handleOpenOverlay} />
      {showOverlay && <Overlay onClose={handleCloseOverlay} />}
      <SidebarPages_PagesSupportState className={classes.sidebarPages2} />
      <SidebarPages_PagesSettingsStat className={classes.sidebarPages3} />
      <SidebarPages_PagesNotification className={classes.sidebarPages4} />
      <SidebarPages_PagesPatientsStat className={classes.sidebarPages5} />

      <Logo className={classes.logo} />

      {/* Table Format */}
      <div className={classes.row11}></div>
      <div className={classes.row10}></div>
      <div className={classes.row9}></div>
      <div className={classes.row8}></div>
      <div className={classes.row7}></div>
      <div className={classes.row6}></div>
      <div className={classes.row5}></div>
      <div className={classes.row4}></div>
      <div className={classes.row3}></div>
      <div className={classes.row2}></div>
      <div className={classes.row1}></div>
      <div className={classes.header}></div>

      {/* Patient Data */}
      <ActionButton_TypeDetailStateDe className={classes.actionButton} />
      <ActionButton_TypeCheckoutState className={classes.actionButton2} />
      <div className={classes._2DaysAgo}>2 days ago</div>
      <div className={classes._3Days}>3 days</div>
      <StatusButton_TypeStable className={classes.statusButton} />
      <div className={classes.iCUA}>ICU A</div>
      <div className={classes.healthiconsUiUserProfileOutlin}>
        <HealthiconsUiUserProfileOutlin className={classes.icon2} />
      </div>
      <div className={classes.aaronWatts}>Aaron Watts</div>
      <div className={classes._9429}>#9429</div>


      <ActionButton_TypeDetailStateDe className={classes.actionButton3} />
      <ActionButton_TypeCheckoutState className={classes.actionButton4} />
      <div className={classes._1DayAgo}>1 day ago</div>
      <div className={classes._2Days}>2 days</div>
      <StatusButton_TypeStable className={classes.statusButton2} />
      <div className={classes.iCUB}>ICU B</div>
      <div className={classes.healthiconsUiUserProfileOutlin2}>
        <HealthiconsUiUserProfileOutlin2 className={classes.icon3} />
      </div>
      <div className={classes.muhammadBarkley}>Muhammad Barkley</div>
      <div className={classes._7093}>#7093</div>


      <ActionButton_TypeDetailStateDe className={classes.actionButton5} />
      <ActionButton_TypeCheckoutState className={classes.actionButton6} />
      <div className={classes._10HoursAgo}>10 hours ago</div>
      <div className={classes._1Day}>1 day</div>
      <StatusButton_TypeUnstable className={classes.statusButton3} />
      <div className={classes.iCUA2}>ICU A</div>
      <div className={classes.healthiconsUiUserProfileOutlin3}>
        <HealthiconsUiUserProfileOutlin3 className={classes.icon4} />
      </div>
      <div className={classes.cassandraWarren}>Cassandra Warren</div>
      <div className={classes._7811}>#7811</div>


      <ActionButton_TypeDetailStateDe className={classes.actionButton7} />
      <ActionButton_TypeCheckoutState className={classes.actionButton8} />
      <div className={classes._1DayAgo2}>1 day ago</div>
      <div className={classes._2Days2}>2 days</div>
      <StatusButton_TypeStable className={classes.statusButton4} />
      <div className={classes.iCUA3}>ICU A</div>
      <div className={classes.healthiconsUiUserProfileOutlin4}>
        <HealthiconsUiUserProfileOutlin4 className={classes.icon5} />
      </div>
      <div className={classes.mustafaValentine}>Mustafa Valentine</div>
      <div className={classes._7780}>#7780</div>


      <ActionButton_TypeDetailStateDe className={classes.actionButton9} />
      <ActionButton_TypeCheckoutState className={classes.actionButton10} />
      <div className={classes._3DaysAgo}>3 days ago</div>
      <div className={classes._4Days}>4 days</div>
      <StatusButton_TypeStable className={classes.statusButton5} />
      <div className={classes.iCUB2}>ICU B</div>
      <div className={classes.healthiconsUiUserProfileOutlin5}>
        <HealthiconsUiUserProfileOutlin5 className={classes.icon6} />
      </div>
      <div className={classes.sharonFernandez}>Sharon Fernandez</div>
      <div className={classes._2353}>#2353</div>


      <ActionButton_TypeDetailStateDe className={classes.actionButton11} />
      <ActionButton_TypeCheckoutState className={classes.actionButton12} />
      <div className={classes._8MinutesAgo}>8 minutes ago</div>
      <div className={classes.Days}>0 days</div>
      <StatusButton_TypeCritical className={classes.statusButton6} />
      <div className={classes.iCUA4}>ICU A</div>
      <div className={classes.healthiconsUiUserProfileOutlin6}>
        <HealthiconsUiUserProfileOutlin6 className={classes.icon7} />
      </div>
      <div className={classes.theodoreWallace}>Theodore Wallace</div>
      <div className={classes._4227}>#4227</div>


      <ActionButton_TypeDetailStateDe className={classes.actionButton13} />
      <ActionButton_TypeCheckoutState className={classes.actionButton14} />
      <div className={classes._7HoursAgo}>7 hours ago</div>
      <div className={classes._4Days2}>4 days</div>
      <StatusButton_TypeStable className={classes.statusButton7} />
      <div className={classes.iCUA5}>ICU A</div>
      <div className={classes.healthiconsUiUserProfileOutlin7}>
        <HealthiconsUiUserProfileOutlin7 className={classes.icon8} />
      </div>
      <div className={classes.donaldAnderson}>Donald Anderson</div>
      <div className={classes._3222}>#3222</div>


      <ActionButton_TypeDetailStateDe className={classes.actionButton15} />
      <ActionButton_TypeCheckoutState className={classes.actionButton16} />
      <div className={classes._2HoursAgo}>2 hours ago</div>
      <div className={classes._3Days2}>3 days</div>
      <StatusButton_TypeUnstable className={classes.statusButton8} />
      <div className={classes.iCUA6}>ICU A</div>
      <div className={classes.healthiconsUiUserProfileOutlin8}>
        <HealthiconsUiUserProfileOutlin8 className={classes.icon9} />
      </div>
      <div className={classes.bobbyWard}>Bobby Ward</div>
      <div className={classes._047}>#0047</div>


      <ActionButton_TypeDetailStateDe className={classes.actionButton17} />
      <ActionButton_TypeCheckoutState className={classes.actionButton18} />
      <div className={classes._1DayAgo3}>1 day ago</div>
      <div className={classes._3Days3}>3 days</div>
      <StatusButton_TypeStable className={classes.statusButton9} />
      <div className={classes.iCUB3}>ICU B</div>
      <div className={classes.healthiconsUiUserProfileOutlin9}>
        <HealthiconsUiUserProfileOutlin9 className={classes.icon10} />
      </div>
      <div className={classes.lillyPineda}>Lilly Pineda</div>
      <div className={classes._1261}>#1261</div>


      <ActionButton_TypeDetailStateDe className={classes.actionButton19} />
      <ActionButton_TypeCheckoutState className={classes.actionButton20} />
      <div className={classes._8HoursAgo}>8 hours ago</div>
      <div className={classes._1Day2}>1 day</div>
      <StatusButton_TypeUnstable className={classes.statusButton10} />
      <div className={classes.iCUB4}>ICU B</div>
      <div className={classes.healthiconsUiUserProfileOutlin10}>
        <HealthiconsUiUserProfileOutlin10 className={classes.icon11} />
      </div>
      <div className={classes.eleanorSullivan}>Eleanor Sullivan</div>
      <div className={classes._7233}>#7233</div>


      <ActionButton_TypeDetailStateDe className={classes.actionButton21} />
      <ActionButton_TypeCheckoutState className={classes.actionButton22} />
      <div className={classes._1HourAgo}>1 hour ago</div>
      <div className={classes._4Days3}>4 days</div>
      <StatusButton_TypeStable className={classes.statusButton11} />
      <div className={classes.iCUA7}>ICU A</div>
      <div className={classes.healthiconsUiUserProfileOutlin11}>
        <HealthiconsUiUserProfileOutlin11 className={classes.icon12} />
      </div>
      <div className={classes.alexTurner}>Alex Turner</div>
      <div className={classes._1043}>#1043</div>


      {/* Header */}
      <div className={classes.actions}>Actions</div>
      <div className={classes.lastReviewed}>Last Reviewed</div>
      <div className={classes.timeSpent}>Time Spent</div>
      <div className={classes.status}>Status</div>
      <div className={classes.room}>Room</div>
      <div className={classes.patientNameID}>Patient Name &amp; ID</div>

      <PageNav_Property1Page1 className={classes.pageNav} />
      <div className={classes.showing11Of25Entries}>
        <p className={classes.labelWrapper}>
          <span className={classes.label3}>Showing </span>
          <span className={classes.label4}>11</span>
          <span className={classes.label5}> of </span>
          <span className={classes.label6}>25</span>
          <span className={classes.label7}> entries</span>
        </p>
      </div>

      <AddButton_StateDefault className={classes.addButton} />

      <Filter
        className={classes.filter}
        text={{
          label: <div className={classes.label}>Status</div>,
        }}
      />
      <Filter
        className={classes.filter2}
        text={{
          label: <div className={classes.label2}>Room</div>,
        }}
      />
      <div className={classes.box}></div>
      <div className={classes.materialSymbolsSearchRounded}>
        <MaterialSymbolsSearchRoundedIc className={classes.icon18} />
      </div>
      <div className={classes.searchPatient}>Search Patient</div>

      <a href="/patients/" className={classes.patients}>
        <MaterialSymbolsPatientListIcon className={classes.icon19} />
        Patients
      </a>

      <div id="dateTime" className={classes.today}></div>

      <div className={classes.patients2}>Patients</div>
    </div>
  );
});

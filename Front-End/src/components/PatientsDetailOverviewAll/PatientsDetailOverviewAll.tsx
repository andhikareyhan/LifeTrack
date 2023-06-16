import { memo, useState, useEffect } from "react";
import { format } from "date-fns";
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AlarmBar_LevelNone } from './AlarmBar_LevelNone/AlarmBar_LevelNone';
import { AlarmOff_StateDefault } from './AlarmOff_StateDefault/AlarmOff_StateDefault';
import { AlarmSilent_StateOn } from './AlarmSilent_StateOn/AlarmSilent_StateOn';
import { BackbuttonIcon } from './BackbuttonIcon.js';
import { BiThermometerHalfIcon } from './BiThermometerHalfIcon.js';
import { CarbonSkillLevelIcon } from './CarbonSkillLevelIcon.js';
import { EditButton_StateDefault } from './EditButton_StateDefault/EditButton_StateDefault';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse16Icon2 } from './Ellipse16Icon2.js';
import { Ellipse16Icon } from './Ellipse16Icon.js';
import { Ellipse17Icon } from './Ellipse17Icon.js';
import { Ellipse18Icon } from './Ellipse18Icon.js';
import { HealthiconsUiUserProfileOutlin } from './HealthiconsUiUserProfileOutlin.js';
import { IcOutlineWatchLaterIcon } from './IcOutlineWatchLaterIcon.js';
import { LeadiiIcon } from './LeadiiIcon.js';
import { Logo } from './Logo/Logo';
import { MaterialSymbolsBedOutlineSharp } from './MaterialSymbolsBedOutlineSharp.js';
import { MaterialSymbolsBloodPressureOu } from './MaterialSymbolsBloodPressureOu.js';
import { MaterialSymbolsCalendarMonthOu } from './MaterialSymbolsCalendarMonthOu.js';
import { MaterialSymbolsChevronRightIco } from './MaterialSymbolsChevronRightIco.js';
import { MaterialSymbolsEcgHeartOutline } from './MaterialSymbolsEcgHeartOutline.js';
import { MaterialSymbolsLocationOnOutli } from './MaterialSymbolsLocationOnOutli.js';
import { MaterialSymbolsMaleIcon } from './MaterialSymbolsMaleIcon.js';
import { MaterialSymbolsPatientListIcon } from './MaterialSymbolsPatientListIcon.js';
import { MoreButton_TypeMoreStateDefaul } from './MoreButton_TypeMoreStateDefaul/MoreButton_TypeMoreStateDefaul';
import { NewindicIcon } from './NewindicIcon.js';
import { NoteCard_TypeOverviewStateRead } from './NoteCard_TypeOverviewStateRead/NoteCard_TypeOverviewStateRead';
import { NoteCard_TypeOverviewStateUnre } from './NoteCard_TypeOverviewStateUnre/NoteCard_TypeOverviewStateUnre';
import { NotesButton_TypeNotesStateDefa } from './NotesButton_TypeNotesStateDefa/NotesButton_TypeNotesStateDefa';
import { Overhead_StateActive } from './Overhead_StateActive/Overhead_StateActive';
import { Overhead_StateInactive } from './Overhead_StateInactive/Overhead_StateInactive';
import classes from './PatientsDetailOverviewAll.module.css';
import { PhWindIcon } from './PhWindIcon.js';
import { Profile } from './Profile/Profile';
import { Rectangle13Icon } from './Rectangle13Icon.js';
import { Rectangle20Icon } from './Rectangle20Icon.js';
import { Rectangle21Icon } from './Rectangle21Icon.js';
import { Settings_StateDefault } from './Settings_StateDefault/Settings_StateDefault';
import { SidebarPages_PagesLogOutStateD } from "./SidebarPages_PagesLogOutStateD/SidebarPages_PagesLogOutStateD";
import { SidebarPages_PagesNotification } from "./SidebarPages_PagesNotification/SidebarPages_PagesNotification";
import { SidebarPages_PagesPatientsStat } from "./SidebarPages_PagesPatientsStat/SidebarPages_PagesPatientsStat";
import { SidebarPages_PagesSettingsStat } from "./SidebarPages_PagesSettingsStat/SidebarPages_PagesSettingsStat";
import { SidebarPages_PagesSupportState } from "./SidebarPages_PagesSupportState/SidebarPages_PagesSupportState";
import { Snooze_StateDefault } from './Snooze_StateDefault/Snooze_StateDefault';
import { Star_StateActive } from './Star_StateActive/Star_StateActive';
import { SysIcon } from './SysIcon.js';
import { Vector5Icon } from './Vector5Icon.js';
import { Vector6Icon } from './Vector6Icon.js';
import { Vector7Icon } from './Vector7Icon.js';
import { Vector8Icon } from './Vector8Icon.js';
import { Vector16Icon } from './Vector16Icon.js';
import { Vector17Icon } from './Vector17Icon.js';
import { Vector18Icon } from './Vector18Icon.js';
import { Vector19Icon } from './Vector19Icon.js';
import { Vector20Icon } from './Vector20Icon.js';
import { Vector21Icon } from './Vector21Icon.js';
import { Vector22Icon } from './Vector22Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';
import { Overlay } from '../LogoutOverlay/Overlay';

interface Props {
  className?: string;
}
/* @figmaId 119:1097 */
export const PatientsDetailOverviewAll: FC<Props> = memo(function PatientsDetailOverviewAll(props = {}) {
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
      <div className={classes.bio}></div>
      <div className={classes.demographic}></div>
      <div className={classes.profile2}></div>
      <div className={classes.menu}></div>
      <Profile
        className={classes.profile}
        swap={{
          ellipse1: <Ellipse1Icon className={classes.icon} />,
        }}
      />
      <Logo className={classes.logo} />
      <div className={classes.overview}>Overview</div>
      
      <EditButton_StateDefault className={classes.editButton} />

      <a href="/patients/"><button type="button" className={classes.backButton}>
        <BackbuttonIcon className={classes.icon12} />
      </button></a>
      
      <div className={classes.admitted5April2023}>
        <div className={classes.textBlock}>Admitted</div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>5 April 2023</span>
          </p>
        </div>
      </div>
      <div className={classes.icOutlineWatchLater}>
        <IcOutlineWatchLaterIcon className={classes.icon2} />
      </div>
      <div className={classes.iCUABed4}>ICU A, Bed #4</div>
      <div className={classes.materialSymbolsBedOutlineSharp}>
        <MaterialSymbolsBedOutlineSharp className={classes.icon3} />
      </div>
      <div className={classes.jlPungkurNo97BBandungJawaBarat}>
        <div className={classes.textBlock3}>Jl. Pungkur No.97B</div>
        <div className={classes.textBlock4}>Bandung</div>
        <div className={classes.textBlock5}>Jawa Barat</div>
      </div>
      <div className={classes.materialSymbolsLocationOnOutli}>
        <MaterialSymbolsLocationOnOutli className={classes.icon4} />
      </div>
      <div className={classes._6Jan198637YearsOld}>
        <div className={classes.textBlock6}>06 Jan 1986</div>
        <div className={classes.textBlock7}>(37 years old)</div>
      </div>
      <div className={classes.materialSymbolsCalendarMonthOu}>
        <MaterialSymbolsCalendarMonthOu className={classes.icon5} />
      </div>
      <div className={classes.male}>Male</div>
      <div className={classes.materialSymbolsMale}>
        <MaterialSymbolsMaleIcon className={classes.icon6} />
      </div>
      <div className={classes.rectangle13}>
        <Rectangle13Icon className={classes.icon7} />
      </div>
      <div className={classes.stable}>Stable</div>
      <div className={classes._878555589}>0878 5555 89</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon8} />
      </div>
      <div className={classes.alexTurner}>Alex Turner</div>
      <div className={classes.healthiconsUiUserProfileOutlin}>
        <HealthiconsUiUserProfileOutlin className={classes.icon9} />
      </div>

      <a href="/patients-details/" className={classes.patientDetails}>Patient Details</a>
      
      <div className={classes.materialSymbolsChevronRight}>
        <MaterialSymbolsChevronRightIco className={classes.icon10} />
      </div>

      <a href="/patients/" className={classes.patients}>
        <MaterialSymbolsPatientListIcon className={classes.icon11} />
        Patients
      </a>

      <div className={classes.patients2}>Patients</div>
      
      <a href="/patients/"><button type="button" className={classes.backButton}>
        <BackbuttonIcon className={classes.icon12} />
      </button></a>

      <NotesButton_TypeNotesStateDefa className={classes.notesButton} />
      
      <div className={classes.outerBox}></div>
      <div className={classes._1}>1</div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon13} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon14} />
      </div>
      <NoteCard_TypeOverviewStateUnre
        className={classes.noteCard}
        text={{
          subject: <div className={classes.subject}>Medical prescription ready</div>,
          createdBy: <div className={classes.createdBy}>Created by dr. Maya Hawke</div>,
        }}
      />
      <NoteCard_TypeOverviewStateRead
        className={classes.noteCard2}
        swap={{
          star: <Star_StateActive className={classes.star} />,
        }}
        text={{
          subject: <div className={classes.subject2}>Vital signs stable</div>,
          createdBy: <div className={classes.createdBy2}>Created by dr. John Smith</div>,
          apr9: <div className={classes.apr9}>Apr 8</div>,
        }}
      />
      <NoteCard_TypeOverviewStateRead
        className={classes.noteCard3}
        text={{
          subject: <div className={classes.subject3}>Monitor vital signs regularly</div>,
          createdBy: <div className={classes.createdBy3}>Created by dr. John Smith</div>,
          apr9: <div className={classes.apr92}>Apr 6</div>,
        }}
      />
      <NoteCard_TypeOverviewStateRead
        className={classes.noteCard4}
        text={{
          subject: <div className={classes.subject4}>Checkup results</div>,
          createdBy: <div className={classes.createdBy4}>Created by Nicole Green</div>,
          apr9: <div className={classes.apr93}>Apr 6</div>,
        }}
      />
      <NoteCard_TypeOverviewStateUnre
        className={classes.noteCard5}
        text={{
          subject: <div className={classes.subject5}>General checkup request</div>,
          createdBy: <div className={classes.createdBy5}>Created by dr. Chris Martin</div>,
          apr9: <div className={classes.apr94}>Apr 5</div>,
        }}
      />
      <NoteCard_TypeOverviewStateRead
        className={classes.noteCard6}
        text={{
          subject: <div className={classes.subject6}>Anticoagulants administered</div>,
          createdBy: <div className={classes.createdBy6}>Created by Nicole Green</div>,
          apr9: <div className={classes.apr95}>Apr 5</div>,
        }}
      />
      <div className={classes.newIndic}>
        <NewindicIcon className={classes.icon15} />
      </div>
      <div className={classes.unreviewed2}>Unreviewed (2)</div>
      <div className={classes.unnamed}>|</div>
      <div className={classes.starred1}>Starred (1)</div>
      <div className={classes.unnamed2}>|</div>
      <div className={classes.all6}>All (6)</div>
      <div className={classes.rectangle16}></div>
      <div className={classes.rectangle24}></div>
      <div className={classes.line8}></div>
      <div className={classes.reviewedNotesStatus}>Reviewed Notes Status</div>
      <div className={classes._4}>4</div>
      <div className={classes.reviewed}>Reviewed</div>
      <div className={classes._2}>2</div>
      <div className={classes.unreviewed}>Unreviewed</div>
      <div className={classes.all}>All</div>
      <div className={classes._6}>6</div>
      

      <div className={classes.rectangle23}></div>
      <div className={classes._371}>37.1</div>
      <div className={classes._36}>36.0</div>
      <div className={classes._39}>39.0</div>
      <div className={classes.biThermometerHalf}>
        <BiThermometerHalfIcon className={classes.icon16} />
      </div>
      <div className={classes.temp}>Temp</div>


      {/* <div className={classes.rectangle22}></div>
      <div className={classes._16}>16</div>
      <div className={classes._8}>8</div>
      <div className={classes._30}>30</div>
      <div className={classes.phWind}>
        <PhWindIcon className={classes.icon17} />
      </div>
      <div className={classes.awRR}>awRR</div> */}


      <div className={classes.rectangle21}></div>
      <div className={classes._98}>98</div>
      <div className={classes._90}>90</div>
      <div className={classes._100}>100</div>
      <div className={classes.carbonSkillLevel}>
        <CarbonSkillLevelIcon className={classes.icon18} />
      </div>
      <div className={classes.spO2}>SpO2</div>


      <div className={classes.rectangle20}></div>
      <div className={classes._11578}>115/78</div>
      <div className={classes._9060}>90/60</div>
      <div className={classes._14090}>140/90</div>
      <div className={classes.materialSymbolsBloodPressureOu}>
        <MaterialSymbolsBloodPressureOu className={classes.icon20} />
      </div>
      <div className={classes.nIBP}>NIBP</div>


      <div className={classes.rectangle19}></div>
      <div className={classes.eCG}>ECG</div>
      <div className={classes._70}>70</div>
      <div className={classes._120}>120</div>
      <div className={classes._502}>50</div>
      <div className={classes.materialSymbolsEcgHeartOutline}>
        <MaterialSymbolsEcgHeartOutline className={classes.icon31} />
      </div>
      
      <div className={classes.slide431}>
        <div className={classes.leadII}>
          <LeadiiIcon className={classes.icon32} />
        </div>
        <div className={classes.vector5}>
          <Vector5Icon className={classes.icon34} />
        </div>
        <div className={classes.vector6}>
          <Vector6Icon className={classes.icon35} />
        </div>
        <div className={classes.vector7}>
          <Vector7Icon className={classes.icon36} />
        </div>
        <div className={classes.vector8}>
          <Vector8Icon className={classes.icon37} />
        </div>
        <div className={classes.leadII2}>Lead II</div>
        <div className={classes.leadV2}>Lead V2</div>
        <div className={classes.ellipse16}>
          <Ellipse16Icon className={classes.icon33} />
        </div>
        <div className={classes.ellipse162}>
          <Ellipse16Icon2 className={classes.icon38} />
        </div>
        <div className={classes._1MV}>1 mV</div>
        <div className={classes.rectangle60}></div>
      </div>

      <div id="dateTime" className={classes.today}></div>
      
      <Overhead_StateActive
        className={classes.overhead}
        text={{
          enterTextHere: <div className={classes.enterTextHere}>Overview</div>,
        }}
      />
      <Overhead_StateInactive
        className={classes.overhead2}
        text={{
          enterTextHere: <div className={classes.enterTextHere2}>ECG</div>,
        }}
        link="/patients-ecg/"
      />
      <Overhead_StateInactive
        className={classes.overhead3}
        text={{
          enterTextHere: <div className={classes.enterTextHere3}>Blood Pressure</div>,
        }}
        link="/patients-nibp/"
      />
      <Overhead_StateInactive
        className={classes.overhead4}
        text={{
          enterTextHere: <div className={classes.enterTextHere4}>Respiration</div>,
        }}
        link="/patients-rr/"
      />
      <Overhead_StateInactive
        className={classes.overhead5}
        text={{
          enterTextHere: <div className={classes.enterTextHere5}>SpO2</div>,
        }}
        link="/patients-spo2/"
      />
      <Overhead_StateInactive
        className={classes.overhead6}
        text={{
          enterTextHere: <div className={classes.enterTextHere6}>Body Temp</div>,
        }}
        link="/patients-temp/"
      />

      <SidebarPages_PagesLogOutStateD className={classes.sidebarPages} onOpenOverlay={handleOpenOverlay} />
      {showOverlay && <Overlay onClose={handleCloseOverlay} />}
      <SidebarPages_PagesSupportState className={classes.sidebarPages2} />
      <SidebarPages_PagesSettingsStat className={classes.sidebarPages3} />
      <SidebarPages_PagesNotification className={classes.sidebarPages4} />
      <SidebarPages_PagesPatientsStat className={classes.sidebarPages5} />
      
      <div className={classes.rectangle212}>
        <Rectangle21Icon className={classes.icon39} />
      </div>
      <div className={classes.alarmStatus}>Alarm Status</div>
      <div className={classes.alarmHistory}>Alarm History</div>
      <AlarmSilent_StateOn className={classes.alarmSilent} classes={{ ellipse4: classes.ellipse4 }} />
      <AlarmBar_LevelNone className={classes.alarmBar} />
      <AlarmOff_StateDefault className={classes.alarmOff} classes={{ ellipse9: classes.ellipse9 }} />
      <Settings_StateDefault className={classes.settings} classes={{ ellipse11: classes.ellipse11 }} />
      <Snooze_StateDefault className={classes.snooze} classes={{ ellipse11: classes.ellipse112 }} />
      <div className={classes.frame13}>
        <div className={classes.rectangle56}></div>
        <div className={classes.rectangle57}></div>
        <div className={classes.rectangle58}></div>
        <div className={classes.rectangle59}></div>
        <div className={classes._5Apr2023}>5 Apr 2023</div>
        <div className={classes._213}>21:03</div>
        <div className={classes.eCG2}>ECG</div>
        <div className={classes.rapidHeartRate}>Rapid heart rate</div>
        <div className={classes.nicoleGreen}>Nicole Green</div>
        <div className={classes.date}>Date</div>
        <div className={classes.time}>Time</div>
        <div className={classes.type}>Type</div>
        <div className={classes.description}>Description</div>
        <div className={classes.resolvedBy}>Resolved by</div>
        <div className={classes.line11}></div>
      </div>
      <MoreButton_TypeMoreStateDefaul className={classes.moreButton} />
    </div>
  );
});

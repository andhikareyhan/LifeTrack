import { memo, useState, useEffect } from "react";
import { format } from "date-fns";
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AlarmBar_LevelNoneShort } from './AlarmBar_LevelNoneShort/AlarmBar_LevelNoneShort';
import { AlarmOff_StateDefault } from './AlarmOff_StateDefault/AlarmOff_StateDefault';
import { AlarmSilent_StateOn } from './AlarmSilent_StateOn/AlarmSilent_StateOn';
import { BackbuttonIcon } from './BackbuttonIcon.js';
import { EditButton_StateDefault } from './EditButton_StateDefault/EditButton_StateDefault';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Group38Icon } from './Group38Icon.js';
import { HealthiconsUiUserProfileOutlin } from './HealthiconsUiUserProfileOutlin.js';
import { IcOutlineWatchLaterIcon } from './IcOutlineWatchLaterIcon.js';
import { Logo } from './Logo/Logo';
import { MaterialSymbolsBedOutlineSharp } from './MaterialSymbolsBedOutlineSharp.js';
import { MaterialSymbolsCalendarMonthOu } from './MaterialSymbolsCalendarMonthOu.js';
import { MaterialSymbolsChevronRightIco2 } from './MaterialSymbolsChevronRightIco2.js';
import { MaterialSymbolsChevronRightIco } from './MaterialSymbolsChevronRightIco.js';
import { MaterialSymbolsLocationOnOutli } from './MaterialSymbolsLocationOnOutli.js';
import { MaterialSymbolsMaleIcon } from './MaterialSymbolsMaleIcon.js';
import { MaterialSymbolsPatientListIcon } from './MaterialSymbolsPatientListIcon.js';
import { MaterialSymbolsPunchClockOutli } from './MaterialSymbolsPunchClockOutli.js';
import { MoreButton_TypeHistoryStateDef } from './MoreButton_TypeHistoryStateDef/MoreButton_TypeHistoryStateDef';
import { NoteCard_TypeCompactStateUnrea } from './NoteCard_TypeCompactStateUnrea/NoteCard_TypeCompactStateUnrea';
import { NotesButton_TypeNotesStateDefa } from './NotesButton_TypeNotesStateDefa/NotesButton_TypeNotesStateDefa';
import { Overhead_StateActive } from './Overhead_StateActive/Overhead_StateActive';
import { Overhead_StateInactive } from './Overhead_StateInactive/Overhead_StateInactive';
import classes from './PatientsDetailNIBP.module.css';
import { Profile } from './Profile/Profile';
import { Rectangle13Icon } from './Rectangle13Icon.js';
import { Settings_StateDefault } from './Settings_StateDefault/Settings_StateDefault';
import { SidebarPages_PagesLogOutStateD } from './SidebarPages_PagesLogOutStateD/SidebarPages_PagesLogOutStateD';
import { SidebarPages_PagesNotification } from './SidebarPages_PagesNotification/SidebarPages_PagesNotification';
import { SidebarPages_PagesPatientsStat } from './SidebarPages_PagesPatientsStat/SidebarPages_PagesPatientsStat';
import { SidebarPages_PagesSettingsStat } from './SidebarPages_PagesSettingsStat/SidebarPages_PagesSettingsStat';
import { SidebarPages_PagesSupportState } from './SidebarPages_PagesSupportState/SidebarPages_PagesSupportState';
import { Snooze_StateDefault } from './Snooze_StateDefault/Snooze_StateDefault';
import { SysIcon } from './SysIcon.js';
import { TimeScale_HighlightedToday } from './TimeScale_HighlightedToday/TimeScale_HighlightedToday';
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
/* @figmaId 176:450 */
export const PatientsDetailNIBP: FC<Props> = memo(function PatientsDetailNIBP(props = {}) {
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
      <div className={classes.rectangle16}></div>
      <div className={classes.group38}>
        <Group38Icon className={classes.icon2} />
      </div>
      <div className={classes.line8}></div>
      <div className={classes.rectangle24}></div>
      <div className={classes.historicalData}>Historical Data</div>
      <div className={classes.bloodPressure}>Blood Pressure</div>
      <div className={classes.meanArterialPressureMAP}>Mean Arterial Pressure (MAP)</div>
      <div className={classes.sys}>
        <SysIcon className={classes.icon3} />
      </div>
      <div className={classes.sys2}>Sys</div>
      <div className={classes.max}>Max</div>
      <div className={classes.max2}>Max</div>
      <div className={classes.max3}>Max</div>
      <div className={classes.min}>Min</div>
      <div className={classes.avg}>Avg</div>
      <div className={classes.avg2}>Avg</div>
      <div className={classes.avg3}>Avg</div>
      <div className={classes.min2}>Min</div>
      <div className={classes.min3}>Min</div>
      <div className={classes.dia}>Dia</div>
      <div className={classes._120}>120</div>
      <div className={classes._83}>83</div>
      <div className={classes._101}>101</div>
      <div className={classes._72}>72</div>
      <div className={classes._81}>81</div>
      <div className={classes._58}>58</div>
      <div className={classes._74}>74</div>
      <div className={classes._96}>96</div>
      <div className={classes._117}>117</div>
      <TimeScale_HighlightedToday className={classes.timeScale} />
      <div className={classes.dia2}>Dia</div>
      <div className={classes.line9}></div>
      <div className={classes.line10}></div>
      <div className={classes.sys3}>Sys</div>
      <div className={classes._200Line}></div>
      <div className={classes.unnamed}>0</div>
      <div className={classes._200Line2}></div>
      <div className={classes._40}>40</div>
      <div className={classes._200Line3}></div>
      <div className={classes._80}>80</div>
      <div className={classes._200Line4}></div>
      <div className={classes._1202}>120</div>
      <div className={classes._200Line5}></div>
      <div className={classes._160}>160</div>
      <div className={classes._200Line6}></div>
      <div className={classes._200}>200</div>
      <div className={classes.mmHg}>mmHg</div>
      <div className={classes.time}>Time</div>
      <div className={classes._1203}>12:00</div>
      <div className={classes._180}>18:00</div>
      <div className={classes._60}>06:00</div>
      <div className={classes._240}>24:00</div>
      <div className={classes.line13}></div>
      <div className={classes.line14}></div>
      <div className={classes.line15}></div>
      <div className={classes.line16}></div>
      <div className={classes.line17}></div>
      <div className={classes._200Line7}></div>
      <div className={classes.unnamed2}>0</div>
      <div className={classes._200Line8}></div>
      <div className={classes._402}>40</div>
      <div className={classes._200Line9}></div>
      <div className={classes._802}>80</div>
      <div className={classes._200Line10}></div>
      <div className={classes._1204}>120</div>
      <div className={classes._200Line11}></div>
      <div className={classes._1602}>160</div>
      <div className={classes._200Line12}></div>
      <div className={classes._2002}>200</div>
      <div className={classes.mmHg2}>mmHg</div>
      <div className={classes.time2}>Time</div>
      <div className={classes._602}>06:00</div>
      <div className={classes._1205}>12:00</div>
      <div className={classes._1802}>18:00</div>
      <div className={classes._2402}>24:00</div>
      <div className={classes.line132}></div>
      <div className={classes.line142}></div>
      <div className={classes.line152}></div>
      <div className={classes.line162}></div>
      <div className={classes.line172}></div>
      <div className={classes.vector16}>
        <Vector16Icon className={classes.icon4} />
      </div>
      <div className={classes.vector19}>
        <Vector19Icon className={classes.icon5} />
      </div>
      <div className={classes.vector17}>
        <Vector17Icon className={classes.icon6} />
      </div>
      <div className={classes.vector20}>
        <Vector20Icon className={classes.icon7} />
      </div>
      <div className={classes.vector18}>
        <Vector18Icon className={classes.icon8} />
      </div>
      <div className={classes.vector21}>
        <Vector21Icon className={classes.icon9} />
      </div>
      <div className={classes.vector22}>
        <Vector22Icon className={classes.icon10} />
      </div>
      <div className={classes.rectangle162}></div>
      <div className={classes.line82}></div>
      <div className={classes.rectangle242}></div>
      <div className={classes.diastolic}>Diastolic</div>
      <div className={classes.mmHg3}>mmHg</div>
      <div className={classes._78}>78</div>
      <div className={classes.systolic}>Systolic</div>
      <div className={classes.mmHg4}>mmHg</div>
      <div className={classes._115}>115</div>
      <div className={classes._942023200}>09-04-2023 20:00</div>
      <div className={classes.icOutlineWatchLater}>
        <IcOutlineWatchLaterIcon className={classes.icon11} />
      </div>
      <div className={classes.latestReading}>Latest Reading</div>
      <div className={classes.bloodPressure2}>Blood Pressure</div>
      <div className={classes.materialSymbolsPunchClockOutli}>
        <MaterialSymbolsPunchClockOutli className={classes.icon12} />
      </div>
      <div className={classes.admitted5April2023}>
        <div className={classes.textBlock}>Admitted</div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>5 April 2023</span>
          </p>
        </div>
      </div>
      <div className={classes.iCUABed4}>ICU A, Bed #4</div>
      <div className={classes.materialSymbolsBedOutlineSharp}>
        <MaterialSymbolsBedOutlineSharp className={classes.icon13} />
      </div>
      <div className={classes.jlPungkurNo97BBandungJawaBarat}>
        <div className={classes.textBlock3}>Jl. Pungkur No.97B</div>
        <div className={classes.textBlock4}>Bandung</div>
        <div className={classes.textBlock5}>Jawa Barat</div>
      </div>
      <div className={classes.materialSymbolsLocationOnOutli}>
        <MaterialSymbolsLocationOnOutli className={classes.icon14} />
      </div>
      <div className={classes._6Jan198637YearsOld}>
        <div className={classes.textBlock6}>06 Jan 1986</div>
        <div className={classes.textBlock7}>(37 years old)</div>
      </div>
      <div className={classes.materialSymbolsCalendarMonthOu}>
        <MaterialSymbolsCalendarMonthOu className={classes.icon15} />
      </div>
      <div className={classes.male}>Male</div>
      <div className={classes.materialSymbolsMale}>
        <MaterialSymbolsMaleIcon className={classes.icon16} />
      </div>
      <div className={classes.rectangle13}>
        <Rectangle13Icon className={classes.icon17} />
      </div>
      <div className={classes.stable}>Stable</div>
      <div className={classes._878555589}>0878 5555 89</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon18} />
      </div>
      <div className={classes.alexTurner}>Alex Turner</div>
      <div className={classes.healthiconsUiUserProfileOutlin}>
        <HealthiconsUiUserProfileOutlin className={classes.icon19} />
      </div>
      
      <a href='/patients-details/' className={classes.patientDetails}>Patient Details</a>

      <div className={classes.materialSymbolsChevronRight}>
        <MaterialSymbolsChevronRightIco className={classes.icon20} />
      </div>

      <a href='/patients-nibp/' className={classes.bloodPressure3}>Blood Pressure</a>

      <div className={classes.materialSymbolsChevronRight2}>
        <MaterialSymbolsChevronRightIco2 className={classes.icon21} />
      </div>
      
      <a href="/patients/" className={classes.patients}>
        <MaterialSymbolsPatientListIcon className={classes.icon22} />
        Patients
      </a>

      <div className={classes.patients2}>Patients</div>
      
      <a href="/patients/"><button type="button" className={classes.backButton}>
        <BackbuttonIcon className={classes.icon23} />
      </button></a>

      <div id="dateTime" className={classes.today}></div>
      
      <Overhead_StateInactive
        className={classes.overhead}
        text={{
          enterTextHere: <div className={classes.enterTextHere}>Overview</div>,
        }}
        link="/patients-details/"
      />
      <Overhead_StateInactive
        className={classes.overhead2}
        text={{
          enterTextHere: <div className={classes.enterTextHere2}>ECG</div>,
        }}
        link="/patients-ecg/"
      />
      <Overhead_StateActive
        className={classes.overhead3}
        text={{
          enterTextHere: <div className={classes.enterTextHere3}>Blood Pressure</div>,
        }}
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
      
      <NotesButton_TypeNotesStateDefa className={classes.notesButton} />
      
      <div className={classes.rectangle163}></div>
      <AlarmSilent_StateOn className={classes.alarmSilent} classes={{ ellipse4: classes.ellipse4 }} />
      <Settings_StateDefault className={classes.settings} classes={{ ellipse11: classes.ellipse11 }} />
      <AlarmOff_StateDefault className={classes.alarmOff} classes={{ ellipse9: classes.ellipse9 }} />
      <Snooze_StateDefault className={classes.snooze} classes={{ ellipse11: classes.ellipse112 }} />
      <AlarmBar_LevelNoneShort className={classes.alarmBar} />
      <div className={classes.line83}></div>
      <div className={classes.rectangle243}></div>
      <div className={classes.alarmStatus}>Alarm Status</div>
      <MoreButton_TypeHistoryStateDef className={classes.moreButton} />
      <div className={classes.rectangle164}></div>
      <div className={classes.line84}></div>
      <div className={classes.rectangle244}></div>
      <div className={classes.notes}>Notes</div>
      <div className={classes._1}>1</div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon24} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon25} />
      </div>
      <NoteCard_TypeCompactStateUnrea
        className={classes.noteCard}
        text={{
          subject: <div className={classes.subject}>Vital signs stable</div>,
          createdBy: <div className={classes.createdBy}>Created by dr. John Smith</div>,
          apr9: <div className={classes.apr9}>Apr 8</div>,
        }}
      />
      <NoteCard_TypeCompactStateUnrea
        className={classes.noteCard2}
        text={{
          subject: <div className={classes.subject2}>Checkup results</div>,
          createdBy: <div className={classes.createdBy2}>Created by Nicole Green</div>,
          apr9: <div className={classes.apr92}>Apr 6</div>,
        }}
      />
      <NoteCard_TypeCompactStateUnrea
        className={classes.noteCard3}
        text={{
          subject: <div className={classes.subject3}>Anticoagulants administered</div>,
          createdBy: <div className={classes.createdBy3}>Created by Nicole Green</div>,
          apr9: <div className={classes.apr93}>Apr 5</div>,
        }}
      />
      <div className={classes.rectangle165}></div>
      <div className={classes.line85}></div>
      <div className={classes.comorbiditiesRiskFactor}>Comorbidities &amp; Risk Factor</div>
      <div className={classes.symptoms}>Symptoms</div>
      <div className={classes.allergies}>Allergies</div>
      <div className={classes.rectangle245}></div>
      <div className={classes.medicalDiagnosis}>Medical Diagnosis</div>
      <div className={classes.frame14}>
        <div className={classes.hypertensionSmoking}>Hypertension, smoking</div>
      </div>
      <div className={classes.frame15}>
        <div className={classes.chestPainFatigueHeartPalpitati}>Chest pain, fatigue, heart palpitations, weakness</div>
      </div>
      <div className={classes.frame16}>
        <div className={classes.noAllergies}>No allergies</div>
      </div>
      <EditButton_StateDefault className={classes.editButton} />
    </div>
  );
});

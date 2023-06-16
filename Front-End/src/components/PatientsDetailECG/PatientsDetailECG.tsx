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
import { Ellipse16Icon2 } from './Ellipse16Icon2.js';
import { Ellipse16Icon3 } from './Ellipse16Icon3.js';
import { Ellipse16Icon } from './Ellipse16Icon.js';
import { HealthiconsUiUserProfileOutlin } from './HealthiconsUiUserProfileOutlin.js';
import { IcOutlineWatchLaterIcon2 } from './IcOutlineWatchLaterIcon2.js';
import { IcOutlineWatchLaterIcon } from './IcOutlineWatchLaterIcon.js';
import { LeadiiIcon } from './LeadiiIcon.js';
import { Logo } from './Logo/Logo';
import { MaterialSymbolsBedOutlineSharp } from './MaterialSymbolsBedOutlineSharp.js';
import { MaterialSymbolsCalendarMonthOu } from './MaterialSymbolsCalendarMonthOu.js';
import { MaterialSymbolsChevronRightIco2 } from './MaterialSymbolsChevronRightIco2.js';
import { MaterialSymbolsChevronRightIco } from './MaterialSymbolsChevronRightIco.js';
import { MaterialSymbolsLocationOnOutli } from './MaterialSymbolsLocationOnOutli.js';
import { MaterialSymbolsMaleIcon } from './MaterialSymbolsMaleIcon.js';
import { MaterialSymbolsPatientListIcon } from './MaterialSymbolsPatientListIcon.js';
import { MoreButton_TypeHistoryStateDef } from './MoreButton_TypeHistoryStateDef/MoreButton_TypeHistoryStateDef';
import { NoteCard_TypeCompactStateUnrea } from './NoteCard_TypeCompactStateUnrea/NoteCard_TypeCompactStateUnrea';
import { NotesButton_TypeNotesStateDefa } from './NotesButton_TypeNotesStateDefa/NotesButton_TypeNotesStateDefa';
import { Overhead_StateActive } from './Overhead_StateActive/Overhead_StateActive';
import { Overhead_StateInactive } from './Overhead_StateInactive/Overhead_StateInactive';
import classes from './PatientsDetailECG.module.css';
import { Profile } from './Profile/Profile';
import { Rectangle13Icon } from './Rectangle13Icon.js';
import { Settings_StateDefault } from './Settings_StateDefault/Settings_StateDefault';
import { SidebarPages_PagesLogOutStateD } from './SidebarPages_PagesLogOutStateD/SidebarPages_PagesLogOutStateD';
import { SidebarPages_PagesNotification } from './SidebarPages_PagesNotification/SidebarPages_PagesNotification';
import { SidebarPages_PagesPatientsStat } from './SidebarPages_PagesPatientsStat/SidebarPages_PagesPatientsStat';
import { SidebarPages_PagesSettingsStat } from './SidebarPages_PagesSettingsStat/SidebarPages_PagesSettingsStat';
import { SidebarPages_PagesSupportState } from './SidebarPages_PagesSupportState/SidebarPages_PagesSupportState';
import { Snooze_StateDefault } from './Snooze_StateDefault/Snooze_StateDefault';
import { TimeScale_HighlightedToday } from './TimeScale_HighlightedToday/TimeScale_HighlightedToday';
import { Vector5Icon2 } from './Vector5Icon2.js';
import { Vector5Icon } from './Vector5Icon.js';
import { Vector6Icon2 } from './Vector6Icon2.js';
import { Vector6Icon } from './Vector6Icon.js';
import { Vector7Icon2 } from './Vector7Icon2.js';
import { Vector7Icon } from './Vector7Icon.js';
import { Vector8Icon2 } from './Vector8Icon2.js';
import { Vector8Icon } from './Vector8Icon.js';
import { Vector23Icon } from './Vector23Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';
import { Overlay } from '../LogoutOverlay/Overlay';

interface Props {
  className?: string;
}
/* @figmaId 175:125 */
export const PatientsDetailECG: FC<Props> = memo(function PatientsDetailECG(props = {}) {
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
      <div className={classes.electrocardiogram}>Electrocardiogram</div>
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

      <a href="/patients-ecg/" className={classes.eCG}>ECG</a>
      
      <div className={classes.materialSymbolsChevronRight2}>
        <MaterialSymbolsChevronRightIco2 className={classes.icon11} />
      </div>
      
      <a href="/patients/" className={classes.patients}>
        <MaterialSymbolsPatientListIcon className={classes.icon12} />
        Patients
      </a>
      
      <div className={classes.patients2}>Patients</div>
      
      <a href="/patients/"><button type="button" className={classes.backButton}>
        <BackbuttonIcon className={classes.icon13} />
      </button></a>

      <div className={classes.rectangle16}></div>
      <div className={classes.line8}></div>
      <div className={classes.rectangle24}></div>
      <div className={classes.eCGWaveform}>ECG Waveform</div>
      <div className={classes.slide432}>
        <div className={classes.ellipse16}>
          <Ellipse16Icon className={classes.icon14} />
        </div>
        <div className={classes._1MV}>1 mV</div>
        <div className={classes.rectangle60}></div>
        <div className={classes.leadII}>
          <LeadiiIcon className={classes.icon15} />
        </div>
      </div>
      <div className={classes.slide433}>
        <div className={classes.ellipse162}>
          <Ellipse16Icon2 className={classes.icon16} />
        </div>
        <div className={classes._1MV2}>1 mV</div>
        <div className={classes.rectangle602}></div>
        <div className={classes.vector5}>
          <Vector5Icon className={classes.icon17} />
        </div>
        <div className={classes.vector6}>
          <Vector6Icon className={classes.icon18} />
        </div>
        <div className={classes.vector7}>
          <Vector7Icon className={classes.icon19} />
        </div>
        <div className={classes.vector8}>
          <Vector8Icon className={classes.icon20} />
        </div>
      </div>
      <div className={classes.rectangle162}></div>
      <div className={classes.line82}></div>
      <div className={classes.comorbiditiesRiskFactor}>Comorbidities &amp; Risk Factor</div>
      <div className={classes.symptoms}>Symptoms</div>
      <div className={classes.allergies}>Allergies</div>
      <div className={classes.rectangle242}></div>
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
      <div className={classes.rectangle163}></div>
      <div className={classes.line83}></div>
      <div className={classes.rectangle243}></div>
      <div className={classes.heartRate}>Heart Rate</div>
      <div className={classes._62}>62</div>
      <div className={classes.min}>Min</div>
      <div className={classes._98}>98</div>
      <div className={classes.max}>Max</div>
      <div className={classes._70}>70</div>
      <div className={classes.rest}>Rest</div>
      <div className={classes.avg}>Avg</div>
      <div className={classes._74}>74</div>
      <div className={classes.eCGWaveformSTSegment}>ECG Waveform &amp; ST Segment</div>
      <div className={classes.historicalData}>Historical Data</div>
      <div className={classes._200Line}></div>
      <div className={classes.unnamed}>0</div>
      <div className={classes._200Line2}></div>
      <div className={classes._40}>40</div>
      <div className={classes._200Line3}></div>
      <div className={classes._80}>80</div>
      <div className={classes._200Line4}></div>
      <div className={classes._120}>120</div>
      <div className={classes._200Line5}></div>
      <div className={classes._160}>160</div>
      <div className={classes._200Line6}></div>
      <div className={classes._200}>200</div>
      <div className={classes.bPM}>BPM</div>
      <div className={classes.time}>Time</div>
      <div className={classes._60}>06:00</div>
      <div className={classes._1202}>12:00</div>
      <div className={classes._180}>18:00</div>
      <div className={classes._240}>24:00</div>
      <div className={classes.slide4322}>
        <div className={classes.vector52}>
          <Vector5Icon2 className={classes.icon21} />
        </div>
        <div className={classes.vector62}>
          <Vector6Icon2 className={classes.icon22} />
        </div>
        <div className={classes.vector72}>
          <Vector7Icon2 className={classes.icon23} />
        </div>
        <div className={classes.vector82}>
          <Vector8Icon2 className={classes.icon24} />
        </div>
        <div className={classes.ellipse163}>
          <Ellipse16Icon3 className={classes.icon25} />
        </div>
        <div className={classes._1MV3}>1 mV</div>
        <div className={classes.rectangle603}></div>
      </div>
      <TimeScale_HighlightedToday className={classes.timeScale} />
      <div className={classes._1}>0.1</div>
      <div className={classes.unnamed2}>:</div>
      <div className={classes.sTII}>ST-II</div>
      <div className={classes.leadV2}>Lead V2</div>
      <div className={classes.rectangle164}></div>
      <div className={classes.line84}></div>
      <div className={classes.rectangle244}></div>
      <div className={classes.notes}>Notes</div>
      <div className={classes._12}>1</div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon26} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon27} />
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
      <AlarmSilent_StateOn className={classes.alarmSilent} classes={{ ellipse4: classes.ellipse4 }} />
      <Settings_StateDefault className={classes.settings} classes={{ ellipse11: classes.ellipse11 }} />
      <AlarmOff_StateDefault className={classes.alarmOff} classes={{ ellipse9: classes.ellipse9 }} />
      <Snooze_StateDefault className={classes.snooze} classes={{ ellipse11: classes.ellipse112 }} />
      <AlarmBar_LevelNoneShort className={classes.alarmBar} />
      <div className={classes.line85}></div>
      <div className={classes.rectangle245}></div>
      <div className={classes.alarmStatus}>Alarm Status</div>
      <MoreButton_TypeHistoryStateDef className={classes.moreButton} />
      <div className={classes.rectangle166}></div>
      <div className={classes.line86}></div>
      <div className={classes.rectangle246}></div>
      <div className={classes._2}>0.2</div>
      <div className={classes.unnamed3}>:</div>
      <div className={classes.sTAVF}>ST-aVF</div>
      <div className={classes._22}>0.2</div>
      <div className={classes.unnamed4}>:</div>
      <div className={classes.sTIII}>ST-III</div>
      <div className={classes._13}>0.1</div>
      <div className={classes.unnamed5}>:</div>
      <div className={classes.sTII2}>ST-II</div>
      <div className={classes.sTSegment}>ST Segment</div>
      <div className={classes.MV}>(mV)</div>
      <div className={classes.heartRate2}>Heart Rate</div>
      <div className={classes.bpm}>bpm</div>
      <div className={classes._702}>70</div>
      <div className={classes._942023208}>09-04-2023 20:08</div>
      <div className={classes.icOutlineWatchLater2}>
        <IcOutlineWatchLaterIcon2 className={classes.icon28} />
      </div>
      <div className={classes.latestReading}>Latest Reading</div>
      
      <div id="dateTime" className={classes.today}></div>
      
      <Overhead_StateInactive
        className={classes.overhead}
        text={{
          enterTextHere: <div className={classes.enterTextHere}>Overview</div>,
        }}
        link="/patients-details/"
      />
      <Overhead_StateActive
        className={classes.overhead2}
        text={{
          enterTextHere: <div className={classes.enterTextHere2}>ECG</div>,
        }}
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
      
      <NotesButton_TypeNotesStateDefa className={classes.notesButton} />
      
      <div className={classes.line13}></div>
      <div className={classes.line14}></div>
      <div className={classes.line15}></div>
      <div className={classes.line16}></div>
      <div className={classes.line17}></div>
      <div className={classes.vector23}>
        <Vector23Icon className={classes.icon29} />
      </div>
      
      <EditButton_StateDefault className={classes.editButton} />
    </div>
  );
});

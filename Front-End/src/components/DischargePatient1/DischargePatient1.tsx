import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BackButton } from './BackButton/BackButton';
import { Checkbox_StateDefault } from './Checkbox_StateDefault/Checkbox_StateDefault';
import classes from './DischargePatient1.module.css';
import { FinishButton_Property1Default } from './FinishButton_Property1Default/FinishButton_Property1Default';
import { MaterialSymbolsCalendarMonthOu } from './MaterialSymbolsCalendarMonthOu.js';
import { MaterialSymbolsPersonRemoveOut } from './MaterialSymbolsPersonRemoveOut.js';
import { StatusButton_TypeStable } from './StatusButton_TypeStable/StatusButton_TypeStable';

interface Props {
  className?: string;
}
/* @figmaId 414:1706 */
export const DischargePatient1: FC<Props> = memo(function DischargePatient1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle30}></div>
      <BackButton className={classes.backButton} />
      <div className={classes.patientDischarge}>Patient Discharge</div>
      <div className={classes.mdiRegisterOutline}>
        <div className={classes.materialSymbolsPersonRemoveOut}>
          <MaterialSymbolsPersonRemoveOut className={classes.icon} />
        </div>
      </div>
      <div className={classes.frame12}>
        <div className={classes.patientInformation}>Patient Information</div>
        <div className={classes.admissionInformation}>Admission Information</div>
        <div className={classes.dischargeInformation}>Discharge Information</div>
        <div className={classes.vitalsAtDischarge}>Vitals at Discharge</div>
        <div className={classes.rectangle31}></div>
        <div className={classes.alexTurner}>Alex Turner</div>
        <div className={classes.fullName}>Full Name</div>
        <div className={classes.rectangle32}></div>
        <div className={classes.age}>Age</div>
        <div className={classes._37YearsOld}>37 years old</div>
        <div className={classes.status}>Status:</div>
        <div className={classes.doctorApproved}>Doctor Approved?*</div>
        <div className={classes.reasonForDischarge}>Reason for discharge*:</div>
        <div className={classes.rectangle36}></div>
        <div className={classes.dateOfAdmission}>Date of Admission</div>
        <div className={classes._542023}>05/04/2023</div>
        <div className={classes.rectangle362}></div>
        <div className={classes.dateOfDischarge}>Date of Discharge*</div>
        <div className={classes.ddMmYyyy}>dd/mm/yyyy</div>
        <div className={classes.materialSymbolsCalendarMonthOu}>
          <MaterialSymbolsCalendarMonthOu className={classes.icon2} />
        </div>
        <div className={classes.rectangle35}></div>
        <div className={classes.patientID}>Patient ID</div>
        <div className={classes._1034}>1034</div>
        <div className={classes.rectangle352}></div>
        <div className={classes.timeSpent}>Time Spent</div>
        <div className={classes.days}>days</div>
        <div className={classes.rectangle33}></div>
        <div className={classes.bedNo}>Bed No.</div>
        <div className={classes.bed4}>Bed #4</div>
        <div className={classes.rectangle322}></div>
        <div className={classes.iCURoom}>ICU Room</div>
        <div className={classes.iCUA}>ICU A</div>
        <StatusButton_TypeStable className={classes.statusButton} />
        <Checkbox_StateDefault
          className={classes.checkbox}
          text={{
            label: <div className={classes.label}>Yes</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox2}
          text={{
            label: <div className={classes.label2}>No</div>,
          }}
        />
        <div className={classes.rectangle41}></div>
        <div className={classes.reasonForAdmission}>Reason for Admission*</div>
        <div className={classes.rectangle412}></div>
        <div className={classes.finalDiagnosis}>Final Diagnosis*</div>
        <div className={classes.rectangle413}></div>
        <div className={classes.prognosis}>Prognosis*</div>
        <div className={classes.rectangle414}></div>
        <div className={classes.treatmentSummary}>Treatment Summary*</div>
        <Checkbox_StateDefault
          className={classes.checkbox3}
          text={{
            label: <div className={classes.label3}>Condition improved</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox4}
          text={{
            label: <div className={classes.label4}>Patient transferred, reason:</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox5}
          text={{
            label: <div className={classes.label5}>Patient deceased</div>,
          }}
        />
        <div className={classes.rectangle332}></div>
        <div className={classes.rectangle353}></div>
        <div className={classes.heartRateBpm}>Heart Rate (bpm)*</div>
        <div className={classes.rectangle354}></div>
        <div className={classes.rRBrpm}>RR (Brpm)*</div>
        <div className={classes.rectangle355}></div>
        <div className={classes.spO2}>SpO2 (%)*</div>
        <div className={classes.rectangle356}></div>
        <div className={classes.temperatureC}>Temperature (°C)*</div>
        <div className={classes.rectangle357}></div>
        <div className={classes.rectangle363}></div>
        <div className={classes.bPMmHg}>BP (mmHg)*</div>
        <div className={classes.sys}>sys</div>
        <div className={classes.dia}>dia</div>
        <FinishButton_Property1Default className={classes.finishButton} />
      </div>
      <div className={classes.sun9Apr2023208}>Sun, 9 Apr 2023 20:08</div>
    </div>
  );
});

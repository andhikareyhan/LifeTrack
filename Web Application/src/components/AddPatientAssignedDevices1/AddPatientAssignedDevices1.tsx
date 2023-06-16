import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AddPatientAssignedDevices1.module.css';
import { BackButton } from './BackButton/BackButton';
import { BackButton_StateDefault } from './BackButton_StateDefault/BackButton_StateDefault';
import { Checkbox_StateDefault } from './Checkbox_StateDefault/Checkbox_StateDefault';
import { FinishButton_Property1Default } from './FinishButton_Property1Default/FinishButton_Property1Default';
import { MaterialSymbolsArrowDropDownIc2 } from './MaterialSymbolsArrowDropDownIc2.js';
import { MaterialSymbolsArrowDropDownIc3 } from './MaterialSymbolsArrowDropDownIc3.js';
import { MaterialSymbolsArrowDropDownIc } from './MaterialSymbolsArrowDropDownIc.js';
import { MaterialSymbolsCalendarMonthOu } from './MaterialSymbolsCalendarMonthOu.js';
import { MdiRegisterOutlineIcon } from './MdiRegisterOutlineIcon.js';
import { RegistPages_StateActive } from './RegistPages_StateActive/RegistPages_StateActive';
import { RegistPages_StateInactive } from './RegistPages_StateInactive/RegistPages_StateInactive';

interface Props {
  className?: string;
}
/* @figmaId 375:384 */
export const AddPatientAssignedDevices1: FC<Props> = memo(function AddPatientAssignedDevices1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle30}></div>
      <div className={classes.frame9}>
        <div className={classes.rectangle41}></div>
        <div className={classes.diagnosis}>Diagnosis*</div>
        <div className={classes.wasPatientTransferredFromAnoth}>Was patient transferred from another facility?*</div>
        <div className={classes.materialSymbolsCalendarMonthOu}>
          <MaterialSymbolsCalendarMonthOu className={classes.icon} />
        </div>
        <div className={classes.rectangle36}></div>
        <div className={classes.dateOfAdmission}>Date of Admission*</div>
        <div className={classes.ddMmYyyy}>dd/mm/yyyy</div>
        <div className={classes.rectangle35}></div>
        <div className={classes.status}>Status*</div>
        <div className={classes.materialSymbolsArrowDropDown}>
          <MaterialSymbolsArrowDropDownIc className={classes.icon2} />
        </div>
        <div className={classes.rectangle352}></div>
        <div className={classes.heartRateBpm}>Heart Rate (bpm)*</div>
        <div className={classes.rectangle353}></div>
        <div className={classes.rRBrpm}>RR (Brpm)*</div>
        <div className={classes.rectangle354}></div>
        <div className={classes.spO2}>SpO2 (%)*</div>
        <div className={classes.rectangle355}></div>
        <div className={classes.temperatureC}>Temperature (°C)*</div>
        <div className={classes.rectangle356}></div>
        <div className={classes.rectangle362}></div>
        <div className={classes.bPMmHg}>BP (mmHg)*</div>
        <div className={classes.sys}>sys</div>
        <div className={classes.dia}>dia</div>
        <div className={classes.rectangle33}></div>
        <div className={classes.bedNo}>Bed No.*</div>
        <div className={classes.materialSymbolsArrowDropDown2}>
          <MaterialSymbolsArrowDropDownIc2 className={classes.icon3} />
        </div>
        <div className={classes.rectangle32}></div>
        <div className={classes.iCURoom}>ICU Room*</div>
        <div className={classes.materialSymbolsArrowDropDown3}>
          <MaterialSymbolsArrowDropDownIc3 className={classes.icon4} />
        </div>
        <div className={classes.iVFluidTherapy}>IV Fluid Therapy</div>
        <div className={classes.oxygenTherapy}>Oxygen Therapy</div>
        <div className={classes.oralOrogastricFluids}>Oral/orogastric Fluids</div>
        <div className={classes.bloodTransfusion}>Blood Transfusion</div>
        <div className={classes.vasopressors}>Vasopressors</div>
        <div className={classes.invasiveMechanicalVentilation}>Invasive Mechanical Ventilation</div>
        <div className={classes.rectangle31}></div>
        <div className={classes.admittingMD}>Admitting MD*</div>
        <div className={classes.rectangle332}></div>
        <div className={classes.admissionDetails}>Admission Details</div>
        <div className={classes.vitalsAtTriage}>Vitals at Triage</div>
        <div className={classes.currentTreatment}>Current Treatment</div>
        <BackButton_StateDefault className={classes.backButton} />
        <Checkbox_StateDefault
          className={classes.checkbox}
          text={{
            label: <div className={classes.label}>Yes, from:</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox2}
          text={{
            label: <div className={classes.label2}>No</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox3}
          text={{
            label: <div className={classes.label3}>Unknown</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox4}
          text={{
            label: <div className={classes.label4}>Yes, specify ml and solution:</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox5}
          text={{
            label: <div className={classes.label5}>Yes, specify L/min and method:</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox6}
          text={{
            label: <div className={classes.label6}>Yes, specify ml and fluid:</div>,
          }}
        />
        <div className={classes.rectangle322}></div>
        <div className={classes.rectangle34}></div>
        <div className={classes.rectangle357}></div>
        <Checkbox_StateDefault
          className={classes.checkbox7}
          text={{
            label: <div className={classes.label7}>No</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox8}
          text={{
            label: <div className={classes.label8}>No</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox9}
          text={{
            label: <div className={classes.label9}>No</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox10}
          text={{
            label: <div className={classes.label10}>No</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox11}
          text={{
            label: <div className={classes.label11}>No</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox12}
          text={{
            label: <div className={classes.label12}>No</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox13}
          text={{
            label: <div className={classes.label13}>Yes</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox14}
          text={{
            label: <div className={classes.label14}>Yes</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox15}
          text={{
            label: <div className={classes.label15}>Yes</div>,
          }}
        />
        <FinishButton_Property1Default className={classes.finishButton} />
      </div>
      <RegistPages_StateActive
        className={classes.registPages}
        text={{
          a: <div className={classes.a}>C</div>,
          label: <div className={classes.label16}>Assigned Devices</div>,
        }}
      />
      <RegistPages_StateInactive
        className={classes.registPages2}
        text={{
          a: <div className={classes.a2}>B</div>,
          label: <div className={classes.label17}>Medical History</div>,
        }}
      />
      <RegistPages_StateInactive
        className={classes.registPages3}
        text={{
          label: <div className={classes.label18}>Personal Details</div>,
        }}
      />
      <div className={classes.patientRegistrationID9987}>Patient Registration (ID: #9987)</div>
      <div className={classes.mdiRegisterOutline}>
        <MdiRegisterOutlineIcon className={classes.icon5} />
      </div>
      <BackButton className={classes.backButton2} />
      <div className={classes.sun9Apr2023208}>Sun, 9 Apr 2023 20:08</div>
    </div>
  );
});

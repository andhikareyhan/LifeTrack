import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AddPatientPersonalDetails1.module.css';
import { BackButton } from './BackButton/BackButton';
import { MaterialSymbolsArrowDropDownIc2 } from './MaterialSymbolsArrowDropDownIc2.js';
import { MaterialSymbolsArrowDropDownIc3 } from './MaterialSymbolsArrowDropDownIc3.js';
import { MaterialSymbolsArrowDropDownIc4 } from './MaterialSymbolsArrowDropDownIc4.js';
import { MaterialSymbolsArrowDropDownIc5 } from './MaterialSymbolsArrowDropDownIc5.js';
import { MaterialSymbolsArrowDropDownIc6 } from './MaterialSymbolsArrowDropDownIc6.js';
import { MaterialSymbolsArrowDropDownIc } from './MaterialSymbolsArrowDropDownIc.js';
import { MaterialSymbolsCalendarMonthOu } from './MaterialSymbolsCalendarMonthOu.js';
import { MdiRegisterOutlineIcon } from './MdiRegisterOutlineIcon.js';
import { NextButton_StateDefault } from './NextButton_StateDefault/NextButton_StateDefault';
import { RegistPages_StateActive } from './RegistPages_StateActive/RegistPages_StateActive';
import { RegistPages_StateInactive } from './RegistPages_StateInactive/RegistPages_StateInactive';

interface Props {
  className?: string;
}
/* @figmaId 362:519 */
export const AddPatientPersonalDetails1: FC<Props> = memo(function AddPatientPersonalDetails1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle30}></div>
      <div className={classes.frame9}>
        <div className={classes.rectangle52}></div>
        <div className={classes.policyNumber}>Policy Number</div>
        <div className={classes.rectangle51}></div>
        <div className={classes.participantNumber}>Participant Number*</div>
        <div className={classes.rectangle50}></div>
        <div className={classes.nIKCardNumber}>NIK/Card Number*</div>
        <div className={classes.rectangle49}></div>
        <div className={classes.insuranceCarrier}>Insurance Carrier*</div>
        <div className={classes.materialSymbolsArrowDropDown}>
          <MaterialSymbolsArrowDropDownIc className={classes.icon} />
        </div>
        <div className={classes.insuranceDetails}>Insurance Details</div>
        <div className={classes.rectangle47}></div>
        <div className={classes.relationshipToPatient}>Relationship to Patient*</div>
        <div className={classes.materialSymbolsArrowDropDown2}>
          <MaterialSymbolsArrowDropDownIc2 className={classes.icon2} />
        </div>
        <div className={classes.rectangle46}></div>
        <div className={classes.emergencyContactNumber}>Emergency Contact Number*</div>
        <div className={classes.rectangle45}></div>
        <div className={classes.emergencyContactName}>Emergency Contact Name*</div>
        <div className={classes.emergencyDetails}>Emergency Details</div>
        <div className={classes.rectangle44}></div>
        <div className={classes.heightCm}>Height (cm)*</div>
        <div className={classes.rectangle43}></div>
        <div className={classes.weightKg}>Weight (kg)*</div>
        <div className={classes.rectangle41}></div>
        <div className={classes.address}>Address*</div>
        <div className={classes.rectangle40}></div>
        <div className={classes.city}>City*</div>
        <div className={classes.materialSymbolsArrowDropDown3}>
          <MaterialSymbolsArrowDropDownIc3 className={classes.icon3} />
        </div>
        <div className={classes.rectangle39}></div>
        <div className={classes.provinceState}>Province/State*</div>
        <div className={classes.materialSymbolsArrowDropDown4}>
          <MaterialSymbolsArrowDropDownIc4 className={classes.icon4} />
        </div>
        <div className={classes.rectangle38}></div>
        <div className={classes.country}>Country*</div>
        <div className={classes.materialSymbolsArrowDropDown5}>
          <MaterialSymbolsArrowDropDownIc5 className={classes.icon5} />
        </div>
        <div className={classes.rectangle37}></div>
        <div className={classes.contactNo}>Contact No.*</div>
        <div className={classes.materialSymbolsCalendarMonthOu}>
          <MaterialSymbolsCalendarMonthOu className={classes.icon6} />
        </div>
        <div className={classes.rectangle36}></div>
        <div className={classes.dateOfBirth}>Date of Birth*</div>
        <div className={classes.ddMmYyyy}>dd/mm/yyyy</div>
        <div className={classes.rectangle35}></div>
        <div className={classes.gender}>Gender*</div>
        <div className={classes.materialSymbolsArrowDropDown6}>
          <MaterialSymbolsArrowDropDownIc6 className={classes.icon7} />
        </div>
        <div className={classes.rectangle32}></div>
        <div className={classes.lastName}>Last Name*</div>
        <div className={classes.rectangle31}></div>
        <div className={classes.firstName}>First Name*</div>
        <div className={classes.personalDetails}>Personal Details</div>
        <NextButton_StateDefault className={classes.nextButton} />
      </div>
      <RegistPages_StateInactive
        className={classes.registPages}
        text={{
          a: <div className={classes.a}>C</div>,
          label: <div className={classes.label}>Assigned Devices</div>,
        }}
      />
      <RegistPages_StateInactive
        className={classes.registPages2}
        text={{
          a: <div className={classes.a2}>B</div>,
          label: <div className={classes.label2}>Medical History</div>,
        }}
      />
      <RegistPages_StateActive
        className={classes.registPages3}
        text={{
          label: <div className={classes.label3}>Personal Details</div>,
        }}
      />
      <div className={classes.patientRegistrationID9987}>Patient Registration (ID: #9987)</div>
      <div className={classes.mdiRegisterOutline}>
        <MdiRegisterOutlineIcon className={classes.icon8} />
      </div>
      <BackButton className={classes.backButton} />
      <div className={classes.sun9Apr2023208}>Sun, 9 Apr 2023 20:08</div>
    </div>
  );
});

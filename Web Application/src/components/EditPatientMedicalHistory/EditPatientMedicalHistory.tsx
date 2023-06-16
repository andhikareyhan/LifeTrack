import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BackButton } from './BackButton/BackButton';
import { BackButton_StateDefault } from './BackButton_StateDefault/BackButton_StateDefault';
import { Checkbox_StateActive } from './Checkbox_StateActive/Checkbox_StateActive';
import { Checkbox_StateDefault } from './Checkbox_StateDefault/Checkbox_StateDefault';
import classes from './EditPatientMedicalHistory.module.css';
import { MaterialSymbolsCalendarMonthOu } from './MaterialSymbolsCalendarMonthOu.js';
import { MaterialSymbolsEditOutlineIcon } from './MaterialSymbolsEditOutlineIcon.js';
import { NextButton_StateDefault } from './NextButton_StateDefault/NextButton_StateDefault';
import { RegistPages_StateActive } from './RegistPages_StateActive/RegistPages_StateActive';
import { RegistPages_StateInactive } from './RegistPages_StateInactive/RegistPages_StateInactive';

interface Props {
  className?: string;
}
/* @figmaId 676:2219 */
export const EditPatientMedicalHistory: FC<Props> = memo(function EditPatientMedicalHistory(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle30}></div>
      <div className={classes.frame9}>
        <div className={classes.rectangle41}></div>
        <div className={classes.allergies}>Allergies</div>
        <div className={classes.symptoms}>Symptoms*</div>
        <div className={classes.rectangle412}></div>
        <div className={classes.currentMedications}>Current Medications</div>
        <div className={classes.rectangle413}></div>
        <div className={classes.previousLabAndTestResultsIfAny}>Previous Lab and Test Results (if any)</div>
        <div className={classes.pCRTestForCOVID19Positive}>PCR Test for COVID-19 = positive </div>
        <div className={classes.rectangle42}></div>
        <div className={classes.rectangle43}></div>
        <div className={classes.rectangle45}></div>
        <div className={classes.rectangle48}></div>
        <div className={classes.rectangle51}></div>
        <div className={classes.year}>Year</div>
        <div className={classes.rectangle44}></div>
        <div className={classes.rectangle47}></div>
        <div className={classes.rectangle50}></div>
        <div className={classes.hospital}>Hospital</div>
        <div className={classes.rectangle414}></div>
        <div className={classes.rectangle46}></div>
        <div className={classes.rectangle49}></div>
        <div className={classes.pastSurgeries}>Past Surgeries</div>
        <div className={classes.materialSymbolsCalendarMonthOu}>
          <MaterialSymbolsCalendarMonthOu className={classes.icon} />
        </div>
        <div className={classes.rectangle36}></div>
        <div className={classes.dateOnsetFirstSymptoms}>Date Onset First Symptoms</div>
        <div className={classes._642023}>06/04/2023</div>
        <div className={classes.comorbiditiesRiskFactors}>Comorbidities &amp; Risk Factors</div>
        <div className={classes.ifFemalePatientIsShePregnant}>If female patient, is she pregnant?</div>
        <div className={classes.smokingAlcoholConsumption}>Smoking, alcohol consumption</div>
        <div className={classes.medicalRecords}>Medical Records</div>
        <NextButton_StateDefault className={classes.nextButton} />
        <BackButton_StateDefault className={classes.backButton} />
        <Checkbox_StateDefault
          className={classes.checkbox}
          text={{
            label: <div className={classes.label}>Coronary Artery Disease (CAD)</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox2}
          text={{
            label: <div className={classes.label2}>Dementia</div>,
          }}
        />
        <Checkbox_StateActive
          className={classes.checkbox3}
          text={{
            label: <div className={classes.label3}>Fever</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox4}
          text={{
            label: <div className={classes.label4}>Myalgia</div>,
          }}
        />
        <Checkbox_StateActive
          className={classes.checkbox5}
          text={{
            label: <div className={classes.label5}>Nausea</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox6}
          text={{
            label: <div className={classes.label6}>Abdominal Pain</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox7}
          text={{
            label: <div className={classes.label7}>Chronic Neurologic Condition</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox8}
          text={{
            label: <div className={classes.label8}>Chronic Liver Disease</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox9}
          text={{
            label: <div className={classes.label9}>Stroke</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox10}
          text={{
            label: <div className={classes.label10}>Hepatitis</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox11}
          text={{
            label: <div className={classes.label11}>Fatigue</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox12}
          text={{
            label: <div className={classes.label12}>Loss of appetite</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox13}
          text={{
            label: <div className={classes.label13}>Chest Pain</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox14}
          text={{
            label: <div className={classes.label14}>Others, specify:</div>,
          }}
        />
        <Checkbox_StateActive
          className={classes.checkbox15}
          text={{
            label: <div className={classes.label15}>Others, specify:</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox16}
          text={{
            label: <div className={classes.label16}>Malignancy/Chemotherapy</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox17}
          text={{
            label: (
              <div className={classes.label17}>
                <div className={classes.textBlock}>Chronic Obstructive </div>
                <div className={classes.textBlock2}>Pulmonary Disease (COPD)</div>
              </div>
            ),
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox18}
          text={{
            label: <div className={classes.label18}>Diabetes</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox19}
          text={{
            label: <div className={classes.label19}>Weakness</div>,
          }}
        />
        <Checkbox_StateActive
          className={classes.checkbox20}
          text={{
            label: <div className={classes.label20}>Sore throat</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox21}
          text={{
            label: <div className={classes.label21}>Joint Pain</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox22}
          text={{
            label: (
              <div className={classes.label22}>
                <div className={classes.textBlock3}>Chronic Heart Failure</div>
                <div className={classes.textBlock4}>(including congenital disease)</div>
              </div>
            ),
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox23}
          text={{
            label: <div className={classes.label23}>Respiratory Tract Infection</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox24}
          text={{
            label: <div className={classes.label24}>HIV</div>,
          }}
        />
        <Checkbox_StateActive
          className={classes.checkbox25}
          text={{
            label: <div className={classes.label25}>Vomiting</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox26}
          text={{
            label: <div className={classes.label26}>Headache</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox27}
          text={{
            label: <div className={classes.label27}>Cough</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox28}
          text={{
            label: <div className={classes.label28}>Chronic Kidney Disease</div>,
          }}
        />
        <Checkbox_StateDefault
          className={classes.checkbox29}
          text={{
            label: <div className={classes.label29}>Yes</div>,
          }}
        />
        <Checkbox_StateActive
          className={classes.checkbox30}
          text={{
            label: <div className={classes.label30}>No</div>,
          }}
        />
      </div>
      <RegistPages_StateInactive
        className={classes.registPages}
        text={{
          a: <div className={classes.a}>C</div>,
          label: <div className={classes.label31}>Assigned Devices</div>,
        }}
      />
      <RegistPages_StateActive
        className={classes.registPages2}
        text={{
          a: <div className={classes.a2}>B</div>,
          label: <div className={classes.label32}>Medical History</div>,
        }}
      />
      <RegistPages_StateInactive
        className={classes.registPages3}
        text={{
          label: <div className={classes.label33}>Personal Details</div>,
        }}
      />
      <BackButton className={classes.backButton2} />
      <div className={classes.sun9Apr2023208}>Sun, 9 Apr 2023 20:08</div>
      <div className={classes.patientDataID1034}>Patient Data (ID: #1034)</div>
      <div className={classes.materialSymbolsEditOutline}>
        <MaterialSymbolsEditOutlineIcon className={classes.icon2} />
      </div>
    </div>
  );
});

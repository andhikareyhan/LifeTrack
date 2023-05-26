# LifeTrack
A Bandung Institute of Technology (ITB) EE Final Project.  
Designed and implemented by Andhika Reyhan Soebroto, Nikolas, and David Azaria Rauf.  

WHAT IS LIFETRACK?  
LifeTrack is a healthcare product that functions as a patient monitor capable of continuously monitoring the vital signs of patients in the ICU of a hospital. The measurable vital signs provided by this product include the electrocardiogram (ECG) signal graph, heart rate, blood pressure, blood oxygen saturation, respiratory rate, and body temperature.

The readings from LifeTrack can be accessed by users (doctors and nurses) either remotely through a web application or directly onsite by observing the device's display screen. Additionally, LifeTrack can also provide alerts to users when abnormalities in the patient's condition are detected and enable the viewing of historical patient condition data.

With LifeTrack, users who are not present in the ICU of the hospital can easily observe and manage patients.

WHAT IS INCLUDED IN THIS REPOSITORY?  
- The design for the LifeTrack patient monitor system
- The various source codes for LifeTrack, which includes:  
    1] Algorithms for each sensors  
        o ECG using an ADS1298 from Texas Instrument  
        o NIBP (Non Invasive Blood Pressure) using an MPRLS0300YG00001b from Honeywell  
        o SpO2 (Oxygen Saturation) using a MAX30100 from Analog Devices  
        o Body Temperature using a DS18B20 from Dallas Semiconductor  
        o Respiratory Rate  
          
    2] Full-Stack JavaScript code for the Web Application using Vite and React  
      
    3] Queries and related source codes for the Cloud Server using InfluxDB Cloud

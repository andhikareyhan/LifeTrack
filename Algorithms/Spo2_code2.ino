#include <Wire.h>
#define I2CADDR 0x57

bool dataBaru = false;
uint8_t counter;
float  ACrmsIR, ACrmsRED, DCIR, DCRED, SpO2, R, num, denum;
int k=0;
float disc= 125.00;
float IRavg[125], REDavg[125], yi, yr;
float Averagei, Averager;
bool tanda[124];
int beat = 0;

void registerWrite(uint8_t regaddr, uint8_t regdata) {
  Wire.beginTransmission(I2CADDR);
  Wire.write(regaddr);
  Wire.write(regdata);
  Wire.endTransmission();
}

uint8_t registerRead(uint8_t regaddr) {
  Wire.beginTransmission(I2CADDR);
  Wire.write(regaddr);
  Wire.endTransmission(0);
  Wire.requestFrom(I2CADDR, 1);
  return Wire.read();
}

void dataRead(uint8_t *FIFOdata) {
  Wire.beginTransmission(I2CADDR);
  Wire.write(0x05);
  Wire.endTransmission(0);
  Wire.requestFrom(I2CADDR, 4);
  FIFOdata[0] = Wire.read();
  FIFOdata[1] = Wire.read();
  FIFOdata[2] = Wire.read();
  FIFOdata[3] = Wire.read();
}

void adaDataBaru() {
  dataBaru = true;
}

void setup() {
  Serial.begin(115200);
  Wire.begin();
  pinMode(2, INPUT);
  registerWrite(0x06, B01000000); // Reset
  registerWrite(0x01, B00010000); // SpO2 Data Ready Interrupt
  registerWrite(0x06, B00000011); // SpO2 mode
  registerWrite(0x07, B00000111); // 100 sps ADC, 1600 us pulse width
  //registerWrite(0x09, B01110111); // 24.0 mA RED, 24.0 mA IR
  //registerWrite(0x09, B00100010); // 24.0 mA RED, 24.0 mA IR
  registerWrite(0x09, B10011011); // 30.6 mA RED, 37.0 mA IR
  //registerWrite(0x09, B10111011); // 33.8 mA RED, 33.8 mA IR
  attachInterrupt(digitalPinToInterrupt(2), adaDataBaru, FALLING );
  registerRead(0x00);
  counter = 0;
}
   
void loop() {
  uint8_t data[4];
  uint16_t ir, red;
  int MeasurementsToAverage = 4;
  
  if (dataBaru) {
    dataBaru = false;
    dataRead(data);
    ir   = (data[0] << 8) | data[1];
    red  = (data[2] << 8) | data[3];
    //Serial.print(ir); Serial.print('\t'); Serial.println(red);  
    
    Averagei = Averagei + ir;
    Averager = Averager + red;

    if (counter==(MeasurementsToAverage-1)){
      yi = Averagei/MeasurementsToAverage;
      yr = Averager/MeasurementsToAverage;
      //Serial.print(yi); Serial.print('\t'); Serial.println(yr);
      if (k<125) {
         IRavg[k]   = yi;
         REDavg[k]  = yr;
         //Serial.println(IRavg[k]);
         ++k;
      }
      if (k==125){
        for(int a = 0; a < 124; ++a){
          if((IRavg[a+1] - IRavg[a])>= 0){
            tanda[a] = true; 
          }
          else {
            tanda[a] = false;
          }  
        }
        
        for(int b = 0; b < 123; ++b){
          if(tanda[b+1] != tanda[b]){
            beat = beat + 1;
          }
        }
         
        if(beat%4 == 1){
          beat = beat - 1;
          Serial.print("Heart rate: ");
          Serial.print(beat*3);
          Serial.print(" bpm\n");
          }
        else if (beat%4 == 2){
          beat = beat - 2;
          Serial.print("Heart rate: ");
          Serial.print(beat*3);
          Serial.print(" bpm\n");
          }
        else if (beat%4 == 3){
          beat = beat - 3;          
          Serial.print("Heart rate: ");
          Serial.print(beat*3);
          Serial.print(" bpm\n");
          }
        else{
          Serial.print("Heart rate: ");
          Serial.print(beat*3);
          Serial.print(" bpm\n");
          }
        
        for (int j=0; j<125; ++j){
          ACrmsIR = ACrmsIR + pow(IRavg[j],2);
          ACrmsRED = ACrmsIR + pow(REDavg[j], 2);
          DCIR = DCIR + IRavg[j];
          DCRED = DCRED + REDavg[j];
          //Serial.println(DCIR);
        }
        ACrmsIR = sqrt(ACrmsIR/(disc));
        ACrmsRED = sqrt(ACrmsRED/(disc));
        DCIR = DCIR / (disc);
        DCRED = DCRED/(disc);
        num = ACrmsRED/DCRED;
        denum = ACrmsIR/DCIR;
        //Serial.print(num); Serial.print('\t'); Serial.println(denum);
        R = num / denum;
        //Serial.println(R,6);
        SpO2 = 110 - (25 * R);
        Serial.print("SpO2 ");Serial.print(SpO2,2); Serial.println(" %");
        //Serial.println(DCIR);
        //delay(3000);
        k=0;
        beat = 0;
        ACrmsIR =0;
        ACrmsRED =0;
        DCIR =0;
        DCRED =0;
        }
      counter   = 0;
      Averagei  = 0;
      Averager  = 0; 
      }
    
    else {
      counter++;
      
    }
    //Serial.println(counter);
  }
}

import influxdb_client, os, time
from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS

token = "4RfeIfR6gQSBp-cRX6Aj4mabJjZao4VOnk-3EefuXVq5bLjIsKRV99LcOG6SJd7ZBeUG4A_yQ0XR9BAQADcMKQ=="
org = "andhikareyhan@gmail.com"
url = "https://ap-southeast-2-1.aws.cloud2.influxdata.com"

write_client = influxdb_client.InfluxDBClient(url=url, token=token, org=org)

bucket="LifeTrack"

# Define the write api
write_api = write_client.write_api(write_options=SYNCHRONOUS)

# ECG Data
ecg_data = {
    "patient_name": "Nikolas",
    "patient_id": "9041",
    "room": "ICU A",
    "status": "Stable",
    "heart_rate": 70,
}

for key in ecg_data:
    point = (
        Point("heart_rate")
        .tag("patient_name", ecg_data[key]["patient_name"])
        .tag("patient_id", ecg_data[key]["patient_id"])
        .tag("room", ecg_data[key]["room"])
        .tag("status", ecg_data[key]["status"])
        .field(ecg_data[key]["heart_rate"])
    )
    write_api.write(bucket=bucket, org=org, record=point)

# Blood Pressure Data
nibp_data = {
    "patient_name": "Nikolas",
    "patient_id": "9041",
    "room": "ICU A",
    "status": "Stable",
    "systolic": 120,
    "diastolic": 80,
}

for key in nibp_data:
    point = (
        Point("blood_pressure")
        .tag("patient_name", nibp_data[key]["patient_name"])
        .tag("patient_id", nibp_data[key]["patient_id"])
        .tag("room", nibp_data[key]["room"])
        .tag("status", nibp_data[key]["status"])
        .field(nibp_data[key]["systolic"], nibp_data[key]["diastolic"])
    )
    write_api.write(bucket=bucket, org=org, record=point)

# SpO2 Data
spo2_data = {
    "patient_name": "Nikolas",
    "patient_id": "9041",
    "room": "ICU A",
    "status": "Stable",
    "level": 98,
}

for key in spo2_data:
    point = (
        Point("oxygen_level")
        .tag("patient_name", spo2_data[key]["patient_name"])
        .tag("patient_id", spo2_data[key]["patient_id"])
        .tag("room", spo2_data[key]["room"])
        .tag("status", spo2_data[key]["status"])
        .field(spo2_data[key]["level"])
    )
    write_api.write(bucket=bucket, org=org, record=point)

# Temperature Data
temp_data = {
    "patient_name": "Nikolas",
    "patient_id": "9041",
    "room": "ICU A",
    "status": "Stable",
    "temperature": 36.7,
}

for key in temp_data:
    point = (
        Point("body_temp")
        .tag("patient_name", temp_data[key]["patient_name"])
        .tag("patient_id", temp_data[key]["patient_id"])
        .tag("room", temp_data[key]["room"])
        .tag("status", temp_data[key]["status"])
        .field(temp_data[key]["temperature"])
    )
    write_api.write(bucket=bucket, org=org, record=point)


# Function to send data to InfluxDB
def send_data(measurement, tags, fields):
	# Create a Point object
	point = Point(measurement).tag(tags).field(fields).time(time.time())
	
	# Write point
	write_api.write(bucket=bucket, org=org, record=point)

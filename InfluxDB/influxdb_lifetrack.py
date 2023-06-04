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

# Function to send data to InfluxDB
def send_data(measurement, tags, fields):
	# Create a Point object
	point = Point(measurement).tag(tags).field(fields).time(time.time())
	
	# Write point
	write_api.write(bucket=bucket, org=org, record=point)

data = {
  "point1": {
    "location": "Klamath",
    "species": "bees",
    "count": 23,
  },
}

for key in data:
  point = (
    Point("census")
    .tag("location", data[key]["location"])
    .field(data[key]["species"], data[key]["count"])
  )

   time.sleep(1) # separate points by 1 second

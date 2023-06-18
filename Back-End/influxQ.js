import { InfluxDB, Point } from "@influxdata/influxdb-client";

export const queryApi = new InfluxDB({
  url: "https://ap-southeast-2-1.aws.cloud2.influxdata.com",
  token:
    "4RfeIfR6gQSBp-cRX6Aj4mabJjZao4VOnk-3EefuXVq5bLjIsKRV99LcOG6SJd7ZBeUG4A_yQ0XR9BAQADcMKQ==",
}).getQueryApi("b93149329628c62e");

//"https://ap-southeast-2-1.aws.cloud2.influxdata.com", "4RfeIfR6gQSBp-cRX6Aj4mabJjZao4VOnk-3EefuXVq5bLjIsKRV99LcOG6SJd7ZBeUG4A_yQ0XR9BAQADcMKQ=="
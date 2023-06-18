import { consoleLogger } from "@influxdata/influxdb-client";
import { queryApi } from "../influxQ.js";

export const patientMonitor = async (request, response) => {
  const { patient_name, patient_id } = request.body;
  console.log(patient_name);
  console.log(patient_id);
  try {
    const fluxQuery = `from(bucket: "dataBin")
        |> range(start: 0)
        |> filter(fn: (r) => r._measurement == "dataBinSense" and r._field == "kepenuhanSampah" and r.TPSS == "${noTPSS}" and r.TPS == "${noTPS}")
        |> last()`;

    const res = [];

    const observer = {
      next(record) {
        res.push(record[5]);
      },
      error(error) {
        console.error(error);
        console.log("\nFinished ERROR");
        response.send(res).status(200);
      },
      complete() {
        console.log("\nFinished SUCCESS");
        response.send(res).status(200);
      },
    };

    queryApi.queryRows(fluxQuery, observer);
  } catch (e) {
    console.log(e);
  }
};

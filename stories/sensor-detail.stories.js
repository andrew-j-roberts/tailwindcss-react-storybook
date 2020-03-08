import React from "react";

export default {
  title: "SensorDetailPage",
  component: SensorDetailPage
};

export const SensorDetailPage = () => (
  <div className="grid grid-cols-2">
    <div className="grid grid-cols-6">
      <div className="col-start-2 col-end-6">
        <h2 className="text-2xl">Time-of-flight Sensor ID: </h2>
        <h2 className="text-2xl">Current reading:</h2>
        <div className="flex items-center justify-center">
          <div
            className={
              "flex font-mono text-black text-6xl border-black border-4 p-4 rounded-lg"
            }
          >
            <div className="mr-2 ">80</div>
            <div className="mr-2 font-bold">cm</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

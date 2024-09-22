import { ChartConfiguration } from "chart.js";

export const installation: ChartConfiguration = {
  type: "bar",
  data: {
    labels: [
      "Red",
      "Blue",
      "Yellow",
      "Green",
      "Purple",
      "Orange",
      "xxx",
      "yyy",
      "zzz",
      "qqq",
    ],
    datasets: [
      {
        label: "Ratio of install vs ratings",
        data: [12, 19, 3, 5, 2, 3, 1, 1, 1, 3],
        borderWidth: 1,
      },
    ],
  },
};

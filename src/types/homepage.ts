export namespace HomePageTypes {
  export enum States {
    "NSW" = "NSW",
    "QLD" = "QLD",
    "WA" = "WA",
    "VIC" = "VIC",
    "TAS" = "TAS",
    "SA" = "SA",
    "NT" = "NT",
    "ACT" = "ACT",
  }

  export interface stateInfoResponse {
    duration_hours: number;
    devices: number;
    state: "NSW" | "QLD" | "WA" | "VIC" | "TAS" | "SA" | "NT" | "ACT";
  }

  export interface Category {
    duration_hours: number;
    category_name: string;
    installations: number;
  }

  export interface Contribution {
    contribution: number;
    developer: string;
  }

  export interface Installation {
    num_downloads: number;
    activity_id: string;
    app_name: string;
    rating: number;
  }
}

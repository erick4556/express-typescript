import { Weather, Visibility } from "./enums";

// export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
// export type Visibility = "great" | "good" | "poor" | "bad" | "terrible";

//Interface es más un contrato que deberia tener un objeto
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

/* export type NonSensitiveInfoDiaryEntry = Pick<
  DiaryEntry,
  "id" | "date" | "weather" | "visibility"
>; //Sacar los campos que me interesan */

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">; //Omite el campo comment

export type NewDiaryEntry = Omit<DiaryEntry, "id">; //Omite el campo id

//Heredando de una interface
/* interface SpecialDiaryEntry extends DiaryEntry {
  flightNumber: number;
} */

//Type mas fijo y interface más para extender

import { NewDiaryEntry } from "../types";
import { Weather, Visibility } from "../enums";

const isString = (text: any): boolean => {
  return typeof text === "string" || text instanceof String;
};

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error("Incorrect or missing comment");
  }

  return commentFromRequest;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }

  return dateFromRequest;
};

const isWeather = (string: any): boolean => {
  return Object.values(Weather).includes(string);
};

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error("Incorrect or missing weather");
  }

  return weatherFromRequest;
};

const isVisibility = (params: any): boolean => {
  return Object.values(Visibility).includes(params);
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error("Incorrect or missing visibility");
  }

  return visibilityFromRequest;
};

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };

  return newEntry;
};

export default toNewDiaryEntry;

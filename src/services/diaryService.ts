import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveInfoDiaryEntry,
} from "../types";
import dairyData from "./diaries.json";

const diaries: Array<DiaryEntry> = dairyData as Array<DiaryEntry>; //as Array<DiaryEntry> obligarle a typescript que la constante tiene que funcionar de una forma

const getEntries = (): DiaryEntry[] => diaries;

const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id);
  if (entry) {
    const { comment, ...restOfDiary } = entry; //Quito el comment
    return restOfDiary;
  }
  return entry;
};

const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: diaries.length + 1,
    ...newDiaryEntry,
  };

  diaries.push(newDiary);
  return newDiary;
};

export default {
  getEntries,
  getEntriesWithoutSensitiveInfo,
  addDiary,
  findById,
};

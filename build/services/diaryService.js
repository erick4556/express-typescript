"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default; //as Array<DiaryEntry> obligarle a typescript que la constante tiene que funcionar de una forma
const getEntries = () => diaries;
const findById = (id) => {
    const entry = diaries.find((diary) => diary.id === id);
    if (entry) {
        const { comment } = entry, restOfDiary = __rest(entry, ["comment"]); //Quito el comment
        return restOfDiary;
    }
    return entry;
};
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
};
const addDiary = (newDiaryEntry) => {
    const newDiary = Object.assign({ id: diaries.length + 1 }, newDiaryEntry);
    diaries.push(newDiary);
    return newDiary;
};
exports.default = {
    getEntries,
    getEntriesWithoutSensitiveInfo,
    addDiary,
    findById,
};

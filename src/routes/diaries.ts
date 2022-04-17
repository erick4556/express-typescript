import express from "express";
import diaryService from "../services/diaryService";
import toNewDiaryEntry from "../utils/utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));
  res.send(diary);
});

router.post("/", (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry = diaryService.addDiary(newDiaryEntry);

    res.json(addedDiaryEntry);
  } catch (e) {
    console.log(e)
    res.status(400).send(e);
  }
});

export default router;

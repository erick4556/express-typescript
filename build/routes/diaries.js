"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryService_1 = __importDefault(require("../services/diaryService"));
const utils_1 = __importDefault(require("../utils/utils"));
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.send(diaryService_1.default.getEntriesWithoutSensitiveInfo());
});
router.get("/:id", (req, res) => {
    const diary = diaryService_1.default.findById(Number(req.params.id));
    res.send(diary);
});
router.post("/", (req, res) => {
    try {
        const newDiaryEntry = (0, utils_1.default)(req.body);
        const addedDiaryEntry = diaryService_1.default.addDiary(newDiaryEntry);
        res.json(addedDiaryEntry);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.default = router;

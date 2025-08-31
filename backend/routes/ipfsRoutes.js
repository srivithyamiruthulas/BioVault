import express from "express";
import { storeFingerprint, getFingerprint } from "../controllers/ipfsController.js";

const router = express.Router();

router.post("/store", storeFingerprint);
router.get("/:userId", getFingerprint);

export default router;

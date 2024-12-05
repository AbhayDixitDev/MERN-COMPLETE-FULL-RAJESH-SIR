import express from "express";
const router = express.Router();
import { studentAbout,studentContact,studentHome,studentService } from "../controller/studentController.js";

router.get("/home",studentHome);

router.get("/about",studentAbout);
router.get("/contact",studentContact);
router.get("/service",studentService);

export default router;
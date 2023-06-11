// routes.ts
import express from "express";
import {
  getRaces,
  getDrivers,
  getTeams,
  getDriverDetail,
  getTeamDetail,
  saveRaceResult,
} from "../controllers";

const router = express.Router();

router.get("/races", getRaces);
router.post("/save-race-result", saveRaceResult);
router.get("/drivers", getDrivers);
router.get("/drivers/:id/:name", getDriverDetail);
router.get("/teams", getTeams);
router.get("/teams/:id", getTeamDetail);
router.get("/", (req, res) =>
  res.status(200).send({
    message: "Welcome to the crawling race result APIs!",
  })
);

export default router;

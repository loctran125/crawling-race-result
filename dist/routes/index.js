"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers");
var router = express_1.default.Router();
router.get("/races", controllers_1.getRaces);
router.post("/save-race-result", controllers_1.saveRaceResult);
router.get("/drivers", controllers_1.getDrivers);
router.get("/drivers/:id/:name", controllers_1.getDriverDetail);
router.get("/teams", controllers_1.getTeams);
router.get("/teams/:id", controllers_1.getTeamDetail);
router.get("/", function (req, res) {
    return res.status(200).send({
        message: "Welcome to the crawling race result APIs!",
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map
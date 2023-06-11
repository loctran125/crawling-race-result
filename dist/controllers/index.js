"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamDetail = exports.getDriverDetail = exports.getTeams = exports.getDrivers = exports.saveRaceResult = exports.getRaces = void 0;
var services_1 = require("../services");
var hostName = "https://www.formula1.com";
var getRaces = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var year, _a, yearFilter, driver, team, grand_prix, resource, url, data, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                year = new Date().getFullYear().toString();
                _a = req.query, yearFilter = _a.year, driver = _a.driver, team = _a.team, grand_prix = _a.grand_prix;
                if (yearFilter) {
                    year = yearFilter;
                }
                resource = "/en/results.html/".concat(year, "/races.html");
                url = "".concat(hostName).concat(resource);
                return [4 /*yield*/, (0, services_1.getDataFromHTML)(url, { driver: driver, team: team, grand_prix: grand_prix })];
            case 1:
                data = _b.sent();
                res.send(data);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getRaces = getRaces;
var saveRaceResult = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var year, yearFilter, resource, url, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                year = new Date().getFullYear().toString();
                yearFilter = req.query.year;
                if (yearFilter) {
                    year = yearFilter;
                }
                resource = "/en/results.html/".concat(year, "/races.html");
                url = "".concat(hostName).concat(resource);
                return [4 /*yield*/, (0, services_1.getDataFromHTML)(url)];
            case 1:
                data = _a.sent();
                (0, services_1.saveRaceResultService)(data.data, year);
                res.sendStatus(202); //accepted
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.saveRaceResult = saveRaceResult;
var getDrivers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var year, resource, url, data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                year = new Date().getFullYear().toString();
                resource = "/en/results.html/".concat(year, "/drivers.html");
                url = "".concat(hostName).concat(resource);
                return [4 /*yield*/, (0, services_1.getDataFromHTML)(url)];
            case 1:
                data = _a.sent();
                res.send(data);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getDrivers = getDrivers;
var getTeams = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var year, resource, url, data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                year = new Date().getFullYear().toString();
                resource = "/en/results.html/".concat(year, "/team.html");
                url = "".concat(hostName).concat(resource);
                return [4 /*yield*/, (0, services_1.getDataFromHTML)(url)];
            case 1:
                data = _a.sent();
                res.send(data);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getTeams = getTeams;
var getDriverDetail = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, name_1, yearFilter, year, resource, url, data, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.params, id = _a.id, name_1 = _a.name;
                yearFilter = req.query.year;
                year = new Date().getFullYear().toString();
                if (yearFilter) {
                    year = yearFilter;
                }
                resource = "/en/results.html/".concat(year, "/drivers");
                if (id && name_1) {
                    resource = "/en/results.html/".concat(year, "/drivers/").concat(id, "/").concat(name_1);
                }
                url = "".concat(hostName).concat(resource, ".html");
                return [4 /*yield*/, (0, services_1.getDataFromHTML)(url)];
            case 1:
                data = _b.sent();
                res.send(data);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _b.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getDriverDetail = getDriverDetail;
var getTeamDetail = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, yearFilter, year, resource, url, data, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                yearFilter = req.query.year;
                year = new Date().getFullYear().toString();
                if (yearFilter) {
                    year = yearFilter;
                }
                resource = "/en/results.html/".concat(year, "/team");
                if (id) {
                    resource = "/en/results.html/".concat(year, "/team/").concat(id);
                }
                url = "".concat(hostName).concat(resource, ".html");
                return [4 /*yield*/, (0, services_1.getDataFromHTML)(url)];
            case 1:
                data = _a.sent();
                res.send(data);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                next(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getTeamDetail = getTeamDetail;
//# sourceMappingURL=index.js.map
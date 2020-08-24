(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-data-store.js":
/*!************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/boards/boards-data-store.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
        while (_) try {
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsDataStore = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var objects_1 = __webpack_require__(/*! @theia/core/lib/common/objects */ "./node_modules/@theia/core/lib/common/objects.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var utils_1 = __webpack_require__(/*! ../../common/utils */ "./node_modules/arduino-ide-extension/lib/common/utils.js");
var boards_service_client_impl_1 = __webpack_require__(/*! ./boards-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-service-client-impl.js");
var protocol_1 = __webpack_require__(/*! ../../common/protocol */ "./node_modules/arduino-ide-extension/lib/common/protocol/index.js");
var BoardsDataStore = /** @class */ (function () {
    function BoardsDataStore() {
        this.onChangedEmitter = new event_1.Emitter();
    }
    BoardsDataStore_1 = BoardsDataStore;
    BoardsDataStore.prototype.onStart = function () {
        var _this = this;
        this.boardsServiceClient.onBoardsPackageInstalled(function (_a) {
            var pkg = _a.pkg;
            return __awaiter(_this, void 0, void 0, function () {
                var version, shouldFireChanged, _b, _c, fqbn, key, data, details, e_1_1;
                var e_1, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            version = pkg.installedVersion;
                            if (!version) {
                                return [2 /*return*/];
                            }
                            shouldFireChanged = false;
                            _e.label = 1;
                        case 1:
                            _e.trys.push([1, 8, 9, 10]);
                            _b = __values(pkg.boards.map(function (_a) {
                                var fqbn = _a.fqbn;
                                return fqbn;
                            }).filter(utils_1.notEmpty).filter(function (fqbn) { return !!fqbn; })), _c = _b.next();
                            _e.label = 2;
                        case 2:
                            if (!!_c.done) return [3 /*break*/, 7];
                            fqbn = _c.value;
                            key = this.getStorageKey(fqbn, version);
                            return [4 /*yield*/, this.storageService.getData(key)];
                        case 3:
                            data = _e.sent();
                            if (!(!data || !data.length)) return [3 /*break*/, 6];
                            return [4 /*yield*/, this.getBoardDetailsSafe(fqbn)];
                        case 4:
                            details = _e.sent();
                            if (!details) return [3 /*break*/, 6];
                            data = details.configOptions;
                            if (!data.length) return [3 /*break*/, 6];
                            return [4 /*yield*/, this.storageService.setData(key, data)];
                        case 5:
                            _e.sent();
                            shouldFireChanged = true;
                            _e.label = 6;
                        case 6:
                            _c = _b.next();
                            return [3 /*break*/, 2];
                        case 7: return [3 /*break*/, 10];
                        case 8:
                            e_1_1 = _e.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 10];
                        case 9:
                            try {
                                if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                            return [7 /*endfinally*/];
                        case 10:
                            if (shouldFireChanged) {
                                this.fireChanged();
                            }
                            return [2 /*return*/];
                    }
                });
            });
        });
    };
    Object.defineProperty(BoardsDataStore.prototype, "onChanged", {
        get: function () {
            return this.onChangedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    BoardsDataStore.prototype.appendConfigToFqbn = function (fqbn, boardsPackageVersion) {
        if (boardsPackageVersion === void 0) { boardsPackageVersion = this.getBoardsPackageVersion(fqbn); }
        return __awaiter(this, void 0, void 0, function () {
            var configOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getData(fqbn, boardsPackageVersion)];
                    case 1:
                        configOptions = (_a.sent()).configOptions;
                        return [2 /*return*/, protocol_1.ConfigOption.decorate(fqbn, configOptions)];
                }
            });
        });
    };
    BoardsDataStore.prototype.getData = function (fqbn, boardsPackageVersion) {
        if (boardsPackageVersion === void 0) { boardsPackageVersion = this.getBoardsPackageVersion(fqbn); }
        return __awaiter(this, void 0, void 0, function () {
            var version, key, data, boardDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, boardsPackageVersion];
                    case 1:
                        version = _a.sent();
                        if (!version) {
                            return [2 /*return*/, BoardsDataStore_1.Data.EMPTY];
                        }
                        key = this.getStorageKey(fqbn, version);
                        return [4 /*yield*/, this.storageService.getData(key, undefined)];
                    case 2:
                        data = _a.sent();
                        if (data) {
                            if (data.programmers !== undefined) { // to be backward compatible. We did not save the `programmers` into the `localStorage`.
                                return [2 /*return*/, data];
                            }
                        }
                        return [4 /*yield*/, this.getBoardDetailsSafe(fqbn)];
                    case 3:
                        boardDetails = _a.sent();
                        if (!boardDetails) {
                            return [2 /*return*/, BoardsDataStore_1.Data.EMPTY];
                        }
                        data = { configOptions: boardDetails.configOptions, programmers: boardDetails.programmers };
                        return [4 /*yield*/, this.storageService.setData(key, data)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    BoardsDataStore.prototype.selectProgrammer = function (_a, boardsPackageVersion) {
        var fqbn = _a.fqbn, selectedProgrammer = _a.selectedProgrammer;
        if (boardsPackageVersion === void 0) { boardsPackageVersion = this.getBoardsPackageVersion(fqbn); }
        return __awaiter(this, void 0, void 0, function () {
            var data, _b, programmers, version;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = objects_1.deepClone;
                        return [4 /*yield*/, this.getData(fqbn, boardsPackageVersion)];
                    case 1:
                        data = _b.apply(void 0, [_c.sent()]);
                        programmers = data.programmers;
                        if (!programmers.find(function (p) { return protocol_1.Programmer.equals(selectedProgrammer, p); })) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, boardsPackageVersion];
                    case 2:
                        version = _c.sent();
                        if (!version) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.setData({ fqbn: fqbn, data: __assign(__assign({}, data), { selectedProgrammer: selectedProgrammer }), version: version })];
                    case 3:
                        _c.sent();
                        this.fireChanged();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    BoardsDataStore.prototype.selectConfigOption = function (_a, boardsPackageVersion) {
        var fqbn = _a.fqbn, option = _a.option, selectedValue = _a.selectedValue;
        if (boardsPackageVersion === void 0) { boardsPackageVersion = this.getBoardsPackageVersion(fqbn); }
        return __awaiter(this, void 0, void 0, function () {
            var data, _b, configOptions, configOption, updated, _c, _d, value, version;
            var e_2, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _b = objects_1.deepClone;
                        return [4 /*yield*/, this.getData(fqbn, boardsPackageVersion)];
                    case 1:
                        data = _b.apply(void 0, [_f.sent()]);
                        configOptions = data.configOptions;
                        configOption = configOptions.find(function (c) { return c.option === option; });
                        if (!configOption) {
                            return [2 /*return*/, false];
                        }
                        updated = false;
                        try {
                            for (_c = __values(configOption.values), _d = _c.next(); !_d.done; _d = _c.next()) {
                                value = _d.value;
                                if (value.value === selectedValue) {
                                    value.selected = true;
                                    updated = true;
                                }
                                else {
                                    value.selected = false;
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        if (!updated) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, boardsPackageVersion];
                    case 2:
                        version = _f.sent();
                        if (!version) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.setData({ fqbn: fqbn, data: data, version: version })];
                    case 3:
                        _f.sent();
                        this.fireChanged();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    BoardsDataStore.prototype.setData = function (_a) {
        var fqbn = _a.fqbn, data = _a.data, version = _a.version;
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_b) {
                key = this.getStorageKey(fqbn, version);
                return [2 /*return*/, this.storageService.setData(key, data)];
            });
        });
    };
    BoardsDataStore.prototype.getStorageKey = function (fqbn, version) {
        return ".arduinoProIDE-configOptions-" + version + "-" + fqbn;
    };
    BoardsDataStore.prototype.getBoardDetailsSafe = function (fqbn) {
        return __awaiter(this, void 0, void 0, function () {
            var details;
            return __generator(this, function (_a) {
                try {
                    details = this.boardsService.getBoardDetails({ fqbn: fqbn });
                    return [2 /*return*/, details];
                }
                catch (err) {
                    if (err instanceof Error && err.message.includes('loading board data') && err.message.includes('is not installed')) {
                        this.logger.warn("The boards package is not installed for board with FQBN: " + fqbn);
                    }
                    else {
                        this.logger.error("An unexpected error occurred while retrieving the board details for " + fqbn + ".", err);
                    }
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/];
            });
        });
    };
    BoardsDataStore.prototype.fireChanged = function () {
        this.onChangedEmitter.fire();
    };
    BoardsDataStore.prototype.getBoardsPackageVersion = function (fqbn) {
        return __awaiter(this, void 0, void 0, function () {
            var boardsPackage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!fqbn) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, this.boardsService.getContainerBoardPackage({ fqbn: fqbn })];
                    case 1:
                        boardsPackage = _a.sent();
                        if (!boardsPackage) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, boardsPackage.installedVersion];
                }
            });
        });
    };
    var BoardsDataStore_1;
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        inversify_1.named('store'),
        __metadata("design:type", Object)
    ], BoardsDataStore.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(protocol_1.BoardsService),
        __metadata("design:type", Object)
    ], BoardsDataStore.prototype, "boardsService", void 0);
    __decorate([
        inversify_1.inject(boards_service_client_impl_1.BoardsServiceClientImpl),
        __metadata("design:type", boards_service_client_impl_1.BoardsServiceClientImpl)
    ], BoardsDataStore.prototype, "boardsServiceClient", void 0);
    __decorate([
        inversify_1.inject(browser_1.LocalStorageService),
        __metadata("design:type", browser_1.LocalStorageService)
    ], BoardsDataStore.prototype, "storageService", void 0);
    BoardsDataStore = BoardsDataStore_1 = __decorate([
        inversify_1.injectable()
    ], BoardsDataStore);
    return BoardsDataStore;
}());
exports.BoardsDataStore = BoardsDataStore;
(function (BoardsDataStore) {
    var Data;
    (function (Data) {
        Data.EMPTY = {
            configOptions: [],
            programmers: []
        };
    })(Data = BoardsDataStore.Data || (BoardsDataStore.Data = {}));
})(BoardsDataStore = exports.BoardsDataStore || (exports.BoardsDataStore = {}));
exports.BoardsDataStore = BoardsDataStore;


/***/ })

}]);
//# sourceMappingURL=55.bundle.js.map
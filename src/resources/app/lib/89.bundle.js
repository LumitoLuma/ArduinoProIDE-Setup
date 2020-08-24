(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/arduino-ide-extension/lib/browser/boards/quick-open/boards-quick-open-module.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/boards/quick-open/boards-quick-open-module.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var quick_open_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open */ "./node_modules/@theia/core/lib/browser/quick-open/index.js");
var keybinding_1 = __webpack_require__(/*! @theia/core/lib/browser/keybinding */ "./node_modules/@theia/core/lib/browser/keybinding.js");
var boards_quick_open_service_1 = __webpack_require__(/*! ./boards-quick-open-service */ "./node_modules/arduino-ide-extension/lib/browser/boards/quick-open/boards-quick-open-service.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(boards_quick_open_service_1.BoardsQuickOpenService).toSelf().inSingletonScope();
    bind(command_1.CommandContribution).toService(boards_quick_open_service_1.BoardsQuickOpenService);
    bind(keybinding_1.KeybindingContribution).toService(boards_quick_open_service_1.BoardsQuickOpenService);
    bind(quick_open_1.QuickOpenContribution).toService(boards_quick_open_service_1.BoardsQuickOpenService);
    bind(logger_1.ILogger).toDynamicValue(function (_a) {
        var container = _a.container;
        return container.get(logger_1.ILogger).child('boards-quick-open');
    })
        .inSingletonScope()
        .whenTargetNamed('boards-quick-open');
});


/***/ }),

/***/ "./node_modules/arduino-ide-extension/lib/browser/boards/quick-open/boards-quick-open-service.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/arduino-ide-extension/lib/browser/boards/quick-open/boards-quick-open-service.js ***!
  \*******************************************************************************************************/
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsQuickOpenService = void 0;
var fuzzy = __webpack_require__(/*! fuzzy */ "./node_modules/fuzzy/lib/fuzzy.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var quick_open_model_1 = __webpack_require__(/*! @theia/core/lib/common/quick-open-model */ "./node_modules/@theia/core/lib/common/quick-open-model.js");
var quick_open_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open */ "./node_modules/@theia/core/lib/browser/quick-open/index.js");
var utils_1 = __webpack_require__(/*! ../../../common/utils */ "./node_modules/arduino-ide-extension/lib/common/utils.js");
var protocol_1 = __webpack_require__(/*! ../../../common/protocol */ "./node_modules/arduino-ide-extension/lib/common/protocol/index.js");
var core_service_client_impl_1 = __webpack_require__(/*! ../../core-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/core-service-client-impl.js");
var boards_data_store_1 = __webpack_require__(/*! ../boards-data-store */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-data-store.js");
var boards_service_client_impl_1 = __webpack_require__(/*! ../boards-service-client-impl */ "./node_modules/arduino-ide-extension/lib/browser/boards/boards-service-client-impl.js");
var BoardsQuickOpenService = /** @class */ (function () {
    function BoardsQuickOpenService() {
        this.id = 'arduino-boards-quick-open';
        this.prefix = '|';
        this.description = 'Configure Available Boards';
        this.isOpen = false;
        this.currentQuery = '';
        // Attached boards plus the user's config.
        this.availableBoards = [];
        // Only for the `selected` one from the `availableBoards`. Note: the `port` of the `selected` is optional.
        this.data = boards_data_store_1.BoardsDataStore.Data.EMPTY;
        this.allBoards = [];
    }
    // `init` name is used by the `QuickOpenHandler`.
    BoardsQuickOpenService.prototype.postConstruct = function () {
        var _this = this;
        this.coreServiceClient.onIndexUpdated(function () { return _this.update(_this.availableBoards); });
        this.boardsServiceClient.onAvailableBoardsChanged(function (availableBoards) { return _this.update(availableBoards); });
        this.update(this.boardsServiceClient.availableBoards);
    };
    BoardsQuickOpenService.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(this, { execute: function () { return _this.open(); } });
    };
    BoardsQuickOpenService.prototype.registerKeybindings = function (registry) {
        registry.registerKeybinding({ command: this.id, keybinding: 'ctrlCmd+k ctrlCmd+b' });
    };
    BoardsQuickOpenService.prototype.registerQuickOpenHandlers = function (registry) {
        registry.registerHandler(this);
    };
    BoardsQuickOpenService.prototype.getModel = function () {
        return this;
    };
    BoardsQuickOpenService.prototype.getOptions = function () {
        var _this = this;
        var placeholder = '';
        if (!this.selectedBoard) {
            placeholder += 'No board selected.';
        }
        placeholder += 'Type to filter boards';
        if (this.data.configOptions.length) {
            placeholder += ' or use the ↓↑ keys to adjust the board settings...';
        }
        else {
            placeholder += '...';
        }
        return {
            placeholder: placeholder,
            fuzzyMatchLabel: true,
            onClose: function () { return _this.isOpen = false; }
        };
    };
    BoardsQuickOpenService.prototype.open = function () {
        this.isOpen = true;
        this.quickOpenService.open(this, this.getOptions());
    };
    BoardsQuickOpenService.prototype.onType = function (lookFor, acceptor) {
        var _this = this;
        this.currentQuery = lookFor;
        var fuzzyFilter = this.fuzzyFilter(lookFor);
        var availableBoards = this.availableBoards.filter(boards_service_client_impl_1.AvailableBoard.hasPort).filter(function (_a) {
            var name = _a.name;
            return fuzzyFilter(name);
        });
        var toAccept = [];
        // Show the selected attached in a different group.
        if (this.selectedBoard && fuzzyFilter(this.selectedBoard.name)) {
            toAccept.push(this.toQuickItem(this.selectedBoard, { groupLabel: 'Selected Board' }));
        }
        // Filter the selected from the attached ones.
        toAccept.push.apply(toAccept, __spread(availableBoards.filter(function (board) { return board !== _this.selectedBoard; }).map(function (board, i) {
            var group = undefined;
            if (i === 0) {
                // If no `selectedBoard`, then this item is the top one, no borders required.
                group = { groupLabel: 'Attached Boards', showBorder: !!_this.selectedBoard };
            }
            return _this.toQuickItem(board, group);
        })));
        // Show the config only if the `input` is empty.
        if (!lookFor.trim().length) {
            toAccept.push.apply(toAccept, __spread(this.data.configOptions.map(function (config, i) {
                var group = undefined;
                if (i === 0) {
                    group = { groupLabel: 'Board Settings', showBorder: true };
                }
                return _this.toQuickItem(config, group);
            })));
        }
        else {
            toAccept.push.apply(toAccept, __spread(this.allBoards.filter(function (_a) {
                var name = _a.name;
                return fuzzyFilter(name);
            }).map(function (board, i) {
                var group = undefined;
                if (i === 0) {
                    group = { groupLabel: 'Boards', showBorder: true };
                }
                return _this.toQuickItem(board, group);
            })));
        }
        acceptor(toAccept);
    };
    BoardsQuickOpenService.prototype.fuzzyFilter = function (lookFor) {
        var shouldFilter = !!lookFor.trim().length;
        return function (inputString) { return shouldFilter ? fuzzy.test(lookFor.toLocaleLowerCase(), inputString.toLocaleLowerCase()) : true; };
    };
    BoardsQuickOpenService.prototype.update = function (availableBoards) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedBoard, _a, data, boards;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        selectedBoard = availableBoards.filter(boards_service_client_impl_1.AvailableBoard.hasPort).find(function (_a) {
                            var selected = _a.selected;
                            return selected;
                        });
                        return [4 /*yield*/, Promise.all([
                                selectedBoard && selectedBoard.fqbn ? this.boardsDataStore.getData(selectedBoard.fqbn) : Promise.resolve(boards_data_store_1.BoardsDataStore.Data.EMPTY),
                                this.boardsService.allBoards({})
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), data = _a[0], boards = _a[1];
                        this.allBoards = protocol_1.Board.decorateBoards(selectedBoard, boards)
                            .filter(function (board) { return !availableBoards.some(function (availableBoard) { return protocol_1.Board.sameAs(availableBoard, board); }); });
                        this.availableBoards = availableBoards;
                        this.data = data;
                        this.selectedBoard = selectedBoard;
                        if (this.isOpen) {
                            // Hack, to update the state without closing and reopening the quick open widget.
                            this.quickOpenService.onType(this.currentQuery);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardsQuickOpenService.prototype.toQuickItem = function (item, group) {
        var _this = this;
        var options;
        if (boards_service_client_impl_1.AvailableBoard.is(item)) {
            var description = "on " + protocol_1.Port.toString(item.port);
            options = {
                label: "" + item.name,
                description: description,
                descriptionHighlights: [
                    {
                        start: 0,
                        end: description.length
                    }
                ],
                run: this.toRun(function () { return _this.boardsServiceClient.boardsConfig = ({ selectedBoard: item, selectedPort: item.port }); })
            };
        }
        else if (protocol_1.ConfigOption.is(item)) {
            var selected = item.values.find(function (_a) {
                var selected = _a.selected;
                return selected;
            });
            var value = selected ? selected.label : 'Not set';
            var label = item.label + ": " + value;
            options = {
                label: label,
                // Intended to match the value part of a board setting.
                // NOTE: this does not work, as `fuzzyMatchLabel: true` is set. Manual highlighting is ignored, apparently.
                labelHighlights: [
                    {
                        start: label.length - value.length,
                        end: label.length
                    }
                ],
                run: function (mode) {
                    if (mode === quick_open_model_1.QuickOpenMode.OPEN) {
                        _this.setConfig(item);
                        return false;
                    }
                    return true;
                }
            };
            if (!selected) {
                options.description = 'Not set';
            }
            ;
        }
        else {
            options = {
                label: "" + item.name,
                description: "" + (item.missing ? '' : "[installed with '" + item.packageName + "']"),
                run: function (mode) {
                    if (mode === quick_open_model_1.QuickOpenMode.OPEN) {
                        _this.selectBoard(item);
                        return false;
                    }
                    return true;
                }
            };
        }
        if (group) {
            return new quick_open_model_1.QuickOpenGroupItem(__assign(__assign({}, options), group));
        }
        else {
            return new quick_open_model_1.QuickOpenItem(options);
        }
    };
    BoardsQuickOpenService.prototype.toRun = function (run) {
        return function (mode) {
            if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                return false;
            }
            run();
            return true;
        };
    };
    BoardsQuickOpenService.prototype.selectBoard = function (board) {
        return __awaiter(this, void 0, void 0, function () {
            var allPorts, toItem, options;
            var _this = this;
            return __generator(this, function (_a) {
                allPorts = this.availableBoards.filter(boards_service_client_impl_1.AvailableBoard.hasPort).map(function (_a) {
                    var port = _a.port;
                    return port;
                }).sort(protocol_1.Port.compare);
                toItem = function (port) { return new quick_open_model_1.QuickOpenItem({
                    label: protocol_1.Port.toString(port, { useLabel: true }),
                    run: _this.toRun(function () {
                        _this.boardsServiceClient.boardsConfig = {
                            selectedBoard: board,
                            selectedPort: port
                        };
                    })
                }); };
                options = {
                    placeholder: "Select a port for '" + board.name + "'. Press 'Enter' to confirm or 'Escape' to cancel.",
                    fuzzyMatchLabel: true
                };
                this.quickOpenService.open({
                    onType: function (lookFor, acceptor) {
                        var fuzzyFilter = _this.fuzzyFilter(lookFor);
                        acceptor(allPorts.filter(function (_a) {
                            var address = _a.address;
                            return fuzzyFilter(address);
                        }).map(toItem));
                    }
                }, options);
                return [2 /*return*/];
            });
        });
    };
    BoardsQuickOpenService.prototype.setConfig = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var toItem, options;
            var _this = this;
            return __generator(this, function (_a) {
                toItem = function (value) { return new quick_open_model_1.QuickOpenItem({
                    label: value.label,
                    iconClass: value.selected ? 'fa fa-check' : '',
                    run: _this.toRun(function () {
                        if (!_this.selectedBoard) {
                            _this.logger.warn("Could not alter the boards settings. No board selected. " + JSON.stringify(config));
                            return;
                        }
                        if (!_this.selectedBoard.fqbn) {
                            _this.logger.warn("Could not alter the boards settings. The selected board does not have a FQBN. " + JSON.stringify(_this.selectedBoard));
                            return;
                        }
                        var fqbn = _this.selectedBoard.fqbn;
                        _this.boardsDataStore.selectConfigOption({
                            fqbn: fqbn,
                            option: config.option,
                            selectedValue: value.value
                        });
                    })
                }); };
                options = {
                    placeholder: "Configure '" + config.label + "'. Press 'Enter' to confirm or 'Escape' to cancel.",
                    fuzzyMatchLabel: true
                };
                this.quickOpenService.open({
                    onType: function (lookFor, acceptor) {
                        var fuzzyFilter = _this.fuzzyFilter(lookFor);
                        acceptor(config.values
                            .filter(function (_a) {
                            var label = _a.label;
                            return fuzzyFilter(label);
                        })
                            .sort(function (left, right) { return utils_1.naturalCompare(left.label, right.label); })
                            .map(toItem));
                    }
                }, options);
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        inversify_1.named('boards-quick-open'),
        __metadata("design:type", Object)
    ], BoardsQuickOpenService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(quick_open_1.QuickOpenService),
        __metadata("design:type", quick_open_1.QuickOpenService)
    ], BoardsQuickOpenService.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(protocol_1.BoardsService),
        __metadata("design:type", Object)
    ], BoardsQuickOpenService.prototype, "boardsService", void 0);
    __decorate([
        inversify_1.inject(boards_service_client_impl_1.BoardsServiceClientImpl),
        __metadata("design:type", boards_service_client_impl_1.BoardsServiceClientImpl)
    ], BoardsQuickOpenService.prototype, "boardsServiceClient", void 0);
    __decorate([
        inversify_1.inject(boards_data_store_1.BoardsDataStore),
        __metadata("design:type", boards_data_store_1.BoardsDataStore)
    ], BoardsQuickOpenService.prototype, "boardsDataStore", void 0);
    __decorate([
        inversify_1.inject(core_service_client_impl_1.CoreServiceClientImpl),
        __metadata("design:type", core_service_client_impl_1.CoreServiceClientImpl)
    ], BoardsQuickOpenService.prototype, "coreServiceClient", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BoardsQuickOpenService.prototype, "postConstruct", null);
    BoardsQuickOpenService = __decorate([
        inversify_1.injectable()
    ], BoardsQuickOpenService);
    return BoardsQuickOpenService;
}());
exports.BoardsQuickOpenService = BoardsQuickOpenService;


/***/ })

}]);
//# sourceMappingURL=89.bundle.js.map
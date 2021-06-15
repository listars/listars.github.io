

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
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

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
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

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
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

var __read = function (o, n) {
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

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/runtime/components/Dialog.ts");
__webpack_require__("./src/runtime/components/ADVDialog.ts");
__webpack_require__("./src/runtime/components/Animator.ts");
__webpack_require__("./src/runtime/components/Audio.ts");
__webpack_require__("./src/runtime/components/Branch.ts");
__webpack_require__("./src/runtime/components/Character.ts");
__webpack_require__("./src/runtime/components/Comment.ts");
__webpack_require__("./src/runtime/components/Config.ts");
__webpack_require__("./src/runtime/components/Interpreter.ts");
__webpack_require__("./src/runtime/components/LoadingUI.ts");
__webpack_require__("./src/runtime/components/NVLDialog.ts");
__webpack_require__("./src/runtime/components/Samsara.ts");
__webpack_require__("./src/runtime/components/Scene.ts");
__webpack_require__("./src/runtime/components/Text.ts");
__webpack_require__("./src/runtime/components/Title.ts");
__webpack_require__("./src/runtime/components/Transition.ts");
__webpack_require__("./src/runtime/components/types.ts");
__webpack_require__("./src/Singleton.ts");
__webpack_require__("./src/lib/JSMpeg/JSMpeg.ts");
__webpack_require__("./src/lib/JSMpeg/Player.ts");
__webpack_require__("./src/lib/events/addon/index.ts");
__webpack_require__("./src/lib/events/core/index.ts");
__webpack_require__("./src/lib/stories/actions/Comment.ts");
__webpack_require__("./src/lib/stories/actions/Exp.ts");
__webpack_require__("./src/lib/stories/actions/Expression.ts");
__webpack_require__("./src/lib/stories/actions/LogicBlock.ts");
__webpack_require__("./src/lib/stories/actions/arithmetic.ts");
__webpack_require__("./src/lib/stories/actions/base.ts");
__webpack_require__("./src/lib/stories/actions/keyvalue.ts");
__webpack_require__("./src/lib/stories/actions/story.ts");
__webpack_require__("./src/lib/stories/libs/variable.ts");
__webpack_require__("./src/lib/stories/ohm/kc.ohm.ts");
__webpack_require__("./src/lib/utils/Compose.ts");
__webpack_require__("./src/lib/utils/Preload.ts");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import singleton from './Singleton'
// import scenario from './Scenario'
// import './runtime/scenarios'
// import './lib/Landing'
var Loading_1 = __webpack_require__("./src/lib/components/Loading.ts");
var Scene_1 = __webpack_require__("./src/lib/components/Scene.ts");
var Script_1 = __webpack_require__("./src/lib/utils/Script.ts");
var PartLoad_1 = __webpack_require__("./src/lib/utils/PartLoad.ts");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    // public video: Sakura.Video
    function Main() {
        var _this = _super.call(this) || this;
        _this.bg = new egret.Shape();
        _this.touchEnabled = true;
        egret.ImageLoader.crossOrigin = "anonymous";
        window.addEventListener("orientationchange", function () {
            alert("游戏过程中修改横竖屏，可能会造成不可预知的渲染错误。若确实要更改，请刷新~");
        });
        _this.addEventListener(egret.Event.DEACTIVATE, function () {
            this.stage.frameRate = 0;
        }, _this);
        _this.addEventListener(egret.Event.ACTIVATE, function () {
            this.stage.frameRate = 60;
        }, _this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    Main.prototype.onConfigComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Script_1.default.event.post('storyscript-init');
                        this.stage.addChild(Loading_1.default);
                        // TODO 读档预加载
                        //预加载主线
                        return [4 /*yield*/, PartLoad_1.default.preload('main')];
                    case 1:
                        // TODO 读档预加载
                        //预加载主线
                        _a.sent();
                        this.scene = new Scene_1.default();
                        this.stage.addChild(this.scene);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Main;
}(egret.DisplayObjectContainer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/Singleton.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defaultCps = AVG.config.defaultCps;
window["{ defaultCps }"] = { defaultCps };
var singleton = {};
window["singleton"] = singleton;
singleton.loading = new AVG.LoadingUI;
singleton.interpreter = new AVG.Interpreter;
singleton.scene = new AVG.Scene(singleton.interpreter);
singleton.branch = new AVG.Branch;
singleton.bgm = new AVG.Audio(false, true);
singleton.text = new AVG.Text;
// singleton.galaxy = new AVG.Galaxy,
singleton.title = new AVG.Title;
singleton.comment = new AVG.Comment;
// singleton.share = new AVG.Share,
singleton.samsara = new AVG.Samsara;
singleton.altair = new AVG.Character("altair", "33", "altair", 13770201, 13770201, defaultCps);
singleton.vega = new AVG.Character("vega", "22", "vega", 24831, 24831, defaultCps);
singleton.boy = new AVG.Character("npc.boy", "少年", "boy", 30884, 30884, defaultCps, false, false);
singleton.girl = new AVG.Character("npc.girl", "少女", "girl", 16740027, 16740027, defaultCps, false, false);
singleton.fff = new AVG.Character("npc.fff", "F^3", "fff", 12320768, 12320768, defaultCps, false, false);
singleton.tv = new AVG.Character("npc.tv", "迷之生物", "npc", 1796608, 1796608, defaultCps, false, false);
singleton.six = new AVG.Character("npc.six", "66", "npc", 1796608, 1796608, defaultCps, false, false);
singleton.nine = new AVG.Character("npc.nine", "99", "npc", 1796608, 1796608, defaultCps, false, false);
singleton.rem = new AVG.Character("npc.rem", "萌王", "npc", 1796608, 1796608, defaultCps, false, false);
singleton.yato = new AVG.Character("npc.yato", "燃王", "npc", 1796608, 1796608, defaultCps, false, false);
singleton.tvh = new AVG.Character("npc.tv-h", "河神", "npc", 1796608, 1796608, defaultCps, false, false);
singleton.up = new AVG.Character("npc.up", "UP评审团", "npc", 1796608, 1796608, defaultCps, false, false);
singleton.cow = new AVG.Character("npc.cow", "牛", "npc", 1796608, 1796608, defaultCps, false, false);
exports.default = singleton;


/***/ }),

/***/ "./src/lib/JSMpeg/JSMpeg.ts":
/***/ (function(module, exports) {

var JSMpeg = window['JSMpeg']; 
var JSMpeg;
(function (JSMpeg) {
    function Now() {
        return window.performance ? window.performance.now() / 1e3 : Date.now() / 1e3;
    }
    JSMpeg.Now = Now;
    function Fill(array, value) {
        if (array.fill) {
            array.fill(value);
        }
        else {
            for (var i = 0; i < array.length; i++) {
                array[i] = value;
            }
        }
    }
    JSMpeg.Fill = Fill;
    var BitBuffer = /** @class */ (function () {
        function BitBuffer(bufferOrLength, mode) {
            if (typeof bufferOrLength === "object") {
                this.bytes = bufferOrLength instanceof Uint8Array ? bufferOrLength : new Uint8Array(bufferOrLength);
                this.byteLength = this.bytes.length;
            }
            else {
                this.bytes = new Uint8Array(bufferOrLength || 1024 * 1024);
                this.byteLength = 0;
            }
            this.mode = mode || BitBuffer.MODE.EXPAND;
            this.index = 0;
        }
        BitBuffer.prototype.resize = function (size) {
            var newBytes = new Uint8Array(size);
            if (this.byteLength !== 0) {
                this.byteLength = Math.min(this.byteLength, size);
                // @ts-ignore
                newBytes.set(this.bytes, 0, this.byteLength);
            }
            this.bytes = newBytes;
            this.index = Math.min(this.index, this.byteLength << 3);
        };
        BitBuffer.prototype.evict = function (sizeNeeded) {
            var bytePos = this.index >> 3, available = this.bytes.length - this.byteLength;
            if (this.index === this.byteLength << 3 || sizeNeeded > available + bytePos) {
                this.byteLength = 0;
                this.index = 0;
                return;
            }
            else if (bytePos === 0) {
                return;
            }
            if (this.bytes.copyWithin) {
                this.bytes.copyWithin(0, bytePos, this.byteLength);
            }
            else {
                this.bytes.set(this.bytes.subarray(bytePos, this.byteLength));
            }
            this.byteLength = this.byteLength - bytePos;
            this.index -= bytePos << 3;
            return;
        };
        BitBuffer.prototype.write = function (buffers) {
            var isArrayOfBuffers = typeof buffers[0] === "object", totalLength = 0, available = this.bytes.length - this.byteLength;
            if (isArrayOfBuffers) {
                var totalLength = 0;
                for (var i = 0; i < buffers.length; i++) {
                    totalLength += buffers[i].byteLength;
                }
            }
            else {
                totalLength = buffers.byteLength;
            }
            if (totalLength > available) {
                if (this.mode === BitBuffer.MODE.EXPAND) {
                    var newSize = Math.max(this.bytes.length * 2, totalLength - available);
                    this.resize(newSize);
                }
                else {
                    this.evict(totalLength);
                }
            }
            if (isArrayOfBuffers) {
                for (var i = 0; i < buffers.length; i++) {
                    this.appendSingleBuffer(buffers[i]);
                }
            }
            else {
                this.appendSingleBuffer(buffers);
            }
        };
        BitBuffer.prototype.appendSingleBuffer = function (buffer) {
            buffer = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
            this.bytes.set(buffer, this.byteLength);
            this.byteLength += buffer.length;
        };
        BitBuffer.prototype.findNextStartCode = function () {
            for (var i = this.index + 7 >> 3; i < this.byteLength; i++) {
                if (this.bytes[i] == 0 && this.bytes[i + 1] == 0 && this.bytes[i + 2] == 1) {
                    this.index = i + 4 << 3;
                    return this.bytes[i + 3];
                }
            }
            this.index = this.byteLength << 3;
            return -1;
        };
        BitBuffer.prototype.findStartCode = function (code) {
            var current = 0;
            while (true) {
                current = this.findNextStartCode();
                if (current === code || current === -1) {
                    return current;
                }
            }
            return -1;
        };
        BitBuffer.prototype.nextBytesAreStartCode = function () {
            var i = this.index + 7 >> 3;
            return i >= this.byteLength || this.bytes[i] == 0 && this.bytes[i + 1] == 0 && this.bytes[i + 2] == 1;
        };
        BitBuffer.prototype.peek = function (count) {
            var offset = this.index;
            var value = 0;
            while (count) {
                var currentByte = this.bytes[offset >> 3], remaining = 8 - (offset & 7), read = remaining < count ? remaining : count, shift = remaining - read, mask = 255 >> 8 - read;
                value = value << read | (currentByte & mask << shift) >> shift;
                offset += read;
                count -= read;
            }
            return value;
        };
        BitBuffer.prototype.read = function (count) {
            var value = this.peek(count);
            this.index += count;
            return value;
        };
        BitBuffer.prototype.skip = function (count) {
            return this.index += count;
        };
        BitBuffer.prototype.rewind = function (count) {
            this.index = Math.max(this.index - count, 0);
        };
        BitBuffer.prototype.has = function (count) {
            return (this.byteLength << 3) - this.index >= count;
        };
        BitBuffer.MODE = {
            EVICT: 1,
            EXPAND: 2
        };
        return BitBuffer;
    }());
    JSMpeg.BitBuffer = BitBuffer;
    __reflect(BitBuffer.prototype,"JSMpeg.BitBuffer",[]); 
    var Source = window['Source']; 
    var Source;
    (function (Source) {
        var WebSocket = /** @class */ (function () {
            function WebSocket(url, options) {
                this.url = url;
                this.socket = null;
                this.callbacks = {
                    connect: [],
                    data: []
                };
                this.destination = null;
                this.reconnectInterval = options.reconnectInterval !== undefined ? options.reconnectInterval : 5;
                this.shouldAttemptReconnect = !!this.reconnectInterval;
                this.completed = false;
                this.established = false;
                this.progress = 0;
                this.reconnectTimeoutId = 0;
            }
            WebSocket.prototype.connect = function (destination) {
                this.destination = destination;
            };
            WebSocket.prototype.destroy = function () {
                clearTimeout(this.reconnectTimeoutId);
                this.shouldAttemptReconnect = false;
                this.socket.close();
            };
            WebSocket.prototype.start = function () {
                this.shouldAttemptReconnect = !!this.reconnectInterval;
                this.progress = 0;
                this.established = false;
                this.socket = new window.WebSocket(this.url);
                this.socket.binaryType = "arraybuffer";
                this.socket.onmessage = this.onMessage.bind(this);
                this.socket.onopen = this.onOpen.bind(this);
                this.socket.onerror = this.onClose.bind(this);
                this.socket.onclose = this.onClose.bind(this);
            };
            WebSocket.prototype.resume = function (secondsHeadroom) { };
            ;
            WebSocket.prototype.onOpen = function () {
                this.progress = 1;
                this.established = true;
            };
            WebSocket.prototype.onClose = function () {
                if (this.shouldAttemptReconnect) {
                    clearTimeout(this.reconnectTimeoutId);
                    this.reconnectTimeoutId = setTimeout(function () {
                        this.start();
                    }.bind(this), this.reconnectInterval * 1e3);
                }
            };
            WebSocket.prototype.onMessage = function (ev) {
                if (this.destination) {
                    this.destination.write(ev.data);
                }
            };
            return WebSocket;
        }());
        Source.WebSocket = WebSocket;
        __reflect(WebSocket.prototype,"JSMpeg.Source.WebSocket",[]); 
        var AjaxProgressive = /** @class */ (function () {
            function AjaxProgressive(url, options) {
                this.url = url;
                this.destination = null;
                this.request = null;
                this.completed = false;
                this.established = false;
                this.progress = 0;
                this.fileSize = 0;
                this.loadedSize = 0;
                this.chunkSize = options.chunkSize || 1024 * 1024;
                this.isLoading = false;
                this.loadStartTime = 0;
                this.throttled = options.throttled !== false;
                this.aborted = false;
            }
            AjaxProgressive.prototype.addEventListener = function (type, listener, useCapture) { };
            AjaxProgressive.prototype.removeEventListener = function (type, listener, useCapture) { };
            AjaxProgressive.prototype.connect = function (destination) {
                this.destination = destination;
            };
            AjaxProgressive.prototype.start = function () {
                this.request = new XMLHttpRequest;
                this.request.onreadystatechange = function () {
                    if (this.request.readyState === this.request.DONE) {
                        this.fileSize = parseInt(this.request.getResponseHeader("Content-Length"));
                        this.loadNextChunk();
                    }
                }.bind(this);
                this.request.onprogress = this.onProgress.bind(this);
                this.request.open("HEAD", this.url);
                this.request.send();
            };
            AjaxProgressive.prototype.resume = function (secondsHeadroom) {
                if (this.isLoading || !this.throttled) {
                    return;
                }
                var worstCaseLoadingTime = this.loadTime * 8 + 2;
                if (worstCaseLoadingTime > secondsHeadroom) {
                    this.loadNextChunk();
                }
            };
            AjaxProgressive.prototype.destroy = function () {
                this.request.abort();
                this.aborted = true;
            };
            AjaxProgressive.prototype.loadNextChunk = function () {
                var start = this.loadedSize, end = Math.min(this.loadedSize + this.chunkSize - 1, this.fileSize - 1);
                if (start >= this.fileSize || this.aborted) {
                    this.completed = true;
                    return;
                }
                this.isLoading = true;
                this.loadStartTime = JSMpeg.Now();
                this.request = new XMLHttpRequest;
                this.request.onreadystatechange = function () {
                    if (this.request.readyState === this.request.DONE && this.request.status >= 200 && this.request.status < 300) {
                        this.onChunkLoad(this.request.response);
                    }
                    else if (this.request.readyState === this.request.DONE) {
                        if (this.loadFails++ < 3) {
                            this.loadNextChunk();
                        }
                    }
                }.bind(this);
                if (start === 0) {
                    this.request.onprogress = this.onProgress.bind(this);
                }
                this.request.open("GET", this.url + "?" + start + "-" + end);
                this.request.setRequestHeader("Range", "bytes=" + start + "-" + end);
                this.request.responseType = "arraybuffer";
                this.request.send();
            };
            AjaxProgressive.prototype.onProgress = function (ev) {
                this.progress = ev.loaded / ev.total;
            };
            AjaxProgressive.prototype.onChunkLoad = function (data) {
                this.established = true;
                this.progress = 1;
                this.loadedSize += data.byteLength;
                this.loadFails = 0;
                this.isLoading = false;
                if (this.destination) {
                    this.destination.write(data);
                }
                this.loadTime = JSMpeg.Now() - this.loadStartTime;
                if (!this.throttled) {
                    this.loadNextChunk();
                }
            };
            return AjaxProgressive;
        }());
        Source.AjaxProgressive = AjaxProgressive;
        __reflect(AjaxProgressive.prototype,"JSMpeg.Source.AjaxProgressive",[]); 
        var Ajax = /** @class */ (function () {
            function Ajax(url, options) {
                this.url = url;
                this.destination = null;
                this.request = null;
                this.completed = false;
                this.established = false;
                this.progress = 0;
            }
            Ajax.prototype.connect = function (destination) {
                this.destination = destination;
            };
            ;
            Ajax.prototype.start = function () {
                this.request = new XMLHttpRequest;
                this.request.onreadystatechange = function () {
                    if (this.request.readyState === this.request.DONE && this.request.status === 200) {
                        this.onLoad(this.request.response);
                    }
                }.bind(this);
                this.request.onprogress = this.onProgress.bind(this);
                this.request.open("GET", this.url);
                this.request.responseType = "arraybuffer";
                this.request.send();
            };
            ;
            Ajax.prototype.resume = function (secondsHeadroom) { };
            ;
            Ajax.prototype.destroy = function () {
                this.request.abort();
            };
            ;
            Ajax.prototype.onProgress = function (ev) {
                this.progress = ev.loaded / ev.total;
            };
            ;
            Ajax.prototype.onLoad = function (data) {
                this.established = true;
                this.completed = true;
                this.progress = 1;
                if (this.destination) {
                    this.destination.write(data);
                }
            };
            ;
            return Ajax;
        }());
        Source.Ajax = Ajax;
        __reflect(Ajax.prototype,"JSMpeg.Source.Ajax",[]); 
    })(Source = JSMpeg.Source || (JSMpeg.Source = {}));
    window["Source"] = Source;
    var Demuxer = window['Demuxer']; 
    var Demuxer;
    (function (Demuxer) {
        var TS = /** @class */ (function () {
            function TS(options) {
                this.bits = null;
                this.leftoverBytes = null;
                this.guessVideoFrameEnd = true;
                this.pidsToStreamIds = {};
                this.pesPacketInfo = {};
                this.startTime = 0;
                this.currentTime = 0;
            }
            TS.prototype.connect = function (streamId, destination) {
                this.pesPacketInfo[streamId] = {
                    destination: destination,
                    currentLength: 0,
                    totalLength: 0,
                    pts: 0,
                    buffers: []
                };
            };
            TS.prototype.write = function (buffer) {
                if (this.leftoverBytes) {
                    var totalLength = buffer.byteLength + this.leftoverBytes.byteLength;
                    this.bits = new JSMpeg.BitBuffer(totalLength);
                    this.bits.write([this.leftoverBytes, buffer]);
                }
                else {
                    this.bits = new JSMpeg.BitBuffer(buffer);
                }
                while (this.bits.has(188 << 3) && this.parsePacket()) { }
                var leftoverCount = this.bits.byteLength - (this.bits.index >> 3);
                this.leftoverBytes = leftoverCount > 0 ? this.bits.bytes.subarray(this.bits.index >> 3) : null;
            };
            TS.prototype.parsePacket = function () {
                if (this.bits.read(8) !== 71) {
                    if (!this.resync()) {
                        return false;
                    }
                }
                var end = (this.bits.index >> 3) + 187;
                var transportError = this.bits.read(1), payloadStart = this.bits.read(1), transportPriority = this.bits.read(1), pid = this.bits.read(13), transportScrambling = this.bits.read(2), adaptationField = this.bits.read(2), continuityCounter = this.bits.read(4);
                var streamId = this.pidsToStreamIds[pid];
                if (payloadStart && streamId) {
                    var pi = this.pesPacketInfo[streamId];
                    if (pi && pi.currentLength) {
                        this.packetComplete(pi);
                    }
                }
                if (adaptationField & 1) {
                    if (adaptationField & 2) {
                        var adaptationFieldLength = this.bits.read(8);
                        this.bits.skip(adaptationFieldLength << 3);
                    }
                    if (payloadStart && this.bits.nextBytesAreStartCode()) {
                        this.bits.skip(24);
                        streamId = this.bits.read(8);
                        this.pidsToStreamIds[pid] = streamId;
                        var packetLength = this.bits.read(16);
                        this.bits.skip(8);
                        var ptsDtsFlag = this.bits.read(2);
                        this.bits.skip(6);
                        var headerLength = this.bits.read(8);
                        var payloadBeginIndex = this.bits.index + (headerLength << 3);
                        var pi = this.pesPacketInfo[streamId];
                        if (pi) {
                            var pts = 0;
                            if (ptsDtsFlag & 2) {
                                this.bits.skip(4);
                                var p32_30 = this.bits.read(3);
                                this.bits.skip(1);
                                var p29_15 = this.bits.read(15);
                                this.bits.skip(1);
                                var p14_0 = this.bits.read(15);
                                this.bits.skip(1);
                                pts = (p32_30 * 1073741824 + p29_15 * 32768 + p14_0) / 9e4;
                                this.currentTime = pts;
                                if (this.startTime === -1) {
                                    this.startTime = pts;
                                }
                            }
                            var payloadLength = packetLength ? packetLength - headerLength - 3 : 0;
                            this.packetStart(pi, pts, payloadLength);
                        }
                        this.bits.index = payloadBeginIndex;
                    }
                    if (streamId) {
                        var pi = this.pesPacketInfo[streamId];
                        if (pi) {
                            var start = this.bits.index >> 3;
                            var complete = this.packetAddData(pi, start, end);
                            var hasPadding = !payloadStart && adaptationField & 2;
                            if (complete || this.guessVideoFrameEnd && hasPadding) {
                                this.packetComplete(pi);
                            }
                        }
                    }
                }
                this.bits.index = end << 3;
                return true;
            };
            TS.prototype.resync = function () {
                if (!this.bits.has(188 * 6 << 3)) {
                    return false;
                }
                var byteIndex = this.bits.index >> 3;
                for (var i = 0; i < 187; i++) {
                    if (this.bits.bytes[byteIndex + i] === 71) {
                        var foundSync = true;
                        for (var j = 1; j < 5; j++) {
                            if (this.bits.bytes[byteIndex + i + 188 * j] !== 71) {
                                foundSync = false;
                                break;
                            }
                        }
                        if (foundSync) {
                            this.bits.index = byteIndex + i + 1 << 3;
                            return true;
                        }
                    }
                }
                console.warn("JSMpeg: Possible garbage data. Skipping.");
                this.bits.skip(187 << 3);
                return false;
            };
            TS.prototype.packetStart = function (pi, pts, payloadLength) {
                pi.totalLength = payloadLength;
                pi.currentLength = 0;
                pi.pts = pts;
            };
            TS.prototype.packetAddData = function (pi, start, end) {
                pi.buffers.push(this.bits.bytes.subarray(start, end));
                pi.currentLength += end - start;
                var complete = pi.totalLength !== 0 && pi.currentLength >= pi.totalLength;
                return complete;
            };
            TS.prototype.packetComplete = function (pi) {
                pi.destination.write(pi.pts, pi.buffers);
                pi.totalLength = 0;
                pi.currentLength = 0;
                pi.buffers = [];
            };
            TS.STREAM = {
                PACK_HEADER: 186,
                SYSTEM_HEADER: 187,
                PROGRAM_MAP: 188,
                PRIVATE_1: 189,
                PADDING: 190,
                PRIVATE_2: 191,
                AUDIO_1: 192,
                VIDEO_1: 224,
                DIRECTORY: 255
            };
            return TS;
        }());
        Demuxer.TS = TS;
        __reflect(TS.prototype,"JSMpeg.Demuxer.TS",[]); 
    })(Demuxer = JSMpeg.Demuxer || (JSMpeg.Demuxer = {}));
    window["Demuxer"] = Demuxer;
    var Decoder = window['Decoder']; 
    var Decoder;
    (function (Decoder) {
        var Base = /** @class */ (function () {
            function Base(options) {
                this.destination = null;
                this.canPlay = false;
                this.collectTimestamps = !options.streaming;
                this.timestamps = [];
                this.timestampIndex = 0;
                this.startTime = 0;
                this.decodedTime = 0;
                Object.defineProperty(this, "currentTime", {
                    get: this.getCurrentTime
                });
            }
            Base.prototype.connect = function (destination) {
                this.destination = destination;
            };
            ;
            Base.prototype.write = function (pts, buffers) {
                if (this.collectTimestamps) {
                    if (this.timestamps.length === 0) {
                        this.startTime = pts;
                        this.decodedTime = pts;
                    }
                    this.timestamps.push({
                        index: this.bits.byteLength << 3,
                        time: pts
                    });
                }
                this.bits.write(buffers);
                this.canPlay = true;
            };
            Base.prototype.seek = function (time) {
                if (!this.collectTimestamps) {
                    return;
                }
                this.timestampIndex = 0;
                for (var i = 0; i < this.timestamps.length; i++) {
                    if (this.timestamps[i].time > time) {
                        break;
                    }
                    this.timestampIndex = i;
                }
                var ts = this.timestamps[this.timestampIndex];
                if (ts) {
                    this.bits.index = ts.index;
                    this.decodedTime = ts.time;
                }
                else {
                    this.bits.index = 0;
                    this.decodedTime = this.startTime;
                }
            };
            Base.prototype.decode = function () {
                this.advanceDecodedTime(0);
            };
            Base.prototype.advanceDecodedTime = function (seconds) {
                if (this.collectTimestamps) {
                    var newTimestampIndex = -1;
                    for (var i = this.timestampIndex; i < this.timestamps.length; i++) {
                        if (this.timestamps[i].index > this.bits.index) {
                            break;
                        }
                        newTimestampIndex = i;
                    }
                    if (newTimestampIndex !== -1 && newTimestampIndex !== this.timestampIndex) {
                        this.timestampIndex = newTimestampIndex;
                        this.decodedTime = this.timestamps[this.timestampIndex].time;
                        return;
                    }
                }
                this.decodedTime += seconds;
            };
            Base.prototype.getCurrentTime = function () {
                return this.decodedTime;
            };
            return Base;
        }());
        Decoder.Base = Base;
        __reflect(Base.prototype,"JSMpeg.Decoder.Base",[]); 
        var MPEG1Video = /** @class */ (function (_super) {
            __extends(MPEG1Video, _super);
            function MPEG1Video(options) {
                var _this = _super.call(this, options) || this;
                _this.frameRate = 30;
                _this.currentY = null;
                _this.currentCr = null;
                _this.currentCb = null;
                _this.pictureType = 0;
                _this.forwardY = null;
                _this.forwardCr = null;
                _this.forwardCb = null;
                _this.fullPelForward = false;
                _this.forwardFCode = 0;
                _this.forwardRSize = 0;
                _this.forwardF = 0;
                _this.quantizerScale = 0;
                _this.sliceBegin = false;
                _this.macroblockAddress = 0;
                _this.mbRow = 0;
                _this.mbCol = 0;
                _this.macroblockType = 0;
                _this.macroblockIntra = false;
                _this.macroblockMotFw = false;
                _this.motionFwH = 0;
                _this.motionFwV = 0;
                _this.motionFwHPrev = 0;
                _this.motionFwVPrev = 0;
                _this.dcPredictorY = 0;
                _this.dcPredictorCr = 0;
                _this.dcPredictorCb = 0;
                JSMpeg.Decoder.Base.call(_this, options);
                var bufferSize = options.videoBufferSize || 512 * 1024;
                var bufferMode = options.streaming ? JSMpeg.BitBuffer.MODE.EVICT : JSMpeg.BitBuffer.MODE.EXPAND;
                _this.bits = new JSMpeg.BitBuffer(bufferSize, bufferMode);
                _this.customIntraQuantMatrix = new Uint8Array(64);
                _this.customNonIntraQuantMatrix = new Uint8Array(64);
                _this.blockData = new Int32Array(64);
                _this.currentFrame = 0;
                _this.decodeFirstFrame = options.decodeFirstFrame !== false;
                return _this;
            }
            MPEG1Video.prototype.write = function (pts, buffers) {
                JSMpeg.Decoder.Base.prototype.write.call(this, pts, buffers);
                if (!this.hasSequenceHeader) {
                    if (this.bits.findStartCode(MPEG1Video.START.SEQUENCE) === -1) {
                        return false;
                    }
                    this.decodeSequenceHeader();
                    if (this.decodeFirstFrame) {
                        this.decode();
                    }
                }
            };
            ;
            MPEG1Video.prototype.decode = function () {
                if (!this.hasSequenceHeader) {
                    return false;
                }
                if (this.bits.findStartCode(MPEG1Video.START.PICTURE) === -1) {
                    var bufferedBytes = this.bits.byteLength - (this.bits.index >> 3);
                    return false;
                }
                this.decodePicture();
                this.advanceDecodedTime(1 / this.frameRate);
                return true;
            };
            ;
            MPEG1Video.prototype.readHuffman = function (codeTable) {
                var state = 0;
                do {
                    state = codeTable[state + this.bits.read(1)];
                } while (state >= 0 && codeTable[state] !== 0);
                return codeTable[state + 2];
            };
            ;
            MPEG1Video.prototype.decodeSequenceHeader = function () {
                var newWidth = this.bits.read(12), newHeight = this.bits.read(12);
                this.bits.skip(4);
                this.frameRate = MPEG1Video.PICTURE_RATE[this.bits.read(4)];
                this.bits.skip(18 + 1 + 10 + 1);
                if (newWidth !== this.width || newHeight !== this.height) {
                    this.width = newWidth;
                    this.height = newHeight;
                    this.initBuffers();
                    if (this.destination) {
                        this.destination.resize(newWidth, newHeight);
                    }
                }
                if (this.bits.read(1)) {
                    for (var i = 0; i < 64; i++) {
                        this.customIntraQuantMatrix[MPEG1Video.ZIG_ZAG[i]] = this.bits.read(8);
                    }
                    this.intraQuantMatrix = this.customIntraQuantMatrix;
                }
                if (this.bits.read(1)) {
                    for (var i = 0; i < 64; i++) {
                        var idx = MPEG1Video.ZIG_ZAG[i];
                        this.customNonIntraQuantMatrix[idx] = this.bits.read(8);
                    }
                    this.nonIntraQuantMatrix = this.customNonIntraQuantMatrix;
                }
                this.hasSequenceHeader = true;
            };
            ;
            MPEG1Video.prototype.initBuffers = function () {
                this.intraQuantMatrix = MPEG1Video.DEFAULT_INTRA_QUANT_MATRIX;
                this.nonIntraQuantMatrix = MPEG1Video.DEFAULT_NON_INTRA_QUANT_MATRIX;
                this.mbWidth = this.width + 15 >> 4;
                this.mbHeight = this.height + 15 >> 4;
                this.mbSize = this.mbWidth * this.mbHeight;
                this.codedWidth = this.mbWidth << 4;
                this.codedHeight = this.mbHeight << 4;
                this.codedSize = this.codedWidth * this.codedHeight;
                this.halfWidth = this.mbWidth << 3;
                this.halfHeight = this.mbHeight << 3;
                this.currentY = new Uint8ClampedArray(this.codedSize);
                this.currentY32 = new Uint32Array(this.currentY.buffer);
                this.currentCr = new Uint8ClampedArray(this.codedSize >> 2);
                this.currentCr32 = new Uint32Array(this.currentCr.buffer);
                this.currentCb = new Uint8ClampedArray(this.codedSize >> 2);
                this.currentCb32 = new Uint32Array(this.currentCb.buffer);
                this.forwardY = new Uint8ClampedArray(this.codedSize);
                this.forwardY32 = new Uint32Array(this.forwardY.buffer);
                this.forwardCr = new Uint8ClampedArray(this.codedSize >> 2);
                this.forwardCr32 = new Uint32Array(this.forwardCr.buffer);
                this.forwardCb = new Uint8ClampedArray(this.codedSize >> 2);
                this.forwardCb32 = new Uint32Array(this.forwardCb.buffer);
            };
            ;
            MPEG1Video.prototype.decodePicture = function (skipOutput) {
                this.currentFrame++;
                this.bits.skip(10);
                this.pictureType = this.bits.read(3);
                this.bits.skip(16);
                if (this.pictureType <= 0 || this.pictureType >= MPEG1Video.PICTURE_TYPE.B) {
                    return;
                }
                if (this.pictureType === MPEG1Video.PICTURE_TYPE.PREDICTIVE) {
                    this.fullPelForward = this.bits.read(1);
                    this.forwardFCode = this.bits.read(3);
                    if (this.forwardFCode === 0) {
                        return;
                    }
                    this.forwardRSize = this.forwardFCode - 1;
                    this.forwardF = 1 << this.forwardRSize;
                }
                var code = 0;
                do {
                    code = this.bits.findNextStartCode();
                } while (code === MPEG1Video.START.EXTENSION || code === MPEG1Video.START.USER_DATA);
                while (code >= MPEG1Video.START.SLICE_FIRST && code <= MPEG1Video.START.SLICE_LAST) {
                    this.decodeSlice(code & 255);
                    code = this.bits.findNextStartCode();
                }
                if (code !== -1) {
                    this.bits.rewind(32);
                }
                if (this.destination) {
                    this.destination.render(this.currentY, this.currentCr, this.currentCb);
                }
                if (this.pictureType === MPEG1Video.PICTURE_TYPE.INTRA || this.pictureType === MPEG1Video.PICTURE_TYPE.PREDICTIVE) {
                    var tmpY = this.forwardY, tmpY32 = this.forwardY32, tmpCr = this.forwardCr, tmpCr32 = this.forwardCr32, tmpCb = this.forwardCb, tmpCb32 = this.forwardCb32;
                    this.forwardY = this.currentY;
                    this.forwardY32 = this.currentY32;
                    this.forwardCr = this.currentCr;
                    this.forwardCr32 = this.currentCr32;
                    this.forwardCb = this.currentCb;
                    this.forwardCb32 = this.currentCb32;
                    this.currentY = tmpY;
                    this.currentY32 = tmpY32;
                    this.currentCr = tmpCr;
                    this.currentCr32 = tmpCr32;
                    this.currentCb = tmpCb;
                    this.currentCb32 = tmpCb32;
                }
            };
            ;
            MPEG1Video.prototype.decodeSlice = function (slice) {
                this.sliceBegin = true;
                this.macroblockAddress = (slice - 1) * this.mbWidth - 1;
                this.motionFwH = this.motionFwHPrev = 0;
                this.motionFwV = this.motionFwVPrev = 0;
                this.dcPredictorY = 128;
                this.dcPredictorCr = 128;
                this.dcPredictorCb = 128;
                this.quantizerScale = this.bits.read(5);
                while (this.bits.read(1)) {
                    this.bits.skip(8);
                }
                do {
                    this.decodeMacroblock();
                } while (!this.bits.nextBytesAreStartCode());
            };
            ;
            MPEG1Video.prototype.decodeMacroblock = function () {
                var increment = 0, t = this.readHuffman(MPEG1Video.MACROBLOCK_ADDRESS_INCREMENT);
                while (t === 34) {
                    t = this.readHuffman(MPEG1Video.MACROBLOCK_ADDRESS_INCREMENT);
                }
                while (t === 35) {
                    increment += 33;
                    t = this.readHuffman(MPEG1Video.MACROBLOCK_ADDRESS_INCREMENT);
                }
                increment += t;
                if (this.sliceBegin) {
                    this.sliceBegin = false;
                    this.macroblockAddress += increment;
                }
                else {
                    if (this.macroblockAddress + increment >= this.mbSize) {
                        return;
                    }
                    if (increment > 1) {
                        this.dcPredictorY = 128;
                        this.dcPredictorCr = 128;
                        this.dcPredictorCb = 128;
                        if (this.pictureType === MPEG1Video.PICTURE_TYPE.PREDICTIVE) {
                            this.motionFwH = this.motionFwHPrev = 0;
                            this.motionFwV = this.motionFwVPrev = 0;
                        }
                    }
                    while (increment > 1) {
                        this.macroblockAddress++;
                        this.mbRow = this.macroblockAddress / this.mbWidth | 0;
                        this.mbCol = this.macroblockAddress % this.mbWidth;
                        this.copyMacroblock(this.motionFwH, this.motionFwV, this.forwardY, this.forwardCr, this.forwardCb);
                        increment--;
                    }
                    this.macroblockAddress++;
                }
                this.mbRow = this.macroblockAddress / this.mbWidth | 0;
                this.mbCol = this.macroblockAddress % this.mbWidth;
                var mbTable = MPEG1Video.MACROBLOCK_TYPE[this.pictureType];
                this.macroblockType = this.readHuffman(mbTable);
                this.macroblockIntra = this.macroblockType & 1;
                this.macroblockMotFw = this.macroblockType & 8;
                if ((this.macroblockType & 16) !== 0) {
                    this.quantizerScale = this.bits.read(5);
                }
                if (this.macroblockIntra) {
                    this.motionFwH = this.motionFwHPrev = 0;
                    this.motionFwV = this.motionFwVPrev = 0;
                }
                else {
                    this.dcPredictorY = 128;
                    this.dcPredictorCr = 128;
                    this.dcPredictorCb = 128;
                    this.decodeMotionVectors();
                    this.copyMacroblock(this.motionFwH, this.motionFwV, this.forwardY, this.forwardCr, this.forwardCb);
                }
                var cbp = (this.macroblockType & 2) !== 0 ? this.readHuffman(MPEG1Video.CODE_BLOCK_PATTERN) : this.macroblockIntra ? 63 : 0;
                for (var block = 0, mask = 32; block < 6; block++) {
                    if ((cbp & mask) !== 0) {
                        this.decodeBlock(block);
                    }
                    mask >>= 1;
                }
            };
            ;
            MPEG1Video.prototype.decodeMotionVectors = function () {
                var code, d, r = 0;
                if (this.macroblockMotFw) {
                    code = this.readHuffman(MPEG1Video.MOTION);
                    if (code !== 0 && this.forwardF !== 1) {
                        r = this.bits.read(this.forwardRSize);
                        d = (Math.abs(code) - 1 << this.forwardRSize) + r + 1;
                        if (code < 0) {
                            d = -d;
                        }
                    }
                    else {
                        d = code;
                    }
                    this.motionFwHPrev += d;
                    if (this.motionFwHPrev > (this.forwardF << 4) - 1) {
                        this.motionFwHPrev -= this.forwardF << 5;
                    }
                    else if (this.motionFwHPrev < -this.forwardF << 4) {
                        this.motionFwHPrev += this.forwardF << 5;
                    }
                    this.motionFwH = this.motionFwHPrev;
                    if (this.fullPelForward) {
                        this.motionFwH <<= 1;
                    }
                    code = this.readHuffman(MPEG1Video.MOTION);
                    if (code !== 0 && this.forwardF !== 1) {
                        r = this.bits.read(this.forwardRSize);
                        d = (Math.abs(code) - 1 << this.forwardRSize) + r + 1;
                        if (code < 0) {
                            d = -d;
                        }
                    }
                    else {
                        d = code;
                    }
                    this.motionFwVPrev += d;
                    if (this.motionFwVPrev > (this.forwardF << 4) - 1) {
                        this.motionFwVPrev -= this.forwardF << 5;
                    }
                    else if (this.motionFwVPrev < -this.forwardF << 4) {
                        this.motionFwVPrev += this.forwardF << 5;
                    }
                    this.motionFwV = this.motionFwVPrev;
                    if (this.fullPelForward) {
                        this.motionFwV <<= 1;
                    }
                }
                else if (this.pictureType === MPEG1Video.PICTURE_TYPE.PREDICTIVE) {
                    this.motionFwH = this.motionFwHPrev = 0;
                    this.motionFwV = this.motionFwVPrev = 0;
                }
            };
            ;
            MPEG1Video.prototype.copyMacroblock = function (motionH, motionV, sY, sCr, sCb) {
                var width, scan, H, V, oddH, oddV, src, dest, last;
                var dY = this.currentY32, dCb = this.currentCb32, dCr = this.currentCr32;
                width = this.codedWidth;
                scan = width - 16;
                H = motionH >> 1;
                V = motionV >> 1;
                oddH = (motionH & 1) === 1;
                oddV = (motionV & 1) === 1;
                src = ((this.mbRow << 4) + V) * width + (this.mbCol << 4) + H;
                dest = this.mbRow * width + this.mbCol << 2;
                last = dest + (width << 2);
                var x, y1, y2, y;
                if (oddH) {
                    if (oddV) {
                        while (dest < last) {
                            y1 = sY[src] + sY[src + width];
                            src++;
                            for (x = 0; x < 4; x++) {
                                y2 = sY[src] + sY[src + width];
                                src++;
                                y = y1 + y2 + 2 >> 2 & 255;
                                y1 = sY[src] + sY[src + width];
                                src++;
                                y |= y1 + y2 + 2 << 6 & 65280;
                                y2 = sY[src] + sY[src + width];
                                src++;
                                y |= y1 + y2 + 2 << 14 & 16711680;
                                y1 = sY[src] + sY[src + width];
                                src++;
                                y |= y1 + y2 + 2 << 22 & 4278190080;
                                dY[dest++] = y;
                            }
                            dest += scan >> 2;
                            src += scan - 1;
                        }
                    }
                    else {
                        while (dest < last) {
                            y1 = sY[src++];
                            for (x = 0; x < 4; x++) {
                                y2 = sY[src++];
                                y = y1 + y2 + 1 >> 1 & 255;
                                y1 = sY[src++];
                                y |= y1 + y2 + 1 << 7 & 65280;
                                y2 = sY[src++];
                                y |= y1 + y2 + 1 << 15 & 16711680;
                                y1 = sY[src++];
                                y |= y1 + y2 + 1 << 23 & 4278190080;
                                dY[dest++] = y;
                            }
                            dest += scan >> 2;
                            src += scan - 1;
                        }
                    }
                }
                else {
                    if (oddV) {
                        while (dest < last) {
                            for (x = 0; x < 4; x++) {
                                y = sY[src] + sY[src + width] + 1 >> 1 & 255;
                                src++;
                                y |= sY[src] + sY[src + width] + 1 << 7 & 65280;
                                src++;
                                y |= sY[src] + sY[src + width] + 1 << 15 & 16711680;
                                src++;
                                y |= sY[src] + sY[src + width] + 1 << 23 & 4278190080;
                                src++;
                                dY[dest++] = y;
                            }
                            dest += scan >> 2;
                            src += scan;
                        }
                    }
                    else {
                        while (dest < last) {
                            for (x = 0; x < 4; x++) {
                                y = sY[src];
                                src++;
                                y |= sY[src] << 8;
                                src++;
                                y |= sY[src] << 16;
                                src++;
                                y |= sY[src] << 24;
                                src++;
                                dY[dest++] = y;
                            }
                            dest += scan >> 2;
                            src += scan;
                        }
                    }
                }
                width = this.halfWidth;
                scan = width - 8;
                H = motionH / 2 >> 1;
                V = motionV / 2 >> 1;
                oddH = (motionH / 2 & 1) === 1;
                oddV = (motionV / 2 & 1) === 1;
                src = ((this.mbRow << 3) + V) * width + (this.mbCol << 3) + H;
                dest = this.mbRow * width + this.mbCol << 1;
                last = dest + (width << 1);
                var cr1, cr2, cr, cb1, cb2, cb;
                if (oddH) {
                    if (oddV) {
                        while (dest < last) {
                            cr1 = sCr[src] + sCr[src + width];
                            cb1 = sCb[src] + sCb[src + width];
                            src++;
                            for (x = 0; x < 2; x++) {
                                cr2 = sCr[src] + sCr[src + width];
                                cb2 = sCb[src] + sCb[src + width];
                                src++;
                                cr = cr1 + cr2 + 2 >> 2 & 255;
                                cb = cb1 + cb2 + 2 >> 2 & 255;
                                cr1 = sCr[src] + sCr[src + width];
                                cb1 = sCb[src] + sCb[src + width];
                                src++;
                                cr |= cr1 + cr2 + 2 << 6 & 65280;
                                cb |= cb1 + cb2 + 2 << 6 & 65280;
                                cr2 = sCr[src] + sCr[src + width];
                                cb2 = sCb[src] + sCb[src + width];
                                src++;
                                cr |= cr1 + cr2 + 2 << 14 & 16711680;
                                cb |= cb1 + cb2 + 2 << 14 & 16711680;
                                cr1 = sCr[src] + sCr[src + width];
                                cb1 = sCb[src] + sCb[src + width];
                                src++;
                                cr |= cr1 + cr2 + 2 << 22 & 4278190080;
                                cb |= cb1 + cb2 + 2 << 22 & 4278190080;
                                dCr[dest] = cr;
                                dCb[dest] = cb;
                                dest++;
                            }
                            dest += scan >> 2;
                            src += scan - 1;
                        }
                    }
                    else {
                        while (dest < last) {
                            cr1 = sCr[src];
                            cb1 = sCb[src];
                            src++;
                            for (x = 0; x < 2; x++) {
                                cr2 = sCr[src];
                                cb2 = sCb[src++];
                                cr = cr1 + cr2 + 1 >> 1 & 255;
                                cb = cb1 + cb2 + 1 >> 1 & 255;
                                cr1 = sCr[src];
                                cb1 = sCb[src++];
                                cr |= cr1 + cr2 + 1 << 7 & 65280;
                                cb |= cb1 + cb2 + 1 << 7 & 65280;
                                cr2 = sCr[src];
                                cb2 = sCb[src++];
                                cr |= cr1 + cr2 + 1 << 15 & 16711680;
                                cb |= cb1 + cb2 + 1 << 15 & 16711680;
                                cr1 = sCr[src];
                                cb1 = sCb[src++];
                                cr |= cr1 + cr2 + 1 << 23 & 4278190080;
                                cb |= cb1 + cb2 + 1 << 23 & 4278190080;
                                dCr[dest] = cr;
                                dCb[dest] = cb;
                                dest++;
                            }
                            dest += scan >> 2;
                            src += scan - 1;
                        }
                    }
                }
                else {
                    if (oddV) {
                        while (dest < last) {
                            for (x = 0; x < 2; x++) {
                                cr = sCr[src] + sCr[src + width] + 1 >> 1 & 255;
                                cb = sCb[src] + sCb[src + width] + 1 >> 1 & 255;
                                src++;
                                cr |= sCr[src] + sCr[src + width] + 1 << 7 & 65280;
                                cb |= sCb[src] + sCb[src + width] + 1 << 7 & 65280;
                                src++;
                                cr |= sCr[src] + sCr[src + width] + 1 << 15 & 16711680;
                                cb |= sCb[src] + sCb[src + width] + 1 << 15 & 16711680;
                                src++;
                                cr |= sCr[src] + sCr[src + width] + 1 << 23 & 4278190080;
                                cb |= sCb[src] + sCb[src + width] + 1 << 23 & 4278190080;
                                src++;
                                dCr[dest] = cr;
                                dCb[dest] = cb;
                                dest++;
                            }
                            dest += scan >> 2;
                            src += scan;
                        }
                    }
                    else {
                        while (dest < last) {
                            for (x = 0; x < 2; x++) {
                                cr = sCr[src];
                                cb = sCb[src];
                                src++;
                                cr |= sCr[src] << 8;
                                cb |= sCb[src] << 8;
                                src++;
                                cr |= sCr[src] << 16;
                                cb |= sCb[src] << 16;
                                src++;
                                cr |= sCr[src] << 24;
                                cb |= sCb[src] << 24;
                                src++;
                                dCr[dest] = cr;
                                dCb[dest] = cb;
                                dest++;
                            }
                            dest += scan >> 2;
                            src += scan;
                        }
                    }
                }
            };
            ;
            MPEG1Video.prototype.decodeBlock = function (block) {
                var n = 0, quantMatrix;
                if (this.macroblockIntra) {
                    var predictor, dctSize;
                    if (block < 4) {
                        predictor = this.dcPredictorY;
                        dctSize = this.readHuffman(MPEG1Video.DCT_DC_SIZE_LUMINANCE);
                    }
                    else {
                        predictor = block === 4 ? this.dcPredictorCr : this.dcPredictorCb;
                        dctSize = this.readHuffman(MPEG1Video.DCT_DC_SIZE_CHROMINANCE);
                    }
                    if (dctSize > 0) {
                        var differential = this.bits.read(dctSize);
                        if ((differential & 1 << dctSize - 1) !== 0) {
                            this.blockData[0] = predictor + differential;
                        }
                        else {
                            this.blockData[0] = predictor + (-1 << dctSize | differential + 1);
                        }
                    }
                    else {
                        this.blockData[0] = predictor;
                    }
                    if (block < 4) {
                        this.dcPredictorY = this.blockData[0];
                    }
                    else if (block === 4) {
                        this.dcPredictorCr = this.blockData[0];
                    }
                    else {
                        this.dcPredictorCb = this.blockData[0];
                    }
                    this.blockData[0] <<= 3 + 5;
                    quantMatrix = this.intraQuantMatrix;
                    n = 1;
                }
                else {
                    quantMatrix = this.nonIntraQuantMatrix;
                }
                var level = 0;
                while (true) {
                    var run = 0, coeff = this.readHuffman(MPEG1Video.DCT_COEFF);
                    if (coeff === 1 && n > 0 && this.bits.read(1) === 0) {
                        break;
                    }
                    if (coeff === 65535) {
                        run = this.bits.read(6);
                        level = this.bits.read(8);
                        if (level === 0) {
                            level = this.bits.read(8);
                        }
                        else if (level === 128) {
                            level = this.bits.read(8) - 256;
                        }
                        else if (level > 128) {
                            level = level - 256;
                        }
                    }
                    else {
                        run = coeff >> 8;
                        level = coeff & 255;
                        if (this.bits.read(1)) {
                            level = -level;
                        }
                    }
                    n += run;
                    var dezigZagged = MPEG1Video.ZIG_ZAG[n];
                    n++;
                    level <<= 1;
                    if (!this.macroblockIntra) {
                        level += level < 0 ? -1 : 1;
                    }
                    level = level * this.quantizerScale * quantMatrix[dezigZagged] >> 4;
                    if ((level & 1) === 0) {
                        level -= level > 0 ? 1 : -1;
                    }
                    if (level > 2047) {
                        level = 2047;
                    }
                    else if (level < -2048) {
                        level = -2048;
                    }
                    this.blockData[dezigZagged] = level * MPEG1Video.PREMULTIPLIER_MATRIX[dezigZagged];
                }
                var destArray, destIndex, scan;
                if (block < 4) {
                    destArray = this.currentY;
                    scan = this.codedWidth - 8;
                    destIndex = this.mbRow * this.codedWidth + this.mbCol << 4;
                    if ((block & 1) !== 0) {
                        destIndex += 8;
                    }
                    if ((block & 2) !== 0) {
                        destIndex += this.codedWidth << 3;
                    }
                }
                else {
                    destArray = block === 4 ? this.currentCb : this.currentCr;
                    scan = (this.codedWidth >> 1) - 8;
                    destIndex = (this.mbRow * this.codedWidth << 2) + (this.mbCol << 3);
                }
                if (this.macroblockIntra) {
                    if (n === 1) {
                        MPEG1Video.CopyValueToDestination(this.blockData[0] + 128 >> 8, destArray, destIndex, scan);
                        this.blockData[0] = 0;
                    }
                    else {
                        MPEG1Video.IDCT(this.blockData);
                        MPEG1Video.CopyBlockToDestination(this.blockData, destArray, destIndex, scan);
                        JSMpeg.Fill(this.blockData, 0);
                    }
                }
                else {
                    if (n === 1) {
                        MPEG1Video.AddValueToDestination(this.blockData[0] + 128 >> 8, destArray, destIndex, scan);
                        this.blockData[0] = 0;
                    }
                    else {
                        MPEG1Video.IDCT(this.blockData);
                        MPEG1Video.AddBlockToDestination(this.blockData, destArray, destIndex, scan);
                        JSMpeg.Fill(this.blockData, 0);
                    }
                }
                n = 0;
            };
            ;
            MPEG1Video.CopyBlockToDestination = function (block, dest, index, scan) {
                for (var n = 0; n < 64; n += 8, index += scan + 8) {
                    dest[index + 0] = block[n + 0];
                    dest[index + 1] = block[n + 1];
                    dest[index + 2] = block[n + 2];
                    dest[index + 3] = block[n + 3];
                    dest[index + 4] = block[n + 4];
                    dest[index + 5] = block[n + 5];
                    dest[index + 6] = block[n + 6];
                    dest[index + 7] = block[n + 7];
                }
            };
            ;
            MPEG1Video.AddBlockToDestination = function (block, dest, index, scan) {
                for (var n = 0; n < 64; n += 8, index += scan + 8) {
                    dest[index + 0] += block[n + 0];
                    dest[index + 1] += block[n + 1];
                    dest[index + 2] += block[n + 2];
                    dest[index + 3] += block[n + 3];
                    dest[index + 4] += block[n + 4];
                    dest[index + 5] += block[n + 5];
                    dest[index + 6] += block[n + 6];
                    dest[index + 7] += block[n + 7];
                }
            };
            ;
            MPEG1Video.CopyValueToDestination = function (value, dest, index, scan) {
                for (var n = 0; n < 64; n += 8, index += scan + 8) {
                    dest[index + 0] = value;
                    dest[index + 1] = value;
                    dest[index + 2] = value;
                    dest[index + 3] = value;
                    dest[index + 4] = value;
                    dest[index + 5] = value;
                    dest[index + 6] = value;
                    dest[index + 7] = value;
                }
            };
            ;
            MPEG1Video.AddValueToDestination = function (value, dest, index, scan) {
                for (var n = 0; n < 64; n += 8, index += scan + 8) {
                    dest[index + 0] += value;
                    dest[index + 1] += value;
                    dest[index + 2] += value;
                    dest[index + 3] += value;
                    dest[index + 4] += value;
                    dest[index + 5] += value;
                    dest[index + 6] += value;
                    dest[index + 7] += value;
                }
            };
            ;
            MPEG1Video.IDCT = function (block) {
                var b1, b3, b4, b6, b7, tmp1, tmp2, m0, x0, x1, x2, x3, x4, y3, y4, y5, y6, y7;
                for (var i = 0; i < 8; ++i) {
                    b1 = block[4 * 8 + i];
                    b3 = block[2 * 8 + i] + block[6 * 8 + i];
                    b4 = block[5 * 8 + i] - block[3 * 8 + i];
                    tmp1 = block[1 * 8 + i] + block[7 * 8 + i];
                    tmp2 = block[3 * 8 + i] + block[5 * 8 + i];
                    b6 = block[1 * 8 + i] - block[7 * 8 + i];
                    b7 = tmp1 + tmp2;
                    m0 = block[0 * 8 + i];
                    x4 = (b6 * 473 - b4 * 196 + 128 >> 8) - b7;
                    x0 = x4 - ((tmp1 - tmp2) * 362 + 128 >> 8);
                    x1 = m0 - b1;
                    x2 = ((block[2 * 8 + i] - block[6 * 8 + i]) * 362 + 128 >> 8) - b3;
                    x3 = m0 + b1;
                    y3 = x1 + x2;
                    y4 = x3 + b3;
                    y5 = x1 - x2;
                    y6 = x3 - b3;
                    y7 = -x0 - (b4 * 473 + b6 * 196 + 128 >> 8);
                    block[0 * 8 + i] = b7 + y4;
                    block[1 * 8 + i] = x4 + y3;
                    block[2 * 8 + i] = y5 - x0;
                    block[3 * 8 + i] = y6 - y7;
                    block[4 * 8 + i] = y6 + y7;
                    block[5 * 8 + i] = x0 + y5;
                    block[6 * 8 + i] = y3 - x4;
                    block[7 * 8 + i] = y4 - b7;
                }
                for (var i = 0; i < 64; i += 8) {
                    b1 = block[4 + i];
                    b3 = block[2 + i] + block[6 + i];
                    b4 = block[5 + i] - block[3 + i];
                    tmp1 = block[1 + i] + block[7 + i];
                    tmp2 = block[3 + i] + block[5 + i];
                    b6 = block[1 + i] - block[7 + i];
                    b7 = tmp1 + tmp2;
                    m0 = block[0 + i];
                    x4 = (b6 * 473 - b4 * 196 + 128 >> 8) - b7;
                    x0 = x4 - ((tmp1 - tmp2) * 362 + 128 >> 8);
                    x1 = m0 - b1;
                    x2 = ((block[2 + i] - block[6 + i]) * 362 + 128 >> 8) - b3;
                    x3 = m0 + b1;
                    y3 = x1 + x2;
                    y4 = x3 + b3;
                    y5 = x1 - x2;
                    y6 = x3 - b3;
                    y7 = -x0 - (b4 * 473 + b6 * 196 + 128 >> 8);
                    block[0 + i] = b7 + y4 + 128 >> 8;
                    block[1 + i] = x4 + y3 + 128 >> 8;
                    block[2 + i] = y5 - x0 + 128 >> 8;
                    block[3 + i] = y6 - y7 + 128 >> 8;
                    block[4 + i] = y6 + y7 + 128 >> 8;
                    block[5 + i] = x0 + y5 + 128 >> 8;
                    block[6 + i] = y3 - x4 + 128 >> 8;
                    block[7 + i] = y4 - b7 + 128 >> 8;
                }
            };
            MPEG1Video.PICTURE_RATE = [0, 23.976, 24, 25, 29.97, 30, 50, 59.94, 60, 0, 0, 0, 0, 0, 0, 0];
            MPEG1Video.ZIG_ZAG = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
            MPEG1Video.DEFAULT_INTRA_QUANT_MATRIX = new Uint8Array([8, 16, 19, 22, 26, 27, 29, 34, 16, 16, 22, 24, 27, 29, 34, 37, 19, 22, 26, 27, 29, 34, 34, 38, 22, 22, 26, 27, 29, 34, 37, 40, 22, 26, 27, 29, 32, 35, 40, 48, 26, 27, 29, 32, 35, 40, 48, 58, 26, 27, 29, 34, 38, 46, 56, 69, 27, 29, 35, 38, 46, 56, 69, 83]);
            MPEG1Video.DEFAULT_NON_INTRA_QUANT_MATRIX = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]);
            MPEG1Video.PREMULTIPLIER_MATRIX = new Uint8Array([32, 44, 42, 38, 32, 25, 17, 9, 44, 62, 58, 52, 44, 35, 24, 12, 42, 58, 55, 49, 42, 33, 23, 12, 38, 52, 49, 44, 38, 30, 20, 10, 32, 44, 42, 38, 32, 25, 17, 9, 25, 35, 33, 30, 25, 20, 14, 7, 17, 24, 23, 20, 17, 14, 9, 5, 9, 12, 12, 10, 9, 7, 5, 2]);
            MPEG1Video.MACROBLOCK_ADDRESS_INCREMENT = new Int16Array([1 * 3, 2 * 3, 0, 3 * 3, 4 * 3, 0, 0, 0, 1, 5 * 3, 6 * 3, 0, 7 * 3, 8 * 3, 0, 9 * 3, 10 * 3, 0, 11 * 3, 12 * 3, 0, 0, 0, 3, 0, 0, 2, 13 * 3, 14 * 3, 0, 15 * 3, 16 * 3, 0, 0, 0, 5, 0, 0, 4, 17 * 3, 18 * 3, 0, 19 * 3, 20 * 3, 0, 0, 0, 7, 0, 0, 6, 21 * 3, 22 * 3, 0, 23 * 3, 24 * 3, 0, 25 * 3, 26 * 3, 0, 27 * 3, 28 * 3, 0, -1, 29 * 3, 0, -1, 30 * 3, 0, 31 * 3, 32 * 3, 0, 33 * 3, 34 * 3, 0, 35 * 3, 36 * 3, 0, 37 * 3, 38 * 3, 0, 0, 0, 9, 0, 0, 8, 39 * 3, 40 * 3, 0, 41 * 3, 42 * 3, 0, 43 * 3, 44 * 3, 0, 45 * 3, 46 * 3, 0, 0, 0, 15, 0, 0, 14, 0, 0, 13, 0, 0, 12, 0, 0, 11, 0, 0, 10, 47 * 3, -1, 0, -1, 48 * 3, 0, 49 * 3, 50 * 3, 0, 51 * 3, 52 * 3, 0, 53 * 3, 54 * 3, 0, 55 * 3, 56 * 3, 0, 57 * 3, 58 * 3, 0, 59 * 3, 60 * 3, 0, 61 * 3, -1, 0, -1, 62 * 3, 0, 63 * 3, 64 * 3, 0, 65 * 3, 66 * 3, 0, 67 * 3, 68 * 3, 0, 69 * 3, 70 * 3, 0, 71 * 3, 72 * 3, 0, 73 * 3, 74 * 3, 0, 0, 0, 21, 0, 0, 20, 0, 0, 19, 0, 0, 18, 0, 0, 17, 0, 0, 16, 0, 0, 35, 0, 0, 34, 0, 0, 33, 0, 0, 32, 0, 0, 31, 0, 0, 30, 0, 0, 29, 0, 0, 28, 0, 0, 27, 0, 0, 26, 0, 0, 25, 0, 0, 24, 0, 0, 23, 0, 0, 22]);
            MPEG1Video.MACROBLOCK_TYPE_INTRA = new Int8Array([1 * 3, 2 * 3, 0, -1, 3 * 3, 0, 0, 0, 1, 0, 0, 17]);
            MPEG1Video.MACROBLOCK_TYPE_PREDICTIVE = new Int8Array([1 * 3, 2 * 3, 0, 3 * 3, 4 * 3, 0, 0, 0, 10, 5 * 3, 6 * 3, 0, 0, 0, 2, 7 * 3, 8 * 3, 0, 0, 0, 8, 9 * 3, 10 * 3, 0, 11 * 3, 12 * 3, 0, -1, 13 * 3, 0, 0, 0, 18, 0, 0, 26, 0, 0, 1, 0, 0, 17]);
            MPEG1Video.MACROBLOCK_TYPE_B = new Int8Array([1 * 3, 2 * 3, 0, 3 * 3, 5 * 3, 0, 4 * 3, 6 * 3, 0, 8 * 3, 7 * 3, 0, 0, 0, 12, 9 * 3, 10 * 3, 0, 0, 0, 14, 13 * 3, 14 * 3, 0, 12 * 3, 11 * 3, 0, 0, 0, 4, 0, 0, 6, 18 * 3, 16 * 3, 0, 15 * 3, 17 * 3, 0, 0, 0, 8, 0, 0, 10, -1, 19 * 3, 0, 0, 0, 1, 20 * 3, 21 * 3, 0, 0, 0, 30, 0, 0, 17, 0, 0, 22, 0, 0, 26]);
            MPEG1Video.MACROBLOCK_TYPE = [null, MPEG1Video.MACROBLOCK_TYPE_INTRA, MPEG1Video.MACROBLOCK_TYPE_PREDICTIVE, MPEG1Video.MACROBLOCK_TYPE_B];
            MPEG1Video.CODE_BLOCK_PATTERN = new Int16Array([2 * 3, 1 * 3, 0, 3 * 3, 6 * 3, 0, 4 * 3, 5 * 3, 0, 8 * 3, 11 * 3, 0, 12 * 3, 13 * 3, 0, 9 * 3, 7 * 3, 0, 10 * 3, 14 * 3, 0, 20 * 3, 19 * 3, 0, 18 * 3, 16 * 3, 0, 23 * 3, 17 * 3, 0, 27 * 3, 25 * 3, 0, 21 * 3, 28 * 3, 0, 15 * 3, 22 * 3, 0, 24 * 3, 26 * 3, 0, 0, 0, 60, 35 * 3, 40 * 3, 0, 44 * 3, 48 * 3, 0, 38 * 3, 36 * 3, 0, 42 * 3, 47 * 3, 0, 29 * 3, 31 * 3, 0, 39 * 3, 32 * 3, 0, 0, 0, 32, 45 * 3, 46 * 3, 0, 33 * 3, 41 * 3, 0, 43 * 3, 34 * 3, 0, 0, 0, 4, 30 * 3, 37 * 3, 0, 0, 0, 8, 0, 0, 16, 0, 0, 44, 50 * 3, 56 * 3, 0, 0, 0, 28, 0, 0, 52, 0, 0, 62, 61 * 3, 59 * 3, 0, 52 * 3, 60 * 3, 0, 0, 0, 1, 55 * 3, 54 * 3, 0, 0, 0, 61, 0, 0, 56, 57 * 3, 58 * 3, 0, 0, 0, 2, 0, 0, 40, 51 * 3, 62 * 3, 0, 0, 0, 48, 64 * 3, 63 * 3, 0, 49 * 3, 53 * 3, 0, 0, 0, 20, 0, 0, 12, 80 * 3, 83 * 3, 0, 0, 0, 63, 77 * 3, 75 * 3, 0, 65 * 3, 73 * 3, 0, 84 * 3, 66 * 3, 0, 0, 0, 24, 0, 0, 36, 0, 0, 3, 69 * 3, 87 * 3, 0, 81 * 3, 79 * 3, 0, 68 * 3, 71 * 3, 0, 70 * 3, 78 * 3, 0, 67 * 3, 76 * 3, 0, 72 * 3, 74 * 3, 0, 86 * 3, 85 * 3, 0, 88 * 3, 82 * 3, 0, -1, 94 * 3, 0, 95 * 3, 97 * 3, 0, 0, 0, 33, 0, 0, 9, 106 * 3, 110 * 3, 0, 102 * 3, 116 * 3, 0, 0, 0, 5, 0, 0, 10, 93 * 3, 89 * 3, 0, 0, 0, 6, 0, 0, 18, 0, 0, 17, 0, 0, 34, 113 * 3, 119 * 3, 0, 103 * 3, 104 * 3, 0, 90 * 3, 92 * 3, 0, 109 * 3, 107 * 3, 0, 117 * 3, 118 * 3, 0, 101 * 3, 99 * 3, 0, 98 * 3, 96 * 3, 0, 100 * 3, 91 * 3, 0, 114 * 3, 115 * 3, 0, 105 * 3, 108 * 3, 0, 112 * 3, 111 * 3, 0, 121 * 3, 125 * 3, 0, 0, 0, 41, 0, 0, 14, 0, 0, 21, 124 * 3, 122 * 3, 0, 120 * 3, 123 * 3, 0, 0, 0, 11, 0, 0, 19, 0, 0, 7, 0, 0, 35, 0, 0, 13, 0, 0, 50, 0, 0, 49, 0, 0, 58, 0, 0, 37, 0, 0, 25, 0, 0, 45, 0, 0, 57, 0, 0, 26, 0, 0, 29, 0, 0, 38, 0, 0, 53, 0, 0, 23, 0, 0, 43, 0, 0, 46, 0, 0, 42, 0, 0, 22, 0, 0, 54, 0, 0, 51, 0, 0, 15, 0, 0, 30, 0, 0, 39, 0, 0, 47, 0, 0, 55, 0, 0, 27, 0, 0, 59, 0, 0, 31]);
            MPEG1Video.MOTION = new Int16Array([1 * 3, 2 * 3, 0, 4 * 3, 3 * 3, 0, 0, 0, 0, 6 * 3, 5 * 3, 0, 8 * 3, 7 * 3, 0, 0, 0, -1, 0, 0, 1, 9 * 3, 10 * 3, 0, 12 * 3, 11 * 3, 0, 0, 0, 2, 0, 0, -2, 14 * 3, 15 * 3, 0, 16 * 3, 13 * 3, 0, 20 * 3, 18 * 3, 0, 0, 0, 3, 0, 0, -3, 17 * 3, 19 * 3, 0, -1, 23 * 3, 0, 27 * 3, 25 * 3, 0, 26 * 3, 21 * 3, 0, 24 * 3, 22 * 3, 0, 32 * 3, 28 * 3, 0, 29 * 3, 31 * 3, 0, -1, 33 * 3, 0, 36 * 3, 35 * 3, 0, 0, 0, -4, 30 * 3, 34 * 3, 0, 0, 0, 4, 0, 0, -7, 0, 0, 5, 37 * 3, 41 * 3, 0, 0, 0, -5, 0, 0, 7, 38 * 3, 40 * 3, 0, 42 * 3, 39 * 3, 0, 0, 0, -6, 0, 0, 6, 51 * 3, 54 * 3, 0, 50 * 3, 49 * 3, 0, 45 * 3, 46 * 3, 0, 52 * 3, 47 * 3, 0, 43 * 3, 53 * 3, 0, 44 * 3, 48 * 3, 0, 0, 0, 10, 0, 0, 9, 0, 0, 8, 0, 0, -8, 57 * 3, 66 * 3, 0, 0, 0, -9, 60 * 3, 64 * 3, 0, 56 * 3, 61 * 3, 0, 55 * 3, 62 * 3, 0, 58 * 3, 63 * 3, 0, 0, 0, -10, 59 * 3, 65 * 3, 0, 0, 0, 12, 0, 0, 16, 0, 0, 13, 0, 0, 14, 0, 0, 11, 0, 0, 15, 0, 0, -16, 0, 0, -12, 0, 0, -14, 0, 0, -15, 0, 0, -11, 0, 0, -13]);
            MPEG1Video.DCT_DC_SIZE_LUMINANCE = new Int8Array([2 * 3, 1 * 3, 0, 6 * 3, 5 * 3, 0, 3 * 3, 4 * 3, 0, 0, 0, 1, 0, 0, 2, 9 * 3, 8 * 3, 0, 7 * 3, 10 * 3, 0, 0, 0, 0, 12 * 3, 11 * 3, 0, 0, 0, 4, 0, 0, 3, 13 * 3, 14 * 3, 0, 0, 0, 5, 0, 0, 6, 16 * 3, 15 * 3, 0, 17 * 3, -1, 0, 0, 0, 7, 0, 0, 8]);
            MPEG1Video.DCT_DC_SIZE_CHROMINANCE = new Int8Array([2 * 3, 1 * 3, 0, 4 * 3, 3 * 3, 0, 6 * 3, 5 * 3, 0, 8 * 3, 7 * 3, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 10 * 3, 9 * 3, 0, 0, 0, 3, 12 * 3, 11 * 3, 0, 0, 0, 4, 14 * 3, 13 * 3, 0, 0, 0, 5, 16 * 3, 15 * 3, 0, 0, 0, 6, 17 * 3, -1, 0, 0, 0, 7, 0, 0, 8]);
            MPEG1Video.DCT_COEFF = new Int32Array([1 * 3, 2 * 3, 0, 4 * 3, 3 * 3, 0, 0, 0, 1, 7 * 3, 8 * 3, 0, 6 * 3, 5 * 3, 0, 13 * 3, 9 * 3, 0, 11 * 3, 10 * 3, 0, 14 * 3, 12 * 3, 0, 0, 0, 257, 20 * 3, 22 * 3, 0, 18 * 3, 21 * 3, 0, 16 * 3, 19 * 3, 0, 0, 0, 513, 17 * 3, 15 * 3, 0, 0, 0, 2, 0, 0, 3, 27 * 3, 25 * 3, 0, 29 * 3, 31 * 3, 0, 24 * 3, 26 * 3, 0, 32 * 3, 30 * 3, 0, 0, 0, 1025, 23 * 3, 28 * 3, 0, 0, 0, 769, 0, 0, 258, 0, 0, 1793, 0, 0, 65535, 0, 0, 1537, 37 * 3, 36 * 3, 0, 0, 0, 1281, 35 * 3, 34 * 3, 0, 39 * 3, 38 * 3, 0, 33 * 3, 42 * 3, 0, 40 * 3, 41 * 3, 0, 52 * 3, 50 * 3, 0, 54 * 3, 53 * 3, 0, 48 * 3, 49 * 3, 0, 43 * 3, 45 * 3, 0, 46 * 3, 44 * 3, 0, 0, 0, 2049, 0, 0, 4, 0, 0, 514, 0, 0, 2305, 51 * 3, 47 * 3, 0, 55 * 3, 57 * 3, 0, 60 * 3, 56 * 3, 0, 59 * 3, 58 * 3, 0, 61 * 3, 62 * 3, 0, 0, 0, 2561, 0, 0, 3329, 0, 0, 6, 0, 0, 259, 0, 0, 5, 0, 0, 770, 0, 0, 2817, 0, 0, 3073, 76 * 3, 75 * 3, 0, 67 * 3, 70 * 3, 0, 73 * 3, 71 * 3, 0, 78 * 3, 74 * 3, 0, 72 * 3, 77 * 3, 0, 69 * 3, 64 * 3, 0, 68 * 3, 63 * 3, 0, 66 * 3, 65 * 3, 0, 81 * 3, 87 * 3, 0, 91 * 3, 80 * 3, 0, 82 * 3, 79 * 3, 0, 83 * 3, 86 * 3, 0, 93 * 3, 92 * 3, 0, 84 * 3, 85 * 3, 0, 90 * 3, 94 * 3, 0, 88 * 3, 89 * 3, 0, 0, 0, 515, 0, 0, 260, 0, 0, 7, 0, 0, 1026, 0, 0, 1282, 0, 0, 4097, 0, 0, 3841, 0, 0, 3585, 105 * 3, 107 * 3, 0, 111 * 3, 114 * 3, 0, 104 * 3, 97 * 3, 0, 125 * 3, 119 * 3, 0, 96 * 3, 98 * 3, 0, -1, 123 * 3, 0, 95 * 3, 101 * 3, 0, 106 * 3, 121 * 3, 0, 99 * 3, 102 * 3, 0, 113 * 3, 103 * 3, 0, 112 * 3, 116 * 3, 0, 110 * 3, 100 * 3, 0, 124 * 3, 115 * 3, 0, 117 * 3, 122 * 3, 0, 109 * 3, 118 * 3, 0, 120 * 3, 108 * 3, 0, 127 * 3, 136 * 3, 0, 139 * 3, 140 * 3, 0, 130 * 3, 126 * 3, 0, 145 * 3, 146 * 3, 0, 128 * 3, 129 * 3, 0, 0, 0, 2050, 132 * 3, 134 * 3, 0, 155 * 3, 154 * 3, 0, 0, 0, 8, 137 * 3, 133 * 3, 0, 143 * 3, 144 * 3, 0, 151 * 3, 138 * 3, 0, 142 * 3, 141 * 3, 0, 0, 0, 10, 0, 0, 9, 0, 0, 11, 0, 0, 5377, 0, 0, 1538, 0, 0, 771, 0, 0, 5121, 0, 0, 1794, 0, 0, 4353, 0, 0, 4609, 0, 0, 4865, 148 * 3, 152 * 3, 0, 0, 0, 1027, 153 * 3, 150 * 3, 0, 0, 0, 261, 131 * 3, 135 * 3, 0, 0, 0, 516, 149 * 3, 147 * 3, 0, 172 * 3, 173 * 3, 0, 162 * 3, 158 * 3, 0, 170 * 3, 161 * 3, 0, 168 * 3, 166 * 3, 0, 157 * 3, 179 * 3, 0, 169 * 3, 167 * 3, 0, 174 * 3, 171 * 3, 0, 178 * 3, 177 * 3, 0, 156 * 3, 159 * 3, 0, 164 * 3, 165 * 3, 0, 183 * 3, 182 * 3, 0, 175 * 3, 176 * 3, 0, 0, 0, 263, 0, 0, 2562, 0, 0, 2306, 0, 0, 5633, 0, 0, 5889, 0, 0, 6401, 0, 0, 6145, 0, 0, 1283, 0, 0, 772, 0, 0, 13, 0, 0, 12, 0, 0, 14, 0, 0, 15, 0, 0, 517, 0, 0, 6657, 0, 0, 262, 180 * 3, 181 * 3, 0, 160 * 3, 163 * 3, 0, 196 * 3, 199 * 3, 0, 0, 0, 27, 203 * 3, 185 * 3, 0, 202 * 3, 201 * 3, 0, 0, 0, 19, 0, 0, 22, 197 * 3, 207 * 3, 0, 0, 0, 18, 191 * 3, 192 * 3, 0, 188 * 3, 190 * 3, 0, 0, 0, 20, 184 * 3, 194 * 3, 0, 0, 0, 21, 186 * 3, 193 * 3, 0, 0, 0, 23, 204 * 3, 198 * 3, 0, 0, 0, 25, 0, 0, 24, 200 * 3, 205 * 3, 0, 0, 0, 31, 0, 0, 30, 0, 0, 28, 0, 0, 29, 0, 0, 26, 0, 0, 17, 0, 0, 16, 189 * 3, 206 * 3, 0, 187 * 3, 195 * 3, 0, 218 * 3, 211 * 3, 0, 0, 0, 37, 215 * 3, 216 * 3, 0, 0, 0, 36, 210 * 3, 212 * 3, 0, 0, 0, 34, 213 * 3, 209 * 3, 0, 221 * 3, 222 * 3, 0, 219 * 3, 208 * 3, 0, 217 * 3, 214 * 3, 0, 223 * 3, 220 * 3, 0, 0, 0, 35, 0, 0, 267, 0, 0, 40, 0, 0, 268, 0, 0, 266, 0, 0, 32, 0, 0, 264, 0, 0, 265, 0, 0, 38, 0, 0, 269, 0, 0, 270, 0, 0, 33, 0, 0, 39, 0, 0, 7937, 0, 0, 6913, 0, 0, 7681, 0, 0, 4098, 0, 0, 7425, 0, 0, 7169, 0, 0, 271, 0, 0, 274, 0, 0, 273, 0, 0, 272, 0, 0, 1539, 0, 0, 2818, 0, 0, 3586, 0, 0, 3330, 0, 0, 3074, 0, 0, 3842]);
            MPEG1Video.PICTURE_TYPE = {
                INTRA: 1,
                PREDICTIVE: 2,
                B: 3
            };
            MPEG1Video.START = {
                SEQUENCE: 179,
                SLICE_FIRST: 1,
                SLICE_LAST: 175,
                PICTURE: 0,
                EXTENSION: 181,
                USER_DATA: 178
            };
            return MPEG1Video;
        }(Decoder.Base));
        Decoder.MPEG1Video = MPEG1Video;
        __reflect(MPEG1Video.prototype,"JSMpeg.Decoder.MPEG1Video",[]); 
        var MP2Audio = /** @class */ (function (_super) {
            __extends(MP2Audio, _super);
            function MP2Audio(options) {
                var _this = _super.call(this, options) || this;
                var bufferSize = options.audioBufferSize || 128 * 1024;
                var bufferMode = options.streaming ? JSMpeg.BitBuffer.MODE.EVICT : JSMpeg.BitBuffer.MODE.EXPAND;
                _this.bits = new JSMpeg.BitBuffer(bufferSize, bufferMode);
                _this.left = new Float32Array(1152);
                _this.right = new Float32Array(1152);
                _this.sampleRate = 44100;
                _this.D = new Float32Array(1024);
                _this.D.set(MP2Audio.SYNTHESIS_WINDOW, 0);
                _this.D.set(MP2Audio.SYNTHESIS_WINDOW, 512);
                _this.V = new Float32Array(1024);
                _this.U = new Int32Array(32);
                _this.VPos = 0;
                _this.allocation = [new Array(32), new Array(32)];
                _this.scaleFactorInfo = [new Uint8Array(32), new Uint8Array(32)];
                _this.scaleFactor = [new Array(32), new Array(32)];
                _this.sample = [new Array(32), new Array(32)];
                for (var j = 0; j < 2; j++) {
                    for (var i = 0; i < 32; i++) {
                        _this.scaleFactor[j][i] = [0, 0, 0];
                        _this.sample[j][i] = [0, 0, 0];
                    }
                }
                return _this;
            }
            MP2Audio.prototype.decode = function () {
                var pos = this.bits.index >> 3;
                if (pos >= this.bits.byteLength) {
                    return false;
                }
                var decoded = this.decodeFrame(this.left, this.right);
                this.bits.index = pos + decoded << 3;
                if (!decoded) {
                    return false;
                }
                if (this.destination) {
                    this.destination.play(this.sampleRate, this.left, this.right);
                }
                this.advanceDecodedTime(this.left.length / this.sampleRate);
                return true;
            };
            ;
            MP2Audio.prototype.getCurrentTime = function () {
                var enqueuedTime = this.destination ? this.destination.enqueuedTime : 0;
                return this.decodedTime - enqueuedTime;
            };
            ;
            MP2Audio.prototype.decodeFrame = function (left, right) {
                var sync = this.bits.read(11), version = this.bits.read(2), layer = this.bits.read(2), hasCRC = !this.bits.read(1);
                if (sync !== MP2Audio.FRAME_SYNC || version !== MP2Audio.VERSION.MPEG_1 || layer !== MP2Audio.LAYER.II) {
                    return 0;
                }
                var bitrateIndex = this.bits.read(4) - 1;
                if (bitrateIndex > 13) {
                    return 0;
                }
                var sampleRateIndex = this.bits.read(2);
                var sampleRate = MP2Audio.SAMPLE_RATE[sampleRateIndex];
                if (sampleRateIndex === 3) {
                    return 0;
                }
                if (version === MP2Audio.VERSION.MPEG_2) {
                    sampleRateIndex += 4;
                    bitrateIndex += 14;
                }
                var padding = this.bits.read(1), privat = this.bits.read(1), mode = this.bits.read(2);
                var bound = 0;
                if (mode === MP2Audio.MODE.JOINT_STEREO) {
                    bound = this.bits.read(2) + 1 << 2;
                }
                else {
                    this.bits.skip(2);
                    bound = mode === MP2Audio.MODE.MONO ? 0 : 32;
                }
                this.bits.skip(4);
                if (hasCRC) {
                    this.bits.skip(16);
                }
                var bitrate = MP2Audio.BIT_RATE[bitrateIndex], sampleRate = MP2Audio.SAMPLE_RATE[sampleRateIndex], frameSize = 144e3 * bitrate / sampleRate + padding | 0;
                var tab3 = 0;
                var sblimit = 0;
                if (version === MP2Audio.VERSION.MPEG_2) {
                    tab3 = 2;
                    sblimit = 30;
                }
                else {
                    var tab1 = mode === MP2Audio.MODE.MONO ? 0 : 1;
                    var tab2 = MP2Audio.QUANT_LUT_STEP_1[tab1][bitrateIndex];
                    tab3 = MP2Audio.QUANT_LUT_STEP_2[tab2][sampleRateIndex];
                    sblimit = tab3 & 63;
                    tab3 >>= 6;
                }
                if (bound > sblimit) {
                    bound = sblimit;
                }
                for (var sb = 0; sb < bound; sb++) {
                    this.allocation[0][sb] = this.readAllocation(sb, tab3);
                    this.allocation[1][sb] = this.readAllocation(sb, tab3);
                }
                for (var sb = bound; sb < sblimit; sb++) {
                    this.allocation[0][sb] = this.allocation[1][sb] = this.readAllocation(sb, tab3);
                }
                var channels = mode === MP2Audio.MODE.MONO ? 1 : 2;
                for (var sb = 0; sb < sblimit; sb++) {
                    for (ch = 0; ch < channels; ch++) {
                        if (this.allocation[ch][sb]) {
                            this.scaleFactorInfo[ch][sb] = this.bits.read(2);
                        }
                    }
                    if (mode === MP2Audio.MODE.MONO) {
                        this.scaleFactorInfo[1][sb] = this.scaleFactorInfo[0][sb];
                    }
                }
                for (var sb = 0; sb < sblimit; sb++) {
                    for (var ch = 0; ch < channels; ch++) {
                        if (this.allocation[ch][sb]) {
                            var sf = this.scaleFactor[ch][sb];
                            switch (this.scaleFactorInfo[ch][sb]) {
                                case 0:
                                    sf[0] = this.bits.read(6);
                                    sf[1] = this.bits.read(6);
                                    sf[2] = this.bits.read(6);
                                    break;
                                case 1:
                                    sf[0] = sf[1] = this.bits.read(6);
                                    sf[2] = this.bits.read(6);
                                    break;
                                case 2:
                                    sf[0] = sf[1] = sf[2] = this.bits.read(6);
                                    break;
                                case 3:
                                    sf[0] = this.bits.read(6);
                                    sf[1] = sf[2] = this.bits.read(6);
                                    break;
                            }
                        }
                    }
                    if (mode === MP2Audio.MODE.MONO) {
                        this.scaleFactor[1][sb][0] = this.scaleFactor[0][sb][0];
                        this.scaleFactor[1][sb][1] = this.scaleFactor[0][sb][1];
                        this.scaleFactor[1][sb][2] = this.scaleFactor[0][sb][2];
                    }
                }
                var outPos = 0;
                for (var part = 0; part < 3; part++) {
                    for (var granule = 0; granule < 4; granule++) {
                        for (var sb = 0; sb < bound; sb++) {
                            this.readSamples(0, sb, part);
                            this.readSamples(1, sb, part);
                        }
                        for (var sb = bound; sb < sblimit; sb++) {
                            this.readSamples(0, sb, part);
                            this.sample[1][sb][0] = this.sample[0][sb][0];
                            this.sample[1][sb][1] = this.sample[0][sb][1];
                            this.sample[1][sb][2] = this.sample[0][sb][2];
                        }
                        for (var sb = sblimit; sb < 32; sb++) {
                            this.sample[0][sb][0] = 0;
                            this.sample[0][sb][1] = 0;
                            this.sample[0][sb][2] = 0;
                            this.sample[1][sb][0] = 0;
                            this.sample[1][sb][1] = 0;
                            this.sample[1][sb][2] = 0;
                        }
                        for (var p = 0; p < 3; p++) {
                            this.VPos = this.VPos - 64 & 1023;
                            for (var ch = 0; ch < 2; ch++) {
                                MP2Audio.MatrixTransform(this.sample[ch], p, this.V, this.VPos);
                                JSMpeg.Fill(this.U, 0);
                                var dIndex = 512 - (this.VPos >> 1);
                                var vIndex = this.VPos % 128 >> 1;
                                while (vIndex < 1024) {
                                    for (var i = 0; i < 32; ++i) {
                                        this.U[i] += this.D[dIndex++] * this.V[vIndex++];
                                    }
                                    vIndex += 128 - 32;
                                    dIndex += 64 - 32;
                                }
                                vIndex = 128 - 32 + 1024 - vIndex;
                                dIndex -= 512 - 32;
                                while (vIndex < 1024) {
                                    for (var i = 0; i < 32; ++i) {
                                        this.U[i] += this.D[dIndex++] * this.V[vIndex++];
                                    }
                                    vIndex += 128 - 32;
                                    dIndex += 64 - 32;
                                }
                                var outChannel = ch === 0 ? left : right;
                                for (var j = 0; j < 32; j++) {
                                    outChannel[outPos + j] = this.U[j] / 2147418112;
                                }
                            }
                            outPos += 32;
                        }
                    }
                }
                this.sampleRate = sampleRate;
                return frameSize;
            };
            ;
            MP2Audio.prototype.readAllocation = function (sb, tab3) {
                var tab4 = MP2Audio.QUANT_LUT_STEP_3[tab3][sb];
                var qtab = MP2Audio.QUANT_LUT_STEP4[tab4 & 15][this.bits.read(tab4 >> 4)];
                return qtab ? MP2Audio.QUANT_TAB[qtab - 1] : 0;
            };
            ;
            MP2Audio.prototype.readSamples = function (ch, sb, part) {
                var q = this.allocation[ch][sb], sf = this.scaleFactor[ch][sb][part], sample = this.sample[ch][sb], val = 0;
                if (!q) {
                    sample[0] = sample[1] = sample[2] = 0;
                    return;
                }
                if (sf === 63) {
                    sf = 0;
                }
                else {
                    var shift = sf / 3 | 0;
                    sf = MP2Audio.SCALEFACTOR_BASE[sf % 3] + (1 << shift >> 1) >> shift;
                }
                var adj = q.levels;
                if (q.group) {
                    val = this.bits.read(q.bits);
                    sample[0] = val % adj;
                    val = val / adj | 0;
                    sample[1] = val % adj;
                    sample[2] = val / adj | 0;
                }
                else {
                    sample[0] = this.bits.read(q.bits);
                    sample[1] = this.bits.read(q.bits);
                    sample[2] = this.bits.read(q.bits);
                }
                var scale = 65536 / (adj + 1) | 0;
                adj = (adj + 1 >> 1) - 1;
                val = (adj - sample[0]) * scale;
                sample[0] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
                val = (adj - sample[1]) * scale;
                sample[1] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
                val = (adj - sample[2]) * scale;
                sample[2] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
            };
            ;
            MP2Audio.MatrixTransform = function (s, ss, d, dp) {
                var t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33;
                t01 = s[0][ss] + s[31][ss];
                t02 = (s[0][ss] - s[31][ss]) * .500602998235;
                t03 = s[1][ss] + s[30][ss];
                t04 = (s[1][ss] - s[30][ss]) * .505470959898;
                t05 = s[2][ss] + s[29][ss];
                t06 = (s[2][ss] - s[29][ss]) * .515447309923;
                t07 = s[3][ss] + s[28][ss];
                t08 = (s[3][ss] - s[28][ss]) * .53104259109;
                t09 = s[4][ss] + s[27][ss];
                t10 = (s[4][ss] - s[27][ss]) * .553103896034;
                t11 = s[5][ss] + s[26][ss];
                t12 = (s[5][ss] - s[26][ss]) * .582934968206;
                t13 = s[6][ss] + s[25][ss];
                t14 = (s[6][ss] - s[25][ss]) * .622504123036;
                t15 = s[7][ss] + s[24][ss];
                t16 = (s[7][ss] - s[24][ss]) * .674808341455;
                t17 = s[8][ss] + s[23][ss];
                t18 = (s[8][ss] - s[23][ss]) * .744536271002;
                t19 = s[9][ss] + s[22][ss];
                t20 = (s[9][ss] - s[22][ss]) * .839349645416;
                t21 = s[10][ss] + s[21][ss];
                t22 = (s[10][ss] - s[21][ss]) * .972568237862;
                t23 = s[11][ss] + s[20][ss];
                t24 = (s[11][ss] - s[20][ss]) * 1.16943993343;
                t25 = s[12][ss] + s[19][ss];
                t26 = (s[12][ss] - s[19][ss]) * 1.48416461631;
                t27 = s[13][ss] + s[18][ss];
                t28 = (s[13][ss] - s[18][ss]) * 2.05778100995;
                t29 = s[14][ss] + s[17][ss];
                t30 = (s[14][ss] - s[17][ss]) * 3.40760841847;
                t31 = s[15][ss] + s[16][ss];
                t32 = (s[15][ss] - s[16][ss]) * 10.1900081235;
                t33 = t01 + t31;
                t31 = (t01 - t31) * .502419286188;
                t01 = t03 + t29;
                t29 = (t03 - t29) * .52249861494;
                t03 = t05 + t27;
                t27 = (t05 - t27) * .566944034816;
                t05 = t07 + t25;
                t25 = (t07 - t25) * .64682178336;
                t07 = t09 + t23;
                t23 = (t09 - t23) * .788154623451;
                t09 = t11 + t21;
                t21 = (t11 - t21) * 1.06067768599;
                t11 = t13 + t19;
                t19 = (t13 - t19) * 1.72244709824;
                t13 = t15 + t17;
                t17 = (t15 - t17) * 5.10114861869;
                t15 = t33 + t13;
                t13 = (t33 - t13) * .509795579104;
                t33 = t01 + t11;
                t01 = (t01 - t11) * .601344886935;
                t11 = t03 + t09;
                t09 = (t03 - t09) * .899976223136;
                t03 = t05 + t07;
                t07 = (t05 - t07) * 2.56291544774;
                t05 = t15 + t03;
                t15 = (t15 - t03) * .541196100146;
                t03 = t33 + t11;
                t11 = (t33 - t11) * 1.30656296488;
                t33 = t05 + t03;
                t05 = (t05 - t03) * .707106781187;
                t03 = t15 + t11;
                t15 = (t15 - t11) * .707106781187;
                t03 += t15;
                t11 = t13 + t07;
                t13 = (t13 - t07) * .541196100146;
                t07 = t01 + t09;
                t09 = (t01 - t09) * 1.30656296488;
                t01 = t11 + t07;
                t07 = (t11 - t07) * .707106781187;
                t11 = t13 + t09;
                t13 = (t13 - t09) * .707106781187;
                t11 += t13;
                t01 += t11;
                t11 += t07;
                t07 += t13;
                t09 = t31 + t17;
                t31 = (t31 - t17) * .509795579104;
                t17 = t29 + t19;
                t29 = (t29 - t19) * .601344886935;
                t19 = t27 + t21;
                t21 = (t27 - t21) * .899976223136;
                t27 = t25 + t23;
                t23 = (t25 - t23) * 2.56291544774;
                t25 = t09 + t27;
                t09 = (t09 - t27) * .541196100146;
                t27 = t17 + t19;
                t19 = (t17 - t19) * 1.30656296488;
                t17 = t25 + t27;
                t27 = (t25 - t27) * .707106781187;
                t25 = t09 + t19;
                t19 = (t09 - t19) * .707106781187;
                t25 += t19;
                t09 = t31 + t23;
                t31 = (t31 - t23) * .541196100146;
                t23 = t29 + t21;
                t21 = (t29 - t21) * 1.30656296488;
                t29 = t09 + t23;
                t23 = (t09 - t23) * .707106781187;
                t09 = t31 + t21;
                t31 = (t31 - t21) * .707106781187;
                t09 += t31;
                t29 += t09;
                t09 += t23;
                t23 += t31;
                t17 += t29;
                t29 += t25;
                t25 += t09;
                t09 += t27;
                t27 += t23;
                t23 += t19;
                t19 += t31;
                t21 = t02 + t32;
                t02 = (t02 - t32) * .502419286188;
                t32 = t04 + t30;
                t04 = (t04 - t30) * .52249861494;
                t30 = t06 + t28;
                t28 = (t06 - t28) * .566944034816;
                t06 = t08 + t26;
                t08 = (t08 - t26) * .64682178336;
                t26 = t10 + t24;
                t10 = (t10 - t24) * .788154623451;
                t24 = t12 + t22;
                t22 = (t12 - t22) * 1.06067768599;
                t12 = t14 + t20;
                t20 = (t14 - t20) * 1.72244709824;
                t14 = t16 + t18;
                t16 = (t16 - t18) * 5.10114861869;
                t18 = t21 + t14;
                t14 = (t21 - t14) * .509795579104;
                t21 = t32 + t12;
                t32 = (t32 - t12) * .601344886935;
                t12 = t30 + t24;
                t24 = (t30 - t24) * .899976223136;
                t30 = t06 + t26;
                t26 = (t06 - t26) * 2.56291544774;
                t06 = t18 + t30;
                t18 = (t18 - t30) * .541196100146;
                t30 = t21 + t12;
                t12 = (t21 - t12) * 1.30656296488;
                t21 = t06 + t30;
                t30 = (t06 - t30) * .707106781187;
                t06 = t18 + t12;
                t12 = (t18 - t12) * .707106781187;
                t06 += t12;
                t18 = t14 + t26;
                t26 = (t14 - t26) * .541196100146;
                t14 = t32 + t24;
                t24 = (t32 - t24) * 1.30656296488;
                t32 = t18 + t14;
                t14 = (t18 - t14) * .707106781187;
                t18 = t26 + t24;
                t24 = (t26 - t24) * .707106781187;
                t18 += t24;
                t32 += t18;
                t18 += t14;
                t26 = t14 + t24;
                t14 = t02 + t16;
                t02 = (t02 - t16) * .509795579104;
                t16 = t04 + t20;
                t04 = (t04 - t20) * .601344886935;
                t20 = t28 + t22;
                t22 = (t28 - t22) * .899976223136;
                t28 = t08 + t10;
                t10 = (t08 - t10) * 2.56291544774;
                t08 = t14 + t28;
                t14 = (t14 - t28) * .541196100146;
                t28 = t16 + t20;
                t20 = (t16 - t20) * 1.30656296488;
                t16 = t08 + t28;
                t28 = (t08 - t28) * .707106781187;
                t08 = t14 + t20;
                t20 = (t14 - t20) * .707106781187;
                t08 += t20;
                t14 = t02 + t10;
                t02 = (t02 - t10) * .541196100146;
                t10 = t04 + t22;
                t22 = (t04 - t22) * 1.30656296488;
                t04 = t14 + t10;
                t10 = (t14 - t10) * .707106781187;
                t14 = t02 + t22;
                t02 = (t02 - t22) * .707106781187;
                t14 += t02;
                t04 += t14;
                t14 += t10;
                t10 += t02;
                t16 += t04;
                t04 += t08;
                t08 += t14;
                t14 += t28;
                t28 += t10;
                t10 += t20;
                t20 += t02;
                t21 += t16;
                t16 += t32;
                t32 += t04;
                t04 += t06;
                t06 += t08;
                t08 += t18;
                t18 += t14;
                t14 += t30;
                t30 += t28;
                t28 += t26;
                t26 += t10;
                t10 += t12;
                t12 += t20;
                t20 += t24;
                t24 += t02;
                d[dp + 48] = -t33;
                d[dp + 49] = d[dp + 47] = -t21;
                d[dp + 50] = d[dp + 46] = -t17;
                d[dp + 51] = d[dp + 45] = -t16;
                d[dp + 52] = d[dp + 44] = -t01;
                d[dp + 53] = d[dp + 43] = -t32;
                d[dp + 54] = d[dp + 42] = -t29;
                d[dp + 55] = d[dp + 41] = -t04;
                d[dp + 56] = d[dp + 40] = -t03;
                d[dp + 57] = d[dp + 39] = -t06;
                d[dp + 58] = d[dp + 38] = -t25;
                d[dp + 59] = d[dp + 37] = -t08;
                d[dp + 60] = d[dp + 36] = -t11;
                d[dp + 61] = d[dp + 35] = -t18;
                d[dp + 62] = d[dp + 34] = -t09;
                d[dp + 63] = d[dp + 33] = -t14;
                d[dp + 32] = -t05;
                d[dp + 0] = t05;
                d[dp + 31] = -t30;
                d[dp + 1] = t30;
                d[dp + 30] = -t27;
                d[dp + 2] = t27;
                d[dp + 29] = -t28;
                d[dp + 3] = t28;
                d[dp + 28] = -t07;
                d[dp + 4] = t07;
                d[dp + 27] = -t26;
                d[dp + 5] = t26;
                d[dp + 26] = -t23;
                d[dp + 6] = t23;
                d[dp + 25] = -t10;
                d[dp + 7] = t10;
                d[dp + 24] = -t15;
                d[dp + 8] = t15;
                d[dp + 23] = -t12;
                d[dp + 9] = t12;
                d[dp + 22] = -t19;
                d[dp + 10] = t19;
                d[dp + 21] = -t20;
                d[dp + 11] = t20;
                d[dp + 20] = -t13;
                d[dp + 12] = t13;
                d[dp + 19] = -t24;
                d[dp + 13] = t24;
                d[dp + 18] = -t31;
                d[dp + 14] = t31;
                d[dp + 17] = -t02;
                d[dp + 15] = t02;
                d[dp + 16] = 0;
            };
            ;
            MP2Audio.FRAME_SYNC = 2047;
            MP2Audio.VERSION = {
                MPEG_2_5: 0,
                MPEG_2: 2,
                MPEG_1: 3
            };
            MP2Audio.LAYER = {
                III: 1,
                II: 2,
                I: 3
            };
            MP2Audio.MODE = {
                STEREO: 0,
                JOINT_STEREO: 1,
                DUAL_CHANNEL: 2,
                MONO: 3
            };
            MP2Audio.SAMPLE_RATE = new Uint16Array([44100, 48e3, 32e3, 0, 22050, 24e3, 16e3, 0]);
            MP2Audio.BIT_RATE = new Uint16Array([32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160]);
            MP2Audio.SCALEFACTOR_BASE = new Uint32Array([33554432, 26632170, 21137968]);
            MP2Audio.SYNTHESIS_WINDOW = new Float32Array([0, -.5, -.5, -.5, -.5, -.5, -.5, -1, -1, -1, -1, -1.5, -1.5, -2, -2, -2.5, -2.5, -3, -3.5, -3.5, -4, -4.5, -5, -5.5, -6.5, -7, -8, -8.5, -9.5, -10.5, -12, -13, -14.5, -15.5, -17.5, -19, -20.5, -22.5, -24.5, -26.5, -29, -31.5, -34, -36.5, -39.5, -42.5, -45.5, -48.5, -52, -55.5, -58.5, -62.5, -66, -69.5, -73.5, -77, -80.5, -84.5, -88, -91.5, -95, -98, -101, -104, 106.5, 109, 111, 112.5, 113.5, 114, 114, 113.5, 112, 110.5, 107.5, 104, 100, 94.5, 88.5, 81.5, 73, 63.5, 53, 41.5, 28.5, 14.5, -1, -18, -36, -55.5, -76.5, -98.5, -122, -147, -173.5, -200.5, -229.5, -259.5, -290.5, -322.5, -355.5, -389.5, -424, -459.5, -495.5, -532, -568.5, -605, -641.5, -678, -714, -749, -783.5, -817, -849, -879.5, -908.5, -935, -959.5, -981, -1000.5, -1016, -1028.5, -1037.5, -1042.5, -1043.5, -1040, -1031.5, 1018.5, 1e3, 976, 946.5, 911, 869.5, 822, 767.5, 707, 640, 565.5, 485, 397, 302.5, 201, 92.5, -22.5, -144, -272.5, -407, -547.5, -694, -846, -1003, -1165, -1331.5, -1502, -1675.5, -1852.5, -2031.5, -2212.5, -2394, -2576.5, -2758.5, -2939.5, -3118.5, -3294.5, -3467.5, -3635.5, -3798.5, -3955, -4104.5, -4245.5, -4377.5, -4499, -4609.5, -4708, -4792.5, -4863.5, -4919, -4958, -4979.5, -4983, -4967.5, -4931.5, -4875, -4796, -4694.5, -4569.5, -4420, -4246, -4046, -3820, -3567, 3287, 2979.5, 2644, 2280.5, 1888, 1467.5, 1018.5, 541, 35, -499, -1061, -1650, -2266.5, -2909, -3577, -4270, -4987.5, -5727.5, -6490, -7274, -8077.5, -8899.5, -9739, -10594.5, -11464.5, -12347, -13241, -14144.5, -15056, -15973.5, -16895.5, -17820, -18744.5, -19668, -20588, -21503, -22410.5, -23308.5, -24195, -25068.5, -25926.5, -26767, -27589, -28389, -29166.5, -29919, -30644.5, -31342, -32009.5, -32645, -33247, -33814.5, -34346, -34839.5, -35295, -35710, -36084.5, -36417.5, -36707.5, -36954, -37156.5, -37315, -37428, -37496, 37519, 37496, 37428, 37315, 37156.5, 36954, 36707.5, 36417.5, 36084.5, 35710, 35295, 34839.5, 34346, 33814.5, 33247, 32645, 32009.5, 31342, 30644.5, 29919, 29166.5, 28389, 27589, 26767, 25926.5, 25068.5, 24195, 23308.5, 22410.5, 21503, 20588, 19668, 18744.5, 17820, 16895.5, 15973.5, 15056, 14144.5, 13241, 12347, 11464.5, 10594.5, 9739, 8899.5, 8077.5, 7274, 6490, 5727.5, 4987.5, 4270, 3577, 2909, 2266.5, 1650, 1061, 499, -35, -541, -1018.5, -1467.5, -1888, -2280.5, -2644, -2979.5, 3287, 3567, 3820, 4046, 4246, 4420, 4569.5, 4694.5, 4796, 4875, 4931.5, 4967.5, 4983, 4979.5, 4958, 4919, 4863.5, 4792.5, 4708, 4609.5, 4499, 4377.5, 4245.5, 4104.5, 3955, 3798.5, 3635.5, 3467.5, 3294.5, 3118.5, 2939.5, 2758.5, 2576.5, 2394, 2212.5, 2031.5, 1852.5, 1675.5, 1502, 1331.5, 1165, 1003, 846, 694, 547.5, 407, 272.5, 144, 22.5, -92.5, -201, -302.5, -397, -485, -565.5, -640, -707, -767.5, -822, -869.5, -911, -946.5, -976, -1e3, 1018.5, 1031.5, 1040, 1043.5, 1042.5, 1037.5, 1028.5, 1016, 1000.5, 981, 959.5, 935, 908.5, 879.5, 849, 817, 783.5, 749, 714, 678, 641.5, 605, 568.5, 532, 495.5, 459.5, 424, 389.5, 355.5, 322.5, 290.5, 259.5, 229.5, 200.5, 173.5, 147, 122, 98.5, 76.5, 55.5, 36, 18, 1, -14.5, -28.5, -41.5, -53, -63.5, -73, -81.5, -88.5, -94.5, -100, -104, -107.5, -110.5, -112, -113.5, -114, -114, -113.5, -112.5, -111, -109, 106.5, 104, 101, 98, 95, 91.5, 88, 84.5, 80.5, 77, 73.5, 69.5, 66, 62.5, 58.5, 55.5, 52, 48.5, 45.5, 42.5, 39.5, 36.5, 34, 31.5, 29, 26.5, 24.5, 22.5, 20.5, 19, 17.5, 15.5, 14.5, 13, 12, 10.5, 9.5, 8.5, 8, 7, 6.5, 5.5, 5, 4.5, 4, 3.5, 3.5, 3, 2.5, 2.5, 2, 2, 1.5, 1.5, 1, 1, 1, 1, .5, .5, .5, .5, .5, .5]);
            MP2Audio.QUANT_LUT_STEP_1 = [[0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2]];
            MP2Audio.QUANT_TAB_ABCD = {
                A: 27 | 64,
                B: 30 | 64,
                C: 8,
                D: 12
            };
            MP2Audio.QUANT_LUT_STEP_2 = [[MP2Audio.QUANT_TAB_ABCD.C, MP2Audio.QUANT_TAB_ABCD.C, MP2Audio.QUANT_TAB_ABCD.D], [MP2Audio.QUANT_TAB_ABCD.A, MP2Audio.QUANT_TAB_ABCD.A, MP2Audio.QUANT_TAB_ABCD.A], [MP2Audio.QUANT_TAB_ABCD.B, MP2Audio.QUANT_TAB_ABCD.A, MP2Audio.QUANT_TAB_ABCD.B]];
            MP2Audio.QUANT_LUT_STEP_3 = [[68, 68, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52], [67, 67, 67, 66, 66, 66, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32], [69, 69, 69, 69, 52, 52, 52, 52, 52, 52, 52, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36]];
            MP2Audio.QUANT_LUT_STEP4 = [[0, 1, 2, 17], [0, 1, 2, 3, 4, 5, 6, 17], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17], [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]];
            MP2Audio.QUANT_TAB = [{
                    levels: 3,
                    group: 1,
                    bits: 5
                },
                {
                    levels: 5,
                    group: 1,
                    bits: 7
                },
                {
                    levels: 7,
                    group: 0,
                    bits: 3
                },
                {
                    levels: 9,
                    group: 1,
                    bits: 10
                },
                {
                    levels: 15,
                    group: 0,
                    bits: 4
                },
                {
                    levels: 31,
                    group: 0,
                    bits: 5
                },
                {
                    levels: 63,
                    group: 0,
                    bits: 6
                },
                {
                    levels: 127,
                    group: 0,
                    bits: 7
                },
                {
                    levels: 255,
                    group: 0,
                    bits: 8
                },
                {
                    levels: 511,
                    group: 0,
                    bits: 9
                },
                {
                    levels: 1023,
                    group: 0,
                    bits: 10
                },
                {
                    levels: 2047,
                    group: 0,
                    bits: 11
                },
                {
                    levels: 4095,
                    group: 0,
                    bits: 12
                },
                {
                    levels: 8191,
                    group: 0,
                    bits: 13
                },
                {
                    levels: 16383,
                    group: 0,
                    bits: 14
                },
                {
                    levels: 32767,
                    group: 0,
                    bits: 15
                },
                {
                    levels: 65535,
                    group: 0,
                    bits: 16
                }];
            return MP2Audio;
        }(Decoder.Base));
        Decoder.MP2Audio = MP2Audio;
        __reflect(MP2Audio.prototype,"JSMpeg.Decoder.MP2Audio",[]); 
    })(Decoder = JSMpeg.Decoder || (JSMpeg.Decoder = {}));
    window["Decoder"] = Decoder;
    var Renderer = window['Renderer']; 
    var Renderer;
    (function (Renderer) {
        var WebGL = /** @class */ (function () {
            function WebGL(options) {
                this.canvas = options.canvas || document.createElement("canvas");
                this.width = this.canvas.width;
                this.height = this.canvas.height;
                this.enabled = true;
                var contextCreateOptions = {
                    preserveDrawingBuffer: !!options.preserveDrawingBuffer,
                    alpha: false,
                    depth: false,
                    stencil: false,
                    antialias: false
                };
                this.gl = this.canvas.getContext("webgl", contextCreateOptions) || this.canvas.getContext("experimental-webgl", contextCreateOptions);
                if (!this.gl) {
                    throw new Error("Failed to get WebGL Context");
                }
                var gl = this.gl;
                var vertexAttr = null;
                this.vertexBuffer = gl.createBuffer();
                var vertexCoords = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]);
                gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, vertexCoords, gl.STATIC_DRAW);
                this.program = this.createProgram(WebGL.SHADER.VERTEX_IDENTITY, WebGL.SHADER.FRAGMENT_YCRCB_TO_RGBA);
                vertexAttr = gl.getAttribLocation(this.program, "vertex");
                gl.enableVertexAttribArray(vertexAttr);
                gl.vertexAttribPointer(vertexAttr, 2, gl.FLOAT, false, 0, 0);
                this.textureY = this.createTexture(0, "textureY");
                this.textureCb = this.createTexture(1, "textureCb");
                this.textureCr = this.createTexture(2, "textureCr");
                this.loadingProgram = this.createProgram(WebGL.SHADER.VERTEX_IDENTITY, WebGL.SHADER.FRAGMENT_LOADING);
                vertexAttr = gl.getAttribLocation(this.loadingProgram, "vertex");
                gl.enableVertexAttribArray(vertexAttr);
                gl.vertexAttribPointer(vertexAttr, 2, gl.FLOAT, false, 0, 0);
                this.shouldCreateUnclampedViews = !this.allowsClampedTextureData();
            }
            WebGL.prototype.destroy = function () {
                var gl = this.gl;
                gl.deleteTexture(this.textureY);
                gl.deleteTexture(this.textureCb);
                gl.deleteTexture(this.textureCr);
                gl.deleteProgram(this.program);
                gl.deleteProgram(this.loadingProgram);
                gl.deleteBuffer(this.vertexBuffer);
            };
            ;
            WebGL.prototype.resize = function (width, height) {
                this.width = width | 0;
                this.height = height | 0;
                this.canvas.width = this.width;
                this.canvas.height = this.height;
                this.gl.useProgram(this.program);
                this.gl.viewport(0, 0, this.width, this.height);
            };
            ;
            WebGL.prototype.createTexture = function (index, name) {
                var gl = this.gl;
                var texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.uniform1i(gl.getUniformLocation(this.program, name), index);
                return texture;
            };
            ;
            WebGL.prototype.createProgram = function (vsh, fsh) {
                var gl = this.gl;
                var program = gl.createProgram();
                gl.attachShader(program, this.compileShader(gl.VERTEX_SHADER, vsh));
                gl.attachShader(program, this.compileShader(gl.FRAGMENT_SHADER, fsh));
                gl.linkProgram(program);
                gl.useProgram(program);
                return program;
            };
            ;
            WebGL.prototype.compileShader = function (type, source) {
                var gl = this.gl;
                var shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    throw new Error(gl.getShaderInfoLog(shader));
                }
                return shader;
            };
            ;
            WebGL.prototype.allowsClampedTextureData = function () {
                var gl = this.gl;
                var texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, 1, 1, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, new Uint8ClampedArray([0]));
                return gl.getError() === 0;
            };
            ;
            WebGL.prototype.renderProgress = function (progress) {
                var gl = this.gl;
                gl.useProgram(this.loadingProgram);
                var loc = gl.getUniformLocation(this.loadingProgram, "progress");
                gl.uniform1f(loc, progress);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            };
            ;
            WebGL.prototype.render = function (y, cb, cr) {
                if (!this.enabled) {
                    return;
                }
                var gl = this.gl;
                var w = this.width + 15 >> 4 << 4, h = this.height, w2 = w >> 1, h2 = h >> 1;
                if (this.shouldCreateUnclampedViews) {
                    y = new Uint8Array(y.buffer),
                        cb = new Uint8Array(cb.buffer),
                        cr = new Uint8Array(cr.buffer);
                }
                gl.useProgram(this.program);
                this.updateTexture(gl.TEXTURE0, this.textureY, w, h, y);
                this.updateTexture(gl.TEXTURE1, this.textureCb, w2, h2, cb);
                this.updateTexture(gl.TEXTURE2, this.textureCr, w2, h2, cr);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            };
            ;
            WebGL.prototype.updateTexture = function (unit, texture, w, h, data) {
                var gl = this.gl;
                gl.activeTexture(unit);
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, w, h, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, data);
            };
            ;
            WebGL.IsSupported = function () {
                try {
                    if (!window.WebGLRenderingContext) {
                        return false;
                    }
                    var canvas = document.createElement("canvas");
                    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
                }
                catch (err) {
                    return false;
                }
            };
            ;
            WebGL.SHADER = {
                FRAGMENT_YCRCB_TO_RGBA: ["precision mediump float;", "uniform sampler2D textureY;", "uniform sampler2D textureCb;", "uniform sampler2D textureCr;", "varying vec2 texCoord;", "mat4 rec601 = mat4(", "1.16438,  0.00000,  1.59603, -0.87079,", "1.16438, -0.39176, -0.81297,  0.52959,", "1.16438,  2.01723,  0.00000, -1.08139,", "0, 0, 0, 1", ");", "void main() {", "float y = texture2D(textureY, texCoord).r;", "float cb = texture2D(textureCb, texCoord).r;", "float cr = texture2D(textureCr, texCoord).r;", "gl_FragColor = vec4(y, cr, cb, 1.0) * rec601;", "}"].join("\n"),
                FRAGMENT_LOADING: ["precision mediump float;", "uniform float progress;", "varying vec2 texCoord;", "void main() {", "float c = ceil(progress-(1.0-texCoord.y));", "gl_FragColor = vec4(c,c,c,1);", "}"].join("\n"),
                VERTEX_IDENTITY: ["attribute vec2 vertex;", "varying vec2 texCoord;", "void main() {", "texCoord = vertex;", "gl_Position = vec4((vertex * 2.0 - 1.0) * vec2(1, -1), 0.0, 1.0);", "}"].join("\n")
            };
            return WebGL;
        }());
        Renderer.WebGL = WebGL;
        __reflect(WebGL.prototype,"JSMpeg.Renderer.WebGL",[]); 
        var Canvas2D = /** @class */ (function () {
            function Canvas2D(options) {
                this.canvas = options.canvas || document.createElement("canvas");
                this.width = this.canvas.width;
                this.height = this.canvas.height;
                this.enabled = true;
                this.context = this.canvas.getContext('2d');
            }
            Canvas2D.prototype.destroy = function () { };
            ;
            Canvas2D.prototype.resize = function (width, height) {
                this.width = width | 0;
                this.height = height | 0;
                this.canvas.width = this.width;
                this.canvas.height = this.height;
                this.imageData = this.context.getImageData(0, 0, this.width, this.height);
                JSMpeg.Fill(this.imageData.data, 255);
            };
            ;
            Canvas2D.prototype.renderProgress = function (progress) {
                var w = this.canvas.width, h = this.canvas.height, ctx = this.context;
                ctx.fillStyle = "#222";
                ctx.fillRect(0, 0, w, h);
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, h - h * progress, w, h * progress);
            };
            ;
            Canvas2D.prototype.render = function (y, cb, cr) {
                this.YCbCrToRGBA(y, cb, cr, this.imageData.data);
                this.context.putImageData(this.imageData, 0, 0);
            };
            ;
            Canvas2D.prototype.YCbCrToRGBA = function (y, cb, cr, rgba) {
                if (!this.enabled) {
                    return;
                }
                var w = this.width + 15 >> 4 << 4, w2 = w >> 1;
                var yIndex1 = 0, yIndex2 = w, yNext2Lines = w + (w - this.width);
                var cIndex = 0, cNextLine = w2 - (this.width >> 1);
                var rgbaIndex1 = 0, rgbaIndex2 = this.width * 4, rgbaNext2Lines = this.width * 4;
                var cols = this.width >> 1, rows = this.height >> 1;
                var ccb, ccr, r, g, b;
                for (var row = 0; row < rows; row++) {
                    for (var col = 0; col < cols; col++) {
                        ccb = cb[cIndex];
                        ccr = cr[cIndex];
                        cIndex++;
                        r = ccb + (ccb * 103 >> 8) - 179;
                        g = (ccr * 88 >> 8) - 44 + (ccb * 183 >> 8) - 91;
                        b = ccr + (ccr * 198 >> 8) - 227;
                        var y1 = y[yIndex1++];
                        var y2 = y[yIndex1++];
                        rgba[rgbaIndex1] = y1 + r;
                        rgba[rgbaIndex1 + 1] = y1 - g;
                        rgba[rgbaIndex1 + 2] = y1 + b;
                        rgba[rgbaIndex1 + 4] = y2 + r;
                        rgba[rgbaIndex1 + 5] = y2 - g;
                        rgba[rgbaIndex1 + 6] = y2 + b;
                        rgbaIndex1 += 8;
                        var y3 = y[yIndex2++];
                        var y4 = y[yIndex2++];
                        rgba[rgbaIndex2] = y3 + r;
                        rgba[rgbaIndex2 + 1] = y3 - g;
                        rgba[rgbaIndex2 + 2] = y3 + b;
                        rgba[rgbaIndex2 + 4] = y4 + r;
                        rgba[rgbaIndex2 + 5] = y4 - g;
                        rgba[rgbaIndex2 + 6] = y4 + b;
                        rgbaIndex2 += 8;
                    }
                    yIndex1 += yNext2Lines;
                    yIndex2 += yNext2Lines;
                    rgbaIndex1 += rgbaNext2Lines;
                    rgbaIndex2 += rgbaNext2Lines;
                    cIndex += cNextLine;
                }
            };
            ;
            return Canvas2D;
        }());
        Renderer.Canvas2D = Canvas2D;
        __reflect(Canvas2D.prototype,"JSMpeg.Renderer.Canvas2D",[]); 
    })(Renderer = JSMpeg.Renderer || (JSMpeg.Renderer = {}));
    window["Renderer"] = Renderer;
    var AudioOutput = window['AudioOutput']; 
    var AudioOutput;
    (function (AudioOutput) {
        var WebAudio = /** @class */ (function () {
            function WebAudio(options) {
                // this.context = WebAudio.CachedContext = WebAudio.CachedContext || new (window.AudioContext || window.webkitAudioContext);
                this.context = WebAudio.CachedContext = WebAudio.CachedContext || new (window.AudioContext);
                this.gain = this.context.createGain();
                this.destination = this.gain;
                this.gain.connect(this.context.destination);
                this.context._connections = (this.context._connections || 0) + 1;
                this.startTime = 0;
                this.buffer = null;
                this.wallclockStartTime = 0;
                this.volume = 1;
                this.enabled = true;
                this.unlocked = !WebAudio.NeedsUnlocking();
                Object.defineProperty(this, "enqueuedTime", {
                    get: this.getEnqueuedTime
                });
            }
            WebAudio.prototype.destroy = function () {
                this.gain.disconnect();
                this.context._connections--;
                if (this.context._connections === 0) {
                    this.context.close();
                    WebAudio.CachedContext = null;
                }
            };
            ;
            WebAudio.prototype.play = function (sampleRate, left, right) {
                if (!this.enabled) {
                    return;
                }
                if (!this.unlocked) {
                    var ts = JSMpeg.Now();
                    if (this.wallclockStartTime < ts) {
                        this.wallclockStartTime = ts;
                    }
                    this.wallclockStartTime += left.length / sampleRate;
                    return;
                }
                this.gain.gain.value = this.volume;
                var buffer = this.context.createBuffer(2, left.length, sampleRate);
                buffer.getChannelData(0).set(left);
                buffer.getChannelData(1).set(right);
                var source = this.context.createBufferSource();
                source.buffer = buffer;
                source.connect(this.destination);
                var now = this.context.currentTime;
                var duration = buffer.duration;
                if (this.startTime < now) {
                    this.startTime = now;
                    this.wallclockStartTime = JSMpeg.Now();
                }
                source.start(this.startTime);
                this.startTime += duration;
                this.wallclockStartTime += duration;
            };
            ;
            WebAudio.prototype.stop = function () {
                this.gain.gain.value = 0;
            };
            ;
            WebAudio.prototype.getEnqueuedTime = function () {
                return Math.max(this.wallclockStartTime - JSMpeg.Now(), 0);
            };
            ;
            WebAudio.prototype.resetEnqueuedTime = function () {
                this.startTime = this.context.currentTime;
                this.wallclockStartTime = JSMpeg.Now();
            };
            ;
            WebAudio.prototype.unlock = function (callback) {
                if (this.unlocked) {
                    if (callback) {
                        callback();
                    }
                    return;
                }
                this.unlockCallback = callback;
                var buffer = this.context.createBuffer(1, 1, 22050);
                var source = this.context.createBufferSource();
                source.buffer = buffer;
                source.connect(this.destination);
                source.start(0);
                setTimeout(this.checkIfUnlocked.bind(this, source, 0), 0);
            };
            ;
            WebAudio.prototype.checkIfUnlocked = function (source, attempt) {
                if (source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE) {
                    this.unlocked = true;
                    if (this.unlockCallback) {
                        this.unlockCallback();
                        this.unlockCallback = null;
                    }
                }
                else if (attempt < 10) {
                    setTimeout(this.checkIfUnlocked.bind(this, source, attempt + 1), 100);
                }
            };
            ;
            WebAudio.NeedsUnlocking = function () {
                return /iPhone|iPad|iPod/i.test(navigator.userAgent);
            };
            ;
            WebAudio.IsSupported = function () {
                // return window.AudioContext || window.webkitAudioContext
                return window.AudioContext;
            };
            ;
            WebAudio.CachedContext = null;
            return WebAudio;
        }());
        AudioOutput.WebAudio = WebAudio;
        __reflect(WebAudio.prototype,"JSMpeg.AudioOutput.WebAudio",[]); 
    })(AudioOutput = JSMpeg.AudioOutput || (JSMpeg.AudioOutput = {}));
    window["AudioOutput"] = AudioOutput;
})(JSMpeg || (JSMpeg = {}));
window["JSMpeg"] = JSMpeg;


/***/ }),

/***/ "./src/lib/JSMpeg/Player.ts":
/***/ (function(module, exports) {

var Sakura = window['Sakura']; 
var Sakura;
(function (Sakura) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(url, options) {
            var _this = _super.call(this) || this;
            var self = _this;
            _this.options = options || {};
            options.canvas = options.canvas || document.querySelector('#mpeg');
            options.decodeFirstFrame = options.decodeFirstFrame || false;
            if (options.source) {
                _this.source = new options.source(url, options);
                options.streaming = !!_this.source.streaming;
            }
            else if (url.match(/^wss?:\/\//)) {
                _this.source = new JSMpeg.Source.WebSocket(url, options);
                options.streaming = true;
            }
            else if (options.progressive !== false) {
                _this.source = new JSMpeg.Source.AjaxProgressive(url, options);
                options.streaming = false;
            }
            else {
                _this.source = new JSMpeg.Source.Ajax(url, options);
                options.streaming = false;
            }
            _this.maxAudioLag = options.maxAudioLag || .25;
            _this.loop = options.loop !== false;
            _this.autoplay = !!options.autoplay || options.streaming;
            _this.demuxer = new JSMpeg.Demuxer.TS(options);
            _this.source.connect(_this.demuxer);
            if (options.video !== false) {
                _this.video = new JSMpeg.Decoder.MPEG1Video(options);
                _this.renderer = !options.disableGl && JSMpeg.Renderer.WebGL.IsSupported() ? new JSMpeg.Renderer.WebGL(options) : new JSMpeg.Renderer.Canvas2D(options);
                _this.demuxer.connect(JSMpeg.Demuxer.TS.STREAM.VIDEO_1, _this.video);
                _this.video.connect(_this.renderer);
            }
            if (options.audio !== false && JSMpeg.AudioOutput.WebAudio.IsSupported()) {
                _this.audio = new JSMpeg.Decoder.MP2Audio(options);
                _this.audioOut = new JSMpeg.AudioOutput.WebAudio(options);
                _this.demuxer.connect(JSMpeg.Demuxer.TS.STREAM.AUDIO_1, _this.audio);
                _this.audio.connect(_this.audioOut);
            }
            Object.defineProperty(_this.source, "progress", {
                // get: this.getProgress,
                set: function (val) {
                    self.watchProgress(val, self);
                }
            });
            Object.defineProperty(_this, "currentTime", {
                get: _this.getCurrentTime,
                set: _this.setCurrentTime
            });
            Object.defineProperty(_this, "volume", {
                get: _this.getVolume,
                set: _this.setVolume
            });
            _this.unpauseOnShow = false;
            if (options.pauseWhenHidden !== false) {
                document.addEventListener("visibilitychange", _this.showHide.bind(_this));
            }
            _this.source.start();
            return _this;
        }
        Player.prototype.watchProgress = function (val, self) {
            if (val === 1) {
                self.dispatchEventWith(egret.Event.COMPLETE);
            }
        };
        // public addEventListener(type:string, listener:Function, useCapture?:boolean) {
        //   console.log(type)
        // }
        // public removeEventListener(type:string, listener:Function, useCapture?:boolean) {}
        Player.prototype.showHide = function (ev) {
            if (document.visibilityState === "hidden") {
                this.unpauseOnShow = this.wantsToPlay;
                this.pause();
            }
            else if (this.unpauseOnShow) {
                this.play();
            }
        };
        Player.prototype.play = function (ev) {
            this.update.bind(this);
            this.options.canvas.style.opacity = 1;
            this.options.canvas.style['pointer-events'] = 'auto';
            this.animationId = requestAnimationFrame(this.update.bind(this));
            this.wantsToPlay = true;
        };
        ;
        Player.prototype.pause = function (ev) {
            cancelAnimationFrame(this.animationId);
            this.wantsToPlay = false;
            this.isPlaying = false;
            if (this.audio && this.audio.canPlay) {
                this.audioOut.stop();
                this.seek(this.currentTime);
            }
        };
        Player.prototype.getVolume = function () {
            return this.audioOut ? this.audioOut.volume : 0;
        };
        ;
        Player.prototype.setVolume = function (volume) {
            if (this.audioOut) {
                this.audioOut.volume = volume;
            }
        };
        ;
        Player.prototype.stop = function () {
            this.pause();
            this.seek(0);
            this.options.canvas.style.opacity = 0;
            this.options.canvas.style['pointer-events'] = 'none';
            if (this.video && this.options.decodeFirstFrame !== false) {
                this.video.decode();
            }
            this.dispatchEventWith(Player.Event.STOP);
        };
        ;
        Player.prototype.destroy = function () {
            this.pause();
            this.source.destroy();
            this.renderer.destroy();
            this.audioOut.destroy();
        };
        ;
        Player.prototype.seek = function (time) {
            var startOffset = this.audio && this.audio.canPlay ? this.audio.startTime : this.video.startTime;
            if (this.video) {
                this.video.seek(time + startOffset);
            }
            if (this.audio) {
                this.audio.seek(time + startOffset);
            }
            this.startTime = JSMpeg.Now() - time;
        };
        ;
        Player.prototype.getCurrentTime = function () {
            return this.audio && this.audio.canPlay ? this.audio.currentTime - this.audio.startTime : this.video.currentTime - this.video.startTime;
        };
        ;
        Player.prototype.setCurrentTime = function (time) {
            this.seek(time);
        };
        ;
        Player.prototype.update = function () {
            this.animationId = requestAnimationFrame(this.update.bind(this));
            if (!this.source.established) {
                if (this.renderer) {
                    this.renderer.renderProgress(this.source.progress);
                }
                return;
            }
            if (!this.isPlaying) {
                this.isPlaying = true;
                this.startTime = JSMpeg.Now() - this.currentTime;
            }
            if (this.options.streaming) {
                this.updateForStreaming();
            }
            else {
                this.updateForStaticFile();
            }
        };
        ;
        Player.prototype.updateForStreaming = function () {
            if (this.video) {
                this.video.decode();
            }
            if (this.audio) {
                var decoded = false;
                do {
                    if (this.audioOut.enqueuedTime > this.maxAudioLag) {
                        this.audioOut.resetEnqueuedTime();
                        this.audioOut.enabled = false;
                    }
                    decoded = this.audio.decode();
                } while (decoded);
                this.audioOut.enabled = true;
            }
        };
        ;
        Player.prototype.updateForStaticFile = function () {
            var notEnoughData = false, headroom = 0;
            if (this.audio && this.audio.canPlay) {
                while (!notEnoughData && this.audio.decodedTime - this.audio.currentTime < .25) {
                    notEnoughData = !this.audio.decode();
                }
                if (this.video && this.video.currentTime < this.audio.currentTime) {
                    notEnoughData = !this.video.decode();
                }
                headroom = this.demuxer.currentTime - this.audio.currentTime;
            }
            else if (this.video) {
                var targetTime = JSMpeg.Now() - this.startTime + this.video.startTime, lateTime = targetTime - this.video.currentTime, frameTime = 1 / this.video.frameRate;
                if (this.video && lateTime > 0) {
                    if (lateTime > frameTime * 2) {
                        this.startTime += lateTime;
                    }
                    notEnoughData = !this.video.decode();
                }
                headroom = this.demuxer.currentTime - targetTime;
            }
            this.source.resume(headroom);
            if (notEnoughData && this.source.completed) {
                if (this.loop) {
                    this.seek(0);
                }
                else {
                    // this.pause()
                    this.stop();
                }
            }
        };
        ;
        Player.Event = { STOP: 'player_stop' };
        return Player;
    }(egret.EventDispatcher));
    Sakura.Player = Player;
    __reflect(Player.prototype,"Sakura.Player",[]); 
})(Sakura || (Sakura = {}));
window["Sakura"] = Sakura;


/***/ }),

/***/ "./src/lib/components/Audio.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Audio = /** @class */ (function (_super) {
    __extends(Audio, _super);
    function Audio(multiple, defaultLoop, url) {
        if (multiple === void 0) { multiple = false; }
        if (defaultLoop === void 0) { defaultLoop = false; }
        if (url === void 0) { url = ''; }
        var _this = _super.call(this) || this;
        _this.multiple = false;
        _this.audio = {
            audio: null,
            channel: null,
            position: 0
        };
        _this.multiple = multiple;
        _this.defaultLoop = defaultLoop;
        _this.url = url;
        return _this;
    }
    Audio.prototype.play = function (src, transition, loop) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.multiple) {
                            // this.loop = loop === undefined ? loop : false
                            return [2 /*return*/];
                        }
                        this.loop = loop === undefined ? this.defaultLoop : loop;
                        if (this.audio.channel) {
                            this.audio.channel.stop();
                        }
                        _a = this.audio;
                        return [4 /*yield*/, RES.getResAsync(src || this.url)];
                    case 1:
                        _a.audio = _b.sent();
                        this.audio.channel = this.audio.audio.play(0, this.loop ? 0 : 1);
                        if (transition) {
                            this.audio.channel.volume = 0;
                            // TODO 抽离 volume 和 transition
                            egret.Tween.get(this.audio.channel).to({
                                volume: 0.5
                            }, 200, egret.Ease.quadOut);
                        }
                        // TODO 卸载监听
                        this.audio.channel.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                            console.log('监听音乐');
                            // 音乐播放完毕
                            _this.dispatchEvent(new egret.Event('stop'));
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    Audio.prototype.pause = function () {
        var _a;
        if (this.multiple) {
            return;
        }
        this.audio.position = this.audio.channel.position;
        (_a = this.audio.channel) === null || _a === void 0 ? void 0 : _a.stop();
        this.audio.channel = null;
    };
    Audio.prototype.resume = function () {
        if (this.multiple) {
            return;
        }
        this.audio.channel = this.audio.audio.play(this.audio.position, this.loop ? -1 : 1);
    };
    Audio.prototype.stop = function (duration) {
        var _a;
        if (duration === void 0) { duration = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_b) {
                if (this.multiple) {
                    return [2 /*return*/];
                }
                if (duration) {
                    console.log('缓慢关闭音乐');
                    // 缓慢关闭音乐
                    return [2 /*return*/, new Promise(function (resovle) {
                            egret.Tween.get(_this.audio.channel).to({
                                volume: 0
                            }, duration, egret.Ease.quadOut).call(function () {
                                _this.audio.channel.stop();
                                _this.reset();
                                resovle();
                            });
                        })];
                }
                (_a = this.audio.channel) === null || _a === void 0 ? void 0 : _a.stop();
                this.reset();
                return [2 /*return*/];
            });
        });
    };
    Audio.prototype.reset = function () {
        this.url = '';
        this.audio = {
            position: 0,
            channel: null,
            audio: null
        };
    };
    Audio.prototype.volume = function (v) {
        if (this.multiple) {
            return;
        }
        this.audio.channel.volume = v;
    };
    Object.defineProperty(Audio.prototype, "isPlaying", {
        get: function () {
            return !!this.audio.channel;
        },
        enumerable: false,
        configurable: true
    });
    return Audio;
}(egret.EventDispatcher));
exports.default = Audio;
window["Audio"] = Audio;
__reflect(Audio.prototype,"Audio",[]); 


/***/ }),

/***/ "./src/lib/components/Bgm.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Script_1 = __webpack_require__("./src/lib/utils/Script.ts");
var Audio_1 = __webpack_require__("./src/lib/components/Audio.ts");
var Bgm = /** @class */ (function (_super) {
    __extends(Bgm, _super);
    function Bgm() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spread(args)) || this;
        Script_1.default.event.use('script-exec', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            var command, params, flags;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        command = ctx.command, params = ctx.params, flags = ctx.flags;
                        if (!(command === 'sound')) return [3 /*break*/, 4];
                        console.log('sound');
                        if (!this.url && !params.file)
                            throw Error('没有音乐文件');
                        if (!params.file) return [3 /*break*/, 2];
                        // TODO 需要暂停原有音乐
                        if (this.url) {
                        }
                        return [4 /*yield*/, this.play(params.file, params.transition, params.loop)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!flags.includes('clear')) return [3 /*break*/, 4];
                        // TODO 支持 EASE
                        return [4 /*yield*/, this.stop(params.transition ? 200 : 0)];
                    case 3:
                        // TODO 支持 EASE
                        _a.sent();
                        _a.label = 4;
                    case 4: 
                    // TODO 什么时候进行音乐的暂停
                    // if (command === 'bg') {
                    //   // 切换背景 音乐停止？？
                    //   await this.stop()
                    // }
                    return [4 /*yield*/, next()];
                    case 5:
                        // TODO 什么时候进行音乐的暂停
                        // if (command === 'bg') {
                        //   // 切换背景 音乐停止？？
                        //   await this.stop()
                        // }
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        Script_1.default.event.use('music-stop', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); });
        return _this;
    }
    return Bgm;
}(Audio_1.default));
exports.default = Bgm;
window["Bgm"] = Bgm;
__reflect(Bgm.prototype,"Bgm",[]); 


/***/ }),

/***/ "./src/lib/components/Branch.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Script_1 = __webpack_require__("./src/lib/utils/Script.ts");
var Branch = /** @class */ (function (_super) {
    __extends(Branch, _super);
    function Branch() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    Branch.prototype.addToStage = function () {
        this.height = this.stage.stageHeight;
        this.width = this.stage.stageHeight;
        Script_1.default.event.use('script-exec', this.handleScriptExec.bind(this));
    };
    Branch.prototype.handleScriptExec = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var command, params, flags, bg, texture, width, height, branches, x, anchorOffsetX, anchorOffsetY, scale, _loop_1, this_1, i, distance, MinDisance, gap, branches_1, branches_1_1, branch;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        command = ctx.command, params = ctx.params, flags = ctx.flags;
                        if (!(command === 'branch')) return [3 /*break*/, 2];
                        Script_1.default.event.post('scene-untouch');
                        bg = params.file || 'bg_branch';
                        return [4 /*yield*/, RES.getResAsync(bg)];
                    case 1:
                        texture = _b.sent();
                        width = texture.textureWidth;
                        height = texture.textureHeight;
                        console.log(this.stage.stageWidth, width, 'branch');
                        branches = [];
                        x = 0;
                        anchorOffsetX = 0;
                        anchorOffsetY = 0;
                        scale = 1;
                        if (width > this.stage.stageWidth) {
                            x = this.stage.stageWidth / 2;
                            anchorOffsetX = width / 2;
                            anchorOffsetY = height / 2;
                            scale = this.stage.stageWidth / width;
                        }
                        if (this.stage.orientation === egret.OrientationMode.LANDSCAPE) {
                            // 横屏
                            // 每行 两个，从上到下
                            //TODO  缩放策略待定 
                        }
                        else {
                            // 竖屏
                            // 从上向下
                        }
                        _loop_1 = function (i) {
                            var label = params.labels[i];
                            var value = params.value[i];
                            var branch = new egret.DisplayObjectContainer();
                            branch.width = width;
                            branch.height = height;
                            branch.anchorOffsetX = anchorOffsetX;
                            branch.anchorOffsetY = anchorOffsetY;
                            branch.scaleX = scale;
                            branch.scaleY = scale;
                            branch.x = x;
                            branch.y = (height * scale + 10) * i;
                            var bg_1 = new egret.Bitmap();
                            bg_1.texture = texture;
                            var text = new egret.TextField();
                            text.text = label;
                            // TODO 优化 文字左右安全区域，字体大小自适应
                            text.x = 70;
                            text.y = 35;
                            text.size = 20;
                            branch.addChild(bg_1);
                            branch.addChild(text);
                            branch.touchEnabled = true;
                            branch.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.removeChildren();
                                            return [4 /*yield*/, Script_1.default.event.post('save-scope', {
                                                    key: params.variable,
                                                    value: value,
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, Script_1.default.event.post('scene-touch')];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, Script_1.default.event.post('script-trigger')];
                                        case 3:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, this_1);
                            branches.push(branch);
                            this_1.addChild(branch);
                        };
                        this_1 = this;
                        for (i = 0; i < params.labels.length; i++) {
                            _loop_1(i);
                        }
                        // 计算分支选择的底部
                        if (branches.length > 0) {
                            distance = this.stage.stageHeight - (branches[branches.length - 1].y + height * scale);
                            MinDisance = 150;
                            if (distance > MinDisance) {
                                gap = distance - MinDisance;
                                try {
                                    for (branches_1 = __values(branches), branches_1_1 = branches_1.next(); !branches_1_1.done; branches_1_1 = branches_1.next()) {
                                        branch = branches_1_1.value;
                                        branch.y += gap;
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (branches_1_1 && !branches_1_1.done && (_a = branches_1.return)) _a.call(branches_1);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                            }
                        }
                        _b.label = 2;
                    case 2: return [4 /*yield*/, next()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // cb 里面load 新的script
    Branch.prototype.open = function () {
    };
    return Branch;
}(egret.Sprite));
exports.default = Branch;
window["Branch"] = Branch;
__reflect(Branch.prototype,"Branch",[]); 


/***/ }),

/***/ "./src/lib/components/Character.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.nobody = void 0;
exports.nobody = 'anonymous';
var Script_1 = __webpack_require__("./src/lib/utils/Script.ts");
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character(resKey, layers
    // // 角色名字
    // charName: string,
    // bgKey: string,
    // // 名字颜色
    // nameColor: number = 0x000000,
    // // 对话颜色
    // wordsColor: number = 0x000000,
    // // 每一帧的文字
    // cps: number = 30,
    // multiPos: boolean = true,
    // multiFace: boolean = true
    ) {
        var _this = _super.call(this) || this;
        _this.position = { x: 0, y: 0 };
        _this.nextAlpha = 1;
        _this.sayWithShow = false;
        _this.active = false;
        _this.resKey = '';
        // 立绘图片
        _this.faceImg = null;
        // 立绘文字显示窗体
        _this.textWindow = null;
        _this.layers = layers;
        _this.resKey = resKey;
        _this.name = resKey;
        // 角色
        // 对话颜色
        // 退场动画
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Character.prototype.onAddToStage = function () {
        Script_1.default.event.use('script-exec', this.handleScriptExec.bind(this));
    };
    Character.prototype.handleScriptExec = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var command, params, flags, skips, character, _a, character, _b, width, height, _c, targetX_1, fromX;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        command = ctx.command, params = ctx.params, flags = ctx.flags;
                        skips = ['*', 'text', 'sound'];
                        if (!(Script_1.default.CHAR.name && skips.indexOf(command) < 0)) return [3 /*break*/, 5];
                        if (!(command === 'character' && params.name === Script_1.default.CHAR.name)) return [3 /*break*/, 3];
                        if (!(Script_1.default.CHAR.mood && Script_1.default.CHAR.mood !== params.mood)) return [3 /*break*/, 2];
                        character = this.layers.chars.getChildByName(Script_1.default.CHAR.name);
                        _a = character.faceImg;
                        return [4 /*yield*/, RES.getResAsync("char_" + Script_1.default.CHAR.name + "_" + (params.mood || '普通'))];
                    case 1:
                        _a.texture = _d.sent();
                        _d.label = 2;
                    case 2: return [3 /*break*/, 5];
                    case 3:
                        character = this.layers.chars.getChildByName(Script_1.default.CHAR.name);
                        return [4 /*yield*/, character.leave()];
                    case 4:
                        _d.sent();
                        Script_1.default.CHAR = {};
                        _d.label = 5;
                    case 5:
                        if (!(command === 'character')) return [3 /*break*/, 8];
                        if (!(this.resKey === params.name && Script_1.default.CHAR.name !== params.name)) return [3 /*break*/, 8];
                        // 进场
                        Script_1.default.CHAR = { name: this.resKey, mood: params.mood };
                        this.faceImg = new egret.Bitmap();
                        _b = this.faceImg;
                        return [4 /*yield*/, RES.getResAsync("char_" + this.resKey + "_" + (params.mood || '普通'))];
                    case 6:
                        _b.texture = _d.sent();
                        width = 700;
                        height = (this.faceImg.texture.textureHeight / this.faceImg.texture.textureWidth) * width;
                        this.faceImg.width = width;
                        this.faceImg.height = height;
                        _c = this.setCharPos(params.position), targetX_1 = _c.x, fromX = _c.fx;
                        this.faceImg.x = fromX;
                        this.faceImg.alpha = 0;
                        this.addChild(this.faceImg);
                        return [4 /*yield*/, new Promise(function (resovle) {
                                egret.Tween.get(_this.faceImg).to({
                                    alpha: 1,
                                    x: targetX_1
                                }, 1000, egret.Ease.quadOut).call(function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, Script_1.default.event.post('script-trigger')];
                                            case 1:
                                                _a.sent();
                                                resovle();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            })];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8: return [4 /*yield*/, next()];
                    case 9:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Character.prototype.setCharPos = function (position) {
        if (position === void 0) { position = 'center'; }
        var x = 0;
        var fx = -150;
        var padding = 150;
        switch (position) {
            case 'left':
                x = -this.faceImg.width / 4;
                fx = -this.faceImg.width;
                break;
            case 'center':
                x = (this.stage.stageWidth - this.faceImg.width) / 2;
                break;
            case 'right':
                fx = this.stage.stageWidth - this.faceImg.width / 4;
                x = this.stage.stageWidth - this.faceImg.width * (3 / 4);
                break;
            default:
                x = (this.stage.stageWidth - this.faceImg.width) / 2;
                break;
        }
        return { x: x, fx: fx };
    };
    // 对话框有头像
    Character.prototype.say = function () {
    };
    // 对话框没有头像
    Character.prototype.think = function () {
    };
    Character.prototype.show = function () {
    };
    /**
     * 下面都是调整状态的方法
     */
    Character.prototype.opacity = function (alpha) {
        this.nextAlpha = alpha;
        return this;
    };
    Character.prototype.reset = function () {
    };
    Character.prototype.withShow = function (ok) {
        if (ok === void 0) { ok = true; }
        this.sayWithShow = ok;
        return this;
    };
    // 结束动画
    Character.prototype.endAnimation = function () {
    };
    // 离场动画
    Character.prototype.leave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // 1.更改层次 2. 退场动画
                        this.parent.setChildIndex(this, -1);
                        return [4 /*yield*/, new Promise(function (resovle) {
                                egret.Tween.get(_this.faceImg).to({
                                    alpha: 0,
                                    x: 0
                                }, 200, egret.Ease.quadOut).call(function () {
                                    resovle();
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Character;
}(egret.DisplayObjectContainer));
exports.default = Character;
window["Character"] = Character;
__reflect(Character.prototype,"Character",[]); 


/***/ }),

/***/ "./src/lib/components/Loading.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Script_1 = __webpack_require__("./src/lib/utils/Script.ts");
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super.call(this) || this;
        _this.current = 0;
        _this.total = 0;
        _this.percent = 0;
        _this.currentText = new egret.TextField();
        _this.totalText = new egret.TextField();
        _this.percentText = new egret.TextField();
        _this.reset();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Loading.prototype.onAddToStage = function () {
        var _this = this;
        var stage = this.stage;
        console.log(stage.stageHeight, stage.stageWidth, 'loading');
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xffffff, 1);
        shp.graphics.drawRect(0, 0, stage.stageWidth, stage.stageHeight);
        shp.graphics.endFill();
        this.currentText.y = 0;
        this.totalText.y = 100;
        this.percentText.y = 200;
        this.currentText.text = this.current + '';
        this.currentText.textColor = 0xff0000;
        this.totalText.text = this.total + '';
        this.totalText.textColor = 0xff0000;
        this.percentText.text = this.percent + '%';
        this.percentText.textColor = 0xff0000;
        this.addChild(shp);
        this.addChild(this.currentText);
        this.addChild(this.totalText);
        this.addChild(this.percentText);
        Script_1.default.event.use('loading-init', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading-init');
                        this.show();
                        return [4 /*yield*/, next()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        Script_1.default.event.use('loading-hide', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading-hide');
                        this.hide();
                        this.reset();
                        return [4 /*yield*/, next()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        Script_1.default.event.use('loading-progress', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            var load, total;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        load = ctx.load, total = ctx.total;
                        console.log('loading-progress', load, total);
                        this.current = load;
                        this.total = total;
                        this.percent = Math.floor((load / total) * 100);
                        this.currentText.text = this.current + '';
                        this.totalText.text = this.total + '';
                        this.percentText.text = this.percent + '%';
                        return [4 /*yield*/, next()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        // 脚本执行
        Script_1.default.event.use('script-exec', this.handleScriptExec.bind(this));
    };
    Loading.prototype.handleScriptExec = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var command, params, flags;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        command = ctx.command, params = ctx.params, flags = ctx.flags;
                        return [4 /*yield*/, next()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Loading.prototype.reset = function () {
        this.current = 0;
        this.total = 0;
        this.percent = 0;
        this.currentText.text = '';
        this.totalText.text = '';
        this.percentText.text = '';
    };
    Loading.prototype.show = function () {
        this.visible = true;
        this.parent.setChildIndex(this, 1);
    };
    Loading.prototype.hide = function () {
        var _this = this;
        this.parent.setChildIndex(this, -1);
        egret.Tween.get(this).to({
            alpha: 0
        }, 300, egret.Ease.quadOut).call(function () {
            _this.visible = false;
        });
    };
    return Loading;
}(egret.DisplayObjectContainer));
window["Loading"] = Loading;
__reflect(Loading.prototype,"Loading",[]); 
var loading = new Loading();
window["loading"] = loading;
exports.default = loading;


/***/ }),

/***/ "./src/lib/components/Player.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Script_1 = __webpack_require__("./src/lib/utils/Script.ts");
var Player = /** @class */ (function () {
    function Player() {
        Script_1.default.event.use('script-exec', this.handleScriptExec.bind(this));
    }
    Player.prototype.handleScriptExec = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var command, params, flags, player;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        command = ctx.command, params = ctx.params, flags = ctx.flags;
                        if (!(command === 'player')) return [3 /*break*/, 2];
                        return [4 /*yield*/, RES.getResAsync(params.file)];
                    case 1:
                        player = _a.sent();
                        player.play();
                        player.addEventListener(Sakura.Player.Event.STOP, function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Script_1.default.event.post('script-trigger')];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }, this);
                        _a.label = 2;
                    case 2: return [4 /*yield*/, next()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Player;
}());
exports.default = Player;
window["Player"] = Player;
__reflect(Player.prototype,"Player",[]); 


/***/ }),

/***/ "./src/lib/components/Scene.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Script_1 = __webpack_require__("./src/lib/utils/Script.ts");
var Character_1 = __webpack_require__("./src/lib/components/Character.ts");
var Text_1 = __webpack_require__("./src/lib/components/Text.ts");
// import Dialog from '../ui/Dialog'
var Player_1 = __webpack_require__("./src/lib/components/Player.ts");
var Bgm_1 = __webpack_require__("./src/lib/components/Bgm.ts");
// TODO 把 ui 抽离出去
var Branch_1 = __webpack_require__("./src/lib/components/Branch.ts");
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        _this.callback = null;
        _this.bgName = 'bg_default';
        _this.position = { x: 0, y: 0 };
        _this.mainPosition = { x: 0, y: 0 };
        _this.offset = { x: 0, y: 0 };
        _this.bgScale = 1;
        _this.chars = new Set();
        // bgm
        _this.bgm = null;
        // 下一步
        _this.handleTouch = function () {
            // this.interpreter.next()
            // 触发事件
            Script_1.default.event.post('script-trigger');
        };
        _this.chars.clear();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Scene.prototype.handleScriptExec = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var command, params, flags, name_1, character, character;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        command = ctx.command, params = ctx.params, flags = ctx.flags;
                        // 隐藏对话框
                        if (command !== '*') {
                            // this.dialog.visible = false
                        }
                        if (!(command === 'bg' && params.name === 'bg')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateBg(ctx)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(command === 'character')) return [3 /*break*/, 5];
                        name_1 = params.name;
                        if (!name_1) return [3 /*break*/, 5];
                        if (!!this.chars.has(name_1)) return [3 /*break*/, 4];
                        if (!name_1)
                            name_1 = 'anonymous';
                        character = new Character_1.default(name_1, this.layers);
                        // 预加载人物图
                        return [4 /*yield*/, RES.getResAsync("char_" + name_1 + "_" + (params.mood || '普通'))];
                    case 3:
                        // 预加载人物图
                        _a.sent();
                        this.chars.add(name_1);
                        this.layers.chars.addChild(character);
                        return [3 /*break*/, 5];
                    case 4:
                        character = this.layers.chars.getChildByName(name_1);
                        this.layers.chars.setChildIndex(character, 1);
                        _a.label = 5;
                    case 5: return [4 /*yield*/, next()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Scene.prototype.onAddToStage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // 监听执行脚本事件
                        Script_1.default.event.use('script-exec', this.handleScriptExec.bind(this));
                        Script_1.default.event.use('scene-touch', this.bindTouchEvent.bind(this));
                        Script_1.default.event.use('scene-untouch', this.unbindTouchEvent.bind(this));
                        // this.init = true
                        this.width = this.stage.stageWidth;
                        this.height = this.stage.stageHeight;
                        this.layers = {
                            bg: new egret.DisplayObjectContainer(),
                            text: new egret.DisplayObjectContainer(),
                            dialog: new egret.DisplayObjectContainer(),
                            chars: new egret.DisplayObjectContainer(),
                            branch: new egret.DisplayObjectContainer()
                        };
                        this.layer = new egret.DisplayObjectContainer();
                        this.main = new egret.DisplayObjectContainer();
                        this.bg = new egret.Bitmap();
                        this.bg.name = 'bg';
                        this.fbg = new egret.Bitmap();
                        this.fbg.name = 'fbg';
                        // 背景
                        this.layers.bg.addChild(this.bg);
                        // this.layers.bg.addChild(this.cg)
                        // 前景
                        this.layers.bg.addChild(this.fbg);
                        // 弹窗
                        // this.dialog = new Dialog()
                        // this.layers.dialog.addChild(this.dialog)
                        // 分支抉择
                        this.branch = new Branch_1.default();
                        // this.layers.branch.width = this.width
                        // this.layers.branch.height = this.height
                        this.layers.branch.addChild(this.branch);
                        // console.log(this.branch, 'branch')
                        // // this.main.touchEnabled = true
                        // this.layers.branch.touchEnabled = true
                        // console.log(this.layers.branch, 123)
                        this.main.addChild(this.layers.bg);
                        this.main.addChild(this.layers.chars);
                        // 主场景
                        this.layer.addChild(this.main);
                        // 对话框
                        // this.layer.addChild(this.layers.dialog)
                        // 字幕
                        this.text = new Text_1.default();
                        this.layers.text.addChild(this.text);
                        this.layer.addChild(this.layers.text);
                        // 分支选择
                        this.layer.addChild(this.layers.branch);
                        this.addChild(this.layer);
                        // 添加动画
                        this.player = new Player_1.default();
                        // 添加音频
                        this.bgm = new Bgm_1.default();
                        // 点击触发下一条剧情 
                        this.touchEnabled = true;
                        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                            var mouse = new egret.Bitmap();
                            var texture = RES.getRes('mouse#0');
                            mouse.texture = texture;
                            mouse.x = e.stageX;
                            mouse.y = e.stageY;
                            mouse.anchorOffsetX = (texture.textureWidth) / 2;
                            mouse.anchorOffsetY = (texture.textureHeight) / 2;
                            mouse.width = texture.textureWidth;
                            mouse.height = texture.textureHeight;
                            mouse.scaleX = 0.4;
                            mouse.scaleY = 0.4;
                            var i = 0;
                            var cb = function () {
                                if (i + 1 >= 30) {
                                    _this.removeChild(mouse);
                                    return;
                                }
                                mouse.texture = RES.getRes("mouse#" + ++i);
                                requestAnimationFrame(cb);
                            };
                            requestAnimationFrame(cb);
                            _this.addChild(mouse);
                        }, this);
                        // 加载点击事件
                        return [4 /*yield*/, Script_1.default.event.post('scene-touch')
                            // 加载剧本
                        ];
                    case 1:
                        // 加载点击事件
                        _a.sent();
                        // 加载剧本
                        return [4 /*yield*/, Script_1.default.event.post('script-load', {
                                name: 'main.kc',
                                autoStart: true
                            })];
                    case 2:
                        // 加载剧本
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 隐藏对话框
    Scene.prototype.hideDialog = function () {
    };
    // 设置回调函数
    Scene.prototype.then = function (callback) {
        if (callback === void 0) { callback = null; }
        this.callback = callback;
        return this;
    };
    // 私有属性不允许直接读取，而是通过func来读取或者赋值
    // 切换对话模式模式
    Scene.prototype.toMode = function () {
        // TODO 
        return this;
    };
    // 切换背景
    Scene.prototype.updateBg = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var params, _a, x, y, texture, scale;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('updateBg');
                        params = ctx.params;
                        _a = this.position, x = _a.x, y = _a.y;
                        if (this.bgName) {
                            // TODO 如果当前存在背景，是否需要过渡动画切换
                        }
                        this.bgName = "" + params.file;
                        return [4 /*yield*/, RES.getResAsync(this.bgName)];
                    case 1:
                        texture = _b.sent();
                        this.bg.texture = texture;
                        // const width = this.bg.texture.textureWidth
                        // const height = this.bg.texture.textureHeight
                        // const stageWidth = this.stage.width
                        // const stageHeight = this.stage.height
                        // console.log(width, height, stageWidth, stageHeight)
                        // let scale = 1
                        // if ((stageHeight / stageWidth) > ( height / width)) {
                        //   scale = stageHeight / height
                        //   console.log('height')
                        // } else {
                        //   scale = stageWidth / width
                        //   console.log('width')
                        // }
                        // console.log(scale)
                        // this.bg.width = this.layers.bg.width = this.bg.texture.textureWidth
                        // this.bg.height = this.layers.bg.height = this.bg.texture.textureHeight
                        // this.offset = {
                        //   x: (this.stage.stageWidth - this.bg.width) / 2,
                        //   y: (this.stage.stageHeight - this.bg.height) / 2
                        // }
                        // 以舞台坐标轴起点为锚点
                        // this.layers.bg.anchorOffsetX = -this.offset.x
                        // this.layers.bg.anchorOffsetY = -this.offset.y
                        // this.layers.bg.x = x
                        // this.layers.bg.y = y
                        // this.layers.bg.scaleX = this.bgScale
                        // this.layers.bg.scaleY = this.bgScale
                        // fixed height
                        if (this.stage.orientation === egret.OrientationMode.LANDSCAPE) {
                            this.bg.width = texture.textureWidth;
                            this.bg.height = texture.textureHeight;
                            // 横屏
                            if (texture.textureWidth > this.stage.stageWidth) {
                                this.bg.anchorOffsetX = this.bg.width / 2;
                                this.bg.anchorOffsetY = this.bg.height / 2;
                                this.bg.x = this.stage.stageWidth / 2;
                                this.bg.y = this.stage.stageHeight / 2;
                                scale = this.stage.stageHeight / texture.textureHeight;
                                this.bg.scaleX = scale;
                                this.bg.scaleY = scale;
                            }
                            else {
                                // TODO 需要进行放大
                            }
                        }
                        else {
                            // 竖屏
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 切换前景
    Scene.prototype.updateFbg = function () {
        console.log('fbg');
    };
    // 清除所有场景
    Scene.prototype.clear = function () {
        // TODO
        // 清除所有的立绘
        this.chars.clear();
    };
    Scene.prototype.bindTouchEvent = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('bindTouchEvent');
                        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouch, this);
                        return [4 /*yield*/, next()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Scene.prototype.unbindTouchEvent = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('unbindTouchEvent');
                        this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouch, this);
                        return [4 /*yield*/, next()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Scene;
}(egret.DisplayObjectContainer));
exports.default = Scene;
window["Scene"] = Scene;
__reflect(Scene.prototype,"Scene",[]); 


/***/ }),

/***/ "./src/lib/components/Text.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Script_1 = __webpack_require__("./src/lib/utils/Script.ts");
var Audio_1 = __webpack_require__("./src/lib/components/Audio.ts");
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super.call(this) || this;
        _this.textConfig = {
            size: 20,
            lineSpacing: 15,
            style: {
                x: 35,
                y: 50
            }
        };
        // 文字宽度安全显示区域 
        _this.safeWidth = 0;
        // 文字高度安全显示区域 
        _this.safeHeight = 0;
        // 是否需要清空
        _this.clearText = false;
        // 已经显示文字的光标
        _this.showCursor = 0;
        _this.promisePoll = [];
        _this.sound = null;
        _this.animate = function () {
            if (_this.currentCursor === _this.wordsLength) {
                _this.endAnimate();
                return;
            }
            var duration = Date.now() - _this.startTime;
            var currentCursor = ~~(duration * _this.cps / 1000);
            if (currentCursor !== _this.currentCursor) {
                if (_this.clearText) {
                    _this.charWords.text = '';
                }
                // const text = this.charWords.text
                // const newText = this.words.substring(text.length + this.showCursor , this.currentCursor)
                // // TODO 换行问题， 英文换行和富文本换行，暂时不考虑
                // this.testText.text = text + newText
                // let back = 0
                // while (this.testText.height > this.charWords.height) {
                //   back++
                //   this.testText.text =  this.words.substr(text.length + this.showCursor - 1, this.currentCursor - back + 1)
                //   this.clearText = true
                // }
                _this.charWords.text = _this.words.substr(0, _this.currentCursor);
                _this.currentCursor = currentCursor;
            }
            requestAnimationFrame(_this.animate);
        };
        _this.endAnimate = function () {
            _this.currentCursor = _this.wordsLength;
            _this.charWords.text = _this.words;
            _this.clearText = false;
            _this.showCursor = 0;
            _this.resolve();
        };
        _this.visible = false;
        _this.sound = new Audio_1.default();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        Script_1.default.event.use('script-exec', _this.handleScriptExec.bind(_this));
        return _this;
    }
    Text.prototype.onAddToStage = function () {
        // this.orientation = egret.OrientationMode.LANDSCAPE ===
    };
    Text.prototype.handleScriptExec = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var command, _a, content, _b, position, file, mode, sound, _c, padding, soundskip, flags, paddingLeft, paddingTop, paddingSplit, texture, _d, name_1, mood, character, renderTexture, W, width, height;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        command = ctx.command, _a = ctx.params, content = _a.content, _b = _a.position, position = _b === void 0 ? 'bottom' : _b, file = _a.file, mode = _a.mode, sound = _a.sound, _c = _a.padding, padding = _c === void 0 ? '20' : _c, soundskip = _a.soundskip, flags = ctx.flags;
                        if (!(command === 'text')) return [3 /*break*/, 3];
                        if (this.charWords)
                            this.charWords.text = '';
                        if (this.dialogBg)
                            this.removeChild(this.dialogBg);
                        if (this.characterAvater) {
                            this.removeChild(this.characterAvater);
                            this.characterAvater = null;
                        }
                        paddingLeft = 5;
                        paddingTop = 5;
                        if (padding) {
                            paddingSplit = padding.split(' ');
                            if (paddingSplit.length === 2) {
                                paddingTop = parseFloat(paddingSplit[0]);
                                paddingLeft = parseFloat(paddingSplit[1]);
                            }
                            else
                                paddingTop = paddingLeft = parseFloat(paddingSplit[0]);
                        }
                        this.visible = true;
                        this.dialogBg = new egret.Bitmap();
                        this.dialogBg.name = 'dialogBg';
                        // 字幕有背景图
                        if (file) {
                            texture = RES.getRes(file);
                            this.dialogBg.texture = texture;
                            this.resize();
                        }
                        else {
                            this.dialogBg.width = this.stage.stageWidth * 1;
                            this.dialogBg.height = this.stage.stageHeight * 0.3;
                        }
                        this.setBgPosition(position);
                        if (content) {
                            this.cps = 20; // 字幕出现速度
                            this.words = content;
                            this.charWords = new egret.TextField();
                            this.resolve = null;
                            this.charWords.text = '';
                            this.charWords.wordWrap = true;
                            this.charWords.size = this.textConfig.size;
                            this.charWords.lineSpacing = this.textConfig.lineSpacing;
                            this.charWords.x = this.textConfig.style.x + this.dialogBg.x + paddingLeft;
                            this.charWords.y = this.textConfig.style.y + this.dialogBg.y + paddingTop;
                            this.safeWidth = this.dialogBg.width - this.textConfig.style.x * 2;
                            this.safeHeight = this.dialogBg.height - this.textConfig.style.y * 2;
                            this.charWords.width = this.safeWidth;
                            if (!file)
                                this.setWordPosition(position);
                        }
                        if (!mode) return [3 /*break*/, 2];
                        _d = Script_1.default.CHAR, name_1 = _d.name, mood = _d.mood;
                        if (!(name_1 && mood)) return [3 /*break*/, 2];
                        return [4 /*yield*/, RES.getResAsync("char_" + name_1 + "_" + mood)
                            // 胸像模式
                        ];
                    case 1:
                        character = _e.sent();
                        // 胸像模式
                        if (mode === 'chest') {
                            renderTexture = new egret.RenderTexture();
                            W = 700;
                            renderTexture.drawToTexture(new egret.Bitmap(character), new egret.Rectangle((character.textureWidth - W) / 2, 0, W, character.textureHeight * 0.25), 1);
                            //将绘制好的 RenderTexture 进行显示
                            this.characterAvater = new egret.Bitmap(renderTexture);
                            width = 150;
                            height = (this.characterAvater.texture.textureHeight / this.characterAvater.texture.textureWidth) * width;
                            this.characterAvater.width = width;
                            this.characterAvater.height = height;
                            this.characterAvater.x = this.dialogBg.x + paddingLeft;
                            this.characterAvater.y = this.dialogBg.y - this.characterAvater.height;
                            this.addChild(this.characterAvater);
                        }
                        _e.label = 2;
                    case 2:
                        if (sound) {
                            this.sound.play(sound);
                            if (!soundskip) {
                                // TODO 优化Audio 以及头像
                                this.promisePoll.push(new Promise(function (resolve) {
                                    // 监听到事件了
                                    _this.sound.addEventListener('stop', function () {
                                        resolve();
                                    }, _this);
                                }));
                            }
                        }
                        this.addChild(this.dialogBg);
                        this.addChild(this.charWords);
                        this.promisePoll.push(this.createAnimate());
                        return [3 /*break*/, 5];
                    case 3:
                        if (!this.sound.isPlaying) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.sound.stop()];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5: return [4 /*yield*/, Promise.all(this.promisePoll)];
                    case 6:
                        _e.sent();
                        this.promisePoll = [];
                        return [4 /*yield*/, next()];
                    case 7:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Text.prototype.resize = function () {
        if (this.dialogBg) {
            var maxWidth = this.stage.stageWidth;
            var maxHeight = this.stage.stageHeight * 0.3;
            var tempWidth = 0;
            var tempHeight = 0;
            if (this.dialogBg.width / this.dialogBg.height >= maxWidth / maxHeight) {
                if (this.dialogBg.width > maxWidth) {
                    tempWidth = maxWidth;
                    // 按原图片的比例进行缩放
                    tempHeight = (this.dialogBg.height * maxWidth) / this.dialogBg.width;
                }
                else {
                    // 按原图片的大小进行缩放
                    tempWidth = this.dialogBg.width;
                    tempHeight = this.dialogBg.width;
                }
            }
            else {
                if (this.dialogBg.height > maxHeight) {
                    tempHeight = maxHeight;
                    tempWidth = (this.dialogBg.width * maxHeight) / this.dialogBg.height;
                }
                else {
                    tempWidth = this.dialogBg.width;
                    tempHeight = this.dialogBg.height;
                }
            }
            this.dialogBg.width = tempWidth;
            this.dialogBg.height = tempHeight;
        }
    };
    Text.prototype.createAnimate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentCursor = 0;
                        this.startTime = Date.now();
                        this.wordsLength = this.words.length;
                        this.animate();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.resolve = resolve;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 设置位置
    Text.prototype.setBgPosition = function (position) {
        var padding = 20;
        var x, y;
        x = y = padding;
        switch (position) {
            case 'lt':
                break;
            case 'rt':
                x = this.stage.stageWidth - this.dialogBg.width - padding;
                break;
            case 'lb':
                y = this.stage.stageHeight - this.dialogBg.height - padding;
                break;
            case 'rb':
                x = this.stage.stageWidth - this.dialogBg.width - padding;
                y = this.stage.stageHeight - this.dialogBg.height - padding;
                break;
            case 'top':
                x = (this.stage.stageWidth - this.dialogBg.width) / 2;
                break;
            case 'left':
                y = (this.stage.stageHeight - this.dialogBg.height) / 2;
                break;
            case 'right':
                x = this.stage.stageWidth - this.dialogBg.width - padding;
                y = (this.stage.stageHeight - this.dialogBg.height) / 2;
                break;
            case 'bottom':
                x = (this.stage.stageWidth - this.dialogBg.width) / 2;
                y = this.stage.stageHeight - this.dialogBg.height - padding;
                break;
            case 'middle':
                x = (this.stage.stageWidth - this.dialogBg.width) / 2;
                y = (this.stage.stageHeight - this.dialogBg.height) / 2;
                break;
            default:
                x = (this.stage.stageWidth - this.dialogBg.width) / 2;
                y = this.stage.stageHeight - this.dialogBg.height - padding;
                break;
        }
        this.dialogBg.x = x;
        this.dialogBg.y = y;
    };
    Text.prototype.setWordPosition = function (position) {
        var padding = 20;
        var x, y, textAlign;
        x = y = padding;
        switch (position) {
            case 'lt':
                textAlign = egret.HorizontalAlign.LEFT;
                break;
            case 'rt':
                textAlign = egret.HorizontalAlign.RIGHT;
                x = this.dialogBg.width - this.charWords.width - padding;
                break;
            case 'lb':
                textAlign = egret.HorizontalAlign.LEFT;
                y = this.dialogBg.y + this.dialogBg.height - padding;
                break;
            case 'rb':
                textAlign = egret.HorizontalAlign.RIGHT;
                x = this.dialogBg.width - this.charWords.width - padding;
                y = this.dialogBg.y + this.dialogBg.height - padding;
                break;
            case 'top':
                textAlign = egret.HorizontalAlign.CENTER;
                x = (this.dialogBg.width - this.charWords.width) / 2;
                break;
            case 'left':
                textAlign = egret.HorizontalAlign.LEFT;
                y = (this.stage.stageHeight - this.charWords.height) / 2;
                break;
            case 'right':
                textAlign = egret.HorizontalAlign.RIGHT;
                x = this.dialogBg.width - this.charWords.width - padding;
                y = (this.stage.stageHeight - this.charWords.height) / 2;
                break;
            case 'bottom':
                textAlign = egret.HorizontalAlign.CENTER;
                x = (this.dialogBg.width - this.charWords.width) / 2;
                y = this.dialogBg.y + this.dialogBg.height - padding;
                break;
            case 'middle':
                textAlign = egret.HorizontalAlign.CENTER;
                x = (this.dialogBg.width - this.charWords.width) / 2;
                y = (this.stage.stageHeight - this.charWords.height) / 2;
                break;
            default:
                break;
        }
        this.charWords.textAlign = textAlign;
        this.charWords.x = x;
        this.charWords.y = y;
    };
    return Text;
}(egret.DisplayObjectContainer));
exports.default = Text;
window["Text"] = Text;
__reflect(Text.prototype,"Text",[]); 


/***/ }),

/***/ "./src/lib/events/addon/index.ts":
/***/ (function(module, exports) {

var Sakura = window['Sakura']; 
window["Sakura"] = Sakura;


/***/ }),

/***/ "./src/lib/events/core/index.ts":
/***/ (function(module, exports) {

var Sakura = window['Sakura']; 
window["Sakura"] = Sakura;


/***/ }),

/***/ "./src/lib/stories/actions/Comment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Comment_single: function (head, text) {
        return {
            type: 'comment',
            value: text.parse()
        };
    },
    Comment_multi: function (head, text, foot) {
        return {
            type: 'comment',
            value: text.parse()
        };
    },
};


/***/ }),

/***/ "./src/lib/stories/actions/Exp.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Scripts: function (n) {
        var e_1, _a;
        var ret = [];
        window["ret"] = ret;
        try {
            for (var _b = __values(n.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                ret.push(child.parse());
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return ret;
    }
};


/***/ }),

/***/ "./src/lib/stories/actions/Expression.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Exp_bool: function (JudgeExp, booleanOperator, Exp) {
        return {
            type: 'expression',
            value: {
                left: JudgeExp.parse(),
                operator: booleanOperator.parse(),
                right: Exp.parse()
            }
        };
    },
    JudgeExp_judge: function (left, operator, right) {
        return {
            type: 'expression',
            value: {
                left: left.parse(),
                operator: operator.parse(),
                right: right.parse()
            }
        };
    }
};


/***/ }),

/***/ "./src/lib/stories/actions/LogicBlock.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    LogicBlock_IF: function (IF, LogicBlock1, ELSEIFs, LogicBlock2s, ELSE, LogicBlock3, END) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e;
        // get conditions
        var conditions = [IF.parse()];
        window["conditions"] = conditions;
        try {
            for (var _f = __values(ELSEIFs.children), _g = _f.next(); !_g.done; _g = _f.next()) {
                var ELSEIF = _g.value;
                conditions.push(ELSEIF.parse());
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // get stroy block
        var blocks = [];
        window["blocks"] = blocks;
        var block1 = [];
        window["block1"] = block1;
        try {
            for (var _h = __values(LogicBlock1.children), _j = _h.next(); !_j.done; _j = _h.next()) {
                var LogicBlock = _j.value;
                block1.push(LogicBlock.parse());
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
            }
            finally { if (e_2) throw e_2.error; }
        }
        blocks.push(block1);
        try {
            for (var _k = __values(LogicBlock2s.children), _l = _k.next(); !_l.done; _l = _k.next()) {
                var LogicBlock2 = _l.value;
                var block2 = [];
                window["block2"] = block2;
                try {
                    for (var _m = (e_4 = void 0, __values(LogicBlock2.children)), _o = _m.next(); !_o.done; _o = _m.next()) {
                        var LogicBlock = _o.value;
                        block2.push(LogicBlock.parse());
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                blocks.push(block2);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var block3 = [];
        window["block3"] = block3;
        if (LogicBlock3.child(0)) {
            try {
                for (var _p = __values(LogicBlock3.child(0).children), _q = _p.next(); !_q.done; _q = _p.next()) {
                    var LogicBlock = _q.value;
                    block3.push(LogicBlock.parse());
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        blocks.push(block3);
        return {
            type: 'logic',
            name: 'if',
            conditions: conditions,
            blocks: blocks
        };
    },
    LogicBlock_WHILE: function (WHILE, LogicBlocks, END) {
        var e_6, _a;
        var condition = WHILE.parse();
        window["condition"] = condition;
        var block = [];
        window["block"] = block;
        try {
            for (var _b = __values(LogicBlocks.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var LogicBlock = _c.value;
                block.push(LogicBlock.parse());
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return {
            type: 'logic',
            name: 'while',
            condition: condition,
            block: block
        };
    },
    LogicBlock_FOREACH: function (FOREACH, LogicBlocks, END) {
        var e_7, _a;
        var condition = FOREACH.parse();
        window["condition"] = condition;
        var block = [];
        window["block"] = block;
        try {
            for (var _b = __values(LogicBlocks.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var LogicBlock = _c.value;
                block.push(LogicBlock.parse());
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return {
            type: 'logic',
            name: 'foreach',
            child: condition.child,
            children: condition.children,
            block: block
        };
    },
    IF: function (head, Expression) {
        // condtion Object
        return Expression.parse();
    },
    ELSEIF: function (head, Expression) {
        // condtion Object
        return Expression.parse();
    },
    WHILE: function (head, Expression) {
        // condtion Object
        return Expression.parse();
    },
    FOREACH: function (head, childVar, _in, childrenVar) {
        return {
            child: childVar.parse(),
            children: childrenVar.parse()
        };
    },
    LET_assign: function (head, variable, operator, Exp) {
        var explicit = head.parse().length > 1;
        window["explicit"] = explicit;
        return {
            type: 'logic',
            name: 'let',
            explicit: explicit,
            left: variable.parse(),
            right: Exp.parse()
        };
    },
    LET_nonAssign: function (head, variable) {
        return {
            type: 'logic',
            name: 'let',
            explicit: true,
            left: variable.parse(),
            right: { type: 'value', value: null }
        };
    }
};


/***/ }),

/***/ "./src/lib/stories/actions/arithmetic.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mathExp(left, operator, right) {
    return {
        type: 'expression',
        value: {
            left: left.parse(),
            operator: operator.parse(),
            right: right.parse()
        }
    };
}
window["mathExp"] = mathExp;
exports.default = {
    variable: function (prefix, n) {
        return {
            type: 'variable',
            prefix: prefix.parse() || null,
            value: n.parse()
        };
    },
    AddExp_add: mathExp,
    MulExp_mul: mathExp,
    ExpExp_power: mathExp,
    PriExp_paren: function (head, MathExp, foot) {
        return MathExp.parse();
    },
    PriExp_neg: function (neg, PriExp) {
        return {
            type: 'expression',
            value: {
                left: {
                    type: 'value',
                    value: 0
                },
                operator: '-',
                right: PriExp.parse()
            }
        };
    },
    PriExp_pos: function (pos, PriExp) {
        return {
            type: 'expression',
            value: {
                left: {
                    type: 'value',
                    value: 0
                },
                operator: '+',
                right: PriExp.parse()
            }
        };
    }
};


/***/ }),

/***/ "./src/lib/stories/actions/base.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function parseSignedHexNumber(string) {
    var char = string[0];
    if (char === '-') {
        return -Number(string.substr(1));
    }
    else {
        return Number(string.substr(1));
    }
}
window["parseSignedHexNumber"] = parseSignedHexNumber;
exports.default = {
    value: function (n) {
        var value;
        window["value"] = value;
        switch (n.ctorName) {
            case 'string':
                value = n.parse();
                break;
            case 'number':
                value = Number(n.parse()) || parseSignedHexNumber(n.parse());
                break;
            case 'boolean':
                value = (n.parse().toLowerCase() === 'true');
                break;
            case 'array':
                value = n.parse();
                break;
            default: value = null;
        }
        return {
            type: 'value',
            value: value
        };
    },
    number_sign: function (sign, number) {
        return sign.parse() + number.parse();
    },
    number_fract: function (number, dot, decimal) {
        return number.parse() + '.' + decimal.parse();
    },
    number_hex: function (head, octdigit) {
        return '0x' + octdigit.parse();
    },
    array: function (head, list, foot) {
        return list.parse().map(function (item) { return item.value; });
    },
    nonemptyListOf: function (a, b, c) {
        return __spread([a.parse()], c.parse());
    },
    string_doubleQuote: function (quoteA, stringContent, quoteB) {
        return stringContent.parse();
    },
    string_singleQuote: function (quoteA, stringContent, quoteB) {
        return stringContent.parse();
    },
    _iter: function (children) {
        var e_1, _a;
        var ret = [];
        window["ret"] = ret;
        var hasObject = false;
        window["hasObject"] = hasObject;
        try {
            for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                var value = child.parse();
                window["value"] = value;
                hasObject = hasObject || (typeof value === 'object');
                ret.push(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return hasObject ? ret : ret.join('');
    },
    _terminal: function () {
        return this.primitiveValue;
    }
};


/***/ }),

/***/ "./src/lib/stories/actions/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __webpack_require__("./src/lib/stories/actions/base.ts");
var arithmetic_1 = __webpack_require__("./src/lib/stories/actions/arithmetic.ts");
var Comment_1 = __webpack_require__("./src/lib/stories/actions/Comment.ts");
var Exp_1 = __webpack_require__("./src/lib/stories/actions/Exp.ts");
var Expression_1 = __webpack_require__("./src/lib/stories/actions/Expression.ts");
var keyvalue_1 = __webpack_require__("./src/lib/stories/actions/keyvalue.ts");
var LogicBlock_1 = __webpack_require__("./src/lib/stories/actions/LogicBlock.ts");
var story_1 = __webpack_require__("./src/lib/stories/actions/story.ts");
exports.default = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, base_1.default), arithmetic_1.default), Comment_1.default), Exp_1.default), Expression_1.default), keyvalue_1.default), LogicBlock_1.default), story_1.default);


/***/ }),

/***/ "./src/lib/stories/actions/keyvalue.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    content_mul: function (kv, space, content) {
        var ret = {
            flags: [],
            params: {}
        };
        window["ret"] = ret;
        var result = kv.parse();
        window["result"] = result;
        if (result.length === 1) {
            ret.flags.push(result[0]);
        }
        else {
            ret.params[result[0]] = result[1];
        }
        var ret2 = content.parse();
        window["ret2"] = ret2;
        ret.flags = ret.flags.concat(ret2.flags);
        Object.assign(ret.params, ret2.params);
        return ret;
    },
    content_base: function (kv) {
        var ret = {
            flags: [],
            params: {}
        };
        window["ret"] = ret;
        var result = kv.parse();
        window["result"] = result;
        if (result.length === 1) {
            ret.flags.push(result[0]);
        }
        else {
            ret.params[result[0]] = result[1];
        }
        return ret;
    },
    keyValue_param: function (key, syntex, value) {
        return [key.parse(), value.parse()];
    },
    keyValue_flag: function (key) {
        return [key.parse()];
    }
};


/***/ }),

/***/ "./src/lib/stories/actions/story.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var breaks = ['branch', 'story', '*', 'text', 'player'];
window["breaks"] = breaks;
exports.default = {
    StoryLine_formatA: function (head, command, content, foot) {
        console.warn('[Deprecated] Command beginning with `@` will no longer be supported.');
        var content = content.parse();
        window["content"] = content;
        return {
            type: 'content',
            command: command.parse(),
            flags: content.flags,
            params: content.params,
        };
    },
    StoryLine_formatB: function (head, command, content, foot) {
        var content = content.parse();
        window["content"] = content;
        var command = command.parse();
        window["command"] = command;
        return {
            type: 'content',
            command: command,
            flags: content.flags,
            params: content.params,
            break: breaks.indexOf(command) > -1
        };
    },
    StoryLine_formatC: function (head, command, foot) {
        console.warn('[Deprecated] Command beginning with `@` will no longer be supported.');
        return {
            type: 'content',
            command: command.parse(),
            flags: [],
            params: {},
        };
    },
    StoryLine_formatD: function (head, command, foot) {
        return {
            type: 'content',
            command: command.parse(),
            flags: [],
            params: {},
        };
    },
    StoryLine_formatE: function (text) {
        var textContent = text.parse();
        window["textContent"] = textContent;
        var command = '*';
        window["command"] = command;
        return {
            type: 'content',
            command: command,
            flags: [],
            params: { raw: { type: 'value', value: textContent } },
            break: breaks.indexOf(command) > -1
        };
    },
    StoryLine_formatF: function (head, content, closeHead, text, foot) {
        var textContent = text.parse();
        window["textContent"] = textContent;
        var c = content.parse();
        window["c"] = c;
        var command = '*';
        window["command"] = command;
        return {
            type: 'content',
            command: '*',
            flags: c.flags,
            params: __assign({ raw: { type: 'value', value: textContent } }, c.params),
            break: breaks.indexOf(command) > -1
        };
    },
    command: function (key) {
        return key.parse();
    }
};


/***/ }),

/***/ "./src/lib/stories/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = __webpack_require__("./src/lib/stories/libs/parser.ts");
var variable_1 = __webpack_require__("./src/lib/stories/libs/variable.ts");
var block_1 = __webpack_require__("./src/lib/stories/libs/block.ts");
var StoryScript = /** @class */ (function () {
    function StoryScript(cb) {
        this.BLOCKSTACK = [];
        this.CURRENTBLOCK = null;
        this.BLOCKSTACK = [];
        this.CURRENTBLOCK = null;
        this.onGlobalChanged = cb;
    }
    StoryScript.prototype.getBlockData = function () {
        var e_1, _a;
        var blocks = [];
        try {
            for (var _b = __values(__spread(this.BLOCKSTACK, [this.CURRENTBLOCK]).reverse().entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), node = _d[0], block = _d[1];
                var blockData = block.getData();
                blockData.scope = variable_1.default.getScope(node);
                blocks.push(blockData);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return blocks.reverse();
    };
    StoryScript.prototype.getGlobalScope = function () {
        return variable_1.default.getGlobalScope();
    };
    StoryScript.prototype.getSaveScope = function () {
        return variable_1.default.getSaveScope();
    };
    // @deprecated
    StoryScript.prototype.getData = function () {
        console.warn('[Storyscript] getData() has been deprecated!');
        return {
            blocks: this.getBlockData(),
            globalScope: this.getGlobalScope(),
            saveScope: this.getSaveScope()
        };
    };
    StoryScript.prototype.setGlobalScope = function (scope) {
        variable_1.default.setGlobalScope(scope);
    };
    StoryScript.prototype.setSaveScope = function (scope) {
        variable_1.default.setSaveScope(scope);
    };
    StoryScript.prototype.setBlockData = function (blocks) {
        var scopes = [blocks[0].scope];
        variable_1.default.setScopes(scopes);
        this.CURRENTBLOCK.setCurrentLine(blocks[0].currentLine);
        if (blocks.length === 1) {
            return true;
        }
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            var nextBlock = blocks[i + 1];
            var lastLine = block.currentLine - 1;
            var line = this.CURRENTBLOCK.getLine(lastLine);
            if (line.name === nextBlock.type) {
                switch (line.name) {
                    case 'if':
                        var ifBlock = new block_1.IfBlock(line.blocks[nextBlock.blockIndex], nextBlock.blockIndex);
                        ifBlock.setCurrentLine(nextBlock.currentLine);
                        variable_1.default.pushScope(nextBlock.scope);
                        // variable.popScope();
                        this.BLOCKSTACK.push(this.CURRENTBLOCK);
                        this.CURRENTBLOCK = ifBlock;
                        break;
                    case 'while':
                        var whileBlock = new block_1.WhileBlock(line.block, line.condition);
                        whileBlock.setCurrentLine(nextBlock.currentLine);
                        variable_1.default.pushScope(nextBlock.scope);
                        // variable.popScope();
                        this.BLOCKSTACK.push(this.CURRENTBLOCK);
                        this.CURRENTBLOCK = whileBlock;
                        break;
                    case 'foreach':
                        var foreachBlock = new block_1.ForeachBlock(line.block, line.child, line.children);
                        foreachBlock.setCurrentLine(nextBlock.currentLine);
                        variable_1.default.pushScope(nextBlock.scope);
                        // variable.popScope();
                        this.BLOCKSTACK.push(this.CURRENTBLOCK);
                        this.CURRENTBLOCK = foreachBlock;
                        break;
                    default:
                        throw 'Bad savedata';
                }
            }
            else {
                throw 'Bad savedata';
            }
        }
    };
    // @deprecated
    StoryScript.prototype.setData = function (object) {
        console.warn('[Storyscript] setData() has been deprecated!');
        this.setGlobalScope(object.globalScope);
        this.setSaveScope(object.saveScope);
        this.setBlockData(object.blocks);
    };
    StoryScript.prototype.load = function (script) {
        var result = parser_1.default.parse(script);
        var system = new block_1.IfBlock(result);
        this.CURRENTBLOCK = system;
        this.BLOCKSTACK = [];
    };
    StoryScript.prototype[Symbol.iterator] = function () {
        return this;
    };
    StoryScript.prototype.next = function () {
        var _a = this.CURRENTBLOCK.next(), value = _a.value, done = _a.done;
        if (done) {
            // 当前block结束回退到上一个block
            var CURRENTBLOCK = this.BLOCKSTACK.pop();
            if (CURRENTBLOCK) {
                this.CURRENTBLOCK = CURRENTBLOCK;
                variable_1.default.popScope();
                return this.next();
            }
            else {
                return { done: true };
            }
        }
        else {
            var retValue = this.handleScript(value);
            // 解析返回状态给渲染器
            if (retValue) {
                return { value: retValue, done: false };
            }
            else {
                // handleLogic will return undefined, so should exec next line
                return this.next();
            }
        }
    };
    StoryScript.prototype.handleScript = function (argLine) {
        var line = Object.assign({}, argLine);
        if (line.type === 'content') {
            return this.handleContent(line);
        }
        else if (line.type === 'logic') {
            return this.handleLogic(line);
        }
        else if (line.type === 'comment') {
            return null;
        }
        else {
            throw "Unrecognized type " + line.type;
        }
    };
    StoryScript.prototype.handleContent = function (line) {
        var e_2, _a;
        var params = line.params;
        var keys = Object.keys(params);
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                params[key] = params[key].value;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return line;
    };
    StoryScript.prototype.handleLogic = function (line) {
        switch (line.name) {
            case 'if':
                return this.handleLogic_IF(line);
                break;
            case 'while':
                return this.handleLogic_WHILE(line);
                break;
            case 'foreach':
                return this.handleLogic_FOREACH(line);
                break;
            case 'let':
                return this.handleLogic_LET(line);
                break;
            //TODO InserBlock
            // case 'let': return this.handleLogic_LET(line);break;
            default: throw "Unrecognized name " + line.name;
        }
    };
    StoryScript.prototype.handleLogic_IF = function (line) {
        var e_3, _a;
        var blockIndex = 0;
        try {
            for (var _b = __values(line.conditions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var condition = _c.value;
                if (variable_1.default.calc(condition)) {
                    break;
                }
                else {
                    blockIndex++;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.BLOCKSTACK.push(this.CURRENTBLOCK);
        var blockData = line.blocks[blockIndex];
        var block = new block_1.IfBlock(blockData, blockIndex);
        this.CURRENTBLOCK = block;
        // variable.pushScope();
    };
    StoryScript.prototype.handleLogic_WHILE = function (line) {
        var result = variable_1.default.calc(line.condition);
        if (result) {
            this.BLOCKSTACK.push(this.CURRENTBLOCK);
            var blockData = line.block;
            var block = new block_1.WhileBlock(blockData, line.condition);
            this.CURRENTBLOCK = block;
        }
        // variable.pushScope();
    };
    StoryScript.prototype.handleLogic_FOREACH = function (line) {
        var children = variable_1.default.calc(line.children);
        if (children instanceof Array) {
            this.BLOCKSTACK.push(this.CURRENTBLOCK);
            var blockData = line.block;
            var block = new block_1.ForeachBlock(blockData, line.child, line.children);
            this.CURRENTBLOCK = block;
        }
        else {
            throw '[Foreach] Children must be a array';
        }
        // variable.pushScope();
    };
    StoryScript.prototype.handleLogic_LET = function (line) {
        if (line.left.prefix === '$') {
            this.onGlobalChanged && this.onGlobalChanged();
        }
        variable_1.default.assign(line.left.value, line.left.prefix, line.right, line.explicit);
    };
    StoryScript.prototype.handleScope = function (key, value) {
        console.log('handleScope');
        variable_1.default.assign(key, '', value, false);
    };
    return StoryScript;
}());
exports.default = StoryScript;
window["StoryScript"] = StoryScript;
__reflect(StoryScript.prototype,"StoryScript",[]); 


/***/ }),

/***/ "./src/lib/stories/libs/block.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertedBlock = exports.ForeachBlock = exports.WhileBlock = exports.IfBlock = void 0;
var variable_1 = __webpack_require__("./src/lib/stories/libs/variable.ts");
var IfBlock = /** @class */ (function () {
    function IfBlock(data, blockIndex) {
        this.reset();
        this.data = data;
        this.blockIndex = blockIndex;
        variable_1.default.pushScope();
    }
    IfBlock.prototype.reset = function () {
        this.data = [];
        this.currentLine = 0;
        this.done = false;
    };
    IfBlock.prototype.getData = function () {
        return {
            type: 'if',
            currentLine: this.currentLine,
            blockIndex: this.blockIndex
        };
    };
    IfBlock.prototype.setCurrentLine = function (no) {
        this.currentLine = no;
    };
    IfBlock.prototype.getLine = function (no) {
        return this.data[no];
    };
    IfBlock.prototype[Symbol.iterator] = function () {
        return this;
    };
    IfBlock.prototype.next = function () {
        if (this.currentLine < this.data.length) {
            var line = this.data[this.currentLine++];
            return { value: line, done: false };
        }
        else {
            // !this.done && variable.popScope();
            // this.done = true;
            return { done: true };
        }
    };
    return IfBlock;
}());
exports.IfBlock = IfBlock;
window["IfBlock"] = IfBlock;
__reflect(IfBlock.prototype,"IfBlock",[]); 
var WhileBlock = /** @class */ (function () {
    function WhileBlock(data, condition) {
        this.reset();
        this.data = data;
        this.condition = condition;
        variable_1.default.pushScope();
    }
    WhileBlock.prototype.reset = function () {
        this.data = [];
        this.currentLine = 0;
        this.done = false;
    };
    WhileBlock.prototype.getData = function () {
        return {
            type: 'while',
            currentLine: this.currentLine
        };
    };
    WhileBlock.prototype.setCurrentLine = function (no) {
        this.currentLine = no;
    };
    WhileBlock.prototype.getLine = function (no) {
        return this.data[no];
    };
    WhileBlock.prototype[Symbol.iterator] = function () {
        return this;
    };
    WhileBlock.prototype.next = function () {
        if (this.currentLine < this.data.length) {
            var line = this.data[this.currentLine++];
            return { value: line, done: false };
        }
        else {
            if (variable_1.default.calc(this.condition)) {
                this.currentLine = 0;
                variable_1.default.popScope();
                variable_1.default.pushScope();
                return this.next();
            }
            else {
                // !this.done && variable.popScope();
                // this.done = true;
                return { done: true };
            }
        }
    };
    return WhileBlock;
}());
exports.WhileBlock = WhileBlock;
window["WhileBlock"] = WhileBlock;
__reflect(WhileBlock.prototype,"WhileBlock",[]); 
var ForeachBlock = /** @class */ (function () {
    function ForeachBlock(data, child, children) {
        this.reset();
        this.data = data;
        this.child = child;
        this.children = variable_1.default.calc(children);
        this.index = 0;
        variable_1.default.pushScope();
        variable_1.default.assign(this.child.value, this.child.prefix, { type: 'value', value: this.children[this.index] }, true);
    }
    ForeachBlock.prototype.reset = function () {
        this.data = [];
        this.currentLine = 0;
        this.done = false;
    };
    ForeachBlock.prototype.getData = function () {
        return {
            type: 'foreach',
            currentLine: this.currentLine
        };
    };
    ForeachBlock.prototype.setCurrentLine = function (no) {
        this.currentLine = no;
    };
    ForeachBlock.prototype.getLine = function (no) {
        return this.data[no];
    };
    ForeachBlock.prototype[Symbol.iterator] = function () {
        return this;
    };
    ForeachBlock.prototype.next = function () {
        if (this.currentLine < this.data.length) {
            var line = this.data[this.currentLine++];
            return { value: line, done: false };
        }
        else {
            if (this.index < this.children.length - 1) {
                this.currentLine = 0;
                this.index++;
                variable_1.default.popScope();
                variable_1.default.pushScope();
                variable_1.default.assign(this.child.value, this.child.prefix, { type: 'value', value: this.children[this.index] }, true);
                return this.next();
            }
            else {
                // !this.done && variable.popScope();
                // this.done = true;
                return { done: true };
            }
        }
    };
    return ForeachBlock;
}());
exports.ForeachBlock = ForeachBlock;
window["ForeachBlock"] = ForeachBlock;
__reflect(ForeachBlock.prototype,"ForeachBlock",[]); 
var InsertedBlock = /** @class */ (function () {
    function InsertedBlock(data, blockIndex) {
        this.reset();
        this.data = data;
        variable_1.default.pushScope();
    }
    InsertedBlock.prototype.reset = function () {
        this.data = [];
        this.currentLine = 0;
        this.done = false;
    };
    InsertedBlock.prototype.getData = function () {
        return {
            type: 'inserted',
            currentLine: this.currentLine,
            data: this.data
        };
    };
    InsertedBlock.prototype.setCurrentLine = function (no) {
        this.currentLine = no;
    };
    InsertedBlock.prototype.getLine = function (no) {
        return this.data[no];
    };
    InsertedBlock.prototype[Symbol.iterator] = function () {
        return this;
    };
    InsertedBlock.prototype.next = function () {
        if (this.currentLine < this.data.length) {
            var line = this.data[this.currentLine++];
            return { value: line, done: false };
        }
        else {
            // !this.done && variable.popScope();
            // this.done = true;
            return { done: true };
        }
    };
    return InsertedBlock;
}());
exports.InsertedBlock = InsertedBlock;
window["InsertedBlock"] = InsertedBlock;
__reflect(InsertedBlock.prototype,"InsertedBlock",[]); 


/***/ }),

/***/ "./src/lib/stories/libs/parser.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// todo 优化成 npm 库
var ohm = window.ohm;
window["ohm"] = ohm;
var kc_ohm_1 = __webpack_require__("./src/lib/stories/ohm/kc.ohm.ts");
var actions_1 = __webpack_require__("./src/lib/stories/actions/index.ts");
var myGrammar = ohm.grammar(kc_ohm_1.default);
window["myGrammar"] = myGrammar;
var mySemantics = myGrammar.createSemantics();
window["mySemantics"] = mySemantics;
mySemantics.addOperation('parse', actions_1.default);
var parse = function (string) {
    var m = myGrammar.match(string);
    if (m.succeeded()) {
        return mySemantics(m).parse();
    }
    else {
        throw m.message;
    }
};
window["parse"] = parse;
exports.default = {
    parse: parse
};


/***/ }),

/***/ "./src/lib/stories/libs/variable.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GLOBAL = {}, SAVE = {}, SCOPES = [];
window["GLOBAL"] = GLOBAL;
window["SAVE"] = SAVE;
window["SCOPES"] = SCOPES;
var CURRENTSCOPE = {};
window["CURRENTSCOPE"] = CURRENTSCOPE;
function calculate(exp, node) {
    if (node === void 0) { node = 0; }
    switch (exp.type) {
        case 'expression':
            var value = exp.value;
            return calc_expression(calculate(value.left), value.operator, calculate(value.right));
        case 'variable':
            return calc_variable(exp.value, exp.prefix, node);
        case 'value':
            return exp.value;
        default: throw "Unrecognized type " + exp.type;
    }
}
window["calculate"] = calculate;
function calc_expression(left, operator, right) {
    switch (operator) {
        case '&&':
            return left && right;
            break;
        case '||':
            return left || right;
            break;
        case '==':
            return left == right;
            break;
        case '>=':
            return left >= right;
            break;
        case '<=':
            return left <= right;
            break;
        case '>':
            return left > right;
            break;
        case '<':
            return left < right;
            break;
        case '+':
            return left + right;
            break;
        case '-':
            return left - right;
            break;
        case '*':
            return left * right;
            break;
        case '/':
            return left / right;
            break;
        case '^':
            return Math.pow(left, right);
            break;
        case '%':
            return left % right;
            break;
        default: throw "Unrecognized operator " + operator;
    }
}
window["calc_expression"] = calc_expression;
function calc_variable(name, prefix, node) {
    switch (prefix) {
        case null:
            return findVariableValue(name, node);
            break;
        case '$':
            return GLOBAL[name];
            break;
        case '%':
            return SAVE[name];
            break;
        default: throw "Unrecognized prefix " + prefix;
    }
}
window["calc_variable"] = calc_variable;
function findVariableValue(name, node) {
    if (node === void 0) { node = 0; }
    var ret = null;
    var _SCOPES = __spread(SCOPES, [CURRENTSCOPE]);
    for (var i = _SCOPES.length - 1 - node; i > -1; i--) {
        var scope = _SCOPES[i];
        ret = scope[name] || null;
        if (ret) {
            break;
        }
    }
    return ret;
}
window["findVariableValue"] = findVariableValue;
function assign(name, prefix, value, explicit) {
    if (prefix) {
        if (prefix === '$') {
            GLOBAL[name] = value;
        }
        else if (prefix === '%') {
            SAVE[name] = value;
        }
    }
    else if (explicit) {
        var scope = CURRENTSCOPE;
        if (scope[name]) {
            throw "Identifier '" + name + "' has already been declared";
        }
        else {
            scope[name] = value;
        }
    }
    else {
        var defined = false;
        var scope = null;
        var _SCOPES = __spread(SCOPES, [CURRENTSCOPE]);
        for (var i = _SCOPES.length - 1; i > -1; i--) {
            scope = _SCOPES[i];
            if (scope.hasOwnProperty(name)) {
                defined = true;
                break;
            }
        }
        if (defined) {
            scope[name] = value;
        }
        else {
            throw name + " is not defined";
        }
    }
}
window["assign"] = assign;
exports.default = {
    load: function () {
        GLOBAL = {};
        SAVE = {};
        SCOPES = [];
        CURRENTSCOPE = {};
    },
    dump: function () {
        return {
            GLOBAL: GLOBAL,
            SAVE: SAVE,
            SCOPES: SCOPES,
            CURRENTSCOPE: CURRENTSCOPE
        };
    },
    getGlobalScope: function () {
        return GLOBAL;
    },
    getSaveScope: function () {
        return SAVE;
    },
    getScope: function (node) {
        return __spread(SCOPES, [CURRENTSCOPE])[SCOPES.length - node];
    },
    setGlobalScope: function (scope) {
        GLOBAL = scope;
    },
    setSaveScope: function (scope) {
        SAVE = scope;
    },
    setScopes: function (scopes) {
        SCOPES = SCOPES;
        this.popScope();
    },
    pushScope: function (scope) {
        if (scope === void 0) { scope = {}; }
        SCOPES.push(CURRENTSCOPE);
        CURRENTSCOPE = scope;
    },
    popScope: function () {
        CURRENTSCOPE = SCOPES.pop();
    },
    calc: function (exp, node) {
        return calculate(exp);
    },
    assign: function (name, prefix, right, explicit) {
        return assign(name, prefix, calculate(right), explicit);
    }
};


/***/ }),

/***/ "./src/lib/stories/ohm/kc.ohm.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KC = "\nKC {\n  Scripts\n    = LogicBlock*\n\n  LogicBlock\n    = Comment\n    | IF LogicBlock* (ELSEIF LogicBlock*)* (ELSE LogicBlock*)? END  -- IF\n    | WHILE LogicBlock* END  -- WHILE\n    | FOREACH LogicBlock* END  -- FOREACH\n    | LET                      -- LET\n    | StoryLine                       -- Story\n\n  Comment = \"//\" comment_single     -- single\n          | \"/*\" comment_multi \"*/\"       -- multi\n\n  comment_single = (~(\"\\n\" | \"\\r\") any)+\n  comment_multi = (~(\"*/\") any)+\n\n  StoryLine\n    = \"[\" command content \"]\"    -- formatB\n      | \"@\" command content (\"\\r\"|\"\\n\"|end)  -- formatA\n      | \"@\" command (\"\\r\"|\"\\n\"|end)  -- formatC\n      | \"[\" command \"]\"    -- formatD\n      | \"<font\" content \">\" text \"</font>\" -- formatF\n      | text -- formatE\n\n  text = (~(\"[\" | \"@\" | \"#\" | \"\\n\" | \"\\r\" | \"//\" | \"/*\" | \"<\" | \">\" ) any)+\n\n  command = key\n\n  content = keyValue \" \" content -- mul\n  | keyValue                -- base\n\n  keyValue = key \"=\" value  -- param\n    | key        -- flag\n\n  key = (letter | number | \"_\")+\n\n  value = string | number | boolean | \"null\" | array\n\n  array = \"[\" listOf<value, \",\"> \"]\"\n\n  string = \"\\\"\" doubleQuoteStringContent* \"\\\"\" -- doubleQuote\n      | \"\\'\" singleQuoteStringContent* \"\\'\" -- singleQuote\n\n// ~(\"\\'\" | \"\\\\\" ) any  -- nonEscaped\n\n  singleQuoteStringContent = ~(\"\\'\") any  -- nonEscaped\n      | \"\\\\\" escapeCharacter                 -- escaped\n\n  doubleQuoteStringContent = ~(\"\\\"\") any  -- nonEscaped\n      | \"\\\\\" escapeCharacter                 -- escaped\n\n  singleEscapeCharacter = \"'\"|\"\\\"\"|\"\\\\\"|\"b\"|\"f\"|\"n\"|\"r\"|\"t\"|\"v\"\n  escapeCharacter = singleEscapeCharacter | \"x\" | \"u\"\n\n  quote = \"\\\"\" | \"\\'\"\n\n  boolean = (\"true\" | \"false\") ~variable\n\n  number  (a number)\n    = (\"-\"|\"+\") number   -- sign\n    | digit* \".\" digit+  --  fract\n    | \"0x\" hexdigit+        --  hex\n    | digit+             --  whole\n\n  hexdigit\n    = \"a\"..\"f\" | \"A\"..\"F\" | digit\n\n  variable = ~number (\"$\" | \"%\")? (letter | number | \"_\")+\n\n  IF\n    = \"#if\" Exp\n\n  LET\n    = (\"#let\" | \"#\") variable \"=\" Exp  -- assign\n    | \"#let\" variable              -- nonAssign\n\n  END\n    = \"#end\"\n\n  ELSE\n    = \"#else\"\n\n  ELSEIF\n    = \"#elseif\" Exp\n\n  WHILE\n    = \"#while\" Exp\n\n  FOREACH\n    = \"#foreach\" variable \"in\" variable\n\n  Exp\n    = JudgeExp booleanOperator Exp  -- bool\n    | JudgeExp\n\n  booleanOperator = \"&&\" | \"||\"\n\n  JudgeExp\n    = AddExp judgeOperator AddExp     -- judge\n    | AddExp\n\n  judgeOperator = \"==\" | \">=\" | \"<=\" | \">\" | \"<\"\n\n  // MathExp\n  // = MathExp mathOperator MathExp  -- math\n  // | PriExp\n\n  // mathOperator = \"+\" | \"-\" | \"*\" | \"/\" | \"^\" | \"%\"\n\n  AddExp\n  = AddExp (\"+\" | \"-\") MulExp  -- add\n  // | AddExp \"-\" MulExp  -- minus\n  | MulExp\n\n  MulExp\n    = MulExp (\"*\" | \"/\" | \"%\") ExpExp  -- mul\n    // | MulExp \"/\" ExpExp  -- divide\n    // | MulExp \"%\" ExpExp  -- mod\n    | ExpExp\n\n  ExpExp\n    = PriExp \"^\" ExpExp  -- power\n    | PriExp\n\n  PriExp\n  = \"(\" Exp \")\"  -- paren\n  | \"+\" PriExp   -- pos\n  | \"-\" PriExp   -- neg\n  | value\n  | variable\n\n}";
window["KC"] = KC;
exports.default = KC;


/***/ }),

/***/ "./src/lib/utils/Compose.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// koa compose
function compose(middleware) {
    var e_1, _a;
    if (!Array.isArray(middleware))
        throw new TypeError('Middleware stack must be an array!');
    try {
        for (var middleware_1 = __values(middleware), middleware_1_1 = middleware_1.next(); !middleware_1_1.done; middleware_1_1 = middleware_1.next()) {
            var fn = middleware_1_1.value;
            if (typeof fn !== 'function')
                throw new TypeError('Middleware must be composed of functions!');
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (middleware_1_1 && !middleware_1_1.done && (_a = middleware_1.return)) _a.call(middleware_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    /**
     * @param {Object} context
     * @return {Promise}
     * @api public
     */
    return function (context, next) {
        // last called middleware #
        var index = -1;
        return dispatch(0);
        function dispatch(i) {
            if (i <= index)
                return Promise.reject(new Error('next() called multiple times'));
            index = i;
            var fn = middleware[i];
            if (i === middleware.length)
                fn = next;
            if (!fn)
                return Promise.resolve();
            try {
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
            }
            catch (err) {
                return Promise.reject(err);
            }
        }
    };
}
window["compose"] = compose;
exports.default = compose;


/***/ }),

/***/ "./src/lib/utils/Event.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Compose_1 = __webpack_require__("./src/lib/utils/Compose.ts");
var Event = /** @class */ (function () {
    function Event() {
        this.middlewares = {};
    }
    /**
  * install a middleware.
  *
  * @param {string} name signal name
  * @param {function} middleware instance of middleware
  * @see AVG.core.Middleware
  */
    Event.prototype.use = function (name, middleware) {
        var middlewares;
        if (!this.middlewares[name]) {
            middlewares = [];
            this.middlewares[name] = middlewares;
        }
        else {
            middlewares = this.middlewares[name];
        }
        middlewares.push(middleware);
    };
    /**
     * uninstall a middleware.
     *
     * @param {string} name signal name
     * @param {function} middleware instance of middleware
     * @see AVG.core.Middleware
     */
    Event.prototype.unuse = function (name, middleware) {
        var middlewares = this.middlewares[name];
        if (middlewares) {
            var pos = middlewares.indexOf(middleware);
            if (pos !== -1) {
                middlewares.splice(pos, 1);
            }
            else {
                console.error("Do not find the given middleware in " + name + ".");
            }
        }
        else {
            console.error("Do not find the given middleware in " + name + ".");
        }
    };
    /**
     * send a signal to core
     *
     * @param {string} name signal name
     * @param {object} [context={}] context to process
     * @param {function} next
     * @return {promise}
     */
    Event.prototype.post = function (name, context, next) {
        var middlewares = this.middlewares[name];
        if (middlewares) {
            return Compose_1.default(middlewares)(context || {}, next);
        }
        return Promise.resolve();
    };
    return Event;
}());
exports.default = Event;
window["Event"] = Event;
__reflect(Event.prototype,"Event",[]); 


/***/ }),

/***/ "./src/lib/utils/PartLoad.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PartLoad = void 0;
// 切片分组预加载
var Script_1 = __webpack_require__("./src/lib/utils/Script.ts");
var PartLoad = /** @class */ (function () {
    function PartLoad() {
        this.name = '';
        this.name = '';
        this.resovle = null;
    }
    // 分断加载资源
    PartLoad.prototype.preload = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (/\.kc$/.test(name)) {
                            name = name.substr(0, name.length - 3);
                        }
                        // 通知loading ui
                        return [4 /*yield*/, Script_1.default.event.post('loading-init')];
                    case 1:
                        // 通知loading ui
                        _a.sent();
                        return [4 /*yield*/, this.init(name)];
                    case 2:
                        _a.sent();
                        this.destroy();
                        // 隐藏加载页面
                        return [4 /*yield*/, Script_1.default.event.post('loading-hide')];
                    case 3:
                        // 隐藏加载页面
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PartLoad.prototype.onProgress = function (event) {
        if (event.groupName === this.name) {
            // TODO 优化，是否可以await
            Script_1.default.event.post('loading-progress', {
                load: event.itemsLoaded,
                total: event.itemsTotal,
            });
        }
    };
    PartLoad.prototype.onLoadErr = function (event) {
        if (event.groupName === this.name) {
            // TODO 某些子项加载失败
        }
    };
    PartLoad.prototype.onLoad = function () {
        this.resovle();
    };
    PartLoad.prototype.init = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.name = name;
                        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onProgress, this);
                        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onLoadErr, this);
                        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoad, this);
                        RES.loadGroup(name);
                        return [4 /*yield*/, new Promise(function (resovle) {
                                _this.resovle = resovle;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PartLoad.prototype.destroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.name = '';
                this.resovle = null;
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onProgress, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onLoadErr, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoad, this);
                return [2 /*return*/];
            });
        });
    };
    return PartLoad;
}());
exports.PartLoad = PartLoad;
window["PartLoad"] = PartLoad;
__reflect(PartLoad.prototype,"PartLoad",[]); 
exports.default = new PartLoad();


/***/ }),

/***/ "./src/lib/utils/Preload.ts":
/***/ (function(module, exports) {

var Sakura = window['Sakura']; 
var Sakura;
(function (Sakura) {
    var PreloadStack = /** @class */ (function (_super) {
        __extends(PreloadStack, _super);
        function PreloadStack(preloads) {
            var e_1, _a;
            if (preloads === void 0) { preloads = []; }
            var _this = _super.call(this) || this;
            var i = 0;
            try {
                for (var preloads_1 = __values(preloads), preloads_1_1 = preloads_1.next(); !preloads_1_1.done; preloads_1_1 = preloads_1.next()) {
                    var preload = preloads_1_1.value;
                    var key = preload.key, dispatcher = preload.dispatcher;
                    dispatcher.once(key, function () {
                        i++;
                        if (i === preloads.length) {
                            _this.dispatchEventWith(egret.Event.COMPLETE);
                        }
                    }, preload);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (preloads_1_1 && !preloads_1_1.done && (_a = preloads_1.return)) _a.call(preloads_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return _this;
        }
        return PreloadStack;
    }(egret.EventDispatcher));
    Sakura.PreloadStack = PreloadStack;
    __reflect(PreloadStack.prototype,"Sakura.PreloadStack",[]); 
})(Sakura || (Sakura = {}));
window["Sakura"] = Sakura;


/***/ }),

/***/ "./src/lib/utils/Script.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__("./src/lib/stories/index.ts");
var Event_1 = __webpack_require__("./src/lib/utils/Event.ts");
var PartLoad_1 = __webpack_require__("./src/lib/utils/PartLoad.ts");
var Script = /** @class */ (function (_super) {
    __extends(Script, _super);
    function Script() {
        var _this = _super.call(this) || this;
        _this.loading = false;
        _this.isSkip = false;
        _this.break = false;
        _this.isAuto = false;
        _this.waiting = false;
        _this.parser = null;
        // public charName: string = ''
        _this.CHAR = {};
        _this.reset();
        _this.event = new Event_1.default();
        _this.parser = new index_1.default(_this.handleGlobalChanged.bind(_this));
        _this.event.use('storyscript-init', function () { return _this.init(); });
        return _this;
    }
    Script.prototype.reset = function () {
        this.isAuto = false;
        this.break = false;
        this.isSkip = false;
        this.loading = false;
        this.waiting = false;
    };
    Script.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('init script');
                // 加载脚本
                this.event.use('script-load', this.load.bind(this));
                this.event.use('script-trigger', this.trigger.bind(this));
                this.event.use('save-scope', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, next()
                                // TODO
                            ];
                            case 1:
                                _a.sent();
                                // TODO
                                this.parser.handleScope(ctx.key, {
                                    type: 'value',
                                    value: ctx.value
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.event.use('script-exec', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
                    var command, flags, params;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                command = ctx.command, flags = ctx.flags, params = ctx.params;
                                if (!(command === 'story')) return [3 /*break*/, 4];
                                if (!flags.includes('goto')) return [3 /*break*/, 3];
                                // 预加载资源
                                return [4 /*yield*/, PartLoad_1.default.preload(params.name)
                                    // 自动加载下一个章节
                                ];
                            case 1:
                                // 预加载资源
                                _a.sent();
                                // 自动加载下一个章节
                                return [4 /*yield*/, this.load({ name: params.name, autoStart: true }, next)];
                            case 2:
                                // 自动加载下一个章节
                                _a.sent();
                                _a.label = 3;
                            case 3: return [3 /*break*/, 6];
                            case 4: return [4 /*yield*/, next()];
                            case 5:
                                _a.sent();
                                _a.label = 6;
                            case 6: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    Script.prototype.load = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var name, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = ctx.name;
                        if (!(!name || !/\.kc/.test(name))) return [3 /*break*/, 2];
                        console.error('非法脚本链接');
                        return [4 /*yield*/, next()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 2:
                        this.loading = true;
                        return [4 /*yield*/, this.event.post('script-loading')
                            // TODO 发布资源正在加载
                        ];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, RES.getResAsync(name)];
                    case 4:
                        content = _a.sent();
                        console.log('脚本:');
                        console.log(content);
                        this.parser.load(content);
                        return [4 /*yield*/, this.event.post('script-loaded')];
                    case 5:
                        _a.sent();
                        this.loading = false;
                        return [4 /*yield*/, next()];
                    case 6:
                        _a.sent();
                        if (!ctx.autoStart) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.beginStory()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    // 处理全局数据变化
    Script.prototype.handleGlobalChanged = function () {
        // TODO
    };
    Script.prototype.beginStory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret, context;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ret = this.parser.next();
                        _a.label = 1;
                    case 1:
                        if (!!ret.done) return [3 /*break*/, 3];
                        context = Object.assign({}, ret.value);
                        console.log(context, 'context');
                        // 
                        this.waiting = true;
                        return [4 /*yield*/, this.event.post('script-exec', context)];
                    case 2:
                        _a.sent();
                        this.waiting = false;
                        // TODO 支持 文字、分支、跳转需要停止
                        if (context.break) {
                            return [3 /*break*/, 3];
                        }
                        ret = this.parser.next();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    Script.prototype.trigger = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, next()
                        // 最后执行脚本
                    ];
                    case 1:
                        _a.sent();
                        // 最后执行脚本
                        if (!this.loading) {
                            // 没有脚本在执行
                            !this.waiting && this.beginStory();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Script;
}(egret.EventDispatcher));
window["Script"] = Script;
__reflect(Script.prototype,"Script",[]); 
exports.default = new Script();


/***/ }),

/***/ "./src/runtime/components/ADVDialog.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var ADVDialog = /** @class */ (function (_super) {
        __extends(ADVDialog, _super);
        function ADVDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.animate = function () {
                if (_this.currentCursor === _this.wordsLength) {
                    _this.endAnimate();
                    return;
                }
                var duration = Date.now() - _this.startTime;
                var currentCursor = ~~(duration * _this.cps / 1000);
                if (currentCursor !== _this.currentCursor) {
                    _this.charWords.text = _this.words.substr(0, _this.currentCursor);
                    _this.currentCursor = currentCursor;
                }
                requestAnimationFrame(_this.animate);
            };
            _this.createAnimate = function () {
                _this.currentCursor = 0;
                _this.startTime = Date.now();
                _this.wordsLength = _this.words.length;
                _this.animate();
            };
            _this.endAnimate = function () {
                _this.currentCursor = _this.wordsLength;
                _this.charWords.text = _this.words;
            };
            _this.checkAnimationEnd = function () {
                return _this.currentCursor === _this.wordsLength;
            };
            return _this;
        }
        ADVDialog.prototype.onAddToStage = function () {
            this.bg = new egret.Bitmap();
            this.bg.name = 'bg';
            this.charName = new egret.TextField();
            this.charName.name = 'name';
            this.charName.textAlign = 'center';
            this.charName.stroke = 2;
            this.charWords = new egret.TextField();
            this.charWords.name = 'words';
            this.charWords.multiline = true;
            this.charWords.stroke = 1;
            this.width = this.stage.stageWidth;
            this.height = this.stage.stageWidth * AVG.DIALOG_SIZE_LUT.adv.height / AVG.DIALOG_SIZE_LUT.adv.width;
            this.y = this.stage.stageHeight - AVG.DIALOG_SIZE_LUT.adv.height;
            this.charName.textAlign = egret.HorizontalAlign.LEFT;
            this.charName.x = AVG.DIALOG_SIZE_LUT.adv.nameLeft;
            this.charName.size = AVG.DIALOG_SIZE_LUT.adv.nameSize;
            this.charName.y = AVG.DIALOG_SIZE_LUT.adv.nameTop;
            this.charWords.width = AVG.DIALOG_SIZE_LUT.adv.wordsWidth;
            this.charWords.x = AVG.DIALOG_SIZE_LUT.adv.wordsLeft;
            this.charWords.y = AVG.DIALOG_SIZE_LUT.adv.wordsTop;
            this.charWords.size = AVG.DIALOG_SIZE_LUT.adv.wordsSize;
            this.charWords.lineSpacing = AVG.DIALOG_SIZE_LUT.adv.wordsLineSpacing;
            this.addChild(this.bg);
            this.addChild(this.charName);
            this.addChild(this.charWords);
            _super.prototype.onAddToStage.call(this);
        };
        ADVDialog.prototype.say = function (id, words) {
            this.visible = true;
            this.bg.texture = RES.getRes(AVG.CHAR_ATTRS[id].bgPath);
            this.charName.visible = true;
            this.charName.text = AVG.CHAR_ATTRS[id].name;
            this.charName.strokeColor = AVG.CHAR_ATTRS[id].nameColor;
            if (this.charName.width > AVG.DIALOG_SIZE_LUT.adv.nameWidth) {
                this.charName.text = AVG.CHAR_ATTRS[id].name.substring(0, ~~(AVG.DIALOG_SIZE_LUT.adv.nameWidth / this.charName.size) + 1);
            }
            this.cps = AVG.CHAR_ATTRS[id].cps;
            this.words = words;
            this.charWords.strokeColor = AVG.CHAR_ATTRS[id].wordsColor;
            this.charWords.text = '';
            this.createAnimate();
            return { check: this.checkAnimationEnd, exec: this.endAnimate };
        };
        ADVDialog.prototype.think = function (id, words) {
            this.visible = true;
            this.bg.texture = RES.getRes(AVG.CHAR_ATTRS[id].bgThinkPath);
            this.charName.visible = false;
            this.charName.strokeColor = AVG.CHAR_ATTRS[id].nameColor;
            this.cps = AVG.CHAR_ATTRS[id].cps;
            this.words = words;
            this.charWords.strokeColor = AVG.CHAR_ATTRS[id].wordsColor;
            this.charWords.text = '';
            this.createAnimate();
            return { check: this.checkAnimationEnd, exec: this.endAnimate };
        };
        return ADVDialog;
    }(AVG.Dialog));
    AVG.ADVDialog = ADVDialog;
    __reflect(ADVDialog.prototype,"AVG.ADVDialog",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Animator.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var Animator = /** @class */ (function () {
        function Animator() {
            var _this = this;
            this.isEnd = true;
            this.tw = [];
            this.states = [];
            this.init = function (animation, target, callback) {
                _this.tw = [];
                _this.states = [];
                _this.animation = animation;
                if (target instanceof Array) {
                    _this.target = target;
                }
                else {
                    _this.target = [target];
                }
                _this.target.forEach(function (t) {
                    _this.tw.push(egret.Tween.get(t));
                    _this.states.push(false);
                });
                _this.callback = callback;
            };
            this.check = function () {
                return _this.isEnd;
            };
            this.start = function (nextTransform) {
                _this.isEnd = false;
                _this.nextTransform = nextTransform;
                _this.tw.forEach(function (t, index) {
                    t.to(_this.nextTransform, _this.animation.duration, _this.animation.func)
                        .call(function () {
                        _this.states[index] = true;
                        var end = _this.states.reduce(function (a, b) { return a && b; });
                        if (end) {
                            _this.isEnd = true;
                            _this.callback && _this.callback(_this.nextTransform);
                        }
                    });
                });
            };
            this.end = function () {
                _this.target.forEach(function (target, index) {
                    if (_this.tw[index]) {
                        egret.Tween.pauseTweens(target);
                    }
                    Object.keys(_this.nextTransform).forEach(function (key) {
                        target[key] = _this.nextTransform[key];
                    });
                });
                _this.isEnd = true;
                _this.callback && _this.callback(_this.nextTransform);
            };
        }
        return Animator;
    }());
    AVG.Animator = Animator;
    __reflect(Animator.prototype,"AVG.Animator",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Audio.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var Audio = /** @class */ (function () {
        function Audio(multiple, defaultLoop) {
            if (multiple === void 0) { multiple = false; }
            if (defaultLoop === void 0) { defaultLoop = false; }
            this.multiple = false;
            this.audio = {
                audio: null,
                channel: null,
                position: 0
            };
            this.multiple = multiple;
            this.defaultLoop = defaultLoop;
        }
        Audio.prototype.play = function (src, loop) {
            if (this.multiple) {
                // this.loop = loop === undefined ? loop : false;
                return;
            }
            this.loop = loop === undefined ? this.defaultLoop : loop;
            if (this.audio.channel) {
                this.audio.channel.stop();
            }
            this.audio.audio = RES.getRes(src);
            this.audio.channel = this.audio.audio.play(0, this.loop ? 0 : 1);
        };
        Audio.prototype.pause = function () {
            if (this.multiple) {
                return;
            }
            this.audio.position = this.audio.channel.position;
            this.audio.channel.stop();
            this.audio.channel = null;
        };
        Audio.prototype.resume = function () {
            if (this.multiple) {
                return;
            }
            this.audio.channel = this.audio.audio.play(this.audio.position, this.loop ? -1 : 1);
        };
        Audio.prototype.stop = function () {
            if (this.multiple) {
                return;
            }
            this.audio.channel.stop();
        };
        Audio.prototype.volume = function (v) {
            if (this.multiple) {
                return;
            }
            this.audio.channel.volume = v;
        };
        return Audio;
    }());
    AVG.Audio = Audio;
    __reflect(Audio.prototype,"AVG.Audio",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Branch.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var Branch = /** @class */ (function (_super) {
        __extends(Branch, _super);
        function Branch() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isEnd = false;
            _this.animation = {
                duration: 400,
                func: function (t) { return t; }
            };
            _this.direction = {
                direction: 'right',
                offset: 128
            };
            _this.customTransform = false;
            _this.animator = new AVG.Animator();
            return _this;
        }
        Branch.prototype.addToScene = function (scene) {
            this.scene = scene;
            this.scene.layers.branch.addChild(this);
        };
        Branch.prototype.open = function (branches, autoClose, eachTransform) {
            var _this = this;
            if (autoClose === void 0) { autoClose = true; }
            if (eachTransform === void 0) { eachTransform = {}; }
            this.isEnd = false;
            this.scene.hideDialog();
            var mask = new egret.Bitmap();
            mask.texture = RES.getRes("" + AVG.BRANCH_ATTRS.mask);
            this.addChild(mask);
            var main = new egret.DisplayObjectContainer();
            this.addChild(main);
            var width = 0;
            var height = 0;
            var x = 0;
            var y = 0;
            branches.forEach(function (_a, index) {
                var content = _a.content, callback = _a.callback, bg = _a.bg, transform = _a.transform;
                var container = new egret.DisplayObjectContainer();
                var bitmap = new egret.Bitmap();
                bitmap.texture = RES.getRes("" + (bg || AVG.BRANCH_ATTRS.bg));
                var text = new egret.TextField();
                container.touchEnabled = true;
                if (_this.customTransform) {
                    text.text = content || '';
                    text.size = transform.size || AVG.BRANCH_ATTRS.fontSize;
                    container.width = transform.width;
                    bitmap.width = transform.width;
                    text.width = transform.width;
                    container.height = transform.height;
                    bitmap.height = transform.height;
                    text.textAlign = transform.textAlign || egret.HorizontalAlign.CENTER;
                    text.lineSpacing = transform.lineSpacing || AVG.BRANCH_ATTRS.lineSpace;
                    text.textColor = transform.color || AVG.BRANCH_ATTRS.color;
                    text.y = (transform.height - text.height) / 2;
                    var x_1 = transform.x || AVG.BRANCH_ATTRS.branchAligh;
                    if (typeof x_1 === 'number') {
                        container.x = x_1;
                    }
                    else if (x_1 === egret.HorizontalAlign.CENTER) {
                        container.x = (AVG.BRANCH_ATTRS.branchWidth - AVG.BRANCH_ATTRS.textWidth) / 2;
                    }
                    else if (x_1 === egret.HorizontalAlign.LEFT) {
                        container.x = 0;
                    }
                    else if (x_1 === egret.HorizontalAlign.RIGHT) {
                        container.x = _this.stage.stageWidth - container.width;
                    }
                    container.y = transform.y;
                    container.rotation = transform.rotation || 0;
                }
                else {
                    text.text = content;
                    text.size = eachTransform.size || AVG.BRANCH_ATTRS.fontSize;
                    container.width = eachTransform.width || AVG.BRANCH_ATTRS.branchWidth;
                    bitmap.width = eachTransform.width || AVG.BRANCH_ATTRS.branchWidth;
                    text.width = eachTransform.width || AVG.BRANCH_ATTRS.textWidth;
                    bitmap.height = container.width / bitmap.texture.textureWidth * bitmap.texture.textureHeight;
                    text.textAlign = eachTransform.textAlign || AVG.BRANCH_ATTRS.textAlign;
                    ;
                    text.lineSpacing = eachTransform.lineSpacing || AVG.BRANCH_ATTRS.lineSpace;
                    text.x = AVG.BRANCH_ATTRS.textX || 0;
                    text.y = AVG.BRANCH_ATTRS.textY || (bitmap.height - text.height) / 2;
                    var x_2 = eachTransform.x || AVG.BRANCH_ATTRS.branchAligh;
                    if (typeof x_2 === 'number') {
                        container.x = x_2;
                    }
                    else if (x_2 === egret.HorizontalAlign.CENTER) {
                        container.x = (_this.stage.stageWidth - AVG.BRANCH_ATTRS.branchWidth) / 2;
                    }
                    else if (x_2 === egret.HorizontalAlign.LEFT) {
                        container.x = 0;
                    }
                    else if (x_2 === egret.HorizontalAlign.RIGHT) {
                        container.x = _this.stage.stageWidth - container.width;
                    }
                    container.y = y;
                    container.height = (eachTransform.height || bitmap.height) + AVG.BRANCH_ATTRS.branchPadding * 2;
                    y += container.height + AVG.BRANCH_ATTRS.branchSpace;
                }
                container.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    callback(index, content);
                    if (autoClose) {
                        _this.close();
                    }
                }, _this);
                container.addChild(bitmap);
                container.addChild(text);
                main.addChild(container);
            });
            var containerWidth = this.stage.stageWidth;
            var containerHeight = this.stage.stageHeight;
            if (this.customTransform) {
                main.width = containerWidth;
                main.height = containerHeight;
            }
            else {
                height = y;
                y = (containerHeight - height) / 2;
                main.y = y;
            }
            this.customTransform = false;
            main.alpha = 0;
            var _a = this.direction, offset = _a.offset, direction = _a.direction;
            var originX = main.x;
            var originY = main.y;
            if (direction === 'left') {
                main.x -= offset;
            }
            else if (direction === 'right') {
                main.x += offset;
            }
            else if (direction === 'top') {
                main.y -= offset;
            }
            else if (direction === 'bottom') {
                main.y += offset;
            }
            this.animator.init(this.animation, main);
            this.animator.start({ alpha: 1, x: originX, y: originY });
            return { check: function () { return _this.isEnd; }, exec: function () { } };
        };
        Branch.prototype.animate = function (duration, func) {
            if (duration === void 0) { duration = 500; }
            if (func === void 0) { func = function (t) { return t; }; }
            this.animation = { duration: duration, func: func };
            return this;
        };
        Branch.prototype.custom = function () {
            this.customTransform = true;
            return this;
        };
        Branch.prototype.from = function (direction, offset) {
            if (offset === void 0) { offset = 24; }
            this.direction.direction = direction;
            if (offset) {
                this.direction.offset = offset;
            }
            return this;
        };
        Branch.prototype.close = function () {
            this.removeChildren();
            this.isEnd = true;
        };
        return Branch;
    }(egret.DisplayObjectContainer));
    AVG.Branch = Branch;
    __reflect(Branch.prototype,"AVG.Branch",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Character.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var Character = /** @class */ (function (_super) {
        __extends(Character, _super);
        function Character(resKey, charName, bgKey, nameColor, wordsColor, cps, multiPos, multiFace) {
            if (nameColor === void 0) { nameColor = 0x000000; }
            if (wordsColor === void 0) { wordsColor = 0x000000; }
            if (cps === void 0) { cps = 30; }
            if (multiPos === void 0) { multiPos = true; }
            if (multiFace === void 0) { multiFace = true; }
            var _this = _super.call(this) || this;
            _this.showSize = 'middle';
            _this.position = { x: 0, y: 0 };
            _this.nextAlpha = 1;
            _this.direction = {
                direction: 'right',
                duration: 600
            };
            _this.modified = {
                pos: false,
                face: false
            };
            _this.active = false;
            _this.animator = new AVG.Animator();
            _this.transition = {
                duration: 500,
                type: 'fade'
            };
            _this.faceTransActor = new AVG.Transition();
            _this.posTransActor = new AVG.Transition();
            _this.sayWithShow = false;
            _this.reset = function () {
                _this.active = false;
                _this.animation = null;
            };
            _this.draw = function () {
                _this.scene.layers.chars.setChildIndex(_this, 10);
                if (_this.multiPos && _this.modified.pos) {
                    _this.modified.pos = false;
                    _this.modified.face = true;
                    if (_this.active && _this.animator.check()) {
                        _this.prePos = _this.posImg;
                        _this.posImg = new egret.Bitmap();
                        _this.posImg.texture = RES.getRes(_this.resKey + "-" + _this.posName + ".body");
                        _this.posTransActor.start(_this.prePos, _this.posImg, _this, 1);
                    }
                    else {
                        _this.posImg.texture = RES.getRes(_this.resKey + "-" + _this.posName + ".body");
                    }
                }
                if (_this.multiFace && _this.modified.face) {
                    _this.modified.face = false;
                    if (_this.active && _this.animator.check()) {
                        _this.preFace = _this.faceImg;
                        _this.faceImg = new egret.Bitmap();
                        _this.faceImg.texture = RES.getRes(_this.resKey + "-" + _this.posName + "." + _this.faceName);
                        _this.faceTransActor.start(_this.preFace, _this.faceImg, _this, 3);
                    }
                    else {
                        _this.faceImg.texture = RES.getRes(_this.resKey + "-" + _this.posName + "." + _this.faceName);
                    }
                }
                if (!_this.multiPos && !_this.multiFace) {
                    _this.posImg.texture = RES.getRes("" + _this.resKey);
                }
                var scale = AVG.CHAR_SIZE_LUT.scale[_this.showSize];
                _this.anchorOffsetX = _this.posImg.width * .5;
                var x = _this.stage.stageWidth * _this.position.x / AVG.MAX_GRID;
                var y = _this.stage.stageHeight * _this.position.y / AVG.MAX_GRID
                    + AVG.CHAR_SIZE_LUT.yOffset[_this.showSize];
                if (_this.animation) {
                    _this.animator.init(_this.animation, _this);
                    _this.animator.start({ scaleX: scale, scaleY: scale, x: x, y: y, alpha: _this.nextAlpha });
                    _this.animation = null;
                }
                else {
                    _this.scaleX = scale;
                    _this.scaleY = scale;
                    _this.x = x;
                    _this.y = y;
                    _this.alpha = _this.nextAlpha;
                }
                _this.active = true;
                return { check: _this.checkAnimation, exec: _this.endAnimation };
            };
            _this.checkAnimation = function () {
                return _this.animator.check() && _this.faceTransActor.check() && _this.posTransActor.check();
            };
            _this.endAnimation = function () {
                if (!_this.animator.check()) {
                    _this.animator.end();
                }
                if (!_this.faceTransActor.check()) {
                    _this.faceTransActor.end();
                }
                if (!_this.posTransActor.check()) {
                    _this.posTransActor.end();
                }
                _this.animation = null;
            };
            _this.name = charName;
            _this.resKey = resKey;
            _this.charName = charName;
            AVG.CHAR_ATTRS[_this.resKey] = {
                name: charName,
                nameColor: nameColor,
                wordsColor: wordsColor,
                bgPath: "dialog#" + bgKey + "-s",
                bgThinkPath: "dialog#" + bgKey + "-t",
                cps: cps
            };
            _this.multiPos = multiPos;
            _this.multiFace = multiFace;
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.reset, _this);
            return _this;
        }
        Character.prototype.addToScene = function (scene) {
            this.scene = scene;
            this.posImg = new egret.Bitmap();
            this.faceImg = new egret.Bitmap();
            this.prePos = new egret.Bitmap();
            this.preFace = new egret.Bitmap();
            this.addChild(this.posImg);
            this.addChild(this.faceImg);
            this.faceTransActor.init(this.transition);
            this.posTransActor.init(this.transition);
            this.active = false;
        };
        Character.prototype.rename = function (name) {
            if (name !== undefined) {
                AVG.CHAR_ATTRS[this.resKey].name = name;
            }
            else {
                AVG.CHAR_ATTRS[this.resKey].name = this.charName;
            }
            return this;
        };
        Character.prototype.say = function (words) {
            if (!this.sayWithShow) {
                if (this.active) {
                    this.scene.layers.chars.setChildIndex(this, 10);
                }
                return this.scene.dialog.say(this.resKey, words);
            }
            else {
                var res1_1 = this.show();
                var res2_1 = this.scene.dialog.say(this.resKey, words);
                return {
                    check: function () { return (res1_1.check() && res2_1.check()); },
                    exec: function () {
                        if (!res1_1.check()) {
                            res1_1.exec();
                        }
                        if (!res2_1.check()) {
                            res2_1.exec();
                        }
                    }
                };
            }
        };
        Character.prototype.think = function (words) {
            if (!this.sayWithShow) {
                if (this.active) {
                    this.scene.layers.chars.setChildIndex(this, 10);
                }
                return this.scene.dialog.think(this.resKey, words);
            }
            else {
                var res1_2 = this.show();
                var res2_2 = this.scene.dialog.think(this.resKey, words);
                return {
                    check: function () { return (res1_2.check() && res2_2.check()); },
                    exec: function () {
                        if (!res1_2.check()) {
                            res1_2.exec();
                        }
                        if (!res2_2.check()) {
                            res2_2.exec();
                        }
                    }
                };
            }
        };
        Character.prototype.withShow = function (ok) {
            if (ok === void 0) { ok = true; }
            this.sayWithShow = ok;
            return this;
        };
        Character.prototype.show = function () {
            if (!this.active) {
                this.scene.layers.chars.addChild(this);
                var originX = this.position.x;
                var originY = this.position.y;
                if (this.direction.direction === 'left') {
                    this.position.x -= AVG.CHAR_SIZE_LUT.initFromOffset[this.showSize];
                }
                else if (this.direction.direction === 'right') {
                    this.position.x += AVG.CHAR_SIZE_LUT.initFromOffset[this.showSize];
                }
                else if (this.direction.direction === 'top') {
                    this.position.y -= AVG.CHAR_SIZE_LUT.initFromOffset[this.showSize];
                }
                else if (this.direction.direction === 'bottom') {
                    this.position.y += AVG.CHAR_SIZE_LUT.initFromOffset[this.showSize];
                }
                this.opacity(0).draw();
                if (this.direction.direction === 'left' || this.direction.direction === 'right') {
                    this.position.x = originX;
                }
                else {
                    this.position.y = originY;
                }
                this.opacity(1).animate(this.direction.duration);
            }
            return this.draw();
        };
        Character.prototype.hide = function () {
            var _this = this;
            var nextX = this.position.x;
            var nextY = this.position.y;
            if (this.direction.direction === 'left') {
                nextX += AVG.CHAR_SIZE_LUT.initFromOffset[this.showSize];
            }
            else if (this.direction.direction === 'right') {
                nextX -= AVG.CHAR_SIZE_LUT.initFromOffset[this.showSize];
            }
            else if (this.direction.direction === 'top') {
                nextY += AVG.CHAR_SIZE_LUT.initFromOffset[this.showSize];
            }
            else if (this.direction.direction === 'bottom') {
                nextY -= AVG.CHAR_SIZE_LUT.initFromOffset[this.showSize];
            }
            var x = this.stage.stageWidth * nextX / AVG.MAX_GRID;
            var y = this.stage.stageHeight * nextY / AVG.MAX_GRID
                + AVG.CHAR_SIZE_LUT.yOffset[this.showSize];
            this.animate(this.direction.duration);
            this.animator.init(this.animation, this, function () {
                _this.scene.layers.chars.removeChild(_this);
                _this.reset();
            });
            this.animator.start({ x: x, y: y, alpha: 0 });
            return { check: this.checkAnimation, exec: this.endAnimation };
        };
        Character.prototype.posture = function (posture) {
            this.modified.pos = this.posName !== posture;
            this.posName = posture;
            return this;
        };
        Character.prototype.face = function (face) {
            this.modified.face = this.faceName !== face;
            this.faceName = face;
            return this;
        };
        Character.prototype.size = function (size) {
            if (size === void 0) { size = 'middle'; }
            this.showSize = size;
            return this;
        };
        Character.prototype.at = function (x, y) {
            this.position.x = x;
            if (typeof y === 'number') {
                this.position.y = y;
            }
            return this;
        };
        Character.prototype.opacity = function (alpha) {
            this.nextAlpha = alpha;
            return this;
        };
        Character.prototype.from = function (direction, duration) {
            if (duration === void 0) { duration = 600; }
            this.direction.direction = direction;
            if (duration) {
                this.direction.duration = duration;
            }
            return this;
        };
        Character.prototype.with = function (duration, type) {
            if (duration === void 0) { duration = 800; }
            if (type === void 0) { type = 'fade'; }
            this.transition = { duration: duration, type: type };
            this.faceTransActor.init(this.transition);
            this.posTransActor.init(this.transition);
            return this;
        };
        Character.prototype.animate = function (duration, func) {
            if (duration === void 0) { duration = 500; }
            if (func === void 0) { func = function (t) { return t; }; }
            this.animation = { duration: duration, func: func };
            return this;
        };
        Character.prototype.behind = function (name) {
            return this;
        };
        return Character;
    }(egret.DisplayObjectContainer));
    AVG.Character = Character;
    __reflect(Character.prototype,"AVG.Character",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Comment.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var Comment = /** @class */ (function (_super) {
        __extends(Comment, _super);
        function Comment() {
            var _this = _super.call(this) || this;
            _this.layers = {
                bg: new egret.Bitmap,
                title: new egret.TextField,
                content: new egret.TextField,
                confirm: new egret.Bitmap,
                cancel: new egret.Bitmap
            };
            _this.isEnd = false;
            _this.loading = false;
            _this.onCancel = null;
            _this.onConfirm = null;
            _this.handleConfirm = function () {
                if (!_this.loading)
                    return;
            };
            _this.handleCancel = function () {
                if (_this.loading)
                    return;
                _this.close(function () {
                    _this.onCancel();
                });
            };
            var _a = _this.layers, bg = _a.bg, title = _a.title, content = _a.content, confirm = _a.confirm, cancel = _a.cancel;
            _this.init = function () {
                var _a;
                var stageWidth = _this.originStage.stageWidth;
                var stageHeight = _this.originStage.stageHeight;
                var name = 0 === ((_a = AVG.config.user) === null || _a === void 0 ? void 0 : _a.sex) ? "她" : "他";
                bg.texture = RES.getRes("elements.comment");
                confirm.texture = RES.getRes("elements.comment");
                cancel.texture = RES.getRes("elements.cancel");
                title.text = "\u5728\u661F\u7A7A\u4E0A\u5BF9" + name + "\u8BF4\u70B9\u4EC0\u4E48\u5427";
                // TODO
                // singleton.galaxy.count && (title.text += "\n已有" + singleton.galaxy.count + "颗星被点亮"),
                bg.width = stageWidth / 5 * 4;
                bg.height = bg.texture.textureHeight / bg.texture.textureWidth * bg.width;
                _this.width = bg.width;
                _this.height = bg.height;
                _this.x = stageWidth / 10;
                _this.y = (stageHeight - _this.height) / 2;
                title.width = _this.width;
                title.textAlign = egret.HorizontalAlign.CENTER;
                title.y = 112;
                title.textColor = 0;
                title.size = 25;
                title.lineSpacing = 8;
                content.type = egret.TextFieldType.INPUT;
                content.width = 334;
                content.height = 90;
                content.x = (_this.width - content.width) / 2;
                content.y = 192;
                content.size = 26;
                content.textColor = 6710886;
                content.text = "最多十五字哦~";
                content.maxChars = 15;
                content.multiline = true;
                confirm.width = 160;
                confirm.height = confirm.texture.textureHeight / confirm.texture.textureWidth * confirm.width;
                confirm.x = 36;
                confirm.y = 320;
                cancel.width = confirm.width;
                cancel.height = confirm.height;
                cancel.x = _this.width - cancel.width - 36;
                cancel.y = confirm.y;
                var l = _this.y;
                _this.alpha = 0;
                _this.y += 32;
                egret.Tween.get(_this).to({
                    alpha: 1,
                    y: l
                }, 800, egret.Ease.quadInOut);
            };
            bg.name = 'bg';
            title.name = 'title';
            content.name = 'content';
            confirm.name = 'confirm';
            cancel.name = 'cancel';
            content.touchEnabled = true;
            content.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                "最多十五字哦~" === content.text && (content.text = ""),
                    content.setFocus();
            }, _this);
            confirm.touchEnabled = true;
            confirm.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.handleConfirm, _this);
            cancel.touchEnabled = true;
            cancel.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.handleCancel, _this);
            _this.addChild(bg);
            _this.addChild(title);
            _this.addChild(content);
            _this.addChild(confirm);
            _this.addChild(cancel);
            return _this;
        }
        Comment.prototype.addToStage = function (stage) {
            this.originStage = stage;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
        };
        Comment.prototype.show = function (confirm, cancel) {
            if (confirm === void 0) { confirm = AVG.noop; }
            if (cancel === void 0) { cancel = AVG.noop; }
            this.isEnd = false;
            this.onConfirm = confirm;
            this.onCancel = cancel;
            this.originStage.addChild(this);
            return {
                check: function () {
                    return this.isEnd;
                },
                exec: function () { }
            };
        };
        Comment.prototype.close = function (callback) {
            var _this = this;
            if (callback === void 0) { callback = AVG.noop; }
            this.loading = false;
            egret.Tween.get(this).to({
                alpha: 0,
                y: this.y - 32,
            }, 800, egret.Ease.quadInOut).call(function () {
                _this.layers.confirm.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.handleConfirm, _this);
                _this.layers.cancel.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.handleCancel, _this);
                _this.layers.content.text = '最多十五字哦~';
                _this.originStage.contains(_this) && _this.originStage.removeChild(_this);
                _this.isEnd = true;
                callback();
            });
        };
        return Comment;
    }(egret.DisplayObjectContainer));
    AVG.Comment = Comment;
    __reflect(Comment.prototype,"AVG.Comment",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Config.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var url = location.href.replace('http', 'https');
    var ios = function () {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            var t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || "0", 10)];
        }
        return [-1, -1, -1];
    };
    var android = function (userAgent) {
        var e = userAgent || navigator.userAgent, n = e.match(/Android\s([0-9\.]*)/);
        return n ? parseFloat(n[1]) : 4;
    };
    var isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
    var isAndroid = /Android/.test(navigator.userAgent);
    var isQQ = /TBS/.test(navigator.userAgent);
    AVG.config = {
        plat: "pc",
        galaxy: {
            maxScale: 3,
            minScale: 1,
            pinchDistance: 1e3
        },
        user: {
            id: 497260,
            name: 'kc',
            sex: 0,
            path: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            firstPath: "999999999999999"
        },
        friend: null,
        selectedMaps: [],
        defaultCps: 30,
        // TODO
        domain: {
            info: "//www.bilibili.com/activity/qixi/info",
            sex: "//www.bilibili.com/activity/qixi/sex",
            match: "//www.bilibili.com/activity/qixi/loop",
            login: "//passport.bilibili.com/login?gourl=" + encodeURIComponent(url),
            submit: "//www.bilibili.com/activity/likes/add/text",
            comments: "//www.bilibili.com/activity/likes/list/10150",
            addComment: "//www.bilibili.com/activity/likes/add/text/10150",
            checkComment: "//www.bilibili.com/activity/filter",
            letter: "//space.bilibili.com",
            movie: "//www.bilibili.com/blackboard/topic/activity-yourname1708-m.html"
        },
        comment: "",
        shareImage: location.protocol + "//activity.hdslb.com/blackboard/double7/images/m682n67vr8.png",
        sharePage: location.protocol + "//www.bilibili.com/blackboard/double7.html",
        isIos: isIos,
        isIOS8: 8 === ios()[0],
        isAndroid4: isAndroid && android(navigator.userAgent) < 5,
        isQQ: isQQ,
    };
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Dialog.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var Dialog = /** @class */ (function (_super) {
        __extends(Dialog, _super);
        function Dialog() {
            var _this = _super.call(this) || this;
            _this.visible = false;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        Dialog.prototype.onAddToStage = function () {
            this.touchIcon = new egret.Bitmap();
            this.touchIcon.name = 'touch';
            this.touchIcon.texture = RES.getRes(AVG.DIALOG_SIZE_LUT.touchIcon.bg);
            this.touchIcon.width = AVG.DIALOG_SIZE_LUT.touchIcon.width;
            this.touchIcon.height = this.touchIcon.width * this.touchIcon.texture.textureHeight / this.touchIcon.texture.textureWidth;
            this.touchIcon.x = this.width - this.touchIcon.width - AVG.DIALOG_SIZE_LUT.touchIcon.right;
            this.touchIcon.y = this.height - this.touchIcon.height - AVG.DIALOG_SIZE_LUT.touchIcon.bottom;
            this.addChild(this.touchIcon);
        };
        Dialog.prototype.say = function (id, words) {
            return { exec: function () { }, check: function () { return true; } };
        };
        Dialog.prototype.think = function (id, words) {
            return { exec: function () { }, check: function () { return true; } };
        };
        Dialog.prototype.hide = function () {
            this.visible = false;
        };
        Dialog.prototype.resume = function () {
            this.visible = true;
        };
        return Dialog;
    }(egret.DisplayObjectContainer));
    AVG.Dialog = Dialog;
    __reflect(Dialog.prototype,"AVG.Dialog",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Interpreter.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var Interpreter = /** @class */ (function () {
        function Interpreter() {
            this.scripts = [];
            this.preRes = null;
            this.preScripts = [];
            this.preOffset = [];
        }
        Interpreter.prototype.exec = function () {
            this.preRes = this.scripts[this.pointer]() || null;
        };
        Interpreter.prototype.load = function (scripts, preScripts, preOffset) {
            if (preScripts) {
                this.preScripts.push(preScripts);
            }
            else if (this.scripts.length) {
                this.preScripts.push(this.scripts);
            }
            if (preOffset) {
                this.preOffset.push(preOffset);
            }
            else if (this.scripts.length) {
                this.preOffset.push(this.pointer);
            }
            this.scripts = scripts;
            this.pointer = -1;
        };
        Interpreter.prototype.next = function () {
            if (this.preRes) {
                if (this.preRes.check && this.preRes.exec) {
                    if (!this.preRes.check()) {
                        this.preRes.exec();
                        return;
                    }
                    this.preRes = null;
                }
                else {
                    // 为了方便DSL可以设置属性
                    this.next();
                    return;
                }
            }
            if (this.pointer < this.length - 1) {
                this.pointer += 1;
                this.exec();
            }
            else {
                if (this.preScripts.length) {
                    this.scripts = this.preScripts.pop();
                    this.pointer = this.preOffset.pop();
                    this.next();
                }
            }
        };
        Interpreter.prototype.goto = function (line) {
            if (line >= this.length) {
                this.pointer = this.length;
            }
            else {
                this.pointer = line;
            }
            this.exec();
        };
        Object.defineProperty(Interpreter.prototype, "current", {
            get: function () {
                return this.pointer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Interpreter.prototype, "length", {
            get: function () {
                return this.scripts.length;
            },
            enumerable: false,
            configurable: true
        });
        return Interpreter;
    }());
    AVG.Interpreter = Interpreter;
    __reflect(Interpreter.prototype,"AVG.Interpreter",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/LoadingUI.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    // TODO 可以加载下一个章节的资源
    var LoadingUI = /** @class */ (function (_super) {
        __extends(LoadingUI, _super);
        function LoadingUI() {
            var _this = _super.call(this) || this;
            _this.bg = new egret.Shape;
            _this.progress = new egret.DisplayObjectContainer,
                _this.pgBg = new egret.Shape,
                _this.pgFg = new egret.Shape,
                _this.callback = function () { };
            _this.loaded = false;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.clear, _this);
            return _this;
        }
        LoadingUI.prototype.createView = function () {
            var width = this.stage.stageWidth;
            var height = this.stage.stageHeight;
            this.bg.width = width;
            this.bg.height = height;
            this.bg.graphics.beginFill(0, 1),
                this.bg.graphics.drawRect(0, 0, width, height);
            this.bg.graphics.endFill(),
                this.progress.width = 150 * width / 540;
            this.progress.height = 2;
            this.progress.x = (width - this.progress.width) / 2;
            this.progress.y = (height - this.progress.height) / 2 + 100;
            this.pgBg.width = this.progress.width;
            this.pgBg.height = this.progress.height / 2;
            this.pgBg.x = 0;
            this.pgBg.y = 0;
            this.pgBg.graphics.beginFill(4806245, 1);
            this.pgBg.graphics.drawRect(0, 0, this.pgBg.width, this.pgBg.height);
            this.pgBg.graphics.endFill();
            this.pgFg.width = this.pgBg.width;
            this.pgFg.height = this.progress.height;
            this.pgFg.x = this.pgBg.x;
            this.pgFg.y = -this.progress.height / 4;
            this.progress.addChild(this.pgBg),
                this.progress.addChild(this.pgFg);
            this.addChild(this.bg),
                this.addChild(this.progress);
        };
        LoadingUI.prototype.addToStage = function (stage) {
            this.originStage = stage;
            this.originStage.addChild(this);
        };
        LoadingUI.prototype.setProgress = function (current, total) {
            // 取整
            var witdh = ~~(current / total * this.pgFg.width);
            this.pgFg.graphics.beginFill(16777215, 1),
                this.pgFg.graphics.drawRoundRect(0, 0, witdh, this.pgFg.height, 1, 1),
                this.pgFg.graphics.endFill();
        };
        LoadingUI.prototype.onResourceProgress = function (t) {
            this.setProgress(t.itemsLoaded, t.itemsTotal);
        };
        LoadingUI.prototype.onItemLoadError = function (t) {
            console.warn("Url:" + t.resItem.url + " has failed to load");
        };
        LoadingUI.prototype.onResourceLoadError = function (t) {
            console.warn("Group:" + t.groupName + " has failed to load"),
                this.endFirst();
        };
        LoadingUI.prototype.startFirst = function (callback) {
            this.callback = callback;
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.endFirst, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            RES.loadGroup("preload");
        };
        LoadingUI.prototype.endFirst = function () {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.endFirst, this),
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this),
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this),
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this),
                document.getElementById("loading").style.display = "none",
                this.visible = false,
                this.callback();
        };
        LoadingUI.prototype.startSecond = function (callback) {
            if (callback === void 0) { callback = function () { return ({}); }; }
            if (this.loaded)
                return this.callback();
            this.loaded = false;
            this.callback = callback;
            this.originStage.setChildIndex(this, 10);
            document.getElementById("loading").style.display = "block";
            this.pgFg.graphics.clear();
            this.bg.alpha = .7;
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.endSecond, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            RES.loadGroup("resources");
            return {
                check: function () {
                    return this.loaded;
                },
                exec: function () { }
            };
        };
        LoadingUI.prototype.endSecond = function () {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.endSecond, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.visible = false;
            this.originStage.removeChild(this);
            this.loaded = true;
            this.callback();
        };
        LoadingUI.prototype.clear = function () {
            document.body.removeChild(document.getElementById("loading"));
        };
        return LoadingUI;
    }(egret.Sprite));
    AVG.LoadingUI = LoadingUI;
    __reflect(LoadingUI.prototype,"AVG.LoadingUI",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/NVLDialog.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var NVLDialog = /** @class */ (function (_super) {
        __extends(NVLDialog, _super);
        function NVLDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.blocks = [];
            _this.currentIndex = -1;
            _this.currentTop = 0;
            _this.testText = new egret.TextField();
            _this.innerX = 0;
            _this.innerY = 0;
            _this.animate = function () {
                var block = _this.blocks[_this.currentIndex];
                if (block.currentCursor === block.wordsLength) {
                    _this.endAnimate();
                    return;
                }
                var duration = Date.now() - block.startTime;
                var currentCursor = ~~(duration * _this.cps / 1000);
                if (currentCursor !== block.currentCursor) {
                    block.charWords.text = block.words.substr(0, block.currentCursor);
                    block.currentCursor = currentCursor;
                }
                requestAnimationFrame(_this.animate);
            };
            _this.createAnimate = function () {
                var block = _this.blocks[_this.currentIndex];
                block.currentCursor = 0;
                block.startTime = Date.now();
                block.wordsLength = block.words.length;
                _this.animate();
            };
            _this.endAnimate = function () {
                var block = _this.blocks[_this.currentIndex];
                block.currentCursor = block.wordsLength;
                block.charWords.text = block.words;
            };
            _this.checkAnimationEnd = function () {
                var block = _this.blocks[_this.currentIndex];
                return block.currentCursor === block.wordsLength;
            };
            return _this;
        }
        NVLDialog.prototype.onAddToStage = function () {
            this.bg = new egret.Bitmap();
            this.bg.name = 'bg';
            this.bg.texture = RES.getRes(AVG.DIALOG_SIZE_LUT.nvl.bg);
            this.width = AVG.DIALOG_SIZE_LUT.nvl.width;
            this.height = AVG.DIALOG_SIZE_LUT.nvl.height;
            this.x = (this.stage.stageWidth - AVG.DIALOG_SIZE_LUT.nvl.width) / 2;
            this.y = (this.stage.stageHeight - AVG.DIALOG_SIZE_LUT.nvl.height) / 2;
            this.innerX = (AVG.DIALOG_SIZE_LUT.nvl.width - AVG.DIALOG_SIZE_LUT.nvl.innerWidth) / 2;
            this.innerY = (AVG.DIALOG_SIZE_LUT.nvl.height - AVG.DIALOG_SIZE_LUT.nvl.innerHeight) / 2;
            this.testText.width = AVG.DIALOG_SIZE_LUT.nvl.innerWidth - AVG.DIALOG_SIZE_LUT.nvl.wordsLeft;
            this.testText.size = AVG.DIALOG_SIZE_LUT.nvl.wordsSize;
            this.testText.lineSpacing = AVG.DIALOG_SIZE_LUT.nvl.wordsLineSpacing;
            this.addChild(this.bg);
            _super.prototype.onAddToStage.call(this);
            this.reset();
        };
        NVLDialog.prototype.calcBlockHeight = function (words) {
            this.testText.text = words;
            var height = this.testText.height;
            return height > AVG.DIALOG_SIZE_LUT.nvl.blockMinHeight ? height : AVG.DIALOG_SIZE_LUT.nvl.blockMinHeight;
        };
        NVLDialog.prototype.reset = function () {
            this.removeChildren();
            this.addChild(this.bg);
            this.addChild(this.touchIcon);
            this.blocks = [];
            this.currentTop = this.innerY;
            this.currentIndex = -1;
        };
        NVLDialog.prototype.outWords = function (id, words, withName) {
            if (withName === void 0) { withName = true; }
            var height = this.calcBlockHeight(words);
            if (this.currentTop + height >= AVG.DIALOG_SIZE_LUT.nvl.innerHeight) {
                this.reset();
            }
            this.visible = true;
            var block = {
                container: new egret.DisplayObjectContainer(),
                charName: new egret.TextField(),
                charWords: new egret.TextField(),
                words: words,
                wordsLength: words.length,
                startTime: 0,
                currentCursor: 0
            };
            this.cps = AVG.CHAR_ATTRS[id].cps;
            block.container.y = this.currentTop;
            block.words = words;
            block.charWords.size = AVG.DIALOG_SIZE_LUT.nvl.wordsSize;
            block.charWords.width = this.testText.width;
            block.charWords.lineSpacing = AVG.DIALOG_SIZE_LUT.nvl.wordsLineSpacing;
            block.charWords.x = this.innerX + AVG.DIALOG_SIZE_LUT.nvl.wordsLeft;
            block.charWords.stroke = 1;
            block.charWords.strokeColor = AVG.CHAR_ATTRS[id].wordsColor;
            block.charWords.text = '';
            if (withName) {
                block.charName.size = AVG.DIALOG_SIZE_LUT.nvl.nameSize;
                block.charName.width = AVG.DIALOG_SIZE_LUT.nvl.nameWidth;
                block.charName.stroke = 1;
                block.charName.strokeColor = AVG.CHAR_ATTRS[id].nameColor;
                block.charName.text = AVG.CHAR_ATTRS[id].name;
                block.charName.textAlign = egret.HorizontalAlign.LEFT;
                block.charName.x = this.innerX + AVG.DIALOG_SIZE_LUT.nvl.nameLeft;
                block.charWords.y = block.charName.height + AVG.DIALOG_SIZE_LUT.nvl.wordsTop;
                height += block.charWords.y;
                block.container.addChild(block.charName);
            }
            block.container.addChild(block.charWords);
            this.addChild(block.container);
            this.blocks.push(block);
            this.currentIndex += 1;
            this.currentTop += height + AVG.DIALOG_SIZE_LUT.nvl.blockSpacing;
            this.createAnimate();
            return { check: this.checkAnimationEnd, exec: this.endAnimate };
        };
        NVLDialog.prototype.say = function (id, words) {
            return this.outWords(id, words);
        };
        NVLDialog.prototype.think = function (id, words) {
            return this.outWords(id, words, false);
        };
        NVLDialog.prototype.hide = function () {
            _super.prototype.hide.call(this);
            this.reset();
        };
        return NVLDialog;
    }(AVG.Dialog));
    AVG.NVLDialog = NVLDialog;
    __reflect(NVLDialog.prototype,"AVG.NVLDialog",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Samsara.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var Samsara = /** @class */ (function (_super) {
        __extends(Samsara, _super);
        function Samsara() {
            var _this = _super.call(this) || this;
            _this.layers = {
                bg: new egret.Shape,
                tv: new egret.Bitmap,
                logo: new egret.Bitmap,
                pan: new egret.Bitmap,
                lPin: new egret.Bitmap,
                sPin: new egret.Bitmap
            };
            _this.initDone = false;
            _this.animationEnd = false;
            _this.init = function () {
                if (!_this.initDone) {
                    var _a = _this.layers, tv = _a.tv, pan = _a.pan, logo = _a.logo, lPin = _a.lPin, sPin = _a.sPin, bg = _a.bg;
                    var stageWidth = _this.originStage.width;
                    var stageHeight = _this.originStage.height;
                    tv.texture = RES.getRes("npc#tv");
                    pan.texture = RES.getRes('elements#clock-pan');
                    logo.texture = RES.getRes("elements#clock-logo");
                    lPin.texture = RES.getRes("elements#clock-pin-l");
                    sPin.texture = RES.getRes("elements#clock-pin-s");
                    bg.width = stageWidth;
                    bg.height = stageHeight;
                    bg.x = 0;
                    bg.y = 0;
                    bg.graphics.beginFill(0, 1);
                    bg.graphics.drawRect(0, 0, bg.width, bg.height);
                    bg.graphics.endFill();
                    tv.width = 2 * stageWidth / 3,
                        tv.height = tv.texture.textureHeight / tv.texture.textureWidth * tv.width,
                        tv.anchorOffsetX = tv.width / 2,
                        tv.anchorOffsetY = tv.height / 2,
                        tv.x = stageWidth / 2,
                        tv.y = stageHeight / 2 - 204,
                        tv.rotation = -10,
                        tv.alpha = .6,
                        pan.width = 2 * stageWidth / 3,
                        pan.height = pan.texture.textureHeight / pan.texture.textureWidth * pan.width,
                        pan.x = (stageWidth - pan.width) / 2,
                        pan.y = (stageHeight - pan.height) / 2,
                        logo.width = 3 * pan.width / 5,
                        logo.height = logo.texture.textureHeight / logo.texture.textureWidth * logo.width,
                        logo.x = (stageWidth - logo.width) / 2,
                        logo.y = (stageHeight - logo.height) / 2,
                        lPin.height = pan.height,
                        lPin.width = lPin.texture.textureWidth / lPin.texture.textureHeight * lPin.height,
                        lPin.anchorOffsetX = lPin.width / 2,
                        lPin.anchorOffsetY = lPin.height / 2,
                        lPin.x = stageWidth / 2,
                        lPin.y = stageHeight / 2,
                        sPin.height = 4 * pan.height / 5,
                        sPin.width = sPin.texture.textureWidth / sPin.texture.textureHeight * sPin.height,
                        sPin.anchorOffsetX = sPin.width / 2,
                        sPin.anchorOffsetY = sPin.height / 2,
                        sPin.x = lPin.x,
                        sPin.y = lPin.y,
                        _this.initDone = true;
                }
                _this.prepare();
                _this.animate();
                return {
                    check: function () {
                        return this.animationEnd;
                    },
                    exec: function () { }
                };
            };
            _this.layers.bg.name = 'bg';
            _this.layers.tv.name = 'tv';
            _this.layers.pan.name = 'pan';
            _this.layers.logo.name = 'logo';
            _this.layers.lPin.name = 'lPin';
            _this.layers.sPin.name = 'sPin';
            _this.addChild(_this.layers.bg);
            _this.addChild(_this.layers.pan);
            _this.addChild(_this.layers.logo);
            _this.addChild(_this.layers.lPin);
            _this.addChild(_this.layers.sPin);
            _this.addChild(_this.layers.tv);
            return _this;
        }
        Samsara.prototype.addToStage = function (stage) {
            this.originStage = stage;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
        };
        Samsara.prototype.show = function (callback, prepare) {
            if (callback === void 0) { callback = function () { }; }
            if (prepare === void 0) { prepare = function () { }; }
            this.animationEnd = false;
            this.callback = callback;
            this.prepare = prepare;
            this.originStage.addChild(this);
            return {
                check: function () {
                    return this.animationEnd;
                },
                exec: function () { }
            };
        };
        Samsara.prototype.animate = function () {
            var _this = this;
            egret.Tween.get(this).to({
                alpha: 1
            }, 1000, egret.Ease.quadInOut).wait(1500).to({
                alpha: 0
            }, 500, egret.Ease.quadInOut).call(function () {
                _this.close();
            });
            egret.Tween.get(this.layers.lPin).to({
                rotation: -2160
            }, 3000, egret.Ease.quadOut);
            egret.Tween.get(this.layers.sPin).to({
                rotation: -210
            }, 3000, egret.Ease.quadOut);
        };
        Samsara.prototype.close = function () {
            this.callback();
            this.originStage.removeChild(this);
            this.animationEnd = true;
        };
        return Samsara;
    }(egret.DisplayObjectContainer));
    AVG.Samsara = Samsara;
    __reflect(Samsara.prototype,"AVG.Samsara",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Scene.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        function Scene(interpreter) {
            var _this = _super.call(this) || this;
            _this.mode = 'ADV';
            _this.bgName = 'bg_default';
            _this.position = { x: 0, y: 0 };
            _this.mainPosition = { x: 0, y: 0 };
            _this.offset = { x: 0, y: 0 };
            _this.bgScale = 1;
            _this.animator = new AVG.Animator();
            _this.createDone = false;
            _this.direction = 'left';
            _this.transition = {
                duration: 1200,
                type: 'normal'
            };
            _this.moveWithChar = false;
            _this.callback = null;
            _this.updateBg = function (bg) {
                var _a = _this.position, x = _a.x, y = _a.y;
                _this.bgName = "bg_" + bg;
                _this.bg.texture = RES.getRes(_this.bgName);
                _this.bg.width = _this.layers.bg.width = _this.bg.texture.textureWidth;
                _this.bg.height = _this.layers.bg.height = _this.bg.texture.textureHeight;
                _this.offset = {
                    x: (_this.stage.stageWidth - _this.bg.width) / 2,
                    y: (_this.stage.stageHeight - _this.bg.height) / 2
                };
                _this.layers.bg.anchorOffsetX = -_this.offset.x;
                _this.layers.bg.anchorOffsetY = -_this.offset.y;
                _this.layers.bg.x = x;
                _this.layers.bg.y = y;
                _this.layers.bg.scaleX = _this.bgScale;
                _this.layers.bg.scaleY = _this.bgScale;
                _this.main.x = 0;
                _this.main.y = 0;
            };
            _this.handleTouch = function () {
                _this.interpreter.next();
            };
            _this.interpreter = interpreter;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        Scene.prototype.onAddToStage = function () {
            this.width = this.stage.stageWidth;
            this.height = this.stage.stageHeight;
            this.layers = {
                bg: new egret.DisplayObjectContainer(),
                text: new egret.DisplayObjectContainer(),
                dialog: new egret.DisplayObjectContainer(),
                chars: new egret.DisplayObjectContainer(),
                branch: new egret.DisplayObjectContainer()
            };
            this.transitionMask = new egret.Bitmap();
            this.transitionMask.visible = false;
            this.transitionMask.texture = RES.getRes('transition');
            this.layer = new egret.DisplayObjectContainer();
            this.main = new egret.DisplayObjectContainer();
            this.bg = new egret.Bitmap();
            this.layer.name = 'layer';
            this.transitionMask.name = 'transition';
            this.main.name = 'main';
            this.layers.bg.name = 'bg';
            this.layers.chars.name = 'chars';
            this.layers.text.name = 'text';
            this.layers.dialog.name = 'dialog';
            this.layers.branch.name = 'branch';
            this.layers.bg.addChild(this.bg);
            this.main.addChild(this.layers.bg);
            this.main.addChild(this.layers.chars);
            this.main.addChild(this.layers.text);
            this.layer.addChild(this.main);
            this.layer.addChild(this.layers.branch);
            this.layer.addChild(this.layers.dialog);
            this.addChild(this.transitionMask);
            this.addChild(this.layer);
        };
        Scene.prototype.show = function () {
            var _this = this;
            var callback = this.callback || (function () { });
            this.dialog.hide();
            var x = this.position.x;
            var y = this.position.y;
            var target = this.layers.bg;
            var next = { x: x, y: y, scaleX: this.bgScale, scaleY: this.bgScale };
            if (this.moveWithChar) {
                x = this.mainPosition.x;
                y = this.mainPosition.y;
                target = this.main;
                next = { x: x, y: y };
            }
            if (this.animation) {
                this.animator.init(this.animation, target, function () {
                    _this.animation = null;
                    callback();
                });
                this.animator.start(next);
                return {
                    check: this.animator.check,
                    exec: function () {
                        _this.animator.end();
                        _this.animation = null;
                        callback();
                    }
                };
            }
            if (this.moveWithChar) {
                this.main.x = x;
                this.main.y = y;
            }
            else {
                this.layers.bg.x = x;
                this.layers.bg.y = y;
            }
            callback();
        };
        Scene.prototype.then = function (callback) {
            if (callback === void 0) { callback = null; }
            this.callback = callback;
            return this;
        };
        Scene.prototype.toMode = function (mode) {
            if (this.layers.dialog.contains(this.dialog)) {
                this.layers.dialog.removeChild(this.dialog);
            }
            this.mode = mode;
            if (this.mode === 'ADV') {
                this.dialog = new AVG.ADVDialog();
            }
            else if (this.mode === 'NVL') {
                this.dialog = new AVG.NVLDialog();
            }
            this.layers.dialog.addChild(this.dialog);
            return this;
        };
        Scene.prototype.create = function (bg) {
            var _this = this;
            var callback = this.callback || (function () { });
            this.createDone = false;
            if (this.transition.type === 'normal') {
                if (this.direction === 'left') {
                    this.transitionMask.x = this.stage.width;
                }
                else {
                    this.transitionMask.x = -this.transitionMask.width;
                }
                // TODO 图片资源
                this.transitionMask.texture = RES.getRes('transition');
                this.transitionMask.visible = true;
                this.setChildIndex(this.transitionMask, 5);
                this.animate(this.transition.duration, egret.Ease.quadInOut);
                this.animator.init(this.animation, this.transitionMask, function () {
                    _this.clear();
                    _this.updateBg(bg);
                    _this.animator.init(_this.animation, _this.transitionMask, function () {
                        _this.setChildIndex(_this.transitionMask, 0);
                        _this.createDone = true;
                        _this.animation = null;
                        _this.toMode(_this.mode);
                        callback();
                    });
                    var nextX = 0;
                    if (_this.direction === 'left') {
                        nextX = -_this.transitionMask.width;
                    }
                    else {
                        nextX = _this.stage.width;
                    }
                    _this.animator.start({ x: nextX });
                });
                this.animator.start({ x: -100 });
            }
            else if (this.transition.type === 'fade') {
                this.transitionMask.texture = RES.getRes('transition-w');
                this.transitionMask.visible = true;
                this.transitionMask.x = 0;
                this.transitionMask.y = 0;
                this.animate(this.transition.duration, egret.Ease.quadInOut);
                this.animator.init(this.animation, this.layer, function () {
                    _this.clear();
                    _this.updateBg(bg);
                    _this.animator.init(_this.animation, _this.layer, function () {
                        _this.createDone = true;
                        _this.animation = null;
                        _this.toMode(_this.mode);
                        callback();
                    });
                    _this.animator.start({ alpha: 1 });
                });
                this.animator.start({ alpha: 0 });
            }
            else if (this.transition.type === 'dissolve') {
                this.transitionMask.visible = false;
                this.animate(this.transition.duration, egret.Ease.quadInOut);
                this.animator.init(this.animation, this.layer, function () {
                    _this.clear();
                    _this.updateBg(bg);
                    _this.animator.init(_this.animation, _this.layer, function () {
                        _this.createDone = true;
                        _this.animation = null;
                        _this.toMode(_this.mode);
                        callback();
                    });
                    _this.animator.start({ alpha: 1 });
                });
                this.animator.start({ alpha: 0 });
            }
            else if (this.transition.type === 'none') {
                this.clear();
                this.updateBg(bg);
                this.createDone = true;
                this.animation = null;
                this.toMode(this.mode);
                callback();
            }
            return { check: function () { return _this.createDone; }, exec: function () { } };
        };
        Scene.prototype.scale = function (factor) {
            this.bgScale = factor;
            return this;
        };
        Scene.prototype.at = function (x, y, moveWithChar) {
            if (moveWithChar !== undefined) {
                this.moveWithChar = moveWithChar;
            }
            else {
                this.moveWithChar = false;
            }
            if (this.moveWithChar) {
                this.mainPosition.x = -x;
                if (typeof y === 'number') {
                    this.mainPosition.y = -y;
                }
            }
            else {
                this.position.x = -x;
                if (typeof y === 'number') {
                    this.position.y = -y;
                }
            }
            return this;
        };
        Scene.prototype.animate = function (duration, func) {
            if (duration === void 0) { duration = 500; }
            if (func === void 0) { func = function (t) { return t; }; }
            this.animation = { duration: duration, func: func };
            return this;
        };
        Scene.prototype.from = function (direction) {
            this.direction = direction;
            return this;
        };
        // 切换过渡效果
        Scene.prototype.with = function (duration, type) {
            if (duration === void 0) { duration = 1200; }
            if (type === void 0) { type = 'normal'; }
            this.transition = { duration: duration, type: type };
            return this;
        };
        Scene.prototype.hideDialog = function () {
            if (this.dialog) {
                this.dialog.hide();
            }
        };
        // 清除所有场景
        Scene.prototype.clear = function () {
            this.layers.chars.removeChildren();
            this.hideDialog();
            var num = this.layers.branch.numChildren;
            for (var i = 0; i < num; i += 1) {
                this.layers.text.getChildAt(i).clear();
            }
            num = this.layers.branch.numChildren;
            for (var i = 0; i < num; i += 1) {
                this.layers.branch.getChildAt(i).close();
            }
            return this;
        };
        Scene.prototype.bindTouchEvent = function () {
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouch, this);
        };
        Scene.prototype.unbindTouchEvent = function () {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouch, this);
        };
        return Scene;
    }(egret.DisplayObjectContainer));
    AVG.Scene = Scene;
    __reflect(Scene.prototype,"AVG.Scene",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Text.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var Text = /** @class */ (function (_super) {
        __extends(Text, _super);
        function Text() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.direction = {
                direction: 'bottom',
                duration: 600,
                offset: 24,
                scaleOffset: 0
            };
            _this.animator = new AVG.Animator();
            _this.callback = null;
            return _this;
        }
        Text.prototype.addToScene = function (scene) {
            this.scene = scene;
            this.texts = [];
            this.targets = [];
            this.scene.layers.text.addChild(this);
        };
        Text.prototype.from = function (direction, duration, offset, scaleOffset) {
            if (duration === void 0) { duration = 600; }
            if (offset === void 0) { offset = 24; }
            if (scaleOffset === void 0) { scaleOffset = 0; }
            this.direction.direction = direction;
            this.direction.duration = duration;
            this.direction.offset = offset;
            this.direction.scaleOffset = scaleOffset;
            return this;
        };
        Text.prototype.update = function (texts) {
            this.texts = texts;
            return this;
        };
        Text.prototype.then = function (callback) {
            if (callback === void 0) { callback = null; }
            this.callback = callback;
            return this;
        };
        Text.prototype.draw = function () {
            var _this = this;
            var _a = this.scene.stage, stageWidth = _a.stageWidth, stageHeight = _a.stageHeight;
            this.texts.forEach(function (_a) {
                var t = _a.text, transform = __rest(_a, ["text"]);
                var container = new egret.DisplayObjectContainer();
                var text = new egret.TextField();
                text.text = t;
                text.size = transform.size || 16;
                text.width = transform.width;
                text.textAlign = transform.textAlign || 'center';
                text.lineSpacing = transform.lineSpacing || 8;
                text.textColor = transform.color || 0xffffff;
                if (typeof transform.strokeColor === 'number') {
                    text.stroke = 1;
                    text.strokeColor = transform.strokeColor;
                }
                if (typeof transform.glowColor === 'number') {
                    var color = transform.glowColor;
                    var alpha = 0.8;
                    var blurX = 2;
                    var blurY = 2;
                    var strength = 2;
                    var quality = 3 /* HIGH */;
                    var inner = false;
                    var knockout = false;
                    var glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
                    text.filters = [glowFilter];
                }
                text.anchorOffsetX = text.width / 2;
                text.anchorOffsetY = text.height / 2;
                if (typeof transform.x === 'number') {
                    container.x = transform.x;
                    container.x += text.anchorOffsetX;
                }
                else if (transform.x === egret.HorizontalAlign.CENTER) {
                    container.x = (stageWidth - text.width) / 2;
                }
                else if (transform.x === undefined) {
                    container.x = stageWidth / 2;
                }
                if (transform.y < 0) {
                    container.y = stageHeight - text.height + transform.y;
                }
                else {
                    container.y = transform.y;
                }
                container.y += text.anchorOffsetY;
                text.rotation = transform.rotation || 0;
                text.x = 0;
                text.y = 0;
                text.alpha = 0;
                _this.targets.push(text);
                container.addChild(text);
                _this.addChild(container);
            });
        };
        Text.prototype.show = function () {
            var callback = this.callback || (function () { });
            var _a = this.direction, duration = _a.duration, offset = _a.offset, direction = _a.direction, scaleOffset = _a.scaleOffset;
            this.removeChildren();
            this.targets = [];
            this.draw();
            this.targets.forEach(function (target) {
                if (direction === 'left') {
                    target.x = -offset;
                }
                else if (direction === 'right') {
                    target.x = offset;
                }
                else if (direction === 'top') {
                    target.y = -offset;
                }
                else if (direction === 'bottom') {
                    target.y = offset;
                }
                if (scaleOffset) {
                    target.scaleX = 1 - scaleOffset;
                    target.scaleY = target.scaleX;
                }
            });
            this.animator.init({ duration: duration, func: function (t) { return t; } }, this.targets, function () {
                callback();
            });
            this.animator.start({ x: 0, y: 0, alpha: 1, scaleX: 1, scaleY: 1 });
            return { check: this.animator.check, exec: this.animator.end };
        };
        Text.prototype.hide = function () {
            var _this = this;
            var callback = this.callback || (function () { });
            var _a = this.direction, duration = _a.duration, offset = _a.offset, direction = _a.direction, scaleOffset = _a.scaleOffset;
            var x = 0;
            var y = 0;
            var scale = 1;
            if (direction === 'left') {
                x = offset;
            }
            else if (direction === 'right') {
                x = -offset;
            }
            else if (direction === 'top') {
                y = offset;
            }
            else if (direction === 'bottom') {
                y = -offset;
            }
            if (scaleOffset) {
                scale = 1 + scaleOffset;
            }
            this.animator.init({ duration: duration, func: function (t) { return t; } }, this.targets, function () {
                _this.removeChildren();
                _this.targets = [];
                callback();
            });
            this.animator.start({ x: x, y: y, alpha: 0, scaleX: scale, scaleY: scale });
            return { check: this.animator.check, exec: this.animator.end };
        };
        Text.prototype.clear = function () {
            this.removeChildren();
        };
        return Text;
    }(egret.DisplayObjectContainer));
    AVG.Text = Text;
    __reflect(Text.prototype,"AVG.Text",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Title.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var Title = /** @class */ (function (_super) {
        __extends(Title, _super);
        function Title() {
            var _this = _super.call(this) || this;
            _this.bg = new egret.Bitmap();
            _this.titleLayers = {
                two: new egret.Bitmap,
                three: new egret.Bitmap,
                tv: new egret.Bitmap,
                bg: new egret.Bitmap,
                logo: new egret.Bitmap
            };
            _this.sexLayers = {
                boy: new egret.Bitmap,
                girl: new egret.Bitmap,
                boyTip: new egret.Bitmap,
                girlTip: new egret.Bitmap,
                boySelect: new egret.Bitmap,
                girlSelect: new egret.Bitmap,
                frame: new egret.Bitmap,
                title: new egret.TextField,
                content: new egret.TextField,
                confirm: new egret.Bitmap
            };
            _this.layers = {
                title: new egret.DisplayObjectContainer,
                mask: new egret.Bitmap,
                sex: new egret.DisplayObjectContainer
            };
            _this.sex = 0;
            _this.callback = null;
            _this.animationEnd = false;
            var n = _this;
            _this.handleSelectBoy = function () {
                if (0 !== n.sex) {
                    var t = egret.Tween.get(n.sexLayers.boySelect), e = egret.Tween.get(n.sexLayers.girlSelect), a = egret.Tween.get(n.sexLayers.frame);
                    e.to({
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, 400, egret.Ease.quadInOut).call(function () {
                        n.sexLayers.girlSelect.texture = RES.getRes("elements#sex-icon-no");
                    }).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 300, egret.Ease.backInOut),
                        t.wait(300).to({
                            scaleX: 1.2,
                            scaleY: 1.2
                        }, 600, egret.Ease.backInOut).call(function () {
                            n.sexLayers.boySelect.texture = RES.getRes("elements#sex-icon-ok");
                        }).to({
                            scaleX: 1,
                            scaleY: 1
                        }, 400, egret.Ease.backInOut),
                        a.to({
                            alpha: 0
                        }, 400, egret.Ease.quadInOut).call(function () {
                            n.sexLayers.frame.scaleX = .6,
                                n.sexLayers.frame.scaleY = .6,
                                n.sexLayers.frame.x = n.sexLayers.boySelect.x;
                        }).to({
                            alpha: 1,
                            scaleX: 1,
                            scaleY: 1
                        }, 600, egret.Ease.backInOut).to({
                            scaleX: .95,
                            scaleY: .95
                        }, 150, function (t) {
                            return t;
                        }).to({
                            scaleX: 1.05,
                            scaleY: 1.05
                        }, 150, function (t) {
                            return t;
                        }).to({
                            scaleX: 1,
                            scaleY: 1
                        }, 150, function (t) {
                            return t;
                        }).call(function () {
                            n.sex = 0;
                        });
                }
            };
            _this.handleSelectGirl = function () {
                if (1 !== n.sex) {
                    var t = egret.Tween.get(n.sexLayers.boySelect), e = egret.Tween.get(n.sexLayers.girlSelect), a = egret.Tween.get(n.sexLayers.frame);
                    t.to({
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, 400, egret.Ease.quadInOut).call(function () {
                        n.sexLayers.boySelect.texture = RES.getRes("elements#sex-icon-no");
                    }).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 300, egret.Ease.backInOut),
                        e.wait(300).to({
                            scaleX: 1.2,
                            scaleY: 1.2
                        }, 600, egret.Ease.backInOut).call(function () {
                            n.sexLayers.girlSelect.texture = RES.getRes("elements#sex-icon-ok");
                        }).to({
                            scaleX: 1,
                            scaleY: 1
                        }, 400, egret.Ease.backInOut),
                        a.to({
                            alpha: 0
                        }, 400, egret.Ease.quadInOut).call(function () {
                            n.sexLayers.frame.scaleX = .6,
                                n.sexLayers.frame.scaleY = .6,
                                n.sexLayers.frame.x = n.sexLayers.girlSelect.x;
                        }).to({
                            alpha: 1,
                            scaleX: 1,
                            scaleY: 1
                        }, 600, egret.Ease.backInOut).to({
                            scaleX: .95,
                            scaleY: .95
                        }, 150, function (t) {
                            return t;
                        }).to({
                            scaleX: 1.05,
                            scaleY: 1.05
                        }, 150, function (t) {
                            return t;
                        }).to({
                            scaleX: 1,
                            scaleY: 1
                        }, 150, function (t) {
                            return t;
                        }).call(function () {
                            n.sex = 1;
                        });
                }
            };
            _this.handleConfirm = function () {
                // 直接处理，不请求ajax
                _this.callback(_this.sex);
            };
            n.bg.name = "bg";
            n.addChild(n.bg);
            n.titleLayers.two.name = "22";
            n.titleLayers.three.name = "33";
            n.titleLayers.tv.name = "tv";
            n.titleLayers.bg.name = "bg";
            n.titleLayers.logo.name = "logo";
            n.layers.title.addChild(n.titleLayers.bg);
            n.layers.title.addChild(n.titleLayers.tv);
            n.layers.title.addChild(n.titleLayers.three);
            n.layers.title.addChild(n.titleLayers.two);
            n.layers.title.addChild(n.titleLayers.logo);
            n.sexLayers.boy.name = "boy";
            n.sexLayers.girl.name = "girl";
            n.sexLayers.confirm.name = "confirm";
            n.sexLayers.content.name = "content";
            n.sexLayers.title.name = "title";
            n.sexLayers.boyTip.name = "boyTip";
            n.sexLayers.girlTip.name = "girlTip";
            n.sexLayers.boySelect.name = "boySelect";
            n.sexLayers.girlSelect.name = "girlSelect";
            n.sexLayers.frame.name = "frame";
            n.layers.sex.addChild(n.sexLayers.title);
            n.layers.sex.addChild(n.sexLayers.content);
            n.layers.sex.addChild(n.sexLayers.frame);
            n.layers.sex.addChild(n.sexLayers.boy);
            n.layers.sex.addChild(n.sexLayers.girl);
            n.layers.sex.addChild(n.sexLayers.boyTip);
            n.layers.sex.addChild(n.sexLayers.girlTip);
            n.layers.sex.addChild(n.sexLayers.boySelect);
            n.layers.sex.addChild(n.sexLayers.girlSelect);
            n.layers.sex.addChild(n.sexLayers.confirm);
            n.layers.title.name = "title";
            n.layers.mask.name = "mask";
            n.layers.sex.name = "sex";
            n.addChild(n.layers.title);
            n.addChild(n.layers.mask);
            n.addChild(n.layers.sex);
            return _this;
        }
        Title.prototype.addToStage = function (stage) {
            this.originStage = stage;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.reset, this);
        };
        Title.prototype.showTitle = function (t) {
            var e = this;
            void 0 === t && (t = function () { }),
                this.layers.title.visible = !0,
                this.animationEnd = !1,
                this.titleLayers.two.alpha = 0,
                this.titleLayers.three.alpha = 0,
                this.titleLayers.tv.alpha = 0,
                this.titleLayers.logo.alpha = 0;
            var n = this.titleLayers.two.y;
            this.titleLayers.two.y += 36;
            var a = this.titleLayers.three.y;
            this.titleLayers.three.y += 36;
            var r = this.titleLayers.tv.y;
            this.titleLayers.tv.y += 36;
            var i = this.titleLayers.logo.y;
            this.titleLayers.logo.y += 36;
            var o = egret.Tween.get(this.titleLayers.two), c = egret.Tween.get(this.titleLayers.three), s = egret.Tween.get(this.titleLayers.tv), u = egret.Tween.get(this.titleLayers.logo);
            return c.to({
                alpha: 1,
                y: a
            }, 700, egret.Ease.quadOut),
                o.wait(400).to({
                    alpha: 1,
                    y: n
                }, 700, egret.Ease.quadOut),
                s.wait(600).to({
                    alpha: 1,
                    y: r
                }, 600, egret.Ease.quadOut),
                u.wait(800).to({
                    alpha: 1,
                    y: i
                }, 700, egret.Ease.quadOut).call(function () {
                    t(),
                        e.animationEnd = !0;
                }),
                {
                    check: function () {
                        return e.animationEnd;
                    },
                    exec: function () { }
                };
        };
        Title.prototype.chooseSex = function (t) {
            var e = this;
            void 0 === t && (t = function () { }),
                this.layers.sex.visible = !0,
                this.layers.mask.visible = !0,
                this.animationEnd = !1,
                this.callback = t,
                this.layers.mask.alpha = 0,
                this.sexLayers.boy.alpha = 0,
                this.sexLayers.girl.alpha = 0,
                this.sexLayers.title.alpha = 0,
                this.sexLayers.content.alpha = 0,
                this.sexLayers.confirm.alpha = 0,
                this.sexLayers.boySelect.scaleX = 0,
                this.sexLayers.boySelect.scaleY = 0,
                this.sexLayers.boyTip.scaleX = 0,
                this.sexLayers.girlTip.scaleY = 0,
                this.sexLayers.girlSelect.scaleX = 0,
                this.sexLayers.girlSelect.scaleY = 0,
                this.sexLayers.frame.scaleX = .6,
                this.sexLayers.frame.scaleY = .6,
                this.sexLayers.frame.alpha = 0;
            var n = this.layers.mask.y;
            this.layers.mask.y += 36;
            var a = this.sexLayers.boy.y;
            this.sexLayers.boy.y += 72;
            var r = this.sexLayers.girl.y;
            this.sexLayers.girl.y += 72;
            var i = this.sexLayers.title.y;
            this.sexLayers.title.y += 36;
            var o = this.sexLayers.content.y;
            this.sexLayers.content.y += 36;
            var c = this.sexLayers.confirm.y;
            this.sexLayers.confirm.y += 36;
            var s = egret.Tween.get(this.layers.mask), u = egret.Tween.get(this.sexLayers.title), f = egret.Tween.get(this.sexLayers.content), h = egret.Tween.get(this.sexLayers.boy), l = egret.Tween.get(this.sexLayers.girl), d = egret.Tween.get(this.sexLayers.confirm), g = egret.Tween.get(this.sexLayers.boyTip), y = egret.Tween.get(this.sexLayers.girlTip), m = egret.Tween.get(this.sexLayers.boySelect), w = egret.Tween.get(this.sexLayers.girlSelect), p = egret.Tween.get(this.sexLayers.frame), x = egret.Tween.get(this.layers.title);
            return x.wait(400).to({
                y: -146
            }, 1e3, egret.Ease.quadOut).to({
                alpha: 0
            }, 500, egret.Ease.quadInOut).call(function () {
                e.layers.title.visible = !1,
                    e.layers.mask.visible = !1;
            }),
                s.to({
                    alpha: 1,
                    y: n
                }, 600, egret.Ease.quadOut),
                u.wait(200).to({
                    alpha: 1,
                    y: i
                }, 400, egret.Ease.quadOut),
                f.wait(200).to({
                    alpha: 1,
                    y: o
                }, 400, egret.Ease.quadOut),
                h.wait(600).to({
                    alpha: 1,
                    y: a
                }, 600, egret.Ease.quadOut),
                l.wait(800).to({
                    alpha: 1,
                    y: r
                }, 600, egret.Ease.quadOut),
                d.wait(1e3).to({
                    alpha: 1,
                    y: c
                }, 500, egret.Ease.quadOut),
                g.wait(1e3).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 600, egret.Ease.backInOut).to({
                    scaleX: .9,
                    scaleY: .9
                }, 200).to({
                    scaleX: 1,
                    scaleY: 1
                }, 200),
                y.wait(1e3).to({
                    scaleX: 1,
                    scaleY: 1
                }, 600, egret.Ease.backInOut).to({
                    scaleX: .9,
                    scaleY: .9
                }, 200).to({
                    scaleX: 1,
                    scaleY: 1
                }, 200),
                m.wait(1400).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 800, egret.Ease.backInOut).call(function () {
                    e.sexLayers.boySelect.texture = RES.getRes("elements#sex-icon-ok");
                }).to({
                    scaleX: 1,
                    scaleY: 1
                }, 400, egret.Ease.backInOut),
                w.wait(1400).to({
                    scaleX: 1,
                    scaleY: 1
                }, 800, egret.Ease.backInOut),
                p.wait(1800).to({
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 600, egret.Ease.backInOut).to({
                    scaleX: .95,
                    scaleY: .95
                }, 150, function (t) {
                    return t;
                }).to({
                    scaleX: 1.05,
                    scaleY: 1.05
                }, 150, function (t) {
                    return t;
                }).to({
                    scaleX: 1,
                    scaleY: 1
                }, 150, function (t) {
                    return t;
                }).call(function () {
                    e.sexLayers.boy.addEventListener(egret.TouchEvent.TOUCH_TAP, e.handleSelectBoy, e),
                        e.sexLayers.girl.addEventListener(egret.TouchEvent.TOUCH_TAP, e.handleSelectGirl, e),
                        e.sexLayers.confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, e.handleConfirm, e);
                }),
                {
                    check: function () {
                        return e.animationEnd;
                    },
                    exec: function () { }
                };
        };
        Title.prototype.reset = function () {
            this.layers.title.visible = !1,
                this.layers.sex.visible = !1,
                this.layers.mask.visible = !1,
                this.animationEnd = !1,
                this.resetTitle(),
                this.resetSex();
        };
        Title.prototype.resetTitle = function () {
            var t = this.titleLayers, e = t.two, n = t.three, a = t.tv, r = (t.bg,
                t.logo), i = this.originStage, o = i.stageWidth, c = i.stageHeight;
            this.bg.texture = RES.getRes("elements#title-bg-blur"),
                this.bg.x = 0,
                this.bg.x = 0,
                this.layers.title.x = 0,
                this.layers.title.y = 0,
                this.layers.title.alpha = 1,
                this.titleLayers.two.texture = RES.getRes("cg#2233"),
                this.titleLayers.three.texture = RES.getRes("cg#moon"),
                this.titleLayers.tv.texture = RES.getRes("cg#bridge"),
                this.titleLayers.bg.texture = RES.getRes("elements#title-bg"),
                this.titleLayers.logo.texture = RES.getRes("elements#logo");
            e.width = 1233,
                e.height = e.texture.textureHeight / e.texture.textureWidth * e.width,
                e.x = -480,
                e.y = c - e.height - 24,
                n.width = 884,
                n.height = n.texture.textureHeight / n.texture.textureWidth * n.width,
                n.x = -40,
                n.y = -260,
                a.width = 2548,
                a.height = a.texture.textureHeight / a.texture.textureWidth * a.width,
                a.x = 1500,
                a.y = -120,
                a.scaleX = -1,
                r.width = 4 * o / 5,
                r.height = r.texture.textureHeight / r.texture.textureWidth * r.width,
                r.x = o / 10,
                r.y = c - 128 - r.height;
        };
        Title.prototype.resetSex = function () {
            var t = this.sexLayers, e = t.boy, n = t.girl, a = t.confirm, r = t.content, i = t.title, o = t.boySelect, c = t.girlSelect, s = t.frame, u = t.boyTip, f = t.girlTip, h = this.layers.mask, l = this.originStage, d = l.stageWidth, g = l.stageHeight;
            e.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleSelectBoy, this),
                n.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleSelectGirl, this),
                a.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleSelectBoy, this),
                e.touchEnabled = !0,
                n.touchEnabled = !0,
                a.touchEnabled = !0,
                h.texture = RES.getRes("elements#white-mask"),
                e.texture = RES.getRes("elements#sex-boy"),
                n.texture = RES.getRes("elements#sex-girl"),
                a.texture = RES.getRes("elements#confirm"),
                o.texture = RES.getRes("elements#sex-icon-no"),
                c.texture = RES.getRes("elements#sex-icon-no"),
                u.texture = RES.getRes("elements#sex-icon-boy"),
                f.texture = RES.getRes("elements#sex-icon-girl"),
                s.texture = RES.getRes("elements#sex-icon-frame"),
                i.text = "请选择性别",
                r.text = "只可以选择一次哦！",
                h.width = d,
                h.height = h.texture.textureHeight / h.texture.textureWidth * h.width,
                h.x = 0,
                h.y = g - h.height,
                i.width = d,
                i.size = 42,
                i.textAlign = egret.HorizontalAlign.CENTER,
                i.y = 0,
                r.width = d,
                r.size = 18,
                r.textAlign = egret.HorizontalAlign.CENTER,
                r.y = i.size + 16;
            var y = d / 28;
            e.width = 9 * y,
                e.height = e.texture.textureHeight / e.texture.textureWidth * e.width,
                e.x = 4 * y,
                e.y = r.y + 48,
                n.width = e.width,
                n.height = e.height,
                n.x = e.width + 6 * y,
                n.y = e.y,
                o.width = e.width / 6,
                o.height = o.texture.textureHeight / o.texture.textureWidth * o.width,
                o.anchorOffsetX = o.width / 2,
                o.anchorOffsetY = o.height / 2,
                o.x = e.x + e.width / 2,
                o.y = e.y + e.height - 128,
                c.width = o.width,
                c.height = o.height,
                c.anchorOffsetX = o.anchorOffsetX,
                c.anchorOffsetY = o.anchorOffsetY,
                c.x = n.x + n.width / 2,
                c.y = o.y,
                u.width = e.width / 4,
                u.height = u.texture.textureHeight / u.texture.textureWidth * u.width,
                u.anchorOffsetX = u.width / 2,
                u.anchorOffsetY = u.height / 2,
                u.x = e.x + e.width / 2,
                u.y = e.y + e.height - 256,
                f.width = u.width,
                f.height = u.height,
                f.anchorOffsetX = u.anchorOffsetX,
                f.anchorOffsetY = u.anchorOffsetY,
                f.x = n.x + n.width / 2,
                f.y = u.y,
                s.width = e.width + 36,
                s.height = s.texture.textureHeight / s.texture.textureWidth * s.width,
                s.anchorOffsetX = s.width / 2,
                s.anchorOffsetY = s.height / 2,
                s.x = o.x,
                s.y = 80 + e.height / 2,
                a.width = d / 3,
                a.height = a.texture.textureHeight / a.texture.textureWidth * a.width,
                a.x = d / 3,
                a.y = e.y + e.height + 24,
                this.layers.sex.x = 0,
                this.layers.sex.y = (g - (a.y + a.height)) / 2;
        };
        Title.prototype.init = function () {
            this.originStage.addChild(this);
        };
        Title.prototype.close = function () {
            this.originStage.removeChild(this);
        };
        return Title;
    }(egret.DisplayObjectContainer));
    AVG.Title = Title;
    __reflect(Title.prototype,"AVG.Title",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/Transition.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    var Transition = /** @class */ (function () {
        function Transition() {
            var _this = this;
            this.isEnd = true;
            this.start = function (preTarget, nextTarget, parent, index) {
                _this.isEnd = false;
                _this.parent = parent;
                _this.preTarget = preTarget;
                _this.nextTarget = nextTarget;
                _this.nextTarget.alpha = 0;
                if (index !== undefined) {
                    _this.parent.addChildAt(_this.nextTarget, index);
                }
                else {
                    _this.parent.addChild(_this.nextTarget);
                }
                if (_this.transition.type === 'fade') {
                    var duration = _this.transition.duration;
                    egret.Tween.get(_this.preTarget).to({ alpha: 0 }, duration * .8);
                    egret.Tween.get(_this.nextTarget)
                        .wait(duration * .3)
                        .to({ alpha: 1 }, duration * .7)
                        .call(function () { return _this.end(); });
                }
                if (_this.transition.type === 'none') {
                    _this.end();
                }
            };
            this.check = function () {
                return _this.isEnd;
            };
            this.end = function () {
                if (!_this.isEnd) {
                    egret.Tween.pauseTweens(_this.preTarget);
                    egret.Tween.pauseTweens(_this.nextTarget);
                    _this.parent.removeChild(_this.preTarget);
                    _this.nextTarget.alpha = 1;
                    _this.isEnd = true;
                    _this.preTarget = null;
                    _this.nextTarget = null;
                }
            };
        }
        Transition.prototype.init = function (transition) {
            this.transition = transition;
        };
        return Transition;
    }());
    AVG.Transition = Transition;
    __reflect(Transition.prototype,"AVG.Transition",[]); 
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ }),

/***/ "./src/runtime/components/types.ts":
/***/ (function(module, exports) {

var AVG = window['AVG']; 
var AVG;
(function (AVG) {
    AVG.noop = function () { };
    AVG.MAX_GRID = 6;
    AVG.CHAR_SIZE_LUT = {
        scale: {
            exSmall: .2,
            small: .6,
            middle: 1,
            large: 1.6,
            exLarge: 2
        },
        yOffset: {
            exSmall: 32,
            small: 64,
            middle: 84,
            large: 96,
            exLarge: 128
        },
        initFromOffset: {
            exSmall: .1,
            small: .2,
            middle: .3,
            large: .4,
            exLarge: .4
        }
    };
    AVG.CHAR_ATTRS = {};
    AVG.DIALOG_SIZE_LUT = {
        touchIcon: {
            bg: 'elements#touch',
            width: 64,
            right: 12,
            bottom: 12
        },
        adv: {
            width: 540,
            height: 287,
            nameLeft: 128,
            nameSize: 28,
            nameWidth: 256,
            nameTop: 42,
            wordsLeft: 30,
            wordsTop: 112,
            wordsWidth: 480,
            wordsSize: 24,
            wordsLineSpacing: 8
        },
        nvl: {
            bg: 'dialog#nvl',
            width: 540,
            height: 960,
            innerWidth: 460,
            innerHeight: 720,
            nameWidth: 256,
            nameSize: 28,
            nameLeft: 0,
            wordsLeft: 0,
            wordsTop: 18,
            wordsSize: 24,
            wordsLineSpacing: 4,
            blockSpacing: 32,
            blockMinHeight: 32
        }
    };
    AVG.BRANCH_ATTRS = {
        branchWidth: 420,
        branchAligh: egret.HorizontalAlign.RIGHT,
        textWidth: 420,
        textX: 0,
        textY: null,
        branchPadding: 8,
        color: 0xffffff,
        fontSize: 22,
        lineSpace: 6,
        branchSpace: 12,
        textAlign: egret.HorizontalAlign.CENTER,
        bg: 'elements#button',
        mask: 'dialog#nvl'
    };
})(AVG || (AVG = {}));
window["AVG"] = AVG;


/***/ })

/******/ });
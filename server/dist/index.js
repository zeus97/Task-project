/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst server_1 = __importDefault(__webpack_require__(/*! ./src/server */ \"./src/server/index.ts\"));\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\nconst logger_1 = __webpack_require__(/*! ./src/Utils/logger */ \"./src/Utils/logger.ts\");\r\n// * Configuration the .env file\r\ndotenv_1.default.config();\r\nconst port = process.env.PORT || 8000;\r\n// * Execute SERVER\r\nserver_1.default.listen(port, () => {\r\n    (0, logger_1.LogSuccess)(`[SERVER ON]: Running in http://localhost:${port}/api/v1`);\r\n});\r\n// * Control SERVER ERROR\r\nserver_1.default.on('error', (error) => {\r\n    (0, logger_1.LogError)(`[SERVER ERROR]: ${error}`);\r\n});\r\n\n\n//# sourceURL=webpack://task-project-backend/./index.ts?");

/***/ }),

/***/ "./src/Controllers/AuthController.ts":
/*!*******************************************!*\
  !*** ./src/Controllers/AuthController.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.AuthController = void 0;\r\nconst Auth_orm_1 = __webpack_require__(/*! ../Domain/orm/Auth.orm */ \"./src/Domain/orm/Auth.orm.ts\");\r\nconst logger_1 = __webpack_require__(/*! ../Utils/logger */ \"./src/Utils/logger.ts\");\r\nconst tsoa_1 = __webpack_require__(/*! tsoa */ \"tsoa\");\r\nlet AuthController = class AuthController {\r\n    /**\r\n     * Endpoint to Register new user\r\n     * @param {User} user Data of user\r\n     *\r\n     */\r\n    registerUser(user) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response;\r\n            if (user) {\r\n                (0, logger_1.LogSuccess)(`[/api/v1/auth/register] Register New User: ${user.email} `);\r\n                response = yield (0, Auth_orm_1.registerUser)(user);\r\n            }\r\n            else {\r\n                (0, logger_1.LogWarning)('[/api/auth/register] Register needs User Entity');\r\n                response = {\r\n                    status: 404,\r\n                    message: 'User not Registered: Please, provide a User Entity to create one'\r\n                };\r\n            }\r\n            return response;\r\n        });\r\n    }\r\n    ;\r\n    /**\r\n     * Endpoint to log in user\r\n     * @param {Auth} auth User credentials\r\n     * @returns {AuthResponse} Promise of AuthResponse with a JWT\r\n     */\r\n    loginUser(auth) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response;\r\n            if (auth) {\r\n                (0, logger_1.LogSuccess)(`[/api/auth/login] Login User: ${auth.email} `);\r\n                response = yield (0, Auth_orm_1.loginUser)(auth);\r\n            }\r\n            else {\r\n                (0, logger_1.LogWarning)('[/api/auth/login] Login needs Auth Entity (email && password');\r\n                response = {\r\n                    status: 404,\r\n                    message: '[AUTH ERROR]: Email & Password are needed',\r\n                };\r\n            }\r\n            return response;\r\n        });\r\n    }\r\n    ;\r\n};\r\n__decorate([\r\n    (0, tsoa_1.SuccessResponse)('200', 'User registered succeful'),\r\n    (0, tsoa_1.Response)('404', 'The email is already in use'),\r\n    (0, tsoa_1.Post)('/register'),\r\n    __param(0, (0, tsoa_1.Body)()),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], AuthController.prototype, \"registerUser\", null);\r\n__decorate([\r\n    (0, tsoa_1.Post)('/login'),\r\n    __param(0, (0, tsoa_1.Body)()),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], AuthController.prototype, \"loginUser\", null);\r\nAuthController = __decorate([\r\n    (0, tsoa_1.Route)('/api/v1/auth'),\r\n    (0, tsoa_1.Tags)('AuthController')\r\n], AuthController);\r\nexports.AuthController = AuthController;\r\n\n\n//# sourceURL=webpack://task-project-backend/./src/Controllers/AuthController.ts?");

/***/ }),

/***/ "./src/Controllers/UserController.ts":
/*!*******************************************!*\
  !*** ./src/Controllers/UserController.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.UserController = void 0;\r\nconst logger_1 = __webpack_require__(/*! ../Utils/logger */ \"./src/Utils/logger.ts\");\r\nconst User_orm_1 = __webpack_require__(/*! ../Domain/orm/User.orm */ \"./src/Domain/orm/User.orm.ts\");\r\nconst tsoa_1 = __webpack_require__(/*! tsoa */ \"tsoa\");\r\nlet UserController = class UserController {\r\n    /**\r\n     * Endpoint to get User data after log in\r\n     * @param id ID of User by Query param /me?id=ID\r\n     * @returns Returns Promise of User data\r\n     */\r\n    userData(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = undefined;\r\n            let userFound = undefined;\r\n            if (id) {\r\n                (0, logger_1.LogSuccess)(`[/api/v1/me] Get User Data By ID: ${id} `);\r\n                yield (0, User_orm_1.getUserByID)(id).then((user) => {\r\n                    userFound = user;\r\n                    if (userFound != null) {\r\n                        response = {\r\n                            status: 200,\r\n                            user: userFound\r\n                        };\r\n                    }\r\n                }).catch((error) => {\r\n                    console.log(error);\r\n                });\r\n            }\r\n            else {\r\n                (0, logger_1.LogWarning)('[/api/v1/me?id=xxx] ID missing ');\r\n                return response = {\r\n                    status: 404,\r\n                    message: 'Please provide an ID'\r\n                };\r\n            }\r\n            return response;\r\n        });\r\n    }\r\n    ;\r\n    /**\r\n     * Endpoint to save the user's tasks\r\n     * @param id ID of User by Query param /me/tasks?id=ID\r\n     * @param {Task[]} tasks User tasks\r\n     * @returns Promise of tasks saved\r\n     */\r\n    saveTasks(id, tasks) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = undefined;\r\n            if (id && tasks) {\r\n                (0, logger_1.LogSuccess)(`[/api/auth/me/tasks] Saving tasks `);\r\n                response = yield (0, User_orm_1.saveTasks)(id, tasks);\r\n                if (response != undefined) {\r\n                    response = {\r\n                        status: 200,\r\n                        message: 'Tasks saved succefully',\r\n                        tasks: response\r\n                    };\r\n                }\r\n            }\r\n            else {\r\n                (0, logger_1.LogWarning)('[/api/auth/me/tasks] Data missing');\r\n                response = {\r\n                    status: 404,\r\n                    message: 'Data missing'\r\n                };\r\n            }\r\n            return response;\r\n        });\r\n    }\r\n    ;\r\n};\r\n__decorate([\r\n    (0, tsoa_1.Get)('/'),\r\n    __param(0, (0, tsoa_1.Query)()),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [String]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], UserController.prototype, \"userData\", null);\r\n__decorate([\r\n    (0, tsoa_1.Post)('/tasks'),\r\n    __param(0, (0, tsoa_1.Query)()),\r\n    __param(1, (0, tsoa_1.Body)()),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [String, Array]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], UserController.prototype, \"saveTasks\", null);\r\nUserController = __decorate([\r\n    (0, tsoa_1.Route)('/api/v1/me'),\r\n    (0, tsoa_1.Tags)('UserController')\r\n], UserController);\r\nexports.UserController = UserController;\r\n\n\n//# sourceURL=webpack://task-project-backend/./src/Controllers/UserController.ts?");

/***/ }),

/***/ "./src/Domain/Entities/User.entity.ts":
/*!********************************************!*\
  !*** ./src/Domain/Entities/User.entity.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.userEntity = void 0;\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst userEntity = () => {\r\n    let userSchema = new mongoose_1.default.Schema({\r\n        name: { type: String, required: true },\r\n        email: { type: String, required: true },\r\n        password: { type: String, required: true },\r\n        tasks: { type: [], required: true }\r\n    });\r\n    return mongoose_1.default.models.Users || mongoose_1.default.model('Users', userSchema);\r\n};\r\nexports.userEntity = userEntity;\r\n\n\n//# sourceURL=webpack://task-project-backend/./src/Domain/Entities/User.entity.ts?");

/***/ }),

/***/ "./src/Domain/orm/Auth.orm.ts":
/*!************************************!*\
  !*** ./src/Domain/orm/Auth.orm.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.loginUser = exports.registerUser = void 0;\r\nconst logger_1 = __webpack_require__(/*! ../../Utils/logger */ \"./src/Utils/logger.ts\");\r\nconst User_entity_1 = __webpack_require__(/*! ../Entities/User.entity */ \"./src/Domain/Entities/User.entity.ts\");\r\n// Environment variables\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\n// BCRYPT for passwords\r\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\r\n// JWT\r\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\r\n// Configuration of environment variables\r\ndotenv_1.default.config();\r\n// Obtain Secret key to generate JWT\r\nconst secret = process.env.SECRETKEY || 'MYSECRETKEY';\r\n//Register User\r\nconst registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        let userModel = (0, User_entity_1.userEntity)();\r\n        let userFound;\r\n        let response = undefined;\r\n        userFound = yield userModel.findOne({ email: user.email });\r\n        if (userFound === null) {\r\n            yield userModel.create(user);\r\n            return response = {\r\n                status: 200,\r\n                message: `User registered successfully: ${user.email}`\r\n            };\r\n        }\r\n        else {\r\n            return response = {\r\n                status: 404,\r\n                message: 'An user is already created with this email'\r\n            };\r\n        }\r\n    }\r\n    catch (error) {\r\n        (0, logger_1.LogError)(`[ORM ERROR]: creating user: ${error}`);\r\n    }\r\n});\r\nexports.registerUser = registerUser;\r\n//Login User\r\nconst loginUser = (auth) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        let userModel = (0, User_entity_1.userEntity)();\r\n        let userFound;\r\n        let token = undefined;\r\n        let response = undefined;\r\n        // Check if user exists by Unique Email\r\n        userFound = yield userModel.findOne({ email: auth.email });\r\n        if (userFound === null) {\r\n            console.error(`[ERROR Authentication in ORM]: Email not valid`);\r\n            return response = {\r\n                status: 404,\r\n                message: 'Invalid email'\r\n            };\r\n        }\r\n        // Check if Password is Valid (compare with bcrypt)\r\n        let validPassword = bcrypt_1.default.compareSync(auth.password, userFound.password);\r\n        if (!validPassword) {\r\n            console.error(`[ERROR Authentication in ORM]: Password Not Valid`);\r\n            return response = {\r\n                status: 404,\r\n                message: 'Invalid password'\r\n            };\r\n        }\r\n        // Generate our JWT\r\n        token = jsonwebtoken_1.default.sign({ email: userFound.email }, secret, {\r\n            expiresIn: \"2h\"\r\n        });\r\n        if (userFound && token) {\r\n            return response = {\r\n                status: 200,\r\n                message: `Welcome ${userFound.name}`,\r\n                id: userFound.id,\r\n                token: token\r\n            };\r\n        }\r\n    }\r\n    catch (error) {\r\n        (0, logger_1.LogError)(`[ORM ERROR]: Login User: ${error}`);\r\n    }\r\n});\r\nexports.loginUser = loginUser;\r\n\n\n//# sourceURL=webpack://task-project-backend/./src/Domain/orm/Auth.orm.ts?");

/***/ }),

/***/ "./src/Domain/orm/User.orm.ts":
/*!************************************!*\
  !*** ./src/Domain/orm/User.orm.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.saveTasks = exports.getUserByID = void 0;\r\nconst logger_1 = __webpack_require__(/*! ../../Utils/logger */ \"./src/Utils/logger.ts\");\r\nconst User_entity_1 = __webpack_require__(/*! ../Entities/User.entity */ \"./src/Domain/Entities/User.entity.ts\");\r\nconst getUserByID = (id) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        let userModel = (0, User_entity_1.userEntity)();\r\n        return yield userModel.findById(id).select('name email tasks');\r\n    }\r\n    catch (error) {\r\n        (0, logger_1.LogError)(`[ORM ERROR]: Getting User By ID: ${error}`);\r\n    }\r\n});\r\nexports.getUserByID = getUserByID;\r\nconst saveTasks = (id, tasks) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        let userModel = (0, User_entity_1.userEntity)();\r\n        let response = undefined;\r\n        yield userModel.updateOne({ _id: id }, { tasks: tasks })\r\n            .then((r) => {\r\n            response = userModel.findById(id).select('tasks -_id');\r\n        }).catch((err) => {\r\n            throw new Error('Something went wrong');\r\n        });\r\n        return response;\r\n    }\r\n    catch (error) {\r\n        (0, logger_1.LogError)(`[ORM ERROR]: Saving tasks: ${error}`);\r\n    }\r\n});\r\nexports.saveTasks = saveTasks;\r\n\n\n//# sourceURL=webpack://task-project-backend/./src/Domain/orm/User.orm.ts?");

/***/ }),

/***/ "./src/Middlewares/verifyToken.middleware.ts":
/*!***************************************************!*\
  !*** ./src/Middlewares/verifyToken.middleware.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.verifyToken = void 0;\r\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\n// Config dotenv to read environment variables\r\ndotenv_1.default.config();\r\nconst secret = process.env.SECRETKEY || 'MYSECRETKEY';\r\n/**\r\n *\r\n * @param { Request } req Original request previous middleware of verification JWT\r\n * @param { Response } res Response to verification of JWT\r\n * @param { NextFunction } next Next function to be executed\r\n * @returns Errors of verification or next execution\r\n */\r\nconst verifyToken = (req, res, next) => {\r\n    // Check HEADER from Request for 'x-access-token'\r\n    let token = req.headers['x-access-token'];\r\n    // Verify if jwt is present\r\n    if (!token) {\r\n        return res.status(403).send({\r\n            authenticationError: 'Missing JWT in request',\r\n            message: 'Not authorised to consume this endpoint'\r\n        });\r\n    }\r\n    // Verify the token obtained. We pass the secret\r\n    jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {\r\n        if (err) {\r\n            return res.status(500).send({\r\n                authenticationError: 'JWT verification failed',\r\n                message: 'Failed to verify JWT token in request'\r\n            });\r\n        }\r\n        // Execute Next Function -> Protected Routes will be executed\r\n        next();\r\n    });\r\n};\r\nexports.verifyToken = verifyToken;\r\n\n\n//# sourceURL=webpack://task-project-backend/./src/Middlewares/verifyToken.middleware.ts?");

/***/ }),

/***/ "./src/Routes/AuthRouter.ts":
/*!**********************************!*\
  !*** ./src/Routes/AuthRouter.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst AuthController_1 = __webpack_require__(/*! ../Controllers/AuthController */ \"./src/Controllers/AuthController.ts\");\r\n// to encrypt password\r\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\r\n// Acces to body of the request\r\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\r\n// Middleware to read JSON in Body\r\nlet jsonParser = body_parser_1.default.json();\r\nlet authRouter = express_1.default.Router();\r\nauthRouter.route('/register')\r\n    .post(jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    let { name, email, password } = req === null || req === void 0 ? void 0 : req.body;\r\n    let hashedPassword = '';\r\n    if (name && password && email) {\r\n        hashedPassword = bcrypt_1.default.hashSync(password, 8);\r\n        let newUser = {\r\n            name: name,\r\n            email: email,\r\n            password: hashedPassword,\r\n            tasks: []\r\n        };\r\n        // Controller Instance to excute method\r\n        const controller = new AuthController_1.AuthController();\r\n        // Obtaining Response from orm\r\n        const response = yield controller.registerUser(newUser);\r\n        // Bad response\r\n        if (response === undefined) {\r\n            return res.status(400).send({\r\n                message: 'An error ocurred'\r\n            });\r\n        }\r\n        // Success response\r\n        if (response.status === 200) {\r\n            return res.status(200).send(response);\r\n        }\r\n        // Error response\r\n        return res.status(200).send(response);\r\n    }\r\n    else {\r\n        // Error response\r\n        return res.status(400).send({\r\n            message: '[ERROR User Data missing]: No user can be registered'\r\n        });\r\n    }\r\n}));\r\nauthRouter.route('/login')\r\n    .post(jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    let { email, password } = req === null || req === void 0 ? void 0 : req.body;\r\n    if (email && password) {\r\n        // Controller Instance to excute method\r\n        const controller = new AuthController_1.AuthController();\r\n        let auth = {\r\n            email: email,\r\n            password: password\r\n        };\r\n        // Obtain Response\r\n        let response = yield controller.loginUser(auth);\r\n        if (response === undefined) {\r\n            return res.status(400).send({\r\n                message: 'Something went wrong'\r\n            });\r\n        }\r\n        ;\r\n        // Send to the client the response which includes the JWT to authorize requests\r\n        if (response.status === 200) {\r\n            return res.status(200).send(response);\r\n        }\r\n        //if email or password is invalid\r\n        return res.status(200).send(response);\r\n    }\r\n    else {\r\n        // Data missing response\r\n        return res.status(400).send({\r\n            message: '[ERROR User Data missing]: No user can be registered'\r\n        });\r\n    }\r\n}));\r\nexports[\"default\"] = authRouter;\r\n\n\n//# sourceURL=webpack://task-project-backend/./src/Routes/AuthRouter.ts?");

/***/ }),

/***/ "./src/Routes/MeRouter.ts":
/*!********************************!*\
  !*** ./src/Routes/MeRouter.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\n//Controllers\r\nconst UserController_1 = __webpack_require__(/*! ../Controllers/UserController */ \"./src/Controllers/UserController.ts\");\r\n//Middleware to verify JWT\r\nconst verifyToken_middleware_1 = __webpack_require__(/*! ../Middlewares/verifyToken.middleware */ \"./src/Middlewares/verifyToken.middleware.ts\");\r\n// Middleware to acces body of request\r\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\r\nconst jsonParser = body_parser_1.default.json();\r\nlet meRouter = express_1.default.Router();\r\nmeRouter.route('/')\r\n    .get(verifyToken_middleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    var _a;\r\n    let id = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.id;\r\n    if (id) {\r\n        // Controller: Auth Controller\r\n        const controller = new UserController_1.UserController();\r\n        // Obtain response from Controller\r\n        let response = yield controller.userData(id);\r\n        // If user is authorised:\r\n        if (response != undefined && response.status === 200) {\r\n            return res.status(200).send(response);\r\n        }\r\n        else {\r\n            return res.status(404).send({\r\n                message: 'An error ocurred'\r\n            });\r\n        }\r\n    }\r\n    else {\r\n        // Missing ID\r\n        return res.status(401).send({\r\n            message: 'You are not authorised to perform this action'\r\n        });\r\n    }\r\n}));\r\nmeRouter.route('/tasks')\r\n    .post(verifyToken_middleware_1.verifyToken, jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    var _b;\r\n    let tasks = req === null || req === void 0 ? void 0 : req.body.tasks;\r\n    let id = (_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.id;\r\n    if (id && tasks) {\r\n        // Controller: User Controller\r\n        const controller = new UserController_1.UserController();\r\n        let response = yield controller.saveTasks(id, tasks);\r\n        if (response === undefined) {\r\n            return res.status(404).send({\r\n                message: 'Error'\r\n            });\r\n        }\r\n        ;\r\n        if (response.status === 404) {\r\n            return res.status(404).send(response);\r\n        }\r\n        // Success response\r\n        return res.status(200).send(response);\r\n    }\r\n    else {\r\n        res.status(401).send({\r\n            message: 'You are not authorised to perform this action'\r\n        });\r\n    }\r\n}));\r\nexports[\"default\"] = meRouter;\r\n\n\n//# sourceURL=webpack://task-project-backend/./src/Routes/MeRouter.ts?");

/***/ }),

/***/ "./src/Routes/index.ts":
/*!*****************************!*\
  !*** ./src/Routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\n/**\r\n * Root Router\r\n * Redirections to Routers\r\n */\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst logger_1 = __webpack_require__(/*! ../Utils/logger */ \"./src/Utils/logger.ts\");\r\nconst AuthRouter_1 = __importDefault(__webpack_require__(/*! ./AuthRouter */ \"./src/Routes/AuthRouter.ts\"));\r\nconst MeRouter_1 = __importDefault(__webpack_require__(/*! ./MeRouter */ \"./src/Routes/MeRouter.ts\"));\r\n// Server instance\r\nlet server = (0, express_1.default)();\r\n// Router instance\r\nconst rootRouter = express_1.default.Router();\r\n// GET: http://localhost:8000/api/\r\nrootRouter.get('/', (req, res) => {\r\n    (0, logger_1.LogInfo)('GET: http://localhost:8000/api/v1');\r\n    // Send Hello World\r\n    res.send('Welcome to my API Restful: ');\r\n});\r\n// Redirections to Routers & Controllers\r\nserver.use('/', rootRouter); // http://localhost:8000/api/v1\r\nserver.use('/auth', AuthRouter_1.default); // http://localhost:8000/api/v1/auth\r\nserver.use('/me', MeRouter_1.default); // http://localhost:8000/api/v1/me\r\nexports[\"default\"] = server;\r\n\n\n//# sourceURL=webpack://task-project-backend/./src/Routes/index.ts?");

/***/ }),

/***/ "./src/Utils/logger.ts":
/*!*****************************!*\
  !*** ./src/Utils/logger.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.LogError = exports.LogWarning = exports.LogSuccess = exports.LogInfo = void 0;\r\nconst LogInfo = (message) => {\r\n    console.log(`Info: ${message}`);\r\n};\r\nexports.LogInfo = LogInfo;\r\nconst LogSuccess = (message) => {\r\n    console.log(`Success: ${message}`);\r\n};\r\nexports.LogSuccess = LogSuccess;\r\nconst LogWarning = (message) => {\r\n    console.log(`Warning: ${message}`);\r\n};\r\nexports.LogWarning = LogWarning;\r\nconst LogError = (message) => {\r\n    console.log(`Error: ${message}`);\r\n};\r\nexports.LogError = LogError;\r\n\n\n//# sourceURL=webpack://task-project-backend/./src/Utils/logger.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\n//Root Router\r\nconst index_1 = __importDefault(__webpack_require__(/*! ../Routes/index */ \"./src/Routes/index.ts\"));\r\n//Mongo DB\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\n//Swagger\r\nconst swagger_ui_express_1 = __importDefault(__webpack_require__(/*! swagger-ui-express */ \"swagger-ui-express\"));\r\nconst swaggerJSDoc = __importStar(__webpack_require__(/*! ../../swagger.json */ \"./swagger.json\"));\r\n// * Create Express APP\r\nconst server = (0, express_1.default)();\r\n//CORS Enabled\r\nserver.use((req, res, next) => {\r\n    res.header(\"Access-Control-Allow-Origin\", \"*\");\r\n    res.header(\"Access-Control-Allow-Methods\", \"GET,POST,PUT,DELETE,OPTIONS\");\r\n    res.header(\"Access-Control-Allow-Headers\", \"Origin,X-Requested-With,Content-Type,Accept, Authorization,x-access-token\");\r\n    next();\r\n});\r\n// * Define SERVER to use \"/api/v1\" and use rootRouter from 'index.ts' in routes\r\n// From this point onover: http://localhost:8000/api/v1...\r\nserver.use('/api/v1', index_1.default);\r\n// Static server\r\nserver.use(express_1.default.static('public'));\r\n// * Swagger config\r\nserver.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerJSDoc));\r\n// Mongoose Connection\r\ndotenv_1.default.config();\r\nmongoose_1.default.set('strictQuery', true);\r\nconst url = process.env.MONGODB_URL;\r\nif (url) {\r\n    mongoose_1.default.connect(url)\r\n        .then(() => console.log('MongoDB connected'))\r\n        .catch((err) => { console.log(err); });\r\n}\r\n// * Content Type Config\r\nserver.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));\r\nserver.use(express_1.default.json({ limit: '50mb' }));\r\n// * Redirection Config\r\n// http://localhost:8000/ --> http://localhost:8000/api/v1\r\nserver.get('/', (req, res) => {\r\n    res.redirect('/api/v1');\r\n});\r\n// * Redirection Config\r\n// http://localhost:8000/api --> http://localhost:8000/api/v1\r\nserver.get('/api', (req, res) => {\r\n    res.redirect('/api/v1');\r\n});\r\n// * Security Config\r\nexports[\"default\"] = server;\r\n\n\n//# sourceURL=webpack://task-project-backend/./src/server/index.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("swagger-ui-express");

/***/ }),

/***/ "tsoa":
/*!***********************!*\
  !*** external "tsoa" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("tsoa");

/***/ }),

/***/ "./swagger.json":
/*!**********************!*\
  !*** ./swagger.json ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"components\":{\"examples\":{},\"headers\":{},\"parameters\":{},\"requestBodies\":{},\"responses\":{},\"schemas\":{\"User\":{\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"password\":{\"type\":\"string\"},\"tasks\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"name\",\"email\",\"password\",\"tasks\"],\"type\":\"object\",\"additionalProperties\":false},\"AuthResponse\":{\"properties\":{\"id\":{\"type\":\"string\"},\"user\":{\"$ref\":\"#/components/schemas/User\"},\"token\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"},\"status\":{\"type\":\"number\",\"format\":\"double\"}},\"required\":[\"message\",\"status\"],\"type\":\"object\",\"description\":\"Auth JSON response for Controllers\"},\"Auth\":{\"properties\":{\"email\":{\"type\":\"string\"},\"password\":{\"type\":\"string\"}},\"required\":[\"email\",\"password\"],\"type\":\"object\",\"additionalProperties\":false},\"Task\":{\"properties\":{\"description\":{\"type\":\"string\"},\"completed\":{\"type\":\"boolean\"}},\"required\":[\"description\",\"completed\"],\"type\":\"object\",\"additionalProperties\":false},\"UserResponse\":{\"properties\":{\"tasks\":{\"items\":{\"$ref\":\"#/components/schemas/Task\"},\"type\":\"array\"},\"message\":{\"type\":\"string\"},\"status\":{\"type\":\"number\",\"format\":\"double\"}},\"required\":[\"message\",\"status\"],\"type\":\"object\",\"description\":\"User JSON response for Controllers\"}},\"securitySchemes\":{}},\"info\":{\"title\":\"task-project-backend\",\"version\":\"1.0.0\",\"description\":\"Backend for Task Project\",\"license\":{\"name\":\"ISC\"},\"contact\":{\"name\":\"Enrique\"}},\"openapi\":\"3.0.0\",\"paths\":{\"/api/v1/auth/register\":{\"post\":{\"operationId\":\"RegisterUser\",\"responses\":{\"200\":{\"description\":\"User registered succeful\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/AuthResponse\"}}}},\"404\":{\"description\":\"The email is already in use\"}},\"description\":\"Endpoint to Register new user\",\"tags\":[\"AuthController\"],\"security\":[],\"parameters\":[],\"requestBody\":{\"description\":\"Data of user\",\"required\":true,\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/User\",\"description\":\"Data of user\"}}}}}},\"/api/v1/auth/login\":{\"post\":{\"operationId\":\"LoginUser\",\"responses\":{\"200\":{\"description\":\"Promise of AuthResponse with a JWT\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/AuthResponse\"}}}}},\"description\":\"Endpoint to log in user\",\"tags\":[\"AuthController\"],\"security\":[],\"parameters\":[],\"requestBody\":{\"description\":\"User credentials\",\"required\":true,\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/Auth\",\"description\":\"User credentials\"}}}}}},\"/api/v1/me\":{\"get\":{\"operationId\":\"UserData\",\"responses\":{\"200\":{\"description\":\"Returns Promise of User data\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/AuthResponse\"}}}}},\"description\":\"Endpoint to get User data after log in\",\"tags\":[\"UserController\"],\"security\":[],\"parameters\":[{\"description\":\"ID of User by Query param /me?id=ID\",\"in\":\"query\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}]}},\"/api/v1/me/tasks\":{\"post\":{\"operationId\":\"SaveTasks\",\"responses\":{\"200\":{\"description\":\"Promise of tasks saved\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/UserResponse\"}}}}},\"description\":\"Endpoint to save the user\\'s tasks\",\"tags\":[\"UserController\"],\"security\":[],\"parameters\":[{\"description\":\"ID of User by Query param /me/tasks?id=ID\",\"in\":\"query\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"requestBody\":{\"description\":\"User tasks\",\"required\":true,\"content\":{\"application/json\":{\"schema\":{\"items\":{\"$ref\":\"#/components/schemas/Task\"},\"type\":\"array\",\"description\":\"User tasks\"}}}}}}},\"servers\":[{\"url\":\"/\"}]}');\n\n//# sourceURL=webpack://task-project-backend/./swagger.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
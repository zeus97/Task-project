(()=>{"use strict";var e={492:function(e,t,s){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(s(557)),o=r(s(142)),i=s(126);o.default.config();const a=process.env.PORT||8e3;n.default.listen(a,(()=>{(0,i.LogSuccess)(`[SERVER ON]: Running in http://localhost:${a}/api/v1`)})),n.default.on("error",(e=>{(0,i.LogError)(`[SERVER ERROR]: ${e}`)}))},633:function(e,t,s){var r=this&&this.__decorate||function(e,t,s,r){var n,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o<3?n(i):o>3?n(t,s,i):n(t,s))||i);return o>3&&i&&Object.defineProperty(t,s,i),i},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=this&&this.__param||function(e,t){return function(s,r){t(s,r,e)}},i=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(n,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.AuthController=void 0;const a=s(953),u=s(126),c=s(802);let l=class{registerUser(e){return i(this,void 0,void 0,(function*(){let t;return e?((0,u.LogSuccess)(`[/api/v1/auth/register] Register New User: ${e.email} `),t=yield(0,a.registerUser)(e)):((0,u.LogWarning)("[/api/auth/register] Register needs User Entity"),t={status:404,message:"User not Registered: Please, provide a User Entity to create one"}),t}))}loginUser(e){return i(this,void 0,void 0,(function*(){let t;return e?((0,u.LogSuccess)(`[/api/auth/login] Login User: ${e.email} `),t=yield(0,a.loginUser)(e)):((0,u.LogWarning)("[/api/auth/login] Login needs Auth Entity (email && password"),t={status:404,message:"[AUTH ERROR]: Email & Password are needed"}),t}))}};r([(0,c.SuccessResponse)("200","User registered succeful"),(0,c.Response)("404","The email is already in use"),(0,c.Post)("/register"),o(0,(0,c.Body)()),n("design:type",Function),n("design:paramtypes",[Object]),n("design:returntype",Promise)],l.prototype,"registerUser",null),r([(0,c.Post)("/login"),o(0,(0,c.Body)()),n("design:type",Function),n("design:paramtypes",[Object]),n("design:returntype",Promise)],l.prototype,"loginUser",null),l=r([(0,c.Route)("/api/v1/auth"),(0,c.Tags)("AuthController")],l),t.AuthController=l},806:function(e,t,s){var r=this&&this.__decorate||function(e,t,s,r){var n,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o<3?n(i):o>3?n(t,s,i):n(t,s))||i);return o>3&&i&&Object.defineProperty(t,s,i),i},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=this&&this.__param||function(e,t){return function(s,r){t(s,r,e)}},i=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(n,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.UserController=void 0;const a=s(126),u=s(717),c=s(802);let l=class{userData(e){return i(this,void 0,void 0,(function*(){let t,s;return e?((0,a.LogSuccess)(`[/api/v1/me] Get User Data By ID: ${e} `),yield(0,u.getUserByID)(e).then((e=>{s=e,null!=s&&(t={status:200,user:s})})).catch((e=>{console.log(e)})),t):((0,a.LogWarning)("[/api/v1/me?id=xxx] ID missing "),t={status:404,message:"Please provide an ID"})}))}saveTasks(e,t){return i(this,void 0,void 0,(function*(){let s;return e&&t?((0,a.LogSuccess)("[/api/auth/me/tasks] Saving tasks "),s=yield(0,u.saveTasks)(e,t),null!=s&&(s={status:200,message:"Tasks saved succefully",tasks:s})):((0,a.LogWarning)("[/api/auth/me/tasks] Data missing"),s={status:404,message:"Data missing"}),s}))}};r([(0,c.Get)("/"),o(0,(0,c.Query)()),n("design:type",Function),n("design:paramtypes",[String]),n("design:returntype",Promise)],l.prototype,"userData",null),r([(0,c.Post)("/tasks"),o(0,(0,c.Query)()),o(1,(0,c.Body)()),n("design:type",Function),n("design:paramtypes",[String,Array]),n("design:returntype",Promise)],l.prototype,"saveTasks",null),l=r([(0,c.Route)("/api/v1/me"),(0,c.Tags)("UserController")],l),t.UserController=l},655:function(e,t,s){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.userEntity=void 0;const n=r(s(185));t.userEntity=()=>{let e=new n.default.Schema({name:{type:String,required:!0},email:{type:String,required:!0},password:{type:String,required:!0},tasks:{type:[],required:!0}});return n.default.models.Users||n.default.model("Users",e)}},953:function(e,t,s){var r=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(n,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.loginUser=t.registerUser=void 0;const o=s(126),i=s(655),a=n(s(142)),u=n(s(96)),c=n(s(344));a.default.config();const l=process.env.SECRETKEY||"MYSECRETKEY";t.registerUser=e=>r(void 0,void 0,void 0,(function*(){try{let t,s,r=(0,i.userEntity)();return t=yield r.findOne({email:e.email}),null===t?(yield r.create(e),s={status:200,message:`User registered successfully: ${e.email}`}):s={status:404,message:"An user is already created with this email"}}catch(e){(0,o.LogError)(`[ORM ERROR]: creating user: ${e}`)}})),t.loginUser=e=>r(void 0,void 0,void 0,(function*(){try{let t,s,r,n=(0,i.userEntity)();if(t=yield n.findOne({email:e.email}),null===t)return console.error("[ERROR Authentication in ORM]: Email not valid"),r={status:404,message:"Invalid email"};if(!u.default.compareSync(e.password,t.password))return console.error("[ERROR Authentication in ORM]: Password Not Valid"),r={status:404,message:"Invalid password"};if(s=c.default.sign({email:t.email},l,{expiresIn:"2h"}),t&&s)return r={status:200,message:`Welcome ${t.name}`,id:t.id,token:s}}catch(e){(0,o.LogError)(`[ORM ERROR]: Login User: ${e}`)}}))},717:function(e,t,s){var r=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(n,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.saveTasks=t.getUserByID=void 0;const n=s(126),o=s(655);t.getUserByID=e=>r(void 0,void 0,void 0,(function*(){try{let t=(0,o.userEntity)();return yield t.findById(e).select("name email tasks")}catch(e){(0,n.LogError)(`[ORM ERROR]: Getting User By ID: ${e}`)}})),t.saveTasks=(e,t)=>r(void 0,void 0,void 0,(function*(){try{let s,r=(0,o.userEntity)();return yield r.updateOne({_id:e},{tasks:t}).then((t=>{s=r.findById(e).select("tasks -_id")})).catch((e=>{throw new Error("Something went wrong")})),s}catch(e){(0,n.LogError)(`[ORM ERROR]: Saving tasks: ${e}`)}}))},189:function(e,t,s){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.verifyToken=void 0;const n=r(s(344));r(s(142)).default.config();const o=process.env.SECRETKEY||"MYSECRETKEY";t.verifyToken=(e,t,s)=>{let r=e.headers["x-access-token"];if(!r)return t.status(403).send({authenticationError:"Missing JWT in request",message:"Not authorised to consume this endpoint"});n.default.verify(r,o,((e,r)=>{if(e)return t.status(500).send({authenticationError:"JWT verification failed",message:"Failed to verify JWT token in request"});s()}))}},441:function(e,t,s){var r=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(n,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(s(860)),i=s(633),a=n(s(96));let u=n(s(986)).default.json(),c=o.default.Router();c.route("/register").post(u,((e,t)=>r(void 0,void 0,void 0,(function*(){let{name:s,email:r,password:n}=null==e?void 0:e.body,o="";if(s&&n&&r){o=a.default.hashSync(n,8);let e={name:s,email:r,password:o,tasks:[]};const u=new i.AuthController,c=yield u.registerUser(e);return void 0===c?t.status(400).send({message:"An error ocurred"}):(c.status,t.status(200).send(c))}return t.status(400).send({message:"[ERROR User Data missing]: No user can be registered"})})))),c.route("/login").post(u,((e,t)=>r(void 0,void 0,void 0,(function*(){let{email:s,password:r}=null==e?void 0:e.body;if(s&&r){const e=new i.AuthController;let n={email:s,password:r},o=yield e.loginUser(n);return void 0===o?t.status(400).send({message:"Something went wrong"}):(o.status,t.status(200).send(o))}return t.status(400).send({message:"[ERROR User Data missing]: No user can be registered"})})))),t.default=c},396:function(e,t,s){var r=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(n,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(s(860)),i=s(806),a=s(189),u=n(s(986)).default.json();let c=o.default.Router();c.route("/").get(a.verifyToken,((e,t)=>r(void 0,void 0,void 0,(function*(){var s;let r=null===(s=null==e?void 0:e.query)||void 0===s?void 0:s.id;if(r){const e=new i.UserController;let s=yield e.userData(r);return null!=s&&200===s.status?t.status(200).send(s):t.status(404).send({message:"An error ocurred"})}return t.status(401).send({message:"You are not authorised to perform this action"})})))),c.route("/tasks").post(a.verifyToken,u,((e,t)=>r(void 0,void 0,void 0,(function*(){var s;let r=null==e?void 0:e.body.tasks,n=null===(s=null==e?void 0:e.query)||void 0===s?void 0:s.id;if(n&&r){const e=new i.UserController;let s=yield e.saveTasks(n,r);return void 0===s?t.status(404).send({message:"Error"}):404===s.status?t.status(404).send(s):t.status(200).send(s)}t.status(401).send({message:"You are not authorised to perform this action"})})))),t.default=c},222:function(e,t,s){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(s(860)),o=s(126),i=r(s(441)),a=r(s(396));let u=(0,n.default)();const c=n.default.Router();c.get("/",((e,t)=>{(0,o.LogInfo)("GET: http://localhost:8000/api/v1"),t.send("Welcome to my API Restful: ")})),u.use("/",c),u.use("/auth",i.default),u.use("/me",a.default),t.default=u},126:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LogError=t.LogWarning=t.LogSuccess=t.LogInfo=void 0,t.LogInfo=e=>{console.log(`Info: ${e}`)},t.LogSuccess=e=>{console.log(`Success: ${e}`)},t.LogWarning=e=>{console.log(`Warning: ${e}`)},t.LogError=e=>{console.log(`Error: ${e}`)}},557:function(e,t,s){var r=this&&this.__createBinding||(Object.create?function(e,t,s,r){void 0===r&&(r=s);var n=Object.getOwnPropertyDescriptor(t,s);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(e,r,n)}:function(e,t,s,r){void 0===r&&(r=s),e[r]=t[s]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)"default"!==s&&Object.prototype.hasOwnProperty.call(e,s)&&r(t,e,s);return n(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=i(s(860)),u=i(s(222)),c=i(s(185)),l=i(s(142)),d=i(s(948)),p=o(s(26)),f=(0,a.default)();f.use(((e,t,s)=>{t.header("Access-Control-Allow-Origin","*"),t.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS"),t.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept, Authorization,x-access-token"),s()})),f.use("/api/v1",u.default),f.use(a.default.static("public")),f.use("/docs",d.default.serve,d.default.setup(p)),l.default.config(),c.default.set("strictQuery",!0);const g=process.env.MONGODB_URL;g&&c.default.connect(g).then((()=>console.log("MongoDB connected"))).catch((e=>{console.log(e)})),f.use(a.default.urlencoded({extended:!0,limit:"50mb"})),f.use(a.default.json({limit:"50mb"})),f.get("/",((e,t)=>{t.redirect("/api/v1")})),f.get("/api",((e,t)=>{t.redirect("/api/v1")})),t.default=f},96:e=>{e.exports=require("bcrypt")},986:e=>{e.exports=require("body-parser")},142:e=>{e.exports=require("dotenv")},860:e=>{e.exports=require("express")},344:e=>{e.exports=require("jsonwebtoken")},185:e=>{e.exports=require("mongoose")},948:e=>{e.exports=require("swagger-ui-express")},802:e=>{e.exports=require("tsoa")},26:e=>{e.exports=JSON.parse('{"components":{"examples":{},"headers":{},"parameters":{},"requestBodies":{},"responses":{},"schemas":{"User":{"properties":{"id":{"type":"string"},"name":{"type":"string"},"email":{"type":"string"},"password":{"type":"string"},"tasks":{"items":{"type":"string"},"type":"array"}},"required":["name","email","password","tasks"],"type":"object","additionalProperties":false},"AuthResponse":{"properties":{"id":{"type":"string"},"user":{"$ref":"#/components/schemas/User"},"token":{"type":"string"},"message":{"type":"string"},"status":{"type":"number","format":"double"}},"required":["message","status"],"type":"object","description":"Auth JSON response for Controllers"},"Auth":{"properties":{"email":{"type":"string"},"password":{"type":"string"}},"required":["email","password"],"type":"object","additionalProperties":false},"Task":{"properties":{"description":{"type":"string"},"completed":{"type":"boolean"}},"required":["description","completed"],"type":"object","additionalProperties":false},"UserResponse":{"properties":{"tasks":{"items":{"$ref":"#/components/schemas/Task"},"type":"array"},"message":{"type":"string"},"status":{"type":"number","format":"double"}},"required":["message","status"],"type":"object","description":"User JSON response for Controllers"}},"securitySchemes":{}},"info":{"title":"task-project-backend","version":"1.0.0","description":"Backend for Task Project","license":{"name":"ISC"},"contact":{"name":"Enrique"}},"openapi":"3.0.0","paths":{"/api/v1/auth/register":{"post":{"operationId":"RegisterUser","responses":{"200":{"description":"User registered succeful","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthResponse"}}}},"404":{"description":"The email is already in use"}},"description":"Endpoint to Register new user","tags":["AuthController"],"security":[],"parameters":[],"requestBody":{"description":"Data of user","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/User","description":"Data of user"}}}}}},"/api/v1/auth/login":{"post":{"operationId":"LoginUser","responses":{"200":{"description":"Promise of AuthResponse with a JWT","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthResponse"}}}}},"description":"Endpoint to log in user","tags":["AuthController"],"security":[],"parameters":[],"requestBody":{"description":"User credentials","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Auth","description":"User credentials"}}}}}},"/api/v1/me":{"get":{"operationId":"UserData","responses":{"200":{"description":"Returns Promise of User data","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthResponse"}}}}},"description":"Endpoint to get User data after log in","tags":["UserController"],"security":[],"parameters":[{"description":"ID of User by Query param /me?id=ID","in":"query","name":"id","required":true,"schema":{"type":"string"}}]}},"/api/v1/me/tasks":{"post":{"operationId":"SaveTasks","responses":{"200":{"description":"Promise of tasks saved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UserResponse"}}}}},"description":"Endpoint to save the user\'s tasks","tags":["UserController"],"security":[],"parameters":[{"description":"ID of User by Query param /me/tasks?id=ID","in":"query","name":"id","required":true,"schema":{"type":"string"}}],"requestBody":{"description":"User tasks","required":true,"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/Task"},"type":"array","description":"User tasks"}}}}}}},"servers":[{"url":"/"}]}')}},t={};!function s(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,s),o.exports}(492)})();
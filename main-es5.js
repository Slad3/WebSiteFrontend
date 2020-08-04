function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <div class=\"text-block\">\r\n    <h1 class=\"name\">benbarcaskey.com</h1>\r\n    <p id=\"subText-block\">\"License to love, insurance to hold\"</p>\r\n  </div>\r\n</header>\r\n\r\n<div>\r\n  <ul id=\"navbar\">\r\n    <div #spacer></div>\r\n    <nav>\r\n      <!--    stickyThing [boundary]=\"boundary\" [spacer]=\"spacer\" marginTop=\"0\">-->\r\n      <li><a class=\"left\" routerLink=\"/\">Home</a></li>\r\n      <li><a class=\"left\" routerLink=\"blog\">Blog</a></li>\r\n      <li><a class=\"left\" routerLink=\"projects\">Projects</a></li>\r\n      <li><a class=\"left\" routerLink=\"datascience\">Data Science</a></li>\r\n      <li><a class=\"left\" routerLink=\"reference\">Reference</a></li>\r\n      <li>\r\n        <a id=\"icon\" href=\"https://github.com/Slad3\"\r\n          ><img class=\"iconImage\" src=\"/assets/images/github.png\"\r\n        /></a>\r\n      </li>\r\n      <li>\r\n        <a id=\"icon\" href=\"https://www.linkedin.com/in/ben-barcaskey/\"\r\n          ><img class=\"iconImage\" src=\"/assets/images/linkedin.png\"\r\n        /></a>\r\n      </li>\r\n    </nav>\r\n  </ul>\r\n</div>\r\n\r\n<div class=\"jsx-617733361 socialHomeGroup\">\r\n  <div class=\"jsx-617733361 socialHomeItem\">\r\n    <a href=\"https://github.com/Slad3\" target=\"_blank\">\r\n      <img src=\"../assets/images/github.png\" class=\"jsx-617733361\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"jsx-617733361 socialHomeItem\">\r\n    <a href=\"https://www.linkedin.com/benbarcaskey\" target=\"_blank\">\r\n      <img src=\"../assets/images/linkedin.png\" class=\"jsx-617733361\" />\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div id=\"body\">\r\n  <h1 id=\"quote\">{{ quote }}</h1>\r\n  <router-outlet id=\"router\"></router-outlet>\r\n</div>\r\n\r\n<!-- <footer id=\"bottombar\">\r\n  <h1>asdfasdf</h1>\r\n</footer> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/datascience/datascience.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datascience/datascience.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDatascienceDatascienceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <h1>\r\n    Datascience page not built yet\r\n  </h1>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeedFeedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1> Page where I blog, update on projects, or just spill my mind on whatever I care about. And if you don't care, remember YOU CLICKED ON MY FACE! </h1>\r\n<div class=\"wholeBlog\">\r\n <h1 id=\"BigTitle\"> Bob Lawblaws Law Blog</h1>\r\n\r\n <ul style=\"\" id=\"postList\">\r\n   <a *ngFor=\"let post of posts\">\r\n     <li>\r\n       <app-post [post]=\"post\"></app-post>\r\n     </li>\r\n   </a>\r\n </ul>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"home\">\r\n\r\n\r\n  <div  id=\"intro\">\r\n\t<ul>\r\n\t  <li class=\"block\" id = \"introText\">\r\n\t\t<h1 id=\"introTitle\" class=\"title\">About the Human Named Ben Barcaskey</h1>\r\n\t\t  <!-- <p class=\"introPara\">\r\n\t\t\tUnderstand the rules, the limitations, edges of the box, then break them.\r\n\t\t\tWe are living inside of pandora’s box, we just don’t know how to let it breathe.\r\n\t\t\tTo claim ignorance on what we rely on in life is arrogant in it’s own right.\r\n\t\t\tWhile no one may have all the answers today, I believe that everyone should able to know how to change breaks on a car, cook a balanced 3 course meal for guests, and program a simple script.\r\n\t\t\tNot everyone can look like Jennifer Aniston or Ryan Reynolds even on a good day, but I believe anyone can look presentable and professional.\r\n\t\t\tAnyone can learn how to edit semi-professional videos, fix a toilet, learn a second language, download more RAM, and install drywall, it just takes effort and patience.\r\n\t\t  </p>\r\n\r\n\t\t  <p class=\"introPara\">I, Ben Barcaskey, don’t have to reach to achieve uniqueness; it comes naturally.\r\n\t\t  It takes effort for me to think inside the box. While I do ok in school, that is certainly not the limit, or even the beginning of my education.\r\n\t\t  From being seven years old carrying around books about math and Saturn, to being 16 years old giving speeches on how to understand the different parts of a computer, to being 20 years old spending more time on towardsdatascience.com more than on Facebook, Twitter, and Instagram combined.\r\n\t\t  “I have never let my schooling interfere with my education” – Mark Twain.\r\n\t\t  </p> -->\r\n\r\n\t\t  <p class=\"introPara\">\r\n\t\t\tI’m also a Junior attending UW-Stout majoring in Computer Science minoring in Math, concentrating in statistics.\r\n\t\t\tI plan to graduate in May of 2022, however no matter how much you plan, you can only weather the chaos the future, not control it.\r\n\t\t\tAKA if I'm offered a full time job before graduation, I'll take it into consideration.\r\n\t\t  </p>\r\n\r\n\t  </li>\r\n\t  <li class=\"rightSideIntro\">\r\n\t\t<img id=\"profilePhoto\" src=\"assets/images/profileCropped.jpg\" alt=\"What did I ever do to make you treat me so disrespectfully\">\r\n\t  </li>\r\n\r\n\t  <!-- <li class = \"rightSideIntro\">\r\n\t\t<a id=\"typeracer\" href=\"https://data.typeracer.com/pit/profile?user=feba23&ref=badge\" target=\"_top\">\r\n\t\t  <img src=\"https://data.typeracer.com/misc/badge?user=feba23\" alt=\"TypeRacer.com scorecard for user feba23\"/>\r\n\t\t</a>\r\n\t  </li> -->\r\n\t</ul>\r\n  </div>\r\n\r\n <!-- Will add later once Projects and posts are made-->\r\n<!-- <div>-->\r\n<!--  </div>-->\r\n\r\n<!--  <div>-->\r\n<!--    <h1>Latest Post Update</h1>-->\r\n<!--  </div> -->\r\n\r\n  <div  id=\"techBasedInterests\" class=\"block\">\r\n\t<h1 class=\"title\"> Technology Based Interests </h1>\r\n\t<ul>\r\n\r\n\t  <li class=\"\">\r\n\t\t<h4>Data Science / Analysis</h4>\r\n\t\t<p>\r\n\t\t  Numbers by themselves are boring.\r\n\t\t  However, numbers that mean something can impact the way that we think and act upon certain situations.\r\n\t\t</p>\r\n\t  </li>\r\n\t  <li class=\"\">\r\n\t\t<h4>Backend / API Development</h4>\r\n\t\t<p>\r\n\t\t  Numbers by themselves are boring.\r\n\t\t   However numbers that mean something can impact the way that we think and act upon certain situations\r\n\t\t</p>\r\n\t  </li>\r\n\t  <li class=\"\">\r\n\t\t<h4>Computer Hardware / Small Scale Electronics</h4>\r\n\t\t<p>If one is to study the great mystery of computers, one must study all it's aspects. Although </p>\r\n\t  </li>\r\n\t  <li class=\"\">\r\n\t\t<h4>System Design / Simulation</h4>\r\n\t\t<p>Numbers by themselves are boring. However numbers that mean something can impact the way that we think and act upon certain situations</p>\r\n\t  </li>\r\n\t</ul>\r\n  </div>\r\n\r\n<!--  <div id=\"experience\" class=\"block\">-->\r\n<!--    <h1 class=\"title\"> Experience </h3>-->\r\n<!--    <ol class=\"list\">-->\r\n<!--      <li>-->\r\n<!--        <h4>Data/Photo Analysist at White House Custom Color</h4>-->\r\n<!--        <p> I took on a month long internship over winter break building building tools, concepts, and resources for automated analysis on professional photos for White House Custom Color. This includes face and label recognition through AWS Rekognition from images stored in S3 Buckets, creating algorithms for automated cropping, color analysis involving color clusters and product color matching, and focus recognition and mapping the focus of an image. At the end of my internship I presented my work to the management of WHCC.-->\r\n\r\n<!--          Utilized Python with libraries such as OpenCV, SciPy (NumPy, Pandas, and Matplotlib), Scikit-learn, Keras, and Boto (for AWS connectivity). </p>-->\r\n<!--      </li>-->\r\n<!--      <li>-->\r\n<!--        <h4>Research Assistant for Dr Saleh Alnaeli</h4>-->\r\n<!--        <p> </p>-->\r\n<!--      </li>-->\r\n<!--      <li>-->\r\n<!--        <h4>Mobile Application Development</h4>-->\r\n<!--        <p></p>-->\r\n<!--      </li>-->\r\n<!--    </ol>-->\r\n<!--  </div>-->\r\n\r\n  <div id=\"skills\" class=\"block\">\r\n\t<h1 class=\"title\">Skills</h1>\r\n\t<div class=\"\" id=\"languages\">\r\n\t\t<h3> Top Skills </h3>\r\n\t\t<ol class=\"list\">\r\n\t\t  <li class=\"language\">\r\n\t\t\t<h4>Python</h4>\r\n\t\t\t<ul>\r\n\t\t\t  <li>Pandas</li>\r\n\t\t\t  <li>NumPy</li>\r\n\t\t\t  <li>OpenCV</li>\r\n\t\t\t  <li>MatPlotLib</li>\r\n\t\t\t  <li>Flask Microframework</li>\r\n\t\t\t  <li>Scikit-Learn</li>\r\n\t\t\t</ul>\r\n\t\t  </li>\r\n\t\t  <li class=\"language\">\r\n\t\t\t<h4>Java</h4>\r\n\t\t\t<ul>\r\n\t\t\t  <li>DOM/Stax/Sax XML Parsing</li>\r\n\t\t\t  <li>JSon Parsing</li>\r\n\t\t\t  <li>Jooby Microframework</li>\r\n\t\t\t  <li>Android Development</li>\r\n\t\t\t  <li>Maven & Gradle</li>\r\n\t\t\t</ul>\r\n\t\t  </li>\r\n\t\t  <li class=\"language\">\r\n\t\t\t<h4>Linux</h4>\r\n\t\t\t<ul>\r\n\t\t\t  <li>Debian and Arch</li>\r\n\t\t\t  <li>Apache & Nginx http Server</li>\r\n\t\t\t  <li>Bash Scripting</li>\r\n\t\t\t  <li>Background Service Management</li>\r\n\t\t\t  <li>Raspbian & RaspberryPi Development</li>\r\n\t\t\t</ul>\r\n\t\t  </li>\r\n\t\t</ol>\r\n\t</div>\r\n\r\n\r\n\t<button class=\"accordion\">Other Skills</button>\r\n\t<div class=\"panel\">\r\n\t\t<h3 id=\"otherCSSkillsTitle\">Technical Skills </h3>\r\n\t\t<ul class=\"list\" id=\"otherCSSkills\">\r\n\t\t<li>HTML/CSS/Javascript</li>\r\n\t\t<li>Audio Production/Manipulation</li>\r\n\t\t<li>C/C++</li>\r\n\t\t<li>Git</li>\r\n\t\t<li>SQL</li>\r\n\t\t<li>Amazon AWS (EC2, S3 Bucket, Rekognition) </li>\r\n\t\t<li>Swift</li>\r\n\t\t<li>Angular</li>\r\n\t\t<li>TypeScript</li>\r\n\t\t<li>Word</li>\r\n\t\t<li>Excel</li>\r\n\t\t<li>Powerpoint</li>\r\n\t\t</ul>\r\n\r\n\t\t<br/>\r\n\t\t<br/>\r\n\r\n\t\t<div id=\"softSkills\">\r\n\t\t<h3> Soft Skills </h3>\r\n\t\t\t<ul class=\"list\">\r\n\t\t\t<li>Public Speaking</li>\r\n\t\t\t<li>Problem Solving</li>\r\n\t\t\t<li>Team Management</li>\r\n\t\t\t</ul>\r\n\r\n\t\t<h3> Accomplishments </h3>\r\n\t\t\t<ul class=\"list\">\r\n\t\t\t<li>Troop 449 Eagle Scout since 2018</li>\r\n\t\t\t<li>4th in at CCMW 2018 Programming Competition</li>\r\n\t\t\t</ul>\r\n\r\n\t\t<h3> Other Skills </h3>\r\n\t\t\t<ul class=\"list\">\r\n\t\t\t<li>Eagle Scout</li>\r\n\t\t\t<li>4th in Programming Competition</li>\r\n\t\t\t</ul>\r\n\r\n\t</div>\r\n  </div>\r\n\r\n  </div>\r\n\r\n  <div id=\"FAQ\" class=\"block\">\r\n\t  <h1 class=\"title\">FAQ</h1>\r\n\t  <ul id=\"FAQList\">\r\n\t\t<li>\r\n\t\t  <h4 class=\"question\">How tall are you?</h4>\r\n\t\t  <p class=\"answer\"> Technically 6'4.5\", but 6 4 just rolls off the tongue better.\r\n\t\t\tAlso, don't lie about your height; Anyone can literally take a tape measure and get an exact objective numerical value of how tall you are.</p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t  <h4 class=\"question\">What Software do you use?</h4>\r\n\t\t  <p class=\"answer\">I prefer to do development in linux, preferably Pop-OS with a kde desktop.\r\n\t\t\tThough I do most of my computer tasks on Windows.\r\n\t\t\tFor programming, I typically like to gravitate towards a jetbrain's ide when I can, however I'm growing used to VSCode.</p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t  <h4 class=\"question\">Desktop Specs</h4>\r\n\t\t\t<ul>\r\n\t\t\t  <li class=\"spec\">CPU: Ryzen R5 2600 3.9GHz</li>\r\n\t\t\t  <li class=\"spec\">RAM: 32GB (4 x 8GB) G.Skill DDR4-3200 (Almost died getting that last 16GB)</li>\r\n\t\t\t  <li class=\"spec\">Motherboard: Asus TUF X470-PLUS AM4 (Used motherboards don't have IO shields though)</li>\r\n\t\t\t  <li class=\"spec\">GPU: R9 380 4GB Asus Strix (It's like the legs of Mr Incredible holding up Mr Incredible)</li>\r\n\t\t\t  <li class=\"spec\">Storage: 2 SSDs, one per OS. Plus a 1TB 7200rpm and a 3TB 5400rpm of spinning rust blocks</li>\r\n\t\t\t  <li class=\"spec\">Case: Corsair Spec-01</li>\r\n\t\t\t  <li class=\"spec\">PSU: Corsair CXM 650W 80+ Bronze</li>\r\n\t\t\t  <li class=\"spec\">Monitor: Acer XV272U 27\" 2560x1440 144hz IPS Freesync (My Baby)</li>\r\n\t\t\t  <li class=\"spec\">Mouse: Kingston HyperX Pulsefire Surge (I broke my </li>\r\n\t\t\t  <li class=\"spec\">Keyboard: Some old dusty Dell PS2 keyboard I found in the basement 4 years ago</li>\r\n\t\t\t</ul>\r\n\t\t</li>\r\n\r\n\t  </ul>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div id = \"post\" class=\"block\">\r\n  <ul style=\"list-style-type:none\" id=\"list\">\r\n    <li id=\"title\">\r\n      {{post.title}}\r\n\t</li>\r\n\t<li id=\"altTitle\">\r\n\t\t{{post.altTitle}}\r\n\t</li>\r\n\t<li id=\"date\">\r\n\t\t<div [innerHTML]=\"this.post.date.content\"></div>\r\n\t</li>\r\n\t\r\n    <a *ngFor=\"let cont of this.post.content\">\r\n      <li id=\"item\">\r\n        <div [innerHTML]=\"cont.content\"></div>\r\n\t  </li>\r\n\t  \r\n\t</a>\r\n\r\n\t<a *ngFor=\"let tag of this.post.tags\">\r\n\t\t<li id=\"tag\">\r\n\t\t  <div [innerHTML]=\"tag\"></div>\r\n\t\t</li>\r\n\t\t\r\n\t  </a>\r\n  </ul>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>This is where I will provide a list of done or in progress progress with description, a bunch of useful images, and most likely a github link.  <br/> Currently in development.</h1>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reference/reference.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reference/reference.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReferenceReferenceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>\r\n  The reference page in the future will contain useful links, pdfs, and images that are nice for a quick tutorial or look such as a Pandas cheatsheet, or a framework hello world project. <br/> Currently in development.\r\n</h1>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/singlepost/singlepost.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/singlepost/singlepost.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSinglepostSinglepostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-post [post]=\"this.post\"></app-post>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/Content/Content.ts":
  /*!************************************!*\
    !*** ./src/app/Content/Content.ts ***!
    \************************************/

  /*! exports provided: Content */

  /***/
  function srcAppContentContentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Content", function () {
      return Content;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Content =
    /*#__PURE__*/
    function () {
      function Content() {
        _classCallCheck(this, Content);

        this.content = '<p> No Content Loaded</p>';
      }

      _createClass(Content, [{
        key: "output",
        value: function output() {
          return this.content;
        }
      }]);

      return Content;
    }();
    /***/

  },

  /***/
  "./src/app/Content/DateStruct.ts":
  /*!***************************************!*\
    !*** ./src/app/Content/DateStruct.ts ***!
    \***************************************/

  /*! exports provided: DateStruct */

  /***/
  function srcAppContentDateStructTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateStruct", function () {
      return DateStruct;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Content */
    "./src/app/Content/Content.ts");

    var DateStruct =
    /*#__PURE__*/
    function (_Content__WEBPACK_IMP) {
      _inherits(DateStruct, _Content__WEBPACK_IMP);

      function DateStruct(message) {
        var _this;

        _classCallCheck(this, DateStruct);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(DateStruct).call(this));
        _this.months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        _this.date = new Date(message);
        console.log("Date ", _this.date.toString());
        console.log("Date ", _this.date.getDate());
        console.log("Date ", _this.date.getMonth());
        console.log("Date ", _this.date.getUTCMonth());
        _this.content = "<p> ".concat(_this.date.getDate(), "\n\t").concat(_this.intToMonth(_this.date.getMonth()), ", \n\t ").concat(_this.date.getFullYear(), "</p>");
        return _this;
      }

      _createClass(DateStruct, [{
        key: "intToMonth",
        value: function intToMonth(num) {
          return this.months[num];
        }
      }]);

      return DateStruct;
    }(_Content__WEBPACK_IMPORTED_MODULE_1__["Content"]);
    /***/

  },

  /***/
  "./src/app/Content/Image.ts":
  /*!**********************************!*\
    !*** ./src/app/Content/Image.ts ***!
    \**********************************/

  /*! exports provided: Image */

  /***/
  function srcAppContentImageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Image", function () {
      return Image;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Content */
    "./src/app/Content/Content.ts");

    var Image =
    /*#__PURE__*/
    function (_Content__WEBPACK_IMP2) {
      _inherits(Image, _Content__WEBPACK_IMP2);

      function Image(imageUrl) {
        var _this2;

        _classCallCheck(this, Image);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this));
        _this2.url = imageUrl;
        _this2.caption = "Wow I\'m Mr Manager!";
        _this2.content = '<img class="Image" width=150px src=' + _this2.url + '> <p class="caption">' + _this2.caption + '</p>';
        return _this2;
      }

      return Image;
    }(_Content__WEBPACK_IMPORTED_MODULE_1__["Content"]);
    /***/

  },

  /***/
  "./src/app/Content/Paragraph.ts":
  /*!**************************************!*\
    !*** ./src/app/Content/Paragraph.ts ***!
    \**************************************/

  /*! exports provided: Paragraph */

  /***/
  function srcAppContentParagraphTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Paragraph", function () {
      return Paragraph;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Content */
    "./src/app/Content/Content.ts");

    var Paragraph =
    /*#__PURE__*/
    function (_Content__WEBPACK_IMP3) {
      _inherits(Paragraph, _Content__WEBPACK_IMP3);

      function Paragraph(message) {
        var _this3;

        _classCallCheck(this, Paragraph);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Paragraph).call(this));
        _this3.content = '<p class= "paragraph">' + message + '</p>';
        return _this3;
      }

      return Paragraph;
    }(_Content__WEBPACK_IMPORTED_MODULE_1__["Content"]);
    /***/

  },

  /***/
  "./src/app/Content/SubTitle.ts":
  /*!*************************************!*\
    !*** ./src/app/Content/SubTitle.ts ***!
    \*************************************/

  /*! exports provided: SubTitle */

  /***/
  function srcAppContentSubTitleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubTitle", function () {
      return SubTitle;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Content */
    "./src/app/Content/Content.ts");

    var SubTitle =
    /*#__PURE__*/
    function (_Content__WEBPACK_IMP4) {
      _inherits(SubTitle, _Content__WEBPACK_IMP4);

      function SubTitle(message) {
        var _this4;

        _classCallCheck(this, SubTitle);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(SubTitle).call(this));
        _this4.content = '<h2 class="subTitle">' + message + '</h2>';
        return _this4;
      }

      return SubTitle;
    }(_Content__WEBPACK_IMPORTED_MODULE_1__["Content"]);
    /***/

  },

  /***/
  "./src/app/Post.ts":
  /*!*************************!*\
    !*** ./src/app/Post.ts ***!
    \*************************/

  /*! exports provided: Post */

  /***/
  function srcAppPostTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Post", function () {
      return Post;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Content_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Content/Paragraph */
    "./src/app/Content/Paragraph.ts");
    /* harmony import */


    var _Content_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Content/Image */
    "./src/app/Content/Image.ts");
    /* harmony import */


    var _Content_SubTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Content/SubTitle */
    "./src/app/Content/SubTitle.ts");
    /* harmony import */


    var _Content_DateStruct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Content/DateStruct */
    "./src/app/Content/DateStruct.ts");

    var Post = function Post(input) {
      var _this5 = this;

      _classCallCheck(this, Post);

      this.content = [];
      this.tags = [];
      this.title = input.title;
      this.altTitle = input.altTitle;
      this.date = new _Content_DateStruct__WEBPACK_IMPORTED_MODULE_4__["DateStruct"](input.date);
      input.tags.forEach(function (tag) {
        return _this5.tags.push(tag);
      });
      input.content.forEach(function (cont) {
        console.log(typeof cont);

        if (cont.paragraph) {
          _this5.content.push(new _Content_Paragraph__WEBPACK_IMPORTED_MODULE_1__["Paragraph"](cont.paragraph));
        } else if (cont.image) {
          _this5.content.push(new _Content_Image__WEBPACK_IMPORTED_MODULE_2__["Image"](cont.image));
        } else if (cont.subTitle) {
          _this5.content.push(new _Content_SubTitle__WEBPACK_IMPORTED_MODULE_3__["SubTitle"](cont.subTitle));
        } // else if(cont.youtube){
        // 	this.content.push(new YouTubeVideo(cont.youtube))
        // }
        // else{
        // 	console.log(cont.toString())
        // 	this.content.push(cont)
        // }

      });
    };
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feed/feed.component */
    "./src/app/feed/feed.component.ts");
    /* harmony import */


    var _datascience_datascience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./datascience/datascience.component */
    "./src/app/datascience/datascience.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _reference_reference_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./reference/reference.component */
    "./src/app/reference/reference.component.ts");
    /* harmony import */


    var _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./singlepost/singlepost.component */
    "./src/app/singlepost/singlepost.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'blog',
      component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]
    }, {
      path: 'datascience',
      component: _datascience_datascience_component__WEBPACK_IMPORTED_MODULE_4__["DatascienceComponent"]
    }, {
      path: 'reference',
      component: _reference_reference_component__WEBPACK_IMPORTED_MODULE_7__["ReferenceComponent"]
    }, {
      path: 'blog/:id',
      component: _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_8__["SinglepostComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#navbar {\r\n  list-style-type: none;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  top: 0px;\r\n  width: 100%;\r\n  position: fixed;\r\n  overflow: hidden;\r\n  background-color: #0f4c75;\r\n  opacity: 90%;\r\n  font-weight: bold;\r\n  max-height: 48px;\r\n}\r\n\r\n.sticky {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\nli > a {\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.left {\r\n  float: left;\r\n}\r\n\r\nli a:hover {\r\n  background: #a8a8a8;\r\n  color: black;\r\n}\r\n\r\n#icon {\r\n  float: right;\r\n  padding: 6px;\r\n  margin: 0px;\r\n}\r\n\r\n.iconImage {\r\n  height: 34px;\r\n  width: 34px;\r\n  position: center;\r\n}\r\n\r\nheader {\r\n  margin-top: 48px;\r\n  position: relative;\r\n  /* background-image: url(\"assets/images/mainphoto.jpg\"); */\r\n  background-image: url('mainphoto.jpg');\r\n  background-position: 45% 50% top;\r\n  /* background-position-y: center; */\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n  min-height: 300px;\r\n}\r\n\r\n/* .text-block {\r\n  position: absolute;\r\n\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  top: 10%;\r\n  left: 40%;\r\n  color: rgba(27, 27, 27, 0.86);\r\n  font-size: 250%;\r\n} */\r\n\r\n.text-block {\r\n  position: absolute;\r\n  resize: both;\r\n  /* top: 10%;\r\n  left: 45%; */\r\n  top: 40%;\r\n  left: 55%;\r\n  padding: 20px;\r\n  color: rgba(0, 0, 0, 0.86);\r\n  color: rgba(250, 250, 250, 0.86);\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  border-radius: 25px;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n}\r\n\r\n.text-block .name {\r\n  font-size: 250%;\r\n  padding: 4px;\r\n  margin: 5px;\r\n  color: black;\r\n  background-color: whitesmoke;\r\n  border-radius: 15px;\r\n}\r\n\r\n.text-block > #subText-block {\r\n  margin-left: 15%;\r\n}\r\n\r\n.text-block #extension {\r\n  color: black;\r\n  /* padding: 10px;\r\n\tmargin: 1px; */\r\n  border-radius: 10%;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n#mainphoto {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  position: center;\r\n  background-position: center top;\r\n\r\n  padding: 0px;\r\n  margin: 0px;\r\n  margin-top: 48px;\r\n}\r\n\r\n#photoTitle {\r\n  list-style: none;\r\n}\r\n\r\n#photoTitle li {\r\n  float: top;\r\n  display: inline;\r\n}\r\n\r\n.socialHomeGroup {\r\n\tposition: fixed;\r\n\tfloat: right;\r\n\tright: 0;\r\n}\r\n\r\n.socialHomeGroup > .socialHomeItem {\r\n\tbackground-color: whitesmoke;\r\n\theight: 30px;\r\n\tpadding: 4px;\r\n\tmargin-bottom: 5px;\r\n\tborder-radius: 50%;\r\n  }\r\n\r\n.socialHomeGroup > .socialHomeItem > a > img {\r\n  height: 30px;\r\n}\r\n\r\n#quote {\r\n  margin-top: 0px;\r\n  font-size: 20px;\r\n  width: -60%;\r\n  direction: rtl;\r\n  text-align: right;\r\n}\r\n\r\n#body {\r\n  color: whitesmoke;\r\n\r\n  width: 85%;\r\n  padding: 40px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 10px;\r\n  align-self: center;\r\n\r\n  max-width: 1080px;\r\n\r\n\r\n}\r\n\r\nfooter {\r\n  background-color: rgba(28, 28, 28, 0.9);\r\n  color: whitesmoke;\r\n  /* height: 200px; */\r\n  width: 100%;\r\n  text-align: center;\r\n  position: fixed;\r\n}\r\n\r\n/* Full Size CSS */\r\n\r\n@media (min-width: 1720px) {\r\n  header {\r\n    height: 50vh;\r\n\r\n    background-size: fit;\r\n  }\r\n\r\n  header > .text-block {\r\n    font-size: 200%;\r\n    left: 50%;\r\n  }\r\n}\r\n\r\n/* Full Size CSS */\r\n\r\n@media (max-width: 1720px) {\r\n  header {\r\n    height: 30vh;\r\n  }\r\n}\r\n\r\n/* Full Size CSS */\r\n\r\n@media (max-width: 768px) {\r\n\r\n  #body {\r\n    width: 95%;\r\n    padding: 0%;\r\n  }\r\n\r\n#navbar {\r\n\t\r\n}\r\n\r\n  header > .text-block {\r\n    left: 50%;\r\n  }\r\n  .socialHomeGroup > .socialHomeItem {\r\n\tvisibility: hidden;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMERBQTBEO0VBQzFELHNDQUF1RDtFQUN2RCxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLDRCQUE0QjtFQUM1QixzQkFBc0I7O0VBRXRCLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7Ozs7O0dBU0c7O0FBRUg7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaO2NBQ1k7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsb0RBQTRDO1VBQTVDLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaO2VBQ2E7RUFDYixrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsK0JBQStCOztFQUUvQixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsWUFBWTtDQUNaLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsa0JBQWtCO0VBQ2pCOztBQUdGO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLGlCQUFpQjs7O0FBR25COztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRTtJQUNFLFlBQVk7O0lBRVosb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7RUFDWDtBQUNGOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBLGtCQUFrQjs7QUFDbEI7O0VBRUU7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztBQUVGOztBQUVBOztFQUVFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7Q0FDRCxrQkFBa0I7RUFDakI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZiYXIge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmNGM3NTtcclxuICBvcGFjaXR5OiA5MCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWF4LWhlaWdodDogNDhweDtcclxufVxyXG5cclxuLnN0aWNreSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubGkgPiBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubGkgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2E4YThhODtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNpY29uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uaWNvbkltYWdlIHtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgd2lkdGg6IDM0cHg7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL21haW5waG90by5qcGdcIik7ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9tYWlucGhvdG8uanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDQ1JSA1MCUgdG9wO1xyXG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyOyAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi8qIC50ZXh0LWJsb2NrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHRvcDogMTAlO1xyXG4gIGxlZnQ6IDQwJTtcclxuICBjb2xvcjogcmdiYSgyNywgMjcsIDI3LCAwLjg2KTtcclxuICBmb250LXNpemU6IDI1MCU7XHJcbn0gKi9cclxuXHJcbi50ZXh0LWJsb2NrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmVzaXplOiBib3RoO1xyXG4gIC8qIHRvcDogMTAlO1xyXG4gIGxlZnQ6IDQ1JTsgKi9cclxuICB0b3A6IDQwJTtcclxuICBsZWZ0OiA1NSU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg2KTtcclxuICBjb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjg2KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLnRleHQtYmxvY2sgLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMjUwJTtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLnRleHQtYmxvY2sgPiAjc3ViVGV4dC1ibG9jayB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxufVxyXG5cclxuLnRleHQtYmxvY2sgI2V4dGVuc2lvbiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC8qIHBhZGRpbmc6IDEwcHg7XHJcblx0bWFyZ2luOiAxcHg7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbiNtYWlucGhvdG8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG5cclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDhweDtcclxufVxyXG5cclxuI3Bob3RvVGl0bGUge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbiNwaG90b1RpdGxlIGxpIHtcclxuICBmbG9hdDogdG9wO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnNvY2lhbEhvbWVHcm91cCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRyaWdodDogMDtcclxufVxyXG5cclxuLnNvY2lhbEhvbWVHcm91cCA+IC5zb2NpYWxIb21lSXRlbSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG5cclxuLnNvY2lhbEhvbWVHcm91cCA+IC5zb2NpYWxIb21lSXRlbSA+IGEgPiBpbWcge1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuI3F1b3RlIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiAtNjAlO1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4jYm9keSB7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcblxyXG4gIHdpZHRoOiA4NSU7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gIG1heC13aWR0aDogMTA4MHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwgMjgsIDI4LCAwLjkpO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIC8qIGhlaWdodDogMjAwcHg7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLyogRnVsbCBTaXplIENTUyAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTcyMHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIGhlaWdodDogNTB2aDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGZpdDtcclxuICB9XHJcblxyXG4gIGhlYWRlciA+IC50ZXh0LWJsb2NrIHtcclxuICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEZ1bGwgU2l6ZSBDU1MgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE3MjBweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGdWxsIFNpemUgQ1NTICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAjYm9keSB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgfVxyXG5cclxuI25hdmJhciB7XHJcblx0XHJcbn1cclxuXHJcbiAgaGVhZGVyID4gLnRleHQtYmxvY2sge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuICAuc29jaWFsSG9tZUdyb3VwID4gLnNvY2lhbEhvbWVJdGVtIHtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(http) {
        var _this6 = this;

        _classCallCheck(this, AppComponent);

        this.http = http;
        this.url = "http://localhost:8080/";
        this.title = "the strangest title"; // @ViewChild('navbar') header: ElementRef;

        this.sticky = null; // Making Request for getting from backend

        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]("GET", this.url + "QOTD", {
          reportProgress: false,
          responseType: "text"
        });
        this.http.request(req).subscribe(function (event) {
          if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
            _this6.quote = event.body;
          }
        }, function (error) {
          console.log("Error", error);
          _this6.quote = "Error getting quote from backend";
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./feed/feed.component */
    "./src/app/feed/feed.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _datascience_datascience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./datascience/datascience.component */
    "./src/app/datascience/datascience.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _w11k_angular_sticky_things__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @w11k/angular-sticky-things */
    "./node_modules/@w11k/angular-sticky-things/fesm2015/w11k-angular-sticky-things.js");
    /* harmony import */


    var _reference_reference_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./reference/reference.component */
    "./src/app/reference/reference.component.ts");
    /* harmony import */


    var _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./singlepost/singlepost.component */
    "./src/app/singlepost/singlepost.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_8__["PostComponent"], _datascience_datascience_component__WEBPACK_IMPORTED_MODULE_9__["DatascienceComponent"], _reference_reference_component__WEBPACK_IMPORTED_MODULE_13__["ReferenceComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"], _reference_reference_component__WEBPACK_IMPORTED_MODULE_13__["ReferenceComponent"], _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_14__["SinglepostComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _w11k_angular_sticky_things__WEBPACK_IMPORTED_MODULE_12__["AngularStickyThingsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/datascience/datascience.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/datascience/datascience.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDatascienceDatascienceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YXNjaWVuY2UvZGF0YXNjaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2RhdGFzY2llbmNlL2RhdGFzY2llbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/datascience/datascience.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/datascience/datascience.component.ts ***!
    \******************************************************/

  /*! exports provided: DatascienceComponent */

  /***/
  function srcAppDatascienceDatascienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatascienceComponent", function () {
      return DatascienceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var xml2js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! xml2js */
    "./node_modules/xml2js/lib/xml2js.js");
    /* harmony import */


    var xml2js__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_3__);

    var DatascienceComponent =
    /*#__PURE__*/
    function () {
      // getWeatherData(){
      //   let data;
      //   const formData = new FormData();
      //   formData.append('start', '2019-11-01');
      //   formData.append('end', '2020-01-01');
      //
      //   this.http.post(
      //     this.url + 'loadCrimeData', formData)
      //     .subscribe((dat) => {
      //       parseString(dat, { explicitArray: false }, (error, result) => {
      //         data = JSON.stringify(dat);
      //         data = JSON.parse(data);
      //         console.log(data);
      //         console.log(data.toString());
      //         this.message = data[0]['ZIP'].toString();
      //         this.data = data;
      //       });
      //     });
      // }
      function DatascienceComponent(http) {
        _classCallCheck(this, DatascienceComponent);

        this.http = http;
        this.message = 'Loading';
        this.url = 'http://127.0.0.1:5000/';
        this.http = http;
        this.getCrimeData();
        console.log('Message: ' + this.message);
      }

      _createClass(DatascienceComponent, [{
        key: "getCrimeData",
        value: function getCrimeData() {
          var _this7 = this;

          var data;
          console.log('here though');
          var formData = new FormData();
          formData.append('start', '2018-11-01');
          formData.append('end', '2020-01-01');
          this.http.post(this.url + 'loadCrimeData', formData).subscribe(function (dat) {
            Object(xml2js__WEBPACK_IMPORTED_MODULE_3__["parseString"])(dat, {
              explicitArray: false
            }, function (error, result) {
              data = JSON.stringify(dat);
              data = JSON.parse(data);
              console.log(data);
              console.log(data.toString());
              _this7.message = data[0]['ZIP'].toString();
              _this7.data = data;
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DatascienceComponent;
    }();

    DatascienceComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DatascienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-datascience',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./datascience.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/datascience/datascience.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./datascience.component.css */
      "./src/app/datascience/datascience.component.css")).default]
    })], DatascienceComponent);
    /***/
  },

  /***/
  "./src/app/feed/feed.component.css":
  /*!*****************************************!*\
    !*** ./src/app/feed/feed.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeedFeedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wholeBlog{\r\n  max-width: 1050px;\r\n  min-width: 500px;\r\n  width: 75%;\r\n  padding: 20px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 10px;\r\n  alignment: center;\r\n}\r\n\r\n\r\n#postList{\r\n\tlist-style-type:none\r\n}\r\n\r\n\r\n#BigTitle{\r\n  color: whitesmoke;\r\n  font-size: 40px;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COzs7QUFHQTtDQUNDO0FBQ0Q7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9mZWVkL2ZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aG9sZUJsb2d7XHJcbiAgbWF4LXdpZHRoOiAxMDUwcHg7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogNzUlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYWxpZ25tZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4jcG9zdExpc3R7XHJcblx0bGlzdC1zdHlsZS10eXBlOm5vbmVcclxufVxyXG5cclxuXHJcbiNCaWdUaXRsZXtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/feed/feed.component.ts":
  /*!****************************************!*\
    !*** ./src/app/feed/feed.component.ts ***!
    \****************************************/

  /*! exports provided: FeedComponent */

  /***/
  function srcAppFeedFeedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedComponent", function () {
      return FeedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Post */
    "./src/app/Post.ts");

    var FeedComponent =
    /*#__PURE__*/
    function () {
      function FeedComponent(route, location, http) {
        _classCallCheck(this, FeedComponent);

        this.route = route;
        this.location = location;
        this.http = http;
        this.posts = [];
        this.url = "http://localhost:8080/";
        this.updatePosts();
      }

      _createClass(FeedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("test");
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "updatePosts",
        value: function updatePosts() {
          var _this8 = this;

          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"]("GET", this.url + "blog", {
            reportProgress: false,
            responseType: "text"
          });
          this.http.request(req).subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
              console.log(typeof event.body);

              if (typeof event.body === "string") {
                var received = JSON.parse(event.body);
                console.log(received);

                for (var po in received) {
                  var temp = JSON.parse(received[po]);
                  console.log(temp);

                  _this8.posts.push(new _Post__WEBPACK_IMPORTED_MODULE_5__["Post"](temp.Post));
                }
              }
            }
          }, function (error) {
            console.log("Error", error);
          });
        }
      }]);

      return FeedComponent;
    }();

    FeedComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-feed",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feed.component.css */
      "./src/app/feed/feed.component.css")).default]
    })], FeedComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#home {\r\n  color: whitesmoke;\r\n  align-content: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.block {\r\n  color: black;\r\n  padding: 20px;\r\n  margin-top: 30px;\r\n\r\n  border-left-style: solid;\r\n  border-left-width: 2px;\r\n  /*border-left-color: #0f4c75;*/\r\n  border-left-color: #f2f2f2;\r\n\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 4px;\r\n  border-bottom-color: #0f4c75;\r\n\r\n  border-radius: 20px;\r\n}\r\n\r\n.title {\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  margin-left: 50px;\r\n  font-family: sans-serif;\r\n}\r\n\r\n#intro {\r\n  margin-bottom: 20px;\r\n  display: inline;\r\n}\r\n\r\n#intro > ul {\r\n  display: inline-block;\r\n  list-style: none;\r\n}\r\n\r\n#introText {\r\n  /* background-color: #cacaca; */\r\n  background-color: rgb(28, 28, 28);\r\n\r\n  color: #cacaca;\r\n  float: left;\r\n}\r\n\r\n#profilePhoto {\r\n  margin-top: 30px;\r\n  max-width: 20%;\r\n  margin-left: 5%;\r\n  align-self: center;\r\n  float: left;\r\n  border-radius: 5%;\r\n}\r\n\r\n#typeracer {\r\n  margin-top: 25px;\r\n  align-self: center;\r\n  /* max-width: 30%; */\r\n  margin-left: 9%;\r\n  /* width: 186px; */\r\n  float: left;\r\n}\r\n\r\n#typeracer > img {\r\n  size: 150%;\r\n}\r\n\r\n.introPara {\r\n  text-indent: initial;\r\n  width: 90%;\r\n  padding-left: 5%;\r\n  line-height: 1.5;\r\n  font-size: large;\r\n}\r\n\r\n#techBasedInterests {\r\n  color: black;\r\n  background-color: #cacaca;\r\n  display: table-cell;\r\n  width: 100%;\r\n}\r\n\r\n#techBaseInterests > ul {\r\n  padding: 20px;\r\n  margin-top: 30px;\r\n  list-style: none;\r\n}\r\n\r\n#techBasedInterests > ul > li {\r\n  /* background-color: rgb(28, 28, 28); */\r\n  /* color: white; */\r\n  list-style: none;\r\n  float: left;\r\n\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  /*margin: 11px;*/\r\n  margin: 1%;\r\n\r\n  min-width: 54px;\r\n\r\n  border-left-style: solid;\r\n  border-left-width: 2px;\r\n  border-left-color: black;\r\n\r\n  border-right-style: solid;\r\n  border-right-width: 2px;\r\n  border-right-color: #0f4c75;\r\n}\r\n\r\n#techBasedInterests > li > h4 {\r\n  font-weight: bold;\r\n  font-size: 17px;\r\n}\r\n\r\n#skills {\r\n  color: whitesmoke;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  list-style: none;\r\n  /* padding: 10px; */\r\n  display: inline-block;\r\n  width: 100%;\r\n  background-color: RGB(28, 28, 28);\r\n}\r\n\r\n#skills > #languages > h3 {\r\n  font-weight: bold;\r\n  font-size: 25px;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 2px;\r\n  border-bottom: #cacaca;\r\n}\r\n\r\n#skills > #languages > .list > .language {\r\n  list-style: none;\r\n\r\n  float: left;\r\n\r\n  color: whitesmoke;\r\n  text-align: center;\r\n\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n\r\n  margin: 1%;\r\n\r\n  min-height: 180px;\r\n\r\n  border-left-style: solid;\r\n  border-left-width: 2px;\r\n  border-left-color: #cacaca;\r\n\r\n  border-right-style: solid;\r\n  border-right-width: 2px;\r\n  border-right-color: #0f4c75;\r\n}\r\n\r\n#skills #languages > .list > .language > h4 {\r\n  margin-top: 5px;\r\n  /* font-size: 120%; */\r\n  font-size: 25px;\r\n}\r\n\r\n#skills > #languages > .list > .language > ul {\r\n  list-style-position: inside;\r\n}\r\n\r\n#skills > #languages > .list > .language > li {\r\n  text-align: left;\r\n  font-size: 120%;\r\n  list-style: circle;\r\n  padding-bottom: 7px;\r\n}\r\n\r\n#skills > #otherCSSkillsTitle {\r\n  border-top: whitesmoke;\r\n  border-top-style: solid;\r\n  border-top-width: 2px;\r\n  margin-top: 280px;\r\n  padding-top: 10px;\r\n  margin-left: 4%;\r\n  font-size: 120%;\r\n}\r\n\r\n#skills > .panel > #otherCSSkills {\r\n  list-style: none;\r\n  white-space: normal;\r\n}\r\n\r\n#skills > .panel > #otherCSSkills > li {\r\n  float: left;\r\n  display: block;\r\n  margin-right: 3%;\r\n}\r\n\r\n#skills > .skillList > h4 {\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  margin-left: 10%;\r\n  color: white;\r\n  /*text-align: center;*/\r\n  font-family: \"Arial Rounded MT Bold\", sans-serif;\r\n}\r\n\r\n#skills > .skillList > li {\r\n  text-align: left;\r\n  font-size: 150%;\r\n}\r\n\r\n#skills > #softSkills {\r\n  margin-left: 10%;\r\n}\r\n\r\n#skills > .accordion {\r\n  background-color: #0f4c75;\r\n  color: whitesmoke;\r\n  cursor: pointer;\r\n  padding: 18px;\r\n  width: 100%;\r\n  border: none;\r\n  text-align: left;\r\n  outline: none;\r\n  font-size: 15px;\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n\r\n#skills > .active,\r\n.accordion:hover {\r\n  background-color: #cacaca;\r\n  color: black;\r\n}\r\n\r\n#skills.accordion:after {\r\n  content: \"\\002B\";\r\n  color: #777;\r\n  font-weight: bold;\r\n  float: right;\r\n  margin-left: 5px;\r\n}\r\n\r\n#skills > .active:after {\r\n  content: \"\\2212\";\r\n}\r\n\r\n#skills > .panel {\r\n  padding: 0 18px;\r\n  background-color: RGB(28, 28, 28);\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  -webkit-transition: max-height 0.2s ease-out;\r\n  transition: max-height 0.2s ease-out;\r\n\r\n  border-left-style: solid;\r\n  border-left-width: 2px;\r\n  border-left-color: #0f4c75;\r\n\r\n  border-right-style: solid;\r\n  border-right-width: 2px;\r\n  border-right-color: #cacaca;\r\n\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 2px;\r\n  border-bottom-color: #cacaca;\r\n}\r\n\r\n#experience {\r\n  background-color: #cacaca;\r\n  border-left-style: solid;\r\n  border-left-width: 2px;\r\n  border-left-color: #f2f2f2;\r\n\r\n  color: black;\r\n\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 4px;\r\n  border-bottom-color: #0f4c75;\r\n}\r\n\r\n#experience > .list {\r\n  /*margin-left: 10px;*/\r\n  width: 90%;\r\n}\r\n\r\n#FAQ {\r\n  background-color: #cacaca;\r\n}\r\n\r\n/* Full Size CSS */\r\n\r\n@media (min-width: 1080px) {\r\n  #home > #intro > ul > #introText {\r\n    width: 70%;\r\n  }\r\n\r\n  #techBasedInterests > ul > li {\r\n    width: 19%;\r\n    min-height: 100px;\r\n  }\r\n\r\n  #skills > #languages > .list > .language {\r\n    width: 27%;\r\n    min-width: 54px;\r\n  }\r\n}\r\n\r\n/* When quad grids get too compressed */\r\n\r\n@media only screen and (max-width: 1080px) {\r\n  #techBasedInterests > ul > li {\r\n    width: 39%;\r\n    min-height: 220px;\r\n  }\r\n}\r\n\r\n/* When trio grids get too compressed */\r\n\r\n@media only screen and (max-width: 1080px) {\r\n  #profilePhoto {\r\n    visibility: hidden;\r\n    height: 0px;\r\n  }\r\n\r\n  #skills > #languages > .list > .language > h3{\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n#skills > #languages > #languages > h3 {\r\n}\r\n\r\n  #skills > #languages > .list > .language {\r\n    align-self: center;\r\n    margin-left: 8%;\r\n\tmargin-right: 8%;\r\n\twidth: 70%;\r\n\tborder-top-style: solid;\r\n\tborder-top-width: 1px;\r\n\tborder-top-color: whitesmoke;\r\n\tborder-top-left-radius: 2%;\r\n\tborder-top-right-radius: 2%;\r\n\tborder-top-style: dashed;\r\n\r\n  }\r\n}\r\n\r\n/* For mobile */\r\n\r\n@media only screen and (max-width: 768px) {\r\n  #home > #intro > ul > #introText {\r\n    width: 90%;\r\n  }\r\n\r\n  .block {\r\n    padding: 0%;\r\n    /* width: 90%; */\r\n  }\r\n\r\n  #skills {\r\n  }\r\n\r\n  #FAQ > #FAQList > h1 {\r\n    padding: 20%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCOztFQUVoQix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwwQkFBMEI7O0VBRTFCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsNEJBQTRCOztFQUU1QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsaUNBQWlDOztFQUVqQyxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7O0VBRVgsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBVTs7RUFFVixlQUFlOztFQUVmLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsd0JBQXdCOztFQUV4Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjs7RUFFaEIsV0FBVzs7RUFFWCxpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQixrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQixVQUFVOztFQUVWLGlCQUFpQjs7RUFFakIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QiwwQkFBMEI7O0VBRTFCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDRDQUFvQztFQUFwQyxvQ0FBb0M7O0VBRXBDLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsMEJBQTBCOztFQUUxQix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjs7RUFFM0IsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QiwwQkFBMEI7O0VBRTFCLFlBQVk7O0VBRVosMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUNGOztBQUVBLHVDQUF1Qzs7QUFFdkM7RUFDRTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSx1Q0FBdUM7O0FBRXZDO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0NBQ0Qsa0JBQWtCO0FBQ25COztBQUVBO0FBQ0E7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0Isd0JBQXdCOztFQUV2QjtBQUNGOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7RUFDQTs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZSB7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xyXG4gIC8qYm9yZGVyLWxlZnQtY29sb3I6ICMwZjRjNzU7Ki9cclxuICBib3JkZXItbGVmdC1jb2xvcjogI2YyZjJmMjtcclxuXHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwZjRjNzU7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jaW50cm8ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4jaW50cm8gPiB1bCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbiNpbnRyb1RleHQge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyOCwgMjgpO1xyXG5cclxuICBjb2xvcjogI2NhY2FjYTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI3Byb2ZpbGVQaG90byB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXgtd2lkdGg6IDIwJTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xyXG59XHJcblxyXG4jdHlwZXJhY2VyIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAvKiBtYXgtd2lkdGg6IDMwJTsgKi9cclxuICBtYXJnaW4tbGVmdDogOSU7XHJcbiAgLyogd2lkdGg6IDE4NnB4OyAqL1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jdHlwZXJhY2VyID4gaW1nIHtcclxuICBzaXplOiAxNTAlO1xyXG59XHJcblxyXG4uaW50cm9QYXJhIHtcclxuICB0ZXh0LWluZGVudDogaW5pdGlhbDtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4jdGVjaEJhc2VkSW50ZXJlc3RzIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jdGVjaEJhc2VJbnRlcmVzdHMgPiB1bCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbiN0ZWNoQmFzZWRJbnRlcmVzdHMgPiB1bCA+IGxpIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDI4LCAyOCk7ICovXHJcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIC8qbWFyZ2luOiAxMXB4OyovXHJcbiAgbWFyZ2luOiAxJTtcclxuXHJcbiAgbWluLXdpZHRoOiA1NHB4O1xyXG5cclxuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogYmxhY2s7XHJcblxyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMGY0Yzc1O1xyXG59XHJcblxyXG4jdGVjaEJhc2VkSW50ZXJlc3RzID4gbGkgPiBoNCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4jc2tpbGxzIHtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIC8qIHBhZGRpbmc6IDEwcHg7ICovXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IFJHQigyOCwgMjgsIDI4KTtcclxufVxyXG5cclxuI3NraWxscyA+ICNsYW5ndWFnZXMgPiBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogI2NhY2FjYTtcclxufVxyXG5cclxuI3NraWxscyA+ICNsYW5ndWFnZXMgPiAubGlzdCA+IC5sYW5ndWFnZSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblxyXG4gIG1hcmdpbjogMSU7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG5cclxuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogI2NhY2FjYTtcclxuXHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6ICMwZjRjNzU7XHJcbn1cclxuXHJcbiNza2lsbHMgI2xhbmd1YWdlcyA+IC5saXN0ID4gLmxhbmd1YWdlID4gaDQge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvKiBmb250LXNpemU6IDEyMCU7ICovXHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4jc2tpbGxzID4gI2xhbmd1YWdlcyA+IC5saXN0ID4gLmxhbmd1YWdlID4gdWwge1xyXG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcclxufVxyXG5cclxuI3NraWxscyA+ICNsYW5ndWFnZXMgPiAubGlzdCA+IC5sYW5ndWFnZSA+IGxpIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XHJcbiAgcGFkZGluZy1ib3R0b206IDdweDtcclxufVxyXG5cclxuI3NraWxscyA+ICNvdGhlckNTU2tpbGxzVGl0bGUge1xyXG4gIGJvcmRlci10b3A6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xyXG4gIG1hcmdpbi10b3A6IDI4MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0JTtcclxuICBmb250LXNpemU6IDEyMCU7XHJcbn1cclxuXHJcbiNza2lsbHMgPiAucGFuZWwgPiAjb3RoZXJDU1NraWxscyB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG4jc2tpbGxzID4gLnBhbmVsID4gI290aGVyQ1NTa2lsbHMgPiBsaSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxufVxyXG5cclxuI3NraWxscyA+IC5za2lsbExpc3QgPiBoNCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXHJcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWwgUm91bmRlZCBNVCBCb2xkXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNza2lsbHMgPiAuc2tpbGxMaXN0ID4gbGkge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4jc2tpbGxzID4gI3NvZnRTa2lsbHMge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbiNza2lsbHMgPiAuYWNjb3JkaW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY0Yzc1O1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbiNza2lsbHMgPiAuYWN0aXZlLFxyXG4uYWNjb3JkaW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI3NraWxscy5hY2NvcmRpb246YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFwwMDJCXCI7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbiNza2lsbHMgPiAuYWN0aXZlOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlxcMjIxMlwiO1xyXG59XHJcblxyXG4jc2tpbGxzID4gLnBhbmVsIHtcclxuICBwYWRkaW5nOiAwIDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogUkdCKDI4LCAyOCwgMjgpO1xyXG4gIG1heC1oZWlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XHJcblxyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMGY0Yzc1O1xyXG5cclxuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2NhY2FjYTtcclxuXHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNjYWNhY2E7XHJcbn1cclxuXHJcbiNleHBlcmllbmNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZjJmMmYyO1xyXG5cclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMGY0Yzc1O1xyXG59XHJcblxyXG4jZXhwZXJpZW5jZSA+IC5saXN0IHtcclxuICAvKm1hcmdpbi1sZWZ0OiAxMHB4OyovXHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuI0ZBUSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcclxufVxyXG5cclxuLyogRnVsbCBTaXplIENTUyAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTA4MHB4KSB7XHJcbiAgI2hvbWUgPiAjaW50cm8gPiB1bCA+ICNpbnRyb1RleHQge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcblxyXG4gICN0ZWNoQmFzZWRJbnRlcmVzdHMgPiB1bCA+IGxpIHtcclxuICAgIHdpZHRoOiAxOSU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICB9XHJcblxyXG4gICNza2lsbHMgPiAjbGFuZ3VhZ2VzID4gLmxpc3QgPiAubGFuZ3VhZ2Uge1xyXG4gICAgd2lkdGg6IDI3JTtcclxuICAgIG1pbi13aWR0aDogNTRweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIFdoZW4gcXVhZCBncmlkcyBnZXQgdG9vIGNvbXByZXNzZWQgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4MHB4KSB7XHJcbiAgI3RlY2hCYXNlZEludGVyZXN0cyA+IHVsID4gbGkge1xyXG4gICAgd2lkdGg6IDM5JTtcclxuICAgIG1pbi1oZWlnaHQ6IDIyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogV2hlbiB0cmlvIGdyaWRzIGdldCB0b28gY29tcHJlc3NlZCAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAjcHJvZmlsZVBob3RvIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gIH1cclxuXHJcbiAgI3NraWxscyA+ICNsYW5ndWFnZXMgPiAubGlzdCA+IC5sYW5ndWFnZSA+IGgze1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuI3NraWxscyA+ICNsYW5ndWFnZXMgPiAjbGFuZ3VhZ2VzID4gaDMge1xyXG59XHJcblxyXG4gICNza2lsbHMgPiAjbGFuZ3VhZ2VzID4gLmxpc3QgPiAubGFuZ3VhZ2Uge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDglO1xyXG5cdG1hcmdpbi1yaWdodDogOCU7XHJcblx0d2lkdGg6IDcwJTtcclxuXHRib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogd2hpdGVzbW9rZTtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyJTtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMiU7XHJcblx0Ym9yZGVyLXRvcC1zdHlsZTogZGFzaGVkO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi8qIEZvciBtb2JpbGUgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNob21lID4gI2ludHJvID4gdWwgPiAjaW50cm9UZXh0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAuYmxvY2sge1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICAvKiB3aWR0aDogOTAlOyAqL1xyXG4gIH1cclxuXHJcbiAgI3NraWxscyB7XHJcbiAgfVxyXG5cclxuICAjRkFRID4gI0ZBUUxpc3QgPiBoMSB7XHJcbiAgICBwYWRkaW5nOiAyMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var acc = document.getElementsByClassName("accordion");

          for (var i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
              this.classList.toggle("active");
              var panel = this.nextElementSibling;

              if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
              } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
              }
            });
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/post/post.component.css":
  /*!*****************************************!*\
    !*** ./src/app/post/post.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".block {\r\n\tcolor: black;\r\n\tpadding: 20px;\r\n\tmargin-top: 30px;\r\n  \r\n\tborder-left-style: solid;\r\n\tborder-left-width: 2px;\r\n\t/*border-left-color: #0f4c75;*/\r\n\tborder-left-color: #f2f2f2;\r\n  \r\n\tborder-bottom-style: solid;\r\n\tborder-bottom-width: 4px;\r\n\tborder-bottom-color: #0f4c75;\r\n  \r\n\tborder-radius: 2%;\r\n  }\r\n\r\n#post{\r\n  padding: 20px;\r\n  margin-right: 20px;\r\n  margin-bottom: 10px;\r\n\tcolor: black;\r\n  background-color: #cacaca;\r\n}\r\n\r\n/* .paragraph {\r\n\tcolor: red;\r\n} */\r\n\r\n.Image{\r\n  border-radius: 50%;\r\n}\r\n\r\n#title{\r\n\tfont-size: 35px;\r\n\tfont-weight: bold;\r\n\ttext-align: left;\r\n  }\r\n\r\n.subTitle{\r\n\r\n\r\n}\r\n\r\n#list{\r\n  margin-bottom: 0px;\r\n}\r\n\r\n#item{\r\n  font-size: 14px;\r\n  text-align: left;\r\n  text-indent: 2em;\r\n  /*color:white;*/\r\n  color:black;\r\n  padding: 7px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGdCQUFnQjs7Q0FFaEIsd0JBQXdCO0NBQ3hCLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsMEJBQTBCOztDQUUxQiwwQkFBMEI7Q0FDMUIsd0JBQXdCO0NBQ3hCLDRCQUE0Qjs7Q0FFNUIsaUJBQWlCO0VBQ2hCOztBQUVGO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEIsWUFBWTtFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZ0JBQWdCO0VBQ2Y7O0FBRUY7OztBQUdBOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUlBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2sge1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgXHJcblx0Ym9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XHJcblx0Lypib3JkZXItbGVmdC1jb2xvcjogIzBmNGM3NTsqL1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjZjJmMmYyO1xyXG4gIFxyXG5cdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjMGY0Yzc1O1xyXG4gIFxyXG5cdGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIH1cclxuXHJcbiNwb3N0e1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XHJcbn1cclxuXHJcbi8qIC5wYXJhZ3JhcGgge1xyXG5cdGNvbG9yOiByZWQ7XHJcbn0gKi9cclxuXHJcbi5JbWFnZXtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiN0aXRsZXtcclxuXHRmb250LXNpemU6IDM1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4uc3ViVGl0bGV7XHJcblxyXG5cclxufVxyXG5cclxuI2xpc3R7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiNpdGVte1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHRleHQtaW5kZW50OiAyZW07XHJcbiAgLypjb2xvcjp3aGl0ZTsqL1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/post/post.component.ts":
  /*!****************************************!*\
    !*** ./src/app/post/post.component.ts ***!
    \****************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PostComponent =
    /*#__PURE__*/
    function () {
      function PostComponent() {
        _classCallCheck(this, PostComponent);
      }

      _createClass(PostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PostComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PostComponent.prototype, "post", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post.component.css */
      "./src/app/post/post.component.css")).default]
    })], PostComponent);
    /***/
  },

  /***/
  "./src/app/projects/projects.component.css":
  /*!*************************************************!*\
    !*** ./src/app/projects/projects.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.css */
      "./src/app/projects/projects.component.css")).default]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/reference/reference.component.css":
  /*!***************************************************!*\
    !*** ./src/app/reference/reference.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReferenceReferenceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZmVyZW5jZS9yZWZlcmVuY2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/reference/reference.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/reference/reference.component.ts ***!
    \**************************************************/

  /*! exports provided: ReferenceComponent */

  /***/
  function srcAppReferenceReferenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function () {
      return ReferenceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReferenceComponent =
    /*#__PURE__*/
    function () {
      function ReferenceComponent() {
        _classCallCheck(this, ReferenceComponent);
      }

      _createClass(ReferenceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReferenceComponent;
    }();

    ReferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reference',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reference.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reference/reference.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reference.component.css */
      "./src/app/reference/reference.component.css")).default]
    })], ReferenceComponent);
    /***/
  },

  /***/
  "./src/app/singlepost/singlepost.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/singlepost/singlepost.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSinglepostSinglepostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZXBvc3Qvc2luZ2xlcG9zdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/singlepost/singlepost.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/singlepost/singlepost.component.ts ***!
    \****************************************************/

  /*! exports provided: SinglepostComponent */

  /***/
  function srcAppSinglepostSinglepostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SinglepostComponent", function () {
      return SinglepostComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Post */
    "./src/app/Post.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SinglepostComponent =
    /*#__PURE__*/
    function () {
      function SinglepostComponent(router, http) {
        _classCallCheck(this, SinglepostComponent);

        this.router = router;
        this.http = http;
        this.url = "http://localhost:8080/";
        this.path = ""; // this.path = router.url._value[1].path;

        this.updatePost();
      }

      _createClass(SinglepostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updatePost",
        value: function updatePost() {
          var _this9 = this;

          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"]("GET", this.url + "blog", {
            reportProgress: false,
            responseType: "text"
          });
          this.http.request(req).subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
              if (typeof event.body === "string") {
                var received = JSON.parse(event.body);

                for (var po in received) {
                  var temp = JSON.parse(received[po]);
                  console.log(temp.Post);
                  _this9.post = new _Post__WEBPACK_IMPORTED_MODULE_3__["Post"](temp.Post);
                }
              }
            }
          }, function (error) {
            console.log("here");
            console.log("Error", error);
          });
        }
      }]);

      return SinglepostComponent;
    }();

    SinglepostComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    SinglepostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-singlepost',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./singlepost.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/singlepost/singlepost.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./singlepost.component.css */
      "./src/app/singlepost/singlepost.component.css")).default]
    })], SinglepostComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Ben\WebstormProjects\PersonalWebFrontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/*-----------------------------------------------------------------*/\r\n:root {\r\n\t--addProjectButton: rgb(69, 140, 255);\r\n}\r\nbody {\r\n\tbackground-color: antiquewhite;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\n#content {\r\n\tdisplay: grid; \r\n\tgrid-template-areas: \"nav nav\"\r\n\t\t\t\t\t\t\"menu main\";\r\n\tgrid-template-columns: auto 1fr;\r\n\tgrid-template-rows:repeat(2,auto);\r\n\talign-items: center;\r\n\tposition: relative;\r\n\tbackground-color:aquamarine;\r\n}\r\n\r\n/*--------------------------------- Nav ---------------------------------*/\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgrid-area: nav;\r\n}\r\n.nav-title{\r\n\tfont-size: 2rem;\r\n\tfont-weight: 600;\r\n\tpadding: 1rem ;\r\n\ttext-align: center;\r\n\tmargin: 0 1rem;\r\n}\r\nnav .logo {\r\n\twidth: 4rem;\r\n\tpadding: 0.5rem;\r\n\tmargin-left: 0.5rem;\r\n}\r\nnav .inputFilter {\r\n\twidth: 40%;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n/*--------------------------------- Todo section ---------------------------------*/\r\n\r\n.todo-section {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\r\n\tgrid-area: main;\r\n\tbackground-color: white;\r\n\theight: 100vh;\r\n}\r\n.addTaskButton {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size:0;\r\n\twidth: 3rem;\r\n\tmargin: 1rem;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid black;\r\n\ttransition: transform 0.3s, background-color 0.3s ease-out, font-size 0.3s ease-out;\r\n}\r\n.addTaskButton::after {\r\n\tcontent: \"New Task\";\r\n\twhite-space: nowrap;\r\n\tbackground-color: rgb(95, 150, 246);\r\n\tpadding:0 1rem;\r\n\tborder-radius: 10px;\r\n\tmargin-left: 0.8rem;\r\n}\r\n.addTaskButton p {\r\n\tbackground-color:rgb(95, 150, 246);\r\n}\r\n.addTaskButton:hover {\r\n\tbackground-color: rgb(95, 150, 246);\r\n\ttransform: scale(1.2);\r\n\tfont-size: 1rem;\r\n}\r\n.addTaskButton:hover::after {\r\n\tpadding:0.6rem 1rem;\r\n}\r\n\r\n/*--------------------------------- Task Form ---------------------------------*/\r\n.formContainer{\r\n\tpadding: 1rem;\r\n}\r\n.taskForm{\r\n\tdisplay: none;\r\n\tgrid-area: menu;\r\n\tborder: 1px solid black;\r\n\tpadding: 0.8rem;\r\n}\r\n.form-fieldset {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tpadding:0 0.8rem ;\r\n}\r\n.form-fieldset input {\r\n\tmargin-bottom: 0.8rem;\r\n}\r\n.addProjectForm {\r\n\tdisplay: none;\r\n}\r\n.addProjectForm button {\r\n\tfont-size: 1rem;\r\n}\r\n.addProjectForm input {\r\n\tpadding: 0.5rem;\r\n\tborder: none;\r\n}\r\n.active {\r\n\tdisplay: flex;\r\n\talign-items: flex-start;\r\n}\r\n\r\n/*--------------------------------- Tasks ---------------------------------*/\r\n\r\n.tasks-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n.task {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 1rem;\r\n\tmin-width: 600px;\r\n}\r\n.task[priority=\"low\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(0, 195, 0) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task[priority=\"medium\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(232, 225, 19) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task[priority=\"high\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(255, 17, 17) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task input:checked ~ p {\r\n\ttext-decoration: line-through;\r\n}\r\n.task p {\r\n\tpadding: 0.5rem;\r\n}\r\n\r\n.taskInfo {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid black;\r\n\tborder-radius: 0.5rem;\r\n\tpadding: 1rem;\r\n}\r\n.taskInfo div {\r\n\tdisplay: flex;\r\n}\r\n.taskContent {\r\n\toverflow: hidden;\r\n\tbackground-color: rgb(203, 203, 203);\r\n\theight: 0;\r\n\ttransition: height 0.3s ease-out;\r\n}\r\n.notes-list {\r\n\toverflow: auto;\r\n\theight: 120px;\r\n}\r\n\r\n.note {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n}\r\n\r\n.note input[type=checkbox]:checked + label  {\r\n\ttext-decoration: line-through;\r\n}\r\n.taskContent div {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n.taskContent-active{\r\n\tdisplay: block;\r\n\theight: 200px;\r\n}\r\n.taskContent-hide {\r\n\tdisplay: none;\r\n}\r\n.task-hide {\r\n\tdisplay: none;\r\n}\r\n.taskEdit{\r\n\tdisplay: none;\r\n\t\r\n}\r\n.edit-active {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.priorityField {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n/*--------------------------------- Menu ---------------------------------*/\r\n.todoMenu {\r\n\tgrid-area: menu;\r\n\theight: 100%;\r\n\twidth: 200px;\r\n\tbackground-color: rgb(150, 175, 240);\r\n\tpadding:0 0.5rem;\r\n}\r\n.project-section {\r\n\tmargin-bottom: 1rem;\r\n}\r\n.list-section {\r\n\tpadding: 0.5rem ;\r\n}\r\n.list-section h2 {\r\n\tfont-size: 1.5rem;\r\n\tborder-bottom: 1px solid black;\r\n}\r\n\r\n.todoMenu .addProject {\r\n\tbackground-color: var(--addProjectButton);\r\n\tborder-bottom: 1px solid transparent;\r\n\ttransition: border-bottom 0.3s;\r\n\tborder: none;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size: 1.2rem;\r\n\tpadding: 0.6rem ;\r\n\tmargin: 0.8rem 0;\r\n\tborder-radius: 4px ;\r\n}\r\n\r\n.addProject img {\r\n\twidth: 2rem;\r\n}\r\n.projectButtonsSection li {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid black;\r\n\tpadding: 0.5rem;\r\n\ttransition: background-color 0.3s;\r\n}\r\n.projectButtonsSection li button {\r\n\tpadding: 0.5rem 1rem;\r\n\tfont-size: 1.2rem;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n\ttext-decoration: underline 1px transparent;\r\n\ttransition: text-decoration 0.3s;\r\n}\r\n.projectButtonsSection li:hover {\r\n\tbackground-color: var(--addProjectButton);\r\n}\r\n.projectButtonsSection li button:hover {\r\n\ttext-decoration: underline 1px black;\r\n}\r\n\r\n.todoMenu .project-button {\r\n\tmargin-right: 1rem;\r\n\ttext-decoration: underline 1px transparent;\r\n\ttransition: text-decoration 0.3s;\r\n}\r\n.todoMenu .project-button:hover {\r\n\ttext-decoration: underline 1px black;\r\n\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;;;CAGC;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,oEAAoE;AACpE;CACC,qCAAqC;AACtC;AACA;CACC,8BAA8B;CAC9B,oCAAoC;AACrC;AACA;CACC,aAAa;CACb;iBACgB;CAChB,+BAA+B;CAC/B,iCAAiC;CACjC,mBAAmB;CACnB,kBAAkB;CAClB,2BAA2B;AAC5B;;AAEA,0EAA0E;;AAE1E;CACC,aAAa;CACb,mBAAmB;CACnB,cAAc;AACf;AACA;CACC,eAAe;CACf,gBAAgB;CAChB,cAAc;CACd,kBAAkB;CAClB,cAAc;AACf;AACA;CACC,WAAW;CACX,eAAe;CACf,mBAAmB;AACpB;AACA;CACC,UAAU;CACV,iBAAiB;AAClB;;AAEA,mFAAmF;;AAEnF;CACC,YAAY;CACZ,sBAAsB;CACtB,uBAAuB;;CAEvB,eAAe;CACf,uBAAuB;CACvB,aAAa;AACd;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,WAAW;CACX,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,uBAAuB;CACvB,mFAAmF;AACpF;AACA;CACC,mBAAmB;CACnB,mBAAmB;CACnB,mCAAmC;CACnC,cAAc;CACd,mBAAmB;CACnB,mBAAmB;AACpB;AACA;CACC,kCAAkC;AACnC;AACA;CACC,mCAAmC;CACnC,qBAAqB;CACrB,eAAe;AAChB;AACA;CACC,mBAAmB;AACpB;;AAEA,gFAAgF;AAChF;CACC,aAAa;AACd;AACA;CACC,aAAa;CACb,eAAe;CACf,uBAAuB;CACvB,eAAe;AAChB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,iBAAiB;AAClB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,aAAa;AACd;AACA;CACC,eAAe;AAChB;AACA;CACC,eAAe;CACf,YAAY;AACb;AACA;CACC,aAAa;CACb,uBAAuB;AACxB;;AAEA,4EAA4E;;AAE5E;CACC,aAAa;CACb,sBAAsB;AACvB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,aAAa;CACb,gBAAgB;AACjB;AACA;CACC,0EAA0E;AAC3E;AACA;CACC,6EAA6E;AAC9E;AACA;CACC,4EAA4E;AAC7E;AACA;CACC,6BAA6B;AAC9B;AACA;CACC,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,uBAAuB;CACvB,qBAAqB;CACrB,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;CACC,gBAAgB;CAChB,oCAAoC;CACpC,SAAS;CACT,gCAAgC;AACjC;AACA;CACC,cAAc;CACd,aAAa;AACd;;AAEA;CACC,aAAa;CACb,2BAA2B;CAC3B,mBAAmB;AACpB;;AAEA;CACC,6BAA6B;AAC9B;AACA;CACC,aAAa;CACb,yBAAyB;AAC1B;;AAEA;CACC,cAAc;CACd,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;CACC,aAAa;;AAEd;AACA;CACC,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA,2EAA2E;AAC3E;CACC,eAAe;CACf,YAAY;CACZ,YAAY;CACZ,oCAAoC;CACpC,gBAAgB;AACjB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,iBAAiB;CACjB,8BAA8B;AAC/B;;AAEA;CACC,yCAAyC;CACzC,oCAAoC;CACpC,8BAA8B;CAC9B,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,iBAAiB;CACjB,gBAAgB;CAChB,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,WAAW;AACZ;AACA;CACC,aAAa;CACb,8BAA8B;CAC9B,uBAAuB;CACvB,eAAe;CACf,iCAAiC;AAClC;AACA;CACC,oBAAoB;CACpB,iBAAiB;CACjB,YAAY;CACZ,uBAAuB;CACvB,0CAA0C;CAC1C,gCAAgC;AACjC;AACA;CACC,yCAAyC;AAC1C;AACA;CACC,oCAAoC;AACrC;;AAEA;CACC,kBAAkB;CAClB,0CAA0C;CAC1C,gCAAgC;AACjC;AACA;CACC,oCAAoC;;AAErC","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/*-----------------------------------------------------------------*/\r\n:root {\r\n\t--addProjectButton: rgb(69, 140, 255);\r\n}\r\nbody {\r\n\tbackground-color: antiquewhite;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\n#content {\r\n\tdisplay: grid; \r\n\tgrid-template-areas: \"nav nav\"\r\n\t\t\t\t\t\t\"menu main\";\r\n\tgrid-template-columns: auto 1fr;\r\n\tgrid-template-rows:repeat(2,auto);\r\n\talign-items: center;\r\n\tposition: relative;\r\n\tbackground-color:aquamarine;\r\n}\r\n\r\n/*--------------------------------- Nav ---------------------------------*/\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgrid-area: nav;\r\n}\r\n.nav-title{\r\n\tfont-size: 2rem;\r\n\tfont-weight: 600;\r\n\tpadding: 1rem ;\r\n\ttext-align: center;\r\n\tmargin: 0 1rem;\r\n}\r\nnav .logo {\r\n\twidth: 4rem;\r\n\tpadding: 0.5rem;\r\n\tmargin-left: 0.5rem;\r\n}\r\nnav .inputFilter {\r\n\twidth: 40%;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n/*--------------------------------- Todo section ---------------------------------*/\r\n\r\n.todo-section {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\r\n\tgrid-area: main;\r\n\tbackground-color: white;\r\n\theight: 100vh;\r\n}\r\n.addTaskButton {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size:0;\r\n\twidth: 3rem;\r\n\tmargin: 1rem;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid black;\r\n\ttransition: transform 0.3s, background-color 0.3s ease-out, font-size 0.3s ease-out;\r\n}\r\n.addTaskButton::after {\r\n\tcontent: \"New Task\";\r\n\twhite-space: nowrap;\r\n\tbackground-color: rgb(95, 150, 246);\r\n\tpadding:0 1rem;\r\n\tborder-radius: 10px;\r\n\tmargin-left: 0.8rem;\r\n}\r\n.addTaskButton p {\r\n\tbackground-color:rgb(95, 150, 246);\r\n}\r\n.addTaskButton:hover {\r\n\tbackground-color: rgb(95, 150, 246);\r\n\ttransform: scale(1.2);\r\n\tfont-size: 1rem;\r\n}\r\n.addTaskButton:hover::after {\r\n\tpadding:0.6rem 1rem;\r\n}\r\n\r\n/*--------------------------------- Task Form ---------------------------------*/\r\n.formContainer{\r\n\tpadding: 1rem;\r\n}\r\n.taskForm{\r\n\tdisplay: none;\r\n\tgrid-area: menu;\r\n\tborder: 1px solid black;\r\n\tpadding: 0.8rem;\r\n}\r\n.form-fieldset {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tpadding:0 0.8rem ;\r\n}\r\n.form-fieldset input {\r\n\tmargin-bottom: 0.8rem;\r\n}\r\n.addProjectForm {\r\n\tdisplay: none;\r\n}\r\n.addProjectForm button {\r\n\tfont-size: 1rem;\r\n}\r\n.addProjectForm input {\r\n\tpadding: 0.5rem;\r\n\tborder: none;\r\n}\r\n.active {\r\n\tdisplay: flex;\r\n\talign-items: flex-start;\r\n}\r\n\r\n/*--------------------------------- Tasks ---------------------------------*/\r\n\r\n.tasks-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n.task {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 1rem;\r\n\tmin-width: 600px;\r\n}\r\n.task[priority=\"low\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(0, 195, 0) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task[priority=\"medium\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(232, 225, 19) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task[priority=\"high\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(255, 17, 17) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task input:checked ~ p {\r\n\ttext-decoration: line-through;\r\n}\r\n.task p {\r\n\tpadding: 0.5rem;\r\n}\r\n\r\n.taskInfo {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid black;\r\n\tborder-radius: 0.5rem;\r\n\tpadding: 1rem;\r\n}\r\n.taskInfo div {\r\n\tdisplay: flex;\r\n}\r\n.taskContent {\r\n\toverflow: hidden;\r\n\tbackground-color: rgb(203, 203, 203);\r\n\theight: 0;\r\n\ttransition: height 0.3s ease-out;\r\n}\r\n.notes-list {\r\n\toverflow: auto;\r\n\theight: 120px;\r\n}\r\n\r\n.note {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n}\r\n\r\n.note input[type=checkbox]:checked + label  {\r\n\ttext-decoration: line-through;\r\n}\r\n.taskContent div {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n.taskContent-active{\r\n\tdisplay: block;\r\n\theight: 200px;\r\n}\r\n.taskContent-hide {\r\n\tdisplay: none;\r\n}\r\n.task-hide {\r\n\tdisplay: none;\r\n}\r\n.taskEdit{\r\n\tdisplay: none;\r\n\t\r\n}\r\n.edit-active {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.priorityField {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n/*--------------------------------- Menu ---------------------------------*/\r\n.todoMenu {\r\n\tgrid-area: menu;\r\n\theight: 100%;\r\n\twidth: 200px;\r\n\tbackground-color: rgb(150, 175, 240);\r\n\tpadding:0 0.5rem;\r\n}\r\n.project-section {\r\n\tmargin-bottom: 1rem;\r\n}\r\n.list-section {\r\n\tpadding: 0.5rem ;\r\n}\r\n.list-section h2 {\r\n\tfont-size: 1.5rem;\r\n\tborder-bottom: 1px solid black;\r\n}\r\n\r\n.todoMenu .addProject {\r\n\tbackground-color: var(--addProjectButton);\r\n\tborder-bottom: 1px solid transparent;\r\n\ttransition: border-bottom 0.3s;\r\n\tborder: none;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size: 1.2rem;\r\n\tpadding: 0.6rem ;\r\n\tmargin: 0.8rem 0;\r\n\tborder-radius: 4px ;\r\n}\r\n\r\n.addProject img {\r\n\twidth: 2rem;\r\n}\r\n.projectButtonsSection li {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid black;\r\n\tpadding: 0.5rem;\r\n\ttransition: background-color 0.3s;\r\n}\r\n.projectButtonsSection li button {\r\n\tpadding: 0.5rem 1rem;\r\n\tfont-size: 1.2rem;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n\ttext-decoration: underline 1px transparent;\r\n\ttransition: text-decoration 0.3s;\r\n}\r\n.projectButtonsSection li:hover {\r\n\tbackground-color: var(--addProjectButton);\r\n}\r\n.projectButtonsSection li button:hover {\r\n\ttext-decoration: underline 1px black;\r\n}\r\n\r\n.todoMenu .project-button {\r\n\tmargin-right: 1rem;\r\n\ttext-decoration: underline 1px transparent;\r\n\ttransition: text-decoration 0.3s;\r\n}\r\n.todoMenu .project-button:hover {\r\n\ttext-decoration: underline 1px black;\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameMonth/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisMonth/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisMonth)
/* harmony export */ });
/* harmony import */ var _isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameMonth/index.js */ "./node_modules/date-fns/esm/isSameMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */

function isThisMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/classes.js":
/*!***********************************!*\
  !*** ./src/components/classes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "filterTasksMonth": () => (/* binding */ filterTasksMonth),
/* harmony export */   "filterTasksWeek": () => (/* binding */ filterTasksWeek),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "projectSelected": () => (/* binding */ projectSelected),
/* harmony export */   "saveSelectedProject": () => (/* binding */ saveSelectedProject),
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisMonth/index.js");



const projectArray = [];
let projectSelected = 0;
class Todo {
    constructor(name,date,description,priority,complete,notes = []){
        this.name = name;
        this.date = date;
        this.description = description;
        this.priority = priority;
        this.complete = complete;
        this.notes = notes;
    }

    changeName(value) {
        this.name = value;
    }

    changeDate(value) {
        this.date = value;
    }

    changeDescription(value){
        this.description = value;
    }

    changePriority(value){
        this.priority = value;
    }

    changeComplete(value){
        this.complete = value;
    }

    addNote(note){
        this.notes.push({note,checkNote: false});
    }

    removeNote(index) {
        this.notes.splice(index,1);
    }
    checkNote(index) {
        this.notes[index].checkNote = !this.notes[index].checkNote;
        console.log(this.notes);
    }

    crossNote(index) {

    }
}
class Project {
    constructor(name,tasks){
        this.name = name;
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(index) {
        this.tasks.splice(index,1)
    }
}
function saveSelectedProject(index) {
    projectSelected = index;
}

/*<-------------- Create functions --------------> */

function createTask(name,date,description,priority,complete,notes) {
    return new Todo(name,date,description,priority,complete,notes);
}

function createProject(name) {
    const newProject = new Project(name,[]);
    projectArray.push(newProject);
}

function createTodo(todo){
    projectArray[projectSelected].addTask(todo)
}

/*<-------------- Delete functions --------------> */

function deleteProject(event){
    const targetIndex = event.target.parentNode.getAttribute("data-project")
    projectArray.forEach((proj,index) => {
        if(targetIndex == index){
            projectArray.splice(index,1);
        }
    })
}

function deleteTask(index) {
    projectArray[projectSelected].removeTask(index)
}   

/*<-------------- Initial project with tasks --------------> */

if(!localStorage.getItem("projects")){
    createProject("Test");
    createTodo(createTask("Test","2022-12-07","fafa","low",false))
}

/*<-------------- localStorage --------------> */

function setLocalStorage() {
    let newArray = projectArray;
    window.localStorage.setItem("projects",JSON.stringify(newArray))
};
function getLocalStorage() {
    let getArray = JSON.parse(window.localStorage.getItem("projects"));
    if(getArray != null){
        getArray.forEach((project,index) => {
            createProject(project.name);
            projectSelected = index;
            project.tasks.forEach(task  => {
                createTodo(createTask(task.name,task.date,task.description,task.priority,task.complete,task.notes));
            })
        })
    }
}

/*<-------------- Filter functions --------------> */

function filterTasksWeek() {
    let thisWeek = [];
    projectArray.map(todo => {
        todo.tasks.map(task => {
            let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(task.date);
            let result = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date);
            if (result) {
                thisWeek.push(task);
            }
        })
    });
    return thisWeek;
}   
function filterTasksMonth() {
    let thisMonth = [];
    projectArray.map(todo => {
        todo.tasks.map(task => {
            let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(task.date);
            let result = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(date);
            if (result) {
                thisMonth.push(task);
            }
        })
    });
    return thisMonth;
}
getLocalStorage();

// projectArray[0].tasks[1].addNote("Esto es una nota");
// projectArray[0].tasks[1].addNote("Y esta es otra :P");
// projectArray[0].tasks[1].addNote("Borremos esta");
// projectArray[0].tasks[1].removeNote(1)
// console.log(projectArray[0].tasks[1]);

/***/ }),

/***/ "./src/components/ui.js":
/*!******************************!*\
  !*** ./src/components/ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskUi": () => (/* binding */ createTaskUi),
/* harmony export */   "createUI": () => (/* binding */ createUI)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/components/classes.js");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_calendar_check_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/calendar-check.svg */ "./src/images/calendar-check.svg");













function createUI(){
    const root = document.querySelector("#content");
    root.append(navBar(),todoMenu(),todoSection())
}
/*<---------------------------------------------------------------- Todo section ----------------------------------------------------------------> */
function todoSection(){
    const addTaskSection = document.createElement("div");
    addTaskSection.classList.add("todo-section");

    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container")

    const addTaskButton = document.createElement("div");
    const buttonImg = document.createElement("img");

    addTaskButton.classList.add("addTaskButton")
    buttonImg.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_1__;
    addTaskButton.addEventListener("click",() => {
        const taskForm = document.querySelector(".taskForm");
        taskForm.classList.toggle("active")
    });
    addTaskButton.append(buttonImg);
    addTaskSection.append(addTaskButton,taskForm(),tasksContainer);
    return addTaskSection;
}

/* <---------------------------------------------------------------- Task Form ----------------------------------------------------------------> */
function taskForm() {
    const formContainer = document.createElement("div");
    formContainer.classList.add("formContainer")
    const form = document.createElement("form");
    form.classList.add("taskForm");

    form.addEventListener("submit",(e) => {
        const main = document.querySelector(".tasks-container");
        e.stopImmediatePropagation()
        e.preventDefault();
        while(main.firstChild){
            main.removeChild(main.firstChild)
        }
        if(_classes__WEBPACK_IMPORTED_MODULE_0__.projectArray[_classes__WEBPACK_IMPORTED_MODULE_0__.projectSelected]){
            (0,_classes__WEBPACK_IMPORTED_MODULE_0__.createTodo)((0,_classes__WEBPACK_IMPORTED_MODULE_0__.createTask)(nameInput.value,dateInput.value,descriptionArea.value,prioritySelector.value));
            _classes__WEBPACK_IMPORTED_MODULE_0__.projectArray[_classes__WEBPACK_IMPORTED_MODULE_0__.projectSelected].tasks.map((elem,i) => {
                main.append(createTaskUi(elem,i))
            })
            form.classList.remove("active");
        };
        (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
    },true)

    const nameInput = document.createElement("input");
    nameInput.placeholder = "Name";
    nameInput.setAttribute("type","text");
    nameInput.required = true;
    nameInput.classList.add("nameInput");
    const descriptionArea = document.createElement("textarea");
    descriptionArea.placeholder = "Description";
    descriptionArea.classList.add("descriptionArea");
    const dateInput = document.createElement("input")
    dateInput.setAttribute("type","date");
    dateInput.classList.add("dateInput");
    dateInput.required = true;

    const prioritySelector = document.createElement("select");
    prioritySelector.classList.add("prioritySelector")
    const optionPriorityLow = document.createElement("option");
    optionPriorityLow.textContent = "Low";
    optionPriorityLow.value = "low";

    const optionPriorityMedium = document.createElement("option");
    optionPriorityMedium.textContent = "Medium";
    optionPriorityMedium.value = "medium";

    const optionPriorityHigh = document.createElement("option");
    optionPriorityHigh.textContent = "High";
    optionPriorityHigh.value = "high";

    prioritySelector.append(optionPriorityLow,optionPriorityMedium,optionPriorityHigh);

    const submitButton = document.createElement("button");
    submitButton.classList.add("submitButton")
    submitButton.textContent = "Add"
    
    const formFieldsetOne = document.createElement("fieldset");
    formFieldsetOne.classList.add("form-fieldset");
    formFieldsetOne.append(nameInput,descriptionArea);

    const formFieldsetTwo = document.createElement("fieldset");
    formFieldsetTwo.classList.add("form-fieldset");
    const selectorFieldset = document.createElement("fieldset");
    selectorFieldset.append(prioritySelector)
    formFieldsetTwo.append(dateInput,selectorFieldset,submitButton);


    form.append(formFieldsetOne,formFieldsetTwo);
    formContainer.appendChild(form)
    return formContainer;
}

/* <---------------------------------------------------------------- Task UI ----------------------------------------------------------------> */

function createTaskUi(elem,i){
    
    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("id",i);
    task.setAttribute("priority",elem.priority);


    const taskInfo = document.createElement("div")
    taskInfo.classList.add("taskInfo");
    taskInfo.addEventListener("click",() => taskContent.classList.toggle("taskContent-active"));

    const taskContent = document.createElement("div");
    taskContent.classList.add("taskContent")
    const checkboxInput = document.createElement("input")
    checkboxInput.type = "checkbox";
    checkboxInput.checked = elem.complete;
    const taskName = document.createElement("p");
    taskName.textContent = "Name: " + elem.name;
    const taskDate = document.createElement("p");
    taskDate.textContent = "Due Date: " + elem.date;
    const taskDescription = document.createElement("p");
    taskDescription.textContent = "Description: " + elem.description;
    // const taskPriority = document.createElement("p");
    // taskPriority.textContent = "Priority: " + elem.priority;
    const notesList = document.createElement("ul");
    notesList.classList.add("notes-list");

    /*---------------------------- Add Notes ----------------------------------------------------------------*/
    const addNoteForm = document.createElement("form");
    const noteInput = document.createElement("input");
    const addNoteButton = document.createElement("button");
    addNoteForm.append(noteInput,addNoteButton);
    addNoteButton.textContent = "Add Note";
    addNoteForm.addEventListener("submit",(event) => {
        event.preventDefault()
        while(notesList.firstChild){                 
            notesList.removeChild(notesList.firstChild)
        }
        elem.addNote(noteInput.value);
        (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
        elem.notes.forEach((content,index) => {
            const note = document.createElement("li");
            const noteText = document.createElement("label");
            noteText.htmlFor = `note-${index}`
            note.classList.add("note");
            const checkNote = document.createElement("input");
            checkNote.id = `note-${index}`;
            checkNote.type = "checkbox";
            checkNote.checked = content.checkNote;
            checkNote.addEventListener("click",() => {
                elem.checkNote(index);
                (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)()
            });
            noteText.textContent = content.note;
            note.append(checkNote,noteText);
            notesList.append(note);
        });
    });

    elem.notes.forEach((content,index) => {
        const note = document.createElement("li");
        const noteText = document.createElement("label");
        noteText.htmlFor = `note-${index}`
        note.classList.add("note");
        const checkNote = document.createElement("input");
        checkNote.id = `note-${index}`;
        checkNote.type = "checkbox";
        checkNote.checked = content.checkNote;
        checkNote.addEventListener("click",() => {
            elem.checkNote(index);
            (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)()
        });
        noteText.textContent = content.note;
        note.append(checkNote,noteText);
        notesList.append(note);
    });

    /*---------------------------------------------------------------------------------------------------------*/

    checkboxInput.addEventListener("click", (event) => {
        event.stopImmediatePropagation()
        elem.changeComplete(event.target.checked);
        (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
    })

    const editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.textContent = "Edit";
    editButton.addEventListener("click",(event) => {
        event.stopImmediatePropagation()
        taskContent.classList.remove("taskContent-active");
        taskEdit.classList.add("edit-active");
        taskInfo.classList.add("task-hide")
    })
    const deleteButton = document.createElement("button"); // Button for delete Task
    deleteButton.textContent = "DELETE"
    deleteButton.addEventListener("click",() => {
        const mainContainer = document.querySelector(".tasks-container");
        (0,_classes__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(i);
        resetUiContainer(mainContainer,_classes__WEBPACK_IMPORTED_MODULE_0__.projectSelected,_classes__WEBPACK_IMPORTED_MODULE_0__.projectArray);
        (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
    });
    const buttonContainer = document.createElement("div");
    const nameContainer = document.createElement("div");
    nameContainer.append(checkboxInput,taskName)
    buttonContainer.append(editButton,deleteButton);
    taskInfo.append(nameContainer,taskDate);
    taskContent.append(taskDescription,addNoteForm,notesList,buttonContainer);

    /*------ Edit Form ------*/

    const taskEdit = document.createElement("form");
    taskEdit.classList.add("taskEdit");

    const editName = document.createElement("input");
    editName.value = elem.name;
    const editDate = document.createElement("input");
    editDate.setAttribute("type","date");
    editDate.required = true;
    editDate.value = elem.date;
    const editDescription = document.createElement("textarea");
    editDescription.value = elem.description;

    const prioritySelector = document.createElement("select");
    const optionPriorityLow = document.createElement("option");
    optionPriorityLow.textContent = "Low";
    optionPriorityLow.value = "low";

    const optionPriorityMedium = document.createElement("option");
    optionPriorityMedium.textContent = "Medium";
    optionPriorityMedium.value = "medium";

    const optionPriorityHigh = document.createElement("option");
    optionPriorityHigh.textContent = "High";
    optionPriorityHigh.value = "high";

    prioritySelector.append(optionPriorityLow,optionPriorityMedium,optionPriorityHigh);

    const submitEditBtn = document.createElement("button");
    submitEditBtn.classList.add("submitEditBtn");
    submitEditBtn.textContent = "Accept"
    submitEditBtn.addEventListener("click",(e) => {         /* Confirma los valores a cambiar */
        e.stopImmediatePropagation()
        e.preventDefault()

        task.setAttribute("priority",prioritySelector.value)
        taskName.textContent = "Name: " + editName.value;
        taskDate.textContent = "Due Date: " + editDate.value;
        taskDescription.textContent = "Description: " + editDescription.value;
        // taskPriority.textContent = "Priority: " + prioritySelector.value;
        
        elem.changeName(editName.value);
        elem.changeDate(editDate.value);
        elem.changeDescription(editDescription.value);
        elem.changePriority(prioritySelector.value);
        
        taskEdit.classList.remove("edit-active");
        taskInfo.classList.remove("task-hide");
        (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
    },true)

    taskEdit.append(editName,editDate,editDescription,prioritySelector,submitEditBtn)
    /*------ Edit Form ------*/

    task.append(taskInfo,taskContent,taskEdit);
    return task
}

function resetUiContainer(parent,selected,array) {
    while(parent.firstChild){                 
        parent.removeChild(parent.firstChild)
    }
    array[selected].tasks.forEach((item,i) => {
        const tasks = createTaskUi(item,i);
        parent.append(tasks);
    })
    
}
/* <---------------------------------------------------------------- Menu ----------------------------------------------------------------> */
function todoMenu() {
    const menu = document.createElement("div");

    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "Add Project"
    const buttonImage = document.createElement("img");
    buttonImage.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_1__;
    addProjectButton.append(buttonImage);
    addProjectButton.classList.add("addProject");
    addProjectButton.addEventListener("click", () => {
        addProjectForm.classList.toggle("active");
    });

    const projectButtonsList = document.createElement("ul");
    projectButtonsList.classList.add("projectButtonsSection");

    createProjectButton(_classes__WEBPACK_IMPORTED_MODULE_0__.projectArray,projectButtonsList);

    const addProjectForm = document.createElement("form");
    addProjectForm.classList.add("addProjectForm");
    addProjectForm.addEventListener("submit",(e) => {
        e.preventDefault();
        const projectName = projectTitleInput.value;
        (0,_classes__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName);
        createProjectButton(_classes__WEBPACK_IMPORTED_MODULE_0__.projectArray,projectButtonsList);
        (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
    });
    const projectTitleInput = document.createElement("input")
    const submitProjectButton = document.createElement("button");
    submitProjectButton.textContent = "+"
    addProjectForm.append(projectTitleInput,submitProjectButton);

    /*<---------------------- Week and Month Buttons ----------------------*/

    const weekButton = document.createElement("button");
    weekButton.textContent = "This Week";
    const monthButton = document.createElement("button");
    monthButton.textContent = "This Month";

    weekButton.addEventListener("click",() => {
        let thisWeek = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.filterTasksWeek)();
        let mainContainer = document.querySelector(".tasks-container");
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
        thisWeek.map((task,index) => {
            mainContainer.append(createTaskUi(task,index));
        });
    });

    monthButton.addEventListener("click",() => {
        let thisMonth = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.filterTasksMonth)();
        let mainContainer = document.querySelector(".tasks-container");
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
        thisMonth.map((task,index) => {
            mainContainer.append(createTaskUi(task,index));
        });
    });

    const inboxButton = document.createElement("button");
    inboxButton.textContent = "Inbox";
    inboxButton.addEventListener("click",() => {
        let mainContainer = document.querySelector(".tasks-container");
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
        _classes__WEBPACK_IMPORTED_MODULE_0__.projectArray.map((todo) => {
            todo.tasks.map((task,index) => {
                mainContainer.append(createTaskUi(task,index));
            })
        });
    })

    const listSection = document.createElement("section");
    listSection.classList.add("list-section");
    const listTitle = document.createElement("h2");
    listTitle.textContent = "Projects";
    listSection.append(inboxButton,weekButton,monthButton,listTitle,addProjectButton,addProjectForm,projectButtonsList);

    menu.classList.add("todoMenu");
    menu.append(listSection)
    return menu
};

function createProjectButton(array,parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
    array.forEach((elem,index) => {
        const projectButton = document.createElement("button");
        projectButton.textContent = elem.name;
        projectButton.classList.add("project-button")
        const projectItem = document.createElement("li");

        projectItem.addEventListener("click",() => {
            (0,_classes__WEBPACK_IMPORTED_MODULE_0__.saveSelectedProject)(index)
            const mainContainer = document.querySelector(".tasks-container");
            while(mainContainer.firstChild){
                mainContainer.removeChild(mainContainer.firstChild)
            }
            elem.tasks.forEach((item,i) => {
                const tasks = createTaskUi(item,i);
                mainContainer.append(tasks);
            })
            
        })

        
        projectItem.dataset.project = index;
        projectItem.append(projectButton,deleteProjectButton(array,parent))
        parent.append(projectItem);
    })
}

function deleteProjectButton(array,parent) {
    const deleteProjectButton = document.createElement("button");
        deleteProjectButton.textContent = "X"; //Cambiar por un icono
        deleteProjectButton.addEventListener("click",(event) => {
            event.stopImmediatePropagation()
            ;(0,_classes__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(event);
            createProjectButton(array,parent);
            (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
            const mainContainer = document.querySelector(".tasks-container");
            while(mainContainer.firstChild){
                mainContainer.removeChild(mainContainer.firstChild)
            }
        })
    return deleteProjectButton;
}
/*<-------------------------------- Nav ---------------------------------> */
function navBar() {
    const nav = document.createElement("nav");
    const title = document.createElement("h1");
    title.textContent = "Todo List";
    title.classList.add("nav-title");
    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = _images_calendar_check_svg__WEBPACK_IMPORTED_MODULE_2__;
    const inputFilter = document.createElement("input")
    inputFilter.classList.add("inputFilter");

    nav.append(logo,title,inputFilter);

    return nav
}


/***/ }),

/***/ "./src/images/calendar-check.svg":
/*!***************************************!*\
  !*** ./src/images/calendar-check.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7627dfa4976d51ee938e.svg";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ui */ "./src/components/ui.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");



(0,_components_ui__WEBPACK_IMPORTED_MODULE_0__.createUI)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMaUM7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Ys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LGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQTJDO0FBQ2hCO0FBQzNCO0FBQ0Esd0RBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuOnJvb3Qge1xcclxcblxcdC0tYWRkUHJvamVjdEJ1dHRvbjogcmdiKDY5LCAxNDAsIDI1NSk7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXHJcXG5cXHRmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkOyBcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibmF2IG5hdlxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwibWVudSBtYWluXFxcIjtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoMixhdXRvKTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOmFxdWFtYXJpbmU7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE5hdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbm5hdiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdyaWQtYXJlYTogbmF2O1xcclxcbn1cXHJcXG4ubmF2LXRpdGxle1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdHBhZGRpbmc6IDFyZW0gO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW46IDAgMXJlbTtcXHJcXG59XFxyXFxubmF2IC5sb2dvIHtcXHJcXG5cXHR3aWR0aDogNHJlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxubmF2IC5pbnB1dEZpbHRlciB7XFxyXFxuXFx0d2lkdGg6IDQwJTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVG9kbyBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLnRvZG8tc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuXFx0Z3JpZC1hcmVhOiBtYWluO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi5hZGRUYXNrQnV0dG9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOjA7XFxyXFxuXFx0d2lkdGg6IDNyZW07XFxyXFxuXFx0bWFyZ2luOiAxcmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2Utb3V0LCBmb250LXNpemUgMC4zcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuLmFkZFRhc2tCdXR0b246OmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiTmV3IFRhc2tcXFwiO1xcclxcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAxNTAsIDI0Nik7XFxyXFxuXFx0cGFkZGluZzowIDFyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMC44cmVtO1xcclxcbn1cXHJcXG4uYWRkVGFza0J1dHRvbiBwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYig5NSwgMTUwLCAyNDYpO1xcclxcbn1cXHJcXG4uYWRkVGFza0J1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAxNTAsIDI0Nik7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmFkZFRhc2tCdXR0b246aG92ZXI6OmFmdGVyIHtcXHJcXG5cXHRwYWRkaW5nOjAuNnJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrIEZvcm0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uZm9ybUNvbnRhaW5lcntcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG4udGFza0Zvcm17XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRncmlkLWFyZWE6IG1lbnU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0cGFkZGluZzogMC44cmVtO1xcclxcbn1cXHJcXG4uZm9ybS1maWVsZHNldCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdHBhZGRpbmc6MCAwLjhyZW0gO1xcclxcbn1cXHJcXG4uZm9ybS1maWVsZHNldCBpbnB1dCB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC44cmVtO1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdEZvcm0ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0Rm9ybSBidXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmFkZFByb2plY3RGb3JtIGlucHV0IHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi50YXNrcy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnRhc2sge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdG1pbi13aWR0aDogNjAwcHg7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJsb3dcXFwiXSAudGFza0luZm97XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMCwgMTk1LCAwKSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJtZWRpdW1cXFwiXSAudGFza0luZm97XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjMyLCAyMjUsIDE5KSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJoaWdoXFxcIl0gLnRhc2tJbmZve1xcclxcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDI1NSwgMTcsIDE3KSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrIGlucHV0OmNoZWNrZWQgfiBwIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuLnRhc2sgcCB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0luZm8ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcbi50YXNrSW5mbyBkaXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi50YXNrQ29udGVudCB7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyMDMsIDIwMyk7XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG4ubm90ZXMtbGlzdCB7XFxyXFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0aGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub3RlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCAge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG4udGFza0NvbnRlbnQgZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGVudC1hY3RpdmV7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0aGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuLnRhc2tDb250ZW50LWhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi50YXNrLWhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi50YXNrRWRpdHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcclxcbn1cXHJcXG4uZWRpdC1hY3RpdmUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnByaW9yaXR5RmllbGQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTWVudSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi50b2RvTWVudSB7XFxyXFxuXFx0Z3JpZC1hcmVhOiBtZW51O1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMjAwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTc1LCAyNDApO1xcclxcblxcdHBhZGRpbmc6MCAwLjVyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcbi5saXN0LXNlY3Rpb24ge1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSA7XFxyXFxufVxcclxcbi5saXN0LXNlY3Rpb24gaDIge1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NZW51IC5hZGRQcm9qZWN0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRQcm9qZWN0QnV0dG9uKTtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjNzO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxyXFxuXFx0cGFkZGluZzogMC42cmVtIDtcXHJcXG5cXHRtYXJnaW46IDAuOHJlbSAwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDRweCA7XFxyXFxufVxcclxcblxcclxcbi5hZGRQcm9qZWN0IGltZyB7XFxyXFxuXFx0d2lkdGg6IDJyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0QnV0dG9uc1NlY3Rpb24gbGkge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcbi5wcm9qZWN0QnV0dG9uc1NlY3Rpb24gbGkgYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4IHRyYW5zcGFyZW50O1xcclxcblxcdHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzO1xcclxcbn1cXHJcXG4ucHJvamVjdEJ1dHRvbnNTZWN0aW9uIGxpOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRQcm9qZWN0QnV0dG9uKTtcXHJcXG59XFxyXFxuLnByb2plY3RCdXR0b25zU2VjdGlvbiBsaSBidXR0b246aG92ZXIge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NZW51IC5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweCB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcztcXHJcXG59XFxyXFxuLnRvZG9NZW51IC5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4IGJsYWNrO1xcclxcblxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSxvRUFBb0U7QUFDcEU7Q0FDQyxxQ0FBcUM7QUFDdEM7QUFDQTtDQUNDLDhCQUE4QjtDQUM5QixvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGFBQWE7Q0FDYjtpQkFDZ0I7Q0FDaEIsK0JBQStCO0NBQy9CLGlDQUFpQztDQUNqQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLDJCQUEyQjtBQUM1Qjs7QUFFQSwwRUFBMEU7O0FBRTFFO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0FBQ2xC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Q0MseUNBQXlDO0FBQzFDO0FBQ0E7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsMENBQTBDO0NBQzFDLGdDQUFnQztBQUNqQztBQUNBO0NBQ0Msb0NBQW9DOztBQUVyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuOnJvb3Qge1xcclxcblxcdC0tYWRkUHJvamVjdEJ1dHRvbjogcmdiKDY5LCAxNDAsIDI1NSk7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXHJcXG5cXHRmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkOyBcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibmF2IG5hdlxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwibWVudSBtYWluXFxcIjtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoMixhdXRvKTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOmFxdWFtYXJpbmU7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE5hdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbm5hdiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdyaWQtYXJlYTogbmF2O1xcclxcbn1cXHJcXG4ubmF2LXRpdGxle1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdHBhZGRpbmc6IDFyZW0gO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW46IDAgMXJlbTtcXHJcXG59XFxyXFxubmF2IC5sb2dvIHtcXHJcXG5cXHR3aWR0aDogNHJlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxubmF2IC5pbnB1dEZpbHRlciB7XFxyXFxuXFx0d2lkdGg6IDQwJTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVG9kbyBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLnRvZG8tc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuXFx0Z3JpZC1hcmVhOiBtYWluO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi5hZGRUYXNrQnV0dG9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOjA7XFxyXFxuXFx0d2lkdGg6IDNyZW07XFxyXFxuXFx0bWFyZ2luOiAxcmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2Utb3V0LCBmb250LXNpemUgMC4zcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuLmFkZFRhc2tCdXR0b246OmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiTmV3IFRhc2tcXFwiO1xcclxcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAxNTAsIDI0Nik7XFxyXFxuXFx0cGFkZGluZzowIDFyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMC44cmVtO1xcclxcbn1cXHJcXG4uYWRkVGFza0J1dHRvbiBwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYig5NSwgMTUwLCAyNDYpO1xcclxcbn1cXHJcXG4uYWRkVGFza0J1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAxNTAsIDI0Nik7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmFkZFRhc2tCdXR0b246aG92ZXI6OmFmdGVyIHtcXHJcXG5cXHRwYWRkaW5nOjAuNnJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrIEZvcm0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uZm9ybUNvbnRhaW5lcntcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG4udGFza0Zvcm17XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRncmlkLWFyZWE6IG1lbnU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0cGFkZGluZzogMC44cmVtO1xcclxcbn1cXHJcXG4uZm9ybS1maWVsZHNldCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdHBhZGRpbmc6MCAwLjhyZW0gO1xcclxcbn1cXHJcXG4uZm9ybS1maWVsZHNldCBpbnB1dCB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC44cmVtO1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdEZvcm0ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0Rm9ybSBidXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmFkZFByb2plY3RGb3JtIGlucHV0IHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi50YXNrcy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnRhc2sge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdG1pbi13aWR0aDogNjAwcHg7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJsb3dcXFwiXSAudGFza0luZm97XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMCwgMTk1LCAwKSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJtZWRpdW1cXFwiXSAudGFza0luZm97XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjMyLCAyMjUsIDE5KSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJoaWdoXFxcIl0gLnRhc2tJbmZve1xcclxcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDI1NSwgMTcsIDE3KSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrIGlucHV0OmNoZWNrZWQgfiBwIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuLnRhc2sgcCB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0luZm8ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcbi50YXNrSW5mbyBkaXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi50YXNrQ29udGVudCB7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyMDMsIDIwMyk7XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG4ubm90ZXMtbGlzdCB7XFxyXFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0aGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub3RlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCAge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG4udGFza0NvbnRlbnQgZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGVudC1hY3RpdmV7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0aGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuLnRhc2tDb250ZW50LWhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi50YXNrLWhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi50YXNrRWRpdHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcclxcbn1cXHJcXG4uZWRpdC1hY3RpdmUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnByaW9yaXR5RmllbGQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTWVudSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi50b2RvTWVudSB7XFxyXFxuXFx0Z3JpZC1hcmVhOiBtZW51O1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMjAwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTc1LCAyNDApO1xcclxcblxcdHBhZGRpbmc6MCAwLjVyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcbi5saXN0LXNlY3Rpb24ge1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSA7XFxyXFxufVxcclxcbi5saXN0LXNlY3Rpb24gaDIge1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NZW51IC5hZGRQcm9qZWN0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRQcm9qZWN0QnV0dG9uKTtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjNzO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxyXFxuXFx0cGFkZGluZzogMC42cmVtIDtcXHJcXG5cXHRtYXJnaW46IDAuOHJlbSAwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDRweCA7XFxyXFxufVxcclxcblxcclxcbi5hZGRQcm9qZWN0IGltZyB7XFxyXFxuXFx0d2lkdGg6IDJyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0QnV0dG9uc1NlY3Rpb24gbGkge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcbi5wcm9qZWN0QnV0dG9uc1NlY3Rpb24gbGkgYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4IHRyYW5zcGFyZW50O1xcclxcblxcdHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzO1xcclxcbn1cXHJcXG4ucHJvamVjdEJ1dHRvbnNTZWN0aW9uIGxpOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRQcm9qZWN0QnV0dG9uKTtcXHJcXG59XFxyXFxuLnByb2plY3RCdXR0b25zU2VjdGlvbiBsaSBidXR0b246aG92ZXIge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NZW51IC5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweCB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcztcXHJcXG59XFxyXFxuLnRvZG9NZW51IC5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4IGJsYWNrO1xcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgU2VwdGVtYmVyIDIwMTQgYW5kIDI1IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiksIG5ldyBEYXRlKDIwMTQsIDgsIDI1KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBTZXB0ZW1iZXIgMjAxNCBhbmQgMjUgU2VwdGVtYmVyIDIwMTUgaW4gdGhlIHNhbWUgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyKSwgbmV3IERhdGUoMjAxNSwgOCwgMjUpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZU1vbnRoKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVNb250aCBmcm9tIFwiLi4vaXNTYW1lTW9udGgvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVGhpc01vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgbW9udGggYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtb250aCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDE1IFNlcHRlbWJlciAyMDE0IGluIHRoaXMgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAxNSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVNb250aChEYXRlLm5vdygpLCBkaXJ0eURhdGUpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBpc1RoaXNXZWVrLCBpc1RoaXNNb250aCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xyXG5leHBvcnQgbGV0IHByb2plY3RTZWxlY3RlZCA9IDA7XHJcbmNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSxkYXRlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGNvbXBsZXRlLG5vdGVzID0gW10pe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTmFtZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURhdGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VEZXNjcmlwdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVByaW9yaXR5KHZhbHVlKXtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQ29tcGxldGUodmFsdWUpe1xyXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGROb3RlKG5vdGUpe1xyXG4gICAgICAgIHRoaXMubm90ZXMucHVzaCh7bm90ZSxjaGVja05vdGU6IGZhbHNlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTm90ZShpbmRleCkge1xyXG4gICAgICAgIHRoaXMubm90ZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgfVxyXG4gICAgY2hlY2tOb3RlKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5ub3Rlc1tpbmRleF0uY2hlY2tOb3RlID0gIXRoaXMubm90ZXNbaW5kZXhdLmNoZWNrTm90ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vdGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcm9zc05vdGUoaW5kZXgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLHRhc2tzKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVUYXNrKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsMSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNlbGVjdGVkUHJvamVjdChpbmRleCkge1xyXG4gICAgcHJvamVjdFNlbGVjdGVkID0gaW5kZXg7XHJcbn1cclxuXHJcbi8qPC0tLS0tLS0tLS0tLS0tIENyZWF0ZSBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0+ICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lLGRhdGUsZGVzY3JpcHRpb24scHJpb3JpdHksY29tcGxldGUsbm90ZXMpIHtcclxuICAgIHJldHVybiBuZXcgVG9kbyhuYW1lLGRhdGUsZGVzY3JpcHRpb24scHJpb3JpdHksY29tcGxldGUsbm90ZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSxbXSk7XHJcbiAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8odG9kbyl7XHJcbiAgICBwcm9qZWN0QXJyYXlbcHJvamVjdFNlbGVjdGVkXS5hZGRUYXNrKHRvZG8pXHJcbn1cclxuXHJcbi8qPC0tLS0tLS0tLS0tLS0tIERlbGV0ZSBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0+ICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChldmVudCl7XHJcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKVxyXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2osaW5kZXgpID0+IHtcclxuICAgICAgICBpZih0YXJnZXRJbmRleCA9PSBpbmRleCl7XHJcbiAgICAgICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soaW5kZXgpIHtcclxuICAgIHByb2plY3RBcnJheVtwcm9qZWN0U2VsZWN0ZWRdLnJlbW92ZVRhc2soaW5kZXgpXHJcbn0gICBcclxuXHJcbi8qPC0tLS0tLS0tLS0tLS0tIEluaXRpYWwgcHJvamVjdCB3aXRoIHRhc2tzIC0tLS0tLS0tLS0tLS0tPiAqL1xyXG5cclxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpe1xyXG4gICAgY3JlYXRlUHJvamVjdChcIlRlc3RcIik7XHJcbiAgICBjcmVhdGVUb2RvKGNyZWF0ZVRhc2soXCJUZXN0XCIsXCIyMDIyLTEyLTA3XCIsXCJmYWZhXCIsXCJsb3dcIixmYWxzZSkpXHJcbn1cclxuXHJcbi8qPC0tLS0tLS0tLS0tLS0tIGxvY2FsU3RvcmFnZSAtLS0tLS0tLS0tLS0tLT4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgbmV3QXJyYXkgPSBwcm9qZWN0QXJyYXk7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLEpTT04uc3RyaW5naWZ5KG5ld0FycmF5KSlcclxufTtcclxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCkge1xyXG4gICAgbGV0IGdldEFycmF5ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbiAgICBpZihnZXRBcnJheSAhPSBudWxsKXtcclxuICAgICAgICBnZXRBcnJheS5mb3JFYWNoKChwcm9qZWN0LGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdC5uYW1lKTtcclxuICAgICAgICAgICAgcHJvamVjdFNlbGVjdGVkID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrICA9PiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUb2RvKGNyZWF0ZVRhc2sodGFzay5uYW1lLHRhc2suZGF0ZSx0YXNrLmRlc2NyaXB0aW9uLHRhc2sucHJpb3JpdHksdGFzay5jb21wbGV0ZSx0YXNrLm5vdGVzKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuLyo8LS0tLS0tLS0tLS0tLS0gRmlsdGVyIGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLT4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJUYXNrc1dlZWsoKSB7XHJcbiAgICBsZXQgdGhpc1dlZWsgPSBbXTtcclxuICAgIHByb2plY3RBcnJheS5tYXAodG9kbyA9PiB7XHJcbiAgICAgICAgdG9kby50YXNrcy5tYXAodGFzayA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlID0gcGFyc2VJU08odGFzay5kYXRlKTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGlzVGhpc1dlZWsoZGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNXZWVrLnB1c2godGFzayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpc1dlZWs7XHJcbn0gICBcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclRhc2tzTW9udGgoKSB7XHJcbiAgICBsZXQgdGhpc01vbnRoID0gW107XHJcbiAgICBwcm9qZWN0QXJyYXkubWFwKHRvZG8gPT4ge1xyXG4gICAgICAgIHRvZG8udGFza3MubWFwKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IHBhcnNlSVNPKHRhc2suZGF0ZSk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBpc1RoaXNNb250aChkYXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpc01vbnRoLnB1c2godGFzayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpc01vbnRoO1xyXG59XHJcbmdldExvY2FsU3RvcmFnZSgpO1xyXG5cclxuLy8gcHJvamVjdEFycmF5WzBdLnRhc2tzWzFdLmFkZE5vdGUoXCJFc3RvIGVzIHVuYSBub3RhXCIpO1xyXG4vLyBwcm9qZWN0QXJyYXlbMF0udGFza3NbMV0uYWRkTm90ZShcIlkgZXN0YSBlcyBvdHJhIDpQXCIpO1xyXG4vLyBwcm9qZWN0QXJyYXlbMF0udGFza3NbMV0uYWRkTm90ZShcIkJvcnJlbW9zIGVzdGFcIik7XHJcbi8vIHByb2plY3RBcnJheVswXS50YXNrc1sxXS5yZW1vdmVOb3RlKDEpXHJcbi8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheVswXS50YXNrc1sxXSk7IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBzYXZlU2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0U2VsZWN0ZWQgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcbmltcG9ydCB7IHNldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuaW1wb3J0IHsgZmlsdGVyVGFza3NXZWVrLGZpbHRlclRhc2tzTW9udGggfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcbmltcG9ydCBwbHVzIGZyb20gXCIuLi9pbWFnZXMvcGx1cy5zdmdcIjtcclxuaW1wb3J0IGNhbGVuZGFyIGZyb20gXCIuLi9pbWFnZXMvY2FsZW5kYXItY2hlY2suc3ZnXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVSSgpe1xyXG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIHJvb3QuYXBwZW5kKG5hdkJhcigpLHRvZG9NZW51KCksdG9kb1NlY3Rpb24oKSlcclxufVxyXG4vKjwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRvZG8gc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xyXG5mdW5jdGlvbiB0b2RvU2VjdGlvbigpe1xyXG4gICAgY29uc3QgYWRkVGFza1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkVGFza1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRvZG8tc2VjdGlvblwiKTtcclxuXHJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza3MtY29udGFpbmVyXCIpXHJcblxyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBidXR0b25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tCdXR0b25cIilcclxuICAgIGJ1dHRvbkltZy5zcmMgPSBwbHVzO1xyXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tGb3JtXCIpO1xyXG4gICAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcclxuICAgIH0pO1xyXG4gICAgYWRkVGFza0J1dHRvbi5hcHBlbmQoYnV0dG9uSW1nKTtcclxuICAgIGFkZFRhc2tTZWN0aW9uLmFwcGVuZChhZGRUYXNrQnV0dG9uLHRhc2tGb3JtKCksdGFza3NDb250YWluZXIpO1xyXG4gICAgcmV0dXJuIGFkZFRhc2tTZWN0aW9uO1xyXG59XHJcblxyXG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrIEZvcm0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4gKi9cclxuZnVuY3Rpb24gdGFza0Zvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1Db250YWluZXJcIilcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2tGb3JtXCIpO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2hpbGUobWFpbi5maXJzdENoaWxkKXtcclxuICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb2plY3RBcnJheVtwcm9qZWN0U2VsZWN0ZWRdKXtcclxuICAgICAgICAgICAgY3JlYXRlVG9kbyhjcmVhdGVUYXNrKG5hbWVJbnB1dC52YWx1ZSxkYXRlSW5wdXQudmFsdWUsZGVzY3JpcHRpb25BcmVhLnZhbHVlLHByaW9yaXR5U2VsZWN0b3IudmFsdWUpKTtcclxuICAgICAgICAgICAgcHJvamVjdEFycmF5W3Byb2plY3RTZWxlY3RlZF0udGFza3MubWFwKChlbGVtLGkpID0+IHtcclxuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kKGNyZWF0ZVRhc2tVaShlbGVtLGkpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0sdHJ1ZSlcclxuXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5hbWVcIjtcclxuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xyXG4gICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmFtZUlucHV0XCIpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgZGVzY3JpcHRpb25BcmVhLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gICAgZGVzY3JpcHRpb25BcmVhLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbkFyZWFcIik7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJkYXRlXCIpO1xyXG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkYXRlSW5wdXRcIik7XHJcbiAgICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlTZWxlY3RvclwiKVxyXG4gICAgY29uc3Qgb3B0aW9uUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlMb3cudmFsdWUgPSBcImxvd1wiO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvblByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvblByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcclxuICAgIG9wdGlvblByaW9yaXR5TWVkaXVtLnZhbHVlID0gXCJtZWRpdW1cIjtcclxuXHJcbiAgICBjb25zdCBvcHRpb25Qcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcbiAgICBvcHRpb25Qcmlvcml0eUhpZ2gudmFsdWUgPSBcImhpZ2hcIjtcclxuXHJcbiAgICBwcmlvcml0eVNlbGVjdG9yLmFwcGVuZChvcHRpb25Qcmlvcml0eUxvdyxvcHRpb25Qcmlvcml0eU1lZGl1bSxvcHRpb25Qcmlvcml0eUhpZ2gpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdEJ1dHRvblwiKVxyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIlxyXG4gICAgXHJcbiAgICBjb25zdCBmb3JtRmllbGRzZXRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgICBmb3JtRmllbGRzZXRPbmUuY2xhc3NMaXN0LmFkZChcImZvcm0tZmllbGRzZXRcIik7XHJcbiAgICBmb3JtRmllbGRzZXRPbmUuYXBwZW5kKG5hbWVJbnB1dCxkZXNjcmlwdGlvbkFyZWEpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1GaWVsZHNldFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICAgIGZvcm1GaWVsZHNldFR3by5jbGFzc0xpc3QuYWRkKFwiZm9ybS1maWVsZHNldFwiKTtcclxuICAgIGNvbnN0IHNlbGVjdG9yRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgICBzZWxlY3RvckZpZWxkc2V0LmFwcGVuZChwcmlvcml0eVNlbGVjdG9yKVxyXG4gICAgZm9ybUZpZWxkc2V0VHdvLmFwcGVuZChkYXRlSW5wdXQsc2VsZWN0b3JGaWVsZHNldCxzdWJtaXRCdXR0b24pO1xyXG5cclxuXHJcbiAgICBmb3JtLmFwcGVuZChmb3JtRmllbGRzZXRPbmUsZm9ybUZpZWxkc2V0VHdvKTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcclxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xyXG59XHJcblxyXG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrIFVJIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+ICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza1VpKGVsZW0saSl7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICAgIHRhc2suc2V0QXR0cmlidXRlKFwiaWRcIixpKTtcclxuICAgIHRhc2suc2V0QXR0cmlidXRlKFwicHJpb3JpdHlcIixlbGVtLnByaW9yaXR5KTtcclxuXHJcblxyXG4gICAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKFwidGFza0luZm9cIik7XHJcbiAgICB0YXNrSW5mby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB0YXNrQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwidGFza0NvbnRlbnQtYWN0aXZlXCIpKTtcclxuXHJcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRlbnRcIilcclxuICAgIGNvbnN0IGNoZWNrYm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGNoZWNrYm94SW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoZWNrYm94SW5wdXQuY2hlY2tlZCA9IGVsZW0uY29tcGxldGU7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6IFwiICsgZWxlbS5uYW1lO1xyXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCIgKyBlbGVtLmRhdGU7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiICsgZWxlbS5kZXNjcmlwdGlvbjtcclxuICAgIC8vIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgLy8gdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCIgKyBlbGVtLnByaW9yaXR5O1xyXG4gICAgY29uc3Qgbm90ZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgbm90ZXNMaXN0LmNsYXNzTGlzdC5hZGQoXCJub3Rlcy1saXN0XCIpO1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBZGQgTm90ZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBjb25zdCBhZGROb3RlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgY29uc3Qgbm90ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY29uc3QgYWRkTm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGROb3RlRm9ybS5hcHBlbmQobm90ZUlucHV0LGFkZE5vdGVCdXR0b24pO1xyXG4gICAgYWRkTm90ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIE5vdGVcIjtcclxuICAgIGFkZE5vdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgd2hpbGUobm90ZXNMaXN0LmZpcnN0Q2hpbGQpeyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5vdGVzTGlzdC5yZW1vdmVDaGlsZChub3Rlc0xpc3QuZmlyc3RDaGlsZClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbS5hZGROb3RlKG5vdGVJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgZWxlbS5ub3Rlcy5mb3JFYWNoKChjb250ZW50LGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICBub3RlVGV4dC5odG1sRm9yID0gYG5vdGUtJHtpbmRleH1gXHJcbiAgICAgICAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZChcIm5vdGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgY2hlY2tOb3RlLmlkID0gYG5vdGUtJHtpbmRleH1gO1xyXG4gICAgICAgICAgICBjaGVja05vdGUudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgY2hlY2tOb3RlLmNoZWNrZWQgPSBjb250ZW50LmNoZWNrTm90ZTtcclxuICAgICAgICAgICAgY2hlY2tOb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uY2hlY2tOb3RlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHNldExvY2FsU3RvcmFnZSgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBub3RlVGV4dC50ZXh0Q29udGVudCA9IGNvbnRlbnQubm90ZTtcclxuICAgICAgICAgICAgbm90ZS5hcHBlbmQoY2hlY2tOb3RlLG5vdGVUZXh0KTtcclxuICAgICAgICAgICAgbm90ZXNMaXN0LmFwcGVuZChub3RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVsZW0ubm90ZXMuZm9yRWFjaCgoY29udGVudCxpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgY29uc3Qgbm90ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgbm90ZVRleHQuaHRtbEZvciA9IGBub3RlLSR7aW5kZXh9YFxyXG4gICAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZChcIm5vdGVcIik7XHJcbiAgICAgICAgY29uc3QgY2hlY2tOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGNoZWNrTm90ZS5pZCA9IGBub3RlLSR7aW5kZXh9YDtcclxuICAgICAgICBjaGVja05vdGUudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICBjaGVja05vdGUuY2hlY2tlZCA9IGNvbnRlbnQuY2hlY2tOb3RlO1xyXG4gICAgICAgIGNoZWNrTm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uY2hlY2tOb3RlKGluZGV4KTtcclxuICAgICAgICAgICAgc2V0TG9jYWxTdG9yYWdlKClcclxuICAgICAgICB9KTtcclxuICAgICAgICBub3RlVGV4dC50ZXh0Q29udGVudCA9IGNvbnRlbnQubm90ZTtcclxuICAgICAgICBub3RlLmFwcGVuZChjaGVja05vdGUsbm90ZVRleHQpO1xyXG4gICAgICAgIG5vdGVzTGlzdC5hcHBlbmQobm90ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgY2hlY2tib3hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICBlbGVtLmNoYW5nZUNvbXBsZXRlKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0QnV0dG9uXCIpO1xyXG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xyXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrQ29udGVudC1hY3RpdmVcIik7XHJcbiAgICAgICAgdGFza0VkaXQuY2xhc3NMaXN0LmFkZChcImVkaXQtYWN0aXZlXCIpO1xyXG4gICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhpZGVcIilcclxuICAgIH0pXHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyAvLyBCdXR0b24gZm9yIGRlbGV0ZSBUYXNrXHJcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiXHJcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBkZWxldGVUYXNrKGkpO1xyXG4gICAgICAgIHJlc2V0VWlDb250YWluZXIobWFpbkNvbnRhaW5lcixwcm9qZWN0U2VsZWN0ZWQscHJvamVjdEFycmF5KTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmFtZUNvbnRhaW5lci5hcHBlbmQoY2hlY2tib3hJbnB1dCx0YXNrTmFtZSlcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZWRpdEJ1dHRvbixkZWxldGVCdXR0b24pO1xyXG4gICAgdGFza0luZm8uYXBwZW5kKG5hbWVDb250YWluZXIsdGFza0RhdGUpO1xyXG4gICAgdGFza0NvbnRlbnQuYXBwZW5kKHRhc2tEZXNjcmlwdGlvbixhZGROb3RlRm9ybSxub3Rlc0xpc3QsYnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgICAvKi0tLS0tLSBFZGl0IEZvcm0gLS0tLS0tKi9cclxuXHJcbiAgICBjb25zdCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgdGFza0VkaXQuY2xhc3NMaXN0LmFkZChcInRhc2tFZGl0XCIpO1xyXG5cclxuICAgIGNvbnN0IGVkaXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZWRpdE5hbWUudmFsdWUgPSBlbGVtLm5hbWU7XHJcbiAgICBjb25zdCBlZGl0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVkaXREYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImRhdGVcIik7XHJcbiAgICBlZGl0RGF0ZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBlZGl0RGF0ZS52YWx1ZSA9IGVsZW0uZGF0ZTtcclxuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIGVkaXREZXNjcmlwdGlvbi52YWx1ZSA9IGVsZW0uZGVzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBjb25zdCBvcHRpb25Qcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb25Qcmlvcml0eUxvdy50ZXh0Q29udGVudCA9IFwiTG93XCI7XHJcbiAgICBvcHRpb25Qcmlvcml0eUxvdy52YWx1ZSA9IFwibG93XCI7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uUHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlNZWRpdW0udGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlNZWRpdW0udmFsdWUgPSBcIm1lZGl1bVwiO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvblByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb25Qcmlvcml0eUhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcclxuICAgIG9wdGlvblByaW9yaXR5SGlnaC52YWx1ZSA9IFwiaGlnaFwiO1xyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0b3IuYXBwZW5kKG9wdGlvblByaW9yaXR5TG93LG9wdGlvblByaW9yaXR5TWVkaXVtLG9wdGlvblByaW9yaXR5SGlnaCk7XHJcblxyXG4gICAgY29uc3Qgc3VibWl0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRFZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRFZGl0QnRuXCIpO1xyXG4gICAgc3VibWl0RWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiQWNjZXB0XCJcclxuICAgIHN1Ym1pdEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpID0+IHsgICAgICAgICAvKiBDb25maXJtYSBsb3MgdmFsb3JlcyBhIGNhbWJpYXIgKi9cclxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKFwicHJpb3JpdHlcIixwcmlvcml0eVNlbGVjdG9yLnZhbHVlKVxyXG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gXCJOYW1lOiBcIiArIGVkaXROYW1lLnZhbHVlO1xyXG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCIgKyBlZGl0RGF0ZS52YWx1ZTtcclxuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGVkaXREZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgICAvLyB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIiArIHByaW9yaXR5U2VsZWN0b3IudmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxlbS5jaGFuZ2VOYW1lKGVkaXROYW1lLnZhbHVlKTtcclxuICAgICAgICBlbGVtLmNoYW5nZURhdGUoZWRpdERhdGUudmFsdWUpO1xyXG4gICAgICAgIGVsZW0uY2hhbmdlRGVzY3JpcHRpb24oZWRpdERlc2NyaXB0aW9uLnZhbHVlKTtcclxuICAgICAgICBlbGVtLmNoYW5nZVByaW9yaXR5KHByaW9yaXR5U2VsZWN0b3IudmFsdWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRhc2tFZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0LWFjdGl2ZVwiKTtcclxuICAgICAgICB0YXNrSW5mby5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1oaWRlXCIpO1xyXG4gICAgICAgIHNldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgfSx0cnVlKVxyXG5cclxuICAgIHRhc2tFZGl0LmFwcGVuZChlZGl0TmFtZSxlZGl0RGF0ZSxlZGl0RGVzY3JpcHRpb24scHJpb3JpdHlTZWxlY3RvcixzdWJtaXRFZGl0QnRuKVxyXG4gICAgLyotLS0tLS0gRWRpdCBGb3JtIC0tLS0tLSovXHJcblxyXG4gICAgdGFzay5hcHBlbmQodGFza0luZm8sdGFza0NvbnRlbnQsdGFza0VkaXQpO1xyXG4gICAgcmV0dXJuIHRhc2tcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRVaUNvbnRhaW5lcihwYXJlbnQsc2VsZWN0ZWQsYXJyYXkpIHtcclxuICAgIHdoaWxlKHBhcmVudC5maXJzdENoaWxkKXsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZClcclxuICAgIH1cclxuICAgIGFycmF5W3NlbGVjdGVkXS50YXNrcy5mb3JFYWNoKChpdGVtLGkpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrcyA9IGNyZWF0ZVRhc2tVaShpdGVtLGkpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmQodGFza3MpO1xyXG4gICAgfSlcclxuICAgIFxyXG59XHJcbi8qIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE1lbnUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4gKi9cclxuZnVuY3Rpb24gdG9kb01lbnUoKSB7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCJcclxuICAgIGNvbnN0IGJ1dHRvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGJ1dHRvbkltYWdlLnNyYyA9IHBsdXM7XHJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZChidXR0b25JbWFnZSk7XHJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0XCIpO1xyXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFkZFByb2plY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBwcm9qZWN0QnV0dG9uc0xpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RCdXR0b25zU2VjdGlvblwiKTtcclxuXHJcbiAgICBjcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3RBcnJheSxwcm9qZWN0QnV0dG9uc0xpc3QpO1xyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICBhZGRQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvamVjdEZvcm1cIik7XHJcbiAgICBhZGRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3RBcnJheSxwcm9qZWN0QnV0dG9uc0xpc3QpO1xyXG4gICAgICAgIHNldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgY29uc3Qgc3VibWl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCJcclxuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZChwcm9qZWN0VGl0bGVJbnB1dCxzdWJtaXRQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgICAvKjwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdlZWsgYW5kIE1vbnRoIEJ1dHRvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgY29uc3Qgd2Vla0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICB3ZWVrQnV0dG9uLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIjtcclxuICAgIGNvbnN0IG1vbnRoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG1vbnRoQnV0dG9uLnRleHRDb250ZW50ID0gXCJUaGlzIE1vbnRoXCI7XHJcblxyXG4gICAgd2Vla0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRoaXNXZWVrID0gZmlsdGVyVGFza3NXZWVrKCk7XHJcbiAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lclwiKTtcclxuICAgICAgICB3aGlsZSAobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpc1dlZWsubWFwKCh0YXNrLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKGNyZWF0ZVRhc2tVaSh0YXNrLGluZGV4KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb250aEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRoaXNNb250aCA9IGZpbHRlclRhc2tzTW9udGgoKTtcclxuICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHdoaWxlIChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzTW9udGgubWFwKCh0YXNrLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKGNyZWF0ZVRhc2tVaSh0YXNrLGluZGV4KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbmJveEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBpbmJveEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcclxuICAgIGluYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHdoaWxlIChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9qZWN0QXJyYXkubWFwKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgICAgIHRvZG8udGFza3MubWFwKCh0YXNrLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChjcmVhdGVUYXNrVWkodGFzayxpbmRleCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBsaXN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgbGlzdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImxpc3Qtc2VjdGlvblwiKTtcclxuICAgIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcclxuICAgIGxpc3RTZWN0aW9uLmFwcGVuZChpbmJveEJ1dHRvbix3ZWVrQnV0dG9uLG1vbnRoQnV0dG9uLGxpc3RUaXRsZSxhZGRQcm9qZWN0QnV0dG9uLGFkZFByb2plY3RGb3JtLHByb2plY3RCdXR0b25zTGlzdCk7XHJcblxyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwidG9kb01lbnVcIik7XHJcbiAgICBtZW51LmFwcGVuZChsaXN0U2VjdGlvbilcclxuICAgIHJldHVybiBtZW51XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QnV0dG9uKGFycmF5LHBhcmVudCl7XHJcbiAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKVxyXG4gICAgfVxyXG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlbSxpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBlbGVtLm5hbWU7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIilcclxuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcbiAgICAgICAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlU2VsZWN0ZWRQcm9qZWN0KGluZGV4KVxyXG4gICAgICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIHdoaWxlKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtLnRhc2tzLmZvckVhY2goKGl0ZW0saSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza3MgPSBjcmVhdGVUYXNrVWkoaXRlbSxpKTtcclxuICAgICAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRhc2tzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvamVjdEl0ZW0uZGF0YXNldC5wcm9qZWN0ID0gaW5kZXg7XHJcbiAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kKHByb2plY3RCdXR0b24sZGVsZXRlUHJvamVjdEJ1dHRvbihhcnJheSxwYXJlbnQpKVxyXG4gICAgICAgIHBhcmVudC5hcHBlbmQocHJvamVjdEl0ZW0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEJ1dHRvbihhcnJheSxwYXJlbnQpIHtcclxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjsgLy9DYW1iaWFyIHBvciB1biBpY29ub1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoZXZlbnQpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uKGFycmF5LHBhcmVudCk7XHJcbiAgICAgICAgICAgIHNldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIHdoaWxlKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICByZXR1cm4gZGVsZXRlUHJvamVjdEJ1dHRvbjtcclxufVxyXG4vKjwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBOYXYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xyXG5mdW5jdGlvbiBuYXZCYXIoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVG9kbyBMaXN0XCI7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibmF2LXRpdGxlXCIpO1xyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG4gICAgbG9nby5zcmMgPSBjYWxlbmRhcjtcclxuICAgIGNvbnN0IGlucHV0RmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBpbnB1dEZpbHRlci5jbGFzc0xpc3QuYWRkKFwiaW5wdXRGaWx0ZXJcIik7XHJcblxyXG4gICAgbmF2LmFwcGVuZChsb2dvLHRpdGxlLGlucHV0RmlsdGVyKTtcclxuXHJcbiAgICByZXR1cm4gbmF2XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZVVJIH0gZnJvbSBcIi4vY29tcG9uZW50cy91aVwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9tYWluLmNzc1wiO1xyXG5cclxuY3JlYXRlVUkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
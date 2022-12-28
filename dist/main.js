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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/*-----------------------------------------------------------------*/\r\n:root {\r\n\t--addProjectButton: rgb(69, 140, 255);\r\n}\r\nbody {\r\n\tbackground-color: antiquewhite;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\n#content {\r\n\tdisplay: grid; \r\n\tgrid-template-areas: \"nav nav\"\r\n\t\t\t\t\t\t\"menu main\";\r\n\tgrid-template-columns: auto 1fr;\r\n\tgrid-template-rows:repeat(2,auto);\r\n\talign-items: center;\r\n\tposition: relative;\r\n\tbackground-color:aquamarine;\r\n}\r\n\r\n/*--------------------------------- Nav ---------------------------------*/\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgrid-area: nav;\r\n}\r\n.nav-title{\r\n\tfont-size: 2rem;\r\n\tfont-weight: 600;\r\n\tpadding: 1rem ;\r\n\ttext-align: center;\r\n\tmargin: 0 1rem;\r\n}\r\nnav .logo {\r\n\twidth: 4rem;\r\n\tpadding: 0.5rem;\r\n\tmargin-left: 0.5rem;\r\n}\r\nnav .inputFilter {\r\n\twidth: 40%;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n/*--------------------------------- Todo section ---------------------------------*/\r\n\r\n.todo-section {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\r\n\tgrid-area: main;\r\n\tbackground-color: white;\r\n\theight: 100vh;\r\n}\r\n.addTaskButton {\r\n\twidth: 3rem;\r\n\tmargin: 1rem;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid black;\r\n\ttransition: transform 0.3s, background-color 0.3s ease-out;\r\n}\r\n.addTaskButton:hover {\r\n\tbackground-color: rgb(95, 150, 246);\r\n\ttransform: scale(1.2);\r\n}\r\n\r\n/*--------------------------------- Task Form ---------------------------------*/\r\n.formContainer{\r\n\tpadding: 1rem;\r\n}\r\n.taskForm{\r\n\tdisplay: none;\r\n\tgrid-area: menu;\r\n\tborder: 1px solid black;\r\n\tpadding: 0.8rem;\r\n}\r\n.form-fieldset {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tpadding:0 0.8rem ;\r\n}\r\n.form-fieldset input {\r\n\tmargin-bottom: 0.8rem;\r\n}\r\n.addProjectForm {\r\n\tdisplay: none;\r\n}\r\n.addProjectForm button {\r\n\tfont-size: 1rem;\r\n}\r\n.addProjectForm input {\r\n\tpadding: 0.5rem;\r\n\tborder: none;\r\n}\r\n.active {\r\n\tdisplay: flex;\r\n\talign-items: flex-start;\r\n}\r\n\r\n/*--------------------------------- Tasks ---------------------------------*/\r\n\r\n.tasks-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n.task {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 1rem;\r\n\tmin-width: 600px;\r\n}\r\n.task[priority=\"low\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(0, 195, 0) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task[priority=\"medium\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(232, 225, 19) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task[priority=\"high\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(255, 17, 17) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task input:checked ~ p {\r\n\ttext-decoration: line-through;\r\n}\r\n.task p {\r\n\tpadding: 0.5rem;\r\n}\r\n\r\n.taskInfo {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid black;\r\n\tborder-radius: 0.5rem;\r\n\tpadding: 1rem;\r\n}\r\n.taskInfo div {\r\n\tdisplay: flex;\r\n}\r\n.taskContent {\r\n\t\r\n\toverflow: hidden;\r\n\tbackground-color: rgb(203, 203, 203);\r\n\tmax-height: 0;\r\n\ttransition: max-height 0.3s ease-out;\r\n}\r\n.taskContent div {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n.taskContent-active{\r\n\tdisplay: block;\r\n\tmax-height: 100px;\r\n}\r\n.taskContent-hide {\r\n\tdisplay: none;\r\n}\r\n.task-hide {\r\n\tdisplay: none;\r\n}\r\n.taskEdit{\r\n\tdisplay: none;\r\n\t\r\n}\r\n.edit-active {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.priorityField {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n/*--------------------------------- Menu ---------------------------------*/\r\n.todoMenu {\r\n\tgrid-area: menu;\r\n\theight: 100%;\r\n\twidth: 200px;\r\n\tbackground-color: rgb(150, 175, 240);\r\n\tpadding:0 0.5rem;\r\n}\r\n.project-section {\r\n\tmargin-bottom: 1rem;\r\n}\r\n.list-section {\r\n\tpadding: 0.5rem ;\r\n}\r\n.list-section h2 {\r\n\tfont-size: 1.5rem;\r\n\tborder-bottom: 1px solid black;\r\n}\r\n\r\n.todoMenu .addProject {\r\n\tbackground-color: var(--addProjectButton);\r\n\tborder-bottom: 1px solid transparent;\r\n\ttransition: border-bottom 0.3s;\r\n\tborder: none;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size: 1.2rem;\r\n\tpadding: 0.6rem ;\r\n\tmargin: 0.8rem 0;\r\n\tborder-radius: 4px ;\r\n}\r\n\r\n.addProject img {\r\n\twidth: 2rem;\r\n}\r\n.projectButtonsSection li {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid black;\r\n\tpadding: 0.5rem;\r\n\ttransition: background-color 0.3s;\r\n}\r\n.projectButtonsSection li button {\r\n\tpadding: 0.5rem 1rem;\r\n\tfont-size: 1.2rem;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n\ttext-decoration: underline 1px transparent;\r\n\ttransition: text-decoration 0.3s;\r\n}\r\n.projectButtonsSection li:hover {\r\n\tbackground-color: var(--addProjectButton);\r\n}\r\n.projectButtonsSection li button:hover {\r\n\ttext-decoration: underline 1px black;\r\n}\r\n\r\n.todoMenu .project-button {\r\n\tmargin-right: 1rem;\r\n\ttext-decoration: underline 1px transparent;\r\n\ttransition: text-decoration 0.3s;\r\n}\r\n.todoMenu .project-button:hover {\r\n\ttext-decoration: underline 1px black;\r\n\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;;;CAGC;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,oEAAoE;AACpE;CACC,qCAAqC;AACtC;AACA;CACC,8BAA8B;CAC9B,oCAAoC;AACrC;AACA;CACC,aAAa;CACb;iBACgB;CAChB,+BAA+B;CAC/B,iCAAiC;CACjC,mBAAmB;CACnB,kBAAkB;CAClB,2BAA2B;AAC5B;;AAEA,0EAA0E;;AAE1E;CACC,aAAa;CACb,mBAAmB;CACnB,cAAc;AACf;AACA;CACC,eAAe;CACf,gBAAgB;CAChB,cAAc;CACd,kBAAkB;CAClB,cAAc;AACf;AACA;CACC,WAAW;CACX,eAAe;CACf,mBAAmB;AACpB;AACA;CACC,UAAU;CACV,iBAAiB;AAClB;;AAEA,mFAAmF;;AAEnF;CACC,YAAY;CACZ,sBAAsB;CACtB,uBAAuB;;CAEvB,eAAe;CACf,uBAAuB;CACvB,aAAa;AACd;AACA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,uBAAuB;CACvB,0DAA0D;AAC3D;AACA;CACC,mCAAmC;CACnC,qBAAqB;AACtB;;AAEA,gFAAgF;AAChF;CACC,aAAa;AACd;AACA;CACC,aAAa;CACb,eAAe;CACf,uBAAuB;CACvB,eAAe;AAChB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,iBAAiB;AAClB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,aAAa;AACd;AACA;CACC,eAAe;AAChB;AACA;CACC,eAAe;CACf,YAAY;AACb;AACA;CACC,aAAa;CACb,uBAAuB;AACxB;;AAEA,4EAA4E;;AAE5E;CACC,aAAa;CACb,sBAAsB;AACvB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,aAAa;CACb,gBAAgB;AACjB;AACA;CACC,0EAA0E;AAC3E;AACA;CACC,6EAA6E;AAC9E;AACA;CACC,4EAA4E;AAC7E;AACA;CACC,6BAA6B;AAC9B;AACA;CACC,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,uBAAuB;CACvB,qBAAqB;CACrB,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;;CAEC,gBAAgB;CAChB,oCAAoC;CACpC,aAAa;CACb,oCAAoC;AACrC;AACA;CACC,aAAa;CACb,yBAAyB;AAC1B;;AAEA;CACC,cAAc;CACd,iBAAiB;AAClB;AACA;CACC,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;CACC,aAAa;;AAEd;AACA;CACC,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA,2EAA2E;AAC3E;CACC,eAAe;CACf,YAAY;CACZ,YAAY;CACZ,oCAAoC;CACpC,gBAAgB;AACjB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,iBAAiB;CACjB,8BAA8B;AAC/B;;AAEA;CACC,yCAAyC;CACzC,oCAAoC;CACpC,8BAA8B;CAC9B,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,iBAAiB;CACjB,gBAAgB;CAChB,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,WAAW;AACZ;AACA;CACC,aAAa;CACb,8BAA8B;CAC9B,uBAAuB;CACvB,eAAe;CACf,iCAAiC;AAClC;AACA;CACC,oBAAoB;CACpB,iBAAiB;CACjB,YAAY;CACZ,uBAAuB;CACvB,0CAA0C;CAC1C,gCAAgC;AACjC;AACA;CACC,yCAAyC;AAC1C;AACA;CACC,oCAAoC;AACrC;;AAEA;CACC,kBAAkB;CAClB,0CAA0C;CAC1C,gCAAgC;AACjC;AACA;CACC,oCAAoC;;AAErC","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/*-----------------------------------------------------------------*/\r\n:root {\r\n\t--addProjectButton: rgb(69, 140, 255);\r\n}\r\nbody {\r\n\tbackground-color: antiquewhite;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\n#content {\r\n\tdisplay: grid; \r\n\tgrid-template-areas: \"nav nav\"\r\n\t\t\t\t\t\t\"menu main\";\r\n\tgrid-template-columns: auto 1fr;\r\n\tgrid-template-rows:repeat(2,auto);\r\n\talign-items: center;\r\n\tposition: relative;\r\n\tbackground-color:aquamarine;\r\n}\r\n\r\n/*--------------------------------- Nav ---------------------------------*/\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgrid-area: nav;\r\n}\r\n.nav-title{\r\n\tfont-size: 2rem;\r\n\tfont-weight: 600;\r\n\tpadding: 1rem ;\r\n\ttext-align: center;\r\n\tmargin: 0 1rem;\r\n}\r\nnav .logo {\r\n\twidth: 4rem;\r\n\tpadding: 0.5rem;\r\n\tmargin-left: 0.5rem;\r\n}\r\nnav .inputFilter {\r\n\twidth: 40%;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n/*--------------------------------- Todo section ---------------------------------*/\r\n\r\n.todo-section {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\r\n\tgrid-area: main;\r\n\tbackground-color: white;\r\n\theight: 100vh;\r\n}\r\n.addTaskButton {\r\n\twidth: 3rem;\r\n\tmargin: 1rem;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid black;\r\n\ttransition: transform 0.3s, background-color 0.3s ease-out;\r\n}\r\n.addTaskButton:hover {\r\n\tbackground-color: rgb(95, 150, 246);\r\n\ttransform: scale(1.2);\r\n}\r\n\r\n/*--------------------------------- Task Form ---------------------------------*/\r\n.formContainer{\r\n\tpadding: 1rem;\r\n}\r\n.taskForm{\r\n\tdisplay: none;\r\n\tgrid-area: menu;\r\n\tborder: 1px solid black;\r\n\tpadding: 0.8rem;\r\n}\r\n.form-fieldset {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tpadding:0 0.8rem ;\r\n}\r\n.form-fieldset input {\r\n\tmargin-bottom: 0.8rem;\r\n}\r\n.addProjectForm {\r\n\tdisplay: none;\r\n}\r\n.addProjectForm button {\r\n\tfont-size: 1rem;\r\n}\r\n.addProjectForm input {\r\n\tpadding: 0.5rem;\r\n\tborder: none;\r\n}\r\n.active {\r\n\tdisplay: flex;\r\n\talign-items: flex-start;\r\n}\r\n\r\n/*--------------------------------- Tasks ---------------------------------*/\r\n\r\n.tasks-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n.task {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 1rem;\r\n\tmin-width: 600px;\r\n}\r\n.task[priority=\"low\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(0, 195, 0) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task[priority=\"medium\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(232, 225, 19) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task[priority=\"high\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(255, 17, 17) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task input:checked ~ p {\r\n\ttext-decoration: line-through;\r\n}\r\n.task p {\r\n\tpadding: 0.5rem;\r\n}\r\n\r\n.taskInfo {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid black;\r\n\tborder-radius: 0.5rem;\r\n\tpadding: 1rem;\r\n}\r\n.taskInfo div {\r\n\tdisplay: flex;\r\n}\r\n.taskContent {\r\n\t\r\n\toverflow: hidden;\r\n\tbackground-color: rgb(203, 203, 203);\r\n\tmax-height: 0;\r\n\ttransition: max-height 0.3s ease-out;\r\n}\r\n.taskContent div {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n.taskContent-active{\r\n\tdisplay: block;\r\n\tmax-height: 100px;\r\n}\r\n.taskContent-hide {\r\n\tdisplay: none;\r\n}\r\n.task-hide {\r\n\tdisplay: none;\r\n}\r\n.taskEdit{\r\n\tdisplay: none;\r\n\t\r\n}\r\n.edit-active {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.priorityField {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n/*--------------------------------- Menu ---------------------------------*/\r\n.todoMenu {\r\n\tgrid-area: menu;\r\n\theight: 100%;\r\n\twidth: 200px;\r\n\tbackground-color: rgb(150, 175, 240);\r\n\tpadding:0 0.5rem;\r\n}\r\n.project-section {\r\n\tmargin-bottom: 1rem;\r\n}\r\n.list-section {\r\n\tpadding: 0.5rem ;\r\n}\r\n.list-section h2 {\r\n\tfont-size: 1.5rem;\r\n\tborder-bottom: 1px solid black;\r\n}\r\n\r\n.todoMenu .addProject {\r\n\tbackground-color: var(--addProjectButton);\r\n\tborder-bottom: 1px solid transparent;\r\n\ttransition: border-bottom 0.3s;\r\n\tborder: none;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size: 1.2rem;\r\n\tpadding: 0.6rem ;\r\n\tmargin: 0.8rem 0;\r\n\tborder-radius: 4px ;\r\n}\r\n\r\n.addProject img {\r\n\twidth: 2rem;\r\n}\r\n.projectButtonsSection li {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid black;\r\n\tpadding: 0.5rem;\r\n\ttransition: background-color 0.3s;\r\n}\r\n.projectButtonsSection li button {\r\n\tpadding: 0.5rem 1rem;\r\n\tfont-size: 1.2rem;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n\ttext-decoration: underline 1px transparent;\r\n\ttransition: text-decoration 0.3s;\r\n}\r\n.projectButtonsSection li:hover {\r\n\tbackground-color: var(--addProjectButton);\r\n}\r\n.projectButtonsSection li button:hover {\r\n\ttext-decoration: underline 1px black;\r\n}\r\n\r\n.todoMenu .project-button {\r\n\tmargin-right: 1rem;\r\n\ttext-decoration: underline 1px transparent;\r\n\ttransition: text-decoration 0.3s;\r\n}\r\n.todoMenu .project-button:hover {\r\n\ttext-decoration: underline 1px black;\r\n\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "projectSelected": () => (/* binding */ projectSelected),
/* harmony export */   "saveSelectedProject": () => (/* binding */ saveSelectedProject),
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage)
/* harmony export */ });

const projectArray = [];
let projectSelected = 0;
class Todo {
    constructor(name,date,description,priority,complete){
        this.name = name;
        this.date = date;
        this.description = description;
        this.priority = priority;
        this.complete = complete;
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

function createTask(name,date,description,priority,complete) {
    return new Todo(name,date,description,priority,complete);
}

function createProject(name) {
    const newProject = new Project(name,[]);
    projectArray.push(newProject);
}

function createTodo(todo){
    console.log(projectSelected);
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
                createTodo(createTask(task.name,task.date,task.description,task.priority,task.complete));
            })
        })
    }
}
getLocalStorage();


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










function createUI(){
    const root = document.querySelector("#content");
    root.append(navBar(),todoMenu(),todoSection())
}
/* <-------------------------------- Todo section ---------------------------------> */
function todoSection(){
    const section = document.createElement("div")
    section.classList.add("todo-section")

    const addTaskSection = document.createElement("div");
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container")

    const addTaskButton = document.createElement("img");
    addTaskButton.classList.add("addTaskButton")
    addTaskButton.src = "../src/images/plus.svg"
    addTaskButton.addEventListener("click",() => {
        const taskForm = document.querySelector(".taskForm");
        taskForm.classList.toggle("active")
    });

    addTaskSection.append(addTaskButton,taskForm())
    section.append(addTaskSection,tasksContainer)
    return section
}

/* <-------- Task Form --------> */
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

/* <---------------- Task UI ----------------> */

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
    taskDate.textContent = "Due Date: " + elem.date
    const taskDescription = document.createElement("p");
    taskDescription.textContent = "Description: " + elem.description;
    const taskPriority = document.createElement("p");
    taskPriority.textContent = "Priority: " + elem.priority;

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
    taskContent.append(taskPriority,taskDescription,buttonContainer)
    taskInfo.append(nameContainer,taskDate);

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
        taskPriority.textContent = "Priority: " + prioritySelector.value;
        
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
/* <-------- Menu --------> */
function todoMenu() {
    const menu = document.createElement("div");

    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "Add Project"
    const buttonImage = document.createElement("img");
    buttonImage.src = "../src/images/plus.svg";
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

    const listSection = document.createElement("section");
    listSection.classList.add("list-section");
    const listTitle = document.createElement("h2");
    listTitle.textContent = "Projects";
    listSection.append(listTitle,addProjectButton,addProjectForm,projectButtonsList);

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


        projectButton.addEventListener("click",() => {
            ;(0,_classes__WEBPACK_IMPORTED_MODULE_0__.saveSelectedProject)(index)
            const mainContainer = document.querySelector(".tasks-container");
            while(mainContainer.firstChild){
                mainContainer.removeChild(mainContainer.firstChild)
            }
            elem.tasks.forEach((item,i) => {
                const tasks = createTaskUi(item,i);
                mainContainer.append(tasks);
            })
            
        })

        const projectItem = document.createElement("li");
        projectItem.dataset.project = index;
        projectItem.append(projectButton,deleteProjectButton(array,parent))
        parent.append(projectItem);
    })
}

function deleteProjectButton(array,parent) {
    const deleteProjectButton = document.createElement("button");
        deleteProjectButton.textContent = "X"; //Cambiar por un icono
        deleteProjectButton.addEventListener("click",(event) => {
            (0,_classes__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(event);
            createProjectButton(array,parent);
            (0,_classes__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
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
    logo.src = "../src/images/calendar-check.svg"
    const inputFilter = document.createElement("input")
    inputFilter.classList.add("inputFilter");

    nav.append(logo,title,inputFilter);

    return nav
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxhQUFhLG9OQUFvTixJQUFJLElBQUksSUFBSSxtQkFBbUIsc2hCQUFzaEIsZ0JBQWdCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG9CQUFvQiwrQkFBK0IsS0FBSyxzSkFBc0oscUJBQXFCLEtBQUssVUFBVSxxQkFBcUIsS0FBSyxZQUFZLHVCQUF1QixLQUFLLG1CQUFtQixtQkFBbUIsS0FBSywrREFBK0Qsa0JBQWtCLG9CQUFvQixLQUFLLFdBQVcsZ0NBQWdDLHdCQUF3QixLQUFLLHdGQUF3Riw0Q0FBNEMsS0FBSyxVQUFVLHFDQUFxQywyQ0FBMkMsS0FBSyxjQUFjLHFCQUFxQixvRUFBb0Usc0NBQXNDLHdDQUF3QywwQkFBMEIseUJBQXlCLGtDQUFrQyxLQUFLLGdHQUFnRyxvQkFBb0IsMEJBQTBCLHFCQUFxQixLQUFLLGVBQWUsc0JBQXNCLHVCQUF1QixxQkFBcUIseUJBQXlCLHFCQUFxQixLQUFLLGVBQWUsa0JBQWtCLHNCQUFzQiwwQkFBMEIsS0FBSyxzQkFBc0IsaUJBQWlCLHdCQUF3QixLQUFLLG1IQUFtSCxtQkFBbUIsNkJBQTZCLDhCQUE4QiwwQkFBMEIsOEJBQThCLG9CQUFvQixLQUFLLG9CQUFvQixrQkFBa0IsbUJBQW1CLHlCQUF5Qiw4QkFBOEIsaUVBQWlFLEtBQUssMEJBQTBCLDBDQUEwQyw0QkFBNEIsS0FBSyw0R0FBNEcsb0JBQW9CLEtBQUssY0FBYyxvQkFBb0Isc0JBQXNCLDhCQUE4QixzQkFBc0IsS0FBSyxvQkFBb0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsd0JBQXdCLEtBQUssMEJBQTBCLDRCQUE0QixLQUFLLHFCQUFxQixvQkFBb0IsS0FBSyw0QkFBNEIsc0JBQXNCLEtBQUssMkJBQTJCLHNCQUFzQixtQkFBbUIsS0FBSyxhQUFhLG9CQUFvQiw4QkFBOEIsS0FBSywrR0FBK0csb0JBQW9CLDZCQUE2QixLQUFLLFdBQVcsb0JBQW9CLDZCQUE2QixvQkFBb0IsdUJBQXVCLEtBQUssc0NBQXNDLGlGQUFpRixLQUFLLHlDQUF5QyxvRkFBb0YsS0FBSyx1Q0FBdUMsbUZBQW1GLEtBQUssNkJBQTZCLG9DQUFvQyxLQUFLLGFBQWEsc0JBQXNCLEtBQUssbUJBQW1CLG9CQUFvQiwwQkFBMEIscUNBQXFDLDhCQUE4Qiw0QkFBNEIsb0JBQW9CLEtBQUssbUJBQW1CLG9CQUFvQixLQUFLLGtCQUFrQiw2QkFBNkIsMkNBQTJDLG9CQUFvQiwyQ0FBMkMsS0FBSyxzQkFBc0Isb0JBQW9CLGdDQUFnQyxLQUFLLDRCQUE0QixxQkFBcUIsd0JBQXdCLEtBQUssdUJBQXVCLG9CQUFvQixLQUFLLGdCQUFnQixvQkFBb0IsS0FBSyxjQUFjLG9CQUFvQixXQUFXLGtCQUFrQixvQkFBb0IsMEJBQTBCLEtBQUssb0JBQW9CLG9CQUFvQiwwQkFBMEIsS0FBSyxtR0FBbUcsc0JBQXNCLG1CQUFtQixtQkFBbUIsMkNBQTJDLHVCQUF1QixLQUFLLHNCQUFzQiwwQkFBMEIsS0FBSyxtQkFBbUIsdUJBQXVCLEtBQUssc0JBQXNCLHdCQUF3QixxQ0FBcUMsS0FBSywrQkFBK0IsZ0RBQWdELDJDQUEyQyxxQ0FBcUMsbUJBQW1CLG9CQUFvQiwwQkFBMEIsd0JBQXdCLHVCQUF1Qix1QkFBdUIsMEJBQTBCLEtBQUsseUJBQXlCLGtCQUFrQixLQUFLLCtCQUErQixvQkFBb0IscUNBQXFDLDhCQUE4QixzQkFBc0Isd0NBQXdDLEtBQUssc0NBQXNDLDJCQUEyQix3QkFBd0IsbUJBQW1CLDhCQUE4QixpREFBaUQsdUNBQXVDLEtBQUsscUNBQXFDLGdEQUFnRCxLQUFLLDRDQUE0QywyQ0FBMkMsS0FBSyxtQ0FBbUMseUJBQXlCLGlEQUFpRCx1Q0FBdUMsS0FBSyxxQ0FBcUMsMkNBQTJDLFNBQVMsdUJBQXVCO0FBQ3YrZTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUc7QUFDckc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUkrQztBQUN2RSxPQUFPLGlFQUFlLHFGQUFPLElBQUksNEZBQWMsR0FBRyw0RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFHMEM7QUFDRDtBQUNPO0FBQ047QUFDSDtBQUNLO0FBQ0w7QUFDQTtBQUNLO0FBQzVDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0RBQVksQ0FBQyxxREFBZTtBQUN2QyxZQUFZLG9EQUFVLENBQUMsb0RBQVU7QUFDakMsWUFBWSxrREFBWSxDQUFDLHFEQUFlO0FBQ3hDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxRQUFRLHlEQUFlO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFlO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVU7QUFDbEIsdUNBQXVDLHFEQUFlLENBQUMsa0RBQVk7QUFDbkUsUUFBUSx5REFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQiw0QkFBNEIsa0RBQVk7QUFDeEMsUUFBUSx5REFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLFlBQVksdURBQWE7QUFDekI7QUFDQSxZQUFZLHlEQUFlO0FBQzNCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMvVUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDaEI7QUFDM0I7QUFDQSx3REFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbjpyb290IHtcXHJcXG5cXHQtLWFkZFByb2plY3RCdXR0b246IHJnYig2OSwgMTQwLCAyNTUpO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDsgXFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm5hdiBuYXZcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcIm1lbnUgbWFpblxcXCI7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KDIsYXV0byk7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjphcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBOYXYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5uYXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRncmlkLWFyZWE6IG5hdjtcXHJcXG59XFxyXFxuLm5hdi10aXRsZXtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtIDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcbm5hdiAubG9nbyB7XFxyXFxuXFx0d2lkdGg6IDRyZW07XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxufVxcclxcbm5hdiAuaW5wdXRGaWx0ZXIge1xcclxcblxcdHdpZHRoOiA0MCU7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRvZG8gc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi50b2RvLXNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcclxcblxcdGdyaWQtYXJlYTogbWFpbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG4uYWRkVGFza0J1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDNyZW07XFxyXFxuXFx0bWFyZ2luOiAxcmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG4uYWRkVGFza0J1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAxNTAsIDI0Nik7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrIEZvcm0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uZm9ybUNvbnRhaW5lcntcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG4udGFza0Zvcm17XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRncmlkLWFyZWE6IG1lbnU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0cGFkZGluZzogMC44cmVtO1xcclxcbn1cXHJcXG4uZm9ybS1maWVsZHNldCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdHBhZGRpbmc6MCAwLjhyZW0gO1xcclxcbn1cXHJcXG4uZm9ybS1maWVsZHNldCBpbnB1dCB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC44cmVtO1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdEZvcm0ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0Rm9ybSBidXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmFkZFByb2plY3RGb3JtIGlucHV0IHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi50YXNrcy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnRhc2sge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdG1pbi13aWR0aDogNjAwcHg7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJsb3dcXFwiXSAudGFza0luZm97XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMCwgMTk1LCAwKSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJtZWRpdW1cXFwiXSAudGFza0luZm97XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjMyLCAyMjUsIDE5KSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJoaWdoXFxcIl0gLnRhc2tJbmZve1xcclxcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDI1NSwgMTcsIDE3KSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrIGlucHV0OmNoZWNrZWQgfiBwIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuLnRhc2sgcCB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0luZm8ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcbi50YXNrSW5mbyBkaXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi50YXNrQ29udGVudCB7XFxyXFxuXFx0XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyMDMsIDIwMyk7XFxyXFxuXFx0bWF4LWhlaWdodDogMDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZS1vdXQ7XFxyXFxufVxcclxcbi50YXNrQ29udGVudCBkaXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50LWFjdGl2ZXtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRtYXgtaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuLnRhc2tDb250ZW50LWhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi50YXNrLWhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi50YXNrRWRpdHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcclxcbn1cXHJcXG4uZWRpdC1hY3RpdmUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnByaW9yaXR5RmllbGQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTWVudSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi50b2RvTWVudSB7XFxyXFxuXFx0Z3JpZC1hcmVhOiBtZW51O1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMjAwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTc1LCAyNDApO1xcclxcblxcdHBhZGRpbmc6MCAwLjVyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcbi5saXN0LXNlY3Rpb24ge1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSA7XFxyXFxufVxcclxcbi5saXN0LXNlY3Rpb24gaDIge1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NZW51IC5hZGRQcm9qZWN0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRQcm9qZWN0QnV0dG9uKTtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjNzO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxyXFxuXFx0cGFkZGluZzogMC42cmVtIDtcXHJcXG5cXHRtYXJnaW46IDAuOHJlbSAwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDRweCA7XFxyXFxufVxcclxcblxcclxcbi5hZGRQcm9qZWN0IGltZyB7XFxyXFxuXFx0d2lkdGg6IDJyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0QnV0dG9uc1NlY3Rpb24gbGkge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcbi5wcm9qZWN0QnV0dG9uc1NlY3Rpb24gbGkgYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4IHRyYW5zcGFyZW50O1xcclxcblxcdHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzO1xcclxcbn1cXHJcXG4ucHJvamVjdEJ1dHRvbnNTZWN0aW9uIGxpOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRQcm9qZWN0QnV0dG9uKTtcXHJcXG59XFxyXFxuLnByb2plY3RCdXR0b25zU2VjdGlvbiBsaSBidXR0b246aG92ZXIge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NZW51IC5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweCB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcztcXHJcXG59XFxyXFxuLnRvZG9NZW51IC5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4IGJsYWNrO1xcclxcblxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSxvRUFBb0U7QUFDcEU7Q0FDQyxxQ0FBcUM7QUFDdEM7QUFDQTtDQUNDLDhCQUE4QjtDQUM5QixvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGFBQWE7Q0FDYjtpQkFDZ0I7Q0FDaEIsK0JBQStCO0NBQy9CLGlDQUFpQztDQUNqQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLDJCQUEyQjtBQUM1Qjs7QUFFQSwwRUFBMEU7O0FBRTFFO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0FBQ2xCOztBQUVBLG1GQUFtRjs7QUFFbkY7Q0FDQyxZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLHVCQUF1Qjs7Q0FFdkIsZUFBZTtDQUNmLHVCQUF1QjtDQUN2QixhQUFhO0FBQ2Q7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QiwwREFBMEQ7QUFDM0Q7QUFDQTtDQUNDLG1DQUFtQztDQUNuQyxxQkFBcUI7QUFDdEI7O0FBRUEsZ0ZBQWdGO0FBQ2hGO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLHVCQUF1QjtDQUN2QixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCOztBQUVBLDRFQUE0RTs7QUFFNUU7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLDBFQUEwRTtBQUMzRTtBQUNBO0NBQ0MsNkVBQTZFO0FBQzlFO0FBQ0E7Q0FDQyw0RUFBNEU7QUFDN0U7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsb0NBQW9DO0NBQ3BDLGFBQWE7Q0FDYixvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGFBQWE7Q0FDYix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsYUFBYTs7QUFFZDtBQUNBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQSwyRUFBMkU7QUFDM0U7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLFlBQVk7Q0FDWixvQ0FBb0M7Q0FDcEMsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLHlDQUF5QztDQUN6QyxvQ0FBb0M7Q0FDcEMsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5Qix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLGlDQUFpQztBQUNsQztBQUNBO0NBQ0Msb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osdUJBQXVCO0NBQ3ZCLDBDQUEwQztDQUMxQyxnQ0FBZ0M7QUFDakM7QUFDQTtDQUNDLHlDQUF5QztBQUMxQztBQUNBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLDBDQUEwQztDQUMxQyxnQ0FBZ0M7QUFDakM7QUFDQTtDQUNDLG9DQUFvQzs7QUFFckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbjpyb290IHtcXHJcXG5cXHQtLWFkZFByb2plY3RCdXR0b246IHJnYig2OSwgMTQwLCAyNTUpO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDsgXFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm5hdiBuYXZcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcIm1lbnUgbWFpblxcXCI7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KDIsYXV0byk7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjphcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBOYXYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5uYXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRncmlkLWFyZWE6IG5hdjtcXHJcXG59XFxyXFxuLm5hdi10aXRsZXtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtIDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcbm5hdiAubG9nbyB7XFxyXFxuXFx0d2lkdGg6IDRyZW07XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxufVxcclxcbm5hdiAuaW5wdXRGaWx0ZXIge1xcclxcblxcdHdpZHRoOiA0MCU7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRvZG8gc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi50b2RvLXNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcclxcblxcdGdyaWQtYXJlYTogbWFpbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG4uYWRkVGFza0J1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDNyZW07XFxyXFxuXFx0bWFyZ2luOiAxcmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG4uYWRkVGFza0J1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAxNTAsIDI0Nik7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrIEZvcm0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uZm9ybUNvbnRhaW5lcntcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG4udGFza0Zvcm17XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRncmlkLWFyZWE6IG1lbnU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0cGFkZGluZzogMC44cmVtO1xcclxcbn1cXHJcXG4uZm9ybS1maWVsZHNldCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdHBhZGRpbmc6MCAwLjhyZW0gO1xcclxcbn1cXHJcXG4uZm9ybS1maWVsZHNldCBpbnB1dCB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC44cmVtO1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdEZvcm0ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0Rm9ybSBidXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmFkZFByb2plY3RGb3JtIGlucHV0IHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi50YXNrcy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnRhc2sge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdG1pbi13aWR0aDogNjAwcHg7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJsb3dcXFwiXSAudGFza0luZm97XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMCwgMTk1LCAwKSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJtZWRpdW1cXFwiXSAudGFza0luZm97XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjMyLCAyMjUsIDE5KSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJoaWdoXFxcIl0gLnRhc2tJbmZve1xcclxcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDI1NSwgMTcsIDE3KSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrIGlucHV0OmNoZWNrZWQgfiBwIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuLnRhc2sgcCB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0luZm8ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcbi50YXNrSW5mbyBkaXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi50YXNrQ29udGVudCB7XFxyXFxuXFx0XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyMDMsIDIwMyk7XFxyXFxuXFx0bWF4LWhlaWdodDogMDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZS1vdXQ7XFxyXFxufVxcclxcbi50YXNrQ29udGVudCBkaXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50LWFjdGl2ZXtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRtYXgtaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuLnRhc2tDb250ZW50LWhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi50YXNrLWhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi50YXNrRWRpdHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcclxcbn1cXHJcXG4uZWRpdC1hY3RpdmUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnByaW9yaXR5RmllbGQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTWVudSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi50b2RvTWVudSB7XFxyXFxuXFx0Z3JpZC1hcmVhOiBtZW51O1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMjAwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTc1LCAyNDApO1xcclxcblxcdHBhZGRpbmc6MCAwLjVyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcbi5saXN0LXNlY3Rpb24ge1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSA7XFxyXFxufVxcclxcbi5saXN0LXNlY3Rpb24gaDIge1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NZW51IC5hZGRQcm9qZWN0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRQcm9qZWN0QnV0dG9uKTtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjNzO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxyXFxuXFx0cGFkZGluZzogMC42cmVtIDtcXHJcXG5cXHRtYXJnaW46IDAuOHJlbSAwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDRweCA7XFxyXFxufVxcclxcblxcclxcbi5hZGRQcm9qZWN0IGltZyB7XFxyXFxuXFx0d2lkdGg6IDJyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0QnV0dG9uc1NlY3Rpb24gbGkge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcbi5wcm9qZWN0QnV0dG9uc1NlY3Rpb24gbGkgYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4IHRyYW5zcGFyZW50O1xcclxcblxcdHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzO1xcclxcbn1cXHJcXG4ucHJvamVjdEJ1dHRvbnNTZWN0aW9uIGxpOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRQcm9qZWN0QnV0dG9uKTtcXHJcXG59XFxyXFxuLnByb2plY3RCdXR0b25zU2VjdGlvbiBsaSBidXR0b246aG92ZXIge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NZW51IC5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweCB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcztcXHJcXG59XFxyXFxuLnRvZG9NZW51IC5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4IGJsYWNrO1xcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcclxuZXhwb3J0IGxldCBwcm9qZWN0U2VsZWN0ZWQgPSAwO1xyXG5jbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsZGF0ZSxkZXNjcmlwdGlvbixwcmlvcml0eSxjb21wbGV0ZSl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZU5hbWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VEYXRlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRGVzY3JpcHRpb24odmFsdWUpe1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQcmlvcml0eSh2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUNvbXBsZXRlKHZhbHVlKXtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG59XHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSx0YXNrcyl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVGFzayhpbmRleCkge1xyXG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LDEpXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTZWxlY3RlZFByb2plY3QoaW5kZXgpIHtcclxuICAgIHByb2plY3RTZWxlY3RlZCA9IGluZGV4O1xyXG59XHJcblxyXG4vKjwtLS0tLS0tLS0tLS0tLSBDcmVhdGUgZnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tPiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZSxkYXRlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGNvbXBsZXRlKSB7XHJcbiAgICByZXR1cm4gbmV3IFRvZG8obmFtZSxkYXRlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGNvbXBsZXRlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsW10pO1xyXG4gICAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvKHRvZG8pe1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdFNlbGVjdGVkKTtcclxuICAgIHByb2plY3RBcnJheVtwcm9qZWN0U2VsZWN0ZWRdLmFkZFRhc2sodG9kbylcclxufVxyXG5cclxuLyo8LS0tLS0tLS0tLS0tLS0gRGVsZXRlIGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLT4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGV2ZW50KXtcclxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpXHJcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvaixpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmKHRhcmdldEluZGV4ID09IGluZGV4KXtcclxuICAgICAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhpbmRleCkge1xyXG4gICAgcHJvamVjdEFycmF5W3Byb2plY3RTZWxlY3RlZF0ucmVtb3ZlVGFzayhpbmRleClcclxufSAgIFxyXG5cclxuLyo8LS0tLS0tLS0tLS0tLS0gSW5pdGlhbCBwcm9qZWN0IHdpdGggdGFza3MgLS0tLS0tLS0tLS0tLS0+ICovXHJcblxyXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSl7XHJcbiAgICBjcmVhdGVQcm9qZWN0KFwiVGVzdFwiKTtcclxuICAgIGNyZWF0ZVRvZG8oY3JlYXRlVGFzayhcIlRlc3RcIixcIjIwMjItMTItMDdcIixcImZhZmFcIixcImxvd1wiLGZhbHNlKSlcclxufVxyXG5cclxuLyo8LS0tLS0tLS0tLS0tLS0gbG9jYWxTdG9yYWdlIC0tLS0tLS0tLS0tLS0tPiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZSgpIHtcclxuICAgIGxldCBuZXdBcnJheSA9IHByb2plY3RBcnJheTtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsSlNPTi5zdHJpbmdpZnkobmV3QXJyYXkpKVxyXG59O1xyXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgZ2V0QXJyYXkgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxuICAgIGlmKGdldEFycmF5ICE9IG51bGwpe1xyXG4gICAgICAgIGdldEFycmF5LmZvckVhY2goKHByb2plY3QsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0Lm5hbWUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0ZWQgPSBpbmRleDtcclxuICAgICAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgID0+IHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG8oY3JlYXRlVGFzayh0YXNrLm5hbWUsdGFzay5kYXRlLHRhc2suZGVzY3JpcHRpb24sdGFzay5wcmlvcml0eSx0YXNrLmNvbXBsZXRlKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5nZXRMb2NhbFN0b3JhZ2UoKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBzYXZlU2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0U2VsZWN0ZWQgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcbmltcG9ydCB7IHNldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVSSgpe1xyXG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIHJvb3QuYXBwZW5kKG5hdkJhcigpLHRvZG9NZW51KCksdG9kb1NlY3Rpb24oKSlcclxufVxyXG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVG9kbyBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4gKi9cclxuZnVuY3Rpb24gdG9kb1NlY3Rpb24oKXtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXNlY3Rpb25cIilcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza3MtY29udGFpbmVyXCIpXHJcblxyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrQnV0dG9uXCIpXHJcbiAgICBhZGRUYXNrQnV0dG9uLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9wbHVzLnN2Z1wiXHJcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0Zvcm1cIik7XHJcbiAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkVGFza1NlY3Rpb24uYXBwZW5kKGFkZFRhc2tCdXR0b24sdGFza0Zvcm0oKSlcclxuICAgIHNlY3Rpb24uYXBwZW5kKGFkZFRhc2tTZWN0aW9uLHRhc2tzQ29udGFpbmVyKVxyXG4gICAgcmV0dXJuIHNlY3Rpb25cclxufVxyXG5cclxuLyogPC0tLS0tLS0tIFRhc2sgRm9ybSAtLS0tLS0tLT4gKi9cclxuZnVuY3Rpb24gdGFza0Zvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1Db250YWluZXJcIilcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2tGb3JtXCIpO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2hpbGUobWFpbi5maXJzdENoaWxkKXtcclxuICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb2plY3RBcnJheVtwcm9qZWN0U2VsZWN0ZWRdKXtcclxuICAgICAgICAgICAgY3JlYXRlVG9kbyhjcmVhdGVUYXNrKG5hbWVJbnB1dC52YWx1ZSxkYXRlSW5wdXQudmFsdWUsZGVzY3JpcHRpb25BcmVhLnZhbHVlLHByaW9yaXR5U2VsZWN0b3IudmFsdWUpKTtcclxuICAgICAgICAgICAgcHJvamVjdEFycmF5W3Byb2plY3RTZWxlY3RlZF0udGFza3MubWFwKChlbGVtLGkpID0+IHtcclxuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kKGNyZWF0ZVRhc2tVaShlbGVtLGkpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0sdHJ1ZSlcclxuXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5hbWVcIjtcclxuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xyXG4gICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmFtZUlucHV0XCIpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgZGVzY3JpcHRpb25BcmVhLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gICAgZGVzY3JpcHRpb25BcmVhLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbkFyZWFcIik7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJkYXRlXCIpO1xyXG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkYXRlSW5wdXRcIik7XHJcbiAgICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlTZWxlY3RvclwiKVxyXG4gICAgY29uc3Qgb3B0aW9uUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlMb3cudmFsdWUgPSBcImxvd1wiO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvblByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvblByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcclxuICAgIG9wdGlvblByaW9yaXR5TWVkaXVtLnZhbHVlID0gXCJtZWRpdW1cIjtcclxuXHJcbiAgICBjb25zdCBvcHRpb25Qcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcbiAgICBvcHRpb25Qcmlvcml0eUhpZ2gudmFsdWUgPSBcImhpZ2hcIjtcclxuXHJcbiAgICBwcmlvcml0eVNlbGVjdG9yLmFwcGVuZChvcHRpb25Qcmlvcml0eUxvdyxvcHRpb25Qcmlvcml0eU1lZGl1bSxvcHRpb25Qcmlvcml0eUhpZ2gpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdEJ1dHRvblwiKVxyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIlxyXG4gICAgXHJcbiAgICBjb25zdCBmb3JtRmllbGRzZXRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgICBmb3JtRmllbGRzZXRPbmUuY2xhc3NMaXN0LmFkZChcImZvcm0tZmllbGRzZXRcIik7XHJcbiAgICBmb3JtRmllbGRzZXRPbmUuYXBwZW5kKG5hbWVJbnB1dCxkZXNjcmlwdGlvbkFyZWEpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1GaWVsZHNldFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICAgIGZvcm1GaWVsZHNldFR3by5jbGFzc0xpc3QuYWRkKFwiZm9ybS1maWVsZHNldFwiKTtcclxuICAgIGNvbnN0IHNlbGVjdG9yRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgICBzZWxlY3RvckZpZWxkc2V0LmFwcGVuZChwcmlvcml0eVNlbGVjdG9yKVxyXG4gICAgZm9ybUZpZWxkc2V0VHdvLmFwcGVuZChkYXRlSW5wdXQsc2VsZWN0b3JGaWVsZHNldCxzdWJtaXRCdXR0b24pO1xyXG5cclxuXHJcbiAgICBmb3JtLmFwcGVuZChmb3JtRmllbGRzZXRPbmUsZm9ybUZpZWxkc2V0VHdvKTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcclxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xyXG59XHJcblxyXG4vKiA8LS0tLS0tLS0tLS0tLS0tLSBUYXNrIFVJIC0tLS0tLS0tLS0tLS0tLS0+ICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza1VpKGVsZW0saSl7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICAgIHRhc2suc2V0QXR0cmlidXRlKFwiaWRcIixpKTtcclxuICAgIHRhc2suc2V0QXR0cmlidXRlKFwicHJpb3JpdHlcIixlbGVtLnByaW9yaXR5KTtcclxuXHJcblxyXG4gICAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKFwidGFza0luZm9cIik7XHJcbiAgICB0YXNrSW5mby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB0YXNrQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwidGFza0NvbnRlbnQtYWN0aXZlXCIpKTtcclxuXHJcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRlbnRcIilcclxuICAgIGNvbnN0IGNoZWNrYm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGNoZWNrYm94SW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoZWNrYm94SW5wdXQuY2hlY2tlZCA9IGVsZW0uY29tcGxldGU7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6IFwiICsgZWxlbS5uYW1lO1xyXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCIgKyBlbGVtLmRhdGVcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCIgKyBlbGVtLmRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIiArIGVsZW0ucHJpb3JpdHk7XHJcblxyXG4gICAgY2hlY2tib3hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICBlbGVtLmNoYW5nZUNvbXBsZXRlKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0QnV0dG9uXCIpO1xyXG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xyXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrQ29udGVudC1hY3RpdmVcIik7XHJcbiAgICAgICAgdGFza0VkaXQuY2xhc3NMaXN0LmFkZChcImVkaXQtYWN0aXZlXCIpO1xyXG4gICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhpZGVcIilcclxuICAgIH0pXHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyAvLyBCdXR0b24gZm9yIGRlbGV0ZSBUYXNrXHJcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiXHJcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBkZWxldGVUYXNrKGkpO1xyXG4gICAgICAgIHJlc2V0VWlDb250YWluZXIobWFpbkNvbnRhaW5lcixwcm9qZWN0U2VsZWN0ZWQscHJvamVjdEFycmF5KTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmFtZUNvbnRhaW5lci5hcHBlbmQoY2hlY2tib3hJbnB1dCx0YXNrTmFtZSlcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZWRpdEJ1dHRvbixkZWxldGVCdXR0b24pO1xyXG4gICAgdGFza0NvbnRlbnQuYXBwZW5kKHRhc2tQcmlvcml0eSx0YXNrRGVzY3JpcHRpb24sYnV0dG9uQ29udGFpbmVyKVxyXG4gICAgdGFza0luZm8uYXBwZW5kKG5hbWVDb250YWluZXIsdGFza0RhdGUpO1xyXG5cclxuICAgIC8qLS0tLS0tIEVkaXQgRm9ybSAtLS0tLS0qL1xyXG5cclxuICAgIGNvbnN0IHRhc2tFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICB0YXNrRWRpdC5jbGFzc0xpc3QuYWRkKFwidGFza0VkaXRcIik7XHJcblxyXG4gICAgY29uc3QgZWRpdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBlZGl0TmFtZS52YWx1ZSA9IGVsZW0ubmFtZTtcclxuICAgIGNvbnN0IGVkaXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZWRpdERhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiZGF0ZVwiKTtcclxuICAgIGVkaXREYXRlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIGVkaXREYXRlLnZhbHVlID0gZWxlbS5kYXRlO1xyXG4gICAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgZWRpdERlc2NyaXB0aW9uLnZhbHVlID0gZWxlbS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIGNvbnN0IG9wdGlvblByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvblByaW9yaXR5TG93LnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuICAgIG9wdGlvblByaW9yaXR5TG93LnZhbHVlID0gXCJsb3dcIjtcclxuXHJcbiAgICBjb25zdCBvcHRpb25Qcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb25Qcmlvcml0eU1lZGl1bS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XHJcbiAgICBvcHRpb25Qcmlvcml0eU1lZGl1bS52YWx1ZSA9IFwibWVkaXVtXCI7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uUHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvblByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlIaWdoLnZhbHVlID0gXCJoaWdoXCI7XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3Rvci5hcHBlbmQob3B0aW9uUHJpb3JpdHlMb3csb3B0aW9uUHJpb3JpdHlNZWRpdW0sb3B0aW9uUHJpb3JpdHlIaWdoKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdEVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdEVkaXRCdG5cIik7XHJcbiAgICBzdWJtaXRFZGl0QnRuLnRleHRDb250ZW50ID0gXCJBY2NlcHRcIlxyXG4gICAgc3VibWl0RWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSkgPT4geyAgICAgICAgIC8qIENvbmZpcm1hIGxvcyB2YWxvcmVzIGEgY2FtYmlhciAqL1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoXCJwcmlvcml0eVwiLHByaW9yaXR5U2VsZWN0b3IudmFsdWUpXHJcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6IFwiICsgZWRpdE5hbWUudmFsdWU7XHJcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIiArIGVkaXREYXRlLnZhbHVlO1xyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiICsgZWRpdERlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiICsgcHJpb3JpdHlTZWxlY3Rvci52YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICBlbGVtLmNoYW5nZU5hbWUoZWRpdE5hbWUudmFsdWUpO1xyXG4gICAgICAgIGVsZW0uY2hhbmdlRGF0ZShlZGl0RGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgZWxlbS5jaGFuZ2VEZXNjcmlwdGlvbihlZGl0RGVzY3JpcHRpb24udmFsdWUpO1xyXG4gICAgICAgIGVsZW0uY2hhbmdlUHJpb3JpdHkocHJpb3JpdHlTZWxlY3Rvci52YWx1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFza0VkaXQuY2xhc3NMaXN0LnJlbW92ZShcImVkaXQtYWN0aXZlXCIpO1xyXG4gICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLWhpZGVcIik7XHJcbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9LHRydWUpXHJcblxyXG4gICAgdGFza0VkaXQuYXBwZW5kKGVkaXROYW1lLGVkaXREYXRlLGVkaXREZXNjcmlwdGlvbixwcmlvcml0eVNlbGVjdG9yLHN1Ym1pdEVkaXRCdG4pXHJcbiAgICAvKi0tLS0tLSBFZGl0IEZvcm0gLS0tLS0tKi9cclxuXHJcbiAgICB0YXNrLmFwcGVuZCh0YXNrSW5mbyx0YXNrQ29udGVudCx0YXNrRWRpdCk7XHJcbiAgICByZXR1cm4gdGFza1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldFVpQ29udGFpbmVyKHBhcmVudCxzZWxlY3RlZCxhcnJheSkge1xyXG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpeyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKVxyXG4gICAgfVxyXG4gICAgYXJyYXlbc2VsZWN0ZWRdLnRhc2tzLmZvckVhY2goKGl0ZW0saSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gY3JlYXRlVGFza1VpKGl0ZW0saSk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0YXNrcyk7XHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuLyogPC0tLS0tLS0tIE1lbnUgLS0tLS0tLS0+ICovXHJcbmZ1bmN0aW9uIHRvZG9NZW51KCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiXHJcbiAgICBjb25zdCBidXR0b25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBidXR0b25JbWFnZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcGx1cy5zdmdcIjtcclxuICAgIGFkZFByb2plY3RCdXR0b24uYXBwZW5kKGJ1dHRvbkltYWdlKTtcclxuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RcIik7XHJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RCdXR0b25zTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHByb2plY3RCdXR0b25zTGlzdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvbnNTZWN0aW9uXCIpO1xyXG5cclxuICAgIGNyZWF0ZVByb2plY3RCdXR0b24ocHJvamVjdEFycmF5LHByb2plY3RCdXR0b25zTGlzdCk7XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGFkZFByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0Rm9ybVwiKTtcclxuICAgIGFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24ocHJvamVjdEFycmF5LHByb2plY3RCdXR0b25zTGlzdCk7XHJcbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIlxyXG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kKHByb2plY3RUaXRsZUlucHV0LHN1Ym1pdFByb2plY3RCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IGxpc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBsaXN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1zZWN0aW9uXCIpO1xyXG4gICAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xyXG4gICAgbGlzdFNlY3Rpb24uYXBwZW5kKGxpc3RUaXRsZSxhZGRQcm9qZWN0QnV0dG9uLGFkZFByb2plY3RGb3JtLHByb2plY3RCdXR0b25zTGlzdCk7XHJcblxyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwidG9kb01lbnVcIik7XHJcbiAgICBtZW51LmFwcGVuZChsaXN0U2VjdGlvbilcclxuICAgIHJldHVybiBtZW51XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QnV0dG9uKGFycmF5LHBhcmVudCl7XHJcbiAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKVxyXG4gICAgfVxyXG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlbSxpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBlbGVtLm5hbWU7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIilcclxuXHJcblxyXG4gICAgICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlU2VsZWN0ZWRQcm9qZWN0KGluZGV4KVxyXG4gICAgICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIHdoaWxlKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtLnRhc2tzLmZvckVhY2goKGl0ZW0saSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza3MgPSBjcmVhdGVUYXNrVWkoaXRlbSxpKTtcclxuICAgICAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRhc2tzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcHJvamVjdEl0ZW0uZGF0YXNldC5wcm9qZWN0ID0gaW5kZXg7XHJcbiAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kKHByb2plY3RCdXR0b24sZGVsZXRlUHJvamVjdEJ1dHRvbihhcnJheSxwYXJlbnQpKVxyXG4gICAgICAgIHBhcmVudC5hcHBlbmQocHJvamVjdEl0ZW0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEJ1dHRvbihhcnJheSxwYXJlbnQpIHtcclxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjsgLy9DYW1iaWFyIHBvciB1biBpY29ub1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoZXZlbnQpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uKGFycmF5LHBhcmVudCk7XHJcbiAgICAgICAgICAgIHNldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICByZXR1cm4gZGVsZXRlUHJvamVjdEJ1dHRvbjtcclxufVxyXG4vKjwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBOYXYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xyXG5mdW5jdGlvbiBuYXZCYXIoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVG9kbyBMaXN0XCI7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibmF2LXRpdGxlXCIpO1xyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG4gICAgbG9nby5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvY2FsZW5kYXItY2hlY2suc3ZnXCJcclxuICAgIGNvbnN0IGlucHV0RmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBpbnB1dEZpbHRlci5jbGFzc0xpc3QuYWRkKFwiaW5wdXRGaWx0ZXJcIik7XHJcblxyXG4gICAgbmF2LmFwcGVuZChsb2dvLHRpdGxlLGlucHV0RmlsdGVyKTtcclxuXHJcbiAgICByZXR1cm4gbmF2XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY3JlYXRlVUkgfSBmcm9tIFwiLi9jb21wb25lbnRzL3VpXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL21haW4uY3NzXCI7XHJcblxyXG5jcmVhdGVVSSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/*-----------------------------------------------------------------*/\r\n:root {\r\n\t--addProjectButton: rgb(69, 140, 255);\r\n}\r\nbody {\r\n\tbackground-color: antiquewhite;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\n#content {\r\n\tdisplay: grid; \r\n\tgrid-template-areas: \"nav nav\"\r\n\t\t\t\t\t\t\"menu main\";\r\n\tgrid-template-columns: auto 1fr;\r\n\tgrid-template-rows:repeat(2,auto);\r\n\talign-items: center;\r\n\tposition: relative;\r\n\tbackground-color:aquamarine;\r\n}\r\n\r\n/*--------------------------------- Nav ---------------------------------*/\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgrid-area: nav;\r\n}\r\n.nav-title{\r\n\tfont-size: 2rem;\r\n\tfont-weight: 600;\r\n\tpadding: 1rem ;\r\n\ttext-align: center;\r\n\tmargin: 0 1rem;\r\n}\r\nnav .logo {\r\n\twidth: 4rem;\r\n\tpadding: 0.5rem;\r\n\tmargin-left: 0.5rem;\r\n}\r\nnav .inputFilter {\r\n\twidth: 40%;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n/*--------------------------------- Todo section ---------------------------------*/\r\n\r\n.todo-section {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\r\n\tgrid-area: main;\r\n\tbackground-color: white;\r\n\theight: 100vh;\r\n}\r\n.addTaskButton {\r\n\twidth: 3rem;\r\n\tmargin: 1rem;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid black;\r\n\ttransition: transform 0.3s, background-color 0.3s ease-out;\r\n}\r\n.addTaskButton:hover {\r\n\tbackground-color: rgb(95, 150, 246);\r\n\ttransform: scale(1.2);\r\n}\r\n\r\n/*--------------------------------- Task Form ---------------------------------*/\r\n.formContainer{\r\n\tpadding: 1rem;\r\n}\r\n.taskForm{\r\n\tdisplay: none;\r\n\tgrid-area: menu;\r\n\tborder: 1px solid black;\r\n\tpadding: 0.8rem;\r\n}\r\n.form-fieldset {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tpadding:0 0.8rem ;\r\n}\r\n.form-fieldset input {\r\n\tmargin-bottom: 0.8rem;\r\n}\r\n.addProjectForm {\r\n\tdisplay: none;\r\n}\r\n.addProjectForm button {\r\n\tfont-size: 1rem;\r\n}\r\n.addProjectForm input {\r\n\tpadding: 0.5rem;\r\n\tborder: none;\r\n}\r\n.active {\r\n\tdisplay: flex;\r\n\talign-items: flex-start;\r\n}\r\n\r\n/*--------------------------------- Tasks ---------------------------------*/\r\n\r\n.tasks-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n.task {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 1rem;\r\n\tmin-width: 600px;\r\n}\r\n.task[priority=\"low\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(0, 195, 0) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task[priority=\"medium\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(232, 225, 19) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task[priority=\"high\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(255, 17, 17) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task input:checked ~ p {\r\n\ttext-decoration: line-through;\r\n}\r\n.task p {\r\n\tpadding: 0.5rem;\r\n}\r\n\r\n.taskInfo {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid black;\r\n\tborder-radius: 0.5rem;\r\n\tpadding: 1rem;\r\n}\r\n.taskInfo div {\r\n\tdisplay: flex;\r\n}\r\n.taskContent {\r\n\toverflow: hidden;\r\n\tbackground-color: rgb(203, 203, 203);\r\n\theight: 0;\r\n\ttransition: height 0.3s ease-out;\r\n}\r\n.notes-list {\r\n\toverflow: auto;\r\n\theight: 120px;\r\n}\r\n\r\n.note {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n}\r\n\r\n.note input[type=checkbox]:checked + label  {\r\n\ttext-decoration: line-through;\r\n}\r\n.taskContent div {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n.taskContent-active{\r\n\tdisplay: block;\r\n\theight: 200px;\r\n}\r\n.taskContent-hide {\r\n\tdisplay: none;\r\n}\r\n.task-hide {\r\n\tdisplay: none;\r\n}\r\n.taskEdit{\r\n\tdisplay: none;\r\n\t\r\n}\r\n.edit-active {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.priorityField {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n/*--------------------------------- Menu ---------------------------------*/\r\n.todoMenu {\r\n\tgrid-area: menu;\r\n\theight: 100%;\r\n\twidth: 200px;\r\n\tbackground-color: rgb(150, 175, 240);\r\n\tpadding:0 0.5rem;\r\n}\r\n.project-section {\r\n\tmargin-bottom: 1rem;\r\n}\r\n.list-section {\r\n\tpadding: 0.5rem ;\r\n}\r\n.list-section h2 {\r\n\tfont-size: 1.5rem;\r\n\tborder-bottom: 1px solid black;\r\n}\r\n\r\n.todoMenu .addProject {\r\n\tbackground-color: var(--addProjectButton);\r\n\tborder-bottom: 1px solid transparent;\r\n\ttransition: border-bottom 0.3s;\r\n\tborder: none;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size: 1.2rem;\r\n\tpadding: 0.6rem ;\r\n\tmargin: 0.8rem 0;\r\n\tborder-radius: 4px ;\r\n}\r\n\r\n.addProject img {\r\n\twidth: 2rem;\r\n}\r\n.projectButtonsSection li {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid black;\r\n\tpadding: 0.5rem;\r\n\ttransition: background-color 0.3s;\r\n}\r\n.projectButtonsSection li button {\r\n\tpadding: 0.5rem 1rem;\r\n\tfont-size: 1.2rem;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n\ttext-decoration: underline 1px transparent;\r\n\ttransition: text-decoration 0.3s;\r\n}\r\n.projectButtonsSection li:hover {\r\n\tbackground-color: var(--addProjectButton);\r\n}\r\n.projectButtonsSection li button:hover {\r\n\ttext-decoration: underline 1px black;\r\n}\r\n\r\n.todoMenu .project-button {\r\n\tmargin-right: 1rem;\r\n\ttext-decoration: underline 1px transparent;\r\n\ttransition: text-decoration 0.3s;\r\n}\r\n.todoMenu .project-button:hover {\r\n\ttext-decoration: underline 1px black;\r\n\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;;;CAGC;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,oEAAoE;AACpE;CACC,qCAAqC;AACtC;AACA;CACC,8BAA8B;CAC9B,oCAAoC;AACrC;AACA;CACC,aAAa;CACb;iBACgB;CAChB,+BAA+B;CAC/B,iCAAiC;CACjC,mBAAmB;CACnB,kBAAkB;CAClB,2BAA2B;AAC5B;;AAEA,0EAA0E;;AAE1E;CACC,aAAa;CACb,mBAAmB;CACnB,cAAc;AACf;AACA;CACC,eAAe;CACf,gBAAgB;CAChB,cAAc;CACd,kBAAkB;CAClB,cAAc;AACf;AACA;CACC,WAAW;CACX,eAAe;CACf,mBAAmB;AACpB;AACA;CACC,UAAU;CACV,iBAAiB;AAClB;;AAEA,mFAAmF;;AAEnF;CACC,YAAY;CACZ,sBAAsB;CACtB,uBAAuB;;CAEvB,eAAe;CACf,uBAAuB;CACvB,aAAa;AACd;AACA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,uBAAuB;CACvB,0DAA0D;AAC3D;AACA;CACC,mCAAmC;CACnC,qBAAqB;AACtB;;AAEA,gFAAgF;AAChF;CACC,aAAa;AACd;AACA;CACC,aAAa;CACb,eAAe;CACf,uBAAuB;CACvB,eAAe;AAChB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,iBAAiB;AAClB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,aAAa;AACd;AACA;CACC,eAAe;AAChB;AACA;CACC,eAAe;CACf,YAAY;AACb;AACA;CACC,aAAa;CACb,uBAAuB;AACxB;;AAEA,4EAA4E;;AAE5E;CACC,aAAa;CACb,sBAAsB;AACvB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,aAAa;CACb,gBAAgB;AACjB;AACA;CACC,0EAA0E;AAC3E;AACA;CACC,6EAA6E;AAC9E;AACA;CACC,4EAA4E;AAC7E;AACA;CACC,6BAA6B;AAC9B;AACA;CACC,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,uBAAuB;CACvB,qBAAqB;CACrB,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;CACC,gBAAgB;CAChB,oCAAoC;CACpC,SAAS;CACT,gCAAgC;AACjC;AACA;CACC,cAAc;CACd,aAAa;AACd;;AAEA;CACC,aAAa;CACb,2BAA2B;CAC3B,mBAAmB;AACpB;;AAEA;CACC,6BAA6B;AAC9B;AACA;CACC,aAAa;CACb,yBAAyB;AAC1B;;AAEA;CACC,cAAc;CACd,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;CACC,aAAa;;AAEd;AACA;CACC,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA,2EAA2E;AAC3E;CACC,eAAe;CACf,YAAY;CACZ,YAAY;CACZ,oCAAoC;CACpC,gBAAgB;AACjB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,iBAAiB;CACjB,8BAA8B;AAC/B;;AAEA;CACC,yCAAyC;CACzC,oCAAoC;CACpC,8BAA8B;CAC9B,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,iBAAiB;CACjB,gBAAgB;CAChB,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,WAAW;AACZ;AACA;CACC,aAAa;CACb,8BAA8B;CAC9B,uBAAuB;CACvB,eAAe;CACf,iCAAiC;AAClC;AACA;CACC,oBAAoB;CACpB,iBAAiB;CACjB,YAAY;CACZ,uBAAuB;CACvB,0CAA0C;CAC1C,gCAAgC;AACjC;AACA;CACC,yCAAyC;AAC1C;AACA;CACC,oCAAoC;AACrC;;AAEA;CACC,kBAAkB;CAClB,0CAA0C;CAC1C,gCAAgC;AACjC;AACA;CACC,oCAAoC;;AAErC","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/*-----------------------------------------------------------------*/\r\n:root {\r\n\t--addProjectButton: rgb(69, 140, 255);\r\n}\r\nbody {\r\n\tbackground-color: antiquewhite;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\n#content {\r\n\tdisplay: grid; \r\n\tgrid-template-areas: \"nav nav\"\r\n\t\t\t\t\t\t\"menu main\";\r\n\tgrid-template-columns: auto 1fr;\r\n\tgrid-template-rows:repeat(2,auto);\r\n\talign-items: center;\r\n\tposition: relative;\r\n\tbackground-color:aquamarine;\r\n}\r\n\r\n/*--------------------------------- Nav ---------------------------------*/\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgrid-area: nav;\r\n}\r\n.nav-title{\r\n\tfont-size: 2rem;\r\n\tfont-weight: 600;\r\n\tpadding: 1rem ;\r\n\ttext-align: center;\r\n\tmargin: 0 1rem;\r\n}\r\nnav .logo {\r\n\twidth: 4rem;\r\n\tpadding: 0.5rem;\r\n\tmargin-left: 0.5rem;\r\n}\r\nnav .inputFilter {\r\n\twidth: 40%;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n/*--------------------------------- Todo section ---------------------------------*/\r\n\r\n.todo-section {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\r\n\tgrid-area: main;\r\n\tbackground-color: white;\r\n\theight: 100vh;\r\n}\r\n.addTaskButton {\r\n\twidth: 3rem;\r\n\tmargin: 1rem;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid black;\r\n\ttransition: transform 0.3s, background-color 0.3s ease-out;\r\n}\r\n.addTaskButton:hover {\r\n\tbackground-color: rgb(95, 150, 246);\r\n\ttransform: scale(1.2);\r\n}\r\n\r\n/*--------------------------------- Task Form ---------------------------------*/\r\n.formContainer{\r\n\tpadding: 1rem;\r\n}\r\n.taskForm{\r\n\tdisplay: none;\r\n\tgrid-area: menu;\r\n\tborder: 1px solid black;\r\n\tpadding: 0.8rem;\r\n}\r\n.form-fieldset {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tpadding:0 0.8rem ;\r\n}\r\n.form-fieldset input {\r\n\tmargin-bottom: 0.8rem;\r\n}\r\n.addProjectForm {\r\n\tdisplay: none;\r\n}\r\n.addProjectForm button {\r\n\tfont-size: 1rem;\r\n}\r\n.addProjectForm input {\r\n\tpadding: 0.5rem;\r\n\tborder: none;\r\n}\r\n.active {\r\n\tdisplay: flex;\r\n\talign-items: flex-start;\r\n}\r\n\r\n/*--------------------------------- Tasks ---------------------------------*/\r\n\r\n.tasks-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n.task {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 1rem;\r\n\tmin-width: 600px;\r\n}\r\n.task[priority=\"low\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(0, 195, 0) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task[priority=\"medium\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(232, 225, 19) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task[priority=\"high\"] .taskInfo{\r\n\tbackground: linear-gradient(90deg, rgb(255, 17, 17) 2%, rgba(25,25,25,0) 1%);\r\n}\r\n.task input:checked ~ p {\r\n\ttext-decoration: line-through;\r\n}\r\n.task p {\r\n\tpadding: 0.5rem;\r\n}\r\n\r\n.taskInfo {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid black;\r\n\tborder-radius: 0.5rem;\r\n\tpadding: 1rem;\r\n}\r\n.taskInfo div {\r\n\tdisplay: flex;\r\n}\r\n.taskContent {\r\n\toverflow: hidden;\r\n\tbackground-color: rgb(203, 203, 203);\r\n\theight: 0;\r\n\ttransition: height 0.3s ease-out;\r\n}\r\n.notes-list {\r\n\toverflow: auto;\r\n\theight: 120px;\r\n}\r\n\r\n.note {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n}\r\n\r\n.note input[type=checkbox]:checked + label  {\r\n\ttext-decoration: line-through;\r\n}\r\n.taskContent div {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n.taskContent-active{\r\n\tdisplay: block;\r\n\theight: 200px;\r\n}\r\n.taskContent-hide {\r\n\tdisplay: none;\r\n}\r\n.task-hide {\r\n\tdisplay: none;\r\n}\r\n.taskEdit{\r\n\tdisplay: none;\r\n\t\r\n}\r\n.edit-active {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.priorityField {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n/*--------------------------------- Menu ---------------------------------*/\r\n.todoMenu {\r\n\tgrid-area: menu;\r\n\theight: 100%;\r\n\twidth: 200px;\r\n\tbackground-color: rgb(150, 175, 240);\r\n\tpadding:0 0.5rem;\r\n}\r\n.project-section {\r\n\tmargin-bottom: 1rem;\r\n}\r\n.list-section {\r\n\tpadding: 0.5rem ;\r\n}\r\n.list-section h2 {\r\n\tfont-size: 1.5rem;\r\n\tborder-bottom: 1px solid black;\r\n}\r\n\r\n.todoMenu .addProject {\r\n\tbackground-color: var(--addProjectButton);\r\n\tborder-bottom: 1px solid transparent;\r\n\ttransition: border-bottom 0.3s;\r\n\tborder: none;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size: 1.2rem;\r\n\tpadding: 0.6rem ;\r\n\tmargin: 0.8rem 0;\r\n\tborder-radius: 4px ;\r\n}\r\n\r\n.addProject img {\r\n\twidth: 2rem;\r\n}\r\n.projectButtonsSection li {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid black;\r\n\tpadding: 0.5rem;\r\n\ttransition: background-color 0.3s;\r\n}\r\n.projectButtonsSection li button {\r\n\tpadding: 0.5rem 1rem;\r\n\tfont-size: 1.2rem;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n\ttext-decoration: underline 1px transparent;\r\n\ttransition: text-decoration 0.3s;\r\n}\r\n.projectButtonsSection li:hover {\r\n\tbackground-color: var(--addProjectButton);\r\n}\r\n.projectButtonsSection li button:hover {\r\n\ttext-decoration: underline 1px black;\r\n}\r\n\r\n.todoMenu .project-button {\r\n\tmargin-right: 1rem;\r\n\ttext-decoration: underline 1px transparent;\r\n\ttransition: text-decoration 0.3s;\r\n}\r\n.todoMenu .project-button:hover {\r\n\ttext-decoration: underline 1px black;\r\n\r\n}\r\n"],"sourceRoot":""}]);
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

    const addTaskButton = document.createElement("div");
    const buttonImg = document.createElement("img");
    const buttonText = document.createElement("p");
    buttonText.textContent = "New Task";

    addTaskButton.classList.add("addTaskButton")
    buttonImg.src = "../src/images/plus.svg"
    addTaskButton.addEventListener("click",() => {
        const taskForm = document.querySelector(".taskForm");
        taskForm.classList.toggle("active")
    });
    addTaskButton.append(buttonImg,buttonText)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTJDLFNBQVMsV0FBVyx3RkFBd0YsS0FBSyxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQkFBc0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0gwQztBQUNEO0FBQ087QUFDTjtBQUNIO0FBQ0s7QUFDTDtBQUNBO0FBQ0s7QUFDNUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtEQUFZLENBQUMscURBQWU7QUFDdkMsWUFBWSxvREFBVSxDQUFDLG9EQUFVO0FBQ2pDLFlBQVksa0RBQVksQ0FBQyxxREFBZTtBQUN4QztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsUUFBUSx5REFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlEQUFlO0FBQy9CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU07QUFDekM7QUFDQTtBQUNBLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5REFBZTtBQUMzQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBVTtBQUNsQix1Q0FBdUMscURBQWUsQ0FBQyxrREFBWTtBQUNuRSxRQUFRLHlEQUFlO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFlO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrREFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFhO0FBQ3JCLDRCQUE0QixrREFBWTtBQUN4QyxRQUFRLHlEQUFlO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSxZQUFZLHdEQUFhO0FBQ3pCO0FBQ0EsWUFBWSx5REFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5WUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDaEI7QUFDM0I7QUFDQSx3REFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbjpyb290IHtcXHJcXG5cXHQtLWFkZFByb2plY3RCdXR0b246IHJnYig2OSwgMTQwLCAyNTUpO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDsgXFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm5hdiBuYXZcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcIm1lbnUgbWFpblxcXCI7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KDIsYXV0byk7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjphcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBOYXYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG5uYXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRncmlkLWFyZWE6IG5hdjtcXHJcXG59XFxyXFxuLm5hdi10aXRsZXtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtIDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcbm5hdiAubG9nbyB7XFxyXFxuXFx0d2lkdGg6IDRyZW07XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxufVxcclxcbm5hdiAuaW5wdXRGaWx0ZXIge1xcclxcblxcdHdpZHRoOiA0MCU7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRvZG8gc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi50b2RvLXNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcclxcblxcdGdyaWQtYXJlYTogbWFpbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG4uYWRkVGFza0J1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDNyZW07XFxyXFxuXFx0bWFyZ2luOiAxcmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG4uYWRkVGFza0J1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAxNTAsIDI0Nik7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrIEZvcm0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uZm9ybUNvbnRhaW5lcntcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG4udGFza0Zvcm17XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRncmlkLWFyZWE6IG1lbnU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0cGFkZGluZzogMC44cmVtO1xcclxcbn1cXHJcXG4uZm9ybS1maWVsZHNldCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdHBhZGRpbmc6MCAwLjhyZW0gO1xcclxcbn1cXHJcXG4uZm9ybS1maWVsZHNldCBpbnB1dCB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC44cmVtO1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdEZvcm0ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0Rm9ybSBidXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmFkZFByb2plY3RGb3JtIGlucHV0IHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi50YXNrcy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnRhc2sge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdG1pbi13aWR0aDogNjAwcHg7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJsb3dcXFwiXSAudGFza0luZm97XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMCwgMTk1LCAwKSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJtZWRpdW1cXFwiXSAudGFza0luZm97XFxyXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjMyLCAyMjUsIDE5KSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrW3ByaW9yaXR5PVxcXCJoaWdoXFxcIl0gLnRhc2tJbmZve1xcclxcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDI1NSwgMTcsIDE3KSAyJSwgcmdiYSgyNSwyNSwyNSwwKSAxJSk7XFxyXFxufVxcclxcbi50YXNrIGlucHV0OmNoZWNrZWQgfiBwIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuLnRhc2sgcCB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0luZm8ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcbi50YXNrSW5mbyBkaXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi50YXNrQ29udGVudCB7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyMDMsIDIwMyk7XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG4ubm90ZXMtbGlzdCB7XFxyXFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0aGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub3RlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCAge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG4udGFza0NvbnRlbnQgZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGVudC1hY3RpdmV7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0aGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuLnRhc2tDb250ZW50LWhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi50YXNrLWhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi50YXNrRWRpdHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcclxcbn1cXHJcXG4uZWRpdC1hY3RpdmUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnByaW9yaXR5RmllbGQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTWVudSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi50b2RvTWVudSB7XFxyXFxuXFx0Z3JpZC1hcmVhOiBtZW51O1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMjAwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTc1LCAyNDApO1xcclxcblxcdHBhZGRpbmc6MCAwLjVyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcbi5saXN0LXNlY3Rpb24ge1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSA7XFxyXFxufVxcclxcbi5saXN0LXNlY3Rpb24gaDIge1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NZW51IC5hZGRQcm9qZWN0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRQcm9qZWN0QnV0dG9uKTtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjNzO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxyXFxuXFx0cGFkZGluZzogMC42cmVtIDtcXHJcXG5cXHRtYXJnaW46IDAuOHJlbSAwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDRweCA7XFxyXFxufVxcclxcblxcclxcbi5hZGRQcm9qZWN0IGltZyB7XFxyXFxuXFx0d2lkdGg6IDJyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0QnV0dG9uc1NlY3Rpb24gbGkge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcbi5wcm9qZWN0QnV0dG9uc1NlY3Rpb24gbGkgYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4IHRyYW5zcGFyZW50O1xcclxcblxcdHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjNzO1xcclxcbn1cXHJcXG4ucHJvamVjdEJ1dHRvbnNTZWN0aW9uIGxpOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRQcm9qZWN0QnV0dG9uKTtcXHJcXG59XFxyXFxuLnByb2plY3RCdXR0b25zU2VjdGlvbiBsaSBidXR0b246aG92ZXIge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NZW51IC5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweCB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcztcXHJcXG59XFxyXFxuLnRvZG9NZW51IC5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4IGJsYWNrO1xcclxcblxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSxvRUFBb0U7QUFDcEU7Q0FDQyxxQ0FBcUM7QUFDdEM7QUFDQTtDQUNDLDhCQUE4QjtDQUM5QixvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLGFBQWE7Q0FDYjtpQkFDZ0I7Q0FDaEIsK0JBQStCO0NBQy9CLGlDQUFpQztDQUNqQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLDJCQUEyQjtBQUM1Qjs7QUFFQSwwRUFBMEU7O0FBRTFFO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLGVBQWU7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LGtCQUFrQjtDQUNsQiwwQ0FBMEM7Q0FDMUMsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FDQyxvQ0FBb0M7O0FBRXJDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG46cm9vdCB7XFxyXFxuXFx0LS1hZGRQcm9qZWN0QnV0dG9uOiByZ2IoNjksIDE0MCwgMjU1KTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuI2NvbnRlbnQge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7IFxcclxcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJuYXYgbmF2XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJtZW51IG1haW5cXFwiO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdCgyLGF1dG8pO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6YXF1YW1hcmluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTmF2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxubmF2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z3JpZC1hcmVhOiBuYXY7XFxyXFxufVxcclxcbi5uYXYtdGl0bGV7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0cGFkZGluZzogMXJlbSA7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdG1hcmdpbjogMCAxcmVtO1xcclxcbn1cXHJcXG5uYXYgLmxvZ28ge1xcclxcblxcdHdpZHRoOiA0cmVtO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbn1cXHJcXG5uYXYgLmlucHV0RmlsdGVyIHtcXHJcXG5cXHR3aWR0aDogNDAlO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUb2RvIHNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4udG9kby1zZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHJcXG5cXHRncmlkLWFyZWE6IG1haW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuLmFkZFRhc2tCdXR0b24ge1xcclxcblxcdHdpZHRoOiAzcmVtO1xcclxcblxcdG1hcmdpbjogMXJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuLmFkZFRhc2tCdXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMTUwLCAyNDYpO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVGFzayBGb3JtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmZvcm1Db250YWluZXJ7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuLnRhc2tGb3Jte1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0Z3JpZC1hcmVhOiBtZW51O1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdHBhZGRpbmc6IDAuOHJlbTtcXHJcXG59XFxyXFxuLmZvcm0tZmllbGRzZXQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRwYWRkaW5nOjAgMC44cmVtIDtcXHJcXG59XFxyXFxuLmZvcm0tZmllbGRzZXQgaW5wdXQge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXHJcXG59XFxyXFxuLmFkZFByb2plY3RGb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdEZvcm0gYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0Rm9ybSBpbnB1dCB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLmFjdGl2ZSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVGFza3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4udGFza3MtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRtaW4td2lkdGg6IDYwMHB4O1xcclxcbn1cXHJcXG4udGFza1twcmlvcml0eT1cXFwibG93XFxcIl0gLnRhc2tJbmZve1xcclxcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDAsIDE5NSwgMCkgMiUsIHJnYmEoMjUsMjUsMjUsMCkgMSUpO1xcclxcbn1cXHJcXG4udGFza1twcmlvcml0eT1cXFwibWVkaXVtXFxcIl0gLnRhc2tJbmZve1xcclxcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDIzMiwgMjI1LCAxOSkgMiUsIHJnYmEoMjUsMjUsMjUsMCkgMSUpO1xcclxcbn1cXHJcXG4udGFza1twcmlvcml0eT1cXFwiaGlnaFxcXCJdIC50YXNrSW5mb3tcXHJcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigyNTUsIDE3LCAxNykgMiUsIHJnYmEoMjUsMjUsMjUsMCkgMSUpO1xcclxcbn1cXHJcXG4udGFzayBpbnB1dDpjaGVja2VkIH4gcCB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcbi50YXNrIHAge1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tJbmZvIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG4udGFza0luZm8gZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4udGFza0NvbnRlbnQge1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMywgMjAzLCAyMDMpO1xcclxcblxcdGhlaWdodDogMDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuLm5vdGVzLWxpc3Qge1xcclxcblxcdG92ZXJmbG93OiBhdXRvO1xcclxcblxcdGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ub3RlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwgIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuLnRhc2tDb250ZW50IGRpdiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NvbnRlbnQtYWN0aXZle1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcbi50YXNrQ29udGVudC1oaWRlIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4udGFzay1oaWRlIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4udGFza0VkaXR7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHJcXG59XFxyXFxuLmVkaXQtYWN0aXZlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wcmlvcml0eUZpZWxkIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE1lbnUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4udG9kb01lbnUge1xcclxcblxcdGdyaWQtYXJlYTogbWVudTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0d2lkdGg6IDIwMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDE3NSwgMjQwKTtcXHJcXG5cXHRwYWRkaW5nOjAgMC41cmVtO1xcclxcbn1cXHJcXG4ucHJvamVjdC1zZWN0aW9uIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG4ubGlzdC1zZWN0aW9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gO1xcclxcbn1cXHJcXG4ubGlzdC1zZWN0aW9uIGgyIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWVudSAuYWRkUHJvamVjdCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkUHJvamVjdEJ1dHRvbik7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcblxcdHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC4zcztcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcblxcdHBhZGRpbmc6IDAuNnJlbSA7XFxyXFxuXFx0bWFyZ2luOiAwLjhyZW0gMDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA0cHggO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkUHJvamVjdCBpbWcge1xcclxcblxcdHdpZHRoOiAycmVtO1xcclxcbn1cXHJcXG4ucHJvamVjdEJ1dHRvbnNTZWN0aW9uIGxpIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbn1cXHJcXG4ucHJvamVjdEJ1dHRvbnNTZWN0aW9uIGxpIGJ1dHRvbiB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweCB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4zcztcXHJcXG59XFxyXFxuLnByb2plY3RCdXR0b25zU2VjdGlvbiBsaTpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkUHJvamVjdEJ1dHRvbik7XFxyXFxufVxcclxcbi5wcm9qZWN0QnV0dG9uc1NlY3Rpb24gbGkgYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAxcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWVudSAucHJvamVjdC1idXR0b24ge1xcclxcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAxcHggdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuM3M7XFxyXFxufVxcclxcbi50b2RvTWVudSAucHJvamVjdC1idXR0b246aG92ZXIge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDFweCBibGFjaztcXHJcXG5cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG5leHBvcnQgY29uc3QgcHJvamVjdEFycmF5ID0gW107XHJcbmV4cG9ydCBsZXQgcHJvamVjdFNlbGVjdGVkID0gMDtcclxuY2xhc3MgVG9kbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGRhdGUsZGVzY3JpcHRpb24scHJpb3JpdHksY29tcGxldGUsbm90ZXMgPSBbXSl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VOYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRGF0ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURlc2NyaXB0aW9uKHZhbHVlKXtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUHJpb3JpdHkodmFsdWUpe1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VDb21wbGV0ZSh2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE5vdGUobm90ZSl7XHJcbiAgICAgICAgdGhpcy5ub3Rlcy5wdXNoKHtub3RlLGNoZWNrTm90ZTogZmFsc2V9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVOb3RlKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5ub3Rlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICB9XHJcbiAgICBjaGVja05vdGUoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLm5vdGVzW2luZGV4XS5jaGVja05vdGUgPSAhdGhpcy5ub3Rlc1tpbmRleF0uY2hlY2tOb3RlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm90ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyb3NzTm90ZShpbmRleCkge1xyXG5cclxuICAgIH1cclxufVxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsdGFza3Mpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodGFzaykge1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVRhc2soaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwxKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2VsZWN0ZWRQcm9qZWN0KGluZGV4KSB7XHJcbiAgICBwcm9qZWN0U2VsZWN0ZWQgPSBpbmRleDtcclxufVxyXG5cclxuLyo8LS0tLS0tLS0tLS0tLS0gQ3JlYXRlIGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLT4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsZGF0ZSxkZXNjcmlwdGlvbixwcmlvcml0eSxjb21wbGV0ZSxub3Rlcykge1xyXG4gICAgcmV0dXJuIG5ldyBUb2RvKG5hbWUsZGF0ZSxkZXNjcmlwdGlvbixwcmlvcml0eSxjb21wbGV0ZSxub3Rlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLFtdKTtcclxuICAgIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0b2RvKXtcclxuICAgIHByb2plY3RBcnJheVtwcm9qZWN0U2VsZWN0ZWRdLmFkZFRhc2sodG9kbylcclxufVxyXG5cclxuLyo8LS0tLS0tLS0tLS0tLS0gRGVsZXRlIGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLT4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGV2ZW50KXtcclxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpXHJcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvaixpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmKHRhcmdldEluZGV4ID09IGluZGV4KXtcclxuICAgICAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhpbmRleCkge1xyXG4gICAgcHJvamVjdEFycmF5W3Byb2plY3RTZWxlY3RlZF0ucmVtb3ZlVGFzayhpbmRleClcclxufSAgIFxyXG5cclxuLyo8LS0tLS0tLS0tLS0tLS0gSW5pdGlhbCBwcm9qZWN0IHdpdGggdGFza3MgLS0tLS0tLS0tLS0tLS0+ICovXHJcblxyXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSl7XHJcbiAgICBjcmVhdGVQcm9qZWN0KFwiVGVzdFwiKTtcclxuICAgIGNyZWF0ZVRvZG8oY3JlYXRlVGFzayhcIlRlc3RcIixcIjIwMjItMTItMDdcIixcImZhZmFcIixcImxvd1wiLGZhbHNlKSlcclxufVxyXG5cclxuLyo8LS0tLS0tLS0tLS0tLS0gbG9jYWxTdG9yYWdlIC0tLS0tLS0tLS0tLS0tPiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZSgpIHtcclxuICAgIGxldCBuZXdBcnJheSA9IHByb2plY3RBcnJheTtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsSlNPTi5zdHJpbmdpZnkobmV3QXJyYXkpKVxyXG59O1xyXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgZ2V0QXJyYXkgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxuICAgIGlmKGdldEFycmF5ICE9IG51bGwpe1xyXG4gICAgICAgIGdldEFycmF5LmZvckVhY2goKHByb2plY3QsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0Lm5hbWUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0ZWQgPSBpbmRleDtcclxuICAgICAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgID0+IHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG8oY3JlYXRlVGFzayh0YXNrLm5hbWUsdGFzay5kYXRlLHRhc2suZGVzY3JpcHRpb24sdGFzay5wcmlvcml0eSx0YXNrLmNvbXBsZXRlLHRhc2subm90ZXMpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmdldExvY2FsU3RvcmFnZSgpO1xyXG5cclxuLy8gcHJvamVjdEFycmF5WzBdLnRhc2tzWzFdLmFkZE5vdGUoXCJFc3RvIGVzIHVuYSBub3RhXCIpO1xyXG4vLyBwcm9qZWN0QXJyYXlbMF0udGFza3NbMV0uYWRkTm90ZShcIlkgZXN0YSBlcyBvdHJhIDpQXCIpO1xyXG4vLyBwcm9qZWN0QXJyYXlbMF0udGFza3NbMV0uYWRkTm90ZShcIkJvcnJlbW9zIGVzdGFcIik7XHJcbi8vIHByb2plY3RBcnJheVswXS50YXNrc1sxXS5yZW1vdmVOb3RlKDEpXHJcbi8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheVswXS50YXNrc1sxXSk7IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBzYXZlU2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0U2VsZWN0ZWQgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcbmltcG9ydCB7IHNldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVSSgpe1xyXG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIHJvb3QuYXBwZW5kKG5hdkJhcigpLHRvZG9NZW51KCksdG9kb1NlY3Rpb24oKSlcclxufVxyXG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVG9kbyBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4gKi9cclxuZnVuY3Rpb24gdG9kb1NlY3Rpb24oKXtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXNlY3Rpb25cIilcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza3MtY29udGFpbmVyXCIpXHJcblxyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBidXR0b25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY29uc3QgYnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgYnV0dG9uVGV4dC50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2tcIjtcclxuXHJcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrQnV0dG9uXCIpXHJcbiAgICBidXR0b25JbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3BsdXMuc3ZnXCJcclxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRm9ybVwiKTtcclxuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXHJcbiAgICB9KTtcclxuICAgIGFkZFRhc2tCdXR0b24uYXBwZW5kKGJ1dHRvbkltZyxidXR0b25UZXh0KVxyXG4gICAgYWRkVGFza1NlY3Rpb24uYXBwZW5kKGFkZFRhc2tCdXR0b24sdGFza0Zvcm0oKSlcclxuICAgIHNlY3Rpb24uYXBwZW5kKGFkZFRhc2tTZWN0aW9uLHRhc2tzQ29udGFpbmVyKVxyXG4gICAgcmV0dXJuIHNlY3Rpb25cclxufVxyXG5cclxuLyogPC0tLS0tLS0tIFRhc2sgRm9ybSAtLS0tLS0tLT4gKi9cclxuZnVuY3Rpb24gdGFza0Zvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1Db250YWluZXJcIilcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2tGb3JtXCIpO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2hpbGUobWFpbi5maXJzdENoaWxkKXtcclxuICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb2plY3RBcnJheVtwcm9qZWN0U2VsZWN0ZWRdKXtcclxuICAgICAgICAgICAgY3JlYXRlVG9kbyhjcmVhdGVUYXNrKG5hbWVJbnB1dC52YWx1ZSxkYXRlSW5wdXQudmFsdWUsZGVzY3JpcHRpb25BcmVhLnZhbHVlLHByaW9yaXR5U2VsZWN0b3IudmFsdWUpKTtcclxuICAgICAgICAgICAgcHJvamVjdEFycmF5W3Byb2plY3RTZWxlY3RlZF0udGFza3MubWFwKChlbGVtLGkpID0+IHtcclxuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kKGNyZWF0ZVRhc2tVaShlbGVtLGkpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0sdHJ1ZSlcclxuXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5hbWVcIjtcclxuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xyXG4gICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmFtZUlucHV0XCIpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgZGVzY3JpcHRpb25BcmVhLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gICAgZGVzY3JpcHRpb25BcmVhLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbkFyZWFcIik7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJkYXRlXCIpO1xyXG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkYXRlSW5wdXRcIik7XHJcbiAgICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlTZWxlY3RvclwiKVxyXG4gICAgY29uc3Qgb3B0aW9uUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlMb3cudmFsdWUgPSBcImxvd1wiO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvblByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvblByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcclxuICAgIG9wdGlvblByaW9yaXR5TWVkaXVtLnZhbHVlID0gXCJtZWRpdW1cIjtcclxuXHJcbiAgICBjb25zdCBvcHRpb25Qcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcbiAgICBvcHRpb25Qcmlvcml0eUhpZ2gudmFsdWUgPSBcImhpZ2hcIjtcclxuXHJcbiAgICBwcmlvcml0eVNlbGVjdG9yLmFwcGVuZChvcHRpb25Qcmlvcml0eUxvdyxvcHRpb25Qcmlvcml0eU1lZGl1bSxvcHRpb25Qcmlvcml0eUhpZ2gpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdEJ1dHRvblwiKVxyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIlxyXG4gICAgXHJcbiAgICBjb25zdCBmb3JtRmllbGRzZXRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgICBmb3JtRmllbGRzZXRPbmUuY2xhc3NMaXN0LmFkZChcImZvcm0tZmllbGRzZXRcIik7XHJcbiAgICBmb3JtRmllbGRzZXRPbmUuYXBwZW5kKG5hbWVJbnB1dCxkZXNjcmlwdGlvbkFyZWEpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1GaWVsZHNldFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICAgIGZvcm1GaWVsZHNldFR3by5jbGFzc0xpc3QuYWRkKFwiZm9ybS1maWVsZHNldFwiKTtcclxuICAgIGNvbnN0IHNlbGVjdG9yRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgICBzZWxlY3RvckZpZWxkc2V0LmFwcGVuZChwcmlvcml0eVNlbGVjdG9yKVxyXG4gICAgZm9ybUZpZWxkc2V0VHdvLmFwcGVuZChkYXRlSW5wdXQsc2VsZWN0b3JGaWVsZHNldCxzdWJtaXRCdXR0b24pO1xyXG5cclxuXHJcbiAgICBmb3JtLmFwcGVuZChmb3JtRmllbGRzZXRPbmUsZm9ybUZpZWxkc2V0VHdvKTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcclxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xyXG59XHJcblxyXG4vKiA8LS0tLS0tLS0tLS0tLS0tLSBUYXNrIFVJIC0tLS0tLS0tLS0tLS0tLS0+ICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza1VpKGVsZW0saSl7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICAgIHRhc2suc2V0QXR0cmlidXRlKFwiaWRcIixpKTtcclxuICAgIHRhc2suc2V0QXR0cmlidXRlKFwicHJpb3JpdHlcIixlbGVtLnByaW9yaXR5KTtcclxuXHJcblxyXG4gICAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKFwidGFza0luZm9cIik7XHJcbiAgICB0YXNrSW5mby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB0YXNrQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwidGFza0NvbnRlbnQtYWN0aXZlXCIpKTtcclxuXHJcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRlbnRcIilcclxuICAgIGNvbnN0IGNoZWNrYm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGNoZWNrYm94SW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoZWNrYm94SW5wdXQuY2hlY2tlZCA9IGVsZW0uY29tcGxldGU7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6IFwiICsgZWxlbS5uYW1lO1xyXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCIgKyBlbGVtLmRhdGVcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCIgKyBlbGVtLmRlc2NyaXB0aW9uO1xyXG4gICAgLy8gY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAvLyB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIiArIGVsZW0ucHJpb3JpdHk7XHJcbiAgICBjb25zdCBub3Rlc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBub3Rlc0xpc3QuY2xhc3NMaXN0LmFkZChcIm5vdGVzLWxpc3RcIik7XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFkZCBOb3RlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIGNvbnN0IGFkZE5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICBjb25zdCBub3RlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCBhZGROb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZE5vdGVGb3JtLmFwcGVuZChub3RlSW5wdXQsYWRkTm90ZUJ1dHRvbik7XHJcbiAgICBhZGROb3RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgTm90ZVwiO1xyXG4gICAgYWRkTm90ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB3aGlsZShub3Rlc0xpc3QuZmlyc3RDaGlsZCl7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgbm90ZXNMaXN0LnJlbW92ZUNoaWxkKG5vdGVzTGlzdC5maXJzdENoaWxkKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtLmFkZE5vdGUobm90ZUlucHV0LnZhbHVlKTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBlbGVtLm5vdGVzLmZvckVhY2goKGNvbnRlbnQsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgY29uc3Qgbm90ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIG5vdGVUZXh0Lmh0bWxGb3IgPSBgbm90ZS0ke2luZGV4fWBcclxuICAgICAgICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBjaGVja05vdGUuaWQgPSBgbm90ZS0ke2luZGV4fWA7XHJcbiAgICAgICAgICAgIGNoZWNrTm90ZS50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgICAgICBjaGVja05vdGUuY2hlY2tlZCA9IGNvbnRlbnQuY2hlY2tOb3RlO1xyXG4gICAgICAgICAgICBjaGVja05vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5jaGVja05vdGUoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9jYWxTdG9yYWdlKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5vdGVUZXh0LnRleHRDb250ZW50ID0gY29udGVudC5ub3RlO1xyXG4gICAgICAgICAgICBub3RlLmFwcGVuZChjaGVja05vdGUsbm90ZVRleHQpO1xyXG4gICAgICAgICAgICBub3Rlc0xpc3QuYXBwZW5kKG5vdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbS5ub3Rlcy5mb3JFYWNoKChjb250ZW50LGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBjb25zdCBub3RlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBub3RlVGV4dC5odG1sRm9yID0gYG5vdGUtJHtpbmRleH1gXHJcbiAgICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcclxuICAgICAgICBjb25zdCBjaGVja05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgY2hlY2tOb3RlLmlkID0gYG5vdGUtJHtpbmRleH1gO1xyXG4gICAgICAgIGNoZWNrTm90ZS50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGNoZWNrTm90ZS5jaGVja2VkID0gY29udGVudC5jaGVja05vdGU7XHJcbiAgICAgICAgY2hlY2tOb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICAgICAgZWxlbS5jaGVja05vdGUoaW5kZXgpO1xyXG4gICAgICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5vdGVUZXh0LnRleHRDb250ZW50ID0gY29udGVudC5ub3RlO1xyXG4gICAgICAgIG5vdGUuYXBwZW5kKGNoZWNrTm90ZSxub3RlVGV4dCk7XHJcbiAgICAgICAgbm90ZXNMaXN0LmFwcGVuZChub3RlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICBjaGVja2JveElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGVsZW0uY2hhbmdlQ29tcGxldGUoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICAgIHNldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXRCdXR0b25cIik7XHJcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XHJcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcInRhc2tDb250ZW50LWFjdGl2ZVwiKTtcclxuICAgICAgICB0YXNrRWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1hY3RpdmVcIik7XHJcbiAgICAgICAgdGFza0luZm8uY2xhc3NMaXN0LmFkZChcInRhc2staGlkZVwiKVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IC8vIEJ1dHRvbiBmb3IgZGVsZXRlIFRhc2tcclxuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiREVMRVRFXCJcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGRlbGV0ZVRhc2soaSk7XHJcbiAgICAgICAgcmVzZXRVaUNvbnRhaW5lcihtYWluQ29udGFpbmVyLHByb2plY3RTZWxlY3RlZCxwcm9qZWN0QXJyYXkpO1xyXG4gICAgICAgIHNldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZChjaGVja2JveElucHV0LHRhc2tOYW1lKVxyXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChlZGl0QnV0dG9uLGRlbGV0ZUJ1dHRvbik7XHJcbiAgICB0YXNrSW5mby5hcHBlbmQobmFtZUNvbnRhaW5lcix0YXNrRGF0ZSk7XHJcbiAgICB0YXNrQ29udGVudC5hcHBlbmQodGFza0Rlc2NyaXB0aW9uLGFkZE5vdGVGb3JtLG5vdGVzTGlzdCxidXR0b25Db250YWluZXIpO1xyXG5cclxuICAgIC8qLS0tLS0tIEVkaXQgRm9ybSAtLS0tLS0qL1xyXG5cclxuICAgIGNvbnN0IHRhc2tFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICB0YXNrRWRpdC5jbGFzc0xpc3QuYWRkKFwidGFza0VkaXRcIik7XHJcblxyXG4gICAgY29uc3QgZWRpdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBlZGl0TmFtZS52YWx1ZSA9IGVsZW0ubmFtZTtcclxuICAgIGNvbnN0IGVkaXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZWRpdERhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiZGF0ZVwiKTtcclxuICAgIGVkaXREYXRlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIGVkaXREYXRlLnZhbHVlID0gZWxlbS5kYXRlO1xyXG4gICAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgZWRpdERlc2NyaXB0aW9uLnZhbHVlID0gZWxlbS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIGNvbnN0IG9wdGlvblByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvblByaW9yaXR5TG93LnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuICAgIG9wdGlvblByaW9yaXR5TG93LnZhbHVlID0gXCJsb3dcIjtcclxuXHJcbiAgICBjb25zdCBvcHRpb25Qcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb25Qcmlvcml0eU1lZGl1bS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XHJcbiAgICBvcHRpb25Qcmlvcml0eU1lZGl1bS52YWx1ZSA9IFwibWVkaXVtXCI7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uUHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvblByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xyXG4gICAgb3B0aW9uUHJpb3JpdHlIaWdoLnZhbHVlID0gXCJoaWdoXCI7XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3Rvci5hcHBlbmQob3B0aW9uUHJpb3JpdHlMb3csb3B0aW9uUHJpb3JpdHlNZWRpdW0sb3B0aW9uUHJpb3JpdHlIaWdoKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdEVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdEVkaXRCdG5cIik7XHJcbiAgICBzdWJtaXRFZGl0QnRuLnRleHRDb250ZW50ID0gXCJBY2NlcHRcIlxyXG4gICAgc3VibWl0RWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSkgPT4geyAgICAgICAgIC8qIENvbmZpcm1hIGxvcyB2YWxvcmVzIGEgY2FtYmlhciAqL1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoXCJwcmlvcml0eVwiLHByaW9yaXR5U2VsZWN0b3IudmFsdWUpXHJcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6IFwiICsgZWRpdE5hbWUudmFsdWU7XHJcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIiArIGVkaXREYXRlLnZhbHVlO1xyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiICsgZWRpdERlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgICAgIC8vIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiICsgcHJpb3JpdHlTZWxlY3Rvci52YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICBlbGVtLmNoYW5nZU5hbWUoZWRpdE5hbWUudmFsdWUpO1xyXG4gICAgICAgIGVsZW0uY2hhbmdlRGF0ZShlZGl0RGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgZWxlbS5jaGFuZ2VEZXNjcmlwdGlvbihlZGl0RGVzY3JpcHRpb24udmFsdWUpO1xyXG4gICAgICAgIGVsZW0uY2hhbmdlUHJpb3JpdHkocHJpb3JpdHlTZWxlY3Rvci52YWx1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFza0VkaXQuY2xhc3NMaXN0LnJlbW92ZShcImVkaXQtYWN0aXZlXCIpO1xyXG4gICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLWhpZGVcIik7XHJcbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9LHRydWUpXHJcblxyXG4gICAgdGFza0VkaXQuYXBwZW5kKGVkaXROYW1lLGVkaXREYXRlLGVkaXREZXNjcmlwdGlvbixwcmlvcml0eVNlbGVjdG9yLHN1Ym1pdEVkaXRCdG4pXHJcbiAgICAvKi0tLS0tLSBFZGl0IEZvcm0gLS0tLS0tKi9cclxuXHJcbiAgICB0YXNrLmFwcGVuZCh0YXNrSW5mbyx0YXNrQ29udGVudCx0YXNrRWRpdCk7XHJcbiAgICByZXR1cm4gdGFza1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldFVpQ29udGFpbmVyKHBhcmVudCxzZWxlY3RlZCxhcnJheSkge1xyXG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpeyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKVxyXG4gICAgfVxyXG4gICAgYXJyYXlbc2VsZWN0ZWRdLnRhc2tzLmZvckVhY2goKGl0ZW0saSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gY3JlYXRlVGFza1VpKGl0ZW0saSk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZCh0YXNrcyk7XHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuLyogPC0tLS0tLS0tIE1lbnUgLS0tLS0tLS0+ICovXHJcbmZ1bmN0aW9uIHRvZG9NZW51KCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiXHJcbiAgICBjb25zdCBidXR0b25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBidXR0b25JbWFnZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcGx1cy5zdmdcIjtcclxuICAgIGFkZFByb2plY3RCdXR0b24uYXBwZW5kKGJ1dHRvbkltYWdlKTtcclxuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RcIik7XHJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RCdXR0b25zTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHByb2plY3RCdXR0b25zTGlzdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvbnNTZWN0aW9uXCIpO1xyXG5cclxuICAgIGNyZWF0ZVByb2plY3RCdXR0b24ocHJvamVjdEFycmF5LHByb2plY3RCdXR0b25zTGlzdCk7XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGFkZFByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0Rm9ybVwiKTtcclxuICAgIGFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24ocHJvamVjdEFycmF5LHByb2plY3RCdXR0b25zTGlzdCk7XHJcbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIlxyXG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kKHByb2plY3RUaXRsZUlucHV0LHN1Ym1pdFByb2plY3RCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IGxpc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBsaXN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1zZWN0aW9uXCIpO1xyXG4gICAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xyXG4gICAgbGlzdFNlY3Rpb24uYXBwZW5kKGxpc3RUaXRsZSxhZGRQcm9qZWN0QnV0dG9uLGFkZFByb2plY3RGb3JtLHByb2plY3RCdXR0b25zTGlzdCk7XHJcblxyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwidG9kb01lbnVcIik7XHJcbiAgICBtZW51LmFwcGVuZChsaXN0U2VjdGlvbilcclxuICAgIHJldHVybiBtZW51XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QnV0dG9uKGFycmF5LHBhcmVudCl7XHJcbiAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKVxyXG4gICAgfVxyXG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlbSxpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBlbGVtLm5hbWU7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIilcclxuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcbiAgICAgICAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlU2VsZWN0ZWRQcm9qZWN0KGluZGV4KVxyXG4gICAgICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIHdoaWxlKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtLnRhc2tzLmZvckVhY2goKGl0ZW0saSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza3MgPSBjcmVhdGVUYXNrVWkoaXRlbSxpKTtcclxuICAgICAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRhc2tzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvamVjdEl0ZW0uZGF0YXNldC5wcm9qZWN0ID0gaW5kZXg7XHJcbiAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kKHByb2plY3RCdXR0b24sZGVsZXRlUHJvamVjdEJ1dHRvbihhcnJheSxwYXJlbnQpKVxyXG4gICAgICAgIHBhcmVudC5hcHBlbmQocHJvamVjdEl0ZW0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEJ1dHRvbihhcnJheSxwYXJlbnQpIHtcclxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjsgLy9DYW1iaWFyIHBvciB1biBpY29ub1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoZXZlbnQpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uKGFycmF5LHBhcmVudCk7XHJcbiAgICAgICAgICAgIHNldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIHdoaWxlKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICByZXR1cm4gZGVsZXRlUHJvamVjdEJ1dHRvbjtcclxufVxyXG4vKjwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBOYXYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xyXG5mdW5jdGlvbiBuYXZCYXIoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVG9kbyBMaXN0XCI7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibmF2LXRpdGxlXCIpO1xyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG4gICAgbG9nby5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvY2FsZW5kYXItY2hlY2suc3ZnXCJcclxuICAgIGNvbnN0IGlucHV0RmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBpbnB1dEZpbHRlci5jbGFzc0xpc3QuYWRkKFwiaW5wdXRGaWx0ZXJcIik7XHJcblxyXG4gICAgbmF2LmFwcGVuZChsb2dvLHRpdGxlLGlucHV0RmlsdGVyKTtcclxuXHJcbiAgICByZXR1cm4gbmF2XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY3JlYXRlVUkgfSBmcm9tIFwiLi9jb21wb25lbnRzL3VpXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL21haW4uY3NzXCI7XHJcblxyXG5jcmVhdGVVSSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
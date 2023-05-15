"use strict";
(() => {
var exports = {};
exports.id = 934;
exports.ids = [934,519];
exports.modules = {

/***/ 9148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Categories)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Categories/Category.jsx


const Category = ({ category , filterCategories  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "pb-5",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                    className: "mb-4 font-semibold text-gray-800 pb-3 border-b-2 border-blue-600",
                    children: "Categories"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "flex flex-col h-[200px] overflow-y-scroll divide-y divide-slate-300",
                    children: category.map((cate)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: " text-gray-500 px-4 py-2  hover:bg-blue-500 hover:text-white text-left ",
                            onClick: ()=>filterCategories(cate),
                            children: cate
                        }, cate);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Categories_Category = (Category);

;// CONCATENATED MODULE: ./components/Categories/PickupLocations.jsx


const PickupLocations = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("h4", {
            className: "font-semibold",
            children: "Pickup Locations"
        })
    });
};
/* harmony default export */ const Categories_PickupLocations = ((/* unused pure expression or super */ null && (PickupLocations)));

;// CONCATENATED MODULE: ./components/Categories/PriceRange.jsx


const PriceRange = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "border-b border-blue-500 md:pb-5",
        children: [
            /*#__PURE__*/ _jsx("h4", {
                className: "mb-4 font-semibold text-gray-800",
                children: " Price Range"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ _jsx("input", {
                        type: "text",
                        placeholder: "Low",
                        className: "w-[49%] h-12 rounded px-3"
                    }),
                    /*#__PURE__*/ _jsx("input", {
                        type: "text",
                        placeholder: "High",
                        className: "w-[49%] h-12 rounded px-3"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Categories_PriceRange = ((/* unused pure expression or super */ null && (PriceRange)));

;// CONCATENATED MODULE: ./components/Categories/index.jsx




const CategoriesSection = ({ category , filterCategories  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "bg-gray-100  border p-5 rounded shadow-md mr-4 w-full md:w-[300px]",
        children: /*#__PURE__*/ jsx_runtime.jsx(Categories_Category, {
            category: category,
            filterCategories: filterCategories
        })
    });
};
/* harmony default export */ const Categories = (CategoriesSection);


/***/ }),

/***/ 3516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_meal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9937);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5174);
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);








function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function MealItem({ meal  }) {
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .y);
    const { cart  } = state;
    const addToCartHandler = (meal)=>{
        const existItem = cart.cartItems.find((x)=>x.slug === meal.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        dispatch({
            type: "CART_ADD_ITEM",
            payload: {
                ...meal,
                quantity
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative card mb-10 md:mb-0 ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "absolute bg-red-500  px-2 text-white text-sm font-semibold right-2 rounded",
                    children: meal.category
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/meal/${meal.slug}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                        src: meal.imageUrl,
                        alt: meal.name,
                        width: 200,
                        height: 160
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-2",
                    onClick: ()=>setOpenModal(true),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative flex ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-md mt-3 font-bold leading-5 cursor-pointer mb-2 text-gray-800",
                                children: meal.name
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-md text-gray-500 leading-4 mb-3",
                            children: meal.description
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col px-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "text-sm mb-1 text-lg font-bold text-gray-800",
                                    children: [
                                        "$",
                                        meal.price
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "ml-1 flex items-center",
                                    children: [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4
                                    ].map((rating)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaStar, {
                                            className: classNames(meal.rating > rating ? "text-yellow-400" : "text-gray-200", "h-5 w-5 flex-shrink-0"),
                                            "aria-hidden": "true"
                                        }, rating))
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: " text-white m-2 py-1 px-3 bg-blue-400 hover:bg-blue-500 rounded",
                            onClick: ()=>addToCartHandler(meal),
                            children: "ADD"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center justify-between"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_meal_modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    open: openModal,
                    meal: meal,
                    onClose: ()=>setOpenModal(false)
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MealItem);


/***/ }),

/***/ 4245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5258);
/* harmony import */ var _components_Menu_MealItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3516);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5174);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9148);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_2__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Menu() {
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const allCategories = [
        "All",
        ...new Set(_utils_data__WEBPACK_IMPORTED_MODULE_4__/* ["default"].meals.map */ .Z.meals.map((item)=>item.category))
    ];
    const [mealsInfo, setMealsInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_data__WEBPACK_IMPORTED_MODULE_4__/* ["default"].meals */ .Z.meals);
    // console.log("mealsinfo", mealsInfo);
    const [category, seCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allCategories);
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const filterCategories = (category)=>{
        if (category === "All") {
            setMealsInfo(mealsInfo);
            return;
        }
        const newitems = mealsInfo.filter((meal)=>meal.category === category);
        setMealsInfo(newitems);
    };
    const filterSearch = (e)=>{
        const enteredSearch = e.target.value.toLowerCase();
        const filteredSearch = mealsInfo.filter((item)=>item.name.toLowerCase().includes(enteredSearch));
        setSearch(filteredSearch);
        setMealsInfo(filteredSearch);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "MPO Menu",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-white",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto  px-0  sm:px-6 lg:px-8 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex bg-yellow-300 p-3 mt-5 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaMapMarkerAlt, {
                                size: 25
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "ml-2",
                                children: "Delivering To 14145 Ikorodu Close, Lagos"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-3 mb-5 flex relative mx-5 md:mx-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                // value={search}
                                onChange: filterSearch,
                                type: "text",
                                placeholder: "Search for meals...",
                                className: " hover:shadow-lg border w-full py-3 px-4 rounded outline-none bg-gray-200"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaSearch, {
                                size: 25,
                                className: "text-blue-600 absolute right-5 top-3"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-start flex-col md:flex-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:w-1/4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Categories__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    category: category,
                                    filterCategories: filterCategories
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full md:w-3/4 py-5 md:ml-7 md:py-6 md:pt-0 rounded mb-20 ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    role: "list",
                                    className: "space-y-1 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8 sm:space-y-0 lg:gap-x-8",
                                    children: mealsInfo.map((meal)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Menu_MealItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                meal: meal
                                            }, meal.slug)
                                        }))
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,435,258,937,174], () => (__webpack_exec__(4245)));
module.exports = __webpack_exports__;

})();
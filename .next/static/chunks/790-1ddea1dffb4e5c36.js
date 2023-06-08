"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[790],{9937:function(e,t,s){s.r(t);var l=s(5893),r=s(1664),a=s.n(r),n=s(7294),i=s(5435),c=s(5675),o=s.n(c),d=s(9583);t.default=function(e){let{open:t,meal:s,onClose:r}=e,{state:c,dispatch:m}=(0,n.useContext)(i.y);if(!t)return null;let x=e=>{let t=c.cart.cartItems.find(t=>t.slug===e.slug),s=t?t.quantity+1:1;m({type:"CART_ADD_ITEM",payload:{...e,quantity:s}})};return(0,l.jsx)("div",{className:"fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center",id:"wrapper",children:(0,l.jsxs)("div",{className:"bg-white relative modalCard flex ",children:[(0,l.jsxs)("div",{className:"flex text-md cursor-pointer items-center p-3 gap-2 font-semibold text-gray-600 absolute top-0 right-0 ",onClick:()=>r(),children:[(0,l.jsx)("p",{children:"Close"}),(0,l.jsx)(d.fGx,{className:"h-5 w-5"})]}),(0,l.jsx)("div",{className:"w-[700px] bg-white   flex flex-col ",children:(0,l.jsx)("div",{className:"",children:(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(a(),{href:"/meal/".concat(s.slug),children:(0,l.jsx)(o(),{className:"p-3",src:s.imageUrl,alt:s.name,width:360,height:360})}),(0,l.jsxs)("div",{className:"flex gap-3 p-3",children:[(0,l.jsx)(o(),{src:s.imageUrl,alt:s.name,width:100,height:80}),(0,l.jsx)(o(),{src:s.imageUrl,alt:s.name,width:100,height:80}),(0,l.jsx)(o(),{src:s.imageUrl,alt:s.name,width:100,height:80})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("hr",{className:"mt-3 mr-6"}),(0,l.jsxs)("div",{className:"p-4",children:[(0,l.jsx)("div",{className:"flex justify-between relative",children:(0,l.jsx)("h2",{className:"font-bold text-xl",children:s.name})}),(0,l.jsxs)("p",{className:"mt-1 text-lg ",children:["$",s.price]}),(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsxs)("p",{children:[s.rating,"/5"]}),(0,l.jsx)("div",{className:"flex h-14 w-14  ",children:Array(s.rating).fill().map((e,t)=>(0,l.jsx)(d.QJe,{className:"text-gray-700"},t))}),(0,l.jsx)("p",{className:"underline cursor-pointer",children:"See all reviews"})]}),(0,l.jsx)("h3",{className:"font-semibold text-lg text-gray-500 ",children:"Health Benefits"}),(0,l.jsxs)("p",{className:"text-sm text-gray-600 mb-3",children:["Healthy meals make you live longer"," ",(0,l.jsx)("span",{className:"underline cursor-pointer",children:"Click more"})]}),(0,l.jsx)("h3",{className:"font-semibold text-lg text-gray-500 mb-1",children:"Quantity"}),(0,l.jsxs)("div",{className:"flex gap-2 justify-between",children:[(0,l.jsxs)("div",{className:"border p-2 pr-10",children:[(0,l.jsx)("p",{children:"Small"}),(0,l.jsx)("p",{className:"text-xs font-semibold text-gray-400",children:"120 by 18 inches"})]}),(0,l.jsxs)("div",{className:"border p-2 pr-10",children:[(0,l.jsx)("p",{children:"Medium"}),(0,l.jsx)("p",{className:"text-xs font-semibold text-gray-400",children:"150 by 18 inches"})]})]}),(0,l.jsx)("p",{className:"underline text-sm text-gray-500",children:"Find the perfect quantity?"}),(0,l.jsxs)("div",{className:"flex flex-col gap-2 mt-14",children:[(0,l.jsx)("button",{className:"bg-blue-600 text-white p-3",onClick:()=>x(s),children:"Add to Cart"}),(0,l.jsx)("button",{className:"border p-3",children:"Save To My List"})]})]})]})]})})})]})})}},8357:function(e,t,s){s.d(t,{w_:function(){return c}});var l=s(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=l.createContext&&l.createContext(r),n=function(){return(n=Object.assign||function(e){for(var t,s=1,l=arguments.length;s<l;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(s[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)0>t.indexOf(l[r])&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(s[l[r]]=e[l[r]]);return s};function c(e){return function(t){return l.createElement(o,n({attr:n({},e.attr)},t),function e(t){return t&&t.map(function(t,s){return l.createElement(t.tag,n({key:s},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var s,r=e.attr,a=e.size,c=e.title,o=i(e,["attr","size","title"]),d=a||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),l.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:s,style:n(n({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),e.children)};return void 0!==a?l.createElement(a.Consumer,null,function(e){return t(e)}):t(r)}}}]);
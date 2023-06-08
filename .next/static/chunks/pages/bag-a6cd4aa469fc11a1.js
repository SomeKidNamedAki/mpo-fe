(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[482],{8510:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bag",function(){return t(390)}])},2116:function(e,s,t){"use strict";var i=t(5893);t(7294),t(2228),s.Z=function(){return(0,i.jsx)("div",{className:"bg-gray-50",children:(0,i.jsx)("div",{className:"mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8",children:(0,i.jsx)("div",{className:"mx-auto max-w-3xl divide-y-2 divide-gray-200",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Frequently asked questions"}),(0,i.jsx)("p",{className:"text-center mt-3",children:"Here are few of the most frequently asked questions by our valueable customers"})]})})})})}},2228:function(e,s,t){"use strict";var i=t(5893);t(7294);let r=[{name:"Great for drinks",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste."},{name:"Durable hardware",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste."},{name:"Eco-friendly",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste."},{name:"Minimal Design",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste."}];s.Z=function(){return(0,i.jsx)("div",{className:"bg-white py-12 ",children:(0,i.jsx)("div",{className:"mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8",children:(0,i.jsx)("dl",{className:"space-y-10 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0",children:r.map(e=>(0,i.jsxs)("div",{children:[(0,i.jsx)("dt",{children:(0,i.jsx)("p",{className:"mt-2 text-lg font-medium leading-6 text-gray-900",children:e.name})}),(0,i.jsx)("dd",{className:"mt-2 text-base text-gray-500",children:e.description})]},e.name))})})})}},390:function(e,s,t){"use strict";t.r(s);var i=t(5893),r=t(1664),a=t.n(r),l=t(1163),n=t(7294),d=t(985),c=t(2116),m=t(6011),x=t(5435);t(5152);var o=t(5675),u=t.n(o);s.default=function(){let e=(0,l.useRouter)(),{state:s,dispatch:t}=(0,n.useContext)(x.y),{cart:{cartItems:r}}=s;console.log(s.cart.cartItems);let o=e=>{t({type:"CART_REMOVE_ITEM",payload:e})},h=async(e,s)=>{let i=Number(s);t({type:"CART_ADD_ITEM",payload:{...e,quantity:i}})};return(0,i.jsxs)(d.Z,{title:"MPO - Shopping Bag",children:[(0,i.jsxs)("div",{className:"container mx-auto mt-10 p-5",children:[(0,i.jsxs)("div",{className:"border-b border-gray-200 pb-3",children:[" ",(0,i.jsx)("a",{href:"/menu",className:"flex items-center text-sm mb-2 mr-2",children:(0,i.jsx)("p",{children:"Back"})}),(0,i.jsx)("h1",{className:" text-3xl font-bold",children:"My Bag"})]}),(0,i.jsxs)("div",{className:"mt-1 md:mt-12 flex items-start flex-col md:flex-row",children:[(0,i.jsx)("section",{"aria-labelledby":"cart-heading",className:"md:w-2/3",children:0===r.length?(0,i.jsx)("div",{children:(0,i.jsxs)("li",{className:"flex  mt-15 md:mt-32 py-6 items-center justify-center",children:[(0,i.jsx)(u(),{src:"/images/empty.png",alt:"empty",width:100,height:100}),(0,i.jsx)("div",{className:"flex flex-col justify-between space-y-4 grow",children:(0,i.jsxs)("div",{className:"space-y-1 text-sm grow",children:[(0,i.jsx)("div",{className:"flex items-center justify-between grow mb-2",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Uh Oh!"}),(0,i.jsx)("h3",{className:"text-gray-900 text-xl font-medium",children:"Your cart is empty!"}),(0,i.jsx)("span",{className:"text-gray-900 text-xl font-medium",children:"Time to pick your meals for the week!"})]})}),(0,i.jsx)(a(),{href:"/menu",children:(0,i.jsx)("span",{className:"flex underline text-lg font-bold text-blue-500 cursor-pointer",children:"Add meals to cart"})})]})})]})}):(0,i.jsx)("div",{children:(0,i.jsx)("ul",{role:"list",className:"flex-auto divide-y divide-gray-200 overflow-y-auto md:px-6 md:pl-0 md:mr-10",children:r.map(e=>(0,i.jsxs)("li",{className:"flex space-x-6 py-6",children:[(0,i.jsx)(a(),{href:"/menu/".concat(e.slug),children:(0,i.jsx)(u(),{src:e.imageUrl,alt:e.name,height:50,width:50})}),(0,i.jsxs)("div",{className:"flex flex-col justify-between space-y-4 grow",children:[(0,i.jsxs)("div",{className:"space-y-1 text-sm grow",children:[(0,i.jsxs)("div",{className:"flex items-center justify-between grow",children:[(0,i.jsx)("div",{children:(0,i.jsx)("h3",{className:"text-gray-900 text-lg font-semibold",children:e.name})}),(0,i.jsx)("select",{value:e.quantity,onChange:s=>h(e,s.target.value),className:"max-w-full border border-gray-300 py-1.5 px-2 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm",children:[...Array(e.countInStock).keys()].map(e=>(0,i.jsx)("option",{children:e+1}))})]}),(0,i.jsx)("p",{children:e.description}),(0,i.jsx)("p",{children:e.rating}),(0,i.jsxs)("p",{className:"flex justify-end font-bold text-2xl text-gray-900",children:["$",e.price]})]}),(0,i.jsxs)("div",{className:"flex space-x-4",children:[(0,i.jsx)("button",{type:"button",className:"text-sm font-medium  hover:text-indigo-500 underline",children:"Add to favorites"}),(0,i.jsx)("div",{className:"flex border-l border-gray-300 pl-4",children:(0,i.jsx)("button",{onClick:()=>o(e),type:"button",className:"text-sm font-medium text-red-600 hover:text-red-400 underline",children:"Remove"})})]})]})]},e.slug))})})}),(0,i.jsxs)("section",{"aria-labelledby":"summary-heading",className:"mt-16 bg-gray-100  px-4 py-6 sm:p-6 lg:mt-0 lg:p-8 rounded w-full md:w-1/3 ",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{id:"summary-heading",className:"text-2xl mb-10 font-bold text-gray-900",children:"Summary"}),(0,i.jsxs)("dl",{className:"mt-6 space-y-2",children:[(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsxs)("dt",{className:"text-sm text-gray-600",children:["Subtotal (",r.reduce((e,s)=>e+s.quantity,0),")"]}),(0,i.jsxs)("dd",{className:"text-sm font-medium text-gray-900",children:["$",r.reduce((e,s)=>e+s.quantity*s.price,0)]})]}),(0,i.jsxs)("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[(0,i.jsx)("dt",{className:"flex items-center text-sm text-gray-600",children:(0,i.jsx)("span",{children:"Shipping"})}),(0,i.jsx)("dd",{className:"text-sm font-medium text-gray-900",children:"$30"})]}),(0,i.jsxs)("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[(0,i.jsx)("dt",{className:"flex text-sm text-gray-600",children:(0,i.jsx)("span",{children:"Tax "})}),(0,i.jsx)("dd",{className:"text-sm font-medium text-gray-900",children:"$39"})]})]})]}),(0,i.jsxs)("div",{className:"mt-6",children:[(0,i.jsxs)("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4 mb-6",children:[(0,i.jsx)("dt",{className:"text-xl font-semibold text-gray-900",children:"Total"}),(0,i.jsxs)("dd",{className:"text-xl font-semibold text-gray-900",children:[" ","$",r.reduce((e,s)=>e+s.quantity*s.price,0)+69]})]}),(0,i.jsxs)("button",{type:"button",onClick:()=>e.push("/shipping"),className:"w-full  border border-transparent bg-indigo-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50",children:["Checkout $",r.reduce((e,s)=>e+s.quantity*s.price,0)+69]})]})]}),(0,i.jsx)("input",{type:"hidden",name:"meals"})]})]}),(0,i.jsx)(c.Z,{}),(0,i.jsx)(m.Z,{})]})}}},function(e){e.O(0,[445,61,951,380,774,888,179],function(){return e(e.s=8510)}),_N_E=e.O()}]);
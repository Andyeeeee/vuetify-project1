import{Y as m,x as h,aF as k,a2 as s,a4 as b,a5 as n,c as r,aN as y,af as t,a3 as c,a8 as i,ad as e,a7 as _}from"./index-e94b06ba.js";import{b as V,a as p,V as g}from"./VRow-16ca80fc.js";const w=t("h1",{class:"text-center"},"訂單管理",-1),x=t("thead",{style:{"background-color":"#fcae11",color:"black"}},[t("tr",null,[t("td",null,"ID"),t("td",null,"日期"),t("td",null,"使用者訂單"),t("td",null,"金額"),t("td",null,"商品")])],-1),D={__name:"OrdersView",setup(B){const f=m(),d=h([]);return(async()=>{try{const{data:u}=await k.get("/orders/all");d.value.push(...u.result.map(o=>(o.total=o.cart.reduce((a,l)=>a+l.product.price*l.quantity,0),o)))}catch(u){f({text:u.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(u,o)=>(s(),b(V,null,{default:n(()=>[r(g,null,{default:n(()=>[r(p,{cols:"12"},{default:n(()=>[w]),_:1}),r(p,{cols:"12"},{default:n(()=>[r(y,null,{default:n(()=>[x,t("tbody",null,[(s(!0),c(_,null,i(d.value,a=>(s(),c("tr",{key:a._id},[t("td",null,e(a._id),1),t("td",null,e(new Date(a.date).toLocaleString()),1),t("td",null,e(a.user.account),1),t("td",null,e(a.total),1),t("td",null,[t("ul",null,[(s(!0),c(_,null,i(a.cart,l=>(s(),c("li",{key:l._id},e(l.product.name)+" * "+e(l.quantity),1))),128))])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{D as default};
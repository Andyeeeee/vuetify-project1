import{Y as u,x as _,aF as p,a2 as a,a3 as o,af as t,a7 as n,a8 as i,ad as h}from"./index-e94b06ba.js";const b=t("h1",{style:{color:"black"}},"訂單進度",-1),y={style:{display:"flex","justify-content":"center",width:"80%",height:"500px",margin:"auto","background-color":"#004886"}},k={style:{width:"50%","text-align":"center",border:"3px solid black"}},g=t("h2",{class:"title-box",style:{"background-color":"#fcae11",color:"#000"}}," 目前訂單 ",-1),x=t("div",{style:{width:"50%",border:"3px solid black"}},[t("h2",{class:"title-box",style:{"background-color":"#fcae11",color:"#000"}}," 已完成訂單 ")],-1),w={__name:"NowOrder",setup(f){const d=u(),c=_([]);return(async()=>{try{const{data:s}=await p.get("/orders/all");console.log(c),c.value.push(...s.result.map(r=>(r.total=r.cart.reduce((l,e)=>l+e.product.price*e.quantity,0),r)))}catch(s){d({text:s.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(s,r)=>(a(),o(n,null,[b,t("div",y,[t("div",k,[g,(a(!0),o(n,null,i(c.value,l=>(a(),o("tr",{key:l._id},[t("td",null,[t("ul",null,[(a(!0),o(n,null,i(l.cart,e=>(a(),o("li",{key:e._id},h(e.product._id),1))),128))])])]))),128))]),x])],64))}};export{w as default};
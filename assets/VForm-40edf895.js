import{p as b,m as p,bb as v,g as F,bc as V,x as y,u as h,c as R,b5 as P}from"./index-cf388dd4.js";const k=b({...p(),...v()},"VForm"),x=F()({name:"VForm",props:k(),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,i){let{slots:n,emit:u}=i;const r=V(o),s=y();function c(t){t.preventDefault(),r.reset()}function f(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),u("submit",a),a.defaultPrevented||e.then(l=>{var m;let{valid:d}=l;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return h(()=>{var t;return R("form",{ref:s,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:c,onSubmit:f},[(t=n.default)==null?void 0:t.call(n,r)])}),P(r,s)}});export{x as V};

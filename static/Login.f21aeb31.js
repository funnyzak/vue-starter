var f=(s,c,t)=>new Promise((m,o)=>{var d=e=>{try{a(t.next(e))}catch(r){o(r)}},p=e=>{try{a(t.throw(e))}catch(r){o(r)}},a=e=>e.done?m(e.value):Promise.resolve(e.value).then(d,p);a((t=t.apply(s,c)).next())});import{l as b,m as C,e as F,n as v,f as B,o as R,u as w}from"./main.98228b9e.js";import{y as x,a as y,w as A,o as I,B as U,E as l,G as h,u,H as _}from"./_plugin-vue_export-helper.1c13e0b0.js";const{wsCache:E}=b(),D=C({id:"user",state:()=>({permissions:[],roles:[],user:{id:0,avatar:"",nickname:""}}),persist:{enabled:!0},getters:{getUserInfo(){return this}},actions:{setUserInfo(s){this.resetState(),this.permissions=s.permissions,this.roles=s.roles,this.user=s.user,E.set("user",s)},resetState(){this.permissions=[],this.roles=[],this.user={id:0,avatar:"",nickname:""}}}}),N={class:"text-center mt-30"},L=_(" \u4F60\u8FD8\u6CA1\u6709\u767B\u9646\u54E6\uFF0C\u73B0\u5728 "),V=_("\uFF1F "),M=x({__name:"Login",setup(s){const{t:c}=B(),t=F(),m=D(),o=v(),d=y(""),{currentRoute:p,addRoute:a,push:e,back:r}=w(),g={id:1,accessToken:"accessToken7",refreshToken:"refreshToken7",userId:1,userType:1,clientId:"7",expiresTime:new Date().getTime()+3600},k={user:{id:1,nickname:"leon"},permissions:["user.home"],roles:[]},S=()=>f(this,null,function*(){m.setUserInfo(k),R(g),yield o.generateRoutes(k.permissions),o.getAddRouters.forEach(n=>{a(n)}),o.setIsAddRouters(!0),e({name:"UserMessage"})});return A(()=>p.value,n=>{var i;d.value=(i=n==null?void 0:n.query)==null?void 0:i.redirect},{immediate:!0}),(n,i)=>(I(),U("div",N,[l("div",null,h(u(t).getAppName),1),L,l("button",{class:"btn",onClick:S},h(u(c)("common.login")),1),V,l("button",{class:"btn",onClick:i[0]||(i[0]=(...T)=>u(r)&&u(r)(...T))},h(u(c)("common.back")),1)]))}});export{M as default};

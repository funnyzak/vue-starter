System.register(["./_plugin-vue_export-helper-legacy.5436ed13.js","./main-legacy.855ca6c9.js"],(function(e){"use strict";var s,t,n,r,o,u,i,c,a,l,m,d,g,v,p,k,f;return{setters:[e=>{s=e.j,t=e.r,n=e.w,r=e.l,o=e.C,u=e.H,i=e.I,c=e.u,a=e.J,l=e._},e=>{m=e.e,d=e.f,g=e.m,v=e.u,p=e.g,k=e.n,f=e.o}],execute:function(){const h={class:"text-center mt-30"},T=a(" 你还没有登陆哦，现在 "),_=a("？ ");e("default",l(s({__name:"Login",setup(e){const{t:s}=p(),a=m(),l=d(),b=g(),y=t(""),{currentRoute:w,addRoute:I,push:R,back:x}=v(),j={id:1,accessToken:"accessToken7",refreshToken:"refreshToken7",userId:1,userType:1,clientId:"7",expiresTime:(new Date).getTime()+3600},A={user:{id:1,nickname:"leon"},permissions:["user.home"],roles:[]},C=async()=>{l.setUserInfo(A),k(A),f(j),await b.generateRoutes(A.permissions),b.getAddRouters.forEach((e=>{I(e)})),b.setIsAddRouters(!0),R({name:"UserHome"})};return n((()=>w.value),(e=>{var s;y.value=null==e||null===(s=e.query)||void 0===s?void 0:s.redirect}),{immediate:!0}),(e,t)=>(r(),o("div",h,[u("div",null,i(c(a).getAppName),1),T,u("button",{class:"btn",onClick:C},i(c(s)("common.login")),1),_,u("button",{class:"btn",onClick:t[0]||(t[0]=(...e)=>c(x)&&c(x)(...e))},i(c(s)("common.back")),1)]))}}),[["__file","/home/runner/work/vue-starter/vue-starter/src/views/Login/Login.vue"]]))}}}));
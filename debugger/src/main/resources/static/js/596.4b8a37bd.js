"use strict";(self["webpackChunkdebug_frontend"]=self["webpackChunkdebug_frontend"]||[]).push([[596],{4507:function(t,e,n){n.d(e,{A5:function(){return u},Pu:function(){return i},RU:function(){return d},UK:function(){return o},h8:function(){return a},pu:function(){return l},rK:function(){return s}});var r=n(3326);function a(t){return(0,r.Z)({url:"/data/version/"+t,method:"get"})}function u(){return(0,r.Z)({url:"/data/existtarget",method:"get"})}function i(t){return(0,r.Z)({url:"/data/exist/"+t,method:"get"})}function l(t){return(0,r.Z)({url:"/data/"+t,method:"get"})}function o(){return(0,r.Z)({url:"/data/export/all",method:"get",responseType:"blob"})}function s(){return(0,r.Z)({url:"/data/modify/spring",method:"get"})}function d(){return(0,r.Z)({url:"/data/modify/spring/prefix",method:"get"})}},4596:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(8997),a=n(1165);const u={key:0},i={key:0},l=(0,r.Uk)(" count: ");function o(t,e,n,o,s,d){const h=(0,r.up)("el-header"),f=(0,r.up)("el-table-column"),c=(0,r.up)("el-table"),p=(0,r.up)("el-main"),m=(0,r.up)("el-tag"),g=(0,r.up)("el-footer"),b=(0,r.up)("el-container");return s.exist?((0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[s.modify?((0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("h2",null,"修改框架的匹配模式: "+(0,a.zw)(s.prefix),1)])):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{data:s.tableData,style:{width:"100%"},height:"400"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{prop:"api",label:"接口",width:"300"}),(0,r.Wm)(f,{prop:"name",label:"映射类",width:"600"})])),_:1},8,["data"])])),_:1}),(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[l,(0,r.Wm)(m,{type:"info"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(s.count),1)])),_:1})])),_:1})])),_:1})])):(0,r.kq)("",!0)}var s=n(4507),d=n(7066),h={name:"Spring",data(){return{tableData:[],version:"",exist:!1,count:0,modify:!1,prefix:null}},async created(){await(0,s.Pu)("spring").then((t=>{t.data.msg?this.exist=!0:((0,d.v)("路由","Spring路由获取失败","error"),this.$router.push("/main"),this.exist=!1)})),this.exist&&((0,s.pu)("spring").then((t=>{let e=Object.keys(t.data.msg);this.count=e.length;let n=[];for(let r=0;r<e.length;r++){let a=new Object;a.api=e[r],a.name=t.data.msg[e[r]],n.push(a)}this.tableData=n})),(0,s.h8)("spring").then((t=>{this.version=t.data.msg}))),(0,s.rK)().then((t=>{t.data.msg&&(this.modify=!0)})),(0,s.RU)().then((t=>{this.prefix=t.data.msg}))},mounted(){const t=setInterval((()=>{(0,s.pu)("spring").then((t=>{let e=Object.keys(t.data.msg);this.count=e.length;let n=[];for(let r=0;r<e.length;r++){let a=new Object;a.api=e[r],a.name=t.data.msg[e[r]],n.push(a)}this.tableData=n}))}),1e3);(0,r.Jd)((()=>{clearInterval(t)}))}},f=n(6150);const c=(0,f.Z)(h,[["render",o]]);var p=c}}]);
//# sourceMappingURL=596.4b8a37bd.js.map
webpackJsonp([4],{"61M3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),o=a("fZjL"),c=a.n(o),s=a("exGp"),i=a.n(s),u=a("nEeT"),l={name:"Tomcat",data:function(){return{tableData:[],version:"",exist:!1,count:0}},created:function(){var t=this;return i()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)("tomcat").then(function(e){e.data.msg?t.exist=!0:(t.$message.error("无对应路由"),t.$router.push("/main"),t.exist=!1)});case 2:t.exist&&(Object(u.f)("tomcat").then(function(e){var a=c()(e.data.msg);t.count=a.length;for(var n=[],r=0;r<a.length;r++){var o=new Object;o.api=a[r],o.name=e.data.msg[a[r]],n.push(o)}t.tableData=n}),Object(u.g)("tomcat").then(function(e){t.version=e.data.msg}));case 3:case"end":return e.stop()}},e,t)}))()},mounted:function(){var t=this,e=setInterval(function(){Object(u.f)("tomcat").then(function(e){var a=c()(e.data.msg);t.count=a.length;for(var n=[],r=0;r<a.length;r++){var o=new Object;o.api=a[r],o.name=e.data.msg[a[r]],n.push(o)}t.tableData=n})},1e3);this.$once("hook:beforeDestroy",function(){clearInterval(e)})}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.exist?a("div",[a("el-container",[a("el-header",[a("h2",[t._v("Version: "+t._s(t.version))])]),t._v(" "),a("el-main",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"400"}},[a("el-table-column",{attrs:{prop:"api",label:"接口",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"映射类",width:"600"}})],1)],1),t._v(" "),a("el-footer",[t._v("\n      count: "),a("el-tag",{attrs:{type:"info"}},[t._v(t._s(t.count))])],1)],1)],1):t._e()},staticRenderFns:[]};var v=a("VU/8")(l,f,!1,function(t){a("TXM/")},"data-v-73f67948",null);e.default=v.exports},"TXM/":function(t,e){}});
//# sourceMappingURL=4.167b9c4b0fd0858d7898.js.map
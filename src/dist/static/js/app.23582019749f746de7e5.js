webpackJsonp([1],{"/MZQ":function(e,t){},"5VEP":function(e,t){},HuWz:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var l=a("VU/8")({name:"App"},n,!1,function(e){a("HuWz")},null,null).exports,r=a("/ocq"),i=a("mvHQ"),o=a.n(i),c=a("mtWM"),d=a.n(c),u={name:"table",props:["tableData"],data:function(){return{}},methods:{editContent:function(e){var t=e.id,a=e.title,s=e.type,n=e.address;this.$emit("edit",{id:t,title:a,type:s,address:n})},tableRowClassName:function(e){e.row;var t=e.rowIndex;return 1===t?"warning-row":3===t?"success-row":""},linkServer:function(e){var t=this,a=e.address,s=e.type;this.$confirm("您将打开 "+(s?"mysql":"redis")+" 地址为 "+a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){d()({method:"post",url:"/link",data:{address:a,type:s}}).then(function(){t.$message({type:"success",message:"链接成功!"})})}).catch(function(){t.$message({type:"info",message:"已取消链接"})})}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"id",label:"id",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"名称",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(" "+e._s(t.row.type?"mysql":"redis"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.linkServer(t.row)}}},[e._v("链接服务器")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.editContent(t.row)}}},[e._v("编辑")])]}}])})],1)],1)},staticRenderFns:[]};var m=a("VU/8")(u,p,!1,function(e){a("vGXy")},"data-v-07e1c5c1",null).exports,f={data:function(){return{title:"",address:"",type:""}},methods:{checkAddress:function(){var e=this.address;if(e){var t=localStorage.tableData;JSON.parse(t).some(function(t){return t.address===e})&&this.$message({message:"该地址已存在",type:"success"})}},checkTitle:function(){var e=this.title;if(e){var t=localStorage.tableData;JSON.parse(t).some(function(t){return t.title===e})&&this.$message({message:"该名称已存在",type:"success"})}},submit:function(){var e=this,t=this.address,a=this.title,s=this.type;t&&a&&s?d()({method:"post",url:"/address",data:{address:t,type:s,title:a}}).then(function(){e.$message({message:"添加成功",type:"success"}),e.$emit("hideForm",{address:t,title:a,type:s})}):this.$message({message:"该 "+(!t&&"地址")+" "+(!a&&"名称")+" "+(!s&&"类型")+" 为空 请添加内容",type:"success"})}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{attrs:{clearable:""},on:{blur:e.checkAddress},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{clearable:""},on:{blur:e.checkTitle},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("el-option",{attrs:{label:"mysql",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"redis",value:"0"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确认添加配置")]),e._v(" "),a("el-button",{on:{click:function(t){e.$emit("hideForm")}}},[e._v("取消")])],1)],1)},staticRenderFns:[]};var h=a("VU/8")(f,v,!1,function(e){a("5VEP")},"data-v-6f3f8eaa",null).exports,b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v(" 名称 ")]),e._v(" "),a("el-input",{attrs:{placeholder:"title"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),a("p",[e._v(" 地址 ")]),e._v(" "),a("el-input",{attrs:{placeholder:"address"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),e._v(" "),a("p",[e._v(" 类型 ")]),e._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v("mysql")]),e._v(" "),a("el-radio",{attrs:{label:"0"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v("redis")])],1)},staticRenderFns:[]};var y=a("VU/8")({props:["title","address","type"],data:function(){return{}}},b,!1,function(e){a("/MZQ")},"data-v-7f927377",null).exports,_={name:"main",data:function(){return{isShow:!1,tableData:[]}},components:{Table:m,Form:h},mounted:function(){var e=this;d.a.get("/list").then(function(t){var a=t.data.result;e.tableData=a,window.localStorage.setItem("tableData",o()(a))})},methods:{editServer:function(e){e.id;var t=e.title,a=e.type,s=e.address,n=this.$createElement,l={title:t,type:a,address:s};console.log(l),this.$msgbox({title:"编辑",message:n(y,{attrs:{type:a,address:s,title:t}})})},showModal:function(){this.isShow=!0},hideModal:function(e){if(e){var t=e.address,a=e.title,s=e.type;this.tableData.push({address:t,title:a,type:s})}this.isShow=!1}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h4",[e._v(" 一键链接服务器 ")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:e.showModal,hideForm:e.hideModal}},[e._v("增加配置")]),e._v(" "),e.isShow?a("Form",{on:{hideForm:e.hideModal}}):e._e(),e._v(" "),a("Table",{attrs:{tableData:e.tableData},on:{edit:e.editServer}})],1)},staticRenderFns:[]};var g=a("VU/8")(_,w,!1,function(e){a("mab6")},"data-v-5f116e0a",null).exports;s.default.use(r.a);var k=new r.a({routes:[{path:"/",name:"main",component:g}]}),x=a("zL8q"),S=a.n(x);a("tvR6");s.default.config.productionTip=!1,s.default.use(S.a),new s.default({el:"#app",router:k,components:{App:l},template:"<App/>"})},mab6:function(e,t){},tvR6:function(e,t){},vGXy:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.23582019749f746de7e5.js.map
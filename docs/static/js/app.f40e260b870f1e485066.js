webpackJsonp([1],{"1RG5":function(e,t){},BfwJ:function(e,t){},Hz4q:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},i,!1,function(e){a("uf9R")},null,null).exports,s=a("/ocq"),o=a("mvHQ"),l=a.n(o),c={name:"Login",data:function(){return{logining:!1,ruleForm2:{account:"admin",checkPass:"123456"},rules2:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],checkPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!0}},methods:{handleSubmit2:function(){var e=this;this.$refs.ruleForm2.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.logining=!0;var a={username:e.ruleForm2.account,password:e.ruleForm2.checkPass};e.$api.requestLogin(a).then(function(t){e.logining=!1;var a=t.msg,n=t.code,i=t.user;200!==n?e.$message({message:a,type:"error"}):(sessionStorage.setItem("user",l()(i)),e.$router.push({path:"/LandingPageSetting"}))})})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bigbk"},[a("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm2,rules:e.rules2,"label-position":"left","label-width":"0px"}},[a("h3",{staticClass:"title"},[e._v("系统登录")]),e._v(" "),a("el-form-item",{attrs:{prop:"account"}},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.ruleForm2.account,callback:function(t){e.$set(e.ruleForm2,"account",t)},expression:"ruleForm2.account"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"checkPass"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),a("el-checkbox",{staticClass:"remember",attrs:{checked:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住密码")]),e._v(" "),a("el-form-item",{staticStyle:{width:"100%"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(t){return t.preventDefault(),e.handleSubmit2(t)}}},[e._v("登录")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(c,u,!1,function(e){a("1RG5")},"data-v-4635c0d6",null).exports,m=a("kMct"),f={components:{ElCol:m.a},name:"",created:function(){this.router=this.$router.options.routes.reverse()},data:function(){return{router:"",isCollapse:!0,isCollapseTransition:!1,activeIndex:"",sysUserAvatar:"",sysUserName:"",sysAdmin:""}},methods:{logout:function(){var e=this;this.$confirm("确认要离开吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){sessionStorage.removeItem("user"),e.$router.push("/login")}).catch(function(){})},handleSelect:function(){}},mounted:function(){var e=sessionStorage.getItem("user");e&&(e=JSON.parse(e),this.sysUserName=e.name||"",this.sysUserAvatar=e.avatar||"",this.sysAdmin=e.username||"")}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"container"},[a("el-col",{staticClass:"header",attrs:{span:24}},[a("el-col",{staticClass:"userinfo",attrs:{span:4}},[a("el-dropdown",{attrs:{trigger:"hover"}},[a("span",{staticClass:"el-dropdown-link userinfo-inner"},[a("img",{attrs:{src:this.sysUserAvatar}}),e._v(" "+e._s(e.sysUserName))]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("账号："+e._s(e.sysAdmin))]),e._v(" "),a("el-dropdown-item",[e._v("角色："+e._s("系统管理员"))]),e._v(" "),a("el-dropdown-item",[e._v("归属："+e._s("集团总部"))]),e._v(" "),a("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.logout(t)}}},[e._v("退出登录")])],1)],1)],1),e._v(" "),a("el-col",{staticClass:"logo-bar",attrs:{span:4}},[a("span",[e._v("全网导客平台")])]),e._v(" "),a("el-col",{staticClass:"menu",attrs:{span:16}},[a("el-menu",{staticClass:"el-menu",attrs:{"default-active":e.activeIndex,mode:"horizontal",router:"","background-color":"#202A3E","text-color":"#fff","active-text-color":"#fff"},on:{select:e.handleSelect}},[e._l(e.router,function(t,n){return t.hidden?e._e():[t.leaf?e._e():a("el-submenu",{attrs:{index:n+""}},[a("template",{slot:"title"},[e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(t){return t.hidden?e._e():a("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v(e._s(t.name))])})],2)]}),e._v(" "),a("el-menu-item",{attrs:{index:"/"}},[e._v("首页")])],2)],1)],1),e._v(" "),a("el-col",{staticClass:"main",attrs:{span:24}},[a("section",{staticClass:"content-container"},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return a("el-breadcrumb-item",{key:t.path},[e._v("\n              "+e._s(t.name)+"\n            ")])}))],1),e._v(" "),a("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)])])],1)},staticRenderFns:[]};var h=a("VU/8")(f,p,!1,function(e){a("mXCT")},"data-v-4f28f39f",null).exports,v={render:function(){var e=this.$createElement;return(this._self._c||e)("p",{staticClass:"page-container"},[this._v("404 page not found")])},staticRenderFns:[]};var g=a("VU/8")(null,v,!1,function(e){a("BfwJ")},"data-v-741a5012",null).exports,b=a("bOdI"),_=a.n(b),y=a("jwfv"),S=a("ufP2"),w=a("9BW/"),C=a("3Q1+"),F={name:"ElFormItem",componentName:"ElFormItem",mixins:[S.a],provide:function(){return{elFormItem:this}},inject:["elForm"],props:{label:String,labelWidth:String,prop:String,required:{type:Boolean,default:void 0},rules:[Object,Array],error:String,validateStatus:String,for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:String},watch:{error:{immediate:!0,handler:function(e){this.validateMessage=e,this.validateState=e?"error":""}},validateStatus:function(e){this.validateState=e}},computed:{labelFor:function(){return this.for||this.prop},labelStyle:function(){var e={};if("top"===this.form.labelPosition)return e;var t=this.labelWidth||this.form.labelWidth;return t&&(e.width=t),e},contentStyle:function(){var e={},t=this.label;if("top"===this.form.labelPosition||this.form.inline)return e;if(!t&&!this.labelWidth&&this.isNested)return e;var a=this.labelWidth||this.form.labelWidth;return a&&(e.marginLeft=a),e},form:function(){for(var e=this.$parent,t=e.$options.componentName;"ElForm"!==t;)"ElFormItem"===t&&(this.isNested=!0),t=(e=e.$parent).$options.componentName;return e},fieldValue:{cache:!1,get:function(){var e=this.form.model;if(e&&this.prop){var t=this.prop;return-1!==t.indexOf(":")&&(t=t.replace(/:/,".")),Object(C.a)(e,t,!0).v}}},isRequired:function(){var e=this.getRules(),t=!1;return e&&e.length&&e.every(function(e){return!e.required||(t=!0,!1)}),t},_formSize:function(){return this.elForm.size},elFormItemSize:function(){return this.size||this._formSize},sizeClass:function(){return(this.$ELEMENT||{}).size||this.elFormItemSize}},data:function(){return{validateState:"",validateMessage:"",validateDisabled:!1,validator:{},isNested:!1}},methods:{validate:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C.b;this.validateDisabled=!1;var n=this.getFilteredRule(e);if((!n||0===n.length)&&void 0===this.required)return a(),!0;this.validateState="validating";var i={};n&&n.length>0&&n.forEach(function(e){delete e.trigger}),i[this.prop]=n;var r=new y.default(i),s={};s[this.prop]=this.fieldValue,r.validate(s,{firstFields:!0},function(e,n){t.validateState=e?"error":"success",t.validateMessage=e?e[0].message:"",a(t.validateMessage,n),t.elForm&&t.elForm.$emit("validate",t.prop,!e)})},clearValidate:function(){this.validateState="",this.validateMessage="",this.validateDisabled=!1},resetField:function(){this.validateState="",this.validateMessage="";var e=this.form.model,t=this.fieldValue,a=this.prop;-1!==a.indexOf(":")&&(a=a.replace(/:/,"."));var n=Object(C.a)(e,a,!0);this.validateDisabled=!0,Array.isArray(t)?n.o[n.k]=[].concat(this.initialValue):n.o[n.k]=this.initialValue,this.broadcast("ElSelect","fieldReset"),this.broadcast("ElTimeSelect","fieldReset",this.initialValue)},getRules:function(){var e=this.form.rules,t=this.rules,a=void 0!==this.required?{required:!!this.required}:[],n=Object(C.a)(e,this.prop||"");return e=e?n.o[this.prop||""]||n.v:[],[].concat(t||e||[]).concat(a)},getFilteredRule:function(e){return this.getRules().filter(function(t){return!t.trigger||""===e||(Array.isArray(t.trigger)?t.trigger.indexOf(e)>-1:t.trigger===e)}).map(function(e){return Object(w.a)({},e)})},onFieldBlur:function(){this.validate("blur")},onFieldChange:function(){this.validateDisabled?this.validateDisabled=!1:this.validate("change")}},mounted:function(){if(this.prop){this.dispatch("ElForm","el.form.addField",[this]);var e=this.fieldValue;Array.isArray(e)&&(e=[].concat(e)),Object.defineProperty(this,"initialValue",{value:e}),(this.getRules().length||void 0!==this.required)&&(this.$on("el.form.blur",this.onFieldBlur),this.$on("el.form.change",this.onFieldChange))}},beforeDestroy:function(){this.dispatch("ElForm","el.form.removeField",[this])}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"el-form-item",class:[{"el-form-item--feedback":e.elForm&&e.elForm.statusIcon,"is-error":"error"===e.validateState,"is-validating":"validating"===e.validateState,"is-success":"success"===e.validateState,"is-required":e.isRequired||e.required},e.sizeClass?"el-form-item--"+e.sizeClass:""]},[e.label||e.$slots.label?a("label",{staticClass:"el-form-item__label",style:e.labelStyle,attrs:{for:e.labelFor}},[e._t("label",[e._v(e._s(e.label+e.form.labelSuffix))])],2):e._e(),e._v(" "),a("div",{staticClass:"el-form-item__content",style:e.contentStyle},[e._t("default"),e._v(" "),a("transition",{attrs:{name:"el-zoom-in-top"}},["error"===e.validateState&&e.showMessage&&e.form.showMessage?a("div",{staticClass:"el-form-item__error",class:{"el-form-item__error--inline":"boolean"==typeof e.inlineMessage?e.inlineMessage:e.elForm&&e.elForm.inlineMessage||!1}},[e._v("\n        "+e._s(e.validateMessage)+"\n      ")]):e._e()])],2)])},staticRenderFns:[]},k=a("VU/8")(F,x,!1,null,null,null).exports,$={name:"ElButton",inject:{elForm:{default:""},elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},buttonSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},buttonDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},methods:{handleClick:function(e){this.$emit("click",e)}}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"el-button",class:[e.type?"el-button--"+e.type:"",e.buttonSize?"el-button--"+e.buttonSize:"",{"is-disabled":e.buttonDisabled,"is-loading":e.loading,"is-plain":e.plain,"is-round":e.round,"is-circle":e.circle}],attrs:{disabled:e.buttonDisabled||e.loading,autofocus:e.autofocus,type:e.nativeType},on:{click:e.handleClick}},[e.loading?a("i",{staticClass:"el-icon-loading"}):e._e(),e._v(" "),e.icon&&!e.loading?a("i",{class:e.icon}):e._e(),e._v(" "),e.$slots.default?a("span",[e._t("default")],2):e._e()])},staticRenderFns:[]},z=a("VU/8")($,E,!1,null,null,null).exports,R=a("mtWM"),U=a.n(R),I={components:{ElButton:z,ElFormItem:k,ElCol:m.a},name:"",data:function(){var e;return e={menuHeight:""+(window.innerHeight-285>300?window.innerHeight-285:300),listLoading:!1,filters:{type:"",search:""},users:[],total:0,page:1},_()(e,"listLoading",!1),_()(e,"sels",[]),e},methods:{getUsers:function(){var e=this;console.log(this.filters);var t={page:this.page,name:this.filters.name};this.listLoading=!0,this.$api.getUserListPage(t).then(function(t){e.total=t.data.total,e.users=t.data.users,e.listLoading=!1})},handleCurrentChange:function(e){this.page=e,this.getUsers()},filterTag:function(e,t){return t.sex===e},selsChange:function(){},formatSex:function(e,t){return 1==e.sex?"男":0==e.sex?"女":"未知"},handleEdit:function(e,t){console.log(e,t)},handleDel:function(){},batchRemove:function(){}},mounted:function(){this.getUsers()}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容","prefix-icon":"el-icon-search"},model:{value:e.filters.search,callback:function(t){e.$set(e.filters,"search",t)},expression:"filters.search"}},[a("el-select",{staticClass:"input",attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.filters.type,callback:function(t){e.$set(e.filters,"type",t)},expression:"filters.type"}},[a("el-option",{attrs:{label:"餐厅名",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"订单号",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"用户电话",value:"3"}})],1)],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getUsers}},[e._v("查询")])],1),e._v(" "),a("el-form-item",{staticClass:"fr mr0"},[a("el-button",{attrs:{icon:"el-icon-plus"}},[e._v("移动落地页")])],1),e._v(" "),a("el-form-item",{staticClass:"fr"},[a("el-button",{attrs:{icon:"el-icon-plus"}},[e._v("pc落地页")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.users,height:e.menuHeight,"highlight-current-row":""},on:{"selection-change":e.selsChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"100",formatter:e.formatSex,filters:[{text:"男",value:1},{text:"女",value:0}],"filter-method":e.filterTag,"filter-placement":"bottom-end"}}),e._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"birth",label:"生日",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"addr",label:"地址","min-width":"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"浏览",placement:"top"}},[a("i",{staticClass:"table-icon ly",attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}})]),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"发布",placement:"top"}},[a("i",{staticClass:"table-icon fb",attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}})]),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top"}},[a("i",{staticClass:"table-icon bj",attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}})]),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("i",{staticClass:"table-icon sc",attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}})]),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"复制链接",placement:"top"}},[a("i",{staticClass:"table-icon fzlj",attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}})])]}}])})],1),e._v(" "),a("el-col",{staticClass:"footer-toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"",layout:"prev, pager, next,jumper","page-size":20,total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var q=a("VU/8")(I,T,!1,function(e){a("SVDP")},"data-v-13b740c0",null).exports;n.default.use(s.a);for(var L=new s.a({base:"/vue2-crm/",routes:[{path:"/login",name:"Login",leaf:!0,component:d},{path:"/",name:"首页",leaf:!0,component:h},{path:"/",name:"投放管理",component:h,children:[{path:"/LandingPageSetting",name:"落地页设置",component:q}]},{path:"/",name:"数据分析",component:h,children:[]},{path:"/",name:"客户管理",component:h,children:[]},{path:"/",name:"项目管理",component:h,children:[]},{path:"/",name:"运营助手",component:h,children:[]},{path:"/",name:"系统管理",component:h,children:[]},{path:"/404",name:"404",leaf:!0,component:g},{path:"*",hidden:!0,redirect:{path:"/404"}}]}),M=(a("Hz4q"),a("zL8q")),N=a.n(M),O={requestLogin:function(e){return U.a.post("/login",e).then(function(e){return e.data})},getUserList:function(e){return U.a.get("/user/list",{params:e})},getUserListPage:function(e){return U.a.get("/user/listpage",{params:e})},removeUser:function(e){return U.a.get("/user/remove",{params:e})},batchRemoveUser:function(e){return U.a.get("/user/batchremove",{params:e})},editUser:function(e){return U.a.get("/user/edit",{params:e})},addUser:function(e){return U.a.get("/user/add",{params:e})}},P=a("//Fk"),B=a.n(P),V=a("KorX"),A=a.n(V),D=a("zNUS"),j=a.n(D),G=[{id:1,username:"admin",password:"123456",avatar:"https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",name:"张某某"}],H=[],W=0;W<86;W++)H.push(j.a.mock({id:j.a.Random.guid(),name:j.a.Random.cname(),addr:j.a.mock("@county(true)"),"age|18-60":1,birth:j.a.Random.date(),sex:j.a.Random.integer(0,1)}));var J=H;({bootstrap:function(){var e=new A.a(U.a);e.onGet("/success").reply(200,{msg:"success"}),e.onGet("/error").reply(500,{msg:"failure"}),e.onPost("/login").reply(function(e){var t=JSON.parse(e.data),a=t.username,n=t.password;return new B.a(function(e,t){var i=null;setTimeout(function(){var t=G.some(function(e){if(e.username===a&&e.password===n)return(i=JSON.parse(l()(e))).password=void 0,!0});e(t?[200,{code:200,msg:"请求成功",user:i}]:[200,{code:500,msg:"账号或密码错误"}])},1e3)})}),e.onGet("/user/list").reply(function(e){var t=e.params.name,a=J.filter(function(e){return!t||-1!=e.name.indexOf(t)});return new B.a(function(e,t){setTimeout(function(){e([200,{users:a}])},1e3)})}),e.onGet("/user/listpage").reply(function(e){var t=e.params,a=t.page,n=t.name,i=J.filter(function(e){return!n||-1!=e.name.indexOf(n)}),r=i.length;return i=i.filter(function(e,t){return t<20*a&&t>=20*(a-1)}),new B.a(function(e,t){setTimeout(function(){e([200,{total:r,users:i}])},1e3)})}),e.onGet("/user/remove").reply(function(e){var t=e.params.id;return J=J.filter(function(e){return e.id!==t}),new B.a(function(e,t){setTimeout(function(){e([200,{code:200,msg:"删除成功"}])},500)})}),e.onGet("/user/batchremove").reply(function(e){var t=e.params.ids;return t=t.split(","),J=J.filter(function(e){return!t.includes(e.id)}),new B.a(function(e,t){setTimeout(function(){e([200,{code:200,msg:"删除成功"}])},500)})}),e.onGet("/user/edit").reply(function(e){var t=e.params,a=t.id,n=t.name,i=t.addr,r=t.age,s=t.birth,o=t.sex;return J.some(function(e){if(e.id===a)return e.name=n,e.addr=i,e.age=r,e.birth=s,e.sex=o,!0}),new B.a(function(e,t){setTimeout(function(){e([200,{code:200,msg:"编辑成功"}])},500)})}),e.onGet("/user/add").reply(function(e){var t=e.params,a=t.name,n=t.addr,i=t.age,r=t.birth,s=t.sex;return J.push({name:a,addr:n,age:i,birth:r,sex:s}),new B.a(function(e,t){setTimeout(function(){e([200,{code:200,msg:"新增成功"}])},500)})})}}).bootstrap(),n.default.config.productionTip=!1,n.default.use(N.a),n.default.prototype.$api=O,L.beforeEach(function(e,t,a){"/login"==e.path&&sessionStorage.removeItem("user"),JSON.parse(sessionStorage.getItem("user"))||"/login"==e.path?a():a({path:"/login"})}),new n.default({el:"#app",router:L,components:{App:r},template:"<App/>"})},SVDP:function(e,t){},mXCT:function(e,t){},uf9R:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f40e260b870f1e485066.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09751340"],{"02f4":function(t,e,n){var r=n("4588"),a=n("be13");t.exports=function(t){return function(e,n){var i,c,l=String(a(e)),s=r(n),o=l.length;return s<0||s>=o?t?"":void 0:(i=l.charCodeAt(s),i<55296||i>56319||s+1===o||(c=l.charCodeAt(s+1))<56320||c>57343?t?l.charAt(s):i:t?l.slice(s,s+2):c-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),a=n("32e9"),i=n("79e5"),c=n("be13"),l=n("2b4c"),s=n("520a"),o=l("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=l(t),d=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),g=d?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[o]=function(){return n}),n[f](""),!e})):void 0;if(!d||!g||"replace"===t&&!u||"split"===t&&!p){var h=/./[f],v=n(c,f,""[t],(function(t,e,n,r,a){return e.exec===s?d&&!a?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),b=v[0],m=v[1];r(String.prototype,t,b),a(RegExp.prototype,f,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),a=n("cb7c"),i=n("ebd6"),c=n("0390"),l=n("9def"),s=n("5f1b"),o=n("520a"),u=n("79e5"),p=Math.min,f=[].push,d="split",g="length",h="lastIndex",v=4294967295,b=!u((function(){RegExp(v,"y")}));n("214f")("split",2,(function(t,e,n,u){var m;return m="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[g]||2!="ab"[d](/(?:ab)*/)[g]||4!="."[d](/(.?)(.?)/)[g]||"."[d](/()()/)[g]>1||""[d](/.?/)[g]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(a,t,e);var i,c,l,s=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,d=void 0===e?v:e>>>0,b=new RegExp(t.source,u+"g");while(i=o.call(b,a)){if(c=b[h],c>p&&(s.push(a.slice(p,i.index)),i[g]>1&&i.index<a[g]&&f.apply(s,i.slice(1)),l=i[0][g],p=c,s[g]>=d))break;b[h]===i.index&&b[h]++}return p===a[g]?!l&&b.test("")||s.push(""):s.push(a.slice(p)),s[g]>d?s.slice(0,d):s}:"0"[d](void 0,0)[g]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var a=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a,r):m.call(String(a),n,r)},function(t,e){var r=u(m,t,this,e,m!==n);if(r.done)return r.value;var o=a(t),f=String(this),d=i(o,RegExp),g=o.unicode,h=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(b?"y":"g"),_=new d(b?o:"^(?:"+o.source+")",h),x=void 0===e?v:e>>>0;if(0===x)return[];if(0===f.length)return null===s(_,f)?[f]:[];var y=0,S=0,k=[];while(S<f.length){_.lastIndex=b?S:0;var w,E=s(_,b?f:f.slice(S));if(null===E||(w=p(l(_.lastIndex+(b?0:S)),f.length))===y)S=c(f,S,g);else{if(k.push(f.slice(y,S)),k.length===x)return k;for(var j=1;j<=E.length-1;j++)if(k.push(E[j]),k.length===x)return k;S=y=w}}return k.push(f.slice(y)),k}]}))},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"48fb":function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return l}));var r=n("b775");function a(t){return Object(r["a"])({url:"/sales",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/goodsSales",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/leaderSales",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/userSales",method:"get",params:t})}},"504c":function(t,e,n){var r=n("9e1e"),a=n("0d58"),i=n("6821"),c=n("52a7").f;t.exports=function(t){return function(e){var n,l=i(e),s=a(l),o=s.length,u=0,p=[];while(o>u)n=s[u++],r&&!c.call(l,n)||p.push(t?[n,l[n]]:l[n]);return p}}},"520a":function(t,e,n){"use strict";var r=n("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,c=a,l="lastIndex",s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[l]||0!==e[l]}(),o=void 0!==/()??/.exec("")[1],u=s||o;u&&(c=function(t){var e,n,c,u,p=this;return o&&(n=new RegExp("^"+p.source+"$(?!\\s)",r.call(p))),s&&(e=p[l]),c=a.call(p,t),s&&c&&(p[l]=p.global?c.index+c[0].length:e),o&&c&&c.length>1&&i.call(c[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)})),c}),t.exports=c},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"6b54":function(t,e,n){"use strict";n("3846");var r=n("cb7c"),a=n("0bfb"),i=n("9e1e"),c="toString",l=/./[c],s=function(t){n("2aba")(RegExp.prototype,c,t,!0)};n("79e5")((function(){return"/a/b"!=l.call({source:"a",flags:"b"})}))?s((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?a.call(t):void 0)})):l.name!=c&&s((function(){return l.call(this)}))},8615:function(t,e,n){var r=n("5ca1"),a=n("504c")(!1);r(r.S,"Object",{values:function(t){return a(t)}})},a481:function(t,e,n){"use strict";var r=n("cb7c"),a=n("4bf8"),i=n("9def"),c=n("4588"),l=n("0390"),s=n("5f1b"),o=Math.max,u=Math.min,p=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,h){return[function(r,a){var i=t(this),c=void 0==r?void 0:r[e];return void 0!==c?c.call(r,i,a):n.call(String(i),r,a)},function(t,e){var a=h(n,t,this,e);if(a.done)return a.value;var p=r(t),f=String(this),d="function"===typeof e;d||(e=String(e));var b=p.global;if(b){var m=p.unicode;p.lastIndex=0}var _=[];while(1){var x=s(p,f);if(null===x)break;if(_.push(x),!b)break;var y=String(x[0]);""===y&&(p.lastIndex=l(f,i(p.lastIndex),m))}for(var S="",k=0,w=0;w<_.length;w++){x=_[w];for(var E=String(x[0]),j=o(u(c(x.index),f.length),0),R=[],$=1;$<x.length;$++)R.push(g(x[$]));var O=x.groups;if(d){var C=[E].concat(R,j,f);void 0!==O&&C.push(O);var I=String(e.apply(void 0,C))}else I=v(E,f,j,R,O,e);j>=k&&(S+=f.slice(k,j)+I,k=j+E.length)}return S+f.slice(k)}];function v(t,e,r,i,c,l){var s=r+t.length,o=i.length,u=d;return void 0!==c&&(c=a(c),u=f),n.call(l,u,(function(n,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":l=c[a.slice(1,-1)];break;default:var u=+a;if(0===u)return n;if(u>o){var f=p(u/10);return 0===f?n:f<=o?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):n}l=i[u-1]}return void 0===l?"":l}))}}))},aae3:function(t,e,n){var r=n("d3f4"),a=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},ab2d:function(t,e,n){},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},ed08:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("28a5"),n("a481"),n("6b54");var r=n("53ca");function a(t,e){if(0===arguments.length)return null;var n,a=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(r["a"])(t)?n=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},c=a.replace(/{(y|m|d|h|i|s|a)+}/g,(function(t,e){var n=i[e];return"a"===e?["日","一","二","三","四","五","六"][n]:(t.length>0&&n<10&&(n="0"+n),n||0)}));return c}},efdb:function(t,e,n){"use strict";var r=n("ab2d"),a=n.n(r);a.a},fa64:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vip-list-container"},[n("div",{staticClass:"vip-list-top"},[n("el-row",[n("el-col",{attrs:{span:5}},[n("div",{staticClass:"vip-list-top-col"},[n("span",{staticStyle:{padding:"0 5px"}},[t._v("用户id/昵称")]),t._v(" "),n("el-input",{attrs:{placeholder:"请输入",size:"small"},model:{value:t.search_user,callback:function(e){t.search_user=e},expression:"search_user"}})],1)]),t._v(" "),n("el-col",{attrs:{span:5}},[n("div",{staticClass:"vip-list-top-col"},[n("span",{staticStyle:{padding:"0 5px"}},[t._v("排序方式")]),t._v(" "),n("el-radio",{staticStyle:{"margin-top":"10px"},attrs:{label:"total"},model:{value:t.order_by,callback:function(e){t.order_by=e},expression:"order_by"}},[t._v("销售量")]),t._v(" "),n("el-radio",{staticStyle:{"margin-top":"10px"},attrs:{label:"total_money"},model:{value:t.order_by,callback:function(e){t.order_by=e},expression:"order_by"}},[t._v("销售额")])],1)]),t._v(" "),n("el-col",{attrs:{span:7}},[n("div",{staticClass:"order-manage-top-col",staticStyle:{"padding-left":"0"}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetimerange","range-separator":"至","start-placeholde":"开始时间","end-placeholde":"结束时间",size:"small"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)]),t._v(" "),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("搜索")])],1),t._v(" "),n("el-col",{staticStyle:{float:"right"},attrs:{span:2}},[n("a",{attrs:{href:t.export_url,target:"_blank"},on:{click:t.export_data}},[t._v("导出")])])],1)],1),t._v(" "),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,stripe:""}},[n("el-table-column",{attrs:{label:"会员头像",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("l-pic",{attrs:{picurl:t.row.avatar,size:{width:40,height:40},disdel:!1,disview:!1}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"user_id",label:"会员ID",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"nickname",label:"昵称",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"phone",label:"手机号",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"user_level",label:"等级",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"total_money",label:"消费金额",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"total",label:"订单数",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"goods_number",label:"商品数",align:"center"}})],1)],1),t._v(" "),n("div",{staticStyle:{"text-align":"right",margin:"15px 15px"}},[n("el-pagination",{staticClass:"page",attrs:{background:"",layout:"total, prev, pager, next, jumper",total:t.count,"page-size":10,"current-page":t.page},on:{"size-change":t.changePage,"current-change":t.changePage}})],1)])},a=[],i=n("48fb"),c=n("334a"),l=n("ed08"),s={name:"vipList",components:{LPic:c["a"]},data:function(){return{list:[],count:1,key:this.$store.state.app.activeApp.saa_key,limit:20,page:1,search_user:"",order_by:"total",begin_time:"",end_time:"",time:"",export_url:""}},watch:{time:function(t){null!==t?(this.begin_time=Object(l["a"])(t[0],"{y}-{m}-{d} {h}:{i}:{s}"),this.end_time=Object(l["a"])(t[1],"{y}-{m}-{d} {h}:{i}:{s}")):(this.begin_time="",this.end_time="")}},mounted:function(){this.getUserSales()},methods:{getUserSales:function(){var t=this,e={key:this.key,page:this.page,limit:this.limit};Object(i["d"])(e).then((function(e){200===e.status?(t.list=e.data,t.count=parseInt(e.count)):204===e.status?(t.list=[],t.count=1):t.$message.error(e.message)}))},search:function(){var t=this;this.params={key:this.key,limit:10,page:1,search_user:this.search_user,order_by:this.order_by,begin_time:this.begin_time,end_time:this.end_time},Object(i["d"])(this.params).then((function(e){200===e.status?(t.list=e.data,t.count=parseInt(e.count)):204===e.status?(t.list=[],t.count=1):t.$message.error(e.message)}))},export_data:function(){this.export_url="/api/web/index.php/userSalesExport?key="+this.key+"&search_user="+this.search_user+"&order_by="+this.order_by+"&begin_time="+this.begin_time+"&end_time="+this.end_time},changePage:function(t){this.page=t,this.getUserSales()}}},o=s,u=(n("efdb"),n("2877")),p=Object(u["a"])(o,r,a,!1,null,"5b49c602",null);e["default"]=p.exports}}]);
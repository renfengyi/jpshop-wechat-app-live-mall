(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72b4dd88"],{"03f2":function(t,e,a){"use strict";var r=a("7a16"),n=a.n(r);n.a},"4d50":function(t,e,a){"use strict";var r=a("9a49"),n=a.n(r);n.a},7713:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-summary-container"},[a("div",{staticStyle:{margin:"30px 40px"}},[a("total",{attrs:{total:t.summaryData.total}})],1),t._v(" "),a("div",{staticStyle:{"margin-top":"100px"}},[a("h3",{staticStyle:{padding:"10px 30px"}},[t._v("订单金额与数量")]),t._v(" "),t.disnumLine?a("num-line",{attrs:{"chart-data":t.summaryData}}):t._e()],1)])},n=[],i=a("f8b7"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"total-panle"},[a("div",{staticStyle:{"background-color":"#7BBAE3"}},[a("div",{staticClass:"count"},[t._v(t._s(t.total.order))]),t._v(" "),a("div",{staticClass:"title"},[t._v("订单数量")])]),t._v(" "),a("div",{staticStyle:{"background-color":"#ED8178"}},[a("div",{staticClass:"count"},[t._v(t._s(t.total.payment))]),t._v(" "),a("div",{staticClass:"title"},[t._v("待付款")])]),t._v(" "),a("div",{staticStyle:{"background-color":"#57C78A"}},[a("div",{staticClass:"count"},[t._v(t._s(t.total.delivery))]),t._v(" "),a("div",{staticClass:"title"},[t._v("待发货")])]),t._v(" "),a("div",{staticStyle:{"background-color":"#F9B382"}},[a("div",{staticClass:"count"},[t._v(t._s(t.total.evaluate))]),t._v(" "),a("div",{staticClass:"title"},[t._v("待评价")])]),t._v(" "),a("div",{staticStyle:{"background-color":"#A1C4A6"}},[a("div",{staticClass:"count"},[t._v(t._s(t.total.safeguardingRights))]),t._v(" "),a("div",{staticClass:"title"},[t._v("维权中")])]),t._v(" "),a("div",{staticStyle:{"background-color":"#ED8178"}},[a("div",{staticClass:"count"},[t._v(t._s(t.total.todayOrder))]),t._v(" "),a("div",{staticClass:"title"},[t._v("今日下单量")])]),t._v(" "),a("div",{staticStyle:{"background-color":"#7BBAE3"}},[a("div",{staticClass:"count"},[t._v(t._s(Math.round(100*t.total.todayPrice)/100))]),t._v(" "),a("div",{staticClass:"title"},[t._v("今日订单金额")])])])},u=[],c={name:"total",props:{total:{type:Object,required:!0,default:function(){return{delivery:0,evaluate:0,order:0,payment:0,safeguardingRights:0,todayOrder:0,todayPrice:0}}}}},d=c,s=(a("03f2"),a("2877")),l=Object(s["a"])(d,o,u,!1,null,"3c4d3ac1",null),m=l.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},f=[],v=a("313e"),p=a.n(v);a("817d");var y={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=p.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.day,a=t.num,r=t.price;this.chart.setOption({xAxis:{data:e,boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["订单金额","订单数量"]},series:[{name:"订单金额",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:r,animationDuration:2800,animationEasing:"cubicInOut"},{name:"订单数量",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:a,animationDuration:2800,animationEasing:"quadraticOut"}]})}}},b=y,_=Object(s["a"])(b,h,f,!1,null,null,null),O=_.exports,g={name:"ordersummary",components:{total:m,numLine:O},data:function(){return{summaryData:{},disnumLine:!1}},mounted:function(){this.getOrderSummary()},methods:{getOrderSummary:function(){var t=this;Object(i["e"])({key:this.$store.state.app.activeApp.saa_key}).then((function(e){200===e.status?(t.summaryData=e.data,t.disnumLine=!0):204===e.status?t.summaryData={}:t.$message.error(e.message)}))}}},j=g,C=(a("4d50"),Object(s["a"])(j,r,n,!1,null,"9085fe24",null));e["default"]=C.exports},"7a16":function(t,e,a){},"9a49":function(t,e,a){},f8b7:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"j",(function(){return i})),a.d(e,"g",(function(){return o})),a.d(e,"k",(function(){return u})),a.d(e,"p",(function(){return c})),a.d(e,"f",(function(){return d})),a.d(e,"r",(function(){return s})),a.d(e,"q",(function(){return l})),a.d(e,"o",(function(){return m})),a.d(e,"n",(function(){return h})),a.d(e,"i",(function(){return f})),a.d(e,"h",(function(){return v})),a.d(e,"m",(function(){return p})),a.d(e,"e",(function(){return y})),a.d(e,"d",(function(){return b})),a.d(e,"s",(function(){return _})),a.d(e,"l",(function(){return O})),a.d(e,"b",(function(){return g})),a.d(e,"a",(function(){return j}));var r=a("b775");function n(t){return Object(r["a"])({url:"/merchantOrder",method:"get",params:t})}function i(t){var e=t.id;return delete t.id,Object(r["a"])({url:"/merchantOrder/"+e,method:"put",data:t})}function o(t){return Object(r["a"])({url:"/merchantSuborder",method:"get",params:t})}function u(t){var e=t.id;return delete t.id,Object(r["a"])({url:"/merchantOrderAfter/"+e,method:"put",data:t})}function c(t){return Object(r["a"])({url:"/merchantSend",method:"put",data:t})}function d(t){return Object(r["a"])({url:"/merchantUuGetorderprice",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/merchantUuAddorder",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/dianwodaCreate",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/merchantOrderRemark",method:"put",data:t})}function h(t){var e=t.id;return delete t.id,Object(r["a"])({url:"/merchantOrderRefund/"+e,method:"put",data:t})}function f(t){return Object(r["a"])({url:"/merchantPrint",method:"get",params:t})}function v(t){return Object(r["a"])({url:"/merchantTuanUser",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/merchantOrderLeader",method:"put",data:t})}function y(t){return Object(r["a"])({url:"/merchantOrderSummary",method:"get",params:t})}function b(t){return Object(r["a"])({url:"/merchantComment",method:"get",params:t})}function _(t){var e=t.id;return delete t.id,Object(r["a"])({url:"/merchantOrderExpress/"+e,method:"get",params:t})}function O(t){var e=t.id;return delete t.id,Object(r["a"])({url:"/merchantComment/"+e,method:"put",data:t})}function g(t){var e=t.id;return delete t.id,Object(r["a"])({url:"/merchantComment/"+e,method:"delete",data:t})}function j(t){return Object(r["a"])({url:"/merchantDelOrder",method:"delete",data:t})}}}]);
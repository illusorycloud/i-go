webpackJsonp([4],{"4Att":function(t,e){},"8RYi":function(t,e){},FIIP:function(t,e){},I5NI:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("Dd8w"),a=i.n(r),n=(i("oqQY"),{data:function(){return{monthAmout:[1,10],inputnum:1e5,slidernum:1e5,monthRange:[10,11,12,1,2,3],cost:111,amount:22,payType:"alipay"}},computed:{minMonth:function(){return(new Date).getMonth()+1},maxMonth:function(){return this.minMonth+5>12?this.minMonth+5-12:this.minMonth+5}},methods:{monthHandle:function(t){var e=t[0],i=t[1],r=parseInt(e/10),a=e%10,n=parseInt(i/10),s=i%10;0===a&&0===s||(e=a>=5?r+1:r,i=s>=5?n+1:n,this.monthAmout=[10*e,10*i])},fullAddvalidateNum:function(t){},validateNumTranslate:function(t){},formatMonth:function(t){return t=Math.floor(t/10),this.monthRange[t]+"月"},payHandle:function(){},lastMonth:function(){this.monthAmout[1]=this.monthRange[5]}}}),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cont "},[i("Form",{staticClass:"monthly",attrs:{"label-width":100}},[i("FormItem",{attrs:{label:t.$t("purchase.service.setHourlyVerification")}},[i("Slider",{staticClass:"le18 point",attrs:{max:5e5,min:1e4,step:1e4},on:{"on-input":t.fullAddvalidateNum,"on-change":function(e){return t.validateNumTranslate("slider")}},model:{value:t.slidernum,callback:function(e){t.slidernum=e},expression:"slidernum"}}),t._v(" "),i("InputNumber",{attrs:{formatter:function(t){return t.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1,")},parser:function(t){return t.replace(/,*/g,"")},step:1e4},on:{"on-blur":function(e){return t.validateNumTranslate("input")}},model:{value:t.inputnum,callback:function(e){t.inputnum=e},expression:"inputnum"}}),t._v(" "),i("div",{staticClass:"addpoint count"},[i("span",{staticClass:"bg"}),t._v(" "),i("span",{staticClass:"one"}),t._v(" "),i("span",{staticClass:"two"}),t._v(" "),i("span",{staticClass:"three"}),t._v(" "),i("span",{staticClass:"four"}),t._v(" "),i("span",{staticClass:"five"})])],1),t._v(" "),i("FormItem",{attrs:{label:t.$t("purchase.service.monthsPurchasedunit")}},[i("Slider",{staticClass:"point monthslider",attrs:{"tip-format":t.formatMonth,max:50,min:1,step:1,range:""},on:{"on-input":t.monthHandle,"on-change":t.monthHandle},model:{value:t.monthAmout,callback:function(e){t.monthAmout=e},expression:"monthAmout"}}),t._v(" "),i("div",{staticClass:"addpoint month"},[i("span",{staticClass:"bg"}),t._v(" "),i("span",{staticClass:"one"}),t._v(" "),i("span",{staticClass:"two"}),t._v(" "),i("span",{staticClass:"three"}),t._v(" "),i("span",{staticClass:"four"}),t._v(" "),i("span",{staticClass:"five",on:{click:t.lastMonth}})]),t._v(" "),i("div",{staticClass:"showMonth"},t._l(t.monthRange,function(e,r){return i("span",{key:r,class:"month"+r},[t._v(t._s(e)+"月")])}),0)],1),t._v(" "),i("FormItem",{staticStyle:{"margin-top":"30px"},attrs:{label:t.$t("purchase.service.singlePrice")}},[i("span",{staticClass:"cost"},[t._v("¥ "+t._s(t.amount.toFixed(2))+t._s(t.$t("purchase.service.configurationFeevolumeTitle")))])]),t._v(" "),i("FormItem",{attrs:{label:t.$t("purchase.service.configurationFee")}},[i("span",{staticClass:"cost"},[t._v("¥ "+t._s(t.amount.toFixed(2)))])]),t._v(" "),i("FormItem",{attrs:{label:t.$t("purchase.service.payment")}},[i("span",[i("RadioGroup",{model:{value:t.payType,callback:function(e){t.payType=e},expression:"payType"}},[i("Radio",{attrs:{label:"alipay"}},[i("i",{staticClass:"alipay"},[i("img",{attrs:{src:"/static/imgs/alipay.png"}})]),t._v("\n            "+t._s(t.$t("purchase.service.alipay"))+"\n          ")])],1)],1)]),t._v(" "),i("FormItem",[i("Button",{staticClass:"btnbg",attrs:{type:"warning"},on:{click:t.payHandle}},[t._v(t._s(t.$t("purchase.service.payNow")))])],1)],1)],1)},staticRenderFns:[]};var o=i("VU/8")(n,s,!1,function(t){i("FIIP")},null,null).exports,c=i("Xxa5"),u=i.n(c),l=i("exGp"),h=i.n(l),p=i("woOf"),f=i.n(p),d={mixins:[i("N8t7").a],data:function(){return{form:{validateamount:1e4,type:"v"},slidernum:1e4,inputnum:1e4,payType:"alipay",isgiftM:!1,giftM:0,state:0,rate:0,validateamount:1e4,type:"",fz:!1,timeout:!1,canSubmit:!0}},computed:{discountAmount:function(){return(this.form.discounttype?.2*this.amount:0).toFixed(2)},amount:function(){return this.form.validateamount/1e4*100},payment:function(){return(this.amount-this.discountAmount).toFixed(2)},sales:function(){return(this.amount*this.rate).toFixed(2)}},methods:{validateNumTranslate:function(t){this.type=t,"slider"==this.type?(this.fz=!1,this.slidernum=1e4*Math.ceil(this.slidernum/1e4),this.inputnum=this.slidernum,this.form.validateamount=this.slidernum):(this.inputnum<1e4&&(this.inputnum=1e4),this.inputnum=1e4*Math.ceil(this.inputnum/1e4),this.slidernum=this.inputnum,this.fz=!0,this.form.validateamount=this.inputnum,this.form.validateamount>=1e5?this.isgiftM=!0:this.isgiftM=!1),this.form.validateamount>=5e5?this.rate=1:this.form.validateamount>=4e5?this.rate=.8:this.form.validateamount>=3e5?this.rate=.6:this.form.validateamount>=2e5?this.rate=.4:this.form.validateamount>=1e5?this.rate=.2:this.rate=0},payHandle:function(){var t=this;if(this.canSubmit){this.canSubmit=!1;var e=this.amount;this.payment;e*=100;var i=f()(this.form,{amount:e});"alipay"===this.payType?this.server.payByAli(this.form).then(function(e){var i=e.data;t.timeout&&clearInterval(r);var r=setInterval(h()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.timeout=!0,e.next=3,t.getPay(i.orderid);case 3:2===t.state&&(t.canSubmit=!0,clearTimeout(r),t.$Modal.close(),t.slidernum=t.inputnum=t.form.validateamount=1e4,t.$emit("record"));case 6:case"end":return e.stop()}},e,t)})),1e3);t.$Modal.confirm({message:t.$t("global.pay.newPage"),okText:t.$t("global.pay.finish"),confirmHandle:function(){r&&clearInterval(r),t.timeout=!1,t.canSubmit=!0},escClose:!1,onClose:function(){t.canSubmit=!0,r&&clearInterval(r),2!=t.state?t.$Message.error(t.$t("global.pay.error")):(t.$Message.success("购买成功"),t.slidernum=t.inputnum=t.form.validateamount=1e4,t.$emit("record"))}}),window.open(i.url,"_blank")}):this.wechat(i)}},cointsgif:function(){},fullAddvalidateNum:function(){return this.slidernum=1e4*Math.ceil(this.slidernum/1e4),this.fz||(this.inputnum=this.slidernum,this.form.validateamount=this.slidernum),this.form.validateamount>=5e5?(this.rate=1,this.giftM=Number(this.form.validateamount)*this.rate,this.form.validateamount+this.$t("purchase.service.fullAdd",{num:this.giftM})):this.form.validateamount>=4e5?(this.rate=.8,this.giftM=Number(this.form.validateamount)*this.rate,this.form.validateamount+this.$t("purchase.service.fullAdd",{num:this.giftM})):this.form.validateamount>=3e5?(this.rate=.6,this.giftM=Number(this.form.validateamount)*this.rate,this.isgiftM=!0,this.form.validateamount+this.$t("purchase.service.fullAdd",{num:this.giftM})):this.form.validateamount>=2e5?(this.rate=.4,this.isgiftM=!0,this.giftM=Number(this.form.validateamount)*this.rate,this.form.validateamount+this.$t("purchase.service.fullAdd",{num:this.giftM})):this.form.validateamount>=1e5?(this.rate=.2,this.isgiftM=!0,this.giftM=Number(this.form.validateamount)*this.rate,this.form.validateamount+this.$t("purchase.service.fullAdd",{num:this.giftM})):(this.rate=0,this.giftM=0,this.isgiftM=!1,this.form.validateamount)},getPay:function(t){var e=this;return h()(u.a.mark(function i(){return u.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:e.server.getPayState(t).then(function(t){var i=t.data;e.state=i}).catch(function(t){});case 1:case"end":return i.stop()}},i,e)}))()}},watch:{}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cont"},[i("Form",{staticClass:"monthly",attrs:{"label-width":100}},[i("FormItem",{attrs:{label:t.$t("purchase.service.buyVerification")}},[i("Slider",{staticClass:"le18 point",attrs:{"tip-format":t.fullAddvalidateNum,max:5e5,min:1e4,step:1e4},on:{"on-input":t.fullAddvalidateNum,"on-change":function(e){return t.validateNumTranslate("slider")}},model:{value:t.slidernum,callback:function(e){t.slidernum=e},expression:"slidernum"}}),t._v(" "),i("InputNumber",{attrs:{formatter:function(t){return t.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1,")},parser:function(t){return t.replace(/,*/g,"")},step:1e4},on:{"on-blur":function(e){return t.validateNumTranslate("input")}},model:{value:t.inputnum,callback:function(e){t.inputnum=e},expression:"inputnum"}}),t._v(" "),t.isgiftM?i("div",{staticClass:"titletip"},[i("div",{staticClass:"triangle"}),i("span",{staticClass:"span"},[t._v(t._s(t.$t("purchase.service.giftCount",{giftM:t.giftM})))])]):t._e(),t._v(" "),i("div",{staticClass:"addpoint count"},[i("span",{staticClass:"bg"}),t._v(" "),i("span",{staticClass:"one"}),t._v(" "),i("span",{staticClass:"two"}),t._v(" "),i("span",{staticClass:"three"}),t._v(" "),i("span",{staticClass:"four"}),t._v(" "),i("span",{staticClass:"five"})])],1),t._v(" "),i("FormItem",{attrs:{label:t.$t("purchase.service.singlePrice")}},[i("span",{staticClass:"cost"},[t._v("¥ "+t._s(t.amount.toFixed(2))+t._s(t.$t("purchase.service.configurationFeevolumeTitle")))])]),t._v(" "),i("FormItem",{attrs:{label:t.$t("purchase.service.configurationFee")}},[i("span",{staticClass:"cost"},[t._v("¥ "+t._s(t.amount.toFixed(2)))])]),t._v(" "),i("FormItem",{attrs:{label:t.$t("purchase.service.payment")}},[i("span",[i("RadioGroup",{model:{value:t.payType,callback:function(e){t.payType=e},expression:"payType"}},[i("Radio",{attrs:{label:"alipay"}},[i("i",{staticClass:"alipay"},[i("img",{attrs:{src:"/static/imgs/alipay.png"}})]),t._v("\n            "+t._s(t.$t("purchase.service.alipay"))+"\n          ")])],1)],1)]),t._v(" "),i("FormItem",[i("Button",{staticClass:"btnbg",attrs:{type:"warning"},on:{click:t.payHandle}},[t._v(t._s(t.$t("purchase.service.payNow")))])],1)],1)],1)},staticRenderFns:[]};var v=i("VU/8")(d,m,!1,function(t){i("O/Bx")},null,null).exports,y=i("FLvN"),g=i("NYxO"),b=(i("162o"),i("XLwt")),$={data:function(){return{user:{},server:y.a,type:"monthly",line:{data:[]},vipamount:0,chartval:[],height:"100",padding:[10,20,30,60],scale:[],datechart:[],days:30,validatenumchart:[],datechartyears:[],verifilast:185759,totalCost:0,edition:[{title:this.$t("purchase.rdition.function"),key:"fun",render:function(t,e){var i=e.row;return i.url?t("div",[t("span",{style:{marginRight:"6px"}},i.fun),i.tips?t("Tooltip",{props:{placement:"top"},style:{fontSize:"14px",color:"#aaa",cursor:"pointer"}},[t("Icon",{class:["tip"],props:{type:"md-help-circle"}}),t("span",{style:{width:"200px",whiteSpace:"normal"},slot:"content"},[t("span",i.tips),t("a",{domProps:{href:i.url,target:"_blank"}},i.tips2)])]):""]):t("div",[t("span",{style:{marginRight:"6px"}},i.fun),i.tips?t("Tooltip",{props:{placement:"top"},style:{fontSize:"14px",color:"#aaa",cursor:"pointer"}},[t("Icon",{class:["tip"],props:{type:"md-help-circle"}}),t("span",{style:{width:"200px",whiteSpace:"normal"},slot:"content"},i.tips)]):""])}},{title:this.$t("purchase.rdition.free"),key:"free",align:"center",render:function(t,e){var i=e.row;return!0===i.free?t("div",[t("i",{class:["fa","fa-check"],style:{color:"#02B286"}})]):!1===i.free?t("div",[t("i",{class:["fa","fa-times"],style:{color:"#D93600"}})]):t("div",{},i.free)}},{title:this.$t("purchase.rdition.customized"),key:"purchase",align:"center",render:function(t,e){var i=e.row;return!0===i.purchase?t("div",[t("i",{class:["fa","fa-check"],style:{color:"#02B286"}})]):!1===i.purchase?t("div",[t("i",{class:["fa","fa-times"],style:{color:"#D93600"}})]):t("div",{},i.purchase)}}],editionData:[{fun:this.$t("purchase.rdition.upperLimit"),free:this.$t("purchase.rdition.unlimited"),purchase:this.$t("purchase.rdition.unlimited")},{fun:this.$t("purchase.rdition.verificatUnit"),free:"1",purchase:"10"},{fun:this.$t("purchase.rdition.verification"),free:!0,purchase:!0},{fun:this.$t("purchase.rdition.autograph"),free:!0,purchase:!0},{fun:this.$t("purchase.rdition.violence"),free:!0,purchase:!0},{fun:this.$t("purchase.rdition.behavior"),free:!0,purchase:!0},{fun:this.$t("purchase.rdition.code"),free:!0,purchase:!0},{fun:this.$t("purchase.rdition.biometrics"),free:!0,purchase:!0},{fun:this.$t("purchase.rdition.downtime"),free:!0,purchase:!0,tips:this.$t("purchase.rdition.downtimetips"),url:"https://www.vaptcha.com/document/faq#%E5%AE%95%E6%9C%BA%E6%A8%A1%E5%BC%8F",tips2:this.$t("purchase.rdition.downtimetips2")},{fun:this.$t("purchase.rdition.defense"),free:!1,purchase:!0},{fun:this.$t("purchase.rdition.attack"),free:!1,purchase:!0},{fun:this.$t("purchase.rdition.abnormal"),free:!1,purchase:!0},{fun:this.$t("purchase.rdition.proxy"),free:!1,purchase:!0},{fun:this.$t("purchase.rdition.img"),free:!1,purchase:!0},{fun:this.$t("purchase.rdition.hide"),free:!1,purchase:!0},{fun:this.$t("purchase.rdition.frequency"),free:!1,purchase:!0},{fun:this.$t("purchase.rdition.force"),free:!1,purchase:!0,tips:this.$t("purchase.rdition.forceTip")},{fun:this.$t("purchase.rdition.noAd"),free:!1,purchase:!0}],buyway:0}},created:function(){var t=this;y.a.getRemain().then(function(e){var i=e.data;t.vipamount=i.remainvalidate,t.days=i.day}),this.loadData()},computed:a()({},Object(g.c)(["isVip"]),{validateNum:function(){if(!this.user.validate)return 0;var t=Date.now(),e=this.user.validate.filter(function(e){return t>e.starttime&&t<e.endtime})[0];return e?e.validatenum:0}}),methods:{loadData:function(){},initvipChart:function(){if(document.getElementById("vipChart")){var t=b.init(this.$refs.vipChart),e=this.$t("purchase.service.date"),i=this.$t("purchase.service.unith"),r=this,a={title:{show:!1},tooltip:{trigger:"item",formatter:function(t){var a=r.datechartyears[t.dataIndex]+t.name;return e+": "+a+"<br/>"+t.seriesName+"："+t.data+i}},legend:{show:!1,data:["Step Start"]},grid:{left:"0",right:"3%",bottom:"1%",top:"15%",containLabel:!0},toolbox:{show:!1,feature:{saveAsImage:{}}},xAxis:{type:"category",data:this.datechart,axisLine:{lineStyle:{color:"#999",width:1}},axisLabel:{textStyle:{color:"#999",fontSize:"12",fontFamily:"serif"}}},yAxis:{type:"value",splitNumber:3,axisLine:{lineStyle:{color:"#999",width:1}},axisLabel:{textStyle:{color:"#999",fontSize:"12",fontFamily:"serif"}},splitLine:{lineStyle:{color:["#eee"]}}},color:["#2d8cf0"],series:[{name:this.$t("purchase.service.validatepeak"),type:"line",step:"start",data:this.validatenumchart}]};t.setOption(a),window.addEventListener("resize",function(){t.resize()})}},record:function(){var t=this;y.a.getRemain().then(function(e){var i=e.data;t.vipamount=i.remainvalidate,t.days=i.day})},totalmoney:function(t){this.totalCost=t},specialColor:function(t,e){return"table-special-row"}},components:{MonthlyPay:o,AmountPay:v}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{background:"#fff",position:"relative"}},[i("Row",{staticStyle:{"z-index":"99"},attrs:{gutter:0}},[i("Col",{attrs:{span:18}},[i("Card",{staticClass:"pay",attrs:{"dis-hover":""}},[i("Alert",{attrs:{"show-icon":""}},[i("template",{slot:"icon"},[i("Icon",{attrs:{type:"md-alert"}})],1),t._v(" "),i("template",{slot:"desc"},[i("ul",{staticStyle:{"line-height":"26px","list-style":"disc","padding-left":"20px","font-size":"14px"}},[i("li",{domProps:{innerHTML:t._s(t.$t("purchase.service.rules1"))}}),t._v(" "),i("li",{domProps:{innerHTML:t._s(t.$t("purchase.service.rules2"))}}),t._v(" "),i("li",{domProps:{innerHTML:t._s(t.$t("purchase.service.rules3"))}})])])],2),t._v(" "),i("Row",{staticStyle:{"border-bottom":"1px solid #EFEFFC",padding:"10px 0","padding-top":"5px"}},[i("Col",{staticStyle:{"margin-left":"10px"},attrs:{span:8}},[i("span",{staticClass:"firsttitle"},[t._v(t._s(t.$t("purchase.rdition.verifilast")))]),t._v(" "),i("span",{staticClass:"verifilast"},[t._v(t._s(t.vipamount))])]),t._v(" "),i("Col",{attrs:{span:8}},[i("span",{staticClass:"firsttitle"},[t._v(t._s(t.$t("purchase.rdition.days")))]),t._v(" "),i("div",{attrs:{id:"monthlast"}})])],1),t._v(" "),i("Form",{attrs:{"label-width":100}},[i("FormItem",{staticClass:"ml-10 mt-20",attrs:{label:t.$t("purchase.service.packages")}},[i("RadioGroup",{staticStyle:{"font-size":"13px"},model:{value:t.buyway,callback:function(e){t.buyway=e},expression:"buyway"}},[i("Radio",{attrs:{label:0}},[t._v(t._s(t.$t("purchase.service.volumePackage_a")))]),t._v(" "),i("Radio",{staticClass:"ml-20",attrs:{label:1}},[i("span",[t._v(t._s(t.$t("purchase.service.monthlyPackage_a")))]),t._v(" "),i("Tooltip",{attrs:{placement:"top"}},[i("i",{staticClass:"fa fa-question-circle",staticStyle:{"font-size":"14px"}}),t._v(" "),i("div",{staticStyle:{"white-space":"normal",width:"220px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("purchase.service.monthlyPackageExplain")))])])],1)],1)],1)],1),t._v(" "),i("ul",{staticClass:"purchase-main"},[0==t.buyway?i("li",{staticClass:" mb-26"},[i("AmountPay",{attrs:{user:t.user,server:t.server},on:{record:t.record}})],1):i("li",[i("MonthlyPay")],1)])],1)],1),t._v(" "),i("Col",{staticClass:"right",attrs:{span:6}},[i("div",{staticClass:"titled"},[t._v(t._s(t.$t("purchase.rdition.rditions")))]),t._v(" "),i("Table",{attrs:{columns:t.edition,data:t.editionData,"row-class-name":t.specialColor,size:"small"}})],1)],1),t._v(" "),i("div",{staticClass:"bgc-r"})],1)},staticRenderFns:[]};var w=i("VU/8")($,_,!1,function(t){i("4Att")},null,null).exports,x=(i("o/zv"),{data:function(){return{columns:[{title:this.$t("purchase.rdition.function"),className:"column1",render:function(t,e){var i=e.row;return t("div",[t("span",{style:{marginRight:"6px"}},i.functive.title),i.functive.tip?t("Tooltip",{props:{placement:"top"},style:{fontSize:"14px",color:"#aaa",cursor:"pointer"}},[t("Icon",{class:["tip"],props:{type:"help-circled"}}),t("span",{style:{width:"200px",whiteSpace:"normal"},slot:"content"},i.functive.tip)]):""])}},{title:this.$t("purchase.rdition.free"),className:"column2",render:function(t,e){var i=e.row;return i.free.title?t("div",[t("p",i.free.title)]):t("div",[i.free.yes?t("i",{style:{cursor:"inherit"},class:["fa","fa-check"]}):t("i",{style:{cursor:"inherit"},class:["fa","fa-times"]})])}},{title:"VIP",className:"column3",render:function(t,e){var i=e.row;return i.vip.title?t("div",[t("p",i.vip.title),i.vip.title1?t("div",[t("p",i.vip.title1),t("p",i.vip.title2),t("p",i.vip.title3)]):""]):t("div",[i.vip.yes?t("i",{style:{cursor:"inherit"},class:["fa","fa-check"]}):t("i",{style:{cursor:"inherit"},class:["fa","fa-times"]}),i.vip.tip?t("span",{style:{position:"absolute",left:"calc(50% + 14px)",color:"#888",fontSize:"14px",lineHeight:"28px"}},i.vip.tip):""])}},{title:this.$t("purchase.rdition.customized"),className:"column4",render:function(t,e){var i=e.row;return i.customized.title?t("div",[t("p",i.customized.title)]):t("div",[i.customized.yes?t("i",{style:{cursor:"inherit"},class:["fa","fa-check"]}):t("i",{style:{cursor:"inherit"},class:["fa","fa-times"]})])}}],data:[{functive:{title:this.$t("purchase.rdition.cost")},free:{title:this.$t("purchase.rdition.franco")},vip:{title:this.$t("purchase.rdition.monthtitle"),title1:this.$t("purchase.rdition.month"),title2:this.$t("purchase.rdition.counttitle"),title3:this.$t("purchase.rdition.count")},customized:{title:this.$t("purchase.rdition.service")}},{functive:{title:this.$t("purchase.rdition.value")},free:{title:this.$t("purchase.rdition.fiveHundred")},vip:{title:this.$t("purchase.rdition.custom")},customized:{title:this.$t("purchase.rdition.defined")}},{functive:{title:this.$t("purchase.rdition.verificatUnit")},free:{title:"3"},vip:{title:"30"},customized:{title:this.$t("purchase.rdition.unlimited")}},{functive:{title:this.$t("purchase.rdition.verification")},free:{yes:!0},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.defense")},free:{yes:!1},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.attack")},free:{yes:!1},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.abnormal")},free:{yes:!1},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.autograph")},free:{yes:!0},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.violence")},free:{yes:!0},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.behavior")},free:{yes:!0},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.code")},free:{yes:!0},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.downtime")},free:{yes:!0},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.dynamicDefense"),tip:this.$t("purchase.rdition.experience")},free:{yes:!1},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.scene")},free:{yes:!0},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.button")},free:{yes:!0},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.logo")},free:{yes:!1},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.bg")},free:{yes:!1},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.domain"),tip:this.$t("purchase.rdition.domainTip")},free:{yes:!1},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.hide"),tip:this.$t("purchase.rdition.hideTip")},free:{yes:!1},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.iscount"),tip:this.$t("purchase.rdition.iscountTip")},free:{yes:!1},vip:{yes:!0,tip:this.$t("purchase.rdition.iscountTitle")},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.frequency")},free:{yes:!1},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.intelligence")},free:{yes:!1},vip:{yes:!0},customized:{yes:!0}},{functive:{title:this.$t("purchase.rdition.security")},free:{yes:!1},vip:{yes:!0},customized:{yes:!0}}]}},methods:{rowClassName:function(t,e){return 2===e||6===e||12===e?"borderbottom":"zh-CN"!=this.lang?e===this.data.length-1?"nodis":"":void 0}},computed:a()({},Object(g.c)(["lang"]))}),C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"edition bg"},[e("div",{staticClass:"banner"},[this._v(this._s(this.$t("purchase.rdition.title")))]),this._v(" "),e("div",{staticClass:"rdition-table"},[e("i-table",{attrs:{"row-class-name":this.rowClassName,border:"",columns:this.columns,data:this.data}})],1)])},staticRenderFns:[]};var k=i("VU/8")(x,C,!1,function(t){i("uVZ9")},null,null).exports,T={data:function(){return{tabValue:"Pay",selecttabpurchase:"Pay"}},computed:a()({},Object(g.c)(["lang"])),created:function(){var t=this;"Pay"===localStorage.getItem(this.selecttabpurchase)?this.tabValue="Pay":"Invoice"===localStorage.getItem(this.selecttabpurchase)&&(this.tabValue="Invoice"),window.location.href.indexOf("Rdition")>-1&&(this.tabValue="Rdition",setTimeout(function(){t.$parent.close()},0)),"Rdition"===this.$route.params.tabValue&&(this.tabValue="Rdition"),"Record"===this.$route.params.tabValue&&(this.tabValue="Record")},methods:{changeTabs:function(t){localStorage.setItem(this.selecttabpurchase,t)},routerRecord:function(){localStorage.setItem(this.selecttabpurchase,"Pay"),this.tabValue="Pay",this.$router.push({name:"message",params:{tabvalue:"purchase"}})}},components:{Pay:w,Rdition:k}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Tabs",{staticClass:"purchase",attrs:{"active-key":"pay",animated:!1},on:{"on-click":t.changeTabs},model:{value:t.tabValue,callback:function(e){t.tabValue=e},expression:"tabValue"}},[i("TabPane",{attrs:{label:t.$t("nav.vip"),name:"Pay"}},["Pay"==t.tabValue?i("Pay",{on:{tabvalue:function(e){t.tabValue="Rdition"},record:t.routerRecord}}):t._e()],1)],1)],1)},staticRenderFns:[]};var M=i("VU/8")(T,P,!1,function(t){i("8RYi")},null,null);e.default=M.exports},N8t7:function(t,e,i){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"code-main"},[e("div",{staticClass:"code-cont"},[e("img",{attrs:{src:"data:image/png;base64,"+this.img}})]),this._v(" "),e("div",{staticClass:"code-tip"},[e("img",{attrs:{src:"/static/imgs/scan-code.png"}}),this._v(" "),e("span",[this._v(this._s(this.$t("global.pay.qrcode")))])])])},staticRenderFns:[]};var a=i("VU/8")({props:["img"]},r,!1,function(t){i("xb69")},null,null).exports;e.a={props:{user:Object,server:Object},data:function(){return{ispayok:0}},methods:{wechat:function(t){var e=this;this.server.getWxpay(t).then(function(t){var i=t.data;e.checkPayState(),e.$Modal.box({title:e.$t("global.pay.wechat"),width:"300px",onClose:function(){"0"==e.ispayok&&(e.ispayok=1),e.checkPayTimer&&clearTimeout(e.checkPayTimer)},render:function(t){return t(a,{props:{img:i}})}})}).catch(function(t){e.ispayok=1})},alipay:function(t){var e=this;this.$Helper.open(t),this.$Modal.confirm({message:this.$t("global.pay.newPage"),okText:this.$t("global.pay.finish"),hideCancel:!0,confirmHandle:function(){e.checkPayState(!0)},onClose:function(){e.checkPayTimer&&clearTimeout(e.checkPayTimer)},escClose:function(){e.checkPayTimer&&clearTimeout(e.checkPayTimer)}}),this.checkPayTimer=setTimeout(function(){e.checkPayState()},5e3)},checkPayState:function(t){var e=this;this.server.getPayState(this.user.token).then(function(i){var r=i.data;if(e.checkPayTimer&&clearTimeout(e.checkPayTimer),"0"==r){if(t)return e.ispayok=1,void e.$Message.error(e.$t("global.pay.error"));e.checkPayTimer=setTimeout(function(){e.checkPayState()},1e3)}else"2"==r?(e.$Modal.close(),e.ispayok=2,e.$Message.success(e.$t("global.pay.success")),e.checkPayTimer&&clearTimeout(e.checkPayTimer)):(e.$Modal.close(),e.ispayok=1,e.$Message.error(e.$t("global.pay.error")),e.checkPayTimer&&clearTimeout(e.checkPayTimer))}).catch(function(t){e.$Modal.close(),e.ispayok=1,e.$Message.error(e.$t("global.pay.error")),e.checkPayTimer&&clearTimeout(e.checkPayTimer)})},payok:function(){return this.ispayok}}}},"O/Bx":function(t,e){},SldL:function(t,e){!function(e){"use strict";var i,r=Object.prototype,a=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=$;var h="suspendedStart",p="suspendedYield",f="executing",d="completed",m={},v={};v[s]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(F([])));g&&g!==r&&a.call(g,s)&&(v=g);var b=C.prototype=w.prototype=Object.create(v);x.prototype=b.constructor=C,C.constructor=x,C[c]=x.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},k(T.prototype),T.prototype[o]=function(){return this},l.AsyncIterator=T,l.async=function(t,e,i,r){var a=new T($(t,e,i,r));return l.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},k(b),b[c]="Generator",b[s]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var r=e.pop();if(r in t)return i.value=r,i.done=!1,i}return i.done=!0,i}},l.values=F,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return o.type="throw",o.arg=t,e.next=r,a&&(e.method="next",e.arg=i),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n],o=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var c=a.call(s,"catchLoc"),u=a.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var n=r;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var s=n?n.completion:{};return s.type=t,s.arg=e,n?(this.method="next",this.next=n.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),S(i),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var r=i.completion;if("throw"===r.type){var a=r.arg;S(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:F(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=i),m}}}function $(t,e,i,r){var a=e&&e.prototype instanceof w?e:w,n=Object.create(a.prototype),s=new z(r||[]);return n._invoke=function(t,e,i){var r=h;return function(a,n){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw n;return A()}for(i.method=a,i.arg=n;;){var s=i.delegate;if(s){var o=P(s,i);if(o){if(o===m)continue;return o}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===h)throw r=d,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=f;var c=_(t,e,i);if("normal"===c.type){if(r=i.done?d:p,c.arg===m)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(r=d,i.method="throw",i.arg=c.arg)}}}(t,i,s),n}function _(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}function w(){}function x(){}function C(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){var e;this._invoke=function(i,r){function n(){return new Promise(function(e,n){!function e(i,r,n,s){var o=_(t[i],t,r);if("throw"!==o.type){var c=o.arg,u=c.value;return u&&"object"==typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,n,s)},function(t){e("throw",t,n,s)}):Promise.resolve(u).then(function(t){c.value=t,n(c)},s)}s(o.arg)}(i,r,e,n)})}return e=e?e.then(n,n):n()}}function P(t,e){var r=t.iterator[e.method];if(r===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,P(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=_(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var n=a.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,m):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function F(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=i,e.done=!0,e};return n.next=n}}return{next:A}}function A(){return{value:i,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,i){t.exports=i("jyFz")},exGp:function(t,e,i){"use strict";e.__esModule=!0;var r,a=i("//Fk"),n=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new n.default(function(t,i){return function r(a,s){try{var o=e[a](s),c=o.value}catch(t){return void i(t)}if(!o.done)return n.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}("next")})}}},jyFz:function(t,e,i){var r=function(){return this}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,n=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=i("SldL"),a)r.regeneratorRuntime=n;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},"o/zv":function(t,e,i){(function(t){function i(t,e){for(var i=0,r=t.length-1;r>=0;r--){var a=t[r];"."===a?t.splice(r,1):".."===a?(t.splice(r,1),i++):i&&(t.splice(r,1),i--)}if(e)for(;i--;i)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var i=[],r=0;r<t.length;r++)e(t[r],r,t)&&i.push(t[r]);return i}e.resolve=function(){for(var e="",a=!1,n=arguments.length-1;n>=-1&&!a;n--){var s=n>=0?arguments[n]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,a="/"===s.charAt(0))}return e=i(r(e.split("/"),function(t){return!!t}),!a).join("/"),(a?"/":"")+e||"."},e.normalize=function(t){var n=e.isAbsolute(t),s="/"===a(t,-1);return(t=i(r(t.split("/"),function(t){return!!t}),!n).join("/"))||n||(t="."),t&&s&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,i){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var i=t.length-1;i>=0&&""===t[i];i--);return e>i?[]:t.slice(e,i-e+1)}t=e.resolve(t).substr(1),i=e.resolve(i).substr(1);for(var a=r(t.split("/")),n=r(i.split("/")),s=Math.min(a.length,n.length),o=s,c=0;c<s;c++)if(a[c]!==n[c]){o=c;break}var u=[];for(c=o;c<a.length;c++)u.push("..");return(u=u.concat(n.slice(o))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),i=47===e,r=-1,a=!0,n=t.length-1;n>=1;--n)if(47===(e=t.charCodeAt(n))){if(!a){r=n;break}}else a=!1;return-1===r?i?"/":".":i&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var i=function(t){"string"!=typeof t&&(t+="");var e,i=0,r=-1,a=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!a){i=e+1;break}}else-1===r&&(a=!1,r=e+1);return-1===r?"":t.slice(i,r)}(t);return e&&i.substr(-1*e.length)===e&&(i=i.substr(0,i.length-e.length)),i},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,i=0,r=-1,a=!0,n=0,s=t.length-1;s>=0;--s){var o=t.charCodeAt(s);if(47!==o)-1===r&&(a=!1,r=s+1),46===o?-1===e?e=s:1!==n&&(n=1):-1!==e&&(n=-1);else if(!a){i=s+1;break}}return-1===e||-1===r||0===n||1===n&&e===r-1&&e===i+1?"":t.slice(e,r)};var a="b"==="ab".substr(-1)?function(t,e,i){return t.substr(e,i)}:function(t,e,i){return e<0&&(e=t.length+e),t.substr(e,i)}}).call(e,i("W2nU"))},uVZ9:function(t,e){},xb69:function(t,e){}});
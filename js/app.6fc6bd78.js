(function(t){function a(a){for(var e,l,o=a[0],r=a[1],c=a[2],d=0,p=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);u&&u(a);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,a=0;a<s.length;a++){for(var n=s[a],e=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(e=!1)}e&&(s.splice(a--,1),t=l(l.s=n[0]))}return t}var e={},i={app:0},s=[];function l(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=e,l.d=function(t,a,n){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)l.d(n,e,function(a){return t[a]}.bind(null,e));return n},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,a,n){t.exports=n("56d7")},"034f":function(t,a,n){"use strict";n("85ec")},"0728":function(t,a,n){"use strict";n("e959")},"199c":function(t,a,n){"use strict";(function(t){var e=n("7365");t.jQuery=n("1157");var i=t.jQuery;window.$=i,a["a"]={name:"App",components:{Syntax:e["a"]}}}).call(this,n("c8ba"))},"56d7":function(t,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("Syntax",{attrs:{msg:"Welcome to Syntax"}})],1)},s=[],l=n("199c"),o=l["a"],r=(n("034f"),n("2877")),c=Object(r["a"])(o,i,s,!1,null,null,null),u=c.exports;e["default"].config.productionTip=!1,new e["default"]({render:function(t){return t(u)}}).$mount("#app")},6516:function(t,a,n){"use strict";(function(t){n("ac1f"),n("5319");var e=n("3898");t.jQuery=n("1157");var i=t.jQuery;window.$=i,a["a"]={name:"Syntax",components:{VEasyDialog:e["a"]},props:{msg:String},data:function(){return{active_el:"fyres_syntax",MainButton:"",tradingsymbol:"",quantitypercentage:"",quantity:"",Transaction:"",OrderType:"",Fund:"",LEVERAGE:"",Producttype:"",simpleDialog:!1,TRPpercentage:"",LTPpercentage:"",TPpercentage:"",SLpercentage:"",LTP:"",SL:"",TP:"",TRP:"",auto_mation:"",NEARBY:"",NEARBYCAL:"",cal_plus_minus:"",PER_LOT_SIZE:"",output:"[{"}},methods:{ActiveTab:function(t){this.tradingsymbol="",this.tradingsymbol="",this.quantitypercentage="",this.quantity="",this.Transaction="",this.OrderType="",this.Fund="",this.LEVERAGE="",this.Producttype="",this.simpleDialog=!1,this.TRPpercentage="",this.LTPpercentage="",this.TPpercentage="",this.SLpercentage="",this.LTP="",this.SL="",this.TP="",this.MainButton="",this.active_el=t},MainVaritey:function(t){this.tradingsymbol="",this.tradingsymbol="",this.quantitypercentage="",this.quantity="",this.Transaction="",this.OrderType="",this.Fund="",this.LEVERAGE="",this.Producttype="",this.simpleDialog=!1,this.TRPpercentage="",this.LTPpercentage="",this.TPpercentage="",this.SLpercentage="",this.LTP="",this.SL="",this.TP="",this.MainButton=t,console.log(this.MainButton)},TransactionType:function(t){this.Transaction=t},OrderTypeChange:function(t){this.OrderType=t},FundType:function(t){this.Fund=t},ProducttypeC:function(t){this.Producttype=t},QuantityPercentageChange:function(t){t.target.checked?this.quantitypercentage="%":this.quantitypercentage=""},TRPpercentageChange:function(t){t.target.checked?this.TRPpercentage="%":this.TRPpercentage=""},LTPpercentageChange:function(t){t.target.checked?this.LTPpercentage="%":this.LTPpercentage=""},TPpercentageChange:function(t){t.target.checked?this.TPpercentage="%":this.TPpercentage=""},SLpercentageChange:function(t){t.target.checked?this.SLpercentage="%":this.SLpercentage=""},Generate_Code:function(t){this.output="[{";var a="";switch(""!=this.quantitypercentage&&(this.quantity=this.quantity+"%",""!=this.Fund&&(a+='"FUND":"'+this.Fund+'",'),""!=this.LEVERAGE&&(a+='"LEVERAGE":"'+this.LEVERAGE+'X",'),""!=this.PER_LOT_SIZE&&(a+='"PER_LOT_SIZE":"'+this.PER_LOT_SIZE+'",')),this.MainButton){case"REGULAR":switch(this.OrderType){case"MARKET":this.output+='"TT":"'+this.Transaction+'","TS":"'+this.tradingsymbol+'","Q":"'+this.quantity+'",'+a+'"OT":"'+this.OrderType+'","P":"'+this.Producttype+'","VL":"DAY"';break;case"LIMIT":this.LTP=this.prtp(this.Transaction,this.LTP,this.LTPpercentage,"-","+"),this.output+='"TT":"'+this.Transaction+'","TS":"'+this.tradingsymbol+'","Q":"'+this.quantity+'",'+a+'"OT":"'+this.OrderType+'","LTP":"'+this.LTP+'","P":"'+this.Producttype+'","VL":"DAY"';break;case"SLM":this.TRP=this.prtp(this.Transaction,this.TRP,this.TPpercentage,"+","-"),this.output+='"TT":"'+this.Transaction+'","TS":"'+this.tradingsymbol+'","Q":"'+this.quantity+'",'+a+'"OT":"'+this.OrderType+'","TRP":"'+this.TRP+'","P":"'+this.Producttype+'","VL":"DAY"';break;case"SLL":this.LTP=this.prtp(this.Transaction,this.LTP,this.LTPpercentage,"+","-"),this.TRP=this.prtp(this.Transaction,this.TRP,this.TPpercentage,"+","-"),this.output+='"TT":"'+this.Transaction+'","TS":"'+this.tradingsymbol+'","Q":"'+this.quantity+'",'+a+'"OT":"'+this.OrderType+'","LTP":"'+this.LTP+'","TRP":"'+this.TRP+'","P":"'+this.Producttype+'","VL":"DAY"';break}break}this.output+=',"AT":"'+t+'"}]',this.simpleDialog=!0},prtp:function(t,a,n,e,i){return n||(n=""),e||(e=""),i||(i=""),a="BUY"==t?e+a+n:i+a+n,a},ShowModal:function(){this.simpleDialog=!0},copyToClipboard:function(t){var a=i("<textarea>"),n=/<br\s*[\\]?>/gi;i("body").append(a),a.val(i(t).html().replace(n,"\r\n")).select(),document.execCommand("copy"),a.remove(),i(".copy_message").html("SUCCESSFULLY COPY").css({display:"block",position:"absolute",left:"21px","margin-top":"-3px",color:"#00a000"})}}}}).call(this,n("c8ba"))},7365:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"body_wrapper"},[t._m(0),t._m(1),n("section",{staticClass:"faq_area bg_color sec_pad"},[n("div",{staticClass:"container custom_container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-2 col-md-2 xb_card"},[n("ul",{staticClass:"nav nav-tabs software_service_tab",attrs:{id:"myTab",role:"tablist"}},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",class:{active:"fyres_syntax"===t.active_el},on:{click:function(a){return t.ActiveTab("fyres_syntax")}}},[t._v("Fyres Syntax")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",class:{active:"aliceblue_syntax"===t.active_el},on:{click:function(a){return t.ActiveTab("aliceblue_syntax")}}},[t._v("AliceBlue Syntax")])])])]),n("div",{staticClass:"col-lg-10"},[n("div",{staticClass:"col-12 xb_card p-4",attrs:{id:"syntax_data"}},[n("form",{attrs:{id:"syntaxform"}},[n("div",{staticClass:"buying-selling-group",attrs:{"data-toggle":"buttons"}},[t._m(2),n("label",{staticClass:"btn btn-default buying-selling mt-1 REGULAR_child",class:{active:"REGULAR"===t.MainButton}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.MainVaritey("REGULAR")}}},[t._v("REGULAR")])]),n("label",{staticClass:"btn btn-default buying-selling mt-1 CO_child",class:{active:"CO"===t.MainButton}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.MainVaritey("CO")}}},[t._v("CO")])]),n("label",{staticClass:"btn btn-default buying-selling mt-1 BO_child",class:{active:"BO"===t.MainButton}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.MainVaritey("BO")}}},[t._v("BO")])]),n("label",{staticClass:"btn btn-default buying-selling mt-1 CANCEL_child",class:{active:"CANCEL"===t.MainButton}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.MainVaritey("CANCEL")}}},[t._v("CANCEL ORDER")])]),n("label",{staticClass:"btn btn-default buying-selling mt-1 CLOSE_child",class:{active:"CLOSE"===t.MainButton}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.MainVaritey("CLOSE")}}},[t._v("EXIT ORDER")])]),n("label",{staticClass:"btn btn-default buying-selling mt-1 AS_child",class:{active:"AS"===t.MainButton}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.MainVaritey("AS")}}},[t._v("ALTERNATIVE SYMBOLS")])]),n("label",{staticClass:"btn btn-default buying-selling mt-1 ALGOCOBO_child",class:{active:"ALGOCOBO"===t.MainButton}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.MainVaritey("ALGOCOBO")}}},[t._v("FULLY ALGO")])]),n("label",{staticClass:"btn btn-default buying-selling mt-1 STRATEGY_child",class:{active:"STRATEGY"===t.MainButton}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.MainVaritey("STRATEGY")}}},[t._v("STRATEGY")])]),n("label",{staticClass:"btn btn-default buying-selling mt-1 STRIKEPRICE_child",class:{active:"STRIKEPRICE"===t.MainButton}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.MainVaritey("STRIKEPRICE")}}},[t._v("AUTO STRIKE PRICE")])])]),"REGULAR"===t.MainButton||"CO"===t.MainButton||"BO"===t.MainButton||"CANCEL"===t.MainButton||"CLOSE"===t.MainButton||"AS"===t.MainButton||"ALGOCOBO"===t.MainButton||"STRATEGY"===t.MainButton?n("div",{staticClass:"buying-selling-group conditional "},[n("h5",{staticClass:"mt-2 border-left"},[t._v("TRADING SYMBOL Ex. NSE:SBIN-EQ "),"CANCEL"===t.MainButton||"CLOSE"===t.MainButton?n("span",{staticClass:"conditional text-danger"},[t._v(" ( Optional ) ")]):t._e()]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.tradingsymbol,expression:"tradingsymbol"}],attrs:{type:"text",name:"tradingsymbol",placeholder:"tradingsymbol",id:"tradingsymbol"},domProps:{value:t.tradingsymbol},on:{input:function(a){a.target.composing||(t.tradingsymbol=a.target.value)}}})]):t._e(),""!=t.tradingsymbol&&("CANCEL"!=t.MainButton||"CLOSE"===t.MainButton&&"AS"===t.MainButton)?n("div",{staticClass:"buying-selling-group conditional"},[n("h5",{staticClass:"mt-2 border-left"},[t._v("Quantity "),"CLOSE"===t.MainButton||"AS"===t.MainButton?n("span",{staticClass:"conditional text-danger"},[t._v(" ( Optional ) ")]):t._e()]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number",name:"quantity"},domProps:{value:t.quantity},on:{input:function(a){a.target.composing||(t.quantity=a.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.quantitypercentage,expression:"quantitypercentage"}],staticClass:"percentage",attrs:{type:"checkbox",name:"quantitypercentage"},domProps:{checked:Array.isArray(t.quantitypercentage)?t._i(t.quantitypercentage,null)>-1:t.quantitypercentage},on:{change:[function(a){var n=t.quantitypercentage,e=a.target,i=!!e.checked;if(Array.isArray(n)){var s=null,l=t._i(n,s);e.checked?l<0&&(t.quantitypercentage=n.concat([s])):l>-1&&(t.quantitypercentage=n.slice(0,l).concat(n.slice(l+1)))}else t.quantitypercentage=i},function(a){return t.QuantityPercentageChange(a)}]}}),t._v(" % Percentage ")]):t._e(),"%"===t.quantitypercentage?n("div",{staticClass:"buying-selling-group conditional",attrs:{"data-toggle":"buttons"}},[t._m(3),n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 EQUITY_child",class:{active:"EQUITY"===t.Fund}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.FundType("EQUITY")}}},[t._v("EQUITY")])]),n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 COMMODITY_child",class:{active:"COMMODITY"===t.Fund}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.FundType("COMMODITY")}}},[t._v("COMMODITY")])])]):t._e(),""!=t.Fund?n("div",{staticClass:"buying-selling-group conditional"},[n("h5",{staticClass:"mt-2 border-left"},[t._v("LEVERAGE")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.LEVERAGE,expression:"LEVERAGE"}],attrs:{type:"number",name:"LEVERAGE",placeholder:"LEVERAGE"},domProps:{value:t.LEVERAGE},on:{input:function(a){a.target.composing||(t.LEVERAGE=a.target.value)}}})]):t._e(),""!=t.LEVERAGE||("CLOSE"===t.MainButton||"AS"===t.MainButton)&&"%"===t.quantitypercentage?n("div",{staticClass:"buying-selling-group conditional"},[n("h5",{staticClass:"mt-2 border-left"},[t._v(" PER LOT SIZE "),""!=t.Fund?n("span",{staticClass:"conditional text-danger"},[t._v(" ( Optional ) ")]):t._e()]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.PER_LOT_SIZE,expression:"PER_LOT_SIZE"}],attrs:{type:"number",name:"per_lot_size",placeholder:"PER_LOT_SIZE",id:"PER_LOT_SIZE"},domProps:{value:t.PER_LOT_SIZE},on:{input:function(a){a.target.composing||(t.PER_LOT_SIZE=a.target.value)}}})]):t._e(),""!=t.quantity?n("div",{staticClass:"buying-selling-group conditional",attrs:{"data-toggle":"buttons"}},[n("h5",{staticClass:"mt-2 border-left"},[t._v("TRANSITION TYPE "),"CANCEL"===t.MainButton||"CLOSE"===t.MainButton||"AS"===t.MainButton&&""!=t.tradingsymbol?n("span",{staticClass:"conditional text-danger"},[t._v(" ( Optional ) ")]):t._e()]),n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 BUY_child",class:{active:"BUY"===t.Transaction}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.TransactionType("BUY")}}},[t._v("BUY")])]),n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 SELL_child",class:{active:"SELL"===t.Transaction}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.TransactionType("SELL")}}},[t._v("SELL")])])]):t._e(),"REGULAR"!==t.MainButton&&"CO"!==t.MainButton&&"BO"!==t.MainButton&&"STRIKEPRICE"!==t.MainButton||""==t.Transaction?t._e():n("div",{staticClass:"buying-selling-group conditional",attrs:{"data-toggle":"buttons"}},[n("h5",{staticClass:"mt-2 border-left"},[t._v("ORDER TYPE")]),"REGULAR"===t.MainButton||"CO"===t.MainButton||"BO"===t.MainButton||"STRIKEPRICE"===t.MainButton||"ALGOCOBO"===t.MainButton?n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 MARKET_child",class:{active:"MARKET"===t.OrderType}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.OrderTypeChange("MARKET")}}},[t._v("Market")])]):t._e(),"REGULAR"===t.MainButton||"CO"===t.MainButton||"BO"===t.MainButton||"STRIKEPRICE"===t.MainButton?n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 LIMIT_child",class:{active:"LIMIT"===t.OrderType}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.OrderTypeChange("LIMIT")}}},[t._v("LIMIT")])]):t._e(),"REGULAR"===t.MainButton||"CO"===t.MainButton||"BO"===t.MainButton?n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 SLM_child",class:{active:"SLM"===t.OrderType}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.OrderTypeChange("SLM")}}},[t._v("SLM")])]):t._e(),"REGULAR"===t.MainButton||"CO"===t.MainButton||"BO"===t.MainButton?n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 SLL_child",class:{active:"SLL"===t.OrderType}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.OrderTypeChange("SLL")}}},[t._v("SLL")])]):t._e()]),n("div",{staticClass:"row mt-3"},["REGULAR"===t.MainButton&&("SLM"===t.OrderType||"SLL"===t.OrderType)||"CO"==t.MainButton&&("SLM"===t.OrderType||"SLL"===t.OrderType)||"BO"==t.MainButton&&("SLM"===t.OrderType||"SLL"===t.OrderType)?n("div",{staticClass:"col-4 TRP_child_box conditional"},[n("h5",{staticClass:"mt-2 border-left"},[t._v("TRIGGER PRICE")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.TRP,expression:"TRP"}],staticClass:"text-box",attrs:{type:"number",name:"TRP",id:"TRP",placeholder:"Ex. 1",value:"1"},domProps:{value:t.TRP},on:{input:function(a){a.target.composing||(t.TRP=a.target.value)}}}),n("input",{staticClass:"percentage",attrs:{type:"checkbox",name:"TRPpercentage",value:"%"},on:{change:function(a){return t.TRPpercentageChange(a)}}}),t._v(" % Percentage ")]):t._e(),"REGULAR"===t.MainButton&&("LIMIT"===t.OrderType||"SLL"===t.OrderType)||"CO"==t.MainButton&&("LIMIT"===t.OrderType||"SLL"===t.OrderType)||"BO"==t.MainButton&&("LIMIT"===t.OrderType||"SLL"===t.OrderType)||"STRIKEPRICE"==t.MainButton&&"LIMIT"===t.OrderType?n("div",{staticClass:"col-4 LTP_child_box conditional"},[n("h5",{staticClass:"mt-2 border-left"},[t._v("LTP (LIMIT)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.LTP,expression:"LTP"}],staticClass:"text-box",attrs:{type:"number",name:"LTP",id:"LTP",placeholder:"Ex. 1",value:"1"},domProps:{value:t.LTP},on:{input:function(a){a.target.composing||(t.LTP=a.target.value)}}}),n("input",{staticClass:"percentage",attrs:{type:"checkbox",name:"LTPpercentage",value:"%"},on:{change:function(a){return t.LTPpercentageChange(a)}}}),t._v(" % Percentage ")]):t._e(),"CO"===t.MainButton&&("MARKET"===t.OrderType||"LIMIT"===t.OrderType)||"CO"==t.MainButton&&("SLM"==t.OrderType||"SLL"==t.OrderType)||"BO"==t.MainButton&&t.OrderType||("BOT"==t.auto_mation||"COT"==t.auto_mation)&&"MARKET"==t.OrderType||"BOT"==t.auto_mation&&"LIMIT"==t.OrderType||"COT"==t.auto_mation&&"LIMIT"==t.OrderType||"STRATEGY"==t.MainButton&&("BOT"==t.auto_mation||"COT"==t.auto_mation)&&""!=t.quantity?n("div",{staticClass:"col-4 SL_child_box conditional"},[n("h5",{staticClass:"mt-2 border-left"},[t._v("STOP LOSS")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.SL,expression:"SL"}],staticClass:"text-box",attrs:{type:"number",name:"SL",id:"SL",placeholder:"Ex. 1",value:"1"},domProps:{value:t.SL},on:{input:function(a){a.target.composing||(t.SL=a.target.value)}}}),n("input",{staticClass:"percentage",attrs:{type:"checkbox",name:"SLpercentage",value:"%"},on:{change:function(a){return t.SLpercentageChange(a)}}}),t._v(" % Percentage ")]):t._e(),"CO"===t.MainButton&&("MARKET"===t.OrderType||"LIMIT"===t.OrderType)||"CO"==t.MainButton&&("SLM"==t.OrderType||"SLL"==t.OrderType)||"BO"==t.MainButton&&t.OrderType||("BOT"==t.auto_mation||"COT"==t.auto_mation)&&"MARKET"==t.OrderType||"BOT"==t.auto_mation&&"LIMIT"==t.OrderType||"COT"==t.auto_mation&&"LIMIT"==t.OrderType||"STRATEGY"==t.MainButton&&("BOT"==t.auto_mation||"COT"==t.auto_mation)&&""!=t.quantity?n("div",{staticClass:"col-4 TP_child_box conditional"},[n("h5",{staticClass:"mt-2 border-left"},[t._v("TARGET")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.TP,expression:"TP"}],staticClass:"text-box",attrs:{type:"number",name:"TP",id:"TP",placeholder:"Ex. 1",value:"1"},domProps:{value:t.TP},on:{input:function(a){a.target.composing||(t.TP=a.target.value)}}}),n("input",{staticClass:"percentage",attrs:{type:"checkbox",name:"TPpercentage",value:"%"},on:{change:function(a){return t.TPpercentageChange(a)}}}),t._v(" % Percentage ")]):t._e()]),"REGULAR"==t.MainButton&&t.OrderType||"CANCEL"==t.MainButton||"CLOSE"==t.MainButton||"AS"==t.MainButton&&t.tradingsymbol||"MIS"==t.auto_mation&&t.OrderType||"CLOSE"==t.MainButton&&t.quantity||"STRATEGY"==t.MainButton&&"MIS"==t.auto_mation&&t.quantity>"0"||"STRIKEPRICE"==t.MainButton&&"MIS"==t.auto_mation&&t.OrderType&&t.SL?n("div",{staticClass:"buying-selling-group conditional",attrs:{"data-toggle":"buttons"}},[n("h5",{staticClass:"mt-2 border-left"},[t._v("PRODUCT "),"CANCEL"===t.MainButton?n("span",{staticClass:"conditional text-danger"},[t._v(" ( Optional ) ")]):t._e()]),n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 INTRADAY_child conditional",class:{active:"INTRADAY"===t.Producttype}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.ProducttypeC("INTRADAY")}}},[t._v("INTRADAY")])]),n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 CNC_child conditional",class:{active:"CNC"===t.Producttype}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.ProducttypeC("CNC")}}},[t._v("CNC")])]),n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 MARGIN_child conditional",class:{active:"MARGIN"===t.Producttype}},[n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.ProducttypeC("MARGIN")}}},[t._v("MARGIN")])]),"CANCEL"==t.MainButton||"CLOSE"==t.MainButton||"AS"==t.MainButton?n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 BO_child conditional",class:{active:"BO"===t.Producttype}},[n("input",{attrs:{type:"radio",name:"product_type",value:"BO",id:"BO"}}),n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.ProducttypeC("BO")}}},[t._v("BO")])]):t._e(),"CANCEL"==t.MainButton||"CLOSE"==t.MainButton||"AS"==t.MainButton?n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 CO_child conditional",class:{active:"CO"===t.Producttype}},[n("input",{attrs:{type:"radio",name:"product_type",value:"CO",id:"CO"},on:{click:function(a){return t.ProducttypeC("CO")}}}),n("span",{staticClass:"buying-selling-word",on:{click:function(a){return t.ProducttypeC("CO")}}},[t._v("CO")])]):t._e()]):t._e(),"STRIKEPRICE"==t.MainButton&&t.Producttype||"STRIKEPRICE"==t.MainButton&&("BOT"==t.auto_mation||"COT"==t.auto_mation)&&t.SL?n("div",{staticClass:"buying-selling-group conditional"},[t._m(4),n("input",{directives:[{name:"model",rawName:"v-model",value:t.NEARBY,expression:"NEARBY"}],attrs:{type:"number",name:"near_by",placeholder:"NEARBY",id:"NEARBY"},domProps:{value:t.NEARBY},on:{input:function(a){a.target.composing||(t.NEARBY=a.target.value)}}})]):t._e(),""!=t.NEARBY?n("div",{staticClass:"buying-selling-group conditional"},[t._m(5),n("input",{directives:[{name:"model",rawName:"v-model",value:t.NEARBYCAL,expression:"NEARBYCAL"}],attrs:{type:"number",name:"cal",placeholder:"cal",id:"cal"},domProps:{value:t.NEARBYCAL},on:{input:function(a){a.target.composing||(t.NEARBYCAL=a.target.value)}}})]):t._e(),""!=t.NEARBYCAL?n("div",{staticClass:"buying-selling-group conditional",attrs:{"data-toggle":"buttons"}},[t._m(6),n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 +_child"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cal_plus_minus,expression:"cal_plus_minus"}],attrs:{type:"radio",name:"cal_plus_minus",value:"+",id:"+"},domProps:{checked:t._q(t.cal_plus_minus,"+")},on:{change:function(a){t.cal_plus_minus="+"}}}),n("span",{staticClass:"buying-selling-word"},[t._v("+")])]),n("label",{staticClass:"btn btn-default drop_action_class buying-selling mt-1 -_child"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cal_plus_minus,expression:"cal_plus_minus"}],attrs:{type:"radio",name:"cal_plus_minus",value:"-",id:"-"},domProps:{checked:t._q(t.cal_plus_minus,"-")},on:{change:function(a){t.cal_plus_minus="-"}}}),n("span",{staticClass:"buying-selling-word"},[t._v("-")])])]):t._e()]),("REGULAR"==t.MainButton||"ALGOCOBO"==t.MainButton)&&t.Producttype||"CO"==t.MainButton&&(t.SL||t.LTP)||("BO"==t.MainButton||"ALGOCOBO"==t.MainButton)&&(t.SL||t.LTP||t.TRP||t.TP)||"CANCEL"==t.MainButton||"AS"==t.MainButton&&t.tradingsymbol||"CLOSE"==t.MainButton||t.cal_plus_minus||"STRATEGY"==t.MainButton&&t.Producttype||"STRATEGY"==t.MainButton&&(t.SL||t.TP)?n("div",{staticClass:"row mt-3 conditional conditional-keyup"},[n("div",{staticClass:"col-12 boxcodes"},[n("button",{staticClass:"btn btn-success generate_code",attrs:{type:"button"},on:{click:function(a){return t.Generate_Code("FYERSV2")}}},[t._v(" Generate Code ")])])]):t._e()])])])]),n("v-easy-dialog"),t.simpleDialog?n("div",{staticClass:"modal fade show",staticStyle:{"padding-right":"17px",display:"block"},attrs:{id:"generated_code",role:"dialog"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body"},[n("p",{staticClass:"send_message_to"}),n("h5",{staticClass:"namea"},[t._v("Generated Code")]),n("p",{staticClass:"working_code d-block",staticStyle:{"word-break":"break-all",display:"none"}},[t._v(" "+t._s(t.output)+" ")]),n("p")]),n("div",{staticClass:"modal-footer"},[n("p",{staticClass:"copy_message",staticStyle:{display:"none"}},[t._v(" SUCCESSFULLY COPY ")]),n("button",{staticClass:"btn btn-success d-block",staticStyle:{float:"left",display:"none"},attrs:{type:"button"},on:{click:function(a){t.copyToClipboard(".working_code")}}},[t._v(" COPY CODE ")]),n("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(a){t.simpleDialog=!1}}},[t._v(" Close ")])])])])]):t._e()],1),n("hr",{attrs:{id:"scroll_tobottom"}})])},i=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("header",{staticClass:"header_area"},[n("nav",{staticClass:"navbar navbar-expand-lg menu_one menu_four"},[n("div",{staticClass:"container custom_container p0"},[n("a",{staticClass:"navbar-brand",attrs:{href:"https://nextlevelbot.com"}},[n("img",{attrs:{src:"https://nextlevelbot.com/assests/img/logo.png",srcset:"https://nextlevelbot.com/assests/img/logo.png 2x",alt:"logo"}})]),n("button",{staticClass:"navbar-toggler collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"menu_toggle"},[n("span",{staticClass:"hamburger"},[n("span"),n("span"),n("span")]),n("span",{staticClass:"hamburger-cross"},[n("span"),n("span")])])]),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav menu w_menu mr-auto ml-auto"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://nextlevelbot.com",role:"button"}},[t._v(" Home ")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://nextlevelbot.com/price",role:"button"}},[t._v(" Price ")])]),n("li",{staticClass:"nav-item dropdown submenu"},[n("a",{staticClass:"nav-link",attrs:{href:"",role:"button"}},[t._v(" Indicator Store ")]),n("ul",{staticClass:"dropdown-menu"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://nextlevelbot.com/indicator_store"}},[t._v("Indicator Store")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://nextlevelbot.com/indicator_access"}},[t._v("Nextlevelbot Indicator")])])])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://nextlevelbot.com/betasyntax",role:"button"}},[t._v(" Syntax ")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://nextlevelbot.com/videos",role:"button"}},[t._v(" Videos ")])]),n("li",{staticClass:"nav-item dropdown submenu"},[n("a",{staticClass:"nav-link",attrs:{href:"",role:"button"}},[t._v(" More ! ")]),n("ul",{staticClass:"dropdown-menu"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://nextlevelbot.com/aliceblue_symbol"}},[t._v("Symbol")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://nextlevelbot.com/resource"}},[t._v("Resources")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://nextlevelbot.com/syntaxgenerator"}},[t._v("Syntax Generator")])])])])]),n("a",{staticClass:"btn_get btn_hover menu_cus",attrs:{href:"https://nextlevelbot.com/login"}},[t._v("Login In")])])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("section",{staticClass:"breadcrumb_area"},[n("div",{staticClass:"container"},[n("div",{staticClass:"breadcrumb_content text-center"},[n("h1",{staticClass:"f_p f_700 f_size_50 w_color l_height50 mb_20"},[t._v(" Syntax Generator ")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h5",{staticClass:"mt-2 border-left"},[t._v(" VARITEY "),n("span",{staticClass:"conditional text-danger",staticStyle:{display:"none"}})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h5",{staticClass:"mt-2 border-left"},[t._v(" FUNDS "),n("span",{staticClass:"conditional text-danger",staticStyle:{display:"none"}})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h5",{staticClass:"mt-2 border-left"},[t._v(" NEAR BY "),n("span",{staticClass:"conditional text-danger",staticStyle:{display:"none"}})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h5",{staticClass:"mt-2 border-left"},[t._v(" CAL "),n("span",{staticClass:"conditional text-danger"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h5",{staticClass:"mt-2 border-left"},[t._v(" PLUS AND MINUS "),n("span",{staticClass:"conditional text-danger",staticStyle:{display:"none"}})])}],s=n("6516"),l=s["a"],o=(n("0728"),n("2877")),r=Object(o["a"])(l,e,i,!1,null,null,null);a["a"]=r.exports},"85ec":function(t,a,n){},e959:function(t,a,n){}});
//# sourceMappingURL=app.6fc6bd78.js.map
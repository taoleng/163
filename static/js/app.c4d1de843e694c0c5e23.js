webpackJsonp([1],{0:function(t,e){},"6XKS":function(t,e){},DdNH:function(t,e){},F75g:function(t,e){},"M+t7":function(t,e){},MRdH:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-tab"},[this._t("header"),this._v(" "),e("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:this.bodyPaddingTop,paddingBottom:this.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[this._t("default")],2),this._v(" "),this._t("bottom")],2)},staticRenderFns:[]};var r=i("VU/8")({name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}},s,!1,function(t){i("6XKS")},null,null).exports,o=i("BEQ0"),a=i.n(o),l=(Object,String,String,Object,{name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return a()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}),u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]};var c=i("VU/8")(l,u,!1,function(t){i("l87s")},null,null).exports,d=i("piuB"),h=(d.b,String,{mounted:function(){},name:"tabbar",mixins:[d.b],props:{iconClass:String}}),p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"weui-tabbar"},[this._t("default")],2)},staticRenderFns:[]};var f=i("VU/8")(h,p,!1,function(t){i("M+t7")},null,null).exports,m=(String,Number,{name:"badge",props:{text:[String,Number]}}),_={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["vux-badge",{"vux-badge-dot":void 0===this.text,"vux-badge-single":void 0!==this.text&&1===this.text.toString().length}],domProps:{textContent:this._s(this.text)}})},staticRenderFns:[]};var v=i("VU/8")(m,_,!1,function(t){i("MRdH")},null,null).exports,b=(d.a,Boolean,String,String,Object,String,{name:"tabbar-item",components:{Badge:v},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[d.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}),g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():i("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?i("sup",[i("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),i("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]},x=i("VU/8")(b,g,!1,null,null,null).exports,w=(d.b,Number,String,String,String,String,Boolean,Function,String,Boolean,{name:"tab",mixins:[d.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean},computed:{barLeft:function(){return this.currentIndex*(100/this.number)+"%"},barRight:function(){return(this.number-this.currentIndex-1)*(100/this.number)+"%"},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}),C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab",class:{"vux-tab-no-animate":!t.animate}},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)},staticRenderFns:[]};var y=i("VU/8")(w,C,!1,function(t){i("NNx+")},null,null).exports,k=(d.a,String,Boolean,String,String,String,{name:"tab-item",mixins:[d.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v("\n  "+t._s(t.badgeLabel))]):t._e()],2)},staticRenderFns:[]},B=i("VU/8")(k,S,!1,null,null,null).exports,$=i("mvHQ"),T=i.n($),I=i("WTNC"),L=i.n(I),O=i("ypEt"),N=i.n(O),P=i("qbvd"),H=i.n(P);Object,String,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Object,Object,Boolean,Number;var R={name:"scroller",props:{value:{type:Object,default:function(){return{pulldownStatus:"",pullupStatus:""}}},height:String,lockX:Boolean,lockY:Boolean,scrollbarX:Boolean,scrollbarY:Boolean,bounce:{type:Boolean,default:!0},useOriginScroll:{type:Boolean,default:!1},useTransition:{type:Boolean,default:!0},preventDefault:{type:Boolean,default:!1},stopPropagation:Boolean,boundryCheck:{type:Boolean,default:!0},gpuAcceleration:{type:Boolean,default:!0},usePulldown:{type:Boolean,default:!1},usePullup:{type:Boolean,default:!1},pulldownConfig:{type:Object,default:function(){return{}}},pullupConfig:{type:Object,default:function(){return{}}},enableHorizontalSwiping:{type:Boolean,default:!1},scrollBottomOffset:{type:Number,default:0}},methods:{reset:function(t,e,i){t&&(void 0!==t.left&&this._xscroll.scrollLeft(t.left,e,i),void 0!==t.top&&this._xscroll.scrollTop(t.top,e,i)),this._xscroll&&this._xscroll.resetSize()},donePulldown:function(){var t=this;this.pulldown.reset(function(){t.reset()}),this.currentValue.pulldownStatus="default"},disablePullup:function(){this.pullup.stop(),this.currentValue.pullupStatus="disabled"},enablePullup:function(){this.currentValue.pullupStatus="default",this.pullup.restart()},donePullup:function(){this.pullup.complete(),this.reset(),this.currentValue.pullupStatus="default"},getStyles:function(){var t=this.height;!this.height&&this.$el&&!this.$el.style.height&&this.lockX&&(t=document.documentElement.clientHeight+"px",this.reset()),this.height&&0===this.height.indexOf("-")&&(t=document.documentElement.clientHeight+parseInt(this.height)+"px"),this.styles={height:""+t}}},created:function(){var t=this;this.value?this.currentValue=this.value:this.currentValue={pulldownStatus:"",pullupStatus:""},this.handleOrientationchange=function(){setTimeout(function(){t.reset()},100)}},data:function(){return{currentValue:{},styles:{}}},watch:{currentValue:{handler:function(t){var e;this.$emit("input",(e=t,JSON.parse(T()(e))))},deep:!0},height:function(){this.getStyles()},value:{handler:function(t){"default"===t.pullupStatus&&"default"!==this.currentValue.pullupStatus&&this.donePullup(),"default"===t.pulldownStatus&&"default"!==this.currentValue.pulldownStatus&&this.donePulldown(),"disabled"===t.pullupStatus&&"disabled"!==this.currentValue.pullupStatus&&this.disablePullup(),"enabled"===t.pullupStatus&&"disabled"===this.currentValue.pullupStatus&&this.enablePullup()},deep:!0}},mounted:function(){var t=this;this.uuid=Math.random().toString(36).substring(3,8),this.$nextTick(function(){t.$el.setAttribute("id","vux-scroller-"+t.uuid);var e=null;if(t.$slots.default&&(e=t.$slots.default[0].elm),!e)throw new Error("no content is found");if(t._xscroll=new L.a({renderTo:"#vux-scroller-"+t.uuid,lockX:t.lockX,lockY:t.lockY,scrollbarX:t.scrollbarX,scrollbarY:t.scrollbarY,content:e,bounce:t.bounce,useOriginScroll:t.useOriginScroll,useTransition:t.useTransition,preventDefault:t.preventDefault,boundryCheck:t.boundryCheck,gpuAcceleration:t.gpuAcceleration,stopPropagation:t.stopPropagation}),t._xscroll.on("scroll",function(){if(t._xscroll){var e=t._xscroll.getScrollTop();t.$emit("on-scroll",{top:e,left:t._xscroll.getScrollLeft()}),e>=t._xscroll.containerHeight-t._xscroll.height-t.scrollBottomOffset&&t.$emit("on-scroll-bottom")}}),t.usePulldown){var i=t.$slots.pulldown,n=a()({content:"Pull Down To Refresh",height:60,autoRefresh:!1,downContent:"Pull Down To Refresh",upContent:"Release To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pulldown-"},t.pulldownConfig);i&&(n.container=i[0].elm),t.pulldown=new N.a(n),t._xscroll.plug(t.pulldown),t.pulldown.on("loading",function(e){t.$emit("on-pulldown-loading",t.uuid)}),t.pulldown.on("statuschange",function(e){t.currentValue.pulldownStatus=e.newVal})}if(t.usePullup){var s=t.$slots.pullup,r=a()({content:"Pull Up To Refresh",pullUpHeight:60,height:40,autoRefresh:!1,downContent:"Release To Refresh",upContent:"Pull Up To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pullup-"},t.pullupConfig);s&&(r.container=s[0].elm),t.pullup=new H.a(r),t._xscroll.plug(t.pullup),t.pullup.on("loading",function(e){t.$emit("on-pullup-loading",t.uuid)}),t.pullup.on("statuschange",function(e){t.currentValue.pullupStatus=e.newVal})}t.enableHorizontalSwiping&&(t._xscroll.on("panstart",function(e){2!==e.direction&&4!==e.direction||(e.preventDefault(),t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!1),t._xscroll.userConfig.lockY=!0)}),t._xscroll.on("panend",function(){t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!0),t._xscroll.userConfig.lockY=!1})),t._xscroll.render(),window.addEventListener("orientationchange",t.handleOrientationchange,!1)}),this.getStyles()},updated:function(){this.reset()},beforeDestroy:function(){this.pullup&&(this._xscroll.unplug(this.pullup),this.pullup.pluginDestructor()),this.pulldown&&(this._xscroll.unplug(this.pulldown),this.pulldown.pluginDestructor()),window.removeEventListener("orientationchange",this.handleOrientationchange,!1),this._xscroll.destroy(),this._xscroll=null}};var D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.styles},[e("div",{staticClass:"xs-container"},[this._t("default"),this._v(" "),this._t("pulldown"),this._v(" "),this._t("pullup")],2)])},staticRenderFns:[]};var M=i("VU/8")(R,D,!1,function(t){i("p8U2")},null,null).exports,V=i("NjrX"),j=i("0FxO"),A=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(j.b)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(T()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new V.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t){this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,n){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,n){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}))])},staticRenderFns:[]};var U=i("VU/8")(A,E,!1,function(t){i("Ok8W")},null,null).exports,F=(Number,Number,String,Number,{name:"marquee",props:{interval:{type:Number,default:2e3},duration:{type:Number,default:300},direction:{type:String,default:"up"},itemHeight:Number},beforeDestroy:function(){this.destroy()},data:function(){return{currenTranslateY:0,height:"",length:0,currentIndex:0,noAnimate:!1}},methods:{destroy:function(){this.timer&&clearInterval(this.timer)},init:function(){this.destroy(),this.cloneNode&&this.$refs.box.removeChild(this.cloneNode),this.cloneNode=null;var t=this.$refs.box.firstElementChild;return!!t&&(this.length=this.$refs.box.children.length,this.height=this.itemHeight||t.offsetHeight,"up"===this.direction?(this.cloneNode=t.cloneNode(!0),this.$refs.box.appendChild(this.cloneNode)):(this.cloneNode=this.$refs.box.lastElementChild.cloneNode(!0),this.$refs.box.insertBefore(this.cloneNode,t)),!0)},start:function(){var t=this;"down"===this.direction&&this.go(!1),this.timer=setInterval(function(){"up"===t.direction?(t.currentIndex+=1,t.currenTranslateY=-t.currentIndex*t.height):(t.currentIndex-=1,t.currenTranslateY=-(t.currentIndex+1)*t.height),t.currentIndex===t.length?setTimeout(function(){t.go(!0)},t.duration):-1===t.currentIndex?setTimeout(function(){t.go(!1)},t.duration):t.noAnimate=!1},this.interval+this.duration)},go:function(t){this.noAnimate=!0,t?(this.currentIndex=0,this.currenTranslateY=0):(this.currentIndex=this.length-1,this.currenTranslateY=-(this.currentIndex+1)*this.height)}}}),Y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vux-marquee",style:{height:this.height+"px"}},[e("ul",{ref:"box",staticClass:"vux-marquee-box",style:{transform:"translate3d(0,"+this.currenTranslateY+"px,0)",transition:"transform "+(this.noAnimate?0:this.duration)+"ms"}},[this._t("default")],2)])},staticRenderFns:[]};var W=i("VU/8")(F,Y,!1,function(t){i("aLXv")},null,null).exports,q={render:function(){var t=this.$createElement;return(this._self._c||t)("li",[this._t("default")],2)},staticRenderFns:[]},X=i("VU/8")({name:"marquee-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.destroy(),t.$parent.init(),t.$parent.start()})}},q,!1,null,null,null).exports,z=(String,Object,Array,String,{name:"panel",props:{header:String,footer:Object,list:Array,type:{type:String,default:"1"}},methods:{onImgError:function(t,e){this.$emit("on-img-error",JSON.parse(T()(t)),e),t.fallbackSrc&&(e.target.src=t.fallbackSrc)},getUrl:function(t){return Object(j.a)(t,this.$router)},onClickFooter:function(){this.$emit("on-click-footer"),Object(j.b)(this.footer.url,this.$router)},onClickHeader:function(){this.$emit("on-click-header")},onItemClick:function(t){this.$emit("on-click-item",t),Object(j.b)(t.url,this.$router)}}}),G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-panel weui-panel_access"},[t.header?i("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:t._s(t.header)},on:{click:t.onClickHeader}},[t._t("header")],2):t._e(),t._v(" "),i("div",{staticClass:"weui-panel__bd"},[t._t("body",["1"===t.type?t._l(t.list,function(e){return i("a",{staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:t.getUrl(e.url)},on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[e.src?i("div",{staticClass:"weui-media-box__hd"},[i("img",{staticClass:"weui-media-box__thumb",attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]):t._e(),t._v(" "),i("div",{staticClass:"weui-media-box__bd"},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])])}):t._e(),t._v(" "),"2"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])}):t._e(),t._v(" "),"3"===t.type?[i("div",{staticClass:"weui-media-box weui-media-box_small-appmsg"},[i("div",{staticClass:"weui-cells"},t._l(t.list,function(e){return i("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:t.getUrl(e.url)},on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("div",{staticClass:"weui-cell__hd"},[i("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[i("p",{domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),i("span",{staticClass:"weui-cell__ft"})])}))])]:t._e(),t._v(" "),"4"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}}),t._v(" "),e.meta?i("ul",{staticClass:"weui-media-box__info"},[i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.source)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.date)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta weui-media-box__info__meta_extra",domProps:{innerHTML:t._s(e.meta.other)}})]):t._e()])}):t._e(),t._v(" "),"5"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("div",{staticClass:"weui-media-box_appmsg"},[e.src?i("div",{staticClass:"weui-media-box__hd"},[i("img",{staticClass:"weui-media-box__thumb",attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]):t._e(),t._v(" "),i("div",{staticClass:"weui-media-box__bd"},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])]),t._v(" "),e.meta?i("ul",{staticClass:"weui-media-box__info"},[i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.source)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.date)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta weui-media-box__info__meta_extra",domProps:{innerHTML:t._s(e.meta.other)}})]):t._e()])}):t._e()])],2),t._v(" "),i("div",{staticClass:"weui-panel__ft"},[t.footer&&t.footer.title&&"3"!==t.type?i("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:t.getUrl(t.footer.url)},on:{click:function(e){e.preventDefault(),t.onClickFooter(e)}}},[i("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:t._s(t.footer.title)}})]):t._e()])])},staticRenderFns:[]};var J=i("VU/8")(z,G,!1,function(t){i("DdNH")},null,null).exports;var K=0,Q=K+9,Z=0,tt=["A","B01","B02","B03","B04","B05","B06","B07","B08","B09"],et="A",it=!1;var nt={name:"App",components:{ViewBox:r,XHeader:c,Tabbar:f,TabbarItem:x,Tab:y,TabItem:B,sc:M,Swiper:U,Marquee:W,MarqueeItem:X,Panel:J},created:function(){var t=this;this.$http.jsonp("https://3g.163.com/touch/jsonp/sy/recommend/0-9.html").then(function(e){t.swiperList=e.body.focus.filter(function(t){return null===t.addata&&t.picInfo[0]}).map(function(t){return{url:t.link,img:t.picInfo[0].url,title:t.title}}),t.dataList=e.body.list.filter(function(t){return null===t.addata&&t.picInfo[0]}).map(function(t){return{url:t.link,src:t.picInfo[0].url,title:t.title,desc:t.digest}}),t.marqueeList=e.body.live.filter(function(t){return null===t.addata&&t.picInfo[0]}).map(function(t){return{title:t.title,url:t.link}}),it=!0,t.$refs.ref.finishInfinite()})},data:function(){return{tabList:["推荐","新闻","娱乐","体育","图片","财经","汽车","直播"],swiperList:[],marqueeList:[],dataList:[],moreData:[]}},methods:{refresh:function(){var t=this;this.$http.jsonp("https://3g.163.com/touch/jsonp/sy/recommend/0-9.html",{params:{miss:"00",refresh:(et=tt[Z],++Z===tt.length&&(Z=0),et)}}).then(function(e){K=0,setTimeout(function(){t.dataList=e.body.list.filter(function(t){return null===t.addata&&t.picInfo[0]}).map(function(t){return{url:t.link,src:t.picInfo[0].url,title:t.title,desc:t.digest}}),t.$refs.ref.finishPullToRefresh()},500)}),this.moreData=[]},infinite:function(){var t=this;if(K+=10,it){var e="https://3g.163.com/touch/jsonp/sy/recommend/"+K+"-"+Q+".html";this.$http.jsonp(e,{params:{miss:"00",refresh:et}}).then(function(e){console.log(K,et);e=e.body.list.filter(function(t){return null===t.addata&&t.picInfo[0]}).map(function(t){return{url:t.link,src:t.picInfo[0].url,title:t.title,desc:t.digest}});t.moreData=t.moreData.concat(e),t.$refs.ref.finishInfinite()})}}}},st={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("view-box",[i("x-header",{attrs:{slot:"header",title:"网易","left-options":{showBack:!1}},slot:"header"}),t._v(" "),i("sc",{attrs:{"lock-y":!0}},[i("div",{staticClass:"app_tab"},[i("tab",t._l(t.tabList,function(e,n){return i("tab-item",{attrs:{selected:0===n}},[t._v(t._s(e))])}))],1)]),t._v(" "),i("scroller",{ref:"ref",staticClass:"news_scroller",attrs:{"on-refresh":t.refresh,"on-infinite":t.infinite}},[i("swiper",{attrs:{list:t.swiperList,interval:3e3,auto:!0,loop:!0}}),t._v(" "),i("marquee",{staticClass:"news-marquee",attrs:{interval:2500}},t._l(t.marqueeList,function(e){return i("marquee-item",[i("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])})),t._v(" "),i("panel",{attrs:{list:t.dataList}}),t._v(" "),i("panel",{attrs:{list:t.moreData}})],1),t._v(" "),i("tabbar",{attrs:{slot:"bottom"},slot:"bottom"},[i("tabbar-item",{attrs:{selected:""}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("首页")])]),t._v(" "),i("tabbar-item",[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("推荐")])]),t._v(" "),i("tabbar-item",[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("我的")])])],1)],1)],1)},staticRenderFns:[]};var rt=i("VU/8")(nt,st,!1,function(t){i("YGF6")},null,null).exports,ot=i("/ocq"),at={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hello"})},staticRenderFns:[]};var lt=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},at,!1,function(t){i("F75g")},"data-v-0123ad3f",null).exports;n.a.use(ot.a);var ut=new ot.a({routes:[{path:"/",component:lt}]}),ct=i("8+8L"),dt=i("POcy"),ht=i.n(dt),pt=i("NYxO");n.a.use(pt.a);var ft=new pt.a.Store({state:{count:0},getters:{},mutations:{add:function(t){t.count++}}});n.a.use(ht.a),n.a.use(ct.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:ut,store:ft,components:{App:rt},template:"<App/>"})},"NNx+":function(t,e){},Ok8W:function(t,e){},YGF6:function(t,e){},aLXv:function(t,e){},l87s:function(t,e){},p8U2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c4d1de843e694c0c5e23.js.map
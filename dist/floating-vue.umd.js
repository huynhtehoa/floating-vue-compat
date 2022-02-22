var Ze=Object.defineProperty,et=Object.defineProperties;var tt=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var fe=(r,i,d)=>i in r?Ze(r,i,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[i]=d,m=(r,i)=>{for(var d in i||(i={}))ot.call(i,d)&&fe(r,d,i[d]);if(ue)for(var d of ue(i))it.call(i,d)&&fe(r,d,i[d]);return r},v=(r,i)=>et(r,tt(i));(function(r,i){typeof exports=="object"&&typeof module!="undefined"?i(exports,require("vue"),require("@floating-ui/dom")):typeof define=="function"&&define.amd?define(["exports","vue","@floating-ui/dom"],i):(r=typeof globalThis!="undefined"?globalThis:r||self,i(r.FloatingVue={},r.Vue,r.FloatingUIDOM))})(this,function(r,i,d){"use strict";function X(e,t){for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(typeof t[o]=="object"&&e[o]?X(e[o],t[o]):e[o]=t[o])}const _={disabled:!1,distance:5,skidding:0,container:"body",boundary:void 0,instantMove:!1,disposeTimeout:5e3,popperTriggers:[],strategy:"absolute",preventOverflow:!0,flip:!0,shift:!0,overflowPadding:0,arrowPadding:0,arrowOverflow:!0,themes:{tooltip:{placement:"top",triggers:["hover","focus","touch"],hideTriggers:e=>[...e,"click"],delay:{show:200,hide:0},handleResize:!1,html:!1,loadingContent:"..."},dropdown:{placement:"bottom",triggers:["click"],delay:0,handleResize:!0,autoHide:!0},menu:{$extend:"dropdown",triggers:["hover","focus"],popperTriggers:["hover","focus"],delay:{show:0,hide:400}}}};function g(e,t){let o=_.themes[e]||{},s;do s=o[t],typeof s=="undefined"?o.$extend?o=_.themes[o.$extend]||{}:(o=null,s=_[t]):o=null;while(o);return s}function me(e){const t=[e];let o=_.themes[e]||{};do o.$extend&&!o.$resetCss?(t.push(o.$extend),o=_.themes[o.$extend]||{}):o=null;while(o);return t.map(s=>`v-popper--theme-${s}`)}var st="";let $=!1;if(typeof window!="undefined"){$=!1;try{const e=Object.defineProperty({},"passive",{get(){$=!0}});window.addEventListener("test",null,e)}catch{}}let Y=!1;typeof window!="undefined"&&typeof navigator!="undefined"&&(Y=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream);const E=["auto","top","bottom","left","right"].reduce((e,t)=>e.concat([t,`${t}-start`,`${t}-end`]),[]),A={hover:"mouseenter",focus:"focus",click:"click",touch:"touchstart"},O={hover:"mouseleave",focus:"blur",click:"click",touch:"touchend"};function _e(e,t){const o=e.indexOf(t);o!==-1&&e.splice(o,1)}function z(){return new Promise(e=>requestAnimationFrame(()=>{requestAnimationFrame(e)}))}const u=[];let w=null,M=function(){};typeof window!="undefined"&&(M=window.Element);function a(e){return function(t){return g(t.theme,e)}}var k=()=>i.defineComponent({name:"VPopper",compatConfig:{RENDER_FUNCTION:!1},props:{theme:{type:String,required:!0},targetNodes:{type:Function,required:!0},referenceNode:{type:Function,required:!0},popperNode:{type:Function,required:!0},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:a("disabled")},positioningDisabled:{type:Boolean,default:a("positioningDisabled")},placement:{type:String,default:a("placement"),validator:e=>E.includes(e)},delay:{type:[String,Number,Object],default:a("delay")},distance:{type:[Number,String],default:a("distance")},skidding:{type:[Number,String],default:a("skidding")},triggers:{type:Array,default:a("triggers")},showTriggers:{type:[Array,Function],default:a("showTriggers")},hideTriggers:{type:[Array,Function],default:a("hideTriggers")},popperTriggers:{type:Array,default:a("popperTriggers")},popperShowTriggers:{type:[Array,Function],default:a("popperShowTriggers")},popperHideTriggers:{type:[Array,Function],default:a("popperHideTriggers")},container:{type:[String,Object,M,Boolean],default:a("container")},boundary:{type:[String,M],default:a("boundary")},strategy:{type:String,validator:e=>["absolute","fixed"].includes(e),default:a("strategy")},autoHide:{type:Boolean,default:a("autoHide")},handleResize:{type:Boolean,default:a("handleResize")},instantMove:{type:Boolean,default:a("instantMove")},eagerMount:{type:Boolean,default:a("eagerMount")},popperClass:{type:[String,Array,Object],default:a("popperClass")},computeTransformOrigin:{type:Boolean,default:a("computeTransformOrigin")},autoMinSize:{type:Boolean,default:a("autoMinSize")},autoMaxSize:{type:Boolean,default:a("autoMaxSize")},preventOverflow:{type:Boolean,default:a("preventOverflow")},overflowPadding:{type:[Number,String],default:a("overflowPadding")},arrowPadding:{type:[Number,String],default:a("arrowPadding")},arrowOverflow:{type:Boolean,default:a("arrowOverflow")},flip:{type:Boolean,default:a("flip")},shift:{type:Boolean,default:a("shift")},shiftCrossAxis:{type:Boolean,default:a("shiftCrossAxis")}},emits:["show","hide","update:shown","apply-show","apply-hide","close-group","close-directive","auto-hide","resize","dispose"],data(){return{isShown:!1,isMounted:!1,skipTransition:!1,classes:{showFrom:!1,showTo:!1,hideFrom:!1,hideTo:!0},result:{x:0,y:0,placement:"",strategy:this.strategy,arrow:{x:0,y:0,centerOffset:0},transformOrigin:null}}},computed:{popperId(){return this.ariaId!=null?this.ariaId:this.randomId},shouldMountContent(){return this.eagerMount||this.isMounted},slotData(){return{popperId:this.popperId,isShown:this.isShown,shouldMountContent:this.shouldMountContent,skipTransition:this.skipTransition,autoHide:this.autoHide,show:this.show,hide:this.hide,handleResize:this.handleResize,onResize:this.onResize,classes:v(m({},this.classes),{popperClass:this.popperClass}),result:this.positioningDisabled?null:this.result}}},watch:m(m({shown:"$_autoShowHide",disabled(e){e?this.dispose():this.init()},async container(){this.isShown&&(this.$_ensureTeleport(),await this.$_computePosition())}},["triggers","positioningDisabled"].reduce((e,t)=>(e[t]="$_refreshListeners",e),{})),["placement","distance","skidding","boundary","strategy","overflowPadding","arrowPadding","preventOverflow","shift","shiftCrossAxis","flip"].reduce((e,t)=>(e[t]="$_computePosition",e),{})),created(){this.$_isDisposed=!0,this.randomId=`popper_${[Math.random(),Date.now()].map(e=>e.toString(36).substring(2,10)).join("_")}`},mounted(){this.init(),this.$_detachPopperNode()},activated(){this.$_autoShowHide()},deactivated(){this.hide()},beforeUnmount(){this.dispose()},methods:{show({event:e=null,skipDelay:t=!1,force:o=!1}={}){(o||!this.disabled)&&(this.$_scheduleShow(e,t),this.$emit("show"),this.$_showFrameLocked=!0,requestAnimationFrame(()=>{this.$_showFrameLocked=!1})),this.$emit("update:shown",!0)},hide({event:e=null,skipDelay:t=!1}={}){this.$_scheduleHide(e,t),this.$emit("hide"),this.$emit("update:shown",!1)},init(){!this.$_isDisposed||(this.$_isDisposed=!1,this.isMounted=!1,this.$_events=[],this.$_preventShow=!1,this.$_referenceNode=this.referenceNode(),this.$_targetNodes=this.targetNodes().filter(e=>e.nodeType===e.ELEMENT_NODE),this.$_popperNode=this.popperNode(),this.$_innerNode=this.$_popperNode.querySelector(".v-popper__inner"),this.$_arrowNode=this.$_popperNode.querySelector(".v-popper__arrow-container"),this.$_swapTargetAttrs("title","data-original-title"),this.$_detachPopperNode(),this.triggers.length&&this.$_addEventListeners(),this.shown&&this.show())},dispose(){this.$_isDisposed||(this.$_isDisposed=!0,this.$_removeEventListeners(),this.hide({skipDelay:!0}),this.$_detachPopperNode(),this.isMounted=!1,this.isShown=!1,this.$_swapTargetAttrs("data-original-title","title"),this.$emit("dispose"))},async onResize(){this.isShown&&(await this.$_computePosition(),this.$emit("resize"))},async $_computePosition(){var s;if(this.$_isDisposed||this.positioningDisabled)return;const e={strategy:this.strategy,middleware:[]};(this.distance||this.skidding)&&e.middleware.push(d.offset({mainAxis:this.distance,crossAxis:this.skidding}));const t=this.placement.startsWith("auto");t?e.middleware.push(d.autoPlacement({alignment:(s=this.placement.split("-")[1])!=null?s:""})):e.placement=this.placement,this.preventOverflow&&(this.shift&&e.middleware.push(d.shift({padding:this.overflowPadding,boundary:this.boundary,crossAxis:this.shiftCrossAxis})),!t&&this.flip&&e.middleware.push(d.flip({padding:this.overflowPadding,boundary:this.boundary}))),e.middleware.push(d.arrow({element:this.$_arrowNode,padding:this.arrowPadding})),this.arrowOverflow&&e.middleware.push({name:"arrowOverflow",fn:({placement:n,rects:p,middlewareData:h})=>{let l;const{centerOffset:f}=h.arrow;return n.startsWith("top")||n.startsWith("bottom")?l=Math.abs(f)>p.reference.width/2:l=Math.abs(f)>p.reference.height/2,{data:{overflow:l}}}}),this.autoMinSize&&e.middleware.push({name:"autoMinSize",fn:({rects:n,placement:p,middlewareData:h})=>{var c;if((c=h.autoMinSize)==null?void 0:c.skip)return{};let l,f;return p.startsWith("top")||p.startsWith("bottom")?l=n.reference.width:f=n.reference.height,this.$_innerNode.style.minWidth=l!=null?`${l}px`:null,this.$_innerNode.style.minHeight=f!=null?`${f}px`:null,{data:{skip:!0},reset:{rects:!0}}}}),this.autoMaxSize&&(this.$_innerNode.style.maxWidth=null,this.$_innerNode.style.maxHeight=null,e.middleware.push(d.size({boundary:this.boundary,padding:this.overflowPadding,apply:({width:n,height:p})=>{this.$_innerNode.style.maxWidth=n!=null?`${n}px`:null,this.$_innerNode.style.maxHeight=p!=null?`${p}px`:null}})));const o=await d.computePosition(this.$_referenceNode,this.$_popperNode,e);Object.assign(this.result,{x:o.x,y:o.y,placement:o.placement,strategy:o.strategy,arrow:m(m({},o.middlewareData.arrow),o.middlewareData.arrowOverflow)})},$_scheduleShow(e=null,t=!1){if(this.$_hideInProgress=!1,clearTimeout(this.$_scheduleTimer),w&&this.instantMove&&w.instantMove){w.$_applyHide(!0),this.$_applyShow(!0);return}t?this.$_applyShow():this.$_scheduleTimer=setTimeout(this.$_applyShow.bind(this),this.$_computeDelay("show"))},$_scheduleHide(e=null,t=!1){this.$_hideInProgress=!0,clearTimeout(this.$_scheduleTimer),this.isShown&&(w=this),t?this.$_applyHide():this.$_scheduleTimer=setTimeout(this.$_applyHide.bind(this),this.$_computeDelay("hide"))},$_computeDelay(e){const t=this.delay;return parseInt(t&&t[e]||t||0)},async $_applyShow(e=!1){clearTimeout(this.$_disposeTimer),clearTimeout(this.$_scheduleTimer),this.skipTransition=e,!this.isShown&&(this.$_ensureTeleport(),await z(),await this.$_computePosition(),await this.$_applyShowEffect())},async $_applyShowEffect(){if(this.$_hideInProgress)return;if(this.computeTransformOrigin){const t=this.$_referenceNode.getBoundingClientRect(),o=this.$_popperNode.querySelector(".v-popper__wrapper"),s=o.parentNode.getBoundingClientRect(),n=t.x+t.width/2-(s.left+o.offsetLeft),p=t.y+t.height/2-(s.top+o.offsetTop);this.result.transformOrigin=`${n}px ${p}px`}this.isShown=!0,this.$_applyAttrsToTarget({"aria-describedby":this.popperId,"data-popper-shown":""});const e=this.showGroup;if(e){let t;for(let o=0;o<u.length;o++)t=u[o],t.showGroup!==e&&(t.hide(),t.$emit("close-group"))}u.push(this),this.$emit("apply-show"),this.classes.showFrom=!0,this.classes.showTo=!1,this.classes.hideFrom=!1,this.classes.hideTo=!1,await z(),this.classes.showFrom=!1,this.classes.showTo=!0},async $_applyHide(e=!1){if(clearTimeout(this.$_scheduleTimer),!this.isShown)return;this.skipTransition=e,_e(u,this),w===this&&(w=null),this.isShown=!1,this.$_applyAttrsToTarget({"aria-describedby":void 0,"data-popper-shown":void 0}),clearTimeout(this.$_disposeTimer);const t=g(this.theme,"disposeTimeout");t!==null&&(this.$_disposeTimer=setTimeout(()=>{this.$_popperNode&&(this.$_detachPopperNode(),this.isMounted=!1)},t)),this.$emit("apply-hide"),this.classes.showFrom=!1,this.classes.showTo=!1,this.classes.hideFrom=!0,this.classes.hideTo=!1,await z(),this.classes.hideFrom=!1,this.classes.hideTo=!0},$_autoShowHide(){this.shown?this.show():this.hide()},$_ensureTeleport(){if(this.$_isDisposed)return;let e=this.container;if(typeof e=="string"?e=window.document.querySelector(e):e===!1&&(e=this.$_targetNodes[0].parentNode),!e)throw new Error("No container for popover: "+this.container);e.appendChild(this.$_popperNode),this.isMounted=!0},$_addEventListeners(){const e=(n,p,h)=>{this.$_events.push({targetNodes:n,eventType:p,handler:h}),n.forEach(l=>l.addEventListener(p,h,$?{passive:!0}:void 0))},t=(n,p,h,l,f)=>{let c=h;l!=null&&(c=typeof l=="function"?l(c):l),c.forEach(P=>{const y=p[P];y&&e(n,y,f)})},o=n=>{this.isShown&&!this.$_hideInProgress||(n.usedByTooltip=!0,!this.$_preventShow&&this.show({event:n}))};t(this.$_targetNodes,A,this.triggers,this.showTriggers,o),t([this.$_popperNode],A,this.popperTriggers,this.popperShowTriggers,o);const s=n=>{n.usedByTooltip||this.hide({event:n})};t(this.$_targetNodes,O,this.triggers,this.hideTriggers,s),t([this.$_popperNode],O,this.popperTriggers,this.popperHideTriggers,s),this.positioningDisabled||e([...d.getScrollParents(this.$_referenceNode),...d.getScrollParents(this.$_popperNode)],"scroll",()=>{this.$_computePosition()})},$_removeEventListeners(){this.$_events.forEach(({targetNodes:e,eventType:t,handler:o})=>{e.forEach(s=>s.removeEventListener(t,o))}),this.$_events=[]},$_refreshListeners(){this.$_isDisposed||(this.$_removeEventListeners(),this.$_addEventListeners())},$_handleGlobalClose(e,t=!1){this.$_showFrameLocked||(this.hide({event:e}),e.closePopover?this.$emit("close-directive"):this.$emit("auto-hide"),t&&(this.$_preventShow=!0,setTimeout(()=>{this.$_preventShow=!1},300)))},$_detachPopperNode(){this.$_popperNode.parentNode&&this.$_popperNode.parentNode.removeChild(this.$_popperNode)},$_swapTargetAttrs(e,t){for(const o of this.$_targetNodes){const s=o.getAttribute(e);s&&(o.removeAttribute(e),o.setAttribute(t,s))}},$_applyAttrsToTarget(e){for(const t of this.$_targetNodes)for(const o in e){const s=e[o];s==null?t.removeAttribute(o):t.setAttribute(o,s)}}},render(){return this.$slots.default(this.slotData)}});typeof document!="undefined"&&typeof window!="undefined"&&(Y?(document.addEventListener("touchstart",J,$?{passive:!0,capture:!0}:!0),document.addEventListener("touchend",$e,$?{passive:!0,capture:!0}:!0)):(window.addEventListener("mousedown",J,!0),window.addEventListener("click",ge,!0)),window.addEventListener("resize",we));function J(e){for(let t=0;t<u.length;t++){const o=u[t],s=o.popperNode();o.$_mouseDownContains=s.contains(e.target)}}function ge(e){Q(e)}function $e(e){Q(e,!0)}function Q(e,t=!1){for(let o=0;o<u.length;o++){const s=u[o],n=s.popperNode(),p=s.$_mouseDownContains||n.contains(e.target);requestAnimationFrame(()=>{(e.closeAllPopover||e.closePopover&&p||s.autoHide&&!p)&&s.$_handleGlobalClose(e,t)})}}function we(e){for(let t=0;t<u.length;t++)u[t].$_computePosition(e)}function ye(){for(let e=0;e<u.length;e++)u[e].hide()}function ve(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var o=e.indexOf("Trident/");if(o>0){var s=e.indexOf("rv:");return parseInt(e.substring(s+3,e.indexOf(".",s)),10)}var n=e.indexOf("Edge/");return n>0?parseInt(e.substring(n+5,e.indexOf(".",n)),10):-1}let b;function H(){H.init||(H.init=!0,b=ve()!==-1)}var S={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){H(),i.nextTick(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",b&&this.$el.appendChild(e),e.data="about:blank",b||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!b&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const Te=i.withScopeId("data-v-b329ee4c");i.pushScopeId("data-v-b329ee4c");const Pe={class:"resize-observer",tabindex:"-1"};i.popScopeId();const Ce=Te((e,t,o,s,n,p)=>(i.openBlock(),i.createBlock("div",Pe)));S.render=Ce,S.__scopeId="data-v-b329ee4c",S.__file="src/components/ResizeObserver.vue";var D={computed:{themeClass(){return me(this.theme)}}},nt="",B=(e,t)=>{const o=e.__vccOpts||e;for(const[s,n]of t)o[s]=n;return o};const be=i.defineComponent({name:"VPopperContent",components:{ResizeObserver:S},mixins:[D],props:{popperId:String,theme:String,shown:Boolean,mounted:Boolean,skipTransition:Boolean,autoHide:Boolean,handleResize:Boolean,classes:Object,result:Object},emits:["hide","resize"],methods:{toPx(e){return e!=null&&!isNaN(e)?`${e}px`:null}}}),Se=["id","aria-hidden","tabindex","data-popper-placement"],Ne={ref:"inner",class:"v-popper__inner"},Ee=[i.createElementVNode("div",{class:"v-popper__arrow-outer"},null,-1),i.createElementVNode("div",{class:"v-popper__arrow-inner"},null,-1)];function Ae(e,t,o,s,n,p){const h=i.resolveComponent("ResizeObserver");return i.openBlock(),i.createElementBlock("div",{id:e.popperId,ref:"popover",class:i.normalizeClass(["v-popper__popper",[e.themeClass,e.classes.popperClass,{"v-popper__popper--shown":e.shown,"v-popper__popper--hidden":!e.shown,"v-popper__popper--show-from":e.classes.showFrom,"v-popper__popper--show-to":e.classes.showTo,"v-popper__popper--hide-from":e.classes.hideFrom,"v-popper__popper--hide-to":e.classes.hideTo,"v-popper__popper--skip-transition":e.skipTransition,"v-popper__popper--arrow-overflow":e.result&&e.result.arrow.overflow,"v-popper__popper--no-positioning":!e.result}]]),style:i.normalizeStyle(e.result?{position:e.result.strategy,transform:`translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`}:void 0),"aria-hidden":e.shown?"false":"true",tabindex:e.autoHide?0:void 0,"data-popper-placement":e.result?e.result.placement:void 0,onKeyup:t[2]||(t[2]=i.withKeys(l=>e.autoHide&&e.$emit("hide"),["esc"]))},[i.createElementVNode("div",{class:"v-popper__backdrop",onClick:t[0]||(t[0]=l=>e.autoHide&&e.$emit("hide"))}),i.createElementVNode("div",{class:"v-popper__wrapper",style:i.normalizeStyle(e.result?{transformOrigin:e.result.transformOrigin}:void 0)},[i.createElementVNode("div",Ne,[e.mounted?(i.openBlock(),i.createElementBlock(i.Fragment,{key:0},[i.createElementVNode("div",null,[i.renderSlot(e.$slots,"default")]),e.handleResize?(i.openBlock(),i.createBlock(h,{key:0,onNotify:t[1]||(t[1]=l=>e.$emit("resize",l))})):i.createCommentVNode("",!0)],64)):i.createCommentVNode("",!0)],512),i.createElementVNode("div",{ref:"arrow",class:"v-popper__arrow-container",style:i.normalizeStyle(e.result?{left:e.toPx(e.result.arrow.x),top:e.toPx(e.result.arrow.y)}:void 0)},Ee,4)],4)],46,Se)}var L=B(be,[["render",Ae]]),I={methods:{show(...e){return this.$refs.popper.show(...e)},hide(...e){return this.$refs.popper.hide(...e)},dispose(...e){return this.$refs.popper.dispose(...e)},onResize(...e){return this.$refs.popper.onResize(...e)}}},at="";const Oe=i.defineComponent({name:"VPopperWrapper",components:{Popper:k(),PopperContent:L},mixins:[I,D],inheritAttrs:!1,props:{theme:{type:String,default:null}},computed:{finalTheme(){var e;return(e=this.theme)!=null?e:this.$options.vPopperTheme},popperAttrs(){const e=m({},this.$attrs);return delete e.class,delete e.style,e}},methods:{getTargetNodes(){return Array.from(this.$refs.reference.children).filter(e=>e!==this.$refs.popperContent.$el)}}});function ze(e,t,o,s,n,p){const h=i.resolveComponent("PopperContent"),l=i.resolveComponent("Popper");return i.openBlock(),i.createBlock(l,i.mergeProps({ref:"popper"},e.popperAttrs,{theme:e.finalTheme,"target-nodes":e.getTargetNodes,"reference-node":()=>e.$refs.reference,"popper-node":()=>e.$refs.popperContent.$el}),{default:i.withCtx(({popperId:f,isShown:c,shouldMountContent:P,skipTransition:y,autoHide:q,show:G,hide:C,handleResize:U,onResize:x,classes:K,result:Qe})=>[i.createElementVNode("div",{ref:"reference",class:i.normalizeClass(["v-popper",[e.$attrs.class,e.themeClass,{"v-popper--shown":c}]]),style:i.normalizeStyle(e.$attrs.style)},[i.renderSlot(e.$slots,"default",{shown:c,show:G,hide:C}),i.createVNode(h,{ref:"popperContent","popper-id":f,theme:e.finalTheme,shown:c,mounted:P,"skip-transition":y,"auto-hide":q,"handle-resize":U,classes:K,result:Qe,onHide:C,onResize:x},{default:i.withCtx(()=>[i.renderSlot(e.$slots,"popper",{shown:c,hide:C})]),_:2},1032,["popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])],6)]),_:3},16,["theme","target-nodes","reference-node","popper-node"])}var N=B(Oe,[["render",ze]]),lt="";const V=i.defineComponent(v(m({},N),{name:"VDropdown",vPopperTheme:"dropdown"})),R=i.defineComponent(v(m({},N),{name:"VMenu",vPopperTheme:"menu"}));var dt="";const F=i.defineComponent(v(m({},N),{name:"VTooltip",vPopperTheme:"tooltip"})),Me=i.defineComponent({name:"VTooltipDirective",components:{Popper:k(),PopperContent:L},mixins:[I],inheritAttrs:!1,props:{theme:{type:String,default:"tooltip"},html:{type:Boolean,default:e=>g(e.theme,"html")},content:{type:[String,Number,Function],default:null},loadingContent:{type:String,default:e=>g(e.theme,"loadingContent")}},data(){return{asyncContent:null}},computed:{isContentAsync(){return typeof this.content=="function"},loading(){return this.isContentAsync&&this.asyncContent==null},finalContent(){return this.isContentAsync?this.loading?this.loadingContent:this.asyncContent:this.content}},watch:{content:{handler(){this.fetchContent(!0)},immediate:!0},async finalContent(){await this.$nextTick(),this.$refs.popper.onResize()}},created(){this.$_fetchId=0},methods:{fetchContent(e){if(typeof this.content=="function"&&this.$_isShown&&(e||!this.$_loading&&this.asyncContent==null)){this.asyncContent=null,this.$_loading=!0;const t=++this.$_fetchId,o=this.content(this);o.then?o.then(s=>this.onResult(t,s)):this.onResult(t,o)}},onResult(e,t){e===this.$_fetchId&&(this.$_loading=!1,this.asyncContent=t)},onShow(){this.$_isShown=!0,this.fetchContent()},onHide(){this.$_isShown=!1}}}),ke=["innerHTML"],He=["textContent"];function De(e,t,o,s,n,p){const h=i.resolveComponent("PopperContent"),l=i.resolveComponent("Popper");return i.openBlock(),i.createBlock(l,i.mergeProps({ref:"popper"},e.$attrs,{theme:e.theme,"popper-node":()=>e.$refs.popperContent.$el,onApplyShow:e.onShow,onApplyHide:e.onHide}),{default:i.withCtx(({popperId:f,isShown:c,shouldMountContent:P,skipTransition:y,autoHide:q,hide:G,handleResize:C,onResize:U,classes:x,result:K})=>[i.createVNode(h,{ref:"popperContent",class:i.normalizeClass({"v-popper--tooltip-loading":e.loading}),"popper-id":f,theme:e.theme,shown:c,mounted:P,"skip-transition":y,"auto-hide":q,"handle-resize":C,classes:x,result:K,onHide:G,onResize:U},{default:i.withCtx(()=>[e.html?(i.openBlock(),i.createElementBlock("div",{key:0,innerHTML:e.finalContent},null,8,ke)):(i.openBlock(),i.createElementBlock("div",{key:1,textContent:i.toDisplayString(e.finalContent)},null,8,He))]),_:2},1032,["class","popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:1},16,["theme","popper-node","onApplyShow","onApplyHide"])}var Z=B(Me,[["render",De]]);const ee="v-popper--has-tooltip";function Be(e,t){let o=e.placement;if(!o&&t)for(const s of E)t[s]&&(o=s);return o||(o=g(e.theme||"tooltip","placement")),o}function te(e,t,o){let s;const n=typeof t;return n==="string"?s={content:t}:t&&n==="object"?s=t:s={content:!1},s.placement=Be(s,o),s.targetNodes=()=>[e],s.referenceNode=()=>e,s}let j,T,Le=0;function Ie(){if(j)return;T=i.ref([]),j=i.createApp({name:"VTooltipDirectiveApp",compatConfig:{RENDER_FUNCTION:!1},setup(){return{directives:T}},render(){return this.directives.map(t=>i.h(Z,v(m({},t.options),{shown:t.shown.value||t.options.shown,key:t.id})))},devtools:{hide:!0}});const e=document.createElement("div");document.body.appendChild(e),j.mount(e)}function oe(e,t,o){Ie();const s=i.ref(te(e,t,o)),n=i.ref(!1),p={id:Le++,options:s,shown:n};return T.value.push(p),e.classList&&e.classList.add(ee),e.$_popper={options:s,item:p,show(){n.value=!0},hide(){n.value=!1}}}function W(e){if(e.$_popper){const t=T.value.indexOf(e.$_popper.item);t!==-1&&T.value.splice(t,1),delete e.$_popper,delete e.$_popperOldShown,delete e.$_popperMountTarget}e.classList&&e.classList.remove(ee)}function ie(e,{value:t,oldValue:o,modifiers:s}){const n=te(e,t,s);if(!n.content||g(n.theme||"tooltip","disabled"))W(e);else{let p;e.$_popper?(p=e.$_popper,p.options.value=n):p=oe(e,t,s),typeof t.shown!="undefined"&&t.shown!==e.$_popperOldShown&&(e.$_popperOldShown=t.shown,t.shown?p.show():p.hide())}}var se={beforeMount:ie,updated:ie,beforeUnmount(e){W(e)}};function ne(e){e.addEventListener("click",pe),e.addEventListener("touchstart",ae,$?{passive:!0}:!1)}function re(e){e.removeEventListener("click",pe),e.removeEventListener("touchstart",ae),e.removeEventListener("touchend",le),e.removeEventListener("touchcancel",de)}function pe(e){const t=e.currentTarget;e.closePopover=!t.$_vclosepopover_touch,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}function ae(e){if(e.changedTouches.length===1){const t=e.currentTarget;t.$_vclosepopover_touch=!0;const o=e.changedTouches[0];t.$_vclosepopover_touchPoint=o,t.addEventListener("touchend",le),t.addEventListener("touchcancel",de)}}function le(e){const t=e.currentTarget;if(t.$_vclosepopover_touch=!1,e.changedTouches.length===1){const o=e.changedTouches[0],s=t.$_vclosepopover_touchPoint;e.closePopover=Math.abs(o.screenY-s.screenY)<20&&Math.abs(o.screenX-s.screenX)<20,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}}function de(e){const t=e.currentTarget;t.$_vclosepopover_touch=!1}var he={beforeMount(e,{value:t,modifiers:o}){e.$_closePopoverModifiers=o,(typeof t=="undefined"||t)&&ne(e)},updated(e,{value:t,oldValue:o,modifiers:s}){e.$_closePopoverModifiers=s,t!==o&&(typeof t=="undefined"||t?ne(e):re(e))},beforeUnmount(e){re(e)}};const Ve=_,Re=se,Fe=he,je=V,We=R,qe=k,Ge=L,Ue=I,xe=N,Ke=D,Xe=F,Ye=Z;function ce(e,t={}){e.$_vTooltipInstalled||(e.$_vTooltipInstalled=!0,X(_,t),e.directive("tooltip",se),e.directive("close-popper",he),e.component("v-tooltip",F),e.component("VTooltip",F),e.component("v-dropdown",V),e.component("VDropdown",V),e.component("v-menu",R),e.component("VMenu",R))}const Je={version:"2.0.0-beta.6",install:ce,options:_};r.Dropdown=je,r.HIDE_EVENT_MAP=O,r.Menu=We,r.Popper=qe,r.PopperContent=Ge,r.PopperMethods=Ue,r.PopperWrapper=xe,r.SHOW_EVENT_MAP=A,r.ThemeClass=Ke,r.Tooltip=Xe,r.TooltipDirective=Ye,r.VClosePopper=Fe,r.VTooltip=Re,r.createTooltip=oe,r.default=Je,r.destroyTooltip=W,r.hideAllPoppers=ye,r.install=ce,r.options=Ve,r.placements=E,Object.defineProperty(r,"__esModule",{value:!0}),r[Symbol.toStringTag]="Module"});

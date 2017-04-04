/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
;jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin(2*(b*e-f)*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=.3*e*1.5),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-.5*h*Math.pow(2,10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?7.5625*d*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});
;(function($){function subscribeEmail_project2(a){var b=$("#phone_project2").val();return""==b?void err_re_proj2("* Vui lòng nhập số điện thoại"):""==b||validatePhone(b)?void(requestSent_eproject2||(requestSent_eproject2=!0,$(".form-dky-xemcanho").submit())):void err_re_proj2("* Số điện thoại không đúng định dạng")}
function err_re_proj2(a){0==jQuery(".deail_reg_canhomau_right_form #err_note").length?$(".deail_reg_canhomau_right_form").append('<div class="c"></div><div style="text-align:left;margin-top:5px" id="err_note">'+a+"</div>"):jQuery(".deail_reg_canhomau_right_form #err_note").html(a),$("#phone_project2").focus()}
function subscribeEmail_project(a){var b=$("#phone_project").val();return""==b?void err_re_proj("* Vui lòng nhập số điện thoại"):""==b||validatePhone(b)?void(requestSent_eproject||(requestSent_eproject=!0,$(".form-dky-thongbaolich").submit())):void err_re_proj("* Số điện thoại không đúng định dạng")}
function err_re_proj(a){0==jQuery(".v2_pd_dc_rg_boxLich_from #err_note").length?$(".v2_pd_dc_rg_boxLich_from").append('<div class="c"></div><div style="text-align:left;margin-top:10px" id="err_note">'+a+"</div>"):jQuery(".v2_pd_dc_rg_boxLich_from #err_note").html(a),$("#phone_project").focus()}
function subscribe_form_new(){var a=$("#nhapten").val(),b=$("#nhapsdt").val(),c=$("#nhapmail").val();return""==a?($("#err_note").css({display:"block"}),void err_re_proj1("* Vui lòng nhập họ tên")):""==b?($("#err_note").css({display:"block"}),err_re_projphone("* Vui lòng nhập số điện thoại"),void $(".v2_f_boxrightContent_form").css({"padding-bottom":"0"})):""==b||validatePhone(b)?""==c?void err_re_proj3("* Vui lòng nhập email"):""==c||validateEmail(c)?void(requestSent_fthl1||(requestSent_fthl1=!0,$(".form-dungbolo").submit())):(err_re_proj3("* Vui lòng nhập email hợp lệ"),void $(".v2_f_boxrightContent_form").css({"padding-bottom":"0"})):($("#err_note").css({display:"block"}),err_re_projphone("* Số điện thoại không đúng định dạng"),void $(".v2_f_boxrightContent_form").css({"padding-bottom":"0"}))}
function err_re_proj1(a){0==jQuery(".form-new-1 #err_note").length?$(".form-new-1").append('<div class="c"></div><div style="text-align:left;margin-top:10px;font-size: 12px;" id="err_note">'+a+"</div>"):jQuery(".form-new-1 #err_note").html(a),$("#link-form-new").focus()}
function err_re_proj3(a){0==jQuery(".form-new-3 #err_note").length?$(".form-new-3").append('<div class="c"></div><div style="text-align:left;margin-top:10px;font-size: 12px;" id="err_note">'+a+"</div>"):jQuery(".form-new-3 #err_note").html(a),$("#link-form-new").focus()}
function err_re_projphone(a){0==jQuery(".form-new-2 #err_note").length?$(".form-new-2").append('<div class="c"></div><div style="text-align:left;margin-top:10px;font-size: 12px;" id="err_note">'+a+"</div>"):jQuery(".form-new-2 #err_note").html(a),$("#link-form-new").focus()}
function subscribeemail2(){var a=$("#emal_baogia").val();return""==a?void err_re_proj4("* Vui lòng nhập email"):""==a||validateEmail(a)?requestSent_email?void 0:(requestSent_email=!0,$(".step_input1").removeClass("active"),$(".step_input2").addClass("active"),$(".step_footer2").addClass("active"),$(".step_footer1").removeClass("active"),$(".step_lbl1").stop().animate({top:-22},500).removeClass("active"),$(".step_lbl2").stop().animate({top:0},500).addClass("active"),$("#err_note").css({display:"none"}),!1):void err_re_proj4("* Vui lòng nhập email hợp lệ")}
function err_re_proj4(a){0==jQuery(".step_action_input #err_note").length?$(".step_action_input").append('<div class="c"></div><div style="text-align:left;margin-top:10px" id="err_note">'+a+"</div>"):jQuery(".step_action_input #err_note").html(a),$("#email-next").focus()}
function subscribesdt2(){var a=$("#phone_baogia").val();return""==a?($("#err_note").css({display:"block"}),void err_re_proj5("* Vui lòng nhập số điện thoại")):""==a||validatePhone(a)?void(requestSent_sdt||(requestSent_sdt=!0,$(".form-dky-thongbaolich").submit())):($("#err_note").css({display:"block"}),void err_re_proj5("* Số điện thoại không đúng định dạng"))}
function err_re_proj5(a){0==jQuery(".step_action_input #err_note").length?$(".step_action_input").append('<div class="c"></div><div style="text-align:left;margin-top:10px" id="err_note">'+a+"</div>"):jQuery(".step_action_input #err_note").html(a),$("#btn_phone_baogia").focus()}
function subscribe_downow(){var a=$("#name-downow").val(),b=$("#phone-downow").val(),c=$("#email-downow").val();return""==a?($("#err_note").css({display:"block"}),void err_re_proj8("* Vui lòng nhập họ tên")):""==c?($("#err_note").css({display:"block"}),void err_re_proj6("* Vui lòng nhập email")):""==c||validateEmail(c)?""==b?($("#err_note").css({display:"block"}),void err_re_proj7("* Vui lòng nhập số điện thoại")):""==b||validatePhone(b)?void(request_downow||(request_downow=!0,$(".form-download1").submit())):($("#err_note").css({display:"block"}),void err_re_proj7("* Số điện thoại không đúng định dạng")):($("#err_note").css({display:"block"}),void err_re_proj6("* Vui lòng nhập email hợp lệ"))}
function err_re_proj6(a){0==jQuery(".dowload-last-input2 #err_note").length?$(".dowload-last-input2").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".dowload-last-input2 #err_note").html(a),$("#link-dow-now").focus()}
function err_re_proj7(a){0==jQuery(".dowload-last-input3 #err_note").length?$(".dowload-last-input3").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".dowload-last-input3 #err_note").html(a),$("#link-dow-now").focus()}
function err_re_proj8(a){0==jQuery(".dowload-last-input1 #err_note").length?$(".dowload-last-input1").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".dowload-last-input1 #err_note").html(a),$("#link-dow-now").focus()}
function subscribe_downow_modal(){var a=$("#name-downow-modal").val(),b=$("#phone-downow-modal").val();return""==a?($("#err_note").css({display:"block"}),void err_re_proj9("* Vui lòng nhập họ tên")):""==b?($("#err_note").css({display:"block"}),void err_re_proj11("* Vui lòng nhập số điện thoại")):""==b||validatePhone(b)?void(request_downow||(request_downow=!0,$(".form-download2").submit())):($("#err_note").css({display:"block"}),void err_re_proj11("* Số điện thoại không đúng định dạng"))}
function err_re_proj10(a){0==jQuery(".dowload-last-input2-modal #err_note").length?$(".dowload-last-input2-modal").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".dowload-last-input2-modal #err_note").html(a),$("#link-dow-now-modal").focus()}
function err_re_proj11(a){0==jQuery(".dowload-last-input3-modal #err_note").length?$(".dowload-last-input3-modal").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".dowload-last-input3-modal #err_note").html(a),$("#link-dow-now-modal").focus()}
function err_re_proj9(a){0==jQuery(".dowload-last-input1-modal #err_note").length?$(".dowload-last-input1-modal").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".dowload-last-input1-modal #err_note").html(a),$("#link-dow-now-modal").focus()}
function validatePhone(a){var b=/^(016([0-9]{1})|012([0-9]{1})|09[0-9]|08[0-9])(\d{7})$/i;return!!b.test(a)}
function validateEmail(a){var b=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;return!!b.test(a)}
function modal_red(){var a=$("#name-modal-red").val(),b=$("#phone-modal-red").val(),c=$("#email-modal-red").val();return""==a?($("#err_note").css({display:"block"}),void err_red1("* Vui lòng nhập họ tên")):""==c?($("#err_note").css({display:"block"}),void err_red2("* Vui lòng nhập email")):""==c||validateEmail(c)?""==b?($("#err_note").css({display:"block"}),void err_red3("* Vui lòng nhập số điện thoại")):""==b||validatePhone(b)?void(request_red||(request_red=!0,$(".form-tlduan-red").submit())):($("#err_note").css({display:"block"}),void err_red3("* Số điện thoại không đúng định dạng")):($("#err_note").css({display:"block"}),void err_red2("* Vui lòng nhập email hợp lệ"))}
function err_red1(a){0==jQuery(".input-red1 #err_note").length?$(".input-red1").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".input-red1 #err_note").html(a),$("#link-modal-red").focus()}
function err_red2(a){0==jQuery(".input-red2 #err_note").length?$(".input-red2").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".input-red2 #err_note").html(a),$("#link-modal-red").focus()}
function err_red3(a){0==jQuery(".input-red3 #err_note").length?$(".input-red3").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".input-red3 #err_note").html(a),$("#link-modal-red").focus()}
function modal_blue(){var a=$("#name-modal-blue").val(),b=$("#phone-modal-blue").val(),c=$("#email-modal-blue").val();return""==a?($("#err_note").css({display:"block"}),void err_blue1("* Vui lòng nhập họ tên")):""==c?($("#err_note").css({display:"block"}),void err_blue2("* Vui lòng nhập email")):""==c||validateEmail(c)?""==b?($("#err_note").css({display:"block"}),void err_blue3("* Vui lòng nhập số điện thoại")):""==b||validatePhone(b)?void(request_blue||(request_blue=!0,$(".form-banggia-blue").submit())):($("#err_note").css({display:"block"}),void err_blue3("* Số điện thoại không đúng định dạng")):($("#err_note").css({display:"block"}),void err_blue2("* Vui lòng nhập email hợp lệ"))}
function err_blue1(a){0==jQuery(".input-blue1 #err_note").length?$(".input-blue1").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".input-blue1 #err_note").html(a),$("#link-modal-blue").focus()}
function err_blue2(a){0==jQuery(".input-blue2 #err_note").length?$(".input-blue2").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".input-blue2 #err_note").html(a),$("#link-modal-blue").focus()}
function err_blue3(a){0==jQuery(".input-blue3 #err_note").length?$(".input-blue3").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".input-blue3 #err_note").html(a),$("#link-modal-blue").focus()}
function modal_vag(){var a=$("#name-modal-yellow").val(),b=$("#phone-modal-yellow").val();return""==a?($("#err_note").css({display:"block"}),void err_yellow1("* Vui lòng nhập họ tên")):""==b?($("#err_note").css({display:"block"}),void err_yellow2("* Vui lòng nhập số điện thoại")):""==b||validatePhone(b)?void(request_yellow||(request_yellow=!0,$(".form-lichmoban-yellow").submit())):($("#err_note").css({display:"block"}),void err_yellow2("* Số điện thoại không đúng định dạng"))}
function err_yellow1(a){0==jQuery(".input-vag1 #err_note").length?$(".input-vag1").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".input-vag1 #err_note").html(a),$("#link-modal-yellow").focus()}
function err_yellow2(a){0==jQuery(".input-vag2 #err_note").length?$(".input-vag2").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">'+a+"</div>"):jQuery(".input-vag2 #err_note").html(a),$("#link-modal-yellow").focus()}
jQuery(document).ready(function(){$(".nav-header").affix({offset:{top:$(".banner").outerHeight(!0)}})}),jQuery("document").ready(function(){$("#btn_startdownloadtailieu").click(function(){return $(".step_down0").removeClass("active"),$(".step_down1").addClass("active"),!1}),$(".btn-res1").on("click",function(a){var b=$(a.target);$(b.attr("href")).length>0&&b.is("a.btn-res1")&&($("html, body").stop().animate({scrollTop:$(b.attr("href")).offset().top-0},1500,"easeInOutExpo"),a.preventDefault())})}),jQuery(document).ready(function(){var a=220,b=500;$(window).scroll(function(){$(this).scrollTop()>a?$(".back-to-top").fadeIn(b):$(".back-to-top").fadeOut(b)}),$(".back-to-top").click(function(a){return a.preventDefault(),$("html, body").animate({scrollTop:0},b),!1}),$(".search-click").click(function(a){var b=$(".search");""!=$(".input-search").val()&&b.hasClass("active")?CheckValue():(b.toggleClass("active"),setTimeout(function(){$(".input-search").focus()},500))})}),jQuery(document).click(function(a){var b=$(".search");$(".input-search").show(),b.is(a.target)||0!==b.has(a.target).length||($(".search").removeClass("active"),$(".input-search").css({width:"0",padding:"0",border:"none"}))});var requestSent_eproject2=!1,requestSent_eproject=!1,requestSent_fthl1=!1,requestSent_email=!1,requestSent_sdt=!1,request_downow=!1;jQuery(document).ready(function(){$(window).width()<=992&&($("a.btn-res1").removeAttr("href"),$("a.btn-res1").each(function(){this.href+="#f_boxright-link"}))});var request_red=!1,request_blue=!1,request_yellow=!1;jQuery(document).ready(function(){$(window).width()>=992&&$("#dowload-last-link").scrollToFixed({marginTop:40,zIndex:90,limit:function(){var a=0;return $(".section3").length&&(a=$(".section3").offset().top-$(this).outerHeight(!0)-10),a},preFixed:function(){},postFixed:function(){}})});var requestSent_eprojectttt=false;function submit_header(){var phone=$('#phone-header').val();if(phone==''){err_re_projjjj('* Vui lòng nhập số điện thoại');return;}
if(phone!=''&&!validatePhone(phone)){err_re_projjjj('* Số điện thoại không đúng định dạng');return;}
if(!requestSent_eprojectttt){requestSent_eprojectttt=true;$("#form-header").submit();}}
function err_re_projjjj(sms){if(jQuery('.input-gr-sdt #err_note').length==0){$('.input-gr-sdt').append('<div class="c"></div><div style="text-align:left ;margin-bottom:10px;color: red;" id="err_note">'+sms+'</div>');}else{jQuery('.input-gr-sdt #err_note').html(sms);}
$('#phone_prheader').focus();}})(jQuery);
;!function(a) {
    a.isScrollToFixed = function(b) {
        return !!a(b).data("ScrollToFixed");
    };
    a.ScrollToFixed = function(b, c) {
        var d = this;
        d.$el = a(b);
        d.el = b;
        d.$el.data("ScrollToFixed", d);
        var e = false;
        var f = d.$el;
        var g;
        var h;
        var i;
        var j;
        var k = 0;
        var l = 0;
        var m = -1;
        var n = -1;
        var o = null;
        var p;
        var q;
        function r() {
            f.trigger("preUnfixed.ScrollToFixed");
            y();
            f.trigger("unfixed.ScrollToFixed");
            n = -1;
            k = f.offset().top;
            l = f.offset().left;
            if (d.options.offsets) l += f.offset().left - f.position().left;
            if (m == -1) m = l;
            g = f.css("position");
            e = true;
            if (d.options.bottom != -1) {
                f.trigger("preFixed.ScrollToFixed");
                w();
                f.trigger("fixed.ScrollToFixed");
            }
        }
        function s() {
            var a = d.options.limit;
            if (!a) return 0;
            if ("function" === typeof a) return a.apply(f);
            return a;
        }
        function t() {
            return "fixed" === g;
        }
        function u() {
            return "absolute" === g;
        }
        function v() {
            return !(t() || u());
        }
        function w() {
            if (!t()) {
                o.css({
                    display: f.css("display"),
                    width: f.outerWidth(true),
                    height: f.outerHeight(true),
                    "float": f.css("float")
                });
                cssOptions = {
                    "z-index": d.options.zIndex,
                    position: "fixed",
                    top: d.options.bottom == -1 ? A() : "",
                    bottom: d.options.bottom == -1 ? "" : d.options.bottom,
                    "margin-left": "0px"
                };
                if (!d.options.dontSetWidth) cssOptions.width = f.width();
                f.css(cssOptions);
                f.addClass(d.options.baseClassName);
                if (d.options.className) f.addClass(d.options.className);
                g = "fixed";
            }
        }
        function x() {
            var a = s();
            var b = l;
            if (d.options.removeOffsets) {
                b = "";
                a -= k;
            }
            cssOptions = {
                position: "absolute",
                top: 0,
                left: 0,
                "margin-left": "0px",
                bottom: ""
            };
            if (!d.options.dontSetWidth) cssOptions.width = f.width();
            f.css(cssOptions);
            g = "absolute";
        }
        function y() {
            if (!v()) {
                n = -1;
                o.css("display", "none");
                f.css({
                    "z-index": j,
                    width: "",
                    position: h,
                    left: "",
                    top: i,
                    "margin-left": ""
                });
                f.removeClass("scroll-to-fixed-fixed");
                if (d.options.className) f.removeClass(d.options.className);
                g = null;
            }
        }
        function z(a) {
            if (a != n) {
                f.css("left", l - a);
                n = a;
            }
        }
        function A() {
            var a = d.options.marginTop;
            if (!a) return 0;
            if ("function" === typeof a) return a.apply(f);
            return a;
        }
        function B() {
            if (!a.isScrollToFixed(f)) return;
            var b = e;
            if (!e) r(); else if (v()) {
                k = f.offset().top;
                l = f.offset().left;
            }
            var c = a(window).scrollLeft();
            var g = a(window).scrollTop();
            var i = s();
            if (d.options.minWidth && a(window).width() < d.options.minWidth) {
                if (!v() || !b) {
                    D();
                    f.trigger("preUnfixed.ScrollToFixed");
                    y();
                    f.trigger("unfixed.ScrollToFixed");
                }
            } else if (d.options.maxWidth && a(window).width() > d.options.maxWidth) {
                if (!v() || !b) {
                    D();
                    f.trigger("preUnfixed.ScrollToFixed");
                    y();
                    f.trigger("unfixed.ScrollToFixed");
                }
            } else if (d.options.bottom == -1) {
                if (i > 0 && g >= i - A()) {
                    if (!u() || !b) {
                        D();
                        f.trigger("preAbsolute.ScrollToFixed");
                        x();
                        f.trigger("unfixed.ScrollToFixed");
                    }
                } else if (g >= k - A()) {
                    if (!t() || !b) {
                        D();
                        f.trigger("preFixed.ScrollToFixed");
                        w();
                        n = -1;
                        f.trigger("fixed.ScrollToFixed");
                    }
                    z(c);
                } else if (!v() || !b) {
                    D();
                    f.trigger("preUnfixed.ScrollToFixed");
                    y();
                    f.trigger("unfixed.ScrollToFixed");
                }
            } else if (i > 0) if (g + a(window).height() - f.outerHeight(true) >= i - (A() || -C())) {
                if (t()) {
                    D();
                    f.trigger("preUnfixed.ScrollToFixed");
                    if ("absolute" === h) x(); else y();
                    f.trigger("unfixed.ScrollToFixed");
                }
            } else {
                if (!t()) {
                    D();
                    f.trigger("preFixed.ScrollToFixed");
                    w();
                }
                z(c);
                f.trigger("fixed.ScrollToFixed");
            } else z(c);
        }
        function C() {
            if (!d.options.bottom) return 0;
            return d.options.bottom;
        }
        function D() {
            var a = f.css("position");
            if ("absolute" == a) f.trigger("postAbsolute.ScrollToFixed"); else if ("fixed" == a) f.trigger("postFixed.ScrollToFixed"); else f.trigger("postUnfixed.ScrollToFixed");
        }
        var E = function(a) {
            if (f.is(":visible")) {
                e = false;
                B();
            }
        };
        var F = function(a) {
            !!window.requestAnimationFrame ? requestAnimationFrame(B) : B();
        };
        var G = function() {
            var a = document.body;
            if (document.createElement && a && a.appendChild && a.removeChild) {
                var b = document.createElement("div");
                if (!b.getBoundingClientRect) return null;
                b.innerHTML = "x";
                b.style.cssText = "position:fixed;top:100px;";
                a.appendChild(b);
                var c = a.style.height, d = a.scrollTop;
                a.style.height = "3000px";
                a.scrollTop = 500;
                var e = b.getBoundingClientRect().top;
                a.style.height = c;
                var f = 100 === e;
                a.removeChild(b);
                a.scrollTop = d;
                return f;
            }
            return null;
        };
        var H = function(a) {
            a = a || window.event;
            if (a.preventDefault) a.preventDefault();
            a.returnValue = false;
        };
        d.init = function() {
            d.options = a.extend({}, a.ScrollToFixed.defaultOptions, c);
            j = f.css("z-index");
            d.$el.css("z-index", d.options.zIndex);
            o = a("<div />");
            g = f.css("position");
            h = f.css("position");
            i = f.css("top");
            if (v()) d.$el.after(o);
            a(window).bind("resize.ScrollToFixed", E);
            a(window).bind("scroll.ScrollToFixed", F);
            if ("ontouchmove" in window) a(window).bind("touchmove.ScrollToFixed", B);
            if (d.options.preFixed) f.bind("preFixed.ScrollToFixed", d.options.preFixed);
            if (d.options.postFixed) f.bind("postFixed.ScrollToFixed", d.options.postFixed);
            if (d.options.preUnfixed) f.bind("preUnfixed.ScrollToFixed", d.options.preUnfixed);
            if (d.options.postUnfixed) f.bind("postUnfixed.ScrollToFixed", d.options.postUnfixed);
            if (d.options.preAbsolute) f.bind("preAbsolute.ScrollToFixed", d.options.preAbsolute);
            if (d.options.postAbsolute) f.bind("postAbsolute.ScrollToFixed", d.options.postAbsolute);
            if (d.options.fixed) f.bind("fixed.ScrollToFixed", d.options.fixed);
            if (d.options.unfixed) f.bind("unfixed.ScrollToFixed", d.options.unfixed);
            if (d.options.spacerClass) o.addClass(d.options.spacerClass);
            f.bind("resize.ScrollToFixed", function() {
                o.height(f.height());
            });
            f.bind("scroll.ScrollToFixed", function() {
                f.trigger("preUnfixed.ScrollToFixed");
                y();
                f.trigger("unfixed.ScrollToFixed");
                B();
            });
            f.bind("detach.ScrollToFixed", function(b) {
                H(b);
                f.trigger("preUnfixed.ScrollToFixed");
                y();
                f.trigger("unfixed.ScrollToFixed");
                a(window).unbind("resize.ScrollToFixed", E);
                a(window).unbind("scroll.ScrollToFixed", F);
                f.unbind(".ScrollToFixed");
                o.remove();
                d.$el.removeData("ScrollToFixed");
            });
            E();
        };
        d.init();
    };
    a.ScrollToFixed.defaultOptions = {
        marginTop: 0,
        limit: 0,
        bottom: -1,
        zIndex: 1e3,
        baseClassName: "scroll-to-fixed-fixed"
    };
    a.fn.scrollToFixed = function(b) {
        return this.each(function() {
            new a.ScrollToFixed(this, b);
        });
    };
}(jQuery);
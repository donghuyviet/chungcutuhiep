!function(a) {
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
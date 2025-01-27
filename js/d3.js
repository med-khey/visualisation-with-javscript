(function () {
    function e(a, b) {
        try {
            for (var c in b) Object.defineProperty(a.prototype, c, {value: b[c], enumerable: !1})
        } catch (d) {
            a.prototype = b
        }
    }

    function g(a) {
        var b = -1, c = a.length, d = [];
        while (++b < c) d.push(a[b]);
        return d
    }

    function h(a) {
        return Array.prototype.slice.call(a)
    }

    function k() {
    }

    function n() {
        return this
    }

    function o(a, b, c) {
        return function () {
            var d = c.apply(b, arguments);
            return arguments.length ? a : d
        }
    }

    function p(a) {
        return a != null && !isNaN(a)
    }

    function q(a) {
        return a.length
    }

    function s(a) {
        return a == null
    }

    function t(a) {
        return a.replace(/(^\s+)|(\s+$)/g, "").replace(/\s+/g, " ")
    }

    function u(a) {
        var b = 1;
        while (a * b % 1) b *= 10;
        return b
    }

    function x() {
    }

    function y(a) {
        function d() {
            var c = b, d = -1, e = c.length, f;
            while (++d < e) (f = c[d].on) && f.apply(this, arguments);
            return a
        }

        var b = [], c = new k;
        return d.on = function (d, e) {
            var f = c.get(d), g;
            return arguments.length < 2 ? f && f.on : (f && (f.on = null, b = b.slice(0, g = b.indexOf(f)).concat(b.slice(g + 1)), c.remove(d)), e && b.push(c.set(d, {on: e})), a)
        }, d
    }

    function B(a, b) {
        return b - (a ? 1 + Math.floor(Math.log(a + Math.pow(10, 1 + Math.floor(Math.log(a) / Math.LN10) - b)) / Math.LN10) : 1)
    }

    function C(a) {
        return a + ""
    }

    function D(a) {
        var b = a.lastIndexOf("."), c = b >= 0 ? a.substring(b) : (b = a.length, ""), d = [];
        while (b > 0) d.push(a.substring(b -= 3, b + 3));
        return d.reverse().join(",") + c
    }

    function F(a, b) {
        return {scale: Math.pow(10, (8 - b) * 3), symbol: a}
    }

    function L(a) {
        return function (b) {
            return b <= 0 ? 0 : b >= 1 ? 1 : a(b)
        }
    }

    function M(a) {
        return function (b) {
            return 1 - a(1 - b)
        }
    }

    function N(a) {
        return function (b) {
            return .5 * (b < .5 ? a(2 * b) : 2 - a(2 - 2 * b))
        }
    }

    function O(a) {
        return a
    }

    function P(a) {
        return function (b) {
            return Math.pow(b, a)
        }
    }

    function Q(a) {
        return 1 - Math.cos(a * Math.PI / 2)
    }

    function R(a) {
        return Math.pow(2, 10 * (a - 1))
    }

    function S(a) {
        return 1 - Math.sqrt(1 - a * a)
    }

    function T(a, b) {
        var c;
        return arguments.length < 2 && (b = .45), arguments.length < 1 ? (a = 1, c = b / 4) : c = b / (2 * Math.PI) * Math.asin(1 / a), function (d) {
            return 1 + a * Math.pow(2, 10 * -d) * Math.sin((d - c) * 2 * Math.PI / b)
        }
    }

    function U(a) {
        return a || (a = 1.70158), function (b) {
            return b * b * ((a + 1) * b - a)
        }
    }

    function V(a) {
        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    }

    function W() {
        d3.event.stopPropagation(), d3.event.preventDefault()
    }

    function X() {
        var a = d3.event, b;
        while (b = a.sourceEvent) a = b;
        return a
    }

    function Y(a) {
        var b = new x, c = 0, d = arguments.length;
        while (++c < d) b[arguments[c]] = y(b);
        return b.of = function (c, d) {
            return function (e) {
                try {
                    var f = e.sourceEvent = d3.event;
                    e.target = a, d3.event = e, b[e.type].apply(c, d)
                } finally {
                    d3.event = f
                }
            }
        }, b
    }

    function $(a) {
        return a == "transform" ? d3.interpolateTransform : d3.interpolate
    }

    function _(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0, function (c) {
            return (c - a) * b
        }
    }

    function ba(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0, function (c) {
            return Math.max(0, Math.min(1, (c - a) * b))
        }
    }

    function bb(a, b, c) {
        return new bc(a, b, c)
    }

    function bc(a, b, c) {
        this.r = a, this.g = b, this.b = c
    }

    function bd(a) {
        return a < 16 ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
    }

    function be(a, b, c) {
        var d = 0, e = 0, f = 0, g, h, i;
        g = /([a-z]+)\((.*)\)/i.exec(a);
        if (g) {
            h = g[2].split(",");
            switch (g[1]) {
                case"hsl":
                    return c(parseFloat(h[0]), parseFloat(h[1]) / 100, parseFloat(h[2]) / 100);
                case"rgb":
                    return b(bg(h[0]), bg(h[1]), bg(h[2]))
            }
        }
        return (i = bh.get(a)) ? b(i.r, i.g, i.b) : (a != null && a.charAt(0) === "#" && (a.length === 4 ? (d = a.charAt(1), d += d, e = a.charAt(2), e += e, f = a.charAt(3), f += f) : a.length === 7 && (d = a.substring(1, 3), e = a.substring(3, 5), f = a.substring(5, 7)), d = parseInt(d, 16), e = parseInt(e, 16), f = parseInt(f, 16)), b(d, e, f))
    }

    function bf(a, b, c) {
        var d = Math.min(a /= 255, b /= 255, c /= 255), e = Math.max(a, b, c), f = e - d, g, h, i = (e + d) / 2;
        return f ? (h = i < .5 ? f / (e + d) : f / (2 - e - d), a == e ? g = (b - c) / f + (b < c ? 6 : 0) : b == e ? g = (c - a) / f + 2 : g = (a - b) / f + 4, g *= 60) : h = g = 0, bi(g, h, i)
    }

    function bg(a) {
        var b = parseFloat(a);
        return a.charAt(a.length - 1) === "%" ? Math.round(b * 2.55) : b
    }

    function bi(a, b, c) {
        return new bj(a, b, c)
    }

    function bj(a, b, c) {
        this.h = a, this.s = b, this.l = c
    }

    function bk(a, b, c) {
        function f(a) {
            return a > 360 ? a -= 360 : a < 0 && (a += 360), a < 60 ? d + (e - d) * a / 60 : a < 180 ? e : a < 240 ? d + (e - d) * (240 - a) / 60 : d
        }

        function g(a) {
            return Math.round(f(a) * 255)
        }

        var d, e;
        return a %= 360, a < 0 && (a += 360), b = b < 0 ? 0 : b > 1 ? 1 : b, c = c < 0 ? 0 : c > 1 ? 1 : c, e = c <= .5 ? c * (1 + b) : c + b - c * b, d = 2 * c - e, bb(g(a + 120), g(a), g(a - 120))
    }

    function bl(a) {
        return j(a, br), a
    }

    function bs(a) {
        return function () {
            return bm(a, this)
        }
    }

    function bt(a) {
        return function () {
            return bn(a, this)
        }
    }

    function bv(a, b) {
        function f() {
            if (b = this.classList) return b.add(a);
            var b = this.className, d = b.baseVal != null, e = d ? b.baseVal : b;
            c.lastIndex = 0, c.test(e) || (e = t(e + " " + a), d ? b.baseVal = e : this.className = e)
        }

        function g() {
            if (b = this.classList) return b.remove(a);
            var b = this.className, d = b.baseVal != null, e = d ? b.baseVal : b;
            e = t(e.replace(c, " ")), d ? b.baseVal = e : this.className = e
        }

        function h() {
            (b.apply(this, arguments) ? f : g).call(this)
        }

        var c = new RegExp("(^|\\s+)" + d3.requote(a) + "(\\s+|$)", "g");
        if (arguments.length < 2) {
            var d = this.node();
            if (e = d.classList) return e.contains(a);
            var e = d.className;
            return c.lastIndex = 0, c.test(e.baseVal != null ? e.baseVal : e)
        }
        return this.each(typeof b == "function" ? h : b ? f : g)
    }

    function bw(a) {
        return {__data__: a}
    }

    function bx(a) {
        return function () {
            return bq(this, a)
        }
    }

    function by(a) {
        return arguments.length || (a = d3.ascending), function (b, c) {
            return a(b && b.__data__, c && c.__data__)
        }
    }

    function bA(a) {
        return j(a, bB), a
    }

    function bC(a, b, c) {
        j(a, bG);
        var d = new k, e = d3.dispatch("start", "end"), f = bJ;
        return a.id = b, a.time = c, a.tween = function (b, c) {
            return arguments.length < 2 ? d.get(b) : (c == null ? d.remove(b) : d.set(b, c), a)
        }, a.ease = function (b) {
            return arguments.length ? (f = typeof b == "function" ? b : d3.ease.apply(d3, arguments), a) : f
        }, a.each = function (b, c) {
            return arguments.length < 2 ? bK.call(a, b) : (e.on(b, c), a)
        }, d3.timer(function (g) {
            return a.each(function (h, i, j) {
                function p(a) {
                    return o.active > b ? r() : (o.active = b, d.forEach(function (a, b) {
                        (tween = b.call(l, h, i)) && k.push(tween)
                    }), e.start.call(l, h, i), q(a) || d3.timer(q, 0, c), 1)
                }

                function q(a) {
                    if (o.active !== b) return r();
                    var c = (a - m) / n, d = f(c), g = k.length;
                    while (g > 0) k[--g].call(l, d);
                    if (c >= 1) return r(), bI = b, e.end.call(l, h, i), bI = 0, 1
                }

                function r() {
                    return --o.count || delete l.__transition__, 1
                }

                var k = [], l = this, m = a[j][i].delay, n = a[j][i].duration,
                    o = l.__transition__ || (l.__transition__ = {active: 0, count: 0});
                ++o.count, m <= g ? p(g) : d3.timer(p, m, c)
            }), 1
        }, 0, c), a
    }

    function bE(a, b, c) {
        return c != "" && bD
    }

    function bF(a, b) {
        function d(a, d, e) {
            var f = b.call(this, a, d);
            return f == null ? e != "" && bD : e != f && c(e, f)
        }

        function e(a, d, e) {
            return e != b && c(e, b)
        }

        var c = $(a);
        return typeof b == "function" ? d : b == null ? bE : (b += "", e)
    }

    function bK(a) {
        for (var b = 0, c = this.length; b < c; b++) for (var d = this[b], e = 0, f = d.length; e < f; e++) {
            var g = d[e];
            g && a.call(g = g.node, g.__data__, e, b)
        }
        return this
    }

    function bO() {
        var a, b = Date.now(), c = bL;
        while (c) a = b - c.then, a >= c.delay && (c.flush = c.callback(a)), c = c.next;
        var d = bP() - b;
        d > 24 ? (isFinite(d) && (clearTimeout(bN), bN = setTimeout(bO, d)), bM = 0) : (bM = 1, bQ(bO))
    }

    function bP() {
        var a = null, b = bL, c = Infinity;
        while (b) b.flush ? b = a ? a.next = b.next : bL = b.next : (c = Math.min(c, b.then + b.delay), b = (a = b).next);
        return c
    }

    function bR(a) {
        var b = [a.a, a.b], c = [a.c, a.d], d = bT(b), e = bS(b, c), f = bT(bU(c, b, -e)) || 0;
        b[0] * c[1] < c[0] * b[1] && (b[0] *= -1, b[1] *= -1, d *= -1, e *= -1), this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * bV, this.translate = [a.e, a.f], this.scale = [d, f], this.skew = f ? Math.atan2(e, f) * bV : 0
    }

    function bS(a, b) {
        return a[0] * b[0] + a[1] * b[1]
    }

    function bT(a) {
        var b = Math.sqrt(bS(a, a));
        return b && (a[0] /= b, a[1] /= b), b
    }

    function bU(a, b, c) {
        return a[0] += c * b[0], a[1] += c * b[1], a
    }

    function bX(a, b) {
        var c = a.ownerSVGElement || a;
        if (c.createSVGPoint) {
            var d = c.createSVGPoint();
            if (bW < 0 && (window.scrollX || window.scrollY)) {
                c = d3.select(document.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
                var e = c[0][0].getScreenCTM();
                bW = !e.f && !e.e, c.remove()
            }
            return bW ? (d.x = b.pageX, d.y = b.pageY) : (d.x = b.clientX, d.y = b.clientY), d = d.matrixTransform(a.getScreenCTM().inverse()), [d.x, d.y]
        }
        var f = a.getBoundingClientRect();
        return [b.clientX - f.left - a.clientLeft, b.clientY - f.top - a.clientTop]
    }

    function bY() {
    }

    function bZ(a) {
        var b = a[0], c = a[a.length - 1];
        return b < c ? [b, c] : [c, b]
    }

    function b$(a) {
        return a.rangeExtent ? a.rangeExtent() : bZ(a.range())
    }

    function b_(a, b) {
        var c = 0, d = a.length - 1, e = a[c], f = a[d], g;
        f < e && (g = c, c = d, d = g, g = e, e = f, f = g);
        if (g = f - e) b = b(g), a[c] = b.floor(e), a[d] = b.ceil(f);
        return a
    }

    function ca() {
        return Math
    }

    function cb(a, b, c, d) {
        function g() {
            var g = Math.min(a.length, b.length) > 2 ? ci : ch, i = d ? ba : _;
            return e = g(a, b, i, c), f = g(b, a, i, d3.interpolate), h
        }

        function h(a) {
            return e(a)
        }

        var e, f;
        return h.invert = function (a) {
            return f(a)
        }, h.domain = function (b) {
            return arguments.length ? (a = b.map(Number), g()) : a
        }, h.range = function (a) {
            return arguments.length ? (b = a, g()) : b
        }, h.rangeRound = function (a) {
            return h.range(a).interpolate(d3.interpolateRound)
        }, h.clamp = function (a) {
            return arguments.length ? (d = a, g()) : d
        }, h.interpolate = function (a) {
            return arguments.length ? (c = a, g()) : c
        }, h.ticks = function (b) {
            return cf(a, b)
        }, h.tickFormat = function (b) {
            return cg(a, b)
        }, h.nice = function () {
            return b_(a, cd), g()
        }, h.copy = function () {
            return cb(a, b, c, d)
        }, g()
    }

    function cc(a, b) {
        return d3.rebind(a, b, "range", "rangeRound", "interpolate", "clamp")
    }

    function cd(a) {
        return a = Math.pow(10, Math.round(Math.log(a) / Math.LN10) - 1), {
            floor: function (b) {
                return Math.floor(b / a) * a
            }, ceil: function (b) {
                return Math.ceil(b / a) * a
            }
        }
    }

    function ce(a, b) {
        var c = bZ(a), d = c[1] - c[0], e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)), f = b / d * e;
        return f <= .15 ? e *= 10 : f <= .35 ? e *= 5 : f <= .75 && (e *= 2), c[0] = Math.ceil(c[0] / e) * e, c[1] = Math.floor(c[1] / e) * e + e * .5, c[2] = e, c
    }

    function cf(a, b) {
        return d3.range.apply(d3, ce(a, b))
    }

    function cg(a, b) {
        return d3.format(",." + Math.max(0, -Math.floor(Math.log(ce(a, b)[2]) / Math.LN10 + .01)) + "f")
    }

    function ch(a, b, c, d) {
        var e = c(a[0], a[1]), f = d(b[0], b[1]);
        return function (a) {
            return f(e(a))
        }
    }

    function ci(a, b, c, d) {
        var e = [], f = [], g = 0, h = Math.min(a.length, b.length) - 1;
        a[h] < a[0] && (a = a.slice().reverse(), b = b.slice().reverse());
        while (++g <= h) e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]));
        return function (b) {
            var c = d3.bisect(a, b, 1, h) - 1;
            return f[c](e[c](b))
        }
    }

    function cj(a, b) {
        function d(c) {
            return a(b(c))
        }

        var c = b.pow;
        return d.invert = function (b) {
            return c(a.invert(b))
        }, d.domain = function (e) {
            return arguments.length ? (b = e[0] < 0 ? cm : cl, c = b.pow, a.domain(e.map(b)), d) : a.domain().map(c)
        }, d.nice = function () {
            return a.domain(b_(a.domain(), ca)), d
        }, d.ticks = function () {
            var d = bZ(a.domain()), e = [];
            if (d.every(isFinite)) {
                var f = Math.floor(d[0]), g = Math.ceil(d[1]), h = c(d[0]), i = c(d[1]);
                if (b === cm) {
                    e.push(c(f));
                    for (; f++ < g;) for (var j = 9; j > 0; j--) e.push(c(f) * j)
                } else {
                    for (; f < g; f++) for (var j = 1; j < 10; j++) e.push(c(f) * j);
                    e.push(c(f))
                }
                for (f = 0; e[f] < h; f++) ;
                for (g = e.length; e[g - 1] > i; g--) ;
                e = e.slice(f, g)
            }
            return e
        }, d.tickFormat = function (a, e) {
            arguments.length < 2 && (e = ck);
            if (arguments.length < 1) return e;
            var f = a / d.ticks().length, g = b === cm ? (h = -1e-12, Math.floor) : (h = 1e-12, Math.ceil), h;
            return function (a) {
                return a / c(g(b(a) + h)) < f ? e(a) : ""
            }
        }, d.copy = function () {
            return cj(a.copy(), b)
        }, cc(d, a)
    }

    function cl(a) {
        return Math.log(a < 0 ? 0 : a) / Math.LN10
    }

    function cm(a) {
        return -Math.log(a > 0 ? 0 : -a) / Math.LN10
    }

    function cn(a, b) {
        function e(b) {
            return a(c(b))
        }

        var c = co(b), d = co(1 / b);
        return e.invert = function (b) {
            return d(a.invert(b))
        }, e.domain = function (b) {
            return arguments.length ? (a.domain(b.map(c)), e) : a.domain().map(d)
        }, e.ticks = function (a) {
            return cf(e.domain(), a)
        }, e.tickFormat = function (a) {
            return cg(e.domain(), a)
        }, e.nice = function () {
            return e.domain(b_(e.domain(), cd))
        }, e.exponent = function (a) {
            if (!arguments.length) return b;
            var f = e.domain();
            return c = co(b = a), d = co(1 / b), e.domain(f)
        }, e.copy = function () {
            return cn(a.copy(), b)
        }, cc(e, a)
    }

    function co(a) {
        return function (b) {
            return b < 0 ? -Math.pow(-b, a) : Math.pow(b, a)
        }
    }

    function cp(a, b) {
        function f(b) {
            return d[((c.get(b) || c.set(b, a.push(b))) - 1) % d.length]
        }

        function g(b, c) {
            return d3.range(a.length).map(function (a) {
                return b + c * a
            })
        }

        var c, d, e;
        return f.domain = function (d) {
            if (!arguments.length) return a;
            a = [], c = new k;
            var e = -1, g = d.length, h;
            while (++e < g) c.has(h = d[e]) || c.set(h, a.push(h));
            return f[b.t](b.x, b.p)
        }, f.range = function (a) {
            return arguments.length ? (d = a, e = 0, b = {t: "range", x: a}, f) : d
        }, f.rangePoints = function (c, h) {
            arguments.length < 2 && (h = 0);
            var i = c[0], j = c[1], k = (j - i) / (a.length - 1 + h);
            return d = g(a.length < 2 ? (i + j) / 2 : i + k * h / 2, k), e = 0, b = {t: "rangePoints", x: c, p: h}, f
        }, f.rangeBands = function (c, h) {
            arguments.length < 2 && (h = 0);
            var i = c[1] < c[0], j = c[i - 0], k = c[1 - i], l = (k - j) / (a.length + h);
            return d = g(j + l * h, l), i && d.reverse(), e = l * (1 - h), b = {t: "rangeBands", x: c, p: h}, f
        }, f.rangeRoundBands = function (c, h) {
            arguments.length < 2 && (h = 0);
            var i = c[1] < c[0], j = c[i - 0], k = c[1 - i], l = Math.floor((k - j) / (a.length + h)),
                m = k - j - (a.length - h) * l;
            return d = g(j + Math.round(m / 2), l), i && d.reverse(), e = Math.round(l * (1 - h)), b = {
                t: "rangeRoundBands",
                x: c,
                p: h
            }, f
        }, f.rangeBand = function () {
            return e
        }, f.rangeExtent = function () {
            return bZ(b.x)
        }, f.copy = function () {
            return cp(a, b)
        }, f.domain(a)
    }

    function cu(a, b) {
        function d() {
            var d = 0, f = a.length, g = b.length;
            c = [];
            while (++d < g) c[d - 1] = d3.quantile(a, d / g);
            return e
        }

        function e(a) {
            return isNaN(a = +a) ? NaN : b[d3.bisect(c, a)]
        }

        var c;
        return e.domain = function (b) {
            return arguments.length ? (a = b.filter(function (a) {
                return !isNaN(a)
            }).sort(d3.ascending), d()) : a
        }, e.range = function (a) {
            return arguments.length ? (b = a, d()) : b
        }, e.quantiles = function () {
            return c
        }, e.copy = function () {
            return cu(a, b)
        }, d()
    }

    function cv(a, b, c) {
        function f(b) {
            return c[Math.max(0, Math.min(e, Math.floor(d * (b - a))))]
        }

        function g() {
            return d = c.length / (b - a), e = c.length - 1, f
        }

        var d, e;
        return f.domain = function (c) {
            return arguments.length ? (a = +c[0], b = +c[c.length - 1], g()) : [a, b]
        }, f.range = function (a) {
            return arguments.length ? (c = a, g()) : c
        }, f.copy = function () {
            return cv(a, b, c)
        }, g()
    }

    function cw(a) {
        function b(a) {
            return +a
        }

        return b.invert = b, b.domain = b.range = function (c) {
            return arguments.length ? (a = c.map(b), b) : a
        }, b.ticks = function (b) {
            return cf(a, b)
        }, b.tickFormat = function (b) {
            return cg(a, b)
        }, b.copy = function () {
            return cw(a)
        }, b
    }

    function cz(a) {
        return a.innerRadius
    }

    function cA(a) {
        return a.outerRadius
    }

    function cB(a) {
        return a.startAngle
    }

    function cC(a) {
        return a.endAngle
    }

    function cD(a) {
        function g(d) {
            return d.length < 1 ? null : "M" + e(a(cE(this, d, b, c)), f)
        }

        var b = cF, c = cG, d = cH, e = cI.get(d), f = .7;
        return g.x = function (a) {
            return arguments.length ? (b = a, g) : b
        }, g.y = function (a) {
            return arguments.length ? (c = a, g) : c
        }, g.interpolate = function (a) {
            return arguments.length ? (cI.has(a += "") || (a = cH), e = cI.get(d = a), g) : d
        }, g.tension = function (a) {
            return arguments.length ? (f = a, g) : f
        }, g
    }

    function cE(a, b, c, d) {
        var e = [], f = -1, g = b.length, h = typeof c == "function", i = typeof d == "function", j;
        if (h && i) while (++f < g) e.push([c.call(a, j = b[f], f), d.call(a, j, f)]); else if (h) while (++f < g) e.push([c.call(a, b[f], f), d]); else if (i) while (++f < g) e.push([c, d.call(a, b[f], f)]); else while (++f < g) e.push([c, d]);
        return e
    }

    function cF(a) {
        return a[0]
    }

    function cG(a) {
        return a[1]
    }

    function cJ(a) {
        var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]];
        while (++b < c) e.push("L", (d = a[b])[0], ",", d[1]);
        return e.join("")
    }

    function cK(a) {
        var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]];
        while (++b < c) e.push("V", (d = a[b])[1], "H", d[0]);
        return e.join("")
    }

    function cL(a) {
        var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]];
        while (++b < c) e.push("H", (d = a[b])[0], "V", d[1]);
        return e.join("")
    }

    function cM(a, b) {
        return a.length < 4 ? cJ(a) : a[1] + cP(a.slice(1, a.length - 1), cQ(a, b))
    }

    function cN(a, b) {
        return a.length < 3 ? cJ(a) : a[0] + cP((a.push(a[0]), a), cQ([a[a.length - 2]].concat(a, [a[1]]), b))
    }

    function cO(a, b, c) {
        return a.length < 3 ? cJ(a) : a[0] + cP(a, cQ(a, b))
    }

    function cP(a, b) {
        if (b.length < 1 || a.length != b.length && a.length != b.length + 2) return cJ(a);
        var c = a.length != b.length, d = "", e = a[0], f = a[1], g = b[0], h = g, i = 1;
        c && (d += "Q" + (f[0] - g[0] * 2 / 3) + "," + (f[1] - g[1] * 2 / 3) + "," + f[0] + "," + f[1], e = a[1], i = 2);
        if (b.length > 1) {
            h = b[1], f = a[i], i++, d += "C" + (e[0] + g[0]) + "," + (e[1] + g[1]) + "," + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1];
            for (var j = 2; j < b.length; j++, i++) f = a[i], h = b[j], d += "S" + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1]
        }
        if (c) {
            var k = a[i];
            d += "Q" + (f[0] + h[0] * 2 / 3) + "," + (f[1] + h[1] * 2 / 3) + "," + k[0] + "," + k[1]
        }
        return d
    }

    function cQ(a, b) {
        var c = [], d = (1 - b) / 2, e, f = a[0], g = a[1], h = 1, i = a.length;
        while (++h < i) e = f, f = g, g = a[h], c.push([d * (g[0] - e[0]), d * (g[1] - e[1])]);
        return c
    }

    function cR(a) {
        if (a.length < 3) return cJ(a);
        var b = 1, c = a.length, d = a[0], e = d[0], f = d[1], g = [e, e, e, (d = a[1])[0]], h = [f, f, f, d[1]],
            i = [e, ",", f];
        cZ(i, g, h);
        while (++b < c) d = a[b], g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), cZ(i, g, h);
        b = -1;
        while (++b < 2) g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), cZ(i, g, h);
        return i.join("")
    }

    function cS(a) {
        if (a.length < 4) return cJ(a);
        var b = [], c = -1, d = a.length, e, f = [0], g = [0];
        while (++c < 3) e = a[c], f.push(e[0]), g.push(e[1]);
        b.push(cV(cY, f) + "," + cV(cY, g)), --c;
        while (++c < d) e = a[c], f.shift(), f.push(e[0]), g.shift(), g.push(e[1]), cZ(b, f, g);
        return b.join("")
    }

    function cT(a) {
        var b, c = -1, d = a.length, e = d + 4, f, g = [], h = [];
        while (++c < 4) f = a[c % d], g.push(f[0]), h.push(f[1]);
        b = [cV(cY, g), ",", cV(cY, h)], --c;
        while (++c < e) f = a[c % d], g.shift(), g.push(f[0]), h.shift(), h.push(f[1]), cZ(b, g, h);
        return b.join("")
    }

    function cU(a, b) {
        var c = a.length - 1, d = a[0][0], e = a[0][1], f = a[c][0] - d, g = a[c][1] - e, h = -1, i, j;
        while (++h <= c) i = a[h], j = h / c, i[0] = b * i[0] + (1 - b) * (d + j * f), i[1] = b * i[1] + (1 - b) * (e + j * g);
        return cR(a)
    }

    function cV(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
    }

    function cZ(a, b, c) {
        a.push("C", cV(cW, b), ",", cV(cW, c), ",", cV(cX, b), ",", cV(cX, c), ",", cV(cY, b), ",", cV(cY, c))
    }

    function c$(a, b) {
        return (b[1] - a[1]) / (b[0] - a[0])
    }

    function c_(a) {
        var b = 0, c = a.length - 1, d = [], e = a[0], f = a[1], g = d[0] = c$(e, f);
        while (++b < c) d[b] = g + (g = c$(e = f, f = a[b + 1]));
        return d[b] = g, d
    }

    function da(a) {
        var b = [], c, d, e, f, g = c_(a), h = -1, i = a.length - 1;
        while (++h < i) c = c$(a[h], a[h + 1]), Math.abs(c) < 1e-6 ? g[h] = g[h + 1] = 0 : (d = g[h] / c, e = g[h + 1] / c, f = d * d + e * e, f > 9 && (f = c * 3 / Math.sqrt(f), g[h] = f * d, g[h + 1] = f * e));
        h = -1;
        while (++h <= i) f = (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) / (6 * (1 + g[h] * g[h])), b.push([f || 0, g[h] * f || 0]);
        return b
    }

    function db(a) {
        return a.length < 3 ? cJ(a) : a[0] + cP(a, da(a))
    }

    function dc(a) {
        var b, c = -1, d = a.length, e, f;
        while (++c < d) b = a[c], e = b[0], f = b[1] + cx, b[0] = e * Math.cos(f), b[1] = e * Math.sin(f);
        return a
    }

    function dd(a) {
        function j(f) {
            if (f.length < 1) return null;
            var j = cE(this, f, b, d), k = cE(this, f, b === c ? de(j) : c, d === e ? df(j) : e);
            return "M" + g(a(k), i) + "L" + h(a(j.reverse()), i) + "Z"
        }

        var b = cF, c = cF, d = 0, e = cG, f, g, h, i = .7;
        return j.x = function (a) {
            return arguments.length ? (b = c = a, j) : c
        }, j.x0 = function (a) {
            return arguments.length ? (b = a, j) : b
        }, j.x1 = function (a) {
            return arguments.length ? (c = a, j) : c
        }, j.y = function (a) {
            return arguments.length ? (d = e = a, j) : e
        }, j.y0 = function (a) {
            return arguments.length ? (d = a, j) : d
        }, j.y1 = function (a) {
            return arguments.length ? (e = a, j) : e
        }, j.interpolate = function (a) {
            return arguments.length ? (cI.has(a += "") || (a = cH), g = cI.get(f = a), h = g.reverse || g, j) : f
        }, j.tension = function (a) {
            return arguments.length ? (i = a, j) : i
        }, j.interpolate("linear")
    }

    function de(a) {
        return function (b, c) {
            return a[c][0]
        }
    }

    function df(a) {
        return function (b, c) {
            return a[c][1]
        }
    }

    function dg(a) {
        return a.source
    }

    function dh(a) {
        return a.target
    }

    function di(a) {
        return a.radius
    }

    function dj(a) {
        return a.startAngle
    }

    function dk(a) {
        return a.endAngle
    }

    function dl(a) {
        return [a.x, a.y]
    }

    function dm(a) {
        return function () {
            var b = a.apply(this, arguments), c = b[0], d = b[1] + cx;
            return [c * Math.cos(d), c * Math.sin(d)]
        }
    }

    function dn() {
        return 64
    }

    function dp() {
        return "circle"
    }

    function dq(a) {
        var b = Math.sqrt(a / Math.PI);
        return "M0," + b + "A" + b + "," + b + " 0 1,1 0," + -b + "A" + b + "," + b + " 0 1,1 0," + b + "Z"
    }

    function du(a, b) {
        a.attr("transform", function (a) {
            return "translate(" + b(a) + ",0)"
        })
    }

    function dv(a, b) {
        a.attr("transform", function (a) {
            return "translate(0," + b(a) + ")"
        })
    }

    function dw(a, b, c) {
        e = [];
        if (c && b.length > 1) {
            var d = bZ(a.domain()), e, f = -1, g = b.length, h = (b[1] - b[0]) / ++c, i, j;
            while (++f < g) for (i = c; --i > 0;) (j = +b[f] - i * h) >= d[0] && e.push(j);
            for (--f, i = 0; ++i < c && (j = +b[f] + i * h) < d[1];) e.push(j)
        }
        return e
    }

    function dB() {
        dz || (dz = d3.select("body").append("div").style("visibility", "hidden").style("top", 0).style("height", 0).style("width", 0).style("overflow-y", "scroll").append("div").style("height", "2000px").node().parentNode);
        var a = d3.event, b;
        try {
            dz.scrollTop = 1e3, dz.dispatchEvent(a), b = 1e3 - dz.scrollTop
        } catch (c) {
            b = a.wheelDelta || -a.detail * 5
        }
        return b
    }

    function dC(a) {
        var b = a.source, c = a.target, d = dE(b, c), e = [b];
        while (b !== d) b = b.parent, e.push(b);
        var f = e.length;
        while (c !== d) e.splice(f, 0, c), c = c.parent;
        return e
    }

    function dD(a) {
        var b = [], c = a.parent;
        while (c != null) b.push(a), a = c, c = c.parent;
        return b.push(a), b
    }

    function dE(a, b) {
        if (a === b) return a;
        var c = dD(a), d = dD(b), e = c.pop(), f = d.pop(), g = null;
        while (e === f) g = e, e = c.pop(), f = d.pop();
        return g
    }

    function dH(a) {
        a.fixed |= 2
    }

    function dI(a) {
        a !== dG && (a.fixed &= 1)
    }

    function dJ() {
        dG.fixed &= 1, dF = dG = null
    }

    function dK() {
        dG.px = d3.event.x, dG.py = d3.event.y, dF.resume()
    }

    function dL(a, b, c) {
        var d = 0, e = 0;
        a.charge = 0;
        if (!a.leaf) {
            var f = a.nodes, g = f.length, h = -1, i;
            while (++h < g) {
                i = f[h];
                if (i == null) continue;
                dL(i, b, c), a.charge += i.charge, d += i.charge * i.cx, e += i.charge * i.cy
            }
        }
        if (a.point) {
            a.leaf || (a.point.x += Math.random() - .5, a.point.y += Math.random() - .5);
            var j = b * c[a.point.index];
            a.charge += a.pointCharge = j, d += j * a.point.x, e += j * a.point.y
        }
        a.cx = d / a.charge, a.cy = e / a.charge
    }

    function dM(a) {
        return 20
    }

    function dN(a) {
        return 1
    }

    function dP(a) {
        return a.x
    }

    function dQ(a) {
        return a.y
    }

    function dR(a, b, c) {
        a.y0 = b, a.y = c
    }

    function dU(a) {
        return d3.range(a.length)
    }

    function dV(a) {
        var b = -1, c = a[0].length, d = [];
        while (++b < c) d[b] = 0;
        return d
    }

    function dW(a) {
        var b = 1, c = 0, d = a[0][1], e, f = a.length;
        for (; b < f; ++b) (e = a[b][1]) > d && (c = b, d = e);
        return c
    }

    function dX(a) {
        return a.reduce(dY, 0)
    }

    function dY(a, b) {
        return a + b[1]
    }

    function dZ(a, b) {
        return d$(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1))
    }

    function d$(a, b) {
        var c = -1, d = +a[0], e = (a[1] - d) / b, f = [];
        while (++c <= b) f[c] = e * c + d;
        return f
    }

    function d_(a) {
        return [d3.min(a), d3.max(a)]
    }

    function ea(a, b) {
        return d3.rebind(a, b, "sort", "children", "value"), a.links = ee, a.nodes = function (b) {
            return ef = !0, (a.nodes = a)(b)
        }, a
    }

    function eb(a) {
        return a.children
    }

    function ec(a) {
        return a.value
    }

    function ed(a, b) {
        return b.value - a.value
    }

    function ee(a) {
        return d3.merge(a.map(function (a) {
            return (a.children || []).map(function (b) {
                return {source: a, target: b}
            })
        }))
    }

    function eg(a, b) {
        return a.value - b.value
    }

    function eh(a, b) {
        var c = a._pack_next;
        a._pack_next = b, b._pack_prev = a, b._pack_next = c, c._pack_prev = b
    }

    function ei(a, b) {
        a._pack_next = b, b._pack_prev = a
    }

    function ej(a, b) {
        var c = b.x - a.x, d = b.y - a.y, e = a.r + b.r;
        return e * e - c * c - d * d > .001
    }

    function ek(a) {
        function l(a) {
            b = Math.min(a.x - a.r, b), c = Math.max(a.x + a.r, c), d = Math.min(a.y - a.r, d), e = Math.max(a.y + a.r, e)
        }

        var b = Infinity, c = -Infinity, d = Infinity, e = -Infinity, f = a.length, g, h, i, j, k;
        a.forEach(el), g = a[0], g.x = -g.r, g.y = 0, l(g);
        if (f > 1) {
            h = a[1], h.x = h.r, h.y = 0, l(h);
            if (f > 2) {
                i = a[2], ep(g, h, i), l(i), eh(g, i), g._pack_prev = i, eh(i, h), h = g._pack_next;
                for (var m = 3; m < f; m++) {
                    ep(g, h, i = a[m]);
                    var n = 0, o = 1, p = 1;
                    for (j = h._pack_next; j !== h; j = j._pack_next, o++) if (ej(j, i)) {
                        n = 1;
                        break
                    }
                    if (n == 1) for (k = g._pack_prev; k !== j._pack_prev; k = k._pack_prev, p++) if (ej(k, i)) break;
                    n ? (o < p || o == p && h.r < g.r ? ei(g, h = j) : ei(g = k, h), m--) : (eh(g, i), h = i, l(i))
                }
            }
        }
        var q = (b + c) / 2, r = (d + e) / 2, s = 0;
        for (var m = 0; m < f; m++) {
            var t = a[m];
            t.x -= q, t.y -= r, s = Math.max(s, t.r + Math.sqrt(t.x * t.x + t.y * t.y))
        }
        return a.forEach(em), s
    }

    function el(a) {
        a._pack_next = a._pack_prev = a
    }

    function em(a) {
        delete a._pack_next, delete a._pack_prev
    }

    function en(a) {
        var b = a.children;
        b && b.length ? (b.forEach(en), a.r = ek(b)) : a.r = Math.sqrt(a.value)
    }

    function eo(a, b, c, d) {
        var e = a.children;
        a.x = b += d * a.x, a.y = c += d * a.y, a.r *= d;
        if (e) {
            var f = -1, g = e.length;
            while (++f < g) eo(e[f], b, c, d)
        }
    }

    function ep(a, b, c) {
        var d = a.r + c.r, e = b.x - a.x, f = b.y - a.y;
        if (d && (e || f)) {
            var g = b.r + c.r, h = Math.sqrt(e * e + f * f),
                i = Math.max(-1, Math.min(1, (d * d + h * h - g * g) / (2 * d * h))), j = Math.acos(i),
                k = i * (d /= h), l = Math.sin(j) * d;
            c.x = a.x + k * e + l * f, c.y = a.y + k * f - l * e
        } else c.x = a.x + d, c.y = a.y
    }

    function eq(a) {
        return 1 + d3.max(a, function (a) {
            return a.y
        })
    }

    function er(a) {
        return a.reduce(function (a, b) {
            return a + b.x
        }, 0) / a.length
    }

    function es(a) {
        var b = a.children;
        return b && b.length ? es(b[0]) : a
    }

    function et(a) {
        var b = a.children, c;
        return b && (c = b.length) ? et(b[c - 1]) : a
    }

    function eu(a, b) {
        return a.parent == b.parent ? 1 : 2
    }

    function ev(a) {
        var b = a.children;
        return b && b.length ? b[0] : a._tree.thread
    }

    function ew(a) {
        var b = a.children, c;
        return b && (c = b.length) ? b[c - 1] : a._tree.thread
    }

    function ex(a, b) {
        var c = a.children;
        if (c && (e = c.length)) {
            var d, e, f = -1;
            while (++f < e) b(d = ex(c[f], b), a) > 0 && (a = d)
        }
        return a
    }

    function ey(a, b) {
        return a.x - b.x
    }

    function ez(a, b) {
        return b.x - a.x
    }

    function eA(a, b) {
        return a.depth - b.depth
    }

    function eB(a, b) {
        function c(a, d) {
            var e = a.children;
            if (e && (i = e.length)) {
                var f, g = null, h = -1, i;
                while (++h < i) f = e[h], c(f, g), g = f
            }
            b(a, d)
        }

        c(a, null)
    }

    function eC(a) {
        var b = 0, c = 0, d = a.children, e = d.length, f;
        while (--e >= 0) f = d[e]._tree, f.prelim += b, f.mod += b, b += f.shift + (c += f.change)
    }

    function eD(a, b, c) {
        a = a._tree, b = b._tree;
        var d = c / (b.number - a.number);
        a.change += d, b.change -= d, b.shift += c, b.prelim += c, b.mod += c
    }

    function eE(a, b, c) {
        return a._tree.ancestor.parent == b.parent ? a._tree.ancestor : c
    }

    function eF(a) {
        return {x: a.x, y: a.y, dx: a.dx, dy: a.dy}
    }

    function eG(a, b) {
        var c = a.x + b[3], d = a.y + b[0], e = a.dx - b[1] - b[3], f = a.dy - b[0] - b[2];
        return e < 0 && (c += e / 2, e = 0), f < 0 && (d += f / 2, f = 0), {x: c, y: d, dx: e, dy: f}
    }

    function eH(a) {
        return a.map(eI).join(",")
    }

    function eI(a) {
        return /[",\n]/.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a
    }

    function eK(a, b) {
        return function (c) {
            return c && a.hasOwnProperty(c.type) ? a[c.type](c) : b
        }
    }

    function eL(a) {
        return "m0," + a + "a" + a + "," + a + " 0 1,1 0," + -2 * a + "a" + a + "," + a + " 0 1,1 0," + 2 * a + "z"
    }

    function eM(a, b) {
        eN.hasOwnProperty(a.type) && eN[a.type](a, b)
    }

    function eO(a, b) {
        eM(a.geometry, b)
    }

    function eP(a, b) {
        for (var c = a.features, d = 0, e = c.length; d < e; d++) eM(c[d].geometry, b)
    }

    function eQ(a, b) {
        for (var c = a.geometries, d = 0, e = c.length; d < e; d++) eM(c[d], b)
    }

    function eR(a, b) {
        for (var c = a.coordinates, d = 0, e = c.length; d < e; d++) b.apply(null, c[d])
    }

    function eS(a, b) {
        for (var c = a.coordinates, d = 0, e = c.length; d < e; d++) for (var f = c[d], g = 0, h = f.length; g < h; g++) b.apply(null, f[g])
    }

    function eT(a, b) {
        for (var c = a.coordinates, d = 0, e = c.length; d < e; d++) for (var f = c[d][0], g = 0, h = f.length; g < h; g++) b.apply(null, f[g])
    }

    function eU(a, b) {
        b.apply(null, a.coordinates)
    }

    function eV(a, b) {
        for (var c = a.coordinates[0], d = 0, e = c.length; d < e; d++) b.apply(null, c[d])
    }

    function eW(a) {
        return a.source
    }

    function eX(a) {
        return a.target
    }

    function eY(a, b) {
        function q(a) {
            var b = Math.sin(o - (a *= o)) / p, c = Math.sin(a) / p, f = b * g * d + c * m * j,
                i = b * g * e + c * m * k, l = b * h + c * n;
            return [Math.atan2(i, f) / eJ, Math.atan2(l, Math.sqrt(f * f + i * i)) / eJ]
        }

        var c = a[0] * eJ, d = Math.cos(c), e = Math.sin(c), f = a[1] * eJ, g = Math.cos(f), h = Math.sin(f),
            i = b[0] * eJ, j = Math.cos(i), k = Math.sin(i), l = b[1] * eJ, m = Math.cos(l), n = Math.sin(l),
            o = q.d = Math.acos(Math.max(-1, Math.min(1, h * n + g * m * Math.cos(i - c)))), p = Math.sin(o);
        return q
    }

    function e_(a) {
        var b = 0, c = 0;
        for (; ;) {
            if (a(b, c)) return [b, c];
            b === 0 ? (b = c + 1, c = 0) : (b -= 1, c += 1)
        }
    }

    function fa(a, b, c, d) {
        var e, f, g, h, i, j, k;
        return e = d[a], f = e[0], g = e[1], e = d[b], h = e[0], i = e[1], e = d[c], j = e[0], k = e[1], (k - g) * (h - f) - (i - g) * (j - f) > 0
    }

    function fb(a, b, c) {
        return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0])
    }

    function fc(a, b, c, d) {
        var e = a[0], f = b[0], g = c[0], h = d[0], i = a[1], j = b[1], k = c[1], l = d[1], m = e - g, n = f - e,
            o = h - g, p = i - k, q = j - i, r = l - k, s = (o * p - r * m) / (r * n - o * q);
        return [e + s * n, i + s * q]
    }

    function fe(a, b) {
        var c = {
            list: a.map(function (a, b) {
                return {index: b, x: a[0], y: a[1]}
            }).sort(function (a, b) {
                return a.y < b.y ? -1 : a.y > b.y ? 1 : a.x < b.x ? -1 : a.x > b.x ? 1 : 0
            }), bottomSite: null
        }, d = {
            list: [], leftEnd: null, rightEnd: null, init: function () {
                d.leftEnd = d.createHalfEdge(null, "l"), d.rightEnd = d.createHalfEdge(null, "l"), d.leftEnd.r = d.rightEnd, d.rightEnd.l = d.leftEnd, d.list.unshift(d.leftEnd, d.rightEnd)
            }, createHalfEdge: function (a, b) {
                return {edge: a, side: b, vertex: null, l: null, r: null}
            }, insert: function (a, b) {
                b.l = a, b.r = a.r, a.r.l = b, a.r = b
            }, leftBound: function (a) {
                var b = d.leftEnd;
                do b = b.r; while (b != d.rightEnd && e.rightOf(b, a));
                return b = b.l, b
            }, del: function (a) {
                a.l.r = a.r, a.r.l = a.l, a.edge = null
            }, right: function (a) {
                return a.r
            }, left: function (a) {
                return a.l
            }, leftRegion: function (a) {
                return a.edge == null ? c.bottomSite : a.edge.region[a.side]
            }, rightRegion: function (a) {
                return a.edge == null ? c.bottomSite : a.edge.region[fd[a.side]]
            }
        }, e = {
            bisect: function (a, b) {
                var c = {region: {l: a, r: b}, ep: {l: null, r: null}}, d = b.x - a.x, e = b.y - a.y,
                    f = d > 0 ? d : -d, g = e > 0 ? e : -e;
                return c.c = a.x * d + a.y * e + (d * d + e * e) * .5, f > g ? (c.a = 1, c.b = e / d, c.c /= d) : (c.b = 1, c.a = d / e, c.c /= e), c
            }, intersect: function (a, b) {
                var c = a.edge, d = b.edge;
                if (!c || !d || c.region.r == d.region.r) return null;
                var e = c.a * d.b - c.b * d.a;
                if (Math.abs(e) < 1e-10) return null;
                var f = (c.c * d.b - d.c * c.b) / e, g = (d.c * c.a - c.c * d.a) / e, h = c.region.r, i = d.region.r, j,
                    k;
                h.y < i.y || h.y == i.y && h.x < i.x ? (j = a, k = c) : (j = b, k = d);
                var l = f >= k.region.r.x;
                return l && j.side === "l" || !l && j.side === "r" ? null : {x: f, y: g}
            }, rightOf: function (a, b) {
                var c = a.edge, d = c.region.r, e = b.x > d.x;
                if (e && a.side === "l") return 1;
                if (!e && a.side === "r") return 0;
                if (c.a === 1) {
                    var f = b.y - d.y, g = b.x - d.x, h = 0, i = 0;
                    !e && c.b < 0 || e && c.b >= 0 ? i = h = f >= c.b * g : (i = b.x + b.y * c.b > c.c, c.b < 0 && (i = !i), i || (h = 1));
                    if (!h) {
                        var j = d.x - c.region.l.x;
                        i = c.b * (g * g - f * f) < j * f * (1 + 2 * g / j + c.b * c.b), c.b < 0 && (i = !i)
                    }
                } else {
                    var k = c.c - c.a * b.x, l = b.y - k, m = b.x - d.x, n = k - d.y;
                    i = l * l > m * m + n * n
                }
                return a.side === "l" ? i : !i
            }, endPoint: function (a, c, d) {
                a.ep[c] = d;
                if (!a.ep[fd[c]]) return;
                b(a)
            }, distance: function (a, b) {
                var c = a.x - b.x, d = a.y - b.y;
                return Math.sqrt(c * c + d * d)
            }
        }, f = {
            list: [], insert: function (a, b, c) {
                a.vertex = b, a.ystar = b.y + c;
                for (var d = 0, e = f.list, g = e.length; d < g; d++) {
                    var h = e[d];
                    if (a.ystar > h.ystar || a.ystar == h.ystar && b.x > h.vertex.x) continue;
                    break
                }
                e.splice(d, 0, a)
            }, del: function (a) {
                for (var b = 0, c = f.list, d = c.length; b < d && c[b] != a; ++b) ;
                c.splice(b, 1)
            }, empty: function () {
                return f.list.length === 0
            }, nextEvent: function (a) {
                for (var b = 0, c = f.list, d = c.length; b < d; ++b) if (c[b] == a) return c[b + 1];
                return null
            }, min: function () {
                var a = f.list[0];
                return {x: a.vertex.x, y: a.ystar}
            }, extractMin: function () {
                return f.list.shift()
            }
        };
        d.init(), c.bottomSite = c.list.shift();
        var g = c.list.shift(), h, i, j, k, l, m, n, o, p, q, r, s, t;
        for (; ;) {
            f.empty() || (h = f.min());
            if (g && (f.empty() || g.y < h.y || g.y == h.y && g.x < h.x)) i = d.leftBound(g), j = d.right(i), n = d.rightRegion(i), s = e.bisect(n, g), m = d.createHalfEdge(s, "l"), d.insert(i, m), q = e.intersect(i, m), q && (f.del(i), f.insert(i, q, e.distance(q, g))), i = m, m = d.createHalfEdge(s, "r"), d.insert(i, m), q = e.intersect(m, j), q && f.insert(m, q, e.distance(q, g)), g = c.list.shift(); else if (!f.empty()) i = f.extractMin(), k = d.left(i), j = d.right(i), l = d.right(j), n = d.leftRegion(i), o = d.rightRegion(j), r = i.vertex, e.endPoint(i.edge, i.side, r), e.endPoint(j.edge, j.side, r), d.del(i), f.del(j), d.del(j), t = "l", n.y > o.y && (p = n, n = o, o = p, t = "r"), s = e.bisect(n, o), m = d.createHalfEdge(s, t), d.insert(k, m), e.endPoint(s, fd[t], r), q = e.intersect(k, m), q && (f.del(k), f.insert(k, q, e.distance(q, n))), q = e.intersect(m, l), q && f.insert(m, q, e.distance(q, n)); else break
        }
        for (i = d.right(d.leftEnd); i != d.rightEnd; i = d.right(i)) b(i.edge)
    }

    function ff() {
        return {leaf: !0, nodes: [], point: null}
    }

    function fg(a, b, c, d, e, f) {
        if (!a(b, c, d, e, f)) {
            var g = (c + e) * .5, h = (d + f) * .5, i = b.nodes;
            i[0] && fg(a, i[0], c, d, g, h), i[1] && fg(a, i[1], g, d, e, h), i[2] && fg(a, i[2], c, h, g, f), i[3] && fg(a, i[3], g, h, e, f)
        }
    }

    function fh(a) {
        return {x: a[0], y: a[1]}
    }

    function fj() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function fk(a, b, c, d) {
        var e, f, g = 0, h = b.length, i = c.length;
        while (g < h) {
            if (d >= i) return -1;
            e = b.charCodeAt(g++);
            if (e == 37) {
                f = fq[b.charAt(g++)];
                if (!f || (d = f(a, c, d)) < 0) return -1
            } else if (e != c.charCodeAt(d++)) return -1
        }
        return d
    }

    function fr(a, b, c) {
        return ft.test(b.substring(c, c += 3)) ? c : -1
    }

    function fs(a, b, c) {
        fu.lastIndex = 0;
        var d = fu.exec(b.substring(c, c + 10));
        return d ? c += d[0].length : -1
    }

    function fv(a, b, c) {
        var d = fw.get(b.substring(c, c += 3).toLowerCase());
        return d == null ? -1 : (a.setMonth(d), c)
    }

    function fx(a, b, c) {
        fy.lastIndex = 0;
        var d = fy.exec(b.substring(c, c + 12));
        return d ? (a.setMonth(fz.get(d[0].toLowerCase())), c += d[0].length) : -1
    }

    function fB(a, b, c) {
        return fk(a, fp.c.toString(), b, c)
    }

    function fC(a, b, c) {
        return fk(a, fp.x.toString(), b, c)
    }

    function fD(a, b, c) {
        return fk(a, fp.X.toString(), b, c)
    }

    function fE(a, b, c) {
        fO.lastIndex = 0;
        var d = fO.exec(b.substring(c, c + 4));
        return d ? (a.setFullYear(d[0]), c += d[0].length) : -1
    }

    function fF(a, b, c) {
        fO.lastIndex = 0;
        var d = fO.exec(b.substring(c, c + 2));
        return d ? (a.setFullYear(fG() + +d[0]), c += d[0].length) : -1
    }

    function fG() {
        return ~~((new Date).getFullYear() / 1e3) * 1e3
    }

    function fH(a, b, c) {
        fO.lastIndex = 0;
        var d = fO.exec(b.substring(c, c + 2));
        return d ? (a.setMonth(d[0] - 1), c += d[0].length) : -1
    }

    function fI(a, b, c) {
        fO.lastIndex = 0;
        var d = fO.exec(b.substring(c, c + 2));
        return d ? (a.setDate(+d[0]), c += d[0].length) : -1
    }

    function fJ(a, b, c) {
        fO.lastIndex = 0;
        var d = fO.exec(b.substring(c, c + 2));
        return d ? (a.setHours(+d[0]), c += d[0].length) : -1
    }

    function fK(a, b, c) {
        return a.hour12 = !0, fJ(a, b, c)
    }

    function fL(a, b, c) {
        fO.lastIndex = 0;
        var d = fO.exec(b.substring(c, c + 2));
        return d ? (a.setMinutes(+d[0]), c += d[0].length) : -1
    }

    function fM(a, b, c) {
        fO.lastIndex = 0;
        var d = fO.exec(b.substring(c, c + 2));
        return d ? (a.setSeconds(+d[0]), c += d[0].length) : -1
    }

    function fN(a, b, c) {
        fO.lastIndex = 0;
        var d = fO.exec(b.substring(c, c + 3));
        return d ? (a.setMilliseconds(+d[0]), c += d[0].length) : -1
    }

    function fP(a, b, c) {
        var d = fQ.get(b.substring(c, c += 2).toLowerCase());
        return d == null ? -1 : (a.hour12pm = d, c)
    }

    function fR(a) {
        var b = a.getTimezoneOffset(), c = b > 0 ? "-" : "+", d = ~~(Math.abs(b) / 60), e = Math.abs(b) % 60;
        return c + fl(d) + fl(e)
    }

    function fT(a) {
        return a.toISOString()
    }

    function fU(a, b, c) {
        function d(b) {
            var c = a(b), d = f(c, 1);
            return b - c < d - b ? c : d
        }

        function e(c) {
            return b(c = a(new fi(c - 1)), 1), c
        }

        function f(a, c) {
            return b(a = new fi(+a), c), a
        }

        function g(a, d, f) {
            var g = e(a), h = [];
            if (f > 1) while (g < d) c(g) % f || h.push(new Date(+g)), b(g, 1); else while (g < d) h.push(new Date(+g)), b(g, 1);
            return h
        }

        function h(a, b, c) {
            try {
                fi = fj;
                var d = new fj;
                return d._ = a, g(d, b, c)
            } finally {
                fi = Date
            }
        }

        a.floor = a, a.round = d, a.ceil = e, a.offset = f, a.range = g;
        var i = a.utc = fV(a);
        return i.floor = i, i.round = fV(d), i.ceil = fV(e), i.offset = fV(f), i.range = h, a
    }

    function fV(a) {
        return function (b, c) {
            try {
                fi = fj;
                var d = new fj;
                return d._ = b, a(d, c)._
            } finally {
                fi = Date
            }
        }
    }

    function fW(a, b, c) {
        function d(b) {
            return a(b)
        }

        return d.invert = function (b) {
            return fY(a.invert(b))
        }, d.domain = function (b) {
            return arguments.length ? (a.domain(b), d) : a.domain().map(fY)
        }, d.nice = function (a) {
            var b = fX(d.domain());
            return d.domain([a.floor(b[0]), a.ceil(b[1])])
        }, d.ticks = function (
            c, e) {
            var f = fX(d.domain());
            if (typeof c != "function") {
                var g = f[1] - f[0], h = g / c, i = d3.bisect(ga, h);
                if (i == ga.length) return b.year(f, c);
                if (!i) return a.ticks(c).map(fY);
                Math.log(h / ga[i - 1]) < Math.log(ga[i] / h) && --i, c = b[i], e = c[1], c = c[0].range
            }
            return c(f[0], new Date(+f[1] + 1), e)
        }, d.tickFormat = function () {
            return c
        }, d.copy = function () {
            return fW(a.copy(), b, c)
        }, d3.rebind(d, a, "range", "rangeRound", "interpolate", "clamp")
    }

    function fX(a) {
        var b = a[0], c = a[a.length - 1];
        return b < c ? [b, c] : [c, b]
    }

    function fY(a) {
        return new Date(a)
    }

    function fZ(a) {
        return function (b) {
            var c = a.length - 1, d = a[c];
            while (!d[1](b)) d = a[--c];
            return d[0](b)
        }
    }

    function f$(a) {
        var b = new Date(a, 0, 1);
        return b.setFullYear(a), b
    }

    function f_(a) {
        var b = a.getFullYear(), c = f$(b), d = f$(b + 1);
        return b + (a - c) / (d - c)
    }

    function gi(a) {
        var b = new Date(Date.UTC(a, 0, 1));
        return b.setUTCFullYear(a), b
    }

    function gj(a) {
        var b = a.getUTCFullYear(), c = gi(b), d = gi(b + 1);
        return b + (a - c) / (d - c)
    }

    Date.now || (Date.now = function () {
        return +(new Date)
    });
    try {
        document.createElement("div").style.setProperty("opacity", 0, "")
    } catch (a) {
        var b = CSSStyleDeclaration.prototype, c = b.setProperty;
        b.setProperty = function (a, b, d) {
            c.call(this, a, b + "", d)
        }
    }
    d3 = {version: "2.8.0"};
    var f = h;
    try {
        f(document.documentElement.childNodes)[0].nodeType
    } catch (i) {
        f = g
    }
    var j = [].__proto__ ? function (a, b) {
        a.__proto__ = b
    } : function (a, b) {
        for (var c in b) a[c] = b[c]
    };
    d3.map = function (a) {
        var b = new k;
        for (var c in a) b.set(c, a[c]);
        return b
    }, e(k, {
        has: function (a) {
            return l + a in this
        }, get: function (a) {
            return this[l + a]
        }, set: function (a, b) {
            return this[l + a] = b
        }, remove: function (a) {
            return a = l + a, a in this && delete this[a]
        }, keys: function () {
            var a = [];
            return this.forEach(function (b) {
                a.push(b)
            }), a
        }, values: function () {
            var a = [];
            return this.forEach(function (b, c) {
                a.push(c)
            }), a
        }, entries: function () {
            var a = [];
            return this.forEach(function (b, c) {
                a.push({key: b, value: c})
            }), a
        }, forEach: function (a) {
            for (var b in this) b.charCodeAt(0) === m && a.call(this, b.substring(1), this[b])
        }
    });
    var l = "\0", m = l.charCodeAt(0);
    d3.functor = function (a) {
        return typeof a == "function" ? a : function () {
            return a
        }
    }, d3.rebind = function (a, b) {
        var c = 1, d = arguments.length, e;
        while (++c < d) a[e = arguments[c]] = o(a, b, b[e]);
        return a
    }, d3.ascending = function (a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
    }, d3.descending = function (a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN
    }, d3.mean = function (a, b) {
        var c = a.length, d, e = 0, f = -1, g = 0;
        if (arguments.length === 1) while (++f < c) p(d = a[f]) && (e += (d - e) / ++g); else while (++f < c) p(d = b.call(a, a[f], f)) && (e += (d - e) / ++g);
        return g ? e : undefined
    }, d3.median = function (a, b) {
        return arguments.length > 1 && (a = a.map(b)), a = a.filter(p), a.length ? d3.quantile(a.sort(d3.ascending), .5) : undefined
    }, d3.min = function (a, b) {
        var c = -1, d = a.length, e, f;
        if (arguments.length === 1) {
            while (++c < d && ((e = a[c]) == null || e != e)) e = undefined;
            while (++c < d) (f = a[c]) != null && e > f && (e = f)
        } else {
            while (++c < d && ((e = b.call(a, a[c], c)) == null || e != e)) e = undefined;
            while (++c < d) (f = b.call(a, a[c], c)) != null && e > f && (e = f)
        }
        return e
    }, d3.max = function (a, b) {
        var c = -1, d = a.length, e, f;
        if (arguments.length === 1) {
            while (++c < d && ((e = a[c]) == null || e != e)) e = undefined;
            while (++c < d) (f = a[c]) != null && f > e && (e = f)
        } else {
            while (++c < d && ((e = b.call(a, a[c], c)) == null || e != e)) e = undefined;
            while (++c < d) (f = b.call(a, a[c], c)) != null && f > e && (e = f)
        }
        return e
    }, d3.extent = function (a, b) {
        var c = -1, d = a.length, e, f, g;
        if (arguments.length === 1) {
            while (++c < d && ((e = g = a[c]) == null || e != e)) e = g = undefined;
            while (++c < d) (f = a[c]) != null && (e > f && (e = f), g < f && (g = f))
        } else {
            while (++c < d && ((e = g = b.call(a, a[c], c)) == null || e != e)) e = undefined;
            while (++c < d) (f = b.call(a, a[c], c)) != null && (e > f && (e = f), g < f && (g = f))
        }
        return [e, g]
    }, d3.random = {
        normal: function (a, b) {
            return arguments.length < 2 && (b = 1), arguments.length < 1 && (a = 0), function () {
                var c, d, e;
                do c = Math.random() * 2 - 1, d = Math.random() * 2 - 1, e = c * c + d * d; while (!e || e > 1);
                return a + b * c * Math.sqrt(-2 * Math.log(e) / e)
            }
        }
    }, d3.sum = function (a, b) {
        var c = 0, d = a.length, e, f = -1;
        if (arguments.length === 1) while (++f < d) isNaN(e = +a[f]) || (c += e); else while (++f < d) isNaN(e = +b.call(a, a[f], f)) || (c += e);
        return c
    }, d3.quantile = function (a, b) {
        var c = (a.length - 1) * b + 1, d = Math.floor(c), e = a[d - 1], f = c - d;
        return f ? e + f * (a[d] - e) : e
    }, d3.transpose = function (a) {
        return d3.zip.apply(d3, a)
    }, d3.zip = function () {
        if (!(e = arguments.length)) return [];
        for (var a = -1, b = d3.min(arguments, q), c = new Array(b); ++a < b;) for (var d = -1, e, f = c[a] = new Array(e); ++d < e;) f[d] = arguments[d][a];
        return c
    }, d3.bisector = function (a) {
        return {
            left: function (b, c, d, e) {
                arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length);
                while (d < e) {
                    var f = d + e >> 1;
                    a.call(b, b[f], f) < c ? d = f + 1 : e = f
                }
                return d
            }, right: function (b, c, d, e) {
                arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length);
                while (d < e) {
                    var f = d + e >> 1;
                    c < a.call(b, b[f], f) ? e = f : d = f + 1
                }
                return d
            }
        }
    };
    var r = d3.bisector(function (a) {
        return a
    });
    d3.bisectLeft = r.left, d3.bisect = d3.bisectRight = r.right, d3.first = function (a, b) {
        var c = 0, d = a.length, e = a[0], f;
        arguments.length === 1 && (b = d3.ascending);
        while (++c < d) b.call(a, e, f = a[c]) > 0 && (e = f);
        return e
    }, d3.last = function (a, b) {
        var c = 0, d = a.length, e = a[0], f;
        arguments.length === 1 && (b = d3.ascending);
        while (++c < d) b.call(a, e, f = a[c]) <= 0 && (e = f);
        return e
    }, d3.nest = function () {
        function f(c, g) {
            if (g >= b.length) return e ? e.call(a, c) : d ? c.sort(d) : c;
            var h = -1, i = c.length, j = b[g++], l, m, n = new k, o, p = {};
            while (++h < i) (o = n.get(l = j(m = c[h]))) ? o.push(m) : n.set(l, [m]);
            return n.forEach(function (a) {
                p[a] = f(n.get(a), g)
            }), p
        }

        function g(a, d) {
            if (d >= b.length) return a;
            var e = [], f = c[d++], h;
            for (h in a) e.push({key: h, values: g(a[h], d)});
            return f && e.sort(function (a, b) {
                return f(a.key, b.key)
            }), e
        }

        var a = {}, b = [], c = [], d, e;
        return a.map = function (a) {
            return f(a, 0)
        }, a.entries = function (a) {
            return g(f(a, 0), 0)
        }, a.key = function (c) {
            return b.push(c), a
        }, a.sortKeys = function (d) {
            return c[b.length - 1] = d, a
        }, a.sortValues = function (b) {
            return d = b, a
        }, a.rollup = function (b) {
            return e = b, a
        }, a
    }, d3.keys = function (a) {
        var b = [];
        for (var c in a) b.push(c);
        return b
    }, d3.values = function (a) {
        var b = [];
        for (var c in a) b.push(a[c]);
        return b
    }, d3.entries = function (a) {
        var b = [];
        for (var c in a) b.push({key: c, value: a[c]});
        return b
    }, d3.permute = function (a, b) {
        var c = [], d = -1, e = b.length;
        while (++d < e) c[d] = a[b[d]];
        return c
    }, d3.merge = function (a) {
        return Array.prototype.concat.apply([], a)
    }, d3.split = function (a, b) {
        var c = [], d = [], e, f = -1, g = a.length;
        arguments.length < 2 && (b = s);
        while (++f < g) b.call(d, e = a[f], f) ? d = [] : (d.length || c.push(d), d.push(e));
        return c
    }, d3.range = function (a, b, c) {
        arguments.length < 3 && (c = 1, arguments.length < 2 && (b = a, a = 0));
        if ((b - a) / c === Infinity) throw new Error("infinite range");
        var d = [], e = u(Math.abs(c)), f = -1, g;
        a *= e, b *= e, c *= e;
        if (c < 0) while ((g = a + c * ++f) > b) d.push(g / e); else while ((g = a + c * ++f) < b) d.push(g / e);
        return d
    }, d3.requote = function (a) {
        return a.replace(v, "\\$&")
    };
    var v = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    d3.round = function (a, b) {
        return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
    }, d3.xhr = function (a, b, c) {
        var d = new XMLHttpRequest;
        arguments.length < 3 ? (c = b, b = null) : b && d.overrideMimeType && d.overrideMimeType(b), d.open("GET", a, !0), b && d.setRequestHeader("Accept", b), d.onreadystatechange = function () {
            d.readyState === 4 && c(d.status < 300 ? d : null)
        }, d.send(null)
    }, d3.text = function (a, b, c) {
        function d(a) {
            c(a && a.responseText)
        }

        arguments.length < 3 && (c = b, b = null), d3.xhr(a, b, d)
    }, d3.json = function (a, b) {
        d3.text(a, "application/json", function (a) {
            b(a ? JSON.parse(a) : null)
        })
    }, d3.html = function (a, b) {
        d3.text(a, "text/html", function (a) {
            if (a != null) {
                var c = document.createRange();
                c.selectNode(document.body), a = c.createContextualFragment(a)
            }
            b(a)
        })
    }, d3.xml = function (a, b, c) {
        function d(a) {
            c(a && a.responseXML)
        }

        arguments.length < 3 && (c = b, b = null), d3.xhr(a, b, d)
    };
    var w = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    d3.ns = {
        prefix: w, qualify: function (a) {
            var b = a.indexOf(":"), c = a;
            return b >= 0 && (c = a.substring(0, b), a = a.substring(b + 1)), w.hasOwnProperty(c) ? {
                space: w[c],
                local: a
            } : a
        }
    }, d3.dispatch = function () {
        var a = new x, b = -1, c = arguments.length;
        while (++b < c) a[arguments[b]] = y(a);
        return a
    }, x.prototype.on = function (a, b) {
        var c = a.indexOf("."), d = "";
        return c > 0 && (d = a.substring(c + 1), a = a.substring(0, c)), arguments.length < 2 ? this[a].on(d) : this[a].on(d, b)
    }, d3.format = function (a) {
        var b = z.exec(a), c = b[1] || " ", d = b[3] || "", e = b[5], f = +b[6], g = b[7], h = b[8], i = b[9], j = 1,
            k = "", l = !1;
        h && (h = +h.substring(1)), e && (c = "0", g && (f -= Math.floor((f - 1) / 4)));
        switch (i) {
            case"n":
                g = !0, i = "g";
                break;
            case"%":
                j = 100, k = "%", i = "f";
                break;
            case"p":
                j = 100, k = "%", i = "r";
                break;
            case"d":
                l = !0, h = 0;
                break;
            case"s":
                j = -1, i = "r"
        }
        return i == "r" && !h && (i = "g"), i = A.get(i) || C, function (a) {
            if (l && a % 1) return "";
            var b = a < 0 && (a = -a) ? "−" : d;
            if (j < 0) {
                var m = d3.formatPrefix(a, h);
                a *= m.scale, k = m.symbol
            } else a *= j;
            a = i(a, h);
            if (e) {
                var n = a.length + b.length;
                n < f && (a = (new Array(f - n + 1)).join(c) + a), g && (a = D(a)), a = b + a
            } else {
                g && (a = D(a)), a = b + a;
                var n = a.length;
                n < f && (a = (new Array(f - n + 1)).join(c) + a)
            }
            return a + k
        }
    };
    var z = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/, A = d3.map({
        g: function (a, b) {
            return a.toPrecision(b)
        }, e: function (a, b) {
            return a.toExponential(b)
        }, f: function (a, b) {
            return a.toFixed(b)
        }, r: function (a, b) {
            return d3.round(a, b = B(a, b)).toFixed(Math.max(0, Math.min(20, b)))
        }
    }), E = ["y", "z", "a", "f", "p", "n", "μ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(F);
    d3.formatPrefix = function (a, b) {
        var c = 0;
        return a && (a < 0 && (a *= -1), b && (a = d3.round(a, B(a, b))), c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10), c = Math.max(-24, Math.min(24, Math.floor((c <= 0 ? c + 1 : c - 1) / 3) * 3))), E[8 + c / 3]
    };
    var G = P(2), H = P(3), I = function () {
        return O
    }, J = d3.map({
        linear: I, poly: P, quad: function () {
            return G
        }, cubic: function () {
            return H
        }, sin: function () {
            return Q
        }, exp: function () {
            return R
        }, circle: function () {
            return S
        }, elastic: T, back: U, bounce: function () {
            return V
        }
    }), K = d3.map({
        "in": O, out: M, "in-out": N, "out-in": function (a) {
            return N(M(a))
        }
    });
    d3.ease = function (a) {
        var b = a.indexOf("-"), c = b >= 0 ? a.substring(0, b) : a, d = b >= 0 ? a.substring(b + 1) : "in";
        return c = J.get(c) || I, d = K.get(d) || O, L(d(c.apply(null, Array.prototype.slice.call(arguments, 1))))
    }, d3.event = null, d3.interpolate = function (a, b) {
        var c = d3.interpolators.length, d;
        while (--c >= 0 && !(d = d3.interpolators[c](a, b))) ;
        return d
    }, d3.interpolateNumber = function (a, b) {
        return b -= a, function (c) {
            return a + b * c
        }
    }, d3.interpolateRound = function (a, b) {
        return b -= a, function (c) {
            return Math.round(a + b * c)
        }
    }, d3.interpolateString = function (a, b) {
        var c, d, e, f = 0, g = 0, h = [], i = [], j, k;
        Z.lastIndex = 0;
        for (d = 0; c = Z.exec(b); ++d) c.index && h.push(b.substring(f, g = c.index)), i.push({
            i: h.length,
            x: c[0]
        }), h.push(null), f = Z.lastIndex;
        f < b.length && h.push(b.substring(f));
        for (d = 0, j = i.length; (c = Z.exec(a)) && d < j; ++d) {
            k = i[d];
            if (k.x == c[0]) {
                if (k.i) if (h[k.i + 1] == null) {
                    h[k.i - 1] += k.x, h.splice(k.i, 1);
                    for (e = d + 1; e < j; ++e) i[e].i--
                } else {
                    h[k.i - 1] += k.x + h[k.i + 1], h.splice(k.i, 2);
                    for (e = d + 1; e < j; ++e) i[e].i -= 2
                } else if (h[k.i + 1] == null) h[k.i] = k.x; else {
                    h[k.i] = k.x + h[k.i + 1], h.splice(k.i + 1, 1);
                    for (e = d + 1; e < j; ++e) i[e].i--
                }
                i.splice(d, 1), j--, d--
            } else k.x = d3.interpolateNumber(parseFloat(c[0]), parseFloat(k.x))
        }
        while (d < j) k = i.pop(), h[k.i + 1] == null ? h[k.i] = k.x : (h[k.i] = k.x + h[k.i + 1], h.splice(k.i + 1, 1)), j--;
        return h.length === 1 ? h[0] == null ? i[0].x : function () {
            return b
        } : function (a) {
            for (d = 0; d < j; ++d) h[(k = i[d]).i] = k.x(a);
            return h.join("")
        }
    }, d3.interpolateTransform = function (a, b) {
        var c = [], d = [], e, f = d3.transform(a), g = d3.transform(b), h = f.translate, i = g.translate, j = f.rotate,
            k = g.rotate, l = f.skew, m = g.skew, n = f.scale, o = g.scale;
        return h[0] != i[0] || h[1] != i[1] ? (c.push("translate(", null, ",", null, ")"), d.push({
            i: 1,
            x: d3.interpolateNumber(h[0], i[0])
        }, {
            i: 3,
            x: d3.interpolateNumber(h[1], i[1])
        })) : i[0] || i[1] ? c.push("translate(" + i + ")") : c.push(""), j != k ? d.push({
            i: c.push(c.pop() + "rotate(", null, ")") - 2,
            x: d3.interpolateNumber(j, k)
        }) : k && c.push(c.pop() + "rotate(" + k + ")"), l != m ? d.push({
            i: c.push(c.pop() + "skewX(", null, ")") - 2,
            x: d3.interpolateNumber(l, m)
        }) : m && c.push(c.pop() + "skewX(" + m + ")"), n[0] != o[0] || n[1] != o[1] ? (e = c.push(c.pop() + "scale(", null, ",", null, ")"), d.push({
            i: e - 4,
            x: d3.interpolateNumber(n[0], o[0])
        }, {
            i: e - 2,
            x: d3.interpolateNumber(n[1], o[1])
        })) : (o[0] != 1 || o[1] != 1) && c.push(c.pop() + "scale(" + o + ")"), e = d.length, function (a) {
            var b = -1, f;
            while (++b < e) c[(f = d[b]).i] = f.x(a);
            return c.join("")
        }
    }, d3.interpolateRgb = function (a, b) {
        a = d3.rgb(a), b = d3.rgb(b);
        var c = a.r, d = a.g, e = a.b, f = b.r - c, g = b.g - d, h = b.b - e;
        return function (a) {
            return "#" + bd(Math.round(c + f * a)) + bd(Math.round(d + g * a)) + bd(Math.round(e + h * a))
        }
    }, d3.interpolateHsl = function (a, b) {
        a = d3.hsl(a), b = d3.hsl(b);
        var c = a.h, d = a.s, e = a.l, f = b.h - c, g = b.s - d, h = b.l - e;
        return function (a) {
            return bk(c + f * a, d + g * a, e + h * a).toString()
        }
    }, d3.interpolateArray = function (a, b) {
        var c = [], d = [], e = a.length, f = b.length, g = Math.min(a.length, b.length), h;
        for (h = 0; h < g; ++h) c.push(d3.interpolate(a[h], b[h]));
        for (; h < e; ++h) d[h] = a[h];
        for (; h < f; ++h) d[h] = b[h];
        return function (a) {
            for (h = 0; h < g; ++h) d[h] = c[h](a);
            return d
        }
    }, d3.interpolateObject = function (a, b) {
        var c = {}, d = {}, e;
        for (e in a) e in b ? c[e] = $(e)(a[e], b[e]) : d[e] = a[e];
        for (e in b) e in a || (d[e] = b[e]);
        return function (a) {
            for (e in c) d[e] = c[e](a);
            return d
        }
    };
    var Z = /[-+]?(?:\d*\.?\d+)(?:[eE][-+]?\d+)?/g;
    d3.interpolators = [d3.interpolateObject, function (a, b) {
        return b instanceof Array && d3.interpolateArray(a, b)
    }, function (a, b) {
        return (typeof a == "string" || typeof b == "string") && d3.interpolateString(a + "", b + "")
    }, function (a, b) {
        return (typeof b == "string" ? bh.has(b) || /^(#|rgb\(|hsl\()/.test(b) : b instanceof bc || b instanceof bj) && d3.interpolateRgb(a, b)
    }, function (a, b) {
        return !isNaN(a = +a) && !isNaN(b = +b) && d3.interpolateNumber(a, b)
    }], d3.rgb = function (a, b, c) {
        return arguments.length === 1 ? a instanceof bc ? bb(a.r, a.g, a.b) : be("" + a, bb, bk) : bb(~~a, ~~b, ~~c)
    }, bc.prototype.brighter = function (a) {
        a = Math.pow(.7, arguments.length ? a : 1);
        var b = this.r, c = this.g, d = this.b, e = 30;
        return !b && !c && !d ? bb(e, e, e) : (b && b < e && (b = e), c && c < e && (c = e), d && d < e && (d = e), bb(Math.min(255, Math.floor(b / a)), Math.min(255, Math.floor(c / a)), Math.min(255, Math.floor(d / a))))
    }, bc.prototype.darker = function (a) {
        return a = Math.pow(.7, arguments.length ? a : 1), bb(Math.floor(a * this.r), Math.floor(a * this.g), Math.floor(a * this.b))
    }, bc.prototype.hsl = function () {
        return bf(this.r, this.g, this.b)
    }, bc.prototype.toString = function () {
        return "#" + bd(this.r) + bd(this.g) + bd(this.b)
    };
    var bh = d3.map({
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    });
    bh.forEach(function (a, b) {
        bh.set(a, be(b, bb, bk))
    }), d3.hsl = function (a, b, c) {
        return arguments.length === 1 ? a instanceof bj ? bi(a.h, a.s, a.l) : be("" + a, bf, bi) : bi(+a, +b, +c)
    }, bj.prototype.brighter = function (a) {
        return a = Math.pow(.7, arguments.length ? a : 1), bi(this.h, this.s, this.l / a)
    }, bj.prototype.darker = function (a) {
        return a = Math.pow(.7, arguments.length ? a : 1), bi(this.h, this.s, a * this.l)
    }, bj.prototype.rgb = function () {
        return bk(this.h, this.s, this.l)
    }, bj.prototype.toString = function () {
        return this.rgb().toString()
    };
    var bm = function (a, b) {
            return b.querySelector(a)
        }, bn = function (a, b) {
            return b.querySelectorAll(a)
        }, bo = document.documentElement,
        bp = bo.matchesSelector || bo.webkitMatchesSelector || bo.mozMatchesSelector || bo.msMatchesSelector || bo.oMatchesSelector,
        bq = function (a, b) {
            return bp.call(a, b)
        };
    typeof Sizzle == "function" && (bm = function (a, b) {
        return Sizzle(a, b)[0]
    }, bn = function (a, b) {
        return Sizzle.uniqueSort(Sizzle(a, b))
    }, bq = Sizzle.matchesSelector);
    var br = [];
    d3.selection = function () {
        return bz
    }, d3.selection.prototype = br, br.select = function (a) {
        var b = [], c, d, e, f;
        typeof a != "function" && (a = bs(a));
        for (var g = -1, h = this.length; ++g < h;) {
            b.push(c = []), c.parentNode = (e = this[g]).parentNode;
            for (var i = -1, j = e.length; ++i < j;) (f = e[i]) ? (c.push(d = a.call(f, f.__data__, i)), d && "__data__" in f && (d.__data__ = f.__data__)) : c.push(null)
        }
        return bl(b)
    }, br.selectAll = function (a) {
        var b = [], c, d;
        typeof a != "function" && (a = bt(a));
        for (var e = -1, g = this.length; ++e < g;) for (var h = this[e], i = -1, j = h.length; ++i < j;) if (d = h[i]) b.push(c = f(a.call(d, d.__data__, i))), c.parentNode = d;
        return bl(b)
    }, br.attr = function (a, b) {
        function d() {
            this.removeAttribute(a)
        }

        function e() {
            this.removeAttributeNS(a.space, a.local)
        }

        function f() {
            this.setAttribute(a, b)
        }

        function g() {
            this.setAttributeNS(a.space, a.local, b)
        }

        function h() {
            var c = b.apply(this, arguments);
            c == null ? this.removeAttribute(a) : this.setAttribute(a, c)
        }

        function i() {
            var c = b.apply(this, arguments);
            c == null ? this.removeAttributeNS(a.space, a.local) : this.setAttributeNS(a.space, a.local, c)
        }

        a = d3.ns.qualify(a);
        if (arguments.length < 2) {
            var c = this.node();
            return a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
        }
        return this.each(b == null ? a.local ? e : d : typeof b == "function" ? a.local ? i : h : a.local ? g : f)
    }, br.classed = function (a, b) {
        var c = a.split(bu), d = c.length, e = -1;
        if (arguments.length > 1) {
            while (++e < d) bv.call(this, c[e], b);
            return this
        }
        while (++e < d) if (!bv.call(this, c[e])) return !1;
        return !0
    };
    var bu = /\s+/g;
    br.style = function (a, b, c) {
        function d() {
            this.style.removeProperty(a)
        }

        function e() {
            this.style.setProperty(a, b, c)
        }

        function f() {
            var d = b.apply(this, arguments);
            d == null ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
        }

        return arguments.length < 3 && (c = ""), arguments.length < 2 ? window.getComputedStyle(this.node(), null).getPropertyValue(a) : this.each(b == null ? d : typeof b == "function" ? f : e)
    }, br.property = function (a, b) {
        function c() {
            delete this[a]
        }

        function d() {
            this[a] = b
        }

        function e() {
            var c = b.apply(this, arguments);
            c == null ? delete this[a] : this[a] = c
        }

        return arguments.length < 2 ? this.node()[a] : this.each(b == null ? c : typeof b == "function" ? e : d)
    }, br.text = function (a) {
        return arguments.length < 1 ? this.node().textContent : this.each(typeof a == "function" ? function () {
            var b = a.apply(this, arguments);
            this.textContent = b == null ? "" : b
        } : a == null ? function () {
            this.textContent = ""
        } : function () {
            this.textContent = a
        })
    }, br.html = function (a) {
        return arguments.length < 1 ? this.node().innerHTML : this.each(typeof a == "function" ? function () {
            var b = a.apply(this, arguments);
            this.innerHTML = b == null ? "" : b
        } : a == null ? function () {
            this.innerHTML = ""
        } : function () {
            this.innerHTML = a
        })
    }, br.append = function (a) {
        function b() {
            return this.appendChild(document.createElementNS(this.namespaceURI, a))
        }

        function c() {
            return this.appendChild(document.createElementNS(a.space, a.local))
        }

        return a = d3.ns.qualify(a), this.select(a.local ? c : b)
    }, br.insert = function (a, b) {
        function c() {
            return this.insertBefore(document.createElementNS(this.namespaceURI, a), bm(b, this))
        }

        function d() {
            return this.insertBefore(document.createElementNS(a.space, a.local), bm(b, this))
        }

        return a = d3.ns.qualify(a), this.select(a.local ? d : c)
    }, br.remove = function () {
        return this.each(function () {
            var a = this.parentNode;
            a && a.removeChild(this)
        })
    }, br.data = function (a, b) {
        function g(a, c) {
            var d, e = a.length, f = c.length, g = Math.min(e, f), l = Math.max(e, f), m = [], n = [], o = [], p, q;
            if (b) {
                var r = new k, s = [], t, u = c.length;
                for (d = -1; ++d < e;) t = b.call(p = a[d], p.__data__, d), r.has(t) ? o[u++] = p : r.set(t, p), s.push(t);
                for (d = -1; ++d < f;) t = b.call(c, q = c[d], d), r.has(t) ? (m[d] = p = r.get(t), p.__data__ = q, n[d] = o[d] = null) : (n[d] = bw(q), m[d] = o[d] = null), r.remove(t);
                for (d = -1; ++d < e;) r.has(s[d]) && (o[d] = a[d])
            } else {
                for (d = -1; ++d < g;) p = a[d], q = c[d], p ? (p.__data__ = q, m[d] = p, n[d] = o[d] = null) : (n[d] = bw(q), m[d] = o[d] = null);
                for (; d < f; ++d) n[d] = bw(c[d]), m[d] = o[d] = null;
                for (; d < l; ++d) o[d] = a[d], n[d] = m[d] = null
            }
            n.update = m, n.parentNode = m.parentNode = o.parentNode = a.parentNode, h.push(n), i.push(m), j.push(o)
        }

        var c = -1, d = this.length, e, f;
        if (!arguments.length) {
            a = new Array(d = (e = this[0]).length);
            while (++c < d) if (f = e[c]) a[c] = f.__data__;
            return a
        }
        var h = bA([]), i = bl([]), j = bl([]);
        if (typeof a == "function") while (++c < d) g(e = this[c], a.call(e, e.parentNode.__data__, c)); else while (++c < d) g(e = this[c], a);
        return i.enter = function () {
            return h
        }, i.exit = function () {
            return j
        }, i
    }, br.datum = br.map = function (a) {
        return arguments.length < 1 ? this.property("__data__") : this.property("__data__", a)
    }, br.filter = function (a) {
        var b = [], c, d, e;
        typeof a != "function" && (a = bx(a));
        for (var f = 0, g = this.length; f < g; f++) {
            b.push(c = []), c.parentNode = (d = this[f]).parentNode;
            for (var h = 0, i = d.length; h < i; h++) (e = d[h]) && a.call(e, e.__data__, h) && c.push(e)
        }
        return bl(b)
    }, br.order = function () {
        for (var a = -1, b = this.length; ++a < b;) for (var c = this[a], d = c.length - 1, e = c[d], f; --d >= 0;) if (f = c[d]) e && e !== f.nextSibling && e.parentNode.insertBefore(f, e), e = f;
        return this
    }, br.sort = function (a) {
        a = by.apply(this, arguments);
        for (var b = -1, c = this.length; ++b < c;) this[b].sort(a);
        return this.order()
    }, br.on = function (a, b, c) {
        arguments.length < 3 && (c = !1);
        var d = "__on" + a, e = a.indexOf(".");
        return e > 0 && (a = a.substring(0, e)), arguments.length < 2 ? (e = this.node()[d]) && e._ : this.each(function (e, f) {
            function i(a) {
                var c = d3.event;
                d3.event = a;
                try {
                    b.call(g, g.__data__, f)
                } finally {
                    d3.event = c
                }
            }

            var g = this, h = g[d];
            h && (g.removeEventListener(a, h, h.$), delete g[d]), b && (g.addEventListener(a, g[d] = i, i.$ = c), i._ = b)
        })
    }, br.each = function (a) {
        for (var b = -1, c = this.length; ++b < c;) for (var d = this[b], e = -1, f = d.length; ++e < f;) {
            var g = d[e];
            g && a.call(g, g.__data__, e, b)
        }
        return this
    }, br.call = function (a) {
        return a.apply(this, (arguments[0] = this, arguments)), this
    }, br.empty = function () {
        return !this.node()
    }, br.node = function (a) {
        for (var b = 0, c = this.length; b < c; b++) for (var d = this[b], e = 0, f = d.length; e < f; e++) {
            var g = d[e];
            if (g) return g
        }
        return null
    }, br.transition = function () {
        var a = [], b, c;
        for (var d = -1, e = this.length; ++d < e;) {
            a.push(b = []);
            for (var f = this[d], g = -1, h = f.length; ++g < h;) b.push((c = f[g]) ? {
                node: c,
                delay: 0,
                duration: 250
            } : null)
        }
        return bC(a, bI || ++bH, Date.now())
    };
    var bz = bl([[document]]);
    bz[0].parentNode = bo, d3.select = function (a) {
        return typeof a == "string" ? bz.select(a) : bl([[a]])
    }, d3.selectAll = function (a) {
        return typeof a == "string" ? bz.selectAll(a) : bl([f(a)])
    };
    var bB = [];
    d3.selection.enter = bA, d3.selection.enter.prototype = bB, bB.append = br.append, bB.insert = br.insert, bB.empty = br.empty, bB.node = br.node, bB.select = function (a) {
        var b = [], c, d, e, f, g;
        for (var h = -1, i = this.length; ++h < i;) {
            e = (f = this[h]).update, b.push(c = []), c.parentNode = f.parentNode;
            for (var j = -1, k = f.length; ++j < k;) (g = f[j]) ? (c.push(e[j] = d = a.call(f.parentNode, g.__data__, j)), d.__data__ = g.__data__) : c.push(null)
        }
        return bl(b)
    };
    var bD = {}, bG = [], bH = 0, bI = 0, bJ = d3.ease("cubic-in-out");
    bG.call = br.call, d3.transition = function () {
        return bz.transition()
    }, d3.transition.prototype = bG, bG.select = function (a) {
        var b = [], c, d, e;
        typeof a != "function" && (a = bs(a));
        for (var f = -1, g = this.length; ++f < g;) {
            b.push(c = []);
            for (var h = this[f], i = -1, j = h.length; ++i < j;) (e = h[i]) && (d = a.call(e.node, e.node.__data__, i)) ? ("__data__" in e.node && (d.__data__ = e.node.__data__), c.push({
                node: d,
                delay: e.delay,
                duration: e.duration
            })) : c.push(null)
        }
        return bC(b, this.id, this.time).ease(this.ease())
    }, bG.selectAll = function (a) {
        var b = [], c, d, e;
        typeof a != "function" && (a = bt(a));
        for (var f = -1, g = this.length; ++f < g;) for (var h = this[f], i = -1, j = h.length; ++i < j;) if (e = h[i]) {
            d = a.call(e.node, e.node.__data__, i), b.push(c = []);
            for (var k = -1, l = d.length; ++k < l;) c.push({node: d[k], delay: e.delay, duration: e.duration})
        }
        return bC(b, this.id, this.time).ease(this.ease())
    }, bG.attr = function (a, b) {
        return this.attrTween(a, bF(a, b))
    }, bG.attrTween = function (a, b) {
        function d(a, d) {
            var e = b.call(this, a, d, this.getAttribute(c));
            return e === bD ? (this.removeAttribute(c), null) : e && function (a) {
                this.setAttribute(c, e(a))
            }
        }

        function e(a, d) {
            var e = b.call(this, a, d, this.getAttributeNS(c.space, c.local));
            return e === bD ? (this.removeAttributeNS(c.space, c.local), null) : e && function (a) {
                this.setAttributeNS(c.space, c.local, e(a))
            }
        }

        var c = d3.ns.qualify(a);
        return this.tween("attr." + a, c.local ? e : d)
    }, bG.style = function (a, b, c) {
        return arguments.length < 3 && (c = ""), this.styleTween(a, bF(a, b), c)
    }, bG.styleTween = function (a, b, c) {
        return arguments.length < 3 && (c = ""), this.tween("style." + a, function (d, e) {
            var f = b.call(this, d, e, window.getComputedStyle(this, null).getPropertyValue(a));
            return f === bD ? (this.style.removeProperty(a), null) : f && function (b) {
                this.style.setProperty(a, f(b), c)
            }
        })
    }, bG.text = function (a) {
        return this.tween("text", function (b, c) {
            this.textContent = typeof a == "function" ? a.call(this, b, c) : a
        })
    }, bG.remove = function () {
        return this.each("end.transition", function () {
            var a;
            !this.__transition__ && (a = this.parentNode) && a.removeChild(this)
        })
    }, bG.delay = function (a) {
        var b = this;
        return b.each(typeof a == "function" ? function (c, d, e) {
            b[e][d].delay = a.apply(this, arguments) | 0
        } : (a |= 0, function (c, d, e) {
            b[e][d].delay = a
        }))
    }, bG.duration = function (a) {
        var b = this;
        return b.each(typeof a == "function" ? function (c, d, e) {
            b[e][d].duration = Math.max(1, a.apply(this, arguments) | 0)
        } : (a = Math.max(1, a | 0), function (c, d, e) {
            b[e][d].duration = a
        }))
    }, bG.transition = function () {
        return this.select(n)
    };
    var bL = null, bM, bN;
    d3.timer = function (a, b, c) {
        var d = !1, e, f = bL;
        if (arguments.length < 3) {
            if (arguments.length < 2) b = 0; else if (!isFinite(b)) return;
            c = Date.now()
        }
        while (f) {
            if (f.callback === a) {
                f.then = c, f.delay = b, d = !0;
                break
            }
            e = f, f = f.next
        }
        d || (bL = {callback: a, then: c, delay: b, next: bL}), bM || (bN = clearTimeout(bN), bM = 1, bQ(bO))
    }, d3.timer.flush = function () {
        var a, b = Date.now(), c = bL;
        while (c) a = b - c.then, c.delay || (c.flush = c.callback(a)), c = c.next;
        bP()
    };
    var bQ = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
        setTimeout(a, 17)
    };
    d3.transform = function (a) {
        var b = document.createElementNS(d3.ns.prefix.svg, "g"), c = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};
        return (d3.transform = function (a) {
            b.setAttribute("transform", a);
            var d = b.transform.baseVal.consolidate();
            return new bR(d ? d.matrix : c)
        })(a)
    }, bR.prototype.toString = function () {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var bV = 180 / Math.PI;
    d3.mouse = function (a) {
        return bX(a, X())
    };
    var bW = /WebKit/.test(navigator.userAgent) ? -1 : 0;
    d3.touches = function (a, b) {
        return arguments.length < 2 && (b = X().touches), b ? f(b).map(function (b) {
            var c = bX(a, b);
            return c.identifier = b.identifier, c
        }) : []
    }, d3.scale = {}, d3.scale.linear = function () {
        return cb([0, 1], [0, 1], d3.interpolate, !1)
    }, d3.scale.log = function () {
        return cj(d3.scale.linear(), cl)
    };
    var ck = d3.format(".0e");
    cl.pow = function (a) {
        return Math.pow(10, a)
    }, cm.pow = function (a) {
        return -Math.pow(10, -a)
    }, d3.scale.pow = function () {
        return cn(d3.scale.linear(), 1)
    }, d3.scale.sqrt = function () {
        return d3.scale.pow().exponent(.5)
    }, d3.scale.ordinal = function () {
        return cp([], {t: "range", x: []})
    }, d3.scale.category10 = function () {
        return d3.scale.ordinal().range(cq)
    }, d3.scale.category20 = function () {
        return d3.scale.ordinal().range(cr)
    }, d3.scale.category20b = function () {
        return d3.scale.ordinal().range(cs)
    }, d3.scale.category20c = function () {
        return d3.scale.ordinal().range(ct)
    };
    var cq = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
        cr = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"],
        cs = ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"],
        ct = ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"];
    d3.scale.quantile = function () {
        return cu([], [])
    }, d3.scale.quantize = function () {
        return cv(0, 1, [0, 1])
    }, d3.scale.identity = function () {
        return cw([0, 1])
    }, d3.svg = {}, d3.svg.arc = function () {
        function e() {
            var e = a.apply(this, arguments), f = b.apply(this, arguments), g = c.apply(this, arguments) + cx,
                h = d.apply(this, arguments) + cx, i = (h < g && (i = g, g = h, h = i), h - g),
                j = i < Math.PI ? "0" : "1", k = Math.cos(g), l = Math.sin(g), m = Math.cos(h), n = Math.sin(h);
            return i >= cy ? e ? "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "M0," + e + "A" + e + "," + e + " 0 1,0 0," + -e + "A" + e + "," + e + " 0 1,0 0," + e + "Z" : "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "Z" : e ? "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L" + e * m + "," + e * n + "A" + e + "," + e + " 0 " + j + ",0 " + e * k + "," + e * l + "Z" : "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L0,0" + "Z"
        }

        var a = cz, b = cA, c = cB, d = cC;
        return e.innerRadius = function (b) {
            return arguments.length ? (a = d3.functor(b), e) : a
        }, e.outerRadius = function (a) {
            return arguments.length ? (b = d3.functor(a), e) : b
        }, e.startAngle = function (a) {
            return arguments.length ? (c = d3.functor(a), e) : c
        }, e.endAngle = function (a) {
            return arguments.length ? (d = d3.functor(a), e) : d
        }, e.centroid = function () {
            var e = (a.apply(this, arguments) + b.apply(this, arguments)) / 2,
                f = (c.apply(this, arguments) + d.apply(this, arguments)) / 2 + cx;
            return [Math.cos(f) * e, Math.sin(f) * e]
        }, e
    };
    var cx = -Math.PI / 2, cy = 2 * Math.PI - 1e-6;
    d3.svg.line = function () {
        return cD(Object)
    };
    var cH = "linear", cI = d3.map({
        linear: cJ,
        "step-before": cK,
        "step-after": cL,
        basis: cR,
        "basis-open": cS,
        "basis-closed": cT,
        bundle: cU,
        cardinal: cO,
        "cardinal-open": cM,
        "cardinal-closed": cN,
        monotone: db
    }), cW = [0, 2 / 3, 1 / 3, 0], cX = [0, 1 / 3, 2 / 3, 0], cY = [0, 1 / 6, 2 / 3, 1 / 6];
    d3.svg.line.radial = function () {
        var a = cD(dc);
        return a.radius = a.x, delete a.x, a.angle = a.y, delete a.y, a
    }, cK.reverse = cL, cL.reverse = cK, d3.svg.area = function () {
        return dd(Object)
    }, d3.svg.area.radial = function () {
        var a = dd(dc);
        return a.radius = a.x, delete a.x, a.innerRadius = a.x0, delete a.x0, a.outerRadius = a.x1, delete a.x1, a.angle = a.y, delete a.y, a.startAngle = a.y0, delete a.y0, a.endAngle = a.y1, delete a.y1, a
    }, d3.svg.chord = function () {
        function f(c, d) {
            var e = g(this, a, c, d), f = g(this, b, c, d);
            return "M" + e.p0 + i(e.r, e.p1, e.a1 - e.a0) + (h(e, f) ? j(e.r, e.p1, e.r, e.p0) : j(e.r, e.p1, f.r, f.p0) + i(f.r, f.p1, f.a1 - f.a0) + j(f.r, f.p1, e.r, e.p0)) + "Z"
        }

        function g(a, b, f, g) {
            var h = b.call(a, f, g), i = c.call(a, h, g), j = d.call(a, h, g) + cx, k = e.call(a, h, g) + cx;
            return {r: i, a0: j, a1: k, p0: [i * Math.cos(j), i * Math.sin(j)], p1: [i * Math.cos(k), i * Math.sin(k)]}
        }

        function h(a, b) {
            return a.a0 == b.a0 && a.a1 == b.a1
        }

        function i(a, b, c) {
            return "A" + a + "," + a + " 0 " + +(c > Math.PI) + ",1 " + b
        }

        function j(a, b, c, d) {
            return "Q 0,0 " + d
        }

        var a = dg, b = dh, c = di, d = cB, e = cC;
        return f.radius = function (a) {
            return arguments.length ? (c = d3.functor(a), f) : c
        }, f.source = function (b) {
            return arguments.length ? (a = d3.functor(b), f) : a
        }, f.target = function (a) {
            return arguments.length ? (b = d3.functor(a), f) : b
        }, f.startAngle = function (a) {
            return arguments.length ? (d = d3.functor(a), f) : d
        }, f.endAngle = function (a) {
            return arguments.length ? (e = d3.functor(a), f) : e
        }, f
    }, d3.svg.diagonal = function () {
        function d(d, e) {
            var f = a.call(this, d, e), g = b.call(this, d, e), h = (f.y + g.y) / 2,
                i = [f, {x: f.x, y: h}, {x: g.x, y: h}, g];
            return i = i.map(c), "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
        }

        var a = dg, b = dh, c = dl;
        return d.source = function (b) {
            return arguments.length ? (a = d3.functor(b), d) : a
        }, d.target = function (a) {
            return arguments.length ? (b = d3.functor(a), d) : b
        }, d.projection = function (a) {
            return arguments.length ? (c = a, d) : c
        }, d
    }, d3.svg.diagonal.radial = function () {
        var a = d3.svg.diagonal(), b = dl, c = a.projection;
        return a.projection = function (a) {
            return arguments.length ? c(dm(b = a)) : b
        }, a
    }, d3.svg.mouse = d3.mouse, d3.svg.touches = d3.touches, d3.svg.symbol = function () {
        function c(c, d) {
            return (dr.get(a.call(this, c, d)) || dq)(b.call(this, c, d))
        }

        var a = dp, b = dn;
        return c.type = function (b) {
            return arguments.length ? (a = d3.functor(b), c) : a
        }, c.size = function (a) {
            return arguments.length ? (b = d3.functor(a), c) : b
        }, c
    };
    var dr = d3.map({
        circle: dq, cross: function (a) {
            var b =
                Math.sqrt(a / 5) / 2;
            return "M" + -3 * b + "," + -b + "H" + -b + "V" + -3 * b + "H" + b + "V" + -b + "H" + 3 * b + "V" + b + "H" + b + "V" + 3 * b + "H" + -b + "V" + b + "H" + -3 * b + "Z"
        }, diamond: function (a) {
            var b = Math.sqrt(a / (2 * dt)), c = b * dt;
            return "M0," + -b + "L" + c + ",0" + " 0," + b + " " + -c + ",0" + "Z"
        }, square: function (a) {
            var b = Math.sqrt(a) / 2;
            return "M" + -b + "," + -b + "L" + b + "," + -b + " " + b + "," + b + " " + -b + "," + b + "Z"
        }, "triangle-down": function (a) {
            var b = Math.sqrt(a / ds), c = b * ds / 2;
            return "M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z"
        }, "triangle-up": function (a) {
            var b = Math.sqrt(a / ds), c = b * ds / 2;
            return "M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z"
        }
    });
    d3.svg.symbolTypes = dr.keys();
    var ds = Math.sqrt(3), dt = Math.tan(30 * Math.PI / 180);
    d3.svg.axis = function () {
        function k(k) {
            k.each(function (l, m, n) {
                var o = d3.select(this), p = k.delay ? function (a) {
                        var b = bI;
                        try {
                            return bI = k.id, a.transition().delay(k[n][m].delay).duration(k[n][m].duration).ease(k.ease())
                        } finally {
                            bI = b
                        }
                    } : Object, q = h == null ? a.ticks ? a.ticks.apply(a, g) : a.domain() : h,
                    r = i == null ? a.tickFormat ? a.tickFormat.apply(a, g) : String : i, s = dw(a, q, j),
                    t = o.selectAll(".minor").data(s, String),
                    u = t.enter().insert("line", "g").attr("class", "tick minor").style("opacity", 1e-6),
                    v = p(t.exit()).style("opacity", 1e-6).remove(), w = p(t).style("opacity", 1),
                    x = o.selectAll("g").data(q, String), y = x.enter().insert("g", "path").style("opacity", 1e-6),
                    z = p(x.exit()).style("opacity", 1e-6).remove(), A = p(x).style("opacity", 1), B, C = b$(a),
                    D = o.selectAll(".domain").data([0]), E = D.enter().append("path").attr("class", "domain"),
                    F = p(D), G = a.copy(), H = this.__chart__ || G;
                this.__chart__ = G, y.append("line").attr("class", "tick"), y.append("text"), A.select("text").text(r);
                switch (b) {
                    case"bottom":
                        B = du, u.attr("y2", d), w.attr("x2", 0).attr("y2", d), y.select("line").attr("y2", c), y.select("text").attr("y", Math.max(c, 0) + f), A.select("line").attr("x2", 0).attr("y2", c), A.select("text").attr("x", 0).attr("y", Math.max(c, 0) + f).attr("dy", ".71em").attr("text-anchor", "middle"), F.attr("d", "M" + C[0] + "," + e + "V0H" + C[1] + "V" + e);
                        break;
                    case"top":
                        B = du, u.attr("y2", -d), w.attr("x2", 0).attr("y2", -d), y.select("line").attr("y2", -c), y.select("text").attr("y", -(Math.max(c, 0) + f)), A.select("line").attr("x2", 0).attr("y2", -c), A.select("text").attr("x", 0).attr("y", -(Math.max(c, 0) + f)).attr("dy", "0em").attr("text-anchor", "middle"), F.attr("d", "M" + C[0] + "," + -e + "V0H" + C[1] + "V" + -e);
                        break;
                    case"left":
                        B = dv, u.attr("x2", -d), w.attr("x2", -d).attr("y2", 0), y.select("line").attr("x2", -c), y.select("text").attr("x", -(Math.max(c, 0) + f)), A.select("line").attr("x2", -c).attr("y2", 0), A.select("text").attr("x", -(Math.max(c, 0) + f)).attr("y", 0).attr("dy", ".32em").attr("text-anchor", "end"), F.attr("d", "M" + -e + "," + C[0] + "H0V" + C[1] + "H" + -e);
                        break;
                    case"right":
                        B = dv, u.attr("x2", d), w.attr("x2", d).attr("y2", 0), y.select("line").attr("x2", c), y.select("text").attr("x", Math.max(c, 0) + f), A.select("line").attr("x2", c).attr("y2", 0), A.select("text").attr("x", Math.max(c, 0) + f).attr("y", 0).attr("dy", ".32em").attr("text-anchor", "start"), F.attr("d", "M" + e + "," + C[0] + "H0V" + C[1] + "H" + e)
                }
                if (a.ticks) y.call(B, H), A.call(B, G), z.call(B, G), u.call(B, H), w.call(B, G), v.call(B, G); else {
                    var I = G.rangeBand() / 2, J = function (a) {
                        return G(a) + I
                    };
                    y.call(B, J), A.call(B, J)
                }
            })
        }

        var a = d3.scale.linear(), b = "bottom", c = 6, d = 6, e = 6, f = 3, g = [10], h = null, i, j = 0;
        return k.scale = function (b) {
            return arguments.length ? (a = b, k) : a
        }, k.orient = function (a) {
            return arguments.length ? (b = a, k) : b
        }, k.ticks = function () {
            return arguments.length ? (g = arguments, k) : g
        }, k.tickValues = function (a) {
            return arguments.length ? (h = a, k) : h
        }, k.tickFormat = function (a) {
            return arguments.length ? (i = a, k) : i
        }, k.tickSize = function (a, b, f) {
            if (!arguments.length) return c;
            var g = arguments.length - 1;
            return c = +a, d = g > 1 ? +b : c, e = g > 0 ? +arguments[g] : c, k
        }, k.tickPadding = function (a) {
            return arguments.length ? (f = +a, k) : f
        }, k.tickSubdivide = function (a) {
            return arguments.length ? (j = +a, k) : j
        }, k
    }, d3.svg.brush = function () {
        function f(a) {
            a.each(function () {
                var a = d3.select(this), e = a.selectAll(".background").data([0]), k = a.selectAll(".extent").data([0]),
                    l = a.selectAll(".resize").data(d, String), m;
                a.style("pointer-events", "all").on("mousedown.brush", j).on("touchstart.brush", j), e.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), k.enter().append("rect").attr("class", "extent").style("cursor", "move"), l.enter().append("g").attr("class", function (a) {
                    return "resize " + a
                }).style("cursor", function (a) {
                    return dx[a]
                }).append("rect").attr("x", function (a) {
                    return /[ew]$/.test(a) ? -3 : null
                }).attr("y", function (a) {
                    return /^[ns]/.test(a) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), l.style("display", f.empty() ? "none" : null), l.exit().remove(), b && (m = b$(b), e.attr("x", m[0]).attr("width", m[1] - m[0]), h(a)), c && (m = b$(c), e.attr("y", m[0]).attr("height", m[1] - m[0]), i(a)), g(a)
            })
        }

        function g(a) {
            a.selectAll(".resize").attr("transform", function (a) {
                return "translate(" + e[+/e$/.test(a)][0] + "," + e[+/^s/.test(a)][1] + ")"
            })
        }

        function h(a) {
            a.select(".extent").attr("x", e[0][0]), a.selectAll(".extent,.n>rect,.s>rect").attr("width", e[1][0] - e[0][0])
        }

        function i(a) {
            a.select(".extent").attr("y", e[0][1]), a.selectAll(".extent,.e>rect,.w>rect").attr("height", e[1][1] - e[0][1])
        }

        function j() {
            function w() {
                var a = d3.event.changedTouches;
                return a ? d3.touches(d, a)[0] : d3.mouse(d)
            }

            function x() {
                d3.event.keyCode == 32 && (p || (q = null, r[0] -= e[1][0], r[1] -= e[1][1], p = 2), W())
            }

            function y() {
                d3.event.keyCode == 32 && p == 2 && (r[0] += e[1][0], r[1] += e[1][1], p = 0, W())
            }

            function z() {
                var a = w(), d = !1;
                s && (a[0] += s[0], a[1] += s[1]), p || (d3.event.altKey ? (q || (q = [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]), r[0] = e[+(a[0] < q[0])][0], r[1] = e[+(a[1] < q[1])][1]) : q = null), n && A(a, b, 0) && (h(l), d = !0), o && A(a, c, 1) && (i(l), d = !0), d && (g(l), k({type: "brush"}))
            }

            function A(a, b, c) {
                var d = b$(b), f = d[0], g = d[1], h = r[c], i = e[1][c] - e[0][c], j, k;
                p && (f -= h, g -= i + h), j = Math.max(f, Math.min(g, a[c])), p ? k = (j += h) + i : (q && (h = Math.max(f, Math.min(g, 2 * q[c] - j))), h < j ? (k = j, j = h) : k = h);
                if (e[0][c] !== j || e[1][c] !== k) return e[0][c] = j, e[1][c] = k, !0
            }

            function B() {
                z(), l.style("pointer-events", "all").selectAll(".resize").style("display", f.empty() ? "none" : null), d3.select("body").style("cursor", null), t.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), k({type: "brushend"}), W()
            }

            var d = this, j = d3.select(d3.event.target), k = a.of(d, arguments), l = d3.select(d), m = j.datum(),
                n = !/^(n|s)$/.test(m) && b, o = !/^(e|w)$/.test(m) && c, p = j.classed("extent"), q, r = w(), s,
                t = d3.select(window).on("mousemove.brush", z).on("mouseup.brush", B).on("touchmove.brush", z).on("touchend.brush", B).on("keydown.brush", x).on("keyup.brush", y);
            if (p) r[0] = e[0][0] - r[0], r[1] = e[0][1] - r[1]; else if (m) {
                var u = +/w$/.test(m), v = +/^n/.test(m);
                s = [e[1 - u][0] - r[0], e[1 - v][1] - r[1]], r[0] = e[u][0], r[1] = e[v][1]
            } else d3.event.altKey && (q = r.slice());
            l.style("pointer-events", "none").selectAll(".resize").style("display", null), d3.select("body").style("cursor", j.style("cursor")), k({type: "brushstart"}), z(), W()
        }

        var a = Y(f, "brushstart", "brush", "brushend"), b, c, d = dy[0], e = [[0, 0], [0, 0]];
        return f.x = function (a) {
            return arguments.length ? (b = a, d = dy[!b << 1 | !c], f) : b
        }, f.y = function (a) {
            return arguments.length ? (c = a, d = dy[!b << 1 | !c], f) : c
        }, f.extent = function (a) {
            var d, g, h, i, j;
            return arguments.length ? (b && (d = a[0], g = a[1], c && (d = d[0], g = g[0]), b.invert && (d = b(d), g = b(g)), g < d && (j = d, d = g, g = j), e[0][0] = d, e[1][0] = g), c && (h = a[0], i = a[1], b && (h = h[1], i = i[1]), c.invert && (h = c(h), i = c(i)), i < h && (j = h, h = i, i = j), e[0][1] = h, e[1][1] = i), f) : (b && (d = e[0][0], g = e[1][0], b.invert && (d = b.invert(d), g = b.invert(g)), g < d && (j = d, d = g, g = j)), c && (h = e[0][1], i = e[1][1], c.invert && (h = c.invert(h), i = c.invert(i)), i < h && (j = h, h = i, i = j)), b && c ? [[d, h], [g, i]] : b ? [d, g] : c && [h, i])
        }, f.clear = function () {
            return e[0][0] = e[0][1] = e[1][0] = e[1][1] = 0, f
        }, f.empty = function () {
            return b && e[0][0] === e[1][0] || c && e[0][1] === e[1][1]
        }, d3.rebind(f, a, "on")
    };
    var dx = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    }, dy = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
    d3.behavior = {}, d3.behavior.drag = function () {
        function c() {
            this.on("mousedown.drag", d).on("touchstart.drag", d)
        }

        function d() {
            function j() {
                var a = c.parentNode, b = d3.event.changedTouches;
                return b ? d3.touches(a, b)[0] : d3.mouse(a)
            }

            function k() {
                if (!c.parentNode) return l();
                var a = j(), b = a[0] - g[0], e = a[1] - g[1];
                h |= b | e, g = a, W(), d({type: "drag", x: a[0] + f[0], y: a[1] + f[1], dx: b, dy: e})
            }

            function l() {
                d({type: "dragend"}), h && (W(), d3.event.target === e && i.on("click.drag", m, !0)), i.on("mousemove.drag", null).on("touchmove.drag", null).on("mouseup.drag", null).on("touchend.drag", null)
            }

            function m() {
                W(), i.on("click.drag", null)
            }

            var c = this, d = a.of(c, arguments), e = d3.event.target, f, g = j(), h = 0,
                i = d3.select(window).on("mousemove.drag", k).on("touchmove.drag", k).on("mouseup.drag", l, !0).on("touchend.drag", l, !0);
            b ? (f = b.apply(c, arguments), f = [f.x - g[0], f.y - g[1]]) : f = [0, 0], d({type: "dragstart"})
        }

        var a = Y(c, "drag", "dragstart", "dragend"), b = null;
        return c.origin = function (a) {
            return arguments.length ? (b = a, c) : b
        }, d3.rebind(c, a, "on")
    }, d3.behavior.zoom = function () {
        function l() {
            this.on("mousedown.zoom", r).on("mousewheel.zoom", s).on("mousemove.zoom", t).on("DOMMouseScroll.zoom", s).on("dblclick.zoom", u).on("touchstart.zoom", v).on("touchmove.zoom", w).on("touchend.zoom", v)
        }

        function m(b) {
            return [(b[0] - a[0]) / c, (b[1] - a[1]) / c]
        }

        function n(b) {
            return [b[0] * c + a[0], b[1] * c + a[1]]
        }

        function o(a) {
            c = Math.max(e[0], Math.min(e[1], a))
        }

        function p(b, c) {
            c = n(c), a[0] += b[0] - c[0], a[1] += b[1] - c[1]
        }

        function q(b) {
            h && h.domain(g.range().map(function (b) {
                return (b - a[0]) / c
            }).map(g.invert)), j && j.domain(i.range().map(function (b) {
                return (b - a[1]) / c
            }).map(i.invert)), d3.event.preventDefault(), b({type: "zoom", scale: c, translate: a})
        }

        function r() {
            function h() {
                d = 1, p(d3.mouse(a), g), q(b)
            }

            function i() {
                d && W(), e.on("mousemove.zoom", null).on("mouseup.zoom", null), d && d3.event.target === c && e.on("click.zoom", j)
            }

            function j() {
                W(), e.on("click.zoom", null)
            }

            var a = this, b = f.of(a, arguments), c = d3.event.target, d = 0,
                e = d3.select(window).on("mousemove.zoom", h).on("mouseup.zoom", i), g = m(d3.mouse(a));
            window.focus(), W()
        }

        function s() {
            b || (b = m(d3.mouse(this))), o(Math.pow(2, dB() * .002) * c), p(d3.mouse(this), b), q(f.of(this, arguments))
        }

        function t() {
            b = null
        }

        function u() {
            var a = d3.mouse(this), b = m(a);
            o(d3.event.shiftKey ? c / 2 : c * 2), p(a, b), q(f.of(this, arguments))
        }

        function v() {
            var a = d3.touches(this), e = Date.now();
            d = c, b = {}, a.forEach(function (a) {
                b[a.identifier] = m(a)
            }), W();
            if (a.length === 1 && e - k < 500) {
                var g = a[0], h = m(a[0]);
                o(c * 2), p(g, h), q(f.of(this, arguments))
            }
            k = e
        }

        function w() {
            var a = d3.touches(this), c = a[0], e = b[c.identifier];
            if (g = a[1]) {
                var g, h = b[g.identifier];
                c = [(c[0] + g[0]) / 2, (c[1] + g[1]) / 2], e = [(e[0] + h[0]) / 2, (e[1] + h[1]) / 2], o(d3.event.scale * d)
            }
            p(c, e), q(f.of(this, arguments))
        }

        var a = [0, 0], b, c = 1, d, e = dA, f = Y(l, "zoom"), g, h, i, j, k;
        return l.translate = function (b) {
            return arguments.length ? (a = b.map(Number), l) : a
        }, l.scale = function (a) {
            return arguments.length ? (c = +a, l) : c
        }, l.scaleExtent = function (a) {
            return arguments.length ? (e = a == null ? dA : a.map(Number), l) : e
        }, l.x = function (a) {
            return arguments.length ? (h = a, g = a.copy(), l) : h
        }, l.y = function (a) {
            return arguments.length ? (j = a, i = a.copy(), l) : j
        }, d3.rebind(l, f, "on")
    };
    var dz, dA = [0, Infinity];
    d3.layout = {}, d3.layout.bundle = function () {
        return function (a) {
            var b = [], c = -1, d = a.length;
            while (++c < d) b.push(dC(a[c]));
            return b
        }
    }, d3.layout.chord = function () {
        function j() {
            var a = {}, j = [], l = d3.range(e), m = [], n, o, p, q, r;
            b = [], c = [], n = 0, q = -1;
            while (++q < e) {
                o = 0, r = -1;
                while (++r < e) o += d[q][r];
                j.push(o), m.push(d3.range(e)), n += o
            }
            g && l.sort(function (a, b) {
                return g(j[a], j[b])
            }), h && m.forEach(function (a, b) {
                a.sort(function (a, c) {
                    return h(d[b][a], d[b][c])
                })
            }), n = (2 * Math.PI - f * e) / n, o = 0, q = -1;
            while (++q < e) {
                p = o, r = -1;
                while (++r < e) {
                    var s = l[q], t = m[s][r], u = d[s][t], v = o, w = o += u * n;
                    a[s + "-" + t] = {index: s, subindex: t, startAngle: v, endAngle: w, value: u}
                }
                c.push({index: s, startAngle: p, endAngle: o, value: (o - p) / n}), o += f
            }
            q = -1;
            while (++q < e) {
                r = q - 1;
                while (++r < e) {
                    var x = a[q + "-" + r], y = a[r + "-" + q];
                    (x.value || y.value) && b.push(x.value < y.value ? {source: y, target: x} : {source: x, target: y})
                }
            }
            i && k()
        }

        function k() {
            b.sort(function (a, b) {
                return i((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2)
            })
        }

        var a = {}, b, c, d, e, f = 0, g, h, i;
        return a.matrix = function (f) {
            return arguments.length ? (e = (d = f) && d.length, b = c = null, a) : d
        }, a.padding = function (d) {
            return arguments.length ? (f = d, b = c = null, a) : f
        }, a.sortGroups = function (d) {
            return arguments.length ? (g = d, b = c = null, a) : g
        }, a.sortSubgroups = function (c) {
            return arguments.length ? (h = c, b = null, a) : h
        }, a.sortChords = function (c) {
            return arguments.length ? (i = c, b && k(), a) : i
        }, a.chords = function () {
            return b || j(), b
        }, a.groups = function () {
            return c || j(), c
        }, a
    }, d3.layout.force = function () {
        function r(a) {
            return function (b, c, d, e, f) {
                if (b.point !== a) {
                    var g = b.cx - a.x, h = b.cy - a.y, i = 1 / Math.sqrt(g * g + h * h);
                    if ((e - c) * i < k) {
                        var j = b.charge * i * i;
                        return a.px -= g * j, a.py -= h * j, !0
                    }
                    if (b.point && isFinite(i)) {
                        var j = b.pointCharge * i * i;
                        a.px -= g * j, a.py -= h * j
                    }
                }
                return !b.charge
            }
        }

        function s(b) {
            dH(dG = b), dF = a
        }

        var a = {}, b = d3.dispatch("start", "tick", "end"), c = [1, 1], d, e, f = .9, g = dM, h = dN, i = -30, j = .1,
            k = .8, l, m = [], n = [], o, p, q;
        return a.tick = function () {
            if ((e *= .99) < .005) return b.end({type: "end", alpha: e = 0}), !0;
            var a = m.length, d = n.length, g, h, k, l, s, t, u, v, w;
            for (h = 0; h < d; ++h) {
                k = n[h], l = k.source, s = k.target, v = s.x - l.x, w = s.y - l.y;
                if (t = v * v + w * w) t = e * p[h] * ((t = Math.sqrt(t)) - o[h]) / t, v *= t, w *= t, s.x -= v * (u = l.weight / (s.weight + l.weight)), s.y -= w * u, l.x += v * (u = 1 - u), l.y += w * u
            }
            if (u = e * j) {
                v = c[0] / 2, w = c[1] / 2, h = -1;
                if (u) while (++h < a) k = m[h], k.x += (v - k.x) * u, k.y += (w - k.y) * u
            }
            if (i) {
                dL(g = d3.geom.quadtree(m), e, q), h = -1;
                while (++h < a) (k = m[h]).fixed || g.visit(r(k))
            }
            h = -1;
            while (++h < a) k = m[h], k.fixed ? (k.x = k.px, k.y = k.py) : (k.x -= (k.px - (k.px = k.x)) * f, k.y -= (k.py - (k.py = k.y)) * f);
            b.tick({type: "tick", alpha: e})
        }, a.nodes = function (b) {
            return arguments.length ? (m = b, a) : m
        }, a.links = function (b) {
            return arguments.length ? (n = b, a) : n
        }, a.size = function (b) {
            return arguments.length ? (c = b, a) : c
        }, a.linkDistance = function (b) {
            return arguments.length ? (g = d3.functor(b), a) : g
        }, a.distance = a.linkDistance, a.linkStrength = function (b) {
            return arguments.length ? (h = d3.functor(b), a) : h
        }, a.friction = function (b) {
            return arguments.length ? (f = b, a) : f
        }, a.charge = function (b) {
            return arguments.length ? (i = typeof b == "function" ? b : +b, a) : i
        }, a.gravity = function (b) {
            return arguments.length ? (j = b, a) : j
        }, a.theta = function (b) {
            return arguments.length ? (k = b, a) : k
        }, a.alpha = function (c) {
            return arguments.length ? (e ? c > 0 ? e = c : e = 0 : c > 0 && (b.start({
                type: "start",
                alpha: e = c
            }), d3.timer(a.tick)), a) : e
        }, a.start = function () {
            function s(a, c) {
                var d = t(b), e = -1, f = d.length, g;
                while (++e < f) if (!isNaN(g = d[e][a])) return g;
                return Math.random() * c
            }

            function t() {
                if (!l) {
                    l = [];
                    for (d = 0; d < e; ++d) l[d] = [];
                    for (d = 0; d < f; ++d) {
                        var a = n[d];
                        l[a.source.index].push(a.target), l[a.target.index].push(a.source)
                    }
                }
                return l[b]
            }

            var b, d, e = m.length, f = n.length, j = c[0], k = c[1], l, r;
            for (b = 0; b < e; ++b) (r = m[b]).index = b, r.weight = 0;
            o = [], p = [];
            for (b = 0; b < f; ++b) r = n[b], typeof r.source == "number" && (r.source = m[r.source]), typeof r.target == "number" && (r.target = m[r.target]), o[b] = g.call(this, r, b), p[b] = h.call(this, r, b), ++r.source.weight, ++r.target.weight;
            for (b = 0; b < e; ++b) r = m[b], isNaN(r.x) && (r.x = s("x", j)), isNaN(r.y) && (r.y = s("y", k)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
            q = [];
            if (typeof i == "function") for (b = 0; b < e; ++b) q[b] = +i.call(this, m[b], b); else for (b = 0; b < e; ++b) q[b] = i;
            return a.resume()
        }, a.resume = function () {
            return a.alpha(.1)
        }, a.stop = function () {
            return a.alpha(0)
        }, a.drag = function () {
            d || (d = d3.behavior.drag().origin(Object).on("dragstart", s).on("drag", dK).on("dragend", dJ)), this.on("mouseover.force", dH).on("mouseout.force", dI).call(d)
        }, d3.rebind(a, b, "on")
    };
    var dF, dG;
    d3.layout.partition = function () {
        function c(a, b, d, e) {
            var f = a.children;
            a.x = b, a.y = a.depth * e, a.dx = d, a.dy = e;
            if (f && (h = f.length)) {
                var g = -1, h, i, j;
                d = a.value ? d / a.value : 0;
                while (++g < h) c(i = f[g], b, j = i.value * d, e), b += j
            }
        }

        function d(a) {
            var b = a.children, c = 0;
            if (b && (f = b.length)) {
                var e = -1, f;
                while (++e < f) c = Math.max(c, d(b[e]))
            }
            return 1 + c
        }

        function e(e, f) {
            var g = a.call(this, e, f);
            return c(g[0], 0, b[0], b[1] / d(g[0])), g
        }

        var a = d3.layout.hierarchy(), b = [1, 1];
        return e.size = function (a) {
            return arguments.length ? (b = a, e) : b
        }, ea(e, a)
    }, d3.layout.pie = function () {
        function f(g, h) {
            var i = g.map(function (b, c) {
                    return +a.call(f, b, c)
                }), j = +(typeof c == "function" ? c.apply(this, arguments) : c),
                k = ((typeof e == "function" ? e.apply(this, arguments) : e) - c) / d3.sum(i), l = d3.range(g.length);
            b != null && l.sort(b === dO ? function (a, b) {
                return i[b] - i[a]
            } : function (a, c) {
                return b(g[a], g[c])
            });
            var m = [];
            return l.forEach(function (a) {
                m[a] = {data: g[a], value: d = i[a], startAngle: j, endAngle: j += d * k}
            }), m
        }

        var a = Number, b = dO, c = 0, e = 2 * Math.PI;
        return f.value = function (b) {
            return arguments.length ? (a = b, f) : a
        }, f.sort = function (a) {
            return arguments.length ? (b = a, f) : b
        }, f.startAngle = function (a) {
            return arguments.length ? (c = a, f) : c
        }, f.endAngle = function (a) {
            return arguments.length ? (e = a, f) : e
        }, f
    };
    var dO = {};
    d3.layout.stack = function () {
        function g(h, i) {
            var j = h.map(function (b, c) {
                return a.call(g, b, c)
            }), k = j.map(function (a, b) {
                return a.map(function (a, b) {
                    return [e.call(g, a, b), f.call(g, a, b)]
                })
            }), l = b.call(g, k, i);
            j = d3.permute(j, l), k = d3.permute(k, l);
            var m = c.call(g, k, i), n = j.length, o = j[0].length, p, q, r;
            for (q = 0; q < o; ++q) {
                d.call(g, j[0][q], r = m[q], k[0][q][1]);
                for (p = 1; p < n; ++p) d.call(g, j[p][q], r += k[p - 1][q][1], k[p][q][1])
            }
            return h
        }

        var a = Object, b = dU, c = dV, d = dR, e = dP, f = dQ;
        return g.values = function (b) {
            return arguments.length ? (a = b, g) : a
        }, g.order = function (a) {
            return arguments.length ? (b = typeof a == "function" ? a : dS.get(a) || dU, g) : b
        }, g.offset = function (a) {
            return arguments.length ? (c = typeof a == "function" ? a : dT.get(a) || dV, g) : c
        }, g.x = function (a) {
            return arguments.length ? (e = a, g) : e
        }, g.y = function (a) {
            return arguments.length ? (f = a, g) : f
        }, g.out = function (a) {
            return arguments.length ? (d = a, g) : d
        }, g
    };
    var dS = d3.map({
        "inside-out": function (a) {
            var b = a.length, c, d, e = a.map(dW), f = a.map(dX), g = d3.range(b).sort(function (a, b) {
                return e[a] - e[b]
            }), h = 0, i = 0, j = [], k = [];
            for (c = 0; c < b; ++c) d = g[c], h < i ? (h += f[d], j.push(d)) : (i += f[d], k.push(d));
            return k.reverse().concat(j)
        }, reverse: function (a) {
            return d3.range(a.length).reverse()
        }, "default": dU
    }), dT = d3.map({
        silhouette: function (a) {
            var b = a.length, c = a[0].length, d = [], e = 0, f, g, h, i = [];
            for (g = 0; g < c; ++g) {
                for (f = 0, h = 0; f < b; f++) h += a[f][g][1];
                h > e && (e = h), d.push(h)
            }
            for (g = 0; g < c; ++g) i[g] = (e - d[g]) / 2;
            return i
        }, wiggle: function (a) {
            var b = a.length, c = a[0], d = c.length, e = 0, f, g, h, i, j, k, l, m, n, o = [];
            o[0] = m = n = 0;
            for (g = 1; g < d; ++g) {
                for (f = 0, i = 0; f < b; ++f) i += a[f][g][1];
                for (f = 0, j = 0, l = c[g][0] - c[g - 1][0]; f < b; ++f) {
                    for (h = 0, k = (a[f][g][1] - a[f][g - 1][1]) / (2 * l); h < f; ++h) k += (a[h][g][1] - a[h][g - 1][1]) / l;
                    j += k * a[f][g][1]
                }
                o[g] = m -= i ? j / i * l : 0, m < n && (n = m)
            }
            for (g = 0; g < d; ++g) o[g] -= n;
            return o
        }, expand: function (a) {
            var b = a.length, c = a[0].length, d = 1 / b, e, f, g, h = [];
            for (f = 0; f < c; ++f) {
                for (e = 0, g = 0; e < b; e++) g += a[e][f][1];
                if (g) for (e = 0; e < b; e++) a[e][f][1] /= g; else for (e = 0; e < b; e++) a[e][f][1] = d
            }
            for (f = 0; f < c; ++f) h[f] = 0;
            return h
        }, zero: dV
    });
    d3.layout.histogram = function () {
        function e(e, f) {
            var g = [], h = e.map(b, this), i = c.call(this, h, f), j = d.call(this, i, h, f), k, f = -1, l = h.length,
                m = j.length - 1, n = a ? 1 : 1 / l, o;
            while (++f < m) k = g[f] = [], k.dx = j[f + 1] - (k.x = j[f]), k.y = 0;
            f = -1;
            while (++f < l) o = h[f], o >= i[0] && o <= i[1] && (k = g[d3.bisect(j, o, 1, m) - 1], k.y += n, k.push(e[f]));
            return g
        }

        var a = !0, b = Number, c = d_, d = dZ;
        return e.value = function (a) {
            return arguments.length ? (b = a, e) : b
        }, e.range = function (a) {
            return arguments.length ? (c = d3.functor(a), e) : c
        }, e.bins = function (a) {
            return arguments.length ? (d = typeof a == "number" ? function (b) {
                return d$(b, a)
            } : d3.functor(a), e) : d
        }, e.frequency = function (b) {
            return arguments.length ? (a = !!b, e) : a
        }, e
    }, d3.layout.hierarchy = function () {
        function e(f, h, i) {
            var j = b.call(g, f, h), k = ef ? f : {data: f};
            k.depth = h, i.push(k);
            if (j && (m = j.length)) {
                var l = -1, m, n = k.children = [], o = 0, p = h + 1;
                while (++l < m) d = e(j[l], p, i), d.parent = k, n.push(d), o += d.value;
                a && n.sort(a), c && (k.value = o)
            } else c && (k.value = +c.call(g, f, h) || 0);
            return k
        }

        function f(a, b) {
            var d = a.children, e = 0;
            if (d && (i = d.length)) {
                var h = -1, i, j = b + 1;
                while (++h < i) e += f(d[h], j)
            } else c && (e = +c.call(g, ef ? a : a.data, b) || 0);
            return c && (a.value = e), e
        }

        function g(a) {
            var b = [];
            return e(a, 0, b), b
        }

        var a = ed, b = eb, c = ec;
        return g.sort = function (b) {
            return arguments.length ? (a = b, g) : a
        }, g.children = function (a) {
            return arguments.length ? (b = a, g) : b
        }, g.value = function (a) {
            return arguments.length ? (c = a, g) : c
        }, g.revalue = function (a) {
            return f(a, 0), a
        }, g
    };
    var ef = !1;
    d3.layout.pack = function () {
        function c(c, d) {
            var e = a.call(this, c, d), f = e[0];
            f.x = 0, f.y = 0, en(f);
            var g = b[0], h = b[1], i = 1 / Math.max(2 * f.r / g, 2 * f.r / h);
            return eo(f, g / 2, h / 2, i), e
        }

        var a = d3.layout.hierarchy().sort(eg), b = [1, 1];
        return c.size = function (a) {
            return arguments.length ? (b = a, c) : b
        }, ea(c, a)
    }, d3.layout.cluster = function () {
        function d(d, e) {
            var f = a.call(this, d, e), g = f[0], h, i = 0, j, k;
            eB(g, function (a) {
                var c = a.children;
                c && c.length ? (a.x = er(c), a.y = eq(c)) : (a.x = h ? i += b(a, h) : 0, a.y = 0, h = a)
            });
            var l = es(g), m = et(g), n = l.x - b(l, m) / 2, o = m.x + b(m, l) / 2;
            return eB(g, function (a) {
                a.x = (a.x - n) / (o - n) * c[0], a.y = (1 - (g.y ? a.y / g.y : 1)) * c[1]
            }), f
        }

        var a = d3.layout.hierarchy().sort(null).value(null), b = eu, c = [1, 1];
        return d.separation = function (a) {
            return arguments.length ? (b = a, d) : b
        }, d.size = function (a) {
            return arguments.length ? (c = a, d) : c
        }, ea(d, a)
    }, d3.layout.tree = function () {
        function d(d, e) {
            function h(a, c) {
                var d = a.children, e = a._tree;
                if (d && (f = d.length)) {
                    var f, g = d[0], i, k = g, l, m = -1;
                    while (++m < f) l = d[m], h(l, i), k = j(l, i, k), i = l;
                    eC(a);
                    var n = .5 * (g._tree.prelim + l._tree.prelim);
                    c ? (e.prelim = c._tree.prelim + b(a, c), e.mod = e.prelim - n) : e.prelim = n
                } else c && (e.prelim = c._tree.prelim + b(a, c))
            }

            function i(a, b) {
                a.x = a._tree.prelim + b;
                var c = a.children;
                if (c && (e = c.length)) {
                    var d = -1, e;
                    b += a._tree.mod;
                    while (++d < e) i(c[d], b)
                }
            }

            function j(a, c, d) {
                if (c) {
                    var e = a, f = a, g = c, h = a.parent.children[0], i = e._tree.mod, j = f._tree.mod,
                        k = g._tree.mod, l = h._tree.mod, m;
                    while (g = ew(g), e = ev(e), g && e) h = ev(h), f = ew(f), f._tree.ancestor = a, m = g._tree.prelim + k - e._tree.prelim - i + b(g, e), m > 0 && (eD(eE(g, a, d), a, m), i += m, j += m), k += g._tree.mod, i += e._tree.mod, l += h._tree.mod, j += f._tree.mod;
                    g && !ew(f) && (f._tree.thread = g, f._tree.mod += k - j), e && !ev(h) && (h._tree.thread = e, h._tree.mod += i - l, d = a)
                }
                return d
            }

            var f = a.call(this, d, e), g = f[0];
            eB(g, function (a, b) {
                a._tree = {ancestor: a, prelim: 0, mod: 0, change: 0, shift: 0, number: b ? b._tree.number + 1 : 0}
            }), h(g), i(g, -g._tree.prelim);
            var k = ex(g, ez), l = ex(g, ey), m = ex(g, eA), n = k.x - b(k, l) / 2, o = l.x + b(l, k) / 2,
                p = m.depth || 1;
            return eB(g, function (a) {
                a.x = (a.x - n) / (o - n) * c[0], a.y = a.depth / p * c[1], delete a._tree
            }), f
        }

        var a = d3.layout.hierarchy().sort(null).value(null), b = eu, c = [1, 1];
        return d.separation = function (a) {
            return arguments.length ? (b = a, d) : b
        }, d.size = function (a) {
            return arguments.length ? (c = a, d) : c
        }, ea(d, a)
    }, d3.layout.treemap = function () {
        function i(a, b) {
            var c = -1, d = a.length, e, f;
            while (++c < d) f = (e = a[c]).value * (b < 0 ? 0 : b), e.area = isNaN(f) || f <= 0 ? 0 : f
        }

        function j(a) {
            var b = a.children;
            if (b && b.length) {
                var c = e(a), d = [], f = b.slice(), g, h = Infinity, k, n = Math.min(c.dx, c.dy), o;
                i(f, c.dx * c.dy / a.value), d.area = 0;
                while ((o = f.length) > 0) d.push(g = f[o - 1]), d.area += g.area, (k = l(d, n)) <= h ? (f.pop(), h = k) : (d.area -= d.pop().area, m(d, n, c, !1), n = Math.min(c.dx, c.dy), d.length = d.area = 0, h = Infinity);
                d.length && (m(d, n, c, !0), d.length = d.area = 0), b.forEach(j)
            }
        }

        function k(a) {
            var b = a.children;
            if (b && b.length) {
                var c = e(a), d = b.slice(), f, g = [];
                i(d, c.dx * c.dy / a.value), g.area = 0;
                while (f = d.pop()) g.push(f), g.area += f.area, f.z != null && (m(g, f.z ? c.dx : c.dy, c, !d.length), g.length = g.area = 0);
                b.forEach(k)
            }
        }

        function l(a, b) {
            var c = a.area, d, e = 0, f = Infinity, g = -1, i = a.length;
            while (++g < i) {
                if (!(d = a[g].area)) continue;
                d < f && (f = d), d > e && (e = d)
            }
            return c *= c, b *= b, c ? Math.max(b * e * h / c, c / (b * f * h)) : Infinity
        }

        function m(a, c, d, e) {
            var f = -1, g = a.length, h = d.x, i = d.y, j = c ? b(a.area / c) : 0, k;
            if (c == d.dx) {
                if (e || j > d.dy) j = d.dy;
                while (++f < g) k = a[f], k.x = h, k.y = i, k.dy = j, h += k.dx = Math.min(d.x + d.dx - h, j ? b(k.area / j) : 0);
                k.z = !0, k.dx += d.x + d.dx - h, d.y += j, d.dy -= j
            } else {
                if (e || j > d.dx) j = d.dx;
                while (++f < g) k = a[f], k.x = h, k.y = i, k.dx = j, i += k.dy = Math.min(d.y + d.dy - i, j ? b(k.area / j) : 0);
                k.z = !1, k.dy += d.y + d.dy - i, d.x += j, d.dx -= j
            }
        }

        function n(b) {
            var d = g || a(b), e = d[0];
            return e.x = 0, e.y = 0, e.dx = c[0], e.dy = c[1], g && a.revalue(e), i([e], e.dx * e.dy / e.value), (g ? k : j)(e), f && (g = d), d
        }

        var a = d3.layout.hierarchy(), b = Math.round, c = [1, 1], d = null, e = eF, f = !1, g,
            h = .5 * (1 + Math.sqrt(5));
        return n.size = function (a) {
            return arguments.length ? (c = a, n) : c
        }, n.padding = function (a) {
            function b(b) {
                var c = a.call(n, b, b.depth);
                return c == null ? eF(b) : eG(b, typeof c == "number" ? [c, c, c, c] : c)
            }

            function c(b) {
                return eG(b, a)
            }

            if (!arguments.length) return d;
            var f;
            return e = (d = a) == null ? eF : (f = typeof a) === "function" ? b : f === "number" ? (a = [a, a, a, a], c) : c, n
        }, n.round = function (a) {
            return arguments.length ? (b = a ? Math.round : Number, n) : b != Number
        }, n.sticky = function (a) {
            return arguments.length ? (f = a, g = null, n) : f
        }, n.ratio = function (a) {
            return arguments.length ? (h = a, n) : h
        }, ea(n, a)
    }, d3.csv = function (a, b) {
        d3.text(a, "text/csv", function (a) {
            b(a && d3.csv.parse(a))
        })
    }, d3.csv.parse = function (a) {
        var b;
        return d3.csv.parseRows(a, function (a, c) {
            if (c) {
                var d = {}, e = -1, f = b.length;
                while (++e < f) d[b[e]] = a[e];
                return d
            }
            return b = a, null
        })
    }, d3.csv.parseRows = function (a, b) {
        function j() {
            if (f.lastIndex >= a.length) return d;
            if (i) return i = !1, c;
            var b = f.lastIndex;
            if (a.charCodeAt(b) === 34) {
                var e = b;
                while (e++ < a.length) if (a.charCodeAt(e) === 34) {
                    if (a.charCodeAt(e + 1) !== 34) break;
                    e++
                }
                f.lastIndex = e + 2;
                var g = a.charCodeAt(e + 1);
                return g === 13 ? (i = !0, a.charCodeAt(e + 2) === 10 && f.lastIndex++) : g === 10 && (i = !0), a.substring(b + 1, e).replace(/""/g, '"')
            }
            var h = f.exec(a);
            return h ? (i = h[0].charCodeAt(0) !== 44, a.substring(b, h.index)) : (f.lastIndex = a.length, a.substring(b))
        }

        var c = {}, d = {}, e = [], f = /\r\n|[,\r\n]/g, g = 0, h, i;
        f.lastIndex = 0;
        while ((h = j()) !== d) {
            var k = [];
            while (h !== c && h !== d) k.push(h), h = j();
            if (b && !(k = b(k, g++))) continue;
            e.push(k)
        }
        return e
    }, d3.csv.format = function (a) {
        return a.map(eH).join("\n")
    }, d3.geo = {};
    var eJ = Math.PI / 180;
    d3.geo.azimuthal = function () {
        function i(b) {
            var f = b[0] * eJ - e, i = b[1] * eJ, j = Math.cos(f), k = Math.sin(f), l = Math.cos(i), m = Math.sin(i),
                n = a !== "orthographic" ? h * m + g * l * j : null, o,
                p = a === "stereographic" ? 1 / (1 + n) : a === "gnomonic" ? 1 / n : a === "equidistant" ? (o = Math.acos(n), o ? o / Math.sin(o) : 0) : a === "equalarea" ? Math.sqrt(2 / (1 + n)) : 1,
                q = p * l * k, r = p * (h * l * j - g * m);
            return [c * q + d[0], c * r + d[1]]
        }

        var a = "orthographic", b, c = 200, d = [480, 250], e, f, g, h;
        return i.invert = function (b) {
            var f = (b[0] - d[0]) / c, i = (b[1] - d[1]) / c, j = Math.sqrt(f * f + i * i),
                k = a === "stereographic" ? 2 * Math.atan(j) : a === "gnomonic" ? Math.atan(j) : a === "equidistant" ? j : a === "equalarea" ? 2 * Math.asin(.5 * j) : Math.asin(j),
                l = Math.sin(k), m = Math.cos(k);
            return [(e + Math.atan2(f * l, j * g * m + i * h * l)) / eJ, Math.asin(m * h - (j ? i * l * g / j : 0)) / eJ]
        }, i.mode = function (b) {
            return arguments.length ? (a = b + "", i) : a
        }, i.origin = function (a) {
            return arguments.length ? (b = a, e = b[0] * eJ, f = b[1] * eJ, g = Math.cos(f), h = Math.sin(f), i) : b
        }, i.scale = function (a) {
            return arguments.length ? (c = +a, i) : c
        }, i.translate = function (a) {
            return arguments.length ? (d = [+a[0], +a[1]], i) : d
        }, i.origin([0, 0])
    }, d3.geo.albers = function () {
        function i(a) {
            var b = f * (eJ * a[0] - e), i = Math.sqrt(g - 2 * f * Math.sin(eJ * a[1])) / f;
            return [c * i * Math.sin(b) + d[0], c * (i * Math.cos(b) - h) + d[1]]
        }

        function j() {
            var c = eJ * b[0], d = eJ * b[1], j = eJ * a[1], k = Math.sin(c), l = Math.cos(c);
            return e = eJ * a[0], f = .5 * (k + Math.sin(d)), g = l * l + 2 * f * k, h = Math.sqrt(g - 2 * f * Math.sin(j)) / f, i
        }

        var a = [-98, 38], b = [29.5, 45.5], c = 1e3, d = [480, 250], e, f, g, h;
        return i.invert = function (a) {
            var b = (a[0] - d[0]) / c, i = (a[1] - d[1]) / c, j = h + i, k = Math.atan2(b, j),
                l = Math.sqrt(b * b + j * j);
            return [(e + k / f) / eJ, Math.asin((g - l * l * f * f) / (2 * f)) / eJ]
        }, i.origin = function (b) {
            return arguments.length ? (a = [+b[0], +b[1]], j()) : a
        }, i.parallels = function (a) {
            return arguments.length ? (b = [+a[0], +a[1]], j()) : b
        }, i.scale = function (a) {
            return arguments.length ? (c = +a, i) : c
        }, i.translate = function (a) {
            return arguments.length ? (d = [+a[0], +a[1]], i) : d
        }, j()
    }, d3.geo.albersUsa = function () {
        function e(e) {
            var f = e[0], g = e[1];
            return (g > 50 ? b : f < -140 ? c : g < 21 ? d : a)(e)
        }

        var a = d3.geo.albers(), b = d3.geo.albers().origin([-160, 60]).parallels([55, 65]),
            c = d3.geo.albers().origin([-160, 20]).parallels([8, 18]),
            d = d3.geo.albers().origin([-60, 10]).parallels([8, 18]);
        return e.scale = function (f) {
            return arguments.length ? (a.scale(f), b.scale(f * .6), c.scale(f), d.scale(f * 1.5), e.translate(a.translate())) : a.scale()
        }, e.translate = function (f) {
            if (!arguments.length) return a.translate();
            var g = a.scale() / 1e3, h = f[0], i = f[1];
            return a.translate(f), b.translate([h - 400 * g, i + 170 * g]), c.translate([h - 190 * g, i + 200 * g]), d.translate([h + 580 * g, i + 430 * g]), e
        }, e.scale(a.scale())
    }, d3.geo.bonne = function () {
        function g(g) {
            var h = g[0] * eJ - c, i = g[1] * eJ - d;
            if (e) {
                var j = f + e - i, k = h * Math.cos(i) / j;
                h = j * Math.sin(k), i = j * Math.cos(k) - f
            } else h *= Math.cos(i), i *= -1;
            return [a * h + b[0], a * i + b[1]]
        }

        var a = 200, b = [480, 250], c, d, e, f;
        return g.invert = function (d) {
            var g = (d[0] - b[0]) / a, h = (d[1] - b[1]) / a;
            if (e) {
                var i = f + h, j = Math.sqrt(g * g + i * i);
                h = f + e - j, g = c + j * Math.atan2(g, i) / Math.cos(h)
            } else h *= -1, g /= Math.cos(h);
            return [g / eJ, h / eJ]
        }, g.parallel = function (a) {
            return arguments.length ? (f = 1 / Math.tan(e = a * eJ), g) : e / eJ
        }, g.origin = function (a) {
            return arguments.length ? (c = a[0] * eJ, d = a[1] * eJ, g) : [c / eJ, d / eJ]
        }, g.scale = function (b) {
            return arguments.length ? (a = +b, g) : a
        }, g.translate = function (a) {
            return arguments.length ? (b = [+a[0], +a[1]], g) : b
        }, g.origin([0, 0]).parallel(45)
    }, d3.geo.equirectangular = function () {
        function c(c) {
            var d = c[0] / 360, e = -c[1] / 360;
            return [a * d + b[0], a * e + b[1]]
        }

        var a = 500, b = [480, 250];
        return c.invert = function (c) {
            var d = (c[0] - b[0]) / a, e = (c[1] - b[1]) / a;
            return [360 * d, -360 * e]
        }, c.scale = function (b) {
            return arguments.length ? (a = +b, c) : a
        }, c.translate = function (a) {
            return arguments.length ? (b = [+a[0], +a[1]], c) : b
        }, c
    }, d3.geo.mercator = function () {
        function c(c) {
            var d = c[0] / 360, e = -(Math.log(Math.tan(Math.PI / 4 + c[1] * eJ / 2)) / eJ) / 360;
            return [a * d + b[0], a * Math.max(-0.5, Math.min(.5, e)) + b[1]]
        }

        var a = 500, b = [480, 250];
        return c.invert = function (c) {
            var d = (c[0] - b[0]) / a, e = (c[1] - b[1]) / a;
            return [360 * d, 2 * Math.atan(Math.exp(-360 * e * eJ)) / eJ - 90]
        }, c.scale = function (b) {
            return arguments.length ? (a = +b, c) : a
        }, c.translate = function (a) {
            return arguments.length ? (b = [+a[0], +a[1]], c) : b
        }, c
    }, d3.geo.path = function () {
        function d(c, d) {
            return typeof a == "function" && (b = eL(a.apply(this, arguments))), f(c) || null
        }

        function e(a) {
            return c(a).join(",")
        }

        function h(a) {
            var b = k(a[0]), c = 0, d = a.length;
            while (++c < d) b -= k(a[c]);
            return b
        }

        function i(a) {
            var b = d3.geom.polygon(a[0].map(c)), d = b.area(), e = b.centroid(d < 0 ? (d *= -1, 1) : -1), f = e[0],
                g = e[1], h = d, i = 0, j = a.length;
            while (++i < j) b = d3.geom.polygon(a[i].map(c)), d = b.area(), e = b.centroid(d < 0 ? (d *= -1, 1) : -1), f -= e[0], g -= e[1], h -= d;
            return [f, g, 6 * h]
        }

        function k(a) {
            return Math.abs(d3.geom.polygon(a.map(c)).area())
        }

        var a = 4.5, b = eL(a), c = d3.geo.albersUsa(), f = eK({
            FeatureCollection: function (a) {
                var b = [], c = a.features, d = -1, e = c.length;
                while (++d < e) b.push(f(c[d].geometry));
                return b.join("")
            }, Feature: function (a) {
                return f(a.geometry)
            }, Point: function (a) {
                return "M" + e(a.coordinates) + b
            }, MultiPoint: function (a) {
                var c = [], d = a.coordinates, f = -1, g = d.length;
                while (++f < g) c.push("M", e(d[f]), b);
                return c.join("")
            }, LineString: function (a) {
                var b = ["M"], c = a.coordinates, d = -1, f = c.length;
                while (++d < f) b.push(e(c[d]), "L");
                return b.pop(), b.join("")
            }, MultiLineString: function (a) {
                var b = [], c = a.coordinates, d = -1, f = c.length, g, h, i;
                while (++d < f) {
                    g = c[d], h = -1, i = g.length, b.push("M");
                    while (++h < i) b.push(e(g[h]), "L");
                    b.pop()
                }
                return b.join("")
            }, Polygon: function (a) {
                var b = [], c = a.coordinates, d = -1, f = c.length, g, h, i;
                while (++d < f) {
                    g = c[d], h = -1;
                    if ((i = g.length - 1) > 0) {
                        b.push("M");
                        while (++h < i) b.push(e(g[h]), "L");
                        b[b.length - 1] = "Z"
                    }
                }
                return b.join("")
            }, MultiPolygon: function (a) {
                var b = [], c = a.coordinates, d = -1, f = c.length, g, h, i, j, k, l;
                while (++d < f) {
                    g = c[d], h = -1, i = g.length;
                    while (++h < i) {
                        j = g[h], k = -1;
                        if ((l = j.length - 1) > 0) {
                            b.push("M");
                            while (++k < l) b.push(e(j[k]), "L");
                            b[b.length - 1] = "Z"
                        }
                    }
                }
                return b.join("")
            }, GeometryCollection: function (a) {
                var b = [], c = a.geometries, d = -1, e = c.length;
                while (++d < e) b.push(f(c[d]));
                return b.join("")
            }
        }), g = d.area = eK({
            FeatureCollection: function (a) {
                var b = 0, c = a.features, d = -1, e = c.length;
                while (++d < e) b += g(c[d]);
                return b
            }, Feature: function (a) {
                return g(a.geometry)
            }, Polygon: function (a) {
                return h(a.coordinates)
            }, MultiPolygon: function (a) {
                var b = 0, c = a.coordinates, d = -1, e = c.length;
                while (++d < e) b += h(c[d]);
                return b
            }, GeometryCollection: function (a) {
                var b = 0, c = a.geometries, d = -1, e = c.length;
                while (++d < e) b += g(c[d]);
                return b
            }
        }, 0), j = d.centroid = eK({
            Feature: function (a) {
                return j(a.geometry)
            }, Polygon: function (a) {
                var b = i(a.coordinates);
                return [b[0] / b[2], b[1] / b[2]]
            }, MultiPolygon: function (a) {
                var b = 0, c = a.coordinates, d, e = 0, f = 0, g = 0, h = -1, j = c.length;
                while (++h < j) d = i(c[h]), e += d[0], f += d[1], g += d[2];
                return [e / g, f / g]
            }
        });
        return d.projection = function (a) {
            return c = a, d
        }, d.pointRadius = function (c) {
            return typeof c == "function" ? a = c : (a = +c, b = eL(a)), d
        }, d
    }, d3.geo.bounds = function (a) {
        var b = Infinity, c = Infinity, d = -Infinity, e = -Infinity;
        return eM(a, function (a, f) {
            a < b && (b = a), a > d && (d = a), f < c && (c = f), f > e && (e = f)
        }), [[b, c], [d, e]]
    };
    var eN = {
        Feature: eO,
        FeatureCollection: eP,
        GeometryCollection: eQ,
        LineString: eR,
        MultiLineString: eS,
        MultiPoint: eR,
        MultiPolygon: eT,
        Point: eU,
        Polygon: eV
    };
    d3.geo.circle = function () {
        function e() {
        }

        function f(a) {
            return d.distance(a) < c
        }

        function h(a) {
            var b = -1, e = a.length, f = [], g, h, j, k, l;
            while (++b < e) l = d.distance(j = a[b]), l < c ? (h && f.push(eY(h, j)((k - c) / (k - l))), f.push(j), g = h = null) : (h = j, !g && f.length && (f.push(eY(f[f.length - 1], h)((c - k) / (l - k))), g = h)), k = l;
            return h && f.length && (l = d.distance(j = f[0]), f.push(eY(h, j)((k - c) / (k - l)))), i(f)
        }

        function i(a) {
            var b = 0, c = a.length, e, f, g = c ? [a[0]] : a, h, i = d.source();
            while (++b < c) {
                h = d.source(a[b - 1])(a[b]).coordinates;
                for (e = 0, f = h.length; ++e < f;) g.push(h[e])
            }
            return d.source(i), g
        }

        var a = [0, 0], b = 89.99, c = b * eJ, d = d3.geo.greatArc().target(Object);
        e.clip = function (b) {
            return d.source(typeof a == "function" ? a.apply(this, arguments) : a), g(b)
        };
        var g = eK({
            FeatureCollection: function (a) {
                var b = a.features.map(g).filter(Object);
                return b && (a = Object.create(a), a.features = b, a)
            }, Feature: function (a) {
                var b = g(a.geometry);
                return b && (a = Object.create(a), a.geometry = b, a)
            }, Point: function (a) {
                return f(a.coordinates) && a
            }, MultiPoint: function (a) {
                var b = a.coordinates.filter(f);
                return b.length && {
                    type: a.type
                    , coordinates: b
                }
            }, LineString: function (a) {
                var b = h(a.coordinates);
                return b.length && (a = Object.create(a), a.coordinates = b, a)
            }, MultiLineString: function (a) {
                var b = a.coordinates.map(h).filter(function (a) {
                    return a.length
                });
                return b.length && (a = Object.create(a), a.coordinates = b, a)
            }, Polygon: function (a) {
                var b = a.coordinates.map(h);
                return b[0].length && (a = Object.create(a), a.coordinates = b, a)
            }, MultiPolygon: function (a) {
                var b = a.coordinates.map(function (a) {
                    return a.map(h)
                }).filter(function (a) {
                    return a[0].length
                });
                return b.length && (a = Object.create(a), a.coordinates = b, a)
            }, GeometryCollection: function (a) {
                var b = a.geometries.map(g).filter(Object);
                return b.length && (a = Object.create(a), a.geometries = b, a)
            }
        });
        return e.origin = function (b) {
            return arguments.length ? (a = b, e) : a
        }, e.angle = function (a) {
            return arguments.length ? (c = (b = +a) * eJ, e) : b
        }, e.precision = function (a) {
            return arguments.length ? (d.precision(a), e) : d.precision()
        }, e
    }, d3.geo.greatArc = function () {
        function d() {
            var d = typeof a == "function" ? a.apply(this, arguments) : a,
                e = typeof b == "function" ? b.apply(this, arguments) : b, f = eY(d, e), g = c / f.d, h = 0, i = [d];
            while ((h += g) < 1) i.push(f(h));
            return i.push(e), {type: "LineString", coordinates: i}
        }

        var a = eW, b = eX, c = 6 * eJ;
        return d.distance = function () {
            var c = typeof a == "function" ? a.apply(this, arguments) : a,
                d = typeof b == "function" ? b.apply(this, arguments) : b;
            return eY(c, d).d
        }, d.source = function (b) {
            return arguments.length ? (a = b, d) : a
        }, d.target = function (a) {
            return arguments.length ? (b = a, d) : b
        }, d.precision = function (a) {
            return arguments.length ? (c = a * eJ, d) : c / eJ
        }, d
    }, d3.geo.greatCircle = d3.geo.circle, d3.geom = {}, d3.geom.contour = function (a, b) {
        var c = b || e_(a), d = [], e = c[0], f = c[1], g = 0, h = 0, i = NaN, j = NaN, k = 0;
        do k = 0, a(e - 1, f - 1) && (k += 1), a(e, f - 1) && (k += 2), a(e - 1, f) && (k += 4), a(e, f) && (k += 8), k === 6 ? (g = j === -1 ? -1 : 1, h = 0) : k === 9 ? (g = 0, h = i === 1 ? -1 : 1) : (g = eZ[k], h = e$[k]), g != i && h != j && (d.push([e, f]), i = g, j = h), e += g, f += h; while (c[0] != e || c[1] != f);
        return d
    };
    var eZ = [1, 0, 1, 1, -1, 0, -1, 1, 0, 0, 0, 0, -1, 0, -1, NaN],
        e$ = [0, -1, 0, 0, 0, -1, 0, 0, 1, -1, 1, 1, 0, -1, 0, NaN];
    d3.geom.hull = function (a) {
        if (a.length < 3) return [];
        var b = a.length, c = b - 1, d = [], e = [], f, g, h = 0, i, j, k, l, m, n, o, p;
        for (f = 1; f < b; ++f) a[f][1] < a[h][1] ? h = f : a[f][1] == a[h][1] && (h = a[f][0] < a[h][0] ? f : h);
        for (f = 0; f < b; ++f) {
            if (f === h) continue;
            j = a[f][1] - a[h][1], i = a[f][0] - a[h][0], d.push({angle: Math.atan2(j, i), index: f})
        }
        d.sort(function (a, b) {
            return a.angle - b.angle
        }), o = d[0].angle, n = d[0].index, m = 0;
        for (f = 1; f < c; ++f) g = d[f].index, o == d[f].angle ? (i = a[n][0] - a[h][0], j = a[n][1] - a[h][1], k = a[g][0] - a[h][0], l = a[g][1] - a[h][1], i * i + j * j >= k * k + l * l ? d[f].index = -1 : (d[m].index = -1, o = d[f].angle, m = f, n = g)) : (o = d[f].angle, m = f, n = g);
        e.push(h);
        for (f = 0, g = 0; f < 2; ++g) d[g].index !== -1 && (e.push(d[g].index), f++);
        p = e.length;
        for (; g < c; ++g) {
            if (d[g].index === -1) continue;
            while (!fa(e[p - 2], e[p - 1], d[g].index, a)) --p;
            e[p++] = d[g].index
        }
        var q = [];
        for (f = 0; f < p; ++f) q.push(a[e[f]]);
        return q
    }, d3.geom.polygon = function (a) {
        return a.area = function () {
            var b = 0, c = a.length, d = a[c - 1][0] * a[0][1], e = a[c - 1][1] * a[0][0];
            while (++b < c) d += a[b - 1][0] * a[b][1], e += a[b - 1][1] * a[b][0];
            return (e - d) * .5
        }, a.centroid = function (b) {
            var c = -1, d = a.length, e = 0, f = 0, g, h = a[d - 1], i;
            arguments.length || (b = -1 / (6 * a.area()));
            while (++c < d) g = h, h = a[c], i = g[0] * h[1] - h[0] * g[1], e += (g[0] + h[0]) * i, f += (g[1] + h[1]) * i;
            return [e * b, f * b]
        }, a.clip = function (b) {
            var c, d = -1, e = a.length, f, g, h = a[e - 1], i, j, k;
            while (++d < e) {
                c = b.slice(), b.length = 0, i = a[d], j = c[(g = c.length) - 1], f = -1;
                while (++f < g) k = c[f], fb(k, h, i) ? (fb(j, h, i) || b.push(fc(j, k, h, i)), b.push(k)) : fb(j, h, i) && b.push(fc(j, k, h, i)), j = k;
                h = i
            }
            return b
        }, a
    }, d3.geom.voronoi = function (a) {
        var b = a.map(function () {
            return []
        });
        return fe(a, function (a) {
            var c, d, e, f, g, h;
            a.a === 1 && a.b >= 0 ? (c = a.ep.r, d = a.ep.l) : (c = a.ep.l, d = a.ep.r), a.a === 1 ? (g = c ? c.y : -1e6, e = a.c - a.b * g, h = d ? d.y : 1e6, f = a.c - a.b * h) : (e = c ? c.x : -1e6, g = a.c - a.a * e, f = d ? d.x : 1e6, h = a.c - a.a * f);
            var i = [e, g], j = [f, h];
            b[a.region.l.index].push(i, j), b[a.region.r.index].push(i, j)
        }), b.map(function (b, c) {
            var d = a[c][0], e = a[c][1];
            return b.forEach(function (a) {
                a.angle = Math.atan2(a[0] - d, a[1] - e)
            }), b.sort(function (a, b) {
                return a.angle - b.angle
            }).filter(function (a, c) {
                return !c || a.angle - b[c - 1].angle > 1e-10
            })
        })
    };
    var fd = {l: "r", r: "l"};
    d3.geom.delaunay = function (a) {
        var b = a.map(function () {
            return []
        }), c = [];
        return fe(a, function (c) {
            b[c.region.l.index].push(a[c.region.r.index])
        }), b.forEach(function (b, d) {
            var e = a[d], f = e[0], g = e[1];
            b.forEach(function (a) {
                a.angle = Math.atan2(a[0] - f, a[1] - g)
            }), b.sort(function (a, b) {
                return a.angle - b.angle
            });
            for (var h = 0, i = b.length - 1; h < i; h++) c.push([e, b[h], b[h + 1]])
        }), c
    }, d3.geom.quadtree = function (a, b, c, d, e) {
        function k(a, b, c, d, e, f) {
            if (isNaN(b.x) || isNaN(b.y)) return;
            if (a.leaf) {
                var g = a.point;
                g ? Math.abs(g.x - b.x) + Math.abs(g.y - b.y) < .01 ? l(a, b, c, d, e, f) : (a.point = null, l(a, g, c, d, e, f), l(a, b, c, d, e, f)) : a.point = b
            } else l(a, b, c, d, e, f)
        }

        function l(a, b, c, d, e, f) {
            var g = (c + e) * .5, h = (d + f) * .5, i = b.x >= g, j = b.y >= h, l = (j << 1) + i;
            a.leaf = !1, a = a.nodes[l] || (a.nodes[l] = ff()), i ? c = g : e = g, j ? d = h : f = h, k(a, b, c, d, e, f)
        }

        var f, g = -1, h = a.length;
        h && isNaN(a[0].x) && (a = a.map(fh));
        if (arguments.length < 5) if (arguments.length === 3) e = d = c, c = b; else {
            b = c = Infinity, d = e = -Infinity;
            while (++g < h) f = a[g], f.x < b && (b = f.x), f.y < c && (c = f.y), f.x > d && (d = f.x), f.y > e && (e = f.y);
            var i = d - b, j = e - c;
            i > j ? e = c + i : d = b + j
        }
        var m = ff();
        return m.add = function (a) {
            k(m, a, b, c, d, e)
        }, m.visit = function (a) {
            fg(a, m, b, c, d, e)
        }, a.forEach(m.add), m
    }, d3.time = {};
    var fi = Date;
    fj.prototype = {
        getDate: function () {
            return this._.getUTCDate()
        }, getDay: function () {
            return this._.getUTCDay()
        }, getFullYear: function () {
            return this._.getUTCFullYear()
        }, getHours: function () {
            return this._.getUTCHours()
        }, getMilliseconds: function () {
            return this._.getUTCMilliseconds()
        }, getMinutes: function () {
            return this._.getUTCMinutes()
        }, getMonth: function () {
            return this._.getUTCMonth()
        }, getSeconds: function () {
            return this._.getUTCSeconds()
        }, getTime: function () {
            return this._.getTime()
        }, getTimezoneOffset: function () {
            return 0
        }, valueOf: function () {
            return this._.valueOf()
        }, setDate: function (a) {
            this._.setUTCDate(a)
        }, setDay: function (a) {
            this._.setUTCDay(a)
        }, setFullYear: function (a) {
            this._.setUTCFullYear(a)
        }, setHours: function (a) {
            this._.setUTCHours(a)
        }, setMilliseconds: function (a) {
            this._.setUTCMilliseconds(a)
        }, setMinutes: function (a) {
            this._.setUTCMinutes(a)
        }, setMonth: function (a) {
            this._.setUTCMonth(a)
        }, setSeconds: function (a) {
            this._.setUTCSeconds(a)
        }, setTime: function (a) {
            this._.setTime(a)
        }
    }, d3.time.format = function (a) {
        function c(c) {
            var d = [], e = -1, f = 0, g, h;
            while (++e < b) a.charCodeAt(e) == 37 && (d.push(a.substring(f, e), (h = fp[g = a.charAt(++e)]) ? h(c) : g), f = e + 1);
            return d.push(a.substring(f, e)), d.join("")
        }

        var b = a.length;
        return c.parse = function (b) {
            var c = new fi(1900, 0, 1), d = fk(c, a, b, 0);
            if (d != b.length) return null;
            if (c.hour12) {
                var e = c.getHours() % 12;
                c.setHours(c.hour12pm ? e + 12 : e)
            }
            return delete c.hour12, delete c.hour12pm, c
        }, c.toString = function () {
            return a
        }, c
    };
    var fl = d3.format("02d"), fm = d3.format("03d"), fn = d3.format("04d"), fo = d3.format("2d"), fp = {
        a: function (a) {
            return d3_time_weekdays[a.getDay()].substring(0, 3)
        }, A: function (a) {
            return d3_time_weekdays[a.getDay()]
        }, b: function (a) {
            return fA[a.getMonth()].substring(0, 3)
        }, B: function (a) {
            return fA[a.getMonth()]
        }, c: d3.time.format("%a %b %e %H:%M:%S %Y"), d: function (a) {
            return fl(a.getDate())
        }, e: function (a) {
            return fo(a.getDate())
        }, H: function (a) {
            return fl(a.getHours())
        }, I: function (a) {
            return fl(a.getHours() % 12 || 12)
        }, j: function (a) {
            return fm(1 + d3.time.dayOfYear(a))
        }, L: function (a) {
            return fm(a.getMilliseconds())
        }, m: function (a) {
            return fl(a.getMonth() + 1)
        }, M: function (a) {
            return fl(a.getMinutes())
        }, p: function (a) {
            return a.getHours() >= 12 ? "PM" : "AM"
        }, S: function (a) {
            return fl(a.getSeconds())
        }, U: function (a) {
            return fl(d3.time.sundayOfYear(a))
        }, w: function (a) {
            return a.getDay()
        }, W: function (a) {
            return fl(d3.time.mondayOfYear(a))
        }, x: d3.time.format("%m/%d/%y"), X: d3.time.format("%H:%M:%S"), y: function (a) {
            return fl(a.getFullYear() % 100)
        }, Y: function (a) {
            return fn(a.getFullYear() % 1e4)
        }, Z: fR, "%": function (a) {
            return "%"
        }
    }, fq = {
        a: fr,
        A: fs,
        b: fv,
        B: fx,
        c: fB,
        d: fI,
        e: fI,
        H: fJ,
        I: fK,
        L: fN,
        m: fH,
        M: fL,
        p: fP,
        S: fM,
        x: fC,
        X: fD,
        y: fF,
        Y: fE
    }, ft = /^(?:sun|mon|tue|wed|thu|fri|sat)/i, fu = /^(?:Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/i;
    d3_time_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var fw = d3.map({jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11}),
        fy = /^(?:January|February|March|April|May|June|July|August|September|October|November|December)/ig,
        fz = d3.map({
            january: 0,
            february: 1,
            march: 2,
            april: 3,
            may: 4,
            june: 5,
            july: 6,
            august: 7,
            september: 8,
            october: 9,
            november: 10,
            december: 11
        }),
        fA = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        fO = /\s*\d+/, fQ = d3.map({am: 0, pm: 1});
    d3.time.format.utc = function (a) {
        function c(a) {
            try {
                fi = fj;
                var c = new fi;
                return c._ = a, b(c)
            } finally {
                fi = Date
            }
        }

        var b = d3.time.format(a);
        return c.parse = function (a) {
            try {
                fi = fj;
                var c = b.parse(a);
                return c && c._
            } finally {
                fi = Date
            }
        }, c.toString = b.toString, c
    };
    var fS = d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
    d3.time.format.iso = Date.prototype.toISOString ? fT : fS, fT.parse = function (a) {
        return new Date(a)
    }, fT.toString = fS.toString, d3.time.second = fU(function (a) {
        return new fi(Math.floor(a / 1e3) * 1e3)
    }, function (a, b) {
        a.setTime(a.getTime() + Math.floor(b) * 1e3)
    }, function (a) {
        return a.getSeconds()
    }), d3.time.seconds = d3.time.second.range, d3.time.seconds.utc = d3.time.second.utc.range, d3.time.minute = fU(function (a) {
        return new fi(Math.floor(a / 6e4) * 6e4)
    }, function (a, b) {
        a.setTime(a.getTime() + Math.floor(b) * 6e4)
    }, function (a) {
        return a.getMinutes()
    }), d3.time.minutes = d3.time.minute.range, d3.time.minutes.utc = d3.time.minute.utc.range, d3.time.hour = fU(function (a) {
        var b = a.getTimezoneOffset() / 60;
        return new fi((Math.floor(a / 36e5 - b) + b) * 36e5)
    }, function (a, b) {
        a.setTime(a.getTime() + Math.floor(b) * 36e5)
    }, function (a) {
        return a.getHours()
    }), d3.time.hours = d3.time.hour.range, d3.time.hours.utc = d3.time.hour.utc.range, d3.time.day = fU(function (a) {
        return new fi(a.getFullYear(), a.getMonth(), a.getDate())
    }, function (a, b) {
        a.setDate(a.getDate() + b)
    }, function (a) {
        return a.getDate() - 1
    }), d3.time.days = d3.time.day.range, d3.time.days.utc = d3.time.day.utc.range, d3.time.dayOfYear = function (a) {
        var b = d3.time.year(a);
        return Math.floor((a - b) / 864e5 - (a.getTimezoneOffset() - b.getTimezoneOffset()) / 1440)
    }, d3_time_weekdays.forEach(function (a, b) {
        a = a.toLowerCase(), b = 7 - b;
        var c = d3.time[a] = fU(function (a) {
            return (a = d3.time.day(a)).setDate(a.getDate() - (a.getDay() + b) % 7), a
        }, function (a, b) {
            a.setDate(a.getDate() + Math.floor(b) * 7)
        }, function (a) {
            var c = d3.time.year(a).getDay();
            return Math.floor((d3.time.dayOfYear(a) + (c + b) % 7) / 7) - (c !== b)
        });
        d3.time[a + "s"] = c.range, d3.time[a + "s"].utc = c.utc.range, d3.time[a + "OfYear"] = function (a) {
            var c = d3.time.year(a).getDay();
            return Math.floor((d3.time.dayOfYear(a) + (c + b) % 7) / 7)
        }
    }), d3.time.week = d3.time.sunday, d3.time.weeks = d3.time.sunday.range, d3.time.weeks.utc = d3.time.sunday.utc.range, d3.time.weekOfYear = d3.time.sundayOfYear, d3.time.month = fU(function (a) {
        return new fi(a.getFullYear(), a.getMonth(), 1)
    }, function (a, b) {
        a.setMonth(a.getMonth() + b)
    }, function (a) {
        return a.getMonth()
    }), d3.time.months = d3.time.month.range, d3.time.months.utc = d3.time.month.utc.range, d3.time.year = fU(function (a) {
        return new fi(a.getFullYear(), 0, 1)
    }, function (a, b) {
        a.setFullYear(a.getFullYear() + b)
    }, function (a) {
        return a.getFullYear()
    }), d3.time.years = d3.time.year.range, d3.time.years.utc = d3.time.year.utc.range;
    var ga = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        gb = [[d3.time.second, 1], [d3.time.second, 5], [d3.time.second, 15], [d3.time.second, 30], [d3.time.minute, 1], [d3.time.minute, 5], [d3.time.minute, 15], [d3.time.minute, 30], [d3.time.hour, 1], [d3.time.hour, 3], [d3.time.hour, 6], [d3.time.hour, 12], [d3.time.day, 1], [d3.time.day, 2], [d3.time.week, 1], [d3.time.month, 1], [d3.time.month, 3], [d3.time.year, 1]],
        gc = [[d3.time.format("%Y"), function (a) {
            return !0
        }], [d3.time.format("%B"), function (a) {
            return a.getMonth()
        }], [d3.time.format("%b %d"), function (a) {
            return a.getDate() != 1
        }], [d3.time.format("%a %d"), function (a) {
            return a.getDay() && a.getDate() != 1
        }], [d3.time.format("%I %p"), function (a) {
            return a.getHours()
        }], [d3.time.format("%I:%M"), function (a) {
            return a.getMinutes()
        }], [d3.time.format(":%S"), function (a) {
            return a.getSeconds()
        }], [d3.time.format(".%L"), function (a) {
            return a.getMilliseconds()
        }]], gd = d3.scale.linear(), ge = fZ(gc);
    gb.year = function (a, b) {
        return gd.domain(a.map(f_)).ticks(b).map(f$)
    }, d3.time.scale = function () {
        return fW(d3.scale.linear(), gb, ge)
    };
    var gf = gb.map(function (a) {
        return [a[0].utc, a[1]]
    }), gg = [[d3.time.format.utc("%Y"), function (a) {
        return !0
    }], [d3.time.format.utc("%B"), function (a) {
        return a.getUTCMonth()
    }], [d3.time.format.utc("%b %d"), function (a) {
        return a.getUTCDate() != 1
    }], [d3.time.format.utc("%a %d"), function (a) {
        return a.getUTCDay() && a.getUTCDate() != 1
    }], [d3.time.format.utc("%I %p"), function (a) {
        return a.getUTCHours()
    }], [d3.time.format.utc("%I:%M"), function (a) {
        return a.getUTCMinutes()
    }], [d3.time.format.utc(":%S"), function (a) {
        return a.getUTCSeconds()
    }], [d3.time.format.utc(".%L"), function (a) {
        return a.getUTCMilliseconds()
    }]], gh = fZ(gg);
    gf.year = function (a, b) {
        return gd.domain(a.map(gj)).ticks(b).map(gi)
    }, d3.time.scale.utc = function () {
        return fW(d3.scale.linear(), gf, gh)
    }
})();
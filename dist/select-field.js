import { defineComponent as $, inject as Ve, toRaw as Ue, openBlock as s, createElementBlock as l, normalizeClass as R, normalizeStyle as He, createElementVNode as fe, createBlock as pe, resolveDynamicComponent as Ze, toDisplayString as M, createCommentVNode as y, resolveComponent as We, resolveDirective as Ge, renderSlot as d, normalizeProps as qe, guardReactiveProps as _e, withDirectives as Ye, mergeProps as Je, vModelSelect as Ke, createVNode as Qe, Transition as Xe, withCtx as et } from "vue";
var tt = Object.defineProperty, rt = (e, t, r) => t in e ? tt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, it = (e, t, r) => (rt(e, typeof t != "symbol" ? t + "" : t, r), r), k = function() {
  return k = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, k.apply(this, arguments);
};
function nt(e) {
  return e.toLowerCase();
}
var ot = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], st = /[^A-Z0-9]+/gi;
function at(e, t) {
  t === void 0 && (t = {});
  for (var r = t.splitRegexp, i = r === void 0 ? ot : r, n = t.stripRegexp, u = n === void 0 ? st : n, O = t.transform, z = O === void 0 ? nt : O, p = t.delimiter, De = p === void 0 ? " " : p, x = W(W(e, i, "$1\0$2"), u, "\0"), B = 0, N = x.length; x.charAt(B) === "\0"; )
    B++;
  for (; x.charAt(N - 1) === "\0"; )
    N--;
  return x.slice(B, N).split("\0").map(z).join(De);
}
function W(e, t, r) {
  return t instanceof RegExp ? e.replace(t, r) : t.reduce(function(i, n) {
    return i.replace(n, r);
  }, e);
}
function lt(e, t) {
  return t === void 0 && (t = {}), at(e, k({ delimiter: "." }, t));
}
function E(e, t) {
  return t === void 0 && (t = {}), lt(e, k({ delimiter: "-" }, t));
}
let ut = class {
  constructor(t = {}) {
    it(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([r, i]) => {
      this.register(r, i);
    });
  }
  get(t) {
    const r = this.components.get(
      t = E(t)
    );
    if (r)
      return r;
    throw new Error(`"${t}" has not been registered yet!`);
  }
  register(t, r) {
    return typeof t == "object" ? (Object.entries(t).forEach(([i, n]) => {
      this.register(E(i), n);
    }), this) : (this.components.set(E(t), r), this);
  }
  remove(t) {
    return this.components.delete(E(t)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
};
function ct(e = {}) {
  return new ut(e);
}
const dt = ct();
function v(e, t = "px") {
  return e != null && e !== !1 && isFinite(e) ? `${e}${t}` : e;
}
const ht = $({
  props: {
    absolute: Boolean,
    center: Boolean,
    label: {
      type: String,
      default: void 0
    },
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: String,
      default: "indicators"
    },
    type: {
      type: [Object, String],
      required: !0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    maxHeight: {
      type: [String, Number],
      default: void 0
    },
    minHeight: {
      type: [String, Number],
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    maxWidth: {
      type: [String, Number],
      default: void 0
    },
    minWidth: {
      type: [String, Number],
      default: void 0
    }
  },
  data: () => ({
    is: null
  }),
  computed: {
    classes() {
      return {
        "activity-indicator-center": this.center,
        "activity-indicator-absolute": this.absolute,
        [this.size && `activity-indicator-${this.size}`]: !!this.size
      };
    },
    style() {
      return {
        width: v(this.width),
        maxWidth: v(this.maxWidth),
        minWidth: v(this.minWidth),
        height: v(this.height),
        maxHeight: v(this.maxHeight),
        minHeight: v(this.minHeight)
      };
    }
  },
  // async mounted() {
  //     const component = await this.component();
  //     this.is = () => component;
  // },
  methods: {
    componentFromRegistry(e) {
      var t;
      try {
        return (t = Ve(this.registry || "indicators", dt)) == null ? void 0 : t.get(e);
      } catch {
      }
    },
    component() {
      return typeof this.type == "string" ? this.componentFromRegistry(this.type) : Ue(this.type);
    }
  }
}), ft = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [i, n] of t)
    r[i] = n;
  return r;
}, pt = { class: "activity-indicator-content" }, vt = {
  key: 0,
  class: "activity-indicator-label"
};
function yt(e, t, r, i, n, u) {
  return s(), l("div", {
    class: R(["activity-indicator", e.classes]),
    style: He(e.style)
  }, [
    fe("div", pt, [
      (s(), pe(Ze(e.component()), { class: "mx-auto" })),
      e.label ? (s(), l("div", vt, M(e.label), 1)) : y("", !0)
    ])
  ], 6);
}
const bt = /* @__PURE__ */ ft(ht, [["render", yt]]), j = {};
function a(...e) {
  if (!e.length)
    return j;
  const [t, r] = e;
  return typeof t == "string" ? typeof j[t] < "u" ? j[t] : r : Array.isArray(t) ? t.reduce((i, n) => Object.assign(i, {
    //@ts-ignore
    [n]: j[n]
  }), {}) : Object.assign(j, ...e);
}
const ve = $({
  props: {
    dropShadow: {
      type: [Boolean, String],
      default: void 0
    },
    dropShadowableClassPrefix: {
      type: String,
      default: "drop-shadow"
    },
    shadow: {
      type: [Boolean, String],
      default: void 0
    },
    shadowableClassPrefix: {
      type: String,
      default: "shadow"
    }
  },
  computed: {
    shadowableClass() {
      const e = this.dropShadow === !0 ? "" : this.dropShadow && `-${this.dropShadow}`, t = this.shadow === !0 ? "" : this.shadow && `-${this.shadow}`;
      return {
        [`${this.dropShadowableClassPrefix}${e}`]: !!this.dropShadow,
        [`${this.shadowableClassPrefix}${t}`]: !!this.shadow
      };
    }
  }
});
var mt = typeof global == "object" && global && global.Object === Object && global;
const ye = mt;
var gt = typeof self == "object" && self && self.Object === Object && self, jt = ye || gt || Function("return this")();
const c = jt;
var Ct = c.Symbol;
const m = Ct;
var be = Object.prototype, St = be.hasOwnProperty, $t = be.toString, C = m ? m.toStringTag : void 0;
function At(e) {
  var t = St.call(e, C), r = e[C];
  try {
    e[C] = void 0;
    var i = !0;
  } catch {
  }
  var n = $t.call(e);
  return i && (t ? e[C] = r : delete e[C]), n;
}
var Ot = Object.prototype, xt = Ot.toString;
function Et(e) {
  return xt.call(e);
}
var kt = "[object Null]", wt = "[object Undefined]", G = m ? m.toStringTag : void 0;
function g(e) {
  return e == null ? e === void 0 ? wt : kt : G && G in Object(e) ? At(e) : Et(e);
}
function w(e) {
  return e != null && typeof e == "object";
}
var Ft = "[object Symbol]";
function zt(e) {
  return typeof e == "symbol" || w(e) && g(e) == Ft;
}
function Bt(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length, n = Array(i); ++r < i; )
    n[r] = t(e[r], r, e);
  return n;
}
var Nt = Array.isArray;
const me = Nt;
var It = 1 / 0, q = m ? m.prototype : void 0, _ = q ? q.toString : void 0;
function ge(e) {
  if (typeof e == "string")
    return e;
  if (me(e))
    return Bt(e, ge) + "";
  if (zt(e))
    return _ ? _.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -It ? "-0" : t;
}
function Z(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Tt = "[object AsyncFunction]", Lt = "[object Function]", Rt = "[object GeneratorFunction]", Mt = "[object Proxy]";
function je(e) {
  if (!Z(e))
    return !1;
  var t = g(e);
  return t == Lt || t == Rt || t == Tt || t == Mt;
}
var Pt = c["__core-js_shared__"];
const I = Pt;
var Y = function() {
  var e = /[^.]+$/.exec(I && I.keys && I.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Dt(e) {
  return !!Y && Y in e;
}
var Vt = Function.prototype, Ut = Vt.toString;
function f(e) {
  if (e != null) {
    try {
      return Ut.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ht = /[\\^$.*+?()[\]{}|]/g, Zt = /^\[object .+?Constructor\]$/, Wt = Function.prototype, Gt = Object.prototype, qt = Wt.toString, _t = Gt.hasOwnProperty, Yt = RegExp(
  "^" + qt.call(_t).replace(Ht, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jt(e) {
  if (!Z(e) || Dt(e))
    return !1;
  var t = je(e) ? Yt : Zt;
  return t.test(f(e));
}
function Kt(e, t) {
  return e == null ? void 0 : e[t];
}
function A(e, t) {
  var r = Kt(e, t);
  return Jt(r) ? r : void 0;
}
var Qt = A(c, "WeakMap");
const P = Qt;
var Xt = 9007199254740991;
function Ce(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xt;
}
function er(e) {
  return e != null && Ce(e.length) && !je(e);
}
var tr = Object.prototype;
function Se(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || tr;
  return e === r;
}
var rr = "[object Arguments]";
function J(e) {
  return w(e) && g(e) == rr;
}
var $e = Object.prototype, ir = $e.hasOwnProperty, nr = $e.propertyIsEnumerable, or = J(function() {
  return arguments;
}()) ? J : function(e) {
  return w(e) && ir.call(e, "callee") && !nr.call(e, "callee");
};
const sr = or;
function ar() {
  return !1;
}
var Ae = typeof exports == "object" && exports && !exports.nodeType && exports, K = Ae && typeof module == "object" && module && !module.nodeType && module, lr = K && K.exports === Ae, Q = lr ? c.Buffer : void 0, ur = Q ? Q.isBuffer : void 0, cr = ur || ar;
const dr = cr;
var hr = "[object Arguments]", fr = "[object Array]", pr = "[object Boolean]", vr = "[object Date]", yr = "[object Error]", br = "[object Function]", mr = "[object Map]", gr = "[object Number]", jr = "[object Object]", Cr = "[object RegExp]", Sr = "[object Set]", $r = "[object String]", Ar = "[object WeakMap]", Or = "[object ArrayBuffer]", xr = "[object DataView]", Er = "[object Float32Array]", kr = "[object Float64Array]", wr = "[object Int8Array]", Fr = "[object Int16Array]", zr = "[object Int32Array]", Br = "[object Uint8Array]", Nr = "[object Uint8ClampedArray]", Ir = "[object Uint16Array]", Tr = "[object Uint32Array]", o = {};
o[Er] = o[kr] = o[wr] = o[Fr] = o[zr] = o[Br] = o[Nr] = o[Ir] = o[Tr] = !0;
o[hr] = o[fr] = o[Or] = o[pr] = o[xr] = o[vr] = o[yr] = o[br] = o[mr] = o[gr] = o[jr] = o[Cr] = o[Sr] = o[$r] = o[Ar] = !1;
function Lr(e) {
  return w(e) && Ce(e.length) && !!o[g(e)];
}
function Rr(e) {
  return function(t) {
    return e(t);
  };
}
var Oe = typeof exports == "object" && exports && !exports.nodeType && exports, S = Oe && typeof module == "object" && module && !module.nodeType && module, Mr = S && S.exports === Oe, T = Mr && ye.process, Pr = function() {
  try {
    var e = S && S.require && S.require("util").types;
    return e || T && T.binding && T.binding("util");
  } catch {
  }
}();
const X = Pr;
var ee = X && X.isTypedArray, Dr = ee ? Rr(ee) : Lr;
const Vr = Dr;
function Ur(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Hr = Ur(Object.keys, Object);
const Zr = Hr;
var Wr = Object.prototype, Gr = Wr.hasOwnProperty;
function qr(e) {
  if (!Se(e))
    return Zr(e);
  var t = [];
  for (var r in Object(e))
    Gr.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var _r = A(c, "Map");
const D = _r;
function xe(e) {
  return e == null ? "" : ge(e);
}
function Yr(e, t, r, i) {
  var n = -1, u = e == null ? 0 : e.length;
  for (i && u && (r = e[++n]); ++n < u; )
    r = t(r, e[n], n, e);
  return r;
}
function Jr(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var Kr = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, Qr = Jr(Kr);
const Xr = Qr;
var ei = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ti = "\\u0300-\\u036f", ri = "\\ufe20-\\ufe2f", ii = "\\u20d0-\\u20ff", ni = ti + ri + ii, oi = "[" + ni + "]", si = RegExp(oi, "g");
function ai(e) {
  return e = xe(e), e && e.replace(ei, Xr).replace(si, "");
}
var li = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function ui(e) {
  return e.match(li) || [];
}
var ci = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function di(e) {
  return ci.test(e);
}
var Ee = "\\ud800-\\udfff", hi = "\\u0300-\\u036f", fi = "\\ufe20-\\ufe2f", pi = "\\u20d0-\\u20ff", vi = hi + fi + pi, ke = "\\u2700-\\u27bf", we = "a-z\\xdf-\\xf6\\xf8-\\xff", yi = "\\xac\\xb1\\xd7\\xf7", bi = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", mi = "\\u2000-\\u206f", gi = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fe = "A-Z\\xc0-\\xd6\\xd8-\\xde", ji = "\\ufe0e\\ufe0f", ze = yi + bi + mi + gi, Be = "['’]", te = "[" + ze + "]", Ci = "[" + vi + "]", Ne = "\\d+", Si = "[" + ke + "]", Ie = "[" + we + "]", Te = "[^" + Ee + ze + Ne + ke + we + Fe + "]", $i = "\\ud83c[\\udffb-\\udfff]", Ai = "(?:" + Ci + "|" + $i + ")", Oi = "[^" + Ee + "]", Le = "(?:\\ud83c[\\udde6-\\uddff]){2}", Re = "[\\ud800-\\udbff][\\udc00-\\udfff]", b = "[" + Fe + "]", xi = "\\u200d", re = "(?:" + Ie + "|" + Te + ")", Ei = "(?:" + b + "|" + Te + ")", ie = "(?:" + Be + "(?:d|ll|m|re|s|t|ve))?", ne = "(?:" + Be + "(?:D|LL|M|RE|S|T|VE))?", Me = Ai + "?", Pe = "[" + ji + "]?", ki = "(?:" + xi + "(?:" + [Oi, Le, Re].join("|") + ")" + Pe + Me + ")*", wi = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Fi = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", zi = Pe + Me + ki, Bi = "(?:" + [Si, Le, Re].join("|") + ")" + zi, Ni = RegExp([
  b + "?" + Ie + "+" + ie + "(?=" + [te, b, "$"].join("|") + ")",
  Ei + "+" + ne + "(?=" + [te, b + re, "$"].join("|") + ")",
  b + "?" + re + "+" + ie,
  b + "+" + ne,
  Fi,
  wi,
  Ne,
  Bi
].join("|"), "g");
function Ii(e) {
  return e.match(Ni) || [];
}
function Ti(e, t, r) {
  return e = xe(e), t = r ? void 0 : t, t === void 0 ? di(e) ? Ii(e) : ui(e) : e.match(t) || [];
}
var Li = "['’]", Ri = RegExp(Li, "g");
function Mi(e) {
  return function(t) {
    return Yr(Ti(ai(t).replace(Ri, "")), e, "");
  };
}
var Pi = A(c, "DataView");
const V = Pi;
var Di = A(c, "Promise");
const U = Di;
var Vi = A(c, "Set");
const H = Vi;
var oe = "[object Map]", Ui = "[object Object]", se = "[object Promise]", ae = "[object Set]", le = "[object WeakMap]", ue = "[object DataView]", Hi = f(V), Zi = f(D), Wi = f(U), Gi = f(H), qi = f(P), h = g;
(V && h(new V(new ArrayBuffer(1))) != ue || D && h(new D()) != oe || U && h(U.resolve()) != se || H && h(new H()) != ae || P && h(new P()) != le) && (h = function(e) {
  var t = g(e), r = t == Ui ? e.constructor : void 0, i = r ? f(r) : "";
  if (i)
    switch (i) {
      case Hi:
        return ue;
      case Zi:
        return oe;
      case Wi:
        return se;
      case Gi:
        return ae;
      case qi:
        return le;
    }
  return t;
});
const _i = h;
var Yi = "[object Map]", Ji = "[object Set]", Ki = Object.prototype, Qi = Ki.hasOwnProperty;
function ce(e) {
  if (e == null)
    return !0;
  if (er(e) && (me(e) || typeof e == "string" || typeof e.splice == "function" || dr(e) || Vr(e) || sr(e)))
    return !e.length;
  var t = _i(e);
  if (t == Yi || t == Ji)
    return !e.size;
  if (Se(e))
    return !qr(e).length;
  for (var r in e)
    if (Qi.call(e, r))
      return !1;
  return !0;
}
var Xi = Mi(function(e, t, r) {
  return e + (r ? "-" : "") + t.toLowerCase();
});
const F = Xi;
function de(e, t, r = "-") {
  const i = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    F(i),
    e
  ].filter((n) => !!n).join(r);
}
const en = $({
  directives: {
    bindEvents(e, t) {
      var r, i;
      (i = (r = t.instance) == null ? void 0 : r.bindEvents) == null || i.call(r, e);
    }
  },
  mixins: [
    ve
  ],
  inheritAttrs: !1,
  props: {
    /**
     * Show type activity indicator.
     */
    activity: {
      type: Boolean,
      default: !1
    },
    /**
     * Animate floating labels inside the input.
     */
    animated: {
      type: Boolean,
      default: () => a("animated", !1)
    },
    /**
     * Additional classes assigned to the control element. These do not
     * override any of the classes assigned by the FormControl.
     */
    controlClass: {
      type: [Array, Object, String],
      default: void 0
    },
    /**
     * An inline field validation error.
     */
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     */
    feedback: {
      type: [String, Array],
      default: void 0
    },
    /**
     * The primary class assigned to the form control.
     */
    formControlClass: {
      type: [Array, Object, String],
      default: () => a("controlClass", "form-control")
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => a("group", !0)
    },
    /**
     * Some instructions to appear under the field label.
     */
    helpText: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The activity indicator type.
     */
    indicator: {
      type: [Object, String, Boolean],
      default: () => a("indicator", "spinner")
    },
    /**
     * The activity indicator size.
     */
    indicatorSize: {
      type: String,
      default: void 0
    },
    /**
     * Force the input to be invalid.
     */
    invalid: Boolean,
    /**
     * The value of label element. If no value, no label will appear.
     */
    label: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
      type: [Object, String],
      default: () => a("labelClass", "form-label")
    },
    /**
     * The model default value.
     */
    modelValue: {
      type: [Number, String, Array, Object],
      default: void 0
    },
    /**
     * Should the control look like plaintext.
     */
    plaintext: Boolean,
    /**
     * The size of the form control.
     */
    size: {
      type: String,
      default: void 0
    },
    /**
     * Force the input to be valid.
     */
    valid: Boolean
  },
  emits: [
    "focus",
    "blur",
    "change",
    "click",
    "keypress",
    "keyup",
    "keydown",
    "progress",
    "paste",
    "update:modelValue"
  ],
  data() {
    return {
      // currentValue: this.modelValue,
      hasChanged: !1,
      hasFocus: !1,
      isDirty: !1,
      isEmpty: ce(this.modelValue)
    };
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.hasChanged = !0, this.isEmpty = ce(e), this.$emit("update:modelValue", e);
      }
    },
    id() {
      return this.$attrs.id || Math.random().toString(36).slice(2);
    },
    componentName() {
      return this.$options.name;
    },
    formGroupClasses() {
      return Object.assign({
        animated: this.animated,
        "form-group": this.group,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-dirty": this.isDirty,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.size && de(this.size, this.componentName)]: !!this.size
      }, !!this.componentName && {
        [F(this.componentName)]: !0
      });
    },
    controlAttributes() {
      return Object.assign({}, this.$attrs, {
        id: this.id,
        class: this.controlClasses,
        value: this.modelValue
      });
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        [this.formControlClass]: !!this.formControlClass,
        [this.plaintextClass]: this.plaintext,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": !!(this.valid || this.validFeedback),
        "is-invalid": !!(this.invalid || this.invalidFeedback)
      }, this.shadowableClass);
    },
    controlSizeClass() {
      return de(this.size, this.formControlClass);
    },
    invalidFeedback() {
      if (this.error === "")
        return null;
      if (this.error)
        return this.error;
      const e = this.getFieldErrors();
      return Array.isArray(e) ? e.filter((t) => t && typeof t == "string").join("<br>") : e;
    },
    validFeedback() {
      return Array.isArray(this.feedback) ? this.feedback.join("<br>") : this.feedback;
    },
    plaintextClass() {
      return "form-control-plaintext";
    }
  },
  // watch: {
  //     currentValue(value) {
  //         this.hasChanged = true;
  //         this.isEmpty = isEmpty(value);
  //         this.$emit('update:modelValue', this.value);
  //     }
  // },
  methods: {
    bindEvents(e) {
      for (const t of this.$options.emits)
        e.addEventListener(t, (r) => {
          this.$emit(t, r);
        });
      e.addEventListener("focus", () => {
        this.isDirty = !0, this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      });
    },
    blur() {
      var e;
      (e = this.$refs.field) == null || e.blur();
    },
    focus() {
      var e;
      (e = this.$refs.field) == null || e.focus();
    },
    getFieldErrors() {
      let e = this.error || this.errors;
      return this.errors && !Array.isArray(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || Z(e) ? e : [e];
    }
  }
});
function L(e, t, r = "-") {
  const i = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    F(i),
    e
  ].filter((n) => !!n).join(r);
}
function he(e) {
  return !Array.isArray(e) && typeof e == "object";
}
$({
  directives: {
    bindEvents: {
      beforeMount(e, t) {
        var r, i;
        (i = (r = t.instance) == null ? void 0 : r.bindEvents) == null || i.call(r, e);
      }
    }
  },
  mixins: [
    ve
  ],
  inheritAttrs: !1,
  props: {
    modelValue: {
      default: void 0
    },
    /**
     * Show type activity indicator.
     */
    activity: {
      type: Boolean,
      default: !1
    },
    /**
     * Animate floating labels inside the input.
     */
    animated: {
      type: Boolean,
      default: () => a("animated", !1)
    },
    /**
     * An array of event names that correlate with callback functions.
     */
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    /**
     * The default class name assigned to the control element.
     */
    defaultControlClass: {
      type: String,
      default: () => a("defaultControlClass", "form-control")
    },
    /**
     * An inline field validation error.
     */
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     */
    feedback: {
      type: [String, Array],
      default: void 0
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => a("group", !0)
    },
    /**
     * Some instructions to appear under the field label.
     */
    helpText: {
      type: [Number, String],
      default: void 0
    },
    /**
     * Hide the label for browsers, but leave it for screen readers.
     */
    hideLabel: Boolean,
    /**
     * The activity indicator type.
     */
    indicator: {
      type: [String, Boolean],
      default: () => a("indicator", "spinner")
    },
    /**
     * The activity indicator size.
     */
    indicatorSize: {
      type: String,
      default: void 0
    },
    /**
     * Display the form field inline.
     */
    inline: Boolean,
    /**
     * The invalid property.
     */
    invalid: Boolean,
    /**
     * The value of label element. If no value, no label will appear.
     */
    label: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
      type: [Object, String],
      default: () => a("labelClass", "form-label")
    },
    /**
     * Should the control look like a pill.
     */
    pill: Boolean,
    /**
     * Should the control look like plaintext.
     */
    plaintext: Boolean,
    /**
     * The size of the form control.
     */
    size: {
      type: String,
      default: void 0
    },
    /**
     * Additional margin/padding classes for fine control of spacing.
     */
    spacing: {
      type: String,
      default: void 0
    },
    /**
     * The valid property.
     */
    valid: Boolean
  },
  emits: [
    "blur",
    "change",
    "click",
    "focus",
    "keydown",
    "keypress",
    "keyup",
    "update:modelValue"
  ],
  data() {
    return {
      defaultEmpty: !1,
      hasChanged: !1,
      hasFocus: !1,
      isEmpty: !0
    };
  },
  computed: {
    id() {
      return this.$attrs.id || this.$attrs.name || (Math.random() + 1).toString(36).substring(7);
    },
    componentName() {
      return this.$options.name;
    },
    controlAttributes() {
      return Object.fromEntries(
        Object.entries(this.$attrs).concat([
          ["id", this.id],
          ["class", this.controlClasses],
          ["value", this.modelValue]
        ])
      );
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return L(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && L(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && L(this.size, "form-group")]: !!this.size,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.$attrs.id]: !!this.$attrs.id
      }, !!this.componentName && {
        [F(this.componentName)]: !0
      });
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": !!(this.valid || this.validFeedback),
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        [this.pillClasses]: this.pill,
        [this.plaintextClass]: this.plaintext,
        [this.spacing]: !!this.spacing
      }, this.shadowableClass);
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    invalidFeedback() {
      if (this.error === "")
        return null;
      if (this.error)
        return this.error;
      const e = this.getFieldErrors();
      return Array.isArray(e) ? e.filter((t) => t && typeof t == "string").join("<br>") : e;
    },
    pillClasses() {
      return "rounded rounded-pill";
    },
    plaintextClass() {
      return "form-control-plaintext";
    },
    validFeedback() {
      return Array.isArray(this.feedback) ? this.feedback.join("<br>") : this.feedback;
    }
  },
  watch: {
    hasFocus() {
      this.shouldChangeOnFocus() && (this.hasChanged = !0);
    },
    defaultEmpty() {
      this.hasChanged = !0;
    }
  },
  methods: {
    bindEvents(e, t) {
      var r;
      t || (t = this.onInput);
      const i = e instanceof HTMLSelectElement ? (r = e.querySelectorAll("option")) == null ? void 0 : r[e.selectedIndex] : null;
      i && (e.value = i == null ? void 0 : i.value), e.value && t(e.value), this.hasChanged = !!e.value, this.isEmpty = !e.value, e.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), e.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), e.addEventListener(
        e.tagName === "SELECT" ? "change" : "input",
        () => t(e.value)
      ), this.nativeEvents.forEach((n) => {
        e.addEventListener(n, (u) => {
          this.$emit(n, u);
        });
      });
    },
    blur() {
      this.getInputField() && this.getInputField().blur();
    },
    focus() {
      this.getInputField() && this.getInputField().focus();
    },
    getInputField() {
      return this.$el.querySelector(
        ".form-control, input, select, textarea"
      );
    },
    getFieldErrors() {
      let e = this.error || this.errors;
      return this.errors && he(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || he(e) ? e : [e];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(e) {
      this.$emit("update:modelValue", e);
    }
  }
});
const tn = $({
  name: "SelectField",
  components: {
    ActivityIndicator: bt
  },
  extends: en,
  props: {
    /**
     * The default class name assigned to the control element
     *
     * @param {String}
     * @default 'form-select'
     */
    formControlClass: {
      type: String,
      default: "form-select"
    }
  },
  computed: {
    controlClass() {
      return this.plaintext ? `${this.defaultControlClass}-plaintext` : this.defaultControlClass;
    }
  },
  methods: {
    shouldChangeOnFocus() {
      return !1;
    }
  }
});
const rn = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [i, n] of t)
    r[i] = n;
  return r;
}, nn = ["for"], on = { class: "form-group-inner" }, sn = ["innerHTML"], an = ["innerHTML"];
function ln(e, t, r, i, n, u) {
  const O = We("activity-indicator"), z = Ge("bind-events");
  return s(), l("div", {
    class: R(e.formGroupClasses)
  }, [
    d(e.$slots, "label", {}, () => [
      e.label ? (s(), l("label", {
        key: 0,
        ref: "label",
        for: e.id,
        class: R(e.labelClass)
      }, M(e.label), 11, nn)) : y("", !0)
    ]),
    fe("div", on, [
      d(e.$slots, "control", qe(_e({ bindEvents: e.bindEvents, controlAttributes: e.controlAttributes })), () => [
        e.$slots.icon ? (s(), l("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: t[0] || (t[0] = (...p) => e.focus && e.focus(...p))
        }, [
          d(e.$slots, "icon")
        ])) : y("", !0),
        Ye((s(), l("select", Je({
          ref: "field",
          "onUpdate:modelValue": t[1] || (t[1] = (p) => e.model = p)
        }, Object.assign({
          disabled: e.$attrs.readonly
        }, e.controlAttributes)), [
          d(e.$slots, "default")
        ], 16)), [
          [Ke, e.model],
          [z]
        ])
      ]),
      d(e.$slots, "activity", {}, () => [
        Qe(Xe, { name: "select-field-fade" }, {
          default: et(() => [
            e.activity ? (s(), pe(O, {
              key: "activity",
              ref: "activity",
              type: e.indicator,
              size: e.indicatorSize || e.size
            }, null, 8, ["type", "size"])) : y("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    d(e.$slots, "feedback", {}, () => [
      e.invalidFeedback ? (s(), l("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: e.invalidFeedback
      }, null, 8, sn)) : e.validFeedback ? (s(), l("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: e.validFeedback
      }, null, 8, an)) : y("", !0)
    ]),
    d(e.$slots, "help", {}, () => [
      e.helpText ? (s(), l("small", {
        key: 0,
        ref: "help"
      }, M(e.helpText), 513)) : y("", !0)
    ])
  ], 2);
}
const dn = /* @__PURE__ */ rn(tn, [["render", ln]]);
export {
  dn as SelectField
};
//# sourceMappingURL=select-field.js.map

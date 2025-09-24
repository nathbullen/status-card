const je = "v3.0.2-beta", Fe = {
  version: je
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ot = globalThis, Qt = Ot.ShadowRoot && (Ot.ShadyCSS === void 0 || Ot.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, te = Symbol(), re = /* @__PURE__ */ new WeakMap();
let ke = class {
  constructor(t, i, s) {
    if (this._$cssResult$ = !0, s !== te) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = i;
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (Qt && t === void 0) {
      const s = i !== void 0 && i.length === 1;
      s && (t = re.get(i)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && re.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ue = (e) => new ke(typeof e == "string" ? e : e + "", void 0, te), bt = (e, ...t) => {
  const i = e.length === 1 ? e[0] : t.reduce(((s, o, n) => s + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + e[n + 1]), e[0]);
  return new ke(i, e, te);
}, Re = (e, t) => {
  if (Qt) e.adoptedStyleSheets = t.map(((i) => i instanceof CSSStyleSheet ? i : i.styleSheet));
  else for (const i of t) {
    const s = document.createElement("style"), o = Ot.litNonce;
    o !== void 0 && s.setAttribute("nonce", o), s.textContent = i.cssText, e.appendChild(s);
  }
}, ce = Qt ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const s of t.cssRules) i += s.cssText;
  return Ue(i);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ve, defineProperty: qe, getOwnPropertyDescriptor: We, getOwnPropertyNames: Ge, getOwnPropertySymbols: Ke, getPrototypeOf: Ze } = Object, et = globalThis, le = et.trustedTypes, Je = le ? le.emptyScript : "", qt = et.reactiveElementPolyfillSupport, Et = (e, t) => e, Mt = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Je : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let i = e;
  switch (t) {
    case Boolean:
      i = e !== null;
      break;
    case Number:
      i = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(e);
      } catch {
        i = null;
      }
  }
  return i;
} }, ee = (e, t) => !Ve(e, t), de = { attribute: !0, type: String, converter: Mt, reflect: !1, useDefault: !1, hasChanged: ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), et.litPropertyMetadata ?? (et.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let gt = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, i = de) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(t, i), !i.noAccessor) {
      const s = Symbol(), o = this.getPropertyDescriptor(t, s, i);
      o !== void 0 && qe(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, i, s) {
    const { get: o, set: n } = We(this.prototype, t) ?? { get() {
      return this[i];
    }, set(a) {
      this[i] = a;
    } };
    return { get: o, set(a) {
      const c = o == null ? void 0 : o.call(this);
      n == null || n.call(this, a), this.requestUpdate(t, c, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? de;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Et("elementProperties"))) return;
    const t = Ze(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Et("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Et("properties"))) {
      const i = this.properties, s = [...Ge(i), ...Ke(i)];
      for (const o of s) this.createProperty(o, i[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const i = litPropertyMetadata.get(t);
      if (i !== void 0) for (const [s, o] of i) this.elementProperties.set(s, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, s] of this.elementProperties) {
      const o = this._$Eu(i, s);
      o !== void 0 && this._$Eh.set(o, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const o of s) i.unshift(ce(o));
    } else t !== void 0 && i.push(ce(t));
    return i;
  }
  static _$Eu(t, i) {
    const s = i.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise(((i) => this.enableUpdating = i)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach(((i) => i(this)));
  }
  addController(t) {
    var i;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) == null || i.call(t));
  }
  removeController(t) {
    var i;
    (i = this._$EO) == null || i.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), i = this.constructor.elementProperties;
    for (const s of i.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Re(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach(((i) => {
      var s;
      return (s = i.hostConnected) == null ? void 0 : s.call(i);
    }));
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach(((i) => {
      var s;
      return (s = i.hostDisconnected) == null ? void 0 : s.call(i);
    }));
  }
  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }
  _$ET(t, i) {
    var n;
    const s = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, s);
    if (o !== void 0 && s.reflect === !0) {
      const a = (((n = s.converter) == null ? void 0 : n.toAttribute) !== void 0 ? s.converter : Mt).toAttribute(i, s.type);
      this._$Em = t, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._$Em = null;
    }
  }
  _$AK(t, i) {
    var n, a;
    const s = this.constructor, o = s._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const c = s.getPropertyOptions(o), r = typeof c.converter == "function" ? { fromAttribute: c.converter } : ((n = c.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? c.converter : Mt;
      this._$Em = o;
      const l = r.fromAttribute(i, c.type);
      this[o] = l ?? ((a = this._$Ej) == null ? void 0 : a.get(o)) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, i, s) {
    var o;
    if (t !== void 0) {
      const n = this.constructor, a = this[t];
      if (s ?? (s = n.getPropertyOptions(t)), !((s.hasChanged ?? ee)(a, i) || s.useDefault && s.reflect && a === ((o = this._$Ej) == null ? void 0 : o.get(t)) && !this.hasAttribute(n._$Eu(t, s)))) return;
      this.C(t, i, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, i, { useDefault: s, reflect: o, wrapped: n }, a) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, a ?? i ?? this[t]), n !== !0 || a !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (i = void 0), this._$AL.set(t, i)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (i) {
      Promise.reject(i);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, a] of this._$Ep) this[n] = a;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [n, a] of o) {
        const { wrapped: c } = a, r = this[n];
        c !== !0 || this._$AL.has(n) || r === void 0 || this.C(n, void 0, a, r);
      }
    }
    let t = !1;
    const i = this._$AL;
    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), (s = this._$EO) == null || s.forEach(((o) => {
        var n;
        return (n = o.hostUpdate) == null ? void 0 : n.call(o);
      })), this.update(i)) : this._$EM();
    } catch (o) {
      throw t = !1, this._$EM(), o;
    }
    t && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var i;
    (i = this._$EO) == null || i.forEach(((s) => {
      var o;
      return (o = s.hostUpdated) == null ? void 0 : o.call(s);
    })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach(((i) => this._$ET(i, this[i])))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
gt.elementStyles = [], gt.shadowRootOptions = { mode: "open" }, gt[Et("elementProperties")] = /* @__PURE__ */ new Map(), gt[Et("finalized")] = /* @__PURE__ */ new Map(), qt == null || qt({ ReactiveElement: gt }), (et.reactiveElementVersions ?? (et.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ct = globalThis, Ht = Ct.trustedTypes, ue = Ht ? Ht.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, De = "$lit$", Q = `lit$${Math.random().toFixed(9).slice(2)}$`, Te = "?" + Q, Xe = `<${Te}>`, ut = document, St = () => ut.createComment(""), xt = (e) => e === null || typeof e != "object" && typeof e != "function", ie = Array.isArray, Ye = (e) => ie(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", Wt = `[ 	
\f\r]`, wt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, he = /-->/g, me = />/g, nt = RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), pe = /'/g, fe = /"/g, Oe = /^(?:script|style|textarea|title)$/i, Qe = (e) => (t, ...i) => ({ _$litType$: e, strings: t, values: i }), b = Qe(1), Z = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), _e = /* @__PURE__ */ new WeakMap(), rt = ut.createTreeWalker(ut, 129);
function Le(e, t) {
  if (!ie(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ue !== void 0 ? ue.createHTML(t) : t;
}
const ti = (e, t) => {
  const i = e.length - 1, s = [];
  let o, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = wt;
  for (let c = 0; c < i; c++) {
    const r = e[c];
    let l, d, u = -1, h = 0;
    for (; h < r.length && (a.lastIndex = h, d = a.exec(r), d !== null); ) h = a.lastIndex, a === wt ? d[1] === "!--" ? a = he : d[1] !== void 0 ? a = me : d[2] !== void 0 ? (Oe.test(d[2]) && (o = RegExp("</" + d[2], "g")), a = nt) : d[3] !== void 0 && (a = nt) : a === nt ? d[0] === ">" ? (a = o ?? wt, u = -1) : d[1] === void 0 ? u = -2 : (u = a.lastIndex - d[2].length, l = d[1], a = d[3] === void 0 ? nt : d[3] === '"' ? fe : pe) : a === fe || a === pe ? a = nt : a === he || a === me ? a = wt : (a = nt, o = void 0);
    const f = a === nt && e[c + 1].startsWith("/>") ? " " : "";
    n += a === wt ? r + Xe : u >= 0 ? (s.push(l), r.slice(0, u) + De + r.slice(u) + Q + f) : r + Q + (u === -2 ? c : f);
  }
  return [Le(e, n + (e[i] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class zt {
  constructor({ strings: t, _$litType$: i }, s) {
    let o;
    this.parts = [];
    let n = 0, a = 0;
    const c = t.length - 1, r = this.parts, [l, d] = ti(t, i);
    if (this.el = zt.createElement(l, s), rt.currentNode = this.el.content, i === 2 || i === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (o = rt.nextNode()) !== null && r.length < c; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const u of o.getAttributeNames()) if (u.endsWith(De)) {
          const h = d[a++], f = o.getAttribute(u).split(Q), m = /([.?@])?(.*)/.exec(h);
          r.push({ type: 1, index: n, name: m[2], strings: f, ctor: m[1] === "." ? ii : m[1] === "?" ? si : m[1] === "@" ? oi : Nt }), o.removeAttribute(u);
        } else u.startsWith(Q) && (r.push({ type: 6, index: n }), o.removeAttribute(u));
        if (Oe.test(o.tagName)) {
          const u = o.textContent.split(Q), h = u.length - 1;
          if (h > 0) {
            o.textContent = Ht ? Ht.emptyScript : "";
            for (let f = 0; f < h; f++) o.append(u[f], St()), rt.nextNode(), r.push({ type: 2, index: ++n });
            o.append(u[h], St());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Te) r.push({ type: 2, index: n });
      else {
        let u = -1;
        for (; (u = o.data.indexOf(Q, u + 1)) !== -1; ) r.push({ type: 7, index: n }), u += Q.length - 1;
      }
      n++;
    }
  }
  static createElement(t, i) {
    const s = ut.createElement("template");
    return s.innerHTML = t, s;
  }
}
function vt(e, t, i = e, s) {
  var a, c;
  if (t === Z) return t;
  let o = s !== void 0 ? (a = i._$Co) == null ? void 0 : a[s] : i._$Cl;
  const n = xt(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== n && ((c = o == null ? void 0 : o._$AO) == null || c.call(o, !1), n === void 0 ? o = void 0 : (o = new n(e), o._$AT(e, i, s)), s !== void 0 ? (i._$Co ?? (i._$Co = []))[s] = o : i._$Cl = o), o !== void 0 && (t = vt(e, o._$AS(e, t.values), o, s)), t;
}
let ei = class {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: i }, parts: s } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? ut).importNode(i, !0);
    rt.currentNode = o;
    let n = rt.nextNode(), a = 0, c = 0, r = s[0];
    for (; r !== void 0; ) {
      if (a === r.index) {
        let l;
        r.type === 2 ? l = new $t(n, n.nextSibling, this, t) : r.type === 1 ? l = new r.ctor(n, r.name, r.strings, this, t) : r.type === 6 && (l = new ni(n, this, t)), this._$AV.push(l), r = s[++c];
      }
      a !== (r == null ? void 0 : r.index) && (n = rt.nextNode(), a++);
    }
    return rt.currentNode = ut, o;
  }
  p(t) {
    let i = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
};
class $t {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, i, s, o) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = vt(this, t, i), xt(t) ? t === T || t == null || t === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== Z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ye(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== T && xt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(ut.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var n;
    const { values: i, _$litType$: s } = t, o = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = zt.createElement(Le(s.h, s.h[0]), this.options)), s);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === o) this._$AH.p(i);
    else {
      const a = new ei(o, this), c = a.u(this.options);
      a.p(i), this.T(c), this._$AH = a;
    }
  }
  _$AC(t) {
    let i = _e.get(t.strings);
    return i === void 0 && _e.set(t.strings, i = new zt(t)), i;
  }
  k(t) {
    ie(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s, o = 0;
    for (const n of t) o === i.length ? i.push(s = new $t(this.O(St()), this.O(St()), this, this.options)) : s = i[o], s._$AI(n), o++;
    o < i.length && (this._$AR(s && s._$AB.nextSibling, o), i.length = o);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, i); t !== this._$AB; ) {
      const o = t.nextSibling;
      t.remove(), t = o;
    }
  }
  setConnected(t) {
    var i;
    this._$AM === void 0 && (this._$Cv = t, (i = this._$AP) == null || i.call(this, t));
  }
}
class Nt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, s, o, n) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t, this.name = i, this._$AM = o, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = T;
  }
  _$AI(t, i = this, s, o) {
    const n = this.strings;
    let a = !1;
    if (n === void 0) t = vt(this, t, i, 0), a = !xt(t) || t !== this._$AH && t !== Z, a && (this._$AH = t);
    else {
      const c = t;
      let r, l;
      for (t = n[0], r = 0; r < n.length - 1; r++) l = vt(this, c[s + r], i, r), l === Z && (l = this._$AH[r]), a || (a = !xt(l) || l !== this._$AH[r]), l === T ? t = T : t !== T && (t += (l ?? "") + n[r + 1]), this._$AH[r] = l;
    }
    a && !o && this.j(t);
  }
  j(t) {
    t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
let ii = class extends Nt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === T ? void 0 : t;
  }
};
class si extends Nt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== T);
  }
}
class oi extends Nt {
  constructor(t, i, s, o, n) {
    super(t, i, s, o, n), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = vt(this, t, i, 0) ?? T) === Z) return;
    const s = this._$AH, o = t === T && s !== T || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== T && (s === T || o);
    o && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ni {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    vt(this, t);
  }
}
const ai = { I: $t }, Gt = Ct.litHtmlPolyfillSupport;
Gt == null || Gt(zt, $t), (Ct.litHtmlVersions ?? (Ct.litHtmlVersions = [])).push("3.3.1");
const ri = (e, t, i) => {
  const s = (i == null ? void 0 : i.renderBefore) ?? t;
  let o = s._$litPart$;
  if (o === void 0) {
    const n = (i == null ? void 0 : i.renderBefore) ?? null;
    s._$litPart$ = o = new $t(t.insertBefore(St(), n), n, void 0, i ?? {});
  }
  return o._$AI(e), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt = globalThis;
let K = class extends gt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var i;
    const t = super.createRenderRoot();
    return (i = this.renderOptions).renderBefore ?? (i.renderBefore = t.firstChild), t;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ri(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return Z;
  }
};
var ze;
K._$litElement$ = !0, K.finalized = !0, (ze = lt.litElementHydrateSupport) == null || ze.call(lt, { LitElement: K });
const Kt = lt.litElementPolyfillSupport;
Kt == null || Kt({ LitElement: K });
(lt.litElementVersions ?? (lt.litElementVersions = [])).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const jt = (e) => (t, i) => {
  i !== void 0 ? i.addInitializer((() => {
    customElements.define(e, t);
  })) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ci = { attribute: !0, type: String, converter: Mt, reflect: !1, hasChanged: ee }, li = (e = ci, t, i) => {
  const { kind: s, metadata: o } = i;
  let n = globalThis.litPropertyMetadata.get(o);
  if (n === void 0 && globalThis.litPropertyMetadata.set(o, n = /* @__PURE__ */ new Map()), s === "setter" && ((e = Object.create(e)).wrapped = !0), n.set(i.name, e), s === "accessor") {
    const { name: a } = i;
    return { set(c) {
      const r = t.get.call(this);
      t.set.call(this, c), this.requestUpdate(a, r, e);
    }, init(c) {
      return c !== void 0 && this.C(a, void 0, e, c), c;
    } };
  }
  if (s === "setter") {
    const { name: a } = i;
    return function(c) {
      const r = this[a];
      t.call(this, c), this.requestUpdate(a, r, e);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function E(e) {
  return (t, i) => typeof i == "object" ? li(e, t, i) : ((s, o, n) => {
    const a = o.hasOwnProperty(n);
    return o.constructor.createProperty(n, s), a ? Object.getOwnPropertyDescriptor(o, n) : void 0;
  })(e, t, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function D(e) {
  return E({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se = { ATTRIBUTE: 1, CHILD: 2 }, Ft = (e) => (...t) => ({ _$litDirective$: e, values: t });
let Ut = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, i, s) {
    this._$Ct = t, this._$AM = i, this._$Ci = s;
  }
  _$AS(t, i) {
    return this.update(t, i);
  }
  update(t, i) {
    return this.render(...i);
  }
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: di } = ai, ge = () => document.createComment(""), At = (e, t, i) => {
  var n;
  const s = e._$AA.parentNode, o = t === void 0 ? e._$AB : t._$AA;
  if (i === void 0) {
    const a = s.insertBefore(ge(), o), c = s.insertBefore(ge(), o);
    i = new di(a, c, e, e.options);
  } else {
    const a = i._$AB.nextSibling, c = i._$AM, r = c !== e;
    if (r) {
      let l;
      (n = i._$AQ) == null || n.call(i, e), i._$AM = e, i._$AP !== void 0 && (l = e._$AU) !== c._$AU && i._$AP(l);
    }
    if (a !== o || r) {
      let l = i._$AA;
      for (; l !== a; ) {
        const d = l.nextSibling;
        s.insertBefore(l, o), l = d;
      }
    }
  }
  return i;
}, at = (e, t, i = e) => (e._$AI(t, i), e), ui = {}, hi = (e, t = ui) => e._$AH = t, mi = (e) => e._$AH, Zt = (e) => {
  e._$AR(), e._$AA.remove();
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ye = (e, t, i) => {
  const s = /* @__PURE__ */ new Map();
  for (let o = t; o <= i; o++) s.set(e[o], o);
  return s;
}, tt = Ft(class extends Ut {
  constructor(e) {
    if (super(e), e.type !== se.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(e, t, i) {
    let s;
    i === void 0 ? i = t : t !== void 0 && (s = t);
    const o = [], n = [];
    let a = 0;
    for (const c of e) o[a] = s ? s(c, a) : a, n[a] = i(c, a), a++;
    return { values: n, keys: o };
  }
  render(e, t, i) {
    return this.dt(e, t, i).values;
  }
  update(e, [t, i, s]) {
    const o = mi(e), { values: n, keys: a } = this.dt(t, i, s);
    if (!Array.isArray(o)) return this.ut = a, n;
    const c = this.ut ?? (this.ut = []), r = [];
    let l, d, u = 0, h = o.length - 1, f = 0, m = n.length - 1;
    for (; u <= h && f <= m; ) if (o[u] === null) u++;
    else if (o[h] === null) h--;
    else if (c[u] === a[f]) r[f] = at(o[u], n[f]), u++, f++;
    else if (c[h] === a[m]) r[m] = at(o[h], n[m]), h--, m--;
    else if (c[u] === a[m]) r[m] = at(o[u], n[m]), At(e, r[m + 1], o[u]), u++, m--;
    else if (c[h] === a[f]) r[f] = at(o[h], n[f]), At(e, o[u], o[h]), h--, f++;
    else if (l === void 0 && (l = ye(a, f, m), d = ye(c, u, h)), l.has(c[u])) if (l.has(c[h])) {
      const y = d.get(a[f]), p = y !== void 0 ? o[y] : null;
      if (p === null) {
        const _ = At(e, o[u]);
        at(_, n[f]), r[f] = _;
      } else r[f] = at(p, n[f]), At(e, o[u], p), o[y] = null;
      f++;
    } else Zt(o[h]), h--;
    else Zt(o[u]), u++;
    for (; f <= m; ) {
      const y = At(e, r[m + 1]);
      at(y, n[f]), r[f++] = y;
    }
    for (; u <= h; ) {
      const y = o[u++];
      y !== null && Zt(y);
    }
    return this.ut = a, hi(e, r), Z;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt = Ft(class extends Ut {
  constructor(e) {
    var t;
    if (super(e), e.type !== se.ATTRIBUTE || e.name !== "class" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter(((t) => e[t])).join(" ") + " ";
  }
  update(e, [t]) {
    var s, o;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter(((n) => n !== ""))));
      for (const n in t) t[n] && !((s = this.nt) != null && s.has(n)) && this.st.add(n);
      return this.render(t);
    }
    const i = e.element.classList;
    for (const n of this.st) n in t || (i.remove(n), this.st.delete(n));
    for (const n in t) {
      const a = !!t[n];
      a === this.st.has(n) || (o = this.nt) != null && o.has(n) || (a ? (i.add(n), this.st.add(n)) : (i.remove(n), this.st.delete(n)));
    }
    return Z;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Me = "important", pi = " !" + Me, X = Ft(class extends Ut {
  constructor(e) {
    var t;
    if (super(e), e.type !== se.ATTRIBUTE || e.name !== "style" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return Object.keys(e).reduce(((t, i) => {
      const s = e[i];
      return s == null ? t : t + `${i = i.includes("-") ? i : i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
    }), "");
  }
  update(e, [t]) {
    const { style: i } = e.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const s of this.ft) t[s] == null && (this.ft.delete(s), s.includes("-") ? i.removeProperty(s) : i[s] = null);
    for (const s in t) {
      const o = t[s];
      if (o != null) {
        this.ft.add(s);
        const n = typeof o == "string" && o.endsWith(pi);
        s.includes("-") || n ? i.setProperty(s, n ? o.slice(0, -11) : o, n ? Me : "") : i[s] = o;
      }
    }
    return Z;
  }
});
var ve = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function fi(e, t) {
  return !!(e === t || ve(e) && ve(t));
}
function _i(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var i = 0; i < e.length; i++)
    if (!fi(e[i], t[i]))
      return !1;
  return !0;
}
function C(e, t) {
  t === void 0 && (t = _i);
  var i = null;
  function s() {
    for (var o = [], n = 0; n < arguments.length; n++)
      o[n] = arguments[n];
    if (i && i.lastThis === this && t(o, i.lastArgs))
      return i.lastResult;
    var a = e.apply(this, o);
    return i = {
      lastResult: a,
      lastArgs: o,
      lastThis: this
    }, a;
  }
  return s.clear = function() {
    i = null;
  }, s;
}
var ct, be;
(function(e) {
  e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
})(ct || (ct = {})), (function(e) {
  e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
})(be || (be = {}));
function He() {
  return (He = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
  }).apply(this, arguments);
}
function I(e) {
  return e.substr(0, e.indexOf("."));
}
var gi = function(e) {
  switch (e.number_format) {
    case ct.comma_decimal:
      return ["en-US", "en"];
    case ct.decimal_comma:
      return ["de", "es", "it"];
    case ct.space_comma:
      return ["fr", "sv", "cs"];
    case ct.system:
      return;
    default:
      return e.language;
  }
}, yi = function(e, t) {
  return t === void 0 && (t = 2), Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
}, $e = function(e, t, i) {
  var s = t ? gi(t) : void 0;
  if (Number.isNaN = Number.isNaN || function o(n) {
    return typeof n == "number" && o(n);
  }, (t == null ? void 0 : t.number_format) !== ct.none && !Number.isNaN(Number(e)) && Intl) try {
    return new Intl.NumberFormat(s, we(e, i)).format(Number(e));
  } catch (o) {
    return console.error(o), new Intl.NumberFormat(void 0, we(e, i)).format(Number(e));
  }
  return typeof e == "string" ? e : yi(e, void 0).toString() + "";
}, we = function(e, t) {
  var i = He({ maximumFractionDigits: 2 }, t);
  if (typeof e != "string") return i;
  {
    var s = e.indexOf(".") > -1 ? e.split(".")[1].length : 0;
    i.minimumFractionDigits = s, i.maximumFractionDigits = s;
  }
  return i;
}, vi = ["closed", "locked", "off"], Pt = function(e, t, i, s) {
  s = s || {}, i = i ?? {};
  var o = new Event(t, { bubbles: s.bubbles === void 0 || s.bubbles, cancelable: !!s.cancelable, composed: s.composed === void 0 || s.composed });
  return o.detail = i, e.dispatchEvent(o), o;
}, Dt = function(e) {
  Pt(window, "haptic", e);
}, bi = function(e, t, i) {
  i === void 0 && (i = !1), i ? history.replaceState(null, "", t) : history.pushState(null, "", t), Pt(window, "location-changed", { replace: i });
}, $i = function(e, t, i) {
  i === void 0 && (i = !0);
  var s, o = I(t), n = o === "group" ? "homeassistant" : o;
  switch (o) {
    case "lock":
      s = i ? "unlock" : "lock";
      break;
    case "cover":
      s = i ? "open_cover" : "close_cover";
      break;
    default:
      s = i ? "turn_on" : "turn_off";
  }
  return e.callService(n, s, { entity_id: t });
}, wi = function(e, t) {
  var i = vi.includes(e.states[t].state);
  return $i(e, t, i);
}, Ai = function(e, t, i, s) {
  if (s || (s = { action: "more-info" }), !s.confirmation || s.confirmation.exemptions && s.confirmation.exemptions.some(function(n) {
    return n.user === t.user.id;
  }) || (Dt("warning"), confirm(s.confirmation.text || "Are you sure you want to " + s.action + "?"))) switch (s.action) {
    case "more-info":
      (i.entity || i.camera_image) && Pt(e, "hass-more-info", { entityId: i.entity ? i.entity : i.camera_image });
      break;
    case "navigate":
      s.navigation_path && bi(0, s.navigation_path);
      break;
    case "url":
      s.url_path && window.open(s.url_path);
      break;
    case "toggle":
      i.entity && (wi(t, i.entity), Dt("success"));
      break;
    case "call-service":
      if (!s.service) return void Dt("failure");
      var o = s.service.split(".", 2);
      t.callService(o[0], o[1], s.service_data, s.target), Dt("success");
      break;
    case "fire-dom-event":
      Pt(e, "ll-custom", s);
  }
}, Ei = function(e, t, i, s) {
  var o;
  s === "double_tap" && i.double_tap_action ? o = i.double_tap_action : s === "hold" && i.hold_action ? o = i.hold_action : s === "tap" && i.tap_action && (o = i.tap_action), Ai(e, t, i, o);
};
function ft(e) {
  return e !== void 0 && e.action !== "none";
}
var Ci = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", oe = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", Si = "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z", Ae = "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z", Ee = "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z", xi = "M17 14V17H14V19H17V22H19V19H22V17H19V14M20 11V12.3C19.4 12.1 18.7 12 18 12C16.8 12 15.6 12.4 14.7 13H7V11H20M12.1 17H7V15H12.8C12.5 15.6 12.2 16.3 12.1 17M7 7H20V9H7V7M5 19H7V21H3V3H7V5H5V19Z", zi = "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z", ki = "M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z", Ce = "M10 19.11L12.11 17H7V15H14V15.12L16.12 13H7V11H17V12.12L18.24 10.89C18.72 10.41 19.35 10.14 20.04 10.14C20.37 10.14 20.7 10.21 21 10.33V5C21 3.89 20.1 3 19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H10V19.11M7 7H17V9H7V7M21.7 14.35L20.7 15.35L18.65 13.3L19.65 12.3C19.86 12.09 20.21 12.09 20.42 12.3L21.7 13.58C21.91 13.79 21.91 14.14 21.7 14.35M12 19.94L18.06 13.88L20.11 15.93L14.06 22H12V19.94Z", Di = "M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z";
function Xt(e, t, i) {
  switch (e) {
    case "alarm_control_panel":
      return t === "off" ? "mdi:alarm-light-off" : "mdi:alarm-light";
    case "siren":
      return t === "off" ? "mdi:bell-off" : "mdi:bell-ring";
    case "lock":
      return t === "off" ? "mdi:lock" : "mdi:lock-open";
    case "light":
      return t === "off" ? "mdi:lightbulb-off" : "mdi:lightbulb";
    case "media_player":
      return t === "off" ? "mdi:cast-off" : "mdi:cast";
    case "climate":
      return t === "off" ? "mdi:thermostat-cog" : "mdi:thermostat";
    case "vacuum":
      return t === "off" ? "mdi:robot-vacuum-off" : "mdi:robot-vacuum";
    case "fan":
      return t === "off" ? "mdi:fan-off" : "mdi:fan";
    case "switch":
      if (i)
        switch (i) {
          case "outlet":
            return t === "off" ? "mdi:power-plug-off" : "mdi:power-plug";
          case "switch":
            return t === "off" ? "mdi:toggle-switch-off" : "mdi:toggle-switch";
          default:
            return t === "off" ? "mdi:toggle-switch-off" : "mdi:toggle-switch";
        }
      return t === "off" ? "mdi:toggle-switch-off" : "mdi:toggle-switch";
    case "cover":
      if (i)
        switch (i) {
          case "door":
            return t === "off" ? "mdi:door-closed" : "mdi:door-open";
          case "garage":
            return t === "off" ? "mdi:garage" : "mdi:garage-open";
          case "gate":
            return t === "off" ? "mdi:gate" : "mdi:gate-open";
          case "blind":
            return t === "off" ? "mdi:blinds" : "mdi:blinds-open";
          case "curtain":
            return t === "off" ? "mdi:curtains-closed" : "mdi:curtains";
          case "damper":
            return t === "off" ? "mdi:valve-closed" : "mdi:valve";
          case "awning":
            return t === "off" ? "mdi:awning-outline" : "mdi:awning";
          case "shutter":
            return t === "off" ? "mdi:window-shutter" : "mdi:window-shutter-open";
          case "shade":
            return t === "off" ? "mdi:roller-shade-closed" : "mdi:roller-shade";
          case "window":
            return t === "off" ? "mdi:window-closed" : "mdi:window-open";
          default:
            return "mdi:help-circle";
        }
      return t === "off" ? "mdi:window-closed" : "mdi:window-open";
    case "binary_sensor":
      if (i)
        switch (i) {
          case "door":
            return t === "off" ? "mdi:door-closed" : "mdi:door-open";
          case "window":
            return t === "off" ? "mdi:window-closed" : "mdi:window-open";
          case "lock":
            return t === "off" ? "mdi:lock-open" : "mdi:lock";
          case "motion":
            return t === "off" ? "mdi:motion-sensor-off" : "mdi:motion-sensor";
          case "presence":
            return t === "off" ? "mdi:home-off" : "mdi:home";
          case "occupancy":
            return t === "off" ? "mdi:seat-outline" : "mdi:seat";
          case "vibration":
            return t === "off" ? "mdi:vibrate-off" : "mdi:vibrate";
          case "plug":
            return t === "off" ? "mdi:power-plug-off" : "mdi:power-plug";
          case "power":
            return t === "off" ? "mdi:power-off" : "mdi:power";
          case "battery":
            return t === "off" ? "mdi:battery-off" : "mdi:battery";
          case "battery_charging":
            return t === "off" ? "mdi:battery-alert" : "mdi:battery-charging";
          case "moving":
            return t === "off" ? "mdi:car-off" : "mdi:car";
          case "running":
            return t === "off" ? "mdi:play-pause" : "mdi:play";
          case "gas":
            return "mdi:gas-cylinder";
          case "carbon_monoxide":
            return "mdi:molecule-co";
          case "cold":
            return t === "off" ? "mdi:snowflake-off" : "mdi:snowflake";
          case "heat":
            return t === "off" ? "mdi:weather-sunny-off" : "mdi:weather-sunny";
          case "moisture":
            return t === "off" ? "mdi:water-off" : "mdi:water";
          case "connectivity":
            return "mdi:connection";
          case "opening":
            return t === "off" ? "mdi:shield-lock" : "mdi:shield-lock-open";
          case "garage_door":
            return t === "off" ? "mdi:garage" : "mdi:garage-open";
          case "light":
            return t === "off" ? "mdi:lightbulb-off" : "mdi:lightbulb-on";
          case "problem":
            return t === "off" ? "mdi:alert-circle-check" : "mdi:alert-circle";
          case "safety":
            return t === "off" ? "mdi:shield-alert-outline" : "mdi:shield-alert";
          case "smoke":
            return t === "off" ? "mdi:smoke-detector-off" : "mdi:smoke-detector";
          case "sound":
            return t === "off" ? "mdi:volume-off" : "mdi:volume-high";
          case "tamper":
            return t === "off" ? "mdi:shield-home-outline" : "mdi:shield-home";
          case "update":
            return t === "off" ? "mdi:autorenew-off" : "mdi:autorenew";
          default:
            return "mdi:help-circle";
        }
      return t === "off" ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
    case "humidifier":
      return t === "off" ? "mdi:water-off" : "mdi:air-humidifier";
    case "lawn_mower":
      return t === "off" ? "mdi:lawn-mower" : "mdi:robot-mower";
    case "valve":
      return "mdi:valve";
    case "water_heater":
      return t === "off" ? "mdi:water-pump-off" : "mdi:water-boiler";
    case "remote":
      return t === "off" ? "mdi:remote-off" : "mdi:remote";
    case "device_tracker":
      return t === "off" ? "mdi:account-off" : "mdi:cellphone";
    case "update":
      return t === "off" ? "mdi:autorenew-off" : "mdi:autorenew";
    case "input_boolean":
      return t === "off" ? "mdi:toggle-switch-off" : "mdi:toggle-switch";
    case "timer":
      return t === "off" ? "mdi:timer-off" : "mdi:timer-outline";
    case "counter":
      return t === "off" ? "mdi:numeric" : "mdi:counter";
    case "calendar":
      return t === "off" ? "mdi:calendar-off" : "mdi:calendar";
    case "person":
      return "mdi:account";
    default:
      return console.warn(`Unable to find icon for domain ${e} (${t})`), "mdi:help-circle";
  }
}
const _t = [
  "alarm_control_panel",
  "siren",
  "lock",
  "light",
  "media_player",
  "climate",
  "Switch - switch",
  "Switch - outlet",
  "vacuum",
  "fan",
  "humidifier",
  "lawn_mower",
  "valve",
  "water_heater",
  "remote",
  "Cover - door",
  "Cover - window",
  "Cover - garage",
  "Cover - gate",
  "Cover - blind",
  "Cover - curtain",
  "Cover - damper",
  "Cover - awning",
  "Cover - shade",
  "Cover - shutter",
  "Binary Sensor - door",
  "Binary Sensor - window",
  "Binary Sensor - lock",
  "Binary Sensor - motion",
  "Binary Sensor - presence",
  "Binary Sensor - occupancy",
  "Binary Sensor - vibration",
  "Binary Sensor - plug",
  "Binary Sensor - power",
  "Binary Sensor - battery",
  "Binary Sensor - battery_charging",
  "Binary Sensor - moving",
  "Binary Sensor - running",
  "Binary Sensor - gas",
  "Binary Sensor - carbon_monoxide",
  "Binary Sensor - cold",
  "Binary Sensor - heat",
  "Binary Sensor - moisture",
  "Binary Sensor - connectivity",
  "Binary Sensor - opening",
  "Binary Sensor - garage_door",
  "Binary Sensor - light",
  "Binary Sensor - problem",
  "Binary Sensor - safety",
  "Binary Sensor - smoke",
  "Binary Sensor - sound",
  "Binary Sensor - tamper",
  "Binary Sensor - update",
  "update",
  "device_tracker",
  "input_boolean",
  "timer",
  "counter",
  "calendar"
], yt = [
  "alarm_control_panel",
  "siren",
  "lock",
  "light",
  "media_player",
  "climate",
  "switch",
  "vacuum",
  "fan",
  "cover",
  "binary_sensor",
  "humidifier",
  "lawn_mower",
  "valve",
  "water_heater",
  "remote",
  "update",
  "device_tracker",
  "input_boolean",
  "timer",
  "counter",
  "calendar"
], Ti = {
  binary_sensor: [
    "door",
    "window",
    "lock",
    "motion",
    "presence",
    "occupancy",
    "plug",
    "power",
    "battery",
    "battery_charging",
    "moving",
    "running",
    "gas",
    "carbon_monoxide",
    "vibration",
    "cold",
    "heat",
    "moisture",
    "connectivity",
    "opening",
    "garage_door",
    "light",
    "problem",
    "safety",
    "smoke",
    "sound",
    "tamper",
    "update"
  ],
  cover: [
    "door",
    "window",
    "garage",
    "gate",
    "blind",
    "curtain",
    "damper",
    "awning",
    "shade",
    "shutter"
  ],
  switch: ["switch", "outlet"]
}, Oi = C(
  (e) => new Intl.Collator(e, { sensitivity: "accent" })
), Li = (e, t) => e < t ? -1 : e > t ? 1 : 0, Pe = (e, t, i = void 0) => Intl != null && Intl.Collator ? Oi(i).compare(e, t) : Li(e.toLowerCase(), t.toLowerCase());
function P(e, t, i) {
  const s = new CustomEvent(t, {
    bubbles: !1,
    composed: !1,
    detail: i
  });
  e.dispatchEvent(s);
}
class Mi extends HTMLElement {
  constructor() {
    super(...arguments), this.holdTime = 500, this.held = !1, this.cancelled = !1;
  }
  connectedCallback() {
    [
      "touchcancel",
      "mouseout",
      "mouseup",
      "touchmove",
      "mousewheel",
      "wheel",
      "scroll"
    ].forEach((t) => {
      document.addEventListener(
        t,
        () => {
          this.cancelled = !0, this.timer && (clearTimeout(this.timer), this.timer = void 0);
        },
        { passive: !0 }
      );
    });
  }
  bind(t, i = {}) {
    t.actionHandler && Lt(i, t.actionHandler.options) || (t.actionHandler && (t.removeEventListener("touchstart", t.actionHandler.start), t.removeEventListener("touchend", t.actionHandler.end), t.removeEventListener("touchcancel", t.actionHandler.end), t.removeEventListener("mousedown", t.actionHandler.start), t.removeEventListener("click", t.actionHandler.end), t.removeEventListener(
      "keydown",
      t.actionHandler.handleKeyDown
    )), t.actionHandler = { options: i }, !i.disabled && (t.actionHandler.start = (s) => {
      this.cancelled = !1, s.touches ? (s.touches[0].clientX, s.touches[0].clientY) : (s.clientX, s.clientY), i.hasHold && (this.held = !1, this.timer = window.setTimeout(() => {
        this.held = !0;
      }, this.holdTime));
    }, t.actionHandler.end = (s) => {
      if (s.currentTarget !== s.target || s.type === "touchcancel" || s.type === "touchend" && this.cancelled)
        return;
      const o = s.target;
      s.cancelable && s.preventDefault(), i.hasHold && (clearTimeout(this.timer), this.timer = void 0), i.hasHold && this.held ? P(o, "action", { action: "hold" }) : i.hasDoubleClick ? s.type === "click" && s.detail < 2 || !this.dblClickTimeout ? this.dblClickTimeout = window.setTimeout(() => {
        this.dblClickTimeout = void 0, P(o, "action", { action: "tap" });
      }, 250) : (clearTimeout(this.dblClickTimeout), this.dblClickTimeout = void 0, P(o, "action", { action: "double_tap" })) : P(o, "action", { action: "tap" });
    }, t.actionHandler.handleKeyDown = (s) => {
      ["Enter", " "].includes(s.key) && s.currentTarget.actionHandler.end(s);
    }, t.addEventListener("touchstart", t.actionHandler.start, {
      passive: !0
    }), t.addEventListener("touchend", t.actionHandler.end), t.addEventListener("touchcancel", t.actionHandler.end), t.addEventListener("mousedown", t.actionHandler.start, {
      passive: !0
    }), t.addEventListener("click", t.actionHandler.end), t.addEventListener("keydown", t.actionHandler.handleKeyDown)));
  }
}
customElements.define("action-handler-status-card-plus", Mi);
const Hi = () => {
  const e = document.body;
  if (e.querySelector("action-handler-status-card-plus"))
    return e.querySelector("action-handler-status-card-plus");
  const t = document.createElement("action-handler-status-card-plus");
  return e.appendChild(t), t;
}, Pi = (e, t) => {
  const i = Hi();
  i && i.bind(e, t);
}, Tt = Ft(
  class extends Ut {
    update(e, [t]) {
      return Pi(e.element, t), Z;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    render(e) {
    }
  }
), Lt = (e, t) => {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    let i, s;
    if (Array.isArray(e)) {
      if (s = e.length, s !== t.length)
        return !1;
      for (i = s; i-- !== 0; )
        if (!Lt(e[i], t[i]))
          return !1;
      return !0;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i of e.entries())
        if (!t.has(i[0]))
          return !1;
      for (i of e.entries())
        if (!Lt(i[1], t.get(i[0])))
          return !1;
      return !0;
    }
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i of e.entries())
        if (!t.has(i[0]))
          return !1;
      return !0;
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (s = e.length, s !== t.length)
        return !1;
      for (i = s; i-- !== 0; )
        if (e[i] !== t[i])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const o = Object.keys(e);
    if (s = o.length, s !== Object.keys(t).length)
      return !1;
    for (i = s; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[i]))
        return !1;
    for (i = s; i-- !== 0; ) {
      const n = o[i];
      if (!Lt(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}, Ii = (e, t, i, s, o) => {
  var u, h, f, m, y;
  const n = i || (t == null ? void 0 : t.theme), a = (t == null ? void 0 : t.darkMode) || !1;
  e.__themes || (e.__themes = { cacheKey: null, keys: /* @__PURE__ */ new Set() });
  let c = n || "", r = {};
  if (n === "default" && ((u = e.__themes) == null ? void 0 : u.cacheKey) === "default")
    return;
  if (n && n !== "default" && ((h = t == null ? void 0 : t.themes) != null && h[n])) {
    const { modes: p, ..._ } = t.themes[n] || {};
    r = { ...r, ..._ }, p && (a && p.dark ? r = { ...r, ...p.dark } : !a && p.light && (r = { ...r, ...p.light }));
  } else if (!n && (!((f = e.__themes) != null && f.keys) || e.__themes.keys.size === 0))
    return;
  const l = ((m = e.__themes) == null ? void 0 : m.keys) || /* @__PURE__ */ new Set(), d = new Set(Object.keys(r));
  if (n === "default" && d.size === 0) {
    for (const p of l)
      try {
        e.style.removeProperty(`--${p}`);
      } catch {
      }
    e.__themes = { cacheKey: "default", keys: /* @__PURE__ */ new Set() };
    return;
  }
  if (((y = e.__themes) == null ? void 0 : y.cacheKey) === c) {
    let p = !0;
    if (l.size !== d.size)
      p = !1;
    else
      for (const _ of l)
        if (!d.has(_)) {
          p = !1;
          break;
        }
    if (p) return;
  }
  for (const p of l)
    if (!d.has(p))
      try {
        e.style.removeProperty(`--${p}`);
      } catch {
      }
  for (const [p, _] of Object.entries(r))
    e.style.setProperty(`--${p}`, String(_));
  e.__themes.cacheKey = c || null, e.__themes.keys = d;
};
function Ie(e, t, i, s, o, n) {
  const a = o.area && o.area.length ? o.area : null, c = o.floor && o.floor.length ? o.floor : null, r = o.label && o.label.length ? o.label : null, l = o.hiddenAreas || [], d = o.hiddenLabels || [], u = o.hiddenEntities || [], h = new Set(l), f = new Set(d), m = new Set(u), y = new Map(t.map(($) => [$.id, $])), p = new Map(
    i.map(($) => [$.area_id, $.floor_id])
  ), _ = e.filter(($) => {
    var k, S, x;
    const g = $.entity_id.split(".")[0];
    if (!n.includes(g)) return !1;
    if (g === "update")
      return !$.hidden_by && !$.disabled_by;
    const v = $.device_id ? y.get($.device_id) : void 0;
    if (!($.area_id != null || v && v.area_id != null) || r && !((((k = $.labels) == null ? void 0 : k.some((R) => r.includes(R))) ?? !1) || (((S = v == null ? void 0 : v.labels) == null ? void 0 : S.some((R) => r.includes(R))) ?? !1)) || a && !($.area_id !== void 0 && a.includes($.area_id) || v && v.area_id !== void 0 && a.includes(v.area_id)))
      return !1;
    if (c) {
      const L = $.area_id ? p.get($.area_id) : void 0, R = v != null && v.area_id ? p.get(v.area_id) : void 0;
      if (!(L && c.includes(L) || R && c.includes(R))) return !1;
    }
    return h.size && ($.area_id && h.has($.area_id) || v && v.area_id && h.has(v.area_id)) || (x = $.labels) != null && x.some((L) => f.has(L)) || m.has($.entity_id) ? !1 : !$.hidden_by && !$.disabled_by;
  }).map(($) => $.entity_id), A = {};
  for (const $ of _) {
    const g = $.split(".")[0], v = s[$];
    v && (A[g] || (A[g] = [])).push(v);
  }
  return A;
}
function Be(e) {
  return e.split("_").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
}
function j(e, t) {
  return t ? `${Be(e)} - ${t}` : e;
}
function Se(e, t) {
  var i, s;
  return ((s = (i = e == null ? void 0 : e[t]) == null ? void 0 : i.attributes) == null ? void 0 : s.friendly_name) || t;
}
function It(e, t) {
  return (i, s) => Pe(
    Se(e, i),
    Se(e, s),
    t
  );
}
function Y(e, t) {
  if (e === t) return !0;
  if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
  const i = new Set(t);
  for (const s of e)
    if (!i.has(s)) return !1;
  return !0;
}
const xe = [
  "closed",
  "locked",
  "off",
  "docked",
  "idle",
  "standby",
  "paused",
  "auto",
  "not_home",
  "disarmed",
  "0"
];
function N(e, t, i) {
  return e.localize(
    `component.${i}.entity_component._.state.${t}`
  ) || t;
}
function Rt(e, t, i, s) {
  if (/^key_\d+$/.test(t.name))
    return e.localize("ui.components.related-filter-menu.filter") || "Filter";
  switch (t.name) {
    case "header":
      return i && s ? i === "switch" && s === "switch" ? `${e.localize(
        "ui.panel.lovelace.editor.card.entities.name"
      )} in ${e.localize("component.switch.entity_component._.name")}` : `${e.localize(
        "ui.panel.lovelace.editor.card.entities.name"
      )} in ${e.localize(
        `ui.dialogs.entity_registry.editor.device_classes.${i}.${s}`
      )}` : i ? `${e.localize(
        "ui.panel.lovelace.editor.card.entities.name"
      )} in ${e.localize(`component.${i}.entity_component._.name`)}` : e.localize("ui.panel.lovelace.editor.card.entities.name");
    case "square":
      return e.localize("ui.panel.lovelace.editor.card.grid.square");
    case "hide_person_name":
      return e.localize("ui.common.hide") + " " + e.localize("component.person.entity_component._.name") + " " + e.localize("ui.common.name");
    case "hide_content_name":
      return e.localize("ui.common.hide") + " " + e.localize("ui.panel.lovelace.editor.card.markdown.content") + " " + e.localize("ui.common.name");
    case "hide_person":
      return e.localize("ui.common.hide") + " " + e.localize("component.person.entity_component._.name");
    case "list_mode":
      return e.localize("ui.card.common.turn_on") + " " + e.localize("ui.components.media-browser.list") + " " + e.localize("ui.dialogs.helper_settings.input_text.mode");
    case "columns":
      return e.localize(
        "ui.panel.lovelace.editor.action-editor.actions.more-info"
      ) + " " + e.localize("ui.panel.lovelace.editor.card.grid.columns");
    case "edit_filters":
      return e.localize("ui.panel.lovelace.editor.common.edit") + " " + e.localize("ui.components.subpage-data-table.filters");
    case "area":
      return e.localize("ui.panel.lovelace.editor.card.area.name");
    case "floor":
      return e.localize("ui.components.selectors.selector.types.floor");
    case "label_filter":
      return e.localize("ui.components.label-picker.label") + " " + e.localize("ui.components.related-filter-menu.filter");
    case "label":
    case "hidden_labels":
      return e.localize("ui.components.label-picker.label");
    case "entities":
      return e.localize("ui.panel.lovelace.editor.card.entities.name");
    case "extra_entities":
      return "Extra " + e.localize("ui.panel.lovelace.editor.card.entities.name");
    case "entity":
      return e.localize("ui.components.selectors.selector.types.entity");
    case "hide_filter":
      return e.localize("ui.common.hide") + " " + e.localize("ui.panel.lovelace.editor.card.entities.name");
    case "edit_domains_dc":
      return e.localize("ui.panel.lovelace.editor.common.edit") + " " + e.localize("ui.panel.lovelace.editor.card.markdown.content");
    case "icon":
      return e.localize("ui.components.selectors.selector.types.icon");
    case "icon_color":
      return e.localize("ui.panel.lovelace.editor.card.tile.state_color") || "State color (default)";
    case "color":
      return e.localize("ui.panel.lovelace.editor.card.tile.color");
    case "background_color":
      return e.localize("ui.panel.lovelace.editor.card.generic.icon") + " " + e.localize("ui.panel.lovelace.editor.edit_view.tab_background") + " " + e.localize("ui.panel.lovelace.editor.card.tile.color");
    case "multiple_areas":
      return "Multi " + e.localize("ui.panel.lovelace.editor.card.area.name");
    case "multiple_floors":
      return "Multi " + e.localize("ui.components.selectors.selector.types.floor");
    case "show_total_number":
      return e.localize("ui.common.enable") + " " + e.localize(
        "component.sensor.entity_component._.state_attributes.state_class.state.total"
      ) + " " + e.localize("component.number.entity_component._.name");
    case "show_total_entities":
      return e.localize("ui.common.enable") + " " + e.localize(
        "component.sensor.entity_component._.state_attributes.state_class.state.total"
      ) + " " + e.localize("ui.panel.lovelace.editor.card.entities.name");
    case "appearance":
      return e.localize("ui.panel.lovelace.editor.card.tile.appearance") || "Appearance";
    case "tap_action":
    case "hold_action":
    case "double_tap_action":
      return e.localize(
        `ui.panel.lovelace.editor.card.generic.${t.name}`
      );
    case "popup_card":
      return "Change Popup Card Type";
    case "state_content":
      return "State content";
    case "state_color_map":
      return "State color map";
    case "state_icon_map":
      return "State icon map";
    case "group_id":
      return e.localize("component.group.entity_component._.name") + " " + e.localize("ui.common.name");
    case "group_icon":
      return e.localize("component.group.entity_component._.name") + " " + e.localize("ui.panel.lovelace.editor.card.generic.icon");
    case "group_status":
      return e.localize("component.group.entity_component._.name") + " " + e.localize("ui.components.selectors.selector.types.state") + " (" + e.localize("ui.panel.lovelace.editor.card.config.optional") + ")";
    case "hide":
      return e.localize("ui.common.hide");
    case "state":
      return e.localize("ui.components.entity.entity-state-picker.state");
    case "invert":
    case "invert_state":
      return e.localize("ui.dialogs.entity_registry.editor.invert.label");
    case "show_entity_picture":
      return e.localize(
        "ui.panel.lovelace.editor.card.tile.show_entity_picture"
      );
    case "name":
      return e.localize("ui.common.name");
    case "no_scroll":
      return e.localize(
        "ui.panel.lovelace.editor.edit_view_header.settings.badges_wrap_options.wrap"
      ) + " " + e.localize("ui.panel.lovelace.editor.card.generic.content");
    case "popup":
      return "Popup";
    case "ungroup_areas":
      return e.localize("ui.common.disable") + " " + e.localize("ui.panel.lovelace.editor.card.area.name") + " " + e.localize("component.group.entity_component._.name");
    case "popup_sort":
      return "Popup Sort";
    default:
      if (yt.includes(t.name))
        return e.localize(`component.${t.name}.entity_component._.name`) || t.name;
      for (const [o, n] of Object.entries(Ti))
        if (n.includes(t.name))
          return e.localize(
            `ui.dialogs.entity_registry.editor.device_classes.${o}.${t.name}`
          ) || t.name;
      return e.localize(
        `ui.panel.lovelace.editor.card.area.${t.name}`
      );
  }
}
const Bi = C(
  (e = []) => new Map(e.map((t) => [t.entity_id, t]))
), Ni = C(
  (e = []) => new Map(e.map((t) => [t.id, t]))
), ji = C(
  (e = []) => new Map(e.map((t) => [t.area_id, t]))
), Fi = C(
  (e, t, i, s, o, n, a) => {
    let c = [];
    Array.isArray(t.filters) ? c = t.filters : [
      "area",
      "floor",
      "label",
      "domain",
      "entity_id",
      "state",
      "name",
      "attributes",
      "device",
      "integration",
      "entity_category",
      "hidden_by",
      "device_manufacturer",
      "device_model",
      "last_changed",
      "last_updated",
      "last_triggered",
      "level",
      "group"
    ].forEach((u) => {
      t[u] !== void 0 && c.push({ key: u, value: t[u] });
    });
    const r = Bi(i), l = Ni(s), d = ji(o);
    return Object.values(a).filter((u) => n.includes(u.entity_id) ? !1 : c.length ? c.every(
      (h) => Ui(e, u, h, {
        areas: o,
        devices: s,
        entities: i,
        entityMap: r,
        deviceMap: l,
        areaMap: d
      })
    ) : !0);
  }
);
function Bt(e, t) {
  return Fi(
    e,
    t,
    e.entities || [],
    e.devices || [],
    e.areas || [],
    e.hiddenEntities || [],
    e.hass.states
  );
}
function Jt(e, t) {
  if (!e) return !1;
  const i = t.match(/^([<>]=?)?\s*(\d+)$/);
  if (!i) return !1;
  const [, s, o] = i, n = parseInt(o, 10), a = /* @__PURE__ */ new Date(), c = new Date(e), r = (a.getTime() - c.getTime()) / 6e4;
  switch (s) {
    case ">":
      return r > n;
    case ">=":
      return r >= n;
    case "<":
      return r < n;
    case "<=":
      return r <= n;
    default:
      return Math.round(r) === n;
  }
}
function z(e, t) {
  if (Array.isArray(t))
    return t.some((i) => z(e, i));
  if (typeof t == "string" && t.startsWith("!"))
    return !z(e, t.slice(1));
  if (typeof t == "string" && /^([<>]=?)\s*(-?\d+(\.\d+)?)([mhd])$/.test(t)) {
    const [, i, s, , o] = t.match(/^([<>]=?)\s*(-?\d+(\.\d+)?)([mhd])$/) || [], n = parseFloat(s), a = Date.now(), c = new Date(e).getTime();
    if (isNaN(c)) return !1;
    let r = (a - c) / 6e4;
    switch (o === "h" && (r /= 60), o === "d" && (r /= 1440), i) {
      case ">":
        return r > n;
      case ">=":
        return r >= n;
      case "<":
        return r < n;
      case "<=":
        return r <= n;
    }
  }
  if (typeof t == "string" && /^([<>]=?)\s*(-?\d+(\.\d+)?)$/.test(t)) {
    const [, i, s] = t.match(/^([<>]=?)\s*(-?\d+(\.\d+)?)$/) || [], o = parseFloat(s), n = parseFloat(e);
    switch (i) {
      case ">":
        return n > o;
      case ">=":
        return n >= o;
      case "<":
        return n < o;
      case "<=":
        return n <= o;
    }
  }
  if (typeof t == "string" && t.includes("*")) {
    const i = "^" + t.split("*").map((o) => o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(".*") + "$";
    return new RegExp(i, "i").test(String(e));
  }
  if (typeof t == "string" && t.length > 2 && t.startsWith("/") && t.endsWith("/"))
    try {
      return new RegExp(t.slice(1, -1), "i").test(String(e));
    } catch {
      return !1;
    }
  return e === t;
}
function Ui(e, t, i, s) {
  var n, a, c, r, l, d, u, h, f;
  const o = ((n = s.entityMap) == null ? void 0 : n.get(t.entity_id)) || ((a = s.entities) == null ? void 0 : a.find((m) => m.entity_id === t.entity_id));
  switch (i.key) {
    case "area": {
      let m = o == null ? void 0 : o.area_id;
      if (!m && (o != null && o.device_id)) {
        const y = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((c = s.devices) == null ? void 0 : c.find((p) => p.id === o.device_id));
        m = y == null ? void 0 : y.area_id;
      }
      return z(m, i.value);
    }
    case "domain":
      return z(I(t.entity_id), i.value);
    case "entity_id":
      return z(t.entity_id, i.value);
    case "state":
      return z(t.state, i.value);
    case "name": {
      const m = t.attributes.friendly_name ?? "";
      return z(m, i.value);
    }
    case "attributes":
      return !i.value || typeof i.value != "object" ? !1 : Object.entries(i.value).every(([m, y]) => {
        const p = m.split(":");
        let _ = t.attributes;
        for (const A of p)
          if (_ = _ == null ? void 0 : _[A], _ === void 0) break;
        return _ === void 0 ? !1 : z(_, y);
      });
    case "device":
      return z(o == null ? void 0 : o.device_id, i.value);
    case "integration":
      return o ? z(o.platform, i.value) || z(o.config_entry_id, i.value) : !1;
    case "entity_category":
      return z(o == null ? void 0 : o.entity_category, i.value);
    case "label": {
      const m = s.labels, y = (p) => {
        if (z(p, i.value)) return !0;
        if (m) {
          const _ = m.find((A) => A.label_id === p);
          if (_ && z(_.name, i.value)) return !0;
        }
        return !1;
      };
      if (o != null && o.labels && o.labels.some(y)) return !0;
      if (o != null && o.device_id) {
        const p = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((r = s.devices) == null ? void 0 : r.find((_) => _.id === o.device_id));
        if (p != null && p.labels && p.labels.some(y)) return !0;
      }
      return !1;
    }
    case "floor": {
      let m = o == null ? void 0 : o.area_id;
      if (!m && (o != null && o.device_id)) {
        const p = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((l = s.devices) == null ? void 0 : l.find((_) => _.id === o.device_id));
        m = p == null ? void 0 : p.area_id;
      }
      if (!m) return !1;
      const y = (s.areaMap ? s.areaMap.get(m) : void 0) || ((d = s.areas) == null ? void 0 : d.find((p) => p.area_id === m));
      return z(y == null ? void 0 : y.floor_id, i.value);
    }
    case "hidden_by":
      return z(o == null ? void 0 : o.hidden_by, i.value);
    case "device_manufacturer": {
      if (o != null && o.device_id) {
        const m = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((u = s.devices) == null ? void 0 : u.find((y) => y.id === o.device_id));
        return z(m == null ? void 0 : m.manufacturer, i.value);
      }
      return !1;
    }
    case "device_model": {
      if (o != null && o.device_id) {
        const m = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((h = s.devices) == null ? void 0 : h.find((y) => y.id === o.device_id));
        return z(m == null ? void 0 : m.model, i.value);
      }
      return !1;
    }
    case "last_changed":
      return typeof i.value == "string" && /^[<>]=?\s*\d+$/.test(i.value) ? Jt(t.last_changed, i.value) : z(t.last_changed, i.value);
    case "last_updated":
      return typeof i.value == "string" && /^[<>]=?\s*\d+$/.test(i.value) ? Jt(t.last_updated, i.value) : z(t.last_updated, i.value);
    case "last_triggered":
      return typeof i.value == "string" && /^[<>]=?\s*\d+$/.test(i.value) ? Jt(t.attributes.last_triggered, i.value) : z(t.attributes.last_triggered, i.value);
    case "group": {
      const m = e.hass.states[i.value];
      return !m || !Array.isArray((f = m.attributes) == null ? void 0 : f.entity_id) ? !1 : m.attributes.entity_id.includes(t.entity_id);
    }
    default:
      return !0;
  }
}
var Ri = Object.defineProperty, B = (e, t, i, s) => {
  for (var o = void 0, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (o = a(t, i, o) || o);
  return o && Ri(t, i, o), o;
};
const Vi = /* @__PURE__ */ new Set([
  "off",
  "idle",
  "not_home",
  "closed",
  "locked",
  "standby",
  "disarmed",
  "unknown",
  "unavailable"
]);
var dt;
const q = (dt = class extends K {
  constructor() {
    super(...arguments), this.open = !1, this.title = "", this.content = "", this.entities = [], this._showAll = !1, this._cardEls = /* @__PURE__ */ new Map(), this._lastEntityIds = [], this._onClosed = (t) => {
      this.open = !1, this._cardEls.clear(), this.dispatchEvent(
        new CustomEvent("dialog-closed", {
          bubbles: !0,
          composed: !0,
          detail: { dialog: this }
        })
      ), this.dispatchEvent(
        new CustomEvent("popup-closed", {
          bubbles: !0,
          composed: !0,
          detail: { dialog: this }
        })
      );
    }, this.computeLabel = C(
      (t, i, s) => Rt(this.hass, t, i, s)
    ), this._popupCardConfigCache = /* @__PURE__ */ new Map(), this._cardElementCache = /* @__PURE__ */ new Map(), this._sortEntitiesMemo = C(
      (t, i, s, o) => {
        const n = t.slice();
        if (i === "state") {
          const c = It(o, s);
          return n.sort((r, l) => {
            const d = this._isActive(r) ? 0 : 1, u = this._isActive(l) ? 0 : 1;
            if (d !== u) return d - u;
            const h = I(r.entity_id), f = I(l.entity_id), m = this.hass ? N(this.hass, r.state, h) : r.state, y = this.hass ? N(this.hass, l.state, f) : l.state, p = (m || "").localeCompare(y || "");
            return p !== 0 ? p : c(r.entity_id, l.entity_id);
          });
        }
        const a = It(o, s);
        return n.sort((c, r) => a(c.entity_id, r.entity_id));
      }
    ), this.groupAndSortEntities = C(
      (t, i, s) => {
        const o = /* @__PURE__ */ new Map();
        for (const a of t) {
          const c = this.getAreaForEntity(a);
          o.has(c) || o.set(c, []), o.get(c).push(a);
        }
        return Array.from(o.entries()).sort(
          ([a], [c]) => {
            var d, u;
            const r = ((d = i.get(a)) == null ? void 0 : d.toLowerCase()) ?? (a === "unassigned" ? "unassigned" : a), l = ((u = i.get(c)) == null ? void 0 : u.toLowerCase()) ?? (c === "unassigned" ? "unassigned" : c);
            return r.localeCompare(l);
          }
        ).map(([a, c]) => [a, s(c)]);
      }
    ), this.DOMAIN_FEATURES = {
      alarm_control_panel: {
        state_content: ["state", "last_changed"],
        features: [
          {
            type: "alarm-modes",
            modes: [
              "armed_home",
              "armed_away",
              "armed_night",
              "armed_vacation",
              "armed_custom_bypass",
              "disarmed"
            ]
          }
        ]
      },
      light: {
        state_content: ["state", "brightness", "last_changed"],
        features: [{ type: "light-brightness" }]
      },
      cover: {
        state_content: ["state", "position", "last_changed"],
        features: [{ type: "cover-open-close" }, { type: "cover-position" }]
      },
      vacuum: {
        state_content: ["state", "last_changed"],
        features: [
          {
            type: "vacuum-commands",
            commands: [
              "start_pause",
              "stop",
              "clean_spot",
              "locate",
              "return_home"
            ]
          }
        ]
      },
      climate: {
        state_content: ["state", "current_temperature", "last_changed"],
        features: [
          {
            type: "climate-hvac-modes",
            hvac_modes: [
              "auto",
              "heat_cool",
              "heat",
              "cool",
              "dry",
              "fan_only",
              "off"
            ]
          }
        ]
      },
      water_heater: {
        state_content: ["state", "last_changed"],
        features: [
          {
            type: "water-heater-operation-modes",
            operation_modes: [
              "electric",
              "gas",
              "heat_pump",
              "eco",
              "performance",
              "high_demand",
              "off"
            ]
          }
        ]
      },
      humidifier: {
        state_content: ["state", "current_humidity", "last_changed"],
        features: [{ type: "target-humidity" }]
      },
      media_player: {
        show_entity_picture: !0,
        state_content: ["state", "volume_level", "last_changed"],
        features: [{ type: "media-player-playback" }]
      },
      lock: {
        state_content: ["state", "last_changed"],
        features: [{ type: "lock-commands" }]
      },
      fan: {
        state_content: ["state", "percentage", "last_changed"],
        features: [{ type: "fan-speed" }]
      },
      counter: {
        state_content: ["state", "last_changed"],
        features: [
          {
            type: "counter-actions",
            actions: ["increment", "decrement", "reset"]
          }
        ]
      },
      lawn_mower: {
        state_content: ["state", "last_changed"],
        features: [
          {
            type: "lawn-mower-commands",
            commands: ["start_pause", "dock"]
          }
        ]
      },
      update: {
        state_content: ["state", "latest_version", "last_changed"],
        features: [{ type: "update-actions", backup: "ask" }]
      },
      switch: {
        state_content: ["state", "last_changed"],
        features: [{ type: "toggle" }]
      },
      input_boolean: {
        state_content: ["state", "last_changed"],
        features: [{ type: "toggle" }]
      },
      calendar: {
        state_content: "message"
      },
      timer: {
        state_content: ["state", "remaining_time"]
      },
      binary_sensor: {
        state_content: ["state", "last_changed"]
      },
      device_tracker: {
        state_content: ["state", "last_changed"]
      },
      remote: {
        state_content: ["state", "last_changed"]
      },
      valve: {
        state_content: ["state", "last_changed"],
        features: [{ type: "valve-open-close" }]
      }
    };
  }
  showDialog(t) {
    this.title = t.title ?? this.title, this.hass = t.hass, this.entities = t.entities ?? [], t.content !== void 0 && (this.content = t.content), this.selectedDomain = t.selectedDomain, this.selectedDeviceClass = t.selectedDeviceClass, this.selectedGroup = t.selectedGroup, this.card = t.card, this._cardEls.clear(), this.open = !0, this.requestUpdate();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._cardEls.clear();
  }
  _toTileConfig(t) {
    return {
      type: "tile",
      entity: t.entity
    };
  }
  async _createCardElement(t, i, s = !1) {
    var o, n, a;
    try {
      const c = await ((o = window == null ? void 0 : window.loadCardHelpers) == null ? void 0 : o.call(window));
      if (c != null && c.createCardElement) {
        const r = c.createCardElement(i);
        return r.hass = t, (n = r.setAttribute) == null || n.call(r, "data-hui-card", ""), r;
      }
    } catch {
    }
    try {
      const c = i.type || "tile", r = typeof c == "string" && c.startsWith("custom:"), l = r ? c.slice(7) : `hui-${c}-card`;
      r && !customElements.get(l) && await customElements.whenDefined(l).catch(() => {
      });
      const d = document.createElement(l);
      return typeof d.setConfig == "function" && d.setConfig(i), d.hass = t, (a = d.setAttribute) == null || a.call(d, "data-hui-card", ""), d;
    } catch {
      if (!s)
        return this._createCardElement(
          t,
          this._toTileConfig(i),
          !0
        );
      const c = document.createElement("div");
      return c.setAttribute("data-hui-card", ""), c;
    }
  }
  _getPopupCardConfig(t) {
    var y, p, _, A;
    const i = this.card, s = I(t.entity_id), o = this.selectedDomain || s, n = this.selectedDomain ? this.selectedDeviceClass : (A = (_ = (p = (y = this.hass) == null ? void 0 : y.states) == null ? void 0 : p[t.entity_id]) == null ? void 0 : _.attributes) == null ? void 0 : A.device_class, a = j(o, n), c = typeof (i == null ? void 0 : i.getCustomizationForType) == "function" ? i.getCustomizationForType(a) : void 0, r = c == null ? void 0 : c.popup_card, l = r && typeof r.type == "string" && r.type || "tile", d = l === "tile" ? this.DOMAIN_FEATURES[s] ?? {} : {};
    let u = {};
    if (r && typeof r == "object") {
      const { type: $, entity: g, ...v } = r;
      u = v;
    } else
      u = {};
    const h = {
      type: l,
      entity: t.entity_id,
      ...d,
      ...u
    }, f = this._configHash(h), m = this._popupCardConfigCache.get(t.entity_id);
    return m && m.hash === f ? m.config : (this._popupCardConfigCache.set(t.entity_id, {
      hash: f,
      config: h
    }), h);
  }
  shouldUpdate(t) {
    if (!this.open)
      return t.has("open");
    if (t.size === 1 && t.has("hass")) {
      const i = this._getCurrentEntities().map((n) => n.entity_id).sort(), s = (this._lastEntityIds || []).slice().sort(), o = i.length === s.length && i.every((n, a) => n === s[a]);
      return this._updateCardsHass(), !o;
    }
    return !0;
  }
  _updateCardsHass() {
    this.hass && this._cardEls.forEach((t) => {
      if (t.hass !== this.hass)
        try {
          t.hass = this.hass;
        } catch {
        }
    });
  }
  _getOrCreateCard(t) {
    const i = t.entity_id, s = this._getPopupCardConfig(t), o = this._configHash(s), n = this._cardElementCache.get(i);
    if (n && n.hash === o)
      return n.el.hass = this.hass, n.el;
    const a = document.createElement("div");
    return a.classList.add("card-placeholder"), a.setAttribute("data-hui-card", ""), this._cardEls.set(i, a), this._createCardElement(this.hass, s).then((c) => {
      try {
        this._cardEls.get(i) === a && (a.replaceWith(c), this._cardEls.set(i, c), this._cardElementCache.set(i, { hash: o, el: c })), c.hass = this.hass;
      } catch {
      }
    }), this._cardElementCache.set(i, { hash: o, el: a }), a;
  }
  _getCurrentEntities() {
    var a, c, r;
    const t = this.card, i = this.selectedDomain, s = this.selectedDeviceClass, o = this.selectedGroup;
    let n = [];
    if (o !== void 0 && ((c = (a = t._config) == null ? void 0 : a.content) != null && c[o])) {
      const l = t._config.content[o], d = (r = t._config.rulesets) == null ? void 0 : r.find(
        (u) => u.group_id === l
      );
      n = d ? Bt(t, d) : [];
    } else
      i ? n = ((typeof (t == null ? void 0 : t._shouldShowTotalEntities) == "function" ? t._shouldShowTotalEntities(i, s) : !1) ? !0 : this._showAll) ? t._totalEntities(i, s) : t._isOn(i, s) : n = Array.isArray(this.entities) ? this.entities : [];
    return n;
  }
  toggleAllOrOn() {
    this._showAll = !this._showAll;
  }
  handleAskToggleDomain(t) {
    t.stopPropagation();
    const i = "status-card-plus-popup-confirmation";
    this.dispatchEvent(
      new CustomEvent("show-dialog", {
        detail: {
          dialogTag: i,
          dialogImport: () => customElements.whenDefined(i),
          dialogParams: {
            hass: this.hass,
            card: this.card,
            selectedDomain: this.selectedDomain,
            selectedDeviceClass: this.selectedDeviceClass
          }
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  handleAskToggleAll(t) {
    t.stopPropagation(), this.toggleAllOrOn();
  }
  _stopPropagation(t) {
    t.stopPropagation();
  }
  getAreaForEntity(t) {
    var s, o;
    const i = (s = this.card.entities) == null ? void 0 : s.find(
      (n) => n.entity_id === t.entity_id
    );
    if (i) {
      if (i.area_id)
        return i.area_id;
      if (i.device_id) {
        const n = (o = this.card.devices) == null ? void 0 : o.find(
          (a) => a.id === i.device_id
        );
        if (n && n.area_id)
          return n.area_id;
      }
    }
    return "unassigned";
  }
  _isActive(t) {
    return !Vi.has(t.state);
  }
  _configHash(t) {
    return JSON.stringify(t);
  }
  sortEntitiesForPopup(t) {
    var s, o, n, a, c;
    const i = ((o = (s = this.card) == null ? void 0 : s._config) == null ? void 0 : o.popup_sort) || "name";
    return this._sortEntitiesMemo(
      t,
      i,
      ((a = (n = this.hass) == null ? void 0 : n.locale) == null ? void 0 : a.language) ?? "en",
      ((c = this.hass) == null ? void 0 : c.states) ?? {}
    );
  }
  render() {
    var g, v, U, k, S, x, L, R, mt, H, W, kt;
    if (!this.open) return b``;
    const t = (g = this.card) != null && g.list_mode ? 1 : ((U = (v = this.card) == null ? void 0 : v._config) == null ? void 0 : U.columns) || 4, i = this.selectedDomain, s = this.selectedDeviceClass, o = this.selectedGroup, n = this.card, c = (typeof (n == null ? void 0 : n._shouldShowTotalEntities) == "function" ? n._shouldShowTotalEntities(i, s) : !1) ? !0 : this._showAll, r = new Map(
      (k = n.areas) == null ? void 0 : k.map((w) => [w.area_id, w.name])
    );
    let l = [], d = !1;
    if (o !== void 0 && ((x = (S = n._config) == null ? void 0 : S.content) != null && x[o])) {
      const w = n._config.content[o], F = (L = n._config.rulesets) == null ? void 0 : L.find(
        (V) => V.group_id === w
      );
      l = F ? Bt(n, F) : [];
    } else
      i ? l = c ? n._totalEntities(i, s) : n._isOn(i, s) : l = Array.isArray(this.entities) ? this.entities : [], d = !0;
    const u = this.sortEntitiesForPopup(l), h = new Set(l.map((w) => w.entity_id));
    Array.from(this._cardEls.keys()).forEach((w) => {
      h.has(w) || this._cardEls.delete(w);
    }), this._lastEntityIds = l.map((w) => w.entity_id);
    const f = this.groupAndSortEntities(
      l,
      r,
      this.sortEntitiesForPopup.bind(this)
    ), m = ((R = n == null ? void 0 : n._config) == null ? void 0 : R.ungroupAreas) === !0 || ((mt = n == null ? void 0 : n._config) == null ? void 0 : mt.ungroup_areas) === !0 || ((H = n == null ? void 0 : n._config) == null ? void 0 : H.area_grouping) !== void 0 && ((W = n == null ? void 0 : n._config) == null ? void 0 : W.area_grouping) === !1, y = f.length ? Math.max(...f.map(([, w]) => w.length)) : 0, p = m ? Math.min(t, Math.max(1, l.length)) : Math.min(t, Math.max(1, y)), _ = j(i, s), A = typeof (n == null ? void 0 : n.getCustomizationForType) == "function" ? n.getCustomizationForType(_) : void 0, $ = (A == null ? void 0 : A.invert) === !0;
    return b`
      <ha-dialog
        .open=${this.open}
        hideActions
        @closed=${this._onClosed}
        style="--columns: ${p};"
      >
        <style>
          ${dt.styles}
        </style>
        <div class="dialog-header">
          <ha-icon-button
            slot="trigger"
            .label=${this.hass.localize("ui.common.close")}
            .path=${oe}
            @click=${this._onClosed}
          ></ha-icon-button>
          <h3>
            ${(() => {
      var V, G;
      const w = this.selectedGroup, F = this.card;
      if (w !== void 0 && ((G = (V = F == null ? void 0 : F._config) == null ? void 0 : V.content) != null && G[w])) {
        const Ne = F._config.content[w];
        return this.hass.localize(
          "ui.panel.lovelace.editor.card.entities.name"
        ) + " in " + Ne;
      }
      return this.selectedDomain && this.selectedDeviceClass ? this.computeLabel(
        { name: "header" },
        this.selectedDomain,
        this.selectedDeviceClass
      ) : this.computeLabel(
        { name: "header" },
        this.selectedDomain || void 0
      );
    })()}
          </h3>

          ${d ? b`
                <ha-button-menu
                  class="menu-button"
                  slot="actionItems"
                  fixed
                  corner="BOTTOM_END"
                  menu-corner="END"
                  @closed=${this._stopPropagation}
                >
                  <ha-icon-button
                    slot="trigger"
                    .label=${this.hass.localize("ui.common.menu")}
                    .path=${Si}
                  ></ha-icon-button>

                  <ha-list-item
                    graphic="icon"
                    @click=${this.handleAskToggleDomain}
                    @closed=${this._stopPropagation}
                  >
                    ${$ ? this.hass.localize("ui.card.common.turn_on") : this.hass.localize("ui.card.common.turn_off")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${Di}
                    ></ha-svg-icon>
                  </ha-list-item>

                  <ha-list-item
                    graphic="icon"
                    @click=${this.handleAskToggleAll}
                    @closed=${this._stopPropagation}
                  >
                    ${this.hass.localize("ui.card.common.toggle") + " " + this.hass.localize(
      "component.sensor.entity_component._.state_attributes.state_class.state.total"
    ) + " " + this.hass.localize(
      "ui.panel.lovelace.editor.card.entities.name"
    )}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${ki}
                    ></ha-svg-icon>
                  </ha-list-item>
                </ha-button-menu>
              ` : ""}
        </div>
        <div class="dialog-content">
          ${(kt = this.card) != null && kt.list_mode ? m ? b`
                  <ul class="entity-list">
                    ${tt(
      u,
      (w) => w.entity_id,
      (w) => b`<li class="entity-item">- ${w.entity_id}</li>`
    )}
                  </ul>
                ` : b`
                  <ul class="entity-list">
                    ${tt(
      f,
      ([w]) => w,
      ([w, F]) => {
        const V = r.get(w) ?? (w === "unassigned" ? "Unassigned" : w);
        return b`
                          <li class="entity-item">
                            <h4>${V}:</h4>
                            <ul>
                              ${tt(
          F,
          (G) => G.entity_id,
          (G) => b`<li class="entity-item">
                                    - ${G.entity_id}
                                  </li>`
        )}
                            </ul>
                          </li>
                        `;
      }
    )}
                  </ul>
                ` : m ? b`
                <div class="entity-cards">
                  ${tt(
      u,
      (w) => w.entity_id,
      (w) => b`
                      <div class="entity-card">
                        ${this._getOrCreateCard(w)}
                      </div>
                    `
    )}
                </div>
              ` : b`${f.map(([w, F]) => {
      const V = r.get(w) ?? (w === "unassigned" ? "Unassigned" : w);
      return b`
                  <div class="cards-wrapper">
                    <h4>${V}</h4>
                    <div class="entity-cards">
                      ${tt(
        F,
        (G) => G.entity_id,
        (G) => b`
                          <div class="entity-card">
                            ${this._getOrCreateCard(G)}
                          </div>
                        `
      )}
                    </div>
                  </div>
                `;
    })}`}
          ${l.length === 0 ? this.content : ""}
        </div>
      </ha-dialog>
    `;
  }
}, dt.styles = bt`
    :host {
      display: block;
    }
    :host([hidden]) {
      display: none;
    }

    ha-dialog {
      --dialog-content-padding: 12px;
      --mdc-dialog-min-width: calc((var(--columns, 4) * 22.5vw) + 3vw);
      --mdc-dialog-max-width: calc((var(--columns, 4) * 22.5vw) + 5vw);
      box-sizing: border-box;
      overflow-x: auto;
    }

    .dialog-header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      min-width: 15vw;
    }
    .dialog-header .menu-button {
      margin-left: auto;
    }
    .dialog-content {
      margin-bottom: 16px;
    }
    .dialog-actions {
      text-align: right;
    }

    .cards-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: 100%;
      overflow-x: auto;
    }
    .entity-list {
      list-style: none;
      padding: 0 8px;
      margin: 0;
    }
    .entity-list .entity-item {
      list-style: none;
      margin: 0.2em 0;
    }
    h4 {
      width: calc(var(--columns, 4) * 22.5vw);
      box-sizing: border-box;
      font-size: 1.2em;
      margin: 0.8em 0.2em;
    }
    .entity-cards {
      display: grid;
      grid-template-columns: repeat(var(--columns, 4), 22.5vw);
      gap: 4px;
      width: 100%;
      box-sizing: border-box;
      overflow-x: hidden;
      justify-content: center;
    }
    .entity-card {
      width: 22.5vw;
      box-sizing: border-box;
    }

    @media (max-width: 1200px) {
      ha-dialog {
        --mdc-dialog-min-width: 96vw;
        --mdc-dialog-max-width: 96vw;
      }
      .entity-card {
        width: 45vw;
      }
      .entity-cards {
        grid-template-columns: repeat(var(--columns, 2), 45vw);
      }
      h4 {
        width: calc(var(--columns, 2) * 45vw);
        margin: 0.8em 0.2em;
      }
    }

    @media (max-width: 700px) {
      ha-dialog {
        --dialog-content-padding: 8px;
        --mdc-dialog-min-width: 96vw;
        --mdc-dialog-max-width: 96vw;
      }
      .cards-wrapper {
        align-items: stretch;
        width: 100%;
        overflow-x: hidden;
      }
      .entity-card {
        width: 100%;
      }
      .entity-cards {
        grid-template-columns: 1fr;
      }
      h4 {
        width: 100%;
        font-size: 1.2em;
        margin: 0.6em 0;
        padding: 0 8px;
        box-sizing: border-box;
      }
    }
  `, dt);
B([
  E({ type: Boolean })
], q.prototype, "open");
B([
  E({ type: String })
], q.prototype, "title");
B([
  E({ type: String })
], q.prototype, "selectedDomain");
B([
  E({ type: String })
], q.prototype, "selectedDeviceClass");
B([
  E({ type: String })
], q.prototype, "content");
B([
  E({ type: Array })
], q.prototype, "entities");
B([
  E({ attribute: !1 })
], q.prototype, "hass");
B([
  E({ attribute: !1 })
], q.prototype, "card");
B([
  D()
], q.prototype, "_showAll");
B([
  D()
], q.prototype, "selectedGroup");
let qi = q;
customElements.define("status-card-plus-popup", qi);
const ae = class ae extends K {
  constructor() {
    super(...arguments), this.open = !1, this._onClosed = () => {
      this.open = !1, this.dispatchEvent(
        new CustomEvent("dialog-closed", { bubbles: !0, composed: !0 })
      );
    }, this._confirm = () => {
      var t, i;
      try {
        (i = (t = this.card) == null ? void 0 : t.toggleDomain) == null || i.call(t, this.selectedDomain, this.selectedDeviceClass);
      } catch {
      }
      this._onClosed();
    };
  }
  showDialog(t) {
    this.hass = t.hass, this.card = t.card, this.selectedDomain = t.selectedDomain, this.selectedDeviceClass = t.selectedDeviceClass, this.open = !0, this.requestUpdate();
  }
  render() {
    var a, c;
    if (!this.open || !this.hass || !this.card) return b``;
    const t = this.selectedDomain || "", i = this.selectedDeviceClass, s = j(t, i), o = (c = (a = this.card) == null ? void 0 : a.getCustomizationForType) == null ? void 0 : c.call(a, s), n = (o == null ? void 0 : o.invert) === !0;
    return b`
      <ha-dialog
        .open=${this.open}
        heading="${n ? this.hass.localize("ui.card.common.turn_on") + "?" : this.hass.localize("ui.card.common.turn_off") + "?"}"
        @closed=${this._onClosed}
      >
        <div>
          ${this.hass.localize(
      "ui.panel.lovelace.cards.actions.action_confirmation",
      {
        action: n ? this.hass.localize("ui.card.common.turn_on") : this.hass.localize("ui.card.common.turn_off")
      }
    )}
        </div>
        <ha-button
          appearance="plain"
          slot="secondaryAction"
          dialogAction="close"
        >
          ${this.hass.localize("ui.common.no")}
        </ha-button>
        <ha-button
          appearance="accent"
          slot="primaryAction"
          @click=${this._confirm}
        >
          ${this.hass.localize("ui.common.yes")}
        </ha-button>
      </ha-dialog>
    `;
  }
};
ae.styles = bt``;
let it = ae;
B([
  E({ type: Boolean })
], it.prototype, "open");
B([
  E({ attribute: !1 })
], it.prototype, "hass");
B([
  E({ attribute: !1 })
], it.prototype, "card");
B([
  E({ type: String })
], it.prototype, "selectedDomain");
B([
  E({ type: String })
], it.prototype, "selectedDeviceClass");
customElements.define(
  "status-card-plus-popup-confirmation",
  it
);
var Wi = Object.defineProperty, Gi = Object.getOwnPropertyDescriptor, M = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Gi(t, i) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (o = (s ? a(t, i, o) : a(o)) || o);
  return s && o && Wi(t, i, o), o;
};
let O = class extends K {
  constructor() {
    super(...arguments), this.areas = [], this.devices = [], this.entities = [], this.entitiesByDomain = {}, this.selectedDomain = null, this.selectedDeviceClass = null, this.hiddenEntities = [], this.hiddenLabels = [], this.hiddenAreas = [], this.hide_person = !1, this.hide_content_name = !0, this.list_mode = !1, this.selectedGroup = null, this._baseEntitiesMemo = C(
      (e, t, i) => e.filter((s) => {
        const o = s.state;
        if (o === "unavailable" || o === "unknown") return !1;
        const n = s.attributes.device_class;
        return t === "switch" ? i === "outlet" ? n === "outlet" : i === "switch" ? n === "switch" || n === void 0 : !0 : !i || n === i;
      })
    ), this.computeLabel = C(
      (e, t, i) => Rt(this.hass, e, t, i)
    ), this._customizationIndex = C((e) => {
      const t = /* @__PURE__ */ new Map();
      return (e ?? []).forEach((i) => {
        i.type && t.set(i.type.toLowerCase(), i);
      }), t;
    }), this._getPersonItemsMemo = C(
      (e, t, i, s, o) => s ? [] : e.filter(
        (n) => {
          var a;
          return n.entity_id.startsWith("person.") && !t.includes(n.entity_id) && !((a = n.labels) != null && a.some((c) => i.includes(c))) && !n.hidden_by && !n.disabled_by;
        }
      ).reverse().map((n) => o[n.entity_id]).filter((n) => !!n)
    ), this._computeExtraItems = C(
      (e, t) => {
        const i = e.content || [];
        return e.extra_entities ? e.extra_entities.reduce((s, o) => {
          var m;
          if (!i.includes(o)) return s;
          const n = t[o];
          if (!n) return s;
          const a = (m = e.customization) == null ? void 0 : m.find(
            (y) => y.type === o
          );
          if (a && a.state !== void 0 && a.invert_state !== void 0) {
            const y = a.invert_state === "true", p = n.state === a.state;
            if (!y && !p || y && p) return s;
          }
          const c = i.indexOf(o), r = c >= 0 ? c : 0, l = this.getCustomIcon(o, void 0, n), d = this.getCustomName(o, void 0, n) ?? n.attributes.friendly_name ?? o, u = this.getCustomColor(o, void 0), h = this.getCustomCSS(
            o,
            void 0
          ), f = this.getBackgroundColor(
            o,
            void 0
          );
          return s.push({
            type: "extra",
            panel: o,
            entity: n,
            order: r,
            icon: l,
            name: d,
            color: u,
            icon_css: h,
            background_color: f
          }), s;
        }, []).sort((s, o) => s.order - o.order) : [];
      }
    ), this._computeGroupItems = C(
      (e, t) => e.map((i, s) => {
        const o = t.find((a) => a.group_id === i);
        if (!(!o || !Object.keys(o).some(
          (a) => a !== "group_id" && a !== "group_icon" && o[a] !== void 0 && o[a] !== ""
        )))
          return {
            type: "group",
            group_id: i,
            order: s,
            ruleset: o
          };
      }).filter(
        (i) => !!i
      )
    ), this._computeDomainItems = C(
      (e) => e.map(
        (t, i) => t.includes(" - ") ? null : { type: "domain", domain: t, order: i }
      ).filter((t) => t !== null)
    ), this._computeDeviceClassItems = C(
      (e) => e.map((t, i) => {
        if (!t.includes(" - ")) return null;
        const [s, o] = t.split(" - ");
        return {
          type: "deviceClass",
          domain: s.trim().toLowerCase().replace(/\s+/g, "_"),
          deviceClass: o.trim().toLowerCase(),
          order: i
        };
      }).filter((t) => t !== null)
    ), this._computeSortedEntities = C(
      (e, t, i, s) => [...e, ...t, ...i, ...s].sort(
        (o, n) => o.order - n.order
      )
    );
  }
  firstUpdated(e) {
    this._loadData();
  }
  getCardSize() {
    return 2;
  }
  getGridOptions() {
    return {
      rows: 2
    };
  }
  async _loadData() {
    var e, t, i;
    try {
      const [s, o, n] = await Promise.all([
        ((e = this.hass) == null ? void 0 : e.callWS({
          type: "config/area_registry/list"
        })) ?? [],
        ((t = this.hass) == null ? void 0 : t.callWS({
          type: "config/device_registry/list"
        })) ?? [],
        ((i = this.hass) == null ? void 0 : i.callWS({
          type: "config/entity_registry/list"
        })) ?? []
      ]);
      this.areas = s, this.devices = o, this.entities = n, this._processEntities();
    } catch (s) {
      console.error("Error loading data:", s);
    }
  }
  _processEntities() {
    const e = this._entitiesByDomain(
      this.entities,
      this.devices,
      this.areas ?? [],
      this.hass.states
    );
    e !== this.entitiesByDomain && (this.entitiesByDomain = e);
  }
  _entitiesByDomain(e, t, i, s) {
    const o = this._config.area || null, n = this._config.floor || null, a = this._config.label || null, c = this.hiddenAreas, r = this.hiddenLabels, l = this.hiddenEntities, d = [
      e,
      t,
      i,
      s,
      o,
      n,
      a,
      c,
      r,
      l
    ];
    if (this._lastEntitiesByDomainInput && this._shallowArrayEqual(d, this._lastEntitiesByDomainInput))
      return this._lastEntitiesByDomainResult;
    const u = Ie(
      e,
      t,
      i,
      s,
      { area: o, floor: n, label: a, hiddenAreas: c, hiddenLabels: r, hiddenEntities: l },
      yt
    );
    return this._lastEntitiesByDomainInput = d, this._lastEntitiesByDomainResult = u, u;
  }
  _shallowArrayEqual(e, t) {
    if (e.length !== t.length) return !1;
    for (let i = 0; i < e.length; i++)
      if (Array.isArray(e[i]) && Array.isArray(t[i])) {
        if (e[i] !== t[i] && (e[i].length !== t[i].length || e[i].some((s, o) => s !== t[i][o])))
          return !1;
      } else if (e[i] !== t[i])
        return !1;
    return !0;
  }
  _baseEntities(e, t) {
    const i = this._entitiesByDomain(
      this.entities,
      this.devices,
      this.areas ?? [],
      this.hass.states
    )[e] || [];
    return this._baseEntitiesMemo(i, e, t);
  }
  _totalEntities(e, t) {
    return this._baseEntities(e, t);
  }
  _shouldShowTotalEntities(e, t) {
    if (this._config.show_total_entities) return !0;
    const i = j(e, t), s = this.getCustomizationForType(i);
    return (s == null ? void 0 : s.show_total_entities) === !0;
  }
  _shouldShowTotalNumbers(e, t) {
    if (this._config.show_total_number) return !0;
    const i = j(e, t), s = this.getCustomizationForType(i);
    return (s == null ? void 0 : s.show_total_number) === !0;
  }
  _isOn(e, t) {
    var n;
    const i = this._baseEntities(e, t), s = j(e, t), o = ((n = this.getCustomizationForType(s)) == null ? void 0 : n.invert) === !0;
    return i.filter((a) => {
      if (e === "climate") {
        const r = a.attributes.hvac_action;
        if (r !== void 0) {
          const l = !["idle", "off"].includes(r);
          return o ? !l : l;
        }
      }
      if (e === "humidifier") {
        const r = a.attributes.action;
        if (r !== void 0) {
          const l = !["idle", "off"].includes(r);
          return o ? !l : l;
        }
      }
      let c = !xe.includes(a.state);
      return o ? !c : c;
    });
  }
  setConfig(e) {
    if (!e)
      throw new Error("Invalid configuration.");
    this._config = e, this.hide_person = e.hide_person !== void 0 ? e.hide_person : !1, this.hide_content_name = e.hide_content_name !== void 0 ? e.hide_content_name : !1, this.list_mode = e.list_mode !== void 0 ? e.list_mode : !1, this.hiddenEntities = e.hidden_entities || [], this.hiddenLabels = e.hidden_labels || [], this.hiddenAreas = e.hidden_areas || [];
  }
  _showPopup(e, t, i) {
    e.dispatchEvent(
      new CustomEvent("show-dialog", {
        detail: {
          dialogTag: t,
          dialogImport: () => customElements.whenDefined(t),
          dialogParams: i
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _openDomainPopup(e) {
    var o, n, a;
    let t = "Details";
    typeof e == "string" ? t = this.getCustomName(e) || this.computeLabel({ name: e }) : typeof e == "number" && ((o = this._config.content) != null && o[e]) && (t = this._config.content[e]);
    let i = [];
    if (typeof e == "number") {
      const c = (n = this._config.content) == null ? void 0 : n[e], r = (a = this._config.rulesets) == null ? void 0 : a.find(
        (l) => l.group_id === c
      );
      i = r ? Bt(this, r) : [];
    } else {
      const c = this.selectedDeviceClass || void 0;
      i = this._shouldShowTotalEntities(e, c) ? this._totalEntities(e, c) : this._isOn(e, c);
    }
    this._showPopup(this, "status-card-plus-popup", {
      title: t,
      hass: this.hass,
      entities: i,
      selectedDomain: typeof e == "string" ? e : void 0,
      selectedDeviceClass: this.selectedDeviceClass || void 0,
      selectedGroup: this.selectedGroup || void 0,
      card: this,
      content: i.length ? void 0 : "Keine Entitäten"
    });
  }
  updated(e) {
    if (super.updated(e), !this._config || !this.hass) return;
    const t = e.get("hass"), i = e.get("_config");
    if (e.has("selectedDomain") && this.selectedDomain) {
      const s = this.selectedDomain;
      if (s.includes(".")) {
        const o = s, n = this.hass.states[o];
        n && this.showMoreInfo(n);
      } else
        this._openDomainPopup(s);
      setTimeout(() => {
        this.selectedDomain = null;
      }, 0);
    }
    if (e.has("selectedGroup") && this.selectedGroup !== null) {
      const s = this.selectedGroup;
      this._openDomainPopup(s), setTimeout(() => {
        this.selectedGroup = null;
      }, 0);
    }
    (e.has("hass") && (!t || t.themes !== this.hass.themes) || e.has("_config") && (!i || i.theme !== this._config.theme)) && Ii(
      this,
      this.hass.themes,
      this._config.theme
    ), (e.has("hass") || e.has("_config") || e.has("hiddenEntities") || e.has("hiddenLabels") || e.has("hiddenAreas")) && (!t || t.states !== this.hass.states || e.has("_config") || e.has("hiddenEntities") || e.has("hiddenLabels") || e.has("hiddenAreas")) && this._processEntities();
  }
  showMoreInfo(e) {
    const t = new CustomEvent("hass-more-info", {
      detail: { entityId: e.entity_id },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t);
  }
  getStatusProperty(e, t, i) {
    if (this._shouldShowTotalEntities(e, t) && !this._shouldShowTotalNumbers(e, t))
      return "";
    const s = [
      "window",
      "door",
      "lock",
      "awning",
      "blind",
      "curtain",
      "damper",
      "garage",
      "gate",
      "shade",
      "shutter"
    ], o = j(e, t), n = this.getCustomizationForType(o), a = (n == null ? void 0 : n.invert) === !0;
    switch (e) {
      case "device_tracker": {
        const c = N(
          this.hass,
          "home",
          "device_tracker"
        ), r = N(
          this.hass,
          "not_home",
          "device_tracker"
        );
        return a ? r : c;
      }
      case "lock":
      case "cover": {
        const c = N(this.hass, "open", "cover"), r = N(
          this.hass,
          "closed",
          "cover"
        );
        return a ? r : c;
      }
      case "person":
        return i === "home" ? N(this.hass, "home", "person") : i === "not_home" ? N(this.hass, "not_home", "person") : i ?? "unknown";
      default: {
        if (t && s.includes(t)) {
          const l = N(this.hass, "open", "cover"), d = N(
            this.hass,
            "closed",
            "cover"
          );
          return a ? d : l;
        }
        const c = N(
          this.hass,
          i ?? "on",
          "light"
        ), r = N(
          this.hass,
          i ?? "off",
          "light"
        );
        return a ? r : c;
      }
    }
  }
  getCustomizationForType(e) {
    return e ? this._customizationIndex(this._config.customization).get(e.toLowerCase()) : void 0;
  }
  getCustomIcon(e, t, i) {
    const s = this.getCustomizationForType(
      j(e, t)
    );
    if ((s == null ? void 0 : s.show_entity_picture) === !0 && i && i.attributes && i.attributes.entity_picture)
      return i.attributes.entity_picture;
    if (s && s.icon)
      return s.icon;
    if (i && i.attributes && i.attributes.icon)
      return i.attributes.icon;
    if (!i) {
      const n = (s == null ? void 0 : s.invert) === !0 ? "off" : "on";
      let a = e;
      return !t && e.includes(".") && (a = e.split(".")[0]), Xt(a, n, t);
    }
    return "";
  }
  getBackgroundColor(e, t) {
    var o;
    const i = this.getCustomizationForType(
      j(e, t)
    ), s = (n) => n.length === 4 ? `rgba(${n[0]},${n[1]},${n[2]},${n[3]})` : `rgb(${n[0]},${n[1]},${n[2]})`;
    if (i && Array.isArray(i.background_color)) {
      const n = i.background_color;
      if (n.length >= 3) return s(n);
    }
    if (Array.isArray((o = this._config) == null ? void 0 : o.background_color)) {
      const n = this._config.background_color;
      if (n.length >= 3) return s(n);
    }
    return "rgba(var(--rgb-primary-text-color), 0.15)";
  }
  getCustomColor(e, t) {
    const i = this.getCustomizationForType(
      j(e, t)
    );
    if (i && i.icon_color)
      return i.icon_color;
    if (this._config && this._config.color)
      return this._config.color;
  }
  getCustomName(e, t, i) {
    const s = this.getCustomizationForType(
      j(e, t)
    );
    if (s && s.name)
      return s.name;
    if (i && i.attributes.friendly_name)
      return i.attributes.friendly_name;
  }
  getCustomCSS(e, t) {
    const i = this.getCustomizationForType(
      j(e, t)
    );
    if (i && i.icon_css)
      return i.icon_css;
  }
  toggleDomain(e, t) {
    e = e ?? this.selectedDomain, t = t ?? this.selectedDeviceClass;
    const i = this._isOn(e, t);
    if (i.length === 0) {
      console.warn(`Keine aktiven Entitäten für ${e} gefunden.`);
      return;
    }
    if ([
      "light",
      "switch",
      "fan",
      "cover",
      "siren",
      "climate",
      "humidifier",
      "valve",
      "remote"
    ].includes(e)) {
      this.hass.callService(e, "toggle", {
        entity_id: i.map((s) => s.entity_id)
      });
      return;
    }
    for (const s of i) {
      let o = !xe.includes(s.state);
      e === "media_player" ? this.hass.callService(e, o ? "media_pause" : "media_play", {
        entity_id: s.entity_id
      }) : e === "lock" ? this.hass.callService(e, o ? "lock" : "unlock", {
        entity_id: s.entity_id
      }) : e === "vacuum" ? this.hass.callService(e, o ? "stop" : "start", {
        entity_id: s.entity_id
      }) : e === "alarm_control_panel" ? this.hass.callService(
        e,
        o ? "alarm_arm_away" : "alarm_disarm",
        { entity_id: s.entity_id }
      ) : e === "lawn_mower" ? this.hass.callService(e, o ? "pause" : "start_mowing", {
        entity_id: s.entity_id
      }) : e === "water_heater" ? this.hass.callService(e, o ? "turn_off" : "turn_on", {
        entity_id: s.entity_id
      }) : e === "update" && this.hass.callService(e, o ? "skip" : "install", {
        entity_id: s.entity_id
      });
    }
  }
  _handleDomainAction(e, t) {
    return (i) => {
      var l, d, u;
      i.stopPropagation();
      const s = this.getCustomizationForType(
        j(e, t)
      );
      let o, n;
      i.detail.action === "tap" ? (o = s == null ? void 0 : s.tap_action, n = (l = this._config) == null ? void 0 : l.tap_action) : i.detail.action === "hold" ? (o = s == null ? void 0 : s.hold_action, n = (d = this._config) == null ? void 0 : d.hold_action) : i.detail.action === "double_tap" && (o = s == null ? void 0 : s.double_tap_action, n = (u = this._config) == null ? void 0 : u.double_tap_action);
      const a = o !== void 0 ? o : n, c = typeof a == "string" && a === "more-info" || typeof a == "object" && (a == null ? void 0 : a.action) === "more-info", r = typeof a == "string" && a === "toggle" || typeof a == "object" && (a == null ? void 0 : a.action) === "toggle";
      if (e.includes(".")) {
        const h = e, f = this.hass.states[h], m = I(h);
        if (r) {
          this.hass.callService(m, "toggle", { entity_id: h });
          return;
        }
        if (c) {
          this.showMoreInfo(f);
          return;
        }
      }
      if (c || a === void 0) {
        this.selectedDomain = e, this.selectedDeviceClass = t || null;
        return;
      }
      if (r) {
        this.toggleDomain(e, t);
        return;
      }
      Ei(
        this,
        this.hass,
        {
          tap_action: (s == null ? void 0 : s.tap_action) || this._config.tap_action,
          hold_action: (s == null ? void 0 : s.hold_action) || this._config.hold_action,
          double_tap_action: (s == null ? void 0 : s.double_tap_action) || this._config.double_tap_action
        },
        i.detail.action
      );
    };
  }
  getPersonItems() {
    return this._getPersonItemsMemo(
      this.entities,
      this.hiddenEntities,
      this.hiddenLabels,
      this.hide_person,
      this.hass.states
    );
  }
  getGroupItems() {
    return this._computeGroupItems(
      this._config.content || [],
      this._config.rulesets || []
    );
  }
  getExtraItems() {
    return !this._config || !this.hass ? [] : this._computeExtraItems(this._config, this.hass.states);
  }
  getDomainItems() {
    return this._computeDomainItems(this._config.content || []);
  }
  getDeviceClassItems() {
    return this._computeDeviceClassItems(this._config.content || []);
  }
  _getIconStyles(e, t = {}) {
    const { color: i, square: s, isNotHome: o } = t, a = ((r) => {
      if (!r) return;
      const l = String(r).trim();
      return l.startsWith("var(") || l.startsWith("#") || l.startsWith("rgb") || l.startsWith("hsl") ? l : `var(--${l}-color)`;
    })(i), c = {
      "border-radius": s ? "20%" : "50%",
      "background-color": a ? `color-mix(in srgb, ${a} 18%, transparent)` : void 0,
      color: a
    };
    return e === "person" && o && (c.filter = "grayscale(100%)"), c;
  }
  renderExtraTab(e) {
    const { panel: t, entity: i, icon: s, name: o, color: n, icon_css: a, background_color: c } = e, r = this.hass.states[t], l = i.state, d = Number(l), u = !Number.isNaN(d) && l !== "" ? $e(d, this.hass.locale) : N(this.hass, l, I(t)), h = i.attributes.unit_of_measurement, f = this.getCustomizationForType(t), m = this._handleDomainAction(t), y = Tt({
      hasHold: ft(
        (f == null ? void 0 : f.hold_action) ?? this._config.hold_action
      ),
      hasDoubleClick: ft(
        (f == null ? void 0 : f.double_tap_action) ?? this._config.double_tap_action
      )
    }), p = {
      horizontal: this._config.content_layout === "horizontal"
    }, _ = this._computeIconColorOverride(t, r), A = this._computeStateColorMap(t, r), $ = this._getIconStyles("extra", {
      color: A || _ || n,
      square: this._config.square
    }), g = this._computeStateIconMap(t, r) || s;
    let v;
    const U = f == null ? void 0 : f.state_content;
    return U !== void 0 ? v = (Array.isArray(U) ? U : [U]).map((S) => {
      var R, mt;
      if (!S) return "";
      const x = String(S).trim();
      if (x === "state")
        return u + (Number.isNaN(d) ? "" : h ? ` ${h}` : "");
      const L = x.startsWith("attribute:") ? x.slice(10) : x;
      if (L && i.attributes && L in i.attributes) {
        const H = i.attributes[L];
        if (H == null) return "";
        let W;
        /temperature/i.test(L) ? W = (mt = (R = this.hass.config) == null ? void 0 : R.unit_system) == null ? void 0 : mt.temperature : /humidity/i.test(L) ? W = "%" : typeof i.attributes.unit_of_measurement == "string" && (W = i.attributes.unit_of_measurement);
        const kt = typeof H == "string" && H.trim() !== "" && !Number.isNaN(Number(H));
        if (typeof H == "number" || kt)
          try {
            const F = typeof H == "number" ? H : Number(H), V = $e(F, this.hass.locale);
            return W ? `${V} ${W}` : V;
          } catch {
            return W ? `${String(H)} ${W}` : String(H);
          }
        return N(
          this.hass,
          String(H),
          I(t)
        );
      }
      return x;
    }).filter((S) => S !== "").join(" · ") : v = `${u}${h ? ` ${h}` : ""}`, b`
      <sl-tab slot="nav" panel=${t} @action=${m} .actionHandler=${y}>
        <div class="extra-entity ${pt(p)}">
          <div class="entity-icon" style=${X($)}>
            ${(g || "").startsWith("/") || (g || "").startsWith("http") ? b`<img
                  src=${g}
                  alt=${o}
                  style="border-radius:${this._config.square ? "20%" : "50%"};object-fit:cover;"
                />` : b`<ha-state-icon
                  .hass=${this.hass}
                  .stateObj=${r}
                  .icon=${g}
                  .stateColor=${!0}
                  data-domain=${I(t)}
                  data-state=${r.state}
                  style="${(a || "") + (A ? `;color:${A}` : _ ? `;color:${_}` : n ? `;color:var(--${n}-color)` : "")}"
                ></ha-state-icon>`}
          </div>
          <div class="entity-info">
            ${this.hide_content_name ? "" : b`<div class="entity-name">${o}</div>`}
            <div class="entity-state">
              ${v}
            </div>
          </div>
        </div>
      </sl-tab>
    `;
  }
  _computeIconColorOverride(e, t) {
    var o;
    if (I(e) !== "climate") return;
    const s = (o = t == null ? void 0 : t.attributes) == null ? void 0 : o.hvac_action;
    if (s === "heating") return "var(--state-climate-heat-color)";
    if (s === "cooling") return "var(--state-climate-cool-color)";
  }
  _computeStateColorMap(e, t) {
    var o;
    const i = this.getCustomizationForType(e), s = i == null ? void 0 : i.state_color_map;
    if (!(!Array.isArray(s) || s.length === 0))
      for (const n of s) {
        const a = n.attribute === "state" ? t.state : (o = t.attributes) == null ? void 0 : o[n.attribute];
        if (a === void 0) continue;
        const c = String(a), r = String(n.equals);
        if (c === r) return n.color;
      }
  }
  _computeStateIconMap(e, t) {
    var o;
    const i = this.getCustomizationForType(e), s = i == null ? void 0 : i.state_icon_map;
    if (!(!Array.isArray(s) || s.length === 0))
      for (const n of s) {
        const a = n.attribute === "state" ? t.state : (o = t.attributes) == null ? void 0 : o[n.attribute];
        if (a === void 0) continue;
        const c = String(a), r = String(n.equals);
        if (c === r) return n.icon;
      }
  }
  renderGroupTab(e, t) {
    const i = Bt(this, e);
    if (!i.length) return b``;
    const s = e.group_id || `${this.hass.localize("component.group.entity_component._.name")} ${t + 1}`, o = e.group_icon || "mdi:format-list-group", n = this.getCustomColor(s);
    this.getBackgroundColor(s);
    const a = () => {
      this.selectedGroup = t;
    }, c = Tt({
      hasHold: !1,
      hasDoubleClick: !1
    }), r = {
      horizontal: this._config.content_layout === "horizontal"
    }, l = this._getIconStyles("domain", {
      color: n,
      square: this._config.square
    });
    return b`
      <sl-tab
        slot="nav"
        panel=${"group-" + t}
        @action=${a}
        .actionHandler=${c}
      >
        <div class="entity ${pt(r)}">
          <div class="entity-icon" style=${X(l)}>
            <ha-icon icon=${o}></ha-icon>
          </div>
          <div class="entity-info">
            ${this.hide_content_name ? "" : b`<div class="entity-name">${s}</div>`}
            <div class="entity-state">
              ${i.length}
              ${e.group_status ? ` ${e.group_status}` : ""}
            </div>
          </div>
        </div>
      </sl-tab>
    `;
  }
  renderDomainTab(e) {
    const { domain: t } = e, i = this._isOn(t), s = this._totalEntities(t);
    if (!(this._shouldShowTotalEntities(t) ? s : i).length) return b``;
    const a = this.getCustomColor(t), c = this.getCustomizationForType(t), r = this._handleDomainAction(t), l = Tt({
      hasHold: ft(
        (c == null ? void 0 : c.hold_action) ?? this._config.hold_action
      ),
      hasDoubleClick: ft(
        (c == null ? void 0 : c.double_tap_action) ?? this._config.double_tap_action
      )
    }), d = {
      horizontal: this._config.content_layout === "horizontal"
    }, u = this._getIconStyles("domain", {
      color: a,
      square: this._config.square
    });
    return b`
      <sl-tab
        slot="nav"
        panel=${t}
        @action=${r}
        .actionHandler=${l}
      >
        <div class="entity ${pt(d)}">
          <div class="entity-icon" style=${X(u)}>
            <ha-icon
              icon=${this.getCustomIcon(t)}
              style=${X({})}
            ></ha-icon>
          </div>
          <div class="entity-info">
            ${this.hide_content_name ? "" : b`<div class="entity-name">
                  ${this.getCustomName(t) || this.computeLabel({ name: t })}
                </div>`}
            <div class="entity-state">
              ${this._shouldShowTotalNumbers(t) ? `${i.length}/${s.length} ${this.getStatusProperty(
      t
    )}` : this._shouldShowTotalEntities(t) ? `${s.length}` : `${i.length} ${this.getStatusProperty(t)}`}
            </div>
          </div>
        </div>
      </sl-tab>
    `;
  }
  renderDeviceClassTab(e) {
    const { domain: t, deviceClass: i } = e, s = this._isOn(t, i), o = this._totalEntities(t, i);
    if (!(this._shouldShowTotalEntities(t, i) ? o : s).length) return b``;
    const c = this.getCustomColor(t, i), r = this.getCustomizationForType(
      j(t, i)
    ), l = this._handleDomainAction(t, i), d = Tt({
      hasHold: ft(
        (r == null ? void 0 : r.hold_action) ?? this._config.hold_action
      ),
      hasDoubleClick: ft(
        (r == null ? void 0 : r.double_tap_action) ?? this._config.double_tap_action
      )
    }), u = {
      horizontal: this._config.content_layout === "horizontal"
    }, h = this._getIconStyles("deviceClass", {
      color: c,
      square: this._config.square
    });
    return b`
      <sl-tab
        slot="nav"
        panel=${i}
        @action=${l}
        .actionHandler=${d}
      >
        <div class="entity ${pt(u)}">
          <div class="entity-icon" style=${X(h)}>
            <ha-icon icon=${this.getCustomIcon(t, i)}></ha-icon>
          </div>
          <div class="entity-info">
            ${this.hide_content_name ? "" : b`<div class="entity-name">
                  ${this.getCustomName(t, i) || this.computeLabel({ name: i })}
                </div>`}
            <div class="entity-state">
              ${this._shouldShowTotalNumbers(t, i) ? `${s.length}/${o.length} ${this.getStatusProperty(
      t,
      i
    )}` : this._shouldShowTotalEntities(t, i) ? `${o.length}` : `${s.length} ${this.getStatusProperty(
      t,
      i
    )}`}
            </div>
          </div>
        </div>
      </sl-tab>
    `;
  }
  renderTab(e) {
    switch (e.type) {
      case "extra":
        return this.renderExtraTab(e);
      case "group":
        return this.renderGroupTab(e.ruleset, e.order);
      case "domain":
        return this.renderDomainTab(e);
      case "deviceClass":
        return this.renderDeviceClassTab(e);
    }
  }
  render() {
    const e = this.getExtraItems(), t = this.getGroupItems(), i = this.getDomainItems(), s = this.getDeviceClassItems(), o = this._computeSortedEntities(
      e,
      t,
      i,
      s
    ), n = {
      "no-scroll": !!this._config.no_scroll
    }, a = this.getPersonItems();
    return b`
      <ha-card>
        <sl-tab-group no-scroll-controls class=${pt(n)}>
          ${tt(
      a,
      (c) => c.entity_id,
      (c) => {
        var h, f;
        const r = this.hass.states[c.entity_id], l = (r == null ? void 0 : r.state) !== "home", d = {
          horizontal: this._config.content_layout === "horizontal"
        }, u = {
          "border-radius": (h = this._config) != null && h.square ? "20%" : "50%",
          filter: l ? "grayscale(100%)" : "none"
        };
        return b`
                <sl-tab
                  slot="nav"
                  panel=${c.entity_id}
                  @click="${() => this.showMoreInfo(c)}"
                >
                  <div class="entity ${pt(d)}">
                    <div class="entity-icon" style=${X(u)}>
                      ${c.attributes.entity_picture ? b`<img
                            src=${c.attributes.entity_picture}
                            alt=${c.attributes.friendly_name || c.entity_id}
                            style=${X(u)}
                          />` : b`<ha-icon
                            class="center"
                            icon=${c.attributes.icon || "mdi:account"}
                            style=${X(u)}
                          ></ha-icon>`}
                    </div>
                    <div class="entity-info">
                      ${this.hide_content_name ? "" : b`<div class="entity-name">
                            ${((f = c.attributes.friendly_name) == null ? void 0 : f.split(" ")[0]) || ""}
                          </div>`}
                      <div class="entity-state">
                        ${this.getStatusProperty(
          "person",
          void 0,
          r == null ? void 0 : r.state
        )}
                      </div>
                    </div>
                  </div>
                </sl-tab>
              `;
      }
    )}
          ${tt(
      o,
      (c) => c.type === "extra" ? c.panel : c.type === "domain" ? c.domain : c.type === "deviceClass" ? `${c.domain}-${c.deviceClass}` : c.type === "group" ? `group-${c.group_id}` : "",
      (c) => this.renderTab(c)
    )}
        </sl-tab-group>
      </ha-card>
    `;
  }
  static get styles() {
    return bt`
      ha-card {
        overflow: hidden;
        position: relative;
        height: 100%;
        align-content: center;
      }
      sl-tab-group {
        padding: 6px 4px;
        align-content: center;
      }
      .center {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .entity.horizontal,
      .extra-entity.horizontal {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .entity,
      .extra-entity {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .entity.horizontal .entity-icon,
      .extra-entity.horizontal .entity-icon {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: rgba(var(--rgb-primary-text-color), 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .entity-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgba(var(--rgb-primary-text-color), 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .entity-icon img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
      .entity.horizontal .entity-info,
      .extra-entity.horizontal .entity-info {
        text-align: left;
        margin-top: 3px;
        padding-left: 8px;
      }
      .entity-info {
        text-align: center;
        margin-top: 7px;
      }
      .entity-name {
        color: var(--primary-text-color);
        font-weight: 400;
        font-size: inherit;
      }
      .entity-state {
        color: var(--secondary-text-color);
        font-weight: 400;
        font-size: inherit;
      }
      sl-tab {
        pointer-events: auto;
      }
      sl-tab * {
        pointer-events: none;
      }
      sl-tab::part(base) {
        padding: 0 8px !important;
        display: flex;
      }
      sl-tab-group::part(tabs) {
        border-bottom: none !important;
      }
      sl-tab-group.no-scroll::part(tabs) {
        display: flex;
        flex-wrap: wrap;
        overflow-x: visible !important;
        max-width: 100%;
        border-bottom: none !important;
      }
    `;
  }
  static getConfigElement() {
    return document.createElement("status-card-plus-editor");
  }
  static getStubConfig() {
    return {};
  }
};
M([
  E({ attribute: !1 })
], O.prototype, "hass", 2);
M([
  E({ type: Object })
], O.prototype, "_config", 2);
M([
  D()
], O.prototype, "areas", 2);
M([
  D()
], O.prototype, "devices", 2);
M([
  D()
], O.prototype, "entities", 2);
M([
  D()
], O.prototype, "entitiesByDomain", 2);
M([
  D()
], O.prototype, "selectedDomain", 2);
M([
  D()
], O.prototype, "selectedDeviceClass", 2);
M([
  D()
], O.prototype, "hiddenEntities", 2);
M([
  D()
], O.prototype, "hiddenLabels", 2);
M([
  D()
], O.prototype, "hiddenAreas", 2);
M([
  D()
], O.prototype, "hide_person", 2);
M([
  D()
], O.prototype, "hide_content_name", 2);
M([
  D()
], O.prototype, "list_mode", 2);
M([
  D()
], O.prototype, "selectedGroup", 2);
O = M([
  jt("status-card-plus")
], O);
var Ki = Object.defineProperty, Zi = Object.getOwnPropertyDescriptor, Vt = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Zi(t, i) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (o = (s ? a(t, i, o) : a(o)) || o);
  return s && o && Ki(t, i, o), o;
};
class ne extends K {
  constructor() {
    super(...arguments), this.SelectOptions = [], this._entityKeys = /* @__PURE__ */ new WeakMap();
  }
  _getKey(t) {
    return this._entityKeys.has(t) || this._entityKeys.set(t, Math.random().toString()), this._entityKeys.get(t);
  }
  render() {
    return this.hass ? b`
      <div class="customization">
        ${this.customizationkey && tt(
      this.customizationkey,
      (t) => this._getKey(t),
      (t, i) => b`
            <div class="customize-item">
              <ha-select
                label=${this.hass.localize(
        "ui.panel.lovelace.editor.common.edit"
      ) + " " + this.hass.localize(
        "ui.panel.lovelace.editor.card.markdown.content"
      )}
                name="Customize"
                class="select-customization"
                naturalMenuWidth
                fixedMenuPosition
                .value=${t.type}
                @closed=${(s) => s.stopPropagation()}
                @value-changed=${this._valueChanged}
              >
                ${this.SelectOptions.map(
        (s) => b`<mwc-list-item .value=${s.value}
                      >${s.label}</mwc-list-item
                    >`
      )}
              </ha-select>
              <ha-icon-button
                .label=${this.hass.localize("ui.common.remove")}
                .path=${oe}
                class="remove-icon"
                .index=${i}
                @click=${this._removeRow}
              ></ha-icon-button>
              <ha-icon-button
                .label=${this.hass.localize("ui.common.edit")}
                .path=${zi}
                class="edit-icon"
                .index=${i}
                @click=${this._editRow}
              ></ha-icon-button>
            </div>
          `
    )}

        <div class="add-item row">
          <ha-select
            label=${this.hass.localize(
      "ui.panel.lovelace.editor.common.edit"
    ) + " " + this.hass.localize(
      "ui.panel.lovelace.editor.card.markdown.content"
    )}
            name="Customize"
            class="add-customization"
            naturalMenuWidth
            fixedMenuPosition
            @closed=${(t) => t.stopPropagation()}
            @click=${this._addRow}
          >
            ${this.SelectOptions.map(
      (t) => b`<mwc-list-item .value=${t.value}
                  >${t.label}</mwc-list-item
                >`
    )}
          </ha-select>
        </div>
      </div>
    ` : T;
  }
  _valueChanged(t) {
    if (!this.customizationkey || !this.hass)
      return;
    const i = t.detail.value, s = t.target.index, o = this.customizationkey.concat();
    o[s] = { ...o[s], type: i || "" }, P(this, this.customizationChangedEvent, o);
  }
  _removeRow(t) {
    t.stopPropagation();
    const i = t.currentTarget.index;
    if (i != null) {
      const s = this.customizationkey.concat();
      s.splice(i, 1), P(
        this,
        this.customizationChangedEvent,
        s
      );
    }
  }
  _editRow(t) {
    t.stopPropagation();
    const i = t.target.index;
    i != null && P(this, "edit-item", i);
  }
  _addRow(t) {
    if (t.stopPropagation(), !this.customizationkey || !this.hass)
      return;
    const i = this.shadowRoot.querySelector(
      ".add-customization"
    );
    if (!i || !i.value)
      return;
    const o = { type: i.value };
    P(this, this.customizationChangedEvent, [
      ...this.customizationkey,
      o
    ]), i.value = "";
  }
  static get styles() {
    return bt`
      .customization {
        margin-top: 16px;
      }
      .customize-item,
      .add-item {
        display: flex;
        align-items: center;
      }
      .add-customization,
      .select-customization {
        width: 100%;
        margin-top: 8px;
      }
      .remove-icon,
      .edit-icon {
        --mdc-icon-button-size: 36px;
        color: var(--secondary-text-color);
        padding-left: 4px;
      }
    `;
  }
}
Vt([
  E({ attribute: !1 })
], ne.prototype, "hass", 2);
Vt([
  E({ type: Array })
], ne.prototype, "SelectOptions", 2);
let Yt = class extends ne {
  constructor() {
    super(...arguments), this.customizationChangedEvent = "config-changed";
  }
  get customizationkey() {
    return this.customization;
  }
};
Vt([
  E({ attribute: !1 })
], Yt.prototype, "customization", 2);
Yt = Vt([
  jt("status-items-editor")
], Yt);
var Ji = Object.defineProperty, Xi = Object.getOwnPropertyDescriptor, ot = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Xi(t, i) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (o = (s ? a(t, i, o) : a(o)) || o);
  return s && o && Ji(t, i, o), o;
};
let J = class extends K {
  constructor() {
    super(...arguments), this.useSensorSchema = !1, this._schemadomain = C(() => {
      const e = [
        "more-info",
        "toggle",
        "navigate",
        "url",
        "perform-action",
        "none"
      ];
      return [
        { name: "invert", selector: { boolean: {} } },
        { name: "show_total_number", selector: { boolean: {} } },
        { name: "show_total_entities", selector: { boolean: {} } },
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
        {
          name: "icon_color",
          selector: {
            ui_color: { default_color: "state", include_state: !0 }
          }
        },
        {
          name: "background_color",
          selector: {
            color_rgb: { default_color: "state", include_state: !0 }
          }
        },
        { name: "tap_action", selector: { ui_action: { actions: e } } },
        { name: "double_tap_action", selector: { ui_action: { actions: e } } },
        { name: "hold_action", selector: { ui_action: { actions: e } } },
        { name: "popup_card", selector: { object: {} } }
      ];
    }), this._schemaEntity = C(() => {
      var i;
      const e = ((i = this.config) == null ? void 0 : i.type) || "", t = [
        "more-info",
        "toggle",
        "navigate",
        "url",
        "perform-action",
        "none"
      ];
      return [
        {
          name: "",
          type: "grid",
          schema: [
            {
              name: "invert_state",
              required: !0,
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    {
                      label: this.hass.localize(
                        "ui.panel.lovelace.editor.condition-editor.condition.state.state_equal"
                      ),
                      value: "false"
                    },
                    {
                      label: this.hass.localize(
                        "ui.panel.lovelace.editor.condition-editor.condition.state.state_not_equal"
                      ),
                      value: "true"
                    }
                  ]
                }
              }
            },
            {
              name: "state",
              selector: { state: { entity_id: e } }
            }
          ]
        },
        { name: "name", selector: { text: {} } },
        { name: "show_entity_picture", selector: { boolean: {} } },
        { name: "icon", selector: { icon: {} } },
        {
          name: "state_content",
          selector: {
            text: {}
          }
        },
        {
          name: "state_color_map",
          selector: {
            object: {}
          }
        },
        {
          name: "state_icon_map",
          selector: {
            object: {}
          }
        },
        {
          name: "icon_color",
          selector: { ui_color: { default_color: "state", include_state: !0 } }
        },
        {
          name: "background_color",
          selector: {
            color_rgb: { default_color: "state", include_state: !0 }
          }
        },
        { name: "tap_action", selector: { ui_action: { actions: t } } },
        { name: "double_tap_action", selector: { ui_action: { actions: t } } },
        { name: "hold_action", selector: { ui_action: { actions: t } } }
      ];
    });
  }
  render() {
    var i;
    if (!this.hass || !this.config)
      return b``;
    (i = this._config) != null && i.invert_state || (this._config = {
      ...this._config,
      invert_state: this.config.invert_state || "false",
      icon_color: this.config.icon_color || void 0,
      tap_action: this.config.tap_action || void 0,
      double_tap_action: this.config.double_tap_action || void 0,
      hold_action: this.config.hold_action || void 0
    });
    let e;
    switch (this.getSchema) {
      case "domain":
        e = this._schemadomain();
        break;
      case "entity":
        e = this._schemaEntity();
        break;
    }
    const t = {
      ...this._config
    };
    return b`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${e}
        .computeLabel=${(s) => Rt(this.hass, s)}
        @value-changed=${this._valueChangedSchema}
      ></ha-form>
    `;
  }
  _valueChangedSchema(e) {
    if (!this.config)
      return;
    e.stopPropagation();
    const t = { ...e.detail.value };
    if (typeof t.state_content == "string") {
      const s = t.state_content.trim();
      s.includes(",") ? t.state_content = s.split(",").map((o) => o.trim()).filter((o) => o.length > 0) : s.length === 0 && delete t.state_content;
    }
    const i = {
      ...this.config,
      ...t
    };
    this._config = i, this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: i
      })
    );
  }
  setConfig(e) {
    this._config = {
      ...e,
      customization: e.customization ?? []
    };
  }
  static get styles() {
    return bt`
      .checkbox {
        display: flex;
        align-items: center;
        padding: 8px 0;
      }
      .checkbox input {
        height: 20px;
        width: 20px;
        margin-left: 0;
        margin-right: 8px;
      }
      h3 {
        margin-bottom: 0.5em;
      }
      .row {
        margin-bottom: 12px;
        margin-top: 12px;
        display: block;
      }
      .side-by-side {
        display: flex;
      }
      .side-by-side > * {
        flex: 1 1 0%;
        padding-right: 4px;
      }
    `;
  }
};
ot([
  E({ attribute: !1 })
], J.prototype, "config", 2);
ot([
  E({ attribute: !1 })
], J.prototype, "hass", 2);
ot([
  E({ attribute: !1 })
], J.prototype, "lovelace", 2);
ot([
  E({ type: Boolean })
], J.prototype, "useSensorSchema", 2);
ot([
  E({ type: Number })
], J.prototype, "index", 2);
ot([
  D()
], J.prototype, "getSchema", 2);
ot([
  D()
], J.prototype, "_config", 2);
J = ot([
  jt("status-card-plus-item-editor")
], J);
var Yi = Object.defineProperty, Qi = Object.getOwnPropertyDescriptor, ht = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Qi(t, i) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (o = (s ? a(t, i, o) : a(o)) || o);
  return s && o && Yi(t, i, o), o;
};
let st = class extends K {
  constructor() {
    super(...arguments), this._subElementEditorDomain = void 0, this._subElementEditorEntity = void 0, this.rulesets = [
      {
        group_id: "",
        group_icon: "",
        group_status: "",
        rules: [{ key: "", value: "" }]
      }
    ], this.computeLabel = C(
      (e, t, i) => Rt(this.hass, e, t, i)
    ), this._filterInitialized = !1, this._lastFilter = {
      area: [],
      floor: [],
      label: []
    }, this._schema = C(
      (e, t, i, s) => {
        const o = this.computeLabel({ name: "area" }), n = this.computeLabel({ name: "floor" }), a = this.computeLabel({ name: "name" }), c = this.computeLabel({ name: "state" }), r = [
          "more-info",
          "toggle",
          "navigate",
          "url",
          "perform-action",
          "none"
        ];
        return [
          {
            name: "appearance",
            flatten: !0,
            type: "expandable",
            icon: "mdi:palette",
            schema: [
              {
                name: "",
                type: "grid",
                schema: [
                  { name: "hide_person", selector: { boolean: {} } },
                  { name: "hide_content_name", selector: { boolean: {} } },
                  {
                    name: "show_total_number",
                    selector: { boolean: {} }
                  },
                  {
                    name: "square",
                    selector: { boolean: {} }
                  },
                  {
                    name: "show_total_entities",
                    selector: { boolean: {} }
                  },
                  {
                    name: "no_scroll",
                    selector: { boolean: {} }
                  }
                ]
              },
              {
                name: "",
                type: "grid",
                schema: [
                  { name: "theme", required: !1, selector: { theme: {} } }
                ]
              },
              {
                name: "content_layout",
                required: !0,
                selector: {
                  select: {
                    mode: "box",
                    options: ["vertical", "horizontal"].map((l) => ({
                      label: this.hass.localize(
                        `ui.panel.lovelace.editor.card.tile.content_layout_options.${l}`
                      ),
                      value: l,
                      image: {
                        src: `/static/images/form/tile_content_layout_${l}.svg`,
                        src_dark: `/static/images/form/tile_content_layout_${l}_dark.svg`,
                        flip_rtl: !0
                      }
                    }))
                  }
                }
              },
              {
                name: "color",
                selector: {
                  ui_color: { default_color: "state", include_state: !0 }
                }
              },
              {
                name: "background_color",
                selector: {
                  color_rgb: {}
                }
              },
              { name: "tap_action", selector: { ui_action: { actions: r } } },
              { name: "double_tap_action", selector: { ui_action: { actions: r } } },
              { name: "hold_action", selector: { ui_action: { actions: r } } }
            ]
          },
          {
            name: "edit_filters",
            flatten: !0,
            type: "expandable",
            icon: "mdi:filter-cog",
            schema: [
              {
                name: "",
                type: "grid",
                schema: [
                  {
                    name: "filter",
                    selector: {
                      select: {
                        options: [
                          { value: "area", label: o },
                          { value: "floor", label: n }
                        ]
                      }
                    }
                  },
                  { name: "label_filter", selector: { boolean: {} } }
                ]
              },
              ...e === "area" && i === !1 ? [
                { name: "multiple_areas", selector: { boolean: {} } },
                { name: "area", selector: { area: {} } }
              ] : [],
              ...e === "area" && i === !0 ? [
                { name: "multiple_areas", selector: { boolean: {} } },
                { name: "area", selector: { area: { multiple: !0 } } }
              ] : [],
              ...e === "floor" && s === !1 ? [
                { name: "multiple_floors", selector: { boolean: {} } },
                { name: "floor", selector: { floor: {} } }
              ] : [],
              ...e === "floor" && s === !0 ? [
                { name: "multiple_floors", selector: { boolean: {} } },
                { name: "floor", selector: { floor: { multiple: !0 } } }
              ] : [],
              ...t ? [
                { name: "label", selector: { label: { multiple: !0 } } }
              ] : []
            ]
          },
          {
            name: "popup",
            flatten: !0,
            type: "expandable",
            icon: "mdi:arrange-bring-forward",
            schema: [
              {
                name: "ungroup_areas",
                selector: { boolean: {} }
              },
              {
                name: "popup_sort",
                selector: {
                  select: {
                    options: [
                      { value: "name", label: a },
                      { value: "state", label: c }
                    ]
                  }
                }
              },
              { name: "list_mode", selector: { boolean: {} } },
              {
                name: "columns",
                required: !1,
                selector: { number: { min: 1, max: 4, mode: "box" } }
              }
            ]
          }
        ];
      }
    ), this._toggleschema = C((e) => [
      {
        name: "content",
        selector: {
          select: {
            reorder: !0,
            multiple: !0,
            custom_value: !0,
            options: e
          }
        }
      }
    ]), this._entitiesSchema = C((e) => {
      const t = this.computeLabel({ name: "area" }), i = this.computeLabel({ name: "label" }), s = this.computeLabel({ name: "entity" });
      return [
        {
          name: "extra_entities",
          selector: { entity: { multiple: !0 } }
        },
        {
          name: "",
          type: "grid",
          schema: [
            {
              name: "hide_filter",
              selector: {
                select: {
                  options: [
                    { value: "entity", label: s },
                    { value: "label", label: i },
                    { value: "area", label: t }
                  ]
                }
              }
            }
          ]
        },
        ...e === "label" ? [
          {
            name: "hidden_labels",
            selector: { label: { multiple: !0 } }
          }
        ] : [],
        ...e === "area" ? [
          {
            name: "hidden_areas",
            selector: { area: { multiple: !0 } }
          }
        ] : []
      ];
    }), this._buildToggleOptions = C(
      (e, t) => this._buildOptions("toggle", e, t)
    ), this._memoizedClassesForArea = C(
      (e, t, i) => this._classesForArea(e, t, i)
    ), this.filterValueSelector = {
      attributes: { object: {} },
      area: { area: {} },
      device: { device: {} },
      entity_id: { entity: {} },
      entity_category: {
        select: { options: ["config", "diagnostic"], mode: "dropdown" }
      },
      floor: { floor: {} },
      group: { entity: { filter: { domain: "group" } } },
      hidden_by: {
        select: { options: ["user", "integration"], mode: "dropdown" }
      },
      integration: { config_entry: {} },
      label: { label: {} }
    }, this._addRuleset = () => {
      this.rulesets = [
        ...this.rulesets,
        { group_id: "", group_icon: "", rules: [{ key: "", value: "" }] }
      ];
    }, this._removeRuleset = (e) => {
      this.rulesets = this.rulesets.filter((t, i) => i !== e), this._updateConfigFromRulesets();
    }, this._toggleEntityHidden = (e) => {
      var s;
      const t = new Set(((s = this._config) == null ? void 0 : s.hidden_entities) ?? []);
      t.has(e) ? t.delete(e) : t.add(e);
      const i = Array.from(t);
      this._config = {
        ...this._config || {},
        hidden_entities: i
      }, P(this, "config-changed", { config: { ...this._config } });
    };
  }
  setConfig(e) {
    this._config = {
      ...e,
      columns: e.columns ?? 4,
      hide_person: e.hide_person ?? !1,
      list_mode: e.list_mode ?? !1,
      hide_content_name: e.hide_content_name ?? !1,
      customization: e.customization ?? []
    }, this._loadRulesetsFromConfig();
  }
  _updateAreaFloorInConfig() {
    if (!this._config || !this._config.filter) return;
    this._config.filter === "area" && this._config.floor !== void 0 ? (delete this._config.floor, P(this, "config-changed", { config: { ...this._config } })) : this._config.filter === "floor" && this._config.area !== void 0 && (delete this._config.area, P(this, "config-changed", { config: { ...this._config } }));
  }
  async updated(e) {
    super.updated(e);
    let t = !1;
    if (!(!this.hass || !this._config) && e.has("_config")) {
      if (this._updateAreaFloorInConfig(), (this._config.label_filter === !1 && this._config.label !== void 0 || Array.isArray(this._config.label) && this._config.label.length === 0) && (delete this._config.label, t = !0), this._config.hide_filter && !["entity", "label", "area"].includes(this._config.hide_filter)) {
        const _ = (/* @__PURE__ */ new Map([
          [this.computeLabel({ name: "entity" }), "entity"],
          [this.computeLabel({ name: "label" }), "label"],
          [this.computeLabel({ name: "area" }), "area"]
        ])).get(this._config.hide_filter);
        _ && (this._config = { ...this._config, hide_filter: _ }, t = !0);
      }
      const i = e.get("_config"), s = (i == null ? void 0 : i.extra_entities) ?? [], o = this._config.extra_entities ?? [], n = (i == null ? void 0 : i.content) ?? [], a = this._config.content ?? [], c = Array.isArray(this._config.area) ? [...this._config.area] : this._config.area ? [this._config.area] : [], r = Array.isArray(this._config.floor) ? [...this._config.floor] : this._config.floor ? [this._config.floor] : [], l = Array.isArray(this._config.label) ? [...this._config.label] : [];
      this._filterInitialized || (this._lastFilter = {
        area: c,
        floor: r,
        label: l
      }, this._filterInitialized = !0);
      const d = this._lastFilter.area, u = this._lastFilter.floor, h = this._lastFilter.label, f = !Y(h, l), m = !Y(u, r);
      if (!Y(d, c) || m || f) {
        const _ = this.possibleToggleDomains.sort(
          (A, $) => _t.indexOf(A) - _t.indexOf($)
        );
        this._config = {
          ...this._config,
          content: [..._]
        }, this._lastFilter = {
          area: [...c],
          floor: [...r],
          label: [...l]
        }, t = !0;
      }
      if (this._config.rulesets && Array.isArray(this._config.rulesets)) {
        const p = this._config.rulesets.filter(
          (g) => Object.keys(g).some(
            (v) => v !== "group_id" && v !== "group_icon" && v !== "group_status" && g[v] !== void 0 && g[v] !== ""
          )
        ).map((g) => g.group_id).filter((g) => g && g.length > 1);
        let _ = Array.isArray(this._config.content) ? [...this._config.content] : [];
        _ = _.filter((g) => !p.includes(g));
        const A = this._config.extra_entities ?? [];
        let $ = 0;
        for (let g = 0; g < _.length; g++) {
          if (!A.includes(_[g])) {
            $ = g;
            break;
          }
          $ = g + 1;
        }
        _ = [
          ..._.slice(0, $),
          ...p.filter((g) => !_.includes(g)),
          ..._.slice($)
        ], Y(_, this._config.content ?? []) || (this._config = {
          ...this._config,
          content: _
        }, t = !0);
      }
      if (!Y(s, o)) {
        let p = [...a];
        o.forEach((_) => {
          p.includes(_) || p.unshift(_);
        }), p = p.filter(
          (_) => !_.includes(".") || o.includes(_)
        ), Y(p, a) || (this._config = {
          ...this._config,
          content: p
        }, t = !0);
      }
      if (!Y(n, a)) {
        let p = [...o];
        p = p.filter((_) => a.includes(_)), Y(p, o) || (this._config = {
          ...this._config,
          extra_entities: p
        }, t = !0);
      }
      t && (P(this, "config-changed", { config: { ...this._config } }), this.requestUpdate());
    }
  }
  getGroupSchema(e) {
    return [
      {
        name: "group_id",
        selector: { text: {} }
      },
      {
        name: "group_icon",
        selector: { icon: {} }
      },
      {
        name: "group_status",
        selector: { text: {} }
      },
      ...e.rules.map((t, i) => {
        const s = e.rules.map((n, a) => a !== i ? n.key : null).filter((n) => n), o = this.ruleKeySelector.options.filter(
          ([n]) => !s.includes(n) || n === t.key
        );
        return {
          type: "grid",
          schema: [
            {
              type: "select",
              name: `key_${i}`,
              options: o
            },
            {
              name: `value_${i}`,
              selector: this.filterValueSelector[t.key] ?? { text: {} }
            }
          ]
        };
      })
    ];
  }
  _valueChanged(e) {
    this._config = e.detail.value, this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config }
      })
    );
  }
  get possibleToggleDomains() {
    var e, t, i;
    return this._memoizedClassesForArea(
      ((e = this._config) == null ? void 0 : e.area) || [],
      ((t = this._config) == null ? void 0 : t.floor) || [],
      ((i = this._config) == null ? void 0 : i.label) || []
    );
  }
  get toggleSelectOptions() {
    var e;
    return this._buildToggleOptions(
      this.possibleToggleDomains,
      ((e = this._config) == null ? void 0 : e.content) || []
    );
  }
  get contentSelectOptions() {
    const e = this._config.content ?? [];
    return this._buildOptions("toggle", e, e);
  }
  _parseTypePair(e) {
    const t = e.match(/^(.+?)\s*-\s*(.+)$/);
    if (!t) return null;
    const i = t[1].toLowerCase().replace(/\s+/g, "_"), s = t[2].toLowerCase();
    return { domain: i, deviceClass: s };
  }
  _labelForTypePair(e) {
    var i, s, o;
    if (e.includes(".")) {
      const n = (s = (i = this.hass) == null ? void 0 : i.states) == null ? void 0 : s[e];
      return ((o = n == null ? void 0 : n.attributes) == null ? void 0 : o.friendly_name) || e;
    }
    const t = this._parseTypePair(e);
    if (t) {
      const { domain: n, deviceClass: a } = t;
      if (n === "switch" && a === "switch") {
        const l = this.hass.localize(
          "component.switch.entity_component._.name"
        );
        return `${l} - ${l}`;
      }
      const c = this.hass.localize(`component.${n}.entity_component._.name`) || n, r = this.hass.localize(
        `ui.dialogs.entity_registry.editor.device_classes.${n}.${a}`
      ) || a;
      return `${c} - ${r}`;
    }
    return e === "scene" ? "Scene" : this.hass.localize(`component.${e}.entity_component._.name`) || e;
  }
  _classesForArea(e, t, i) {
    var r;
    const s = ((r = this._config) == null ? void 0 : r.extra_entities) || [];
    let o = Object.values(this.hass.entities).filter(
      (l) => !l.hidden && yt.includes(I(l.entity_id))
    );
    if (e && e.length > 0)
      o = o.filter(
        (l) => {
          var d;
          return e.includes(l.area_id) || l.device_id && e.includes((d = this.hass.devices[l.device_id]) == null ? void 0 : d.area_id);
        }
      );
    else if (t && t.length > 0) {
      const l = Object.values(this.hass.areas).filter(
        (d) => d.floor_id !== void 0 && t.includes(d.floor_id)
      ).map((d) => d.area_id);
      o = o.filter(
        (d) => {
          var u;
          return d.area_id !== void 0 && l.includes(d.area_id) || d.device_id && ((u = this.hass.devices[d.device_id]) == null ? void 0 : u.area_id) !== void 0 && l.includes(
            this.hass.devices[d.device_id].area_id
          );
        }
      );
    }
    i && i.length > 0 && (o = o.filter(
      (l) => {
        var d, u;
        return ((d = l.labels) == null ? void 0 : d.some((h) => i.includes(h))) || l.device_id && Array.isArray((u = this.hass.devices[l.device_id]) == null ? void 0 : u.labels) && this.hass.devices[l.device_id].labels.some(
          (h) => i.includes(h)
        );
      }
    ));
    const n = new Set(
      o.map((l) => I(l.entity_id)).filter((l) => l !== "binary_sensor" && l !== "cover" && l !== "switch")
    ), a = /* @__PURE__ */ new Set();
    o.filter(
      (l) => ["binary_sensor", "cover", "switch"].includes(
        I(l.entity_id)
      )
    ).forEach((l) => {
      var h;
      const d = I(l.entity_id), u = ((h = this.hass.states[l.entity_id]) == null ? void 0 : h.attributes.device_class) || "";
      u && a.add(`${Be(d)} - ${u}`);
    });
    const c = [...a];
    return [...n, ...c, ...s].sort(
      (l, d) => {
        const u = _t.findIndex((f) => l.startsWith(f)), h = _t.findIndex((f) => d.startsWith(f));
        return (u === -1 ? _t.length : u) - (h === -1 ? _t.length : h);
      }
    );
  }
  _buildOptions(e, t, i) {
    var c;
    const s = [.../* @__PURE__ */ new Set([...t, ...i])], o = ((c = this.hass) == null ? void 0 : c.states) || {}, n = /* @__PURE__ */ new Map(), a = s.map((r) => {
      var d, u;
      if (n.has(r))
        return { value: r, label: n.get(r) };
      let l;
      return r.includes(".") ? l = ((u = (d = o[r]) == null ? void 0 : d.attributes) == null ? void 0 : u.friendly_name) || r : r === "scene" ? l = "Scene" : l = this._labelForTypePair(r), n.set(r, l), { value: r, label: l };
    });
    return a.sort((r, l) => {
      const d = r.value.includes("."), u = l.value.includes(".");
      return d && !u ? -1 : !d && u ? 1 : Pe(
        r.label,
        l.label,
        this.hass.locale.language
      );
    }), a;
  }
  _itemChanged(e, t, i) {
    if (e.stopPropagation(), !this._config || !this.hass)
      return;
    const s = t == null ? void 0 : t.index;
    if (s != null) {
      const o = [...this._config.customization ?? []];
      o[s] = e.detail, P(this, "config-changed", {
        config: { ...this._config, customization: o }
      });
    }
  }
  _editItem(e, t) {
    if (e.stopPropagation(), !this._config || !this.hass)
      return;
    const i = e.detail;
    this[`_subElementEditor${t}`] = { index: i };
  }
  _edit_itemDomain(e) {
    const t = e.detail, s = (this._config.customization ?? [])[t];
    let o;
    s && s.type && s.type.includes(".") ? o = "Entity" : o = "Domain", this._editItem(e, o);
  }
  _itemChangedDomain(e) {
    this._itemChanged(e, this._subElementEditorDomain, "customization");
  }
  _itemChangedEntity(e) {
    this._itemChanged(e, this._subElementEditorEntity, "customization");
  }
  _renderSubElementEditorDomain() {
    return this._renderSubElementEditor(
      "domain",
      this._goBackDomain,
      this._itemChangedDomain
    );
  }
  _renderSubElementEditorEntity() {
    return this._renderSubElementEditor(
      "entity",
      this._goBackEntity,
      this._itemChangedEntity
    );
  }
  _goBackDomain() {
    this._subElementEditorDomain = void 0;
  }
  _goBackEntity() {
    this._subElementEditorEntity = void 0;
  }
  _renderSubElementEditor(e, t, i) {
    var c, r, l, d, u;
    const s = `_subElementEditor${e.charAt(0).toUpperCase() + e.slice(1)}`, o = this[s], n = ((l = (r = (c = this._config) == null ? void 0 : c.customization) == null ? void 0 : r[(o == null ? void 0 : o.index) ?? 0]) == null ? void 0 : l.type) ?? "unknown", a = this._labelForTypePair(n);
    return b`
      <div class="header">
        <div class="back-title">
          <ha-icon-button
            slot="trigger"
            .label=${this.hass.localize("ui.common.back")}
            .path=${Ci}
            @click=${t}
          ></ha-icon-button>
          <span slot="title">${a}</span>
        </div>
      </div>
      <status-card-plus-item-editor
        .hass=${this.hass}
        .lovelace=${this.lovelace}
        .config=${((u = (d = this._config) == null ? void 0 : d.customization) == null ? void 0 : u[(o == null ? void 0 : o.index) ?? 0]) ?? {}}
        .getSchema=${e}
        .index=${(o == null ? void 0 : o.index) ?? 0}
        @config-changed=${i}
      >
      </status-card-plus-item-editor>
    `;
  }
  _customizationChanged(e, t) {
    e.stopPropagation(), !(!this._config || !this.hass) && P(this, "config-changed", {
      config: {
        ...this._config,
        customization: e.detail
      }
    });
  }
  _customizationChangedDomain(e) {
    this._customizationChanged(e, "domain");
  }
  _loadRulesetsFromConfig() {
    this.rulesets = (this._config.rulesets ?? []).map((e) => {
      var i;
      const t = Object.keys(e).filter(
        (s) => s !== "group_id" && s !== "group_icon" && s !== "group_status" && e[s] !== void 0
      ).map((s) => ({
        key: s,
        value: e[s] ?? ""
      }));
      return (t.length === 0 || ((i = t[t.length - 1]) == null ? void 0 : i.key) !== "") && t.push({ key: "", value: "" }), {
        group_id: e.group_id ?? "",
        group_icon: e.group_icon ?? "",
        group_status: e.group_status ?? "",
        rules: t
      };
    });
  }
  _saveRulesetsToConfig() {
    const e = this.rulesets.map((t) => {
      const i = t.rules.reduce((s, o) => (o.key && o.key !== "" && (s[o.key] = o.value ?? ""), s), {});
      return {
        group_id: t.group_id ?? "",
        group_icon: t.group_icon ?? "",
        group_status: t.group_status ?? "",
        ...i
      };
    });
    this._config = {
      ...this._config,
      rulesets: e
    }, P(this, "config-changed", { config: this._config });
  }
  _updateConfigFromRulesets() {
    this._saveRulesetsToConfig();
  }
  get ruleKeySelector() {
    const e = [
      [
        "area",
        this.hass.localize("ui.components.selectors.selector.types.area")
      ],
      [
        "attributes",
        this.hass.localize("ui.components.selectors.selector.types.attribute")
      ],
      [
        "device",
        this.hass.localize("ui.components.selectors.selector.types.device")
      ],
      [
        "domain",
        this.hass.localize("ui.panel.lovelace.editor.cardpicker.domain")
      ],
      [
        "entity_category",
        this.hass.localize("ui.components.category-picker.category")
      ],
      [
        "entity_id",
        this.hass.localize("ui.dialogs.entity_registry.editor.entity_id")
      ],
      ["floor", this.hass.localize("ui.components.floor-picker.floor")],
      ["group", this.hass.localize("component.group.entity_component._.name")],
      ["hidden_by", "Hidden by"],
      [
        "integration",
        this.hass.localize("ui.components.related-items.integration")
      ],
      ["label", this.hass.localize("ui.components.label-picker.label")],
      [
        "last_changed",
        this.hass.localize("ui.components.state-content-picker.last_changed")
      ],
      [
        "last_triggered",
        this.hass.localize(
          "component.automation.entity_component._.state_attributes.last_triggered.name"
        )
      ],
      [
        "last_updated",
        this.hass.localize("ui.components.state-content-picker.last_updated")
      ],
      ["device_manufacturer", "Manufacturer"],
      ["device_model", "Model"],
      ["name", this.hass.localize("ui.common.name")],
      [
        "state",
        this.hass.localize("ui.components.selectors.selector.types.state")
      ]
    ];
    return e.sort((t, i) => t[1].localeCompare(i[1], this.hass.locale.language)), {
      type: "select",
      options: e
    };
  }
  _groupFormData(e) {
    const t = {
      group_id: e.group_id,
      group_icon: e.group_icon,
      group_status: e.group_status ?? ""
    };
    return e.rules.forEach((i, s) => {
      t[`key_${s}`] = i.key, t[`value_${s}`] = i.value;
    }), t;
  }
  _groupValueChanged(e, t) {
    var o;
    const { value: i } = e.detail, s = Object.keys(i).filter((n) => n.startsWith("key_")).map((n) => {
      const a = n.split("_")[1];
      return {
        key: i[`key_${a}`] ?? "",
        value: i[`value_${a}`] ?? ""
      };
    });
    (s.length === 0 || ((o = s[s.length - 1]) == null ? void 0 : o.key) !== "") && s.push({ key: "", value: "" }), this.rulesets = this.rulesets.map(
      (n, a) => a === t ? {
        group_id: i.group_id ?? "",
        group_icon: i.group_icon ?? "",
        group_status: i.group_status ?? "",
        rules: s
      } : n
    ), this._updateConfigFromRulesets();
  }
  _groupAllEntitiesByDomain() {
    var d, u, h, f, m, y, p, _, A, $, g, v, U;
    const e = Object.values(((d = this.hass) == null ? void 0 : d.entities) || {}), t = Object.values(((u = this.hass) == null ? void 0 : u.devices) || {}), i = (h = this.hass) != null && h.areas ? Object.values(this.hass.areas) : [], s = {
      area: Array.isArray((f = this._config) == null ? void 0 : f.area) ? this._config.area : (m = this._config) != null && m.area ? [this._config.area] : [],
      floor: Array.isArray((y = this._config) == null ? void 0 : y.floor) ? this._config.floor : (p = this._config) != null && p.floor ? [this._config.floor] : [],
      label: Array.isArray((_ = this._config) == null ? void 0 : _.label) ? this._config.label : [],
      hiddenAreas: ((A = this._config) == null ? void 0 : A.hidden_areas) ?? [],
      hiddenLabels: (($ = this._config) == null ? void 0 : $.hidden_labels) ?? [],
      hiddenEntities: ((g = this._config) == null ? void 0 : g.hidden_entities) ?? []
    }, o = Ie(
      e,
      t,
      i,
      ((v = this.hass) == null ? void 0 : v.states) || {},
      s,
      yt
    ), n = Object.fromEntries(
      Object.entries(o).map(([k, S]) => [
        k,
        S.map((x) => x.entity_id)
      ])
    ), a = this._hiddenEntitiesByDomain(), c = ((U = this.hass) == null ? void 0 : U.states) || {}, r = Array.from(
      /* @__PURE__ */ new Set([...Object.keys(n), ...Object.keys(a)])
    ).filter((k) => yt.includes(k)), l = It(
      c,
      this.hass.locale.language
    );
    return r.sort((k, S) => k.localeCompare(S)).map((k) => {
      const S = /* @__PURE__ */ new Set([
        ...n[k] || [],
        ...a[k] || []
      ]);
      return { domain: k, entities: Array.from(S).sort(l) };
    });
  }
  _domainLabel(e) {
    var t, i;
    return ((i = (t = this.hass) == null ? void 0 : t.localize) == null ? void 0 : i.call(t, `component.${e}.entity_component._.name`)) || e;
  }
  _isHiddenEntity(e) {
    var i;
    const t = ((i = this._config) == null ? void 0 : i.hidden_entities) ?? [];
    return Array.isArray(t) && t.includes(e);
  }
  _getDeviceClassLabel(e, t) {
    if (!t || t === "other")
      return this.hass.localize("ui.dialogs.helper_settings.generic.other") ?? "Other";
    const i = `ui.dialogs.entity_registry.editor.device_classes.${e}.${t}`;
    return this.hass.localize(i) || t;
  }
  _groupByDeviceClass(e, t) {
    var a, c, r;
    const i = ((a = this.hass) == null ? void 0 : a.states) || {}, s = {};
    for (const l of t) {
      const d = ((r = (c = i[l]) == null ? void 0 : c.attributes) == null ? void 0 : r.device_class) || "";
      d && (s[d] || (s[d] = []), s[d].push(l));
    }
    const o = It(
      i,
      this.hass.locale.language
    );
    return Object.keys(s).sort((l, d) => l.localeCompare(d)).map((l) => ({
      deviceClass: l,
      label: this._getDeviceClassLabel(e, l),
      entities: s[l].slice().sort(o)
    }));
  }
  _hiddenEntitiesByDomain() {
    var u, h, f, m, y, p, _;
    const e = {}, t = Array.isArray((u = this._config) == null ? void 0 : u.hidden_entities) ? this._config.hidden_entities : [];
    if (t.length === 0) return e;
    const i = ((h = this.hass) == null ? void 0 : h.entities) || {}, s = ((f = this.hass) == null ? void 0 : f.devices) || {}, o = (m = this.hass) != null && m.areas ? Object.values(this.hass.areas) : [], n = (y = this._config) == null ? void 0 : y.area, a = (p = this._config) == null ? void 0 : p.floor, c = (_ = this._config) == null ? void 0 : _.label, r = n ? Array.isArray(n) ? n : [n] : [], l = a ? Array.isArray(a) ? a : [a] : [], d = c ? Array.isArray(c) ? c : [c] : [];
    for (const A of t) {
      const $ = I(A);
      if (!yt.includes($)) continue;
      const g = i[A], v = g != null && g.device_id ? s[g.device_id] : void 0;
      if (((g == null ? void 0 : g.area_id) != null || (v == null ? void 0 : v.area_id) != null) && !(d.length && !(Array.isArray(g == null ? void 0 : g.labels) && g.labels.some((S) => d.includes(S)) || Array.isArray(v == null ? void 0 : v.labels) && v.labels.some((S) => d.includes(S)))) && !(r.length && !(g != null && g.area_id && r.includes(g.area_id) || v != null && v.area_id && r.includes(v.area_id)))) {
        if (l.length) {
          const k = (g == null ? void 0 : g.area_id) && o.some(
            (x) => x.area_id === g.area_id && x.floor_id && l.includes(x.floor_id)
          ), S = (v == null ? void 0 : v.area_id) && o.some(
            (x) => x.area_id === v.area_id && x.floor_id && l.includes(x.floor_id)
          );
          if (!k && !S) continue;
        }
        e[$] || (e[$] = []), e[$].push(A);
      }
    }
    return e;
  }
  render() {
    var o, n;
    if (!this.hass || !this._config)
      return b`<div>Loading...</div>`;
    const e = this._toggleschema(this.toggleSelectOptions), t = this._schema(
      this._config.filter ?? "",
      this._config.label_filter ?? !1,
      this._config.multiple_areas ?? !1,
      this._config.multiple_floors ?? !1
    ), s = {
      content: this.possibleToggleDomains,
      ...this._config
    };
    return this._subElementEditorDomain ? this._renderSubElementEditorDomain() : this._subElementEditorEntity ? this._renderSubElementEditorEntity() : b`
      <ha-form
        .hass=${this.hass}
        .data=${s}
        .schema=${t}
        .computeLabel=${this.computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <ha-expansion-panel outlined class="main">
        <div slot="header" role="heading" aria-level="3">
          <ha-svg-icon class="secondary" .path=${Ce}></ha-svg-icon>
          ${this.hass.localize("ui.panel.lovelace.editor.card.entities.name") ?? "Entities"}
        </div>
        <div class="content">
          <ha-form
            .hass=${this.hass}
            .data=${s}
            .schema=${this._entitiesSchema(((o = this._config) == null ? void 0 : o.hide_filter) ?? "")}
            .computeLabel=${this.computeLabel}
            @value-changed=${this._valueChanged}
          ></ha-form>

          ${(((n = this._config) == null ? void 0 : n.hide_filter) ?? "") === "entity" ? b`
                ${this._groupAllEntitiesByDomain().map(
      (a) => b`
                    <ha-expansion-panel outlined class="domain-panel">
                      <div slot="header" class="domain-header">
                        <ha-icon
                          icon=${Xt(a.domain, "on")}
                        ></ha-icon>
                        <span class="domain-title"
                          >${this._domainLabel(a.domain)}</span
                        >
                      </div>
                      <div class="content">
                        ${["binary_sensor", "cover"].includes(a.domain) ? this._groupByDeviceClass(
        a.domain,
        a.entities
      ).map(
        (c) => b`
                                <ha-expansion-panel
                                  outlined
                                  class="domain-panel"
                                >
                                  <div slot="header" class="dc-header">
                                    <ha-icon
                                      icon=${Xt(
          a.domain,
          "on",
          c.deviceClass
        )}
                                    ></ha-icon>
                                    <span class="dc-title">${c.label}</span>
                                  </div>
                                  <div class="content">
                                    ${c.entities.map(
          (r) => {
            var l, d;
            return b`
                                        <div class="entity-row">
                                          <span class="entity-name">
                                            ${((d = (l = this.hass.states[r]) == null ? void 0 : l.attributes) == null ? void 0 : d.friendly_name) || r}
                                          </span>
                                          <ha-icon-button
                                            .path=${this._isHiddenEntity(r) ? Ae : Ee}
                                            .label=${this._isHiddenEntity(r) ? this.hass.localize(
              "ui.common.show"
            ) ?? "Show" : this.hass.localize(
              "ui.common.hide"
            ) ?? "Hide"}
                                            @click=${() => this._toggleEntityHidden(r)}
                                          ></ha-icon-button>
                                        </div>
                                      `;
          }
        )}
                                  </div>
                                </ha-expansion-panel>
                              `
      ) : a.entities.map(
        (c) => {
          var r, l;
          return b`
                                <div class="entity-row">
                                  <span class="entity-name">
                                    ${((l = (r = this.hass.states[c]) == null ? void 0 : r.attributes) == null ? void 0 : l.friendly_name) || c}
                                  </span>
                                  <ha-icon-button
                                    .path=${this._isHiddenEntity(c) ? Ae : Ee}
                                    .label=${this._isHiddenEntity(c) ? this.hass.localize("ui.common.show") ?? "Show" : this.hass.localize("ui.common.hide") ?? "Hide"}
                                    @click=${() => this._toggleEntityHidden(c)}
                                  ></ha-icon-button>
                                </div>
                              `;
        }
      )}
                      </div>
                    </ha-expansion-panel>
                  `
    )}
              ` : b``}
        </div>
      </ha-expansion-panel>

      <ha-expansion-panel outlined class="main">
        <div slot="header" role="heading" aria-level="3">
          <ha-svg-icon
            class="secondary"
            .path=${xi}
          ></ha-svg-icon>
          Smart Groups
        </div>
        <div class="content">
          ${this.rulesets.map(
      (a, c) => b`
              <ha-expansion-panel class="group-panel main" outlined>
                <div slot="header" class="group-header">
                  ${a.group_id ? a.group_id : `${this.hass.localize(
        "component.group.entity_component._.name"
      )} ${c + 1}`}
                  <span class="group-actions">
                    <ha-icon-button
                      slot="trigger"
                      .label=${this.hass.localize("ui.common.remove")}
                      .path=${oe}
                      @click=${() => this._removeRuleset(c)}
                    ></ha-icon-button>
                  </span>
                </div>
                <div class="content">
                  <ha-form
                    .hass=${this.hass}
                    .data=${this._groupFormData(a)}
                    .schema=${this.getGroupSchema(a)}
                    .computeLabel=${this.computeLabel}
                    @value-changed=${(r) => this._groupValueChanged(r, c)}
                  ></ha-form>
                </div>
              </ha-expansion-panel>
            `
    )}
          <div class="add-group-row">
            <ha-button raised @click=${this._addRuleset}>
              ${this.hass.localize("ui.common.add")}
            </ha-button>
          </div>
        </div>
      </ha-expansion-panel>

      <ha-expansion-panel outlined class="main">
        <div slot="header" role="heading" aria-level="3">
          <ha-svg-icon class="secondary" .path=${Ce}></ha-svg-icon>
          ${this.computeLabel.bind(this)({ name: "edit_domains_dc" })}
        </div>
        <div class="content">
          <ha-form
            .hass=${this.hass}
            .data=${s}
            .schema=${e}
            .computeLabel=${this.computeLabel}
            @value-changed=${this._valueChanged}
          ></ha-form>
          <status-items-editor
            .hass=${this.hass}
            .customization=${this._config.customization}
            .SelectOptions=${this.contentSelectOptions}
            @edit-item=${this._edit_itemDomain}
            @config-changed=${this._customizationChangedDomain}
          >
          </status-items-editor>
        </div>
      </ha-expansion-panel>
    `;
  }
  static get styles() {
    return bt`
      .secondary {
        color: var(--secondary-text-color);
      }
      .main {
        margin: 5px 0;
        --ha-card-border-radius: 6px;
        margin-top: 16px;
      }
      .content {
        margin: 10px 0px;
      }
      .title {
        font-size: 18px;
      }
      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
        gap: 0.5em;
      }
      ha-icon {
        display: flex;
      }
      .header {
        margin-bottom: 0.5em;
      }
      .group-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .group-actions {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .add-group-row {
        display: flex;
        justify-content: flex-end;
        margin-top: 8px;
      }
      .entity-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 4px 0;
      }
      .entity-name {
        flex: 1 1 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .domain-panel {
        margin-top: 6px;
      }
      .domain-header {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .domain-header ha-icon {
        --mdc-icon-size: 20px;
      }
      .dc-header {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .dc-header ha-icon {
        --mdc-icon-size: 20px;
      }
    `;
  }
};
ht([
  E({ attribute: !1 })
], st.prototype, "hass", 2);
ht([
  E({ attribute: !1 })
], st.prototype, "lovelace", 2);
ht([
  E({ type: Object })
], st.prototype, "_config", 2);
ht([
  D()
], st.prototype, "_subElementEditorDomain", 2);
ht([
  D()
], st.prototype, "_subElementEditorEntity", 2);
ht([
  D()
], st.prototype, "rulesets", 2);
st = ht([
  jt("status-card-plus-editor")
], st);
console.info(
  `%c STATUS-CARD-PLUS %c ${Fe.version} `,
  "color: steelblue; background: black; font-weight: bold;",
  "color: white ; background: dimgray; font-weight: bold;"
);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "status-card-plus",
  name: "Status Card Plus",
  preview: !0,
  description: "A custom card that displays active entities grouped by domain/device class."
});

const Ne = "v3.0.2-beta", je = {
  version: Ne
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tt = globalThis, Yt = Tt.ShadowRoot && (Tt.ShadyCSS === void 0 || Tt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Qt = Symbol(), re = /* @__PURE__ */ new WeakMap();
let ke = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== Qt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Yt && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = re.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && re.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Fe = (i) => new ke(typeof i == "string" ? i : i + "", void 0, Qt), bt = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce(((s, o, n) => s + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[n + 1]), i[0]);
  return new ke(e, i, Qt);
}, Re = (i, t) => {
  if (Yt) i.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
  else for (const e of t) {
    const s = document.createElement("style"), o = Tt.litNonce;
    o !== void 0 && s.setAttribute("nonce", o), s.textContent = e.cssText, i.appendChild(s);
  }
}, ce = Yt ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return Fe(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ue, defineProperty: Be, getOwnPropertyDescriptor: qe, getOwnPropertyNames: Ve, getOwnPropertySymbols: Ge, getPrototypeOf: Ke } = Object, ot = globalThis, le = ot.trustedTypes, We = le ? le.emptyScript : "", Bt = ot.reactiveElementPolyfillSupport, Et = (i, t) => i, Ot = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? We : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, te = (i, t) => !Ue(i, t), de = { attribute: !0, type: String, converter: Ot, reflect: !1, useDefault: !1, hasChanged: te };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), ot.litPropertyMetadata ?? (ot.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let gt = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = de) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), o = this.getPropertyDescriptor(t, s, e);
      o !== void 0 && Be(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: o, set: n } = qe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(a) {
      this[e] = a;
    } };
    return { get: o, set(a) {
      const r = o == null ? void 0 : o.call(this);
      n == null || n.call(this, a), this.requestUpdate(t, r, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? de;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Et("elementProperties"))) return;
    const t = Ke(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Et("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Et("properties"))) {
      const e = this.properties, s = [...Ve(e), ...Ge(e)];
      for (const o of s) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, o] of e) this.elementProperties.set(s, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const o = this._$Eu(e, s);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const o of s) e.unshift(ce(o));
    } else t !== void 0 && e.push(ce(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise(((e) => this.enableUpdating = e)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach(((e) => e(this)));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Re(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach(((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    }));
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach(((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    }));
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    var n;
    const s = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, s);
    if (o !== void 0 && s.reflect === !0) {
      const a = (((n = s.converter) == null ? void 0 : n.toAttribute) !== void 0 ? s.converter : Ot).toAttribute(e, s.type);
      this._$Em = t, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var n, a;
    const s = this.constructor, o = s._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const r = s.getPropertyOptions(o), c = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((n = r.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? r.converter : Ot;
      this._$Em = o;
      const l = c.fromAttribute(e, r.type);
      this[o] = l ?? ((a = this._$Ej) == null ? void 0 : a.get(o)) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    var o;
    if (t !== void 0) {
      const n = this.constructor, a = this[t];
      if (s ?? (s = n.getPropertyOptions(t)), !((s.hasChanged ?? te)(a, e) || s.useDefault && s.reflect && a === ((o = this._$Ej) == null ? void 0 : o.get(t)) && !this.hasAttribute(n._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: o, wrapped: n }, a) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, a ?? e ?? this[t]), n !== !0 || a !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
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
        const { wrapped: r } = a, c = this[n];
        r !== !0 || this._$AL.has(n) || c === void 0 || this.C(n, void 0, a, c);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach(((o) => {
        var n;
        return (n = o.hostUpdate) == null ? void 0 : n.call(o);
      })), this.update(e)) : this._$EM();
    } catch (o) {
      throw t = !1, this._$EM(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach(((s) => {
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
    this._$Eq && (this._$Eq = this._$Eq.forEach(((e) => this._$ET(e, this[e])))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
gt.elementStyles = [], gt.shadowRootOptions = { mode: "open" }, gt[Et("elementProperties")] = /* @__PURE__ */ new Map(), gt[Et("finalized")] = /* @__PURE__ */ new Map(), Bt == null || Bt({ ReactiveElement: gt }), (ot.reactiveElementVersions ?? (ot.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ct = globalThis, Mt = Ct.trustedTypes, he = Mt ? Mt.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, De = "$lit$", et = `lit$${Math.random().toFixed(9).slice(2)}$`, Te = "?" + et, Ze = `<${Te}>`, ut = document, St = () => ut.createComment(""), xt = (i) => i === null || typeof i != "object" && typeof i != "function", ee = Array.isArray, Je = (i) => ee(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", qt = `[ 	
\f\r]`, wt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ue = /-->/g, me = />/g, ct = RegExp(`>|${qt}(?:([^\\s"'>=/]+)(${qt}*=${qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), fe = /'/g, pe = /"/g, Le = /^(?:script|style|textarea|title)$/i, Xe = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), $ = Xe(1), X = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), _e = /* @__PURE__ */ new WeakMap(), dt = ut.createTreeWalker(ut, 129);
function Oe(i, t) {
  if (!ee(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return he !== void 0 ? he.createHTML(t) : t;
}
const Ye = (i, t) => {
  const e = i.length - 1, s = [];
  let o, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = wt;
  for (let r = 0; r < e; r++) {
    const c = i[r];
    let l, d, h = -1, u = 0;
    for (; u < c.length && (a.lastIndex = u, d = a.exec(c), d !== null); ) u = a.lastIndex, a === wt ? d[1] === "!--" ? a = ue : d[1] !== void 0 ? a = me : d[2] !== void 0 ? (Le.test(d[2]) && (o = RegExp("</" + d[2], "g")), a = ct) : d[3] !== void 0 && (a = ct) : a === ct ? d[0] === ">" ? (a = o ?? wt, h = -1) : d[1] === void 0 ? h = -2 : (h = a.lastIndex - d[2].length, l = d[1], a = d[3] === void 0 ? ct : d[3] === '"' ? pe : fe) : a === pe || a === fe ? a = ct : a === ue || a === me ? a = wt : (a = ct, o = void 0);
    const m = a === ct && i[r + 1].startsWith("/>") ? " " : "";
    n += a === wt ? c + Ze : h >= 0 ? (s.push(l), c.slice(0, h) + De + c.slice(h) + et + m) : c + et + (h === -2 ? r : m);
  }
  return [Oe(i, n + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class zt {
  constructor({ strings: t, _$litType$: e }, s) {
    let o;
    this.parts = [];
    let n = 0, a = 0;
    const r = t.length - 1, c = this.parts, [l, d] = Ye(t, e);
    if (this.el = zt.createElement(l, s), dt.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (o = dt.nextNode()) !== null && c.length < r; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const h of o.getAttributeNames()) if (h.endsWith(De)) {
          const u = d[a++], m = o.getAttribute(h).split(et), f = /([.?@])?(.*)/.exec(u);
          c.push({ type: 1, index: n, name: f[2], strings: m, ctor: f[1] === "." ? ti : f[1] === "?" ? ei : f[1] === "@" ? ii : It }), o.removeAttribute(h);
        } else h.startsWith(et) && (c.push({ type: 6, index: n }), o.removeAttribute(h));
        if (Le.test(o.tagName)) {
          const h = o.textContent.split(et), u = h.length - 1;
          if (u > 0) {
            o.textContent = Mt ? Mt.emptyScript : "";
            for (let m = 0; m < u; m++) o.append(h[m], St()), dt.nextNode(), c.push({ type: 2, index: ++n });
            o.append(h[u], St());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Te) c.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = o.data.indexOf(et, h + 1)) !== -1; ) c.push({ type: 7, index: n }), h += et.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const s = ut.createElement("template");
    return s.innerHTML = t, s;
  }
}
function vt(i, t, e = i, s) {
  var a, r;
  if (t === X) return t;
  let o = s !== void 0 ? (a = e._$Co) == null ? void 0 : a[s] : e._$Cl;
  const n = xt(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== n && ((r = o == null ? void 0 : o._$AO) == null || r.call(o, !1), n === void 0 ? o = void 0 : (o = new n(i), o._$AT(i, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = o : e._$Cl = o), o !== void 0 && (t = vt(i, o._$AS(i, t.values), o, s)), t;
}
let Qe = class {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? ut).importNode(e, !0);
    dt.currentNode = o;
    let n = dt.nextNode(), a = 0, r = 0, c = s[0];
    for (; c !== void 0; ) {
      if (a === c.index) {
        let l;
        c.type === 2 ? l = new $t(n, n.nextSibling, this, t) : c.type === 1 ? l = new c.ctor(n, c.name, c.strings, this, t) : c.type === 6 && (l = new si(n, this, t)), this._$AV.push(l), c = s[++r];
      }
      a !== (c == null ? void 0 : c.index) && (n = dt.nextNode(), a++);
    }
    return dt.currentNode = ut, o;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
};
class $t {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, o) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = vt(this, t, e), xt(t) ? t === T || t == null || t === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== X && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Je(t) ? this.k(t) : this._(t);
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
    const { values: e, _$litType$: s } = t, o = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = zt.createElement(Oe(s.h, s.h[0]), this.options)), s);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === o) this._$AH.p(e);
    else {
      const a = new Qe(o, this), r = a.u(this.options);
      a.p(e), this.T(r), this._$AH = a;
    }
  }
  _$AC(t) {
    let e = _e.get(t.strings);
    return e === void 0 && _e.set(t.strings, e = new zt(t)), e;
  }
  k(t) {
    ee(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, o = 0;
    for (const n of t) o === e.length ? e.push(s = new $t(this.O(St()), this.O(St()), this, this.options)) : s = e[o], s._$AI(n), o++;
    o < e.length && (this._$AR(s && s._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t !== this._$AB; ) {
      const o = t.nextSibling;
      t.remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class It {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, o, n) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = T;
  }
  _$AI(t, e = this, s, o) {
    const n = this.strings;
    let a = !1;
    if (n === void 0) t = vt(this, t, e, 0), a = !xt(t) || t !== this._$AH && t !== X, a && (this._$AH = t);
    else {
      const r = t;
      let c, l;
      for (t = n[0], c = 0; c < n.length - 1; c++) l = vt(this, r[s + c], e, c), l === X && (l = this._$AH[c]), a || (a = !xt(l) || l !== this._$AH[c]), l === T ? t = T : t !== T && (t += (l ?? "") + n[c + 1]), this._$AH[c] = l;
    }
    a && !o && this.j(t);
  }
  j(t) {
    t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ti extends It {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === T ? void 0 : t;
  }
}
class ei extends It {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== T);
  }
}
class ii extends It {
  constructor(t, e, s, o, n) {
    super(t, e, s, o, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = vt(this, t, e, 0) ?? T) === X) return;
    const s = this._$AH, o = t === T && s !== T || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== T && (s === T || o);
    o && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class si {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    vt(this, t);
  }
}
const oi = { I: $t }, Vt = Ct.litHtmlPolyfillSupport;
Vt == null || Vt(zt, $t), (Ct.litHtmlVersions ?? (Ct.litHtmlVersions = [])).push("3.3.1");
const ni = (i, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = s._$litPart$;
  if (o === void 0) {
    const n = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = o = new $t(t.insertBefore(St(), n), n, void 0, e ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = globalThis;
let J = class extends gt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ni(e, this.renderRoot, this.renderOptions);
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
    return X;
  }
};
var ze;
J._$litElement$ = !0, J.finalized = !0, (ze = ht.litElementHydrateSupport) == null || ze.call(ht, { LitElement: J });
const Gt = ht.litElementPolyfillSupport;
Gt == null || Gt({ LitElement: J });
(ht.litElementVersions ?? (ht.litElementVersions = [])).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt = (i) => (t, e) => {
  e !== void 0 ? e.addInitializer((() => {
    customElements.define(i, t);
  })) : customElements.define(i, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ai = { attribute: !0, type: String, converter: Ot, reflect: !1, hasChanged: te }, ri = (i = ai, t, e) => {
  const { kind: s, metadata: o } = e;
  let n = globalThis.litPropertyMetadata.get(o);
  if (n === void 0 && globalThis.litPropertyMetadata.set(o, n = /* @__PURE__ */ new Map()), s === "setter" && ((i = Object.create(i)).wrapped = !0), n.set(e.name, i), s === "accessor") {
    const { name: a } = e;
    return { set(r) {
      const c = t.get.call(this);
      t.set.call(this, r), this.requestUpdate(a, c, i);
    }, init(r) {
      return r !== void 0 && this.C(a, void 0, i, r), r;
    } };
  }
  if (s === "setter") {
    const { name: a } = e;
    return function(r) {
      const c = this[a];
      t.call(this, r), this.requestUpdate(a, c, i);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function C(i) {
  return (t, e) => typeof e == "object" ? ri(i, t, e) : ((s, o, n) => {
    const a = o.hasOwnProperty(n);
    return o.constructor.createProperty(n, s), a ? Object.getOwnPropertyDescriptor(o, n) : void 0;
  })(i, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function D(i) {
  return C({ ...i, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = { ATTRIBUTE: 1, CHILD: 2 }, jt = (i) => (...t) => ({ _$litDirective$: i, values: t });
let Ft = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, s) {
    this._$Ct = t, this._$AM = e, this._$Ci = s;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: ci } = oi, ge = () => document.createComment(""), At = (i, t, e) => {
  var n;
  const s = i._$AA.parentNode, o = t === void 0 ? i._$AB : t._$AA;
  if (e === void 0) {
    const a = s.insertBefore(ge(), o), r = s.insertBefore(ge(), o);
    e = new ci(a, r, i, i.options);
  } else {
    const a = e._$AB.nextSibling, r = e._$AM, c = r !== i;
    if (c) {
      let l;
      (n = e._$AQ) == null || n.call(e, i), e._$AM = i, e._$AP !== void 0 && (l = i._$AU) !== r._$AU && e._$AP(l);
    }
    if (a !== o || c) {
      let l = e._$AA;
      for (; l !== a; ) {
        const d = l.nextSibling;
        s.insertBefore(l, o), l = d;
      }
    }
  }
  return e;
}, lt = (i, t, e = i) => (i._$AI(t, e), i), li = {}, di = (i, t = li) => i._$AH = t, hi = (i) => i._$AH, Kt = (i) => {
  i._$AR(), i._$AA.remove();
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ye = (i, t, e) => {
  const s = /* @__PURE__ */ new Map();
  for (let o = t; o <= e; o++) s.set(i[o], o);
  return s;
}, it = jt(class extends Ft {
  constructor(i) {
    if (super(i), i.type !== ie.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(i, t, e) {
    let s;
    e === void 0 ? e = t : t !== void 0 && (s = t);
    const o = [], n = [];
    let a = 0;
    for (const r of i) o[a] = s ? s(r, a) : a, n[a] = e(r, a), a++;
    return { values: n, keys: o };
  }
  render(i, t, e) {
    return this.dt(i, t, e).values;
  }
  update(i, [t, e, s]) {
    const o = hi(i), { values: n, keys: a } = this.dt(t, e, s);
    if (!Array.isArray(o)) return this.ut = a, n;
    const r = this.ut ?? (this.ut = []), c = [];
    let l, d, h = 0, u = o.length - 1, m = 0, f = n.length - 1;
    for (; h <= u && m <= f; ) if (o[h] === null) h++;
    else if (o[u] === null) u--;
    else if (r[h] === a[m]) c[m] = lt(o[h], n[m]), h++, m++;
    else if (r[u] === a[f]) c[f] = lt(o[u], n[f]), u--, f--;
    else if (r[h] === a[f]) c[f] = lt(o[h], n[f]), At(i, c[f + 1], o[h]), h++, f--;
    else if (r[u] === a[m]) c[m] = lt(o[u], n[m]), At(i, o[h], o[u]), u--, m++;
    else if (l === void 0 && (l = ye(a, m, f), d = ye(r, h, u)), l.has(r[h])) if (l.has(r[u])) {
      const b = d.get(a[m]), p = b !== void 0 ? o[b] : null;
      if (p === null) {
        const _ = At(i, o[h]);
        lt(_, n[m]), c[m] = _;
      } else c[m] = lt(p, n[m]), At(i, o[h], p), o[b] = null;
      m++;
    } else Kt(o[u]), u--;
    else Kt(o[h]), h++;
    for (; m <= f; ) {
      const b = At(i, c[f + 1]);
      lt(b, n[m]), c[m++] = b;
    }
    for (; h <= u; ) {
      const b = o[h++];
      b !== null && Kt(b);
    }
    return this.ut = a, di(i, c), X;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt = jt(class extends Ft {
  constructor(i) {
    var t;
    if (super(i), i.type !== ie.ATTRIBUTE || i.name !== "class" || ((t = i.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return " " + Object.keys(i).filter(((t) => i[t])).join(" ") + " ";
  }
  update(i, [t]) {
    var s, o;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), i.strings !== void 0 && (this.nt = new Set(i.strings.join(" ").split(/\s/).filter(((n) => n !== ""))));
      for (const n in t) t[n] && !((s = this.nt) != null && s.has(n)) && this.st.add(n);
      return this.render(t);
    }
    const e = i.element.classList;
    for (const n of this.st) n in t || (e.remove(n), this.st.delete(n));
    for (const n in t) {
      const a = !!t[n];
      a === this.st.has(n) || (o = this.nt) != null && o.has(n) || (a ? (e.add(n), this.st.add(n)) : (e.remove(n), this.st.delete(n)));
    }
    return X;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Me = "important", ui = " !" + Me, Q = jt(class extends Ft {
  constructor(i) {
    var t;
    if (super(i), i.type !== ie.ATTRIBUTE || i.name !== "style" || ((t = i.strings) == null ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return Object.keys(i).reduce(((t, e) => {
      const s = i[e];
      return s == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
    }), "");
  }
  update(i, [t]) {
    const { style: e } = i.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const s of this.ft) t[s] == null && (this.ft.delete(s), s.includes("-") ? e.removeProperty(s) : e[s] = null);
    for (const s in t) {
      const o = t[s];
      if (o != null) {
        this.ft.add(s);
        const n = typeof o == "string" && o.endsWith(ui);
        s.includes("-") || n ? e.setProperty(s, n ? o.slice(0, -11) : o, n ? Me : "") : e[s] = o;
      }
    }
    return X;
  }
});
var ve = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function mi(i, t) {
  return !!(i === t || ve(i) && ve(t));
}
function fi(i, t) {
  if (i.length !== t.length)
    return !1;
  for (var e = 0; e < i.length; e++)
    if (!mi(i[e], t[e]))
      return !1;
  return !0;
}
function E(i, t) {
  t === void 0 && (t = fi);
  var e = null;
  function s() {
    for (var o = [], n = 0; n < arguments.length; n++)
      o[n] = arguments[n];
    if (e && e.lastThis === this && t(o, e.lastArgs))
      return e.lastResult;
    var a = i.apply(this, o);
    return e = {
      lastResult: a,
      lastArgs: o,
      lastThis: this
    }, a;
  }
  return s.clear = function() {
    e = null;
  }, s;
}
var pi = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", se = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", _i = "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z", be = "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z", $e = "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z", gi = "M17 14V17H14V19H17V22H19V19H22V17H19V14M20 11V12.3C19.4 12.1 18.7 12 18 12C16.8 12 15.6 12.4 14.7 13H7V11H20M12.1 17H7V15H12.8C12.5 15.6 12.2 16.3 12.1 17M7 7H20V9H7V7M5 19H7V21H3V3H7V5H5V19Z", yi = "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z", vi = "M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z", we = "M10 19.11L12.11 17H7V15H14V15.12L16.12 13H7V11H17V12.12L18.24 10.89C18.72 10.41 19.35 10.14 20.04 10.14C20.37 10.14 20.7 10.21 21 10.33V5C21 3.89 20.1 3 19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H10V19.11M7 7H17V9H7V7M21.7 14.35L20.7 15.35L18.65 13.3L19.65 12.3C19.86 12.09 20.21 12.09 20.42 12.3L21.7 13.58C21.91 13.79 21.91 14.14 21.7 14.35M12 19.94L18.06 13.88L20.11 15.93L14.06 22H12V19.94Z", bi = "M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z";
const Zt = [
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
], $i = (i, t, e, s, o) => {
  var h, u, m, f, b;
  const n = e || (t == null ? void 0 : t.theme), a = (t == null ? void 0 : t.darkMode) || !1;
  i.__themes || (i.__themes = { cacheKey: null, keys: /* @__PURE__ */ new Set() });
  let r = n || "", c = {};
  if (n === "default" && ((h = i.__themes) == null ? void 0 : h.cacheKey) === "default")
    return;
  if (n && n !== "default" && ((u = t == null ? void 0 : t.themes) != null && u[n])) {
    const { modes: p, ..._ } = t.themes[n] || {};
    c = { ...c, ..._ }, p && (a && p.dark ? c = { ...c, ...p.dark } : !a && p.light && (c = { ...c, ...p.light }));
  } else if (!n && (!((m = i.__themes) != null && m.keys) || i.__themes.keys.size === 0))
    return;
  const l = ((f = i.__themes) == null ? void 0 : f.keys) || /* @__PURE__ */ new Set(), d = new Set(Object.keys(c));
  if (n === "default" && d.size === 0) {
    for (const p of l)
      try {
        i.style.removeProperty(`--${p}`);
      } catch {
      }
    i.__themes = { cacheKey: "default", keys: /* @__PURE__ */ new Set() };
    return;
  }
  if (((b = i.__themes) == null ? void 0 : b.cacheKey) === r) {
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
        i.style.removeProperty(`--${p}`);
      } catch {
      }
  for (const [p, _] of Object.entries(c))
    i.style.setProperty(`--${p}`, String(_));
  i.__themes.cacheKey = r || null, i.__themes.keys = d;
}, M = (i, t, e, s) => {
  s = s || {}, e = e ?? {};
  const o = new Event(t, {
    bubbles: s.bubbles === void 0 ? !0 : s.bubbles,
    cancelable: !!s.cancelable,
    composed: s.composed === void 0 ? !0 : s.composed
  });
  return o.detail = e, i.dispatchEvent(o), o;
}, U = (i) => i.substr(0, i.indexOf("."));
var yt = /* @__PURE__ */ ((i) => (i.language = "language", i.system = "system", i.comma_decimal = "comma_decimal", i.decimal_comma = "decimal_comma", i.space_comma = "space_comma", i.none = "none", i))(yt || {});
const wi = (i, t = 2) => Math.round(i * 10 ** t) / 10 ** t, Ai = (i) => {
  switch (i.number_format) {
    case yt.comma_decimal:
      return ["en-US", "en"];
    // Use United States with fallback to English formatting 1,234,567.89
    case yt.decimal_comma:
      return ["de", "es", "it"];
    // Use German with fallback to Spanish then Italian formatting 1.234.567,89
    case yt.space_comma:
      return ["fr", "sv", "cs"];
    // Use French with fallback to Swedish and Czech formatting 1 234 567,89
    case yt.system:
      return;
    default:
      return i.language;
  }
}, Ae = (i, t, e) => {
  const s = t ? Ai(t) : void 0;
  if (Number.isNaN = Number.isNaN || function o(n) {
    return typeof n == "number" && o(n);
  }, (t == null ? void 0 : t.number_format) !== yt.none && !Number.isNaN(Number(i)) && Intl)
    try {
      return new Intl.NumberFormat(
        s,
        Ee(i, e)
      ).format(Number(i));
    } catch (o) {
      return console.error(o), new Intl.NumberFormat(
        void 0,
        Ee(i, e)
      ).format(Number(i));
    }
  return typeof i == "string" ? i : `${wi(i, e == null ? void 0 : e.maximumFractionDigits).toString()}`;
}, Ee = (i, t) => {
  const e = {
    maximumFractionDigits: 2,
    ...t
  };
  if (typeof i != "string")
    return e;
  {
    const s = i.indexOf(".") > -1 ? i.split(".")[1].length : 0;
    e.minimumFractionDigits = s, e.maximumFractionDigits = s;
  }
  return e;
};
E(
  (i) => new Intl.Collator(i)
);
const Ei = E(
  (i) => new Intl.Collator(i, { sensitivity: "accent" })
), Ci = (i, t) => i < t ? -1 : i > t ? 1 : 0, He = (i, t, e = void 0) => Intl != null && Intl.Collator ? Ei(e).compare(i, t) : Ci(i.toLowerCase(), t.toLowerCase());
E(
  (i) => {
    const t = {};
    for (const e of i)
      t[e.entity_id] = e;
    return t;
  }
);
E(
  (i) => {
    const t = {};
    for (const e of i)
      t[e.id] = e;
    return t;
  }
);
const Lt = (i, t) => {
  if (i === t)
    return !0;
  if (i && t && typeof i == "object" && typeof t == "object") {
    if (i.constructor !== t.constructor)
      return !1;
    let e, s;
    if (Array.isArray(i)) {
      if (s = i.length, s !== t.length)
        return !1;
      for (e = s; e-- !== 0; )
        if (!Lt(i[e], t[e]))
          return !1;
      return !0;
    }
    if (i instanceof Map && t instanceof Map) {
      if (i.size !== t.size)
        return !1;
      for (e of i.entries())
        if (!t.has(e[0]))
          return !1;
      for (e of i.entries())
        if (!Lt(e[1], t.get(e[0])))
          return !1;
      return !0;
    }
    if (i instanceof Set && t instanceof Set) {
      if (i.size !== t.size)
        return !1;
      for (e of i.entries())
        if (!t.has(e[0]))
          return !1;
      return !0;
    }
    if (ArrayBuffer.isView(i) && ArrayBuffer.isView(t)) {
      if (s = i.length, s !== t.length)
        return !1;
      for (e = s; e-- !== 0; )
        if (i[e] !== t[e])
          return !1;
      return !0;
    }
    if (i.constructor === RegExp)
      return i.source === t.source && i.flags === t.flags;
    if (i.valueOf !== Object.prototype.valueOf)
      return i.valueOf() === t.valueOf();
    if (i.toString !== Object.prototype.toString)
      return i.toString() === t.toString();
    const o = Object.keys(i);
    if (s = o.length, s !== Object.keys(t).length)
      return !1;
    for (e = s; e-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[e]))
        return !1;
    for (e = s; e-- !== 0; ) {
      const n = o[e];
      if (!Lt(i[n], t[n]))
        return !1;
    }
    return !0;
  }
  return i !== i && t !== t;
};
class Si extends HTMLElement {
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
  bind(t, e = {}) {
    t.actionHandler && Lt(e, t.actionHandler.options) || (t.actionHandler && (t.removeEventListener("touchstart", t.actionHandler.start), t.removeEventListener("touchend", t.actionHandler.end), t.removeEventListener("touchcancel", t.actionHandler.end), t.removeEventListener("mousedown", t.actionHandler.start), t.removeEventListener("click", t.actionHandler.end), t.removeEventListener(
      "keydown",
      t.actionHandler.handleKeyDown
    )), t.actionHandler = { options: e }, !e.disabled && (t.actionHandler.start = (s) => {
      this.cancelled = !1, s.touches ? (s.touches[0].clientX, s.touches[0].clientY) : (s.clientX, s.clientY), e.hasHold && (this.held = !1, this.timer = window.setTimeout(() => {
        this.held = !0;
      }, this.holdTime));
    }, t.actionHandler.end = (s) => {
      if (s.currentTarget !== s.target || s.type === "touchcancel" || s.type === "touchend" && this.cancelled)
        return;
      const o = s.target;
      s.cancelable && s.preventDefault(), e.hasHold && (clearTimeout(this.timer), this.timer = void 0), e.hasHold && this.held ? M(o, "action", { action: "hold" }) : e.hasDoubleClick ? s.type === "click" && s.detail < 2 || !this.dblClickTimeout ? this.dblClickTimeout = window.setTimeout(() => {
        this.dblClickTimeout = void 0, M(o, "action", { action: "tap" });
      }, 250) : (clearTimeout(this.dblClickTimeout), this.dblClickTimeout = void 0, M(o, "action", { action: "double_tap" })) : M(o, "action", { action: "tap" });
    }, t.actionHandler.handleKeyDown = (s) => {
      ["Enter", " "].includes(s.key) && s.currentTarget.actionHandler.end(s);
    }, t.addEventListener("touchstart", t.actionHandler.start, {
      passive: !0
    }), t.addEventListener("touchend", t.actionHandler.end), t.addEventListener("touchcancel", t.actionHandler.end), t.addEventListener("mousedown", t.actionHandler.start, {
      passive: !0
    }), t.addEventListener("click", t.actionHandler.end), t.addEventListener("keydown", t.actionHandler.handleKeyDown)));
  }
}
customElements.define("action-handler-status-card", Si);
const xi = () => {
  const i = document.body;
  if (i.querySelector("action-handler-status-card"))
    return i.querySelector(
      "action-handler-status-card"
    );
  const t = document.createElement("action-handler-status-card");
  return i.appendChild(t), t;
}, zi = (i, t) => {
  const e = xi();
  e && e.bind(i, t);
}, Dt = jt(
  class extends Ft {
    update(i, [t]) {
      return zi(i.element, t), X;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(i) {
    }
  }
), ki = async (i, t, e, s) => {
  M(i, "hass-action", { config: e, action: s });
};
function _t(i) {
  return i !== void 0 && i.action !== "none";
}
var Ce, Se;
(function(i) {
  i.language = "language", i.system = "system", i.comma_decimal = "comma_decimal", i.decimal_comma = "decimal_comma", i.space_comma = "space_comma", i.none = "none";
})(Ce || (Ce = {})), (function(i) {
  i.language = "language", i.system = "system", i.am_pm = "12", i.twenty_four = "24";
})(Se || (Se = {}));
const st = {
  alarm_control_panel: { on: "mdi:alarm-light", off: "mdi:alarm-light-off" },
  siren: { on: "mdi:bell-ring", off: "mdi:bell_off" },
  lock: { on: "mdi:lock-open", off: "mdi:lock" },
  light: { on: "mdi:lightbulb", off: "mdi:lightbulb-off" },
  media_player: { on: "mdi:cast", off: "mdi:cast-off" },
  climate: { on: "mdi:thermostat", off: "mdi:thermostat-cog" },
  humidifier: { on: "mdi:air-humidifier", off: "mdi:air-humidifier-off" },
  switch: {
    on: "mdi:toggle-switch",
    off: "mdi:toggle-switch-off",
    switch: { on: "mdi:toggle-switch", off: "mdi:toggle-switch-off" },
    outlet: { on: "mdi:power-plug", off: "mdi:power-plug-off" }
  },
  vacuum: { on: "mdi:robot-vacuum", off: "mdi:robot-vacuum-off" },
  lawn_mower: { on: "robot-mower", off: "mdi:robot-mower" },
  fan: { on: "mdi:fan", off: "mdi:fan-off" },
  cover: {
    on: "mdi:garage-open",
    off: "mdi:garage",
    garage: { on: "mdi:garage-open", off: "mdi:garage" },
    door: { on: "mdi:door-open", off: "mdi:door-closed" },
    gate: { on: "mdi:gate-open", off: "mdi:gate" },
    blind: { on: "mdi:blinds-open", off: "mdi:blinds" },
    curtain: { on: "mdi:curtains", off: "mdi:curtains-closed" },
    damper: { on: "mdi:valve-open", off: "mdi:valve-closed" },
    awning: { on: "mdi:awning-outline", off: "mdi:awning-outline" },
    shutter: { on: "mdi:window-shutter-open", off: "mdi:window-shutter" },
    shade: { on: "mdi:roller-shade", off: "mdi:roller-shade-closed" },
    window: { on: "mdi:window-open", off: "mdi:window-closed" }
  },
  binary_sensor: {
    on: "mdi:power-off",
    off: "mdi:power-off",
    motion: { on: "mdi:motion-sensor", off: "mdi:motion-sensor-off" },
    moisture: { on: "mdi:water-alert", off: "mdi:water-off" },
    window: { on: "mdi:window-open", off: "mdi:window-closed" },
    door: { on: "mdi:door-open", off: "mdi:door-closed" },
    lock: { on: "mdi:lock-open", off: "mdi:lock" },
    presence: { on: "mdi:home-outline", off: "mdi:home-export-outline" },
    occupancy: { on: "mdi:seat", off: "mdi:seat-outline" },
    vibration: { on: "mdi:vibrate", off: "mdi:vibrate-off" },
    opening: { on: "mdi:shield-lock-open", off: "mdi:shield-lock" },
    garage_door: { on: "mdi:garage-open", off: "mdi:garage" },
    problem: {
      on: "mdi:alert-circle-outline",
      off: "mdi:alert-circle-check-outline"
    },
    smoke: {
      on: "mdi:smoke-detector-outline",
      off: "mdi:smoke-detector-off-outline"
    },
    running: { on: "mdi:play", off: "mdi:pause" },
    plug: { on: "mdi:power-plug", off: "mdi:power-plug-off" },
    power: { on: "mdi:power", off: "mdi:power-off" },
    battery: { on: "mdi:battery-alert", off: "mdi:battery" },
    battery_charging: { on: "mdi:battery-charging", off: "mdi:battery-check" },
    gas: { on: "mdi:gas-station-outline", off: "mdi:gas-station-off-outline" },
    carbon_monoxide: { on: "mdi:molecule-co", off: "mdi:molecule-co" },
    cold: { on: "mdi:snowflake", off: "mdi:snowflake-off" },
    heat: { on: "mdi:weather-sunny", off: "mdi:weather-sunny-off" },
    connectivity: { on: "mdi:connection", off: "mdi:connection" },
    safety: { on: "mdi:shield-alert-outline", off: "mdi:shield-check-outline" },
    sound: { on: "mdi:volume-high", off: "mdi:volume-off" },
    update: { on: "mdi:autorenew", off: "mdi:autorenew-off" },
    tamper: { on: "mdi:shield-home", off: "mdi:shield-home" },
    light: { on: "mdi:lightbulb-outline", off: "mdi:lightbulb-off-outline" },
    moving: { on: "mdi:car", off: "mdi:car-off" }
  },
  person: { on: "mdi:account", off: "mdi:account-off" },
  device_tracker: { on: "mdi:account", off: "mdi:account-off" },
  valve: { on: "mdi:valve", off: "mdi:valve-closed" },
  water_heater: { on: "mdi:water-boiler", off: "mdi:water-pump-off" },
  remote: { on: "mdi:remote", off: "mdi:remote-off" },
  update: { on: "mdi:autorenew", off: "mdi:autorenew-off" },
  air_quality: { on: "mdi:air-filter", off: "mdi:air-filter" },
  camera: { on: "mdi:camera", off: "mdi:camera-off" },
  calendar: { on: "mdi:calendar", off: "mdi:calendar-remove" },
  scene: { on: "mdi:movie", off: "mdi:movie-off" },
  notifications: { on: "mdi:bell", off: "mdi:bell-off" },
  sensor: { on: "mdi:gauge", off: "mdi:gauge" },
  script: { on: "mdi:script-text", off: "mdi:script-text" },
  tags: { on: "mdi:tag-multiple", off: "mdi:tag-multiple" },
  select: { on: "mdi:format-list-bulleted", off: "mdi:format-list-bulleted" },
  automation: { on: "mdi:robot", off: "mdi:robot-off" },
  button: { on: "mdi:gesture-tap-button", off: "mdi:gesture-tap-button" },
  number: { on: "mdi:numeric", off: "mdi:numeric" },
  conversation: { on: "mdi:comment-multiple", off: "mdi:comment-multiple" },
  assist_satellite: {
    on: "mdi:satellite-variant",
    off: "mdi:satellite-variant"
  },
  counter: { on: "mdi:counter", off: "mdi:counter" },
  event: { on: "mdi:calendar-star", off: "mdi:calendar-star" },
  group: {
    on: "mdi:google-circles-communities",
    off: "mdi:google-circles-communities"
  },
  image: { on: "mdi:image", off: "mdi:image-off" },
  image_processing: {
    on: "mdi:image-filter-center-focus",
    off: "mdi:image-filter-center-focus"
  },
  input_boolean: { on: "mdi:toggle-switch", off: "mdi:toggle-switch-off" },
  input_datetime: { on: "mdi:calendar-clock", off: "mdi:calendar-clock" },
  input_number: { on: "mdi:numeric", off: "mdi:numeric" },
  input_select: {
    on: "mdi:format-list-bulleted",
    off: "mdi:format-list-bulleted"
  },
  input_text: { on: "mdi:text-box", off: "mdi:text-box" },
  stt: { on: "mdi:record-rec", off: "mdi:record" },
  sun: { on: "mdi:weather-sunny", off: "mdi:weather-night" },
  text: { on: "mdi:text-box", off: "mdi:text-box" },
  date: { on: "mdi:calendar", off: "mdi:calendar-remove" },
  datetime: { on: "mdi:calendar-clock", off: "mdi:calendar-clock" },
  time: { on: "mdi:clock-outline", off: "mdi:clock-off" },
  timer: { on: "mdi:timer-outline", off: "mdi:timer-off" },
  todo: {
    on: "mdi:check-circle-outline",
    off: "mdi:checkbox-blank-circle-outline"
  },
  tts: { on: "mdi:volume-high", off: "mdi:volume-off" },
  wake_word: { on: "mdi:microphone", off: "mdi:microphone-off" },
  weather: { on: "mdi:weather-partly-cloudy", off: "mdi:weather-night" },
  zone: { on: "mdi:map-marker", off: "mdi:map-marker-off" },
  geo_location: { on: "mdi:map-marker", off: "mdi:map-marker-off" }
}, N = [
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
], Jt = {
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
};
function Pe(i, t, e, s, o, n) {
  const a = o.area && o.area.length ? o.area : null, r = o.floor && o.floor.length ? o.floor : null, c = o.label && o.label.length ? o.label : null, l = o.hiddenAreas || [], d = o.hiddenLabels || [], h = o.hiddenEntities || [], u = new Set(l), m = new Set(d), f = new Set(h), b = new Map(t.map((v) => [v.id, v])), p = new Map(
    e.map((v) => [v.area_id, v.floor_id])
  ), _ = i.filter((v) => {
    var k, S, x;
    const g = v.entity_id.split(".")[0];
    if (!n.includes(g)) return !1;
    if (g === "update")
      return !v.hidden_by && !v.disabled_by;
    const y = v.device_id ? b.get(v.device_id) : void 0;
    if (!(v.area_id != null || y && y.area_id != null) || c && !((((k = v.labels) == null ? void 0 : k.some((G) => c.includes(G))) ?? !1) || (((S = y == null ? void 0 : y.labels) == null ? void 0 : S.some((G) => c.includes(G))) ?? !1)) || a && !(v.area_id !== void 0 && v.area_id !== null && a.includes(v.area_id) || y && y.area_id !== void 0 && y.area_id !== null && a.includes(y.area_id)))
      return !1;
    if (r) {
      const O = v.area_id ? p.get(v.area_id) : void 0, G = y != null && y.area_id ? p.get(y.area_id) : void 0;
      if (!(O && r.includes(O) || G && r.includes(G))) return !1;
    }
    return u.size && (v.area_id && u.has(v.area_id) || y && y.area_id && u.has(y.area_id)) || (x = v.labels) != null && x.some((O) => m.has(O)) || f.has(v.entity_id) ? !1 : !v.hidden_by && !v.disabled_by;
  }).map((v) => v.entity_id), A = {};
  for (const v of _) {
    const g = v.split(".")[0], y = s[v];
    y && (A[g] || (A[g] = [])).push(y);
  }
  return A;
}
function q(i) {
  return i.split("_").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
}
function R(i, t) {
  return t ? `${i}.${t}` : i;
}
function xe(i, t) {
  var e, s;
  return ((s = (e = i == null ? void 0 : i[t]) == null ? void 0 : e.attributes) == null ? void 0 : s.friendly_name) || t;
}
function Ht(i, t) {
  return (e, s) => He(
    xe(i, e),
    xe(i, s),
    t
  );
}
function tt(i, t) {
  if (i === t) return !0;
  if (!Array.isArray(i) || !Array.isArray(t) || i.length !== t.length) return !1;
  const e = new Set(t);
  for (const s of i)
    if (!e.has(s)) return !1;
  return !0;
}
function F(i, t, e) {
  return i.localize(
    `component.${e}.entity_component._.state.${t}`
  ) || t;
}
function Rt(i, t, e, s) {
  if (/^key_\d+$/.test(t.name))
    return i.localize("ui.components.related-filter-menu.filter") || "Filter";
  switch (t.name) {
    case "header":
      return e && s ? e === "switch" && s === "switch" ? `${i.localize(
        "ui.panel.lovelace.editor.card.entities.name"
      )} in ${i.localize("component.switch.entity_component._.name")}` : `${i.localize(
        "ui.panel.lovelace.editor.card.entities.name"
      )} in ${i.localize(
        `ui.dialogs.entity_registry.editor.device_classes.${e}.${s}`
      )}` : e ? `${i.localize(
        "ui.panel.lovelace.editor.card.entities.name"
      )} in ${i.localize(`component.${e}.entity_component._.name`)}` : i.localize("ui.panel.lovelace.editor.card.entities.name");
    case "square":
      return i.localize("ui.panel.lovelace.editor.card.grid.square");
    case "hide_person_name":
      return i.localize("ui.common.hide") + " " + i.localize("component.person.entity_component._.name") + " " + i.localize("ui.common.name");
    case "hide_content_name":
      return i.localize("ui.common.hide") + " " + i.localize("ui.panel.lovelace.editor.card.markdown.content") + " " + i.localize("ui.common.name");
    case "hide_person":
      return i.localize("ui.common.hide") + " " + i.localize("component.person.entity_component._.name");
    case "list_mode":
      return i.localize("ui.card.common.turn_on") + " " + i.localize("ui.components.media-browser.list") + " " + i.localize("ui.dialogs.helper_settings.input_text.mode");
    case "columns":
      return i.localize(
        "ui.panel.lovelace.editor.action-editor.actions.more-info"
      ) + " " + i.localize("ui.panel.lovelace.editor.card.grid.columns");
    case "edit_filters":
      return i.localize("ui.panel.lovelace.editor.common.edit") + " " + i.localize("ui.components.subpage-data-table.filters");
    case "area":
      return i.localize("ui.panel.lovelace.editor.card.area.name");
    case "floor":
      return i.localize("ui.components.selectors.selector.types.floor");
    case "label_filter":
      return i.localize("ui.components.label-picker.label") + " " + i.localize("ui.components.related-filter-menu.filter");
    case "label":
    case "hidden_labels":
      return i.localize("ui.components.label-picker.label");
    case "entities":
      return i.localize("ui.panel.lovelace.editor.card.entities.name");
    case "extra_entities":
      return "Extra " + i.localize("ui.panel.lovelace.editor.card.entities.name");
    case "entity":
      return i.localize("ui.components.selectors.selector.types.entity");
    case "hide_filter":
      return i.localize("ui.common.hide") + " " + i.localize("ui.panel.lovelace.editor.card.entities.name");
    case "edit_domains_dc":
      return i.localize("ui.panel.lovelace.editor.common.edit") + " " + i.localize("ui.panel.lovelace.editor.card.markdown.content");
    case "icon":
      return i.localize("ui.components.selectors.selector.types.icon");
    case "icon_color":
      return i.localize("ui.panel.lovelace.editor.card.tile.state_color") || "State color (default)";
    case "color":
      return i.localize("ui.panel.lovelace.editor.card.tile.color");
    case "background_color":
      return i.localize("ui.panel.lovelace.editor.card.generic.icon") + " " + i.localize("ui.panel.lovelace.editor.edit_view.tab_background") + " " + i.localize("ui.panel.lovelace.editor.card.tile.color");
    case "multiple_areas":
      return "Multi " + i.localize("ui.panel.lovelace.editor.card.area.name");
    case "multiple_floors":
      return "Multi " + i.localize("ui.components.selectors.selector.types.floor");
    case "show_total_number":
      return i.localize("ui.common.enable") + " " + i.localize(
        "component.sensor.entity_component._.state_attributes.state_class.state.total"
      ) + " " + i.localize("component.number.entity_component._.name");
    case "show_total_entities":
      return i.localize("ui.common.enable") + " " + i.localize(
        "component.sensor.entity_component._.state_attributes.state_class.state.total"
      ) + " " + i.localize("ui.panel.lovelace.editor.card.entities.name");
    case "appearance":
      return i.localize("ui.panel.lovelace.editor.card.tile.appearance") || "Appearance";
    case "tap_action":
    case "hold_action":
    case "double_tap_action":
      return i.localize(
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
      return i.localize("component.group.entity_component._.name") + " " + i.localize("ui.common.name");
    case "group_icon":
      return i.localize("component.group.entity_component._.name") + " " + i.localize("ui.panel.lovelace.editor.card.generic.icon");
    case "group_status":
      return i.localize("component.group.entity_component._.name") + " " + i.localize("ui.components.selectors.selector.types.state") + " (" + i.localize("ui.panel.lovelace.editor.card.config.optional") + ")";
    case "hide":
      return i.localize("ui.common.hide");
    case "state":
      return i.localize("ui.components.entity.entity-state-picker.state");
    case "invert":
    case "invert_state":
      return i.localize("ui.dialogs.entity_registry.editor.invert.label");
    case "show_entity_picture":
      return i.localize(
        "ui.panel.lovelace.editor.card.tile.show_entity_picture"
      );
    case "name":
      return i.localize("ui.common.name");
    case "no_scroll":
      return i.localize(
        "ui.panel.lovelace.editor.edit_view_header.settings.badges_wrap_options.wrap"
      ) + " " + i.localize("ui.panel.lovelace.editor.card.generic.content");
    case "popup":
      return "Popup";
    case "ungroup_areas":
      return i.localize("ui.common.disable") + " " + i.localize("ui.panel.lovelace.editor.card.area.name") + " " + i.localize("component.group.entity_component._.name");
    case "popup_sort":
      return "Popup Sort";
    default:
      if (N.includes(t.name))
        return i.localize(`component.${t.name}.entity_component._.name`) || t.name;
      for (const [o, n] of Object.entries(Jt))
        if (n.includes(t.name))
          return i.localize(
            `ui.dialogs.entity_registry.editor.device_classes.${o}.${t.name}`
          ) || t.name;
      return i.localize(
        `ui.panel.lovelace.editor.card.area.${t.name}`
      );
  }
}
const Di = E(
  (i = []) => new Map(i.map((t) => [t.entity_id, t]))
), Ti = E(
  (i = []) => new Map(i.map((t) => [t.id, t]))
), Li = E(
  (i = []) => new Map(i.map((t) => [t.area_id, t]))
), Oi = E(
  (i, t, e, s, o, n, a) => {
    let r = [];
    Array.isArray(t.filters) ? r = t.filters : [
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
    ].forEach((h) => {
      t[h] !== void 0 && r.push({ key: h, value: t[h] });
    });
    const c = Di(e), l = Ti(s), d = Li(o);
    return Object.values(a).filter((h) => n.includes(h.entity_id) ? !1 : r.length ? r.every(
      (u) => Mi(i, h, u, {
        areas: o,
        devices: s,
        entities: e,
        entityMap: c,
        deviceMap: l,
        areaMap: d
      })
    ) : !0);
  }
);
function Pt(i, t) {
  return Oi(
    i,
    t,
    i.entities || [],
    i.devices || [],
    i.areas || [],
    i.hiddenEntities || [],
    i.hass.states
  );
}
function Wt(i, t) {
  if (!i) return !1;
  const e = t.match(/^([<>]=?)?\s*(\d+)$/);
  if (!e) return !1;
  const [, s, o] = e, n = parseInt(o, 10), a = /* @__PURE__ */ new Date(), r = new Date(i), c = (a.getTime() - r.getTime()) / 6e4;
  switch (s) {
    case ">":
      return c > n;
    case ">=":
      return c >= n;
    case "<":
      return c < n;
    case "<=":
      return c <= n;
    default:
      return Math.round(c) === n;
  }
}
function z(i, t) {
  if (Array.isArray(t))
    return t.some((e) => z(i, e));
  if (typeof t == "string" && t.startsWith("!"))
    return !z(i, t.slice(1));
  if (typeof t == "string" && /^([<>]=?)\s*(-?\d+(\.\d+)?)([mhd])$/.test(t)) {
    const [, e, s, , o] = t.match(/^([<>]=?)\s*(-?\d+(\.\d+)?)([mhd])$/) || [], n = parseFloat(s), a = Date.now(), r = new Date(i).getTime();
    if (isNaN(r)) return !1;
    let c = (a - r) / 6e4;
    switch (o === "h" && (c /= 60), o === "d" && (c /= 1440), e) {
      case ">":
        return c > n;
      case ">=":
        return c >= n;
      case "<":
        return c < n;
      case "<=":
        return c <= n;
    }
  }
  if (typeof t == "string" && /^([<>]=?)\s*(-?\d+(\.\d+)?)$/.test(t)) {
    const [, e, s] = t.match(/^([<>]=?)\s*(-?\d+(\.\d+)?)$/) || [], o = parseFloat(s), n = parseFloat(i);
    switch (e) {
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
    const e = "^" + t.split("*").map((o) => o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(".*") + "$";
    return new RegExp(e, "i").test(String(i));
  }
  if (typeof t == "string" && t.length > 2 && t.startsWith("/") && t.endsWith("/"))
    try {
      return new RegExp(t.slice(1, -1), "i").test(String(i));
    } catch {
      return !1;
    }
  return i === t;
}
function Mi(i, t, e, s) {
  var n, a, r, c, l, d, h, u, m;
  const o = ((n = s.entityMap) == null ? void 0 : n.get(t.entity_id)) || ((a = s.entities) == null ? void 0 : a.find((f) => f.entity_id === t.entity_id));
  switch (e.key) {
    case "area": {
      let f = o == null ? void 0 : o.area_id;
      if (!f && (o != null && o.device_id)) {
        const b = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((r = s.devices) == null ? void 0 : r.find((p) => p.id === o.device_id));
        f = b == null ? void 0 : b.area_id;
      }
      return z(f, e.value);
    }
    case "domain":
      return z(U(t.entity_id), e.value);
    case "entity_id":
      return z(t.entity_id, e.value);
    case "state":
      return z(t.state, e.value);
    case "name": {
      const f = t.attributes.friendly_name ?? "";
      return z(f, e.value);
    }
    case "attributes":
      return !e.value || typeof e.value != "object" ? !1 : Object.entries(e.value).every(([f, b]) => {
        const p = f.split(":");
        let _ = t.attributes;
        for (const A of p)
          if (_ = _ == null ? void 0 : _[A], _ === void 0) break;
        return _ === void 0 ? !1 : z(_, b);
      });
    case "device":
      return z(o == null ? void 0 : o.device_id, e.value);
    case "integration":
      return o ? z(o.platform, e.value) || z(o.config_entry_id, e.value) : !1;
    case "entity_category":
      return z(o == null ? void 0 : o.entity_category, e.value);
    case "label": {
      const f = s.labels, b = (p) => {
        if (z(p, e.value)) return !0;
        if (f) {
          const _ = f.find((A) => A.label_id === p);
          if (_ && z(_.name, e.value)) return !0;
        }
        return !1;
      };
      if (o != null && o.labels && o.labels.some(b)) return !0;
      if (o != null && o.device_id) {
        const p = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((c = s.devices) == null ? void 0 : c.find((_) => _.id === o.device_id));
        if (p != null && p.labels && p.labels.some(b)) return !0;
      }
      return !1;
    }
    case "floor": {
      let f = o == null ? void 0 : o.area_id;
      if (!f && (o != null && o.device_id)) {
        const p = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((l = s.devices) == null ? void 0 : l.find((_) => _.id === o.device_id));
        f = p == null ? void 0 : p.area_id;
      }
      if (!f) return !1;
      const b = (s.areaMap ? s.areaMap.get(f) : void 0) || ((d = s.areas) == null ? void 0 : d.find((p) => p.area_id === f));
      return z(b == null ? void 0 : b.floor_id, e.value);
    }
    case "hidden_by":
      return z(o == null ? void 0 : o.hidden_by, e.value);
    case "device_manufacturer": {
      if (o != null && o.device_id) {
        const f = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((h = s.devices) == null ? void 0 : h.find((b) => b.id === o.device_id));
        return z(f == null ? void 0 : f.manufacturer, e.value);
      }
      return !1;
    }
    case "device_model": {
      if (o != null && o.device_id) {
        const f = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((u = s.devices) == null ? void 0 : u.find((b) => b.id === o.device_id));
        return z(f == null ? void 0 : f.model, e.value);
      }
      return !1;
    }
    case "last_changed":
      return typeof e.value == "string" && /^[<>]=?\s*\d+$/.test(e.value) ? Wt(t.last_changed, e.value) : z(t.last_changed, e.value);
    case "last_updated":
      return typeof e.value == "string" && /^[<>]=?\s*\d+$/.test(e.value) ? Wt(t.last_updated, e.value) : z(t.last_updated, e.value);
    case "last_triggered":
      return typeof e.value == "string" && /^[<>]=?\s*\d+$/.test(e.value) ? Wt(t.attributes.last_triggered, e.value) : z(t.attributes.last_triggered, e.value);
    case "group": {
      const f = i.hass.states[e.value];
      return !f || !Array.isArray((m = f.attributes) == null ? void 0 : m.entity_id) ? !1 : f.attributes.entity_id.includes(t.entity_id);
    }
    default:
      return !0;
  }
}
var Hi = Object.defineProperty, j = (i, t, e, s) => {
  for (var o = void 0, n = i.length - 1, a; n >= 0; n--)
    (a = i[n]) && (o = a(t, e, o) || o);
  return o && Hi(t, e, o), o;
};
const ne = class ne extends J {
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
    }, this._onPopState = (t) => {
      this.open && this._onClosed(t);
    }, this.computeLabel = E(
      (t, e, s) => Rt(this.hass, t, e, s)
    ), this._popupCardConfigCache = /* @__PURE__ */ new Map(), this._cardElementCache = /* @__PURE__ */ new Map(), this._sortEntitiesMemo = E(
      (t, e, s, o) => {
        const n = t.slice();
        if (e === "state") {
          const r = Ht(o, s);
          return n.sort((c, l) => {
            const d = this._isActive(c) ? 0 : 1, h = this._isActive(l) ? 0 : 1;
            if (d !== h) return d - h;
            const u = U(c.entity_id), m = U(l.entity_id), f = this.hass ? F(this.hass, c.state, u) : c.state, b = this.hass ? F(this.hass, l.state, m) : l.state, p = (f || "").localeCompare(b || "");
            return p !== 0 ? p : r(c.entity_id, l.entity_id);
          });
        }
        const a = Ht(o, s);
        return n.sort((r, c) => a(r.entity_id, c.entity_id));
      }
    ), this.groupAndSortEntities = E(
      (t, e, s) => {
        const o = /* @__PURE__ */ new Map();
        for (const a of t) {
          const r = this.getAreaForEntity(a);
          o.has(r) || o.set(r, []), o.get(r).push(a);
        }
        return Array.from(o.entries()).sort(
          ([a], [r]) => {
            var d, h;
            const c = ((d = e.get(a)) == null ? void 0 : d.toLowerCase()) ?? (a === "unassigned" ? "unassigned" : a), l = ((h = e.get(r)) == null ? void 0 : h.toLowerCase()) ?? (r === "unassigned" ? "unassigned" : r);
            return c.localeCompare(l);
          }
        ).map(([a, r]) => [a, s(r)]);
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
  async showDialog(t) {
    this.title = t.title ?? this.title, this.hass = t.hass, this.entities = t.entities ?? [], t.content !== void 0 && (this.content = t.content), this.selectedDomain = t.selectedDomain, this.selectedDeviceClass = t.selectedDeviceClass, this.selectedGroup = t.selectedGroup, this.card = t.card, this._cardEls.clear(), this.open = !0, this.requestUpdate();
    try {
      await this.updateComplete;
    } catch {
    }
    this._applyDialogStyleAfterRender();
  }
  _applyDialogStyleAfterRender() {
    try {
      requestAnimationFrame(() => {
        try {
          this._applyDialogStyle();
        } catch {
        }
      });
    } catch {
      try {
        this._applyDialogStyle();
      } catch {
      }
    }
  }
  _applyDialogStyle() {
    var e, s, o, n, a, r;
    const t = (r = (a = (n = (o = (s = (e = document.querySelector("body > home-assistant")) == null ? void 0 : e.shadowRoot) == null ? void 0 : s.querySelector("status-card-popup")) == null ? void 0 : o.shadowRoot) == null ? void 0 : n.querySelector("ha-dialog")) == null ? void 0 : a.shadowRoot) == null ? void 0 : r.querySelector(
      "div > div.mdc-dialog__container > div.mdc-dialog__surface"
    );
    return t ? (t.style.minHeight = "unset", !0) : !1;
  }
  firstUpdated(t) {
    super.firstUpdated(t);
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("popstate", this._onPopState);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("popstate", this._onPopState), this._cardEls.clear();
  }
  _toTileConfig(t) {
    return {
      type: "tile",
      entity: t.entity
    };
  }
  async _createCardElement(t, e, s = !1) {
    var o, n, a;
    try {
      const r = await ((o = window == null ? void 0 : window.loadCardHelpers) == null ? void 0 : o.call(window));
      if (r != null && r.createCardElement) {
        const c = r.createCardElement(e);
        return c.hass = t, (n = c.setAttribute) == null || n.call(c, "data-hui-card", ""), c;
      }
    } catch {
    }
    try {
      const r = e.type || "tile", c = typeof r == "string" && r.startsWith("custom:"), l = c ? r.slice(7) : `hui-${r}-card`;
      c && !customElements.get(l) && await customElements.whenDefined(l).catch(() => {
      });
      const d = document.createElement(l);
      return typeof d.setConfig == "function" && d.setConfig(e), d.hass = t, (a = d.setAttribute) == null || a.call(d, "data-hui-card", ""), d;
    } catch {
      if (!s)
        return this._createCardElement(
          t,
          this._toTileConfig(e),
          !0
        );
      const r = document.createElement("div");
      return r.setAttribute("data-hui-card", ""), r;
    }
  }
  _getPopupCardConfig(t) {
    var b, p, _, A;
    const e = this.card, s = U(t.entity_id), o = this.selectedDomain || s, n = this.selectedDomain ? this.selectedDeviceClass : (A = (_ = (p = (b = this.hass) == null ? void 0 : b.states) == null ? void 0 : p[t.entity_id]) == null ? void 0 : _.attributes) == null ? void 0 : A.device_class, a = R(o, n), r = typeof (e == null ? void 0 : e.getCustomizationForType) == "function" ? e.getCustomizationForType(a) : void 0, c = r == null ? void 0 : r.popup_card, l = c && typeof c.type == "string" && c.type || "tile", d = l === "tile" ? this.DOMAIN_FEATURES[s] ?? {} : {};
    let h = {};
    if (c && typeof c == "object") {
      const { type: v, entity: g, ...y } = c;
      h = y;
    } else
      h = {};
    const u = {
      type: l,
      entity: t.entity_id,
      ...d,
      ...h
    }, m = this._configHash(u), f = this._popupCardConfigCache.get(t.entity_id);
    return f && f.hash === m ? f.config : (this._popupCardConfigCache.set(t.entity_id, {
      hash: m,
      config: u
    }), u);
  }
  shouldUpdate(t) {
    if (!this.open)
      return t.has("open");
    if (t.size === 1 && t.has("hass")) {
      const e = this._getCurrentEntities().map((n) => n.entity_id).sort(), s = (this._lastEntityIds || []).slice().sort(), o = e.length === s.length && e.every((n, a) => n === s[a]);
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
    const e = t.entity_id, s = this._getPopupCardConfig(t), o = this._configHash(s), n = this._cardElementCache.get(e);
    if (n && n.hash === o)
      return n.el.hass = this.hass, n.el;
    const a = document.createElement("div");
    return a.classList.add("card-placeholder"), a.setAttribute("data-hui-card", ""), this._cardEls.set(e, a), this._createCardElement(this.hass, s).then((r) => {
      try {
        this._cardEls.get(e) === a && (a.replaceWith(r), this._cardEls.set(e, r), this._cardElementCache.set(e, { hash: o, el: r })), r.hass = this.hass;
      } catch {
      }
    }), this._cardElementCache.set(e, { hash: o, el: a }), a;
  }
  _getCurrentEntities() {
    var a, r, c;
    const t = this.card, e = this.selectedDomain, s = this.selectedDeviceClass, o = this.selectedGroup;
    let n = [];
    if (o !== void 0 && ((r = (a = t._config) == null ? void 0 : a.content) != null && r[o])) {
      const l = t._config.content[o], d = (c = t._config.rulesets) == null ? void 0 : c.find(
        (h) => h.group_id === l
      );
      n = d ? Pt(t, d) : [];
    } else
      e ? n = ((typeof (t == null ? void 0 : t._shouldShowTotalEntities) == "function" ? t._shouldShowTotalEntities(e, s) : !1) ? !0 : this._showAll) ? t._totalEntities(e, s) : t._isOn(e, s) : n = Array.isArray(this.entities) ? this.entities : [];
    return n;
  }
  toggleAllOrOn() {
    this._showAll = !this._showAll;
  }
  handleAskToggleDomain(t) {
    t.stopPropagation();
    const e = "status-card-plus-popup-confirmation";
    this.dispatchEvent(
      new CustomEvent("show-dialog", {
        detail: {
          dialogTag: e,
          dialogImport: () => customElements.whenDefined(e),
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
    const e = (s = this.card.entities) == null ? void 0 : s.find(
      (n) => n.entity_id === t.entity_id
    );
    if (e) {
      if (e.area_id)
        return e.area_id;
      if (e.device_id) {
        const n = (o = this.card.devices) == null ? void 0 : o.find(
          (a) => a.id === e.device_id
        );
        if (n && n.area_id)
          return n.area_id;
      }
    }
    return "unassigned";
  }
  _isActive(t) {
    return !Zt.includes(t.state);
  }
  _configHash(t) {
    return JSON.stringify(t);
  }
  sortEntitiesForPopup(t) {
    var s, o, n, a, r;
    const e = ((o = (s = this.card) == null ? void 0 : s._config) == null ? void 0 : o.popup_sort) || "name";
    return this._sortEntitiesMemo(
      t,
      e,
      ((a = (n = this.hass) == null ? void 0 : n.locale) == null ? void 0 : a.language) ?? "en",
      ((r = this.hass) == null ? void 0 : r.states) ?? {}
    );
  }
  render() {
    var g, y, P, k, S, x, O, G, ft, I, W, kt;
    if (!this.open) return $``;
    const t = (g = this.card) != null && g.list_mode ? 1 : ((P = (y = this.card) == null ? void 0 : y._config) == null ? void 0 : P.columns) || 4, e = this.selectedDomain, s = this.selectedDeviceClass, o = this.selectedGroup, n = this.card, r = (typeof (n == null ? void 0 : n._shouldShowTotalEntities) == "function" ? n._shouldShowTotalEntities(e, s) : !1) ? !0 : this._showAll, c = new Map(
      (k = n.areas) == null ? void 0 : k.map((w) => [w.area_id, w.name])
    );
    let l = [], d = !1;
    if (o !== void 0 && ((x = (S = n._config) == null ? void 0 : S.content) != null && x[o])) {
      const w = n._config.content[o], B = (O = n._config.rulesets) == null ? void 0 : O.find(
        (K) => K.group_id === w
      );
      l = B ? Pt(n, B) : [];
    } else
      e ? l = r ? n._totalEntities(e, s) : n._isOn(e, s) : l = Array.isArray(this.entities) ? this.entities : [], d = !0;
    const h = this.sortEntitiesForPopup(l), u = new Set(l.map((w) => w.entity_id));
    Array.from(this._cardEls.keys()).forEach((w) => {
      u.has(w) || this._cardEls.delete(w);
    }), this._lastEntityIds = l.map((w) => w.entity_id);
    const m = this.groupAndSortEntities(
      l,
      c,
      this.sortEntitiesForPopup.bind(this)
    ), f = ((G = n == null ? void 0 : n._config) == null ? void 0 : G.ungroupAreas) === !0 || ((ft = n == null ? void 0 : n._config) == null ? void 0 : ft.ungroup_areas) === !0 || ((I = n == null ? void 0 : n._config) == null ? void 0 : I.area_grouping) !== void 0 && ((W = n == null ? void 0 : n._config) == null ? void 0 : W.area_grouping) === !1, b = m.length ? Math.max(...m.map(([, w]) => w.length)) : 0, p = f ? Math.min(t, Math.max(1, l.length)) : Math.min(t, Math.max(1, b)), _ = R(e, s), A = typeof (n == null ? void 0 : n.getCustomizationForType) == "function" ? n.getCustomizationForType(_) : void 0, v = (A == null ? void 0 : A.invert) === !0;
    return $`
      <ha-dialog
        .open=${this.open}
        hideActions
        @closed=${this._onClosed}
        style="--columns: ${p};"
      >
        <div class="dialog-header">
          <ha-icon-button
            slot="trigger"
            .label=${this.hass.localize("ui.common.close")}
            .path=${se}
            @click=${this._onClosed}
          ></ha-icon-button>
          <h3>
            ${(() => {
      var K, Z;
      const w = this.selectedGroup, B = this.card;
      if (w !== void 0 && ((Z = (K = B == null ? void 0 : B._config) == null ? void 0 : K.content) != null && Z[w])) {
        const Ie = B._config.content[w];
        return this.hass.localize(
          "ui.panel.lovelace.editor.card.entities.name"
        ) + " in " + Ie;
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

          ${d ? $`
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
                    .path=${_i}
                  ></ha-icon-button>

                  <ha-list-item
                    graphic="icon"
                    @click=${this.handleAskToggleDomain}
                    @closed=${this._stopPropagation}
                  >
                    ${v ? this.hass.localize("ui.card.common.turn_on") : this.hass.localize("ui.card.common.turn_off")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${bi}
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
                      .path=${vi}
                    ></ha-svg-icon>
                  </ha-list-item>
                </ha-button-menu>
              ` : ""}
        </div>
        <div class="dialog-content scrollable">
          ${(kt = this.card) != null && kt.list_mode ? f ? $`
                  <ul class="entity-list">
                    ${it(
      h,
      (w) => w.entity_id,
      (w) => $`<li class="entity-item">- ${w.entity_id}</li>`
    )}
                  </ul>
                ` : $`
                  <ul class="entity-list">
                    ${it(
      m,
      ([w]) => w,
      ([w, B]) => {
        const K = c.get(w) ?? (w === "unassigned" ? "Unassigned" : w);
        return $`
                          <li class="entity-item">
                            <h4>${K}:</h4>
                            <ul>
                              ${it(
          B,
          (Z) => Z.entity_id,
          (Z) => $`<li class="entity-item">
                                    - ${Z.entity_id}
                                  </li>`
        )}
                            </ul>
                          </li>
                        `;
      }
    )}
                  </ul>
                ` : f ? $`
                <div class="entity-cards">
                  ${it(
      h,
      (w) => w.entity_id,
      (w) => $`
                      <div class="entity-card">
                        ${this._getOrCreateCard(w)}
                      </div>
                    `
    )}
                </div>
              ` : $`${m.map(([w, B]) => {
      const K = c.get(w) ?? (w === "unassigned" ? "Unassigned" : w);
      return $`
                  <div class="cards-wrapper">
                    <h4>${K}</h4>
                    <div class="entity-cards">
                      ${it(
        B,
        (Z) => Z.entity_id,
        (Z) => $`
                          <div class="entity-card">
                            ${this._getOrCreateCard(Z)}
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
};
ne.styles = bt`
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
      position: sticky;
      top: 0;
      z-index: 10;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.07);
      background: transparent;
    }
    .dialog-header .menu-button {
      margin-left: auto;
    }
    .dialog-content.scrollable {
      margin-bottom: 16px;
      max-height: 80vh;
      overflow-y: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .dialog-content.scrollable::-webkit-scrollbar {
      display: none;
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
      margin: 0.8em 0.2em 0em;
    }
    .entity-cards {
      display: grid;
      grid-template-columns: repeat(var(--columns, 4), 22.5vw);
      gap: 4px;
      width: 100%;
      box-sizing: border-box;
      overflow-x: hidden;
      justify-content: center;
      margin-top: 0.8em;
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
        width: 92vw;
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
  `;
let V = ne;
j([
  C({ type: Boolean })
], V.prototype, "open");
j([
  C({ type: String })
], V.prototype, "title");
j([
  C({ type: String })
], V.prototype, "selectedDomain");
j([
  C({ type: String })
], V.prototype, "selectedDeviceClass");
j([
  C({ type: String })
], V.prototype, "content");
j([
  C({ type: Array })
], V.prototype, "entities");
j([
  C({ attribute: !1 })
], V.prototype, "hass");
j([
  C({ attribute: !1 })
], V.prototype, "card");
j([
  D()
], V.prototype, "_showAll");
j([
  D()
], V.prototype, "selectedGroup");
customElements.define("status-card-plus-popup", V);
const ae = class ae extends J {
  constructor() {
    super(...arguments), this.open = !1, this._onClosed = () => {
      this.open = !1, this.dispatchEvent(
        new CustomEvent("dialog-closed", { bubbles: !0, composed: !0 })
      );
    }, this._confirm = () => {
      var t, e;
      try {
        (e = (t = this.card) == null ? void 0 : t.toggleDomain) == null || e.call(t, this.selectedDomain, this.selectedDeviceClass);
      } catch {
      }
      this._onClosed();
    };
  }
  showDialog(t) {
    this.hass = t.hass, this.card = t.card, this.selectedDomain = t.selectedDomain, this.selectedDeviceClass = t.selectedDeviceClass, this.open = !0, this.requestUpdate();
  }
  render() {
    var a, r;
    if (!this.open || !this.hass || !this.card) return $``;
    const t = this.selectedDomain || "", e = this.selectedDeviceClass, s = R(t, e), o = (r = (a = this.card) == null ? void 0 : a.getCustomizationForType) == null ? void 0 : r.call(a, s), n = (o == null ? void 0 : o.invert) === !0;
    return $`
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
let nt = ae;
j([
  C({ type: Boolean })
], nt.prototype, "open");
j([
  C({ attribute: !1 })
], nt.prototype, "hass");
j([
  C({ attribute: !1 })
], nt.prototype, "card");
j([
  C({ type: String })
], nt.prototype, "selectedDomain");
j([
  C({ type: String })
], nt.prototype, "selectedDeviceClass");
customElements.define(
  "status-card-plus-popup-confirmation",
  nt
);
var Pi = Object.defineProperty, Ii = Object.getOwnPropertyDescriptor, H = (i, t, e, s) => {
  for (var o = s > 1 ? void 0 : s ? Ii(t, e) : t, n = i.length - 1, a; n >= 0; n--)
    (a = i[n]) && (o = (s ? a(t, e, o) : a(o)) || o);
  return s && o && Pi(t, e, o), o;
};
let L = class extends J {
  constructor() {
    super(...arguments), this.areas = [], this.devices = [], this.entities = [], this.entitiesByDomain = {}, this.selectedDomain = null, this.selectedDeviceClass = null, this.hiddenEntities = [], this.hiddenLabels = [], this.hiddenAreas = [], this.hide_person = !1, this.hide_content_name = !0, this.list_mode = !1, this.selectedGroup = null, this._baseEntitiesMemo = E(
      (i, t, e) => i.filter((s) => {
        const o = s.state;
        if (o === "unavailable" || o === "unknown") return !1;
        const n = s.attributes.device_class;
        return t === "switch" ? e === "outlet" ? n === "outlet" : e === "switch" ? n === "switch" || n === void 0 : !0 : !e || n === e;
      })
    ), this.computeLabel = E(
      (i, t, e) => Rt(this.hass, i, t, e)
    ), this._customizationIndex = E((i) => {
      const t = /* @__PURE__ */ new Map();
      return (i ?? []).forEach((e) => {
        if (!(e != null && e.type)) return;
        const s = this._normalizeTypeKey(e.type);
        s && t.set(s, e);
      }), t;
    }), this._getPersonItemsMemo = E(
      (i, t, e, s, o) => s ? [] : i.filter(
        (n) => {
          var a;
          return n.entity_id.startsWith("person.") && !t.includes(n.entity_id) && !((a = n.labels) != null && a.some((r) => e.includes(r))) && !n.hidden_by && !n.disabled_by;
        }
      ).reverse().map((n) => o[n.entity_id]).filter((n) => !!n)
    ), this._computeExtraItems = E(
      (i, t) => {
        const e = i.content || [];
        return i.extra_entities ? i.extra_entities.reduce((s, o) => {
          if (!e.includes(o)) return s;
          const n = t[o];
          if (!n) return s;
          const a = this.getCustomizationForType(o);
          if (a && a.state !== void 0 && a.invert_state !== void 0) {
            const f = a.invert_state === "true", b = n.state === a.state;
            if (!f && !b || f && b) return s;
          }
          const r = e.indexOf(o), c = r >= 0 ? r : 0, l = this.getCustomIcon(o, void 0, n), d = this.getCustomName(o, void 0, n) ?? n.attributes.friendly_name ?? o, h = this.getCustomColor(o, void 0), u = this.getCustomCSS(
            o,
            void 0
          ), m = this.getBackgroundColor(
            o,
            void 0
          );
          return s.push({
            type: "extra",
            panel: o,
            entity: n,
            order: c,
            icon: l,
            name: d,
            color: h,
            icon_css: u,
            background_color: m
          }), s;
        }, []).sort((s, o) => s.order - o.order) : [];
      }
    ), this._computeGroupItems = E(
      (i, t) => i.map((e, s) => {
        const o = t.find((a) => a.group_id === e);
        if (!(!o || !Object.keys(o).some(
          (a) => a !== "group_id" && a !== "group_icon" && o[a] !== void 0 && o[a] !== ""
        )))
          return {
            type: "group",
            group_id: e,
            order: s,
            ruleset: o
          };
      }).filter(
        (e) => !!e
      )
    ), this._computeDomainItems = E(
      (i, t) => i.map((e, s) => {
        if (t.includes(e) || e.includes(" - ")) return null;
        const o = this._normalizeTypeKey(e);
        return !o || o.includes(".") ? null : {
          type: "domain",
          domain: o,
          order: s
        };
      }).filter((e) => e !== null)
    ), this._computeDeviceClassItems = E(
      (i) => i.map((t, e) => {
        if (!t.includes(" - ")) return null;
        const s = this._normalizeTypeKey(t);
        if (!s || !s.includes(".")) return null;
        const [o, n] = s.split(".");
        return {
          type: "deviceClass",
          domain: o,
          deviceClass: n,
          order: e
        };
      }).filter((t) => t !== null)
    ), this._computeSortedEntities = E(
      (i, t, e, s) => [...i, ...t, ...e, ...s].sort(
        (o, n) => o.order - n.order
      )
    );
  }
  firstUpdated(i) {
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
    var i, t, e;
    try {
      const [s, o, n] = await Promise.all([
        ((i = this.hass) == null ? void 0 : i.callWS({
          type: "config/area_registry/list"
        })) ?? [],
        ((t = this.hass) == null ? void 0 : t.callWS({
          type: "config/device_registry/list"
        })) ?? [],
        ((e = this.hass) == null ? void 0 : e.callWS({
          type: "config/entity_registry/list"
        })) ?? []
      ]);
      this.areas = s, this.devices = o, this.entities = n, this._processEntities();
    } catch (s) {
      console.error("Error loading data:", s);
    }
  }
  _processEntities() {
    const i = this._entitiesByDomain(
      this.entities,
      this.devices,
      this.areas ?? [],
      this.hass.states
    );
    i !== this.entitiesByDomain && (this.entitiesByDomain = i);
  }
  _entitiesByDomain(i, t, e, s) {
    const o = this._config.area || null, n = this._config.floor || null, a = this._config.label || null, r = this.hiddenAreas, c = this.hiddenLabels, l = this.hiddenEntities, d = [
      i,
      t,
      e,
      s,
      o,
      n,
      a,
      r,
      c,
      l
    ];
    if (this._lastEntitiesByDomainInput && this._shallowArrayEqual(d, this._lastEntitiesByDomainInput))
      return this._lastEntitiesByDomainResult;
    const h = Pe(
      i,
      t,
      e,
      s,
      { area: o, floor: n, label: a, hiddenAreas: r, hiddenLabels: c, hiddenEntities: l },
      N
    );
    return this._lastEntitiesByDomainInput = d, this._lastEntitiesByDomainResult = h, h;
  }
  _shallowArrayEqual(i, t) {
    if (i.length !== t.length) return !1;
    for (let e = 0; e < i.length; e++)
      if (Array.isArray(i[e]) && Array.isArray(t[e])) {
        if (i[e] !== t[e] && (i[e].length !== t[e].length || i[e].some((s, o) => s !== t[e][o])))
          return !1;
      } else if (i[e] !== t[e])
        return !1;
    return !0;
  }
  _baseEntities(i, t) {
    const e = this._entitiesByDomain(
      this.entities,
      this.devices,
      this.areas ?? [],
      this.hass.states
    )[i] || [];
    return this._baseEntitiesMemo(e, i, t);
  }
  _totalEntities(i, t) {
    return this._baseEntities(i, t);
  }
  _shouldShowTotalEntities(i, t) {
    if (this._config.show_total_entities) return !0;
    const e = R(i, t), s = this.getCustomizationForType(e);
    return (s == null ? void 0 : s.show_total_entities) === !0;
  }
  _shouldShowTotalNumbers(i, t) {
    if (this._config.show_total_number) return !0;
    const e = R(i, t), s = this.getCustomizationForType(e);
    return (s == null ? void 0 : s.show_total_number) === !0;
  }
  _isOn(i, t) {
    var n;
    const e = this._baseEntities(i, t), s = R(i, t), o = ((n = this.getCustomizationForType(s)) == null ? void 0 : n.invert) === !0;
    return e.filter((a) => {
      if (i === "climate") {
        const c = a.attributes.hvac_action;
        if (c !== void 0) {
          const l = !["idle", "off"].includes(c);
          return o ? !l : l;
        }
      }
      if (i === "humidifier") {
        const c = a.attributes.action;
        if (c !== void 0) {
          const l = !["idle", "off"].includes(c);
          return o ? !l : l;
        }
      }
      let r = !Zt.includes(a.state);
      return o ? !r : r;
    });
  }
  setConfig(i) {
    if (!i)
      throw new Error("Invalid configuration.");
    this._config = i, this.hide_person = i.hide_person !== void 0 ? i.hide_person : !1, this.hide_content_name = i.hide_content_name !== void 0 ? i.hide_content_name : !1, this.list_mode = i.list_mode !== void 0 ? i.list_mode : !1, this.hiddenEntities = i.hidden_entities || [], this.hiddenLabels = i.hidden_labels || [], this.hiddenAreas = i.hidden_areas || [], this.requestUpdate();
  }
  _showPopup(i, t, e) {
    i.dispatchEvent(
      new CustomEvent("show-dialog", {
        detail: {
          dialogTag: t,
          dialogImport: () => customElements.whenDefined(t),
          dialogParams: e
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _openDomainPopup(i) {
    var o, n, a;
    let t = "Details";
    typeof i == "string" ? t = this.getCustomName(i) || this.computeLabel({ name: i }) : typeof i == "number" && ((o = this._config.content) != null && o[i]) && (t = this._config.content[i]);
    let e = [];
    if (typeof i == "number") {
      const r = (n = this._config.content) == null ? void 0 : n[i], c = (a = this._config.rulesets) == null ? void 0 : a.find(
        (l) => l.group_id === r
      );
      e = c ? Pt(this, c) : [];
    } else {
      const r = this.selectedDeviceClass || void 0;
      e = this._shouldShowTotalEntities(i, r) ? this._totalEntities(i, r) : this._isOn(i, r);
    }
    this._showPopup(this, "status-card-plus-popup", {
      title: t,
      hass: this.hass,
      entities: e,
      selectedDomain: typeof i == "string" ? i : void 0,
      selectedDeviceClass: this.selectedDeviceClass || void 0,
      selectedGroup: this.selectedGroup || void 0,
      card: this,
      content: e.length ? void 0 : "Keine Entitäten"
    });
  }
  updated(i) {
    if (super.updated(i), !this._config || !this.hass) return;
    const t = i.get("hass"), e = i.get("_config");
    if (i.has("selectedDomain") && this.selectedDomain) {
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
    if (i.has("selectedGroup") && this.selectedGroup !== null) {
      const s = this.selectedGroup;
      this._openDomainPopup(s), setTimeout(() => {
        this.selectedGroup = null;
      }, 0);
    }
    (i.has("hass") && (!t || t.themes !== this.hass.themes) || i.has("_config") && (!e || e.theme !== this._config.theme)) && $i(
      this,
      this.hass.themes,
      this._config.theme
    ), (i.has("hass") || i.has("_config") || i.has("hiddenEntities") || i.has("hiddenLabels") || i.has("hiddenAreas")) && (!t || t.states !== this.hass.states || i.has("_config") || i.has("hiddenEntities") || i.has("hiddenLabels") || i.has("hiddenAreas")) && this._processEntities();
  }
  showMoreInfo(i) {
    const t = new CustomEvent("hass-more-info", {
      detail: { entityId: i.entity_id },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t);
  }
  getStatusProperty(i, t, e) {
    if (this._shouldShowTotalEntities(i, t) && !this._shouldShowTotalNumbers(i, t))
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
    ], o = R(i, t), n = this.getCustomizationForType(o), a = (n == null ? void 0 : n.invert) === !0;
    switch (i) {
      case "device_tracker": {
        const r = F(
          this.hass,
          "home",
          "device_tracker"
        ), c = F(
          this.hass,
          "not_home",
          "device_tracker"
        );
        return a ? c : r;
      }
      case "lock":
      case "cover": {
        const r = F(this.hass, "open", "cover"), c = F(
          this.hass,
          "closed",
          "cover"
        );
        return a ? c : r;
      }
      case "person":
        return e === "home" ? F(this.hass, "home", "person") : e === "not_home" ? F(this.hass, "not_home", "person") : e ?? "unknown";
      default: {
        if (t && s.includes(t)) {
          const l = F(this.hass, "open", "cover"), d = F(
            this.hass,
            "closed",
            "cover"
          );
          return a ? d : l;
        }
        const r = F(
          this.hass,
          e ?? "on",
          "light"
        ), c = F(
          this.hass,
          e ?? "off",
          "light"
        );
        return a ? c : r;
      }
    }
  }
  getCustomizationForType(i) {
    if (!i) return;
    const t = this._normalizeTypeKey(i);
    return t ? this._customizationIndex(this._config.customization).get(t) : void 0;
  }
  _normalizeTypeKey(i) {
    var s, o;
    if (!i) return;
    const t = i.trim();
    if (!t) return;
    const e = t.toLowerCase();
    if (N.includes(e))
      return e;
    for (const n of N)
      if (q(n).toLowerCase() === e)
        return n;
    if (t.includes(" - ")) {
      const [n, a] = t.split(" - "), r = n.trim().toLowerCase();
      let c = N.find(
        (h) => q(h).toLowerCase() === r
      );
      c || (c = r.replace(/\s+/g, "_"));
      const l = a.trim().toLowerCase().replace(/\s+/g, "_");
      let d = (s = Jt[c]) == null ? void 0 : s.find((h) => h === l);
      return d || (d = l), `${c}.${d}`;
    }
    if (e.includes(".")) {
      const [n, a] = e.split(".");
      return N.includes(n) && (o = Jt[n]) != null && o.includes(a) ? `${n}.${a}` : e;
    }
    return e.replace(/\s+/g, "_");
  }
  getCustomIcon(i, t, e) {
    const s = this.getCustomizationForType(
      R(i, t)
    );
    if ((s == null ? void 0 : s.show_entity_picture) === !0 && e && e.attributes && e.attributes.entity_picture)
      return e.attributes.entity_picture;
    if (s && s.icon)
      return s.icon;
    if (e && e.attributes && e.attributes.icon)
      return e.attributes.icon;
    const n = (s == null ? void 0 : s.invert) === !0 ? "off" : "on";
    let a = i;
    if (!t && i.includes(".") && (a = i.split(".")[0]), st && st[a]) {
      const r = st[a];
      if (t && typeof r == "object") {
        const c = r[t];
        if (c) {
          if (typeof c == "string") return c;
          if (typeof c == "object" && "on" in c && "off" in c)
            return c[n] || c.on || c.off;
        }
      }
      if (typeof r == "object" && "on" in r && "off" in r)
        return r[n] || r.on || r.off;
      if (typeof r == "string") return r;
    }
    return "";
  }
  getBackgroundColor(i, t) {
    var o;
    const e = this.getCustomizationForType(
      R(i, t)
    ), s = (n) => n.length === 4 ? `rgba(${n[0]},${n[1]},${n[2]},${n[3]})` : `rgb(${n[0]},${n[1]},${n[2]})`;
    if (e && Array.isArray(e.background_color)) {
      const n = e.background_color;
      if (n.length >= 3) return s(n);
    }
    if (Array.isArray((o = this._config) == null ? void 0 : o.background_color)) {
      const n = this._config.background_color;
      if (n.length >= 3) return s(n);
    }
    return "rgba(var(--rgb-primary-text-color), 0.15)";
  }
  getCustomColor(i, t) {
    const e = this.getCustomizationForType(
      R(i, t)
    );
    if (e && e.icon_color)
      return e.icon_color;
    if (this._config && this._config.color)
      return this._config.color;
  }
  getCustomName(i, t, e) {
    const s = this.getCustomizationForType(
      R(i, t)
    );
    if (s && s.name)
      return s.name;
    if (e && e.attributes.friendly_name)
      return e.attributes.friendly_name;
  }
  getCustomCSS(i, t) {
    const e = this.getCustomizationForType(
      R(i, t)
    );
    if (e && e.icon_css)
      return e.icon_css;
  }
  toggleDomain(i, t) {
    i = i ?? this.selectedDomain, t = t ?? this.selectedDeviceClass;
    const e = this._isOn(i, t);
    if (e.length === 0) {
      console.warn(`Keine aktiven Entitäten für ${i} gefunden.`);
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
    ].includes(i)) {
      this.hass.callService(i, "toggle", {
        entity_id: e.map((s) => s.entity_id)
      });
      return;
    }
    for (const s of e) {
      let o = !Zt.includes(s.state);
      i === "media_player" ? this.hass.callService(i, o ? "media_pause" : "media_play", {
        entity_id: s.entity_id
      }) : i === "lock" ? this.hass.callService(i, o ? "lock" : "unlock", {
        entity_id: s.entity_id
      }) : i === "vacuum" ? this.hass.callService(i, o ? "stop" : "start", {
        entity_id: s.entity_id
      }) : i === "alarm_control_panel" ? this.hass.callService(
        i,
        o ? "alarm_arm_away" : "alarm_disarm",
        { entity_id: s.entity_id }
      ) : i === "lawn_mower" ? this.hass.callService(i, o ? "pause" : "start_mowing", {
        entity_id: s.entity_id
      }) : i === "water_heater" ? this.hass.callService(i, o ? "turn_off" : "turn_on", {
        entity_id: s.entity_id
      }) : i === "update" && this.hass.callService(i, o ? "skip" : "install", {
        entity_id: s.entity_id
      });
    }
  }
  _handleDomainAction(i, t) {
    return (e) => {
      var l, d, h;
      e.stopPropagation();
      const s = this.getCustomizationForType(
        R(i, t)
      );
      let o, n;
      e.detail.action === "tap" ? (o = s == null ? void 0 : s.tap_action, n = (l = this._config) == null ? void 0 : l.tap_action) : e.detail.action === "hold" ? (o = s == null ? void 0 : s.hold_action, n = (d = this._config) == null ? void 0 : d.hold_action) : e.detail.action === "double_tap" && (o = s == null ? void 0 : s.double_tap_action, n = (h = this._config) == null ? void 0 : h.double_tap_action);
      const a = o !== void 0 ? o : n, r = typeof a == "string" && a === "more-info" || typeof a == "object" && (a == null ? void 0 : a.action) === "more-info", c = typeof a == "string" && a === "toggle" || typeof a == "object" && (a == null ? void 0 : a.action) === "toggle";
      if (i.includes(".")) {
        const u = i, m = this.hass.states[u], f = U(u);
        if (c) {
          this.hass.callService(f, "toggle", { entity_id: u });
          return;
        }
        if (r) {
          this.showMoreInfo(m);
          return;
        }
      }
      if (r || a === void 0) {
        this.selectedDomain = i, this.selectedDeviceClass = t || null;
        return;
      }
      if (c) {
        this.toggleDomain(i, t);
        return;
      }
      ki(
        this,
        this.hass,
        {
          tap_action: (s == null ? void 0 : s.tap_action) || this._config.tap_action,
          hold_action: (s == null ? void 0 : s.hold_action) || this._config.hold_action,
          double_tap_action: (s == null ? void 0 : s.double_tap_action) || this._config.double_tap_action
        },
        e.detail.action
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
    return this._computeDomainItems(
      this._config.content || [],
      this._config.extra_entities || []
    );
  }
  getDeviceClassItems() {
    return this._computeDeviceClassItems(this._config.content || []);
  }
  _getIconStyles(i, t = {}) {
    const { color: e, square: s, isNotHome: o } = t, a = ((c) => {
      if (!c) return;
      const l = String(c).trim();
      return l.startsWith("var(") || l.startsWith("#") || l.startsWith("rgb") || l.startsWith("hsl") ? l : `var(--${l}-color)`;
    })(e), r = {
      "border-radius": s ? "20%" : "50%",
      "background-color": a ? `color-mix(in srgb, ${a} 18%, transparent)` : void 0,
      color: a
    };
    return i === "person" && o && (r.filter = "grayscale(100%)"), r;
  }
  renderExtraTab(i) {
    const { panel: t, entity: e, icon: s, name: o, color: n, icon_css: a, background_color: r } = i, c = this.hass.states[t], l = e.state, d = Number(l), h = !Number.isNaN(d) && l !== "" ? Ae(d, this.hass.locale) : F(this.hass, l, U(t)), u = e.attributes.unit_of_measurement, m = this.getCustomizationForType(t), f = this._handleDomainAction(t), b = Dt({
      hasHold: _t(
        (m == null ? void 0 : m.hold_action) ?? this._config.hold_action
      ),
      hasDoubleClick: _t(
        (m == null ? void 0 : m.double_tap_action) ?? this._config.double_tap_action
      )
    }), p = {
      horizontal: this._config.content_layout === "horizontal"
    }, _ = this._computeIconColorOverride(t, c), A = this._computeStateColorMap(t, c), v = this._getIconStyles("extra", {
      color: A || _ || n,
      square: this._config.square
    }), g = this._computeStateIconMap(t, c) || s;
    let y;
    const P = m == null ? void 0 : m.state_content;
    return P !== void 0 ? y = (Array.isArray(P) ? P : [P]).map((S) => {
      var G, ft;
      if (!S) return "";
      const x = String(S).trim();
      if (x === "state")
        return h + (Number.isNaN(d) ? "" : u ? ` ${u}` : "");
      const O = x.startsWith("attribute:") ? x.slice(10) : x;
      if (O && e.attributes && O in e.attributes) {
        const I = e.attributes[O];
        if (I == null) return "";
        let W;
        /temperature/i.test(O) ? W = (ft = (G = this.hass.config) == null ? void 0 : G.unit_system) == null ? void 0 : ft.temperature : /humidity/i.test(O) ? W = "%" : typeof e.attributes.unit_of_measurement == "string" && (W = e.attributes.unit_of_measurement);
        const kt = typeof I == "string" && I.trim() !== "" && !Number.isNaN(Number(I));
        if (typeof I == "number" || kt)
          try {
            const B = typeof I == "number" ? I : Number(I), K = Ae(B, this.hass.locale);
            return W ? `${K} ${W}` : K;
          } catch {
            return W ? `${String(I)} ${W}` : String(I);
          }
        return F(
          this.hass,
          String(I),
          U(t)
        );
      }
      return x;
    }).filter((S) => S !== "").join(" · ") : y = `${h}${u ? ` ${u}` : ""}`, m == null || m.state_content, $`
      <ha-tab-group-tab
        slot="nav"
        panel=${t}
        @action=${f}
        .actionHandler=${b}
      >
        <div class="extra-entity ${pt(p)}">
          <div class="entity-icon" style=${Q(v)}>
            ${(g || "").startsWith("/") || (g || "").startsWith("http") ? $`<img
                  src=${g}
                  alt=${o}
                  style="border-radius:${this._config.square ? "20%" : "50%"};object-fit:cover;"
                />` : $`<ha-state-icon
                  .hass=${this.hass}
                  .stateObj=${c}
                  .icon=${g}
                  .stateColor=${!0}
                  data-domain=${U(t)}
                  data-state=${c.state}
                  style="${(a || "") + (A ? `;color:${A}` : _ ? `;color:${_}` : n ? `;color:var(--${n}-color)` : "")}"
                ></ha-state-icon>`}
          </div>
          <div class="entity-info">
            ${this.hide_content_name ? "" : $`<div class="entity-name">${o}</div>`}
            <div class="entity-state">
              ${y}
            </div>
          </div>
        </div>
      </ha-tab-group-tab>
    `;
  }
  _computeIconColorOverride(i, t) {
    var o;
    if (U(i) !== "climate") return;
    const s = (o = t == null ? void 0 : t.attributes) == null ? void 0 : o.hvac_action;
    if (s === "heating") return "var(--state-climate-heat-color)";
    if (s === "cooling") return "var(--state-climate-cool-color)";
  }
  _computeStateColorMap(i, t) {
    var o;
    const e = this.getCustomizationForType(i), s = e == null ? void 0 : e.state_color_map;
    if (!(!Array.isArray(s) || s.length === 0))
      for (const n of s) {
        const a = n.attribute === "state" ? t.state : (o = t.attributes) == null ? void 0 : o[n.attribute];
        if (a === void 0) continue;
        const r = String(a), c = String(n.equals);
        if (r === c) return n.color;
      }
  }
  _computeStateIconMap(i, t) {
    var o;
    const e = this.getCustomizationForType(i), s = e == null ? void 0 : e.state_icon_map;
    if (!(!Array.isArray(s) || s.length === 0))
      for (const n of s) {
        const a = n.attribute === "state" ? t.state : (o = t.attributes) == null ? void 0 : o[n.attribute];
        if (a === void 0) continue;
        const r = String(a), c = String(n.equals);
        if (r === c) return n.icon;
      }
  }
  renderGroupTab(i, t) {
    const e = Pt(this, i);
    if (!e.length) return $``;
    const s = i.group_id || `${this.hass.localize("component.group.entity_component._.name")} ${t + 1}`, o = i.group_icon || "mdi:format-list-group", n = this.getCustomColor(s);
    this.getBackgroundColor(s);
    const a = () => {
      this.selectedGroup = t;
    }, r = Dt({
      hasHold: !1,
      hasDoubleClick: !1
    }), c = {
      horizontal: this._config.content_layout === "horizontal"
    }, l = this._getIconStyles("domain", {
      color: n,
      square: this._config.square
    });
    return $`
      <ha-tab-group-tab
        slot="nav"
        panel=${"group-" + t}
        @action=${a}
        .actionHandler=${r}
      >
        <div class="entity ${pt(c)}">
          <div class="entity-icon" style=${Q(l)}>
            <ha-icon icon=${o}></ha-icon>
          </div>
          <div class="entity-info">
            ${this.hide_content_name ? "" : $`<div class="entity-name">${s}</div>`}
            <div class="entity-state">
              ${e.length}
              ${i.group_status ? ` ${i.group_status}` : ""}
            </div>
          </div>
        </div>
      </ha-tab-group-tab>
    `;
  }
  renderDomainTab(i) {
    const { domain: t } = i, e = this._isOn(t), s = this._totalEntities(t);
    if (!(this._shouldShowTotalEntities(t) ? s : e).length) return $``;
    const a = this.getCustomColor(t), r = this.getCustomizationForType(t), c = this._handleDomainAction(t), l = Dt({
      hasHold: _t(
        (r == null ? void 0 : r.hold_action) ?? this._config.hold_action
      ),
      hasDoubleClick: _t(
        (r == null ? void 0 : r.double_tap_action) ?? this._config.double_tap_action
      )
    }), d = {
      horizontal: this._config.content_layout === "horizontal"
    }, h = this._getIconStyles("domain", {
      color: a,
      square: this._config.square
    });
    return $`
      <ha-tab-group-tab
        slot="nav"
        panel=${t}
        @action=${c}
        .actionHandler=${l}
      >
        <div class="entity ${pt(d)}">
          <div class="entity-icon" style=${Q(h)}>
            <ha-icon
              icon=${this.getCustomIcon(t)}
              style=${Q({})}
            ></ha-icon>
          </div>
          <div class="entity-info">
            ${this.hide_content_name ? "" : $`<div class="entity-name">
                  ${this.getCustomName(t) || this.computeLabel({ name: t })}
                </div>`}
            <div class="entity-state">
              ${this._shouldShowTotalNumbers(t) ? `${e.length}/${s.length} ${this.getStatusProperty(
      t
    )}` : this._shouldShowTotalEntities(t) ? `${s.length}` : `${e.length} ${this.getStatusProperty(t)}`}
            </div>
          </div>
        </div>
      </ha-tab-group-tab>
    `;
  }
  renderDeviceClassTab(i) {
    const { domain: t, deviceClass: e } = i, s = this._isOn(t, e), o = this._totalEntities(t, e);
    if (!(this._shouldShowTotalEntities(t, e) ? o : s).length) return $``;
    const r = this.getCustomColor(t, e), c = this.getCustomizationForType(
      R(t, e)
    ), l = this._handleDomainAction(t, e), d = Dt({
      hasHold: _t(
        (c == null ? void 0 : c.hold_action) ?? this._config.hold_action
      ),
      hasDoubleClick: _t(
        (c == null ? void 0 : c.double_tap_action) ?? this._config.double_tap_action
      )
    }), h = {
      horizontal: this._config.content_layout === "horizontal"
    }, u = this._getIconStyles("deviceClass", {
      color: r,
      square: this._config.square
    });
    return $`
      <ha-tab-group-tab
        slot="nav"
        panel=${e}
        @action=${l}
        .actionHandler=${d}
      >
        <div class="entity ${pt(h)}">
          <div class="entity-icon" style=${Q(u)}>
            <ha-icon icon=${this.getCustomIcon(t, e)}></ha-icon>
          </div>
          <div class="entity-info">
            ${this.hide_content_name ? "" : $`<div class="entity-name">
                  ${this.getCustomName(t, e) || this.computeLabel({ name: e })}
                </div>`}
            <div class="entity-state">
              ${this._shouldShowTotalNumbers(t, e) ? `${s.length}/${o.length} ${this.getStatusProperty(
      t,
      e
    )}` : this._shouldShowTotalEntities(t, e) ? `${o.length}` : `${s.length} ${this.getStatusProperty(
      t,
      e
    )}`}
            </div>
          </div>
        </div>
      </ha-tab-group-tab>
    `;
  }
  renderTab(i) {
    switch (i.type) {
      case "extra":
        return this.renderExtraTab(i);
      case "group":
        return this.renderGroupTab(i.ruleset, i.order);
      case "domain":
        return this.renderDomainTab(i);
      case "deviceClass":
        return this.renderDeviceClassTab(i);
    }
  }
  render() {
    const i = this.getExtraItems(), t = this.getGroupItems(), e = this.getDomainItems(), s = this.getDeviceClassItems(), o = this._computeSortedEntities(
      i,
      t,
      e,
      s
    ), n = {
      "no-scroll": !!this._config.no_scroll
    }, a = this.getPersonItems();
    return $`
      <ha-card>
        <ha-tab-group no-scroll-controls class=${pt(n)}>
          ${it(
      a,
      (r) => r.entity_id,
      (r) => {
        var u, m;
        const c = this.hass.states[r.entity_id], l = (c == null ? void 0 : c.state) !== "home", d = {
          horizontal: this._config.content_layout === "horizontal"
        }, h = {
          "border-radius": (u = this._config) != null && u.square ? "20%" : "50%",
          filter: l ? "grayscale(100%)" : "none"
        };
        return $`
                <ha-tab-group-tab
                  slot="nav"
                  panel=${r.entity_id}
                  @click="${() => this.showMoreInfo(r)}"
                >
                  <div class="entity ${pt(d)}">
                    <div class="entity-icon" style=${Q(h)}>
                      ${r.attributes.entity_picture ? $`<img
                            src=${r.attributes.entity_picture}
                            alt=${r.attributes.friendly_name || r.entity_id}
                            style=${Q(h)}
                          />` : $`<ha-icon
                            class="center"
                            icon=${r.attributes.icon || "mdi:account"}
                            style=${Q(h)}
                          ></ha-icon>`}
                    </div>
                    <div class="entity-info">
                      ${this.hide_content_name ? "" : $`<div class="entity-name">
                            ${((m = r.attributes.friendly_name) == null ? void 0 : m.split(" ")[0]) || ""}
                          </div>`}
                      <div class="entity-state">
                        ${this.getStatusProperty(
          "person",
          void 0,
          c == null ? void 0 : c.state
        )}
                      </div>
                    </div>
                  </div>
                </ha-tab-group-tab>
              `;
      }
    )}
          ${it(
      o,
      (r) => r.type === "extra" ? r.panel : r.type === "domain" ? r.domain : r.type === "deviceClass" ? `${r.domain}-${r.deviceClass}` : r.type === "group" ? `group-${r.group_id}` : "",
      (r) => this.renderTab(r)
    )}
        </ha-tab-group>
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
      ha-tab-group {
        --track-width: unset !important;
        padding: 6px 4px;
      }
      ha-tab-group-tab[active],
      ha-tab-group-tab.active {
        font-size: var(--ha-font-size-m);
        --wa-color-brand-on-quiet: var(
          --ha-tab-active-text-color,
          var(--primary-color)
        );
        --wa-color-neutral-on-quiet: var(--wa-color-brand-on-quiet);
        opacity: 0.8;
        color: inherit;
        --wa-space-l: 16px;
      }
      ha-tab-group-tab[active]:hover,
      ha-tab-group-tab.active:hover {
        color: var(--wa-color-brand-on-quiet) !important;
      }
      ha-tab-group::part(nav) {
        padding: 0 !important;
      }
      ha-tab-group::part(scroll-button) {
        display: none !important;
      }
      ha-tab-group-tab {
        pointer-events: auto;
      }
      ha-tab-group-tab * {
        pointer-events: none;
      }
      ha-tab-group-tab::part(base) {
        padding: 0 8px !important;
      }
      ha-tab-group.no-scroll::part(tabs) {
        display: flex;
        flex-wrap: wrap;
        overflow-x: visible !important;
        max-width: 100%;
        border-bottom: none !important;
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
        min-height: 2.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .entity-name {
        font-size: var(--ha-font-size-m);
        font-weight: var(--ha-font-weight-medium);
        line-height: var(--ha-line-height-normal);
        letter-spacing: 0.1px;
        color: var(--primary-text-color);
      }
      .entity-state {
        font-size: calc(var(--ha-font-size-s) * 0.9);
        font-weight: var(--ha-font-weight-normal);
        line-height: var(--ha-line-height-condensed);
        letter-spacing: 0.2px;
        color: var(--primary-text-color);
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
H([
  C({ attribute: !1 })
], L.prototype, "hass", 2);
H([
  C({ type: Object })
], L.prototype, "_config", 2);
H([
  D()
], L.prototype, "areas", 2);
H([
  D()
], L.prototype, "devices", 2);
H([
  D()
], L.prototype, "entities", 2);
H([
  D()
], L.prototype, "entitiesByDomain", 2);
H([
  D()
], L.prototype, "selectedDomain", 2);
H([
  D()
], L.prototype, "selectedDeviceClass", 2);
H([
  D()
], L.prototype, "hiddenEntities", 2);
H([
  D()
], L.prototype, "hiddenLabels", 2);
H([
  D()
], L.prototype, "hiddenAreas", 2);
H([
  D()
], L.prototype, "hide_person", 2);
H([
  D()
], L.prototype, "hide_content_name", 2);
H([
  D()
], L.prototype, "list_mode", 2);
H([
  D()
], L.prototype, "selectedGroup", 2);
L = H([
  Nt("status-card-plus")
], L);
var Ni = Object.defineProperty, ji = Object.getOwnPropertyDescriptor, Ut = (i, t, e, s) => {
  for (var o = s > 1 ? void 0 : s ? ji(t, e) : t, n = i.length - 1, a; n >= 0; n--)
    (a = i[n]) && (o = (s ? a(t, e, o) : a(o)) || o);
  return s && o && Ni(t, e, o), o;
};
class oe extends J {
  constructor() {
    super(...arguments), this.SelectOptions = [], this._entityKeys = /* @__PURE__ */ new WeakMap();
  }
  _getKey(t) {
    return this._entityKeys.has(t) || this._entityKeys.set(t, Math.random().toString()), this._entityKeys.get(t);
  }
  render() {
    if (!this.hass)
      return T;
    const t = new Set(
      (this.customizationkey || []).map((s) => s.type)
    ), e = this.SelectOptions.filter(
      (s) => !t.has(s.value)
    );
    return $`
      <div class="customization">
        ${this.customizationkey && it(
      this.customizationkey,
      (s) => this._getKey(s),
      (s, o) => {
        var n;
        return $`
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
                .value=${s.type}
                @closed=${(a) => a.stopPropagation()}
                @value-changed=${this._valueChanged}
              >
                <mwc-list-item .value=${s.type} selected disabled>
                  ${((n = this.SelectOptions.find((a) => a.value === s.type)) == null ? void 0 : n.label) || s.type}
                </mwc-list-item>
              </ha-select>
              <ha-icon-button
                .label=${this.hass.localize("ui.common.remove")}
                .path=${se}
                class="remove-icon"
                .index=${o}
                @click=${this._removeRow}
              ></ha-icon-button>
              <ha-icon-button
                .label=${this.hass.localize("ui.common.edit")}
                .path=${yi}
                class="edit-icon"
                .index=${o}
                @click=${this._editRow}
              ></ha-icon-button>
            </div>
          `;
      }
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
            @closed=${(s) => s.stopPropagation()}
            @click=${this._addRow}
          >
            ${e.map(
      (s) => $`<mwc-list-item .value=${s.value}
                  >${s.label}</mwc-list-item
                >`
    )}
          </ha-select>
        </div>
      </div>
    `;
  }
  _valueChanged(t) {
    if (!this.customizationkey || !this.hass)
      return;
    const e = t.detail.value, s = t.target.index, o = this.customizationkey.concat();
    o[s] = { ...o[s], type: e || "" }, M(this, "config-changed", o);
  }
  _removeRow(t) {
    t.stopPropagation();
    const e = t.currentTarget.index;
    if (e != null) {
      const s = this.customizationkey.concat();
      s.splice(e, 1), M(this, "config-changed", s);
    }
  }
  _editRow(t) {
    t.stopPropagation();
    const e = t.target.index;
    e != null && M(this, "edit-item", e);
  }
  _addRow(t) {
    if (t.stopPropagation(), !this.customizationkey || !this.hass)
      return;
    const e = this.shadowRoot.querySelector(
      ".add-customization"
    );
    if (!e || !e.value)
      return;
    const o = { type: e.value };
    M(this, "config-changed", [
      ...this.customizationkey,
      o
    ]), e.value = "";
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
Ut([
  C({ attribute: !1 })
], oe.prototype, "hass", 2);
Ut([
  C({ type: Array })
], oe.prototype, "SelectOptions", 2);
let Xt = class extends oe {
  constructor() {
    super(...arguments), this.customizationChangedEvent = "config-changed";
  }
  get customizationkey() {
    return this.customization;
  }
};
Ut([
  C({ attribute: !1 })
], Xt.prototype, "customization", 2);
Xt = Ut([
  Nt("status-items-editor")
], Xt);
var Fi = Object.defineProperty, Ri = Object.getOwnPropertyDescriptor, rt = (i, t, e, s) => {
  for (var o = s > 1 ? void 0 : s ? Ri(t, e) : t, n = i.length - 1, a; n >= 0; n--)
    (a = i[n]) && (o = (s ? a(t, e, o) : a(o)) || o);
  return s && o && Fi(t, e, o), o;
};
let Y = class extends J {
  constructor() {
    super(...arguments), this.useSensorSchema = !1, this._schemadomain = E(() => {
      const i = [
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
        { name: "tap_action", selector: { ui_action: { actions: i } } },
        { name: "double_tap_action", selector: { ui_action: { actions: i } } },
        { name: "hold_action", selector: { ui_action: { actions: i } } },
        { name: "popup_card", selector: { object: {} } }
      ];
    }), this._schemaEntity = E(() => {
      var e;
      const i = ((e = this.config) == null ? void 0 : e.type) || "", t = [
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
              selector: { state: { entity_id: i } }
            }
          ]
        },
        {
          name: "state_content",
          selector: { ui_state_content: { entity_id: i } }
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
    var e;
    if (!this.hass || !this.config)
      return $``;
    (e = this._config) != null && e.invert_state || (this._config = {
      ...this._config,
      type: this.config.type || "",
      invert_state: this.config.invert_state || "false",
      icon_color: this.config.icon_color || void 0,
      tap_action: this.config.tap_action || void 0,
      double_tap_action: this.config.double_tap_action || void 0,
      hold_action: this.config.hold_action || void 0
    });
    let i;
    switch (this.getSchema) {
      case "domain":
        i = this._schemadomain();
        break;
      case "entity":
        i = this._schemaEntity();
        break;
    }
    const t = {
      ...this._config
    };
    return $`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${i}
        .computeLabel=${(s) => Rt(this.hass, s)}
        @value-changed=${this._valueChangedSchema}
      ></ha-form>
    `;
  }
  _normalizeType(i) {
    if (!i) return;
    const t = i.trim();
    if (!t) return;
    const e = t.toLowerCase();
    if (N.includes(e))
      return e;
    for (const s of N)
      if (q(s).toLowerCase() === e)
        return s;
    if (t.includes(" - ")) {
      const [s, o] = t.split(" - "), n = this._normalizeType(s), a = o.trim().toLowerCase().replace(/\s+/g, "_");
      return n && a ? `${n}.${a}` : void 0;
    }
    if (e.includes(".")) {
      const [s, o] = e.split("."), n = this._normalizeType(s);
      return n && o ? `${n}.${o}` : n;
    }
    return e.replace(/\s+/g, "_");
  }
  _valueChangedSchema(i) {
    if (!this.config)
      return;
    i.stopPropagation();
    const t = { ...i.detail.value };
    if (typeof t.state_content == "string") {
      const o = t.state_content.trim();
      o.includes(",") ? t.state_content = o.split(",").map((n) => n.trim()).filter((n) => n.length > 0) : o.length === 0 && delete t.state_content;
    }
    const e = this._normalizeType(t.type ?? this.config.type);
    e && (t.type = e);
    const s = {
      ...this.config,
      ...t
    };
    this._config = s, this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: s
      })
    );
  }
  setConfig(i) {
    this._config = {
      ...i,
      customization: i.customization ?? []
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
rt([
  C({ attribute: !1 })
], Y.prototype, "config", 2);
rt([
  C({ attribute: !1 })
], Y.prototype, "hass", 2);
rt([
  C({ attribute: !1 })
], Y.prototype, "lovelace", 2);
rt([
  C({ type: Boolean })
], Y.prototype, "useSensorSchema", 2);
rt([
  C({ type: Number })
], Y.prototype, "index", 2);
rt([
  D()
], Y.prototype, "getSchema", 2);
rt([
  D()
], Y.prototype, "_config", 2);
Y = rt([
  Nt("status-card-plus-item-editor")
], Y);
var Ui = Object.defineProperty, Bi = Object.getOwnPropertyDescriptor, mt = (i, t, e, s) => {
  for (var o = s > 1 ? void 0 : s ? Bi(t, e) : t, n = i.length - 1, a; n >= 0; n--)
    (a = i[n]) && (o = (s ? a(t, e, o) : a(o)) || o);
  return s && o && Ui(t, e, o), o;
};
let at = class extends J {
  constructor() {
    super(...arguments), this._subElementEditorDomain = void 0, this._subElementEditorEntity = void 0, this.rulesets = [
      {
        group_id: "",
        group_icon: "",
        group_status: "",
        rules: [{ key: "", value: "" }]
      }
    ], this.computeLabel = E(
      (i, t, e) => Rt(this.hass, i, t, e)
    ), this._filterInitialized = !1, this._lastFilter = {
      area: [],
      floor: [],
      label: []
    }, this._schema = E(
      (i, t, e, s) => {
        const o = this.computeLabel({ name: "area" }), n = this.computeLabel({ name: "floor" }), a = this.computeLabel({ name: "name" }), r = this.computeLabel({ name: "state" }), c = [
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
              { name: "tap_action", selector: { ui_action: { actions: c } } },
              { name: "double_tap_action", selector: { ui_action: { actions: c } } },
              { name: "hold_action", selector: { ui_action: { actions: c } } }
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
              ...i === "area" && e === !1 ? [
                { name: "multiple_areas", selector: { boolean: {} } },
                { name: "area", selector: { area: {} } }
              ] : [],
              ...i === "area" && e === !0 ? [
                { name: "multiple_areas", selector: { boolean: {} } },
                { name: "area", selector: { area: { multiple: !0 } } }
              ] : [],
              ...i === "floor" && s === !1 ? [
                { name: "multiple_floors", selector: { boolean: {} } },
                { name: "floor", selector: { floor: {} } }
              ] : [],
              ...i === "floor" && s === !0 ? [
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
                      { value: "state", label: r }
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
    ), this._toggleschema = E((i) => [
      {
        name: "content",
        selector: {
          select: {
            reorder: !0,
            multiple: !0,
            custom_value: !0,
            options: i
          }
        }
      }
    ]), this._entitiesSchema = E((i) => {
      const t = this.computeLabel({ name: "area" }), e = this.computeLabel({ name: "label" }), s = this.computeLabel({ name: "entity" });
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
                    { value: "label", label: e },
                    { value: "area", label: t }
                  ]
                }
              }
            }
          ]
        },
        ...i === "label" ? [
          {
            name: "hidden_labels",
            selector: { label: { multiple: !0 } }
          }
        ] : [],
        ...i === "area" ? [
          {
            name: "hidden_areas",
            selector: { area: { multiple: !0 } }
          }
        ] : []
      ];
    }), this._buildToggleOptions = E(
      (i, t) => this._buildOptions("toggle", i, t)
    ), this._memoizedClassesForArea = E(
      (i, t, e) => this._classesForArea(i, t, e)
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
    }, this._removeRuleset = (i) => {
      this.rulesets = this.rulesets.filter((t, e) => e !== i), this._updateConfigFromRulesets();
    }, this._toggleEntityHidden = (i) => {
      var s;
      const t = new Set(((s = this._config) == null ? void 0 : s.hidden_entities) ?? []);
      t.has(i) ? t.delete(i) : t.add(i);
      const e = Array.from(t);
      this._config = {
        ...this._config || {},
        hidden_entities: e
      }, M(this, "config-changed", { config: { ...this._config } });
    };
  }
  setConfig(i) {
    this._config = {
      ...i,
      columns: i.columns ?? 4,
      hide_person: i.hide_person ?? !1,
      list_mode: i.list_mode ?? !1,
      hide_content_name: i.hide_content_name ?? !1,
      customization: i.customization ?? []
    }, this._loadRulesetsFromConfig(), this.requestUpdate();
  }
  _updateAreaFloorInConfig() {
    if (!this._config || !this._config.filter) return;
    this._config.filter === "area" && this._config.floor !== void 0 ? (delete this._config.floor, M(this, "config-changed", { config: { ...this._config } })) : this._config.filter === "floor" && this._config.area !== void 0 && (delete this._config.area, M(this, "config-changed", { config: { ...this._config } }));
  }
  async updated(i) {
    super.updated(i);
    let t = !1;
    if (!(!this.hass || !this._config) && i.has("_config")) {
      if (this._updateAreaFloorInConfig(), (this._config.label_filter === !1 && this._config.label !== void 0 || Array.isArray(this._config.label) && this._config.label.length === 0) && (delete this._config.label, t = !0), this._config.hide_filter && !["entity", "label", "area"].includes(this._config.hide_filter)) {
        const _ = (/* @__PURE__ */ new Map([
          [this.computeLabel({ name: "entity" }), "entity"],
          [this.computeLabel({ name: "label" }), "label"],
          [this.computeLabel({ name: "area" }), "area"]
        ])).get(this._config.hide_filter);
        _ && (this._config = { ...this._config, hide_filter: _ }, t = !0);
      }
      const e = i.get("_config"), s = (e == null ? void 0 : e.extra_entities) ?? [], o = this._config.extra_entities ?? [], n = (e == null ? void 0 : e.content) ?? [], a = this._config.content ?? [], r = Array.isArray(this._config.area) ? [...this._config.area] : this._config.area ? [this._config.area] : [], c = Array.isArray(this._config.floor) ? [...this._config.floor] : this._config.floor ? [this._config.floor] : [], l = Array.isArray(this._config.label) ? [...this._config.label] : [];
      this._filterInitialized || (this._lastFilter = {
        area: r,
        floor: c,
        label: l
      }, this._filterInitialized = !0);
      const d = this._lastFilter.area, h = this._lastFilter.floor, u = this._lastFilter.label, m = !tt(u, l), f = !tt(h, c);
      if (!tt(d, r) || f || m) {
        const p = this.possibleToggleDomains, _ = [];
        for (const v of Object.keys(st)) {
          const g = st[v];
          for (const y of Object.keys(g))
            y !== "on" && y !== "off" && _.push(`${q(v)} - ${y}`);
          _.push(q(v));
        }
        const A = p.sort((v, g) => {
          const y = _.indexOf(v), P = _.indexOf(g);
          return (y === -1 ? _.length : y) - (P === -1 ? _.length : P);
        });
        this._config = {
          ...this._config,
          content: [...A]
        }, this._lastFilter = {
          area: [...r],
          floor: [...c],
          label: [...l]
        }, t = !0;
      }
      if (this._config.rulesets && Array.isArray(this._config.rulesets)) {
        const p = this._config.rulesets.filter(
          (g) => Object.keys(g).some(
            (y) => y !== "group_id" && y !== "group_icon" && y !== "group_status" && g[y] !== void 0 && g[y] !== ""
          )
        ).map((g) => g.group_id).filter((g) => g && g.length > 1);
        let _ = Array.isArray(this._config.content) ? [...this._config.content] : [];
        _ = _.filter((g) => !p.includes(g));
        const A = this._config.extra_entities ?? [];
        let v = 0;
        for (let g = 0; g < _.length; g++) {
          if (!A.includes(_[g])) {
            v = g;
            break;
          }
          v = g + 1;
        }
        _ = [
          ..._.slice(0, v),
          ...p.filter((g) => !_.includes(g)),
          ..._.slice(v)
        ], tt(_, this._config.content ?? []) || (this._config = {
          ...this._config,
          content: _
        }, t = !0);
      }
      if (!tt(s, o)) {
        let p = [...a];
        o.forEach((_) => {
          p.includes(_) || p.unshift(_);
        }), p = p.filter(
          (_) => !_.includes(".") || o.includes(_)
        ), tt(p, a) || (this._config = {
          ...this._config,
          content: p
        }, t = !0);
      }
      if (!tt(n, a)) {
        let p = [...o];
        p = p.filter((_) => a.includes(_)), tt(p, o) || (this._config = {
          ...this._config,
          extra_entities: p
        }, t = !0);
      }
      t && (M(this, "config-changed", { config: { ...this._config } }), this.requestUpdate());
    }
  }
  getGroupSchema(i) {
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
      ...i.rules.map((t, e) => {
        const s = i.rules.map((n, a) => a !== e ? n.key : null).filter((n) => n), o = this.ruleKeySelector.options.filter(
          ([n]) => !s.includes(n) || n === t.key
        );
        return {
          type: "grid",
          schema: [
            {
              type: "select",
              name: `key_${e}`,
              options: o
            },
            {
              name: `value_${e}`,
              selector: this.filterValueSelector[t.key] ?? { text: {} }
            }
          ]
        };
      })
    ];
  }
  _valueChanged(i) {
    this._config = i.detail.value, this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config }
      })
    );
  }
  get possibleToggleDomains() {
    var i, t, e;
    return this._memoizedClassesForArea(
      ((i = this._config) == null ? void 0 : i.area) || [],
      ((t = this._config) == null ? void 0 : t.floor) || [],
      ((e = this._config) == null ? void 0 : e.label) || []
    );
  }
  get toggleSelectOptions() {
    var i;
    return this._buildToggleOptions(
      this.possibleToggleDomains,
      ((i = this._config) == null ? void 0 : i.content) || []
    );
  }
  get contentSelectOptions() {
    const i = this._config.content ?? [];
    return this._buildOptions("toggle", i, i);
  }
  _buildOptions(i, t, e) {
    var r;
    const s = ((r = this.hass) == null ? void 0 : r.states) || {}, o = [...t, ...e], n = /* @__PURE__ */ new Map();
    for (const c of o) {
      if (!c) continue;
      const l = this._normalizeType(c);
      if (n.has(l)) continue;
      const d = this._labelForType(l, s);
      n.set(l, d);
    }
    const a = Array.from(n.entries()).map(
      ([c, l]) => ({ value: c, label: l })
    );
    return a.sort((c, l) => {
      const d = c.value.includes("."), h = l.value.includes(".");
      return d && !h ? -1 : !d && h ? 1 : He(
        c.label,
        l.label,
        this.hass.locale.language
      );
    }), a;
  }
  _normalizeType(i) {
    const t = i.trim(), e = t.toLowerCase();
    if (N.includes(e))
      return e;
    for (const s of N)
      if (q(s).toLowerCase() === e)
        return s;
    if (t.includes(" - ")) {
      const [s, o] = t.split(" - "), n = this._normalizeType(s), a = o.trim().toLowerCase().replace(/\s+/g, "_");
      return `${n}.${a}`;
    }
    if (e.includes(".")) {
      const [s, o] = e.split("."), n = this._normalizeType(s);
      return o ? `${n}.${o}` : n;
    }
    return e.replace(/\s+/g, "_");
  }
  _labelForType(i, t) {
    var o, n;
    const e = this._normalizeType(i);
    if (e.includes(".")) {
      const [a, r] = e.split("."), c = t == null ? void 0 : t[e];
      if ((o = c == null ? void 0 : c.attributes) != null && o.friendly_name)
        return c.attributes.friendly_name;
      const l = this.hass.localize(`component.${a}.entity_component._.name`) || q(a), d = this.hass.localize(
        `ui.dialogs.entity_registry.editor.device_classes.${a}.${r}`
      ) || r.replace(/_/g, " ");
      return `${l} - ${d}`;
    }
    if (N.includes(e))
      return this.hass.localize(`component.${e}.entity_component._.name`) || q(e);
    const s = t == null ? void 0 : t[e];
    return (n = s == null ? void 0 : s.attributes) != null && n.friendly_name ? s.attributes.friendly_name : q(e);
  }
  _parseTypePair(i) {
    const t = i.match(/^(.+?)\s*-\s*(.+)$/);
    if (!t) return null;
    const e = t[1].toLowerCase().replace(/\s+/g, "_"), s = t[2].toLowerCase();
    return { domain: e, deviceClass: s };
  }
  _classesForArea(i, t, e) {
    var l;
    const s = ((l = this._config) == null ? void 0 : l.extra_entities) || [];
    let o = Object.values(this.hass.entities).filter(
      (d) => !d.hidden && N.includes(U(d.entity_id))
    );
    if (i && i.length > 0)
      o = o.filter(
        (d) => {
          var h;
          return i.includes(d.area_id) || d.device_id && i.includes((h = this.hass.devices[d.device_id]) == null ? void 0 : h.area_id);
        }
      );
    else if (t && t.length > 0) {
      const d = Object.values(this.hass.areas).filter(
        (h) => h.floor_id !== void 0 && t.includes(h.floor_id)
      ).map((h) => h.area_id);
      o = o.filter(
        (h) => {
          var u;
          return h.area_id !== void 0 && d.includes(h.area_id) || h.device_id && ((u = this.hass.devices[h.device_id]) == null ? void 0 : u.area_id) !== void 0 && d.includes(
            this.hass.devices[h.device_id].area_id
          );
        }
      );
    }
    e && e.length > 0 && (o = o.filter(
      (d) => {
        var h, u;
        return ((h = d.labels) == null ? void 0 : h.some((m) => e.includes(m))) || d.device_id && Array.isArray((u = this.hass.devices[d.device_id]) == null ? void 0 : u.labels) && this.hass.devices[d.device_id].labels.some(
          (m) => e.includes(m)
        );
      }
    ));
    const n = [];
    for (const d of Object.keys(st)) {
      const h = st[d];
      for (const u of Object.keys(h))
        u !== "on" && u !== "off" && n.push(`${q(d)} - ${u}`);
      n.push(q(d));
    }
    const a = new Set(
      o.map((d) => U(d.entity_id)).filter((d) => d !== "binary_sensor" && d !== "cover" && d !== "switch").map((d) => q(d))
    ), r = /* @__PURE__ */ new Set();
    o.filter(
      (d) => ["binary_sensor", "cover", "switch"].includes(
        U(d.entity_id)
      )
    ).forEach((d) => {
      var m;
      const h = U(d.entity_id), u = ((m = this.hass.states[d.entity_id]) == null ? void 0 : m.attributes.device_class) || "";
      u && r.add(`${q(h)} - ${u}`);
    });
    const c = [...r];
    return [...a, ...c, ...s].sort(
      (d, h) => {
        const u = n.indexOf(d), m = n.indexOf(h);
        return (u === -1 ? n.length : u) - (m === -1 ? n.length : m);
      }
    );
  }
  _itemChanged(i, t, e) {
    if (i.stopPropagation(), !this._config || !this.hass)
      return;
    const s = t == null ? void 0 : t.index;
    if (s != null) {
      const o = [...this._config.customization ?? []];
      o[s] = i.detail, M(this, "config-changed", {
        config: { ...this._config, customization: o }
      });
    }
  }
  _editItem(i, t) {
    if (i.stopPropagation(), !this._config || !this.hass)
      return;
    const e = i.detail;
    this[`_subElementEditor${t}`] = { index: e };
  }
  _edit_itemDomain(i) {
    const t = i.detail, s = (this._config.customization ?? [])[t];
    let o;
    s && s.type && s.type.includes(".") ? o = "Entity" : o = "Domain", this._editItem(i, o);
  }
  _itemChangedDomain(i) {
    this._itemChanged(i, this._subElementEditorDomain, "customization");
  }
  _itemChangedEntity(i) {
    this._itemChanged(i, this._subElementEditorEntity, "customization");
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
  _renderSubElementEditor(i, t, e) {
    var r, c, l, d, h, u;
    const s = `_subElementEditor${i.charAt(0).toUpperCase() + i.slice(1)}`, o = this[s], n = ((l = (c = (r = this._config) == null ? void 0 : r.customization) == null ? void 0 : c[(o == null ? void 0 : o.index) ?? 0]) == null ? void 0 : l.type) ?? "unknown", a = this._labelForType(n, ((d = this.hass) == null ? void 0 : d.states) || {});
    return $`
      <div class="header">
        <div class="back-title">
          <ha-icon-button
            slot="trigger"
            .label=${this.hass.localize("ui.common.back")}
            .path=${pi}
            @click=${t}
          ></ha-icon-button>
          <span slot="title">${a}</span>
        </div>
      </div>
      <status-card-plus-item-editor
        .hass=${this.hass}
        .lovelace=${this.lovelace}
        .config=${((u = (h = this._config) == null ? void 0 : h.customization) == null ? void 0 : u[(o == null ? void 0 : o.index) ?? 0]) ?? {}}
        .getSchema=${i}
        .index=${(o == null ? void 0 : o.index) ?? 0}
        @config-changed=${e}
      >
      </status-card-plus-item-editor>
    `;
  }
  _customizationChanged(i, t) {
    i.stopPropagation(), !(!this._config || !this.hass) && M(this, "config-changed", {
      config: {
        ...this._config,
        customization: i.detail
      }
    });
  }
  _customizationChangedDomain(i) {
    this._customizationChanged(i, "domain");
  }
  _loadRulesetsFromConfig() {
    this.rulesets = (this._config.rulesets ?? []).map((i) => {
      var e;
      const t = Object.keys(i).filter(
        (s) => s !== "group_id" && s !== "group_icon" && s !== "group_status" && i[s] !== void 0
      ).map((s) => ({
        key: s,
        value: i[s] ?? ""
      }));
      return (t.length === 0 || ((e = t[t.length - 1]) == null ? void 0 : e.key) !== "") && t.push({ key: "", value: "" }), {
        group_id: i.group_id ?? "",
        group_icon: i.group_icon ?? "",
        group_status: i.group_status ?? "",
        rules: t
      };
    });
  }
  _saveRulesetsToConfig() {
    const i = this.rulesets.map((t) => {
      const e = t.rules.reduce((s, o) => (o.key && o.key !== "" && (s[o.key] = o.value ?? ""), s), {});
      return {
        group_id: t.group_id ?? "",
        group_icon: t.group_icon ?? "",
        group_status: t.group_status ?? "",
        ...e
      };
    });
    this._config = {
      ...this._config,
      rulesets: i
    }, M(this, "config-changed", { config: this._config });
  }
  _updateConfigFromRulesets() {
    this._saveRulesetsToConfig();
  }
  get ruleKeySelector() {
    const i = [
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
    return i.sort((t, e) => t[1].localeCompare(e[1], this.hass.locale.language)), {
      type: "select",
      options: i
    };
  }
  _groupFormData(i) {
    const t = {
      group_id: i.group_id,
      group_icon: i.group_icon,
      group_status: i.group_status ?? ""
    };
    return i.rules.forEach((e, s) => {
      t[`key_${s}`] = e.key, t[`value_${s}`] = e.value;
    }), t;
  }
  _groupValueChanged(i, t) {
    var o;
    const { value: e } = i.detail, s = Object.keys(e).filter((n) => n.startsWith("key_")).map((n) => {
      const a = n.split("_")[1];
      return {
        key: e[`key_${a}`] ?? "",
        value: e[`value_${a}`] ?? ""
      };
    });
    (s.length === 0 || ((o = s[s.length - 1]) == null ? void 0 : o.key) !== "") && s.push({ key: "", value: "" }), this.rulesets = this.rulesets.map(
      (n, a) => a === t ? {
        group_id: e.group_id ?? "",
        group_icon: e.group_icon ?? "",
        group_status: e.group_status ?? "",
        rules: s
      } : n
    ), this._updateConfigFromRulesets();
  }
  _groupAllEntitiesByDomain() {
    var d, h, u, m, f, b, p, _, A, v, g, y, P;
    const i = Object.values(((d = this.hass) == null ? void 0 : d.entities) || {}), t = Object.values(((h = this.hass) == null ? void 0 : h.devices) || {}), e = (u = this.hass) != null && u.areas ? Object.values(this.hass.areas) : [], s = {
      area: Array.isArray((m = this._config) == null ? void 0 : m.area) ? this._config.area : (f = this._config) != null && f.area ? [this._config.area] : [],
      floor: Array.isArray((b = this._config) == null ? void 0 : b.floor) ? this._config.floor : (p = this._config) != null && p.floor ? [this._config.floor] : [],
      label: Array.isArray((_ = this._config) == null ? void 0 : _.label) ? this._config.label : [],
      hiddenAreas: ((A = this._config) == null ? void 0 : A.hidden_areas) ?? [],
      hiddenLabels: ((v = this._config) == null ? void 0 : v.hidden_labels) ?? [],
      hiddenEntities: ((g = this._config) == null ? void 0 : g.hidden_entities) ?? []
    }, o = Pe(
      i,
      t,
      e,
      ((y = this.hass) == null ? void 0 : y.states) || {},
      s,
      N
    ), n = Object.fromEntries(
      Object.entries(o).map(([k, S]) => [
        k,
        S.map((x) => x.entity_id)
      ])
    ), a = this._hiddenEntitiesByDomain(), r = ((P = this.hass) == null ? void 0 : P.states) || {}, c = Array.from(
      /* @__PURE__ */ new Set([...Object.keys(n), ...Object.keys(a)])
    ).filter((k) => N.includes(k)), l = Ht(
      r,
      this.hass.locale.language
    );
    return c.sort((k, S) => k.localeCompare(S)).map((k) => {
      const S = /* @__PURE__ */ new Set([
        ...n[k] || [],
        ...a[k] || []
      ]);
      return { domain: k, entities: Array.from(S).sort(l) };
    });
  }
  _domainLabel(i) {
    var t, e;
    return ((e = (t = this.hass) == null ? void 0 : t.localize) == null ? void 0 : e.call(t, `component.${i}.entity_component._.name`)) || i;
  }
  _isHiddenEntity(i) {
    var e;
    const t = ((e = this._config) == null ? void 0 : e.hidden_entities) ?? [];
    return Array.isArray(t) && t.includes(i);
  }
  _getDeviceClassLabel(i, t) {
    if (!t || t === "other")
      return this.hass.localize("ui.dialogs.helper_settings.generic.other") ?? "Other";
    const e = `ui.dialogs.entity_registry.editor.device_classes.${i}.${t}`;
    return this.hass.localize(e) || t;
  }
  _groupByDeviceClass(i, t) {
    var a, r, c;
    const e = ((a = this.hass) == null ? void 0 : a.states) || {}, s = {};
    for (const l of t) {
      const d = ((c = (r = e[l]) == null ? void 0 : r.attributes) == null ? void 0 : c.device_class) || "";
      d && (s[d] || (s[d] = []), s[d].push(l));
    }
    const o = Ht(
      e,
      this.hass.locale.language
    );
    return Object.keys(s).sort((l, d) => l.localeCompare(d)).map((l) => ({
      deviceClass: l,
      label: this._getDeviceClassLabel(i, l),
      entities: s[l].slice().sort(o)
    }));
  }
  _hiddenEntitiesByDomain() {
    var h, u, m, f, b, p, _;
    const i = {}, t = Array.isArray((h = this._config) == null ? void 0 : h.hidden_entities) ? this._config.hidden_entities : [];
    if (t.length === 0) return i;
    const e = ((u = this.hass) == null ? void 0 : u.entities) || {}, s = ((m = this.hass) == null ? void 0 : m.devices) || {}, o = (f = this.hass) != null && f.areas ? Object.values(this.hass.areas) : [], n = (b = this._config) == null ? void 0 : b.area, a = (p = this._config) == null ? void 0 : p.floor, r = (_ = this._config) == null ? void 0 : _.label, c = n ? Array.isArray(n) ? n : [n] : [], l = a ? Array.isArray(a) ? a : [a] : [], d = r ? Array.isArray(r) ? r : [r] : [];
    for (const A of t) {
      const v = U(A);
      if (!N.includes(v)) continue;
      const g = e[A], y = g != null && g.device_id ? s[g.device_id] : void 0;
      if (((g == null ? void 0 : g.area_id) != null || (y == null ? void 0 : y.area_id) != null) && !(d.length && !(Array.isArray(g == null ? void 0 : g.labels) && g.labels.some((S) => d.includes(S)) || Array.isArray(y == null ? void 0 : y.labels) && y.labels.some((S) => d.includes(S)))) && !(c.length && !(g != null && g.area_id && c.includes(g.area_id) || y != null && y.area_id && c.includes(y.area_id)))) {
        if (l.length) {
          const k = (g == null ? void 0 : g.area_id) && o.some(
            (x) => x.area_id === g.area_id && x.floor_id && l.includes(x.floor_id)
          ), S = (y == null ? void 0 : y.area_id) && o.some(
            (x) => x.area_id === y.area_id && x.floor_id && l.includes(x.floor_id)
          );
          if (!k && !S) continue;
        }
        i[v] || (i[v] = []), i[v].push(A);
      }
    }
    return i;
  }
  _domainIcon(i, t = "on", e) {
    const s = st;
    if (i in s) {
      const o = s[i];
      return typeof o == "string" ? o : e && o[e] ? o[e][t === "off" ? "off" : "on"] || o[e] : o[t === "off" ? "off" : "on"] || Object.values(o)[0];
    }
    return "mdi:help-circle";
  }
  render() {
    var o, n;
    if (!this.hass || !this._config)
      return $`<div>Loading...</div>`;
    const i = this._toggleschema(this.toggleSelectOptions), t = this._schema(
      this._config.filter ?? "",
      this._config.label_filter ?? !1,
      this._config.multiple_areas ?? !1,
      this._config.multiple_floors ?? !1
    ), s = {
      content: this.possibleToggleDomains,
      ...this._config
    };
    return this._subElementEditorDomain ? this._renderSubElementEditorDomain() : this._subElementEditorEntity ? this._renderSubElementEditorEntity() : $`
      <ha-form
        .hass=${this.hass}
        .data=${s}
        .schema=${t}
        .computeLabel=${this.computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <ha-expansion-panel outlined class="main">
        <div slot="header" role="heading" aria-level="3">
          <ha-svg-icon class="secondary" .path=${we}></ha-svg-icon>
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

          ${(((n = this._config) == null ? void 0 : n.hide_filter) ?? "") === "entity" ? $`
                ${this._groupAllEntitiesByDomain().map(
      (a) => $`
                    <ha-expansion-panel outlined class="domain-panel">
                      <div slot="header" class="domain-header">
                        <ha-icon
                          .icon=${this._domainIcon(a.domain, "on")}
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
        (r) => $`
                                <ha-expansion-panel
                                  outlined
                                  class="domain-panel"
                                >
                                  <div slot="header" class="dc-header">
                                    <ha-icon
                                      .icon=${this._domainIcon(
          a.domain,
          "on"
        )}
                                    ></ha-icon>
                                    <span class="dc-title">${r.label}</span>
                                  </div>
                                  <div class="content">
                                    ${r.entities.map(
          (c) => {
            var l, d;
            return $`
                                        <div class="entity-row">
                                          <span class="entity-name">
                                            ${((d = (l = this.hass.states[c]) == null ? void 0 : l.attributes) == null ? void 0 : d.friendly_name) || c}
                                          </span>
                                          <ha-icon-button
                                            .path=${this._isHiddenEntity(c) ? be : $e}
                                            .label=${this._isHiddenEntity(c) ? this.hass.localize(
              "ui.common.show"
            ) ?? "Show" : this.hass.localize(
              "ui.common.hide"
            ) ?? "Hide"}
                                            @click=${() => this._toggleEntityHidden(c)}
                                          ></ha-icon-button>
                                        </div>
                                      `;
          }
        )}
                                  </div>
                                </ha-expansion-panel>
                              `
      ) : a.entities.map(
        (r) => {
          var c, l;
          return $`
                                <div class="entity-row">
                                  <span class="entity-name">
                                    ${((l = (c = this.hass.states[r]) == null ? void 0 : c.attributes) == null ? void 0 : l.friendly_name) || r}
                                  </span>
                                  <ha-icon-button
                                    .path=${this._isHiddenEntity(r) ? be : $e}
                                    .label=${this._isHiddenEntity(r) ? this.hass.localize("ui.common.show") ?? "Show" : this.hass.localize("ui.common.hide") ?? "Hide"}
                                    @click=${() => this._toggleEntityHidden(r)}
                                  ></ha-icon-button>
                                </div>
                              `;
        }
      )}
                      </div>
                    </ha-expansion-panel>
                  `
    )}
              ` : $``}
        </div>
      </ha-expansion-panel>

      <ha-expansion-panel outlined class="main">
        <div slot="header" role="heading" aria-level="3">
          <ha-svg-icon
            class="secondary"
            .path=${gi}
          ></ha-svg-icon>
          Smart Groups
        </div>
        <div class="content">
          ${this.rulesets.map(
      (a, r) => $`
              <ha-expansion-panel class="group-panel main" outlined>
                <div slot="header" class="group-header">
                  ${a.group_id ? a.group_id : `${this.hass.localize(
        "component.group.entity_component._.name"
      )} ${r + 1}`}
                  <span class="group-actions">
                    <ha-icon-button
                      slot="trigger"
                      .label=${this.hass.localize("ui.common.remove")}
                      .path=${se}
                      @click=${() => this._removeRuleset(r)}
                    ></ha-icon-button>
                  </span>
                </div>
                <div class="content">
                  <ha-form
                    .hass=${this.hass}
                    .data=${this._groupFormData(a)}
                    .schema=${this.getGroupSchema(a)}
                    .computeLabel=${this.computeLabel}
                    @value-changed=${(c) => this._groupValueChanged(c, r)}
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
          <ha-svg-icon class="secondary" .path=${we}></ha-svg-icon>
          ${this.computeLabel.bind(this)({ name: "edit_domains_dc" })}
        </div>
        <div class="content">
          <ha-form
            .hass=${this.hass}
            .data=${s}
            .schema=${i}
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
mt([
  C({ attribute: !1 })
], at.prototype, "hass", 2);
mt([
  C({ attribute: !1 })
], at.prototype, "lovelace", 2);
mt([
  C({ type: Object })
], at.prototype, "_config", 2);
mt([
  D()
], at.prototype, "_subElementEditorDomain", 2);
mt([
  D()
], at.prototype, "_subElementEditorEntity", 2);
mt([
  D()
], at.prototype, "rulesets", 2);
at = mt([
  Nt("status-card-plus-editor")
], at);
console.info(
  `%c STATUS-CARD-PLUS %c ${je.version} `,
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

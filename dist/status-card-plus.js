const Pe = "v3.0.2-beta", Ne = {
  version: Pe
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ot = globalThis, Yt = Ot.ShadowRoot && (Ot.ShadyCSS === void 0 || Ot.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Qt = Symbol(), re = /* @__PURE__ */ new WeakMap();
let ke = class {
  constructor(t, i, s) {
    if (this._$cssResult$ = !0, s !== Qt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = i;
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (Yt && t === void 0) {
      const s = i !== void 0 && i.length === 1;
      s && (t = re.get(i)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && re.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const je = (e) => new ke(typeof e == "string" ? e : e + "", void 0, Qt), vt = (e, ...t) => {
  const i = e.length === 1 ? e[0] : t.reduce(((s, o, n) => s + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + e[n + 1]), e[0]);
  return new ke(i, e, Qt);
}, Fe = (e, t) => {
  if (Yt) e.adoptedStyleSheets = t.map(((i) => i instanceof CSSStyleSheet ? i : i.styleSheet));
  else for (const i of t) {
    const s = document.createElement("style"), o = Ot.litNonce;
    o !== void 0 && s.setAttribute("nonce", o), s.textContent = i.cssText, e.appendChild(s);
  }
}, ce = Yt ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const s of t.cssRules) i += s.cssText;
  return je(i);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Re, defineProperty: Ue, getOwnPropertyDescriptor: Be, getOwnPropertyNames: qe, getOwnPropertySymbols: Ve, getPrototypeOf: We } = Object, it = globalThis, le = it.trustedTypes, Ge = le ? le.emptyScript : "", qt = it.reactiveElementPolyfillSupport, Ct = (e, t) => e, Mt = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Ge : null;
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
} }, te = (e, t) => !Re(e, t), de = { attribute: !0, type: String, converter: Mt, reflect: !1, useDefault: !1, hasChanged: te };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), it.litPropertyMetadata ?? (it.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let pt = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, i = de) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(t, i), !i.noAccessor) {
      const s = Symbol(), o = this.getPropertyDescriptor(t, s, i);
      o !== void 0 && Ue(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, i, s) {
    const { get: o, set: n } = Be(this.prototype, t) ?? { get() {
      return this[i];
    }, set(a) {
      this[i] = a;
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
    if (this.hasOwnProperty(Ct("elementProperties"))) return;
    const t = We(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ct("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ct("properties"))) {
      const i = this.properties, s = [...qe(i), ...Ve(i)];
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
    return Fe(t, this.constructor.elementStyles), t;
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
      const r = s.getPropertyOptions(o), c = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((n = r.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? r.converter : Mt;
      this._$Em = o;
      const l = c.fromAttribute(i, r.type);
      this[o] = l ?? ((a = this._$Ej) == null ? void 0 : a.get(o)) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, i, s) {
    var o;
    if (t !== void 0) {
      const n = this.constructor, a = this[t];
      if (s ?? (s = n.getPropertyOptions(t)), !((s.hasChanged ?? te)(a, i) || s.useDefault && s.reflect && a === ((o = this._$Ej) == null ? void 0 : o.get(t)) && !this.hasAttribute(n._$Eu(t, s)))) return;
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
        const { wrapped: r } = a, c = this[n];
        r !== !0 || this._$AL.has(n) || c === void 0 || this.C(n, void 0, a, c);
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
pt.elementStyles = [], pt.shadowRootOptions = { mode: "open" }, pt[Ct("elementProperties")] = /* @__PURE__ */ new Map(), pt[Ct("finalized")] = /* @__PURE__ */ new Map(), qt == null || qt({ ReactiveElement: pt }), (it.reactiveElementVersions ?? (it.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const St = globalThis, Ht = St.trustedTypes, he = Ht ? Ht.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, De = "$lit$", Q = `lit$${Math.random().toFixed(9).slice(2)}$`, Te = "?" + Q, Ke = `<${Te}>`, dt = document, xt = () => dt.createComment(""), zt = (e) => e === null || typeof e != "object" && typeof e != "function", ee = Array.isArray, Ze = (e) => ee(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", Vt = `[ 	
\f\r]`, At = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ue = /-->/g, me = />/g, at = RegExp(`>|${Vt}(?:([^\\s"'>=/]+)(${Vt}*=${Vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), fe = /'/g, pe = /"/g, Oe = /^(?:script|style|textarea|title)$/i, Je = (e) => (t, ...i) => ({ _$litType$: e, strings: t, values: i }), $ = Je(1), G = Symbol.for("lit-noChange"), D = Symbol.for("lit-nothing"), _e = /* @__PURE__ */ new WeakMap(), ct = dt.createTreeWalker(dt, 129);
function Le(e, t) {
  if (!ee(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return he !== void 0 ? he.createHTML(t) : t;
}
const Xe = (e, t) => {
  const i = e.length - 1, s = [];
  let o, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = At;
  for (let r = 0; r < i; r++) {
    const c = e[r];
    let l, d, h = -1, u = 0;
    for (; u < c.length && (a.lastIndex = u, d = a.exec(c), d !== null); ) u = a.lastIndex, a === At ? d[1] === "!--" ? a = ue : d[1] !== void 0 ? a = me : d[2] !== void 0 ? (Oe.test(d[2]) && (o = RegExp("</" + d[2], "g")), a = at) : d[3] !== void 0 && (a = at) : a === at ? d[0] === ">" ? (a = o ?? At, h = -1) : d[1] === void 0 ? h = -2 : (h = a.lastIndex - d[2].length, l = d[1], a = d[3] === void 0 ? at : d[3] === '"' ? pe : fe) : a === pe || a === fe ? a = at : a === ue || a === me ? a = At : (a = at, o = void 0);
    const m = a === at && e[r + 1].startsWith("/>") ? " " : "";
    n += a === At ? c + Ke : h >= 0 ? (s.push(l), c.slice(0, h) + De + c.slice(h) + Q + m) : c + Q + (h === -2 ? r : m);
  }
  return [Le(e, n + (e[i] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class kt {
  constructor({ strings: t, _$litType$: i }, s) {
    let o;
    this.parts = [];
    let n = 0, a = 0;
    const r = t.length - 1, c = this.parts, [l, d] = Xe(t, i);
    if (this.el = kt.createElement(l, s), ct.currentNode = this.el.content, i === 2 || i === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (o = ct.nextNode()) !== null && c.length < r; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const h of o.getAttributeNames()) if (h.endsWith(De)) {
          const u = d[a++], m = o.getAttribute(h).split(Q), f = /([.?@])?(.*)/.exec(u);
          c.push({ type: 1, index: n, name: f[2], strings: m, ctor: f[1] === "." ? Qe : f[1] === "?" ? ti : f[1] === "@" ? ei : Nt }), o.removeAttribute(h);
        } else h.startsWith(Q) && (c.push({ type: 6, index: n }), o.removeAttribute(h));
        if (Oe.test(o.tagName)) {
          const h = o.textContent.split(Q), u = h.length - 1;
          if (u > 0) {
            o.textContent = Ht ? Ht.emptyScript : "";
            for (let m = 0; m < u; m++) o.append(h[m], xt()), ct.nextNode(), c.push({ type: 2, index: ++n });
            o.append(h[u], xt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Te) c.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = o.data.indexOf(Q, h + 1)) !== -1; ) c.push({ type: 7, index: n }), h += Q.length - 1;
      }
      n++;
    }
  }
  static createElement(t, i) {
    const s = dt.createElement("template");
    return s.innerHTML = t, s;
  }
}
function yt(e, t, i = e, s) {
  var a, r;
  if (t === G) return t;
  let o = s !== void 0 ? (a = i._$Co) == null ? void 0 : a[s] : i._$Cl;
  const n = zt(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== n && ((r = o == null ? void 0 : o._$AO) == null || r.call(o, !1), n === void 0 ? o = void 0 : (o = new n(e), o._$AT(e, i, s)), s !== void 0 ? (i._$Co ?? (i._$Co = []))[s] = o : i._$Cl = o), o !== void 0 && (t = yt(e, o._$AS(e, t.values), o, s)), t;
}
let Ye = class {
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
    const { el: { content: i }, parts: s } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? dt).importNode(i, !0);
    ct.currentNode = o;
    let n = ct.nextNode(), a = 0, r = 0, c = s[0];
    for (; c !== void 0; ) {
      if (a === c.index) {
        let l;
        c.type === 2 ? l = new bt(n, n.nextSibling, this, t) : c.type === 1 ? l = new c.ctor(n, c.name, c.strings, this, t) : c.type === 6 && (l = new ii(n, this, t)), this._$AV.push(l), c = s[++r];
      }
      a !== (c == null ? void 0 : c.index) && (n = ct.nextNode(), a++);
    }
    return ct.currentNode = dt, o;
  }
  p(t) {
    let i = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
};
class bt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, i, s, o) {
    this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    t = yt(this, t, i), zt(t) ? t === D || t == null || t === "" ? (this._$AH !== D && this._$AR(), this._$AH = D) : t !== this._$AH && t !== G && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ze(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== D && zt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(dt.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var n;
    const { values: i, _$litType$: s } = t, o = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = kt.createElement(Le(s.h, s.h[0]), this.options)), s);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === o) this._$AH.p(i);
    else {
      const a = new Ye(o, this), r = a.u(this.options);
      a.p(i), this.T(r), this._$AH = a;
    }
  }
  _$AC(t) {
    let i = _e.get(t.strings);
    return i === void 0 && _e.set(t.strings, i = new kt(t)), i;
  }
  k(t) {
    ee(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s, o = 0;
    for (const n of t) o === i.length ? i.push(s = new bt(this.O(xt()), this.O(xt()), this, this.options)) : s = i[o], s._$AI(n), o++;
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
    this.type = 1, this._$AH = D, this._$AN = void 0, this.element = t, this.name = i, this._$AM = o, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = D;
  }
  _$AI(t, i = this, s, o) {
    const n = this.strings;
    let a = !1;
    if (n === void 0) t = yt(this, t, i, 0), a = !zt(t) || t !== this._$AH && t !== G, a && (this._$AH = t);
    else {
      const r = t;
      let c, l;
      for (t = n[0], c = 0; c < n.length - 1; c++) l = yt(this, r[s + c], i, c), l === G && (l = this._$AH[c]), a || (a = !zt(l) || l !== this._$AH[c]), l === D ? t = D : t !== D && (t += (l ?? "") + n[c + 1]), this._$AH[c] = l;
    }
    a && !o && this.j(t);
  }
  j(t) {
    t === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Qe extends Nt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === D ? void 0 : t;
  }
}
class ti extends Nt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== D);
  }
}
class ei extends Nt {
  constructor(t, i, s, o, n) {
    super(t, i, s, o, n), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = yt(this, t, i, 0) ?? D) === G) return;
    const s = this._$AH, o = t === D && s !== D || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== D && (s === D || o);
    o && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ii {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    yt(this, t);
  }
}
const si = { I: bt }, Wt = St.litHtmlPolyfillSupport;
Wt == null || Wt(kt, bt), (St.litHtmlVersions ?? (St.litHtmlVersions = [])).push("3.3.1");
const oi = (e, t, i) => {
  const s = (i == null ? void 0 : i.renderBefore) ?? t;
  let o = s._$litPart$;
  if (o === void 0) {
    const n = (i == null ? void 0 : i.renderBefore) ?? null;
    s._$litPart$ = o = new bt(t.insertBefore(xt(), n), n, void 0, i ?? {});
  }
  return o._$AI(e), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt = globalThis;
let W = class extends pt {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = oi(i, this.renderRoot, this.renderOptions);
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
    return G;
  }
};
var ze;
W._$litElement$ = !0, W.finalized = !0, (ze = lt.litElementHydrateSupport) == null || ze.call(lt, { LitElement: W });
const Gt = lt.litElementPolyfillSupport;
Gt == null || Gt({ LitElement: W });
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
const ni = { attribute: !0, type: String, converter: Mt, reflect: !1, hasChanged: te }, ai = (e = ni, t, i) => {
  const { kind: s, metadata: o } = i;
  let n = globalThis.litPropertyMetadata.get(o);
  if (n === void 0 && globalThis.litPropertyMetadata.set(o, n = /* @__PURE__ */ new Map()), s === "setter" && ((e = Object.create(e)).wrapped = !0), n.set(i.name, e), s === "accessor") {
    const { name: a } = i;
    return { set(r) {
      const c = t.get.call(this);
      t.set.call(this, r), this.requestUpdate(a, c, e);
    }, init(r) {
      return r !== void 0 && this.C(a, void 0, e, r), r;
    } };
  }
  if (s === "setter") {
    const { name: a } = i;
    return function(r) {
      const c = this[a];
      t.call(this, r), this.requestUpdate(a, c, e);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function C(e) {
  return (t, i) => typeof i == "object" ? ai(e, t, i) : ((s, o, n) => {
    const a = o.hasOwnProperty(n);
    return o.constructor.createProperty(n, s), a ? Object.getOwnPropertyDescriptor(o, n) : void 0;
  })(e, t, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function k(e) {
  return C({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = { ATTRIBUTE: 1, CHILD: 2 }, Ft = (e) => (...t) => ({ _$litDirective$: e, values: t });
let Rt = class {
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
const { I: ri } = si, ge = () => document.createComment(""), Et = (e, t, i) => {
  var n;
  const s = e._$AA.parentNode, o = t === void 0 ? e._$AB : t._$AA;
  if (i === void 0) {
    const a = s.insertBefore(ge(), o), r = s.insertBefore(ge(), o);
    i = new ri(a, r, e, e.options);
  } else {
    const a = i._$AB.nextSibling, r = i._$AM, c = r !== e;
    if (c) {
      let l;
      (n = i._$AQ) == null || n.call(i, e), i._$AM = e, i._$AP !== void 0 && (l = e._$AU) !== r._$AU && i._$AP(l);
    }
    if (a !== o || c) {
      let l = i._$AA;
      for (; l !== a; ) {
        const d = l.nextSibling;
        s.insertBefore(l, o), l = d;
      }
    }
  }
  return i;
}, rt = (e, t, i = e) => (e._$AI(t, i), e), ci = {}, li = (e, t = ci) => e._$AH = t, di = (e) => e._$AH, Kt = (e) => {
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
}, tt = Ft(class extends Rt {
  constructor(e) {
    if (super(e), e.type !== ie.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(e, t, i) {
    let s;
    i === void 0 ? i = t : t !== void 0 && (s = t);
    const o = [], n = [];
    let a = 0;
    for (const r of e) o[a] = s ? s(r, a) : a, n[a] = i(r, a), a++;
    return { values: n, keys: o };
  }
  render(e, t, i) {
    return this.dt(e, t, i).values;
  }
  update(e, [t, i, s]) {
    const o = di(e), { values: n, keys: a } = this.dt(t, i, s);
    if (!Array.isArray(o)) return this.ut = a, n;
    const r = this.ut ?? (this.ut = []), c = [];
    let l, d, h = 0, u = o.length - 1, m = 0, f = n.length - 1;
    for (; h <= u && m <= f; ) if (o[h] === null) h++;
    else if (o[u] === null) u--;
    else if (r[h] === a[m]) c[m] = rt(o[h], n[m]), h++, m++;
    else if (r[u] === a[f]) c[f] = rt(o[u], n[f]), u--, f--;
    else if (r[h] === a[f]) c[f] = rt(o[h], n[f]), Et(e, c[f + 1], o[h]), h++, f--;
    else if (r[u] === a[m]) c[m] = rt(o[u], n[m]), Et(e, o[h], o[u]), u--, m++;
    else if (l === void 0 && (l = ye(a, m, f), d = ye(r, h, u)), l.has(r[h])) if (l.has(r[u])) {
      const b = d.get(a[m]), p = b !== void 0 ? o[b] : null;
      if (p === null) {
        const _ = Et(e, o[h]);
        rt(_, n[m]), c[m] = _;
      } else c[m] = rt(p, n[m]), Et(e, o[h], p), o[b] = null;
      m++;
    } else Kt(o[u]), u--;
    else Kt(o[h]), h++;
    for (; m <= f; ) {
      const b = Et(e, c[f + 1]);
      rt(b, n[m]), c[m++] = b;
    }
    for (; h <= u; ) {
      const b = o[h++];
      b !== null && Kt(b);
    }
    return this.ut = a, li(e, c), G;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = Ft(class extends Rt {
  constructor(e) {
    var t;
    if (super(e), e.type !== ie.ATTRIBUTE || e.name !== "class" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
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
    return G;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Me = "important", hi = " !" + Me, X = Ft(class extends Rt {
  constructor(e) {
    var t;
    if (super(e), e.type !== ie.ATTRIBUTE || e.name !== "style" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
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
        const n = typeof o == "string" && o.endsWith(hi);
        s.includes("-") || n ? i.setProperty(s, n ? o.slice(0, -11) : o, n ? Me : "") : i[s] = o;
      }
    }
    return G;
  }
});
var ve = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function ui(e, t) {
  return !!(e === t || ve(e) && ve(t));
}
function mi(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var i = 0; i < e.length; i++)
    if (!ui(e[i], t[i]))
      return !1;
  return !0;
}
function E(e, t) {
  t === void 0 && (t = mi);
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
var fi = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", se = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", pi = "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z", be = "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z", $e = "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z", _i = "M17 14V17H14V19H17V22H19V19H22V17H19V14M20 11V12.3C19.4 12.1 18.7 12 18 12C16.8 12 15.6 12.4 14.7 13H7V11H20M12.1 17H7V15H12.8C12.5 15.6 12.2 16.3 12.1 17M7 7H20V9H7V7M5 19H7V21H3V3H7V5H5V19Z", gi = "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z", yi = "M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z", we = "M10 19.11L12.11 17H7V15H14V15.12L16.12 13H7V11H17V12.12L18.24 10.89C18.72 10.41 19.35 10.14 20.04 10.14C20.37 10.14 20.7 10.21 21 10.33V5C21 3.89 20.1 3 19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H10V19.11M7 7H17V9H7V7M21.7 14.35L20.7 15.35L18.65 13.3L19.65 12.3C19.86 12.09 20.21 12.09 20.42 12.3L21.7 13.58C21.91 13.79 21.91 14.14 21.7 14.35M12 19.94L18.06 13.88L20.11 15.93L14.06 22H12V19.94Z", vi = "M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z";
const Jt = [
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
], bi = (e, t, i, s, o) => {
  var h, u, m, f, b;
  const n = i || (t == null ? void 0 : t.theme), a = (t == null ? void 0 : t.darkMode) || !1;
  e.__themes || (e.__themes = { cacheKey: null, keys: /* @__PURE__ */ new Set() });
  let r = n || "", c = {};
  if (n === "default" && ((h = e.__themes) == null ? void 0 : h.cacheKey) === "default")
    return;
  if (n && n !== "default" && ((u = t == null ? void 0 : t.themes) != null && u[n])) {
    const { modes: p, ..._ } = t.themes[n] || {};
    c = { ...c, ..._ }, p && (a && p.dark ? c = { ...c, ...p.dark } : !a && p.light && (c = { ...c, ...p.light }));
  } else if (!n && (!((m = e.__themes) != null && m.keys) || e.__themes.keys.size === 0))
    return;
  const l = ((f = e.__themes) == null ? void 0 : f.keys) || /* @__PURE__ */ new Set(), d = new Set(Object.keys(c));
  if (n === "default" && d.size === 0) {
    for (const p of l)
      try {
        e.style.removeProperty(`--${p}`);
      } catch {
      }
    e.__themes = { cacheKey: "default", keys: /* @__PURE__ */ new Set() };
    return;
  }
  if (((b = e.__themes) == null ? void 0 : b.cacheKey) === r) {
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
  for (const [p, _] of Object.entries(c))
    e.style.setProperty(`--${p}`, String(_));
  e.__themes.cacheKey = r || null, e.__themes.keys = d;
}, L = (e, t, i, s) => {
  s = s || {}, i = i ?? {};
  const o = new Event(t, {
    bubbles: s.bubbles === void 0 ? !0 : s.bubbles,
    cancelable: !!s.cancelable,
    composed: s.composed === void 0 ? !0 : s.composed
  });
  return o.detail = i, e.dispatchEvent(o), o;
}, U = (e) => e.substr(0, e.indexOf("."));
var _t = /* @__PURE__ */ ((e) => (e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none", e))(_t || {});
const $i = (e, t = 2) => Math.round(e * 10 ** t) / 10 ** t, wi = (e) => {
  switch (e.number_format) {
    case _t.comma_decimal:
      return ["en-US", "en"];
    // Use United States with fallback to English formatting 1,234,567.89
    case _t.decimal_comma:
      return ["de", "es", "it"];
    // Use German with fallback to Spanish then Italian formatting 1.234.567,89
    case _t.space_comma:
      return ["fr", "sv", "cs"];
    // Use French with fallback to Swedish and Czech formatting 1 234 567,89
    case _t.system:
      return;
    default:
      return e.language;
  }
}, Ae = (e, t, i) => {
  const s = t ? wi(t) : void 0;
  if (Number.isNaN = Number.isNaN || function o(n) {
    return typeof n == "number" && o(n);
  }, (t == null ? void 0 : t.number_format) !== _t.none && !Number.isNaN(Number(e)) && Intl)
    try {
      return new Intl.NumberFormat(
        s,
        Ee(e, i)
      ).format(Number(e));
    } catch (o) {
      return console.error(o), new Intl.NumberFormat(
        void 0,
        Ee(e, i)
      ).format(Number(e));
    }
  return typeof e == "string" ? e : `${$i(e, i == null ? void 0 : i.maximumFractionDigits).toString()}`;
}, Ee = (e, t) => {
  const i = {
    maximumFractionDigits: 2,
    ...t
  };
  if (typeof e != "string")
    return i;
  {
    const s = e.indexOf(".") > -1 ? e.split(".")[1].length : 0;
    i.minimumFractionDigits = s, i.maximumFractionDigits = s;
  }
  return i;
};
E(
  (e) => new Intl.Collator(e)
);
const Ai = E(
  (e) => new Intl.Collator(e, { sensitivity: "accent" })
), Ei = (e, t) => e < t ? -1 : e > t ? 1 : 0, He = (e, t, i = void 0) => Intl != null && Intl.Collator ? Ai(i).compare(e, t) : Ei(e.toLowerCase(), t.toLowerCase());
E(
  (e) => {
    const t = {};
    for (const i of e)
      t[i.entity_id] = i;
    return t;
  }
);
E(
  (e) => {
    const t = {};
    for (const i of e)
      t[i.id] = i;
    return t;
  }
);
const Lt = (e, t) => {
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
};
class Ci extends HTMLElement {
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
      s.cancelable && s.preventDefault(), i.hasHold && (clearTimeout(this.timer), this.timer = void 0), i.hasHold && this.held ? L(o, "action", { action: "hold" }) : i.hasDoubleClick ? s.type === "click" && s.detail < 2 || !this.dblClickTimeout ? this.dblClickTimeout = window.setTimeout(() => {
        this.dblClickTimeout = void 0, L(o, "action", { action: "tap" });
      }, 250) : (clearTimeout(this.dblClickTimeout), this.dblClickTimeout = void 0, L(o, "action", { action: "double_tap" })) : L(o, "action", { action: "tap" });
    }, t.actionHandler.handleKeyDown = (s) => {
      ["Enter", " "].includes(s.key) && s.currentTarget.actionHandler.end(s);
    }, t.addEventListener("touchstart", t.actionHandler.start, {
      passive: !0
    }), t.addEventListener("touchend", t.actionHandler.end), t.addEventListener("touchcancel", t.actionHandler.end), t.addEventListener("mousedown", t.actionHandler.start, {
      passive: !0
    }), t.addEventListener("click", t.actionHandler.end), t.addEventListener("keydown", t.actionHandler.handleKeyDown)));
  }
}
customElements.define("action-handler-status-card", Ci);
const Si = () => {
  const e = document.body;
  if (e.querySelector("action-handler-status-card"))
    return e.querySelector(
      "action-handler-status-card"
    );
  const t = document.createElement("action-handler-status-card");
  return e.appendChild(t), t;
}, xi = (e, t) => {
  const i = Si();
  i && i.bind(e, t);
}, Tt = Ft(
  class extends Rt {
    update(e, [t]) {
      return xi(e.element, t), G;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(e) {
    }
  }
), zi = async (e, t, i, s) => {
  L(e, "hass-action", { config: i, action: s });
};
function mt(e) {
  return e !== void 0 && e.action !== "none";
}
var Ce, Se;
(function(e) {
  e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
})(Ce || (Ce = {})), (function(e) {
  e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
})(Se || (Se = {}));
const et = {
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
}, gt = [
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
], ki = {
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
function Ie(e, t, i, s, o, n) {
  const a = o.area && o.area.length ? o.area : null, r = o.floor && o.floor.length ? o.floor : null, c = o.label && o.label.length ? o.label : null, l = o.hiddenAreas || [], d = o.hiddenLabels || [], h = o.hiddenEntities || [], u = new Set(l), m = new Set(d), f = new Set(h), b = new Map(t.map((v) => [v.id, v])), p = new Map(
    i.map((v) => [v.area_id, v.floor_id])
  ), _ = e.filter((v) => {
    var S, x, O;
    const g = v.entity_id.split(".")[0];
    if (!n.includes(g)) return !1;
    if (g === "update")
      return !v.hidden_by && !v.disabled_by;
    const y = v.device_id ? b.get(v.device_id) : void 0;
    if (!(v.area_id != null || y && y.area_id != null) || c && !((((S = v.labels) == null ? void 0 : S.some((P) => c.includes(P))) ?? !1) || (((x = y == null ? void 0 : y.labels) == null ? void 0 : x.some((P) => c.includes(P))) ?? !1)) || a && !(v.area_id !== void 0 && v.area_id !== null && a.includes(v.area_id) || y && y.area_id !== void 0 && y.area_id !== null && a.includes(y.area_id)))
      return !1;
    if (r) {
      const I = v.area_id ? p.get(v.area_id) : void 0, P = y != null && y.area_id ? p.get(y.area_id) : void 0;
      if (!(I && r.includes(I) || P && r.includes(P))) return !1;
    }
    return u.size && (v.area_id && u.has(v.area_id) || y && y.area_id && u.has(y.area_id)) || (O = v.labels) != null && O.some((I) => m.has(I)) || f.has(v.entity_id) ? !1 : !v.hidden_by && !v.disabled_by;
  }).map((v) => v.entity_id), A = {};
  for (const v of _) {
    const g = v.split(".")[0], y = s[v];
    y && (A[g] || (A[g] = [])).push(y);
  }
  return A;
}
function ft(e) {
  return e.split("_").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
}
function R(e, t) {
  return t ? `${e}.${t}` : e;
}
function xe(e, t) {
  var i, s;
  return ((s = (i = e == null ? void 0 : e[t]) == null ? void 0 : i.attributes) == null ? void 0 : s.friendly_name) || t;
}
function It(e, t) {
  return (i, s) => He(
    xe(e, i),
    xe(e, s),
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
function F(e, t, i) {
  return e.localize(
    `component.${i}.entity_component._.state.${t}`
  ) || t;
}
function Ut(e, t, i, s) {
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
      if (gt.includes(t.name))
        return e.localize(`component.${t.name}.entity_component._.name`) || t.name;
      for (const [o, n] of Object.entries(ki))
        if (n.includes(t.name))
          return e.localize(
            `ui.dialogs.entity_registry.editor.device_classes.${o}.${t.name}`
          ) || t.name;
      return e.localize(
        `ui.panel.lovelace.editor.card.area.${t.name}`
      );
  }
}
const Di = E(
  (e = []) => new Map(e.map((t) => [t.entity_id, t]))
), Ti = E(
  (e = []) => new Map(e.map((t) => [t.id, t]))
), Oi = E(
  (e = []) => new Map(e.map((t) => [t.area_id, t]))
), Li = E(
  (e, t, i, s, o, n, a) => {
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
    const c = Di(i), l = Ti(s), d = Oi(o);
    return Object.values(a).filter((h) => n.includes(h.entity_id) ? !1 : r.length ? r.every(
      (u) => Mi(e, h, u, {
        areas: o,
        devices: s,
        entities: i,
        entityMap: c,
        deviceMap: l,
        areaMap: d
      })
    ) : !0);
  }
);
function Pt(e, t) {
  return Li(
    e,
    t,
    e.entities || [],
    e.devices || [],
    e.areas || [],
    e.hiddenEntities || [],
    e.hass.states
  );
}
function Zt(e, t) {
  if (!e) return !1;
  const i = t.match(/^([<>]=?)?\s*(\d+)$/);
  if (!i) return !1;
  const [, s, o] = i, n = parseInt(o, 10), a = /* @__PURE__ */ new Date(), r = new Date(e), c = (a.getTime() - r.getTime()) / 6e4;
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
function z(e, t) {
  if (Array.isArray(t))
    return t.some((i) => z(e, i));
  if (typeof t == "string" && t.startsWith("!"))
    return !z(e, t.slice(1));
  if (typeof t == "string" && /^([<>]=?)\s*(-?\d+(\.\d+)?)([mhd])$/.test(t)) {
    const [, i, s, , o] = t.match(/^([<>]=?)\s*(-?\d+(\.\d+)?)([mhd])$/) || [], n = parseFloat(s), a = Date.now(), r = new Date(e).getTime();
    if (isNaN(r)) return !1;
    let c = (a - r) / 6e4;
    switch (o === "h" && (c /= 60), o === "d" && (c /= 1440), i) {
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
function Mi(e, t, i, s) {
  var n, a, r, c, l, d, h, u, m;
  const o = ((n = s.entityMap) == null ? void 0 : n.get(t.entity_id)) || ((a = s.entities) == null ? void 0 : a.find((f) => f.entity_id === t.entity_id));
  switch (i.key) {
    case "area": {
      let f = o == null ? void 0 : o.area_id;
      if (!f && (o != null && o.device_id)) {
        const b = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((r = s.devices) == null ? void 0 : r.find((p) => p.id === o.device_id));
        f = b == null ? void 0 : b.area_id;
      }
      return z(f, i.value);
    }
    case "domain":
      return z(U(t.entity_id), i.value);
    case "entity_id":
      return z(t.entity_id, i.value);
    case "state":
      return z(t.state, i.value);
    case "name": {
      const f = t.attributes.friendly_name ?? "";
      return z(f, i.value);
    }
    case "attributes":
      return !i.value || typeof i.value != "object" ? !1 : Object.entries(i.value).every(([f, b]) => {
        const p = f.split(":");
        let _ = t.attributes;
        for (const A of p)
          if (_ = _ == null ? void 0 : _[A], _ === void 0) break;
        return _ === void 0 ? !1 : z(_, b);
      });
    case "device":
      return z(o == null ? void 0 : o.device_id, i.value);
    case "integration":
      return o ? z(o.platform, i.value) || z(o.config_entry_id, i.value) : !1;
    case "entity_category":
      return z(o == null ? void 0 : o.entity_category, i.value);
    case "label": {
      const f = s.labels, b = (p) => {
        if (z(p, i.value)) return !0;
        if (f) {
          const _ = f.find((A) => A.label_id === p);
          if (_ && z(_.name, i.value)) return !0;
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
      return z(b == null ? void 0 : b.floor_id, i.value);
    }
    case "hidden_by":
      return z(o == null ? void 0 : o.hidden_by, i.value);
    case "device_manufacturer": {
      if (o != null && o.device_id) {
        const f = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((h = s.devices) == null ? void 0 : h.find((b) => b.id === o.device_id));
        return z(f == null ? void 0 : f.manufacturer, i.value);
      }
      return !1;
    }
    case "device_model": {
      if (o != null && o.device_id) {
        const f = (s.deviceMap && (o != null && o.device_id) ? s.deviceMap.get(o.device_id) : void 0) || ((u = s.devices) == null ? void 0 : u.find((b) => b.id === o.device_id));
        return z(f == null ? void 0 : f.model, i.value);
      }
      return !1;
    }
    case "last_changed":
      return typeof i.value == "string" && /^[<>]=?\s*\d+$/.test(i.value) ? Zt(t.last_changed, i.value) : z(t.last_changed, i.value);
    case "last_updated":
      return typeof i.value == "string" && /^[<>]=?\s*\d+$/.test(i.value) ? Zt(t.last_updated, i.value) : z(t.last_updated, i.value);
    case "last_triggered":
      return typeof i.value == "string" && /^[<>]=?\s*\d+$/.test(i.value) ? Zt(t.attributes.last_triggered, i.value) : z(t.attributes.last_triggered, i.value);
    case "group": {
      const f = e.hass.states[i.value];
      return !f || !Array.isArray((m = f.attributes) == null ? void 0 : m.entity_id) ? !1 : f.attributes.entity_id.includes(t.entity_id);
    }
    default:
      return !0;
  }
}
var Hi = Object.defineProperty, j = (e, t, i, s) => {
  for (var o = void 0, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (o = a(t, i, o) || o);
  return o && Hi(t, i, o), o;
};
const ne = class ne extends W {
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
      (t, i, s) => Ut(this.hass, t, i, s)
    ), this._popupCardConfigCache = /* @__PURE__ */ new Map(), this._cardElementCache = /* @__PURE__ */ new Map(), this._sortEntitiesMemo = E(
      (t, i, s, o) => {
        const n = t.slice();
        if (i === "state") {
          const r = It(o, s);
          return n.sort((c, l) => {
            const d = this._isActive(c) ? 0 : 1, h = this._isActive(l) ? 0 : 1;
            if (d !== h) return d - h;
            const u = U(c.entity_id), m = U(l.entity_id), f = this.hass ? F(this.hass, c.state, u) : c.state, b = this.hass ? F(this.hass, l.state, m) : l.state, p = (f || "").localeCompare(b || "");
            return p !== 0 ? p : r(c.entity_id, l.entity_id);
          });
        }
        const a = It(o, s);
        return n.sort((r, c) => a(r.entity_id, c.entity_id));
      }
    ), this.groupAndSortEntities = E(
      (t, i, s) => {
        const o = /* @__PURE__ */ new Map();
        for (const a of t) {
          const r = this.getAreaForEntity(a);
          o.has(r) || o.set(r, []), o.get(r).push(a);
        }
        return Array.from(o.entries()).sort(
          ([a], [r]) => {
            var d, h;
            const c = ((d = i.get(a)) == null ? void 0 : d.toLowerCase()) ?? (a === "unassigned" ? "unassigned" : a), l = ((h = i.get(r)) == null ? void 0 : h.toLowerCase()) ?? (r === "unassigned" ? "unassigned" : r);
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
    var i, s, o, n, a, r;
    const t = (r = (a = (n = (o = (s = (i = document.querySelector("body > home-assistant")) == null ? void 0 : i.shadowRoot) == null ? void 0 : s.querySelector("status-card-popup")) == null ? void 0 : o.shadowRoot) == null ? void 0 : n.querySelector("ha-dialog")) == null ? void 0 : a.shadowRoot) == null ? void 0 : r.querySelector(
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
  async _createCardElement(t, i, s = !1) {
    var o, n, a;
    try {
      const r = await ((o = window == null ? void 0 : window.loadCardHelpers) == null ? void 0 : o.call(window));
      if (r != null && r.createCardElement) {
        const c = r.createCardElement(i);
        return c.hass = t, (n = c.setAttribute) == null || n.call(c, "data-hui-card", ""), c;
      }
    } catch {
    }
    try {
      const r = i.type || "tile", c = typeof r == "string" && r.startsWith("custom:"), l = c ? r.slice(7) : `hui-${r}-card`;
      c && !customElements.get(l) && await customElements.whenDefined(l).catch(() => {
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
      const r = document.createElement("div");
      return r.setAttribute("data-hui-card", ""), r;
    }
  }
  _getPopupCardConfig(t) {
    var b, p, _, A;
    const i = this.card, s = U(t.entity_id), o = this.selectedDomain || s, n = this.selectedDomain ? this.selectedDeviceClass : (A = (_ = (p = (b = this.hass) == null ? void 0 : b.states) == null ? void 0 : p[t.entity_id]) == null ? void 0 : _.attributes) == null ? void 0 : A.device_class, a = R(o, n), r = typeof (i == null ? void 0 : i.getCustomizationForType) == "function" ? i.getCustomizationForType(a) : void 0, c = r == null ? void 0 : r.popup_card, l = c && typeof c.type == "string" && c.type || "tile", d = l === "tile" ? this.DOMAIN_FEATURES[s] ?? {} : {};
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
    return a.classList.add("card-placeholder"), a.setAttribute("data-hui-card", ""), this._cardEls.set(i, a), this._createCardElement(this.hass, s).then((r) => {
      try {
        this._cardEls.get(i) === a && (a.replaceWith(r), this._cardEls.set(i, r), this._cardElementCache.set(i, { hash: o, el: r })), r.hass = this.hass;
      } catch {
      }
    }), this._cardElementCache.set(i, { hash: o, el: a }), a;
  }
  _getCurrentEntities() {
    var a, r, c;
    const t = this.card, i = this.selectedDomain, s = this.selectedDeviceClass, o = this.selectedGroup;
    let n = [];
    if (o !== void 0 && ((r = (a = t._config) == null ? void 0 : a.content) != null && r[o])) {
      const l = t._config.content[o], d = (c = t._config.rulesets) == null ? void 0 : c.find(
        (h) => h.group_id === l
      );
      n = d ? Pt(t, d) : [];
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
    return !Jt.includes(t.state);
  }
  _configHash(t) {
    return JSON.stringify(t);
  }
  sortEntitiesForPopup(t) {
    var s, o, n, a, r;
    const i = ((o = (s = this.card) == null ? void 0 : s._config) == null ? void 0 : o.popup_sort) || "name";
    return this._sortEntitiesMemo(
      t,
      i,
      ((a = (n = this.hass) == null ? void 0 : n.locale) == null ? void 0 : a.language) ?? "en",
      ((r = this.hass) == null ? void 0 : r.states) ?? {}
    );
  }
  render() {
    var g, y, H, S, x, O, I, P, K, $t, wt, N;
    if (!this.open) return $``;
    const t = (g = this.card) != null && g.list_mode ? 1 : ((H = (y = this.card) == null ? void 0 : y._config) == null ? void 0 : H.columns) || 4, i = this.selectedDomain, s = this.selectedDeviceClass, o = this.selectedGroup, n = this.card, r = (typeof (n == null ? void 0 : n._shouldShowTotalEntities) == "function" ? n._shouldShowTotalEntities(i, s) : !1) ? !0 : this._showAll, c = new Map(
      (S = n.areas) == null ? void 0 : S.map((w) => [w.area_id, w.name])
    );
    let l = [], d = !1;
    if (o !== void 0 && ((O = (x = n._config) == null ? void 0 : x.content) != null && O[o])) {
      const w = n._config.content[o], B = (I = n._config.rulesets) == null ? void 0 : I.find(
        (Z) => Z.group_id === w
      );
      l = B ? Pt(n, B) : [];
    } else
      i ? l = r ? n._totalEntities(i, s) : n._isOn(i, s) : l = Array.isArray(this.entities) ? this.entities : [], d = !0;
    const h = this.sortEntitiesForPopup(l), u = new Set(l.map((w) => w.entity_id));
    Array.from(this._cardEls.keys()).forEach((w) => {
      u.has(w) || this._cardEls.delete(w);
    }), this._lastEntityIds = l.map((w) => w.entity_id);
    const m = this.groupAndSortEntities(
      l,
      c,
      this.sortEntitiesForPopup.bind(this)
    ), f = ((P = n == null ? void 0 : n._config) == null ? void 0 : P.ungroupAreas) === !0 || ((K = n == null ? void 0 : n._config) == null ? void 0 : K.ungroup_areas) === !0 || (($t = n == null ? void 0 : n._config) == null ? void 0 : $t.area_grouping) !== void 0 && ((wt = n == null ? void 0 : n._config) == null ? void 0 : wt.area_grouping) === !1, b = m.length ? Math.max(...m.map(([, w]) => w.length)) : 0, p = f ? Math.min(t, Math.max(1, l.length)) : Math.min(t, Math.max(1, b)), _ = R(i, s), A = typeof (n == null ? void 0 : n.getCustomizationForType) == "function" ? n.getCustomizationForType(_) : void 0, v = (A == null ? void 0 : A.invert) === !0;
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
      var Z, V;
      const w = this.selectedGroup, B = this.card;
      if (w !== void 0 && ((V = (Z = B == null ? void 0 : B._config) == null ? void 0 : Z.content) != null && V[w])) {
        const Dt = B._config.content[w];
        return this.hass.localize(
          "ui.panel.lovelace.editor.card.entities.name"
        ) + " in " + Dt;
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
                    .path=${pi}
                  ></ha-icon-button>

                  <ha-list-item
                    graphic="icon"
                    @click=${this.handleAskToggleDomain}
                    @closed=${this._stopPropagation}
                  >
                    ${v ? this.hass.localize("ui.card.common.turn_on") : this.hass.localize("ui.card.common.turn_off")}
                    <ha-svg-icon
                      slot="graphic"
                      .path=${vi}
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
                      .path=${yi}
                    ></ha-svg-icon>
                  </ha-list-item>
                </ha-button-menu>
              ` : ""}
        </div>
        <div class="dialog-content scrollable">
          ${(N = this.card) != null && N.list_mode ? f ? $`
                  <ul class="entity-list">
                    ${tt(
      h,
      (w) => w.entity_id,
      (w) => $`<li class="entity-item">- ${w.entity_id}</li>`
    )}
                  </ul>
                ` : $`
                  <ul class="entity-list">
                    ${tt(
      m,
      ([w]) => w,
      ([w, B]) => {
        const Z = c.get(w) ?? (w === "unassigned" ? "Unassigned" : w);
        return $`
                          <li class="entity-item">
                            <h4>${Z}:</h4>
                            <ul>
                              ${tt(
          B,
          (V) => V.entity_id,
          (V) => $`<li class="entity-item">
                                    - ${V.entity_id}
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
                  ${tt(
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
      const Z = c.get(w) ?? (w === "unassigned" ? "Unassigned" : w);
      return $`
                  <div class="cards-wrapper">
                    <h4>${Z}</h4>
                    <div class="entity-cards">
                      ${tt(
        B,
        (V) => V.entity_id,
        (V) => $`
                          <div class="entity-card">
                            ${this._getOrCreateCard(V)}
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
ne.styles = vt`
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
let q = ne;
j([
  C({ type: Boolean })
], q.prototype, "open");
j([
  C({ type: String })
], q.prototype, "title");
j([
  C({ type: String })
], q.prototype, "selectedDomain");
j([
  C({ type: String })
], q.prototype, "selectedDeviceClass");
j([
  C({ type: String })
], q.prototype, "content");
j([
  C({ type: Array })
], q.prototype, "entities");
j([
  C({ attribute: !1 })
], q.prototype, "hass");
j([
  C({ attribute: !1 })
], q.prototype, "card");
j([
  k()
], q.prototype, "_showAll");
j([
  k()
], q.prototype, "selectedGroup");
customElements.define("status-card-plus-popup", q);
const ae = class ae extends W {
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
    var a, r;
    if (!this.open || !this.hass || !this.card) return $``;
    const t = this.selectedDomain || "", i = this.selectedDeviceClass, s = R(t, i), o = (r = (a = this.card) == null ? void 0 : a.getCustomizationForType) == null ? void 0 : r.call(a, s), n = (o == null ? void 0 : o.invert) === !0;
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
ae.styles = vt``;
let st = ae;
j([
  C({ type: Boolean })
], st.prototype, "open");
j([
  C({ attribute: !1 })
], st.prototype, "hass");
j([
  C({ attribute: !1 })
], st.prototype, "card");
j([
  C({ type: String })
], st.prototype, "selectedDomain");
j([
  C({ type: String })
], st.prototype, "selectedDeviceClass");
customElements.define(
  "status-card-plus-popup-confirmation",
  st
);
var Ii = Object.defineProperty, Pi = Object.getOwnPropertyDescriptor, M = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Pi(t, i) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (o = (s ? a(t, i, o) : a(o)) || o);
  return s && o && Ii(t, i, o), o;
};
let T = class extends W {
  constructor() {
    super(...arguments), this.areas = [], this.devices = [], this.entities = [], this.entitiesByDomain = {}, this.selectedDomain = null, this.selectedDeviceClass = null, this.hiddenEntities = [], this.hiddenLabels = [], this.hiddenAreas = [], this.hide_person = !1, this.hide_content_name = !0, this.list_mode = !1, this.selectedGroup = null, this._baseEntitiesMemo = E(
      (e, t, i) => e.filter((s) => {
        const o = s.state;
        if (o === "unavailable" || o === "unknown") return !1;
        const n = s.attributes.device_class;
        return t === "switch" ? i === "outlet" ? n === "outlet" : i === "switch" ? n === "switch" || n === void 0 : !0 : !i || n === i;
      })
    ), this.computeLabel = E(
      (e, t, i) => Ut(this.hass, e, t, i)
    ), this._customizationIndex = E((e) => {
      const t = /* @__PURE__ */ new Map();
      return (e ?? []).forEach((i) => {
        i.type && t.set(i.type.toLowerCase(), i);
      }), t;
    }), this._getPersonItemsMemo = E(
      (e, t, i, s, o) => s ? [] : e.filter(
        (n) => {
          var a;
          return n.entity_id.startsWith("person.") && !t.includes(n.entity_id) && !((a = n.labels) != null && a.some((r) => i.includes(r))) && !n.hidden_by && !n.disabled_by;
        }
      ).reverse().map((n) => o[n.entity_id]).filter((n) => !!n)
    ), this._computeExtraItems = E(
      (e, t) => {
        const i = e.content || [];
        return e.extra_entities ? e.extra_entities.reduce((s, o) => {
          var f;
          if (!i.includes(o)) return s;
          const n = t[o];
          if (!n) return s;
          const a = (f = e.customization) == null ? void 0 : f.find(
            (b) => b.type === o
          );
          if (a && a.state !== void 0 && a.invert_state !== void 0) {
            const b = a.invert_state === "true", p = n.state === a.state;
            if (!b && !p || b && p) return s;
          }
          const r = i.indexOf(o), c = r >= 0 ? r : 0, l = this.getCustomIcon(o, void 0, n), d = this.getCustomName(o, void 0, n) ?? n.attributes.friendly_name ?? o, h = this.getCustomColor(o, void 0), u = this.getCustomCSS(
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
    ), this._computeDomainItems = E(
      (e) => e.map(
        (t, i) => t.includes(" - ") ? null : { type: "domain", domain: t, order: i }
      ).filter((t) => t !== null)
    ), this._computeDeviceClassItems = E(
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
    ), this._computeSortedEntities = E(
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
    const o = this._config.area || null, n = this._config.floor || null, a = this._config.label || null, r = this.hiddenAreas, c = this.hiddenLabels, l = this.hiddenEntities, d = [
      e,
      t,
      i,
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
    const h = Ie(
      e,
      t,
      i,
      s,
      { area: o, floor: n, label: a, hiddenAreas: r, hiddenLabels: c, hiddenEntities: l },
      gt
    );
    return this._lastEntitiesByDomainInput = d, this._lastEntitiesByDomainResult = h, h;
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
    const i = R(e, t), s = this.getCustomizationForType(i);
    return (s == null ? void 0 : s.show_total_entities) === !0;
  }
  _shouldShowTotalNumbers(e, t) {
    if (this._config.show_total_number) return !0;
    const i = R(e, t), s = this.getCustomizationForType(i);
    return (s == null ? void 0 : s.show_total_number) === !0;
  }
  _isOn(e, t) {
    var n;
    const i = this._baseEntities(e, t), s = R(e, t), o = ((n = this.getCustomizationForType(s)) == null ? void 0 : n.invert) === !0;
    return i.filter((a) => {
      if (e === "climate") {
        const c = a.attributes.hvac_action;
        if (c !== void 0) {
          const l = !["idle", "off"].includes(c);
          return o ? !l : l;
        }
      }
      if (e === "humidifier") {
        const c = a.attributes.action;
        if (c !== void 0) {
          const l = !["idle", "off"].includes(c);
          return o ? !l : l;
        }
      }
      let r = !Jt.includes(a.state);
      return o ? !r : r;
    });
  }
  setConfig(e) {
    if (!e)
      throw new Error("Invalid configuration.");
    this._config = JSON.parse(JSON.stringify(e)), this.hide_person = e.hide_person !== void 0 ? e.hide_person : !1, this.hide_content_name = e.hide_content_name !== void 0 ? e.hide_content_name : !1, this.list_mode = e.list_mode !== void 0 ? e.list_mode : !1, this.hiddenEntities = e.hidden_entities || [], this.hiddenLabels = e.hidden_labels || [], this.hiddenAreas = e.hidden_areas || [], this.requestUpdate();
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
      const r = (n = this._config.content) == null ? void 0 : n[e], c = (a = this._config.rulesets) == null ? void 0 : a.find(
        (l) => l.group_id === r
      );
      i = c ? Pt(this, c) : [];
    } else {
      const r = this.selectedDeviceClass || void 0;
      i = this._shouldShowTotalEntities(e, r) ? this._totalEntities(e, r) : this._isOn(e, r);
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
    (e.has("hass") && (!t || t.themes !== this.hass.themes) || e.has("_config") && (!i || i.theme !== this._config.theme)) && bi(
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
    ], o = R(e, t), n = this.getCustomizationForType(o), a = (n == null ? void 0 : n.invert) === !0;
    switch (e) {
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
        return i === "home" ? F(this.hass, "home", "person") : i === "not_home" ? F(this.hass, "not_home", "person") : i ?? "unknown";
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
          i ?? "on",
          "light"
        ), c = F(
          this.hass,
          i ?? "off",
          "light"
        );
        return a ? c : r;
      }
    }
  }
  getCustomizationForType(e) {
    return e ? this._customizationIndex(this._config.customization).get(e.toLowerCase()) : void 0;
  }
  getCustomIcon(e, t, i) {
    const s = this.getCustomizationForType(
      R(e, t)
    );
    if ((s == null ? void 0 : s.show_entity_picture) === !0 && i && i.attributes && i.attributes.entity_picture)
      return i.attributes.entity_picture;
    if (s && s.icon)
      return s.icon;
    if (i && i.attributes && i.attributes.icon)
      return i.attributes.icon;
    const n = (s == null ? void 0 : s.invert) === !0 ? "off" : "on";
    let a = e;
    if (!t && e.includes(".") && (a = e.split(".")[0]), et && et[a]) {
      const r = et[a];
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
  getBackgroundColor(e, t) {
    var o;
    const i = this.getCustomizationForType(
      R(e, t)
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
      R(e, t)
    );
    if (i && i.icon_color)
      return i.icon_color;
    if (this._config && this._config.color)
      return this._config.color;
  }
  getCustomName(e, t, i) {
    const s = this.getCustomizationForType(
      R(e, t)
    );
    if (s && s.name)
      return s.name;
    if (i && i.attributes.friendly_name)
      return i.attributes.friendly_name;
  }
  getCustomCSS(e, t) {
    const i = this.getCustomizationForType(
      R(e, t)
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
      let o = !Jt.includes(s.state);
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
      var l, d, h;
      i.stopPropagation();
      const s = this.getCustomizationForType(
        R(e, t)
      );
      let o, n;
      i.detail.action === "tap" ? (o = s == null ? void 0 : s.tap_action, n = (l = this._config) == null ? void 0 : l.tap_action) : i.detail.action === "hold" ? (o = s == null ? void 0 : s.hold_action, n = (d = this._config) == null ? void 0 : d.hold_action) : i.detail.action === "double_tap" && (o = s == null ? void 0 : s.double_tap_action, n = (h = this._config) == null ? void 0 : h.double_tap_action);
      const a = o !== void 0 ? o : n, r = typeof a == "string" && a === "more-info" || typeof a == "object" && (a == null ? void 0 : a.action) === "more-info", c = typeof a == "string" && a === "toggle" || typeof a == "object" && (a == null ? void 0 : a.action) === "toggle";
      if (e.includes(".")) {
        const u = e, m = this.hass.states[u], f = U(u);
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
        this.selectedDomain = e, this.selectedDeviceClass = t || null;
        return;
      }
      if (c) {
        this.toggleDomain(e, t);
        return;
      }
      zi(
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
  _resolveColor(e) {
    if (!e) return;
    const t = String(e).trim();
    return t.startsWith("var(") || t.startsWith("#") || t.startsWith("rgb") || t.startsWith("hsl") ? t : t.includes("-") || t.startsWith("state") || t.startsWith("primary") || t.startsWith("accent") ? `var(--${t}${t.endsWith("-color") ? "" : "-color"})` : t;
  }
  _getIconStyles(e, t = {}) {
    const { color: i, square: s, isNotHome: o } = t, n = this._resolveColor(i), a = {
      "border-radius": s ? "20%" : "50%",
      "background-color": n ? `color-mix(in srgb, ${n} 18%, transparent)` : void 0,
      color: n
    };
    return e === "person" && o && (a.filter = "grayscale(100%)"), a;
  }
  renderExtraTab(e) {
    const { panel: t, entity: i, icon: s, name: o, color: n, icon_css: a, background_color: r } = e, c = this.hass.states[t], l = i.state, d = Number(l), h = !Number.isNaN(d) && l !== "" ? Ae(d, this.hass.locale) : F(this.hass, l, U(t)), u = i.attributes.unit_of_measurement, m = this.getCustomizationForType(t), f = this._handleDomainAction(t), b = Tt({
      hasHold: mt(
        (m == null ? void 0 : m.hold_action) ?? this._config.hold_action
      ),
      hasDoubleClick: mt(
        (m == null ? void 0 : m.double_tap_action) ?? this._config.double_tap_action
      )
    }), p = {
      horizontal: this._config.content_layout === "horizontal"
    }, _ = this._computeIconColorOverride(t, c), A = this._computeStateColorMap(t, c), v = n ? this._resolveColor(n) : void 0, g = A || _ || v, y = this._getIconStyles("extra", {
      color: g,
      square: this._config.square
    }), H = this._computeStateIconMap(t, c) || s;
    let S;
    const x = m == null ? void 0 : m.state_content;
    return x !== void 0 ? S = (Array.isArray(x) ? x : [x]).map((I) => {
      var $t, wt;
      if (!I) return "";
      const P = String(I).trim();
      if (P === "state")
        return h + (Number.isNaN(d) ? "" : u ? ` ${u}` : "");
      const K = P.startsWith("attribute:") ? P.slice(10) : P;
      if (K && i.attributes && K in i.attributes) {
        const N = i.attributes[K];
        if (N == null) return "";
        let w;
        /temperature/i.test(K) ? w = (wt = ($t = this.hass.config) == null ? void 0 : $t.unit_system) == null ? void 0 : wt.temperature : /humidity/i.test(K) ? w = "%" : typeof i.attributes.unit_of_measurement == "string" && (w = i.attributes.unit_of_measurement);
        const B = typeof N == "string" && N.trim() !== "" && !Number.isNaN(Number(N));
        if (typeof N == "number" || B)
          try {
            const V = typeof N == "number" ? N : Number(N), Dt = Ae(V, this.hass.locale);
            return w ? `${Dt} ${w}` : Dt;
          } catch {
            return w ? `${String(N)} ${w}` : String(N);
          }
        return F(
          this.hass,
          String(N),
          U(t)
        );
      }
      return P;
    }).filter((I) => I !== "").join(" · ") : S = `${h}${u ? ` ${u}` : ""}`, m == null || m.state_content, $`
      <ha-tab-group-tab
        slot="nav"
        panel=${t}
        @action=${f}
        .actionHandler=${b}
      >
        <div class="extra-entity ${ut(p)}">
          <div class="entity-icon" style=${X(y)}>
            ${(H || "").startsWith("/") || (H || "").startsWith("http") ? $`<img
                  src=${H}
                  alt=${o}
                  style="border-radius:${this._config.square ? "20%" : "50%"};object-fit:cover;"
                />` : $`<ha-state-icon
                  .hass=${this.hass}
                  .stateObj=${c}
                  .icon=${H}
                  .stateColor=${!0}
                  data-domain=${U(t)}
                  data-state=${c.state}
                  style="${a || ""}${g ? `;color:${g}` : ""}"
                ></ha-state-icon>`}
          </div>
          <div class="entity-info">
            ${this.hide_content_name ? "" : $`<div class="entity-name">${o}</div>`}
            <div class="entity-state">
              ${S}
            </div>
          </div>
        </div>
      </ha-tab-group-tab>
    `;
  }
  _computeIconColorOverride(e, t) {
    var o;
    if (U(e) !== "climate") return;
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
        const r = String(a), c = String(n.equals);
        if (r === c) return n.color;
      }
  }
  _computeStateIconMap(e, t) {
    var o;
    const i = this.getCustomizationForType(e), s = i == null ? void 0 : i.state_icon_map;
    if (!(!Array.isArray(s) || s.length === 0))
      for (const n of s) {
        const a = n.attribute === "state" ? t.state : (o = t.attributes) == null ? void 0 : o[n.attribute];
        if (a === void 0) continue;
        const r = String(a), c = String(n.equals);
        if (r === c) return n.icon;
      }
  }
  renderGroupTab(e, t) {
    const i = Pt(this, e);
    if (!i.length) return $``;
    const s = e.group_id || `${this.hass.localize("component.group.entity_component._.name")} ${t + 1}`, o = e.group_icon || "mdi:format-list-group", n = this.getCustomColor(s);
    this.getBackgroundColor(s);
    const a = () => {
      this.selectedGroup = t;
    }, r = Tt({
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
        <div class="entity ${ut(c)}">
          <div class="entity-icon" style=${X(l)}>
            <ha-icon icon=${o}></ha-icon>
          </div>
          <div class="entity-info">
            ${this.hide_content_name ? "" : $`<div class="entity-name">${s}</div>`}
            <div class="entity-state">
              ${i.length}
              ${e.group_status ? ` ${e.group_status}` : ""}
            </div>
          </div>
        </div>
      </ha-tab-group-tab>
    `;
  }
  renderDomainTab(e) {
    const { domain: t } = e, i = this._isOn(t), s = this._totalEntities(t);
    if (!(this._shouldShowTotalEntities(t) ? s : i).length) return $``;
    const a = this.getCustomColor(t), r = this.getCustomizationForType(t), c = this._handleDomainAction(t), l = Tt({
      hasHold: mt(
        (r == null ? void 0 : r.hold_action) ?? this._config.hold_action
      ),
      hasDoubleClick: mt(
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
        <div class="entity ${ut(d)}">
          <div class="entity-icon" style=${X(h)}>
            <ha-icon
              icon=${this.getCustomIcon(t)}
              style=${X({})}
            ></ha-icon>
          </div>
          <div class="entity-info">
            ${this.hide_content_name ? "" : $`<div class="entity-name">
                  ${this.getCustomName(t) || this.computeLabel({ name: t })}
                </div>`}
            <div class="entity-state">
              ${this._shouldShowTotalNumbers(t) ? `${i.length}/${s.length} ${this.getStatusProperty(
      t
    )}` : this._shouldShowTotalEntities(t) ? `${s.length}` : `${i.length} ${this.getStatusProperty(t)}`}
            </div>
          </div>
        </div>
      </ha-tab-group-tab>
    `;
  }
  renderDeviceClassTab(e) {
    const { domain: t, deviceClass: i } = e, s = this._isOn(t, i), o = this._totalEntities(t, i);
    if (!(this._shouldShowTotalEntities(t, i) ? o : s).length) return $``;
    const r = this.getCustomColor(t, i), c = this.getCustomizationForType(
      R(t, i)
    ), l = this._handleDomainAction(t, i), d = Tt({
      hasHold: mt(
        (c == null ? void 0 : c.hold_action) ?? this._config.hold_action
      ),
      hasDoubleClick: mt(
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
        panel=${i}
        @action=${l}
        .actionHandler=${d}
      >
        <div class="entity ${ut(h)}">
          <div class="entity-icon" style=${X(u)}>
            <ha-icon icon=${this.getCustomIcon(t, i)}></ha-icon>
          </div>
          <div class="entity-info">
            ${this.hide_content_name ? "" : $`<div class="entity-name">
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
      </ha-tab-group-tab>
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
    return $`
      <ha-card>
        <ha-tab-group no-scroll-controls class=${ut(n)}>
          ${tt(
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
                  <div class="entity ${ut(d)}">
                    <div class="entity-icon" style=${X(h)}>
                      ${r.attributes.entity_picture ? $`<img
                            src=${r.attributes.entity_picture}
                            alt=${r.attributes.friendly_name || r.entity_id}
                            style=${X(h)}
                          />` : $`<ha-icon
                            class="center"
                            icon=${r.attributes.icon || "mdi:account"}
                            style=${X(h)}
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
          ${tt(
      o,
      (r) => r.type === "extra" ? r.panel : r.type === "domain" ? r.domain : r.type === "deviceClass" ? `${r.domain}-${r.deviceClass}` : r.type === "group" ? `group-${r.group_id}` : "",
      (r) => this.renderTab(r)
    )}
        </ha-tab-group>
      </ha-card>
    `;
  }
  static get styles() {
    return vt`
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
M([
  C({ attribute: !1 })
], T.prototype, "hass", 2);
M([
  C({ type: Object })
], T.prototype, "_config", 2);
M([
  k()
], T.prototype, "areas", 2);
M([
  k()
], T.prototype, "devices", 2);
M([
  k()
], T.prototype, "entities", 2);
M([
  k()
], T.prototype, "entitiesByDomain", 2);
M([
  k()
], T.prototype, "selectedDomain", 2);
M([
  k()
], T.prototype, "selectedDeviceClass", 2);
M([
  k()
], T.prototype, "hiddenEntities", 2);
M([
  k()
], T.prototype, "hiddenLabels", 2);
M([
  k()
], T.prototype, "hiddenAreas", 2);
M([
  k()
], T.prototype, "hide_person", 2);
M([
  k()
], T.prototype, "hide_content_name", 2);
M([
  k()
], T.prototype, "list_mode", 2);
M([
  k()
], T.prototype, "selectedGroup", 2);
T = M([
  jt("status-card-plus")
], T);
var Ni = Object.defineProperty, ji = Object.getOwnPropertyDescriptor, Bt = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? ji(t, i) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (o = (s ? a(t, i, o) : a(o)) || o);
  return s && o && Ni(t, i, o), o;
};
class oe extends W {
  constructor() {
    super(...arguments), this.SelectOptions = [], this._entityKeys = /* @__PURE__ */ new WeakMap();
  }
  _getKey(t) {
    return this._entityKeys.has(t) || this._entityKeys.set(t, Math.random().toString()), this._entityKeys.get(t);
  }
  render() {
    if (!this.hass)
      return D;
    const t = new Set(
      (this.customizationkey || []).map((s) => s.type)
    ), i = this.SelectOptions.filter(
      (s) => !t.has(s.value)
    );
    return $`
      <div class="customization">
        ${this.customizationkey && tt(
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
                .path=${gi}
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
            ${i.map(
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
    const i = t.detail.value, s = t.target.index, o = this.customizationkey.concat();
    o[s] = { ...o[s], type: i || "" }, L(this, "config-changed", o);
  }
  _removeRow(t) {
    t.stopPropagation();
    const i = t.currentTarget.index;
    if (i != null) {
      const s = this.customizationkey.concat();
      s.splice(i, 1), L(this, "config-changed", s);
    }
  }
  _editRow(t) {
    t.stopPropagation();
    const i = t.target.index;
    i != null && L(this, "edit-item", i);
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
    L(this, "config-changed", [
      ...this.customizationkey,
      o
    ]), i.value = "";
  }
  static get styles() {
    return vt`
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
Bt([
  C({ attribute: !1 })
], oe.prototype, "hass", 2);
Bt([
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
Bt([
  C({ attribute: !1 })
], Xt.prototype, "customization", 2);
Xt = Bt([
  jt("status-items-editor")
], Xt);
var Fi = Object.defineProperty, Ri = Object.getOwnPropertyDescriptor, nt = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Ri(t, i) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (o = (s ? a(t, i, o) : a(o)) || o);
  return s && o && Fi(t, i, o), o;
};
let J = class extends W {
  constructor() {
    super(...arguments), this.useSensorSchema = !1, this._schemadomain = E(() => {
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
    }), this._schemaEntity = E(() => {
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
        {
          name: "state_content",
          selector: { ui_state_content: { entity_id: e } }
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
      return $``;
    (i = this._config) != null && i.invert_state || (this._config = {
      ...this._config,
      type: this.config.type || "",
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
    return $`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${e}
        .computeLabel=${(s) => Ut(this.hass, s)}
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
    return vt`
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
nt([
  C({ attribute: !1 })
], J.prototype, "config", 2);
nt([
  C({ attribute: !1 })
], J.prototype, "hass", 2);
nt([
  C({ attribute: !1 })
], J.prototype, "lovelace", 2);
nt([
  C({ type: Boolean })
], J.prototype, "useSensorSchema", 2);
nt([
  C({ type: Number })
], J.prototype, "index", 2);
nt([
  k()
], J.prototype, "getSchema", 2);
nt([
  k()
], J.prototype, "_config", 2);
J = nt([
  jt("status-card-plus-item-editor")
], J);
var Ui = Object.defineProperty, Bi = Object.getOwnPropertyDescriptor, ht = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Bi(t, i) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (o = (s ? a(t, i, o) : a(o)) || o);
  return s && o && Ui(t, i, o), o;
};
let ot = class extends W {
  constructor() {
    super(...arguments), this._subElementEditorDomain = void 0, this._subElementEditorEntity = void 0, this.rulesets = [
      {
        group_id: "",
        group_icon: "",
        group_status: "",
        rules: [{ key: "", value: "" }]
      }
    ], this.computeLabel = E(
      (e, t, i) => Ut(this.hass, e, t, i)
    ), this._filterInitialized = !1, this._lastFilter = {
      area: [],
      floor: [],
      label: []
    }, this._schema = E(
      (e, t, i, s) => {
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
    ), this._toggleschema = E((e) => [
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
    ]), this._entitiesSchema = E((e) => {
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
    }), this._buildToggleOptions = E(
      (e, t) => this._buildOptions("toggle", e, t)
    ), this._memoizedClassesForArea = E(
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
      }, L(this, "config-changed", { config: { ...this._config } });
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
    }, this._loadRulesetsFromConfig(), this.requestUpdate();
  }
  _updateAreaFloorInConfig() {
    if (!this._config || !this._config.filter) return;
    this._config.filter === "area" && this._config.floor !== void 0 ? (delete this._config.floor, L(this, "config-changed", { config: { ...this._config } })) : this._config.filter === "floor" && this._config.area !== void 0 && (delete this._config.area, L(this, "config-changed", { config: { ...this._config } }));
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
      const i = e.get("_config"), s = (i == null ? void 0 : i.extra_entities) ?? [], o = this._config.extra_entities ?? [], n = (i == null ? void 0 : i.content) ?? [], a = this._config.content ?? [], r = Array.isArray(this._config.area) ? [...this._config.area] : this._config.area ? [this._config.area] : [], c = Array.isArray(this._config.floor) ? [...this._config.floor] : this._config.floor ? [this._config.floor] : [], l = Array.isArray(this._config.label) ? [...this._config.label] : [];
      this._filterInitialized || (this._lastFilter = {
        area: r,
        floor: c,
        label: l
      }, this._filterInitialized = !0);
      const d = this._lastFilter.area, h = this._lastFilter.floor, u = this._lastFilter.label, m = !Y(u, l), f = !Y(h, c);
      if (!Y(d, r) || f || m) {
        const p = this.possibleToggleDomains, _ = [];
        for (const v of Object.keys(et)) {
          const g = et[v];
          for (const y of Object.keys(g))
            y !== "on" && y !== "off" && _.push(`${ft(v)} - ${y}`);
          _.push(ft(v));
        }
        const A = p.sort((v, g) => {
          const y = _.indexOf(v), H = _.indexOf(g);
          return (y === -1 ? _.length : y) - (H === -1 ? _.length : H);
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
      t && (L(this, "config-changed", { config: { ...this._config } }), this.requestUpdate());
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
      const r = this.hass.localize(`component.${n}.entity_component._.name`) || n, c = this.hass.localize(
        `ui.dialogs.entity_registry.editor.device_classes.${n}.${a}`
      ) || a;
      return `${r} - ${c}`;
    }
    return e === "scene" ? "Scene" : this.hass.localize(`component.${e}.entity_component._.name`) || e;
  }
  _classesForArea(e, t, i) {
    var l;
    const s = ((l = this._config) == null ? void 0 : l.extra_entities) || [];
    let o = Object.values(this.hass.entities).filter(
      (d) => !d.hidden && gt.includes(U(d.entity_id))
    );
    if (e && e.length > 0)
      o = o.filter(
        (d) => {
          var h;
          return e.includes(d.area_id) || d.device_id && e.includes((h = this.hass.devices[d.device_id]) == null ? void 0 : h.area_id);
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
    i && i.length > 0 && (o = o.filter(
      (d) => {
        var h, u;
        return ((h = d.labels) == null ? void 0 : h.some((m) => i.includes(m))) || d.device_id && Array.isArray((u = this.hass.devices[d.device_id]) == null ? void 0 : u.labels) && this.hass.devices[d.device_id].labels.some(
          (m) => i.includes(m)
        );
      }
    ));
    const n = [];
    for (const d of Object.keys(et)) {
      const h = et[d];
      for (const u of Object.keys(h))
        u !== "on" && u !== "off" && n.push(`${ft(d)} - ${u}`);
      n.push(ft(d));
    }
    const a = new Set(
      o.map((d) => U(d.entity_id)).filter((d) => d !== "binary_sensor" && d !== "cover" && d !== "switch").map((d) => ft(d))
    ), r = /* @__PURE__ */ new Set();
    o.filter(
      (d) => ["binary_sensor", "cover", "switch"].includes(
        U(d.entity_id)
      )
    ).forEach((d) => {
      var m;
      const h = U(d.entity_id), u = ((m = this.hass.states[d.entity_id]) == null ? void 0 : m.attributes.device_class) || "";
      u && r.add(`${ft(h)} - ${u}`);
    });
    const c = [...r];
    return [...a, ...c, ...s].sort(
      (d, h) => {
        const u = n.indexOf(d), m = n.indexOf(h);
        return (u === -1 ? n.length : u) - (m === -1 ? n.length : m);
      }
    );
  }
  _buildOptions(e, t, i) {
    var r;
    const s = [.../* @__PURE__ */ new Set([...t, ...i])], o = ((r = this.hass) == null ? void 0 : r.states) || {}, n = /* @__PURE__ */ new Map(), a = s.map((c) => {
      var d, h;
      if (n.has(c))
        return { value: c, label: n.get(c) };
      let l;
      return c.includes(".") ? l = ((h = (d = o[c]) == null ? void 0 : d.attributes) == null ? void 0 : h.friendly_name) || c : c === "scene" ? l = "Scene" : l = this._labelForTypePair(c), n.set(c, l), { value: c, label: l };
    });
    return a.sort((c, l) => {
      const d = c.value.includes("."), h = l.value.includes(".");
      return d && !h ? -1 : !d && h ? 1 : He(
        c.label,
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
      o[s] = e.detail, L(this, "config-changed", {
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
    var r, c, l, d, h;
    const s = `_subElementEditor${e.charAt(0).toUpperCase() + e.slice(1)}`, o = this[s], n = ((l = (c = (r = this._config) == null ? void 0 : r.customization) == null ? void 0 : c[(o == null ? void 0 : o.index) ?? 0]) == null ? void 0 : l.type) ?? "unknown", a = this._labelForTypePair(n);
    return $`
      <div class="header">
        <div class="back-title">
          <ha-icon-button
            slot="trigger"
            .label=${this.hass.localize("ui.common.back")}
            .path=${fi}
            @click=${t}
          ></ha-icon-button>
          <span slot="title">${a}</span>
        </div>
      </div>
      <status-card-plus-item-editor
        .hass=${this.hass}
        .lovelace=${this.lovelace}
        .config=${((h = (d = this._config) == null ? void 0 : d.customization) == null ? void 0 : h[(o == null ? void 0 : o.index) ?? 0]) ?? {}}
        .getSchema=${e}
        .index=${(o == null ? void 0 : o.index) ?? 0}
        @config-changed=${i}
      >
      </status-card-plus-item-editor>
    `;
  }
  _customizationChanged(e, t) {
    e.stopPropagation(), !(!this._config || !this.hass) && L(this, "config-changed", {
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
    }, L(this, "config-changed", { config: this._config });
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
    var d, h, u, m, f, b, p, _, A, v, g, y, H;
    const e = Object.values(((d = this.hass) == null ? void 0 : d.entities) || {}), t = Object.values(((h = this.hass) == null ? void 0 : h.devices) || {}), i = (u = this.hass) != null && u.areas ? Object.values(this.hass.areas) : [], s = {
      area: Array.isArray((m = this._config) == null ? void 0 : m.area) ? this._config.area : (f = this._config) != null && f.area ? [this._config.area] : [],
      floor: Array.isArray((b = this._config) == null ? void 0 : b.floor) ? this._config.floor : (p = this._config) != null && p.floor ? [this._config.floor] : [],
      label: Array.isArray((_ = this._config) == null ? void 0 : _.label) ? this._config.label : [],
      hiddenAreas: ((A = this._config) == null ? void 0 : A.hidden_areas) ?? [],
      hiddenLabels: ((v = this._config) == null ? void 0 : v.hidden_labels) ?? [],
      hiddenEntities: ((g = this._config) == null ? void 0 : g.hidden_entities) ?? []
    }, o = Ie(
      e,
      t,
      i,
      ((y = this.hass) == null ? void 0 : y.states) || {},
      s,
      gt
    ), n = Object.fromEntries(
      Object.entries(o).map(([S, x]) => [
        S,
        x.map((O) => O.entity_id)
      ])
    ), a = this._hiddenEntitiesByDomain(), r = ((H = this.hass) == null ? void 0 : H.states) || {}, c = Array.from(
      /* @__PURE__ */ new Set([...Object.keys(n), ...Object.keys(a)])
    ).filter((S) => gt.includes(S)), l = It(
      r,
      this.hass.locale.language
    );
    return c.sort((S, x) => S.localeCompare(x)).map((S) => {
      const x = /* @__PURE__ */ new Set([
        ...n[S] || [],
        ...a[S] || []
      ]);
      return { domain: S, entities: Array.from(x).sort(l) };
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
    var a, r, c;
    const i = ((a = this.hass) == null ? void 0 : a.states) || {}, s = {};
    for (const l of t) {
      const d = ((c = (r = i[l]) == null ? void 0 : r.attributes) == null ? void 0 : c.device_class) || "";
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
    var h, u, m, f, b, p, _;
    const e = {}, t = Array.isArray((h = this._config) == null ? void 0 : h.hidden_entities) ? this._config.hidden_entities : [];
    if (t.length === 0) return e;
    const i = ((u = this.hass) == null ? void 0 : u.entities) || {}, s = ((m = this.hass) == null ? void 0 : m.devices) || {}, o = (f = this.hass) != null && f.areas ? Object.values(this.hass.areas) : [], n = (b = this._config) == null ? void 0 : b.area, a = (p = this._config) == null ? void 0 : p.floor, r = (_ = this._config) == null ? void 0 : _.label, c = n ? Array.isArray(n) ? n : [n] : [], l = a ? Array.isArray(a) ? a : [a] : [], d = r ? Array.isArray(r) ? r : [r] : [];
    for (const A of t) {
      const v = U(A);
      if (!gt.includes(v)) continue;
      const g = i[A], y = g != null && g.device_id ? s[g.device_id] : void 0;
      if (((g == null ? void 0 : g.area_id) != null || (y == null ? void 0 : y.area_id) != null) && !(d.length && !(Array.isArray(g == null ? void 0 : g.labels) && g.labels.some((x) => d.includes(x)) || Array.isArray(y == null ? void 0 : y.labels) && y.labels.some((x) => d.includes(x)))) && !(c.length && !(g != null && g.area_id && c.includes(g.area_id) || y != null && y.area_id && c.includes(y.area_id)))) {
        if (l.length) {
          const S = (g == null ? void 0 : g.area_id) && o.some(
            (O) => O.area_id === g.area_id && O.floor_id && l.includes(O.floor_id)
          ), x = (y == null ? void 0 : y.area_id) && o.some(
            (O) => O.area_id === y.area_id && O.floor_id && l.includes(O.floor_id)
          );
          if (!S && !x) continue;
        }
        e[v] || (e[v] = []), e[v].push(A);
      }
    }
    return e;
  }
  _domainIcon(e, t = "on", i) {
    const s = et;
    if (e in s) {
      const o = s[e];
      return typeof o == "string" ? o : i && o[i] ? o[i][t === "off" ? "off" : "on"] || o[i] : o[t === "off" ? "off" : "on"] || Object.values(o)[0];
    }
    return "mdi:help-circle";
  }
  render() {
    var o, n;
    if (!this.hass || !this._config)
      return $`<div>Loading...</div>`;
    const e = this._toggleschema(this.toggleSelectOptions), t = this._schema(
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
            .path=${_i}
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
    return vt`
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
  C({ attribute: !1 })
], ot.prototype, "hass", 2);
ht([
  C({ attribute: !1 })
], ot.prototype, "lovelace", 2);
ht([
  C({ type: Object })
], ot.prototype, "_config", 2);
ht([
  k()
], ot.prototype, "_subElementEditorDomain", 2);
ht([
  k()
], ot.prototype, "_subElementEditorEntity", 2);
ht([
  k()
], ot.prototype, "rulesets", 2);
ot = ht([
  jt("status-card-plus-editor")
], ot);
console.info(
  `%c STATUS-CARD-PLUS %c ${Ne.version} `,
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

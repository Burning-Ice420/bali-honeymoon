(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [94260], {

        /***/
        697478: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(552854);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var a6 = function(a, b) {
                        var c = a.Veb.get(b);
                        if (c != null) return c;
                        c = {
                            value: a.Iq.eu(b)
                        };
                        a.Veb.set(b, c);
                        a.Neb.set(c, b);
                        return c
                    },
                    b6 = function(a, b) {
                        a = a.Neb.get(b);
                        if (a == null) throw new PAc("ref does not exists");
                        return a
                    },
                    QAc = function() {
                        const a = b => {
                            if (b ? .type !== "text2") throw new c6("text2", b);
                            return b.value
                        };
                        return {
                            im: b => ({
                                type: "text2",
                                value: b
                            }),
                            fu: b => {
                                if (b ? .type !== "text2") throw new d6("text2", b);
                                return b.value
                            },
                            eu: a,
                            Rx: a
                        }
                    },
                    RAc = __webpack_require__(186901).EW;
                var SAc = class {
                        static G(a) {
                            __c.L(a, {
                                lXa: RAc
                            })
                        }
                        get lXa() {
                            const a = [];
                            for (const b of this.list.value) {
                                const c = a6(this, b);
                                if (c === void 0) throw new PAc("undefined value found when deserializing list.");
                                a.push(c)
                            }
                            return a
                        }
                        count() {
                            return this.list.value.count()
                        }
                        toArray() {
                            return this.lXa.map(({
                                value: a
                            }) => a)
                        }
                        first(a) {
                            const b = this.list.value.first(a ? c => a(a6(this, c)) : void 0);
                            if (b != null) return a6(this, b)
                        }
                        last(a) {
                            const b = this.list.value.last(a ? c => a(a6(this, c)) : void 0);
                            if (b != null) return a6(this, b)
                        }
                        next(a, b) {
                            var c =
                                b ? d => b(a6(this, d)) : void 0;
                            a = b6(this, a);
                            c = this.list.value.next(a, c);
                            if (c != null) return a6(this, c)
                        }
                        previous(a, b) {
                            var c = b ? d => b(a6(this, d)) : void 0;
                            a = b6(this, a);
                            c = this.list.value.previous(a, c);
                            if (c != null) return a6(this, c)
                        }
                        map(a) {
                            return this.list.value.map((b, c) => a(a6(this, b), c))
                        }
                        filter(a) {
                            return this.list.value.filter((b, c) => a(a6(this, b), c)).map(b => a6(this, b))
                        }
                        forEach(a) {
                            return this.list.value.forEach((b, c) => a(a6(this, b), c))
                        }
                        some(a) {
                            return this.list.value.some(b => a(a6(this, b)))
                        }
                        constructor(a, b) {
                            this.Iq =
                                b;
                            this.Veb = (SAc.G(this), new WeakMap);
                            this.Neb = new WeakMap;
                            __c.x(a.type === "list");
                            this.list = a
                        }
                    },
                    TAc = class extends SAc {
                        replace(a, b) {
                            a = b6(this, a);
                            b = this.list.value.replace(a, this.Iq.im(b));
                            return a6(this, b)
                        }
                        MI(a, b) {
                            a = a != null ? b6(this, a) : void 0;
                            b = this.list.value.MI(a, this.Iq.im(b));
                            return a6(this, b)
                        }
                        eF(a, b) {
                            a = a != null ? b6(this, a) : void 0;
                            return this.list.value.eF(a, b.map(c => this.Iq.im(c))).map(c => a6(this, c))
                        }
                        insertBefore(a, b) {
                            a = a != null ? b6(this, a) : void 0;
                            b = this.list.value.insertBefore(a, this.Iq.im(b));
                            return a6(this,
                                b)
                        }
                        append(a) {
                            a = this.list.value.append(this.Iq.im(a));
                            return a6(this, a)
                        }
                        prepend(a) {
                            a = this.list.value.prepend(this.Iq.im(a));
                            return a6(this, a)
                        }
                        delete(a) {
                            a = b6(this, a);
                            this.list.value.delete(a)
                        }
                        mB(a) {
                            this.list.value.mB(a ? b => a(a6(this, b)) : void 0)
                        }
                        moveBefore(a, b) {
                            a = a == null ? void 0 : b6(this, a);
                            b = b6(this, b);
                            this.list.value.moveBefore(a, b)
                        }
                    };
                var f6 = class {
                        static string(a) {
                            const b = (c, d) => {
                                if (c == null && a != null) return a;
                                if (c ? .type !== "string") throw d === "toWidgetData" ? new c6("string", c) : new d6("string", c);
                                return c.value
                            };
                            return {
                                im: c => ({
                                    type: "string",
                                    value: c
                                }),
                                fu: c => b(c, "toWidgetState"),
                                eu: c => b(c, "toWidgetData"),
                                Rx: c => b(c, "toWidgetData")
                            }
                        }
                        static literal(a, b) {
                            if (a.length === 0) throw new e6("At least one value must be provided for literal types.");
                            const c = new Set(a),
                                d = (e, f) => {
                                    if (e == null && b != null) return b;
                                    if (e ? .type !== "string" || !c.has(e.value)) throw f ===
                                        "toWidgetData" ? new c6("literal", e) : new d6("literal", e);
                                    return e.value
                                };
                            return {
                                im: e => ({
                                    type: "string",
                                    value: e
                                }),
                                fu: e => d(e, "toWidgetState"),
                                eu: e => d(e, "toWidgetData"),
                                Rx: e => d(e, "toWidgetData")
                            }
                        }
                        static integer(a) {
                            const b = (c, d) => {
                                if (c == null && a != null) return a;
                                if (c ? .type !== "int32" || !Number.isFinite(c.value) || !Number.isInteger(c.value)) throw d === "toWidgetData" ? new c6("integer", c) : new d6("integer", c);
                                return c.value
                            };
                            return {
                                im: c => {
                                    if (!Number.isFinite(c) || !Number.isInteger(c)) throw new UAc("integer", c);
                                    return {
                                        type: "int32",
                                        value: c
                                    }
                                },
                                fu: c => b(c, "toWidgetState"),
                                eu: c => b(c, "toWidgetData"),
                                Rx: c => b(c, "toWidgetData")
                            }
                        }
                        static double(a) {
                            const b = (c, d) => {
                                if (c == null && a != null) return a;
                                if (c ? .type !== "double" || !Number.isFinite(c.value)) throw d === "toWidgetData" ? new c6("double", c) : new d6("double", c);
                                return c.value
                            };
                            return {
                                im: c => {
                                    if (!Number.isFinite(c)) throw new UAc("double", c);
                                    return {
                                        type: "double",
                                        value: c
                                    }
                                },
                                fu: c => b(c, "toWidgetState"),
                                eu: c => b(c, "toWidgetData"),
                                Rx: c => b(c, "toWidgetData")
                            }
                        }
                        static bd(a) {
                            const b = (c, d) => {
                                if (c == null && a != null) return a;
                                if (c ? .type !== "boolean") throw d === "toWidgetData" ? new c6("boolean", c) : new d6("boolean", c);
                                return c.value
                            };
                            return {
                                im: c => ({
                                    type: "boolean",
                                    value: c
                                }),
                                fu: c => b(c, "toWidgetState"),
                                eu: c => b(c, "toWidgetData"),
                                Rx: c => b(c, "toWidgetData")
                            }
                        }
                        static fill() {
                            const a = b => {
                                if (b ? .type !== "fill") throw new c6("fill", b);
                                return b.value
                            };
                            return {
                                im: b => ({
                                    type: "fill",
                                    value: b
                                }),
                                fu: b => {
                                    if (b ? .type !== "fill") throw new d6("fill", b);
                                    return b.value
                                },
                                eu: a,
                                Rx: a
                            }
                        }
                        static stroke() {
                            const a = b => {
                                if (b ? .type !== "stroke") throw new c6("stroke", b);
                                return b.value
                            };
                            return {
                                im: b => ({
                                    type: "stroke",
                                    value: b
                                }),
                                fu: b => {
                                    if (b ? .type !== "stroke") throw new d6("stroke", b);
                                    return b.value
                                },
                                eu: a,
                                Rx: a
                            }
                        }
                        static O(a) {
                            const b = new Set;
                            for (const d of Object.keys(a)) {
                                const [e] = a[d];
                                if (b.has(e)) throw new e6(`Duplicate serialized keys "${e}" found in record schema.`);
                                b.add(e)
                            }
                            const c = (d, e) => {
                                if (e ? .type !== "dict") throw new c6("record", e);
                                const f = {};
                                for (const g of Object.keys(a)) {
                                    const [h, k] = a[g], l = RAc(() => {
                                        const m = e.value.get(h);
                                        return k.eu(m)
                                    }, {
                                        keepAlive: !0
                                    });
                                    Object.defineProperty(f, g, {
                                        get() {
                                            return l.get()
                                        },
                                        set(m) {
                                            d !== "readonly" && (m = k.im(m), m == null ? e.value.delete(h) : e.value.set(h, m))
                                        },
                                        enumerable: !0
                                    })
                                }
                                return f
                            };
                            return {
                                im: d => {
                                    const e = {};
                                    for (const f of Object.keys(a)) {
                                        const [g, h] = a[f], k = h.im(d[f]);
                                        k != null && (e[g] = k)
                                    }
                                    return {
                                        type: "dict",
                                        value: new Map(Object.entries(e))
                                    }
                                },
                                fu: d => {
                                    if (d ? .type !== "dict") throw new d6("record", d);
                                    const e = {};
                                    for (const f of Object.keys(a)) {
                                        const [g, h] = a[f], k = h.fu(d.value.get(g));
                                        k != null && (e[f] = k)
                                    }
                                    return e
                                },
                                eu: d => c("editable", d),
                                Rx: d => c("readonly", d),
                                Cb: d => f6.O({ ...a,
                                    ...d
                                })
                            }
                        }
                        static list(a) {
                            return {
                                im: b =>
                                    ({
                                        type: "list",
                                        value: b.map(c => a.im(c))
                                    }),
                                fu: b => {
                                    if (b ? .type !== "list") throw new d6("list", b);
                                    return b.value.filter(__c.qb).map(c => a.fu(c))
                                },
                                eu: b => {
                                    if (b ? .type !== "list") throw new c6("list", b);
                                    return new TAc(b, a)
                                },
                                Rx: b => {
                                    if (b ? .type !== "list") throw new c6("list", b);
                                    return new SAc(b, a)
                                }
                            }
                        }
                        static optional(a) {
                            return {
                                im: b => {
                                    if (b != null) return a.im(b)
                                },
                                fu: b => {
                                    if (b != null) return a.fu(b)
                                },
                                eu: b => {
                                    if (b != null) return a.eu(b)
                                },
                                Rx: b => {
                                    if (b != null) return a.Rx(b)
                                }
                            }
                        }
                        static union(a, b) {
                            const c = new Set(Object.keys(a)),
                                d = e => {
                                    if (e ? .type !==
                                        "dict") throw new c6("union", e);
                                    const f = e.value.get("k") ? .value,
                                        g = e.value.get("v");
                                    if (f == null || g == null || typeof f !== "string" || !c.has(f)) throw new c6("union", e);
                                    return {
                                        yga: a[f],
                                        zga: g
                                    }
                                };
                            return {
                                im: e => {
                                    const f = b(e);
                                    return {
                                        type: "dict",
                                        value: new Map([
                                            ["k", {
                                                type: "string",
                                                value: f
                                            }],
                                            ["v", a[f].im(e)]
                                        ])
                                    }
                                },
                                fu: e => {
                                    if (e ? .type !== "dict") throw new d6("union", e);
                                    const f = e.value.get("k") ? .value,
                                        g = e.value.get("v");
                                    if (f == null || g == null || typeof f !== "string" || !c.has(f)) throw new d6("union", e);
                                    const {
                                        yga: h,
                                        zga: k
                                    } = {
                                        yga: a[f],
                                        zga: g
                                    };
                                    return h.fu(k)
                                },
                                eu: e => {
                                    const {
                                        yga: f,
                                        zga: g
                                    } = d(e);
                                    return f.eu(g)
                                },
                                Rx: e => {
                                    const {
                                        yga: f,
                                        zga: g
                                    } = d(e);
                                    return f.Rx(g)
                                }
                            }
                        }
                    },
                    e6 = class extends Error {
                        constructor(a) {
                            super(a);
                            this.name = "SchemaError"
                        }
                    },
                    PAc = class extends e6 {
                        constructor(a) {
                            super(`ListError: ${a}`)
                        }
                    },
                    c6 = class extends e6 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget data`)
                        }
                    },
                    d6 = class extends e6 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget state`)
                        }
                    },
                    UAc = class extends e6 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of document state`)
                        }
                    };
                var VAc = {
                    Ef: {
                        status: 2
                    },
                    Cec: new Map,
                    Eec: 0,
                    B3b: void 0,
                    UVb: void 0,
                    SCa: !1,
                    T3b: "unchecked",
                    NT: !1,
                    yn: !1
                };
                var WAc = f6.O({
                        type: ["t", f6.literal(["text2"], "text2"), "readonly"],
                        text: ["te", QAc()]
                    }),
                    XAc = f6.union({
                        text2: WAc
                    }, a => a.type),
                    YAc = f6.O({
                        id: ["i", f6.string("")],
                        label: ["l", XAc]
                    }),
                    ZAc = f6.list(YAc),
                    $Ac = f6.list(f6.string("")),
                    aBc = f6.O({
                        id: ["i", f6.string("")],
                        label: ["l", XAc],
                        bJ: ["tl", f6.literal(["c", "u"], "c")],
                        DEa: ["k", f6.optional(f6.double(1))],
                        required: ["rq", f6.bd(!1)],
                        W: ["c", f6.double(0)]
                    }),
                    bBc = f6.O({
                        type: ["t", f6.literal(["r"], "r"), "readonly"]
                    }),
                    cBc = f6.O({
                        type: ["t", f6.literal(["p"], "p"), "readonly"]
                    }),
                    dBc =
                    f6.O({
                        type: ["t", f6.literal(["q"], "q"), "readonly"]
                    }),
                    eBc = f6.union({
                        r: bBc,
                        p: cBc,
                        q: dBc
                    }, a => a.type),
                    fBc = aBc.Cb({
                        type: ["t", f6.literal(["select"], "select"), "readonly"],
                        variant: ["v", f6.optional(eBc)],
                        options: ["o", ZAc],
                        B0: ["m", f6.optional(f6.integer(1))],
                        gya: ["co", $Ac]
                    }),
                    gBc = f6.O({
                        type: ["t", f6.literal(["e"], "e"), "readonly"]
                    }),
                    hBc = f6.O({
                        type: ["t", f6.literal(["f"], "f"), "readonly"],
                        VN: ["n", f6.integer(1)]
                    }),
                    iBc = f6.union({
                        e: gBc,
                        f: hBc
                    }, a => a.type),
                    jBc = aBc.Cb({
                        type: ["t", f6.literal(["text"], "text"), "readonly"],
                        placeholder: ["p",
                            f6.string("")
                        ],
                        variant: ["v", iBc]
                    }),
                    kBc = f6.O({
                        type: ["t", f6.literal(["a"], "a"), "readonly"]
                    }),
                    lBc = f6.O({
                        type: ["t", f6.literal(["b"], "b"), "readonly"]
                    }),
                    mBc = f6.O({
                        type: ["t", f6.literal(["c"], "c"), "readonly"]
                    }),
                    nBc = f6.O({
                        type: ["t", f6.literal(["d"], "d"), "readonly"]
                    }),
                    oBc = f6.union({
                        a: kBc,
                        b: lBc,
                        c: mBc,
                        d: nBc
                    }, a => a.type),
                    pBc = aBc.Cb({
                        type: ["t", f6.literal(["number"], "number"), "readonly"],
                        variant: ["v", oBc],
                        min: ["a", f6.optional(f6.double())],
                        max: ["b", f6.optional(f6.double())]
                    }),
                    qBc = f6.union({
                            select: fBc,
                            text: jBc,
                            number: pBc
                        },
                        a => a.type),
                    rBc = f6.list(qBc),
                    sBc = f6.O({
                        Aq: ["A", f6.optional(f6.double(1))],
                        Bq: ["B", f6.optional(f6.double(1))],
                        Jt: ["C", f6.optional(f6.double(1))]
                    }),
                    tBc = f6.O({
                        label: ["l", XAc],
                        bJ: ["B", f6.optional(f6.literal(["c", "u"]))],
                        Jt: ["C", f6.optional(f6.double(1))],
                        Bq: ["E", f6.optional(f6.double(1))],
                        Aq: ["D", f6.optional(f6.double(1))],
                        Kaa: ["F", f6.optional(f6.double(1))]
                    }),
                    uBc = f6.O({}),
                    vBc = f6.O({
                        Jaa: ["A", f6.double(1.25)],
                        Jt: ["B", f6.double(1)],
                        Bq: ["C", f6.double(1.25)],
                        Aq: ["D", f6.double(1.25)],
                        background: ["E", f6.optional(f6.fill())]
                    }),
                    wBc = f6.O({
                        label: ["A", QAc()],
                        bJ: ["tl", f6.literal(["c", "u"])]
                    }),
                    xBc = f6.literal(["l", "r"], "l"),
                    yBc = f6.O({
                        minHeight: ["mh", f6.double(1)],
                        minWidth: ["mw", f6.double(1)],
                        type: ["t", f6.literal(["poll", "quiz"], "poll"), "readonly"],
                        id: ["i", f6.string()],
                        ts: ["s", f6.string()],
                        oG: ["a", f6.optional(f6.string())],
                        direction: ["r", xBc],
                        Uha: ["d", f6.string("")],
                        jba: ["pf", f6.fill()],
                        Tba: ["sf", f6.fill()],
                        border: ["b", f6.stroke()],
                        W: ["c", f6.double(0)],
                        Mi: ["D", f6.optional(f6.double(16))],
                        Ej: ["E", f6.optional(f6.double(16))],
                        ES: ["F",
                            f6.optional(sBc)
                        ],
                        A_: ["hh", f6.bd(!1)],
                        aDa: ["I", f6.optional(f6.bd(!1))],
                        ara: ["z", f6.bd(!0)],
                        wWa: ["h", f6.optional(uBc)],
                        title: ["j", f6.optional(wBc)],
                        header: ["A", f6.optional(vBc)],
                        fields: ["f", rBc],
                        footer: ["fo", f6.optional(tBc)]
                    }),
                    zBc = f6.union({
                        poll: yBc,
                        quiz: yBc
                    }, a => a.type);
                __c.oLa = {
                    yqb: function() {
                        return {
                            S3b: VAc,
                            Iq: zBc
                        }
                    }
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/ca4e8a25a49ae7e5.js.map
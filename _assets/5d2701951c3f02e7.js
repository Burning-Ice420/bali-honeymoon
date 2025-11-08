(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [5936], {

        /***/
        563790: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var uC = __c.uC;
                var pc = __c.pc;
                var pg = __c.pg;
                var L = __c.L;
                var Yh = __c.Yh;
                var ow = __c.ow;
                var J = __c.J;
                var A = __c.A;
                var zh = __c.zh;
                var z = __c.z;
                var ECc = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of e) {
                                d = l.ua;
                                var g = m.column,
                                    h = a.layout.cells.get(d, g);
                                if (!h || (l.boundary === "start" ? h.span.Xb === d : h.span.Qc === d))
                                    if (d = c.get(`${g.id}:${d.id}`), d = l.boundary === "start" ? d ? .ja : d ? .za) {
                                        h = f[f.length - 1];
                                        g = (g = b.next(g)) ? {
                                            column: g,
                                            boundary: "start"
                                        } : {
                                            column: z(b.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.AAa, k = k.column === m.column && k.boundary === m.boundary;
                                        k && (k = h.R$a, k = k.ua === l.ua && k.boundary === l.boundary);
                                        k && h.color === d.color && h.weight === d.weight &&
                                            h.ud === d.ud && h.ud === 0 ? h.AAa = g : f.push({
                                                R$a: l,
                                                tNb: m,
                                                AAa: g,
                                                color: d.color,
                                                weight: d.weight,
                                                ud: d.ud
                                            })
                                    }
                            }
                        return f
                    },
                    FCc = function(a, b, c, d, e, f) {
                        const g = [];
                        for (const m of e)
                            for (const n of d) {
                                var h = n.ua,
                                    k = m.column;
                                e = a.layout.cells.get(h, k);
                                if (!e || (m.boundary === "start" ? e.span.mc === k : e.span.ad === k))
                                    if (e = c.get(`${k.id}:${h.id}`), (e = m.boundary === "start" ? e ? .ma : e ? .Ma) && (m.boundary !== "start" || f(h, k) !== 1)) {
                                        k = g[g.length - 1];
                                        h = (h = b.next(h)) ? {
                                            ua: h,
                                            boundary: "start"
                                        } : {
                                            ua: z(b.last()),
                                            boundary: "end"
                                        };
                                        var l;
                                        if (l = k) l = k.AUa, l = l.column ===
                                            m.column && l.boundary === m.boundary;
                                        l && (l = k.GAa, l = l.ua === n.ua && l.boundary === n.boundary);
                                        l && k.color === e.color && k.weight === e.weight && k.ud === e.ud && k.ud === 0 ? k.GAa = h : g.push({
                                            AUa: m,
                                            JNb: n,
                                            GAa: h,
                                            color: e.color,
                                            weight: e.weight,
                                            ud: e.ud
                                        })
                                    }
                            }
                        return g
                    },
                    GCc = function(a, b, c, d, e, f) {
                        const g = a.Dcb.iqb(d, b.last(), c.last());
                        a = (r, t) => {
                            const v = g.get(r) || 0,
                                w = g.get(t) || 0;
                            return v <= w ? r : t
                        };
                        const h = new Map;
                        if (e.length === 0 || f.length === 0) return h;
                        var k = [],
                            l = c.previous(f[0].column);
                        l && k.push({
                            column: l,
                            boundary: "start"
                        });
                        k.push(...f);
                        (f = c.next(f[f.length - 1].column)) && k.push({
                            column: f,
                            boundary: "start"
                        });
                        f = [];
                        (l = b.previous(e[0].ua)) && f.push({
                            ua: l,
                            boundary: "start"
                        });
                        f.push(...e);
                        (e = b.next(e[e.length - 1].ua)) && f.push({
                            ua: e,
                            boundary: "start"
                        });
                        for (const r of k) {
                            k = (e = r.boundary === "start" ? r.column : void 0) ? c.previous(e) : c.last();
                            for (const t of f) {
                                var m = t.boundary === "start" ? t.ua : void 0;
                                l = m ? b.previous(m) : b.last();
                                var n = e && m && d.get(`${e.id}:${m.id}`),
                                    p = e && l && d.get(`${e.id}:${l.id}`);
                                m = k && m && d.get(`${k.id}:${m.id}`);
                                var q = k && l && d.get(`${k.id}:${l.id}`);
                                l = r.boundary === "end" ? m ? .Ma : n ? .ma;
                                n = t.boundary === "end" ? p ? .za : n ? .ja;
                                p = r.boundary === "end" ? q ? .Ma : p ? .ma;
                                m = t.boundary === "end" ? q ? .za : m ? .ja;
                                q = __c.ija({
                                    ja: p,
                                    za: l,
                                    ma: m,
                                    Ma: n
                                }, a);
                                let v;
                                switch (q) {
                                    case "blockStart":
                                        v = p;
                                        break;
                                    case "blockEnd":
                                        v = l;
                                        break;
                                    case "inlineStart":
                                        v = m;
                                        break;
                                    case "inlineEnd":
                                        v = n;
                                        break;
                                    default:
                                        v = void 0
                                }
                                const {
                                    height: w,
                                    width: y
                                } = v ? .ud === 1 ? {
                                    height: v.weight,
                                    width: v.weight
                                } : {
                                    height: Math.max(m ? .weight || 0, n ? .weight || 0),
                                    width: Math.max(p ? .weight || 0, l ? .weight || 0)
                                };
                                h.set(o6(r, t), __c.ok(q, w / 2, y / 2))
                            }
                        }
                        return h
                    },
                    HCc = function(a, b, c, d, e, f, g, h) {
                        if (f.length === 0 || g.length === 0) return [];
                        const k = ECc(b, d, e, f, g);
                        h = FCc(b, c, e, f, g, h);
                        const l = GCc(a, c, d, e, f, g),
                            m = a.ixb(c),
                            n = a.swb(b, d),
                            p = b.direction === "rtl";
                        a = k.map(q => {
                            var r = q.tNb,
                                t = q.AAa,
                                v = q.R$a;
                            const w = q.color,
                                y = q.weight;
                            q = q.ud;
                            const B = p ? -1 : 1,
                                C = l.get(o6(r, v)) ? .Ma,
                                D = l.get(o6(t, v)) ? .ma;
                            if (C != null && D != null) {
                                var F = z(m.get(v.ua)),
                                    K = z(n.get(r.column));
                                r = z(n.get(t.column));
                                v = v.boundary === "start" ? F.start : F.end;
                                F = K.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: w,
                                    weight: y,
                                    ud: q,
                                    p1: new zh(F + C * B, v),
                                    p2: new zh(t + D * B, v),
                                    ...__c.tk((t - F) * B, q * y, C)
                                }
                            }
                        }).filter(__c.qb);
                        return [...h.map(q => {
                            var r = q.AUa,
                                t = q.JNb,
                                v = q.GAa;
                            const w = q.color,
                                y = q.weight;
                            q = q.ud;
                            const B = l.get(o6(r, t)) ? .za,
                                C = l.get(o6(r, v)) ? .ja;
                            if (B != null && C != null) {
                                var D = z(n.get(r.column)),
                                    F = z(m.get(t.ua));
                                t = z(m.get(v.ua));
                                r = r.boundary === "start" ? D.start : D.end;
                                D = F.start;
                                v = v.boundary === "start" ? t.start : t.end;
                                return {
                                    color: w,
                                    weight: y,
                                    ud: q,
                                    p1: new zh(r, D + B),
                                    p2: new zh(r, v + C),
                                    ...__c.tk(v - D, q * y, B)
                                }
                            }
                        }).filter(__c.qb), ...a]
                    },
                    ICc = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.nk(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.nk(d, e => `${e.ym}_${e.zm}`);
                            for (const [, e] of a) {
                                const {
                                    zm: f,
                                    ym: g
                                } = e[0];
                                a = __c.nk(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    ym: g,
                                    zm: f
                                })
                            }
                        }
                        return b
                    },
                    JCc = function(a, b, c, d, e) {
                        return a.rKb(b, c, d, e)
                    },
                    KCc = function(a, b, c, d, e, f) {
                        var g = __c.POb;
                        const h = d.get().flatMap(m => b.last() === m ? [{
                                ua: m,
                                boundary: "start"
                            }, {
                                ua: m,
                                boundary: "end"
                            }] : [{
                                ua: m,
                                boundary: "start"
                            }]),
                            k = e.get().flatMap(m => c.last() === m ? [{
                                column: m,
                                boundary: "start"
                            }, {
                                column: m,
                                boundary: "end"
                            }] : [{
                                column: m,
                                boundary: "start"
                            }]),
                            l = new Map;
                        for (const m of d.get())
                            for (const n of e.get())(d = JCc(g.Dcb, a, b, c, {
                                column: n,
                                ua: m
                            })) && l.set(`${n.id}:${m.id}`, d);
                        a = HCc(g, a, b, c, l, h, k, f);
                        return ICc(a)
                    },
                    LCc = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.rY(b.reference.Fj);
                                a = a.W1(b.reference.Qj);
                                return c != null && a != null;
                            case 1:
                                return a.rY(b.reference.Fj) != null;
                            case 2:
                                return a.W1(b.reference.Qj) != null;
                            case 3:
                                return !1;
                            default:
                                throw new A(b.reference);
                        }
                    },
                    MCc = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.V.length > 0) return !1;
                                a = a.LJ(c.y5.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.EA(new __c.HA, a.fM).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return LCc(b, d);
                                        case 1:
                                            return LCc(b, d.start) && LCc(b, d.end);
                                        default:
                                            throw new A(d);
                                    }
                                }).length > 0;
                            default:
                                throw new A(c);
                        }
                    },
                    NCc = function(a) {
                        switch (a) {
                            case 2:
                                return J("ibdecg");
                            case 7:
                                return J("446quA");
                            case 5:
                                return J("j1fbqg");
                            case 1:
                                return J("O5i4AQ");
                            case 6:
                                return J("C0VHsg");
                            case 4:
                                return J("9ND0kg");
                            case -1:
                                return J("RWqnLA");
                            case 9:
                                return J("nQR/7w");
                            case -2:
                                return J("P23rtA");
                            case 3:
                                return J("+IXmVg");
                            default:
                                throw new A(a);
                        }
                    },
                    OCc = function() {
                        const [a] = (0, __c.kb)(() => ow());
                        return a
                    },
                    PCc = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.I)(a, { ...b
                            })
                        })
                    },
                    QCc = function(a) {
                        var b = a.cD;
                        const c = a.content,
                            d = a.context,
                            e = a.Vr;
                        __c.x(c ? .nh ? .type === "formula");
                        const f = c.hk;
                        a = {
                            type: "dom",
                            render: g => g.innerText = ""
                        };
                        switch (f.type) {
                            case 9:
                                b = a;
                                break;
                            case 6:
                                b = b.tua ? .({
                                    content: __c.lf(__c.Fjb, { ...__c.XEb,
                                        value: f.value
                                    }),
                                    context: d,
                                    Vr: e
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                b = b.wua ? .({
                                    context: d,
                                    value: c.IA,
                                    valueType: c.hk.type
                                });
                                break;
                            case 0:
                                b = {
                                    type: "react",
                                    node: p6(__c.ox, {
                                        label: NCc(f.error),
                                        children: p6(__c.U7b, {
                                            tone: "critical"
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new A(f);
                        }
                        return b ? ? a
                    },
                    VCc = function(a) {
                        const b = a.cD,
                            c = a.ob,
                            d = a.gg,
                            e = a.zOb,
                            f = a.ib;
                        b.wua = g => __c.nTa({ ...g,
                            ib: f
                        });
                        b.OQa = g => QCc({ ...g,
                            cD: b
                        });
                        b.NQa = g => RCc({ ...g
                        });
                        b.tua = PCc(SCc({
                            gg: d,
                            ZW: void 0,
                            ob: c
                        }));
                        b.QQa = TCc(e, f);
                        b.RQa = PCc(g => p6(UCc, { ...g,
                            ib: f
                        }))
                    },
                    XCc = function({
                        label: a,
                        cb: b,
                        width: c,
                        height: d,
                        scale: e,
                        LUa: f
                    }) {
                        return p6("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: q6(__c.jx, {
                                className: r6("ivlMMQ", WCc(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && p6(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    WCc = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    ZCc = function({
                        de: a,
                        v0a: b,
                        scale: c,
                        Hr: d,
                        onMouseDown: e,
                        onTouchStart: f,
                        Ir: g,
                        Khb: h,
                        bWa: k
                    }) {
                        const l = s6(() => {
                                const q = d ? .get();
                                if (q != null && q.length !== 0) return new __c.gy(q)
                            }, [d]),
                            m = g(1),
                            n = g(c),
                            p = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return p6(__c.kx, {
                            bq: "light",
                            light: "light",
                            Ws: "light",
                            dark: "light",
                            children: q => p6("div", {
                                className: r6("ze9QCQ", p, q.className),
                                style: {
                                    width: n,
                                    height: n
                                },
                                children: p6("div", {
                                    style: {
                                        width: m,
                                        height: m,
                                        transform: `scale(${c})`
                                    },
                                    className: r6("N7J3UA", p),
                                    onMouseDown: e,
                                    onTouchStart: f,
                                    ref: l ? .sj,
                                    children: p6(__c.ux, {
                                        className: r6("m8CFdg",
                                            p, {
                                                G6wL4w: h,
                                                W_E0wA: b,
                                                _52RFdg: k === "move"
                                            }),
                                        ariaLabel: J("ruWN9A"),
                                        children: p6(YCc, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    aDc = function({
                        ob: a
                    }) {
                        const b = new $Cc,
                            c = new __c.eU,
                            d = t6(g => {
                                const {
                                    scale: h = 1,
                                    q0a: k,
                                    size: l = "small",
                                    Khb: m = !0
                                } = g, n = u6(p => b.Ir({
                                    scale: p,
                                    size: l,
                                    PFa: k
                                }), [l, k]);
                                return p6(ZCc, { ...g,
                                    scale: k ? Math.max(h, k) : h,
                                    de: g.sheet.direction === "rtl",
                                    v0a: g.selection != null && b.YAb(g.sheet, a, g.selection),
                                    Ir: n,
                                    Khb: m,
                                    bWa: g.bWa,
                                    onMouseDown: g.onMouseDown,
                                    onTouchStart: g.onTouchStart
                                })
                            }),
                            e = t6(g => {
                                const {
                                    scale: h = 1,
                                    q0a: k,
                                    size: l = "small",
                                    sheet: m,
                                    selection: n,
                                    fLb: p
                                } = g, q = u6(y => b.Ir({
                                    scale: y,
                                    size: l,
                                    PFa: k
                                }), [l, k]), r = k ? Math.max(h, k) : h, t = u6(y => n != null && b.YJa(n).has(y), [n]), v = u6(y => n != null && b.syb(m, a, n).has(y), [m, n]), w = u6(y => {
                                    var B = a.layout.vF.Xh(m);
                                    B = p != null && B.Ve(y, p.mc) >= 0 && B.Ve(y, p.ad) <= 0;
                                    return t(y) ? B ? "secondary-active" : "primary-active" : v(y) ? B ? "secondary-low" : "primary-low" : B ? "secondary-default" : "primary-default"
                                }, [m, p, v, t]);
                                return p6(v6, { ...g,
                                    pd: h,
                                    Qd: r,
                                    Ir: q,
                                    zI: w,
                                    vJ: c,
                                    ob: a
                                })
                            }),
                            f = t6(g => {
                                const {
                                    scale: h = 1,
                                    q0a: k,
                                    size: l = "small",
                                    sheet: m,
                                    selection: n,
                                    fLb: p
                                } = g, q = u6(y => b.Ir({
                                    scale: y,
                                    size: l,
                                    PFa: k
                                }), [l, k]), r = k ? Math.max(h, k) : h, t = u6(y => n != null && b.aKa(n).has(y), [n]), v = u6(y => n != null && b.tyb(m, a, n).has(y), [m, n]), w = u6(y => {
                                    var B = a.layout.vF.Ei(m);
                                    B = p != null && B.Ve(y, p.Xb) >= 0 && B.Ve(y, p.Qc) <= 0;
                                    return t(y) ? B ? "secondary-active" : "primary-active" : v(y) ? B ? "secondary-low" : "primary-low" : B ? "secondary-default" : "primary-default"
                                }, [m, p, v, t]);
                                return p6(w6, { ...g,
                                    pd: r,
                                    Qd: h,
                                    Ir: q,
                                    zI: w,
                                    vJ: c,
                                    ob: a
                                })
                            });
                        return {
                            pib: d,
                            oib: e,
                            qib: f
                        }
                    },
                    cDc = function(a) {
                        const b = a.Ds,
                            c = () => null;
                        return __c.ww(d =>
                            p6(bDc, { ...d,
                                Ds: b,
                                aj: c
                            }))
                    },
                    dDc = function({
                        sheet: a,
                        ob: b,
                        da: c,
                        range: d,
                        cd: e
                    }) {
                        x6(() => y6(() => {
                            if (e.current != null) {
                                var f = c ? .get() ? ? 1,
                                    g = a.direction === "rtl",
                                    h = b.layout.Oe.Ei(a),
                                    k = b.layout.Oe.Xh(a);
                                h = d && h.has(d.Xb);
                                g = d && k.has(d.mc) ? b.Na.ma(a, d.mc) * f * (g ? 1 : -1) : 0;
                                k = h ? -b.Na.ja(a, d.Xb) * f : 0;
                                e.current.style.transform = `translate(${g}px, ${k}px)`;
                                e.current.style.width = `${a.width*f}px`;
                                e.current.style.height = `${a.height*f}px`
                            }
                        }), [a, b.layout.Oe, b.Na, d, e, c])
                    },
                    gDc = function({
                        onScroll: a
                    }) {
                        const b = new eDc(a);
                        return {
                            iG: b,
                            dua: t6(c => p6(fDc, {
                                sheet: c.sheet,
                                iG: b,
                                children: c.children
                            }))
                        }
                    },
                    jDc = function(a) {
                        const b = a.Ds,
                            c = a.Qe,
                            d = a.Fcb,
                            e = a.ob,
                            f = ({
                                children: m
                            }) => m,
                            g = ({
                                children: m
                            }) => p6("div", {
                                className: "Vc5nkQ",
                                children: m
                            }),
                            {
                                iG: h,
                                dua: k
                            } = gDc({
                                onScroll: a.onScroll
                            });
                        class l extends hDc {
                            get mQ() {
                                const m = this.props.ia.gt,
                                    n = this.props.Jb;
                                switch (m) {
                                    case "screen":
                                        return k;
                                    case "print":
                                        return n.Lk != null ? g : f;
                                    default:
                                        throw new A(m);
                                }
                            }
                            componentDidMount() {
                                d.ocb(this.props.item, {
                                    Jb: this.props.Jb,
                                    ia: this.props.ia
                                })
                            }
                            componentWillUnmount() {
                                d.Nob(this.props.item, {
                                    Jb: this.props.Jb,
                                    ia: this.props.ia
                                })
                            }
                            render() {
                                d.ocb(this.props.item, {
                                    Jb: this.props.Jb,
                                    ia: this.props.ia
                                });
                                return p6(iDc, { ...this.props,
                                    da: this.da,
                                    Ds: b,
                                    mQ: this.mQ,
                                    aj: this.aj,
                                    Fcb: d,
                                    ob: e,
                                    iG: h
                                })
                            }
                            constructor(...m) {
                                super(...m);
                                this.da = z6(() => {
                                    const n = this.props.item;
                                    var p = this.props.ia,
                                        q = p.gt;
                                    p = p.uk;
                                    const r = this.props.Jb;
                                    switch (q) {
                                        case "screen":
                                            return p;
                                        case "print":
                                            if (r.Lk != null) return 1;
                                            q = d.nxb(n);
                                            if (!q) return 1;
                                            ({
                                                width: q
                                            } = new __c.Zp(n, q.Jb, {
                                                uk: p
                                            }));
                                            return q / n.config.width;
                                        default:
                                            throw new A(q);
                                    }
                                });
                                this.aj =
                                    t6(n => p6("div", {
                                        className: "wKvivQ",
                                        children: p6(__c.vTa, { ...this.props,
                                            ...n,
                                            Qe: c
                                        })
                                    }))
                            }
                        }
                        return {
                            Bkb: l,
                            iG: h
                        }
                    },
                    kDc = function(a, b, c) {
                        if (c != null && c.mc != null && c.Xb != null && c.ad != null && c.Qc != null) {
                            var d = b.Na.ma(a, c.mc),
                                e = b.Na.ja(a, c.Xb),
                                f = b.Na.ma(a, c.ad) + c.ad.width - d;
                            a = b.Na.ja(a, c.Qc) + c.Qc.height - e;
                            return Yh({
                                top: e,
                                left: d,
                                width: f,
                                height: a
                            })
                        }
                    },
                    mDc = function(a) {
                        const b = a.Ds,
                            c = a.ob,
                            d = () => null;
                        return e => p6(lDc, { ...e,
                            Ds: b,
                            aj: d,
                            ob: c
                        })
                    },
                    qDc = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                TTa: b,
                                BH: b,
                                Ua: {},
                                bE: {}
                            },
                            d = A6(() => a.oD.style || c, h => {
                                Object.assign(a.Bga.style, h.TTa);
                                Object.assign(a.oR.style, h.BH);
                                Object.assign(a.CH.style, h.Ua);
                                Object.assign(a.LH.style, h.bE);
                                h = h ? .Ua ? .textDecoration;
                                a.CH.classList.toggle("OQx3PQ", h === "underline");
                                a.CH.classList.toggle("_99ezUA", h === "line-through");
                                a.CH.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: nDc
                            }),
                            e = A6(() => a.pEa, h => {
                                a.CH.classList.toggle("_84KvRA", !h);
                                a.Bga.classList.toggle("_84KvRA", !h);
                                a.oR.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = A6(() => a.renderer, h => {
                                a.sha && h ? .type !== "react" ? (a.sha = void 0, a.aba.remove()) : a.LH.innerHTML = "";
                                switch (h ? .type) {
                                    case "react":
                                        a.sha = oDc(h.node, a.aba);
                                        a.LH.appendChild(a.aba);
                                        break;
                                    case "dom":
                                        h.render(a.LH);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new A(h);
                                }
                                a.JGa()
                            }, {
                                fireImmediately: !0
                            }),
                            g = pDc ? A6(() => a.RCa, h => {
                                a.CH.classList.toggle("qxD1GA", h)
                            }, {
                                fireImmediately: !0
                            }) : void 0;
                        return () => {
                            d();
                            e();
                            f();
                            g ? .()
                        }
                    },
                    nDc = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    sDc = function(a) {
                        const b =
                            a.dD,
                            c = a.ob,
                            d = a.dm,
                            e = a.QG,
                            f = a.Ygb,
                            g = a.GB,
                            h = new rDc(d, c),
                            k = (l, m) => g ? MCc(g, l, m) : !1;
                        return l => p6(B6, { ...l,
                            IT: k,
                            QG: e,
                            ob: c,
                            dm: d,
                            dD: b,
                            LDa: h,
                            Ygb: f ? .get()
                        })
                    };
                __c.vC.prototype.cra = __c.fa(20, function(a, b, c) {
                    const d = [a];
                    for (; a != null && a !== b;)(a = c.next(a)) && d.push(a);
                    return d
                });
                var o6 = (a, b) => `${a.column.id}-${a.boundary}:${b.ua.id}-${b.boundary}`,
                    SCc = ({
                        gg: a,
                        ZW: b,
                        ob: c
                    }) => d => (0, __c.I)(__c.RRb, { ...d,
                        gg: a,
                        ZW: b,
                        ob: c
                    }),
                    tDc = __webpack_require__(322594),
                    uDc = tDc.Fragment,
                    p6 = tDc.jsx,
                    q6 = tDc.jsxs;
                var vDc = __webpack_require__,
                    wDc = vDc(208463),
                    r6 = vDc.n_x(wDc)();
                var t6 = __webpack_require__(721226).PA;
                var C6 = __webpack_require__(205482),
                    D6 = C6.Component,
                    hDc = C6.PureComponent,
                    u6 = C6.useCallback,
                    x6 = C6.useEffect,
                    xDc = C6.useLayoutEffect,
                    s6 = C6.useMemo,
                    E6 = C6.useRef;
                var F6 = __webpack_require__(186901),
                    z6 = F6.EW,
                    y6 = F6.fm,
                    yDc = F6.m3,
                    A6 = F6.mJ,
                    zDc = F6.MN,
                    ADc = F6.O8,
                    G6 = F6.sH,
                    H6 = F6.XI;
                var BDc = __webpack_require__(536618),
                    CDc = BDc.Aj,
                    I6 = BDc.iB,
                    DDc = BDc.uP;
                var J6 = __webpack_require__(277049)._;
                var K6 = __webpack_require__(269018)._;
                var EDc = __webpack_require__(87387).A;
                var oDc = __webpack_require__(419094).createPortal;
                var FDc = class {
                        static G(a) {
                            L(a, {
                                viewBox: G6.ref
                            })
                        }
                        constructor() {
                            this.viewBox = (FDc.G(this), Yh({
                                top: 0,
                                left: 0,
                                height: 0,
                                width: 0
                            }));
                            this.jMb = a => {
                                this.viewBox.equals(a) || (this.viewBox = a)
                            }
                        }
                    },
                    GDc = t6(a => {
                        var b = a.sheet.direction === "rtl";
                        b = {
                            H2wykw: !b,
                            UweldA: b
                        };
                        const c = E6(new FDc),
                            d = H6(() => {
                                if (a.$sa) {
                                    var f = a.$sa.current;
                                    f && c.current.jMb(Yh({
                                        top: f.scrollTop,
                                        left: f.scrollLeft,
                                        height: f.clientHeight,
                                        width: f.clientWidth
                                    }))
                                }
                            });
                        x6(() => {
                            d();
                            a.$sa.current ? .addEventListener("scroll", d);
                            window ? .addEventListener("resize",
                                d);
                            return () => {
                                a.$sa.current ? .removeEventListener("scroll", d);
                                window ? .removeEventListener("resize", d)
                            }
                        }, [a.$sa, d]);
                        const e = s6(() => ({
                            get: () => c.current.viewBox
                        }), []);
                        return q6("div", {
                            className: r6("nMvVqA", b),
                            children: [q6("div", {
                                ref: a.cd,
                                className: "_0YOFPg",
                                children: [p6(a.Ds, { ...a,
                                    viewport: e
                                }), p6("div", {
                                    className: r6("Gdl7fQ", b),
                                    children: a.hQa ? .get() ? .map((f, g) => p6(f, {}, g))
                                })]
                            }), a.p3b === "visible" && q6(uDc, {
                                children: [p6("div", {
                                    className: r6("_32sKQw", b),
                                    children: p6(a.ykb, { ...a
                                    })
                                }), p6("div", {
                                    className: r6("xdIsTQ",
                                        b),
                                    children: p6(a.Ckb, { ...a
                                    })
                                }), p6("div", {
                                    className: r6("rsTRSA", b),
                                    children: p6(a.Akb, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    HDc = t6(a => {
                        a = a.content;
                        __c.u(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.stream.Z;
                            case "text3":
                                return __c.Mt.snapshot(a.value).cells.Z();
                            default:
                                throw new A(a);
                        }
                    });
                var IDc = 1 / 13.334,
                    RCc = PCc(t6(a => {
                        var b = a.context;
                        const c = a.value,
                            d = a.onChange,
                            e = b.attrs;
                        b = b.container.column;
                        __c.x(a.valueType === 3);
                        const f = u6(m => {
                                d ? .(c, m.target.checked)
                            }, [d, c]),
                            g = e.fontSize ? ? pg.Sb.fontSize,
                            h = b.width;
                        a = s6(() => {
                            const m = 20 * g * IDc;
                            return `${Math.round(m*Math.min(1,(h-__c.vU*2)/m))}px`
                        }, [g, h]);
                        b = s6(() => {
                            var m = e.color ? ? pg.Sb.color,
                                n = e.aE ? ? pg.Sb.aE;
                            const {
                                h: p,
                                s: q,
                                va: r
                            } = __c.xl(m), t = __c.vl(new __c.pl(p, q * .59, r * .69)).Fp(), v = __c.vl(new __c.pl(p, q * .68, r * .84)).Fp(), w = __c.Cl(__c.Bl(__c.vl(m), .5));
                            return {
                                lUa: m,
                                Bob: t,
                                mUa: v,
                                Cob: n !== "transparent" ? n : "#ffffff",
                                Dob: w
                            }
                        }, [e]);
                        const k = __c.Qw(),
                            l = u6(m => {
                                m.nativeEvent.cancelable && m.preventDefault();
                                m.stopPropagation();
                                H6(() => {
                                    d && d(c, !c)
                                })()
                            }, [d, c]);
                        return p6("label", {
                            className: r6("s5Xvtg", {
                                _0YWo_Q: k,
                                agLBbw: d == null
                            }),
                            onTouchEnd: l,
                            children: q6("div", {
                                className: "nOL94A",
                                style: {
                                    "--V8rdkw": a,
                                    "--6kHV0A": b.lUa,
                                    "--dhlyXQ": b.Bob,
                                    "--pMrTCg": b.mUa,
                                    "--EyYwbg": b.lUa,
                                    "--3ZWdlg": b.mUa,
                                    "--81jhOQ": b.Cob,
                                    "--Cs3XTw": b.Dob
                                },
                                children: [p6("input", {
                                    type: "checkbox",
                                    checked: c,
                                    onChange: H6(m => f(m)),
                                    className: "p8DDOg",
                                    hidden: !0
                                }), p6("span", {
                                    "aria-hidden": !0,
                                    className: r6("l_S_Ng", {
                                        iGjddQ: c
                                    }),
                                    children: p6(JDc, {})
                                })]
                            })
                        })
                    })),
                    JDc = () => p6("svg", {
                        className: "_8CNofA",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: p6("path", {
                            d: "M0.750977 4.5L3.25098 7L9.25098 1",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        })
                    });
                var TCc = (a, b) => __c.YSa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.stream.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            qh: c
                        } = __c.Vf(pg, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            oa: void 0,
                            writingMode: 1,
                            Ad: "start",
                            Me: KDc(e, c),
                            ib: b
                        })
                    }),
                    KDc = I6((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.stream.Z.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: yDc.structural
                    });
                var LDc, MDc, NDc, UCc;
                new(LDc = class extends J6 {
                    constructor() {
                        super(UCc);
                        MDc()
                    }
                }, (() => {
                    class a extends(NDc = D6) {
                        static G(b) {
                            L(b, {
                                qh: z6
                            })
                        }
                        get qh() {
                            return __c.Vf(pg, this.props.context.attrs).qh
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = p6(this.props.aj, {
                                content: b,
                                ua: c.container.ua,
                                col: c.container.column,
                                qh: this.qh
                            });
                            return this.qh === "wrap" ? p6("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.G(this)
                        }
                    }({
                        c: [UCc, MDc]
                    } = K6(a, [], [pc], NDc))
                })(), LDc);
                var ODc = class {
                    static cra(a, b, c) {
                        const d = [a];
                        for (; a != null && a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    }
                    static dka(a, b, c) {
                        __c.u(a.layout.cols.has(b), "Column not found in sheet");
                        __c.u(a.layout.rows.has(c), "Row not found in sheet");
                        var d = a.layout.cells.get(c, b);
                        const {
                            mc: e,
                            Xb: f,
                            ad: g,
                            Qc: h
                        } = d ? .span || {
                            mc: b,
                            Xb: c,
                            ad: b,
                            Qc: c
                        };
                        b = a.ja(f);
                        c = a.ja(h) + h.height - b;
                        d = a.ma(e);
                        a = a.ma(g) + g.width - d;
                        return Yh({
                            top: b,
                            left: d,
                            width: a,
                            height: c
                        })
                    }
                };
                var $Cc = class {
                    Ir({
                        size: a,
                        scale: b,
                        PFa: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? __c.pX * b : __c.S6b * b
                    }
                    constructor() {
                        this.YAb = I6((a, b, c) => {
                            c = c.get();
                            const d = b.layout.vF.Ei(a);
                            a = b.layout.vF.Xh(a);
                            return c != null && d.count() === (c.rows ? .size || 0) && a.count() === (c.columns ? .size || 0)
                        });
                        this.YJa = CDc(a => new Set(a.get() ? .columns || []), {
                            equals: __c.mi
                        });
                        this.aKa = CDc(a => new Set(a.get() ? .rows || []), {
                            equals: __c.mi
                        });
                        this.syb = I6((a, b, c) => {
                            var {
                                cells: d
                            } = c.get() || {};
                            if (!d) return new Set;
                            var e = this.aKa(c);
                            b = b.layout.vF.Xh(a);
                            if (e.size > 0) return new Set(b);
                            c = this.YJa(c);
                            e = new Set;
                            for (const f of d) {
                                d = a.layout.cells.get(f.ua, f.column);
                                for (const g of ODc.cra(d ? d.span.mc : f.column, d ? d.span.ad : f.column, b))(c.size === 0 || c.has(g)) && e.add(g)
                            }
                            return e
                        }, {
                            equals: __c.mi
                        });
                        this.tyb = I6((a, b, c) => {
                            var {
                                cells: d
                            } = c.get() || {};
                            if (!d) return new Set;
                            var e = this.YJa(c);
                            b = b.layout.vF.Ei(a);
                            if (e.size > 0) return new Set(b);
                            c = this.aKa(c);
                            e = new Set;
                            for (const f of d) {
                                d = a.layout.cells.get(f.ua, f.column);
                                for (const g of ODc.cra(d ? d.span.Xb : f.ua, d ? d.span.Qc :
                                        f.ua, b))(c.size === 0 || c.has(g)) && e.add(g)
                            }
                            return e
                        }, {
                            equals: __c.mi
                        })
                    }
                };
                var PDc, QDc, RDc, SDc, TDc, UDc, VDc = parseInt("4px", 10) || 4,
                    WDc = parseInt("0.5px", 10) || .5,
                    XDc = parseInt("1px", 10) || 1,
                    YDc = parseInt("0.5px", 10) || .5,
                    ZDc = parseInt("0.5px", 10) || .5,
                    $Dc = parseInt("1px", 10) || 1,
                    aEc = parseInt("0.5px", 10) || .5,
                    v6;
                new(PDc = class extends J6 {
                    constructor() {
                        super(v6);
                        RDc()
                    }
                }, (() => {
                    class a extends(SDc = D6) {
                        static G(b) {
                            L(b, {
                                de: z6,
                                nt: z6,
                                Jca: z6
                            })
                        }
                        get de() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get nt() {
                            const b = this.props.Hr ? .get();
                            if (b != null && b.length !== 0) return new __c.gy(b)
                        }
                        get Jca() {
                            return this.props.hCa ? .() ? .get()
                        }
                        render() {
                            return p6(__c.kx, {
                                bq: "light",
                                light: "light",
                                Ws: "light",
                                dark: "light",
                                children: this.jpb
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (v6.G(this), H6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    pd: f = 1
                                } =
                                this.props;
                                d ? .(c, e, "column", f)
                            }));
                            this.onMouseLeave = H6(c => {
                                this.props.onMouseLeave ? .(c)
                            });
                            this.onMouseDown = H6(c => {
                                this.props.onMouseDown ? .(c)
                            });
                            this.onTouchStart = H6(c => {
                                this.props.onTouchStart ? .(c)
                            });
                            this.k$a = (c, d, e) => {
                                const {
                                    sheet: f,
                                    ob: g,
                                    Ir: h,
                                    zI: k,
                                    D3b: l,
                                    pd: m = 1,
                                    Qd: n = 1
                                } = this.props, p = {
                                    jNbTIg: !this.de,
                                    gtA7Dw: this.de
                                };
                                var q = e ? .sticky ? this.de ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                q = e ? .sticky ? this.Jca ? ? q : void 0;
                                let r = 0;
                                const t = g.layout.Oe.Xh(f),
                                    v = t.map(y => {
                                        if (!(c && t.Ve(y, c) < 0 || d && t.Ve(y, d) > 0)) return r += y.width, p6(bEc, {
                                            col: y,
                                            label: __c.Xv(f.yu(y)),
                                            cb: l ? .get() ? .get(y),
                                            Ir: h,
                                            zI: k,
                                            pd: m,
                                            Qd: n,
                                            start: g.Na.ma(f, y)
                                        }, y.id)
                                    }),
                                    w = this.de ? {
                                        right: r * m
                                    } : {
                                        left: r * m
                                    };
                                return q6("div", {
                                    style: {
                                        height: h(n),
                                        width: r * m,
                                        ...q
                                    },
                                    className: r6("Vt2_4w", p, {
                                        Tn3nUw: e ? .sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [v, e ? .sticky && p6("div", {
                                        style: {
                                            width: VDc * m,
                                            ...w
                                        },
                                        className: r6("HBvlug", "ru3tFQ", p)
                                    })]
                                })
                            };
                            this.jpb = c => {
                                var d = this.props.sheet;
                                const e = this.props.ob,
                                    f = d.view.freeze.JH ? d.layout.Ce.get(d.view.freeze.JH) : void 0,
                                    g = {
                                        jNbTIg: !this.de,
                                        gtA7Dw: this.de
                                    };
                                d = e.layout.Oe.Xh(d);
                                return q6("div", {
                                    ref: this.nt ? .sj,
                                    onMouseDown: this.onMouseDown,
                                    onTouchStart: this.onTouchStart,
                                    className: r6("xhBZaw", g, c.className),
                                    children: [f && this.k$a(void 0, f, {
                                        sticky: !0
                                    }), this.k$a(f ? d.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [v6, RDc]
                    } = K6(a, [], [pc], SDc))
                })(), PDc);
                var w6;
                new(QDc = class extends J6 {
                    constructor() {
                        super(w6);
                        TDc()
                    }
                }, (() => {
                    class a extends(UDc = D6) {
                        static G(b) {
                            L(b, {
                                de: z6,
                                nt: z6,
                                Jca: z6
                            })
                        }
                        get de() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get nt() {
                            const b = this.props.Hr ? .get();
                            if (b != null && b.length !== 0) return new __c.gy(b)
                        }
                        get Jca() {
                            return this.props.hCa ? .() ? .get()
                        }
                        render() {
                            return p6(__c.kx, {
                                bq: "light",
                                light: "light",
                                Ws: "light",
                                dark: "light",
                                children: this.JKb
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (w6.G(this), H6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Qd: f = 1
                                } =
                                this.props;
                                d ? .(c, e, "row", f)
                            }));
                            this.onMouseLeave = H6(c => {
                                this.props.onMouseLeave ? .(c)
                            });
                            this.onMouseDown = H6(c => {
                                this.props.onMouseDown ? .(c)
                            });
                            this.onTouchStart = H6(c => {
                                this.props.onTouchStart ? .(c)
                            });
                            this.p$a = (c, d, e) => {
                                const {
                                    sheet: f,
                                    ob: g,
                                    Ir: h,
                                    zI: k,
                                    pd: l = 1,
                                    Qd: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.de,
                                    gtA7Dw: this.de
                                };
                                var p = e ? .sticky ? {
                                    top: 0
                                } : void 0;
                                p = e ? .sticky ? this.Jca ? ? p : void 0;
                                let q = 0;
                                const r = g.layout.Oe.Ei(f),
                                    t = r.map(v => {
                                        if (!(c && r.Ve(v, c) < 0 || d && r.Ve(v, d) > 0)) {
                                            q += v.height;
                                            var w = `${f.xv(v)+1}`;
                                            return p6(cEc, {
                                                ua: v,
                                                label: w,
                                                zI: k,
                                                Ir: h,
                                                pd: l,
                                                Qd: m,
                                                start: g.Na.ja(f, v)
                                            }, v.id)
                                        }
                                    });
                                return q6("div", {
                                    style: {
                                        height: q * m,
                                        width: h(l),
                                        ...p
                                    },
                                    className: r6("_93roJg", n, {
                                        Tn3nUw: e ? .sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [t, e ? .sticky && p6("div", {
                                        style: {
                                            height: VDc * m
                                        },
                                        className: r6("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.JKb = c => {
                                var d = this.props.sheet;
                                const e = this.props.ob,
                                    f = d.view.freeze.nV ? d.layout.af.get(d.view.freeze.nV) : void 0,
                                    g = {
                                        jNbTIg: !this.de,
                                        gtA7Dw: this.de
                                    };
                                d = e.layout.Oe.Ei(d);
                                return q6("div", {
                                    ref: this.nt ? .sj,
                                    onMouseDown: this.onMouseDown,
                                    onTouchStart: this.onTouchStart,
                                    className: r6("An9VeA", g, c.className),
                                    children: [f && this.p$a(void 0, f, {
                                        sticky: !0
                                    }), this.p$a(f ? d.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [w6, TDc]
                    } = K6(a, [], [pc], UDc))
                })(), QDc);
                var bEc = t6(a => {
                        const b = a.label,
                            c = a.cb,
                            d = a.col,
                            e = a.zI,
                            f = a.Ir,
                            g = a.pd,
                            h = a.Qd,
                            k = f(h),
                            l = DDc(() => e(d));
                        return p6("div", {
                            className: r6("_83Rssw", "d2uLIA", WCc(l)),
                            style: {
                                width: d.width * g,
                                height: k,
                                borderInlineWidth: `${WDc*g}px`,
                                borderBlockStartWidth: `${XDc*g}px`,
                                borderBlockEndWidth: `${YDc*g}px`,
                                transform: `translateX(${a.start*g}px)`
                            },
                            children: p6(XCc, {
                                label: b,
                                cb: c,
                                width: d.width,
                                height: f(1),
                                scale: h,
                                LUa: l
                            })
                        })
                    }),
                    cEc = t6(a => {
                        const b = a.label,
                            c = a.ua,
                            d = a.Ir,
                            e = a.zI,
                            f = a.pd,
                            g = a.Qd,
                            h = d(f),
                            k = DDc(() => e(c));
                        return p6("div", {
                            className: r6("_83Rssw", "JhBzyw", WCc(k)),
                            style: {
                                width: h,
                                height: c.height * g,
                                borderBlockWidth: `${ZDc*g}px`,
                                borderInlineStartWidth: `${$Dc*g}px`,
                                borderInlineEndWidth: `${aEc*g}px`,
                                transform: `translateY(${a.start*g}px)`
                            },
                            children: p6(XCc, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                LUa: k
                            })
                        })
                    });
                var dEc = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var eEc = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var YCc = __c.OT({
                    Ep: dEc,
                    medium: eEc
                });
                var fEc, gEc, hEc, bDc;
                new(fEc = class extends J6 {
                    constructor() {
                        super(bDc);
                        gEc()
                    }
                }, (() => {
                    class a extends(hEc = D6) {
                        static G(b) {
                            L(b, {
                                Hf: z6.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return p6(this.props.Ds, {
                                sheet: b.D.config,
                                container: b,
                                dga: "visible",
                                Hr: this.props.Hr,
                                Bv: this.props.Bv,
                                Iw: this.props.Iw,
                                Kw: this.props.Kw,
                                da: this.props.da,
                                Hf: this.Hf,
                                aj: this.props.aj,
                                iL: void 0
                            })
                        }
                        get Hf() {
                            return __c.dl(this.props.element.D.Xa, this.props.Ff)
                        }
                        constructor(...b) {
                            super(...b);
                            a.G(this)
                        }
                    }({
                        c: [bDc, gEc]
                    } = K6(a, [], [pc], hEc))
                })(), fEc);
                var iEc = class {
                    constructor() {
                        this.Jqa = new WeakMap;
                        this.nxb = a => this.Jqa.get(a);
                        this.ocb = (a, b) => {
                            this.Jqa.set(a, b)
                        };
                        this.Nob = (a, b) => {
                            const c = this.Jqa.get(a);
                            c && c.ia === b.ia && c.Jb === b.Jb && this.Jqa.delete(a)
                        }
                    }
                };
                var jEc = parseInt("4px", 10) || 4,
                    kEc = t6(({
                        sheet: a,
                        ob: b,
                        da: c,
                        range: d,
                        Ry: e,
                        Sy: f
                    }) => {
                        if (d != null && (e || f)) {
                            c = c ? .get() ? ? 1;
                            var g = a.direction === "rtl",
                                h = {
                                    ZJ0G6w: !g,
                                    dOI_jA: g
                                };
                            if (e && f) return e = b.Na.ja(a, d.Qc) + d.Qc.height, a = b.Na.ma(a, d.ad) + d.ad.width, p6("div", {
                                style: {
                                    top: e * c,
                                    width: a * c,
                                    height: jEc * c
                                },
                                className: r6("aX8dhQ", "VGcLng")
                            });
                            if (e) return b = b.Na.ma(a, d.ad) + d.ad.width, p6("div", {
                                style: {
                                    width: jEc * c,
                                    height: a.height * c,
                                    ...(g ? {
                                        right: b * c
                                    } : {
                                        left: b * c
                                    })
                                },
                                className: r6("aX8dhQ", "gl1RPg", h)
                            });
                            if (f) return b = b.Na.ja(a, d.Qc) +
                                d.Qc.height, p6("div", {
                                    style: {
                                        top: b * c,
                                        width: a.width * c,
                                        height: jEc * c
                                    },
                                    className: r6("aX8dhQ", "VGcLng")
                                })
                        }
                    });
                var L6 = ({
                        sheet: a,
                        ob: b,
                        range: c,
                        da: d,
                        children: e
                    }) => {
                        const f = OCc();
                        dDc({
                            sheet: a,
                            ob: b,
                            da: d,
                            range: c,
                            cd: f
                        });
                        return p6("div", {
                            ref: f,
                            className: r6("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: e
                        })
                    },
                    lEc = ({
                        sheet: a,
                        ob: b,
                        range: c,
                        da: d,
                        children: e
                    }) => {
                        const f = OCc();
                        dDc({
                            sheet: a,
                            ob: b,
                            da: d,
                            range: c,
                            cd: f
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return p6("div", {
                            className: r6("nstn2A", a, "_9sodyg"),
                            children: p6("div", {
                                ref: f,
                                className: r6("nstn2A", a),
                                children: e
                            })
                        })
                    };
                var fDc = t6(({
                        sheet: a,
                        children: b,
                        iG: c
                    }) => {
                        const d = u6(f => {
                                c.aLa(a, f)
                            }, [c, a]),
                            e = u6(f => {
                                f != null ? c.jG.set(a, f) : c.jG.delete(a)
                            }, [c, a]);
                        return p6(__c.L4b, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            zx: e,
                            children: b
                        })
                    }),
                    eDc = class {
                        aLa(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.Qba.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.jG = new WeakMap;
                            this.Qba = G6.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = H6((b, c) => {
                                this.jG.get(b) ? .scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var iDc = t6(a => {
                    const b = a.item,
                        c = a.Hr,
                        d = a.Bv,
                        e = a.lg,
                        f = a.measureRef,
                        g = a.da,
                        h = a.C1a,
                        k = a.Jb,
                        l = a.Iw,
                        m = a.Kw,
                        n = a.Ds,
                        p = a.mQ,
                        q = a.aj,
                        r = a.Ff,
                        t = a.ob,
                        v = a.iG;
                    a = s6(() => __c.dl(b.Xa, r), [b, r]);
                    const w = s6(() => t6(({
                            sheet: D,
                            range: F,
                            Ry: K,
                            Sy: M
                        }) => p6(L6, {
                            sheet: D,
                            ob: t,
                            range: F,
                            da: g,
                            children: p6(kEc, {
                                sheet: D,
                                ob: t,
                                da: g,
                                range: F,
                                Ry: K,
                                Sy: M
                            })
                        })), [g, t]),
                        y = __c.YBa(b.config),
                        B = g.get(),
                        C = Math.min(y.width * B, k.width);
                    x6(() => y6(() => {
                        var D = b.config.view.freeze.JH ? b.config.layout.Ce.get(b.config.view.freeze.JH) : void 0;
                        if (D != null)
                            if (b.config.ma(D) +
                                D.width > C) {
                                if (D = v.jG.get(b)) D.style.overflowX = "hidden"
                            } else if (D = v.jG.get(b)) D.style.overflowX = "scroll"
                    }), [b, k.width, v, B, C]);
                    return p6("div", {
                        ref: f,
                        className: "E8r86A",
                        style: {
                            width: C
                        },
                        children: p6(p, {
                            sheet: b,
                            children: p6("div", {
                                ref: h,
                                className: "cXTiJA",
                                style: {
                                    width: y.width * B,
                                    height: y.height * B
                                },
                                children: p6("div", {
                                    className: "W1ir5A",
                                    children: p6(n, {
                                        container: e.lk(b),
                                        sheet: b.config,
                                        dga: "visible",
                                        Hr: c,
                                        Bv: d,
                                        da: g,
                                        Iw: l,
                                        Kw: m,
                                        Hf: a,
                                        aj: q,
                                        iL: w
                                    })
                                })
                            })
                        })
                    })
                });
                var mEc = t6(({
                    page: a,
                    ob: b,
                    range: c,
                    YF: d
                }) => {
                    const e = kDc(a.sheet, b, c);
                    return p6("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((f, g) => e == null ? d(f, g) : __c.Wh(Yh(f)).Or(e) && d(f, g))
                    })
                });
                var nEc = new __c.eU,
                    oEc = a => __c.pX * a,
                    pEc = () => "primary-default",
                    lDc = t6(({
                        container: a,
                        Hr: b,
                        Bv: c,
                        Iw: d,
                        Kw: e,
                        A8: f,
                        da: g,
                        viewport: h,
                        ob: k,
                        QMb: l,
                        Ds: m,
                        aj: n,
                        YF: p,
                        Dpa: q,
                        zVb: r,
                        iUb: t,
                        hUb: v
                    }) => {
                        const w = a.page,
                            y = s6(() => t6(({
                                sheet: B,
                                range: C,
                                Ry: D,
                                Sy: F
                            }) => q6(uDc, {
                                children: [p6(L6, {
                                    sheet: w.sheet,
                                    ob: k,
                                    range: C,
                                    da: g,
                                    children: p6(kEc, {
                                        sheet: B,
                                        ob: k,
                                        da: g,
                                        range: C,
                                        Ry: D,
                                        Sy: F
                                    })
                                }), q6(lEc, {
                                    sheet: w.sheet,
                                    ob: k,
                                    range: C,
                                    da: g,
                                    children: [r && p6(r, {}), p && p6(mEc, {
                                        page: w,
                                        ob: k,
                                        YF: p,
                                        range: C
                                    }), v && p6(v, {}), q && q()]
                                }), t && C && p6(L6, {
                                    sheet: w.sheet,
                                    ob: k,
                                    range: C,
                                    da: g,
                                    children: p6(t, {
                                        range: C
                                    })
                                })]
                            })), [w, k, g, r, p, v, q, t]);
                        return l ? p6(qEc, {
                            container: a,
                            viewport: h,
                            da: g,
                            Hr: b,
                            Bv: c,
                            Iw: d,
                            Kw: e,
                            Ds: m,
                            aj: n,
                            iL: y,
                            ob: k
                        }) : p6(m, {
                            sheet: w.sheet,
                            container: a,
                            dga: "hidden",
                            Hr: b,
                            Bv: c,
                            Iw: d,
                            Kw: e,
                            A8: f,
                            da: g,
                            viewport: h,
                            aj: n,
                            iL: y
                        })
                    }),
                    qEc = t6(a => {
                        const b = a.container,
                            c = a.da,
                            d = a.viewport,
                            e = a.Hr,
                            f = a.Bv,
                            g = a.Iw,
                            h = a.Kw,
                            k = a.Ds,
                            l = a.aj,
                            m = a.iL;
                        a = a.ob;
                        const n = b.page,
                            p = n.sheet.direction === "rtl",
                            q = E6(null),
                            r = E6(null),
                            t = E6(null);
                        x6(() => {
                            const C = M6({
                                sheet: n.sheet,
                                ura: !0,
                                vra: !0,
                                da: c,
                                viewport: d
                            });
                            return A6(() =>
                                C ? .get(), D => {
                                    const F = q.current;
                                    if (D && F) {
                                        var K = n.sheet.direction === "rtl";
                                        F.style.position = D.position ? ? "sticky";
                                        F.style.top = D.top ? ? "0px";
                                        K ? F.style.right = D.right ? ? "0px" : F.style.left = D.left ? ? "0px";
                                        F.style.transform = D.transform ? ? ""
                                    }
                                })
                        }, [n.sheet, c, d]);
                        x6(() => {
                            const C = M6({
                                sheet: n.sheet,
                                ura: !1,
                                vra: !0,
                                da: c,
                                viewport: d
                            });
                            return A6(() => C ? .get(), D => {
                                const F = t.current;
                                D && F && (F.style.position = D.position ? ? "sticky", F.style.top = D.top ? ? "0px", F.style.transform = D.transform ? ? "")
                            })
                        }, [n.sheet, c, d]);
                        x6(() => {
                            const C = M6({
                                sheet: n.sheet,
                                ura: !0,
                                vra: !1,
                                da: c,
                                viewport: d
                            });
                            return A6(() => C ? .get(), D => {
                                const F = r.current;
                                if (D && F) {
                                    var K = n.sheet.direction === "rtl";
                                    F.style.position = D.position ? ? "sticky";
                                    K ? F.style.right = D.right ? ? "0px" : F.style.left = D.left ? ? "0px";
                                    F.style.transform = D.transform ? ? ""
                                }
                            })
                        }, [n.sheet, c, d]);
                        const v = u6((C, D, F) => M6({
                                sheet: C,
                                ura: D,
                                vra: F,
                                da: c,
                                viewport: d
                            }), [c, d]),
                            w = s6(() => v ? () => v(n.sheet, !0, !1) : void 0, [v, n.sheet]),
                            y = s6(() => v ? () => v(n.sheet, !1, !0) : void 0, [v, n.sheet]),
                            B = c ? .get() ? ? 1;
                        return q6("div", {
                            className: r6("OsKKIQ", "cbOp6Q"),
                            children: [p6("div", {
                                className: "VDFv_A",
                                children: p6(k, {
                                    sheet: n.sheet,
                                    container: b,
                                    dga: "hidden",
                                    Hr: e,
                                    Bv: f,
                                    Iw: g,
                                    Kw: h,
                                    A8: v,
                                    da: c,
                                    viewport: d,
                                    aj: l,
                                    iL: m
                                })
                            }), p6("div", {
                                ref: q,
                                className: "_688KWg",
                                children: p6(ZCc, {
                                    de: p,
                                    v0a: !1,
                                    Ir: oEc,
                                    scale: B
                                })
                            }), p6("div", {
                                ref: t,
                                className: "m0cT1w",
                                children: p6(v6, {
                                    sheet: n.sheet,
                                    pd: B,
                                    Qd: B,
                                    Ir: oEc,
                                    zI: pEc,
                                    vJ: nEc,
                                    hCa: w,
                                    ob: a
                                })
                            }), p6("div", {
                                ref: r,
                                className: "zm537g",
                                children: p6(w6, {
                                    sheet: n.sheet,
                                    pd: B,
                                    Qd: B,
                                    Ir: oEc,
                                    zI: pEc,
                                    vJ: nEc,
                                    hCa: y,
                                    ob: a
                                })
                            })]
                        })
                    }),
                    M6 = ({
                        sheet: a,
                        ura: b,
                        vra: c,
                        da: d,
                        viewport: e
                    }) =>
                    z6(() => {
                        var f = e ? .get().zb();
                        const g = d ? .get() ? ? 1;
                        if (!f) return {};
                        const h = {};
                        f = new zh(f.left, f.top);
                        const k = a.direction === "rtl";
                        h.position = "relative";
                        c && (h.top = "0px");
                        b && (k ? h.right = "0px" : h.left = "0px");
                        h.transform = `translate(${b?f.x*g:0}px, ${c?f.y*g:0}px)`;
                        return h
                    });
                var rDc = class {
                    constructor(a, b) {
                        this.dm = a;
                        this.ob = b;
                        this.lob = __c.vU;
                        this.Owb = I6((c, d, e, f) => {
                            e = e.get();
                            const g = new WeakMap;
                            for (let v = 0; v < e.length; v++) {
                                var h = e[v],
                                    k = this.Ewb(c, d, h);
                                if (k) {
                                    switch (k) {
                                        case "start":
                                        case "justify":
                                            var l = e[v + 1];
                                            if (l == null || !uC(c, this.ob, d, l)) continue;
                                            break;
                                        case "center":
                                            l = e[v + 1];
                                            if (l == null || !uC(c, this.ob, d, l)) continue;
                                            l = e[v - 1];
                                            if (l == null || !uC(c, this.ob, d, l)) continue;
                                            break;
                                        case "end":
                                            l = e[v - 1];
                                            if (l == null || !uC(c, this.ob, d, l)) continue;
                                            break;
                                        default:
                                            throw new A(k);
                                    }
                                    if (l = f(d, h)) {
                                        var m =
                                            l.width + (k === "center" ? 0 : this.lob);
                                        if (!(h.width > m)) {
                                            switch (k) {
                                                case "start":
                                                case "justify":
                                                    k = this.ob.Na.ma(c, h);
                                                    l = k + m;
                                                    break;
                                                case "center":
                                                    l = this.ob.Na.ma(c, h) + h.width / 2;
                                                    k = l - m / 2;
                                                    l += m / 2;
                                                    break;
                                                case "end":
                                                    l = this.ob.Na.ma(c, h) + h.width;
                                                    k = l - m;
                                                    break;
                                                default:
                                                    throw new A(k);
                                            }
                                            for (m = e.indexOf(h); m >= 0; m--) {
                                                var n = e[m],
                                                    p = m - 1 < 0 || uC(c, this.ob, d, e[m - 1]),
                                                    q;
                                                if (q = n === h || uC(c, this.ob, d, n)) {
                                                    q = k;
                                                    var r = l,
                                                        t = this.ob.Na.ma(c, n);
                                                    q = q < t && t < r
                                                }
                                                if (q && p) g.set(n, 1);
                                                else break
                                            }
                                            for (h = e.indexOf(h) + 1; h < e.length; h++) {
                                                m = e[h];
                                                if (n = uC(c, this.ob,
                                                        d, m)) n = k, p = l, q = this.ob.Na.ma(c, m), n = n < q && q < p;
                                                if (n) g.set(m, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return g
                        });
                        this.Ewb = (c, d, e) => {
                            const f = c.layout.cells.get(d, e);
                            if (f && (f.ref.content.ref || f.ref.Fa.ref) && f.span.Xb === f.span.Qc && f.span.mc === f.span.ad) {
                                var g = this.dm.vn(c, d, e);
                                c = this.dm.bCa(c, d, e, __c.qg({
                                    qh: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    qh: h,
                                    textAlign: k
                                } = __c.Vf(pg, c);
                                if (h === "overflow") return __c.aTa(k, f.ref.content.ref ? .type, f.ref.Fa.ref ? .type, g ? () => g.hk.type : void 0)
                            }
                        }
                    }
                };
                var rEc = t6(function(a) {
                    const b = a.sheet;
                    var c = a.ob,
                        d = a.tA;
                    const e = a.ASb,
                        f = a.da,
                        g = a.LDa,
                        h = a.pwb;
                    a = a.overflow;
                    const k = OCc();
                    xDc(() => y6(() => {
                        const p = z(k.current),
                            q = f ? .get() ? ? 1,
                            r = b.height;
                        p.style.width = `${b.width*q}px`;
                        p.style.height = `${r*q}px`
                    }), [k, f, b]);
                    const l = u6(p => g.Owb(b, p, e, h), [g, b, e, h]);
                    var m = u6((p, q) => l(p) ? .get(q) ? ? 0, [l]);
                    c = KCc(b, c.layout.Oe.Ei(b), c.layout.Oe.Xh(b), d, e, m);
                    d = b.width;
                    m = b.height;
                    const n = b.direction === "rtl";
                    return p6("svg", {
                        ref: k,
                        role: "presentation",
                        className: r6("c6a1eQ", {
                            H_CtIQ: !n,
                            _8_56PQ: n,
                            _3NnFzw: a === "visible",
                            JMH1ng: a === "hidden"
                        }),
                        viewBox: `0 0 ${d} ${m}`,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        children: c.map(({
                            lines: p,
                            color: q,
                            weight: r,
                            ym: t,
                            zm: v
                        }) => p6("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: v,
                            strokeWidth: r,
                            d: p.map(({
                                p1: w,
                                p2: y
                            }) => `M ${w.x} ${w.y} L ${y.x} ${y.y}`).join(" ")
                        }, `${q}-${r}-${t}-${v}`))
                    })
                });
                var sEc;
                sEc = Symbol.iterator;
                var tEc = class {
                    get size() {
                        return this.bra
                    }
                    get([a, b]) {
                        return (a = this.aJ.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.aJ.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.aJ.get(a);
                        d == null && (d = new Map, this.aJ.set(a, d));
                        d.set(b, c);
                        this.bra++;
                        return this
                    }
                    clear() {
                        this.aJ.clear();
                        this.bra = 0
                    }
                    delete([a, b]) {
                        const c = this.aJ.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.bra--;
                        c.size === 0 && this.aJ.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.aJ)
                            for (const [d, e] of c) a([b, d], e)
                    }*[sEc]() {
                        for (const [a, b] of this.aJ)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.bra = 0;
                        this.aJ = new Map
                    }
                };
                var uEc, vEc, wEc, xEc, yEc, zEc, AEc, pDc = __c.uc("285688d5", !1),
                    BEc, CEc = class extends D6 {
                        render() {
                            const {
                                Vja: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return q6("div", {
                                ref: this.Jcb,
                                className: r6("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [a ? .WSa && p6(N6, { ...b,
                                    sheet: c,
                                    range: a.WSa.range,
                                    Ry: !0,
                                    Sy: !0,
                                    className: "_0C8M3w"
                                }), a ? .khb && p6(N6, { ...b,
                                    sheet: c,
                                    range: a.khb.range,
                                    Ry: !1,
                                    Sy: !0,
                                    className: "_7n44yg"
                                }), a ? .y0a && p6(N6, { ...b,
                                    sheet: c,
                                    range: a.y0a.range,
                                    Ry: !0,
                                    Sy: !1,
                                    className: "fF5r6w"
                                }), a ? .Zfb && p6(N6, { ...b,
                                    sheet: c,
                                    range: a.Zfb.range,
                                    Ry: !1,
                                    Sy: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = y6(() => {
                                var b = this.props,
                                    c = b.da;
                                b = b.sheet;
                                const d = this.Jcb.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.gc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.Jcb = ow()
                        }
                    };
                ({
                    c: [BEc, wEc]
                } = K6(CEc, [], [pc], D6));
                wEc();
                var N6;
                new(uEc = class extends J6 {
                    constructor() {
                        super(N6);
                        xEc()
                    }
                }, (() => {
                    class a extends(yEc = D6) {
                        static G(b) {
                            L(b, {
                                rLa: z6,
                                bounds: z6
                            })
                        }
                        get rLa() {
                            const b = this.props.viewport,
                                c = this.props.Ry,
                                d = this.props.Sy;
                            return b == null || !c && !d ? b : z6(() => {
                                const e = b.get().zb();
                                return Yh({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.IT,
                                c = this.props.sheet,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.iL,
                                g = this.props.Ry,
                                h = this.props.Sy;
                            return q6("div", {
                                ref: this.OHa,
                                className: r6("i0YQww",
                                    this.props.className),
                                children: [p6("div", {
                                    ref: this.k8a,
                                    className: "vUKoKg",
                                    children: p6("div", {
                                        ref: this.l8a,
                                        children: p6(O6, {
                                            IT: b,
                                            sheet: c,
                                            container: d,
                                            bounds: e,
                                            Hr: this.props.Hr,
                                            Bv: this.props.Bv,
                                            QG: this.props.QG,
                                            aj: this.props.aj,
                                            k6: this.props.k6,
                                            ob: this.props.ob,
                                            da: this.props.da,
                                            tA: this.tA,
                                            kea: this.kea,
                                            GY: this.GY
                                        })
                                    })
                                }), p6(this.eua, {}), f && p6(f, {
                                    sheet: c,
                                    range: e,
                                    Ry: g,
                                    Sy: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = y6(() => {
                                    var h = this.props,
                                        k = h.da,
                                        l = h.sheet;
                                    const m = h.ob;
                                    var n = this.OHa.current;
                                    const p = this.k8a.current;
                                    h = this.l8a.current;
                                    var q = this.bounds,
                                        r = q.mc,
                                        t = q.ad;
                                    const v = q.Xb;
                                    q = q.Qc;
                                    k = k ? k.get() : 1;
                                    t = t && r ? m.Na.ma(l, t) + t.width - m.Na.ma(l, r) : l.width;
                                    q = q && v ? m.Na.ja(l, q) + q.height - m.Na.ja(l, v) : l.height;
                                    n && (n.style.width = `${t*k}px`, n.style.height = `${q*k}px`);
                                    p && (p.style.width = `${t*k}px`, p.style.height = `${q*k}px`);
                                    n = l.direction === "rtl";
                                    r = r ? m.Na.ma(l, r) * k * (n ? 1 : -1) : 0;
                                    l = v ? -m.Na.ja(l, v) * k : 0;
                                    h && (h.style.transform = `translate(${r}px, ${l}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.A8;
                            const e = this.props.Ry,
                                f = this.props.Sy,
                                g = e || f ? d ? .(c, e, f) : void 0;
                            d = y6(() => {
                                const h = this.OHa.current;
                                if (h != null) {
                                    var k = e || f ? "sticky" : "relative",
                                        l = f ? "0px" : "unset",
                                        m = e ? "0px" : "unset",
                                        n = e ? "0px" : "unset",
                                        p = c.direction === "rtl";
                                    if (g == null) h.style.position = k, h.style.top = l, h.style.left = p ? "unset" : m, h.style.right = p ? n : "unset";
                                    else {
                                        const q = g.get();
                                        h.style.position = q.position ? ? k;
                                        h.style.top = q.top ? ? l;
                                        h.style.left = p ? "unset" : q.left ? ? m;
                                        h.style.right = p ? q.right ? ? n : "unset";
                                        h.style.transform = q.transform ? ? "unset"
                                    }
                                }
                            });
                            __c.gc(this, [b, d])
                        }
                        get bounds() {
                            var b = this.props.sheet,
                                c = this.props.ob,
                                d = this.props.range;
                            const e = c.layout.Oe.Ei(b);
                            b = c.layout.Oe.Xh(b);
                            if (b.empty || e.empty) return {
                                mc: void 0,
                                ad: void 0,
                                Xb: void 0,
                                Qc: void 0
                            };
                            c = d.mc;
                            const f = d.ad,
                                g = d.Xb;
                            d = d.Qc;
                            const h = b.first(),
                                k = e.first(),
                                l = b.last(),
                                m = e.last();
                            return {
                                mc: c ? b.has(c) ? c : void 0 : h,
                                ad: f ? b.has(f) ? f : void 0 : l,
                                Xb: g ? e.has(g) ? g : void 0 : k,
                                Qc: d ? e.has(d) ? d : void 0 : m
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.OHa = (N6.G(this), ow());
                            this.k8a = ow();
                            this.l8a = ow();
                            this.GY = new DEc;
                            this.BSb = z6(() => [...this.tA.get().keys()].sort((c, d) => this.props.ob.layout.Oe.Ei(this.props.sheet).Ve(c,
                                d)), {
                                equals: __c.oi()
                            });
                            this.zSb = z6(() => [...this.kea.get().keys()].sort((c, d) => this.props.ob.layout.Oe.Xh(this.props.sheet).Ve(c, d)), {
                                equals: __c.oi()
                            });
                            this.eua = t6(() => p6(this.props.xkb, {
                                tA: this.BSb,
                                ASb: this.zSb,
                                pwb: this.GY.ika,
                                range: this.props.range
                            }));
                            this.tA = z6(() => {
                                const c = this.props.sheet;
                                var d = this.props.da;
                                const e = this.props.ob;
                                var f = this.rLa ? .get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                const g = this.bounds;
                                d = d.get();
                                var h = 50 * d;
                                const k = f ? f.qa.y - h : g.Xb ? e.Na.ja(c, g.Xb) : 0;
                                f = f ? f.br.y + h :
                                    g.Qc ? e.Na.ja(c, g.Qc) + g.Qc.height : 0;
                                h = new Map;
                                const l = e.layout.Oe.Ei(c);
                                for (let m = g.Xb; m != null && g.Qc != null && l.Ve(m, g.Qc) <= 0; m = l.next(m)) {
                                    const n = e.Na.ja(c, m);
                                    if (!(n + m.height < k)) {
                                        if (n > f) break;
                                        h.set(m, n * d)
                                    }
                                }
                                return h
                            }, {
                                equals: yDc.shallow
                            });
                            this.kea = z6(() => {
                                const c = this.props.sheet;
                                var d = this.props.da;
                                const e = this.props.ob;
                                var f = this.rLa ? .get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                const g = this.bounds;
                                d = d.get();
                                var h = 50 * d;
                                const k = f ? f.qa.x - h : g.mc ? e.Na.ma(c, g.mc) : 0;
                                f = f ? f.br.x + h : g.ad ? e.Na.ma(c, g.ad) +
                                    g.ad.width : 0;
                                h = new Map;
                                const l = e.layout.Oe.Xh(c);
                                for (let m = g.mc; m != null && g.ad != null && l.Ve(m, g.ad) <= 0; m = l.next(m)) {
                                    const n = e.Na.ma(c, m);
                                    if (!(n + m.width < k)) {
                                        if (n > f) break;
                                        h.set(m, n * d)
                                    }
                                }
                                return h
                            }, {
                                equals: yDc.shallow
                            })
                        }
                    }({
                        c: [N6, xEc]
                    } = K6(a, [], [pc], yEc))
                })(), uEc);
                var DEc = class {
                        constructor() {
                            this.cells = new tEc;
                            this.YIa = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = G6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.ika = (a, b) => {
                                let c = this.cells.get([a, b]);
                                c == null && (c = G6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], c));
                                return c.get() ? .lVa
                            }
                        }
                    },
                    O6;
                new(vEc = class extends J6 {
                    constructor() {
                        super(O6);
                        zEc()
                    }
                }, (() => {
                    class a extends(AEc = D6) {
                        static G(b) {
                            L(b, {
                                VP: G6.shallow,
                                nt: z6,
                                vSa: H6,
                                Dha: H6.bound
                            })
                        }
                        get nt() {
                            const b = this.props.Hr ? .get();
                            if (b != null && b.length !== 0) return new __c.gy(b)
                        }
                        render() {
                            return q6("div", {
                                onMouseDown: this.props.Bv ? .onMouseDown,
                                onTouchStart: this.props.Bv ? .onTouchStart,
                                ref: EDc(this.cd, this.nt ? .sj),
                                children: [p6("div", {
                                    ref: this.dxa,
                                    className: "_5YlOqQ"
                                }), p6("div", {
                                    ref: this.fxa,
                                    className: "_XCmKw"
                                }), this.VP.map(b => b.zIb)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                A6(() => [this.props.sheet, this.props.kea.get(), this.props.tA.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.Oob();
                                    this.vSa(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = y6(() => {
                                    var e = this.props,
                                        f = e.da;
                                    e = e.sheet;
                                    const g = this.cd.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.VP.map(e => qDc(e));
                            __c.gc(this, [c, b, ...d])
                        }
                        Oob() {
                            const b = z(this.dxa.current),
                                c = z(this.fxa.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.FOa.length = 0;
                            this.VP.length = 0
                        }
                        vSa(b, c) {
                            const d = z(this.dxa.current),
                                e = z(this.fxa.current),
                                f = [],
                                g = new Map;
                            for (const h of this.FOa) c.has(h.ua) ? g.set(h.ua, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new EEc(this.Dha, h), d.appendChild(c.Cga), e.appendChild(c.Ega), this.FOa.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        Dha(b, c) {
                            const d = this.props.k6,
                                e = this.props.ob,
                                f = this.props.sheet,
                                g = this.props.container,
                                h = this.props.GY;
                            b = new FEc(this.props.IT, this.props.QG, this.props.aj, d(b, c), e, f, b, c, g, h.YIa, this.ska, this.rka);
                            __c.gc(this, qDc(b));
                            this.VP.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.cd = (O6.G(this), ow());
                            this.dxa = ow();
                            this.fxa = ow();
                            this.FOa = [];
                            this.VP = [];
                            this.ska = I6(c => {
                                const d = this.props.tA.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.rka = I6(c => {
                                const d = this.props.kea.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [O6, zEc]
                    } = K6(a, [], [pc], AEc))
                })(), vEc);
                var EEc = class {
                        static G(a) {
                            L(a, {
                                update: H6
                            })
                        }
                        update(a, b, c) {
                            [this.Cga, this.Ega].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.ua = b;
                            for (const [d] of c) c = this.VP.get(d), c || (c = this.Dha(d, b), this.VP.set(d, c), this.Cga.appendChild(c.Bga), this.Ega.appendChild(c.oR)), c.update(b)
                        }
                        hide() {
                            [this.Cga, this.Ega].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.Dha = a;
                            this.ua = b;
                            this.Cga = (EEc.G(this), document.createElement("div"));
                            this.Ega =
                                document.createElement("div");
                            this.VP = new Map
                        }
                    },
                    FEc = class {
                        static G(a) {
                            L(a, {
                                sha: G6.ref,
                                ua: G6.ref,
                                RCa: z6,
                                update: H6,
                                mw: z6,
                                attrs: z6.struct,
                                pEa: z6,
                                BH: z6,
                                renderer: z6,
                                lVa: z6.struct
                            })
                        }
                        get RCa() {
                            if (!pDc) return !1;
                            const a = this.mw;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.IT(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.ua && (this.ua = a, this.oD.ua = a, this.Jza && this.Jza(), this.Jza = this.YIa(this.ua, this.col, this))
                        }
                        get zIb() {
                            return this.sha
                        }
                        get mw() {
                            const a = this.sheet.layout.cells.get(this.ua,
                                this.col);
                            return a ? a.ref : void 0
                        }
                        get attrs() {
                            const a = this.oD.attrs;
                            return {
                                qh: a ? .qh,
                                textAlign: a ? .textAlign,
                                direction: a ? .direction,
                                link: a ? .link,
                                fontSize: a ? .fontSize,
                                color: a ? .color,
                                aE: a ? .aE
                            }
                        }
                        get pEa() {
                            var a = this.oD.span;
                            if (!a) return !1;
                            if (a.Xb === a.Qc && a.mc === a.ad) return !0;
                            var b = this.ska("first");
                            const c = this.ska("last"),
                                d = this.rka("first"),
                                e = this.rka("last");
                            if (!(b && c && d && e)) return !1;
                            const f = this.ob.layout.Oe.Ei(this.sheet),
                                g = this.ob.layout.Oe.Xh(this.sheet);
                            b = f.Ve(a.Xb, b) >= 0 && f.Ve(a.Xb, c) <= 0 ? a.Xb : b;
                            a =
                                g.Ve(a.mc, d) >= 0 && g.Ve(a.mc, e) <= 0 ? a.mc : d;
                            return b === this.ua && a === this.col
                        }
                        get BH() {
                            const a = this.sheet,
                                b = this.ua,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                container: {
                                    config: a
                                },
                                ua: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.QS(c, b);
                                case "sheet-item":
                                    return this.container.QS(c, b);
                                case "sheet-element":
                                    return this.container.QS(c, b);
                                default:
                                    throw new A(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.mw;
                            if (a && this.pEa && (a.content.ref || a.Fa.ref)) return this.QG({
                                context: {
                                    container: this.BH,
                                    attrs: this.attrs
                                },
                                Vr: this.JGa,
                                aj: this.aj
                            })
                        }
                        get lVa() {
                            this.mVa.reportObserved();
                            var a = ADc(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.aba : this.LH, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m, n) {
                            this.IT = a;
                            this.QG = b;
                            this.oD = d;
                            this.ob = e;
                            this.sheet = f;
                            this.col = g;
                            this.container = k;
                            this.YIa = l;
                            this.ska = m;
                            this.rka = n;
                            this.Bga = (FEc.G(this), document.createElement("div"));
                            this.oR = document.createElement("div");
                            this.CH = document.createElement("div");
                            this.LH = document.createElement("div");
                            this.aba = document.createElement("div");
                            this.mVa = zDc("content size atom");
                            this.JGa = H6(() => this.mVa.reportChanged());
                            this.ua = h;
                            this.Bga.className = "_2JFriw";
                            this.oR.className = "imy9ug";
                            this.CH.className = r6("pDMp7w", {
                                _0yZ6Qg: this.mw ? .content.ref ? .type !== "text3",
                                qhF5uA: this.mw ? .content.ref ? .type !== "text3" && this.mw ? .content.ref ? .type !== "text2",
                                qxD1GA: this.RCa
                            });
                            this.LH.className = "_30B9pw";
                            this.CH.appendChild(this.LH);
                            this.oR.appendChild(this.CH);
                            this.aba.className = "G7zH2w";
                            this.Jza = l(this.ua, this.col, this);
                            this.aj = p => p6(c, { ...p,
                                Vr: this.JGa
                            })
                        }
                    };
                var GEc, HEc, IEc, B6;
                new(GEc = class extends J6 {
                    constructor() {
                        super(B6);
                        HEc()
                    }
                }, (() => {
                    class a extends(IEc = D6) {
                        static G(b) {
                            L(b, {
                                Vja: z6
                            })
                        }
                        render() {
                            const {
                                IT: b,
                                sheet: c,
                                container: d,
                                ob: e,
                                Hr: f,
                                Bv: g,
                                A8: h,
                                QG: k,
                                Hf: l,
                                aj: m,
                                viewport: n,
                                iL: p,
                                Ygb: q = !1
                            } = this.props, r = c.direction === "ltr" ? "TA4X7w" : "WvuqMw", t = e.layout.Oe.Ei(c);
                            if (!e.layout.Oe.Xh(c).empty && !t.empty) return p6("div", {
                                className: r6("SNkrHw", r, {
                                    RaA0Nw: q
                                }),
                                ...l,
                                children: p6(BEc, {
                                    IT: b,
                                    QG: k,
                                    aj: m,
                                    xkb: this.eua,
                                    k6: this.k6,
                                    ob: e,
                                    sheet: c,
                                    container: d,
                                    Hr: f,
                                    Bv: g,
                                    A8: h,
                                    da: this.da,
                                    viewport: n,
                                    iL: p,
                                    Vja: this.Vja
                                })
                            })
                        }
                        get Vja() {
                            var b = this.props.sheet,
                                c = this.props.ob;
                            const d = {},
                                e = b.view.freeze.nV ? b.layout.af.get(b.view.freeze.nV) : void 0,
                                f = b.view.freeze.JH ? b.layout.Ce.get(b.view.freeze.JH) : void 0;
                            var g = c.layout.Oe.Ei(b),
                                h = c.layout.Oe.Xh(b);
                            b = g.first();
                            c = g.last();
                            const k = h.first(),
                                l = h.last();
                            if (b != null && c != null && k != null && l != null) return h = f ? h.next(f) : k, g = e ? g.next(e) : b, e && f && (d.WSa = {
                                    range: {
                                        mc: k,
                                        Xb: b,
                                        ad: f,
                                        Qc: e
                                    }
                                }), e && h && (d.khb = {
                                    range: {
                                        mc: h,
                                        Xb: b,
                                        ad: l,
                                        Qc: e
                                    }
                                }), f && g && (d.y0a = {
                                    range: {
                                        mc: k,
                                        Xb: g,
                                        ad: f,
                                        Qc: c
                                    }
                                }),
                                g && h && (d.Zfb = {
                                    range: {
                                        mc: h,
                                        Xb: g,
                                        ad: l,
                                        Qc: c
                                    }
                                }), d
                        }
                        get da() {
                            return this.props.da ? this.props.da : z6(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.eua = (B6.G(this), t6(c => {
                                const {
                                    sheet: d,
                                    ob: e,
                                    LDa: f,
                                    da: g,
                                    dga: h = "hidden"
                                } = this.props;
                                return p6(L6, {
                                    sheet: d,
                                    ob: e,
                                    range: c.range,
                                    da: g,
                                    children: p6(rEc, { ...c,
                                        sheet: d,
                                        ob: e,
                                        da: this.da,
                                        LDa: f,
                                        overflow: h
                                    })
                                })
                            }));
                            this.k6 = (c, d) => new __c.tTa(this.props.dm, this.props.ob, this.props.dD, this.props.sheet, c, d, this.da, this.Iw, this.Kw);
                            this.Iw = (c, d) => this.props.Iw ? .(this.props.sheet, c, d);
                            this.Kw =
                                (c, d) => this.props.Kw ? .(this.props.sheet, c, d)
                        }
                    }({
                        c: [B6, HEc]
                    } = K6(a, [], [pc], IEc))
                })(), GEc);
                __c.DTa = {
                    Ezb: function(a) {
                        const b = a.Ou,
                            c = a.be,
                            d = a.Td,
                            e = a.uo,
                            f = a.dm,
                            g = a.ob,
                            h = a.dD,
                            k = a.m4;
                        VCc({
                            cD: a.cD,
                            ob: g,
                            gg: a.gg,
                            zOb: a.lV,
                            ib: a.ib
                        });
                        const l = sDc({
                            QG: k,
                            ob: g,
                            dm: f,
                            dD: h,
                            GB: void 0
                        });
                        b.Aua = mDc({
                            Ds: l,
                            ob: g
                        });
                        c.fua = cDc({
                            Ds: l
                        });
                        ({
                            Bkb: a
                        } = jDc({
                            Ds: l,
                            Qe: e(),
                            Fcb: new iEc,
                            ob: g
                        }));
                        d.er.zua = a;
                        const {
                            pib: m,
                            qib: n,
                            oib: p
                        } = aDc({
                            ob: g
                        });
                        return {
                            zQa: t6(q => p6(GDc, { ...q,
                                container: void 0,
                                Ds: l,
                                Akb: m,
                                Ckb: n,
                                ykb: p,
                                aj: HDc
                            }))
                        }
                    }
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/5d2701951c3f02e7.js.map
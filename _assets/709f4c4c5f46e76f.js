(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [6712], {

        /***/
        258551: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var m_;
                var C0;
                var L = __c.L;
                var Pa = __c.Pa;
                var aJ = __c.aJ;
                var G = __c.G;
                var Y = __c.Y;
                var X = __c.X;
                var H = __c.H;
                var XD = __c.XD;
                var lf = __c.lf;
                var Gd = __c.Gd;
                var id = __c.id;
                var A = __c.A;
                var u = __c.u;
                var z = __c.z;
                var Ca = __c.Ca;
                var pac, rac, qac, uac, vac, wac, xac, yac, Aac, zac, Cac, Bac, TZ, Fac, Kac, XZ, YZ, Rac, Xac, WZ, Zac, $ac, bbc, dbc, ebc, ibc, d_, e_, jbc, f_, g_, h_, kbc, i_, j_, k_, lbc, l_, mbc, obc, pbc, qbc, tbc, ubc, rbc, sbc, vbc, wbc, xbc, ybc, p_, zbc, Abc, Cbc, Ibc, Pbc, $bc, acc, bcc, ccc, H_, I_, J_, ecc, fcc, gcc, K_, jcc, hcc, M_, O_, N_, kcc, P_, mcc, occ, pcc, rcc, S_, scc, Ecc, Fcc, Gcc, Hcc, X_, tcc, T_, ycc, Bcc, Dcc, V_, Acc, Icc, qcc, Kcc, Lcc, Mcc, Jcc, Pcc, Qcc, Scc, Z_, fdc, cdc, adc, a0, Tcc, Wcc, Vcc, bdc, Ucc, gdc, $cc, Ycc, Xcc, $_, kdc, c0, ldc, mdc, ndc, pdc, odc, rdc, f0, ydc, Bdc, Adc, Jbc, k0, Ddc, Tbc, Ubc,
                    Vbc, Fdc, Gdc, Hdc, l0, Idc, Ldc, Ndc, n0, o0, p0, q0, Dbc, Odc, Sdc, Udc, Tdc, Wdc, Vdc, Xdc, Ydc, Zdc, cec, dec, fec, gec, hec, iec;
                pac = function(a, b) {
                    b = a.xi.get(__c.Fs(b));
                    return b != null ? a.ZX.get(b) : void 0
                };
                __c.OZ = function(a) {
                    return {
                        type: 1,
                        Component: a
                    }
                };
                __c.PZ = function() {
                    return a => a
                };
                rac = function(a, b) {
                    b = qac(b);
                    return a.origin !== b.qOa ? {
                        valid: !1,
                        error: {
                            message: "Message origin does not match iframe src origin",
                            extra: new Map([
                                ["msg.origin", a.origin],
                                ["iframe.origin", b.qOa]
                            ])
                        }
                    } : {
                        valid: !0,
                        kqa: b.kqa
                    }
                };
                qac = function({
                    src: a,
                    srcdoc: b,
                    sandbox: c
                }) {
                    if (b.length !== 0 || !c.contains("allow-same-origin")) return sac;
                    a = (new URL(a)).origin;
                    return a === "null" ? sac : {
                        qOa: a,
                        kqa: a
                    }
                };
                uac = function(a) {
                    a.je = setTimeout(() => {
                        a.d$a(new tac)
                    }, 500)
                };
                vac = function(a, b) {
                    if (!a) return Ca("missing 'data' field in MessageEvent");
                    const c = a.sandboxCommsSource ? ? a.source;
                    return c ? c !== "iframe" ? Ca("invalid source") : a.clientId !== b ? Ca("unknown client id") : (0, __c.Ba)() : Ca("'source' is missing in MessageEvent data object")
                };
                wac = function(a, {
                    VF: b,
                    clientId: c
                }) {
                    if (a = a.ER.get(b)) return a.get(c)
                };
                xac = function(a, {
                    VF: b,
                    clientId: c
                }, d) {
                    let e = a.ER.get(b);
                    e || (e = new Map, a.ER.set(b, e));
                    if (e.has(c)) throw d.promise.resolve(void 0), Error("A connection request with the same processId and clientId already exists");
                    e.set(c, d)
                };
                yac = function(a, {
                    VF: b,
                    clientId: c
                }) {
                    const d = a.ER.get(b);
                    d && (d.delete(c), d.size === 0 && a.ER.delete(b))
                };
                Aac = function({
                    VF: a,
                    className: b,
                    embed: c,
                    yqa: d
                }) {
                    return QZ(() => {
                        const {
                            id: e,
                            src: f,
                            sandbox: g,
                            allow: h,
                            allowFullscreen: k
                        } = zac(z(c.html));
                        return RZ("div", {
                            className: b,
                            children: RZ("div", {
                                ref: l => {
                                    l && d(l)
                                },
                                className: "R9vaCQ",
                                children: RZ("iframe", {
                                    id: e,
                                    className: "_5K1SQ",
                                    "data-process-id": a,
                                    src: f,
                                    title: c.title || __c.J("gs+cqw"),
                                    sandbox: g,
                                    allow: h,
                                    allowFullScreen: k
                                })
                            })
                        })
                    }, [c.html, c.title, b, d, a])
                };
                zac = function(a) {
                    a = (new DOMParser).parseFromString(a, "text/html");
                    a = z(a.querySelector("iframe"));
                    return {
                        id: a.id,
                        src: z(a.getAttribute("src")),
                        sandbox: a.sandbox.toString(),
                        allow: a.allow,
                        allowFullscreen: a.allowFullscreen
                    }
                };
                Cac = async function(a, b) {
                    const c = b.requestId,
                        d = b.path;
                    b = b.payload;
                    const e = a.R1.get(d);
                    if (e) {
                        a.S$.s5.send({
                            type: "ack",
                            requestId: c
                        });
                        var f = setInterval(() => a.S$.s5.send({
                            type: "ack",
                            requestId: c
                        }), 9E3);
                        try {
                            var g = await e(b);
                            clearInterval(f);
                            a.S$.s5.send({
                                type: "response",
                                requestId: c,
                                payload: g
                            })
                        } catch (k) {
                            clearInterval(f);
                            g = "internal_error";
                            b = "Something went wrong on our end, if this issue persists please contact us.";
                            if (k instanceof SZ) {
                                var h = k;
                                k.code === "internal_error" ? a.I.Tb(k, {
                                    He: "Internal error in comms handler",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", d]
                                    ])
                                }) : (g = k.code, b = k.qJb)
                            } else a.fKb ? a.I.Tb(k, {
                                He: "Unexpected error type thrown from comms handler",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            }) : a.Prb.error(k);
                            g = Bac(a.S$, c, g, b);
                            g.ok || a.I.PR(g.error, {
                                He: "unable to send error response",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            })
                        }
                        if (h != null)
                            for (const k of a.cub) try {
                                k(h)
                            } catch (l) {
                                a.I.Zv(l, {
                                    He: "Error executing errorObserver"
                                })
                            }
                    } else h = Bac(a.S$, c, "internal_error", `No request handler configured for path: "${d}".`),
                        h.ok || a.I.PR(h.error, {
                            He: "unable to send error response",
                            tags: new Map([
                                ["type", "request"],
                                ["path", d]
                            ])
                        })
                };
                Bac = function(a, b, c, d) {
                    return a.s5.send({
                        type: "error",
                        requestId: b,
                        code: c,
                        message: d
                    })
                };
                TZ = function(a, b, c, d, e) {
                    a.handle(b, async f => {
                        if (f === void 0) throw new SZ({
                            code: "internal_error",
                            message: `${b}: request cannot be undefined.`
                        });
                        f = c.Ba(f);
                        f = await d(f);
                        if (e) return e.Ha(f)
                    })
                };
                Fac = function(a, b) {
                    TZ(a, "INIT_DATA", Dac, c => b.V_a(c), UZ);
                    TZ(a, "DATA_RENDER_READY", Eac, c => b.$_a(c), VZ)
                };
                Kac = function(a, b) {
                    TZ(a, "SELECTION_CHANGED", Gac, c => b.Sxb(c), Hac);
                    TZ(a, "TEXT_CONTENT_CHANGED", Iac, c => b.Uxb(c), Jac)
                };
                XZ = async function(a, b) {
                    a = await a.qw.request("RENDER_ELEMENT", Lac.Ha(b));
                    a = WZ(a, "RENDER_ELEMENT");
                    return Mac.Ba(a)
                };
                YZ = async function(a, b) {
                    a = await a.qw.request("SET_CAPABILITY", Nac.Ha(b));
                    a = WZ(a, "SET_CAPABILITY");
                    return Oac.Ba(a)
                };
                Rac = async function(a, b) {
                    a = await a.qw.request("SET_EDIT_PANEL_VALUE", Pac.Ha(b));
                    a = WZ(a, "SET_EDIT_PANEL_VALUE");
                    return Qac.Ba(a)
                };
                Xac = function(a, b) {
                    TZ(a, "INIT_ELEMENT", Sac, c => b.ICa(c), Tac);
                    TZ(a, "SET_CONFIG", Uac, c => b.Txb(c), Vac);
                    TZ(a, "RESIZE_EVENT", Wac, c => b.LCa(c))
                };
                WZ = function(a, b) {
                    if (!a.ok) throw Error(`Encountered an error while sending ${b} request: ${a.error}`);
                    if (a.value == null) throw Error(`${b}: Result cannot be empty`);
                    return a.value
                };
                Zac = function(a, b) {
                    TZ(a, "RESIZE_EVENT", Yac, c => b.LCa(c))
                };
                $ac = async function(a, b, c) {
                    const {
                        port1: d,
                        port2: e
                    } = new MessageChannel;
                    c = new ZZ(d, c);
                    await a.CY({
                        V5: {
                            VF: b,
                            clientId: "canva-code-data-sdk"
                        },
                        port: e
                    });
                    return {
                        qw: c
                    }
                };
                bbc = async function(a, b, c) {
                    const {
                        port1: d,
                        port2: e
                    } = new MessageChannel;
                    c = new ZZ(d, c);
                    await a.CY({
                        V5: {
                            VF: b,
                            clientId: "canva-code-element-sdk"
                        },
                        port: e
                    });
                    return {
                        qw: c,
                        Tsb: new abc(c)
                    }
                };
                dbc = async function(a, b, c) {
                    const {
                        port1: d,
                        port2: e
                    } = new MessageChannel;
                    c = new ZZ(d, c);
                    await a.CY({
                        V5: {
                            VF: b,
                            clientId: "canva-code-editing-sdk"
                        },
                        port: e
                    });
                    return {
                        qw: c,
                        Msb: new cbc(c)
                    }
                };
                ebc = async function(a, b, c) {
                    const {
                        port1: d,
                        port2: e
                    } = new MessageChannel;
                    c = new ZZ(d, c);
                    await a.CY({
                        V5: {
                            VF: b,
                            clientId: "canva-code-resizing-sdk"
                        },
                        port: e
                    });
                    return {
                        qw: c
                    }
                };
                ibc = function({
                    uf: a,
                    Ku: b,
                    Cw: c,
                    bb: d,
                    I: e
                }) {
                    const f = `codelet-${fbc++}`,
                        g = new gbc({
                            aV: f
                        }, e),
                        h = new hbc(g, e),
                        k = (l, m) => e.error(l, {
                            He: "codelet: ",
                            extra: new Map(Object.entries(m))
                        });
                    return $Z(l => {
                        const [m, n] = a_(() => `${f}-${__c.tq()}`), p = b_(v => {
                            h.CY(v, m, l.AV, l.Eqa, l.Dqa, l.Fqa, l.B6a)
                        }, [l.B6a, l.AV, l.Eqa, l.Dqa, l.Fqa, m]), q = l.DF, r = b_(() => {
                            n(`${f}-${__c.tq()}`);
                            q ? .()
                        }, [q]), t = QZ(() => v => RZ(Aac, {
                            VF: m,
                            ...v
                        }), [m]);
                        return RZ(__c.pz, {
                            url: l.url,
                            store: b,
                            Nn: c,
                            lI: k,
                            bb: d,
                            fV: a > 10,
                            ck: l.ck || !1,
                            dO: p,
                            DF: r,
                            bjb: t
                        })
                    })
                };
                __c.c_ = function() {
                    return a => a
                };
                d_ = function(a, b) {
                    return b.map(c => ({
                        type: a,
                        id: c.id,
                        version: c.version
                    }))
                };
                e_ = function(a) {
                    return {
                        kind: 0,
                        GO: a
                    }
                };
                jbc = function() {
                    return {
                        kind: 1
                    }
                };
                f_ = function(a) {
                    return {
                        kind: 3,
                        range: a
                    }
                };
                g_ = function(a) {
                    return {
                        kind: 2,
                        range: a
                    }
                };
                h_ = function(...a) {
                    return {
                        kind: 4,
                        values: new Set(a)
                    }
                };
                kbc = function(a) {
                    return {
                        kind: 5,
                        itemType: a
                    }
                };
                i_ = function(a) {
                    return {
                        kind: 7,
                        name: a
                    }
                };
                j_ = function(a) {
                    return {
                        kind: 8,
                        itemType: a
                    }
                };
                k_ = function(a) {
                    return {
                        kind: 10,
                        fields: a
                    }
                };
                lbc = function(a, ...b) {
                    return {
                        kind: 11,
                        vXa: a,
                        Gh: b
                    }
                };
                l_ = function(a, b, c) {
                    return (d, ...e) => ({
                        key: d,
                        mLa: a,
                        QF: b,
                        type: c(...e)
                    })
                };
                m_ = __c.m_ = function(a) {
                    const b = new Set;
                    for (const c of Object.values(a)) u(!b.has(c.key), "duplicate key: {}", c.key), b.add(c.key);
                    return a
                };
                mbc = function(a) {
                    switch (a.kind) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                            return !1;
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                            return !0;
                        default:
                            throw new A(a);
                    }
                };
                __c.n_ = function(a) {
                    return () => ({ ...nbc,
                        ...a
                    })
                };
                obc = function(a, b) {
                    a = { ...a.WY
                    };
                    b.qb.every(c => !!c.fill.qe.ref ? .image && !!c.fill.qe.ref ? .video) && (a.Eu = !0);
                    return a
                };
                pbc = function(a, b) {
                    a = { ...a.WY
                    };
                    b.wb.every(c => !!c.qe.ref ? .text) && (a.Eu = !0);
                    return a
                };
                qbc = function(a, b) {
                    switch (b.type) {
                        case "rect":
                            return a = { ...a.WY
                            }, b.fill.qe.ref ? .image && b.fill.qe.ref ? .video && (a.Eu = !0), a;
                        case "shape":
                            return obc(a, b);
                        case "text":
                            return a = { ...a.WY
                            }, b.qe.ref ? .text && (a.Eu = !0), a;
                        case "chart":
                            return { ...a.WY
                            };
                        case "line":
                            return pbc(a, b);
                        case "grid":
                            return { ...a.WY
                            };
                        default:
                            throw new A(b);
                    }
                };
                tbc = function(a, b) {
                    return a.e.classes.j4.create({}, {
                        V: {
                            fill: rbc(a, b.fill)
                        },
                        attributes: { ...sbc(a, b),
                            W: () => b.W
                        }
                    })
                };
                ubc = function(a, b) {
                    return a.e.classes.Sea.create({}, {
                        V: {
                            qb: a.e.list(b.qb.map(c => a.createPath(c))),
                            wb: b.wb,
                            resizeMode: b.resizeMode,
                            slice: b.slice
                        },
                        attributes: { ...sbc(a, b),
                            fj: () => b.fj,
                            viewBox: () => b.viewBox
                        }
                    })
                };
                rbc = function(a, b) {
                    return a.e.classes.d4.create({}, {
                        V: {
                            image: a.e.computed(() => vbc(a.qe, b.image, b.qe.ref ? .image)),
                            video: a.e.computed(() => wbc(a.qe, b.video, b.qe.ref ? .video)),
                            $a: b.$a
                        },
                        attributes: {
                            Dm: () => b.Dm,
                            color: () => b.color,
                            Sa: () => b.Sa,
                            locked: () => b.locked,
                            Og: () => b.Og,
                            Kl: () => b.Kl,
                            ed: () => b.ed,
                            flipX: () => b.flipX,
                            flipY: () => b.flipY
                        }
                    })
                };
                sbc = function(a, b) {
                    return {
                        height: () => b.height,
                        width: () => b.width,
                        top: () => b.top,
                        left: () => b.left,
                        rotation: () => b.rotation,
                        mh: () => qbc(a.u3a, b),
                        locked: !0
                    }
                };
                vbc = function(a, b, c) {
                    const d = c ? a.qe ? .get(c) : void 0;
                    return {
                        ref: (d && xbc(d, "image_fill")) ? .image.ref ? ? b.ref,
                        set: e => ybc(a, {
                            type: "image_fill",
                            value: { ...__c.ZD,
                                image: e
                            }
                        }, c)
                    }
                };
                wbc = function(a, b, c) {
                    const d = c ? a.qe ? .get(c) : void 0;
                    return {
                        ref: (d && xbc(d, "video_fill")) ? .video.ref ? ? b.ref,
                        set: e => ybc(a, {
                            type: "video_fill",
                            value: { ...__c.ZD,
                                video: e
                            }
                        }, c)
                    }
                };
                xbc = function(a, b) {
                    if (a.type !== b) throw Error(`Expected override type ${b} but got ${a.type}`);
                    return a.value
                };
                ybc = function(a, b, c) {
                    if (!c) throw Error("No override key is available, but this is being set on an instance. This is likely an error with the locking logic.");
                    a.qe.set(c, b)
                };
                p_ = async function(a, b) {
                    [a] = await a.jja([b]);
                    return new o_({
                        id: b.id,
                        url: a.fonts[0].files[0].url
                    })
                };
                zbc = async function(a, b, c) {
                    a = await p_(a, c);
                    return YZ(b, a)
                };
                Abc = async function(a, b, c, d, e, f, g) {
                    try {
                        const h = b.Kja.ref ? .first(),
                            k = a.wa,
                            l = await XZ(c, {
                                config: b.config,
                                LS: k != null && h != null ? await p_(k, h) : void 0
                            });
                        a.config.oM ? .Lsa({ ...l,
                            rI: l.rI ? .size
                        }, b, d, e, f, g)
                    } catch (h) {
                        a.I.Zv(h)
                    } finally {
                        a.LKa()
                    }
                };
                Cbc = function(a, b) {
                    const c = new Map;
                    return q_(() => {
                        const d = new Map;
                        a.config.forEach((e, f) => {
                            let g;
                            const h = c.get(f);
                            e.textContent !== h ? .textContent && (g = { ...(g ? ? new r_({})),
                                textContent: e.textContent
                            });
                            e.backgroundColor !== h ? .backgroundColor && (g = { ...(g ? ? new r_({})),
                                backgroundColor: e.backgroundColor
                            });
                            g && d.set(f, g);
                            c.set(f, { ...e
                            })
                        });
                        return d
                    }, async d => b.bca(new Bbc({
                        config: d
                    })), {
                        fireImmediately: !0
                    })
                };
                Ibc = function(a) {
                    function b(d, e) {
                        var f = c;
                        e = e();
                        u(!f.Pba.has(d));
                        e = {
                            document: Dbc(f.GVa(d, e.document)),
                            D: Dbc(f.GVa(d, e.D))
                        };
                        f.Pba.set(d, e);
                        return {
                            id: d,
                            Iq: e
                        }
                    }
                    const c = a.YOa;
                    return {
                        Os: b("w:wnJF5T87v", Ebc),
                        pZ: b("w:xB9fK2LmQ", Fbc),
                        Hj: a.lAa ? Promise.all([__webpack_require__.me(288639).then(() => __c.s_), __webpack_require__.me(229274).then(() => __c.t_), __webpack_require__.me(89563).then(() => __c.u_), __webpack_require__.me(706140).then(() => __c.v_), __webpack_require__.me(58313).then(() => __c.w_), __webpack_require__.me(879434).then(() =>
                            __c.x_), __webpack_require__.me(181007).then(() => __c.y_), __webpack_require__.me(354456).then(() => __c.z_), __webpack_require__.me(920429).then(() => __c.A_), __webpack_require__.me(580825).then(() => __c.B_)]).then(([d, e, f, g, h, k, l, m, n, p]) => ({
                            ZY: b("w:cm9wgGptP", d.sh),
                            aZ: b("w:yLMS4dWnl", e.sh),
                            bZ: b("w:2flp30CGQ", f.sh),
                            cZ: b("w:1Nv6K6Dtv", g.sh),
                            dZ: b("w:5Nv6K6Dtv", h.sh),
                            eZ: b("w:6Nv6K6Dtv", k.sh),
                            fZ: b("w:7Nv6K6Dtv", l.sh),
                            gZ: b("w:8Nv6K6Dtv", m.sh),
                            hZ: b("w:9Nv6K6Dtv", n.sh),
                            $Y: b("w:sSrc7m4Q3", p.sh)
                        })) : void 0,
                        Dy: b("w:JR4G8hDDg",
                            Gbc),
                        oY: b("w:KS5H9iEEh", Hbc),
                        form: __webpack_require__.me(649E3).then(() => __c.C_).then(d => b("widget:form", d.sh)),
                        ON: a.sAa ? __webpack_require__.me(320784).then(() => __c.D_).then(d => b("w:K7mQ9xR3p", d.sh)) : void 0,
                        scene: a.xAa ? __webpack_require__.me(290120).then(() => __c.E_).then(d => b("w:2pbXJMtm1", d.sh)) : void 0,
                        button: __webpack_require__.me(856598).then(() => __c.F_).then(d => b("w:PQccHDsCJ", d.sh))
                    }
                };
                Pbc = function(a) {
                    function b({
                        id: f,
                        Iq: g
                    }, h, k) {
                        var l = e;
                        h = h(k);
                        k = z(l.QJa.Pba.get(f));
                        u(k.D === g.D);
                        u(!l.KVa.has(f));
                        g = Jbc(f, h, g);
                        l.KVa.set(f, g);
                        return g
                    }
                    const c = new Kbc,
                        d = a.ZOa,
                        e = a.XOa;
                    return {
                        Hgc: c,
                        Hj: d.Hj ? Promise.all([d.Hj, __webpack_require__.me(288639).then(() => __c.s_), __webpack_require__.me(229274).then(() => __c.t_), __webpack_require__.me(89563).then(() => __c.u_), __webpack_require__.me(706140).then(() => __c.v_), __webpack_require__.me(58313).then(() => __c.w_), __webpack_require__.me(879434).then(() => __c.x_),
                            __webpack_require__.me(181007).then(() => __c.y_), __webpack_require__.me(354456).then(() => __c.z_), __webpack_require__.me(920429).then(() => __c.A_), __webpack_require__.me(580825).then(() => __c.B_)
                        ]).then(([f, g, h, k, l, m, n, p, q, r, t]) => ({
                            ZY: b(f.ZY, g.rh, void 0),
                            aZ: b(f.aZ, h.rh, void 0),
                            bZ: b(f.bZ, k.rh, void 0),
                            cZ: b(f.cZ, l.rh, void 0),
                            dZ: b(f.dZ, m.rh, void 0),
                            eZ: b(f.eZ, n.rh, void 0),
                            fZ: b(f.fZ, p.rh, void 0),
                            gZ: b(f.gZ, q.rh, void 0),
                            hZ: b(f.hZ, r.rh, void 0),
                            $Y: b(f.$Y, t.rh, void 0)
                        })) : void 0,
                        scene: d.scene ? Promise.all([d.scene,
                            __webpack_require__.me(290120).then(() => __c.E_)
                        ]).then(([f, g]) => b(f, g.rh, void 0)) : void 0,
                        button: Promise.all([d.button, __webpack_require__.me(856598).then(() => __c.F_)]).then(([f, g]) => b(f, g.rh, {
                            Fia: c.Fia
                        })),
                        Dy: b(d.Dy, Lbc, void 0),
                        oY: b(d.oY, Mbc, void 0),
                        form: Promise.all([d.form, __webpack_require__.me(649E3).then(() => __c.C_)]).then(([f, g]) => b(f, g.rh, void 0)),
                        Os: b(d.Os, Nbc, void 0),
                        pZ: b(d.pZ, Obc, void 0),
                        ON: d.ON ? Promise.all([d.ON, __webpack_require__.me(320784).then(() => __c.D_)]).then(([f, g]) => b(f, g.rh, void 0)) : void 0
                    }
                };
                $bc = function(a) {
                    const b = a.ZOa,
                        c = a.qea,
                        d = a.eg,
                        e = a.VL,
                        f = a.oi;
                    class g extends Qbc {
                        async load() {
                            const [m, n, p] = await Promise.all([this.On, this.loadModule(), Promise.resolve(this.oi)]), q = m.id, r = m.Iq;
                            var t = n.Lo({
                                    VL: { ...e,
                                        fb: d.Uy(`widgets.rendering.clients.${this.jm}`)
                                    },
                                    oi: p
                                }),
                                v = z(c.QJa.Pba.get(q));
                            u(v.D === r.D);
                            u(!c.iV.has(q));
                            Rbc.has(q) || (__c.sAb.set(q, Sbc), Rbc.add(q));
                            const {
                                Ytb: w,
                                lFa: y
                            } = Tbc(c, r, t);
                            v = Ubc(c, r, t, y);
                            t = {
                                D: w,
                                email: v,
                                exports: t.exports,
                                metadata: t.metadata,
                                YDb: Vbc(r, t.metadata),
                                lFa: y,
                                T6: t.T6
                            };
                            c.iV.set(q,
                                t);
                            return {
                                id: q,
                                Iq: r,
                                lJa: t,
                                jm: this.jm
                            }
                        }
                        constructor(m) {
                            super(m.id, m.loadModule);
                            this.On = m.On;
                            this.oi = m.oi;
                            this.jm = m.jm ? ? "default"
                        }
                    }
                    const h = {
                        Os: new g({
                            id: "w:wnJF5T87v",
                            On: Promise.resolve(b.Os),
                            loadModule: () => __webpack_require__.me(196751).then(() => Wbc),
                            oi: {
                                xH: f.xH,
                                $D: f.$D
                            },
                            jm: "blueprint"
                        }),
                        pZ: new g({
                            id: "w:xB9fK2LmQ",
                            On: Promise.resolve(b.pZ),
                            loadModule: () => __webpack_require__.me(258551).then(() => Xbc),
                            oi: {
                                xH: f.xH
                            },
                            jm: "documentBlueprint"
                        }),
                        ZY: b.Hj ? new g({
                            id: "w:cm9wgGptP",
                            On: b.Hj.then(m => m.ZY),
                            loadModule: () =>
                                __webpack_require__.me(288639).then(() => __c.s_),
                            oi: void 0,
                            jm: "demo1"
                        }) : null,
                        aZ: b.Hj ? new g({
                            id: "w:yLMS4dWnl",
                            On: b.Hj.then(m => m.aZ),
                            loadModule: () => __webpack_require__.me(229274).then(() => __c.t_),
                            oi: void 0,
                            jm: "demo2"
                        }) : null,
                        bZ: b.Hj ? new g({
                            id: "w:2flp30CGQ",
                            On: Promise.resolve(b.Hj.then(m => m.bZ)),
                            loadModule: () => __webpack_require__.me(89563).then(() => __c.u_),
                            oi: void 0,
                            jm: "demo3"
                        }) : null,
                        cZ: b.Hj ? new g({
                            id: "w:1Nv6K6Dtv",
                            On: Promise.resolve(b.Hj.then(m => m.cZ)),
                            loadModule: () => __webpack_require__.me(706140).then(() =>
                                __c.v_),
                            oi: void 0,
                            jm: "demo4"
                        }) : null,
                        dZ: b.Hj ? new g({
                            id: "w:5Nv6K6Dtv",
                            On: Promise.resolve(b.Hj.then(m => m.dZ)),
                            loadModule: () => __webpack_require__.me(58313).then(() => __c.w_),
                            oi: void 0,
                            jm: "demo5"
                        }) : null,
                        eZ: b.Hj ? new g({
                            id: "w:6Nv6K6Dtv",
                            On: Promise.resolve(b.Hj.then(m => m.eZ)),
                            loadModule: () => __webpack_require__.me(879434).then(() => __c.x_),
                            oi: void 0,
                            jm: "demo6"
                        }) : null,
                        fZ: b.Hj ? new g({
                            id: "w:7Nv6K6Dtv",
                            On: Promise.resolve(b.Hj.then(m => m.fZ)),
                            loadModule: () => __webpack_require__.me(181007).then(() => __c.y_),
                            oi: void 0,
                            jm: "demo7"
                        }) : null,
                        gZ: b.Hj ? new g({
                            id: "w:8Nv6K6Dtv",
                            On: Promise.resolve(b.Hj.then(m => m.gZ)),
                            loadModule: () => __webpack_require__.me(354456).then(() => __c.z_),
                            oi: void 0,
                            jm: "demo8"
                        }) : null,
                        hZ: b.Hj ? new g({
                            id: "w:9Nv6K6Dtv",
                            On: Promise.resolve(b.Hj.then(m => m.hZ)),
                            loadModule: () => __webpack_require__.me(920429).then(() => __c.A_),
                            oi: void 0,
                            jm: "demo9"
                        }) : null,
                        $Y: b.Hj ? new g({
                            id: "w:sSrc7m4Q3",
                            On: Promise.resolve(b.Hj.then(m => m.$Y)),
                            loadModule: () => __webpack_require__.me(580825).then(() => __c.B_),
                            oi: void 0,
                            jm: "demo10"
                        }) : null,
                        Dy: new g({
                            id: "w:JR4G8hDDg",
                            On: Promise.resolve(b.Dy),
                            loadModule: () => __webpack_require__.me(149342).then(() => Ybc),
                            oi: {
                                WW: f.WW,
                                wa: f.wa,
                                Lp: f.Lp
                            },
                            jm: "codelet"
                        }),
                        oY: new g({
                            id: "w:KS5H9iEEh",
                            On: Promise.resolve(b.oY),
                            loadModule: () => __webpack_require__.me(761582).then(() => Zbc),
                            oi: {
                                WW: f.WW,
                                Lp: f.Lp
                            },
                            jm: "codelet2"
                        }),
                        form: new g({
                            id: "widget:form",
                            On: b.form,
                            loadModule: () => __webpack_require__.me(649E3).then(() => __c.C_),
                            oi: Promise.all([f.fla ? .()]).then(([m]) => ({
                                Qvb: m,
                                wh: f.wh
                            })),
                            jm: "form"
                        }),
                        ON: b.ON ? new g({
                            id: "w:K7mQ9xR3p",
                            On: b.ON,
                            loadModule: () => __webpack_require__.me(320784).then(() => __c.D_),
                            oi: void 0,
                            jm: "navigationMenu"
                        }) : null,
                        scene: b.scene ? new g({
                            id: "w:2pbXJMtm1",
                            On: b.scene,
                            loadModule: () => __webpack_require__.me(290120).then(() => __c.E_),
                            oi: {
                                Uz: f.Uz
                            },
                            jm: "scene"
                        }) : null,
                        button: new g({
                            id: "w:PQccHDsCJ",
                            On: b.button,
                            loadModule: () => __webpack_require__.me(856598).then(() => __c.F_),
                            oi: void 0,
                            jm: "button"
                        })
                    };
                    a = new Set(["widget:form", "w:JR4G8hDDg", "w:wnJF5T87v", "w:2pbXJMtm1", "w:PQccHDsCJ"]);
                    const k = [];
                    for (var l of Object.values(h)) l &&
                        a.has(l.id) && k.push(l.Dn(Promise.resolve()));
                    l = Promise.allSettled(k).then(() => {});
                    return {
                        iV: {
                            Os: h.Os.Dn(l),
                            pZ: h.pZ.Dn(l),
                            Hj: b.Hj && {
                                ZY: h.ZY.Dn(l),
                                aZ: h.aZ.Dn(l),
                                bZ: h.bZ.Dn(l),
                                cZ: h.cZ.Dn(l),
                                dZ: h.dZ.Dn(l),
                                eZ: h.eZ.Dn(l),
                                fZ: h.fZ.Dn(l),
                                gZ: h.gZ.Dn(l),
                                hZ: h.hZ.Dn(l),
                                $Y: h.$Y.Dn(l)
                            },
                            Dy: h.Dy.Dn(l),
                            oY: h.oY.Dn(l),
                            form: h.form ? .Dn(l) ? ? void 0,
                            ON: h.ON ? .Dn(l) ? ? void 0,
                            scene: h.scene ? .Dn(l) ? ? void 0,
                            button: h.button ? .Dn(l) ? ? void 0
                        },
                        KZa: () => {
                            const m = [];
                            for (const n of Object.values(h)) n && m.push(n.Dn(Promise.resolve()));
                            return Promise.allSettled(m)
                        }
                    }
                };
                acc = function(a) {
                    var b = {
                        document: void 0,
                        D: void 0
                    };
                    const c = new Map;
                    for (const d in b) a[d].WL.forEach((e, f) => c.set(f, e));
                    return {
                        WL: c,
                        decode: d => {
                            const e = new Map,
                                f = {};
                            for (const g in d) {
                                const h = a[g].decode(d[g]);
                                h.JJa.forEach((k, l) => e.set(l, k));
                                f[g] = h.data
                            }
                            return {
                                JJa: e,
                                data: f
                            }
                        },
                        encode: d => id(b, (e, f) => a[f].encode(d[f]))
                    }
                };
                bcc = function(a) {
                    return () => a
                };
                ccc = function(a) {
                    return a()
                };
                H_ = function(a, b, c) {
                    return new G_([a], b, c)
                };
                I_ = function(a, b, c, d) {
                    return new G_([a, b], c, d)
                };
                J_ = function(a, b, c, d) {
                    return new dcc(a, b, c, d)
                };
                ecc = function(a, b) {
                    return b(a)
                };
                fcc = function(a) {
                    return (b, c) => ({
                        kind: 2,
                        name: a,
                        args: [b, c]
                    })
                };
                gcc = function(a) {
                    return b => ({
                        kind: 3,
                        name: a,
                        args: b
                    })
                };
                K_ = function(a, b) {
                    return a === b || b.map(c => a.ODa(hcc(c)))
                };
                jcc = function(a, b) {
                    return a.aGa(b).map(c => new icc(c, d => d.props[b]))
                };
                hcc = function(a) {
                    u(a instanceof L_);
                    return a
                };
                M_ = function(a) {
                    const b = new WeakMap;
                    return function(c) {
                        let d = b.get(c);
                        d == null && (d = a.call(this, c), b.set(c, d));
                        return d
                    }
                };
                O_ = function(a, b) {
                    if (a === b) return !0;
                    switch (typeof a) {
                        case "string":
                        case "number":
                        case "boolean":
                        case "undefined":
                            return !1;
                        case "object":
                            if (typeof b !== "object" || a.kind !== b.kind) return !1;
                            switch (a.kind) {
                                case "array":
                                    return b.kind === "array" && N_(a.items, b.items);
                                case "set":
                                    var c;
                                    if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : N_([...a], [...b]);
                                    return c;
                                case "map":
                                    if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : N_([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                                    return c;
                                case "record":
                                    return b.kind === "record" && kcc(a.fields, b.fields);
                                case "instance":
                                    return b.kind === "instance" && a.instance === b.instance;
                                default:
                                    throw new A(a);
                            }
                        default:
                            throw new A(a);
                    }
                };
                N_ = function(a, b) {
                    if (a === b) return !0;
                    if (a.length !== b.length) return !1;
                    for (let c = 0; c < a.length; c++)
                        if (!O_(a[c], b[c])) return !1;
                    return !0
                };
                kcc = function(a, b) {
                    if (a === b) return !0;
                    const c = Object.keys(a),
                        d = Object.keys(b),
                        e = new Set([...c, ...d]);
                    if (c.length !== e.size || d.length !== e.size) return !1;
                    for (const f of e)
                        if (!O_(a[f], b[f])) return !1;
                    return !0
                };
                P_ = function(a) {
                    return typeof a === "string" ? JSON.stringify(a) : String(a)
                };
                mcc = function(a, b) {
                    return a.map(c => b.map(d => lcc[0](c, d)))
                };
                occ = function(a, b, c) {
                    return b.map(d => ncc[a](d, c))
                };
                pcc = function(a, b) {
                    return new Q_(new R_(new Map(b), a.vars), a.l8)
                };
                rcc = function(a, b, c) {
                    for (const [e, f] of c.l8) {
                        var d = f.params.map(([g, h]) => [g, a.types.evaluate(h)]);
                        d = qcc(b, d, g => S_(a, g, f.body));
                        b = new Q_(b.vars, b.l8.define(e, d))
                    }
                    return S_(a, b, c.body)
                };
                S_ = function(a, b, c) {
                    switch (c.kind) {
                        case 1:
                            return scc(c.value);
                        case 2:
                            const f = c.args.map(q => S_(a, b, q));
                            c = c.name;
                            return typeof c === "string" ? b.l8.resolve(c).map(q => tcc(q, f)) : ucc[c].map(q => T_(q, f));
                        case 3:
                            const g = c.args.map(q => q.kind !== 13 ? new vcc(S_(a, b, q)) : new wcc(S_(a, b, q.v4b)));
                            c = c.name;
                            switch (c) {
                                case 0:
                                case 1:
                                    var d = g.map(q => q.wBa(r => r.type, r => r.type.TT()));
                                    return U_.union(...d).map(xcc[c]).map(q => ycc(q, g));
                                default:
                                    return zcc[c].map(q => ycc(q, g))
                            }
                        case 4:
                            d = c.name;
                            var e = c.param;
                            const h = c.body,
                                k = S_(a, b,
                                    c.wY);
                            c = k.type.TT();
                            const l = qcc(b, [
                                [e, c]
                            ], q => S_(a, q, h));
                            return occ(d, c, l.resultType).map(q => Acc(q, k, l));
                        case 5:
                            const m = c.entries.map(([q, r]) => [S_(a, b, q), S_(a, b, r)]);
                            c = U_.union(...m.map(([q]) => q.type));
                            d = U_.union(...m.map(([, q]) => q.type));
                            if (!K_(c, U_.primitive)) throw Error(`key type is not a primitive: ${c}`);
                            return mcc(c, d).map(q => Bcc(q, m));
                        case 6:
                            const n = id(c.fields, q => S_(a, b, q));
                            c = id(n, q => q.type);
                            return (0, Ccc[0])(c).map(q => Dcc(q, n));
                        case 7:
                            d = a.types.resolve(c.name);
                            if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                            const p = S_(a, b, {
                                kind: 6,
                                fields: c.args
                            });
                            return d.FEb.map(q => T_(q, [p], {
                                uq: !0
                            }));
                        case 8:
                            return d = S_(a, b, c.base), Ecc(d, c.gcc);
                        case 9:
                            return Fcc(b, c.name);
                        case 10:
                            return d = Gd(c.defs, q => S_(a, b, q)), Gcc(a, b, d, c.body);
                        case 11:
                            return d = S_(a, b, c.test).as(U_.bd), e = S_(a, b, c.ZXb), c = S_(a, b, c.alternate), Hcc(d, e, c);
                        case 12:
                            return S_(a, b, c.body).computed();
                        default:
                            throw new A(c);
                    }
                };
                scc = function(a) {
                    switch (typeof a) {
                        case "string":
                            return V_(U_.string, a);
                        case "number":
                            return V_(U_.number, a);
                        case "boolean":
                            return V_(U_.bd, a);
                        case "undefined":
                            return V_(U_.undefined, a);
                        default:
                            throw new A(a);
                    }
                };
                Ecc = function(a, b) {
                    return a.map(c => jcc(c, b).map(({
                        type: d,
                        get: e
                    }) => T_(new G_([c], d, e), [a])))
                };
                Fcc = function(a, b) {
                    return a.vars.resolve(b).map(c => W_.of(c, d => d.resolve(b)))
                };
                Gcc = function(a, b, c, d) {
                    const e = Gd(c, g => g.type),
                        f = Gd(c, g => g.evaluate);
                    return Icc(S_(a, pcc(b, e), d), g => {
                        const h = Gd(f, k => k(g));
                        return new R_(new Map(h), g)
                    })
                };
                Hcc = function(a, b, c) {
                    return b.map((d, e) => c.map((f, g) => {
                        f = U_.union(d, f);
                        return W_.of(f, h => {
                            const k = a(h),
                                l = e(h),
                                m = g(h);
                            return () => k() ? l() : m()
                        })
                    }))
                };
                X_ = function(a) {
                    return b => b(a)
                };
                tcc = function({
                    Boa: a,
                    resultType: b,
                    evaluate: c
                }, d) {
                    if (d.length !== a.length) throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                    const e = Jcc(a, (f, g) => d[g].as(f));
                    return W_.of(b, f => {
                        const g = e.map(X_(f));
                        return c(f)(...g)
                    })
                };
                T_ = function({
                    Boa: a,
                    resultType: b,
                    apply: c
                }, d, e) {
                    if (d.length !== a.length) throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                    const f = Jcc(a, (g, h) => d[h].as(g));
                    return W_.of(b, g => {
                        g = f.map(X_(g));
                        return Kcc(e ? .uq ? Lcc(c) : c, g)
                    })
                };
                ycc = function({
                    dIb: a,
                    resultType: b,
                    apply: c
                }, d) {
                    let e;
                    const f = d.map(g => g.fwa(h => h.as(a), h => h.as(e ? ? (e = U_.wY(a)))));
                    return new W_(b, g => {
                        const h = X_(g),
                            k = f.map(l => l.fwa(h, h));
                        return () => {
                            const l = [];
                            k.forEach(m => {
                                m.wBa(n => l.push(n()), n => l.push(...n()))
                            });
                            return c(l)
                        }
                    })
                };
                Bcc = function({
                    keyType: a,
                    valueType: b,
                    resultType: c,
                    apply: d
                }, e) {
                    const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                    return new W_(c, g => {
                        const h = f.map(([k, l]) => [k(g), l(g)]);
                        return () => d(h.map(([k, l]) => [k(), l()]))
                    })
                };
                Dcc = function({
                    pmb: a,
                    resultType: b,
                    apply: c
                }, d) {
                    const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                    if (e.length) throw Error(`too few arguments (missing ${e})`);
                    const f = Mcc(a, (g, h) => d[h].as(g));
                    return new W_(b, g => {
                        const h = id(f, X_(g));
                        return () => {
                            var k = id(h, ccc);
                            return c(k)
                        }
                    })
                };
                V_ = function(a, b) {
                    const c = bcc(b);
                    return new W_(a, () => c)
                };
                Acc = function({
                    itemType: a,
                    Lmb: b,
                    resultType: c,
                    reduce: d
                }, e, f) {
                    const g = f.as([a], b),
                        h = e.as(U_.wY(a));
                    return new W_(c, k => {
                        const l = h(k),
                            m = g(k),
                            n = Lcc(p => {
                                p = p.map(bcc);
                                return [p, p.map(m)]
                            });
                        return () => {
                            const [p, q] = n(l());
                            return d(p, q)
                        }
                    })
                };
                Icc = function(a, b) {
                    const c = a.evaluate;
                    return new W_(a.type, d => c(b(d)))
                };
                qcc = function(a, b, c) {
                    const d = b.map(f => f[0]),
                        e = b.map(f => f[1]);
                    return ecc(e, f => c(pcc(a, new Map(b))).map((g, h) => new Ncc(f, g, k => (...l) => {
                        const m = new Map(d.map((n, p) => [n, l[p]]));
                        return h(new R_(new Map(m), k))
                    })))
                };
                Kcc = function(a, b) {
                    switch (b.length) {
                        case 0:
                            return a;
                        case 1:
                            const [c] = b;
                            return () => a(c());
                        case 2:
                            const [d, e] = b;
                            return () => a(d(), e());
                        default:
                            return () => {
                                var f = b.map(ccc);
                                return a(...f)
                            }
                    }
                };
                Lcc = function(a) {
                    let b;
                    return (...c) => {
                        if (b && b.Pgb.length === c.length && b.Pgb.every((e, f) => Y_.Sg(e, c[f]))) return b.v;
                        const d = a(...c);
                        b = {
                            Pgb: c,
                            v: d
                        };
                        return d
                    }
                };
                Mcc = function(a, b) {
                    return id(a, b)
                };
                Jcc = function(a, b) {
                    return a.map(b)
                };
                Pcc = function(a, b, c) {
                    return new Occ(a, b, c)
                };
                Qcc = function(a, b) {
                    return [...a].map(b)[Symbol.iterator]()
                };
                Scc = function(a, b, c) {
                    return new Rcc(a, b, c)
                };
                Z_ = function(a, b, c, d) {
                    if (d == null) throw a.error(b.IM(c), "not found");
                    return d
                };
                fdc = function(a) {
                    function b(r) {
                        return m[r.kind](r)
                    }
                    const c = a.types,
                        d = a.values;
                    class e {
                        static of (r, t, v, w, y, B) {
                            return new e(r, v, w, Tcc(y, Ucc(t)), Vcc(B, Ucc(t)))
                        }
                        map(r) {
                            return r(this)
                        }
                        validate(r) {
                            return r ? new e(this.dataType, this.Pda, this.mda, Wcc(this.decode, r), Tcc(this.encode, r)) : this
                        }
                        constructor(r, t, v, w, y) {
                            this.dataType = r;
                            this.Pda = t;
                            this.mda = v;
                            this.decode = w;
                            this.encode = y
                        }
                    }
                    const f = e.of({
                            kind: 0
                        }, "string", c.string, r => r, (r, t, v) => v.value, (r, t, v) => ({
                            type: "string",
                            value: v
                        })),
                        g = e.of({
                                kind: 1
                            }, "boolean", c.bd, r =>
                            r, (r, t, v) => v.value, (r, t, v) => ({
                                type: "boolean",
                                value: v
                            })),
                        h = e.of({
                            kind: 2
                        }, "double", c.number, r => r, (r, t, v) => v.value, (r, t, v) => ({
                            type: "double",
                            value: v
                        })).validate((r, t, v) => {
                            if (!Number.isFinite(v)) throw r.error(t, `number is not finite: ${v}`);
                        }),
                        k = e.of({
                            kind: 3
                        }, "int32", c.number, r => r, (r, t, v) => v.value, (r, t, v) => ({
                            type: "int32",
                            value: v
                        })).validate((r, t, v) => {
                            if (!Number.isInteger(v) || v < -2147483648 || v > 2147483647) throw r.error(t, `number is not an int32: ${v}`);
                        }),
                        l = {
                            FontRef: e.of({
                                    kind: 7,
                                    name: "FontRef"
                                }, "ref", c.instance("FontRef"),
                                r => d.instance("FontRef", r), $_("font"), (r, t, v) => ({
                                    type: "ref",
                                    value: v
                                })),
                            MediaRef: e.of({
                                kind: 7,
                                name: "MediaRef"
                            }, "ref", c.instance("MediaRef"), r => d.instance("MediaRef", r), $_("media"), (r, t, v) => ({
                                type: "ref",
                                value: v
                            })),
                            VideoRef: e.of({
                                kind: 7,
                                name: "VideoRef"
                            }, "ref", c.instance("VideoRef"), r => d.instance("VideoRef", r), $_("video"), (r, t, v) => ({
                                type: "ref",
                                value: v
                            })),
                            AudioRef: e.of({
                                kind: 7,
                                name: "AudioRef"
                            }, "ref", c.instance("AudioRef"), r => d.instance("AudioRef", r), $_("audio"), (r, t, v) => ({
                                type: "ref",
                                value: v
                            })),
                            EmbedRef: e.of({
                                kind: 7,
                                name: "EmbedRef"
                            }, "ref", c.instance("EmbedRef"), r => d.instance("EmbedRef", r), $_("embed"), (r, t, v) => ({
                                type: "ref",
                                value: v
                            })),
                            SceneRef: e.of({
                                kind: 7,
                                name: "SceneRef"
                            }, "ref", c.instance("SceneRef"), r => d.instance("SceneRef", r), $_("scene"), (r, t, v) => ({
                                type: "ref",
                                value: v
                            })),
                            BlueprintRef: e.of({
                                kind: 7,
                                name: "BlueprintRef"
                            }, "ref", c.instance("BlueprintRef"), r => d.instance("BlueprintRef", r), $_("blueprint"), (r, t, v) => ({
                                type: "ref",
                                value: v
                            })),
                            Fill: e.of({
                                    kind: 7,
                                    name: "Fill"
                                }, "fill", c.instance("Fill"), r => d.instance("Fill", r),
                                (r, t, v) => v.value, (r, t, v) => ({
                                    type: "fill",
                                    value: v
                                })),
                            Stroke: e.of({
                                kind: 7,
                                name: "Stroke"
                            }, "stroke", c.instance("Stroke"), r => d.instance("Stroke", r), (r, t, v) => v.value, (r, t, v) => ({
                                type: "stroke",
                                value: v
                            })),
                            Richtext2: e.of({
                                kind: 7,
                                name: "Richtext2"
                            }, "text2", c.instance("Richtext2"), r => d.instance("Richtext2", r), (r, t, v) => v.value, (r, t, v) => ({
                                type: "text2",
                                value: v
                            }))
                        },
                        m = {
                            [0]: r => f.validate(Xcc(r.GO)),
                            [1]: () => g,
                            [2]: r => h.validate(Ycc(r.range)),
                            [3]: r => k.validate(Ycc(r.range)),
                            [4]: r => e.of({
                                    kind: 4,
                                    values: r.values
                                }, Zcc, c.primitive,
                                t => t, (t, v, w) => w.value, (t, v, w) => {
                                    a: switch (typeof w) {
                                        case "string":
                                            t = {
                                                type: "string",
                                                value: w
                                            };
                                            break a;
                                        case "boolean":
                                            t = {
                                                type: "boolean",
                                                value: w
                                            };
                                            break a;
                                        case "number":
                                            t = {
                                                type: "int32",
                                                value: w
                                            };
                                            break a;
                                        default:
                                            throw new A(w);
                                    }
                                    return t
                                }).validate($cc(r.values)),
                            [5]: r => {
                                const {
                                    dataType: t,
                                    Pda: v,
                                    mda: w,
                                    decode: y,
                                    encode: B
                                } = b(r.itemType);
                                return e.of({
                                    kind: 5,
                                    itemType: t
                                }, "list", c.array(v), C => d.array(C.map(w)), (C, D, F) => F.value.toArray().map((K, M) => y(C, D.PS(M), K)), (C, D, F) => ({
                                    type: "list",
                                    value: F.map((K, M) => B(C, D.PS(M),
                                        K))
                                }))
                            },
                            [6]: r => {
                                const {
                                    dataType: t,
                                    Pda: v,
                                    mda: w,
                                    decode: y,
                                    encode: B
                                } = b(r.itemType);
                                return e.of({
                                    kind: 6,
                                    itemType: t
                                }, "dict", c.map(c.string, v), C => d.map(Gd(C, w)), (C, D, F) => Gd(F.value.ri(), (K, M) => y(C, D.c8(M), K)), (C, D, F) => ({
                                    type: "dict",
                                    value: Gd(F, (K, M) => B(C, D.c8(M), K))
                                }))
                            },
                            [7]: r => l[r.name],
                            [8]: r => {
                                const {
                                    dataType: t,
                                    decode: v,
                                    encode: w
                                } = b(r.itemType);
                                return e.of({
                                    kind: 8,
                                    itemType: t
                                }, "list", c.undefined, () => {}, (y, B, C) => Scc(C.value, D => w(y, B.PS("*"), D), adc(v, y, B.PS("*"))), (y, B, C) => ({
                                    type: "list",
                                    value: C.map((D, F) => w(y,
                                        B.PS(F), D))
                                }))
                            },
                            [9]: r => {
                                const {
                                    dataType: t,
                                    decode: v,
                                    encode: w
                                } = b(r.itemType);
                                return e.of({
                                    kind: 9,
                                    itemType: t
                                }, "dict", c.undefined, () => {}, (y, B, C) => Pcc(C.value, D => w(y, B.c8("*"), D), adc(v, y, B.PS("*"))), (y, B, C) => ({
                                    type: "dict",
                                    value: Gd(C, (D, F) => w(y, B.c8(F), D))
                                }))
                            },
                            [10]: r => {
                                const {
                                    decode: t,
                                    encode: v
                                } = p.A3a(r.fields);
                                return e.of({
                                    kind: 10,
                                    fields: r.fields
                                }, "dict", c.undefined, () => {}, t, v)
                            },
                            [11]: r => {
                                function t(K, M, O, U) {
                                    O = O.get(U);
                                    if (O == null) throw K.error(M, `unknown case for discriminator value: ${U}`);
                                    return O
                                }
                                const v =
                                    r.vXa;
                                r = r.Gh;
                                var w = Object.keys(v);
                                u(w.length >= 1, "missing discriminator props");
                                u(w.length <= 1, "too many discriminator props: {}", w);
                                const y = w[0];
                                u(r.length >= 1, "discriminated union has no cases");
                                w = new Map;
                                for (const K of r) {
                                    const M = K.fields[y].type.values,
                                        O = b(K);
                                    for (const U of M) u(!w.has(U), "discriminator values are not unique across cases: {}", U), w.set(U, O)
                                }
                                const {
                                    decode: B,
                                    encode: C
                                } = b({
                                    kind: 4,
                                    values: new Set(w.keys())
                                }), D = Gd(w, K => K.decode), F = Gd(w, K => K.encode);
                                return e.of({
                                        kind: 11,
                                        vXa: v,
                                        Gh: r
                                    }, "dict",
                                    c.undefined, () => {}, (K, M, O) => {
                                        var U = Z_(K, M, "k", O.value.get("k"));
                                        O = Z_(K, M, "v", O.value.get("v"));
                                        bdc(K, M, "dict", O);
                                        U = B(K, M, U);
                                        return t(K, M, D, U)(K, M, O)
                                    }, (K, M, O) => {
                                        const U = O[y],
                                            Q = t(K, M, F, U);
                                        return {
                                            type: "dict",
                                            value: new Map([
                                                ["k", C(K, M, U)],
                                                ["v", Q(K, M, O)]
                                            ])
                                        }
                                    })
                            }
                        },
                        n = Symbol("$impl");
                    class p {
                        static A3a(r) {
                            r = id(r, w => q.of(w));
                            const t = id(r, w => w.WOb()),
                                v = Object.entries(r);
                            return {
                                WL: new Map(v.map(([, w]) => w.ROb())),
                                XOb: w => {
                                    const y = w[n];
                                    return new Map(v.map(([, B]) => B.YOb(y)))
                                },
                                decode: (w, y, B) => {
                                    const C = Object.create(null,
                                        t);
                                    Object.defineProperty(C, n, {
                                        enumerable: !1,
                                        writable: !1,
                                        value: new p(w, y, B.value)
                                    });
                                    return C
                                },
                                encode: (w, y, B) => {
                                    const C = v.map(([D, F]) => F.encode(w, y, B[D]));
                                    return {
                                        type: "dict",
                                        value: new Map(C.filter(__c.qb))
                                    }
                                }
                            }
                        }
                        rCa(r, t) {
                            const v = Z_(this.e, this.p, t, this.data.get(t));
                            return a0(this.aZa, r.decode, this.e, this.p.IM(t), v)
                        }
                        oCa(r, t) {
                            const v = this.data.get(t);
                            if (v != null) return a0(this.aZa, r.decode, this.e, this.p.IM(t), v)
                        }
                        mcb(r, t, v) {
                            this.data.set(t, r.encode(this.e, this.p.IM(t), v))
                        }
                        fcb(r, t, v) {
                            v != null ? this.data.set(t,
                                r.encode(this.e, this.p.IM(t), v)) : this.data.delete(t)
                        }
                        constructor(r, t, v) {
                            this.e = r;
                            this.p = t;
                            this.data = v;
                            this.aZa = new WeakMap;
                            this.sTa = new Map;
                            this.gxb = cdc(this.sTa, (w, y) => {
                                const B = this;
                                return {
                                    get ref() {
                                        return B.rCa(y, w)
                                    },
                                    set(C) {
                                        B.mcb(y, w, C)
                                    }
                                }
                            });
                            this.Vwb = cdc(this.sTa, (w, y) => {
                                const B = this;
                                return {
                                    get ref() {
                                        return B.oCa(y, w)
                                    },
                                    set(C) {
                                        B.fcb(y, w, C)
                                    }
                                }
                            })
                        }
                    }
                    class q {
                        static of (r) {
                            return new q(r, b(r.type))
                        }
                        ROb() {
                            const r = this.key,
                                t = this.Lb,
                                v = this.type;
                            switch (t.QF) {
                                case 0:
                                    return [r, v.Pda];
                                case 1:
                                    return [r, c.optional(v.Pda)];
                                default:
                                    throw new A(t.QF);
                            }
                        }
                        YOb(r) {
                            const t = this.key,
                                v = this.Lb,
                                w = this.type;
                            switch (v.QF) {
                                case 0:
                                    return [t, () => w.mda(r.rCa(w, t))];
                                case 1:
                                    return [t, () => {
                                        const y = r.oCa(w, t);
                                        return y != null ? w.mda(y) : void 0
                                    }];
                                default:
                                    throw new A(v.QF);
                            }
                        }
                        WOb() {
                            const r = this.key;
                            var t = this.Lb;
                            const v = this.type;
                            if (mbc(v.dataType) && t.mLa === 1) {
                                switch (t.QF) {
                                    case 0:
                                        t = function() {
                                            return this[n].gxb(r, v)
                                        };
                                        break;
                                    case 1:
                                        t = function() {
                                            return this[n].Vwb(r, v)
                                        };
                                        break;
                                    default:
                                        throw new A(t.QF);
                                }
                                return {
                                    enumerable: !0,
                                    get: t
                                }
                            }
                            let w;
                            switch (t.QF) {
                                case 0:
                                    w = {
                                        enumerable: !0,
                                        get() {
                                            return this[n].rCa(v, r)
                                        },
                                        set(y) {
                                            this[n].mcb(v, r, y)
                                        }
                                    };
                                    break;
                                case 1:
                                    w = {
                                        enumerable: !0,
                                        get() {
                                            return this[n].oCa(v, r)
                                        },
                                        set(y) {
                                            this[n].fcb(v, r, y)
                                        }
                                    };
                                    break;
                                default:
                                    throw new A(t.QF);
                            }
                            switch (t.mLa) {
                                case 0:
                                    w.set = void 0;
                                    break;
                                case 1:
                                    break;
                                default:
                                    throw new A(t.mLa);
                            }
                            return w
                        }
                        encode(r, t, v) {
                            const w = this.key,
                                y = this.Lb,
                                B = this.type;
                            switch (y.QF) {
                                case 0:
                                    return [w, B.encode(r, t.IM(w), Z_(r, t, w, v))];
                                case 1:
                                    return v != null ? [w, B.encode(r, t.IM(w), v)] : void 0;
                                default:
                                    throw new A(y.QF);
                            }
                        }
                        constructor(r, t) {
                            this.Lb =
                                r;
                            this.type = t;
                            r = r.key;
                            u(r > 0 && Number.isInteger(r));
                            if (r <= 52) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" [r - 1];
                            else {
                                for (t = ""; r > 0;) r--, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" [r % 52] + t, r = Math.floor(r / 52);
                                r = t
                            }
                            this.key = r
                        }
                    }
                    return (r, t) => {
                        const v = new ddc(r),
                            w = new edc,
                            {
                                WL: y,
                                XOb: B,
                                decode: C,
                                encode: D
                            } = p.A3a(t);
                        return {
                            WL: y,
                            decode: F => {
                                F = C(v, w, {
                                    type: "dict",
                                    value: F
                                });
                                return {
                                    JJa: B(F),
                                    data: F
                                }
                            },
                            encode: F => D(v, w, F).value
                        }
                    }
                };
                cdc = function(a, b) {
                    return (c, ...d) => {
                        a.has(c) || a.set(c, b(c, ...d));
                        return a.get(c)
                    }
                };
                adc = function(a, b, c) {
                    const d = new WeakMap;
                    return e => a0(d, a, b, c, e)
                };
                a0 = function(a, b, c, d, e) {
                    let f = a.get(e);
                    f == null && (f = b(c, d, e), a.set(e, f));
                    return f
                };
                Tcc = function(a, b) {
                    return (c, d, e) => {
                        b(c, d, e);
                        return a(c, d, e)
                    }
                };
                Wcc = function(a, b) {
                    return (c, d, e) => {
                        e = a(c, d, e);
                        b(c, d, e);
                        return e
                    }
                };
                Vcc = function(a, b) {
                    var c = gdc();
                    return (d, e, f) => {
                        f = a(d, e, f);
                        b(d, e, f);
                        c(d, e, f);
                        return f
                    }
                };
                bdc = function(a, b, c, d) {
                    if (d.type !== c) throw a.error(b, `type error: expected ${c}, was ${d.type}`);
                };
                Ucc = function(a) {
                    return typeof a === "string" ? (b, c, d) => bdc(b, c, a, d) : (b, c, d) => {
                        if (!a.has(d.type)) throw b.error(c, `type error: expected one of ${[...a].join(" or ")}, was ${d.type}`);
                    }
                };
                gdc = function() {
                    return (a, b, c) => {
                        if (typeof c.value !== hdc[c.type]) throw a.error(b, `type error: expected ${c.type}, was ${typeof c.value}`);
                    }
                };
                $cc = function(a) {
                    return (b, c, d) => {
                        if (!a.has(d)) throw b.error(c, `expected one of ${[...a].join(" or ")}, was ${d}`);
                    }
                };
                Ycc = function(a) {
                    if (a) {
                        var b = a.min,
                            c = a.max;
                        u(b == null || c == null || b <= c);
                        return (d, e, f) => {
                            if (b != null && f < b) throw d.error(e, `value below min ${b}: ${f}`);
                            if (c != null && f > c) throw d.error(e, `value above max ${b}: ${f}`);
                        }
                    }
                };
                Xcc = function(a) {
                    if (a) return (b, c, d) => {
                        if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                    }
                };
                $_ = function(a) {
                    return (b, c, d) => {
                        if (d.value.type !== a) throw b.error(c, `expected ${idc[a]} resource type, got ${idc[d.value.type]}`);
                        return { ...d.value,
                            type: a
                        }
                    }
                };
                kdc = function(a) {
                    return new jdc(typeof a === "function" ? b0(a) : a)
                };
                c0 = function(a) {
                    return typeof a === "function"
                };
                ldc = function(a) {
                    return {
                        get: () => a,
                        set: d0
                    }
                };
                mdc = function(...a) {
                    const b = new Set,
                        c = new Set;
                    for (const d of a)
                        for (const e in d) b.has(e) ? c.add(e) : b.add(e);
                    if (c.size) throw Error(`keys not disjoint: ${[...c].map(d=>`'${d}'`).join(", ")}`);
                };
                ndc = function(a, b) {
                    return () => b(id(a, c => c()))
                };
                pdc = function(a) {
                    u(a.length === 1);
                    let b;
                    return c => {
                        if (b != null && odc(b[0], c)) return b[1];
                        const d = a(c);
                        b = [c, d];
                        return d
                    }
                };
                odc = function(a, b) {
                    if (a === b) return !0;
                    if (a == null || b == null) return !1;
                    const c = Object.keys(a),
                        d = Object.keys(b);
                    if (c.length !== d.length) return !1;
                    for (const e of c)
                        if (a[e] !== b[e]) return !1;
                    return !0
                };
                rdc = function(a) {
                    var b = qdc;
                    return {
                        d4: b({
                            ho: a.d4,
                            args: {},
                            qe: {
                                V: {
                                    image: void 0,
                                    video: void 0,
                                    $a: void 0
                                },
                                attributes: {
                                    Dm: void 0,
                                    color: void 0,
                                    Sa: void 0,
                                    locked: void 0,
                                    Og: void 0,
                                    Kl: void 0,
                                    ed: void 0,
                                    flipX: void 0,
                                    flipY: void 0
                                }
                            }
                        }),
                        jua: b({
                            ho: a.jua,
                            args: {},
                            qe: {
                                V: {
                                    fill: void 0
                                },
                                attributes: {
                                    weight: void 0,
                                    color: void 0,
                                    Xc: void 0,
                                    We: void 0
                                }
                            }
                        }),
                        oQ: b({
                            ho: a.oQ,
                            args: {
                                d: void 0
                            },
                            qe: {
                                V: {
                                    fill: void 0,
                                    stroke: void 0
                                },
                                attributes: {
                                    W: void 0
                                }
                            }
                        }),
                        j4: b({
                            ho: a.j4,
                            args: {},
                            qe: {
                                V: {
                                    fill: void 0,
                                    stroke: void 0
                                },
                                attributes: { ...e0,
                                    W: void 0
                                }
                            }
                        }),
                        Sea: b({
                            ho: a.Sea,
                            args: {},
                            qe: {
                                V: {
                                    wb: void 0,
                                    resizeMode: void 0,
                                    slice: void 0,
                                    qb: void 0
                                },
                                attributes: { ...e0,
                                    fj: void 0,
                                    viewBox: void 0
                                }
                            }
                        }),
                        Vea: b({
                            ho: a.Vea,
                            args: {},
                            qe: {
                                V: {
                                    text: void 0
                                },
                                attributes: { ...e0,
                                    $A: void 0,
                                    Ph: void 0,
                                    Ia: void 0,
                                    J: void 0,
                                    N: void 0,
                                    hg: void 0
                                }
                            }
                        }),
                        MPa: b({
                            ho: a.MPa,
                            args: {
                                url: void 0,
                                J: void 0,
                                N: void 0
                            },
                            qe: {
                                V: {},
                                attributes: e0
                            }
                        }),
                        UPa: b({
                            ho: a.UPa,
                            args: {},
                            qe: {
                                V: {
                                    cells: void 0
                                },
                                attributes: { ...e0,
                                    layout: void 0
                                }
                            }
                        }),
                        TPa: b({
                            ho: a.TPa,
                            args: {},
                            qe: {
                                V: {
                                    fill: void 0,
                                    stroke: void 0
                                },
                                attributes: {
                                    W: void 0
                                }
                            }
                        })
                    }
                };
                f0 = function(a, b) {
                    return c => b({ ...a,
                        ...c
                    })
                };
                ydc = function() {
                    return rdc({
                        d4: f0(g0, a => lf(__c.GN, a)),
                        jua: f0(sdc, a => lf(__c.QA, a)),
                        oQ: f0(tdc, a => lf(__c.mR, a)),
                        j4: f0(h0, a => lf(__c.WD, { ...a,
                            id: XD.generate()
                        })),
                        Sea: f0(i0, a => lf(__c.rH, { ...a,
                            qb: [],
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: 1,
                                height: 1
                            },
                            id: XD.generate()
                        })),
                        Vea: f0(udc, a => lf(__c.BR, { ...a,
                            id: XD.generate()
                        })),
                        MPa: f0(vdc, a => lf(__c.CR, { ...a,
                            id: XD.generate()
                        })),
                        UPa: f0(wdc, a => lf(__c.ER, { ...a,
                            id: XD.generate()
                        })),
                        TPa: f0(xdc, a => lf(__c.qH, a))
                    })
                };
                Bdc = function() {
                    return (new zdc({})).add((a, b) => ({
                        FontRef: new a("FontRef", {
                            id: b.string,
                            version: b.number
                        }, c => ({
                            type: "font",
                            id: c.id,
                            version: c.version
                        }))
                    })).add((a, b) => ({
                        MediaRef: new a("MediaRef", {
                            id: b.string,
                            version: b.number
                        }, c => ({
                            type: "media",
                            id: c.id,
                            version: c.version
                        }))
                    })).add((a, b) => ({
                        VideoRef: new a("VideoRef", {
                            id: b.string
                        }, c => ({
                            type: "video",
                            id: c.id,
                            version: 0
                        }))
                    })).add((a, b) => ({
                        AudioRef: new a("AudioRef", {
                            id: b.string
                        }, c => ({
                            type: "audio",
                            id: c.id,
                            version: 0
                        }))
                    })).add((a, b) => ({
                        EmbedRef: new a("EmbedRef", {
                            id: b.string
                        }, c => ({
                            type: "embed",
                            id: c.id,
                            version: 0
                        }))
                    })).add((a, b) => ({
                        SceneRef: new a("SceneRef", {
                            id: b.string
                        }, c => ({
                            type: "scene",
                            id: c.id,
                            version: 0
                        }))
                    })).add((a, b) => ({
                        BlueprintRef: new a("BlueprintRef", {
                            id: b.string,
                            version: b.number
                        }, c => ({
                            type: "blueprint",
                            id: c.id,
                            version: c.version
                        }))
                    })).add((a, b) => ({
                        Fill: new a("Fill", {
                            color: b.string
                        }, c => __c.GN.create({ ...g0,
                            color: c.color
                        }))
                    })).add((a, b) => ({
                        Stroke: new a("Stroke", {
                            color: b.string,
                            weight: b.number,
                            Xc: b.array(b.number),
                            We: b.bd
                        }, c => __c.QA.create({ ...sdc,
                            color: c.color,
                            weight: c.weight,
                            Xc: c.Xc.items,
                            We: c.We
                        }))
                    })).add((a, b) => ({
                        Richtext2: new a("Richtext2", {
                            Vvb: b.array(b.O({
                                mb: b.string,
                                attrs: b.map(b.string, b.string)
                            }))
                        }, c => {
                            c = c.Vvb;
                            const d = __c.jk.Mb();
                            c.items.forEach(e => {
                                const f = e.fields.mb;
                                d.attrs(__c.og(e.fields.attrs.items));
                                d.mb(f)
                            });
                            return __c.jk.create(d.build())
                        })
                    })).add((a, b) => ({
                        Path: new a("Path", {
                            d: b.string,
                            fill: b.instance("Fill"),
                            stroke: b.union(b.instance("Stroke"), b.undefined)
                        }, c => {
                            const d = c.stroke,
                                e = c.fill;
                            c = __c.mR.create({ ...tdc,
                                d: c.d,
                                fill: g0
                            });
                            Object.defineProperties(c, {
                                fill: {
                                    value: e.instance
                                },
                                stroke: {
                                    value: Adc(d)
                                }
                            });
                            return c
                        })
                    })).add((a, b) => ({
                        RectElement: new a("RectElement", {
                            top: b.number,
                            left: b.number,
                            width: b.number,
                            height: b.number,
                            rotation: b.union(b.number, b.undefined),
                            fill: b.instance("Fill"),
                            W: b.union(b.array(b.number), b.undefined),
                            stroke: b.union(b.instance("Stroke"), b.undefined)
                        }, c => {
                            const d = c.stroke,
                                e = __c.WD.create({ ...h0,
                                    id: XD.generate(),
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: c.rotation ? ? h0.rotation,
                                    fill: g0,
                                    W: c.W ? .items ? ? h0.W
                                });
                            Object.defineProperties(e, {
                                fill: {
                                    value: c.fill.instance
                                },
                                stroke: {
                                    value: Adc(d)
                                }
                            });
                            return e
                        })
                    })).add((a, b) => ({
                        ShapeElement: new a("ShapeElement", {
                            top: b.number,
                            left: b.number,
                            width: b.number,
                            height: b.number,
                            rotation: b.union(b.number, b.undefined),
                            Sa: b.union(b.number, b.undefined),
                            viewBox: b.O({
                                top: b.number,
                                left: b.number,
                                width: b.number,
                                height: b.number
                            }),
                            qb: b.array(b.instance("Path"))
                        }, c => {
                            const d = __c.rH.create({ ...i0,
                                id: XD.generate(),
                                top: c.top,
                                left: c.left,
                                width: c.width,
                                height: c.height,
                                rotation: c.rotation ? ? i0.rotation,
                                Sa: c.Sa ? ? i0.Sa,
                                qb: [],
                                viewBox: c.viewBox.fields
                            });
                            Object.defineProperties(d, {
                                qb: {
                                    value: new j0(c.qb.items.map(e => b0(() => e.instance)))
                                }
                            });
                            return d
                        })
                    }))
                };
                Adc = function(a) {
                    return a && {
                        ref: a.instance,
                        set() {
                            throw Error("Replacing of stroke on a model unit is not yet supported");
                        }
                    }
                };
                Jbc = function(a, b, c) {
                    return id(b, d => (...e) => {
                        const {
                            data: f,
                            P: {
                                width: g,
                                height: h
                            }
                        } = d(...e);
                        e = c.D.encode(f.D);
                        const k = c.document.WL.size > 0 ? c.document.encode(f.document) : void 0;
                        return {
                            Gc: { ...__c.SEb,
                                app: {
                                    id: a,
                                    version: 1
                                }
                            },
                            PZb: k,
                            jd: e,
                            sf: {
                                width: g,
                                height: h
                            }
                        }
                    })
                };
                k0 = function() {
                    throw Error("ref not found");
                };
                Ddc = function(a, b) {
                    return class extends Cdc {
                        componentDidCatch(c) {
                            a.error(c);
                            this.setState({
                                hasError: !0
                            })
                        }
                        render() {
                            return this.state.hasError ? RZ(__c.ft, {
                                background: "criticalLow",
                                width: "full",
                                height: "full",
                                padding: "0.25u",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                role: "alert",
                                children: RZ(__c.jx, {
                                    size: "xsmall",
                                    alignment: "center",
                                    children: __c.J("Q6XSow")
                                })
                            }) : RZ(b, { ...this.props
                            })
                        }
                        constructor(...c) {
                            super(...c);
                            this.state = {
                                hasError: !1
                            }
                        }
                    }
                };
                Tbc = function(a, b, c) {
                    const d = c.D,
                        e = (c = c.o6) ? new Edc(c) : void 0;
                    c = e ? f => e.Jc(f.D) : void 0;
                    switch (d.type) {
                        case 0:
                            a = Fdc(a, d, b, c);
                            break;
                        case 1:
                            a = Gdc(a, d, b, c);
                            break;
                        default:
                            throw new A(d);
                    }
                    return {
                        Ytb: a,
                        lFa: e
                    }
                };
                Ubc = function(a, b, c, d) {
                    c = c.email;
                    if (c != null) {
                        var e = d ? g => d.Jc(g.D) : void 0,
                            f = c.type;
                        switch (f) {
                            case 2:
                                return Hdc(a, c, b, e);
                            default:
                                throw new A(f);
                        }
                    }
                };
                Vbc = function(a, b) {
                    return c => {
                        if (b) return c = a.D.decode(c.D.jd).data, {
                            type: b.type,
                            VV: typeof b.VV === "function" ? b.VV(c) : b.VV,
                            name: typeof b.name === "function" ? b.name(c) : b.name
                        }
                    }
                };
                Fdc = function(a, b, c, d) {
                    const e = b.hB,
                        {
                            xva: f,
                            q6: g,
                            Iq: h,
                            kJa: k
                        } = l0(a, c);
                    return typeof e === "object" ? (b = a.n3.types, b = b.wY(b.union(b.instance("RectElement"), b.instance("ShapeElement"))), Idc(a, f, h, b, e, l => new m0(() => l().map(m => m.instance)), k)) : {
                        type: 0,
                        hB: (l, m) => {
                            const {
                                document: n,
                                D: p
                            } = h.decode(f(l)).data;
                            m = g(l, m);
                            l = d ? {
                                document: n,
                                D: p,
                                local: d(l)
                            } : {
                                document: n,
                                D: p,
                                local: void 0
                            };
                            return e(l, m)
                        },
                        bna: n0(k),
                        IN: o0(k),
                        bT: p0(k),
                        L1: q0(k)
                    }
                };
                Gdc = function(a, b, c, d) {
                    const e = b.Component,
                        {
                            xva: f,
                            q6: g,
                            Iq: h,
                            kJa: k
                        } = l0(a, c);
                    return {
                        type: 1,
                        bna: n0(k),
                        IN: o0(k),
                        bT: p0(k),
                        L1: q0(k),
                        Component: Ddc(a.I, r0(({
                            model: l,
                            uf: m,
                            ITa: n,
                            cca: p
                        }) => {
                            n = Jdc(a.Be, n);
                            const q = QZ(() => {
                                const {
                                    document: r,
                                    D: t
                                } = h.decode(f(l)).data;
                                return d ? {
                                    document: r,
                                    D: t,
                                    local: d(l)
                                } : {
                                    document: r,
                                    D: t,
                                    local: void 0
                                }
                            }, [l]);
                            m = g(l, m);
                            return RZ(e, {
                                data: q,
                                Be: n,
                                zi: m,
                                cca: p
                            })
                        }))
                    }
                };
                Hdc = function(a, b, c, d) {
                    const e = b.Component,
                        {
                            xva: f,
                            q6: g,
                            Iq: h,
                            kJa: k
                        } = l0(a, c);
                    return {
                        type: 2,
                        bna: n0(k),
                        IN: o0(k),
                        bT: p0(k),
                        L1: q0(k),
                        Component: Ddc(a.I, r0(({
                            model: l,
                            uf: m,
                            scale: n
                        }) => {
                            const p = Kdc(a.$sb, n),
                                q = QZ(() => {
                                    const {
                                        document: r,
                                        D: t
                                    } = h.decode(f(l)).data;
                                    return d ? {
                                        document: r,
                                        D: t,
                                        local: d(l)
                                    } : {
                                        document: r,
                                        D: t,
                                        local: void 0
                                    }
                                }, [l]);
                            m = g(l, m);
                            return RZ(e, {
                                data: q,
                                Be: p,
                                scale: n,
                                zi: m
                            })
                        }))
                    }
                };
                l0 = function(a, b) {
                    return {
                        xva: c => ({
                            document: Ldc(a, c),
                            D: c.D.jd
                        }),
                        q6: (c, d) => a.hta.q6(c, d),
                        Iq: acc(b),
                        kJa: new Mdc
                    }
                };
                Idc = function(a, b, c, d, e, f, g) {
                    const h = a.nya(a.n3, c, d).compile(e);
                    return {
                        type: 0,
                        hB: k => ({
                            Pa: f(h(b(k)))
                        }),
                        IN: o0(g),
                        bna: n0(g),
                        bT: p0(g),
                        L1: q0(g)
                    }
                };
                Ldc = function(a, b) {
                    return a.Ea.cn.first(c => c.app.id === b.D.Gc.app.id && c.app.version === b.D.Gc.app.version) ? .data ? ? __c.GR.create(new Map)
                };
                Ndc = function(a, b) {
                    return a.iV.get(b.D.Gc.app.id) ? .YDb(b)
                };
                n0 = function(a) {
                    return s0(b => {
                        if ((b = a.get(b.D)) && b.size !== 0) return Array.from(b).map(c => c.ika()).reduce((c, d) => ({
                            width: Math.max(c.width, d.width),
                            height: Math.max(c.height, d.height)
                        }), {
                            width: -Infinity,
                            height: -Infinity
                        })
                    })
                };
                o0 = function(a) {
                    return s0((b, c) => {
                        b = a.get(b);
                        if (!b || b.size === 0) return c;
                        for (const d of b)
                            if (d.IN) return d.IN(c);
                        return c
                    })
                };
                p0 = function(a) {
                    return s0(b => (b = a.get(b.D)) && b.size !== 0 ? Array.from(b).flatMap(c => c.bT()) : [])
                };
                q0 = function(a) {
                    return (b, c) => {
                        a.add(b.D, c);
                        return () => a.remove(b.D, c)
                    }
                };
                Dbc = function(a) {
                    return {
                        WL: a.WL,
                        decode: Odc(a.decode),
                        encode: a.encode
                    }
                };
                Odc = function(a) {
                    const b = new WeakMap;
                    return c => {
                        let d = b.get(c);
                        d || (d = a(c), b.set(c, d));
                        return d
                    }
                };
                Sdc = function(a) {
                    var b = a.ita;
                    const c = a.SSb,
                        d = a.PSb,
                        e = a.xya,
                        f = a.n3,
                        g = a.I,
                        h = a.Ea,
                        k = a.zab,
                        l = a.$9a;
                    a = new Pdc(a.io, h);
                    const m = new Qdc(h, b, f, e, g, a, c, d);
                    b = new Rdc;
                    k && k.xcc(n => Ndc(m, n));
                    l && l(n => Ndc(m, n));
                    return {
                        qea: m,
                        CD: m,
                        hta: a,
                        expr: b
                    }
                };
                Udc = function(a, b) {
                    if (!a) return "Arial, Helvetica, sans-serif";
                    const c = __c.xq(a);
                    a = b.find(d => d.id === c.id && d.version === c.version);
                    switch (a ? .name) {
                        case "Arimo":
                        case "Arial":
                            return "Arial, Helvetica, sans-serif";
                        case "Helvetica":
                        case "Helvetica Now":
                            return "Helvetica, Arial, sans-serif";
                        case "Times New Roman MT":
                        case "Times New Roman":
                            return '"Times New Roman", Times, serif';
                        case "Tahoma":
                            return "Tahoma, Geneva, sans-serif";
                        case "Trebuchet MS":
                            return '"Trebuchet MS", Helvetica, sans-serif';
                        case "Lucida Console":
                            return '"Lucida Console", Monaco, monospace';
                        case "Comic Sans":
                            return '"Comic Sans MS", "Comic Sans", cursive, sans-serif';
                        case "Courier New OS":
                        case "Courier New":
                            return '"Courier New", monospace';
                        case "Georgia Pro":
                        case "Georgia":
                            return "Georgia, serif";
                        case "Verdana Pro":
                        case "Verdana":
                            return "Verdana, Geneva, sans-serif";
                        default:
                            return a ? .name ? `${Tdc(a.name)}, ${"Arial, Helvetica, sans-serif"}` : "Arial, Helvetica, sans-serif"
                    }
                };
                Tdc = function(a) {
                    a = a.replace(/["']/g, "");
                    return /[\s,]/.test(a) ? `"${a}"` : a
                };
                Wdc = function() {
                    ({
                        Ai: a
                    } = {
                        Ai: []
                    });
                    var a;
                    return ({
                        text: b
                    }) => {
                        const c = Vdc(b, a);
                        return RZ("span", {
                            style: { ...c,
                                display: "table-cell",
                                width: "100%",
                                height: "100%",
                                verticalAlign: "middle",
                                boxSizing: "border-box"
                            },
                            children: b.stream.Z
                        })
                    }
                };
                Vdc = function(a, b) {
                    var c = q => [...a.stream.To(q)[q]].values().next().value ? ? __c.mg.Sb[q],
                        d = c("font-family");
                    b = Udc(d, b);
                    d = c("font-size");
                    var e = c("color"),
                        f = c("font-weight"),
                        g = c("font-style"),
                        h = c("decoration"),
                        k = c("strikethrough"),
                        l = c("direction"),
                        m = c("text-align"),
                        n = c("leading");
                    c = c("tracking");
                    const p = [];
                    h === "underline" && p.push("underline");
                    k === "strikethrough" && p.push("line-through");
                    h = p.length > 0 ? p.join(" ") : "none";
                    return {
                        color: e,
                        fontSize: `${d}px`,
                        fontWeight: f,
                        fontFamily: b,
                        fontStyle: g === "italic" ? "italic" : "normal",
                        textDecoration: h,
                        direction: l,
                        textAlign: Xdc(l, m),
                        lineHeight: `${Ydc(n)}em`,
                        letterSpacing: `${Ydc(c)}em`
                    }
                };
                Xdc = function(a, b) {
                    const c = {
                        start: "left",
                        center: "center",
                        end: "right",
                        justify: "justify"
                    };
                    if (a !== "rtl") return c[b];
                    switch (b) {
                        case "start":
                            return "end";
                        case "end":
                            return "start";
                        default:
                            return c[b]
                    }
                };
                Ydc = function(a) {
                    if (!Number.isFinite(a)) throw Error("Invalid milliEms value");
                    return a / 1E3
                };
                Zdc = function(a) {
                    a.wQ && (a.wQ(), a.wQ = null);
                    const b = a.props.tsb;
                    b.forEach(c => {
                        window.addEventListener(c, a.cRa)
                    });
                    a.wQ = () => {
                        b.forEach(c => {
                            window.removeEventListener(c, a.cRa)
                        })
                    }
                };
                cec = function(a) {
                    const b = $Z(function(c) {
                        const [{
                            store: d,
                            La: e
                        }] = a_(() => {
                            const f = new $dc,
                                g = new aec(f);
                            return {
                                store: f,
                                La: g
                            }
                        });
                        return RZ(bec, {
                            naa: e.reset,
                            children: RZ(__c.WYb, {
                                Lzb: e,
                                Mzb: d,
                                l2a: a.Ku.contains(c.url),
                                children: ({
                                    ck: f
                                }) => c.children({
                                    ck: f
                                })
                            })
                        })
                    });
                    return $Z(c => c.Rnb && a.bb ? .status !== 2 ? RZ(b, { ...c
                    }) : c.children({
                        ck: !1
                    }))
                };
                dec = function(a) {
                    return r0(function(b) {
                        return RZ("div", {
                            className: "gcYy_A PYuKbg",
                            children: RZ(__c.Zx, {
                                I7: "both",
                                children: ({
                                    width: c,
                                    height: d
                                }) => RZ(a.Cj, {
                                    fill: b.fill,
                                    Yb: c,
                                    zc: d,
                                    re: void 0,
                                    animation: void 0,
                                    rG: !1,
                                    da: void 0,
                                    ia: void 0
                                })
                            })
                        })
                    })
                };
                fec = function(a) {
                    const b = a.wa,
                        c = a.$ja,
                        d = e => {
                            e = __c.xq(e);
                            b.Qy([e], {
                                Tl: !0
                            });
                            return b.Aba(e)
                        };
                    return r0(function(e) {
                        var f = e.CBa;
                        const g = e.fontWeight,
                            h = e.owa,
                            k = e.Ec,
                            l = e.rmb,
                            m = e.ariaInvalid,
                            n = e.disabled,
                            p = e.id,
                            q = e.name,
                            r = e.inputMode,
                            t = e.onBlur,
                            v = e.onFocus,
                            w = e.onChange,
                            y = e.padding,
                            B = e.placeholder,
                            C = e.L8a,
                            D = e.readOnly,
                            F = e.outline,
                            K = e.paddingInlineEnd,
                            M = e.type,
                            O = e.value,
                            U = e.width;
                        e = {
                            boxSizing: e.boxSizing,
                            color: e.ij,
                            fontSize: e.fontSize,
                            backgroundColor: e.backgroundColor,
                            borderStyle: e.borderStyle,
                            borderRadius: e.borderRadius,
                            borderWidth: e.borderWidth,
                            fontFamily: f && d(f),
                            fontWeight: g && __c.Gq(g),
                            padding: y,
                            paddingInlineEnd: K,
                            outline: F,
                            width: U
                        };
                        [f] = a_(() => c ? .sxb());
                        return RZ("div", {
                            ref: f ? .sj,
                            className: "BHOPhg PYuKbg",
                            children: RZ("input", {
                                "aria-describedby": k,
                                "aria-errormessage": l,
                                "aria-invalid": m,
                                className: eec(["_6Yde8g", C && "sR0SUA"]),
                                disabled: n,
                                id: p,
                                name: q,
                                inputMode: r,
                                onBlur: t,
                                onFocus: v,
                                onChange: w,
                                placeholder: B,
                                readOnly: D,
                                type: M,
                                value: O,
                                style: { ...e,
                                    "--srRiKA": C,
                                    "--oiOG3Q": h ? .default,
                                    "--oGOcXA": h ? .Lg,
                                    "--UBd2ow": h ? .focus
                                },
                                "data-1p-ignore": !0,
                                "data-bwignore": !0,
                                "data-lpignore": !0,
                                "data-protonpass-ignore": !0,
                                "data-form-type": "other"
                            })
                        })
                    })
                };
                gec = function() {
                    return () => RZ(__c.hV, {
                        mediaType: "embed",
                        failed: !1
                    })
                };
                hec = function(a) {
                    return r0(function(b) {
                        return RZ("div", {
                            className: "oUJNhQ PYuKbg",
                            children: RZ(a.Qe, {
                                text: b.text,
                                animation: void 0,
                                Ad: "middle",
                                oa: void 0,
                                ib: void 0,
                                Me: [],
                                writingMode: 1
                            })
                        })
                    })
                };
                iec = function(a) {
                    const b = a.wa,
                        c = a.$ja,
                        d = e => {
                            e = __c.xq(e);
                            b.Qy([e], {
                                Tl: !0
                            });
                            return b.Aba(e)
                        };
                    return r0(function(e) {
                        var f = e.CBa;
                        const g = e.fontSize,
                            h = e.fontWeight,
                            k = e.owa,
                            l = e.Ec,
                            m = e.rmb,
                            n = e.ariaInvalid,
                            p = e.disabled,
                            q = e.id,
                            r = e.name,
                            t = e.onBlur,
                            v = e.onFocus,
                            w = e.onChange,
                            y = e.padding,
                            B = e.paddingInlineEnd,
                            C = e.placeholder,
                            D = e.L8a,
                            F = e.readOnly,
                            K = e.resize,
                            M = e.outline,
                            O = e.rows,
                            U = e.value,
                            Q = e.width,
                            R = e.whiteSpace,
                            W = e.wordBreak;
                        e = {
                            backgroundColor: e.backgroundColor,
                            borderRadius: e.borderRadius,
                            borderStyle: e.borderStyle,
                            borderWidth: e.borderWidth,
                            boxSizing: e.boxSizing,
                            color: e.ij,
                            fontFamily: f && d(f),
                            fontSize: g,
                            fontWeight: h && __c.Gq(h),
                            outline: M,
                            padding: y,
                            paddingInlineEnd: B,
                            resize: K,
                            whiteSpace: R,
                            width: Q,
                            wordBreak: W
                        };
                        [f] = a_(() => c ? .sxb());
                        return RZ("div", {
                            ref: f ? .sj,
                            className: "BHOPhg PYuKbg",
                            children: RZ("textarea", {
                                "aria-describedby": l,
                                "aria-errormessage": m,
                                "aria-invalid": n,
                                className: eec(["_6Yde8g", D && "sR0SUA"]),
                                disabled: p,
                                id: q,
                                name: r,
                                onBlur: t,
                                onFocus: v,
                                onChange: w,
                                placeholder: C,
                                rows: O,
                                readOnly: F,
                                style: { ...e,
                                    "--srRiKA": D,
                                    "--oiOG3Q": k ? .default,
                                    "--oGOcXA": k ? .Lg,
                                    "--UBd2ow": k ? .focus
                                },
                                value: U
                            })
                        })
                    })
                };
                __c.LK.prototype.wq = __c.fa(5, function() {
                    return this.mb("\n")
                });
                __c.sR.prototype.wq = __c.fa(4, function() {
                    this.Mb.wq();
                    return this
                });
                __c.Dc.prototype.PR = __c.fa(3, function(a, b) {
                    this.console.error(...__c.Cc(this, "critical", a, b))
                });
                __c.zI.prototype.PR = __c.fa(2, function(a, b) {
                    this.tw.PR(a, b);
                    __c.xI(this, a, "critical", b)
                });
                var jec = class {
                        constructor(a) {
                            this.ref = a
                        }
                    },
                    kec = class {
                        get ref() {
                            return this.box.get()
                        }
                        constructor(a) {
                            this.box = a
                        }
                    },
                    lec = class {
                        get ref() {
                            return this.box.ref
                        }
                        set() {
                            throw Error("cannot set unmodifiable box");
                        }
                        constructor(a) {
                            this.box = a
                        }
                    },
                    mec = __webpack_require__(322594),
                    RZ = mec.jsx,
                    nec = mec.jsxs;
                var t0 = __webpack_require__(205482),
                    oec = t0.Component,
                    r0 = t0.memo,
                    Cdc = t0.PureComponent,
                    b_ = t0.useCallback,
                    pec = t0.useEffect,
                    QZ = t0.useMemo,
                    a_ = t0.useState;
                var $Z = __webpack_require__(721226).PA;
                var u0 = __webpack_require__(186901),
                    b0 = u0.EW,
                    qec = u0.fm,
                    rec = u0.h5,
                    sec = u0.m3,
                    q_ = u0.mJ,
                    v0 = u0.sH,
                    w0 = u0.XI;
                var s0 = __webpack_require__(536618).iB;
                var tec = __webpack_require__,
                    uec = tec(208463),
                    eec = tec.n_x(uec)();
                var sac = {
                    qOa: "null",
                    kqa: "*"
                };
                var tac = class extends Error {
                        constructor() {
                            super("[internal_error] Comms promise timed out.")
                        }
                    },
                    vec = class {
                        reset(a) {
                            a && (this.timeoutMs = a);
                            this.setTimeout()
                        }
                        resolve(a) {
                            clearTimeout(this.je);
                            this.sKb(a)
                        }
                        reject(a) {
                            clearTimeout(this.je);
                            this.d$a(a)
                        }
                        promise() {
                            return this.p
                        }
                        setTimeout() {
                            clearTimeout(this.je);
                            this.je = setTimeout(() => {
                                uac(this)
                            }, Math.max(this.timeoutMs - 500, 500))
                        }
                        constructor(a) {
                            this.timeoutMs = a;
                            this.p = new Promise((b, c) => {
                                this.sKb = b;
                                this.d$a = c
                            });
                            this.setTimeout()
                        }
                    };
                var wec = () => [...document.getElementsByTagName("iframe")],
                    gbc = class {
                        async CY({
                            V5: a,
                            port: b
                        }) {
                            __c.x(!this.disposed, "IFrameHostConnector disposed");
                            const c = new vec(6E4);
                            xac(this, a, {
                                port: b,
                                promise: c
                            });
                            try {
                                await c.promise()
                            } finally {
                                yac(this, a)
                            }
                        }
                        dispose() {
                            this.disposed || (this.disposed = !0, this.B0a.removeEventListener("message", this.V0), x0.delete(this.aV), this.ER.forEach(a => {
                                a.forEach(b => {
                                    b.promise.reject(Error("IFrameHostConnector disposed"))
                                })
                            }), this.ER.clear(), this.$Ua.clear())
                        }
                        constructor(a, b) {
                            var c = window;
                            this.options = a;
                            this.I = b;
                            this.B0a = c;
                            this.fSb = rac;
                            this.Nwb = wec;
                            this.disposed = !1;
                            this.V0 = async d => {
                                const e = d.source;
                                var f = d.data;
                                if (e) {
                                    var g = f ? .clientId,
                                        h = f ? .sandboxCommsSource ? ? f ? .source;
                                    if (!h ? .startsWith("react-")) {
                                        var k = this.Nwb().find(p => p.contentWindow === e);
                                        if (k) {
                                            var l = k.getAttribute("data-process-id");
                                            if (l && l.startsWith(this.aV)) {
                                                var m = z(k.contentWindow);
                                                d = this.fSb(d, k);
                                                if (d.valid)
                                                    if (f = vac(f, g), f.ok) {
                                                        f = {
                                                            type: "connection_request_not_matched"
                                                        };
                                                        var n = wac(this, {
                                                            VF: l,
                                                            clientId: g
                                                        });
                                                        if (n) f = {
                                                            type: "connection_request_matched",
                                                            port: n.port
                                                        };
                                                        else
                                                            for (const p of this.$Ua)
                                                                if (f = await p({
                                                                        V5: {
                                                                            VF: l,
                                                                            clientId: g
                                                                        },
                                                                        iframe: k
                                                                    }), f.type !== "connection_request_not_matched") break;
                                                        switch (f.type) {
                                                            case "connection_request_matched":
                                                                m.postMessage({
                                                                    source: "parent",
                                                                    sandboxCommsSource: "parent",
                                                                    clientId: g
                                                                }, d.kqa, [f.port]);
                                                                n ? .promise.resolve(void 0);
                                                                break;
                                                            case "connection_request_not_matched":
                                                                this.I.uA("received an init message with no matching connection request and no listener accepted", {
                                                                    extra: new Map([
                                                                        ["processId", l],
                                                                        ["data.source", h],
                                                                        ["data.clientId",
                                                                            g
                                                                        ]
                                                                    ])
                                                                });
                                                                this.options.VWb && k.remove();
                                                                break;
                                                            case "already_connected":
                                                                this.I.uA("received an init message for a processId & clientId that is already connected", {
                                                                    extra: new Map([
                                                                        ["processId", l],
                                                                        ["data.source", h],
                                                                        ["data.clientId", g]
                                                                    ])
                                                                });
                                                                break;
                                                            default:
                                                                throw new A(f);
                                                        }
                                                    } else this.I.uA(f.error, {
                                                        extra: new Map([
                                                            ["data.source", h],
                                                            ["data.clientId", g]
                                                        ])
                                                    });
                                                else d.error && this.I.info(d.error.message, {
                                                    extra: d.error.extra
                                                })
                                            }
                                        }
                                    }
                                }
                            };
                            this.aV = this.options.aV ? ? `iframe_host_${xec++}`;
                            this.ER = new Map;
                            this.$Ua = new Set;
                            __c.x(!x0.has(this.aV),
                                `A IFrameHostConnector has already been created with the prefix ${this.options.aV}`);
                            x0.add(this.aV);
                            this.B0a.addEventListener("message", this.V0)
                        }
                    },
                    xec = 0,
                    x0 = new Set;
                var SZ = class extends Error {
                    constructor(a) {
                        a.code = a.code;
                        const b = a.message.endsWith(".") ? "" : ".";
                        super(`[${a.code}]:  ${a.message}${b}`.trim());
                        this.code = a.code;
                        this.name = "CanvaError";
                        this.qJb = a.message;
                        Object.setPrototypeOf(this, SZ.prototype)
                    }
                };
                var yec = class {
                    constructor(a, b, c) {
                        this.handler = a;
                        this.port = b;
                        this.I = c;
                        this.send = d => {
                            try {
                                return this.port.postMessage(d), (0, __c.Ba)()
                            } catch (e) {
                                return this.I.Tb(e), Ca(e)
                            }
                        };
                        this.gGb = d => {
                            this.I.Tb(d)
                        };
                        this.V0 = ({
                            data: d
                        }) => {
                            if (d) try {
                                this.handler.vJb(d)
                            } catch (e) {
                                this.I.Tb(e)
                            } else this.I.error(new SZ({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                        };
                        this.port.onmessage = this.V0;
                        this.port.onmessageerror = this.gGb
                    }
                };
                var zec = class {
                    request(a, b) {
                        const c = this.A8a,
                            d = new vec(5E3),
                            e = this.hKb(),
                            f = async function() {
                                c.set(e, {
                                    path: a,
                                    jKb: d
                                });
                                try {
                                    const g = await d.promise();
                                    return (0, __c.Ba)(g)
                                } catch (g) {
                                    return g instanceof tac ? Ca(new SZ({
                                        code: "internal_error",
                                        message: `Comms promise timed out (${a}).`
                                    })) : Ca(g)
                                } finally {
                                    c.delete(e)
                                }
                            }();
                        b = this.send(e, a, b);
                        b.ok || (this.I.Tb(b.error, {
                            He: "unable to send request",
                            tags: new Map([
                                ["type", "request"],
                                ["path", a]
                            ])
                        }), d.reject(b.error));
                        return f
                    }
                    constructor(a, b) {
                        this.send = a;
                        this.I = b;
                        this.hKb =
                            __c.tq;
                        this.A8a = new Map
                    }
                };
                var Aec = class {
                    handle(a, b) {
                        if (this.R1.has(a)) throw new SZ({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                        this.R1.set(a, b)
                    }
                    constructor(a, b) {
                        var c = console;
                        this.S$ = a;
                        this.I = b;
                        this.fKb = !0;
                        this.Prb = c;
                        this.R1 = new Map;
                        this.cub = new Set
                    }
                };
                var ZZ = class {
                        constructor(a, b) {
                            this.request = (c, d) => this.client.request(c, d);
                            this.handle = (c, d) => this.R1.handle(c, d);
                            a = new Bec(c => {
                                switch (c.type) {
                                    case "ack":
                                    case "error":
                                    case "response":
                                        var d = this.client;
                                        const e = c.requestId,
                                            f = c.type,
                                            {
                                                path: g,
                                                jKb: h
                                            } = d.A8a.get(e) || {};
                                        if (h) switch (f) {
                                            case "response":
                                                h.resolve(c.payload);
                                                break;
                                            case "ack":
                                                h.reset(2E4);
                                                break;
                                            case "error":
                                                d.I.J4({
                                                    level: "info",
                                                    category: "sandbox_comms",
                                                    message: "Error response received",
                                                    data: {
                                                        path: g ? ? "unknown"
                                                    }
                                                });
                                                h.reject(new SZ({
                                                    code: c.code,
                                                    message: c.message
                                                }));
                                                break;
                                            default:
                                                throw new A(c);
                                        } else f !== "ack" && d.I.error("request has already been handled and resolved or was not sent from this client", {
                                            tags: new Map([
                                                ["type", f],
                                                ["requestId", `${e}`]
                                            ])
                                        });
                                        break;
                                    case "request":
                                        Cac(this.R1, c);
                                        break;
                                    default:
                                        throw new A(c);
                                }
                            }, a, b.Vf("bus"));
                            this.client = new zec(a.mG, b.Vf("client"));
                            this.R1 = new Aec(a, b.Vf("requestHandler"))
                        }
                    },
                    Bec = class {
                        constructor(a, b, c) {
                            this.Dka = a;
                            this.mG = (d, e, f) => this.s5.send({
                                type: "request",
                                requestId: d,
                                path: e,
                                payload: f
                            });
                            this.rGb = d => {
                                switch (d.type) {
                                    case "ack":
                                        this.Dka({
                                            type: "ack",
                                            requestId: d.requestId
                                        });
                                        break;
                                    case "error":
                                        this.Dka({
                                            type: "error",
                                            requestId: d.requestId,
                                            code: d.code,
                                            message: d.message
                                        });
                                        break;
                                    case "response":
                                        this.Dka({
                                            type: "response",
                                            requestId: d.requestId,
                                            payload: d.payload
                                        });
                                        break;
                                    case "request":
                                        this.Dka({
                                            type: "request",
                                            requestId: d.requestId,
                                            path: d.path,
                                            payload: d.payload
                                        });
                                        break;
                                    default:
                                        throw new A(d);
                                }
                            };
                            this.s5 = new yec({
                                vJb: this.rGb
                            }, b, c)
                        }
                    };
                var Dac = H(() => ({}));
                var y0 = H(() => ({
                    G6: X(1),
                    rd: X(2)
                }));
                var UZ = H(() => ({
                    Jj: Y("documentId", 1),
                    Wk: Y("elementId", 2),
                    Fhb: G("websiteContext", 3, y0),
                    jEa: __c.jJ("isPreview", 4)
                }), {
                    ej: 0
                });
                var Eac = H(() => ({}));
                var VZ = H(() => ({}));
                var r_ = H(() => ({
                    textContent: Y("textContent", 1),
                    backgroundColor: Y("backgroundColor", 2)
                }), {
                    ej: 0
                });
                var Bbc = H(() => ({
                    config: (0, __c.nJ)("config", 1, r_)
                }), {
                    ej: 0
                });
                var Cec = H(() => ({}));
                var Gac = H(() => ({
                    KAa: Y("entityId", 1)
                }), {
                    ej: 0
                });
                var Hac = H(() => ({}));
                var Iac = H(() => ({
                    KAa: X("entityId", 1),
                    textContent: X("textContent", 2)
                }), {
                    ej: 0
                });
                var Jac = H(() => ({}));
                var cbc = class {
                    async bca(a) {
                        a = await this.qw.request("SET_EDITING_CONFIG", Bbc.Ha(a));
                        if (!a.ok) throw Error(`Encountered an error while sending ${"SET_EDITING_CONFIG"} request: ${a.error}`);
                        if (a.value == null) throw Error("SET_EDITING_CONFIG: Result cannot be empty");
                        return Cec.Ba(a.value)
                    }
                    constructor(a) {
                        this.qw = a
                    }
                };
                var o_ = H(() => ({
                    type: __c.E("type", "FONT_EDITABLE", 3, "FONT_EDITABLE"),
                    id: X("id", 1),
                    url: X("url", 4)
                }), {
                    ej: 0
                });
                var Lac = H(() => ({
                    config: Y("config", 1),
                    LS: G("fontEditable", 2, o_)
                }), {
                    ej: 0
                });
                var z0 = H(() => ({
                    type: __c.E("type", "RECOLORABLE", 1, "RECOLORABLE"),
                    id: X("id", 1),
                    value: X("value", 2)
                }), {
                    ej: 0
                });
                var Dec = H(() => ({
                    borderRadius: aJ("borderRadius", 1),
                    borderWidth: aJ("borderWidth", 2)
                }), {
                    ej: 0
                });
                var A0 = H(() => ({
                    type: __c.E("type", "BORDERABLE", 2, "BORDERABLE"),
                    id: X("id", 1),
                    value: __c.Oa("value", 2, Dec)
                }), {
                    ej: 0
                });
                var Eec = H(() => ({
                    id: X("id", 1),
                    value: X("value", 2)
                }), {
                    ej: 0
                });
                var B0 = H(() => ({
                    type: __c.E("type", "FONT_SIZEABLE", 5, "FONT_SIZEABLE"),
                    size: aJ("size", 21)
                }), {
                    ej: 0
                });
                var Mac = H(() => ({
                    config: X("config", 1),
                    H1: Pa("recolorables", 4, z0),
                    xnb: Pa("borderables", 5, A0),
                    Lsb: Pa("editPanelValues", 6, Eec),
                    rI: G("fontSizeable", 7, B0),
                    LS: G("fontEditable", 8, o_)
                }), {
                    ej: 0
                });
                var Nac = __c.bb(() => ({
                    type: [1, z0, 2, A0, 3, o_, 5, B0]
                }), () => ({}), {
                    ej: 0
                });
                var Oac = H(() => ({
                    config: X("config", 1)
                }), {
                    ej: 0
                });
                var Pac = H(() => ({
                    id: X(1),
                    value: X(2)
                }));
                var Qac = H(() => ({
                    config: X(1)
                }));
                var Sac = H(() => ({
                    config: X("config", 1)
                }), {
                    ej: 0
                });
                var Tac = H(() => ({
                    config: Y("config", 1),
                    LS: G("fontEditable", 2, o_)
                }), {
                    ej: 0
                });
                var Uac = H(() => ({
                    config: X("config", 1),
                    H1: Pa("recolorables", 4, z0),
                    xnb: Pa("borderables", 5, A0),
                    LS: G("fontEditable", 6, o_),
                    Lsb: Pa("editPanelValues", 7, Eec),
                    rI: G("fontSizeable", 8, B0)
                }), {
                    ej: 0
                });
                var Vac = H(() => ({}));
                var Fec = H(() => ({
                    scrollWidth: aJ("scrollWidth", 1),
                    scrollHeight: aJ("scrollHeight", 2),
                    offsetWidth: aJ("offsetWidth", 3),
                    offsetHeight: aJ("offsetHeight", 4)
                }), {
                    ej: 0
                });
                var Wac = H(() => ({
                    body: __c.Oa("body", 1, Fec)
                }), {
                    ej: 0
                });
                var abc = class {
                    constructor(a) {
                        this.qw = a
                    }
                };
                var Gec = H(() => ({
                    scrollWidth: aJ("scrollWidth", 1),
                    scrollHeight: aJ("scrollHeight", 2),
                    offsetWidth: aJ("offsetWidth", 3),
                    offsetHeight: aJ("offsetHeight", 4)
                }), {
                    ej: 0
                });
                var Yac = H(() => ({
                    body: __c.Oa("body", 1, Gec)
                }), {
                    ej: 0
                });
                var hbc = class {
                    constructor(a, b) {
                        this.Rka = a;
                        this.I = b;
                        this.CY = (c, d, e, f, g, h, k) => {
                            c.addEventListener("load", async () => {
                                $ac(this.Rka, d, this.I).then(({
                                    qw: l
                                }) => {
                                    const {
                                        eWa: m
                                    } = e();
                                    Fac(l, m)
                                }).catch(l => {
                                    this.I.Zv(l)
                                });
                                f != null && bbc(this.Rka, d, this.I).then(({
                                    qw: l,
                                    Tsb: m
                                }) => {
                                    ({
                                        Usb: m
                                    } = f(m));
                                    Xac(l, m)
                                }).catch(l => {
                                    this.I.Zv(l);
                                    k ? .()
                                });
                                g != null && dbc(this.Rka, d, this.I).then(({
                                    qw: l,
                                    Msb: m
                                }) => {
                                    ({
                                        Nsb: m
                                    } = g(m));
                                    Kac(l, m)
                                }).catch(l => {
                                    this.I.Zv(l)
                                });
                                h != null && ebc(this.Rka, d, this.I).then(({
                                    qw: l
                                }) => {
                                    const {
                                        qKb: m
                                    } = h();
                                    Zac(l, m)
                                }).catch(l => {
                                    this.I.Zv(l)
                                })
                            })
                        }
                    }
                };
                var fbc = 0;
                var Hec;
                Hec = Symbol.iterator;
                var m0 = class {
                    static G(a) {
                        L(a, {
                            nn: b0,
                            Mr: b0
                        })
                    }
                    get nn() {
                        return this.vmb().map(a => {
                            let b = this.I0a.get(a);
                            b == null && (b = `${this.Cyb++}`, this.I0a.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get Mr() {
                        const a = new Map;
                        this.nn.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    jl(a) {
                        return z(this.Mr.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.nn.length
                    }
                    count() {
                        return this.nn.length
                    }
                    toArray() {
                        return this.nn.map(a => a.ref)
                    }
                    ri() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get IS() {
                        return this.nn[0] ? .ref
                    }
                    get XT() {
                        return this.nn[this.nn.length - 1] ? .ref
                    }
                    first(a) {
                        return a ?
                            this.nn.find(b => a(b.ref)) ? .ref : this.IS
                    }
                    last(a) {
                        if (!a) return this.XT;
                        const b = this.nn;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.nn;
                        for (a = this.jl(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    previous(a, b) {
                        const c = this.nn;
                        for (a = this.jl(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Ve(a, b) {
                        a = this.Mr.get(a);
                        b = this.Mr.get(b);
                        u(a != null);
                        u(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    Lr(a) {
                        return this.nn[this.jl(a)].id
                    }
                    has(a) {
                        return this.Mr.has(a)
                    }
                    nq(a) {
                        return new __c.JK(this,
                            a)
                    }
                    map(a) {
                        return this.nn.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.nn.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.nn.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.nn.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.nn.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.nn.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.nn.every(b => a(b.ref, b.id))
                    }[Hec]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.vmb = a;
                        this.Cyb = (m0.G(this), 0);
                        this.I0a = new WeakMap
                    }
                };
                var Nbc = __c.c_()(() => ({
                        lYb({
                            JL: a,
                            snb: b,
                            version: c
                        }, d, e) {
                            e = e && {
                                fonts: d_("font", e.fonts),
                                media: d_("media", e.media),
                                zd: d_("video", e.zd),
                                embeds: d_("embed", e.embeds)
                            };
                            return {
                                data: {
                                    D: {
                                        JL: a,
                                        Os: {
                                            domain: "resource",
                                            resource: {
                                                ref: {
                                                    type: "blueprint",
                                                    id: b,
                                                    version: c
                                                },
                                                resources: e
                                            }
                                        },
                                        type: "instance",
                                        qe: void 0
                                    },
                                    document: {}
                                },
                                P: d
                            }
                        }
                    })),
                    Iec = ({
                        resource: a,
                        $D: b
                    }) => {
                        const c = qec(() => {
                            __c.bya(b, a.ref.ref)
                        });
                        return {
                            Pa: new m0(() => {
                                const d = pac(b, a.ref.ref);
                                return d ? (__c.x(d.type === "group", "Expected group element"), d.Pa.filter(__c.qb).map(e =>
                                    __c.fF.create({ ...e,
                                        locked: !0,
                                        Og: !0
                                    }))) : []
                            }),
                            Ag: c
                        }
                    },
                    Jec = __c.PZ()(({
                        oi: {
                            $D: a
                        }
                    }) => ({
                        metadata: {
                            type: "blueprint",
                            name: __c.J("iAtEVw")
                        },
                        D: {
                            type: 0,
                            hB: ({
                                D: b
                            }) => Iec({
                                resource: b.Os.resource,
                                $D: a
                            })
                        },
                        exports: {}
                    }));
                C0 = __c.C0 = class {};
                C0.val = (a, b) => l_(0, 0, () => b)(a);
                C0.UD = (a, b) => l_(1, 0, () => b)(a);
                C0.ref = (a, b) => l_(0, 0, () => b)(a);
                C0.UGb = () => {
                    var a = __c.D0;
                    return l_(1, 1, () => a)(1)
                };
                C0.o7a = (a, b) => l_(0, 1, () => b)(a);
                C0.Cra = l_(0, 0, e_);
                C0.SXa = l_(0, 0, g_);
                C0.kj = l_(0, 0, h_);
                C0.Kx = l_(1, 0, e_);
                C0.nTa = l_(1, 0, jbc);
                C0.RXa = l_(1, 0, g_);
                C0.tma = l_(1, 0, h_);
                C0.hF = l_(1, 0, f_);
                C0.wSa = l_(1, 0, kbc);
                C0.Bz = l_(1, 1, e_);
                C0.Caa = l_(1, 1, jbc);
                C0.Oj = l_(1, 1, g_);
                C0.YGb = l_(1, 1, f_);
                C0.qC = l_(1, 1, h_);
                C0.TGb = l_(1, 1, kbc);
                C0.Im = l_(0, 0, i_);
                C0.listRef = l_(0, 0, j_);
                C0.nXa = l_(0, 0, function(a) {
                    return {
                        kind: 9,
                        itemType: a
                    }
                });
                C0.ppa = l_(0, 0, k_);
                C0.tRb = l_(0, 0, lbc);
                C0.XGb = l_(0, 1, i_);
                C0.aHb = l_(0, 1, k_);
                C0.Awa = l_(1, 0, k_);
                C0.m7a = l_(1, 1, i_);
                C0.WGb = l_(1, 1, j_);
                C0.moa = l_(1, 1, k_);
                C0.lMa = e_;
                C0.Jzb = f_;
                C0.B9 = i_;
                C0.m3a = j_;
                C0.mi = k_;
                C0.s3 = lbc;
                C0.REb = m_({});
                var nbc = Object.freeze({
                    document: Object.freeze({}),
                    D: Object.freeze({})
                });
                var Ebc = __c.n_({
                    D: m_({
                        JL: C0.Cra(1),
                        Os: C0.ppa(2, {
                            domain: C0.kj(1, "resource"),
                            resource: C0.Awa(2, {
                                ref: C0.Im(2, "BlueprintRef"),
                                resources: C0.aHb(3, {
                                    fonts: C0.listRef(1, C0.B9("FontRef")),
                                    media: C0.listRef(2, C0.B9("MediaRef")),
                                    zd: C0.listRef(3, C0.B9("VideoRef")),
                                    embeds: C0.listRef(5, C0.B9("EmbedRef"))
                                })
                            })
                        })
                    })
                });
                var Wbc = {
                    rh: Nbc,
                    Lo: Jec,
                    sh: Ebc
                };
                var Kec = class {
                    constructor() {
                        this.WY = {
                            Eu: !1,
                            AK: !1,
                            KH: !1,
                            cI: !1
                        }
                    }
                };
                var Lec = class {
                    create(a) {
                        switch (a.type) {
                            case "rect":
                                return tbc(this, a);
                            case "shape":
                                return ubc(this, a);
                            default:
                                const b = __c.JR.snapshot(a);
                                return __c.JR.create({ ...b,
                                    locked: !0,
                                    Og: !0,
                                    mh: qbc(this.u3a, a)
                                })
                        }
                    }
                    createPath(a) {
                        return this.e.classes.oQ.create({
                            d: a.d
                        }, {
                            V: {
                                fill: rbc(this, a.fill),
                                stroke: a.stroke
                            },
                            attributes: {
                                W: () => a.W
                            }
                        })
                    }
                    constructor(a, b) {
                        this.e = a;
                        this.qe = b;
                        this.u3a = new Kec
                    }
                };
                var Mec = class {
                    constructor(a) {
                        this.qe = a
                    }
                };
                var Obc = __c.c_()(() => ({
                        pYb({
                            JL: a,
                            snb: b,
                            type: c
                        }, d) {
                            return {
                                data: {
                                    D: {
                                        JL: a,
                                        Os: {
                                            domain: "document",
                                            id: b,
                                            version: 1,
                                            Lb: c === "source" ? {
                                                type: c
                                            } : {
                                                type: c,
                                                qe: new Map
                                            }
                                        }
                                    },
                                    document: {}
                                },
                                P: d
                            }
                        }
                    })),
                    Nec = ({
                        data: a,
                        xH: b,
                        expr: c
                    }) => {
                        b = b.gvb(a.JL);
                        if (!b) throw Error(`Blueprint set ${a.JL} not found`);
                        const d = b.xi.get(a.Os.id);
                        if (!d) throw Error(`Blueprint ${a.Os.id} not found in blueprint set ${a.JL}`);
                        if (a.Os.Lb.type === "source") return {
                            Pa: d.elements
                        };
                        const e = new Lec(c, new Mec(a.Os.Lb.qe));
                        return {
                            Pa: c.list(() => d.elements.map(f =>
                                e.create(f)))
                        }
                    },
                    Oec = __c.PZ()(({
                        VL: {
                            expr: a
                        },
                        oi: {
                            xH: b
                        }
                    }) => ({
                        metadata: {
                            type: void 0,
                            name: void 0
                        },
                        D: {
                            type: 0,
                            hB: ({
                                D: c
                            }) => Nec({
                                data: c,
                                xH: b,
                                expr: a
                            })
                        },
                        exports: {}
                    }));
                var Pec = C0.s3({
                    type: void 0
                }, C0.mi({
                    type: C0.kj(1, "boolean"),
                    value: C0.Caa(2)
                }), C0.mi({
                    type: C0.kj(1, "non-negative-double"),
                    value: C0.Oj(2, {
                        min: 0
                    })
                }), C0.mi({
                    type: C0.kj(1, "double"),
                    value: C0.Oj(2)
                }), C0.mi({
                    type: C0.kj(1, "string"),
                    value: C0.Bz(2)
                }), C0.mi({
                    type: C0.kj(1, "richtext2"),
                    value: C0.Im(2, "Richtext2")
                }), C0.mi({
                    type: C0.kj(1, "image_fill"),
                    value: C0.Im(2, "Fill")
                }), C0.mi({
                    type: C0.kj(1, "video_fill"),
                    value: C0.Im(2, "Fill")
                }));
                var Qec = C0.mi({
                        type: C0.kj(1, "source")
                    }),
                    Rec = C0.mi({
                        type: C0.kj(1, "instance"),
                        qe: C0.nXa(2, Pec)
                    }),
                    Fbc = __c.n_({
                        D: m_({
                            JL: C0.Cra(1),
                            Os: C0.ppa(2, {
                                domain: C0.kj(1, "document"),
                                id: C0.Cra(2),
                                version: C0.hF(3),
                                Lb: C0.tRb(4, {
                                    type: void 0
                                }, Qec, Rec)
                            })
                        })
                    });
                var Xbc = {
                    rh: Obc,
                    Lo: Oec,
                    sh: Fbc
                };
                var Sec = class {
                        static G(a) {
                            L(a, {
                                Wk: v0.ref
                            })
                        }
                        constructor(a) {
                            this.Wk = (Sec.G(this), void 0);
                            this.Wk = a
                        }
                    },
                    Lbc = __c.c_()(() => ({
                        oYb(a, b) {
                            return {
                                data: {
                                    D: {
                                        zxa: {
                                            type: "embed",
                                            id: a,
                                            version: 0
                                        },
                                        xUa: b,
                                        config: void 0,
                                        Kja: void 0
                                    },
                                    document: {}
                                },
                                P: {
                                    width: 1366,
                                    height: 768
                                }
                            }
                        }
                    }));
                var Tec = class {};
                var Uec = class {
                    static G(a) {
                        L(a, {
                            xT: v0.ref,
                            LKa: w0
                        })
                    }
                    subscribe(a) {
                        this.Mj.add(a);
                        return () => {
                            this.Mj.delete(a)
                        }
                    }
                    async ICa(a, b, c, d, e, f) {
                        const g = a.Kja.ref ? .first(),
                            h = this.wa;
                        b = a.config != null && a.config !== "" ? a.config : b.config;
                        this.config.oM ? .Lsa({
                            config: b
                        }, a, c, d, e, f);
                        let k;
                        try {
                            k = h != null && g != null ? await p_(h, g) : void 0
                        } catch (l) {
                            this.I.Tb(l)
                        }
                        return new Tac({
                            config: a.config != null && a.config !== "" ? a.config : void 0,
                            LS: k
                        })
                    }
                    constructor(a, b, c, d) {
                        this.config = a;
                        this.wa = b;
                        this.I = c;
                        this.Lp = d;
                        this.Mj = (Uec.G(this), new Set);
                        this.xT = !1;
                        this.notifyListeners = e => {
                            this.Mj.forEach(f => f(e))
                        };
                        this.Eqa = (e, f) => {
                            this.Nl ? .();
                            this.Nl = void 0;
                            const g = r => YZ(f, new z0(r)),
                                h = this.wa,
                                k = h ? r => zbc(h, f, r) : void 0,
                                l = r => Rac(f, new Pac(r)),
                                m = r => YZ(f, new B0({
                                    size: r
                                })),
                                n = {
                                    ICa: async r => this.ICa(e, r, g, k, m, l),
                                    Txb: r => {
                                        this.config.oM ? .Lsa({ ...r,
                                            rI: r.rI ? .size
                                        }, e, g, k, m, l);
                                        return new Vac
                                    },
                                    LCa: this.Gxb
                                },
                                p = q_(() => e.config, async r => {
                                    const t = await XZ(f, {
                                        config: r,
                                        LS: void 0
                                    });
                                    t.config && t.config !== r && this.config.oM ? .Lsa({ ...t,
                                        rI: t.rI ? .size
                                    }, e, g, k, m, l)
                                }),
                                q = q_(() =>
                                    e.Kja.ref ? .first(), async r => {
                                        const t = e.config,
                                            v = this.wa;
                                        r = await XZ(f, {
                                            config: t,
                                            LS: v != null && r != null ? await p_(v, r) : void 0
                                        });
                                        r.config && r.config !== t && this.config.oM ? .Lsa({ ...r,
                                            rI: r.rI ? .size
                                        }, e, g, k, m, l)
                                    });
                            this.Nl = () => {
                                p();
                                q()
                            };
                            Abc(this, e, f, g, k, m, l);
                            return {
                                Usb: n
                            }
                        };
                        this.AV = e => {
                            const f = this.Lp && new y0({
                                G6: this.Lp.id,
                                rd: this.Lp.rd
                            });
                            return {
                                eWa: {
                                    V_a: () => new UZ({
                                        Jj: e.page ? .container ? .id,
                                        Wk: e.Wk,
                                        Fhb: f
                                    }),
                                    $_a: () => new VZ
                                }
                            }
                        };
                        this.LKa = () => {
                            this.xT = !0
                        };
                        this.DF = () => {
                            this.Nl ? .()
                        };
                        this.Gxb = e => {
                            this.notifyListeners({
                                height: e.body.scrollHeight,
                                width: e.body.scrollWidth
                            })
                        }
                    }
                };
                var Gbc = __c.n_({
                    D: m_({
                        zxa: C0.Im(1, "EmbedRef"),
                        xUa: C0.Cra(35),
                        config: C0.Bz(29),
                        Kja: C0.WGb(6, C0.B9("FontRef"))
                    })
                });
                var Vec = __c.PZ()(({
                        oi: a,
                        VL: b
                    }) => {
                        const c = a.WW,
                            d = a.wa,
                            e = a.Lp,
                            f = b.I,
                            g = new Tec;
                        return {
                            metadata: {
                                type: "codelet",
                                name: __c.J("4kcGvw"),
                                VV: h => h.xUa
                            },
                            o6: () => new Sec(void 0),
                            D: __c.OZ($Z(({
                                data: {
                                    D: h,
                                    local: k
                                },
                                Be: {
                                    Hea: l,
                                    Ojb: m
                                },
                                zi: n,
                                cca: p
                            }) => {
                                rec(() => {
                                    k.Wk = n.Wk
                                });
                                const [q] = a_(() => new Uec(g, d, f, e));
                                pec(() => {
                                    p ? .(q)
                                }, [q, p]);
                                const r = b_(v => q.Eqa(h, v), [h, q]),
                                    t = b_(() => q.AV(n), [q, n]);
                                return nec("div", {
                                    className: "guWTXA",
                                    children: [RZ(l, {
                                            url: h.zxa.id,
                                            children: ({
                                                ck: v
                                            }) => RZ(c, {
                                                url: h.zxa.id,
                                                ck: v,
                                                AV: t,
                                                Eqa: r,
                                                DF: q.DF,
                                                B6a: q.LKa
                                            })
                                        }),
                                        n.uf > 10 && h.config != null && !q.xT && RZ("div", {
                                            className: "djA3nQ",
                                            children: RZ(m, {})
                                        })
                                    ]
                                })
                            })),
                            exports: {
                                config: g
                            }
                        }
                    }),
                    Ybc = {
                        rh: Lbc,
                        Lo: Vec,
                        sh: Gbc
                    };
                var Hbc = __c.n_({
                        D: m_({
                            Dy: C0.Awa(1, m_({
                                Axa: C0.Im(1, "EmbedRef"),
                                config: C0.nXa(2, C0.mi({
                                    textContent: C0.Bz(1),
                                    backgroundColor: C0.Bz(2, /^#[0-9a-f]{6}$/)
                                })),
                                reb: C0.Bz(3)
                            }))
                        })
                    }),
                    Mbc = __c.c_()(() => ({
                        nYb(a, b, c) {
                            return {
                                data: {
                                    D: {
                                        Dy: {
                                            Axa: {
                                                type: "embed",
                                                id: a,
                                                version: 0
                                            },
                                            config: b,
                                            reb: c
                                        }
                                    },
                                    document: {}
                                },
                                P: {
                                    width: 1366,
                                    height: 768
                                }
                            }
                        }
                    })),
                    Wec = class {};
                var Xec = class {
                    subscribe(a) {
                        this.Mj.add(a);
                        return () => {
                            this.Mj.delete(a)
                        }
                    }
                    dispose() {
                        this.Nl ? .();
                        this.Nl = void 0
                    }
                    constructor(a, b) {
                        this.config = a;
                        this.Lp = b;
                        this.Mj = new Set;
                        this.Dqa = (c, d) => {
                            this.dispose();
                            this.Nl = Cbc(c, d);
                            return {
                                Nsb: {
                                    Sxb: e => {
                                        this.config.oM ? .qac(c, e.KAa);
                                        return new Hac
                                    },
                                    Uxb: e => {
                                        this.config.oM ? .xac(c, e.KAa, e.textContent);
                                        return new Jac
                                    }
                                }
                            }
                        };
                        this.Fqa = () => ({
                            qKb: {
                                LCa: c => {
                                    const d = {
                                        height: c.body.scrollHeight,
                                        width: c.body.scrollWidth
                                    };
                                    this.Mj.forEach(e => e(d))
                                }
                            }
                        });
                        this.AV = c => {
                            const d = this.Lp && new y0({
                                G6: this.Lp.id,
                                rd: this.Lp.rd
                            });
                            return {
                                eWa: {
                                    V_a: () => new UZ({
                                        Jj: c.page ? .container ? .id,
                                        Wk: c.Wk,
                                        Fhb: d
                                    }),
                                    $_a: () => new VZ
                                }
                            }
                        };
                        this.DF = () => {
                            this.dispose()
                        }
                    }
                };
                var Yec = __c.PZ()(({
                        oi: a
                    }) => {
                        const b = a.WW,
                            c = a.Lp,
                            d = new Wec;
                        return {
                            metadata: {
                                type: void 0,
                                name: void 0
                            },
                            D: __c.OZ($Z(({
                                data: {
                                    D: e
                                },
                                Be: {
                                    Hea: f
                                },
                                zi: g,
                                cca: h
                            }) => {
                                const [k] = a_(() => new Xec(d, c));
                                pec(() => {
                                    h ? .(k)
                                }, [k, h]);
                                const l = b_(p => k.Dqa(e.Dy.ref, p), [e.Dy.ref, k]),
                                    m = b_(() => k.Fqa(), [k]),
                                    n = b_(() => k.AV(g), [k, g]);
                                return RZ(f, {
                                    url: e.Dy.ref.Axa.id,
                                    children: ({
                                        ck: p
                                    }) => RZ(b, {
                                        url: e.Dy.ref.Axa.id,
                                        ck: p,
                                        AV: n,
                                        Dqa: l,
                                        Fqa: m,
                                        DF: k.DF
                                    })
                                })
                            })),
                            exports: {
                                configuration: d
                            }
                        }
                    }),
                    Zbc = {
                        rh: Mbc,
                        Lo: Yec,
                        sh: Hbc
                    };
                var Qbc = class {
                        Dn(a) {
                            this.loading || (this.loading = (a ? ? Promise.resolve()).then(() => this.load()));
                            return this.loading
                        }
                        constructor(a, b) {
                            this.id = a;
                            this.loadModule = b
                        }
                    },
                    Kbc = class {
                        static G(a) {
                            L(a, {
                                Fia: v0.ref
                            })
                        }
                        constructor() {
                            this.Fia = (Kbc.G(this), void 0)
                        }
                    };
                var G_ = class {
                        static of (a, b, c) {
                            return new G_(a, b, c)
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.Boa = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    $ec = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = Zec;
                            this.pmb = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    E0 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.dIb = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    bfc = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = afc;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    dcc = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a,
                            b, c, d) {
                            this.itemType = a;
                            this.Lmb = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var icc = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                __c.cfc = fcc(4);
                __c.F0 = fcc(6);
                __c.dfc = gcc(5);
                __c.G0 = gcc(0);
                var efc = class {},
                    vcc = class extends efc {
                        fwa(a) {
                            return new vcc(a(this.value))
                        }
                        wBa(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    wcc = class extends efc {
                        fwa(a, b) {
                            return new wcc(b(this.value))
                        }
                        wBa(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var L_ = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    H0 = class extends L_ {
                        ODa(a) {
                            return this === a || a.HLa(b => this.H9(b))
                        }
                        TT() {
                            throw Error(`${this} is not iterable`);
                        }
                        aGa(a) {
                            const b = this.propTypes ? ? (this.propTypes = this.Gma());
                            if (!b) throw Error(`${this} is not navigable"`);
                            if (!b.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return b[a]
                        }
                        Gma() {
                            throw Error(`${this} is not navigable`);
                        }
                        FBa(a) {
                            a(this)
                        }
                        HLa(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes = void 0
                        }
                    },
                    I0 = class extends H0 {
                        H9(a) {
                            return a instanceof
                            I0 && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    J0 = class extends H0 {
                        H9(a) {
                            return a instanceof J0 && this.ho === a.ho
                        }
                        toString() {
                            return this.ho.name
                        }
                        constructor(a) {
                            super();
                            this.ho = a
                        }
                    },
                    K0 = class extends H0 {
                        H9(a) {
                            return a instanceof K0 && this.ho === a.ho && K_(this.arg, a.arg)
                        }
                        toString() {
                            return `${this.ho}<${this.arg}>`
                        }
                        constructor(a, b) {
                            super();
                            this.ho = a;
                            this.arg = b
                        }
                    },
                    ffc = class extends K0 {
                        TT() {
                            return this.arg
                        }
                        Gma() {
                            const a = this.arg;
                            return {
                                size: U_.number,
                                empty: U_.bd,
                                get first() {
                                    return U_.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array",
                                a)
                        }
                    },
                    gfc = class extends K0 {
                        TT() {
                            return this.arg
                        }
                        Gma() {
                            const a = this.arg;
                            return {
                                size: U_.number,
                                empty: U_.bd,
                                get first() {
                                    return U_.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    hfc = class extends H0 {
                        H9(a) {
                            return a instanceof hfc && K_(this.key, a.key) && K_(this.value, a.value)
                        }
                        toString() {
                            return `map<${this.key}, ${this.value}>`
                        }
                        constructor(a, b) {
                            super();
                            this.key = a;
                            this.value = b
                        }
                    },
                    ifc = class extends H0 {
                        H9(a) {
                            return a instanceof ifc ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && K_(this.fields[b],
                                c)) : !1
                        }
                        Gma() {
                            return this.fields
                        }
                        toString() {
                            const a = Object.entries(this.fields);
                            return a.length ? `{ ${a.map(([b,c])=>`${b}: ${c}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a
                        }
                    },
                    L0 = class extends L_ {
                        ODa(a) {
                            return this === a || this.Gh.every(b => b.ODa(a))
                        }
                        TT() {
                            return U_.union(...this.Gh.map(a => a.TT()))
                        }
                        aGa(a) {
                            return U_.union(...this.Gh.map(b => b.aGa(a)))
                        }
                        FBa(a) {
                            this.Gh.forEach(b => b.FBa(a))
                        }
                        HLa(a) {
                            return this.Gh.some(b => b.HLa(a))
                        }
                        toString() {
                            return this.Gh.length ? this.Gh.map(a => a.toString()).join(" | ") :
                                "never"
                        }
                        constructor(a) {
                            super();
                            this.Gh = a;
                            this.kind = "disjunction";
                            u(a.length !== 1)
                        }
                    },
                    M0 = new L0([]),
                    jfc = new I0("string"),
                    kfc = new I0("number"),
                    lfc = new I0("boolean"),
                    mfc = new I0("undefined"),
                    nfc = new L0([jfc, kfc, lfc]),
                    ofc = class {
                        get never() {
                            return M0
                        }
                        get string() {
                            return jfc
                        }
                        get number() {
                            return kfc
                        }
                        get bd() {
                            return lfc
                        }
                        get undefined() {
                            return mfc
                        }
                        get primitive() {
                            return nfc
                        }
                        optional(a) {
                            return U_.union(a, U_.undefined)
                        }
                        array(a) {
                            return new ffc(a)
                        }
                        set(a) {
                            return new gfc(a)
                        }
                        wY(a) {
                            return new L0([new ffc(a), new gfc(a)])
                        }
                        map(a,
                            b) {
                            return new hfc(a, b)
                        }
                        O(a) {
                            return new ifc({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return M0;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) hcc(d).FBa(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return M0;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return K_(d, e) ? e : K_(e, d) ? d : new L0(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => K_(d, e)) || (c.forEach(e => K_(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new L0([...c])
                        }
                        constructor() {
                            this.optional = M_(this.optional);
                            this.array =
                                M_(this.array);
                            this.set = M_(this.set);
                            this.wY = M_(this.wY)
                        }
                    },
                    pfc = class extends ofc {
                        instance(a) {
                            return new J0(a)
                        }
                    },
                    U_ = new pfc,
                    qfc = class extends ofc {
                        instance(a) {
                            return new J0(z(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var rfc, sfc, N0 = Symbol("value"),
                    O0 = class {
                        get props() {
                            return this.tlb ? ? (this.tlb = this.Hva())
                        }
                    },
                    tfc = class {
                        get size() {
                            return this[N0].length
                        }
                        get empty() {
                            return this[N0].length === 0
                        }
                        get first() {
                            return this[N0][0]
                        }
                        constructor(a) {
                            this[N0] = a
                        }
                    };
                rfc = Symbol.iterator;
                var ufc = class extends O0 {
                        Hva() {
                            return new tfc(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[rfc]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,P_).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    vfc = class {
                        get size() {
                            return this[N0].size
                        }
                        get empty() {
                            return this[N0].size === 0
                        }
                        get first() {
                            return this[N0][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[N0] = a
                        }
                    };
                sfc = Symbol.iterator;
                var wfc = class extends O0 {
                        Hva() {
                            return new vfc(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[sfc]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,P_).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    xfc = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${P_(a)}]: ${P_(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    yfc = class extends O0 {
                        Hva() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${P_(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    zfc = class {
                        toString() {
                            return `[instance ${this.ho.name}]`
                        }
                        constructor(a, b) {
                            this.ho = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    Afc = class {
                        array(a) {
                            return new ufc(a)
                        }
                        set(a) {
                            return new wfc(a)
                        }
                        map(a) {
                            return new xfc(new Map(a))
                        }
                        O(a) {
                            return new yfc({ ...a
                            })
                        }
                    },
                    Bfc = class extends Afc {
                        instance(a, b) {
                            return new zfc(a, b)
                        }
                        stringify(a) {
                            return P_(a)
                        }
                        constructor() {
                            super();
                            this.Sg = O_
                        }
                    },
                    Y_ = new Bfc,
                    Cfc = class extends Afc {
                        instance(a, b) {
                            a = z(this.classes[a]);
                            return new zfc(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var ucc = {
                        [0]: H_(U_.number, U_.number, a => -a),
                        [1]: H_(U_.string, U_.number, a => a.length),
                        [2]: H_(U_.bd, U_.bd, a => !a),
                        [3]: I_(U_.number, U_.number, U_.number, (a, b) => a + b),
                        [4]: I_(U_.number, U_.number, U_.number, (a, b) => a - b),
                        [5]: I_(U_.number, U_.number, U_.number, (a, b) => a * b),
                        [6]: I_(U_.number, U_.number, U_.number, (a, b) => a / b),
                        [7]: I_(U_.number, U_.number, U_.number, (a, b) => a % b),
                        [8]: I_(U_.string, U_.string, U_.string, (a, b) => a + b),
                        [9]: I_(U_.number, U_.number, U_.bd, (a, b) => a === b),
                        [10]: I_(U_.number, U_.number, U_.bd, (a, b) => a !== b),
                        [11]: I_(U_.number,
                            U_.number, U_.bd, (a, b) => a < b),
                        [12]: I_(U_.number, U_.number, U_.bd, (a, b) => a <= b),
                        [13]: I_(U_.number, U_.number, U_.bd, (a, b) => a > b),
                        [14]: I_(U_.number, U_.number, U_.bd, (a, b) => a >= b),
                        [15]: I_(U_.bd, U_.bd, U_.bd, (a, b) => a && b),
                        [16]: I_(U_.bd, U_.bd, U_.bd, (a, b) => a || b)
                    },
                    zcc = {
                        [2]: new E0(U_.number, U_.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new E0(U_.number, U_.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new E0(U_.number, U_.number, a => Math.max(...a)),
                        [5]: new E0(U_.number, U_.number, a => Math.min(...a)),
                        [6]: new E0(U_.string, U_.string, a =>
                            a.join(""))
                    },
                    Dfc = a => Y_.array(a),
                    Efc = a => Y_.set(a),
                    xcc = {
                        [0]: a => new E0(a, U_.array(a), Dfc),
                        [1]: a => new E0(a, U_.set(a), Efc)
                    },
                    afc = a => Y_.map(a),
                    lcc = {
                        [0]: (a, b) => new bfc(a, b, U_.map(a, b))
                    },
                    Zec = a => Y_.O(a),
                    Ccc = {
                        [0]: a => new $ec(a, U_.O(a))
                    },
                    Ffc = (a, b) => Y_.array(b.map(c => c())),
                    Gfc = (a, b) => Y_.array(b.flatMap(c => c().items)),
                    Hfc = (a, b) => Y_.array(a.filter((c, d) => b[d]()).map(c => c())),
                    Ifc = (a, b) => b.some(c => c()),
                    Jfc = (a, b) => b.every(c => c()),
                    Kfc = (a, b) => a.find((c, d) => b[d]()) ? .(),
                    ncc = {
                        [0]: (a, b) => b.map(c => J_(a, c, U_.array(c), Ffc)),
                        [1]: (a, b) => b.TT().map(c => J_(a, U_.array(c), U_.array(c), Gfc)),
                        [2]: a => J_(a, U_.bd, U_.array(a), Hfc),
                        [3]: a => J_(a, U_.bd, U_.bd, Ifc),
                        [4]: a => J_(a, U_.bd, U_.bd, Jfc),
                        [5]: a => J_(a, U_.bd, U_.optional(a), Kfc)
                    };
                var R_ = class {
                    define(a, b) {
                        return new R_(new Map([
                            [a, b]
                        ]), this)
                    }
                    resolve(a) {
                        const b = this.defs.get(a);
                        if (b) return b;
                        if (this.parent) return this.parent.resolve(a);
                        throw Error(`undefined symbol: "${a}"`);
                    }
                    constructor(a, b) {
                        this.defs = a;
                        this.parent = b
                    }
                };
                var Mfc = (a, b, c) => {
                        const d = Q_.create(b.WL),
                            e = new Lfc(a);
                        return {
                            compile: f => {
                                const g = rcc(e, d, f).as(c);
                                return h => {
                                    h = new R_(new Map(b.decode(h).JJa));
                                    return g(h)
                                }
                            }
                        }
                    },
                    Q_ = class {
                        static create(a) {
                            return new Q_(new R_(new Map(a)), new R_(new Map))
                        }
                        constructor(a = new R_(new Map), b = new R_(new Map)) {
                            this.vars = a;
                            this.l8 = b
                        }
                    },
                    Lfc = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    W_ = class {
                        static of (a, b) {
                            return new W_(a, b)
                        }
                        as(a) {
                            if (!K_(this.type, a)) throw Error(`type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a =
                                this.evaluate;
                            return new W_(this.type, b => {
                                const c = b0(a(b), {
                                    equals: Y_.Sg
                                });
                                return () => c.get()
                            })
                        }
                        map(a) {
                            return a(this.type, this.evaluate)
                        }
                        constructor(a, b) {
                            this.type = a;
                            this.evaluate = b
                        }
                    },
                    Ncc = class {
                        as(a, b) {
                            const c = this.Boa,
                                d = this.resultType;
                            if (a.length < c.length) throw Error(`Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`);
                            for (let e = 0; e < c.length; e++)
                                if (!K_(a[e], c[e])) throw Error(`Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`);
                            if (!K_(d, b)) throw Error(`return type ${d} is not assignable to expected type: ${b}`);
                            return this.evaluate
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.Boa = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var zdc = class {
                        add(a) {
                            a = a(Nfc, this.types);
                            return new zdc({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        evaluate(a) {
                            const b = this.types;
                            switch (a.kind) {
                                case 0:
                                    switch (a.name) {
                                        case "string":
                                            return b.string;
                                        case "number":
                                            return b.number;
                                        case "boolean":
                                            return b.bd;
                                        case "undefined":
                                            return b.undefined;
                                        default:
                                            throw new A(a);
                                    }
                                case 1:
                                    return b.instance(a.name);
                                case 4:
                                    switch (a.name) {
                                        case "array":
                                            return b.array(this.evaluate(a.uSa));
                                        case "set":
                                            return b.set(this.evaluate(a.uSa));
                                        default:
                                            throw new A(a);
                                    }
                                case 5:
                                    switch (a.name) {
                                        case "map":
                                            const c = this.evaluate(a.uSa);
                                            a = this.evaluate(a.vWb);
                                            if (!K_(c, b.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                            return b.map(c, a);
                                        default:
                                            throw new A(a);
                                    }
                                case 3:
                                    return b.union(...a.args.map(c => this.evaluate(c)));
                                case 2:
                                    return b.O(id(a.args, c => this.evaluate(c)));
                                default:
                                    throw new A(a);
                            }
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new qfc(this.classes);
                            this.values = new Cfc(this.classes)
                        }
                    },
                    Nfc = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.FEb = new G_([U_.O(b)],
                                U_.instance(this), d => Y_.instance(this, c(d.fields)))
                        }
                    };
                var Ofc;
                Ofc = Symbol.iterator;
                var Occ = class {
                    static G(a) {
                        L(a, {
                            B$: b0
                        })
                    }
                    get B$() {
                        const a = new Map;
                        this.base.forEach(b => a.set(this.yg(b), b));
                        return a
                    }
                    gv(a) {
                        return z(this.B$.get(a))
                    }
                    D0(a) {
                        return a != null ? this.yg(a) : void 0
                    }
                    get size() {
                        return this.base.size
                    }
                    get(a) {
                        a = this.base.get(a);
                        return this.D0(a)
                    }
                    has(a) {
                        return this.base.has(a)
                    }
                    forEach(a) {
                        this.base.forEach((b, c) => a(this.yg(b), c))
                    }
                    map(a) {
                        return this.base.map((b, c) => a(this.yg(b), c))
                    }
                    set(a, b) {
                        return this.yg(this.base.set(a, this.jJ(b)))
                    }
                    every(a) {
                        return this.base.every((b, c) => a(this.yg(b),
                            c))
                    }
                    delete(a) {
                        this.base.delete(a)
                    }
                    entries() {
                        return Qcc(this.base.entries(), ([a, b]) => [a, this.yg(b)])
                    }
                    keys() {
                        return this.base.keys()
                    }
                    values() {
                        return Qcc(this.base.values(), this.yg)
                    }[Ofc]() {
                        return this.ri()[Symbol.iterator]()
                    }
                    ri() {
                        return Gd(this.base.ri(), this.yg)
                    }
                    constructor(a, b, c) {
                        this.base = a;
                        this.jJ = b;
                        this.yg = c;
                        Occ.G(this)
                    }
                };
                var Pfc;
                Pfc = Symbol.iterator;
                var Rcc = class {
                    static G(a) {
                        L(a, {
                            B$: b0
                        })
                    }
                    get B$() {
                        const a = new Map;
                        this.base.forEach(b => a.set(this.yg(b), b));
                        return a
                    }
                    gv(a) {
                        return z(this.B$.get(a))
                    }
                    D0(a) {
                        return a != null ? this.yg(a) : void 0
                    }
                    get empty() {
                        return this.base.empty
                    }
                    count() {
                        return this.base.count()
                    }
                    toArray() {
                        return this.base.toArray().map(this.yg)
                    }
                    ri() {
                        return Gd(this.base.ri(), this.yg)
                    }[Pfc]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    first(a) {
                        return this.D0(this.base.first(a && (b => a(this.yg(b)))))
                    }
                    last(a) {
                        return this.D0(this.base.last(a && (b => a(this.yg(b)))))
                    }
                    next(a,
                        b) {
                        return this.D0(this.base.next(this.gv(a), b && (c => b(this.yg(c)))))
                    }
                    previous(a, b) {
                        return this.D0(this.base.previous(this.gv(a), b && (c => b(this.yg(c)))))
                    }
                    Ve(a, b) {
                        return this.base.Ve(this.gv(a), this.gv(b))
                    }
                    Lr(a) {
                        return this.base.Lr(this.gv(a))
                    }
                    has(a) {
                        return this.base.has(this.gv(a))
                    }
                    set(a, b) {
                        return this.yg(this.base.set(a, this.jJ(b)))
                    }
                    replace(a, b) {
                        return this.yg(this.base.replace(this.gv(a), this.jJ(b)))
                    }
                    append(a) {
                        return this.yg(this.base.append(this.jJ(a)))
                    }
                    prepend(a) {
                        return this.yg(this.base.prepend(this.jJ(a)))
                    }
                    MI(a,
                        b) {
                        return this.yg(this.base.MI(a && this.gv(a), this.jJ(b)))
                    }
                    insertBefore(a, b) {
                        return this.yg(this.base.insertBefore(a && this.gv(a), this.jJ(b)))
                    }
                    eF(a, b) {
                        return this.base.eF(a && this.gv(a), b.map(this.jJ)).map(this.yg)
                    }
                    delete(a) {
                        this.base.delete(this.gv(a))
                    }
                    mB(a) {
                        this.base.mB(a && (b => a(this.yg(b))))
                    }
                    moveBefore(a, b) {
                        this.base.moveBefore(a && this.gv(a), this.gv(b))
                    }
                    nq(a) {
                        return new __c.JK(this, a)
                    }
                    map(a) {
                        return this.base.map((b, c) => a(this.yg(b), c))
                    }
                    flatMap(a) {
                        return this.base.flatMap((b, c) => a(this.yg(b), c))
                    }
                    filter(a) {
                        return this.base.filter((b,
                            c) => a(this.yg(b), c)).map(this.yg)
                    }
                    forEach(a) {
                        this.base.forEach((b, c) => a(this.yg(b), c))
                    }
                    reduce(a, b) {
                        return this.base.reduce((c, d) => a(c, this.yg(d)), b)
                    }
                    some(a) {
                        return this.base.some(b => a(this.yg(b)))
                    }
                    every(a) {
                        return this.base.every(b => a(this.yg(b)))
                    }
                    constructor(a, b, c) {
                        this.base = a;
                        this.jJ = b;
                        this.yg = c;
                        Rcc.G(this)
                    }
                };
                var P0 = class {
                        IM(a) {
                            return new Qfc(this, a)
                        }
                        c8(a) {
                            return new Rfc(this, a)
                        }
                        PS(a) {
                            return new Sfc(this, a)
                        }
                        toString() {
                            return this.s ? ? (this.s = this.C$())
                        }
                    },
                    edc = class extends P0 {
                        IM(a) {
                            return new Tfc(a)
                        }
                        c8() {
                            throw Error();
                        }
                        PS() {
                            throw Error();
                        }
                        C$() {
                            return "(global)"
                        }
                    },
                    Tfc = class extends P0 {
                        C$() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    Qfc = class extends P0 {
                        C$() {
                            return `${this.parent}.${this.name}`
                        }
                        constructor(a, b) {
                            super();
                            this.parent = a;
                            this.name = b
                        }
                    },
                    Rfc = class extends P0 {
                        C$() {
                            return `${this.parent}["${this.key}"]`
                        }
                        constructor(a,
                            b) {
                            super();
                            this.parent = a;
                            this.key = b
                        }
                    },
                    Sfc = class extends P0 {
                        C$() {
                            return `${this.parent}[${this.index}]`
                        }
                        constructor(a, b) {
                            super();
                            this.parent = a;
                            this.index = b
                        }
                    },
                    ddc = class {
                        error(a, b) {
                            return Error(`widget '${this.RSb}': schema error on key '${a}': ${b}`)
                        }
                        constructor(a) {
                            this.RSb = a
                        }
                    },
                    hdc = {
                        string: "string",
                        boolean: "boolean",
                        double: "number",
                        int32: "number",
                        list: "object",
                        dict: "object",
                        ref: "object",
                        fill: "object",
                        stroke: "object",
                        text2: "object"
                    },
                    Zcc = new Set(["string", "boolean", "int32"]),
                    idc = {
                        font: "font",
                        media: "media",
                        video: "video",
                        audio: "audio",
                        embed: "embed",
                        scene: "scene",
                        blueprint: "blueprint"
                    };
                var Ufc;
                Ufc = Symbol.iterator;
                var Vfc = class {
                    get size() {
                        return this.cells.size
                    }
                    get(a) {
                        return this.cells.get(a) ? .get()
                    }
                    has(a) {
                        return this.cells.has(a)
                    }
                    forEach(a) {
                        for (const [b, c] of this.cells.entries()) a(c.get(), b)
                    }
                    map(a) {
                        const b = [];
                        for (const [c, d] of this.cells.entries()) b.push(a(d.get(), c));
                        return b
                    }
                    every(a) {
                        for (const [b, c] of this.cells.entries())
                            if (!a(c.get(), b)) return !1;
                        return !0
                    }
                    entries() {
                        return this.ri().entries()
                    }
                    keys() {
                        return this.cells.keys()
                    }* values() {
                        for (const a of this.cells.values()) yield a.get()
                    }
                    ri() {
                        const a = new Map;
                        for (const [b, c] of this.cells.entries()) a.set(b, c.get());
                        return a
                    }[Ufc]() {
                        return this.ri()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.cells = new Map(a)
                    }
                };
                var Wfc;
                Wfc = Symbol.iterator;
                var jdc = class {
                    get kd() {
                        return this.lNb.get()
                    }
                    get size() {
                        return this.kd.size
                    }
                    get(a) {
                        return this.kd.get(a)
                    }
                    has(a) {
                        return this.kd.has(a)
                    }
                    forEach(a) {
                        this.kd.forEach(a)
                    }
                    map(a) {
                        return this.kd.map(a)
                    }
                    every(a) {
                        return this.kd.every(a)
                    }
                    entries() {
                        return this.kd.entries()
                    }
                    keys() {
                        return this.kd.keys()
                    }
                    values() {
                        return this.kd.values()
                    }
                    ri() {
                        return this.kd.ri()
                    }[Wfc]() {
                        return this.kd[Symbol.iterator]()
                    }
                    set(a, b) {
                        return this.kd.set(a, b)
                    }
                    delete(a) {
                        return this.kd.delete(a)
                    }
                    constructor(a) {
                        this.lNb = a
                    }
                };
                var Xfc;
                Xfc = Symbol.iterator;
                var Yfc = class {
                    get size() {
                        return this.kd.size
                    }
                    get(a) {
                        return this.kd.get(a)
                    }
                    has(a) {
                        return this.kd.has(a)
                    }
                    forEach(a) {
                        this.kd.forEach(a)
                    }
                    map(a) {
                        return this.kd.map(a)
                    }
                    every(a) {
                        return this.kd.every(a)
                    }
                    entries() {
                        return this.kd.entries()
                    }
                    keys() {
                        return this.kd.keys()
                    }
                    values() {
                        return this.kd.values()
                    }
                    ri() {
                        return this.kd.ri()
                    }[Xfc]() {
                        return this.kd[Symbol.iterator]()
                    }
                    set() {
                        return this.Xx()
                    }
                    delete() {
                        return this.Xx()
                    }
                    Xx() {
                        throw Error("dict not modifiable");
                    }
                    constructor(a) {
                        this.kd = a
                    }
                };
                var Zfc, $fc = class {
                    get value() {
                        return this.box.get()
                    }
                    constructor(a, b) {
                        this.id = a;
                        this.box = b
                    }
                };
                Zfc = Symbol.iterator;
                var j0 = class {
                    static G(a) {
                        L(a, {
                            Mr: b0,
                            IS: b0,
                            XT: b0
                        })
                    }
                    get Mr() {
                        const a = new Map;
                        this.cells.forEach((b, c) => a.set(b.value, c));
                        return a
                    }
                    jl(a) {
                        return z(this.Mr.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.cells.length
                    }
                    count() {
                        return this.cells.length
                    }
                    toArray() {
                        return this.cells.map(a => a.value)
                    }
                    ri() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get IS() {
                        return this.cells[0] ? .value
                    }
                    get XT() {
                        return this.cells[this.cells.length - 1] ? .value
                    }
                    first(a) {
                        return a ? this.cells.find(b => a(b.value)) ? .value : this.IS
                    }
                    last(a) {
                        if (!a) return this.XT;
                        const b = this.cells;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.value)) return d.value
                        }
                    }
                    next(a, b) {
                        const c = this.cells;
                        for (a = this.jl(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (d && (!b || b(d.value))) return d.value
                        }
                    }
                    previous(a, b) {
                        const c = this.cells;
                        for (a = this.jl(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (d && (!b || b(d.value))) return d.value
                        }
                    }
                    Ve(a, b) {
                        a = this.Mr.get(a);
                        b = this.Mr.get(b);
                        u(a != null);
                        u(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    Lr(a) {
                        return this.cells[this.jl(a)].id
                    }
                    has(a) {
                        return this.Mr.has(a)
                    }
                    nq(a) {
                        return new __c.JK(this,
                            a)
                    }
                    map(a) {
                        return this.cells.map(b => a(b.value, b.id))
                    }
                    flatMap(a) {
                        return this.cells.flatMap(b => a(b.value, b.id))
                    }
                    filter(a) {
                        return this.cells.filter(b => a(b.value, b.id)).map(b => b.value)
                    }
                    forEach(a) {
                        this.cells.forEach(b => a(b.value, b.id))
                    }
                    reduce(a, b) {
                        return this.cells.reduce((c, d) => a(c, d.value, d.id), b)
                    }
                    some(a) {
                        return this.cells.some(b => a(b.value, b.id))
                    }
                    every(a) {
                        return this.cells.every(b => a(b.value, b.id))
                    }[Zfc]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.cells = (j0.G(this), void 0);
                        this.cells =
                            a.map((b, c) => new $fc(String(c), b))
                    }
                };
                var Rdc, qdc, d0, agc, bgc;
                __c.Q0 = class {
                    map(a, b) {
                        const c = this.get,
                            d = this.set;
                        return new __c.Q0(() => a(c()), e => d(b(e)))
                    }
                    project({
                        get: a,
                        set: b
                    }) {
                        const c = this.get,
                            d = this.set;
                        return new __c.Q0(() => a(c()), e => d(b(c(), e)))
                    }
                    constructor(a, b) {
                        this.get = a;
                        this.set = b
                    }
                };
                Rdc = class {
                    read(a) {
                        return c0(a) ? a() : a
                    }
                    computed(a) {
                        const b = b0(a);
                        return () => b.get()
                    }
                    map(a, b) {
                        return c0(a) ? () => b(a()) : b(a)
                    }
                    box(a) {
                        return new lec(c0(a) ? new kec(b0(a)) : new jec(a))
                    }
                    list(a) {
                        const b = this.map(a, c => new __c.Eub(new j0(c.map(d => c0(d) ? b0(d) : ldc(d)))));
                        return c0(b) ? __c.Ig(() => b()) : b
                    }
                    kd(a) {
                        const b = this.map(a, c => {
                            c = new Map(Object.entries(c).map(([d, e]) => {
                                e = c0(e) ? b0(e) : ldc(e);
                                return [d, e]
                            }));
                            return new Yfc(new Vfc(c))
                        });
                        return c0(b) ? kdc(() => b()) : b
                    }
                    constructor() {
                        this.classes = ydc()
                    }
                };
                qdc = a => {
                    const b = a.ho,
                        c = a.qe,
                        d = c.V,
                        e = c.attributes;
                    mdc(a.args, d, e);
                    return {
                        create: function(f, g) {
                            const h = {};
                            var k;
                            const l = g ? .V;
                            g = g ? .attributes;
                            if (l)
                                for (const [m, n] of Object.entries(l)) u(m in d, "unknown override: '{}'", m), c0(n) ? (k || (k = {}))[m] = n : h[m] = agc(n);
                            if (g)
                                for (const [m, n] of Object.entries(g)) u(m in e, "unknown override: '{}'", m), h[m] = n instanceof __c.Q0 ? n : c0(n) ? {
                                    enumerable: !0,
                                    get: n,
                                    set: d0
                                } : bgc(n);
                            if (k) return ndc(k, pdc(m => {
                                const n = b(f);
                                Object.defineProperties(n, { ...h,
                                    ...id(m, agc)
                                });
                                return n
                            }));
                            k = b(f);
                            Object.defineProperties(k, h);
                            return k
                        }
                    }
                };
                d0 = () => {};
                agc = a => ({
                    enumerable: !0,
                    writable: !1,
                    value: a
                });
                bgc = a => ({
                    enumerable: !0,
                    get: () => a,
                    set: d0
                });
                var e0 = {
                    top: void 0,
                    left: void 0,
                    width: void 0,
                    height: void 0,
                    rotation: void 0,
                    locked: void 0,
                    mh: void 0
                };
                var R0 = new Map,
                    S0 = [],
                    g0 = Object.freeze({
                        Dm: void 0,
                        image: void 0,
                        video: void 0,
                        $a: void 0,
                        color: void 0,
                        Sa: 0,
                        locked: !0,
                        Og: !0,
                        Kl: void 0,
                        ed: void 0,
                        K: void 0,
                        transition: void 0,
                        flipX: !1,
                        flipY: !1
                    }),
                    tdc = Object.freeze({
                        fill: g0,
                        stroke: void 0,
                        W: 0
                    }),
                    sdc = Object.freeze({
                        weight: 0,
                        color: "#000000",
                        fill: g0,
                        Xc: S0,
                        We: !1
                    }),
                    T0 = Object.freeze({
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        rotation: 0,
                        Sa: 0,
                        Fi: void 0,
                        fa: void 0,
                        K: void 0,
                        transition: void 0,
                        oa: S0,
                        dc: S0,
                        animation: void 0,
                        Sf: void 0,
                        link: void 0,
                        locked: !0,
                        mh: void 0,
                        Og: !0,
                        Kl: void 0,
                        Xa: void 0,
                        mu: void 0,
                        If: S0,
                        WF: R0,
                        lG: R0,
                        anchor: void 0,
                        oh: R0
                    }),
                    h0 = Object.freeze({ ...T0,
                        type: "rect",
                        fill: g0,
                        stroke: void 0,
                        W: S0
                    }),
                    i0 = Object.freeze({ ...T0,
                        type: "shape",
                        slice: void 0,
                        fj: void 0,
                        wb: S0,
                        resizeMode: void 0
                    }),
                    udc = Object.freeze({ ...T0,
                        type: "text",
                        text: Object.freeze({
                            stream: __c.Vg.mE("\n"),
                            Ub: R0
                        }),
                        Ia: Object.freeze({
                            Ya: []
                        }),
                        Xe: void 0,
                        placeholder: void 0,
                        hg: 1,
                        writingMode: void 0,
                        J: void 0,
                        N: void 0,
                        Yo: !1,
                        $A: void 0,
                        Ph: void 0,
                        ed: void 0
                    }),
                    vdc = Object.freeze({ ...T0,
                        type: "embed"
                    }),
                    wdc = Object.freeze({ ...T0,
                        type: "grid",
                        cells: R0,
                        layout: Object.freeze({
                            template: S0,
                            bB: S0,
                            sl: S0,
                            zu: 0,
                            yv: 0
                        })
                    }),
                    xdc = Object.freeze({
                        fill: g0,
                        stroke: void 0,
                        W: S0
                    });
                var Pdc = class {
                        q6(a, b) {
                            const c = __c.gh(a);
                            __c.x(c.type !== "body", "Unexpected body context.");
                            switch (c.type) {
                                case "fixed-page":
                                    return {
                                        page: this.Ij.q_a(c),
                                        P: new U0(a),
                                        Wk: a.D.id,
                                        uf: b
                                    };
                                case "concatenated-fixed-page":
                                    return {
                                        page: this.Ij.g_a(c),
                                        P: new U0(a),
                                        Wk: a.D.id,
                                        uf: b
                                    };
                                case "responsive-page":
                                    return {
                                        page: this.Ij.G_a(c),
                                        P: new U0(a),
                                        Wk: a.D.id,
                                        uf: b
                                    };
                                case "controlled-page":
                                    throw new __c.Qr;
                                default:
                                    throw new A(c);
                            }
                        }
                        constructor(a, b) {
                            this.Npa = a;
                            u(b.Rf === "fixed", "Responsive documents are not supported in widget rendering.");
                            this.Ea = __c.mh(b);
                            this.Ij = new cgc(this.Npa, this.Ea)
                        }
                    },
                    U0 = class {
                        get width() {
                            switch (this.container.type) {
                                case "controlled-item":
                                    return this.container.D.sf ? .width || 0;
                                case "controlled-page":
                                    throw new __c.Qr;
                                case "group-element":
                                case "controlled-element":
                                    return this.container.D.J;
                                default:
                                    throw new A(this.container);
                            }
                        }
                        get height() {
                            switch (this.container.type) {
                                case "controlled-item":
                                    return this.container.D.sf ? .height || 0;
                                case "controlled-page":
                                    throw new __c.Qr;
                                case "group-element":
                                case "controlled-element":
                                    return this.container.D.N;
                                default:
                                    throw new A(this.container);
                            }
                        }
                        constructor(a) {
                            this.container = a
                        }
                    },
                    V0 = class {
                        getIndex() {
                            return this.EI(this.page)
                        }
                        get id() {
                            return this.page.D.id
                        }
                        get title() {
                            return this.page.D.title
                        }
                        get anchor() {
                            return this.page.D.anchor
                        }
                        get V1a() {
                            return this.page.D.ug
                        }
                        constructor(a, b) {
                            this.page = a;
                            this.EI = b
                        }
                    },
                    dgc = class extends V0 {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "fixed"
                        }
                    },
                    egc = class extends V0 {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "concatenated-fixed"
                        }
                    },
                    fgc = class extends V0 {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "controlled"
                        }
                    },
                    ggc = class extends V0 {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "responsive"
                        }
                    },
                    hgc = class {
                        get id() {
                            return this.Npa ? .id
                        }
                        get extension() {
                            return this.Npa ? .extension
                        }
                        get language() {
                            return this.Ea.D.language
                        }
                        constructor(a, b) {
                            this.Npa = a;
                            this.Ea = b
                        }
                    },
                    cgc = class extends hgc {
                        static G(a) {
                            L(a, {
                                ba: b0({
                                    equals: sec.shallow
                                }),
                                J5a: b0({
                                    equals: sec.shallow
                                })
                            })
                        }
                        get ba() {
                            return this.Ea.D.ba.map(a =>
                                this.Ywb(this.Ea.se(a)))
                        }
                        get J5a() {
                            return this.Ea.D.ba.toArray()
                        }
                        constructor(a, b) {
                            super(a, b);
                            this.io = a;
                            this.Ea = b;
                            this.type = (cgc.G(this), "fixed");
                            this.q_a = s0(c => new dgc(c, this.EI, this));
                            this.g_a = s0(c => new egc(c, this.EI, this));
                            this.ywb = s0(c => new fgc(c, this.EI, this));
                            this.G_a = s0(c => new ggc(c, this.EI, this));
                            this.Ywb = s0(c => {
                                switch (c.type) {
                                    case "fixed-page":
                                        return this.q_a(c);
                                    case "concatenated-fixed-page":
                                        return this.g_a(c);
                                    case "controlled-page":
                                        return this.ywb(c);
                                    case "responsive-page":
                                        return this.G_a(c);
                                    default:
                                        throw new A(c);
                                }
                            });
                            this.EI = s0(c => {
                                c = this.Ea.D.ba.has(c.D) ? c.D : void 0;
                                return c != null ? this.J5a.indexOf(c) : -1
                            })
                        }
                    };
                var igc = class {
                    constructor(a) {
                        this.QJa = a;
                        this.KVa = new Map
                    }
                };
                var jgc = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    ri() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        k0()
                    },
                    previous() {
                        k0()
                    },
                    Ve() {
                        k0()
                    },
                    Lr() {
                        k0()
                    },
                    has() {
                        return !1
                    },
                    nq() {
                        return this
                    },
                    map() {
                        return []
                    },
                    flatMap() {
                        return []
                    },
                    filter() {
                        return []
                    },
                    forEach() {},
                    reduce(a, b) {
                        return b
                    },
                    some() {
                        return !1
                    },
                    every() {
                        return !0
                    },
                    [Symbol.iterator]() {
                        return [][Symbol.iterator]()
                    }
                });
                var Mdc = class {
                    add(a, b) {
                        let c = this.store.get(a);
                        c || (c = v0.set(void 0, {
                            deep: !1
                        }), this.store.set(a, c));
                        c.add(b)
                    }
                    get(a) {
                        return this.store.get(a)
                    }
                    remove(a, b) {
                        const c = this.store.get(a);
                        c && (c.delete(b), c.size === 0 && this.store.delete(a))
                    }
                    constructor() {
                        this.store = new __c.CB
                    }
                };
                var Edc = class {
                    Jc(a) {
                        let b = this.store.get(a);
                        b == null && (b = this.Dqb(), this.store.set(a, b));
                        return b
                    }
                    constructor(a) {
                        this.Dqb = a;
                        this.store = new WeakMap
                    }
                };
                var Rbc = new Set,
                    Sbc = {
                        hB: () => ({
                            Pa: jgc
                        })
                    },
                    Qdc = class {
                        static G(a) {
                            L(a, {
                                iV: v0.shallow
                            })
                        }
                        xja(a) {
                            return this.iV.get(a) ? .D
                        }
                        constructor(a, b, c, d, e, f, g, h) {
                            this.Ea = a;
                            this.QJa = b;
                            this.n3 = c;
                            this.nya = d;
                            this.I = e;
                            this.hta = f;
                            this.Be = g;
                            this.$sb = h;
                            this.iV = (Qdc.G(this), new Map)
                        }
                    },
                    Jdc = (a, b) => ({ ...a,
                        Hea: c => RZ(a.Hea, { ...c,
                            Rnb: b || !1
                        })
                    }),
                    Kdc = (a, b) => ({ ...a,
                        $j: c => RZ(a.$j, { ...c,
                            scale: b || 1
                        })
                    });
                var kgc = class {
                    static G(a) {
                        L(a, {
                            Pba: v0.shallow
                        })
                    }
                    constructor(a) {
                        this.GVa = a;
                        this.Pba = (kgc.G(this), new Map)
                    }
                };
                var lgc = class extends oec {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            rJb: c,
                            Nna: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.jlb;
                            return f
                        }, {}));
                        return RZ(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.Nna && Zdc(this)
                    }
                    componentDidUpdate() {
                        this.props.Nna && Zdc(this)
                    }
                    componentWillUnmount() {
                        this.wQ && (this.wQ(), this.wQ = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.Rua = this.wQ = null;
                        this.jlb = b => {
                            this.Rua = b.nativeEvent
                        };
                        this.cRa = b => {
                            const c = this.props.Nna,
                                d = this.Rua === b;
                            c && !d &&
                                c(b);
                            this.Rua = null
                        }
                    }
                };
                var bec = a => RZ(lgc, {
                    rJb: ["onMouseDown", "onTouchStart"],
                    tsb: ["mousedown", "touchstart"],
                    Nna: a.naa,
                    children: a.children
                });
                var $dc = class {
                        static G(a) {
                            L(a, {
                                ck: v0.ref
                            })
                        }
                        constructor() {
                            this.ck = ($dc.G(this), !0)
                        }
                    },
                    aec = class {
                        static G(a) {
                            L(a, {
                                onDoubleClick: w0.bound,
                                onTouchEnd: w0.bound,
                                reset: w0.bound
                            })
                        }
                        onDoubleClick() {
                            this.store.ck = !1
                        }
                        onTouchEnd(a) {
                            a.touches.length > 0 || (this.ZV ? (window.clearTimeout(this.ZV), this.ZV = void 0, this.store.ck = !1) : this.ZV = window.setTimeout(() => this.ZV = void 0, 300))
                        }
                        reset() {
                            this.store.ck = !0
                        }
                        lY() {
                            this.ZV && window.clearTimeout(this.ZV)
                        }
                        constructor(a) {
                            this.store = a;
                            this.ZV = (aec.G(this), void 0)
                        }
                    };
                __c.J1a = {
                    Gzb: function({
                        document: a,
                        Ij: b,
                        Lp: c,
                        Uz: d,
                        $D: e,
                        xH: f,
                        dg: g,
                        Iia: h,
                        wa: k,
                        zg: l,
                        Qe: m,
                        gg: n,
                        uf: p,
                        USb: q,
                        zab: r,
                        $9a: t,
                        $ja: v
                    }) {
                        const w = g.fla,
                            y = g.wh;
                        var B = g.I;
                        const C = g.eg,
                            D = g.la,
                            F = g.iYa,
                            K = g.bb;
                        var M = h.Ku;
                        const {
                            lAa: O = !1,
                            xAa: U = !1,
                            sAa: Q = !1
                        } = q ? ? {}, {
                            Nn: R,
                            nya: W
                        } = {
                            Nn: Bdc(),
                            nya: Mfc
                        };
                        q = new kgc(fdc(R));
                        const {
                            YOa: ca,
                            ita: ba,
                            xya: ea,
                            n3: ka
                        } = {
                            YOa: q,
                            ita: q,
                            xya: W,
                            n3: R
                        };
                        q = Ibc({
                            YOa: ca,
                            lAa: O,
                            xAa: U,
                            sAa: Q
                        });
                        var na = new igc(ba);
                        const {
                            XOa: ja,
                            Ghb: ya
                        } = {
                            XOa: na,
                            Ghb: na
                        };
                        na = Pbc({
                            ZOa: q,
                            XOa: ja
                        });
                        B = B.Vf("widget");
                        M = cec({
                            Ku: M,
                            bb: K
                        });
                        const aa =
                            gec();
                        m = hec({
                            Qe: m
                        });
                        n = dec({
                            Cj: n
                        });
                        const la = fec({
                            wa: k,
                            $ja: v
                        });
                        v = iec({
                            wa: k,
                            $ja: v
                        });
                        const {
                            qea: ma,
                            CD: Da,
                            hta: Ma,
                            expr: Ha
                        } = Sdc({
                            I: B,
                            ita: ba,
                            SSb: {
                                Hea: M,
                                Ojb: aa,
                                $j: m,
                                Zm: n,
                                Kea: la,
                                lua: v
                            },
                            PSb: {
                                $j: Wdc()
                            },
                            xya: ea,
                            n3: ka,
                            io: b,
                            Ea: a,
                            zab: r,
                            $9a: t
                        });
                        a = ibc({
                            uf: p,
                            Ku: h.Ku,
                            Cw: h.Cw,
                            bb: g.bb,
                            I: g.I.Vf("codelet")
                        });
                        const {
                            iV: ua,
                            KZa: ib
                        } = $bc({
                            ZOa: q,
                            qea: ma,
                            eg: C,
                            VL: {
                                I: B,
                                la: D,
                                zg: p === 30 ? l : void 0,
                                bb: K,
                                expr: Ha
                            },
                            oi: {
                                Uz: d,
                                xH: f,
                                $D: e,
                                iYa: F,
                                wa: k,
                                Lp: c,
                                WW: a,
                                fla: w,
                                wh: y
                            }
                        });
                        return {
                            ita: ba,
                            CD: Da,
                            Kgc: ua,
                            Igc: na,
                            Ghb: ya,
                            hta: Ma,
                            KZa: ib
                        }
                    }
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        },

        /***/
        196751:
            (_, __, r) => r(258551),

        /***/
        149342:
            (_, __, r) => r(258551),

        /***/
        761582:
            (_, __, r) => r(258551),

        /***/
        751088:
            (_, __, r) => r(258551)

    }
])
//# sourceMappingURL=sourcemaps/709f4c4c5f46e76f.js.map
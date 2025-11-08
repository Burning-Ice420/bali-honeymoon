(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [43432], {

        /***/
        290120: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(258551);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var C0 = __c.C0;
                var L = __c.L;
                var SJc = async function(a, b) {
                        return a.lta(b, async () => {
                            if (a.PXa == null) throw Error("Scene document resources are not supported");
                            const c = await a.PXa.Er({
                                    id: b,
                                    version: 1
                                }, void 0),
                                d = {
                                    id: c.id,
                                    files: {
                                        M_a: c.content.url,
                                        zIa: c.Tc ? .url
                                    }
                                };
                            (0, __c.Yb)(() => {
                                a.scenes.set(d.id, d)
                            });
                            return d
                        })
                    },
                    VJc = function(a, b) {
                        if (a.Dh.Ehb && b instanceof TJc) return new UJc(a.Dh.Ehb, b);
                        throw Error("GltfResource needs GltfResource");
                    },
                    XJc = function(a) {
                        return WJc ? new TJc(a) : new TJc(a, {
                            environment_sdr: "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_sdr.png",
                            environment_gain: "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_gain.png"
                        })
                    },
                    YJc = function(a, b, c) {
                        let d = b - 1,
                            e = 0,
                            f = c - 1,
                            g = 0;
                        for (let h = 0; h < c; h++)
                            for (let k = 0; k < b; k++) a[3 + (h * b + k) * 4] !== 0 && (d = Math.min(d, k), e = Math.max(e, k), f = Math.min(f, h), g = Math.max(g, h));
                        a = g - f + 1;
                        return {
                            left: d,
                            top: c - (f + a),
                            width: e - d + 1,
                            height: a
                        }
                    },
                    ZJc = function(a, b, c) {
                        const d = a.store.RE ? a.Dh.canvas : a.store.DE;
                        if (d) {
                            var e = c.getContext("2d");
                            if (!e) throw Error("Unable to create 2d context");
                            a.store.RE && a.render(!1);
                            c.width = b;
                            c.height = b;
                            e.drawImage(d, 0, 0, b, b)
                        }
                    },
                    $Jc = function(a, b) {
                        a.store.container = b;
                        b.contains(a.Dh.canvas) ||
                            b.appendChild(a.Dh.canvas)
                    },
                    aKc = function(a) {
                        if (a.store.Le) {
                            const b = requestAnimationFrame(() => aKc(a));
                            a.store.Hfa = b;
                            a.render(a.store.qYa)
                        }
                    },
                    dKc = function({
                        tka: a,
                        Dh: b
                    }) {
                        const c = new bKc;
                        return new cKc(c, a, b)
                    },
                    eKc = function(a) {
                        var b = __c.z(a.store.container, "Missing container"),
                            c = a.og.PZ;
                        b.style.width = 2E3 * a.og.da + "px";
                        b.style.height = 2E3 * a.og.da + "px";
                        b.style.left = `-${c.left*a.og.da}px`;
                        b.style.top = `-${c.top*a.og.da}px`;
                        b.style.position = "absolute";
                        c = new Image; {
                            var d = a.og;
                            b = a.t_(b);
                            const e = d.store.RE ? d.Dh.canvas :
                                d.store.DE;
                            e ? (d.store.RE && (N7(d.Dh, b, b), d.render(!1)), d = e.toDataURL("image/png")) : d = ""
                        }
                        c.src = d;
                        a.store.dN = c
                    },
                    gKc = function(a) {
                        var b = __c.z(a.store.container, "Missing container");
                        b.style.position = "init";
                        b.style.left = "0";
                        b.style.top = "0";
                        b.style.width = "100%";
                        b.style.height = "100%";
                        const c = document.createElement("canvas");
                        var d = a.og;
                        b = a.t_(b);
                        if (d.store.isInitialized) {
                            var e = c.getContext("2d");
                            if (!e) throw Error("Unable to create 2d context");
                            var f = b / 2E3,
                                g = d.n8();
                            c.width = f * g.width;
                            c.height = f * g.height;
                            const h =
                                fKc(d.Dh);
                            N7(d.Dh, b, b);
                            d.render(!1);
                            e.drawImage(d.Dh.canvas, g.left * f, g.top * f, g.width * f, g.height * f, 0, 0, g.width * f, g.height * f);
                            N7(d.Dh, h.width, h.height)
                        } else if (d.store.DE) {
                            e = c.getContext("2d");
                            if (!e) throw Error("Unable to create 2d context");
                            f = d.store.gga;
                            g = d.store.CS / 2E3;
                            b /= 2E3;
                            c.width = Math.round(b * f.width);
                            c.height = Math.round(b * f.height);
                            e.drawImage(d.store.DE, f.left * g, f.top * g, f.width * g, f.height * g, 0, 0, c.width, c.height)
                        }
                        d = new Image;
                        d.src = c.toDataURL("image/png");
                        a.store.dN = d;
                        c.width = 1;
                        c.height = 1
                    },
                    hKc = function(a) {
                        const b = a.Zm;
                        a = __c.GN.create({ ...__c.ZD,
                            image: { ...__c.CEb,
                                media: { ...__c.TEb,
                                    id: a.qJ,
                                    version: 1
                                },
                                Ab: void 0
                            }
                        });
                        return O7(b, {
                            fill: a
                        })
                    },
                    kKc = function({
                        fjb: a,
                        $jb: b,
                        Vjb: c,
                        Mha: d,
                        ozb: e,
                        Zm: f,
                        fra: g
                    }) {
                        switch (d) {
                            case 1:
                                return O7(c, {});
                            case 3:
                                return O7(iKc, {
                                    v9: e || ""
                                });
                            case 0:
                                return O7(b, {});
                            case 2:
                                return O7(hKc, {
                                    Zm: f,
                                    qJ: g || ""
                                });
                            case 4:
                                return O7(a, {});
                            case 5:
                                return O7(jKc, {});
                            default:
                                throw new __c.A(d);
                        }
                    },
                    rKc = function({
                        Np: a,
                        uf: b,
                        Zm: c,
                        Uz: d,
                        Dh: e,
                        Tpa: f,
                        exports: g,
                        U6: h
                    }) {
                        const k = new lKc,
                            l = new mKc(k, a,
                                b, d, e, f, h),
                            m = nKc(a),
                            n = oKc(a),
                            p = () => O7("div", {
                                children: "Error"
                            });
                        return pKc(() => {
                            P7(() => {
                                l.initialize();
                                return () => {
                                    l.destroy()
                                }
                            }, []);
                            P7(() => {
                                l.J2 && l.gi && g.Mlb && g.Mlb()
                            });
                            return O7(qKc, {
                                Kd: l.Kd,
                                children: O7(kKc, {
                                    Mha: l.Mha,
                                    ozb: l.v9,
                                    selected: l.gi,
                                    fra: l.fra,
                                    Zm: c,
                                    Vjb: n,
                                    $jb: m,
                                    fjb: p
                                })
                            })
                        })
                    },
                    uKc = function(a) {
                        return sKc(({
                            data: b,
                            Be: {
                                Zm: c
                            },
                            zi: {
                                uf: d
                            }
                        }) => {
                            const e = tKc(() => rKc({
                                Np: b,
                                uf: d,
                                Zm: c,
                                ...a
                            }), [b, d, c]);
                            return O7("div", {
                                className: "N73IPQ",
                                children: O7(e, {})
                            })
                        })
                    },
                    wKc = function(a, b, c) {
                        a = a.startSpan("load_resource",
                            c);
                        return vKc(a, b)
                    },
                    vKc = function(a, b) {
                        return (typeof b === "function" ? b() : b).catch(c => {
                            a.setStatus("error");
                            throw c;
                        }).finally(() => {
                            a.end()
                        })
                    },
                    N7 = function(a, b, c) {
                        a.canvas.width = b;
                        a.canvas.height = c
                    },
                    xKc = function(a, b) {
                        a.nba = a.nba.filter(c => c !== b)
                    },
                    fKc = function(a) {
                        return {
                            width: a.canvas.width,
                            height: a.canvas.height
                        }
                    },
                    zKc = async function(a) {
                        a.vQ || (a.vQ = Q7());
                        try {
                            const [{
                                default: b,
                                WebGlRenderer: c
                            }, {
                                default: d
                            }] = await Promise.all([__webpack_require__.me(19779), __webpack_require__.me(104993)]);
                            await b({
                                path: d
                            });
                            a.$Pa = c
                        } catch (b) {
                            throw a.E4 = void 0, Error("Failed to initialize renderer", {
                                cause: b
                            });
                        }
                        try {
                            a.CQ = yKc(a)
                        } catch (b) {
                            a.I.info(`Unable to initialize WebGL context error: ${b}`), R7(() => {
                                a.Qua = !0
                            })
                        }
                    },
                    Q7 = function() {
                        const a = document.createElement("canvas");
                        a.width = 1E3;
                        a.height = 1E3;
                        a.style.width = "100%";
                        a.style.visibility = "visible";
                        return a
                    },
                    yKc = function(a, b = 0) {
                        if (b > 5) throw Error("Unable to recreate context");
                        const c = AKc(a);
                        a.CQ = new(__c.z(a.$Pa))(c);
                        a.CQ.onContextLost = () => {
                            a.I.info("WebGL context lost for scene widget");
                            a.CQ = void 0;
                            a.E4 = void 0;
                            a.IFa = () => {
                                const d = a.canvas;
                                a.vQ = Q7();
                                a.$Pa && yKc(a, b + 1);
                                a.nba.forEach(e => e(d));
                                a.IFa = void 0
                            }
                        };
                        return a.CQ
                    },
                    AKc = function(a) {
                        a = a.canvas;
                        let b;
                        const c = e => {
                            b = e.statusMessage ? ? "Unknown"
                        };
                        a.addEventListener("webglcontextcreationerror", c);
                        const d = a.getContext("webgl");
                        a.removeEventListener("webglcontextcreationerror", c);
                        if (d != null) return d;
                        throw Error(b);
                    };
                __c.Is.prototype.lta = __c.fa(8, function(a, b) {
                    const c = this.xi.get(__c.Fs(a));
                    if (c != null && c.y$a != null) {
                        const e = this.ZX.get(c);
                        if (e != null) return Promise.resolve({ ...c,
                            element: e
                        })
                    }
                    const d = __c.Fs(a);
                    if (a = this.pending.get(d)) return a;
                    c != null && c.y$a != null && (b = async () => {
                        const e = await __c.Hs(this, c);
                        return { ...c,
                            element: e
                        }
                    });
                    b = b().finally(() => this.pending.delete(d));
                    this.pending.set(d, b);
                    return b
                });
                __c.Js.prototype.lta = __c.fa(7, function(a, b) {
                    var c = this.scenes.get(a);
                    if (c) return Promise.resolve(c);
                    if (c = this.pending.get(a)) return c;
                    b = b().finally(() => this.pending.delete(a));
                    this.pending.set(a, b);
                    return b
                });
                var BKc = __webpack_require__(19779),
                    UJc = BKc.GltfRenderer,
                    TJc = BKc.GltfResource;
                var S7 = __webpack_require__(186901),
                    T7 = S7.EW,
                    R7 = S7.h5,
                    U7 = S7.mJ,
                    V7 = S7.sH,
                    W7 = S7.XI;
                var CKc = __webpack_require__(322594),
                    O7 = CKc.jsx,
                    DKc = CKc.jsxs;
                var X7 = __webpack_require__(205482),
                    sKc = X7.memo,
                    P7 = X7.useEffect,
                    tKc = X7.useMemo,
                    EKc = X7.useRef,
                    FKc = X7.useState;
                var pKc = __webpack_require__(721226).PA;
                var WJc = __c.uc("1aab289f", !1),
                    GKc = class {
                        constructor(a) {
                            this.Dh = a
                        }
                    };
                var HKc = class {
                    static G(a) {
                        L(a, {
                            selected: V7.ref,
                            Rsa: V7.ref,
                            Qsa: V7.ref,
                            E9: V7.ref,
                            RAb: V7.ref
                        })
                    }
                    constructor(a) {
                        this.og = a;
                        this.selected = (HKc.G(this), !1);
                        this.Qsa = this.Rsa = !1;
                        this.E9 = 0;
                        this.RAb = !1
                    }
                };
                var cKc = class {
                    static G(a) {
                        L(a, {
                            initialize: W7,
                            nub: W7,
                            gMa: W7,
                            hcb: W7,
                            dispose: W7,
                            n8: W7,
                            Bka: W7,
                            zdb: W7
                        })
                    }
                    async initialize(a) {
                        this.store.isInitialized || this.store.Kd || (this.store.Kd = !0, a = XJc(a), this.store.uka = a, await a.load(), a === this.store.uka && (this.store.RE = VJc(this.tka, a), this.Dh.nba.push(this.Bka), this.render(!0), R7(() => {
                            this.store.isInitialized = !0;
                            this.store.Kd = !1
                        })))
                    }
                    nub(a, b, c = !0) {
                        const d = this.n8();
                        this.store.PZ = d;
                        a = Math.round(Math.min(a.width * 2E3 / d.width, 2E3));
                        N7(this.Dh, a, a);
                        this.store.CS = a;
                        this.store.da =
                            b;
                        this.store.qYa = c;
                        this.zdb()
                    }
                    get CS() {
                        return this.store.CS
                    }
                    get PZ() {
                        return this.store.PZ
                    }
                    gMa() {
                        this.store.Le = !1;
                        this.store.Hfa != null && (cancelAnimationFrame(this.store.Hfa), this.store.Hfa = void 0)
                    }
                    hcb(a) {
                        this.store.RR = a
                    }
                    async dispose() {
                        this.gMa();
                        if (this.isInitialized && this.store.container ? .contains(this.Dh.canvas)) {
                            this.store.gga = this.n8();
                            var a = document.createElement("canvas");
                            ZJc(this, this.store.CS, a);
                            this.store.DE = a
                        }
                        this.store.RE ? .dispose();
                        this.store.RE = void 0;
                        this.store.isInitialized = !1;
                        xKc(this.Dh,
                            this.Bka);
                        this.store.Kd = !1;
                        a = this.store.uka;
                        this.store.uka = void 0;
                        await a ? .load();
                        a ? .dispose()
                    }
                    n8() {
                        if (this.store.hga && this.store.RR === this.store.hga ? .AIb) return this.store.hga.ha;
                        var a = fKc(this.Dh);
                        N7(this.Dh, 2E3, 2E3);
                        this.render(!1);
                        const b = this.Dh.getImageData();
                        N7(this.Dh, a.width, a.height);
                        a = this.lwb(b.data, b.width, b.height);
                        this.store.hga = {
                            AIb: this.store.RR,
                            ha: a
                        };
                        return a
                    }
                    get isInitialized() {
                        return this.store.isInitialized
                    }
                    get Kd() {
                        return this.store.Kd
                    }
                    get Le() {
                        return this.store.Le
                    }
                    get da() {
                        return this.store.da
                    }
                    zdb() {
                        this.gMa();
                        this.store.Le = !0;
                        aKc(this)
                    }
                    render(a) {
                        this.store.RE ? .render({
                            distance: 1,
                            rotationPhi: this.store.RR.rotation.x,
                            rotationTheta: this.store.RR.rotation.y,
                            enableGrid: a
                        })
                    }
                    constructor(a, b, c, d = YJc) {
                        this.store = a;
                        this.tka = b;
                        this.Dh = c;
                        this.lwb = d;
                        this.Bka = (cKc.G(this), e => {
                            R7(() => {
                                const f = this.store.uka,
                                    g = this.store.container;
                                g && this.store.isInitialized && f && (g.contains(e) && g.removeChild(e), $Jc(this, g), this.store.RE ? .dispose(), this.store.RE = void 0, this.store.RE = VJc(this.tka, f), this.Dh.nba.push(this.Bka), this.store.isInitialized = !0)
                            })
                        })
                    }
                };
                var bKc = class {
                    static G(a) {
                        L(a, {
                            Le: V7.ref,
                            RR: V7.ref,
                            Hfa: V7.ref,
                            DE: V7.ref,
                            gga: V7.ref,
                            hga: V7.ref,
                            isInitialized: V7.ref,
                            Kd: V7.ref,
                            da: V7.ref,
                            PZ: V7.ref
                        })
                    }
                    constructor() {
                        this.container = (bKc.G(this), void 0);
                        this.qYa = this.Le = !1;
                        this.RR = {
                            rotation: {
                                x: 0,
                                y: 0,
                                z: 0
                            }
                        };
                        this.gga = {
                            left: 0,
                            top: 0,
                            width: 1,
                            height: 1
                        };
                        this.Kd = this.isInitialized = !1;
                        this.da = 1;
                        this.PZ = {
                            left: 0,
                            top: 0,
                            width: 1,
                            height: 1
                        };
                        this.CS = 0
                    }
                };
                var IKc = ({
                        zAb: a
                    }) => DKc("div", {
                        className: "Wfem7A",
                        children: [O7("div", {
                            className: "CSoSRg"
                        }), O7("div", {
                            className: "__J59g",
                            style: {
                                width: a ? "100%" : "init",
                                height: a ? "init" : "100%",
                                aspectRatio: "1"
                            },
                            children: O7("div", {
                                className: "tEhdig"
                            })
                        })]
                    }),
                    qKc = ({
                        children: a,
                        Kd: b
                    }) => {
                        const c = EKc(null),
                            [d, e] = FKc(!1);
                        P7(() => {
                            c.current && e(c.current.clientWidth >= c.current.clientHeight)
                        }, [c]);
                        return b ? O7("div", {
                            ref: c,
                            className: "uDEnGQ",
                            children: DKc("div", {
                                className: "E8BDLQ",
                                children: [O7("div", {
                                    className: "II7r4Q",
                                    children: a
                                }), O7(IKc, {
                                    zAb: d
                                })]
                            })
                        }) : a
                    };
                var JKc = ({
                    zFb: a,
                    yFb: b
                }) => {
                    const c = EKc(null);
                    P7(() => {
                        const d = c.current;
                        c.current && a(c.current);
                        return () => {
                            d && b()
                        }
                    }, [c, a, b]);
                    return O7("div", {
                        ref: c,
                        style: {
                            display: "block",
                            position: "absolute"
                        }
                    })
                };
                var KKc = class {
                    get og() {
                        return this.local.og
                    }
                    constructor(a) {
                        this.local = a;
                        this.Ixb = b => {
                            const c = this.og.PZ;
                            b.style.width = 2E3 * this.og.da + "px";
                            b.style.height = 2E3 * this.og.da + "px";
                            b.style.left = `-${c.left*this.og.da}px`;
                            b.style.top = `-${c.top*this.og.da}px`;
                            $Jc(this.og, b)
                        };
                        this.Hxb = () => {
                            var b = this.og;
                            if (b.isInitialized && b.store.container ? .contains(b.Dh.canvas)) {
                                b.store.gga = b.n8();
                                const c = document.createElement("canvas");
                                ZJc(b, b.store.CS, c);
                                b.store.DE = c
                            }
                            b.store.container ? .removeChild(b.Dh.canvas);
                            b.store.container =
                                void 0
                        }
                    }
                };
                var oKc = ({
                    local: a
                }) => {
                    const b = new KKc(a);
                    return () => O7(JKc, {
                        zFb: b.Ixb,
                        yFb: b.Hxb
                    })
                };
                var LKc = ({
                    dN: a,
                    YFb: b,
                    onDispose: c
                }) => {
                    const d = EKc(null);
                    P7(() => {
                        d.current && b(d.current);
                        return () => c()
                    }, [d, b, c]);
                    P7(() => {
                        d.current && a && (a.style.width = "100%", a.style.height = "100%", d.current.firstChild && d.current.removeChild(d.current.firstChild), d.current.appendChild(a))
                    }, [d, a]);
                    return O7("div", {
                        ref: d,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })
                };
                var MKc = __c.uc("75810be2", !1),
                    NKc = class {
                        static G(a) {
                            L(a, {
                                initialize: W7.bound,
                                dispose: W7.bound,
                                DXa: W7
                            })
                        }
                        initialize(a) {
                            MKc || (this.store.container = a, this.store.EXa = U7(() => [this.og.store.RR, this.og.Le], this.Lxb, {
                                fireImmediately: !1
                            }), this.store.BXa = U7(() => this.local.Qsa, this.Jxb, {
                                fireImmediately: !0
                            }))
                        }
                        dispose() {
                            this.DXa();
                            this.store.EXa ? .();
                            this.store.EXa = void 0;
                            this.store.BXa ? .();
                            this.store.BXa = void 0
                        }
                        get dN() {
                            return this.store.dN
                        }
                        t_(a) {
                            a = a.getBoundingClientRect();
                            return Math.max(a.width, a.height) > 100 ?
                                this.og.CS : 300
                        }
                        get og() {
                            return this.local.og
                        }
                        DXa() {
                            this.store.dN = void 0
                        }
                        constructor(a, b) {
                            this.store = a;
                            this.local = b;
                            this.Lxb = (NKc.G(this), () => {
                                this.og.Le || (this.local.Qsa ? eKc(this) : gKc(this))
                            });
                            this.Jxb = () => {
                                this.local.Qsa ? eKc(this) : gKc(this)
                            }
                        }
                    };
                var OKc = class {
                    static G(a) {
                        L(a, {
                            dN: V7.ref
                        })
                    }
                    constructor() {
                        this.container = (OKc.G(this), void 0)
                    }
                };
                var nKc = ({
                    local: a
                }) => {
                    const b = new OKc,
                        c = new NKc(b, a);
                    return pKc(() => O7(LKc, {
                        YFb: c.initialize,
                        onDispose: c.dispose,
                        dN: c.dN
                    }))
                };
                var jKc = () => O7("div", {
                    className: "_7SJjPA"
                });
                var iKc = ({
                    v9: a
                }) => O7("img", {
                    src: a,
                    style: {
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto"
                    }
                });
                var mKc = class {
                    static G(a) {
                        L(a, {
                            initialize: W7,
                            destroy: W7,
                            Mha: T7,
                            Kd: T7,
                            isError: T7,
                            v9: T7,
                            UB: T7,
                            gi: T7,
                            W_a: W7,
                            a0a: W7,
                            b0a: W7
                        })
                    }
                    async initialize() {
                        this.store.hsb = U7(() => this.UB, this.W_a, {
                            fireImmediately: !0
                        });
                        const a = await SJc(this.Uz, this.Np.D.scene.id);
                        R7(() => {
                            this.store.scene = a
                        })
                    }
                    destroy() {
                        this.UB && this.Np.local.E9--;
                        this.Np.local.E9 === 0 && this.og.dispose();
                        this.store.hsb ? .();
                        this.store.Lza ? .();
                        this.store.Kza ? .();
                        this.store.FXa ? .()
                    }
                    get Mha() {
                        return this.uEa && this.UB && !this.og.Le || this.UB && this.uEa && !this.gi ||
                            !this.UB && this.uEa ? 0 : this.AAb && this.og.Le ? 1 : this.fra ? 2 : this.v9 ? 3 : this.isError ? 4 : 5
                    }
                    get Kd() {
                        return this.UB && this.gi && !this.og.isInitialized
                    }
                    get isError() {
                        return !!this.store.scene && !this.store.scene.files.zIa
                    }
                    get v9() {
                        return this.store.scene ? .files.zIa
                    }
                    get uEa() {
                        return this.Np.local.Rsa
                    }
                    get fra() {
                        return this.Np.D.config.ref.snapshot ? .id
                    }
                    get UB() {
                        return !this.U6 && this.uf === 30 && !this.Dh.v2a
                    }
                    get J2() {
                        return this.store.J2
                    }
                    get gi() {
                        return this.Np.local.selected
                    }
                    get AAb() {
                        return this.UB && this.gi && this.og.isInitialized
                    }
                    get og() {
                        return this.Np.local.og
                    }
                    get D() {
                        return this.Np.D
                    }
                    constructor(a,
                        b, c, d, e, f, g) {
                        this.store = a;
                        this.Np = b;
                        this.uf = c;
                        this.Uz = d;
                        this.Dh = e;
                        this.Tpa = f;
                        this.U6 = g;
                        this.Vxb = (mKc.G(this), () => {
                            if (!this.Np.local.Rsa) {
                                var h = this.og;
                                h.store.DE && (h.store.DE.width = 1, h.store.DE.height = 1, h.store.DE = void 0)
                            }
                        });
                        this.W_a = (h, k) => {
                            this.store.Lza ? .();
                            this.store.Kza ? .();
                            this.store.FXa ? .();
                            k && this.Np.local.E9--;
                            this.UB ? (this.Np.local.E9++, this.store.Lza = U7(() => ({
                                selected: this.gi,
                                scene: this.store.scene
                            }), ({
                                selected: l,
                                scene: m
                            }) => this.a0a(l, m), {
                                fireImmediately: !0
                            }), this.store.Kza = U7(() => [this.Np.D.config.ref.rotationPhi,
                                this.Np.D.config.ref.rotationTheta
                            ], this.Oxb, {
                                fireImmediately: !0
                            }), this.store.FXa = U7(() => [this.Np.local.Rsa], this.Vxb, {
                                fireImmediately: !1
                            })) : this.store.Lza = U7(() => ({
                                selected: this.gi
                            }), ({
                                selected: l
                            }) => this.b0a(l), {
                                fireImmediately: !0
                            })
                        };
                        this.a0a = async (h, k) => {
                            if (k != null)
                                if (!h) this.og.dispose();
                                else if (!this.og.Kd) {
                                var l = __c.z(k.files.M_a);
                                await this.Dh.ISb;
                                this.Dh.v2a || (h = this.Tpa.startSpan("select"), await wKc(this.Tpa, async () => {
                                    await this.og.initialize(l)
                                }, h), h.end())
                            }
                        };
                        this.b0a = h => {
                            this.store.J2 = this.U6;
                            h || (this.store.J2 = !1)
                        };
                        this.Oxb = () => {
                            this.og.Le || this.og.hcb({
                                rotation: {
                                    x: this.Np.D.config.ref.rotationPhi,
                                    y: this.Np.D.config.ref.rotationTheta,
                                    z: 0
                                }
                            })
                        }
                    }
                };
                var lKc = class {
                    static G(a) {
                        L(a, {
                            scene: V7.ref,
                            J2: V7.ref
                        })
                    }
                    constructor() {
                        this.Kza = (lKc.G(this), void 0);
                        this.J2 = !1
                    }
                };
                var PKc = class {
                    startSpan(a, b) {
                        a = `scene.${a}`;
                        return b ? this.fb.startSpan(a, b) : this.fb.pi(a, {
                            Lq: {
                                name: `editor.${a}`,
                                performance: {
                                    yJ: !0
                                }
                            }
                        })
                    }
                    constructor(a) {
                        this.fb = a
                    }
                };
                var QKc = __c.uc("5eb77351", !1),
                    RKc = navigator != null && !!navigator.userAgent.match(/iphone|ipad/gi) || QKc,
                    SKc = class {
                        static G(a) {
                            L(a, {
                                Qua: V7.ref
                            })
                        }
                        get v2a() {
                            return this.Qua
                        }
                        get ISb() {
                            this.IFa && this.IFa();
                            this.E4 || (this.E4 = zKc(this));
                            return this.E4
                        }
                        get canvas() {
                            this.vQ || (this.vQ = Q7());
                            return this.vQ
                        }
                        get Ehb() {
                            return this.CQ
                        }
                        getImageData() {
                            __c.x(this.CQ != null, "WebGlRenderer is not initialized");
                            return this.CQ.readPixels()
                        }
                        constructor(a) {
                            this.I = a;
                            this.vQ = (SKc.G(this), void 0);
                            this.nba = [];
                            this.Qua = !1;
                            RKc || (this.vQ =
                                Q7(), this.E4 = zKc(this))
                        }
                    };
                var TKc = __c.c_()(() => ({
                    yYb(a, b, c) {
                        return {
                            data: {
                                D: {
                                    scene: {
                                        type: "scene",
                                        id: a,
                                        version: 0
                                    },
                                    config: {
                                        snapshot: void 0,
                                        rotationPhi: 6.02138592,
                                        rotationTheta: .08726646
                                    }
                                },
                                document: {}
                            },
                            P: {
                                width: b,
                                height: c
                            }
                        }
                    },
                    zYb(a, b, c, d) {
                        return {
                            data: {
                                D: {
                                    scene: {
                                        type: "scene",
                                        id: a,
                                        version: 0
                                    },
                                    config: {
                                        snapshot: b,
                                        rotationPhi: 6.02138592,
                                        rotationTheta: .08726646
                                    }
                                },
                                document: {}
                            },
                            P: {
                                width: c,
                                height: d
                            }
                        }
                    }
                }));
                var UKc = __c.n_({
                    D: __c.m_({
                        scene: C0.Im(1, "SceneRef"),
                        config: C0.Awa(2, {
                            snapshot: C0.XGb(1, "MediaRef"),
                            rotationPhi: C0.SXa(2, {
                                min: 0,
                                max: 6.284
                            }),
                            rotationTheta: C0.SXa(3, {
                                min: -1.571,
                                max: 1.571
                            })
                        })
                    })
                });
                var VKc, WKc;
                VKc = __c.uc("646956e3", !1);
                WKc = __c.PZ()(({
                    oi: a,
                    VL: b
                }) => {
                    var c = b.fb;
                    b = b.I.Vf("scene_widget_rendering");
                    c = new PKc(c);
                    const d = new SKc(b),
                        e = new GKc(d),
                        f = navigator != null && !!navigator.userAgent.match(/iphone|ipad/gi) && !VKc;
                    b = {
                        U6: f
                    };
                    a = uKc({
                        Uz: a.Uz,
                        Dh: d,
                        Tpa: c,
                        exports: b,
                        U6: f
                    });
                    return {
                        metadata: {
                            type: "scene",
                            name: __c.J("6XoKOg"),
                            VV: g => g.scene.id
                        },
                        o6: () => {
                            const g = dKc({
                                tka: e,
                                Dh: d
                            });
                            return new HKc(g)
                        },
                        D: __c.OZ(a),
                        exports: b
                    }
                });
                __c.E_ = {};
                __c.E_.jVb = HKc;
                __c.E_.rh = TKc;
                __c.E_.Lo = WKc;
                __c.E_.sh = UKc;
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/e3c9de61dba35de2.js.map
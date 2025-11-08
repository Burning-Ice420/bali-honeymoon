(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [70386], {

        /***/
        649000: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(258551);
            __web_req__(552854);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var Ca = __c.Ca;
                var x = __c.x;
                var C0 = __c.C0;
                var L = __c.L;
                var tb = __c.tb;
                var uc = __c.uc;
                var ZD = __c.ZD;
                var yl = __c.yl;
                var J = __c.J;
                var mg = __c.mg;
                var Uf = __c.Uf;
                var u = __c.u;
                var jk = __c.jk;
                var Vg = __c.Vg;
                var b3 = __c.b3;
                var A = __c.A;
                var Cs = __c.Cs;
                var Bs = __c.Bs;
                var xGc = function(a, b) {
                        return c => {
                            c = a(c);
                            if (typeof c === "boolean") return c ? Bs() : Cs(b);
                            switch (c.state) {
                                case "valid":
                                    return c;
                                case "invalid":
                                    return Cs(b);
                                default:
                                    throw new A(c);
                            }
                        }
                    },
                    yGc = function(a) {
                        return b => {
                            for (const e of a) {
                                var c = e,
                                    d = b;
                                c = (Array.isArray(c) ? xGc(...c) : c)(d);
                                c = typeof c === "boolean" ? c ? Bs() : Cs() : c.state === "invalid" && c.error == null ? Cs() : c;
                                if (c.state === "invalid") return c
                            }
                            return Bs()
                        }
                    },
                    zGc = function(a, b) {
                        switch (a.status) {
                            case 1:
                                return b.OO ? {
                                    status: 1,
                                    data: b.OO(a.data)
                                } : a;
                            case 2:
                                return a;
                            case 3:
                                return b.error ?
                                    b3(b.error(a.error)) : a;
                            default:
                                throw new A(a);
                        }
                    },
                    d7 = function(a, b) {
                        const c = b.OO,
                            d = b.loading,
                            e = b.error;
                        switch (a.status) {
                            case 1:
                                return c ? c(a.data) : b.default ? .();
                            case 2:
                                return d ? d() : b.default ? .();
                            case 3:
                                return e ? e(a.error) : b.default ? .();
                            default:
                                throw new A(a);
                        }
                    },
                    AGc = function(a) {
                        if (a.status === 1) return a.data
                    },
                    CGc = function(a) {
                        const b = BGc(a, a.document.language ? ? "en"),
                            c = e7(d => {
                                a.mW = d
                            });
                        Array.isArray(b) ? c(b) : b.then(c, () => c([]))
                    },
                    BGc = async function(a, b) {
                        try {
                            const {
                                mW: c
                            } = await (a.hRb ? ? (a.hRb = __webpack_require__.me(434895).then(() =>
                                __c.DGc))), d = JSON.parse(c);
                            return Object.values(d[b] ? ? {})
                        } catch {
                            return []
                        }
                    },
                    EGc = function(a) {
                        const b = a.label,
                            c = a.nga,
                            d = a.onClick,
                            e = a.Nr;
                        a = a.padding;
                        return f7("button", {
                            className: g7("zFy0ZQ", e === h7 && "YWvjNg", (e === i7 || e === j7) && "y1B_1A"),
                            style: {
                                "--Wa7Mmg": c.default,
                                "--mvXy3w": c.Lg,
                                "--www8Xw": c.active,
                                "--neon6Q": c.Rm,
                                paddingInlineStart: a.ma,
                                paddingInlineEnd: a.Ma,
                                paddingBlockStart: a.ja,
                                paddingBlockEnd: a.za
                            },
                            disabled: e !== h7,
                            onClick: d,
                            onTouchEnd: f => {
                                f.stopPropagation()
                            },
                            children: b
                        })
                    },
                    k7 = function(a, b, c) {
                        if (b) switch (b.AE) {
                            case "required":
                                return a.SAa();
                            case "unknown_option_id":
                                return a.ZAa();
                            case "invalid_format":
                                return c.type === 5 ? a.NAa() : a.MAa();
                            case "invalid_email":
                                return a.LAa();
                            case "out_of_bounds":
                                switch (c ? .type) {
                                    case 4:
                                        return b.params.exact != null ? a.WAa(b.params.exact) : b.params.IX != null ? a.YAa(b.params.IX) : a.XAa(b.params.Lva);
                                    case 1:
                                    case 2:
                                    case 3:
                                        return b.params.exact != null ? a.TAa(b.params.exact) : b.params.IX != null ? a.VAa(b.params.IX) : a.UAa(b.params.Lva);
                                    case 5:
                                        return b.params.exact != null ? a.PAa(b.params.exact) : b.params.IX != null ? a.RAa(b.params.IX) :
                                            a.QAa(b.params.Lva);
                                    default:
                                        throw new A(c);
                                }
                            default:
                                throw new A(b);
                        }
                    },
                    FGc = function(a) {
                        switch (a) {
                            case "l":
                                return "ltr";
                            case "r":
                                return "rtl";
                            default:
                                throw new A(a);
                        }
                    },
                    GGc = function(a) {
                        a = { ...__c.kk,
                            stream: Vg.Mb().attrs(a.stream.$g(0)).mb(a.stream.Z.trim() + "*\n").build()
                        };
                        return jk.create(a)
                    },
                    MGc = function(a) {
                        const b = a.yEa,
                            c = a.gridGap,
                            [d, e] = l7(0),
                            f = HGc.count(a.children),
                            g = b * f + c * (f - 1),
                            h = IGc(null);
                        JGc(() => {
                            h.current && e(h.current.offsetWidth)
                        }, []);
                        return f7(KGc, {
                            onResize: k => e(k.entry ? .width ? ? 0),
                            children: ({
                                    measureRef: k
                                }) =>
                                f7("div", {
                                    ref: LGc(k, h),
                                    className: "lLyTrw",
                                    style: {
                                        "--7BjzEw": `${b}px`,
                                        "--W5t64A": g > d ? 1 : f,
                                        "--CEwLjw": `${c}px`
                                    },
                                    children: a.children
                                })
                        })
                    },
                    m7 = function(a, b) {
                        return __c.Cl(__c.Bl(__c.vl(a), b))
                    },
                    NGc = function(a) {
                        const b = a.color;
                        a = a.$a;
                        return b ? b : a.ref ? a.ref.Bh[0].color : "#ffffff"
                    },
                    n7 = function(a, b) {
                        u(b.length > 0, "zero contrast candidates received");
                        const c = new Map;
                        return __c.ri(b, d => {
                            const e = c.get(d) ? ? __c.Hl(d, a);
                            c.set(d, e);
                            return e
                        })
                    },
                    OGc = function(a, b, c) {
                        u(!0);
                        u(!0);
                        u(!0);
                        const {
                            va: d,
                            a: e,
                            b: f
                        } = __c.ql(a), {
                            va: g,
                            a: h,
                            b: k
                        } = __c.ql(b), l = (d + g) / 2;
                        var m = (Math.hypot(e, f) + Math.hypot(h, k)) / 2;
                        m = .5 * (1 - Math.sqrt(m ** 7 / (m ** 7 + 25 ** 7)));
                        var n = e * (1 + m),
                            p = h * (1 + m),
                            q = Math.hypot(n, f),
                            r = Math.hypot(p, k);
                        m = (q + r) / 2;
                        var t = __c.Dl(Math.atan2(f, n) * 180 / Math.PI);
                        const v = __c.Dl(Math.atan2(k, p) * 180 / Math.PI);
                        n = Math.abs(t - v) > 180 ? (t + v + 360) / 2 : (t + v) / 2;
                        p = r - q;
                        q = 2 * Math.sqrt(q * r) * Math.sin((Math.abs(v - t) <= 180 ? v - t : v <= t ? v - t + 360 : v - t - 360) / 2 * Math.PI / 180);
                        r = 1 + .045 * m;
                        t = 1 + .015 * m * (1 - .17 * Math.cos((n - 30) * Math.PI / 180) + .24 * Math.cos(2 * n * Math.PI / 180) + .32 * Math.cos((3 *
                            n + 6) * Math.PI / 180) - .2 * Math.cos((4 * n - 63) * Math.PI / 180));
                        return Math.sqrt(((g - d) / (1 + .015 * (l - 50) ** 2 / Math.sqrt(20 + (l - 50) ** 2))) ** 2 + (p / (1 * r)) ** 2 + (q / (1 * t)) ** 2 + p / (1 * r) * (q / (1 * t)) * (-(2 * Math.sqrt(m ** 7 / (m ** 7 + 25 ** 7))) * Math.sin(30 * Math.exp(-1 * ((n - 275) / 25) ** 2) * 2 * Math.PI / 180))) >= (c ? ? 20) ? a : n7(b, o7)
                    },
                    PGc = function({
                        size: a
                    }) {
                        return f7("svg", {
                            "aria-hidden": "true",
                            width: a,
                            height: a,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: f7("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M20.6592 18.1181L13.7952 4.14664C13.6002 3.74964 13.279 3.42849 12.882 3.23346C11.8907 2.7464 10.6921 3.15525 10.2051 4.14664L3.34116 18.1181C3.20634 18.3925 3.13623 18.6942 3.13623 19C3.13623 20.1045 4.03166 21 5.13623 21H18.8641C19.1698 21 19.4715 20.9298 19.746 20.795C20.7374 20.308 21.1462 19.1095 20.6592 18.1181ZM12.2206 4.57976C12.3199 4.62852 12.4002 4.7088 12.4489 4.80805L19.3129 18.7795C19.4346 19.0273 19.3324 19.327 19.0846 19.4487C19.0159 19.4824 18.9405 19.5 18.8641 19.5H5.13623C4.86009 19.5 4.63623 19.2761 4.63623 19C4.63623 18.9235 4.65376 18.8481 4.68746 18.7795L11.5514 4.80805C11.6732 4.56021 11.9728 4.45799 12.2206 4.57976ZM12.0001 18.25C12.6905 18.25 13.2501 17.6903 13.2501 17C13.2501 16.3096 12.6905 15.75 12.0001 15.75C11.3098 15.75 10.7501 16.3096 10.7501 17C10.7501 17.6903 11.3098 18.25 12.0001 18.25ZM13.0001 9.99995C13.0001 9.44767 12.5524 8.99995 12.0001 8.99995C11.4479 8.99995 11.0001 9.44767 11.0001 9.99995V13.5C11.0001 14.0522 11.4479 14.5 12.0001 14.5C12.5524 14.5 13.0001 14.0522 13.0001 13.5V9.99995Z",
                                fill: "#db142c"
                            })
                        })
                    },
                    TGc = function(a) {
                        const b = a.fub,
                            c = a.Cz,
                            d = a.rC,
                            e = a.gi,
                            f = a.Nr,
                            [g, h, k] = p7(() => {
                                switch (b) {
                                    case 4:
                                    case 2:
                                        return ["#e3fff0", "#00873d", QGc];
                                    case 3:
                                        return ["#ffd9df", "#c8001e", RGc];
                                    case 1:
                                        return [c.Rm, d.Rm];
                                    case 0:
                                        return e ? [c.selected, d.selected] : f === j7 || f === i7 ? [c.Rm, d.Rm] : [c.default];
                                    default:
                                        throw new A(b);
                                }
                            }, [b, c.Rm, c.selected, c.default, d.Rm, d.selected, e, f]),
                            l = b === 0 || b === 1;
                        return f7(SGc, { ...a,
                            cb: k,
                            E_: a.gqa === "s" ? void 0 : e ? d.selected : d.default,
                            CEa: h,
                            backgroundColor: {
                                default: g,
                                Lg: l ? c.Lg : g,
                                active: l ?
                                    c.active : g,
                                selected: l ? c.selected : g
                            },
                            pyb: !!k
                        })
                    },
                    SGc = function(a) {
                        const b = a.Nub,
                            c = a.backgroundColor,
                            d = a.CEa,
                            e = a.W,
                            f = a.gi,
                            g = a.label,
                            h = a.okb,
                            k = a.onChange;
                        var l = a.gqa;
                        const m = a.Nr,
                            n = a.aIa,
                            p = a.cb,
                            q = a.E_,
                            r = a.pyb,
                            t = a.AM,
                            v = a.cHb,
                            w = a.Fob,
                            y = a.Gob,
                            B = a.qxa;
                        a = a.Rc;
                        const C = q7(),
                            D = q7(),
                            F = q7(),
                            K = IGc(null),
                            M = IGc(null),
                            O = l === "s" ? "radio" : "checkbox";
                        l = p7(() => {
                            const Q = g.stream.wn(0);
                            return n !== void 0 ? r7(`${n.value}%`, { ...Q,
                                "font-weight": "bold",
                                color: n.hd,
                                "font-size": Uf(mg, Q, "font-size") * UGc
                            }) : void 0
                        }, [n, g]);
                        const U = m ===
                            h7;
                        return s7("div", {
                            className: g7("VTAQRg", !(f || n) && "zt5zlQ", U && "A_ugOA", (m === i7 || m === j7) && "zMViSA", f && "Buj71Q"),
                            style: {
                                "--_v6jRQ": c.default,
                                "--CGAV4g": c.selected,
                                "--6wmixw": c.Lg,
                                "--LX33kQ": c.active,
                                "--T5edVA": `${e}px`,
                                "--XYYx_A": `${a/2}px`,
                                padding: `${v}px`
                            },
                            onClick: U ? Q => {
                                M.current ? .contains(Q.target) || K.current ? .contains(Q.target) || K.current ? .click()
                            } : void 0,
                            children: [f7("input", {
                                "aria-invalid": !!t,
                                "aria-checked": f,
                                "aria-labelledby": p ? D : void 0,
                                "aria-describedby": n || t ? `${n?F:""} ${t||""}`.trim() : void 0,
                                id: C,
                                name: b,
                                readOnly: m === i7,
                                disabled: m === j7,
                                type: O,
                                value: g.stream.Z,
                                className: "EP8SeA",
                                onChange: U ? k : void 0,
                                onClick: U ? Q => {
                                    O === "radio" && f && (Q.preventDefault(), k())
                                } : void 0,
                                checked: f,
                                ref: K
                            }), n !== void 0 && f7("div", {
                                className: "GpAzFg",
                                role: "meter",
                                "aria-valuenow": n.value,
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "data-percent": n.value,
                                style: {
                                    width: `${n.value}%`,
                                    "--60vMXA": n.Xmb
                                }
                            }), s7("label", {
                                className: g7("rSeRzQ", p && "zSZK5w", O === "checkbox" && "bHM4Bw"),
                                htmlFor: C,
                                ref: M,
                                children: [!r && O === "checkbox" && f7("div", {
                                    className: g7("n4ooaw", f && "Jw4Eqw"),
                                    style: {
                                        "--THA9bg": q,
                                        "--KBfK1Q": `${B}px`,
                                        "--HgMgMg": VGc(c.selected, w, y)
                                    }
                                }), f7("div", {
                                    children: f7(h, {
                                        text: d ? WGc(g, d) : g
                                    })
                                })]
                            }), l && f7("div", {
                                id: F,
                                children: f7(h, {
                                    text: l
                                })
                            }), p && f7(p, {
                                id: D,
                                size: a
                            })]
                        })
                    },
                    VGc = function(a, b, c) {
                        a = encodeURIComponent(a);
                        return `url("data:image/svg+xml,%3Csvg width='${c}' height='${b}' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.75 4.5L3.25 7L9.25 1' stroke='${a}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`
                    },
                    XGc = function(a) {
                        return f7("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: a.size,
                            height: a.size,
                            "data-testid": t7.$ub,
                            children: f7("path", {
                                d: "M10.5086 3.2223C11.0966 1.95168 12.9027 1.95168 13.4906 3.2223L15.3964 7.34106C15.5158 7.5992 15.7603 7.77718 16.0427 7.81153L20.546 8.35932C21.9319 8.52791 22.4892 10.2389 21.4683 11.1914L18.1397 14.297C17.9325 14.4903 17.8396 14.7768 17.8939 15.055L18.7667 19.5241C19.0347 20.8967 17.5744 21.9552 16.3533 21.2734L12.4001 19.0659C12.1512 18.9269 11.8481 18.9269 11.5992 19.0659L7.64594 21.2734C6.42485 21.9552 4.96453 20.8967 5.23259 19.5241L6.10534 15.055C6.15967 14.7768 6.06675 14.4903 5.85952 14.297L2.53093 11.1914C1.5101 10.2389 2.06735 8.52791 3.45329 8.35932L7.95656 7.81153C8.23892 7.77718 8.48342 7.5992 8.60286 7.34106L10.5086 3.2223Z",
                                fill: a.color
                            })
                        })
                    },
                    YGc = function(a) {
                        return f7("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: a.size,
                            height: a.size,
                            "data-testid": t7.pHb,
                            children: f7("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M14.0351 7.97096L12.1293 3.8522C12.1091 3.80853 12.0904 3.79555 12.08 3.78921C12.0636 3.77925 12.0359 3.76933 11.9996 3.76933C11.9634 3.76933 11.9357 3.77925 11.9193 3.78921C11.9089 3.79555 11.8902 3.80853 11.87 3.8522L9.9642 7.97095C9.62663 8.7005 8.93567 9.20348 8.13769 9.30055L3.63442 9.84834C3.58694 9.85412 3.5688 9.86784 3.55948 9.87586C3.54493 9.88838 3.527 9.91162 3.51583 9.94591C3.50467 9.98021 3.50547 10.0095 3.50986 10.0282C3.51267 10.0402 3.51924 10.062 3.55421 10.0946L6.8828 13.2002C7.46846 13.7466 7.73106 14.5564 7.57754 15.3425L6.70478 19.8116C6.69558 19.8587 6.70308 19.8802 6.70782 19.8915C6.71525 19.9092 6.73186 19.9334 6.76115 19.9546C6.79044 19.9759 6.81867 19.9841 6.83778 19.9857C6.84998 19.9867 6.87273 19.9871 6.91464 19.9637L10.8678 17.7563C11.5713 17.3635 12.428 17.3635 13.1314 17.7563L17.0846 19.9637C17.1265 19.9871 17.1493 19.9867 17.1615 19.9857C17.1806 19.9841 17.2088 19.9759 17.2381 19.9546C17.2674 19.9334 17.284 19.9092 17.2914 19.8915C17.2962 19.8802 17.3037 19.8587 17.2945 19.8116L16.4217 15.3425C16.2682 14.5564 16.5308 13.7466 17.1165 13.2002L20.445 10.0946C20.48 10.062 20.4866 10.0402 20.4894 10.0282C20.4938 10.0095 20.4946 9.98021 20.4834 9.94591C20.4723 9.91162 20.4543 9.88838 20.4398 9.87586C20.4305 9.86784 20.4123 9.85412 20.3648 9.84834L15.8616 9.30055C15.0636 9.20348 14.3726 8.7005 14.0351 7.97096ZM13.4906 3.2223C12.9027 1.95168 11.0966 1.95168 10.5086 3.2223L8.60286 7.34105C8.48342 7.5992 8.23892 7.77718 7.95656 7.81153L3.45329 8.35932C2.06735 8.52791 1.5101 10.2389 2.53093 11.1914L5.85952 14.297C6.06675 14.4903 6.15967 14.7768 6.10534 15.055L5.23259 19.5241C4.96453 20.8967 6.42486 21.9552 7.64595 21.2734L11.5992 19.0659C11.8481 18.9269 12.1512 18.9269 12.4001 19.0659L16.3533 21.2734C17.5744 21.9552 19.0347 20.8967 18.7667 19.5241L17.8939 15.055C17.8396 14.7768 17.9325 14.4903 18.1397 14.297L21.4683 11.1914C22.4892 10.2389 21.9319 8.52791 20.546 8.35932L16.0427 7.81153C15.7603 7.77718 15.5158 7.5992 15.3964 7.34106L13.4906 3.2223Z",
                                fill: a.color
                            })
                        })
                    },
                    ZGc = function(a, b, c) {
                        b ? ? (b = 0);
                        if (c != null && (c > b && a > b && a <= c || c < b && a > c && a <= b)) return "hover";
                        if (a <= b) return "selected"
                    },
                    $Gc = function(a) {
                        switch (a) {
                            case 1:
                                return "email";
                            case 2:
                                return "text";
                            default:
                                throw new A(a);
                        }
                    },
                    aHc = function(a, b, c, d) {
                        const e = f => {
                            const g = c();
                            return g != null ? `${f} | ${b.uGa(g)}` : f
                        };
                        switch (a) {
                            case 0:
                                return e(d ? b.$Fa() : b.lPa());
                            case 1:
                            case 5:
                                return e(d ? b.ZFa() : b.mPa());
                            case 2:
                                return b.offline();
                            case 3:
                                return b.loading();
                            case 4:
                                return b.OAa();
                            case 6:
                                return e(b.rMa());
                            case 7:
                                return e(b.wJa());
                            default:
                                throw new A(a);
                        }
                    },
                    bHc = function(a, b, c, d, e) {
                        if (a === 0) return null;
                        a = Vg.Mb().attrs({
                            "font-family": c.fontFamily,
                            color: b.hd,
                            "font-size": b.kyb,
                            "font-weight": "bold",
                            "text-align": "center",
                            direction: FGc(c.direction),
                            "font-kerning": "normal",
                            "font-feature-liga": "on",
                            "font-feature-clig": "on",
                            "font-feature-calt": "on"
                        }).mb(a === 2 ? d.fya() : d.lDa()).wq();
                        a = jk.create({
                            stream: a.build(),
                            Ub: new Map
                        });
                        return e(a)
                    },
                    cHc = function(a) {
                        return a.some(b => {
                            switch (b.type) {
                                case 4:
                                    return !0;
                                case 5:
                                    return b.variant === 1;
                                case 1:
                                case 2:
                                case 3:
                                    return !1;
                                default:
                                    throw new A(b);
                            }
                        })
                    },
                    dHc = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    gHc = function(a, b) {
                        switch (a.type) {
                            case 0:
                                var c = eHc(a.options, a.ZJa);
                                if (!c.length) return {
                                    nZ: "",
                                    BT: []
                                };
                                a = eHc(b, a.ZJa);
                                return {
                                    nZ: c.map(({
                                        label: d
                                    }) => d).join(", "),
                                    BT: a.map(({
                                        id: d
                                    }) => d)
                                };
                            case 2:
                            case 1:
                                return c = fHc(b, a.value), {
                                    nZ: a.value,
                                    BT: c ? [c.id] : []
                                };
                            default:
                                throw new A(a);
                        }
                    },
                    hHc = function(a) {
                        switch (a.type) {
                            case 0:
                                return a = eHc(a.options, a.ZJa).map(({
                                    label: b
                                }) => b).join(", "), {
                                    nZ: a,
                                    BT: a
                                };
                            case 2:
                            case 1:
                                return {
                                    nZ: a.value,
                                    BT: a.value
                                };
                            default:
                                throw new A(a);
                        }
                    },
                    eHc = function(a, b) {
                        const c = [];
                        for (const d of a) b.includes(d.id) && c.push(d);
                        return c
                    },
                    fHc = function(a, b) {
                        for (const c of a)
                            if (c.label.trimEnd() === b) return c
                    },
                    jHc = function(a) {
                        const {
                            min: b = 0,
                            max: c = Infinity
                        } = a;
                        if (b !== 0 || c !== Infinity) {
                            var d = iHc({
                                min: b,
                                max: c
                            });
                            if (d) return ({
                                length: e
                            }) => d(e)
                        }
                    },
                    iHc = function(a) {
                        const {
                            min: b = -Infinity,
                            max: c = Infinity
                        } = a;
                        if (b !== -Infinity || c !== Infinity) return d => {
                            if (b === c) {
                                if (d !== b) return Cs({
                                    AE: "out_of_bounds",
                                    params: {
                                        exact: b
                                    }
                                })
                            } else {
                                if (d < b) return Cs({
                                    AE: "out_of_bounds",
                                    params: {
                                        IX: b
                                    }
                                });
                                if (d > c) return Cs({
                                    AE: "out_of_bounds",
                                    params: {
                                        Lva: c
                                    }
                                })
                            }
                            return Bs()
                        }
                    },
                    kHc = function(a) {
                        return a === void 0 ? 1 : a === 0 ? Infinity : a
                    },
                    oHc = function(a, b, c) {
                        switch (a.type) {
                            case "select":
                                return new lHc(a, b, c);
                            case "text":
                                return new mHc(a, b, c);
                            case "number":
                                return new nHc(a, b, c);
                            default:
                                throw new A(a);
                        }
                    },
                    pHc = function(a) {
                        if (!u7(a, "q")) return 0;
                        const b = a.form.fields.first().id ? ? "",
                            c = v7(a, b, "select");
                        a = a.nBa.get(b);
                        return a ? .bM == null ? 0 : dHc(c.EG, a.bM) ? 2 : 1
                    },
                    v7 = function(a, b, c) {
                        let d = a.bZa.get(b);
                        const e =
                            a.form.fields.first(({
                                id: f
                            }) => f === b);
                        if (!e) throw Error(`Field ${b} is not found`);
                        if (c != null && e.type !== c) throw Error(`Field ${b} is not the expected type (${c})`);
                        d && d.Dd === e || (c = w7(() => a.KBa.get() ? .getContext(a.form.id) ? .T1b ? .get(b) ? ? a.nBa.get(b)), d = oHc(e, a.context, c), a.bZa.set(b, d));
                        return d
                    },
                    sHc = function(a) {
                        let b;
                        qHc(a.o0, () => {
                            b = a.vI ? .T4b({
                                W2b: () => a.form.ts
                            }).subscribe(c => {
                                x7(() => {
                                    a.o0.set(c.results)
                                })
                            })
                        });
                        rHc(a.o0, () => {
                            b ? .unsubscribe()
                        })
                    },
                    u7 = function(a, b) {
                        if (a.form.fields.count() !== 1) return !1;
                        const c = a.form.fields.first();
                        return c.type === "select" && (c.variant ? .type === b || c.variant ? .type === void 0 && a.form.type === (b === "q" ? "quiz" : "poll"))
                    },
                    uHc = function(a, {
                        AE: b,
                        F$a: c
                    }) {
                        const d = a.zg;
                        if (d) {
                            switch (b) {
                                case 5:
                                    b = J("STZx7Q");
                                    break;
                                default:
                                    b = J("izckBA")
                            }
                            c = c ? {
                                ML: J("mQhziQ"),
                                onClick: e7(() => void a.submit())
                            } : void 0;
                            d.MD({
                                yF: b,
                                group: tHc,
                                eH: c
                            })
                        }
                    },
                    vHc = function(a) {
                        return a.map(b => b.result)
                    },
                    xHc = function(a, b, c, d) {
                        const e = a !== b,
                            f = e ? a : n7(a, o7),
                            {
                                h: g,
                                s: h,
                                va: k
                            } = __c.xl(f);
                        var l = new __c.pl(g, h, k < 10 ? k + 6 : k - 6);
                        l = yl(l);
                        var m = new __c.pl(g, h, k < 10 ? k + 10 : k - 10);
                        m = yl(m);
                        return {
                            backgroundColor: b,
                            accentColor: f,
                            Clb: m7(f, e ? .5 : .12),
                            Blb: l,
                            Alb: m,
                            Dlb: m7(f, .4),
                            zM: OGc("#db142c", b),
                            ... function() {
                                const n = n7(f, o7);
                                return c ? {
                                    jyb: c,
                                    F4: c === f ? n : c,
                                    Glb: c === f ? n : c,
                                    yH: c,
                                    aga: c,
                                    lTa: yl(__c.Fl(__c.Bl(__c.vl(c), .8), __c.vl(b)))
                                } : {
                                    jyb: d ? .Sa === 1 ? n7(b, o7) : n7(a, o7),
                                    F4: n,
                                    Glb: e ? n7(a, o7) : a,
                                    yH: n7(b, o7),
                                    aga: n7(b, wHc),
                                    lTa: n7(b, o7)
                                }
                            }(),
                            vha: f,
                            ... function() {
                                if (c) return {
                                    e6: m7(c, .12),
                                    f6: m7(c, .3),
                                    uha: m7(c, .5),
                                    HY: m7(c, .1)
                                };
                                const n = OGc("#000000", b);
                                return {
                                    e6: m7(n,
                                        .08),
                                    f6: m7(n, .12),
                                    uha: m7(n, .5),
                                    HY: m7(n, .1)
                                }
                            }(),
                            ... function() {
                                if (c) return {
                                    $xa: m7(c, .6),
                                    bya: m7(c, .5),
                                    aya: m7(c, .5)
                                };
                                const n = OGc("#000000", b, 50),
                                    {
                                        h: p,
                                        s: q,
                                        va: r
                                    } = __c.xl(n);
                                var t = new __c.pl(p, q, r < 10 ? r + 6 : r - 6);
                                t = yl(t);
                                var v = new __c.pl(p, q, r < 10 ? r + 10 : r - 10);
                                v = yl(v);
                                return {
                                    $xa: m7(n, .6),
                                    bya: m7(t, .5),
                                    aya: m7(v, .5)
                                }
                            }()
                        }
                    },
                    yHc = function(a) {
                        switch (a) {
                            case "l":
                                return "ltr";
                            case "r":
                                return "rtl";
                            default:
                                throw new A(a);
                        }
                    },
                    AHc = function(a) {
                        return new zHc(a.data.D.value, a.Gr)
                    },
                    BHc = function(a, b) {
                        const c = y7(b);
                        b = a.wT.get(c);
                        if (a =
                            a.Nca.get(c)) return {
                            status: 1,
                            data: a
                        };
                        switch (b) {
                            case void 0:
                            case "uninitialized":
                                return b3();
                            case "initializing":
                                return {
                                    status: 2
                                };
                            case "initialized":
                                return {
                                    status: 1,
                                    data: a
                                };
                            default:
                                throw new A(b);
                        }
                    },
                    DHc = function(a) {
                        return z7(() => {
                            const b = a.formData.oG,
                                c = a.Gr.getSettings(b);
                            return [a.formData.ts, b, c]
                        }, async ([b, c, d]) => {
                            if (d.status === 1) {
                                var e = y7({
                                    ts: b,
                                    submitter: d.data.qMa
                                });
                                d = a.wT.get(e);
                                if (d !== "initialized" && d !== "initializing") {
                                    a.wT.set(e, "initializing");
                                    var f = await a.vI.$1b({
                                        ts: b,
                                        oG: c
                                    });
                                    x7(() => {
                                        a.wT.get(e) !==
                                            "initialized" && (a.wT.set(e, "initialized"), f.ok && f.value && a.Nca.set(e, f.value))
                                    })
                                }
                            }
                        }, {
                            equals: CHc.structural
                        })
                    },
                    y7 = function(a) {
                        return [a.ts, JSON.stringify(a.submitter)].join(":")
                    },
                    HHc = function(a) {
                        const b = a.title,
                            c = a.id,
                            d = a.fields,
                            e = a.Uha,
                            f = a.jba,
                            g = a.Tba,
                            h = a.borderColor,
                            k = a.Re,
                            l = a.W,
                            m = a.q2b,
                            [n, p] = [f, g].map(q => typeof q === "string" ? q : q.Bh[0].color || "#ffffff");
                        return {
                            minHeight: 500,
                            minWidth: 368,
                            id: c,
                            ts: __c.tq(),
                            oG: void 0,
                            type: "quiz",
                            Mi: 18,
                            Ej: 18,
                            direction: a.direction ? ? "l",
                            Uha: e,
                            jba: typeof f === "string" ? { ...ZD,
                                color: f
                            } : { ...ZD,
                                $a: f
                            },
                            Tba: typeof g === "string" ? { ...ZD,
                                color: g
                            } : { ...ZD,
                                $a: g
                            },
                            border: { ...__c.DEb,
                                color: h ? ? n,
                                weight: k ? ? 8
                            },
                            W: l ? ? 8,
                            wWa: {},
                            aDa: void 0,
                            title: b ? {
                                label: A7(b, {
                                    "font-size": 35.154,
                                    "font-weight": "bold",
                                    "text-align": "start",
                                    leading: 1200,
                                    color: n7(n, o7),
                                    "font-family": e,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on"
                                }),
                                bJ: "c"
                            } : void 0,
                            header: {
                                Jaa: 1.953,
                                Aq: 1.953,
                                Bq: 1.953,
                                Jt: .64,
                                background: EHc
                            },
                            A_: !1,
                            ara: !1,
                            fields: d.map(q => FHc(q, p, e)).slice(0, uc("5684dca7",
                                10)),
                            ES: {
                                Bq: 1.953,
                                Aq: 1.953,
                                Jt: .64
                            },
                            footer: {
                                label: {
                                    type: "text2",
                                    text: A7(m.slice(0, uc("f368b7e8", 250)), {
                                        "text-align": "center",
                                        "font-weight": "bold",
                                        color: n === p ? p : n7(n, o7),
                                        "font-size": GHc,
                                        "font-family": e,
                                        "font-kerning": "normal",
                                        "font-feature-liga": "on",
                                        "font-feature-clig": "on",
                                        "font-feature-calt": "on"
                                    })
                                },
                                bJ: void 0,
                                Jt: 1.953,
                                Aq: 1.953,
                                Bq: 1.953,
                                Kaa: .512
                            }
                        }
                    },
                    FHc = function(a, b, c) {
                        const d = {
                            label: {
                                type: "text2",
                                text: A7(a.label.slice(0, uc("f368b7e8", 250)), IHc(b, c))
                            },
                            DEa: 1,
                            required: a.required,
                            id: __c.tq(),
                            bJ: "c",
                            W: 8
                        };
                        switch (a.type) {
                            case "select":
                                const e = [],
                                    f = a.options.map((g, h) => {
                                        var k = __c.tq();
                                        g = g.slice(0, uc("f368b7e8", 250));
                                        var l = {
                                            color: n7(b, o7),
                                            "font-size": 18,
                                            "font-family": c,
                                            "font-kerning": "normal",
                                            "font-feature-liga": "on",
                                            "font-feature-clig": "on",
                                            "font-feature-calt": "on"
                                        };
                                        k = {
                                            id: k,
                                            label: {
                                                type: "text2",
                                                text: A7(g, l)
                                            }
                                        };
                                        a.variant.type === 2 && a.variant.iYb.includes(h) && k.id && e.push(k.id);
                                        return k
                                    });
                                return { ...d,
                                    type: "select",
                                    B0: a.o$b ? 0 : 1,
                                    variant: JHc(a.variant),
                                    gya: e,
                                    options: f.slice(0, uc("55264882", 10))
                                };
                            case "text":
                                return { ...d,
                                    type: "text",
                                    placeholder: a.placeholder,
                                    variant: KHc(a.variant)
                                };
                            case "number":
                                return { ...d,
                                    type: "number",
                                    variant: LHc(a.variant),
                                    ...MHc(a.min, a.max, a.variant)
                                };
                            default:
                                throw new A(a);
                        }
                    },
                    MHc = function(a, b, c) {
                        switch (c.type) {
                            case 1:
                                return b && a && b < a ? {
                                    min: b,
                                    max: a
                                } : {
                                    min: a,
                                    max: b
                                };
                            case 2:
                                return a = Math.max(1, a ? ? 1), b = Math.min(5, b ? ? 5), {
                                    min: Math.min(a, b),
                                    max: Math.max(a, b)
                                };
                            case 3:
                                return {
                                    min: 1,
                                    max: Math.max(1, Math.min(10, b ? ? 10))
                                };
                            case 4:
                                return a = Math.max(1, a ? ? 1), b = Math.min(10, b ? ? 10), {
                                    min: Math.min(a, b),
                                    max: Math.max(a,
                                        b)
                                };
                            default:
                                throw new A(c);
                        }
                    },
                    JHc = function(a) {
                        switch (a.type) {
                            case 2:
                                return {
                                    type: "q"
                                };
                            case 3:
                                return {
                                    type: "r"
                                };
                            case 1:
                                return {
                                    type: "p"
                                };
                            default:
                                throw new A(a);
                        }
                    },
                    KHc = function(a) {
                        switch (a.type) {
                            case 1:
                                return {
                                    type: "e"
                                };
                            case 2:
                                return {
                                    type: "f",
                                    VN: a.q4b ? 1 : 3
                                };
                            default:
                                throw new A(a);
                        }
                    },
                    LHc = function(a) {
                        switch (a.type) {
                            case 1:
                                return {
                                    type: "a"
                                };
                            case 2:
                                return {
                                    type: "b"
                                };
                            case 3:
                                return {
                                    type: "c"
                                };
                            case 4:
                                return {
                                    type: "d"
                                };
                            default:
                                throw new A(a);
                        }
                    },
                    IHc = function(a, b) {
                        return {
                            color: n7(a, o7),
                            "font-size": 18,
                            "font-family": b,
                            "font-weight": "semibold",
                            "font-kerning": "normal",
                            "font-feature-liga": "on",
                            "font-feature-clig": "on",
                            "font-feature-calt": "on"
                        }
                    };
                __c.mA.prototype.aIa = __c.fa(18, function() {
                    return __c.hA(this, () => __c.Uz(this.operators, "%", this.value))
                });
                var B7 = __webpack_require__(186901),
                    w7 = B7.EW,
                    x7 = B7.h5,
                    NHc = B7.L3,
                    CHc = B7.m3,
                    z7 = B7.mJ,
                    OHc = B7.O8,
                    rHc = B7.q$,
                    C7 = B7.sH,
                    qHc = B7.tC,
                    e7 = B7.XI;
                var PHc = __webpack_require__(322594),
                    f7 = PHc.jsx,
                    s7 = PHc.jsxs;
                var QHc = __webpack_require__,
                    RHc = QHc(208463),
                    g7 = QHc.n_x(RHc)();
                var D7 = __webpack_require__(205482),
                    HGc = D7.Children,
                    SHc = D7.createElement,
                    THc = D7.useEffect,
                    q7 = D7.useId,
                    JGc = D7.useLayoutEffect,
                    p7 = D7.useMemo,
                    IGc = D7.useRef,
                    l7 = D7.useState;
                var E7 = __webpack_require__(721226).PA;
                var LGc = __webpack_require__(87387).A;
                var KGc = __webpack_require__(34741).A;
                var UHc = __webpack_require__(536618).iB;
                var VHc = a => tb("JWYKDQ", [a]),
                    WHc = () => J("jh7u2w"),
                    XHc = a => tb("Jj1O+A", [a]),
                    YHc = a => tb("sUWUOA", [a]),
                    ZHc = a => tb("Q5Pg4w", [a]),
                    $Hc = a => tb("4EBAAA", [a]),
                    aIc = () => J("orPgUw"),
                    bIc = () => J("WjcAyg"),
                    cIc = () => J("CV+PYA"),
                    dIc = () => J("As1GTA"),
                    eIc = () => J("xSH8Og"),
                    fIc = () => J("wutQEA"),
                    gIc = a => tb("Qso6Xw", [a]),
                    hIc = () => J("z/bN8g"),
                    iIc = a => tb("Aa3fvQ", [a]),
                    jIc = () => J("2Q9Q+A"),
                    kIc = a => tb("6QpLYA", [a]),
                    lIc = a => tb("SWeX4Q", [a]),
                    mIc = () => J("nFbxIQ"),
                    nIc = () => J("ktnWSg"),
                    oIc = a => tb("U28wGg", [a]),
                    pIc = () => J("VGvKlQ"),
                    qIc = a => tb("kbfbNQ", [a]),
                    rIc = () => J("fNQh9A"),
                    sIc = () => J("i3mNPA"),
                    tIc = () => J("zt/K0Q"),
                    uIc = () => J("pT68JA"),
                    vIc = () => J("g7pHPw");
                var F7 = 0,
                    G7 = {
                        RAa: F7++,
                        MAa: F7++,
                        TAa: F7++,
                        C$a: F7++,
                        YAa: F7++,
                        QAa: F7++,
                        OAa: F7++,
                        lPa: F7++,
                        lDa: F7++,
                        wJa: F7++,
                        rMa: F7++,
                        WAa: F7++,
                        LAa: F7++,
                        PAa: F7++,
                        loading: F7++,
                        $Fa: F7++,
                        uGa: F7++,
                        XAa: F7++,
                        offline: F7++,
                        SAa: F7++,
                        ZFa: F7++,
                        VAa: F7++,
                        UAa: F7++,
                        NAa: F7++,
                        fya: F7++,
                        ZAa: F7++,
                        cIa: F7++,
                        mPa: F7++
                    },
                    wIc = class {
                        static G(a) {
                            L(a, {
                                mW: C7.shallow
                            })
                        }
                        getText(a, b, c) {
                            a = this.mW ? .[a];
                            c ? .length ? a ? (b = this.document.language, c = (new __c.vb(a, b ? __c.Jaa(b) : void 0, __c.Kaa, {
                                    ignoreTag: !0
                                })).format(Object.fromEntries(Object.entries(c)))) : c = b(...c) :
                                c = a || b();
                            return c
                        }
                        UAa(...a) {
                            return this.getText(G7.UAa, qIc, a)
                        }
                        OAa() {
                            return this.getText(G7.OAa, aIc)
                        }
                        fya() {
                            return this.getText(G7.fya, sIc)
                        }
                        lDa() {
                            return this.getText(G7.lDa, dIc)
                        }
                        wJa() {
                            return this.getText(G7.wJa, eIc)
                        }
                        uGa(...a) {
                            return this.getText(G7.uGa, kIc, a)
                        }
                        C$a(...a) {
                            return this.getText(G7.C$a, YHc, a)
                        }
                        offline() {
                            return this.getText(G7.offline, mIc)
                        }
                        loading() {
                            return this.getText(G7.loading, jIc)
                        }
                        rMa() {
                            return this.getText(G7.rMa, fIc)
                        }
                        mPa() {
                            return this.getText(G7.mPa, uIc)
                        }
                        lPa() {
                            return this.getText(G7.lPa,
                                bIc)
                        }
                        ZFa() {
                            return this.getText(G7.ZFa, vIc)
                        }
                        $Fa() {
                            return this.getText(G7.$Fa, cIc)
                        }
                        cIa() {
                            return this.getText(G7.cIa, pIc)
                        }
                        SAa() {
                            return this.getText(G7.SAa, nIc)
                        }
                        ZAa() {
                            return this.getText(G7.ZAa, tIc)
                        }
                        NAa() {
                            return this.getText(G7.NAa, rIc)
                        }
                        MAa() {
                            return this.getText(G7.MAa, WHc)
                        }
                        WAa(...a) {
                            return this.getText(G7.WAa, gIc, a)
                        }
                        YAa(...a) {
                            return this.getText(G7.YAa, ZHc, a)
                        }
                        XAa(...a) {
                            return this.getText(G7.XAa, lIc, a)
                        }
                        PAa(...a) {
                            return this.getText(G7.PAa, iIc, a)
                        }
                        RAa(...a) {
                            return this.getText(G7.RAa, VHc, a)
                        }
                        QAa(...a) {
                            return this.getText(G7.QAa,
                                $Hc, a)
                        }
                        TAa(...a) {
                            return this.getText(G7.TAa, XHc, a)
                        }
                        VAa(...a) {
                            return this.getText(G7.VAa, oIc, a)
                        }
                        LAa() {
                            return this.getText(G7.LAa, hIc)
                        }
                        constructor(a) {
                            this.document = a;
                            this.mW = (wIc.G(this), void 0);
                            z7(() => a.language, () => CGc(this), {
                                fireImmediately: !0
                            })
                        }
                    };
                var xIc = class extends wIc {};
                var yIc = C0.mi({
                        type: C0.kj(46, "text2"),
                        text: C0.Im(2423, "Richtext2")
                    }),
                    zIc = C0.s3({
                        type: void 0
                    }, yIc),
                    AIc = {
                        id: C0.Bz(35),
                        DEa: C0.Oj(37),
                        label: C0.ref(38, zIc),
                        bJ: C0.qC(2430, "c", "u"),
                        W: C0.Oj(29),
                        required: C0.Caa(2331)
                    },
                    BIc = C0.mi({
                        id: C0.Bz(35),
                        label: C0.ref(38, zIc)
                    }),
                    CIc = C0.mi({
                        type: C0.kj(46, "r")
                    }),
                    DIc = C0.mi({
                        type: C0.kj(46, "p")
                    }),
                    EIc = C0.mi({
                        type: C0.kj(46, "q")
                    }),
                    FIc = C0.s3({
                        type: void 0
                    }, CIc, DIc, EIc),
                    GIc = C0.mi({ ...AIc,
                        type: C0.kj(46, "select"),
                        variant: C0.o7a(48, FIc),
                        options: C0.listRef(41, BIc),
                        B0: C0.YGb(39, {
                            min: 0
                        }),
                        gya: C0.wSa(1549, C0.lMa())
                    }),
                    HIc = C0.mi({
                        type: C0.kj(46, "e")
                    }),
                    IIc = C0.mi({
                        type: C0.kj(46, "f"),
                        VN: C0.hF(40, {
                            min: 1
                        })
                    }),
                    JIc = C0.s3({
                        type: void 0
                    }, HIc, IIc),
                    KIc = C0.mi({ ...AIc,
                        type: C0.kj(46, "text"),
                        variant: C0.ref(48, JIc),
                        placeholder: C0.Bz(42)
                    }),
                    LIc = C0.mi({
                        type: C0.kj(46, "a")
                    }),
                    MIc = C0.mi({
                        type: C0.kj(46, "b")
                    }),
                    NIc = C0.mi({
                        type: C0.kj(46, "c")
                    }),
                    OIc = C0.mi({
                        type: C0.kj(46, "d")
                    }),
                    PIc = C0.s3({
                        type: void 0
                    }, LIc, MIc, NIc, OIc),
                    QIc = C0.mi({ ...AIc,
                        type: C0.kj(46, "number"),
                        variant: C0.ref(48, PIc),
                        min: C0.Oj(1),
                        max: C0.Oj(2)
                    }),
                    RIc = C0.s3({
                            type: void 0
                        },
                        KIc, GIc, QIc),
                    SIc = C0.mi({
                        Aq: C0.Oj(1),
                        Bq: C0.Oj(2),
                        Jt: C0.Oj(3)
                    }),
                    TIc = C0.mi({
                        label: C0.ref(38, zIc),
                        bJ: C0.qC(2, "c", "u"),
                        Jt: C0.Oj(3),
                        Aq: C0.Oj(4),
                        Bq: C0.Oj(5),
                        Kaa: C0.Oj(6)
                    }),
                    UIc = C0.mi({
                        Jaa: C0.Oj(1),
                        Jt: C0.Oj(2),
                        Bq: C0.Oj(3),
                        Aq: C0.Oj(4),
                        background: C0.m7a(5, "Fill")
                    }),
                    VIc = C0.mi({
                        Mi: C0.Oj(4),
                        Ej: C0.Oj(5),
                        minHeight: C0.Oj(2062),
                        minWidth: C0.Oj(2077),
                        type: C0.kj(46, "poll", "quiz"),
                        id: C0.Kx(35),
                        ts: C0.Kx(45),
                        oG: C0.Bz(27),
                        direction: C0.qC(44, "l", "r"),
                        Uha: C0.Bz(30),
                        jba: C0.Im(2216, "Fill"),
                        Tba: C0.Im(2372, "Fill"),
                        border: C0.Im(28,
                            "Stroke"),
                        W: C0.Oj(29),
                        A_: C0.Caa(1802),
                        aDa: C0.Caa(9),
                        ara: C0.Caa(52),
                        wWa: C0.o7a(34, C0.mi({})),
                        title: C0.moa(36, {
                            label: C0.Im(1, "Richtext2"),
                            bJ: C0.tma(2430, "c", "u")
                        }),
                        header: C0.moa(1, UIc.fields),
                        fields: C0.listRef(32, RIc),
                        ES: C0.moa(6, SIc.fields),
                        footer: C0.moa(1705, TIc.fields)
                    }),
                    WIc = __c.m_({
                        type: C0.kj(37, "poll", "quiz"),
                        value: C0.ref(48, VIc)
                    });
                var A7 = (a, b) => ({ ...__c.kk,
                        stream: Vg.Mb().attrs({ ...b,
                            "font-kerning": "normal",
                            "font-feature-liga": "on",
                            "font-feature-clig": "on",
                            "font-feature-calt": "on"
                        }).mb(a).wq().build()
                    }),
                    r7 = (a, b) => jk.create(A7(a, b)),
                    XIc = {
                        thin: "thin",
                        extralight: "thin",
                        light: "thin",
                        normal: "extralight",
                        medium: "normal",
                        semibold: "normal",
                        bold: "normal",
                        ultrabold: "normal",
                        heavy: "normal"
                    };
                var YIc = 14 * __c.TS / 16,
                    EHc = { ...ZD,
                        Sa: 1
                    };
                J("1Vvt4w");
                __c.tq();
                J("4qFSiQ");
                J("W5ifXQ");
                J("8qLU3g");
                J("vuVf+w");
                J("7IUw4A");
                J("hblGCQ");
                J("0ICFJA");
                var t7 = __c.Tx.QYa ? {
                    statusText: "1t7jg8u",
                    $ub: "36iimsp",
                    pHb: "1a1nvnm",
                    label: "32aek6n",
                    b_b: "2tk7d5",
                    Idc: "2n1bnv6",
                    p2b: "2na0kmu",
                    r3b: "3qf811p",
                    q3b: "246bpa8",
                    Ucc: "3p3qlie",
                    c_b: "3tchg28"
                } : {};
                var H7 = E7(a => {
                    const {
                        Dd: b,
                        Be: c,
                        ap: d,
                        errorMessage: e,
                        AM: f,
                        F8: g = !0
                    } = a, h = c.$j, k = b.label.stream.To("font-family")["font-family"];
                    var l = b.label.stream.To("direction").direction;
                    const m = g ? "fieldset" : "div",
                        n = g ? "legend" : "label";
                    l = l.values().next().value ? ? "ltr";
                    return s7(m, {
                        className: "_4ILOcQ",
                        onTouchEnd: p => {
                            p.stopPropagation()
                        },
                        dir: l,
                        children: [b.$cb && f7(n, {
                                htmlFor: g ? void 0 : a.N7,
                                "data-testid": t7.label,
                                style: {
                                    paddingBlockEnd: `${b.padding.ABb}px`
                                },
                                children: f7(h, {
                                    text: d.required ? GGc(b.label) : b.label
                                })
                            }), a.children,
                            e && f7("div", {
                                id: f,
                                className: "o_7gvw",
                                style: {
                                    "--wfznTw": b.Ej,
                                    "--qMNgbA": b.Mi * 1.5
                                },
                                role: "alert",
                                children: f7(h, {
                                    text: r7(e ? ? "", {
                                        "font-family": k.values().next().value,
                                        direction: l,
                                        "font-size": b.bub,
                                        color: b.zM,
                                        "text-align": "end"
                                    })
                                })
                            })
                        ]
                    })
                });
                var ZIc = E7(a => {
                    const b = a.Dd,
                        c = a.Be,
                        d = a.ap,
                        e = a.gC,
                        f = a.Nr,
                        g = d.EG,
                        h = q7(),
                        k = __c.z(d.min);
                    a = __c.z(d.max);
                    x(k >= 1);
                    x(a <= 10);
                    a = Array.from({
                        length: a - k + 1
                    }, (n, p) => ({
                        PKb: p + k
                    }));
                    const l = k7(e, d.QK, b),
                        m = q7();
                    return f7(H7, {
                        Dd: b,
                        Be: c,
                        ap: d,
                        errorMessage: l,
                        AM: m,
                        F8: !0,
                        children: f7(MGc, {
                            yEa: b.sizes.Lwa,
                            gridGap: b.gridGap,
                            children: a.map(({
                                PKb: n
                            }) => {
                                var p = Number(g);
                                const q = `${h}-${n}`,
                                    r = f !== h7 ? void 0 : e7(() => {
                                        d.Iu = String(n);
                                        d.Zy = !0
                                    });
                                p = p === n;
                                return s7("div", {
                                    className: g7("dAwWRA", f === h7 && !p && "oKt_Cg", (f === i7 || f === j7) && "HLJxlw",
                                        p && "kpt6Eg"),
                                    style: {
                                        borderRadius: b.W,
                                        padding: `${b.padding.Pa}px`,
                                        "--dayejg": b.backgroundColor.default,
                                        "--1PG0Mg": b.backgroundColor.Lg,
                                        "--9P_0YQ": b.backgroundColor.active,
                                        "--1y49lg": b.backgroundColor.selected,
                                        "---3Rdqg": b.backgroundColor.Rm,
                                        "--Cjk51Q": b.accentColor
                                    },
                                    onClick: r,
                                    children: [f7("input", {
                                        "aria-invalid": !!l,
                                        "aria-describedby": l ? m : void 0,
                                        checked: p,
                                        type: "radio",
                                        id: q,
                                        name: h,
                                        value: n,
                                        className: "Mh7mQg",
                                        onChange: r,
                                        disabled: f === j7,
                                        readOnly: f === i7
                                    }), f7("label", {
                                        htmlFor: q,
                                        className: "_1TTelg",
                                        children: f7(c.$j, {
                                            text: r7(String(n), {
                                                "font-family": Uf(mg, b.label.stream.$g(0), "font-family"),
                                                color: p ? b.hd.selected : b.hd.default,
                                                "text-align": "center",
                                                "font-size": b.sizes.a6
                                            })
                                        })
                                    })]
                                }, n)
                            })
                        })
                    })
                });
                var $Ic = [{
                        U$: 1,
                        cb: ({
                            size: a,
                            color: b
                        }) => s7("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            width: a,
                            height: a,
                            children: [f7("path", {
                                    fill: b,
                                    d: "M12 13.25c2.492 0 3.806 1.625 4.545 3.144l.14.301.028.072a.75.75 0 0 1-1.363.606l-.035-.068-.12-.26C14.571 15.762 13.65 14.75 12 14.75c-1.76 0-2.69 1.151-3.314 2.555a.75.75 0 0 1-1.372-.61C8.024 15.1 9.342 13.25 12 13.25ZM9.402 9.548a.749.749 0 1 1 1.196.904c-.449.593-1.655 1.473-3.389 1.269l-.354-.056-.074-.018a.75.75 0 0 1 .287-1.465l.31.047c1.14.135 1.848-.448 2.024-.681Zm4.146-.146a.75.75 0 0 1 1.05.146c.176.233.885.816 2.024.681l.31-.047a.75.75 0 0 1 .287 1.464l-.075.019-.353.056c-1.734.204-2.94-.676-3.389-1.269a.75.75 0 0 1 .146-1.05Z"
                                }),
                                f7("path", {
                                    fill: b,
                                    "fill-rule": "evenodd",
                                    d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                                    "clip-rule": "evenodd"
                                })
                            ]
                        }),
                        label: J("3Spodw")
                    }, {
                        U$: 2,
                        cb: ({
                            size: a,
                            color: b
                        }) => s7("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: a,
                            height: a,
                            children: [f7("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M12.001 21.802c-5.405 0-9.801-4.397-9.801-9.801S6.596 2.2 12 2.2s9.801 4.396 9.801 9.801-4.397 9.801-9.801 9.801ZM16.188 9.97a1.011 1.011 0 1 1-2.022 0 1.011 1.011 0 0 1 2.022 0Zm-7.363 1.011a1.011 1.011 0 1 0 0-2.022 1.011 1.011 0 0 0 0 2.022ZM3.7 12.001C3.7 7.424 7.424 3.7 12 3.7s8.301 3.724 8.301 8.301-3.724 8.301-8.301 8.301S3.7 16.578 3.7 12.001Z",
                                fill: b
                            }), f7("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M12.009 14.458c-1.554 0-2.97.817-3.9 2.15a.875.875 0 0 1-1.436-1c1.213-1.74 3.137-2.9 5.336-2.9 2.2 0 4.123 1.16 5.336 2.9a.875.875 0 0 1-1.435 1c-.93-1.333-2.347-2.15-3.901-2.15Z",
                                fill: b
                            })]
                        }),
                        label: J("bqTQmw")
                    }, {
                        U$: 3,
                        cb: ({
                            size: a,
                            color: b
                        }) => s7("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            width: a,
                            height: a,
                            children: [f7("path", {
                                    fill: b,
                                    d: "M16 14.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h8ZM8.825 8.959a1.012 1.012 0 1 1 0 2.024 1.012 1.012 0 0 1 0-2.024Zm6.352 0a1.012 1.012 0 1 1 0 2.023 1.012 1.012 0 0 1 0-2.023Z"
                                }),
                                f7("path", {
                                    fill: b,
                                    "fill-rule": "evenodd",
                                    d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                                    "clip-rule": "evenodd"
                                })
                            ]
                        }),
                        label: J("k/uS7g")
                    }, {
                        U$: 4,
                        cb: ({
                            size: a,
                            color: b
                        }) => f7("svg", {
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: a,
                            height: a,
                            children: f7("path", {
                                "fill-rule": "evenodd",
                                fill: b,
                                d: "M12.001 21.802C6.59595 21.802 2.19995 17.405 2.19995 12.001C2.19995 6.59695 6.59595 2.19995 12.001 2.19995C17.406 2.19995 21.802 6.59595 21.802 12.001C21.802 17.406 17.405 21.802 12.001 21.802ZM16.188 9.96995C16.188 10.5283 15.7353 10.981 15.177 10.981C14.6186 10.981 14.166 10.5283 14.166 9.96995C14.166 9.41159 14.6186 8.95895 15.177 8.95895C15.7353 8.95895 16.188 9.41159 16.188 9.96995ZM8.82495 10.981C9.38331 10.981 9.83595 10.5283 9.83595 9.96998C9.83595 9.41162 9.38331 8.95898 8.82495 8.95898C8.26659 8.95898 7.81395 9.41162 7.81395 9.96998C7.81395 10.5283 8.26659 10.981 8.82495 10.981ZM16.235 13.164C14.498 16.944 9.57695 17.018 7.76595 13.259C7.27595 12.242 5.76695 13.13 6.25495 14.142C8.60795 19.026 15.478 18.984 17.747 14.047C18.215 13.029 16.706 12.139 16.235 13.164ZM3.69995 12.001C3.69995 7.42395 7.42395 3.69995 12.001 3.69995C16.578 3.69995 20.302 7.42395 20.302 12.001C20.302 16.578 16.578 20.302 12.001 20.302C7.42395 20.302 3.69995 16.578 3.69995 12.001Z"
                            })
                        }),
                        label: J("ssYkyg")
                    }, {
                        U$: 5,
                        cb: ({
                            size: a,
                            color: b
                        }) => s7("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            width: a,
                            height: a,
                            children: [f7("path", {
                                    fill: b,
                                    "fill-rule": "evenodd",
                                    d: "M17.799 12.277a.752.752 0 0 1 .951.723c0 3.298-3.156 5.75-6.75 5.75S5.25 16.298 5.25 13a.75.75 0 0 1 .951-.723l.005.002.023.006.094.025c.084.021.208.053.366.09.318.076.775.178 1.323.28 1.1.204 2.551.403 3.988.403 1.437 0 2.887-.2 3.988-.403a26.84 26.84 0 0 0 1.689-.37l.093-.025.024-.006.005-.002Zm-1.537 1.877c-1.15.213-2.699.429-4.262.429-1.563 0-3.113-.216-4.262-.429-.31-.057-.594-.116-.842-.17.54 1.804 2.527 3.266 5.104 3.266s4.563-1.462 5.102-3.266c-.247.054-.53.113-.84.17Z",
                                    "clip-rule": "evenodd"
                                }), f7("path", {
                                    fill: b,
                                    d: "M8.55 8.25c.625 0 1.125.166 1.531.444.291.2.51.443.679.664l.154.212.041.065a.75.75 0 0 1-1.223.855l-.046-.06-.119-.161a1.51 1.51 0 0 0-.336-.338c-.14-.097-.34-.181-.681-.181s-.542.084-.682.18c-.157.109-.29.266-.454.5a.75.75 0 0 1-1.228-.86c.186-.266.444-.609.833-.876.405-.278.906-.444 1.53-.444Zm6.9 0c.625 0 1.126.166 1.531.444.291.2.51.443.68.664l.153.212.041.065a.75.75 0 0 1-1.222.855l-.047-.06-.118-.161a1.512 1.512 0 0 0-.336-.338c-.14-.097-.34-.18-.682-.181-.34 0-.541.084-.681.18-.158.109-.29.266-.454.5a.75.75 0 0 1-1.23-.86c.187-.266.446-.609.834-.876.406-.278.906-.444 1.531-.444Z"
                                }),
                                f7("path", {
                                    fill: b,
                                    "fill-rule": "evenodd",
                                    d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                                    "clip-rule": "evenodd"
                                })
                            ]
                        }),
                        label: J("WKDtIg")
                    }],
                    aJc = E7(a => {
                        const b = a.Dd,
                            c = a.Be,
                            d = a.ap,
                            e = a.gC,
                            f = a.Nr,
                            g = d.EG;
                        x(d.min != null && d.min >= 1);
                        x(d.max != null && d.max <= 5);
                        a = $Ic.slice(d.min - 1, d.max);
                        const h = k7(e, d.QK, b),
                            k = q7(),
                            l = q7();
                        return f7(H7, {
                            Dd: b,
                            Be: c,
                            ap: d,
                            errorMessage: h,
                            AM: k,
                            F8: !0,
                            children: f7(MGc, {
                                yEa: b.sizes.Lwa,
                                gridGap: b.gridGap,
                                children: a.map(({
                                    U$: m,
                                    cb: n,
                                    label: p
                                }) => {
                                    const q = Number(g),
                                        r = g === String(m),
                                        t = `${l}-${m}`,
                                        v = f === i7 || f === j7 ? void 0 : e7(() => {
                                            d.Iu = String(m)
                                        });
                                    return s7("div", {
                                        className: g7("r4VAMw", r && "jc6y_A", (f === i7 || f === j7) && "UpIThA", f === h7 && !r && "SMPq5g"),
                                        style: {
                                            "--hMlWEg": b.backgroundColor.default,
                                            "---127VA": b.backgroundColor.Lg,
                                            "--9x4z1A": b.backgroundColor.active,
                                            "--W5Lfog": b.backgroundColor.selected,
                                            "--GtGNYg": b.backgroundColor.Rm,
                                            "--r8_7Tw": b.accentColor,
                                            borderRadius: b.W,
                                            padding: `${b.padding.Pa}px`
                                        },
                                        onClick: v,
                                        children: [f7("input", {
                                            "aria-invalid": !!h,
                                            "aria-describedby": h ? k : void 0,
                                            checked: q === m,
                                            type: "radio",
                                            id: t,
                                            name: l,
                                            value: m,
                                            className: "Mh7mQg",
                                            onChange: v,
                                            disabled: f === j7,
                                            readOnly: f === i7
                                        }), f7("label", {
                                            htmlFor: t,
                                            className: "Mh7mQg",
                                            children: f7("span", {
                                                children: p
                                            })
                                        }), f7("div", {
                                            className: "aOiRWQ",
                                            style: {
                                                width: b.sizes.Rc,
                                                height: b.sizes.Rc
                                            },
                                            children: f7(n, {
                                                size: b.sizes.Rc,
                                                color: r ? b.E_.selected : b.E_.default
                                            })
                                        })]
                                    }, m)
                                })
                            })
                        })
                    });
                var o7 = ["#000000", "#ffffff"];
                var bJc = E7(a => {
                    const b = a.Dd,
                        c = a.Be,
                        d = a.ap,
                        e = a.Nr;
                    var f = a.gC;
                    a = d.EG;
                    const g = c.Kea,
                        h = !!d.QK,
                        k = q7(),
                        l = p7(() => h ? {
                            default: b.borderColor.error,
                            Lg: b.borderColor.error,
                            focus: b.borderColor.error
                        } : e === h7 || e === I7 ? {
                            default: b.borderColor.default,
                            Lg: b.borderColor.Lg,
                            focus: b.borderColor.focus
                        } : {
                            default: b.borderColor.default,
                            Lg: b.borderColor.default,
                            focus: b.borderColor.default
                        }, [b.borderColor.default, b.borderColor.error, b.borderColor.focus, b.borderColor.Lg, e, h]),
                        m = b.label.stream.$g(0),
                        n = XIc[Uf(mg, m, "font-weight")];
                    f = k7(f, d.QK, b);
                    const p = q7();
                    return f7(H7, {
                        Dd: b,
                        Be: c,
                        ap: d,
                        errorMessage: f,
                        AM: k,
                        F8: !1,
                        N7: p,
                        children: s7("div", {
                            className: "ybpBnQ",
                            children: [f7(g, {
                                boxSizing: "border-box",
                                id: p,
                                type: "text",
                                inputMode: "numeric",
                                CBa: Uf(mg, m, "font-family"),
                                fontSize: `${b.sizes.a6}px`,
                                ij: b.hd,
                                fontWeight: n,
                                value: a ? ? "",
                                name: b.id,
                                backgroundColor: "transparent",
                                borderStyle: "solid",
                                outline: "none",
                                borderWidth: b.sizes.qwa,
                                owa: l,
                                borderRadius: b.W,
                                ariaInvalid: h,
                                paddingInlineEnd: h ? b.sizes.Rc * 1.5 : void 0,
                                Ec: h ? k : void 0,
                                onChange: e7(q => {
                                    d.Iu =
                                        q.target.value
                                }),
                                onBlur: e7(() => {
                                    d.Zy = !0
                                }),
                                padding: b.padding.Pa,
                                readOnly: e === i7,
                                disabled: e === j7,
                                width: "100%"
                            }), h && f7("div", {
                                className: "_3v99oA",
                                style: {
                                    "--3tgqzg": `${b.sizes.Rc*.4}px`
                                },
                                children: f7(PGc, {
                                    size: b.sizes.Rc
                                })
                            })]
                        })
                    })
                });
                var UGc = 10 / 14,
                    cJc = E7(a => {
                        const b = a.Dd,
                            c = a.Be,
                            d = a.ap,
                            e = a.Nr,
                            f = a.NCa;
                        a = a.gC;
                        const g = b.options,
                            {
                                EG: h = [],
                                feedback: k
                            } = d,
                            l = q7(),
                            m = q7(),
                            n = w7(() => k.get() ? .bM),
                            p = w7(() => k.get() ? .uIb),
                            q = k7(a, d.QK, b),
                            r = e === h7 || e === I7;
                        return f7(H7, {
                            Dd: b,
                            Be: c,
                            ap: d,
                            errorMessage: q,
                            AM: l,
                            children: f7("div", {
                                className: "iaCeXQ",
                                style: {
                                    gridGap: `${b.rowGap}px`
                                },
                                children: g.map(t => {
                                    var v = h.includes(t.id);
                                    const w = {
                                        gqa: b.gqa,
                                        Nub: `select-${m}`,
                                        W: b.W,
                                        label: t.label,
                                        background: b.Cz,
                                        gi: v,
                                        okb: c.$j,
                                        AM: q ? l : void 0,
                                        cHb: b.padding.Pa,
                                        Fob: b.sizes.xob,
                                        Gob: b.sizes.zob,
                                        qxa: b.sizes.qxa,
                                        Rc: b.sizes.Rc,
                                        Nr: e
                                    };
                                    switch (b.type) {
                                        case 1:
                                            var y = p.get();
                                            y = y ? Math.round(100 * (y.bbc.get(t.id) ? ? 0) / (y.total || 1)) : void 0;
                                            return SHc(SGc, { ...w,
                                                key: t.id,
                                                backgroundColor: {
                                                    default: y != null ? b.bOa.track : b.Cz.default,
                                                    Lg: b.Cz.Lg,
                                                    active: b.Cz.active,
                                                    selected: y != null ? b.WOa.track : b.Cz.selected
                                                },
                                                CEa: v ? b.rC.selected : r ? void 0 : b.rC.Rm,
                                                E_: v ? b.rC.selected : b.rC.default,
                                                aIa: y != null ? {
                                                    value: y,
                                                    Xmb: v ? b.WOa.CL : b.bOa.CL,
                                                    hd: v ? b.WOa.text : b.bOa.text
                                                } : void 0,
                                                onChange: e7(() => {
                                                    d.UMa(t.id);
                                                    d.Zy = !0;
                                                    f ? .()
                                                })
                                            });
                                        case 2:
                                            return v = n.get(), v = v == null ? 0 : v.includes(t.id) ? w.gi ? 4 : 2 : w.gi ? 3 : 1, SHc(TGc, { ...w,
                                                key: t.id,
                                                Cz: b.Cz,
                                                rC: b.rC,
                                                fub: v,
                                                onChange: e7(() => {
                                                    d.UMa(t.id);
                                                    d.Zy = !0
                                                })
                                            });
                                        case 3:
                                            return SHc(SGc, { ...w,
                                                key: t.id,
                                                onChange: e7(() => {
                                                    d.UMa(t.id);
                                                    d.Zy = !0
                                                }),
                                                E_: v ? b.rC.selected : b.rC.default,
                                                CEa: v ? b.rC.selected : r ? void 0 : b.rC.Rm,
                                                backgroundColor: {
                                                    default: b.Cz.default,
                                                    selected: b.Cz.selected,
                                                    Lg: b.Cz.Lg,
                                                    active: b.Cz.active
                                                }
                                            });
                                        default:
                                            throw new A(b);
                                    }
                                })
                            })
                        })
                    }),
                    QGc = a => f7("div", {
                        id: a.id,
                        className: "_5MHe6g",
                        "aria-label": J("i3mNPA"),
                        children: s7("svg", {
                            width: a.size,
                            height: a.size,
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "gBYSAw",
                            children: [f7("rect", {
                                width: "16",
                                height: "16",
                                rx: "8",
                                fill: "white"
                            }), f7("rect", {
                                width: "16",
                                height: "16",
                                rx: "8",
                                fill: "#00873D"
                            }), f7("path", {
                                d: "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z",
                                fill: "white"
                            })]
                        })
                    }),
                    RGc = a => f7("div", {
                        id: a.id,
                        className: "_5MHe6g",
                        "aria-label": J("As1GTA"),
                        children: s7("svg", {
                            width: a.size,
                            height: a.size,
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "gBYSAw",
                            children: [f7("rect", {
                                width: "16",
                                height: "16",
                                rx: "8",
                                fill: "white"
                            }), f7("rect", {
                                width: "16",
                                height: "16",
                                rx: "8",
                                fill: "#C8001E"
                            }), f7("path", {
                                d: "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                                fill: "white"
                            })]
                        })
                    });
                var eJc = E7(a => {
                        const b = a.Dd,
                            c = a.Be,
                            d = a.ap,
                            e = a.gC,
                            f = a.Nr,
                            g = d.D3.ok ? d.D3.value : void 0,
                            h = q7(),
                            k = q7(),
                            [l, m] = l7(null);
                        x(d.min != null && d.min >= 1);
                        x(d.max != null && d.max <= 10);
                        const n = k7(e, d.QK, b),
                            p = f === h7,
                            q = f === h7 || f === I7;
                        return f7(H7, {
                            Dd: b,
                            Be: c,
                            ap: d,
                            errorMessage: n,
                            AM: k,
                            F8: !0,
                            children: f7(MGc, {
                                yEa: b.Rc,
                                gridGap: 0,
                                children: Array.from({
                                    length: d.max
                                }, (r, t) => {
                                    const v = t + 1;
                                    r = ZGc(v, g, l);
                                    t = p ? e7(() => {
                                        d.Iu = v === g ? "" : String(v);
                                        d.Zy = !0
                                    }) : void 0;
                                    return s7("label", {
                                        className: g7("Rw_cTw", !q && "g0Fw6w"),
                                        style: {
                                            "--4yIcLg": b.accentColor
                                        },
                                        onMouseEnter: p ? () => m(v) : void 0,
                                        onMouseLeave: p ? () => m(null) : void 0,
                                        children: [f7("input", {
                                            "aria-invalid": !!n,
                                            "aria-describedby": n ? k : void 0,
                                            checked: g === v,
                                            type: "radio",
                                            name: h,
                                            value: v,
                                            "aria-label": tb("1aqRWg", [v]),
                                            className: "Mh7mQg",
                                            onClick: t,
                                            onChange: dJc,
                                            disabled: f === j7,
                                            readOnly: f === i7
                                        }), r != null ? f7(XGc, {
                                            size: b.Rc,
                                            color: q ? r === "hover" ? b.fillColor.Lg : b.fillColor.selected : b.fillColor.Rm
                                        }) : f7(YGc, {
                                            size: b.Rc,
                                            color: q ? b.borderColor.default : b.borderColor.Rm
                                        })]
                                    }, v)
                                })
                            })
                        })
                    }),
                    dJc = () => {};
                var fJc = E7(a => {
                    const b = a.Dd,
                        c = a.Be,
                        d = a.ap,
                        e = a.Nr;
                    var f = a.gC;
                    a = d.EG;
                    const g = c.Kea,
                        h = c.lua,
                        k = !!d.QK,
                        l = q7(),
                        m = e === h7 || e === I7;
                    var n = p7(() => k ? {
                        default: b.borderColor.error,
                        Lg: b.borderColor.error,
                        focus: b.borderColor.error
                    } : m ? {
                        default: b.borderColor.default,
                        Lg: b.borderColor.Lg,
                        focus: b.borderColor.focus
                    } : {
                        default: b.borderColor.default,
                        Lg: b.borderColor.default,
                        focus: b.borderColor.default
                    }, [b.borderColor.default, b.borderColor.error, b.borderColor.focus, b.borderColor.Lg, m, k]);
                    const p = b.label.stream.$g(0),
                        q = XIc[Uf(mg,
                            p, "font-weight")],
                        r = q7();
                    n = {
                        boxSizing: "border-box",
                        CBa: Uf(mg, p, "font-family"),
                        fontSize: `${b.sizes.a6}px`,
                        ij: m ? b.hd.default : b.hd.Rm,
                        fontWeight: q,
                        padding: b.padding.Pa,
                        paddingInlineEnd: k ? b.sizes.Rc * 1.5 : void 0,
                        L8a: b.placeholder.color,
                        width: "100%",
                        owa: n,
                        backgroundColor: "transparent",
                        borderStyle: "solid",
                        outline: "none",
                        borderRadius: b.W,
                        borderWidth: b.sizes.qwa,
                        ariaInvalid: k,
                        Ec: k ? l : void 0
                    };
                    f = k7(f, d.QK, b);
                    return f7(H7, {
                        Dd: b,
                        Be: c,
                        ap: d,
                        errorMessage: f,
                        AM: l,
                        F8: !1,
                        N7: r,
                        children: s7("div", {
                            className: "DsSAig",
                            children: [b.VN >
                                1 ? f7(h, { ...n,
                                    rows: b.VN,
                                    id: r,
                                    name: b.id,
                                    placeholder: b.placeholder.text,
                                    disabled: e === j7,
                                    readOnly: e === i7,
                                    onBlur: e7(() => {
                                        d.Zy = !0
                                    }),
                                    onChange: e7(t => {
                                        d.Iu = t.target.value
                                    }),
                                    resize: "none",
                                    whiteSpace: "pre-wrap",
                                    wordBreak: "break-word",
                                    value: a ? ? ""
                                }) : f7(g, { ...n,
                                    type: $Gc(b.variant),
                                    id: r,
                                    name: b.id,
                                    disabled: e === j7,
                                    readOnly: e === i7,
                                    onChange: e7(t => {
                                        d.Iu = t.target.value
                                    }),
                                    onBlur: e7(() => {
                                        d.Zy = !0
                                    }),
                                    value: a ? ? "",
                                    placeholder: b.placeholder.text
                                }), k && f7("div", {
                                    className: g7("Xz8a5Q", b.VN > 1 && "XsCoFw"),
                                    style: {
                                        "--ozZJmw": `${b.sizes.Rc*
.4}px`
                                    },
                                    children: f7(PGc, {
                                        size: b.sizes.Rc
                                    })
                                })
                            ]
                        })
                    })
                });
                var gJc = E7(a => {
                    const b = a.messages,
                        c = a.footer;
                    var d = a.Rvb,
                        e = aHc(a.$H, b, a.Uwb, a.PMb);
                    d = {
                        "font-family": d.fontFamily,
                        "font-size": c.Mpb,
                        "text-align": "center",
                        direction: FGc(d.direction),
                        "font-kerning": "normal",
                        "font-feature-liga": "on",
                        "font-feature-clig": "on",
                        "font-feature-calt": "on"
                    };
                    var f = Vg.Mb().attrs(d);
                    f.attrs({
                        color: c.hd
                    }).mb(e).wq();
                    e = jk.create({
                        stream: f.build(),
                        Ub: new Map
                    });
                    f = window.location.origin;
                    u(!0);
                    const g = f + __c.HB(__c.GB(new __c.IQa("/form-data-processing"), "formUrl", window.location.href));
                    return s7("footer", {
                        children: [f7("div", {
                            "data-testid": t7.statusText,
                            children: f7(a.$j, {
                                text: e
                            })
                        }), a.footer.eyb && a.$H !== 2 && f7("div", {
                            className: "_4x6reg",
                            children: f7("a", {
                                onClick: h => {
                                    a.wh && (a.wh.pna(new __c.iz({
                                        uri: g,
                                        target: 1
                                    })), h.preventDefault())
                                },
                                href: g,
                                target: "_blank",
                                onTouchEnd: h => {
                                    h.stopPropagation()
                                },
                                children: f7(a.$j, {
                                    text: jk.create({
                                        stream: Vg.Mb().attrs(d).attrs({
                                            color: c.hd,
                                            decoration: "underline"
                                        }).mb(b.cIa()).wq().build(),
                                        Ub: new Map
                                    })
                                })
                            })
                        })]
                    })
                });
                var hJc = E7(a => {
                    const b = a.header,
                        c = a.Be;
                    return s7("div", {
                        className: "FnpX4Q",
                        style: {
                            paddingInlineStart: `${b.padding.ma}px`,
                            paddingInlineEnd: `${b.padding.Ma}px`,
                            paddingBlockStart: `${b.padding.ja}px`,
                            paddingBlockEnd: `${b.padding.za}px`
                        },
                        id: a.hyb,
                        children: [b.background && f7("div", {
                            className: "n9ICbQ",
                            children: f7(c.Zm, {
                                fill: b.background
                            })
                        }), f7("div", {
                            role: "heading",
                            "aria-level": 1,
                            children: f7(c.$j, {
                                text: b.label
                            })
                        })]
                    })
                });
                var h7 = 0,
                    I7 = 1,
                    i7 = 2,
                    j7 = 3,
                    iJc = E7(function(a) {
                        const b = a.state,
                            c = a.gk,
                            d = a.LBa,
                            e = a.Wkb;
                        a = a.wh;
                        const f = b.theme,
                            g = b.header,
                            h = b.fields,
                            k = b.eH,
                            l = f.background,
                            m = f.W,
                            n = f.border,
                            p = e.$j,
                            q = e.Zm,
                            [r] = l7(() => C7.box(c));
                        THc(() => {
                            x7(() => {
                                r.set(c)
                            })
                        }, [r, c]);
                        const [t] = l7(() => new xIc({
                            get language() {
                                return r.get()
                            }
                        })), v = p7(() => UHc(F => f7(p, {
                            text: F
                        })), [p]), w = u7(d, "p"), y = d.$H === 6 || d.$H === 7 && !w ? 2 : d.$H === 5 ? 1 : d.SRa ? 0 : 3, B = d.bp ? null : bHc(pHc(d), b.footer, f, t, v), C = !!k && (d.bp || !B), D = q7();
                        return s7("div", {
                            "aria-labelledby": D,
                            role: "form",
                            className: "_9sCIzQ",
                            style: {
                                borderRadius: m,
                                border: `${n.weight}px solid ${n.color}`
                            },
                            children: [f7("div", {
                                className: "wNGpBA",
                                children: f7(q, {
                                    fill: l
                                })
                            }), s7("div", {
                                className: "_6i3kwQ",
                                children: [g && f7(hJc, {
                                    header: g,
                                    hyb: D,
                                    Be: e
                                }), f7("div", {
                                    className: "xIuERA",
                                    role: "group",
                                    style: {
                                        rowGap: b.O7.rowGap,
                                        paddingBlockStart: `${b.O7.ja}px`,
                                        paddingInlineStart: `${b.O7.ma}px`,
                                        paddingBlockEnd: `${b.O7.za}px`,
                                        paddingInlineEnd: `${b.O7.Ma}px`
                                    },
                                    children: h.map(F => f7("div", {
                                        className: g7("_6i3kwQ", "wNH5Fw", !!(F.type === 4 || F.type ===
                                            5 && F.variant === 3 || F.type === 5 && F.variant === 1) && "Od1Udw"),
                                        children: (() => {
                                            switch (F.type) {
                                                case 4:
                                                    return f7(fJc, {
                                                        Dd: F,
                                                        Be: e,
                                                        ap: v7(d, F.id, "text"),
                                                        gC: t,
                                                        Nr: y
                                                    });
                                                case 5:
                                                    switch (F.variant) {
                                                        case 1:
                                                            return f7(bJc, {
                                                                Dd: F,
                                                                Be: e,
                                                                ap: v7(d, F.id, "number"),
                                                                gC: t,
                                                                Nr: y
                                                            });
                                                        case 2:
                                                            return f7(aJc, {
                                                                Dd: F,
                                                                Be: e,
                                                                ap: v7(d, F.id, "number"),
                                                                gC: t,
                                                                Nr: y
                                                            });
                                                        case 4:
                                                            return f7(ZIc, {
                                                                Dd: F,
                                                                Be: e,
                                                                ap: v7(d, F.id, "number"),
                                                                gC: t,
                                                                Nr: y
                                                            });
                                                        case 3:
                                                            return f7(eJc, {
                                                                Dd: F,
                                                                Be: e,
                                                                ap: v7(d, F.id, "number"),
                                                                gC: t,
                                                                Nr: y
                                                            });
                                                        default:
                                                            throw new A(F);
                                                    }
                                                case 1:
                                                case 2:
                                                case 3:
                                                    return f7(cJc, {
                                                        Dd: F,
                                                        Be: e,
                                                        ap: v7(d, F.id, "select"),
                                                        gC: t,
                                                        NCa: w ? () => d.NCa(F.id) : void 0,
                                                        Nr: y
                                                    });
                                                default:
                                                    throw new A(F);
                                            }
                                        })()
                                    }, F.id))
                                }), s7("div", {
                                    className: g7("WwpS_Q"),
                                    style: {
                                        paddingInlineStart: `${b.c_.ma}px`,
                                        paddingInlineEnd: `${b.c_.Ma}px`,
                                        paddingBlockEnd: `${b.c_.za}px`
                                    },
                                    children: [C && f7(EGc, {
                                        label: v(k.label),
                                        nga: k.backgroundColor,
                                        Nr: y,
                                        onClick: e7(() => d.submit()),
                                        padding: k.padding
                                    }), B && f7("div", {
                                        style: {
                                            paddingBlockStart: `${b.c_.jJb}px`,
                                            paddingBlockEnd: `${b.c_.iJb}px`
                                        },
                                        children: B
                                    }), f7("div", {
                                        style: {
                                            paddingBlockStart: `${b.c_.WDb}px`
                                        },
                                        children: f7(gJc, {
                                            footer: b.footer,
                                            $H: d.$H,
                                            messages: t,
                                            Uwb: () => {
                                                var F = u7(d, "p") ? d.o0.get() ? .fields.get(d.form.fields.first().id ? ? "") ? .total ? ? 0 : void 0;
                                                return F
                                            },
                                            Rvb: f,
                                            $j: e.$j,
                                            wh: a,
                                            PMb: cHc(h)
                                        })
                                    })]
                                })]
                            })]
                        })
                    }),
                    WGc = (a, b) => {
                        const c = a.stream.wn(0);
                        a = { ...__c.kk,
                            stream: Vg.Mb().attrs({ ...c,
                                color: b
                            }).mb(a.stream.Z).build()
                        };
                        return jk.create(a)
                    };
                var jJc = {
                    ie: "form_widget_interacted",
                    xf(a) {
                        return __c.Sq({
                            form_id: a.d_,
                            form_type: a.MBa,
                            action_group: a.mu,
                            action: a.action,
                            location: a.location,
                            linked_design_id: a.S4b,
                            toggle_value: a.BK,
                            editing_context: a.Cd == null ? void 0 : __c.Tq(a.Cd),
                            performance_context: a.Zd == null ? void 0 : __c.Uq(a.Zd),
                            question_type: a.occ
                        })
                    }
                };
                var J7 = class {
                    static G(a) {
                        L(a, {
                            E3: w7,
                            Zy: C7.ref,
                            D3: w7,
                            RRa: w7,
                            wbb: w7,
                            QK: w7
                        })
                    }
                    get E3() {}
                    get EG() {
                        return this.context.mode === "edit" ? this.empty : this.Iu
                    }
                    get D3() {
                        if (this.isEmpty()) return this.required ? Ca({
                            AE: "required"
                        }) : (0, __c.Ba)();
                        const a = this.KJa(this.EG);
                        if (a.ok) {
                            const b = this.RRa(a.value);
                            if (b.state === "invalid") return Ca(b.error)
                        }
                        return a
                    }
                    get RRa() {
                        const a = this.E3 ? .filter(b => !!b);
                        return a ? .length ? yGc(a) : Bs
                    }
                    get wbb() {
                        return this.D3.map(() => this.isEmpty() ? void 0 : this.Ha(this.EG))
                    }
                    get QK() {
                        return this.Zy &&
                            !this.D3.ok && this.context.mode === "interact" ? this.D3.error : void 0
                    }
                    get required() {
                        return !!this.Dd.required
                    }
                    isEmpty() {
                        const a = this.EG;
                        return a.length === 0 ? !0 : typeof a === "string" ? (a != null && a.trim().length > 0 ? Bs() : Cs()).state === "invalid" : !1
                    }
                    constructor(a, b, c) {
                        this.Dd = a;
                        this.context = b;
                        this.feedback = c;
                        this.Zy = (J7.G(this), !1);
                        z7(() => AGc(this.context.lma), d => {
                            d && (this.Iu = (d = d.gmb.get(this.Dd.id ? ? "")) ? this.Ba(d) : this.empty, this.Zy = !1)
                        })
                    }
                };
                var kJc = /^\s*-?(?:\d+[, ])*(?:\d*\.)?\d*\s*$/,
                    lJc = /[\s,]+/g,
                    nHc = class extends J7 {
                        static G(a) {
                            L(a, {
                                Iu: C7.ref
                            })
                        }
                        get min() {
                            return this.Dd.min
                        }
                        get max() {
                            return this.Dd.max
                        }
                        get E3() {
                            return [iHc({
                                min: this.Dd.min,
                                max: this.Dd.max
                            })]
                        }
                        KJa(a) {
                            return a.length <= 50 && kJc.test(a) && (a = a.replace(lJc, ""), a = Number(a), !isNaN(a) && isFinite(a)) ? (0, __c.Ba)(a) : Ca({
                                AE: "invalid_format"
                            })
                        }
                        Ha(a) {
                            return {
                                type: 2,
                                N7: this.Dd.id ? ? "",
                                sn: this.Dd.label.text.stream.Z,
                                value: a
                            }
                        }
                        Ba(a) {
                            return hHc(a).BT
                        }
                        constructor(...a) {
                            super(...a);
                            this.type =
                                (nHc.G(this), "number");
                            this.Iu = this.empty = ""
                        }
                    };
                var lHc = class extends J7 {
                    static G(a) {
                        L(a, {
                            Iu: C7.ref,
                            q7a: w7({
                                equals: CHc.shallow
                            }),
                            E3: w7,
                            xHa: w7
                        })
                    }
                    get q7a() {
                        return new Set(this.Dd.options.map(({
                            id: a
                        }) => a ? ? ""))
                    }
                    get E3() {
                        return [jHc({
                            max: kHc(this.Dd.B0)
                        })]
                    }
                    KJa(a) {
                        return a.every(b => this.q7a.has(b)) ? (0, __c.Ba)(a.slice()) : Ca({
                            AE: "unknown_option_id"
                        })
                    }
                    Ha(a) {
                        return {
                            type: 0,
                            N7: this.Dd.id ? ? "",
                            sn: this.Dd.label.text.stream.Z,
                            ZJa: a,
                            options: this.xHa
                        }
                    }
                    Ba(a) {
                        return gHc(a, this.xHa).BT
                    }
                    get xHa() {
                        return this.Dd.options.map(a => ({
                            id: a.id ? ? "",
                            label: a.label.text.stream.Z
                        }))
                    }
                    constructor(...a) {
                        super(...a);
                        this.type = (lHc.G(this), "select");
                        this.empty = [];
                        this.Iu = [];
                        this.UMa = b => {
                            const c = this.EG;
                            this.Iu = c ? .includes(b) ? c.filter(d => d !== b) : kHc(this.Dd.B0) > 1 && c ? .length ? [...c, b] : [b]
                        }
                    }
                };
                var mHc = class extends J7 {
                    static G(a) {
                        L(a, {
                            Iu: C7.ref
                        })
                    }
                    get E3() {
                        const a = uc("b9892c2d", 500);
                        return [a != null ? jHc({
                            min: 0,
                            max: a
                        }) : void 0, this.Dd.variant.type === "e" ? xGc(__c.aMb, {
                            AE: "invalid_email"
                        }) : void 0]
                    }
                    KJa(a) {
                        return (0, __c.Ba)(a.trim())
                    }
                    Ha(a) {
                        return {
                            type: 1,
                            N7: this.Dd.id ? ? "",
                            sn: this.Dd.label.text.stream.Z,
                            value: a
                        }
                    }
                    Ba(a) {
                        return hHc(a).BT
                    }
                    constructor(...a) {
                        super(...a);
                        this.type = (mHc.G(this), "text");
                        this.Iu = this.empty = ""
                    }
                };
                var mJc = class {
                    static G(a) {
                        L(a, {
                            lma: w7,
                            QY: w7
                        })
                    }
                    get lma() {
                        if (!this.JM || !this.Gr) return {
                            status: 1,
                            data: void 0
                        };
                        const a = this.Gr.getSettings(this.formData.oG);
                        switch (a.status) {
                            case 2:
                            case 3:
                                return a;
                            default:
                                return BHc(this.JM, {
                                    ts: this.formData.ts,
                                    submitter: a.data.qMa
                                })
                        }
                    }
                    get QY() {
                        if (!this.Gr) return b3();
                        const a = this.Gr.getSettings(this.formData.oG);
                        return zGc(a, {
                            OO: b => ({
                                ts: this.formData.ts,
                                submitter: b.qMa
                            })
                        })
                    }
                    get mode() {
                        return this.KBa.get() ? .getContext(this.formData.id) ? "edit" : "interact"
                    }
                    constructor(a,
                        b, c, d) {
                        this.formData = a;
                        this.Gr = b;
                        this.JM = c;
                        this.KBa = d;
                        mJc.G(this)
                    }
                };
                var tHc = Symbol(),
                    nJc = class {
                        static G(a) {
                            L(a, {
                                NT: C7.ref,
                                wN: C7.ref,
                                bM: w7,
                                nBa: w7({
                                    equals: CHc.structural
                                }),
                                oP: w7,
                                $H: w7,
                                SRa: w7
                            })
                        }
                        get bM() {
                            const a = this.Gr ? .getSettings(this.form.oG);
                            return a ? .status === 1 ? a.data.bM : void 0
                        }
                        get nBa() {
                            var a = AGc(this.context.lma);
                            if (a) {
                                {
                                    var b = this.wN;
                                    a = a != null ? this.o0.get() : void 0;
                                    var c = this.bM;
                                    b = b ? .ok ? b.value.Oub : b ? .error.Oub;
                                    const g = new Map;
                                    if (b ? .size || a ? .fields ? .size || c ? .size) {
                                        var d = new Set([...(b ? .keys() || []), ...(a ? .fields.keys() || []), ...(c ? .keys() || [])]);
                                        for (f of d) {
                                            d = b ? .get(f) ? .feedback;
                                            var e = a ? .fields.get(f);
                                            e = e ? {
                                                uIb: e
                                            } : void 0;
                                            const h = c ? .get(f);
                                            d = { ...d,
                                                ...e,
                                                ...(h ? {
                                                    bM: h
                                                } : void 0)
                                            };
                                            Object.keys(d).length > 0 && g.set(f, d)
                                        }
                                    }
                                    var f = g
                                }
                            } else f = new Map;
                            return f
                        }
                        get oP() {
                            return this.NT ? 2 : d7(this.context.lma, {
                                OO: a => a == null ? 1 : 3,
                                loading: () => 4,
                                error: () => 1
                            })
                        }
                        get $H() {
                            return this.bb ? .status === 2 ? 2 : this.vI && this.Gr && this.JM ? this.oP === 2 ? 6 : this.oP === 3 ? 7 : this.oP === 4 ? 3 : d7(this.context.QY, {
                                OO: ({
                                    submitter: a
                                }) => a ? .type === "USER" ? 0 : 1,
                                loading: () => 3,
                                error: () => 4
                            }) : 5
                        }
                        get SRa() {
                            if (!this.vI || this.context.mode !== "interact") return !1;
                            switch (this.$H) {
                                case 1:
                                case 0:
                                    return !0;
                                case 7:
                                    return u7(this, "p");
                                default:
                                    return !1
                            }
                        }
                        get bp() {
                            return this.context.mode === "edit"
                        }
                        constructor(a, b, c, d, e, f, g, h) {
                            this.form = a;
                            this.vI = b;
                            this.Gr = c;
                            this.JM = d;
                            this.KBa = e;
                            this.bb = f;
                            this.la = g;
                            this.zg = h;
                            this.bZa = (nJc.G(this), new Map);
                            this.NT = !1;
                            this.o0 = C7.box();
                            this.submit = NHc(function*() {
                                const k = this.vI,
                                    l = this.JM;
                                var m = this.context;
                                const n = this.la;
                                var p = this.form.fields;
                                const q = this.form.oG,
                                    r = this.form.ts,
                                    t = this.form.id,
                                    v = this.form.type;
                                var w = (this.oP === 1 || u7(this,
                                    "p") && this.oP === 3) && this.context.mode === "interact";
                                if (k && w && l && m.QY.status === 1) {
                                    w = !0;
                                    m = m.QY.data;
                                    var y = [];
                                    for (const C of p) p = v7(this, C.id ? ? ""), p.Zy = !0, p = p.wbb, p.ok ? w && p.value != null && y.push(p.value) : w = !1;
                                    if (w)
                                        if (y.length === 0) this.wN = Ca({
                                            AE: 5,
                                            F$a: !1
                                        });
                                        else {
                                            this.NT = !0;
                                            try {
                                                const C = yield k.m5b({
                                                    oG: q,
                                                    ts: r,
                                                    gmb: y
                                                });
                                                this.wN = vHc(C);
                                                if (C.ok) {
                                                    var B = C.value.Bec;
                                                    const D = y7(m);
                                                    l.Nca.set(D, B);
                                                    l.wT.set(D, "initialized");
                                                    n ? .track(jJc, {
                                                        d_: t,
                                                        MBa: v,
                                                        mu: "interacted",
                                                        action: "form_submitted",
                                                        location: "in_form"
                                                    })
                                                }
                                            } finally {
                                                this.NT = !1
                                            }
                                        }
                                    else this.wN = Ca({
                                        AE: 6,
                                        F$a: !1
                                    });
                                    this.wN.ok || uHc(this, this.wN.error)
                                }
                            });
                            this.vba = NHc(function*() {
                                const k = this.vI,
                                    l = this.JM,
                                    m = this.context,
                                    n = this.form.ts,
                                    p = (this.oP === 1 || u7(this, "p") && this.oP === 3) && this.context.mode === "interact";
                                if (k && p && l && m.QY.status === 1) {
                                    this.NT = !0;
                                    try {
                                        (yield k.vba({
                                            ts: n
                                        })).ok ? (this.la ? .track(jJc, {
                                            d_: this.form.id,
                                            MBa: "poll",
                                            mu: "interacted",
                                            action: "response_unsubmitted",
                                            location: "in_form"
                                        }), l.vba(m.QY.data), this.wN = void 0) : this.zg ? .MD({
                                            yF: J("kgHTHw"),
                                            group: tHc,
                                            eH: {
                                                ML: J("mQhziQ"),
                                                onClick: e7(() => this.vba())
                                            }
                                        })
                                    } finally {
                                        this.NT = !1
                                    }
                                }
                            });
                            this.NCa = NHc(function*(k) {
                                v7(this, k, "select").isEmpty() ? (this.la ? .track(jJc, {
                                    d_: this.form.id,
                                    MBa: "poll",
                                    mu: "interacted",
                                    action: "response_unsubmitted",
                                    location: "in_form"
                                }), yield this.vba()) : yield this.submit()
                            });
                            z7(() => a.ts, () => {
                                this.wN = void 0;
                                this.o0.set(void 0)
                            });
                            this.context = new mJc(a, c, d, e);
                            sHc(this)
                        }
                    };
                var K7 = Object.freeze({
                    Mi: 16,
                    Ej: 16,
                    U1b: 1.5625,
                    ES: {
                        Bq: 1.25,
                        Aq: 1.25,
                        Jt: 1
                    },
                    footer: {
                        CHb: .625,
                        DHb: 1.25,
                        Bq: 1.25,
                        Aq: 1.25,
                        Kaa: .5,
                        kbc: .5,
                        jbc: 1.25
                    },
                    header: {
                        Jaa: 1.25,
                        Jt: 1,
                        Bq: 1.25,
                        Aq: 1.25
                    }
                });
                var wHc = ["#cccccc", "#333333"];
                var oJc = uc("4073adf", !1),
                    zHc = class {
                        get header() {
                            if (!this.Wa.A_) return new pJc(this.formData, this.Wa)
                        }
                        get fields() {
                            const a = this.formData.type;
                            return this.formData.fields.map(b => {
                                switch (b.type) {
                                    case "select":
                                        switch (b.variant ? .type) {
                                            case "p":
                                                return new qJc(b, this.Wa);
                                            case "q":
                                                return new rJc(b, this.Wa);
                                            case void 0:
                                                switch (a) {
                                                    case "quiz":
                                                        return new rJc(b, this.Wa);
                                                    case "poll":
                                                        return new qJc(b, this.Wa);
                                                    default:
                                                        throw new A(a);
                                                }
                                            case "r":
                                                return new sJc(b, this.Wa);
                                            default:
                                                throw new A(b.variant);
                                        }
                                    case "text":
                                        switch (b.variant.type) {
                                            case "f":
                                                return new tJc(b,
                                                    this.Wa);
                                            case "e":
                                                return new uJc(b, this.Wa);
                                            default:
                                                throw new A(b.variant);
                                        }
                                    case "number":
                                        switch (b.variant.type) {
                                            case "a":
                                                return new vJc(b, this.Wa);
                                            case "b":
                                                return new wJc(b, this.Wa);
                                            case "c":
                                                return new xJc(b, this.Wa);
                                            case "d":
                                                return new yJc(b, this.Wa);
                                            default:
                                                throw new A(b.variant);
                                        }
                                    default:
                                        throw new A(b);
                                }
                            })
                        }
                        get eH() {
                            if ((this.fields.length !== 1 || this.fields[0].type !== 1) && this.formData.footer.ref) return {
                                backgroundColor: {
                                    default: this.Wa.ya.accentColor,
                                    Lg: this.Wa.ya.Blb,
                                    active: this.Wa.ya.Alb,
                                    Rm: this.Wa.ya.Dlb
                                },
                                label: this.formData.footer.ref ? .label.text,
                                padding: {
                                    ja: this.Wa.Ej * .64,
                                    za: this.Wa.Ej * .64,
                                    ma: this.Wa.Ej * .64,
                                    Ma: this.Wa.Ej * .64
                                }
                            }
                        }
                        get Ef() {
                            return zGc(this.Wa.Ef, {
                                OO: a => ({
                                    submitter: a.qMa
                                })
                            })
                        }
                        get footer() {
                            const a = oJc && d7(this.Wa.Ef, {
                                    OO: c => !!c.Lcc,
                                    default: () => !1
                                }),
                                b = this.Wa.Mi;
                            return {
                                kyb: b * YIc,
                                Mpb: b * .625,
                                eyb: a,
                                hd: this.Wa.ya.lTa
                            }
                        }
                        get O7() {
                            const a = this.Wa.Ej,
                                b = this.formData.ES ? .ref;
                            return {
                                ja: a * 1,
                                ma: a * (b ? .Bq ? ? K7.ES.Bq),
                                Ma: a * (b ? .Aq ? ? K7.ES.Aq),
                                za: a * (b ? .Jt ? ? K7.ES.Jt),
                                rowGap: a * 2
                            }
                        }
                        get c_() {
                            const a = !!this.eH,
                                b = this.Wa.Ej;
                            return {
                                za: b * (this.formData.footer.ref ? .Jt ? ? (a ? K7.footer.CHb : K7.footer.DHb)),
                                ma: b * (this.formData.footer.ref ? .Bq ? ? K7.footer.Bq),
                                Ma: b * (this.formData.footer.ref ? .Aq ? ? K7.footer.Aq),
                                WDb: b * (this.formData.footer.ref ? .Kaa ? ? (a ? K7.footer.Kaa : 0)),
                                jJb: b * .64,
                                iJb: b * .64
                            }
                        }
                        constructor(a, b) {
                            this.formData = a;
                            this.Wa = new zJc(a, b);
                            this.theme = new AJc(a, this.Wa)
                        }
                    },
                    zJc = class {
                        static G(a) {
                            L(a, {
                                ya: w7
                            })
                        }
                        get ya() {
                            return xHc(this.AO, this.aqa, this.dSb, this.formData.header.ref ? .background ? .ref)
                        }
                        get AO() {
                            return NGc(this.formData.jba)
                        }
                        get aqa() {
                            return NGc(this.formData.Tba)
                        }
                        get direction() {
                            return this.formData.direction ===
                                "r" ? "r" : "l"
                        }
                        get Ef() {
                            return this.Gr ? this.Gr.getSettings(this.formData.oG) : {
                                status: 2
                            }
                        }
                        get XEb() {
                            return this.formData.fields.count()
                        }
                        get A_() {
                            return this.formData.A_ ? !0 : (this.formData.aDa || this.formData.title.ref ? .label == null) && this.formData.ara === !1
                        }
                        get uBa() {
                            return this.XEb === 1 && (this.formData.ara ? ? !0)
                        }
                        get Mi() {
                            if (this.formData.Mi) return this.formData.Mi;
                            const a = Uf(mg, this.yja.label.text.stream.$g(0), "font-size");
                            return this.uBa ? a / (this.yja.DEa ? ? 1.5625) : a
                        }
                        get Ej() {
                            return this.formData.Ej ? ? 16
                        }
                        get dSb() {
                            return this.yja.bJ ===
                                "u" ? Uf(mg, this.yja.label.text.stream.$g(0), "color") : void 0
                        }
                        get yja() {
                            return __c.z(this.formData.fields.first(), "Malformed form data")
                        }
                        constructor(a, b) {
                            this.formData = a;
                            this.Gr = b;
                            zJc.G(this)
                        }
                    },
                    AJc = class {
                        get background() {
                            return this.formData.Tba
                        }
                        get border() {
                            return this.formData.border
                        }
                        get W() {
                            return this.formData.W ? ? 0
                        }
                        get fontFamily() {
                            return this.formData.Uha
                        }
                        get direction() {
                            return this.formData.direction === "r" ? "r" : "l"
                        }
                        constructor(a, b) {
                            this.formData = a;
                            this.Wa = b
                        }
                    },
                    pJc = class {
                        get background() {
                            return this.formData.header ? .ref ? .background.ref ? ?
                                this.formData.jba
                        }
                        get label() {
                            var a = this.formData.fields.first();
                            return (a = this.Wa.uBa ? a.label.text : this.formData.title ? .ref ? .label) ? BJc(a, this.Wa.direction) : r7("", {
                                "font-size": this.Wa.Mi * 1.953,
                                direction: yHc(this.Wa.direction)
                            })
                        }
                        get padding() {
                            const a = this.formData.header.ref;
                            return {
                                ja: this.Wa.Ej * (a ? .Jaa ? ? K7.header.Jaa),
                                za: this.Wa.Ej * (a ? .Jt ? ? K7.header.Jt),
                                ma: this.Wa.Ej * (a ? .Bq ? ? K7.header.Bq),
                                Ma: this.Wa.Ej * (a ? .Aq ? ? K7.header.Aq)
                            }
                        }
                        constructor(a, b) {
                            this.formData = a;
                            this.Wa = b
                        }
                    },
                    CJc = class {
                        get id() {
                            return this.Dd.id ||
                                ""
                        }
                        get label() {
                            return BJc(this.Dd.label.text, this.Wa.direction)
                        }
                        get $cb() {
                            return !this.Wa.uBa
                        }
                        get accentColor() {
                            return this.Wa.ya.accentColor
                        }
                        get zM() {
                            return this.Wa.ya.zM
                        }
                        get bub() {
                            return this.Wa.Mi * .8
                        }
                        get Mi() {
                            return this.Wa.Mi
                        }
                        get Ej() {
                            return this.Wa.Ej
                        }
                        get padding() {
                            return {
                                ABb: this.Wa.Ej * .512,
                                Pa: this.Wa.Ej * .64
                            }
                        }
                        constructor(a, b) {
                            this.Dd = a;
                            this.Wa = b
                        }
                    },
                    DJc = class extends CJc {
                        get placeholder() {
                            return {
                                color: m7(this.Wa.ya.yH, .5),
                                text: this.Dd.placeholder || ""
                            }
                        }
                        get W() {
                            return this.Dd.W ? ? 8
                        }
                        get borderColor() {
                            return {
                                default: this.Wa.ya.$xa,
                                Lg: this.Wa.ya.bya,
                                focus: this.Wa.ya.aya,
                                error: this.Wa.ya.zM
                            }
                        }
                        get hd() {
                            return {
                                default: this.Wa.ya.yH,
                                Rm: this.Wa.ya.aga
                            }
                        }
                        get sizes() {
                            return {
                                a6: this.Wa.Mi * 1,
                                Rc: this.Wa.Mi * 1.5,
                                qwa: this.Wa.Mi * .0625
                            }
                        }
                        constructor(...a) {
                            super(...a);
                            this.type = 4
                        }
                    },
                    tJc = class extends DJc {
                        get VN() {
                            return this.Dd.variant.VN
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 2
                        }
                    },
                    uJc = class extends DJc {
                        constructor(...a) {
                            super(...a);
                            this.VN = this.variant = 1
                        }
                    },
                    L7 = class extends CJc {
                        get W() {
                            return this.Dd.W ? ? 8
                        }
                        constructor(...a) {
                            super(...a);
                            this.type =
                                5
                        }
                    },
                    vJc = class extends L7 {
                        get borderColor() {
                            return {
                                default: this.Wa.ya.$xa,
                                Lg: this.Wa.ya.bya,
                                focus: this.Wa.ya.aya,
                                error: this.Wa.ya.zM
                            }
                        }
                        get hd() {
                            return this.Wa.ya.yH
                        }
                        get sizes() {
                            return {
                                a6: this.Wa.Mi * 1,
                                Rc: this.Wa.Mi * 1.5,
                                qwa: this.Wa.Mi * .0625
                            }
                        }
                        get gridGap() {
                            return this.Wa.Ej * .41
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 1
                        }
                    },
                    wJc = class extends L7 {
                        get backgroundColor() {
                            return {
                                default: this.Wa.ya.e6,
                                Lg: this.Wa.ya.f6,
                                active: this.Wa.ya.uha,
                                selected: this.Wa.ya.vha,
                                error: this.Wa.ya.zM,
                                Rm: this.Wa.ya.HY
                            }
                        }
                        get E_() {
                            return {
                                default: this.Wa.ya.yH,
                                selected: this.Wa.ya.F4
                            }
                        }
                        get sizes() {
                            return {
                                Lwa: this.Wa.Mi * 2.5,
                                Rc: this.Wa.Mi * 1.953
                            }
                        }
                        get gridGap() {
                            return this.Wa.Ej * .41
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 2
                        }
                    },
                    xJc = class extends L7 {
                        get borderColor() {
                            return {
                                default: this.Wa.ya.yH,
                                Rm: this.Wa.ya.aga
                            }
                        }
                        get fillColor() {
                            return {
                                Lg: this.Wa.ya.f6,
                                selected: this.Wa.ya.vha,
                                Rm: this.Wa.ya.HY
                            }
                        }
                        get Rc() {
                            return this.Wa.Mi * 2.2
                        }
                        get gridGap() {
                            return this.Wa.Ej * .41
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 3
                        }
                    },
                    yJc = class extends L7 {
                        get backgroundColor() {
                            return {
                                default: this.Wa.ya.e6,
                                Lg: this.Wa.ya.f6,
                                active: this.Wa.ya.uha,
                                selected: this.Wa.ya.vha,
                                error: this.Wa.ya.zM,
                                Rm: this.Wa.ya.HY
                            }
                        }
                        get hd() {
                            return {
                                default: this.Wa.ya.yH,
                                selected: this.Wa.ya.F4
                            }
                        }
                        get sizes() {
                            return {
                                Lwa: this.Wa.Mi * 2.5,
                                a6: this.Wa.Mi * 1
                            }
                        }
                        get gridGap() {
                            return this.Wa.Ej * .41
                        }
                        constructor(...a) {
                            super(...a);
                            this.variant = 4
                        }
                    },
                    FJc = class extends CJc {
                        get options() {
                            return this.Dd.options.map(a => new EJc(a, this.Wa))
                        }
                        get Cz() {
                            return {
                                default: this.Wa.ya.e6,
                                Lg: this.Wa.ya.f6,
                                active: this.Wa.ya.uha,
                                selected: this.Wa.ya.vha,
                                error: this.Wa.ya.zM,
                                Rm: this.Wa.ya.HY
                            }
                        }
                        get rC() {
                            return {
                                default: this.Wa.ya.yH,
                                selected: this.Wa.ya.F4,
                                Rm: this.Wa.ya.aga
                            }
                        }
                        get gqa() {
                            return this.Dd.B0 !== void 0 && this.Dd.B0 !== 1 ? "m" : "s"
                        }
                        get W() {
                            return this.Dd.W ? ? 8
                        }
                        get rowGap() {
                            return .512 * this.Wa.Ej
                        }
                        get sizes() {
                            return {
                                Rc: this.Wa.Mi * 1,
                                qxa: this.Wa.Mi * 1,
                                xob: this.Wa.Mi * .5,
                                zob: this.Wa.Mi * .625
                            }
                        }
                    },
                    rJc = class extends FJc {
                        static G(a) {
                            L(a, {
                                Ef: w7
                            })
                        }
                        get Ef() {
                            return d7(this.Wa.Ef, {
                                OO: a => (a = a.bM.get(this.id) ? ? []) ? {
                                    status: 1,
                                    data: {
                                        gya: a
                                    }
                                } : b3(),
                                loading: () => ({
                                    status: 2
                                }),
                                error: () => b3()
                            })
                        }
                        constructor(...a) {
                            super(...a);
                            this.type = (rJc.G(this), 2)
                        }
                    },
                    qJc = class extends FJc {
                        get WOa() {
                            return {
                                text: this.Wa.ya.F4,
                                track: this.Wa.ya.Clb,
                                CL: this.Wa.ya.accentColor
                            }
                        }
                        get bOa() {
                            return {
                                text: this.Wa.ya.yH,
                                track: this.Wa.ya.HY,
                                CL: this.Wa.ya.e6
                            }
                        }
                        constructor(...a) {
                            super(...a);
                            this.type = 1
                        }
                    },
                    sJc = class extends FJc {
                        constructor(...a) {
                            super(...a);
                            this.type = 3
                        }
                    },
                    EJc = class {
                        get id() {
                            return this.option.id || ""
                        }
                        get label() {
                            return BJc(this.option.label.text, this.Wa.direction)
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.Wa = b
                        }
                    },
                    BJc = UHc((a, b) => {
                        const c = jk.create(jk.snapshot(a));
                        OHc(() => {
                            c.stream.setAttributes({
                                direction: yHc(b)
                            })
                        });
                        return c
                    });
                var GJc = class {
                    static G(a) {
                        L(a, {
                            aY: C7.shallow
                        })
                    }
                    getSettings(a) {
                        const b = a || "",
                            c = this.aY.get(b);
                        if (c) return c;
                        x7(() => this.aY.set(b, {
                            status: 2
                        }));
                        this.vI.U2b(a).then(d => {
                            x7(() => {
                                this.aY.set(b, d.ok ? {
                                    status: 1,
                                    data: d.value
                                } : b3())
                            })
                        }, () => {
                            x7(() => {
                                this.aY.set(b, b3())
                            })
                        });
                        return __c.z(this.aY.get(b))
                    }
                    constructor(a) {
                        this.vI = a;
                        this.aY = (GJc.G(this), new Map)
                    }
                };
                var HJc = class {
                    static G(a) {
                        L(a, {
                            Nca: C7.shallow,
                            wT: C7.shallow
                        })
                    }
                    vba(a) {
                        a = y7(a);
                        this.Nca.delete(a)
                    }
                    constructor(a, b, c) {
                        this.vI = a;
                        this.Gr = b;
                        this.formData = c;
                        this.Nca = (HJc.G(this), new Map);
                        this.wT = new Map
                    }
                };
                var GHc = 18 * YIc;
                var IJc = __c.n_({
                        D: WIc
                    }),
                    JJc = __c.c_()(() => ({
                        sYb(a) {
                            return {
                                data: {
                                    D: {
                                        type: "quiz",
                                        value: HHc(a)
                                    },
                                    document: {}
                                },
                                P: {
                                    width: 500,
                                    height: 600
                                }
                            }
                        }
                    }));
                var KJc;
                KJc = __c.PZ()(({
                    VL: {
                        la: a,
                        zg: b,
                        bb: c
                    },
                    oi: {
                        Qvb: d,
                        wh: e
                    }
                }) => {
                    const f = C7.box(),
                        g = new WeakMap;
                    return {
                        metadata: {
                            type: "form",
                            VV: h => h.value.id,
                            name: void 0
                        },
                        D: __c.OZ(E7(({
                            data: h,
                            Be: k,
                            zi: {
                                page: l
                            }
                        }) => {
                            l = l.container;
                            const m = h.D.value,
                                n = m.id,
                                p = l.id;
                            var q = g.get(m);
                            if (!q || q.d_ !== n || q.Zh !== p) {
                                let w;
                                if (d && p) {
                                    w = d.u2b.get({
                                        d_: n,
                                        Zh: p,
                                        H1b: l.extension
                                    });
                                    var r = new GJc(w);
                                    var t = new HJc(w, r, m)
                                }
                                q = new nJc(m, w, r, t, f, c, a, b);
                                q = {
                                    d_: n,
                                    Zh: p,
                                    Gr: r,
                                    JM: t,
                                    LBa: q
                                };
                                g.set(m, q)
                            }
                            t = q.Gr;
                            r = q.LBa;
                            const v = q.JM;
                            THc(() => {
                                if (v) return DHc(v)
                            }, [v]);
                            h =
                                AHc({
                                    data: h,
                                    Gr: t
                                });
                            return f7(iJc, {
                                LBa: r,
                                Wkb: {
                                    $j: k.$j,
                                    Zm: k.Zm,
                                    Kea: k.Kea,
                                    lua: k.lua
                                },
                                state: h,
                                gk: l.language || "en",
                                wh: e
                            })
                        })),
                        T6: ["responsive"],
                        exports: {
                            Ksb: f
                        }
                    }
                });
                __c.C_ = {
                    rh: JJc,
                    Lo: KJc,
                    sh: IJc
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/9e480cc7bb2b0f74.js.map
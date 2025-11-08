(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([
    [20716], {

        /***/
        856598: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(905716);
            __web_req__(258551);
            globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
            (function(__c) {
                var C0 = __c.C0;
                var cFc = function(a, b, c = 1) {
                        b = Math.min(a.weight, b);
                        if (b !== 0) return {
                            borderWidth: `${b*c}px`,
                            borderStyle: "solid",
                            borderColor: a.color ? ? a.fill.color ? ? a.fill.$a.ref ? .Bh[0] ? .color ? ? "transparent"
                        }
                    },
                    dFc = function(a) {
                        if (a.color) return {
                            backgroundColor: a.color
                        };
                        if (a.$a.ref && a.$a.ref.type === "linear") return {
                            backgroundColor: a.$a.ref ? .Bh[0] ? .color,
                            background: `linear-gradient(${a.$a.ref.rotation}deg, ${a.$a.ref?.Bh.map(b=>`${b.color}`).join(",")})`
                        };
                        if (a.$a.ref && a.$a.ref.type === "radial") {
                            const b = a.$a.ref.center.left,
                                c =
                                a.$a.ref.center.top,
                                d = a.$a.ref ? .Bh.map(e => `${e.color}`).join(",");
                            return {
                                backgroundColor: a.$a.ref ? .Bh[0] ? .color,
                                background: `radial-gradient(circle at ${`${Math.round(b*100)}%`} ${`${Math.round(c*100)}%`}, ${d})`
                            }
                        }
                        return {}
                    },
                    eFc = __webpack_require__(322594),
                    Q6 = eFc.jsx,
                    fFc = eFc.jsxs;
                __webpack_require__(186901);
                var gFc = __webpack_require__(721226).PA;
                var hFc = new RegExp(/^(https?|ftp|tel|sms|mailto|shortcuts):(\/\/|[^/])[^ ]+(\/|$)|^[^: ]+(\/|$)|^[\w.]+:\d+(\/|$)/i),
                    iFc = __c.n_({
                        D: __c.m_({
                            label: C0.Im(1, "Richtext2"),
                            link: C0.Bz(2, hFc),
                            background: C0.Im(3, "Fill"),
                            W: C0.hF(4, {
                                min: 0,
                                max: 100
                            }),
                            border: C0.m7a(5, "Stroke")
                        })
                    });
                var jFc = __c.c_()(a => ({
                    createDefault(b) {
                        var c = a.Fia ? .SYb ? ? __c.mg.Sb["font-family"];
                        c = { ...(b ? .attrs ? ? {}),
                            "font-family": b ? .attrs ? .["font-family"] ? ? c,
                            "font-size": b ? .attrs ? .["font-size"] ? ? 20,
                            color: b ? .attrs ? .color ? ? "#ffffff",
                            "text-align": b ? .attrs ? .["text-align"] ? ? "center"
                        };
                        return {
                            data: {
                                D: {
                                    label: { ...__c.kk,
                                        stream: __c.Vg.Mb().attrs(c).mb(b ? .label ? ? __c.J("4sGMlw")).mb("\n").build()
                                    },
                                    link: b ? .link,
                                    background: b ? .background ? ? { ...__c.ZD,
                                        color: "#0ba84a"
                                    },
                                    W: b ? .W ? ? 25,
                                    border: b ? .border
                                },
                                document: {}
                            },
                            P: b ? .P ? ? {
                                width: 300,
                                height: 50
                            }
                        }
                    }
                }));
                var kFc = __c.PZ()(() => ({
                    metadata: {
                        type: "button",
                        name: __c.J("xdElgQ")
                    },
                    D: __c.OZ(gFc(({
                        data: {
                            D: a
                        },
                        Be: b
                    }) => fFc("div", {
                        className: "_2Z_Fmg",
                        children: [Q6("div", {
                            className: "_0mvZOQ",
                            style: {
                                borderRadius: `${a.W}px`,
                                border: a.border.ref ? `solid ${a.border.ref.weight}px  ${a.border.ref.color}` : void 0
                            },
                            children: Q6(b.Zm, {
                                fill: a.background
                            })
                        }), Q6("div", {
                            className: "ZcsBDg",
                            children: Q6("div", {
                                className: "vyKiIw",
                                children: Q6(b.$j, {
                                    text: a.label
                                })
                            })
                        })]
                    }))),
                    email: {
                        type: 2,
                        Component: gFc(({
                            data: {
                                D: a
                            },
                            Be: b,
                            zi: {
                                P: c
                            },
                            scale: d
                        }) => {
                            var e = c.width * d;
                            e = (e = a.border.ref ? cFc(a.border.ref, e / 2, d) : void 0) ? `${e.borderWidth} ${e.borderStyle} ${e.borderColor}` : void 0;
                            const f = a.W ? a.W * d : 0;
                            return Q6("a", {
                                href: a.link ? ? "#",
                                "ses:no-track": "",
                                target: "_blank",
                                rel: "noopener",
                                style: {
                                    display: "table",
                                    width: "100%",
                                    height: `${c.height*d}px`,
                                    textDecoration: "none",
                                    borderCollapse: "separate",
                                    boxSizing: "border-box",
                                    borderSpacing: 0,
                                    padding: "8px",
                                    ...dFc(a.background),
                                    ...(e ? {
                                        borderTop: e,
                                        borderBottom: e,
                                        borderLeft: e,
                                        borderRight: e
                                    } : {}),
                                    ...(f ? {
                                        borderTopLeftRadius: `${f}px`,
                                        borderTopRightRadius: `${f}px`,
                                        borderBottomLeftRadius: `${f}px`,
                                        borderBottomRightRadius: `${f}px`
                                    } : {})
                                },
                                children: Q6(b.$j, {
                                    text: a.label
                                })
                            })
                        })
                    },
                    exports: {},
                    T6: ["fixed"]
                }));
                __c.F_ = {
                    rh: jFc,
                    Lo: kFc,
                    sh: iFc
                };
            }).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
        }

    }
])
//# sourceMappingURL=sourcemaps/29daba36c8e743bf.js.map
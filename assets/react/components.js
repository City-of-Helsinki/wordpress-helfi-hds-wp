(function (l$2, lodash) {
	'use strict';

	function _interopNamespaceDefault(e) {
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n.default = e;
		return Object.freeze(n);
	}

	var l__namespace = /*#__PURE__*/_interopNamespaceDefault(l$2);

	function o$1(t, r) {
	  var n = {};
	  for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && r.indexOf(o) < 0 && (n[o] = t[o]);
	  if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
	    var e = 0;
	    for (o = Object.getOwnPropertySymbols(t); e < o.length; e++) r.indexOf(o[e]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[e]) && (n[o[e]] = t[o[e]]);
	  }
	  return n;
	}
	"function" == typeof SuppressedError && SuppressedError;

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function e$1(e, t) {
	  void 0 === t && (t = {});
	  var d = t.insertAt;
	  if (e && "undefined" != typeof document) {
	    var n = document.head || document.getElementsByTagName("head")[0],
	      s = document.createElement("style");
	    s.type = "text/css", "top" === d && n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e));
	  }
	}

	var a;
	!function (e) {
	  e.ExtraSmall = "extraSmall", e.Small = "small", e.Medium = "medium", e.Large = "large", e.ExtraLarge = "extraLarge";
	}(a || (a = {}));
	var i$3 = {
	  icon: "Icon-module_icon__1Jtzj icon_hds-icon__1YqNC",
	  extraSmall: "Icon-module_extraSmall__3Q7tD icon_hds-icon--size-xs__3dAMZ",
	  small: "Icon-module_small__gTGkU icon_hds-icon--size-s__2Lkik",
	  medium: "Icon-module_medium__1D6Pb icon_hds-icon--size-m__1mcHv",
	  large: "Icon-module_large__28YAW icon_hds-icon--size-l__3Zczy",
	  extraLarge: "Icon-module_extraLarge__27rtn icon_hds-icon--size-xl__1Jes8"
	};
	e$1('.icon_hds-icon__1YqNC{background-color:currentcolor;display:inline-block;height:var(--icon-size);-webkit-mask-image:var(--mask-image);mask-image:var(--mask-image);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:auto;mask-size:auto;width:var(--icon-size)}.icon_hds-icon--size-xs__3dAMZ{--icon-size:var(--spacing-layout-2-xs)}.icon_hds-icon--size-s__2Lkik{--icon-size:var(--spacing-layout-xs)}.icon_hds-icon--size-m__1mcHv{--icon-size:var(--spacing-layout-s)}.icon_hds-icon--size-l__3Zczy{--icon-size:var(--spacing-layout-m)}.icon_hds-icon--size-xl__1Jes8{--icon-size:var(--spacing-layout-l)}[class*=hds-icon-start--]:before{-webkit-mask-image:var(--mask-image-before);mask-image:var(--mask-image-before)}[class*=hds-icon-end--]:after,[class*=hds-icon-start--]:before{background-color:currentcolor;content:"";display:inline-flex;height:var(--icon-size,24px);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:var(--icon-size,24px)}[class*=hds-icon-end--]:after{-webkit-mask-image:var(--mask-image-after);mask-image:var(--mask-image-after)}.Icon-module_icon__1Jtzj{background-color:transparent}');

	const o = o => {
	  var {
	      "aria-label": s = "angle-down",
	      "aria-hidden": i = true,
	      className: t = "",
	      color: n,
	      size: c = a.Small,
	      style: m = {}
	    } = o,
	    d = o$1(o, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
	  return /*#__PURE__*/l$2.createElement("svg", Object.assign({
	    "aria-label": s,
	    "aria-hidden": i,
	    className: [i$3.icon, i$3[c], t].filter(e => e).join(" "),
	    role: "img",
	    xmlns: "http://www.w3.org/2000/svg",
	    viewBox: "0 0 24 24",
	    color: n,
	    style: m
	  }, d), /*#__PURE__*/l$2.createElement("path", {
	    fillRule: "evenodd",
	    clipRule: "evenodd",
	    d: "M12 13.5L17 8.5L18.5 10L12 16.5L5.5 10L7 8.5L12 13.5Z",
	    fill: "currentColor"
	  }));
	};

	const s$6 = s => {
	  var {
	      "aria-label": o = "angle-left",
	      "aria-hidden": i = true,
	      className: t = "",
	      color: n,
	      size: c = a.Small,
	      style: m = {}
	    } = s,
	    d = o$1(s, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
	  return /*#__PURE__*/l$2.createElement("svg", Object.assign({
	    "aria-label": o,
	    "aria-hidden": i,
	    className: [i$3.icon, i$3[c], t].filter(e => e).join(" "),
	    role: "img",
	    xmlns: "http://www.w3.org/2000/svg",
	    viewBox: "0 0 24 24",
	    color: n,
	    style: m
	  }, d), /*#__PURE__*/l$2.createElement("path", {
	    fillRule: "evenodd",
	    clipRule: "evenodd",
	    d: "M10.5 12L15.5 17L14 18.5L7.5 12L14 5.5L15.5 7L10.5 12Z",
	    fill: "currentColor"
	  }));
	};

	const s$5 = s => {
	  var {
	      "aria-label": i = "angle-right",
	      "aria-hidden": o = true,
	      className: t = "",
	      color: n,
	      size: c = a.Small,
	      style: m = {}
	    } = s,
	    d = o$1(s, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
	  return /*#__PURE__*/l$2.createElement("svg", Object.assign({
	    "aria-label": i,
	    "aria-hidden": o,
	    className: [i$3.icon, i$3[c], t].filter(e => e).join(" "),
	    role: "img",
	    xmlns: "http://www.w3.org/2000/svg",
	    viewBox: "0 0 24 24",
	    color: n,
	    style: m
	  }, d), /*#__PURE__*/l$2.createElement("path", {
	    fillRule: "evenodd",
	    clipRule: "evenodd",
	    d: "M13.5 12L8.5 7L10 5.5L16.5 12L10 18.5L8.5 17L13.5 12Z",
	    fill: "currentColor"
	  }));
	};

	const s$4 = s => {
	  var {
	      "aria-label": o = "calendar",
	      "aria-hidden": i = true,
	      className: t = "",
	      color: c,
	      size: n = a.Small,
	      style: m = {}
	    } = s,
	    d = o$1(s, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
	  return /*#__PURE__*/l$2.createElement("svg", Object.assign({
	    "aria-label": o,
	    "aria-hidden": i,
	    className: [i$3.icon, i$3[n], t].filter(e => e).join(" "),
	    role: "img",
	    xmlns: "http://www.w3.org/2000/svg",
	    viewBox: "0 0 24 24",
	    color: c,
	    style: m
	  }, d), /*#__PURE__*/l$2.createElement("path", {
	    fillRule: "evenodd",
	    clipRule: "evenodd",
	    d: "M17 2C17.5523 2 18 2.44772 18 3V4H22V21H2V4H6V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2ZM20 11H4V19H20V11ZM20 6H4V9H20V6Z",
	    fill: "currentColor"
	  }));
	};

	const s$3 = s => {
	  var {
	      "aria-label": o = "check",
	      "aria-hidden": i = true,
	      className: t = "",
	      color: c,
	      size: m = a.Small,
	      style: n = {}
	    } = s,
	    d = o$1(s, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
	  return /*#__PURE__*/l$2.createElement("svg", Object.assign({
	    "aria-label": o,
	    "aria-hidden": i,
	    className: [i$3.icon, i$3[m], t].filter(e => e).join(" "),
	    role: "img",
	    xmlns: "http://www.w3.org/2000/svg",
	    viewBox: "0 0 24 24",
	    color: c,
	    style: n
	  }, d), /*#__PURE__*/l$2.createElement("path", {
	    fillRule: "evenodd",
	    clipRule: "evenodd",
	    d: "M21 7L10 18L4.5 12.5L6 11L10 15L19.5 5.5L21 7Z",
	    fill: "currentColor"
	  }));
	};

	const s$2 = s => {
	  var {
	      "aria-label": o = "cross",
	      "aria-hidden": i = true,
	      className: t = "",
	      color: c,
	      size: m = a.Small,
	      style: n = {}
	    } = s,
	    d = o$1(s, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
	  return /*#__PURE__*/l$2.createElement("svg", Object.assign({
	    "aria-label": o,
	    "aria-hidden": i,
	    className: [i$3.icon, i$3[m], t].filter(e => e).join(" "),
	    role: "img",
	    xmlns: "http://www.w3.org/2000/svg",
	    viewBox: "0 0 24 24",
	    color: c,
	    style: n
	  }, d), /*#__PURE__*/l$2.createElement("path", {
	    fillRule: "evenodd",
	    clipRule: "evenodd",
	    d: "M18 7.5L13.5 12L18 16.5L16.5 18L12 13.5L7.5 18L6 16.5L10.5 12L6 7.5L7.5 6L12 10.5L16.5 6L18 7.5Z",
	    fill: "currentColor"
	  }));
	};

	const s$1 = s => {
	  var {
	      "aria-label": o = "cross-circle",
	      "aria-hidden": i = true,
	      className: t = "",
	      color: c,
	      size: m = a.Small,
	      style: n = {}
	    } = s,
	    d = o$1(s, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
	  return /*#__PURE__*/l$2.createElement("svg", Object.assign({
	    "aria-label": o,
	    "aria-hidden": i,
	    className: [i$3.icon, i$3[m], t].filter(e => e).join(" "),
	    role: "img",
	    xmlns: "http://www.w3.org/2000/svg",
	    viewBox: "0 0 24 24",
	    color: c,
	    style: n
	  }, d), /*#__PURE__*/l$2.createElement("path", {
	    fillRule: "evenodd",
	    clipRule: "evenodd",
	    d: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM15 7.5L16.5 9L13.5 12L16.5 15L15 16.5L12 13.5L9 16.5L7.5 15L10.5 12L7.5 9L9 7.5L12 10.5L15 7.5Z",
	    fill: "currentColor"
	  }));
	};

	const s = s => {
	  var {
	      "aria-label": i = "question-circle",
	      "aria-hidden": o = true,
	      className: t = "",
	      color: c,
	      size: C = a.Small,
	      style: n = {}
	    } = s,
	    m = o$1(s, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
	  return /*#__PURE__*/l$2.createElement("svg", Object.assign({
	    "aria-label": i,
	    "aria-hidden": o,
	    className: [i$3.icon, i$3[C], t].filter(e => e).join(" "),
	    role: "img",
	    xmlns: "http://www.w3.org/2000/svg",
	    viewBox: "0 0 24 24",
	    color: c,
	    style: n
	  }, m), /*#__PURE__*/l$2.createElement("path", {
	    fillRule: "evenodd",
	    clipRule: "evenodd",
	    d: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM13 16V18H11V16H13ZM12.0437 5.75C14.0343 5.75 15.7173 7.29464 15.7173 9.42361C15.7173 10.7806 15.2461 11.489 14.161 12.306L13.9187 12.4844C13.1753 13.0295 12.9556 13.3359 12.9386 14.142L12.9375 14.25H10.9375C10.9375 12.6746 11.4591 11.8378 12.6143 10.9622L12.8618 10.7796C13.5685 10.2628 13.7173 10.0539 13.7173 9.42361C13.7173 8.43934 12.9662 7.75 12.0437 7.75C11.1907 7.75 10.4785 8.34077 10.3816 9.20835L10.3734 9.30587L8.37663 9.19182C8.49191 7.17347 10.1344 5.75 12.0437 5.75Z",
	    fill: "currentColor"
	  }));
	};

	e$1(':root{--breakpoint-xs:320px;--breakpoint-s:576px;--breakpoint-m:768px;--breakpoint-l:992px;--breakpoint-xl:1248px;--container-width-xs:288px;--container-width-s:544px;--container-width-m:720px;--container-width-l:944px;--container-width-xl:1200px;--color-brick:#bd2719;--color-brick-light:#ffeeed;--color-brick-medium-light:#facbc8;--color-brick-dark:#800e04;--color-bus:#0000bf;--color-bus-light:#f0f0ff;--color-bus-medium-light:#ccf;--color-bus-dark:#00005e;--color-coat-of-arms:#0072c6;--color-coat-of-arms-light:#e6f4ff;--color-coat-of-arms-medium-light:#b5daf7;--color-coat-of-arms-dark:#005799;--color-copper:#00d7a7;--color-copper-light:#cffaf1;--color-copper-medium-light:#9ef0de;--color-copper-dark:#00a17d;--color-engel:#ffe977;--color-engel-light:#fff9db;--color-engel-medium-light:#fff3b8;--color-engel-dark:#dbc030;--color-fog:#9fc9eb;--color-fog-light:#e8f3fc;--color-fog-medium-light:#d0e6f7;--color-fog-dark:#72a5cf;--color-gold:#c2a251;--color-gold-light:#f7f2e4;--color-gold-medium-light:#e8d7a7;--color-gold-dark:#9e823c;--color-metro:#fd4f00;--color-metro-light:#ffeee6;--color-metro-medium-light:#ffcab3;--color-metro-dark:#bd2f00;--color-silver:#dedfe1;--color-silver-light:#f7f7f8;--color-silver-medium-light:#efeff0;--color-silver-dark:#b0b8bf;--color-summer:#ffc61e;--color-summer-light:#fff4d4;--color-summer-medium-light:#ffe49c;--color-summer-dark:#cc9200;--color-suomenlinna:#f5a3c7;--color-suomenlinna-light:#fff0f7;--color-suomenlinna-medium-light:#ffdbeb;--color-suomenlinna-dark:#e673a5;--color-tram:#008741;--color-tram-light:#dff7eb;--color-tram-medium-light:#a3e3c2;--color-tram-dark:#006631;--color-focus-outline:#0072c6;--color-black:#000;--color-white:#fff;--color-black-5:#f2f2f2;--color-black-10:#e6e6e6;--color-black-20:#ccc;--color-black-30:#b3b3b3;--color-black-40:#999;--color-black-50:grey;--color-black-60:#595959;--color-black-70:#4d4d4d;--color-black-80:#333;--color-black-90:#1a1a1a;--color-error:#b01038;--color-error-light:#f6e2e6;--color-error-dark:#8d0d2d;--color-success:#007a64;--color-success-light:#e2f5f3;--color-success-dark:#006250;--color-alert:#ffda07;--color-alert-light:#fff4b4;--color-alert-dark:#d18200;--color-info:#0062b9;--color-info-light:#e5eff8;--color-info-dark:#004f94;--box-shadow-s:0px 2px 10px 0px rgba(0,0,0,0.07);--box-shadow-m:0px 2px 10px 0px rgba(0,0,0,0.1);--box-shadow-l:0px 2px 20px 0px rgba(0,0,0,0.2);--spacing-layout-2-xs:1rem;--spacing-layout-xs:1.5rem;--spacing-layout-s:2rem;--spacing-layout-m:3rem;--spacing-layout-l:4rem;--spacing-layout-xl:6rem;--spacing-layout-2-xl:8rem;--spacing-4-xs:0.125rem;--spacing-3-xs:0.25rem;--spacing-2-xs:0.5rem;--spacing-xs:0.75rem;--spacing-s:1rem;--spacing-m:1.5rem;--spacing-l:2rem;--spacing-xl:2.5rem;--spacing-2-xl:3.0rem;--spacing-3-xl:3.5rem;--spacing-4-xl:4rem;--spacing-5-xl:4.5rem;--fontsize-heading-xxl:4rem;--fontsize-heading-xl:3rem;--fontsize-heading-xl-mobile:2.5rem;--fontsize-heading-l:2rem;--fontsize-heading-m:1.5rem;--fontsize-heading-s:1.25rem;--fontsize-heading-xs:1.125rem;--fontsize-heading-xxs:1rem;--fontsize-body-s:0.875rem;--fontsize-body-m:1rem;--fontsize-body-l:1.125rem;--fontsize-body-xl:1.25rem;--font-default:HelsinkiGrotesk,Arial,sans-serif;--lineheight-s:1;--lineheight-m:1.2;--lineheight-l:1.5;--lineheight-xl:1.75}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.visually-hidden{border:0;clip:"rect(0 0 0 0)";height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.button-reset{background:none;border:none;color:inherit;cursor:pointer;font:inherit;padding:0}.text-body{color:var(--color-black-90);font-size:var(--fontsize-body-m);line-height:var(--lineheight-l)}.text-body,.text-medium{font-family:var(--font-default)}.text-medium{font-weight:500}.text-bold{font-family:var(--font-default);font-weight:700}.text-xl{font-size:var(--fontsize-heading-m)}.text-lg{font-size:var(--fontsize-heading-s)}.text-md{font-size:var(--fontsize-heading-xs)}.subtitle{font-size:var(--fontsize-body-m)}.text-sm{font-size:var(--fontsize-body-s);line-height:var(--lineheight-xl)}.heading-xxl{font-size:var(--fontsize-heading-xxl);letter-spacing:-1.2px}.heading-xl,.heading-xxl{font-weight:400;line-height:var(--lineheight-s)}.heading-xl{font-size:var(--fontsize-heading-xl);letter-spacing:-1px}.heading-xl-mobile{font-size:var(--fontsize-heading-xl-mobile);font-weight:400;letter-spacing:-.8px;line-height:var(--lineheight-s)}.heading-l{font-size:var(--fontsize-heading-l);font-weight:400;letter-spacing:-.4px}.heading-l,.heading-m{line-height:var(--lineheight-m)}.heading-m{font-size:var(--fontsize-heading-m);font-weight:500;letter-spacing:-.2px}.heading-s{font-size:var(--fontsize-heading-s);font-weight:500}.heading-s,.heading-xs{letter-spacing:0;line-height:var(--lineheight-l)}.heading-xs{font-size:var(--fontsize-heading-xs);font-weight:700}.heading-xxs{font-size:var(--fontsize-heading-xxs);font-weight:700;letter-spacing:.2px;line-height:var(--lineheight-l)}.helper-text{color:var(--color-black-60);display:block;flex-basis:100%;font-size:var(--fontsize-body-m);margin-top:var(--spacing-2-xs)}html{-webkit-text-size-adjust:100%}');

	const t$2 = {}.hasOwnProperty;
	function n$3(r) {
	  const o = typeof r;
	  return r ? "string" === o || "number" === o ? r : Array.isArray(r) ? r.length ? r.map(t => n$3(t)).filter(Boolean).join(" ") : null : "object" === o ? ((n, r = null) => {
	    if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) return n.toString();
	    const o = Object.assign({}, n);
	    return r && Object.keys(r).filter(t => !!n[t]).forEach(t => {
	      o[r[t]] = true;
	    }), Object.keys(o).filter(n => t$2.call(o, n) && !!o[n]).join(" ");
	  })(r, this) : null : null;
	}
	var r$5 = (...t) => t.map(n$3).filter(Boolean).join(" ");

	const e = () => "undefined" == typeof window || "undefined" == typeof document;

	const r$4 = "undefined" != typeof window && window.document ? l$2.useLayoutEffect : l$2.useEffect,
	  d$3 = (e$1, t, d) => {
	    const c = t && "string" != typeof t,
	      i = l$2.useRef(c ? lodash.uniqueId("custom-theme-") : "").current;
	    return r$4(() => {
	      c && ((e$1, t, n) => {
	        if (e()) return;
	        const o = t => {
	          var o;
	          return null === (o = t.selectorText) || void 0 === o ? void 0 : o.includes(`${e$1}.${n}`);
	        };
	        try {
	          let s = [...document.styleSheets].findIndex(t => {
	            try {
	              return [...t.cssRules].findIndex(t => {
	                var n;
	                return null === (n = t.selectorText) || void 0 === n ? void 0 : n.includes(e$1);
	              }) >= 0;
	            } catch (e) {
	              return !1;
	            }
	          });
	          if (-1 === s) {
	            const e = document.createElement("style");
	            document.head.appendChild(e), s = document.styleSheets.length - 1;
	          }
	          const r = document.styleSheets[s],
	            d = r.cssRules;
	          let c = [...d].findIndex(o);
	          -1 === c && (r.insertRule(`.${e$1}.${n} { content: '' }`, d.length), c = [...d].findIndex(o));
	          const i = d[c];
	          Object.entries(t).forEach(([e, t]) => i.style.setProperty(e, t));
	        } catch (t) {
	          console.warn(`Could not find the stylesheet to update with the "${e$1}" selector!`);
	        }
	      })(e$1.split(" ")[0], t, `${i}${""}`);
	    }, [e$1, t, i, c, d]), i;
	  };

	var l$1,
	  t$1,
	  n$2,
	  d$2 = {
	    button: "Button-module_button__1msFE",
	    primary: "Button-module_primary__2LfKB",
	    secondary: "Button-module_secondary__1nABp",
	    supplementary: "Button-module_supplementary__3YKiS",
	    "theme-coat": "Button-module_theme-coat__2_3U7",
	    "theme-black": "Button-module_theme-black__m8giY",
	    clear: "Button-module_clear__2i_5U",
	    success: "Button-module_success__CU9nK",
	    danger: "Button-module_danger__2el15",
	    "size-small": "Button-module_size-small__3lizH",
	    fullWidth: "Button-module_fullWidth__31eVK",
	    icon: "Button-module_icon__O-h7R"
	  };
	e$1(".Button-module_button__1msFE{--border-width:2px;--outline-width-focus:3px;--padding-horizontal:var(--spacing-l);--min-size:56px;--padding-vertical:var(--spacing-s);--padding:calc(var(--padding-vertical) - var(--border-width)) calc(var(--padding-horizontal) - var(--border-width));--icon-reposition:calc(-1 * var(--spacing-2-xs));--computed-background-color:var(--background-color,transparent);--computed-background-color-focus:var(--background-color-focus,var(--computed-background-color,transparent));--computed-background-color-hover:var(--background-color-hover,var(--computed-background-color-focus,transparent));--computed-background-color-active:var(--background-color-active,var(--computed-background-color-hover,transparent));--computed-background-color-disabled:var(--background-color-disabled,var(--color-black-20,transparent));--computed-color:var(--color,inherit);--computed-color-focus:var(--color-focus,var(--computed-color,inherit));--computed-color-hover:var(--color-hover,var(--computed-color-focus,inherit));--computed-color-active:var(--color-active,var(--computed-color-hover,inherit));--computed-color-disabled:var(--color-disabled,var(--color-white,inherit));--computed-border-color:var(--border-color,var(--computed-background-color));--computed-border-color-focus:var(--border-color-focus,var(--computed-border-color,transparent));--computed-border-color-hover:var(--border-color-hover,var(--computed-border-color-focus,transparent));--computed-border-color-active:var(--border-color-active,var(--computed-border-color-hover,transparent));--computed-border-color-disabled:var(--border-color-disabled,var(--computed-background-color-disabled,transparent));--computed-outline-color-focus:var(--outline-color-focus,transparent);--computed-icon-size:var(--icon-size,var(--spacing-m));align-content:flex-start;align-items:center;background-color:var(--computed-background-color);border:var(--border-width) solid var(--computed-border-color);border-radius:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--computed-color,inherit);column-gap:var(--spacing-2-xs);cursor:var(--cursor,pointer);display:inline-flex;font-family:inherit;font-size:100%;font-weight:500;hyphens:auto;justify-content:center;line-height:var(--lineheight-l);margin:0;min-height:var(--min-size);min-width:var(--min-size);outline:none;outline-offset:2px;overflow:hidden;overflow-wrap:anywhere;padding:var(--padding);position:relative;text-align:center;text-decoration:none;text-transform:none;vertical-align:top}.Button-module_button__1msFE:after{margin-right:var(--icon-reposition)}.Button-module_button__1msFE:before{margin-left:var(--icon-reposition)}.Button-module_button__1msFE,.Button-module_button__1msFE[type=button],.Button-module_button__1msFE[type=reset],.Button-module_button__1msFE[type=submit]{-webkit-appearance:button}.Button-module_button__1msFE:focus-visible{background-color:var(--computed-background-color-focus);border-color:var(--computed-border-color-focus);color:var(--computed-color-focus);outline:var(--outline-width-focus) solid var(--computed-outline-color-focus)}.Button-module_button__1msFE:hover{background-color:var(--computed-background-color-hover);border-color:var(--computed-border-color-hover);color:var(--computed-color-hover)}.Button-module_button__1msFE:active{background-color:var(--computed-background-color-active);border-color:var(--computed-border-color-active);color:var(--computed-color-active);outline:var(--outline-width-focus) solid var(--computed-outline-color-focus)}.Button-module_button__1msFE:disabled{--cursor:not-allowed;background-color:var(--computed-background-color-disabled);border-color:var(--computed-border-color-disabled);color:var(--computed-color-disabled);outline:none}.Button-module_button__1msFE button.Button-module_button__1msFE{-webkit-appearance:button}.Button-module_primary__2LfKB{--background-color:var(--color-bus);--background-color-hover:var(--color-bus-dark);--background-color-focus:var(--color-bus);--background-color-disabled:var(--color-black-20);--border-color:transparent;--color:var(--color-white);--color-disabled:var(--color-white);--outline-color-focus:var(--color-coat-of-arms)}.Button-module_secondary__1nABp{--border-color:var(--color-bus);--border-color-disabled:var(--color-disabled)}.Button-module_secondary__1nABp,.Button-module_supplementary__3YKiS{--background-color:transparent;--background-color-hover:var(--color-bus-light);--background-color-focus:transparent;--background-color-disabled:transparent;--color:var(--color-bus);--color-disabled:var(--color-black-40);--outline-color-focus:var(--color-coat-of-arms)}.Button-module_supplementary__3YKiS{--border-color:transparent;--border-color-disabled:transparent}.Button-module_theme-coat__2_3U7.Button-module_primary__2LfKB{--background-color:var(--color-bus);--background-color-hover:var(--color-bus-dark);--background-color-focus:var(--color-bus);--background-color-disabled:var(--color-black-20);--border-color:transparent;--color-disabled:var(--color-white);--outline-color-focus:var(--color-coat-of-arms);--background-color:var(--color-coat-of-arms);--background-color-hover:var(--color-coat-of-arms-dark);--background-color-focus:var(--color-coat-of-arms);--border-color:var(--color-coat-of-arms);--border-color-hover:var(--color-coat-of-arms-dark);--border-color-focus:var(--color-coat-of-arms);--color:var(--color-white)}.Button-module_theme-coat__2_3U7.Button-module_secondary__1nABp{--border-color:var(--color-bus);--border-color-disabled:var(--color-disabled);--border-color:var(--color-coat-of-arms)}.Button-module_theme-coat__2_3U7.Button-module_secondary__1nABp,.Button-module_theme-coat__2_3U7.Button-module_supplementary__3YKiS{--background-color-hover:var(--color-bus-light);--background-color-disabled:transparent;--color:var(--color-bus);--color-disabled:var(--color-black-40);--outline-color-focus:var(--color-coat-of-arms);--background-color:transparent;--background-color-hover:var(--color-coat-of-arms-light);--background-color-focus:transparent;--color:var(--color-coat-of-arms)}.Button-module_theme-coat__2_3U7.Button-module_supplementary__3YKiS{--border-color-disabled:transparent;--border-color:transparent}.Button-module_theme-black__m8giY.Button-module_primary__2LfKB{--background-color:var(--color-bus);--background-color-hover:var(--color-bus-dark);--background-color-focus:var(--color-bus);--background-color-disabled:var(--color-black-20);--border-color:transparent;--color-disabled:var(--color-white);--outline-color-focus:var(--color-coat-of-arms);--background-color:var(--color-black);--background-color-hover:var(--color-black);--background-color-focus:var(--color-black);--border-color:var(--color-black);--border-color-hover:var(--color-black);--border-color-focus:var(--color-black);--color:var(--color-white);--color-hover:var(--color-white);--color-focus:var(--color-white)}.Button-module_theme-black__m8giY.Button-module_secondary__1nABp{--border-color:var(--color-bus);--border-color-disabled:var(--color-disabled);--border-color:var(--color-black);--border-color-hover:var(--color-black);--border-color-focus:var(--color-black)}.Button-module_theme-black__m8giY.Button-module_secondary__1nABp,.Button-module_theme-black__m8giY.Button-module_supplementary__3YKiS{--background-color-hover:var(--color-bus-light);--background-color-disabled:transparent;--color:var(--color-bus);--color-disabled:var(--color-black-40);--outline-color-focus:var(--color-coat-of-arms);--background-color:transparent;--background-color-hover:var(--color-black-5);--background-color-focus:transparent;--color:var(--color-black);--color-hover:var(--color-black);--color-focus:var(--color-black)}.Button-module_theme-black__m8giY.Button-module_supplementary__3YKiS{--border-color-disabled:transparent;--border-color:transparent;--border-color-hover:transparent}.Button-module_clear__2i_5U{--background-color:transparent;--background-color-disabled:transparent;--border-color:transparent;--border-color-disabled:transparent;--color:var(--color-black-90);--color-disabled:var(--color-black-90)}.Button-module_success__CU9nK{--background-color:var(--color-success);--background-color-hover:var(--color-success-dark);--background-color-focus:var(--color-success);--border-color:var(--color-success);--border-color-hover:var(--color-success-dark);--border-color-focus:var(--color-success)}.Button-module_danger__2el15,.Button-module_success__CU9nK{--color:var(--color-white);--outline-color-focus:var(--color-coat-of-arms)}.Button-module_danger__2el15{--background-color:var(--color-error);--background-color-hover:var(--color-error-dark);--background-color-focus:var(--color-error);--border-color:var(--color-error);--border-color-hover:var(--color-error-dark);--border-color-focus:var(--color-error)}.Button-module_size-small__3lizH{--min-size:44px;--padding-horizontal:var(--spacing-m);--padding-vertical:var(--spacing-2-xs)}.Button-module_fullWidth__31eVK{width:100%}.Button-module_icon__O-h7R{flex-shrink:0;height:var(--computed-icon-size);width:var(--computed-icon-size)}.Button-module_icon__O-h7R:first-child:not(:last-child){margin-left:var(--icon-reposition)}.Button-module_icon__O-h7R:last-child:not(:first-child){margin-right:var(--icon-reposition)}"), function (o) {
	  o.Small = "small", o.Medium = "medium";
	}(l$1 || (l$1 = {})), function (o) {
	  o.Bus = "bus", o.Coat = "coat", o.Black = "black";
	}(t$1 || (t$1 = {})), function (o) {
	  o.Primary = "primary", o.Secondary = "secondary", o.Supplementary = "supplementary", o.Success = "success", o.Danger = "danger", o.Clear = "clear";
	}(n$2 || (n$2 = {}));
	const u$1 = /*#__PURE__*/l$2.forwardRef((c, u) => {
	  var {
	      children: s,
	      className: i,
	      disabled: b = false,
	      fullWidth: m,
	      size: v = l$1.Medium,
	      theme: _ = t$1.Bus,
	      variant: p = n$2.Primary,
	      iconStart: g,
	      iconEnd: h,
	      onClick: k
	    } = c,
	    f = o$1(c, ["children", "className", "disabled", "fullWidth", "size", "theme", "variant", "iconStart", "iconEnd", "onClick"]);
	  const B = d$3(d$2.button, _),
	    y = g ? /*#__PURE__*/l$2.createElement("div", {
	      className: d$2.icon,
	      "aria-hidden": "true"
	    }, g) : null,
	    w = h ? /*#__PURE__*/l$2.createElement("div", {
	      className: r$5(d$2.icon),
	      "aria-hidden": "true"
	    }, h) : null;
	  return /*#__PURE__*/l$2.createElement("button", Object.assign({
	    ref: u,
	    disabled: b,
	    type: "button",
	    className: r$5(d$2.button, d$2[p], "string" == typeof _ ? d$2[`theme-${_}`] : "", d$2[`size-${v}`], m ? d$2.fullWidth : "", B, i),
	    onClick: b ? void 0 : k
	  }, f), y, /*#__PURE__*/l$2.createElement("span", null, s), w);
	});

	var t = (t, e) => {
	  lodash.isFunction(t) ? t(e.current) : t.current = e.current;
	};

	var r$3 = (r, e, n, l, o) => {
	  const s = [e && `${r}-helper`, n && `${r}-error`, l && `${r}-success`, o && `${r}-info`].filter(r => r);
	  return s.length ? s.join(" ") : null;
	};

	/**
	 * Simple ponyfill for Object.fromEntries
	 */

	var fromEntries = function fromEntries(entries) {
	  return entries.reduce(function (acc, _ref) {
	    var key = _ref[0],
	      value = _ref[1];
	    acc[key] = value;
	    return acc;
	  }, {});
	};
	/**
	 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
	 */

	var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? l__namespace.useLayoutEffect : l__namespace.useEffect;

	var top = 'top';
	var bottom = 'bottom';
	var right = 'right';
	var left = 'left';
	var auto = 'auto';
	var basePlacements = [top, bottom, right, left];
	var start = 'start';
	var end = 'end';
	var clippingParents = 'clippingParents';
	var viewport = 'viewport';
	var popper = 'popper';
	var reference = 'reference';
	var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
	  return acc.concat([placement + "-" + start, placement + "-" + end]);
	}, []);
	var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
	  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
	}, []); // modifiers that need to read the DOM

	var beforeRead = 'beforeRead';
	var read = 'read';
	var afterRead = 'afterRead'; // pure-logic modifiers

	var beforeMain = 'beforeMain';
	var main = 'main';
	var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

	var beforeWrite = 'beforeWrite';
	var write = 'write';
	var afterWrite = 'afterWrite';
	var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

	function getNodeName(element) {
	  return element ? (element.nodeName || '').toLowerCase() : null;
	}

	function getWindow(node) {
	  if (node == null) {
	    return window;
	  }
	  if (node.toString() !== '[object Window]') {
	    var ownerDocument = node.ownerDocument;
	    return ownerDocument ? ownerDocument.defaultView || window : window;
	  }
	  return node;
	}

	function isElement(node) {
	  var OwnElement = getWindow(node).Element;
	  return node instanceof OwnElement || node instanceof Element;
	}
	function isHTMLElement(node) {
	  var OwnElement = getWindow(node).HTMLElement;
	  return node instanceof OwnElement || node instanceof HTMLElement;
	}
	function isShadowRoot(node) {
	  // IE 11 has no ShadowRoot
	  if (typeof ShadowRoot === 'undefined') {
	    return false;
	  }
	  var OwnElement = getWindow(node).ShadowRoot;
	  return node instanceof OwnElement || node instanceof ShadowRoot;
	}

	// and applies them to the HTMLElements such as popper and arrow

	function applyStyles(_ref) {
	  var state = _ref.state;
	  Object.keys(state.elements).forEach(function (name) {
	    var style = state.styles[name] || {};
	    var attributes = state.attributes[name] || {};
	    var element = state.elements[name]; // arrow is optional + virtual elements

	    if (!isHTMLElement(element) || !getNodeName(element)) {
	      return;
	    } // Flow doesn't support to extend this property, but it's the most
	    // effective way to apply styles to an HTMLElement
	    // $FlowFixMe[cannot-write]

	    Object.assign(element.style, style);
	    Object.keys(attributes).forEach(function (name) {
	      var value = attributes[name];
	      if (value === false) {
	        element.removeAttribute(name);
	      } else {
	        element.setAttribute(name, value === true ? '' : value);
	      }
	    });
	  });
	}
	function effect$2(_ref2) {
	  var state = _ref2.state;
	  var initialStyles = {
	    popper: {
	      position: state.options.strategy,
	      left: '0',
	      top: '0',
	      margin: '0'
	    },
	    arrow: {
	      position: 'absolute'
	    },
	    reference: {}
	  };
	  Object.assign(state.elements.popper.style, initialStyles.popper);
	  state.styles = initialStyles;
	  if (state.elements.arrow) {
	    Object.assign(state.elements.arrow.style, initialStyles.arrow);
	  }
	  return function () {
	    Object.keys(state.elements).forEach(function (name) {
	      var element = state.elements[name];
	      var attributes = state.attributes[name] || {};
	      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

	      var style = styleProperties.reduce(function (style, property) {
	        style[property] = '';
	        return style;
	      }, {}); // arrow is optional + virtual elements

	      if (!isHTMLElement(element) || !getNodeName(element)) {
	        return;
	      }
	      Object.assign(element.style, style);
	      Object.keys(attributes).forEach(function (attribute) {
	        element.removeAttribute(attribute);
	      });
	    });
	  };
	} // eslint-disable-next-line import/no-unused-modules

	var applyStyles$1 = {
	  name: 'applyStyles',
	  enabled: true,
	  phase: 'write',
	  fn: applyStyles,
	  effect: effect$2,
	  requires: ['computeStyles']
	};

	function getBasePlacement(placement) {
	  return placement.split('-')[0];
	}

	var max$1 = Math.max;
	var min = Math.min;
	var round = Math.round;

	function getBoundingClientRect(element, includeScale) {
	  if (includeScale === void 0) {
	    includeScale = false;
	  }
	  var rect = element.getBoundingClientRect();
	  var scaleX = 1;
	  var scaleY = 1;
	  if (isHTMLElement(element) && includeScale) {
	    var offsetHeight = element.offsetHeight;
	    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
	    // Fallback to 1 in case both values are `0`

	    if (offsetWidth > 0) {
	      scaleX = round(rect.width) / offsetWidth || 1;
	    }
	    if (offsetHeight > 0) {
	      scaleY = round(rect.height) / offsetHeight || 1;
	    }
	  }
	  return {
	    width: rect.width / scaleX,
	    height: rect.height / scaleY,
	    top: rect.top / scaleY,
	    right: rect.right / scaleX,
	    bottom: rect.bottom / scaleY,
	    left: rect.left / scaleX,
	    x: rect.left / scaleX,
	    y: rect.top / scaleY
	  };
	}

	// means it doesn't take into account transforms.

	function getLayoutRect(element) {
	  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
	  // Fixes https://github.com/popperjs/popper-core/issues/1223

	  var width = element.offsetWidth;
	  var height = element.offsetHeight;
	  if (Math.abs(clientRect.width - width) <= 1) {
	    width = clientRect.width;
	  }
	  if (Math.abs(clientRect.height - height) <= 1) {
	    height = clientRect.height;
	  }
	  return {
	    x: element.offsetLeft,
	    y: element.offsetTop,
	    width: width,
	    height: height
	  };
	}

	function contains(parent, child) {
	  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

	  if (parent.contains(child)) {
	    return true;
	  } // then fallback to custom implementation with Shadow DOM support
	  else if (rootNode && isShadowRoot(rootNode)) {
	    var next = child;
	    do {
	      if (next && parent.isSameNode(next)) {
	        return true;
	      } // $FlowFixMe[prop-missing]: need a better way to handle this...

	      next = next.parentNode || next.host;
	    } while (next);
	  } // Give up, the result is false

	  return false;
	}

	function getComputedStyle(element) {
	  return getWindow(element).getComputedStyle(element);
	}

	function isTableElement(element) {
	  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
	}

	function getDocumentElement(element) {
	  // $FlowFixMe[incompatible-return]: assume body is always available
	  return ((isElement(element) ? element.ownerDocument :
	  // $FlowFixMe[prop-missing]
	  element.document) || window.document).documentElement;
	}

	function getParentNode(element) {
	  if (getNodeName(element) === 'html') {
	    return element;
	  }
	  return (
	    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
	    // $FlowFixMe[incompatible-return]
	    // $FlowFixMe[prop-missing]
	    element.assignedSlot ||
	    // step into the shadow DOM of the parent of a slotted node
	    element.parentNode || (
	    // DOM Element detected
	    isShadowRoot(element) ? element.host : null) ||
	    // ShadowRoot detected
	    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
	    getDocumentElement(element) // fallback
	  );
	}

	function getTrueOffsetParent(element) {
	  if (!isHTMLElement(element) ||
	  // https://github.com/popperjs/popper-core/issues/837
	  getComputedStyle(element).position === 'fixed') {
	    return null;
	  }
	  return element.offsetParent;
	} // `.offsetParent` reports `null` for fixed elements, while absolute elements
	// return the containing block

	function getContainingBlock(element) {
	  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
	  var isIE = navigator.userAgent.indexOf('Trident') !== -1;
	  if (isIE && isHTMLElement(element)) {
	    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
	    var elementCss = getComputedStyle(element);
	    if (elementCss.position === 'fixed') {
	      return null;
	    }
	  }
	  var currentNode = getParentNode(element);
	  if (isShadowRoot(currentNode)) {
	    currentNode = currentNode.host;
	  }
	  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
	    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
	    // create a containing block.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

	    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
	      return currentNode;
	    } else {
	      currentNode = currentNode.parentNode;
	    }
	  }
	  return null;
	} // Gets the closest ancestor positioned element. Handles some edge cases,
	// such as table ancestors and cross browser bugs.

	function getOffsetParent(element) {
	  var window = getWindow(element);
	  var offsetParent = getTrueOffsetParent(element);
	  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
	    offsetParent = getTrueOffsetParent(offsetParent);
	  }
	  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
	    return window;
	  }
	  return offsetParent || getContainingBlock(element) || window;
	}

	function getMainAxisFromPlacement(placement) {
	  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
	}

	function within(min$1, value, max) {
	  return max$1(min$1, min(value, max));
	}
	function withinMaxClamp(min, value, max) {
	  var v = within(min, value, max);
	  return v > max ? max : v;
	}

	function getFreshSideObject() {
	  return {
	    top: 0,
	    right: 0,
	    bottom: 0,
	    left: 0
	  };
	}

	function mergePaddingObject(paddingObject) {
	  return Object.assign({}, getFreshSideObject(), paddingObject);
	}

	function expandToHashMap(value, keys) {
	  return keys.reduce(function (hashMap, key) {
	    hashMap[key] = value;
	    return hashMap;
	  }, {});
	}

	var toPaddingObject = function toPaddingObject(padding, state) {
	  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
	    placement: state.placement
	  })) : padding;
	  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	};
	function arrow(_ref) {
	  var _state$modifiersData$;
	  var state = _ref.state,
	    name = _ref.name,
	    options = _ref.options;
	  var arrowElement = state.elements.arrow;
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var basePlacement = getBasePlacement(state.placement);
	  var axis = getMainAxisFromPlacement(basePlacement);
	  var isVertical = [left, right].indexOf(basePlacement) >= 0;
	  var len = isVertical ? 'height' : 'width';
	  if (!arrowElement || !popperOffsets) {
	    return;
	  }
	  var paddingObject = toPaddingObject(options.padding, state);
	  var arrowRect = getLayoutRect(arrowElement);
	  var minProp = axis === 'y' ? top : left;
	  var maxProp = axis === 'y' ? bottom : right;
	  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
	  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
	  var arrowOffsetParent = getOffsetParent(arrowElement);
	  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
	  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
	  // outside of the popper bounds

	  var min = paddingObject[minProp];
	  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
	  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
	  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

	  var axisProp = axis;
	  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
	}
	function effect$1(_ref2) {
	  var state = _ref2.state,
	    options = _ref2.options;
	  var _options$element = options.element,
	    arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
	  if (arrowElement == null) {
	    return;
	  } // CSS selector

	  if (typeof arrowElement === 'string') {
	    arrowElement = state.elements.popper.querySelector(arrowElement);
	    if (!arrowElement) {
	      return;
	    }
	  }
	  {
	    if (!isHTMLElement(arrowElement)) {
	      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
	    }
	  }
	  if (!contains(state.elements.popper, arrowElement)) {
	    {
	      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
	    }
	    return;
	  }
	  state.elements.arrow = arrowElement;
	} // eslint-disable-next-line import/no-unused-modules

	var arrow$1 = {
	  name: 'arrow',
	  enabled: true,
	  phase: 'main',
	  fn: arrow,
	  effect: effect$1,
	  requires: ['popperOffsets'],
	  requiresIfExists: ['preventOverflow']
	};

	function getVariation(placement) {
	  return placement.split('-')[1];
	}

	var unsetSides = {
	  top: 'auto',
	  right: 'auto',
	  bottom: 'auto',
	  left: 'auto'
	}; // Round the offsets to the nearest suitable subpixel based on the DPR.
	// Zooming can change the DPR, but it seems to report a value that will
	// cleanly divide the values into the appropriate subpixels.

	function roundOffsetsByDPR(_ref) {
	  var x = _ref.x,
	    y = _ref.y;
	  var win = window;
	  var dpr = win.devicePixelRatio || 1;
	  return {
	    x: round(x * dpr) / dpr || 0,
	    y: round(y * dpr) / dpr || 0
	  };
	}
	function mapToStyles(_ref2) {
	  var _Object$assign2;
	  var popper = _ref2.popper,
	    popperRect = _ref2.popperRect,
	    placement = _ref2.placement,
	    variation = _ref2.variation,
	    offsets = _ref2.offsets,
	    position = _ref2.position,
	    gpuAcceleration = _ref2.gpuAcceleration,
	    adaptive = _ref2.adaptive,
	    roundOffsets = _ref2.roundOffsets,
	    isFixed = _ref2.isFixed;
	  var _offsets$x = offsets.x,
	    x = _offsets$x === void 0 ? 0 : _offsets$x,
	    _offsets$y = offsets.y,
	    y = _offsets$y === void 0 ? 0 : _offsets$y;
	  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
	    x: x,
	    y: y
	  }) : {
	    x: x,
	    y: y
	  };
	  x = _ref3.x;
	  y = _ref3.y;
	  var hasX = offsets.hasOwnProperty('x');
	  var hasY = offsets.hasOwnProperty('y');
	  var sideX = left;
	  var sideY = top;
	  var win = window;
	  if (adaptive) {
	    var offsetParent = getOffsetParent(popper);
	    var heightProp = 'clientHeight';
	    var widthProp = 'clientWidth';
	    if (offsetParent === getWindow(popper)) {
	      offsetParent = getDocumentElement(popper);
	      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
	        heightProp = 'scrollHeight';
	        widthProp = 'scrollWidth';
	      }
	    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

	    offsetParent = offsetParent;
	    if (placement === top || (placement === left || placement === right) && variation === end) {
	      sideY = bottom;
	      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
	      // $FlowFixMe[prop-missing]
	      offsetParent[heightProp];
	      y -= offsetY - popperRect.height;
	      y *= gpuAcceleration ? 1 : -1;
	    }
	    if (placement === left || (placement === top || placement === bottom) && variation === end) {
	      sideX = right;
	      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
	      // $FlowFixMe[prop-missing]
	      offsetParent[widthProp];
	      x -= offsetX - popperRect.width;
	      x *= gpuAcceleration ? 1 : -1;
	    }
	  }
	  var commonStyles = Object.assign({
	    position: position
	  }, adaptive && unsetSides);
	  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
	    x: x,
	    y: y
	  }) : {
	    x: x,
	    y: y
	  };
	  x = _ref4.x;
	  y = _ref4.y;
	  if (gpuAcceleration) {
	    var _Object$assign;
	    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
	  }
	  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
	}
	function computeStyles(_ref5) {
	  var state = _ref5.state,
	    options = _ref5.options;
	  var _options$gpuAccelerat = options.gpuAcceleration,
	    gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
	    _options$adaptive = options.adaptive,
	    adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
	    _options$roundOffsets = options.roundOffsets,
	    roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
	  {
	    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';
	    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
	      return transitionProperty.indexOf(property) >= 0;
	    })) {
	      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
	    }
	  }
	  var commonStyles = {
	    placement: getBasePlacement(state.placement),
	    variation: getVariation(state.placement),
	    popper: state.elements.popper,
	    popperRect: state.rects.popper,
	    gpuAcceleration: gpuAcceleration,
	    isFixed: state.options.strategy === 'fixed'
	  };
	  if (state.modifiersData.popperOffsets != null) {
	    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
	      offsets: state.modifiersData.popperOffsets,
	      position: state.options.strategy,
	      adaptive: adaptive,
	      roundOffsets: roundOffsets
	    })));
	  }
	  if (state.modifiersData.arrow != null) {
	    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
	      offsets: state.modifiersData.arrow,
	      position: 'absolute',
	      adaptive: false,
	      roundOffsets: roundOffsets
	    })));
	  }
	  state.attributes.popper = Object.assign({}, state.attributes.popper, {
	    'data-popper-placement': state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules

	var computeStyles$1 = {
	  name: 'computeStyles',
	  enabled: true,
	  phase: 'beforeWrite',
	  fn: computeStyles,
	  data: {}
	};

	var passive = {
	  passive: true
	};
	function effect(_ref) {
	  var state = _ref.state,
	    instance = _ref.instance,
	    options = _ref.options;
	  var _options$scroll = options.scroll,
	    scroll = _options$scroll === void 0 ? true : _options$scroll,
	    _options$resize = options.resize,
	    resize = _options$resize === void 0 ? true : _options$resize;
	  var window = getWindow(state.elements.popper);
	  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
	  if (scroll) {
	    scrollParents.forEach(function (scrollParent) {
	      scrollParent.addEventListener('scroll', instance.update, passive);
	    });
	  }
	  if (resize) {
	    window.addEventListener('resize', instance.update, passive);
	  }
	  return function () {
	    if (scroll) {
	      scrollParents.forEach(function (scrollParent) {
	        scrollParent.removeEventListener('scroll', instance.update, passive);
	      });
	    }
	    if (resize) {
	      window.removeEventListener('resize', instance.update, passive);
	    }
	  };
	} // eslint-disable-next-line import/no-unused-modules

	var eventListeners = {
	  name: 'eventListeners',
	  enabled: true,
	  phase: 'write',
	  fn: function fn() {},
	  effect: effect,
	  data: {}
	};

	var hash$1 = {
	  left: 'right',
	  right: 'left',
	  bottom: 'top',
	  top: 'bottom'
	};
	function getOppositePlacement(placement) {
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash$1[matched];
	  });
	}

	var hash = {
	  start: 'end',
	  end: 'start'
	};
	function getOppositeVariationPlacement(placement) {
	  return placement.replace(/start|end/g, function (matched) {
	    return hash[matched];
	  });
	}

	function getWindowScroll(node) {
	  var win = getWindow(node);
	  var scrollLeft = win.pageXOffset;
	  var scrollTop = win.pageYOffset;
	  return {
	    scrollLeft: scrollLeft,
	    scrollTop: scrollTop
	  };
	}

	function getWindowScrollBarX(element) {
	  // If <html> has a CSS width greater than the viewport, then this will be
	  // incorrect for RTL.
	  // Popper 1 is broken in this case and never had a bug report so let's assume
	  // it's not an issue. I don't think anyone ever specifies width on <html>
	  // anyway.
	  // Browsers where the left scrollbar doesn't cause an issue report `0` for
	  // this (e.g. Edge 2019, IE11, Safari)
	  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
	}

	function getViewportRect(element) {
	  var win = getWindow(element);
	  var html = getDocumentElement(element);
	  var visualViewport = win.visualViewport;
	  var width = html.clientWidth;
	  var height = html.clientHeight;
	  var x = 0;
	  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
	  // can be obscured underneath it.
	  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
	  // if it isn't open, so if this isn't available, the popper will be detected
	  // to overflow the bottom of the screen too early.

	  if (visualViewport) {
	    width = visualViewport.width;
	    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
	    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
	    // errors due to floating point numbers, so we need to check precision.
	    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
	    // Feature detection fails in mobile emulation mode in Chrome.
	    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
	    // 0.001
	    // Fallback here: "Not Safari" userAgent

	    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
	      x = visualViewport.offsetLeft;
	      y = visualViewport.offsetTop;
	    }
	  }
	  return {
	    width: width,
	    height: height,
	    x: x + getWindowScrollBarX(element),
	    y: y
	  };
	}

	// of the `<html>` and `<body>` rect bounds if horizontally scrollable

	function getDocumentRect(element) {
	  var _element$ownerDocumen;
	  var html = getDocumentElement(element);
	  var winScroll = getWindowScroll(element);
	  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
	  var width = max$1(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
	  var height = max$1(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
	  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
	  var y = -winScroll.scrollTop;
	  if (getComputedStyle(body || html).direction === 'rtl') {
	    x += max$1(html.clientWidth, body ? body.clientWidth : 0) - width;
	  }
	  return {
	    width: width,
	    height: height,
	    x: x,
	    y: y
	  };
	}

	function isScrollParent(element) {
	  // Firefox wants us to check `-x` and `-y` variations as well
	  var _getComputedStyle = getComputedStyle(element),
	    overflow = _getComputedStyle.overflow,
	    overflowX = _getComputedStyle.overflowX,
	    overflowY = _getComputedStyle.overflowY;
	  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
	}

	function getScrollParent(node) {
	  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
	    // $FlowFixMe[incompatible-return]: assume body is always available
	    return node.ownerDocument.body;
	  }
	  if (isHTMLElement(node) && isScrollParent(node)) {
	    return node;
	  }
	  return getScrollParent(getParentNode(node));
	}

	/*
	given a DOM element, return the list of all scroll parents, up the list of ancesors
	until we get to the top window object. This list is what we attach scroll listeners
	to, because if any of these parent elements scroll, we'll need to re-calculate the
	reference element's position.
	*/

	function listScrollParents(element, list) {
	  var _element$ownerDocumen;
	  if (list === void 0) {
	    list = [];
	  }
	  var scrollParent = getScrollParent(element);
	  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
	  var win = getWindow(scrollParent);
	  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
	  var updatedList = list.concat(target);
	  return isBody ? updatedList :
	  // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
	  updatedList.concat(listScrollParents(getParentNode(target)));
	}

	function rectToClientRect(rect) {
	  return Object.assign({}, rect, {
	    left: rect.x,
	    top: rect.y,
	    right: rect.x + rect.width,
	    bottom: rect.y + rect.height
	  });
	}

	function getInnerBoundingClientRect(element) {
	  var rect = getBoundingClientRect(element);
	  rect.top = rect.top + element.clientTop;
	  rect.left = rect.left + element.clientLeft;
	  rect.bottom = rect.top + element.clientHeight;
	  rect.right = rect.left + element.clientWidth;
	  rect.width = element.clientWidth;
	  rect.height = element.clientHeight;
	  rect.x = rect.left;
	  rect.y = rect.top;
	  return rect;
	}
	function getClientRectFromMixedType(element, clippingParent) {
	  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
	} // A "clipping parent" is an overflowable container with the characteristic of
	// clipping (or hiding) overflowing elements with a position different from
	// `initial`

	function getClippingParents(element) {
	  var clippingParents = listScrollParents(getParentNode(element));
	  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
	  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
	  if (!isElement(clipperElement)) {
	    return [];
	  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

	  return clippingParents.filter(function (clippingParent) {
	    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
	  });
	} // Gets the maximum area that the element is visible in due to any number of
	// clipping parents

	function getClippingRect(element, boundary, rootBoundary) {
	  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
	  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
	  var firstClippingParent = clippingParents[0];
	  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
	    var rect = getClientRectFromMixedType(element, clippingParent);
	    accRect.top = max$1(rect.top, accRect.top);
	    accRect.right = min(rect.right, accRect.right);
	    accRect.bottom = min(rect.bottom, accRect.bottom);
	    accRect.left = max$1(rect.left, accRect.left);
	    return accRect;
	  }, getClientRectFromMixedType(element, firstClippingParent));
	  clippingRect.width = clippingRect.right - clippingRect.left;
	  clippingRect.height = clippingRect.bottom - clippingRect.top;
	  clippingRect.x = clippingRect.left;
	  clippingRect.y = clippingRect.top;
	  return clippingRect;
	}

	function computeOffsets(_ref) {
	  var reference = _ref.reference,
	    element = _ref.element,
	    placement = _ref.placement;
	  var basePlacement = placement ? getBasePlacement(placement) : null;
	  var variation = placement ? getVariation(placement) : null;
	  var commonX = reference.x + reference.width / 2 - element.width / 2;
	  var commonY = reference.y + reference.height / 2 - element.height / 2;
	  var offsets;
	  switch (basePlacement) {
	    case top:
	      offsets = {
	        x: commonX,
	        y: reference.y - element.height
	      };
	      break;
	    case bottom:
	      offsets = {
	        x: commonX,
	        y: reference.y + reference.height
	      };
	      break;
	    case right:
	      offsets = {
	        x: reference.x + reference.width,
	        y: commonY
	      };
	      break;
	    case left:
	      offsets = {
	        x: reference.x - element.width,
	        y: commonY
	      };
	      break;
	    default:
	      offsets = {
	        x: reference.x,
	        y: reference.y
	      };
	  }
	  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
	  if (mainAxis != null) {
	    var len = mainAxis === 'y' ? 'height' : 'width';
	    switch (variation) {
	      case start:
	        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
	        break;
	      case end:
	        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
	        break;
	    }
	  }
	  return offsets;
	}

	function detectOverflow(state, options) {
	  if (options === void 0) {
	    options = {};
	  }
	  var _options = options,
	    _options$placement = _options.placement,
	    placement = _options$placement === void 0 ? state.placement : _options$placement,
	    _options$boundary = _options.boundary,
	    boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
	    _options$rootBoundary = _options.rootBoundary,
	    rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
	    _options$elementConte = _options.elementContext,
	    elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
	    _options$altBoundary = _options.altBoundary,
	    altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
	    _options$padding = _options.padding,
	    padding = _options$padding === void 0 ? 0 : _options$padding;
	  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	  var altContext = elementContext === popper ? reference : popper;
	  var popperRect = state.rects.popper;
	  var element = state.elements[altBoundary ? altContext : elementContext];
	  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
	  var referenceClientRect = getBoundingClientRect(state.elements.reference);
	  var popperOffsets = computeOffsets({
	    reference: referenceClientRect,
	    element: popperRect,
	    placement: placement
	  });
	  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
	  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
	  // 0 or negative = within the clipping rect

	  var overflowOffsets = {
	    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
	    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
	    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
	    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
	  };
	  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

	  if (elementContext === popper && offsetData) {
	    var offset = offsetData[placement];
	    Object.keys(overflowOffsets).forEach(function (key) {
	      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
	      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
	      overflowOffsets[key] += offset[axis] * multiply;
	    });
	  }
	  return overflowOffsets;
	}

	function computeAutoPlacement(state, options) {
	  if (options === void 0) {
	    options = {};
	  }
	  var _options = options,
	    placement = _options.placement,
	    boundary = _options.boundary,
	    rootBoundary = _options.rootBoundary,
	    padding = _options.padding,
	    flipVariations = _options.flipVariations,
	    _options$allowedAutoP = _options.allowedAutoPlacements,
	    allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
	  var variation = getVariation(placement);
	  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
	    return getVariation(placement) === variation;
	  }) : basePlacements;
	  var allowedPlacements = placements$1.filter(function (placement) {
	    return allowedAutoPlacements.indexOf(placement) >= 0;
	  });
	  if (allowedPlacements.length === 0) {
	    allowedPlacements = placements$1;
	    {
	      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
	    }
	  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

	  var overflows = allowedPlacements.reduce(function (acc, placement) {
	    acc[placement] = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding
	    })[getBasePlacement(placement)];
	    return acc;
	  }, {});
	  return Object.keys(overflows).sort(function (a, b) {
	    return overflows[a] - overflows[b];
	  });
	}

	function getExpandedFallbackPlacements(placement) {
	  if (getBasePlacement(placement) === auto) {
	    return [];
	  }
	  var oppositePlacement = getOppositePlacement(placement);
	  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
	}
	function flip(_ref) {
	  var state = _ref.state,
	    options = _ref.options,
	    name = _ref.name;
	  if (state.modifiersData[name]._skip) {
	    return;
	  }
	  var _options$mainAxis = options.mainAxis,
	    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	    _options$altAxis = options.altAxis,
	    checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
	    specifiedFallbackPlacements = options.fallbackPlacements,
	    padding = options.padding,
	    boundary = options.boundary,
	    rootBoundary = options.rootBoundary,
	    altBoundary = options.altBoundary,
	    _options$flipVariatio = options.flipVariations,
	    flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
	    allowedAutoPlacements = options.allowedAutoPlacements;
	  var preferredPlacement = state.options.placement;
	  var basePlacement = getBasePlacement(preferredPlacement);
	  var isBasePlacement = basePlacement === preferredPlacement;
	  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
	  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
	    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding,
	      flipVariations: flipVariations,
	      allowedAutoPlacements: allowedAutoPlacements
	    }) : placement);
	  }, []);
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var checksMap = new Map();
	  var makeFallbackChecks = true;
	  var firstFittingPlacement = placements[0];
	  for (var i = 0; i < placements.length; i++) {
	    var placement = placements[i];
	    var _basePlacement = getBasePlacement(placement);
	    var isStartVariation = getVariation(placement) === start;
	    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
	    var len = isVertical ? 'width' : 'height';
	    var overflow = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      altBoundary: altBoundary,
	      padding: padding
	    });
	    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
	    if (referenceRect[len] > popperRect[len]) {
	      mainVariationSide = getOppositePlacement(mainVariationSide);
	    }
	    var altVariationSide = getOppositePlacement(mainVariationSide);
	    var checks = [];
	    if (checkMainAxis) {
	      checks.push(overflow[_basePlacement] <= 0);
	    }
	    if (checkAltAxis) {
	      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
	    }
	    if (checks.every(function (check) {
	      return check;
	    })) {
	      firstFittingPlacement = placement;
	      makeFallbackChecks = false;
	      break;
	    }
	    checksMap.set(placement, checks);
	  }
	  if (makeFallbackChecks) {
	    // `2` may be desired in some cases – research later
	    var numberOfChecks = flipVariations ? 3 : 1;
	    var _loop = function _loop(_i) {
	      var fittingPlacement = placements.find(function (placement) {
	        var checks = checksMap.get(placement);
	        if (checks) {
	          return checks.slice(0, _i).every(function (check) {
	            return check;
	          });
	        }
	      });
	      if (fittingPlacement) {
	        firstFittingPlacement = fittingPlacement;
	        return "break";
	      }
	    };
	    for (var _i = numberOfChecks; _i > 0; _i--) {
	      var _ret = _loop(_i);
	      if (_ret === "break") break;
	    }
	  }
	  if (state.placement !== firstFittingPlacement) {
	    state.modifiersData[name]._skip = true;
	    state.placement = firstFittingPlacement;
	    state.reset = true;
	  }
	} // eslint-disable-next-line import/no-unused-modules

	var flip$1 = {
	  name: 'flip',
	  enabled: true,
	  phase: 'main',
	  fn: flip,
	  requiresIfExists: ['offset'],
	  data: {
	    _skip: false
	  }
	};

	function getSideOffsets(overflow, rect, preventedOffsets) {
	  if (preventedOffsets === void 0) {
	    preventedOffsets = {
	      x: 0,
	      y: 0
	    };
	  }
	  return {
	    top: overflow.top - rect.height - preventedOffsets.y,
	    right: overflow.right - rect.width + preventedOffsets.x,
	    bottom: overflow.bottom - rect.height + preventedOffsets.y,
	    left: overflow.left - rect.width - preventedOffsets.x
	  };
	}
	function isAnySideFullyClipped(overflow) {
	  return [top, right, bottom, left].some(function (side) {
	    return overflow[side] >= 0;
	  });
	}
	function hide(_ref) {
	  var state = _ref.state,
	    name = _ref.name;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var preventedOffsets = state.modifiersData.preventOverflow;
	  var referenceOverflow = detectOverflow(state, {
	    elementContext: 'reference'
	  });
	  var popperAltOverflow = detectOverflow(state, {
	    altBoundary: true
	  });
	  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
	  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
	  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
	  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
	  state.modifiersData[name] = {
	    referenceClippingOffsets: referenceClippingOffsets,
	    popperEscapeOffsets: popperEscapeOffsets,
	    isReferenceHidden: isReferenceHidden,
	    hasPopperEscaped: hasPopperEscaped
	  };
	  state.attributes.popper = Object.assign({}, state.attributes.popper, {
	    'data-popper-reference-hidden': isReferenceHidden,
	    'data-popper-escaped': hasPopperEscaped
	  });
	} // eslint-disable-next-line import/no-unused-modules

	var hide$1 = {
	  name: 'hide',
	  enabled: true,
	  phase: 'main',
	  requiresIfExists: ['preventOverflow'],
	  fn: hide
	};

	function distanceAndSkiddingToXY(placement, rects, offset) {
	  var basePlacement = getBasePlacement(placement);
	  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
	  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
	      placement: placement
	    })) : offset,
	    skidding = _ref[0],
	    distance = _ref[1];
	  skidding = skidding || 0;
	  distance = (distance || 0) * invertDistance;
	  return [left, right].indexOf(basePlacement) >= 0 ? {
	    x: distance,
	    y: skidding
	  } : {
	    x: skidding,
	    y: distance
	  };
	}
	function offset(_ref2) {
	  var state = _ref2.state,
	    options = _ref2.options,
	    name = _ref2.name;
	  var _options$offset = options.offset,
	    offset = _options$offset === void 0 ? [0, 0] : _options$offset;
	  var data = placements.reduce(function (acc, placement) {
	    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
	    return acc;
	  }, {});
	  var _data$state$placement = data[state.placement],
	    x = _data$state$placement.x,
	    y = _data$state$placement.y;
	  if (state.modifiersData.popperOffsets != null) {
	    state.modifiersData.popperOffsets.x += x;
	    state.modifiersData.popperOffsets.y += y;
	  }
	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules

	var offset$1 = {
	  name: 'offset',
	  enabled: true,
	  phase: 'main',
	  requires: ['popperOffsets'],
	  fn: offset
	};

	function popperOffsets(_ref) {
	  var state = _ref.state,
	    name = _ref.name;
	  // Offsets are the actual position the popper needs to have to be
	  // properly positioned near its reference element
	  // This is the most basic placement, and will be adjusted by
	  // the modifiers in the next step
	  state.modifiersData[name] = computeOffsets({
	    reference: state.rects.reference,
	    element: state.rects.popper,
	    placement: state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules

	var popperOffsets$1 = {
	  name: 'popperOffsets',
	  enabled: true,
	  phase: 'read',
	  fn: popperOffsets,
	  data: {}
	};

	function getAltAxis(axis) {
	  return axis === 'x' ? 'y' : 'x';
	}

	function preventOverflow(_ref) {
	  var state = _ref.state,
	    options = _ref.options,
	    name = _ref.name;
	  var _options$mainAxis = options.mainAxis,
	    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	    _options$altAxis = options.altAxis,
	    checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
	    boundary = options.boundary,
	    rootBoundary = options.rootBoundary,
	    altBoundary = options.altBoundary,
	    padding = options.padding,
	    _options$tether = options.tether,
	    tether = _options$tether === void 0 ? true : _options$tether,
	    _options$tetherOffset = options.tetherOffset,
	    tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
	  var overflow = detectOverflow(state, {
	    boundary: boundary,
	    rootBoundary: rootBoundary,
	    padding: padding,
	    altBoundary: altBoundary
	  });
	  var basePlacement = getBasePlacement(state.placement);
	  var variation = getVariation(state.placement);
	  var isBasePlacement = !variation;
	  var mainAxis = getMainAxisFromPlacement(basePlacement);
	  var altAxis = getAltAxis(mainAxis);
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
	    placement: state.placement
	  })) : tetherOffset;
	  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
	    mainAxis: tetherOffsetValue,
	    altAxis: tetherOffsetValue
	  } : Object.assign({
	    mainAxis: 0,
	    altAxis: 0
	  }, tetherOffsetValue);
	  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
	  var data = {
	    x: 0,
	    y: 0
	  };
	  if (!popperOffsets) {
	    return;
	  }
	  if (checkMainAxis) {
	    var _offsetModifierState$;
	    var mainSide = mainAxis === 'y' ? top : left;
	    var altSide = mainAxis === 'y' ? bottom : right;
	    var len = mainAxis === 'y' ? 'height' : 'width';
	    var offset = popperOffsets[mainAxis];
	    var min$1 = offset + overflow[mainSide];
	    var max = offset - overflow[altSide];
	    var additive = tether ? -popperRect[len] / 2 : 0;
	    var minLen = variation === start ? referenceRect[len] : popperRect[len];
	    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
	    // outside the reference bounds

	    var arrowElement = state.elements.arrow;
	    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
	      width: 0,
	      height: 0
	    };
	    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
	    var arrowPaddingMin = arrowPaddingObject[mainSide];
	    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
	    // to include its full size in the calculation. If the reference is small
	    // and near the edge of a boundary, the popper can overflow even if the
	    // reference is not overflowing as well (e.g. virtual elements with no
	    // width or height)

	    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
	    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
	    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
	    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
	    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
	    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
	    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
	    var tetherMax = offset + maxOffset - offsetModifierValue;
	    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max$1(max, tetherMax) : max);
	    popperOffsets[mainAxis] = preventedOffset;
	    data[mainAxis] = preventedOffset - offset;
	  }
	  if (checkAltAxis) {
	    var _offsetModifierState$2;
	    var _mainSide = mainAxis === 'x' ? top : left;
	    var _altSide = mainAxis === 'x' ? bottom : right;
	    var _offset = popperOffsets[altAxis];
	    var _len = altAxis === 'y' ? 'height' : 'width';
	    var _min = _offset + overflow[_mainSide];
	    var _max = _offset - overflow[_altSide];
	    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
	    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
	    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
	    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
	    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
	    popperOffsets[altAxis] = _preventedOffset;
	    data[altAxis] = _preventedOffset - _offset;
	  }
	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules

	var preventOverflow$1 = {
	  name: 'preventOverflow',
	  enabled: true,
	  phase: 'main',
	  fn: preventOverflow,
	  requiresIfExists: ['offset']
	};

	function getHTMLElementScroll(element) {
	  return {
	    scrollLeft: element.scrollLeft,
	    scrollTop: element.scrollTop
	  };
	}

	function getNodeScroll(node) {
	  if (node === getWindow(node) || !isHTMLElement(node)) {
	    return getWindowScroll(node);
	  } else {
	    return getHTMLElementScroll(node);
	  }
	}

	function isElementScaled(element) {
	  var rect = element.getBoundingClientRect();
	  var scaleX = round(rect.width) / element.offsetWidth || 1;
	  var scaleY = round(rect.height) / element.offsetHeight || 1;
	  return scaleX !== 1 || scaleY !== 1;
	} // Returns the composite rect of an element relative to its offsetParent.
	// Composite means it takes into account transforms as well as layout.

	function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
	  if (isFixed === void 0) {
	    isFixed = false;
	  }
	  var isOffsetParentAnElement = isHTMLElement(offsetParent);
	  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
	  var documentElement = getDocumentElement(offsetParent);
	  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
	  var scroll = {
	    scrollLeft: 0,
	    scrollTop: 0
	  };
	  var offsets = {
	    x: 0,
	    y: 0
	  };
	  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
	    if (getNodeName(offsetParent) !== 'body' ||
	    // https://github.com/popperjs/popper-core/issues/1078
	    isScrollParent(documentElement)) {
	      scroll = getNodeScroll(offsetParent);
	    }
	    if (isHTMLElement(offsetParent)) {
	      offsets = getBoundingClientRect(offsetParent, true);
	      offsets.x += offsetParent.clientLeft;
	      offsets.y += offsetParent.clientTop;
	    } else if (documentElement) {
	      offsets.x = getWindowScrollBarX(documentElement);
	    }
	  }
	  return {
	    x: rect.left + scroll.scrollLeft - offsets.x,
	    y: rect.top + scroll.scrollTop - offsets.y,
	    width: rect.width,
	    height: rect.height
	  };
	}

	function order(modifiers) {
	  var map = new Map();
	  var visited = new Set();
	  var result = [];
	  modifiers.forEach(function (modifier) {
	    map.set(modifier.name, modifier);
	  }); // On visiting object, check for its dependencies and visit them recursively

	  function sort(modifier) {
	    visited.add(modifier.name);
	    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
	    requires.forEach(function (dep) {
	      if (!visited.has(dep)) {
	        var depModifier = map.get(dep);
	        if (depModifier) {
	          sort(depModifier);
	        }
	      }
	    });
	    result.push(modifier);
	  }
	  modifiers.forEach(function (modifier) {
	    if (!visited.has(modifier.name)) {
	      // check for visited object
	      sort(modifier);
	    }
	  });
	  return result;
	}
	function orderModifiers(modifiers) {
	  // order based on dependencies
	  var orderedModifiers = order(modifiers); // order based on phase

	  return modifierPhases.reduce(function (acc, phase) {
	    return acc.concat(orderedModifiers.filter(function (modifier) {
	      return modifier.phase === phase;
	    }));
	  }, []);
	}

	function debounce(fn) {
	  var pending;
	  return function () {
	    if (!pending) {
	      pending = new Promise(function (resolve) {
	        Promise.resolve().then(function () {
	          pending = undefined;
	          resolve(fn());
	        });
	      });
	    }
	    return pending;
	  };
	}

	function format$1(str) {
	  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	  return [].concat(args).reduce(function (p, c) {
	    return p.replace(/%s/, c);
	  }, str);
	}

	var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
	var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
	var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
	function validateModifiers(modifiers) {
	  modifiers.forEach(function (modifier) {
	    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
	    .filter(function (value, index, self) {
	      return self.indexOf(value) === index;
	    }).forEach(function (key) {
	      switch (key) {
	        case 'name':
	          if (typeof modifier.name !== 'string') {
	            console.error(format$1(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
	          }
	          break;
	        case 'enabled':
	          if (typeof modifier.enabled !== 'boolean') {
	            console.error(format$1(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
	          }
	          break;
	        case 'phase':
	          if (modifierPhases.indexOf(modifier.phase) < 0) {
	            console.error(format$1(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
	          }
	          break;
	        case 'fn':
	          if (typeof modifier.fn !== 'function') {
	            console.error(format$1(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
	          }
	          break;
	        case 'effect':
	          if (modifier.effect != null && typeof modifier.effect !== 'function') {
	            console.error(format$1(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
	          }
	          break;
	        case 'requires':
	          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
	            console.error(format$1(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
	          }
	          break;
	        case 'requiresIfExists':
	          if (!Array.isArray(modifier.requiresIfExists)) {
	            console.error(format$1(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
	          }
	          break;
	        case 'options':
	        case 'data':
	          break;
	        default:
	          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
	            return "\"" + s + "\"";
	          }).join(', ') + "; but \"" + key + "\" was provided.");
	      }
	      modifier.requires && modifier.requires.forEach(function (requirement) {
	        if (modifiers.find(function (mod) {
	          return mod.name === requirement;
	        }) == null) {
	          console.error(format$1(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
	        }
	      });
	    });
	  });
	}

	function uniqueBy(arr, fn) {
	  var identifiers = new Set();
	  return arr.filter(function (item) {
	    var identifier = fn(item);
	    if (!identifiers.has(identifier)) {
	      identifiers.add(identifier);
	      return true;
	    }
	  });
	}

	function mergeByName(modifiers) {
	  var merged = modifiers.reduce(function (merged, current) {
	    var existing = merged[current.name];
	    merged[current.name] = existing ? Object.assign({}, existing, current, {
	      options: Object.assign({}, existing.options, current.options),
	      data: Object.assign({}, existing.data, current.data)
	    }) : current;
	    return merged;
	  }, {}); // IE11 does not support Object.values

	  return Object.keys(merged).map(function (key) {
	    return merged[key];
	  });
	}

	var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
	var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
	var DEFAULT_OPTIONS = {
	  placement: 'bottom',
	  modifiers: [],
	  strategy: 'absolute'
	};
	function areValidElements() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	  return !args.some(function (element) {
	    return !(element && typeof element.getBoundingClientRect === 'function');
	  });
	}
	function popperGenerator(generatorOptions) {
	  if (generatorOptions === void 0) {
	    generatorOptions = {};
	  }
	  var _generatorOptions = generatorOptions,
	    _generatorOptions$def = _generatorOptions.defaultModifiers,
	    defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
	    _generatorOptions$def2 = _generatorOptions.defaultOptions,
	    defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
	  return function createPopper(reference, popper, options) {
	    if (options === void 0) {
	      options = defaultOptions;
	    }
	    var state = {
	      placement: 'bottom',
	      orderedModifiers: [],
	      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
	      modifiersData: {},
	      elements: {
	        reference: reference,
	        popper: popper
	      },
	      attributes: {},
	      styles: {}
	    };
	    var effectCleanupFns = [];
	    var isDestroyed = false;
	    var instance = {
	      state: state,
	      setOptions: function setOptions(setOptionsAction) {
	        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
	        cleanupModifierEffects();
	        state.options = Object.assign({}, defaultOptions, state.options, options);
	        state.scrollParents = {
	          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
	          popper: listScrollParents(popper)
	        }; // Orders the modifiers based on their dependencies and `phase`
	        // properties

	        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

	        state.orderedModifiers = orderedModifiers.filter(function (m) {
	          return m.enabled;
	        }); // Validate the provided modifiers so that the consumer will get warned
	        // if one of the modifiers is invalid for any reason

	        {
	          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
	            var name = _ref.name;
	            return name;
	          });
	          validateModifiers(modifiers);
	          if (getBasePlacement(state.options.placement) === auto) {
	            var flipModifier = state.orderedModifiers.find(function (_ref2) {
	              var name = _ref2.name;
	              return name === 'flip';
	            });
	            if (!flipModifier) {
	              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
	            }
	          }
	          var _getComputedStyle = getComputedStyle(popper),
	            marginTop = _getComputedStyle.marginTop,
	            marginRight = _getComputedStyle.marginRight,
	            marginBottom = _getComputedStyle.marginBottom,
	            marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
	          // cause bugs with positioning, so we'll warn the consumer

	          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
	            return parseFloat(margin);
	          })) {
	            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
	          }
	        }
	        runModifierEffects();
	        return instance.update();
	      },
	      // Sync update – it will always be executed, even if not necessary. This
	      // is useful for low frequency updates where sync behavior simplifies the
	      // logic.
	      // For high frequency updates (e.g. `resize` and `scroll` events), always
	      // prefer the async Popper#update method
	      forceUpdate: function forceUpdate() {
	        if (isDestroyed) {
	          return;
	        }
	        var _state$elements = state.elements,
	          reference = _state$elements.reference,
	          popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
	        // anymore

	        if (!areValidElements(reference, popper)) {
	          {
	            console.error(INVALID_ELEMENT_ERROR);
	          }
	          return;
	        } // Store the reference and popper rects to be read by modifiers

	        state.rects = {
	          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
	          popper: getLayoutRect(popper)
	        }; // Modifiers have the ability to reset the current update cycle. The
	        // most common use case for this is the `flip` modifier changing the
	        // placement, which then needs to re-run all the modifiers, because the
	        // logic was previously ran for the previous placement and is therefore
	        // stale/incorrect

	        state.reset = false;
	        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
	        // is filled with the initial data specified by the modifier. This means
	        // it doesn't persist and is fresh on each update.
	        // To ensure persistent data, use `${name}#persistent`

	        state.orderedModifiers.forEach(function (modifier) {
	          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
	        });
	        var __debug_loops__ = 0;
	        for (var index = 0; index < state.orderedModifiers.length; index++) {
	          {
	            __debug_loops__ += 1;
	            if (__debug_loops__ > 100) {
	              console.error(INFINITE_LOOP_ERROR);
	              break;
	            }
	          }
	          if (state.reset === true) {
	            state.reset = false;
	            index = -1;
	            continue;
	          }
	          var _state$orderedModifie = state.orderedModifiers[index],
	            fn = _state$orderedModifie.fn,
	            _state$orderedModifie2 = _state$orderedModifie.options,
	            _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
	            name = _state$orderedModifie.name;
	          if (typeof fn === 'function') {
	            state = fn({
	              state: state,
	              options: _options,
	              name: name,
	              instance: instance
	            }) || state;
	          }
	        }
	      },
	      // Async and optimistically optimized update – it will not be executed if
	      // not necessary (debounced to run at most once-per-tick)
	      update: debounce(function () {
	        return new Promise(function (resolve) {
	          instance.forceUpdate();
	          resolve(state);
	        });
	      }),
	      destroy: function destroy() {
	        cleanupModifierEffects();
	        isDestroyed = true;
	      }
	    };
	    if (!areValidElements(reference, popper)) {
	      {
	        console.error(INVALID_ELEMENT_ERROR);
	      }
	      return instance;
	    }
	    instance.setOptions(options).then(function (state) {
	      if (!isDestroyed && options.onFirstUpdate) {
	        options.onFirstUpdate(state);
	      }
	    }); // Modifiers have the ability to execute arbitrary code before the first
	    // update cycle runs. They will be executed in the same order as the update
	    // cycle. This is useful when a modifier adds some persistent data that
	    // other modifiers need to use, but the modifier is run after the dependent
	    // one.

	    function runModifierEffects() {
	      state.orderedModifiers.forEach(function (_ref3) {
	        var name = _ref3.name,
	          _ref3$options = _ref3.options,
	          options = _ref3$options === void 0 ? {} : _ref3$options,
	          effect = _ref3.effect;
	        if (typeof effect === 'function') {
	          var cleanupFn = effect({
	            state: state,
	            name: name,
	            instance: instance,
	            options: options
	          });
	          var noopFn = function noopFn() {};
	          effectCleanupFns.push(cleanupFn || noopFn);
	        }
	      });
	    }
	    function cleanupModifierEffects() {
	      effectCleanupFns.forEach(function (fn) {
	        return fn();
	      });
	      effectCleanupFns = [];
	    }
	    return instance;
	  };
	}

	var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
	var createPopper = /*#__PURE__*/popperGenerator({
	  defaultModifiers: defaultModifiers
	}); // eslint-disable-next-line import/no-unused-modules

	/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

	var reactFastCompare;
	var hasRequiredReactFastCompare;

	function requireReactFastCompare () {
		if (hasRequiredReactFastCompare) return reactFastCompare;
		hasRequiredReactFastCompare = 1;
		var hasElementType = typeof Element !== 'undefined';
		var hasMap = typeof Map === 'function';
		var hasSet = typeof Set === 'function';
		var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

		// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

		function equal(a, b) {
		  // START: fast-deep-equal es6/index.js 3.1.3
		  if (a === b) return true;
		  if (a && b && typeof a == 'object' && typeof b == 'object') {
		    if (a.constructor !== b.constructor) return false;
		    var length, i, keys;
		    if (Array.isArray(a)) {
		      length = a.length;
		      if (length != b.length) return false;
		      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
		      return true;
		    }

		    // START: Modifications:
		    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
		    //    to co-exist with es5.
		    // 2. Replace `for of` with es5 compliant iteration using `for`.
		    //    Basically, take:
		    //
		    //    ```js
		    //    for (i of a.entries())
		    //      if (!b.has(i[0])) return false;
		    //    ```
		    //
		    //    ... and convert to:
		    //
		    //    ```js
		    //    it = a.entries();
		    //    while (!(i = it.next()).done)
		    //      if (!b.has(i.value[0])) return false;
		    //    ```
		    //
		    //    **Note**: `i` access switches to `i.value`.
		    var it;
		    if (hasMap && a instanceof Map && b instanceof Map) {
		      if (a.size !== b.size) return false;
		      it = a.entries();
		      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
		      it = a.entries();
		      while (!(i = it.next()).done) if (!equal(i.value[1], b.get(i.value[0]))) return false;
		      return true;
		    }
		    if (hasSet && a instanceof Set && b instanceof Set) {
		      if (a.size !== b.size) return false;
		      it = a.entries();
		      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
		      return true;
		    }
		    // END: Modifications

		    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
		      length = a.length;
		      if (length != b.length) return false;
		      for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
		      return true;
		    }
		    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
		    // START: Modifications:
		    // Apply guards for `Object.create(null)` handling. See:
		    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
		    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
		    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
		    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
		    // END: Modifications

		    keys = Object.keys(a);
		    length = keys.length;
		    if (length !== Object.keys(b).length) return false;
		    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
		    // END: fast-deep-equal

		    // START: react-fast-compare
		    // custom handling for DOM elements
		    if (hasElementType && a instanceof Element) return false;

		    // custom handling for React/Preact
		    for (i = length; i-- !== 0;) {
		      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
		        // React-specific: avoid traversing React elements' _owner
		        // Preact-specific: avoid traversing Preact elements' __v and __o
		        //    __v = $_original / $_vnode
		        //    __o = $_owner
		        // These properties contain circular references and are not needed when
		        // comparing the actual elements (and not their owners)
		        // .$$typeof and ._store on just reasonable markers of elements

		        continue;
		      }

		      // all other properties should be traversed as usual
		      if (!equal(a[keys[i]], b[keys[i]])) return false;
		    }
		    // END: react-fast-compare

		    // START: fast-deep-equal
		    return true;
		  }
		  return a !== a && b !== b;
		}
		// end fast-deep-equal

		reactFastCompare = function isEqual(a, b) {
		  try {
		    return equal(a, b);
		  } catch (error) {
		    if ((error.message || '').match(/stack|recursion/i)) {
		      // warn on circular references, don't crash
		      // browsers give this different errors name and messages:
		      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
		      // firefox: "InternalError", too much recursion"
		      // edge: "Error", "Out of stack space"
		      console.warn('react-fast-compare cannot handle circular refs');
		      return false;
		    }
		    // some other error. we should definitely know about these
		    throw error;
		  }
		};
		return reactFastCompare;
	}

	var reactFastCompareExports = requireReactFastCompare();
	var isEqual = /*@__PURE__*/getDefaultExportFromCjs(reactFastCompareExports);

	var EMPTY_MODIFIERS = [];
	var usePopper = function usePopper(referenceElement, popperElement, options) {
	  if (options === void 0) {
	    options = {};
	  }
	  var prevOptions = l__namespace.useRef(null);
	  var optionsWithDefaults = {
	    onFirstUpdate: options.onFirstUpdate,
	    placement: options.placement || 'bottom',
	    strategy: options.strategy || 'absolute',
	    modifiers: options.modifiers || EMPTY_MODIFIERS
	  };
	  var _React$useState = l__namespace.useState({
	      styles: {
	        popper: {
	          position: optionsWithDefaults.strategy,
	          left: '0',
	          top: '0'
	        },
	        arrow: {
	          position: 'absolute'
	        }
	      },
	      attributes: {}
	    }),
	    state = _React$useState[0],
	    setState = _React$useState[1];
	  var updateStateModifier = l__namespace.useMemo(function () {
	    return {
	      name: 'updateState',
	      enabled: true,
	      phase: 'write',
	      fn: function fn(_ref) {
	        var state = _ref.state;
	        var elements = Object.keys(state.elements);
	        setState({
	          styles: fromEntries(elements.map(function (element) {
	            return [element, state.styles[element] || {}];
	          })),
	          attributes: fromEntries(elements.map(function (element) {
	            return [element, state.attributes[element]];
	          }))
	        });
	      },
	      requires: ['computeStyles']
	    };
	  }, []);
	  var popperOptions = l__namespace.useMemo(function () {
	    var newOptions = {
	      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
	      placement: optionsWithDefaults.placement,
	      strategy: optionsWithDefaults.strategy,
	      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
	        name: 'applyStyles',
	        enabled: false
	      }])
	    };
	    if (isEqual(prevOptions.current, newOptions)) {
	      return prevOptions.current || newOptions;
	    } else {
	      prevOptions.current = newOptions;
	      return newOptions;
	    }
	  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
	  var popperInstanceRef = l__namespace.useRef();
	  useIsomorphicLayoutEffect(function () {
	    if (popperInstanceRef.current) {
	      popperInstanceRef.current.setOptions(popperOptions);
	    }
	  }, [popperOptions]);
	  useIsomorphicLayoutEffect(function () {
	    if (referenceElement == null || popperElement == null) {
	      return;
	    }
	    var createPopper$1 = options.createPopper || createPopper;
	    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
	    popperInstanceRef.current = popperInstance;
	    return function () {
	      popperInstance.destroy();
	      popperInstanceRef.current = null;
	    };
	  }, [referenceElement, popperElement, options.createPopper]);
	  return {
	    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
	    styles: state.styles,
	    attributes: state.attributes,
	    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
	    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
	  };
	};

	var n$1 = "Tooltip-module_button__2x9m0",
	  d$1 = "Tooltip-module_root__1Yo9t",
	  c = "Tooltip-module_tooltip__3x8S8",
	  m = "Tooltip-module_boxShadow__3IzE-",
	  u = "Tooltip-module_small__29mxd",
	  _ = "Tooltip-module_arrow__210Rd";
	e$1(".Tooltip-module_button__2x9m0{background:none;border:none;color:inherit;cursor:pointer;font:inherit;padding:0}.Tooltip-module_root__1Yo9t{--button-focus-outline-width:3px;--button-focus-outline-color:var(--color-coat-of-arms);--tooltip-arrow-size:8px;--tooltip-background:var(--color-coat-of-arms-light);--tooltip-border-color:var(--color-coat-of-arms);--tooltip-spacing-default:var(--spacing-s);--tooltip-spacing-small:var(--spacing-3-xs) var(--spacing-2-xs)}.Tooltip-module_tooltip__3x8S8{background-color:var(--tooltip-background);font-size:var(--fontsize-body-s);font-weight:400;line-height:24px;max-width:21.875rem;padding:var(--tooltip-spacing-default);z-index:1000}.Tooltip-module_boxShadow__3IzE-{box-shadow:var(--box-shadow-s)}.Tooltip-module_small__29mxd{padding:var(--tooltip-spacing-small)}.Tooltip-module_button__2x9m0>span{display:flex}.Tooltip-module_button__2x9m0:focus{box-shadow:0 0 0 var(--button-focus-outline-width) var(--button-focus-outline-color);outline:none}.Tooltip-module_tooltip__3x8S8[data-popper-placement^=bottom]{border-top:8px solid var(--tooltip-border-color)}.Tooltip-module_tooltip__3x8S8[data-popper-placement^=top]{border-bottom:8px solid var(--tooltip-border-color)}.Tooltip-module_tooltip__3x8S8[data-popper-placement^=left]{border-right:8px solid var(--tooltip-border-color)}.Tooltip-module_tooltip__3x8S8[data-popper-placement^=right]{border-left:8px solid var(--tooltip-border-color)}.Tooltip-module_tooltip__3x8S8 .Tooltip-module_arrow__210Rd{position:absolute}.Tooltip-module_tooltip__3x8S8[data-popper-placement^=bottom] .Tooltip-module_arrow__210Rd{border:var(--tooltip-arrow-size) solid transparent;border-bottom:var(--tooltip-arrow-size) solid var(--tooltip-border-color);top:calc(-1 * var(--tooltip-spacing-default) - var(--tooltip-arrow-size))}.Tooltip-module_tooltip__3x8S8[data-popper-placement^=top] .Tooltip-module_arrow__210Rd{border:var(--tooltip-arrow-size) solid transparent;border-top:var(--tooltip-arrow-size) solid var(--tooltip-border-color);bottom:calc(-1 * var(--tooltip-spacing-default) - var(--tooltip-arrow-size))}.Tooltip-module_tooltip__3x8S8[data-popper-placement^=left] .Tooltip-module_arrow__210Rd{border:var(--tooltip-arrow-size) solid transparent;border-left:var(--tooltip-arrow-size) solid var(--tooltip-border-color);right:calc(-1 * var(--tooltip-spacing-default) - var(--tooltip-arrow-size))}.Tooltip-module_tooltip__3x8S8[data-popper-placement^=right] .Tooltip-module_arrow__210Rd{border:var(--tooltip-arrow-size) solid transparent;border-right:var(--tooltip-arrow-size) solid var(--tooltip-border-color);left:calc(-1 * var(--tooltip-spacing-default) - var(--tooltip-arrow-size))}");
	const b = i => {
	  var {
	      boxShadow: b = false,
	      children: v,
	      placement: f = "auto",
	      small: x = false,
	      buttonLabel: w = "Tooltip",
	      tooltipLabel: g = "Tooltip",
	      className: T,
	      buttonClassName: h,
	      tooltipClassName: z
	    } = i,
	    S = o$1(i, ["boxShadow", "children", "placement", "small", "buttonLabel", "tooltipLabel", "className", "buttonClassName", "tooltipClassName"]);
	  const [E, k] = l$2.useState(false),
	    y = l$2.useRef(null),
	    N = l$2.useRef(null),
	    [j, L] = l$2.useState(null),
	    {
	      styles: C,
	      attributes: R,
	      forceUpdate: I
	    } = usePopper(y.current, N.current, {
	      placement: f,
	      modifiers: [{
	        name: "arrow",
	        options: {
	          element: j
	        }
	      }, {
	        name: "offset",
	        options: {
	          offset: [0, 10]
	        }
	      }]
	    });
	  l$2.useEffect(() => {
	    null !== I && true === E && I();
	  }, [E, I]);
	  return l$2.useEffect(() => {
	    const o = o => {
	        const t = o.key || o.keyCode;
	        !E || "Escape" !== t && "Esc" !== t && 27 !== t || k(false);
	      },
	      t = o => {
	        const t = o.target;
	        !E || y.current.contains(t) || N.current.contains(t) || k(false);
	      };
	    return document.addEventListener("keyup", o), document.addEventListener("click", t), () => {
	      document.removeEventListener("keyup", o), document.removeEventListener("click", t);
	    };
	  }), /*#__PURE__*/l$2.createElement("div", Object.assign({}, S, {
	    className: r$5(d$1, T)
	  }), /*#__PURE__*/l$2.createElement("button", {
	    ref: y,
	    type: "button",
	    className: r$5(n$1, h),
	    title: w,
	    "aria-label": w,
	    "aria-expanded": E,
	    onClick: () => {
	      k(!E);
	    },
	    onBlur: () => k(false)
	  }, /*#__PURE__*/l$2.createElement("span", {
	    "aria-hidden": "true"
	  }, /*#__PURE__*/l$2.createElement(s, null))), E && /*#__PURE__*/l$2.createElement("section", Object.assign({
	    "aria-label": g,
	    ref: N,
	    className: r$5(c, x && u, b && m, z),
	    style: C.popper
	  }, R.popper), v, /*#__PURE__*/l$2.createElement("div", Object.assign({
	    ref: L,
	    className: _,
	    style: C.arrow
	  }, R.arrow))));
	};

	function toInteger(dirtyNumber) {
	  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
	    return NaN;
	  }
	  var number = Number(dirtyNumber);
	  if (isNaN(number)) {
	    return number;
	  }
	  return number < 0 ? Math.ceil(number) : Math.floor(number);
	}

	function requiredArgs(required, args) {
	  if (args.length < required) {
	    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
	  }
	}

	/**
	 * @name toDate
	 * @category Common Helpers
	 * @summary Convert the given argument to an instance of Date.
	 *
	 * @description
	 * Convert the given argument to an instance of Date.
	 *
	 * If the argument is an instance of Date, the function returns its clone.
	 *
	 * If the argument is a number, it is treated as a timestamp.
	 *
	 * If the argument is none of the above, the function returns Invalid Date.
	 *
	 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
	 *
	 * @param {Date|Number} argument - the value to convert
	 * @returns {Date} the parsed date in the local time zone
	 * @throws {TypeError} 1 argument required
	 *
	 * @example
	 * // Clone the date:
	 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
	 * //=> Tue Feb 11 2014 11:30:30
	 *
	 * @example
	 * // Convert the timestamp to date:
	 * const result = toDate(1392098430000)
	 * //=> Tue Feb 11 2014 11:30:30
	 */

	function toDate(argument) {
	  requiredArgs(1, arguments);
	  var argStr = Object.prototype.toString.call(argument); // Clone the date

	  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
	    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
	    return new Date(argument.getTime());
	  } else if (typeof argument === 'number' || argStr === '[object Number]') {
	    return new Date(argument);
	  } else {
	    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
	      // eslint-disable-next-line no-console
	      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

	      console.warn(new Error().stack);
	    }
	    return new Date(NaN);
	  }
	}

	/**
	 * @name addMonths
	 * @category Month Helpers
	 * @summary Add the specified number of months to the given date.
	 *
	 * @description
	 * Add the specified number of months to the given date.
	 *
	 * ### v2.0.0 breaking changes:
	 *
	 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
	 *
	 * @param {Date|Number} date - the date to be changed
	 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
	 * @returns {Date} the new date with the months added
	 * @throws {TypeError} 2 arguments required
	 *
	 * @example
	 * // Add 5 months to 1 September 2014:
	 * var result = addMonths(new Date(2014, 8, 1), 5)
	 * //=> Sun Feb 01 2015 00:00:00
	 */

	function addMonths(dirtyDate, dirtyAmount) {
	  requiredArgs(2, arguments);
	  var date = toDate(dirtyDate);
	  var amount = toInteger(dirtyAmount);
	  if (isNaN(amount)) {
	    return new Date(NaN);
	  }
	  if (!amount) {
	    // If 0 months, no-op to avoid changing times in the hour before end of DST
	    return date;
	  }
	  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
	  // month, day, etc. For example, new Date(2020, 1, 0) returns 31 Dec 2019 and
	  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
	  // want except that dates will wrap around the end of a month, meaning that
	  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
	  // we'll default to the end of the desired month by adding 1 to the desired
	  // month and using a date of 0 to back up one day to the end of the desired
	  // month.

	  var endOfDesiredMonth = new Date(date.getTime());
	  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
	  var daysInMonth = endOfDesiredMonth.getDate();
	  if (dayOfMonth >= daysInMonth) {
	    // If we're already at the end of the month, then this is the correct date
	    // and we're done.
	    return endOfDesiredMonth;
	  } else {
	    // Otherwise, we now know that setting the original day-of-month value won't
	    // cause an overflow, so set the desired day-of-month. Note that we can't
	    // just set the date of `endOfDesiredMonth` because that object may have had
	    // its time changed in the unusual case where where a DST transition was on
	    // the last day of the month and its local time was in the hour skipped or
	    // repeated next to a DST transition.  So we use `date` instead which is
	    // guaranteed to still have the original time.
	    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
	    return date;
	  }
	}

	/**
	 * @name addMilliseconds
	 * @category Millisecond Helpers
	 * @summary Add the specified number of milliseconds to the given date.
	 *
	 * @description
	 * Add the specified number of milliseconds to the given date.
	 *
	 * ### v2.0.0 breaking changes:
	 *
	 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
	 *
	 * @param {Date|Number} date - the date to be changed
	 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
	 * @returns {Date} the new date with the milliseconds added
	 * @throws {TypeError} 2 arguments required
	 *
	 * @example
	 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
	 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
	 * //=> Thu Jul 10 2014 12:45:30.750
	 */

	function addMilliseconds(dirtyDate, dirtyAmount) {
	  requiredArgs(2, arguments);
	  var timestamp = toDate(dirtyDate).getTime();
	  var amount = toInteger(dirtyAmount);
	  return new Date(timestamp + amount);
	}

	var MILLISECONDS_IN_MINUTE$1 = 60000;
	function getDateMillisecondsPart(date) {
	  return date.getTime() % MILLISECONDS_IN_MINUTE$1;
	}
	/**
	 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
	 * They usually appear for dates that denote time before the timezones were introduced
	 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
	 * and GMT+01:00:00 after that date)
	 *
	 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
	 * which would lead to incorrect calculations.
	 *
	 * This function returns the timezone offset in milliseconds that takes seconds in account.
	 */

	function getTimezoneOffsetInMilliseconds(dirtyDate) {
	  var date = new Date(dirtyDate.getTime());
	  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
	  date.setSeconds(0, 0);
	  var hasNegativeUTCOffset = baseTimezoneOffset > 0;
	  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE$1 + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE$1 : getDateMillisecondsPart(date);
	  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE$1 + millisecondsPartOfTimezoneOffset;
	}

	/**
	 * @name addYears
	 * @category Year Helpers
	 * @summary Add the specified number of years to the given date.
	 *
	 * @description
	 * Add the specified number of years to the given date.
	 *
	 * ### v2.0.0 breaking changes:
	 *
	 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
	 *
	 * @param {Date|Number} date - the date to be changed
	 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
	 * @returns {Date} the new date with the years added
	 * @throws {TypeError} 2 arguments required
	 *
	 * @example
	 * // Add 5 years to 1 September 2014:
	 * var result = addYears(new Date(2014, 8, 1), 5)
	 * //=> Sun Sep 01 2019 00:00:00
	 */

	function addYears(dirtyDate, dirtyAmount) {
	  requiredArgs(2, arguments);
	  var amount = toInteger(dirtyAmount);
	  return addMonths(dirtyDate, amount * 12);
	}

	/**
	 * @name isValid
	 * @category Common Helpers
	 * @summary Is the given date valid?
	 *
	 * @description
	 * Returns false if argument is Invalid Date and true otherwise.
	 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
	 * Invalid Date is a Date, whose time value is NaN.
	 *
	 * Time value of Date: http://es5.github.io/#x15.9.1.1
	 *
	 * ### v2.0.0 breaking changes:
	 *
	 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
	 *
	 * - Now `isValid` doesn't throw an exception
	 *   if the first argument is not an instance of Date.
	 *   Instead, argument is converted beforehand using `toDate`.
	 *
	 *   Examples:
	 *
	 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
	 *   |---------------------------|---------------|---------------|
	 *   | `new Date()`              | `true`        | `true`        |
	 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
	 *   | `new Date('')`            | `false`       | `false`       |
	 *   | `new Date(1488370835081)` | `true`        | `true`        |
	 *   | `new Date(NaN)`           | `false`       | `false`       |
	 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
	 *   | `''`                      | `TypeError`   | `false`       |
	 *   | `1488370835081`           | `TypeError`   | `true`        |
	 *   | `NaN`                     | `TypeError`   | `false`       |
	 *
	 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
	 *   that try to coerce arguments to the expected type
	 *   (which is also the case with other *date-fns* functions).
	 *
	 * @param {*} date - the date to check
	 * @returns {Boolean} the date is valid
	 * @throws {TypeError} 1 argument required
	 *
	 * @example
	 * // For the valid date:
	 * var result = isValid(new Date(2014, 1, 31))
	 * //=> true
	 *
	 * @example
	 * // For the value, convertable into a date:
	 * var result = isValid(1393804800000)
	 * //=> true
	 *
	 * @example
	 * // For the invalid date:
	 * var result = isValid(new Date(''))
	 * //=> false
	 */

	function isValid(dirtyDate) {
	  requiredArgs(1, arguments);
	  var date = toDate(dirtyDate);
	  return !isNaN(date);
	}

	/**
	 * @name startOfMonth
	 * @category Month Helpers
	 * @summary Return the start of a month for the given date.
	 *
	 * @description
	 * Return the start of a month for the given date.
	 * The result will be in the local timezone.
	 *
	 * ### v2.0.0 breaking changes:
	 *
	 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
	 *
	 * @param {Date|Number} date - the original date
	 * @returns {Date} the start of a month
	 * @throws {TypeError} 1 argument required
	 *
	 * @example
	 * // The start of a month for 2 September 2014 11:55:00:
	 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Mon Sep 01 2014 00:00:00
	 */

	function startOfMonth(dirtyDate) {
	  requiredArgs(1, arguments);
	  var date = toDate(dirtyDate);
	  date.setDate(1);
	  date.setHours(0, 0, 0, 0);
	  return date;
	}

	/**
	 * @name endOfMonth
	 * @category Month Helpers
	 * @summary Return the end of a month for the given date.
	 *
	 * @description
	 * Return the end of a month for the given date.
	 * The result will be in the local timezone.
	 *
	 * ### v2.0.0 breaking changes:
	 *
	 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
	 *
	 * @param {Date|Number} date - the original date
	 * @returns {Date} the end of a month
	 * @throws {TypeError} 1 argument required
	 *
	 * @example
	 * // The end of a month for 2 September 2014 11:55:00:
	 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 30 2014 23:59:59.999
	 */

	function endOfMonth(dirtyDate) {
	  requiredArgs(1, arguments);
	  var date = toDate(dirtyDate);
	  var month = date.getMonth();
	  date.setFullYear(date.getFullYear(), month + 1, 0);
	  date.setHours(23, 59, 59, 999);
	  return date;
	}

	var formatDistanceLocale = {
	  lessThanXSeconds: {
	    one: 'less than a second',
	    other: 'less than {{count}} seconds'
	  },
	  xSeconds: {
	    one: '1 second',
	    other: '{{count}} seconds'
	  },
	  halfAMinute: 'half a minute',
	  lessThanXMinutes: {
	    one: 'less than a minute',
	    other: 'less than {{count}} minutes'
	  },
	  xMinutes: {
	    one: '1 minute',
	    other: '{{count}} minutes'
	  },
	  aboutXHours: {
	    one: 'about 1 hour',
	    other: 'about {{count}} hours'
	  },
	  xHours: {
	    one: '1 hour',
	    other: '{{count}} hours'
	  },
	  xDays: {
	    one: '1 day',
	    other: '{{count}} days'
	  },
	  aboutXWeeks: {
	    one: 'about 1 week',
	    other: 'about {{count}} weeks'
	  },
	  xWeeks: {
	    one: '1 week',
	    other: '{{count}} weeks'
	  },
	  aboutXMonths: {
	    one: 'about 1 month',
	    other: 'about {{count}} months'
	  },
	  xMonths: {
	    one: '1 month',
	    other: '{{count}} months'
	  },
	  aboutXYears: {
	    one: 'about 1 year',
	    other: 'about {{count}} years'
	  },
	  xYears: {
	    one: '1 year',
	    other: '{{count}} years'
	  },
	  overXYears: {
	    one: 'over 1 year',
	    other: 'over {{count}} years'
	  },
	  almostXYears: {
	    one: 'almost 1 year',
	    other: 'almost {{count}} years'
	  }
	};
	function formatDistance(token, count, options) {
	  options = options || {};
	  var result;
	  if (typeof formatDistanceLocale[token] === 'string') {
	    result = formatDistanceLocale[token];
	  } else if (count === 1) {
	    result = formatDistanceLocale[token].one;
	  } else {
	    result = formatDistanceLocale[token].other.replace('{{count}}', count);
	  }
	  if (options.addSuffix) {
	    if (options.comparison > 0) {
	      return 'in ' + result;
	    } else {
	      return result + ' ago';
	    }
	  }
	  return result;
	}

	function buildFormatLongFn(args) {
	  return function (dirtyOptions) {
	    var options = dirtyOptions || {};
	    var width = options.width ? String(options.width) : args.defaultWidth;
	    var format = args.formats[width] || args.formats[args.defaultWidth];
	    return format;
	  };
	}

	var dateFormats = {
	  full: 'EEEE, MMMM do, y',
	  long: 'MMMM do, y',
	  medium: 'MMM d, y',
	  short: 'MM/dd/yyyy'
	};
	var timeFormats = {
	  full: 'h:mm:ss a zzzz',
	  long: 'h:mm:ss a z',
	  medium: 'h:mm:ss a',
	  short: 'h:mm a'
	};
	var dateTimeFormats = {
	  full: "{{date}} 'at' {{time}}",
	  long: "{{date}} 'at' {{time}}",
	  medium: '{{date}}, {{time}}',
	  short: '{{date}}, {{time}}'
	};
	var formatLong = {
	  date: buildFormatLongFn({
	    formats: dateFormats,
	    defaultWidth: 'full'
	  }),
	  time: buildFormatLongFn({
	    formats: timeFormats,
	    defaultWidth: 'full'
	  }),
	  dateTime: buildFormatLongFn({
	    formats: dateTimeFormats,
	    defaultWidth: 'full'
	  })
	};

	var formatRelativeLocale = {
	  lastWeek: "'last' eeee 'at' p",
	  yesterday: "'yesterday at' p",
	  today: "'today at' p",
	  tomorrow: "'tomorrow at' p",
	  nextWeek: "eeee 'at' p",
	  other: 'P'
	};
	function formatRelative(token, _date, _baseDate, _options) {
	  return formatRelativeLocale[token];
	}

	function buildLocalizeFn(args) {
	  return function (dirtyIndex, dirtyOptions) {
	    var options = dirtyOptions || {};
	    var context = options.context ? String(options.context) : 'standalone';
	    var valuesArray;
	    if (context === 'formatting' && args.formattingValues) {
	      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
	      var width = options.width ? String(options.width) : defaultWidth;
	      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
	    } else {
	      var _defaultWidth = args.defaultWidth;
	      var _width = options.width ? String(options.width) : args.defaultWidth;
	      valuesArray = args.values[_width] || args.values[_defaultWidth];
	    }
	    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
	    return valuesArray[index];
	  };
	}

	var eraValues = {
	  narrow: ['B', 'A'],
	  abbreviated: ['BC', 'AD'],
	  wide: ['Before Christ', 'Anno Domini']
	};
	var quarterValues = {
	  narrow: ['1', '2', '3', '4'],
	  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
	  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
	  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
	  // Generally, formatted dates should look like they are in the middle of a sentence,
	  // e.g. in Spanish language the weekdays and months should be in the lowercase.
	};

	var monthValues = {
	  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
	  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	};
	var dayValues = {
	  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	};
	var dayPeriodValues = {
	  narrow: {
	    am: 'a',
	    pm: 'p',
	    midnight: 'mi',
	    noon: 'n',
	    morning: 'morning',
	    afternoon: 'afternoon',
	    evening: 'evening',
	    night: 'night'
	  },
	  abbreviated: {
	    am: 'AM',
	    pm: 'PM',
	    midnight: 'midnight',
	    noon: 'noon',
	    morning: 'morning',
	    afternoon: 'afternoon',
	    evening: 'evening',
	    night: 'night'
	  },
	  wide: {
	    am: 'a.m.',
	    pm: 'p.m.',
	    midnight: 'midnight',
	    noon: 'noon',
	    morning: 'morning',
	    afternoon: 'afternoon',
	    evening: 'evening',
	    night: 'night'
	  }
	};
	var formattingDayPeriodValues = {
	  narrow: {
	    am: 'a',
	    pm: 'p',
	    midnight: 'mi',
	    noon: 'n',
	    morning: 'in the morning',
	    afternoon: 'in the afternoon',
	    evening: 'in the evening',
	    night: 'at night'
	  },
	  abbreviated: {
	    am: 'AM',
	    pm: 'PM',
	    midnight: 'midnight',
	    noon: 'noon',
	    morning: 'in the morning',
	    afternoon: 'in the afternoon',
	    evening: 'in the evening',
	    night: 'at night'
	  },
	  wide: {
	    am: 'a.m.',
	    pm: 'p.m.',
	    midnight: 'midnight',
	    noon: 'noon',
	    morning: 'in the morning',
	    afternoon: 'in the afternoon',
	    evening: 'in the evening',
	    night: 'at night'
	  }
	};
	function ordinalNumber(dirtyNumber, _dirtyOptions) {
	  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
	  // if they are different for different grammatical genders,
	  // use `options.unit`:
	  //
	  //   var options = dirtyOptions || {}
	  //   var unit = String(options.unit)
	  //
	  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
	  // 'day', 'hour', 'minute', 'second'

	  var rem100 = number % 100;
	  if (rem100 > 20 || rem100 < 10) {
	    switch (rem100 % 10) {
	      case 1:
	        return number + 'st';
	      case 2:
	        return number + 'nd';
	      case 3:
	        return number + 'rd';
	    }
	  }
	  return number + 'th';
	}
	var localize = {
	  ordinalNumber: ordinalNumber,
	  era: buildLocalizeFn({
	    values: eraValues,
	    defaultWidth: 'wide'
	  }),
	  quarter: buildLocalizeFn({
	    values: quarterValues,
	    defaultWidth: 'wide',
	    argumentCallback: function (quarter) {
	      return Number(quarter) - 1;
	    }
	  }),
	  month: buildLocalizeFn({
	    values: monthValues,
	    defaultWidth: 'wide'
	  }),
	  day: buildLocalizeFn({
	    values: dayValues,
	    defaultWidth: 'wide'
	  }),
	  dayPeriod: buildLocalizeFn({
	    values: dayPeriodValues,
	    defaultWidth: 'wide',
	    formattingValues: formattingDayPeriodValues,
	    defaultFormattingWidth: 'wide'
	  })
	};

	function buildMatchPatternFn(args) {
	  return function (dirtyString, dirtyOptions) {
	    var string = String(dirtyString);
	    var options = dirtyOptions || {};
	    var matchResult = string.match(args.matchPattern);
	    if (!matchResult) {
	      return null;
	    }
	    var matchedString = matchResult[0];
	    var parseResult = string.match(args.parsePattern);
	    if (!parseResult) {
	      return null;
	    }
	    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
	    value = options.valueCallback ? options.valueCallback(value) : value;
	    return {
	      value: value,
	      rest: string.slice(matchedString.length)
	    };
	  };
	}

	function buildMatchFn(args) {
	  return function (dirtyString, dirtyOptions) {
	    var string = String(dirtyString);
	    var options = dirtyOptions || {};
	    var width = options.width;
	    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
	    var matchResult = string.match(matchPattern);
	    if (!matchResult) {
	      return null;
	    }
	    var matchedString = matchResult[0];
	    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
	    var value;
	    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
	      value = findIndex(parsePatterns, function (pattern) {
	        return pattern.test(matchedString);
	      });
	    } else {
	      value = findKey(parsePatterns, function (pattern) {
	        return pattern.test(matchedString);
	      });
	    }
	    value = args.valueCallback ? args.valueCallback(value) : value;
	    value = options.valueCallback ? options.valueCallback(value) : value;
	    return {
	      value: value,
	      rest: string.slice(matchedString.length)
	    };
	  };
	}
	function findKey(object, predicate) {
	  for (var key in object) {
	    if (object.hasOwnProperty(key) && predicate(object[key])) {
	      return key;
	    }
	  }
	}
	function findIndex(array, predicate) {
	  for (var key = 0; key < array.length; key++) {
	    if (predicate(array[key])) {
	      return key;
	    }
	  }
	}

	var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
	var parseOrdinalNumberPattern = /\d+/i;
	var matchEraPatterns = {
	  narrow: /^(b|a)/i,
	  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
	  wide: /^(before christ|before common era|anno domini|common era)/i
	};
	var parseEraPatterns = {
	  any: [/^b/i, /^(a|c)/i]
	};
	var matchQuarterPatterns = {
	  narrow: /^[1234]/i,
	  abbreviated: /^q[1234]/i,
	  wide: /^[1234](th|st|nd|rd)? quarter/i
	};
	var parseQuarterPatterns = {
	  any: [/1/i, /2/i, /3/i, /4/i]
	};
	var matchMonthPatterns = {
	  narrow: /^[jfmasond]/i,
	  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
	  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
	};
	var parseMonthPatterns = {
	  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
	  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
	};
	var matchDayPatterns = {
	  narrow: /^[smtwf]/i,
	  short: /^(su|mo|tu|we|th|fr|sa)/i,
	  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
	  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
	};
	var parseDayPatterns = {
	  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
	  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
	};
	var matchDayPeriodPatterns = {
	  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
	  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
	};
	var parseDayPeriodPatterns = {
	  any: {
	    am: /^a/i,
	    pm: /^p/i,
	    midnight: /^mi/i,
	    noon: /^no/i,
	    morning: /morning/i,
	    afternoon: /afternoon/i,
	    evening: /evening/i,
	    night: /night/i
	  }
	};
	var match = {
	  ordinalNumber: buildMatchPatternFn({
	    matchPattern: matchOrdinalNumberPattern,
	    parsePattern: parseOrdinalNumberPattern,
	    valueCallback: function (value) {
	      return parseInt(value, 10);
	    }
	  }),
	  era: buildMatchFn({
	    matchPatterns: matchEraPatterns,
	    defaultMatchWidth: 'wide',
	    parsePatterns: parseEraPatterns,
	    defaultParseWidth: 'any'
	  }),
	  quarter: buildMatchFn({
	    matchPatterns: matchQuarterPatterns,
	    defaultMatchWidth: 'wide',
	    parsePatterns: parseQuarterPatterns,
	    defaultParseWidth: 'any',
	    valueCallback: function (index) {
	      return index + 1;
	    }
	  }),
	  month: buildMatchFn({
	    matchPatterns: matchMonthPatterns,
	    defaultMatchWidth: 'wide',
	    parsePatterns: parseMonthPatterns,
	    defaultParseWidth: 'any'
	  }),
	  day: buildMatchFn({
	    matchPatterns: matchDayPatterns,
	    defaultMatchWidth: 'wide',
	    parsePatterns: parseDayPatterns,
	    defaultParseWidth: 'any'
	  }),
	  dayPeriod: buildMatchFn({
	    matchPatterns: matchDayPeriodPatterns,
	    defaultMatchWidth: 'any',
	    parsePatterns: parseDayPeriodPatterns,
	    defaultParseWidth: 'any'
	  })
	};

	/**
	 * @type {Locale}
	 * @category Locales
	 * @summary English locale (United States).
	 * @language English
	 * @iso-639-2 eng
	 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
	 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
	 */

	var locale = {
	  code: 'en-US',
	  formatDistance: formatDistance,
	  formatLong: formatLong,
	  formatRelative: formatRelative,
	  localize: localize,
	  match: match,
	  options: {
	    weekStartsOn: 0
	    /* Sunday */,

	    firstWeekContainsDate: 1
	  }
	};

	/**
	 * @name subMilliseconds
	 * @category Millisecond Helpers
	 * @summary Subtract the specified number of milliseconds from the given date.
	 *
	 * @description
	 * Subtract the specified number of milliseconds from the given date.
	 *
	 * ### v2.0.0 breaking changes:
	 *
	 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
	 *
	 * @param {Date|Number} date - the date to be changed
	 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
	 * @returns {Date} the new date with the milliseconds subtracted
	 * @throws {TypeError} 2 arguments required
	 *
	 * @example
	 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
	 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
	 * //=> Thu Jul 10 2014 12:45:29.250
	 */

	function subMilliseconds(dirtyDate, dirtyAmount) {
	  requiredArgs(2, arguments);
	  var amount = toInteger(dirtyAmount);
	  return addMilliseconds(dirtyDate, -amount);
	}

	function addLeadingZeros(number, targetLength) {
	  var sign = number < 0 ? '-' : '';
	  var output = Math.abs(number).toString();
	  while (output.length < targetLength) {
	    output = '0' + output;
	  }
	  return sign + output;
	}

	/*
	 * |     | Unit                           |     | Unit                           |
	 * |-----|--------------------------------|-----|--------------------------------|
	 * |  a  | AM, PM                         |  A* |                                |
	 * |  d  | Day of month                   |  D  |                                |
	 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
	 * |  m  | Minute                         |  M  | Month                          |
	 * |  s  | Second                         |  S  | Fraction of second             |
	 * |  y  | Year (abs)                     |  Y  |                                |
	 *
	 * Letters marked by * are not implemented but reserved by Unicode standard.
	 */

	var formatters$1 = {
	  // Year
	  y: function (date, token) {
	    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
	    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
	    // |----------|-------|----|-------|-------|-------|
	    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
	    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
	    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
	    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
	    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
	    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

	    var year = signedYear > 0 ? signedYear : 1 - signedYear;
	    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
	  },
	  // Month
	  M: function (date, token) {
	    var month = date.getUTCMonth();
	    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
	  },
	  // Day of the month
	  d: function (date, token) {
	    return addLeadingZeros(date.getUTCDate(), token.length);
	  },
	  // AM or PM
	  a: function (date, token) {
	    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
	    switch (token) {
	      case 'a':
	      case 'aa':
	      case 'aaa':
	        return dayPeriodEnumValue.toUpperCase();
	      case 'aaaaa':
	        return dayPeriodEnumValue[0];
	      case 'aaaa':
	      default:
	        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
	    }
	  },
	  // Hour [1-12]
	  h: function (date, token) {
	    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
	  },
	  // Hour [0-23]
	  H: function (date, token) {
	    return addLeadingZeros(date.getUTCHours(), token.length);
	  },
	  // Minute
	  m: function (date, token) {
	    return addLeadingZeros(date.getUTCMinutes(), token.length);
	  },
	  // Second
	  s: function (date, token) {
	    return addLeadingZeros(date.getUTCSeconds(), token.length);
	  },
	  // Fraction of second
	  S: function (date, token) {
	    var numberOfDigits = token.length;
	    var milliseconds = date.getUTCMilliseconds();
	    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
	    return addLeadingZeros(fractionalSeconds, token.length);
	  }
	};

	var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
	// See issue: https://github.com/date-fns/date-fns/issues/376

	function getUTCDayOfYear(dirtyDate) {
	  requiredArgs(1, arguments);
	  var date = toDate(dirtyDate);
	  var timestamp = date.getTime();
	  date.setUTCMonth(0, 1);
	  date.setUTCHours(0, 0, 0, 0);
	  var startOfYearTimestamp = date.getTime();
	  var difference = timestamp - startOfYearTimestamp;
	  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
	}

	// See issue: https://github.com/date-fns/date-fns/issues/376

	function startOfUTCISOWeek(dirtyDate) {
	  requiredArgs(1, arguments);
	  var weekStartsOn = 1;
	  var date = toDate(dirtyDate);
	  var day = date.getUTCDay();
	  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
	  date.setUTCDate(date.getUTCDate() - diff);
	  date.setUTCHours(0, 0, 0, 0);
	  return date;
	}

	// See issue: https://github.com/date-fns/date-fns/issues/376

	function getUTCISOWeekYear(dirtyDate) {
	  requiredArgs(1, arguments);
	  var date = toDate(dirtyDate);
	  var year = date.getUTCFullYear();
	  var fourthOfJanuaryOfNextYear = new Date(0);
	  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
	  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
	  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
	  var fourthOfJanuaryOfThisYear = new Date(0);
	  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
	  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
	  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
	  if (date.getTime() >= startOfNextYear.getTime()) {
	    return year + 1;
	  } else if (date.getTime() >= startOfThisYear.getTime()) {
	    return year;
	  } else {
	    return year - 1;
	  }
	}

	// See issue: https://github.com/date-fns/date-fns/issues/376

	function startOfUTCISOWeekYear(dirtyDate) {
	  requiredArgs(1, arguments);
	  var year = getUTCISOWeekYear(dirtyDate);
	  var fourthOfJanuary = new Date(0);
	  fourthOfJanuary.setUTCFullYear(year, 0, 4);
	  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
	  var date = startOfUTCISOWeek(fourthOfJanuary);
	  return date;
	}

	var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
	// See issue: https://github.com/date-fns/date-fns/issues/376

	function getUTCISOWeek(dirtyDate) {
	  requiredArgs(1, arguments);
	  var date = toDate(dirtyDate);
	  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
	  // because the number of milliseconds in a week is not constant
	  // (e.g. it's different in the week of the daylight saving time clock shift)

	  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
	}

	// See issue: https://github.com/date-fns/date-fns/issues/376

	function startOfUTCWeek(dirtyDate, dirtyOptions) {
	  requiredArgs(1, arguments);
	  var options = dirtyOptions || {};
	  var locale = options.locale;
	  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
	  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
	  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

	  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
	    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
	  }
	  var date = toDate(dirtyDate);
	  var day = date.getUTCDay();
	  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
	  date.setUTCDate(date.getUTCDate() - diff);
	  date.setUTCHours(0, 0, 0, 0);
	  return date;
	}

	// See issue: https://github.com/date-fns/date-fns/issues/376

	function getUTCWeekYear(dirtyDate, dirtyOptions) {
	  requiredArgs(1, arguments);
	  var date = toDate(dirtyDate, dirtyOptions);
	  var year = date.getUTCFullYear();
	  var options = dirtyOptions || {};
	  var locale = options.locale;
	  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
	  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
	  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

	  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
	    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
	  }
	  var firstWeekOfNextYear = new Date(0);
	  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
	  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
	  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
	  var firstWeekOfThisYear = new Date(0);
	  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
	  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
	  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);
	  if (date.getTime() >= startOfNextYear.getTime()) {
	    return year + 1;
	  } else if (date.getTime() >= startOfThisYear.getTime()) {
	    return year;
	  } else {
	    return year - 1;
	  }
	}

	// See issue: https://github.com/date-fns/date-fns/issues/376

	function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
	  requiredArgs(1, arguments);
	  var options = dirtyOptions || {};
	  var locale = options.locale;
	  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
	  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
	  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
	  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
	  var firstWeek = new Date(0);
	  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
	  firstWeek.setUTCHours(0, 0, 0, 0);
	  var date = startOfUTCWeek(firstWeek, dirtyOptions);
	  return date;
	}

	var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
	// See issue: https://github.com/date-fns/date-fns/issues/376

	function getUTCWeek(dirtyDate, options) {
	  requiredArgs(1, arguments);
	  var date = toDate(dirtyDate);
	  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
	  // because the number of milliseconds in a week is not constant
	  // (e.g. it's different in the week of the daylight saving time clock shift)

	  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
	}

	var dayPeriodEnum = {
	  midnight: 'midnight',
	  noon: 'noon',
	  morning: 'morning',
	  afternoon: 'afternoon',
	  evening: 'evening',
	  night: 'night'
	  /*
	   * |     | Unit                           |     | Unit                           |
	   * |-----|--------------------------------|-----|--------------------------------|
	   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
	   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
	   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
	   * |  d  | Day of month                   |  D  | Day of year                    |
	   * |  e  | Local day of week              |  E  | Day of week                    |
	   * |  f  |                                |  F* | Day of week in month           |
	   * |  g* | Modified Julian day            |  G  | Era                            |
	   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
	   * |  i! | ISO day of week                |  I! | ISO week of year               |
	   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
	   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
	   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
	   * |  m  | Minute                         |  M  | Month                          |
	   * |  n  |                                |  N  |                                |
	   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
	   * |  p! | Long localized time            |  P! | Long localized date            |
	   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
	   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
	   * |  s  | Second                         |  S  | Fraction of second             |
	   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
	   * |  u  | Extended year                  |  U* | Cyclic year                    |
	   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
	   * |  w  | Local week of year             |  W* | Week of month                  |
	   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
	   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
	   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
	   *
	   * Letters marked by * are not implemented but reserved by Unicode standard.
	   *
	   * Letters marked by ! are non-standard, but implemented by date-fns:
	   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
	   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
	   *   i.e. 7 for Sunday, 1 for Monday, etc.
	   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
	   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
	   *   `R` is supposed to be used in conjunction with `I` and `i`
	   *   for universal ISO week-numbering date, whereas
	   *   `Y` is supposed to be used in conjunction with `w` and `e`
	   *   for week-numbering date specific to the locale.
	   * - `P` is long localized date format
	   * - `p` is long localized time format
	   */
	};

	var formatters = {
	  // Era
	  G: function (date, token, localize) {
	    var era = date.getUTCFullYear() > 0 ? 1 : 0;
	    switch (token) {
	      // AD, BC
	      case 'G':
	      case 'GG':
	      case 'GGG':
	        return localize.era(era, {
	          width: 'abbreviated'
	        });
	      // A, B

	      case 'GGGGG':
	        return localize.era(era, {
	          width: 'narrow'
	        });
	      // Anno Domini, Before Christ

	      case 'GGGG':
	      default:
	        return localize.era(era, {
	          width: 'wide'
	        });
	    }
	  },
	  // Year
	  y: function (date, token, localize) {
	    // Ordinal number
	    if (token === 'yo') {
	      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

	      var year = signedYear > 0 ? signedYear : 1 - signedYear;
	      return localize.ordinalNumber(year, {
	        unit: 'year'
	      });
	    }
	    return formatters$1.y(date, token);
	  },
	  // Local week-numbering year
	  Y: function (date, token, localize, options) {
	    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

	    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

	    if (token === 'YY') {
	      var twoDigitYear = weekYear % 100;
	      return addLeadingZeros(twoDigitYear, 2);
	    } // Ordinal number

	    if (token === 'Yo') {
	      return localize.ordinalNumber(weekYear, {
	        unit: 'year'
	      });
	    } // Padding

	    return addLeadingZeros(weekYear, token.length);
	  },
	  // ISO week-numbering year
	  R: function (date, token) {
	    var isoWeekYear = getUTCISOWeekYear(date); // Padding

	    return addLeadingZeros(isoWeekYear, token.length);
	  },
	  // Extended year. This is a single number designating the year of this calendar system.
	  // The main difference between `y` and `u` localizers are B.C. years:
	  // | Year | `y` | `u` |
	  // |------|-----|-----|
	  // | AC 1 |   1 |   1 |
	  // | BC 1 |   1 |   0 |
	  // | BC 2 |   2 |  -1 |
	  // Also `yy` always returns the last two digits of a year,
	  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
	  u: function (date, token) {
	    var year = date.getUTCFullYear();
	    return addLeadingZeros(year, token.length);
	  },
	  // Quarter
	  Q: function (date, token, localize) {
	    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
	    switch (token) {
	      // 1, 2, 3, 4
	      case 'Q':
	        return String(quarter);
	      // 01, 02, 03, 04

	      case 'QQ':
	        return addLeadingZeros(quarter, 2);
	      // 1st, 2nd, 3rd, 4th

	      case 'Qo':
	        return localize.ordinalNumber(quarter, {
	          unit: 'quarter'
	        });
	      // Q1, Q2, Q3, Q4

	      case 'QQQ':
	        return localize.quarter(quarter, {
	          width: 'abbreviated',
	          context: 'formatting'
	        });
	      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

	      case 'QQQQQ':
	        return localize.quarter(quarter, {
	          width: 'narrow',
	          context: 'formatting'
	        });
	      // 1st quarter, 2nd quarter, ...

	      case 'QQQQ':
	      default:
	        return localize.quarter(quarter, {
	          width: 'wide',
	          context: 'formatting'
	        });
	    }
	  },
	  // Stand-alone quarter
	  q: function (date, token, localize) {
	    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
	    switch (token) {
	      // 1, 2, 3, 4
	      case 'q':
	        return String(quarter);
	      // 01, 02, 03, 04

	      case 'qq':
	        return addLeadingZeros(quarter, 2);
	      // 1st, 2nd, 3rd, 4th

	      case 'qo':
	        return localize.ordinalNumber(quarter, {
	          unit: 'quarter'
	        });
	      // Q1, Q2, Q3, Q4

	      case 'qqq':
	        return localize.quarter(quarter, {
	          width: 'abbreviated',
	          context: 'standalone'
	        });
	      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

	      case 'qqqqq':
	        return localize.quarter(quarter, {
	          width: 'narrow',
	          context: 'standalone'
	        });
	      // 1st quarter, 2nd quarter, ...

	      case 'qqqq':
	      default:
	        return localize.quarter(quarter, {
	          width: 'wide',
	          context: 'standalone'
	        });
	    }
	  },
	  // Month
	  M: function (date, token, localize) {
	    var month = date.getUTCMonth();
	    switch (token) {
	      case 'M':
	      case 'MM':
	        return formatters$1.M(date, token);
	      // 1st, 2nd, ..., 12th

	      case 'Mo':
	        return localize.ordinalNumber(month + 1, {
	          unit: 'month'
	        });
	      // Jan, Feb, ..., Dec

	      case 'MMM':
	        return localize.month(month, {
	          width: 'abbreviated',
	          context: 'formatting'
	        });
	      // J, F, ..., D

	      case 'MMMMM':
	        return localize.month(month, {
	          width: 'narrow',
	          context: 'formatting'
	        });
	      // January, February, ..., December

	      case 'MMMM':
	      default:
	        return localize.month(month, {
	          width: 'wide',
	          context: 'formatting'
	        });
	    }
	  },
	  // Stand-alone month
	  L: function (date, token, localize) {
	    var month = date.getUTCMonth();
	    switch (token) {
	      // 1, 2, ..., 12
	      case 'L':
	        return String(month + 1);
	      // 01, 02, ..., 12

	      case 'LL':
	        return addLeadingZeros(month + 1, 2);
	      // 1st, 2nd, ..., 12th

	      case 'Lo':
	        return localize.ordinalNumber(month + 1, {
	          unit: 'month'
	        });
	      // Jan, Feb, ..., Dec

	      case 'LLL':
	        return localize.month(month, {
	          width: 'abbreviated',
	          context: 'standalone'
	        });
	      // J, F, ..., D

	      case 'LLLLL':
	        return localize.month(month, {
	          width: 'narrow',
	          context: 'standalone'
	        });
	      // January, February, ..., December

	      case 'LLLL':
	      default:
	        return localize.month(month, {
	          width: 'wide',
	          context: 'standalone'
	        });
	    }
	  },
	  // Local week of year
	  w: function (date, token, localize, options) {
	    var week = getUTCWeek(date, options);
	    if (token === 'wo') {
	      return localize.ordinalNumber(week, {
	        unit: 'week'
	      });
	    }
	    return addLeadingZeros(week, token.length);
	  },
	  // ISO week of year
	  I: function (date, token, localize) {
	    var isoWeek = getUTCISOWeek(date);
	    if (token === 'Io') {
	      return localize.ordinalNumber(isoWeek, {
	        unit: 'week'
	      });
	    }
	    return addLeadingZeros(isoWeek, token.length);
	  },
	  // Day of the month
	  d: function (date, token, localize) {
	    if (token === 'do') {
	      return localize.ordinalNumber(date.getUTCDate(), {
	        unit: 'date'
	      });
	    }
	    return formatters$1.d(date, token);
	  },
	  // Day of year
	  D: function (date, token, localize) {
	    var dayOfYear = getUTCDayOfYear(date);
	    if (token === 'Do') {
	      return localize.ordinalNumber(dayOfYear, {
	        unit: 'dayOfYear'
	      });
	    }
	    return addLeadingZeros(dayOfYear, token.length);
	  },
	  // Day of week
	  E: function (date, token, localize) {
	    var dayOfWeek = date.getUTCDay();
	    switch (token) {
	      // Tue
	      case 'E':
	      case 'EE':
	      case 'EEE':
	        return localize.day(dayOfWeek, {
	          width: 'abbreviated',
	          context: 'formatting'
	        });
	      // T

	      case 'EEEEE':
	        return localize.day(dayOfWeek, {
	          width: 'narrow',
	          context: 'formatting'
	        });
	      // Tu

	      case 'EEEEEE':
	        return localize.day(dayOfWeek, {
	          width: 'short',
	          context: 'formatting'
	        });
	      // Tuesday

	      case 'EEEE':
	      default:
	        return localize.day(dayOfWeek, {
	          width: 'wide',
	          context: 'formatting'
	        });
	    }
	  },
	  // Local day of week
	  e: function (date, token, localize, options) {
	    var dayOfWeek = date.getUTCDay();
	    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
	    switch (token) {
	      // Numerical value (Nth day of week with current locale or weekStartsOn)
	      case 'e':
	        return String(localDayOfWeek);
	      // Padded numerical value

	      case 'ee':
	        return addLeadingZeros(localDayOfWeek, 2);
	      // 1st, 2nd, ..., 7th

	      case 'eo':
	        return localize.ordinalNumber(localDayOfWeek, {
	          unit: 'day'
	        });
	      case 'eee':
	        return localize.day(dayOfWeek, {
	          width: 'abbreviated',
	          context: 'formatting'
	        });
	      // T

	      case 'eeeee':
	        return localize.day(dayOfWeek, {
	          width: 'narrow',
	          context: 'formatting'
	        });
	      // Tu

	      case 'eeeeee':
	        return localize.day(dayOfWeek, {
	          width: 'short',
	          context: 'formatting'
	        });
	      // Tuesday

	      case 'eeee':
	      default:
	        return localize.day(dayOfWeek, {
	          width: 'wide',
	          context: 'formatting'
	        });
	    }
	  },
	  // Stand-alone local day of week
	  c: function (date, token, localize, options) {
	    var dayOfWeek = date.getUTCDay();
	    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
	    switch (token) {
	      // Numerical value (same as in `e`)
	      case 'c':
	        return String(localDayOfWeek);
	      // Padded numerical value

	      case 'cc':
	        return addLeadingZeros(localDayOfWeek, token.length);
	      // 1st, 2nd, ..., 7th

	      case 'co':
	        return localize.ordinalNumber(localDayOfWeek, {
	          unit: 'day'
	        });
	      case 'ccc':
	        return localize.day(dayOfWeek, {
	          width: 'abbreviated',
	          context: 'standalone'
	        });
	      // T

	      case 'ccccc':
	        return localize.day(dayOfWeek, {
	          width: 'narrow',
	          context: 'standalone'
	        });
	      // Tu

	      case 'cccccc':
	        return localize.day(dayOfWeek, {
	          width: 'short',
	          context: 'standalone'
	        });
	      // Tuesday

	      case 'cccc':
	      default:
	        return localize.day(dayOfWeek, {
	          width: 'wide',
	          context: 'standalone'
	        });
	    }
	  },
	  // ISO day of week
	  i: function (date, token, localize) {
	    var dayOfWeek = date.getUTCDay();
	    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
	    switch (token) {
	      // 2
	      case 'i':
	        return String(isoDayOfWeek);
	      // 02

	      case 'ii':
	        return addLeadingZeros(isoDayOfWeek, token.length);
	      // 2nd

	      case 'io':
	        return localize.ordinalNumber(isoDayOfWeek, {
	          unit: 'day'
	        });
	      // Tue

	      case 'iii':
	        return localize.day(dayOfWeek, {
	          width: 'abbreviated',
	          context: 'formatting'
	        });
	      // T

	      case 'iiiii':
	        return localize.day(dayOfWeek, {
	          width: 'narrow',
	          context: 'formatting'
	        });
	      // Tu

	      case 'iiiiii':
	        return localize.day(dayOfWeek, {
	          width: 'short',
	          context: 'formatting'
	        });
	      // Tuesday

	      case 'iiii':
	      default:
	        return localize.day(dayOfWeek, {
	          width: 'wide',
	          context: 'formatting'
	        });
	    }
	  },
	  // AM or PM
	  a: function (date, token, localize) {
	    var hours = date.getUTCHours();
	    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
	    switch (token) {
	      case 'a':
	      case 'aa':
	      case 'aaa':
	        return localize.dayPeriod(dayPeriodEnumValue, {
	          width: 'abbreviated',
	          context: 'formatting'
	        });
	      case 'aaaaa':
	        return localize.dayPeriod(dayPeriodEnumValue, {
	          width: 'narrow',
	          context: 'formatting'
	        });
	      case 'aaaa':
	      default:
	        return localize.dayPeriod(dayPeriodEnumValue, {
	          width: 'wide',
	          context: 'formatting'
	        });
	    }
	  },
	  // AM, PM, midnight, noon
	  b: function (date, token, localize) {
	    var hours = date.getUTCHours();
	    var dayPeriodEnumValue;
	    if (hours === 12) {
	      dayPeriodEnumValue = dayPeriodEnum.noon;
	    } else if (hours === 0) {
	      dayPeriodEnumValue = dayPeriodEnum.midnight;
	    } else {
	      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
	    }
	    switch (token) {
	      case 'b':
	      case 'bb':
	      case 'bbb':
	        return localize.dayPeriod(dayPeriodEnumValue, {
	          width: 'abbreviated',
	          context: 'formatting'
	        });
	      case 'bbbbb':
	        return localize.dayPeriod(dayPeriodEnumValue, {
	          width: 'narrow',
	          context: 'formatting'
	        });
	      case 'bbbb':
	      default:
	        return localize.dayPeriod(dayPeriodEnumValue, {
	          width: 'wide',
	          context: 'formatting'
	        });
	    }
	  },
	  // in the morning, in the afternoon, in the evening, at night
	  B: function (date, token, localize) {
	    var hours = date.getUTCHours();
	    var dayPeriodEnumValue;
	    if (hours >= 17) {
	      dayPeriodEnumValue = dayPeriodEnum.evening;
	    } else if (hours >= 12) {
	      dayPeriodEnumValue = dayPeriodEnum.afternoon;
	    } else if (hours >= 4) {
	      dayPeriodEnumValue = dayPeriodEnum.morning;
	    } else {
	      dayPeriodEnumValue = dayPeriodEnum.night;
	    }
	    switch (token) {
	      case 'B':
	      case 'BB':
	      case 'BBB':
	        return localize.dayPeriod(dayPeriodEnumValue, {
	          width: 'abbreviated',
	          context: 'formatting'
	        });
	      case 'BBBBB':
	        return localize.dayPeriod(dayPeriodEnumValue, {
	          width: 'narrow',
	          context: 'formatting'
	        });
	      case 'BBBB':
	      default:
	        return localize.dayPeriod(dayPeriodEnumValue, {
	          width: 'wide',
	          context: 'formatting'
	        });
	    }
	  },
	  // Hour [1-12]
	  h: function (date, token, localize) {
	    if (token === 'ho') {
	      var hours = date.getUTCHours() % 12;
	      if (hours === 0) hours = 12;
	      return localize.ordinalNumber(hours, {
	        unit: 'hour'
	      });
	    }
	    return formatters$1.h(date, token);
	  },
	  // Hour [0-23]
	  H: function (date, token, localize) {
	    if (token === 'Ho') {
	      return localize.ordinalNumber(date.getUTCHours(), {
	        unit: 'hour'
	      });
	    }
	    return formatters$1.H(date, token);
	  },
	  // Hour [0-11]
	  K: function (date, token, localize) {
	    var hours = date.getUTCHours() % 12;
	    if (token === 'Ko') {
	      return localize.ordinalNumber(hours, {
	        unit: 'hour'
	      });
	    }
	    return addLeadingZeros(hours, token.length);
	  },
	  // Hour [1-24]
	  k: function (date, token, localize) {
	    var hours = date.getUTCHours();
	    if (hours === 0) hours = 24;
	    if (token === 'ko') {
	      return localize.ordinalNumber(hours, {
	        unit: 'hour'
	      });
	    }
	    return addLeadingZeros(hours, token.length);
	  },
	  // Minute
	  m: function (date, token, localize) {
	    if (token === 'mo') {
	      return localize.ordinalNumber(date.getUTCMinutes(), {
	        unit: 'minute'
	      });
	    }
	    return formatters$1.m(date, token);
	  },
	  // Second
	  s: function (date, token, localize) {
	    if (token === 'so') {
	      return localize.ordinalNumber(date.getUTCSeconds(), {
	        unit: 'second'
	      });
	    }
	    return formatters$1.s(date, token);
	  },
	  // Fraction of second
	  S: function (date, token) {
	    return formatters$1.S(date, token);
	  },
	  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
	  X: function (date, token, _localize, options) {
	    var originalDate = options._originalDate || date;
	    var timezoneOffset = originalDate.getTimezoneOffset();
	    if (timezoneOffset === 0) {
	      return 'Z';
	    }
	    switch (token) {
	      // Hours and optional minutes
	      case 'X':
	        return formatTimezoneWithOptionalMinutes(timezoneOffset);
	      // Hours, minutes and optional seconds without `:` delimiter
	      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
	      // so this token always has the same output as `XX`

	      case 'XXXX':
	      case 'XX':
	        // Hours and minutes without `:` delimiter
	        return formatTimezone(timezoneOffset);
	      // Hours, minutes and optional seconds with `:` delimiter
	      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
	      // so this token always has the same output as `XXX`

	      case 'XXXXX':
	      case 'XXX': // Hours and minutes with `:` delimiter

	      default:
	        return formatTimezone(timezoneOffset, ':');
	    }
	  },
	  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
	  x: function (date, token, _localize, options) {
	    var originalDate = options._originalDate || date;
	    var timezoneOffset = originalDate.getTimezoneOffset();
	    switch (token) {
	      // Hours and optional minutes
	      case 'x':
	        return formatTimezoneWithOptionalMinutes(timezoneOffset);
	      // Hours, minutes and optional seconds without `:` delimiter
	      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
	      // so this token always has the same output as `xx`

	      case 'xxxx':
	      case 'xx':
	        // Hours and minutes without `:` delimiter
	        return formatTimezone(timezoneOffset);
	      // Hours, minutes and optional seconds with `:` delimiter
	      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
	      // so this token always has the same output as `xxx`

	      case 'xxxxx':
	      case 'xxx': // Hours and minutes with `:` delimiter

	      default:
	        return formatTimezone(timezoneOffset, ':');
	    }
	  },
	  // Timezone (GMT)
	  O: function (date, token, _localize, options) {
	    var originalDate = options._originalDate || date;
	    var timezoneOffset = originalDate.getTimezoneOffset();
	    switch (token) {
	      // Short
	      case 'O':
	      case 'OO':
	      case 'OOO':
	        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
	      // Long

	      case 'OOOO':
	      default:
	        return 'GMT' + formatTimezone(timezoneOffset, ':');
	    }
	  },
	  // Timezone (specific non-location)
	  z: function (date, token, _localize, options) {
	    var originalDate = options._originalDate || date;
	    var timezoneOffset = originalDate.getTimezoneOffset();
	    switch (token) {
	      // Short
	      case 'z':
	      case 'zz':
	      case 'zzz':
	        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
	      // Long

	      case 'zzzz':
	      default:
	        return 'GMT' + formatTimezone(timezoneOffset, ':');
	    }
	  },
	  // Seconds timestamp
	  t: function (date, token, _localize, options) {
	    var originalDate = options._originalDate || date;
	    var timestamp = Math.floor(originalDate.getTime() / 1000);
	    return addLeadingZeros(timestamp, token.length);
	  },
	  // Milliseconds timestamp
	  T: function (date, token, _localize, options) {
	    var originalDate = options._originalDate || date;
	    var timestamp = originalDate.getTime();
	    return addLeadingZeros(timestamp, token.length);
	  }
	};
	function formatTimezoneShort(offset, dirtyDelimiter) {
	  var sign = offset > 0 ? '-' : '+';
	  var absOffset = Math.abs(offset);
	  var hours = Math.floor(absOffset / 60);
	  var minutes = absOffset % 60;
	  if (minutes === 0) {
	    return sign + String(hours);
	  }
	  var delimiter = dirtyDelimiter;
	  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
	}
	function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
	  if (offset % 60 === 0) {
	    var sign = offset > 0 ? '-' : '+';
	    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
	  }
	  return formatTimezone(offset, dirtyDelimiter);
	}
	function formatTimezone(offset, dirtyDelimiter) {
	  var delimiter = dirtyDelimiter || '';
	  var sign = offset > 0 ? '-' : '+';
	  var absOffset = Math.abs(offset);
	  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
	  var minutes = addLeadingZeros(absOffset % 60, 2);
	  return sign + hours + delimiter + minutes;
	}

	function dateLongFormatter(pattern, formatLong) {
	  switch (pattern) {
	    case 'P':
	      return formatLong.date({
	        width: 'short'
	      });
	    case 'PP':
	      return formatLong.date({
	        width: 'medium'
	      });
	    case 'PPP':
	      return formatLong.date({
	        width: 'long'
	      });
	    case 'PPPP':
	    default:
	      return formatLong.date({
	        width: 'full'
	      });
	  }
	}
	function timeLongFormatter(pattern, formatLong) {
	  switch (pattern) {
	    case 'p':
	      return formatLong.time({
	        width: 'short'
	      });
	    case 'pp':
	      return formatLong.time({
	        width: 'medium'
	      });
	    case 'ppp':
	      return formatLong.time({
	        width: 'long'
	      });
	    case 'pppp':
	    default:
	      return formatLong.time({
	        width: 'full'
	      });
	  }
	}
	function dateTimeLongFormatter(pattern, formatLong) {
	  var matchResult = pattern.match(/(P+)(p+)?/);
	  var datePattern = matchResult[1];
	  var timePattern = matchResult[2];
	  if (!timePattern) {
	    return dateLongFormatter(pattern, formatLong);
	  }
	  var dateTimeFormat;
	  switch (datePattern) {
	    case 'P':
	      dateTimeFormat = formatLong.dateTime({
	        width: 'short'
	      });
	      break;
	    case 'PP':
	      dateTimeFormat = formatLong.dateTime({
	        width: 'medium'
	      });
	      break;
	    case 'PPP':
	      dateTimeFormat = formatLong.dateTime({
	        width: 'long'
	      });
	      break;
	    case 'PPPP':
	    default:
	      dateTimeFormat = formatLong.dateTime({
	        width: 'full'
	      });
	      break;
	  }
	  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
	}
	var longFormatters = {
	  p: timeLongFormatter,
	  P: dateTimeLongFormatter
	};

	var protectedDayOfYearTokens = ['D', 'DD'];
	var protectedWeekYearTokens = ['YY', 'YYYY'];
	function isProtectedDayOfYearToken(token) {
	  return protectedDayOfYearTokens.indexOf(token) !== -1;
	}
	function isProtectedWeekYearToken(token) {
	  return protectedWeekYearTokens.indexOf(token) !== -1;
	}
	function throwProtectedError(token, format, input) {
	  if (token === 'YYYY') {
	    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
	  } else if (token === 'YY') {
	    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
	  } else if (token === 'D') {
	    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
	  } else if (token === 'DD') {
	    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
	  }
	}

	// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
	//   (one of the certain letters followed by `o`)
	// - (\w)\1* matches any sequences of the same letter
	// - '' matches two quote characters in a row
	// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
	//   except a single quote symbol, which ends the sequence.
	//   Two quote characters do not end the sequence.
	//   If there is no matching single quote
	//   then the sequence will continue until the end of the string.
	// - . matches any single character unmatched by previous parts of the RegExps

	var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
	// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

	var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
	var escapedStringRegExp$1 = /^'([^]*?)'?$/;
	var doubleQuoteRegExp$1 = /''/g;
	var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
	/**
	 * @name format
	 * @category Common Helpers
	 * @summary Format the date.
	 *
	 * @description
	 * Return the formatted date string in the given format. The result may vary by locale.
	 *
	 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
	 * > See: https://git.io/fxCyr
	 *
	 * The characters wrapped between two single quotes characters (') are escaped.
	 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
	 * (see the last example)
	 *
	 * Format of the string is based on Unicode Technical Standard #35:
	 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
	 * with a few additions (see note 7 below the table).
	 *
	 * Accepted patterns:
	 * | Unit                            | Pattern | Result examples                   | Notes |
	 * |---------------------------------|---------|-----------------------------------|-------|
	 * | Era                             | G..GGG  | AD, BC                            |       |
	 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
	 * |                                 | GGGGG   | A, B                              |       |
	 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
	 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
	 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
	 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
	 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
	 * |                                 | yyyyy   | ...                               | 3,5   |
	 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
	 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
	 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
	 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
	 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
	 * |                                 | YYYYY   | ...                               | 3,5   |
	 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
	 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
	 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
	 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
	 * |                                 | RRRRR   | ...                               | 3,5,7 |
	 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
	 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
	 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
	 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
	 * |                                 | uuuuu   | ...                               | 3,5   |
	 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
	 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
	 * |                                 | QQ      | 01, 02, 03, 04                    |       |
	 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
	 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
	 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
	 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
	 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
	 * |                                 | qq      | 01, 02, 03, 04                    |       |
	 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
	 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
	 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
	 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
	 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
	 * |                                 | MM      | 01, 02, ..., 12                   |       |
	 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
	 * |                                 | MMMM    | January, February, ..., December  | 2     |
	 * |                                 | MMMMM   | J, F, ..., D                      |       |
	 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
	 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
	 * |                                 | LL      | 01, 02, ..., 12                   |       |
	 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
	 * |                                 | LLLL    | January, February, ..., December  | 2     |
	 * |                                 | LLLLL   | J, F, ..., D                      |       |
	 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
	 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
	 * |                                 | ww      | 01, 02, ..., 53                   |       |
	 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
	 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
	 * |                                 | II      | 01, 02, ..., 53                   | 7     |
	 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
	 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
	 * |                                 | dd      | 01, 02, ..., 31                   |       |
	 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
	 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
	 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
	 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
	 * |                                 | DDDD    | ...                               | 3     |
	 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
	 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
	 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
	 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
	 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
	 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
	 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
	 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
	 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
	 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
	 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
	 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
	 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
	 * |                                 | ee      | 02, 03, ..., 01                   |       |
	 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
	 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
	 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
	 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
	 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
	 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
	 * |                                 | cc      | 02, 03, ..., 01                   |       |
	 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
	 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
	 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
	 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
	 * | AM, PM                          | a..aaa  | AM, PM                            |       |
	 * |                                 | aaaa    | a.m., p.m.                        | 2     |
	 * |                                 | aaaaa   | a, p                              |       |
	 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
	 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
	 * |                                 | bbbbb   | a, p, n, mi                       |       |
	 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
	 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
	 * |                                 | BBBBB   | at night, in the morning, ...     |       |
	 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
	 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
	 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
	 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
	 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
	 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
	 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
	 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
	 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
	 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
	 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
	 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
	 * | Minute                          | m       | 0, 1, ..., 59                     |       |
	 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
	 * |                                 | mm      | 00, 01, ..., 59                   |       |
	 * | Second                          | s       | 0, 1, ..., 59                     |       |
	 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
	 * |                                 | ss      | 00, 01, ..., 59                   |       |
	 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
	 * |                                 | SS      | 00, 01, ..., 99                   |       |
	 * |                                 | SSS     | 000, 0001, ..., 999               |       |
	 * |                                 | SSSS    | ...                               | 3     |
	 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
	 * |                                 | XX      | -0800, +0530, Z                   |       |
	 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
	 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
	 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
	 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
	 * |                                 | xx      | -0800, +0530, +0000               |       |
	 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
	 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
	 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
	 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
	 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
	 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
	 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
	 * | Seconds timestamp               | t       | 512969520                         | 7     |
	 * |                                 | tt      | ...                               | 3,7   |
	 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
	 * |                                 | TT      | ...                               | 3,7   |
	 * | Long localized date             | P       | 05/29/1453                        | 7     |
	 * |                                 | PP      | May 29, 1453                      | 7     |
	 * |                                 | PPP     | May 29th, 1453                    | 7     |
	 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
	 * | Long localized time             | p       | 12:00 AM                          | 7     |
	 * |                                 | pp      | 12:00:00 AM                       | 7     |
	 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
	 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
	 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
	 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
	 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
	 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
	 * Notes:
	 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
	 *    are the same as "stand-alone" units, but are different in some languages.
	 *    "Formatting" units are declined according to the rules of the language
	 *    in the context of a date. "Stand-alone" units are always nominative singular:
	 *
	 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
	 *
	 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
	 *
	 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
	 *    the single quote characters (see below).
	 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
	 *    the output will be the same as default pattern for this unit, usually
	 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
	 *    are marked with "2" in the last column of the table.
	 *
	 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
	 *
	 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
	 *
	 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
	 *
	 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
	 *
	 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
	 *
	 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
	 *    The output will be padded with zeros to match the length of the pattern.
	 *
	 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
	 *
	 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
	 *    These tokens represent the shortest form of the quarter.
	 *
	 * 5. The main difference between `y` and `u` patterns are B.C. years:
	 *
	 *    | Year | `y` | `u` |
	 *    |------|-----|-----|
	 *    | AC 1 |   1 |   1 |
	 *    | BC 1 |   1 |   0 |
	 *    | BC 2 |   2 |  -1 |
	 *
	 *    Also `yy` always returns the last two digits of a year,
	 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
	 *
	 *    | Year | `yy` | `uu` |
	 *    |------|------|------|
	 *    | 1    |   01 |   01 |
	 *    | 14   |   14 |   14 |
	 *    | 376  |   76 |  376 |
	 *    | 1453 |   53 | 1453 |
	 *
	 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
	 *    except local week-numbering years are dependent on `options.weekStartsOn`
	 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
	 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
	 *
	 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
	 *    so right now these tokens fall back to GMT timezones.
	 *
	 * 7. These patterns are not in the Unicode Technical Standard #35:
	 *    - `i`: ISO day of week
	 *    - `I`: ISO week of year
	 *    - `R`: ISO week-numbering year
	 *    - `t`: seconds timestamp
	 *    - `T`: milliseconds timestamp
	 *    - `o`: ordinal number modifier
	 *    - `P`: long localized date
	 *    - `p`: long localized time
	 *
	 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
	 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
	 *
	 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
	 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
	 *
	 * ### v2.0.0 breaking changes:
	 *
	 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
	 *
	 * - The second argument is now required for the sake of explicitness.
	 *
	 *   ```javascript
	 *   // Before v2.0.0
	 *   format(new Date(2016, 0, 1))
	 *
	 *   // v2.0.0 onward
	 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
	 *   ```
	 *
	 * - New format string API for `format` function
	 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
	 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
	 *
	 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
	 *
	 * @param {Date|Number} date - the original date
	 * @param {String} format - the string of tokens
	 * @param {Object} [options] - an object with options.
	 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
	 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
	 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
	 *   see: https://git.io/fxCyr
	 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
	 *   see: https://git.io/fxCyr
	 * @returns {String} the formatted date string
	 * @throws {TypeError} 2 arguments required
	 * @throws {RangeError} `date` must not be Invalid Date
	 * @throws {RangeError} `options.locale` must contain `localize` property
	 * @throws {RangeError} `options.locale` must contain `formatLong` property
	 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
	 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
	 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
	 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
	 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
	 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
	 * @throws {RangeError} format string contains an unescaped latin alphabet character
	 *
	 * @example
	 * // Represent 11 February 2014 in middle-endian format:
	 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
	 * //=> '02/11/2014'
	 *
	 * @example
	 * // Represent 2 July 2014 in Esperanto:
	 * import { eoLocale } from 'date-fns/locale/eo'
	 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
	 *   locale: eoLocale
	 * })
	 * //=> '2-a de julio 2014'
	 *
	 * @example
	 * // Escape string by single quote characters:
	 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
	 * //=> "3 o'clock"
	 */

	function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
	  requiredArgs(2, arguments);
	  var formatStr = String(dirtyFormatStr);
	  var options = {};
	  var locale$1 = options.locale || locale;
	  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
	  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
	  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

	  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
	    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
	  }
	  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
	  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
	  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

	  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
	    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
	  }
	  if (!locale$1.localize) {
	    throw new RangeError('locale must contain localize property');
	  }
	  if (!locale$1.formatLong) {
	    throw new RangeError('locale must contain formatLong property');
	  }
	  var originalDate = toDate(dirtyDate);
	  if (!isValid(originalDate)) {
	    throw new RangeError('Invalid time value');
	  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
	  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
	  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376

	  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
	  var utcDate = subMilliseconds(originalDate, timezoneOffset);
	  var formatterOptions = {
	    firstWeekContainsDate: firstWeekContainsDate,
	    weekStartsOn: weekStartsOn,
	    locale: locale$1,
	    _originalDate: originalDate
	  };
	  var result = formatStr.match(longFormattingTokensRegExp$1).map(function (substring) {
	    var firstCharacter = substring[0];
	    if (firstCharacter === 'p' || firstCharacter === 'P') {
	      var longFormatter = longFormatters[firstCharacter];
	      return longFormatter(substring, locale$1.formatLong, formatterOptions);
	    }
	    return substring;
	  }).join('').match(formattingTokensRegExp$1).map(function (substring) {
	    // Replace two single quote characters with one single quote character
	    if (substring === "''") {
	      return "'";
	    }
	    var firstCharacter = substring[0];
	    if (firstCharacter === "'") {
	      return cleanEscapedString$1(substring);
	    }
	    var formatter = formatters[firstCharacter];
	    if (formatter) {
	      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
	        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
	      }
	      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
	        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
	      }
	      return formatter(utcDate, substring, locale$1.localize, formatterOptions);
	    }
	    if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
	      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
	    }
	    return substring;
	  }).join('');
	  return result;
	}
	function cleanEscapedString$1(input) {
	  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'");
	}

	function assign(target, dirtyObject) {
	  if (target == null) {
	    throw new TypeError('assign requires that input parameter not be null or undefined');
	  }
	  dirtyObject = dirtyObject || {};
	  for (var property in dirtyObject) {
	    if (dirtyObject.hasOwnProperty(property)) {
	      target[property] = dirtyObject[property];
	    }
	  }
	  return target;
	}

	// See issue: https://github.com/date-fns/date-fns/issues/376

	function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
	  requiredArgs(2, arguments);
	  var options = dirtyOptions || {};
	  var locale = options.locale;
	  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
	  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
	  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

	  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
	    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
	  }
	  var date = toDate(dirtyDate);
	  var day = toInteger(dirtyDay);
	  var currentDay = date.getUTCDay();
	  var remainder = day % 7;
	  var dayIndex = (remainder + 7) % 7;
	  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
	  date.setUTCDate(date.getUTCDate() + diff);
	  return date;
	}

	// See issue: https://github.com/date-fns/date-fns/issues/376

	function setUTCISODay(dirtyDate, dirtyDay) {
	  requiredArgs(2, arguments);
	  var day = toInteger(dirtyDay);
	  if (day % 7 === 0) {
	    day = day - 7;
	  }
	  var weekStartsOn = 1;
	  var date = toDate(dirtyDate);
	  var currentDay = date.getUTCDay();
	  var remainder = day % 7;
	  var dayIndex = (remainder + 7) % 7;
	  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
	  date.setUTCDate(date.getUTCDate() + diff);
	  return date;
	}

	// See issue: https://github.com/date-fns/date-fns/issues/376

	function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
	  requiredArgs(2, arguments);
	  var date = toDate(dirtyDate);
	  var isoWeek = toInteger(dirtyISOWeek);
	  var diff = getUTCISOWeek(date) - isoWeek;
	  date.setUTCDate(date.getUTCDate() - diff * 7);
	  return date;
	}

	// See issue: https://github.com/date-fns/date-fns/issues/376

	function setUTCWeek(dirtyDate, dirtyWeek, options) {
	  requiredArgs(2, arguments);
	  var date = toDate(dirtyDate);
	  var week = toInteger(dirtyWeek);
	  var diff = getUTCWeek(date, options) - week;
	  date.setUTCDate(date.getUTCDate() - diff * 7);
	  return date;
	}

	var MILLISECONDS_IN_HOUR = 3600000;
	var MILLISECONDS_IN_MINUTE = 60000;
	var MILLISECONDS_IN_SECOND = 1000;
	var numericPatterns = {
	  month: /^(1[0-2]|0?\d)/,
	  // 0 to 12
	  date: /^(3[0-1]|[0-2]?\d)/,
	  // 0 to 31
	  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
	  // 0 to 366
	  week: /^(5[0-3]|[0-4]?\d)/,
	  // 0 to 53
	  hour23h: /^(2[0-3]|[0-1]?\d)/,
	  // 0 to 23
	  hour24h: /^(2[0-4]|[0-1]?\d)/,
	  // 0 to 24
	  hour11h: /^(1[0-1]|0?\d)/,
	  // 0 to 11
	  hour12h: /^(1[0-2]|0?\d)/,
	  // 0 to 12
	  minute: /^[0-5]?\d/,
	  // 0 to 59
	  second: /^[0-5]?\d/,
	  // 0 to 59
	  singleDigit: /^\d/,
	  // 0 to 9
	  twoDigits: /^\d{1,2}/,
	  // 0 to 99
	  threeDigits: /^\d{1,3}/,
	  // 0 to 999
	  fourDigits: /^\d{1,4}/,
	  // 0 to 9999
	  anyDigitsSigned: /^-?\d+/,
	  singleDigitSigned: /^-?\d/,
	  // 0 to 9, -0 to -9
	  twoDigitsSigned: /^-?\d{1,2}/,
	  // 0 to 99, -0 to -99
	  threeDigitsSigned: /^-?\d{1,3}/,
	  // 0 to 999, -0 to -999
	  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
	};

	var timezonePatterns = {
	  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	  basic: /^([+-])(\d{2})(\d{2})|Z/,
	  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	  extended: /^([+-])(\d{2}):(\d{2})|Z/,
	  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
	};
	function parseNumericPattern(pattern, string, valueCallback) {
	  var matchResult = string.match(pattern);
	  if (!matchResult) {
	    return null;
	  }
	  var value = parseInt(matchResult[0], 10);
	  return {
	    value: valueCallback ? valueCallback(value) : value,
	    rest: string.slice(matchResult[0].length)
	  };
	}
	function parseTimezonePattern(pattern, string) {
	  var matchResult = string.match(pattern);
	  if (!matchResult) {
	    return null;
	  } // Input is 'Z'

	  if (matchResult[0] === 'Z') {
	    return {
	      value: 0,
	      rest: string.slice(1)
	    };
	  }
	  var sign = matchResult[1] === '+' ? 1 : -1;
	  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
	  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
	  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
	  return {
	    value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
	    rest: string.slice(matchResult[0].length)
	  };
	}
	function parseAnyDigitsSigned(string, valueCallback) {
	  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
	}
	function parseNDigits(n, string, valueCallback) {
	  switch (n) {
	    case 1:
	      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);
	    case 2:
	      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);
	    case 3:
	      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);
	    case 4:
	      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);
	    default:
	      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
	  }
	}
	function parseNDigitsSigned(n, string, valueCallback) {
	  switch (n) {
	    case 1:
	      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);
	    case 2:
	      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);
	    case 3:
	      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);
	    case 4:
	      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);
	    default:
	      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
	  }
	}
	function dayPeriodEnumToHours(enumValue) {
	  switch (enumValue) {
	    case 'morning':
	      return 4;
	    case 'evening':
	      return 17;
	    case 'pm':
	    case 'noon':
	    case 'afternoon':
	      return 12;
	    case 'am':
	    case 'midnight':
	    case 'night':
	    default:
	      return 0;
	  }
	}
	function normalizeTwoDigitYear(twoDigitYear, currentYear) {
	  var isCommonEra = currentYear > 0; // Absolute number of the current year:
	  // 1 -> 1 AC
	  // 0 -> 1 BC
	  // -1 -> 2 BC

	  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
	  var result;
	  if (absCurrentYear <= 50) {
	    result = twoDigitYear || 100;
	  } else {
	    var rangeEnd = absCurrentYear + 50;
	    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
	    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
	    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
	  }
	  return isCommonEra ? result : 1 - result;
	}
	var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

	function isLeapYearIndex(year) {
	  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
	}
	/*
	 * |     | Unit                           |     | Unit                           |
	 * |-----|--------------------------------|-----|--------------------------------|
	 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
	 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
	 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
	 * |  d  | Day of month                   |  D  | Day of year                    |
	 * |  e  | Local day of week              |  E  | Day of week                    |
	 * |  f  |                                |  F* | Day of week in month           |
	 * |  g* | Modified Julian day            |  G  | Era                            |
	 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
	 * |  i! | ISO day of week                |  I! | ISO week of year               |
	 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
	 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
	 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
	 * |  m  | Minute                         |  M  | Month                          |
	 * |  n  |                                |  N  |                                |
	 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
	 * |  p  |                                |  P  |                                |
	 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
	 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
	 * |  s  | Second                         |  S  | Fraction of second             |
	 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
	 * |  u  | Extended year                  |  U* | Cyclic year                    |
	 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
	 * |  w  | Local week of year             |  W* | Week of month                  |
	 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
	 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
	 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
	 *
	 * Letters marked by * are not implemented but reserved by Unicode standard.
	 *
	 * Letters marked by ! are non-standard, but implemented by date-fns:
	 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
	 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
	 *   i.e. 7 for Sunday, 1 for Monday, etc.
	 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
	 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
	 *   `R` is supposed to be used in conjunction with `I` and `i`
	 *   for universal ISO week-numbering date, whereas
	 *   `Y` is supposed to be used in conjunction with `w` and `e`
	 *   for week-numbering date specific to the locale.
	 */

	var parsers = {
	  // Era
	  G: {
	    priority: 140,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        // AD, BC
	        case 'G':
	        case 'GG':
	        case 'GGG':
	          return match.era(string, {
	            width: 'abbreviated'
	          }) || match.era(string, {
	            width: 'narrow'
	          });
	        // A, B

	        case 'GGGGG':
	          return match.era(string, {
	            width: 'narrow'
	          });
	        // Anno Domini, Before Christ

	        case 'GGGG':
	        default:
	          return match.era(string, {
	            width: 'wide'
	          }) || match.era(string, {
	            width: 'abbreviated'
	          }) || match.era(string, {
	            width: 'narrow'
	          });
	      }
	    },
	    set: function (date, flags, value, _options) {
	      flags.era = value;
	      date.setUTCFullYear(value, 0, 1);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['R', 'u', 't', 'T']
	  },
	  // Year
	  y: {
	    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
	    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
	    // |----------|-------|----|-------|-------|-------|
	    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
	    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
	    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
	    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
	    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
	    priority: 130,
	    parse: function (string, token, match, _options) {
	      var valueCallback = function (year) {
	        return {
	          year: year,
	          isTwoDigitYear: token === 'yy'
	        };
	      };
	      switch (token) {
	        case 'y':
	          return parseNDigits(4, string, valueCallback);
	        case 'yo':
	          return match.ordinalNumber(string, {
	            unit: 'year',
	            valueCallback: valueCallback
	          });
	        default:
	          return parseNDigits(token.length, string, valueCallback);
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value.isTwoDigitYear || value.year > 0;
	    },
	    set: function (date, flags, value, _options) {
	      var currentYear = date.getUTCFullYear();
	      if (value.isTwoDigitYear) {
	        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
	        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
	        date.setUTCHours(0, 0, 0, 0);
	        return date;
	      }
	      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
	      date.setUTCFullYear(year, 0, 1);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
	  },
	  // Local week-numbering year
	  Y: {
	    priority: 130,
	    parse: function (string, token, match, _options) {
	      var valueCallback = function (year) {
	        return {
	          year: year,
	          isTwoDigitYear: token === 'YY'
	        };
	      };
	      switch (token) {
	        case 'Y':
	          return parseNDigits(4, string, valueCallback);
	        case 'Yo':
	          return match.ordinalNumber(string, {
	            unit: 'year',
	            valueCallback: valueCallback
	          });
	        default:
	          return parseNDigits(token.length, string, valueCallback);
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value.isTwoDigitYear || value.year > 0;
	    },
	    set: function (date, flags, value, options) {
	      var currentYear = getUTCWeekYear(date, options);
	      if (value.isTwoDigitYear) {
	        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
	        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
	        date.setUTCHours(0, 0, 0, 0);
	        return startOfUTCWeek(date, options);
	      }
	      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
	      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
	      date.setUTCHours(0, 0, 0, 0);
	      return startOfUTCWeek(date, options);
	    },
	    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
	  },
	  // ISO week-numbering year
	  R: {
	    priority: 130,
	    parse: function (string, token, _match, _options) {
	      if (token === 'R') {
	        return parseNDigitsSigned(4, string);
	      }
	      return parseNDigitsSigned(token.length, string);
	    },
	    set: function (_date, _flags, value, _options) {
	      var firstWeekOfYear = new Date(0);
	      firstWeekOfYear.setUTCFullYear(value, 0, 4);
	      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
	      return startOfUTCISOWeek(firstWeekOfYear);
	    },
	    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
	  },
	  // Extended year
	  u: {
	    priority: 130,
	    parse: function (string, token, _match, _options) {
	      if (token === 'u') {
	        return parseNDigitsSigned(4, string);
	      }
	      return parseNDigitsSigned(token.length, string);
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCFullYear(value, 0, 1);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
	  },
	  // Quarter
	  Q: {
	    priority: 120,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        // 1, 2, 3, 4
	        case 'Q':
	        case 'QQ':
	          // 01, 02, 03, 04
	          return parseNDigits(token.length, string);
	        // 1st, 2nd, 3rd, 4th

	        case 'Qo':
	          return match.ordinalNumber(string, {
	            unit: 'quarter'
	          });
	        // Q1, Q2, Q3, Q4

	        case 'QQQ':
	          return match.quarter(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.quarter(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

	        case 'QQQQQ':
	          return match.quarter(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        // 1st quarter, 2nd quarter, ...

	        case 'QQQQ':
	        default:
	          return match.quarter(string, {
	            width: 'wide',
	            context: 'formatting'
	          }) || match.quarter(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.quarter(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 1 && value <= 4;
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCMonth((value - 1) * 3, 1);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
	  },
	  // Stand-alone quarter
	  q: {
	    priority: 120,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        // 1, 2, 3, 4
	        case 'q':
	        case 'qq':
	          // 01, 02, 03, 04
	          return parseNDigits(token.length, string);
	        // 1st, 2nd, 3rd, 4th

	        case 'qo':
	          return match.ordinalNumber(string, {
	            unit: 'quarter'
	          });
	        // Q1, Q2, Q3, Q4

	        case 'qqq':
	          return match.quarter(string, {
	            width: 'abbreviated',
	            context: 'standalone'
	          }) || match.quarter(string, {
	            width: 'narrow',
	            context: 'standalone'
	          });
	        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

	        case 'qqqqq':
	          return match.quarter(string, {
	            width: 'narrow',
	            context: 'standalone'
	          });
	        // 1st quarter, 2nd quarter, ...

	        case 'qqqq':
	        default:
	          return match.quarter(string, {
	            width: 'wide',
	            context: 'standalone'
	          }) || match.quarter(string, {
	            width: 'abbreviated',
	            context: 'standalone'
	          }) || match.quarter(string, {
	            width: 'narrow',
	            context: 'standalone'
	          });
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 1 && value <= 4;
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCMonth((value - 1) * 3, 1);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
	  },
	  // Month
	  M: {
	    priority: 110,
	    parse: function (string, token, match, _options) {
	      var valueCallback = function (value) {
	        return value - 1;
	      };
	      switch (token) {
	        // 1, 2, ..., 12
	        case 'M':
	          return parseNumericPattern(numericPatterns.month, string, valueCallback);
	        // 01, 02, ..., 12

	        case 'MM':
	          return parseNDigits(2, string, valueCallback);
	        // 1st, 2nd, ..., 12th

	        case 'Mo':
	          return match.ordinalNumber(string, {
	            unit: 'month',
	            valueCallback: valueCallback
	          });
	        // Jan, Feb, ..., Dec

	        case 'MMM':
	          return match.month(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.month(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        // J, F, ..., D

	        case 'MMMMM':
	          return match.month(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        // January, February, ..., December

	        case 'MMMM':
	        default:
	          return match.month(string, {
	            width: 'wide',
	            context: 'formatting'
	          }) || match.month(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.month(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 0 && value <= 11;
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCMonth(value, 1);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
	  },
	  // Stand-alone month
	  L: {
	    priority: 110,
	    parse: function (string, token, match, _options) {
	      var valueCallback = function (value) {
	        return value - 1;
	      };
	      switch (token) {
	        // 1, 2, ..., 12
	        case 'L':
	          return parseNumericPattern(numericPatterns.month, string, valueCallback);
	        // 01, 02, ..., 12

	        case 'LL':
	          return parseNDigits(2, string, valueCallback);
	        // 1st, 2nd, ..., 12th

	        case 'Lo':
	          return match.ordinalNumber(string, {
	            unit: 'month',
	            valueCallback: valueCallback
	          });
	        // Jan, Feb, ..., Dec

	        case 'LLL':
	          return match.month(string, {
	            width: 'abbreviated',
	            context: 'standalone'
	          }) || match.month(string, {
	            width: 'narrow',
	            context: 'standalone'
	          });
	        // J, F, ..., D

	        case 'LLLLL':
	          return match.month(string, {
	            width: 'narrow',
	            context: 'standalone'
	          });
	        // January, February, ..., December

	        case 'LLLL':
	        default:
	          return match.month(string, {
	            width: 'wide',
	            context: 'standalone'
	          }) || match.month(string, {
	            width: 'abbreviated',
	            context: 'standalone'
	          }) || match.month(string, {
	            width: 'narrow',
	            context: 'standalone'
	          });
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 0 && value <= 11;
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCMonth(value, 1);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
	  },
	  // Local week of year
	  w: {
	    priority: 100,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 'w':
	          return parseNumericPattern(numericPatterns.week, string);
	        case 'wo':
	          return match.ordinalNumber(string, {
	            unit: 'week'
	          });
	        default:
	          return parseNDigits(token.length, string);
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 1 && value <= 53;
	    },
	    set: function (date, _flags, value, options) {
	      return startOfUTCWeek(setUTCWeek(date, value, options), options);
	    },
	    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
	  },
	  // ISO week of year
	  I: {
	    priority: 100,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 'I':
	          return parseNumericPattern(numericPatterns.week, string);
	        case 'Io':
	          return match.ordinalNumber(string, {
	            unit: 'week'
	          });
	        default:
	          return parseNDigits(token.length, string);
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 1 && value <= 53;
	    },
	    set: function (date, _flags, value, options) {
	      return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options);
	    },
	    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
	  },
	  // Day of the month
	  d: {
	    priority: 90,
	    subPriority: 1,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 'd':
	          return parseNumericPattern(numericPatterns.date, string);
	        case 'do':
	          return match.ordinalNumber(string, {
	            unit: 'date'
	          });
	        default:
	          return parseNDigits(token.length, string);
	      }
	    },
	    validate: function (date, value, _options) {
	      var year = date.getUTCFullYear();
	      var isLeapYear = isLeapYearIndex(year);
	      var month = date.getUTCMonth();
	      if (isLeapYear) {
	        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
	      } else {
	        return value >= 1 && value <= DAYS_IN_MONTH[month];
	      }
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCDate(value);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
	  },
	  // Day of year
	  D: {
	    priority: 90,
	    subPriority: 1,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 'D':
	        case 'DD':
	          return parseNumericPattern(numericPatterns.dayOfYear, string);
	        case 'Do':
	          return match.ordinalNumber(string, {
	            unit: 'date'
	          });
	        default:
	          return parseNDigits(token.length, string);
	      }
	    },
	    validate: function (date, value, _options) {
	      var year = date.getUTCFullYear();
	      var isLeapYear = isLeapYearIndex(year);
	      if (isLeapYear) {
	        return value >= 1 && value <= 366;
	      } else {
	        return value >= 1 && value <= 365;
	      }
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCMonth(0, value);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
	  },
	  // Day of week
	  E: {
	    priority: 90,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        // Tue
	        case 'E':
	        case 'EE':
	        case 'EEE':
	          return match.day(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.day(string, {
	            width: 'short',
	            context: 'formatting'
	          }) || match.day(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        // T

	        case 'EEEEE':
	          return match.day(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        // Tu

	        case 'EEEEEE':
	          return match.day(string, {
	            width: 'short',
	            context: 'formatting'
	          }) || match.day(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        // Tuesday

	        case 'EEEE':
	        default:
	          return match.day(string, {
	            width: 'wide',
	            context: 'formatting'
	          }) || match.day(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.day(string, {
	            width: 'short',
	            context: 'formatting'
	          }) || match.day(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 0 && value <= 6;
	    },
	    set: function (date, _flags, value, options) {
	      date = setUTCDay(date, value, options);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
	  },
	  // Local day of week
	  e: {
	    priority: 90,
	    parse: function (string, token, match, options) {
	      var valueCallback = function (value) {
	        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
	        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
	      };
	      switch (token) {
	        // 3
	        case 'e':
	        case 'ee':
	          // 03
	          return parseNDigits(token.length, string, valueCallback);
	        // 3rd

	        case 'eo':
	          return match.ordinalNumber(string, {
	            unit: 'day',
	            valueCallback: valueCallback
	          });
	        // Tue

	        case 'eee':
	          return match.day(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.day(string, {
	            width: 'short',
	            context: 'formatting'
	          }) || match.day(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        // T

	        case 'eeeee':
	          return match.day(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        // Tu

	        case 'eeeeee':
	          return match.day(string, {
	            width: 'short',
	            context: 'formatting'
	          }) || match.day(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        // Tuesday

	        case 'eeee':
	        default:
	          return match.day(string, {
	            width: 'wide',
	            context: 'formatting'
	          }) || match.day(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.day(string, {
	            width: 'short',
	            context: 'formatting'
	          }) || match.day(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 0 && value <= 6;
	    },
	    set: function (date, _flags, value, options) {
	      date = setUTCDay(date, value, options);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
	  },
	  // Stand-alone local day of week
	  c: {
	    priority: 90,
	    parse: function (string, token, match, options) {
	      var valueCallback = function (value) {
	        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
	        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
	      };
	      switch (token) {
	        // 3
	        case 'c':
	        case 'cc':
	          // 03
	          return parseNDigits(token.length, string, valueCallback);
	        // 3rd

	        case 'co':
	          return match.ordinalNumber(string, {
	            unit: 'day',
	            valueCallback: valueCallback
	          });
	        // Tue

	        case 'ccc':
	          return match.day(string, {
	            width: 'abbreviated',
	            context: 'standalone'
	          }) || match.day(string, {
	            width: 'short',
	            context: 'standalone'
	          }) || match.day(string, {
	            width: 'narrow',
	            context: 'standalone'
	          });
	        // T

	        case 'ccccc':
	          return match.day(string, {
	            width: 'narrow',
	            context: 'standalone'
	          });
	        // Tu

	        case 'cccccc':
	          return match.day(string, {
	            width: 'short',
	            context: 'standalone'
	          }) || match.day(string, {
	            width: 'narrow',
	            context: 'standalone'
	          });
	        // Tuesday

	        case 'cccc':
	        default:
	          return match.day(string, {
	            width: 'wide',
	            context: 'standalone'
	          }) || match.day(string, {
	            width: 'abbreviated',
	            context: 'standalone'
	          }) || match.day(string, {
	            width: 'short',
	            context: 'standalone'
	          }) || match.day(string, {
	            width: 'narrow',
	            context: 'standalone'
	          });
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 0 && value <= 6;
	    },
	    set: function (date, _flags, value, options) {
	      date = setUTCDay(date, value, options);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
	  },
	  // ISO day of week
	  i: {
	    priority: 90,
	    parse: function (string, token, match, _options) {
	      var valueCallback = function (value) {
	        if (value === 0) {
	          return 7;
	        }
	        return value;
	      };
	      switch (token) {
	        // 2
	        case 'i':
	        case 'ii':
	          // 02
	          return parseNDigits(token.length, string);
	        // 2nd

	        case 'io':
	          return match.ordinalNumber(string, {
	            unit: 'day'
	          });
	        // Tue

	        case 'iii':
	          return match.day(string, {
	            width: 'abbreviated',
	            context: 'formatting',
	            valueCallback: valueCallback
	          }) || match.day(string, {
	            width: 'short',
	            context: 'formatting',
	            valueCallback: valueCallback
	          }) || match.day(string, {
	            width: 'narrow',
	            context: 'formatting',
	            valueCallback: valueCallback
	          });
	        // T

	        case 'iiiii':
	          return match.day(string, {
	            width: 'narrow',
	            context: 'formatting',
	            valueCallback: valueCallback
	          });
	        // Tu

	        case 'iiiiii':
	          return match.day(string, {
	            width: 'short',
	            context: 'formatting',
	            valueCallback: valueCallback
	          }) || match.day(string, {
	            width: 'narrow',
	            context: 'formatting',
	            valueCallback: valueCallback
	          });
	        // Tuesday

	        case 'iiii':
	        default:
	          return match.day(string, {
	            width: 'wide',
	            context: 'formatting',
	            valueCallback: valueCallback
	          }) || match.day(string, {
	            width: 'abbreviated',
	            context: 'formatting',
	            valueCallback: valueCallback
	          }) || match.day(string, {
	            width: 'short',
	            context: 'formatting',
	            valueCallback: valueCallback
	          }) || match.day(string, {
	            width: 'narrow',
	            context: 'formatting',
	            valueCallback: valueCallback
	          });
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 1 && value <= 7;
	    },
	    set: function (date, _flags, value, options) {
	      date = setUTCISODay(date, value, options);
	      date.setUTCHours(0, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
	  },
	  // AM or PM
	  a: {
	    priority: 80,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 'a':
	        case 'aa':
	        case 'aaa':
	          return match.dayPeriod(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.dayPeriod(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        case 'aaaaa':
	          return match.dayPeriod(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        case 'aaaa':
	        default:
	          return match.dayPeriod(string, {
	            width: 'wide',
	            context: 'formatting'
	          }) || match.dayPeriod(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.dayPeriod(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	      }
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T']
	  },
	  // AM, PM, midnight
	  b: {
	    priority: 80,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 'b':
	        case 'bb':
	        case 'bbb':
	          return match.dayPeriod(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.dayPeriod(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        case 'bbbbb':
	          return match.dayPeriod(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        case 'bbbb':
	        default:
	          return match.dayPeriod(string, {
	            width: 'wide',
	            context: 'formatting'
	          }) || match.dayPeriod(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.dayPeriod(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	      }
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T']
	  },
	  // in the morning, in the afternoon, in the evening, at night
	  B: {
	    priority: 80,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 'B':
	        case 'BB':
	        case 'BBB':
	          return match.dayPeriod(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.dayPeriod(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        case 'BBBBB':
	          return match.dayPeriod(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	        case 'BBBB':
	        default:
	          return match.dayPeriod(string, {
	            width: 'wide',
	            context: 'formatting'
	          }) || match.dayPeriod(string, {
	            width: 'abbreviated',
	            context: 'formatting'
	          }) || match.dayPeriod(string, {
	            width: 'narrow',
	            context: 'formatting'
	          });
	      }
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['a', 'b', 't', 'T']
	  },
	  // Hour [1-12]
	  h: {
	    priority: 70,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 'h':
	          return parseNumericPattern(numericPatterns.hour12h, string);
	        case 'ho':
	          return match.ordinalNumber(string, {
	            unit: 'hour'
	          });
	        default:
	          return parseNDigits(token.length, string);
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 1 && value <= 12;
	    },
	    set: function (date, _flags, value, _options) {
	      var isPM = date.getUTCHours() >= 12;
	      if (isPM && value < 12) {
	        date.setUTCHours(value + 12, 0, 0, 0);
	      } else if (!isPM && value === 12) {
	        date.setUTCHours(0, 0, 0, 0);
	      } else {
	        date.setUTCHours(value, 0, 0, 0);
	      }
	      return date;
	    },
	    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
	  },
	  // Hour [0-23]
	  H: {
	    priority: 70,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 'H':
	          return parseNumericPattern(numericPatterns.hour23h, string);
	        case 'Ho':
	          return match.ordinalNumber(string, {
	            unit: 'hour'
	          });
	        default:
	          return parseNDigits(token.length, string);
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 0 && value <= 23;
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCHours(value, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
	  },
	  // Hour [0-11]
	  K: {
	    priority: 70,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 'K':
	          return parseNumericPattern(numericPatterns.hour11h, string);
	        case 'Ko':
	          return match.ordinalNumber(string, {
	            unit: 'hour'
	          });
	        default:
	          return parseNDigits(token.length, string);
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 0 && value <= 11;
	    },
	    set: function (date, _flags, value, _options) {
	      var isPM = date.getUTCHours() >= 12;
	      if (isPM && value < 12) {
	        date.setUTCHours(value + 12, 0, 0, 0);
	      } else {
	        date.setUTCHours(value, 0, 0, 0);
	      }
	      return date;
	    },
	    incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T']
	  },
	  // Hour [1-24]
	  k: {
	    priority: 70,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 'k':
	          return parseNumericPattern(numericPatterns.hour24h, string);
	        case 'ko':
	          return match.ordinalNumber(string, {
	            unit: 'hour'
	          });
	        default:
	          return parseNDigits(token.length, string);
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 1 && value <= 24;
	    },
	    set: function (date, _flags, value, _options) {
	      var hours = value <= 24 ? value % 24 : value;
	      date.setUTCHours(hours, 0, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
	  },
	  // Minute
	  m: {
	    priority: 60,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 'm':
	          return parseNumericPattern(numericPatterns.minute, string);
	        case 'mo':
	          return match.ordinalNumber(string, {
	            unit: 'minute'
	          });
	        default:
	          return parseNDigits(token.length, string);
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 0 && value <= 59;
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCMinutes(value, 0, 0);
	      return date;
	    },
	    incompatibleTokens: ['t', 'T']
	  },
	  // Second
	  s: {
	    priority: 50,
	    parse: function (string, token, match, _options) {
	      switch (token) {
	        case 's':
	          return parseNumericPattern(numericPatterns.second, string);
	        case 'so':
	          return match.ordinalNumber(string, {
	            unit: 'second'
	          });
	        default:
	          return parseNDigits(token.length, string);
	      }
	    },
	    validate: function (_date, value, _options) {
	      return value >= 0 && value <= 59;
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCSeconds(value, 0);
	      return date;
	    },
	    incompatibleTokens: ['t', 'T']
	  },
	  // Fraction of second
	  S: {
	    priority: 30,
	    parse: function (string, token, _match, _options) {
	      var valueCallback = function (value) {
	        return Math.floor(value * Math.pow(10, -token.length + 3));
	      };
	      return parseNDigits(token.length, string, valueCallback);
	    },
	    set: function (date, _flags, value, _options) {
	      date.setUTCMilliseconds(value);
	      return date;
	    },
	    incompatibleTokens: ['t', 'T']
	  },
	  // Timezone (ISO-8601. +00:00 is `'Z'`)
	  X: {
	    priority: 10,
	    parse: function (string, token, _match, _options) {
	      switch (token) {
	        case 'X':
	          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);
	        case 'XX':
	          return parseTimezonePattern(timezonePatterns.basic, string);
	        case 'XXXX':
	          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);
	        case 'XXXXX':
	          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);
	        case 'XXX':
	        default:
	          return parseTimezonePattern(timezonePatterns.extended, string);
	      }
	    },
	    set: function (date, flags, value, _options) {
	      if (flags.timestampIsSet) {
	        return date;
	      }
	      return new Date(date.getTime() - value);
	    },
	    incompatibleTokens: ['t', 'T', 'x']
	  },
	  // Timezone (ISO-8601)
	  x: {
	    priority: 10,
	    parse: function (string, token, _match, _options) {
	      switch (token) {
	        case 'x':
	          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);
	        case 'xx':
	          return parseTimezonePattern(timezonePatterns.basic, string);
	        case 'xxxx':
	          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);
	        case 'xxxxx':
	          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);
	        case 'xxx':
	        default:
	          return parseTimezonePattern(timezonePatterns.extended, string);
	      }
	    },
	    set: function (date, flags, value, _options) {
	      if (flags.timestampIsSet) {
	        return date;
	      }
	      return new Date(date.getTime() - value);
	    },
	    incompatibleTokens: ['t', 'T', 'X']
	  },
	  // Seconds timestamp
	  t: {
	    priority: 40,
	    parse: function (string, _token, _match, _options) {
	      return parseAnyDigitsSigned(string);
	    },
	    set: function (_date, _flags, value, _options) {
	      return [new Date(value * 1000), {
	        timestampIsSet: true
	      }];
	    },
	    incompatibleTokens: '*'
	  },
	  // Milliseconds timestamp
	  T: {
	    priority: 20,
	    parse: function (string, _token, _match, _options) {
	      return parseAnyDigitsSigned(string);
	    },
	    set: function (_date, _flags, value, _options) {
	      return [new Date(value), {
	        timestampIsSet: true
	      }];
	    },
	    incompatibleTokens: '*'
	  }
	};

	var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
	// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
	//   (one of the certain letters followed by `o`)
	// - (\w)\1* matches any sequences of the same letter
	// - '' matches two quote characters in a row
	// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
	//   except a single quote symbol, which ends the sequence.
	//   Two quote characters do not end the sequence.
	//   If there is no matching single quote
	//   then the sequence will continue until the end of the string.
	// - . matches any single character unmatched by previous parts of the RegExps

	var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
	// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

	var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
	var escapedStringRegExp = /^'([^]*?)'?$/;
	var doubleQuoteRegExp = /''/g;
	var notWhitespaceRegExp = /\S/;
	var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
	/**
	 * @name parse
	 * @category Common Helpers
	 * @summary Parse the date.
	 *
	 * @description
	 * Return the date parsed from string using the given format string.
	 *
	 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
	 * > See: https://git.io/fxCyr
	 *
	 * The characters in the format string wrapped between two single quotes characters (') are escaped.
	 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
	 *
	 * Format of the format string is based on Unicode Technical Standard #35:
	 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
	 * with a few additions (see note 5 below the table).
	 *
	 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
	 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
	 *
	 * ```javascript
	 * parse('23 AM', 'HH a', new Date())
	 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
	 * ```
	 *
	 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
	 *
	 * Accepted format string patterns:
	 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
	 * |---------------------------------|-----|---------|-----------------------------------|-------|
	 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
	 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
	 * |                                 |     | GGGGG   | A, B                              |       |
	 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
	 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
	 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
	 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
	 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
	 * |                                 |     | yyyyy   | ...                               | 2,4   |
	 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
	 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
	 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
	 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
	 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
	 * |                                 |     | YYYYY   | ...                               | 2,4   |
	 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
	 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
	 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
	 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
	 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
	 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
	 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
	 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
	 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
	 * |                                 |     | uuuuu   | ...                               | 2,4   |
	 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
	 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
	 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
	 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
	 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
	 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
	 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
	 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
	 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
	 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
	 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
	 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
	 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
	 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
	 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
	 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
	 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
	 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
	 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
	 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
	 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
	 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
	 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
	 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
	 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
	 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
	 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
	 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
	 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
	 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
	 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
	 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
	 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
	 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
	 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
	 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
	 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
	 * |                                 |     | DDDD    | ...                               | 2     |
	 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
	 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
	 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
	 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
	 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
	 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
	 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
	 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
	 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
	 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
	 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
	 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
	 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
	 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
	 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
	 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
	 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
	 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
	 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
	 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
	 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
	 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
	 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
	 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
	 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
	 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
	 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
	 * |                                 |     | aaaaa   | a, p                              |       |
	 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
	 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
	 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
	 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
	 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
	 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
	 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
	 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
	 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
	 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
	 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
	 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
	 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
	 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
	 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
	 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
	 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
	 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
	 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
	 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
	 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
	 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
	 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
	 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
	 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
	 * |                                 |     | tt      | ...                               | 2     |
	 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
	 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
	 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
	 * |                                 |     | SSSS    | ...                               | 2     |
	 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
	 * |                                 |     | TT      | ...                               | 2     |
	 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
	 * |                                 |     | XX      | -0800, +0530, Z                   |       |
	 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
	 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
	 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
	 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
	 * |                                 |     | xx      | -0800, +0530, +0000               |       |
	 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
	 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
	 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
	 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
	 * |                                 |     | PP      | May 29, 1453                      |       |
	 * |                                 |     | PPP     | May 29th, 1453                    |       |
	 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
	 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
	 * |                                 |     | pp      | 12:00:00 AM                       |       |
	 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
	 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
	 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
	 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
	 * Notes:
	 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
	 *    are the same as "stand-alone" units, but are different in some languages.
	 *    "Formatting" units are declined according to the rules of the language
	 *    in the context of a date. "Stand-alone" units are always nominative singular.
	 *    In `format` function, they will produce different result:
	 *
	 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
	 *
	 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
	 *
	 *    `parse` will try to match both formatting and stand-alone units interchangably.
	 *
	 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
	 *    the single quote characters (see below).
	 *    If the sequence is longer than listed in table:
	 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
	 *      as wide as the sequence
	 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
	 *      These variations are marked with "2" in the last column of the table.
	 *
	 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
	 *    These tokens represent the shortest form of the quarter.
	 *
	 * 4. The main difference between `y` and `u` patterns are B.C. years:
	 *
	 *    | Year | `y` | `u` |
	 *    |------|-----|-----|
	 *    | AC 1 |   1 |   1 |
	 *    | BC 1 |   1 |   0 |
	 *    | BC 2 |   2 |  -1 |
	 *
	 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
	 *
	 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
	 *
	 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
	 *
	 *    while `uu` will just assign the year as is:
	 *
	 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
	 *
	 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
	 *
	 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
	 *    except local week-numbering years are dependent on `options.weekStartsOn`
	 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
	 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
	 *
	 * 5. These patterns are not in the Unicode Technical Standard #35:
	 *    - `i`: ISO day of week
	 *    - `I`: ISO week of year
	 *    - `R`: ISO week-numbering year
	 *    - `o`: ordinal number modifier
	 *    - `P`: long localized date
	 *    - `p`: long localized time
	 *
	 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
	 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
	 *
	 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
	 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
	 *
	 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
	 *    on the given locale.
	 *
	 *    using `en-US` locale: `P` => `MM/dd/yyyy`
	 *    using `en-US` locale: `p` => `hh:mm a`
	 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
	 *    using `pt-BR` locale: `p` => `HH:mm`
	 *
	 * Values will be assigned to the date in the descending order of its unit's priority.
	 * Units of an equal priority overwrite each other in the order of appearance.
	 *
	 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
	 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
	 *
	 * `referenceDate` must be passed for correct work of the function.
	 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
	 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
	 * In this case parsing will be done in the context of the current date.
	 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
	 * then `Invalid Date` will be returned.
	 *
	 * The result may vary by locale.
	 *
	 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
	 *
	 * If parsing failed, `Invalid Date` will be returned.
	 * Invalid Date is a Date, whose time value is NaN.
	 * Time value of Date: http://es5.github.io/#x15.9.1.1
	 *
	 * ### v2.0.0 breaking changes:
	 *
	 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
	 *
	 * - Old `parse` was renamed to `toDate`.
	 *   Now `parse` is a new function which parses a string using a provided format.
	 *
	 *   ```javascript
	 *   // Before v2.0.0
	 *   parse('2016-01-01')
	 *
	 *   // v2.0.0 onward
	 *   toDate('2016-01-01')
	 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
	 *   ```
	 *
	 * @param {String} dateString - the string to parse
	 * @param {String} formatString - the string of tokens
	 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
	 * @param {Object} [options] - an object with options.
	 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
	 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
	 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
	 *   see: https://git.io/fxCyr
	 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
	 *   see: https://git.io/fxCyr
	 * @returns {Date} the parsed date
	 * @throws {TypeError} 3 arguments required
	 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
	 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
	 * @throws {RangeError} `options.locale` must contain `match` property
	 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
	 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
	 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
	 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
	 * @throws {RangeError} format string contains an unescaped latin alphabet character
	 *
	 * @example
	 * // Parse 11 February 2014 from middle-endian format:
	 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
	 * //=> Tue Feb 11 2014 00:00:00
	 *
	 * @example
	 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
	 * import eo from 'date-fns/locale/eo'
	 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
	 *   locale: eo
	 * })
	 * //=> Sun Feb 28 2010 00:00:00
	 */

	function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
	  requiredArgs(3, arguments);
	  var dateString = String(dirtyDateString);
	  var formatString = String(dirtyFormatString);
	  var options = {};
	  var locale$1 = options.locale || locale;
	  if (!locale$1.match) {
	    throw new RangeError('locale must contain match property');
	  }
	  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
	  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
	  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

	  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
	    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
	  }
	  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
	  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
	  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

	  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
	    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
	  }
	  if (formatString === '') {
	    if (dateString === '') {
	      return toDate(dirtyReferenceDate);
	    } else {
	      return new Date(NaN);
	    }
	  }
	  var subFnOptions = {
	    firstWeekContainsDate: firstWeekContainsDate,
	    weekStartsOn: weekStartsOn,
	    locale: locale$1 // If timezone isn't specified, it will be set to the system timezone
	  };

	  var setters = [{
	    priority: TIMEZONE_UNIT_PRIORITY,
	    subPriority: -1,
	    set: dateToSystemTimezone,
	    index: 0
	  }];
	  var i;
	  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
	    var firstCharacter = substring[0];
	    if (firstCharacter === 'p' || firstCharacter === 'P') {
	      var longFormatter = longFormatters[firstCharacter];
	      return longFormatter(substring, locale$1.formatLong, subFnOptions);
	    }
	    return substring;
	  }).join('').match(formattingTokensRegExp);
	  var usedTokens = [];
	  for (i = 0; i < tokens.length; i++) {
	    var token = tokens[i];
	    if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
	      throwProtectedError(token, formatString, dirtyDateString);
	    }
	    if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
	      throwProtectedError(token, formatString, dirtyDateString);
	    }
	    var firstCharacter = token[0];
	    var parser = parsers[firstCharacter];
	    if (parser) {
	      var incompatibleTokens = parser.incompatibleTokens;
	      if (Array.isArray(incompatibleTokens)) {
	        var incompatibleToken = void 0;
	        for (var _i = 0; _i < usedTokens.length; _i++) {
	          var usedToken = usedTokens[_i].token;
	          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
	            incompatibleToken = usedTokens[_i];
	            break;
	          }
	        }
	        if (incompatibleToken) {
	          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
	        }
	      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
	        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
	      }
	      usedTokens.push({
	        token: firstCharacter,
	        fullToken: token
	      });
	      var parseResult = parser.parse(dateString, token, locale$1.match, subFnOptions);
	      if (!parseResult) {
	        return new Date(NaN);
	      }
	      setters.push({
	        priority: parser.priority,
	        subPriority: parser.subPriority || 0,
	        set: parser.set,
	        validate: parser.validate,
	        value: parseResult.value,
	        index: setters.length
	      });
	      dateString = parseResult.rest;
	    } else {
	      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
	        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
	      } // Replace two single quote characters with one single quote character

	      if (token === "''") {
	        token = "'";
	      } else if (firstCharacter === "'") {
	        token = cleanEscapedString(token);
	      } // Cut token from string, or, if string doesn't match the token, return Invalid Date

	      if (dateString.indexOf(token) === 0) {
	        dateString = dateString.slice(token.length);
	      } else {
	        return new Date(NaN);
	      }
	    }
	  } // Check if the remaining input contains something other than whitespace

	  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
	    return new Date(NaN);
	  }
	  var uniquePrioritySetters = setters.map(function (setter) {
	    return setter.priority;
	  }).sort(function (a, b) {
	    return b - a;
	  }).filter(function (priority, index, array) {
	    return array.indexOf(priority) === index;
	  }).map(function (priority) {
	    return setters.filter(function (setter) {
	      return setter.priority === priority;
	    }).sort(function (a, b) {
	      return b.subPriority - a.subPriority;
	    });
	  }).map(function (setterArray) {
	    return setterArray[0];
	  });
	  var date = toDate(dirtyReferenceDate);
	  if (isNaN(date)) {
	    return new Date(NaN);
	  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
	  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
	  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37

	  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
	  var flags = {};
	  for (i = 0; i < uniquePrioritySetters.length; i++) {
	    var setter = uniquePrioritySetters[i];
	    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
	      return new Date(NaN);
	    }
	    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

	    if (result[0]) {
	      utcDate = result[0];
	      assign(flags, result[1]); // Result is date
	    } else {
	      utcDate = result;
	    }
	  }
	  return utcDate;
	}
	function dateToSystemTimezone(date, flags) {
	  if (flags.timestampIsSet) {
	    return date;
	  }
	  var convertedDate = new Date(0);
	  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
	  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
	  return convertedDate;
	}
	function cleanEscapedString(input) {
	  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
	}

	/**
	 * @name max
	 * @category Common Helpers
	 * @summary Return the latest of the given dates.
	 *
	 * @description
	 * Return the latest of the given dates.
	 *
	 * ### v2.0.0 breaking changes:
	 *
	 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
	 *
	 * - `max` function now accepts an array of dates rather than spread arguments.
	 *
	 *   ```javascript
	 *   // Before v2.0.0
	 *   var date1 = new Date(1989, 6, 10)
	 *   var date2 = new Date(1987, 1, 11)
	 *   var maxDate = max(date1, date2)
	 *
	 *   // v2.0.0 onward:
	 *   var dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
	 *   var maxDate = max(dates)
	 *   ```
	 *
	 * @param {Date[]|Number[]} datesArray - the dates to compare
	 * @returns {Date} the latest of the dates
	 * @throws {TypeError} 1 argument required
	 *
	 * @example
	 * // Which of these dates is the latest?
	 * var result = max([
	 *   new Date(1989, 6, 10),
	 *   new Date(1987, 1, 11),
	 *   new Date(1995, 6, 2),
	 *   new Date(1990, 0, 1)
	 * ])
	 * //=> Sun Jul 02 1995 00:00:00
	 */

	function max(dirtyDatesArray) {
	  requiredArgs(1, arguments);
	  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

	  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
	    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
	  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
	    datesArray = Array.prototype.slice.call(dirtyDatesArray);
	  } else {
	    // `dirtyDatesArray` is non-iterable, return Invalid Date
	    return new Date(NaN);
	  }
	  var result;
	  datesArray.forEach(function (dirtyDate) {
	    var currentDate = toDate(dirtyDate);
	    if (result === undefined || result < currentDate || isNaN(currentDate)) {
	      result = currentDate;
	    }
	  });
	  return result || new Date(NaN);
	}

	/**
	 * @name subYears
	 * @category Year Helpers
	 * @summary Subtract the specified number of years from the given date.
	 *
	 * @description
	 * Subtract the specified number of years from the given date.
	 *
	 * ### v2.0.0 breaking changes:
	 *
	 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
	 *
	 * @param {Date|Number} date - the date to be changed
	 * @param {Number} amount - the amount of years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
	 * @returns {Date} the new date with the years subtracted
	 * @throws {TypeError} 2 arguments required
	 *
	 * @example
	 * // Subtract 5 years from 1 September 2014:
	 * var result = subYears(new Date(2014, 8, 1), 5)
	 * //=> Tue Sep 01 2009 00:00:00
	 */

	function subYears(dirtyDate, dirtyAmount) {
	  requiredArgs(2, arguments);
	  var amount = toInteger(dirtyAmount);
	  return addYears(dirtyDate, -amount);
	}

	var i$2 = "RequiredIndicator-module_indicator__Pt7GX text-input_hds-text-input__required__2K-Bs";
	e$1("@keyframes text-input_fadeIn__2iVIH{0%{opacity:0}to{opacity:1}}.text-input_hds-text-input__2YbWJ{--border-width:2px;--outline-width:3px;--outline-offset-readonly:4px;--input-height:56px;--textarea-height:149px;--icon-size:var(--spacing-m);--icon-color:var(--color-black);--helper-color-default:var(--color-black-60);--helper-color-invalid:var(--color-black);--helper-background-color-invalid:var(--color-error-light);--helper-icon-color-invalid:var(--color-error);--helper-color-success:var(--color-black);--helper-background-color-success:var(--color-success-light);--helper-icon-color-success:var(--color-success);--helper-color-info:var(--color-black);--helper-background-color-info:var(--color-info-light);--helper-icon-color-info:var(--color-info);--input-background-default:var(--color-white);--input-background-disabled:var(--color-black-10);--input-border-color-default:var(--color-black-50);--input-border-color-hover:var(--color-black-90);--input-border-color-focus:var(--color-black-90);--input-border-color-invalid:var(--color-error);--input-border-color-disabled:var(--color-black-10);--input-border-color-success:var(--color-success);--input-color-default:var(--color-black-90);--input-color-disabled:var(--color-black-40);--label-color-default:var(--color-black-90);--label-color-invalid:var(--color-black-90);--placeholder-color:var(--color-black-60)}.text-input_hds-text-input__2YbWJ .text-input_hds-text-input__input__BIkQu{-webkit-appearance:none;background-color:var(--input-background-default);border:var(--border-width) solid var(--input-border-color-default);border-radius:0;box-sizing:border-box;color:var(--input-color-default);font-family:inherit;font-size:1.125em;height:var(--input-height);line-height:normal;margin:0;padding:0 var(--spacing-s);width:100%;will-change:transform,box-shadow}.text-input_hds-text-input__2YbWJ:not([data-hds-textinput-filled]) .text-input_hds-text-input__button-clear__wx6Bm,.text-input_hds-text-input__input-clear__1vpab::-webkit-search-cancel-button{display:none}.text-input_hds-text-input__2YbWJ .text-input_hds-text-input__button-clear__wx6Bm>*{pointer-events:none}.text-input_hds-text-input__2YbWJ .text-input_hds-text-input__input__BIkQu:hover{border-color:var(--input-border-color-hover);transition:border-color 85ms ease-out}.text-input_hds-text-input__input-wrapper__3qg76:focus-within .text-input_hds-text-input__input__BIkQu{border-color:var(--input-border-color-focus);outline:none}.text-input_hds-text-input__2YbWJ.text-input_hds-text-input--invalid__25oHc .text-input_hds-text-input__input__BIkQu{border-color:var(--input-border-color-invalid)}.text-input_hds-text-input__2YbWJ.text-input_hds-text-input--success__28-SV .text-input_hds-text-input__input__BIkQu{border-color:var(--input-border-color-success)}.text-input_hds-text-input__input-wrapper__3qg76:focus-within .text-input_hds-text-input__input__BIkQu:not([readonly]){box-shadow:0 0 0 var(--outline-width) var(--color-focus-outline);transform:translateZ(0);transition:85ms ease-out;transition-property:box-shadow,transform}.text-input_hds-text-input__label__15SYz{color:var(--label-color-default);display:block;font-size:var(--fontsize-body-m);font-weight:500;margin-bottom:var(--spacing-3-xs)}.text-input_hds-text-input--invalid__25oHc .text-input_hds-text-input__label__15SYz{color:var(--label-color-invalid);transition:color 85ms linear}.text-input_hds-text-input__required__2K-Bs{display:inline-block;font-size:var(--fontsize-body-xl);line-height:1;margin-left:var(--spacing-2-xs);transform:translateY(var(--spacing-3-xs))}.text-input_hds-text-input__input-wrapper__3qg76{display:flex;position:relative}.text-input_hds-text-input__2YbWJ textarea.text-input_hds-text-input__input__BIkQu{font-family:inherit;height:var(--textarea-height);margin:0;min-height:var(--input-height);overflow:auto;padding:var(--spacing-s);resize:vertical}.text-input_hds-text-input__2YbWJ .text-input_hds-text-input__input__BIkQu::-ms-reveal{display:none}.text-input_hds-text-input__2YbWJ .text-input_hds-text-input__input__BIkQu::-moz-placeholder{color:var(--placeholder-color);opacity:1}.text-input_hds-text-input__2YbWJ .text-input_hds-text-input__input__BIkQu::placeholder{color:var(--placeholder-color);opacity:1}.text-input_hds-text-input__helper-text__gNPue{color:var(--helper-color-default);display:block;font-size:var(--fontsize-body-m);line-height:var(--lineheight-l);margin-top:var(--spacing-3-xs);white-space:pre-line}.text-input_hds-text-input__error-text__2Qjmg{background-color:var(--helper-background-color-invalid);border-left:8px solid var(--color-error);color:var(--helper-color-invalid);display:flex;font-size:var(--fontsize-body-m);line-height:var(--lineheight-l);margin-top:var(--spacing-2-xs);padding:var(--spacing-2-xs);white-space:pre-line}.text-input_hds-text-input__error-text__2Qjmg:not(:last-child){margin-bottom:var(--spacing-2-xs)}.text-input_hds-text-input__error-text__2Qjmg:before{animation:text-input_fadeIn__2iVIH 85ms ease-out;background:var(--helper-icon-color-invalid);content:\"\";display:inline-block;flex-shrink:0;height:var(--icon-size);margin-right:var(--spacing-2-xs);-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.175 3.456c.349-.586 1.223-.607 1.61-.063l.04.063 9.052 15.21c.343.577-.072 1.285-.753 1.332l-.072.002H2.948c-.7 0-1.15-.689-.858-1.273l.033-.06 9.052-15.21zM13 16v2h-2v-2h2zm0-7.5v6h-2v-6h2z' fill='currentColor'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.175 3.456c.349-.586 1.223-.607 1.61-.063l.04.063 9.052 15.21c.343.577-.072 1.285-.753 1.332l-.072.002H2.948c-.7 0-1.15-.689-.858-1.273l.033-.06 9.052-15.21zM13 16v2h-2v-2h2zm0-7.5v6h-2v-6h2z' fill='currentColor'/%3E%3C/svg%3E\");pointer-events:none;width:var(--icon-size)}.text-input_hds-text-input__success-text__274NH{background-color:var(--helper-background-color-success);border-left:8px solid var(--color-success);color:var(--helper-color-success);display:flex;font-size:var(--fontsize-body-m);line-height:var(--lineheight-l);margin-top:var(--spacing-2-xs);padding:var(--spacing-2-xs);position:relative;white-space:pre-wrap}.text-input_hds-text-input__success-text__274NH:not(:last-child){margin-bottom:var(--spacing-2-xs)}.text-input_hds-text-input__success-text__274NH:before{animation:text-input_fadeIn__2iVIH 85ms ease-out;background:var(--helper-icon-color-success);content:\"\";display:inline-block;flex-shrink:0;height:var(--icon-size);margin-right:var(--spacing-2-xs);-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='currentColor' d='M12 3a9 9 0 100 18 9 9 0 000-18zm4.5 5L18 9.5 10.5 17 6 12.5 7.5 11l3 3 6-6z'/%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='currentColor' d='M12 3a9 9 0 100 18 9 9 0 000-18zm4.5 5L18 9.5 10.5 17 6 12.5 7.5 11l3 3 6-6z'/%3E%3C/g%3E%3C/svg%3E\");pointer-events:none;width:var(--icon-size)}.text-input_hds-text-input__info-text__1hF9o{background-color:var(--helper-background-color-info);border-left:8px solid var(--color-info);color:var(--helper-color-info);display:flex;font-size:var(--fontsize-body-m);line-height:var(--lineheight-l);margin-top:var(--spacing-2-xs);padding:var(--spacing-2-xs);position:relative}.text-input_hds-text-input__info-text__1hF9o:not(:last-child){margin-bottom:var(--spacing-2-xs)}.text-input_hds-text-input__info-text__1hF9o:before{animation:text-input_fadeIn__2iVIH 85ms ease-out;background:var(--helper-icon-color-info);content:\"\";display:inline-block;flex-shrink:0;height:var(--icon-size);margin-right:var(--spacing-2-xs);-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='currentColor' d='M12 3a9 9 0 110 18 9 9 0 010-18zm1 13v2h-2v-2h2zm0-10v8h-2V6h2z'/%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='currentColor' d='M12 3a9 9 0 110 18 9 9 0 010-18zm1 13v2h-2v-2h2zm0-10v8h-2V6h2z'/%3E%3C/g%3E%3C/svg%3E\");pointer-events:none;width:var(--icon-size)}.text-input_hds-text-input__2YbWJ .text-input_hds-text-input__input__BIkQu[disabled]{background-color:var(--input-background-disabled);border-color:var(--input-border-color-disabled);color:var(--input-color-disabled);cursor:not-allowed}.text-input_hds-text-input__2YbWJ .text-input_hds-text-input__input__BIkQu[readonly]{background-color:transparent;border:0;color:var(--input-color-default);outline-offset:var(--outline-offset-readonly);padding:0;-webkit-text-fill-color:var(--input-color-default);transform:translateZ(0);transition:85ms ease-out;transition-property:outline,transform}.text-input_hds-text-input__input-wrapper__3qg76:focus-within input.text-input_hds-text-input__input__BIkQu[readonly]{height:calc(var(--input-height) - 2 * var(--outline-offset-readonly));margin:var(--outline-offset-readonly) 0;outline:var(--color-focus-outline) solid var(--outline-width)}.text-input_hds-text-input__input-wrapper__3qg76:focus-within textarea.text-input_hds-text-input__input__BIkQu[readonly]{outline:var(--color-focus-outline) solid var(--outline-width)}.text-input_hds-text-input__buttons__1eV1P{align-items:center;bottom:0;display:flex;font-size:1rem;justify-content:center;margin-right:calc(var(--spacing-s) - var(--spacing-xs) / 2);position:absolute;right:0;top:0}.text-input_hds-text-input__button__1JeYJ{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;color:var(--icon-color);cursor:pointer;display:flex;font:inherit;outline:none;padding:var(--spacing-xs) calc(var(--spacing-xs) / 2)}.text-input_hds-text-input__button__1JeYJ:focus{outline:var(--outline-width) solid var(--color-focus-outline)}");
	const r$2 = ({
	  className: e,
	  style: r
	}) => /*#__PURE__*/l$2.createElement("span", {
	  className: r$5(i$2, e),
	  style: r
	}, "*");

	var i$1 = "FieldLabel-module_hidden__3UWxI",
	  r$1 = "FieldLabel-module_label__1zrXK",
	  d = "FieldLabel-module_tooltipButton__1My3f";
	e$1(".FieldLabel-module_hidden__3UWxI{border:0;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.FieldLabel-module_label__1zrXK{color:var(--label-color-default,var(--color-black-90));display:block;font-size:var(--fontsize-body-m);font-weight:500;margin-bottom:var(--spacing-3-xs)}.FieldLabel-module_tooltipButton__1My3f{position:absolute;right:0;top:0}");
	const n = l => {
	  var {
	      hidden: n,
	      id: s,
	      inputId: p,
	      isAriaLabelledBy: b$1,
	      label: m,
	      required: c,
	      tooltipLabel: u,
	      tooltipButtonLabel: _,
	      tooltipText: f,
	      tooltip: L
	    } = l,
	    h = o$1(l, ["hidden", "id", "inputId", "isAriaLabelledBy", "label", "required", "tooltipLabel", "tooltipButtonLabel", "tooltipText", "tooltip"]);
	  return /*#__PURE__*/l$2.createElement(l$2.Fragment, null, /*#__PURE__*/l$2.createElement("label", Object.assign({
	    id: s
	  }, (!b$1 || !s) && {
	    htmlFor: p
	  }, {
	    className: `${r$1} ${n ? i$1 : ""}`
	  }, h), m, c && /*#__PURE__*/l$2.createElement(r$2, null)), L && /*#__PURE__*/l$2.createElement(b, Object.assign({}, L.props, {
	    buttonClassName: d
	  })), f && /*#__PURE__*/l$2.createElement(b, {
	    buttonClassName: d,
	    tooltipLabel: u,
	    buttonLabel: _
	  }, f));
	};

	var r = {
	  root: "TextInput-module_root__2CMNr text-input_hds-text-input__2LODq",
	  invalid: "TextInput-module_invalid__2iYo2 text-input_hds-text-input--invalid__1UfKC",
	  inputWrapper: "TextInput-module_inputWrapper__3Rvel text-input_hds-text-input__input-wrapper__1OqYG",
	  input: "TextInput-module_input__1BlHi text-input_hds-text-input__input__GJm5C",
	  hasButton: "TextInput-module_hasButton__2KCM1",
	  hasClearButton: "TextInput-module_hasClearButton__3-tBe text-input_hds-text-input__input-clear__17qr1",
	  clearButton: "TextInput-module_clearButton__bfCLI text-input_hds-text-input__button-clear__2ED7z",
	  errorText: "TextInput-module_errorText__3pizm text-input_hds-text-input__error-text__1GLYk",
	  helperText: "TextInput-module_helperText__2dLR6 text-input_hds-text-input__helper-text__3V2KM",
	  successText: "TextInput-module_successText__2NMCP text-input_hds-text-input__success-text__3EOiy",
	  infoText: "TextInput-module_infoText__zHOGs text-input_hds-text-input__info-text__3bqzy",
	  success: "TextInput-module_success__1kDOm text-input_hds-text-input--success__3dm2J",
	  buttonWrapper: "TextInput-module_buttonWrapper___filA text-input_hds-text-input__buttons__1RMzT",
	  button: "TextInput-module_button__1ySMX text-input_hds-text-input__button__1Fh0I"
	};
	e$1("@keyframes text-input_fadeIn__2IDZ8{0%{opacity:0}to{opacity:1}}.text-input_hds-text-input__2LODq{--border-width:2px;--outline-width:3px;--outline-offset-readonly:4px;--input-height:56px;--textarea-height:149px;--icon-size:var(--spacing-m);--icon-color:var(--color-black);--helper-color-default:var(--color-black-60);--helper-color-invalid:var(--color-black);--helper-background-color-invalid:var(--color-error-light);--helper-icon-color-invalid:var(--color-error);--helper-color-success:var(--color-black);--helper-background-color-success:var(--color-success-light);--helper-icon-color-success:var(--color-success);--helper-color-info:var(--color-black);--helper-background-color-info:var(--color-info-light);--helper-icon-color-info:var(--color-info);--input-background-default:var(--color-white);--input-background-disabled:var(--color-black-10);--input-border-color-default:var(--color-black-50);--input-border-color-hover:var(--color-black-90);--input-border-color-focus:var(--color-black-90);--input-border-color-invalid:var(--color-error);--input-border-color-disabled:var(--color-black-10);--input-border-color-success:var(--color-success);--input-color-default:var(--color-black-90);--input-color-disabled:var(--color-black-40);--label-color-default:var(--color-black-90);--label-color-invalid:var(--color-black-90);--placeholder-color:var(--color-black-60)}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C{-webkit-appearance:none;background-color:var(--input-background-default);border:var(--border-width) solid var(--input-border-color-default);border-radius:0;box-sizing:border-box;color:var(--input-color-default);font-family:inherit;font-size:1.125em;height:var(--input-height);line-height:normal;margin:0;padding:0 var(--spacing-s);width:100%;will-change:transform,box-shadow}.text-input_hds-text-input__2LODq:not([data-hds-textinput-filled]) .text-input_hds-text-input__button-clear__2ED7z,.text-input_hds-text-input__input-clear__17qr1::-webkit-search-cancel-button{display:none}.text-input_hds-text-input__2LODq .text-input_hds-text-input__button-clear__2ED7z>*{pointer-events:none}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C:hover{border-color:var(--input-border-color-hover);transition:border-color 85ms ease-out}.text-input_hds-text-input__input-wrapper__1OqYG:focus-within .text-input_hds-text-input__input__GJm5C{border-color:var(--input-border-color-focus);outline:none}.text-input_hds-text-input__2LODq.text-input_hds-text-input--invalid__1UfKC .text-input_hds-text-input__input__GJm5C{border-color:var(--input-border-color-invalid)}.text-input_hds-text-input__2LODq.text-input_hds-text-input--success__3dm2J .text-input_hds-text-input__input__GJm5C{border-color:var(--input-border-color-success)}.text-input_hds-text-input__input-wrapper__1OqYG:focus-within .text-input_hds-text-input__input__GJm5C:not([readonly]){box-shadow:0 0 0 var(--outline-width) var(--color-focus-outline);transform:translateZ(0);transition:85ms ease-out;transition-property:box-shadow,transform}.text-input_hds-text-input__label__15F2V{color:var(--label-color-default);display:block;font-size:var(--fontsize-body-m);font-weight:500;margin-bottom:var(--spacing-3-xs)}.text-input_hds-text-input--invalid__1UfKC .text-input_hds-text-input__label__15F2V{color:var(--label-color-invalid);transition:color 85ms linear}.text-input_hds-text-input__required__z3Hm0{display:inline-block;font-size:var(--fontsize-body-xl);line-height:1;margin-left:var(--spacing-2-xs);transform:translateY(var(--spacing-3-xs))}.text-input_hds-text-input__input-wrapper__1OqYG{display:flex;position:relative}.text-input_hds-text-input__2LODq textarea.text-input_hds-text-input__input__GJm5C{font-family:inherit;height:var(--textarea-height);margin:0;min-height:var(--input-height);overflow:auto;padding:var(--spacing-s);resize:vertical}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C::-ms-reveal{display:none}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C::-moz-placeholder{color:var(--placeholder-color);opacity:1}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C::placeholder{color:var(--placeholder-color);opacity:1}.text-input_hds-text-input__helper-text__3V2KM{color:var(--helper-color-default);display:block;font-size:var(--fontsize-body-m);line-height:var(--lineheight-l);margin-top:var(--spacing-3-xs);white-space:pre-line}.text-input_hds-text-input__error-text__1GLYk{background-color:var(--helper-background-color-invalid);border-left:8px solid var(--color-error);color:var(--helper-color-invalid);display:flex;font-size:var(--fontsize-body-m);line-height:var(--lineheight-l);margin-top:var(--spacing-2-xs);padding:var(--spacing-2-xs);white-space:pre-line}.text-input_hds-text-input__error-text__1GLYk:not(:last-child){margin-bottom:var(--spacing-2-xs)}.text-input_hds-text-input__error-text__1GLYk:before{animation:text-input_fadeIn__2IDZ8 85ms ease-out;background:var(--helper-icon-color-invalid);content:\"\";display:inline-block;flex-shrink:0;height:var(--icon-size);margin-right:var(--spacing-2-xs);-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.175 3.456c.349-.586 1.223-.607 1.61-.063l.04.063 9.052 15.21c.343.577-.072 1.285-.753 1.332l-.072.002H2.948c-.7 0-1.15-.689-.858-1.273l.033-.06 9.052-15.21zM13 16v2h-2v-2h2zm0-7.5v6h-2v-6h2z' fill='currentColor'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.175 3.456c.349-.586 1.223-.607 1.61-.063l.04.063 9.052 15.21c.343.577-.072 1.285-.753 1.332l-.072.002H2.948c-.7 0-1.15-.689-.858-1.273l.033-.06 9.052-15.21zM13 16v2h-2v-2h2zm0-7.5v6h-2v-6h2z' fill='currentColor'/%3E%3C/svg%3E\");pointer-events:none;width:var(--icon-size)}.text-input_hds-text-input__success-text__3EOiy{background-color:var(--helper-background-color-success);border-left:8px solid var(--color-success);color:var(--helper-color-success);display:flex;font-size:var(--fontsize-body-m);line-height:var(--lineheight-l);margin-top:var(--spacing-2-xs);padding:var(--spacing-2-xs);position:relative;white-space:pre-wrap}.text-input_hds-text-input__success-text__3EOiy:not(:last-child){margin-bottom:var(--spacing-2-xs)}.text-input_hds-text-input__success-text__3EOiy:before{animation:text-input_fadeIn__2IDZ8 85ms ease-out;background:var(--helper-icon-color-success);content:\"\";display:inline-block;flex-shrink:0;height:var(--icon-size);margin-right:var(--spacing-2-xs);-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='currentColor' d='M12 3a9 9 0 100 18 9 9 0 000-18zm4.5 5L18 9.5 10.5 17 6 12.5 7.5 11l3 3 6-6z'/%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='currentColor' d='M12 3a9 9 0 100 18 9 9 0 000-18zm4.5 5L18 9.5 10.5 17 6 12.5 7.5 11l3 3 6-6z'/%3E%3C/g%3E%3C/svg%3E\");pointer-events:none;width:var(--icon-size)}.text-input_hds-text-input__info-text__3bqzy{background-color:var(--helper-background-color-info);border-left:8px solid var(--color-info);color:var(--helper-color-info);display:flex;font-size:var(--fontsize-body-m);line-height:var(--lineheight-l);margin-top:var(--spacing-2-xs);padding:var(--spacing-2-xs);position:relative}.text-input_hds-text-input__info-text__3bqzy:not(:last-child){margin-bottom:var(--spacing-2-xs)}.text-input_hds-text-input__info-text__3bqzy:before{animation:text-input_fadeIn__2IDZ8 85ms ease-out;background:var(--helper-icon-color-info);content:\"\";display:inline-block;flex-shrink:0;height:var(--icon-size);margin-right:var(--spacing-2-xs);-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='currentColor' d='M12 3a9 9 0 110 18 9 9 0 010-18zm1 13v2h-2v-2h2zm0-10v8h-2V6h2z'/%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='currentColor' d='M12 3a9 9 0 110 18 9 9 0 010-18zm1 13v2h-2v-2h2zm0-10v8h-2V6h2z'/%3E%3C/g%3E%3C/svg%3E\");pointer-events:none;width:var(--icon-size)}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C[disabled]{background-color:var(--input-background-disabled);border-color:var(--input-border-color-disabled);color:var(--input-color-disabled);cursor:not-allowed}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C[readonly]{background-color:transparent;border:0;color:var(--input-color-default);outline-offset:var(--outline-offset-readonly);padding:0;-webkit-text-fill-color:var(--input-color-default);transform:translateZ(0);transition:85ms ease-out;transition-property:outline,transform}.text-input_hds-text-input__input-wrapper__1OqYG:focus-within input.text-input_hds-text-input__input__GJm5C[readonly]{height:calc(var(--input-height) - 2 * var(--outline-offset-readonly));margin:var(--outline-offset-readonly) 0;outline:var(--color-focus-outline) solid var(--outline-width)}.text-input_hds-text-input__input-wrapper__1OqYG:focus-within textarea.text-input_hds-text-input__input__GJm5C[readonly]{outline:var(--color-focus-outline) solid var(--outline-width)}.text-input_hds-text-input__buttons__1RMzT{align-items:center;bottom:0;display:flex;font-size:1rem;justify-content:center;margin-right:calc(var(--spacing-s) - var(--spacing-xs) / 2);position:absolute;right:0;top:0}.text-input_hds-text-input__button__1Fh0I{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;color:var(--icon-color);cursor:pointer;display:flex;font:inherit;outline:none;padding:var(--spacing-xs) calc(var(--spacing-xs) / 2)}.text-input_hds-text-input__button__1Fh0I:focus{outline:var(--outline-width) solid var(--color-focus-outline)}.TextInput-module_root__2CMNr{position:relative;&.TextInput-module_invalid__2iYo2{label{color:var(--label-color-invalid)}}}.TextInput-module_input__1BlHi.TextInput-module_hasButton__2KCM1,.TextInput-module_input__1BlHi.TextInput-module_hasClearButton__3-tBe{padding-right:calc(2 * var(--spacing-s) + 1.5rem)}.TextInput-module_input__1BlHi.TextInput-module_hasButton__2KCM1.TextInput-module_hasClearButton__3-tBe{padding-right:calc(4 * var(--spacing-s) + 1.5rem)}.TextInput-module_button__1ySMX:disabled{cursor:not-allowed}.TextInput-module_button__1ySMX:focus{outline:var(--outline-width) solid var(--color-focus-outline)}");
	const l = /*#__PURE__*/l$2.forwardRef((i, l) => {
	  var {
	      children: a,
	      className: s = "",
	      errorText: u,
	      helperText: p,
	      hideLabel: _ = false,
	      id: d,
	      invalid: c = false,
	      isAriaLabelledBy: x = false,
	      label: h,
	      labelId: v,
	      onBlur: m,
	      required: g = false,
	      style: b,
	      successText: f,
	      infoText: w,
	      tooltipLabel: C,
	      tooltipText: k,
	      tooltipButtonLabel: y
	    } = i,
	    z = o$1(i, ["children", "className", "errorText", "helperText", "hideLabel", "id", "invalid", "isAriaLabelledBy", "label", "labelId", "onBlur", "required", "style", "successText", "infoText", "tooltipLabel", "tooltipText", "tooltipButtonLabel"]);
	  const T = {
	    className: r$5(r.root, c && r.invalid, f && r.success, s),
	    onBlur: m,
	    style: b
	  };
	  return /*#__PURE__*/l$2.createElement("div", Object.assign({}, T, z, {
	    ref: l
	  }), h && /*#__PURE__*/l$2.createElement(n, {
	    id: v,
	    inputId: d,
	    isAriaLabelledBy: x,
	    hidden: _,
	    label: h,
	    required: g,
	    tooltipLabel: C,
	    tooltipButtonLabel: y,
	    tooltipText: k
	  }), /*#__PURE__*/l$2.createElement("div", {
	    className: r$5(r.inputWrapper)
	  }, a), u && /*#__PURE__*/l$2.createElement("div", {
	    className: r.errorText,
	    id: `${d}-error`
	  }, u), f && /*#__PURE__*/l$2.createElement("div", {
	    className: r.successText,
	    id: `${d}-success`
	  }, f), w && /*#__PURE__*/l$2.createElement("div", {
	    className: r.infoText,
	    id: `${d}-info`
	  }, w), p && /*#__PURE__*/l$2.createElement("div", {
	    className: r.helperText,
	    id: `${d}-helper`
	  }, p));
	});

	const i = /*#__PURE__*/l$2.forwardRef((i, s) => {
	  var {
	      buttonAriaLabel: c,
	      buttonIcon: u,
	      children: d,
	      className: b = "",
	      clearButtonAriaLabel: p = "Clear",
	      clearButton: m = false,
	      defaultValue: f,
	      disabled: x = false,
	      errorText: h,
	      helperText: T,
	      hideLabel: B,
	      id: L,
	      infoText: y,
	      invalid: C,
	      label: v,
	      labelId: I,
	      onButtonClick: g,
	      onChange: j = () => null,
	      required: N,
	      style: A,
	      successText: E,
	      tooltipButtonLabel: q,
	      tooltipLabel: k,
	      tooltipText: V,
	      type: O = "text"
	    } = i,
	    R = o$1(i, ["buttonAriaLabel", "buttonIcon", "children", "className", "clearButtonAriaLabel", "clearButton", "defaultValue", "disabled", "errorText", "helperText", "hideLabel", "id", "infoText", "invalid", "label", "labelId", "onButtonClick", "onChange", "required", "style", "successText", "tooltipButtonLabel", "tooltipLabel", "tooltipText", "type"]);
	  const W = {
	      className: b,
	      errorText: h,
	      helperText: T,
	      hideLabel: B,
	      id: L,
	      infoText: y,
	      invalid: C,
	      label: v,
	      labelId: I,
	      required: N,
	      style: A,
	      successText: E,
	      tooltipButtonLabel: q,
	      tooltipLabel: k,
	      tooltipText: V
	    },
	    w = l$2.useRef(null),
	    D = r$3(L, T, h, E, y),
	    S = Boolean(u && g),
	    _ = Boolean(m || "search" === O),
	    z = e => {
	      if (j(e), !_) return;
	      const t = e.target.value;
	      _ && t.length > 0 ? w.current.setAttribute("data-hds-textinput-filled", "true") : w.current.removeAttribute("data-hds-textinput-filled");
	    };
	  return (null == f ? void 0 : f.length) > 0 && _ && (W["data-hds-textinput-filled"] = true), /*#__PURE__*/l$2.createElement(l, Object.assign({}, W, {
	    ref: w
	  }), /*#__PURE__*/l$2.createElement("input", Object.assign({
	    "aria-describedby": D,
	    className: r$5(r.input, S && r.hasButton, _ && r.hasClearButton),
	    defaultValue: f,
	    disabled: x,
	    id: L,
	    onChange: z,
	    ref: s,
	    required: N,
	    type: O
	  }, R)), (S || _) && /*#__PURE__*/l$2.createElement("div", {
	    className: r.buttonWrapper
	  }, _ && /*#__PURE__*/l$2.createElement("button", {
	    "aria-label": p,
	    className: r$5(r.button, r.clearButton),
	    disabled: x,
	    onClick: e => {
	      const t = w.current.querySelector("input");
	      t.value = "", t.focus(), z(e);
	    },
	    type: "button"
	  }, /*#__PURE__*/l$2.createElement(s$1, null)), u && g && /*#__PURE__*/l$2.createElement("button", {
	    "aria-label": c,
	    className: r.button,
	    disabled: x,
	    onClick: g,
	    type: "button"
	  }, u)), d);
	});

	var W = "DateInput-module_wrapper__HHa75";
	function j(e) {
	  if (null === e || true === e || false === e) return NaN;
	  var t = Number(e);
	  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
	}
	function N(e, t) {
	  if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
	}
	function S(e) {
	  N(1, arguments);
	  var t = Object.prototype.toString.call(e);
	  return e instanceof Date || "object" == typeof e && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : ("string" != typeof e && "[object String]" !== t || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn(new Error().stack)), new Date(NaN));
	}
	function H(e, t) {
	  N(2, arguments);
	  var a = S(e),
	    n = j(t);
	  return isNaN(n) ? new Date(NaN) : n ? (a.setDate(a.getDate() + n), a) : a;
	}
	function Y(e) {
	  N(1, arguments);
	  var t = S(e);
	  return t.setHours(23, 59, 59, 999), t;
	}
	function B(e) {
	  N(1, arguments);
	  var t = S(e),
	    a = t.getFullYear(),
	    n = t.getMonth(),
	    r = new Date(0);
	  return r.setFullYear(a, n + 1, 0), r.setHours(0, 0, 0, 0), r.getDate();
	}
	function U(e) {
	  N(1, arguments);
	  var t = S(e);
	  return t.setHours(0, 0, 0, 0), t;
	}
	function z(e, t) {
	  N(2, arguments);
	  var a = S(e),
	    n = S(t);
	  return a.getTime() > n.getTime();
	}
	function O(e, t) {
	  N(2, arguments);
	  var a = S(e),
	    n = S(t);
	  return a.getTime() < n.getTime();
	}
	function L(e) {
	  N(1, arguments);
	  var t = S(e);
	  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
	}
	function F(e) {
	  N(1, arguments);
	  var t = S(e);
	  return !isNaN(t);
	}
	e$1(".DateInput-module_wrapper__HHa75{position:relative}");
	var I = {
	  lessThanXSeconds: {
	    one: "less than a second",
	    other: "less than {{count}} seconds"
	  },
	  xSeconds: {
	    one: "1 second",
	    other: "{{count}} seconds"
	  },
	  halfAMinute: "half a minute",
	  lessThanXMinutes: {
	    one: "less than a minute",
	    other: "less than {{count}} minutes"
	  },
	  xMinutes: {
	    one: "1 minute",
	    other: "{{count}} minutes"
	  },
	  aboutXHours: {
	    one: "about 1 hour",
	    other: "about {{count}} hours"
	  },
	  xHours: {
	    one: "1 hour",
	    other: "{{count}} hours"
	  },
	  xDays: {
	    one: "1 day",
	    other: "{{count}} days"
	  },
	  aboutXWeeks: {
	    one: "about 1 week",
	    other: "about {{count}} weeks"
	  },
	  xWeeks: {
	    one: "1 week",
	    other: "{{count}} weeks"
	  },
	  aboutXMonths: {
	    one: "about 1 month",
	    other: "about {{count}} months"
	  },
	  xMonths: {
	    one: "1 month",
	    other: "{{count}} months"
	  },
	  aboutXYears: {
	    one: "about 1 year",
	    other: "about {{count}} years"
	  },
	  xYears: {
	    one: "1 year",
	    other: "{{count}} years"
	  },
	  overXYears: {
	    one: "over 1 year",
	    other: "over {{count}} years"
	  },
	  almostXYears: {
	    one: "almost 1 year",
	    other: "almost {{count}} years"
	  }
	};
	function q(e, t, a) {
	  var n;
	  return a = a || {}, n = "string" == typeof I[e] ? I[e] : 1 === t ? I[e].one : I[e].other.replace("{{count}}", t), a.addSuffix ? a.comparison > 0 ? "in " + n : n + " ago" : n;
	}
	function A(e) {
	  return function (t) {
	    var a = t || {},
	      n = a.width ? String(a.width) : e.defaultWidth;
	    return e.formats[n] || e.formats[e.defaultWidth];
	  };
	}
	var R = {
	    date: A({
	      formats: {
	        full: "EEEE, MMMM do, y",
	        long: "MMMM do, y",
	        medium: "MMM d, y",
	        short: "MM/dd/yyyy"
	      },
	      defaultWidth: "full"
	    }),
	    time: A({
	      formats: {
	        full: "h:mm:ss a zzzz",
	        long: "h:mm:ss a z",
	        medium: "h:mm:ss a",
	        short: "h:mm a"
	      },
	      defaultWidth: "full"
	    }),
	    dateTime: A({
	      formats: {
	        full: "{{date}} 'at' {{time}}",
	        long: "{{date}} 'at' {{time}}",
	        medium: "{{date}}, {{time}}",
	        short: "{{date}}, {{time}}"
	      },
	      defaultWidth: "full"
	    })
	  },
	  X = {
	    lastWeek: "'last' eeee 'at' p",
	    yesterday: "'yesterday at' p",
	    today: "'today at' p",
	    tomorrow: "'tomorrow at' p",
	    nextWeek: "eeee 'at' p",
	    other: "P"
	  };
	function Q(e, t, a, n) {
	  return X[e];
	}
	function K(e) {
	  return function (t, a) {
	    var n,
	      r = a || {};
	    if ("formatting" === (r.context ? String(r.context) : "standalone") && e.formattingValues) {
	      var i = e.defaultFormattingWidth || e.defaultWidth,
	        o = r.width ? String(r.width) : i;
	      n = e.formattingValues[o] || e.formattingValues[i];
	    } else {
	      var s = e.defaultWidth,
	        u = r.width ? String(r.width) : e.defaultWidth;
	      n = e.values[u] || e.values[s];
	    }
	    return n[e.argumentCallback ? e.argumentCallback(t) : t];
	  };
	}
	var V = {
	  ordinalNumber: function (e, t) {
	    var a = Number(e),
	      n = a % 100;
	    if (n > 20 || n < 10) switch (n % 10) {
	      case 1:
	        return a + "st";
	      case 2:
	        return a + "nd";
	      case 3:
	        return a + "rd";
	    }
	    return a + "th";
	  },
	  era: K({
	    values: {
	      narrow: ["B", "A"],
	      abbreviated: ["BC", "AD"],
	      wide: ["Before Christ", "Anno Domini"]
	    },
	    defaultWidth: "wide"
	  }),
	  quarter: K({
	    values: {
	      narrow: ["1", "2", "3", "4"],
	      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
	      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
	    },
	    defaultWidth: "wide",
	    argumentCallback: function (e) {
	      return Number(e) - 1;
	    }
	  }),
	  month: K({
	    values: {
	      narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
	      abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	      wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	    },
	    defaultWidth: "wide"
	  }),
	  day: K({
	    values: {
	      narrow: ["S", "M", "T", "W", "T", "F", "S"],
	      short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
	      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	      wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	    },
	    defaultWidth: "wide"
	  }),
	  dayPeriod: K({
	    values: {
	      narrow: {
	        am: "a",
	        pm: "p",
	        midnight: "mi",
	        noon: "n",
	        morning: "morning",
	        afternoon: "afternoon",
	        evening: "evening",
	        night: "night"
	      },
	      abbreviated: {
	        am: "AM",
	        pm: "PM",
	        midnight: "midnight",
	        noon: "noon",
	        morning: "morning",
	        afternoon: "afternoon",
	        evening: "evening",
	        night: "night"
	      },
	      wide: {
	        am: "a.m.",
	        pm: "p.m.",
	        midnight: "midnight",
	        noon: "noon",
	        morning: "morning",
	        afternoon: "afternoon",
	        evening: "evening",
	        night: "night"
	      }
	    },
	    defaultWidth: "wide",
	    formattingValues: {
	      narrow: {
	        am: "a",
	        pm: "p",
	        midnight: "mi",
	        noon: "n",
	        morning: "in the morning",
	        afternoon: "in the afternoon",
	        evening: "in the evening",
	        night: "at night"
	      },
	      abbreviated: {
	        am: "AM",
	        pm: "PM",
	        midnight: "midnight",
	        noon: "noon",
	        morning: "in the morning",
	        afternoon: "in the afternoon",
	        evening: "in the evening",
	        night: "at night"
	      },
	      wide: {
	        am: "a.m.",
	        pm: "p.m.",
	        midnight: "midnight",
	        noon: "noon",
	        morning: "in the morning",
	        afternoon: "in the afternoon",
	        evening: "in the evening",
	        night: "at night"
	      }
	    },
	    defaultFormattingWidth: "wide"
	  })
	};
	function J(e) {
	  return function (t, a) {
	    var n = String(t),
	      r = a || {},
	      i = n.match(e.matchPattern);
	    if (!i) return null;
	    var o = i[0],
	      s = n.match(e.parsePattern);
	    if (!s) return null;
	    var u = e.valueCallback ? e.valueCallback(s[0]) : s[0];
	    return {
	      value: u = r.valueCallback ? r.valueCallback(u) : u,
	      rest: n.slice(o.length)
	    };
	  };
	}
	function G(e) {
	  return function (t, a) {
	    var n = String(t),
	      r = a || {},
	      i = r.width,
	      o = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth],
	      s = n.match(o);
	    if (!s) return null;
	    var u,
	      l = s[0],
	      d = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth];
	    return u = "[object Array]" === Object.prototype.toString.call(d) ? function (e, t) {
	      for (var a = 0; a < e.length; a++) if (t(e[a])) return a;
	    }(d, function (e) {
	      return e.test(l);
	    }) : function (e, t) {
	      for (var a in e) if (e.hasOwnProperty(a) && t(e[a])) return a;
	    }(d, function (e) {
	      return e.test(l);
	    }), u = e.valueCallback ? e.valueCallback(u) : u, {
	      value: u = r.valueCallback ? r.valueCallback(u) : u,
	      rest: n.slice(l.length)
	    };
	  };
	}
	var Z = {
	    ordinalNumber: J({
	      matchPattern: /^(\d+)(th|st|nd|rd)?/i,
	      parsePattern: /\d+/i,
	      valueCallback: function (e) {
	        return parseInt(e, 10);
	      }
	    }),
	    era: G({
	      matchPatterns: {
	        narrow: /^(b|a)/i,
	        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
	        wide: /^(before christ|before common era|anno domini|common era)/i
	      },
	      defaultMatchWidth: "wide",
	      parsePatterns: {
	        any: [/^b/i, /^(a|c)/i]
	      },
	      defaultParseWidth: "any"
	    }),
	    quarter: G({
	      matchPatterns: {
	        narrow: /^[1234]/i,
	        abbreviated: /^q[1234]/i,
	        wide: /^[1234](th|st|nd|rd)? quarter/i
	      },
	      defaultMatchWidth: "wide",
	      parsePatterns: {
	        any: [/1/i, /2/i, /3/i, /4/i]
	      },
	      defaultParseWidth: "any",
	      valueCallback: function (e) {
	        return e + 1;
	      }
	    }),
	    month: G({
	      matchPatterns: {
	        narrow: /^[jfmasond]/i,
	        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
	        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
	      },
	      defaultMatchWidth: "wide",
	      parsePatterns: {
	        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
	        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
	      },
	      defaultParseWidth: "any"
	    }),
	    day: G({
	      matchPatterns: {
	        narrow: /^[smtwf]/i,
	        short: /^(su|mo|tu|we|th|fr|sa)/i,
	        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
	        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
	      },
	      defaultMatchWidth: "wide",
	      parsePatterns: {
	        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
	        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
	      },
	      defaultParseWidth: "any"
	    }),
	    dayPeriod: G({
	      matchPatterns: {
	        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
	        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
	      },
	      defaultMatchWidth: "any",
	      parsePatterns: {
	        any: {
	          am: /^a/i,
	          pm: /^p/i,
	          midnight: /^mi/i,
	          noon: /^no/i,
	          morning: /morning/i,
	          afternoon: /afternoon/i,
	          evening: /evening/i,
	          night: /night/i
	        }
	      },
	      defaultParseWidth: "any"
	    })
	  },
	  $ = {
	    code: "en-US",
	    formatDistance: q,
	    formatLong: R,
	    formatRelative: Q,
	    localize: V,
	    match: Z,
	    options: {
	      weekStartsOn: 0,
	      firstWeekContainsDate: 1
	    }
	  };
	function ee(e, t) {
	  return N(2, arguments), function (e, t) {
	    N(2, arguments);
	    var a = S(e).getTime(),
	      n = j(t);
	    return new Date(a + n);
	  }(e, -j(t));
	}
	function te(e, t) {
	  for (var a = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
	  return a + n;
	}
	var ae = function (e, t) {
	    var a = e.getUTCFullYear(),
	      n = a > 0 ? a : 1 - a;
	    return te("yy" === t ? n % 100 : n, t.length);
	  },
	  ne = function (e, t) {
	    var a = e.getUTCMonth();
	    return "M" === t ? String(a + 1) : te(a + 1, 2);
	  },
	  re = function (e, t) {
	    return te(e.getUTCDate(), t.length);
	  },
	  ie = function (e, t) {
	    return te(e.getUTCHours() % 12 || 12, t.length);
	  },
	  oe = function (e, t) {
	    return te(e.getUTCHours(), t.length);
	  },
	  se = function (e, t) {
	    return te(e.getUTCMinutes(), t.length);
	  },
	  ue = function (e, t) {
	    return te(e.getUTCSeconds(), t.length);
	  },
	  le = function (e, t) {
	    var a = t.length,
	      n = e.getUTCMilliseconds();
	    return te(Math.floor(n * Math.pow(10, a - 3)), t.length);
	  };
	function de(e) {
	  N(1, arguments);
	  var t = S(e),
	    a = t.getUTCDay(),
	    n = (a < 1 ? 7 : 0) + a - 1;
	  return t.setUTCDate(t.getUTCDate() - n), t.setUTCHours(0, 0, 0, 0), t;
	}
	function ce(e) {
	  N(1, arguments);
	  var t = S(e),
	    a = t.getUTCFullYear(),
	    n = new Date(0);
	  n.setUTCFullYear(a + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
	  var r = de(n),
	    i = new Date(0);
	  i.setUTCFullYear(a, 0, 4), i.setUTCHours(0, 0, 0, 0);
	  var o = de(i);
	  return t.getTime() >= r.getTime() ? a + 1 : t.getTime() >= o.getTime() ? a : a - 1;
	}
	function me(e) {
	  N(1, arguments);
	  var t = S(e),
	    a = de(t).getTime() - function (e) {
	      N(1, arguments);
	      var t = ce(e),
	        a = new Date(0);
	      return a.setUTCFullYear(t, 0, 4), a.setUTCHours(0, 0, 0, 0), de(a);
	    }(t).getTime();
	  return Math.round(a / 6048e5) + 1;
	}
	function he(e, t) {
	  N(1, arguments);
	  var a = t || {},
	    n = a.locale,
	    r = n && n.options && n.options.weekStartsOn,
	    i = null == r ? 0 : j(r),
	    o = null == a.weekStartsOn ? i : j(a.weekStartsOn);
	  if (!(o >= 0 && o <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
	  var s = S(e),
	    u = s.getUTCDay(),
	    l = (u < o ? 7 : 0) + u - o;
	  return s.setUTCDate(s.getUTCDate() - l), s.setUTCHours(0, 0, 0, 0), s;
	}
	function fe(e, t) {
	  N(1, arguments);
	  var a = S(e, t),
	    n = a.getUTCFullYear(),
	    r = t || {},
	    i = r.locale,
	    o = i && i.options && i.options.firstWeekContainsDate,
	    s = null == o ? 1 : j(o),
	    u = null == r.firstWeekContainsDate ? s : j(r.firstWeekContainsDate);
	  if (!(u >= 1 && u <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
	  var l = new Date(0);
	  l.setUTCFullYear(n + 1, 0, u), l.setUTCHours(0, 0, 0, 0);
	  var d = he(l, t),
	    c = new Date(0);
	  c.setUTCFullYear(n, 0, u), c.setUTCHours(0, 0, 0, 0);
	  var m = he(c, t);
	  return a.getTime() >= d.getTime() ? n + 1 : a.getTime() >= m.getTime() ? n : n - 1;
	}
	function ge(e, t) {
	  N(1, arguments);
	  var a = S(e),
	    n = he(a, t).getTime() - function (e, t) {
	      N(1, arguments);
	      var a = t || {},
	        n = a.locale,
	        r = n && n.options && n.options.firstWeekContainsDate,
	        i = null == r ? 1 : j(r),
	        o = null == a.firstWeekContainsDate ? i : j(a.firstWeekContainsDate),
	        s = fe(e, t),
	        u = new Date(0);
	      return u.setUTCFullYear(s, 0, o), u.setUTCHours(0, 0, 0, 0), he(u, t);
	    }(a, t).getTime();
	  return Math.round(n / 6048e5) + 1;
	}
	var pe = "midnight",
	  ve = "noon",
	  ke = "morning",
	  _e = "afternoon",
	  be = "evening",
	  we = "night",
	  ye = {
	    G: function (e, t, a) {
	      var n = e.getUTCFullYear() > 0 ? 1 : 0;
	      switch (t) {
	        case "G":
	        case "GG":
	        case "GGG":
	          return a.era(n, {
	            width: "abbreviated"
	          });
	        case "GGGGG":
	          return a.era(n, {
	            width: "narrow"
	          });
	        default:
	          return a.era(n, {
	            width: "wide"
	          });
	      }
	    },
	    y: function (e, t, a) {
	      if ("yo" === t) {
	        var n = e.getUTCFullYear(),
	          r = n > 0 ? n : 1 - n;
	        return a.ordinalNumber(r, {
	          unit: "year"
	        });
	      }
	      return ae(e, t);
	    },
	    Y: function (e, t, a, n) {
	      var r = fe(e, n),
	        i = r > 0 ? r : 1 - r;
	      return "YY" === t ? te(i % 100, 2) : "Yo" === t ? a.ordinalNumber(i, {
	        unit: "year"
	      }) : te(i, t.length);
	    },
	    R: function (e, t) {
	      return te(ce(e), t.length);
	    },
	    u: function (e, t) {
	      return te(e.getUTCFullYear(), t.length);
	    },
	    Q: function (e, t, a) {
	      var n = Math.ceil((e.getUTCMonth() + 1) / 3);
	      switch (t) {
	        case "Q":
	          return String(n);
	        case "QQ":
	          return te(n, 2);
	        case "Qo":
	          return a.ordinalNumber(n, {
	            unit: "quarter"
	          });
	        case "QQQ":
	          return a.quarter(n, {
	            width: "abbreviated",
	            context: "formatting"
	          });
	        case "QQQQQ":
	          return a.quarter(n, {
	            width: "narrow",
	            context: "formatting"
	          });
	        default:
	          return a.quarter(n, {
	            width: "wide",
	            context: "formatting"
	          });
	      }
	    },
	    q: function (e, t, a) {
	      var n = Math.ceil((e.getUTCMonth() + 1) / 3);
	      switch (t) {
	        case "q":
	          return String(n);
	        case "qq":
	          return te(n, 2);
	        case "qo":
	          return a.ordinalNumber(n, {
	            unit: "quarter"
	          });
	        case "qqq":
	          return a.quarter(n, {
	            width: "abbreviated",
	            context: "standalone"
	          });
	        case "qqqqq":
	          return a.quarter(n, {
	            width: "narrow",
	            context: "standalone"
	          });
	        default:
	          return a.quarter(n, {
	            width: "wide",
	            context: "standalone"
	          });
	      }
	    },
	    M: function (e, t, a) {
	      var n = e.getUTCMonth();
	      switch (t) {
	        case "M":
	        case "MM":
	          return ne(e, t);
	        case "Mo":
	          return a.ordinalNumber(n + 1, {
	            unit: "month"
	          });
	        case "MMM":
	          return a.month(n, {
	            width: "abbreviated",
	            context: "formatting"
	          });
	        case "MMMMM":
	          return a.month(n, {
	            width: "narrow",
	            context: "formatting"
	          });
	        default:
	          return a.month(n, {
	            width: "wide",
	            context: "formatting"
	          });
	      }
	    },
	    L: function (e, t, a) {
	      var n = e.getUTCMonth();
	      switch (t) {
	        case "L":
	          return String(n + 1);
	        case "LL":
	          return te(n + 1, 2);
	        case "Lo":
	          return a.ordinalNumber(n + 1, {
	            unit: "month"
	          });
	        case "LLL":
	          return a.month(n, {
	            width: "abbreviated",
	            context: "standalone"
	          });
	        case "LLLLL":
	          return a.month(n, {
	            width: "narrow",
	            context: "standalone"
	          });
	        default:
	          return a.month(n, {
	            width: "wide",
	            context: "standalone"
	          });
	      }
	    },
	    w: function (e, t, a, n) {
	      var r = ge(e, n);
	      return "wo" === t ? a.ordinalNumber(r, {
	        unit: "week"
	      }) : te(r, t.length);
	    },
	    I: function (e, t, a) {
	      var n = me(e);
	      return "Io" === t ? a.ordinalNumber(n, {
	        unit: "week"
	      }) : te(n, t.length);
	    },
	    d: function (e, t, a) {
	      return "do" === t ? a.ordinalNumber(e.getUTCDate(), {
	        unit: "date"
	      }) : re(e, t);
	    },
	    D: function (e, t, a) {
	      var n = function (e) {
	        N(1, arguments);
	        var t = S(e),
	          a = t.getTime();
	        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
	        var n = a - t.getTime();
	        return Math.floor(n / 864e5) + 1;
	      }(e);
	      return "Do" === t ? a.ordinalNumber(n, {
	        unit: "dayOfYear"
	      }) : te(n, t.length);
	    },
	    E: function (e, t, a) {
	      var n = e.getUTCDay();
	      switch (t) {
	        case "E":
	        case "EE":
	        case "EEE":
	          return a.day(n, {
	            width: "abbreviated",
	            context: "formatting"
	          });
	        case "EEEEE":
	          return a.day(n, {
	            width: "narrow",
	            context: "formatting"
	          });
	        case "EEEEEE":
	          return a.day(n, {
	            width: "short",
	            context: "formatting"
	          });
	        default:
	          return a.day(n, {
	            width: "wide",
	            context: "formatting"
	          });
	      }
	    },
	    e: function (e, t, a, n) {
	      var r = e.getUTCDay(),
	        i = (r - n.weekStartsOn + 8) % 7 || 7;
	      switch (t) {
	        case "e":
	          return String(i);
	        case "ee":
	          return te(i, 2);
	        case "eo":
	          return a.ordinalNumber(i, {
	            unit: "day"
	          });
	        case "eee":
	          return a.day(r, {
	            width: "abbreviated",
	            context: "formatting"
	          });
	        case "eeeee":
	          return a.day(r, {
	            width: "narrow",
	            context: "formatting"
	          });
	        case "eeeeee":
	          return a.day(r, {
	            width: "short",
	            context: "formatting"
	          });
	        default:
	          return a.day(r, {
	            width: "wide",
	            context: "formatting"
	          });
	      }
	    },
	    c: function (e, t, a, n) {
	      var r = e.getUTCDay(),
	        i = (r - n.weekStartsOn + 8) % 7 || 7;
	      switch (t) {
	        case "c":
	          return String(i);
	        case "cc":
	          return te(i, t.length);
	        case "co":
	          return a.ordinalNumber(i, {
	            unit: "day"
	          });
	        case "ccc":
	          return a.day(r, {
	            width: "abbreviated",
	            context: "standalone"
	          });
	        case "ccccc":
	          return a.day(r, {
	            width: "narrow",
	            context: "standalone"
	          });
	        case "cccccc":
	          return a.day(r, {
	            width: "short",
	            context: "standalone"
	          });
	        default:
	          return a.day(r, {
	            width: "wide",
	            context: "standalone"
	          });
	      }
	    },
	    i: function (e, t, a) {
	      var n = e.getUTCDay(),
	        r = 0 === n ? 7 : n;
	      switch (t) {
	        case "i":
	          return String(r);
	        case "ii":
	          return te(r, t.length);
	        case "io":
	          return a.ordinalNumber(r, {
	            unit: "day"
	          });
	        case "iii":
	          return a.day(n, {
	            width: "abbreviated",
	            context: "formatting"
	          });
	        case "iiiii":
	          return a.day(n, {
	            width: "narrow",
	            context: "formatting"
	          });
	        case "iiiiii":
	          return a.day(n, {
	            width: "short",
	            context: "formatting"
	          });
	        default:
	          return a.day(n, {
	            width: "wide",
	            context: "formatting"
	          });
	      }
	    },
	    a: function (e, t, a) {
	      var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
	      switch (t) {
	        case "a":
	        case "aa":
	        case "aaa":
	          return a.dayPeriod(n, {
	            width: "abbreviated",
	            context: "formatting"
	          });
	        case "aaaaa":
	          return a.dayPeriod(n, {
	            width: "narrow",
	            context: "formatting"
	          });
	        default:
	          return a.dayPeriod(n, {
	            width: "wide",
	            context: "formatting"
	          });
	      }
	    },
	    b: function (e, t, a) {
	      var n,
	        r = e.getUTCHours();
	      switch (n = 12 === r ? ve : 0 === r ? pe : r / 12 >= 1 ? "pm" : "am", t) {
	        case "b":
	        case "bb":
	        case "bbb":
	          return a.dayPeriod(n, {
	            width: "abbreviated",
	            context: "formatting"
	          });
	        case "bbbbb":
	          return a.dayPeriod(n, {
	            width: "narrow",
	            context: "formatting"
	          });
	        default:
	          return a.dayPeriod(n, {
	            width: "wide",
	            context: "formatting"
	          });
	      }
	    },
	    B: function (e, t, a) {
	      var n,
	        r = e.getUTCHours();
	      switch (n = r >= 17 ? be : r >= 12 ? _e : r >= 4 ? ke : we, t) {
	        case "B":
	        case "BB":
	        case "BBB":
	          return a.dayPeriod(n, {
	            width: "abbreviated",
	            context: "formatting"
	          });
	        case "BBBBB":
	          return a.dayPeriod(n, {
	            width: "narrow",
	            context: "formatting"
	          });
	        default:
	          return a.dayPeriod(n, {
	            width: "wide",
	            context: "formatting"
	          });
	      }
	    },
	    h: function (e, t, a) {
	      if ("ho" === t) {
	        var n = e.getUTCHours() % 12;
	        return 0 === n && (n = 12), a.ordinalNumber(n, {
	          unit: "hour"
	        });
	      }
	      return ie(e, t);
	    },
	    H: function (e, t, a) {
	      return "Ho" === t ? a.ordinalNumber(e.getUTCHours(), {
	        unit: "hour"
	      }) : oe(e, t);
	    },
	    K: function (e, t, a) {
	      var n = e.getUTCHours() % 12;
	      return "Ko" === t ? a.ordinalNumber(n, {
	        unit: "hour"
	      }) : te(n, t.length);
	    },
	    k: function (e, t, a) {
	      var n = e.getUTCHours();
	      return 0 === n && (n = 24), "ko" === t ? a.ordinalNumber(n, {
	        unit: "hour"
	      }) : te(n, t.length);
	    },
	    m: function (e, t, a) {
	      return "mo" === t ? a.ordinalNumber(e.getUTCMinutes(), {
	        unit: "minute"
	      }) : se(e, t);
	    },
	    s: function (e, t, a) {
	      return "so" === t ? a.ordinalNumber(e.getUTCSeconds(), {
	        unit: "second"
	      }) : ue(e, t);
	    },
	    S: function (e, t) {
	      return le(e, t);
	    },
	    X: function (e, t, a, n) {
	      var r = (n._originalDate || e).getTimezoneOffset();
	      if (0 === r) return "Z";
	      switch (t) {
	        case "X":
	          return Me(r);
	        case "XXXX":
	        case "XX":
	          return Pe(r);
	        default:
	          return Pe(r, ":");
	      }
	    },
	    x: function (e, t, a, n) {
	      var r = (n._originalDate || e).getTimezoneOffset();
	      switch (t) {
	        case "x":
	          return Me(r);
	        case "xxxx":
	        case "xx":
	          return Pe(r);
	        default:
	          return Pe(r, ":");
	      }
	    },
	    O: function (e, t, a, n) {
	      var r = (n._originalDate || e).getTimezoneOffset();
	      switch (t) {
	        case "O":
	        case "OO":
	        case "OOO":
	          return "GMT" + De(r, ":");
	        default:
	          return "GMT" + Pe(r, ":");
	      }
	    },
	    z: function (e, t, a, n) {
	      var r = (n._originalDate || e).getTimezoneOffset();
	      switch (t) {
	        case "z":
	        case "zz":
	        case "zzz":
	          return "GMT" + De(r, ":");
	        default:
	          return "GMT" + Pe(r, ":");
	      }
	    },
	    t: function (e, t, a, n) {
	      var r = n._originalDate || e;
	      return te(Math.floor(r.getTime() / 1e3), t.length);
	    },
	    T: function (e, t, a, n) {
	      return te((n._originalDate || e).getTime(), t.length);
	    }
	  };
	function De(e, t) {
	  var a = e > 0 ? "-" : "+",
	    n = Math.abs(e),
	    r = Math.floor(n / 60),
	    i = n % 60;
	  if (0 === i) return a + String(r);
	  var o = t;
	  return a + String(r) + o + te(i, 2);
	}
	function Me(e, t) {
	  return e % 60 == 0 ? (e > 0 ? "-" : "+") + te(Math.abs(e) / 60, 2) : Pe(e, t);
	}
	function Pe(e, t) {
	  var a = t || "",
	    n = e > 0 ? "-" : "+",
	    r = Math.abs(e);
	  return n + te(Math.floor(r / 60), 2) + a + te(r % 60, 2);
	}
	var Te = ye;
	function xe(e, t) {
	  switch (e) {
	    case "P":
	      return t.date({
	        width: "short"
	      });
	    case "PP":
	      return t.date({
	        width: "medium"
	      });
	    case "PPP":
	      return t.date({
	        width: "long"
	      });
	    default:
	      return t.date({
	        width: "full"
	      });
	  }
	}
	function Ce(e, t) {
	  switch (e) {
	    case "p":
	      return t.time({
	        width: "short"
	      });
	    case "pp":
	      return t.time({
	        width: "medium"
	      });
	    case "ppp":
	      return t.time({
	        width: "long"
	      });
	    default:
	      return t.time({
	        width: "full"
	      });
	  }
	}
	var Ee = {
	    p: Ce,
	    P: function (e, t) {
	      var a,
	        n = e.match(/(P+)(p+)?/),
	        r = n[1],
	        i = n[2];
	      if (!i) return xe(e, t);
	      switch (r) {
	        case "P":
	          a = t.dateTime({
	            width: "short"
	          });
	          break;
	        case "PP":
	          a = t.dateTime({
	            width: "medium"
	          });
	          break;
	        case "PPP":
	          a = t.dateTime({
	            width: "long"
	          });
	          break;
	        default:
	          a = t.dateTime({
	            width: "full"
	          });
	      }
	      return a.replace("{{date}}", xe(r, t)).replace("{{time}}", Ce(i, t));
	    }
	  },
	  We = Ee,
	  je = 6e4;
	function Ne(e) {
	  return e.getTime() % je;
	}
	function Se(e) {
	  var t = new Date(e.getTime()),
	    a = Math.ceil(t.getTimezoneOffset());
	  t.setSeconds(0, 0);
	  var n = a > 0 ? (je + Ne(t)) % je : Ne(t);
	  return a * je + n;
	}
	var He = ["D", "DD"],
	  Ye = ["YY", "YYYY"];
	function Be(e, t, a) {
	  if ("YYYY" === e) throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(a, "`; see: https://git.io/fxCyr"));
	  if ("YY" === e) throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(a, "`; see: https://git.io/fxCyr"));
	  if ("D" === e) throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(a, "`; see: https://git.io/fxCyr"));
	  if ("DD" === e) throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(a, "`; see: https://git.io/fxCyr"));
	}
	var Ue = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
	  ze = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
	  Oe = /^'([^]*?)'?$/,
	  Le = /''/g,
	  Fe = /[a-zA-Z]/;
	function Ie(e, t, a) {
	  N(2, arguments);
	  var n = String(t),
	    r = a || {},
	    i = r.locale || $,
	    o = i.options && i.options.firstWeekContainsDate,
	    s = null == o ? 1 : j(o),
	    u = null == r.firstWeekContainsDate ? s : j(r.firstWeekContainsDate);
	  if (!(u >= 1 && u <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
	  var l = i.options && i.options.weekStartsOn,
	    d = null == l ? 0 : j(l),
	    c = null == r.weekStartsOn ? d : j(r.weekStartsOn);
	  if (!(c >= 0 && c <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
	  if (!i.localize) throw new RangeError("locale must contain localize property");
	  if (!i.formatLong) throw new RangeError("locale must contain formatLong property");
	  var m = S(e);
	  if (!F(m)) throw new RangeError("Invalid time value");
	  var h = ee(m, Se(m)),
	    f = {
	      firstWeekContainsDate: u,
	      weekStartsOn: c,
	      locale: i,
	      _originalDate: m
	    };
	  return n.match(ze).map(function (e) {
	    var t = e[0];
	    return "p" === t || "P" === t ? (0, We[t])(e, i.formatLong, f) : e;
	  }).join("").match(Ue).map(function (a) {
	    if ("''" === a) return "'";
	    var n = a[0];
	    if ("'" === n) return a.match(Oe)[1].replace(Le, "'");
	    var o,
	      s = Te[n];
	    if (s) return r.useAdditionalWeekYearTokens || (o = a, -1 === Ye.indexOf(o)) || Be(a, t, e), !r.useAdditionalDayOfYearTokens && function (e) {
	      return -1 !== He.indexOf(e);
	    }(a) && Be(a, t, e), s(h, a, i.localize, f);
	    if (n.match(Fe)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + n + "`");
	    return a;
	  }).join("");
	}
	var qe = {
	  code: "en-GB",
	  formatDistance: q,
	  formatLong: {
	    date: A({
	      formats: {
	        full: "EEEE, d MMMM yyyy",
	        long: "d MMMM yyyy",
	        medium: "d MMM yyyy",
	        short: "dd/MM/yyyy"
	      },
	      defaultWidth: "full"
	    }),
	    time: A({
	      formats: {
	        full: "HH:mm:ss zzzz",
	        long: "HH:mm:ss z",
	        medium: "HH:mm:ss",
	        short: "HH:mm"
	      },
	      defaultWidth: "full"
	    }),
	    dateTime: A({
	      formats: {
	        full: "{{date}} 'at' {{time}}",
	        long: "{{date}} 'at' {{time}}",
	        medium: "{{date}}, {{time}}",
	        short: "{{date}}, {{time}}"
	      },
	      defaultWidth: "full"
	    })
	  },
	  formatRelative: Q,
	  localize: V,
	  match: Z,
	  options: {
	    weekStartsOn: 1,
	    firstWeekContainsDate: 4
	  }
	};
	function Ae(e) {
	  return e.replace(/sekuntia?/, "sekunnin");
	}
	function Re(e) {
	  return e.replace(/minuuttia?/, "minuutin");
	}
	function Xe(e) {
	  return e.replace(/tuntia?/, "tunnin");
	}
	function Qe(e) {
	  return e.replace(/(viikko|viikkoa)/, "viikon");
	}
	function Ke(e) {
	  return e.replace(/(kuukausi|kuukautta)/, "kuukauden");
	}
	function Ve(e) {
	  return e.replace(/(vuosi|vuotta)/, "vuoden");
	}
	var Je = {
	  lessThanXSeconds: {
	    one: "alle sekunti",
	    other: "alle {{count}} sekuntia",
	    futureTense: Ae
	  },
	  xSeconds: {
	    one: "sekunti",
	    other: "{{count}} sekuntia",
	    futureTense: Ae
	  },
	  halfAMinute: {
	    one: "puoli minuuttia",
	    other: "puoli minuuttia",
	    futureTense: function (e) {
	      return "puolen minuutin";
	    }
	  },
	  lessThanXMinutes: {
	    one: "alle minuutti",
	    other: "alle {{count}} minuuttia",
	    futureTense: Re
	  },
	  xMinutes: {
	    one: "minuutti",
	    other: "{{count}} minuuttia",
	    futureTense: Re
	  },
	  aboutXHours: {
	    one: "noin tunti",
	    other: "noin {{count}} tuntia",
	    futureTense: Xe
	  },
	  xHours: {
	    one: "tunti",
	    other: "{{count}} tuntia",
	    futureTense: Xe
	  },
	  xDays: {
	    one: "päivä",
	    other: "{{count}} päivää",
	    futureTense: function (e) {
	      return e.replace(/päivää?/, "päivän");
	    }
	  },
	  aboutXWeeks: {
	    one: "noin viikko",
	    other: "noin {{count}} viikkoa",
	    futureTense: Qe
	  },
	  xWeeks: {
	    one: "viikko",
	    other: "{{count}} viikkoa",
	    futureTense: Qe
	  },
	  aboutXMonths: {
	    one: "noin kuukausi",
	    other: "noin {{count}} kuukautta",
	    futureTense: Ke
	  },
	  xMonths: {
	    one: "kuukausi",
	    other: "{{count}} kuukautta",
	    futureTense: Ke
	  },
	  aboutXYears: {
	    one: "noin vuosi",
	    other: "noin {{count}} vuotta",
	    futureTense: Ve
	  },
	  xYears: {
	    one: "vuosi",
	    other: "{{count}} vuotta",
	    futureTense: Ve
	  },
	  overXYears: {
	    one: "yli vuosi",
	    other: "yli {{count}} vuotta",
	    futureTense: Ve
	  },
	  almostXYears: {
	    one: "lähes vuosi",
	    other: "lähes {{count}} vuotta",
	    futureTense: Ve
	  }
	};
	var Ge = {
	    date: A({
	      formats: {
	        full: "eeee d. MMMM y",
	        long: "d. MMMM y",
	        medium: "d. MMM y",
	        short: "d.M.y"
	      },
	      defaultWidth: "full"
	    }),
	    time: A({
	      formats: {
	        full: "HH.mm.ss zzzz",
	        long: "HH.mm.ss z",
	        medium: "HH.mm.ss",
	        short: "HH.mm"
	      },
	      defaultWidth: "full"
	    }),
	    dateTime: A({
	      formats: {
	        full: "{{date}} 'klo' {{time}}",
	        long: "{{date}} 'klo' {{time}}",
	        medium: "{{date}} {{time}}",
	        short: "{{date}} {{time}}"
	      },
	      defaultWidth: "full"
	    })
	  },
	  Ze = {
	    lastWeek: "'viime' eeee 'klo' p",
	    yesterday: "'eilen klo' p",
	    today: "'tänään klo' p",
	    tomorrow: "'huomenna klo' p",
	    nextWeek: "'ensi' eeee 'klo' p",
	    other: "P"
	  };
	var $e = {
	    narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"],
	    abbreviated: ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"],
	    wide: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"]
	  },
	  et = {
	    narrow: $e.narrow,
	    abbreviated: $e.abbreviated,
	    wide: $e.wide.map(function (e) {
	      return e + "ta";
	    })
	  },
	  tt = {
	    narrow: ["S", "M", "T", "K", "T", "P", "L"],
	    short: ["su", "ma", "ti", "ke", "to", "pe", "la"],
	    abbreviated: ["sunn.", "maan.", "tiis.", "kesk.", "torst.", "perj.", "la"],
	    wide: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
	  },
	  at = {
	    narrow: tt.narrow,
	    short: tt.short,
	    abbreviated: tt.abbreviated,
	    wide: tt.wide.map(function (e) {
	      return e + "na";
	    })
	  };
	var nt = {
	    code: "fi",
	    formatDistance: function (e, t, a) {
	      a = a || {};
	      var n = Je[e],
	        r = 1 === t ? n.one : n.other.replace("{{count}}", t);
	      return a.addSuffix ? a.comparison > 0 ? n.futureTense(r) + " kuluttua" : r + " sitten" : r;
	    },
	    formatLong: Ge,
	    formatRelative: function (e, t, a, n) {
	      return Ze[e];
	    },
	    localize: {
	      ordinalNumber: function (e) {
	        return Number(e) + ".";
	      },
	      era: K({
	        values: {
	          narrow: ["eaa.", "jaa."],
	          abbreviated: ["eaa.", "jaa."],
	          wide: ["ennen ajanlaskun alkua", "jälkeen ajanlaskun alun"]
	        },
	        defaultWidth: "wide"
	      }),
	      quarter: K({
	        values: {
	          narrow: ["1", "2", "3", "4"],
	          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
	          wide: ["1. kvartaali", "2. kvartaali", "3. kvartaali", "4. kvartaali"]
	        },
	        defaultWidth: "wide",
	        argumentCallback: function (e) {
	          return Number(e) - 1;
	        }
	      }),
	      month: K({
	        values: $e,
	        formattingValues: et,
	        defaultWidth: "wide"
	      }),
	      day: K({
	        values: tt,
	        formattingValues: at,
	        defaultWidth: "wide"
	      }),
	      dayPeriod: K({
	        values: {
	          narrow: {
	            am: "ap",
	            pm: "ip",
	            midnight: "keskiyö",
	            noon: "keskipäivä",
	            morning: "ap",
	            afternoon: "ip",
	            evening: "illalla",
	            night: "yöllä"
	          },
	          abbreviated: {
	            am: "ap",
	            pm: "ip",
	            midnight: "keskiyö",
	            noon: "keskipäivä",
	            morning: "ap",
	            afternoon: "ip",
	            evening: "illalla",
	            night: "yöllä"
	          },
	          wide: {
	            am: "ap",
	            pm: "ip",
	            midnight: "keskiyöllä",
	            noon: "keskipäivällä",
	            morning: "aamupäivällä",
	            afternoon: "iltapäivällä",
	            evening: "illalla",
	            night: "yöllä"
	          }
	        },
	        defaultWidth: "wide"
	      })
	    },
	    match: {
	      ordinalNumber: J({
	        matchPattern: /^(\d+)(\.)/i,
	        parsePattern: /\d+/i,
	        valueCallback: function (e) {
	          return parseInt(e, 10);
	        }
	      }),
	      era: G({
	        matchPatterns: {
	          narrow: /^(e|j)/i,
	          abbreviated: /^(eaa.|jaa.)/i,
	          wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i
	        },
	        defaultMatchWidth: "wide",
	        parsePatterns: {
	          any: [/^e/i, /^j/i]
	        },
	        defaultParseWidth: "any"
	      }),
	      quarter: G({
	        matchPatterns: {
	          narrow: /^[1234]/i,
	          abbreviated: /^q[1234]/i,
	          wide: /^[1234]\.? kvartaali/i
	        },
	        defaultMatchWidth: "wide",
	        parsePatterns: {
	          any: [/1/i, /2/i, /3/i, /4/i]
	        },
	        defaultParseWidth: "any",
	        valueCallback: function (e) {
	          return e + 1;
	        }
	      }),
	      month: G({
	        matchPatterns: {
	          narrow: /^[thmkeslj]/i,
	          abbreviated: /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,
	          wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i
	        },
	        defaultMatchWidth: "wide",
	        parsePatterns: {
	          narrow: [/^t/i, /^h/i, /^m/i, /^h/i, /^t/i, /^k/i, /^h/i, /^e/i, /^s/i, /^l/i, /^m/i, /^j/i],
	          any: [/^ta/i, /^hel/i, /^maa/i, /^hu/i, /^to/i, /^k/i, /^hei/i, /^e/i, /^s/i, /^l/i, /^mar/i, /^j/i]
	        },
	        defaultParseWidth: "any"
	      }),
	      day: G({
	        matchPatterns: {
	          narrow: /^[smtkpl]/i,
	          short: /^(su|ma|ti|ke|to|pe|la)/i,
	          abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,
	          wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i
	        },
	        defaultMatchWidth: "wide",
	        parsePatterns: {
	          narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i],
	          any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i]
	        },
	        defaultParseWidth: "any"
	      }),
	      dayPeriod: G({
	        matchPatterns: {
	          narrow: /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,
	          any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i
	        },
	        defaultMatchWidth: "any",
	        parsePatterns: {
	          any: {
	            am: /^ap/i,
	            pm: /^ip/i,
	            midnight: /^keskiyö/i,
	            noon: /^keskipäivä/i,
	            morning: /aamupäivällä/i,
	            afternoon: /iltapäivällä/i,
	            evening: /illalla/i,
	            night: /yöllä/i
	          }
	        },
	        defaultParseWidth: "any"
	      })
	    },
	    options: {
	      weekStartsOn: 1,
	      firstWeekContainsDate: 4
	    }
	  },
	  rt = {
	    lessThanXSeconds: {
	      singular: "mindre än en sekund",
	      plural: "mindre än {{count}} sekunder"
	    },
	    xSeconds: {
	      singular: "en sekund",
	      plural: "{{count}} sekunder"
	    },
	    halfAMinute: "en halv minut",
	    lessThanXMinutes: {
	      singular: "mindre än en minut",
	      plural: "mindre än {{count}} minuter"
	    },
	    xMinutes: {
	      singular: "en minut",
	      plural: "{{count}} minuter"
	    },
	    aboutXHours: {
	      singular: "ungefär en timme",
	      plural: "ungefär {{count}} timmar"
	    },
	    xHours: {
	      singular: "en timme",
	      plural: "{{count}} timmar"
	    },
	    xDays: {
	      singular: "en dag",
	      plural: "{{count}} dagar"
	    },
	    aboutXWeeks: {
	      singular: "ungefär en vecka",
	      plural: "ungefär {{count}} vecka"
	    },
	    xWeeks: {
	      singular: "en vecka",
	      plural: "{{count}} vecka"
	    },
	    aboutXMonths: {
	      singular: "ungefär en månad",
	      plural: "ungefär {{count}} månader"
	    },
	    xMonths: {
	      singular: "en månad",
	      plural: "{{count}} månader"
	    },
	    aboutXYears: {
	      singular: "ungefär ett år",
	      plural: "ungefär {{count}} år"
	    },
	    xYears: {
	      singular: "ett år",
	      plural: "{{count}} år"
	    },
	    overXYears: {
	      singular: "över ett år",
	      plural: "över {{count}} år"
	    },
	    almostXYears: {
	      singular: "nästan ett år",
	      plural: "nästan {{count}} år"
	    }
	  },
	  it = ["noll", "en", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio", "elva", "tolv"];
	var ot = {
	    date: A({
	      formats: {
	        full: "EEEE d MMMM y",
	        long: "d MMMM y",
	        medium: "d MMM y",
	        short: "y-MM-dd"
	      },
	      defaultWidth: "full"
	    }),
	    time: A({
	      formats: {
	        full: "'kl'. HH:mm:ss zzzz",
	        long: "HH:mm:ss z",
	        medium: "HH:mm:ss",
	        short: "HH:mm"
	      },
	      defaultWidth: "full"
	    }),
	    dateTime: A({
	      formats: {
	        full: "{{date}} 'kl.' {{time}}",
	        long: "{{date}} 'kl.' {{time}}",
	        medium: "{{date}} {{time}}",
	        short: "{{date}} {{time}}"
	      },
	      defaultWidth: "full"
	    })
	  },
	  st = {
	    lastWeek: "'i' EEEE's kl.' p",
	    yesterday: "'igår kl.' p",
	    today: "'idag kl.' p",
	    tomorrow: "'imorgon kl.' p",
	    nextWeek: "EEEE 'kl.' p",
	    other: "P"
	  };
	var ut = {
	    code: "sv",
	    formatDistance: function (e, t, a) {
	      a = a || {
	        onlyNumeric: false
	      };
	      var n,
	        r = rt[e];
	      return n = "string" == typeof r ? r : 0 === t || t > 1 ? a.onlyNumeric ? r.plural.replace("{{count}}", t) : r.plural.replace("{{count}}", t < 13 ? it[t] : t) : r.singular, a.addSuffix ? a.comparison > 0 ? "om " + n : n + " sedan" : n;
	    },
	    formatLong: ot,
	    formatRelative: function (e, t, a, n) {
	      return st[e];
	    },
	    localize: {
	      ordinalNumber: function (e) {
	        var t = Number(e),
	          a = t % 100;
	        if (a > 20 || a < 10) switch (a % 10) {
	          case 1:
	          case 2:
	            return t + ":a";
	        }
	        return t + ":e";
	      },
	      era: K({
	        values: {
	          narrow: ["f.Kr.", "e.Kr."],
	          abbreviated: ["f.Kr.", "e.Kr."],
	          wide: ["före Kristus", "efter Kristus"]
	        },
	        defaultWidth: "wide"
	      }),
	      quarter: K({
	        values: {
	          narrow: ["1", "2", "3", "4"],
	          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
	          wide: ["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"]
	        },
	        defaultWidth: "wide",
	        argumentCallback: function (e) {
	          return Number(e) - 1;
	        }
	      }),
	      month: K({
	        values: {
	          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
	          abbreviated: ["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."],
	          wide: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]
	        },
	        defaultWidth: "wide"
	      }),
	      day: K({
	        values: {
	          narrow: ["S", "M", "T", "O", "T", "F", "L"],
	          short: ["sö", "må", "ti", "on", "to", "fr", "lö"],
	          abbreviated: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"],
	          wide: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"]
	        },
	        defaultWidth: "wide"
	      }),
	      dayPeriod: K({
	        values: {
	          narrow: {
	            am: "fm",
	            pm: "em",
	            midnight: "midnatt",
	            noon: "middag",
	            morning: "morg.",
	            afternoon: "efterm.",
	            evening: "kväll",
	            night: "natt"
	          },
	          abbreviated: {
	            am: "f.m.",
	            pm: "e.m.",
	            midnight: "midnatt",
	            noon: "middag",
	            morning: "morgon",
	            afternoon: "efterm.",
	            evening: "kväll",
	            night: "natt"
	          },
	          wide: {
	            am: "förmiddag",
	            pm: "eftermiddag",
	            midnight: "midnatt",
	            noon: "middag",
	            morning: "morgon",
	            afternoon: "eftermiddag",
	            evening: "kväll",
	            night: "natt"
	          }
	        },
	        defaultWidth: "wide",
	        formattingValues: {
	          narrow: {
	            am: "fm",
	            pm: "em",
	            midnight: "midnatt",
	            noon: "middag",
	            morning: "på morg.",
	            afternoon: "på efterm.",
	            evening: "på kvällen",
	            night: "på natten"
	          },
	          abbreviated: {
	            am: "fm",
	            pm: "em",
	            midnight: "midnatt",
	            noon: "middag",
	            morning: "på morg.",
	            afternoon: "på efterm.",
	            evening: "på kvällen",
	            night: "på natten"
	          },
	          wide: {
	            am: "fm",
	            pm: "em",
	            midnight: "midnatt",
	            noon: "middag",
	            morning: "på morgonen",
	            afternoon: "på eftermiddagen",
	            evening: "på kvällen",
	            night: "på natten"
	          }
	        },
	        defaultFormattingWidth: "wide"
	      })
	    },
	    match: {
	      ordinalNumber: J({
	        matchPattern: /^(\d+)(:a|:e)?/i,
	        parsePattern: /\d+/i,
	        valueCallback: function (e) {
	          return parseInt(e, 10);
	        }
	      }),
	      era: G({
	        matchPatterns: {
	          narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
	          abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
	          wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i
	        },
	        defaultMatchWidth: "wide",
	        parsePatterns: {
	          any: [/^f/i, /^[ev]/i]
	        },
	        defaultParseWidth: "any"
	      }),
	      quarter: G({
	        matchPatterns: {
	          narrow: /^[1234]/i,
	          abbreviated: /^q[1234]/i,
	          wide: /^[1234](:a|:e)? kvartalet/i
	        },
	        defaultMatchWidth: "wide",
	        parsePatterns: {
	          any: [/1/i, /2/i, /3/i, /4/i]
	        },
	        defaultParseWidth: "any",
	        valueCallback: function (e) {
	          return e + 1;
	        }
	      }),
	      month: G({
	        matchPatterns: {
	          narrow: /^[jfmasond]/i,
	          abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)\.?/i,
	          wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i
	        },
	        defaultMatchWidth: "wide",
	        parsePatterns: {
	          narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
	          any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
	        },
	        defaultParseWidth: "any"
	      }),
	      day: G({
	        matchPatterns: {
	          narrow: /^[smtofl]/i,
	          short: /^(sö|må|ti|on|to|fr|lö)/i,
	          abbreviated: /^(sön|mån|tis|ons|tor|fre|lör)/i,
	          wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i
	        },
	        defaultMatchWidth: "wide",
	        parsePatterns: {
	          any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
	        },
	        defaultParseWidth: "any"
	      }),
	      dayPeriod: G({
	        matchPatterns: {
	          any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i
	        },
	        defaultMatchWidth: "any",
	        parsePatterns: {
	          any: {
	            am: /^f/i,
	            pm: /^e/i,
	            midnight: /^midn/i,
	            noon: /^midd/i,
	            morning: /morgon/i,
	            afternoon: /eftermiddag/i,
	            evening: /kväll/i,
	            night: /natt/i
	          }
	        },
	        defaultParseWidth: "any"
	      })
	    },
	    options: {
	      weekStartsOn: 1,
	      firstWeekContainsDate: 4
	    }
	  },
	  lt = {
	    "hds-datepicker__day__wrapper-vhidden": "DatePicker-module_hds-datepicker__day__wrapper-vhidden__3Brgt",
	    "hds-datepicker__head__weekday-vhidden": "DatePicker-module_hds-datepicker__head__weekday-vhidden__Rkv0G",
	    pickerWrapper: "DatePicker-module_pickerWrapper__3-V56",
	    isVisible: "DatePicker-module_isVisible__2h96J",
	    "hds-datepicker": "DatePicker-module_hds-datepicker__b0Y3P",
	    "hds-datepicker__month-table": "DatePicker-module_hds-datepicker__month-table__1XIn_",
	    "hds-datepicker__head__weekday": "DatePicker-module_hds-datepicker__head__weekday__SwagI",
	    "hds-datepicker__day-cell": "DatePicker-module_hds-datepicker__day-cell__2YHPj",
	    "hds-datepicker__day": "DatePicker-module_hds-datepicker__day__2_8jB",
	    "hds-datepicker__day--selected": "DatePicker-module_hds-datepicker__day--selected__1QNyc",
	    "hds-datepicker__day--outside": "DatePicker-module_hds-datepicker__day--outside__1rUB8",
	    "hds-datepicker__day--today": "DatePicker-module_hds-datepicker__day--today__1bi5J",
	    "hds-datepicker__day__wrapper": "DatePicker-module_hds-datepicker__day__wrapper__2cskJ",
	    "hds-datepicker__navigation": "DatePicker-module_hds-datepicker__navigation__3KlG-",
	    "hds-datepicker__navigation__select": "DatePicker-module_hds-datepicker__navigation__select__2K75T",
	    "hds-datepicker__navigation__select-label": "DatePicker-module_hds-datepicker__navigation__select-label__3aEd9",
	    "hds-datepicker__navigation__select-icon": "DatePicker-module_hds-datepicker__navigation__select-icon__25qBZ",
	    "hds-datepicker__navigation__buttons": "DatePicker-module_hds-datepicker__navigation__buttons__2UkbB",
	    "hds-datepicker__bottom-buttons": "DatePicker-module_hds-datepicker__bottom-buttons__20j4Y",
	    "hds-datepicker__legend": "DatePicker-module_hds-datepicker__legend__IPZIQ",
	    "hds-datepicker__legend-item": "DatePicker-module_hds-datepicker__legend-item__DecTH",
	    "hds-datepicker__legend-item--color": "DatePicker-module_hds-datepicker__legend-item--color__37MDx",
	    "hds-datepicker__legend-item--selected": "DatePicker-module_hds-datepicker__legend-item--selected__rJ4KT"
	  };
	e$1('.DatePicker-module_hds-datepicker__day__wrapper-vhidden__3Brgt,.DatePicker-module_hds-datepicker__head__weekday-vhidden__Rkv0G{border:0;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:root{--date-background:transparent;--date-color:var(--color-black-90);--outside-date-background:transparent;--outside-date-color:var(--color-black-40);--selected-date-background:var(--color-bus);--selected-date-color:#fff;--table-width:100%;--horizontal-spacing:var(--spacing-s);--vertical-spacing:var(--spacing-s);--date-border:0}@media only screen and (min-width:576px){:root{--table-width:308px}}.DatePicker-module_pickerWrapper__3-V56{display:flex;justify-content:flex-end;opacity:0;pointer-events:none;transition:opacity .15s;visibility:hidden;will-change:opacity,visibility;z-index:900}.DatePicker-module_pickerWrapper__3-V56.DatePicker-module_isVisible__2h96J{opacity:1;visibility:visible}.DatePicker-module_pickerWrapper__3-V56>*{pointer-events:auto}.DatePicker-module_hds-datepicker__b0Y3P{background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.5);box-sizing:border-box;display:inline-block;min-width:calc(100vw - 2 * var(--spacing-s));padding:var(--vertical-spacing) var(--horizontal-spacing);position:relative;width:100%}@media only screen and (min-width:576px){.DatePicker-module_hds-datepicker__b0Y3P{min-width:calc(var(--table-width) + 2 * var(--spacing-s))}}.DatePicker-module_hds-datepicker__month-table__1XIn_{border-collapse:collapse;border-spacing:2px;max-width:var(--table-width);width:100%}.DatePicker-module_hds-datepicker__head__weekday__SwagI{font-size:var(--fontsize-body-m);font-weight:700;padding-bottom:6px;text-transform:uppercase}.DatePicker-module_hds-datepicker__day-cell__2YHPj{line-height:0;margin:0 4px 0 0;padding:3px;width:14.2857142857%}.DatePicker-module_hds-datepicker__day__2_8jB{--background-color:var(--date-background);--color:var(--date-color);align-items:center;appearance:none;background:transparent;border:0;box-sizing:border-box;display:inline-flex;line-height:1;margin:0;overflow:hidden;padding:0 0 100%;position:relative;vertical-align:middle;width:100%}.DatePicker-module_hds-datepicker__day--selected__1QNyc{--background-color:var(--selected-date-background);--color:var(--selected-date-color)}.DatePicker-module_hds-datepicker__day--outside__1rUB8{pointer-events:none;--background-color:var(--outside-date-background);--color:var(--outside-date-color)}.DatePicker-module_hds-datepicker__day--today__1bi5J:after{background:var(--color);bottom:7px;content:"";height:2px;left:8px;position:absolute;right:8px}.DatePicker-module_hds-datepicker__day__2_8jB:focus{box-shadow:0 0 0 3px var(--color-coat-of-arms);outline:none}.DatePicker-module_hds-datepicker__day__wrapper__2cskJ{align-items:center;background-color:var(--background-color);border:var(--date-border);color:var(--color);display:flex;font-size:1rem;inset:2px;justify-content:center;line-height:1rem;position:absolute}.DatePicker-module_hds-datepicker__day--selected__1QNyc .DatePicker-module_hds-datepicker__day__wrapper__2cskJ{background-color:var(--selected-date-background);border:0}.DatePicker-module_hds-datepicker__navigation__3KlG-{align-items:center;display:flex;margin-bottom:var(--spacing-s)}.DatePicker-module_hds-datepicker__navigation__select__2K75T{--icon-size:24px;margin-right:var(--spacing-s);position:relative}.DatePicker-module_hds-datepicker__navigation__select__2K75T select{height:100%;left:0;opacity:0;position:absolute;text-transform:capitalize;top:0;width:100%}.DatePicker-module_hds-datepicker__navigation__select-label__3aEd9{--label-spacing:0.3rem;font-size:var(--fontsize-body-xl);font-weight:700;padding:.15rem calc(var(--icon-size)) .15rem .3rem;pointer-events:none;position:relative;text-transform:capitalize}select:focus+.DatePicker-module_hds-datepicker__navigation__select-label__3aEd9{box-shadow:0 0 0 3px var(--color-coat-of-arms)}.DatePicker-module_hds-datepicker__navigation__select-icon__25qBZ{align-items:center;bottom:0;display:flex;justify-content:center;pointer-events:none;position:absolute;right:0;top:0;width:var(--icon-size)}.DatePicker-module_hds-datepicker__navigation__select-icon__25qBZ svg{height:var(--icon-size);width:var(--icon-size)}.DatePicker-module_hds-datepicker__navigation__buttons__2UkbB{display:flex;flex-grow:1;justify-content:flex-end;transform:translateY(-3px)}.DatePicker-module_hds-datepicker__navigation__buttons__2UkbB [aria-disabled=true]{color:var(--color-black-30);cursor:not-allowed}.DatePicker-module_hds-datepicker__navigation__buttons__2UkbB button{align-items:center;background:transparent;border:0;cursor:pointer;display:inline-flex;height:calc(25px + .15rem);justify-content:center;padding:.15rem;width:calc(25px + .15rem)}.DatePicker-module_hds-datepicker__navigation__buttons__2UkbB button:focus{box-shadow:0 0 0 3px var(--color-coat-of-arms);outline:none}.DatePicker-module_hds-datepicker__bottom-buttons__20j4Y{display:flex;flex-direction:row;justify-content:center;margin:var(--spacing-s)}.DatePicker-module_hds-datepicker__bottom-buttons__20j4Y button:nth-child(2){margin-left:var(--spacing-s)}.DatePicker-module_hds-datepicker__legend__IPZIQ{display:flex;flex-flow:row wrap;gap:var(--spacing-m);margin:var(--spacing-m) 0}@media only screen and (min-width:576px){.DatePicker-module_hds-datepicker__legend__IPZIQ{max-width:var(--table-width)}}.DatePicker-module_hds-datepicker__legend-item__DecTH{--legend-item-color-height:0.5rem;align-items:flex-start;display:flex;font-size:var(--fontsize-body-s);gap:var(--spacing-2-xs);line-height:var(--lineheight-l)}.DatePicker-module_hds-datepicker__legend-item--color__37MDx{background-color:var(--date-background);border:var(--date-border);color:var(--date-color);height:var(--legend-item-color-height);margin-top:calc(var(--fontsize-body-s) * var(--lineheight-l) / 2 - var(--legend-item-color-height) / 2);min-width:1.25rem}.DatePicker-module_hds-datepicker__legend-item--selected__rJ4KT{background-color:var(--selected-date-background);color:var(--selected-date-color)}');
	const dt = {
	    className: "",
	    style: {},
	    language: "en",
	    month: L(new Date()),
	    selectButtonLabel: "Select",
	    closeButtonLabel: "Close",
	    onCloseButtonClick: () => {}
	  },
	  ct = /*#__PURE__*/l$2.createContext(null);
	function mt(e, t) {
	  N(1, arguments);
	  var a = t || {},
	    n = a.locale,
	    r = n && n.options && n.options.weekStartsOn,
	    i = null == r ? 0 : j(r),
	    o = null == a.weekStartsOn ? i : j(a.weekStartsOn);
	  if (!(o >= 0 && o <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
	  var s = S(e),
	    u = s.getDay(),
	    l = (u < o ? 7 : 0) + u - o;
	  return s.setDate(s.getDate() - l), s.setHours(0, 0, 0, 0), s;
	}
	var ht = 6048e5;
	function ft(e, t) {
	  return N(1, arguments), function (e, t, a) {
	    N(2, arguments);
	    var n = mt(e, a),
	      r = mt(t, a),
	      i = n.getTime() - Se(n),
	      o = r.getTime() - Se(r);
	    return Math.round((i - o) / ht);
	  }(function (e) {
	    N(1, arguments);
	    var t = S(e),
	      a = t.getMonth();
	    return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(0, 0, 0, 0), t;
	  }(e), L(e), t) + 1;
	}
	function gt(e, t) {
	  return N(2, arguments), H(e, 7 * j(t));
	}
	function pt(e, t) {
	  N(2, arguments);
	  var a = S(e),
	    n = j(t);
	  if (isNaN(n)) return new Date(NaN);
	  if (!n) return a;
	  var r = a.getDate(),
	    i = new Date(a.getTime());
	  return i.setMonth(a.getMonth() + n + 1, 0), r >= i.getDate() ? i : (a.setFullYear(i.getFullYear(), i.getMonth(), r), a);
	}
	function vt(e) {
	  N(1, arguments);
	  var t = S(e),
	    a = t.getMonth();
	  return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(23, 59, 59, 999), t;
	}
	const kt = ({
	  locale: e
	}) => {
	  const t = function (e) {
	    const t = mt(new Date(), {
	        locale: e
	      }),
	      a = [];
	    for (let n = 0; n < 7; n++) {
	      const r = H(t, n);
	      a.push([Ie(r, "iiiiii", {
	        locale: e
	      }), Ie(r, "iiii", {
	        locale: e
	      })]);
	    }
	    return a;
	  }(e);
	  return /*#__PURE__*/l$2.createElement("thead", null, /*#__PURE__*/l$2.createElement("tr", null, t.map(e => /*#__PURE__*/l$2.createElement("th", {
	    key: e[0],
	    scope: "col",
	    className: lt["hds-datepicker__head__weekday"]
	  }, /*#__PURE__*/l$2.createElement("span", {
	    "aria-hidden": true
	  }, e[0]), /*#__PURE__*/l$2.createElement("span", {
	    className: lt["hds-datepicker__head__weekday-vhidden"]
	  }, e[1])))));
	};
	function _t(e) {
	  N(1, arguments);
	  var t = S(e),
	    a = t.getFullYear();
	  return t.setFullYear(a + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
	}
	function bt(e) {
	  N(1, arguments);
	  var t = S(e),
	    a = new Date(0);
	  return a.setFullYear(t.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
	}
	const wt = ({
	  month: e
	}) => {
	  const {
	      locale: t,
	      language: a,
	      handleMonthChange: n,
	      minDate: r,
	      maxDate: i
	    } = l$2.useContext(ct),
	    o$1 = e.getFullYear();
	  let s, u;
	  (!r || e > L(r)) && (s = pt(e, -1)), (!i || pt(e, 1) <= L(i)) && (u = pt(e, 1));
	  return /*#__PURE__*/l$2.createElement("div", {
	    className: lt["hds-datepicker__navigation"]
	  }, /*#__PURE__*/l$2.createElement("div", {
	    className: lt["hds-datepicker__navigation__select"]
	  }, /*#__PURE__*/l$2.createElement("select", {
	    "aria-label": {
	      en: "Month",
	      fi: "Kuukausi",
	      sv: "Månad"
	    }[a],
	    onChange: t => {
	      const a = new Date(e);
	      a.setMonth(Number(t.target.value)), n(a);
	    },
	    value: e.getMonth()
	  }, function (e) {
	    N(1, arguments);
	    var t = e || {},
	      a = S(t.start),
	      n = S(t.end).getTime();
	    if (!(a.getTime() <= n)) throw new RangeError("Invalid interval");
	    var r = [],
	      i = a;
	    for (i.setHours(0, 0, 0, 0), i.setDate(1); i.getTime() <= n;) r.push(S(i)), i.setMonth(i.getMonth() + 1);
	    return r;
	  }({
	    start: new Date(o$1, 0, 1),
	    end: new Date(o$1, 11, 31)
	  }).map(e => {
	    const a = e.getMonth(),
	      n = L(r) > e || vt(i) < e;
	    return /*#__PURE__*/l$2.createElement("option", {
	      value: a,
	      key: a,
	      disabled: n
	    }, Ie(e, "LLLL", {
	      locale: t
	    }));
	  })), /*#__PURE__*/l$2.createElement("div", {
	    className: lt["hds-datepicker__navigation__select-label"],
	    "aria-hidden": true
	  }, Ie(e, "LLL", {
	    locale: t
	  }), /*#__PURE__*/l$2.createElement("div", {
	    className: lt["hds-datepicker__navigation__select-icon"]
	  }, /*#__PURE__*/l$2.createElement(o, null)))), /*#__PURE__*/l$2.createElement("div", {
	    className: lt["hds-datepicker__navigation__select"]
	  }, /*#__PURE__*/l$2.createElement("select", {
	    "aria-label": {
	      en: "Year",
	      fi: "Vuosi",
	      sv: "År"
	    }[a],
	    onChange: t => {
	      const a = new Date(e);
	      a.setFullYear(Number(t.target.value)), n(a);
	    },
	    value: o$1
	  }, function (e) {
	    N(1, arguments);
	    var t = e || {},
	      a = S(t.start),
	      n = S(t.end).getTime();
	    if (!(a.getTime() <= n)) throw new RangeError("Invalid interval");
	    var r = [],
	      i = a;
	    for (i.setHours(0, 0, 0, 0), i.setMonth(0, 1); i.getTime() <= n;) r.push(S(i)), i.setFullYear(i.getFullYear() + 1);
	    return r;
	  }({
	    start: bt(r),
	    end: _t(i)
	  }).map(e => {
	    const t = e.getFullYear();
	    return /*#__PURE__*/l$2.createElement("option", {
	      value: t,
	      key: t
	    }, t);
	  })), /*#__PURE__*/l$2.createElement("div", {
	    className: lt["hds-datepicker__navigation__select-label"],
	    "aria-hidden": true
	  }, e.getFullYear(), /*#__PURE__*/l$2.createElement("div", {
	    className: lt["hds-datepicker__navigation__select-icon"]
	  }, /*#__PURE__*/l$2.createElement(o, null)))), /*#__PURE__*/l$2.createElement("div", {
	    className: lt["hds-datepicker__navigation__buttons"]
	  }, /*#__PURE__*/l$2.createElement("button", {
	    tabIndex: s ? 0 : -1,
	    "aria-disabled": !s,
	    type: "button",
	    onClick: e => {
	      s && n(s, e);
	    },
	    "aria-label": {
	      en: "Previous month",
	      fi: "Edellinen kuukausi",
	      sv: "Föregående månad"
	    }[a]
	  }, /*#__PURE__*/l$2.createElement(s$6, null)), /*#__PURE__*/l$2.createElement("button", {
	    tabIndex: u ? 0 : -1,
	    "aria-disabled": !u,
	    type: "button",
	    onClick: e => {
	      u && n(u, e);
	    },
	    "aria-label": {
	      en: "Next month",
	      fi: "Seuraava kuukausi",
	      sv: "Nästa månad"
	    }[a]
	  }, /*#__PURE__*/l$2.createElement(s$5, null))));
	};
	function yt(e, t) {
	  N(1, arguments);
	  var a = t || {},
	    n = a.locale,
	    r = n && n.options && n.options.weekStartsOn,
	    i = null == r ? 0 : j(r),
	    o = null == a.weekStartsOn ? i : j(a.weekStartsOn);
	  if (!(o >= 0 && o <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
	  var s = S(e),
	    u = s.getDay(),
	    l = 6 + (u < o ? -7 : 0) - (u - o);
	  return s.setDate(s.getDate() + l), s.setHours(23, 59, 59, 999), s;
	}
	function Dt(e) {
	  return N(1, arguments), Math.floor(function (e) {
	    return N(1, arguments), S(e).getTime();
	  }(e) / 1e3);
	}
	function Mt(e, t) {
	  N(2, arguments);
	  var a = U(e),
	    n = U(t);
	  return a.getTime() === n.getTime();
	}
	function Pt(e) {
	  return N(1, arguments), Mt(e, Date.now());
	}
	const Tt = ({
	    day: e
	  }) => {
	    const {
	        focusedDate: t,
	        currentMonth: a,
	        currentMonthAvailableDays: n,
	        selectedDate: r,
	        setFocusedDate: i,
	        locale: o,
	        onDayClick: s,
	        handleKeyboardNavigation: u,
	        setDateClassName: d,
	        setDateAriaDescribedBy: c
	      } = l$2.useContext(ct),
	      m = l$2.useRef(),
	      h = O(e, L(a)),
	      f = z(e, vt(a)),
	      g = h || f,
	      p = g,
	      v = e.getDate(),
	      k = n.includes(v),
	      _ = g || !k,
	      b = s && !_,
	      w = !_ && !g && d && d(e),
	      D = b ? "button" : "span";
	    let M = -1;
	    const P = t && !O(t, L(a)) && !z(t, vt(a));
	    (!P && (1 === v || v === n[0]) || P && Mt(e, t)) && (M = 0);
	    const T = {
	      "aria-describedby": c ? c(e) : void 0,
	      "aria-disabled": !b || void 0,
	      "aria-hidden": p || void 0,
	      "aria-pressed": Mt(e, r),
	      disabled: _ || void 0,
	      onClick: b ? t => {
	        t.stopPropagation(), t.preventDefault(), s(e, t);
	      } : void 0,
	      onFocus: () => i(e),
	      onKeyDown: b ? u : void 0,
	      ref: b ? m : void 0,
	      tabIndex: b ? M : void 0,
	      className: r$5(lt["hds-datepicker__day"], w, Pt(e) && lt["hds-datepicker__day--today"], Mt(e, r) && lt["hds-datepicker__day--selected"], _ && lt["hds-datepicker__day--disabled"], _ && lt["hds-datepicker__day--outside"]),
	      "data-date": Ie(e, "yyyy-MM-dd")
	    };
	    return /*#__PURE__*/l$2.createElement(D, Object.assign({}, T), /*#__PURE__*/l$2.createElement("span", {
	      className: lt["hds-datepicker__day__wrapper"],
	      "aria-hidden": true
	    }, Ie(e, "d", {
	      locale: o
	    })), /*#__PURE__*/l$2.createElement("span", {
	      className: lt["hds-datepicker__day__wrapper-vhidden"]
	    }, Ie(e, "LLLL d", {
	      locale: o
	    })));
	  },
	  xt = e => {
	    const {
	        week: t
	      } = e,
	      {
	        locale: a
	      } = l$2.useContext(ct),
	      n = function (e, t) {
	        N(1, arguments);
	        var a = e || {},
	          n = S(a.start),
	          r = S(a.end).getTime();
	        if (!(n.getTime() <= r)) throw new RangeError("Invalid interval");
	        var i = [],
	          o = n;
	        o.setHours(0, 0, 0, 0);
	        var s = 1;
	        if (isNaN(s)) throw new RangeError("`options.step` must be a number greater than 1");
	        for (; o.getTime() <= r;) i.push(S(o)), o.setDate(o.getDate() + s), o.setHours(0, 0, 0, 0);
	        return i;
	      }({
	        start: mt(t, {
	          locale: a
	        }),
	        end: yt(t, {
	          locale: a
	        })
	      });
	    return /*#__PURE__*/l$2.createElement("tr", null, n.map(e => /*#__PURE__*/l$2.createElement("td", {
	      className: lt["hds-datepicker__day-cell"],
	      key: Dt(e),
	      "aria-current": Pt(e) ? "date" : void 0
	    }, /*#__PURE__*/l$2.createElement(Tt, {
	      day: e
	    }))));
	  },
	  Ct = (e, t) => {
	    const a = L(e),
	      n = vt(e),
	      r = ft(e, {
	        weekStartsOn: 1
	      });
	    return function (e, t) {
	      N(1, arguments);
	      var a = e || {},
	        n = S(a.start),
	        r = S(a.end),
	        i = r.getTime();
	      if (!(n.getTime() <= i)) throw new RangeError("Invalid interval");
	      var o = mt(n, t),
	        s = mt(r, t);
	      o.setHours(15), s.setHours(15), i = s.getTime();
	      for (var u = [], l = o; l.getTime() <= i;) l.setHours(0), u.push(S(l)), (l = gt(l, 1)).setHours(15);
	      return u;
	    }({
	      start: a,
	      end: 6 === r ? n : function (e, t) {
	        if (N(2, arguments), !t || "object" != typeof t) return new Date(NaN);
	        var a = "years" in t ? j(t.years) : 0,
	          n = "months" in t ? j(t.months) : 0,
	          r = "weeks" in t ? j(t.weeks) : 0,
	          i = "days" in t ? j(t.days) : 0,
	          o = "hours" in t ? j(t.hours) : 0,
	          s = "minutes" in t ? j(t.minutes) : 0,
	          u = "seconds" in t ? j(t.seconds) : 0,
	          l = S(e),
	          d = n || a ? pt(l, n + 12 * a) : l,
	          c = i || r ? H(d, i + 7 * r) : d,
	          m = 1e3 * (u + 60 * (s + 60 * o));
	        return new Date(c.getTime() + m);
	      }(n, {
	        weeks: 6 - r
	      })
	    }, {
	      locale: t
	    });
	  },
	  Et = e => {
	    const {
	        locale: t
	      } = l$2.useContext(ct),
	      {
	        month: a
	      } = e,
	      n = Ct(a, t);
	    return /*#__PURE__*/l$2.createElement("div", null, /*#__PURE__*/l$2.createElement(wt, {
	      month: a
	    }), /*#__PURE__*/l$2.createElement("table", {
	      className: lt["hds-datepicker__month-table"]
	    }, /*#__PURE__*/l$2.createElement(kt, {
	      locale: t
	    }), /*#__PURE__*/l$2.createElement("tbody", null, n.map(e => /*#__PURE__*/l$2.createElement(xt, {
	      key: e.toString(),
	      week: e
	    })))));
	  },
	  Wt = ({
	    legend: e
	  }) => 0 === (null == e ? void 0 : e.length) ? null : /*#__PURE__*/l$2.createElement("div", {
	    className: lt["hds-datepicker__legend"]
	  }, e.map(e => /*#__PURE__*/l$2.createElement("div", {
	    key: e.elementId,
	    id: e.elementId,
	    className: lt["hds-datepicker__legend-item"]
	  }, /*#__PURE__*/l$2.createElement("span", {
	    className: r$5(lt["hds-datepicker__legend-item--color"], e.selected && lt["hds-datepicker__legend-item--selected"], e.relatedClassName)
	  }), e.label))),
	  jt = 32,
	  Nt = 37,
	  St = 38,
	  Ht = 39,
	  Yt = 40,
	  Bt = e => {
	    const {
	        initialMonth: t = new Date(),
	        onMonthChange: a,
	        onDaySelect: n,
	        language: r,
	        minDate: i,
	        maxDate: o,
	        onCloseButtonClick: s,
	        selected: u,
	        disableConfirmation: d,
	        selectButtonLabel: g,
	        closeButtonLabel: p,
	        isDateDisabledBy: v,
	        open: _,
	        inputRef: b,
	        toggleButton: w,
	        setDateClassName: C,
	        legend: E,
	        setDateAriaDescribedBy: W
	      } = Object.assign(Object.assign({}, dt), e),
	      j = l$2.useRef(),
	      N = l$2.useRef(),
	      [S, I] = l$2.useState(L(u || t)),
	      [q, A] = l$2.useState(null),
	      [R, X] = l$2.useState(u || null),
	      [Q, K] = l$2.useState(false);
	    l$2.useEffect(() => {
	      u && F(u) && z(Y(u), U(i)) && O(U(u), Y(o)) ? (X(u), I(L(u))) : (X(null), I(L(t)));
	    }, [u, o, i, t]), l$2.useEffect(() => {
	      if (q) {
	        const e = j.current.querySelector(`button[data-date='${Ie(q, "yyyy-MM-dd")}']`);
	        e && e.focus();
	      }
	    }, [q]), l$2.useEffect(() => {
	      const e = e => {
	        if (true === _) {
	          const t = N.current && !N.current.contains(e.target),
	            a = w && (w === e.target || w.contains(e.target));
	          if (t && !a) {
	            const e = null === document.activeElement || "BODY" === document.activeElement.tagName;
	            s(e);
	          }
	        }
	      };
	      return window.addEventListener("click", e), () => {
	        window.removeEventListener("click", e);
	      };
	    }), l$2.useEffect(() => {
	      const e = N.current,
	        t = t => {
	          if (!("Tab" === t.key || 9 === t.keyCode)) return;
	          const a = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
	            n = a[0],
	            r = a[a.length - 1];
	          t.shiftKey ? document.activeElement === n && (r.focus(), t.preventDefault()) : document.activeElement === r && (n.focus(), t.preventDefault());
	        };
	      return e && e.addEventListener("keydown", t), () => {
	        e && e.removeEventListener("keydown", t);
	      };
	    }, []), l$2.useEffect(() => {
	      let e;
	      if (true === _ && N.current) {
	        const t = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
	          a = N.current.querySelector(t);
	        a && a.focus(), e = setTimeout(() => {
	          (e => {
	            const t = ("scrollBehavior" in document.documentElement.style);
	            e.getBoundingClientRect().bottom > window.innerHeight && e.scrollIntoView(!!t && {
	              block: "end",
	              inline: "nearest",
	              behavior: "smooth"
	            }), e.getBoundingClientRect().top < 0 && e.scrollIntoView(!t || {
	              block: "start",
	              inline: "nearest",
	              behavior: "smooth"
	            });
	          })(N.current);
	        }, 30);
	      }
	      return () => {
	        clearTimeout(e);
	      };
	    }, [_]);
	    const V = (e, t) => {
	        const a = H(t, e);
	        return v(a) ? V(e, a) : a;
	      },
	      J = e => {
	        if (null !== q) {
	          const t = H(q, e),
	            a = v && v(t) ? V(e, t) : t,
	            n = z(Y(a), U(i)),
	            r = O(U(a), Y(o));
	          n && r && (I(L(a)), A(a));
	        }
	      },
	      G = (e, t) => {
	        X(e), n && d && n(e, t);
	      },
	      Z = [...Array(B(S)).keys()].map((e, t) => H(S, t)),
	      $ = (v ? Z.filter(e => !v(e)) : Z).filter(e => z(Y(e), U(i)) && O(U(e), Y(o))).map(e => e.getDate()),
	      ee = l$2.useMemo(() => ({
	        name: "beforePopperWrite",
	        enabled: true,
	        phase: "beforeWrite",
	        fn: () => {
	          Q || K(true);
	        }
	      }), []),
	      {
	        styles: te,
	        attributes: ae
	      } = usePopper(b.current, N.current, {
	        placement: "bottom-end",
	        modifiers: [ee, {
	          name: "offset",
	          options: {
	            offset: [0, 5]
	          }
	        }, {
	          name: "flip",
	          options: {
	            rootBoundary: "document",
	            fallbackPlacements: ["bottom-start", "top-end"]
	          }
	        }]
	      });
	    return /*#__PURE__*/l$2.createElement("div", Object.assign({
	      ref: N,
	      className: r$5(lt.pickerWrapper, Q && lt.isVisible),
	      role: "dialog",
	      "aria-modal": "true",
	      "aria-hidden": !_ || void 0,
	      style: te.popper
	    }, ae.popper), /*#__PURE__*/l$2.createElement(ct.Provider, {
	      value: {
	        datepickerRef: j,
	        minDate: i,
	        maxDate: o,
	        currentMonth: S,
	        currentMonthAvailableDays: $,
	        focusedDate: q,
	        selectedDate: R,
	        locale: (ne = r, {
	          en: qe,
	          fi: nt,
	          sv: ut
	        }[ne]),
	        language: r,
	        isDateDisabledBy: v,
	        setCurrentMonth: I,
	        setFocusedDate: A,
	        setSelectedDate: X,
	        onDayClick: G,
	        handleKeyboardNavigation: e => {
	          let t = true;
	          switch (e.keyCode) {
	            case Ht:
	              J(1);
	              break;
	            case Nt:
	              J(-1);
	              break;
	            case St:
	              J(-7);
	              break;
	            case Yt:
	              J(7);
	              break;
	            case jt:
	              G(q, null);
	              break;
	            default:
	              t = false;
	          }
	          true === t && e.preventDefault();
	        },
	        handleMonthChange: (e, t) => {
	          I(e), "function" == typeof a && a(e, t);
	        },
	        setDateClassName: C,
	        legend: E,
	        setDateAriaDescribedBy: W
	      }
	    }, /*#__PURE__*/l$2.createElement("div", {
	      className: lt["hds-datepicker"],
	      ref: j
	    }, /*#__PURE__*/l$2.createElement(Et, {
	      month: S
	    }), E && /*#__PURE__*/l$2.createElement(Wt, {
	      legend: E
	    }), /*#__PURE__*/l$2.createElement("div", {
	      className: lt["hds-datepicker__bottom-buttons"]
	    }, !d && /*#__PURE__*/l$2.createElement(u$1, {
	      disabled: !R,
	      "aria-disabled": !R,
	      size: l$1.Small,
	      variant: n$2.Secondary,
	      iconStart: /*#__PURE__*/l$2.createElement(s$3, null),
	      onClick: e => {
	        n && n(R, e);
	      },
	      "data-testid": "selectButton"
	    }, g), /*#__PURE__*/l$2.createElement(u$1, {
	      size: l$1.Small,
	      variant: n$2.Supplementary,
	      iconStart: /*#__PURE__*/l$2.createElement(s$2, null),
	      onClick: () => s(),
	      "data-testid": "closeButton"
	    }, p)))));
	    var ne;
	  },
	  Ut = /*#__PURE__*/l$2.forwardRef((d, p) => {
	    var {
	        closeButtonLabel: k,
	        disableConfirmation: _ = false,
	        disableDatePicker: b = false,
	        initialMonth: w,
	        language: y = "en",
	        openButtonAriaLabel: D,
	        selectButtonLabel: M,
	        defaultValue: P,
	        value: T,
	        minDate: x,
	        maxDate: j,
	        isDateDisabledBy: N,
	        setDateClassName: S,
	        legend: H,
	        setDateAriaDescribedBy: Y
	      } = d,
	      B = o$1(d, ["closeButtonLabel", "disableConfirmation", "disableDatePicker", "initialMonth", "language", "openButtonAriaLabel", "selectButtonLabel", "defaultValue", "value", "minDate", "maxDate", "isDateDisabledBy", "setDateClassName", "legend", "setDateAriaDescribedBy"]);
	    const U = "d.M.yyyy",
	      z = l$2.useRef(),
	      O = l$2.useRef(false),
	      [L, F] = l$2.useState(T || P || ""),
	      [I, q] = l$2.useState(false),
	      A = () => {
	        var e;
	        return null === (e = z.current) || void 0 === e ? void 0 : e.parentNode.querySelector("button");
	      };
	    l$2.useEffect(() => {
	      O.current ? F(T || "") : O.current = true;
	    }, [T]);
	    const R = (e = true) => {
	      if (q(false), z.current && e) {
	        const e = A();
	        e && e.focus();
	      }
	    };
	    l$2.useEffect(() => {
	      p && t(p, z);
	    }, [z, p]);
	    const X = l$2.useCallback(e => parse(e, U, new Date()), [U]),
	      Q = e => {
	        const t = e.replace(/[^0-9.]+/g, "");
	        F(t);
	        const a = X(t);
	        B.onChange && B.onChange(t, a);
	      },
	      K = X(L),
	      V = A(),
	      J = l$2.useMemo(() => x && isValid(x) ? x : startOfMonth(subYears(new Date(), 10)), [x]),
	      G = l$2.useMemo(() => j && isValid(j) ? j : endOfMonth(addYears(max([J, new Date()]), 10)), [j]),
	      Z = l$2.useMemo(() => isValid(K) ? K : void 0, [K]),
	      $ = l$2.useMemo(() => w || new Date(), [w]);
	    return /*#__PURE__*/l$2.createElement("div", {
	      lang: y,
	      className: W
	    }, /*#__PURE__*/l$2.createElement(i, Object.assign({}, B, {
	      buttonIcon: b ? void 0 : /*#__PURE__*/l$2.createElement(s$4, null),
	      buttonAriaLabel: b ? void 0 : D || {
	        en: "Choose date",
	        fi: "Valitse päivämäärä",
	        sv: "Välj datum"
	      }[y],
	      onButtonClick: b ? void 0 : e => {
	        e.preventDefault(), q(!I);
	      },
	      onChange: e => {
	        Q(e.target.value);
	      },
	      value: L,
	      ref: z
	    }), false === b && I && /*#__PURE__*/l$2.createElement(Bt, {
	      language: y,
	      disableConfirmation: _,
	      selected: Z,
	      initialMonth: $,
	      onDaySelect: e => {
	        R(), Q(format(e, U));
	      },
	      onCloseButtonClick: e => R(e),
	      selectButtonLabel: M || {
	        en: "Select",
	        fi: "Valitse",
	        sv: "Välj"
	      }[y],
	      closeButtonLabel: k || {
	        en: "Close",
	        fi: "Sulje",
	        sv: "Stäng"
	      }[y],
	      minDate: J,
	      maxDate: G,
	      isDateDisabledBy: N,
	      open: I,
	      inputRef: z,
	      toggleButton: V,
	      setDateClassName: S,
	      legend: H,
	      setDateAriaDescribedBy: Y
	    })));
	  });

	function handleContactForm7Events({
	  form,
	  inputName,
	  events,
	  updateValue,
	  setErrorText
	}) {
	  const {
	    formInvalid,
	    formSpam,
	    formSent,
	    formFailed,
	    formSubmit
	  } = events || {};
	  if (formInvalid) {
	    form.addEventListener(formInvalid, e => {
	      const {
	        apiResponse
	      } = e.detail || {};
	      const {
	        invalid_fields
	      } = apiResponse || {};
	      if (Array.isArray(invalid_fields)) {
	        const invalidField = invalid_fields.find(invalid => invalid.field === inputName);
	        invalidField && setErrorText(invalidField.message);
	      }
	    });
	  }

	  // if (formSpam) {
	  //   form.addEventListener(formSpam, (e) => console.log(e));
	  // }

	  if (formSent) {
	    form.addEventListener(formSent, e => {
	      const {
	        apiResponse
	      } = e.detail || {};
	      const {
	        status
	      } = apiResponse || {};
	      'mail_sent' === status && updateValue('');
	    });
	  }

	  // if (formFailed) {
	  //   form.addEventListener(formFailed, (e) => console.log(e));
	  // }

	  // if (formSubmit) {
	  //   form.addEventListener(formFailed, (e) => console.log(e));
	  // }
	}

	function createDatePicker() {
	  return ({
	    element,
	    config,
	    events,
	    input
	  }) => {
	    const [currentDate, setCurrentDate] = l$2.useState(config.value);
	    const [errorText, setErrorText] = l$2.useState(null);
	    const updateValue = value => {
	      try {
	        setErrorText(null);
	        setCurrentDate(value);
	      } catch ({
	        name,
	        message
	      }) {
	        setErrorText(message);
	      }
	    };
	    const partsToDate = ({
	      year,
	      month,
	      day
	    }) => {
	      return new Date(year, month - 1, day);
	    };
	    const ymdToDate = date => {
	      if (typeof date === 'string' || date instanceof String) {
	        let parts = date.split('-');
	        return partsToDate({
	          year: parts[0],
	          month: parts[1],
	          day: parts[2]
	        });
	      }
	      return date;
	    };
	    l$2.useEffect(() => {
	      let form = element.closest('form');
	      if (config.handler && 'contactForm7' === config.handler) {
	        handleContactForm7Events({
	          form,
	          inputName: input.name,
	          events,
	          updateValue,
	          setErrorText
	        });
	      }
	    }, []);
	    if (input.minDate) {
	      input.minDate = ymdToDate(input.minDate);
	    }
	    if (input.maxDate) {
	      input.maxDate = ymdToDate(input.maxDate);
	    }
	    return React.createElement(Ut, {
	      ...input,
	      errorText,
	      value: currentDate,
	      onChange: updateValue
	    });
	  };
	}

	document.addEventListener('DOMContentLoaded', event => {
	  const components = {
	    DatePicker: createDatePicker()
	  };
	  document.querySelectorAll('[data-hds-react]').forEach(setupComponent);
	  function setupComponent(root) {
	    let component = createComponent(root);
	    if (component) {
	      renderComponent(root, component);
	      cleanupRoot(root);
	    }
	  }
	  function createComponent(root) {
	    return components[root.dataset.hdsReact] && React.createElement(components[root.dataset.hdsReact], createComponentConfig(root));
	  }
	  function createComponentConfig(root) {
	    let config = {
	      element: root
	    };
	    try {
	      config = {
	        ...config,
	        ...JSON.parse(root.dataset.hdsComponent)
	      };
	    } catch (error) {}
	    return config;
	  }
	  function renderComponent(root, component) {
	    ReactDOM.createRoot(root).render(component);
	  }
	  function cleanupRoot(root) {
	    root.removeAttribute('data-hds-react');
	    root.removeAttribute('data-hds-component');
	  }
	});

})(React, lodash);

(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{424:function(e,t,r){"use strict";r.r(t);var a=r(1),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),r("p",[e._v("本文档主要介绍 Weex 的重大变更，对于详细变更日志，请参考 "),r("a",{attrs:{href:"https://github.com/apache/incubator-weex/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Weex GitHub page"),r("OutboundLink")],1),e._v(".")]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),r("p",[e._v("在 "),r("code",[e._v("0.28.0")]),e._v(" 之前， Weex Android 依赖并且将"),r("a",{attrs:{href:"https://github.com/alibaba/weex_js_engine/tree/bridge_branch_mergeTimer",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScriptCore"),r("OutboundLink")],1),e._v(" 作为 Weex 在 JCenter 上的发布产物的一部分，这种方式有如下缺陷：")]),r("ul",[r("li",[e._v("JavaScriptCore 属于双重授权项目，一部分以 BSD 形式授权，另一部分以 LGPL 形式授权，而这与 ASF 的 "),r("a",{attrs:{href:"https://apache.org/legal/resolved.html#category-a",target:"_blank",rel:"noopener noreferrer"}},[e._v("License 授权政策"),r("OutboundLink")],1),e._v("相违背。")]),r("li",[e._v("如果将 JavaScriptCore 包含在 Weex 的 JCenter 发布产物中，会剥夺用户选择 JavaScript 解析引擎的自由。")]),r("li",[e._v("Weex 内置的 JavaScriptCore 是基于 "),r("a",{attrs:{href:"https://svn.webkit.org/repository/webkit/releases/WebKitGTK/webkit-2.17.4/Source/JavaScriptCore",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScriptCore 2016版"),r("OutboundLink")],1),e._v(" 进行了裁剪，已经数年未更新。")])]),r("p",[e._v("基于上述原因，从 Weex 0.28.0 开始，JavaScript 引擎将"),r("strong",[e._v("不再")]),e._v("内置于 Weex 在 JCenter 上的发布产物中，用户可以自由选择它们喜欢的 JavaScript 引擎，只要这个引擎遵循了"),r("a",{attrs:{href:"https://svn.webkit.org/repository/webkit/releases/WebKitGTK/webkit-2.27.1/Source/JavaScriptCore/API/",target:"_blank",rel:"noopener noreferrer"}},[e._v("指定接口"),r("OutboundLink")],1),e._v("。")]),r("p",[e._v("这意味着用户需要在它们的 App 中内置 JavaScript 引擎，否则 Weex 将无法运行。对于不知道如何选择 JavaScript 用户的引擎，可以在 App 的 build.gradle 中引入下述脚本：")]),e._m(13),r("p",[e._v("这个脚本将会下载并内置"),r("a",{attrs:{href:"https://www.npmjs.com/package/jsc-android/v/241213.1.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("jsc-android"),r("OutboundLink")],1),e._v("到你的 App 中。上述脚本仅为演示时使用，用户依然有权利在 App 中选择其符合其诉求的 JavaScript 引擎。")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本","aria-hidden":"true"}},[this._v("#")]),this._v(" 版本")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_0-28"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-28","aria-hidden":"true"}},[this._v("#")]),this._v(" 0.28")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("下述在 0.28 中的重大变更只影响 Android 用户。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"android"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android","aria-hidden":"true"}},[this._v("#")]),this._v(" Android")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"java-包名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-包名","aria-hidden":"true"}},[this._v("#")]),this._v(" Java 包名")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("由于 Weex 在捐献给 ASF(Apache Software Foundation) 前隶属于阿里巴巴集团(淘宝的母公司)，因此在 "),t("code",[this._v("0.28.0")]),this._v(" 之前，Android 代码中的 Java 包名是 "),t("code",[this._v("com.taobao.weex")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("从 "),r("code",[e._v("0.28.0")]),e._v(" 之后，Android 代码中的 Java 包名被修改为 "),r("code",[e._v("org.apache.weex")]),e._v("。考虑到这个升级会给现有用户来不兼容，weex 提供了 "),r("code",[e._v("org.apache.weex:sdk_legacy")]),e._v(" 作为[兼容性方案]((#groupid-and-artifactid-in-jcenter)。这个兼容性方案后续可能不再维护，请尽可能的依 "),r("code",[e._v("org.apache.weex:sdk")]),e._v(" 并将现有代码的包名升级为 "),r("code",[e._v("org.apache.weex")]),e._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"groupid-and-artifactid-in-jcenter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#groupid-and-artifactid-in-jcenter","aria-hidden":"true"}},[this._v("#")]),this._v(" GroupId and artifactId in JCenter")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("由于 Weex 在捐献给 ASF(Apache Software Foundation) 前隶属于阿里巴巴集团(淘宝的母公司)，因此在 "),r("code",[e._v("0.28.0")]),e._v(" 之前，Android 代码中的 Java 包名是 "),r("code",[e._v("com.taobao.weex")]),e._v("，因此在 "),r("code",[e._v("0.28.0")]),e._v(" 之前，Weex 在JCenter 上的发布产物为 "),r("code",[e._v("com.taobao.android:weex_sdk")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("从 "),t("code",[this._v("0.28.0")]),this._v(" 之后，Weex 在 JCenter 上的发布变更为如下形式：")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("code",[e._v("org.apache.weex:sdk")]),e._v(" 是稳定且持续维护的 aar 包，在这个包中所有的 Java 类在 "),r("code",[e._v("org.apache.weex")]),e._v(" 包名下。")]),r("li",[r("code",[e._v("org.apache.weex:sdk_legacy")]),e._v(" 是兼容性 aar 包，在这包中所有的 Java 类在 "),r("code",[e._v("com.taobao.weex")]),e._v(" 包名下。兼容性包后续可能不再维护，请尽量升级到 "),r("code",[e._v("org.apache.weex:sdk")]),e._v(" 上。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"javascript-interpreter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript-interpreter","aria-hidden":"true"}},[this._v("#")]),this._v(" JavaScript Interpreter")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("apply from: 'https://raw.githubusercontent.com/apache/incubator-weex/release/0.28/android/sdk/buildSrc/download_jsc.gradle'\n")])])}],!1,null,null,null);t.default=i.exports}}]);
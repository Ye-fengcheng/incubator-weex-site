(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{511:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),n("div",{staticClass:"danger custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),n("p",[n("a",{attrs:{href:"https://github.com/weexteam/weex-devtools-android",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Weex DevTools"),n("OutboundLink")],1),t._v(" is a third party plugin, and is not developed nor maintained by Apache Weex.")])]),n("p",[t._v("Weex devtools is a custom devtools for weex that implements Chrome Debugging Protocol inspired by Stetho, it is designed to help you quickly inspect your app and debug your JS bundle source in a Chrome web page. To make it work, at first you must integrate devtool to your App. This page will help you integrate devtool to your Android App.")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),n("ul",[n("li",[n("p",[t._v("From source code")]),n("p",[t._v("you need to copy the dir of "),n("a",{attrs:{href:"https://github.com/weexteam/weex_devtools_android/tree/master/inspector",target:"_blank",rel:"noopener noreferrer"}},[t._v("inspector"),n("OutboundLink")],1),t._v(" to the same dir of your app and add "),n("code",[t._v('include ":inspector"')]),t._v("in your project's "),n("code",[t._v("settings.gradle")]),t._v(" file just like playground have done, then add dependency in your app's "),n("code",[t._v("build.gralde")]),t._v(".")]),t._m(10)]),t._m(11)]),t._m(12),t._m(13),n("p",[t._v("The easiest way is reuse the code of playground. On the other hand QR code is not necessary, if you review the source code you can draw a conclusion that QR CODE is just a way to set devtools server address. There are two examples of how to open debug modes in the Playground App:")]),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),n("p",[t._v("You can report issues and bugs "),n("a",{attrs:{href:"https://github.com/weexteam/weex_devtools_android/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(". We will reply as soon as possible.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"integrate-devtool-to-android"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrate-devtool-to-android","aria-hidden":"true"}},[this._v("#")]),this._v(" Integrate Devtool to Android")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"version-compatibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version-compatibility","aria-hidden":"true"}},[this._v("#")]),this._v(" Version compatibility")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("weex sdk")]),n("th",[t._v("weex inspector")])])]),n("tbody",[n("tr",[n("td",[t._v("0.16.0+")]),n("td",[t._v("0.12.1")])]),n("tr",[n("td",[t._v("0.17.0+")]),n("td",[t._v("0.13.2")])]),n("tr",[n("td",[t._v("0.18.0+")]),n("td",[t._v("0.13.4-multicontext")])]),n("tr",[n("td",[t._v("0.19.0+")]),n("td",[t._v("0.18.68")])]),n("tr",[n("td",[t._v("0.20.3.0-beta")]),n("td",[t._v("0.20.3.0-beta")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"integrate-to-android"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrate-to-android","aria-hidden":"true"}},[this._v("#")]),this._v(" Integrate to Android")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"installing-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Dependencies")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Weex Devtools depend on "),s("code",[this._v("weex_inspector")]),this._v(". I strongly recommend you use the latest version since both Weex SDK and devtools are developed iteratively and rapidly.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("From Gradle")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(" dependencies {\n    compile 'com.taobao.android:weex_inspector:0.18.10'\n }\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("From Maven")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("  <dependency>\n    <groupId>com.taobao.android</groupId>\n    <artifactId>weex_inspector</artifactId>\n    <version>0.18.10</version>\n    <type>pom</type>\n  </dependency>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-gradle extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("dependencies {\n  compile project(':inspector')\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("need include okhttp 2.3.0")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(" dependencies {\n    compile 'com.squareup.okhttp:okhttp:2.3.0'\n    compile 'com.squareup.okhttp:okhttp-ws:2.3.0'\n }\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"adding-debug-mode-switch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-debug-mode-switch","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding Debug mode switch")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Demo 1: Set the debug mode via "),s("code",[this._v("XXXApplication")]),s("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApplication")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initDebugEnvironment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx.xxx.xxx.xxx"')]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*"DEBUG_SERVER_HOST"*/')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//WXSDKEngine.reload();")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initDebugEnvironment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" enable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  WXEnvironment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sRemoteDebugMode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" enable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  WXEnvironment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sRemoteDebugProxyUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ws://"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" host "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('":8088/debugProxy/native"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Demo 2: Set the debug mode by scan QR code "),s("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WXEnvironment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isApkDebugable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  String devToolUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uri"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQueryParameter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_wx_devtool"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("TextUtils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("devToolUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    WXEnvironment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sRemoteDebugProxyUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" devToolUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    WXEnvironment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sDebugServerConnectable "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    WXSDKEngine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("XXXXX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Note：Auto refresh page via "),s("code",[this._v("ACTION_DEBUG_INSTANCE_REFRESH")]),this._v(" broadcast")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("ACTION_DEBUG_INSTANCE_REFRESH")]),this._v(" can be broadcast messages when the debug mode is switched or Chrome page refresh. You can use this mechanism to inform the current page to refresh in time.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-Java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RefreshBroadcastReceiver")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BroadcastReceiver")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onReceive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Context context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Intent intent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IWXDebugProxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_INSTANCE_RELOAD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n              IWXDebugProxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_DEBUG_INSTANCE_REFRESH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connect to debug server success"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mUri "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextUtils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mUri"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScheme")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" TextUtils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mUri"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScheme")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            String weexTpl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mUri"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQueryParameter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Constants"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WEEX_TPL_KEY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            String url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TextUtils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weexTpl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" mUri"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" weexTpl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadWXfromService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadWXfromLocal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"known-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Known Issues")])}],!1,null,null,null);s.default=e.exports}}]);
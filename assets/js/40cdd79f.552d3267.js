(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[296],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return y}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),y=r,g=m["".concat(p,".").concat(y)]||m[y]||s[y]||o;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8579:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),l={},i={unversionedId:"camera",id:"camera",isDocsHomePage:!1,title:"\u6444\u50cf\u673a / \u89c6\u56fe\u77e9\u9635",description:"\u60f3\u8c61\u4e00\u4e2a\u573a\u666f\uff0c\u573a\u666f\u4e2d\u6709\u5f88\u591a\u7684\u7269\u4f53\u6392\u5217\u5728\u4e0d\u540c\u7684\u4f4d\u7f6e\u3002\u6211\u4eec\u62ff\u4e2a\u6444\u50cf\u673a\u4ece\u4e0d\u540c\u89d2\u5ea6\u62cd\u6444\u8fd9\u4e2a\u573a\u666f\uff0c\u6444\u50cf\u673a\u62cd\u5230\u7684\u5c31\u662f\u6700\u7ec8\u6e32\u67d3\u5728\u5c4f\u5e55\u4e0a\u7684\u5185\u5bb9\u3002OpenGL \u4e2d\u5e76\u6ca1\u6709\u76f8\u673a\u7684\u6982\u5ff5\uff0c\u9700\u8981\u6211\u4eec\u81ea\u5df1\u5b8c\u6210\u3002\u6444\u50cf\u673a\u4e5f\u88ab\u79f0\u4e3a\u773c\uff0c\u4ece\u54ea\u4e2a\u89d2\u5ea6\u53bb\u62cd\u6216\u4ece\u54ea\u4e2a\u89d2\u5ea6\u53bb\u770b\u3002",source:"@site/docs/8-camera.md",sourceDirName:".",slug:"/camera",permalink:"/learn-webgl/docs/camera",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/8-camera.md",version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u76d2\u5b50 / \u9762\u5254\u9664",permalink:"/learn-webgl/docs/box"},next:{title:"\u6b63\u4ea4\u548c\u900f\u89c6\u6295\u5f71",permalink:"/learn-webgl/docs/projection"}},p=[{value:"\u89c6\u56fe\u77e9\u9635",id:"\u89c6\u56fe\u77e9\u9635",children:[]}],u={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u60f3\u8c61\u4e00\u4e2a\u573a\u666f\uff0c\u573a\u666f\u4e2d\u6709\u5f88\u591a\u7684\u7269\u4f53\u6392\u5217\u5728\u4e0d\u540c\u7684\u4f4d\u7f6e\u3002\u6211\u4eec\u62ff\u4e2a\u6444\u50cf\u673a\u4ece\u4e0d\u540c\u89d2\u5ea6\u62cd\u6444\u8fd9\u4e2a\u573a\u666f\uff0c\u6444\u50cf\u673a\u62cd\u5230\u7684\u5c31\u662f\u6700\u7ec8\u6e32\u67d3\u5728\u5c4f\u5e55\u4e0a\u7684\u5185\u5bb9\u3002OpenGL \u4e2d\u5e76\u6ca1\u6709\u76f8\u673a\u7684\u6982\u5ff5\uff0c\u9700\u8981\u6211\u4eec\u81ea\u5df1\u5b8c\u6210\u3002\u6444\u50cf\u673a\u4e5f\u88ab\u79f0\u4e3a\u773c\uff0c\u4ece\u54ea\u4e2a\u89d2\u5ea6\u53bb\u62cd\u6216\u4ece\u54ea\u4e2a\u89d2\u5ea6\u53bb\u770b\u3002"),(0,o.kt)("p",null,"\u5728\u6df1\u5165\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u6765\u770b\u4e0b\u662f\u600e\u4e48\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const camera = new Camera()\n\ncamera.position.x = 0.5\ncamera.position.y = 0.5\ncamera.position.z = 0.5\n// \u8bbe\u7f6e\u76f8\u673a\u7684\u4f4d\u7f6e\n\ncamera.lookAt([0, 0, 0])\n// \u8bbe\u7f6e\u76f8\u673a\u770b\u5411\u539f\u70b9\n\nconst matLoc = gl.getUniformLocation(program, 'uMat')\ngl.uniformMatrix4fv(matLoc, false, camera.viewMatrix)\n// \u83b7\u53d6\u548c\u8bbe\u7f6e uniform\n\ngl_Position = uMat * aPos;\n// \u5728\u9876\u70b9\u7740\u8272\u5668\u4e2d\u5c06\u9876\u70b9\u4e58\u4e0a\u8fd9\u4e2a\u77e9\u9635\n")),(0,o.kt)("p",null,"\u8981\u7528\u76f8\u673a\u53bb\u62cd\u6444\u4e00\u4e2a\u573a\u666f\uff0c\u6211\u4eec\u9700\u8981\u77e5\u9053\u76f8\u673a\u7684\u4f4d\u7f6e\u548c\u76f8\u673a\u62cd\u6444\u7684\u76ee\u6807\u3002\u4e0a\u9762\u4ee3\u7801\u4e2d\u9996\u5148\u521b\u5efa\u4e86\u4e00\u4e2a\u76f8\u673a\u5b9e\u4f8b\uff0c\u7136\u540e\u8bbe\u7f6e\u76f8\u673a\u7684\u4f4d\u7f6e\uff0c\u5e76\u8ba9\u76f8\u673a\u770b\u5411\u539f\u70b9\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"camera.viewMatrix")," \u5c31\u662f\u6839\u636e\u76f8\u673a\u7684\u4f4d\u7f6e\u548c\u770b\u5411\u65b9\u5411\u751f\u6210\u7684\u77e9\u9635\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5c06\u8fd9\u4e2a\u77e9\u9635\u5e94\u7528\u5728\u7269\u4f53\u4e0a\uff0c\u6700\u7ec8\u6e32\u67d3\u51fa\u6765\u7684\u753b\u9762\u5c31\u662f\u76f8\u673a\u62cd\u4e0b\u6765\u7684\u753b\u9762\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u573a\u666f\u4e2d\u7684\u7269\u4f53\u548c\u76f8\u673a\u4e00\u8d77\u79fb\u52a8\uff0c\u4f8b\u5982\u5411\u524d\u79fb\u52a8 10 \u7c73\uff0c\u90a3\u4e48\u76f8\u673a\u62cd\u6444\u51fa\u6765\u7684\u753b\u9762\u548c\u79fb\u52a8\u524d\u8fd8\u662f\u4e00\u6837\u7684\u3002\u5728 OpenGL \u4e2d\u6709\u4e2a\u60ef\u4f8b\uff0c\u5c31\u662f\u5c06\u76f8\u673a\u4f4d\u7f6e\u56fa\u5b9a\u5728\u539f\u70b9\uff0c\u5e76\u4e14\u671d\u7740 -Z \u65b9\u5411\u770b\u3002\u4e3a\u4e86\u5c06\u76f8\u673a\u79fb\u52a8\u5230\u60ef\u4f8b\u4f4d\u7f6e\uff0c\u6211\u4eec\u9700\u8981\u4e24\u4e2a\u6b65\u9aa4\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c06\u76f8\u673a\u79fb\u52a8\u5230\u539f\u70b9"),(0,o.kt)("li",{parentName:"ol"},"\u65cb\u8f6c\u76f8\u673a\uff0c\u8ba9\u5b83\u770b\u5411 -Z \u4f4d\u7f6e\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25923128/122237222-be4ba200-cef1-11eb-90ea-f8afb4c4ea4b.png",alt:"image"})),(0,o.kt)("h2",{id:"\u89c6\u56fe\u77e9\u9635"},"\u89c6\u56fe\u77e9\u9635"),(0,o.kt)("p",null,"\u4e0a\u65b9\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"camera.viewMatrix")," \u77e9\u9635\u4e00\u822c\u79f0\u4e3a\u89c6\u56fe\u77e9\u9635\uff0c\u5b83\u53ef\u4ee5\u8ba9\u573a\u666f\u4e2d\u7684\u7269\u4f53\u5bf9\u76f8\u673a\u505a\u9006\u53d8\u6362\uff0c\u5411\u76f8\u673a\u76f8\u53cd\u7684\u4f4d\u7f6e\u79fb\u52a8\u548c\u65cb\u8f6c\u3002\u4e0a\u9762\u6709\u63d0\u5230\u573a\u666f\u4e2d\u7684\u7269\u4f53\u548c\u76f8\u673a\u4e00\u8d77\u79fb\u52a8\u548c\u65cb\u8f6c\uff0c\u90a3\u4e48\u76f8\u673a\u62cd\u6444\u7684\u753b\u9762\u548c\u79fb\u52a8\u524d\u62cd\u6444\u7684\u753b\u9762\u662f\u4e00\u6837\u7684\u3002\u76f8\u673a\u5411\u524d\u79fb\u52a8\uff0c\u90a3\u4e48\u573a\u666f\u4e2d\u7684\u7269\u4f53\u5c31\u8981\u5411\u540e\u79fb\u52a8\uff0c\u7269\u4f53\u8981\u548c\u76f8\u673a\u7684\u53d8\u6362\u76f8\u53cd\u3002"),(0,o.kt)("p",null,"\u7b2c\u4e00\u6b65\u5c06\u76f8\u673a\u79fb\u52a8\u5230\u539f\u70b9\u5f88\u7b80\u5355\uff0c",(0,o.kt)("a",{parentName:"p",href:"/learn-webgl/docs/transform"},"\u53d8\u6362"),"\u4e2d\u6709\u8bb2\u8fc7\uff0c\u77e9\u9635\u6700\u53f3\u8fb9\u90a3\u4e00\u5217\uff0c\u5c31\u662f\u5e73\u79fb\u7684\u91cf\u3002\u6211\u4eec\u8fd9\u91cc\u8bbe\u7f6e\u8d1f\u7684\u76f8\u673a\u4f4d\u7f6e\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5c06\u76f8\u673a\u79fb\u52a8\u5230\u539f\u70b9\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"[\n  1, 0, 0, -Px,\n  0, 1, 0, -Py,\n  0, 0, 1, -Pz,\n  0, 0, 0, 1\n]\n")),(0,o.kt)("p",null,"\u7b2c\u4e8c\u6b65\u65cb\u8f6c\u76f8\u673a\uff0c\u8ba9\u5b83\u770b\u5411 -Z \u4f4d\u7f6e\uff0c\u4e5f\u5c31\u662f\u5c06\u76f8\u673a\u7684\u5750\u6807\u8f74\u548c\u5168\u5c40\u7684\u5750\u6807\u8f74\u5bf9\u9f50\uff0c\u5c31\u6bd4\u8f83\u590d\u6742\uff0c\u6211\u4eec\u9700\u8981\u5148\u6c42\u51fa\u76f8\u673a\u5b83\u81ea\u5df1\u7684\u5750\u6807\u8f74\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25923128/122186917-19b16c00-cec1-11eb-8e56-0656ac73309e.png",alt:"image"})),(0,o.kt)("p",null,"\u76f8\u673a\u7684\u5750\u6807\u7cfb\uff0c\u8fd8\u662f",(0,o.kt)("a",{parentName:"p",href:"/learn-webgl/docs/coordinate"},"\u53f3\u624b\u5750\u6807\u7cfb"),"\uff0c\u770b\u5411 -Z \u65b9\u5411\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u76f8\u673a\u7684\u4f4d\u7f6e\u51cf\u53bb\u76ee\u6807\u7684\u4f4d\u7f6e\u5e76\u5f52\u4e00\u5316\u5f97\u5230\u76f8\u673a\u5750\u6807\u8f74\u4e2d\u7684 Z \u8f74\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u5750\u6807\u8f74\u7684\u957f\u5ea6\u53ea\u8981\u5b83\u7684\u65b9\u5411\uff0c\u6240\u4ee5\u5c06\u5b83\u5f52\u4e00\u5316\u4e3a\u5355\u4f4d\u77e2\u91cf\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u4f1a\u7528\u5230\u77e2\u91cf\u7684\u5404\u79cd\u8ba1\u7b97\uff0c\u5982\u679c\u5bf9\u77e2\u91cf\u4e0d\u592a\u4e86\u89e3\uff0c\u53ef\u4ee5\u56de\u987e\u4e0b",(0,o.kt)("a",{parentName:"p",href:"/learn-webgl/docs/vector-matrix"},"\u77e2\u91cf\u548c\u77e9\u9635"),"\u7ae0\u8282\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Z = normalize(cameraPosition - targetPosition)\n")),(0,o.kt)("p",null,"\u6211\u4eec\u9700\u8981\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"up")," \u77e2\u91cf\u6765\u6c42\u51fa\u5269\u4e0b\u4e24\u4e2a\u8f74\uff0c\u4e00\u822c\u8fd9\u4e2a\u77e2\u91cf\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"[0, 1, 0]")," \u4e5f\u5c31\u662f\u5168\u5c40\u5750\u6807\u7cfb\u7684 Y \u8f74\u3002\u6211\u4eec\u53ef\u4ee5\u7528\u5b83\u6765\u53c9\u6210\u76f8\u673a Z \u8f74\u6c42\u51fa X \u8f74\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"X = normalize(cross(up, Z))\n")),(0,o.kt)("p",null,"\u77e5\u9053\u4e86 X \u548c Z \u8f74\uff0c\u90a3\u4e48 Y \u8f74\u5c31\u53ef\u4ee5\u76f4\u63a5\u7528 Z \u8f74\u53c9\u4e58 X \u8f74\u6765\u6c42\u5f97\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Y = normalize(cross(Z, X))\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25923128/122206321-d14f7980-ced3-11eb-96da-fec42df5015e.png",alt:"image"})),(0,o.kt)("p",null,"\u90a3\u4e48\u65cb\u8f6c\u77e9\u9635\u5982\u4e0b\u6240\u793a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"rotation = [\n  Xx, Yx, Zx, 0,\n  Xy, Yy, Zy, 0,\n  Xz, Yz, Zz, 0,\n  0,  0,  0,  1\n]\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7528\u4e0a\u9762\u77e9\u9635\u5206\u522b\u4e58\u4e0a\u5168\u5c40\u5750\u6807\u7684 X\u3001Y \u548c Z \u8f74\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"rotation * [1, 0, 0, 0] = X\n\nrotation * [0, 1, 0, 0] = Y\n\nrotation * [0, 0, 1, 0] = Z\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\u4e0a\u9762\u77e9\u9635\u5c06\u5168\u5c40\u5750\u6807\u8f74\u53d8\u6210\u4e86\u76f8\u673a\u7684\u5750\u6807\u8f74\u3002\u53ef\u662f\u6211\u4eec\u9700\u8981\u5c06\u76f8\u673a\u7684\u5750\u6807\u8f74\u53d8\u6210\u5168\u5c40\u7684\u5750\u6807\u8f74\uff0c\u9700\u8981\u5b83\u7684\u9006\u77e9\u9635\u3002",(0,o.kt)("a",{parentName:"p",href:"/learn-webgl/docs/transform"},"\u53d8\u6362"),"\u4e2d\u6211\u4eec\u63d0\u5230\u8fc7\u65cb\u8f6c\u77e9\u9635\u662f\u6b63\u4ea4\u77e9\u9635\uff0c\u5b83\u7684\u9006\u77e9\u9635\u5c31\u662f\u5b83\u7684\u8f6c\u7f6e\u77e9\u9635\uff0c\u6240\u4ee5\u6211\u4eec\u53ea\u9700\u8981\u5c06\u4e0a\u9762\u77e9\u9635\u8f6c\u7f6e\u4e00\u4e0b\uff0c\u5c31\u53ef\u4ee5\u83b7\u5f97\u6700\u7ec8\u7684\u65cb\u8f6c\u77e9\u9635\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"[\n  Xx, Xy, Xz, 0,\n  Yx, Yy, Yz, 0,\n  Zx, Zy, Zz, 0,\n  0,  0,  0,  1\n]\n")),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u6c42\u51fa\u4e86\u5e73\u79fb\u548c\u65cb\u8f6c\u77e9\u9635\uff0c\u662f\u5148\u5e73\u79fb\u540e\u65cb\u8f6c\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u65cb\u8f6c\u77e9\u9635\u4e58\u4e0a\u5e73\u79fb\u77e9\u9635\u5c31\u662f\u6700\u7ec8\u7684\u89c6\u56fe\u77e9\u9635\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"viewMatrix"),"\uff09\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"viewMatrix = R * T\n           = [\n              Xx, Xy, Xz, 0,\n              Yx, Yy, Yz, 0,\n              Zx, Zy, Zz, 0,\n              0,  0,  0,  1\n            ] * [\n              1, 0, 0, -Px,\n              0, 1, 0, -Py,\n              0, 0, 1, -Pz,\n              0, 0, 0, 1\n            ]\n\n           = [\n             Xx, Xy, Xz, X \xb7 -P\n             Yx, Yy, Yz, Y \xb7 -P\n             Zx, Zy, Zz, Z \xb7 -P\n             0,  0,  0, 1\n           ]\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u77e9\u9635\u5c01\u88c5\u5230\u6211\u4eec\u7684\u5de5\u5177\u5e93\u4e2d\uff0c\u540e\u9762\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Mat4 {\n\n  static identity(out = []) {\n    return Object.assign(out, [\n      1, 0, 0, 0,\n      0, 1, 0, 0,\n      0, 0, 1, 0,\n      0, 0, 0, 1\n    ])\n  }\n\n  static lookAt(eye, target, up, out = []) {\n      let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;\n      const eyeX = eye[0], eyeY = eye[1], eyeZ = eye[2];\n      const upX = up[0], upY = up[1], upZ = up[2];\n      const targetX = target[0], targetY = target[1], targetZ = target[2];\n\n      // \u76f8\u673a\u4f4d\u7f6e\u548c\u76f8\u673a\u76ee\u6807\u5728\u540c\u4e00\u4f4d\u7f6e\uff0c\u8fd4\u56de\u5355\u4f4d\u77e9\u9635\n      if (\n        Math.abs(eyeX - targetX) < 1e-6 &&\n        Math.abs(eyeY - targetY) < 1e-6 &&\n        Math.abs(eyeZ - targetZ) < 1e-6\n      ) {\n        return Mat4.identity(out);\n      }\n\n      // \u76f8\u673a Z \u8f74\n      z0 = eyeX - targetX;\n      z1 = eyeY - targetY;\n      z2 = eyeZ - targetZ;\n\n      // \u5f52\u4e00\u5316 Z \u8f74\n      len = 1 / Math.hypot(z0, z1, z2);\n      z0 *= len;\n      z1 *= len;\n      z2 *= len;\n\n      // \u53c9\u79ef up \u548c Z \u8f74\uff0c\u6c42\u51fa X \u8f74\n      x0 = upY * z2 - upZ * z1;\n      x1 = upZ * z0 - upX * z2;\n      x2 = upX * z1 - upY * z0;\n\n      len = Math.hypot(x0, x1, x2);\n      if (!len) {\n        // up \u548c Z \u8f74\u5e73\u884c\n        x0 = 0;\n        x1 = 0;\n        x2 = 0;\n      } else {\n        // \u5f52\u4e00\u5316 X \u8f74\n        len = 1 / len;\n        x0 *= len;\n        x1 *= len;\n        x2 *= len;\n      }\n\n      // Z \u53c9\u4e58 X\uff0c\u6c42\u51fa Y \u8f74\n      y0 = z1 * x2 - z2 * x1;\n      y1 = z2 * x0 - z0 * x2;\n      y2 = z0 * x1 - z1 * x0;\n\n      len = Math.hypot(y0, y1, y2);\n      if (!len) {\n        // Z \u8f74\u548c X \u8f74\u5e73\u884c\n        y0 = 0;\n        y1 = 0;\n        y2 = 0;\n      } else {\n        // \u5f52\u4e00\u5316 Y \u8f74\n        len = 1 / len;\n        y0 *= len;\n        y1 *= len;\n        y2 *= len;\n      }\n\n      // OpenGL \u4e2d\u77e9\u9635\u662f\u5217\u4e3b\u5e8f\n      out[0] = x0;\n      out[1] = y0;\n      out[2] = z0;\n      out[3] = 0;\n      out[4] = x1;\n      out[5] = y1;\n      out[6] = z1;\n      out[7] = 0;\n      out[8] = x2;\n      out[9] = y2;\n      out[10] = z2;\n      out[11] = 0;\n      out[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);\n      out[13] = -(y0 * eyeY + y1 * eyeY + y2 * eyeZ);\n      out[14] = -(z0 * eyeZ + z1 * eyeY + z2 * eyeZ);\n      out[15] = 1;\n\n      return out;\n  }\n\n}\n")),(0,o.kt)("p",null,"\u4e00\u822c\u5c06\u8fd9\u4e2a\u65b9\u6cd5\u79f0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"lookAt"),"\uff0c\u5b83\u63a5\u6536\u76f8\u673a\u4f4d\u7f6e\uff08\u4e5f\u79f0\u4e3a\u773c\uff09\u3001\u770b\u5411\u7684\u76ee\u6807\u4f4d\u7f6e\u548c\u4e00\u4e2a\u4e0a\u77e2\u91cf\uff0c\u8fd4\u56de\u4e00\u4e2a\u89c6\u56fe\u77e9\u9635\uff0c\u53ef\u4ee5\u5c06\u76f8\u673a\u79fb\u52a8\u5230\u539f\u70b9\u5e76\u770b\u5411 -Z \u65b9\u5411\u3002"),(0,o.kt)("p",null,"\u6709\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"lookAt")," \u5de5\u5177\u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u6765\u5b8c\u6210\u4e00\u5f00\u59cb\u5199\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Camera")," \u7c7b\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Camera {\n  constructor() {\n    this.position = [0, 0, 0]\n    this.up = [0, 1, 0]\n    this.viewMatrix = Mat4.identity()\n  }\n\n  lookAt(target) {\n    Mat4.lookAt(this.position, target, this.up, this.viewMatrix)\n  }\n}\n")))}c.isMDXComponent=!0}}]);
(this.webpackJsonpalgorithm_visual=this.webpackJsonpalgorithm_visual||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),s=r.n(a),o=r(4),i=r.n(o),c=r(2),l=r(5),u=r(6),d=r(8),h=r(7);function m(e){var t=[];if(e.length<=1)return e;var r=e.slice();return b(e,0,e.length-1,r,t),t}function b(e,t,r,n,a){if(t!==r){var s=Math.floor((t+r)/2);b(n,t,s,e,a),b(n,s+1,r,e,a),function(e,t,r,n,a,s){var o=t,i=t,c=r+1;for(;i<=r&&c<=n;)s.push([i,c]),s.push([i,c]),a[i]<=a[c]?(s.push([o,a[i]]),e[o++]=a[i++]):(s.push([o,a[c]]),e[o++]=a[c++]);for(;i<=r;)s.push([i,i]),s.push([i,i]),s.push([o,a[i]]),e[o++]=a[i++];for(;c<=n;)s.push([c,c]),s.push([c,c]),s.push([o,a[c]]),e[o++]=a[c++]}(e,t,s,r,n,a)}}function f(e){var t=[];return e.length<=1?e:(g(e,0,e.length-1,t),t)}function g(e,t,r,n){if(t<r){var a=function(e,t,r,n){for(var a=e[r],s=t,o=t;o<r;o++){if(n.push([o,r]),n.push([o,r]),e[o]<a){n.push([s,o]);var i=[e[s],e[o]];e[o]=i[0],e[s]=i[1],s++}else n.push([0,0]);n.push([0,0])}return n.push([0,0],[0,0],[s,r],[0,0]),function(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}(e,s,r),s}(e,t,r,n);g(e,t,a-1,n),g(e,a+1,r,n)}}function y(e){var t=[];return e.length<=1?e:(function(e,t){for(var r=e.length,n=Math.floor(r/2)-1;n>=0;n--)p(e,r,n,t);for(var a=e.length-1;a>0;a--)t.push([!0,0,a]),v(e,0,a),p(e,--r,0,t)}(e,t),t)}function p(e,t,r,n){var a=2*r+1,s=a+1,o=r;return a<t&&e[a]>e[o]&&(n.push([0,a,o]),n.push([1,a,o]),o=a),s<t&&e[s]>e[o]&&(n.push([0,s,o]),n.push([1,s,o]),o=s),o!==r&&(n.push([!0,r,o]),v(e,r,o),p(e,t,o,n)),e}function v(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}r(14);var j=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).handleSliderBars=function(e){var t=document.getElementById("bars");n.setState({bars:t.value}),setTimeout((function(){n.resetArray()}),400)},n.handleSliderSpeed=function(e){var t=document.getElementById("speed");console.log(t.value),n.setState({speed:t.value})},n.changeTheme=function(){var e=document.getElementById("switcher");"white"===n.state.backgroundColor?(n.setState({backgroundColor:"black"}),e.style.backgroundColor="white",e.style.marginLeft="20px"):(n.setState({backgroundColor:"white"}),e.style.backgroundColor="black",e.style.marginLeft="0")},n.changeColor=function(){var e=B(),t=B();n.setState({primary_Color:e,secondary_Color:t})},n.state={array:[],speed:5,bars:100,backgroundColor:"white",primary_Color:"turquoise",secondary_Color:"red"},n}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var e=[],t=0;t<this.state.bars;t++)e.push(C(5,550));this.setState({array:e})}},{key:"mergeSort",value:function(){var e=this;if(!E(this.state.array)){O();for(var t=m(this.state.array),r=S(this.state.speed,t.length),n=function(r){var n=document.getElementsByClassName("array-bar");if(r%3!==2){var a=Object(c.a)(t[r],2),s=a[0],o=a[1],i=n[s].style,l=n[o].style,u=r%3===0?e.state.secondary_Color:e.state.primary_Color;setTimeout((function(){i.backgroundColor=u,l.backgroundColor=u}),r*e.state.speed)}else setTimeout((function(){var e=Object(c.a)(t[r],2),a=e[0],s=e[1];n[a].style.height="".concat(s,"px")}),r*e.state.speed)},a=0;a<t.length;a++)n(a);x(r)}}},{key:"quickSort",value:function(){var e=this;if(!E(this.state.array)){O();for(var t=f(this.state.array),r=S(this.state.speed,t.length),n=function(r){var n=document.getElementsByClassName("array-bar");if(r%4!==2&&r%4!==3){var a=Object(c.a)(t[r],2),s=a[0],o=a[1],i=n[s].style,l=n[o].style,u=r%4===0?e.state.secondary_Color:e.state.primary_Color;setTimeout((function(){i.backgroundColor=u,l.backgroundColor=u}),r*e.state.speed)}else setTimeout((function(){var e=Object(c.a)(t[r],2),a=e[0],s=e[1],o=n[a].style.height;n[a].style.height=n[s].style.height,n[s].style.height=o}),r*e.state.speed)},a=0;a<t.length;a++)n(a);x(r)}}},{key:"heapSort",value:function(){var e=this;if(!E(this.state.array)){O();for(var t=y(this.state.array),r=S(this.state.speed,t.length),n=function(r){var n=document.getElementsByClassName("array-bar");if(!0!==t[r][0]){var a=[t[r][1],t[r][2]],s=a[1],o=n[a[0]].style,i=n[s].style,c=0===t[r][0]?e.state.secondary_Color:e.state.primary_Color;setTimeout((function(){o.backgroundColor=c,i.backgroundColor=c}),r*e.state.speed)}else setTimeout((function(){var e=[t[r][1],t[r][2]],a=e[0],s=e[1],o=n[a].style.height;n[a].style.height=n[s].style.height,n[s].style.height=o}),r*e.state.speed)},a=0;a<t.length;a++)n(a);x(r)}}},{key:"testSortingAlgorithms",value:function(){for(var e=0;e<100;e++){for(var t=[],r=C(1,500),n=0;n<r;n++)t.push(C(-1e3,1e3));var a=t.slice().sort((function(e,t){return e-t})),s=y(t.slice());console.log(k(a,s))}}},{key:"render",value:function(){var e=this,t=this.state.array;return Object(n.jsxs)("div",{className:"array-container",children:[Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("div",{className:"bar-container",style:{backgroundColor:this.state.backgroundColor},children:t.map((function(t,r){return Object(n.jsx)("div",{className:"array-bar",style:{backgroundColor:e.state.primary_Color,height:"".concat(t,"px"),width:"".concat(1024/e.state.bars-2,"px")}},r)}))}),Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsxs)("div",{className:"colorTheme",children:[Object(n.jsx)("p",{children:"ChangeTheme"}),Object(n.jsx)("div",{className:"themeSwitcher",children:Object(n.jsx)("button",{id:"switcher",onClick:function(){return e.changeTheme()},className:"switcher"})})]}),Object(n.jsx)("div",{className:"colorScheme",children:Object(n.jsx)("button",{id:"color",onClick:function(){return e.changeColor()},children:"Random Colorchanger"})})]})]}),Object(n.jsxs)("div",{className:"button-container",children:[Object(n.jsxs)("div",{className:"scaleOne",children:[Object(n.jsx)("input",{className:"rangeSlider",type:"range",min:"1",max:"10",id:"speed",value:this.state.speed,onChange:function(){return e.handleSliderSpeed()}}),Object(n.jsx)("h3",{className:"text",children:"Speed"})]}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)("button",{id:"reset",onClick:function(){return e.resetArray()},children:"Generate New Array"}),Object(n.jsx)("button",{id:"merge",onClick:function(){return e.mergeSort()},children:"Merge Sort"}),Object(n.jsx)("button",{id:"quick",onClick:function(){return e.quickSort()},children:"Quick Sort"}),Object(n.jsx)("button",{id:"heap",onClick:function(){return e.heapSort()},children:"Heap Sort"})]}),Object(n.jsxs)("div",{className:"scaleTwo",children:[Object(n.jsx)("input",{className:"rangeSlider",type:"range",min:"5",max:"255",step:"5",value:this.state.bars,id:"bars",onChange:function(){return e.handleSliderBars()}}),Object(n.jsx)("h3",{className:"text",children:"Bars"})]})]})]})}}]),r}(s.a.Component);function C(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function k(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function O(){document.getElementById("speed").disabled=!0,document.getElementById("bars").disabled=!0,document.getElementById("switcher").disabled=!0,document.getElementById("color").disabled=!0,document.getElementById("reset").disabled=!0,document.getElementById("merge").disabled=!0,document.getElementById("quick").disabled=!0,document.getElementById("heap").disabled=!0}function x(e){setTimeout((function(){document.getElementById("speed").disabled=!1,document.getElementById("bars").disabled=!1,document.getElementById("switcher").disabled=!1,document.getElementById("color").disabled=!1,document.getElementById("reset").disabled=!1,document.getElementById("merge").disabled=!1,document.getElementById("quick").disabled=!1,document.getElementById("heap").disabled=!1}),e)}function S(e,t){return e*t+1e3}function B(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function E(e){for(var t=0;t<e.length-1;t++)if(e[t]>e[t+1])return!1;return!0}r(15);var N=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(j,{})})};r(16);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.245f577e.chunk.js.map
(this["webpackJsonpmine-game"]=this["webpackJsonpmine-game"]||[]).push([[0],{18:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),u=(t(23),t(42)),o=(t(24),t(3)),i={BUILD:"BUILD",CLICKED:"CLICKED",RIGHT_CLICKED:"RIGHT_CLICKED",REDUCE_MINE_LEFT:"REDUCE_MINE_LEFT",INCREASE_MINE_LEFT:"INCREASE_MINE_LEFT",CHECK_CELL:"CHECK_CELL",RESET:"RESET",EMPTY:"EMPTY",TIME:"TIME",CHANGE_LEVEL:"CHANGE_LEVEL",CHANGE_SIZE:"CHANGE_SIZE",RESTART_GAME:"RESTART_GAME",PAUSE:"PAUSE",FAILED:"FAILED",FINISH:"FINISH"},s=function(e){var a=e.split("|");return{type:i.CLICKED,action:a}},v=function(e){var a=e.split("|");return{type:i.RIGHT_CLICKED,action:a}},m=function(){return{type:i.REDUCE_MINE_LEFT}},E=function(){return{type:i.INCREASE_MINE_LEFT}},f=function(e,a){b(e.id,a)},b=function(e,a){var t=e.split("|"),n=parseInt(t[0]),r=parseInt(t[1]),c=a;if(0===a[t[0]][t[1]].value&&1!==a[t[0]][t[1]].mark){try{c[n-1][r].open||1===c[n-1][r].mark||(c[n-1][r].open=!0,0===c[n-1][r].value&&f(c[n-1][r],c))}catch(l){}try{c[n+1][r].open||1===c[n+1][r].mark||(c[n+1][r].open=!0,0===c[n+1][r].value&&f(c[n+1][r],c))}catch(l){}try{c[n][r-1].open||1===c[n][r-1].mark||(c[n][r-1].open=!0,0===c[n][r-1].value&&f(c[n][r-1],c))}catch(l){}try{c[n][r+1].open||1===c[n][r+1].mark||(c[n][r+1].open=!0,0===c[n][r+1].value&&f(c[n][r+1],c))}catch(l){}try{c[n-1][r-1].open||1===c[n-1][r-1].mark||(c[n-1][r-1].open=!0,0===c[n-1][r-1].value&&f(c[n-1][r-1],c))}catch(l){}try{c[n-1][r+1].open||1===c[n-1][r+1].mark||(c[n-1][r+1].open=!0,0===c[n-1][r+1].value&&f(c[n-1][r+1],c))}catch(l){}try{c[n+1][r+1].open||1===c[n+1][r+1].mark||(c[n+1][r+1].open=!0,0===c[n+1][r+1].value&&f(c[n+1][r+1],c))}catch(l){}try{c[n+1][r-1].open||1===c[n+1][r-1].mark||(c[n+1][r-1].open=!0,0===c[n+1][r-1].value&&f(c[n+1][r-1],c))}catch(l){}}else if(a[t[0]][t[1]].value>=15&&1!==a[t[0]][t[1]].mark)return{type:i.FAILED};return{type:i.CHECK_CELL,payload:c}},d=function(e,a){for(var t=1===a?.2*e*e:2===a?.5*e*e:.8*e*e,n=[],r=t,c=0;c<e;c++){n[c]=[];for(var l=0;l<e;l++)n[c][l]={id:"".concat(c,"|").concat(l),mine:!1,open:!1,value:0,mark:0}}for(;!(r<=1);){var u=Math.floor(Math.random()*e),o=Math.floor(Math.random()*e);n[u][o].mine||(n[u][o]={id:"".concat(u,"|").concat(o),mine:!0,open:!1,value:15,mark:0},r--)}return p(n,e),{type:i.BUILD,action:n,amountOfMines:t}},p=function(e,a){for(var t=0;t<a;t++)for(var n=0;n<a;n++)try{e[t][n].mine&&(0===t?0===n?(e[t][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n+1].value+=1):n===e.length-1?(e[t][n-1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1):(e[t][n-1].value+=1,e[t][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1,e[t+1][n+1].value+=1):t===e.length-1?0===n?(e[t][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n+1].value+=1):n===e.length-1?(e[t][n-1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1):(e[t][n-1].value+=1,e[t][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1,e[t-1][n+1].value+=1):0===n?(e[t-1][n].value+=1,e[t+1][n].value+=1,e[t][n+1].value+=1,e[t-1][n+1].value+=1,e[t+1][n+1].value+=1):n===e.length-1?(e[t-1][n].value+=1,e[t+1][n].value+=1,e[t][n-1].value+=1,e[t-1][n-1].value+=1,e[t+1][n-1].value+=1):(e[t-1][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1,e[t+1][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1,e[t][n+1].value+=1,e[t][n-1].value+=1))}catch(r){}},O="TIME",j="RESTART_GAME",h="PAUSE",I="LOADING",k=function(){return{type:j}},C=function(){return{type:I}},L=t(2),M=t(16),g=function(e){var a=Object(o.c)((function(e){return e.board})),t=Object(o.b)(),c=e.cell.open?e.cell.value>=15?r.a.createElement("i",{className:"fa fa-bomb","aria-hidden":"true"}):0===e.cell.value?null:e.cell.value:1===e.mark?r.a.createElement("i",{className:"fa fa-flag","aria-hidden":"true"}):2===e.mark?r.a.createElement("i",{className:"fa fa-question","aria-hidden":"true"}):null,l={color:e.cell.value>=15&&e.cell.open?"black":1===e.cell.value&&e.cell.open?"#047933":2===e.cell.value&&e.cell.open?"#0c0398":3===e.cell.value&&e.cell.open?"red":e.cell.open||1!==e.cell.mark?e.cell.open||2!==e.cell.mark?"black":"#dbce23":"#e50808"},u=Object(n.useState)({longpress:250,start:0}),i=Object(M.a)(u,2),f=i[0],d=i[1],p=function(e){e.preventDefault(),e=e||window.event;var a=(new Date).getTime();d(Object(L.a)(Object(L.a)({},f),{},{start:a}))},O=function(n){if(n.preventDefault(),n=n||window.event,(new Date).getTime()>=f.start+f.longpress)a.amountOfMines>=1&&t(v(e.cell.id)),1===e.cell.mark?t(m()):2===e.cell.mark&&t(E());else switch(window.event.which){case 0:case 1:t(s(e.cell.id)),t(b(e.cell.id,e.board.board));break;case 3:a.amountOfMines>=1&&t(v(e.cell.id)),1===e.cell.mark?t(m()):2===e.cell.mark&&t(E());break;default:return-1}};"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onTouchStart:p,onTouchEnd:O,onMouseDown:p,onMouseLeave:function(e){e.preventDefault(),e=e||window.event,d(Object(L.a)(Object(L.a)({},f),{},{start:0}))},onMouseUp:O,disabled:e.cell.open,style:l,className:1===e.cell.mark?"btn flag":2===e.cell.mark?"btn question":"btn regular"},c))},y=function(e){var a=Object(o.c)((function(e){return e.board})),t=Object(o.b)();Object(n.useEffect)((function(){return 0===a.time&&(t(C()),t(d(a.size,1)),t(C())),function(){return null}}),[]),Object(n.useEffect)((function(){a.amountOfMines<=1&&t(function(e){var a=0;return e.map((function(e){e.map((function(e){e.mine&&1==!e.mark&&(a=1)}))})),a?{type:i.EMPTY}:{type:i.FINISH}}(a.board))}),[a.amountOfMines]);var c=a.board.map((function(e,n){return r.a.createElement("div",{className:"row",key:n},e.map((function(e,n){return r.a.createElement("div",{className:"cell",key:n,id:e.id},r.a.createElement(g,{board:a,value:e.value,mark:e.mark,cell:e,clicked:function(){return t(s(e.id))},rightClicked:function(){return t(v(e.id))}}))})))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"board"},c))},N=function(e){return r.a.createElement("button",{className:"settingBtn",onClick:e.onclick},e.text)},T=function(){var e=Object(o.c)((function(e){return e.setting})),a=Object(o.c)((function(e){return e.board})),t=Object(o.b)();Object(n.useEffect)((function(){var a=null;return e.pause||(a=setInterval((function(){t({type:O})}),1e3)),function(){return clearInterval(a)}}),[e.pause]);return r.a.createElement("div",null,r.a.createElement("div",{className:"stats"},r.a.createElement("div",{className:"stats-time"},e.time),r.a.createElement("div",{className:"stats-minesLeft"},parseFloat(a.amountOfMines).toFixed(0))),r.a.createElement(N,{text:"Pause",onclick:function(){return t(function(e){var a=1===e?0:1;return{type:h,payload:a}}(e.pause))}}),r.a.createElement(N,{text:"start over",onclick:function(){return t(d(e.size,e.lvl)),void t(k())}}),r.a.createElement(N,{text:"change level"}))},D=function(){var e=Object(o.c)((function(e){return e.setting})),a=(Object(o.c)((function(e){return e.board})),Object(o.b)());return r.a.createElement("div",{className:"failed"},r.a.createElement("h2",null,"YOU SUCK... AND DEAD!"),r.a.createElement("h3",null,"game over! start over?"),r.a.createElement("button",{className:"startOverBtn",onClick:function(){a(d(e.size,e.lvl)),a(k())}},"Play Again"))};var _=function(){var e=Object(o.c)((function(e){return e.setting})),a=Object(o.c)((function(e){return e.board})),t=function(){var t=null;return 1===e.pause&&(t=r.a.createElement("div",null,r.a.createElement(T,null),"PAUSED ")),0===e.pause&&(t=r.a.createElement("div",null,r.a.createElement(T,null)," ",r.a.createElement(y,null)," ")),1===e.success&&(t=r.a.createElement("div",null,"success ")),1===a.fail&&(t=r.a.createElement(D,null)),1===a.finish&&(t=r.a.createElement("h1",null,"you did it!! you stayed alive!")),t}(),n=r.a.createElement("div",{className:"loading"},r.a.createElement(u.a,null));return r.a.createElement("div",{className:"App"},e.isLoading?n:t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=t(6),w=t(14),S={board:[],amountOfMines:5,lvl:1,size:9,fail:0,time:0,pause:0,finish:0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case i.BUILD:return Object(L.a)(Object(L.a)({},e),{},{board:a.action,amountOfMines:a.amountOfMines,fail:0});case i.CLICKED:var t=e.board,n=a.action[0],r=a.action[1],c=e.board[n].filter((function(e){return e.id==="".concat(n,"|").concat(r)}));return 1!==c[0].mark?(c[0].open=!0,t[n][r]=Object(L.a)(Object(L.a)({},t[n][r]),{},{open:!0}),Object(L.a)(Object(L.a)({},e),{},{board:t})):Object(L.a)({},e);case i.RIGHT_CLICKED:var l=e.board,u=a.action[0],o=a.action[1],s=e.board[u].filter((function(e){return e.id==="".concat(u,"|").concat(o)}));return s[0].mark+=1,s[0].mark>2&&(s[0].mark=0),l[u][o]=Object(L.a)(Object(L.a)({},l[u][o]),{},{mark:s[0].mark}),Object(L.a)(Object(L.a)({},e),{},{board:l});case i.CHECK_CELL:return Object(L.a)(Object(L.a)({},e),{},{board:a.payload});case i.REDUCE_MINE_LEFT:return Object(L.a)(Object(L.a)({},e),{},{amountOfMines:e.amountOfMines-1});case i.INCREASE_MINE_LEFT:return Object(L.a)(Object(L.a)({},e),{},{amountOfMines:e.amountOfMines+1});case i.TIME:var v=e.time+1;return Object(L.a)(Object(L.a)({},e),{},{time:v});case i.RESTART_GAME:var m=0;return Object(L.a)(Object(L.a)({},e),{},{time:m});case i.PAUSE:var E=a.payload;return Object(L.a)(Object(L.a)({},e),{},{pause:E});case i.FAILED:var f=1;return Object(L.a)(Object(L.a)({},e),{},{fail:f});case i.FINISH:var b=1;return Object(L.a)(Object(L.a)({},e),{},{finish:b});default:return Object(L.a)({},e)}},F={lvl:1,size:9,time:0,pause:0,restart:0,success:0,isLoading:0},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case I:var t=!e.isLoading;return Object(L.a)(Object(L.a)({},e),{},{isLoading:t});case O:var n=e.time+1;return Object(L.a)(Object(L.a)({},e),{},{time:n});case j:return Object(L.a)(Object(L.a)({},e),{},{time:0,pause:0,restart:0,success:0,isLoading:0});case h:var r=a.payload;return Object(L.a)(Object(L.a)({},e),{},{pause:r});default:return Object(L.a)({},e)}},U=t(15),G=Object(A.combineReducers)({setting:H,board:R}),K=Object(A.createStore)(G,Object(U.composeWithDevTools)(Object(A.applyMiddleware)(w.a)));l.a.render(r.a.createElement(o.a,{store:K},r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.cadb569a.chunk.js.map
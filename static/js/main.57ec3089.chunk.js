(this["webpackJsonpmine-game"]=this["webpackJsonpmine-game"]||[]).push([[0],{18:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(9),l=t.n(r),o=(t(23),t(42)),u=(t(24),t(3)),i={BUILD:"BUILD",CLICKED:"CLICKED",RIGHT_CLICKED:"RIGHT_CLICKED",REDUCE_MINE_LEFT:"REDUCE_MINE_LEFT",INCREASE_MINE_LEFT:"INCREASE_MINE_LEFT",CHECK_CELL:"CHECK_CELL",RESET:"RESET",EMPTY:"EMPTY",TIME:"TIME",CHANGE_LEVEL:"CHANGE_LEVEL",CHANGE_SIZE:"CHANGE_SIZE",RESTART_GAME:"RESTART_GAME",PAUSE:"PAUSE",FAILED:"FAILED",FINISH:"FINISH"},s=function(e){var a=e.split("|");return{type:i.CLICKED,action:a}},v=function(e){var a=e.split("|");return{type:i.RIGHT_CLICKED,action:a}},m=function(){return{type:i.REDUCE_MINE_LEFT}},E=function(){return{type:i.INCREASE_MINE_LEFT}},f=function(e,a){b(e.id,a)},b=function(e,a){var t=e.split("|"),n=parseInt(t[0]),c=parseInt(t[1]),r=a;if(0===a[t[0]][t[1]].value&&1!==a[t[0]][t[1]].mark){try{r[n-1][c].open||1===r[n-1][c].mark||(r[n-1][c].open=!0,0===r[n-1][c].value&&f(r[n-1][c],r))}catch(l){}try{r[n+1][c].open||1===r[n+1][c].mark||(r[n+1][c].open=!0,0===r[n+1][c].value&&f(r[n+1][c],r))}catch(l){}try{r[n][c-1].open||1===r[n][c-1].mark||(r[n][c-1].open=!0,0===r[n][c-1].value&&f(r[n][c-1],r))}catch(l){}try{r[n][c+1].open||1===r[n][c+1].mark||(r[n][c+1].open=!0,0===r[n][c+1].value&&f(r[n][c+1],r))}catch(l){}try{r[n-1][c-1].open||1===r[n-1][c-1].mark||(r[n-1][c-1].open=!0,0===r[n-1][c-1].value&&f(r[n-1][c-1],r))}catch(l){}try{r[n-1][c+1].open||1===r[n-1][c+1].mark||(r[n-1][c+1].open=!0,0===r[n-1][c+1].value&&f(r[n-1][c+1],r))}catch(l){}try{r[n+1][c+1].open||1===r[n+1][c+1].mark||(r[n+1][c+1].open=!0,0===r[n+1][c+1].value&&f(r[n+1][c+1],r))}catch(l){}try{r[n+1][c-1].open||1===r[n+1][c-1].mark||(r[n+1][c-1].open=!0,0===r[n+1][c-1].value&&f(r[n+1][c-1],r))}catch(l){}}else if(a[t[0]][t[1]].value>=15&&1!==a[t[0]][t[1]].mark)return{type:i.FAILED};return{type:i.CHECK_CELL,payload:r}},d=function(e,a){for(var t=1===a?.05*e*e:2===a?.5*e*e:.8*e*e,n=[],c=t,r=0;r<e;r++){n[r]=[];for(var l=0;l<e;l++)n[r][l]={id:"".concat(r,"|").concat(l),mine:!1,open:!1,value:0,mark:0}}for(;!(c<=1);){var o=Math.floor(Math.random()*e),u=Math.floor(Math.random()*e);n[o][u].mine||(n[o][u]={id:"".concat(o,"|").concat(u),mine:!0,open:!1,value:15,mark:0},c--)}return p(n,e),{type:i.BUILD,action:n,amountOfMines:t}},p=function(e,a){for(var t=0;t<a;t++)for(var n=0;n<a;n++)try{e[t][n].mine&&(0===t?0===n?(e[t][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n+1].value+=1):n===e.length-1?(e[t][n-1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1):(e[t][n-1].value+=1,e[t][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1,e[t+1][n+1].value+=1):t===e.length-1?0===n?(e[t][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n+1].value+=1):n===e.length-1?(e[t][n-1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1):(e[t][n-1].value+=1,e[t][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1,e[t-1][n+1].value+=1):0===n?(e[t-1][n].value+=1,e[t+1][n].value+=1,e[t][n+1].value+=1,e[t-1][n+1].value+=1,e[t+1][n+1].value+=1):n===e.length-1?(e[t-1][n].value+=1,e[t+1][n].value+=1,e[t][n-1].value+=1,e[t-1][n-1].value+=1,e[t+1][n-1].value+=1):(e[t-1][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1,e[t+1][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1,e[t][n+1].value+=1,e[t][n-1].value+=1))}catch(c){console.log(c,"row: ".concat(t," , col: ").concat(n),"object: ".concat(e[t][n-1]))}},O="TIME",j="RESTART_GAME",h="PAUSE",I="LOADING",k=function(){return{type:j}},g=function(){return{type:I}},C=t(2),L=t(16),M=function(e){var a=Object(u.c)((function(e){return e.board})),t=Object(u.b)(),r=e.cell.open?e.cell.value>=15?c.a.createElement("i",{className:"fa fa-bomb","aria-hidden":"true"}):0===e.cell.value?null:e.cell.value:1===e.mark?c.a.createElement("i",{className:"fa fa-flag","aria-hidden":"true"}):2===e.mark?c.a.createElement("i",{className:"fa fa-question","aria-hidden":"true"}):null,l={color:e.cell.value>=15&&e.cell.open?"black":1===e.cell.value&&e.cell.open?"#047933":2===e.cell.value&&e.cell.open?"#0c0398":3===e.cell.value&&e.cell.open?"red":e.cell.open||1!==e.cell.mark?e.cell.open||2!==e.cell.mark?"black":"#dbce23":"#e50808"},o=Object(n.useState)({longpress:250,start:0}),i=Object(L.a)(o,2),f=i[0],d=i[1],p=function(e){e=e||window.event;var a=(new Date).getTime();d(Object(C.a)(Object(C.a)({},f),{},{start:a}))},O=function(n){if(n.preventDefault(),n=n||window.event,(new Date).getTime()>=f.start+f.longpress)a.amountOfMines>=1&&t(v(e.cell.id)),1===e.cell.mark?t(m()):2===e.cell.mark&&t(E());else switch(window.event.which){case 1:t(s(e.cell.id)),t(b(e.cell.id,e.board.board));break;case 3:a.amountOfMines>=1&&t(v(e.cell.id)),1===e.cell.mark?t(m()):2===e.cell.mark&&t(E());break;default:return-1}};"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onTouchStart:p,onTouchEnd:O,onMouseDown:p,onMouseLeave:function(e){e=e||window.event,d(Object(C.a)(Object(C.a)({},f),{},{start:0}))},onMouseUp:O,disabled:e.cell.open,style:l,className:1===e.cell.mark?"btn flag":2===e.cell.mark?"btn question":"btn regular"},r))},y=function(e){var a=Object(u.c)((function(e){return e.board})),t=Object(u.b)();Object(n.useEffect)((function(){return t(g()),t(d(a.size,1)),t(g()),function(){return null}}),[]),Object(n.useEffect)((function(){a.amountOfMines<=1&&t(function(e){var a=0;return e.map((function(e){e.map((function(e){e.mine&&1==!e.mark&&(a=1)}))})),a?(console.log("there is a fals flag!!"),{type:i.EMPTY}):(console.log("perfect!"),{type:i.FINISH})}(a.board))}),[a.amountOfMines]);var r=a.board.map((function(e,n){return c.a.createElement("div",{className:"row",key:n},e.map((function(e,n){return c.a.createElement("div",{className:"cell",key:n,id:e.id},c.a.createElement(M,{board:a,value:e.value,mark:e.mark,cell:e,clicked:function(){return t(s(e.id))},rightClicked:function(){return t(v(e.id))}}))})))}));return c.a.createElement("div",null,c.a.createElement("div",{className:"board"},r))},N=function(e){return c.a.createElement("button",{className:"settingBtn",onClick:e.onclick},e.text)},T=function(){var e=Object(u.c)((function(e){return e.setting})),a=Object(u.c)((function(e){return e.board})),t=Object(u.b)();Object(n.useEffect)((function(){return function(){return clearInterval(null)}}),[e.pause]);return c.a.createElement("div",null,c.a.createElement("div",{className:"stats"},c.a.createElement("div",{className:"stats-time"},e.time),c.a.createElement("div",{className:"stats-minesLeft"},parseFloat(a.amountOfMines).toFixed(0))),c.a.createElement(N,{text:"Pause",onclick:function(){return t(function(e){var a=1===e?0:1;return{type:h,payload:a}}(e.pause))}}),c.a.createElement(N,{text:"start over",onclick:function(){return t(d(e.size,e.lvl)),void t(k())}}),c.a.createElement(N,{text:"change level"}))},_=function(){var e=Object(u.c)((function(e){return e.setting})),a=(Object(u.c)((function(e){return e.board})),Object(u.b)());return c.a.createElement("div",{className:"failed"},c.a.createElement("h2",null,"YOU SUCK... AND DEAD!"),c.a.createElement("h3",null,"game over! start over?"),c.a.createElement("button",{className:"startOverBtn",onClick:function(){a(d(e.size,e.lvl)),a(k())}},"Play Again"))};var A=function(){var e=Object(u.c)((function(e){return e.setting})),a=Object(u.c)((function(e){return e.board})),t=function(){var t=null;return 1===e.pause&&(t=c.a.createElement("div",null,c.a.createElement(T,null),"PAUSED ")),0===e.pause&&(t=c.a.createElement("div",null,c.a.createElement(T,null)," ",c.a.createElement(y,null)," ")),1===e.success&&(t=c.a.createElement("div",null,"success ")),1===a.fail&&(t=c.a.createElement(_,null)),1===a.finish&&(t=c.a.createElement("h1",null,"you did it!! you stayed alive!")),t}(),n=c.a.createElement("div",{className:"loading"},c.a.createElement(o.a,null));return c.a.createElement("div",{className:"App"},e.isLoading?n:t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=t(6),w=t(14),S={board:[],amountOfMines:5,lvl:1,size:9,fail:0,time:0,pause:0,finish:0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case i.BUILD:return Object(C.a)(Object(C.a)({},e),{},{board:a.action,amountOfMines:a.amountOfMines,fail:0});case i.CLICKED:var t=e.board,n=a.action[0],c=a.action[1],r=e.board[n].filter((function(e){return e.id==="".concat(n,"|").concat(c)}));return 1!==r[0].mark?(r[0].open=!0,t[n][c]=Object(C.a)(Object(C.a)({},t[n][c]),{},{open:!0}),Object(C.a)(Object(C.a)({},e),{},{board:t})):Object(C.a)({},e);case i.RIGHT_CLICKED:var l=e.board,o=a.action[0],u=a.action[1],s=e.board[o].filter((function(e){return e.id==="".concat(o,"|").concat(u)}));return s[0].mark+=1,s[0].mark>2&&(s[0].mark=0),l[o][u]=Object(C.a)(Object(C.a)({},l[o][u]),{},{mark:s[0].mark}),Object(C.a)(Object(C.a)({},e),{},{board:l});case i.CHECK_CELL:return Object(C.a)(Object(C.a)({},e),{},{board:a.payload});case i.REDUCE_MINE_LEFT:return Object(C.a)(Object(C.a)({},e),{},{amountOfMines:e.amountOfMines-1});case i.INCREASE_MINE_LEFT:return Object(C.a)(Object(C.a)({},e),{},{amountOfMines:e.amountOfMines+1});case i.TIME:var v=e.time+1;return Object(C.a)(Object(C.a)({},e),{},{time:v});case i.RESTART_GAME:var m=0;return Object(C.a)(Object(C.a)({},e),{},{time:m});case i.PAUSE:var E=a.payload;return Object(C.a)(Object(C.a)({},e),{},{pause:E});case i.FAILED:var f=1;return Object(C.a)(Object(C.a)({},e),{},{fail:f});case i.FINISH:var b=1;return Object(C.a)(Object(C.a)({},e),{},{finish:b});default:return Object(C.a)({},e)}},F={lvl:1,size:9,time:0,pause:0,restart:0,success:0,isLoading:0},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case I:var t=!e.isLoading;return Object(C.a)(Object(C.a)({},e),{},{isLoading:t});case O:var n=e.time+1;return Object(C.a)(Object(C.a)({},e),{},{time:n});case j:return Object(C.a)(Object(C.a)({},e),{},{time:0,pause:0,restart:0,success:0,isLoading:0});case h:var c=a.payload;return Object(C.a)(Object(C.a)({},e),{},{pause:c});default:return Object(C.a)({},e)}},U=t(15),G=Object(D.combineReducers)({setting:H,board:R}),K=Object(D.createStore)(G,Object(U.composeWithDevTools)(Object(D.applyMiddleware)(w.a)));l.a.render(c.a.createElement(u.a,{store:K},c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.57ec3089.chunk.js.map
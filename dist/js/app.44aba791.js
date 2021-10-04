(function(t){function e(e){for(var r,s,o=e[0],i=e[1],u=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],r=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},c=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"3fb3":function(t,e,a){"use strict";a("95ed")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],s={name:"App"},o=s,i=(a("034f"),a("2877")),u=Object(i["a"])(o,n,c,!1,null,null,null),l=u.exports,p=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("form",{staticClass:"form",on:{submit:t.fetchForm}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formsData.name,expression:"formsData.name"}],staticClass:"form__input",attrs:{placeholder:"name"},domProps:{value:t.formsData.name},on:{input:[function(e){e.target.composing||t.$set(t.formsData,"name",e.target.value)},t.updateName]}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.formsData.status,expression:"formsData.status"}],staticClass:"form__select",on:{input:t.updateStatus,change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formsData,"status",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Выберите один из вариантов")]),a("option",[t._v("Alive")]),a("option",[t._v("Dead")]),a("option",[t._v("Unknown")])]),a("button",{staticClass:"form__button"},[t._v("Поиск")])]),a("div",{staticClass:"posts"},t._l(t.allCharacters.results,(function(e){return a("div",{key:e.id,staticClass:"post"},[a("img",{staticClass:"post__image",attrs:{src:e.image,alt:e.name}}),a("router-link",{attrs:{to:{name:"character",params:{id:e.id}}}},[t._v(t._s(e.name))]),a("p",[t._v(t._s(e.species))]),t._l(e.episode,(function(e){return a("div",{key:e.id,staticClass:"episodes"},[a("router-link",{attrs:{to:{name:"episode",params:{id:e.id}}}},[t._v(t._s(e.name))])],1)}))],2)})),0),a("div",{staticClass:"buttons__container"},[a("button",{class:[{disableButton:!t.allCharacters.info.prev},{activeButton:t.allCharacters.info.prev}],attrs:{disabled:!t.allCharacters.info.prev},on:{click:function(e){t.allCharacters.info.prev&&t.fetchAllCharacters(t.allCharacters.info.prev)}}},[t._v(" Prev ")]),a("button",{class:[{disableButton:!t.allCharacters.info.next},{activeButton:t.allCharacters.info.next}],attrs:{disabled:!t.allCharacters.info.next},on:{click:function(e){t.allCharacters.info.next&&t.fetchAllCharacters(t.allCharacters.info.next)}}},[t._v(" Next ")])])])},f=[],m=a("1da1"),h=a("5530"),v=(a("96cf"),a("caad"),a("2532"),a("9911"),a("2f62")),g={name:"App",computed:Object(v["c"])(["allCharacters","formsData","link"]),methods:Object(h["a"])(Object(h["a"])({},Object(v["b"])(["fetchAllCharacters","fetchForm"])),Object(v["d"])(["updateName","updateStatus"])),mounted:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.getters.link.includes("https://rickandmortyapi.com/api/character/")&&""!==t.$store.getters.link?t.fetchAllCharacters(t.$store.getters.link):t.fetchAllCharacters("https://rickandmortyapi.com/api/character/");case 1:case"end":return e.stop()}}),e)})))()}},b=g,_=(a("b4a3"),Object(i["a"])(b,d,f,!1,null,null,null)),k=_.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"posts"},[a("div",{staticClass:"post"},[a("img",{staticClass:"post__image",attrs:{src:t.character.image,alt:t.character.name}}),a("h2",[t._v(t._s(t.character.name))]),a("p",[t._v(t._s(t.character.species))]),a("p",[t._v(t._s(t.character.location.name))])])]),a("router-link",{attrs:{to:{name:"home"}},on:{click:t.fetchAllCharacters}},[t._v("Ко всем персонажам")])],1)},w=[],j={name:"App",computed:Object(v["c"])(["character"]),methods:Object(v["b"])(["fetchCharacter","fetchAllCharacters"]),mounted:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fetchCharacter(t.$route.params.id);case 1:case"end":return e.stop()}}),e)})))()}},x=j,y=(a("3fb3"),Object(i["a"])(x,C,w,!1,null,null,null)),O=y.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h2",[t._v(t._s(t.episode.name))]),a("p",[t._v(t._s(t.episode.air_date))]),a("div",{staticClass:"episodes"},t._l(t.episode.characters,(function(t){return a("div",{key:t.id,staticClass:"episode"},[a("router-link",{attrs:{to:{name:"character",params:{id:t.id}}}},[a("img",{staticClass:"post__image",attrs:{src:t.image}})])],1)})),0),a("router-link",{staticClass:"button",attrs:{to:{name:"home"}},on:{click:t.fetchAllCharacters}},[t._v("Ко всем персонажам")])],1)},R=[],E={name:"App",computed:Object(v["c"])(["episode"]),methods:Object(v["b"])(["fetchEpisode","fetchAllCharacters"]),mounted:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fetchEpisode(t.$route.params.id);case 1:case"end":return e.stop()}}),e)})))()}},$=E,D=(a("cd35"),Object(i["a"])($,A,R,!1,null,null,null)),S=D.exports;r["a"].use(p["a"]);var P=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:k},{path:"/character/:id",name:"character",component:O},{path:"/episode/:id",name:"episode",component:S}]}),N=(a("b0c0"),a("159b"),a("bfa9")),B=a("bc3a");r["a"].use(v["a"]);var M=new N["a"]({storage:window.localStorage,reducer:function(t){return{link:t.link}}}),F=new v["a"].Store({state:{link:"",characters:{},episode:{},character:{},obj:{name:"",status:""}},mutations:{updateCharacters:function(t,e){t.characters=e},updateCharacter:function(t,e){t.character=e},updateEpisode:function(t,e){t.episode=e},updateName:function(t,e){console.log(e),t.obj.name=e.target.value},updateStatus:function(t,e){t.obj.status=e.target.value}},actions:{fetchAllCharacters:function(t){var e=arguments;return Object(m["a"])(regeneratorRuntime.mark((function a(){var r,n,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.length>1&&void 0!==e[1]?e[1]:"https://rickandmortyapi.com/api/character",console.log(r,M),void 0!==r&&""!==r||(r=void 0!==M.storage.link&&""!==M.storage.link&&!0!==r?M.storage.link:"https://rickandmortyapi.com/api/character"),console.log(r),a.next=6,B.get(r);case 6:return n=a.sent,a.next=9,n.data;case 9:c=a.sent,c.results.forEach((function(t){var e=0,a=[],r=function(){var r={};B.get(t.episode[e]).then((function(t){return r["id"]=t.data.id,r["name"]=t.data.name,a.push(r),r})),e++};while(e<5&&e<t.episode.length)r();t.episode=a})),M.storage.link=r,console.log(M.storage.link),t.commit("updateCharacters",c);case 14:case"end":return a.stop()}}),a)})))()},fetchCharacter:function(t,e){return Object(m["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(t,e),a.next=3,B.get("https://rickandmortyapi.com/api/character/"+e);case 3:return r=a.sent,a.next=6,r.data;case 6:n=a.sent,console.log(n),n.link=e,t.commit("updateCharacter",n);case 10:case"end":return a.stop()}}),a)})))()},fetchEpisode:function(t,e){return Object(m["a"])(regeneratorRuntime.mark((function a(){var r,n,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,B.get("https://rickandmortyapi.com/api/episode/"+e);case 2:return r=a.sent,a.next=5,r.data;case 5:n=a.sent,c=[],n.characters.forEach((function(t){B.get(t).then((function(t){var e={};e.image=t.data.image,e.id=t.data.id,e.link="https://rickandmortyapi.com/api/character/"+t.data.id,c.push(e)}))})),n.characters=c,M.storage.link="https://rickandmortyapi.com/api/episode/"+e,t.commit("updateEpisode",n);case 11:case"end":return a.stop()}}),a)})))()},fetchForm:function(t,e){var a=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var n,c,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),n=""!==a.state.obj.name?""!==a.state.obj.status?"?name="+a.state.obj.name+"&status="+a.state.obj.status:"?name="+a.state.obj.name:""!==a.state.obj.status?"?&status="+a.state.obj.status:"",r.next=4,B.get("https://rickandmortyapi.com/api/character/"+n);case 4:return c=r.sent,r.next=7,c.data;case 7:s=r.sent,s.results.forEach((function(t){var e=0,a=[],r=function(){var r={};B.get(t.episode[e]).then((function(t){return r["id"]=t.data.id,r["name"]=t.data.name,a.push(r),r})),e++};while(e<5&&e<t.episode.length)r();t.episode=a})),M.storage.link="https://rickandmortyapi.com/api/character/"+n,t.commit("updateCharacters",s);case 11:case"end":return r.stop()}}),r)})))()}},getters:{allCharacters:function(t){return t.characters},character:function(t){return t.character},episode:function(t){return t.episode},formsData:function(t){return t.obj},link:function(){return M.storage.link}},plugins:[M.plugin]});r["a"].config.productionTip=!1,new r["a"]({store:F,router:P,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,a){},"95ed":function(t,e,a){},b4a3:function(t,e,a){"use strict";a("dc1f")},cd35:function(t,e,a){"use strict";a("e575")},dc1f:function(t,e,a){},e575:function(t,e,a){}});
//# sourceMappingURL=app.44aba791.js.map
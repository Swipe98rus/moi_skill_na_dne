(window["webpackJsonptv-app"]=window["webpackJsonptv-app"]||[]).push([[0],{31:function(e,t,r){e.exports=r.p+"static/media/error.533ab57e.svg"},33:function(e,t,r){e.exports=r(63)},38:function(e,t,r){},39:function(e,t,r){},63:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(14),i=r.n(s),o=(r(38),r(2)),c=r(3),u=r(5),p=r(4),l=r(6),v=(r(39),r(11)),h=r(13),f=r(30);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O={listOfMovie:[],listOfPictures:[],listOfSimilarMovie:[],firstLoad:!0,name:"",years:"",sort:"",currentPage:1,moviePerPage:5},y=Object(v.b)({movieParams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_LIST_OF_FILM_NAME":return b({},e,{listOfMovie:t.payload});case"PUT_PICTURES_FOR_MOVIE":return b({},e,{listOfPictures:t.payload});case"PUT_SIMILAR_MOVIE":return b({},e,{listOfSimilarMovie:t.payload});case"PUT_YEARS_FOR_MOVIE":return b({},e,{years:t.payload});case"PUT_NAME_FOR_MOVIE":return b({},e,{name:t.payload});case"PUT_CHOOSE_SORT_FOR_MOVIE":return b({},e,{sort:t.payload});case"CHANGE_CURRENT_PAGE":return b({},e,{currentPage:t.payload});case"CHANGE_FIRST_LOAD_APP":return b({},e,{firstLoad:t.payload})}return e}}),d=r(19),k=r(1),P=r.n(k),j=r(7),x=r(12),E=r.n(x);function M(e,t){return g.apply(this,arguments)}function g(){return(g=Object(j.a)(P.a.mark(function e(t,r){var a,n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={},a=r?{query:"".concat(t),years:"".concat(r)}:{query:"".concat(t)},e.next=4,E.a.get("https://api.trakt.tv/search/movie/",{params:a,headers:{"trakt-api-key":"f50bcef04ebc3c6fea696a2573403d0a06b8b22ebc44ebb002f93572418bef46","Content-type":"application/json","trakt-api-version":2}});case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}var S=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("input",{type:"text",name:"searchFilm",onKeyPress:this.props.onSearchClick,placeholder:"Movie title"})}}]),t}(n.a.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"wrapYearsForm"},n.a.createElement("label",{htmlFor:"years"},"optional"),n.a.createElement("input",{type:"number",name:"years",placeholder:"Choose the year",onChange:this.props.getValueYears,onKeyPress:this.props.onSearchClickYears,max:"2019",min:"1970"}))}}]),t}(n.a.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"wrapSort"},n.a.createElement("label",{htmlFor:"sort"},"optional"),n.a.createElement("input",{list:"sortMethod",placeholder:"Sort",onInput:this.props.onChooseInput}),n.a.createElement("datalist",{id:"sortMethod"},n.a.createElement("option",null,"By newest"),n.a.createElement("option",null,"By oldest")))}}]),t}(n.a.Component);function I(e){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(P.a.mark(function e(t){var r,a,n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/images?api_key=ee05a415e10d527c5496fb485215ff75"));case 3:(a=e.sent).data.posters[0]?(n=a.data.posters[0].file_path,r="https://image.tmdb.org/t/p/w500".concat(n)):r="",e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:return e.abrupt("return",r);case 11:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}function L(e){return N.apply(this,arguments)}function N(){return(N=Object(j.a)(P.a.mark(function e(t){var r,a,n,s,i,o,c;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=[],a=!0,n=!1,s=void 0,e.prev=4,i=t[Symbol.iterator]();case 6:if(a=(o=i.next()).done){e.next=16;break}return c=o.value,e.t0=r,e.next=11,I(c.movie.ids.tmdb);case 11:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 13:a=!0,e.next=6;break;case 16:e.next=22;break;case 18:e.prev=18,e.t2=e.catch(4),n=!0,s=e.t2;case 22:e.prev=22,e.prev=23,a||null==i.return||i.return();case 25:if(e.prev=25,!n){e.next=28;break}throw s;case 28:return e.finish(25);case 29:return e.finish(22);case 30:return e.abrupt("return",r);case 31:case"end":return e.stop()}},e,null,[[4,18,22,30],[23,,25,29]])}))).apply(this,arguments)}function R(e){return A.apply(this,arguments)}function A(){return(A=Object(j.a)(P.a.mark(function e(t){var r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.prev=1,e.next=4,E.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/similar?api_key=ee05a415e10d527c5496fb485215ff75&page=1"));case 4:if(!(r=e.sent)){e.next=7;break}return e.abrupt("return",r.data.results);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}},e,null,[[1,9]])}))).apply(this,arguments)}function F(e){return T.apply(this,arguments)}function T(){return(T=Object(j.a)(P.a.mark(function e(t){var r,a,n,s,i,o,c;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=[],a=!0,n=!1,s=void 0,e.prev=4,i=t[Symbol.iterator]();case 6:if(a=(o=i.next()).done){e.next=16;break}return c=o.value,e.t0=r,e.next=11,R(c.movie.ids.tmdb);case 11:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 13:a=!0,e.next=6;break;case 16:e.next=22;break;case 18:e.prev=18,e.t2=e.catch(4),n=!0,s=e.t2;case 22:e.prev=22,e.prev=23,a||null==i.return||i.return();case 25:if(e.prev=25,!n){e.next=28;break}throw s;case 28:return e.finish(25);case 29:return e.finish(22);case 30:return e.abrupt("return",r);case 31:case"end":return e.stop()}},e,null,[[4,18,22,30],[23,,25,29]])}))).apply(this,arguments)}var Y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"savePicturesInState",value:function(){var e=Object(j.a)(P.a.mark(function e(t){var r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:return r=e.sent,e.next=5,this.props.setPicturesMovie(r);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"saveSimilarMovieInState",value:function(){var e=Object(j.a)(P.a.mark(function e(t){var r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:return r=e.sent,e.next=5,this.props.setListSimilarMovie(r);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"saveMovieList",value:function(){var e=Object(j.a)(P.a.mark(function e(){var t,r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.years){e.next=9;break}return e.next=3,M(this.props.name,this.props.years);case 3:return t=e.sent,e.next=6,this.props.setListMovie(t);case 6:return e.abrupt("return",t);case 9:return e.next=11,M(this.props.name);case 11:return r=e.sent,e.next=14,this.props.setListMovie(r);case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setMovieWithAllData",value:function(){var e=Object(j.a)(P.a.mark(function e(){var t;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.listOfPictures){e.next=3;break}return e.next=3,this.savePicturesInState([]);case 3:return e.next=5,this.saveMovieList();case 5:t=e.sent,this.savePicturesInState(t),this.saveSimilarMovieInState(t);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onSearchClick",value:function(){var e=Object(j.a)(P.a.mark(function e(t){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==t.which){e.next=5;break}return e.next=3,this.props.setName(t.target.value);case 3:return e.next=5,this.setMovieWithAllData();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"firstLoadingApp",value:function(){var e=Object(j.a)(P.a.mark(function e(){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.setName("");case 2:return e.next=4,this.setMovieWithAllData();case 4:return e.next=6,this.props.checkInFirstLoad(!1);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getValueYears",value:function(){var e=Object(j.a)(P.a.mark(function e(t){var r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=parseInt(t.target.value.length))>4)){e.next=5;break}t.target.style.color="#e17055",e.next=18;break;case 5:if(!(r<4&&r>=1)){e.next=9;break}t.target.style.color="#e17055",e.next=18;break;case 9:if(4!==r){e.next=15;break}return t.target.style.color="#00b894",e.next=13,this.props.setYears(t.target.value);case 13:e.next=18;break;case 15:if(0!==r){e.next=18;break}return e.next=18,this.props.setYears("");case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"onSearchClickYears",value:function(e){13===e.which&&this.setMovieWithAllData()}},{key:"onChooseInput",value:function(){var e=Object(j.a)(P.a.mark(function e(t){var r,a,n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.setSort(t.target.value);case 2:return r=Object(d.a)(this.props.listOfMovie),a=Object(d.a)(this.props.listOfMovie),console.log(a),console.log(this.props.listOfMovie),n=function(e,t){return e.movie.year-t.movie.year},e.next=9,r.sort(n);case 9:if("By newest"!==this.props.sort){e.next=18;break}return e.next=12,r.reverse();case 12:return e.next=14,this.props.setListMovie(r);case 14:this.savePicturesInState(r),this.saveSimilarMovieInState(r),e.next=23;break;case 18:if("By oldest"!==this.props.sort){e.next=23;break}return e.next=21,this.props.setListMovie(r);case 21:this.savePicturesInState(r),this.saveSimilarMovieInState(r);case 23:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"setting",id:"navBarSetting"},n.a.createElement(S,{onSearchClick:function(t){e.onSearchClick(t)}}),n.a.createElement(w,{getValueYears:function(t){e.getValueYears(t)},onSearchClickYears:function(t){e.onSearchClickYears(t)}}),n.a.createElement(_,{onChooseInput:function(t){e.onChooseInput(t)}}))}}]),t}(n.a.Component),U=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(Y,{name:this.props.name,years:this.props.years,listOfMovie:this.props.listOfMovie,sort:this.props.sort,setListMovie:this.props.setListMovie,setPicturesMovie:this.props.setPicturesMovie,setListSimilarMovie:this.props.setListSimilarMovie,setYears:this.props.setYears,setName:this.props.setName,setSort:this.props.setSort,checkInFirstLoad:this.props.checkInFirstLoad})}}]),t}(n.a.Component),V={setListMovie:function(e){return{type:"PUT_LIST_OF_FILM_NAME",payload:e}},setPicturesMovie:function(e){return{type:"PUT_PICTURES_FOR_MOVIE",payload:e}},setListSimilarMovie:function(e){return{type:"PUT_SIMILAR_MOVIE",payload:e}},setYears:function(e){return{type:"PUT_YEARS_FOR_MOVIE",payload:e}},setName:function(e){return{type:"PUT_NAME_FOR_MOVIE",payload:e}},setSort:function(e){return{type:"PUT_CHOOSE_SORT_FOR_MOVIE",payload:e}},checkInFirstLoad:function(e){return{type:"CHANGE_FIRST_LOAD_APP",payload:e}}},D=Object(h.b)(function(e){return{name:e.movieParams.name,years:e.movieParams.years,listOfMovie:e.movieParams.listOfMovie,sort:e.movieParams.sort}},V)(U),B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this,t=[],r=1;r<=Math.ceil(this.props.totalMovie/this.props.moviePerPage);r++)t.push(r);return n.a.createElement("div",null,n.a.createElement("div",{className:"pagination"},t.map(function(t){return n.a.createElement("a",{href:"#navBarSetting",className:"pageLink",key:t,onClick:function(r){r.preventDefault(),e.props.paginate(t)}},t)})))}}]),t}(n.a.Component),G=r(32),H=r(31),W=r.n(H),q=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(u.a)(this,Object(p.a)(t).call(this,e))).preloaderRef=n.a.createRef(),r}return Object(l.a)(t,e),Object(c.a)(t,[{key:"preloader",value:function(e){var t=this;setTimeout(function(){t.preloaderRef.current.style.opacity="0",t.preloaderRef.current.style.visibility="hidden"},1500)}},{key:"render",value:function(){var e=this,t=this.props.film.movie.title,r=this.props.film.movie.year,a=this.props.similar,s=function(e){if(void 0===e){return["","moviePosterImg"]}if(""===e){return[W.a,"moviePosterError"]}return[e,"moviePosterImg"]}(this.props.url),i=Object(G.a)(s,2),o=i[0],c=i[1];return n.a.createElement("div",{className:"OneOfMovie"},n.a.createElement("div",{className:"moviePoster"},n.a.createElement("div",{className:"preloader",ref:this.preloaderRef},n.a.createElement("div",{className:"loader"})),n.a.createElement("img",{onLoad:function(t){e.preloader(t.target)},className:c,src:o,alt:"Poster for film"})),n.a.createElement("div",{className:"movieTitle"},n.a.createElement("h2",null,t)),n.a.createElement("div",{className:"movieYear"},n.a.createElement("p",null,r)),n.a.createElement("div",{className:"Similar"},n.a.createElement("h3",null,"Similar movies"),a?a[0]?a.map(function(e){return n.a.createElement("p",{key:e.id},e.title)}):"Not found":"Searching.."))}}]),t}(n.a.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.props.currentMovies.map(function(t,r){var a,s=e.props.indexOfFirstMovie+r;return void 0!==e.props.similar[s]&&(a=e.props.similar[s]).splice(3,a.length),n.a.createElement(q,{film:t,key:t.movie.ids.trakt,url:e.props.url[s],similar:a})}))}}]),t}(n.a.Component),K=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.currentPage*this.props.moviePerPage,r=t-this.props.moviePerPage,a=this.props.listOfMovie.slice(r,t);return n.a.createElement("div",null,n.a.createElement(J,{currentMovies:a,url:this.props.listOfPictures,similar:this.props.listOfSimilarMovie,indexOfFirstMovie:r}),n.a.createElement(B,{moviePerPage:this.props.moviePerPage,totalMovie:this.props.listOfMovie.length,paginate:function(t){e.props.setCurrentPage(t)}}))}}]),t}(n.a.Component),$={setCurrentPage:function(e){return{type:"CHANGE_CURRENT_PAGE",payload:e}}},z=Object(h.b)(function(e){return{listOfMovie:e.movieParams.listOfMovie,listOfPictures:e.movieParams.listOfPictures,listOfSimilarMovie:e.movieParams.listOfSimilarMovie,currentPage:e.movieParams.currentPage,moviePerPage:e.movieParams.moviePerPage}},$)(K),Q=Object(v.c)(y),X=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(h.a,{store:Q},n.a.createElement("div",{className:"App"},n.a.createElement(D,null),n.a.createElement(z,null)))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.54c32ed0.chunk.js.map
(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{150:function(e,t,a){},151:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(26),i=a.n(c),r=(a(150),a(120)),o=a(121),l=a(131),u=a(130),h=(a(151),a(212)),v=a(211),d=a(214),j=a(129),g=a(9),b=function(e){var t=e.image,a=e.title,n=e.overview,s=e.voteAverage,c=e.releaseDate,i=e.voteCount;return Object(g.jsxs)(d.a,{children:[Object(g.jsx)(j.a,{src:null===t?"https://i.ibb.co/TBtYfX4/no-picture-available-icon-1-1.jpg":"https://image.tmdb.org/t/p/w500".concat(t),size:"medium"}),Object(g.jsxs)(d.a.Content,{children:[Object(g.jsx)(d.a.Header,{children:a}),Object(g.jsx)(d.a.Meta,{children:Object(g.jsx)("span",{className:"date",children:c})}),Object(g.jsx)(d.a.Description,{children:n||"No overview available"})]}),Object(g.jsxs)(d.a.Content,{extra:!0,children:[Object(g.jsx)(h.a,{name:"size-small",value:s,precision:.1,max:10,readOnly:!0}),0===i?Object(g.jsx)(v.a,{children:"No reviews"}):Object(g.jsx)(v.a,{children:"".concat(s," stars with ").concat(i," reviews")})]})]})},p=a(208),O=a(210),f=a(128),m=a.n(f),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loading:!1,results:[],query:"",totalPages:1,page:1},e}return Object(o.a)(a,[{key:"setSearchResultsState",value:function(e,t){this.setState({results:e.results,loading:!1,totalPages:e.total_pages,page:t})}},{key:"searchMovies",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(void 0===e)return this.setState({loading:!1}),null;this.setState({loading:!0,query:e}),m.a.get("https://api.themoviedb.org/3/search/movie?api_key=55f554311c10b0b4833215d91408b25d&query=".concat(e,"&page=").concat(a)).then((function(e){if("error"in e)return t.setState({loading:!1});console.log("hey",e),t.setSearchResultsState(e.data,a)})).catch((function(e){return t.setState({loading:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.results,s=t.query,c=t.totalPages,i=t.page;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("div",{className:"Header",children:Object(g.jsx)("h1",{children:"What movie would you like to search for?"})}),Object(g.jsx)("div",{className:"SearchBar",children:Object(g.jsx)(p.a,{loading:a,onResultSelect:function(e,t){return console.log("hello",t)},onSearchChange:function(t,a){return e.searchMovies(a.value)},results:n,value:s,size:"massive",open:!1})}),Object(g.jsx)(d.a.Group,{centered:!0,children:n.map((function(e,t){return Object(g.jsx)(b,{image:e.backdrop_path,title:e.title,releaseDate:e.release_date,overview:e.overview,voteAverage:e.vote_average,voteCount:e.vote_count},t)}))}),Object(g.jsx)("div",{className:"Pagination",children:s&&!a?Object(g.jsx)(O.a,{totalPages:c,activePage:i,onPageChange:function(t,a){return e.searchMovies(s,a.activePage)}}):null})]})}}]),a}(n.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,218)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};a(179);i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root")),y()}},[[180,1,2]]]);
//# sourceMappingURL=main.64bf7961.chunk.js.map
(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[21],{1144:function(e,n,t){e.exports=t(1145)},1145:function(e,n,t){"use strict";t.r(n);var a=t(5),r=t(6),o=t(8),i=t(7),c=t(0),s=t.n(c),u=t(23),d=t.n(u),l=t(9),f=t(4),h=t(1),m=t(66),b=t(61),g=t(14),p=t(88),v=t(10),w=window.shared.pageOptions,k=w.repoID,O=w.sharedToken,E=w.rawPath,y=w.err,j=function(e){Object(o.a)(t,e);var n=Object(i.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(m.a,{content:s.a.createElement(C,null)})}}]),t}(s.a.Component),C=function(e){Object(o.a)(t,e);var n=Object(i.a)(t);function t(e){var r;return Object(a.a)(this,t),(r=n.call(this,e)).changeImageURL=function(e){if("image"==e.type){var n=e.data.src;if(!new RegExp(h.Zb+"/lib/"+k+"/file.*raw=1").test(n))return;var t=n.substring(h.Zb.length),a=t.indexOf("/file"),r=t.indexOf("?");t=t.substring(a+5,r),e.data.src=h.Zb+"/view-image-via-share-link/?token="+O+"&path="+f.a.encodePath(t)}return e},r.modifyValueBeforeRender=function(e){return f.a.changeMarkdownNodes(e,r.changeImageURL)},r.state={markdownContent:"",loading:!y},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.getFileContent(E).then((function(n){e.setState({markdownContent:n.data,loading:!1})})).catch((function(e){var n=f.a.getErrorMsg(e);v.a.danger(n)}))}},{key:"render",value:function(){return y?s.a.createElement(b.a,null):this.state.loading?s.a.createElement(g.a,null):s.a.createElement("div",{className:"shared-file-view-body"},s.a.createElement("div",{className:"md-view"},s.a.createElement(p.a,{markdownContent:this.state.markdownContent,showTOC:!1,serviceURL:h.Zb,sharedToken:O,repoID:k,modifyValueBeforeRender:this.modifyValueBeforeRender})))}}]),t}(s.a.Component);d.a.render(s.a.createElement(j,null),document.getElementById("wrapper"))}},[[1144,1,0]]]);
//# sourceMappingURL=sharedFileViewMarkdown.chunk.js.map
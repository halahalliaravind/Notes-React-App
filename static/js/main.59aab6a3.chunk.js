(this.webpackJsonpnotesapp=this.webpackJsonpnotesapp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),i=a.n(l),c=(a(16),a(2)),s=a(3),o=a(5),u=a(4),d=(a(17),a(18),a(19),a(8)),h=a.n(d),m=a(9),p=a(10),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"current-notes-body"},this.props.FullData.map((function(t){var a=t.title,n=t.data,l=t.time,i=t.id;return r.a.createElement("div",{className:"archive-note-with-buttons"},r.a.createElement("div",null,r.a.createElement("div",{className:"title-wrapper"},r.a.createElement(h.a,{highlightClassName:"YourHighlightClass title-data",searchWords:[e.props.search],autoEscape:!0,textToHighlight:a})),r.a.createElement("div",{className:"archive-data"},n),r.a.createElement("div",{className:"archive-time"},l)),r.a.createElement("div",{className:"edit-delete-wrapper"},r.a.createElement("span",{className:"edit-button"},r.a.createElement(m.a,{onClick:function(t){return e.props.editFunc(t)},id:i,color:"yellow"})),r.a.createElement("span",{className:"delete-button"},r.a.createElement(p.a,{onClick:function(t){return e.props.deleteFunc(t)},id:i,color:"red"}))))})))}}]),a}(n.Component),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSearchChange=function(e){if(""!==e.target.value){var t=n.state.temp.filter((function(t){return t.title.includes(e.target.value)}));n.setState({search:e.target.value,FullData:t})}else{var a=n.state.temp;n.setState({search:"",FullData:a})}},n.handleDataChange=function(e){n.setState({data:e.target.value})},n.handleTitleChange=function(e){n.setState({title:e.target.value})},n.save=function(){if(n.state.edit&&""!==n.state.data&&""!==n.state.title){var e=n.state.temp,t=e.findIndex((function(e){return e.id===parseInt(n.state.id)}));e[t].title=n.state.title,e[t].data=n.state.data,e[t].time=n.state.time,e[t].edit=!1,n.setState({temp:e,FullData:e}),n.clearNotesArea()}else if(""!==n.state.data&&""!==n.state.title){var a=n.state.id;a+=1;var r={title:n.state.title,data:n.state.data,time:(new Date).toLocaleString().replace(",","").replace(/:.. /," "),id:a},l=[];(l=n.state.temp).unshift(r),n.setState({FullData:l,temp:l,id:a}),n.clearNotesArea()}},n.clearNotesArea=function(){n.setState({title:"",data:"",time:"",edit:!1})},n.editFunc=function(e){var t=n.state.temp.findIndex((function(t){return t.id===parseInt(e.target.id)})),a=n.state.temp[t];n.setState({search:"",title:a.title,data:a.data,time:a.time,id:a.id,edit:!0})},n.deleteFunc=function(e){if(!n.state.edit){var t=n.state.temp.findIndex((function(t){return t.id===parseInt(e.target.id)})),a=n.state.temp;a.splice(t,1),n.setState({search:"",temp:a,FullData:a})}},n.state={temp:[],search:"",title:"",edit:"",data:"",time:"",id:0,FullData:[]},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{placeholder:"Search Notes by Title......",className:"search-bar",value:this.state.search,onChange:this.handleSearchChange})),r.a.createElement("div",null,r.a.createElement("input",{className:"title-input",type:"type",placeholder:"Title...",value:this.state.title,onChange:this.handleTitleChange}),r.a.createElement("br",null),r.a.createElement("textarea",{className:"details-input",cols:"20",rows:"3",placeholder:"Enter your note here...",value:this.state.data,onChange:this.handleDataChange}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-four blue",onClick:this.save},"Save Note")),r.a.createElement(v,{search:this.state.search,FullData:this.state.FullData,deleteFunc:this.deleteFunc,editFunc:this.editFunc}))}}]),a}(n.Component),E=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement("footer",null," ",r.a.createElement("span",null,"React-Notes-App@newtonSchool")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.59aab6a3.chunk.js.map
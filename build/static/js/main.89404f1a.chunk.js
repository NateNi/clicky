(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(7),i=a.n(r),l=(a(14),a(1)),o=a(2),s=a(4),d=a(3),k=a(5),m=(a(16),function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={top:0,current:0},a}return Object(k.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-wrapper green darken-4"},n.a.createElement("h4",{className:"alignleft"},"Current Score: ",this.props.count),n.a.createElement("div",{className:"aligncenter"},n.a.createElement("img",{className:"center logo",alt:"Lord of the Rings Logo",src:"./Images/lotr.png"})),n.a.createElement("h4",{className:"right alignright"},"Top Score: ",this.props.topScore)))}}]),t}(c.Component)),u=function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(){a.props.pic.clicked?a.props.startReset():(a.props.changeClicked(a.props.pic.key),console.log("shuffle"),a.props.rando())},a}return Object(k.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"col s6 m4 l3"},n.a.createElement("img",{onClick:this.handleClick,alt:this.props.pic.file,src:"./Images/"+this.props.pic.file,width:"150px",height:"150px"}))}}]),t}(c.Component),f=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"info"},n.a.createElement("div",{className:"vertical-middle"},n.a.createElement("h2",{className:"middle"},"Clicky Game"),n.a.createElement("h5",{className:"middle"},"Increase your score by clicking on a character. Don't click on any more than once!"))),n.a.createElement("h5",{className:"status"},this.props.doReset?"GAME OVER. Try Again!":"Select a character!"))}}]),t}(c.Component)),p=(a(20),[{file:"Aragorn.JPG",key:1,clicked:!1},{file:"Arwen.JPG",key:2,clicked:!1},{file:"Elrond.JPG",key:3,clicked:!1},{file:"Faramir.PNG",key:4,clicked:!1},{file:"Frodo.PNG",key:5,clicked:!1},{file:"Gandalf.JPG",key:6,clicked:!1},{file:"Gimli.PNG",key:7,clicked:!1},{file:"Gollum.PNG",key:8,clicked:!1},{file:"Legolas.PNG",key:9,clicked:!1},{file:"Pippin.JPG",key:10,clicked:!1},{file:"Saruman.JPG",key:11,clicked:!1},{file:"Sauron.JPG",key:12,clicked:!1}]),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={images:[{file:"Aragorn.JPG",key:1,clicked:!1},{file:"Arwen.JPG",key:2,clicked:!1},{file:"Elrond.JPG",key:3,clicked:!1},{file:"Faramir.PNG",key:4,clicked:!1},{file:"Frodo.PNG",key:5,clicked:!1},{file:"Gandalf.JPG",key:6,clicked:!1},{file:"Gimli.PNG",key:7,clicked:!1},{file:"Gollum.PNG",key:8,clicked:!1},{file:"Legolas.PNG",key:9,clicked:!1},{file:"Pippin.JPG",key:10,clicked:!1},{file:"Saruman.JPG",key:11,clicked:!1},{file:"Sauron.JPG",key:12,clicked:!1}],counter:0,top:0,reset:!1},a.randomizeArray=function(){for(var e,t,c=p.length;0!==c;)t=Math.floor(Math.random()*c),e=p[c-=1],p[c]=p[t],p[t]=e;a.updateState()},a.updateState=function(){var e=a.state.counter+1;a.setState({reset:!1}),a.setState({counter:a.state.counter+1}),a.setState({images:p}),e>=a.state.top&&a.setState({top:e}),a.render()},a.startReset=function(){for(var e=0;e<p.length;e++)p[e].clicked=!1;console.log("RESETTING"),a.setState({images:p}),a.setState({counter:0}),a.setState({reset:!0})},a.changeClicked=function(e){for(var t=0;t<p.length;t++)p[t].key===e&&(p[t].clicked=!0);console.log("Changing Clicked"),a.setState({images:p})},a}return Object(k.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log("now rendering"),n.a.createElement("div",null,n.a.createElement(m,{count:this.state.counter,topScore:this.state.top}),n.a.createElement(f,{doReset:this.state.reset}),n.a.createElement("div",{className:"container main-body"},n.a.createElement("div",{className:"row"},this.state.images.map(function(t){return n.a.createElement(u,{pic:t,key:t.key,rando:e.randomizeArray,changeClicked:e.changeClicked,startReset:e.startReset})}))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(22)}},[[8,2,1]]]);
//# sourceMappingURL=main.89404f1a.chunk.js.map
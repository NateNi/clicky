(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),i=a.n(r),l=(a(14),a(1)),o=a(2),s=a(4),d=a(3),k=a(5),p=(a(16),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={top:0,current:0},a}return Object(k.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper green darken-4"},c.a.createElement("h4",{className:"alignleft"},"Current Score: ",this.props.count),c.a.createElement("div",{className:"aligncenter"},c.a.createElement("img",{className:"center logo",alt:"Lord of the Rings Logo",src:"./Images/lotr.png"})),c.a.createElement("h4",{className:"right alignright"},"Top Score: ",this.props.topScore)))}}]),t}(n.Component)),m=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).handleClick=function(){a.props.pic.clicked?a.props.startReset():(a.props.changeClicked(a.props.pic.key),console.log("shuffle"),a.props.rando())},a}return Object(k.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"col s6 m4 l3"},c.a.createElement("img",{onClick:this.handleClick,alt:this.props.pic.file,src:"./Images/"+this.props.pic.file,width:"150px",height:"150px"}))}}]),t}(n.Component),u=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"vertical-middle"},c.a.createElement("h2",{className:"middle"},"Clicky Game"),c.a.createElement("h5",{className:"middle"},"Increase your score by clicking on a character. Don't click on any more than once!"))),c.a.createElement("h5",{className:"status"},this.props.doReset?"GAME OVER. Try Again!":"Select a character!"))}}]),t}(n.Component)),f=(a(20),[{file:"Aragorn.JPG",key:1,clicked:!1},{file:"Arwen.JPG",key:2,clicked:!1},{file:"Elrond.JPG",key:3,clicked:!1},{file:"Faramir.PNG",key:4,clicked:!1},{file:"Frodo.PNG",key:5,clicked:!1},{file:"Gandalf.JPG",key:6,clicked:!1},{file:"Gimli.PNG",key:7,clicked:!1},{file:"Gollum.PNG",key:8,clicked:!1},{file:"Legolas.PNG",key:9,clicked:!1},{file:"Pippin.JPG",key:10,clicked:!1},{file:"Saruman.JPG",key:11,clicked:!1},{file:"Sauron.JPG",key:12,clicked:!1}]),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={images:[{file:"Aragorn.jpg",key:1,clicked:!1},{file:"Arwen.jpg",key:2,clicked:!1},{file:"Elrond.jpg",key:3,clicked:!1},{file:"Faramir.png",key:4,clicked:!1},{file:"Frodo.png",key:5,clicked:!1},{file:"Gandalf.jpg",key:6,clicked:!1},{file:"Gimli.png",key:7,clicked:!1},{file:"Gollum.png",key:8,clicked:!1},{file:"Legolas.png",key:9,clicked:!1},{file:"Pippin.jpg",key:10,clicked:!1},{file:"Saruman.jpg",key:11,clicked:!1},{file:"Sauron.jpg",key:12,clicked:!1}],counter:0,top:0,reset:!1},a.randomizeArray=function(){for(var e,t,n=f.length;0!==n;)t=Math.floor(Math.random()*n),e=f[n-=1],f[n]=f[t],f[t]=e;a.updateState()},a.updateState=function(){var e=a.state.counter+1;a.setState({reset:!1}),a.setState({counter:a.state.counter+1}),a.setState({images:f}),e>=a.state.top&&a.setState({top:e}),a.render()},a.startReset=function(){for(var e=0;e<f.length;e++)f[e].clicked=!1;console.log("RESETTING"),a.setState({images:f}),a.setState({counter:0}),a.setState({reset:!0})},a.changeClicked=function(e){for(var t=0;t<f.length;t++)f[t].key===e&&(f[t].clicked=!0);console.log("Changing Clicked"),a.setState({images:f})},a}return Object(k.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log("now rendering"),c.a.createElement("div",null,c.a.createElement(p,{count:this.state.counter,topScore:this.state.top}),c.a.createElement(u,{doReset:this.state.reset}),c.a.createElement("div",{className:"container main-body"},c.a.createElement("div",{className:"row"},this.state.images.map(function(t){return c.a.createElement(m,{pic:t,key:t.key,rando:e.randomizeArray,changeClicked:e.changeClicked,startReset:e.startReset})}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(22)}},[[8,2,1]]]);
//# sourceMappingURL=main.8deabf15.chunk.js.map
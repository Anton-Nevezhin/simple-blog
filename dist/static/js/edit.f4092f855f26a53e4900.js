webpackJsonp([1],[,function(e,t,o){e.exports={default:o(2),__esModule:!0}},function(e,t,o){var n=o(3),a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},function(e,t){var o=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=o)},,,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),a=o.n(n);o(0);console.log(document.location.href);var l=localStorage.getItem("mas"),i=JSON.parse(l),r=location.search;r=r.substr(3),console.log(r),console.log(r);var u=document.getElementById("edittitle"),c=document.getElementById("edittextarea"),s=document.getElementById("editauthor");u.value=i[r].title,c.value=i[r].text,s.value=i[r].author,document.getElementById("editbutton").addEventListener("click",function(){i[r].title=u.value,i[r].text=c.value,i[r].author=s.value,l=a()(i),localStorage.setItem("mas",l);var e=void 0;e="single.html?n="+r,document.location.assign(e)})}],[7]);
webpackJsonp([2],{9:function(e,t,n){"use strict";function o(e){document.getElementById("stitle").innerHTML=i[e].title,document.getElementById("stext").innerHTML=i[e].text,document.getElementById("sauthor").innerHTML=i[e].author,document.getElementById("sdate").innerHTML=i[e].date,document.getElementById("simage").src=i[e].image}Object.defineProperty(t,"__esModule",{value:!0});var d=(n(0),localStorage.getItem("mas")),i=JSON.parse(d),c=location.search;c=c.substr(3),document.getElementById("singlebutton").addEventListener("click",function(){var e=void 0;e="edit.html?n="+c,document.location.assign(e)}),o(c)}},[9]);
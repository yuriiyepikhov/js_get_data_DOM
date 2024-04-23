var t=0,e=document.querySelectorAll(".population"),o=document.querySelector(".total-population"),n=document.querySelector(".average-population");e.forEach(function(e){var o=e.textContent;t+=+o.replaceAll(",","")});var l=t/e.length;o.textContent=t.toLocaleString("en-US"),n.textContent=l.toLocaleString("en-US");
//# sourceMappingURL=index.0e40c4d3.js.map

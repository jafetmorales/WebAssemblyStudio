(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{459:function(e,n){},603:function(e,n,i){"use strict";i.r(n),i.d(n,"downloadProject",function(){return c});var o=i(1),t=i(463);async function c(e,n){const i=new t;let c="wasm-project.zip";void 0!==n&&(c=`wasm-project-${n}.zip`);const a=[];for(e.mapEachFile(e=>a.push({filePrefix:"",file:e}));a.length>0;){const{filePrefix:e,file:n}=a.shift(),t=e+n.name;n instanceof o.a?(n.mapEachFile(e=>a.push({filePrefix:t+"/",file:e})),i.folder(t)):i.file(t,n.data)}await i.generateAsync({type:"blob",mimeType:"application/zip"}).then(e=>{const n=document.createElement("a");n.download=c,n.href=URL.createObjectURL(e),document.body.appendChild(n),n.click(),document.body.removeChild(n)})}}}]);
//# sourceMappingURL=4.bundle.js.map
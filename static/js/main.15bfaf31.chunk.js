(this.webpackJsonpbelbin2=this.webpackJsonpbelbin2||[]).push([[0],{77:function(e,a,o){"use strict";o.r(a);var t=o(0),n=o.n(t),s=o(10),i=o.n(s),c=o(28),r=o(22),l=o(132),d=o(135),u=o(134),m=o(131),q=o(124),v=o(78),p=o(133),h=o(125),b=o(43),j=o.n(b),k=o(48),y=o.n(k),z=o(49),f=o.n(z),g=function(){return Object(c.b)()},O=c.c,x=(o(39).chart,function(e){return{chart:{type:"variablepie"},colors:["#2ec277","#2db799","#b7e886","#007770"],title:{text:"V\xe1\u0161 v\xfdsledok Belbinovho testu"},series:[{minPointSize:0,zMin:0,zMax:27,data:[{name:"Re\u017eis\xe9r (SH)",y:1,z:Math.pow(e.sh,1)},{name:"Zh\xe1\u0148a\u010d (RI)",y:1,z:Math.pow(e.ri,1)},{name:"Predseda (CO)",y:1,z:Math.pow(e.co,1)},{name:"Hasi\u010d (TW)",y:1,z:Math.pow(e.tw,1)},{name:"\u0164aha\u010d (IM)",y:1,z:Math.pow(e.im,1)},{name:"Do\u0165ahova\u010d (CF)",y:1,z:Math.pow(e.cf,1)},{name:"Chrli\u010d (PL)",y:1,z:Math.pow(e.pl,1)},{name:"Analytik (ME)",y:1,z:Math.pow(e.me,1)}]}]}}),M=o(35),I=function(e,a){var o=0;return e.forEach((function(e){o+=a[e].value})),o},S=function(e){return{q1:I(["q1a","q1b","q1c","q1d","q1e","q1f","q1g","q1h"],e),q2:I(["q2a","q2b","q2c","q2d","q2e","q2f","q2g","q2h"],e),q3:I(["q3a","q3b","q3c","q3d","q3e","q3f","q3g","q3h"],e),q4:I(["q4a","q4b","q4c","q4d","q4e","q4f","q4g","q4h"],e),q5:I(["q5a","q5b","q5c","q5d","q5e","q5f","q5g","q5h"],e),q6:I(["q6a","q6b","q6c","q6d","q6e","q6f","q6g","q6h"],e),q7:I(["q7a","q7b","q7c","q7d","q7e","q7f","q7g","q7h"],e)}},V=function(e){return{sh:I(["q1f","q2e","q3c","q4b","q5d","q6g","q7a"],e),ri:I(["q1a","q2c","q3f","q4g","q5e","q6h","q7d"],e),co:I(["q1d","q2b","q3a","q4h","q5f","q6c","q7g"],e),tw:I(["q1b","q2f","q3e","q4a","q5c","q6b","q7h"],e),im:I(["q1g","q2a","q3h","q4d","q5b","q6f","q7e"],e),cf:I(["q1e","q2h","q3b","q4f","q5g","q6d","q7c"],e),pl:I(["q1c","q2g","q3d","q4e","q5h","q6a","q7f"],e),me:I(["q1h","q2d","q3g","q4c","q5a","q6e","q7b"],e)}},w=Object(M.b)({name:"inputs",initialState:{inputs:{q1a:{value:0,selected:!1},q1b:{value:0,selected:!1},q1c:{value:0,selected:!1},q1d:{value:0,selected:!1},q1e:{value:0,selected:!1},q1f:{value:0,selected:!1},q1g:{value:0,selected:!1},q1h:{value:0,selected:!1},q2a:{value:0,selected:!1},q2b:{value:0,selected:!1},q2c:{value:0,selected:!1},q2d:{value:0,selected:!1},q2e:{value:0,selected:!1},q2f:{value:0,selected:!1},q2g:{value:0,selected:!1},q2h:{value:0,selected:!1},q3a:{value:0,selected:!1},q3b:{value:0,selected:!1},q3c:{value:0,selected:!1},q3d:{value:0,selected:!1},q3e:{value:0,selected:!1},q3f:{value:0,selected:!1},q3g:{value:0,selected:!1},q3h:{value:0,selected:!1},q4a:{value:0,selected:!1},q4b:{value:0,selected:!1},q4c:{value:0,selected:!1},q4d:{value:0,selected:!1},q4e:{value:0,selected:!1},q4f:{value:0,selected:!1},q4g:{value:0,selected:!1},q4h:{value:0,selected:!1},q5a:{value:0,selected:!1},q5b:{value:0,selected:!1},q5c:{value:0,selected:!1},q5d:{value:0,selected:!1},q5e:{value:0,selected:!1},q5f:{value:0,selected:!1},q5g:{value:0,selected:!1},q5h:{value:0,selected:!1},q6a:{value:0,selected:!1},q6b:{value:0,selected:!1},q6c:{value:0,selected:!1},q6d:{value:0,selected:!1},q6e:{value:0,selected:!1},q6f:{value:0,selected:!1},q6g:{value:0,selected:!1},q6h:{value:0,selected:!1},q7a:{value:0,selected:!1},q7b:{value:0,selected:!1},q7c:{value:0,selected:!1},q7d:{value:0,selected:!1},q7e:{value:0,selected:!1},q7f:{value:0,selected:!1},q7g:{value:0,selected:!1},q7h:{value:0,selected:!1}},sums:{q1:0,q2:0,q3:0,q4:0,q5:0,q6:0,q7:0},results:{sh:0,ri:0,co:0,tw:0,im:0,cf:0,pl:0,me:0}},reducers:{changeValue:{reducer:function(e,a){e.inputs[a.payload.id].value=a.payload.value,e.sums=S(e.inputs)},prepare:function(e){return{payload:e}}},toggleInput:{reducer:function(e,a){e.inputs[a.payload.id].selected=!e.inputs[a.payload.id].selected,e.sums=S(e.inputs)},prepare:function(e){return{payload:e}}},setResults:{reducer:function(e,a){e.results=a.payload.results},prepare:function(e){return{payload:e}}}}}),N=w.actions,R=N.changeValue,D=N.toggleInput,T=N.setResults,B=w.reducer,C=function(){var e=g(),a=O((function(e){return e.inputs.inputs})),o=O((function(e){return e.inputs.sums})),n=Object(t.useState)(" "),s=Object(r.a)(n,2),i=s[0],c=s[1];return{handleSubmit:function(t){return t&&t.preventDefault(),console.log("from validateSubmit:",o),void(10!==o.q1||10!==o.q2||10!==o.q3||10!==o.q4||10!==o.q5||10!==o.q6||10!==o.q7?c("V ka\u017edej sekcii treba rozdeli\u0165 presne 10 bodov."):(c(""),e(T({results:V(a)}))))},handleInputChange:function(a){a.persist();var o=a.target,t=o.name,n=o.value;n<0&&(n=0),n>10&&(n=10),""===n&&(n=0),e(R({id:t,value:parseInt(n,10)}))},errors:i}},H={q1:{title:"I. \u010c\xedm, pod\u013ea m\xf4jho n\xe1zoru, m\xf4\u017eem by\u0165 v\xa0t\xedme prospe\u0161n\xfd/\xe1:",questions:{q1a:"Mysl\xedm, \u017ee si dok\xe1\u017eem r\xfdchlo v\u0161imn\xfa\u0165 nov\xe9 pr\xedle\u017eitosti a v\u010das ich vyu\u017ei\u0165.",q1b:"M\xf4\u017eem dobre spolupracova\u0165 s\xa0ve\u013emi \u0161irok\xfdm okruhom \u013eud\xed.",q1c:"Ve\u013emi \u013eahko a\xa0prirodzene prich\xe1dzam na nov\xe9 my\u0161lienky a\xa0n\xe1pady.",q1d:"Dok\xe1\u017eem vyhecova\u0165 \u013eud\xed k\xa0\u010dinnosti. Kedyko\u013evek zist\xedm, \u017ee m\xf4\u017eem nie\u010d\xedm cenn\xfdm prispie\u0165 k\xa0skupinov\xfdm cie\u013eom.",q1e:"Moja schopnos\u0165 do\u0165ahova\u0165 veci do konca vypl\xfdva z\xa0mojej osobnej v\xfdkonnosti.",q1f:"Dok\xe1\u017eem \u010deli\u0165 do\u010dasnej neob\u013e\xfabenosti, ak to nakoniec vedie k\xa0dobr\xfdm v\xfdsledkom.",q1g:"R\xfdchlo vyc\xedtim, \u010do sa m\xe1 robi\u0165 v\xa0situ\xe1cii, ktor\xfa pozn\xe1m.",q1h:"Dok\xe1\u017eem bez predsudkov a\xa0zaujatost\xed n\xe1js\u0165 rozumn\xe9 d\xf4vody pre zmenu zamerania \u010dinnosti."}},q2:{title:"II. Keby som mal/a nedostatky v\xa0t\xedmovej pr\xe1ci, boli by to najsk\xf4r:",questions:{q2a:"Nec\xedtim sa dobre, ak pracovn\xe1 sch\xf4dzka nem\xe1 jasn\xfa \u0161trukt\xfaru a\xa0nie je dobre riaden\xe1.",q2b:"M\xe1m tendenciu by\u0165 pr\xedli\u0161 ve\u013ekorys\xfd k\xa0\u013eu\u010fom zast\xe1vaj\xfacim opodstatnen\xe9 stanovisko, ktor\xe9mu nebola venovan\xe1 n\xe1le\u017eit\xe1 pozornos\u0165.",q2c:"M\xe1m tendenciu hovori\u0165 pr\xedli\u0161 ve\u013ea, ke\u010f sa skupina dostane k\xa0nov\xfdm my\u0161lienkam.",q2d:"M\xf4j objekt\xedvny n\xe1h\u013ead mi neumo\u017e\u0148uje zdie\u013ea\u0165 nad\u0161enie ostatn\xfdch.",q2e:"Niekedy sa jav\xedm ako pr\xedli\u0161 energick\xfd a\xa0autorit\xe1rsky, ke\u010f je potrebn\xe9 nie\u010do dorobi\u0165.",q2f:"Je pre m\u0148a \u0165a\u017ek\xe9 by\u0165 v\xa0popred\xed alebo vystupova\u0165 vo ved\xfacej \xfalohe, sn\xe1\u010f preto, \u017ee som pr\xedli\u0161 citliv\xfd na atmosf\xe9ru v skupine.",q2g:"St\xe1va sa mi, \u017ee sa tak ponor\xedm do svojich my\u0161lienok, \u017ee strat\xedm pojem o\xa0tom, \u010do sa deje.",q2h:"Druh\xed mi niekedy vy\u010d\xedtaj\xfa, \u017ee sa pr\xedli\u0161 star\xe1m o\xa0podru\u017en\xe9 detaily a\xa0l\xe1mem si hlavu nad mo\u017en\xfdmi nezdarmi."}},q3:{title:"III. Ke\u010f spolupracujem na nejakom projekte s\xa0in\xfdmi \u013eu\u010fmi:",questions:{q3a:"M\xe1m schopnos\u0165 \u013eud\xed ovplyvni\u0165 bez toho, aby som ich k\xa0nie\u010domu n\xfatil.",q3c:"Som pripraven\xfd tla\u010di\u0165 ostatn\xfdch do \u010dinnosti, aby sa na stretnut\xed nestr\xe1cal \u010das a\xa0zrete\u013e na hlavn\xfd cie\u013e.",q3b:"Moja bdelos\u0165 umo\u017e\u0148uje predch\xe1dza\u0165 omylom a\xa0chyb\xe1m z\xa0nepozornosti.",q3d:"D\xe1 sa po\u010d\xedta\u0165 s\xa0t\xfdm, \u017ee prispejem nie\u010d\xedm origin\xe1lnym.",q3e:"Som v\u017edy pripraven\xfd h\xe1ji\u0165 dobr\xfd n\xe1vrh v\xa0spolo\u010dnom z\xe1ujme.",q3f:"Som bl\xe1zon do nov\xfdch my\u0161lienok a\xa0posledn\xfdch v\xfdvojov\xfdch noviniek.",q3g:"Ver\xedm, \u017ee ostatn\xed oce\u0148uj\xfa moju schopnos\u0165 chladn\xe9ho \xfasudku.",q3h:"D\xe1 sa na m\u0148a spo\u013eahn\xfa\u0165, \u017ee dohliadnem na to, aby sa urobilo, \u010do je potrebn\xe9."}},q4:{title:"IV. M\xf4j charakteristick\xfd pr\xedstup ku skupinovej pr\xe1ci je, \u017ee:",questions:{q4a:"M\xe1m z\xe1ujem lep\u0161ie spozna\u0165 svojich kolegov.",q4b:"Nezdr\xe1ham sa odmietnu\u0165 n\xe1zory druh\xfdch a\xa0zast\xe1va\u0165 s\xe1m men\u0161inov\xe9 stanovisko.",q4c:"Oby\u010dajne n\xe1jdem cel\xfd rad argumentov vyvracaj\xfacich nezmyseln\xe9 n\xe1vrhy.",q4d:"Dok\xe1\u017eem uvies\u0165 veci do chodu, ke\u010f treba za\u010da\u0165 uskuto\u010d\u0148ova\u0165 pl\xe1n.",q4e:"M\xe1m tendenciu vyh\xfdba\u0165 sa obvykl\xfdm veciam a\xa0prich\xe1dza\u0165 s\xa0nie\u010d\xedm ne\u010dakan\xfdm.",q4f:"Sna\u017e\xedm sa vnies\u0165 n\xe1znak dokonalosti do ka\u017edej t\xedmovej pr\xe1ce, na ktorej sa podie\u013eam.",q4g:"Dok\xe1\u017eem vyu\u017ei\u0165 kontakty mimo samotn\xe9ho t\xedmu.",q4h:"Ke\u010f\u017ee sa zauj\xedmam o\xa0v\u0161etky stanovisk\xe1, bez probl\xe9mov sa prisp\xf4sob\xedm, ke\u010f sa mus\xed rozhodn\xfa\u0165."}},q5:{title:"V. Pr\xe1ca ma te\u0161\xed, preto\u017ee:",questions:{q5a:"Bav\xed ma analyzova\u0165 situ\xe1cie a\xa0zva\u017eova\u0165 v\u0161etky mo\u017en\xe9 vo\u013eby.",q5b:"Zauj\xedma ma nach\xe1dza\u0165 praktick\xe9 rie\u0161enia probl\xe9mov.",q5c:"R\xe1d c\xedtim, \u017ee podporujem dobr\xe9 pracovn\xe9 vz\u0165ahy.",q5d:"M\xf4\u017eem uplatni\u0165 siln\xfd vplyv na rozhodnutia.",q5e:"M\xe1m pr\xedle\u017eitos\u0165 stret\xe1va\u0165 sa s\xa0\u013eu\u010fmi, ktor\xed mi m\xf4\u017eu poskytn\xfa\u0165 nov\xfa sk\xfasenos\u0165.",q5f:"Dok\xe1\u017eem zjednoti\u0165 n\xe1zory r\xf4znych \u013eud\xed a\xa0vies\u0165 ich k\xa0spolo\u010dnej \u017eiaducej \u010dinnosti.",q5g:"C\xedtim sa vo svojom \u017eivle, ke\u010f sa m\xf4\u017eem naplno venova\u0165 nejakej \xfalohe.",q5h:"R\xe1d m\xe1m veci, ktor\xe9 nap\xednaj\xfa moju predstavivos\u0165."}},q6:{title:"VI. Keby som ne\u010dakane dostal/a \u0165a\u017ek\xfa \xfalohu, ktor\xfa je nutn\xe9 splni\u0165 v\xa0obmedzenom \u010dase a\xa0s\xa0nezn\xe1mymi \u013eu\u010fmi:",questions:{q6a:"Sadol by som si niekam do k\xfata, prem\xfd\u0161\u013eal ako sa dosta\u0165 zo slepej uli\u010dky a\xa0sna\u017eil sa ujasni\u0165 \u010fal\u0161\xed postup.",q6b:"Bol by som ochotn\xfd pracova\u0165 s\xa0\u010dlovekom, ktor\xfd prejavuje najpozit\xedvnej\u0161\xed pr\xedstup, bez oh\u013eadu na to, ako \u0165a\u017eko znesite\u013en\xfd m\xf4\u017ee by\u0165.",q6c:"H\u013eadal by som sp\xf4sob zmen\u0161enia zlo\u017eitosti \xfalohy stanoven\xedm toho, \u010d\xedm m\xf4\u017eu r\xf4zni jednotlivci najlep\u0161ie prispie\u0165.",q6d:"M\xf4j prirodzen\xfd cit pre povinnos\u0165 by pomohol zaisti\u0165, \u017ee dodr\u017e\xedme harmonogram.",q6e:"Ver\xedm, \u017ee by som zostal pokojn\xfd a\xa0udr\u017eal si schopnos\u0165 jasne myslie\u0165.",q6f:"Dr\u017eal by som sa st\xe1le \xfa\u010delu navzdory tlakom.",q6g:"Bol by som pripraven\xfd uja\u0165 sa vedenia, keby som c\xedtil, \u017ee sa skupina neh\xfdbe z\xa0miesta.",q6h:"Zah\xe1jil by som rozhovory a\xa0jednania so z\xe1merom stimulova\u0165 nov\xe9 my\u0161lienky a\xa0uvies\u0165 veci do pohybu."}},q7:{title:"VII. Vo vz\u0165ahu k\xa0probl\xe9mom, v\xa0ktor\xfdch som zaanga\u017eovan\xfd/\xe1 pri pr\xe1ci v\xa0skupine:",questions:{q7a:"M\xe1m sklon prejavova\u0165 netrpezlivos\u0165 s\xa0t\xfdmi, ktor\xed zdr\u017euj\xfa postup.",q7b:"Ostatn\xed ma m\xf4\u017eu kritizova\u0165 za to, \u017ee som pr\xedli\u0161 analytick\xfd a\xa0nie ve\u013emi citliv\xfd.",q7c:"Moja potreba uisti\u0165 sa, \u017ee pr\xe1ca je uroben\xe1 dobre, m\xf4\u017ee by\u0165 prek\xe1\u017ekou postupu.",q7d:"\u013dahko sa za\u010dnem nudi\u0165 a\xa0spolieham sa na niekoho z\xa0t\xedmu, \u017ee ma vyburcuje.",q7e:"Je pre m\u0148a \u0165a\u017ek\xe9 za\u010da\u0165, pokia\u013e cie\u013e nie je jasn\xfd.",q7f:"Niekedy sa mi nedar\xed vysvet\u013eova\u0165 a\xa0objas\u0148ova\u0165 zlo\u017eit\xe9 my\u0161lienky, ktor\xe9 ma napadaj\xfa.",q7g:"Som si vedom\xfd toho, \u017ee \u017eiadam od ostatn\xfdch veci, ktor\xe9 s\xe1m nedok\xe1\u017eem.",q7h:"V\xe1ham sa postavi\u0165 na odpor, ke\u010f sa stretnem so skuto\u010dnou opoz\xedciou."}}},K=o(137),P=o(127),E=o(128),J=o(130),Z=o(126),A=o(129),W=o(136),F=o(120),L=Object(F.a)((function(e){return{appBar:{position:"relative"},paper:{marginTop:e.spacing(3)},initText:{marginTop:e.spacing(3),padding:e.spacing(2)},sectionHeader:{padding:e.spacing(2),background:e.palette.grey[300],borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},sectionTitle:{flex:1},sectionSum:{flex:"0 0 20px"},button:{marginTop:e.spacing(3),marginBottom:e.spacing(3)},chart:{padding:e.spacing(1,0),marginBottom:e.spacing(3)}}})),G=o(6),Q=function(e){var a=e.questions,o=e.title,t=e.id,n=L(),s=g(),i=C().handleInputChange,c=O((function(e){return e.inputs.inputs})),l=O((function(e){return e.inputs.sums}));return Object(G.jsxs)(v.a,{className:n.paper,children:[Object(G.jsxs)(q.a,{container:!0,className:n.sectionHeader,children:[Object(G.jsx)(h.a,{variant:"h6",className:n.sectionTitle,children:o}),Object(G.jsx)(h.a,{variant:"h6",className:n.sectionSum,children:l[t]})]}),Object(G.jsx)(Z.a,{children:Object(G.jsx)(P.a,{size:"small",children:Object(G.jsx)(E.a,{children:Object.entries(a).map((function(e){var a=Object(r.a)(e,2),o=a[0],t=a[1];return Object(G.jsxs)(A.a,{hover:!0,role:"checkbox","aria-checked":c[o].selected,tabIndex:-1,selected:c[o].selected,children:[Object(G.jsx)(J.a,{padding:"checkbox",children:Object(G.jsx)(K.a,{checked:c[o].selected,onChange:function(e){return function(e,a){e.stopPropagation(),c[a].selected&&s(R({id:a,value:0})),s(D({id:a}))}(e,o)}})}),Object(G.jsx)(J.a,{children:Object(G.jsx)(h.a,{variant:"body1",children:t})}),Object(G.jsx)(J.a,{style:{width:100},children:Object(G.jsx)(W.a,{id:o,name:o,type:"number",onChange:i,disabled:!c[o].selected,value:c[o].value,variant:"outlined",size:"small"})})]},o)}))})})})]})};y()(j.a);var U=function(){var e=L(),a=Object(t.useState)(),o=Object(r.a)(a,2),n=o[0],s=o[1],i=C(),c=i.handleSubmit,b=i.errors,k=O((function(e){return e.inputs.results}));return Object(t.useEffect)((function(){s(x(k))}),[k]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(m.a,{}),Object(G.jsx)(l.a,{position:"absolute",color:"default",className:e.appBar,children:Object(G.jsx)(p.a,{children:Object(G.jsx)(h.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Belbinov test t\xedmov\xfdch rol\xed"})})}),Object(G.jsx)(u.a,{maxWidth:"md",component:"main",children:Object(G.jsxs)(q.a,{container:!0,direction:"column",children:[Object(G.jsx)(q.a,{item:!0,xs:12,children:Object(G.jsx)(v.a,{className:e.initText,children:Object(G.jsx)(h.a,{variant:"body2",children:"Tento dotazn\xedk m\xe1 celkovo 7 sekci\xed ozna\u010den\xfdch r\xedmskymi \u010d\xedslicami. V ka\u017edej sekcii dotazn\xedka si najsk\xf4r vyberte tie v\xfdroky, ktor\xe9 v\xe1s najlep\u0161ie vystihuj\xfa. M\xf4\u017eete si vybra\u0165 jeden, dva, alebo viac v\xfdrokov. Vybran\xe9 v\xfdroky potom ohodno\u0165te bodov\xfdm hodnoten\xedm tak, \u017ee medzi ne rozdel\xedte v\u017edy 10 bodov v ka\u017edej sekcii. Ako pom\xf4cka v\xe1m mo\u017ee posl\xfa\u017ei\u0165 s\xfa\u010det rozdelen\xfdch bodov pre dan\xfa sekciu zobrazen\xfd vpravo hore."})})}),Object.entries(H).map((function(e){var a=Object(r.a)(e,2),o=a[0],t=a[1];return Object(G.jsx)(q.a,{item:!0,xs:12,children:Object(G.jsx)(Q,{title:t.title,questions:t.questions,id:o})})})),Object(G.jsxs)(q.a,{container:!0,item:!0,xs:12,justify:"center",children:[Object(G.jsx)(d.a,{variant:"contained",color:"primary",onClick:c,className:e.button,children:"Zobrazi\u0165 v\xfdsledok"}),b]}),!b&&Object(G.jsx)(q.a,{item:!0,xs:12,children:Object(G.jsx)(v.a,{className:e.chart,children:Object(G.jsx)(f.a,{highcharts:j.a,options:n,useRef:"chartComponent1"})})})]})})]})};var X=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsx)(U,{})})},Y=Object(M.a)({reducer:{inputs:B}});i.a.render(Object(G.jsx)(n.a.StrictMode,{children:Object(G.jsx)(c.a,{store:Y,children:Object(G.jsx)(X,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.15bfaf31.chunk.js.map
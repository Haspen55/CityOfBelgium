(this.webpackJsonptest1=this.webpackJsonptest1||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),u=n.n(a),i=n(4),r=n.n(i),s=(n(9),n(2)),l=(n(10),n.p+"static/media/bruxelles.95f044d7.jpg"),c=n.p+"static/media/namur.86912b42.jpg",o=n.p+"static/media/anvers.d4fb0c3d.jpg",d=n.p+"static/media/liege.3b76ea2c.jpg",p=n.p+"static/media/bruges.aa4c1120.jpg",m=n.p+"static/media/tournai.ae4fbe45.jpg",g=n.p+"static/media/gand.a9e1c2e1.jpg",j=n(0),b=[l,c,o,d,p,m,g],v=["Bruxelles","Namur","Anvers","Liege","Bruges","Tournai","Gand"],f={count:1},h=function(e,t){switch(t.type){case"ajouter":return{count:e.count+1};case"diminuer":return{count:e.count-1};default:throw new Error("this action is not supported")}},x=function(e){var t=Object(a.useReducer)(h,f),n=Object(s.a)(t,2),u=n[0],i=n[1];Object(a.useEffect)((function(){document.addEventListener("keydown",(function(e){37===e.keyCode&&i({type:"diminuer"}),39===e.keyCode&&i({type:"ajouter"})}))}),[]),u.count<0&&(u.count=6),u.count>6&&(u.count=0);Object(a.useEffect)((function(){e.passCounter(u.count)}),[u.count,e]),console.log(u.count);return Object(j.jsxs)("div",{className:"divCentrale",children:[Object(j.jsx)("button",{onClick:function(){i({type:"diminuer"}),0===u.count&&(u.count=b.length-1)},children:"Precedent"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{alt:"ville",className:"cadre",src:b[u.count]}),Object(j.jsx)("h1",{style:{marginTop:50,color:"black"},children:v[u.count]})]}),Object(j.jsx)("button",{onClick:function(){i({type:"ajouter"}),u.count>=b.length-1&&(u.count=0)},children:"Suivant"}),Object(j.jsx)("br",{})]})};var O=function(e){var t=["Bruxelles ou la ville de Bruxelles est une commune de Belgique de 183 287 habitants, capitale de la Belgique, si\xe8ge de la Communaut\xe9 fran\xe7aise et de la Communaut\xe9 flamande, ainsi que si\xe8ge de plusieurs institutions de l'Union europ\xe9enne","Namur est la capitale de la r\xe9gion de la Wallonie, en Belgique. \xc0 la confluence de la Meuse et de la Sambre se trouve la citadelle de Namur, une forteresse m\xe9di\xe9vale dot\xe9e de jardins, d'une vue panoramique et d'une statue de bronze repr\xe9sentant une tortue g\xe9ante","Anvers est une ville portuaire belge situ\xe9e sur l'Escaut, dont l'histoire remonte au Moyen \xc2ge. Au centre-ville, le quartier des diamantaires vieux de plusieurs si\xe8cles est le rep\xe8re de milliers de marchands, tailleurs et polisseurs de diamants. L'architecture Renaissance d'Anvers se refl\xe8te dans la Grand-Place, situ\xe9e au c\u0153ur de la vieille ville."," Li\xe8ge, ville belge bordant la Meuse situ\xe9e en Wallonie, la r\xe9gion francophone, a longtemps constitu\xe9 un centre commercial et culturel. Sa vieille ville rec\xe8le de nombreux sites d'int\xe9r\xeat datant de l'\xe9poque m\xe9di\xe9vale, comme la coll\xe9giale romane de Saint-Barth\xe9lemy.","Bruges, capitale de la Flandre-Occidentale au nord-ouest de la Belgique, se distingue par ses canaux, ses rues pav\xe9es et ses b\xe2timents m\xe9di\xe9vaux. Son port, Zeebruges, est un centre important pour la p\xeache et le commerce europ\xe9en","Tournai est une ville situ\xe9e \xe0 l'ouest de la Belgique, pr\xe8s de la fronti\xe8re fran\xe7aise. Elle est r\xe9put\xe9e pour sa vaste cath\xe9drale Notre-Dame, qui poss\xe8de 5 tours et une rosace. Non loin de l\xe0, la Grand-Place est une place triangulaire bord\xe9e de bars et de restaurants.","Gand est une ville portuaire situ\xe9e au nord-ouest de la Belgique, \xe0 la confluence de la rivi\xe8re Lys et du fleuve Escaut. Au Moyen-\xc2ge, elle fut une cit\xe9-\xc9tat de premier plan."];return Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"textVille",children:t[e.compteur]})})};var y=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(j.jsxs)(u.a.Fragment,{children:[Object(j.jsx)(x,{passCounter:function(e){i(e)}}),Object(j.jsx)(O,{compteur:n})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,u=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),u(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(u.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),B()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.b9cea670.chunk.js.map
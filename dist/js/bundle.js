!function(t){var e={};function a(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(o,r,function(e){return t[e]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){a(1),t.exports=a(2)},function(t,e){addEventListener("load",function(t){var e=document.getElementsByTagName("h4")[0],a=document.getElementsByTagName("p")[0],o=document.getElementsByTagName("p")[1],r=document.getElementById("firstBtn"),s=document.getElementById("nearFon"),n=document.getElementById("forHolyFathers"),i=(document.getElementById("nearFonTwo"),document.getElementById("spanTitle")),c=document.getElementById("spanPreTitle"),l=document.getElementById("spanFromNT"),d=document.getElementById("blackFon"),p=document.getElementById("mainFrame"),g=document.getElementById("bottomNavigation"),b=document.getElementById("bottomNavigationTitle"),h=document.getElementsByClassName("photo"),m=[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8],h[9],h[10],h[11],h[12],h[13]],u=["./img/priest.jpg","./img/priest_b&w.jpg","./img/priest.jpg","./img/priest_b&w.jpg","./img/priest.jpg","./img/priest_b&w.jpg","./img/venchanie.jpg","./img/venchanie_b&w.jpg","./img/priest.jpg","./img/priest_b&w.jpg","./img/priest.jpg","./img/priest_b&w.jpg","./img/evharistia.jpg","./img/evharistia_b&w.jpg"],f=[{mainTitle:"крещении",fathersTitle:"<h4 class='noto toupper'>крещение</h4></br></br>",preTitle:"узнай о",fromNT:"Идите, научите все народы, крестя их во имя Отца и Сына и Святаго Духа (Мф, 28.19)",holyFathersAbout:"Так как человек состоит из души и тела, то и очищение двоякое: бестелесное для бестелесного, а телесное для тела,– вода очищает тело, а Дух запечатлевает душу, чтобы нам приступить к Богу с сердцем окропленным и телом, омытым чистою водою.</br></br>св. Кирилл Иерусалимский"},{mainTitle:"миропомазании",fathersTitle:"<h4 class='noto toupper'>миропомазание</h4></br></br>",preTitle:"узнай о",fromNT:"Когда же приидет Он, Дух истины, то наставит вас на всякую истину (Ин, 16.13)",holyFathersAbout:"Ибо как Христос после Крещения и наития Святого Духа поборол диавола, так и вы, после священного Крещения и таинственного Помазания, облекшись во всеоружие Святого Духа, противостаньте силе противника и побеждайте ее, говоря: «Все могу в укрепляющем меня Иисусе Христе» (Флп. 4, 14). </br></br>св. Кирилл Иерусалимский"},{mainTitle:"покаянии",fathersTitle:"<h4 class='noto toupper'>покаяние</h4></br></br>",preTitle:"узнай о",fromNT:"Покайтесь и веруйте в Евангелие (Мк, 1.15)",holyFathersAbout:"Как человек, крещаемый человеком, то есть священником, просвещается благодатью Духа Святого, так и исповедующий в Покаянии грехи свои приемлет оставление их через священника благодатью Иисуса Христа.</br></br>св. Афанасий Великий"},{mainTitle:"браке",fathersTitle:"<h4 class='noto toupper'>брак</h4></br></br>",preTitle:"узнай о",fromNT:"Что Бог сочетал, того человек да не разлучает (Мф, 19.6)",holyFathersAbout:"Лучше всего, если Сам Христос присутствует на браке, потому что где Христос, там все обретает достоинство, и вода претворяется в вино, то есть все изменяется к лучшему.</br></br>св. Григорий Богослов"},{mainTitle:"священстве",fathersTitle:"<h4 class='noto toupper'>священство</h4></br></br>",preTitle:"узнай о",fromNT:"Кому простите грехи, тому простятся; на ком оставите, на том останутся (Ин, 20.23)",holyFathersAbout:"То, что вручено священнику, может даровать только Бог, и чего бы ни достигла человеческая мудрость, она окажется меньше, чем благодать.</br></br>св. Иоанн Златоуст"},{mainTitle:"соборовании",fathersTitle:"<h4 class='noto toupper'>соборование</h4></br></br>",preTitle:"узнай о",fromNT:"И многих больных мазали маслом и исцеляли (Мк, 6.13)",holyFathersAbout:"Имея какую-нибудь телесную болезнь, мы всеми силами стараемся освободиться от нее, а тяжко страдая от болезней душевных, мы медлим... Потому мы не избавляемся и от телесных болезней, что необходимое для нас считаем маловажным, а маловажное – необходимым и, оставив самый источник зол (грехи и страсти), хотим очистить потоки (болезни телесные).</br></br>св. Иоанн Златоуст"},{mainTitle:"евхаристии",fathersTitle:"<h4 class='noto toupper'>евхаристия</h4></br></br>",preTitle:"узнай о",fromNT:"Ибо Плоть Моя истинно есть пища, и Кровь Моя истинно есть питие (Ин, 6.55)",holyFathersAbout:"Мы приемлем\n         Евхаристию не как простой хлеб и не как простое питие, но каким образом Иисус Христос-Спаситель наш, воплотившись Словом Божиим, имел для спасения нашего Плоть и Кровь, таким же образом и Пища эта, над которой произнесено благодарение молитвой Слова Его, по преложении питающая нашу кровь и плоть, есть Плоть и Кровь Того же воплотившегося Иисуса Христа.</br></br>св. Иустин Философ"}];m.forEach(function(t,e){t.style.background="url(".concat(u[e],") top center no-repeat"),t.style.backgroundSize="cover"});var v=0,L=0,T=0,y=0,I=0,k=0;setTimeout(function(){a.style.lineHeight="1.3"},100);var E=setInterval(function(){v++,e.style.backgroundImage="linear-gradient(to right, rgba(255,255,255,1) ".concat(v/4,"%, rgba(0,0,0,0) ").concat(v,"%)"),v>250&&clearInterval(E)},10),j=setInterval(function(){L++,a.style.backgroundImage="linear-gradient( to bottom, rgba(255,255,255,1) ".concat(L/3,"%, rgba(0,0,0,0) ").concat(L,"%)"),L>250&&clearInterval(j)},20),M=null;function H(){T++,o.style.backgroundImage="linear-gradient(to bottom, rgba(255,255,255,1) ".concat(T/4,"%, rgba(0,0,0,0) ").concat(T,"%)"),T>250&&clearInterval(M)}setTimeout(function(){M=setInterval(H,10)},2500),setTimeout(function(){r.style.top="0px"},3e3),r.addEventListener("click",function(){c.innerHTML=f[0].preTitle,i.innerHTML=f[0].mainTitle,l.innerHTML=f[0].fromNT,r.classList.add("shining"),setTimeout(function(){s.style.visibility="hidden",d.style.visibility="hidden"},2e3),setTimeout(function(){m[0].classList.remove("noShow"),m[1].classList.remove("noShow"),m[2].classList.remove("noShow"),m[3].classList.remove("noShow"),m[2].classList.add("photo--2"),m[3].classList.add("photo--2")},1500),s.style.zIndex="10";var t=setInterval(function(){y++,s.style.backgroundImage="radial-gradient(circle at top left, rgba(0,0,0,1) ".concat(y/2,"%, rgba(0,0,0,0) ").concat(y,"%), radial-gradient(circle at bottom left, rgba(0,0,0,1) ").concat(y/2,"%, rgba(0,0,0,0) ").concat(y,"%), radial-gradient(circle at top right, rgba(0,0,0,1) ").concat(y/2,"%, rgba(0,0,0,0) ").concat(y,"%), radial-gradient(circle at bottom right, rgba(0,0,0,1) ").concat(y/2,"%, rgba(0,0,0,0) ").concat(y,"%)"),y>70&&clearInterval(t)},10)},!1);var N=0,B=0,w=0,F=0;p.addEventListener("touchstart",function(t){var e=t.changedTouches[0];N=parseInt(e.clientX),I=0,c.style.backgroundImage="radial-gradient(circle, rgba(255,255,255,.9) 0%, rgba(0,0,0,0) 0%)",i.style.backgroundImage="radial-gradient(circle, rgba(255,255,255,.9) 0%, rgba(0,0,0,0) 0%)",l.style.backgroundImage="radial-gradient(circle, rgba(255,255,255,.9) 0%, rgba(0,0,0,0) 0%)",t.preventDefault()},!1),p.addEventListener("touchmove",function(t){var e=t.changedTouches[0];B=parseInt(e.clientX)-N,t.preventDefault()},!1),p.addEventListener("touchend",function(t){if(0===B)l.style.visibility="hidden",c.style.visibility="hidden",i.style.visibility="hidden",m.forEach(function(t,e){t.classList.contains("photo--1")&&e%2==1?(t.style.transform="translateZ(0px) scale(1.3)",t.style.opacity="0"):t.classList.contains("photo--1")?t.style.transform="translateZ(0px) scale(1.3)":t.style.transform="translateZ(-1000px)"}),setTimeout(function(){var t=setInterval(function(){k++,p.style.backgroundImage="linear-gradient(to bottom, rgba(0,0,0,1) ".concat(k/6,"%, rgba(0,0,0,0) ").concat(k,"%), linear-gradient(to top, rgba(0,0,0,1) ").concat(k/6,"%, rgba(0,0,0,0) ").concat(k,"%), linear-gradient(to left, rgba(0,0,0,1) ").concat(k/6,"%, rgba(0,0,0,0) ").concat(k,"%), linear-gradient(to right, rgba(0,0,0,1) ").concat(k/6,"%, rgba(0,0,0,0) ").concat(k,"%)"),k>90&&clearInterval(t)},10)},1e3),setTimeout(function(){var t=setInterval(function(){e++,n.style.backgroundImage="radial-gradient(circle at top left, rgba(255,255,255,1) ".concat(e/3,"%, rgba(0,0,0,0) ").concat(e,"%), radial-gradient(circle at top right, rgba(255,255,255,1) ").concat(e/3,"%, rgba(0,0,0,0) ").concat(e,"%)"),e>190&&clearInterval(t)},40),e=0;n.style.visibility="visible",n.style.backgroundImage="black",p.style.backgroundImage="rgba(0,0,0,.5)",n.innerHTML+=f[F].fathersTitle,n.innerHTML+=f[F].holyFathersAbout},1500),setTimeout(function(){var t=setInterval(function(){e--,n.style.backgroundImage="linear-gradient(to top, rgba(255,255,255,1) ".concat(e/3,"%, rgba(0,0,0,0) ").concat(e,"%)"),0===e&&clearInterval(t)},10),e=300},1e4),setTimeout(function(){b.innerHTML=f[F].fathersTitle,g.style.visibility="visible",p.innerHTML="",p.style.background="rgba(45,45,45,1)"},15500);else{if(B<0&&F<6?(F++,c.innerHTML=f[F].preTitle,i.innerHTML=f[F].mainTitle,l.innerHTML=f[F].fromNT):B>0&&F>0?(F--,c.innerHTML=f[F].preTitle,i.innerHTML=f[F].mainTitle,l.innerHTML=f[F].fromNT):(c.innerHTML=f[F].preTitle,i.innerHTML=f[F].mainTitle,l.innerHTML=f[F].fromNT),setTimeout(function(){var t=setInterval(function(){I++,c.style.backgroundImage="radial-gradient(circle, rgba(255,255,255,.9) ".concat(I,"%, rgba(0,0,0,0) ").concat(2*I,"%)"),i.style.backgroundImage="radial-gradient(circle, rgba(255,255,255,.9) ".concat(I,"%, rgba(0,0,0,0) ").concat(2*I,"%)"),l.style.backgroundImage="radial-gradient(circle, rgba(255,255,255,.9) ".concat(I,"%, rgba(0,0,0,0) ").concat(2*I,"%)"),I>120&&clearInterval(t)},10)},1e3),0==w&&B>0||-6==w&&B<0)return;B<0?(w--,m.forEach(function(t){switch(t.classList[1]){case"photo--6-":t.classList.remove("photo--6-"),t.classList.add("photo--7-");break;case"photo--5-":t.classList.remove("photo--5-"),t.classList.add("photo--6-");break;case"photo--4-":t.classList.remove("photo--4-"),t.classList.add("photo--5-");break;case"photo--3-":t.classList.remove("photo--3-"),t.classList.add("photo--4-");break;case"photo--2-":t.classList.remove("photo--2-"),t.classList.add("photo--3-");break;case"photo--1":t.classList.remove("photo--1"),t.classList.add("photo--2-");break;case"photo--2":t.classList.remove("photo--2"),t.classList.add("photo--1");break;case"photo--3":t.classList.remove("photo--3"),t.classList.add("photo--2");break;case"photo--4":t.classList.remove("photo--4"),t.classList.add("photo--3");break;case"photo--5":t.classList.remove("photo--5"),t.classList.add("photo--4");break;case"photo--6":t.classList.remove("photo--6"),t.classList.add("photo--5");break;case"photo--7":t.classList.remove("photo--7"),t.classList.add("photo--6")}})):(w++,m.forEach(function(t){switch(t.classList[1]){case"photo--7-":t.classList.remove("photo--7-"),t.classList.add("photo--6-");break;case"photo--6-":t.classList.remove("photo--6-"),t.classList.add("photo--5-");break;case"photo--5-":t.classList.remove("photo--5-"),t.classList.add("photo--4-");break;case"photo--4-":t.classList.remove("photo--4-"),t.classList.add("photo--3-");break;case"photo--3-":t.classList.remove("photo--3-"),t.classList.add("photo--2-");break;case"photo--2-":t.classList.remove("photo--2-"),t.classList.add("photo--1");break;case"photo--1":t.classList.remove("photo--1"),t.classList.add("photo--2");break;case"photo--2":t.classList.remove("photo--2"),t.classList.add("photo--3");break;case"photo--3":t.classList.remove("photo--3"),t.classList.add("photo--4");break;case"photo--4":t.classList.remove("photo--4"),t.classList.add("photo--5");break;case"photo--5":t.classList.remove("photo--5"),t.classList.add("photo--6");break;case"photo--6":t.classList.remove("photo--6"),t.classList.add("photo--7")}})),B=0,t.preventDefault()}},!1)},!1)},function(t,e,a){}]);
//# sourceMappingURL=bundle.js.map
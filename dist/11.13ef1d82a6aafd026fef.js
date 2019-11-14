(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{z03q:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),o=function(){return function(){}}(),t=e("pMnS"),r=e("gIcY"),s=e("HigS"),i=e("rmC/"),a=e("SVXH"),d=e("7LN8"),c=e("A5rM"),p=e("G5kV"),g=e("4Vzq"),m=e("mrSG"),v=e("LRDa"),h=function(){function l(l,n,e){this.grupoService=l,this.messageService=e,this.alunos=[],this.professores=[],this.currentUser=JSON.parse(sessionStorage.getItem("userSession")),this.router=n}return l.prototype.ngOnInit=function(){return m.__awaiter(this,void 0,void 0,function(){var l,n;return m.__generator(this,function(e){switch(e.label){case 0:return l=this,[4,this.grupoService.get_todos_usuarios_alunos(this.currentUser.uid)];case 1:return l.alunos=e.sent(),n=this,[4,this.grupoService.get_todos_usuarios_professores(this.currentUser.uid)];case 2:return n.professores=e.sent(),[2]}})})},l.prototype.criarGrupo=function(l){if(l.length<6)this.showError();else{var n=[this.currentUser.uid];void 0!==this.selectedAlunos&&this.selectedAlunos.forEach(function(l){n=n.concat([l.uid])}),void 0!==this.selectedProfessores&&this.selectedProfessores.forEach(function(l){n=n.concat([l.uid])}),this.grupoService.create_grupo({uid:"",titulo:l,imagem_url:"",diciplina:[],mensagens:[],usuarios:n,criador:this.currentUser.uid}),this.router.navigate(["/dashboard"]),this.showSuccess()}},l.prototype.showSuccess=function(){this.messageService.add({severity:"success",summary:"Criado com sucesso!",detail:"O grupo j\xe1 est\xe1 ativo para o uso."})},l.prototype.showError=function(){this.messageService.add({severity:"error",summary:"Insira um titulo corretamente!",detail:"Erro ao criar grupo."})},l}(),C=e("ZYCi"),f=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,58,"div",[["class","app-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,57,"main",[["class","main d-flex align-items-center"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,56,"div",[["class","container"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,55,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,54,"div",[["class","col-md-12 mx-auto"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,53,"div",[["class","card mx-2"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,52,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,51,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,e){var o=!0;return"submit"===n&&(o=!1!==u["\u0275nov"](l,9).onSubmit(e)&&o),"reset"===n&&(o=!1!==u["\u0275nov"](l,9).onReset()&&o),o},null,null)),u["\u0275did"](8,16384,null,0,r["\u0275angular_packages_forms_forms_z"],[],null,null),u["\u0275did"](9,4210688,null,0,r.NgForm,[[8,null],[8,null]],null,null),u["\u0275prd"](2048,null,r.ControlContainer,null,[r.NgForm]),u["\u0275did"](11,16384,null,0,r.NgControlStatusGroup,[[4,r.ControlContainer]],null,null),(l()(),u["\u0275eld"](12,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Criar um novo Grupo"])),(l()(),u["\u0275eld"](14,0,null,null,11,"div",[["class","input-group mb-3"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),u["\u0275eld"](16,0,null,null,1,"span",[["class","input-group-text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](17,0,null,null,0,"i",[["class","pi pi-pencil"]],null,null,null,null,null)),(l()(),u["\u0275eld"](18,0,[["titulo",1]],null,7,"input",[["autocomplete","name"],["class","form-control"],["placeholder","Titulo"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModel"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var o=!0;return"input"===n&&(o=!1!==u["\u0275nov"](l,19)._handleInput(e.target.value)&&o),"blur"===n&&(o=!1!==u["\u0275nov"](l,19).onTouched()&&o),"compositionstart"===n&&(o=!1!==u["\u0275nov"](l,19)._compositionStart()&&o),"compositionend"===n&&(o=!1!==u["\u0275nov"](l,19)._compositionEnd(e.target.value)&&o),"ngModel"===n&&(o=!1!==u["\u0275nov"](l,18)&&o),o},null,null)),u["\u0275did"](19,16384,null,0,r.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275did"](20,16384,null,0,r.RequiredValidator,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,r.NG_VALIDATORS,function(l){return[l]},[r.RequiredValidator]),u["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[r.DefaultValueAccessor]),u["\u0275did"](23,671744,null,0,r.NgModel,[[2,r.ControlContainer],[6,r.NG_VALIDATORS],[8,null],[6,r.NG_VALUE_ACCESSOR]],null,null),u["\u0275prd"](2048,null,r.NgControl,null,[r.NgModel]),u["\u0275did"](25,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(l()(),u["\u0275eld"](26,0,null,null,30,"div",[["class","input-group g-2"]],null,null,null,null,null)),(l()(),u["\u0275eld"](27,0,null,null,14,"div",[["class","col-lg-6"],["style","margin-bottom: 10px;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](28,0,null,null,13,"p-listbox",[["checkbox","checkbox"],["filter","filter"],["multiple","multiple"],["name","integrantesAlunos"],["optionLabel","nome"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0;return"ngModelChange"===n&&(u=!1!==(l.component.selectedAlunos=e)&&u),u},s.b,s.a)),u["\u0275did"](29,1097728,null,3,i.Listbox,[u.ElementRef,u.ChangeDetectorRef],{multiple:[0,"multiple"],listStyle:[1,"listStyle"],checkbox:[2,"checkbox"],filter:[3,"filter"],optionLabel:[4,"optionLabel"],options:[5,"options"]},null),u["\u0275qud"](603979776,1,{headerFacet:0}),u["\u0275qud"](603979776,2,{footerFacet:0}),u["\u0275qud"](603979776,3,{templates:1}),u["\u0275pod"](33,{"max-height":0}),u["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[i.Listbox]),u["\u0275did"](35,671744,null,0,r.NgModel,[[2,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,r.NgControl,null,[r.NgModel]),u["\u0275did"](37,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(l()(),u["\u0275eld"](38,0,null,0,3,"p-header",[],null,null,null,a.b,a.a)),u["\u0275did"](39,49152,[[1,4]],0,d.Header,[],null,null),(l()(),u["\u0275eld"](40,0,null,0,0,"i",[["class","pi pi-users"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,0,[" Participantes Alunos "])),(l()(),u["\u0275eld"](42,0,null,null,14,"div",[["class","col-lg-3"],["style","margin-bottom: 10px;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](43,0,null,null,13,"p-listbox",[["checkbox","checkbox"],["filter","filter"],["multiple","multiple"],["name","integrantesProfessores"],["optionLabel","nome"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0;return"ngModelChange"===n&&(u=!1!==(l.component.selectedProfessores=e)&&u),u},s.b,s.a)),u["\u0275did"](44,1097728,null,3,i.Listbox,[u.ElementRef,u.ChangeDetectorRef],{multiple:[0,"multiple"],listStyle:[1,"listStyle"],checkbox:[2,"checkbox"],filter:[3,"filter"],optionLabel:[4,"optionLabel"],options:[5,"options"]},null),u["\u0275qud"](603979776,4,{headerFacet:0}),u["\u0275qud"](603979776,5,{footerFacet:0}),u["\u0275qud"](603979776,6,{templates:1}),u["\u0275pod"](48,{"max-height":0}),u["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[i.Listbox]),u["\u0275did"](50,671744,null,0,r.NgModel,[[2,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,r.NgControl,null,[r.NgModel]),u["\u0275did"](52,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(l()(),u["\u0275eld"](53,0,null,0,3,"p-header",[],null,null,null,a.b,a.a)),u["\u0275did"](54,49152,[[4,4]],0,d.Header,[],null,null),(l()(),u["\u0275eld"](55,0,null,0,0,"i",[["class","pi pi-users"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,0,[" Participantes Professores "])),(l()(),u["\u0275eld"](57,0,null,null,1,"button",[["class","btn btn-block btn-success"],["style","margin-top: 10px;"],["type","button"]],null,[[null,"click"]],function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.criarGrupo(u["\u0275nov"](l,18).value)&&o),o},null,null)),(l()(),u["\u0275ted"](-1,null,["Criar Grupo"])),(l()(),u["\u0275eld"](59,0,null,null,2,"p-toast",[["position","bottom-right"]],null,null,null,c.b,c.a)),u["\u0275did"](60,1294336,null,1,p.Toast,[g.MessageService],{position:[0,"position"]},null),u["\u0275qud"](603979776,7,{templates:1})],function(l,n){var e=n.component;l(n,20,0,"");var u=l(n,33,0,"250px");l(n,29,0,"multiple",u,"checkbox","filter","nome",e.alunos),l(n,35,0,"integrantesAlunos",e.selectedAlunos);var o=l(n,48,0,"250px");l(n,44,0,"multiple",o,"checkbox","filter","nome",e.professores),l(n,50,0,"integrantesProfessores",e.selectedProfessores),l(n,60,0,"bottom-right")},function(l,n){l(n,7,0,u["\u0275nov"](n,11).ngClassUntouched,u["\u0275nov"](n,11).ngClassTouched,u["\u0275nov"](n,11).ngClassPristine,u["\u0275nov"](n,11).ngClassDirty,u["\u0275nov"](n,11).ngClassValid,u["\u0275nov"](n,11).ngClassInvalid,u["\u0275nov"](n,11).ngClassPending),l(n,18,0,u["\u0275nov"](n,20).required?"":null,u["\u0275nov"](n,25).ngClassUntouched,u["\u0275nov"](n,25).ngClassTouched,u["\u0275nov"](n,25).ngClassPristine,u["\u0275nov"](n,25).ngClassDirty,u["\u0275nov"](n,25).ngClassValid,u["\u0275nov"](n,25).ngClassInvalid,u["\u0275nov"](n,25).ngClassPending),l(n,28,0,u["\u0275nov"](n,37).ngClassUntouched,u["\u0275nov"](n,37).ngClassTouched,u["\u0275nov"](n,37).ngClassPristine,u["\u0275nov"](n,37).ngClassDirty,u["\u0275nov"](n,37).ngClassValid,u["\u0275nov"](n,37).ngClassInvalid,u["\u0275nov"](n,37).ngClassPending),l(n,43,0,u["\u0275nov"](n,52).ngClassUntouched,u["\u0275nov"](n,52).ngClassTouched,u["\u0275nov"](n,52).ngClassPristine,u["\u0275nov"](n,52).ngClassDirty,u["\u0275nov"](n,52).ngClassValid,u["\u0275nov"](n,52).ngClassInvalid,u["\u0275nov"](n,52).ngClassPending)})}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"ng-component",[],null,null,null,_,f)),u["\u0275prd"](512,null,g.MessageService,g.MessageService,[]),u["\u0275did"](2,114688,null,0,h,[v.a,C.l,g.MessageService],null,null)],function(l,n){l(n,2,0)},null)}var S=u["\u0275ccf"]("ng-component",h,b,{},{},[]),M=e("iutN"),N=e("Ip0R"),y=e("UeAQ"),x={title:"Criar Grupo"},A=function(){return function(){}}(),L=e("Zseb"),E=e("xtZt"),V=e("XMlB"),R=e("Fzqc"),k=e("dWZg"),P=e("qAlS"),F=e("g4HV"),G=e("nciF"),q=e("mU/a"),w=e("/3G7"),U=e("9EwZ"),D=e("0VuF");e.d(n,"CreateGroupModuleNgFactory",function(){return O});var O=u["\u0275cmf"](o,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,S,M.a]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,r["\u0275angular_packages_forms_forms_o"],r["\u0275angular_packages_forms_forms_o"],[]),u["\u0275mpd"](4608,N.NgLocalization,N.NgLocaleLocalization,[u.LOCALE_ID,[2,N["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](1073742336,r["\u0275angular_packages_forms_forms_d"],r["\u0275angular_packages_forms_forms_d"],[]),u["\u0275mpd"](1073742336,r.FormsModule,r.FormsModule,[]),u["\u0275mpd"](1073742336,C.p,C.p,[[2,C.u],[2,C.l]]),u["\u0275mpd"](1073742336,A,A,[]),u["\u0275mpd"](1073742336,L.a,L.a,[]),u["\u0275mpd"](1073742336,E.e,E.e,[]),u["\u0275mpd"](1073742336,N.CommonModule,N.CommonModule,[]),u["\u0275mpd"](1073742336,V.FullCalendarModule,V.FullCalendarModule,[]),u["\u0275mpd"](1073742336,d.SharedModule,d.SharedModule,[]),u["\u0275mpd"](1073742336,R.a,R.a,[]),u["\u0275mpd"](1073742336,k.b,k.b,[]),u["\u0275mpd"](1073742336,P.ScrollingModule,P.ScrollingModule,[]),u["\u0275mpd"](1073742336,F.TooltipModule,F.TooltipModule,[]),u["\u0275mpd"](1073742336,G.DropdownModule,G.DropdownModule,[]),u["\u0275mpd"](1073742336,q.PaginatorModule,q.PaginatorModule,[]),u["\u0275mpd"](1073742336,w.DataViewModule,w.DataViewModule,[]),u["\u0275mpd"](1073742336,U.a,U.a,[]),u["\u0275mpd"](1073742336,D.VirtualScrollerModule,D.VirtualScrollerModule,[]),u["\u0275mpd"](1073742336,i.ListboxModule,i.ListboxModule,[]),u["\u0275mpd"](1073742336,p.ToastModule,p.ToastModule,[]),u["\u0275mpd"](1073742336,o,o,[]),u["\u0275mpd"](1024,C.j,function(){return[[{path:"",component:h,data:x,canActivate:[y.a]}]]},[])])})}}]);
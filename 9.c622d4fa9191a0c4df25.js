(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3GNW":function(n,t,e){var l=e("mrSG").__decorate,i=e("mrSG").__metadata;Object.defineProperty(t,"__esModule",{value:!0});var o=e("CcnG"),u=e("ihYY"),r=e("Ip0R"),a=e("sdDj"),s=e("7LN8"),c=e("VSng"),d=(e("oygf"),function(){function n(n,t,e,l){var i=this;this.el=n,this.renderer=t,this.confirmationService=e,this.zone=l,this.acceptIcon="pi pi-check",this.acceptLabel="Yes",this.acceptVisible=!0,this.rejectIcon="pi pi-times",this.rejectLabel="No",this.rejectVisible=!0,this.closeOnEscape=!0,this.blockScroll=!0,this.closable=!0,this.autoZIndex=!0,this.baseZIndex=0,this.transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.focusTrap=!0,this.subscription=this.confirmationService.requireConfirmation$.subscribe(function(n){n.key===i.key&&(i.confirmation=n,i.message=i.confirmation.message||i.message,i.icon=i.confirmation.icon||i.icon,i.header=i.confirmation.header||i.header,i.rejectVisible=null==i.confirmation.rejectVisible?i.rejectVisible:i.confirmation.rejectVisible,i.acceptVisible=null==i.confirmation.acceptVisible?i.acceptVisible:i.confirmation.acceptVisible,i.acceptLabel=i.confirmation.acceptLabel||i.acceptLabel,i.rejectLabel=i.confirmation.rejectLabel||i.rejectLabel,i.confirmation.accept&&(i.confirmation.acceptEvent=new o.EventEmitter,i.confirmation.acceptEvent.subscribe(i.confirmation.accept)),i.confirmation.reject&&(i.confirmation.rejectEvent=new o.EventEmitter,i.confirmation.rejectEvent.subscribe(i.confirmation.reject)),!1===i.confirmation.blockScroll&&(i.blockScroll=i.confirmation.blockScroll),i.visible=!0)})}return Object.defineProperty(n.prototype,"width",{get:function(){return this._width},set:function(n){this._width=n,console.warn("width property is deprecated, use style to define the width of the Dialog.")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this._height},set:function(n){this._height=n,console.warn("height property is deprecated, use style to define the height of the Dialog.")},enumerable:!0,configurable:!0}),n.prototype.onAnimationStart=function(n){switch(n.toState){case"visible":this.container=n.element,this.setDimensions(),this.contentContainer=a.DomHandler.findSingle(this.container,".ui-dialog-content"),(this.acceptVisible||this.rejectVisible)&&a.DomHandler.findSingle(this.container,"button").focus(),this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.enableModality();break;case"void":this.onOverlayHide()}},n.prototype.setDimensions=function(){this.width&&(this.container.style.width=this.width+"px"),this.height&&(this.container.style.height=this.height+"px")},n.prototype.appendContainer=function(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.container):a.DomHandler.appendChild(this.container,this.appendTo))},n.prototype.restoreAppend=function(){this.container&&this.appendTo&&this.el.nativeElement.appendChild(this.container)},n.prototype.enableModality=function(){this.mask||(this.mask=document.createElement("div"),this.mask.style.zIndex=String(parseInt(this.container.style.zIndex)-1),a.DomHandler.addMultipleClasses(this.mask,"ui-widget-overlay ui-dialog-mask"),document.body.appendChild(this.mask),a.DomHandler.addClass(document.body,"ui-overflow-hidden"),this.blockScroll&&a.DomHandler.addClass(document.body,"ui-overflow-hidden"))},n.prototype.disableModality=function(){this.mask&&(document.body.removeChild(this.mask),a.DomHandler.removeClass(document.body,"ui-overflow-hidden"),this.blockScroll&&a.DomHandler.removeClass(document.body,"ui-overflow-hidden"),this.mask=null)},n.prototype.close=function(n){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide(),n.preventDefault()},n.prototype.hide=function(){this.visible=!1},n.prototype.moveOnTop=function(){this.autoZIndex&&(this.container.style.zIndex=String(this.baseZIndex+ ++a.DomHandler.zindex))},n.prototype.bindGlobalListeners=function(){var n=this;(this.closeOnEscape&&this.closable||this.focusTrap&&!this.documentEscapeListener)&&(this.documentEscapeListener=this.renderer.listen("document","keydown",function(t){if(27==t.which&&n.closeOnEscape&&n.closable&&parseInt(n.container.style.zIndex)===a.DomHandler.zindex+n.baseZIndex&&n.visible&&n.close(t),9===t.which&&n.focusTrap){t.preventDefault();var e=a.DomHandler.getFocusableElements(n.container);if(e&&e.length>0)if(document.activeElement){var l=e.indexOf(document.activeElement);t.shiftKey?-1==l||0===l?e[e.length-1].focus():e[l-1].focus():-1==l||l===e.length-1?e[0].focus():e[l+1].focus()}else e[0].focus()}}))},n.prototype.unbindGlobalListeners=function(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)},n.prototype.onOverlayHide=function(){this.disableModality(),this.unbindGlobalListeners(),this.container=null},n.prototype.ngOnDestroy=function(){this.restoreAppend(),this.onOverlayHide(),this.subscription.unsubscribe()},n.prototype.accept=function(){this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide(),this.confirmation=null},n.prototype.reject=function(){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide(),this.confirmation=null},l([o.Input(),i("design:type",Boolean)],n.prototype,"visible",void 0),l([o.Input(),i("design:type",String)],n.prototype,"header",void 0),l([o.Input(),i("design:type",String)],n.prototype,"icon",void 0),l([o.Input(),i("design:type",String)],n.prototype,"message",void 0),l([o.Input(),i("design:type",Object)],n.prototype,"style",void 0),l([o.Input(),i("design:type",String)],n.prototype,"styleClass",void 0),l([o.Input(),i("design:type",String)],n.prototype,"acceptIcon",void 0),l([o.Input(),i("design:type",String)],n.prototype,"acceptLabel",void 0),l([o.Input(),i("design:type",Boolean)],n.prototype,"acceptVisible",void 0),l([o.Input(),i("design:type",String)],n.prototype,"rejectIcon",void 0),l([o.Input(),i("design:type",String)],n.prototype,"rejectLabel",void 0),l([o.Input(),i("design:type",Boolean)],n.prototype,"rejectVisible",void 0),l([o.Input(),i("design:type",String)],n.prototype,"acceptButtonStyleClass",void 0),l([o.Input(),i("design:type",String)],n.prototype,"rejectButtonStyleClass",void 0),l([o.Input(),i("design:type",Boolean)],n.prototype,"closeOnEscape",void 0),l([o.Input(),i("design:type",Boolean)],n.prototype,"blockScroll",void 0),l([o.Input(),i("design:type",Boolean)],n.prototype,"rtl",void 0),l([o.Input(),i("design:type",Boolean)],n.prototype,"closable",void 0),l([o.Input(),i("design:type",Object)],n.prototype,"appendTo",void 0),l([o.Input(),i("design:type",String)],n.prototype,"key",void 0),l([o.Input(),i("design:type",Boolean)],n.prototype,"autoZIndex",void 0),l([o.Input(),i("design:type",Number)],n.prototype,"baseZIndex",void 0),l([o.Input(),i("design:type",String)],n.prototype,"transitionOptions",void 0),l([o.Input(),i("design:type",Boolean)],n.prototype,"focusTrap",void 0),l([o.ContentChild(s.Footer,{static:!1}),i("design:type",Object)],n.prototype,"footer",void 0),l([o.ViewChild("content",{static:!1}),i("design:type",o.ElementRef)],n.prototype,"contentViewChild",void 0),l([o.Input(),i("design:type",Object),i("design:paramtypes",[Object])],n.prototype,"width",null),l([o.Input(),i("design:type",Object),i("design:paramtypes",[Object])],n.prototype,"height",null),l([o.Component({selector:"p-confirmDialog",template:'\n        <div [ngClass]="{\'ui-dialog ui-confirmdialog ui-widget ui-widget-content ui-corner-all ui-shadow\':true,\'ui-dialog-rtl\':rtl}" [ngStyle]="style" [class]="styleClass" (mousedown)="moveOnTop()"\n            [@animation]="{value: \'visible\', params: {transitionParams: transitionOptions}}" (@animation.start)="onAnimationStart($event)" *ngIf="visible">\n            <div class="ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top">\n                <span class="ui-dialog-title" *ngIf="header">{{header}}</span>\n                <a *ngIf="closable" [ngClass]="{\'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all\':true}" tabindex="0" role="button" (click)="close($event)" (keydown.enter)="close($event)">\n                    <span class="pi pi-fw pi-times"></span>\n                </a>\n            </div>\n            <div #content class="ui-dialog-content ui-widget-content">\n                <i [ngClass]="\'ui-confirmdialog-icon\'" [class]="icon" *ngIf="icon"></i>\n                <span class="ui-confirmdialog-message" [innerHTML]="message"></span>\n            </div>\n            <div class="ui-dialog-footer ui-widget-content" *ngIf="footer">\n                <ng-content select="p-footer"></ng-content>\n            </div>\n            <div class="ui-dialog-footer ui-widget-content" *ngIf="!footer">\n                <button type="button" pButton [icon]="acceptIcon" [label]="acceptLabel" (click)="accept()" [class]="acceptButtonStyleClass" *ngIf="acceptVisible"></button>\n                <button type="button" pButton [icon]="rejectIcon" [label]="rejectLabel" (click)="reject()" [class]="rejectButtonStyleClass" *ngIf="rejectVisible"></button>\n            </div>\n        </div>\n    ',animations:[u.trigger("animation",[u.state("void",u.style({transform:"translateX(-50%) translateY(-50%) scale(0.7)",opacity:0})),u.state("visible",u.style({transform:"translateX(-50%) translateY(-50%) scale(1)",opacity:1})),u.transition("* => *",u.animate("{{transitionParams}}"))])]})],n)}());t.ConfirmDialog=d,t.ConfirmDialogModule=function(){return l([o.NgModule({imports:[r.CommonModule,c.ButtonModule],exports:[d,c.ButtonModule,s.SharedModule],declarations:[d]})],function(){})}()},LRDa:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var l=e("mrSG"),i=e("CcnG"),o=e("fvl4"),u=e("VRER"),r=function(){function n(n,t){this.firestore=n,this.firestorage=t}return n.prototype.get_todos_usuarios_alunos_edit_remover=function(n,t){return l.__awaiter(this,void 0,void 0,function(){var e;return l.__generator(this,function(l){switch(l.label){case 0:return e=[],[4,this.firestore.collection("/Usuarios/alunos/usuarios_alunos/").get().forEach(function(n){n.empty||n.forEach(function(n){t!==n.data().uid&&(e=e.concat([{nome:n.data().displayName,uid:n.data().uid}]))})})];case 1:return l.sent(),[2,e.filter(function(t,e,l){if(-1!==n.indexOf(t.uid))return t})]}})})},n.prototype.get_todos_usuarios_professores_edit_remover=function(n,t){return l.__awaiter(this,void 0,void 0,function(){var e;return l.__generator(this,function(l){switch(l.label){case 0:return e=[],[4,this.firestore.collection("/Usuarios/professores/usuarios_professores/").get().forEach(function(n){n.empty||n.forEach(function(n){t!==n.data().uid&&(e=e.concat([{nome:n.data().displayName,uid:n.data().uid}]))})})];case 1:return l.sent(),[2,e.filter(function(t,e,l){if(-1!==n.indexOf(t.uid))return t})]}})})},n.prototype.get_todos_usuarios_professores_edit=function(n){return l.__awaiter(this,void 0,void 0,function(){var t;return l.__generator(this,function(e){switch(e.label){case 0:return t=[],[4,this.firestore.collection("/Usuarios/professores/usuarios_professores/").get().forEach(function(n){n.empty||n.forEach(function(n){t=t.concat([{nome:n.data().displayName,uid:n.data().uid}])})})];case 1:return e.sent(),[2,t.filter(function(t,e,l){if(-1==n.indexOf(t.uid))return t})]}})})},n.prototype.get_todos_usuarios_alunos_edit=function(n){return l.__awaiter(this,void 0,void 0,function(){var t;return l.__generator(this,function(e){switch(e.label){case 0:return t=[],[4,this.firestore.collection("/Usuarios/alunos/usuarios_alunos/").get().forEach(function(n){n.empty||n.forEach(function(n){t=t.concat([{nome:n.data().displayName,uid:n.data().uid}])})})];case 1:return e.sent(),[2,t.filter(function(t,e,l){if(-1==n.indexOf(t.uid))return t})]}})})},n.prototype.get_todos_usuarios_alunos=function(n){return l.__awaiter(this,void 0,void 0,function(){var t;return l.__generator(this,function(e){switch(e.label){case 0:return t=[],[4,this.firestore.collection("/Usuarios/alunos/usuarios_alunos/").get().forEach(function(e){e.empty||e.forEach(function(e){e.data().uid!==n&&(t=t.concat([{nome:e.data().displayName,uid:e.data().uid}]))})})];case 1:return e.sent(),[2,t]}})})},n.prototype.get_todos_usuarios_professores=function(n){return l.__awaiter(this,void 0,void 0,function(){var t;return l.__generator(this,function(e){switch(e.label){case 0:return t=[],[4,this.firestore.collection("/Usuarios/professores/usuarios_professores/").get().forEach(function(e){e.empty||e.forEach(function(e){e.data().uid!==n&&(t=t.concat([{nome:e.data().displayName,uid:e.data().uid}]))})})];case 1:return e.sent(),[2,t]}})})},n.prototype.get_eventosCalendario=function(n){return l.__awaiter(this,void 0,void 0,function(){var t,e;return l.__generator(this,function(l){switch(l.label){case 0:return t=[],null==(e=this.firestore.collection("/Grupos/"+n+"/diciplina/").get())?[3,2]:[4,e.forEach(function(n){n.empty||n.forEach(function(n){console.log(n.data()),t=t.concat([{start:new Date(n.data().data_inicio),end:new Date(n.data().data_fim),title:n.data().nome}])})})];case 1:l.sent(),l.label=2;case 2:return[2,t]}})})},n.prototype.create_grupo=function(n){return l.__awaiter(this,void 0,void 0,function(){var t;return l.__generator(this,function(e){switch(e.label){case 0:return[4,this.firestore.collection("/Grupos/").add(n).then(function(n){t=n?n.id:""})];case 1:return e.sent(),[2,t]}})})},n.prototype.read_grupo=function(n){return this.firestore.collection("/Grupos/").ref.where("usuarios","array-contains",n)},n.prototype.get_objGrupo=function(n){return l.__awaiter(this,void 0,void 0,function(){return l.__generator(this,function(t){return[2,this.firestore.doc("/Grupos/"+n).get()]})})},n.prototype.criaObjGrupo=function(n){return{uid:n.id,titulo:n.data().titulo,imagem_url:n.data().imagem_url,usuarios:n.data().uidUsuarios,criador:n.data().criador}},n.prototype.get_mensagensGrupo=function(n){return this.firestore.collection("/Grupos/"+n+"/mensagens/").snapshotChanges()},n.prototype.criaObjMensagem=function(n){return{uid:n.id,arquivo_url:n.data().arquivo_url,data_envio:n.data().data_envio,enviado_por:n.data().enviado_por,imagem_url:n.data().imagem_url,texto:n.data().texto,foto_enviado_por:n.data().foto_enviado_por}},n.prototype.enviarMensagem=function(n,t){return l.__awaiter(this,void 0,void 0,function(){var e;return l.__generator(this,function(l){switch(l.label){case 0:return e="",[4,this.firestore.collection("/Grupos/"+n+"/mensagens/").add(t).then(function(n){e=n.id})];case 1:return l.sent(),[2,e]}})})},n.prototype.update_grupo=function(n,t){this.firestore.doc("/Grupos/"+n).update(t)},n.prototype.delete_grupo=function(n){this.firestore.doc("/Grupos/"+n).delete()},n.prototype.enviar_arquivo=function(n,t,e){return l.__awaiter(this,void 0,void 0,function(){return l.__generator(this,function(l){switch(l.label){case 0:return[4,this.firestorage.upload("arquivosGrupo/"+e+"/"+t+"/images/",n)];case 1:return[2,l.sent()]}})})},n.prototype.update_mensageWithFile=function(n,t,e){this.firestore.doc("/Grupos/"+e+"/mensagens/"+n+"/").update(t)},n.prototype.enviarCalendario=function(n,t){var e=this;t.forEach(function(t){var l={data_fim:t.data_fim,data_inicio:t.data_inicio,nome:t.titulo};e.firestore.collection("/Grupos/"+n+"/diciplina/").add(l)})},n.ngInjectableDef=i["\u0275\u0275defineInjectable"]({factory:function(){return new n(i["\u0275\u0275inject"](o.a),i["\u0275\u0275inject"](u.a))},token:n,providedIn:"root"}),n}()},VSng:function(n,t,e){var l=e("mrSG").__decorate,i=e("mrSG").__metadata;Object.defineProperty(t,"__esModule",{value:!0});var o=e("CcnG"),u=e("sdDj"),r=e("Ip0R"),a=function(){function n(n){this.el=n,this.iconPos="left",this.cornerStyleClass="ui-corner-all"}return n.prototype.ngAfterViewInit=function(){if(u.DomHandler.addMultipleClasses(this.el.nativeElement,this.getStyleClass()),this.icon){var n=document.createElement("span");n.setAttribute("aria-hidden","true"),n.className=("right"==this.iconPos?"ui-button-icon-right":"ui-button-icon-left")+" ui-clickable "+this.icon,this.el.nativeElement.appendChild(n)}var t=document.createElement("span");t.className="ui-button-text ui-clickable",t.appendChild(document.createTextNode(this.label||"ui-btn")),this.el.nativeElement.appendChild(t),this.initialized=!0},n.prototype.getStyleClass=function(){return"ui-button ui-widget ui-state-default "+this.cornerStyleClass+(this.icon?null!=this.label&&null!=this.label?"left"==this.iconPos?" ui-button-text-icon-left":" ui-button-text-icon-right":" ui-button-icon-only":this.label?" ui-button-text-only":" ui-button-text-empty")},Object.defineProperty(n.prototype,"label",{get:function(){return this._label},set:function(n){this._label=n,this.initialized&&(u.DomHandler.findSingle(this.el.nativeElement,".ui-button-text").textContent=this._label,this.icon||(this._label?(u.DomHandler.removeClass(this.el.nativeElement,"ui-button-text-empty"),u.DomHandler.addClass(this.el.nativeElement,"ui-button-text-only")):(u.DomHandler.addClass(this.el.nativeElement,"ui-button-text-empty"),u.DomHandler.removeClass(this.el.nativeElement,"ui-button-text-only"))))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"icon",{get:function(){return this._icon},set:function(n){if(this._icon=n,this.initialized){var t="right"==this.iconPos?"ui-button-icon-right":"ui-button-icon-left";u.DomHandler.findSingle(this.el.nativeElement,".ui-clickable").className=t+" ui-clickable "+this.icon}},enumerable:!0,configurable:!0}),n.prototype.ngOnDestroy=function(){for(;this.el.nativeElement.hasChildNodes();)this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);this.initialized=!1},l([o.Input(),i("design:type",String)],n.prototype,"iconPos",void 0),l([o.Input(),i("design:type",String)],n.prototype,"cornerStyleClass",void 0),l([o.Input(),i("design:type",String),i("design:paramtypes",[String])],n.prototype,"label",null),l([o.Input(),i("design:type",String),i("design:paramtypes",[String])],n.prototype,"icon",null),l([o.Directive({selector:"[pButton]"})],n)}();t.ButtonDirective=a;var s=function(){function n(){this.iconPos="left",this.onClick=new o.EventEmitter,this.onFocus=new o.EventEmitter,this.onBlur=new o.EventEmitter}return l([o.Input(),i("design:type",String)],n.prototype,"type",void 0),l([o.Input(),i("design:type",String)],n.prototype,"iconPos",void 0),l([o.Input(),i("design:type",String)],n.prototype,"icon",void 0),l([o.Input(),i("design:type",String)],n.prototype,"label",void 0),l([o.Input(),i("design:type",Boolean)],n.prototype,"disabled",void 0),l([o.Input(),i("design:type",Object)],n.prototype,"style",void 0),l([o.Input(),i("design:type",String)],n.prototype,"styleClass",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"onClick",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"onFocus",void 0),l([o.Output(),i("design:type",o.EventEmitter)],n.prototype,"onBlur",void 0),l([o.Component({selector:"p-button",template:"\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [ngStyle]=\"style\" [disabled]=\"disabled\"\n            [ngClass]=\"{'ui-button ui-widget ui-state-default ui-corner-all':true,\n                        'ui-button-icon-only': (icon && !label),\n                        'ui-button-text-icon-left': (icon && label && iconPos === 'left'),\n                        'ui-button-text-icon-right': (icon && label && iconPos === 'right'),\n                        'ui-button-text-only': (!icon && label),\n                        'ui-button-text-empty': (!icon && !label),\n                        'ui-state-disabled': disabled}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\">\n            <ng-content></ng-content>\n            <span [ngClass]=\"{'ui-clickable': true,\n                        'ui-button-icon-left': (iconPos === 'left'), \n                        'ui-button-icon-right': (iconPos === 'right')}\"\n                        [class]=\"icon\" *ngIf=\"icon\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{label||'ui-btn'}}</span>\n        </button>\n    "})],n)}();t.Button=s,t.ButtonModule=function(){return l([o.NgModule({imports:[r.CommonModule],exports:[a,s],declarations:[a,s]})],function(){})}()},ZEpu:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),i=function(){return function(){}}(),o=e("pMnS"),u=e("ZYCi"),r=e("Ip0R"),a=e("xtZt"),s=e("lqqz"),c=e("3GNW"),d=e("VSng"),p=e("7LN8"),f=e("oygf"),m=l["\u0275crt"]({encapsulation:2,styles:[],data:{animation:[{type:7,name:"animation",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"translateX(-50%) translateY(-50%) scale(0.7)",opacity:0},offset:null},options:void 0},{type:0,name:"visible",styles:{type:6,styles:{transform:"translateX(-50%) translateY(-50%) scale(1)",opacity:1},offset:null},options:void 0},{type:1,expr:"* => *",animation:{type:4,styles:null,timings:"{{transitionParams}}"},options:null}],options:{}}]}});function g(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"span",[["class","ui-dialog-title"]],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,["",""]))],null,function(n,t){n(t,1,0,t.component.header)})}function h(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"a",[["role","button"],["tabindex","0"]],null,[[null,"click"],[null,"keydown.enter"]],function(n,t,e){var l=!0,i=n.component;return"click"===t&&(l=!1!==i.close(e)&&l),"keydown.enter"===t&&(l=!1!==i.close(e)&&l),l},null,null)),l["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](2,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),l["\u0275pod"](3,{"ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all":0}),(n()(),l["\u0275eld"](4,0,null,null,0,"span",[["class","pi pi-fw pi-times"]],null,null,null,null,null))],function(n,t){var e=n(t,3,0,!0);n(t,2,0,e)},null)}function v(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,2,"i",[],null,null,null,null,null)),l["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](2,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(n,t){n(t,2,0,t.component.icon,"ui-confirmdialog-icon")},null)}function y(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"div",[["class","ui-dialog-footer ui-widget-content"]],null,null,null,null,null)),l["\u0275ncd"](null,0)],null,null)}function b(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"button",[["pButton",""],["type","button"]],[[8,"className",0]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.accept()&&l),l},null,null)),l["\u0275did"](1,4341760,null,0,d.ButtonDirective,[l.ElementRef],{label:[0,"label"],icon:[1,"icon"]},null)],function(n,t){var e=t.component;n(t,1,0,e.acceptLabel,e.acceptIcon)},function(n,t){n(t,0,0,t.component.acceptButtonStyleClass)})}function _(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"button",[["pButton",""],["type","button"]],[[8,"className",0]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.reject()&&l),l},null,null)),l["\u0275did"](1,4341760,null,0,d.ButtonDirective,[l.ElementRef],{label:[0,"label"],icon:[1,"icon"]},null)],function(n,t){var e=t.component;n(t,1,0,e.rejectLabel,e.rejectIcon)},function(n,t){n(t,0,0,t.component.rejectButtonStyleClass)})}function I(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"div",[["class","ui-dialog-footer ui-widget-content"]],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,b)),l["\u0275did"](2,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,_)),l["\u0275did"](4,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component;n(t,2,0,e.acceptVisible),n(t,4,0,e.rejectVisible)},null)}function C(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,20,"div",[],[[24,"@animation",0]],[[null,"mousedown"],[null,"@animation.start"]],function(n,t,e){var l=!0,i=n.component;return"mousedown"===t&&(l=!1!==i.moveOnTop()&&l),"@animation.start"===t&&(l=!1!==i.onAnimationStart(e)&&l),l},null,null)),l["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](2,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l["\u0275pod"](3,{"ui-dialog ui-confirmdialog ui-widget ui-widget-content ui-corner-all ui-shadow":0,"ui-dialog-rtl":1}),l["\u0275prd"](512,null,r["\u0275NgStyleImpl"],r["\u0275NgStyleR2Impl"],[l.ElementRef,l.KeyValueDiffers,l.Renderer2]),l["\u0275did"](5,278528,null,0,r.NgStyle,[r["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),l["\u0275pod"](6,{transitionParams:0}),l["\u0275pod"](7,{value:0,params:1}),(n()(),l["\u0275eld"](8,0,null,null,4,"div",[["class","ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top"]],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,g)),l["\u0275did"](10,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,h)),l["\u0275did"](12,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](13,0,[[1,0],["content",1]],null,3,"div",[["class","ui-dialog-content ui-widget-content"]],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,v)),l["\u0275did"](15,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](16,0,null,null,0,"span",[["class","ui-confirmdialog-message"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,y)),l["\u0275did"](18,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,I)),l["\u0275did"](20,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component,l=e.styleClass,i=n(t,3,0,!0,e.rtl);n(t,2,0,l,i),n(t,5,0,e.style),n(t,10,0,e.header),n(t,12,0,e.closable),n(t,15,0,e.icon),n(t,18,0,e.footer),n(t,20,0,!e.footer)},function(n,t){var e=t.component,l=n(t,7,0,"visible",n(t,6,0,e.transitionOptions));n(t,0,0,l),n(t,16,0,e.message)})}function w(n){return l["\u0275vid"](0,[l["\u0275qud"](671088640,1,{contentViewChild:0}),(n()(),l["\u0275and"](16777216,null,null,1,null,C)),l["\u0275did"](2,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,2,0,t.component.visible)},null)}var S=e("A5rM"),k=e("G5kV"),E=e("4Vzq"),x=e("LRDa"),D=(e("24Yq"),function(){function n(n,t,e,l){this.router=n,this.grupoService=t,this.confirmationService=e,this.messageService=l,this.donoGrupo=!1,this.currentUser=JSON.parse(sessionStorage.getItem("userSession"))}return n.prototype.ngOnInit=function(){this.integrantes=this.onlines.length+"",this.currentUser.uid===this.uidCriador&&(this.donoGrupo=!0)},n.prototype.deleteGroup=function(){this.uidCriador===this.currentUser.uid&&this.grupoService.delete_grupo(this.idGrupo)},n.prototype.confirmDeleteGroup=function(){var n=this;this.confirmationService.confirm({message:"Deseja realmente excluir o grupo?",header:"Confirme a exclus\xe3o",icon:"pi pi-info-circle",accept:function(){n.deleteGroup(),n.showSuccess()},reject:function(){n.showError()}})},n.prototype.showSuccess=function(){this.messageService.add({severity:"success",summary:"Sucesso!",detail:"Grupo foi exclu\xeddo."})},n.prototype.showError=function(){this.messageService.add({severity:"error",summary:"Cancelado!",detail:"O grupo n\xe3o removido."})},n}()),R=l["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function j(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,8,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,5,"a",[["class","dropdown-item"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==l["\u0275nov"](n,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i},null,null)),l["\u0275did"](2,671744,[[2,4]],0,u.o,[u.l,u.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),l["\u0275did"](3,1720320,null,2,u.n,[u.l,l.ElementRef,l.Renderer2,[2,u.m],[2,u.o]],{routerLinkActive:[0,"routerLinkActive"]},null),l["\u0275qud"](603979776,1,{links:1}),l["\u0275qud"](603979776,2,{linksWithHrefs:1}),(n()(),l["\u0275ted"](-1,null,["Editar"])),(n()(),l["\u0275eld"](7,0,null,null,1,"a",[["class","dropdown-item"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.confirmDeleteGroup()&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["Excluir Grupo"]))],function(n,t){n(t,2,0,l["\u0275inlineInterpolate"](1,"/editGroup/",t.component.idGrupo,"")),n(t,3,0,"active")},function(n,t){n(t,1,0,l["\u0275nov"](t,2).target,l["\u0275nov"](t,2).href)})}function N(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),l["\u0275eld"](1,16777216,null,null,7,"div",[["class","btn-group float-right"],["dropdown",""]],[[2,"dropup",null],[2,"open",null],[2,"show",null]],null,null,null,null)),l["\u0275prd"](512,null,a.f,a.f,[]),l["\u0275did"](3,212992,null,0,a.c,[l.ElementRef,l.Renderer2,l.ViewContainerRef,s.a,a.a,a.f],null,null),(n()(),l["\u0275eld"](4,0,null,null,2,"button",[["class","btn btn-transparent dropdown-toggle p-0"],["dropdownToggle",""],["type","button"]],[[1,"aria-haspopup",0],[1,"disabled",0],[1,"aria-expanded",0]],[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==l["\u0275nov"](n,5).onClick()&&i),i},null,null)),l["\u0275did"](5,147456,null,0,a.g,[l.ChangeDetectorRef,a.c,l.ElementRef,l.Renderer2,a.f],null,null),(n()(),l["\u0275eld"](6,0,null,null,0,"i",[["class","icon-settings"]],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,j)),l["\u0275did"](8,16384,null,0,a.d,[a.f,l.ViewContainerRef,l.TemplateRef],null,null)],function(n,t){n(t,3,0)},function(n,t){n(t,1,0,l["\u0275nov"](t,3).dropup,l["\u0275nov"](t,3).isOpen,l["\u0275nov"](t,3).isOpen&&l["\u0275nov"](t,3).isBs4),n(t,4,0,!0,l["\u0275nov"](t,5).isDisabled,l["\u0275nov"](t,5).isOpen)})}function O(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,18,"div",[["class","card text-white bg-primary"],["style","width:280px;height: 320px;"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,9,"div",[["class","card-body pb-0"]],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,N)),l["\u0275did"](3,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](4,0,null,null,6,"a",[["class","nav-link"],["routerLinkActive","active"],["style","color: white;text-decoration: none;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==l["\u0275nov"](n,5).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i},null,null)),l["\u0275did"](5,671744,[[4,4]],0,u.o,[u.l,u.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),l["\u0275did"](6,1720320,null,2,u.n,[u.l,l.ElementRef,l.Renderer2,[2,u.m],[2,u.o]],{routerLinkActive:[0,"routerLinkActive"]},null),l["\u0275qud"](603979776,3,{links:1}),l["\u0275qud"](603979776,4,{linksWithHrefs:1}),(n()(),l["\u0275eld"](9,0,null,null,1,"div",[["class","text-value card-title"],["style","width: 100%;max-height: 100%;"]],null,null,null,null,null)),(n()(),l["\u0275ted"](10,null,["",""])),(n()(),l["\u0275eld"](11,0,null,null,0,"div",[["class","card-footer"],["style","height:200px"]],null,null,null,null,null)),(n()(),l["\u0275eld"](12,0,null,null,3,"p-confirmDialog",[],null,null,null,w,m)),l["\u0275did"](13,180224,null,1,c.ConfirmDialog,[l.ElementRef,l.Renderer2,f.ConfirmationService,l.NgZone],{style:[0,"style"]},null),l["\u0275qud"](603979776,5,{footer:0}),l["\u0275pod"](15,{width:0}),(n()(),l["\u0275eld"](16,0,null,null,2,"p-toast",[["position","bottom-right"]],null,null,null,S.b,S.a)),l["\u0275did"](17,1294336,null,1,k.Toast,[E.MessageService],{position:[0,"position"]},null),l["\u0275qud"](603979776,6,{templates:1})],function(n,t){var e=t.component;n(t,3,0,e.donoGrupo),n(t,5,0,l["\u0275inlineInterpolate"](1,"/chat/",e.idGrupo,"")),n(t,6,0,"active");var i=n(t,15,0,"50vw");n(t,13,0,i),n(t,17,0,"bottom-right")},function(n,t){var e=t.component;n(t,4,0,l["\u0275nov"](t,5).target,l["\u0275nov"](t,5).href),n(t,10,0,e.titulo)})}var L=function(){function n(n){this.grupoService=n,this.gruposAtivos=[],this.currentUser=JSON.parse(sessionStorage.getItem("userSession")),this.idDocUser=sessionStorage.getItem("idDoc")}return n.prototype.ngOnInit=function(){this.getGrupos()},n.prototype.getGrupos=function(){var n=this;this.grupoService.read_grupo(this.currentUser.uid).onSnapshot(function(t){t.empty||(n.gruposAtivos=[],t.docs.forEach(function(t){n.gruposAtivos.push(n.grupoService.criaObjGrupo(t))}))})},n}(),M=l["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function G(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,4,"div",[["class","col-lg-4"]],null,null,null,null,null)),(n()(),l["\u0275eld"](2,0,null,null,3,"app-card-class",[],null,null,null,O,R)),l["\u0275prd"](512,null,f.ConfirmationService,f.ConfirmationService,[]),l["\u0275prd"](512,null,E.MessageService,E.MessageService,[]),l["\u0275did"](5,114688,null,0,D,[u.l,x.a,f.ConfirmationService,E.MessageService],{titulo:[0,"titulo"],onlines:[1,"onlines"],idGrupo:[2,"idGrupo"],uidCriador:[3,"uidCriador"]},null)],function(n,t){n(t,5,0,l["\u0275inlineInterpolate"](1,"",t.context.$implicit.titulo,""),l["\u0275inlineInterpolate"](1,"",t.context.$implicit.usuarios,""),l["\u0275inlineInterpolate"](1,"",t.context.$implicit.uid,""),l["\u0275inlineInterpolate"](1,"",t.context.$implicit.criador,""))},null)}function V(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,G)),l["\u0275did"](3,278528,null,0,r.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,3,0,t.component.gruposAtivos)},null)}function B(n){return l["\u0275vid"](0,[(n()(),l["\u0275and"](16777216,null,null,1,null,V)),l["\u0275did"](1,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,1,0,t.component.gruposAtivos)},null)}var T=function(){function n(){}return n.prototype.ngOnInit=function(){console.log(JSON.parse(sessionStorage.getItem("userSession")))},n}(),H=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function A(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,20,"div",[["class","animated fadeIn"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,19,"div",[["class","card"]],null,null,null,null,null)),(n()(),l["\u0275eld"](2,0,null,null,17,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),l["\u0275eld"](3,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(n()(),l["\u0275eld"](4,0,null,null,4,"div",[["class","col-sm-5 col-lg-5"]],null,null,null,null,null)),(n()(),l["\u0275eld"](5,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Minhas Mat\xe9rias"])),(n()(),l["\u0275eld"](7,0,null,null,1,"div",[["class","small text-muted"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["26 de Setembro"])),(n()(),l["\u0275eld"](9,0,null,null,7,"a",[["class","nav-link"],["routerLink","/createGroup"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==l["\u0275nov"](n,10).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i},null,null)),l["\u0275did"](10,671744,[[2,4]],0,u.o,[u.l,u.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),l["\u0275did"](11,1720320,null,2,u.n,[u.l,l.ElementRef,l.Renderer2,[2,u.m],[2,u.o]],{routerLinkActive:[0,"routerLinkActive"]},null),l["\u0275qud"](603979776,1,{links:1}),l["\u0275qud"](603979776,2,{linksWithHrefs:1}),(n()(),l["\u0275eld"](14,0,null,null,0,"i",[["class","icon-plus"],["style","font-size: 3em;"]],null,null,null,null,null)),(n()(),l["\u0275eld"](15,0,null,null,1,"span",[["class","badge badge-pill badge-danger"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Criar um novo grupo"])),(n()(),l["\u0275eld"](17,0,null,null,2,"div",[["style","height:90%;margin-top:40px;min-height: 600px;"]],null,null,null,null,null)),(n()(),l["\u0275eld"](18,0,null,null,1,"app-container-materia-card",[],null,null,null,B,M)),l["\u0275did"](19,114688,null,0,L,[x.a],null,null),(n()(),l["\u0275eld"](20,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null))],function(n,t){n(t,10,0,"/createGroup"),n(t,11,0,"active"),n(t,19,0)},function(n,t){n(t,9,0,l["\u0275nov"](t,10).target,l["\u0275nov"](t,10).href)})}function P(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,A,H)),l["\u0275did"](1,114688,null,0,T,[],null,null)],function(n,t){n(t,1,0)},null)}var q=l["\u0275ccf"]("ng-component",T,P,{},{},[]),z=e("iutN"),F=e("gIcY"),K={title:"Dashboard"},U=function(){return function(){}}(),Z=e("Zseb"),$=e("Fzqc"),Y=e("dWZg"),W=e("qAlS"),J=e("g4HV"),X=e("nciF"),Q=e("mU/a"),nn=e("/3G7"),tn=e("9EwZ");e.d(t,"DashboardModuleNgFactory",function(){return en});var en=l["\u0275cmf"](i,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,q,z.a]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,F["\u0275angular_packages_forms_forms_o"],F["\u0275angular_packages_forms_forms_o"],[]),l["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[l.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](1073742336,F["\u0275angular_packages_forms_forms_d"],F["\u0275angular_packages_forms_forms_d"],[]),l["\u0275mpd"](1073742336,F.FormsModule,F.FormsModule,[]),l["\u0275mpd"](1073742336,u.p,u.p,[[2,u.u],[2,u.l]]),l["\u0275mpd"](1073742336,U,U,[]),l["\u0275mpd"](1073742336,Z.a,Z.a,[]),l["\u0275mpd"](1073742336,a.e,a.e,[]),l["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),l["\u0275mpd"](1073742336,p.SharedModule,p.SharedModule,[]),l["\u0275mpd"](1073742336,$.a,$.a,[]),l["\u0275mpd"](1073742336,Y.b,Y.b,[]),l["\u0275mpd"](1073742336,W.ScrollingModule,W.ScrollingModule,[]),l["\u0275mpd"](1073742336,J.TooltipModule,J.TooltipModule,[]),l["\u0275mpd"](1073742336,X.DropdownModule,X.DropdownModule,[]),l["\u0275mpd"](1073742336,Q.PaginatorModule,Q.PaginatorModule,[]),l["\u0275mpd"](1073742336,nn.DataViewModule,nn.DataViewModule,[]),l["\u0275mpd"](1073742336,tn.a,tn.a,[]),l["\u0275mpd"](1073742336,d.ButtonModule,d.ButtonModule,[]),l["\u0275mpd"](1073742336,c.ConfirmDialogModule,c.ConfirmDialogModule,[]),l["\u0275mpd"](1073742336,k.ToastModule,k.ToastModule,[]),l["\u0275mpd"](1073742336,i,i,[]),l["\u0275mpd"](1024,u.j,function(){return[[{path:"",component:T,data:K}]]},[])])})}}]);
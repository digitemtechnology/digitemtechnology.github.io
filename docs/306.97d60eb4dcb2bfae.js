"use strict";(self.webpackChunkinfinity_web=self.webpackChunkinfinity_web||[]).push([[306],{4306:(Z,c,i)=>{i.r(c),i.d(c,{AuthModule:()=>O});var g=i(6019),p=i(1659),s=i(9133);const l={accountValidationMessages:{firstName:[{type:"required",message:"Firstname is required."},{type:"minlength",message:"Firstname must be at least 4 characters long."},{type:"maxlength",message:"Firstname cannot be more than 25 characters long."}],lastName:[{type:"required",message:"Lastname is required."},{type:"minlength",message:"Lastname must be at least 4 characters long."},{type:"maxlength",message:"Lastname cannot be more than 25 characters long."}],emailAddress:[{type:"required",message:"Email is required."},{type:"email",message:"Please enter a valid email address."},{type:"pattern",message:"Email format should be xyz@example.com."},{type:"unique",message:"Email address is already exist. Try another."}],userName:[{type:"required",message:"Email is required."},{type:"email",message:"Please enter a valid email address."},{type:"pattern",message:"Email format should be xyz@example.com."},{type:"unique",message:"Email address is already exist. Try another."}],confirmPassword:[{type:"error",message:"Password does not match."}],password:[{type:"required",message:"Password is required."},{type:"pattern",message:"Your password must contain at least minimum 8 character, one uppercase, one lowercase, one special character, and one number."}],phoneNumber:[{type:"required",message:"Phone number is required."}]},matchPattern:{emailPattern:"^[A-Za-z0-9_+-]+(.[A-Za-z0-9_+-]+)*@[A-Za-z0-9-]+(.[A-Za-z0-9-]+)*.([A-Za-z]{2,4})$",passwordPattern:"((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})",phonePattern:"[6-9]\\d{9}"}};var t=i(3668),u=i(8060),m=i(7706),d=i(138),h=i(3660);function f(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.message,"")}}function x(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t.YNc(1,f,2,1,"mat-error",17),t.qZA()),2&n){const e=a.$implicit,o=t.oxw();let r;t.xp6(1),t.Q6J("ngIf",(null==(r=o.loginForm.get("username"))?null:r.hasError(e.type))&&((null==(r=o.loginForm.get("username"))?null:r.dirty)||(null==(r=o.loginForm.get("username"))?null:r.touched)))}}function C(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.message,"")}}function w(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t.YNc(1,C,2,1,"mat-error",17),t.qZA()),2&n){const e=a.$implicit,o=t.oxw();let r;t.xp6(1),t.Q6J("ngIf",(null==(r=o.loginForm.get("password"))?null:r.hasError(e.type))&&((null==(r=o.loginForm.get("password"))?null:r.dirty)||(null==(r=o.loginForm.get("password"))?null:r.touched)))}}const P=[{path:"",component:(()=>{class n{constructor(e,o,r){this.route=e,this.formBuilder=o,this.authenticationService=r,this.constants=l,this.isPasswordHide=!0,this.loginForm=this.formBuilder.group({username:["",[s.kI.required]],password:["",s.kI.required]})}ngOnInit(){}login(){this.authenticationService.login(this.loginForm.value).subscribe(e=>{e&&this.route.navigate(["dashboard"])})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(s.qu),t.Y36(u.$))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:29,vars:7,consts:[[1,"login"],[1,"row","g-0"],[1,"col-lg-7"],[1,"form-wrap","d-flex","flex-column","justify-content-center"],[1,"login-form","d-flex","align-items-center","flex-column"],[3,"formGroup","ngSubmit"],[1,"w-100","mb-4"],["matInput","","placeholder","Username","formControlName","username","required",""],[4,"ngFor","ngForOf"],["matInput","","placeholder","Password","id","login-password","formControlName","password","required","",3,"type"],["mat-icon-button","","matSuffix","","type","button",1,"showPwd",3,"click"],[1,"form-group"],["type","submit",1,"btn","btn-secondary"],[1,"col-lg-5"],[1,"auth-banner","d-flex","flex-column","align-items-center","justify-content-center"],[1,"auth-msg","text-center","mb-5"],[1,"mb-3"],[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"main",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"form",5),t.NdJ("ngSubmit",function(){return o.login()}),t.TgZ(6,"mat-form-field",6),t.TgZ(7,"mat-label"),t._uU(8,"Username"),t.qZA(),t._UZ(9,"input",7),t.YNc(10,x,2,1,"mat-error",8),t.qZA(),t.TgZ(11,"mat-form-field",6),t.TgZ(12,"mat-label"),t._uU(13,"Password"),t.qZA(),t._UZ(14,"input",9),t.TgZ(15,"button",10),t.NdJ("click",function(){return o.isPasswordHide=!o.isPasswordHide}),t.TgZ(16,"mat-icon"),t._uU(17),t.qZA(),t.qZA(),t.YNc(18,w,2,1,"mat-error",8),t.qZA(),t.TgZ(19,"div",11),t.TgZ(20,"button",12),t._uU(21," SIGN IN "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",13),t.TgZ(23,"div",14),t.TgZ(24,"div",15),t.TgZ(25,"h1",16),t._uU(26,"Project Infinity"),t.qZA(),t.TgZ(27,"p"),t._uU(28,"Social media, Advance Analytics and much more..."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("formGroup",o.loginForm),t.xp6(5),t.Q6J("ngForOf",o.constants.accountValidationMessages.userName),t.xp6(4),t.Q6J("type",o.isPasswordHide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",o.isPasswordHide),t.xp6(2),t.hij("",o.isPasswordHide?"visibility_off":"visibility"," "),t.xp6(1),t.Q6J("ngForOf",o.constants.accountValidationMessages.password))},directives:[s._Y,s.JL,s.sg,m.KE,m.hX,d.Nt,s.Fj,s.JJ,s.u,s.Q7,g.sg,m.R9,h.Hw,m.TO,g.O5],styles:['.login[_ngcontent-%COMP%]{background-color:#fff;min-height:100vh}.auth-banner[_ngcontent-%COMP%]{background:#1A75FF url(/assets/images/inner-shapes.png) repeat-y 0 0;min-height:100vh;padding:45px;color:#fff;overflow:hidden;position:relative;width:100%;height:100%}@media (max-width: 767px){.auth-banner[_ngcontent-%COMP%]{padding:50px 15px;min-height:0;background-repeat:repeat}}.auth-banner[_ngcontent-%COMP%]:after{width:100%;height:100%;content:"";position:absolute;right:0;top:0;background:url(/assets/images/top-rect.png) no-repeat 0 0;width:260px;height:400px}@media (max-width: 767px){.auth-banner[_ngcontent-%COMP%]:after{display:none}}.auth-banner[_ngcontent-%COMP%]   .auth-msg[_ngcontent-%COMP%]{max-width:350px}.auth-banner[_ngcontent-%COMP%]   .auth-msg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:39px;font-weight:700;line-height:48px}@media (max-width: 991px){.auth-banner[_ngcontent-%COMP%]   .auth-msg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px}}@media (max-width: 767px){.auth-banner[_ngcontent-%COMP%]   .auth-msg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}}.auth-banner[_ngcontent-%COMP%]   .auth-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;font-weight:400;line-height:25px;text-align:center}@media (max-width: 991px){.auth-banner[_ngcontent-%COMP%]   .auth-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:20px}}.form-wrap[_ngcontent-%COMP%]{max-width:650px;margin:auto;padding:48px 20px;min-height:100vh}@media (max-width: 767px){.form-wrap[_ngcontent-%COMP%]{padding:50px 15px}}.form-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:39.2999px;line-height:48px;color:#1a75ff}@media (max-width: 1199px){.form-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}}@media (max-width: 991px){.form-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}}@media (max-width: 767px){.form-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px}}.form-wrap[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{max-width:100%;width:365px;margin:0 auto}.form-wrap[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{position:relative;width:100%}.form-wrap[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{border-color:#f4f8f5;background-color:transparent;position:absolute;left:5px;top:0;bottom:0;z-index:9;border-radius:0}.form-wrap[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#9a9a9a;font-size:20px}.form-wrap[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{height:52px;background-color:#f4f8f5;border-color:#f4f8f5;padding:10px 10px 10px 50px;border-radius:0;font-size:15px;font-weight:600;line-height:18px;color:#9a9a9a}.form-wrap[_ngcontent-%COMP%]   .forgot-pwd[_ngcontent-%COMP%]{font-size:15px;font-weight:700;line-height:21px;text-align:center;color:#373737;text-decoration:underline}.form-wrap[_ngcontent-%COMP%]   .forgot-pwd[_ngcontent-%COMP%]:hover, .form-wrap[_ngcontent-%COMP%]   .forgot-pwd[_ngcontent-%COMP%]:active, .form-wrap[_ngcontent-%COMP%]   .forgot-pwd[_ngcontent-%COMP%]:focus{text-decoration:none}']}),n})()},{path:"register",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-register"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"register works!"),t.qZA())},styles:[""]}),n})()}];let _=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild(P)],p.Bz]}),n})();var M=i(1842);let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,_,s.UX,M.m]]}),n})()}}]);
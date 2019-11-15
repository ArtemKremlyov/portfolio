(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{423:function(t,e,i){},431:function(t,e,i){"use strict";var r=i(423);i.n(r).a},435:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container container--new"},[i("div",{staticClass:"new"},[i("div",{staticClass:"new__title"},[t._v("Блок «Отзывы»")]),i("div",{staticClass:"group-works__title"},[t._v(t._s("edit"===t.mode?"Редактировать работу":"Добавить отзыв"))]),i("div",{staticClass:"group__separator"}),i("div",{staticClass:"new__section"},[i("form",{staticClass:"group group--new",class:{hide:t.addFormVisible},on:{submit:function(e){return e.preventDefault(),t.addNewReview(e)}}},[i("div",{staticClass:"group__left"},["new"===t.mode?i("label",{staticClass:"group__left-upload"},[i("div",{staticClass:"group__left-img",class:{filled:t.photoUrl.length},style:{backgroundImage:"url("+t.photoUrl+")"}}),i("input",{staticClass:"group__left-file",attrs:{type:"file"},on:{change:t.loadPhoto}}),t._m(0)]):"edit"===t.mode?i("label",{staticClass:"group__left-upload"},[t.photoUrl.length?i("div",{staticClass:"group__left-img filled",class:{filled:t.photoUrl.length},style:{backgroundImage:"url("+t.photoUrl+")"}}):i("div",{staticClass:"group__left-img filled",class:{filled:t.photoUrl.length},style:{backgroundImage:"url("+t.image+")"}}),i("input",{staticClass:"group__left-file",attrs:{type:"file"},on:{change:t.loadPhoto}}),i("div",{staticClass:"group__left-text"},[t._v("Изменить фото")])]):t._e()]),i("div",{staticClass:"group__right"},[i("div",{staticClass:"group__row"},[i("label",{staticClass:"group__label",class:{error:!t.authorValid}},[i("div",{staticClass:"group__label-text"},[t._v("Имя автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.review.author,expression:"review.author"}],staticClass:"group__input-new",attrs:{type:"text"},domProps:{value:t.review.author},on:{input:[function(e){e.target.composing||t.$set(t.review,"author",e.target.value)},t.validateAuthor]}}),i("div",{staticClass:"tooltip"},[t._v(t._s(t.authorError))])]),i("label",{staticClass:"group__label",class:{error:!t.occValid}},[i("div",{staticClass:"group__label-text"},[t._v("Титул автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.review.occ,expression:"review.occ"}],staticClass:"group__input-new",attrs:{type:"text"},domProps:{value:t.review.occ},on:{input:[function(e){e.target.composing||t.$set(t.review,"occ",e.target.value)},t.validateOcc]}}),i("div",{staticClass:"tooltip"},[t._v(t._s(t.occError))])])]),i("div",{staticClass:"group__row"},[i("label",{staticClass:"group__label",class:{error:!t.textValid}},[i("div",{staticClass:"group__label-text"},[t._v("Отзыв")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.review.text,expression:"review.text"}],staticClass:"group__textarea",attrs:{type:"text"},domProps:{value:t.review.text},on:{input:[function(e){e.target.composing||t.$set(t.review,"text",e.target.value)},t.validateText]}}),i("div",{staticClass:"tooltip"},[t._v(t._s(t.textError))])])]),i("div",{staticClass:"group__controls"},[i("button",{staticClass:"group__controls-cancell",on:{click:function(e){return e.preventDefault(),t.closeAddForm(e)}}},[t._v("Отменить")]),i("button",{staticClass:"group__btn",on:{click:function(e){e.preventDefault(),"new"==t.mode?t.addNewReview():t.updateUserRev()}}},[t._v("Сохранить")])])])])]),i("div",{staticClass:"new__section"},[i("div",{staticClass:"new__item new__item--line new__item--adding",on:{click:function(e){return t.showAddForm("new")}}},[t._m(1)]),t._l(t.reviews,(function(e){return i("review-item",{key:t.reviews.id,attrs:{review:e},on:{editUserRev:function(e){return t.showAddForm("edit")}}})}))],2)])])};r._withStripped=!0;var s=i(66);function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={components:{reviewItem:function(){return i.e(11).then(i.bind(null,442))}},data:function(){return{photoUrl:"",hiddenForm:!0,review:{photo:"",author:"",text:"",occ:""},test:"true",mode:"",addFormVisible:!0,authorValid:"false",authorError:"",occValid:"false",occError:"",textValid:"false",textError:"",photoValid:"false",photoError:""}},created:function(){this.fetchReviews(),"edit"===this.mode&&this.getCurrentRev()},watch:{currentRev:function(){"edit"===this.mode&&this.getCurrentRev()},mode:function(){"edit"===this.mode?(this.getCurrentRev(),this.photoUrl=""):(this.review={},this.photoUrl="")}},computed:a({},Object(s.e)("reviews",{reviews:function(t){return t.reviews}}),{},Object(s.e)("reviews",{currentRev:function(t){return t.currentRev}}),{image:function(){return"https://webdev-api.loftschool.com/".concat(this.currentRev.photo)}}),methods:a({},Object(s.b)("message",["showTooltip"]),{},Object(s.b)("reviews",["addReview","fetchReviews","updateReviews"]),{addNewReview:function(){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(this.photoValid&&this.textValid&&this.occValid&&this.authorValid)){t.next=15;break}return t.next=4,regeneratorRuntime.awrap(this.addReview(this.review));case 4:t.sent,console.log("Ok"),this.review.photo="",this.review.occ="",this.review.text="",this.review.author="",this.photoUrl="",console.log("wdwdwd"),this.showTooltip({type:"success",text:"Отзыв успешно добавлен!"}),t.next=15;break;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),this.showTooltip({type:"error",text:t.t0});case 20:case"end":return t.stop()}}),null,this,[[0,17]])},updateUserRev:function(){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(this.photoValid&&this.textValid&&this.occValid&&this.authorValid)){t.next=6;break}return console.log("dwdw"),t.next=5,regeneratorRuntime.awrap(this.updateReviews(this.review,this.photoUrl));case 5:this.showTooltip({type:"success",text:"Запись обновлена!"});case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),null,this,[[0,8]])},loadPhoto:function(t){var e=t.target.files[0];this.review.photo=e,this.getPhoto(e)},getPhoto:function(t){var e=this,i=new FileReader;try{i.readAsDataURL(t),i.onload=function(){e.photoUrl=i.result}}catch(t){}},validateAuthor:function(){return this.review.author.length<3?(this.authorValid=!1,this.authorError="Короткое имя пользователя"):(this.authorValid=!0,this.authorError=""),this.authorValid},validateOcc:function(){return this.review.occ.length<3?(this.occValid=!1,this.occError="Короткое имя пользователя"):(this.occValid=!0,this.occError=""),this.occValid},validateText:function(){return this.review.text.length<10?(this.textValid=!1,this.textError="Короткое имя пользователя"):(this.textValid=!0,this.textError=""),this.textValid},validatePhoto:function(){return this.photo.length?(this.photoValid=!0,this.textError=""):(this.photoValid="Фотография должна быть загружена!",this.photoValid=!1),this.photoValid},hideThisForm:function(){this.addFormVisible=!this.addFormVisible},showAddForm:function(t){this.mode=t,this.addFormVisible=!1},getCurrentRev:function(){this.review=a({},this.currentRev)},closeAddForm:function(){this.addFormVisible=!0}})},c=(i(431),i(96)),u=Object(c.a)(l,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"group__left-text"},[this._v("Добавить фото"),e("div",{staticClass:"group__left"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"new__item-btn"},[e("div",{staticClass:"new__item-plus"}),e("div",{staticClass:"new__text"},[this._v("Добавить отзыв")])])}],!1,null,null,null);u.options.__file="src/admin/components/pages/admin-new.vue";e.default=u.exports}}]);
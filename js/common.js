// $(document).ready(function() {
//
// 	//Таймер обратного отсчета
// 	//Документация: http://keith-wood.name/countdown.html
// 	//<div class="countdown" date-time="2015-01-07"></div>
// 	var austDay = new Date($(".countdown").attr("date-time"));
// 	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});
//
// 	//Попап менеджер Magnific Popup
// 	//Документация: http://dimsemenov.com/plugins/magnific-popup/
// 	//<div class="image-popup-no-margins"><a href="image.jpg"><img src="image.jpg" /></a></div>
//   $('.image-popup-no-margins').each(function(){
//     $(this).magnificPopup({
//       delegate: 'a',
//       type: 'image',
//       closeOnContentClick: true,
//       closeBtnInside: false,
//       fixedContentPos: true,
//       mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
//       image: {
//         verticalFit: true
//       },
//       gallery: {
//         enabled: true
//       },
//       zoom: {
//         enabled: true,
//         duration: 300 // don't foget to change the duration also in CSS
//       }
//     });
//   });
// 	//Навигация по Landing Page
// 	//$(".top_mnu") - это верхняя панель со ссылками.
// 	//Ссылки вида <a href="#contacts">Контакты</a>
// 	$(".top_mnu").navigation();
//
// 	//Добавляет классы дочерним блокам .block для анимации
// 	//Документация: http://imakewebthings.com/jquery-waypoints/
// 	$(".block").waypoint(function(direction) {
// 		if (direction === "down") {
// 			$(".class").addClass("active");
// 		} else if (direction === "up") {
// 			$(".class").removeClass("deactive");
// 		};
// 	}, {offset: 100});
//
// 	//Плавный скролл до блока .div по клику на .scroll
// 	//Документация: https://github.com/flesler/jquery.scrollTo
// 	$("a.scroll").click(function() {
// 		$.scrollTo($(".div"), 800, {
// 			offset: -90
// 		});
// 	});
//
// 	//Каруселька
// 	//Документация: http://owlgraphic.com/owlcarousel/
// 	//Обычная карусель
//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     nav:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
//   });
// 	$(".next_button").click(function(){
// 		owl.trigger("owl.next");
// 	});
// 	$(".prev_button").click(function(){
// 		owl.trigger("owl.prev");
// 	});
// 	//Кнопка "Наверх"
// 	//Документация:
// 	//http://api.jquery.com/scrolltop/
// 	//http://api.jquery.com/animate/
// 	$("#top").click(function () {
// 		$("body, html").animate({
// 			scrollTop: 0
// 		}, 800);
// 		return false;
// 	});
//
// 	// mmenu крутой послойный слайдер http://mmenu.frebsite.nl/
//   $(function() {
//     $('#mmenu').mmenu({
//       setSelected: {
//             "hover": true
//          },
//       extensions	: [ 'effect-slide-menu', 'pageshadow' ],
//       navbar 		: {
//         title		: 'Меню'
//       },
//       navbars		: [
//         {
//           position	: 'top',
//           content		: [
//             'prev',
//             'title',
//             'close'
//           ]
//         }, {
//           position	: 'bottom',
//           content		: [
//             "<a class='fa fa-envelope' href='#/'></a>",
//             "<a class='fa fa-vk' href='#/'></a>",
//             "<a class='fa fa-youtube-square' href='#/'></a>",
//             "<a class='fa fa-facebook' href='#/'></a>",
//             "<a class='fa fa-twitter' href='#/'></a>"
//           ]
//         }
//       ]
//     });
//     /*var API = $("#mmenu").data("mmenu");
//     $('#menu-button').click(function(){
//         API.open();
//     });*/
//   });
// });
// // Скрипт обработки форм
// function getCookie(name) {
//     var matches = document.cookie.match(new RegExp(
//     "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     return matches ? decodeURIComponent(matches[1]) : undefined;
// }
// function setCookie(name, value, options) {
//   options = options || {};
//
//   var expires = options.expires;
//
//   if (typeof expires == "number" && expires) {
//     var d = new Date();
//     d.setTime(d.getTime() + expires * 1000);
//     expires = options.expires = d;
//   }
//   if (expires && expires.toUTCString) {
//     options.expires = expires.toUTCString();
//   }
//   value = encodeURIComponent(value);
//   var updatedCookie = name + "=" + value;
//   for (var propName in options) {
//     updatedCookie += "; " + propName;
//     var propValue = options[propName];
//     if (propValue !== true) {
//       updatedCookie += "=" + propValue;
//     }
//   }
//   document.cookie = updatedCookie;
// }
// $(document).ready(function() {
//     /* UTM Cookie */
//     var getLocation = function(href) {
//         var l = document.createElement("a");
//         l.href = href;
//         return l;
//     };
//     var referrer = document.referrer?(getLocation(document.referrer)):"";
//     if(!referrer || referrer.host != location.host){
//         var get_params = function () {
//             // This function is anonymous, is executed immediately and
//             // the return value is assigned to QueryString!
//             var query_string = {};
//             if(window.location.search){
//                 var query = window.location.search.substring(1);
//                 var vars = query.split("&");
//                 for (var i=0;i<vars.length;i++) {
//                     var pair = vars[i].split("=");
//                     // If first entry with this name
//                     if (typeof query_string[pair[0]] === "undefined") {
//                       query_string[pair[0]] = decodeURIComponent(pair[1]);
//                         // If second entry with this name
//                     } else if (typeof query_string[pair[0]] === "string") {
//                       var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
//                       query_string[pair[0]] = arr;
//                         // If third or later entry with this name
//                     } else {
//                       query_string[pair[0]].push(decodeURIComponent(pair[1]));
//                     }
//                 }
//             }
//             return query_string;
//         }();
//         var expires_time = new Date(new Date().getTime() + 30 * 3600 * 1000);
//         var options = {'expires': expires_time};
//         if(getCookie('uls_visit') === undefined){
//             setCookie('uls_visit', 0, options);
//         }else{
//             setCookie('uls_visit', parseInt(getCookie('uls_visit')) + 1, options);
//         }
//         setCookie('uls_start_page', location.toString(), options);
//         if(get_params.hasOwnProperty('utm_medium')){
//             setCookie('uls_utm_medium', get_params['utm_medium'], options);
//             //console.log(getCookie('uls_utm_medium'));
//         }
//         if(get_params.hasOwnProperty('utm_source')){
//             setCookie('uls_utm_source', get_params['utm_source'], options);
//             //console.log(getCookie('uls_utm_source'));
//         }
//         if(get_params.hasOwnProperty('utm_content')){
//             setCookie('uls_utm_content', get_params['utm_content'], options);
//             //console.log(getCookie('uls_utm_content'));
//         }
//         if(get_params.hasOwnProperty('utm_keyword')){
//             setCookie('uls_utm_keyword', get_params['utm_keyword'], options);
//             //console.log(getCookie('uls_utm_keyword'));
//         }
//     }
//
// 	var sending = false;
// 	$(document).on('submit', '.ajax_sender_form', function(){
// 		var self = $(this);
// 		if(!sending){
// 			if(self.data('source')){
// 				var source = self.data('source');
// 			}else{
// 				var source = '';
// 			}
// 			var form_data = new FormData(this);
// 			form_data.append('source', source);
//             form_data.append('current_page', location.toString());
//             var cookie_params = ['visit', 'start_page', 'utm_medium', 'utm_source', 'utm_content', 'utm_keyword'];
//             $.each(cookie_params, function(i, param){
//                 var value = getCookie('uls_' + param);
//                 if(value){
//                     form_data.append(param, value);
//                 }
//            });
// 			var url = 'form/form_ajax.php?form_id=' + self.data('type');
//
// 			var overlay_form_loading;
// 			$.ajax({
// 				type:"POST",
// 				data: form_data,
// 				contentType: false,
// 				processData: false,
// 				url: url,
// 				dataType: 'json',
// 				//data: self.serialize() + '&source=' + source,
// 				//data: self.serialize() + '&' + form_data,
// 				beforeSend: function() {
// 					overlay_form_loading = $(('<div id="overlay_form_loading"><i class="fa fa-refresh fa-spin"></i></div>')).insertAfter(self.find('.btn'));
// 					sending = true;
// 				},
// 				success: function(data) {
// 					if(data['success']){
// 						$('#notificationModal .modal-body').html(data['success']);
//             $('#modal-1').modal('hide');
//             $('#notificationModal').modal('show');
// 					}else if(data['error']){
// 						$.each(data['error'], function(i, v){
// 							self.find('[name="' + v + '"]').addClass('error');
// 						});
// 					}
// 					overlay_form_loading.remove();
// 					sending = false;
// 				}
// 			});
// 		}
// 		return false;
// 	});
// });
// // Конец Скрипт обработки форм
//
// // Скрипт для бокового меню
// (function () {
//     var dropdownStickyItem = document.querySelectorAll('.sticky-menu-item-dropdown');
//     for (let i = 0; i < dropdownStickyItem.length; i++) {
//         let menu = dropdownStickyItem[i].querySelector('.sticky-list-dropdown');
//         dropdownStickyItem[i].addEventListener('click', function () {
//             if (menu.classList.contains('hidden')) {
//                 menu.classList.remove('hidden');
//                 menu.classList.add('visual');
//             } else {
//                 menu.classList.remove('visual');
//                 menu.classList.add('hidden');
//             }
//         });
//     }
// })();
// // Конец Скрипт для бокового меню


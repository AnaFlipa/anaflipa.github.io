(function e(t, n, r) { function s(o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); throw new Error("Cannot find module '" + o + "'") } var f = n[o] = { exports: {} }; t[o][0].call(f.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e) }, f, f.exports, e, t, n, r) } return n[o].exports } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++)s(r[o]); return s })({
	1: [function (require, module, exports) {

	}, {}]
}, {}, [1])




$(document).ready(function () {
	$('[data-toggle="popover"]').popover();
});





$(document).ready(function () {
	$(".filter-button").click(function () {
		var value = $(this).attr('data-filter');

		if (value == "all") {
			//$('.filter').removeClass('hidden');
			$('.filter').show('1000');
		}
		else {
			//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
			//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
			$(".filter").not('.' + value).hide('3000');
			$('.filter').filter('.' + value).show('3000');
		}
	});


	if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");
	}
	$(this).addClass("active");
	var username = "anaflipasa3";
	var hostname = "gmail.com";

	$("#email-location").html(username + "@" + hostname);

	// POPUP

	//$.notify({
	// options
	icon: 'img/new.png',
		title: 'Bootstrap notify',
			message: 'Turning standard Bootstrap alerts into "notify" like notifications',
				target: '_blank'
}, {
		// settings
		element: 'body',
		position: null,
		icon_type: "image",
		allow_dismiss: true,
		newest_on_top: false,
		showProgressbar: false,
		placement: {
			from: "bottom",
			align: "right"
		},
		offset: 20,
		spacing: 10,
		z_index: 1031,
		delay: 5000,
		timer: 1000,
		url_target: '_blank',
		mouse_over: null,
		animate: {
			enter: 'animated fadeOutUp',
			exit: 'animated fadeInDown'
		},
		onShow: null,
		onShown: null,
		onClose: null,
		onClosed: null,
		icon_type: 'class',
		template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
		'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
		'</div>'
		
	});


//TICKER
	jQuery(function(){
		jQuery('#ticker').tickerme();
	});
	
	
	
	// js code for news ticker
	
	(function(e){e.fn.tickerme=function(t){var n=e.extend({},e.fn.tickerme.defaults,t);return this.each(function(){function a(){e(t).hide();e("body").prepend(r).prepend(i);var n='<div id="ticker_container">';n+='<div id="newscontent"><div id="news"></div></div>';n+='<div id="controls">';n+='<a href="#" id="pause_trigger"><svg class="icon icon-pause" viewBox="0 0 32 32"><use xlink:href="#icon-pause"></use></svg></a>';n+='<a href="#" id="play_trigger" style="display:none"><svg class="icon icon-play" viewBox="0 0 32 32"><use xlink:href="#icon-play"></use></svg></a>';n+='<a href="#" id="prev_trigger"><svg class="icon icon-prev" viewBox="0 0 32 32"><use xlink:href="#icon-prev"></use></svg></a>';n+='<a href="#" id="next_trigger"><svg class="icon icon-next" viewBox="0 0 32 32"><use xlink:href="#icon-next"></use></svg></a>';n+="</div>";n+="</div>";e(n).insertAfter(t);e(t).children().each(function(t){s[t]=e(this).html()});f()}function f(){if(o==s.length-1){o=0}else{o++}if(n.type=="fade"){e("#news").fadeOut(n.fade_speed,function(){e("#newscontent").html('<div id="news">'+s[o]+"</div>");e("#news").fadeIn(n.fade_speed)})}u=setTimeout(f,n.duration)}var t=e(this);var r='<svg display="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="224" height="32" viewBox="0 0 224 32"><defs><g id="icon-play"><path class="path1" d="M6 4l20 12-20 12z"></path></g><g id="icon-pause"><path class="path1" d="M4 4h10v24h-10zM18 4h10v24h-10z"></path></g><g id="icon-prev"><path class="path1" d="M18 5v10l10-10v22l-10-10v10l-11-11z"></path></g><g id="icon-next"><path class="path1" d="M16 27v-10l-10 10v-22l10 10v-10l11 11z"></path></g></defs></svg>';var i='<style type="text/css">#ticker_container{width:100%}#newscontent{float:left}#news{display:none}#controls{float:right;height:16px}.icon{display:inline-block;width:16px;height:16px;fill:'+n.control_colour+"}.icon:hover{fill:"+n.control_rollover+"}</style>";var s=[];var o=-1;var u;a();e("a#pause_trigger").click(function(){clearTimeout(u);e(this).hide();e("#play_trigger").show();return false});e("a#play_trigger").click(function(){f();e(this).hide();e("#pause_trigger").show();return false});e("a#prev_trigger").click(function(){if(o==0){o=s.length-1}else{o--}e("#newscontent").html('<div id="news" style="display:block">'+s[o]+"</div>");if(n.auto_stop)e("a#pause_trigger").trigger("click");return false});e("a#next_trigger").click(function(){if(o==s.length-1){o=0}else{o++}e("#newscontent").html('<div id="news" style="display:block">'+s[o]+"</div>");if(n.auto_stop)e("a#pause_trigger").trigger("click");return false})})};e.fn.tickerme.defaults={fade_speed:500,duration:3e3,auto_stop:true,type:"fade",control_colour:"#333333",control_rollover:"#666666"}})(jQuery)sAA

});





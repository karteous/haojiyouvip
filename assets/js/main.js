(function($){var $window=$(window),$body=$('body'),$header=$('#header'),$banner=$('#banner');breakpoints({wide:('1281px','1680px'),normal:('981px','1280px'),narrow:('737px','980px'),narrower:('737px','840px'),mobile:('481px','736px'),mobilep:(null,'480px')});$window.on('load',function(){window.setTimeout(function(){$body.removeClass('is-preload');},100);});$('#nav > ul').dropotron({alignment:'right'});$('<div id="navButton">'+
'<a href="#navPanel" class="toggle"></a>'+
'</div>').appendTo($body);$('<div id="navPanel">'+
'<nav>'+
$('#nav').navList()+
'</nav>'+
'</div>').appendTo($body).panel({delay:500,hideOnClick:true,hideOnSwipe:true,resetScroll:true,resetForms:true,side:'left',target:$body,visibleClass:'navPanel-visible'});if(!browser.mobile&&$header.hasClass('alt')&&$banner.length>0){$window.on('load',function(){$banner.scrollex({bottom:$header.outerHeight(),terminate:function(){$header.removeClass('alt');},enter:function(){$header.addClass('alt reveal');},leave:function(){$header.removeClass('alt');}});});}})(jQuery);function headertop_down(){var coverOffset=$('#content').offset().top;$('html,body').animate({scrollTop:coverOffset},600);}
var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?59e7ec76eade3186dc9345ec66626398";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s);})();
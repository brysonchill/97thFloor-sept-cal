$( document ).ready(function() {
	
	var d = new Date();
	
	var n = d.getDate();
	
	var m = d.getMonth();
	
	m +=1;
	
	$(".dayWrap").each(function(){
		
		$(this).addClass('available');
	
	});
	
	$( ".dayWrap" ).click(function() {
		
		var tl = new TimelineMax();
		
		tl.to(".tipBoxWrap", .15, {css: {opacity: "1", zIndex: "100"}})
		.to(".tipBox", .15, {css: {zIndex: "101", display: "block"}})
		.to(".tipBox", .50, {css: {margin: "-250px 0 0 -375px", width: "750px", height: "500px",  opacity: "1"}}, "-=.1")
		.to(".socialPopWrap", .5, {css: {opacity: "1", display: "block"}}, "-=.35")
		
		$(".close").click(function(){
			
			tl.reverse();
		
		});
		
		$(".tipBoxWrap").click(function(){
		
			tl.reverse();
		
		});
	
	});

	// Pulls data from json object and displays it in their respective locations when user clicks on the day
	$( ".dayWrap" ).click(function() {
	
		var daynum = $(this).attr("data-day");
		
		var dy = 'day'+daynum;
		
		var tips = {
			
			day1: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day1Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Did%20you%20know%20that%201%20in%2072%20women%20will%20develop%20%23ovarian%20%23cancer%20in%20their%20lifetime?&hashtags=endwomenscancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday1Img.png&description=%20Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day2: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day2Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=1%20in%207%20ovarian%20cancers%20are%20due%20to%20%23BRCA%20mutations.%20&hashtags=gynCSM&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday2Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day3: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day3Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=%23Lynparza%20(olaparib)%20is%20the%20first%20and%20only%20FDA-approved%20%23PARP%20inhibitor%20for%20patients%20with%20ovarian%20cancer.%20&hashtags=gyncancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday3Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day4: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day4Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Pap%20tests/cervical%20smear%20tests%20are%20not%20a%20screening%20test%20for%20ovarian%20cancer.%20&hashtags=endwomenscancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday4Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day5: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day5Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Almost%20half%20(44%25)%20of%20women%20with%20%23BRCA%20mutation-associated%20ovarian%20cancer%20have%20NO%20family%20history%20of%20breast%20or%20ovarian%20cancer.&hashtags=gynCSM&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday5Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day6: {
				link: '<a href="//hereditarycancerquiz.com/endometrial-cancer"></a>',
				img: '<img src="images/day6Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Up%20to%205%25%20of%20endometrial%20cancers%20are%20due%20to%20a%20hereditary%20cause,%20the%20most%20common%20of%20which%20is%20%23Lynch%20syndrome.%20&hashtags=gyncancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday6Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day7: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day7Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=There%20are%20other%20genes%20that%20increase%20the%20risk%20of%20%23ovarian%20cancer%20beyond%20%23BRCA1%20and%20%23BRCA2.%20&hashtags=endwomenscancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday7Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day8: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day8Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Women%20with%20a%20%23BRCA%20mutation%20have%20up%20to%20a%2044%25%20risk%20of%20developing%20%23ovarian%20cancer%20by%20age%2070.%20&hashtags=gynCSM&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday8Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day9: {
				link: '<a href="//hereditarycancerquiz.com/endometrial-cancer"></a>',
				img: '<img src="images/day9Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Symptoms%20of%20%23endometrial%20cancer%20include%20vaginal%20bleeding,%20spotting,%20or%20discharge%20that%20is%20not%20normal%20for%20you.&hashtags=gyncancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday9Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day10: {
				link: '<a href="//hereditarycancerquiz.com/endometrial-cancer"></a>',
				img: '<img src="images/day10Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=People%20with%20a%20parent,%20sibling,%20or%20child%20with%20a%20%23BRCA%20mutation%20have%20a%2050%25%20to%20inherit%20the%20same%20mutation.&hashtags=gynCSM&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday10Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day11: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day11Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=There%20is%20no%20proven%20early%20detection%20test%20for%20%23ovarian%20cancer.%20&hashtags=endwomenscancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday11Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day12: {
				link: '<a href="//hereditarycancerquiz.com/endometrial-cancer"></a>',
				img: '<img src="images/day12Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=The%20average%20woman%E2%80%99s%20risk%20of%20endometrial%20cancer%20is%202.7%25,%20compared%20to%2071%25%20in%20women%20with%20%23Lynch%20syndrome.&hashtags=gyncancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday12Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day13: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day13Img.png" width="100%" height="100%" style="margin-top:-124px; padding:90px">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=%23Ovarian%20cancer%20symptoms%20include%20bloating,%20fatigue,%20difficulty%20eating,%20feeling%20full%20quickly%20and%20constipation&hashtags=gynCSM&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday13Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day14: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day14Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Oral%20contraceptives%20reduce%20%23ovarian%20cancer%20risk%20by%20up%20to%2050%25.%20&hashtags=endwomenscancer &url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday14Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day15: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day15Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=%23Ovarian%20cancer%20risk%20factors%20include%20family%20history,%20hormone%20replacement,%20and%20more%20menstrual%20cycles.&hashtags=gyncancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday15Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day16: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day16Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=National%20societies%20recommend%20that%20all%20women%20with%20%23ovarian%20cancer%20receive%20genetic%20testing.&hashtags=endwomenscancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday16Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day17: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day17Img.png" width="100%" height="100%" style="margin-top: -74px; padding: 40px;">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=There%20are%203%20major%20types%20of%20%23ovarian%20cancer%3A%20epithelial,%20germ%20cell,%20and%20sex-cord%20stromal%20cell.%20&hashtags=gynCSM&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday17Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day18: {
				link: '<a href="//hereditarycancerquiz.com/endometrial-cancer"></a>',
				img: '<img src="images/day18Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Hereditary%20cancer%20genetic%20testing%20is%20covered%20by%20most%20insurance%20plans.%20&hashtags=gyncancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday18Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day19: {
				link: '<a href="//hereditarycancerquiz.com/endometrial-cancer"></a>',
				img: '<img src="images/day19Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=%23BRCA%20mutations%20can%20be%20inherited%20from%20either%20the%20mother%E2%80%99s%20or%20the%20father%E2%80%99s%20side%20of%20the%20family.&hashtags=endwomenscancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday19Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day20: {
				link: '<a href="//hereditarycancerquiz.com/endometrial-cancer"></a>',
				img: '<img src="images/day20Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Endometrial%20cancer%20risk%20factors%20include%20family%20history,%20tamoxifen,%20hormone%20replacement,%20and%20obesity.&hashtags=#gynCSM&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday20Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day21: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day21Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Early%20detection%20of%20%23ovarian%20cancer%20is%20key,%20and%20more%20research%20is%20needed%20to%20develop%20these%20screening%20tools.&hashtags=gyncancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday21Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day22: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day22Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Patients%20with%20%23BRCA%20mutation-associated%20ovarian%20cancer%20may%20respond%20better%20to%20platinum-based%20chemotherapy.%20&hashtags=gynCSM&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday22Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day23: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day23Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=A%20family%20history%20of%20ovarian%20cancer%20impacts%20men%20too.%20%23BRCA%20mutations%20increase%20risk%20for%20prostate%20cancer.%20&hashtags=endwomenscancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday23Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day24: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day24Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Only%2025%25%20of%20patients%20newly%20diagnosed%20with%20ovarian%20cancer%20know%20their%20%23BRCA%20status.&hashtags=endwomenscancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday24Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day25: {
				link: '<a href="//hereditarycancerquiz.com/endometrial-cancer"></a>',
				img: '<img src="images/day25Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Women%20with%20%23Lynch%20syndrome%20have%20a%20high%20risk%20of%20developing%20a%20second%20cancer%20such%20as%20colon%20cancer.%20&hashtags=gyncancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday25Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day26: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day26Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=This%20year,%20there%20will%20be%20more%20than%2021,000%20new%20cases%20diagnosed%20and%20about%2014,000%20deaths%20from%20ovarian%20cancer.&hashtags=gynCSM&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday26Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day27: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day27Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=69%25%20of%20women%20with%20%23BRCA-associated%20ovarian%20cancer%20are%20diagnosed%20over%20age%2050&hashtags=gyncancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday27Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day28: {
				link: '<a href="//hereditarycancerquiz.com/endometrial-cancer"></a>',
				img: '<img src="images/day28Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=1%20in%204%20patients%20with%20endometrial%20cancer%20are%20at%20risk%20for%20hereditary%20cancer.%20&hashtags=gyncancer&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday28Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day29: {
				link: '<a href="//hereditarycancerquiz.com/endometrial-cancer"></a>',
				img: '<img src="images/day29Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Take%20the%20hereditary%20cancer%20quiz%20to%20find%20out%20if%20you%E2%80%99re%20at%20risk%20for%20hereditary%20cancer%20at%20http%3A//bit.ly/QsjZqK.%20&hashtags=gynCSM&url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday29Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			},
			day30: {
				link: '<a href="//hereditarycancerquiz.com/ovarian-cancer"></a>',
				img: '<img src="images/day30Img.png" width="100%" height="100%">',
				twitter: '<a href=https://twitter.com/intent/tweet?text=Knowledge%20is%20power%20-%20talk%20to%20your%20doctor%20about%20your%20personal%20or%20family%20history%20of%20ovarian%20cancer.&hashtags=endwomenscancer &url=http://bit.ly/1gA2j9j><div alt="Twitter" title="Twitter"><i class="fa fa-twitter orange"></i></div></a>',
				pinterest: '<a href=\"#\" data-pin-do=\"buttonBookmark\" onclick=\"popUp=window.open(\'\/\/www.pinterest.com\/pin\/create\/button\/?url=http%3A%2F%2Fwww.bracnow.com%2Fgynecologic-cancer-awareness-month.com&media=http%3A%2F%2Fbracnow.com%2Fgynecologic-cancer-awareness-month%2Fimages%2Fday30Img.png&description=Gynecologic%20Cancer%20Awareness%20Month%20Fact%20Calendar\', \'popupwindow\', \'scrollbars=yes,width=800,height=400\');popUp.focus();return false\"><div alt=\"Pinterest\" title=\"Pinterest\"><i class=\"fa fa-pinterest orange\"><\/i><\/div><\/a>',
			}
		};

		$('.link').html(tips[dy].link);

		$('.tipImage').html(tips[dy].img);

		$('.twitter').html(tips[dy].twitter);

		$('.pinterest').html(tips[dy].pinterest);

		var height = $(".wrapper").height() + $("header").height();

		$(".tipBoxWrap").css("height", height);

	});	
		
});























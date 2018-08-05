(function(t){"use strict";var s=function(){this.$openBtn=t("#sidebar, #header").find("a[href*='#about']");this.$closeBtn=t("#about-btn-close");this.$blog=t("#blog");this.$about=t("#about");this.$aboutCard=t("#about-card")};s.prototype={run:function(){var t=this;t.$openBtn.click(function(s){s.preventDefault();t.play()});t.$closeBtn.click(function(s){s.preventDefault();t.playBack()})},play:function(){var t=this;t.$blog.fadeOut();t.$about.fadeIn();setTimeout(function(){t.dropAboutCard()},300)},playBack:function(){var t=this;t.liftAboutCard();setTimeout(function(){t.$blog.fadeIn()},500);setTimeout(function(){t.$about.fadeOut()},500)},dropAboutCard:function(){var s=this;var e=s.$aboutCard.innerHeight();var i=t(window).height()/2-e/2+e;if(e+30>t(window).height()){i=e}s.$aboutCard.css("top","0px").css("top","-"+e+"px").show(500,function(){s.$aboutCard.animate({top:"+="+i+"px"})})},liftAboutCard:function(){var s=this;var e=s.$aboutCard.innerHeight();var i=t(window).height()/2-e/2+e;if(e+30>t(window).height()){i=e}s.$aboutCard.animate({top:"-="+i+"px"},500,function(){s.$aboutCard.hide();s.$aboutCard.removeAttr("style")})}};t(document).ready(function(){var t=new s;t.run()})})(jQuery);(function(t){"use strict";var s=function(s){this.$form=t(s).find("#filter-form");this.$searchInput=t(s).find("input[name=date]");this.$archiveResult=t(s).find(".archive-result");this.$postsYear=t(s).find(".archive-year");this.$postsMonth=t(s).find(".archive-month");this.$postsDay=t(s).find(".archive-day");this.postsYear=s+" .archive-year";this.postsMonth=s+" .archive-month";this.postsDay=s+" .archive-day";this.messages={zero:this.$archiveResult.data("message-zero"),one:this.$archiveResult.data("message-one"),other:this.$archiveResult.data("message-other")}};s.prototype={run:function(){var t=this;t.$searchInput.keyup(function(){t.filter(t.sliceDate(t.getSearch()))});t.$form.submit(function(t){t.preventDefault()})},getSearch:function(){return this.$searchInput.val().replace(/([\/|.|-])/g,"").toLowerCase()},sliceDate:function(t){return[t.slice(0,4),t.slice(4,6),t.slice(6)]},filter:function(t){var s;if(t[0]===""){this.showAll();this.showResult(-1)}else{s=this.countPosts(t);this.hideAll();this.showResult(s);if(s>0){this.showPosts(t)}}},showResult:function(t){if(t===-1){this.$archiveResult.html("").hide()}else if(t===0){this.$archiveResult.html(this.messages.zero).show()}else if(t===1){this.$archiveResult.html(this.messages.one).show()}else{this.$archiveResult.html(this.messages.other.replace(/\{n\}/,t)).show()}},countPosts:function(s){return t(this.postsDay+"[data-date^="+s[0]+s[1]+s[2]+"]").length},showPosts:function(s){t(this.postsYear+"[data-date^="+s[0]+"]").show();t(this.postsMonth+"[data-date^="+s[0]+s[1]+"]").show();t(this.postsDay+"[data-date^="+s[0]+s[1]+s[2]+"]").show()},showAll:function(){this.$postsYear.show();this.$postsMonth.show();this.$postsDay.show()},hideAll:function(){this.$postsYear.hide();this.$postsMonth.hide();this.$postsDay.hide()}};t(document).ready(function(){if(t("#archives").length){var e=new s("#archives");e.run()}})})(jQuery);(function(t){"use strict";var s=function(s){this.$form=t(s).find("#filter-form");this.$inputSearch=t(s).find("input[name=category]");this.$archiveResult=t(s).find(".archive-result");this.$posts=t(s).find(".archive");this.$categories=t(s).find(".category-anchor");this.posts=s+" .archive";this.categories=s+" .category-anchor";this.dataCategory="category";this.dataParentCategories="parent-categories";this.messages={zero:this.$archiveResult.data("message-zero"),one:this.$archiveResult.data("message-one"),other:this.$archiveResult.data("message-other")}};s.prototype={run:function(){var t=this;t.$inputSearch.keyup(function(){t.filter(t.getSearch())});t.$form.submit(function(t){t.preventDefault()})},getSearch:function(){return this.$inputSearch.val().toLowerCase()},filter:function(t){if(t===""){this.showAll();this.showResult(-1)}else{this.hideAll();this.showPosts(t);this.showResult(this.countCategories(t))}},showResult:function(t){if(t===-1){this.$archiveResult.html("").hide()}else if(t===0){this.$archiveResult.html(this.messages.zero).show()}else if(t===1){this.$archiveResult.html(this.messages.one).show()}else{this.$archiveResult.html(this.messages.other.replace(/\{n\}/,t)).show()}},countCategories:function(s){return t(this.posts+"[data-"+this.dataCategory+"*='"+s+"']").length},showPosts:function(s){var e=this;var i;var o=e.categories+"[data-"+e.dataCategory+"*='"+s+"']";var a=e.posts+"[data-"+e.dataCategory+"*='"+s+"']";if(e.countCategories(s)>0){if(t(o+"[data-"+e.dataParentCategories+"]").length){t(o).each(function(){i=t(this).attr("data-"+e.dataParentCategories).split(",");i.forEach(function(s){var i="[data-"+e.dataCategory+"='"+s+"']";t(e.categories+i).show();t(e.posts+i).show();t(e.posts+i+" > .archive-posts > .archive-post").hide()})})}}t(o).show();t(a).show();t(a+" > .archive-posts > .archive-post").show()},showAll:function(){this.$categories.show();this.$posts.show();t(this.posts+" > .archive-posts > .archive-post").show()},hideAll:function(){this.$categories.hide();this.$posts.hide()}};t(document).ready(function(){if(t("#categories-archives").length){var e=new s("#categories-archives");e.run()}})})(jQuery);(function(t){"use strict";var s=function(s){this.$codeBlocks=t(s)};s.prototype={run:function(){var s=this;s.resize();t(window).smartresize(function(){s.resize()})},resize:function(){var s=this;s.$codeBlocks.each(function(){var s=t(this).find(".gutter");var e=t(this).find(".code");var i=e.width()-e.innerWidth();var o=t(this).outerWidth()-s.outerWidth()+i;e.css("width",o);e.children("pre").css("width",o)})}};t(document).ready(function(){t.fn.hasHorizontalScrollBar=function(){return this.get(0).scrollWidth>this.innerWidth()};var e=new s("figure.highlight");e.run()})})(jQuery);(function(t){"use strict";t(document).ready(function(){function s(){var s=true;var e=null;if(t(window).height()>480){s=false;e={width:70,height:70}}t(".fancybox").fancybox({maxWidth:900,maxHeight:800,fitToView:true,width:"50%",height:"50%",autoSize:true,arrows:s,closeClick:false,openEffect:"elastic",closeEffect:"elastic",prevEffect:"none",nextEffect:"none",padding:"0",helpers:{thumbs:e,overlay:{css:{overflow:"hidden",background:"rgba(0, 0, 0, 0.85)"}}},afterLoad:function(){setTimeout(function(){t(".fancybox-next > span, .fancybox-prev > span").css("visibility","visible")},400)}})}s();t(window).smartresize(function(){s()})})})(jQuery);(function(t){"use strict";var s=function(){this.$header=t("#header");this.headerHeight=this.$header.height();this.headerUpCSSClass="header-up";this.delta=5;this.lastScrollTop=0};s.prototype={run:function(){var s=this;var e;t(window).scroll(function(){e=true});setInterval(function(){if(e){s.animate();e=false}},250)},animate:function(){var s=t(window).scrollTop();if(Math.abs(this.lastScrollTop-s)<=this.delta){return}if(s>this.lastScrollTop&&s>this.headerHeight){this.$header.addClass(this.headerUpCSSClass)}else if(s+t(window).height()<t(document).height()){this.$header.removeClass(this.headerUpCSSClass)}this.lastScrollTop=s}};t(document).ready(function(){var t=new s;t.run()})})(jQuery);(function(t){"use strict";var s=function(){this.photosBox=".photo-box";this.$images=t(this.photosBox+" img")};s.prototype={run:function(){var s=this;s.resizeImages();t(window).smartresize(function(){s.resizeImages()})},resizeImages:function(){var s;var e;var i;var o;var a;var n;this.$images.each(function(){n=t(this);s=n.parent().parent().width();e=n.parent().parent().innerHeight();i=n.width();o=n.height();if(o<e){a=i/o;n.css({height:e,width:e*a});n.parent().css({left:"-"+(e*a/2-s/2)+"px"})}i=n.width();o=n.height();if(i<s){a=o/i;n.css({width:s,height:s*a});n.parent().css({top:"-"+(o/2-e/2)+"px"})}if(o>e){n.parent().css({top:"-"+(o/2-e/2)+"px"})}})}};t(document).ready(function(){if(t(".image-gallery").length){var e=new s;setTimeout(function(){e.run()},500)}})})(jQuery);(function(t){"use strict";var s=function(){this.$postBottomBar=t(".post-bottom-bar");this.$postFooter=t(".post-actions-wrap");this.$header=t("#header");this.delta=1;this.lastScrollTop=0};s.prototype={run:function(){var s=this;var e;s.swipePostBottomBar();t(window).scroll(function(){e=true});setInterval(function(){if(e){s.swipePostBottomBar();e=false}},250)},swipePostBottomBar:function(){var s=t(window).scrollTop();var e=this.$postFooter.offset().top;if(this.lastScrollTop>s&&(e+this.$postFooter.height()>s+t(window).height()||e<s+this.$header.height())){this.$postBottomBar.slideDown()}else{this.$postBottomBar.slideUp()}this.lastScrollTop=s}};t(document).ready(function(){if(t(".post-bottom-bar").length){var e=new s;e.run()}})})(jQuery);(function(t){"use strict";var s=function(){this.$shareOptionsBar=t("#share-options-bar");this.$openBtn=t(".btn-open-shareoptions");this.$closeBtn=t("#share-options-mask")};s.prototype={run:function(){var t=this;t.$openBtn.click(function(){if(!t.$shareOptionsBar.hasClass("opened")){t.openShareOptions();t.$closeBtn.show()}});t.$closeBtn.click(function(){if(t.$shareOptionsBar.hasClass("opened")){t.closeShareOptions();t.$closeBtn.hide()}})},openShareOptions:function(){var t=this;if(!t.$shareOptionsBar.hasClass("opened")&&!this.$shareOptionsBar.hasClass("processing")){t.$shareOptionsBar.addClass("processing opened");setTimeout(function(){t.$shareOptionsBar.removeClass("processing")},250)}},closeShareOptions:function(){var t=this;if(t.$shareOptionsBar.hasClass("opened")&&!this.$shareOptionsBar.hasClass("processing")){t.$shareOptionsBar.addClass("processing").removeClass("opened");setTimeout(function(){t.$shareOptionsBar.removeClass("processing")},250)}}};t(document).ready(function(){var t=new s;t.run()})})(jQuery);(function(t){"use strict";var s=function(){this.$sidebar=t("#sidebar");this.$openBtn=t("#btn-open-sidebar");this.$closeBtn=t("#header, #main, .post-header-cover");this.$blog=t(".post-bottom-bar, #header, #main, .post-header-cover");this.mediumScreenWidth=768};s.prototype={run:function(){var s=this;s.$openBtn.click(function(){if(!s.$sidebar.hasClass("pushed")){s.openSidebar()}});s.$closeBtn.click(function(){if(s.$sidebar.hasClass("pushed")){s.closeSidebar()}});t(window).resize(function(){if(t(window).width()>s.mediumScreenWidth){s.resetSidebarPosition();s.resetBlogPosition()}else{s.closeSidebar()}})},openSidebar:function(){this.swipeBlogToRight();this.swipeSidebarToRight()},closeSidebar:function(){this.swipeSidebarToLeft();this.swipeBlogToLeft()},resetSidebarPosition:function(){this.$sidebar.removeClass("pushed")},resetBlogPosition:function(){this.$blog.removeClass("pushed")},swipeSidebarToRight:function(){var t=this;if(!t.$sidebar.hasClass("pushed")&&!this.$sidebar.hasClass("processing")){t.$sidebar.addClass("processing pushed");setTimeout(function(){t.$sidebar.removeClass("processing")},250)}},swipeSidebarToLeft:function(){var t=this;if(t.$sidebar.hasClass("pushed")&&!this.$sidebar.hasClass("processing")){t.$sidebar.addClass("processing").removeClass("pushed processing")}},swipeBlogToRight:function(){var t=this;if(!t.$blog.hasClass("pushed")&&!this.$blog.hasClass("processing")){t.$blog.addClass("processing pushed");setTimeout(function(){t.$blog.removeClass("processing")},250)}},swipeBlogToLeft:function(){var t=this;if(t.$blog.hasClass("pushed")&&!this.$blog.hasClass("processing")){t.$blog.addClass("processing").removeClass("pushed");setTimeout(function(){t.$blog.removeClass("processing")},250)}}};t(document).ready(function(){var t=new s;t.run()})})(jQuery);(function(t,s){var e=function(t,s,e){var i;return function o(){var o=this;var a=arguments;function n(){if(!e){t.apply(o,a)}i=null}if(i){clearTimeout(i)}else if(e){t.apply(o,a)}i=setTimeout(n,s||100)}};jQuery.fn[s]=function(t){return t?this.bind("resize",e(t)):this.trigger(s)}})(jQuery,"smartresize");(function(t){"use strict";var s=function(s){this.$tabbedCodeBlocs=t(s)};s.prototype={run:function(){var s=this;s.$tabbedCodeBlocs.find(".tab").click(function(){var s=t(this).parent().parent().parent();var e=s.find(".tabs-content").children("pre, .highlight");t(this).siblings().removeClass("active");t(this).addClass("active");e.hide();e.eq(t(this).index()).show()})}};t(document).ready(function(){var t=new s(".codeblock--tabbed");t.run()})})(jQuery);(function(t){"use strict";var s=function(s){this.$form=t(s).find("#filter-form");this.$inputSearch=t(s+" #filter-form input[name=tag]");this.$archiveResult=t(s).find(".archive-result");this.$tags=t(s).find(".tag");this.$posts=t(s).find(".archive");this.tags=s+" .tag";this.posts=s+" .archive";this.dataTag="tag";this.messages={zero:this.$archiveResult.data("message-zero"),one:this.$archiveResult.data("message-one"),other:this.$archiveResult.data("message-other")}};s.prototype={run:function(){var t=this;t.$inputSearch.keyup(function(){t.filter(t.getSearch())});t.$form.submit(function(t){t.preventDefault()})},getSearch:function(){return this.$inputSearch.val().toLowerCase()},filter:function(t){if(t===""){this.showAll();this.showResult(-1)}else{this.hideAll();this.showPosts(t);this.showResult(this.countTags(t))}},showResult:function(t){if(t===-1){this.$archiveResult.html("").hide()}else if(t===0){this.$archiveResult.html(this.messages.zero).show()}else if(t===1){this.$archiveResult.html(this.messages.one).show()}else{this.$archiveResult.html(this.messages.other.replace(/\{n\}/,t)).show()}},countTags:function(s){return t(this.posts+"[data-"+this.dataTag+"*='"+s+"']").length},showPosts:function(s){t(this.tags+"[data-"+this.dataTag+"*='"+s+"']").show();t(this.posts+"[data-"+this.dataTag+"*='"+s+"']").show()},showAll:function(){this.$tags.show();this.$posts.show()},hideAll:function(){this.$tags.hide();this.$posts.hide()}};t(document).ready(function(){if(t("#tags-archives").length){var e=new s("#tags-archives");e.run()}})})(jQuery);
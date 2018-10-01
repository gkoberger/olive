/*
* $ lightbox_me
* By: Buck Wilson
* Version : 2.3
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
(function(e){e.fn.lightbox_me=function(t){return this.each(function(){function f(){var t=i[0].style;n.destroyOnClose?i.add(r).remove():i.add(r).hide(),n.parentLightbox&&n.parentLightbox.fadeIn(200),s.remove(),i.undelegate(n.closeSelector,"click"),e(window).unbind("reposition",c),e(window).unbind("reposition",h),e(window).unbind("scroll",h),e(window).unbind("keyup.lightbox_me"),o&&t.removeExpression("top"),n.onClose()}function l(e){(e.keyCode==27||e.DOM_VK_ESCAPE==27&&e.which==0)&&n.closeEsc&&f()}function c(){e(window).height()<e(document).height()?(r.css({height:e(document).height()+"px"}),s.css({height:e(document).height()+"px"})):(r.css({height:"100%"}),o&&(e("html,body").css("height","100%"),s.css("height","100%")))}function h(){var t=i[0].style;i.css({left:"50%",marginLeft:i.outerWidth()/2*-1,zIndex:n.zIndex+3});if(i.height()+80>=e(window).height()&&(i.css("position")!="absolute"||o)){var r=e(document).scrollTop()+40;i.css({position:"absolute",top:r+"px",marginTop:0}),o&&t.removeExpression("top")}else if(i.height()+80<e(window).height())if(o){t.position="absolute";if(n.centered)t.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),t.marginTop=0;else{var s=n.modalCSS&&n.modalCSS.top?parseInt(n.modalCSS.top):0;t.setExpression("top","((blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+s+') + "px"')}}else n.centered?i.css({position:"fixed",top:"50%",marginTop:i.outerHeight()/2*-1}):i.css({position:"fixed"}).css(n.modalCSS)}var n=e.extend({},e.fn.lightbox_me.defaults,t),r=e(),i=e(this),s=e('<iframe id="foo" style="z-index: '+(n.zIndex+1)+';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>'),o=e.browser.msie&&e.browser.version<7;if(n.showOverlay){var u=e(".js_lb_overlay:visible");u.length>0?r=e('<div class="lb_overlay_clear js_lb_overlay"/>'):r=e('<div class="'+n.classPrefix+'_overlay js_lb_overlay"/>')}if(o){var a=/^https/i.test(window.location.href||"")?"javascript:false":"about:blank";s.attr("src",a),e("body").append(s)}e("body").append(i.hide()).append(r),n.showOverlay&&(c(),r.css({position:"absolute",width:"100%",top:0,left:0,right:0,bottom:0,zIndex:n.zIndex+2,display:"none"}),r.hasClass("lb_overlay_clear")||r.css(n.overlayCSS)),n.showOverlay?r.fadeIn(n.overlaySpeed,function(){h(),i[n.appearEffect](n.lightboxSpeed,function(){c(),h(),n.onLoad()})}):(h(),i[n.appearEffect](n.lightboxSpeed,function(){n.onLoad()})),n.parentLightbox&&n.parentLightbox.fadeOut(200),e(window).resize(c).resize(h).scroll(h),e(window).bind("keyup.lightbox_me",l),n.closeClick&&r.click(function(e){f(),e.preventDefault}),i.delegate(n.closeSelector,"click",function(e){f(),e.preventDefault()}),i.bind("close",f),i.bind("reposition",h)})},e.fn.lightbox_me.defaults={appearEffect:"fadeIn",appearEase:"",overlaySpeed:250,lightboxSpeed:300,closeSelector:".close",closeClick:!0,closeEsc:!0,destroyOnClose:!1,showOverlay:!0,parentLightbox:!1,onLoad:function(){},onClose:function(){},classPrefix:"lb",zIndex:999,centered:!1,modalCSS:{top:"40px"},overlayCSS:{background:"black",opacity:.3}}})(jQuery);
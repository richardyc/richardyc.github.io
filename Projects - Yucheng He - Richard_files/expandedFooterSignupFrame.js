!function(){function e(){"undefined"==typeof jQuery||"undefined"==typeof Prototype?setTimeout(e,50):(jQuery.ajax({url:"https://"+assetsBase+"/javascript/site/published/placeholder_labels.js",dataType:"script"}),jQuery.ajax({url:"https://"+productionBase+"/weebly/libraries/weebly_ensure_account.js",dataType:"script",success:n,fail:e}))}function n(){var e=jQuery("#weebly-name");if("undefined"==typeof Weebly||!Weebly.login||!jQuery.fn.placeholder_labels)return setTimeout(n,50);jQuery("#weebly-footer-signup input[placeholder]").placeholder_labels(),window.DISABLE_SIGNUP_CAPTCHA=!0;var i=new Weebly.login({signup_form:"weebly-footer-signup",require_tos_check:!1,suggest_email:!0,submit_form_onSuccess:!0,signup_name_field:"weebly-name",email_is_username:!0,signup_only:!0,signup_error_handler:function(e,n){var r;i.params.hide_signup_error(),r=jQuery(void 0==n?"#weebly-footer-signup #signup-button:visible":n),void 0!=n&&r.addClass("error"),r.next(".error-text").html(e)},hide_signup_error:function(){jQuery("#weebly-footer-signup .error-text").html("").prev("input").removeClass("error")},showSignup:function(){i.params.hide_signup_error(),e.focus()},hideSignup:function(){i.params.hide_signup_error()},onLoadingStart:function(){},onLoadingStop:function(){},onLoginInstead:function(){i.params.signup_error_handler("This email address has already been used.",jQuery("#weebly-email"))},onSignupSuccess:function(){"function"==typeof window.ga&&window.ga("send","pageview",{page:"/signup?source=expandedFooterSignupFrame",title:"Signup"}),window.top.location.href="/weebly/userHome.php"},urlBase:"https://"+productionBase})}_wAMD={define:function(){}},window.waitForDependencies=e}(),_wAMD.define("site/published/expandedFooterSignupFrame",function(){}),_wAMD.define("site/expandedFooterSignupFrame",function(){});
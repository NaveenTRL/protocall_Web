var LoginTemplate = {
    login: {
        staticLoginTemplate: function () {
            var html = '<div id="id_loginfadeinout" class="ctrl-blk" style="margin: auto;"><div class="login-logo" style=""><img src="images/Logo.png" alt=""  style="margin-top: -40px;height:100%;"></div><div class="ctrl-login-box"><div class="login-type-box1"><div class="mylistbox mysnap" data-type="superadmin" style="background: #b1babb;">SUPER ADMIN</div><div id="rootadmin" class="mylistbox mysnap" data-type="admin" style="background: rgb(243, 79, 78);" >ADMIN</div><div class="mylistbox mysnap" data-type="representatives" style="background: #b1babb;">REPRESENTATIVES</div></div><div class="login-type-box2" style="position:absolute;"><div class=\"o-signup-reset p-absolute\"> <div class=\"o-signup-icon sprite-im login-icon p-relative \"></div></div><div class="login-head">LOGIN</div><div class="login-error" style="display:none;"></div><div  id = "signUpSuccess" class="signup-success"></div><form method="post" onsubmit = "return loginmask();"><div class="box"> <div class="userbox"><select name="usertype" id="usertype"> <optgroup label="Carriers"> <option value="559c0339-22b3-460d-9893-a4d7e1413055">Acuity</option><option value="a17bacd5-83a3-49f4-854e-4711fc3386e9">Westfield Group</option><option value="dfcf82bf-2888-40cf-a4f3-673e7890f75c">Grange Insurance</option><option value="ebfb6ff9-6383-4233-b7a1-b5e4fecd0abb">Safeco Insurance</option><option value="ee47194f-ef31-4c0c-be3c-27698cfea562">Central Insurance Companies</option> <option value="5587210c-3fb9-4060-96d0-e92a4badf67d">Testing</option><option value="4fa9379c-ee79-4941-9b40-fe5772be3aa0">ProtoCALL</option><option value="0eef1316-fb82-4de7-80eb-1ae03fb2b077">Auto Owners Insurance</option><option value="ee47194f-ef31-4c0c-be3c-27698cfea562">Central Insurance Companies</option></optgroup>  <optgroup label="Agency"> <option value="49c03e36-f3f1-4132-8115-2f74c8a7bae3" selected="">Brooker Insurance Agency</option><option value="3b75ddc4-eb7c-497f-ad37-90ddb5883669">Barberry Agency</option><option value="3af7a193-0bc7-4670-bb0a-8feebe065bd0">Crandler Insurance Agency</option><option value="be0eded1-306c-4d9f-a66c-1b239482cb29">Hertvik Insurance Group</option><option value="889a44bf-d7cd-4529-81dd-99c63822ae33">Trimble Insurance Agency</option><option value="5be87034-f249-43ba-95b9-67170a1e322a">Williamson Insurance Service</option></optgroup></select></div> <div class=\"c-firstname p-relative border-all\"> <div class=\"firstname-icon sprite-im left email-icon-small p-relative\"></div>'
                    + '<input type="text" name="email" value="" placeholder="Email" id="email" style=" width: 88%;"> <div id=\"id-emailid-infobox\" class=\"c-info-icon sprite-im left notify-icon p-absolute snap\" data-type=\"dt-emailid-infobox\" style="display:none;"><span class=\"right\">This will be your user name</span></div></div> <div class="userbox" style="display:none;"><input type="text" name="email" value="" placeholder="Email" id="email" ></div>'
                    + '<div class=\"c-firstname p-relative border-all\"> <div class=\"firstname-icon sprite-im left resetpassword-icon-small p-relative\"></div><input type="password" name="password" value="" placeholder="Password" id="password" style=" width: 75%;"> <div id=\"id-emailpassword-infobox\" class=\"c-info-icon sprite-im left notify-icon p-absolute snap\" data-type=\"dt-password-infobox\"><span>&nbsp;Min 10 characters: max 128 characters <br>&nbsp; 1 digit <br>&nbsp;&nbsp;need 1 uppercase <br>&nbsp;&nbsp;need 1 lower case</span></div></div>'
                    + '<div class="passbox" style="display:none;"><input type="password" name="password" value="" placeholder="Password" id="password" style="  width: 82%;"></div>'
                    + '<div class="login-error"></div><div class="logbutton snap" data-type ="login-yes" ><input type="submit" name="login" value="LOGIN" class="loginbutton" style=""/></div> <div class="resetpassword-text p-relative opensans-regular left f-color-green f-sz-16 t-center snap" data-type="dtresetpassword"  style="display:none;">Reset Password ?</div> <div class="c-signup-text p-relative opensans-regular f-color-green right f-sz-16 t-center snap" data-type="dt-forgetPassword" style="margin-top:31px;display:block;">Forgot Password ?</div></form></div></div></div></div>';
            return html;
        },
        superloginContent: function () {
            var html = '<div class="box" style="display:none;padding:0px;">   <div class=\"c-firstname p-relative border-all\"> <div class=\"firstname-icon sprite-im left email-icon-small p-relative\"></div>'
                    + '<input type="text" name="email" value="" placeholder="Email" id="email" style=" width: 88%;"> <div id=\"id-emailid-infobox\" class=\"c-info-icon sprite-im left notify-icon p-absolute snap\" data-type=\"dt-emailid-infobox\" style="display:none;"><span class=\"right\">This will be your user name</span></div></div><div class="userbox" style="display:none;"><input type="text" name="email" value="" placeholder="Email" id="email" ></div>'
                    + '<div class=\"c-firstname p-relative border-all\"> <div class=\"firstname-icon sprite-im left resetpassword-icon-small p-relative\"></div><input type="password" name="password" value="" placeholder="Password" id="password" style=" width: 75%;"> <div id=\"id-emailpassword-infobox\" class=\"c-info-icon sprite-im left notify-icon p-absolute snap\" data-type=\"dt-password-infobox\"><span>&nbsp;Min 10 characters: max 128 characters <br>&nbsp; 1 digit <br>&nbsp;&nbsp;need 1 uppercase <br>&nbsp;&nbsp;need 1 lower case</span></div></div>'
                    + '<div class="passbox" style="display:none;"><input type="password" name="password" value="" placeholder="Password" id="password" style="  width: 82%;"></div>'
                    + '<div class="login-error"></div><div class="logbutton snap" data-type="login-yes"> <input type="submit" name="login" value="LOGIN" class="loginbutton"> </div><div class="resetpassword-text p-relative opensans-regular left f-color-green f-sz-16 t-center snap" data-type="dtresetpassword"   style="display:none;"> Reset Password ? </div><div class="c-signup-text p-relative opensans-regular f-color-green right f-sz-16 t-center snap" data-type="dt-forgetPassword" style="margin-top:31px;display:block;">Forgot Password ?</div></div>';
            return html;
        },
        agencyloginContent: function () {
            var html = '<div class="box" style="display:none;padding:0px;"><div class="userbox">'
                    + '<div name="usertype" id="id-usertype" data-carrierid="49c03e36-f3f1-4132-8115-2f74c8a7bae3"  data-logintype="Agency" style="padding:12px;">Brooker Insurance Agency</div>'
                    + '</div><div style="position:absolute;top: 100px;right: 90px;" class="sprite-im drop-down-icon submenu-drop-icon" id="id-drop-down">&nbsp;</div>'
                    + '<div class=\"c-firstname p-relative border-all\"> <div class=\"firstname-icon sprite-im left email-icon-small p-relative\"></div>'
                    + '<input type="text" name="email" value="" placeholder="Email" id="email" style=" width: 88%;"> <div id=\"id-emailid-infobox\" class=\"c-info-icon sprite-im left notify-icon p-absolute snap\" data-type=\"dt-emailid-infobox\" style="display:none;"><span class=\"right\">This will be your user name</span></div></div>'
                    + '<div class="userbox" style="display:none;"><input type="text" name="email" value="" placeholder="Email" id="email" ></div>'
                    + '<div class=\"c-firstname p-relative border-all\"> <div class=\"firstname-icon sprite-im left resetpassword-icon-small p-relative\"></div><input type="password" name="password" value="" placeholder="Password" id="password" style=" width: 75%;"> <div id=\"id-emailpassword-infobox\" class=\"c-info-icon sprite-im left notify-icon p-absolute snap\" data-type=\"dt-password-infobox\"><span>&nbsp;Min 10 characters: max 128 characters <br>&nbsp; 1 digit <br>&nbsp;&nbsp;need 1 uppercase <br>&nbsp;&nbsp;need 1 lower case</span></div></div>'
                    + '<div class="passbox" style="display:none;"><input type="password" name="password" value="" placeholder="Password" id="password" style="  width: 75%;"></div>'
                    + '<div class="login-error"></div><div class="logbutton snap" data-type="login-yes"><input type="submit" name="login" value="LOGIN" class="loginbutton"></div> <div class="resetpassword-text p-relative opensans-regular left f-color-green f-sz-16 t-center snap" data-type="dtresetpassword"   style="display:none;">Reset Password ?</div><div class="c-signup-text p-relative opensans-regular f-color-green right f-sz-16 t-center snap" data-type="dt-forgetPassword" style="margin-top:31px;display:block;">Forgot Password ?</div></div>';
            return html;
        },
        carrierloginContent: function () {
            var html = '<div class="box" style="display:none;padding:0px;"><div class="userbox">'
                    + '<div name="usertype" id="id-usertype" data-carrierid="49c03e36-f3f1-4132-8115-2f74c8a7bae3"  data-logintype="Agency" style="padding:12px;">Brooker Insurance Agency</div>'
                    + '</div><div style="position:absolute;top: 100px;right: 90px;" class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div> '
                    + '<div class=\"c-firstname p-relative border-all\"> <div class=\"firstname-icon sprite-im left email-icon-small p-relative\"></div>'
                    + '<input type="text" name="email" value="" placeholder="Email" id="email" style=" width: 88%;"> <div id=\"id-emailid-infobox\" class=\"c-info-icon sprite-im left notify-icon p-absolute snap\" data-type=\"dt-emailid-infobox\" style="display:none;"><span class=\"right\">This will be your user name</span></div></div>'
                    + '<div class="userbox" style="display:none;"><input type="text" name="email" value="" placeholder="Email" id="email" ></div>'
                    + '<div class=\"c-firstname p-relative border-all\"> <div class=\"firstname-icon sprite-im left resetpassword-icon-small p-relative\"></div><input type="password" name="password" value="" placeholder="Password" id="password" style=" width: 75%;"> <div id=\"id-emailpassword-infobox\" class=\"c-info-icon sprite-im left notify-icon p-absolute snap\" data-type=\"dt-password-infobox\"><span>&nbsp;Min 10 characters: max 128 characters <br>&nbsp; 1 digit <br>&nbsp;&nbsp;need 1 uppercase <br>&nbsp;&nbsp;need 1 lower case</span></div></div>'
                    + '<div class="passbox" style="display:none;"><input type="password" name="password" value="" placeholder="Password" id="password" style="  width: 75%;"></div>'
                    + '<div class="login-error"></div><div class="logbutton snap" data-type="login-yes"><input type="submit" name="login" value="LOGIN" class="loginbutton"></div> <div class="resetpassword-text p-relative opensans-regular left f-color-green f-sz-16 t-center snap" data-type="dtresetpassword"   style="display:none;">Reset Password ?</div><div class="c-signup-text p-relative opensans-regular f-color-green right f-sz-16 t-center snap" data-type="dt-forgetPassword" style="margin-top:31px;display:block;">Forgot Password ?</div></div>';
            return html;
        },
        staticSignUpTemplate: function () {

            var html = ' <div id="page" class="c_signup page" style="opacity:1;display:none;"> <div class="m-width"> <div class="root-logo-content p-absolute"> <img src="images/Logo.png" alt="" class="pro-logo"  /> </div> <div class="signup-root-content p-relative"> <div class="signup-parent-content p-relative" style="height: 500px !important;"> <div class="o-signup p-absolute"> <div class="o-signup-icon sprite-im signup-icon  p-relative "></div></div> <div class="signup-text p-relative opensans-regular f-color-red f-sz-20 t-center" style="  margin-bottom: 96px;">SIGN UP</div><div class="signup-error" style="margin-top:42px;margin-bottom:-34px;"></div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left prof-icon-small p-relative"></div> <input id="firstNameSignup" type="text" class="firstname-textbox left p-relative" placeholder="First Name"> </div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left prof-icon-small p-relative"></div> <input id="lastNameSignup" type="text" class="firstname-textbox left p-relative" placeholder="Last Name"> </div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left email-icon-small p-relative"></div> <input id="emailIdSignup" type="text" class="firstname-textbox left p-relative" placeholder="Email ID" > <div id="id-emailid-infobox" class="c-info-icon sprite-im left notify-icon p-absolute snap" data-type="dt-emailid-infobox" ><span class="right">This will be your user name</span></div> </div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left resetpassword-icon-small p-relative"></div> <input id="passwordSignUp" type="password" class="firstname-textbox left p-relative" placeholder="Password"> <div id="id-emailpassword-infobox" class="c-info-icon sprite-im left notify-icon p-absolute snap" data-type="dt-password-infobox"><span>&nbsp;Min 10 characters: max 128 characters <br/> &nbsp; 1 digit <br/>&nbsp;&nbsp;need 1 uppercase <br/>&nbsp;&nbsp;need 1 lower case</span></div> </div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left resetpassword-icon-small p-relative"></div> <input id="reTypePasswordSignUp" type="password" class="firstname-textbox left p-relative" placeholder="Re-type Password"> </div> <div class="completed-button snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="completeSignUp"> COMPLETE SIGN UP</div> <div class="login-text p-relative opensans-regular f-color-green f-sz-16 t-center snap" data-type="login">Login ?</div> </div> </div> </div> </div>';
            return html;
        },
        staticResetPasswordTemplate: function () {
            var html = ' <div id="page" class="c_resetpassword page" style="opacity:1;display:none;"> <div class="m-width"> <div class="root-logo-content p-absolute"> <img src="images/Logo.png" alt="" class="pro-logo" /> </div> <div class="signup-root-content p-relative"> <div class="signup-parent-content p-relative"> <div class="o-signup-reset p-absolute"> <div class="o-signup-icon sprite-im resetpassword-icon p-relative "></div></div> <div class="signup-text p-relative opensans-regular f-color-red f-sz-20 t-center" style="  margin-bottom: 55px;">RESET PASSWORD</div>'
                    + '<div class="c-firstname p-relative border-all"> <input id="id-reset-old-password" type="password" class="firstname-textbox left p-relative" placeholder="Enter Old Password" style="width:100%;"> </div><div class="c-firstname p-relative border-all" > <div class="firstname-icon sprite-im left resetpassword-icon-small p-relative"></div> '
                    + '<input id="id-reset-newpassword" type="password" class="firstname-textbox left p-relative" placeholder="New Password"> <div id="id-emailpassword-infobox" class="c-info-icon sprite-im left notify-icon p-absolute snap" data-type="dt-password-infobox"><span>&nbsp;Min 10 characters: max 128 characters <br/> &nbsp; 1 digit <br/>&nbsp;&nbsp;need 1 uppercase <br/>&nbsp;&nbsp;need 1 lower case</span></div> </div> <div class="c-firstname p-relative border-all"> <div class="firstname-icon sprite-im left resetpassword-icon-small p-relative"></div> <input id="id-reset-retype-password" type="password" class="firstname-textbox left p-relative" placeholder="Re-type Password"> </div> <div class="completed-button snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="dtoverlayresetpassword"> RESET PASSWORD</div> <div class="resetpassword-text p-relative opensans-regular left f-color-green f-sz-16 t-center snap" data-type="login"> Login ?</div> <div class=\"c-signup-text p-relative opensans-regular f-color-green right f-sz-16 t-center snap\" data-type=\"signup\" style=\"margin-top:15px;display:none;\">Sign Up ?</div></div> </div> </div> </div>';
            return html;
        }
    }
};

$(document).on("click", ".mysnap", function (e) {
    var $el = $(e.currentTarget);
    var type = $el.data("type") ? $el.data("type") : null;
    $(".mysnap").css("background", "lightgrey");
    $(this).css("background", "#f34f4e");
    if (type == 'superadmin') {
        var loginContent = LoginTemplate.login.superloginContent();
        localStorage.LoginType = "SuperAdmin";
    }
    if (type == 'admin') {
        var loginContent = LoginTemplate.login.agencyloginContent();
        localStorage.LoginType = "Admin";
    }
    if (type == 'representatives') {
        var loginContent = LoginTemplate.login.carrierloginContent();
        localStorage.LoginType = "Representatives";
    }
    $(".box").empty();
    $(".box").append($(loginContent));
    $(".box").fadeIn("slow");
});
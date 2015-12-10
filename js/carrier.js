var CarrierdynamicTemplate = {
    carrier: {
        CarrierDynamicHeaderTemplate: function () {
            var Header = '<div class="m-width"> <div class="ctrl-blk"> <header class="w-pad"> <div class="logo-info-blk clr-fl p-relative"> <div class="lf-block left clr-fl header-left-panel"> <div class="leftblk-spacing"> <div style="width:100%;"> <div class="logo-container left"> <div class="logo-holder"> <img src="images/Logo.png" alt="" class="logo"/> </div></div><div class="left search-blk"> <form name="globalSearch" method="GET" action="#search" class="" onsubmit="event.preventDefault();"> <div style="width:100%;"> <div class="searchbox-border"> <input class="search-ip opensans-regular" type="search" name="" placeholder="Search"> </div></div></form> </div><div class="clear"> </div></div></div></div><div class="rg-block left p-relative"> <a href="/profile" id="profile" class="logged-user-info clr-fl snap" data-type="profile-link"> <div id="" class="left user-pic-box"> <img src="' + sessionStorage.profilePic + '" alt="Profile pic" class="setProfilePic"> </div><div class="left user-info"> <div class="opensans-regular text-ellipsis"> <span> Hi, </span> <span class="t-caps">' + sessionStorage.agencyName + ' </span> </div></div><div class="left sprite-im drop-down-icon user-drop-icon"> &nbsp; </div><div class="clear"> </div></a> </div></div></header> <div class="m-block p-relative"> <div class="clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="mb-menu bg-color-green clr-fl t-center t-upper"> <a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Home </span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w selected-tab" data-type="page" data-page="carriers"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Carriers </span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Customers </span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> My Reps </span> </div></a> </div><div class="mb-submenu"><div class="mb-submenu-in p-relative"><div class="bcrum-lb-submenu clr-fl inline-block v-align-mid"><a href="#" class="carrier-headerbox snap left f-sz-16 ptsans-light carriers p-relative f-color-green" data-type="page" data-submenu="carriers"><div class="">'
                    + '<div class="sprite-im carriers-icon inline-block v-align-mid mr-space-10 ">&nbsp;</div>'
                    + '<span class="sub-menu-text inline-block v-align-mid t-upper"> carriers</span><span id="id-carrierpage-headertext"></span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="carriers-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:53%;"><div class="tab-rb-submenu-in-block p-relative"><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortbycarrier"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="agency-info p-relative clr-fl bg-color-dblue"> <a class="agency-details clr-fl snap" data-type="agency-link"> <div id="" class="left agency-pic-box p-relative"> <img src="' + sessionStorage.agencyLogo + '" alt="agency pic" class="setAgencyPic"> <div class="edit-cover-pic p-absolute anim-opacity"> &nbsp; </div><div class="edit-agency-pic p-absolute anim bg-color-red f-color-w snap" data-type="editAgencyPic"> <div class="p-relative t-center"> <div class="sprite-im mobile-icon inline-block v-align-mid"> &nbsp; </div><div class="inline-block f-sz-12 v-align-mid opensans-regular "> Edit </div></div></div></div><div class="left agency-name-details t-left anim"> <div class="opensans-regular text-ellipsis f-italic f-sz-17 agency-name t-caps"> ' + sessionStorage.agencyName + ' </div><div class="opensans-regular text-ellipsis f-italic agency-email"> ' + sessionStorage.agencyEmail + ' </div></div></a> </div></div></div></div>';

            return Header;
        },
        loadcarriercontent: function (data, page) {

            if (sessionStorage.loginType == 'SuperAdmin') {
                var resultCarrier = HOMEPAGERESPONSE.SUPERADMINCARRIERDETAILS;
                RESPONSE.customers_data[0] = HOMEPAGERESPONSE.SUPERADMINCUSTOMERS;
                RESPONSE.users[0] = resultCarrier;

                var template = '';
                for (var rc = 0; rc < resultCarrier.length; rc++) {
                    var c = resultCarrier[rc];
                    if (c.emailId == undefined) {
                        cEmail = ' ';
                        console.log(cEmail);
                    } else {
                        cEmail = c.emailId.email;
                        console.log(cEmail);
                    }
                    if (c.carrierLogo == undefined)
                    {
                        profilePicture = "https://proto-call-test.appspot.com/file/AMIfv95gsNeXXhLvQYjWfzFNDL7J7AQEbMbR2o21zlAe-4CvYI8xrZurkzK4NBR1nRbmmjbpTl_ZdAUMZs8LJgRw7rx9LdYj2km00q-HF9Nl_rEgqtEN9NZP0nYX2DB0EGwyuFQNKIsPnquZMD-uvgnIVU02EJiKwpLBzuGuqNXmtLtyTDGLYwBMtdJTmKLkawOaeFmWrLw_";

                    } else {
                        var profilePath = c.carrierLogo;
                        profilePicture = "https://2-dot-proto-call-test.appspot.com/file/" + profilePath;
                    }

                    template += CarrierdynamicTemplate.carrier.CarrierDynamicList(c);
                }
                var header = HeaderTemplate.Menu.DynamicHeaderTemplate();

                var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div>'
                        + '<div class="div-reloadpage">'
                        + '<div class="div-loadbutton"><span class="spinner-loadmore"></span><div class="loadmore-txt">Load More</div></div>'
                        + '<div class="div-gototop-button">Go to top</div></div></div>';
                var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();

                $("#page").empty();
                totalHtml = header + content + footer;
                $("#page").append(totalHtml);
                $('.setProfilePic').fillBox();
                protocall.displaySpinner(false);

                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
                protocall.events.GlobalContainerScrollevent();
                if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                    $(".edit-cover-pic").css("display", "none");
                    $(".edit-agency-pic").css("display", "none");
                }
            }


            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {

                if (localStorage.LoginType == 'Admin') {
                    if (localStorage.getItem("AGENCYCARRIERTABDATA") == undefined) {
                        RESPONSE.AGENCYCARRIERTABDATA[0] = data;
                    } else {
                        data = RESPONSE.AGENCYCARRIERTABDATA[0];
                    }

                    if (data.resultMap != null && data.resultMap != "") {
                        var resultCarrier = data.resultMap.carrierTab;
                        RESPONSE.customers_data[0] = data.resultMap.userTab;
                        RESPONSE.users[0] = resultCarrier;
                        var template = '';
                        var loopcount = 1;
                        for (var rc = 0; rc < resultCarrier.length; rc++) {
                            var c = resultCarrier[rc];
                            if (c.emailId == undefined) {
                                cEmail = ' ';
                                console.log(cEmail);
                            } else {
                                cEmail = c.emailId.email;
                                console.log(cEmail);
                            }
                            if (c.carrierLogo == undefined)
                            {
                                profilePicture = "https://proto-call-test.appspot.com/file/AMIfv95gsNeXXhLvQYjWfzFNDL7J7AQEbMbR2o21zlAe-4CvYI8xrZurkzK4NBR1nRbmmjbpTl_ZdAUMZs8LJgRw7rx9LdYj2km00q-HF9Nl_rEgqtEN9NZP0nYX2DB0EGwyuFQNKIsPnquZMD-uvgnIVU02EJiKwpLBzuGuqNXmtLtyTDGLYwBMtdJTmKLkawOaeFmWrLw_";

                            } else {
                                var profilePath = c.carrierLogo;
                                profilePicture = "https://proto-call-test.appspot.com/file/" + profilePath;
                            }
                            template += CarrierdynamicTemplate.carrier.CarrierDynamicList(c);
                            loopcount++;
                        }
                        var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
                        var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div>'
                                + '<div class="div-reloadpage">'
                                + '<div class="div-loadbutton"><span class="spinner-loadmore"></span><div class="loadmore-txt">Load More</div></div>'
                                + '<div class="div-gototop-button">Go to top</div></div></div>';
                        var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
                        $("#page").empty();
                        totalHtml = header + content + footer;
                        $("#page").append(totalHtml);
                        $('.setProfilePic').fillBox();
                        protocall.displaySpinner(false);


                        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
                        protocall.events.GlobalContainerScrollevent();




                        if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                            $(".edit-cover-pic").css("display", "none");
                            $(".edit-agency-pic").css("display", "none");
                        }
                    }
                } else {


                    if (data.resultMap != null && data.resultMap != "") {
                        var resultCarrier = data.resultMap.CarrierTab;
                        RESPONSE.customers_data[0] = data.resultMap.CustomerTab;
                        RESPONSE.users[0] = resultCarrier;
                        var template = '';
                        var loopcount = 1;
                        for (var rc = 0; rc < resultCarrier.length; rc++) {
                            var c = resultCarrier[rc];
                            if (c.emailId == undefined) {
                                cEmail = ' ';
                                console.log(cEmail);
                            } else {
                                cEmail = c.emailId.email;
                                console.log(cEmail);
                            }
                            if (c.carrierLogo == undefined)
                            {
                                profilePicture = "https://proto-call-test.appspot.com/file/AMIfv95gsNeXXhLvQYjWfzFNDL7J7AQEbMbR2o21zlAe-4CvYI8xrZurkzK4NBR1nRbmmjbpTl_ZdAUMZs8LJgRw7rx9LdYj2km00q-HF9Nl_rEgqtEN9NZP0nYX2DB0EGwyuFQNKIsPnquZMD-uvgnIVU02EJiKwpLBzuGuqNXmtLtyTDGLYwBMtdJTmKLkawOaeFmWrLw_";

                            } else {
                                var profilePath = c.carrierLogo;
                                profilePicture = "https://proto-call-test.appspot.com/file/" + profilePath;
                            }
                            template += CarrierdynamicTemplate.carrier.CarrierDynamicList(c);
                            loopcount++;
                        }
                        var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
                        var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div>'
                                + '<div class="div-reloadpage">'
                                + '<div class="div-loadbutton"><span class="spinner-loadmore"></span><div class="loadmore-txt">Load More</div></div>'
                                + '<div class="div-gototop-button">Go to top</div></div></div>';
                        var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
                        $("#page").empty();
                        totalHtml = header + content + footer;
                        $("#page").append(totalHtml);
                        $('.setProfilePic').fillBox();
                        protocall.displaySpinner(false);

                        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
                        protocall.events.GlobalContainerScrollevent();
                        if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                            $(".edit-cover-pic").css("display", "none");
                            $(".edit-agency-pic").css("display", "none");
                        }
                    }
                }

            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                var header = HeaderTemplate.Menu.DynamicHeaderTemplate();

                CarrierdynamicTemplate.carrier.loadAssociatedCustomersForCarrier(header);
                if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                    $(".edit-cover-pic").css("display", "none");
                    $(".edit-agency-pic").css("display", "none");
                }

            }

            $(".mycarrier-img-width").addClass("spinner-loader");

            setTimeout(function () {
                $(".mycarrier-img-width").removeClass("spinner-loader");
            }, 1200);

            protocall.events.containerScrollEvent();

        },
        loadCarrierData: function (carrierData) {
            var carrierEmailId = "";
//            
            var template="";
            for (var indexOfArrau = 0; indexOfArrau < carrierData.length; indexOfArrau++) {
                $.each(carrierData[indexOfArrau], function (index, carrierDetails) {
//                    
                    if (carrierDetails.emailId == undefined) {
                        carrierEmailId = ' ';
                        console.log(carrierEmailId);
                    } else {
                        carrierEmailId = carrierDetails.emailId.email;
                        console.log(carrierEmailId);
                    }
                    if (carrierDetails.carrierLogo == undefined)
                    {
                        profilePicture = "https://proto-call-test.appspot.com/file/AMIfv95gsNeXXhLvQYjWfzFNDL7J7AQEbMbR2o21zlAe-4CvYI8xrZurkzK4NBR1nRbmmjbpTl_ZdAUMZs8LJgRw7rx9LdYj2km00q-HF9Nl_rEgqtEN9NZP0nYX2DB0EGwyuFQNKIsPnquZMD-uvgnIVU02EJiKwpLBzuGuqNXmtLtyTDGLYwBMtdJTmKLkawOaeFmWrLw_";

                    } else {
                        var profilePath = carrierDetails.carrierLogo;
                        profilePicture = "https://proto-call-test.appspot.com/file/" + profilePath;
                    }
                    template += CarrierdynamicTemplate.carrier.CarrierDynamicList(carrierDetails);
                });
            }
            var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div>'
                    + '<div class="div-reloadpage">'
                    + '<div class="div-loadbutton"><span class="spinner-loadmore"></span><div class="loadmore-txt">Load More</div></div>'
                    + '<div class="div-gototop-button">Go to top</div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            $("#page").empty();
            totalHtml = header + content + footer;
            $("#page").append(totalHtml);
            $('.setProfilePic').fillBox();
            protocall.displaySpinner(false);
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
            protocall.events.GlobalContainerScrollevent();
            protocall.events.containerScrollEvent();
            if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                $(".edit-cover-pic").css("display", "none");
                $(".edit-agency-pic").css("display", "none");
            }
        },
        loadAssocaiteCustomersDataForCarrier: function () {
            var totalHTML = "<div>There are  no Customers records</div>";
            var response = RESPONSE.CARRIERREP_DATA[0];
            var resp = response;
            try {
                if (resp.resultMap.carrierTab[2].length != undefined) {
                    totalHTML = "";
                    for (var index = 0; index < resp.resultMap.carrierTab[2].length; index++) {

                        var name = resp.resultMap.carrierTab[2][index].firstName;
                        var location = resp.resultMap.carrierTab[2][index].residentialState;
                        var email = resp.resultMap.carrierTab[2][index].emailId.email;
                        var carrierid = resp.resultMap.carrierTab[2][index].agencyId;
                        var image = resp.resultMap.carrierTab[2][index].profilePicture;
                        if (name == undefined) {
                            name = "";
                        }
                        if (location == undefined) {
                            location = "";
                        }
                        if (email == undefined) {
                            email = "";
                        }
                        if (image == undefined) {
                            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                        } else {
                            image = "https://proto-call-test.appspot.com/file/" + image;

                        }
                        var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="viewcustomerfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                + 'alt="" class="carrier-img-width   spinner-loader "> '
                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div> ';

                        totalHTML += associateBlock;
                    }
                }
            } catch (err) {
                totalHTML = "<div>There are  no Customers records</div>";

            }
            if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                $(".edit-cover-pic").css("display", "none");
                $(".edit-agency-pic").css("display", "none");
            }
            $("#id-carrierassociatedblock").html('');
            $("#id-carrierassociatedblock").append(totalHTML);
            $(".associated-carrier-pic").css("margin-top", "18px");
            $(".associated-carrier-pic").css("height", "40px");

            setTimeout(function () {
                $(".associated-carrier-pic").css("margin-top", "10px");
                $(".associated-carrier-pic").css("height", "63px");
                $(".carrier-img-width").removeClass("spinner-loader");
            }, 1200);

            if (sessionStorage.IsDropdownClick == "true") {
                sessionStorage.IsDropdownClick = "false";
                if (totalHTML == "<div>There are  no Customers records</div>") {
                    showAlertBox("No Associated Customers Records..!");
                }
            }

        },
        loadAssocaiteAgenciesDataForCarrier: function () {

            var totalHTML = "<div>There are  no Agencies records</div>";
            var response = RESPONSE.CARRIERREP_DATA[0];
            var resp = response;
            try {
                if (resp.resultMap.carrierTab[0].length != undefined) {
                    totalHTML = "";
                    for (var index = 0; index < resp.resultMap.carrierTab[0].length; index++) {

                        var name = resp.resultMap.carrierTab[0][index].agencyName;
                        var location = resp.resultMap.carrierTab[0][index].city + "," + resp.resultMap.carrierTab[0][index].state;
                        var email = resp.resultMap.carrierTab[0][index].emailId.email;
                        var carrierid = resp.resultMap.carrierTab[0][index].agencyId;
                        var image = resp.resultMap.carrierTab[0][index].agencyLogo;
                        if (name == undefined) {
                            name = "";
                        }
                        if (location == undefined) {
                            location = "";
                        }
                        if (email == undefined) {
                            email = "";
                        }
                        if (image == undefined) {
                            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                        } else {
                            image = "https://proto-call-test.appspot.com/file/" + image;

                        }
                        var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view myagenciesView left p-relative" data-type="viewagenciesfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                + 'alt="" class="carrier-img-width   spinner-loader "> '
                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div> ';

                        totalHTML += associateBlock;
                        sessionStorage.IsDropdownClick = "false";
                    }
                }
            } catch (err) {
                totalHTML = "<div>There are  no Agencies records</div>";

            }
            if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                $(".edit-cover-pic").css("display", "none");
                $(".edit-agency-pic").css("display", "none");
            }
            $("#id-carrierassociatedblock").html('');
            $("#id-carrierassociatedblock").append(totalHTML);
            $(".associated-carrier-pic").css("margin-top", "18px");
            $(".associated-carrier-pic").css("height", "40px");

            setTimeout(function () {
                $(".associated-carrier-pic").css("margin-top", "10px");
                $(".associated-carrier-pic").css("height", "63px");
                $(".carrier-img-width").removeClass("spinner-loader");
            }, 1200);

            if (sessionStorage.IsDropdownClick == "true") {

                sessionStorage.IsDropdownClick = "false";
                if (totalHTML == "<div>There are  no Agencies records</div>") {
                    showAlertBox("No Associated Agencies Records..!");
                }
            }


        },
        loadAssociatedCustomersForCarrier: function (contenthtml) {
            var response = "";

            response = RESPONSE.CARRIERREP_DATA[0];
            if (response == undefined) {
                response = JSON.parse(localStorage.getItem("carrierRepData"));
            }
            var template = CarrierdynamicTemplate.carrier.carrierRepdynamicView(response);
            var totalHTML = "<div>There are  no Customers records</div>";
            var resp = response;
            try {
                if (resp.resultMap.carrierTab[2].length != undefined) {
                    totalHTML = "";
                    for (var index = 0; index < resp.resultMap.carrierTab[2].length; index++) {

                        var name = resp.resultMap.carrierTab[2][index].firstName;
                        var location = resp.resultMap.carrierTab[2][index].residentialState;
                        var email = resp.resultMap.carrierTab[2][index].emailId.email;
                        var carrierid = resp.resultMap.carrierTab[2][index].agencyId;
                        var image = resp.resultMap.carrierTab[2][index].profilePicture;

                        if (name == undefined) {
                            name = "";
                        }
                        if (location == undefined) {
                            location = "";
                        }
                        if (email == undefined) {
                            email = "";
                        }

                        if (image == undefined) {
                            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                        } else {
                            image = "https://proto-call-test.appspot.com/file/" + image;

                        }
                        var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="viewcustomerfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                + 'alt="" class="carrier-img-width   spinner-loader "> '
                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div> ';

                        totalHTML += associateBlock;
                    }
                }
            } catch (err) {
                totalHTML = "<div>There are  no Customers records</div>";

            }
            var temp_html = template + totalHTML + "</div>";
            var contenta = contenthtml + '<div class="container"> <div class="content-holder">' + temp_html + '</div></div></div>'
                    + '<div class="div-reloadpage">'
                    + '<div class="div-loadbutton"><span class="spinner-loadmore"></span><div class="loadmore-txt">Load More</div></div>'
                    + '<div class="div-gototop-button">Go to top</div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();

            $("#page").empty();
            $("#page").append(contenta + footer);
            $('.setProfilePic').fillBox();
            protocall.displaySpinner(false);

            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
            protocall.events.GlobalContainerScrollevent();
            if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                $(".edit-cover-pic").css("display", "none");
                $(".edit-agency-pic").css("display", "none");
            }

            if (sessionStorage.IsDropdownClick == "true") {

                sessionStorage.IsDropdownClick = "false";
                if (totalHTML == "<div>There are  no Customers records</div>") {
                    showAlertBox("There are  no Customers records");
                }
            }
            $(".edit-cover-pic").css("display", "none");
            $(".edit-agency-pic").css("display", "none");
            $(".associated-carrier-pic").css("margin-top", "18px");
            $(".associated-carrier-pic").css("height", "40px");

            setTimeout(function () {
                $(".associated-carrier-pic").css("margin-top", "10px");
                $(".associated-carrier-pic").css("height", "63px");
                $(".carrier-img-width").removeClass("spinner-loader");
            }, 1200);
        },
        loadcarriercontentSort: function (data, page) {

            if (data.resultMap != null && data.resultMap != "") {
                var resultCarrier = data.resultMap.ArrayOfCarriersDetails;
                RESPONSE.users[0] = resultCarrier;

                var template = '';
                var loopCount = 1;
                for (var rc = 0; rc < resultCarrier.length; rc++) {
                    var c = resultCarrier[rc];
                    if (c.emailId == undefined) {
                        cEmail = ' ';
                        console.log(cEmail);
                    } else {
                        cEmail = c.emailId.email;
                        console.log(cEmail);
                    }
                    if (c.carrierLogo == undefined)
                    {
                        profilePicture = "https://proto-call-test.appspot.com/file/AMIfv95gsNeXXhLvQYjWfzFNDL7J7AQEbMbR2o21zlAe-4CvYI8xrZurkzK4NBR1nRbmmjbpTl_ZdAUMZs8LJgRw7rx9LdYj2km00q-HF9Nl_rEgqtEN9NZP0nYX2DB0EGwyuFQNKIsPnquZMD-uvgnIVU02EJiKwpLBzuGuqNXmtLtyTDGLYwBMtdJTmKLkawOaeFmWrLw_";

                    } else {
                        var profilePath = c.carrierLogo;
                        profilePicture = "https://proto-call-test.appspot.com/file/" + profilePath;
                    }
                    if (loopCount == 4) {
                        loopCount = 0;
                        template += '<div class="carrier-profile-screen left border-all p-relative" style="margin-right: 0px !important;"><div class="carrier-logo p-relative opensans-regular"><div class="mycarrierlogo-pic"><img  src="' + profilePicture + '" alt="" class="mycarrier-img-width snap" data-type="viewcarrierfeedview" data-id = "' + c.carrierId + '"></div> </div> <div class="carrier-info bg-color-white p-relative carrier-groupblock opensans-regular"> <div class="carrier-name t-caps t-center" style="  margin-top: -7px;">' + c.carrierName + '</div> <div class="carrier-location t-caps t-center">' + c.state + '</div> '
                                + '<div class="carrier-email t-center" style="text-align: center;"><a title=' + cEmail + ' href="mailto:' + cEmail + '">' + cEmail + '</a></div></div> <div class="carrier-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="viewcarrierfeedview" data-id = "' + c.carrierId + '">view </div></div>';
                    } else {
                        template += CarrierdynamicTemplate.carrier.CarrierDynamicList(c);
                    }

                    loopCount++;
                }
                var header = HeaderTemplate.Menu.DynamicHeaderTemplate();

                var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div>'
                        + '<div class="div-reloadpage">'
                        + '<div class="div-loadbutton"><span class="spinner-loadmore"></span><div class="loadmore-txt">Load More</div></div>'
                        + '<div class="div-gototop-button">Go to top</div></div></div>';
                var footer = HomedynamicTemplate.home.HomeDynamicFooterTemplate();

                $("#page").empty();
                totalHtml = header + content + footer;
                $("#page").append(totalHtml);
                $('.setProfilePic').fillBox();
                protocall.displaySpinner(false);

                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
                protocall.events.GlobalContainerScrollevent();
                if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                    $(".edit-cover-pic").css("display", "none");
                    $(".edit-agency-pic").css("display", "none");
                }
            }
            $(".mycarrier-img-width").addClass("spinner-loader");

            setTimeout(function () {
                $(".mycarrier-img-width").removeClass("spinner-loader");
            }, 1200);
        },
        carrierRepdynamicView: function (response) {

            console.log(response);
            var viewdata = response.resultMap.carrierTab[1];
            var address2 = "";
            var address = "";
            var facebook = "";
            if (viewdata.address2 == "undefined") {
                address2 = "";
            } else {
                address2 = viewdata.address2;
            }



            if (viewdata.address == "undefined") {
                address = "";
            } else {
                address = viewdata.address;
            }

            if (address2 == undefined) {
                address2 = "";
            }

            if (address == undefined) {
                address = "";
            }

            if (viewdata.facebookPage == undefined) {
                facebook = "#";
            } else {
                facebook = viewdata.facebookPage;
            }

            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="carrier-view-leftbloack inline-block v-align-mid p-relative"> <div class="carrier-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-caps">CARRIER ID :</div> <div class="carrier-view-id inline-block">' + viewdata.carrierId + '</div> </div> <div class="carrier-logo-view p-relative"> <div class="carrierlogo-viewpic"> <img src="' + HOMEPAGERESPONSE.PROFILEAPI + viewdata.carrierLogo + '" alt="" class="carrier-img-width"> </div> </div> <div class="carrier-view-social p-relative clr-fr"> <div class="carrier-view-website p-relative left bg-color-green"  style="cursor:pointer;"   onClick="window.open(\'' + viewdata.website.value + '\',\'_newtab\');"> <div class="p-relative inline-block v-align-top" style="margin-left: 11%;"> <div class="sprite-im pop-out" >&nbsp;</div> </div> <div class="carrier-website-name inline-block t-caps opensans-light "><a class="f-color-w" href="' + viewdata.website.value + '" target="_blank">WEBSITE</a></div> </div> <div class="carrier-view-facebook p-relative left bg-color-green" style="cursor:pointer;"  onClick="window.open(\'' + viewdata.facebookPage + '\',\'_newtab\');"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out" style="  margin-left: 30px;">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-light f-color-w"><a class="f-color-w" href="' + facebook + '" target="_blank">FACEBOOK</a></div> </div> </div> </div> <div class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">carrier Name </div> <div class="carrier-left-content t-left right ">' + viewdata.carrierName + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right">' + address + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right ">' + address2 + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div class="carrier-left-content t-left right">' + viewdata.state + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div class="carrier-left-content t-left right ">' + viewdata.city + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right"><a href="tel:' + viewdata.phone.number + '">' + viewdata.phone.number + '</a></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div class="carrier-left-content t-left right ">' + viewdata.zip + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">email</div> '
                    + '<div class="carrier-left-content t-left right"><a title=' + viewdata.emailId.email + ' href="mailto:' + viewdata.emailId.email + '">' + viewdata.emailId.email + '</a></div> </div> </div> </div> </div> </div> </div> '
            var dropDownContent = '<div class="associated-carrierview p-relative"> <div id="id-associatedropdown-parent" class="p-relative " style=" width: 238px; margin-bottom: 10px;">'
                    + '<div id="id-associatedropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED CUSTOMERS</div> '
                    + '<div id="associatedownarrow" class="p-relative inline-block"> <div id="associatedownarrow" class="id-associatedownarrow sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                    + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot" style="margin-top: 5px;">';

            return html + dropDownContent;
        },
        CarrierDynamicList: function (c) {
            var carrierEmailId = "";
            if (c.emailId == undefined) {
                carrierEmailId = ' ';
                console.log(carrierEmailId);
            } else {
                carrierEmailId = c.emailId.email;
                console.log(carrierEmailId);
            }
            var allowView = false;

            if (c.allowView != undefined) {
                allowView = c.allowView;
                //  height: 96px;
            }

            var html = '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative opensans-regular"><div class="mycarrierlogo-pic">';

            /* if (localStorage.LoginType != 'Representatives') {
                allowView = true;
            } */

           // if (allowView == true) {
                html = html + '<img  src="' + profilePicture + '" alt="" class="mycarrier-img-width snap" data-type="viewcarrierfeedview" '
                        + 'data-id = "' + c.carrierId + '"></div> </div> ';
                html = html + '<div class="carrier-info bg-color-white p-relative carrier-groupblock opensans-regular"> <div class="carrier-name '
                        + 't-caps t-center" style="  margin-top: -7px;">' + c.carrierName + '</div> <div class="carrier-location t-caps t-center">' + c.state + '</div> '
                        + '<div class="carrier-email t-center" style="text-align: center;"><a title=' + carrierEmailId + ' href="mailto:' + carrierEmailId + '">' + carrierEmailId + '</a></div></div> ';
                html = html + '<div class="carrier-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="viewcarrierfeedview" '
                        + 'data-id = "' + c.carrierId + '">view </div>';
            /* } else {
                html = html + '<img  src="' + profilePicture + '" alt="" class="mycarrier-img-width" data-type="viewcarrierfeedview" '
                        + 'data-id = "' + c.carrierId + '"></div> </div> ';
                html = html + '<div class="carrier-info bg-color-white p-relative carrier-groupblock opensans-regular" style="height: 96px;"> <div class="carrier-name '
                        + 't-caps t-center" style="  margin-top: -7px;">' + c.carrierName + '</div> <div class="carrier-location t-caps t-center">' + c.state + '</div> '
                        + '<div class="carrier-email t-center" style="text-align: center;"><a title=' + carrierEmailId + ' href="mailto:' + carrierEmailId + '">' + carrierEmailId + '</a></div></div> ';
            } */

            html = html + '</div>';

            return html;

        }
    }
};
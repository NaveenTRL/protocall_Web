var CustomerdynamicTemplate = {
    carrier: {
        CustomerDynamicHeaderTemplate: function () {
            var sortText = "";
            if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW) {
                sortText = "Alphabetical";
            } else if (HOMEPAGERESPONSE.SORTBYRECENTVIEW) {
                sortText = "Recent";
            } else {
                sortText = "Recent";
            }
            if (sessionStorage.loginType == 'AgencyAdmin') {
                var MainMenu = '<a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w selected-tab" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Home</span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w" data-type="page" data-page="carriers"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Carriers</span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Customers</span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">My Reps</span> </div></a>';
            }
            else if (sessionStorage.loginType == 'AgencyRepresentative') {
                var MainMenu = '<a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w selected-tab" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Home</span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light agencyinfo p-relative f-color-w" data-type="page" data-page="agency"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">AGENCY</span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Customers</span> </div></a> ';
            }
            else if (sessionStorage.loginType == 'CarrierAdmin') {
                var MainMenu = '<a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w selected-tab" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Home</span> </div></a> <a href="/agencies" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w" data-type="page" data-page="agencies"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Agencies</span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Customers</span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">My Reps</span> </div></a>';
            }
            else if (sessionStorage.loginType == 'CarrierRepresentative') {
                var MainMenu = '<a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w selected-tab" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Home</span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w" data-type="page" data-page="carriers"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Carriers</span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">Customers</span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon">&nbsp;</div><span class="menu-text t-caps">My Reps</span> </div></a>';
            }
            var Header = '<div class="m-width"> <div class="ctrl-blk"> <header class="w-pad"> <div class="logo-info-blk clr-fl p-relative"> <div class="lf-block left clr-fl header-left-panel"> <div class="leftblk-spacing"> <div style="width:100%;"> <div class="logo-container left"> <div class="logo-holder"> <img src="images/Logo.png" alt="" class="logo"/> </div></div><div class="left search-blk"> <form name="globalSearch" method="GET" action="#search" class="" onsubmit="event.preventDefault();"> <div style="width:100%;"> <div class="searchbox-border"> <input class="search-ip opensans-regular" type="search" name="" placeholder="Search"> </div></div></form> </div><div class="clear"></div></div></div></div><div class="rg-block left p-relative"> <a href="/profile" id="profile" class="logged-user-info clr-fl snap" data-type="profile-link"> <div id="" class="left user-pic-box"> <img src="' + sessionStorage.profilePic + '" alt="Profile pic" class="setProfilePic"> </div><div class="left user-info"> <div class="opensans-regular text-ellipsis"> <span>Hi,</span> <span class="t-caps">' + sessionStorage.userFirstName + '</span> </div></div><div class="left sprite-im drop-down-icon user-drop-icon">&nbsp;</div><div class="clear"></div></a> </div></div></header> <div class="m-block p-relative"> <div class="clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="mb-menu bg-color-green clr-fl t-center t-upper"> ' + MainMenu + ' </div><div class="mb-submenu"> <div class="mb-submenu-in p-relative"> <div class="tab-rb-submenu inline-block v-align-mid"> <div class="p-relative "> <a style="width:115px;" href="/myalerts" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light myalerts p-relative" data-type="page" data-submenu="myalerts"> <span class="submenu-title t-caps f-color-w">My Alerts</span> <span class="cnt-blk"><span class="countclass">' + sessionStorage.MYALERTSCOUNT + '</span></span> </a> <a href="/incidents" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light incidents p-relative" data-type="page" data-submenu="incidents"> <div class="submenu-title t-caps inline-block f-color-w v-align-mid"  style="margin-top:-4px;">incidents</div></a> <a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light policies p-relative" data-type="page" data-submenu="policies"> <span class="submenu-title t-caps f-color-w">Policies</span> </a> <a href="/archives" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light archives p-relative" data-type="page" data-submenu="archives"> <span class="submenu-title t-caps f-color-w">Archive/span> </a> <a href="/viewarchives" class="snap submenu-tab bg-color-green left f-sz-16 ptsans-light view_archives p-relative" data-type="page" data-submenu="view_archives"> <span class="submenu-title t-caps f-color-w">View Archived</span> </a> <div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortby"> <div class="sort-text f-italic">' + sortText + '</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div></div><div class="clear"></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="agency-info p-relative clr-fl bg-color-dblue"> <a class="agency-details clr-fl snap" data-type="agency-link"> <div id="" class="left agency-pic-box p-relative"> <img src="' + sessionStorage.agencyLogo + '" alt="agency pic" class="setAgencyPic"> <div class="edit-cover-pic p-absolute anim-opacity">&nbsp;</div><div class="edit-agency-pic p-absolute anim bg-color-red f-color-w snap" data-type="editAgencyPic"> <div class="p-relative t-center"> <div class="sprite-im mobile-icon inline-block v-align-mid">&nbsp;</div><div class="inline-block f-sz-12 v-align-mid opensans-regular ">Edit</div></div></div></div><div class="left agency-name-details t-left anim"> <div class="opensans-regular text-ellipsis f-italic f-sz-17 agency-name t-caps">' + sessionStorage.agencyName + '</div><div class="opensans-regular text-ellipsis f-italic agency-email">' + sessionStorage.agencyEmail + '</div></div></a> </div></div></div></div>';

            return Header;
        }

    },
    customer: {
        loadSuperAdminAegnciesalphaSortBy: function (data) {
            localStorage.setItem("TABNAME", "Agencies");

            var template = '';
            for (var i = 0; i < data.resultMap.ArrayOfCarriersDetails.length; i++) {
                var cus = data.resultMap.ArrayOfCarriersDetails[i];
                if (cus.emailId.email == undefined) {
                    cusEmail = ' ';
                } else {
                    cusEmail = cus.emailId.email;
                }
                if (cus.agencyName == undefined)
                {
                    fisrtname = ' ';
                } else {
                    fisrtname = cus.agencyName;
                }
                template += CustomerdynamicTemplate.customer.superadminagenciesDynamicList(cus);
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
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
            protocall.events.GlobalContainerScrollevent();
            protocall.displaySpinner(false);

            $(".carrier-img-width").addClass("spinner-loader");
            $(".carrier-img-width").css("width", "10px");
            $(".carrier-img-width").css("position", "relative");
            $(".carrier-img-width").css("height", "10px");
            $(".carrier-img-width").css("margin-top", "44%");

            $(".content-holder").removeClass("spinner1");
            $(".content-holder").css("opacity", "1");

            setTimeout(function () {
                $(".carrier-img-width").removeClass("spinner-loader");
                $(".carrier-img-width").css("width", "100%");
                $(".carrier-img-width").css("height", "100%");
                $(".carrier-img-width").css("margin-top", "0px");
                $(".carrier-img-width").fillBox();

            }, 1200);
        },
        loadCarrierOwnerAgenciesPage: function (data) {

            try {
                if (sessionStorage.loginType == 'SuperAdmin') {
                    localStorage.setItem("TABNAME", "Agencies");
                    var template = '';
                    for (var i = 0; i < HOMEPAGERESPONSE.SUPERADMINAGENCIES.length; i++) {
                        var cus = HOMEPAGERESPONSE.SUPERADMINAGENCIES[i];
                        if (cus.emailId == undefined) {
                            cusEmail = ' ';
                        } else {
                            cusEmail = cus.emailId.email;
                        }
                        if (cus.lastName == undefined)
                        {
                            lastName = ' ';
                        } else {
                            lastName = cus.lastName;
                        }
                        if (cus.agencyLogo == undefined)
                        {
                            profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                        } else {
                            var profilePath = cus.agencyLogo;
                            profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                        }
                        template += CustomerdynamicTemplate.customer.agenciesDynamicList(cus);
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
                    protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
                    protocall.events.GlobalContainerScrollevent();
                    protocall.displaySpinner(false);
                    $("div.submenu-sort div:nth-child(1)").text("Recent");
                    popUpContent.closePopUpContent();
                } else {
                    if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                        /* if (localStorage.LoginType == 'Representatives') {
                         data = RESPONSE.CARRIERREP_DATA[0];
                         if (data == undefined) {
                         data = JSON.parse(localStorage.getItem("carrierRepData"));
                         }
                         console.log("manoj", data);
                         
                         if (data.resultMap != null && data.resultMap != "") {
                         
                         var resultCustomer = data.resultMap.agencyTab;
                         
                         console.log("---->", resultCustomer.length);
                         var template = '';
                         $.each(resultCustomer, function (index, agencyDetails) {
                         var cus = agencyDetails.agencyDetail;
                         template += CustomerdynamicTemplate.customer.agenciesDynamicList(cus);
                         });
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
                         protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
                         protocall.events.GlobalContainerScrollevent();
                         protocall.displaySpinner(false);
                         }
                         $(".edit-cover-pic").css("display", "none");
                         $(".edit-agency-pic").css("display", "none");
                         } else { */
                        /*  if ((RESPONSE.CARRIERAGENCYTOTALDETAILS).length != 0) {
                         data = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
                         //localStorage.setItem("carrierAgencyDetails", JSON.stringify(RESPONSE.CARRIERAGENCYTOTALDETAILS[0]));
                         } else {
                         data = JSON.parse(localStorage.getItem("customerDetailsValue"));
                         console.log("data", data);
                         } */
                        //console.log("manoj", data);
                        // if (data.resultMap != null && data.resultMap != "") {
                        //var resultCustomer = data.resultMap.agencyTab;
                        var template = '';
                        $.each(data, function (index, agencyDetails) {
                            //var cus = agencyDetails.AgencyDetail;
                            template += CustomerdynamicTemplate.customer.agenciesDynamicList(agencyDetails);
                        });
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
                        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
                        protocall.events.GlobalContainerScrollevent();
                        protocall.displaySpinner(false);
                        $(".edit-cover-pic").css("display", "block");
                        $(".edit-agency-pic").css("display", "block");
                        //}
                        //}
                    } else {
                        console.log("nothing");
                        /* data = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
                         console.log("manoj", data);
                         if (data.resultMap != null && data.resultMap != "") {
                         
                         var resultCustomer = data.resultMap.agencyTab[0];
                         
                         console.log("---->", resultCustomer.length);
                         var template = '';
                         var length = 1;
                         if (resultCustomer.length == undefined) {
                         length = 1;
                         } else {
                         length = resultCustomer.length;
                         }
                         for (var c = 0; c < length; c++) {
                         var cus = resultCustomer.AgencyDetail;
                         template += CustomerdynamicTemplate.customer.agenciesDynamicList(cus);
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
                         protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
                         protocall.events.GlobalContainerScrollevent();
                         protocall.displaySpinner(false);
                         } */
                    }
                }

                $(".carrier-img-width").addClass("spinner-loader");
                $(".carrier-img-width").css("width", "10px");
                $(".carrier-img-width").css("position", "relative");
                $(".carrier-img-width").css("height", "10px");
                $(".carrier-img-width").css("margin-top", "44%");

                $(".content-holder").removeClass("spinner1");
                $(".content-holder").css("opacity", "1");

                setTimeout(function () {
                    $(".carrier-img-width").removeClass("spinner-loader");
                    $(".carrier-img-width").css("width", "100%");
                    $(".carrier-img-width").css("height", "100%");
                    $(".carrier-img-width").css("margin-top", "0px");
                    $(".carrier-img-width").fillBox();

                }, 1200);
            } catch (e) {
                protocall.displaySpinner(false);
                $(".content-holder").removeClass("spinner1");
                $(".home").click();
                showAlertBox("There is some server error..!");


            }



        },
        loadAgenciesPage: function (data) {
            if (sessionStorage.loginType == 'SuperAdmin') {
                var template = '';
                for (var i = 0; i < HOMEPAGERESPONSE.SUPERADMINAGENCIES.length; i++) {
                    var cus = HOMEPAGERESPONSE.SUPERADMINAGENCIES[i];
                    if (cus.emailId.email == undefined) {
                        cusEmail = ' ';
                    } else {
                        cusEmail = cus.emailId.email;
                    }
                    if (cus.lastName == undefined)
                    {
                        lastName = ' ';
                    } else {
                        lastName = cus.lastName;
                    }
                    if (cus.agencyLogo == undefined)
                    {
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                    } else {
                        var profilePath = cus.agencyLogo;
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                    }
                    template += CustomerdynamicTemplate.customer.agenciesDynamicList(cus);
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
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
                protocall.events.GlobalContainerScrollevent();
            } else {
                var data = RESPONSE.CARRIERREP_DATA[0];
                if (data.resultMap != null && data.resultMap != "") {

                    var resultCustomer = data.resultMap.agencyTab;

                    var errlen = 0;
                    try {
                        errlen = resultCustomer.length;
                    } catch (err) {
                        errlen = 0;
                    }

                    if (errlen != 0) {
                        var template = '';
                        for (var c = 0; c < resultCustomer.length; c++) {
                            var cus = resultCustomer[c].agencyDetail;

                            if (cus.emailId.email == undefined) {
                                cusEmail = ' ';
                            } else {
                                cusEmail = cus.emailId.email;
                            }
                            if (cus.lastName == undefined)
                            {
                                lastName = ' ';
                            } else {
                                lastName = cus.lastName;
                            }
                            if (cus.agencyLogo == undefined)
                            {
                                profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                            } else {
                                var profilePath = cus.agencyLogo;
                                profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                            }
                            template += CustomerdynamicTemplate.customer.agenciesDynamicList(cus);
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
                        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
                        protocall.events.GlobalContainerScrollevent();
                    } else {
                        var template = '';
                        var cus = resultCustomer[0].agencyDetail;
                        if (cus.emailId.email == undefined) {
                            cusEmail = ' ';
                        } else {
                            cusEmail = cus.emailId.email;
                        }
                        if (cus.lastName == undefined)
                        {
                            lastName = ' ';
                        } else {
                            lastName = cus.lastName;
                        }
                        if (cus.agencyLogo == undefined)
                        {
                            profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                        } else {
                            var profilePath = cus.agencyLogo;
                            profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                        }
                        template += CustomerdynamicTemplate.customer.agenciesDynamicList(cus);
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
                    protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
                    protocall.events.GlobalContainerScrollevent();
                }
                $(".edit-cover-pic").css("display", "none");
                $(".edit-agency-pic").css("display", "none");
            }

            $(".carrier-img-width").addClass("spinner-loader");
            $(".carrier-img-width").css("width", "10px");
            $(".carrier-img-width").css("position", "relative");
            $(".carrier-img-width").css("height", "10px");
            $(".carrier-img-width").css("margin-top", "44%");

            $(".content-holder").removeClass("spinner1");
            $(".content-holder").css("opacity", "1");

            setTimeout(function () {
                $(".carrier-img-width").removeClass("spinner-loader");
                $(".carrier-img-width").css("width", "100%");
                $(".carrier-img-width").css("height", "100%");
                $(".carrier-img-width").css("margin-top", "0px");
                $(".carrier-img-width").fillBox();

            }, 1200);


        },
        loadcarrierAdmincustomercontent: function (data, page) {


            try {
                if ((RESPONSE.CARRIERAGENCYTOTALDETAILS).length != 0) {
                    data = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
                    //localStorage.setItem("customerDetailsValue", JSON.stringify(data));
                } else {
                    data = JSON.parse(localStorage.getItem("customerDetailsValue"));
                }
                if (data.resultMap != null && data.resultMap != "") {
                    var template = '';
                    for (var c = 0; c < data.resultMap.customerTab.length; c++) {

                        var cust = data.resultMap.customerTab[c];
                        var cus = cust.CustomerDetails;
                        if (cus.emailId.email == undefined) {
                            cusEmail = ' ';
                        } else {
                            cusEmail = cus.emailId.email;
                        }
                        if (cus.lastName == undefined)
                        {
                            lastName = ' ';
                        } else {
                            lastName = cus.lastName;
                        }
                        if (cus.profilePicture == undefined)
                        {
                            profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                        } else {
                            var profilePath = cus.profilePicture;
                            profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                        }
                        template += CustomerdynamicTemplate.customer.CustomerDynamicList(cus);
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
                    protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
                    protocall.events.GlobalContainerScrollevent();
                }
                $(".edit-cover-pic").css("display", "block");
                $(".edit-agency-pic").css("display", "block");


                $(".carrier-img-width").addClass("spinner-loader");
                $(".carrier-img-width").css("width", "10px");
                $(".carrier-img-width").css("position", "relative");
                $(".carrier-img-width").css("height", "10px");
                $(".carrier-img-width").css("margin-top", "44%");

                $(".content-holder").removeClass("spinner1");
                $(".content-holder").css("opacity", "1");

                setTimeout(function () {
                    $(".carrier-img-width").removeClass("spinner-loader");
                    $(".carrier-img-width").css("width", "100%");
                    $(".carrier-img-width").css("height", "100%");
                    $(".carrier-img-width").css("margin-top", "0px");
                    $(".carrier-img-width").fillBox();

                }, 1200);
            } catch (e) {
                protocall.displaySpinner(false);
                $(".content-holder").removeClass("spinner1");
                $(".home").click();
                showAlertBox("There is some server error..!");

            }



        },
        loadcarrierRepcustomercontent: function (data, page) {
            data = RESPONSE.carrierrepcustomers_data[0];
            if (data == undefined) {
                if (sessionStorage.loginType == "CarrierRepresentative") {
                    data = JSON.parse(localStorage.getItem("carrierRepData"));
                } else {
                    data = JSON.parse(localStorage.getItem("carrierRepData"));
                }
            }
            if (data.resultMap != null && data.resultMap != "") {
                var template = '';
                //localStorage.setItem("customers_data_rep", JSON.stringify(data.resultMap.customerTab));
                for (var c = 0; c < data.resultMap.customerTab.length; c++) {
                    var cus = data.resultMap.customerTab[c].userDetails;
                    if (cus.emailId.email == undefined) {
                        cusEmail = ' ';
                    } else {
                        cusEmail = cus.emailId.email;
                    }
                    if (cus.lastName == undefined)
                    {
                        lastName = ' ';
                    } else {
                        lastName = cus.lastName;
                    }
                    if (cus.profilePicture == undefined)
                    {
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                    } else {
                        var profilePath = cus.profilePicture;
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                    }
                    template += CustomerdynamicTemplate.customer.CustomerDynamicList(cus);
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
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
                protocall.events.GlobalContainerScrollevent();
            }
            $(".edit-cover-pic").css("display", "none");
            $(".edit-agency-pic").css("display", "none");

            $(".carrier-img-width").addClass("spinner-loader");
            $(".carrier-img-width").css("width", "10px");
            $(".carrier-img-width").css("position", "relative");
            $(".carrier-img-width").css("height", "10px");
            $(".carrier-img-width").css("margin-top", "44%");

            $(".content-holder").removeClass("spinner1");
            $(".content-holder").css("opacity", "1");

            setTimeout(function () {
                $(".carrier-img-width").removeClass("spinner-loader");
                $(".carrier-img-width").css("width", "100%");
                $(".carrier-img-width").css("height", "100%");
                $(".carrier-img-width").css("margin-top", "0px");
                $(".carrier-img-width").fillBox();

            }, 1200);
        },
        loadcustomercontent: function (data, page) {

            if (sessionStorage.loginType == 'SuperAdmin') {
                RESPONSE.customers_data[0] = HOMEPAGERESPONSE.SUPERADMINCUSTOMERS;
                RESPONSE.users[0] = HOMEPAGERESPONSE.SUPERADMINCARRIERDETAILS;
                var resultCustomer = HOMEPAGERESPONSE.SUPERADMINCUSTOMERS;
                var template = '';
                for (var c = 0; c < resultCustomer.length; c++) {
                    var cus = resultCustomer[c];
                    if (cus.emailId == undefined) {
                        cusEmail = ' ';
                    } else {
                        cusEmail = cus.emailId.email;
                    }
                    if (cus.lastName == undefined)
                    {
                        lastName = ' ';
                    } else {
                        lastName = cus.lastName;
                    }
                    if (cus.profilePicture == undefined)
                    {
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                    } else {
                        var profilePath = cus.profilePicture;
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                    }
                    template += CustomerdynamicTemplate.customer.CustomerDynamicList(cus);
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
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
                protocall.events.GlobalContainerScrollevent();


            } else {
                if (localStorage.LoginType == 'Representatives') {
                    data = RESPONSE.AGENCYLOGIN_DATA[0];
                    if (data == undefined) {
                        if (sessionStorage.loginType == "CarrierRepresentative") {
                            data = JSON.parse(localStorage.getItem("carrierRepData"));
                        } else {
                            data = JSON.parse(localStorage.getItem("representativeAgencyData"));
                        }
                    }
                    if (data.resultMap != null && data.resultMap != "") {
                        var template = '';
                        if (typeof (data.resultMap.CustomerTab) != "string") {
                            for (var c = 0; c < data.resultMap.CustomerTab.length; c++) {
                                var cus = data.resultMap.CustomerTab[c];
                                console.log("typeof the value is ", typeof (data.resultMap.CustomerTab));

                                try {
                                    if (cus.emailId.email == undefined) {
                                        cusEmail = ' ';
                                    } else {
                                        cusEmail = cus.emailId.email;
                                    }
                                } catch (e) {
                                    cusEmail = ' ';
                                }
                                if (cus.lastName == undefined)
                                {
                                    lastName = ' ';
                                } else {
                                    lastName = cus.lastName;
                                }
                                if (cus.profilePicture == undefined)
                                {
                                    profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                                } else {
                                    var profilePath = cus.profilePicture;
                                    profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                                }
                                template += CustomerdynamicTemplate.customer.CustomerDynamicList(cus);
                            }
                        } else {
                            template = "None of the customers were assigned to this representative by his admin";
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
                        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
                        protocall.events.GlobalContainerScrollevent();

                    }
                    $(".edit-cover-pic").css("display", "none");
                    $(".edit-agency-pic").css("display", "none");
                } else {

                    if (data.resultMap != null && data.resultMap != "") {
                        RESPONSE.customers_data[0] = data.resultMap.userTab;
                        RESPONSE.users[0] = data.resultMap.carrierTab;
                        var resultCustomer = data.resultMap.userTab;
                        var template = '';
                        for (var c = 0; c < resultCustomer.length; c++) {
                            var cus = resultCustomer[c];
                            if (cus.emailId == undefined) {
                                cusEmail = ' ';
                            } else {
                                cusEmail = cus.emailId.email;
                            }
                            if (cus.lastName == undefined)
                            {
                                lastName = ' ';
                            } else {
                                lastName = cus.lastName;
                            }
                            if (cus.profilePicture == undefined)
                            {
                                profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                            } else {
                                var profilePath = cus.profilePicture;
                                profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                            }
                            template += CustomerdynamicTemplate.customer.CustomerDynamicList(cus);
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
                        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
                        protocall.events.GlobalContainerScrollevent();
                        if (localStorage.LoginType == 'Representatives') {
                            $(".mb-submenu-in").empty();
                            $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap carriers p-relative f-color-green\" data-type=\"page\" data-submenu=\"customers\"><div class=\"\"><div class=\"sprite-im carriers-icon inline-block v-align-mid mr-space-10 \"> </div>"
                                    + "<span class=\"sub-menu-text inline-block v-align-mid\"> CUSTOMERS </span><span id=\"id-carrierpage-headertext\"></span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div>");
                            $(".carrier-mobile-icon").css("display", "none");
                            $(".customer-feed-label").css("display", "none");

                        }

                    }



                }
            }


            $(".carrier-img-width").addClass("spinner-loader");
            $(".carrier-img-width").css("width", "10px");
            $(".carrier-img-width").css("position", "relative");
            $(".carrier-img-width").css("height", "10px");
            $(".carrier-img-width").css("margin-top", "44%");

            $(".content-holder").removeClass("spinner1");
            $(".content-holder").css("opacity", "1");

            setTimeout(function () {
                $(".carrier-img-width").removeClass("spinner-loader");
                $(".carrier-img-width").css("width", "100%");
                $(".carrier-img-width").css("height", "100%");
                $(".carrier-img-width").css("margin-top", "0px");
                $(".carrier-img-width").fillBox();

            }, 1200);



        },
        loadcustomercontentSortedbyName: function (data, page) {


            if (data.resultMap != null && data.resultMap != "") {
                RESPONSE.customers_data[0] = data.resultMap.userTab;
                var resultCustomer = data.resultMap.ArrayOfUserDetails;
                var template = '';
                for (var c = 0; c < resultCustomer.length; c++) {
                    var cus = resultCustomer[c];
                    if (cus.emailId == undefined) {
                        cusEmail = ' ';
                    } else {
                        cusEmail = cus.emailId.email;
                    }
                    if (cus.lastName == undefined)
                    {
                        lastName = ' ';
                    } else {
                        lastName = cus.lastName;
                    }
                    if (cus.profilePicture == undefined)
                    {
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                    } else {
                        var profilePath = cus.profilePicture;
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                    }
                    template += CustomerdynamicTemplate.customer.CustomerDynamicList(cus);
                }
                var type = "Alphabetical";
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
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
                protocall.events.GlobalContainerScrollevent();

                $(".carrier-img-width").addClass("spinner-loader");
                $(".carrier-img-width").css("width", "10px");
                $(".carrier-img-width").css("position", "relative");
                $(".carrier-img-width").css("height", "10px");
                $(".carrier-img-width").css("margin-top", "44%");

                $(".content-holder").removeClass("spinner1");
                $(".content-holder").css("opacity", "1");

                setTimeout(function () {
                    $(".carrier-img-width").removeClass("spinner-loader");
                    $(".carrier-img-width").css("width", "100%");
                    $(".carrier-img-width").css("height", "100%");
                    $(".carrier-img-width").css("margin-top", "0px");
                    $(".carrier-img-width").fillBox();

                }, 1200);
            }
        },
        superadminagenciesDynamicList: function (cus) {

            if (cus.emailId.email == undefined) {
                cusEmail = ' ';
            } else {
                cusEmail = cus.emailId.email;
            }

            if (cus.agencyName == undefined)
            {
                agencyName = ' ';
            } else {
                agencyName = cus.agencyName;
            }
            if (cus.agencyLogo != undefined) {
                profilePicture = "https://proto-call-test.appspot.com/file/" + cus.agencyLogo;
            } else {
                profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
            }

            var phoneHtml = "";
            try {
                if (cus.customerRegistered != true) {
                    phoneHtml = "<div style='  float: left;'><span class=\"sprite-im carrier-mobile-icon\" style=\"display:none;position: absolute;top: 17px;left: 57%;margin-left: 10px;\">&nbsp;</span></div>";
                } else {
                    phoneHtml = "<div style='  float: left;  margin-top: 2px;'><a href=\"tel:" + cus.customerRegistered + "\"><div class=\"sprite-im carrier-mobile-icon\" style=\"position: relative;float:left;margin-right: -16px\">&nbsp;</div></a></div>";
                }
            } catch (err) {

            }

            var html = " <div class=\"parent-content-holder\"> <div class=\"topview p-relative\"> <div class=\"topview-leftcontent\">"
                    + "<img src=\"" + profilePicture + "\" alt=\"\" id=" + cusEmail + "  value=" + cus.agencyId + " class=\"carrier-img-width\" data-type=\"viewcustomerfeedview\" style='height:90px;'></div> <div class=\"topview-rightcontent\"> <div class=\"carrierid\" style=\"display:none;\">" + cus.agencyId + "</div>"
                    + "<div class=\"topview-rightcontentcarrier-name t-caps \" style=\"width: 165px;font-size: 17px;color: #3e3e3e;float:left;margin-right:5px;margin-bottom: 5px;\">" + cus.agencyName + "</div>" + phoneHtml
                    + "<div class=\"topview-rightcontentcarrier-location t-caps \" style=\"color: #3e3e3e;font-style: italic;clear:both;margin-bottom: 5px;\">" + cus.city + "</div> <div class=\"topview-rightcontentcarrier-email\"><a title=" + cusEmail + " href=\"mailto:" + cusEmail + "\">" + cusEmail + "</a></div> </div> <input type=\"checkbox\" class=\"getSelectedCustomers  p-absolute snap\" data-type=\"customersCheckBox\" value=" + cusEmail + " id=" + cusEmail + " > <label for=" + cusEmail + " class=\"customer-feed-label\" style=\"display:none;\"></label> </div> <div class=\"downview p-relative\">"
                    + "<div id=" + cusEmail + "  value=" + cus.agencyId + " class=\"carrier-view myagenciesView p-relative bg-color-green t-caps t-center opensans-light f-color-w snap\" data-type=\"viewagenciesfeedview\">view</div> </div> </div>";

            return html;
        },
        agenciesDynamicList: function (cus) {
            console.log("agency id", cus.agencyId);
            if (cus == undefined) {
                showAlertBox("There were no agency tie up with this carrier..!");
                var html = 'There were no agency tie up with this carrier..!';
                return html;
            } else {
                if (cus.emailId == undefined) {
                    cusEmail = ' ';
                } else {
                    cusEmail = cus.emailId.email;
                }

                if (cus.lastName == undefined)
                {
                    lastName = ' ';
                } else {
                    lastName = cus.lastName;
                }
                if (cus.agencyLogo != undefined) {
                    profilePicture = "https://proto-call-test.appspot.com/file/" + cus.agencyLogo;
                } else {
                    profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                }

                var phoneHtml = "";
                try {
                    if (cus.customerRegistered != true) {
                        phoneHtml = "<div style='  float: left;'><span class=\"sprite-im carrier-mobile-icon\" style=\"display:none;position: absolute;top: 17px;left: 57%;margin-left: 10px;\">&nbsp;</span></div>";
                    } else {
                        phoneHtml = "<div style='  float: left;  margin-top: 2px;'><a href=\"tel:" + cus.customerRegistered + "\"><div class=\"sprite-im carrier-mobile-icon\" style=\"position: relative;float:left;margin-right: -16px\">&nbsp;</div></a></div>";
                    }
                } catch (err) {

                }

                if (sessionStorage.getItem("SUBMENU") == "CARRIERS_AGENCY_PAGE") {
                    phoneHtml = "<div style='  float: left;'><span class=\"sprite-im carrier-mobile-icon\" style=\"display:none;position: absolute;top: 17px;left: 57%;margin-left: 10px;\">&nbsp;</span></div>";
                }
                //AGENICES_PAGE
                if (sessionStorage.getItem("SUBMENU") == "AGENICES_PAGE") {
                    phoneHtml = "<div style='  float: left;'><span class=\"sprite-im carrier-mobile-icon\" style=\"display:none;position: absolute;top: 17px;left: 57%;margin-left: 10px;\">&nbsp;</span></div>";
                }



                var html = " <div class=\"parent-content-holder\"> <div class=\"topview p-relative\"> <div class=\"topview-leftcontent\">"
                        + "<img src=" + profilePicture + " value=" + cus.agencyId + " class=\"carrier-img-width\" data-type=\"viewcustomerfeedview\" style='height:90px;'></div> <div class=\"topview-rightcontent\"> <div class=\"carrierid\" style=\"display:none;\">" + cus.agencyId + "</div>"
                        + "<div class=\"topview-rightcontentcarrier-name t-caps \" style=\"width: 165px;font-size: 17px;color: #3e3e3e;float:left;margin-right:5px;margin-bottom: 5px;\">" + cus.agencyName + "</div>" + phoneHtml
                        + "<div class=\"topview-rightcontentcarrier-location t-caps \" style=\"color: #3e3e3e;font-style: italic;clear:both;margin-bottom: 5px;\">" + cus.city + "</div> <div class=\"topview-rightcontentcarrier-email\"><a title=" + cusEmail + " href=\"mailto:" + cusEmail + "\">" + cusEmail + "</a></div> </div> <input type=\"checkbox\" class=\"getSelectedCustomers  p-absolute snap\" data-type=\"customersCheckBox\" value=" + cusEmail + " id=" + cusEmail + " > <label for=" + cusEmail + " class=\"customer-feed-label\" style=\"display:none;\"></label> </div> <div class=\"downview p-relative\">"
                        + "<div value=" + cus.agencyId + " class=\"carrier-view myagenciesView p-relative bg-color-green t-caps t-center opensans-light f-color-w snap\" data-type=\"viewagenciesfeedview\">view</div> </div> </div>";

                return html;
            }
        },
        CustomerDynamicList: function (cus) {
            var html = '';

            if (sessionStorage.loginType == 'SuperAdmin') {
                if (cus.profilePicture != undefined) {
                    profilePicture = "https://proto-call-test.appspot.com/file/" + cus.profilePicture;
                } else {
                    profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                }

                var phoneHtml = "";
                try {
                    if (cus.customerRegistered != true) {
                        phoneHtml = "<div style='  float: left;'><span class=\"sprite-im carrier-mobile-icon\" style=\"display:none;position: absolute;top: 17px;left: 57%;margin-left: 10px;\">&nbsp;</span></div>";
                    } else {
                        phoneHtml = "<div style='  float: left;  margin-top: 2px;'><a href=\"tel:" + cus.customerRegistered + "\"><div class=\"sprite-im carrier-mobile-icon\" style=\"position: relative;float:left;margin-right: -16px\">&nbsp;</div></a></div>";
                    }
                } catch (err) {

                }

                html = " <div class=\"parent-content-holder\"> <div class=\"topview p-relative\"> <div class=\"topview-leftcontent\">"
                        + "<img src=\"" + profilePicture + "\" alt=\"\" id=" + cusEmail + "  value=" + cus.carrierId + " class=\"carrier-img-width\" data-type=\"viewcustomerfeedview\" style='height:90px;'></div> <div class=\"topview-rightcontent\"> <div class=\"carrierid\" style=\"display:none;\">" + cus.carrierId + "</div>"
                        + "<div class=\"topview-rightcontentcarrier-name t-caps \" style=\"width: 165px;font-size: 17px;color: #3e3e3e;float:left;margin-right:5px;margin-bottom: 5px;\">" + cus.firstName + " " + cus.lastName + "</div>" + phoneHtml
                        + "<div class=\"topview-rightcontentcarrier-location t-caps \" style=\"color: #3e3e3e;font-style: italic;clear:both;margin-bottom: 5px;\">" + cus.residentialCity + "," + cus.residentialState + "</div> "
                        + "<div class=\"topview-rightcontentcarrier-email\"><a title=" + cusEmail + " href=\"mailto:" + cusEmail + "\">" + cusEmail + "</a></div> </div> <input type=\"checkbox\" class=\"getSelectedCustomers  p-absolute snap\" data-type=\"customersCheckBox\" value=" + cusEmail + " id='id" + cusEmail + "' > "
                        + "<label for='id" + cusEmail + "' class=\"customer-feed-label\" style=\"display:block;\"></label> </div> <div class=\"downview p-relative\">"
                        + "<div id=" + cusEmail + "  value=" + cus.carrierId + " class=\"carrier-view mycustomerView p-relative bg-color-green t-caps t-center opensans-light f-color-w snap\" data-type=\"viewcustomerfeedview\">view</div> </div> </div>";
            } else {
                if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                    if (localStorage.LoginType == 'Representatives') {
                        if (cus.profilePicture != undefined) {
                            profilePicture = "https://proto-call-test.appspot.com/file/" + cus.profilePicture;
                        } else {
                            profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                        }

                        var phoneHtml = "";
                        try {
                            if (cus.customerRegistered != true) {
                                phoneHtml = "<div style='  float: left;'><span class=\"sprite-im carrier-mobile-icon\" style=\"display:none;position: absolute;top: 17px;left: 57%;margin-left: 10px;\">&nbsp;</span></div>";
                            } else {
                                phoneHtml = "<div style='  float: left;  margin-top: 2px;'><a href=\"tel:" + cus.customerRegistered + "\"><div class=\"sprite-im carrier-mobile-icon\" style=\"position: relative;float:left;margin-right: -16px\">&nbsp;</div></a></div>";
                            }
                        } catch (err) {

                        }

                        html = " <div class=\"parent-content-holder\"> <div class=\"topview p-relative\"> <div class=\"topview-leftcontent\">"
                                + "<img src=\"" + profilePicture + "\" alt=\"\" id=" + cusEmail + "  value=" + cus.carrierId + " class=\"carrier-img-width\" data-type=\"viewcustomerfeedview\" style='height:90px;'></div> <div class=\"topview-rightcontent\"> <div class=\"carrierid\" style=\"display:none;\">" + cus.carrierId + "</div>"
                                + "<div class=\"topview-rightcontentcarrier-name t-caps \" style=\"width: 165px;font-size: 17px;color: #3e3e3e;float:left;margin-right:5px;margin-bottom: 5px;\">" + cus.firstName + " " + cus.lastName + "</div>" + phoneHtml
                                + "<div class=\"topview-rightcontentcarrier-location t-caps \" style=\"color: #3e3e3e;font-style: italic;clear:both;margin-bottom: 5px;\">" + cus.residentialCity + "," + cus.residentialState + "</div> "
                                + "<div class=\"topview-rightcontentcarrier-email\"><a title=" + cusEmail + "  href=\"mailto:" + cusEmail + "\">" + cusEmail + "</a></div> </div> <input type=\"checkbox\" class=\"getSelectedCustomers  p-absolute snap\" data-type=\"customersCheckBox\" value=" + cusEmail + " id='id" + cusEmail + "' > <label for='id" + cusEmail + "' class=\"customer-feed-label\" style=\"display:none;\"></label> </div> <div class=\"downview p-relative\">"
                                + "<div id=" + cusEmail + "  value=" + cus.carrierId + " class=\"carrier-view mycustomerView p-relative bg-color-green t-caps t-center opensans-light f-color-w snap\" data-type=\"viewcustomerfeedview\">view</div> </div> </div>";
                    }
                    if (localStorage.LoginType == 'Admin') {
                        if (cus.profilePicture != undefined) {
                            profilePicture = "https://proto-call-test.appspot.com/file/" + cus.profilePicture;
                        } else {
                            profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                        }

                        var phoneHtml = "";
                        try {
                            if (cus.customerRegistered != true) {
                                phoneHtml = "<div style='  float: left;'><span class=\"sprite-im carrier-mobile-icon\" style=\"display:none;position: absolute;top: 17px;left: 57%;margin-left: 10px;\">&nbsp;</span></div>";
                            } else {
                                phoneHtml = "<div style='  float: left;  margin-top: 2px;'><a href=\"tel:" + cus.customerRegistered + "\"><div class=\"sprite-im carrier-mobile-icon\" style=\"position: relative;float:left;margin-right: -16px\">&nbsp;</div></a></div>";
                            }
                        } catch (err) {

                        }

                        html = " <div class=\"parent-content-holder\"> <div class=\"topview p-relative\"> <div class=\"topview-leftcontent\">"
                                + "<img src=\"" + profilePicture + "\" alt=\"\" id=" + cusEmail + "  value=" + cus.carrierId + " class=\"carrier-img-width\" data-type=\"viewcustomerfeedview\"  style='height:90px;'></div> <div class=\"topview-rightcontent\"> <div class=\"carrierid\" style=\"display:none;\">" + cus.carrierId + "</div>"
                                + "<div class=\"topview-rightcontentcarrier-name t-caps \" style=\"width: 165px;font-size: 17px;color: #3e3e3e;float:left;margin-right:5px;margin-bottom: 5px;\">" + cus.firstName + " " + cus.lastName + "</div>" + phoneHtml
                                + "<div class=\"topview-rightcontentcarrier-location t-caps \" style=\"color: #3e3e3e;font-style: italic;clear:both;margin-bottom: 5px;\">" + cus.residentialCity + "," + cus.residentialState + "</div> "
                                + "<div class=\"topview-rightcontentcarrier-email\"><a title=" + cusEmail + "  href=\"mailto:" + cusEmail + "\">" + cusEmail + "</a></div> </div> <input type=\"checkbox\" class=\"getSelectedCustomers  p-absolute snap\" data-type=\"customersCheckBox\" value=" + cusEmail + " id='id" + cusEmail + "' > <label for='id" + cusEmail + "' class=\"customer-feed-label\" style=\"display:block;\"></label> </div> <div class=\"downview p-relative\">"
                                + "<div id=" + cusEmail + "  value=" + cus.carrierId + " class=\"carrier-view mycustomerView p-relative bg-color-green t-caps t-center opensans-light f-color-w snap\" data-type=\"viewcustomerfeedview\">view</div> </div> </div>";
                    }
                } else {
                    if (localStorage.LoginType == 'Admin') {
                        if (cus.profilePicture != undefined) {
                            profilePicture = "https://proto-call-test.appspot.com/file/" + cus.profilePicture;
                        } else {
                            profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                        }

                        var phoneHtml = "";
                        try {
                            if (cus.customerRegistered != true) {
                                phoneHtml = "<div style='  float: left;'><span class=\"sprite-im carrier-mobile-icon\" style=\"display:none;position: absolute;top: 17px;left: 57%;margin-left: 10px;\">&nbsp;</span></div>";
                            } else {
                                phoneHtml = "<div style='  float: left;  margin-top: 2px;'><a href=\"tel:" + cus.customerRegistered + "\"><div class=\"sprite-im carrier-mobile-icon\" style=\"position: relative;float:left;margin-right: -16px\">&nbsp;</div></a></div>";
                            }
                        } catch (err) {

                        }

                        html = " <div class=\"parent-content-holder\"> <div class=\"topview p-relative\"> <div class=\"topview-leftcontent\">"
                                + "<img src=\"" + profilePicture + "\" alt=\"\" id=" + cusEmail + "  value=" + cus.carrierId + " class=\"carrier-img-width\" data-type=\"viewcustomerfeedview\" style='height:90px;'></div> <div class=\"topview-rightcontent\"> <div class=\"carrierid\" style=\"display:none;\">" + cus.carrierId + "</div>"
                                + "<div class=\"topview-rightcontentcarrier-name t-caps \" style=\"width: 165px;font-size: 17px;color: #3e3e3e;float:left;margin-right:5px;margin-bottom: 5px;\">" + cus.firstName + " " + cus.lastName + "</div>" + phoneHtml
                                + "<div class=\"topview-rightcontentcarrier-location t-caps \" style=\"color: #3e3e3e;font-style: italic;clear:both;margin-bottom: 5px;\">" + cus.residentialCity + "," + cus.residentialState + "</div> "
                                + "<div class=\"topview-rightcontentcarrier-email\"><a title=" + cusEmail + "  href=\"mailto:" + cusEmail + "\">" + cusEmail + "</a></div> </div> <input type=\"checkbox\" class=\"getSelectedCustomers  p-absolute snap\" data-type=\"customersCheckBox\" value=" + cusEmail + " id='id" + cusEmail + "' > <label for='id" + cusEmail + "' class=\"customer-feed-label\" style=\"display:block;\"></label> </div> <div class=\"downview p-relative\">"
                                + "<div allowView='true' id=" + cusEmail + "  value=" + cus.carrierId + " class=\"carrier-view mycustomerView p-relative bg-color-green t-caps t-center opensans-light f-color-w snap\" data-type=\"viewcustomerfeedview\">view</div> </div> </div>";
                    } else {
                        if (cus.profilePicture != undefined) {
                            profilePicture = "https://proto-call-test.appspot.com/file/" + cus.profilePicture;
                        } else {
                            profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                        }

                        var phoneHtml = "";
                        try {
                            if (cus.customerRegistered != true) {
                                phoneHtml = "<div style='  float: left;'><span class=\"sprite-im carrier-mobile-icon\" style=\"display:none;position: absolute;top: 17px;left: 57%;margin-left: 10px;\">&nbsp;</span></div>";
                            } else {
                                phoneHtml = "<div style='  float: left;  margin-top: 2px;'><a href=\"tel:" + cus.customerRegistered + "\"><div class=\"sprite-im carrier-mobile-icon\" style=\"position: relative;float:left;margin-right: -16px\">&nbsp;</div></a></div>";
                            }
                        } catch (err) {

                        }

                        var allowView = true;

                        if (cus.allowView != undefined) {
                            allowView = cus.allowView;
                        }

                        html = " <div class=\"parent-content-holder\"> ";


                        if (allowView) {
                            html = html + "<div class=\"topview p-relative\"> <div class=\"topview-leftcontent\">"
                                    + "<img src=\"" + profilePicture + "\" alt=\"\" id=" + cusEmail + "  value=" + cus.carrierId + " class=\"carrier-img-width\" data-type=\"viewcustomerfeedview\" style='height:90px;'></div> <div class=\"topview-rightcontent\"> <div class=\"carrierid\" style=\"display:none;\">" + cus.carrierId + "</div>"
                                    + "<div class=\"topview-rightcontentcarrier-name t-caps \" style=\"width: 165px;font-size: 17px;color: #3e3e3e;float:left;margin-right:5px;margin-bottom: 5px;\">" + cus.firstName + "</div>" + phoneHtml
                                    + "<div class=\"topview-rightcontentcarrier-location t-caps \" style=\"color: #3e3e3e;font-style: italic;clear:both;margin-bottom: 5px;\">" + cus.residentialCity + "," + cus.residentialState + "</div> "
                                    + "<div class=\"topview-rightcontentcarrier-email\"><a title=" + cusEmail + "  href=\"mailto:" + cusEmail + "\">" + cusEmail + "</a></div> </div> <input type=\"checkbox\" class=\"getSelectedCustomers  p-absolute snap\" data-type=\"customersCheckBox\" value=" + cusEmail + " id='id" + cusEmail + "' > <label for='id" + cusEmail + "' class=\"customer-feed-label\" style=\"display:none;\"></label> </div> <div class=\"downview p-relative\">";
                            html = html + "<div data-allowview='true' id=" + cusEmail + "  value=" + cus.carrierId + " class=\"carrier-view mycustomerView p-relative bg-color-green t-caps t-center opensans-light f-color-w snap\" data-type=\"viewcustomerfeedview\">view</div> ";
                        } else {
                            html = html + "<div class=\"topview p-relative\" style='height: 128px;'> <div class=\"topview-leftcontent\" style='margin-top: 24px;'>"
                                    + "<img src=\"" + profilePicture + "\" alt=\"\" id=" + cusEmail + "  value=" + cus.carrierId + " class=\"carrier-img-width\" data-type=\"viewcustomerfeedview\" style='height:90px;'></div> <div class=\"topview-rightcontent\" style='margin-top: 24px;'> <div class=\"carrierid\" style=\"display:none;\">" + cus.carrierId + "</div>"
                                    + "<div class=\"topview-rightcontentcarrier-name t-caps \" style=\"width: 165px;font-size: 17px;color: #3e3e3e;float:left;margin-right:5px;margin-bottom: 5px;\">" + cus.firstName + "</div>" + phoneHtml
                                    + "<div class=\"topview-rightcontentcarrier-location t-caps \" style=\"color: #3e3e3e;font-style: italic;clear:both;margin-bottom: 5px;\">" + cus.residentialCity + "," + cus.residentialState + "</div> "
                                    + "<div class=\"topview-rightcontentcarrier-email\"><a title=" + cusEmail + "  href=\"mailto:" + cusEmail + "\">" + cusEmail + "</a></div> </div> <input type=\"checkbox\" class=\"getSelectedCustomers  p-absolute snap\" data-type=\"customersCheckBox\" value=" + cusEmail + " id='id" + cusEmail + "' > <label for='id" + cusEmail + "' class=\"customer-feed-label\" style=\"display:none;\"></label> </div> <div class=\"downview p-relative\">";
                        }
                        html = html + "</div> </div>";
                    }
                }

            }
            return html;

        },
        //For New Service Call
        loadCustomerDetailsForAgencyRole: function (customerData) {
            var template = '';
            console.log("customerData for agency", customerData);
            //Customer Tab Iteration
            $.each(customerData, function (index, customerDataValue) {
                console.log("customerDataValue", customerDataValue);
                if (customerDataValue.CustomerDetails != "undefined") {
                    template += CustomerdynamicTemplate.customer.customerDataToShow(customerDataValue.CustomerDetails);
                } else {
                    console.log("no customer details");
                }
            });


            if (sessionStorage.customersort == "true") {
                sessionStorage.customersort = "false";
                var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
                var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div>'
                        + '<div class="div-reloadpage">'
                        + '<div class="div-loadbutton"><span class="spinner-loadmore"></span><div class="loadmore-txt">Load More</div></div>'
                        + '<div class="div-gototop-button">Go to top</div></div></div>';
                var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
                $("#page").empty();
                totalHtml = header + content + footer;
                $("#page").append(totalHtml);

            } else {
                if (sessionStorage.hasLoadedNextPage == "false") {
                    var type = "Alphabetical";
                    var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
                    var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div>'
                            + '<div class="div-reloadpage">'
                            + '<div class="div-loadbutton"><span class="spinner-loadmore"></span><div class="loadmore-txt">Load More</div></div>'
                            + '<div class="div-gototop-button">Go to top</div></div></div>';
                    var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
                    $("#page").empty();
                    totalHtml = header + content + footer;
                    $("#page").append(totalHtml);
                } else {
                    $(".content-holder").append(template);
                }
            }
            


            $('.setProfilePic').fillBox();
            protocall.displaySpinner(false);
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
            protocall.events.GlobalContainerScrollevent();

            $(".carrier-img-width").addClass("spinner-loader");
            $(".carrier-img-width").css("width", "10px");
            $(".carrier-img-width").css("position", "relative");
            $(".carrier-img-width").css("height", "10px");
            $(".carrier-img-width").css("margin-top", "44%");

            $(".content-holder").removeClass("spinner1");
            $(".content-holder").css("opacity", "1");

            setTimeout(function () {
                $(".carrier-img-width").removeClass("spinner-loader");
                $(".carrier-img-width").css("width", "100%");
                $(".carrier-img-width").css("height", "100%");
                $(".carrier-img-width").css("margin-top", "0px");
                $(".carrier-img-width").fillBox();

            }, 1200);
            hideLoadingButton();
            protocall.events.containerScrollEvent();
        },
        customerDataToShow: function (customerDetail) {
            // if (localStorage.LoginType == 'Admin') {
            var cusEmail = "", userIDValue = "";
            if (customerDetail.userId == undefined) {
                userIDValue = ' ';
            } else {
                userIDValue = customerDetail.userId;
            }
            if (customerDetail.emailId == undefined) {
                cusEmail = ' ';
            } else {
                cusEmail = customerDetail.emailId.email;
            }
            if (customerDetail.profilePicture != undefined) {
                profilePicture = "https://proto-call-test.appspot.com/file/" + customerDetail.profilePicture;
            } else {
                profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
            }

            var phoneHtml = "";

            try {
                if (customerDetail.customerRegistered != true) {
                    phoneHtml = "<div style='  float: left;'><span class=\"sprite-im carrier-mobile-icon\" style=\"display:none;position: absolute;top: 17px;left: 57%;margin-left: 10px;\">&nbsp;</span></div>";
                } else {
                    phoneHtml = "<div style='  float: left;  margin-top: 2px;'><a href=\"tel:" + "customerDetail.phone.number" + "\"><div class=\"sprite-im carrier-mobile-icon\" style=\"position: relative;float:left;margin-right: -16px\">&nbsp;</div></a></div>";
                }
            } catch (err) {

            }

            //if (localStorage.LoginType == 'Admin') {
            html = " <div class=\"parent-content-holder\"> <div class=\"topview p-relative\"> <div class=\"topview-leftcontent\">"
                    + "<img src=\"" + profilePicture + "\" alt=\"\" id=" + cusEmail + "  value=" + customerDetail.carrierId + " class=\"carrier-img-width\" data-type=\"viewcustomerfeedview\" style='height:90px;'></div> <div class=\"topview-rightcontent\"> <div class=\"carrierid\" style=\"display:none;\">" + customerDetail.carrierId + "</div>"
                    + "<div class=\"topview-rightcontentcarrier-name t-caps \" style=\"width: 165px;font-size: 17px;color: #3e3e3e;float:left;margin-right:5px;margin-bottom: 5px;\">" + customerDetail.firstName + " " + customerDetail.lastName + "</div>" + phoneHtml
                    + "<div class=\"topview-rightcontentcarrier-location t-caps \" style=\"color: #3e3e3e;font-style: italic;clear:both;margin-bottom: 5px;\">" + customerDetail.residentialCity + "," + customerDetail.residentialState + "</div> "
                    + "<div class=\"topview-rightcontentcarrier-email\"><a title=" + cusEmail + "  href=\"mailto:" + cusEmail + "\">" + cusEmail + "</a></div> </div> <input type=\"checkbox\" class=\"getSelectedCustomers  p-absolute snap\" data-type=\"customersCheckBox\" value=" + userIDValue + " id=" + userIDValue + " > <label for=" + userIDValue + " class=\"customer-feed-label\" style=\"display:block;\"></label> </div> <div class=\"downview p-relative\">"
                    + "<div id=" + userIDValue + "  value=" + customerDetail.carrierId + " class=\"carrier-view mycustomerView p-relative bg-color-green t-caps t-center opensans-light f-color-w snap\" data-type=\"viewcustomerfeedview\">view</div> </div> </div>";
            /* } else {
             
             var isAllowView = customerDetail.isAllowView;
             var styleValue = "style='display:none;'";
             var topViewStyle = "style='padding:19px;'";
             if (isAllowView) {
             styleValue = "";
             topViewStyle = "";
             } else {
             topViewStyle = "style='padding:19px;'";
             styleValue = "style='display:none;'";
             }
             
             
             html = " <div class=\"parent-content-holder\"> <div class=\"topview p-relative\"  " + topViewStyle + "> <div class=\"topview-leftcontent\">"
             + "<img src=\"" + profilePicture + "\" alt=\"\" id=" + cusEmail + "  value=" + customerDetail.carrierId + " class=\"carrier-img-width\" data-type=\"viewcustomerfeedview\" style='height:90px;'></div> <div class=\"topview-rightcontent\"> <div class=\"carrierid\" style=\"display:none;\">" + customerDetail.carrierId + "</div>"
             + "<div class=\"topview-rightcontentcarrier-name t-caps \" style=\"width: 165px;font-size: 17px;color: #3e3e3e;float:left;margin-right:5px;margin-bottom: 5px;\">" + customerDetail.firstName + " " + customerDetail.lastName + "</div>" + phoneHtml
             + "<div class=\"topview-rightcontentcarrier-location t-caps \" style=\"color: #3e3e3e;font-style: italic;clear:both;margin-bottom: 5px;\">" + customerDetail.residentialCity + "," + customerDetail.residentialState + "</div> "
             + "<div class=\"topview-rightcontentcarrier-email\"><a title=" + cusEmail + "  href=\"mailto:" + cusEmail + "\">" + cusEmail + "</a></div> </div> <input type=\"checkbox\" class=\"getSelectedCustomers  p-absolute snap\" data-type=\"customersCheckBox\" value=" + userIDValue + " id=" + userIDValue + " > <label for=" + userIDValue + " class=\"customer-feed-label\" style=\"display:none;\"></label> </div> <div class=\"downview p-relative\">"
             + "<div id=" + userIDValue + "  value=" + customerDetail.carrierId + " class=\"carrier-view mycustomerView p-relative bg-color-green t-caps t-center opensans-light f-color-w snap\" data-type=\"viewcustomerfeedview\"  " + styleValue + ">view</div> </div> </div>";
             } */


            return html;
            // }
        }
    }
};

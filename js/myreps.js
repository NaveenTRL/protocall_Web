var MyrepsdynamicTemplate = {
    myreps: {
        MyrepsDynamicHeaderTemplate: function () {
            var Header = '<div class="m-width"> <div class="ctrl-blk"> <header class="w-pad"> <div class="logo-info-blk clr-fl p-relative"> <div class="lf-block left clr-fl header-left-panel"> <div class="leftblk-spacing"> <div style="width:100%;"> <div class="logo-container left"> <div class="logo-holder"> <img src="images/Logo.png" alt="" class="logo"/> </div></div><div class="left search-blk"> <form name="globalSearch" method="GET" action="#search" class="" onsubmit="event.preventDefault();"> <div style="width:100%;"> <div class="searchbox-border"> <input class="search-ip opensans-regular" type="search" name="" placeholder="Search"> </div></div></form> </div><div class="clear"> </div></div></div></div><div class="rg-block left p-relative"> <a href="/profile" id="profile" class="logged-user-info clr-fl snap" data-type="profile-link"> <div id="" class="left user-pic-box"> <img src="' + sessionStorage.profilePic + '" alt="Profile pic" class="setProfilePic"> </div><div class="left user-info"> <div class="opensans-regular text-ellipsis"> <span> Hi, </span> <span class="t-caps">' + sessionStorage.userFirstName + '</span> </div></div><div class="left sprite-im drop-down-icon user-drop-icon"> &nbsp; </div><div class="clear"> </div></a> </div></div></header> <div class="m-block p-relative"> <div class="clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="mb-menu bg-color-green clr-fl t-center t-upper"> <a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Home </span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w" data-type="page" data-page="carriers"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Carriers </span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Customers </span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> My Reps </span> </div></a> </div><div class="mb-submenu"><div class="mb-submenu-in p-relative"><div class="bcrum-lb-submenu clr-fl inline-block v-align-mid"><a href="#" class="snap left f-sz-16 ptsans-light myreps t-upper p-relative f-color-green" data-type="page" data-submenu="myreps"><div class="">'
                    + '<div class="sprite-im myreps-icon inline-block v-align-mid mr-space-10 ">&nbsp;</div><span class="sub-menu-text inline-block v-align-mid"> my reps</span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="myreps-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:53%;"><div class="tab-rb-submenu-in-block p-relative"><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortbyreps"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div><a href="/invitereps" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light invitereps p-relative" data-type="page"  data-submenu="invitereps" style="width:145px;"><div class="sprite-im invite-reps-icon inline-block tab-icon v-align-mid" style="display:block;margin-left: 9px;  margin-right: -17px;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid" style="margin-top:-4px;"> invite reps</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a><a href="/privacy" class="snap submenu-tab bg-color-green right f-sz-16 opensans-light privacy p-relative" data-type="page" data-submenu="privacy"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid"> privacy</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="agency-info p-relative clr-fl bg-color-dblue"> <a class="agency-details clr-fl snap" data-type="agency-link"> <div id="" class="left agency-pic-box p-relative"> <img src="' + sessionStorage.agencyLogo + '" alt="agency pic" class="setAgencyPic"> <div class="edit-cover-pic p-absolute anim-opacity"> &nbsp; </div><div class="edit-agency-pic p-absolute anim bg-color-red f-color-w snap" data-type="editAgencyPic"> <div class="p-relative t-center"> <div class="sprite-im mobile-icon inline-block v-align-mid"> &nbsp; </div><div class="inline-block f-sz-12 v-align-mid opensans-regular "> Edit </div></div></div></div><div class="left agency-name-details t-left anim"> <div class="opensans-regular text-ellipsis f-italic f-sz-17 agency-name t-caps"> ' + sessionStorage.agencyName + ' </div><div class="opensans-regular text-ellipsis f-italic agency-email"> ' + sessionStorage.agencyEmail + ' </div></div></a> </div></div></div></div>';
            return Header;
        },
        CarrierRepsDynamicList: function () {
            try {
                //var datares = "";
                // if ((RESPONSE.CARRIERAGENCYTOTALDETAILS).length != 0) {
                //datares = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
                //localStorage.setItem("carrireRepDetails", JSON.stringify(datares));
                //} else {
                //if (localStorage.LoginType == "Representatives") {
                //datares = JSON.parse(localStorage.getItem("carrierRepData"));
                //} else {
                //datares = JSON.parse(localStorage.getItem("customerDetailsValue"));
                //}

                /* if (datares == null) {
                 datares = JSON.parse(localStorage.getItem("customerDetailsValue"));
                 } */
                //}
                //if (datares.resultMap.repTab != null && datares.resultMap.repTab != "") {

                //var resultreps = datares.resultMap.repTab;
                var template = "", cusEmail = "", lastName = "", profilePicture = "";
                /*  var loopCount = 1;
                 for (var c = 0; c < CARRIER.REPDATA.length; c++) {
                 var rep = CARRIER.REPDATA[c];
                 try {
                 if (rep.carrierRepresentativeId.email == undefined) {
                 cusEmail = ' ';
                 } else {
                 cusEmail = rep.carrierRepresentativeId.email;
                 }
                 } catch (err) {
                 if (rep.emailId.email == undefined) {
                 cusEmail = ' ';
                 } else {
                 cusEmail = rep.emailId.email;
                 }
                 }
                 try {
                 if (rep.name == undefined)
                 {
                 lastName = ' ';
                 } else {
                 lastName = rep.name;
                 if (rep.lastName != undefined) {
                 lastName = rep.name + " " + rep.lastName;
                 }
                 //                            if (rep.lastName != "undefined") {
                 //                                lastName = rep.firstName + " " + rep.lastName;
                 //                            }
                 }
                 } catch (err) {
                 if (rep.name == undefined)
                 {
                 lastName = ' ';
                 } else {
                 lastName = rep.name;
                 if (rep.lastName != undefined) {
                 lastName = rep.name + " " + rep.lastName;
                 }
                 //                            if (rep.lastName != "undefined") {
                 //                                lastName = rep.firstName + " " + rep.lastName;
                 //                            }
                 }
                 }
                 
                 if (rep.profilePicture == undefined)
                 {
                 profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                 
                 } else {
                 var profilePath = rep.profilePicture;
                 profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                 }
                 //                    if (loopCount >= 3) {
                 //                        loopCount = 0;
                 //                        template += MyrepsdynamicTemplate.myreps.carrierRepstemplate(rep, true);
                 //                    } else {
                 template += MyrepsdynamicTemplate.myreps.carrierRepstemplate(rep, false);
                 //                    }
                 loopCount++;
                 } */
                $.each(CARRIER.REPDATA, function (index, rep) {
                    try {
                        if (rep.carrierRepresentativeId.email == undefined) {
                            cusEmail = ' ';
                        } else {
                            cusEmail = rep.carrierRepresentativeId.email;
                        }
                    } catch (err) {
                        if (rep.emailId.email == undefined) {
                            cusEmail = ' ';
                        } else {
                            cusEmail = rep.emailId.email;
                        }
                    }
                    try {
                        if (rep.name == undefined)
                        {
                            lastName = ' ';
                        } else {
                            lastName = rep.name;
                            if (rep.lastName != undefined) {
                                lastName = rep.name + " " + rep.lastName;
                            }
//                            if (rep.lastName != "undefined") {
//                                lastName = rep.firstName + " " + rep.lastName;
//                            }
                        }
                    } catch (err) {
                        if (rep.name == undefined)
                        {
                            lastName = ' ';
                        } else {
                            lastName = rep.name;
                            if (rep.lastName != undefined) {
                                lastName = rep.name + " " + rep.lastName;
                            }
                        }
                    }
                    if (rep.profilePicture == undefined)
                    {
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                    } else {
                        var profilePath = rep.profilePicture;
                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                    }
                    template += MyrepsdynamicTemplate.myreps.carrierRepstemplate(rep, false);
                });

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
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE);
                protocall.events.GlobalContainerScrollevent();
                protocall.displaySpinner(false);
                $(".content-holder").removeClass("spinner1");
                $(".content-holder").css("opacity", "1");
                if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                    $(".edit-cover-pic").css("display", "none");
                    $(".edit-agency-pic").css("display", "none");
                }

                $(".carrier-img-width").addClass("spinner-loader");
                $(".carrier-img-width").css("width", "10px");
                 $(".carrier-img-width").css("position", "relative");
                $(".carrier-img-width").css("height", "10px");
                $(".carrier-img-width").css("margin-top", "48%");
                $(".carrier-img-width").css("margin-left", "41%");
                setTimeout(function () {
                    $(".carrier-img-width").removeClass("spinner-loader");
                    $(".carrier-img-width").css("width", "100%");
                    $(".carrier-img-width").css("height", "100%");
                    $(".carrier-img-width").css("margin-top", "0px");
                    $(".carrier-img-width").css("margin-left", "0px");
                    $(".carrier-img-width").fillBox();

                }, 1200);

                //}
            } catch (e) {
                protocall.displaySpinner(false);
                $(".content-holder").removeClass("spinner1");
                $(".home").click();
                showAlertBox("There is some server error..!");


            }



        },
        carrierRepstemplate: function (rep, status) {
            console.log("vimeo", rep);
            var profilePicture, name, location, carrierAgencyRepresentativeId, cusEmail = "";
            if (rep.profilePicture != undefined) {
                profilePicture = "https://proto-call-test.appspot.com/file/" + rep.profilePicture;
            } else {
                profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
            }

            try {
                if (rep.emailId.email != undefined) {
                    cusEmail = rep.emailId.email;
                }
            } catch (err) {
                try {
                    if (rep.carrierRepresentativeId.email == undefined) {
                        cusEmail = "";
                    } else {
                        cusEmail = rep.carrierRepresentativeId.email;
                    }
                } catch (err) {
                    cusEmail = "";
                }
            }

            if (rep.name == undefined)
            {
                try {
                    name = rep.firstName;
                    if (rep.lastName != undefined) {
                        name = rep.firstName + " " + rep.lastName;
                    }
//                    if (rep.lastName != "undefined") {
//                        name = rep.firstName + " " + rep.lastName;
//                    }
                } catch (err) {
                    name = "";
                    // name = rep.firstName;
                }
            } else {
                name = rep.firstName;
                if (rep.lastName != undefined) {
                    name = rep.firstName + " " + rep.lastName;
                }
//                if (rep.lastName != "undefined") {
//                    name = rep.firstName + " " + rep.lastName;
//                }
            }

            if (rep.residentialCity != undefined && rep.residentialCity != "Undefined") {
                location = rep.residentialCity;
                if (rep.residentialState != undefined && rep.residentialState != "Undefined") {
                    location = rep.residentialCity + ", " + rep.residentialState;
                }
            } else {
                location = sessionStorage.residentialCity+", "+sessionStorage.residentialState;
            }
            if (location == "Undefined" || location == undefined) {
                location = sessionStorage.residentialCity+", "+sessionStorage.residentialState;
            }

//            try {
//                if (rep.residentialCity != undefined) {
//                    location = rep.residentialCity;
//                } else {
//                    try {
//                        location = rep.residentialCity;
//                    } catch (err) {
//                        location = "";
//                    }
//                }
//            } catch (err) {
//                if (rep.residentialCity != undefined) {
//                    location = rep.residentialCity;
//                } else {
//                    location = "";
//                }
//            }
            if (rep.phone != undefined) {
                var carrepId = rep.phone.number;
            } else {
                var carrepId = "";
            }


            var style = "";
            if (status == true) {
                style = "style=\"margin-right: 0px !important;\"";

            } else {
                style = "";
            }


            var htmlData = "";
            if (localStorage.LoginType == 'Representatives') {
                htmlData = '<div class="reps-feed-screen clr-fl left border-all p-relative" ' + style + '>'
                        + '<div class="reps-feed-info clr-fl p-relative"><div><div class="reps-feed-pic left ">'
                        + '<img src=' + profilePicture + ' alt="" class="carrier-img-width"></div>'
                        + '<div class="reps-profile-info-root">'
                        + '<div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">' + name + '</div>'
                        + '<div class="carrier-location t-caps">' + location + '</div><div class="carrier-email">'
                        + '<a title=' + cusEmail + ' href="mailto:' + cusEmail + '">' + cusEmail + '</a></div>'
                        + '<div class="carrier-id t-caps">#' + carrepId + '</div></div></div></div></div>'
                        + '<div style="  width: 100.5%;" id="' + cusEmail + '" class="Carrierreps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-viewCarrierRep">View</div>'
                        + '<div style="border-left: solid 1px white;display:none;" id="' + cusEmail + '"  class="Carrierreps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="" >Assign</div></div>';
            } else {
                htmlData = '<div class="reps-feed-screen clr-fl left border-all p-relative" ' + style + '>'
                        + '<div class="reps-feed-info clr-fl p-relative"><div><div class="reps-feed-pic left ">'
                        + '<img src=' + profilePicture + ' alt="" class="carrier-img-width"></div>'
                        + '<div class="reps-profile-info-root">'
                        + '<div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">' + name + '</div>'
                        + '<div class="carrier-location t-caps">' + location + '</div><div class="carrier-email">'
                        + '<a title=' + cusEmail + ' href="mailto:' + cusEmail + '">' + cusEmail + '</a></div>'
                        + '<div class="carrier-id t-caps">#' + carrepId + '</div></div></div></div></div>'
                        + '<div id="' + cusEmail + '" class="Carrierrepsfeedview p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-viewCarrierRep">View</div><div style="border-left: solid 1px white;" id="' + cusEmail + '"  class="Carrierreps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="">Assign</div></div>';
            }



            return htmlData;

        },
        MyrepsDynamicList: function (data) {
			var template = '';
            sessionStorage.isNextPageAllowed = data.resultMap.isNextPage;
            var resultreps = "";

            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (data.resultMap != null && data.resultMap != "") {
                    RESPONSE.myreps_data[0] = data.resultMap.repTab;
                    resultreps = data.resultMap.repTab;
                     CARRIER.REPDATA = data.resultMap.repTab;




                    if (resultreps != "No Representative under this carrier has privacy : off") {
                        var loopCount = 1;
                        for (var c = 0; c < resultreps.length; c++) {
                            var rep = resultreps[c];

                            try {
                                if (rep.emailId.email != undefined) {
                                    cusEmail = rep.emailId.email;
                                }
                            } catch (err) {
                                try {
                                    if (rep.carrierRepresentativeId.email == undefined) {
                                        cusEmail = "";
                                    } else {
                                        cusEmail = rep.carrierRepresentativeId.email;
                                    }
                                } catch (err) {
                                    cusEmail = "";
                                }
                            }


//                            
//                            try {
//                                if (rep.carrierRepresentativeId.email == undefined) {
//                                    if (rep.emailId.email == undefined) {
//                                        cusEmail = ' ';
//                                    } else {
//                                        cusEmail = rep.emailId.email;
//                                    }
//                                } else {
//                                    cusEmail = rep.carrierRepresentativeId.email;
//                                }
//                            } catch (err) {
//                            }
							 if (HOMEPAGERESPONSE.SEARCHAGENCYREP) {
								/* if(rep.emailId != undefined){
									requiredMailIdToCheck = rep.emailId.email;
								} else {
									requiredMailIdToCheck = cusEmail;
								} */
								if (HOMEPAGERESPONSE.REQUIREDUSEREMAILID == cusEmail) {
									if (rep.name == undefined)
										{
											lastName = ' ';
										} else {
											lastName = rep.name;
											if (rep.lastName != undefined) {
												lastName = rep.name + " " + rep.lastName;
											}
			//                            if (rep.lastName != "undefined") {
			//                                lastName = rep.firstName + " " + rep.lastName;
			//                            }
										}
										if (rep.profilePicture == undefined)
										{
											profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

										} else {
											var profilePath = rep.profilePicture;
											profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
										}

										template = MyrepsdynamicTemplate.myreps.carrierRepstemplate(rep, false);
										sessionStorage.SUBMENU = "CARRIER_REPS_PAGE";
										break;
								}
							 } else {
								 if (rep.name == undefined)
									{
										lastName = ' ';
									} else {
										lastName = rep.name;
										if (rep.lastName != undefined) {
											lastName = rep.name + " " + rep.lastName;
										}
		//                            if (rep.lastName != "undefined") {
		//                                lastName = rep.firstName + " " + rep.lastName;
		//                            }
									}
									if (rep.profilePicture == undefined)
									{
										profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

									} else {
										var profilePath = rep.profilePicture;
										profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
									}

									template += MyrepsdynamicTemplate.myreps.carrierRepstemplate(rep, false);
							 }
                        }
                        var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
                        var content = '<div class="container"> <div class="content-holder">' + template + '</div></div></div>'
                                + '<div class="div-reloadpage">'
                                + '<div class="div-loadbutton"><span class="spinner-loadmore"></span><div class="loadmore-txt">Load More</div></div>'
                                + '<div class="div-gototop-button">Go to top</div></div></div>';
						console.log("content value",content);
                        var footer = HomedynamicTemplate.home.HomeDynamicFooterTemplate();

                        $("#page").empty();
                        var totalHtml = header + content + footer;
						console.log("total html",totalHtml);
                        $("#page").append(totalHtml);
						if(CONSTANTS.SELECTALLSTATUS == false){
							$(".content-holder").addClass("spinner1").css({"opacity":"0.5 !important"});
						}
						/* if(sessionStorage.isSelectAllCompleted == "false"){
							$(".content-holder").addClass("spinner1").css({"opacity":"0.5 !important"});
						} */
                        $('.setProfilePic').fillBox();
                        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE);
                        protocall.events.GlobalContainerScrollevent();
                        protocall.displaySpinner(false);
                        /* $(".content-holder").removeClass("spinner1");
                        $(".content-holder").css("opacity", "1");
                        $(".carrierreps").click(); */
                        if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                            $(".edit-cover-pic").css("display", "none");
                            $(".edit-agency-pic").css("display", "none");
                        }
                        $(".carrier-img-width").addClass("spinner-loader");
                        $(".carrier-img-width").css("width", "10px");
                        $(".carrier-img-width").css("height", "10px");
                         $(".carrier-img-width").css("position", "relative");
                        $(".carrier-img-width").css("margin-top", "48%");
                        $(".carrier-img-width").css("margin-left", "41%");
                        setTimeout(function () {
                            $(".carrier-img-width").removeClass("spinner-loader");
                            $(".carrier-img-width").css("width", "100%");
                            $(".carrier-img-width").css("height", "100%");
                            $(".carrier-img-width").css("margin-top", "0px");
                            $(".carrier-img-width").css("margin-left", "0px");
                            $(".carrier-img-width").fillBox();

                        }, 1200); 
                    } else {
                        protocall.displaySpinner(false);
                        $(".home").click();
                        showAlertBox("No Representative under this carrier has privacy : off");
                        $(".content-holder").removeClass("spinner1");
                    }

                }
            } else {
                if (localStorage.LoginType == 'Admin') {



                    if (data.resultMap != null && data.resultMap != "") {
                        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {

                            if (localStorage.LoginType == 'Admin') {
                                RESPONSE.myreps_data[0] = data.resultMap.repTab;
                                AGENCY.REPDATA = data.resultMap.repTab;
                                resultreps = data.resultMap.repTab;
                            } else {
                                RESPONSE.myreps_data[0] = data.resultMap.repTab;
                                AGENCY.REPDATA = data.resultMap.repTab;
                                resultreps = data.resultMap.repTab;
                            }
                        }



                        var template = '';
                        var loopCount = 1;
                        for (var c = 0; c < resultreps.length; c++) {
                            var rep = resultreps[c];
                            if (HOMEPAGERESPONSE.SEARCHAGENCYREP) {
								if(rep.emailId != undefined){
									requiredMailIdToCheck = rep.emailId.email;
								} else {
									requiredMailIdToCheck = rep.agencyRepresentativeId.email;
								}
								if (HOMEPAGERESPONSE.REQUIREDUSEREMAILID == requiredMailIdToCheck) {
                                    if (rep.name == undefined)
                                    {
                                        lastName = ' ';
                                    } else {
                                        lastName = rep.name;
                                        if (rep.lastName != undefined) {
                                            lastName = rep.name + " " + rep.lastName;
                                        }
//                                    if (rep.lastName != "undefined") {
//                                        lastName = rep.firstName + " " + rep.lastName;
//                                    }
                                    }
                                    if (rep.profilePicture == undefined)
                                    {
                                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                                    } else {
                                        var profilePath = rep.profilePicture;
                                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                                    }
                                    template += MyrepsdynamicTemplate.myreps.RepsDynamicList(rep, false);
                                    break;
                                }
                            } else {
                                if (rep.name == undefined)
                                {
                                    lastName = ' ';
                                } else {
                                    lastName = rep.name;
                                    if (rep.lastName != undefined) {
                                        lastName = rep.name + " " + rep.lastName;
                                    }
//                                if (rep.lastName != "undefined") {
//                                    lastName = rep.firstName + " " + rep.lastName;
//                                }
                                }
                                if (rep.profilePicture == undefined)
                                {
                                    profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                                } else {
                                    var profilePath = rep.profilePicture;
                                    profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                                }
                                template += MyrepsdynamicTemplate.myreps.RepsDynamicList(rep, false);
                            }
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
						if(CONSTANTS.SELECTALLSTATUS == false){
							$(".content-holder").addClass("spinner1").css({"opacity":"0.5 !important"});
						}
						/* if(sessionStorage.isSelectAllCompleted == "false"){
							$(".content-holder").css({"opacity":"0.5 !important"});
						} */
                        $('.setProfilePic').fillBox();
                        protocall.displaySpinner(false);
                        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
                        protocall.events.GlobalContainerScrollevent();
                        if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                            $(".edit-cover-pic").css("display", "none");
                            $(".edit-agency-pic").css("display", "none");
                        }
                        $(".carrier-img-width").addClass("spinner-loader");
                        $(".carrier-img-width").css("width", "10px");
                        $(".carrier-img-width").css("height", "10px");
                        $(".carrier-img-width").css("margin-top", "48%");
                         $(".carrier-img-width").css("position", "relative");
                        $(".carrier-img-width").css("margin-left", "41%");
                        setTimeout(function () {
                            $(".carrier-img-width").removeClass("spinner-loader");
                            $(".carrier-img-width").css("width", "100%");
                            $(".carrier-img-width").css("height", "100%");
                            $(".carrier-img-width").css("margin-top", "0px");
                            $(".carrier-img-width").css("margin-left", "0px");
                            $(".carrier-img-width").fillBox();

                        }, 1200);
                    }
                } else {

                    if (data.resultMap != null && data.resultMap != "") {

                        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {

                            if (localStorage.LoginType == 'Admin') {
                                RESPONSE.myreps_data[0] = data.resultMap.MyRepTab;
                                resultreps = data.resultMap.MyRepTab;  AGENCY.REPDATA = data.resultMap.repTab;
                                
                            } else {
                                RESPONSE.myreps_data[0] = data.resultMap.repTab;
                                resultreps = data.resultMap.repTab;
  AGENCY.REPDATA = data.resultMap.repTab;
                            }
                        }


                        if (resultreps != "No Representative under this agency has privacy : off") {
                            var template = '';
                            var loopCount = 1;
                            for (var c = 0; c < resultreps.length; c++) {
                                var rep = resultreps[c];
                                if (HOMEPAGERESPONSE.SEARCHAGENCYREP) {
                                    if (HOMEPAGERESPONSE.REQUIREDUSEREMAILID == rep.agencyRepresentativeId.email) {
                                        if (rep.name == undefined)
                                        {
                                            lastName = ' ';
                                        } else {
                                            lastName = rep.name;
                                            if (rep.lastName != undefined) {
                                                lastName = rep.name + " " + rep.lastName;
                                            }
//                                    if (rep.lastName != "undefined") {
//                                        lastName = rep.firstName + " " + rep.lastName;
//                                    }
                                        }
                                        if (rep.profilePicture == undefined)
                                        {
                                            profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                                        } else {
                                            var profilePath = rep.profilePicture;
                                            profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                                        }
                                        template += MyrepsdynamicTemplate.myreps.RepsDynamicList(rep, false);
                                        break;
                                    }
                                } else {
                                    if (rep.name == undefined)
                                    {
                                        lastName = ' ';
                                    } else {
                                        lastName = rep.name;
                                        if (rep.lastName != undefined) {
                                            lastName = rep.name + " " + rep.lastName;
                                        }
//                                if (rep.lastName != "undefined") {
//                                    lastName = rep.firstName + " " + rep.lastName;
//                                }
                                    }
                                    if (rep.profilePicture == undefined)
                                    {
                                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                                    } else {
                                        var profilePath = rep.profilePicture;
                                        profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                                    }
                                    template += MyrepsdynamicTemplate.myreps.RepsDynamicList(rep, false);
                                }
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
							if(sessionStorage.isSelectAllCompleted == "false"){
								$(".content-holder").addClass("spinner1").css({"opacity":"0.5 !important"});
							}
                            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
                            protocall.events.GlobalContainerScrollevent();
                            if (localStorage.LoginType == 'Representatives') {             // alert("dd");
                                $(".edit-cover-pic").css("display", "none");
                                $(".edit-agency-pic").css("display", "none");
                            }
                            $(".carrier-img-width").addClass("spinner-loader");
                            $(".carrier-img-width").css("width", "10px");
                            $(".carrier-img-width").css("height", "10px");
                            $(".carrier-img-width").css("margin-top", "48%");
                            $(".carrier-img-width").css("margin-left", "41%");
                             $(".carrier-img-width").css("position", "relative");
                            setTimeout(function () {
                                $(".carrier-img-width").removeClass("spinner-loader");
                                $(".carrier-img-width").css("width", "100%");
                                $(".carrier-img-width").css("height", "100%");
                                $(".carrier-img-width").css("margin-top", "0px");
                                $(".carrier-img-width").css("margin-left", "0px");
                                $(".carrier-img-width").fillBox();

                            }, 1200);
                        } else {
                            protocall.displaySpinner(false);
                            $(".home").click();
                            showAlertBox("No Representative under this agency has privacy : off");
                            $(".content-holder").removeClass("spinner1");

                        }

                    }
                    $(".carrier-img-width").addClass("spinner-loader");
                    $(".carrier-img-width").css("width", "10px");
                    $(".carrier-img-width").css("height", "10px");
                     $(".carrier-img-width").css("position", "relative");
                    $(".carrier-img-width").css("margin-top", "48%");
                    $(".carrier-img-width").css("margin-left", "41%");
                    setTimeout(function () {
                        $(".carrier-img-width").removeClass("spinner-loader");
                        $(".carrier-img-width").css("width", "100%");
                        $(".carrier-img-width").css("height", "100%");
                        $(".carrier-img-width").css("margin-top", "0px");
                        $(".carrier-img-width").css("margin-left", "0px");
                        $(".carrier-img-width").fillBox();

                    }, 1200);
                }
            }

            protocall.events.containerScrollEvent();
//            protocall.events.containerScrollEvent();




        },
        MyrepsDynamicListSort: function (data) {
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (data.resultMap != null && data.resultMap != "") {
                    RESPONSE.myreps_data[0] = data.resultMap.repTab;
                    var resultreps = data.resultMap.ArrayOfCarriersDetails;
                    var template = '';
                    var loopCount = 1;
                    for (var c = 0; c < resultreps.length; c++) {
                        var rep = resultreps[c];

                        try {
                            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                                if (rep.carrierRepresentativeId.email == undefined) {
                                    cusEmail = ' ';
                                } else {
                                    cusEmail = rep.carrierRepresentativeId.email;
                                }
                            } else {
                                if (rep.agencyRepresentativeId.email == undefined) {
                                    cusEmail = ' ';
                                } else {
                                    cusEmail = rep.agencyRepresentativeId.email;
                                }
                            }

                        } catch (err) {
                            if (rep.emailId.email == undefined) {
                                cusEmail = ' ';
                            } else {
                                cusEmail = rep.emailId.email;
                            }
                        }
                        if (rep.name == undefined)
                        {
                            lastName = ' ';
                        } else {
                            lastName = rep.name;
                            if (rep.lastName != undefined) {
                                lastName = rep.name + " " + rep.lastName;
                            } //                            if (rep.lastName != "undefined") {
                            //                                lastName = rep.firstName + " " + rep.lastName;
//                            }
                        }
                        if (rep.profilePicture == undefined)
                        {
                            profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                        } else {
                            var profilePath = rep.profilePicture;
                            profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                        }
                        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                            template += MyrepsdynamicTemplate.myreps.carrierRepstemplate(rep, false);
                        } else {
                            template += MyrepsdynamicTemplate.myreps.RepsDynamicList(rep, false);
                        }

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
                    protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE);
                    protocall.events.GlobalContainerScrollevent();
                    $(".carrier-img-width").addClass("spinner-loader");
                    $(".carrier-img-width").css("width", "10px");
                    $(".carrier-img-width").css("height", "10px");
                     $(".carrier-img-width").css("position", "relative");
                    $(".carrier-img-width").css("margin-top", "48%");
                    $(".carrier-img-width").css("margin-left", "41%");
                    setTimeout(function () {
                        $(".carrier-img-width").removeClass("spinner-loader");
                        $(".carrier-img-width").css("width", "100%");
                        $(".carrier-img-width").css("height", "100%");
                        $(".carrier-img-width").css("margin-top", "0px");
                        $(".carrier-img-width").css("margin-left", "0px");
                        $(".carrier-img-width").fillBox();

                    }, 1200);
                }
            } else {
                if (data.resultMap != null && data.resultMap != "") {
                    RESPONSE.myreps_data[0] = data.resultMap.repTab;
                    var resultreps = data.resultMap.ArrayOfCarriersDetails;
                    var template = '';
                    var loopCount = 1;
                    for (var c = 0; c < resultreps.length; c++) {
                        var rep = resultreps[c];

                        try {
                            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                                if (rep.carrierRepresentativeId.email == undefined) {
                                    cusEmail = ' ';
                                } else {
                                    cusEmail = rep.carrierRepresentativeId.email;
                                }
                            } else {
                                if (rep.agencyRepresentativeId.email == undefined) {
                                    cusEmail = ' ';
                                } else {
                                    cusEmail = rep.agencyRepresentativeId.email;
                                }
                            }

                        } catch (err) {
                            if (rep.emailId.email == undefined) {
                                cusEmail = ' ';
                            } else {
                                cusEmail = rep.emailId.email;
                            }
                        }
                        if (rep.name == undefined)
                        {
                            lastName = ' ';
                        } else {
                            lastName = rep.name;
                            if (rep.lastName != undefined) {
                                lastName = rep.name + " " + rep.lastName;
                            } //                            if (rep.lastName != "undefined") {
                            //                                lastName = rep.firstName + " " + rep.lastName;
//                            }
                        }
                        if (rep.profilePicture == undefined)
                        {
                            profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";

                        } else {
                            var profilePath = rep.profilePicture;
                            profilePicture = "http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg";
                        }
                        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                            template += MyrepsdynamicTemplate.myreps.carrierRepstemplate(rep, false);
                        } else {
                            template += MyrepsdynamicTemplate.myreps.RepsDynamicList(rep, false);
                        }

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
                    protocall.setMenuSelection(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
                    protocall.events.GlobalContainerScrollevent();
                    $(".carrier-img-width").addClass("spinner-loader");
                    $(".carrier-img-width").css("width", "10px");
                    $(".carrier-img-width").css("height", "10px");
                    $(".carrier-img-width").css("margin-top", "48%");
                     $(".carrier-img-width").css("position", "relative");
                    $(".carrier-img-width").css("margin-left", "41%");
                    setTimeout(function () {
                        $(".carrier-img-width").removeClass("spinner-loader");
                        $(".carrier-img-width").css("width", "100%");
                        $(".carrier-img-width").css("height", "100%");
                        $(".carrier-img-width").css("margin-top", "0px");
                        $(".carrier-img-width").css("margin-left", "0px");
                        $(".carrier-img-width").fillBox();

                    }, 1200);
                }
            }


        },
        CarrierRepsviewSubmenu: function () {
            var Submenu = "", myRepsValue = "";
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                myRepsValue = "carrierreps";
            } else {
                myRepsValue = "myreps";
            }
            if (localStorage.LoginType == 'Representatives') {
                Submenu = '<div class="bcrum-lb-submenu clr-fl inline-block v-align-mid"><a href="#" class="snap left f-sz-16 ptsans-light carrierreps p-relative f-color-green" data-type="page" data-submenu=' + myRepsValue + '><div class=""><div class="sprite-im myreps-icon inline-block v-align-mid mr-space-10 ">&nbsp;</div><span class="sub-menu-text inline-block v-align-mid  t-upper"> My Reps</span><span id="id-customers-headername">  </span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="customers-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:53%;"><div class="tab-rb-submenu-in-block p-relative"><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortbycustomer"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div>'
                        + '<a href="#" id="' + localStorage.getItem("CARRIERADMIN_MYREPID") + '"  class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light  p-relative" data-type="page" data-submenu="dt-assigncustomer" style="display:none;"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid" > assign Customers</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a><a href="/pushmessage" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light pushmessage p-relative" data-type="page" data-submenu="pushmessage" style="display: none;"><div class="sprite-im message-icon inline-block tab-icon v-align-mid" style="display:block;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid" style="margin-top:0px;display:none;"> push message</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a>'
                        + '<a href="/edit" id="idcarrierownerrepedit" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light  p-relative" data-type="page" data-submenu="carrierownerrepedit" style="display:none;"><div class="sprite-im  inline-block edit-icon v-align-mid" style="display:block;  float: left;  margin-right: 10px;  margin-top: 10px">&nbsp;</div><div id="id_carrierrep_editsave" class="submenu-title t-caps inline-block f-color-w v-align-mid " style="  margin-left: -25px;margin-top:-4px;"> edit</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a></div></div>';
            } else {
                Submenu = '<div class="bcrum-lb-submenu clr-fl inline-block v-align-mid"><a href="#" class="snap left f-sz-16 ptsans-light carrierreps p-relative f-color-green" data-type="page" data-submenu=' + myRepsValue + '><div class=""><div class="sprite-im myreps-icon inline-block v-align-mid mr-space-10 ">&nbsp;</div><span class="sub-menu-text inline-block v-align-mid  t-upper"> My Reps</span><span id="id-customers-headername">  </span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="customers-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:53%;display:inline-block;"><div class="tab-rb-submenu-in-block p-relative"><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortbycustomer" style="display:none;"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div>'
                        + '<a href="#" id="' + localStorage.getItem("CARRIERADMIN_MYREPID") + '"  class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light  p-relative" data-type="page" data-submenu="dt-assigncustomer" style=""><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid" > assign Customers</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a><a href="/pushmessage" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light pushmessage p-relative" data-type="page" data-submenu="pushmessage" style="display: none;"><div class="sprite-im message-icon inline-block tab-icon v-align-mid" style="display:block;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid" style="margin-top:0px;display:none;"> push message</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a>'
                        + '<a href="/edit" id="idcarrierownerrepedit" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light  p-relative" data-type="page" data-submenu="carrierownerrepedit"><div class="sprite-im  inline-block edit-icon v-align-mid" style="display:block;  float: left;  margin-right: 10px;  margin-top: 10px">&nbsp;</div><div id="id_carrierrep_editsave" class="submenu-title t-caps inline-block f-color-w v-align-mid " style="  margin-left: -25px;margin-top:-4px;"> edit</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a></div></div>';
            }

            return Submenu;
        },
        RepsDynamicList: function (rep, status) {


            if (localStorage.LoginType == 'Admin') {
                var profilePicture, name, location, agencyRepresentativeId, carrierAgencyRepresentativeId = "";
                if (rep.profilePicture != undefined) {
                    profilePicture = "https://proto-call-test.appspot.com/file/" + rep.profilePicture;
                } else {
                    profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                }

                if (rep.name != undefined) {
                    name = rep.name;
                    if (rep.lastName != undefined) {
                        name = rep.name + " " + rep.lastName;
                    }
                    //                if (rep.lastName != "undefined") {
                    //                    name = rep.firstName + " " + rep.lastName;
//                }
                } else {
                    try {
                        name = rep.firstName;
                        if (rep.lastName != undefined) {
                            name = rep.firstName + " " + rep.lastName;
                        }
                        //                    if (rep.lastName != "undefined") {
                        //                        name = rep.firstName + " " + rep.lastName;
//                    }
                    } catch (err) {
                        name = "";
                    }
                }
                if (rep.residentialCity != undefined && rep.residentialCity != "Undefined") {
                    location = rep.residentialCity;
                    if (rep.residentialState != undefined && rep.residentialState != "Undefined") {
                        location = rep.residentialCity + ", " + rep.residentialState;
                    }
                } else {
                    location = sessionStorage.residentialCity+", "+sessionStorage.residentialState;
                }
                if (location == "Undefined" || location == undefined) {
                    location = sessionStorage.residentialCity+", "+sessionStorage.residentialState;
                }



                try {
                    if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                        try {
                            if (rep.emailId.email != undefined) {
                                agencyRepresentativeId = rep.emailId.email;
                            }
                        } catch (err) {
                            try {
                                if (rep.carrierRepresentativeId.email == undefined) {
                                    agencyRepresentativeId = "";
                                } else {
                                    agencyRepresentativeId = rep.carrierRepresentativeId.email;
                                }
                            } catch (err) {
                                agencyRepresentativeId = "";
                            }
                        }

                    } else {


                        try {
                            if (rep.emailId.email != undefined) {
                                agencyRepresentativeId = rep.emailId.email;
                            }
                        } catch (err) {
                            try {
                                if (rep.agencyRepresentativeId.email == undefined) {
                                    agencyRepresentativeId = "";
                                } else {
                                    agencyRepresentativeId = rep.agencyRepresentativeId.email;
                                }
                            } catch (err) {
                                agencyRepresentativeId = "";
                            }
                        }
                    }

                } catch (err) {
                }

                try {
                    if (rep.phone != undefined) {
                        carrierAgencyRepresentativeId = rep.phone.number;
                    } else {
                        carrierAgencyRepresentativeId = "";
                    }
                } catch (err) {
                    carrierAgencyRepresentativeId = "";
                }


                var style = "";

                if (status == true) {
                    style = "style=\"margin-right: 0px !important;\"";
                } else {
                    style = "";
                }
                if (location == "Undefined" || location == undefined) {
                   location = sessionStorage.residentialCity+", "+sessionStorage.residentialState;
                }
                console.log("hjadsgfhg", name + "" + location + "" + carrierAgencyRepresentativeId);

                htmlData = '<div class="reps-feed-screen clr-fl left border-all p-relative" ' + style + '>'
                        + '<div class="reps-feed-info clr-fl p-relative"><div><div class="reps-feed-pic left ">'
                        + '<img src=' + profilePicture + ' alt="" class="carrier-img-width"></div>'
                        + '<div class="reps-profile-info-root">'
                        + '<div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">' + name + '</div>'
                        + '<div class="carrier-location t-caps">' + location + '</div><div class="carrier-email">'
                        + '<a title=' + agencyRepresentativeId + ' href="mailto:' + agencyRepresentativeId + '">' + agencyRepresentativeId + '</a></div>'
                        + '<div class="carrier-id t-caps">#' + carrierAgencyRepresentativeId + '</div></div></div></div></div>'
                        + '<div id="' + agencyRepresentativeId + '" class="Carrierreps-feed-view-base-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-agencyrepview">View</div>'
                        + '<div style="border-left: solid 1px white;" id="' + agencyRepresentativeId + '"  '
                        + 'class="Carrierreps-feed-view-base p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="">Assign</div>';

//                var htmlData = '<div class="reps-feed-screen clr-fl left border-all p-relative" ' + style + '>'
//                        + '<div class="reps-feed-info clr-fl p-relative"><div><div class="reps-feed-pic left ">'
//                        + '<img src=' + profilePicture + ' alt="" class="carrier-img-width"></div>'
//                        + '<div class="reps-profile-info-root">'
//                        + '<div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">' + name + '</div>'
//                        + '<div class="carrier-location t-caps">' + location + '</div><div class="carrier-email">'
//                        + '<a title=' + agencyRepresentativeId + ' href="mailto:' + agencyRepresentativeId + '">' + agencyRepresentativeId + '</a></div>'
//                        + '<div class="carrier-location t-caps">' + carrierAgencyRepresentativeId + '</div></div></div></div></div>';
//                if (localStorage.LoginType == 'Admin') {
//                    htmlData = htmlData + '<div id=' + agencyRepresentativeId + '  class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-assigncustomer">assign customer</div>';
//                } else {
//                    htmlData = htmlData + '<div id=' + agencyRepresentativeId + '  class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-agencyrepview">View</div>';
//                }

                htmlData = htmlData + '</div>';
            } else {
                var profilePicture, name, location, agencyRepresentativeId, carrierAgencyRepresentativeId = "";
                if (rep.profilePicture != undefined) {
                    profilePicture = "https://proto-call-test.appspot.com/file/" + rep.profilePicture;
                } else {
                    profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                }

                if (rep.firstName != undefined) {
                    name = rep.firstName;
                    if (rep.lastName != undefined) {
                        name = rep.firstName + " " + rep.lastName;
                    }
//                if (rep.lastName != "undefined") {
                    //                    name = rep.firstName + " " + rep.lastName;
                    //                }
                } else {
                    try {
                        name = rep.firstName;
                        if (rep.lastName != undefined) {
                            name = rep.firstName + " " + rep.lastName;
                        }
                        //                    if (rep.lastName != "undefined") {
//                        name = rep.firstName + " " + rep.lastName; //                    }
                    } catch (err) {
                        name = "";
                    }
                }
                if (rep.residentialCity != undefined && rep.residentialCity != "Undefined") {
                    location = rep.residentialCity;
                    if (rep.residentialState != undefined && rep.residentialState != "Undefined") {
                        location = rep.residentialCity + ", " + rep.residentialState;
                    }
                } else {
                    location = sessionStorage.residentialCity+", "+sessionStorage.residentialState;
                }
                if (location == "Undefined" || location == undefined) {
                    location = sessionStorage.residentialCity+", "+sessionStorage.residentialState;
                }
                try {
                    if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                        if (rep.carrierRepresentativeId.email != undefined) {
                            agencyRepresentativeId = rep.carrierRepresentativeId.email;
                        } else {
                            agencyRepresentativeId = "";
                        }
                    } else {


                        try {
                            if (rep.emailId.email != undefined) {
                                agencyRepresentativeId = rep.emailId.email;
                            }
                        } catch (err) {
                            try {
                                if (rep.agencyRepresentativeId.email == undefined) {
                                    agencyRepresentativeId = "";
                                } else {
                                    agencyRepresentativeId = rep.agencyRepresentativeId.email;
                                }
                            } catch (err) {
                                agencyRepresentativeId = "";
                            }
                        }
                    }

                } catch (err) {
                }

                try {
                    if (rep.phone != undefined) {
                        carrierAgencyRepresentativeId = rep.phone.number;
                    } else {
                        carrierAgencyRepresentativeId = "";
                    }
                } catch (err) {
                    carrierAgencyRepresentativeId = "";
                }

                var style = "";

                if (status == true) {
                    style = "style=\"margin-right: 0px !important;\"";
                } else {
                    style = "";
                }
                if (location == "Undefined" || location == undefined) {
                    location = sessionStorage.residentialCity+", "+sessionStorage.residentialState;
                }
                console.log("hjadsgfhg", name + "" + location + "" + carrierAgencyRepresentativeId);
                var htmlData = '<div class="reps-feed-screen clr-fl left border-all p-relative" ' + style + '>'
                        + '<div class="reps-feed-info clr-fl p-relative"><div><div class="reps-feed-pic left ">'
                        + '<img src=' + profilePicture + ' alt="" class="carrier-img-width"></div>'
                        + '<div class="reps-profile-info-root">'
                        + '<div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">' + name + '</div>'
                        + '<div class="carrier-location t-caps">' + location + '</div><div class="carrier-email">'
                        + '<a title=' + agencyRepresentativeId + ' href="mailto:' + agencyRepresentativeId + '">' + agencyRepresentativeId + '</a></div>'
                        + '<div class="carrier-location t-caps">' + carrierAgencyRepresentativeId + '</div></div></div></div></div>';
                if (localStorage.LoginType == 'Admin') {
                    htmlData = htmlData + '<div id=' + agencyRepresentativeId + '  class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-assigncustomer">assign customer</div>';
                } else {
                    htmlData = htmlData + '<div id=' + agencyRepresentativeId + '  class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-agencyrepview">View</div>';
                }

                htmlData = htmlData + '</div>';
            }
            //RepresentativeDetails
            console.log("my resp data", rep);


            return htmlData;

        }

    }
};

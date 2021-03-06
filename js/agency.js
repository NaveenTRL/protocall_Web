var AgencydynamicTemplate = {
    agency: {
        agencyDynamicHeaderTemplate: function () {
            var Header = '<div class="m-width"> <div class="ctrl-blk"> <header class="w-pad"> <div class="logo-info-blk clr-fl p-relative"> <div class="lf-block left clr-fl header-left-panel"> <div class="leftblk-spacing"> <div style="width:100%;"> <div class="logo-container left"> <div class="logo-holder"> <img src="images/Logo.png" alt="" class="logo"/> </div></div><div class="left search-blk"> <form name="globalSearch" method="GET" action="#search" class="" onsubmit="event.preventDefault();"> <div style="width:100%;"> <div class="searchbox-border"> <input class="search-ip opensans-regular" type="search" name="" placeholder="Search"> </div></div></form> </div><div class="clear"> </div></div></div></div><div class="rg-block left p-relative"> <a href="/profile" id="profile" class="logged-user-info clr-fl snap" data-type="profile-link"> <div id="" class="left user-pic-box"> <img src="' + sessionStorage.profilePic + '" alt="Profile pic" class="setProfilePic"> </div><div class="left user-info"> <div class="opensans-regular text-ellipsis"> <span> Hi, </span> <span class="t-caps">' + sessionStorage.agencyName + ' </span> </div></div><div class="left sprite-im drop-down-icon user-drop-icon"> &nbsp; </div><div class="clear"> </div></a> </div></div></header> <div class="m-block p-relative"> <div class="clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="mb-menu bg-color-green clr-fl t-center t-upper"> <a href="/home" class="snap menu-box left f-sz-18 ptsans-light home p-relative f-color-w" data-type="page" data-page="home"> <div class="menu-center"> <div class="sprite-im home-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Home </span> </div></a> <a href="/carriers" class="snap menu-box left f-sz-18 ptsans-light carriers p-relative f-color-w selected-tab" data-type="page" data-page="carriers"> <div class="menu-center"> <div class="sprite-im carriers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Carriers </span> </div></a> <a href="/customers" class="snap menu-box left f-sz-18 ptsans-light customers p-relative f-color-w" data-type="page" data-page="customers"> <div class="menu-center"> <div class="sprite-im customers-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> Customers </span> </div></a> <a href="/myreps" class="snap menu-box left f-sz-18 ptsans-light myreps p-relative f-color-w" data-type="page" data-page="myreps"> <div class="menu-center"> <div class="sprite-im myreps-icon menu-icon"> &nbsp; </div><span class="menu-text t-caps"> My Reps </span> </div></a> </div><div class="mb-submenu"><div class="mb-submenu-in p-relative"><div class="bcrum-lb-submenu clr-fl inline-block v-align-mid"><a href="#" class="carrier-headerbox snap left f-sz-16 ptsans-light carriers p-relative f-color-green" data-type="page" data-submenu="carriers"><div class="">'
                    + '<div class="sprite-im carriers-icon inline-block v-align-mid mr-space-10 ">&nbsp;</div>'
                    + '<span class="sub-menu-text inline-block v-align-mid  t-upper"> carriers</span><span id="id-carrierpage-headertext"></span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="carriers-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:53%;"><div class="tab-rb-submenu-in-block p-relative"><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortbycarrier"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="agency-info p-relative clr-fl bg-color-dblue"> <a class="agency-details clr-fl snap" data-type="agency-link"> <div id="" class="left agency-pic-box p-relative"> <img src="' + sessionStorage.agencyLogo + '" alt="agency pic" class="setAgencyPic"> <div class="edit-cover-pic p-absolute anim-opacity"> &nbsp; </div><div class="edit-agency-pic p-absolute anim bg-color-red f-color-w snap" data-type="editAgencyPic"> <div class="p-relative t-center"> <div class="sprite-im mobile-icon inline-block v-align-mid"> &nbsp; </div><div class="inline-block f-sz-12 v-align-mid opensans-regular "> Edit </div></div></div></div><div class="left agency-name-details t-left anim"> <div class="opensans-regular text-ellipsis f-italic f-sz-17 agency-name t-caps"> ' + sessionStorage.agencyName + ' </div><div class="opensans-regular text-ellipsis f-italic agency-email"> ' + sessionStorage.agencyEmail + ' </div></div></a> </div></div></div></div>';

            return Header;
        },
        agencyDetailViewTemplate: function () {
            var dataq = "";
			dataq = RESPONSE.AGENCYLOGIN_DATA[0];
			if(dataq == undefined){
				dataq = JSON.parse(localStorage.getItem("representativeAgencyData"));
			}
            var viewdata = dataq.resultMap.AgencyDetails;
            var html = "";
            var address2 = "";
            var address = "";
            
            if (viewdata.address2 != undefined) {
                address2 = viewdata.address2;
            }
            if (viewdata.address != undefined) {
                address = viewdata.address;
            }

            if (address2 == "undefined") {
                address2 = "";
            }
            if (address == "undefined") {
                address = "";
            }
            html += '<div class="carrier-view-parent bg-color-white p-relative"> <div class="carrier-view-leftbloack inline-block v-align-mid p-relative"> <div class="carrier-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-caps">AGENCY ID :</div> <div class="carrier-view-id inline-block">' + viewdata.agencyId + '</div> </div> <div class="carrier-logo-view p-relative"> <div class="carrierlogo-viewpic"> <img src="' + HOMEPAGERESPONSE.PROFILEAPI + viewdata.agencyLogo + '" alt="" class="carrier-img-width"> </div> </div> <div class="carrier-view-social p-relative clr-fr"> <div class="carrier-view-website p-relative left bg-color-green" style="cursor:pointer;"  onClick="window.open(\''+viewdata.website.value+'\',\'_newtab\');"> <div class="p-relative inline-block v-align-top" style="margin-left: 11%;"> <div class="sprite-im pop-out" >&nbsp;</div> </div> <div class="carrier-website-name inline-block t-caps opensans-light "><a target="_blank" class="f-color-w" href="' + viewdata.website.value + '" target="_blank">WEBSITE</a></div> </div> <div class="carrier-view-facebook p-relative left bg-color-green" style="cursor:pointer;"  onClick="window.open(\''+viewdata.facebookPage+'\',\'_newtab\');"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out" style="  margin-left: 30px;">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-light f-color-w"><a class="f-color-w" href="\' + viewdata.facebookPage + \'" target="_blank">FACEBOOK</a></div> </div> </div> </div> <div class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">agency name</div> <div class="carrier-left-content t-left right ">' + viewdata.agencyName + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                    + '<div class="carrier-left-content t-left right">' + address + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> '
                    + '<div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right ">' + address2 + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div class="carrier-left-content t-left right">' + viewdata.state + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div class="carrier-left-content t-left right ">' + viewdata.city + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right"><a href="tel:' + viewdata.phone.number + '">' + viewdata.phone.number + '</a></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div class="carrier-left-content t-left right ">' + viewdata.zipcode + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">email</div> '
                    + '<div class="carrier-left-content t-left right"><a title=' + viewdata.emailId.email + '  href="mailto:' + viewdata.emailId.email + '">' + viewdata.emailId.email + '</a></div> </div> </div> </div> </div> </div> </div> '
            var dropDownContent = '<div class="associated-carrierview p-relative"> <div id="id-associatedropdown-parent" class="p-relative "  style="width: 238px;  margin-bottom: 10px;">'
                    + '<div id="id-associatedropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED CUSTOMERS</div> '
                    + '<div id="associatedownarrow" class="p-relative inline-block" style="display:none;"> <div id="associatedownarrow" class="id-associatedownarrow sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                    + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot">';

            for (var index = 0; index < dataq.resultMap.AssociatedCustomerDetails.length; index++) {

                var name = dataq.resultMap.AssociatedCustomerDetails[index].firstName;
                var location = dataq.resultMap.AssociatedCustomerDetails[index].residentialCity + "," + dataq.resultMap.AssociatedCustomerDetails[index].residentialState;
                var email = dataq.resultMap.AssociatedCustomerDetails[index].emailId.email;
                var carrierid = dataq.resultMap.AssociatedCustomerDetails[index].carrierId;
                var image = dataq.resultMap.AssociatedCustomerDetails[index].profilePicture;
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
                }//rep id

                var associateBlock = '<div id=' + carrierid + '  class="carrier-feed-associated-view  left p-relative" data-type=""> <div class=" p-relative"> <div class="associated-background p-relative">'
                        + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                        + 'alt="" class="carrier-img-width   spinner-loader "> '
                        + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                        + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                        + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                        + '<div class="carrier-location t-caps t-left"><a title=' + email + '  href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div> ';

                dropDownContent += associateBlock;
            }

            html = html + dropDownContent;

            $(".mb-submenu-in").empty();
            $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light carriers t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers\"><div class=\"\"><div class=\"sprite-im carriers-icon inline-block v-align-mid mr-space-10 \"> </div><span class=\"sub-menu-text inline-block v-align-mid\"> AGENCY</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div>")
            $(".container").addClass("container-maxwidth");
            $(".rel-feeds-content").empty();

            html = html + "</div>";
            $(".rel-feeds-content").append($(html));
            $(".content-holder").empty();
            $(".content-holder").append($(html));
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCY_PAGE);
             $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");

        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "10px");
            $(".associated-carrier-pic").css("height", "63px");
             $(".carrier-img-width").removeClass("spinner-loader");
        }, 1200);

            var Omega = '\u003E';
            $("#id-carrierpage-headertext").text(Omega + "   " + viewdata.carrierName);
            $('#id-carrierpage-headertext').prop('title', Omega + "   " + viewdata.carrierName);
            $(".content-holder").removeClass("spinner1");
            protocall.events.GlobalContainerScrollevent();
        }
    }};
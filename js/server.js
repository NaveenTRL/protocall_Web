var utils = {
};
var RESPONSE_ARRAY = [];
var ASSIGNTOCUSOVERLAY_REPEMAILID = "";
var IsRepTabSelected = false;
var doneTypingInterval = 250;
utils.server = {
    authendicate: function () {



    },
    makeServerCall: function (page, data, callback, deepPath) {
        console.log("make server call");
        //console.log(page,data,callback,deepPath);
        var self = utils.server;
        var response = this.getData(page, data, callback, deepPath);
        if (response != "undefined" || response != null || typeof response != undefined) {
            return response;
        }
    },
    gotagencyLogoEditresponse: function (data) {
        if (data.resultMap.TypeCode == "4051") {
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                sessionStorage.agencyEmail = data.resultMap.editedAgencyDetails.emailId.email;
                sessionStorage.agencyName = data.resultMap.editedAgencyDetails.agencyName;
            } else {
                sessionStorage.agencyEmail = data.resultMap.EditedCarrierDetails.emailId.email;
                sessionStorage.agencyName = data.resultMap.EditedCarrierDetails.carrierName;
            }

            $("#adminEmailIDValue").html(sessionStorage.agencyEmail);
            $("#agencyNameValue").html(sessionStorage.agencyName);
        }
    },
    gotprofileEditresponse: function (data) {
        if (data.resultMap.TypeCode == "4051") {
            $("#profileUserName").text(sessionStorage.tempUserName);
            if (sessionStorage.isRepView == "false") {
                sessionStorage.userPhoneNumber = data.resultMap.editedDetails.phone.number;
                if (sessionStorage.loginType == 'AgencyAdmin' || sessionStorage.loginType == 'CarrierAdmin') {
                    try {
                        sessionStorage.userEmailId = data.resultMap.editedDetails.emailId.email;
                    } catch (e) {
                        sessionStorage.userEmailId = data.resultMap.editedDetails.carrierRepresentativeId.email;
                    }
                    sessionStorage.userFirstName = data.resultMap.editedDetails.firstName;
                    sessionStorage.userLastName = data.resultMap.editedDetails.lastName;
                } else if (sessionStorage.loginType == 'AgencyRepresentative') {
                    sessionStorage.userEmailId = data.resultMap.editedDetails.agencyRepresentativeId.email;
                    sessionStorage.userFirstName = data.resultMap.editedDetails.name;
                    sessionStorage.userLastName = data.resultMap.editedDetails.lastName;
                } else if (sessionStorage.loginType == 'CarrierRepresentative') {
                    sessionStorage.userEmailId = data.resultMap.editedDetails.carrierRepresentativeId.email;
                    sessionStorage.userFirstName = data.resultMap.editedDetails.name;
                    sessionStorage.userLastName = data.resultMap.editedDetails.lastName;
                } else {
                    sessionStorage.superAdminEmailId = data.resultMap.editedDetails.usaEmployeeId.email;
                }
                if (localStorage.LoginType == "SuperAdmin") {

                    if (data.resultMap.editedDetails.city == undefined) {
                        sessionStorage.residentialCity = "";
                    } else {
                        sessionStorage.residentialCity = data.resultMap.editedDetails.city;
                    }
                    if (data.resultMap.editedDetails.state == undefined) {
                        sessionStorage.residentialState = "";
                    } else {
                        sessionStorage.residentialState = data.resultMap.editedDetails.state;
                    }
                } else {
                    if (data.resultMap.editedDetails.residentialCity == undefined) {
                        sessionStorage.residentialCity = "";
                    } else {
                        sessionStorage.residentialCity = data.resultMap.editedDetails.residentialCity;
                    }
                    if (data.resultMap.editedDetails.residentialState == undefined) {
                        sessionStorage.residentialState = "";
                    } else {
                        sessionStorage.residentialState = data.resultMap.editedDetails.residentialState;
                    }
                }
            }
            showAlertBox("Successfully Changed..!");
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                /*  if (localStorage.LoginType == 'Admin') {
                 var page = "carriers";
                 var data = {},
                 deepPath = "agencydashboarddesign",
                 page = "home",
                 callback = protocall.carrier.getresponseagencydetails,
                 authId = "",
                 spinnerMsg = "";
                 utils.server.makeServerCall(page, data, callback, deepPath);
                 } */

                /* if (localStorage.LoginType == 'Representatives') {
                 var dataq = {};
                 var path = utils.server.getServerPath("newagencydashboarddesignforrepresentativelogin");
                 var request = path(dataq).execute(function (resp) {
                 if (resp.error != undefined) {
                 t.server.handleError(resp);
                 } else {
                 RESPONSE.AGENCY_ADMIN_TOTAL_DETAILS[0] = resp;
                 RESPONSE.AGENCYLOGIN_DATA[0] = resp;
                 RESPONSE.CARRIERREP_DATA[0] = resp.resultMap.CarrierTab;
                 RESPONSE.customers_data[0] = resp.resultMap.CustomerTab;
                 HOMEPAGERESPONSE.CUSTOMERDATA = resp.resultMap.CustomerTab;
                 }
                 });
                 } */

            }
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Representatives') {
                    var dataq = {};
                    var path = utils.server.getServerPath("newcarrierdashboarddesignforrepresentativelogin");
                    var request = path(dataq).execute(function (resp) {
                        if (resp.error != undefined) {
                            t.server.handleError(resp);
                        } else {
                            RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
                            localStorage.setItem("carrierRepData", JSON.stringify(resp));
                            RESPONSE.CARRIERREP_DATA[0] = resp;
                            RESPONSE.customers_data[0] = resp.resultMap.customerTab;
                            RESPONSE.agencies_data[0] = resp.resultMap.agencyTab[0].agencyDetail;
                            RESPONSE.carrierrepcustomers_data[0] = resp;
                        }
                    });
                }
                /* if (localStorage.LoginType == 'Admin') {
                 
                 var page = "carriers";
                 var data = {},
                 deepPath = "carrierdashboarddesign",
                 page = "home",
                 async = false,
                 callback = protocall.carrier.getresponsecarrieragency,
                 authId = "",
                 spinnerMsg = "";
                 utils.server.makeServerCall(page, data, callback, deepPath);
                 } */
            }


        } else if (data.resultMap.TypeCode == "4055") {
            $('.submenu-title').text("edit");
            showAlertBox("Phone number already exists..!");
            protocall.view.MyprofEdit();
            setTimeout(function () {
                $('#phonenew').val("");
                $('#phonenew').focus();
            }, 500);

            setTimeout(function () {
                $('#phonenew').val("");
                $('#phonenew').focus();
            }, 2000);

        }
    },
    getData: function (page, data, callback, deepPath) {
        var ref = page;
        var data = data;
        var path = this.getServerPath(deepPath);

        var request = path(data).execute(function (resp) {
            if (resp.error != undefined) {
                console.log("error");
                utils.server.handleError(resp, ref, false);
            } else {
                console.log("success", ref);
                if (typeof callback != "undefined" && callback != null) {
                    callback(resp, ref);
                } else {
                    return resp;
                }
            }
        });
    },
    makeBackgroundCall: function (page, data, callback, deepPath, spinner) {
        var ref = page;
        var data = data;
        var bgcheck = true;
        if (spinner) {
            t.form.showFormSpinner();
        }
        var path = this.getServerPath(deepPath);
        var request = path(data).execute(function (resp) {
            if (resp.error != undefined) {
                t.server.handleError(resp, ref, bgcheck);
            } else {
                if (typeof callback != "undefined" && callback != null) {
                    callback(resp, page);
                } else {
                    if (page == "getcategory") {
                        t.callback.loadServiceCategory(resp);
                    }
                }
            }
            t.form.hideFormSpinner();
        });
        return request;
    },
    handleError: function (data, ref, bgcheck) {

        if (!bgcheck) {
            console.log(data, ref);
            if (ref == "loginforuser") {
                t.ui.handleLoginError(data);
            } else if (ref == "referenceCodeVerification") {
                $('#spRefCode').parents(".row").find('.input-holder').addClass("error-block");
                $('#spRefCode').parents(".row").find('.error').html("Please enter the valid reference code");
                $('#spRefCode').parents(".row").find('.error').css("opacity", "1");
            } else if (ref == "registrationemailverfication") {
                $('#spEmail').parents('.row').find('.input-holder').addClass('error-block');
                $('#spEmail').parents('.row').find('.error').html("Email already exists, Please choose a different email id");
                $('#spEmail').parents('.row').find('.error').css("opacity", "1");
                $('#spEmail').focus();
            } else if (ref == "updatesetting") {
                t.set.settingErrorHandling(data);
            } else {
                $(".content-holder").removeClass("spinner1");
                $(".content-holder").css("opacity", "1");
                $(".content-holder").empty();
                $(".content-holder").html('<h3 style="color:red">Service Not Available</h3>');
                $(".content-holder").fadeIn();
                $(".content-holder").fadeIn("slow");
                $(".content-holder").fadeIn(300);
            }
        } else {
            if (ref == "serviceslotcreation") {
                console.log(data);
                t.schedule.handleServiceSlotError(data);
            }
            if (ref == "manualpasswordupdate") {
                t.set.handleUpdatePwdError(data);
            }
        }
    },
    getServerPath: function (deepPath) {
        var path = gapi.client.protocall;
        deepPath = deepPath.split(".");
        for (var i = 0; i < deepPath.length; i++) {
            console.log("path", deepPath[i]);
            path = path[deepPath[i]];
        }

        return path;
    },
    gotRsksj: function (associatedCustomerDetails) {
        // CUSTOMER.ASSOCIATEFEEDDATA = associatedCustomerDetails;
        sessionStorage.isNextPageAllowed = associatedCustomerDetails.resultMap.isNextPage;
        if (associatedCustomerDetails.resultMap.TypeCode == "4011") {
            if (associatedCustomerDetails.resultMap.AssociatedCustomers !== undefined) {
                $.each(associatedCustomerDetails.resultMap.AssociatedCustomers, function (index, associatedCustomer) {
                    CUSTOMER.ASSOCIATEFEEDDATA.push(associatedCustomer);
                })
            } else {

            }
        }
        protocall.carrier.loadAssociatedCustomers();
    },
    gotloginresponse: function (data) {

        // data.setRequestHeader("JSESSIONID","tNE2-g8Lv-yUIWYWNaNciA");
        if (data.resultMap.TypeCode == '4001') {
            RESPONSE.SERVERLOGINRESPONSE = true;
            sessionStorage.loggedIn = "true";
            localStorage.imageURl = "http://2-dot-proto-call-test.appspot.com/file/";

            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {

                if (localStorage.LoginType == 'Admin') {
                    sessionStorage.loginType = 'AgencyAdmin';
                    if (data.resultMap.agencyDetails.agencyName == undefined) {
                        sessionStorage.agencyName = "";
                    } else {
                        sessionStorage.agencyName = data.resultMap.agencyDetails.agencyName;
                    }

                    if (data.resultMap.userDetails.firstName == undefined) {
                        sessionStorage.userFirstName = "";
                    } else {
                        sessionStorage.userFirstName = data.resultMap.userDetails.firstName;
                    }

                    if (data.resultMap.userDetails.lastName == undefined) {
                        sessionStorage.userLastName = "";
                    } else {
                        sessionStorage.userLastName = data.resultMap.userDetails.lastName;
                    }

                    if (data.resultMap.agencyDetails.city == undefined) {
                        sessionStorage.ownerresidentialCity = "";
                    } else {
                        sessionStorage.ownerresidentialCity = data.resultMap.agencyDetails.city;
                    }
                    if (data.resultMap.agencyDetails.state == undefined) {
                        sessionStorage.ownerresidentialState = "";
                    } else {
                        sessionStorage.ownerresidentialState = data.resultMap.agencyDetails.state;
                    }

                    if (data.resultMap.userDetails.residentialCity == undefined) {
                        sessionStorage.residentialCity = sessionStorage.ownerresidentialCity;
                    } else {
                        sessionStorage.residentialCity = data.resultMap.userDetails.residentialCity;
                    }
                    if (data.resultMap.userDetails.residentialState == undefined) {
                        sessionStorage.residentialState = sessionStorage.ownerresidentialState;
                    } else {
                        sessionStorage.residentialState = data.resultMap.userDetails.residentialState;
                    }
                }
                if (localStorage.LoginType == 'Representatives') {
                    sessionStorage.loginType = 'AgencyRepresentative';
                    sessionStorage.userEmailId = data.resultMap.userDetails.agencyRepresentativeId.email;
                    if (data.resultMap.agencyDetails.agencyName == undefined) {
                        sessionStorage.agencyName = "";
                    } else {
                        sessionStorage.agencyName = data.resultMap.agencyDetails.agencyName;
                    }

                    if (data.resultMap.userDetails.name == undefined) {
                        sessionStorage.userFirstName = "";
                    } else {
                        sessionStorage.userFirstName = data.resultMap.userDetails.name;
                    }

                    if (data.resultMap.userDetails.lastName == undefined) {
                        sessionStorage.userLastName = "";
                    } else {
                        sessionStorage.userLastName = data.resultMap.userDetails.lastName;
                    }
                    if (data.resultMap.agencyDetails.city == undefined) {
                        sessionStorage.ownerresidentialCity = "";
                    } else {
                        sessionStorage.ownerresidentialCity = data.resultMap.agencyDetails.city;
                    }
                    if (data.resultMap.agencyDetails.state == undefined) {
                        sessionStorage.ownerresidentialState = "";
                    } else {
                        sessionStorage.ownerresidentialState = data.resultMap.agencyDetails.state;
                    }
                    if (data.resultMap.userDetails.residentialCity == undefined) {
                        sessionStorage.residentialCity = sessionStorage.ownerresidentialCity;
                    } else {
                        sessionStorage.residentialCity = data.resultMap.userDetails.residentialCity;
                    }
                    if (data.resultMap.userDetails.residentialState == undefined) {
                        sessionStorage.residentialState = sessionStorage.ownerresidentialState;
                    } else {
                        sessionStorage.residentialState = data.resultMap.userDetails.residentialState;
                    }
                }

                sessionStorage.loggedIn = "true";
                localStorage.imageURl = "http://2-dot-proto-call-test.appspot.com/file/";
                try {
                    sessionStorage.agencyEmail = data.resultMap.agencyDetails.emailId.email;
                } catch (e) {
                    sessionStorage.agencyEmail = "";
                }
                sessionStorage.agencyPhone = data.resultMap.agencyDetails.phone.number;
                if (data.resultMap.userDetails.phone !== undefined) {
                    sessionStorage.userPhoneNumber = data.resultMap.userDetails.phone.number;
                } else {
                    sessionStorage.userPhoneNumber = "";
                }

                sessionStorage.agencyId = data.resultMap.agencyId;
                try {
                    if (sessionStorage.loginType != 'AgencyRepresentative') {
                        sessionStorage.userEmailId = data.resultMap.userDetails.emailId.email;
                    }
                } catch (err) {
                    sessionStorage.userEmailId = "";
                }
                if (data.resultMap.userDetails.profilePicture != undefined) {
                    sessionStorage.profilePic = localStorage.imageURl + data.resultMap.userDetails.profilePicture;
                } else {
                    sessionStorage.profilePic = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                }

                if (data.resultMap.agencyDetails.agencyLogo != undefined) {
                    sessionStorage.agencyLogo = localStorage.imageURl + data.resultMap.agencyDetails.agencyLogo;
                } else {
                    sessionStorage.agencyLogo = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                }

            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {

                if (localStorage.LoginType == 'Admin') {
                    sessionStorage.loginType = 'CarrierAdmin';
                    sessionStorage.agencyEmail = data.resultMap.userDetails.emailId.email;
                    sessionStorage.profilePic = localStorage.imageURl + data.resultMap.carrierDetails.profilePicture;
                    sessionStorage.agencyLogo = localStorage.imageURl + data.resultMap.carrierDetails.carrierLogo;
                    sessionStorage.agencyPhone = data.resultMap.carrierDetails.phone.number;
                    try {
                        sessionStorage.userEmailId = data.resultMap.userDetails.emailId.email;
                    } catch (err) {
                        sessionStorage.userEmailId = "";
                    }
                    try {
                        sessionStorage.userPhoneNumber = data.resultMap.userDetails.phone.number;
                    } catch (e) {

                    }
                    if (data.resultMap.carrierDetails.carrierName == undefined) {
                        sessionStorage.agencyName = "";
                    } else {
                        sessionStorage.agencyName = data.resultMap.carrierDetails.carrierName;
                    }

                    if (data.resultMap.userDetails.firstName == undefined) {
                        sessionStorage.userFirstName = "";
                    } else {
                        sessionStorage.userFirstName = data.resultMap.userDetails.firstName;
                    }
                    if (data.resultMap.userDetails.lastName == undefined) {
                        sessionStorage.userLastName = "";
                    } else {
                        sessionStorage.userLastName = data.resultMap.userDetails.lastName;
                    }


                    if (data.resultMap.userDetails.profilePicture != undefined) {
                        sessionStorage.profilePic = localStorage.imageURl + data.resultMap.userDetails.profilePicture;
                    } else {
                        sessionStorage.profilePic = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                    }
                    if (data.resultMap.carrierDetails.city == undefined) {
                        sessionStorage.ownerresidentialCity = "";
                    } else {
                        sessionStorage.ownerresidentialCity = data.resultMap.carrierDetails.city;
                    }
                    if (data.resultMap.carrierDetails.state == undefined) {
                        sessionStorage.ownerresidentialState = "";
                    } else {
                        sessionStorage.ownerresidentialState = data.resultMap.carrierDetails.state;
                    }
                    if (data.resultMap.userDetails.residentialCity == undefined) {
                        sessionStorage.residentialCity = sessionStorage.ownerresidentialCity;
                    } else {
                        sessionStorage.residentialCity = data.resultMap.userDetails.residentialCity;
                    }
                    if (data.resultMap.userDetails.residentialState == undefined) {
                        sessionStorage.residentialState = sessionStorage.ownerresidentialState;
                    } else {
                        sessionStorage.residentialState = data.resultMap.userDetails.residentialState;
                    }
                }
                if (localStorage.LoginType == 'Representatives') {
                    sessionStorage.loginType = 'CarrierRepresentative';
                    sessionStorage.agencyEmail = data.resultMap.userDetails.carrierRepresentativeId.email;
                    sessionStorage.agencyLogo = localStorage.imageURl + data.resultMap.carrierDetails.carrierLogo;
                    sessionStorage.agencyPhone = data.resultMap.carrierDetails.phone.number;
                    sessionStorage.agencyId = data.resultMap.carrierDetails.carrierId;
                    sessionStorage.userEmailId = data.resultMap.userDetails.carrierRepresentativeId.email;
                    try {
                        sessionStorage.userPhoneNumber = data.resultMap.userDetails.phone.number;
                    } catch (e) {

                    }
                    try {
                        if (sessionStorage.loginType != 'CarrierRepresentative') {
                            sessionStorage.userEmailId = data.resultMap.userDetails.emailId.email;
                        }
                    } catch (err) {
                        sessionStorage.userEmailId = "";
                    }

                    if (data.resultMap.carrierDetails.carrierName == undefined) {
                        sessionStorage.agencyName = "";
                    } else {
                        sessionStorage.agencyName = data.resultMap.carrierDetails.carrierName;
                    }

                    if (data.resultMap.userDetails.name == undefined) {
                        sessionStorage.userFirstName = "";
                    } else {
                        sessionStorage.userFirstName = data.resultMap.userDetails.name;
                    }

                    if (data.resultMap.userDetails.lastName == undefined) {
                        sessionStorage.userLastName = "";
                    } else {
                        sessionStorage.userLastName = data.resultMap.userDetails.lastName;
                    }


                    if (data.resultMap.userDetails.profilePicture != undefined) {
                        sessionStorage.profilePic = localStorage.imageURl + data.resultMap.userDetails.profilePicture;
                    } else {
                        sessionStorage.profilePic = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                    }
                    if (data.resultMap.carrierDetails.city == undefined) {
                        sessionStorage.ownerresidentialCity = "";
                    } else {
                        sessionStorage.ownerresidentialCity = data.resultMap.carrierDetails.city;
                    }
                    if (data.resultMap.carrierDetails.state == undefined) {
                        sessionStorage.ownerresidentialState = "";
                    } else {
                        sessionStorage.ownerresidentialState = data.resultMap.carrierDetails.state;
                    }
                    if (data.resultMap.userDetails.residentialCity == undefined) {
                        sessionStorage.residentialCity = sessionStorage.ownerresidentialCity;
                    } else {
                        sessionStorage.residentialCity = data.resultMap.userDetails.residentialCity;
                    }
                    if (data.resultMap.userDetails.residentialState == undefined) {
                        sessionStorage.residentialState = sessionStorage.ownerresidentialState;
                    } else {
                        sessionStorage.residentialState = data.resultMap.userDetails.residentialState;
                    }

                }
            }



            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                /* if (localStorage.LoginType == 'Admin') {
                 
                 var dataq = {};
                 var path = utils.server.getServerPath("agencydashboarddesign");
                 var request = path(dataq).execute(function (resp) {
                 if (resp.error != undefined) {
                 t.server.handleError(resp);
                 } else {
                 RESPONSE.AGENCY_ADMIN_TOTAL_DETAILS[0] = resp;
                 localStorage.setItem("AGENCYOWNERDATA", JSON.stringify(resp));
                 console.log("jksdhfhjgsdhfgshdf", JSON.parse(localStorage.getItem("AGENCYOWNERDATA")));
                 }
                 });
                 } */

                /*  if (localStorage.LoginType == 'Representatives') {
                 var dataq = {};
                 var path = utils.server.getServerPath("newagencydashboarddesignforrepresentativelogin");
                 var request = path(dataq).execute(function (resp) {
                 if (resp.error != undefined) {
                 t.server.handleError(resp);
                 } else {
                 
                 RESPONSE.AGENCY_ADMIN_TOTAL_DETAILS[0] = resp;
                 RESPONSE.AGENCYLOGIN_DATA[0] = resp;
                 RESPONSE.CARRIERREP_DATA[0] = resp.resultMap.CarrierTab;
                 localStorage.setItem("representativeAgencyData", JSON.stringify(resp));
                 RESPONSE.customers_data[0] = resp.resultMap.CustomerTab;
                 HOMEPAGERESPONSE.CUSTOMERDATA = resp.resultMap.CustomerTab;
                 }
                 });
                 } */

                /*  var page = "counthomepage";
                 var data = {},
                 deepPath = "providecountforunreadfeed",
                 page = "home",
                 async = false,
                 callback = protocall.carrier.getCountResponse,
                 authId = "",
                 spinnerMsg = "";
                 utils.server.makeServerCall(page, data, callback, deepPath);
                 */
//                var dataq = {};
//                var path = utils.server.getServerPath("providecountforunreadfeed");
//                var request = path(dataq).execute(function (resp) {
//                    if (resp.error != undefined) {
//                        t.server.handleError(resp);
//                    } else {
//                        try {
//                            sessionStorage.MYALERTSCOUNT = resp.resultMap.CountForHomeFeed + "/" + resp.resultMap.CountForTotalHomeFeed;
//                            sessionStorage.ArchieveCOUNT = resp.resultMap.CountForArchieve + "/" + resp.resultMap.CountForTotalArchiveFeed;
//                        } catch (e) {
//                            sessionStorage.MYALERTSCOUNT = "";
//                            sessionStorage.ArchieveCOUNT = "";
//                        }
//                    }
//                });


            }
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Representatives') {
                    var dataq = {};
                    var path = utils.server.getServerPath("newcarrierdashboarddesignforrepresentativelogin");
                    var request = path(dataq).execute(function (resp) {
                        if (resp.error != undefined) {
                            t.server.handleError(resp);
                        } else {

                            RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
                            RESPONSE.CARRIERREP_DATA[0] = resp;

                            //localStorage.setItem("customerDetailsValue", JSON.stringify(resp));
                            //localStorage.setItem("customerDataValues", JSON.stringify(resp.resultMap.customerTab));
                            localStorage.setItem("carrierRepData", JSON.stringify(resp));
                            RESPONSE.customers_data[0] = resp.resultMap.customerTab;
                            RESPONSE.agencies_data[0] = resp.resultMap.agencyTab[0].agencyDetail;
                            RESPONSE.carrierrepcustomers_data[0] = resp;
                        }
                    });
                }
                /* if (localStorage.LoginType == 'Admin') {
                 
                 var page = "carriers";
                 var data = {},
                 deepPath = "carrierdashboarddesign",
                 page = "home",
                 async = false,
                 callback = protocall.carrier.getresponsecarrieragency,
                 authId = "",
                 spinnerMsg = "";
                 utils.server.makeServerCall(page, data, callback, deepPath);
                 } */
            }
            if (localStorage.LoginType == 'SuperAdmin') {
                sessionStorage.loginType = 'SuperAdmin';
                if (data.resultMap.userDetails.name == undefined) {
                    sessionStorage.userFirstName = "";
                } else {
                    sessionStorage.userFirstName = data.resultMap.userDetails.name;
                }
                if (data.resultMap.userDetails.phone.number == undefined) {
                    sessionStorage.userPhoneNumber = "";
                } else {
                    sessionStorage.userPhoneNumber = data.resultMap.userDetails.phone.number;
                }
                if (data.resultMap.userDetails.city == undefined) {
                    sessionStorage.ownerresidentialCity = "";
                } else {
                    sessionStorage.ownerresidentialCity = data.resultMap.userDetails.city;
                }
                if (data.resultMap.userDetails.state == undefined) {
                    sessionStorage.ownerresidentialState = "";
                } else {
                    sessionStorage.ownerresidentialState = data.resultMap.userDetails.state;
                }
                if (data.resultMap.userDetails.city == undefined) {
                    sessionStorage.residentialCity = sessionStorage.ownerresidentialCity;
                } else {
                    sessionStorage.residentialCity = data.resultMap.userDetails.city;
                }

                if (data.resultMap.userDetails.state == undefined) {
                    sessionStorage.residentialState = sessionStorage.ownerresidentialState;
                } else {
                    sessionStorage.residentialState = data.resultMap.userDetails.state;
                }
                if (data.resultMap.userDetails.lastName == undefined) {
                    sessionStorage.userLastName = "";
                } else {
                    sessionStorage.userLastName = data.resultMap.userDetails.lastName;
                }
                if (data.resultMap.userDetails.profilePicture == undefined) {
                    sessionStorage.profilePic = "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                } else {
                    sessionStorage.profilePic = localStorage.imageURl + data.resultMap.userDetails.profilePicture;
                }

                if (data.resultMap.userDetails.usaEmployeeId.email == undefined) {
                    sessionStorage.superAdminEmailId = data.resultMap.userDetails.usaEmployeeId.email;
                } else {
                    sessionStorage.superAdminEmailId = data.resultMap.userDetails.usaEmployeeId.email;
                }
            }
            protocall.setPageNavigation(HOME_PAGE);
            protocall.displaySpinner(true);
        } else if (data.resultMap.TypeCode == '4002') {
            var error = "Your login and/or password is incorrect.";
            protocall.displaySpinner(false);
            showAlertBox(error);
            return false
        }
        else if (data.resultMap.TypeCode == '4005') {
            var error = "You are not a registered user";
            showAlertBox(error);
            protocall.displaySpinner(false);
            return false
        } else if (data.resultMap.TypeCode == '4006') {
            var error = "You are not a registered user";
            showAlertBox(error);
            protocall.displaySpinner(false);
            return false
        }
        else if (data.resultMap.TypeCode == '4007') {
            var error = "Provide your agencyId";
            protocall.displaySpinner(false);
            showAlertBox(error);
            return false
        }

    },
    assignToCustomers: function (repEmailId) {
        ASSIGNTOCUSOVERLAY_REPEMAILID = "";
        ASSIGNTOCUSOVERLAY_REPEMAILID = repEmailId;
        localStorage.setItem("CARRIERADMIN_MYREPID", repEmailId);
        protocall.displaySpinner(true);
        utils.server.gotAssignCustomersResponse(repEmailId);
        RESPONSE_ARRAY = [];
        MYREPS.ASSIGNCUSTOMERRESPONSE = [];
        MYREPS.ASSIGNCUSTOMERFIRSTPAGE = [];
    },
    gotAssignCustomersResponse: function (repEmailId) {
        var tempHtml = "", feedHtml = "";
        //MYREPS.ASSIGNCUSTOMERRESPONSE = [];
        //$(".rep-content-blk form")[0].empty();
        sessionStorage.isNextPageForAssignRepAlphabetical = false;
        sessionStorage.isNextPageForAssignRep = false;
        MYREPS.SORTBYBOXCHANGED = true;
        //MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
        var data = {pageNumber: ++MYREPS.ASSIGNCUSTOMERPAGENUMBER};
        var path = utils.server.getServerPath("userlistsortedbyname");
        var request = path(data).execute(function (resp) {
            if (resp.error != undefined) {
                t.server.handleError(resp);
            } else {
                        

                var data = resp.resultMap.ArrayOfUserDetails;
                console.log("length of data records", data.length);
                //RESPONSE_ARRAY.push(data);
                var userDetailsForOverlay = resp.resultMap.ArrayOfUserDetails;
                $.each(data, function (index, userDetailsValue) {
                    MYREPS.ASSIGNCUSTOMERRESPONSE.push(userDetailsValue);
                });
                sessionStorage.isNextPageForAssignRep = resp.resultMap.isNextPage;
                if (MYREPS.ASSIGNCUSTOMERPAGENUMBER == 1) {
                    //$(".rep-content-blk form")[0].empty();
                    feedHtml = staticTemplate.home.assignCustomersTemplate();
                    tempHtml = "";
                    MYREPS.ASSIGNCUSTOMERFIRSTPAGE = MYREPS.ASSIGNCUSTOMERRESPONSE;
                } else {
                    feedHtml = "";
                    tempHtml = "";
                }
                $.each(MYREPS.ASSIGNCUSTOMERRESPONSE, function (index, customerValue) {
                    var userId = customerValue.userId;
                    var customerName = customerValue.firstName + " " + customerValue.lastName;
                    customerName = customerName.replace("undefined", "");
                    var location = customerValue.residentialCity + " " + customerValue.residentialState;
                    location = location.replace("undefined", "");
                    if (customerValue.email != undefined) {
                        customerEmailId = customerValue.emailId.email;
                    } else {
                        customerEmailId = "";
                    }
                    feedHtml += "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + userId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' style=' '>" + location + "</div> </div> </label> </div>";
                });
                console.log("feedHtml>>>>>>", feedHtml);
                /* for (index = 0; index < data.length; index++) {
                 
                 var userId = data[index].userId;
                 var customerName = data[index].firstName;
                 try {
                 customerName = customerName + " " + data[index].lastName;
                 } catch (err) {
                 
                 }
                 customerName = customerName.replace("undefined", " ");
                 var customerCity = data[index].residentialCity;
                 var customerState = data[index].residentialState;
                 var customerEmailId = "";
                 try {
                 customerEmailId = data[index].emailId.email;
                 } catch (e) {
                 
                 }
                 if (customerState == null || customerState == "") {
                 customerState = "";
                 } else {
                 customerState = ", " + customerState;
                 }
                 
                 if (customerCity == undefined) {
                 customerCity = "";
                 }
                 if (customerState == undefined) {
                 customerState = "";
                 }
                 if (customerCity == "undefined") {
                 customerCity = "";
                 }
                 if (customerState == "undefined") {
                 customerState = "";
                 }
                 
                 RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId, data[index].lastName, userId];
                 if(MYREPS.ASSIGNCUSTOMERPAGENUMBER == 1){
                 tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + userId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' style=' '>" + customerCity + customerState + "</div> </div> </label> </div>";
                 feedHtml = feedHtml + tempHtml;
                 } else {
                 tempHtml += "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + userId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' style=' '>" + customerCity + customerState + "</div> </div> </label> </div>";
                 }
                 //tempHtml = "";
                 //console.log("Name" + customerName + "City,State" + customerCity + customerState + customerEmailId);
                 } */
                
                 
                var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_assigncustomers'>Assign</div> </div> ";
                if (MYREPS.ASSIGNCUSTOMERPAGENUMBER == 1) {
                    finalHtml = feedHtml + buttonHtml;
                    overlay.displayOverlay(finalHtml);
                    var container = $('.rep-content-blk');
                    var scrollHeighValue = container.scrollTop() / 2;
                    //container.scrollTop(scrollHeighValue);
                    $(".rep-content-blk").animate({scrollTop: 0}, 500);
                } else {
                    finalHtml = feedHtml;
                    console.log("finalHtml>>>>>>>>.", finalHtml);
                    $(".rep-content-blk form").empty();
                    $(".rep-content-blk form").append(finalHtml);
                    $(".rep-content-blk").removeClass("spinner1").css("opacity", "1");
                    var container = $('.rep-content-blk');
                    var scrollHeighValue = container.scrollTop() / 2;
                    //container.scrollTop(scrollHeighValue);
                    $(".rep-content-blk").animate({scrollTop: scrollHeighValue}, 500);
                }
                // var finalHtml = feedHtml + buttonHtml;
                protocall.events.handleScrollForAssignRep();
                sharewithRepSelectAllDropDown("true");
                protocall.displaySpinner(false);
                setTimeout(function () {
                    if (sessionStorage.isSelectAll=="true") {
                        $('input:checkbox').attr('checked', true);
                    } else {
                        $('input:checkbox').removeAttr('checked');
                    }
                }, 1800);


            }
        });
        //}

    },
    shareToRep: function (alertid) {

        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            ALERTID = alertid;
            protocall.displaySpinner(true);
            var page = "pagesharewithrepoverlay";
            var data = {};
            var callback = utils.server.gotShareWithRepResponse;
            var deepPath = "carrierrepresentativenamewithlocation";
            utils.server.makeServerCall(page, data, callback, deepPath);
        } else {
            ALERTID = alertid;
            protocall.displaySpinner(true);
            var page = "pagesharewithrepoverlay";
            var data = {};
            var callback = utils.server.gotShareWithRepResponse;
            var deepPath = "agencyrepresentativenamewithlocation";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }
    },
    assignToRep: function () {
        protocall.displaySpinner(true);

        utils.server.gotAssignToRepResponse();
    },
    gotShareWithRepResponse: function (data, page) {
        IsRepTabSelected = false;
        RESPONSE_ARRAY = [];
        var feedHtml = staticTemplate.home.shareWithRepTemplate();
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            for (var index = 0; index < data.resultMap.RepresentativeDetails.length; index++) {
                var customerName = "";
                var customerCity = "";
                var customerState = "";
                var customerEmailId = "";
                try {
                    if (data.resultMap.RepresentativeDetails[index].location == undefined) {
                        try {
                            customerCity = data.resultMap.RepresentativeDetails[index].residentialCity;
                            customerState = data.resultMap.RepresentativeDetails[index].residentialState;
                        } catch (err1) {
                            customerCity = "";
                        }
                    } else {
                        customerCity = data.resultMap.RepresentativeDetails[index].location;
                    }

                } catch (err) {
                    try {
                        customerCity = data.resultMap.RepresentativeDetails[index].residentialCity;
                        customerState = data.resultMap.RepresentativeDetails[index].residentialState;
                    } catch (err1) {
                        customerCity = "";
                    }
                }
                try {

                    if (data.resultMap.RepresentativeDetails[index].name == undefined) {
                        customerName = data.resultMap.RepresentativeDetails[index].firstName;
                        try {
                            customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                        } catch (err) {

                        }
                        customerName = customerName.replace("undefined", " ");
                    } else {
                        customerName = data.resultMap.RepresentativeDetails[index].name;
                        try {
                            customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                        } catch (err) {

                        }
                        customerName = customerName.replace("undefined", " ");
                    }
                } catch (err) {
                    customerName = data.resultMap.RepresentativeDetails[index].firstName;
                    try {
                        customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                    } catch (err) {

                    }
                }

                customerName = customerName.replace("undefined", " ");
                var charcustomerName = "";
                try {
                    charcustomerName = customerName.charAt(0).toUpperCase();
                } catch (err) {

                }

                try {
                    if (data.resultMap.RepresentativeDetails[index].carrierRepresentativeId.email == undefined) {
                        customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                    } else {
                        customerEmailId = data.resultMap.RepresentativeDetails[index].carrierRepresentativeId.email;
                    }

                } catch (err) {
                    customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                }
                if (customerCity == undefined) {
                    customerCity = "";
                }
                if (customerState == undefined) {
                    customerState = "";
                }
                if (customerCity == "undefined") {
                    customerCity = "";
                }
                if (customerState == "undefined") {
                    customerState = "";
                }
                RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName + "' data-type=" + customerName + " class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' style=' '>" + customerCity + customerState + "</div> </div> </label> </div>";
                feedHtml = feedHtml + tempHtml;
                tempHtml = "";
            }
        } else {
            for (var index = 0; index < data.resultMap.RepresentativeDetails.length; index++) {
                var customerName = "";
                var customerCity = "";
                var customerState = "";
                var customerEmailId = "";
                try {
                    if (data.resultMap.RepresentativeDetails[index].location == undefined) {
                        try {
                            customerCity = data.resultMap.RepresentativeDetails[index].residentialCity;
                            customerState = data.resultMap.RepresentativeDetails[index].residentialState;
                        } catch (err1) {
                            customerCity = "";
                        }
                    } else {
                        customerCity = data.resultMap.RepresentativeDetails[index].location;
                    }

                } catch (err) {
                    try {
                        customerCity = data.resultMap.RepresentativeDetails[index].residentialCity;
                        customerState = data.resultMap.RepresentativeDetails[index].residentialState;
                    } catch (err1) {
                        customerCity = "";
                    }
                }
                try {

                    if (data.resultMap.RepresentativeDetails[index].name == undefined) {
                        customerName = data.resultMap.RepresentativeDetails[index].firstName;
                        try {
                            customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                        } catch (err) {

                        }
                    } else {
                        customerName = data.resultMap.RepresentativeDetails[index].name;
                        try {
                            customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                        } catch (err) {

                        }
                    }
                    customerName = customerName.replace("undefined", " ");
                } catch (err) {
                    console.log("owner data--->", data.resultMap.RepresentativeDetails[index]);
                    customerName = data.resultMap.RepresentativeDetails[index].firstName;
                    try {
                        customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                    } catch (err) {

                    }
                    customerName = customerName.replace("undefined", " ");
                }

                var charcustomerName = "";
                try {
                    charcustomerName = customerName.charAt(0).toUpperCase();
                } catch (err) {

                }

                try {
                    if (data.resultMap.RepresentativeDetails[index].agencyRepresentativeId.email == undefined) {
                        customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                    } else {
                        customerEmailId = data.resultMap.RepresentativeDetails[index].agencyRepresentativeId.email;
                    }

                } catch (err) {
                    customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                }
                if (customerCity == undefined) {
                    customerCity = "";
                }
                if (customerState == undefined) {
                    customerState = "";
                }
                if (customerCity == "undefined") {
                    customerCity = "";
                }
                if (customerState == "undefined") {
                    customerState = "";
                }
                RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' style=' '>" + customerCity + customerState + "</div> </div> </label> </div>";
                feedHtml = feedHtml + tempHtml;
                tempHtml = "";
            }
        }

        var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_sharerepwithcustomers'>Share</div> </div> ";
        var finalHtml = feedHtml + buttonHtml;
        overlay.displayOverlay(finalHtml);
        protocall.displaySpinner(false);

        sharewithRepSelectAllDropDown("false");
        protocall.displaySpinner(false);
        setTimeout(function () {

        }, 1000);

    },
    gotAssignToRepResponse: function (data1, page) {

        shared = true;
        IsRepTabSelected = true;
        var data = "";
        RESPONSE_ARRAY = [];


        localStorage.setItem("ARRAY_CUSTOMERS_LIST", localStorage.selectedEmail);

        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            if (localStorage.LoginType == 'Admin') {

                var dataq = {};
                var path = utils.server.getServerPath("agencyrepresentativelistsortedbyname");
                var request = path(dataq).execute(function (resp) {
                    if (resp.error != undefined) {
                        t.server.handleError(resp);
                    } else {

                        data = resp;
                        var flag = 0;
                        $('.getSelectedCustomers').each(function () {
                            str = this.checked ? "1" : "0";
                            if (str == "1") {
                                flag = 1;
                            }
                        });
                        if (flag == 0) {
                            if (localStorage.getItem("ARRAY_CUSTOMERS_LIST") == "" || localStorage.getItem("ARRAY_CUSTOMERS_LIST") == null || localStorage.getItem("ARRAY_CUSTOMERS_LIST") == undefined || localStorage.getItem("ARRAY_CUSTOMERS_LIST") == "undefined") {
                                showAlertBox("Please select at least one customer..!");
                                return false;
                            }
                        }

                        var feedHtml = staticTemplate.home.assignToRepTemplate();
                        for (var index = 0; index < data.resultMap.ArrayOfCarriersDetails.length; index++) {
                            var customerName = "";
                            var customerCity = "";
                            var customerState = "";
                            var customerEmailId = "";
                            try {
                                if (data.resultMap.ArrayOfCarriersDetails[index].location == undefined) {
                                    try {
                                        customerCity = data.resultMap.ArrayOfCarriersDetails[index].residentialCity;
                                        customerState = data.resultMap.ArrayOfCarriersDetails[index].residentialState;
                                    } catch (err1) {
                                        customerCity = "";
                                    }
                                } else {
                                    customerCity = data.resultMap.ArrayOfCarriersDetails[index].location;
                                }

                            } catch (err) {
                                try {
                                    customerCity = data.resultMap.ArrayOfCarriersDetails[index].residentialCity;
                                    customerState = data.resultMap.ArrayOfCarriersDetails[index].residentialState;
                                } catch (err1) {
                                    customerCity = "";
                                }
                            }
                            try {

                                if (data.resultMap.ArrayOfCarriersDetails[index].name == undefined) {
                                    var firstName = data.resultMap.ArrayOfCarriersDetails[index].firstName;
                                    try {
                                        firstName = firstName + " " + data.resultMap.ArrayOfCarriersDetails[index].lastName;
                                    } catch (err) {

                                    }
                                } else {
                                    firstName = data.resultMap.ArrayOfCarriersDetails[index].name;
                                    try {
                                        firstName = firstName + " " + data.resultMap.ArrayOfCarriersDetails[index].lastName;
                                    } catch (err) {

                                    }
                                }
                            } catch (err) {
                                firstName = data.resultMap.ArrayOfCarriersDetails[index].firstName;
                                try {
                                    firstName = firstName + "  " + data.resultMap.ArrayOfCarriersDetails[index].lastName;
                                } catch (err) {

                                }
                            }

                            firstName = firstName.replace("undefined", " ");
                            var charcustomerName = "";
                            try {
                                charcustomerName = customerName.charAt(0).toUpperCase();
                            } catch (err) {

                            }

                            try {
                                if (data.resultMap.ArrayOfCarriersDetails[index].agencyRepresentativeId.email == undefined) {
                                    customerEmailId = data.resultMap.ArrayOfCarriersDetails[index].emailId.email;
                                } else {
                                    customerEmailId = data.resultMap.ArrayOfCarriersDetails[index].agencyRepresentativeId.email;
                                }
                            } catch (err) {
                                customerEmailId = data.resultMap.ArrayOfCarriersDetails[index].emailId.email;
                            }

                            if (customerCity == undefined) {
                                customerCity = "";
                            }
                            if (customerState == undefined) {
                                customerState = "";
                            }
                            if (customerCity == "undefined") {
                                customerCity = "";
                            }
                            if (customerState == "undefined") {
                                customerState = "";
                            }
                            RESPONSE_ARRAY[index] = [firstName, customerCity, customerState, customerEmailId, data.resultMap.ArrayOfCarriersDetails[index].lastName];
                            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + firstName + "</div> "
                                    + "<div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'  style=''>" + customerCity + customerState + "</div> </div> </label> </div>";
                            feedHtml = feedHtml + tempHtml;
                            tempHtml = "";
                        }
                        var buttonHtml = " </form>  </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_assignToReps'>Assign</div> </div> ";
                        var finalHtml = feedHtml + buttonHtml;
                        overlay.displayOverlay(finalHtml);
                        sharewithRepSelectAllDropDown("false");
                        // 
                        setTimeout(function () {

                        }, 1000);
                    }
                });
            }
        } else {

            if (localStorage.LoginType == 'Admin') {

                var dataq = {};
                var path = utils.server.getServerPath("carrierrepresentativelistsortedbyname");
                var request = path(dataq).execute(function (resp) {
                    if (resp.error != undefined) {
                        t.server.handleError(resp);
                    } else {

                        data = resp;
                        var flag = 0;
                        $('.getSelectedCustomers').each(function () {
                            str = this.checked ? "1" : "0";
                            if (str == "1") {
                                flag = 1;
                            }
                        });
                        if (flag == 0) {
                            if (localStorage.getItem("ARRAY_CUSTOMERS_LIST") == "" || localStorage.getItem("ARRAY_CUSTOMERS_LIST") == null || localStorage.getItem("ARRAY_CUSTOMERS_LIST") == undefined) {
                                showAlertBox("Please select at least one customer.");
                                return false;
                            }
                        }

                        var feedHtml = staticTemplate.home.assignToRepTemplate();
                        for (var index = 0; index < data.resultMap.ArrayOfCarriersDetails.length; index++) {
                            var customerName = "";
                            var customerCity = "";
                            var customerState = "";
                            var customerEmailId = "";
                            try {
                                if (data.resultMap.ArrayOfCarriersDetails[index].location == undefined) {
                                    try {
                                        customerCity = data.resultMap.ArrayOfCarriersDetails[index].residentialCity;
                                        customerState = data.resultMap.ArrayOfCarriersDetails[index].residentialState;
                                    } catch (err1) {
                                        customerCity = "";
                                    }
                                } else {
                                    customerCity = data.resultMap.ArrayOfCarriersDetails[index].location;
                                }

                            } catch (err) {
                                try {
                                    customerCity = data.resultMap.ArrayOfCarriersDetails[index].residentialCity;
                                    customerState = data.resultMap.ArrayOfCarriersDetails[index].residentialState;
                                } catch (err1) {
                                    customerCity = "";
                                }
                            }
                            try {

                                if (data.resultMap.ArrayOfCarriersDetails[index].name == undefined) {
                                    var firstName = data.resultMap.ArrayOfCarriersDetails[index].firstName;
                                    try {
                                        firstName = firstName + " " + data.resultMap.ArrayOfCarriersDetails[index].lastName;
                                    } catch (err) {

                                    }
                                } else {
                                    firstName = data.resultMap.ArrayOfCarriersDetails[index].name;
                                    try {
                                        firstName = firstName + " " + data.resultMap.ArrayOfCarriersDetails[index].lastName;
                                    } catch (err) {

                                    }
                                }
                            } catch (err) {
                                firstName = data.resultMap.ArrayOfCarriersDetails[index].firstName;
                                try {
                                    firstName = firstName + "  " + data.resultMap.ArrayOfCarriersDetails[index].lastName;
                                } catch (err) {

                                }
                            }

                            firstName = firstName.replace("undefined", " ");
                            var charcustomerName = "";
                            try {
                                charcustomerName = customerName.charAt(0).toUpperCase();
                            } catch (err) {

                            }

                            try {
                                if (data.resultMap.ArrayOfCarriersDetails[index].agencyRepresentativeId.email == undefined) {
                                    customerEmailId = data.resultMap.ArrayOfCarriersDetails[index].emailId.email;
                                } else {
                                    customerEmailId = data.resultMap.ArrayOfCarriersDetails[index].agencyRepresentativeId.email;
                                }
                            } catch (err) {
                                try {
                                    customerEmailId = data.resultMap.ArrayOfCarriersDetails[index].emailId.email;
                                } catch (e1) {
                                    customerEmailId = data.resultMap.ArrayOfCarriersDetails[index].carrierRepresentativeId.email;
                                }
                            }

                            if (customerCity == undefined) {
                                customerCity = "";
                            }
                            if (customerState == undefined) {
                                customerState = "";
                            }
                            if (customerCity == "undefined") {
                                customerCity = "";
                            }
                            if (customerState == "undefined") {
                                customerState = "";
                            }
                            RESPONSE_ARRAY[index] = [firstName, customerCity, customerState, customerEmailId, data.resultMap.ArrayOfCarriersDetails[index].lastName];
                            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + firstName + "</div> "
                                    + "<div class='t-caps f-sz-13 right f-italic t-right location-color rep-location'  style=''>" + customerCity + customerState + "</div> </div> </label> </div>";
                            feedHtml = feedHtml + tempHtml;
                            tempHtml = "";
                        }
                        var buttonHtml = " </form> </div> </div> <div class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_assignToReps'>Assign</div> </div> ";
                        var finalHtml = feedHtml + buttonHtml;
                        overlay.displayOverlay(finalHtml);
                        sharewithRepSelectAllDropDown("false");
                        // 
                        setTimeout(function () {

                        }, 1000);
                    }
                });
            }
        }

        protocall.displaySpinner(false);


    },
    gotPrivacyResponse: function (data, page) {

        RESPONSE_ARRAY = [];
        var feedHtml = staticTemplate.home.privacyTemplate();
        for (var index = 0; index < data.resultMap.RepresentativeDetails.length; index++) {
            var privacy = data.resultMap.RepresentativeDetails[index].privacy;
            if (privacy == undefined || privacy == "undefined") {
                privacy = "off";
            }

            var carrierAgencyRepresentativeId = data.resultMap.RepresentativeDetails[index].carrierAgencyRepresentativeId;
            var customerName = "";
            var customerCity = "";
            var customerState = "";
            var customerEmailId = "";
            try {
                if (data.resultMap.RepresentativeDetails[index].location == undefined) {
                    try {
                        customerCity = data.resultMap.RepresentativeDetails[index].residentialCity;
                        customerState = data.resultMap.RepresentativeDetails[index].residentialState;
                    } catch (err1) {
                        customerCity = "";
                    }
                } else {
                    customerCity = data.resultMap.RepresentativeDetails[index].location;
                }

            } catch (err) {
                try {
                    customerCity = data.resultMap.RepresentativeDetails[index].residentialCity;
                    customerState = data.resultMap.RepresentativeDetails[index].residentialState;
                } catch (err1) {
                    customerCity = "";
                }
            }
            try {

                if (data.resultMap.RepresentativeDetails[index].name == undefined) {
                    customerName = data.resultMap.RepresentativeDetails[index].firstName;
                    try {
                        customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                    } catch (err) {

                    }
                } else {
                    customerName = data.resultMap.RepresentativeDetails[index].name;
                    try {
                        customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                    } catch (err) {

                    }
                }
            } catch (err) {
                customerName = data.resultMap.RepresentativeDetails[index].firstName;
                try {
                    customerName = customerName + " " + data.resultMap.RepresentativeDetails[index].lastName;
                } catch (err) {

                }
            }
            customerName = customerName.replace("undefined", " ");
            var charcustomerName = "";
            try {
                charcustomerName = customerName.charAt(0).toUpperCase();
            } catch (err) {

            }

            try {
                if (data.resultMap.RepresentativeDetails[index].agencyRepresentativeId.email == undefined) {
                    customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                } else {
                    customerEmailId = data.resultMap.RepresentativeDetails[index].agencyRepresentativeId.email;
                }
            } catch (err) {
                try {
                    if (data.resultMap.RepresentativeDetails[index].carrierRepresentativeId.email == undefined) {
                        customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                    } else {
                        customerEmailId = data.resultMap.RepresentativeDetails[index].carrierRepresentativeId.email;
                    }
                } catch (err) {
                    customerEmailId = data.resultMap.RepresentativeDetails[index].emailId.email;
                }
            }

            if (carrierAgencyRepresentativeId == "undefined" || carrierAgencyRepresentativeId == null) {
                carrierAgencyRepresentativeId = "";
            }

            if (privacy == "on") {
                toggleStyle = "margin-left:50px";
            } else {

                toggleStyle = "margin-left:-10px";
            }

            var privacystatus = "";
            if (privacy == "undefined") {
                privacystatus = customerEmailId + "#off";
            } else {
                privacystatus = customerEmailId + "#" + privacy;
            }
            if (customerCity == undefined) {
                customerCity = "";
            }
            if (customerState == undefined) {
                customerState = "";
            }
            if (customerCity == "undefined") {
                customerCity = "";
            }
            if (customerState == "undefined") {
                customerState = "";
            }

            RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId, privacy, carrierAgencyRepresentativeId, privacystatus];
            var toggleStyleOn = "";
            var toggleStyleOff = "";
            var tempHtml = "";
            if (customerEmailId != sessionStorage.userEmailId) {
                if (index == 0) {
                    tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\" style=\"margin-top: 0px;\"> <input type=\"checkbox\" id='name" + index + "'  class=\"checkbox\" /> <label for='name" + index + "' class=\"rep-label1\"> <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\" style=\"width:30%;margin-top: -2px;\">" + customerName + "</div> "
                            + "<div class=\"nameRepId f-sz-14 text-color-overlay left\" style='margin-top: -2px;'><i>" + carrierAgencyRepresentativeId + "</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"switchsample bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + index + "-switch-container\" class=\"bootstrap-switch-container\" style=" + toggleStyle + "> "
                            + "<span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\"  onclick=\"moveani(" + index + ",\'id-switch-on\', \'id" + index + "-switch-container\')\"><div  class=\"togglevalue" + index + "\" style=\"display:none;\">" + privacystatus + "</div> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\"  onclick=\"moveani(" + index + ",\'id-switch-off\', \'id" + index + "-switch-container\')\"> OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </div> ";
                } else {
                    tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\"  style=\"margin-top: -15px;\"> <input type=\"checkbox\" id='name" + index + "'  class=\"checkbox\" /> <label for='name" + index + "' class=\"rep-label1\"> <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\" style=\"width:30%;margin-top: -2px;\">" + customerName + "</div> "
                            + "<div class=\"nameRepId f-sz-14 text-color-overlay left\" style='margin-top: -2px;'><i>" + carrierAgencyRepresentativeId + "</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"switchsample bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + index + "-switch-container\" class=\"bootstrap-switch-container\" style=" + toggleStyle + "> "
                            + "<span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\"  onclick=\"moveani(" + index + ",\'id-switch-on\', \'id" + index + "-switch-container\')\"><div  class=\"togglevalue" + index + "\" style=\"display:none;\">" + privacystatus + "</div> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\"  onclick=\"moveani(" + index + ",\'id-switch-off\', \'id" + index + "-switch-container\')\"> OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </div> ";
                }
            } else {
                if (index == 0) {
                    tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\" style=\"margin-top: 0px;\"> <input type=\"checkbox\" id='name" + index + "'  class=\"checkbox\" /> <label for='name" + index + "' class=\"rep-label1\"> <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\" style=\"width:30%;margin-top: -2px;\">" + customerName + "</div> "
                            + "<div class=\"nameRepId f-sz-14 text-color-overlay left\" style='margin-top: -2px;'><i>" + carrierAgencyRepresentativeId + "</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"switchsample bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + index + "-switch-container\" class=\"bootstrap-switch-container\" style=" + toggleStyle + "> "
                            + "<span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\"><div  class=\"togglevalue" + index + "\" style=\"display:none;\">" + privacystatus + "</div> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\" > OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </div> ";
                } else {
                    tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\" style=\"margin-top: -15px;\"> <input type=\"checkbox\" id='name" + index + "'  class=\"checkbox\" /> <label for='name" + index + "' class=\"rep-label1\"> <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\" style=\"width:30%;margin-top: -2px;\">" + customerName + "</div> "
                            + "<div class=\"nameRepId f-sz-14 text-color-overlay left\" style='margin-top: -2px;'><i>" + carrierAgencyRepresentativeId + "</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"switchsample bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + index + "-switch-container\" class=\"bootstrap-switch-container\" style=" + toggleStyle + "> "
                            + "<span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\"><div  class=\"togglevalue" + index + "\" style=\"display:none;\">" + privacystatus + "</div> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\" > OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </div> ";
                }

            }

            feedHtml = feedHtml + tempHtml;
            tempHtml = "";
        }

        var buttonHtml = " </form> </div> </div> </div><div style='clear:both;' class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='overlaybtnPrivacySend'>Save</div> </div> ";
        var finalHtml = feedHtml + buttonHtml;
        overlay.displayOverlay(finalHtml);
        protocall.displaySpinner(false);
        $(".rep-content-blk").css("opacity", "0.5");
        $(".rep-content-blk").find("input", "div").attr('disabled', 'disabled');
        $(".switchsample").css("pointer-events", "none");
        $(".o-content").css("min-height", "143px");

        //  
        setTimeout(function () {

        }, 1000);

//        setTimeout(function () {
//            $("#radio-button-public").trigger();
//        }, 500);


    },
    gotSendAppLinkResponse: function (data, page) {
        protocall.displaySpinner(true);
        RESPONSE_ARRAY = [];
        var feedHtml = staticTemplate.home.sendAppLinkTemplate($(".app-download-bar").html());
        for (var index = 0; index < data.result.resultObject.length; index++) {
            var customerName = data.result.resultObject[index].name;
            try {
                customerName = customerName + " " + data.result.resultObject[index].lastName;
            } catch (err) {

            }
            customerName = customerName.replace("undefined", " ");
            var customerCity = data.result.resultObject[index].city;
            var customerState = data.result.resultObject[index].state;
            var customerEmailId = "";
            try {
                customerEmailId = data.result.resultObject[index].userId.email;
            } catch (e) {
                customerEmailId = "";
            }
            if (customerState == null || customerState == "") {
                customerState = "";
            } else {
                customerState = ", " + customerState;
            }
            if (customerCity == undefined) {
                customerCity = "";
            }
            if (customerState == undefined) {
                customerState = "";
            }
            if (customerCity == "undefined") {
                customerCity = "";
            }
            if (customerState == "undefined") {
                customerState = "";
            }
            RESPONSE_ARRAY[index] = [customerName, customerCity, customerState, customerEmailId];
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'  style='  margin-top: -2px;'> <input type='checkbox' value=" + customerEmailId + "   id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' style=' '>" + customerCity + customerState + "</div> </div> </label> </div>";
            feedHtml = feedHtml + tempHtml;
            tempHtml = "";
        }
        var buttonHtml = " </form> </div> </div> <div id='id-dt_overlaybtn_sendapplink' class='o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w' data-type='dt_overlaybtn_sendapplink'>Send</div> </div> ";
        var finalHtml = feedHtml + buttonHtml;
        overlay.displayOverlay(finalHtml);
        protocall.displaySpinner(false);
        sharewithRepSelectAllDropDown("true");
        //
        setTimeout(function () {

        }, 1000);
    },
    submitPushMessage: function () {
        protocall.closeOverlay();
        var scheduledDate = "";
        var dateofschedule = "";
        var booleanValue = true;
        if ($('#radio-button-now').is(':checked')) {
            booleanValue = true;
            var date = new Date();
            scheduledDate = date.getTime();
        } else if ($('#radio-button-later').is(':checked')) {
            booleanValue = false;
            dateofschedule = $("#datepicker").val() + " " + $("#pushmessagetimepicker").val() + " " + $("#ampmtimepicker").val();
            var date = Date.parse(dateofschedule);
            scheduledDate = date;
        }
        var page = "pushmessagepage";
        var data = {isNow: booleanValue, targetString: $("#idpushmessage-textarea").val(), agencyId: sessionStorage.ownerId, scheduledDate: scheduledDate};
        var callback = utils.server.getCodeResponseAssignCustomers;
        var deepPath = "sendpushmessage";
        utils.server.makeServerCall(page, data, callback, deepPath);
        $(".content-holder").addClass("spinner1").css("opacity", "0.5");
        // 
        /* setTimeout(function () {
         
         }, 1000);
         showAlertBox("Successfully Sent..!"); */
    },
    submitAddVendorDetails: function () {
        var page = "addvendorpage";
        var data = {name: $("#id-vendorname").val(), serviceType: $("#id-vendortype").text(), state: $("#id-vendorstate").val(), zipcode: $("#id-vendorzip").val(),
            phone: $("#id-vendorphone").val(), address: $("#id-vendoraddress1").val(), address2: $("#id-vendoraddress2").val(), city: $("#id-vendorcity").val()};
        if ($("#id-vendorname").val() != "" && $("#id-vendortype").text() != "" && $("#id-vendorstate").val() != "" && $("#id-vendorzip").val() != "" &&
                $("#id-vendorphone").val() != "" && $("#id-vendoraddress1").val() != "" && $("#id-vendorcity").val() != "") {
            var deepPath = "createpreferredvendorservice";
            var callback = utils.server.gotAddvendorReponse;
            utils.server.makeServerCall(page, data, callback, deepPath);
            utils.server.loadPrefferedvendorsdetails();
            protocall.closeOverlay();
        } else {
            $(".error2").css("display", "block");
            $(".error2").css("padding-top", "4px");
            $(".error2").css("padding-bottom", "10px");
            $(".error2").html("No Empty Values..!");
            $('.error2').delay(2000).slideUp('slow');
        }
    },
    gotAddvendorReponse: function (response) {
        if (!response) {
            console.log("No Response");
        } else {
            if (response.resultMap.TypeCode == "4041" || response.resultMap.TypeCode == "4042" || response.resultMap.TypeCode == "4043") {
                showAlertBox("Successfully saved.");
            } else if (response.resultMap.TypeCode == "4046") {
                showAlertBox(response.resultMap.AlertMessage);
            } else {
                console.log("There is some error");
            }
        }
    },
    loadPrefferedvendorsdetails: function () {

        var delay = 2000;
        setTimeout(function () {
            var page = "settings";
            //var data = {agencyId: "49c03e36-f3f1-4132-8115-2f74c8a7bae3"};
            var data = "";
            var callback = utils.server.settingsResponse;
            var deepPath = "settingsinagencydesign";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }, delay);
    },
    submitPrivacyData: function () {

        var representativeId = [], data = {};
        var index = 0;
        var subindex = 0;
        if ($('#radio-button-public').is(':checked')) {
            for (var i = 0; i < RESPONSE_ARRAY.length; i++) {
                if (RESPONSE_ARRAY[i][3] != sessionStorage.userEmailId) {
                    representativeId[i] = RESPONSE_ARRAY[i][6].replace("on", "off");
                }
            }
            data = {privacy: "public"};
        } else if ($('#radio-button-private').is(':checked')) {
            for (var i = 0; i < RESPONSE_ARRAY.length; i++) {
                if (RESPONSE_ARRAY[i][3] != sessionStorage.userEmailId) {
                    representativeId[i] = RESPONSE_ARRAY[i][6].replace("off", "on");
                }
            }
            data = {privacy: "private"};
        } else {
            var index = 0;
            $('input[type=checkbox]').each(function () {

                if ($('.togglevalue' + index).html() != undefined) {
                    if ($('.togglevalue' + index).html() != "undefined" || $('.togglevalue' + index).html() != undefined) {
                        if ($('.togglevalue' + index).html().indexOf(sessionStorage.userEmailId) > -1) {
                        } else {
                            representativeId[index] = $('.togglevalue' + index).html();
                            index++;
                        }
                    }
                }
            });
            data = {alertList: representativeId, privacy: "custom"};
        }

        var page = "submitprivacydata";
        var callback = utils.server.getCodeResponseAssignCustomers;
        var deepPath = "editprivacy";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    submitSendAppLinkData: function () {
        var representativeId = [];
        var index = 0;
        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                representativeId.push($(this).val());
                index++;
            }
        });
        if (index == 0) {
            $(".error2").html("Please select atleat a name to share..!");
            $(".error2").css("display", "block");
            $(".error2").css("padding-top", "10px");
            $(".error2").css("padding-bottom", "10px");
            $('.error2').delay(2000).slideUp('slow');
            return false;
        }

        var page = "sendapplinkpage";
        var data = {applicationLink: $(".app-download-bar").html(), message: $(".textarea").val(), userIdList: representativeId};
        protocall.closeOverlay();
        showAlertBox("Send Successfully...!");
        var deepPath = "sendsetuplink";
        utils.server.makeServerCall(page, data, null, deepPath);
    },
    submitAssignCustomersData: function () {
        var index = 0;
        var customersEmailIds = [];
        var Rep_Num = "";
        Rep_Num = "agencyowner@gmail.com";
        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                customersEmailIds.push($(this).val());
            }
            index++;
        });
        console.log(customersEmailIds);
        var page = "assignCustomersPage";
        var data = {userList: customersEmailIds, representativeId: Rep_Num};
        var callback = utils.server.getCodeResponseAssignCustomers;
        var deepPath = "assigncustomer";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    settingsResponse: function (data) {


        var html = staticTemplate.customers.staticSettingsTemplate(data);
        TEMPSETTINGSPAGE = "";
        TEMPSETTINGSPAGE = html;
        $(".content-holder").empty();
        $(".content-holder").append(html + "</form>");
        $('.settings-agency-bar').css("background-color", "#f34f4e");
        $('#id-agency-view-load').css("color", "white");
        $('.settings-vendor-bar').css("background-color", "#ccc");
        $('#id-preferred-vendors-view-load').css("color", "black");
        $("#id-preferred-vendors-view-load").click();
        RESPONSE.SETTINGTAB_PreferredVendorDATA[0] = data.resultMap.listOfPreferredVendor;
    },
    carrierOwnerMyProfileSubmenu: function () {
        $(".mb-submenu").empty();
        $(".mb-submenu").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"snap left f-sz-16 ptsans-light myprofile t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"myprofile\"><div class=\"\"><div class=\"sprite-im inline-block v-align-mid mr-space-10 \">&nbsp;</div><span class=\"sub-menu-text inline-block v-align-mid\"> my profile</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"myprofile-customer\" style=\"display:none;\"></a></div><div class=\"tab-rb-submenu inline-block v-align-mid\" style=\"width:53%;\"><div class=\"tab-rb-submenu-in-block p-relative\"><a href=\"/edit\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light edit p-relative\" data-type=\"page\" data-submenu=\"edit\"><div class=\"sprite-im inline-block edit-icon v-align-mid\" style=\"display:inline-block;margin-left:0px;margin-right: 5px;\">&nbsp;</div><div class=\"submenu-title t-caps inline-block f-color-w v-align-mid \" style='margin-top:-4px;'> edit</div><div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;  float: left;  margin-right: 10px;  margin-top: 10px\">(<span class=\"cnt-no\"></span>)</div></a></div></div>");
        $(".mb-menu a.selected-tab").removeClass("selected-tab");
    },
    carrierOwnerSettingSubmenu: function () {
        var addVendorHTML = "", editButtonHTML = "", privacyButtonHTML = "", preferredVendorEditButtonHTML = "";
        if (localStorage.LoginType == 'Admin') {
            addVendorHTML = "<a id='id-viewaddvendor' href=\"#\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light  p-relative\" data-type=\"agency-addvendor-load\" data-submenu=\"agency-addvendor-load\" style=\"display:none;width:25% !important;\"><div class=\"sprite-im inline-block add-icon v-align-mid\" style=\"display:block;float: left; margin-top: 10px;  margin-left: 9px;\">&nbsp;</div><div class=\"submenu-title t-caps inline-block f-color-w v-align-mid \" style='margin-top:-4px;'> Add Vendor </div><div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;\">(<span class=\"cnt-no\"></span>)</div></a>";
            editButtonHTML = "<a id=\"id-base_edit_box\" href=\"#\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light  p-relative\" data-type=\"agency-edit-load\" data-submenu=\"agency-edit-load\"><div class=\"sprite-im inline-block edit-icon v-align-mid\" style=\"display:block;float: left; margin-top: 10px;margin-left: 11px;  margin-right: -4px;\">&nbsp;</div><div id='id-carrier-edit' class=\"submenu-title t-caps inline-block f-color-w v-align-mid \" style='margin-top:-4px;'> Edit </div></a>";
            privacyButtonHTML = "<a href=\"/privacy\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light privacy p-relative\" data-type=\"page\" data-submenu=\"privacy\"><div class=\"sprite-im inline-block tab-icon v-align-mid\" style=\"display:none;display:block;float: left; margin-top: 10px;\">&nbsp;</div><div class=\"submenu-title t-caps inline-block f-color-w v-align-mid \" style='margin-top:-4px;'> privacy</div><div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;\">(<span class=\"cnt-no\"></span>)</div></a>";
            preferredVendorEditButtonHTML = "<a id=\"id-base_preferred_edit_box\" href=\"#\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light  p-relative\" style=\"display: none;\" data-type=\"agency-remove-load\" data-submenu=\"agency-remove-load\"><div class=\"sprite-im inline-block edit-icon v-align-mid\" style=\"display:block;float: left; margin-top: 10px;  margin-left: 11px;  margin-right: -5px;\">&nbsp;</div><div id='id-base_preferred_edit_box-text' class=\"submenu-title t-caps inline-block f-color-w v-align-mid \" style='margin-top:-4px;'> Edit </div></a>";
        } else {
            addVendorHTML = "";
            editButtonHTML = "";
            privacyButtonHTML = "";
            preferredVendorEditButtonHTML = "";
        }
        $(".mb-submenu").empty();
        $(".mb-submenu").append("<div class=\"mb-submenu-in p-relative\"><div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\">"
                + "<a href=\"#\" class=\"snap left f-sz-16 opensans-light settings t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"settings\">"
                + "<div class=\"\"><div class=\"sprite-im settings-icon inline-block v-align-mid mr-space-10 \" style=\"  margin-top: 5px;\">&nbsp;</div><span class=\"sub-menu-text inline-block v-align-mid\"> settings</span></div></a>"
                + "<div class=\"bcrum-icon-blk left f-color-green f-sz-16 opensans-light\" style=\"display:none;\">&gt;</div>"
                + "<a href=\"#\" class=\"snap left f-sz-16 opensans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"settings-customer\" style=\"display:none;\">"
                + "</a></div><div class=\"tab-rb-submenu inline-block v-align-mid\" style=\"width:53%;\"><div class=\"tab-rb-submenu-in-block p-relative\">"
                + privacyButtonHTML
                + editButtonHTML
                + preferredVendorEditButtonHTML
                + addVendorHTML
                + "</div></div></div>");
        $(".mb-menu a.selected-tab").removeClass("selected-tab");
    },
    MysettingsResponse: function (data) {
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            //if (localStorage.LoginType == 'Admin') {
            RESPONSE.SETTINGTAB_PreferredVendorDATA[0] = data.resultMap.listOfPreferredVendor;
            var html = staticTemplate.customers.staticSettingsTemplate(data);
            TEMPSETTINGSPAGE = html;
            $(".content-holder").empty();
            $(".content-holder").append(html + "</form>");
            $('.settings-agency-bar').css("background-color", "#f34f4e");
            $('#id-agency-view-load').css("color", "white");
            $('.settings-vendor-bar').css("background-color", "#ccc");
            $('#id-preferred-vendors-view-load').css("color", "black");
            utils.server.carrierOwnerSettingSubmenu();
            if (localStorage.LoginType == 'Admin') {
                $("#id-edit-agency-pic").css("display", "block");
                $("#id-edit-agency-pic").css("top", "-100%");
            } else {
                $("#id-edit-agency-pic").css("display", "none");
                $("#id-edit-agency-pic").css("top", "-100%");
            }
            //}
        } else if (localStorage.getItem("LOGIN_LABEL") == "Agency") {

            var privacyHTML = "";
            if (localStorage.LoginType == 'Admin') {
                privacyHTML = '<a href="/privacy" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light privacy p-relative" data-type="page" data-submenu="privacy"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid "  style="  margin-top: -4px;"> privacy</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a>';
            } else {
                privacyHTML = "";
            }
            RESPONSE.SETTINGTAB_PreferredVendorDATA[0] = data.resultMap.listOfPreferredVendor;
            var html = staticTemplate.customers.staticSettingsTemplate(data);
            TEMPSETTINGSPAGE = html;
            $(".content-holder").empty();
            $(".content-holder").append(TEMPSETTINGSPAGE + "</form>");
            $('.settings-agency-bar').css("background-color", "#f34f4e");
            $('#id-agency-view-load').css("color", "white");
            $('.settings-vendor-bar').css("background-color", "#ccc");
            $('#id-preferred-vendors-view-load').css("color", "black");
            var subMenu = '<div class="bcrum-lb-submenu clr-fl inline-block v-align-mid" style="width: 20%;"><a href="#" class="snap left f-sz-16 ptsans-light settings t-upper p-relative f-color-green" data-type="page" data-submenu="settings"><div class=""><div class="sprite-im settings-icon inline-block v-align-mid mr-space-10 ">&nbsp;</div><span class="sub-menu-text inline-block v-align-mid" style="  margin-top: 2px;"> settings</span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="settings-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width: 80%;"><div class="tab-rb-submenu-in-block p-relative"><a href="/save" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light save p-relative" data-type="page" data-submenu="save" style="display:none;"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid "> save</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a>'
                    + privacyHTML
                    + '</div></div>';
            $(".mb-submenu").empty();
            $(".mb-submenu").append(subMenu);
            $(".mb-menu a.selected-tab").removeClass("selected-tab");
            localStorage.setItem("SELECTED_SETTINGS_TAB", "AGENCY_TAB");
            //}
        } else {
            console.log("Super Admin Setting Page");
            RESPONSE.SETTINGTAB_PreferredVendorDATA[0] = data.resultMap.listOfPreferredVendor;
            var html = staticTemplate.customers.staticSettingsTemplate(data);
            TEMPSETTINGSPAGE = html;
            $(".content-holder").empty();
            $(".content-holder").append(TEMPSETTINGSPAGE + "</form>");
            $('.settings-agency-bar').css("background-color", "#f34f4e");
            $('#id-agency-view-load').css("color", "white");
            $('.settings-vendor-bar').css("background-color", "#ccc");
            $('#id-preferred-vendors-view-load').css("color", "black");
            var subMenu = '<div class="bcrum-lb-submenu clr-fl inline-block v-align-mid" style="width: 20%;"><a href="#" class="snap left f-sz-16 ptsans-light settings t-upper p-relative f-color-green" data-type="page" data-submenu="settings"><div class=""><div class="sprite-im settings-icon inline-block v-align-mid mr-space-10 ">&nbsp;</div><span class="sub-menu-text inline-block v-align-mid" style="  margin-top: 2px;"> settings</span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="settings-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width: 80%;"><div class="tab-rb-submenu-in-block p-relative"><a href="/save" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light save p-relative" data-type="page" data-submenu="save" style="display:none;"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid "> save</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a><a href="/privacy" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light privacy p-relative" data-type="page" data-submenu="privacy"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid "  style="  margin-top: -4px;"> privacy</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a></div></div>';
            $(".mb-submenu").empty();
            $(".mb-submenu").append(subMenu);
            $(".mb-menu a.selected-tab").removeClass("selected-tab");
        }

        protocall.events.containerScrollEvent();

        //  $('.carrier-img-width').fillBox();
        protocall.displaySpinner(false);
        $(".div-gototop-button").css("display", "inline-block");



    },
    getResponseForPreferredVendor: function (idvalue) {
        var data = RESPONSE.SETTINGTAB_PreferredVendorDATA[0];
        var footer = "";
        var status = 0;
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            if (element.preferredVendorId == idvalue) {
                var address2 = "";

                if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                    if (element.address2 != undefined) {
                        address2 = element.address2;
                    }
                } else {
                    if (element.address2 != "undefined") {
                        address2 = element.address2;
                    }
                }
                footer = '</div><div class="vendor-detail-block"> <div class="vendor-view-block inline-block v-align-mid p-relative "> '
                        + '<div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> '
                        + '<div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> '
                        + '<div  class="carrier-left-title t-right left">preferred vendor id</div> '
                        + '<div id="id-v-preferredvendorid" class="carrier-left-content t-left right " style="visibility: visible">' + element.preferredVendorId + '</div> '
                        + '<input id="id-vendor-preferredvendorid" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> '
                        + '</div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> '
                        + '<div class="carrier-left-title t-right left">type</div> '
                        + '<div id="id-v-vendortype" class="carrier-left-content t-left right" style="visibility: visible">' + element.serviceType + '</div>'
                        + '<select id="id-vendor-type" class="carrier-left-content-textbox t-left right p-absolute" style="visibility: hidden"><option>Towing Service</option><option>Restoration Serivce</option></select>'
                        + '</div> </div> </div> </div><div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">name</div> <div id="id-v-vendorname" class="carrier-left-content t-left right " style="visibility: visible">' + element.name + '</div> '
                        + '<input id="id-vendor-name" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div>'
                        + '<div id="id-v-vendorphone" class="carrier-left-content t-left right" style="visibility: visible">' + (element.phone).replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3') + '</div> <input id="id-vendor-phone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                        + '<div id="id-v-address1" class="carrier-left-content t-left right ">' + element.address + '</div> <input id="id-vendor-address1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                        + '<div id="id-v-address2" class="carrier-left-content t-left right">' + address2 + '</div> <input id="id-vendor-address2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div id="id-v-city" class="carrier-left-content t-left right ">' + element.city + '</div> <input id="id-vendor-city" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div id="id-v-state" class="carrier-left-content t-left right t-upper">' + element.state + '</div> <input id="id-vendor-state" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div id="id-v-zipcode" class="carrier-left-content t-left right ">' + element.zipcode + '</div> <input id="id-vendor-zipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left"></div> <div class="carrier-left-content t-left right t-upper"></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="vendor-view-right right t-caps opensans-regular"> </div> </div> </div> </div> <div class="vendor-back-button"> <div id="id_back_button" class="vendor-back-bar inline-block p-relative bg-color-green" style="cursor:pointer;">'
                        + '<div class="p-relative inline-block t-caps t-right v-align-mid opensans-light f-color-w">back</div> </div> </div> </div></div> </form>';
                status = 1;
                break;
            }
            if (status == 1) {
                break;
            }
        }

        if (status == 0) {
            footer = "<div>No records</div>";
        }

        $(".content-holder").empty();
        $(".content-holder").append(TEMPSETTINGSPAGE + footer);
        $('.settings-agency-bar').css("background-color", "#ccc");
        $('#id-agency-view-load').css("color", "black");
        $('.settings-vendor-bar').css("background-color", "#f34f4e");
        $('#id-preferred-vendors-view-load').css("color", "white");
        $("#id-canecelbutton").css("display", "none");
        protocall.view.LoadVendorInfo();
        //
        setTimeout(function () {

        }, 1000);
    },
    settingsPreffredVendor: function (data) {
        var address2 = "";
        if (data.address2 != "undefined") {
            address2 = data.address2;
        }


        if (address2 == "undefined") {
            address2 = "undefined";
        }
        var footer = '</div><div class="vendor-detail-block"> <div class="vendor-view-block inline-block v-align-mid p-relative "> '
                + '<div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> '
                + '<div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> '
                + '<div  class="carrier-left-title t-right left">preferred vendor id</div> '
                + '<div id="id-v-preferredvendorid" class="carrier-left-content t-left right " style="visibility: visible">' + data.serviceId + '</div> '
                + '<input id="id-vendor-preferredvendorid" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> '
                + '</div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> '
                + '<div class="carrier-left-title t-right left">type</div> '
                + '<div id="id-v-vendortype" class="carrier-left-content t-left right" style="visibility: visible">' + data.serviceType + '</div>'
                + '<select id="id-vendor-type" class="carrier-left-content-textbox t-left right p-absolute" style="visibility: hidden"><option>Towing Service</option><option>Restoration Serivce</option></select>'
                + '</div> </div> </div> </div><div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">name</div> <div id="id-v-vendorname" class="carrier-left-content t-left right " style="visibility: visible">' + data.serviceName + '</div> <input id="id-vendor-name" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div id="id-v-vendorphone" class="carrier-left-content t-left right" style="visibility: visible">' + (data.phone.number).replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3') + '</div> <input id="id-vendor-phone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div id="id-v-address1" class="carrier-left-content t-left right ">' + data.address1 + '</div> <input id="id-vendor-address1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl">'
                + '<div class="carrier-left-title t-right left">address</div> <div id="id-v-address2" class="carrier-left-content t-left right">' + address2 + '</div> <input id="id-vendor-address2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div id="id-v-city" class="carrier-left-content t-left right ">' + data.city + '</div> <input id="id-vendor-city" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div id="id-v-state" class="carrier-left-content t-left right t-upper">' + data.state + '</div> <input id="id-vendor-state" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="vendor-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div id="id-v-zipcode" class="carrier-left-content t-left right ">' + data.zipcode + '</div> <input id="id-vendor-zipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="vendor-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left"></div> <div class="carrier-left-content t-left right t-upper"></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl"> <div class="vendor-view-right right t-caps opensans-regular"> </div> </div> </div> </div> <div class="vendor-back-button"> <div id="id_back_button" class="vendor-back-bar inline-block p-relative bg-color-green " style="cursor:pointer;"> '
                + '<div class="p-relative inline-block t-caps t-right v-align-mid opensans-light f-color-w" >back</div> </div> </div> </div></div> </form>';
        $(".content-holder").empty();
        $(".content-holder").append(TEMPSETTINGSPAGE + footer);
        $('.settings-agency-bar').css("background-color", "#ccc");
        $('#id-agency-view-load').css("color", "black");
        $('.settings-vendor-bar').css("background-color", "#f34f4e");
        $('#id-preferred-vendors-view-load').css("color", "white");
        protocall.view.LoadVendorInfo();
    },
    submitShareWithRepsData: function () {

        var fromMailId = sessionStorage.userEmailId;
        var representativeId = [];
        var alertID = ALERTID;
        var index = 0;
        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                representativeId[index] = $(this).val();
                index++;
            }

        });
        if (index == 0) {
            $(".error").html("Please select atleat a representative to share..!");
            $(".error").css("display", "block");
            $(".error").css("padding-top", "10px");
            $(".error").css("padding-bottom", "10px");
            $('.error').delay(2000).slideUp('slow');
            return false;
        }



//        
        var userIdListToShare = [];
        var toUserIdValue = "";
        var toUserNameValue = "";
        var userNameListToShare = [];
        var isEntered = false;
        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                isEntered = true;
                toUserIdValue = $(this).val();
                toUserNameValue = $(this).attr("name");
                console.log("toUserNameValue", toUserNameValue);

                userIdListToShare.push({'email': toUserIdValue});
                userNameListToShare.push(toUserNameValue);
            }
        });
        if (userIdListToShare.length != 0) {
            var page = "shareWithRepPage";
            var data = {fromUserId: fromMailId, alertId: alertID, toUserIdList: userIdListToShare, toUserNameList: userNameListToShare};
            var callback = utils.server.getCodeResponseAssignCustomers;
            var deepPath = "sharewithrepresentative";
            utils.server.makeServerCall(page, data, null, deepPath);
        } else {
            console.log("selected share list is empty");
        }
        if (index != 0) {
            protocall.closeOverlay();
        }
        if (isEntered == true) {
            showAlertBox("Shared data successfully..!");
            setTimeout(function () {
                reloadServerCall();
            }, 700);
        }
        protocall.displaySpinner(false);
    },
    submitAssignToCustomers: function () {
        var representativeId = '';

		$(".rep-content-blk").css("opacity","0.5").addClass("spinner1");
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.LoginType == 'Admin') {
                representativeId = localStorage.getItem("CARRIERADMIN_MYREPID");
            }
        } else {
            representativeId = localStorage.getItem("CARRIERADMIN_MYREPID");
        }

        if (representativeId != null) {
            var subIndex = 0;
            CUSTOMERS_LIST = [];
            $('.checkbox').each(function () {
                str = this.checked ? "1" : "0";
                if (str == "1") {
                    CUSTOMERS_LIST[subIndex] = $(this).val();
                    subIndex++;
                }


            });
            if (subIndex == 0) {
                $(".error").html("Please select atleat a customers to Assign..!");
                $(".error").css("display", "block");
                $(".success").css("display", "none");
                $(".error").css("padding-top", "10px");
                $(".error").css("padding-bottom", "10px");
                $('.error').delay(2000).slideUp('slow');
                return false;
            }

            var page = "assignToCustomersOverlay";
			var searchText = $("#id-overlayaiigncustomers").val();
            var selectedOption = $("#timepicker2").text().trim();
            if (selectedOption == "Select All") {
                data = {representativeId: representativeId};
                deepPath = "batchforassigncustomer";
            } else if(searchText != ""){
				data = {representativeId: representativeId, name: searchText};
                deepPath = "assignCustomerForSelectAll";
			} else {
                data = {representativeId: representativeId, userList: CUSTOMERS_LIST};
                deepPath = "assigncustomer";
            }
            var callback = utils.server.getCodeResponseAssignCustomers;
            utils.server.makeServerCall(page, data, callback, deepPath);
        } else {
            protocall.closeOverlay();
            showAlertBox("Selected Representative does not have an Email-Id..!");
        }


    },
    submitAssignToRepsData: function () {


        var representativeId = "";
        var index = 0;
        CUSTOMERS_LIST = [];
        var cusIndex = 0;
        var cusSubIndex = 0;
        $('.getSelectedCustomers').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                CUSTOMERS_LIST[cusSubIndex] = $(this).val();
                cusSubIndex++;
            }
            cusIndex++;
        });
        if (cusSubIndex == 0) {
            CUSTOMERS_LIST[0] = localStorage.getItem("ARRAY_CUSTOMERS_LIST");
        }

        $('.checkbox').each(function () {
            str = this.checked ? "1" : "0";
            if (str == "1") {
                representativeId = $(this).val();
                index++;
            }

        });
        if (index == 0) {
            $(".error").html("Please select atleat a representative to share..!");
            $(".error").css("display", "block");
            $(".error").css("padding-top", "10px");
            $(".error").css("padding-bottom", "10px");
            $('.error').delay(2000).slideUp('slow');
            return false;
        }
        if (index > 1) {
            $(".error").html("You can select only one representative at a time..!");
            $(".error").css("display", "block");
            $(".error").css("padding-top", "10px");
            $(".error").css("padding-bottom", "10px");
            $('.error').delay(2000).slideUp('slow');
            return false;
        }

        var page = "assignToRepsPage";
        var data = {representativeId: representativeId, userList: CUSTOMERS_LIST};
        var callback = utils.server.getCodeResponseAssignCustomers;
        var deepPath = "assigncustomer";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    displayError: function (message) {
    },
    displayError2: function (message) {
    },
    displayMessage: function (message) {
    },
    displayMessage2: function (message) {

    },
    getCodeResponseAssignCustomers: function (data)
    {

        console.log("assign customer response>>>>>", data);
        $(".vendor-label").css("display", "none");
        var message = "";
        if (data.resultMap.TypeCode == '4011') {
            $(".content-holder").removeClass("spinner1").css("opacity", "1");
            //var message = "Message Sent Successfully";
            showAlertBox("Successfully Sent..!");
            //showAlertBox(message);
        } else if (data.resultMap.TypeCode == '4031' && data.resultMap.BatchId != undefined) {
            message = "Select all is in progress, Please wait....!.";
            protocall.displaySpinner(false);
            protocall.closeOverlay();
            var batchIdForSelectAll = data.resultMap.BatchId;
            //showAlertBox(message);
            setTimeout(function () {
                showAlertBox(message);
            }, 500);
            var data = {batchId: batchIdForSelectAll},
            deepPath = "isassigncustomercompleted",
                    callback = utils.server.assignCustomerCompletionStatus,
                    page = "AssignRep";
            utils.server.makeServerCall(page, data, callback, deepPath);
            batchUpdateForSelectAll = setInterval(function () {
                var data = {batchId: batchIdForSelectAll},
                deepPath = "isassigncustomercompleted",
                        callback = utils.server.assignCustomerCompletionStatus,
                        page = "AssignRep";
                utils.server.makeServerCall(page, data, callback, deepPath);
                /*  if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "MY_ALERTS") {
                 pageNumber = 1;
                 sessionStorage.pageNumber = 2;
                 protocall.displaySpinner(true);
                 $(".content-holder").empty();
                 utils.server.makeServerCall(page, data, callback, deepPath);
                 } */
            }, 0.5 * 60 * 1000);
            $(".content-holder").addClass("spinner1").css({"opacity": "0.5 !important"});
            $(".content-holder").css({"opacity": "0.5 !important"});
            /* setTimeout(function(){
             $(".content-holder").addClass("spinner1").css("opacity","0.5");
             $(".content-holder").css({"opacity":"0.5 !important"});
             },100); */
            $(".content-holder").removeClass("spinner1").css("opacity", "1");
        } else if (data.resultMap.TypeCode == '4031') {
			message = "The assignment was successful";
			/* if(CUSTOMERS_LIST.length == 1){
				message = "The representative has been successfully assigned to the customer.";
			} else {
				message = "The assignment was successful";
			} */
            protocall.displaySpinner(false);
            protocall.closeOverlay();

            setTimeout(function () {
                showAlertBox(message);
            }, 500);
            setTimeout(function () {
                if (sessionStorage.selectedTab == "AGENCY_REP_DETAILS_VIEW") {
                    if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                        protocall.myProfile.reloadMyCarrierRepProfile(localStorage.getItem("CARRIERADMIN_MYREPID"));
                    } else if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                        protocall.myProfile.reLoadMyAgencyRepProfile(localStorage.getItem("CARRIERADMIN_MYREPID"));
                    }

                } else if (sessionStorage.selectedTab == "CUSTOMER_VIEW") {
                    module_ServerCall.reLoadparseCustomersData(CUSTOMER.CUSTOMERPAGINATIONUMBER, sessionStorage.isCustomerAlphaSort);

                } else if (sessionStorage.selectedTab == "GLOBAL_SEARCH_CUSTOMER_VIEW") {
                    protocall.view.reLoadSearchResult();
                } else if (sessionStorage.selectedTab == "CUSTOMERS_PAGE") {
                    CUSTOMER.AGENCY.CUSTOMERDATA = [];
                    $(".content-holder").css("opacity", "0.5");
                    $(".content-holder").addClass("spinner1");
                    module_ServerCall.parseCustomersData(CUSTOMER.CUSTOMERPAGINATIONUMBER, sessionStorage.isCustomerAlphaSort);
                }

            }, 2000);
            $(".content-holder").removeClass("spinner1").css("opacity", "1");
            $(".rep-content-blk").removeClass("spinner1").css("opacity", "1");
        } else if (data.resultMap.TypeCode == '4032') {
            $(".content-holder").removeClass("spinner1").css("opacity", "1");
            message = "Please select atleast one customer for the given representative";
            showAlertBox(message);
            utils.server.errorMessage(message);
        } else if (data.resultMap.TypeCode == '4033') {
            $(".content-holder").removeClass("spinner1").css("opacity", "1");
            message = "Authentication Error: Only admin or superadmin can assign customers to the representatives";
            showAlertBox(message);
            utils.server.errorMessage(message);
        } else if (data.resultMap.TypeCode == '4034') {
            $(".content-holder").removeClass("spinner1").css("opacity", "1");
            message = "Shared data  successfully..!";
            showAlertBox(message);
            utils.server.displayMessage(message);
        } else if (data.resultMap.TypeCode == '4012') {
            $(".content-holder").removeClass("spinner1").css("opacity", "1");
            message = "No device token were registered to send the push notification";
            showAlertBox(message);
            utils.server.displayError(message);
        } else if (data.resultMap.TypeCode == '4051') {
            //$(".content-holder").removeClass("spinner1").css("opacity","1");
            var message = "Sucessfully Saved..!";
            protocall.closeOverlay();
            setTimeout(function () {
                showAlertBox(message);
            }, 500);
            utils.server.displayMessage(message);
            //showAlertBox("Successfully Saved..!");
            //showAlertBox(message);
        } else {
            $(".content-holder").removeClass("spinner1").css("opacity", "1");
            console.log("No Propet type code");
        }
//        protocall.closeOverlay();



    },
    assignCustomerCompletionStatus: function (response) {
        console.log("assignCustomerCompletionStatus>>>>>>>>", response);
        CONSTANTS.SELECTALLSTATUS = response.resultMap.isCompleted;
        if (response.resultMap.TypeCode == "4031" && response.resultMap.isCompleted == true) {
            $(".content-holder").removeClass("spinner1").css("opacity", "1");
            clearInterval(batchUpdateForSelectAll);
        } else {
            $(".content-holder").addClass("spinner1").css("opacity", "0.5");
        }
    },
    imagesToServer: function (form, callback, isFormData, qs, pagespinner, imageType, imageContentType) {
        isFormData = (typeof isFormData == "undefined" || isFormData == false) ? false : true;
        var formData;
        var imageValue;
        var res;
        if (!isFormData) {
            var isValidSubmit;
            if (!isValidSubmit) {
                return;
            }
            formData = new FormData(form[0]);
        } else {
            formData = form;
            console.log(formData);
        }
        var imageUploadURL = HOMEPAGERESPONSE.PROFILEAPIFORIMAGE + qs + "?typeOfImage=" + imageType;
        if (imageType == "profilePicture") {
            imageValue = sessionStorage.profilePicAfterUpdate;
        } else {
            imageValue = sessionStorage.profilePicAfterUpdate;
        }
        if (imageContentType == "image/jpeg") {
            res = imageValue.slice(0, 23);
        } else if (imageContentType == "image/png") {
            res = imageValue.slice(0, 22);
        }
        var imageValueAfterReplace = imageValue.replace(res, "");
        console.log("imageValueAfterReplace", imageValueAfterReplace);

        $.ajax({
            type: "POST",
            url: imageUploadURL, processData: false,
            contentType: imageContentType,
            data: imageValueAfterReplace,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                callback(data, form, isFormData);
                HOMEPAGERESPONSE.ISEDITIMAGEICONCLICKED = false;
            },
            error: function (data) {
                console.log(data);
                console.log(data.responseText);
                var errorCode = JSON.parse(data.responseText).ErrorCode;
                var errorMessage = JSON.parse(data.responseText).ErrorMessage;
                if (errorCode == "E4004") {
                    errorMessage = "User already exist, Please try again with different User Name or Email-ID";
                }
                if (pagespinner) {
                    t.ui.hidePageSpinner();
                } else {
                    t.ui.hidePageSpinner();
                }
                t.ui.showToast(errorMessage);
            }
        });
        return false;
    },
    profilePicResponse: function (data) {
        console.log("profilepicupdate", data);
        if (HOMEPAGERESPONSE.ISEDITIMAGEICONCLICKED) {
            $('.setProfilePic').attr('src', sessionStorage.profilePicAfterUpdate);
            sessionStorage.profilePic = sessionStorage.profilePicAfterUpdate;

            $('.setProfilePic').fillBox();
        } else {
            $('.setAgencyPic').attr('src', sessionStorage.profilePicAfterUpdate);
            sessionStorage.agencyLogo = sessionStorage.profilePicAfterUpdate;

            $('.setProfilePic').fillBox();
        }

    },
    getCodeResponse: function (code) {
        var message = "Somthing Went wrong, please try again";
        if (code == "E4004") {
            message = "User already exist, Please try again with different User Name or Email-ID";
        } else if (code == "S2001") {
            message = "Data Created Successfully...";
        }
        return message;
    },
    generalRequest: function (data, type, callback, qs, ref, pagespinner) {
        if (pagespinner) {
            t.ui.showPageSpinner();
        }
        $.ajax({
            type: type,
            retryMax: 3, timeout: 15000,
            url: BASE_URL + qs,
            data: data,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                if (callback) {
                    callback(data, ref);
                }
                if (pagespinner) {
                    t.ui.hidePageSpinner();
                }
            },
            error: function (jqXHRError, textStatus, errorThrown) {
                if (callback) {
                    callback(jqXHRError, ref);
                }
                if (pagespinner) {
                    t.ui.hidePageSpinner();
                }
                t.ui.showToast(textStatus);
            }
        });
    },
};
function sharewithRepSelectAllDropDown(isNone) {
    sessionStorage.FILTERBOX2_CONTENT = "";
    var filterHtml = "<div id='id-overlaymenu' style='max-height: 120px;overflow: auto;'>";
    if (isNone == "true") {

        filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >None</div>";
        filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >Select All</div>";

        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        $.each(alphabet, function (letter) {
            filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' > Section " + alphabet[letter] + "</div>";

        });
    } else {
        filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >None</div>";
    }

    sessionStorage.FILTERBOX2_CONTENT = filterHtml + "</div>";
}

function onKeyPressEventAssignCustomers(tag) {
    console.log("method invoked for Assign Customer");
    $(".rep-content-blk").empty();
    clearTimeout(typingTimer);
    MYREPS.ASSIGNCUSTOMERRESPONSE == []
    //console.log("search text>>>>>>>",searchText);
    typingTimer = setTimeout(function () {
		$("#id-assign-cus-selectall").html("Select All");
		$("#name-selectall").removeAttr('checked');
        var searchText = $(tag).val();
        console.log("search text>>>>>>>", searchText);
        if (searchText == "" || searchText == null) {
            var finalHtml = "<form>";
            MYREPS.SEARCHFORCUSTOMER = false;
            MYREPS.ASSIGNCUSTOMERRESPONSE = MYREPS.ASSIGNCUSTOMERFIRSTPAGE;
            $.each(MYREPS.ASSIGNCUSTOMERRESPONSE, function (index, customerValue) {
                var customerName = customerValue.firstName + " " + customerValue.lastName;
                customerName = customerName.replace("undefined", " ");
                var customerCity = customerValue.residentialCity;
                console.log("customerCity>>>>>>>>>");
                var customerState = customerValue.residentialState;
                var customerEmailId = customerValue.userId;
                var location = customerCity + ", " + customerState;
                location = location.replace("undefined", "");

                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' style=''>" + location + "</div> </div> </label> </div>";
                finalHtml = finalHtml + tempHtml;
                tempHtml = "";
            });
            $(".rep-content-blk").html(finalHtml + "</form>");
            $(".rep-content-blk").animate({scrollTop: 0}, 500);
        } else {
            //$(".rep-content-blk").empty();
            console.log("making server call for assign customer search");
            var data = {isCustomer: true, name: searchText},
            deepPath = "customersearchusingsearchapi",
                    callback = protocall.view.assignCustomerResponse,
                    page = "AssignCustomer";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }
    }, doneTypingInterval);
}

function onKeyPressEventshareWithRep(tag) {
    var searchText = $(tag).val().toUpperCase();
    if (searchText !== "" && searchText !== null) {
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            if (RESPONSE_ARRAY[index][0].toUpperCase().indexOf(searchText) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var customerState = RESPONSE_ARRAY[index][2];
                var customerEmailId = RESPONSE_ARRAY[index][3];
                var location = customerCity;
                if (RESPONSE_ARRAY[index][2] != undefined) {
                    if (RESPONSE_ARRAY[index][2] != "") {
                        location = location + ", " + RESPONSE_ARRAY[index][2];
                    }
                }
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' style=''>" + location + "</div> </div> </label> </div>";
                finalHtml = finalHtml + tempHtml;
                tempHtml = "";
            }
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

        $(".rep-content-blk").html(finalHtml + "</form>");

    } else {
        var finalHtml = "<form>";
        for (index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerState = RESPONSE_ARRAY[index][2];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + ", " + RESPONSE_ARRAY[index][2];
                }
            }
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' style=''>" + location + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        $(".rep-content-blk").html(finalHtml + "</form>");

    }


}

function onKeyPressEventPrivacy(tag) {
    var searchText = $(tag).val().toUpperCase();
    if (searchText !== "" && searchText !== null) {
        var finalHtml = "<form>";
        var subIndex = 0;
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            if (RESPONSE_ARRAY[index][0].toUpperCase().indexOf(searchText) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var customerState = "";
                var customerEmailId = RESPONSE_ARRAY[index][3];
                var privacy = RESPONSE_ARRAY[index][4];
                var carrierAgencyRepresentativeId = RESPONSE_ARRAY[index][5];
                var privacystatus = RESPONSE_ARRAY[index][6];
                if (carrierAgencyRepresentativeId == "undefined" || carrierAgencyRepresentativeId == null) {
                    carrierAgencyRepresentativeId = "";
                }

                if (privacy == "on") {
                    toggleStyle = "margin-left:50px";
                    console.log("privacy--->name", customerName + " status" + privacy + "50");
                } else {
                    toggleStyle = "margin-left:-10px";
                    console.log("privacy--->name", customerName + " status" + privacy + "-10");
                }

                if (privacy == "undefined") {
                    privacy = customerEmailId + "#off";
                } else {
                    privacy = customerEmailId + "#" + privacy;
                }

                var tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\"> <input type=\"checkbox\" id='name" + subIndex + "'  class=\"checkbox\" / > <label for='name" + subIndex + "' class=\"rep-label1\" > <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\" style=\"width:30%;\">" + customerName + "</div> " + "<div class=\"nameRepId f-sz-14 text-color-overlay left\"><i>" + carrierAgencyRepresentativeId + "</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + subIndex + "-switch-container\" class=\"bootstrap-switch-container\" style=" + toggleStyle + "> "
                        + "<span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\"  onclick=\"moveani(" + subIndex + ",\'id-switch-on\', \'id" + subIndex + "-switch-container\')\"><div  class=\"togglevalue" + subIndex + "\" style=\"display:none;\">" + privacystatus + "</div> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\"  onclick=\"moveani(" + subIndex + ",\'id-switch-off\', \'id" + subIndex + "-switch-container\')\"> OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </div> ";
                finalHtml = finalHtml + tempHtml;
                tempHtml = "";
                subIndex++;
            }
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

        $(".rep-content-blk").html(finalHtml + "</form>");

    } else {
        var finalHtml = "<form>";
        for (index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerState = "";
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var privacy = RESPONSE_ARRAY[index][4];
            var carrierAgencyRepresentativeId = RESPONSE_ARRAY[index][5];
            var privacystatus = RESPONSE_ARRAY[index][6];
            if (carrierAgencyRepresentativeId == "undefined" || carrierAgencyRepresentativeId == null) {
                carrierAgencyRepresentativeId = "";
            }
            var toggleStyle = "";
            if (privacy == "on") {
                toggleStyle = "margin-left:50px";
            } else {
                toggleStyle = "margin-left:-10px";
            }

            if (privacy == "undefined") {
                privacy = customerEmailId + "#off";
            } else {
                privacy = customerEmailId + "#" + privacy;
            }
            var tempHtml = "<div class=\"rep-grp-blk opensans-regular border-bot text-color-overlay p-relative\"> <input type=\"checkbox\" id='name" + index + "'  class=\"checkbox\" /> <label for='name" + index + "' class=\"rep-label1\" > <div class=\"lbl-in-block p-relative\"> <div class=\"f-sz-14 text-color-overlay left rep-name\" style=\"width:20%;\">" + customerName + "</div> "
                    + "<div class=\"nameRepId f-sz-14 text-color-overlay left\"><i>" + carrierAgencyRepresentativeId + "</i></div> <div class=\"t-caps f-sz-13 right t-right location-color rep-location\"> <div class=\"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on\"> <div id=\"id" + index + "-switch-container\" class=\"bootstrap-switch-container\" style=" + toggleStyle + "> "
                    + "<span id=\"id-switch-on\" class=\"bootstrap-switch-handle-on bootstrap-switch-primary\"  onclick=\"moveani(" + index + ",\'id-switch-on\', \'id" + index + "-switch-container\')\"><div  class=\"togglevalue" + index + "\" style=\"display:none;\">" + privacystatus + "</div> ON</span> <span class=\"bootstrap-switch-label\">&nbsp;</span> <span id=\"id-switch-off\" class=\"bootstrap-switch-handle-off bootstrap-switch-default\"  onclick=\"moveani(" + index + ",\'id-switch-off\', \'id" + index + "-switch-container\')\"> OFF</span> <input type=\"checkbox\" checked=\"\"></div></div> </div> </div> </div> ";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }
        $(".rep-content-blk").html(finalHtml + "</form>");

    }


}

function sortbyBox1() {
    $("#id-overlayaiigncustomers").val("");
    sessionStorage.FILTERBOX2_CONTENT = "";
    MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
    var filterHtml = "<div id='id-overlaymenu' style='max-height: 120px;overflow: auto;'>";
    var selectedOption = $("#timepicker").text().trim();
    if (selectedOption == "Alphabetical") {
// RESPONSE_ARRAY.sort();
        //RESPONSE_ARRAY = [];
        MYREPS.ASSIGNCUSTOMERRESPONSE = [];
        $(".range-sel3").css("display", "none");
        $(".range-sel2").attr("style", "width:44.9% !important;");
        $(".range-sel1").attr("style", "width:31.6% !important;");
        filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >None</div>";
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        $.each(alphabet, function (letter) {
            filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' > Section " + alphabet[letter] + "</div>";
        });
        var finalHtml = "<form>";
        sessionStorage.FILTERBOX2_CONTENT = filterHtml + "</div>";
        $.each(MYREPS.ASSIGNCUSTOMERFIRSTPAGE, function (index, customerValue) {
            var userId = customerValue.userId;
            var customerName = customerValue.firstName + " " + customerValue.lastName;
            customerName = customerName.replace("undefined", "");
            var location = customerValue.residentialCity + " " + customerValue.residentialState;
            location = location.replace("undefined", "");
            if (customerValue.email != undefined) {
                customerEmailId = customerValue.emailId.email;
            } else {
                customerEmailId = "";
            }
            finalHtml += "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + userId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' style=' '>" + location + "</div> </div> </label> </div>";
        });
        /* for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
         var customerName = RESPONSE_ARRAY[index][0];
         var customerCity = RESPONSE_ARRAY[index][1];
         var customerState = RESPONSE_ARRAY[index][2];
         var customerEmailId = RESPONSE_ARRAY[index][3];
         var location = customerCity;
         if (RESPONSE_ARRAY[index][2] != undefined) {
         if (RESPONSE_ARRAY[index][2] != "") {
         location = location + "" + RESPONSE_ARRAY[index][2];
         }
         }
         
         var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
         finalHtml = finalHtml + tempHtml;
         tempHtml = "";
         } */

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
        $(".rep-content-blk").html(finalHtml + "</form>");
        $(".rep-content-blk").animate({scrollTop: 0}, 500);
    } else if (selectedOption == "City, State") {
        RESPONSE.ARRAYFORCITYANDSTATE = [];
        MYREPS.ASSIGNCUSTOMERRESPONSE = [];
        var finalHtml = "<form>";
        $(".range-sel2").attr("style", "width:30% !important;margin-right:10px;");
        $(".range-sel1").attr("style", "width:22% !important;");
        $(".range-sel3").css("display", "block").attr("style", "width:22% !important");
        //$('#timepicker2').empty();
        filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >None</div>";
        var TEMP_ARRAY = [];
        TEMP_ARRAY = ['Alabama (AL)', 'Alaska (AK)', 'Arizona (AZ)', 'Arkansas (AR)', 'California (CA)', 'Colorado (CO)', 'Connecticut (CT)', 'Delaware (DE)', 'District Of Columbia (DC)', 'Florida (FL)', 'Georgia (GA)', 'Hawaii (HI)', 'Idaho (ID)', 'Illinois (IL)', 'Indiana (IN)', 'Iowa (IA)', 'Kansas (KS)', 'Kentucky (KY)', 'Louisiana (LA)', 'Maine (ME)', 'Maryland (MD)', 'Massachusetts (MA)', 'Michigan (MI)', 'Minnesota (MN)', 'Mississippi (MS)', 'Missouri (MO)', 'Montana (MT)', 'Nebraska (NE)', 'Nevada (NV)', 'New Hampshire (NH)', 'New Jersey (NJ)', 'New Mexico (NM)', 'New York (NY)', 'North Carolina (NC)', 'North Dakota (ND)', 'Ohio (OH)', 'Oklahoma (OK)', 'Oregon (OR)', 'Pennsylvania (PA)', 'Rhode Island (RI)', 'South Carolina (SC)', 'South Dakota (SD)', 'Tennessee (TN)', 'Texas (TX)', 'Utah (UT)', 'Vermont (VT)', 'Virginia (VA)', 'Washington (WA)', 'West Virginia (WV)', 'Wisconsin (WI)', 'Wyoming (WY)'];
        for (var i = 0; i < TEMP_ARRAY.length; i++) {
            filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >" + TEMP_ARRAY[i] + "</div>";
            //$('#timepicker2').append($('<option> ' + TEMP_ARRAY[i] + '</option>'));
        }
        sessionStorage.FILTERBOX2_CONTENT = filterHtml + "</div>";
        var deepPathName = "userlistsortedbylocation";
        var data = {pageNumber: ++MYREPS.ASSIGNCUSTOMERPAGENUMBER}
        var path = utils.server.getServerPath(deepPathName);
        var request = path(data).execute(function (resp) {
            if (resp.error) {
                t.server.handleError(resp);
            } else {
                if (resp.resultMap.TypeCode == "4011") {
                    RESPONSE.ARRAYFORCITYANDSTATE = resp.resultMap.ArrayOfUserDetails;
                    console.log("city and state sucess");
                    for (var index = 0; index < RESPONSE.ARRAYFORCITYANDSTATE.length; index++) {
                        var firstName = RESPONSE.ARRAYFORCITYANDSTATE[index].firstName;
                        var lastName = RESPONSE.ARRAYFORCITYANDSTATE[index].lastName;
                        var customerName = firstName + " " + lastName;
                        var customerCity = RESPONSE.ARRAYFORCITYANDSTATE[index].residentialCity;
                        var customerState = RESPONSE.ARRAYFORCITYANDSTATE[index].residentialState;
                        var customerEmailId = RESPONSE.ARRAYFORCITYANDSTATE[index].userId;
                        var location = customerCity;
                        if (RESPONSE.ARRAYFORCITYANDSTATE[index].residentialState != undefined) {
                            if (RESPONSE.ARRAYFORCITYANDSTATE[index].residentialState != "") {
                                location = location + "," + RESPONSE.ARRAYFORCITYANDSTATE[index].residentialState;
                            }
                        }
                        var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "'  class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
                        finalHtml = finalHtml + tempHtml;
                    }
                    //tempHtml = "";
                    if (finalHtml == "<form>") {
                        var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
                        finalHtml = finalHtml + tempHtml;
                    }
                    $(".rep-content-blk").html(finalHtml + "</form>");
                } else {
                    RESPONSE.ARRAYFORCITYANDSTATE = [];
                }
            }
        });
        $(".rep-content-blk").animate({scrollTop: 0}, 500);
    } else {
        $(".range-sel3").css("display", "none");
        $(".range-sel2").attr("style", "width:44.9% !important;");
        $(".range-sel1").attr("style", "width:31.6% !important;");
        // $('#timepicker2').empty();
        var mailId = "";
        MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
        var finalHtml = "<form>";
        //sessionStorage.FILTERBOX2_CONTENT = filterHtml + "</div>";
        $.each(MYREPS.ASSIGNCUSTOMERFIRSTPAGE, function (index, customerValue) {
            var userId = customerValue.userId;
            var customerName = customerValue.firstName + " " + customerValue.lastName;
            customerName = customerName.replace("undefined", "");
            var location = customerValue.residentialCity + " " + customerValue.residentialState;
            location = location.replace("undefined", "");
            if (customerValue.email != undefined) {
                customerEmailId = customerValue.emailId.email;
            } else {
                customerEmailId = "";
            }
            finalHtml += "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + userId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' style=' '>" + location + "</div> </div> </label> </div>";
        });
        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
        $(".rep-content-blk").html(finalHtml + "</form>");
        //utils.server.gotAssignCustomersResponse(mailId);
        /* sharewithRepSelectAllDropDown("true");
         var finalHtml = "<form>";
         for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
         var customerName = RESPONSE_ARRAY[index][0];
         var customerCity = RESPONSE_ARRAY[index][1];
         var customerState = RESPONSE_ARRAY[index][2];
         var customerEmailId = RESPONSE_ARRAY[index][3];
         var location = customerCity;
         if (RESPONSE_ARRAY[index][2] != undefined) {
         if (RESPONSE_ARRAY[index][2] != "") {
         location = location + "" + RESPONSE_ARRAY[index][2];
         }
         }
         
         var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
         finalHtml = finalHtml + tempHtml;
         tempHtml = "";
         }
         
         if (finalHtml == "<form>") {
         var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
         finalHtml = finalHtml + tempHtml;
         }
         $(".rep-content-blk").html(finalHtml + "</form>"); */
        $(".rep-content-blk").animate({scrollTop: 0}, 500);
    }

}

function sortByBox3() {

}

var unique = function (origArr) {
    var newArr = [],
            origLen = origArr.length,
            found, x, y;
    for (x = 0; x < origLen; x++) {
        found = undefined;
        for (y = 0; y < newArr.length; y++) {
            if (origArr[x] == newArr[y]) {
                found = true;
                break;
            }
        }
        if (!found) {
            newArr.push(origArr[x]);
        }
    }
    return newArr;
}

function Sharewithrep_sortbyBox1(idvalue) {
    var selectedOption = document.getElementById("timepicker").value;
    sessionStorage.FILTERBOX2_CONTENT = "";

    if (selectedOption == "Alphabetical") {

        var filterHtml = "<div id='id-overlaymenu' style='max-height: 120px;overflow: auto;'>";
        filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >None</div>";
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        $.each(alphabet, function (letter) {
            filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >" + alphabet[letter] + "</div>";
        });
        filterHtml = filterHtml + "</div>";

        sessionStorage.FILTERBOX2_CONTENT = filterHtml;
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + ", " + RESPONSE_ARRAY[index][2];
                }
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
    } else if (selectedOption == "City, State") {
        // $('#timepicker2').empty();
        // $("#timepicker2").prop("disabled", false);
        var TEMP_ARRAY = [];
        for (var i = 0; i < RESPONSE_ARRAY.length; i++) {
            TEMP_ARRAY[i] = RESPONSE_ARRAY[i][1].toUpperCase();
            if (RESPONSE_ARRAY[i][2] != undefined && RESPONSE_ARRAY[i][2] != "undefined") {
                if (RESPONSE_ARRAY[i][2] != "") {
                    TEMP_ARRAY[i] = TEMP_ARRAY[i].trim() + ", " + RESPONSE_ARRAY[i][2];
                }

            }
        }
        TEMP_ARRAY = unique(TEMP_ARRAY);
        TEMP_ARRAY.sort();
        var filterHtml = "<div id='id-overlaymenu' style='max-height: 120px;overflow: auto;'>";
        filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >None</div>";
        for (var i = 0; i < TEMP_ARRAY.length; i++) {
            filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >" + TEMP_ARRAY[i] + "</div>";
        }
        filterHtml = filterHtml + "</div>";

        sessionStorage.FILTERBOX2_CONTENT = filterHtml;
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "," + RESPONSE_ARRAY[index][2];
                }
            }
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
    } else {
        var filterHtml = "<div id='id-overlaymenu' style='max-height: 120px;overflow: auto;'>";
        filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >None</div>";
        filterHtml = filterHtml + "</div>";

        sessionStorage.FILTERBOX2_CONTENT = filterHtml;

        if (idvalue == "sharewithrep") {
            sharewithRepSelectAllDropDown("false");
        } else {
            sharewithRepSelectAllDropDown("true");
        }
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + ", " + RESPONSE_ARRAY[index][2];
                }
            }
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }
        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
    }

    $(".rep-content-blk").html(finalHtml + "</form>");


}

function assignCustomersSortbyBox2() {
    var selectedOption = document.getElementById("timepicker2").value;
    if (selectedOption == "Select All") {
        $('.checkbox').each(function () {
            this.checked = true;
        });
    } else {
        $("input[name='" + selectedOption.charAt(8).toUpperCase() + "']").each(function () {
            this.checked = true;
        });
    }

}

function sharewithRepSortbyBox2() {
    var selectedOption = document.getElementById("timepicker2").value;
    if (selectedOption == "None") {
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {             //if (RESPONSE_ARRAY[index][1].indexOf(selectedOption) > -1) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + ", " + RESPONSE_ARRAY[index][2];
                }
            }
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = ""; //}
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

        $(".rep-content-blk").html(finalHtml + "</form>");

    } else if (selectedOption.indexOf("Section") > -1) {
        var char = selectedOption.trim().charAt(8).toUpperCase();
        var finalHtml = "<form>";


        var dataq = {sectionCharacter: char};
        var path = "";
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            path = utils.server.getServerPath("agencyrepresentativelistsortedbynamewithsection");
        } else {
            path = utils.server.getServerPath("carrierrepresentativelistsortedbynamewithsection");
        }
        var request = path(dataq).execute(function (resp) {
            if (resp.error) {
                t.server.handleError(resp);
            } else {

//No carrier Representative list were available
//No agency Representative list were available
                var flag = false;
                var arrayElement = "";
                if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                    if (resp.resultMap.AlertMessage != "No agency Representative list were available") {
                        flag = true;
                        arrayElement = resp.resultMap.ArrayOfCarriersDetails;
                    } else {
                        flag = false;
                    }
                } else {
                    if (resp.resultMap.AlertMessage != "No carrier Representative list were available") {
                        flag = true;
                        arrayElement = resp.resultMap.ArrayOfCarriersDetails;
                    } else {
                        flag = false;
                    }
                }
                if (flag == true) {
                    for (var index = 0; index < arrayElement.length; index++) {
                        var element = arrayElement[index];
                        var firstName, lastname, customerName, city, state, location, customerEmailId = "";

                        try {
                            firstName = element.firstName;
                        } catch (e) {
                            firstName = "";
                        }

                        try {
                            lastname = element.lastName;
                        } catch (e) {
                            lastname = "";
                        }

                        customerName = firstName + " " + lastname;

                        try {
                            city = element.residentialCity;
                        } catch (e) {
                            city = "";
                        }

                        try {
                            state = element.residentialState;
                        } catch (e) {
                            state = "";
                        }

                        location = city + ", " + state;

                        try {
                            customerEmailId = element.agencyRepresentativeId.email;
                        } catch (e) {
                            customerEmailId = "";
                        }

                        var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + lastname.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
                        finalHtml = finalHtml + tempHtml;
                        tempHtml = "";

                    }
                } else {
                    var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
                    finalHtml = finalHtml + tempHtml;
                }

                $(".rep-content-blk").html(finalHtml + "</form>");


            }
        });

    } else {
        var finalHtml = "<form>";
        var tempHtml = "";
        var repDetailsHTML = "", customerName = "", customerCity = "", customerEmailId = "", location = "";
        var selectedCategory = document.getElementById("timepicker").value;
        if (selectedCategory == "Alphabetical") {
            for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
                if (RESPONSE_ARRAY[index][0].toUpperCase().split(" ")[1].indexOf(selectedOption) == 0) {
                    customerName = RESPONSE_ARRAY[index][0];
                    customerCity = RESPONSE_ARRAY[index][1];
                    customerEmailId = RESPONSE_ARRAY[index][3];
                    location = customerCity;
                    if (RESPONSE_ARRAY[index][2] != undefined) {
                        if (RESPONSE_ARRAY[index][2] != "") {
                            location = location + ", " + RESPONSE_ARRAY[index][2];
                        }
                    }
                    repDetailsHTML = "<input type='checkbox'  value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label>";
                    tempHtml = "";
                } else {
                    console.log("no match found");
                }
                if (repDetailsHTML != "") {
                    tempHtml += "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'>"
                            + repDetailsHTML
                            + "</div>";
                    repDetailsHTML = "";
                }
            }
            for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
                if (RESPONSE_ARRAY[index][0].toUpperCase().split(" ")[0].indexOf(selectedOption) == 0) {
                    customerName = RESPONSE_ARRAY[index][0];
                    customerCity = RESPONSE_ARRAY[index][1];
                    customerEmailId = RESPONSE_ARRAY[index][3];
                    location = customerCity;
                    if (RESPONSE_ARRAY[index][2] != undefined) {
                        if (RESPONSE_ARRAY[index][2] != "") {
                            location = location + ", " + RESPONSE_ARRAY[index][2];
                        }
                    }
                    repDetailsHTML = "<input type='checkbox'  value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label>";
                    //tempHtml = "";
                } else {
                    console.log("no match found");
                }
                if (repDetailsHTML != "") {
                    tempHtml += "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'>"
                            + repDetailsHTML
                            + "</div>";
                    repDetailsHTML = "";
                }
            }
            if (tempHtml != "") {
                finalHtml = finalHtml + tempHtml;
                //tempHtml = "";
            }
            /* if(repDetailsHTML != ""){
             tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'>"
             +repDetailsHTML
             +"</div>";
             finalHtml = finalHtml + tempHtml;
             repDetailsHTML = "";
             } */
        } else {
            for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
                if (RESPONSE_ARRAY[index][1].toUpperCase().indexOf(selectedOption.split(',')[0]) > -1) {
                    var customerName = RESPONSE_ARRAY[index][0];
                    var customerCity = RESPONSE_ARRAY[index][1];
                    var customerEmailId = RESPONSE_ARRAY[index][3];
                    var location = customerCity;
                    if (RESPONSE_ARRAY[index][2] != undefined) {
                        if (RESPONSE_ARRAY[index][2] != "") {
                            location = location + ", " + RESPONSE_ARRAY[index][2];
                        }
                    }
                    var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
                    finalHtml = finalHtml + tempHtml;
                    tempHtml = "";
                }
            }
        }
        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

        $(".rep-content-blk").html(finalHtml + "</form>");

    }

}

function sendAppLinkSortbyBox1() {
    var selectedOption = document.getElementById("timepicker").value;
    sessionStorage.FILTERBOX2_CONTENT = "";
    var filterHtml = "<div id='id-overlaymenu' style='max-height: 120px;overflow: auto;'>";
    if (selectedOption == "Alphabetical") {
        RESPONSE_ARRAY.sort();
        filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >None</div>";
        filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >Select All</div>";

        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        $.each(alphabet, function (letter) {
            filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' > Section " + alphabet[letter] + "</div>";
        });
        var finalHtml = "<form>";
        sessionStorage.FILTERBOX2_CONTENT = filterHtml + "</div>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "" + RESPONSE_ARRAY[index][2];
                }
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

    } else if (selectedOption == "City, State") {

        filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' >None</div>";
        var TEMP_ARRAY = [];
        for (var i = 0; i < RESPONSE_ARRAY.length; i++) {
            TEMP_ARRAY[i] = RESPONSE_ARRAY[i][1].toUpperCase();
            if (RESPONSE_ARRAY[i][2] != undefined && RESPONSE_ARRAY[i][2] != "undefined") {
                if (RESPONSE_ARRAY[i][2] != "") {
                    TEMP_ARRAY[i] = TEMP_ARRAY[i] + "" + RESPONSE_ARRAY[i][2];
                }

            }
        }
        TEMP_ARRAY = unique(TEMP_ARRAY);
        TEMP_ARRAY.sort();
        for (var i = 0; i < TEMP_ARRAY.length; i++) {
            filterHtml = filterHtml + "<div id='filterbox2-alpha' class='snap  prof-view-overlay-sort' > " + TEMP_ARRAY[i] + "</div>";
            //$('#timepicker2').append($('<option> ' + TEMP_ARRAY[i] + '</option>'));
        }
        sessionStorage.FILTERBOX2_CONTENT = filterHtml + "</div>";
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "" + RESPONSE_ARRAY[index][2];
                }
            }

            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
    } else {
        if (idvalue == "sharewithrep") {
            sharewithRepSelectAllDropDown("false");
        } else {
            sharewithRepSelectAllDropDown("true");
        }
        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            var customerName = RESPONSE_ARRAY[index][0];
            var customerCity = RESPONSE_ARRAY[index][1];
            var customerEmailId = RESPONSE_ARRAY[index][3];
            var location = customerCity;
            if (RESPONSE_ARRAY[index][2] != undefined) {
                if (RESPONSE_ARRAY[index][2] != "") {
                    location = location + "" + RESPONSE_ARRAY[index][2];
                }
            }
            var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
            finalHtml = finalHtml + tempHtml;
            tempHtml = "";
        }
        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }
    }

    $(".rep-content-blk").html(finalHtml + "</form>");

}
function sendAppLinkSortbyBox2() {
    var selectedOption = document.getElementById("timepicker2").value;
    if (selectedOption == "Select All") {
        $('.checkbox').each(function () {
            this.checked = true;
        });
    } else if (selectedOption.indexOf("Section") > -1) {
        $("input[name='" + selectedOption.trim().charAt(8).toUpperCase() + "']").each(function () {
            if (this.checked == true) {
                this.checked = false;
            } else {
                this.checked = true;
            }
        });
    } else {

        var finalHtml = "<form>";
        for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
            if (((RESPONSE_ARRAY[index][1].toUpperCase()) + (RESPONSE_ARRAY[index][2].toUpperCase())).indexOf(selectedOption.split(',')[0]) > -1) {
                var customerName = RESPONSE_ARRAY[index][0];
                var customerCity = RESPONSE_ARRAY[index][1];
                var customerState = RESPONSE_ARRAY[index][2];
                var customerEmailId = RESPONSE_ARRAY[index][3];
                var location = customerCity;
                if (RESPONSE_ARRAY[index][2] != undefined) {
                    if (RESPONSE_ARRAY[index][2] != "") {
                        location = location + "" + RESPONSE_ARRAY[index][2];
                    }
                }
                var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
                finalHtml = finalHtml + tempHtml;
                tempHtml = "";
            }
        }

        if (finalHtml == "<form>") {
            var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
            finalHtml = finalHtml + tempHtml;
        }

        $(".rep-content-blk").html(finalHtml + "</form>");

    }
}

function fuct_sortbyBox2(isSelectedAll) {
    $("#id-overlayaiigncustomers").val("");
    RESPONSE.CITYLIST = [];
    MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
    var counter = 0;
    MYREPS.SORTBYBOXCHANGED = true;
    sessionStorage.isNextPageForAssignRep = false;
    sessionStorage.isNextPageForAssignRepAlphabetical = false;
    var selectedOption = "None";
    if (isSelectedAll) {
        selectedOption = "Select All";
    }
//    var selectedOption = $("#timepicker2").text().trim();
//    var selectedOption1 = $("#timepicker").text().trim();
    
    if (selectedOption == "Select All" || selectedOption == "None") {
        MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
        RESPONSE_ARRAY = [];
//        if (selectedOption == "None" || selectedOption == "Alphabetical") {
        deepPath = "userlistsortedbyname";
//        }
//        } else {
//            deepPath = "userlistsortedbylocation";
//        }
        //counter++;
        assignRepSelectionBlock(deepPath, isSelectedAll);
    } else if (selectedOption.indexOf("Section") > -1) {
        RESPONSE_ARRAY = [];
        var deepPath = "userlistsortedbynameforsection";
        assignRepSelectionBlock(deepPath, isSelectedAll);
        //$(".rep-block").removeClass("spinner1").css("opacity","1");
    } else {
        sessionStorage.FILTERBOX2_CONTENTCITY = "";
        RESPONSE.CITYLIST = [];
        RESPONSE_ARRAY = [];
        if (selectedOption != "None") {
            var filterHtml = "<div id='id-overlaymenu' style='max-height: 120px;overflow: auto;overflow-x:hidden;'>";
            $(".rep-block").removeClass("spinner2").css("opacity", "1");
//			console.log("currentTargetValue",currentTargetValue.text());
            var stateCode = currentTargetValue.text().split("(")[1].split(")")[0];
            console.log("currentTargetValueText", stateCode);
            urlValue = "JSON/" + stateCode + ".json";
            console.log("url value", urlValue);
            $.ajax(
                    {
                        url: urlValue,
                        type: 'GET',
                        dataType: 'json',
                        success: function (data) {
                            console.log("Data", data.result);
                            $.each(data.result, function (index, element) {
                                console.log("city value is", element.City);
                                RESPONSE.CITYLIST.push(element.City);
                            });
                            RESPONSE.CITYLIST.sort();
                            for (var i = 0; i < RESPONSE.CITYLIST.length; i++) {
                                filterHtml = filterHtml + "<div id='filterbox3-alpha' class='snap  prof-view-overlay-sort' >" + RESPONSE.CITYLIST[i] + "</div>";
                                //$('#timepicker2').append($('<option> ' + TEMP_ARRAY[i] + '</option>'));
                            }
                            sessionStorage.FILTERBOX2_CONTENTCITY = filterHtml + "</div>";
                            //$("#timepicker3").html('None');
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log("error");
                        }
                    });
        }
        $(".rep-content-blk").animate({scrollTop: 0}, 500);
        /* var finalHtml = "<form>";
         for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
         if (RESPONSE_ARRAY[index][1].toUpperCase().indexOf(selectedOption.split(',')[0]) > -1) {
         var customerName = RESPONSE_ARRAY[index][0];
         var customerCity = RESPONSE_ARRAY[index][1];
         var customerState = RESPONSE_ARRAY[index][2];
         var customerEmailId = RESPONSE_ARRAY[index][5];
         var location = customerCity;
         if (customerState != undefined) {
         if (customerState != "") {
         location = location + "" + customerState;
         }
         }
         var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
         finalHtml = finalHtml + tempHtml;
         tempHtml = "";
         $(".rep-block").removeClass("spinner2").css("opacity","1");
         } else if (selectedOption == "None") {
         var customerName = RESPONSE_ARRAY[index][0];
         var customerCity = RESPONSE_ARRAY[index][1];
         var customerState = RESPONSE_ARRAY[index][2];
         var customerEmailId = RESPONSE_ARRAY[index][5];
         var location = customerCity;
         if (RESPONSE_ARRAY[index][2] != undefined) {
         if (RESPONSE_ARRAY[index][2] != "") {
         location = location + " " + customerState;
         }
         }
         
         var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
         finalHtml = finalHtml + tempHtml;
         tempHtml = "";
         $(".rep-block").removeClass("spinner2").css("opacity","1");
         }
         }
         
         if (finalHtml == "<form>") {
         var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
         finalHtml = finalHtml + tempHtml;
         } 
         $(".rep-content-blk").html(finalHtml + "</form>");
         var container = $('.rep-content-blk');
         var scrollHeighValue = container.scrollTop()/1.5;
         //container.scrollTop(scrollHeighValue);
         $(".rep-content-blk").animate({ scrollTop: 0 }, 500); */
    }
    //utils.server.handleScrollForAssignRep();	
}

function sortbyBox2(currentTargetValue) {
    $("#id-overlayaiigncustomers").val("");
    RESPONSE.CITYLIST = [];
    MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
    var counter = 0;
    MYREPS.SORTBYBOXCHANGED = true;
    sessionStorage.isNextPageForAssignRep = false;
    sessionStorage.isNextPageForAssignRepAlphabetical = false;
    var selectedOption = $("#timepicker2").text().trim();
    var selectedOption1 = $("#timepicker").text().trim();
    
    if (selectedOption == "Select All" || selectedOption == "None") {
        MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
        RESPONSE_ARRAY = [];
        if (selectedOption1 == "None" || selectedOption1 == "Alphabetical") {
            deepPath = "userlistsortedbyname";
        } else {
            deepPath = "userlistsortedbylocation";
        }
        //counter++;
        assignRepSelectionBlock(deepPath);
    } else if (selectedOption.indexOf("Section") > -1) {
        RESPONSE_ARRAY = [];
        var deepPath = "userlistsortedbynameforsection";
        assignRepSelectionBlock(deepPath)
        //$(".rep-block").removeClass("spinner1").css("opacity","1");
    } else {
        sessionStorage.FILTERBOX2_CONTENTCITY = "";
        RESPONSE.CITYLIST = [];
        RESPONSE_ARRAY = [];
        if (selectedOption != "None") {
            var filterHtml = "<div id='id-overlaymenu' style='max-height: 120px;overflow: auto;overflow-x:hidden;'>";
            $(".rep-block").removeClass("spinner2").css("opacity", "1");
//			console.log("currentTargetValue",currentTargetValue.text());
            var stateCode = currentTargetValue.text().split("(")[1].split(")")[0];
            console.log("currentTargetValueText", stateCode);
            urlValue = "JSON/" + stateCode + ".json";
            console.log("url value", urlValue);
            $.ajax(
                    {
                        url: urlValue,
                        type: 'GET',
                        dataType: 'json',
                        success: function (data) {
                            console.log("Data", data.result);
                            $.each(data.result, function (index, element) {
                                console.log("city value is", element.City);
                                RESPONSE.CITYLIST.push(element.City);
                            });
                            RESPONSE.CITYLIST.sort();
                            for (var i = 0; i < RESPONSE.CITYLIST.length; i++) {
                                filterHtml = filterHtml + "<div id='filterbox3-alpha' class='snap  prof-view-overlay-sort' >" + RESPONSE.CITYLIST[i] + "</div>";
                                //$('#timepicker2').append($('<option> ' + TEMP_ARRAY[i] + '</option>'));
                            }
                            sessionStorage.FILTERBOX2_CONTENTCITY = filterHtml + "</div>";
                            //$("#timepicker3").html('None');
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log("error");
                        }
                    });
        }
        $(".rep-content-blk").animate({scrollTop: 0}, 500);
        /* var finalHtml = "<form>";
         for (var index = 0; index < RESPONSE_ARRAY.length; index++) {
         if (RESPONSE_ARRAY[index][1].toUpperCase().indexOf(selectedOption.split(',')[0]) > -1) {
         var customerName = RESPONSE_ARRAY[index][0];
         var customerCity = RESPONSE_ARRAY[index][1];
         var customerState = RESPONSE_ARRAY[index][2];
         var customerEmailId = RESPONSE_ARRAY[index][5];
         var location = customerCity;
         if (customerState != undefined) {
         if (customerState != "") {
         location = location + "" + customerState;
         }
         }
         var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
         finalHtml = finalHtml + tempHtml;
         tempHtml = "";
         $(".rep-block").removeClass("spinner2").css("opacity","1");
         } else if (selectedOption == "None") {
         var customerName = RESPONSE_ARRAY[index][0];
         var customerCity = RESPONSE_ARRAY[index][1];
         var customerState = RESPONSE_ARRAY[index][2];
         var customerEmailId = RESPONSE_ARRAY[index][5];
         var location = customerCity;
         if (RESPONSE_ARRAY[index][2] != undefined) {
         if (RESPONSE_ARRAY[index][2] != "") {
         location = location + " " + customerState;
         }
         }
         
         var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
         finalHtml = finalHtml + tempHtml;
         tempHtml = "";
         $(".rep-block").removeClass("spinner2").css("opacity","1");
         }
         }
         
         if (finalHtml == "<form>") {
         var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
         finalHtml = finalHtml + tempHtml;
         } 
         $(".rep-content-blk").html(finalHtml + "</form>");
         var container = $('.rep-content-blk');
         var scrollHeighValue = container.scrollTop()/1.5;
         //container.scrollTop(scrollHeighValue);
         $(".rep-content-blk").animate({ scrollTop: 0 }, 500); */
    }
    //utils.server.handleScrollForAssignRep();	
}

$(document).on('click', '#id-sharewithrepsearchicon', function () {
    onKeyPressEventshareWithRep("#id-overlaysharewithrep");
});
$(document).on('click', '#id-sendapplinksearchicon', function () {
    onKeyPressEventshareWithRep("#id-overlaysendapplink");
});
$(document).on('click', '#id-privacysearchicon', function () {
    onKeyPressEventPrivacy("#id-overlayprivacy");
});
function sharewithrepkeypress(e) {
    var Ucode = e.keyCode ? e.keyCode : e.charCode;
    if (Ucode == 13) {
        onKeyPressEventshareWithRep("#id-overlaysharewithrep");
    }

    onKeyPressEventshareWithRep("#id-overlaysharewithrep");
}

function sharewithrepkeyup(e) {
    onKeyPressEventshareWithRep("#id-overlaysharewithrep");
}

function assignToCustomerkeypress(e) {
    var Ucode = e.keyCode ? e.keyCode : e.charCode;
    if (Ucode == 13) {
        onKeyPressEventAssignCustomers("#id-overlayaiigncustomers");
    }

    onKeyPressEventAssignCustomers("#id-overlayaiigncustomers");
}

function assignToCustomerkeyup(e) {
    onKeyPressEventAssignCustomers("#id-overlayaiigncustomers");
}

function sendAppLinkkeyup(e) {
    onKeyPressEventshareWithRep("#id-overlaysendapplink");
}

function privacykeyup(e) {
    onKeyPressEventPrivacy("#id-overlayprivacy");
}

function moveani(index, idValue, idcontainerValue) {
    if (idValue === "id-switch-off") {
        var value = $('.togglevalue' + index).text();
        $('.togglevalue' + index).text(value.replace("off", "on"));
        document.getElementById(idcontainerValue).style.marginLeft = "50px";
    } else if (idValue === "id-switch-on") {
        var value = $('.togglevalue' + index).text();
        $('.togglevalue' + index).text(value.replace("on", "off"));
        document.getElementById(idcontainerValue).style.marginLeft = "-10px";
    }

}

function assignRepSelectionBlock(deepPathName, isSelectedAll) {
    var selectedOption = $("#timepicker2").text().trim();
    console.log("MYREPS.ASSIGNCUSTOMERRESPONSE length >>>>>>>>>>.", MYREPS.ASSIGNCUSTOMERRESPONSE.length);
    var charrecter = "";//var pageNumberForAssignRep = 0;
    var dataq = {};
    tempHtml = "";
    var finalHtml = "<form>";

    if (deepPathName == "userlistsortedbynameforsection") {
        charrecter = selectedOption.trim().charAt(8).toUpperCase();
        dataq = {sectionCharacter: charrecter, pageNumber: ++MYREPS.ASSIGNCUSTOMERPAGENUMBER};
    } else if (deepPathName == "userlistsortedbylocationwithsection") {
        var city = sessionStorage.residentialCityForAssignRep;
        var state = sessionStorage.residentialStateForAssignRep;
        dataq = {residentialCity: city, pageNumber: ++MYREPS.ASSIGNCUSTOMERPAGENUMBER, residentialState: state};
    } else {
        charrecter = "";
        dataq = {pageNumber: ++MYREPS.ASSIGNCUSTOMERPAGENUMBER};
    }
    var path = utils.server.getServerPath(deepPathName);
    var request = path(dataq).execute(function (resp) {
        if (resp.error) {
            t.server.handleError(resp);
        } else {

            if (resp.resultMap.TypeCode == "4011") {
                try {
                    sessionStorage.isNextPageForAssignRep = resp.resultMap.isNextPage;
//                    if (selectedOption == "Select All" || selectedOption == "None") {
//                        sessionStorage.isNextPageForAssignRep = resp.resultMap.isNextPage;
//                    } else {
//                        sessionStorage.isNextPageForAssignRepAlphabetical = resp.resultMap.isNextPage;
//                    }
                    if (MYREPS.ASSIGNCUSTOMERPAGENUMBER != 1) {
                        tempHtml = "";
                        finalHtml = "";
                    }
                    //RESPONSE_ARRAY.push(resp.resultMap.ArrayOfUserDetails);
                    var userDetailsForOverlay = resp.resultMap.ArrayOfUserDetails;
                    $.each(userDetailsForOverlay, function (index, userDetailsValue) {
                        MYREPS.ASSIGNCUSTOMERRESPONSE.push(userDetailsValue);
                    });
                    for (var index = 0; index < resp.resultMap.ArrayOfUserDetails.length; index++) {
                        //$(".rep-content-blk").addClass("spinner1");
                        var element = resp.resultMap.ArrayOfUserDetails[index];
                        var firstName, lastname, customerName, city, state, location, customerEmailId = "";

                        try {
                            firstName = element.firstName;
                        } catch (e) {
                            firstName = "";
                        }

                        try {
                            lastname = element.lastName;
                        } catch (e) {
                            lastname = "";
                        }

                        customerName = firstName + " " + lastname;

                        try {
                            city = element.residentialCity;
                        } catch (e) {
                            city = "";
                        }

                        try {
                            state = element.residentialState;
                        } catch (e) {
                            state = "";
                        }

                        location = city + ", " + state;

                        try {
                            customerEmailId = element.userId;
                        } catch (e) {
                            customerEmailId = "";
                        }
                        

                        if (MYREPS.ASSIGNCUSTOMERPAGENUMBER == 1) {
                            if (isSelectedAll) {
                                tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + lastname.charAt(0).toUpperCase() + "' class='checkbox' checked='true'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
                            } else {
                                tempHtml = "<div class='rep-grp-blk_temp opensans-regular border-bot text-color-overlay p-relative'> "
                                        + "<input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + lastname.charAt(0).toUpperCase() + "' class='checkbox' checked=''> "
                                        + "<label for='name" + index + "' class=' rep-label_temp'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";

                            }
                            finalHtml = finalHtml + tempHtml;
                        } else {
                            tempHtml += "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + lastname.charAt(0).toUpperCase() + "' class='checkbox' checked='true'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
                            finalHtml = tempHtml;
                        }
                    }

                    $(".rep-block").removeClass("spinner2").css("opacity", "1");
                } catch (e) {
                    var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
                    finalHtml = finalHtml + tempHtml;
                }

            } else {
                sessionStorage.isNextPageForAssignRepAlphabetical = false;
                /* var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
                 finalHtml = finalHtml + tempHtml; */
                /* var regGroupBlockText = $(".rep-grp-blk").text();
                 if(regGroupBlockText == ""){
                 var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
                 finalHtml = finalHtml + tempHtml;
                 } else {
                 var tempHtml = "";
                 finalHtml = tempHtml;
                 } */

            }
            if (MYREPS.ASSIGNCUSTOMERPAGENUMBER == 1) {
                if (resp.resultMap.TypeCode == "4012") {
                    var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";

                    $(".rep-content-blk").html(tempHtml + "</form>");
                } else {

                    $(".rep-content-blk").html(finalHtml + "</form>");
                    /* var container = $('.rep-content-blk');
                     var scrollHeighValue = container.scrollTop()/1.5; */
                    //container.scrollTop(scrollHeighValue);
                    $(".rep-content-blk").animate({scrollTop: 0}, 500);
                }
            } else {
                if (finalHtml != "<form>") {

                    $(".rep-content-blk form").append(finalHtml);
                    var container = $('.rep-content-blk');
                    var scrollHeighValue = container.scrollTop() / 1.5;
                    //container.scrollTop(scrollHeighValue);
                    $(".rep-content-blk").animate({scrollTop: scrollHeighValue}, 500);
                } else {

                    finalHtml = "";
                    $(".rep-content-blk").append(finalHtml);
                }
            }
            /* if(selectedOption == "Select All"){
             $('.checkbox').each(function () {
             this.checked = true;
             });
             } */
            /* if (sessionStorage.overlayDrop1Name == "None" || sessionStorage.overlayDrop1Name == undefined) {
             try {
             $('.checkbox').each(function () {
             this.checked = true;
             });
             } catch (e) {
             
             }
             } */
        }
        $(".rep-block").removeClass("spinner2").css("opacity", "1");


        //var counterValue = ++counter;
        //protocall.events.handleScrollForAssignRep(counterValue);
        //counter++
        //protocall.events.handleScrollForAssignRep();
    });


}
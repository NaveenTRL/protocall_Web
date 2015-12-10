
var module_ServerCall = {
    parseCustomersData: function (pageNum, type) {
        var deepPathName = "",status = false;
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            deepPathName = "customertabforagencydashboard";
        } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            deepPathName = "customertabforcarrierdashboard";
        }
        if (type == "true") {
            status = true;
        } else {
			status = false;
		}
        $(".content-holder").css("opacity", "0.5");
        var page = "protocall_customersPage";
        var data = {pageNumber: pageNum, isAlphabeticalSort: status},
        deepPath = deepPathName,
                callback = protocall.customer.customerData,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
	assignCustomerOverlayData :  function(){
		var page = "AssignRep";
        var data = {pageNumber : ++MYREPS.ASSIGNCUSTOMERPAGENUMBER},
        deepPath = "userlistsortedbyname",
                callback = module_ServerCall.assignRepResponseData,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
	},
    reLoadparseCustomersData: function (pageNum, type) {

        console.log("Cusotmers page number--->", pageNum);
        var deepPathName = "";
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            deepPathName = "customertabforagencydashboard";
        } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            deepPathName = "customertabforcarrierdashboard";
        }
        var status = false;
        if (type == "true") {
            status = true;
        }
        var page = "protocall_customersPage";
        var data = {pageNumber: pageNum, isAlphabeticalSort: status},
        deepPath = deepPathName,
                callback = module_ServerCall.storeCustomreViewData,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    parseHomePageFeedData: function (pageNum, deepPath) {
        console.log("Cusotmers page number--->", pageNum);
        var deepPathName = deepPath;
        if (sessionStorage.loginType == 'SuperAdmin') {
            deepPathName = deepPathName;
        } else {
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                deepPathName = deepPathName;
            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                deepPathName = deepPathName;
            }
        }

        var page = "protocall_homepage",data = {};
		if (sessionStorage.menuSelected == "incidentMenu") {
			data = {pageNumber: pageNum, alertType: "incidentalert"};
		} else if (sessionStorage.menuSelected == "policyMenu") {
			data = {pageNumber: pageNum, alertType: "policyalert"};
		} else {
			data = {pageNumber: pageNum};
		}
        var deepPath = deepPathName,
                callback = module_ServerCall.storeHomeResponseData,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    parseCarriersPageFeedData: function (pageNum) {
        console.log("Cusotmers page number--->", pageNum);
        var deepPathName = "carriertab";
        /*  if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
         deepPathName = "carrierTab";
         } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
         deepPathName = "customertabforcarrierdashboard";
         } */

        var page = "protocall_carrier";
		var data = {};
		if(HOMEPAGERESPONSE.SORTBYRECENTVIEW){
			data = {pageNumber: pageNum,isAlphabeticalSort : false};
		} else {
			data = {pageNumber: pageNum,isAlphabeticalSort : true};
		}
        //var data = {pageNumber: pageNum};
        var deepPath = deepPathName,
                callback = module_ServerCall.storeCarriersResponseData,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    parseAgenciesPageFeedData: function (pageNum) {
        console.log("Cusotmers page number--->", pageNum);
        var deepPathName = "agencytab";
        /*  if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
         deepPathName = "customertabforcarrierdashboard";
         } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
         deepPathName = "customertabforcarrierdashboard";
         } */
        var page = "protocall_agency";
		var data = {};
		if(HOMEPAGERESPONSE.SORTBYRECENTVIEW){
			data = {pageNumber: pageNum,isAlphabeticalSort : false};
		} else {
			data = {pageNumber: pageNum,isAlphabeticalSort : true};
		}
        //var data = {pageNumber: pageNum};
        var deepPath = deepPathName,
                callback = module_ServerCall.storeAgenciesResponseData,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    parseMyRepsPageFeedData: function (pageNum) {
        console.log("Cusotmers page number--->", pageNum);
        var deepPathName = "";
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            deepPathName = "myrepforagencydashboard";
        } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            deepPathName = "myrepforcarrierdashboard";
        }
        var page = "protocall_homepage";
        var data = {pageNumber: pageNum},
        deepPath = deepPathName,
                callback = module_ServerCall.myRepsData,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    parseCarrierViowAssociatedFeedData: function (CarrierId, pageNum, c_type) {
        console.log("Cusotmers page number--->", pageNum);
        var deepPathName = "associatedcustomerandrepresentative";
        /* if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
         deepPathName = "associatedcustomerandrepresentative";
         } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
         deepPathName = "customertabforcarrierdashboard";
         } */
        var page = "protocall_associatedcustomerandrepresentative";


        var data = {pageNumber: pageNum, identifier: CarrierId, type: c_type},
        deepPath = deepPathName,
                callback = utils.server.gotRsksj,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    parseCarrierViowAssociatedFeedRepsData: function (CarrierId, pageNum, c_type) {
        console.log("Cusotmers page number--->", pageNum);
        var deepPathName = "associatedcustomerandrepresentative";
        /* if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
         deepPathName = "associatedcustomerandrepresentative";
         } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
         deepPathName = "customertabforcarrierdashboard";
         } */
        var page = "protocall_associatedcustomerandrepresentative";

        var data = {pageNumber: pageNum, identifier: CarrierId, type: c_type},
        deepPath = deepPathName,
                callback = module_ServerCall.storeCarrierDataL,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    parseAgencyViewAssociatedFeedRepsData: function (agencyId, pageNum, c_type) {
        console.log("Cusotmers page number--->", pageNum);
        var deepPathName = "associatedcustomerandrepresentative";
        /*  if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
         deepPathName = "associatedcustomerandrepresentative";
         } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
         deepPathName = "customertabforcarrierdashboard";
         } */
        var page = "protocall_associatedcustomerandrepresentative";


        var data = {pageNumber: pageNum, identifier: agencyId, type: c_type},
        deepPath = deepPathName,
                callback = module_ServerCall.agencyAssociatedData,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    submitForgotPasswordData: function (_emailId, _identifier, _identifierName) {
        var page = "forgotPasswordPage";
        var deepPathName = "forgetpasswordfordashboard";


        var data = {emailId: _emailId, identifier: _identifier, identifierName: _identifierName},
        deepPath = deepPathName,
                callback = module_ServerCall.gotForgotPasswordResponse,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    viewMyRepsData: function (pageNumberValue, emailIDValue) {
        var deepPathName = "associatedcustomerforrepresentative";
        /*  if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
         deepPathName = "associatedcustomerandrepresentative";
         } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
         deepPathName = "customertabforcarrierdashboard";
         } */
        var page = "protocall_associatedcustomerandrepresentative";


        var data = {pageNumber: pageNumberValue, representativeId: emailIDValue},
        deepPath = deepPathName,
                callback = module_ServerCall.viewRepresentativeData,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
	showPolicyListForCustomer : function(){
		var deepPath = "showpolicies";
		var data = {alertList : CUSTOMER.POLICYLISTWITHCARRIER};
		var page = "CustomerShowPolicy",
				callback = module_ServerCall.showPoliciesResponse,
                authId = "",
                spinnerMsg = "";
		utils.server.makeServerCall(page, data, callback, deepPath);
	},
//    ---------------****************------------------------

    gotForgotPasswordResponse: function (_response) {
        console.log("Forgot Password Succeed..!");
        var response = _response;

        setTimeout(function () {
            showAlertBox(response.resultMap.AlertMessage);
        }, 500);
    },
    storeCustomreViewData: function (data) {

        if (data.resultMap.TypeCode == "4011") {
            sessionStorage.isNextPageAllowed = data.resultMap.isNextPage;
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (data.resultMap.AlertMessage != "There were no customer for this carrier") {
                    if (data.resultMap.customerTab != "undefined") {
                        protocall.customer.reloadCustomerDetailedView(data.resultMap.customerTab, localStorage.selectedUserId);
                    } else {
                        console.log("no customer data");
                    }
                } else {
                    showAlertBox("There were no customer for this carrier");
                }
            } else {
                if (data.resultMap.customerTab != "undefined") {
                    protocall.customer.reloadCustomerDetailedView(data.resultMap.customerTab, localStorage.selectedUserId);
                } else {
                    console.log("no customer data");
                }
            }

        } else if (data.resultMap.TypeCode == "4012") {
            showAlertBox("There were no customer for this carrier");
        }

    },
    storeCarrierDataL: function (response) {
        sessionStorage.isNextPageAllowed = response.resultMap.isNextPage;
        protocall.carrier.loadAssociatedReps(response.resultMap.AssociatedRepresentative);
    },
    agencyAssociatedData: function (response) {
        console.log("associated agency data", response);
        protocall.customer.agencyAssociatedCusomers(response);
    },
    storeCustomersResponseData: function (response) {
        sessionStorage.customersTabData = response;
    },
    storeHomeResponseData: function (response) {
        sessionStorage.homeTabData = response;
		protocall.util.viewingHomePageData(response);
    },
    storeCarriersResponseData: function (response) {
        protocall.carrier.carrierData(response);
    },
    storeAgenciesResponseData: function (response) {
        sessionStorage.agenciesTabData = response;
        console.log("agency data for carrierrole", response);
        protocall.carrier.loadeAgencyData(response);
    },
    storeMyRepsResponseData: function (response) {
        sessionStorage.myRepsTabData = response;
    },
    myRepsData: function (response) {
        if (response.resultMap.TypeCode == "4011") {
            if (response.resultMap.repTab != undefined) {
                CARRIER.REPDATA = response.resultMap.repTab;
                protocall.myRep.initCarrierRepsPage();
            } else {
                console.log("no rep details");
            }
        } else {
            console.log("errorReponse");
        }
    },
	showPoliciesResponse : function(response){
		console.log("Show Policy New API response",response);
		if(response.resultMap.TypeCode == "4011"){
			if(response.resultMap.AssociatedPolicies != undefined){
				CUSTOMER.AGENCY.ASSOCIATEDPOLICIES.push(response.resultMap.AssociatedPolicies);
			} else {
				CUSTOMER.AGENCY.ASSOCIATEDPOLICIES = [];
			}
		} else {
			CUSTOMER.AGENCY.ASSOCIATEDPOLICIES = [];
		}
		protocall.view.properityPolicyresponse();
		protocall.view.properityPolicy();
		/* if (customerDataValue1.AssociatedPolicies != undefined) {
			CUSTOMER.AGENCY.ASSOCIATEDPOLICIES.push(customerDataValue1.AssociatedPolicies);
		} else {
			CUSTOMER.AGENCY.ASSOCIATEDPOLICIES = [];
		} */
	},
    viewRepresentativeData: function (response) {
        console.log("reps response", response);
        if (response.resultMap.TypeCode == "4011") {
            if (response.resultMap.AssociatedCustomers != undefined) {
                sessionStorage.isNextPageAllowed = response.resultMap.isNextPage;
                $.each(response.resultMap.AssociatedCustomers, function (index, associatedCustomer) {
                    CUSTOMER.ASSOCIATEFEEDDATA.push(associatedCustomer);
                });
                //CUSTOMER.ASSOCIATEFEEDDATA.push(response.resultMap.AssociatedCustomers);
                protocall.carrier.loadAssociatedCustomers();
            }
        } else if (response.resultMap.TypeCode == "4012") {
            showAlertBox(response.resultMap.AlertMessage);
            $("#id-carrierassociatedblock").empty();
            $("#id-carrierassociatedblock").append("<div>" + response.resultMap.AlertMessage + "</div>");
            console.log("error response");
            protocall.displaySpinner(false);
            //showAlertBox('There are no AssociatedCustomers for this carrier.');
        }
    },
	assignRepResponseData : function(response){
		
	}
    //    ---------------****************------------------------
}


window.addEventListener('popstate', function (event) {
    console.log('popstate fired!');
    //console.log('Event State URL ----->', event.state.url)

    //protocall.stateNavigation(event.state.url);
});
var browserPrefix = (/webkit/i).test(navigator.appVersion) ? 'webkit' :
        (/firefox/i).test(navigator.userAgent) ? 'moz' :
        (/trident/i).test(navigator.userAgent) ? 'ms' :
        'opera' in window ? 'o' : '';
var idleTime = 0;
var firstLoad = true;
CUSTOMERS_LIST = [];
//sessionStorage.REFERENCE_TYPE = "agency_info";
var IsAgencyDataChanged = false;
var IsVendorDataChanged = false;
var SERVICEID = 0;
var PAGE_COUNT = 0;
var IsLoadNextPage = true;
var IsalertShown = 0;
var isLoad = false;
var IsAlphaSelected = false;
var carrieAssociatedPageNumber = 1;
sessionStorage.GLOBALPAGECOUNT = 1;
sessionStorage.overlayDrop1Name = "None";
var ZOOMINCOUNTER = 0;
var ZOOMOUTCOUNTER = 0;
var NOZOOMCOUNTER = 0;
var typingTimer;                //timer identifier
var doneTypingInterval = 250;  //time in ms, 5 second for example
var CONSTANTS = {
    MODAL_OPACITY: 1,
    FORM_SUBMIT_OPACITY: 0.2,
    CHANNEL_TOKEN: null,
    LINK_TYPE: {
        PAGE: "page", HOME_PAGE: "home", CARRIERS_PAGE: "carriers", AGENCY_PAGE: "agency", AGENCIES_PAGE: "agencies", CUSTOMERS_PAGE: "customers", MY_REP_PAGE: "myreps",
        LOGIN: "login", LOGIN_YES: "login-yes", LOGOUT_YES: "logout-yes",
        VIEW_FEED: "view", FEEDS: "feeds", SHARE_TO_REP: "share", CLOSE_OVERLAY: "closeOverlay", CLOSE_POPUP: "closePopUp", EDIT_AGENCY_PIC: "editAgencyPic",
        MY_ALERTS: "myalerts", INCIDENTS: "incidents", POLICIES: "policies", MATCH_RELEASE_CLAIMS: "matchReleaseClaim", MATCH_CLAIMS: "matchClaim", INVITE_REPS: "invitereps", SEND_INVITE_REPS_RESET_PWD: "InvitemyRepResetPwd", SEND_INVITE_REPS: "InvitemyRep",
        ASSIGN_TO_REPS: "assignrep", PHOTS_OVERLAY_DISPLAY: "photosDoc", THUMB_NAIL: "thumbNail", PREVIOUS: "previous", NEXT: "next", VIEW_CARRIER_FEEDVIEW: "viewcarrierfeedview",
        PUSHMESSAGE: "pushmessage", PRIVACY: "privacy", ARCHIVES: "archives", VIEW_ARCHIVES: "view_archives", SORTBY: "sortby", SORTBYCARRIER: "sortbycarrier", SORTBY_AGENCIES: "sortbyAgencies",
        SORTBYCUSTOMER: "sortbycustomer", SORTBYREPS: "sortbyreps", MY_PROFILE: "profile-link", VIEW_CUSTOMER_FEEDVIEW: "customerprofileviewfeed", SETTINGS_PAGE: "mysettings",
        PROFILE_PAGE: "myProfileView", SENDAPPLINK: "sendapplink", AUDIO_OVERLAY: "voiceDoc", AUDIO_PLAY: "playAudio", AGENCY_VIEW_LOAD: "agency-view-load",
        PREFERRED_VENDOE_VIEW_LOAD: "preferred vendors-view-load", AGENCY_EDIT_LOAD: "agency-edit-load", AGENCY_REMOVE_LOAD: "agency-remove-load",
        AGENCY_ADD_VENDOR_LOAD: "agency-addvendor-load", VENDOR_PROFILE_INFO: "vendor-profile-info",
        ASSIGN_TO_CUSTOMERS: "dt-assigncustomer", PROPERTY_POLICY: "dt-propertypolicy", HEALTH_POLICY: "dt-healthpolicy",
        VEHICLE_POLICY: "dt-vehiclepolicy", RESETPASSWORD: "dtresetpassword", SIGNUP: "signup", OVERLAY_RESETPASSALERTBOX: "dtoverlayresetpassword",
        EDITPASSWORDYES: "dtoverlayrestpassyes", EDITPASSWORDNO: "dtoverlayrestpassno",
        PREVIOUS_AUDIO: "previousAudio", NEXT_AUDIO: "nextAudio", DOCUMENTSOVERLAY: "textDoc", MYPROFEDIT: "edit", MYPROFEDITMYREPS: "carrierownerrepedit",
        SORTBYRECENT: "recent", SORTBYALPHABETICAL: "alphabetical", CARRIERSORTBYRECENT: "carrier-recent", CARRIERSORTBYALPHABETICAL: "carrier-alphabetical",
        REPSSORTBYRECENT: "reps-recent", REPSSORTBYALPHABETICAL: "reps-alpha", CUSTOMERSORTBYRECENT: "customer-recent", CUSTOMERSORTBYALPHABETICAL: "customer-alphabetical",
        VIEWARCHIVECHECKBOX: "archiveCheckBox", MANAGE_AGENCY: "manage_agency",
        VIEWCUSTOMERFEED: "viewcustomerfeedview", VIEWAGENCIESFEED: "viewagenciesfeedview",
        BUTTON_SENDAPPLINK: "dt_overlaybtn_sendapplink",
        BUTTON_PRIVACYSEND: "overlaybtnPrivacySend", BUTTON_ADDVENDORSEND: "overlaybtn_addvendordetails", BUTTON_SHAREWITHREP: "dt_overlaybtn_sharerepwithcustomers",
        BUTTON_PUSHMESSAGESEND: "overlaybtn-pushmessage", PRINTPAGE: "printPage", BUTTON_ASSIGNTOREPS: "dt_overlaybtn_assignToReps",
        BUTTON_ASSIGNTOCUSTOMERS: "dt_overlaybtn_assigncustomers", SELECTED_SEARCH_ITEM: "selectedSearchItem", CARRIERAGENCY: "carrieragency", CARRIERCUSTOMERS: "carriercustomers", CARRIER_REPS_PAGE: "carrierreps",
        VIEW_CARRIER_REPS_DETAILS: "dt-viewCarrierRep", VIEW_AGENCY_REPS_DETAILS: "dt-viewAgencyRep", VIEW_CARIER_REP_PROFILE_PAGE: "ViewCarrierRep", EDITCARRIEROWNER_AGENCYDETAILS: "editcarrierowner_agencydetails", ADDMORE: "addmoredata", TEMPCLOSE_OVERLAY: "overlaybtn",
        AGENCYPICEDIT: "agencyPicEdit", SUPERADMINHOMEFEEDVIEW: "superAdminHomeFeedView", SETTINGS_SAVE: "save", RESET_PASSWORD: "dt-resetpassword",
        SUPERADMIN_AGENCIES_ALPHASORT: "agencies-alpha", SUPERADMIN_AGENCIES_RECENTSORT: "agencies-recent", COMPLETESIGNUP: "completeSignUp", COPYTOCLIPBOARD: "copyText", SUBMENUS: "dt-homesubmenu",
        CUSTOMERSSUBMENU: "dt-customerssubmenu", MYREPSSUBMENU: "dt-myrepssubmenu", FILTERBOX1: "dt-filterbox1", AGENCY_REP_DETAILS_VIEW: "dt-agencyrepview",
        FORGET_PASSWORD: "dt-forgetPassword", FORGOT_PASSWORD_SUBMIT: "dt-forgotpassword-submit", COUNTER: 0, SELECTALLSTATUS: true
    },
    ERROR_MSG: {
        ajaxFailed: "Oops! This action could not be completed now! Please try again"
    },
    ISLOGGEDIN: false,
    HASNEXTPAGE: false,
    SCROLLTOPVALUE: 0,
    PRIVACY_TOGGLE_BUTTON: ""
};
//regular expressions
PHONE_REGEX = /((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}/;
MULTIPLE_EMAIL_REGEX = /^((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*([,])*)*$/;
EMAIL_REGEX = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
NAME_REGEX = /^[a-zA-Z ]*$/;
INT_REGEX = /^[0-9]+$/;
ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9-_]+$/;
USERNAME_REGEX = /^[a-zA-Z0-9-_]+$/;
URL_REGEX = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
//ENDPOINT CALLS
var ENDPOINT = {
    USER_LIST: "userlist",
    ALERT_LIST: "alertlist",
    AGENCY_DASHBOARD_DESIGN: "agencydashboarddesign",
    GIVE_RECORDED_BY_USER: "giverecordedbyuser"
};
var RESPONSE = {
    RESULTOBJECT: {},
    AUDIODETAILS: [],
    MEDIAID: [],
    PICTUREDETAILS: [],
    IMAGEURLS: [],
    IMGETEXT: [],
    MEDIAIDFORPICTURE: [],
    AUDIOTEXT: [],
    TIMESTAMPAUDIO: [],
    AUDIOURLS: [],
    AUDIODETAILTIME: [],
    STATENAME: [],
    OTHERPARTYDETAILS: [],
    NAMES: [],
    OTHERPARTYNAMES: [],
    ROLE: [],
    PHONE: [],
    ADDRESS: [],
    INSURANCECO: [],
    POLICY: [],
    VEHICLENO: [],
    VEHICLEMODEL: [],
    DRIVINGLICENCESTATE: [],
    DRIVINGLICENCENUMBER: [],
    INJURIES: [],
    OTHERINFORMATION: [],
    OTHERPARTYIDS: [],
    INCIDENTID: [],
    AGENCY_ADMIN_TOTAL_DETAILS: [],
    CARRIERAGENCYTOTALDETAILS: [],
    customers_data: [],
    AGENCYLOGIN_DATA: [],
    CARRIERREP_DATA: [],
    agencies_data: [],
    carrierrepcustomers_data: [],
    users: [],
    AGENCYCARRIERTABDATA: [],
    myreps_data: [],
    SETTINGTAB_PreferredVendorDATA: [],
    SERVERLOGINRESPONSE: false

};
var PAGEREFRESH = {
    ISPAGEREFRESHED: false,
    ISPAGEREFRESHEDFORCARRIERFEEDVIEW: false,
    ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW: false,
    ISPAGEREFRESHEDFORMYPROFILE: false,
    ISPAGEREFRESHEDFORSETTINGS: false,
    ISPAGEREFRESHEDFORAGENCY: false,
    ISPAGEREFRESHEDFORCARRIER: false
}
var HOMEPAGERESPONSE = {
    ALERTDETAILS: [],
    ALERTDETAILSLENGTH: 0,
    RECURRINGALERTDFEEDS: [],
    INCIDENTALERTSCLICKED: false,
    HOMEPAGEMYALERTSLOADED: true,
    POLICYALERTCLICKED: false,
    PROFILEAPI: "https://proto-call-test.appspot.com/file/",
    PROFILEAPIFORAUDIO: "https://2-dot-proto-call-test.appspot.com/filename/",
    PROFILEAPIFORIMAGE: "https://2-dot-proto-call-test.appspot.com/imageuploadforwebteam/",
    TEXTDOWNLOADURL: "https://2-dot-proto-call-test.appspot.com/downloadtextinformation/",
    SORTBYRECENTVIEW: false,
    SORTBYALPHABETICALVIEW: false,
    ISVIEWARCHIVECLICKED: false,
    UNREADFEEDCOUNT: 0,
    INCIDENTALERTFEED: [],
    POLICYALERTSFEED: [],
    HOMEPAGESTUBBEDDATA: {},
    LISTOFALERTIDSFORARCHIVE: [],
    HOMEPAGEMYALERTSLOADEDCOUNT: 0,
    COMMONUSERDETAILS: {},
    ISVIEWALERTVALUECLICKED: false,
    FEEDSICONCLICKED: false,
    PROFILEPICUPDATECLICKED: false,
    DOWNARROWPRESSEDCOUNT: 0,
    UPARROWPRESSEDCOUNT: 0,
    RELATEDFEEDSLOADED: false,
    RELATEDFEEDS: {},
    PROPERTYPOLICYCOUNT: 0,
    VEHICLEPOLICYCOUNT: 0,
    OTHERPOLICYCOUNT: 0,
    CUSTOMERDATA: {},
    SIGNUPREGISTRATIONDONE: false,
    ISEDITIMAGEICONCLICKED: false,
    SEARCHAGENCYREP: false,
    REQUIREDUSEREMAILID: "",
    ISPREFERREDVENDORCLICKED: false,
    ISAGENCYTABCLICKED: false,
    ISEDITIMAGEICONCLICKEDFOROVERLAY: false,
    RESETPASSWORDCLICKEDFORREP: false,
    INVITEREPCLICKED: false,
    CUSTOMERDATAFORAGENCYROLE: {},
    HOMEPAGEFEEDPAGENUMBER: 1
}
var CUSTOMER = {
    AGENCY: {
        ASSOCIATEDCARRIERDETAILS: {},
        CUSTOMERDATA: [],
        CUSTOMERDETAILS: [],
        ASSOCIATEDCARRIER: [],
        ASSOCIATEDAGENCY: [],
        ASSOCIATEDPOLICIES: [],
        ASSOCIATEDREPRESENTATIVE: [],
        VEHICLEMODELCOUNT: 0
    },
    ASSOCIATEFEEDDATA: [],
    CUSTOMERPAGINATIONUMBER: 0,
    POLICYLISTWITHCARRIER: []
}
var AGENCY = {
    CARRIERDATA: [],
    REPDATA: {},
    CUSTOMERPAGINATIONUMBER: 0,
    ASSOCIATEDCUSTOMERPAGINATIONNUMBER: 0,
}
var CARRIER = {
    AGENCYDATA: {},
    REPDATA: {},
    CUSTOMERPAGINATIONUMBER: 0
}
var MYREPS = {
    ASSOCIATEDCUSTOMERLENGTH: 0,
    ASSIGNCUSTOMERPAGENUMBER: 0,
    ASSIGNCUSTOMERRESPONSE: [],
    SEARCHFORCUSTOMER: false,
    ASSIGNCUSTOMERFIRSTPAGE: []
}
//PAGE NAMES
CURRENT_PAGE = "";
LOGIN_PAGE = "login";
HOME_PAGE = "home";
CARRIERS_PAGE = "carriers";
CUSTOMERS_PAGE = "customers";
MY_REP_PAGE = "myreps";
SETTINGS_PAGE = "mysettings";
PROFILE_PAGE = "myProfileView";
MANAGE_AGENCY = "manageagency";
AGENCY_PAGE = "agency";
AGENCIES_PAGE = "agencies";
homePageUpdate = "null";
CARRIERAGENCY = "carrieragency";
CARRIER_REPS_PAGE = "carrierreps";
//PAGE & SUBMENU OBJECTS
var SUB_MENU = {
    HOME: {
        BREADCRUMB: [
            {
                TITLE: "feeds",
                ICON_CLASS: "feeds-icon" // has Class
            }
        ],
        TABS: [
            {
                TITLE: "policies",
                ICON_CLASS: "",
                COUNT: ""
            },
            {
                TITLE: "incidents",
                ICON_CLASS: "",
                COUNT: ""
            },
            {
                TITLE: "my_alerts",
                ICON_CLASS: "",
                COUNT: "24"
            },
        ],
        ISSORTBY: true
    },
    PROFILE: {
        BREADCRUMB: [
            {
                TITLE: "my_profile",
                ICON_CLASS: "" // has class
            }
        ],
        TABS: [
            {
                TITLE: "edit",
                ICON_CLASS: "", //has class,
                COUNT: ""
            }
        ],
        ISSORTBY: false
    },
    SETTINGS: {
        BREADCRUMB: [
            {
                TITLE: "settings",
                ICON_CLASS: "" // has class
            }
        ],
        TABS: [
            {
                TITLE: "save",
                ICON_CLASS: "",
                COUNT: ""
            },
            {
                TITLE: "privacy",
                ICON_CLASS: "",
                COUNT: ""
            }
        ],
        ISSORTBY: false
    },
    CARRIERS: {
        BREADCRUMB: [
            {
                TITLE: "carriers",
                ICON_CLASS: "" // has class
            }
        ],
        TABS: [
            // No Carrier Tabs
        ],
        ISSORTBY: true
    },
    CUSTOMERS: {
        BREADCRUMB: [
            {
                TITLE: "customers",
                ICON_CLASS: "" // has class
            }
        ],
        TABS: [
            {
                TITLE: "assign_rep",
                ICON_CLASS: "",
                COUNT: ""
            },
            {
                TITLE: "push_message",
                ICON_CLASS: "", // has class
                COUNT: ""
            }
        ],
        ISSORTBY: true
    },
    MY_REPS: {
        BREADCRUMB: [
            {
                TITLE: "my_reps",
                ICON_CLASS: "" // has class
            }
        ],
        TABS: [
            {
                TITLE: "invite_reps",
                ICON_CLASS: "", // has Class
                COUNT: ""
            },
            {
                TITLE: "privacy",
                ICON_CLASS: "",
                COUNT: "",
            }
        ],
        ISSORTBY: true
    }


};
// DROPDOWN CONSTANTS
var DROPDOWN = {
    SORTBY: {
        CLASS: "highlight",
        ITEMS: ["Recent", "Alphabetical"]

    },
    PROFILE: {
        CLASS: "normal",
        ITEMS: ["My Profile", "Settings", "Help", "Log Out"]
    },
    RANGE_SELECTOR: {
        CLASS: "highlight",
        ITEMS: ["Alphabetical", "City, State"]
    },
    ALPHABETICAL_SORT: {
        CLASS: "highlight",
        ITEMS: ["Select All", "Select A", "Select B", "Select C", "Select D", "Select E", "Select F", "Select G", "Select H", "Select I", "Select J", "Select K", "Select L", "Select M", "Select N", "Select O", "Select P", "Select Q", "Select R", "Select S", "Select T", "Select U", "Select V", "Select W", "Select X", "Select Y", "Select Z"]
    }
};
//PRE-DEFINED FUNCTIONS
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};
String.prototype.truncateStr = function (m) {
    return (this.length > m)
            ? jQuery.trim(this).substring(0, m).split(" ").slice(0, -1).join(" ") + "..."
            : this;
};
Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
};
$(document).ready(function () {
//initialise protocall
    protocall.displaySpinner(true);
    setTimeout(function () {
        protocall.init();
    }, 2000);
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
    moment.tz.add([
        'America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0',
        'America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0'
    ]);
});
protocall = {
    init: function () {


        firstLoad = true;
        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "MY_ALERTS");
        protocall.displaySpinner(true);
        var pageNameFromURL = this.grabHashPage();
        if (this.isLoggedIn()) {
            if (pageNameFromURL !== "" && typeof pageNameFromURL !== "undefined" && pageNameFromURL.length != 0) {
                if (pageNameFromURL === LOGIN_PAGE) {
                    this.setPageNavigation(HOME_PAGE);
                } else {
                    this.setPageNavigation(pageNameFromURL);
                }
            } else {
                this.setPageNavigation(localStorage.currentPage);
            }
        }
        else {
            if (pageNameFromURL.match("signup-1")) {
                protocall.view.loadSignupPage(false);
                sessionStorage.roleToBePassed = "agencyRep";
            } else if (pageNameFromURL.match("signup-2")) {
                protocall.view.loadSignupPage(false);
                sessionStorage.roleToBePassed = "carrierRep";
            } else if (pageNameFromURL == "signup") {
                sessionStorage.roleToBePassed = "";
                protocall.view.loadSignupPage(false);
            } else if (pageNameFromURL.match("dtresetpassword-1")) {
                sessionStorage.repPasswordRole = "carrierrepresentative";
                protocall.view.loadResetPasswordPage(false);
            } else if (pageNameFromURL.match("dtresetpassword-2")) {
                sessionStorage.repPasswordRole = "agencyrepresentative";
                protocall.view.loadResetPasswordPage(false);
            }
            else {
                this.setPageNavigation(LOGIN_PAGE);
                HOMEPAGERESPONSE.SIGNUPREGISTRATIONDONE = false;
                setTimeout(function () {
                    window.scrollTo(0, 1); //to fix refresh scrolling issue when page is reloaded with page scrolled
                }, 300);
            }


        }
        this.events.createEvents();
    },
    grabHashPage: function () {
        var pageName = "";
        if (window.location.hash !== "" && window.location.hash !== null) {
            var hashArr = window.location.hash.split("#");
            pageName = hashArr[1];
            console.log("Page name from URL", pageName);
        }
        return pageName;
    },
    grabHashPageForInviteRep: function () {
        var pageName = "";
        if (window.location.hash !== "" && window.location.hash !== null) {
            var hashArr = window.location.hash.split("=");
            pageName = hashArr[1];
            console.log("Page name from URL", pageName);
        }
        return pageName;
    },
    loadPage: function (pageUrl) {

        var pageArr = pageUrl.split("/");
        var page = "", subMenu = [];
        if (pageArr.length > 0) {
            page = pageArr[0];
            for (var s = 1; s < pageArr.length; s++) {
                subMenu.push(pageArr[s]);
            }
        } else {
            page = pageUrl;
        }
        this.setMenuSelection(page);
        protocall.events.GlobalContainerScrollevent();
        this.displaySpinner(true);
        this.setLocalStorage(page);
        if (page == LOGIN_PAGE) {
            this.view.loadLoginPage(false);
        }
//CARRIERCUSTOMERS
        else if (page == HOME_PAGE) {
            var page = "counthomepage";
            var data = {},
                    deepPath = "providecountforunreadfeed",
                    page = "home",
                    async = false,
                    callback = protocall.carrier.getCountResponse1,
                    authId = "",
                    spinnerMsg = "";
            utils.server.makeServerCall(page, data, callback, deepPath);
        } else if (page == CARRIERS_PAGE) {
            PAGEREFRESH.ISPAGEREFRESHEDFORCARRIER = true;
            this.view.loadCarrierPage(false);
        } else if (page == CUSTOMERS_PAGE) {
            this.view.loadCustomerPage(false);
            $('body').css("background", "#eff2f3");
        } else if (page == MY_REP_PAGE) {
            sessionStorage.isSelectAll = "false";
            this.view.loadMyRepsPage(false);
        } else if (page == CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE) {
            this.view.loadCarrierRepsPage(false);
            $('body').css("background", "#eff2f3");
        } else if (page == SETTINGS_PAGE) {
            var $el = $(".mysettings");
            PAGEREFRESH.ISPAGEREFRESHEDFORSETTINGS = true;
            this.view.viewSettingsPage(false, $el);
        } else if (page == MANAGE_AGENCY) {
            var $el = $(".mysettings");
            PAGEREFRESH.ISPAGEREFRESHEDFORSETTINGS = true;
            this.view.viewSettingsPage(false, $el);
        } else if (page == PROFILE_PAGE) {
            var $el = $(".myProfileView");
            PAGEREFRESH.ISPAGEREFRESHEDFORMYPROFILE = true;
            this.view.viewProfileViewPage(false, $el);
        } else if (page == AGENCY_PAGE) {
            PAGEREFRESH.ISPAGEREFRESHEDFORAGENCY = true;
            this.view.loadAgencyPage(false);
        } else if (page == CARRIERAGENCY) {
            sessionStorage.IsCustomersTab = false;
            protocall.view.loadCarrierOwnerAgenciesPage(false);
            $('body').css("background", "#eff2f3");
        } else if (page == AGENCIES_PAGE) {
            PAGEREFRESH.ISPAGEREFRESHEDFORAGENCYFORREP = true;
            popUpContent.closePopUpContent();
            sessionStorage.IsCustomersTab = false;
            $('#page').css("background", "#eff2f3");
            $('body').css("background", "#eff2f3");
            protocall.view.loadAgenciesPage(false);
        } else {
            return false;
        }
//
        if (subMenu.length > 0) {
            var subMenuName = subMenu[0];
            console.log("SubMenu Name", subMenuName)
            if (subMenuName == CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW) {
                this.view.viewCustomerViewFeed(false);
            }
            else if (subMenuName == CONSTANTS.LINK_TYPE.MY_ALERTS) {
                var $el = $('.myalerts')
                this.view.loadMyAlertsFeeds($el, false);
            } else if (subMenuName == CONSTANTS.LINK_TYPE.INCIDENTS) {
                var $el = $('.incidents')
                this.view.loadIncidentsFeeds($el, false);
            } else if (subMenuName == CONSTANTS.LINK_TYPE.POLICIES) {
                var $el = $('.policies')
                this.view.loadPoliciesFeeds($el, false);
            }
            else if (subMenuName == CONSTANTS.LINK_TYPE.ARCHIVES) {
                var $el = $('.archives')
                this.view.loadArchiveFeeds($el, false);
            }
            else if (subMenuName == CONSTANTS.LINK_TYPE.VIEW_ARCHIVES) {
                var $el = $('.view_archives')
                this.view.loadviewArchivedFeeds($el, false);
            }

        }
    },
    setPage: function (page, url, title, data) {
        if (url == undefined) {
            url = "login";
        }
        data = data ? data : ""; // json data for the page
        var urlWithHash = "#" + url;
        var dataModified = {
            "url": url,
            "data": data
        };
        window.history.pushState(dataModified, title, urlWithHash);
    },
    setPageNavigation: function (page) {
        CURRENT_PAGE = page;
        this.loadPage(CURRENT_PAGE);
        this.setPage(CURRENT_PAGE, CURRENT_PAGE, CURRENT_PAGE, "");
    },
    setLocalStorage: function (page) {
        localStorage.setItem('currentPage', page);
    },
    stateNavigation: function (page) {
        this.loadPage(page);
    },
    //On click of pages menu, call the below
    clickPageNavigation: function (page) {
        CURRENT_PAGE = page;
        //this.loadPage(page);
        this.setLocalStorage(CURRENT_PAGE);
    },
    isLoggedIn: function () {
        //Check for user logged in.
        if (localStorage) {
            return sessionStorage.loggedIn ? true : false;
        } else {
            if (CONSTANTS.ISLOGGEDIN) {
                return true;
            } else {
                return false;
            }
        }
    },
    setMenuSelection: function (page, subMenu) {
        $(".mb-menu a.selected-tab").removeClass("selected-tab");
        if (page == CONSTANTS.LINK_TYPE.HOME_PAGE) {
            $(".mb-menu a.home").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.CARRIERS_PAGE) {
            $(".mb-menu a.carriers").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.AGENCY_PAGE) {
            $(".mb-menu a.agencyinfo").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.CARRIERAGENCY) {
            $(".mb-menu a.CarrierAgencies").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.AGENCIES_PAGE) {
            $(".mb-menu a.agencies-info").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE) {
            $(".mb-menu a.customers").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.MY_REP_PAGE) {
            $(".mb-menu a.myreps").addClass("selected-tab");
        } else if (page == CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE) {
            $(".mb-menu a.carrierreps").addClass("selected-tab");
        }
    },
    displaySpinner: function (show) {
        if (show) {
            $("#spinner").css("display", "block");
        } else {
            $("#spinner").css("display", "none");
        }
    },
    closeOverlay: function () {
        sessionStorage.isOverlayOpened = "false";
        overlay.closeOverlay();
        $(".content-holder").attr('style', 'overflow: auto !important');
        try {
            $("#password").focus();
        } catch (e) {

        }
        sessionStorage.IsAssignToCustomersOverlay = "false";
        sessionStorage.isSendAppLink = "false";
    },
    closePopUp: function () {
        $("#page").css("height", "99%");
        $("#page").css("height", "100%");
        popUpContent.closePopUpContent();
    }
};
protocall.events = {
    createEvents: function () {
        setInterval(function () {

            var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
            if (isSafari) {
                $(".settingslogo-viewpic").attr("style", "position:initial !important;left:0% !important;top:0% !important;");
//                $(".rep-label").attr("style", "float: left;");
//                $(".rep-label .lbl-in-block").attr("style", "float: left;");
                //.rep-label .lbl-in-block
            }


            if (localStorage.LoginType == 'Admin') {
                $(".edit-cover-pic").css("display", "block");
//                $(".edit-agency-pic").css("display", "block");
            } else {
                $(".edit-cover-pic").css("display", "none");
                $(".edit-agency-pic").css("display", "none");
            }

//            $('.ageny-img-width').fillBox();
            $(".content-holder").css("width", "99%");
            $(".content-holder").css("width", "100%");
            var status = navigator.onLine ? 'online' : 'offline';
            if (status == "offline") {
                showAlertBox("There is no Internet Connection..!");
            }
        }, 300);
        /* $(document).on("click","#showPoliciesForCustomer h2",function(e){
         var currentTarget = $(e.currentTarget);
         var currentTargetText = $(this).text();
         var currentParent = $(this).parent().find(".policyDetailsForall").attr("style");
         console.log("currentParent>>>>>>",currentParent);
         var isActiveSlide = $(currentTarget).parents().hasClass("activeSlide");
         if(isActiveSlide){
         if(currentTargetText == "Vehicles/Watercrafts"){
         currentTargetId = $(currentTarget).attr("id");
         console.log("currentTargetId>>>>>>>>",currentTargetId);
         console.log("parent>>>>>>.",$(currentTarget).closest());
         $(this).parent().find(".vehicleDetailsToggle").slideToggle();
         } else if(currentTargetText == "Others"){
         currentTargetId = $(currentTarget).attr("id");
         $(this).parent().find(".otherDetailsToggle").slideToggle();
         } else {
         currentTargetId = $(currentTarget).attr("id");
         $(this).parent().find(".propertyDetailsToggle").slideToggle();
         }
         //$(currentTarget).parent().find(".policyDetailsForall").slideToggle();
         } else {
         console.log("There is no active slide");
         } */
        /* if(currentTargetText == "Vehicles/Watercrafts"){
         currentTargetId = $(currentTarget).attr("id");
         $(currentTargetId).parent().find(".policyDetailsForall").slideToggle();
         } */
        /* currentTarget = $(e.currentTarget).attr("id");
         var isActiveSlide = $(currentTarget).parents().hasClass("activeSlide");
         if(isActiveSlide){
         $(currentTarget).parent().find(".policyDetailsForall").slideToggle();
         } else {
         
         } */
        /* e.preventDefault();
         }); */
        /* $(document).on("click","#rightNav",function(e){
         var indexToBefind = $("#slidesHolder div.activeSlide").index()+1;
         $("#slidesHolder").find("div.slide").removeClass("activeSlide");
         $("#slidesHolder div.slide").find("h2#policyDetailsBlock").removeClass("active");
         $("#slidesHolder div.slide:eq("+indexToBefind+")").addClass("activeSlide");
         $("#slidesHolder div.slide:eq("+indexToBefind+")").find("h2#policyDetailsBlock").addClass("active");
         });
         $(document).on("click","#leftNav",function(e){
         var indexToBefind = $("#slidesHolder div.activeSlide").index()-1;
         $("#slidesHolder").find("div.slide").removeClass("activeSlide");
         $("#slidesHolder div.slide").find("h2#policyDetailsBlock").removeClass("active");
         $("#slidesHolder div.slide:eq("+indexToBefind+")").addClass("activeSlide");
         $("#slidesHolder div.slide:eq("+indexToBefind+")").find("h2#policyDetailsBlock").addClass("active");
         }); */
        /* $(document).on("click","#policyDetailsBlock",function(e){
         var currentTarget = $(e.currentTarget);
         console.log("currentTarget value is>>>>>>>>",currentTarget);
         var currentTargetActiveClass = currentTarget.hasClass("active");
         console.log("currentTargetActiveClass>>>>>>>>>>>>>",currentTargetActiveClass);
         if(currentTargetActiveClass){
         console.log("condition satisfied");
         var currentPolicyDetails = currentTarget.parent().find(".policyDetailsForall");
         console.log("closest element>>>>>>>>",currentTarget.parent().find("#showPoliciesForCustomer"))
         $(currentPolicyDetails).slideToggle();
         } else {
         console.log("condition not satisfied");
         }
         e.preventDefault();
         }); */
        $(document).on("keypress", "#password", function (e) {
            var kc = e.keyCode ? e.keyCode : e.which;
            var sk = e.shiftKey ? e.shiftKey : ((kc == 16) ? true : false);
            if (((kc >= 65 && kc <= 90) && !sk) || ((kc >= 97 && kc <= 122) && sk)) {
                showAlertBox("Your Caps Lock is on");
                setTimeout(function () {
                    $('#password').val("");
                }, 500);
            }

        });
        /* $(document).on("focus", "#usertype", function (e) {
         $(this).parent().css("box-shadow", "0px 0px 7px gray");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         }); */
        $(document).on("scroll", ".rep-block", function (e) {
            console.log("rep block loaded");
        });
        $(document).on("click", '.policy-det-blk input[type="radio"]', function (e) {
            var radioButtonName = $(this).attr("name");
            if (radioButtonName == "policyRadioValue") {
                sessionStorage.seletedRadioButtonId = $(this).attr("id");
            } else {
                return false;
            }
        });
        $(document).on("focus", "#email", function (e) {
            $(this).parent().css("box-shadow", "0px 0px 7px gray");
            $(this).parent().css("-webkit-transition", "box-shadow .3s");
        });
        $(document).on("focus", "#password", function (e) {
            $(this).parent().css("box-shadow", "0px 0px 7px gray");
            $(this).parent().css("-webkit-transition", "box-shadow .3s");
        });
        $(document).on("focusout", "#email", function (e) {
            $(this).parent().css("box-shadow", "none");
            $(this).parent().css("-webkit-transition", "box-shadow .3s");
        });
        /*  $(document).on("focusout", "#usertype", function (e) {
         $(this).parent().css("box-shadow", "none");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         }); */
        $(document).on("focusout", "#password", function (e) {
            $(this).parent().css("box-shadow", "none");
            $(this).parent().css("-webkit-transition", "box-shadow .3s");
        });
        //-----------------------------
        /* $(document).on("focusout", "#id-reset-emailId", function (e) {
         $(this).parent().css("box-shadow", "none");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focusout", "#id-reset-newpassword", function (e) {
         $(this).parent().css("box-shadow", "none");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focusout", "#id-reset-retype-password", function (e) {
         $(this).parent().css("box-shadow", "none");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focus", "#id-reset-emailId", function (e) {
         $(this).parent().css("box-shadow", "0px 0px 7px gray");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         }); */
        $(document).on("change", ".id-policyRadioValue,#radio-button-now,#radio-button-later,#radio-button-public,#radio-button-private,#radio-button-custom", function (e) {
            $(".id-policyRadioValue").removeClass("radioButtonClass");
            $("#radio-button-now").removeClass("radioButtonClass");
            $("#radio-button-later").removeClass("radioButtonClass");
            $("#radio-button-private").removeClass("radioButtonClass");
            $(".c-radio-button-public").removeClass("radioButtonClass");
            $("#radio-button-custom").removeClass("radioButtonClass");
            $(this).addClass("radioButtonClass");
        });
        /* $(document).on("focus", "#id-reset-newpassword", function (e) {
         $(this).parent().css("box-shadow", "0px 0px 7px gray");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focus", "#id-reset-retype-password", function (e) {
         $(this).parent().css("box-shadow", "0px 0px 7px gray");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         //-------------------
         $(document).on("focus", "#firstNameSignup", function (e) {
         $(this).parent().css("box-shadow", "0px 0px 7px gray");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focus", "#lastNameSignup", function (e) {
         $(this).parent().css("box-shadow", "0px 0px 7px gray");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focus", "#emailIdSignup", function (e) {
         $(this).parent().css("box-shadow", "0px 0px 7px gray");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focus", "#passwordSignUp", function (e) {
         $(this).parent().css("box-shadow", "0px 0px 7px gray");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focus", "#id-overlayaiigncustomers,#id-overlaysendapplink,#reTypePasswordSignUp,#datepicker,#pushmessagetimepicker,#ampmtimepicker,#id-overlaysharewithrep,#timepicker2,#id-overlayprivacy", function (e) {
         $(this).parent().css("box-shadow", "0px 0px 7px gray");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focusout", "#id-overlayaiigncustomers,#id-overlaysendapplink,#firstNameSignup,#datepicker,#pushmessagetimepicker,#ampmtimepicker,#id-overlaysharewithrep,#timepicker2,#inviterepemail,#id-overlayprivacy", function (e) {
         $(this).parent().css("box-shadow", "none");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focusout", "#lastNameSignup", function (e) {
         $(this).parent().css("box-shadow", "none");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focusout", "#emailIdSignup", function (e) {
         $(this).parent().css("box-shadow", "none");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focusout", "#passwordSignUp", function (e) {
         $(this).parent().css("box-shadow", "none");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focusout", "#reTypePasswordSignUp", function (e) {
         $(this).parent().css("box-shadow", "none");
         $(this).parent().css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("mouseover", ".mylistbox", function (e) {
         
         $(this).css("box-shadow", "0px 0px 7px gray");
         $(this).css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("mouseleave", ".mylistbox", function (e) {
         $(this).css("box-shadow", "none");
         $(this).css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("click", ".mylistbox", function (e) {
         
         $(".mylistbox").css("box-shadow", "none");
         $(this).css("box-shadow", "0px 0px 7px gray");
         $(this).css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("click", ".mylistbox", function (e) {
         $(".mylistbox").css("box-shadow", "none");
         $(this).css("box-shadow", "none");
         $(this).css("-webkit-transition", "box-shadow .3s");
         }); */
        //View Archived BREADCRUMB navigation
        $(document).on("click", "#subMenuToShow", function (e) {
            IsAlphaSelected = false;
            sessionStorage.selectedTab = "HOME_PAGE";
            if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "INCIDENTS") {
                protocall.view.loadIncidentsFeeds(e, false);
            } else if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "POLICIES") {
                protocall.view.loadPoliciesFeeds(e, true);
            } else {
                protocall.view.loadviewArchivedFeeds(e, true);
            }

        });
        //-----------------

//        $(document).on("mouseover", ".parent-content-holder", function (e) {
//
//            $(this).css("box-shadow", "0px 0px 7px gray");
//            $(this).css("-webkit-transition", "box-shadow .3s");
//        });
//        $(document).on("mouseleave", ".parent-content-holder", function (e) {
//            $(this).css("box-shadow", "none");
//            $(this).css("-webkit-transition", "box-shadow .3s");
//        });


//        $(document).on("mouseover", ".reps-feed-screen", function (e) {
//
//            $(this).css("box-shadow", "0px 0px 7px gray");
//            $(this).css("-webkit-transition", "box-shadow .3s");
//        });
//        $(document).on("mouseleave", ".reps-feed-screen", function (e) {
//            $(this).css("box-shadow", "none");
//            $(this).css("-webkit-transition", "box-shadow .3s");
//        });

        /* $(document).on("mouseover", ".associated-background", function (e) {
         $(this).css("box-shadow", "0px 0px 7px gray");
         $(this).css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("mouseleave", ".associated-background", function (e) {
         $(this).css("box-shadow", "none");
         $(this).css("-webkit-transition", "box-shadow .3s");
         });
         //------------
         
         $(document).on("mouseover", "#firstnamenew,#lastnamenew,#phonenew,#statenew,#emailnew,#citynew,#namenew,.preffered-border-view ", function (e) {
         $(this).css("box-shadow", "0px 0px 7px gray");
         $(this).css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("mouseleave", "#firstnamenew,#lastnamenew,#phonenew,#statenew,#emailnew,#citynew,#namenew,.preffered-border-view ", function (e) {
         $(this).css("box-shadow", "none");
         $(this).css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focus", "#firstnamenew,#lastnamenew,#phonenew,#statenew,#emailnew,#citynew,#namenew,.preffered-border-view,#id-carrier-agencyid,#id-carrier-agencytype,#id-carrier-masteragencyid,#id-carrier-agencyname,#id-carrier-agencyaddress1,#id-carrier-agencyaddress2,#id-carrier-agencycity,#id-carrier-agencystate,#id-carrier-agencyzipcode,#id-carrier-agencyphone,#id-carrier-agencywebsite,#id-carrier-agencyfacebook,#id-carrier-agencyemail,#color_Name,#theme_color_value,frame_color_value", function (e) {
         $(this).css("box-shadow", "0px 0px 7px gray");
         $(this).css("-webkit-transition", "box-shadow .3s");
         });
         $(document).on("focusout", "#firstnamenew,#lastnamenew,#phonenew,#statenew,#emailnew,#citynew,#namenew,.preffered-border-view,#id-carrier-agencyid,#id-carrier-agencytype,#id-carrier-masteragencyid,#id-carrier-agencyname,#id-carrier-agencyaddress1,#id-carrier-agencyaddress2,#id-carrier-agencycity,#id-carrier-agencystate,#id-carrier-agencyzipcode,#id-carrier-agencyphone,#id-carrier-agencywebsite,#id-carrier-agencyfacebook,#id-carrier-agencyemail,#color_Name,#theme_color_value,frame_color_value", function (e) {
         $(this).css("box-shadow", "none");
         $(this).css("-webkit-transition", "box-shadow .3s");
         }); */
        //------------
        /* $(document).on("focus", ".message-box,.url-box,#id-vendor-preferredvendorid,#id-vendor-type,#id-vendor-name,#id-vendor-phone,#id-vendor-address1,#id-vendor-address2,#id-vendor-city,#id-vendor-state,#id-vendor-zipcode,.c-textarea", function (e) {
         $(this).css("box-shadow", "0px 0px 7px gray");
         $(this).css("-webkit-transition", "box-shadow .3s");
         }); */
        /* $(document).on("focusout", ".message-box,.url-box,#id-vendor-preferredvendorid,#id-vendor-type,#id-vendor-name,#id-vendor-phone,#id-vendor-address1,#id-vendor-address2,#id-vendor-city,#id-vendor-state,#id-vendor-zipcode,.c-textarea", function (e) {
         $(this).css("box-shadow", "none");
         $(this).css("-webkit-transition", "box-shadow .3s");
         }); */
        $(document).on("click", ".snap", function (e) {
            e.stopPropagation();
            protocall.events.handleClick(e);
        });
        $(document).on("click", "#copyTextOverlay", function (e) {
            e.stopPropagation();
            protocall.view.copyToClipBoardDocOverlay(e);
        });
        $(document).on("click", ".printPageClass", function (e) {
            e.stopPropagation();
            protocall.events.handleClick(e);
        });
        $(document).on("click", ".logo", function (e) {
            protocall.view.loadHomePage(true);
        });
        $(document).on("click", ".deleteitem", function () {
            $("#delete_item" + $(this).attr("id")).empty();
        });
        $(document).on("click", ".mycustomerView", function () {
            var selectedEmail = $(this).attr("id");
            var selectedUserId = $(this).attr("id");
            var carrierIDValue = $(this).attr("value");
            localStorage.selectedEmail = $(this).attr("id");
            localStorage.setItem("ARRAY_CUSTOMERS_LIST", localStorage.selectedEmail);
            localStorage.selectedUserId = $(this).attr("id");
            localStorage.carrierIDValue = $(this).attr("value");
            sessionStorage.selectedTab = "CUSTOMER_VIEW";
            protocall.view.viewCustomerFeed(true, selectedEmail, selectedUserId, carrierIDValue);
        });
        $(document).on("click", ".myagenciesView", function () {
            localStorage.selectedEmail = $(this).attr("id");
            localStorage.carrierIDValue = $(this).attr("value");
            sessionStorage.selectedAgencyId = $(this).attr("value");
            protocall.view.viewAgenciesFeed(true, $(this).attr("id"), $(this).attr("value"));
        });
        $(document).on("click", ".superadminHome", function () {
            protocall.view.viewSuperAdminHomeIndividualViewFeed(true, $(this).attr("id"), $(this).attr("value"));
        });
        $(document).on("mouseover", "#id-agencypic", function () {
            if (localStorage.LoginType == 'Admin') {
                $("#id-edit-agency-pic").css("display", "block");
                $("#id-edit-agency-pic").css("top", "-100%");
            } else {
                return false;
            }
        });
        $(document).on("mouseover", ".settingslogo-viewpic", function () {
            if (localStorage.LoginType == 'Admin') {
                $("#id-edit-agency-pic").css("display", "block");
                $("#id-edit-agency-pic").css("top", "-100%");
            } else {
                return false;
            }
        });
        $(document).on("mouseleave", ".settingslogo-viewpic", function () {
            if (localStorage.LoginType == 'Admin') {
                $("#id-edit-agency-pic").css("display", "none");
            } else {
                return false;
            }
        });
        $(document).on("mouseover", ".carrier-view-parent,#id-carrierassociatedblock", function (e) {
            popUpContent.closePopUpContent();
        });
        $(document).on("mouseleave", "#id-agencypic", function () {
            $("#id-edit-agency-pic").css("display", "none");
            $("#id-edit-agency-pic").css("top", "-100%");
        });
        $(document).on("focusout", "#id-carrier-agencywebsite", function () {
            var myRegExp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
            var urlToValidate = $("#id-carrier-agencywebsite").val();
            if ($("#id-carrier-agencywebsite").val() != "") {
                if (!myRegExp.test(urlToValidate)) {
                    showAlertBox("Not a valid URL.");
                    $("#id-carrier-agencywebsite").focus();
                }
            }
        });
        $(document).on("focusout", "#id-carrier-agencyfacebook", function () {
            var myRegExp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
            var urlToValidate = $("#id-carrier-agencyfacebook").val();
            if ($("#id-carrier-agencyfacebook").val() != "") {
                if (!myRegExp.test(urlToValidate)) {
                    showAlertBox("Not a valid URL.");
                    $("#id-carrier-agencyfacebook").focus();
                }
            }
        });
        /*  $(document).on("click", ".Carrierreps-feed-view-base", function () {
         if (localStorage.LoginType == 'Admin') {
         sessionStorage.IsAssignToCustomersOverlay = "true";
         //                utils.server.assignToCustomers($(this).attr("id"));
         } else {
         protocall.customer.loadAgencyDetailsView($(this).attr("id"));
         }
         }); */
        $(document).on("click", ".Carrierreps-feed-view", function () {
            if (localStorage.LoginType == 'Admin') {
                sessionStorage.IsAssignToCustomersOverlay = "true";
                MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
                utils.server.assignToCustomers($(this).attr("id"));
            }
        });
        $(document).on("click", ".carrier-feed-assigntocustomeroverlay-view", function () {
            //utils.server.assignToCustomers($(this).attr("id"));
        });
        //        /userbox

        $(document).on("click", "#id-alertbox-ok", function () {
            $("#id-alertboxoverlay").css("display", "none");
        });
        $(document).on("click", ".inner-share-spacing", function () {

            utils.server.shareToRep($(this).attr("id"));
        });
        //content-holder
        $(document).on("click", "#id-canecelbutton", function () {
            addBottomBorder();
            hideAgencyTextboxes();
            $("#id-c-agencyid").show();
            $("#id-c-masteragencyid").show();
            $("#id-c-agencytype").show();
            $("#id-c-agencyname").show();
            $("#id-c-agencyaddress1").show();
            $("#id-c-agencyaddress2").show();
            $("#id-c-agencycity").show();
            $("#id-c-agencystate").show();
            $("#id-c-agencyzip").show();
            $("#id-c-agencyphone").show();
            $("#id-c-agencyemail").show();
            $("#id-c-agencywebsite").show();
            $("#id-c-agencyfacebook").show();
            $("#id-canecelbutton").css("display", "none");
            document.getElementById("id-carrier-edit").innerHTML = "Edit";
            $("#color_Name").css("background-color", RESPONSE.BACKGROUNDCOLORVALUE);
            $("#theme_color_value").css("background-color", RESPONSE.THEMECOLOR);
            $("#frame_color_value").css("background-color", RESPONSE.FRAMECOLOR);
        });
        $(document).on("click", ".preferredvendor", function () {
            SERVICEID = $(this).attr("id");
            utils.server.getResponseForPreferredVendor($(this).attr("id"));
        });
        //Carrierreps-feed-view-base
        $(document).on("click", ".Carrierreps-feed-view-base", function () {
            var carrierid = $(this).attr("id");
            sessionStorage.IsAssignToCustomersOverlay = "true";
            MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
            utils.server.assignToCustomers(carrierid);
            //protocall.events.GlobalContainerScrollevent();
        });
        $(document).on("click", ".agencyReps-feed-view", function () {
            var agencyid = $(this).attr("id");
            localStorage.selectedEmailForAgency = agencyid;
            localStorage.setItem("AGENCYADMIN_MYREPID", agencyid);
        });

//theme_color_value,frame_color_value
        $(document).on("mouseover", "#color_Name", function () {

            $('#color_Name').ColorPicker({
                color: RESPONSE.BACKGROUNDCOLORVALUE,
                onShow: function (colpkr) {
                    $(colpkr).fadeIn(500);
                    return false;
                },
                onHide: function (colpkr) {
                    $(colpkr).fadeOut(500);
                    return false;
                },
                onChange: function (hsb, hex, rgb) {
                    $('#color_Name').css('backgroundColor', '#' + hex);
                    $('#color_Name').attr('class', '#' + hex);
                }
            });
        });

        $(document).on("mouseover", "#theme_color_value", function () {

            $('#theme_color_value').ColorPicker({
                color: RESPONSE.THEMECOLOR,
                onShow: function (colpkr) {
                    $(colpkr).fadeIn(500);
                    return false;
                },
                onHide: function (colpkr) {
                    $(colpkr).fadeOut(500);
                    return false;
                },
                onChange: function (hsb, hex, rgb) {
                    $('#theme_color_value').css('backgroundColor', '#' + hex);
                    $('#theme_color_value').attr('class', '#' + hex);
                }
            });
        });

        $(document).on("mouseover", "#frame_color_value", function () {

            $('#frame_color_value').ColorPicker({
                color: RESPONSE.FRAMECOLOR,
                onShow: function (colpkr) {
                    $(colpkr).fadeIn(500);
                    return false;
                },
                onHide: function (colpkr) {
                    $(colpkr).fadeOut(500);
                    return false;
                },
                onChange: function (hsb, hex, rgb) {
                    $('#frame_color_value').css('backgroundColor', '#' + hex);
                    $('#frame_color_value').attr('class', '#' + hex);
                }
            });
        });




        $(document).ready(function () {
            sessionStorage.IDENDIFIER = "49c03e36-f3f1-4132-8115-2f74c8a7bae3";
            sessionStorage.IDENDIFIER_NAME = "Agency";


            $("#page").css({
                'opacity': '1',
                'padding': '5px',
                'height': '100%',
                'overflow': 'hidden'
            });
            var pageName = protocall.grabHashPageForInviteRep();
            if (pageName == undefined) {
                pageName = "#login";
            }
            if (pageName.indexOf("#login") > -1 && pageName.indexOf("#signup") > -1) {
                $('body').css("background", "#eff2f3");
            }

        });
        $(document).on("change", "#datepicker", function () {
            var inputDate = new Date(this.value);
            var twoDigitMonth1 = ((inputDate.getMonth().length + 1) === 1) ? (inputDate.getMonth() + 1) : '0' + (inputDate.getMonth() + 1);
            var currentDate = inputDate.getFullYear() + "-" + twoDigitMonth1 + "-" + inputDate.getDate();
            var fullDate = new Date();
            var twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);
            var selectedDate = fullDate.getFullYear() + "-" + twoDigitMonth + "-" + fullDate.getDate();
            if (currentDate == selectedDate) {
                var currentTime = new Date();
                var hours = currentTime.getHours();
                var minutes = currentTime.getMinutes();
                var ampm = (hours >= 12) ? "PM" : "AM";
                if (hours > 12) {
                    hours = hours % 12;
                }
                $("#pushmessagetimepicker").empty();
                for (var hour = hours; hour <= 12; hour++) {
                    for (var min = minutes; min < 60; min++) {
                        $("#pushmessagetimepicker").append('<option>' + minTwoDigits(hour) + ":" + minTwoDigits(min) + '</option>');
                    }
                    minutes = 0;
                }
                if (ampm == "AM") {
                    $("#ampmtimepicker").prop("selectedIndex", 0);
                } else {
                    $("#ampmtimepicker").prop("selectedIndex", 1);
                }

            } else {
                $("#pushmessagetimepicker").empty();
                for (var hour = 1; hour <= 12; hour++) {
                    for (var min = 0; min < 60; min++) {
                        $("#pushmessagetimepicker").append('<option>' + minTwoDigits(hour) + ":" + minTwoDigits(min) + '</option>');
                    }
                }
                $("#ampmtimepicker").prop("selectedIndex", 0);
            }

        });
        $(document).on("click", "#id_back_button", function () {
            $("#id-preferred-vendors-view-load").click();
            $(".vendor-detail-block").css("display", "none");
            if (localStorage.getItem("LOGIN_LABEL") != "Agency") {
                $(".settings-edit-bar").css("display", "none");
            }
        });
        $(document).on("click", ".id-associatedownarrow", function () {
            protocall.carrier.openSelect("#id-associatedropdown");
        });
        $(document).on("click", "#id-customers-dropdown5", function () {
            console.log("coming to othe click function");
            protocall.carrier.openSelect("#id-customers-dropdown1");
        });
        $(document).on("click", "#id-sortbyfliter", function (event) {
            protocall.view.loadSortBy(event.currentTarget, true);
        });
        $(document).on("click", ".submenu-drop-icon", function () {
            protocall.carrier.openSelect("#usertype");
        });
        $(document).on("click", ".drop-down-icon-1", function () {
            protocall.carrier.openSelect("#timepicker");
        });
        $(document).on("click", ".drop-down-icon-2", function () {
            protocall.carrier.openSelect("#timepicker2");
        });
        $(document).on("click", ".associatedownarrow-customer", function () {
            protocall.carrier.openSelect("#id-customers-dropdown");
        });
        $(document).on("click", ".div-gototop-button", function () {
            $('.content-holder').animate({scrollTop: 0}, 'slow');
        });
        $(document).on("click", ".div-loadbutton", function () {
            sessionStorage.hasLoadedNextPage = "true";
            showLoadingButton();
            parseNextPage();
        });
        //timepicker2
        $(document).on("click", ".range-sel2", function (e) {
            popUpContent.closePopUpContent();
            var $el = $(e.currentTarget);
            protocall.view.loadFliterbox2($el, true);
        });
        $(document).on("click", ".range-sel3", function (e) {
            popUpContent.closePopUpContent();
            var $el = $(e.currentTarget);
            protocall.view.loadFliterbox3($el, true);
        });
//        $(document).on("click", "#associatedownarrow", function (e) {
//            popUpContent.closePopUpContent();
//            var $el = $(e.currentTarget).fi();
//            protocall.view.loadAssociatedFieldMenuCarriers($el, true);
////             $("#id-associatedropdown").click();
//        });
        $(document).on("click", "#id-associatedropdown-parent", function (e) {
            popUpContent.closePopUpContent();
            var $el = $(e.currentTarget);
            protocall.view.loadAssociatedFieldMenuCarriers($el, true);
        });
        $(document).on("click", "#id-customers-dropdown-parent", function (e) {
            popUpContent.closePopUpContent();
            var $el = $(e.currentTarget);
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                protocall.view.loadAssociatedFieldMenuCustomers($el, true);
            } else {
                protocall.view.loadAssociatedFieldMenuAgencies($el, true);
            }
        });
//        $(document).on("click", "#id-customers-dropdown1", function (e) {
//            popUpContent.closePopUpContent();
//            var $el = $(e.currentTarget);
//            protocall.view.loadAssociatedFieldMenuCustomers($el, true);
//        });
        $(document).on("click", ".userbox", function (e) {
            popUpContent.closePopUpContent();
            var $el = $(e.currentTarget);
            protocall.view.loadLoginData($el, true);
        });
        $(document).on("click", "#id-drop-down", function (e) {
            popUpContent.closePopUpContent();
            var $el = $(e.currentTarget);
            protocall.view.loadLoginData($el, true);
        });
        $(document).on("click", "#id-vendortype-box", function (e) {
            popUpContent.closePopUpContent();
            var $el = $(e.currentTarget);
            protocall.view.loadAddVendorMenu($el, true);
        });
        //timepicker2
        $(document).on("click", ".range-sel1", function (e) {
            popUpContent.closePopUpContent();
            var $el = $(e.currentTarget);
            protocall.view.loadFliterbox1($el, true);
        });
        //addvendorbox

        $(document).on("click", "#addvendorbox", function () {
            popUpContent.closePopUpContent();
            document.getElementById("id-vendortype-box").value = $(this).text();
            $("#id-vendortype").html($(this).text());
            $(this).addClass("mysortselected");
            //popUpContent.closePopUpContent();
        });
        $(document).on("click", ".prof-view-overlay", function () {
            $(this).addClass("mysortselected");
        });


        $(document).on("keypress", "#forgotPasswordEmail", function () {
            try {
                $(".forgotpassword-errortext").css("display", "none");
            } catch (e) {

            }
        });


        $(document).on("click", ".prof-view-overlay-sort-associateddropdown", function () {
            $(this).addClass("mysortselected");
            try {
                document.getElementById("id-associatedropdown").value = $(this).text();
                $("#id-associatedropdown").html($(this).text());
            } catch (e) {

            }

            try {
                document.getElementById("id-customers-dropdown1").value = $(this).text();
                $("#id-customers-dropdown1").html($(this).text());
            } catch (e) {

            }

            try {
                document.getElementById("id-customers-dropdown").value = $(this).text();
                $("#id-customers-dropdown").html($(this).text());
            } catch (e) {

            }



            var selOption = $(this).text().trim();
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                if (selOption == "ASSOCIATED REPS") {
                    localStorage.IsDropdownClick = "true";
                    if (sessionStorage.selectedTab == "VIEW_CARRIER_FEEDVIEW") {
                        carrieAssociatedPageNumber = 0;
                        sessionStorage.type = "AssociatedRepresentative";
                        module_ServerCall.parseCarrierViowAssociatedFeedRepsData(sessionStorage.CarrierId, ++carrieAssociatedPageNumber, sessionStorage.type);
                    } else {
                        protocall.carrier.loadAssociatedReps(CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES);
                    }
                } else if (selOption == "ASSOCIATED REPS") {
                    localStorage.IsDropdownClick = "true";
                    protocall.carrier.loadCarrierOwnerCustomersAssociatedReps(CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVE);
                } else if (selOption == "ASSOCIATED AGENCY") {
                    localStorage.IsDropdownClick = "true";
                    protocall.carrier.loadCarrierOwnerCustomersAssociatedAgencies(CUSTOMER.AGENCY.ASSOCIATEDAGENCY);
                } else if (selOption == "ASSOCIATED REPS") {
                    sessionStorage.IsDropdownClick = "true";
                    protocall.carrier.loadAssociatedReps(CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES);
                } else if (selOption == "ASSOCIATED CARRIER") {
                    protocall.customer.loadAssociateCarrier(CUSTOMER.AGENCY.ASSOCIATEDCARRIERS);
                } else {
                    localStorage.IsDropdownClick = "true";
                    protocall.carrier.loadAssociatedCustomers();
                }
            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {

                /* if (localStorage.LoginType == 'Representatives') {
                 
                 
                 if (selOption == "ASSOCIATED REPS") {
                 sessionStorage.IsDropdownClick = "true";
                 protocall.carrier.loadCarrierAssociatedReps();
                 } else if (selOption == "ASSOCIATED CUSTOMERS") {
                 sessionStorage.IsDropdownClick = "true";
                 protocall.carrier.loadCarrierAssociatedCustomers();
                 } else if (selOption == "ASSOCIATED AGENCY") {
                 localStorage.IsDropdownClick = "true";
                 protocall.carrier.loadCarrierOwnerCustomersAssociatedAgencies();
                 } else {
                 localStorage.IsDropdownClick = "true";
                 CarrierdynamicTemplate.carrier.loadAssocaiteAgenciesDataForCarrier();
                 }
                 
                 } */

                //protocall.carrier.loadCarrierOwnerCustomersAssociatedReps();
                //if (localStorage.LoginType == 'Admin') {
                if (selOption == "ASSOCIATED REPS") {
                    sessionStorage.isNextPageAllowed = "false";
                    //protocall.carrier.loadAssociatedReps(CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES);

                    sessionStorage.IsDropdownClick = "true";
                    var agencyassociatedRepsAndCustomerFeedPageNumber = 0;
                    sessionStorage.type = "AssociatedRepresentative";
                    module_ServerCall.parseCarrierViowAssociatedFeedRepsData(sessionStorage.selectedAgencyId, ++agencyassociatedRepsAndCustomerFeedPageNumber, sessionStorage.type);
//                         if (sessionStorage.IsCustomersTab == "true") {
//                          protocall.carrier.loadCarrierOwnerCustomersAssociatedReps();
//                          } else {
//                          protocall.carrier.loadCarrierAdminAssociatedRep();
//                          }
                } else if (selOption == "ASSOCIATED CUSTOMERS") {
                    sessionStorage.isNextPageAllowed = "true";
                    sessionStorage.IsDropdownClick = "true";
                    module_ServerCall.parseCarrierViowAssociatedFeedData(sessionStorage.selectedAgencyId, 1, sessionStorage.type);
//                        protocall.carrier.loadCarrierAdminAssociatedCustomers();
                } else if (selOption == "ASSOCIATED AGENCY") {
                    localStorage.IsDropdownClick = "true";
                    protocall.carrier.loadCarrierOwnerCustomersAssociatedAgencies(CUSTOMER.AGENCY.ASSOCIATEDAGENCY);
                } else {
                    localStorage.IsDropdownClick = "true";
                    CarrierdynamicTemplate.carrier.loadAssocaiteAgenciesDataForCarrier();
                }
                // }

            }

            popUpContent.closePopUpContent();
        });



        $(document).on("click", ".prof-view-overlay-sort-login", function () {

            $("#email").val('');
            $("#password").val('');
            $(this).addClass("mysortselected");
            if ($(this).text() == "Carrier" || $(this).text() == "Agency") {
                document.getElementById("id-usertype").value = "Brooker Insurance Agency";
                $("#id-usertype").html("Brooker Insurance Agency");
                var msglist = document.getElementById("id-usertype");
                msglist.setAttribute("data-carrierid", "49c03e36-f3f1-4132-8115-2f74c8a7bae3");
                msglist.setAttribute("data-logintype", "Agency");

                sessionStorage.IDENDIFIER = "49c03e36-f3f1-4132-8115-2f74c8a7bae3";
                sessionStorage.IDENDIFIER_NAME = "Agency";

            } else {
                var carrierId = $($(this)).attr("value");
                var loginType = $($(this)).attr("id");
                document.getElementById("id-usertype").value = $(this).text();
                $("#id-usertype").html($(this).text());
                var msglist = document.getElementById("id-usertype");
                msglist.setAttribute("data-carrierid", carrierId);
                msglist.setAttribute("data-logintype", loginType);

                sessionStorage.IDENDIFIER = carrierId;
                sessionStorage.IDENDIFIER_NAME = loginType;

            }
            popUpContent.closePopUpContent();
        });

        $(document).on("click", "#name-selectall", function (e) {

            var txtSelectAll = $("#id-assign-cus-selectall").html();
			var searchBoxValue = $("#id-overlayaiigncustomers").val();
            if (txtSelectAll == "Select All" && searchBoxValue == "") {
                $("#id-assign-cus-selectall").html("Select None");
                sessionStorage.isSelectAll = "true";
                fuct_sortbyBox2(true);
            } else if(txtSelectAll == "Select All" && searchBoxValue != ""){
				$("#id-assign-cus-selectall").html("Select None");
				protocall.view.displaySelectedList();
			}
			else {
                $("#id-assign-cus-selectall").html("Select All");
                $('input:checkbox').removeAttr('checked');
                sessionStorage.isSelectAll = "false";
//                fuct_sortbyBox2(false);
//                fuct_sortbyBox2(false);
            }


        });


        $(document).on("click", ".rep-label", function (e) {
            $("#name-selectall").removeAttr('checked');
            sessionStorage.isSelectAll = "false";
            $("#id-assign-cus-selectall").html("Select All");
        });

        $(document).on("click", "#filterbox2-alpha", function (e) {
            var currentTarget = $(e.currentTarget);
            popUpContent.closePopUpContent();
            document.getElementById("timepicker2").value = $(this).text();
            $("#timepicker2").html($(this).text());
            $("#timepicker3").html('None');
            $(this).addClass("mysortselected");
            if (sessionStorage.IsAssignToCustomersOverlay == "true") {
                $(".rep-block").addClass("spinner2").css("opacity", "0.5");
                var repBlockHeigh = $(".rep-content-block").height() / 2;
                $(".spinner1").css("top", repBlockHeigh);
                sortbyBox2(currentTarget);
            } else if (sessionStorage.isSendAppLink == "true") {
                sendAppLinkSortbyBox2();
            }
            else {
                sharewithRepSortbyBox2();
            }

        });
        $(document).on("click", "#filterbox3-alpha", function (e) {
            var currentTarget = $(e.currentTarget);
            popUpContent.closePopUpContent();
            document.getElementById("timepicker2").value = $(this).text();
            $("#timepicker3").html($(this).text());
            $(this).addClass("mysortselected");
            var stateValue = $("#timepicker2").text().split("(")[1].split(")")[0];
            var cityValue = $(this).text();
            if (stateValue != undefined && cityValue != undefined) {
                MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
                var deepPath = 'userlistsortedbylocationwithsection';
                sessionStorage.residentialCityForAssignRep = cityValue;
                sessionStorage.residentialStateForAssignRep = stateValue;
                assignRepSelectionBlock(deepPath);
            }
            console.log("State", stateValue + "city value", cityValue);
            /*  if (sessionStorage.IsAssignToCustomersOverlay == "true") {
             $(".rep-block").addClass("spinner2").css("opacity","0.5");
             var repBlockHeigh = $(".rep-content-block").height()/2;
             $(".spinner1").css("top",repBlockHeigh);
             sortbyBox2(currentTarget);
             } else if (sessionStorage.isSendAppLink == "true") {
             sendAppLinkSortbyBox2();
             }
             else {
             sharewithRepSortbyBox2();
             } */

        });
        $(document).on("click", "#filterbox1-none,#filterbox1-alpha,#filterbox1-citystate", function () {
            popUpContent.closePopUpContent(); //prof-view-overlay-sort
            document.getElementById("timepicker").value = $(this).text();
            var selectedText = $(this).text();
            $("#timepicker").html($(this).text());
            //$("#timepicker2").html("None");
            sessionStorage.overlayDrop1Name = $(this).text();
            $(this).addClass("mysortselected");
            if (sessionStorage.IsAssignToCustomersOverlay == "true" && selectedText != "None") {
                sortbyBox1();
            } else if (sessionStorage.isSendAppLink == "true") {
                sendAppLinkSortbyBox1();
            } else {
                Sharewithrep_sortbyBox1("sharewithrep");
            }
            if (selectedText == "None") {
                $("#timepicker2").html("None");
                sharewithRepSelectAllDropDown("true");
                /* MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
                 utils.server.gotAssignCustomersResponse("Email"); */
                $(".rep-content-blk").animate({scrollTop: 0}, 500);
                $(".range-sel3").css("display", "none");
                $(".range-sel2").attr("style", "width:44.9% !important;");
                $(".range-sel1").attr("style", "width:31.6% !important;");
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
                /* MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
                 sortbyBox1(); */
            }
        });
        $(document).on("click", "#id-sharetorep", function () {
            var alertId = sessionStorage.getItem("userAlertIdViewFeed");
            utils.server.shareToRep(alertId);
        });
        $(document).on("click", "#id-achieveicon", function () {
            var alertId = [sessionStorage.getItem("userAlertIdViewFeed")];
            var data = {"alertList": alertId},
            deepPath = "archieve",
                    page = "home",
                    callback = protocall.home.gotAchieveResponse,
                    authId = "",
                    spinnerMsg = "";
            var resp = utils.server.makeServerCall(page, data, callback, deepPath);
        });
        $(document).on("click", ".overalyPhots", function (e) {
            e.stopPropagation();
            console.log(".o-content");
            protocall.events.handleClickForPhotosOverlay(e);
        });
        $(document).on("click", ".overlayDocs", function (e) {
            e.stopPropagation();
            console.log(".o-content");
            protocall.events.handleClickForDocsOverlay(e);
        });
        $(document).on("click", ".audioOverlay", function (e) {
            e.stopPropagation();
            console.log(".o-content");
            protocall.events.handleClickForAudioThumbNail(e);
        });
        $(window).on("resize", function (e) {
            var searchBarLength = $(".searchbox-border").length;
            if (searchBarLength !== 0) {
                var widthOfSearchTextBox = $(".searchbox-border").width() + "px";
                var searchBorderLeftPosition = $(".searchbox-border").offset().left + "px";
                var searchBorderTopPosition = $(".searchbox-border").offset().top + 54 + "px";
                $("#searchBarDiv").css({"width": widthOfSearchTextBox, "left": searchBorderLeftPosition, "position": "absolute", "top": searchBorderTopPosition});
            }
            // protocall.events.handleResize(e);
        });
        //on keyup, start the countdown
        $(document).on("keyup", "#searchUserDetails", function (e) {
            clearTimeout(typingTimer);
            var searchTextValue = "";
            if (e.which == 40) {
                ++HOMEPAGERESPONSE.DOWNARROWPRESSEDCOUNT;
                HOMEPAGERESPONSE.UPARROWPRESSEDCOUNT = 0
                protocall.view.handleDownarrow();
                //$('#searchUserDetails').val('');
            } else if (e.which == 38) {
                ++HOMEPAGERESPONSE.UPARROWPRESSEDCOUNT;
                HOMEPAGERESPONSE.DOWNARROWPRESSEDCOUNT = 0
                protocall.view.handleUpArrowFun();
                //$('#searchUserDetails').val('');
            } else if (e.which == 13) {
				CUSTOMER.POLICYLISTWITHCARRIER = [];
                protocall.view.handleEnterFunction();
                $('#searchUserDetails').val('');
            } else if (e.which == 32) {
                return false;
            } else {
                if ($('#searchUserDetails').val()) {
                    typingTimer = setTimeout(function () {
                        searchTextValue = $("#searchUserDetails").val();
                        if (searchTextValue == "" || searchTextValue == "null") {
                            $("#searchBarDiv").hide();
                            $("#searchResultUL").hide();
                            //return false;
                        } else {
                            $("#searchResultUL").empty();
                            $("#searchResultUL").show();
                            var widthOfSearchTextBox = $(".searchbox-border").width() + "px";
                            var searchBorderLeftPosition = $(".searchbox-border").offset().left + "px";
                            var searchBorderTopPosition = $(".searchbox-border").offset().top + 54 + "px";
                            $("#searchBarDiv").css({"width": widthOfSearchTextBox, "left": searchBorderLeftPosition, "position": "absolute", "top": searchBorderTopPosition});
                            protocall.view.searchUserDetails(searchTextValue);
                        }
                    }, doneTypingInterval);
                }
            }
            e.preventDefault();
        });
        /* $(document).on("keyup", "#searchUserDetails", function (e) { 
         var searchTextValue = "";
         if (e.which == 40) {
         ++HOMEPAGERESPONSE.DOWNARROWPRESSEDCOUNT;
         HOMEPAGERESPONSE.UPARROWPRESSEDCOUNT = 0
         protocall.view.handleDownarrow();
         } else if (e.which == 38) {
         ++HOMEPAGERESPONSE.UPARROWPRESSEDCOUNT;
         HOMEPAGERESPONSE.DOWNARROWPRESSEDCOUNT = 0
         protocall.view.handleUpArrowFun();
         } else if (e.which == 13) {
         protocall.view.handleEnterFunction();
         } else if (e.which == 32) {
         return false;
         } else {
         if (searchTextValue == "" || searchTextValue == "null") {
         $("#searchBarDiv").hide();
         $("#searchResultUL").hide();
         //return false;
         } else {
         $("#searchResultUL").empty();
         $("#searchResultUL").show();
         var widthOfSearchTextBox = $(".searchbox-border").width() + "px";
         var searchBorderLeftPosition = $(".searchbox-border").offset().left + "px";
         var searchBorderTopPosition = $(".searchbox-border").offset().top + 54 + "px";
         $("#searchBarDiv").css({"width": widthOfSearchTextBox, "left": searchBorderLeftPosition, "position": "absolute", "top": searchBorderTopPosition});
         protocall.view.searchUserDetails(searchTextValue);
         }
         e.preventDefault();
         }
         e.preventDefault();
         }); */
        $(document).click(function (e) {
            e.stopPropagation();
            if (!($("#searchUserDetails").is(":focus"))) {
                $("#searchBarDiv").hide();
                $("#searchResultUL").hide();
            } else {
                var searchText = $("#searchUserDetails").val();
                if (searchText == "" || searchText == "null") {
                    $("#searchBarDiv").hide();
                    $("#searchResultUL").hide();
                    return false;
                } else {
                    $("#searchResultUL").empty();
                    $("#searchResultUL").show();
                    protocall.view.searchUserDetails(searchText);
                }
            }

        });
    },
    containerScrollEvent: function () {
        console.log("function called");
        $(".content-holder").on("scroll", function (e) {
            console.log("container scroll");
//            if (sessionStorage.getItem("SUBMENU") == "HOME_PAGE") {
            protocall.events.handleScroll();
//            }
        });
    },
    GlobalContainerScrollevent: function () {
        //
        $(".container container-maxwidth").on("scrollviewcarrierfeedview", function (e) {
            var container1 = $('.container-maxwidth');
            //
            if (container1.scrollTop() == 0) {
                $(".topContainer").css("box-shadow", "inset 0px 8px 8px #E9EFF0");
            } else {
                $(".topContainer").css("box-shadow", "inset 0px -6px 10px -5px rgba(0,0,0,0.3)");
            }
        }
        );
        $(".content-holder").on("scroll", function (e) {
            var container = $('.content-holder');
            //
            if ($('.content-holder').scrollTop() == 0) {
                $(".m-block").css("box-shadow", "0 8px 6px -6px #E9EFF0");
            } else {
                $(".m-block").css("box-shadow", "0 8px 6px -6px rgba(0,0,0,0.3)");
            }
        });
        $(".rep-grp-blk").on("scroll", function (e) {
            console.log("rep block scroll");
        });

    },
    mouseOverCheckbox: function () {
        var userFeedbox = $(".feed-user-pic-box");
        $.each(userFeedbox, function (index, element) {
            $(this).hover(
                    function () {
                        $(this).find("label").addClass("feed-label");
                    },
                    function () {
                        if ($(this).find("input").prop("checked")) {
                            $(this).find("label").addClass("feed-label");
                        } else {
                            $(this).find("label").removeClass("feed-label");
                        }
                    }
            );
        });
    },
    handleScrollForAssignRep: function () {
        console.log("hello");
        //setTimeout(scrollFunctionForAssignRep(),1000);
        /* $(".rep-content-blk").addEventListener("scroll",function(e){
         
         e.preventDefault();
         }); */
        $(".content-holder").off("scroll");
        $(".rep-content-blk").on("scroll", function (e) {
            console.log("asssign rep scroll function");
            var container = $('.rep-content-blk');
            //container.scrollTop(300);
            var scrollHeighForAssignRep = container[0].scrollHeight - container.scrollTop();
            var containerOuterHeight = container.outerHeight();
            var tempScrollHeight = scrollHeighForAssignRep;
            var largeDeskTopScrollHeight = ++scrollHeighForAssignRep;
            console.log("tempScrollHeight >>>>>>>>>", tempScrollHeight);
            console.log("containerOuterHeight >>>>>>>>>", containerOuterHeight);
            console.log("largeDeskTopScrollHeight >>>>>>>>>", largeDeskTopScrollHeight);
            var selectedOption = $("#timepicker2").text().trim();
            var selectedOption1 = $("#timepicker").text().trim();
            //if(MYREPS.SORTBYBOXCHANGED){
            var searchTextForRepOverlay = $("#id-overlayaiigncustomers").val();
            if (tempScrollHeight == containerOuterHeight || largeDeskTopScrollHeight == containerOuterHeight) {

                if (MYREPS.SEARCHFORCUSTOMER != true || searchTextForRepOverlay == "") {
                    if (selectedOption == "None" && selectedOption1 == "None") {
                        /* if(tempScrollHeight == containerOuterHeight || largeDeskTopScrollHeight == containerOuterHeight){
                         utils.server.gotAssignCustomersResponse();
                         e.preventDefault();
                         } */
                        console.log("both the options are none");
                        utils.server.gotAssignCustomersResponse();
                        //e.preventDefault();
                    } else if ((selectedOption1 == "None" || selectedOption1 == "Alphabetical") && ((selectedOption.indexOf("Section") > -1 && sessionStorage.isNextPageForAssignRepAlphabetical == "true") || selectedOption == "None")) {
                        /* if(tempScrollHeight == containerOuterHeight || largeDeskTopScrollHeight == containerOuterHeight){
                         var deepPathName = "userlistsortedbynameforsection";
                         assignRepSelectionBlock(deepPathName);
                         e.preventDefault();
                         } */
                        if (selectedOption != 'None') {
                            var deepPathName = "userlistsortedbynameforsection";
                            assignRepSelectionBlock(deepPathName);
                        } else {
                            return true;
                        }
                        e.preventDefault();
                    } else if (selectedOption == "Select All" && sessionStorage.isNextPageForAssignRep == "true") {
                        /* if(tempScrollHeight == containerOuterHeight || largeDeskTopScrollHeight == containerOuterHeight){
                         var deepPathName = "userlistsortedbyname";
                         assignRepSelectionBlock(deepPathName);
                         } */
                        var deepPathName = "userlistsortedbyname";
                        assignRepSelectionBlock(deepPathName);
                        e.preventDefault();
                    } else {
                        console.log("else part");
                    }
                } else {
                    console.log("condition was not satisfied");
                }
            } else {
                console.log("search is performed");
            }

        });
    },
    handleScroll: function (e) {
        var container = $('.content-holder'), deepPath = "", page = "";
        var scrollHeightValue = container[0].scrollHeight - container.scrollTop();
        //scrollHeightValue++;
        var containerOuterHeight = container.outerHeight();
        protocall.events.GlobalContainerScrollevent();
        CONSTANTS.SCROLLTOPVALUE = CONSTANTS.SCROLLTOPVALUE + container.scrollTop();
        if (sessionStorage.pageNumber == 2) {
//            pageNumber = 2;
            sessionStorage.pageNumber = 0;
        }
//        console.log("pagenumber----------->", pageNumber);
        var data = null;
        var tempScrollHeight = Math.round(scrollHeightValue);
        //var tempValueForSmallScreens = scrollHeightValue;
        //var forLastDesktopHeigh = tempScrollHeight++;
        //var forZoomLevelHeight = tempValueForSmallScreens--;
        console.log("tempScrollHeight>>>>>>>>>>>>", tempScrollHeight);
        console.log("containerOuterHeight", containerOuterHeight);
        var levelOne = containerOuterHeight + 1;
        var levelTwo = containerOuterHeight + 2;
        var levelThree = containerOuterHeight + 3;
        var levelFour = containerOuterHeight + 4;
        var levelFive = containerOuterHeight + 5;
        var levelSix = containerOuterHeight + 6;
        var levelMinusOne = containerOuterHeight - 1;
        var levelMinusTwo = containerOuterHeight - 2;
        var levelMinusThree = containerOuterHeight - 3;
        var levelMinusFour = containerOuterHeight - 4;
        console.log("levelOne>>>>>>>>>>>>", levelOne);
        console.log("levelTwo>>>>>>>>>>>>", levelTwo);
        console.log("levelThree>>>>>>>>>>>>", levelThree);
        console.log("levelFour>>>>>>>>>>>>", levelFour);
        console.log("levelFive>>>>>>>>>>>>", levelFive);
        console.log("levelSix>>>>>>>>>>>>", levelSix);



        if (sessionStorage.selectedTab == "viewFeed") {
            showLoadMore();

        } else if (sessionStorage.selectedTab == "HOME_PAGE" || sessionStorage.selectedTab == undefined || sessionStorage.selectedTab == "undefined") {


            if (sessionStorage.menuSelected == "incidentMenu") {
                console.log("scroll---->", "incidentMenu");
                deepPath = "filterfeedsbyalerttype";
                data = {"pageNumber": ++CONSTANTS.PGNUMBER, alertType: "incidentalert"};
            } else if (sessionStorage.menuSelected == "policyMenu") {
                console.log("scroll---->", "policyMenu");
                deepPath = "filterfeedsbyalerttype";
                data = {"pageNumber": ++CONSTANTS.PGNUMBER, alertType: "policyalert"};
            } else if (sessionStorage.menuSelected == "archieveMenu") {
                console.log("scroll---->", "archieveMenu");
                deepPath = "viewedarchieved";
                data = {"pageNumber": ++CONSTANTS.PGNUMBER};
            } else {
                console.log("scroll---->", "my alerts");
                if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW) {
                    deepPath = "filterfeedbyalphabetical";
                    data = {"pageNumber": ++CONSTANTS.PGNUMBER};
                } else {
                    deepPath = "filterfeedbyalertdate";
                    data = {"pageNumber": ++CONSTANTS.PGNUMBER};
                }
            }
            if (tempScrollHeight == containerOuterHeight || tempScrollHeight == levelOne || tempScrollHeight == levelTwo || tempScrollHeight == levelThree || tempScrollHeight == levelFour || tempScrollHeight == levelFive || tempScrollHeight == levelMinusOne || tempScrollHeight == levelMinusTwo || tempScrollHeight == levelMinusThree || tempScrollHeight == levelMinusFour) {

                sessionStorage.isEnteredBottom = "true";
                //showLoadMore();
                if (CONSTANTS.HASNEXTPAGE) {
                    if (HOMEPAGERESPONSE.INCIDENTALERTSCLICKED) {
                        container.scrollTop();
                    } else if (HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED) {
                        container.scrollTop();
                    } else {
                        container.scrollTop();
                        page = "home";
                    }


                    showLoadMore();

                    protocall.events.GlobalContainerScrollevent();
                    /*  if (IsLoadNextPage == true) {
                     IsLoadNextPage = false;
                     protocall.home.loadingAlertFeeds(data, 0, deepPath, page);
                     //pageNumber++;
                     //showLoadMore();
                     } else { */
                    /* if(sessionStorage.isNextPageAllowed){
                     showLoadMore();
                     } else {
                     hideLoadMore();
                     } */
                    //}
                    //return false;
                } else {
                    hideLoadMore();
                }
            } else if ($(".content-holder").scrollTop() <= 400) {
                if (sessionStorage.isEnteredBottom == "true") {
                    sessionStorage.isEnteredBottom = "false";
                    hideLoadMore();
                }
            } else {
                console.log("fail safe log");
            }
        } else if (sessionStorage.selectedTab == "CUSTOMERS_PAGE" || sessionStorage.selectedTab == "CUSTOMER_VIEW") {
            if (tempScrollHeight == containerOuterHeight || tempScrollHeight == levelOne || tempScrollHeight == levelTwo || tempScrollHeight == levelThree || tempScrollHeight == levelFour || tempScrollHeight == levelFive || tempScrollHeight == levelMinusOne || tempScrollHeight == levelMinusTwo || tempScrollHeight == levelMinusThree || tempScrollHeight == levelMinusFour) {
                sessionStorage.hasLoadedNextPage = "false";
                sessionStorage.isEnteredBottom = "true";
                showLoadMore();
            } else if ($(".content-holder").scrollTop() <= 400) {
                if (sessionStorage.isEnteredBottom == "true") {
                    sessionStorage.hasLoadedNextPage = "false";
                    sessionStorage.isEnteredBottom = "false";
                    hideLoadMore();
                }
            }
        } else if (sessionStorage.selectedTab == "CARRIERS_PAGE" || sessionStorage.selectedTab == "VIEW_CARRIER_FEEDVIEW") {

            if (tempScrollHeight == containerOuterHeight || tempScrollHeight == levelOne || tempScrollHeight == levelTwo || tempScrollHeight == levelThree || tempScrollHeight == levelFour || tempScrollHeight == levelFive || tempScrollHeight == levelMinusOne || tempScrollHeight == levelMinusTwo || tempScrollHeight == levelMinusThree || tempScrollHeight == levelMinusFour) {

                sessionStorage.hasLoadedNextPage = "false";
                sessionStorage.isEnteredBottom = "true";
                $(".div-reloadpage").fadeIn().css("display", "block");
                $(".div-loadbutton").css("display", "none");
                if (sessionStorage.isNextPageAllowed == "true") {
                    showLoadMore();
                } else {
                    hideLoadMore();
                }
            } else if ($(".content-holder").scrollTop() <= 400) {
                if (sessionStorage.isEnteredBottom == "true") {
                    sessionStorage.hasLoadedNextPage = "false";
                    sessionStorage.isEnteredBottom = "false";
                    hideLoadMore();
                }
            }
        } else if (sessionStorage.selectedTab == "REPS_PAGE") {

            if (tempScrollHeight == containerOuterHeight || tempScrollHeight == levelOne || tempScrollHeight == levelTwo || tempScrollHeight == levelThree || tempScrollHeight == levelFour || tempScrollHeight == levelFive || tempScrollHeight == levelMinusOne || tempScrollHeight == levelMinusTwo || tempScrollHeight == levelMinusThree || tempScrollHeight == levelMinusFour) {
                sessionStorage.hasLoadedNextPage = "false";
                sessionStorage.isEnteredBottom = "true";
                $(".div-reloadpage").fadeIn().css("display", "block");
                $(".div-loadbutton").css("display", "none");
            } else if ($(".content-holder").scrollTop() <= 400) {

                if (sessionStorage.isEnteredBottom == "true") {
                    sessionStorage.hasLoadedNextPage = "false";
                    sessionStorage.isEnteredBottom = "false";
                    hideLoadMore();
                }
            }
        } else if (sessionStorage.selectedTab == "SETTINGS") {

            if (tempScrollHeight == containerOuterHeight || tempScrollHeight == levelOne || tempScrollHeight == levelTwo || tempScrollHeight == levelThree || tempScrollHeight == levelFour || tempScrollHeight == levelFive || tempScrollHeight == levelMinusOne || tempScrollHeight == levelMinusTwo || tempScrollHeight == levelMinusThree || tempScrollHeight == levelMinusFour) {
                sessionStorage.hasLoadedNextPage = "false";
                sessionStorage.isEnteredBottom = "true";
                showLoadMore();
            } else if ($(".content-holder").scrollTop() <= 400) {
                if (sessionStorage.isEnteredBottom == "true") {
                    sessionStorage.hasLoadedNextPage = "false";
                    sessionStorage.isEnteredBottom = "false";
                    hideLoadMore();
                }
            }
        } else if (sessionStorage.selectedTab == "AGENCY_PAGE" || sessionStorage.selectedTab == "AGENCY") {
            if (tempScrollHeight == containerOuterHeight || tempScrollHeight == levelOne || tempScrollHeight == levelTwo || tempScrollHeight == levelThree || tempScrollHeight == levelFour || tempScrollHeight == levelFive || tempScrollHeight == levelMinusOne || tempScrollHeight == levelMinusTwo || tempScrollHeight == levelMinusThree || tempScrollHeight == levelMinusFour) {
                sessionStorage.hasLoadedNextPage = "false";
                sessionStorage.isEnteredBottom = "true";
                $(".div-reloadpage").fadeIn().css("display", "block");
                $(".div-loadbutton").css("display", "none");
                if (sessionStorage.isNextPageAllowed == "true") {
                    showLoadMore();
                } else {
                    hideLoadMore();
                }

            } else if ($(".content-holder").scrollTop() <= 400) {
                if (sessionStorage.isEnteredBottom == "true") {
                    sessionStorage.hasLoadedNextPage = "false";
                    sessionStorage.isEnteredBottom = "false";
                    hideLoadMore();
                }
            }
        } else if (sessionStorage.selectedTab == "AGENCY_REP_DETAILS_VIEW") {
            if (tempScrollHeight == containerOuterHeight || tempScrollHeight == levelOne || tempScrollHeight == levelTwo || tempScrollHeight == levelThree || tempScrollHeight == levelFour || tempScrollHeight == levelFive || tempScrollHeight == levelMinusOne || tempScrollHeight == levelMinusTwo || tempScrollHeight == levelMinusThree || tempScrollHeight == levelMinusFour) {
                sessionStorage.hasLoadedNextPage = "false";
                sessionStorage.isEnteredBottom = "true";
                $(".div-reloadpage").fadeIn().css("display", "block");
                $(".div-loadbutton").css("display", "none");
                if (sessionStorage.isNextPageAllowed == "true") {
                    showLoadMore();
                } else {
                    hideLoadMore();
                }

            } else if ($(".content-holder").scrollTop() <= 400) {
                if (sessionStorage.isEnteredBottom == "true") {
                    sessionStorage.hasLoadedNextPage = "false";
                    sessionStorage.isEnteredBottom = "false";
                    hideLoadMore();
                }
            }
        }
    },
    handleClick: function (e) {
        hideLoadMore();
        sessionStorage.isNextPageAllowed = "false";
        //IsLoadNextPage = false;
        CONSTANTS.PGNUMBER = 1;
        popUpContent.closePopUpContent();
        var $el = $(e.currentTarget);
        if ($el.prop("tagName") == "A") {
            e.preventDefault();
        }
        var type = $el.data("type") ? $el.data("type") : null;
        var page = $el.data("page") ? $el.data("page") : null;
        var subMenu = $el.data("submenu") ? $el.data("submenu") : null;
        var id = $el.data("id") ? $el.data("id") : null;
        var Carrieremail = id;
        if (!type)
            return;
        switch (type) {
            case CONSTANTS.LINK_TYPE.PAGE:
                if (!page && !subMenu)
                    return;
                switch (page) {
                    case CONSTANTS.LINK_TYPE.HOME_PAGE:
                        sessionStorage.isHomePageAlphaSort = "false";
                        sessionStorage.selectedTab = "HOME_PAGE";
                        pageNumber = 2;
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "MY_ALERTS");
                        sessionStorage.setItem("SUBMENU", "MY_ALERTS");
                        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
                        IsAlphaSelected = false;
                        protocall.view.loadHomePage(true);
                        /*  var page = "counthomepage";
                         var data = {},
                         deepPath = "providecountforunreadfeed",
                         page = "home",
                         async = false,
                         callback = protocall.carrier.getCountResponse2,
                         authId = "",
                         spinnerMsg = "";
                         utils.server.makeServerCall(page, data, callback, deepPath); */
                        break;
                        //AGENCY_PAGE
                    case CONSTANTS.LINK_TYPE.CARRIERS_PAGE:
                        sessionStorage.selectedTab = "CARRIERS_PAGE";
                        popUpContent.closePopUpContent();
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        sessionStorage.IsCustomersTab = false;
                        $('#page').css("background", "#eff2f3");
                        $('body').css("background", "#eff2f3");
                        PAGEREFRESH.ISPAGEREFRESHEDFORCARRIER = false;
                        protocall.view.loadCarrierPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.AGENCY_PAGE:
                        sessionStorage.selectedTab = "AGENCY_PAGE";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        $('#page').css("background", "#eff2f3");
                        $('body').css("background", "#eff2f3");
                        PAGEREFRESH.ISPAGEREFRESHEDFORAGENCY = false;
                        protocall.view.loadAgencyPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CARRIERAGENCY:
                        sessionStorage.selectedTab = "AGENCY";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        $('#page').css("background", "#eff2f3");
                        $('body').css("background", "#eff2f3");
                        protocall.view.loadCarrierOwnerAgenciesPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.AGENCIES_PAGE:
                        sessionStorage.selectedTab = "AGENCIES_PAGE";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        $('#page').css("background", "#eff2f3");
                        $('body').css("background", "#eff2f3");
                        PAGEREFRESH.ISPAGEREFRESHEDFORAGENCYFORREP = false;
                        protocall.view.loadAgenciesPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE:
                        CUSTOMER.AGENCY.CUSTOMERDATA = [];
                        localStorage.selectedEmail = "";
                        localStorage.selectedUserId = "";
                        localStorage.carrierIDValue = "";
                        sessionStorage.hasLoadedNextPage = "false";
                        sessionStorage.selectedTab = "CUSTOMERS_PAGE";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = true;
                        $('#page').css("background", "#eff2f3");
                        $('body').css("background", "#eff2f3");
                        protocall.view.loadCustomerPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CARRIERCUSTOMERS:
                        sessionStorage.selectedTab = "CUSTOMERS_PAGE";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        $('#page').css("background", "#eff2f3");
                        $('body').css("background", "#eff2f3");
                        protocall.view.loadCustomerPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.MY_REP_PAGE:
                        sessionStorage.isSelectAll = "false";
                        sessionStorage.selectedTab = "REPS_PAGE";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        $('#page').css("background", "#eff2f3");
                        $('body').css("background", "#eff2f3");
                        protocall.view.loadMyRepsPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE:
                        sessionStorage.selectedTab = "REPS_PAGE";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        $('#page').css("background", "#eff2f3");
                        $('body').css("background", "#eff2f3");
                        protocall.view.loadCarrierRepsPage(true);
                        break;
                    default:
                        break;
                }
                switch (subMenu) {
                    case CONSTANTS.LINK_TYPE.RESET_PASSWORD:
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        protocall.view.loadResetPassAlertBox();
                        break;

                    case CONSTANTS.LINK_TYPE.MY_REP_PAGE:
                        sessionStorage.isSelectAll = "false";
                        sessionStorage.selectedTab = "REPS_PAGE";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        $('#page').css("background", "#eff2f3");
                        $('body').css("background", "#eff2f3");
                        protocall.view.loadMyRepsPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.SETTINGS_SAVE:
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        var selectedTab = localStorage.getItem("SELECTED_SETTINGS_TAB");
                        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                            if (selectedTab == "AGENCY_TAB") {
                                editAgencySaveData();
                            } else if (selectedTab == "PREFERRED_VENDORS") {
                                editVendorSaveData();
                            }
                        }
                        break;
                    case CONSTANTS.LINK_TYPE.HOME_PAGE:
                        sessionStorage.isHomePageAlphaSort = "false";
                        sessionStorage.selectedTab = "HOME_PAGE";
                        pageNumber = 1;
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        IsAlphaSelected = false;
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "HOMEPAGE");
                        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
                        protocall.view.loadHomePage(true);
                        $('#page').css("background", "#eff2f3");
                        $('body').css("background", "#eff2f3");
                        $("div.submenu-sort div:nth-child(1)").text("Recent");
                        break;
                    case CONSTANTS.LINK_TYPE.CARRIERS_PAGE:
                        sessionStorage.selectedTab = "CARRIERS_PAGE";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        protocall.view.loadCarrierPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.AGENCY_PAGE:
                        sessionStorage.selectedTab = "AGENCY_PAGE";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        protocall.view.loadAgencyPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CARRIERAGENCY:
                        sessionStorage.selectedTab = "AGENCY_PAGE";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        protocall.view.loadCarrierOwnerAgenciesPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.AGENCIES_PAGE:
                        sessionStorage.selectedTab = "AGENCY_PAGE";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        protocall.view.loadAgenciesPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE:
                        sessionStorage.selectedTab = "CUSTOMERS_PAGE";
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = true;
                        protocall.view.loadCustomerPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.FEEDS:
                        sessionStorage.selectedTab = "HOME_PAGE";
                        sessionStorage.setItem("SUBMENU", "HOME_PAGE");
                        popUpContent.closePopUpContent();
                        HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED = false;
                        HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
                        HOMEPAGERESPONSE.FEEDSICONCLICKED = true;
                        try {
                            if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == undefined || sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "") {
                                sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "MY_ALERTS");
                            }
                        } catch (err) {
                            sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "MY_ALERTS");
                        }
                        var selectedTab = sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON");
                        if (selectedTab == "MY_ALERTS" || selectedTab == "HOMEPAGE") {
                            IsAlphaSelected = false;
                            protocall.view.loadMyAlertsFeeds($el, true);
                        } else if (selectedTab == "INCIDENTS") {
                            IsAlphaSelected = false;
                            protocall.view.loadIncidentsFeeds($el, true);
                        } else if (selectedTab == "POLICIES") {
                            IsAlphaSelected = false;
                            protocall.view.loadPoliciesFeeds($el, true);
                        } else if (selectedTab == "ARCHIVES") {
                            IsAlphaSelected = false;
                            protocall.view.loadArchiveFeeds($el, true);
                        } else if (selectedTab == "VIEW_ARCHIVES") {
                            IsAlphaSelected = false;
                            protocall.view.loadviewArchivedFeeds($el, true);
                        }
                        break;
                    case CONSTANTS.LINK_TYPE.SUBMENUS:
                        popUpContent.closePopUpContent();
                        sessionStorage.subMenuSelected = true;
                        protocall.view.loadSubMenus($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.CUSTOMERSSUBMENU:
                        popUpContent.closePopUpContent();
                        sessionStorage.subMenuSelected = true;
                        protocall.view.loadCustomersSubMenus($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.MYREPSSUBMENU:
                        popUpContent.closePopUpContent();
                        sessionStorage.subMenuSelected = true;
                        protocall.view.loadMyRepsSubMenus($el, true);
                        break;
                        //MYREPSSUBMENU
                    case CONSTANTS.LINK_TYPE.MY_ALERTS:
                        pageNumber = 2;
                        IsAlphaSelected = false;
                        popUpContent.closePopUpContent();
                        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "MY_ALERTS");
                        protocall.view.loadMyAlertsFeeds($el, true);
                        if (sessionStorage.isHomePageAlphaSort == "true") {
                            $("div.submenu-sort div:nth-child(1)").text("Alphabetical");
                        } else {
                            $("div.submenu-sort div:nth-child(1)").text("Recent");

                        }
                        setTimeout(function () {
                            popUpContent.closePopUpContent();
                        }, 300);
                        break;
                    case CONSTANTS.LINK_TYPE.INCIDENTS:
                        pageNumber = 2;
                        IsAlphaSelected = false;
                        popUpContent.closePopUpContent();
                        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "INCIDENTS");
                        protocall.view.loadIncidentsFeeds($el, true);
                        setTimeout(function () {
                            popUpContent.closePopUpContent();
                        }, 300);
                        $("div.submenu-sort div:nth-child(1)").text("Recent");
                        break;
                    case CONSTANTS.LINK_TYPE.POLICIES:
                        pageNumber = 2;
                        IsAlphaSelected = false;
                        popUpContent.closePopUpContent();
                        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "POLICIES");
                        protocall.view.loadPoliciesFeeds($el, true);
                        $("div.submenu-sort div:nth-child(1)").text("Recent");
                        setTimeout(function () {
                            popUpContent.closePopUpContent();
                        }, 300);
                        break;
                    case CONSTANTS.LINK_TYPE.ARCHIVES:
                        pageNumber = 2;
                        popUpContent.closePopUpContent();
                        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
                        //sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "ARCHIVES");

                        protocall.view.loadArchiveFeeds($el, true);
                        $("div.submenu-sort div:nth-child(1)").text("Recent");
                        setTimeout(function () {
                            popUpContent.closePopUpContent();
                        }, 300);
                        break;
                    case CONSTANTS.LINK_TYPE.VIEW_ARCHIVES:
                        pageNumber = 2;
                        IsAlphaSelected = false;
                        popUpContent.closePopUpContent();
                        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
                        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "VIEW_ARCHIVES");
                        protocall.view.loadviewArchivedFeeds($el, true);
                        $("div.submenu-sort div:nth-child(1)").text("Recent");
                        setTimeout(function () {
                            popUpContent.closePopUpContent();
                        }, 300);
                        break;
                    case CONSTANTS.LINK_TYPE.INVITE_REPS:
                        popUpContent.closePopUpContent();
                        protocall.view.loadInviteReps($el, true);
                        setTimeout(function () {
                            popUpContent.closePopUpContent();
                        }, 300);
                        break;
                    case CONSTANTS.LINK_TYPE.ASSIGN_TO_REPS:
                        popUpContent.closePopUpContent();
                        utils.server.assignToRep();
                        setTimeout(function () {
                            popUpContent.closePopUpContent();
                        }, 300);
                        break;
                    case CONSTANTS.LINK_TYPE.SORTBY:
                        popUpContent.closePopUpContent();
                        protocall.view.loadSortBy($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.SORTBYCARRIER:
                        popUpContent.closePopUpContent();
                        protocall.view.loadSortByCarrier($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.SORTBYCUSTOMER:
                        popUpContent.closePopUpContent();
                        protocall.view.loadSortByCustomer($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.SORTBYREPS:
                        popUpContent.closePopUpContent();
                        protocall.view.loadSortByReps($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.SORTBY_AGENCIES:
                        popUpContent.closePopUpContent();
                        protocall.view.loadSortByAgencies($el, true);
                        break;
                    case CONSTANTS.LINK_TYPE.PUSHMESSAGE:
                        popUpContent.closePopUpContent();
                        protocall.view.pushMessage($el, true);
                        setTimeout(function () {
                            popUpContent.closePopUpContent();
                        }, 300);
                        break;
                    case CONSTANTS.LINK_TYPE.PRIVACY:
                        popUpContent.closePopUpContent();
                        protocall.view.privacy($el, true);
                        setTimeout(function () {
                            popUpContent.closePopUpContent();
                        }, 300);
                        break;
                    case CONSTANTS.LINK_TYPE.AGENCYPICEDIT:
                        popUpContent.closePopUpContent();
                        protocall.view.overlayProfileEditPic(true);
                        setTimeout(function () {
                            popUpContent.closePopUpContent();
                        }, 300);
                        break;
                    case CONSTANTS.LINK_TYPE.MYPROFEDIT:
                        sessionStorage.isRepView = "false";
                        sessionStorage.IsCustomersTab = "false";
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        protocall.view.MyprofEdit();
                        break;
                    case CONSTANTS.LINK_TYPE.MYPROFEDITMYREPS:
                        popUpContent.closePopUpContent();
                        sessionStorage.isRepView = "true";
                        sessionStorage.IsCustomersTab = "false";
                        sessionStorage.IsCustomersTab = false;
                        protocall.view.MyprofEditCarrierOwner();
                        break;
                    case CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE:
                        popUpContent.closePopUpContent();
                        sessionStorage.IsCustomersTab = false;
                        protocall.view.loadCarrierRepsPage(true);
                        break;
                    case CONSTANTS.LINK_TYPE.ASSIGN_TO_CUSTOMERS:
                        popUpContent.closePopUpContent();
                        MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
                        protocall.view.assignToCustomers();
//                        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
//                            if (localStorage.LoginType == 'Admin') {
//                                protocall.view.assignToCustomers();
//                                setTimeout(function () {
//                                    popUpContent.closePopUpContent();
//                                }, 300);
//                            }
//                        }

                    default:
                        break;
                }
                break;
            case CONSTANTS.LINK_TYPE.FORGET_PASSWORD:
                sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                popUpContent.closePopUpContent();
                protocall.view.loadForgotPasswordOverlay($el, true);
                break;

            case CONSTANTS.LINK_TYPE.FORGOT_PASSWORD_SUBMIT:
                sessionStorage.FORGOTPASSWORD_MAILADDRESS = $("#forgotPasswordEmail").val();

                if (validateEmail($("#forgotPasswordEmail").val())) {

                    $(".forgotpassword-errortext").css("display", "none");
                    sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                    popUpContent.closePopUpContent();
                    protocall.closeOverlay();
                    if (sessionStorage.IDENDIFIER_NAME == "Agency") {
                        sessionStorage.IDENDIFIER_NAME = "Agency";
                    }
                    if (sessionStorage.IDENDIFIER_NAME == "Carriers") {
                        sessionStorage.IDENDIFIER_NAME = "Carriers";
                    }
                    if (localStorage.LoginType == "SuperAdmin") {
                        sessionStorage.IDENDIFIER_NAME = "SuperAdmin";
                        sessionStorage.IDENDIFIER = "28f57c5d-f62d-426a-9810-cda4e6af820b";
                    } else {
                        var dropDownValue = $("#id-usertype").text();
                        if (dropDownValue == "Brooker Insurance Agency") {
                            sessionStorage.IDENDIFIER_NAME = "Agency";
                            sessionStorage.IDENDIFIER = "49c03e36-f3f1-4132-8115-2f74c8a7bae3";
                        }
                    }
                    module_ServerCall.submitForgotPasswordData(sessionStorage.FORGOTPASSWORD_MAILADDRESS, sessionStorage.IDENDIFIER, sessionStorage.IDENDIFIER_NAME);

                } else {
                    $(".forgotpassword-errortext").css("display", "block");
                }


                break;

            case CONSTANTS.LINK_TYPE.MY_REP_PAGE:
                sessionStorage.isSelectAll = "false";
                sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                popUpContent.closePopUpContent();
                sessionStorage.IsCustomersTab = false;
                $('#page').css("background", "#eff2f3");
                $('body').css("background", "#eff2f3");
                protocall.view.loadMyRepsPage(true);
                break;
            case CONSTANTS.LINK_TYPE.MANAGE_AGENCY:
                sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                popUpContent.closePopUpContent();
                if (localStorage.LoginType == 'Admin') {
                    protocall.closeOverlay();
                    CONSTANTS.HASNEXTPAGE = false;
                    protocall.displaySpinner(true);
                    protocall.view.viewSettingsPage(true, $el);
                }
                break;
            case CONSTANTS.LINK_TYPE.SETTINGS_PAGE:
                sessionStorage.selectedTab = "SETTINGS";
                sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                popUpContent.closePopUpContent();
                sessionStorage.IsCustomersTab = false;
                CONSTANTS.HASNEXTPAGE = false;
                protocall.view.viewSettingsPage(true, $el);
                break;
            case CONSTANTS.LINK_TYPE.VIEW_CARRIER_REPS_DETAILS:
                sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                popUpContent.closePopUpContent();
                setTimeout(function () {
                    protocall.view.viewCarrierRepsDetails(true, $el);
                }, 300);
                break;
                /*  case CONSTANTS.LINK_TYPE.AGENCY_REP_DETAILS_VIEW:
                 sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                 popUpContent.closePopUpContent();
                 setTimeout(function () {
                 protocall.view.viewCarrierRepsDetails(true, $el);
                 }, 300);
                 break; */
            case CONSTANTS.LINK_TYPE.AGENCY_REP_DETAILS_VIEW:
                sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                popUpContent.closePopUpContent();
                setTimeout(function () {
                    protocall.view.viewAgencyRepsDetails(true, $el);
                }, 300);
                break;
            case CONSTANTS.LINK_TYPE.SEND_INVITE_REPS:
                popUpContent.closePopUpContent();
                protocall.view.sendInviteReps(e);
                break;
            case CONSTANTS.LINK_TYPE.SEND_INVITE_REPS_RESET_PWD:
                protocall.view.sendInviteReps(e);
                break;
            case CONSTANTS.LINK_TYPE.PROFILE_PAGE:
                popUpContent.closePopUpContent();
                sessionStorage.IsCustomersTab = false;
                protocall.view.viewProfileViewPage(true, $el);
                break;
            case CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW:
                popUpContent.closePopUpContent();
                protocall.view.viewCustomerViewFeed(true);
                break;
            case CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW:
                popUpContent.closePopUpContent();
                sessionStorage.selectedTab = "VIEW_CARRIER_FEEDVIEW";
                protocall.view.viewCarrierViewFeed(true, Carrieremail);
                break;
            case CONSTANTS.LINK_TYPE.MY_PROFILE:
                sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
                popUpContent.closePopUpContent();
                sessionStorage.IsCustomersTab = false;
                protocall.view.loadProfile($el);
                break;
            case CONSTANTS.LINK_TYPE.VIEW_FEED:
                sessionStorage.selectedTab = "viewFeed";
                sessionStorage.isNextPageAllowed = "false";
                $(".div-reloadpage").css("display", "none");
                clearInterval(homePageUpdate);
                popUpContent.closePopUpContent();
                PAGEREFRESH.ISPAGEREFRESHED = false;
                protocall.view.viewFeed(true, e);
                break;
            case CONSTANTS.LINK_TYPE.SHARE_TO_REP:
                // popUpContent.closePopUpContent();
                break;
            case CONSTANTS.LINK_TYPE.ASSIGN_TO_CUSTOMERS:
                popUpContent.closePopUpContent();
                protocall.view.assignToCustomers();
//                if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
//                    if (localStorage.LoginType == 'Admin') {
//                        protocall.view.assignToCustomers();
//                        setTimeout(function () {
//                            popUpContent.closePopUpContent();
//                        }, 300);
//                    }
//                }
                break;
            case CONSTANTS.LINK_TYPE.PROPERTY_POLICY:
                popUpContent.closePopUpContent();
                protocall.view.showPoliciesList();
                //protocall.view.properityPolicy(e);
                break;
            case CONSTANTS.LINK_TYPE.AGENCY_ADD_VENDOR_LOAD:
                protocall.view.addVendorDetails();
                break;
            case CONSTANTS.LINK_TYPE.HEALTH_POLICY:
                protocall.view.healthPolicy();
                break;
            case CONSTANTS.LINK_TYPE.VEHICLE_POLICY:
                protocall.view.vehiclePolicy();
                break;
            case CONSTANTS.LINK_TYPE.SENDAPPLINK:
                protocall.view.sendAppLink();
                break;
            case CONSTANTS.LINK_TYPE.PREFERRED_VENDOE_VIEW_LOAD:
                $(".vendor-detail-block").css("display", "none");
                HOMEPAGERESPONSE.ISPREFERREDVENDORCLICKED = true;
                HOMEPAGERESPONSE.ISAGENCYTABCLICKED = false;
                sessionStorage.selectedTab = "SETTINGS";
                protocall.view.LoadPreferrredvendorInfo();
                var height = ($(window).height() - ($('header').height() + $(".m-block").height() + $("footer").height())) - 20;
                break;
            case CONSTANTS.LINK_TYPE.AGENCY_VIEW_LOAD:
                HOMEPAGERESPONSE.ISPREFERREDVENDORCLICKED = false;
                HOMEPAGERESPONSE.ISAGENCYTABCLICKED = true;
                protocall.view.LoadAgencyInfo();
                break;
            case CONSTANTS.LINK_TYPE.AGENCY_EDIT_LOAD:
                protocall.view.LoadAgencyEdit();
                break;
            case CONSTANTS.LINK_TYPE.LOGIN_YES:
                protocall.view.LoginAuthenticateYes();
                break;
            case CONSTANTS.LINK_TYPE.LOGOUT_YES:
                protocall.view.LogoutAuthenticateYes();
                break;
            case CONSTANTS.LINK_TYPE.SETTINGS_SAVE:
                break;
            case CONSTANTS.LINK_TYPE.AGENCY_REMOVE_LOAD:


                if (localStorage.getItem("LOGIN_LABEL") == "Agency" || localStorage.LoginType == "SuperAdmin") {
                    var isedit = $("#id-preffervendoreditremovebar").text();
                    if (isedit.trim() == "Edit") {
                        $("#id-preffervendoreditremovebar").text("Remove");
                        $(".vendor-label").css("display", "block");
                    } else {
                        $("#id-preffervendoreditremovebar").text("Edit");
                        var index = 0;
                        var subIndex = 0;
                        var DELETELIST = [];
                        $('.checkbox').each(function () {

                            var str = this.checked ? "1" : "0";
                            if (str == "1") {

                                var vendorCheck = $(this).attr('id');
                                try {
                                    //if (vendorCheck.checked) {
                                    var i = vendorCheck.substring(vendorCheck.indexOf("_") + 1, vendorCheck.length);
                                    $("#item_" + i).remove();
                                    DELETELIST[subIndex] = $(this).val();
                                    subIndex++;
//                                } else {
//                                    if (localStorage.getItem("LOGIN_LABEL") != "Carriers") {
//                                        protocall.view.LoadAgencyRemove();
                                    //                                    }
                                    //                                }
                                } catch (e) {

                                }
                            }
                            index++;
                        });
                        if (subIndex == 0) {
                            subIndex = 0;
                            showAlertBox("Please select at least one vendor to remove.");
                        }
                        page = "deletevendorpage";
                        var dataq = {alertList: DELETELIST};
                        callback = utils.server.getCodeResponseAssignCustomers;
                        deepPath = "deletepreferredvendorservice";
                        utils.server.makeServerCall(page, dataq, callback, deepPath);
                    }
                } else {
                    var isedit = $("#id-base_preferred_edit_box-text").text();
                    if (isedit.trim() == "Edit") {
                        $("#id-base_preferred_edit_box-text").text("Remove");
                        $(".vendor-label").css("display", "block");
                    } else {


                        $("#id-base_preferred_edit_box-text").text("Edit");
                        var index = 0;
                        var subIndex = 0;
                        var DELETELIST = [];
                        $('.checkbox').each(function () {

                            var str = this.checked ? "1" : "0";
                            if (str == "1") {

                                var vendorCheck = $(this).attr('id');
                                try {
                                    //if (vendorCheck.checked) {
                                    var i = vendorCheck.substring(vendorCheck.indexOf("_") + 1, vendorCheck.length);
                                    $("#item_" + i).remove();
                                    DELETELIST[subIndex] = $(this).val();
                                    subIndex++;
//                                } else {
//                                    if (localStorage.getItem("LOGIN_LABEL") != "Carriers") {
//                                        protocall.view.LoadAgencyRemove();
                                    //                                    }
                                    //                                }
                                } catch (e) {

                                }
                            }
                            index++;
                        });
                        if (subIndex == 0) {
                            subIndex = 0;
                            showAlertBox("Please select atleat a name to delete..!");
                        }
                        page = "deletevendorpage";
                        var dataq = {alertList: DELETELIST};
                        callback = utils.server.getCodeResponseAssignCustomers;
                        deepPath = "deletepreferredvendorservice";
                        utils.server.makeServerCall(page, dataq, callback, deepPath);
                    }
                }

                break;
            case CONSTANTS.LINK_TYPE.AGENCY_ADD_VENDOR_LOAD:
                protocall.view.LoadAddVendor();
                break;
            case CONSTANTS.LINK_TYPE.CLOSE_OVERLAY:
                $("#id-edit-agency-pic").css("display", "none");
                IsalertShown = 0;
                popUpContent.closePopUpContent();
                protocall.closeOverlay();
                break;
            case CONSTANTS.LINK_TYPE.TEMPCLOSE_OVERLAY:
                popUpContent.closePopUpContent();
                protocall.closeOverlay();
                break;
            case CONSTANTS.LINK_TYPE.CLOSE_POPUP:
                popUpContent.closePopUpContent();
                protocall.closePopUp();
                break;
            case CONSTANTS.LINK_TYPE.EDIT_AGENCY_PIC:
                $("#id-edit-agency-pic").css("display", "none");
                protocall.view.editAgencyPic();
                break;
            case CONSTANTS.LINK_TYPE.MATCH_RELEASE_CLAIMS:
                protocall.view.matchReleaseClaimAlert(e);
                break;
            case CONSTANTS.LINK_TYPE.MATCH_CLAIMS:
                protocall.view.matchClaimAlert(e);
                break;
            case CONSTANTS.LINK_TYPE.PHOTS_OVERLAY_DISPLAY:
                protocall.view.staticPhotOverlayDisplay(e);
                break;
            case CONSTANTS.LINK_TYPE.AUDIO_OVERLAY:
                protocall.view.staticAudioOverlayDisplay(e);
                break;
            case CONSTANTS.LINK_TYPE.DOCUMENTSOVERLAY:
                protocall.view.staticDocumentOverlayDisplay(e);
                break;
            case CONSTANTS.LINK_TYPE.SELECTED_SEARCH_ITEM:
                sessionStorage.setItem("SUBMENU", "CUSTOMER_PAGE");
                PAGEREFRESH.ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW = true;
                protocall.view.showSearchResult(e);
                break;
            case CONSTANTS.LINK_TYPE.SORTBYRECENT:
                sessionStorage.isHomePageAlphaSort = "false";
                HOMEPAGERESPONSE.HOMEPAGEFEEDPAGENUMBER = 1;
                protocall.view.loadSortByRecent($el, true);
                break;
            case CONSTANTS.LINK_TYPE.SUPERADMIN_AGENCIES_RECENTSORT:
                $("div.submenu-sort div:nth-child(1)").text("Recent");
                popUpContent.closePopUpContent();
                protocall.view.loadAgenciesPage(true);
                break;
            case CONSTANTS.LINK_TYPE.SUPERADMIN_AGENCIES_ALPHASORT:
                protocall.view.loadAgenciesSortByAlphabetical($el, true);
                break;
            case CONSTANTS.LINK_TYPE.SORTBYALPHABETICAL:
                sessionStorage.isHomePageAlphaSort = "true";
                HOMEPAGERESPONSE.HOMEPAGEFEEDPAGENUMBER = 1;
                protocall.view.loadSortByAlphabetical($el, true);
                break;
            case CONSTANTS.LINK_TYPE.CARRIERSORTBYRECENT:
                protocall.view.loadSortByRecentCarrier($el, true);
                break;
            case CONSTANTS.LINK_TYPE.CARRIERSORTBYALPHABETICAL:
                protocall.view.loadSortByAlphabeticalCarrier($el, true);
                break;
            case CONSTANTS.LINK_TYPE.CUSTOMERSORTBYRECENT:
                sessionStorage.customersort = "true";
                CUSTOMER.CUSTOMERPAGINATIONUMBER = 0;
                protocall.view.loadSortByRecentCustomers($el, true);
                break;
            case CONSTANTS.LINK_TYPE.CUSTOMERSORTBYALPHABETICAL:
                protocall.view.loadSortByAlphabeticalCustomer($el, true);
                break;
            case CONSTANTS.LINK_TYPE.REPSSORTBYRECENT:
                protocall.view.loadSortByRecentReps($el, true);
                break;
            case CONSTANTS.LINK_TYPE.REPSSORTBYALPHABETICAL:
                protocall.view.loadSortByAlphabeticalReps($el, true);
                break;
            case CONSTANTS.LINK_TYPE.VIEWARCHIVECHECKBOX:
                protocall.view.archiveFeeds($el, true);
                break;
            case CONSTANTS.LINK_TYPE.PRINTPAGE:
                protocall.view.printOverlayPage($el, true);
                break;
            case CONSTANTS.LINK_TYPE.SIGNUP:
                protocall.view.loadSignupPage(true);
                break;
            case CONSTANTS.LINK_TYPE.COMPLETESIGNUP:
                protocall.view.finishSignUp(true);
                break;
            case CONSTANTS.LINK_TYPE.LOGIN_PAGE:
                protocall.view.loadLoginPage();
                break;
            case CONSTANTS.LINK_TYPE.LOGIN:
                protocall.view.loadLoginPage(true);
                break;
            case CONSTANTS.LINK_TYPE.RESETPASSWORD:
                protocall.view.loadResetPassAlertBox();
                break;
            case CONSTANTS.LINK_TYPE.OVERLAY_RESETPASSALERTBOX:
                protocall.view.loadResetPassMailAlertBox();
                break;
            case CONSTANTS.LINK_TYPE.EDITPASSWORDYES:
                protocall.closeOverlay();
                protocall.view.loadResetPasswordPage(true);
                break;
            case CONSTANTS.LINK_TYPE.EDITPASSWORDNO:
                protocall.closeOverlay();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_ASSIGNCUSTOMERS:
                utils.server.submitAssignCustomersData();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_SHAREWITHREP:
                utils.server.submitShareWithRepsData();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_ASSIGNTOREPS:
                utils.server.submitAssignToRepsData();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_ASSIGNTOCUSTOMERS:
                utils.server.submitAssignToCustomers();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_SENDAPPLINK:
                utils.server.submitSendAppLinkData();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_PRIVACYSEND:
                utils.server.submitPrivacyData();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_ADDVENDORSEND:
                utils.server.submitAddVendorDetails();
                break;
            case CONSTANTS.LINK_TYPE.BUTTON_PUSHMESSAGESEND:
                utils.server.submitPushMessage();
                break;
            case CONSTANTS.LINK_TYPE.EDITCARRIEROWNER_AGENCYDETAILS:
                protocall.view.loadResetPasswordPage(true);
                break;
            case CONSTANTS.LINK_TYPE.FILTERBOX1:
                popUpContent.closePopUpContent();
                protocall.view.loadSortBy($el, true);
                break;
            case CONSTANTS.LINK_TYPE.ADDMORE:
                if (localStorage.getItem("SendInviteBoxCount") == undefined) {
                    localStorage.setItem("SendInviteBoxCount", "1");
                }
                var countIndex = localStorage.getItem("SendInviteBoxCount");
                var addContent = "<div id=\"delete_item" + countIndex + "\" class=\"checkbox-box\"> <div class=\"checkbox-box-t1\"> <input type=\"text\" class=\"sendinvite_firstname\" value=\"\" id=\"txt_sendinvite_firstname" + countIndex + "\" placeholder=\"FirstName\"></div><div class=\"checkbox-box-t1\"> <input type=\"text\" class=\"sendinvite_LastName\" value=\"\" id=\"txt_sendinvite_LastName" + countIndex + "\" placeholder=\"LastName\"></div><div class=\"checkbox-box-t1\"> <input type=\"text\" class=\"sendinvite_EmailId\" value=\"\" id=\"txt_sendinvite_EmailId" + countIndex + "\" placeholder=\"EmailId\"><div id=" + countIndex + " class=\"sprite-im rep-icon rep-icon-pos deleteitem\" style=\"float: right;  position: relative;  /* top: 52%; */  right: -9%;  margin-top: -26px;\">&nbsp;</div></div></div></div>";
                countIndex++;
                localStorage.setItem("SendInviteBoxCount", countIndex);
                $(".checkbox-form").append(addContent);
                break;
            case CONSTANTS.LINK_TYPE.AGENCYPICEDIT:
                protocall.view.overlayProfileEditPic(true);
                break;
            case CONSTANTS.LINK_TYPE.HOME_PAGE:
                sessionStorage.isHomePageAlphaSort = "false";
                protocall.view.loadHomePage(true);
                // var height = ($(window).height() - ($('header').height() + $(".m-block").height() + $("footer").height())) - 20;
                // $(".container").height(height + "px");
                break;
            default:
                sessionStorage.isNextPageAllowed = "true";
                break;
        }

    },
    handleClickForPhotosOverlay: function (e) {
        console.log("current target", $(e.currentTarget).attr("data-type"));
        var dataType = $(e.currentTarget).attr("data-type");
        var currentTarget = $(e.currentTarget);
        switch (dataType) {
            case CONSTANTS.LINK_TYPE.THUMB_NAIL:
                protocall.view.displayOrignalImage(currentTarget);
                break;
            case CONSTANTS.LINK_TYPE.PREVIOUS:
                protocall.view.displayPreviousImage(currentTarget);
                break;
            case CONSTANTS.LINK_TYPE.NEXT:
                protocall.view.displayNextImage(currentTarget);
                break;
            default:
                break;
        }
    },
    handleClickForDocsOverlay: function (e) {
        console.log("current target", $(e.currentTarget).attr("data-type"));
        var currentTarget = $(e.currentTarget);
        var dataType = $(e.currentTarget).attr("data-type");
        switch (dataType) {
            case CONSTANTS.LINK_TYPE.THUMB_NAIL:
                protocall.view.displayOrignalDoc(currentTarget);
                break;
            default:
                break;
        }
    },
    handleClickForAudioOverlay: function (e) {
        var $el = $(e.currentTarget);
        console.log("valuers" + $el.data("type"));
        var type = $el.data("type") ? $el.data("type") : null;
        console.log("data type is" + type);
        switch (type) {
            case CONSTANTS.LINK_TYPE.AUDIO_PLAY:
                protocall.view.playAudioFile($el);
                break;
            default:
                break;
        }
    },
    handleClickForAudioThumbNail: function (e) {
        var dataType = $(e.currentTarget).attr("data-type");
        var currentTarget = $(e.currentTarget);
        switch (dataType) {
            case CONSTANTS.LINK_TYPE.THUMB_NAIL:
                protocall.view.displayOrignalAudio(currentTarget);
                break;
            case CONSTANTS.LINK_TYPE.PREVIOUS_AUDIO:
                protocall.view.displayPreviousAudio(currentTarget);
                break;
            case CONSTANTS.LINK_TYPE.NEXT_AUDIO:
                protocall.view.displayNextAudio(currentTarget);
                break;
            default:
                break;
        }
    },
};
protocall.view = {
	displaySelectedList : function(){
		var searchResultUsers = MYREPS.ASSIGNCUSTOMERRESPONSE;
		console.log("searchResultUsers",searchResultUsers.length);
		var firstName, lastname, customerName, city, state, location, customerEmailId = "",tempHtml = "";
		var finalHtml = "<form>";
		$.each(searchResultUsers,function(index,searchResult){
			console.log(searchResult);
			try {
				firstName = searchResult.firstName;
			} catch (e) {
				firstName = "";
			}
			try {
				lastname = searchResult.lastName;
			} catch (e) {
				lastname = "";
			}
			customerName = firstName + " " + lastname;
			try {
				city = searchResult.residentialCity;
			} catch (e) {
				city = "";
			}
			try {
				state = searchResult.residentialState;
			} catch (e) {
				state = "";
			}
			location = city + ", " + state;
			try {
				customerEmailId = searchResult.userId;
			} catch (e) {
				customerEmailId = "";
			}
			tempHtml += "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox' value=" + customerEmailId + " id='name" + index + "' name='" + lastname.charAt(0).toUpperCase() + "' class='checkbox' checked='true'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' >" + location + "</div> </div> </label> </div>";
		});
		finalHtml += tempHtml;
		if (finalHtml != "<form>") {
			$(".rep-content-blk form").html(finalHtml);
			//var container = $('.rep-content-blk');
			//var scrollHeighValue = container.scrollTop() / 1.5;
			//container.scrollTop(scrollHeighValue);
			//$(".rep-content-blk").animate({scrollTop: scrollHeighValue}, 500);
		} else {
			finalHtml = "";
			$(".rep-content-blk").html(finalHtml);
		}
		if($("#name-selectall").prop("checked") == false){
			$('input:checkbox').removeAttr('checked');
		}
	},
    assignCustomerResponse: function (response) {
        console.log("assignCustomerResponse>>>>>>>>>>>>", response);
        var finalHtml = "<form>";
        if (!response) {
            console.log("false response");
        } else {
            if (response.resultMap.TypeCode == "4011") {
                if (response.resultMap.MatchedDocumentList != undefined) {
                    MYREPS.ASSIGNCUSTOMERRESPONSE = response.resultMap.MatchedDocumentList;
                    MYREPS.SEARCHFORCUSTOMER = true;
                    /* if(MYREPS.ASSIGNCUSTOMERRESPONSE == []){
                     MYREPS.ASSIGNCUSTOMERRESPONSE = MYREPS.ASSIGNCUSTOMERFIRSTPAGE;
                     } */
                    $.each(MYREPS.ASSIGNCUSTOMERRESPONSE, function (index, customerValue) {
                        var firstName = customerValue.firstName;
                        var lastName = customerValue.lastName;
                        //if(firstName.toUpperCase().indexOf(searchText) > -1 || lastName.toUpperCase().indexOf(searchText) > -1){
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
                } else {
                    MYREPS.ASSIGNCUSTOMERRESPONSE = [];
                }
            } else {
                console.log("error response for assign customer overlay");
            }
            if (finalHtml == "<form>") {
                var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
                finalHtml = finalHtml + tempHtml;
            }
            $(".rep-content-blk").html(finalHtml + "</form>");
            $(".rep-content-blk").animate({scrollTop: 0}, 500);
        }
        /* var finalHtml = "<form>";
         MYREPS.SEARCHFORCUSTOMER = true;
         $.each(MYREPS.ASSIGNCUSTOMERRESPONSE,function(index,customerValue){
         var firstName = customerValue.firstName;
         var lastName = customerValue.lastName;
         //if(firstName.toUpperCase().indexOf(searchText) > -1 || lastName.toUpperCase().indexOf(searchText) > -1){
         var customerName = customerValue.firstName+" "+customerValue.lastName;
         customerName = customerName.replace("undefined", " ");
         var customerCity = customerValue.residentialCity;
         console.log("customerCity>>>>>>>>>");
         var customerState = customerValue.residentialState;
         var customerEmailId = customerValue.userId;
         var location = customerCity+", "+customerState;
         location = location.replace("undefined","");
         var tempHtml = "<div class='rep-grp-blk opensans-regular border-bot text-color-overlay p-relative'> <input type='checkbox'  value=" + customerEmailId + "  id='name" + index + "' name='" + customerName.charAt(0).toUpperCase() + "' class='checkbox'> <label for='name" + index + "' class=' rep-label'> <div class='lbl-in-block p-relative'> <div class='f-sz-14 text-color-overlay left rep-name'>" + customerName + "</div> <div class='t-caps f-sz-13 right f-italic t-right location-color rep-location' style=''>" + location + "</div> </div> </label> </div>";
         finalHtml = finalHtml + tempHtml;
         tempHtml = "";
         //}
         });
         
         if (finalHtml == "<form>") {
         var tempHtml = "<div class='rep-grp-blk opensans-regular t-center border-bot text-color-overlay p-relative'> No Records Found </div>";
         finalHtml = finalHtml + tempHtml;
         }
         
         $(".rep-content-blk").html(finalHtml + "</form>");
         $(".rep-content-blk").animate({ scrollTop: 0 }, 500); */
    },
    finishSignUp: function (isClickEvent) {
        var sfirstName = $("#firstNameSignup").val();
        var slastName = $("#lastNameSignup").val();
        var userEmailId = $("#emailIdSignup").val();
        var passwordValue = $("#passwordSignUp").val();
        var md5EncryptedPasswordForSignup = CryptoJS.MD5(passwordValue).toString();
        var retypePassword = $("#reTypePasswordSignUp").val();
        var deepPath = "";
        var Linkurl = (window.location.href).substring((window.location.href).indexOf("#"), (window.location.href).indexOf("?"));
        // var Linkurl = ("http://16-dot-protocall-dev.appspot.com/#signup-1?linkExpiration=210151").substring(("http://16-dot-protocall-dev.appspot.com/#signup-1?linkExpiration=210151").indexOf("#"), ("http://16-dot-protocall-dev.appspot.com/#signup-1?linkExpiration=210151").indexOf("?"));
        var type = Linkurl.substring(Linkurl.indexOf("-") + 1, Linkurl.length);
        var linkExpirationID = protocall.grabHashPageForInviteRep();
        if (passwordValue != "" && !passwordValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{10,128}$/)) {
            var error = "Your password is Invalid, please verify once";
            protocall.displaySpinner(false);
            showAlertBox(error);
        } else if (passwordValue != "" && retypePassword != "") {
            if (passwordValue == retypePassword) {
                $('.signup-error').html("");
                //1=carrierRep
                if (type == "1") {
                    deepPath = "carrierrepresentativeregistraion";
                    var page = "signup";
                    var data = {linkExpiration: linkExpirationID, carrierRepresentativeId: {email: userEmailId}, firstName: sfirstName, lastName: slastName, password: md5EncryptedPasswordForSignup};
                    callback = protocall.view.signUpRegistration;
                    utils.server.makeServerCall(page, data, callback, deepPath);
                } else {
                    deepPath = "agencyrepresentativeregistration";
                    var page = "signup";
                    var data = {linkExpiration: linkExpirationID, agencyRepresentativeId: {email: userEmailId}, firstName: sfirstName, lastName: slastName, password: md5EncryptedPasswordForSignup};
                    callback = protocall.view.signUpRegistration;
                    utils.server.makeServerCall(page, data, callback, deepPath);
                }

            } else {
                var error = "Your password is mismatched, please verify once";
                protocall.displaySpinner(false);
                showAlertBox(error);
            }
        } else {
            var error = "Please Provide all the details";
            protocall.displaySpinner(false);
            showAlertBox(error);
        }
    },
    signUpRegistration: function (data, page) {
        console.log("data >>>>>>>>>>>>> signUpRegistration", data);
        protocall.displaySpinner(true);
        if (data.resultMap.TypeCode == "4112") {
            var error = "Provide the different phone number, which already present";
            protocall.displaySpinner(false);
            showAlertBox(error);
        } else if (data.resultMap.TypeCode == "4113") {
            var error = "Your Invitation link has been expired. Please contact your admin";
            protocall.displaySpinner(false);
            showAlertBox(error);
        } else {
            HOMEPAGERESPONSE.SIGNUPREGISTRATIONDONE = true;
            protocall.view.loadLoginPage();
        }
    },
    loadResetPassword: function () {
        var email = sessionStorage.userEmailId;
        var emailList1 = [email];
        var deepPath = "sendinvitation";
        var link = "http://gridframe.net/demo/protocall/#signup";
        var resetPassword = true;
        var callback = protocall.view.gotLoginReponse;
        var content = sessionStorage.userFirstName + ' is inviting you to join in protocall.Please use the below link to signup in protocall and the link will expire in 24 hours.';
        var data = {"emailList": emailList1, "link": link, "resetPassword": resetPassword, "text": content};
        utils.server.makeServerCall("resetpage", data, callback, deepPath);
    },
    superAdminPage: function (data, page) {
        var feedHTML = "";
        if (data.resultMap.AlertMessage !== "undefined" && data.resultMap.TypeCode == "4011") {
            if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW == true) {
                HOMEPAGERESPONSE.HOMEPAGEDATA = [];
                HOMEPAGERESPONSE.HOMEPAGEDATA = data.resultMap.homeTab;
            } else {
                HOMEPAGERESPONSE.SUPERADMINCARRIERDETAILS = [];
                HOMEPAGERESPONSE.SUPERADMINCUSTOMERS = [];
                HOMEPAGERESPONSE.SUPERADMINAGENCIES = [];
                HOMEPAGERESPONSE.HOMEPAGEDATA = [];
                HOMEPAGERESPONSE.CUSTOMERDATA = [];
                HOMEPAGERESPONSE.SUPERADMINCARRIERDETAILS = data.resultMap.carrierTab;
                HOMEPAGERESPONSE.SUPERADMINCUSTOMERS = data.resultMap.customerTab;
                HOMEPAGERESPONSE.SUPERADMINAGENCIES = data.resultMap.agencyTab;
                HOMEPAGERESPONSE.HOMEPAGEDATA = data.resultMap.homeTab;
                RESPONSE.customers_data[0] = data.resultMap.customerTab;
                HOMEPAGERESPONSE.CUSTOMERDATA = data.resultMap.customerTab;
            }
            HOMEPAGERESPONSE.RECURRINGALERTDFEEDS = [];
            /* if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
             var data = {agencyId: sessionStorage.ownerId};
             var path = utils.server.getServerPath("agencydashboarddesign");
             var request = path(data).execute(function (resp) {
             if (resp.error != undefined) {
             t.server.handleError(resp);
             } else {
             RESPONSE.customers_data[0] = resp.resultMap.userTab;
             RESPONSE.users[0] = data.resultMap.carrierTab;
             }
             });
             } */
            sessionStorage.setItem("SUBMENU", "HOME_PAGE");
            var feedHTML = "";
            for (var c = 0; c < HOMEPAGERESPONSE.HOMEPAGEDATA.length; c++) {
                var cus = HOMEPAGERESPONSE.HOMEPAGEDATA[c];
                var name, serviceType, preferredVendorId = "";
                if (cus.name == undefined) {
                    name = "";
                } else {
                    name = cus.name;
                }
                if (cus.serviceType == undefined) {
                    serviceType = "";
                } else {
                    serviceType = cus.serviceType;
                }
                if (cus.preferredVendorId == undefined) {
                    preferredVendorId = "";
                } else {
                    preferredVendorId = cus.preferredVendorId;
                }
                feedHTML += " <div class=\"parent-content-holder1\" style=\"  height: auto;  width: 24%;  background: white;  float: left;  margin: 5px;\"> <div class=\"topview p-relative\">  "
                        + "<div class=\"topview-rightcontent1\" style=\"width: 100%; margin-left:5px; height: 70px;  float: left;  margin-top: 18px;padding-left:20px;line-height:20px;overflow: hidden;\"> <div class=\"carrierid\" style=\"display:none;\">" + cus.agencyId + "</div>"
                        + "<div class=\"topview-rightcontentcarrier-name t-caps \" style=\"float:left;margin-right:5px;margin-bottom: 5px;\">" + name + "</div>"
                        + "<div class=\"topview-rightcontentcarrier-location t-caps \" style=\"clear:both;margin-bottom: 5px;\">" + serviceType + "</div> <div class=\"topview-rightcontentcarrier-email\">#" + preferredVendorId + "</div> </div> <input type=\"checkbox\" class=\"getSelectedCustomers  p-absolute snap\" data-type=\"customersCheckBox\" value=" + "cusEmail" + " id=" + "cusEmail" + " > <label for=" + "cusEmail" + " class=\"customer-feed-label\" style=\"display:none;\"></label> </div> <div class=\"downview p-relative\">"
                        + "<div id=" + preferredVendorId + "  value=" + preferredVendorId + " class=\"carrier-view superadminHome p-relative bg-color-green t-caps t-center opensans-light f-color-w snap\" data-type=\"superAdminHomeFeedView\">view</div> </div> </div>";
            }
            header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            content = '<div class="container"><div class="content-holder">' + feedHTML + '</div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            totalHtml = header + content + footer;
            $("#page").empty();
            $("#page").append(totalHtml);
            $('.setProfilePic').fillBox();
            protocall.events.GlobalContainerScrollevent();
            protocall.displaySpinner(false);
            protocall.events.mouseOverCheckbox();
            protocall.displaySpinner(false);
            protocall.events.containerScrollEvent();
            protocall.events.GlobalContainerScrollevent();
            protocall.view.subMenuSelectedTab();
            $(".content-holder").find(".spinner1").removeClass("spinner1");
            $(".content-holder").find(".bottomSpinner").removeClass("bottomSpinner");
            $(".content-holder").find("#scrollingDiv").empty();
            $(".content-holder").css("opacity", "1");
            $('#id-agencyprofilelogo').attr('src', sessionStorage.agencyLogo);
            $('body').css("background", "#eff2f3");
            $('#page').css("overflow", "hidden");
            $('#page').css("background", "#eff2f3");
            $("#page").css({
                'opacity': '1',
                'padding': '5px',
                'height': '100%',
                'overflow': 'hidden',
                'background': 'rgb(239, 242, 243)'
            });
            localStorage.pagestatus = "true";
            $(".container").css("overflow-y", "auto");
        } else {
            feedHTML = data.resultMap.AlertMessage;
        }
    },
    viewCarrierRepsDetails: function (isClickEvent, currentTarget) {
        sessionStorage.isRepView = "true";
        sessionStorage.selectedTab = "AGENCY_REP_DETAILS_VIEW";
        sessionStorage.setItem("SUBMENU", "VIEW_CARIER_REP_PROFILE_PAGE");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CARIER_REP_PROFILE_PAGE);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE, CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CARIER_REP_PROFILE_PAGE, CONSTANTS.LINK_TYPE.VIEW_CARIER_REP_PROFILE_PAGE, "");
        }
        protocall.myProfile.loadMyCarrierRepProfile(currentTarget);
        protocall.displaySpinner(false);
    },
    viewAgencyRepsDetails: function (isClickEvent, currentTarget) {
        protocall.displaySpinner(true);
        sessionStorage.isRepView = "true";
        sessionStorage.selectedTab = "AGENCY_REP_DETAILS_VIEW";
        sessionStorage.setItem("SUBMENU", "AGENCY_REP_DETAILS_VIEW");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.AGENCY_REP_DETAILS_VIEW + "/" + CONSTANTS.LINK_TYPE.AGENCY_REP_DETAILS_VIEW);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCY_REP_DETAILS_VIEW);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.AGENCY_REP_DETAILS_VIEW, CONSTANTS.LINK_TYPE.AGENCY_REP_DETAILS_VIEW + "/" + CONSTANTS.LINK_TYPE.VIEW_CARIER_REP_PROFILE_PAGE, CONSTANTS.LINK_TYPE.VIEW_CARIER_REP_PROFILE_PAGE, "");
        }
        protocall.myProfile.loadMyAgencyRepProfile(currentTarget);
        protocall.displaySpinner(false);
    },
    loadSignupPage: function (isClickEvent) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.SIGNUP);
        protocall.home.initSignUpPage();
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.SIGNUP, CONSTANTS.LINK_TYPE.SIGNUP, CONSTANTS.LINK_TYPE.SIGNUP, "");
        }
        protocall.displaySpinner(false);
    },
    loadResetPasswordPage: function (isClickEvent) {
        console.log("Load Reset Password Page");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.RESETPASSWORD);
        protocall.home.initResetPasswordPage();
        //showAlertBox("Your request has been send to your registered mail id. Please check the mail id and reset your password");
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.RESETPASSWORD);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.RESETPASSWORD, CONSTANTS.LINK_TYPE.RESETPASSWORD, CONSTANTS.LINK_TYPE.RESETPASSWORD, "");
        }
        protocall.displaySpinner(false);
    },
    handleDownarrow: function () {
        var searchItemsLength = $("#searchResultUL li").length, keyboardEvent = "downArrow";
        var selectedListItem = $("#searchResultUL").find("li.searchItemClass");
        var selectedElementIndex = $("#searchResultUL li").index(selectedListItem);
        if (HOMEPAGERESPONSE.DOWNARROWPRESSEDCOUNT > 1) {
            protocall.view.showNextDownArrowResult(selectedListItem, selectedElementIndex, searchItemsLength, keyboardEvent);
        } else {
            $("#searchResultUL li").removeClass("searchItemClass");
            $("#searchResultUL li:first-child").addClass("searchItemClass");
        }
    },
    handleUpArrowFun: function () {
        var searchItemsLength = $("#searchResultUL li").length, keyboardEvent = "upArrow";
        var selectedListItem = $("#searchResultUL").find("li.searchItemClass");
        var selectedElementIndex = $("#searchResultUL li").index(selectedListItem);
        if (HOMEPAGERESPONSE.UPARROWPRESSEDCOUNT > 1) {
            protocall.view.showNextUpArrowResult(selectedListItem, selectedElementIndex, searchItemsLength, keyboardEvent);
        } else {
            $("#searchResultUL li").removeClass("searchItemClass");
            $("#searchResultUL li:last-child").addClass("searchItemClass");
            var container = $('#searchBarDiv'), scrollTo = $("#searchResultUL li:last-child");
            container.scrollTop(scrollTo.offset().top - container.offset().top + container.scrollTop());
        }
    },
    handleEnterFunction: function () {
        var currentTarget = $("#searchResultUL").find("li.searchItemClass");
        var userEmail = currentTarget.find("p.searchItemEmail").text();
        var userRole = currentTarget.find("p.searchItemRole").text();
        var userName = currentTarget.find("p.searchItemUserName").text();
        protocall.view.showUserDetailsOnEnter(userEmail, userRole, userName);
    },
    showUserDetailsOnEnter: function (userEmail, userRole, userName) {
        $(".search-ip").val(userName, +'&nbsp' + userRole);
        $("#searchBarDiv").hide();
        var data = {"emailId": userEmail, "role": userRole}, deepPath = "detailsofretrieveduserfromglobalsearch", page = "home",
                callback = protocall.view.showUserDetails;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    },
    showNextDownArrowResult: function (listItemValue, listItemIndex, searchListItemsLength, keyboardEvent) {
        $("#searchResultUL li").removeClass("searchItemClass");
        var nextListItemIndexValue = listItemIndex + 1;
        ++nextListItemIndexValue;
        var nextDownArrowListItem = $("#searchResultUL li:nth-child(" + nextListItemIndexValue + ")").addClass("searchItemClass");
        protocall.view.foucsingSelectedSearchItem($("#searchResultUL li:nth-child(" + nextListItemIndexValue + ")"), nextListItemIndexValue, searchListItemsLength, keyboardEvent);
    },
    showNextUpArrowResult: function (listItemValue, listItemIndex, searchListItemsLength, keyboardEvent) {
        $("#searchResultUL li").removeClass("searchItemClass");
        var nextListItemIndexValue = listItemIndex - 1;
        ++nextListItemIndexValue;
        var nextDownArrowListItem = $("#searchResultUL li:nth-child(" + nextListItemIndexValue + ")").addClass("searchItemClass");
        protocall.view.foucsingSelectedSearchItem($("#searchResultUL li:nth-child(" + nextListItemIndexValue + ")"), nextListItemIndexValue, searchListItemsLength, keyboardEvent);
    },
    foucsingSelectedSearchItem: function (listItem, indexValue, searchListItemsLength, keyboardEvent) {
        if (keyboardEvent == "upArrow") {
            if (indexValue <= 0) {
                $("#searchResultUL li").removeClass("searchItemClass");
                $("#searchResultUL li:last-child").addClass("searchItemClass");
                var container = $('#searchBarDiv'), scrollTo = $("#searchResultUL li:last-child");
                container.scrollTop(scrollTo.offset().top - container.offset().top + container.scrollTop());
            } else {
                var container = $('#searchBarDiv'), scrollTo = $(listItem);
                container.scrollTop(scrollTo.offset().top - container.offset().top + container.scrollTop());
            }
        } else {
            if (indexValue >= searchListItemsLength + 1) {
                $("#searchResultUL li").removeClass("searchItemClass");
                $("#searchResultUL li:first-child").addClass("searchItemClass");
                var container = $('#searchBarDiv');
                container.scrollTop(0);
            } else {
                var container = $('#searchBarDiv'), scrollTo = $(listItem);
                container.scrollTop(scrollTo.offset().top - container.offset().top + container.scrollTop());
            }
        }

    },
    overlayProfileEditPic: function (isClickEvent) {
        var name = $(".txt-agency-name").val();
        var emailId = $(".txt-agency-emailid").val();
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            var page = "myagencyoverlay";
            var data = {agencyName: name, emailId: emailId, agencyId: sessionStorage.ownerId};
            var deepPath = "editagency";
        } else {
            var page = "mycarrieroverlay";
            var data = {carrierName: name, emailId: emailId, carrierId: sessionStorage.ownerId};
            var deepPath = "editcarrier";
        }
        var callback = utils.server.gotagencyLogoEditresponse;
        utils.server.makeServerCall(page, data, callback, deepPath);
        protocall.view.agencyImageUpload(sessionStorage.ownerId);
        overlay.closeOverlay();
    },
    agencyImageUpload: function (agencyID) {
        var formdata = new FormData();
        var imageContentType;
        console.log("$('#inputfile1')[0]", $('#inputfile1')[0].files);
        if ($('#inputfile1')[0].files.length > 0) {
            var file = $('#inputfile1')[0].files[0];
            formdata.append("Logo", file);
            imageContentType = file.type;
        }
        var callback = utils.server.profilePicResponse;
        var isFormData = true;
        var qs = agencyID;
        var pagespinner = true;
        var typeOfImageValue;
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            typeOfImageValue = "agencyLogo";
        } else {
            typeOfImageValue = "carrierLogo";
        }
        HOMEPAGERESPONSE.PROFILEPICUPDATECLICKED = false;
        if ((HOMEPAGERESPONSE.ISEDITIMAGEICONCLICKED || HOMEPAGERESPONSE.ISEDITIMAGEICONCLICKEDFOROVERLAY) && (imageContentType == "image/jpeg" || imageContentType == "image/png")) {
            utils.server.imagesToServer(formdata, callback, isFormData, qs, pagespinner, typeOfImageValue, imageContentType);
        } else {
            return false;
        }
    },
    MyprofEdit: function (isClickEvent) {
        var mytxtval = $.trim($('.submenu-title').text()), email = "";
        if (mytxtval == 'edit' || mytxtval == 'Edit') {
            $(".agenypic-info").css("min-height", "140px");
            $(".agenyleft-image").css("height", "181px");
            $(".agenyleft-profile").css("margin-top", "-9%");
            var firstname = $("#firstnameview").text();
            var lastname = $("#lastnameview").text();
            var phone = $("#phoneview").text();
            var cityName = $("#cityview").text();
            var stateName = $("#stateview").text();
            if (localStorage.LoginType == "SuperAdmin") {
                email = sessionStorage.superAdminEmailId;
            } else {
                email = sessionStorage.userEmailId;
            }
            $('.submenu-title').empty();
            $('.submenu-title').append("Save");
            $("#id-changeimg").css("display", "block");
            $(".profile-result-cls").css("display", "none");
            $(".agencyprofinput").css("display", "block");
            $('#firstnamenew').val(firstname);
            $('#lastnamenew').val(lastname);
            $('#phonenew').val(phone);
            $('#emailnew').val(email);
            $('#citynew').val(cityName);
            $("#statenew > [value=" + stateName + "]").attr("selected", "true");
        } else {
            $(".agenyleft-profile").css("margin-top", "0%");
            $(".agenypic-info").css("min-height", "154px");
            $(".agenyleft-image").css("height", "174px");
            var firstname = $("#firstnamenew").val();
            var lastname = $("#lastnamenew").val();
            var phone = $("#phonenew").val();
            var email = $("#emailnew").val();
            var cityName = $("#citynew").val();
            var stateName = $("#statenew").val();
            $('.submenu-title').val("Edit");
            $('.submenu-title').empty();
            $('.submenu-title').append("Edit");
            $(".profile-result-cls").css("display", "block");
            $(".agencyprofinput").css("display", "none");
            $("#id-changeimg").css("display", "none");
            $('#firstnameview').html(firstname);
            $('#lastnameview').html(lastname);
            $('#phoneview').html(phone);
            $('#emailview').html(email);
            $('#cityview').html(cityName);
            $('#stateview').html(stateName);
            sessionStorage.tempUserName = firstname;
            var page = "myprofile";
            var deepPath = "";
            if (lastname == "") {
                lastname = "   ";
            } else {
                lastname = lastname.trim();
            }
            var callback = utils.server.gotprofileEditresponse;
            if (sessionStorage.loginType == "AgencyRepresentative") {
                deepPath = "editagencyrepresentative";
                var data = {firstName: firstname.trim(), lastName: lastname.trim(), agencyRepresentativeId: {email: email.trim()}, phone: phone.trim(), residentialCity: cityName, residentialState: stateName};
            } else if (sessionStorage.loginType == "CarrierRepresentative") {
                deepPath = "editcarrierrepresentative";
                var data = {firstName: firstname.trim(), lastName: lastname.trim(), carrierRepresentativeId: {email: email.trim()}, phone: phone.trim(), residentialCity: cityName, residentialState: stateName};
            } else if (sessionStorage.loginType == "SuperAdmin") {
                deepPath = "editusaemployee";
                var data = {usaEmployeeId: {email: email.trim()}, phone: {number: phone.trim()}, city: cityName, state: stateName, lastName: lastname, firstName: firstname};
            } else {
                deepPath = "edituser";
                var data = {firstName: firstname.trim(), lastName: lastname, emailId: email.trim(), phone: phone.trim(), residentialCity: cityName, residentialState: stateName};
            }

            utils.server.makeServerCall(page, data, callback, deepPath);
            var imageContentType;
            var formdata = new FormData();
            if ($('#agency-prof-img')[0].files.length > 0) {
                var file = $('#agency-prof-img')[0].files[0];
                formdata.append("profilePicture", file);
                imageContentType = file.type;
            }
            var callback = utils.server.profilePicResponse;
            var isFormData = true, qs = "";
            if (localStorage.LoginType == "SuperAdmin") {
                qs = sessionStorage.superAdminEmailId;
            } else {
                qs = sessionStorage.userEmailId;
            }
            var pagespinner = true;
            var typeOfImage = "profilePicture";
            HOMEPAGERESPONSE.PROFILEPICUPDATECLICKED = true;
            if ((HOMEPAGERESPONSE.ISEDITIMAGEICONCLICKED || HOMEPAGERESPONSE.ISEDITIMAGEICONCLICKEDFOROVERLAY)) {
                utils.server.imagesToServer(formdata, callback, isFormData, qs, pagespinner, typeOfImage, imageContentType);
            } else {
                return false;
            }

        }
    },
    MyprofEditCarrierOwner: function (isClickEvent) {
        var mytxtval = $.trim($('#idcarrierownerrepedit').text());
        if (mytxtval == 'edit()' | mytxtval == 'Edit()' | mytxtval == 'Edit' | mytxtval == 'edit') {
            var name = $("#nameview").text();
            var phone = $("#phoneview").text();
            var email = $("#emailview").text();
            $('#id_carrierrep_editsave').text("Save");
            $(".profile-result-cls").css("display", "none");
            $(".agencyprofinput").css("display", "inline-block");
            $('#namenew').val(name);
            $('#phonenew').val(phone);
            $('#emailnew').val(email);
        } else {
            var name = $("#namenew").val();
            var phone = $("#phonenew").val();
            var email = $("#emailnew").val();
            $('#id_carrierrep_editsave').text("Edit");
            $(".profile-result-cls").css("display", "inline-block");
            $(".agencyprofinput").css("display", "none");
            $('#nameview').html(name);
            $('#phoneview').html(phone);
            $('#emailview').html(email);
            //Make call here
            var page = "myprofile";
            if (name.trim() == "") {
                showAlertBox("Please enter Name..!");
            } else if (email.trim() == "") {
                showAlertBox("Please enter Email-Id..!");
            } else if (phone.trim() == "") {
                showAlertBox("Please enter Phone Number..!");
            } else {

                var data = {firstName: name.trim(), carrierRepresentativeId: email.trim(), phone: phone.trim()};
                var callback = utils.server.gotprofileEditresponse;
                var deepPath = "editcarrierrepresentative";
                utils.server.makeServerCall(page, data, callback, deepPath);
                //Make image server call
                var imageContentType;
                var formdata = new FormData();
                if ($('#agency-prof-img')[0].files.length > 0) {
                    var file = $('#agency-prof-img')[0].files[0];
                    formdata.append(file);
                    imageContentType = file.type;
                }
                var callback = utils.server.profilePicResponse;
                var isFormData = true;
                var qs = sessionStorage.userEmailId;
                var pagespinner = true;
                var typeOfImage = "profilePicture";
                if (HOMEPAGERESPONSE.ISEDITIMAGEICONCLICKED) {
                    utils.server.imagesToServer(formdata, callback, isFormData, qs, pagespinner, typeOfImage, imageContentType);
                }
            }

        }
    },
    loadLoginPage: function (isClickEvent) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.LOGIN_PAGE);
        protocall.home.initLoginPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.LOGIN_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.LOGIN, CONSTANTS.LINK_TYPE.LOGIN, CONSTANTS.LINK_TYPE.LOGIN, "");
        } else {
            protocall.setPage(CONSTANTS.LINK_TYPE.LOGIN_PAGE, CONSTANTS.LINK_TYPE.LOGIN_PAGE, CONSTANTS.LINK_TYPE.LOGIN_PAGE, "");
        }
        protocall.displaySpinner(false);
        sessionStorage.IDENDIFIER = "49c03e36-f3f1-4132-8115-2f74c8a7bae3";
        sessionStorage.IDENDIFIER_NAME = "Agency";
        $('body').css("background-image", "url(images/Background-pattern.png)");
        $('body').css("background-color", "#e9e9e9");
        $("#rootadmin").click();
        var msglist = document.getElementById("id-usertype");
        msglist.setAttribute("data-carrierid", "49c03e36-f3f1-4132-8115-2f74c8a7bae3");
        msglist.setAttribute("data-logintype", "Agency");


    },
    loadHomePage: function (isClickEvent) {
        HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED = true;
        HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
        HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
        HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED = false;
        HOMEPAGERESPONSE.FEEDSICONCLICKED = false;
        HOMEPAGERESPONSE.UNREADFEEDCOUNT = 0;
        HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
        HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
        HOMEPAGERESPONSE.HOMEPAGEFEEDPAGENUMBER = 1;
        sessionStorage.selectedTab = "HOME_PAGE";
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.home.initHomePage();
        protocall.view.subMenuSelectedTab();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE, "");
        }
    },
    //AGENCY_PAGE
    loadAgencyPage: function (isClickEvent) {
        CUSTOMER.CUSTOMERPAGINATIONUMBER = 0;
        CARRIER.CUSTOMERPAGINATIONUMBER = 0;
        AGENCY.CUSTOMERPAGINATIONUMBER = 0;
        AGENCY.ASSOCIATEDCUSTOMERPAGINATIONNUMBER = 0;
        sessionStorage.setItem("SUBMENU", "AGENCY_PAGE");
        console.log("Load Carrier Page");
        $(".content-holder").addClass("spinner1");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.AGENCY_PAGE);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCY_PAGE);
        protocall.events.GlobalContainerScrollevent();
        protocall.carrier.initAgencyPage();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.AGENCY_PAGE, CONSTANTS.LINK_TYPE.AGENCY_PAGE, CONSTANTS.LINK_TYPE.AGENCY_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    loadAgenciesPage: function (isClickEvent) {
        AGENCY.CUSTOMERPAGINATIONUMBER = 0;
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        sessionStorage.setItem("SUBMENU", "AGENCIES_PAGE");
        $(".content-holder").addClass("spinner1");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
        protocall.carrier.initAgenciesPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.AGENCIES_PAGE, CONSTANTS.LINK_TYPE.AGENCIES_PAGE, CONSTANTS.LINK_TYPE.AGENCIES_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    loadCarrierOwnerAgenciesPage: function (isClickEvent) {
        clearInterval(homePageUpdate);
        CARRIER.CUSTOMERPAGINATIONUMBER = 0;
        CUSTOMER.CUSTOMERPAGINATIONUMBER = 0;
        AGENCY.CUSTOMERPAGINATIONUMBER = 0;
        AGENCY.ASSOCIATEDCUSTOMERPAGINATIONNUMBER = 0;
        sessionStorage.setItem("SUBMENU", "AGENCIES_PAGE");
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
        //Call the below in carrier.js
        protocall.carrier.initCarrierOwnerAgenciesPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERAGENCY, CONSTANTS.LINK_TYPE.CARRIERAGENCY, CONSTANTS.LINK_TYPE.CARRIERAGENCY, "");
        }
        protocall.displaySpinner(false);
    },
    loadCarrierPage: function (isClickEvent) {
        clearInterval(homePageUpdate);
        AGENCY.CARRIERDATA = [];
        CUSTOMER.ASSOCIATEFEEDDATA = [];
        CARRIER.CUSTOMERPAGINATIONUMBER = 0;
        CUSTOMER.CUSTOMERPAGINATIONUMBER = 0;
        AGENCY.CUSTOMERPAGINATIONUMBER = 0;
        console.log("Load Carrier Page");
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
        protocall.carrier.initCarrierPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERS_PAGE, CONSTANTS.LINK_TYPE.CARRIERS_PAGE, CONSTANTS.LINK_TYPE.CARRIERS_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    loadCustomerPage: function (isClickEvent) {
        CUSTOMER.AGENCY.CUSTOMERDATA = [];
        MYREPS.ASSIGNCUSTOMERPAGENUMBER = 0;
        localStorage.selectedEmail = "";
        localStorage.selectedUserId = "";
        localStorage.carrierIDValue = "";
        clearInterval(homePageUpdate);
        RESPONSE_ARRAY = [];
        //protocall.displaySpinner(true);
        CUSTOMER.CUSTOMERPAGINATIONUMBER = 0;
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        HOMEPAGERESPONSE.PROPERTYPOLICYCOUNT = 0;
        HOMEPAGERESPONSE.OTHERPOLICYCOUNT = 0;
        HOMEPAGERESPONSE.VEHICLEPOLICYCOUNT = 0;
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        protocall.customer.initCustomerPage();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, "");
        }
        protocall.displaySpinner(false);
    },
    loadMyRepsPage: function (isClickEvent) {
        clearInterval(homePageUpdate);
        console.log("Load My Reps Page");
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
        //Call the below in myreps.js
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.MY_REP_PAGE, CONSTANTS.LINK_TYPE.MY_REP_PAGE, CONSTANTS.LINK_TYPE.MY_REP_PAGE, "");
            HOMEPAGERESPONSE.SEARCHAGENCYREP = false;
        }
        protocall.myRep.initMyRepsPage();
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
        protocall.events.GlobalContainerScrollevent();
        protocall.displaySpinner(false);
    },
    loadCarrierRepsPage: function (isClickEvent) {
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        /*  if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
         if (localStorage.LoginType == 'Representatives') {
         var dataq = {};
         var path = utils.server.getServerPath("newcarrierdashboarddesignforrepresentativelogin");
         var request = path(dataq).execute(function (resp) {
         if (resp.error != undefined) {
         t.server.handleError(resp);
         } else {
         RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
         RESPONSE.CARRIERREP_DATA[0] = resp;
         RESPONSE.customers_data[0] = resp.resultMap.customerTab;
         RESPONSE.agencies_data[0] = resp.resultMap.agencyTab[0].agencyDetail;
         RESPONSE.carrierrepcustomers_data[0] = resp;
         RESPONSE.ASSOCIATEFEED = resp;
         // resp = RESPONSE.ASSOCIATEFEED[0];
         //                            protocall.loadCarrierOwnerCustomersAssociatedReps();
         }
         });
         }
         if (localStorage.LoginType == 'Admin') { */

        /* var data = {pageNumber: 1}
         var path = utils.server.getServerPath("myrepforcarrierdashboard");
         var request = path(data).execute(function (resp) {
         if (resp.error != undefined) {
         t.server.handleError(resp);
         } else {
         //RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
         //RESPONSE.ASSOCIATEFEED = resp;
         console.log("carrier owner rep details",resp);
         if(resp.resultMap.TypeCode == "4011"){
         if(resp.resultMap.repTab != undefined){
         CARRIER.REPDATA = resp.resultMap.repTab;
         }
         } */
        // resp = RESPONSE.ASSOCIATEFEED[0];
        //                            protocall.loadCarrierOwnerCustomersAssociatedReps();
        //}
        //});
        //}
        //}

        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE, CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE, CONSTANTS.LINK_TYPE.CARRIER_REPS_PAGE, "");
        }
        var pageNumberValue = 1;
        module_ServerCall.parseMyRepsPageFeedData(pageNumberValue);
        //Call the below in myreps.js
        //protocall.myRep.initCarrierRepsPage();
        protocall.displaySpinner(false);
    },
    viewFeed: function (isClickEvent, e) {

//        sessionStorage.HOME_PAGE_SELECTED_BUTTON = "";
        clearInterval(homePageUpdate);
        sessionStorage.setItem("SUBMENU", "");
        $(".container").off("scroll");
        RESPONSE.POLICYIDS = [];
        var currentTarget = "", userEmail = "", incidentDate = "", alertType = "", alertIDForView = "", policyAlertMessage = "", statusOfThePolicy = "", userId = "";
        if (HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED) {
            protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_ARCHIVES);
        } else if (HOMEPAGERESPONSE.INCIDENTALERTSCLICKED) {
            protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.INCIDENTS);
        } else if (HOMEPAGERESPONSE.POLICYALERTCLICKED) {
            protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.POLICIES);
        } else {
            protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED);
        }
        $(".div-reloadpage").css("display", "none");
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            currentTarget = $(e.currentTarget);
            userId = currentTarget.find("div span").attr("id");
            alertIDForView = currentTarget.find("div span").attr("name");
            if (HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED) {
                protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_ARCHIVES + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED, CONSTANTS.LINK_TYPE.VIEW_FEED, "");
            } else if (HOMEPAGERESPONSE.INCIDENTALERTSCLICKED) {
                protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.INCIDENTS + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED, CONSTANTS.LINK_TYPE.VIEW_FEED, "");
            } else if (HOMEPAGERESPONSE.POLICYALERTCLICKED) {
                protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.POLICIES + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED, CONSTANTS.LINK_TYPE.VIEW_FEED, "");
            } else {
                protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_FEED, CONSTANTS.LINK_TYPE.VIEW_FEED, "");
            }
            sessionStorage.setItem("userEmailViewFeed", userEmail);
            sessionStorage.setItem("userIdViewFeed", userId);
            sessionStorage.setItem("userAlertIdViewFeed", alertIDForView);
            sessionStorage.setItem("alertFeeds", JSON.stringify(HOMEPAGERESPONSE.RECURRINGALERTDFEEDS));
        }
        if (PAGEREFRESH.ISPAGEREFRESHED) {
            userEmail = sessionStorage.getItem("userEmailViewFeed");
            alertIDForView = sessionStorage.getItem("userAlertIdViewFeed");
            HOMEPAGERESPONSE.RECURRINGALERTDFEEDS = JSON.parse(sessionStorage.getItem("alertFeeds"));
        }
        //Call the below dynamically

        if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
            feedValues = HOMEPAGERESPONSE.RELATEDFEEDS;
        } else {
            feedValues = HOMEPAGERESPONSE.RECURRINGALERTDFEEDS;
        }
        $.each(feedValues, function (index, viewAlertFeed) {
            if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {

                if (userId == HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.userId && alertIDForView == viewAlertFeed.alertDetails.alertId) {

                    firstName = HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.firstName;
                    lastName = HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.lastName;
                    bDay = HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.birthDate;
                    birthday = moment(bDay).tz('America/New_York').format('MM/DD/YYYY');
                    gender = HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.gender;
                    userEmail = HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.emailId.email;
                    try {
                        residentialCity = viewAlertFeed.IncidentDetails.incidentCity;
                    } catch (e) {
                        try {
                            residentialCity = viewAlertFeed.userDetails.residentialCity;
                        } catch (e1) {
                            residentialCity = "";
                        }
                    }
                    try {
                        try {
                            if (viewAlertFeed.IncidentDetails.incidentState != undefined) {
                                residentialCity = residentialCity + ", " + viewAlertFeed.IncidentDetails.incidentState;
                            }
                        } catch (ee) {
                            try {
                                if (viewAlertFeed.userDetails.residentialState != undefined) {
                                    residentialCity = residentialCity + ", " + viewAlertFeed.userDetails.residentialState;
                                }
                            } catch (e) {
                                residentialCity = "";
                            }
                        }
                    } catch (e) {
                        try {
                            if (viewAlertFeed.userDetails.residentialState != undefined) {
                                residentialCity = residentialCity + ", " + viewAlertFeed.userDetails.residentialState;
                            }
                        } catch (e) {
                            residentialCity = "";
                        }
                    }

                    if (residentialCity == undefined) {
                        residentialCity = "";
                    }
                    try {
                        phoneNumber = HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.phone.number;
                    } catch (e) {
                        phoneNumber = "";
                    }
                    if (HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.profilePicture) {
                        profilePicture = HOMEPAGERESPONSE.PROFILEAPI + HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS.profilePicture;
                    } else {
                        profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                    }
                    alDate = viewAlertFeed.alertDetails.alertDate;
                    alertDateValue = moment.utc(new Date(parseInt(alDate))).format('MMM D, YYYY');
					alertTimeWithDLS = moment.utc(Number(alDate))._d;
                    alertTime = moment(alertTimeWithDLS).format('h:mmA');
                    if (moment(Number(alDate)).tz('America/New_York').isDST()) {
                        timeZone = "EDT";
                    } else {
                        timeZone = "EST";
                    }
                    alertType = viewAlertFeed.alertDetails.type;
                    if (alertType == "incidentalert") {
                        incidentId = viewAlertFeed.IncidentDetails.incidentId;
                    } else {
                        incidentId = viewAlertFeed.alertDetails.policyId;
                        policyAlertMessage = viewAlertFeed.PolicyChangeSelected;
                    }
                    noOfOtherPartyRecordsCount = viewAlertFeed.NoofOtherPartyRecord;
                    noOfAudioRecordCount = viewAlertFeed.NoofAudioRecord;
                    noOfPictureRecord = viewAlertFeed.NoofPictureRecord;
                    try {
                        statusOfThePolicy = viewAlertFeed.alertStatusDetails.status;
                    } catch (e) {
                        statusOfThePolicy = "";
                    }
                }
            } else {
                if (userId == viewAlertFeed.userDetails.userId && alertIDForView == viewAlertFeed.alertDetails.alertId) {

                    firstName = viewAlertFeed.userDetails.firstName;
                    lastName = viewAlertFeed.userDetails.lastName;
                    bDay = viewAlertFeed.userDetails.birthDate;
                    birthday = moment(bDay).tz('America/New_York').format('MM/DD/YYYY');
                    gender = viewAlertFeed.userDetails.gender;
                    userEmail = viewAlertFeed.userDetails.emailId.email;
                    /* try {
                     residentialCity = viewAlertFeed.IncidentDetails.incidentCity;
                     } catch (e) {
                     try {
                     residentialCity = viewAlertFeed.userDetails.residentialCity;
                     } catch (e1) {
                     residentialCity = "";
                     }
                     } */
                    //try {
                    try {
                        if (viewAlertFeed.IncidentDetails.incidentState != undefined) {
                            residentialCity = viewAlertFeed.IncidentDetails.incidentCity + ", " + viewAlertFeed.IncidentDetails.incidentState;
                        }
                    }
                    catch (e) {
                        try {
                            if (viewAlertFeed.IncidentDetails.incidentCity != undefined) {
                                residentialCity = viewAlertFeed.IncidentDetails.incidentCity;
                            }
                        } catch (e1) {
                            residentialCity = "";

                        }
                    }


                    //} catch (e) {
                    /*  try {
                     if (viewAlertFeed.userDetails.residentialState != undefined) {
                     residentialCity = residentialCity + ", " + viewAlertFeed.userDetails.residentialState;
                     }
                     } catch (e) {
                     residentialCity = "";
                     }
                     } */

                    /* if (residentialCity == undefined) {
                     residentialCity = "";
                     } */
                    try {
                        phoneNumber = viewAlertFeed.userDetails.phone.number;
                    } catch (e) {
                        phoneNumber = "";
                    }
                    profilePicture = viewAlertFeed.userDetails.profilePicture;
                    if (profilePicture) {
                        profilePicture = HOMEPAGERESPONSE.PROFILEAPI + viewAlertFeed.userDetails.profilePicture;
                    } else {
                        profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                    }
                    alDate = viewAlertFeed.alertDetails.alertDate;
                    alertDateValue = moment.utc(Number(alDate)).format('MMM D, YYYY');
                    alertTimeWithDLS = moment.utc(Number(alDate))._d;
                    alertTime = moment(alertTimeWithDLS).format('h:mmA');
                    if (moment(Number(alDate)).tz('America/New_York').isDST()) {
                        timeZone = "EDT";
                    } else {
                        timeZone = "EST";
                    }
                    alertType = viewAlertFeed.alertDetails.type;
                    if (alertType == "incidentalert") {
                        incidentId = viewAlertFeed.IncidentDetails.incidentId;
                    } else {
                        incidentId = viewAlertFeed.alertDetails.policyId;
                        policyAlertMessage = viewAlertFeed.PolicyChangeSelected;
                    }
                    noOfOtherPartyRecordsCount = viewAlertFeed.NoofOtherPartyRecord;
                    noOfAudioRecordCount = viewAlertFeed.NoofAudioRecord;
                    noOfPictureRecord = viewAlertFeed.NoofPictureRecord;
                    statusOfThePolicy = viewAlertFeed.alertStatusDetails.status;
                }
            }
        });
        if (lastName == undefined) {
            lastName = "";
        }
        if (gender == undefined) {
            gender = "";
        }
        if (policyAlertMessage == "") {
            policyAlertMessage = "";
        }
        if (bDay == undefined) {
            birthday = "";
        }
        console.log("pilcy messge manoh-----", policyAlertMessage);
        residentialCity = residentialCity.replace("undefined,", "");
        userName = firstName + '&nbsp' + lastName;
        var tempObj = {"firstName": firstName,
            "lastName": lastName,
            "userName": userName, "alertId": alertIDForView,
            "birthday": birthday,
            "alertDate": alertDateValue,
            "alertTime": alertTime,
            "profilePicture": profilePicture,
            "gender": gender,
            "phoneNumber": phoneNumber,
            "alertType": alertType,
            "userEmail": userEmail,
            "userId": userId,
            "residentialCity": residentialCity,
            "noOfOtherPartyRecordsCount": noOfOtherPartyRecordsCount,
            "noOfAudioRecordCount": noOfAudioRecordCount,
            "noOfPictureRecord": noOfPictureRecord,
            "incidentIdValue": incidentId,
            "policyMessage": policyAlertMessage,
            "statusOfPolicy": statusOfThePolicy,
            "timeZone": timeZone
        };
        $(".div-reloadpage").css("display", "none");
        console.log("tempObj.incidentIdValue>>>>>>>>>>>", tempObj.incidentIdValue);
        HOMEPAGERESPONSE.COMMONUSERDETAILS = tempObj;
        console.log("HOMEPAGERESPONSE.COMMONUSERDETAILS", HOMEPAGERESPONSE.COMMONUSERDETAILS.lastName);
        console.log("HOMEPAGERESPONSE.COMMONUSERDETAILS tempObj", tempObj.lastName);
        protocall.home.loadFeed(tempObj);
        var breadCrumbObj = {};
        breadCrumbObj.customerName = userName;
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.HOME_PAGE, breadCrumbObj);
        protocall.displaySpinner(false);
        protocall.events.GlobalContainerScrollevent();
        $(".div-reloadpage").css("display", "none");

        $(".tab-rb-submenu").css("width", "30%");
        $(".bcrum-lb-submenu").css("width", "70%");

//        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
        //            $(".submenu-sort").replaceWith("<a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative\" data-type=\"page\" data-submenu=\"view_archives\" style=\" width: 61%;float: right;\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> </a>");
        //        } else {
        if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "VIEW_ARCHIVES") {
            $(".submenu-sort").replaceWith("<a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative selected-tab\" data-type=\"page\" data-submenu=\"view_archives\" style=\" width: 63%;float: right;\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\">  <span class=\"\"> " + sessionStorage.ArchieveCOUNT + "</span>  </span></a>");
            $(".home").removeClass("selected-tab");
        } else {
            $(".submenu-sort").replaceWith("<a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative\" data-type=\"page\" data-submenu=\"view_archives\" style=\" width: 63%;float: right;\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\">  <span class=\"\"> " + sessionStorage.ArchieveCOUNT + "</span>  </span></a>");
        }
        $(".div-reloadpage").css("display", "none");

        //        }


    },
    viewCustomerViewFeed: function (isClickEvent) {
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW, CONSTANTS.LINK_TYPE.VIEW_CUSTOMER_FEEDVIEW, "");
        }
        protocall.customer.loadFeed();
        //Call the below dynamically
        var breadCrumbObj = {};
        breadCrumbObj.customerName = "James Jeo";
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.buildSubMenuBlk(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, breadCrumbObj);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        protocall.displaySpinner(false);
    },
    viewSettingsPage: function (isClickEvent, $el) {
        clearInterval(homePageUpdate);
        if (PAGEREFRESH.ISPAGEREFRESHEDFORSETTINGS) {
            var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            var content = '<div class="container"> <div class="content-holder"></div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            $("#page").empty();
            totalHtml = header + content + footer;
            $("#page").append(totalHtml);
            $('.setProfilePic').fillBox();
        }
        sessionStorage.setItem("SUBMENU", "SETTINGS_PAGE");
        popUpContent.closePopUpContent();
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.SETTINGS_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.SETTINGS_PAGE, CONSTANTS.LINK_TYPE.SETTINGS_PAGE, CONSTANTS.LINK_TYPE.SETTINGS_PAGE, "");
        }
        protocall.displaySpinner(true);
        protocall.myProfile.loadFeedSetting($el);
        protocall.events.GlobalContainerScrollevent();
    },
    viewProfileViewPage: function (isClickEvent, $el) {
        clearInterval(homePageUpdate);
        sessionStorage.setItem("SUBMENU", "PROFILE_PAGE");
        if (PAGEREFRESH.ISPAGEREFRESHEDFORMYPROFILE) {
            var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            var content = '<div class="container"> <div class="content-holder"></div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            $("#page").empty();
            totalHtml = header + content + footer;
            $("#page").append(totalHtml);
            $('.setProfilePic').fillBox();
        }

        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.PROFILE_PAGE);
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.PROFILE_PAGE, CONSTANTS.LINK_TYPE.PROFILE_PAGE, CONSTANTS.LINK_TYPE.PROFILE_PAGE, "");
        }
        protocall.myProfile.loadMyProfileView($el);
        protocall.displaySpinner(false);
        $(".container").off("scroll");
        protocall.events.GlobalContainerScrollevent();
    },
    viewCarrierViewFeed: function (isClickEvent, Carrieremail) {
        if (localStorage.LoginType == "Representatives" && (localStorage.currentPage == "customers/viewcustomerfeedview" || localStorage.currentPage == "carriers/viewcarrierfeedview")) {
            return true;
        } else {
            sessionStorage.IsDropdownClick = "true";
            //if (localStorage.LoginType == "Representatives") {
            //   return true;
            // } else {
            protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW);
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
            protocall.events.GlobalContainerScrollevent();
            if (isClickEvent) {
                protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERS_PAGE, CONSTANTS.LINK_TYPE.CARRIERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW, CONSTANTS.LINK_TYPE.VIEW_CARRIER_FEEDVIEW, "");
                sessionStorage.setItem("carrierEmailId", Carrieremail);
            }
            if (PAGEREFRESH.ISPAGEREFRESHEDFORCARRIERFEEDVIEW) {
                Carrieremail = sessionStorage.getItem("carrierEmailId");
            }

            protocall.carrier.loadFeed(Carrieremail);
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERS_PAGE);
            protocall.displaySpinner(false);
        }
    },
    viewCustomerFeed: function (isClickEvent, emailId, customerUserId, carrierId) {
        if ((localStorage.LoginType == "Representatives") && (localStorage.currentPage == "agencies/agencies" || localStorage.currentPage == "carrierreps/ViewCarrierRep")) {
            return true;
        } else {
            sessionStorage.setItem("SUBMENU", "CUSTOMERSVIEW_PAGE");
            protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEWCUSTOMERFEED);
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
            protocall.events.GlobalContainerScrollevent();
            if (isClickEvent) {
                protocall.setPage(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEWCUSTOMERFEED, CONSTANTS.LINK_TYPE.VIEWCUSTOMERFEED, "");
                sessionStorage.setItem("customerEmailId", emailId);
                sessionStorage.setItem("customerCarrierId", carrierId);
            }
            if (PAGEREFRESH.ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW) {
                emailId = sessionStorage.getItem("customerEmailId");
                carrierId = sessionStorage.getItem("customerCarrierId");
            }
            //protocall.customer.loadCustomersViewFeed(emailId, customerUserId, carrierId);
            protocall.customer.customerDetailedView(customerUserId);
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
            //protocall.util.policyWithCarrierResponse(emailId);
            //protocall.util.showPolicies();
            protocall.displaySpinner(false);
            protocall.events.GlobalContainerScrollevent();
        }
    },
    viewSuperAdminHomeIndividualViewFeed: function (isClickEvent, emailId, carrierId) {
        sessionStorage.setItem("SUBMENU", "CARRIERS_AGENCY_PAGE");
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.SUPERADMINHOMEFEEDVIEW, CONSTANTS.LINK_TYPE.SUPERADMINHOMEFEEDVIEW, "");
        }
        var perefferieid = emailId;
        protocall.customer.loadSuperAdminIndividualViewFeed(perefferieid);
        protocall.displaySpinner(false);
        protocall.events.GlobalContainerScrollevent();
    },
    viewAgenciesFeed: function (isClickEvent, emailId, carrierId) {
        sessionStorage.CarrierId = carrierId;
        CUSTOMER.ASSOCIATEFEEDDATA = [];
        if (localStorage.LoginType == "Representatives" && (localStorage.currentPage == "customers/viewcustomerfeedview")) {
            return true;
        } else {
            if (sessionStorage.loginType == 'SuperAdmin') {
                sessionStorage.setItem("SUBMENU", "CARRIERS_AGENCY_PAGE");
                protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERAGENCY + "/" + CONSTANTS.LINK_TYPE.CARRIERAGENCY);
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
                protocall.events.GlobalContainerScrollevent();
                if (isClickEvent) {
                    protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERAGENCY, CONSTANTS.LINK_TYPE.CARRIERAGENCY + "/" + CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, "");
                }
                protocall.customer.loadAgenciesViewFeed(emailId, carrierId);
                protocall.displaySpinner(false);
                protocall.events.GlobalContainerScrollevent();
            } else {
                if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                    if (localStorage.LoginType == 'Admin') {
                        sessionStorage.setItem("SUBMENU", "CARRIERS_AGENCY_PAGE");
                        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERAGENCY + "/" + CONSTANTS.LINK_TYPE.CARRIERAGENCY);
                        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
                        protocall.events.GlobalContainerScrollevent();
                        if (isClickEvent) {
                            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERAGENCY, CONSTANTS.LINK_TYPE.CARRIERAGENCY + "/" + CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, "");
                        }
                        protocall.customer.loadAgenciesViewFeed(emailId, carrierId);
                        protocall.displaySpinner(false);
                        protocall.events.GlobalContainerScrollevent();
                    } else {
                        sessionStorage.setItem("SUBMENU", "AGENCIESVIEW_PAGE");
                        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CARRIERAGENCY + "/" + CONSTANTS.LINK_TYPE.CARRIERAGENCY);
                        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
                        protocall.events.GlobalContainerScrollevent();
                        if (isClickEvent) {
                            protocall.setPage(CONSTANTS.LINK_TYPE.CARRIERAGENCY, CONSTANTS.LINK_TYPE.CARRIERAGENCY + "/" + CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, "");
                        }
                        protocall.customer.loadAgenciesViewFeed(emailId, carrierId);
                        protocall.displaySpinner(false);
                        protocall.events.GlobalContainerScrollevent();
                        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CARRIERAGENCY);
                    }
                } else {
                    sessionStorage.setItem("SUBMENU", "AGENCIESVIEW_PAGE");
                    protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.AGENCIES_PAGE + "/" + CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
                    protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
                    protocall.events.GlobalContainerScrollevent();
                    if (isClickEvent) {
                        protocall.setPage(CONSTANTS.LINK_TYPE.AGENCIES_PAGE, CONSTANTS.LINK_TYPE.AGENCIES_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, CONSTANTS.LINK_TYPE.VIEWAGENCIESFEED, "");
                    }
                    protocall.customer.loadAgenciesViewFeed(emailId, carrierId);
                    protocall.displaySpinner(false);
                    protocall.events.GlobalContainerScrollevent();
                }
            }
        }
    },
    loadMyAlertsFeeds: function ($el, isClickEvent) {
        sessionStorage.menuSelected = "myAlertsFeed";
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        HOMEPAGERESPONSE.UNREADFEEDCOUNT = 0;
        HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
        HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
        HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
        HOMEPAGERESPONSE.HOMEPAGEFEEDPAGENUMBER = 1;
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.MY_ALERTS);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.MY_ALERTS, CONSTANTS.LINK_TYPE.MY_ALERTS, "");
        }
        protocall.home.displayMyAlertsFeeds();
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.setSelectedLinkClasses($el, true);
        protocall.displaySpinner(false);
        protocall.events.GlobalContainerScrollevent();
    },
    loadIncidentsFeeds: function ($el, isClickEvent) {
        sessionStorage.menuSelected = "incidentMenu";
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
        HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
        HOMEPAGERESPONSE.HOMEPAGEFEEDPAGENUMBER = 1;
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.INCIDENTS);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.INCIDENTS, CONSTANTS.LINK_TYPE.INCIDENTS, "");
        }
        protocall.home.displayIncidentsFeeds();
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.setSelectedLinkClasses($el, true);
    },
    loadPoliciesFeeds: function ($el, isClickEvent) {
        sessionStorage.menuSelected = "policyMenu";
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
        HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
        HOMEPAGERESPONSE.HOMEPAGEFEEDPAGENUMBER = 1;
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.POLICIES);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.POLICIES, CONSTANTS.LINK_TYPE.POLICIES, "");
        }
        protocall.home.displayPoliciesFeeds();
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        protocall.view.setSelectedLinkClasses($el, true);
        protocall.displaySpinner(false);
        protocall.events.GlobalContainerScrollevent();
    },
    subMenuSelectedTab: function () {
        $(".mb-submenu").find("a").removeClass("selected-tab");
        if (HOMEPAGERESPONSE.INCIDENTALERTSCLICKED) {
            $(".mb-submenu").find("a.incidents").addClass("selected-tab");
        } else if (HOMEPAGERESPONSE.POLICYALERTCLICKED) {
            $(".mb-submenu").find("a.policies").addClass("selected-tab");
        } else if (HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED) {
            $(".mb-submenu").find("a.archives").addClass("selected-tab");
        } else if (HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED) {
            $(".mb-submenu").find("a.view_archives").addClass("selected-tab");
        } else {
            $(".mb-submenu").find("a.myalerts").addClass("selected-tab");
        }
    },
    loadArchiveFeeds: function ($el, isClickEvent) {
        if (HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE.length !== 0) {
            $(".content-holder").addClass("spinner1").css("opacity", "0.5");
            var data = {"alertList": HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE}, deepPath = "archieve",
                    page = "home",
                    callback = protocall.home.loadViewArchivedFeedsResponse,
                    authId = "",
                    spinnerMsg = "";
            var resp = utils.server.makeServerCall(page, data, callback, deepPath);
        } else {
            return;
        }
    }, loadviewArchivedFeeds: function ($el, isClickEvent) {
        clearInterval(homePageUpdate);
        sessionStorage.menuSelected = "archieveMenu";
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = true;
        HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
        HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED = false;
        HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
        HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
        HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED = false;
        HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_ARCHIVES);
        // protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        protocall.events.GlobalContainerScrollevent();
        if (isClickEvent) {
            protocall.setPage(CONSTANTS.LINK_TYPE.HOME_PAGE, CONSTANTS.LINK_TYPE.HOME_PAGE + "/" + CONSTANTS.LINK_TYPE.VIEW_ARCHIVES, CONSTANTS.LINK_TYPE.VIEW_ARCHIVES, "");
        }
        $('.tab-rb-submenu a').each(function () {
            protocall.view.setSelectedLinkClasses($(this), false);
        });
        CONSTANTS.PGNUMBER = 0;
        var pageNumber = ++CONSTANTS.PGNUMBER;
        var data = {"pageNumber": pageNumber},
        deepPath = "viewedarchieved",
                page = "home",
                callback = protocall.home.loadHomePageData;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
        protocall.view.subMenuSelectedTab();
        protocall.events.GlobalContainerScrollevent();
    },
    archiveFeeds: function ($e1) {
        var alertIDValue = $e1.attr("id");
        console.log("$e1", $e1);
        if ($e1.prop("checked") == true) {
            HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE.push(alertIDValue);
            $("a.archives").css("visibility", "visible");
        } else {
            HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE.pop(alertIDValue);
            if (HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE.length == 0) {
                $("a.archives").css("visibility", "hidden");
            } else {
                $("a.archives").css("visibility", "visible");
            }
        }
        console.log("alertIDValue", $e1.attr("id"));
    },
    setSelectedLinkClasses: function ($el, isSet) {
        if (isSet) {
            $el.addClass("selected-tab");
        } else {
            $el.removeClass("selected-tab");
        }
    },
    loadSubMenus: function ($el) {
        var html = "";
        if (sessionStorage.subMenuSelected == "true") {
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                html = '<div>'
                        + '<div class="snap prof-view-overlay-sort1" data-type="page" data-submenu="view_archives">View Archived</div>'
                        + '</div>';
            } else {
                html = '<div><div class="snap prof-view-overlay-sort1" data-type="page" data-submenu="myalerts">My Alerts</div>'
                        + '<div class="snap prof-view-overlay-sort1" data-type="page" data-submenu="incidents">Incidents</div>'
                        + '<div class="snap prof-view-overlay-sort1" data-type="page" data-submenu="policies" >Policies</div>'
                        + '<div class="snap prof-view-overlay-sort1" data-type="page" data-submenu="view_archives">View Archived</div>'
                        + '</div>';
            }

        }
        popUpContent.togglePopUpContent($el, html);
    },
    loadCustomersSubMenus: function ($el) {
        var html = "";
        if (sessionStorage.subMenuSelected == "true") {
            html = '<div><div class="snap prof-view-overlay-sort1" data-type="page" data-submenu="pushmessage">Push Message</div>'
                    + '<div class="snap prof-view-overlay-sort1" data-type="page" data-submenu="assignrep">Assign Rep</div>'
                    + '</div>';
        }
        popUpContent.togglePopUpContent($el, html);
    },
    loadMyRepsSubMenus: function ($el) {
        var html = "";
        if (sessionStorage.subMenuSelected == "true") {
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                html = '<div>'
                        + '<div class="snap prof-view-overlay-sort1" data-type="page" data-submenu="invitereps">Invite Reps</div>'
                        + '</div>';
            } else {
                html = '<div><div class="snap prof-view-overlay-sort1" data-type="page" data-submenu="privacy">Privacy</div>'
                        + '<div class="snap prof-view-overlay-sort1" data-type="page" data-submenu="invitereps">Invite Reps</div>'
                        + '</div>';
            }
        }
        popUpContent.togglePopUpContent($el, html);
    },
    loadLoginData: function ($el) {
        var html = '<div id="id-overlaymenu" style="max-height: 120px;overflow:auto !important;">'
                + '<div id="Carriers" value="559c0339-22b3-460d-9893-a4d7e1413055" class="snap  prof-view-overlay-sort-login" style="color:gray;font-size:17px;" >Carrier</div>'
                + '<div id="Carriers" value="559c0339-22b3-460d-9893-a4d7e1413055"  class="snap  prof-view-overlay-sort-login" >Acuity</div>'
                + '<div id="Carriers" value="a17bacd5-83a3-49f4-854e-4711fc3386e9"   class="snap  prof-view-overlay-sort-login" >Westfield Group</div>'
                + '<div id="Carriers" value="dfcf82bf-2888-40cf-a4f3-673e7890f75c"    class="snap  prof-view-overlay-sort-login" >Grange Insurance</div>'
                + '<div id="Carriers" value="ebfb6ff9-6383-4233-b7a1-b5e4fecd0abb"    class="snap  prof-view-overlay-sort-login" >Safeco Insurance</div>'
                + '<div id="Carriers" value="ee47194f-ef31-4c0c-be3c-27698cfea562"    class="snap  prof-view-overlay-sort-login" >Central Insurance Companies</div>'
                + '<div id="Carriers" value="5587210c-3fb9-4060-96d0-e92a4badf67d"   class="snap  prof-view-overlay-sort-login" >Testing</div>'
                + '<div id="Carriers" value="4fa9379c-ee79-4941-9b40-fe5772be3aa0"    class="snap  prof-view-overlay-sort-login" >ProtoCALL</div>'
                + '<div id="Carriers" value="0eef1316-fb82-4de7-80eb-1ae03fb2b077"   class="snap  prof-view-overlay-sort-login" >Auto Owners Insurance</div>'
                + '<div id="Carriers" value="ee47194f-ef31-4c0c-be3c-27698cfea562"   class="snap  prof-view-overlay-sort-login" >Central Insurance Companies</div>'
                + '<div id="Agency" value="559c0339-22b3-460d-9893-a4d7e1413055"  class="snap  prof-view-overlay-sort-login" style="color:gray;font-size:17px;" >Agency</div>'
                + '<div id="Agency" value="49c03e36-f3f1-4132-8115-2f74c8a7bae3"    class="snap  prof-view-overlay-sort-login" >Brooker Insurance Agency</div>'
                + '<div id="Agency" value="3b75ddc4-eb7c-497f-ad37-90ddb5883669"   class="snap  prof-view-overlay-sort-login" >Barberry Agency</div>'
                + '<div id="Agency" value="3af7a193-0bc7-4670-bb0a-8feebe065bd0"   class="snap  prof-view-overlay-sort-login" >Crandler Insurance Agency</div>'
                + '<div id="Agency" value="be0eded1-306c-4d9f-a66c-1b239482cb29"   class="snap  prof-view-overlay-sort-login" >Hertvik Insurance Group</div>'
                + '<div id="Agency" value="889a44bf-d7cd-4529-81dd-99c63822ae33"   class="snap  prof-view-overlay-sort-login" >Trimble Insurance Agency</div>'
                + '<div id="Agency" value="5be87034-f249-43ba-95b9-67170a1e322a"   class="snap  prof-view-overlay-sort-login" >Williamson Insurance Service</div>'
                + '</div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadAddVendorMenu: function ($el) {
        var html = "";
        html = '<div  style="max-height: 120px;overflow:auto !important;"><div id="addvendorbox" class="snap  prof-view-overlay-sort" >Towing Service</div><div id="addvendorbox" class="snap  prof-view-overlay-sort" >Home Restoration</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadAssociatedFieldMenuCarriers: function ($el) {
        var html = "";
        html = '<div  style="max-height: 120px;overflow:auto !important;"><div  class="snap  prof-view-overlay-sort-associateddropdown" >ASSOCIATED CUSTOMERS</div><div  class="snap prof-view-overlay-sort-associateddropdown" >ASSOCIATED REPS</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadAssociatedFieldMenuCustomers: function ($el) {
        var html = "";
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            html = '<div  style="max-height: 120px;overflow:auto !important;"><div  class="snap  prof-view-overlay-sort-associateddropdown" >ASSOCIATED REPS</div><div  class="snap prof-view-overlay-sort-associateddropdown" >ASSOCIATED CARRIER</div></div>';
        } else {
            html = '<div  style="max-height: 120px;overflow:auto !important;"><div  class="snap  prof-view-overlay-sort-associateddropdown" >ASSOCIATED REPS</div><div  class="snap prof-view-overlay-sort-associateddropdown" >ASSOCIATED AGENCY</div></div>';
        }
        popUpContent.togglePopUpContent($el, html);
    },
    loadAssociatedFieldMenuMyReps: function ($el) {
        var html = "";
        html = '<div  style="max-height: 120px;overflow:auto !important;"><div  class="snap  prof-view-overlay-sort-associateddropdown" >ASSOCIATED CUSTOMERS</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadAssociatedFieldMenuAgencies: function ($el) {
        var html = "";
        html = '<div  style="max-height: 120px;overflow:auto !important;"><div  class="snap  prof-view-overlay-sort-associateddropdown" >ASSOCIATED CUSTOMERS</div><div  class="snap  prof-view-overlay-sort-associateddropdown" >ASSOCIATED REPS</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadFliterbox2: function ($el) {
        var html = "";
        if (sessionStorage.FILTERBOX2_CONTENT == undefined) {
            sessionStorage.FILTERBOX2_CONTENT = '<div id="id-overlaymenu" style="max-height: 120px;overflow:auto !important;"><div id="filterbox2-none" class="snap  prof-view-overlay-sort" >None</div></div>';
            html = sessionStorage.FILTERBOX2_CONTENT;
        } else {
            html = sessionStorage.FILTERBOX2_CONTENT;
        }

        popUpContent.togglePopUpContent($el, html);
    },
    loadFliterbox3: function ($el) {
        var html = "";
        if (sessionStorage.FILTERBOX2_CONTENTCITY == undefined) {
            sessionStorage.FILTERBOX2_CONTENTCITY = '<div id="id-overlaymenu" style="max-height: 120px;overflow:auto !important;"><div id="filterbox2-none" class="snap  prof-view-overlay-sort" >None</div></div>';
            html = sessionStorage.FILTERBOX2_CONTENTCITY;
        } else {
            html = sessionStorage.FILTERBOX2_CONTENTCITY;
        }
        popUpContent.togglePopUpContent($el, html);
    },
    loadFliterbox1: function ($el) {
        var html = '<div><div id="filterbox1-none" class="snap  prof-view-overlay-sort" >None</div>'
                + '<div id="filterbox1-alpha" class="snap  prof-view-overlay-sort" >Alphabetical</div>'
                + '<div id="filterbox1-citystate" class="snap  prof-view-overlay-sort">City, State</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadSortBy: function ($el) {
        console.log("IsAlphaSelected", IsAlphaSelected);
        if (IsAlphaSelected == true) {
            var html = '<div><div id="homesort" class="snap  prof-view-overlay-sort" data-type="recent">Recent</div><div id="homealphasort" class="snap  prof-view-overlay-sort" data-type="alphabetical">Alphabetical</div></div>';
            popUpContent.togglePopUpContent($el, html);
        } else {
            var html = '<div><div id="homesort" class="snap  prof-view-overlay-sort" data-type="recent">Recent</div><div id="homealphasort" class="snap prof-view-overlay-sort" data-type="alphabetical">Alphabetical</div></div>';
            popUpContent.togglePopUpContent($el, html);
        }
    },
    loadSortByCustomer: function ($el) {
        var html = '<div><div class="snap ' + localStorage.myvalue1 + ' prof-view-overlay-sort" id="Myrecent" data-type="customer-recent">Recent</div><div class="snap ' + localStorage.myvalue2 + ' prof-view-overlay-sort" data-type="customer-alphabetical" id="Myalphabet">Alphabetical</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadSortByCarrier: function ($el) {
        var html = '<div><div class="snap ' + localStorage.mycarvalue1 + ' prof-view-overlay-sort" id="Myrecent" data-type="carrier-recent">Recent</div><div class="snap ' + localStorage.mycarvalue2 + ' prof-view-overlay-sort" data-type="carrier-alphabetical" id="Myalphabet">Alphabetical</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadSortByReps: function ($el) {
        var html = '<div><div class="snap ' + localStorage.myrepvalue1 + ' prof-view-overlay-sort" id="Myrecent" data-type="reps-recent">Recent</div><div class="snap ' + localStorage.myrepvalue2 + ' prof-view-overlay-sort" data-type="reps-alpha" id="Myalphabet">Alphabetical</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadSortByAgencies: function ($el) {
        var html = '<div><div class="snap ' + localStorage.myrepvalue1 + ' prof-view-overlay-sort" id="Myrecent" data-type="agencies-recent">Recent</div><div class="snap ' + localStorage.myrepvalue2 + ' prof-view-overlay-sort" data-type="agencies-alpha" id="Myalphabet">Alphabetical</div></div>';
        popUpContent.togglePopUpContent($el, html);
    },
    loadSortByRecent: function ($el) {
        protocall.view.sortyByRecnetView();
    },
    loadAgenciesSortByAlphabetical: function ($el) {
        AGENCY.CUSTOMERPAGINATIONUMBER = 0;
        $(".content-holder").addClass("spinner1").css("opacity", "0.5");
        protocall.view.sortyByAgenciesAlphabeticalView();
    },
    loadSortByAlphabetical: function ($el) {
        IsAlphaSelected = true;
        $("div.submenu-sort div:nth-child(1)").text("Alphabetical");
        $("#homesort").removeClass("mysortselected");
//        $("#homealphasort").addClass("mysortselected");
        protocall.view.sortyByAlphabeticalView();
    },
    loadSortByRecentCarrier: function ($el) {
//        localStorage.mycarvalue1 = 'mysortselected';
        localStorage.mycarvalue2 = '';
        protocall.view.sortyByCarrierRecnetView();
    },
    loadSortByAlphabeticalCarrier: function ($el) {
        localStorage.mycarvalue1 = '';
//        localStorage.mycarvalue2 = 'mysortselected';
        protocall.view.sortyByCarrierAlphabeticalView();
    },
    loadSortByRecentCustomers: function ($el) {
//        localStorage.myvalue1 = 'mysortselected';
        localStorage.myvalue2 = '';
        protocall.view.sortyByCustomerRecnetView();
    },
    loadSortByAlphabeticalCustomer: function ($el) {
        localStorage.myvalue1 = '';


        sessionStorage.customersort = "true";
//        localStorage.myvalue2 = 'mysortselected';
        protocall.view.sortyByCustomerAlphabeticalView();
    },
    loadSortByRecentReps: function ($el) {
//        localStorage.myrepvalue1 = 'mysortselected';
        localStorage.myrepvalue2 = '';
        protocall.view.sortyByRepsRecnetView();
    },
    loadSortByAlphabeticalReps: function ($el) {
        localStorage.myrepvalue1 = '';
//        localStorage.myrepvalue2 = 'mysortselected';
        protocall.view.sortyByRepsAlphabeticalView();
    },
    sortyByRepsRecnetView: function () {

        popUpContent.closePopUpContent();
        protocall.myRep.initMyRepsPage();
        return false;
    },
    sortyByRepsAlphabeticalView: function () {

        popUpContent.closePopUpContent();
        protocall.myRep.initMyRepsPageSort();
        return false;
    },
    sortyByRecnetView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Recent");
        IsAlphaSelected = false;
        //$("#homesort").addClass("mysortselected");
        $("#homealphasort").removeClass("mysortselected");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        HOMEPAGERESPONSE.UNREADFEEDCOUNT = 0;
        protocall.home.initHomePage();
    },
    sortyByAgenciesAlphabeticalView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Alphabetical");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = false;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = true;
        HOMEPAGERESPONSE.UNREADFEEDCOUNT = 0;
        module_ServerCall.parseAgenciesPageFeedData(++AGENCY.CUSTOMERPAGINATIONUMBER);
        //var data = {};
        //var path = utils.server.getServerPath("agencylist");         var deepPath = "agencyList";
        /*  var page = "agencies";
         callback = CustomerdynamicTemplate.customer.loadSuperAdminAegnciesalphaSortBy;
         utils.server.makeServerCall(page, data, callback, deepPath); */
        /* var request = path(data).execute(function (resp) {
         if (resp.error) {
         t.server.handleError(resp);
         } else {
         CustomerdynamicTemplate.customer.loadSuperAdminAegnciesalphaSortBy(resp);
         }
         }); */
    },
    sortyByAlphabeticalView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Alphabetical");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = false;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = true;
        HOMEPAGERESPONSE.UNREADFEEDCOUNT = 0;
        protocall.home.initHomePage();
    },
    sortyByCarrierRecnetView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Recent");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        protocall.carrier.initCarrierPage();
        return false;
    },
    sortyByCarrierAlphabeticalView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Alphabetical");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = false;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = true;
        protocall.carrier.initCarrierPageSort();
        return false;
    },
    sortyByCustomerRecnetView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Recent");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        sessionStorage.isCustomerAlphaSort = "false";
        protocall.customer.initCustomerPage();
        return false;
    },
    sortyByCustomerAlphabeticalView: function () {
        $("div.submenu-sort div:nth-child(1)").text("Alphabetical");
        popUpContent.closePopUpContent();
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = false;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = true;
        protocall.customer.initCustomerPageSort();
        return false;
    },
    loadProfile: function ($el) {
        var settings = "";
        if (sessionStorage.loginType == 'SuperAdmin') {
            settings = '<div id="mysettings" class="prof-view-overlay snap mysettings" data-type="mysettings" style="display:none;">Settings</div>';
        }
        settings = '<div id="mysettings" class="prof-view-overlay snap mysettings" data-type="mysettings">Settings</div>';
        /* if (localStorage.LoginType == 'Representatives') {
         settings = '<div id="mysettings" class="prof-view-overlay snap mysettings" data-type="mysettings" style="display:none;">Settings</div>';
         } else {
         settings = '<div id="mysettings" class="prof-view-overlay snap mysettings" data-type="mysettings">Settings</div>';
         } */
        var html = '<div><div class="prof-view-overlay snap myProfileView" data-type="myProfileView">My Profile</div>'
                + settings
                + '<div class="prof-view-overlay">Help</div><div class="prof-view-overlay snap" data-type="logout-yes">Log out</div></div>';
        popUpContent.togglePopUpContent($el, html);
        $(".poper-main-block").css("max-height", "170px");
        $(".pop-content-block").css("max-height", "170px");
//        $('.prof-view-overlay:contains(Log out)').addClass("mysortselected");

    },
    shareToRep: function () {
        var html = staticTemplate.home.shareWithRepTemplate();
        overlay.displayOverlay(html);
    },
    assignToCustomers: function () {
        protocall.displaySpinner(true);
        utils.server.gotAssignCustomersResponse();
        CUSTOMER.ASSOCIATEFEEDDATA = [];
//        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
//            if (localStorage.LoginType == 'Representatives') {
//                var dataq = {};
//                var path = utils.server.getServerPath("carrierdashboarddesignforrepresentativelogin");
//                var request = path(dataq).execute(function (resp) {
//                    if (resp.error != undefined) {
//                        t.server.handleError(resp);
//                    } else {
//                        RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
//                        RESPONSE.CARRIERREP_DATA[0] = resp;
//                        RESPONSE.customers_data[0] = resp.resultMap.customerTab;
//                        RESPONSE.agencies_data[0] = resp.resultMap.agencyTab[0].agencyDetail;
//                        RESPONSE.carrierrepcustomers_data[0] = resp;
//                        RESPONSE.ASSOCIATEFEED = resp;
//                        //resp = RESPONSE.ASSOCIATEFEED[0];
//                        utils.server.gotAssignCustomersResponse(resp);
//                    }
//                });
//            }
//            if (localStorage.LoginType == 'Admin') {
//                var dataq = {};
//                var path = utils.server.getServerPath("carrierdashboarddesign");
//                var request = path(dataq).execute(function (resp) {
//                    if (resp.error != undefined) {
//                        t.server.handleError(resp);
//                    } else {
//
//                        RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
//                        RESPONSE.customers_data[0] = resp.resultMap.customerTab;
//                        //RESPONSE.ASSOCIATEFEED[0] = resp;
//                        //  resp = RESPONSE.ASSOCIATEFEED[0];
//                        utils.server.gotAssignCustomersResponse(resp);
//                    }
//                });
//            }
//        } else {
//            if (localStorage.LoginType == 'Admin') {
//                var dataq = {};
//                var path = utils.server.getServerPath("agencydashboarddesign");
//                var request = path(dataq).execute(function (resp) {
//                    if (resp.error != undefined) {
//                        t.server.handleError(resp);
//                    } else {
//
//                        RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
//                        RESPONSE.customers_data[0] = resp.resultMap.userTab;
//                        //RESPONSE.ASSOCIATEFEED[0] = resp;
//                        //  resp = RESPONSE.ASSOCIATEFEED[0];
//                        utils.server.gotAssignCustomersResponse(resp.resultMap.userTab);
//                    }
//                });
//            } else {
//                var dataq = {};
//                var path = utils.server.getServerPath("newagencydashboarddesignforrepresentativelogin");
//                var request = path(dataq).execute(function (resp) {
//                    if (resp.error != undefined) {
//                        t.server.handleError(resp);
//                    } else {
//
//                        RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
//                        RESPONSE.customers_data[0] = resp.resultMap.CustomerTab;
//                        //RESPONSE.ASSOCIATEFEED[0] = resp;
//                        //  resp = RESPONSE.ASSOCIATEFEED[0];
//                        utils.server.gotAssignCustomersResponse(resp.resultMap.CustomerTab);
//                    }
//                });
//            }
//        }


    },
    showPoliciesList: function () {
        if (CUSTOMER.POLICYLISTWITHCARRIER != undefined || CUSTOMER.POLICYLISTWITHCARRIER != "") {
            module_ServerCall.showPolicyListForCustomer();
        }
    },
    properityPolicy: function (e) {
        var policyHtml = "", otherHtml = "", vehiCleHtml = "", totalHtmlValue = "", showPoliciesHTML = "", isPolicyExist = false;
        CUSTOMER.VEHICLEMODELCOUNT = 0;
        if ((CUSTOMER.AGENCY.ASSOCIATEDPOLICIES).length == 0) {
            showPoliciesHTML = "";
        } else {
            var policiesLength = CUSTOMER.AGENCY.ASSOCIATEDPOLICIES[0].length;
            console.log("policiesLength>>>>>>>>>>>", policiesLength);
            for (var i = 0; i < policiesLength; i++) {
                if (HOMEPAGERESPONSE.PROPERTYPRODUCTCOUNT[i] != 0 || HOMEPAGERESPONSE.OTHERPRODUCTCOUNT[i] != 0 || HOMEPAGERESPONSE.VEHICLEPRODUCTCOUNT[i] != 0) {
                    showPoliciesHTML += staticTemplate.home.showPoliciesTemplate(i);
                    isPolicyExist = true;
                    //break;
                } else {
                    if (isPolicyExist) {
                        showPoliciesHTML = showPoliciesHTML;
                    } else {
                        showPoliciesHTML = "";
                    }
                }
            }
        }
        totalHtmlValue = showPoliciesHTML;
        if (totalHtmlValue != "") {
            overlay.displayOverlay(totalHtmlValue);
            GetSlider();
        } else {
            showAlertBox("No Policy details for this customer..!");
            console.log("there is nothing to show");
        }
        $(".overlay-multipleCoverage .o-sub-content").css("min-height", "0px");
        /* $("#slidesHolder .slide:first-child").find("h2#policyDetailsBlock").addClass("active");
         $("#slidesHolder .slide:first-child").addClass("activeSlide");
         $(".o-box").css({"height":"560px !important"}); */
        $(".o-box .o-content").css({"height": "560px", "overflow": "hidden"});
        //$(".policyDetailsForall").slideToggle();
        //$(".o-box .o-box-load").append('<div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="closeOverlay" style="position:fixed;top:88%;left:38%;">Done</div>');
    },
    properityPolicyresponse: function () {
        var counter = 0;
        /* HOMEPAGERESPONSE.PROPERTYPOLICYCOUNT = 0;
         HOMEPAGERESPONSE.VEHICLEPOLICYCOUNT = 0;
         HOMEPAGERESPONSE.OTHERPOLICYCOUNT = 0; */
        HOMEPAGERESPONSE.PROPERTYCOVERAGE = [], HOMEPAGERESPONSE.PROPERTYCOVERAGELIMIT = [], HOMEPAGERESPONSE.VEHICLECOVERAGE = [], HOMEPAGERESPONSE.VEHICLECOVERAGELIMIT = [], HOMEPAGERESPONSE.OTHERCOVERAGE = [], HOMEPAGERESPONSE.OTHERCOVERAGELIMIT = [], HOMEPAGERESPONSE.PROPERTYCOVERAGEDEDUCTIBLE = [], HOMEPAGERESPONSE.VEHICLECOVERAGEDEDUCTIBLE = [], HOMEPAGERESPONSE.OTHERCOVERAGEDEDUCTIBLE = [], HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORVEHICLE = [], HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORPROPERTYPOLICY = [], HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFOROTHER = [], HOMEPAGERESPONSE.VEHICLEPRODUCTCOUNT = [], HOMEPAGERESPONSE.PROPERTYPRODUCTCOUNT = [], HOMEPAGERESPONSE.OTHERPRODUCTCOUNT = [], HOMEPAGERESPONSE.POLICYDETAILS = [], HOMEPAGERESPONSE.POLICYNUMBERDETAILS = [], HOMEPAGERESPONSE.CARRIERNUMBER = [], HOMEPAGERESPONSE.CARRIERNAME = [], HOMEPAGERESPONSE.EFFECTIVEDATE = [], HOMEPAGERESPONSE.EXPIRYDATE = [], HOMEPAGERESPONSE.NEXTPAYMENTDUEDATE = [], HOMEPAGERESPONSE.NEXTPAYMENTAMOUNTDUE = [], HOMEPAGERESPONSE.MODELNAME = [], HOMEPAGERESPONSE.PROPERTYINSURENCECITYANDSTATE = [], HOMEPAGERESPONSE.PROPERTYLOCATIONADDRESS = [], HOMEPAGERESPONSE.OTHERPRODUCTTYPE = [], HOMEPAGERESPONSE.PROPERTYZIPCODE = [], HOMEPAGERESPONSE.VEHICLEMAKE = [], HOMEPAGERESPONSE.VEHICLEYEAR = [], HOMEPAGERESPONSE.VEHICLEIDENTIFICATIONNUMBER = [];
        // console.log("resp>>>>>>>>>>>>properityPolicyresponse", resp);
        /*  if (resp == false) {
         return false;
         } else {
         if (resp.resultMap.TypeCode == "4011") { */
        HOMEPAGERESPONSE.POLICYDETAILS = CUSTOMER.AGENCY.ASSOCIATEDPOLICIES[0];
        var customerPolicyDetails = HOMEPAGERESPONSE.POLICYDETAILS;
        if (CUSTOMER.AGENCY.ASSOCIATEDPOLICIES[0] != undefined) {
            $.each(CUSTOMER.AGENCY.ASSOCIATEDPOLICIES[0], function (index, policyDetail) {
                HOMEPAGERESPONSE.PROPERTYPOLICYCOUNT = 0;
                HOMEPAGERESPONSE.VEHICLEPOLICYCOUNT = 0;
                HOMEPAGERESPONSE.OTHERPOLICYCOUNT = 0;
                if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                    if (policyDetail.carrierDetails.carrierId == sessionStorage.ownerId) {
                        if (policyDetail.PolicyCoverageDetails) {
                            HOMEPAGERESPONSE.POLICYCOVERAGEDETAILS = policyDetail.PolicyCoverageDetails;
                            counter++;
                            $.each(HOMEPAGERESPONSE.POLICYCOVERAGEDETAILS, function (index, policyCoverageDetail) {
                                if (policyCoverageDetail.propertyDetails) {
                                    HOMEPAGERESPONSE.PROPERTYPOLICYCOUNT++;
                                    var city = policyCoverageDetail.propertyDetails.city;
                                    var state = policyCoverageDetail.propertyDetails.state;
                                    var cityAndState = city + "," + state;
                                    var propertyLocationAddress = policyCoverageDetail.propertyDetails.locationaddress;
                                    var propertyZipcode = policyCoverageDetail.propertyDetails.zip;
                                    HOMEPAGERESPONSE.PROPERTYINSURENCECITYANDSTATE.push(cityAndState);
                                    HOMEPAGERESPONSE.PROPERTYLOCATIONADDRESS.push(propertyLocationAddress);
                                    HOMEPAGERESPONSE.PROPERTYZIPCODE.push(propertyZipcode);
                                    if (policyCoverageDetail.coverageDetails != undefined) {
                                        HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORPROPERTYPOLICY.push(policyCoverageDetail.coverageDetails.length);
                                        $.each(policyCoverageDetail.coverageDetails, function (index, coverageDetailsValue) {
                                            if (policyCoverageDetail.propertyDetails.propertyId == coverageDetailsValue.propertiesId) {
                                                if (coverageDetailsValue.coverage != undefined) {
                                                    HOMEPAGERESPONSE.PROPERTYCOVERAGE.push(coverageDetailsValue.coverage);
                                                } else {
                                                    HOMEPAGERESPONSE.PROPERTYCOVERAGE.push("");
                                                }
                                                if (coverageDetailsValue.limit != undefined) {
                                                    HOMEPAGERESPONSE.PROPERTYCOVERAGELIMIT.push(coverageDetailsValue.limit);
                                                } else {
                                                    HOMEPAGERESPONSE.PROPERTYCOVERAGELIMIT.push("");
                                                }
                                                if (coverageDetailsValue.deductible != undefined) {
                                                    HOMEPAGERESPONSE.PROPERTYCOVERAGEDEDUCTIBLE.push(coverageDetailsValue.deductible);
                                                } else {
                                                    HOMEPAGERESPONSE.PROPERTYCOVERAGEDEDUCTIBLE.push("");
                                                }
                                            } else {
                                                console.log("no match found");
                                            }
                                        });
                                    } else {
                                        console.log("no coverage details");
                                    }
                                } else if (policyCoverageDetail.vehicleDetails) {
                                    HOMEPAGERESPONSE.VEHICLEPOLICYCOUNT++;
                                    var make = policyCoverageDetail.vehicleDetails.make;
                                    var vehicleModel = policyCoverageDetail.vehicleDetails.model;
                                    var vehicleYear = policyCoverageDetail.vehicleDetails.year;
                                    var vehicleIdentificationNumber = policyCoverageDetail.vehicleDetails.vehicleIdentificationNumber;
                                    HOMEPAGERESPONSE.MODELNAME.push(vehicleModel);
                                    HOMEPAGERESPONSE.VEHICLEMAKE.push(make);
                                    HOMEPAGERESPONSE.VEHICLEYEAR.push(vehicleYear);
                                    HOMEPAGERESPONSE.VEHICLEIDENTIFICATIONNUMBER.push(vehicleIdentificationNumber);
                                    if (policyCoverageDetail.coverageDetails != undefined) {
                                        HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORVEHICLE.push(policyCoverageDetail.coverageDetails.length);
                                        $.each(policyCoverageDetail.coverageDetails, function (index, coverageDetailsValue) {
                                            if (policyCoverageDetail.vehicleDetails.vehicleWatercraftId == coverageDetailsValue.vehiclesWatercraftsId) {
                                                if (coverageDetailsValue.coverage != undefined) {
                                                    HOMEPAGERESPONSE.VEHICLECOVERAGE.push(coverageDetailsValue.coverage);
                                                } else {
                                                    HOMEPAGERESPONSE.VEHICLECOVERAGE.push("");
                                                }
                                                if (coverageDetailsValue.limit != undefined) {
                                                    HOMEPAGERESPONSE.VEHICLECOVERAGELIMIT.push(coverageDetailsValue.limit);
                                                } else {
                                                    HOMEPAGERESPONSE.VEHICLECOVERAGELIMIT.push("");
                                                }
                                                if (coverageDetailsValue.deductible != undefined) {
                                                    HOMEPAGERESPONSE.VEHICLECOVERAGEDEDUCTIBLE.push(coverageDetailsValue.deductible);
                                                } else {
                                                    HOMEPAGERESPONSE.VEHICLECOVERAGEDEDUCTIBLE.push("");
                                                }
                                            } else {
                                                console.log("no match found");
                                            }
                                        });
                                    } else {
                                        console.log("no coverage details");
                                    }
                                } else if (policyCoverageDetail.otherProductDetails) {
                                    HOMEPAGERESPONSE.OTHERPOLICYCOUNT++;
                                    var otherProductType = policyCoverageDetail.otherProductDetails.productType;
                                    HOMEPAGERESPONSE.OTHERPRODUCTTYPE.push(otherProductType);
                                    if (policyCoverageDetail.coverageDetails != undefined) {
                                        HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFOROTHER.push(policyCoverageDetail.coverageDetails.length);
                                        $.each(policyCoverageDetail.coverageDetails, function (index, coverageDetailsValue) {
                                            if (policyCoverageDetail.otherProductDetails.otherProductId == coverageDetailsValue.otherProductId) {
                                                if (coverageDetailsValue.coverage != undefined) {
                                                    HOMEPAGERESPONSE.OTHERCOVERAGE.push(coverageDetailsValue.coverage);
                                                } else {
                                                    HOMEPAGERESPONSE.OTHERCOVERAGE.push("");
                                                }
                                                if (coverageDetailsValue.limit != undefined) {
                                                    HOMEPAGERESPONSE.OTHERCOVERAGELIMIT.push(coverageDetailsValue.limit);
                                                } else {
                                                    HOMEPAGERESPONSE.OTHERCOVERAGELIMIT.push("");
                                                }
                                                if (coverageDetailsValue.deductible != undefined) {
                                                    HOMEPAGERESPONSE.OTHERCOVERAGEDEDUCTIBLE.push(coverageDetailsValue.deductible);
                                                } else {
                                                    HOMEPAGERESPONSE.OTHERCOVERAGEDEDUCTIBLE.push("");
                                                }
                                            } else {
                                                console.log("no match found");
                                            }
                                        });
                                    } else {
                                        console.log("no coverage details");
                                    }
                                }
                            });
                        } else {
                            console.log("PolicyCoverageDetails is not available");
                        }
                    } else {
                        console.log("Different carrier policies are identified");
                    }
                } else {
                    if (policyDetail.PolicyCoverageDetails) {
                        HOMEPAGERESPONSE.POLICYCOVERAGEDETAILS = policyDetail.PolicyCoverageDetails;
                        $.each(HOMEPAGERESPONSE.POLICYCOVERAGEDETAILS, function (index, policyCoverageDetail) {
                            if (policyCoverageDetail.propertyDetails) {
                                HOMEPAGERESPONSE.PROPERTYPOLICYCOUNT++;
                                var city = policyCoverageDetail.propertyDetails.city;
                                var state = policyCoverageDetail.propertyDetails.state;
                                var cityAndState = city + "," + state;
                                var propertyLocationAddress = policyCoverageDetail.propertyDetails.locationaddress;
                                var propertyZipcode = policyCoverageDetail.propertyDetails.zip;
                                HOMEPAGERESPONSE.PROPERTYINSURENCECITYANDSTATE.push(cityAndState);
                                HOMEPAGERESPONSE.PROPERTYLOCATIONADDRESS.push(propertyLocationAddress);
                                HOMEPAGERESPONSE.PROPERTYZIPCODE.push(propertyZipcode);
                                if (policyCoverageDetail.coverageDetails != undefined) {
                                    HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORPROPERTYPOLICY.push(policyCoverageDetail.coverageDetails.length);
                                    $.each(policyCoverageDetail.coverageDetails, function (index, coverageDetailsValue) {
                                        if (policyCoverageDetail.propertyDetails.propertyId == coverageDetailsValue.propertiesId) {
                                            if (coverageDetailsValue.coverage != undefined) {
                                                HOMEPAGERESPONSE.PROPERTYCOVERAGE.push(coverageDetailsValue.coverage);
                                            } else {
                                                HOMEPAGERESPONSE.PROPERTYCOVERAGE.push(undefined);
                                            }
                                            if (coverageDetailsValue.limit != undefined) {
                                                HOMEPAGERESPONSE.PROPERTYCOVERAGELIMIT.push(coverageDetailsValue.limit);
                                            } else {
                                                HOMEPAGERESPONSE.PROPERTYCOVERAGELIMIT.push(undefined);
                                            }
                                            if (coverageDetailsValue.deductible != undefined) {
                                                HOMEPAGERESPONSE.PROPERTYCOVERAGEDEDUCTIBLE.push(coverageDetailsValue.deductible);
                                            } else {
                                                HOMEPAGERESPONSE.PROPERTYCOVERAGEDEDUCTIBLE.push(undefined);
                                            }
                                        } else {
                                            console.log("no match found");
                                        }
                                    });
                                } else {
                                    console.log("no coverage details");
                                }
                            } else if (policyCoverageDetail.vehicleDetails) {
                                HOMEPAGERESPONSE.VEHICLEPOLICYCOUNT++;
                                var make = policyCoverageDetail.vehicleDetails.make;
                                var vehicleModel = policyCoverageDetail.vehicleDetails.model;
                                var vehicleYear = policyCoverageDetail.vehicleDetails.year;
                                var vehicleIdentificationNumber = policyCoverageDetail.vehicleDetails.vehicleIdentificationNumber;
                                HOMEPAGERESPONSE.MODELNAME.push(vehicleModel);
                                HOMEPAGERESPONSE.VEHICLEMAKE.push(make);
                                HOMEPAGERESPONSE.VEHICLEYEAR.push(vehicleYear);
                                HOMEPAGERESPONSE.VEHICLEIDENTIFICATIONNUMBER.push(vehicleIdentificationNumber);
                                if (policyCoverageDetail.coverageDetails != undefined) {
                                    HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORVEHICLE.push(policyCoverageDetail.coverageDetails.length);
                                    $.each(policyCoverageDetail.coverageDetails, function (index, coverageDetailsValue) {
                                        if (policyCoverageDetail.vehicleDetails.vehicleWatercraftId == coverageDetailsValue.vehiclesWatercraftsId) {
                                            if (coverageDetailsValue.coverage != undefined) {
                                                HOMEPAGERESPONSE.VEHICLECOVERAGE.push(coverageDetailsValue.coverage);
                                            } else {
                                                HOMEPAGERESPONSE.VEHICLECOVERAGE.push(undefined);
                                            }
                                            if (coverageDetailsValue.limit != undefined) {
                                                HOMEPAGERESPONSE.VEHICLECOVERAGELIMIT.push(coverageDetailsValue.limit);
                                            } else {
                                                HOMEPAGERESPONSE.VEHICLECOVERAGELIMIT.push(undefined);
                                            }
                                            if (coverageDetailsValue.deductible != undefined) {
                                                HOMEPAGERESPONSE.VEHICLECOVERAGEDEDUCTIBLE.push(coverageDetailsValue.deductible);
                                            } else {
                                                HOMEPAGERESPONSE.VEHICLECOVERAGEDEDUCTIBLE.push(undefined);
                                            }
                                        } else {
                                            console.log("no match found");
                                        }
                                    });
                                } else {
                                    console.log("no coverage details");
                                }
                            } else if (policyCoverageDetail.otherProductDetails) {
                                HOMEPAGERESPONSE.OTHERPOLICYCOUNT++;
                                var otherProductType = policyCoverageDetail.otherProductDetails.productType;
                                HOMEPAGERESPONSE.OTHERPRODUCTTYPE.push(otherProductType);
                                if (policyCoverageDetail.coverageDetails != undefined) {
                                    HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFOROTHER.push(policyCoverageDetail.coverageDetails.length);
                                    $.each(policyCoverageDetail.coverageDetails, function (index, coverageDetailsValue) {
                                        if (policyCoverageDetail.otherProductDetails.otherProductId == coverageDetailsValue.otherProductId) {
                                            if (coverageDetailsValue.coverage != undefined) {
                                                HOMEPAGERESPONSE.OTHERCOVERAGE.push(coverageDetailsValue.coverage);
                                            } else {
                                                HOMEPAGERESPONSE.OTHERCOVERAGE.push(undefined);
                                            }
                                            if (coverageDetailsValue.limit != undefined) {
                                                HOMEPAGERESPONSE.OTHERCOVERAGELIMIT.push(coverageDetailsValue.limit);
                                            } else {
                                                HOMEPAGERESPONSE.OTHERCOVERAGELIMIT.push(undefined);
                                            }
                                            if (coverageDetailsValue.deductible != undefined) {
                                                HOMEPAGERESPONSE.OTHERCOVERAGEDEDUCTIBLE.push(coverageDetailsValue.deductible);
                                            } else {
                                                HOMEPAGERESPONSE.OTHERCOVERAGEDEDUCTIBLE.push(undefined);
                                            }
                                        } else {
                                            console.log("no match found");
                                        }
                                    });
                                } else {
                                    console.log("no coverage details");
                                }
                            }
                        });
                    } else {
                        console.log("PolicyCoverageDetails is not available");
                    }
                }
                HOMEPAGERESPONSE.VEHICLEPRODUCTCOUNT.push(HOMEPAGERESPONSE.VEHICLEPOLICYCOUNT);
                HOMEPAGERESPONSE.PROPERTYPRODUCTCOUNT.push(HOMEPAGERESPONSE.PROPERTYPOLICYCOUNT);
                HOMEPAGERESPONSE.OTHERPRODUCTCOUNT.push(HOMEPAGERESPONSE.OTHERPOLICYCOUNT);
                HOMEPAGERESPONSE.POLICYNUMBERDETAILS.push(policyDetail.policyDetails.carrierPolicyNumber);
                HOMEPAGERESPONSE.CARRIERNUMBER.push(policyDetail.carrierDetails.phone.number);
                HOMEPAGERESPONSE.CARRIERNAME.push(policyDetail.carrierDetails.carrierName);
                HOMEPAGERESPONSE.EFFECTIVEDATE.push(policyDetail.policyDetails.effectiveDate);
                HOMEPAGERESPONSE.EXPIRYDATE.push(policyDetail.policyDetails.expirationDate);
                HOMEPAGERESPONSE.NEXTPAYMENTDUEDATE.push(policyDetail.policyDetails.nextPaymentDueDate);
                HOMEPAGERESPONSE.NEXTPAYMENTAMOUNTDUE.push(policyDetail.policyDetails.nextPaymentAmountDue);
            });
        } else {
            CUSTOMER.AGENCY.ASSOCIATEDPOLICIES = [];
        }
        /* } else {
         console.log("Condition was not satisfied");
         }
         } */
    },
    loadResetPassMailAlertBox: function () {
        var userOldPassword = "";
        var passwordValue = "";
        var retypePassword = "";
        var deepPath = "", page = "", data = "";
        userOldPassword = $("#id-reset-old-password").val();
        passwordValue = $("#id-reset-newpassword").val();
        var md5EncryptedPasswordForResetNewPwd = CryptoJS.MD5(passwordValue).toString();
        var md5EncryptedPasswordForResetOldPwd = CryptoJS.MD5(userOldPassword).toString();
        retypePassword = $("#id-reset-retype-password").val();
        userEmailId = "";
        deepPath = "changepassword";
        page = "changePasswordPage";
        data = {existingPassword: md5EncryptedPasswordForResetOldPwd, newPassword: md5EncryptedPasswordForResetNewPwd};
        if (passwordValue != "" && !passwordValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{10,128}$/)) {
            var error = "Your password is Invalid, please verify once";
            protocall.displaySpinner(false);
            showAlertBox(error);
        } else if (passwordValue != "" && retypePassword != "") {
            if (passwordValue == retypePassword) {
                $('.signup-error').html("");
                callback = protocall.view.resetPasswordResponse;
                var resp = utils.server.makeServerCall(page, data, callback, deepPath);
            } else {
                var error = "Your password is mismatched, please verify once";
                protocall.displaySpinner(false);
                showAlertBox(error);
            }
        } else {
            var error = "Please Provide all the details";
            protocall.displaySpinner(false);
            showAlertBox(error);
        }
    },
    resetPasswordResponse: function (data) {
        var information = "";
        if (data.result.resultMap.TypeCode == "4081") {
            information = "Please enter the password which do not match with old records";
            showAlertBox(information);
        } else if (data.result.resultMap.TypeCode == "4082") {
            information = "The old password whic you are entering is wrong,Please check once again";
            showAlertBox(information);
        } else if (data.result.resultMap.TypeCode == "4083") {
            information = "Your Password is changed successfully, Please login..!";
            showAlertBox(information);
            protocall.view.LogoutAuthenticateYes();
        } else {
            return false;
        }
    },
    loadResetPassAlertBox: function () {
        var html = staticTemplate.home.passwordResetAlertTemplate();
        overlay.displayOverlay(html);
        $(".o-box").css("width", "37%");
        $(".o-box").css("height", "128px");
        $(".o-box").css("top", "30%");
    },
    addVendorDetails: function () {
        var html = staticTemplate.home.addVendorDetailsTemplate();
        overlay.displayOverlay(html);
    },
    healthPolicy: function () {
        if (HOMEPAGERESPONSE.OTHERPOLICYCOUNT !== 0) {
            var html = staticTemplate.home.healthPolicyTemplate();
            overlay.displayOverlay(html);
            GetSlider();
        }
    },
    vehiclePolicy: function () {
        if (HOMEPAGERESPONSE.VEHICLEPOLICYCOUNT !== 0) {
            var html = staticTemplate.home.vehiclePolicyTemplate();
            overlay.displayOverlay(html);
            GetSlider();
        }
    },
    sendAppLink: function () {
        protocall.displaySpinner(true);
        sessionStorage.isSendAppLink = "true";
        var page = "pagesharewithrepoverlay";
        var data = {};
        var callback = utils.server.gotSendAppLinkResponse;
        var deepPath = "userlist";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    LoadAgencyInfo: function () {
        localStorage.setItem("SELECTED_SETTINGS_TAB", "AGENCY_TAB");
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.getItem("LOGIN_LABEL") != "Agency") {
                $(".settings-edit-bar").css("display", "none");
                sessionStorage.REFERENCE_TYPE = "agency_info";
            }

            //if (localStorage.LoginType == 'Admin') {
            $("#id-base_edit_box").css("display", "block");
            $("#id-base_preferred_edit_box").css("display", "none");
            $("#id-viewaddvendor").css("display", "none");
            $('.settings-agency-bar').css("background-color", "#f34f4e");
            $('#id-agency-view-load').css("color", "white");
            $('.settings-vendor-bar').css("background-color", "#ccc");
            $('#id-preferred-vendors-view-load').css("color", "black");
            sessionStorage.REFERENCE_TYPE = "agency_info";
            $(".agency-view-block").css({
                'display': 'block'
            });
            $(".preferred-vendor-block").css({
                'display': 'none'
            });
            //}
        } else {
            $('.settings-agency-bar').css("background-color", "#f34f4e");
            $('#id-agency-view-load').css("color", "white");
            $('.settings-vendor-bar').css("background-color", "#ccc");
            $('#id-preferred-vendors-view-load').css("color", "black");
            $('.success').css("display", "none");
            $('.error').css("display", "none");
            sessionStorage.REFERENCE_TYPE = "agency_info";
            $(".agency-view-block").css({
                'display': 'block'
            });
            $(".preferred-vendor-block").css({
                'display': 'none'
            });
            $(".preferred-vendor-remove-block").css({
                'display': 'none'
            });
            $(".vendor-detail-block").css({
                'display': 'none'
            });
            $(".settings-edit-bar").css({
                'display': 'block'
            });
            $(".removevendor-bar").css({
                'display': 'none'
            });
            $(".addvendor-bar").css({
                'display': 'none'
            });
        }
        if (IsVendorDataChanged === true) {
            editVendorSaveData();
            IsVendorDataChanged = false;
        }

        $("#id-canecelbutton").css("display", "none");
    },
    LoadPreferrredvendorInfo: function () {
        localStorage.setItem("SELECTED_SETTINGS_TAB", "PREFERRED_VENDORS");
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {

            //if (localStorage.LoginType == 'Admin') {
            $("#id-base_edit_box").css("display", "none");
            $("#id-base_preferred_edit_box").css("display", "block");
            $("#id-viewaddvendor").css("display", "block");
            $('.settings-vendor-bar').css("background-color", "#f34f4e");
            $('#id-preferred-vendors-view-load').css("color", "white");
            $('.settings-agency-bar').css("background-color", "#ccc");
            $('#id-agency-view-load').css("color", "black");
            sessionStorage.REFERENCE_TYPE = "vendor_info";
            $(".agency-view-block").css({
                'display': 'none'
            });
            $(".preferred-vendor-block").css({
                'display': 'block'
            });
            //}
        } else if (localStorage.getItem("LOGIN_LABEL") == "Agency" || localStorage.LoginType == "SuperAdmin") {
            $('.settings-vendor-bar').css("background-color", "#f34f4e");
            $('#id-preferred-vendors-view-load').css("color", "white");
            $('.settings-agency-bar').css("background-color", "#ccc");
            $('#id-agency-view-load').css("color", "black");
            $('.success').css("visibility", "hidden");
            $('.error').css("visibility", "hidden");
            sessionStorage.REFERENCE_TYPE = "agency_info";
            $(".agency-view-block").css({
                'display': 'none'
            });
            $(".preferred-vendor-block").css({
                'display': 'block'
            });
            $(".preferred-vendor-remove-block").css({
                'display': 'none'
            });
            $(".vendor-detail-block").css({
                'display': 'none'
            });
            $(".settings-edit-bar").css({
                'display': 'none'
            });
            $(".removevendor-bar").css({
                'display': 'block'
            });
            $(".addvendor-bar").css({
                'display': 'block'
            });
        } else {
            return false;
        }
        if (IsAgencyDataChanged === true) {
            editAgencySaveData();
            IsAgencyDataChanged = false;
        }
    },
    LoadAgencyRemove: function () {
        $(".agency-view-block").css({
            'display': 'none'
        });
        $(".preferred-vendor-block").css({
            'display': 'none'
        });
        $(".preferred-vendor-remove-block").css({
            'display': 'block'
        });
        $(".vendor-detail-block").css({
            'display': 'none'
        });
    },
    LoadVendorInfo: function () {
        $(".agency-view-block").css({
            'display': 'none'
        });
        $(".preferred-vendor-block").css({
            'display': 'none'
        });
        $(".preferred-vendor-remove-block").css({
            'display': 'none'
        });
        $(".vendor-detail-block").css({
            'display': 'block'
        });
        $(".settings-edit-bar").css({
            'display': 'block'
        });
        $(".removevendor-bar").css({
            'display': 'none'
        });
        $(".addvendor-bar").css({
            'display': 'none'
        });
        $("#id-canecelbutton").css("display", "none");
    },
    LoginAuthenticateYes: function () {
        protocall.displaySpinner(true);
        var label = $('#id-usertype').attr("data-logintype");
        var carrierID = $('#id-usertype').attr("data-carrierid");
        sessionStorage.ownerId = carrierID;
        var email = $('#email').val().trim();
        var password = $('#password').val();
        var md5EncryptedPasswordLogin = CryptoJS.MD5(password).toString();
        console.log("md5EncryptedPasswordLogin", md5EncryptedPasswordLogin);
        console.log("md5EncryptedPasswordLogin.toString()", md5EncryptedPasswordLogin.toString());
        var login = "yes";
        localStorage.setItem("LOGIN_LABEL", label);
        var type = localStorage.LoginType;
        if (type == undefined) {
            var type = "Admin";
            localStorage.LoginType = "Admin";
        }
        var EmployeeType = "";
        if (label == "Agency") {
            if (type == "Admin") {
                EmployeeType = "agencyowner";
            } else if (type == "Representatives") {
                EmployeeType = "agencyrepresentative";
            }
        } else if (label == "Carriers") {
            if (type == "Representatives") {
                EmployeeType = "carrierrepresentative";
            } else if (type == "Admin") {
                EmployeeType = "carrierowner";
            }
        }
        if (type == "SuperAdmin") {
            EmployeeType = "protocalladmin";
            var data = {employeeType: EmployeeType, userId: email, password: md5EncryptedPasswordLogin, agencyId: sessionStorage.ownerId, carrierId: sessionStorage.ownerId};
            var page = "login";
            var callback = utils.server.gotloginresponse;
            var deepPath = "employeeauthentication";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }
        if (label == "Agency") {
            var data = {employeeType: EmployeeType, userId: email, password: md5EncryptedPasswordLogin, agencyId: sessionStorage.ownerId};
            var page = "login";
            var callback = utils.server.gotloginresponse;
            var deepPath = "employeeauthentication";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }
        if (label == "Carriers") {
            var data = {employeeType: EmployeeType, userId: email, password: md5EncryptedPasswordLogin, carrierId: carrierID};
            var page = "login";
            var callback = utils.server.gotloginresponse;
            var deepPath = "employeeauthentication";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }
    }, LogoutAuthenticateYes: function () {
        var data = {};
        var page = "login_out";
        var callback = utils.server.gotloginresponse;
        var deepPath = "logoutfordashboard";
        utils.server.makeServerCall(page, data, null, deepPath);
        clearInterval(homePageUpdate);
        popUpContent.closePopUpContent();
        protocall.displaySpinner(true);
        protocall.setPageNavigation(LOGIN_PAGE);
        sessionStorage.setItem("HOME_PAGE_SELECTED_BUTTON", "");
        sessionStorage.clear();
        localStorage.clear();
        localStorage.LoginType = "Admin";
        sessionStorage.MYALERTSCOUNT = "";
        sessionStorage.ArchieveCOUNT = "";
        RESPONSE.AGENCY_ADMIN_TOTAL_DETAILS = [];
        RESPONSE.CARRIERAGENCYTOTALDETAILS = [];
        RESPONSE.customers_data = [];
        RESPONSE.AGENCYLOGIN_DATA = [];
        RESPONSE.CARRIERREP_DATA = [];
        RESPONSE.agencies_data = [];
        RESPONSE.carrierrepcustomers_data = [];
        RESPONSE.users = [];
        RESPONSE.AGENCYCARRIERTABDATA = [];
        RESPONSE.ASSOCIATEFEED = [];
        RESPONSE.myreps_data = [];
        CUSTOMER.AGENCY.CUSTOMERDATA = [];
        CUSTOMER.AGENCY.CUSTOMERDETAILS = [];
        CUSTOMER.AGENCY.ASSOCIATEDCARRIER = [];
        CUSTOMER.AGENCY.ASSOCIATEDAGENCY = [];
        CUSTOMER.AGENCY.ASSOCIATEDPOLICIES = [];
        CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVE = [];
        RESPONSE.SETTINGTAB_PreferredVendorDATA = [];
        $('body').css("background-image", "url(images/Background-pattern.png)");
        $('body').css("background-color", "#e9e9e9");
        sessionStorage.IDENDIFIER = "49c03e36-f3f1-4132-8115-2f74c8a7bae3";
        sessionStorage.IDENDIFIER_NAME = "Agency";
    },
    pushMessage: function () {
        protocall.displaySpinner(true);
        var html = staticTemplate.home.pushMessageTemplate();
        overlay.displayOverlay(html);
        protocall.displaySpinner(false);
        var nows = new Date();
        $('#datepicker').prop('min', nows.toISOString().substring(0, 10));
        $("#datepicker").keypress(function (event) {
            event.preventDefault();
        });
    }, privacy: function () {
        protocall.displaySpinner(true);
        page = "privacyoverlay";
        var data = {};
        callback = utils.server.gotPrivacyResponse;
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            deepPath = "carrierrepresentativenamewithlocation";
        } else {
            deepPath = "agencyrepresentativenamewithlocation";
        }
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    copyToClipBoardDocOverlay: function (e) {
        fnDeSelect();
        if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById("viewText"));
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(document.getElementById("viewText"));
            window.getSelection().addRange(range);
        }
    },
    staticPhotOverlayDisplay: function (e) {
        var currentTarget = $(e.currentTarget), photoCountValue = 0;
        var currentTargetName = currentTarget.attr("name");
        if (HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED && currentTargetName == "photosDocView") {
            photoCountValue = currentTarget.find("div.file-count.inline-block").text();
            HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
        } else {
            photoCountValue = currentTarget.find("span.doc-count.doc-count-placement").text();
        }
        if (photoCountValue == 0) {
            e.stopPropagation();
        } else {
            var clickedAlertID = currentTarget.attr("id");
            console.log("clickedID", clickedAlertID);
            var html = staticTemplate.home.showPhotsOverlayTemplate(clickedAlertID);
            overlay.displayOverlay(html);
            $("#printImageICON").addClass("printPageClass");
            if (RESPONSE.PICTUREDETAILS.length == 1) {
                $("#previousICON").css("display", "none");
                $("#nextICON").css("display", "none");
            } else {
                $("#nextICON").css("display", "block");
            }
            if (RESPONSE.DATEOFINCIDENTALERT[0] == "") {
                $('#photoOverlayIncidentDate').hide();
            } else {
                $('#photoOverlayIncidentDate').show();
            }
            if (RESPONSE.TIMEOFINCIDENTALERT[0] == "") {
                $('#photosOverlayIncidentTime').hide();
            } else {
                $('#photosOverlayIncidentTime').show();
            }
            if (RESPONSE.LOCATIONOFINCIDENTALERT[0] == "") {
                $('#photosOverlayIncidentLocation').hide();
            } else {
                $('#photosOverlayIncidentLocation').show();
            }
            if (RESPONSE.CUSTOMERNAMEOFINCIDENTALERT[0] == "") {
                $('#photosOverlayCustomerName').hide();
            } else {
                $('#photosOverlayCustomerName').show();
            }
            if (RESPONSE.CUSTOMEREMAILOFINCIDENTALERT[0] == "") {
                $('#photosOverlayCustomerEmail').hide();
            } else {
                $('#photosOverlayCustomerEmail').show();
            }
            if (RESPONSE.CUSTOMERPHONEOFINCIDENTALERT[0] == "") {
                $('#photosOverlayCustomerPhone').hide();
            } else {
                $('#photosOverlayCustomerPhone').show();
            }
            overlay.sliderControl();
            $("#thumbNailViewForImages div:nth-child(1)").addClass("activeAudio");
        }
    },
    staticAudioOverlayDisplay: function (e) {
        console.log("staticAudioOverlayDisplay");
        var currentTarget = $(e.currentTarget), audioCountValue = 0;
        var currentTargetName = currentTarget.attr("name");
        console.log("staticAudioOverlayDisplay currentTarget", currentTarget);
        if (HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED && currentTargetName == "voiceDocView") {
            audioCountValue = currentTarget.find("div.file-count.inline-block").text();
            HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
        } else {
            audioCountValue = currentTarget.find("span.doc-count.doc-count-placement").text();
        }
        if (audioCountValue == 0) {
            return true;
        } else {
            var clickedAlertID = currentTarget.attr("id");
            console.log("clickedID", clickedAlertID);
            var html = staticTemplate.home.showAudioOverlayTemplate(clickedAlertID);
            overlay.displayOverlay(html);
            overlay.audioInit();
            $("#thumbNailViewForVoice div:nth-child(1)").addClass("activeAudio");
        }
    },
    staticDocumentOverlayDisplay: function (e) {
        console.log("staticDocumentOverlayDisplay currentTarget", $(e.currentTarget));
        var currentTarget = $(e.currentTarget), docCountValue = 0;
        var currentTargetName = currentTarget.attr("name");
        if (HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED && currentTargetName == "textDocView") {
            docCountValue = currentTarget.find("div.file-count.inline-block").text();
            HOMEPAGERESPONSE.RELATEDFEEDSLOADED = false;
        } else {
            docCountValue = currentTarget.find("span.doc-count.doc-count-placement").text();
        }
        if (docCountValue == 0) {
            return true;
        } else {
            var clickedAlertID = currentTarget.attr("id");
            var html = staticTemplate.home.showDocumentOverlayTemplate(clickedAlertID);
            overlay.displayOverlay(html);
            overlay.documentInIt();
            overlay.centerIt();
            if (sessionStorage.overflowAuto == "true") {
                $("#samplediv").css("overflow-x", "auto");
            }
            $("#printTextOverlay").addClass("printPageClass");
            $("#thumbNailViewForText div:nth-child(1)").addClass("activeAudio");
            if (RESPONSE.DATEOFINCIDENTALERT[0] == "") {
                $('#textOverlayIncidentAlert').hide();
            } else {
                $('#textOverlayIncidentAlert').show();
            }
            if (RESPONSE.TIMEOFINCIDENTALERT[0] == "") {
                $('#textOverlayIncidentTime').hide();
            } else {
                $('#textOverlayIncidentTime').show();
            }
            if (RESPONSE.LOCATIONOFINCIDENTALERT[0] == "") {
                $('#textOverlayIncidentLocation').hide();
            } else {
                $('#textOverlayIncidentLocation').show();
            }
            if (RESPONSE.CUSTOMERNAMEOFINCIDENTALERT[0] == "") {
                $('#textOverlayCustomerName').hide();
            } else {
                $('#textOverlayCustomerName').show();
            }
            if (RESPONSE.CUSTOMEREMAILOFINCIDENTALERT[0] == "") {
                $('#textOverlayCustomerMailId').hide();
            } else {
                $('#textOverlayCustomerMailId').show();
            }
            if (RESPONSE.CUSTOMERPHONEOFINCIDENTALERT[0] == "") {
                $('#textOverlayPhoneNumber').hide();
            } else {
                $('#textOverlayPhoneNumber').show();
            }
            if (RESPONSE.OTHERPARTYNAMES[0] == "") {
                $('#textOverlayOtherPartyName').hide();
            } else {
                $('#textOverlayOtherPartyName').show();
            }
            if (RESPONSE.ROLE[0] == "") {
                $('#textOverlayRole').hide();
            } else {
                $('#textOverlayRole').show();
            }
            if (RESPONSE.PHONE[0] == "") {
                $('#textOverlayPhone').hide();
            } else {
                $('#textOverlayPhone').show();
            }
            if (RESPONSE.ADDRESS[0] == "") {
                $('#textOverlayAddress').hide();
            } else {
                $('#textOverlayAddress').show();
            }
            if (RESPONSE.INSURANCECO[0] == "") {
                $('#textOverlayInsurence').hide();
            } else {
                $('#textOverlayInsurence').show();
            }
            if (RESPONSE.POLICY[0] == "") {
                $('#textOverlayPolicy').hide();
            } else {
                $('#textOverlayPolicy').show();
            }
            if (RESPONSE.VEHICLEMODEL[0] == "") {
                $('#textOverlayModel').hide();
            } else {
                $('#textOverlayModel').show();
            }
            if (RESPONSE.VEHICLENO[0] == "") {
                $('#textOverlayAutoLicensePlate').hide();
            } else {
                $('#textOverlayAutoLicensePlate').show();
            }
            if (RESPONSE.DRIVINGLICENCESTATE[0] == "") {
                $('#textOverlayDriversLicenseState').hide();
            } else {
                $('#textOverlayDriversLicenseState').show();
            }
            if (RESPONSE.DRIVINGLICENCENUMBER[0] == "") {
                $('#textOverlayDriversLicenseNumber').hide();
            } else {
                $('#textOverlayDriversLicenseNumber').show();
            }
            if (RESPONSE.INJURIES[0] == "") {
                $('#textOverlayInjuries').hide();
            } else {
                $('#textOverlayInjuries').show();
            }
            if (RESPONSE.OTHERINFORMATION[0] == "") {
                $('#textOverlayOtherInfo').hide();
            } else {
                $('#textOverlayOtherInfo').show();
            }
        }
    },
    printOverlayPage: function () {
        //$("#page").addClass("noprint");
        //$("footer").addClass("noprint");
        //$("#downloadTextLink").addClass("noprint");
        //$("#downloadImageLink").addClass("noprint");
        //$("#printTextOverlay").addClass("noprint");
        //$("#thumbNailViewForText").addClass("noprint");
        //$("#thumbNailViewForImages").addClass("noprint");
        //$("#printImageICON").addClass("noprint");
        //$("#previousICON").addClass("noprint");
        //$("#nextICON").addClass("noprint");
        //$(".printHeaderForText").css("display", "block");
        window.print();
    },
    editAgencyPic: function () {
        var html = staticTemplate.home.editAgencyPicTemplate();
        overlay.displayOverlay(html);
        $('#id-agencyprofilelogo').attr('src', sessionStorage.agencyLogo);
    },
    LoadAgencyEdit: function () {
        editDataInfo();
    },
    matchReleaseClaimAlert: function (e) {
        var currentTarget = $(e.currentTarget);
        var policyIdForCurrentTarget = currentTarget.attr("id");
        if ((HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy == "Completed") && (sessionStorage.loginType == "CarrierRepresentative" || localStorage.getItem("LOGIN_LABEL") == "Agency")) {
            showAlertBox("This policy is already matched by the carrier");
        } else {
            if (HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy == "Completed") {
                var isCurrentTabAlreadySelected = currentTarget.hasClass("selected-tab");
                if (isCurrentTabAlreadySelected) {
                    showAlertBox("This policy is already matched by the Carrier");
                } else {
                    if (policyIdForCurrentTarget == sessionStorage.seletedRadioButtonId) {
                        protocall.view.matchPolicyToCarrier(currentTarget);
                    } else {
                        showAlertBox("Please select radio button before you Match & Release the claim");
                    }
                }
            } else if (sessionStorage.loginType == "CarrierAdmin" && HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy == "MatchedReleased") {
                var isCurrentTabAlreadySelected = currentTarget.hasClass("selected-tab");
                if (isCurrentTabAlreadySelected || policyIdForCurrentTarget == sessionStorage.seletedRadioButtonId) {
                    var policyIdForCurrentTarget = currentTarget.attr("id");
                    $.each(RESPONSE.POLICYIDS, function (index, policyIdValue) {
                        if (policyIdForCurrentTarget == policyIdValue) {
                            console.log(currentTarget.attr("data-type", ""));
                            $(".matchandrelease").removeClass("selected-tab");
                            currentTarget.addClass("selected-tab");
                            var incidentDate = currentTarget.find(".incidentDateSpan").text(),
                                    carrierId = currentTarget.find(".carrierIdSpan").text(),
                                    policyId = currentTarget.find(".policyIdSpan").text(), policyType = currentTarget.find(".policyTypeSpan").text(),
                                    data = {"incidentId": incidentDate, "carrierId": carrierId, "policyId": policyId
                                        , "alertId": HOMEPAGERESPONSE.COMMONUSERDETAILS.alertId, "type": policyType},
                            page = "home",
                                    deepPath = "matchandrelease",
                                    callback = protocall.view.matchAndOrReleaseClaim;
                            console.log("incidentId", incidentDate);
                            console.log("carrierId", carrierId);
                            console.log("policyId", policyId);
                            console.log("alertId", HOMEPAGERESPONSE.COMMONUSERDETAILS.alertId);
                            console.log("type", policyType);
                            localStorage.setItem("matchedAndReleasedPolicyId", policyId);
                            var resp = utils.server.makeServerCall(page, data, callback, deepPath);
                        } else {
                            console.log("No Matching Policy Id");
                        }
                    });
                } else {
                    showAlertBox("Please select radio button before you Match & Release the claim");
                }
            } else {
                var isCurrentTabAlreadySelected = currentTarget.hasClass("selected-tab");
                if (isCurrentTabAlreadySelected) {
                    showAlertBox("This policy is already matched by the carrier");
                } else {
                    if (policyIdForCurrentTarget == sessionStorage.seletedRadioButtonId) {
                        protocall.view.matchPolicyToCarrier(currentTarget);
                    } else {
                        showAlertBox("Please select radio button before you Match & Release the claim");
                    }
                }
            }
        }
    },
    matchPolicyToCarrier: function (currentTarget) {
        RESPONSE.MATCHEDPOLICYIDFORMATCHANDRELEASE = "";
        var policyIdForCurrentTarget = currentTarget.attr("id");
        if (policyIdForCurrentTarget == sessionStorage.seletedRadioButtonId) {
            $.each(RESPONSE.POLICYIDS, function (index, policyIdValue) {
                if (policyIdForCurrentTarget == policyIdValue) {
                    console.log(currentTarget.attr("data-type", ""));
                    $(".matchandrelease").removeClass("selected-tab");
                    currentTarget.addClass("selected-tab");
                    var incidentDate = currentTarget.find(".incidentDateSpan").text(),
                            carrierId = currentTarget.find(".carrierIdSpan").text(),
                            policyId = currentTarget.find(".policyIdSpan").text(), policyType = currentTarget.find(".policyTypeSpan").text(),
                            data = {"incidentId": incidentDate, "carrierId": carrierId, "policyId": policyId
                                , "alertId": HOMEPAGERESPONSE.COMMONUSERDETAILS.alertId, "type": policyType},
                    page = "home",
                            deepPath = "matchandrelease",
                            callback = protocall.view.matchAndOrReleaseClaim;
                    localStorage.setItem("matchedAndReleasedPolicyId", policyId);
                    var resp = utils.server.makeServerCall(page, data, callback, deepPath);
                } else {
                    console.log("No Matching Policy Id");
                }
            });
        } else {
            showAlertBox("Please select radio button before you Match & Release the claim");
        }
    },
    matchClaimAlert: function (e) {
        RESPONSE.MATCHEDPOLICYIDFORMATCH = "";
        var currentTarget = $(e.currentTarget);
        var policyIdForCurrentTarget = currentTarget.attr("id");
        var isCurrentTabAlreadySelected = currentTarget.hasClass("selected-tab");
        if (isCurrentTabAlreadySelected) {
            showAlertBox("This policy is already matched");
        } else {
            if (policyIdForCurrentTarget == sessionStorage.seletedRadioButtonId) {
                $.each(RESPONSE.POLICYIDS, function (index, policyIdValue) {
                    if (policyIdForCurrentTarget == policyIdValue) {
                        currentTarget.attr("data-type", "");
                        $(".match").removeClass("selected-tab");
                        currentTarget.addClass("selected-tab");
                        var incidentDate = currentTarget.find(".incidentDateSpan").text(),
                                carrierId = currentTarget.find(".carrierIdSpan").text(),
                                policyId = currentTarget.find(".policyIdSpan").text(), policyType = currentTarget.find(".policyTypeSpan").text(),
                                data = {"incidentId": incidentDate, "carrierId": carrierId, "policyId": policyId
                                    , "alertId": HOMEPAGERESPONSE.COMMONUSERDETAILS.alertId, "type": policyType},
                        page = "home",
                                deepPath = "matched",
                                callback = protocall.view.matchAndOrReleaseClaim;
                        localStorage.setItem("matchedPolicyId", policyId);
                        //RESPONSE.MATCHEDPOLICYIDFORMATCH = policyId;
                        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
                    }
                });
            } else {
                showAlertBox("Please select radio button before you Match the claim");
            }
        }
        /* if (policyIdForCurrentTarget == sessionStorage.seletedRadioButtonId) {
         $.each(RESPONSE.POLICYIDS, function (index, policyIdValue) {
         if (policyIdForCurrentTarget == policyIdValue) {
         //currentTarget.css({"cursor": "default", "background": "#f34f4e"});
         //currentTarget.attr("href", "javascript:void(0);");
         currentTarget.attr("data-type", "");
         $(".match").removeClass("selected-tab");
         currentTarget.addClass("selected-tab");
         var incidentDate = currentTarget.find(".incidentDateSpan").text(),
         carrierId = currentTarget.find(".carrierIdSpan").text(),
         policyId = currentTarget.find(".policyIdSpan").text(), policyType = currentTarget.find(".policyTypeSpan").text(),
         data = {"incidentId": incidentDate, "carrierId": carrierId, "policyId": policyId
         , "alertId": HOMEPAGERESPONSE.COMMONUSERDETAILS.alertId, "type": policyType},
         page = "home",
         deepPath = "matched",
         callback = protocall.view.matchAndOrReleaseClaim;
         localStorage.setItem("matchedPolicyId", policyId);
         //RESPONSE.MATCHEDPOLICYIDFORMATCH = policyId;
         var resp = utils.server.makeServerCall(page, data, callback, deepPath);
         }
         });
         } else {
         showAlertBox("Please select radio button before you Match the claim");
         } */
    },
    matchAndOrReleaseClaim: function (result) {
        console.log("matchAndOrReleaseClaim>>>>>>>>>>>>>>>>", result);
        if (result.resultMap.TypeCode == "4038") {
            var html = staticTemplate.home.matchReleaseClaimTemplate(result.resultMap.AlertMessage);
            overlay.displayOverlay(html);
            $(".o-box").css("height", "105px");
            $(".o-box").css("width", "28%");
            $(".o-box").css("top", "180px");
        } else if (result.resultMap.TypeCode == "4036") {
            var html = staticTemplate.home.matchReleaseClaimTemplate(result.resultMap.AlertMessage);
            overlay.displayOverlay(html);
            $(".o-box").css("height", "105px");
            $(".o-box").css("width", "28%");
            $(".o-box").css("top", "180px");
        } else {
            return false;
        }
    },
    loadForgotPasswordOverlay: function () {
        var html = staticTemplate.myreps.forgotPasswordTemplate();
        overlay.displayOverlay(html);
        $(".o-box").css("height", "195px");
        $(".o-box").css("width", "36.2%");
        $(".o-box").css("top", "180px");
    },
    loadInviteReps: function () {
        var html = staticTemplate.myreps.inviteRepsTemplate();
        overlay.displayOverlay(html);
        $(".o-box").css("height", "195px");
        $(".o-box").css("width", "36.2%");
        $(".o-box").css("top", "180px");
    },
    sendInviteReps: function (e) {
        protocall.InviteRep.sendemailinvite(e);
    },
    loadAssignToReps: function () {
        var html = staticTemplate.home.assignToRepTemplate();
        overlay.displayOverlay(html);
    },
    buildHomeMenuBlk: function (page, breadCrumbObj) {
        var ArchiveHtml = template.GetarchiveMenu();
        $(".mb-submenu").empty();
        $(".mb-submenu").append($(ArchiveHtml));
    }, buildSubMenuBlk: function (page, breadCrumbObj) {
        var subMenuBlockTemplate = template.subMenuBlk(),
                subMenuSortHTML = template.subMenuSortHTML(),
                subMenuBreadCrumbHTML = template.subMenuBreadCrumbHTML(),
                subMenuTabHTML = template.subMenuTabHTML();
        var subMenuObj = "";
        if (page === HOME_PAGE) {
            subMenuObj = SUB_MENU.HOME;
        } else if (page === CARRIERS_PAGE) {
            subMenuObj = SUB_MENU.CARRIERS;
        } else if (page === CUSTOMERS_PAGE) {
            subMenuObj = SUB_MENU.CUSTOMERS;
        } else if (page === MY_REP_PAGE) {
            subMenuObj = SUB_MENU.MY_REPS;
        } else if (page === SETTINGS_PAGE) {
            subMenuObj = SUB_MENU.SETTINGS;
        } else if (page === PROFILE_PAGE) {
            subMenuObj = SUB_MENU.PROFILE;
        } else {
            subMenuObj = "";
        }
        if (subMenuObj !== "") {
            var bcTotalHTML = "";
            if (subMenuObj.BREADCRUMB != "" && subMenuObj.BREADCRUMB.length > 0) {
                var bcHTML = "";
                bcTotalHTML = "";
                var isBCNamePresent = "display:none;";
                var customerName = "";
                if (breadCrumbObj && breadCrumbObj != undefined) {
                    isBCNamePresent = "display:inline-block;"
                    customerName = breadCrumbObj.customerName;
                }
                for (var bc = 0; bc < subMenuObj.BREADCRUMB.length; bc++) {
                    var bcHTML = template.subMenuBreadCrumbHTML();
                    var titleSplitArray = subMenuObj.BREADCRUMB[bc].TITLE.split("_");
                    var hrefBCTags = "", titleBCName = "";
                    if (titleSplitArray && titleSplitArray.length > 0) {
                        for (var tit = 0; tit < titleSplitArray.length; tit++) {
                            hrefBCTags = hrefBCTags + titleSplitArray[tit];
                            titleBCName = titleBCName + " " + titleSplitArray[tit];
                        }
                    } else {
                        hrefBCTags = subMenuObj.BREADCRUMB[bc].TITLE;
                        titleBCName = subMenuObj.BREADCRUMB[bc].TITLE;
                    }
                    bcHTML = bcHTML.replace(/{{bc-title}}/g, hrefBCTags);
                    bcHTML = bcHTML.replace(/{{bc-name-title}}/g, titleBCName);
                    bcHTML = bcHTML.replace(/{{bc-icon-class}}/g, subMenuObj.BREADCRUMB[bc].ICON_CLASS);
                    bcHTML = bcHTML.replace(/{{isBC_Name}}/g, isBCNamePresent);
                    bcHTML = bcHTML.replace(/{{customer-name}}/g, customerName);
                    bcTotalHTML = bcTotalHTML + bcHTML;
                }

            }
            var tabTotalHTML = "";
            if (subMenuObj.TABS != "" && subMenuObj.TABS.length > 0) {
                var tabHtml = "";
                tabTotalHTML = "";
                var isSubMenuIconClass = "display:none;", isSubMenuCountClass = "display:none;";
                var subMenuTabCount = "";
                for (var t = 0; t < subMenuObj.TABS.length; t++) {
                    var tabHtml = template.subMenuTabHTML();
                    isSubMenuIconClass = (subMenuObj.TABS[t].ICON_CLASS != "") ? "display:inline-block;" : "display:none;";
                    isSubMenuCountClass = (subMenuObj.TABS[t].COUNT != "") ? "display:inline-block;" : "display:none;";
                    var titleSplitArray = subMenuObj.TABS[t].TITLE.split("_");
                    var hrefTabTags = "", titleTabName = "";
                    if (titleSplitArray && titleSplitArray.length > 0) {
                        for (var tit = 0; tit < titleSplitArray.length; tit++) {
                            hrefTabTags = hrefTabTags + titleSplitArray[tit];
                            titleTabName = titleTabName + " " + titleSplitArray[tit];
                        }
                    } else {
                        hrefTabTags = subMenuObj.BREADCRUMB[bc].TITLE;
                        titleTabName = subMenuObj.BREADCRUMB[bc].TITLE;
                    }
                    tabHtml = tabHtml.replace(/{{subMenuTab-name}}/g, hrefTabTags);
                    tabHtml = tabHtml.replace(/{{subMenuTab-name-title}}/g, titleTabName);
                    tabHtml = tabHtml.replace(/{{subMenuTab-icon-class}}/g, subMenuObj.TABS[t].ICON_CLASS);
                    tabHtml = tabHtml.replace(/{{isSubMenuTabIconCl}}/g, isSubMenuIconClass);
                    tabHtml = tabHtml.replace(/{{isSubMenuTabCountCl}}/g, isSubMenuCountClass);
                    tabHtml = tabHtml.replace(/{{subMenuTab-count}}/g, subMenuObj.TABS[t].COUNT);
                    tabTotalHTML = tabTotalHTML + tabHtml;
                }
            }
            if (breadCrumbObj && breadCrumbObj != undefined) {
                tabTotalHTML = "";
            }
            var tabsWithSortHTML = "";
            if (subMenuObj.ISSORTBY) {
                var sortHtml = template.subMenuSortHTML();
                tabsWithSortHTML = sortHtml + tabTotalHTML;
            } else {
                tabsWithSortHTML = tabTotalHTML;
            }
            subMenuBlockTemplate = subMenuBlockTemplate.replace(/{{breadcrumb_block}}/g, bcTotalHTML);
            subMenuBlockTemplate = subMenuBlockTemplate.replace(/{{tab_block}}/g, tabsWithSortHTML);
            $(".mb-submenu").empty();
            $(".mb-submenu").append($(subMenuBlockTemplate));
            if (HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED) {
                $("#subMenuToShow").css("display", "block");
                $("#subMenuToShow").html("View Archived >");
            } else if (HOMEPAGERESPONSE.POLICYALERTCLICKED) {
                $("#subMenuToShow").css("display", "block");
                $("#subMenuToShow").html("Policies >");
            } else if (HOMEPAGERESPONSE.INCIDENTALERTSCLICKED) {
                $("#subMenuToShow").css("display", "block");
                $("#subMenuToShow").html("Incidents >");
            } else {
                $("#subMenuToShow").css("display", "none");
            }
        }
    },
    displayOrignalImage: function (currentTarget) {
        var mainImageHTML = "";
        $("#thumbNailViewForImages>div").removeClass("activeAudio");
        currentTarget.addClass("activeAudio");
        var currentMediaID = currentTarget.attr("name"), mainAudioHTML = "", stateName = "";
        console.log("currentMediaID", currentMediaID);
        var count = 1;
        $.each(RESPONSE.PICTUREDETAILS, function (i, element) {
            console.log("media id", element.mediaId);
            if (currentMediaID == element.mediaId) {
                $("#downloadImageLink").attr("href", "http://2-dot-proto-call-test.appspot.com/downloadforpicture?key=" + element.file + "&&fileName=" + sessionStorage.MEDIAFILENAME + "&downloadType=.jpg&count=" + count + "");
                mainImageHTML = '<img src=' + "http://2-dot-proto-call-test.appspot.com/downloadforpicture?key=" + element.file + "&&fileName=" + sessionStorage.MEDIAFILENAME + "&downloadType=.jpg&count=" + count + "" + '  style="max-height: 220px;max-width: 300px;" />';
                imageInformationHTML = element.fileName;
                if (element.residentialCity != undefined && element.residentialCity != null && element.residentialCity != "") {
                    stateName = "," + element.residentialCity;
                } else {
                    stateName = " ";
                }
            }
            count++;
        });
        $("#viewImage").html(mainImageHTML);
        $("#imageinformation").html(imageInformationHTML);
        $("#locationInformation").html(stateName);
    },
    displayOrignalDoc: function (currentTarget) {
        $("#thumbNailViewForText>div").removeClass("activeAudio");
        currentTarget.addClass("activeAudio");
        var currentDocName = "", phoneNumber = "", addressValue = "";
        var currentOtherPartyID = currentTarget.find("p").attr("id"), mainAudioHTML = "";
        console.log("currentOtherPartyID");
        var count = 1;
        $.each(RESPONSE.OTHERPARTYDETAILS, function (i, element) {
            console.log("media id", element.fileName);
            if (currentOtherPartyID == element.otherPartyId) {

                currentDocName = element.fileName;
                if (element.fileName == undefined) {
                    element.fileName = "";
                }
                if (element.role == undefined) {
                    element.role = "";
                }
                if (element.phone == undefined) {
                    phoneNumber = "";
                } else {
                    phoneNumber = element.phone.number;
                }
                if (element.address == undefined) {
                    addressValue = "";
                } else {
                    addressValue = element.address.address;
                }
                if (element.carrier == undefined) {
                    element.carrier = "";
                }
                if (element.policyNumber == undefined) {
                    element.policyNumber = "";
                }
                if (element.vehicleIdentificationNumber == undefined) {
                    element.vehicleIdentificationNumber = "";
                }
                if (element.model == undefined) {
                    element.model = "";
                }
                if (element.driverLicenseState == undefined) {
                    element.driverLicenseState = "";
                }
                if (element.driverLicenseNumber == undefined) {
                    element.driverLicenseNumber = "";
                }
                if (element.injuries == undefined) {
                    element.injuries = "";
                }
                if (element.otherInformation == undefined) {
                    element.otherInformation = "";
                }

                var otherPartyName = "";
                if (element.otherPartyName == undefined) {
                    otherPartyName = "";
                } else {
                    otherPartyName = element.otherPartyName;
                }

                var rootElement = RESPONSE.ROOTELEMENT;
                var dateOfIncident = "", timeOfIncident = "", locationOfIncident = "", customerNameOfIncident = "", customerEmailOfIncident = "", customerPhoneOfIncident = "";
                if (rootElement.IncidentDetails.timeStamp !== undefined) {
                    var audioTimeStamp1 = rootElement.IncidentDetails.timeStamp;
                    var audioTime1 = moment(Number(audioTimeStamp1)).tz('America/New_York').format('MM/DD/YYYY');
                    dateOfIncident = (audioTime1);
                }
                if (rootElement.IncidentDetails.timeStamp !== undefined) {
                    var audioTimeStamp1 = rootElement.IncidentDetails.timeStamp;
                    var audioTime1 = moment(Number(audioTimeStamp1)).tz('America/New_York').format('h:mm:ss');
                    timeOfIncident = (audioTime1);
                }
                if (rootElement.IncidentDetails.incidentState !== undefined) {
                    //locationOfIncident = (rootElement.IncidentDetails.incidentCity);
                    locationOfIncident = rootElement.IncidentDetails.incidentCity + "," + rootElement.IncidentDetails.incidentState;
                    try {
                        locationOfIncident = incidentLocation.replace("undefined,", "");
                    } catch (e) {
                        locationOfIncident = "";
                    }
                } else {
                    locationOfIncident = "";
                }

                try {
                    if (rootElement.userDetails.firstName !== undefined) {
                        var firstname = rootElement.userDetails.firstName;
                        if (rootElement.userDetails.lastName !== undefined) {
                            firstname = firstname + " " + rootElement.userDetails.lastName;
                        }
                        customerNameOfIncident = (firstname);
                    }
                } catch (e) {
                    try {
                        if (rootElement.userDetails.name !== undefined) {
                            var firstname = rootElement.userDetails.name;
                            customerNameOfIncident = (firstname);
                        }
                    } catch (e1) {

                    }
                }
                try {
                    if (rootElement.userDetails.emailId.email !== undefined) {
                        customerEmailOfIncident = (rootElement.userDetails.emailId.email);
                    }
                } catch (e) {

                }
                try {
                    if (rootElement.userDetails.phone.number !== undefined) {
                        customerPhoneOfIncident = (rootElement.userDetails.phone.number);
                    }
                } catch (e) {

                }


                mainDocHTML = '<div class="leftDiv" style="  width: 100%;">'
                        + '<p id="textOverlayIncidentAlert">'
                        + '<span class="firstSpan" style="font-size: 14px;">Date Of Incident Alert</span>'
                        + '<span class="secondSpan" style="font-size: 14px;">' + dateOfIncident + '</span>'
                        + '</p>'

                        + '<p id="textOverlayIncidentTime">'
                        + '<span class="firstSpan" style="font-size: 14px;">Time Of Incident Alert</span>'
                        + '<span class="secondSpan" style="font-size: 14px;">' + timeOfIncident + '</span>'
                        + '</p>'

                        + '<p id="textOverlayIncidentLocation">'
                        + '<span class="firstSpan" style="font-size: 14px;">Location Of Incident Alert</span>'
                        + '<span class="secondSpan" style="font-size: 14px;">' + locationOfIncident + '</span>'
                        + '</p>'

                        + '<p id="textOverlayCustomerName">'
                        + '<span class="firstSpan" style="font-size: 14px;">Customer\'s Name</span>'
                        + '<span class="secondSpan" style="font-size: 14px;">' + customerNameOfIncident + '</span>'
                        + '</p>'

                        + '<p id="textOverlayCustomerMailId">'
                        + '<span class="firstSpan" style="font-size: 14px;">Customer\'s Email Address</span>'
                        + '<span class="profile-result-cls secondSpan" style="font-size: 14px;">' + customerEmailOfIncident + '</span>'
                        + '</p>'

                        + '<p id="textOverlayPhoneNumber">'
                        + '<span class="firstSpan" style="font-size: 14px;">Customer\'s Phone</span>'
                        + '<span class="secondSpan" style="font-size: 14px;">' + customerPhoneOfIncident + '</span>'
                        + '</p>'

                        + '<p id="nameOfTheTextDoc" style="padding-top: 18px;">'
                        + '<span class="firstSpan">Name</span>'
                        + '<span class="secondSpan" style="  margin-left: 0px;">' + otherPartyName + '</span>'
                        + '</p>'
                        + '<p id="roleOfTheTextDoc">'
                        + '<span class="firstSpan">Role</span>'
                        + '<span class="secondSpan">' + element.role + '</span>'
                        + '</p>'
                        + '<p id="phoneOfTheTextDoc">'
                        + '<span class="firstSpan">Phone</span>'
                        + '<span class="secondSpan">' + phoneNumber + '</span>'
                        + '</p>'
                        + '<p id="addressOfTheTextDoc">'
                        + '<span class="firstSpan">Address</span>'
                        + '<span class="secondSpan">' + addressValue + '</span>'
                        + '</p>'
                        + '<p id="carrierOfTheTextDoc">'
                        + '<span class="firstSpan">Insurance co</span>'
                        + '<span class="secondSpan">' + element.carrier + '</span>'
                        + '</p>'
                        + '<p id="policyOfTheTextDoc">'
                        + '<span class="firstSpan">Policy #</span>'
                        + '<span class="secondSpan">' + element.policyNumber + '</span>'
                        + '</p>'
                        + '<p id="modelOfTheTextDoc">'
                        + '<span class="firstSpan">Auto Yr/make/model</span>'
                        + '<span class="secondSpan">' + element.model + '</span>'
                        + '</p>'
                        + '<p id="vehicleNoOfTheTextDoc">'
                        + '<span class="firstSpan">Auto License plate state & Number</span>'
                        + '<span class="secondSpan">' + element.vehicleIdentificationNumber + '</span>'
                        + '</p>'
                        + '<p id="licenseStateOfTheTextDoc">'
                        + '<span class="firstSpan">Drivers License State</span>'
                        + '<span class="secondSpan">' + element.driverLicenseState + '</span>'
                        + '</p>'
                        + '<p id="licenseOfTheTextDoc">'
                        + '<span class="firstSpan">Drivers License Number</span>'
                        + '<span class="secondSpan">' + element.driverLicenseNumber + '</span>'
                        + '</p>'
                        + '<p id="injuriesOfTheTextDoc">'
                        + '<span class="firstSpan">Injuries</span>'
                        + '<span class="secondSpan">' + element.injuries + '</span>'
                        + '</p>'
                        + '<p id="otherinfoOfTheTextDoc">'
                        + '<span class="firstSpan">Other info</span>' + '<span class="secondSpan">' + element.otherInformation + '</span>'
                        + '</p>'
                        + '</div>';
                $("#textinformation").html(currentDocName);
                $("#downloadTextLink").attr("href", HOMEPAGERESPONSE.TEXTDOWNLOADURL + element.otherPartyId + "?fileName=" + RESPONSE.DOWNLOADFILENAME[0] + "&count=" + count + "");
                count++;
                $("#viewText").html(mainDocHTML);
                try {
                    if (element.otherPartyName == undefined) {
                        $('#nameOfTheTextDoc').hide();
                    } else {
                        $('#nameOfTheTextDoc').show();
                    }
                } catch (e) {
                    $('#nameOfTheTextDoc').hide();
                }
                if (dateOfIncident == "") {
                    $('#textOverlayIncidentAlert').hide();
                } else {
                    $('#textOverlayIncidentAlert').show();
                }
                if (timeOfIncident == "") {
                    $('#textOverlayIncidentTime').hide();
                } else {
                    $('#textOverlayIncidentTime').show();
                }
                if (locationOfIncident == "") {
                    $('#textOverlayIncidentLocation').hide();
                } else {
                    $('#textOverlayIncidentLocation').show();
                }
                if (customerNameOfIncident == "") {
                    $('#textOverlayCustomerName').hide();
                } else {
                    $('#textOverlayCustomerName').show();
                }
                if (customerEmailOfIncident == "") {
                    $('#textOverlayCustomerMailId').hide();
                } else {
                    $('#textOverlayCustomerMailId').show();
                }
                if (customerPhoneOfIncident == "") {
                    $('#textOverlayPhoneNumber').hide();
                } else {
                    $('#textOverlayPhoneNumber').show();
                }
                if (element.role == "") {
                    $('#roleOfTheTextDoc').hide();
                } else {
                    $('#roleOfTheTextDoc').show();
                }
                if (phoneNumber == "") {
                    $('#phoneOfTheTextDoc').hide();
                } else {
                    $('#phoneOfTheTextDoc').show();
                }
                if (addressValue == "") {
                    $('#addressOfTheTextDoc').hide();
                } else {
                    $('#addressOfTheTextDoc').show();
                }
                if (element.carrier == "") {
                    $('#carrierOfTheTextDoc').hide();
                } else {
                    $('#carrierOfTheTextDoc').show();
                }
                if (element.policyNumber == "") {
                    $('#policyOfTheTextDoc').hide();
                } else {
                    $('#policyOfTheTextDoc').show();
                }
                if (element.model == "") {
                    $('#modelOfTheTextDoc').hide();
                } else {
                    $('#modelOfTheTextDoc').show();
                }
                if (element.vehicleIdentificationNumber == "") {
                    $('#vehicleNoOfTheTextDoc').hide();
                } else {
                    $('#vehicleNoOfTheTextDoc').show();
                }
                if (element.driverLicenseState == "") {
                    $('#licenseStateOfTheTextDoc').hide();
                } else {
                    $('#licenseStateOfTheTextDoc').show();
                }
                if (element.driverLicenseNumber == "") {
                    $('#licenseOfTheTextDoc').hide();
                } else {
                    $('#licenseOfTheTextDoc').show();
                }
                if (element.injuries == "") {
                    $('#injuriesOfTheTextDoc').hide();
                } else {
                    $('#injuriesOfTheTextDoc').show();
                }
                if (element.otherInformation == "") {
                    $('#otherinfoOfTheTextDoc').hide();
                } else {
                    $('#otherinfoOfTheTextDoc').show();
                }
            }
            count++;
        });
        sessionStorage.overflowAuto = "false";
        if (addressValue.length > 32) {
            sessionStorage.overflowAuto = "true";
            if (sessionStorage.overflowAuto == "true") {
                $("#samplediv").css("overflow-x", "auto");
            }
        } else {
            $("#samplediv").css("overflow-x", "hidden");
        }
    },
    displayPreviousImage: function () {
        var $divElement = $("#thumbNailViewForImages"), activeAudioClass = false;
        console.log("$liElement", $divElement);
        $.each($divElement, function (index, element) {
            console.log($(this).find("div").hasClass("activeAudio"));
            activeAudioClass = $(this).find("div").hasClass("activeAudio")
            if (activeAudioClass) {
                protocall.view.loadingScrollPrevious($(this).find("div.activeAudio"));
                return false;
            }
        });
    },
    displayNextImage: function () {
        var $divElement = $("#thumbNailViewForImages"), activeAudioClass = false;
        console.log("$liElement", $divElement);
        $.each($divElement, function (index, element) {
            console.log($(this).find("div").hasClass("activeAudio"));
            activeAudioClass = $(this).find("div").hasClass("activeAudio")
            if (activeAudioClass) {
                protocall.view.loadingScrollNext($(this).find("div.activeAudio"));
                return false;
            }
        });
    },
    loadingScrollNext: function (liEleme) {
        $("#previousICON").css("display", "block");
        var indexValue = $("#thumbNailViewForImages div").index(liEleme) + 1, nextElementToBeloaded;
        if (indexValue !== 0 && indexValue < $("#thumbNailViewForImages div").length) {
            nextElementToBeloaded = $("#thumbNailViewForImages div:eq( " + indexValue + " )");
            $("#thumbNailViewForImages div").removeClass("activeAudio");
            nextElementToBeloaded.addClass("activeAudio");
            imageSrcTobeLoadedBack = nextElementToBeloaded.find("img").attr("src");
            $("#viewImage").html('<img src=' + imageSrcTobeLoadedBack + ' style="max-height: 220px;max-width: 300px;"/>');
        } else {
            $("#nextICON").css("display", "none");
            $("#previousICON").css("display", "block");
        }
    },
    loadingScrollPrevious: function (liEleme) {
        $("#nextICON").css("display", "block");
        var indexValue = $("#thumbNailViewForImages div").index(liEleme) - 1, nextElementToBeloaded;
        if (indexValue !== -1) {
            nextElementToBeloaded = $("#thumbNailViewForImages div:eq( " + indexValue + " )");
            $("#thumbNailViewForImages div").removeClass("activeAudio");
            nextElementToBeloaded.addClass("activeAudio");
            imageSrcTobeLoadedBack = nextElementToBeloaded.find("img").attr("src");
            $("#viewImage").html('<img src=' + imageSrcTobeLoadedBack + ' style="max-height: 220px;max-width: 300px;"/>');
        } else {
            $("#previousICON").css("display", "none");
            $("#nextICON").css("display", "block");
        }
    },
    displayOrignalAudio: function (currentTarget) {
        $("#thumbNailViewForVoice>div").removeClass("activeAudio");
        currentTarget.addClass("activeAudio");
        var currentMediaID = currentTarget.find("p#mediaID").text(), mainAudioHTML = "", fileNameOfAudio = "", timeValue;
        console.log("RESPONSE.AUDIODETAILS", RESPONSE.AUDIODETAILS);
        var count = 1;
        $.each(RESPONSE.AUDIODETAILS, function (i, element) {
            console.log("media id", element.mediaId);
            if (currentMediaID == element.mediaId) {
                //"http://2-dot-proto-call-test.appspot.com/downloadforpicture?key=" + RESPONSE.AUDIOURLS[0]  + "&fileName=" +RESPONSE.DOWNLOADFILENAME[0]+".m4a";
                //var audioValueToBeDownloaded = HOMEPAGERESPONSE.PROFILEAPIFORAUDIO + RESPONSE.DOWNLOADFILENAME[0] + ".m4a?key=" + element.file;

                var audioValueToBeDownloaded = "http://2-dot-proto-call-test.appspot.com/downloadforpicture?key=" + element.file + "&fileName=" + RESPONSE.DOWNLOADFILENAME[0] + ".m4a&count=" + count + "";
                count++;
                //count++;
                console.log("condition satisfied");
                $("#music").attr("src", HOMEPAGERESPONSE.PROFILEAPI + element.file);
                $("#music").load();
                $("#downloadAudioLink").attr("href", audioValueToBeDownloaded);
                mainAudioHTML = '<source src=' + HOMEPAGERESPONSE.PROFILEAPI + element.file + '>'
                        + '<source src=' + HOMEPAGERESPONSE.PROFILEAPI + element.file + '>';
                fileNameOfAudio = element.fileName;
                timeValue = element.lastModified;
                $(".audiodetailestime").html(JSON.parse(JSON.stringify(moment(Number(timeValue)).tz('America/New_York').format("Do MMM YY, h:mm A")).replace("th", " ")));
            }
            count++;
        });
        $("#voiceinformation").html(fileNameOfAudio);
    },
    displayPreviousAudio: function () {
        var $divElement = $("#audioThumbNailView"), activeAudioClass = false;
        console.log("$liElement", $divElement);
        $.each($divElement, function (index, element) {
            console.log($(this).find("div").hasClass("activeAudio"));
            activeAudioClass = $(this).find("div").hasClass("activeAudio")
            if (activeAudioClass) {
                protocall.view.loadingPreviousAudio($(this).find("div.activeAudio"));
                return false;
            }
        });
    },
    loadingPreviousAudio: function (divEleme) {
        console.log("loadingPreviousAudio");
        var indexValue = $("#audioThumbNailView div").index(divEleme) - 1, nextElementToBeloaded, nextAudioElement;
        console.log("loadingScrollBack" + indexValue);
        if (indexValue !== -1) {
            nextElementToBeloaded = $("#audioThumbNailView div:eq( " + indexValue + " )");
            $("#audioThumbNailView div").removeClass("activeAudio");
            nextElementToBeloaded.addClass("activeAudio");
            nextAudioElement = nextElementToBeloaded.find("p#mediaID").attr("name");
            console.log("imageSrcTobeLoaded" + nextAudioElement);
            $("#music").find("source").attr("src", nextAudioElement);
        }
    },
    displayNextAudio: function () {
        var $divElement = $("#audioThumbNailView"), activeAudioClass = false;
        console.log("$liElement", $divElement);
        $.each($divElement, function (index, element) {
            console.log($(this).find("div").hasClass("activeAudio"));
            activeAudioClass = $(this).find("div").hasClass("activeAudio")
            if (activeAudioClass) {
                protocall.view.loadingNextAudio($(this).find("div.activeAudio"));
                return false;
            }
        });
    },
    loadingNextAudio: function (divEleme) {
        console.log("loadingPreviousAudio");
        var indexValue = $("#audioThumbNailView div").index(divEleme) + 1, nextElementToBeloaded, nextAudioElement;
        console.log("loadingScrollBack" + indexValue);
        if (indexValue !== 0 && indexValue < $("#audioThumbNailView div").length) {
            nextElementToBeloaded = $("#audioThumbNailView div:eq( " + indexValue + " )");
            $("#audioThumbNailView div").removeClass("activeAudio");
            nextElementToBeloaded.addClass("activeAudio");
            nextAudioElement = nextElementToBeloaded.find("p#mediaID").attr("name");
            console.log("imageSrcTobeLoaded" + nextAudioElement);
            $("#music").find("source").attr("src", nextAudioElement);
        }
    },
    playAudioFile: function ($e1) {
        console.log("playAudioFile");
        console.log("$e1" + $e1.parent());
        var $ele = $e1.parent();
        var duration;
        var music = document.getElementById('music');
        var pButton = document.getElementById('pButton');
        var pButton2 = document.getElementById('pButton2');
        var timeline = document.getElementById('timeline'); // timeline         var playhead = document.getElementById('playhead'); // playhead
        playhead.addEventListener('mousedown', protocall.view.mouseDown(music), false);
        var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
        music.addEventListener("canplaythrough", protocall.view.canPlayThorgh(music, duration), false);
        timeline.addEventListener("click", protocall.view.timeLine(music, playhead, timeline, timelineWidth, event), false);
        if (music.paused) {
            console.log("music.paused");
            music.play();
            // remove play, add pause
            pButton.className = "";
            pButton.className = "pause";
            pButton2.className = "";
            pButton2.className = "pause";
        } else { // pause music
            console.log("else music.paused");
            music.pause();
            // remove pause, add play
            pButton.className = "";
            pButton.className = "play";
            pButton2.className = "";
            pButton2.className = "play";
        }
    },
    timeUpdate: function (music, duration) {
        var timeline = document.getElementById('timeline'); // timeline         var playhead = document.getElementById('playhead'); // playhead
        var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
        var pButton = document.getElementById('pButton');
        var pButton2 = document.getElementById('pButton2');
        var playPercent = timelineWidth * (music.currentTime / duration);
        if (music.currentTime == duration) {
            pButton.className = "";
            pButton.className = "play";
            pButton2.className = "";
            pButton2.className = "play";
        }
    },
    canPlayThorgh: function (music, duration) {
        var durationIn = music.duration;
        console.log("durationIn" + durationIn);
        if (isNaN(durationIn)) {
            console.log("if");
            time = '00:00';
            document.getElementById("audioDuration").innerHTML = time;
        } else {
            var time = protocall.view.formatSecondsAsTime(durationIn);
            console.log("time in else" + time);
            document.getElementById("audioDuration").innerHTML = time;
        }
        protocall.view.timeLine(music, durationIn);
        protocall.view.timeUpdate(music, durationIn);
    },
    formatSecondsAsTime: function (duration) {
        var secs = duration;
        console.log("secs" + secs);
        var hr = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600)) / 60);
        var sec = Math.floor(secs - (hr * 3600) - (min * 60));
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        return min + ':' + sec;
    },
    timeLine: function (music, duration, event) {
        var timeline = document.getElementById('timeline'); // timeline         var playhead = document.getElementById('playhead'); // playhead
        var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
    },
    moveplayhead: function (playhead, timelineWidth, event) {
        var newMargLeft = event.pageX - timeline.offsetLeft;
        if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
            playhead.style.marginLeft = newMargLeft + "px";
        }
        if (newMargLeft < 0) {
            playhead.style.marginLeft = "0px";
        }
        if (newMargLeft > timelineWidth) {
            playhead.style.marginLeft = timelineWidth + "px";
        }
    },
    clickPercent: function (event) {
        return (event.pageX - timeline.offsetLeft) / timelineWidth;
    },
    mouseDown: function (music) {
        onplayhead = true;
        music.removeEventListener('timeupdate', protocall.view.timeUpdate(music, pButton, pButton2), false);
    },
    searchUserDetails: function (searchText) {
        console.log("searchText", searchText);
        var data = {"name": searchText},
        deepPath = "globalsearchusingsearchapi", page = "home",
                callback = protocall.view.searchResults;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    },
    searchResults: function (result) {
        var resultValueHTML = "";
        //$('#searchUserDetails').val('');
        if (result.resultMap.TypeCode == "4012") {
            resultValueHTML += '<li style="margin:10px;width:95%;cursor:default;padding:10px;background-image: none;max-height: 40px;  height: 100%;min-height: 15px;">'
                    + '<p class="searchItemUserName" style="color:#585858" class="opensans-regular f-sz-16">No Search Result Found</p>'
                    + '</li>';
            $("#searchBarDiv").show();
            $("#searchResultUL").empty();
            $("#searchResultUL").show();
            $("#searchResultUL").html($(resultValueHTML));
        } else {
            var matchedResultValue = result.resultMap.MatchedDocumentList, lastName = "", city = "", state = "";
            $.each(matchedResultValue, function (index, resultValue) {
                console.log("resultValue", resultValue);
                if (resultValue.lastName != undefined) {
                    lastName = resultValue.lastName;
                } else {
                    lastName = "";
                }


                if (resultValue.residentialCity != undefined) {
                    city = resultValue.residentialCity;
                } else {
                    city = "";
                }
                if (resultValue.residentialState != undefined) {
                    state = resultValue.residentialState;
                } else {
                    state = "";
                }

                var userId = "";
                var userRole = resultValue.role;
                switch (userRole) {
                    case "Agency Owner":
                        userId = resultValue.emailId;
                        break;
                    case "Carrier Owner":
                        userId = resultValue.emailId;
                        break;
                    case "Customer":
                        userId = resultValue.userId;
                        break;
                    case "Agency Representative":
                        userId = resultValue.agencyRepresentativeId;
                        break;
                    case "Carrier Representative":
                        userId = resultValue.carrierRepresentativeId;
                        break;
                    default:
                        userId = "";
                        break;
                }
                // if (resultValue.userId != undefined) {
                //     userId = resultValue.userId;
                // } else if (resultValue.agencyRepresentativeId != undefined) {
                //     userId = resultValue.agencyRepresentativeId;
                // } else if (resultValue.carrierRepresentativeId != undefined) {
                //     userId = resultValue.carrierRepresentativeId;
                // } else {
                //     userId = "";
                // }
                // console.log("user role for the selected user is",resultValue.role);
                // if(resultValue.role == "Customer" || resultValue.role == "Agency Owner" || resultValue.role == "Carrier Owner"){
                //     userId = resultValue.emailId;
                // }
                resultValueHTML += '<li style="width:95%;margin:10px;cursor:pointer;border-bottom: 1px solid #d4d4d4;padding:10px; height: 49%; background-image: none;  max-height: 60px;min-height: 39px;" id="searchItem_' + index + '" class="snap" data-type="selectedSearchItem">'
                        + '<p class="searchItemUserName" style="color:#585858;  margin-bottom: 3px;" class="opensans-regular f-sz-16"><span>' + resultValue.firstName + '</span>&nbsp<span>' + lastName + '</span></p>'
                        + '<p class="opensans-regular f-sz-12 searchItemRole" style="margin-bottom: 3px;">' + resultValue.role + '</p>'
                        + '<p class="opensans-regular f-sz-12" style="margin-bottom: 3px;"><span>' + city + '</span>&nbsp<span>' + state + '</span></p>'
                        + '<p class="searchItemEmail" style="display:none">' + userId + '</p>'
                        + '</li>';
            });
            $("#searchBarDiv").show();
            $("#searchResultUL").empty();
            $("#searchResultUL").show();
            $("#searchResultUL").append($(resultValueHTML));
            $("#searchResultUL li:last-child").css("border-bottom", "none");
        }
    },
    showSearchResult: function (e) {
		CUSTOMER.POLICYLISTWITHCARRIER = [];
        var currentTarget = $(e.currentTarget);
        console.log("currentTarget showSearchResult", currentTarget);
        var userEmailId = currentTarget.find("p.searchItemEmail").text();
        var userName = currentTarget.find("p.searchItemUserName").text();
        var userRole = currentTarget.find("p.searchItemRole").text();

        sessionStorage.userRole = userRole;
        $(".search-ip").val(userName, +'&nbsp' + userRole);
        $("#searchBarDiv").hide();

        var data = {emailId: userEmailId, role: userRole},
        deepPath = "detailsofretrieveduserfromglobalsearch", page = "home",
                callback = protocall.view.showUserDetails;
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    reLoadSearchResult: function (e) {

        var roleOfUser = sessionStorage.userRole;
        if (roleOfUser == undefined || roleOfUser == "undefined" || roleOfUser == null) {
            roleOfUser = "Customers";
        }
        var data = {emailId: localStorage.selectedEmail, role: roleOfUser},
        deepPath = "detailsofretrieveduserfromglobalsearch", page = "home",
                callback = protocall.view.showUserDetails;
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    showUserDetails: function (result) {
//        sessionStorage.setItem("SUBMENU", "CUSTOMER_PAGE");


        if (PAGEREFRESH.ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW) {
            var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            var content = '<div class="container"> <div class="content-holder"></div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            $("#page").empty();
            totalHtml = header + content + footer;
            $("#page").append(totalHtml);
            $('.setProfilePic').fillBox();
        }
        if (result.resultMap.TypeCode != "4014") {

            $(".content-holder").empty();
            $(".content-holder").addClass("spinner1");
            $(".content-holder").css("opacity", "0.5");
            var requiredUserDetails = result.resultMap.RequiredDetails, requiredUserEmailId = "", selectedSearchItem = "";
            var requiredUserCarrierId = result.resultMap.RequiredDetails.carrierId;
            var requiredUseUserId = result.resultMap.RequiredDetails.userId;
            localStorage.selectedEmail = requiredUseUserId;
            localStorage.selectedUserId = requiredUseUserId;
            localStorage.carrierIDValue = requiredUserCarrierId;
            var givenRole = result.resultMap.GivenRole;
            if (givenRole == "Agency Representative" || givenRole == "Agency Owner") {
                if (givenRole == "Agency Representative") {
                    requiredUserEmailId = result.resultMap.RequiredDetails.agencyRepresentativeId.email;
                } else {
                    requiredUserEmailId = result.resultMap.RequiredDetails.emailId.email;
                }
                HOMEPAGERESPONSE.REQUIREDUSEREMAILID = requiredUserEmailId;
                HOMEPAGERESPONSE.SEARCHAGENCYREP = true;
                protocall.myRep.initMyRepsPage();
            } else if (givenRole == "Carrier Representative" || givenRole == "Carrier Owner") {
                if (givenRole == "Carrier Representative") {
                    requiredUserEmailId = result.resultMap.RequiredDetails.carrierRepresentativeId.email;
                } else {
                    requiredUserEmailId = result.resultMap.RequiredDetails.emailId.email;
                }
                HOMEPAGERESPONSE.REQUIREDUSEREMAILID = requiredUserEmailId;
                HOMEPAGERESPONSE.SEARCHAGENCYREP = true;
                protocall.myRep.initMyRepsPage();
            } else if (givenRole == "Customer" || givenRole == "Customers") {
                sessionStorage.IsCustomersTab = "true";
                sessionStorage.hasLoadedNextPage = "false";
                $("#searchUserDetails").val("");
                sessionStorage.selectedTab = "GLOBAL_SEARCH_CUSTOMER_VIEW";
                if (result.resultMap.RequiredDetails.emailId != undefined) {
                    requiredUserEmailId = result.resultMap.RequiredDetails.emailId.email;
                } else {
                    requiredUserEmailId = "";
                }
                requiredUserId = result.resultMap.RequiredDetails.userId;
                protocall.customer.searchResultCustomerView(result);
                protocall.view.properityPolicyresponse();
            } else {
                requiredUserEmailId = result.resultMap.RequiredDetails.emailId.email;
            }

        }
    }
};
protocall.home = {
    gotAchieveResponse: function () {
        protocall.view.loadHomePage(true);
    },
    initHomePage: function () {
        if (sessionStorage.loginType == 'SuperAdmin') {
            var data = "";
            var page = "home";
            var deepPath = "";
            if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW == true) {
                deepPath = "preferredvendorlistsortedbyname";
            } else {
                deepPath = "superadmindashboarddesign";
            }
            var callback = protocall.view.superAdminPage;
            var resp = utils.server.makeServerCall(page, data, callback, deepPath);
        } else {
            HOMEPAGERESPONSE.RECURRINGALERTDFEEDS = [];
            /* if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
             var data = {};
             var path = utils.server.getServerPath("agencydashboarddesign");
             var request = path(data).execute(function (resp) {
             if (resp.error != undefined) {
             t.server.handleError(resp);
             } else {
             RESPONSE.customers_data[0] = resp.resultMap.userTab;
             // localStorage.setItem("customers_data", JSON.stringify(resp.resultMap.userTab));
             HOMEPAGERESPONSE.CUSTOMERDATA = resp.resultMap.userTab;
             RESPONSE.users[0] = resp.resultMap.carrierTab;
             // localStorage.setItem("users", JSON.stringify(resp.resultMap.carrierTab));
             }
             });
             } */
            sessionStorage.setItem("SUBMENU", "HOME_PAGE");
            if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW || HOMEPAGERESPONSE.SORTBYRECENTVIEW || HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED || HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED || HOMEPAGERESPONSE.FEEDSICONCLICKED || HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED) {
                $(".content-holder").addClass("spinner1");
                $(".content-holder").css("opacity", "0.5");
            } else {
                protocall.displaySpinner(true);
            }
            CONSTANTS.PGNUMBER = 0;
            var pageNumber = ++CONSTANTS.PGNUMBER;
            console.log("page number---->", pageNumber);
            var data = {"pageNumber": pageNumber}, deepPath = "",
                    page = "home",
                    authId = "",
                    spinnerMsg = "";
            callback = protocall.home.loadHomePageData;
            if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "INCIDENTS") {
                if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW) {
                    data = {"pageNumber": pageNumber, alertType: "incidentalert"};
                    deepPath = "filterfeedsbyalerttypewithalphabetical";
                    HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = true;
                    HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
                } else {
                    data = {"pageNumber": pageNumber, alertType: "incidentalert"};
                    deepPath = "filterfeedsbyalerttype";
                    HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
                    HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = true;
                    HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
                }
            } else if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "POLICIES") {
                if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW) {
                    data = {"pageNumber": pageNumber, alertType: "policyalert"};
                    deepPath = "filterfeedsbyalerttypewithalphabetical";
                    HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
                    HOMEPAGERESPONSE.POLICYALERTCLICKED = true;
                    HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
                } else {
                    data = {"pageNumber": pageNumber, alertType: "policyalert"};
                    deepPath = "filterfeedsbyalerttype";
                    HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
                    HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
                    HOMEPAGERESPONSE.POLICYALERTCLICKED = true;
                    HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
                }
            } else if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "VIEW_ARCHIVES") {
                if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW) {
                    deepPath = "viewedarchievedwithalphabeticalorder";
                    HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
                    HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = true;
                } else {
                    deepPath = "viewedarchieved";
                    HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
                    HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = true;
                    HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
                }
            } else {
                if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW) {
                    deepPath = "filterfeedbyalphabetical";
                    HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
                    HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
                } else {
                    deepPath = "filterfeedbyalertdate";
                    HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
                    HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED = false;
                    HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = false;
                    HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
                }
            }

            sessionStorage.setItem("SUBMENU", "HOME_PAGE");
            var resp = utils.server.makeServerCall(page, data, callback, deepPath);
            console.log("jjash", firstLoad);
            if (firstLoad) {
                console.log("sjhdjah" + firstLoad);
// firstLoad = false;

                homePageUpdate = setInterval(function () {


                    console.log("vino check", sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON"));
                    if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "MY_ALERTS") {
                        pageNumber = 1;
                        HOMEPAGERESPONSE.HOMEPAGEFEEDPAGENUMBER = 1;
                        sessionStorage.pageNumber = 2;
                        protocall.displaySpinner(true);
                        $(".content-holder").empty();
                        firstLoad = false;
                        utils.server.makeServerCall(page, data, callback, deepPath);
                    }
                }, 2 * 60 * 1000);
            }


        }
    },
    loadViewArchivedFeedsResponse: function (dataValue) {
        if (dataValue !== "undefined" && dataValue.resultMap !== "undefined") {
            if (dataValue.resultMap.TypeCode !== "undefined" && dataValue.resultMap.TypeCode == "4051") {
                var feedBlockValues = $(".feed-block");
                $.each(HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE, function (index, element) {
                    $.each(feedBlockValues, function (index, alertFeeds) {
                        if (element == ($(alertFeeds).find(".inner-share-spacing").attr("id"))) {
                            $(this).remove();
                        }
                    });
                });
                HOMEPAGERESPONSE.LISTOFALERTIDSFORARCHIVE = [];
                $("a.archives").css("visibility", "hidden");
            }
            setTimeout(function () {
                var page = "counthomepage";
                var data = {},
                        deepPath = "providecountforunreadfeed",
                        page = "home",
                        async = false,
                        callback = protocall.carrier.getCountResponseviewarchie,
                        authId = "",
                        spinnerMsg = "";
                utils.server.makeServerCall(page, data, callback, deepPath);
            }, 400);
        }

    },
    initLoginPage: function () {
        var template = LoginTemplate.login.staticLoginTemplate();
        $(".container").addClass("container");
        $(".container").removeClass("container-maxwidth");
        $("#page").empty();
        $("#page").append($(template));
        $('.setProfilePic').fillBox();
        $("#id_loginfadeinout").fadeIn();
        $("#id_loginfadeinout").fadeIn("slow");
        $("#id_loginfadeinout").fadeIn(3000);
        if (HOMEPAGERESPONSE.SIGNUPREGISTRATIONDONE) {
            var text = "Registered Successfully";
            $(".signup-success").html(text);
            $("#signUpSuccess").fadeIn();
            $("#signUpSuccess").fadeIn("slow");
            $("#signUpSuccess").fadeOut(3000);
            protocall.displaySpinner(false);
        } else {
            $(".signup-success").html("");
        }

        $('body').attr('style', 'overflow-y: hidden !important');
        $('#page').attr('style', 'background-color: transparent  !important');
        $("html, body").animate({scrollTop: 0});
        $("#email").click();
        sessionStorage.IDENDIFIER = "49c03e36-f3f1-4132-8115-2f74c8a7bae3";
        sessionStorage.IDENDIFIER_NAME = "Agency";
    },
    initSignUpPage: function () {
        var template = LoginTemplate.login.staticSignUpTemplate();
        $(".container").addClass("container");
        $(".container").removeClass("container-maxwidth");
        $("#page").empty();
        $("#page").append($(template));
        $(".c_signup").fadeIn();
        $(".c_signup").fadeIn("slow");
        $(".c_signup").fadeIn(3000);
        $('#page').attr('style', 'background-color: transparent  !important');
        $(".body-bg-color").attr('style', 'overflow-y: auto  !important');
        $('.c_signup').attr('style', 'background-color: transparent  !important');
        $('body').css("background-image", "url(images/Background-pattern.png)");
        $('body').css("background-color", "#e9e9e9");
    },
    initResetPasswordPage: function () {
        var template = LoginTemplate.login.staticResetPasswordTemplate();
        $(".container").addClass("container");
        $(".container").removeClass("container-maxwidth");
        $("#page").empty();
        $("#page").append($(template));
        $(".c_resetpassword").fadeIn();
        $(".c_resetpassword").fadeIn("slow");
        $(".c_resetpassword").fadeIn(3000);
        $('body').attr('style', 'overflow-y: hidden !important');
        $('.c_resetpassword').attr('style', 'background-color: transparent  !important');
        $('#page').attr('style', 'background-color: transparent  !important');
        $('body').css("background-image", "url(images/Background-pattern.png)");
        $('body').css("background-color", "#e9e9e9");
        $("html, body").animate({scrollTop: 0});
    },
    loadHomePageData: function (data, page) {

        firstLoad = false;
//        clearInterval(homePageUpdate);
        if (HOMEPAGERESPONSE.INCIDENTALERTSCLICKED || HOMEPAGERESPONSE.POLICYALERTCLICKED || HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED || HOMEPAGERESPONSE.ISVIEWARCHIVECLICKED || HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED || HOMEPAGERESPONSE.FEEDSICONCLICKED) {
            HOMEPAGERESPONSE.RECURRINGALERTDFEEDS = [];
        }
        protocall.util.viewingHomePageData(data);
    },
    loadingAlertFeeds: function (data, pageNumber, deepPath, page) {

        callback = protocall.home.loadingHomePageFeeds;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    },
    loadingHomePageFeeds: function (data, page) {
        protocall.util.viewingHomePageData(data);
        $(".countclass").text(sessionStorage.MYALERTSCOUNT);
        $(".countclassarch").text(sessionStorage.ArchieveCOUNT);
    },
    loadFeed: function (tempObj) {
        //clearInterval(homePageUpdate);
        var deepPath = "", page = "";
        $(".content-holder").empty();
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        var html = staticTemplate.home.staticFeedViewTemplate(tempObj);
        $(".content-holder").append($(html));
        $(".content-holder").scrollTop(0);

        $(".div-reloadpage").css("display", "none");
        $('.feeduserpic').fillBox();
        if (tempObj.gender == "") {
            $(".gender-show").css("display", "none");
        } else {
            $(".gender-show").css("display", "block");
        }
        if (tempObj.birthday == "") {
            $(".birthday-show").css("display", "none");
            $(".birthday-icon").css("display", "none");
        } else {
            $(".gender-show").css("display", "block");
            $(".birthday-icon").css("display", "block");
        }
        var data = {
            "userId": tempObj.userId,
            "alertId": tempObj.alertId
        };
        var deepPath = "clickonalertfeed";
        var page = "home";
        var callback = protocall.home.loadViewRelatedFeeds;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
//        protocall.events.GlobalContainerScrollevent();
    },
    loadViewRelatedFeeds: function (dataValue) {
        var homeFeedValues = "";
        var policyDetailsValues = {}, insurancePolicyDetails = "";
        HOMEPAGERESPONSE.ISVIEWALERTVALUECLICKED = true;
        CONSTANTS.HASNEXTPAGE = false;
        var feedHTML = "";
        var matchedPolicyID = "";
        if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
            $.each(HOMEPAGERESPONSE.RELATEDFEEDS, function (index, homePageFeedValue) {
                if (homePageFeedValue.alertStatusDetails != undefined) {
                    if (sessionStorage.getItem("userAlertIdViewFeed") == homePageFeedValue.alertStatusDetails.alertId) {
                        if (homePageFeedValue.alertStatusDetails.type == "policyalert" && homePageFeedValue.alertStatusDetails.status == "Matched") {
                            matchedPolicyID = homePageFeedValue.alertStatusDetails.policyId;
                            console.log("matchedPolicyID>>>>>>>>>>>>>> in policy alert", matchedPolicyID);
                        } else {
                            if (homePageFeedValue.alertStatusDetails.status == "MatchedReleased" || homePageFeedValue.alertStatusDetails.status == "Completed") {
                                matchedPolicyID = homePageFeedValue.alertStatusDetails.policyId;
                                console.log("matchedPolicyID>>>>>>>>>>>>>> in incident alert", matchedPolicyID);
                            } else {
                                console.log("no");
                            }
                        }
                    }
                }
            });
        } else {
            $.each(HOMEPAGERESPONSE.RECURRINGALERTDFEEDS, function (index, homePageFeedValue) {
                if (sessionStorage.getItem("userAlertIdViewFeed") == homePageFeedValue.alertStatusDetails.alertId) {
                    if (homePageFeedValue.alertStatusDetails.type == "policyalert" && homePageFeedValue.alertStatusDetails.status == "Matched") {
                        matchedPolicyID = homePageFeedValue.alertStatusDetails.policyId;
                    } else {
                        if (homePageFeedValue.alertStatusDetails.status == "MatchedReleased" || homePageFeedValue.alertStatusDetails.status == "Completed") {
                            matchedPolicyID = homePageFeedValue.alertStatusDetails.policyId;
                        } else {
                            console.log("no");
                        }
                    }
                }
            });
        }
        if (dataValue.resultMap.TypeCode !== "undefined") {
            if (dataValue.resultMap.CommonUserDetails != undefined) {
                HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS = "";
                HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS = dataValue.resultMap.CommonUserDetails;
            }
            if (dataValue.resultMap.RelatedFeeds !== "undefined" && dataValue.resultMap.RelatedFeeds.length !== "undefined" && dataValue.resultMap.RelatedFeeds.length !== 0) {
                var relatedFeedsValue = dataValue.resultMap.RelatedFeeds;
                HOMEPAGERESPONSE.RELATEDFEEDS = dataValue.resultMap.RelatedFeeds;
                //HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS="";
                // HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS = relatedFeedsValue;

                HOMEPAGERESPONSE.RELATEDFEEDSLOADED = true;
                try {
                    $.each(relatedFeedsValue, function (index, alertDetailsValue) {
                        var alertType = alertDetailsValue.alertDetails.type;
                        feedHTML += template.viewRelatedFeeds(alertDetailsValue, alertType);
                    });
                } catch (er) {
                    feedHTML = "";
                }
                if (feedHTML == "") {
                    feedHTML = "<div id=\"\">" + "No Records..!" + "</div>";
                }
                $(".content-holder").removeClass("spinner1");
                $(".content-holder").css("opacity", "1");
            }
            if (dataValue.resultMap.PoliciesDetails != undefined) {
                policyDetailsValues = dataValue.resultMap.PoliciesDetails;
                console.log("policyDetailsValues>>>>>>>>>", policyDetailsValues.length);
                if (policyDetailsValues !== "undefined" && policyDetailsValues.length !== 0) {
                    $.each(policyDetailsValues, function (index, policyDetail) {
                        insurancePolicyDetails += staticTemplate.home.insurencePolicyDetails(policyDetail, matchedPolicyID);
                    });
                    $(".policy-main-blk").empty();
                    $(".policy-main-blk").append($(insurancePolicyDetails));
                    $(".div-reloadpage").css("display", "none");
                }
            }
        } else if (dataValue.resultMap.TypeCode !== "undefined" && dataValue.resultMap.TypeCode == "4014") {
            $(".content-holder").empty();
            $(".content-holder").html(dataValue.resultMap.AlertMessage);
            $(".div-reloadpage").css("display", "none");
        }
        $(".div-reloadpage").css("display", "none");

        $(".rel-feeds-content").empty();
        $(".div-reloadpage").css("display", "none");

        $(".rel-feeds-content").append($(feedHTML));
        $(".content-holder").removeClass("spinner1");
        $(".content-holder").css("opacity", "1");
        $(".div-reloadpage").css("display", "none");

//         HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS="";
        //           HOMEPAGERESPONSE.COMMONUSERDETAILSFORRELATEDFEEDS = dataValue.resultMap.CommonUserDetails;
        if (feedHTML == "<div id=\"\">" + "No Records..!" + "</div>") {
            showAlertBox(localStorage.alertMessage);
        }
        if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "VIEW_ARCHIVES") {
            $(".archieve-icon").css("display", "none");
        } else {
            $(".archieve-icon").css("display", "block");
        }
        $(".countclass").text(sessionStorage.MYALERTSCOUNT);
        $(".countclassarch").text(sessionStorage.ArchieveCOUNT);
        //$(".archieve-icon").css("display","none");
    },
    displayMyAlertsFeeds: function () {
        HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED = true;
        HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
        HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
        CONSTANTS.PGNUMBER = 0;

        var deepPathCallName = "filterfeedbyalertdate";
        if (sessionStorage.isHomePageAlphaSort == "true") {
            deepPathCallName = "filterfeedbyalphabetical";
        }
        var page = "home",
                pageNumber = ++CONSTANTS.PGNUMBER, data = {"pageNumber": 1},
        deepPath = deepPathCallName,
                callback = protocall.home.loadHomePageData;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    },
    displayArchiveFeeds: function () {
        var totalLen = 1, totalHTML = "";
        var archiveTemplate = staticTemplate.home.staticArchiveFeedTemplate();
        totalHTML = archiveTemplate;
        $(".content-holder").empty();
        $(".content-holder").append($(totalHTML));
        protocall.events.GlobalContainerScrollevent();
    },
    displayIncidentsFeeds: function () {
        HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = true;
        HOMEPAGERESPONSE.POLICYALERTCLICKED = false;
        HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED = false;
        CONSTANTS.PGNUMBER = 0;
        var page = "home",
                pageNumber = ++CONSTANTS.PGNUMBER, data = {"pageNumber": pageNumber, alertType: "incidentalert"},
        deepPath = "filterfeedsbyalerttype",
                callback = protocall.home.loadHomePageData;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    },
    displayPoliciesFeeds: function () {
        HOMEPAGERESPONSE.POLICYALERTCLICKED = true;
        HOMEPAGERESPONSE.INCIDENTALERTSCLICKED = false;
        HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED = false;
        CONSTANTS.PGNUMBER = 0;
        var page = "home",
                pageNumber = ++CONSTANTS.PGNUMBER, data = {"pageNumber": pageNumber, alertType: "policyalert"},
        deepPath = "filterfeedsbyalerttype",
                callback = protocall.home.loadHomePageData;
        var resp = utils.server.makeServerCall(page, data, callback, deepPath);
    }};
protocall.carrier = {
    getresponseagencydetails: function (data) {

        RESPONSE.AGENCY_ADMIN_TOTAL_DETAILS[0] = data;
        localStorage.setItem("AGENCYOWNERDATA", JSON.stringify(data));
        console.log("jksdhfhjgsdhfgshdf", JSON.parse(localStorage.getItem("AGENCYOWNERDATA")));
    },
    getCountResponse2: function (resp) {
        try {
            if (resp.resultMap.CountForHomeFeed != undefined) {
                sessionStorage.MYALERTSCOUNT = "( " + resp.resultMap.CountForHomeFeed + "/" + resp.resultMap.CountForTotalHomeFeed + " )";
                sessionStorage.ArchieveCOUNT = "( " + resp.resultMap.CountForArchieve + "/" + resp.resultMap.CountForTotalArchiveFeed + " )";
            } else {
                sessionStorage.MYALERTSCOUNT = "";
                sessionStorage.ArchieveCOUNT = "";
            }
        } catch (e) {
            sessionStorage.MYALERTSCOUNT = "";
            sessionStorage.ArchieveCOUNT = "";
        }
        $(".countclass").text(sessionStorage.MYALERTSCOUNT);
        $(".countclassarch").text(sessionStorage.ArchieveCOUNT);
        protocall.view.loadHomePage(true);
        $('#page').css("background", "#eff2f3");
        $('body').css("background", "#eff2f3");
        $("div.submenu-sort div:nth-child(1)").text("Recent");
    },
    getCountResponseviewarchie: function (resp) {
        try {
            if (resp.resultMap.CountForHomeFeed != undefined) {
                sessionStorage.MYALERTSCOUNT = "( " + resp.resultMap.CountForHomeFeed + "/" + resp.resultMap.CountForTotalHomeFeed + " )";
                sessionStorage.ArchieveCOUNT = "( " + resp.resultMap.CountForArchieve + "/" + resp.resultMap.CountForTotalArchiveFeed + " )";
            } else {
                sessionStorage.MYALERTSCOUNT = "";
                sessionStorage.ArchieveCOUNT = "";
            }
        } catch (e) {
            sessionStorage.MYALERTSCOUNT = "";
            sessionStorage.ArchieveCOUNT = "";
        }



        $(".countclass").text(sessionStorage.MYALERTSCOUNT);
        $(".countclassarch").text(sessionStorage.ArchieveCOUNT);
        $(".content-holder").removeClass("spinner1").css("opacity", "1");
        if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "INCIDENTS") {
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                $(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a style=\"width:150px;\" href=\"/myalerts\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative\" data-type=\"page\" data-submenu=\"myalerts\"> <span class=\"submenu-title t-caps f-color-w\"> My Alerts </span> <span class=\"cnt-blk\"> <span class=\"countclass\"> " + sessionStorage.MYALERTSCOUNT + " </span>  </span> </a> <a href=\"/incidents\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative selected-tab\" data-type=\"page\" data-submenu=\"incidents\"> <div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style=\" margin-top: -4px;\"> incidents </div></a> <a href=\"/policies\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative\" data-type=\"page\" data-submenu=\"policies\"> <span class=\"submenu-title t-caps f-color-w\"> Policies </span> </a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"margin-left:40px;visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative  \" data-type=\"page\" data-submenu=\"view_archives\" style=\" width: 19%;margin-left:3px;\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\">  <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span>  </span></a> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\" style=\" margin-left: -10px;width: 132px;\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div></div><div class=\"clear\"> </div></div>");
                $(".incidents").click();
            } else {
                var subMenu = '<div class="tab-rb-submenu inline-block v-align-mid"> <div class="p-relative "> '
                        + '<div style="display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;"  href="/submenus" class="snap  left f-sz-16 opensans-light homesubmenu p-relative " data-type="page" data-submenu="dt-homesubmenu"><span class="submenu-title t-caps f-color-w" style="  color: transparent;">dfgdfgddfgdfg</span></div>'
                        + '<a style="width:150px;"  href="/myalerts" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative selected-tab" data-type="page" data-submenu="myalerts"> <span class="submenu-title t-caps f-color-w"> My Alerts </span> <span class="cnt-blk">'
                        + ' <span class="countclass"> ' + sessionStorage.MYALERTSCOUNT + ' </span>  </span> </a> <a href="/incidents" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative" data-type="page" data-submenu="incidents"  style="  opacity: 0;pointer-events: none;"> <div class="submenu-title t-caps inline-block f-color-w v-align-mid" style="  margin-top: -4px;"> incidents </div></a> <a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative" data-type="page" data-submenu="policies" style="  opacity: 0;pointer-events: none;"> <span class="submenu-title t-caps f-color-w"> Policies </span> </a> <a href="/archives" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative" data-type="page" data-submenu="archives" style="margin-left:40px;visibility:hidden;"> <span class="submenu-title t-caps f-color-w"> Archive </span> </a> <a href="/viewarchives" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative" data-type="page" data-submenu="view_archives"  style="  width: 19%;margin-left:-5px;"> <span class="submenu-title t-caps f-color-w"> View Archived </span> <span class="cnt-blk">  <span class="countclassarch"> ' + sessionStorage.ArchieveCOUNT + ' </span> </span></a> <div href="#" class="snap submenu-sort right f-sz-16 opensans-light p-relative" data-type="page" data-submenu="sortby" style="  margin-left: -10px;width: 132px;"> <div class="sort-text f-italic"> ' + "Recent" + ' </div><div class="sprite-im drop-down-icon submenu-drop-icon"> &nbsp; </div></div></div><div class="clear"> </div></div>';
                $(".mb-submenu-in").html(subMenu);
                //  $(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div><div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light view_archives p-relative\" data-type=\"page\" data-submenu=\"view_archives\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\" style=\"\">  <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span>  </span></a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"#\" class=\"snap left f-sz-16 opensans-light home t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"home\"><div class=\"carrierfeeds\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \" style=\"background-position: 0px 0px; width: 33px;height:31px;\">&nbsp;</div><span class=\"sub-menu-text inline-block v-align-mid\"> FEEDS </span><span id=\"id-customers-headername\"> </span></div></a></div><div class=\"clear\"> </div></div>");
            }

        } else if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "POLICIES") {
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                $(".policies").click();
                $(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a style=\"width:150px;\" href=\"/myalerts\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative\" data-type=\"page\" data-submenu=\"myalerts\"> <span class=\"submenu-title t-caps f-color-w\"> My Alerts </span> <span class=\"cnt-blk\"> <span class=\"countclass\"> " + sessionStorage.MYALERTSCOUNT + "</span>  </span> </a> <a href=\"/incidents\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative\" data-type=\"page\" data-submenu=\"incidents\"> <div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style=\" margin-top: -4px;\"> incidents </div></a> <a href=\"/policies\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative selected-tab\" data-type=\"page\" data-submenu=\"policies\"> <span class=\"submenu-title t-caps f-color-w\"> Policies </span> </a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"margin-left:40px;visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative  \" data-type=\"page\" data-submenu=\"view_archives\" style=\" width: 19%;margin-left:3px;\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\">  <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span>  </span></a> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\" style=\" margin-left: -10px;width: 132px;\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div></div><div class=\"clear\"> </div></div>");
            } else {
                var subMenu = '<div class="tab-rb-submenu inline-block v-align-mid"> <div class="p-relative "> '
                        + '<div style="display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;"  href="/submenus" class="snap  left f-sz-16 opensans-light homesubmenu p-relative " data-type="page" data-submenu="dt-homesubmenu"><span class="submenu-title t-caps f-color-w" style="  color: transparent;">dfgdfgddfgdfg</span></div>'
                        + '<a style="width:140px;"  href="/myalerts" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative selected-tab" data-type="page" data-submenu="myalerts"> <span class="submenu-title t-caps f-color-w"> My Alerts </span> <span class="cnt-blk">'
                        + ' <span class="countclass"> ' + sessionStorage.MYALERTSCOUNT + ' </span>  </span> </a> <a href="/incidents" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative" data-type="page" data-submenu="incidents"  style="  opacity: 0;pointer-events: none;"> <div class="submenu-title t-caps inline-block f-color-w v-align-mid" style="  margin-top: -4px;"> incidents </div></a> <a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative" data-type="page" data-submenu="policies" style="  opacity: 0;pointer-events: none;"> <span class="submenu-title t-caps f-color-w"> Policies </span> </a> <a href="/archives" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative" data-type="page" data-submenu="archives" style="margin-left:40px;visibility:hidden;"> <span class="submenu-title t-caps f-color-w"> Archive </span> </a> <a href="/viewarchives" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative" data-type="page" data-submenu="view_archives"  style="  width: 19%;margin-left:-5px;"> <span class="submenu-title t-caps f-color-w"> View Archived </span> <span class="cnt-blk">  <span class="countclassarch"> ' + sessionStorage.ArchieveCOUNT + ' </span> </span></a> <div href="#" class="snap submenu-sort right f-sz-16 opensans-light p-relative" data-type="page" data-submenu="sortby" style="  margin-left: -10px;width: 132px;"> <div class="sort-text f-italic"> ' + "Recent" + ' </div><div class="sprite-im drop-down-icon submenu-drop-icon"> &nbsp; </div></div></div><div class="clear"> </div></div>';
                $(".mb-submenu-in").html(subMenu);
                // $(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div><div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light view_archives p-relative\" data-type=\"page\" data-submenu=\"view_archives\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\" style=\"\">  <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span>  </span></a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"#\" class=\"snap left f-sz-16 opensans-light home t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"home\"><div class=\"carrierfeeds\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \" style=\"background-position: 0px 0px; width: 33px;height:31px;\">&nbsp;</div><span class=\"sub-menu-text inline-block v-align-mid\"> FEEDS </span><span id=\"id-customers-headername\"> </span></div></a></div><div class=\"clear\"> </div></div>");
            }

        }
        //
        if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "MY_ALERTS" || sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "HOMEPAGE" || sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == null) {
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                $(".myalerts").click();
                $(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a style=\"width:150px;\" href=\"/myalerts\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative selected-tab\" data-type=\"page\" data-submenu=\"myalerts\"> <span class=\"submenu-title t-caps f-color-w\"> My Alerts </span> <span class=\"cnt-blk\"> <span class=\"countclass\"> " + sessionStorage.MYALERTSCOUNT + " </span>  </span> </a> <a href=\"/incidents\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative\" data-type=\"page\" data-submenu=\"incidents\"> <div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style=\" margin-top: -4px;\"> incidents </div></a> <a href=\"/policies\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative \" data-type=\"page\" data-submenu=\"policies\"> <span class=\"submenu-title t-caps f-color-w\"> Policies </span> </a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"margin-left:40px;visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative  \" data-type=\"page\" data-submenu=\"view_archives\" style=\" width: 19%;margin-left:3px;\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\"> <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span> </span></a> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\" style=\" margin-left: -10px;width: 132px;\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div></div><div class=\"clear\"> </div></div>");
            } else {
                var subMenu = '<div class="tab-rb-submenu inline-block v-align-mid"> <div class="p-relative "> '
                        + '<div style="display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;"  href="/submenus" class="snap  left f-sz-16 opensans-light homesubmenu p-relative " data-type="page" data-submenu="dt-homesubmenu"><span class="submenu-title t-caps f-color-w" style="  color: transparent;">dfgdfgddfgdfg</span></div>'
                        + '<a style="width:150px;"  href="/myalerts" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative selected-tab" data-type="page" data-submenu="myalerts"> <span class="submenu-title t-caps f-color-w"> My Alerts </span> <span class="cnt-blk">'
                        + ' <span class="countclass"> ' + sessionStorage.MYALERTSCOUNT + ' </span>  </span> </a> <a href="/incidents" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative" data-type="page" data-submenu="incidents"  style="  opacity: 0;pointer-events: none;"> <div class="submenu-title t-caps inline-block f-color-w v-align-mid" style="  margin-top: -4px;"> incidents </div></a> <a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative" data-type="page" data-submenu="policies" style="  opacity: 0;pointer-events: none;"> <span class="submenu-title t-caps f-color-w"> Policies </span> </a> <a href="/archives" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative" data-type="page" data-submenu="archives" style="margin-left:40px;visibility:hidden;"> <span class="submenu-title t-caps f-color-w"> Archive </span> </a> <a href="/viewarchives" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative" data-type="page" data-submenu="view_archives"  style="  width: 19%;margin-left:-5px;"> <span class="submenu-title t-caps f-color-w"> View Archived </span> <span class="cnt-blk">  <span class="countclassarch"> ' + sessionStorage.ArchieveCOUNT + ' </span> </span></a> <div href="#" class="snap submenu-sort right f-sz-16 opensans-light p-relative" data-type="page" data-submenu="sortby" style="  margin-left: -10px;width: 132px;"> <div class="sort-text f-italic"> ' + "Recent" + ' </div><div class="sprite-im drop-down-icon submenu-drop-icon"> &nbsp; </div></div></div><div class="clear"> </div></div>';
                $(".mb-submenu-in").html(subMenu);
                //$(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div><div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light view_archives p-relative\" data-type=\"page\" data-submenu=\"view_archives\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\" style=\"\"> <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span>  </span></a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"#\" class=\"snap left f-sz-16 opensans-light home t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"home\"><div class=\"carrierfeeds\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \" style=\"background-position: 0px 0px; width: 33px;height:31px;\">&nbsp;</div><span class=\"sub-menu-text inline-block v-align-mid\"> FEEDS </span><span id=\"id-customers-headername\"> </span></div></a></div><div class=\"clear\"> </div></div>");
            }
        }
        //
        if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "VIEW_ARCHIVES") {
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                $(".view_archives").click();
                $(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a style=\"width:150px;\" href=\"/myalerts\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative\" data-type=\"page\" data-submenu=\"myalerts\"> <span class=\"submenu-title t-caps f-color-w\"> My Alerts </span> <span class=\"cnt-blk\"> <span class=\"countclass\"> " + sessionStorage.MYALERTSCOUNT + "</span>  </span> </a> <a href=\"/incidents\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative\" data-type=\"page\" data-submenu=\"incidents\"> <div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style=\" margin-top: -4px;\"> incidents </div></a> <a href=\"/policies\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative\" data-type=\"page\" data-submenu=\"policies\"> <span class=\"submenu-title t-caps f-color-w\"> Policies </span> </a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"margin-left:40px;visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative  selected-tab\" data-type=\"page\" data-submenu=\"view_archives\" style=\" width: 19%;margin-left:3px;\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\">  <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span>  </span></a> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\" style=\" margin-left: -10px;width: 132px;\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div></div><div class=\"clear\"> </div></div>");
            } else {
                var subMenu = '<div class="tab-rb-submenu inline-block v-align-mid"> <div class="p-relative "> '
                        + '<div style="display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;"  href="/submenus" class="snap  left f-sz-16 opensans-light homesubmenu p-relative " data-type="page" data-submenu="dt-homesubmenu"><span class="submenu-title t-caps f-color-w" style="  color: transparent;">dfgdfgddfgdfg</span></div>'
                        + '<a style="width:150px;"  href="/myalerts" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative" data-type="page" data-submenu="myalerts"> <span class="submenu-title t-caps f-color-w"> My Alerts </span> <span class="cnt-blk">'
                        + ' <span class="countclass"> ' + sessionStorage.MYALERTSCOUNT + ' </span>  </span> </a> <a href="/incidents" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative" data-type="page" data-submenu="incidents"  style="  opacity: 0;pointer-events: none;"> <div class="submenu-title t-caps inline-block f-color-w v-align-mid" style="  margin-top: -4px;"> incidents </div></a> <a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative" data-type="page" data-submenu="policies" style="  opacity: 0;pointer-events: none;"> <span class="submenu-title t-caps f-color-w"> Policies </span> </a> <a href="/archives" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative" data-type="page" data-submenu="archives" style="margin-left:40px;visibility:hidden;"> <span class="submenu-title t-caps f-color-w"> Archive </span> </a> <a href="/viewarchives" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative selected-tab" data-type="page" data-submenu="view_archives"  style="  width: 18%;"> <span class="submenu-title t-caps f-color-w"> View Archived </span> <span class="cnt-blk">  <span class="countclassarch"> ' + sessionStorage.ArchieveCOUNT + ' </span> </span></a> <div href="#" class="snap submenu-sort right f-sz-16 opensans-light p-relative" data-type="page" data-submenu="sortby" style="  margin-left: -10px;width: 132px;"> <div class="sort-text f-italic"> ' + "Recent" + ' </div><div class="sprite-im drop-down-icon submenu-drop-icon"> &nbsp; </div></div></div><div class="clear"> </div></div>';
                $(".mb-submenu-in").html(subMenu);
            }

        }
    },
    getCountResponseview: function (resp) {
        try {
            if (resp.resultMap.CountForHomeFeed != undefined) {
                sessionStorage.MYALERTSCOUNT = "( " + resp.resultMap.CountForHomeFeed + "/" + resp.resultMap.CountForTotalHomeFeed + " )";
                sessionStorage.ArchieveCOUNT = "( " + resp.resultMap.CountForArchieve + "/" + resp.resultMap.CountForTotalArchiveFeed + " )";
            } else {
                sessionStorage.MYALERTSCOUNT = "";
                sessionStorage.ArchieveCOUNT = "";
            }
        } catch (e) {
            sessionStorage.MYALERTSCOUNT = "";
            sessionStorage.ArchieveCOUNT = "";
        }

        $(".countclass").text(sessionStorage.MYALERTSCOUNT);
        $(".countclassarch").text(sessionStorage.ArchieveCOUNT);


    },
    getCountResponse1: function (resp) {
        try {
            if (resp.resultMap.CountForHomeFeed != undefined) {
                sessionStorage.MYALERTSCOUNT = "( " + resp.resultMap.CountForHomeFeed + "/" + resp.resultMap.CountForTotalHomeFeed + " )";
                sessionStorage.ArchieveCOUNT = "( " + resp.resultMap.CountForArchieve + "/" + resp.resultMap.CountForTotalArchiveFeed + " )";
            } else {
                sessionStorage.MYALERTSCOUNT = "";
                sessionStorage.ArchieveCOUNT = "";
            }
        } catch (e) {
            sessionStorage.MYALERTSCOUNT = "";
            sessionStorage.ArchieveCOUNT = "";
        }
        $(".countclass").text(sessionStorage.MYALERTSCOUNT);
        $(".countclassarch").text(sessionStorage.ArchieveCOUNT);
        protocall.view.loadHomePage(false);
    },
    getCountResponse: function (resp) {
        try {
            if (resp.resultMap.CountForHomeFeed != undefined) {
                sessionStorage.MYALERTSCOUNT = "( " + resp.resultMap.CountForHomeFeed + "/" + resp.resultMap.CountForTotalHomeFeed + " )";
                sessionStorage.ArchieveCOUNT = "( " + resp.resultMap.CountForArchieve + "/" + resp.resultMap.CountForTotalArchiveFeed + " )";
            } else {
                sessionStorage.MYALERTSCOUNT = "";
                sessionStorage.ArchieveCOUNT = "";
            }
        } catch (e) {
            sessionStorage.MYALERTSCOUNT = "";
            sessionStorage.ArchieveCOUNT = "";
        }
        $(".countclass").text(sessionStorage.MYALERTSCOUNT);
        $(".countclassarch").text(sessionStorage.ArchieveCOUNT);
        protocall.setPageNavigation(HOME_PAGE);
        protocall.displaySpinner(true);
    },
    getresponsecarrieragency: function (data) {

        console.log("manojkrish", data);
        RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = data;
        //localStorage.setItem("customerDataValues", JSON.stringify(data.resultMap.customerTab));
        localStorage.setItem("customerDetailsValue", JSON.stringify(data));
        RESPONSE.customers_data[0] = data.resultMap.customerTab;
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            if (localStorage.LoginType == 'Admin') {
                HOMEPAGERESPONSE.CUSTOMERDATA = data.resultMap.userTab;
            }
        } else {
            if (localStorage.LoginType == 'Admin') {
                HOMEPAGERESPONSE.CUSTOMERDATA = data.resultMap.customerTab;
            } else {
                HOMEPAGERESPONSE.CUSTOMERDATA = data.resultMap.customerTab.userDetails;
                localStorage.setItem("carrierCustomerData", JSON.stringify(HOMEPAGERESPONSE.CUSTOMERDATA));
            }
        }

        if (sessionStorage.IsCustomersTab == "true") {
            RESPONSE.ASSOCIATEFEED = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
            protocall.carrier.loadCarrierOwnerCustomersAssociatedReps();
        }
        if (sessionStorage.isRepView == "true") {
            sessionStorage.isRepView = "false";
            protocall.view.viewCarrierRepsDetails(true, null);
        }
    },
    initAgenciesPage: function () {
        //sessionStorage.setItem("SUBMENU", "AGENICES_PAGE");
        //CustomerdynamicTemplate.customer.loadCarrierOwnerAgenciesPage(null);
        $("div.submenu-sort div:nth-child(1)").text("Recent");
        popUpContent.closePopUpContent();
        protocall.view.loadCarrierOwnerAgenciesPage(true);
        /* HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
         HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false; */
        //HOMEPAGERESPONSE.UNREADFEEDCOUNT = 0;
        //module_ServerCall.parseAgenciesPageFeedData(++AGENCY.CUSTOMERPAGINATIONUMBER);

    },
    initCarrierOwnerAgenciesPage: function () {
        sessionStorage.setItem("SUBMENU", "CARRIERS_AGENCY_PAGE");
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
        module_ServerCall.parseAgenciesPageFeedData(++AGENCY.CUSTOMERPAGINATIONUMBER);
        //CustomerdynamicTemplate.customer.loadCarrierOwnerAgenciesPage(null);
    },
    loadeAgencyData: function (response) {
        if (response.resultMap.TypeCode == "4011") {
            if (response.resultMap.AgencyTab != "undefined") {
                CARRIER.AGENCYDATA = response.resultMap.AgencyTab;
                CustomerdynamicTemplate.customer.loadCarrierOwnerAgenciesPage(CARRIER.AGENCYDATA);
            } else {
                console.log("no agency data available");
            }
        } else {
            console.log("error response");
        }
    },
    initAgencyPage: function () {
        if (PAGEREFRESH.ISPAGEREFRESHEDFORAGENCY) {
            var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            var content = '<div class="container"> <div class="content-holder"></div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            $("#page").empty();
            totalHtml = header + content + footer;
            $("#page").append(totalHtml);
            $('.setProfilePic').fillBox();
        }
        AgencydynamicTemplate.agency.agencyDetailViewTemplate();
    }, initCarrierPage: function () {

        sessionStorage.setItem("SUBMENU", "CARRIER_PAGE");
        var pageNumber = 1;
        module_ServerCall.parseCarriersPageFeedData(++CARRIER.CUSTOMERPAGINATIONUMBER);
        console.log("carrier data in the agency role", AGENCY.CARRIERDATA);
//        localStorage.mycarvalue1 = "mysortselected";
        /* localStorage.mycarvalue2 = "";
         if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
         if (localStorage.getItem("AGENCYCARRIERTABDATA") == undefined) {
         if (localStorage.LoginType == 'Admin') {
         var page = "carriers";
         var data = {agencyId: sessionStorage.ownerId},
         deepPath = "agencydashboarddesign",
         page = "home",
         callback = CarrierdynamicTemplate.carrier.loadcarriercontent,
         authId = "",
         spinnerMsg = "";
         utils.server.makeServerCall(page, data, callback, deepPath);
         } else {
         var data = JSON.parse(localStorage.getItem("representativeAgencyData"));
         CarrierdynamicTemplate.carrier.loadcarriercontent(data);
         }
         } else {
         CarrierdynamicTemplate.carrier.loadcarriercontent(null, null);
         }
         } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
         CarrierdynamicTemplate.carrier.loadcarriercontent();
         } else if (localStorage.LoginType == 'SuperAdmin') {
         localStorage.setItem("TABNAME", "Carriers");
         CarrierdynamicTemplate.carrier.loadcarriercontent();
         } */

    },
    carrierData: function (response) {
        console.log("carrier data", response);
        //if(response.resultMap.TypeCode == "4011"){
        if (response.resultMap.CarrierTab != "undefined") {
            sessionStorage.isNextPageAllowed = response.resultMap.isNextPage;
            AGENCY.CARRIERDATA.push(response.resultMap.CarrierTab);
            var results = [];
            var idsSeen = {}, idSeenValue = {};
            for (var i = 0, len = AGENCY.CARRIERDATA.length, id; i < len; ++i) {
                id = AGENCY.CARRIERDATA[i].carrierId;
                if (idsSeen[id] !== idSeenValue) {
                    results.push(AGENCY.CARRIERDATA[i]);
                    idsSeen[id] = idSeenValue;
                }
            }
            AGENCY.CARRIERDATA = [];
            AGENCY.CARRIERDATA = results;
            CarrierdynamicTemplate.carrier.loadCarrierData(AGENCY.CARRIERDATA);
        } else {
            console.log("no carrier data");
        }
        //} else {
        //console.log("error response");
        //}
    },
    initCarrierPageSort: function () {
        var page = "carriers";
        var data = "",
                deepPath = "carrierlistsortedbyname", page = "home",
                callback = CarrierdynamicTemplate.carrier.loadcarriercontentSort,
                authId = "",
                spinnerMsg = "";
        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    loadCarrierAdminAssociatedCustomers: function () {
        var totalHTML = "<div>There are no Customer details..!</div>";
        var resp = RESPONSE.ASSOCIATEFEED;
        try {
            if (resp.resultMap.agencyTab[0].AssociatedCustomerDetail.length != undefined) {
                if (resp.resultMap.agencyTab[0].AssociatedCustomerDetail.length > 0) {
                    totalHTML = "";
                }
                for (var index1 = 0; index1 < resp.resultMap.agencyTab.length; index1++) {
                    var cusEmail = "";
                    try {
                        cusEmail = resp.resultMap.agencyTab[index1].AgencyDetail.emailId.email;
                    } catch (e1) {
                        cusEmail = resp.resultMap.agencyTab[index1].AgencyDetail.agencyRepresentativeId.email;
                    }
                    if (localStorage.selectedEmail == cusEmail) {
                        for (var index = 0; index < resp.resultMap.agencyTab[index1].AssociatedCustomerDetail.length; index++) {
                            var name = resp.resultMap.agencyTab[index1].AssociatedCustomerDetail[index].firstName;
                            try {
                                name = name + " " + resp.resultMap.agencyTab[index1].AssociatedCustomerDetail[index].lastName;
                            } catch (e) {

                            }
                            var location = resp.resultMap.agencyTab[index1].AssociatedCustomerDetail[index].residentialCity + "," + resp.resultMap.agencyTab[index1].AssociatedCustomerDetail[index].residentialState;
                            var email = resp.resultMap.agencyTab[index1].AssociatedCustomerDetail[index].emailId.email;
                            var carrierid = resp.resultMap.agencyTab[index1].AssociatedCustomerDetail[index].carrierId;
                            var image = resp.resultMap.agencyTab[index1].AssociatedCustomerDetail[index].profilePicture;
                            var cusEmail = "";
                            try {
                                cusEmail = resp.resultMap.agencyTab[index1].AgencyDetail.emailId.email;
                            } catch (e1) {
                                cusEmail = resp.resultMap.agencyTab[index1].AgencyDetail.agencyRepresentativeId.email;
                            }
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
                            var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="dt-viewcustomerfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                    + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                    + 'alt="" class="carrier-img-width   spinner-loader "> '
                                    + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                    + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                    + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                    + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div>';
                            totalHTML += associateBlock;
                        }
                    }
                }

            }

        } catch (err) {

        }

        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
        $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");
        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "10px");
            $(".associated-carrier-pic").css("height", "63px");
            $(".carrier-img-width").removeClass("spinner-loader");
            $('.carrier-img-width').fillBox();
        }, 1200);
        var Omega = '\u003E';
        $(".mb-submenu-in").empty();
        $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap CarrierAgencies p-relative f-color-green\" data-type=\"page\" data-submenu=\"carrieragency\"><div class=\"\"><div class=\"sprite-im carriers-icon inline-block v-align-mid mr-space-10 \"> </div>"
                + "<span class=\"sub-menu-text inline-block v-align-mid\"> AGENCIES </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div><div class=\"tab-rb-submenu inline-block v-align-mid\" style=\"width:53%;\"><div class=\"tab-rb-submenu-in-block p-relative\"><div href=\"#\" class=\"snap submenu-sort right f-sz-16 ptsans-light p-relative\" data-type=\"page\" data-submenu=\"sortbycustomer\"><div class=\"sort-text f-italic\">Sort by</div><div class=\"sprite-im drop-down-icon submenu-drop-icon\">&nbsp;</div></div>"
                + "<a href=\"#\" class=\"snap submenu-tab bg-color-green right f-sz-16 ptsans-light  p-relative\" data-type=\"page\" data-submenu=\"editcarrierowner_agencydetails\"  style=\"display:none;\">"
                + "<div class=\"sprite-im edit-icon inline-block tab-icon v-align-mid\" style=\"display:inline-block;margin-left:0px;margin-right: 5px;\">&nbsp;</div><div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style='margin-top:-4px;'> Edit </div><div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;\">(<span class=\"cnt-no\"></span>)</div></a></div></div>");
        if (totalHTML == "<div>There is no records</div>") {
            showAlertBox("No Associated Customers Records..!");
        }
    },
    loadCarrierAdminAssociatedRep: function () {
        var totalHTML = "<div>There are no Representative for this customers..!</div>";
        var resp = "";
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            resp = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
            if (resp.resultMap.agencyTab.length != undefined) {
                for (var index1 = 0; index1 < resp.resultMap.agencyTab.length; index1++) {
                    var cusEmail = "";
                    try {
                        cusEmail = resp.resultMap.agencyTab[index1].AgencyDetail.emailId.email;
                    } catch (e1) {
                        cusEmail = resp.resultMap.agencyTab[index1].AgencyDetail.agencyRepresentativeId.email;
                    }
                    if (localStorage.selectedEmail == cusEmail) {
                        totalHTML = "";
                        for (var index = 0; index < resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail.length; index++) {
                            var name, location, email, carrierid, image = ""; // = resp.resultMap.agencyTab[0].AssociatedRepresentativeDetail[index].name;


                            if (resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].firstName == undefined) {
                                if (resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index] == "There is no employee under this agency") {
                                    $("#id-carrierassociatedblock").html('');
                                    $("#id-carrierassociatedblock").append("<div>There is no representative under this agency..!</div>");
                                    showAlertBox("There is no representative under this agency..!");
                                    return false;
                                }
                                name = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].firstName;
                            } else {
                                name = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].firstName;
                            }
                            try {
                                name = name + " " + resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].lastName;
                            } catch (e) {

                            }

                            if (resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].location == undefined) {
                                location = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].residentalCity + "," + resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].residentalState;
                            } else {
                                location = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].location;
                            }

                            try {
                                if (resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].agencyRepresentativeId.email == undefined) {
                                    email = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].emailId.email;
                                } else {
                                    email = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].agencyRepresentativeId.email;
                                }
                            } catch (err) {
                                try {
                                    if (resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].emailId.email == undefined) {
                                        email = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].emailId.email;
                                    } else {
                                        email = "N/A";
                                    }
                                } catch (e) {
                                    email = "N/A";
                                }
                            }

                            if (resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].profilePicture == undefined) {
                                image = undefined;
                            } else {
                                image = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].profilePicture;
                            }

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

                            if (location.indexOf("undefined") > -1) {
                                location = "";
                            }
                            var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view  left p-relative" data-type=""> <div class=" p-relative"> <div class="associated-background p-relative">'
                                    + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                    + 'alt="" class="carrier-img-width   spinner-loader "> '
                                    + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                    + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                    + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                    + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div>';
                            totalHTML += associateBlock;
                        }
                    }
                }
            }
        } else {
            resp = RESPONSE.ASSOCIATEFEED;
            if (resp.resultMap.agencyTab.length != undefined) {
                for (var index1 = 0; index1 < resp.resultMap.agencyTab.length; index1++) {
                    var cusEmail = "";
                    try {
                        cusEmail = resp.resultMap.agencyTab[index1].AgencyDetail.emailId.email;
                    } catch (e1) {
                        cusEmail = resp.resultMap.agencyTab[index1].AgencyDetail.agencyRepresentativeId.email;
                    }
                    if (localStorage.selectedEmail == cusEmail) {
                        totalHTML = "";
                        for (var index = 0; index < resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail.length; index++) {
                            var name, location, email, carrierid, image = ""; // = resp.resultMap.agencyTab[0].AssociatedRepresentativeDetail[index].name;


                            if (resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].firstName == undefined) {
                                name = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].firstName;
                            } else {
                                name = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].firstName;
                            }
                            try {
                                name = name + " " + resp.resultMap.agencyTab[index1].AssociatedCustomerDetail[index].lastName;
                            } catch (e) {

                            }

                            if (resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].location == undefined) {
                                location = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].residentalCity + ", " + resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].residentalState;
                            } else {
                                location = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].location;
                            }

                            try {
                                if (resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].agencyRepresentativeId.email == undefined) {
                                    email = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].emailId.email;
                                } else {
                                    email = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].agencyRepresentativeId.email;
                                }
                            } catch (err) {
                                try {
                                    if (resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].emailId.email == undefined) {
                                        email = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].emailId.email;
                                    } else {
                                        email = "N/A";
                                    }
                                } catch (e) {
                                    email = "N/A";
                                }
                            }

                            if (resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].profilePicture == undefined) {
                                image = undefined;
                            } else {
                                image = resp.resultMap.agencyTab[index1].AssociatedRepresentativeDetail[index].profilePicture;
                            }

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

                            if (location.indexOf("undefined") > -1) {
                                location = "";
                            }
                            var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view  left p-relative" data-type=""> <div class=" p-relative"> <div class="associated-background p-relative">'
                                    + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                    + 'alt="" class="carrier-img-width   spinner-loader "> '
                                    + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                    + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                    + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                    + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div>';
                            totalHTML += associateBlock;
                        }
                    }
                }

            }
        }

        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
        $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");
        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "10px");
            $(".associated-carrier-pic").css("height", "63px");
            $(".carrier-img-width").removeClass("spinner-loader");
            $('.carrier-img-width').fillBox();
        }, 1200);
    },
    loadCarrierAssociatedCustomers: function () {

        var totalHTML = "<div>There are no Customer details..!</div>";
        var resp = RESPONSE.customers_data[0];
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.LoginType == 'Representatives') {
                try {
                    if (resp.length != undefined) {
                        //                                            for (var index = 0; index < resp.length; index++) {

                        if (index == 0) {
                            totalHTML = "";
                        }

                        var name = resp[index].userDetails.firstName;
                        var location = resp[index].userDetails.residentialCity + "," + resp[index].userDetails.residentialState;
                        var email = resp[index].userDetails.emailId.email;
                        var carrierid = resp[index].userDetails.carrierId;
                        var image = resp[index].userDetails.profilePicture;
                        if (name == undefined) {
                            name = "";
                        }
                        try {
                            name = name + " " + resp[index].userDetails.lastName;
                        } catch (e) {

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
                        var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="dt-viewcustomerfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                + 'alt="" class="carrier-img-width   spinner-loader "> '
                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div>';
                        totalHTML += associateBlock;
                    }

                } catch (err) {
                    totalHTML = "<div>There is no Customers details..!</div>";
                    for (var index = 0; index < resp.length; index++) {

                        if (index == 0) {
                            totalHTML = "";
                        }

                        var name = resp[index].userDetails.firstName;
                        var location = resp[index].userDetails.residentialCity + "," + resp[index].userDetails.residentialState;
                        var email = resp[index].userDetails.emailId.email;
                        var carrierid = resp[index].userDetails.carrierId;
                        var image = resp[index].userDetails.profilePicture;
                        if (name == undefined) {
                            name = "";
                        }
                        try {
                            name = name + " " + resp[index].userDetails.lastName;
                        } catch (e) {

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
                        var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="dt-viewcustomerfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                + 'alt="" class="carrier-img-width   spinner-loader "> '
                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div>';
                        totalHTML += associateBlock;
                    }

                }
            }

        } else {
            try {
                if (resp.resultMap.agencyTab[0].associatedCustomers.length != undefined) {
                    if (resp.resultMap.agencyTab[0].associatedCustomers.length > 0) {
                        totalHTML = "";
                    }
                    for (var index = 0; index < resp.resultMap.agencyTab[0].associatedCustomers.length; index++) {

                        var name = resp.resultMap.agencyTab[0].associatedCustomers[index].firstName;
                        var location = resp.resultMap.agencyTab[0].associatedCustomers[index].residentialCity + "," + resp.resultMap.agencyTab[0].associatedCustomers[index].residentialState;
                        var email = resp.resultMap.agencyTab[0].associatedCustomers[index].emailId.email;
                        var carrierid = resp.resultMap.agencyTab[0].associatedCustomers[index].carrierId;
                        var image = resp.resultMap.agencyTab[0].associatedCustomers[index].profilePicture;
                        try {
                            name = name + " " + resp.resultMap.agencyTab[0].associatedCustomers[index].lastName;
                        } catch (e) {

                        }
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
                        var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="dt-viewcustomerfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                + 'alt="" class="carrier-img-width   spinner-loader "> '
                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div>';
                        totalHTML += associateBlock;
                    }
                }
            } catch (err) {
                sessionStorage.IsDropdownClick = "true";
                totalHTML = "<div>There are no Customer details..!</div>";
            }
        }

        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
        $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");
        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "10px");
            $(".associated-carrier-pic").css("height", "63px");
            $(".carrier-img-width").removeClass("spinner-loader");
            $('.carrier-img-width').fillBox();
        }, 1200);
        if (totalHTML == "<div>There is no Customers details..!</div>") {
            showAlertBox("There is no Customers details..!");
        }
    },
    loadCarrierAssociatedReps: function () {
        var totalHTML = "<div>There are no Representative for this customer..!</div>";
        var resp = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
        try {
            if (resp.resultMap.agencyTab.length != undefined) {
                for (var index1 = 0; index1 < resp.resultMap.agencyTab.length; index1++) {

                    var cusEmail = "";
                    try {
                        cusEmail = resp.resultMap.agencyTab[index1].agencyDetail.emailId.email;
                    } catch (e1) {
                        cusEmail = resp.resultMap.agencyTab[index1].agencyDetail.agencyRepresentativeId.email;
                    }
                    for (var index = 0; index < resp.resultMap.agencyTab[index1].associatedRepresentative.length; index++) {
                        if (index == 0) {
                            totalHTML = "";
                        }
                        var name, location, email, carrierid;
                        if (resp.resultMap.agencyTab[index1].associatedRepresentative[index].firstName == undefined) {
                            name = resp.resultMap.agencyTab[index1].associatedRepresentative[index].firstName;
                        } else {
                            name = resp.resultMap.agencyTab[index1].associatedRepresentative[index].firstName;
                        }
                        try {
                            name = name + " " + resp.resultMap.agencyTab[index1].associatedRepresentative[index].lastName;
                        } catch (e) {

                        }
                        try {
                            if (resp.resultMap.agencyTab[index1].associatedRepresentative[index].residentialCity != undefined) {
                                location = resp.resultMap.agencyTab[index1].associatedRepresentative[index].residentialCity + "," + resp.resultMap.agencyTab[index1].associatedRepresentative[index].residentialState;
                            } else {
                                location = resp.resultMap.agencyTab[index1].associatedRepresentative[index].location;
                            }
                        } catch (e) {
                            location = resp.resultMap.agencyTab[index1].associatedRepresentative[index].location;
                        }

                        try {
                            if (resp.resultMap.agencyTab[index1].associatedRepresentative[index].agencyRepresentativeId.email == undefined) {
                                email = resp.resultMap.agencyTab[index1].associatedRepresentative[index].emailId.email;
                            } else {
                                email = resp.resultMap.agencyTab[index1].associatedRepresentative[index].agencyRepresentativeId.email;
                            }
                        } catch (err) {
                            try {
                                if (resp.resultMap.agencyTab[index1].associatedRepresentative[index].emailId.email != undefined) {
                                    email = resp.resultMap.agencyTab[index1].associatedRepresentative[index].emailId.email;
                                } else {
                                    email = '';
                                }
                            } catch (err) {
                                email = '';
                            }
                        }

                        carrierid = resp.resultMap.agencyTab[index1].associatedRepresentative[index].agencyId;
                        if (name == undefined) {
                            name = "";
                        }
                        if (location == undefined) {
                            location = "";
                        }
                        if (email == undefined) {
                            email = "";
                        }
                        if (location.indexOf("undefined") > -1) {
                            location = "";
                        }

                        var image = ""; // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";

                        if (resp.resultMap.agencyTab[index1].associatedRepresentative[index].profilePicture == undefined)
                        {
                            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                        } else {
                            var profilePath = resp.resultMap.agencyTab[index1].associatedRepresentative[index].profilePicture;
                            image = HOMEPAGERESPONSE.PROFILEAPI + profilePath;
                        }
                        var associateBlock = '<div id=' + email + '  value=' + carrierid + '  class="carrier-feed-associated-view   left p-relative" data-type="dt-assigncustomer"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                + 'alt="" class="carrier-img-width   spinner-loader "> '
                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div>';
                        totalHTML += associateBlock;
                    }
                }

            }
        } catch (err) {
            sessionStorage.IsDropdownClick = "true";
            totalHTML = "<div>There are no Representatives for this customer..!</div>";
        }
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
        $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");
        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "0px");
            $(".associated-carrier-pic").css("height", "63px");
            $(".carrier-img-width").removeClass("spinner-loader");
            $('.carrier-img-width').fillBox();
        }, 1200);
        if (totalHTML == "<div>There are no Representative for this customers..!</div>") {
        }
    },
    loadAssociatedAgencies: function () {
        var totalHTML = "<div>There are no Agency details..!</div>";
        var resp = "";
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.LoginType == 'Representatives') {
                resp = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
                console.log("jhjhj", resp);
                try {
                    if (resp.resultMap.customerTab.length != undefined) {
                        if (resp.resultMap.customerTab.length > 0) {
                            totalHTML = "";
                        }
                        var index = localStorage.getItem("selectedIndex");
                        var name = resp.resultMap.customerTab[index].associatedAgency.agencyName;
                        var location = resp.resultMap.customerTab[index].associatedAgency.city;
                        try {
                            location = location + ", " + resp.resultMap.customerTab[index].associatedAgency.state;
                        } catch (e) {

                        }
                        var email = resp.resultMap.customerTab[index].associatedAgency.emailId.email;
                        var carrierid = resp.resultMap.customerTab[index].associatedAgency.carrierAgencyId;
                        var image = resp.resultMap.customerTab[index].associatedAgency.agencyLogo;
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
                                + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
                        totalHTML += associateBlock;
                    }
                } catch (err) {
                    sessionStorage.IsDropdownClick = "true";
                    totalHTML = "<div>There are no Agency details..!</div>";
                }
            }
        } else {
            resp = RESPONSE.customers_data[0];
            try {
                if (resp.resultMap.customerTab.length != undefined) {
                    if (resp.resultMap.customerTab.length > 0) {
                        totalHTML = "";
                    }
                    var index = localStorage.getItem("selectedIndex");
                    var name = resp.resultMap.customerTab[index].associatedAgency.agencyName;
                    var location = resp.resultMap.customerTab[index].associatedAgency.city;
                    try {
                        location = location + ", " + resp.resultMap.customerTab[index].associatedAgency.state;
                    } catch (e) {

                    }
                    var email = resp.resultMap.customerTab[index].associatedAgency.emailId.email;
                    var carrierid = resp.resultMap.customerTab[index].associatedAgency.carrierAgencyId;
                    var image = resp.resultMap.customerTab[index].associatedAgency.agencyLogo;
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
                            + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
                    totalHTML += associateBlock;
                }
            } catch (err) {
                sessionStorage.IsDropdownClick = "true";
                totalHTML = "<div>There are no Agency details..!</div>";
            }
        }

        $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");
        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "10px");
            $(".associated-carrier-pic").css("height", "63px");
            $(".carrier-img-width").removeClass("spinner-loader");
            $('.carrier-img-width').fillBox();
        }, 1200);
        if (totalHTML == "<div>There is no Agency details..!</div>") {
            showAlertBox("There is no Agency details..!");
        }
    },
    loadCarrierOwnerCustomersAssociatedAgencies: function (resp) {
        var totalHTML = "<div>There are no Agency details..!</div>";
//        var resp = RESPONSE.ASSOCIATEFEED;
        console.log("agejdhjh", resp);
        try {

            var Sname = resp.agencyName;
            if (Sname == undefined) {
                sessionStorage.IsDropdownClick = "true";
                totalHTML = "<div>There are no Agency details..!</div>";
            }
            if (Sname != undefined) {

                var name = resp.agencyName;
                var location = resp.city + " , " + resp.state;
                var email = resp.emailId.email;
                var carrierid = resp.agencyId;
                totalHTML = "";
                if (name == undefined) {
                    name = "";
                }
                if (location == undefined) {
                    location = "";
                }
                if (email == undefined) {
                    email = "";
                }

                var image = ""; // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";

                if (resp.agencyLogo == undefined)
                {
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                } else {
                    var profilePath = resp.agencyLogo;
                    image = HOMEPAGERESPONSE.PROFILEAPI + profilePath;
                }
                var associateBlock = '<div id=' + carrierid + '  class="carrier-feed-associated-view left p-relative" data-type="dt-assigncustomer"> <div class=" p-relative"> <div class="associated-background p-relative">'
                        + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                        + 'alt="" class="carrier-img-width   spinner-loader "> '
                        + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                        + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                        + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                        + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
                totalHTML += associateBlock;
                sessionStorage.IsDropdownClick = "false";
            }
        } catch (e) {
            sessionStorage.IsDropdownClick = "true";
            totalHTML = "<div>There are no Agency details..!</div>";
        }

//        
//        try {
//            if (resp != undefined) {
//                for (var index1 = 0; index1 < resp.resultMap.customerTab.length; index1++) {
//                    var cusEmail = "";
//                    try {
//                        cusEmail = resp.resultMap.customerTab[index1].CustomerDetails.emailId.email;
//                    } catch (e1) {
//                        cusEmail = resp.resultMap.customerTab[index1].CustomerDetails.agencyRepresentativeId.email;
//                    }
//                    if (localStorage.selectedEmail == cusEmail) {
//                        totalHTML = "";
//                        try {
//
//                            var Sname = resp.resultMap.customerTab[index1].AssociatedAgencyDetails.agencyName;
//                            if (Sname == undefined) {
//                                sessionStorage.IsDropdownClick = "true";
//                                totalHTML = "<div>There are no Agency details..!</div>";
//                            }
//                            if (Sname != undefined) {
//
//                                var name = resp.resultMap.customerTab[index1].AssociatedAgencyDetails.agencyName;
//                                var location = resp.resultMap.customerTab[index1].AssociatedAgencyDetails.city + " , " + resp.resultMap.customerTab[index1].AssociatedAgencyDetails.state;
//                                var email = resp.resultMap.customerTab[index1].AssociatedAgencyDetails.emailId.email;
//                                var carrierid = resp.resultMap.customerTab[index1].AssociatedAgencyDetails.agencyId;
//
////                                 try{
////                                name = name+ " "+resp.resultMap.customerTab[index1].AssociatedAgencyDetails.lastName;
//                                //                            }catch(e){
//                                //                                
//                                //                            }
//                                totalHTML = "";
//                                if (name == undefined) {
//                                    name = "";
//                                }
//                                if (location == undefined) {
//                                    location = "";
//                                }
//                                if (email == undefined) {
//                                    email = "";
//                                }
//
//                                var image = ""; // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
//
//                                if (resp.resultMap.customerTab[index1].AssociatedAgencyDetails.agencyLogo == undefined)
//                                {
//                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
//                                } else {
//                                    var profilePath = resp.resultMap.customerTab[index1].AssociatedAgencyDetails.agencyLogo;
//                                    image = HOMEPAGERESPONSE.PROFILEAPI + profilePath;
//                                }
//                                var associateBlock = '<div id=' + carrierid + '  class="carrier-feed-associated-view  carrier-feed-assigntocustomeroverlay-view left p-relative" data-type="dt-assigncustomer"> <div class=" p-relative"> <div class="associated-background p-relative">'
//                                        + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
//                                        + 'alt="" class="carrier-img-width   spinner-loader "> '
//                                        + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
//                                        + '<div class="carrier-name t-caps t-left">' + name + '</div> '
//                                        + '<div class="carrier-location t-caps t-left">' + location + '</div> '
//                                        + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
//                                totalHTML += associateBlock;
//                                sessionStorage.IsDropdownClick = "false";
//                            }
//                        } catch (e) {
//                            sessionStorage.IsDropdownClick = "true";
//                            totalHTML = "<div>There are no Agency details..!</div>";
//                        }
//                        //                        else {
////
////                            var name = resp.resultMap.customerTab[index1].AssociatedAgencyDetails.agencyName;
////                            var location = resp.resultMap.customerTab[index1].AssociatedAgencyDetails.city + "," + resp.resultMap.customerTab[index1].AssociatedAgencyDetails.state;
////                            var email = resp.resultMap.customerTab[index1].AssociatedAgencyDetails.emailId.email;
////                            var carrierid = resp.resultMap.customerTab[index1].AssociatedAgencyDetails.agencyId;
////                            totalHTML = "";
////                            if (name == undefined) {
////                                name = "";
////                            }
////                            if (location == undefined) {
////                                location = "";
////                            }
////                            if (email == undefined) {
////                                email = "";
////                            }
////
////                            var image = "";// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
////
////                            if (resp.resultMap.customerTab[index1].AssociatedAgencyDetails.agencyLogo == undefined)
////                            {
////                                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
////                            } else {
////                                var profilePath = resp.resultMap.customerTab[index1].AssociatedAgencyDetails.agencyLogo;
////                                image = HOMEPAGERESPONSE.PROFILEAPI + profilePath;
////                            }
////                            var associateBlock = '<div id=' + carrierid + '  class="carrier-feed-associated-view  carrier-feed-assigntocustomeroverlay-view left p-relative" data-type="dt-assigncustomer"> <div class=" p-relative"> <div class="associated-background p-relative">'
////                                    + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
////                                    + 'alt="" class="carrier-img-width"> '
////                                    + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
////                                    + '<div class="carrier-name t-caps t-left">' + name + '</div> '
////                                    + '<div class="carrier-location t-caps t-left">' + location + '</div> '
//                        //                                    + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
//                        //                            totalHTML += associateBlock;
//                        //                        }
//                    }
//                }
//            }
//        } catch (err) {
//            sessionStorage.IsDropdownClick = "true";
//            totalHTML = "<div>There are no Agency details..!</div>";
//        }
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
        $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");
        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "10px");
            $(".associated-carrier-pic").css("height", "63px");
            $(".carrier-img-width").removeClass("spinner-loader");
            $('.carrier-img-width').fillBox();
        }, 1200);
        if (totalHTML == "<div>There are no Agencies details..!</div>") {
            showAlertBox("There are no Agencies details..!");
        }
    },
    loadCarrierOwnerCustomersAssociatedReps: function () {


        $("#id-customers-dropdown1").val('ASSOCIATED REPS');
        var totalHTML = "<div>There are no Representative detail..!</div>";
        var resp = RESPONSE.ASSOCIATEFEED;
        if (resp == undefined) {
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Representatives') {
                    var dataq = {};
                    var path = utils.server.getServerPath("carrierdashboarddesignforrepresentativelogin");
                    var request = path(dataq).execute(function (resp) {
                        if (resp.error != undefined) {
                            t.server.handleError(resp);
                        } else {
                            RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
                            RESPONSE.CARRIERREP_DATA[0] = resp;
                            RESPONSE.customers_data[0] = resp.resultMap.customerTab;
                            RESPONSE.agencies_data[0] = resp.resultMap.agencyTab[0].agencyDetail;
                            RESPONSE.carrierrepcustomers_data[0] = resp;
                            RESPONSE.ASSOCIATEFEED = resp;
                            resp = RESPONSE.ASSOCIATEFEED;
                            protocall.loadCarrierOwnerCustomersAssociatedReps();
                        }
                    });
                }
                /*  if (localStorage.LoginType == 'Admin') {
                 
                 var dataq = {};
                 var path = utils.server.getServerPath("carrierdashboarddesign");
                 var request = path(dataq).execute(function (resp) {
                 if (resp.error != undefined) {
                 t.server.handleError(resp);
                 } else {
                 RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
                 RESPONSE.ASSOCIATEFEED = resp;
                 resp = RESPONSE.ASSOCIATEFEED;
                 protocall.loadCarrierOwnerCustomersAssociatedReps();
                 }
                 });
                 } */
            }
        } else {
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                try {
                    if (resp.resultMap.customerTab[1] != undefined) {
                        if (resp.resultMap.customerTab[1].length > 0) {
                            totalHTML = "";
                        }
                        for (var index = 0; index < resp.resultMap.customerTab.length; index++) {

                            if (index == 0) {
                                totalHTML = "";
                            }
                            var name, location, email, carrierid;
                            if (resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.firstName == undefined) {
                                name = resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.firstName;
                            } else {
                                name = resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.firstName;
                            }
                            try {
                                name = name + " " + resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.lastName;
                            } catch (e) {

                            }
                            if (resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.residentialCity != undefined) {
                                location = resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.residentialCity;
                                try {
                                    if (resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.residentialState != undefined) {
                                        location = location + ", " + resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.residentialState;
                                    } else {
                                        try {
                                            location = resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.location;
                                        } catch (q) {
                                            location = "";
                                        }
                                    }

                                } catch (e) {
                                    try {
                                        location = resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.location;
                                    } catch (q) {

                                    }
                                }

                            } else {
                                location = resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.residentialCity;
                                try {
                                    location = resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.location;
                                } catch (q) {

                                }
                            }

                            try {
                                if (resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.carrierRepresentativeId.email == undefined) {
                                    email = resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.emailId.email;
                                } else {
                                    email = resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.carrierRepresentativeId.email;
                                }
                            } catch (err) {
                                try {
                                    if (resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.emailId.email != undefined) {
                                        email = resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.emailId.email;
                                    } else {
                                        email = '';
                                    }
                                } catch (err) {
                                    email = '';
                                }
                            }

                            carrierid = resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.agencyId;
                            if (localStorage.selectedEmail == resp.resultMap.customerTab[index].CustomerDetails.emailId.email) {

                                totalHTML = "";
                                if (name == undefined) {
                                    name = "";
                                }
                                if (location == undefined) {
                                    location = "";
                                }
                                if (email == undefined) {
                                    email = "";
                                }

                                var image = ""; // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";

                                if (resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.profilePicture == undefined)
                                {
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                                } else {
                                    var profilePath = resp.resultMap.customerTab[index].AssociatedCarrierRepresentativeDetails.profilePicture;
                                    image = HOMEPAGERESPONSE.PROFILEAPI + profilePath;
                                }

                                if (location.indexOf("undefined") > -1) {
                                    location = "";
                                }

                                if (name != "undefined undefined") {
                                    var associateBlock = '<div id=' + carrierid + '  class="carrier-feed-associated-view left p-relative" data-type="dt-assigncustomer"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                            + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                            + 'alt="" class="carrier-img-width   spinner-loader "> '
                                            + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                            + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                            + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                            + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
                                    totalHTML += associateBlock;
                                } else {
                                    sessionStorage.IsDropdownClick = "true";
                                    totalHTML = "<div>There are no Representative details..!</div>";
                                    $("#id-carrierassociatedblock").html('');
                                    $("#id-carrierassociatedblock").append(totalHTML);
                                    showAlertBox("There are no Representative details..!");
                                    return false;
                                }


                            }

                        }
                    }
                } catch (err) {
                    sessionStorage.IsDropdownClick = "true";
                    totalHTML = "<div>There are no Representative details..!</div>";
                    showAlertBox("There are no Representative details..!");
                }

            } else {
                try {
                    if (resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails != undefined) {
                        if (resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails.length > 0) {
                        }
                        for (var index = 0; index < resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails.length; index++) {
                            var name, location, email, carrierid;
                            if (resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].firstName == undefined) {
                                name = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].name;
                            } else {
                                name = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].firstName;
                            }
                            try {
                                name = name + " " + resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].lastName;
                            } catch (e) {

                            }
                            if (resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].residentialCity == undefined) {
                                location = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].location;
                            } else {
                                location = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].residentialCity;
                                try {
                                    location = location + ", " + resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].residentialState;
                                } catch (e) {

                                }
                            }

                            try {
                                if (resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].agencyRepresentativeId.email == undefined) {
                                    email = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].emailId.email;
                                } else {
                                    email = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].agencyRepresentativeId.email;
                                }
                            } catch (err) {
                                try {
                                    if (resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].emailId.email != undefined) {
                                        email = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].emailId.email;
                                    } else {
                                        email = '';
                                    }
                                } catch (err) {
                                    email = '';
                                }
                            }

                            carrierid = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].agencyId;
                            if (localStorage.selectedEmail == resp.resultMap.customerTab[1].CustomerDetails.emailId.email) {

                                totalHTML = "";
                                if (name == undefined) {
                                    name = "";
                                }
                                if (location == undefined) {
                                    location = "";
                                }
                                if (email == undefined) {
                                    email = "";
                                }

                                var image = ""; // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";

                                if (resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].profilePicture == undefined)
                                {
                                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                                } else {
                                    var profilePath = resp.resultMap.customerTab[1].AssociatedCarrierRepresentativeDetails[index].profilePicture;
                                    image = HOMEPAGERESPONSE.PROFILEAPI + profilePath;
                                }
                                var associateBlock = '<div id=' + carrierid + '  class="carrier-feed-associated-view left p-relative" data-type="dt-assigncustomer"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                        + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                        + 'alt="" class="carrier-img-width   spinner-loader "> '
                                        + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                        + '<div class="carrier-name t-caps t-left">' + name + '</div> '
                                        + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                        + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
                                totalHTML += associateBlock;
                            }
                        }
                    }
                } catch (err) {
                    sessionStorage.IsDropdownClick = "true";
                    totalHTML = "<div>There are no Representatives for this customer..!</div>";
                    $("#id-carrierassociatedblock").html('');
                    $("#id-carrierassociatedblock").append(totalHTML);
                    showAlertBox("There are no Representatives for this customer..!");
                    return false;
                }
            }
            $("#id-carrierassociatedblock").html('');
            $("#id-carrierassociatedblock").append(totalHTML);
            $(".associated-carrier-pic").css("margin-top", "18px");
            $(".associated-carrier-pic").css("height", "40px");
            setTimeout(function () {
                $(".associated-carrier-pic").css("margin-top", "10px");
                $(".associated-carrier-pic").css("height", "63px");
                $(".carrier-img-width").removeClass("spinner-loader");
                $('.carrier-img-width').fillBox();
            }, 1200);
        }
    },
    loadAssociatedReps: function (resp) {


        var message = "";
        var totalHTML = "<div>There are no Representative for this customer..!</div>";
        //  var resp = RESPONSE.ASSOCIATEFEED;
        console.log("Resp data", resp);
        if (sessionStorage.IsCustomersTab == "true") {

            try {
                if (resp != undefined) {
                    if (resp != "No Representative has been assigned for this customer" && resp != "Still no carrier representative were assigned for this customer") {
                        totalHTML = "";
                        var name, location, email, carrierid = "";
                        if (resp.firstName == undefined) {
                            name = resp.firstName;
                        } else {
                            name = resp.firstName;
                        }
                        try {
                            name = name + " " + resp.lastName;
                        } catch (e) {

                        }
                        try {
                            if (resp.residentialCity != undefined) {
                                location = resp.residentialCity;
                                if (resp.residentialState != undefined) {
                                    location = location + "," + resp.residentialState;
                                }
                            } else {
                                location = resp.location;
                            }
                        } catch (e) {
                            location = resp.location;
                        }

                        try {
                            if (resp.agencyRepresentativeId.email == undefined) {
                                email = resp.emailId.email;
                            } else {
                                email = resp.agencyRepresentativeId.email;
                            }
                        } catch (err) {
                            try {
                                if (resp.emailId.email != undefined) {
                                    email = resp.emailId.email;
                                } else {
                                    email = '';
                                }
                            } catch (err) {
                                email = '';
                            }
                        }

                        carrierid = resp.agencyId;
                        if (name == undefined) {
                            name = "";
                        }
                        if (location == undefined) {
                            location = "";
                        }
                        if (email == undefined) {
                            email = "";
                        }

                        if (location.indexOf("undefined") > -1) {
                            location = "";
                        }

                        var image = ""; // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";

                        if (resp.profilePicture == undefined)
                        {
                            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                        } else {
                            var profilePath = resp.profilePicture;
                            image = HOMEPAGERESPONSE.PROFILEAPI + profilePath;
                        }
                        var associateBlock = '<div id=' + carrierid + '  class="carrier-feed-associated-view left p-relative" data-type="dt-assigncustomer"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                + 'alt="" class="carrier-img-width   spinner-loader "> '
                                + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                + '<div title="' + name + '"  class="carrier-name t-caps t-left">' + name + '</div> '
                                + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
                        totalHTML += associateBlock;
                    } else {
                        sessionStorage.IsDropdownClick = "true";
                        message = "There are no Representative for this customer..!";
                        totalHTML = "<div>There are no Representative for this customer..!</div>";
                    }
                }
            } catch (err) {
                sessionStorage.IsDropdownClick = "true";
                message = "There are no Representative for this customer..!";
                totalHTML = "<div>There are no Representative for this customer..!</div>";
            }
        } else {

            try {
                if (resp.length != undefined) {
                    if (resp.length > 0) {
                        totalHTML = "";
                    }
                    if (resp != "No Represenative with under this carrier are made privacy : off" && resp != "Still no carrier representative were assigned for this customer") {
                        for (var index = 0; index < resp.length; index++) {
                            var name, location, email, carrierid;
                            if (resp[index].firstName == undefined) {
                                name = resp[index].firstName;
                            } else {
                                name = resp[index].firstName;
                            }
                            try {
                                name = name + " " + resp[index].lastName;
                            } catch (e) {

                            }
                            try {
                                if (resp[index].residentialCity != undefined) {
                                    location = resp[index].residentialCity;
                                    if (resp[index].residentialState != undefined) {
                                        location = location + "," + resp[index].residentialState;
                                    }
                                } else {
                                    location = resp[index].location;
                                }
                            } catch (e) {
                                location = resp[index].location;
                            }

                            try {
                                if (resp[index].agencyRepresentativeId.email == undefined) {
                                    email = resp[index].emailId.email;
                                } else {
                                    email = resp[index].agencyRepresentativeId.email;
                                }
                            } catch (err) {
                                try {
                                    if (resp[index].emailId.email != undefined) {
                                        email = resp[index].emailId.email;
                                    } else {
                                        email = '';
                                    }
                                } catch (err) {
                                    try {
                                        if (resp[index].carrierRepresentativeId.email != undefined) {
                                            email = resp[index].carrierRepresentativeId.email;
                                        } else {
                                            email = '';
                                        }
                                    } catch (err) {
                                        email = '';
                                    }
                                }
                            }

                            carrierid = resp[index].agencyId;
                            if (name == undefined) {
                                name = "";
                            }
                            if (location == undefined) {
                                location = "";
                            }
                            if (email == undefined) {
                                email = "";
                            }

                            if (location.indexOf("undefined") > -1) {
                                location = "";
                            }
                            var image = ""; // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";

                            if (resp[index].profilePicture == undefined)
                            {
                                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                            } else {
                                var profilePath = resp[index].profilePicture;
                                image = HOMEPAGERESPONSE.PROFILEAPI + profilePath;
                            }

                            var associateBlock = '<div id=' + carrierid + '  class="carrier-feed-associated-view left p-relative" data-type="dt-assigncustomer"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                    + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                    + 'alt="" class="carrier-img-width   spinner-loader "> '
                                    + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                                    + '<div title="' + name + '"  class="carrier-name t-caps t-left">' + name + '</div> '
                                    + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                    + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div></div> ';
                            totalHTML += associateBlock;
                        }
                    } else {
                        sessionStorage.IsDropdownClick = "true";
                        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                            message = "There are no representatives currently sharing their information publicly for this carrier.";
                            totalHTML = "<div>There are no representatives currently sharing their information publicly for this carrier.</div>";
                        } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                            message = "There are no representatives currently sharing their information publicly for this agency.";
                            totalHTML = "<div>There are no representatives currently sharing their information publicly for this agency.</div>";
                        } else {
                            message = "";
                            totalHTML = "<div></div>";
                        }
                    }
                }
            } catch (err) {
                sessionStorage.IsDropdownClick = "true";
                if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                    message = "There are no representatives currently sharing their information publicly for this carrier.";
                    totalHTML = "<div>There are no representatives currently sharing their information publicly for this carrier.</div>";
                } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                    message = "There are no representatives currently sharing their information publicly for this agency.";
                    totalHTML = "<div>There are no representatives currently sharing their information publicly for this agency.</div>";
                } else {
                    message = "";
                    totalHTML = "<div></div>";
                }
            }
        }
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
        $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");
        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "10px");
            $(".associated-carrier-pic").css("height", "63px");
            $(".carrier-img-width").removeClass("spinner-loader");
            $('.carrier-img-width').fillBox();
        }, 300);
        if (sessionStorage.IsDropdownClick == "true") {
            sessionStorage.IsDropdownClick = "false";
            if (totalHTML == "<div>" + message + "</div>") {
                showAlertBox(message);
            }
        }
        protocall.events.containerScrollEvent();
    },
    loadAssociatedCustomersForAgencyRep: function (data) {
        var totalHTML = "<div>There are no Customer detail..!</div>";
        var resp = data;
        if (resp == undefined || resp == null) {
            resp = JSON.parse(localStorage.getItem("AGENCYREP_ASSOCITAEDCUSTOMERS"));
        }


        try {
            if (resp != "No customer were assigned for this customer") {
                if (resp.length > 1) {
                    totalHTML = "";
                }
                for (var index = 0; index < resp.length; index++) {
                    if (index == 0) {
                        totalHTML = "";
                    }
                    var name = resp[index].firstName;
                    var location = resp[index].residentialCity;
                    try {
                        location = location + ", " + resp[index].residentialState;
                    } catch (e) {

                    }
                    var email = resp[index].emailId.email;
                    var carrierid = resp[index].carrierId;
                    try {
                        name = name + " " + resp[index].lastName;
                    } catch (e) {

                    }
                    if (name == undefined) {
                        name = "";
                    }
                    if (location == undefined) {
                        location = "";
                    }
                    if (email == undefined) {
                        email = "";
                    }
                    var image = ""; // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";

                    if (resp[index].profilePicture == undefined)
                    {
                        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                    } else {
                        var profilePath = resp[index].profilePicture;
                        image = HOMEPAGERESPONSE.PROFILEAPI + profilePath;
                    }
                    var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view left p-relative"> <div class=" p-relative"> <div class="associated-background p-relative">'
                            + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                            + 'alt="" class="carrier-img-width   spinner-loader "> '
                            + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-left">' + name + '</div> '
                            + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                            + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div> ';
                    totalHTML += associateBlock;
                }
            } else {
                totalHTML = "<div>There are no Customer detail..!</div>";
            }


        } catch (err) {
            totalHTML = "<div>There are no Customer detail..!</div>";
            sessionStorage.IsDropdownClick = "true";
        }
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
        $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");
        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "10px");
            $(".associated-carrier-pic").css("height", "63px");
            $(".carrier-img-width").removeClass("spinner-loader");
            $('.carrier-img-width').fillBox();
        }, 300);
        sessionStorage.IsDropdownClick = "true";
        if (sessionStorage.IsDropdownClick == "true") {
            sessionStorage.IsDropdownClick = "false";
            if (totalHTML == "<div>There are no Customer detail..!</div>") {
                showAlertBox("There are no Customer detail..!");
            }
        }
    },
    loadAssociatedCustomers: function () {



        var totalHTML = "";
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            totalHTML = "<div>There are no associated customers for this carrier.</div>";
        } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (sessionStorage.selectedTab != "AGENCY_REP_DETAILS_VIEW") {
                totalHTML = "<div>There are no associated customers for this agency.</div>";
            } else {
                totalHTML = "<div>There are no associated customers for this Representative.</div>";
            }
        } else {
            totalHTML = "<div>There are no associated customers for this carrier.</div>";
        }
        try {
            if (CUSTOMER.ASSOCIATEFEEDDATA.length != 0) {
                totalHTML = "";
            }
            $.each(CUSTOMER.ASSOCIATEFEEDDATA, function (index, associatedCustomer) {
                sessionStorage.IsDropdownClick = "false";
                var name = associatedCustomer.firstName;
                var location = associatedCustomer.residentialCity;
                try {
                    location = location + ", " + associatedCustomer.residentialState;
                } catch (e) {

                }
                var email = "";
                try {
                    associatedCustomer.emailId.email;
                } catch (e) {

                }
                var userId = "";
                try {
                    userId = associatedCustomer.userId;
                } catch (e) {
                    userId = "";
                }
                var carrierid = associatedCustomer.carrierId;
                try {
                    name = name + " " + associatedCustomer.lastName;
                } catch (e) {

                }
                if (name == undefined) {
                    name = "";
                }
                if (location == undefined) {
                    location = "";
                }
                if (email == undefined) {
                    email = "";
                }
                var image = ""; // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";

                if (associatedCustomer.profilePicture == undefined)
                {
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                } else {
                    var profilePath = associatedCustomer.profilePicture;
                    image = HOMEPAGERESPONSE.PROFILEAPI + profilePath;
                }
                var associateBlock = '<div id=' + userId + '  value=' + carrierid + ' class="carrier-feed-associated-view left p-relative"> <div class=" p-relative"> <div class="associated-background p-relative">'
                        + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                        + 'alt=""  class="carrier-img-width spinner-loader "> '
                        + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-left">' + name + '</div> '
                        + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                        + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div> </div> </div> ';
                totalHTML += associateBlock;
            });
        } catch (err) {
//            totalHTML = "<div>There are no associated customers for this agency.</div>";
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                totalHTML = "<div>There are no associated customers for this carrier.</div>";
            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (sessionStorage.selectedTab != "AGENCY_REP_DETAILS_VIEW") {
                    totalHTML = "<div>There are no associated customers for this agency.</div>";
                } else {
                    totalHTML = "<div>There are no associated customers for this Representative.</div>";
                }
//                totalHTML = "<div>There are no associated customers for this agency.</div>";
            } else {
                totalHTML = "<div>There are no associated customers for this carrier.</div>";
            }
            sessionStorage.IsDropdownClick = "true";
        }
        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
        $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");
        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "10px");
            $(".associated-carrier-pic").css("height", "63px");
            $(".carrier-img-width").removeClass("spinner-loader");
            $('.carrier-img-width').fillBox();
        }, 300);
        if (sessionStorage.IsDropdownClick == "true") {
            sessionStorage.IsDropdownClick = "false";
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                totalHTML = "<div>There are no associated customers for this carrier.</div>";
                showAlertBox("There are no associated customers for this carrier.");
            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
//                totalHTML = "<div>There are no associated customers for this agency.</div>";
                if (sessionStorage.selectedTab != "AGENCY_REP_DETAILS_VIEW") {
                    totalHTML = "<div>There are no associated customers for this agency.</div>";
                    showAlertBox("There are no associated customers for this agency.");
                } else {
                    totalHTML = "<div>There are no associated customers for this Representative.</div>";
                    showAlertBox("There are no associated customers for this Representative.");
                }


            } else {
                totalHTML = "<div>There are no associated customers for this carrier.</div>";
                showAlertBox("There are no associated customers for this carrier.");
            }
        }

        $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");
        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "10px");
            $(".associated-carrier-pic").css("height", "63px");
            $(".carrier-img-width").removeClass("spinner-loader");
            $('.carrier-img-width').fillBox();
        }, 1200);
        hideLoadingButton();
        protocall.events.containerScrollEvent();
        protocall.displaySpinner(false);
    },
    loadCarrierOwner_MyRepsAssociatedCustomers: function (contentHtml) {
        var totalHTML = "<div>There are no Customer detail..!</div>";
        var resp = "";
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            resp = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
        } else {
            resp = RESPONSE.ASSOCIATEFEED;
        }
        try {
            if (resp.resultMap.myRepTab != undefined) {
                for (var index1 = 0; index1 < resp.resultMap.myRepTab.length; index1++) {
                    var cusEmail = "";
                    try {
                        cusEmail = resp.resultMap.myRepTab[index1].RepresentativeDetails.carrierRepresentativeId.email;
                    } catch (e1) {
                        cusEmail = resp.resultMap.myRepTab[index1].RepresentativeDetails.emailId.email;
                    }
                    if (localStorage.selectedEmail == cusEmail) {
                        totalHTML = "";
                        for (var index = 0; index < resp.resultMap.myRepTab[index1].AssociatedCustomerDetails.length; index++) {
                            var name = resp.resultMap.myRepTab[index1].AssociatedCustomerDetails[index].firstName;
                            try {
                                name = name + " " + resp.resultMap.myRepTab[index1].AssociatedCustomerDetails[index].lastName;
                            } catch (e) {

                            }
                            var location = resp.resultMap.myRepTab[index1].AssociatedCustomerDetails[index].residentialCity;
                            try {
                                location = location + ", " + resp.resultMap.myRepTab[index1].AssociatedCustomerDetails[index].residentialState;
                            } catch (e) {

                            }
                            var email = resp.resultMap.myRepTab[index1].AssociatedCustomerDetails[index].emailId.email;
                            var carrierid = resp.resultMap.myRepTab[index1].AssociatedCustomerDetails[index].carrierId;
                            if (name == undefined) {
                                name = "";
                            }
                            if (location == undefined) {
                                location = "";
                            }
                            if (email == undefined) {
                                email = "";
                            }

                            var image = ""; // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";

                            if (resp.resultMap.myRepTab[index1].AssociatedCustomerDetails[index].profilePicture == undefined)
                            {
                                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                            } else {
                                var profilePath = resp.resultMap.myRepTab[index1].AssociatedCustomerDetails[index].profilePicture;
                                image = HOMEPAGERESPONSE.PROFILEAPI + profilePath;
                            }
                            var associateBlock = '<div id=' + email + '  value=' + carrierid + ' class="carrier-feed-associated-view mycustomerView left p-relative" data-type="viewcustomerfeedview"> <div class=" p-relative"> <div class="associated-background p-relative">'
                                    + '<div class="associated-carrier-pic inline-block "> <img src=' + image + ' '
                                    + 'alt="" class="carrier-img-width   spinner-loader "> '
                                    + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> <div class="carrier-name t-caps t-left">' + name + '</div> '
                                    + '<div class="carrier-location t-caps t-left">' + location + '</div> '
                                    + '<div class="carrier-location t-caps t-left"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div></div> </div>  </div> </div> ';
                            totalHTML += associateBlock;
                        }
                    }
                }
            }
        } catch (err) {
            totalHTML = "<div>There are no Customers details..!</div>";
            sessionStorage.IsDropdownClick = "true";
        }

        $(".content-holder").empty();
        $(".content-holder").append(contentHtml + totalHTML);
        $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");
        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "10px");
            $(".associated-carrier-pic").css("height", "63px");
            $(".carrier-img-width").removeClass("spinner-loader");
            $('.carrier-img-width').fillBox();
        }, 300);
        protocall.events.GlobalContainerScrollevent();
        $("#id-customers-headername").text(" > " + localStorage.getItem("id-customers-headername"));
        if (sessionStorage.IsDropdownClick == "true") {
            sessionStorage.IsDropdownClick = "false";
            if (totalHTML == "<div>There are no Customers details..!</div>") {
                showAlertBox("There are no Customers details..!");
            }
        }

    },
    openSelect: function (selector) {
        var element = $(selector)[0], worked = false;
        if (document.createEvent) { // all browsers
            var e = document.createEvent("MouseEvents");
            e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            if (element != undefined) {
                worked = element.dispatchEvent(e);
            } else {
                console.log("undefined");
            }
        } else if (element.fireEvent) { // ie             worked = element.fireEvent("onmousedown");         }         if (!worked) { // unknown browser / error
        }
    },
    loadFeed: function (Carrierid) {

        if (PAGEREFRESH.ISPAGEREFRESHEDFORCARRIERFEEDVIEW) {
            var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            var content = '<div class="container"> <div class="content-holder"></div></div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            $("#page").empty();
            totalHtml = header + content + footer;
            $("#page").append(totalHtml);
            $('.setProfilePic').fillBox();
            protocall.events.GlobalContainerScrollevent();
        }
        var totalHTML = "";
        var totalLen = 1;
        for (var h = 0; h < totalLen; h++) {
            var template = staticTemplate.carriers.staticCarrierFeedViewTemplate(Carrierid);
            totalHTML = totalHTML + template;
        }
        if (sessionStorage.loginType != 'SuperAdmin') {
            var dropDownContent = '<div class="associated-carrierview p-relative"> <div id="id-associatedropdown-parent" class="p-relative "  style=" width: 238px; margin-bottom: 10px;">'
                    + '<div id="id-associatedropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED CUSTOMERS</div> '
                    + '<div id="associatedownarrow" class="p-relative inline-block"> <div id="associatedownarrow" class="id-associatedownarrow sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                    + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot">';
            totalHTML = totalHTML + dropDownContent;
        }
        //$(".container").addClass("container-maxwidth");
        totalHTML = totalHTML + "</div>";
        if (!(PAGEREFRESH.ISPAGEREFRESHEDFORCARRIERFEEDVIEW)) {
            $(".rel-feeds-content").empty();
            $(".rel-feeds-content").append($(totalHTML));
        }
        $(".content-holder").empty();
        $(".content-holder").append($(totalHTML));
        $('.carrier-img-width').fillBox();
        protocall.events.GlobalContainerScrollevent();
        $(".carrier-view-rightblock").css("width", "70.9%");
        $(".carrier-view-rightblock").css("margin-left", "51px");
        $(".carrier-view-rightblock").css("margin-top", "-67px");
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            //if (localStorage.LoginType == 'Admin') {
            $(".mb-submenu").empty();
            $(".mb-submenu").append("<div class=\"mb-submenu-in p-relative\"> <div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox snap left f-sz-16 ptsans-light carriers p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers\"><div class=\"\"><div class=\"sprite-im carriers-icon inline-block v-align-mid mr-space-10 \">&nbsp;</div><span class=\"sub-menu-text inline-block v-align-mid t-upper\"> carriers</span><span id=\"id-carrierpage-headertext\"></span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div><div class=\"tab-rb-submenu inline-block v-align-mid\" style=\"width:53%;\"><div class=\"tab-rb-submenu-in-block p-relative\" style='display:none;'><div href=\"#\" class=\"snap submenu-sort right f-sz-16 ptsans-light p-relative\" data-type=\"page\" data-submenu=\"sortbycarrier\" >div class=\"sort-text f-italic\">Recent</div><div class=\"sprite-im drop-down-icon submenu-drop-icon\">&nbsp;</div></div></div></div></div>");
            var Omega = '\u003E';
            $("#id-carrierpage-headertext").text(Omega + "   " + localStorage.getItem("TEMP_CARRIERNAME"));
            $('#id-carrierpage-headertext').prop(Omega + "   " + localStorage.getItem("TEMP_CARRIERNAME"));
            /*  } else {
             $(".mb-submenu").find(".tab-rb-submenu").css("display","none");
             } */
        }

        if (sessionStorage.loginType != 'SuperAdmin') {
            sessionStorage.CarrierId = Carrierid;
            sessionStorage.type = "AssociatedCustomers";
            module_ServerCall.parseCarrierViowAssociatedFeedData(Carrierid, carrieAssociatedPageNumber, "AssociatedCustomers");
        }
        if (localStorage.LoginType == "SuperAdmin") {
            if (localStorage.currentPage == "carriers/viewcarrierfeedview") {
                $(".submenu-sort").css("display", "none");
            }
        }
    }
};
protocall.customer = {
    initCustomerPage: function () {
        clearInterval(homePageUpdate);
        sessionStorage.setItem("SUBMENU", "CUSTOMER_PAGE");
        localStorage.setItem("ARRAY_CUSTOMERS_LIST", "");
//        localStorage.myvalue1 = "mysortselected";
        localStorage.myvalue2 = "";
        sessionStorage.isCustomerAlphaSort = false;
        /* if (localStorage.LoginType == undefined) {
         var page = "customers";
         var data = {agencyId: sessionStorage.ownerId}, deepPath = "agencydashboarddesign",
         page = "customers",
         callback = CustomerdynamicTemplate.customer.loadcustomercontent,
         authId = "",
         spinnerMsg = "";
         utils.server.makeServerCall(page, data, callback, deepPath);
         } */
        /* if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
         if (localStorage.LoginType == 'Admin') {
         var page = "customers";
         var data = {agencyId: sessionStorage.ownerId},
         deepPath = "agencydashboarddesign",
         page = "customers",
         callback = CustomerdynamicTemplate.customer.loadcustomercontent,
         authId = "",
         spinnerMsg = "";
         utils.server.makeServerCall(page, data, callback, deepPath);
         }
         if (localStorage.LoginType == 'Representatives') {
         CustomerdynamicTemplate.customer.loadcustomercontent(null, null);
         }
         } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
         if (localStorage.LoginType == 'Admin') {
         CustomerdynamicTemplate.customer.loadcarrierAdmincustomercontent(null, null);
         }
         if (localStorage.LoginType == 'Representatives') {
         CustomerdynamicTemplate.customer.loadcarrierRepcustomercontent(null, null);
         }
         } else if (sessionStorage.loginType == 'SuperAdmin') {
         localStorage.setItem("TABNAME", "Customers");
         CustomerdynamicTemplate.customer.loadcustomercontent(null, null);
         } */
        //As per the latest server call changes
        // if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
        module_ServerCall.parseCustomersData(++CUSTOMER.CUSTOMERPAGINATIONUMBER, sessionStorage.isCustomerAlphaSort);
//            var page = "customers";
//            var pageNumberForCustomer = 1;
//            var data = {pageNumber: pageNumberForCustomer};
//            callback = protocall.customer.customerData;
//            var deepPath = "customertabforagencydashboard";
//            utils.server.makeServerCall(page, data, callback, deepPath);
        // }

    },
    customerData: function (data) {
        clearInterval(homePageUpdate);
        console.log("customerData", data);
        if (data.resultMap.TypeCode == "4011") {

            sessionStorage.isNextPageAllowed = data.resultMap.isNextPage;
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (data.resultMap.AlertMessage != "There were no customer for this carrier") {
                    if (data.resultMap.customerTab != "undefined") {


                        CUSTOMER.AGENCY.CUSTOMERDATA.push(data.resultMap.customerTab);
//                if (Object.keys(CUSTOMER.AGENCY.CUSTOMERDATA).length == 0) {
//                    CUSTOMER.AGENCY.CUSTOMERDATA.push(data.resultMap.customerTab);
//                    localStorage.setItem("CUSTOMERDATAFORAGENCYROLE", JSON.stringify(data.resultMap.customerTab));
//                } else {
//                    CUSTOMER.AGENCY.CUSTOMERDATA = data.resultMap.customerTab;
//                    localStorage.setItem("CUSTOMERDATAFORAGENCYROLE", JSON.stringify(data.resultMap.customerTab));
////                    CUSTOMER.AGENCY.CUSTOMERDATA = CUSTOMER.AGENCY.CUSTOMERDATA + data.resultMap.customerTab;
////                    localStorage.setItem("CUSTOMERDATAFORAGENCYROLE", localStorage.getItem("CUSTOMERDATAFORAGENCYROLE") + JSON.stringify(data.resultMap.customerTab));
//                }


                        CustomerdynamicTemplate.customer.loadCustomerDetailsForAgencyRole(data.resultMap.customerTab);
                        //protocall.displaySpinner(false);
                        //$(".content-holder").css("opacity", "0.5").addClass("spinner1");
//                        $(".content-holder").css("opacity", "1");
//                        $(".content-holder").removeClass("spinner1");
                        //$(".rep-content-blk").css("opacity", "0.5");
                    } else {
                        console.log("no customer data");
                    }
                } else {
//                    $(".content-holder").removeClass("spinner1");
                    //$(".mb-submenu").css("display", "none");
                    var type = "Alphabetical";
                    var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
                    var content = '<div class="container"> <div class="content-holder">There were no customer for this carrier</div></div></div>'
                            + '<div class="div-reloadpage">'
                            + '<div class="div-loadbutton"><span class="spinner-loadmore"></span><div class="loadmore-txt">Load More</div></div>'
                            + '<div class="div-gototop-button">Go to top</div></div></div>';
                    var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
                    $("#page").empty();
                    var totalHtml = header + content + footer;
                    $("#page").append(totalHtml);
                    $(".submenu-sort").css("display", "none");
                    $(".mb-menu a.selected-tab").removeClass("selected-tab");
                    if (CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE == "customers") {
                        $(".mb-menu a.customers").addClass("selected-tab");
                    }
                    showAlertBox("There were no customer for this carrier");
                }
            } else {
                if (data.resultMap.customerTab != "undefined") {


                    CUSTOMER.AGENCY.CUSTOMERDATA.push(data.resultMap.customerTab);
//                if (Object.keys(CUSTOMER.AGENCY.CUSTOMERDATA).length == 0) {
//                    CUSTOMER.AGENCY.CUSTOMERDATA.push(data.resultMap.customerTab);
//                    localStorage.setItem("CUSTOMERDATAFORAGENCYROLE", JSON.stringify(data.resultMap.customerTab));
//                } else {
//                    CUSTOMER.AGENCY.CUSTOMERDATA = data.resultMap.customerTab;
//                    localStorage.setItem("CUSTOMERDATAFORAGENCYROLE", JSON.stringify(data.resultMap.customerTab));
////                    CUSTOMER.AGENCY.CUSTOMERDATA = CUSTOMER.AGENCY.CUSTOMERDATA + data.resultMap.customerTab;
////                    localStorage.setItem("CUSTOMERDATAFORAGENCYROLE", localStorage.getItem("CUSTOMERDATAFORAGENCYROLE") + JSON.stringify(data.resultMap.customerTab));
//                }


                    CustomerdynamicTemplate.customer.loadCustomerDetailsForAgencyRole(data.resultMap.customerTab);
                    //protocall.displaySpinner(false);
                    //$(".content-holder").css("opacity", "0.5").addClass("spinner1");
//                    $(".content-holder").css("opacity", "1");
//                    $(".content-holder").removeClass("spinner1");
                    //$(".rep-content-blk").css("opacity", "0.5");
                } else {
                    console.log("no customer data");
                }
            }

        } else if (data.resultMap.TypeCode == "4012") {
            $(".content-holder").removeClass("spinner1");
            //$(".mb-submenu").css("display", "none");
            var type = "Alphabetical";
            var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            var content = '<div class="container"> <div class="content-holder">There were no customer for this carrier</div></div></div>'
                    + '<div class="div-reloadpage">'
                    + '<div class="div-loadbutton"><span class="spinner-loadmore"></span><div class="loadmore-txt">Load More</div></div>'
                    + '<div class="div-gototop-button">Go to top</div></div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            $("#page").empty();
            var totalHtml = header + content + footer;
            $("#page").append(totalHtml);
            $(".submenu-sort").css("display", "none");
            $(".mb-menu a.selected-tab").removeClass("selected-tab");
            if (CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE == "customers") {
                $(".mb-menu a.customers").addClass("selected-tab");
            }
            showAlertBox("There were no customer for this carrier");
        }
    },
    initCustomerPageSort: function () {
        sessionStorage.isCustomerAlphaSort = true;
        $(".content-holder").css("opacity", "0.5");
        $(".content-holder").addClass("spinner1");
        module_ServerCall.parseCustomersData(1, sessionStorage.isCustomerAlphaSort);
//        var page = "customers";
//        var data = {agencyId: sessionStorage.ownerId},
//        deepPath = "userlistsortedbynamcityviewe", page = "customers",
//                callback = CustomerdynamicTemplate.customer.loadcustomercontentSortedbyName,
//                authId = "",
//                spinnerMsg = "";
//        utils.server.makeServerCall(page, data, callback, deepPath);
    },
    loadAgencyDetailsView: function (emailID) {
        var html = "<div>No Reocrds...!</div>";
        var data1 = RESPONSE.AGENCYLOGIN_DATA[0];
        if (data1 == undefined) {
            data1 = JSON.parse(localStorage.getItem("representativeAgencyData"));
        }
        var data = data1.resultMap.MyRepTab;
        var assocaitedFeeds = "";
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            if (element.RepresentativeDetails.agencyRepresentativeId.email == emailID) {
                localStorage.setItem("AGENCYREP_ASSOCITAEDCUSTOMERS", JSON.stringify(element.AssociatedCustomer));
                assocaitedFeeds = element.AssociatedCustomer;
                html = "";
                html = staticTemplate.customers.staticAgencyRepViewTemplate(element.RepresentativeDetails);
            }
        }

        $(".content-holder").empty();
        $(".content-holder").append($(html));
        // $(".sub-menu-text").text("MY REPS > DDDD");
//        $(".mb-submenu").empty();
//        var Submenu = '<div class="bcrum-lb-submenu clr-fl inline-block v-align-mid"><a href="#" class="snap left f-sz-16 ptsans-light carrierreps t-upper p-relative f-color-green" data-type="page" data-submenu="carrierreps"><div class=""><div class="sprite-im myreps-icon inline-block v-align-mid mr-space-10 ">&nbsp;</div><span class="sub-menu-text inline-block v-align-mid"> My Reps</span><span id="id-customers-headername">  </span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="customers-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:53%;"><div class="tab-rb-submenu-in-block p-relative"><div href="#" class="snap submenu-sort right f-sz-16 ptsans-light p-relative" data-type="page" data-submenu="sortbycustomer"><div class="sort-text f-italic">Sort by</div><div class="sprite-im drop-down-icon submenu-drop-icon">&nbsp;</div></div>'
//                + '<a href="#" id="" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light  p-relative" data-type="page" data-submenu="dt-assigncustomer" style="display:none;"><div class="sprite-im inline-block tab-icon v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid" > assign Customers</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a><a href="/pushmessage" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light pushmessage p-relative" data-type="page" data-submenu="pushmessage" style="display: none;"><div class="sprite-im message-icon inline-block tab-icon v-align-mid" style="display:block;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid" style="margin-top:-4px;display:none;"> push message</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a>'
        //                + '<a href="/edit" id="idcarrierownerrepedit" class="snap submenu-tab bg-color-green right f-sz-16 ptsans-light  p-relative" data-type="page" data-submenu="carrierownerrepedit" style="display:none;"><div class="sprite-im  inline-block edit-icon v-align-mid" style="display:block;  float: left;  margin-right: 10px;  margin-top: 10px">&nbsp;</div><div id="id_carrierrep_editsave" class="submenu-title t-caps inline-block f-color-w v-align-mid " style="  margin-left: -25px;margin-top:-4px;"> edit</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a></div></div>';
        //        $(".mb-submenu").append(Submenu);
        $(".submenu-sort").css("display", "none");
        protocall.events.GlobalContainerScrollevent();
        $(".container").addClass("container-maxwidth");
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.MY_REP_PAGE);
        protocall.carrier.loadAssociatedCustomersForAgencyRep(assocaitedFeeds);
    },
    reloadCustomerDetailedView: function (data, userID) {

        clearInterval(homePageUpdate);
        console.log("selected Customer userid value", userID);
        sessionStorage.customerUserId = userID;
        var customerDataValue = data, html = "";
        var index = 0;
        var isExists = false;
        for (var indexOfArray = 0; indexOfArray < customerDataValue.length; indexOfArray++) {
            $.each(customerDataValue[indexOfArray], function (index, customerDataValue1) {

                if (userID === customerDataValue1.userId) {

                    isExists = true;
//                    console.log("matched customer details is", customerDataValue1.CustomerDetails);
//                    html = staticTemplate.customers.staticCustomerViewTemplate(customerDataValue1.CustomerDetails);
//                    CUSTOMER.AGENCY.ASSOCIATEDPOLICIES = customerDataValue1.AssociatedPolicies;
                    if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                        CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES = customerDataValue[indexOfArray].AssociatedRepresentative;
                        CUSTOMER.AGENCY.ASSOCIATEDCARRIERS = customerDataValue[indexOfArray].AssociatedCarrier;
                    } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                        CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES = customerDataValue[indexOfArray].AssociatedCarrierRepresentativeDetails;
                        CUSTOMER.AGENCY.ASSOCIATEDAGENCY = customerDataValue[indexOfArray].AssociatedAgencyDetails;
                    }



                    /* var policyDetails = customerDataValue.CustomerDetails.policyListWithCarrier;
                     CUSTOMER.AGENCY.POLICYLISTWITHCARRIER = customerDataValue.CustomerDetails.policyListWithCarrier;
                     var associatedPolicyDetails = customerDataValue.AssociatedPolicies;
                     CUSTOMER.AGENCY.ASSOCIATEDPOLICIES = customerDataValue.AssociatedPolicies;
                     $.each(policyDetails,function(index,policyValue){
                     console.log("policyValue",policyValue);
                     $.each(associatedPolicyDetails,function(index,associatedPolicyDetail){
                     var policyIdWithCarrierId = associatedPolicyDetail.policyDetails.policyId+'@'+associatedPolicyDetail.policyDetails.carrierId;
                     if(policyValue == policyIdWithCarrierId){
                     CUSTOMER.AGENCY.SELCTEDCUSTOMERPOLICYDETAILS.push(associatedPolicyDetail);
                     console.log("condition satisfiled");
                     }
                     }); */
                } else {
                    console.log("there is no match found");
                }
                //index++;
            });
            if (isExists == true)
            {
                break;
            }
        }
//        $(".content-holder").empty();
//        $(".content-holder").append($(html));
        $(".submenu-sort").css("display", "none");
        protocall.carrier.loadAssociatedReps(CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES);
        protocall.events.GlobalContainerScrollevent();
//        $(".container").addClass("container-maxwidth");
    },
    //As per the new api call method changes
    customerDetailedView: function (customerUserId) {
        clearInterval(homePageUpdate);
        console.log("selected Customer userid value", customerUserId);
        sessionStorage.customerUserId = customerUserId;
        var customerDataValue = CUSTOMER.AGENCY.CUSTOMERDATA, html = "";
        CUSTOMER.AGENCY.ASSOCIATEDPOLICIES = [];
        CUSTOMER.POLICYLISTWITHCARRIER = [];
        var index = 0;
        var isExists = false;
        for (var indexOfArray = 0; indexOfArray < customerDataValue.length; indexOfArray++) {
            $.each(customerDataValue[indexOfArray], function (index, customerDataValue1) {

                if (customerUserId === customerDataValue1.CustomerDetails.userId) {

                    isExists = true;
                    console.log("matched customer details is", customerDataValue1.CustomerDetails);
                    html = staticTemplate.customers.staticCustomerViewTemplate(customerDataValue1.CustomerDetails);
                    var policyListWithCarrier = customerDataValue1.CustomerDetails.policyListWithCarrier;
                    $.each(policyListWithCarrier, function (index, policyListValue) {
                        CUSTOMER.POLICYLISTWITHCARRIER.push(policyListValue);
                    });
                    /* if (customerDataValue1.AssociatedPolicies != undefined) {
                     CUSTOMER.AGENCY.ASSOCIATEDPOLICIES.push(customerDataValue1.AssociatedPolicies);
                     } else {
                     CUSTOMER.AGENCY.ASSOCIATEDPOLICIES = [];
                     } */
                    if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                        CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES = customerDataValue1.AssociatedRepresentative;
                        CUSTOMER.AGENCY.ASSOCIATEDCARRIERS = customerDataValue1.AssociatedCarrier;
                    } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                        CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES = customerDataValue1.AssociatedCarrierRepresentativeDetails;
                        CUSTOMER.AGENCY.ASSOCIATEDAGENCY = customerDataValue1.AssociatedAgencyDetails;
                    }



                    /* var policyDetails = customerDataValue.CustomerDetails.policyListWithCarrier;
                     CUSTOMER.AGENCY.POLICYLISTWITHCARRIER = customerDataValue.CustomerDetails.policyListWithCarrier;
                     var associatedPolicyDetails = customerDataValue.AssociatedPolicies;
                     CUSTOMER.AGENCY.ASSOCIATEDPOLICIES = customerDataValue.AssociatedPolicies;
                     $.each(policyDetails,function(index,policyValue){
                     console.log("policyValue",policyValue);
                     $.each(associatedPolicyDetails,function(index,associatedPolicyDetail){
                     var policyIdWithCarrierId = associatedPolicyDetail.policyDetails.policyId+'@'+associatedPolicyDetail.policyDetails.carrierId;
                     if(policyValue == policyIdWithCarrierId){
                     CUSTOMER.AGENCY.SELCTEDCUSTOMERPOLICYDETAILS.push(associatedPolicyDetail);
                     console.log("condition satisfiled");
                     }
                     }); */
                } else {
                    console.log("there is no match found");
                }
                //index++;
            });
            if (isExists == true)
            {
                break;
            }
        }
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        $(".submenu-sort").css("display", "none");
        protocall.carrier.loadAssociatedReps(CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES);
        protocall.events.GlobalContainerScrollevent();
        $(".container").addClass("container-maxwidth");
    },
    searchResultCustomerView: function (response) {
        clearInterval(homePageUpdate);
        CUSTOMER.AGENCY.ASSOCIATEDPOLICIES = [];
//        sessionStorage.setItem("SUBMENU", "CUSTOMER_PAGE");
        console.log("response value is", response.resultMap);
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        protocall.events.GlobalContainerScrollevent();
        protocall.clickPageNavigation(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
        protocall.setPage(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE, "");
        var html = "";
        if (response.resultMap.TypeCode == "4071") {
            sessionStorage.hasLoadedNextPage == "false";
            if (response.resultMap.RequiredDetails != undefined) {
                html = staticTemplate.customers.staticCustomerViewTemplate(response.resultMap.RequiredDetails);
                CUSTOMER.AGENCY.ASSOCIATEDPOLICIES.push(response.resultMap.AssociatedPolicies);
				var policyListWithCarrier = response.resultMap.RequiredDetails.policyListWithCarrier;
				$.each(policyListWithCarrier, function (index, policyListValue) {
					CUSTOMER.POLICYLISTWITHCARRIER.push(policyListValue);
				});
                if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                    CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES = response.resultMap.AssociatedRepresentative;
                    CUSTOMER.AGENCY.ASSOCIATEDCARRIERS = response.resultMap.AssociatedCarrier;
                } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                    CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES = response.resultMap.AssociatedCarrierRepresentativeDetails;
                    CUSTOMER.AGENCY.ASSOCIATEDAGENCY = response.resultMap.AssociatedAgencyDetails;
                }
            } else {
                console.log("no customer details");
            }
        } else {
            console.log("error response");
        }
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        if (typeof CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES == "string") {
            showAlertBox("There is no associated representative details for this customer");
        } else {
            protocall.carrier.loadAssociatedReps(CUSTOMER.AGENCY.ASSOCIATEDREPRESENTATIVES);
        }
        protocall.events.GlobalContainerScrollevent();
        $(".container").addClass("container-maxwidth");
        $(".content-holder").removeClass("spinner1").css("opacity", "1");
        $(".submenu-sort").css("display", "none");
        if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
            if (localStorage.LoginType == 'Admin') {
                var Omega = '\u003E';
                $(".mb-submenu-in").empty();
                $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap carriers p-relative f-color-green\" data-type=\"page\" data-submenu=\"customers\"><div class=\"\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \"> </div>"
                        + "<span class=\"sub-menu-text inline-block v-align-mid\"> CUSTOMERS </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a><a href=\"/assignrep\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light assignrep p-relative\" data-type=\"page\" data-submenu=\"assignrep\" style='width: 10.5%;padding-left: 15px;margin-right: 0px;display:block;'><div class=\"sprite-im inline-block tab-icon v-align-mid\" style=\"display:none;\">&nbsp;</div><div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style='margin-top:-4px;  margin-left: 7px;'> assign rep</div><div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;\">(<span class=\"cnt-no\"></span>)</div></a></div>");
            }
        }
        else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.LoginType == 'Admin') {
                var Omega = '\u003E';
                $(".mb-submenu-in").empty();
                $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap carriers p-relative f-color-green\" data-type=\"page\" data-submenu=\"customers\"><div class=\"\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \"> </div>"
                        + "<span class=\"sub-menu-text inline-block v-align-mid\"> CUSTOMERS </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a><a href=\"/assignrep\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light assignrep p-relative\" data-type=\"page\" data-submenu=\"assignrep\" style='width: 10.5%;padding-left: 15px;margin-right: 0px;display:block;'><div class=\"sprite-im inline-block tab-icon v-align-mid\" style=\"display:none;\">&nbsp;</div><div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style='margin-top:-4px;  margin-left: 7px;'> assign rep</div><div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;\">(<span class=\"cnt-no\"></span>)</div></a></div>");
            }
        }



    },
    loadCustomersViewFeed: function (emailID, customerUserId, carrierId) {

        sessionStorage.emailID = emailID;
        sessionStorage.carrierId = carrierId;
        sessionStorage.customerUserId = customerUserId;
        if (sessionStorage.loginType == 'SuperAdmin') {
            var data = HOMEPAGERESPONSE.SUPERADMINCUSTOMERS;
            localStorage.setItem("ARRAY_CUSTOMERS_LIST", emailID);
            var html = "";
            var status = 0;
            for (var index = 0; index < data.length; index++) {
                var element = data[index];
                if (element.emailId.email == emailID) {
                    html = staticTemplate.customers.staticCustomerViewTemplate(element);
                    status = 1;
                }
            }
            if (status == 0) {
                html = "<div> No Records </div>";
            } else {
                html + "</div>";
            }
            $(".content-holder").empty();
            $(".content-holder").append($(html));
            protocall.events.GlobalContainerScrollevent();
            $(".container").addClass("container-maxwidth");
            $(".content-holder").removeClass("spinner1");
            $(".content-holder").css("opacity", "1");
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
            $(".invitereps").css("display", "none");
            if (localStorage.currentPage == "customers/viewcustomerfeedview") {
                $(".submenu-sort").css("display", "none");
            }
        } else {
            var data = "";
            if (PAGEREFRESH.ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW) {
                var header = HeaderTemplate.Menu.DynamicHeaderTemplate();
                var content = '<div class="container"> <div class="content-holder"></div></div></div></div>';
                var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
                $("#page").empty();
                totalHtml = header + content + footer;
                $("#page").append(totalHtml);
                $('.setProfilePic').fillBox();
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
            }
            if ((RESPONSE.customers_data).length != 0) {
                data = RESPONSE.customers_data[0];
                //localStorage.setItem("customerDataValues", JSON.stringify(data));
            } else {
                if (localStorage.LoginType == "Representatives") {
                    if (sessionStorage.loginType == "AgencyRepresentative") {
                        var repResponsedata = JSON.parse(localStorage.getItem("representativeAgencyData"));
                        data = repResponsedata.resultMap.CustomerTab;
                    } else {
                        var repResponsedata = JSON.parse(localStorage.getItem("carrierRepData"));
                        data = repResponsedata.resultMap.customerTab;
                    }

                } else {
                    var adminResponsedata = JSON.parse(localStorage.getItem("customerDetailsValue"));
                    data = adminResponsedata.resultMap.customerTab;
                }
            }
            console.log("virew c", data);
            localStorage.setItem("ARRAY_CUSTOMERS_LIST", emailID);
            var html = "";
            var status = 0;
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Admin') {
                    for (var index = 0; index < data.length; index++) {
                        var element = data[index].CustomerDetails;
                        if (element.emailId.email == emailID) {
                            html = staticTemplate.customers.staticCustomerViewTemplate(element);
                            status = 1;
                        }
                    }
                } else {

                    for (var index = 0; index < data.length; index++) {
                        var element = data[index].userDetails;
                        if (element.emailId.email == emailID) {
                            html = staticTemplate.customers.staticCustomerViewTemplate(element);
                            localStorage.setItem("selectedIndex", index);
                            status = 1;
                        }
                    }
                }
            } else {
                if (localStorage.LoginType == 'Representatives') {
                    var data1 = RESPONSE.AGENCYLOGIN_DATA[0];
                    if (data1 == undefined) {
                        data1 = JSON.parse(localStorage.getItem("representativeAgencyData"));
                    }
                    data = data1.resultMap.CustomerTab;
                    for (var index = 0; index < data.length; index++) {
                        var element = data[index];
                        if (element.emailId.email == emailID) {
                            html = staticTemplate.customers.staticCustomerViewTemplate(element);
                            status = 1;
                        }
                    }
                } else {
                    for (var index = 0; index < data.length; index++) {
                        var element = data[index];
                        if (element.emailId.email == emailID) {
                            html = staticTemplate.customers.staticCustomerViewTemplate(element);
                            status = 1;
                        }
                    }
                }

            }
            if (status == 0) {
                html = "<div> No Records </div>";
            } else {
                html + "</div>";
            }
            $(".content-holder").empty();
            $(".content-holder").append($(html));
            protocall.events.GlobalContainerScrollevent();
            $(".container").addClass("container-maxwidth");
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
            if (!(PAGEREFRESH.ISPAGEREFRESHEDFORCUSTOMERFEEDVIEW)) {
                $(".rel-feeds-content").empty();
                $(".rel-feeds-content").append(html);
            }
            if (localStorage.LoginType == 'Representatives') {
                var Omega = '\u003E';
                $(".mb-submenu-in").empty();
                $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 opensans-light snap carriers p-relative f-color-green\" data-type=\"page\" data-submenu=\"customers\"><div class=\"\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \"> </div>"
                        + "<span class=\"sub-menu-text inline-block v-align-mid\"> CUSTOMERS </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div>");
            }
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                if (localStorage.LoginType == 'Admin') {
                    var Omega = '\u003E';
                    $(".mb-submenu-in").empty();
                    $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap carriers p-relative f-color-green\" data-type=\"page\" data-submenu=\"customers\"><div class=\"\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \"> </div>"
                            + "<span class=\"sub-menu-text inline-block v-align-mid\"> CUSTOMERS </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a><a href=\"/assignrep\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light assignrep p-relative\" data-type=\"page\" data-submenu=\"assignrep\" style='width: 10.5%;padding-left: 15px;margin-right: 0px;display:block;'><div class=\"sprite-im inline-block tab-icon v-align-mid\" style=\"display:none;\">&nbsp;</div><div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style='margin-top:-4px;  margin-left: 7px;'> assign rep</div><div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;\">(<span class=\"cnt-no\"></span>)</div></a></div>");
                }
            }
            else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Admin') {
                    var Omega = '\u003E';
                    $(".mb-submenu-in").empty();
                    $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap carriers p-relative f-color-green\" data-type=\"page\" data-submenu=\"customers\"><div class=\"\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \"> </div>"
                            + "<span class=\"sub-menu-text inline-block v-align-mid\"> CUSTOMERS </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a><a href=\"/assignrep\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light assignrep p-relative\" data-type=\"page\" data-submenu=\"assignrep\" style='width: 10.5%;padding-left: 15px;margin-right: 0px;display:block;'><div class=\"sprite-im inline-block tab-icon v-align-mid\" style=\"display:none;\">&nbsp;</div><div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style='margin-top:-4px;  margin-left: 7px;'> assign rep</div><div class=\"cnt-blk inline-block v-align-mid\" style=\"display:none;\">(<span class=\"cnt-no\"></span>)</div></a></div>");
                }
            }
            RESPONSE.ASSOCIATEFEED = [];
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (RESPONSE.CARRIERAGENCYTOTALDETAILS[0] == null) {
                    if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                        if (localStorage.LoginType == 'Representatives') {
                            var dataq = {};
                            var path = utils.server.getServerPath("carrierdashboarddesignforrepresentativelogin");
                            var request = path(dataq).execute(function (resp) {
                                if (resp.error != undefined) {
                                    t.server.handleError(resp);
                                } else {
                                    RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
                                    RESPONSE.CARRIERREP_DATA[0] = resp;
                                    RESPONSE.customers_data[0] = resp.resultMap.customerTab;
                                    RESPONSE.agencies_data[0] = resp.resultMap.agencyTab[0].agencyDetail;
                                    RESPONSE.carrierrepcustomers_data[0] = resp;
                                    RESPONSE.ASSOCIATEFEED = resp;
                                    resp = RESPONSE.ASSOCIATEFEED;
                                    if (localStorage.LoginType == 'Representatives') {
                                        protocall.carrier.loadAssociatedAgencies();
                                    }
                                    if (localStorage.LoginType == 'Admin') {
                                        var response = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
                                        RESPONSE.ASSOCIATEFEED = response;
                                        protocall.carrier.loadCarrierOwnerCustomersAssociatedReps();
                                    }
                                }
                            });
                        }
                        /*  if (localStorage.LoginType == 'Admin') {
                         
                         var dataq = {};
                         var path = utils.server.getServerPath("carrierdashboarddesign");
                         var request = path(dataq).execute(function (resp) {
                         if (resp.error != undefined) {
                         t.server.handleError(resp);
                         } else {
                         RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
                         RESPONSE.ASSOCIATEFEED = resp;
                         resp = RESPONSE.ASSOCIATEFEED;
                         if (localStorage.LoginType == 'Representatives') {
                         protocall.carrier.loadAssociatedAgencies();
                         }
                         if (localStorage.LoginType == 'Admin') {
                         var response = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
                         RESPONSE.ASSOCIATEFEED = response;
                         protocall.carrier.loadCarrierOwnerCustomersAssociatedReps();
                         }
                         }
                         });
                         } */
                    }
                } else {
                    if (localStorage.LoginType == 'Representatives') {
                        protocall.carrier.loadAssociatedAgencies();
                    }
                    if (localStorage.LoginType == 'Admin') {
                        var response = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
                        RESPONSE.ASSOCIATEFEED = response;
                        protocall.carrier.loadCarrierOwnerCustomersAssociatedReps();
                    }
                }

            } else if (RESPONSE.ASSOCIATEFEED.length == 0) {
                if (sessionStorage.IsCustomersTab == "true") {

                    var data = {emailId: emailID};
                    var path = utils.server.getServerPath("associatedcarrierandrepresentative");
                    var request = path(data).execute(function (resp) {
                        if (resp.error != undefined) {
                            t.server.handleError(resp);
                        } else {
                            RESPONSE.ASSOCIATEFEED = resp;
                            if (localStorage.LoginType == undefined) {
                                protocall.carrier.loadAssociatedReps();
                            }
                            if (localStorage.LoginType == 'Admin') {
                                protocall.carrier.loadAssociatedReps();
                            }
                            if (localStorage.LoginType == 'Representatives') {
                                protocall.customer.loadAssociateCarrier();
                            }
                        }
                    });
                } else {
                    var data = {carrierId: carrierId};
                    var path = utils.server.getServerPath("associatedcustomerandrepresentative");
                    var request = path(data).execute(function (resp) {
                        if (resp.error != undefined) {
                            t.server.handleError(resp);
                        } else {
                            RESPONSE.ASSOCIATEFEED = resp;
                            if (localStorage.LoginType == undefined) {
                                protocall.carrier.loadAssociatedReps();
                            }
                            if (localStorage.LoginType == 'Admin') {
                                protocall.carrier.loadAssociatedReps();
                            }
                            if (localStorage.LoginType == 'Representatives') {
                                protocall.customer.loadAssociateCarrier();
                            }
                        }
                    });
                }

            }
            $(".content-holder").removeClass("spinner1");
            $(".content-holder").css("opacity", "1");
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.CUSTOMERS_PAGE);
            $('.carrier-img-width').fillBox();
        }
    },
    loadSuperAdminIndividualViewFeed: function (idValue) {
        var data = HOMEPAGERESPONSE.HOMEPAGEDATA;
        var html = "";
        var status = 0;
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            if (element.preferredVendorId == idValue) {
                html = staticTemplate.customers.staticHomeIndividulaViewTemplate(element);
                status = 1;
            }
        }
        if (status == 0) {
            html = "<div>No records</div>";
        }
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        protocall.events.GlobalContainerScrollevent();
        $(".container").addClass("container-maxwidth");
        $(".rel-feeds-content").empty();
        $(".rel-feeds-content").append(html);
        protocall.events.GlobalContainerScrollevent();
        var Omega = '\u003E';
        $("#id-carrierpage-headertext").text(Omega + "   " + localStorage.getItem("id-customers-headername"));
        $('#id-carrierpage-headertext').prop('title', localStorage.getItem("id-customers-headername"));
        protocall.setMenuSelection(CONSTANTS.LINK_TYPE.HOME_PAGE);
        $(".submenu-sort").css("display", "none");
    },
    loadAgenciesViewFeed: function (emailID, carrierId) {
        var data = "";
        if (sessionStorage.loginType == 'SuperAdmin') {
            data = HOMEPAGERESPONSE.SUPERADMINAGENCIES;
            localStorage.setItem("ARRAY_CUSTOMERS_LIST", emailID);
            var html = "";
            for (var index = 0; index < data.length; index++) {
                var element = data[index];
                if (element.emailId.email == emailID) {
                    html = staticTemplate.customers.staticAegnciesViewTemplate(element);
                    status = 1;
                }
            }
            $(".content-holder").empty();
            $(".content-holder").append($(html));
            protocall.events.GlobalContainerScrollevent();
            $(".container").addClass("container-maxwidth");
            $(".rel-feeds-content").empty();
            $(".rel-feeds-content").append(html);
            $(".carrier-view-rightblock").css("width", "70.9%");
            $(".carrier-view-rightblock").css("margin-left", "51px");
            $(".carrier-view-rightblock").css("margin-top", "-67px");
            protocall.events.GlobalContainerScrollevent();
            var Omega = '\u003E';
            $("#id-carrierpage-headertext").text(Omega + "   " + localStorage.getItem("id-customers-headername"));
            $('#id-carrierpage-headertext').prop('title', localStorage.getItem("id-customers-headername"));
            protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
        } else {
            /* if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
             if (localStorage.LoginType == 'Admin') {
             if ((RESPONSE.CARRIERAGENCYTOTALDETAILS).length != 0) {
             console.log("RESPONSE.CARRIERAGENCYTOTALDETAILS", RESPONSE.CARRIERAGENCYTOTALDETAILS);
             var response = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
             var agencyDetails = response.resultMap.agencyTab;
             $.each(agencyDetails, function (index, agencyDetail) {
             if (emailID == agencyDetail.AgencyDetail.emailId.email) {
             data = agencyDetail.AgencyDetail;
             }
             })
             //localStorage.setItem("agencyDetails", JSON.stringify(data));
             } else {
             var response = JSON.parse(localStorage.getItem("customerDetailsValue"));
             var agencyDetails = response.resultMap.agencyTab;
             $.each(agencyDetails, function (index, agencyDetail) {
             if (emailID == agencyDetail.AgencyDetail.emailId.email) {
             data = agencyDetail.AgencyDetail;
             }
             })
             //data = response.resultMap.agencyTab[0].AgencyDetail;
             }
             } else {
             if ((RESPONSE.agencies_data).length != 0) {
             data = RESPONSE.agencies_data[0];
             //localStorage.setItem("agencyDetailsForAgency", JSON.stringify(data));
             } else {
             data = JSON.parse(localStorage.getItem("carrierRepData"));
             }
             }
             } else {
             data = RESPONSE.agencies_data[0];
             } */


            localStorage.setItem("ARRAY_CUSTOMERS_LIST", emailID);
            var html = "";
            var status = 0;
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                //if (localStorage.LoginType == 'Admin') {
                $.each(CARRIER.AGENCYDATA, function (index, agencyDetail) {
                    //if(agencyDetail.emailId != undefined){
                    if (carrierId == agencyDetail.agencyId) {
                        data = agencyDetail;
                    }
                    /* } else {
                     console.log("fail safe");
                     } */
                })
                html = staticTemplate.customers.staticAegnciesViewTemplate(data);
                status = 1;
                /* }  else {
                 html = staticTemplate.customers.staticAegnciesViewTemplate(data);
                 status = 1;
                 } */
            } /* else {
             for (var index = 0; index < data.length; index++) {
             var element = data[index];
             if (element.emailId.email == emailID) {
             html = staticTemplate.customers.staticAegnciesViewTemplate(element);
             status = 1;
             }
             }
             } */
            if (status == 0) {
                html = "<div> No Records </div>";
            } else {
                html + "</div>";
            }
            $(".content-holder").empty();
            $(".content-holder").append($(html));
            $(".carrier-view-rightblock").css("width", "70.9%");
            $(".carrier-view-rightblock").css("margin-left", "51px");
            $(".carrier-view-rightblock").css("margin-top", "-67px");
            protocall.events.GlobalContainerScrollevent();
            $(".container").addClass("container-maxwidth");
            $(".rel-feeds-content").empty();
            $(".rel-feeds-content").append(html);
            var agencyassociatedRepsAndCustomerFeedPageNumber = 0;
            sessionStorage.type = "AssociatedCustomers";
            //module_ServerCall.parseAgencyViewAssociatedFeedRepsData(sessionStorage.selectedAgencyId,++agencyassociatedRepsAndCustomerFeedPageNumber,sessionStorage.type);
            module_ServerCall.parseCarrierViowAssociatedFeedData(sessionStorage.selectedAgencyId, ++agencyassociatedRepsAndCustomerFeedPageNumber, sessionStorage.type);
            protocall.events.GlobalContainerScrollevent();
            var Omega = '\u003E';
            $("#id-carrierpage-headertext").text(Omega + "   " + localStorage.getItem("id-customers-headername"));
            $('#id-carrierpage-headertext').prop('title', localStorage.getItem("id-customers-headername"));
            RESPONSE.ASSOCIATEFEED = [];
            /* if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
             if (RESPONSE.CARRIERAGENCYTOTALDETAILS[0] == null) {
             if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
             if (localStorage.LoginType == 'Representatives') {
             var dataq = {};
             var path = utils.server.getServerPath("carrierdashboarddesignforrepresentativelogin");
             var request = path(dataq).execute(function (resp) {
             if (resp.error != undefined) {
             t.server.handleError(resp);
             } else {
             RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
             RESPONSE.CARRIERREP_DATA[0] = resp;
             RESPONSE.customers_data[0] = resp.resultMap.customerTab;
             RESPONSE.agencies_data[0] = resp.resultMap.agencyTab[0].agencyDetail;
             RESPONSE.carrierrepcustomers_data[0] = resp;
             RESPONSE.ASSOCIATEFEED = resp;
             resp = RESPONSE.ASSOCIATEFEED;
             if (localStorage.LoginType == 'Representatives') {
             protocall.carrier.loadCarrierAssociatedCustomers();
             var Omega = '\u003E';
             $(".mb-submenu-in").empty();
             $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap agencies-info t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"agencies\"><div class=\"\"><div class=\"sprite-im carriers-icon inline-block v-align-mid mr-space-10 \"> </div>"
             + "<span class=\"sub-menu-text inline-block v-align-mid\"> AGENCIES </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div>");
             }
             if (localStorage.LoginType == 'Admin') {
             var response = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
             RESPONSE.ASSOCIATEFEED = response;
             protocall.carrier.loadCarrierAdminAssociatedCustomers();
             }
             }
             });
             }
             if (localStorage.LoginType == 'Admin') {
             
             var dataq = {};
             var path = utils.server.getServerPath("carrierdashboarddesign");
             var request = path(dataq).execute(function (resp) {
             if (resp.error != undefined) {
             t.server.handleError(resp);
             } else {
             RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
             RESPONSE.ASSOCIATEFEED = resp;
             resp = RESPONSE.ASSOCIATEFEED;
             if (localStorage.LoginType == 'Representatives') {
             protocall.carrier.loadCarrierAssociatedCustomers();
             var Omega = '\u003E';
             $(".mb-submenu-in").empty();
             $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap agencies-info t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"agencies\"><div class=\"\"><div class=\"sprite-im carriers-icon inline-block v-align-mid mr-space-10 \"> </div>"
             + "<span class=\"sub-menu-text inline-block v-align-mid\"> AGENCIES </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div>");
             }
             if (localStorage.LoginType == 'Admin') {
             var response = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
             RESPONSE.ASSOCIATEFEED = response;
             protocall.carrier.loadCarrierAdminAssociatedCustomers();
             }
             }
             });
             }
             }
             } else {
             if (localStorage.LoginType == 'Representatives') {
             protocall.carrier.loadCarrierAssociatedCustomers();
             var Omega = '\u003E';
             $(".mb-submenu-in").empty();
             $(".mb-submenu-in").append("<div class=\"bcrum-lb-submenu clr-fl inline-block v-align-mid\"><a href=\"#\" class=\"carrier-headerbox  left f-sz-16 ptsans-light snap agencies-info t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"agencies\"><div class=\"\"><div class=\"sprite-im carriers-icon inline-block v-align-mid mr-space-10 \"> </div>"
             + "<span class=\"sub-menu-text inline-block v-align-mid\"> AGENCIES </span><span id=\"id-carrierpage-headertext\">" + Omega + "   " + localStorage.getItem("id-customers-headername") + "</span></div></a><div class=\"bcrum-icon-blk left f-color-green f-sz-16 ptsans-light\" style=\"display:none;\">&gt;</div><a href=\"#\" class=\"snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green\" data-type=\"page\" data-submenu=\"carriers-customer\" style=\"display:none;\"></a></div>");
             }
             if (localStorage.LoginType == 'Admin') {
             var response = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
             RESPONSE.ASSOCIATEFEED = response;
             protocall.carrier.loadCarrierAdminAssociatedCustomers();
             }
             }
             
             
             } else if (RESPONSE.ASSOCIATEFEED.length == 0) {
             var data = {carrierId: carrierId};
             var path = utils.server.getServerPath("associatedcustomerandrepresentative");
             var request = path(data).execute(function (resp) {
             if (resp.error != undefined) {
             t.server.handleError(resp);
             } else {
             RESPONSE.ASSOCIATEFEED = resp;
             if (localStorage.LoginType == undefined) {
             protocall.carrier.loadAssociatedReps();
             }
             }
             });
             } */
        }
        if (localStorage.LoginType == "SuperAdmin") {
            if (localStorage.currentPage == "carrieragency/carrieragency") {
                $(".submenu-sort").css("display", "none");
            }
        }
        $(".content-holder").removeClass("spinner1");
        $(".content-holder").css("opacity", "1");
        protocall.events.GlobalContainerScrollevent();
        $(".carrier-view-rightblock").css("width", "70.9%");
        $(".carrier-view-rightblock").css("margin-left", "51px");
        $(".carrier-view-rightblock").css("margin-top", "-67px");
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            if (localStorage.LoginType == 'Representatives') {
                protocall.setMenuSelection(CONSTANTS.LINK_TYPE.AGENCIES_PAGE);
            }
        }
        $(".submenu-sort").css("display", "none");
    },
    agencyAssociatedCusomers: function (response) {
        console.log("associated agency data", response);
        if (response.resultMap.TypeCode == "4011") {
            if (response.resultMap.AssociatedCustomers != "undefined") {
                CARRIER.AGENCY.ASSOCIATEDCUSTOMERS = response.resultMap.AssociatedCustomers;
            } else {
                console.log("no agency data");
            }
        } else {
            console.log("error response");
        }
    },
    loadAssociateCarrier: function (resp) {
        var totalHTML = "<div>There are no carrier details</div>";
        localStorage.setItem("ASSOCIATE_CARRIER", "<div>There are no carrier details</div>");
        //var resp = RESPONSE.ASSOCIATEFEED;
        if (sessionStorage.IsCustomersTab == "true") {
            for (var i = 0; i < resp.length; i++) {
                if (i == 0) {
                    totalHTML = "";
                }
                var carrierPic = resp[i].carrierLogo;
                var carrierId = resp[i].carrierId;
                var carrierName = resp[i].carrierName;
                try {
                    name = name + " " + resp[i].lastName;
                } catch (e) {

                }
                var carrierEmail = resp[i].emailId.email;
                var carrierLocation = resp[i].city + "," + resp[i].state;
                if (carrierPic != undefined) {
                    carrierPic = "https://proto-call-test.appspot.com/file/" + carrierPic;
                } else {
                    carrierPic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
                }
                if (carrierName == undefined)
                {
                    carrierName = ' ';
                }
                if (carrierEmail == undefined)
                {
                    carrierEmail = ' ';
                }
                if (carrierLocation == undefined)
                {
                    carrierLocation = ' ';
                }
                var associateBlock = '';
                associateBlock = '<div id=' + carrierId + '  class="carrier-feed-associated-view   left p-relative snap" data-type="viewcarrierfeedview"  data-id="' + carrierId + '"> <div class=" p-relative"> <div class="associated-background p-relative"  style="  height: 104px;">'
                        + '<div class="associated-carrier-pic inline-block "> <img src=' + carrierPic + ' '
                        + 'alt="" class="carrier-img-width   spinner-loader "> '
                        + '</div> <div class="associated-cus-info inline-block opensans-regular f-color-w p-relative"> '
                        + '<div class="carrier-name t-caps t-left">' + carrierName + '</div> '
                        + '<div class="carrier-location t-caps t-left">' + carrierLocation + '</div> '
                        + '<div class="carrier-location t-caps t-left"><a title=' + carrierEmail + ' href="mailto:' + carrierEmail + '">' + carrierEmail + '</a></div></div> </div> </div> </div> ';
                totalHTML += associateBlock;
            }
        } else {

        }

        $("#id-carrierassociatedblock").html('');
        $("#id-carrierassociatedblock").append(totalHTML);
        $(".associated-carrier-pic").css("margin-top", "18px");
        $(".associated-carrier-pic").css("height", "40px");
        setTimeout(function () {
            $(".associated-carrier-pic").css("margin-top", "10px");
            $(".associated-carrier-pic").css("height", "63px");
            $(".carrier-img-width").removeClass("spinner-loader");
            $('.carrier-img-width').fillBox();
        }, 1200);
    }, loadFeedSetting: function () {
        clearInterval(homePageUpdate);
        var html = staticTemplate.customers.staticSettingViewTemplate();
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        protocall.events.GlobalContainerScrollevent();
        var totalHTML = "";
        var totalLen = 1;
        for (var h = 0; h < totalLen; h++) {
            var template = staticTemplate.customers.staticSettingViewTemplate();
            totalHTML = totalHTML + template;
        }
        $(".container").addClass("container-maxwidth");
        $(".rel-feeds-content").empty();
        $(".rel-feeds-content").append($(totalHTML));
    },
    loadFeed: function () {
        var html = staticTemplate.customers.staticCustomerViewTemplate();
        $(".content-holder").empty();
        $(".content-holder").append($(html));
        protocall.events.GlobalContainerScrollevent();
        var totalHTML = "";
        var totalLen = 1;
        for (var h = 0; h < totalLen; h++) {
            var template = staticTemplate.customers.staticCustomerViewTemplate();
            totalHTML = totalHTML + template;
        }
        $(".container").addClass("container-maxwidth");
        $(".rel-feeds-content").empty();
        $(".rel-feeds-content").append($(totalHTML));
    }, }

protocall.myRep = {
    initMyRepsPage: function () {
        //sessionStorage.isSelectAllCompleted = false;
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = true;
//        localStorage.myrepvalue1 = "mysortselected";
        localStorage.myrepvalue2 = "";
        sessionStorage.setItem("SUBMENU", "MYREPS_PAGE");
        var page = "myrepspage";
        if (CONSTANTS.SELECTALLSTATUS == false) {
            $(".content-holder").addClass("spinner1").css({"opacity": "0.5 !important"});
        }
        /* if(sessionStorage.isSelectAllCompleted == "false"){
         $(".content-holder").addClass("spinner1").css({"opacity":"0.5 !important"});
         }  *///else {
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            var data = {pageNumber: 1},
            deepPath = "myrepforcarrierdashboard",
                    page = "myrepspage",
                    callback = MyrepsdynamicTemplate.myreps.MyrepsDynamicList,
                    authId = "",
                    spinnerMsg = "";
            utils.server.makeServerCall(page, data, callback, deepPath);
        } else {
            //            if (localStorage.LoginType == 'Admin') {
            var data = {pageNumber: 1},
            deepPath = "myrepforagencydashboard",
                    page = "myrepspage",
                    callback = MyrepsdynamicTemplate.myreps.MyrepsDynamicList,
                    authId = "",
                    spinnerMsg = "";
            utils.server.makeServerCall(page, data, callback, deepPath);
            //            } else {
            //                var data = JSON.parse(localStorage.getItem("representativeAgencyData"));
            //                MyrepsdynamicTemplate.myreps.MyrepsDynamicList(data);
            //            }
        }
        //}
    },
    initCarrierRepsPage: function () {
        sessionStorage.setItem("SUBMENU", "CARRIER_REPS_PAGE");
        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = false;
        MyrepsdynamicTemplate.myreps.CarrierRepsDynamicList();
    },
    initMyRepsPageSort: function () {

        HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW = true;
        HOMEPAGERESPONSE.SORTBYRECENTVIEW = false;
        var page = "myrepspage";
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            var data = {}, deepPath = "carrierrepresentativelistsortedbyname",
                    page = "myrepspage",
                    callback = MyrepsdynamicTemplate.myreps.MyrepsDynamicListSort,
                    authId = "",
                    spinnerMsg = "";
            utils.server.makeServerCall(page, data, callback, deepPath);
        } else {
            var data = {agencyId: sessionStorage.ownerId}, deepPath = "agencyrepresentativelistsortedbyname",
                    page = "myrepspage",
                    callback = MyrepsdynamicTemplate.myreps.MyrepsDynamicListSort,
                    authId = "",
                    spinnerMsg = "";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }

    },
    loadHomePageData: function (data, page) {
        var feedHTML = "";
        if (data.resultMap != null && data.resultMap != "") {
            var resultReps = data.resultMap.repTab;
            for (var mp = 0; mp < resultReps.length; mp++) {
                var rep = resultReps[mp];
                if (rep.agencyRepresentativeId == undefined) {
                    repEmail = ' ';
                } else {
                    repEmail = rep.agencyRepresentativeId.email;
                }
                if (rep.profilePicture == undefined) {
                    profilePicture = "http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg";
                } else {
                    var profilePath = rep.profilePicture;
                    profilePicture = ProfileAPI + profilePath;
                }
                feedHTML += template.RepsfeedsTemplateHTML(rep);
            }
            var feedHTML2 = '</div>';
            $(".container").addClass("container");
            $(".container").removeClass("container-maxwidth");
            $(".content-holder").empty();
            $(".content-holder").append($(feedHTML1 + feedHTML + feedHTML2));
            protocall.events.GlobalContainerScrollevent();
        }
    },
}
protocall.InviteRep = {sendemailinvite: function (e) {
        var currentTarget = $(e.currentTarget);
        var isResetPasswordClicked = currentTarget.hasClass("resetPasswordForRep");
        var email = "";
        resetPassword = false, page = "";
        var linkUrl = "";
        var link = "";
        var roleValue = 2;
        //1=carrierRep
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
            roleValue = 1;
        } else {
            roleValue = 2;
        }
        if (isResetPasswordClicked) {
            HOMEPAGERESPONSE.RESETPASSWORDCLICKEDFORREP = true;
            HOMEPAGERESPONSE.INVITEREPCLICKED = false;
            email = currentTarget.attr("id");
            resetPassword = true;
            page = "ResetPasswordRep";
            linkUrl = window.location.origin;
            //linkUrl = "http://localhost/VeryLatest/May19th/public_html/";
            link = linkUrl + "/#dtresetpassword-" + roleValue;
            content = sessionStorage.agencyName + 'is inviting you to reset your password. This link will expire in another one hour';
        } else {
            HOMEPAGERESPONSE.RESETPASSWORDCLICKEDFORREP = false;
            HOMEPAGERESPONSE.INVITEREPCLICKED = true;
            email = $("#inviterepemail").val();
            if (email == '') {
                $(".invite-reps-text").css("color", "red");
                $(".invite-reps-text").css("display", "none");
                $(".invite-reps-text").html("Email should not be blank").fadeIn("slow");
                return false;
            }
            if (email != '') {
                var checkemail = isValidEmailAddress(email);
                if (checkemail == false) {
                    $(".invite-reps-text").css("color", "red");
                    $(".invite-reps-text").css("display", "none");
                    $(".invite-reps-text").html("Enter valid email").fadeIn("slow");
                    return false;
                }
                function isValidEmailAddress(email) {
                    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
                    return pattern.test(email);
                }
            }
            resetPassword = false;
            page = "InviteRep";
            linkUrl = window.location.origin;
            link = linkUrl + "/#signup-" + roleValue;
            content = sessionStorage.agencyName + 'is inviting you to join in protocall.Please use the below link to signup in protocall and the link will expire in 24 hours.';
        }
        var emailList = [{"email": email}];
        var deepPath = "sendinvitation";
        var callback = protocall.InviteRep.InviteRepbyEmail;
        var data = {"emailList": emailList, "link": link, "resetPassword": resetPassword, "text": content};
        utils.server.makeServerCall(page, data, callback, deepPath);
        $(".invite-reps-text").css("color", "green");
        $(".invite-reps-text").css("display", "none");
        protocall.closeOverlay();
        showAlertBox("Invitation sent successfully!");
    },
    InviteRepbyEmail: function ($el) {
    }
}
protocall.myProfile = {loadFeedSetting: function ($el) {
        clearInterval(homePageUpdate);
        sessionStorage.setItem("SUBMENU", "SETTINGS_PAGE");
        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
//if (localStorage.LoginType == 'Admin') {
            utils.server.carrierOwnerSettingSubmenu();
            var page = "settings";
            var data = {};
            var callback = utils.server.MysettingsResponse;
            var deepPath = "settingsinagencydesign";
            utils.server.makeServerCall(page, data, callback, deepPath);
            //}
        } else {
            var page = "settings";
            var data = {agencyId: sessionStorage.ownerId};
            var callback = utils.server.MysettingsResponse;
            var deepPath = "settingsinagencydesign";
            utils.server.makeServerCall(page, data, callback, deepPath);
        }
    }, loadMyCarrierRepProfile: function (currentTarget) {
        CUSTOMER.ASSOCIATEFEEDDATA = [];
        var html = "";
        if (RESPONSE.CARRIERAGENCYTOTALDETAILS[0] != null) {
            var emailID1 = currentTarget.attr("id");
            localStorage.setItem("CARRIERADMIN_MYREPID", emailID1);
            $(".mb-submenu-in").empty();
            var submenu = MyrepsdynamicTemplate.myreps.CarrierRepsviewSubmenu();
            $(".mb-submenu-in").append($(submenu));
            var resultArrayList = RESPONSE.CARRIERAGENCYTOTALDETAILS[0].resultMap.myRepTab;
            for (var index = 0; index < resultArrayList.length; index++) {

                var element = resultArrayList[index].RepresentativeDetails;
                try {
                    if (emailID1 == element.emailId.email) {
                        html = staticTemplate.customers.dynamicMyProfileViewTemplate(element);
                    }
                } catch (e) {
                    if (emailID1 == element.carrierRepresentativeId.email) {
                        html = staticTemplate.customers.dynamicMyProfileViewTemplate(element);
                    }
                }

            }

            $(".content-holder").empty();
            $(".content-holder").append(html);
//            var html = staticTemplate.customers.dynamicMyProfileViewTemplate();
            sessionStorage.IsDropdownClick = "false";
            protocall.carrier.loadCarrierOwner_MyRepsAssociatedCustomers(html);
        } else {
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                var pageNumberValue = 1;
                var emailID = currentTarget.attr("id");
                localStorage.setItem("CARRIERADMIN_MYREPID", emailID);
                module_ServerCall.viewMyRepsData(pageNumberValue, emailID);
                $.each(CARRIER.REPDATA, function (index, repDataValue) {
                    try {
                        if (emailID == repDataValue.emailId.email) {
                            html = staticTemplate.customers.dynamicMyProfileViewTemplate(repDataValue);
                        }
                    } catch (e) {
                        if (emailID == repDataValue.carrierRepresentativeId.email) {
                            html = staticTemplate.customers.dynamicMyProfileViewTemplate(repDataValue);
                        }
                    }
                });
                console.log("html value", html);
                var submenu = MyrepsdynamicTemplate.myreps.CarrierRepsviewSubmenu();
                $(".mb-submenu-in").empty();
                $(".mb-submenu-in").append($(submenu));
                $(".content-holder").empty();
                $(".content-holder").append(html);
                $("#id-customers-headername").text(" > " + localStorage.getItem("id-customers-headername"));
                //module_ServerCall.viewMyRepsData(pageNumberValue,emailID);
                /*  if (localStorage.LoginType == 'Representatives') {
                 var dataq = {};
                 var path = utils.server.getServerPath("carrierdashboarddesignforrepresentativelogin");
                 var request = path(dataq).execute(function (resp) {
                 if (resp.error != undefined) {
                 t.server.handleError(resp);
                 } else {
                 RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
                 RESPONSE.CARRIERREP_DATA[0] = resp;
                 RESPONSE.customers_data[0] = resp.resultMap.customerTab;
                 RESPONSE.agencies_data[0] = resp.resultMap.agencyTab[0].agencyDetail;
                 RESPONSE.carrierrepcustomers_data[0] = resp;
                 RESPONSE.ASSOCIATEFEED = resp;
                 resp = RESPONSE.ASSOCIATEFEED;
                 var submenu = MyrepsdynamicTemplate.myreps.CarrierRepsviewSubmenu();
                 $(".mb-submenu-in").empty();
                 $(".mb-submenu-in").append($(submenu));
                 var html = staticTemplate.customers.dynamicMyProfileViewTemplate();
                 sessionStorage.IsDropdownClick = "false";
                 protocall.carrier.loadCarrierOwner_MyRepsAssociatedCustomers(html);
                 
                 }
                 });
                 }
                 if (localStorage.LoginType == 'Admin') {
                 
                 var dataq = {};
                 var path = utils.server.getServerPath("carrierdashboarddesign");
                 var request = path(dataq).execute(function (resp) {
                 if (resp.error != undefined) {
                 t.server.handleError(resp);
                 } else {
                 RESPONSE.CARRIERAGENCYTOTALDETAILS[0] = resp;
                 RESPONSE.ASSOCIATEFEED = resp;
                 resp = RESPONSE.ASSOCIATEFEED;
                 var submenu = MyrepsdynamicTemplate.myreps.CarrierRepsviewSubmenu();
                 $(".mb-submenu-in").empty();
                 $(".mb-submenu-in").append($(submenu));
                 var html = staticTemplate.customers.dynamicMyProfileViewTemplate();
                 sessionStorage.IsDropdownClick = "false";
                 protocall.carrier.loadCarrierOwner_MyRepsAssociatedCustomers(html);
                 
                 }
                 });
                 } */
            }

        }
        $(".submenu-sort").css("display", "none");
        $(".myreps").addClass("selected-tab");
    },
    reloadMyCarrierRepProfile: function (email) {
        var html = "";
        if (RESPONSE.CARRIERAGENCYTOTALDETAILS[0] != null) {
            var emailID1 = email;
            var submenu = MyrepsdynamicTemplate.myreps.CarrierRepsviewSubmenu();
            $(".mb-submenu-in").empty();
            $(".mb-submenu-in").append($(submenu));
            var resultArrayList = RESPONSE.CARRIERAGENCYTOTALDETAILS[0].resultMap.myRepTab;
            for (var index = 0; index < resultArrayList.length; index++) {

                var element = resultArrayList[index].RepresentativeDetails;
                try {
                    if (emailID1 == element.emailId.email) {
                        html = staticTemplate.customers.dynamicMyProfileViewTemplate(element);
                    }
                } catch (e) {
                    if (emailID1 == element.carrierRepresentativeId.email) {
                        html = staticTemplate.customers.dynamicMyProfileViewTemplate(element);
                    }
                }

            }

            $(".content-holder").empty();
            $(".content-holder").append(html);
//            var html = staticTemplate.customers.dynamicMyProfileViewTemplate();
            sessionStorage.IsDropdownClick = "false";
            protocall.carrier.loadCarrierOwner_MyRepsAssociatedCustomers(html);
        } else {
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                var pageNumberValue = 1;
                var emailID = email;
                module_ServerCall.viewMyRepsData(pageNumberValue, emailID);
                $.each(CARRIER.REPDATA, function (index, repDataValue) {
                    try {
                        if (emailID == repDataValue.emailId.email) {
                            html = staticTemplate.customers.dynamicMyProfileViewTemplate(repDataValue);
                        }
                    } catch (e) {
                        if (emailID == repDataValue.carrierRepresentativeId.email) {
                            html = staticTemplate.customers.dynamicMyProfileViewTemplate(repDataValue);
                        }
                    }
                });
                console.log("html value", html);
                var submenu = MyrepsdynamicTemplate.myreps.CarrierRepsviewSubmenu();
                $(".mb-submenu-in").empty();
                $(".mb-submenu-in").append($(submenu));
                $(".content-holder").empty();
                $(".content-holder").append(html);
                $("#id-customers-headername").text(" > " + localStorage.getItem("id-customers-headername"));
            }

        }
        $(".submenu-sort").css("display", "none");
    },
    reLoadMyAgencyRepProfile: function (email) {
        var html = "";
        var pageNumberValue = 1;
        var emailID = email;
        $.each(AGENCY.REPDATA, function (index, repDataValue) {
            if (repDataValue.agencyRepresentativeId != undefined) {
                if (emailID == repDataValue.agencyRepresentativeId.email) {
                    html = staticTemplate.customers.dynamicMyProfileViewTemplate(repDataValue);
                } else {
                    console.log("no match");
                }
            } else {
                console.log("no match found");
            }
        });
        console.log("html value", html);
        var submenu = MyrepsdynamicTemplate.myreps.CarrierRepsviewSubmenu();
        $(".mb-submenu-in").empty();
        $(".mb-submenu-in").append($(submenu));
        $(".content-holder").empty();
        $(".content-holder").append(html);
        protocall.displaySpinner(false);
        $("#id-customers-headername").text(" > " + localStorage.getItem("id-customers-headername"));
        module_ServerCall.viewMyRepsData(pageNumberValue, emailID);
    },
    loadMyAgencyRepProfile: function (currentTarget) {
        var html = "";
        var pageNumberValue = 1;
        AGENCY.ASSOCIATEDCUSTOMERPAGINATIONNUMBER = 1;
        CUSTOMER.ASSOCIATEFEEDDATA = [];
        MYREPS.ASSOCIATEDCUSTOMERLENGTH = 0;
        var emailID = currentTarget.attr("id");
        localStorage.setItem("CARRIERADMIN_MYREPID", emailID);
        $.each(AGENCY.REPDATA, function (index, repDataValue) {
            if (repDataValue.agencyRepresentativeId != undefined) {
                if (emailID == repDataValue.agencyRepresentativeId.email) {
                    html = staticTemplate.customers.dynamicMyProfileViewTemplate(repDataValue);
                } else {
                    console.log("no match");
                }
            } else if (repDataValue.emailId != undefined) {
                if (emailID == repDataValue.emailId.email) {
                    html = staticTemplate.customers.dynamicMyProfileViewTemplate(repDataValue);
                } else {
                    console.log("no match");
                }

            } else {
                console.log("no match found");
            }
        });
        console.log("html value", html);
        var submenu = MyrepsdynamicTemplate.myreps.CarrierRepsviewSubmenu();
        $(".mb-submenu-in").empty();
        $(".mb-submenu-in").append($(submenu));
        $(".content-holder").empty();
        $(".content-holder").append(html);
        $(".myreps").addClass("selected-tab");
        $("#id-customers-headername").text(" > " + localStorage.getItem("id-customers-headername"));
        protocall.displaySpinner(false);
        module_ServerCall.viewMyRepsData(pageNumberValue, emailID);
    },
    loadMyProfileView: function ($el) {
        popUpContent.closePopUpContent();
        sessionStorage.setItem("SUBMENU", "PROFILE_PAGE");
        var html = staticTemplate.customers.staticMyProfileViewTemplate();
        $(".content-holder").empty();
        $(".content-holder").append(html);
        $(".div-gototop-button").css("display", "none");
        $(".mb-submenu").empty();
        var subMenu = '<div class="bcrum-lb-submenu mb-submenu-in clr-fl inline-block v-align-mid" style="width:20%;"><a href="#" class="snap left f-sz-16 ptsans-light myprofile t-upper p-relative f-color-green" data-type="page" data-submenu="myprofile"><div class=""><div class="sprite-im myprofile-icon inline-block v-align-mid mr-space-10" style="margin-top:-1px"></div><span class="sub-menu-text inline-block v-align-mid"> my profile</span></div></a><div class="bcrum-icon-blk left f-color-green f-sz-16 ptsans-light" style="display:none;">&gt;</div><a href="#" class="snap left f-sz-16 ptsans-light feeds-customer t-caps p-relative f-color-green" data-type="page" data-submenu="myprofile-customer" style="display:none;"></a></div><div class="tab-rb-submenu inline-block v-align-mid" style="width:80%;"><div class="tab-rb-submenu-in-block p-relative"><a href="/edit" class="snap submenu-tab bg-color-green right f-sz-16 opensans-light edit p-relative" data-type="page" data-submenu="edit"><div class="sprite-im inline-block edit-icon v-align-mid" style="display:block;">&nbsp;</div><div class="submenu-title t-caps inline-block f-color-w v-align-mid "  style="height: 41px;"> edit</div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a>'
                + '<a href="/#" class="snap submenu-tab bg-color-green right f-sz-16 opensans-light p-relative" data-type="page" data-submenu="dt-resetpassword" style="width:150px">'
                + '<div class="sprite-im inline-block v-align-mid" style="display:none;">&nbsp;</div><div class="submenu-title1 t-caps inline-block f-color-w v-align-mid "  style="height: 41px;" > Reset Password </div><div class="cnt-blk inline-block v-align-mid" style="display:none;">(<span class=""></span>)</div></a>'
                + '</div></div>';
        $(".mb-submenu").append(subMenu);
        protocall.events.GlobalContainerScrollevent();
        this.setSelectedClassPopContent($el);
        $(".mb-menu a.selected-tab").removeClass("selected-tab");
        $('.ageny-img-width').fillBox();
    },
    setSelectedClassPopContent: function ($el) {
        var $popUpContent = $("#pop-up-content");
        if ($popUpContent && $popUpContent.length > 0 && $popUpContent.is(":visible")) {
            if ($popUpContent.find(".prof-view-overlay").length > 0) {
                $(".prof-view-overlay").removeClass("pop-selected-color");
                $el.addClass("pop-selected-color");
            }
        }
    }
}
protocall.util = {
    viewingHomePageData: function (dataValue) {
        CUSTOMER.CUSTOMERPAGINATIONUMBER = 0;
        CARRIER.CUSTOMERPAGINATIONUMBER = 0;
        AGENCY.CUSTOMERPAGINATIONUMBER = 0;
        AGENCY.ASSOCIATEDCUSTOMERPAGINATIONNUMBER = 0;
        if (RESPONSE.SERVERLOGINRESPONSE == true) {
            RESPONSE.SERVERLOGINRESPONSE = false;
        } else {
            setTimeout(function () {
                var page = "counthomepage";
                var data = {},
                        deepPath = "providecountforunreadfeed", page = "home",
                        async = false,
                        callback = protocall.carrier.getCountResponseview,
                        authId = "",
                        spinnerMsg = "";
                utils.server.makeServerCall(page, data, callback, deepPath);
            }, 1200);
        }
        var header = "",
                content = "",
                totalHtml = "",
                feedHTML = ""
        console.log("home data", dataValue);
        footer = "";
        CONSTANTS.HASNEXTPAGE = false;
        if (dataValue !== "undefined" && dataValue.resultMap !== "undefined") {
            if (HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED) {
                HOMEPAGERESPONSE.UNREADFEEDCOUNT = dataValue.resultMap.count;
            } else {
                HOMEPAGERESPONSE.UNREADFEEDCOUNT = HOMEPAGERESPONSE.UNREADFEEDCOUNT;
            }
            if (dataValue.resultMap.isNextPage == true) {
                CONSTANTS.HASNEXTPAGE = true;
                sessionStorage.isNextPageAllowed = true;
            } else {
                CONSTANTS.HASNEXTPAGE = false;
            }
            if (dataValue.resultMap.TypeCode !== "undefined" && dataValue.resultMap.TypeCode == "4011") {
                PAGE_COUNT = 0;
                if (dataValue.resultMap.ArrayOfAlertDetails !== "undefined" && dataValue.resultMap.ArrayOfAlertDetails.length !== "undefined" && dataValue.resultMap.ArrayOfAlertDetails.length !== 0) {
                    $.each(dataValue.resultMap.ArrayOfAlertDetails, function (index, alertDetailsValue) {
                        var alertType = alertDetailsValue.alertDetails.type;
                        if (HOMEPAGERESPONSE.INCIDENTALERTSCLICKED) {
                            feedHTML += template.incidentAlertFeedHMLT(alertDetailsValue, alertType);
                        } else if (HOMEPAGERESPONSE.POLICYALERTCLICKED) {
                            feedHTML += template.policyAlertFeedHMLT(alertDetailsValue, alertType);
                        } else {

                            feedHTML += template.feedsTemplateHTML(alertDetailsValue);
                        }
                        HOMEPAGERESPONSE.RECURRINGALERTDFEEDS.push(alertDetailsValue);
                    });
                    if (feedHTML == "" && HOMEPAGERESPONSE.POLICYALERTCLICKED) {
                        feedHTML = "<div id=\"\">" + "No Records..!" + "</div>";
                    }
                    if (feedHTML == "" && HOMEPAGERESPONSE.INCIDENTALERTSCLICKED) {
                        feedHTML = "<div id=\"\">" + "No Records..!" + "</div>";
                    }
                    if (feedHTML == "" && HOMEPAGERESPONSE.HOMEPAGEMYALERTSLOADED) {
                        feedHTML = "<div id=\"\">" + "No Records..!" + "</div>";
                    }
                }
            } else if (dataValue.resultMap.AlertMessage != "undefined" && dataValue.resultMap.TypeCode == "4012") {
                PAGE_COUNT++;
                feedHTML = "<div id=\"\">" + "You have no records to show at this moment..!" + "</div>";
                localStorage.alertMessage = "You have no records to show at this moment..!";
            }
        }
        if (CONSTANTS.PGNUMBER == 1) {
            header = HeaderTemplate.Menu.DynamicHeaderTemplate();
            content = '<div class="container"><div class="content-holder">' + feedHTML + '</div></div></div>'
                    + '<div class="div-reloadpage">'
                    + '<div class="div-loadbutton"><span class="spinner-loadmore"></span><div class="loadmore-txt">Load More</div></div>'
                    + '<div class="div-gototop-button">Go to top</div></div>';
            var footer = footerDynamicTemplate.footer.DynamicFooterTemplate();
            totalHtml = header + content + footer;
            var pageNumber = protocall.grabHashPage();
            if (pageNumber == "carriers") {
                protocall.view.loadCarrierPage(true);
            } else if (pageNumber == "customers") {
                protocall.view.loadCustomerPage(true);
            } else if (pageNumber == "myreps") {
                protocall.view.loadMyRepsPage(true);
            } else if (pageNumber == "myProfileView") {
                var $el = $(".myProfileView");
                protocall.view.viewProfileViewPage(true, $el);
            } else if (pageNumber == "carrieragency") {
                protocall.view.loadCarrierOwnerAgenciesPage(true);
            } else {

//                if (sessionStorage.loadMore != "1") {

                $("#page").empty();
//                }
                $("#page").append(totalHtml);
                $('.setProfilePic').fillBox();
                $('.setProfilePic').fillBox();
            }
            protocall.events.GlobalContainerScrollevent();
        } else {
            var pageNumber = protocall.grabHashPage();
            if (pageNumber == "carriers") {
                protocall.view.loadCarrierPage(true);
            } else if (pageNumber == "customers") {
                protocall.view.loadCustomerPage(true);
            } else if (pageNumber == "myreps") {
                protocall.view.loadMyRepsPage(true);
            } else if (pageNumber == "myProfileView") {
                var $el = $(".myProfileView");
                protocall.view.viewProfileViewPage(true, $el);
            } else if (pageNumber == "carrieragency") {
                protocall.view.loadCarrierOwnerAgenciesPage(true);
            } else {
                IsLoadNextPage = true;
                if (PAGE_COUNT == 0) {
//                    $(".content-holder").empty();
                    $(".content-holder").append($(feedHTML));
                    $(".content-holder").scrollTop(1);
                } else if (PAGE_COUNT == 1) {
                    $(".content-holder").append($(feedHTML));
                }
            }
            protocall.events.GlobalContainerScrollevent();
        }
        protocall.events.containerScrollEvent();
        $(".content-holder").removeClass("spinner1");
        $(".topContainer").css("box-shadow", "inset 0px 8px 8px #E9EFF0");
        if (HOMEPAGERESPONSE.UNREADFEEDCOUNT !== 0) {
            $(".mb-submenu").find("a.myalerts span.cnt-no").text(HOMEPAGERESPONSE.UNREADFEEDCOUNT);
        } else {
            $(".mb-submenu").find("a.myalerts span.cnt-blk").text("");
        }
        protocall.events.mouseOverCheckbox();
        protocall.displaySpinner(false);
        protocall.events.containerScrollEvent();
        protocall.events.GlobalContainerScrollevent();
        if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "VIEW_ARCHIVES") {
            HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED = true;
        }
//HOMEPAGERESPONSE.ISVIEWEDARCHIVECLICKED
        protocall.view.subMenuSelectedTab();
        $(".content-holder").find(".spinner1").removeClass("spinner1");
        $(".content-holder").find(".bottomSpinner").removeClass("bottomSpinner");
        $(".content-holder").find("#scrollingDiv").empty();
        $(".content-holder").css("opacity", "1");
        $('#id-agencyprofilelogo').attr('src', sessionStorage.agencyLogo);
        if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "INCIDENTS") {
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                $(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a style=\"width:150px;\" href=\"/myalerts\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative\" data-type=\"page\" data-submenu=\"myalerts\"> <span class=\"submenu-title t-caps f-color-w\"> My Alerts </span> <span class=\"cnt-blk\"> <span class=\"countclass\"> " + sessionStorage.MYALERTSCOUNT + " </span>  </span> </a> <a href=\"/incidents\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative selected-tab\" data-type=\"page\" data-submenu=\"incidents\"> <div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style=\" margin-top: -4px;\"> incidents </div></a> <a href=\"/policies\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative\" data-type=\"page\" data-submenu=\"policies\"> <span class=\"submenu-title t-caps f-color-w\"> Policies </span> </a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"margin-left:40px;visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative  \" data-type=\"page\" data-submenu=\"view_archives\" style=\" width: 19%;margin-left:3px;\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\">  <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span>  </span></a> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\" style=\" margin-left: -10px;width: 132px;\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div></div><div class=\"clear\"> </div></div>");
                //                $(".incidents").click();
            } else {
                $(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div><div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light view_archives p-relative\" data-type=\"page\" data-submenu=\"view_archives\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\" style=\"\"> <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span>  </span></a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"#\" class=\"snap left f-sz-16 opensans-light home t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"home\"><div class=\"carrierfeeds\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \" style=\"background-position: 0px 0px; width: 33px;height:31px;\">&nbsp;</div><span class=\"sub-menu-text inline-block v-align-mid\"> FEEDS </span><span id=\"id-customers-headername\"> </span></div></a></div><div class=\"clear\"> </div></div>");
            }
            if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW) {
                $("div.submenu-sort div:nth-child(1)").text(" Alphabetical ");
            } else {
                $("div.submenu-sort div:nth-child(1)").text(" Recent ");
            }
        } else if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "POLICIES") {
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
//                $(".policies").click();
                $(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a style=\"width:150px;\" href=\"/myalerts\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative\" data-type=\"page\" data-submenu=\"myalerts\"> <span class=\"submenu-title t-caps f-color-w\"> My Alerts </span> <span class=\"cnt-blk\"> <span class=\"countclass\"> " + sessionStorage.MYALERTSCOUNT + "</span>  </span> </a> <a href=\"/incidents\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative\" data-type=\"page\" data-submenu=\"incidents\"> <div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style=\" margin-top: -4px;\"> incidents </div></a> <a href=\"/policies\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative selected-tab\" data-type=\"page\" data-submenu=\"policies\"> <span class=\"submenu-title t-caps f-color-w\"> Policies </span> </a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"margin-left:40px;visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative  \" data-type=\"page\" data-submenu=\"view_archives\" style=\" width: 19%;margin-left:3px;\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\"> <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span>  </span></a> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\" style=\" margin-left: -10px;width: 132px;\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div></div><div class=\"clear\"> </div></div>");
            } else {
                $(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div><div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light view_archives p-relative\" data-type=\"page\" data-submenu=\"view_archives\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\" style=\"\">  <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span>  </span></a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green right f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"#\" class=\"snap left f-sz-16 opensans-light home t-upper p-relative f-color-green\" data-type=\"page\" data-submenu=\"home\"><div class=\"carrierfeeds\"><div class=\"sprite-im customers-icon inline-block v-align-mid mr-space-10 \" style=\"background-position: 0px 0px; width: 33px;height:31px;\">&nbsp;</div><span class=\"sub-menu-text inline-block v-align-mid\"> FEEDS </span><span id=\"id-customers-headername\"> </span></div></a></div><div class=\"clear\"> </div></div>");
            }
            if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW) {
                $("div.submenu-sort div:nth-child(1)").text(" Alphabetical ");
            } else {
                $("div.submenu-sort div:nth-child(1)").text(" Recent ");
            }
        }

        if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "MY_ALERTS") {
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
//                $(".myalerts").click();
                $(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a style=\"width:150px;\" href=\"/myalerts\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative selected-tab\" data-type=\"page\" data-submenu=\"myalerts\"> <span class=\"submenu-title t-caps f-color-w\"> My Alerts </span> <span class=\"cnt-blk\"> <span class=\"countclass\"> " + sessionStorage.MYALERTSCOUNT + " </span>  </span> </a> <a href=\"/incidents\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative\" data-type=\"page\" data-submenu=\"incidents\"> <div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style=\" margin-top: -4px;\"> incidents </div></a> <a href=\"/policies\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative \" data-type=\"page\" data-submenu=\"policies\"> <span class=\"submenu-title t-caps f-color-w\"> Policies </span> </a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"margin-left:40px;visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative  \" data-type=\"page\" data-submenu=\"view_archives\" style=\" width: 19%;margin-left:3px;\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\">  <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span> </span></a> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\" style=\" margin-left: -10px;width: 132px;\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div></div><div class=\"clear\"> </div></div>");
            } else {
                var subMenu = '<div class="tab-rb-submenu inline-block v-align-mid"> <div class="p-relative "> '
                        + '<div style="display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;"  href="/submenus" class="snap  left f-sz-16 opensans-light homesubmenu p-relative " data-type="page" data-submenu="dt-homesubmenu"><span class="submenu-title t-caps f-color-w" style="  color: transparent;">dfgdfgddfgdfg</span></div>'
                        + '<a style="width:150px;"  href="/myalerts" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative selected-tab" data-type="page" data-submenu="myalerts"> <span class="submenu-title t-caps f-color-w"> My Alerts </span> <span class="cnt-blk">'
                        + ' <span class="countclass"> ' + sessionStorage.MYALERTSCOUNT + ' </span>  </span> </a> <a href="/incidents" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative" data-type="page" data-submenu="incidents"  style="  opacity: 0;pointer-events: none;"> <div class="submenu-title t-caps inline-block f-color-w v-align-mid" style="  margin-top: -4px;"> incidents </div></a> <a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative" data-type="page" data-submenu="policies" style="  opacity: 0;pointer-events: none;"> <span class="submenu-title t-caps f-color-w"> Policies </span> </a> <a href="/archives" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative" data-type="page" data-submenu="archives" style="margin-left:40px;visibility:hidden;"> <span class="submenu-title t-caps f-color-w"> Archive </span> </a> <a href="/viewarchives" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative" data-type="page" data-submenu="view_archives"  style="  width: 19%;margin-left:-5px;"> <span class="submenu-title t-caps f-color-w"> View Archived </span> <span class="cnt-blk">  <span class="countclassarch"> ' + sessionStorage.ArchieveCOUNT + ' </span>  </span></a> <div href="#" class="snap submenu-sort right f-sz-16 opensans-light p-relative" data-type="page" data-submenu="sortby" style="  margin-left: -10px;width: 132px;"> <div class="sort-text f-italic"> ' + "Recent" + ' </div><div class="sprite-im drop-down-icon submenu-drop-icon"> &nbsp; </div></div></div><div class="clear"> </div></div>';
                $(".mb-submenu-in").html(subMenu);
            }

        }
        if (localStorage.LoginType == undefined) {
            $(".edit-cover-pic").css("display", "block");
            $(".edit-agency-pic").css("display", "block");
        }
        if (localStorage.LoginType == 'Admin') {
            $(".edit-cover-pic").css("display", "block");
            $(".edit-agency-pic").css("display", "block");
        }
        if (localStorage.LoginType == 'Representatives') {             // alert("dd");
            $(".edit-cover-pic").css("display", "none");
            $(".edit-agency-pic").css("display", "none");
        }
        $('body').css("background", "#eff2f3");
        $('#page').css("overflow", "hidden");
        //$('#page').css("background", "#eff2f3");
        $("#page").css({
            'opacity': '1',
            'padding': '5px',
            'height': '100%',
            'overflow': 'hidden'
        });
        if (localStorage.getItem("LOGIN_LABEL") != "Agency") {
// $(".cnt-blk").css("display", "none");
        }

        localStorage.pagestatus = "true";
        $(".container").css("overflow-y", "auto");
        if (feedHTML == "<div id=\"\">" + "You have no records to show at this moment..!" + "</div>" || feedHTML == "<div id=\"\">" + "No Records..!" + "</div>") {
            protocall.displaySpinner(false);
            if (HOMEPAGERESPONSE.RECURRINGALERTDFEEDS.length == 0) {
                showAlertBox("You have no records to show at this moment..!");
                hideLoadingButton();
            } else {
                feedHTML = "";
                $(".content-holder").append($(feedHTML));
                console.log("You have no records to show at this moment..!");
            }
        }

        if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "VIEW_ARCHIVES") {
            $(".home").removeClass("selected-tab");
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
//                $(".view_archives").click();
                $(".mb-submenu-in").html("<div class=\"tab-rb-submenu inline-block v-align-mid\"> <div class=\"p-relative \"> <div style=\"display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;\" href=\"/submenus\" class=\"snap left f-sz-16 opensans-light homesubmenu p-relative \" data-type=\"page\" data-submenu=\"dt-homesubmenu\"><span class=\"submenu-title t-caps f-color-w\" style=\" color: transparent;\">dfgdfgddfgdfg</span></div><a style=\"width:150px;\" href=\"/myalerts\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative\" data-type=\"page\" data-submenu=\"myalerts\"> <span class=\"submenu-title t-caps f-color-w\"> My Alerts </span> <span class=\"cnt-blk\"> <span class=\"countclass\"> " + sessionStorage.MYALERTSCOUNT + "</span>  </span> </a> <a href=\"/incidents\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative\" data-type=\"page\" data-submenu=\"incidents\"> <div class=\"submenu-title t-caps inline-block f-color-w v-align-mid\" style=\" margin-top: -4px;\"> incidents </div></a> <a href=\"/policies\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative\" data-type=\"page\" data-submenu=\"policies\"> <span class=\"submenu-title t-caps f-color-w\"> Policies </span> </a> <a href=\"/archives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative\" data-type=\"page\" data-submenu=\"archives\" style=\"margin-left:40px;visibility:hidden;\"> <span class=\"submenu-title t-caps f-color-w\"> Archive </span> </a> <a href=\"/viewarchives\" class=\"snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative  selected-tab\" data-type=\"page\" data-submenu=\"view_archives\" style=\" width: 19%;margin-left:3px;\"> <span class=\"submenu-title t-caps f-color-w\"> View Archived </span> <span class=\"cnt-blk\">  <span class=\"countclassarch\"> " + sessionStorage.ArchieveCOUNT + " </span>  </span></a> <div href=\"#\" class=\"snap submenu-sort right f-sz-16 opensans-light p-relative\" data-type=\"page\" data-submenu=\"sortby\" style=\" margin-left: -10px;width: 132px;\"> <div class=\"sort-text f-italic\"> Recent </div><div class=\"sprite-im drop-down-icon submenu-drop-icon\"> &nbsp; </div></div></div><div class=\"clear\"> </div></div>");
            } else {
                var subMenu = '<div class="tab-rb-submenu inline-block v-align-mid"> <div class="p-relative "> '
                        + '<div style="display:none;width:130px;margin-right: -79px;margin-top: 7px;height:30px;"  href="/submenus" class="snap  left f-sz-16 opensans-light homesubmenu p-relative " data-type="page" data-submenu="dt-homesubmenu"><span class="submenu-title t-caps f-color-w" style="  color: transparent;">dfgdfgddfgdfg</span></div>'
                        + '<a style="width:150px;"  href="/myalerts" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light myalerts p-relative" data-type="page" data-submenu="myalerts"> <span class="submenu-title t-caps f-color-w"> My Alerts </span> <span class="cnt-blk">'
                        + ' <span class="countclass"> ' + sessionStorage.MYALERTSCOUNT + ' </span>  </span> </a> <a href="/incidents" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light incidents p-relative" data-type="page" data-submenu="incidents"  style="  opacity: 0;pointer-events: none;"> <div class="submenu-title t-caps inline-block f-color-w v-align-mid" style="  margin-top: -4px;"> incidents </div></a> <a href="/policies" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light policies p-relative" data-type="page" data-submenu="policies" style="  opacity: 0;pointer-events: none;"> <span class="submenu-title t-caps f-color-w"> Policies </span> </a> <a href="/archives" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light archives p-relative" data-type="page" data-submenu="archives" style="margin-left:40px;visibility:hidden;"> <span class="submenu-title t-caps f-color-w"> Archive </span> </a> <a href="/viewarchives" class="snap submenu-tab bg-color-green left f-sz-16 opensans-light view_archives p-relative selected-tab" data-type="page" data-submenu="view_archives"  style="  width: 19%;margin-left:-5px;"> <span class="submenu-title t-caps f-color-w"> View Archived </span> <span class="cnt-blk">  <span class="countclassarch"> ' + sessionStorage.ArchieveCOUNT + ' </span>  </span></a> <div href="#" class="snap submenu-sort right f-sz-16 opensans-light p-relative" data-type="page" data-submenu="sortby" style="  margin-left: -10px;width: 132px;"> <div class="sort-text f-italic"> ' + "Recent" + ' </div><div class="sprite-im drop-down-icon submenu-drop-icon"> &nbsp; </div></div></div><div class="clear"> </div></div>';
                $(".mb-submenu-in").html(subMenu);
            }
        }

//  width: 10px;
//  height: 10px;
//  margin-top: 31px;
        $(".feeduserpic").addClass("spinner-loader");
        $(".feeduserpic").css("width", "10px");
        $(".feeduserpic").css("height", "10px");
        $(".feeduserpic").css("margin-top", "31px");
        setTimeout(function () {
            $(".feeduserpic").removeClass("spinner-loader");
            $(".feeduserpic").css("width", "100%");
            $(".feeduserpic").css("height", "100%");
            $(".feeduserpic").css("margin-top", "0px");
            $(".feeduserpic").fillBox();
//                    var $this_feed = $(".feeduserpic"),
//            ratiofeed = $this_feed.width() / $this_feed.height();
//            // $this_feed.removeClass();
//            $this_feed.addClass((ratiofeed < 1) ? 'portrait' : 'landscape');
//        //$this_feed.css("left","0%");

        }, 1500);
        /* if (HOMEPAGERESPONSE.RECURRINGALERTDFEEDS.length != 0) {
         
         homePageUpdate = setInterval(function () {
         utils.server.makeServerCall(page, data, callback, deepPath);
         }, 1000);
         } */
        $(".countclass").text(sessionStorage.MYALERTSCOUNT);
        $(".countclassarch").text(sessionStorage.ArchieveCOUNT);
        //hideLoadMore();
        hideLoadingButton();
        if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW) {
            $(".sort-text").text("Alphabetical");
        } else {
            $(".sort-text").text("Recent");
        }

        if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "MY_ALERTS") {

            if (sessionStorage.isHomePageAlphaSort == "true") {
                $("div.submenu-sort div:nth-child(1)").text("Alphabetical");
            } else {
                $("div.submenu-sort div:nth-child(1)").text("Recent");

            }
        }


    },
    policyWithCarrierResponse: function (emailId) {
        protocall.view.properityPolicyresponse();
    }
} /*Naveen 23-2-2015 Chnage end*/
function readBrowserURL(input) {
    HOMEPAGERESPONSE.ISEDITIMAGEICONCLICKEDFOROVERLAY = true;
    HOMEPAGERESPONSE.ISEDITIMAGEICONCLICKED = false;
    if (input.files && input.files[0]) {
        var filePath = $("#inputfile").val();
        if (filePath) {
            var startIndex = (filePath.indexOf('\\') >= 0 ? filePath.lastIndexOf('\\') : filePath.lastIndexOf('/'));
            var filename = filePath.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1);
            }
            var textElement = document.getElementById("id-agency-logo-name");
            textElement.value = filename;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#id-agencyprofilelogo').attr('src', e.target.result);
            //$('.setAgencyPic').attr('src', e.target.result);
            $('#id-agencypic').attr('src', e.target.result);
            //sessionStorage.agencyLogo = e.target.result;
            sessionStorage.profilePicAfterUpdate = e.target.result;
            //sessionStorage.profilePic = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
        console.log("sessionStorage.profilePicAfterUpdate", sessionStorage.profilePicAfterUpdate);
    }
}
function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
}
function loadtimePicker() {
    for (var hour = 1; hour <= 12; hour++) {
        for (var min = 0; min < 60; min++) {
            $("#pushmessagetimepicker").append('<option>' + minTwoDigits(hour) + ":" + minTwoDigits(min) + '</option>');
        }
    }
}
function checkboxStatus(idValue) {
    if (idValue === "radio-button-now") {
        document.getElementById("radio-button-now").checked = true;
        document.getElementById("radio-button-later").checked = false;
        $(".later-box").css("display", "none");
    } else if (idValue === "radio-button-later") {
        document.getElementById("radio-button-now").checked = false;
        document.getElementById("radio-button-later").checked = true;
        $(".later-box").css("display", "block");
        loadtimePicker();
    } else if (idValue == "radio-button-agency") {
        document.getElementById("radio-button-agency").checked = true;
        document.getElementById("radio-button-rep").checked = false;
    } else if (idValue == "radio-button-rep") {
        document.getElementById("radio-button-rep").checked = true;
        document.getElementById("radio-button-agency").checked = false;
    } else if (idValue == "radio-button-public") {
        document.getElementById("radio-button-public").checked = true;
        document.getElementById("radio-button-private").checked = false;
        document.getElementById("radio-button-custom").checked = false;
        $(".rep-content-blk").css("opacity", "0.5");
        $(".rep-content-blk").find("input", "div").attr('disabled', 'disabled');
        $(".switchsample").css("pointer-events", "none");
        $("#privay-box").css("display", "none");
    } else if (idValue == "radio-button-private") {
        $(".rep-content-blk").css("opacity", "0.5");
        $(".rep-content-blk").find("input", "div").attr('disabled', 'disabled');
        $(".switchsample").css("pointer-events", "none");
        $("input:radio").removeAttr("checked");
        // document.getElementById("radio-button-public").checked = false;
        document.getElementById("radio-button-public").checked = false;
        document.getElementById("radio-button-private").checked = true;
        document.getElementById("radio-button-custom").checked = false;
        $("#privay-box").css("display", "none");
    } else if (idValue == "radio-button-custom") {
        $(".rep-content-blk").find("input", "div").attr('disabled', false);
        $(".switchsample").css("pointer-events", "auto");
        $(".rep-content-blk").css("opacity", "1");
        $("input:radio").removeAttr("checked"); //  document.getElementById("radio-button-public").checked = false;
        document.getElementById("radio-button-private").checked = false;
        document.getElementById("radio-button-custom").checked = true;
        $("#privay-box").css("display", "block");
    }
}
function hideVendorTextboxes() {
    $("#id-vendor-preferredvendorid").css("visibility", "hidden");
    $("#id-vendor-type").css("visibility", "hidden");
    $("#id-vendor-name").css("visibility", "hidden");
    $("#id-vendor-phone").css("visibility", "hidden");
    $("#id-vendor-address1").css("visibility", "hidden");
    $("#id-vendor-address2").css("visibility", "hidden");
    $("#id-vendor-city").css("visibility", "hidden");
    $("#id-vendor-state").css("visibility", "hidden");
    $("#id-vendor-zipcode").css("visibility", "hidden");
}
function hideAgencyTextboxes() {
    $("#id-carrier-agencyid").css("visibility", "hidden");
    $("#id-carrier-masteragencyid").css("visibility", "hidden");
    $("#id-carrier-agencytype").css("visibility", "hidden");
    $("#id-carrier-agencyname").css("visibility", "hidden");
    $("#id-carrier-agencyaddress1").css("visibility", "hidden");
    $("#id-carrier-agencyaddress2").css("visibility", "hidden");
    $("#id-carrier-agencycity").css("visibility", "hidden");
    $("#id-carrier-agencystate").css("visibility", "hidden");
    $("#id-carrier-agencyzipcode").css("visibility", "hidden");
    $("#id-carrier-agencyphone").css("visibility", "hidden");
    $("#id-carrier-agencyemail").css("visibility", "hidden");
    $("#id-carrier-agencywebsite").css("visibility", "hidden");
    $("#id-carrier-agencyfacebook").css("visibility", "hidden");
    $("#id-carrier-agencyroadside").css("visibility", "hidden");
}
function editAgencySaveData() {

    var masteragencyid = "", agencytype = "", backgroundColorValue = "", themeColorValue = "", frameColorValue = "";
    addBottomBorder();
    hideAgencyTextboxes();
    document.getElementById("id-carrier-edit").innerHTML = "edit";
    document.getElementById("id-c-agencyid").innerHTML = $("#id-carrier-agencyid").val();
    if (localStorage.LoginType != "SuperAdmin") {
        document.getElementById("id-c-masteragencyid").innerHTML = $("#id-carrier-masteragencyid").val();
        document.getElementById("id-c-agencytype").innerHTML = $("#id-carrier-agencytype").val();
        $("#id-c-masteragencyid").show();
        $("#id-c-agencytype").show();
        masteragencyid = document.getElementById("id-carrier-masteragencyid").value;
        agencytype = document.getElementById("id-carrier-agencytype").value;
        backgroundColorValue = $("#color_Name").attr('class');
        themeColorValue = $("#theme_color_value").attr('class');
        frameColorValue = $("#frame_color_value").attr('class');
    } else {
        console.log("Super Admin");
    }
//id-carrier-agencyroadside
    document.getElementById("id-c-agencyname").innerHTML = $("#id-carrier-agencyname").val();
    document.getElementById("id-c-agencyaddress1").innerHTML = $("#id-carrier-agencyaddress1").val();
    document.getElementById("id-c-agencyaddress2").innerHTML = $("#id-carrier-agencyaddress2").val();
    document.getElementById("id-c-agencycity").innerHTML = $("#id-carrier-agencycity").val();
    document.getElementById("id-c-agencystate").innerHTML = $("#id-carrier-agencystate").val();
    document.getElementById("id-c-agencyzip").innerHTML = $("#id-carrier-agencyzipcode").val();
    document.getElementById("id-c-agencyphone").innerHTML = $("#id-carrier-agencyphone").val();
    document.getElementById("id-c-agencyemail").innerHTML = $("#id-carrier-agencyemail").val();
    document.getElementById("id-c-agencywebsite").innerHTML = $("#id-carrier-agencywebsite").val();
    document.getElementById("id-c-agencyfacebook").innerHTML = $("#id-carrier-agencyfacebook").val();
    try {
        document.getElementById("id-c-agencyroadside").innerHTML = $("#id-carrier-agencyroadside").val();
    } catch (e) {

    }
    $("#id-c-agencyid").show();
    $("#id-c-agencyroadside").show();
    $("#id-c-agencyname").show();
    $("#id-c-agencyaddress1").show();
    $("#id-c-agencyaddress2").show();
    $("#id-c-agencycity").show();
    $("#id-c-agencystate").show();
    $("#id-c-agencyzip").show();
    $("#id-c-agencyphone").show();
    $("#id-c-agencyemail").show();
    $("#id-c-agencywebsite").show();
    $("#id-c-agencyfacebook").show();
    var agencyid = document.getElementById("id-carrier-agencyid").value;
    var agencyname = document.getElementById("id-carrier-agencyname").value;
    var agencyaddress1 = document.getElementById("id-carrier-agencyaddress1").value;
    var agencyaddress2 = document.getElementById("id-carrier-agencyaddress2").value;
    var agencycity = document.getElementById("id-carrier-agencycity").value;
    var agencystate = document.getElementById("id-carrier-agencystate").value;
    var agencyzipcode = document.getElementById("id-carrier-agencyzipcode").value;
    var agencyphone = document.getElementById("id-carrier-agencyphone").value;
    var agencyemail = document.getElementById("id-carrier-agencyemail").value;
    var facebookPage = document.getElementById("id-carrier-agencyfacebook").value;
    var website = document.getElementById("id-carrier-agencywebsite").value;
    var roadSideNumber = "";
    try {
        roadSideNumber = document.getElementById("id-carrier-agencyroadside").value;
    } catch (e) {

    }
    page = "agencysavepage";
    sessionStorage.agencyName = agencyname;
    $("#agencyNameValue").text(agencyname);
    $("#agencyNameValue").attr('title', agencyname);
    if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
        deepPath = "editcarrier";
        var data = {website: website, facebookPage: facebookPage, carrierId: masteragencyid, carrierName: agencyname, address: agencyaddress1, address2: agencyaddress2, city: agencycity, state: agencystate, zip: agencyzipcode,
            phone: agencyphone, emailId: agencyemail, color: backgroundColorValue, themeColor: themeColorValue, frameColor: frameColorValue, roadsideAssistanceNumber: roadSideNumber};
        utils.server.displayMessage("Successfully Saved..!");
        utils.server.makeServerCall(page, data, null, deepPath);
        RESPONSE.BACKGROUNDCOLORVALUE = "";
        RESPONSE.THEMECOLOR = "";
        RESPONSE.FRAMECOLOR = "";
    } else {
        if (localStorage.LoginType == "SuperAdmin") {
            deepPath = "editcompany";
            var data = {website: website, facebookPage: facebookPage, companyId: agencyid, agencyName: agencyname, address: agencyaddress1, address2: agencyaddress2, city: agencycity, state: agencystate, zipcode: agencyzipcode, phone: agencyphone, emailId: agencyemail};
        } else {
            deepPath = "editagency";
            var data = {website: website, facebookPage: facebookPage, agencyId: masteragencyid, agencyName: agencyname, address: agencyaddress1, address2: agencyaddress2, agencyOwner: "agencyowner", agencyType: agencytype, carrierAgencyId: agencyid
                , city: agencycity, state: agencystate, zipcode: agencyzipcode, phone: agencyphone, emailId: agencyemail, color: backgroundColorValue, themeColor: themeColorValue, frameColor: frameColorValue};
        }
        utils.server.displayMessage("Successfully Saved..!");
        utils.server.makeServerCall(page, data, null, deepPath);
        RESPONSE.BACKGROUNDCOLORVALUE = "";
        RESPONSE.THEMECOLOR = "";
        RESPONSE.FRAMECOLOR = "";
    }
}
function editAgencyEditData() {
    removerBottomBorder();
    document.getElementById("id-carrier-edit").innerHTML = "Save";
    $("#id-c-agencyid").hide();
    $("#id-c-masteragencyid").hide();
    $("#id-c-agencytype").hide();
    $("#id-c-agencyname").hide();
    $("#id-c-agencyaddress1").hide();
    $("#id-c-agencyaddress2").hide();
    $("#id-c-agencycity").hide();
    $("#id-c-agencystate").hide();
    $("#id-c-agencyzip").hide();
    $("#id-c-agencyphone").hide();
    $("#id-c-agencyemail").hide();
    $("#id-c-agencyroadside").hide();
    $("#id-c-agencywebsite").hide();
    $("#id-c-agencyfacebook").hide();
    $("#id-carrier-agencyroadside").css("visibility", "visible");
    $("#id-carrier-agencyid").css("visibility", "visible");
    $("#id-carrier-masteragencyid").css("visibility", "visible");
    $("#id-carrier-agencytype").css("visibility", "visible");
    $("#id-carrier-agencyname").css("visibility", "visible");
    $("#id-carrier-agencyaddress1").css("visibility", "visible");
    $("#id-carrier-agencyaddress2").css("visibility", "visible");
    $("#id-carrier-agencycity").css("visibility", "visible");
    $("#id-carrier-agencystate").css("visibility", "visible");
    $("#id-carrier-agencyzipcode").css("visibility", "visible");
    $("#id-carrier-agencyphone").css("visibility", "visible");
    $("#id-carrier-agencyemail").css("visibility", "visible");
    $("#id-carrier-agencywebsite").css("visibility", "visible");
    $("#id-carrier-agencyfacebook").css("visibility", "visible");
    document.getElementById("id-carrier-agencyid").value = document.getElementById("id-c-agencyid").innerHTML;
    if (localStorage.LoginType != "SuperAdmin") {
        document.getElementById("id-carrier-masteragencyid").value = document.getElementById("id-c-masteragencyid").innerHTML;
        document.getElementById("id-carrier-agencytype").value = document.getElementById("id-c-agencytype").innerHTML;
    } else {
        console.log("SuperAdmin");
    }
    document.getElementById("id-carrier-agencyname").value = document.getElementById("id-c-agencyname").innerHTML;
    document.getElementById("id-carrier-agencyaddress1").value = document.getElementById("id-c-agencyaddress1").innerHTML;
    document.getElementById("id-carrier-agencyaddress2").value = document.getElementById("id-c-agencyaddress2").innerHTML;
    document.getElementById("id-carrier-agencycity").value = document.getElementById("id-c-agencycity").innerHTML;
    document.getElementById("id-carrier-agencystate").value = document.getElementById("id-c-agencystate").innerHTML;
    document.getElementById("id-carrier-agencyzipcode").value = document.getElementById("id-c-agencyzip").innerHTML;
    document.getElementById("id-carrier-agencyphone").value = document.getElementById("id-c-agencyphone").innerHTML;
    document.getElementById("id-carrier-agencyemail").value = document.getElementById("id-c-agencyemail").innerHTML;
    document.getElementById("id-carrier-agencywebsite").value = document.getElementById("id-c-agencywebsite").innerHTML;
    document.getElementById("id-carrier-agencyfacebook").value = document.getElementById("id-c-agencyfacebook").innerHTML;
    //document.getElementById("id-carrier-agencyroadside").value = document.getElementById("id-c-agencyroadside").innerHTML;
}
function editVendorSaveData() {
    addBottomBorder();
    // $("#id-carrier-edit").html("Edit");
    document.getElementById("id-carrier-edit").innerHTML = "edit";
    $("#id-v-preferredvendorid").css("visibility", "visible");
    $("#id-v-vendortype").css("visibility", "visible");
    $("#id-v-vendorname").css("visibility", "visible");
    $("#id-v-vendorphone").css("visibility", "visible");
    $("#id-v-address1").css("visibility", "visible");
    $("#id-v-address2").css("visibility", "visible");
    $("#id-v-city").css("visibility", "visible");
    $("#id-v-state").css("visibility", "visible");
    $("#id-v-zipcode").css("visibility", "visible");
    $("#id-v-preferredvendorid").css("display", "block");
    $("#id-v-vendortype").css("display", "block");
    $("#id-v-vendorname").css("display", "block");
    $("#id-v-vendorphone").css("display", "block");
    $("#id-v-address1").css("display", "block");
    $("#id-v-address2").css("display", "block");
    $("#id-v-city").css("display", "block");
    $("#id-v-state").css("display", "block");
    $("#id-v-zipcode").css("display", "block");
    hideVendorTextboxes();
    document.getElementById("id-v-preferredvendorid").innerHTML = $("#id-vendor-preferredvendorid").val();
    document.getElementById("id-v-vendortype").innerHTML = $("#id-vendor-type").val();
    document.getElementById("id-v-vendorname").innerHTML = $("#id-vendor-name").val();
    document.getElementById("id-v-vendorphone").innerHTML = $("#id-vendor-phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
    document.getElementById("id-v-address1").innerHTML = $("#id-vendor-address1").val();
    document.getElementById("id-v-address2").innerHTML = $("#id-vendor-address2").val();
    document.getElementById("id-v-city").innerHTML = $("#id-vendor-city").val();
    document.getElementById("id-v-state").innerHTML = $("#id-vendor-state").val();
    document.getElementById("id-v-zipcode").innerHTML = $("#id-vendor-zipcode").val();
    var preferredvendorid = $("#id-vendor-preferredvendorid").val();
    var type = document.getElementById("id-vendor-type").value;
    var name = document.getElementById("id-vendor-name").value;
    var phone = document.getElementById("id-vendor-phone").value;
    var address1 = document.getElementById("id-vendor-address1").value;
    var address2 = document.getElementById("id-vendor-address2").value;
    var city = document.getElementById("id-vendor-city").value;
    var state = document.getElementById("id-vendor-state").value;
    var zipcode = document.getElementById("id-vendor-zipcode").value;
    if (preferredvendorid != "" || preferredvendorid != null) {
        page = "vendorsavepage";
        var data = {preferredVendorId: SERVICEID, name: name, serviceType: type, zipcode: zipcode, phone: phone, address: address1, address2: address2, city: city, state: state};
        utils.server.displayMessage("Successfully Saved..!");
        deepPath = "editpreferredvendorservice";
        utils.server.makeServerCall(page, data, null, deepPath);
        utils.server.loadPrefferedvendorsdetails();
    }
}
function editVendorEditData() {
    removerBottomBorder();
    //$("#id-carrier-edit").html("Save");
    $("#id-vendor-preferredvendorid").css("visibility", "visible");
    $("#id-vendor-type").css("visibility", "visible");
    $("#id-vendor-name").css("visibility", "visible");
    $("#id-vendor-phone").css("visibility", "visible");
    $("#id-vendor-address1").css("visibility", "visible");
    $("#id-vendor-address2").css("visibility", "visible");
    $("#id-vendor-city").css("visibility", "visible");
    $("#id-vendor-state").css("visibility", "visible");
    $("#id-vendor-zipcode").css("visibility", "visible");
    document.getElementById("id-vendor-preferredvendorid").value = document.getElementById("id-v-preferredvendorid").innerHTML;
    document.getElementById("id-vendor-type").value = document.getElementById("id-v-vendortype").innerHTML;
    document.getElementById("id-vendor-name").value = document.getElementById("id-v-vendorname").innerHTML;
    document.getElementById("id-vendor-phone").value = document.getElementById("id-v-vendorphone").innerHTML;
    document.getElementById("id-vendor-address1").value = document.getElementById("id-v-address1").innerHTML;
    document.getElementById("id-vendor-address2").value = document.getElementById("id-v-address2").innerHTML;
    document.getElementById("id-vendor-city").value = document.getElementById("id-v-city").innerHTML;
    document.getElementById("id-vendor-state").value = document.getElementById("id-v-state").innerHTML;
    document.getElementById("id-vendor-zipcode").value = document.getElementById("id-v-zipcode").innerHTML;
    $("#id-v-preferredvendorid").hide();
    $("#id-v-vendortype").hide();
    $("#id-v-vendorname").hide();
    $("#id-v-vendorphone").hide();
    $("#id-v-address1").hide();
    $("#id-v-address2").hide();
    $("#id-v-city").hide();
    $("#id-v-state").hide();
    $("#id-v-zipcode").hide();
}
function removerBottomBorder() {
    var className = document.getElementsByClassName("carrier-border-view");
    for (var i = 0; i < className.length; i++) {
        className[i].style.borderBottom = "0px";
    }
}
function addBottomBorder() {
    var className = document.getElementsByClassName("carrier-border-view");
    if (sessionStorage.REFERENCE_TYPE === "agency_info") {
        for (var i = 0; i < className.length - 2; i++) {
            className[i].style.borderBottom = "1px solid #ccc";
        }
    } else if (sessionStorage.REFERENCE_TYPE === "vendor_info") {
        for (var i = 0; i < className.length - 2; i++) {
            className[i].style.borderBottom = "1px solid #ccc";
        }
    }
}
function editDataInfo() {

    if (HOMEPAGERESPONSE.ISPREFERREDVENDORCLICKED) {
        sessionStorage.REFERENCE_TYPE = "vendor_info";
    } else {
        sessionStorage.REFERENCE_TYPE = "agency_info";
    }
    var innerHtmlValue = document.getElementById("id-carrier-edit").innerHTML;
    if (sessionStorage.REFERENCE_TYPE == "agency_info") {
        if (innerHtmlValue.trim().toLowerCase() == "edit") {
            $("#color_Name").css("pointer-events", "all");
            $("#themeColorValue").css("pointer-events", "all");
            $("#frameColorValue").css("pointer-events", "all");
            $("#frame_color_value").css("pointer-events", "all");
            $("#theme_color_value").css("pointer-events", "all");
            editAgencyEditData();
            $("#id-canecelbutton").css("display", "block");
            IsAgencyDataChanged = true;
        } else {
            $("#color_Name").css("pointer-events", "none");
            $("#themeColorValue").css("pointer-events", "none");
            $("#frameColorValue").css("pointer-events", "none");
            $("#frame_color_value").css("pointer-events", "none");
            $("#theme_color_value").css("pointer-events", "none");
            editAgencySaveData();
            showAlertBox("Saved..!");
            $("#id-canecelbutton").css("display", "none");
        }
    } else if (sessionStorage.REFERENCE_TYPE == "vendor_info") {
        if (innerHtmlValue.trim().toLowerCase() == "edit") {
            editVendorEditData();
            $("#id-carrier-edits").text("Save");
            document.getElementById("id-carrier-edit").innerHTML = "Save";
            IsVendorDataChanged = true;
        } else {
            editVendorSaveData();
            $("#id-carrier-edits").text("Edit");
            document.getElementById("id-carrier-edit").innerHTML = "Edit";
            showAlertBox("Saved..!");
        }
    }
}
function readURL(input) {
    HOMEPAGERESPONSE.ISEDITIMAGEICONCLICKED = true;
    HOMEPAGERESPONSE.ISEDITIMAGEICONCLICKEDFOROVERLAY = false;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.agenypic-info').find("img").attr('src', e.target.result);
            $('.agenypic-info').css("background-image", "url(" + e.target.result + ")");
            //$('.setProfilePic').attr('src', e.target.result);
            sessionStorage.profilePicAfterUpdate = e.target.result;
            //sessionStorage.profilePic = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#id-norecords").animate({
    width: "20%", opacity: 1,
    marginLeft: "0.2in",
    fontSize: "16px"
}, 1500);
function GetSlider() {
    var currentPosition = 0;
    var slideWidth = 500;
    var slides = $('.slide');
    var numberOfSlides = slides.length;
    var slideShowInterval;
    var speed = 30000000;
    slideShowInterval = setInterval(changePosition, speed);
    slides.wrapAll('<div id="slidesHolder"></div>')
    slides.css({'float': 'left'});
    $('#slidesHolder').css('width', slideWidth * numberOfSlides);
    $('#slideshow')
            .prepend('<span class="nav" id="leftNav">Move Left</span>')
            .append('<span class="nav" id="rightNav">Move Right</span>');
    manageNav(currentPosition);
    $('.nav').bind('click', function () {
        currentPosition = ($(this).attr('id') == 'rightNav')
                ? currentPosition + 1 : currentPosition - 1;
        manageNav(currentPosition);
        clearInterval(slideShowInterval);
        slideShowInterval = setInterval(changePosition, speed);
        moveSlide();
    });
    function manageNav(position) {
        if (position == 0) {
            $('#leftNav').hide()
        } else {
            $('#leftNav').show()
        }
        if (position == numberOfSlides - 1) {
            $('#rightNav').hide()
        } else {
            $('#rightNav').show()
        }
    }
    function changePosition() {
        if (currentPosition == numberOfSlides - 1) {
            currentPosition = 0;
            manageNav(currentPosition);
        } else {
            currentPosition++;
            manageNav(currentPosition);
        }
        moveSlide();
    }
    function moveSlide() {
        $('#slidesHolder')
                .animate({'marginLeft': slideWidth * (-currentPosition)});
    }
}
function convertImgToBase64URL(url, callback, outputFormat) {
    var canvas = document.createElement('CANVAS'),
            ctx = canvas.getContext('2d'),
            img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        var dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null;
    };
    img.src = url;
}
function fnDeSelect() {
    if (document.selection) {
        document.selection.empty();
    } else if (window.getSelection) {
        window.getSelection().removeAllRanges();
    }
}

function showAlertBox(_messgae) {
    setTimeout(function () {
        if (_messgae != "" && _messgae != undefined) {
            if (IsalertShown == 0) {
                IsalertShown = 1;
                var html = '<h2 class="t-left opensans-regular f-color-green" style="display:none;">Header</h2>'
                        + '<div class="o-sub-content p-relative">'
                        + '<div class="alert-mess-text f-sz-18 t-center opensans-regular bold" style="margin-top: 25px !important;  margin-bottom: 30px;">' + _messgae + '</div>'
                        + '<div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="closeOverlay" style="  margin: 18px auto 15px auto;">OK</div>'
                        + '</div>';
                overlay.displayOverlay(html);
                $(".o-box").css("min-height", "150px");
                $(".o-box").css("max-height", "200px");
                $(".o-box").css("width", "25%");
                $(".o-box").css("top", "180px");
            }
        }
    }, 400);
}

$(document).ready(function () {
    $(window).resize(function () {
        try {
            //var container = $('.content-holder'), deepPath = "", page = "";
            //var scrollHeightValue = container[0].scrollHeight - container.scrollTop();
            //scrollHeightValue++;
            //var containerOuterHeight = container.outerHeight();
            popUpContent.closePopUpContent();
            console.log("resize is happening");
            //protocall.events.handleScroll(scrollHeightValue,containerOuterHeight);
            if (screen.width == window.innerWidth) {
                //alert("you are on normal page with 100% zoom");
                //protocall.events.handleScroll(scrollHeightValue,containerOuterHeight);
                ZOOMINCOUNTER = 0;
                ZOOMOUTCOUNTER = 0;
            } else if (screen.width > window.innerWidth) {
                ZOOMINCOUNTER++;
                ZOOMOUTCOUNTER = 0;
                console.log("ZOOMINCOUNTER>>>>>>>>>>>>", ZOOMINCOUNTER);
                //alert("you have zoomed in the page i.e more than 100%");
                //protocall.events.handleScroll(scrollHeightValue,containerOuterHeight);
            } else {
                ZOOMOUTCOUNTER++;
                ZOOMINCOUNTER = 0;
                console.log("ZOOMOUTCOUNTER>>>>>>>>>>>>", ZOOMOUTCOUNTER);
                //alert("you have zoomed out i.e less than 100%");
                //protocall.events.handleScroll(scrollHeightValue,containerOuterHeight);
            }
        } catch (e) {

        }
    });

    $("#page").css({
        'opacity': '1',
        'padding': '5px',
        'height': '100%',
        'overflow': 'hidden'
    });
});
function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 29) { // 30 minutes
        protocall.closeOverlay();
        protocall.closePopUp();
        //protocall.view.LogoutAuthenticateYes();
        return false;
    }
}


function reloadServerCall() {

    if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "MY_ALERTS") {
        $(".myalerts").click();
    } else if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "INCIDENTS") {
        $(".incidents").click();
    } else if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "POLICIES") {
        $(".policies").click();
    } else if (sessionStorage.getItem("HOME_PAGE_SELECTED_BUTTON") == "VIEW_ARCHIVES") {
        $(".view_archives").click();
    } else {
        $(".myalerts").click();
    }

}

function parseNextPage() {
    if (sessionStorage.selectedTab == "CUSTOMERS_PAGE") {
        module_ServerCall.parseCustomersData(++CUSTOMER.CUSTOMERPAGINATIONUMBER, sessionStorage.isCustomerAlphaSort);
    } else if (sessionStorage.selectedTab == "VIEW_CARRIER_FEEDVIEW") {
        module_ServerCall.parseCarrierViowAssociatedFeedData(sessionStorage.CarrierId, ++CARRIER.CUSTOMERPAGINATIONUMBER, sessionStorage.type);
    } else if (sessionStorage.selectedTab == "AGENCY_PAGE" || sessionStorage.selectedTab == "AGENCY") {
        module_ServerCall.parseCarrierViowAssociatedFeedData(sessionStorage.CarrierId, ++AGENCY.CUSTOMERPAGINATIONUMBER, sessionStorage.type);
    } else if (sessionStorage.selectedTab == "AGENCY_REP_DETAILS_VIEW" || sessionStorage.selectedTab == "AGENCY_REP_DETAILS_VIEW") {
        //
        //localStorage.setItem("CARRIERADMIN_MYREPID", emailID);
        module_ServerCall.viewMyRepsData(++AGENCY.ASSOCIATEDCUSTOMERPAGINATIONNUMBER, localStorage.getItem("CARRIERADMIN_MYREPID"));
    } else if (sessionStorage.selectedTab == "HOME_PAGE") {
        //HOMEPAGERESPONSE.HOMEPAGEFEEDPAGENUMBER++;
        var deepPath = "";
        if (sessionStorage.menuSelected == "incidentMenu") {
            console.log("scroll---->", "incidentMenu");
            deepPath = "filterfeedsbyalerttype";
        } else if (sessionStorage.menuSelected == "policyMenu") {
            console.log("scroll---->", "policyMenu");
            deepPath = "filterfeedsbyalerttype";
        } else if (sessionStorage.menuSelected == "archieveMenu") {
            console.log("scroll---->", "archieveMenu");
            deepPath = "viewedarchieved";
        } else {
            console.log("scroll---->", "my alerts");
            if (HOMEPAGERESPONSE.SORTBYALPHABETICALVIEW) {
                deepPath = "filterfeedbyalphabetical";
            } else {
                deepPath = "filterfeedbyalertdate";
            }
        }
        sessionStorage.loadMore = "1";
        module_ServerCall.parseHomePageFeedData(++HOMEPAGERESPONSE.HOMEPAGEFEEDPAGENUMBER, deepPath);
        //hideLoadMore();
    } else {
        console.log("No Match found");
    }
}

function  showLoadMore() {

    if (sessionStorage.selectedTab == "viewFeed") {
        $(".div-reloadpage").fadeIn().css("display", "block");
        $(".div-loadbutton").css("display", "none");
    } else if (sessionStorage.selectedTab == "SETTINGS") {
        $(".div-reloadpage").fadeIn().css("display", "block");
        $(".div-loadbutton").css("display", "none");
    } else if (sessionStorage.selectedTab == "CUSTOMER_VIEW") {
        $(".div-reloadpage").fadeIn().css("display", "block");
        $(".div-loadbutton").css("display", "none");
    }/*  else if(sessionStorage.selectedTab == "HOME_PAGE"){
     $(".div-reloadpage").fadeIn().css("display", "block");
     $(".div-loadbutton").css("display", "none");
     } */ else {
        $(".div-reloadpage").fadeIn().css("display", "block");
        $(".div-loadbutton").attr("style", "display:none !important;");
        if (IsLoadNextPage == true) {
            $(".div-loadbutton").attr("style", "display:block !important;");
            $(".container").css("max-height", "calc(100% - 350px)");
            if (screen.width < window.innerWidth) {
                $(".div-loadbutton").css({"margin-top": "-30px !important"});
                console.log("first if screen.width>>>>>>", screen.width);
                console.log("first if window.innerWidth>>>>>>", window.innerWidth);
            } else {
                //$(".div-loadbutton").css({"margin-top":"-36px !important"});
                $(".div-loadbutton").attr("style", "margin-top:-30px !important;");
                console.log("first else screen.width>>>>>>", screen.width);
                console.log("first else window.innerWidth>>>>>>", window.innerWidth);
            }
        } else if (sessionStorage.isNextPageAllowed == "true") {
            $(".div-loadbutton").attr("style", "display:block !important;");
            $(".container").css("max-height", "calc(100% - 350px)");
            if (screen.width < window.innerWidth) {
                $(".div-loadbutton").css({"margin-top": "-30px !important"});
                console.log("if screen.width>>>>>>", screen.width);
                console.log("if window.innerWidth>>>>>>", window.innerWidth);
            } else {
                $(".div-loadbutton").css({"margin-top": "-36px !important"});
                console.log("else screen.width>>>>>>", screen.width);
                console.log("else window.innerWidth>>>>>>", window.innerWidth);
            }
        }
    }

    /* if(scren.width < window.innerWidth){
     $(".div-loadbutton").css("margin-top","-30px;");
     } else {
     $(".div-loadbutton").css("margin-top","-36px;");
     } */
}

function  hideLoadMore() {
    $(".container").css("max-height", "calc(100% - 310px)");
    $(".div-reloadpage").fadeIn().attr("style", "display:none !important;");
}

function  showLoadingButton() {
    sessionStorage.hasLoadingButtton = "true";
    $(".div-loadbutton").css("pointer-events", "none");
    $(".div-loadbutton").css("opacity", "0.7");
    $(".spinner-loadmore").fadeIn().css("visibility", "visible");
    $(".loadmore-txt").text("Loading...");
}

function  hideLoadingButton() {
    if (sessionStorage.hasLoadingButtton == "true") {
        $(".container").css("max-height", "calc(100% - 310px)");
        $(".spinner-loadmore").fadeIn().css("visibility", "hidden");
        $(".div-loadbutton").css("pointer-events", "all");
        $(".loadmore-txt").text("Load More");
        $(".div-loadbutton").css("opacity", "1");
        $(".div-loadbutton").css("display", "none");
    }
}

function validateEmail($email) {
    if ($email != "") {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    } else {
        return false;
    }
}

function scrollFunctionForAssignRep() {
    console.log("in function");
    $(".content-holder").off("scroll");
    $(".rep-block").on("scroll", function (e) {
        console.log("rep block loaded");
    });
}

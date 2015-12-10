$(document).ready(function () {
    //initialise protocall
    $('#overlay').on('click', function (event) {
        var $overlay = $("#overlay");
        if (event.target.id == $overlay[0].id) {
            overlay.closeOverlay();
        }
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // if user presses esc key
            var $overlay = $("#overlay");
            var $popUpContent = $("#pop-up-content");
            //Escape Events
            if ($overlay && $overlay.length > 0 && $overlay.is(":visible")) {
                overlay.closeOverlay();
            }
            if ($popUpContent && $popUpContent.length > 0 && $popUpContent.is(":visible")) {
                popUpContent.closePopUpContent();
            }
        }
    });

});

var overlay = {
    makeItCenter: function (className) {
        setTimeout(function () {
            var windowWidth = window.outerWidth;
            var contentWidth = $('.' + className).width();
            var left = ((windowWidth - contentWidth) / 2);
            $('.' + className).css("left", left + "px");
        }, 0);
    },
    displayOverlay: function (content) {

        sessionStorage.isOverlayOpened = "true";
        this.initOverlay();
        $("#overlay").css("overflow-y", "auto");
        var $contentSec = $('.o-content');
        $('#overlay').fadeIn(400);
        $('.o-box').addClass("o-box-load");
        $("body").css("overflow", "hidden");
        $(".container").css("overflow", "hidden");
        $contentSec.append($(content));

        overlay.centerIt();
        // $(".c-search-icon").click();
        //rep-content-blk
//        $(".content-holder").attr('style', 'overflow: hidden !important');
//        $(".rep-content-blk").attr('style', 'overflow: auto !important');

        //$(".content-holder").css("width", "99%");
        //$(".content-holder").css("width", "100%");






    },
    sliderControl: function () {
        console.log("start");
        var $obxParent = $("div.o-box");
        $obxParent.removeClass("o-box").addClass("o-box-custom");
        console.log("end");
    },
    audioInit: function () {
        var $obxParent = $("div.o-box");
        $obxParent.removeClass("o-box").addClass("o-box-custom");
    },
    documentInIt: function () {
        var $obxParent = $("div.o-box");
        $obxParent.removeClass("o-box").addClass("o-box-custom");

    },
    initOverlay: function () {
        var $parent = $('#overlay');
        var subContent = this.formatOverlay();
        $parent.append($(subContent));
    },
    formatOverlay: function () {
        var html = '<div class="o-box p-relative">'
                + '<div class="sprite-im snap close-icon o-close-pos p-absolute o-close-btn" data-type="closeOverlay"></div>'
                + '<div class="o-content p-relative">'
                + '</div>'
                + '</div>';
        return html;
    },
    centerIt: function () {
        var height = window.innerHeight;
        var contentHeight = $('#overlay > .o-content').height();
        if (height > contentHeight) {
            var marginTop = ((height - contentHeight) / 2);
            $('#overlay > .o-content').css("margin-top", marginTop + "px");
        }
    },
    closeOverlay: function () {
        console.log("close overlay");
        $('#overlay').fadeOut(400, function () {
            $('#overlay').empty();
            $('body').css("overflow", "auto");
            $('.container').css("overflow", "auto");
            $("#spinner").css("display", "none");
        });
        $(".ctrl-blk").removeClass("noprint");
        $("footer").removeClass("noprint");
        $("#downloadTextLink").removeClass("noprint");
        $("#downloadImageLink").removeClass("noprint");
        $("#printTextOverlay").removeClass("noprint");
        $("#thumbNailViewForText").removeClass("noprint");
        $("#thumbNailViewForImages").removeClass("noprint");
        $("#printImageICON").removeClass("noprint");
        $("#previousICON").removeClass("noprint");
        $("#nextICON").removeClass("noprint");
        $("#slideshow").empty();
        /* if(localStorage.getItem("currentPage") == "myreps"){
         $(".content-holder").css("opacity","0.5");
         } else {
         $(".content-holder").removeClass("spinner1").css("opacity","1");
         } */
    }
};

var popUpContent = {
    togglePopUpContent: function ($el, content) {

        var $popUpContent = $('#pop-up-content');
        if ($popUpContent && $popUpContent.length > 0 && $popUpContent.is(":visible")) {
            this.closePopUpContent();
        } else {
            this.displayPopUpContent($el, content)
            //this.focus();
        }

    },
    displayPopUpContent: function ($el, content) {
        popUpContent.initPopUpContent();
        var $contentSec = $('.pop-content-block');
        popUpContent.alignPopUpContent($el);

        $('#pop-up-content').fadeIn(400);
        $contentSec.empty();
        $contentSec.append($(content));
        $('body').attr("data-type", "closePopUp");
        $('body').addClass("snap");

        sessionStorage.subMenuSelected = false;

        if (sessionStorage.isOverlayOpened == "true") {
            $(".pop-content-block").css("background-color", "#F4F5F7");
            $(".poper-main-block:before").css("border-bottom", "12px solid #F4F5F7");
        }
    },
    initPopUpContent: function () {
        var $parent = $('#pop-up-content');
        var subContent = popUpContent.formatPopUpContent();
        $parent.empty();
        $parent.append($(subContent));

    },
    formatPopUpContent: function () {
        var html = "";


        if (sessionStorage.subMenuSelected == "true") {
            html = '<div class="poper-main-block1  p-relative">'
                    + '<div class="pop-content-block">'

                    + '</div>'
                    + '</div>';
        } else {
            if (sessionStorage.isOverlayOpened == "true") {
                html = '<div class="poper-main-block-for-overlay p-relative">'
                        + '<div class="pop-content-block">'

                        + '</div>'
                        + '</div>';
            } else {
                html = '<div class="poper-main-block p-relative">'
                        + '<div class="pop-content-block">'

                        + '</div>'
                        + '</div>';
            }

        }

        return html;
    },
    closePopUpContent: function () {
        console.log("close pop-up-content");
        var $popUpContent = $('#pop-up-content');
        if ($popUpContent && $popUpContent.length > 0 && $popUpContent.is(":visible")) {
            $('#pop-up-content').fadeOut(400, function () {
                $('#pop-up-content').empty();
            });
            $('body').attr("data-type", "");
            $('body').removeClass("snap");
        }
//        $("#id-overlaymenu").getNiceScroll().remove();

        // $(".content-holder").css("width", "99%");
        //$(".content-holder").css("width", "100%");
    },
    alignPopUpContent: function ($el) {
        var eBot = $el.offset().top;
        var eHeight = $el.outerHeight();
        var eLeft = $el.offset().left;
        var eWidth = $el.outerWidth();
        var popUpTop = "";
        if (sessionStorage.selectedTab == "CUSTOMER_VIEW") {
            popUpTop = ((eBot + eHeight + 5) - 8) + "px";
        } else if (sessionStorage.selectedTab == "AGENCY") {
            popUpTop = ((eBot + eHeight + 5) - 11) + "px";
        } else {
            popUpTop = ((eBot + eHeight + 5)) + "px";
        }
        var popUpLeft = eLeft;
        console.log($el);
        console.log(eBot);
        console.log(popUpTop);

        $('#pop-up-content').css("top", popUpTop);
        $('#pop-up-content').css("left", popUpLeft).css("width", eWidth).css("height", "initial");
    }

}

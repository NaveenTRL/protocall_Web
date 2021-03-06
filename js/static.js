var staticTemplate = {
    home: {
        staticFeedTemplate: function () {
            var html = '<div class="feed-block clr-fl">'
                    + '<div class="lf-block left">'
                    + '<div class="leftblk-spacing">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-det-pad p-relative">'
                    + '<div class="feed-pic-b inline-block v-align-mid"  style="height:160px;">'
                    + '<div id="" class="feed-user-pic-box">'
                    + '<img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic">'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-det-b inline-block v-align-mid">'
                    + '<div class="top-b p-relative">'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">incident alert</div>'
                    + '<div class="p-relative inline-block v-align-mid">'
                    + '<div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps">robert</div>'
                    + '</div>'
                    + '<div class="bot-b">'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Nov 18,2014</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im map-icon map-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im email-icon email-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-share-b inline-block v-align-mid">'
                    + '<div class="myshare">'
                    + '<div class="inner-share-spacing snap" data-type="share">'
                    + '<div class="t-center mid-align">'
                    + '<div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div>'
                    + '<span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="myview">'
                    + '<div class="inner-view-spacing snap" data-type="view">'
                    + '<div class="t-center mid-align">'
                    + '<div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div>'
                    + '<span class="feed-menu-text inline-block v-align-mid f-color-w">View</span>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="rg-block left p-relative">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-docs-pad p-relative docs-block t-center">'
                    + '<a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc">'
                    + '<div class="t-center p-relative">'
                    + '<div class="doc-icon-box" >'
                    + '<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'
                    + '</div>'
                    + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'
                    + '<div class="feed-menu-text">Text</div>'
                    + '</div>'
                    + '</a>'
                    + '<a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc">'
                    + '<div class="t-center p-relative">'
                    + '<div class="doc-icon-box" >'
                    + '<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'
                    + '</div>'
                    + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'
                    + '<div class="feed-menu-text">Photos</div>'
                    + '</div>'
                    + '</a>'
                    + '<a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc">'
                    + '<div class="t-center p-relative">'
                    + '<div class="doc-icon-box" >'
                    + '<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'
                    + '</div>'
                    + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'
                    + '<div class="feed-menu-text">Voice</div>'
                    + '</div>'
                    + '</a>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-block clr-fl">'
                    + '<div class="lf-block left">'
                    + '<div class="leftblk-spacing">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-det-pad p-relative">'
                    + '<div class="feed-pic-b inline-block v-align-mid">'
                    + '<div id="" class="feed-user-pic-box">'
                    + '<img src="http://www.wallpaper-valley.com/animal/animal_13.jpg" alt="" class="feeduserpic">'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-det-b inline-block v-align-mid">'
                    + '<div class="top-b p-relative">'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">incident alert</div>'
                    + '<div class="p-relative inline-block v-align-mid">'
                    + '<div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps">robert</div>'
                    + '</div>'
                    + '<div class="bot-b">'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Nov 18,2014</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im map-icon map-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im email-icon email-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-share-b inline-block v-align-mid">'
                    + '<div class="myshare">'
                    + '<div class="inner-share-spacing snap" data-type="share">'
                    + '<div class="t-center mid-align"  >'
                    + '<div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div>'
                    + '<span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="myview">'
                    + '<div class="inner-view-spacing snap" data-type="view">'
                    + '<div class="t-center mid-align">'
                    + '<div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div>'
                    + '<span class="feed-menu-text inline-block v-align-mid f-color-w">View</span>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="rg-block left p-relative">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-docs-pad p-relative docs-block t-center">'
                    + '<a href="/changecoverage" class="snap feed-addRemove-block inline-block v-align-mid f-sz-14 opensans-regular f-color-green changeCoverage p-relative" data-type="changeCoverage">'
                    + '<div class="t-center">'
                    + '<div class="sprite-im inline-block v-align-mid message-green-icon">&nbsp;</div>'
                    + '<span class="feed-addRemove-text inline-block v-align-mid t-caps">Add / change coverage on home</span>'
                    + '</div>'
                    + '</a>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            return html;
        },
        staticPoliciesFeedTemplate: function () {
            var html = '<div class="feed-block clr-fl">'
                    + '<div class="lf-block left">'
                    + '<div class="leftblk-spacing">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-det-pad p-relative">'
                    + '<div class="feed-pic-b inline-block v-align-mid">'
                    + '<div id="" class="feed-user-pic-box">'
                    + '<img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic">'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-det-b inline-block v-align-mid">'
                    + '<div class="top-b p-relative">'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">policy alert</div>'
                    + '<div class="p-relative inline-block v-align-mid">'
                    + '<div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps">robert</div>'
                    + '</div>'
                    + '<div class="bot-b">'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Nov 18,2014</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im map-icon map-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div>'
                    + '<div class="p-relative inline-block v-align-bot">'
                    + '<div class="sprite-im email-icon email-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-share-b inline-block v-align-mid">'
                    + '<div class="myshare">'
                    + '<div class="inner-share-spacing snap" data-type="share">'
                    + '<div class="t-center mid-align" >'
                    + '<div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div>'
                    + '<span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="myview">'
                    + '<div class="inner-view-spacing snap" data-type="view">'
                    + '<div class="t-center mid-align">'
                    + '<div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div>'
                    + '<span class="feed-menu-text inline-block v-align-mid f-color-w">View</span>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="rg-block left p-relative">'
                    + '<div class="feed-det bg-color-dblue p-relative">'
                    + '<div class="feed-docs-pad p-relative docs-block t-center">'
                    + '<a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc">'
                    + '<div class="t-center p-relative">'
                    + '<div class="doc-icon-box" >'
                    + '<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'
                    + '</div>'
                    + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'
                    + '<div class="feed-menu-text">Text</div>'
                    + '</div>'
                    + '</a>'
                    + '<a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc">'
                    + '<div class="t-center p-relative">'
                    + '<div class="doc-icon-box" >'
                    + '<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'
                    + '</div>'
                    + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'
                    + '<div class="feed-menu-text">Photos</div>'
                    + '</div>'
                    + '</a>'
                    + '<a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc">'
                    + '<div class="t-center p-relative">'
                    + '<div class="doc-icon-box" >'
                    + '<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'
                    + '</div>'
                    + '<div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span></div>'
                    + '<div class="feed-menu-text">Voice</div>'
                    + '</div>'
                    + '</a>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            return html;
        },
        staticArchiveFeedTemplate: function () {
            var html = '<div class="feed-block clr-fl"> <div class="lf-block left"> <div class="leftblk-spacing"> <div class="feed-det bg-color-dblue p-relative"> <div class="feed-det-pad p-relative"> <div class="feed-pic-b inline-block v-align-mid"> <div id="" class="feed-user-pic-box"> <input type="checkbox" id="feedcheck" name="" class="checkbox"><label for="feedcheck" class="feed-label"></label> <img src="http://www.deshow.net/d/file/animal/2009-05/animal-pictures-pet-photography-557-4.jpg" alt="" class="feeduserpic"> </div></div><div class="feed-user-det-b inline-block v-align-mid"> <div class="top-b p-relative"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps">Hugh Jackman</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper">10.55 AM</div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-13 alert-color alert-type t-caps">policy alert</div><div class="p-relative inline-block v-align-mid"> <div class="sprite-im rep-icon rep-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 rep-name t-caps">robert</div></div><div class="bot-b"> <div class="p-relative inline-block v-align-bot"> <div class="sprite-im calendar-icon calendar-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps">Nov 18,2014</div><div class="p-relative inline-block v-align-bot"> <div class="sprite-im map-icon map-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps">California</div><div class="p-relative inline-block v-align-bot"> <div class="sprite-im phone-icon phone-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps">0000 000 000</div><div class="p-relative inline-block v-align-bot"> <div class="sprite-im email-icon email-icon-pos">&nbsp;</div></div><div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin">xyz@mail.com</div></div></div><div class="feed-user-share-b inline-block v-align-mid"> <div class="myshare"> <div class="inner-share-spacing snap" data-type="share"> <div class="t-center mid-align"> <div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">Share</span> </div></div></div><div class="myview"> <div class="inner-view-spacing snap" data-type="view"> <div class="t-center mid-align"> <div class="sprite-im inline-block v-align-mid view-icon">&nbsp;</div><span class="feed-menu-text inline-block v-align-mid f-color-w">View</span> </div></div></div></div></div></div></div></div><div class="rg-block left p-relative"> <div class="feed-det bg-color-dblue p-relative"> <div class="feed-docs-pad p-relative docs-block t-center"> <a href="/text" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green textDoc p-relative" data-type="textDoc"> <div class="t-center p-relative"> <div class="doc-icon-box"> <div class="sprite-im text-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span> </div><div class="feed-menu-text">Text</div></div></a> <a href="/photos" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green photosDoc p-relative" data-type="photosDoc"> <div class="t-center p-relative"> <div class="doc-icon-box"> <div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span> </div><div class="feed-menu-text">Photos</div></div></a> <a href="/voice" class="snap feed-docs inline-block v-align-mid f-sz-14 opensans-regular f-color-green voiceDoc p-relative" data-type="voiceDoc"> <div class="t-center p-relative"> <div class="doc-icon-box"> <div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div></div><div class="doc-cnt-box"><span class="doc-count doc-count-placement">2</span> </div><div class="feed-menu-text">Voice</div></div></a> </div></div></div></div>';
            return html;
        },
        matchReleaseClaimTemplate: function (contentValue) {
            var html = '<h2 class="t-left opensans-regular f-color-green" style="display:none;">Header</h2>'
                    + '<div class="o-sub-content p-relative">'
                    + '<div class="alert-mess-text f-sz-18 t-center opensans-regular bold">' + contentValue + '</div>'
                    + '<div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="closeOverlay">Done</div>'
                    + '</div>';
            return html;
        },
        sendAppLinkTemplate: function (data) {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Send app link to the customers</h2> <div class="o-sub-content-top border-bot p-relative"> <div class="link-content p-relative"> <div class="link opensans-regular f-sz-18">Link</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input type="text" class="opensans-regular" placeholder=' + data + '  readonly/> </div> </div> <div class="link-content p-relative"> <div class="message opensans-regular f-sz-18">Message</div> <div class="message-box textBox-placeholder-italic border-all"> <textarea draggable="false" class="textarea opensans-regular" placeholder="Type message" maxlength="170"></textarea> </div> </div> </div> '
                    + ' <div class="o-sub-content p-relative" style="margin:4px;"> <div class="success2" style=" display:none; color: green;"></div><div class="error2" style=" display:none; color: red;"></div><div class="text-box-outer p-relative textBox-placeholder-italic" style="margin-top: 17px;"> <input type="search"'
                    + 'class="opensans-regular" id="id-overlaysendapplink"  placeholder="Search" onkeyup="sendAppLinkkeyup(event)"  onkeypress="sendAppLinkkeyup(event)" /> <div  id="id-sendapplinksearchicon" class="c-search-icon search-icon sprite-im  p-absolute"></div></div> <div class="range-box clr-fl"> <div class="opensans-regular'
                    + ' f-sz-14 range-color left f-italic range-title">Select Range</div> <div class="text-box-outer p-relative textBox-placeholder-italic left range-sel1">'
                    + '<div id="timepicker" class="none-1 opensans-regular left" onchange="sendAppLinkSortbyBox1()"> None </div>  '
                    + '<div class="drop-down-icon-1 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> <div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel2"> '
                    + '<div id="timepicker2" class="none-1 opensans-regular left" onchange="sendAppLinkSortbyBox2()">  None </div>  '
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> </div> <div class="rep-block">'
                    + '<div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">NAMES</div>'
                    + '<div class="name-title opensans-regular t-upper right text-color-overlay bold">CITY, STATE</div> </div>'
                    + '<div class="rep-content-blk" style=" max-height: 121px;margin-top:10px;"> <form>';
            return html;
        },
        editAgencyPicTemplate: function () {
            var html = '<div class="header-panel border-bot"> <div class="left-content-panel t-left left f-color-green f-sz-18 opensans-regular">'
                    + 'Agency Profile</div> <div class="right-content-panel t-right right f-color-red f-sz-12 opensans-regular snap" id="id-manageagency" data-type="manage_agency"> <i>Manage Agency</i></div>'
                    + '</div> <div class="o-sub-content p-relative"> <div class="carriers-left-content left "> <div class="profile-pic-content"> '
                    + '<div id="id-agency-logo" class="agency-logo p-relative"> <img src="' + sessionStorage.agencyLogo + '" alt="" id="id-agencyprofilelogo" class="agencyprofilelogo"> '
                    + '</div> </div> </div> <div class="carriers-right-content left "> <div class="c-agency-logo"> '
                    + '<input type="text" id="id-agency-logo-name" class="txt-agency-logo-name opensans-regular f-sz-14" value="Agency Logo.jpg" disabled> '
                    + '<input type="file" style="display:none;" id="inputfile1" onchange="readBrowserURL(this)" /> '
                    + '<div class="browse-button-content p-absolute f-color-w f-sz-16 opensans-regular" onclick="javascript:document.getElementById(\'inputfile1\').click();"> Browse </div>'
                    + '</div> <div class="c-agency-name" style="display:none;"> <input id="agencyNameInOverlay" type="text" class="txt-agency-name opensans-regular f-sz-14" value="' + sessionStorage.agencyName + '"> </div>'
                    + '<div id="agencyEmailOverlay" class="c-agency-emailid" style="display:none;"> <input type="text" class="txt-agency-emailid opensans-regular f-sz-14" value="' + sessionStorage.agencyEmail + '"> </div> </div>'
                    + '</div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="agencyPicEdit">Save</div>';
            return html;
        },
        passwordResetAlertTemplate: function () {
            var html = '<h2 class="t-left opensans-regular f-color-green" style="display:none;">Header</h2> <div class="o-sub-content p-relative"> <div class="alert-mess-text f-sz-18 t-center opensans-regular bold">Do you wish to Reset your Password ?</div> <div class="o-btn-yes snap opensans-regular left p-relative t-center bg-color-green f-color-w" data-type="dtoverlayrestpassyes">Yes</div> <div class="o-btn-no snap opensans-regular left p-relative t-center bg-color-green f-color-w" data-type="dtoverlayrestpassno">No</div> </div> ';
            return html;
        },
        passwordResetEmailAlertTemplate: function () {
            //var html = ' <h2 class="t-left opensans-regular f-color-green" style="display:none;">Header</h2> <div class="o-sub-content p-relative"> <div class="alert-mess-text f-sz-18 t-center opensans-regular bold">Your request has been send to the admin.You will <br> receive reset password mail shortly.</div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Done</div> </div> ';
            var html = ' <h2 class="t-left opensans-regular f-color-green" style="display:none;">Header</h2> <div class="o-sub-content p-relative"> <div class="alert-mess-text f-sz-18 t-center opensans-regular bold">Your password has been changed successfully,Please login ...!</div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn">Done</div> </div> ';
            return html;
        },
        pushMessageTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Push Message</h2> <div class="o-sub-content p-relative" style="margin: 4px;"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="c-textarea text-box-outer textBox-placeholder-italic"> <textarea draggable="false" id="idpushmessage-textarea" class="textarea opensans-regular" placeholder="Type message" maxlength="170"></textarea> </div> <div class="delivery-box clr-fl"> <div class="delivery-time left opensans-regular">Delivery Time</div> <div class="deliverytime-content left opensans-regular clr-fl"> <div class="now left"> <input id="radio-button-now" class="radioButtonClass" type="radio" value="now" checked="true" onclick="checkboxStatus(\'radio-button-now\')"> <div class="txt-now opensans-regular f-sz-15" onclick="checkboxStatus(\'radio-button-now\')">Now</div> </div> <div class="later left"> <input id="radio-button-later" type="radio" value="later" onclick="checkboxStatus(\'radio-button-later\')"> <div class="txt-later opensans-regular f-sz-15" onclick="checkboxStatus(\'radio-button-later\')">Later</div> </div> </div> </div> </div> <div class="later-box clr-fl" style="display: none"> <div class="select-date-content left opensans-regular"> <div class="select-date left opensans-regular">Select Date</div> <div class="text-box-outer textBox-placeholder-italic left push-select-dropdown border-all p-relative"> '
                    + '<input id="datepicker" type="date" size="9" class="c-datepicker opensans-regular left" placeholder="22-11-2014" editable="false"/> <div class="sprite-im datepicker-icon p-absolute"></div> </div> </div> <div class="time-content left opensans-regular clr-fl"> <div class="time left opensans-regular">Time</div> <div class="text-box-outer textBox-placeholder-italic left time-dropdown-1 border-all p-relative" data-type="dt-time-dropdown" style="  margin-right: 3.7px;"> '
                    + '<select id="pushmessagetimepicker" class="none-1 opensans-regular left"> </select> <div class="sprite-im drop-down-icon push-drop-down-icon-1 p-absolute"></div> </div> <div class="text-box-outer textBox-placeholder-italic left time-dropdown-2 border-all p-relative" data-type="dt-am-pm-dropdown"> <select id="ampmtimepicker" class="none-1 opensans-regular left"> <option selected> AM </option> <option>PM</option> </select> <div class="sprite-im drop-down-icon push-drop-down-icon-2 p-absolute"></div> </div> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn-pushmessage">Send</div> </div>';
            return html;
        },
        privacyTemplate: function () {
            var html = '  <h2 class="t-center f-color-green opensans-regular" style="">Privacy</h2> <div class="o-sub-content p-relative" style="min-height:100px !important;"> <h3 class="enable-text t-center f-sz-18 opensans-regular "><b>Enable / disable privacy option for your company.</b></h3><div> <h3 class="enable-text-1 t-left f-sz-14 opensans-regular " style="width: 26%;  float: left;  margin-left: 23px;"> <input   id="radio-button-public" class="left radioButtonClass" type="radio" value="now" checked="true" onclick="checkboxStatus(\'radio-button-public\')" style="display:none;">Make all profile <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on" style="display:none;"> '
                    + '<div id="id-switchtop1-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick=""> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick=""> OFF</span> <input type="checkbox" checked=""></div></div> </h3> '
                    + '<div style="  float: left;  margin-right: 60px;"><input id="radio-button-public" class="c-radio-button-public radioButtonClass left" type="radio" value="now" checked="true" onclick="checkboxStatus(\'radio-button-public\')">Public</div><div style="  float: left;  margin-right: 60px;"><input id="radio-button-private" class="left" type="radio" value="now" onclick="checkboxStatus(\'radio-button-private\')">Private</div><div style="   margin-right: 60px; float: left;"><input id="radio-button-custom" class="left" type="radio" value="now" onclick="checkboxStatus(\'radio-button-custom\')">Custom</div></div><h3 style="display:none;" class="enable-text-1 t-left f-sz-14 opensans-regular "> <input id="radio-button-private" class="left" type="radio" value="now" onclick="checkboxStatus(\'radio-button-private\')"> Make all profile private <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on"> <div id="id-switchtop2-container" class="bootstrap-switch-container" style="margin-left: 50px;"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick=""> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick=""> OFF</span> <input type="checkbox" checked=""></div></div> </h3> <h3 style="display:none;"  class="enable-text-1 t-left f-sz-14 opensans-regular "> <input id="radio-button-custom" class="left" type="radio" value="now" onclick="checkboxStatus(\'radio-button-custom\')">Custom <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-on" style="display:none;"> <div id="id-switchtop3-container" class="bootstrap-switch-container"> <span id="id-switch-on" class="bootstrap-switch-handle-on bootstrap-switch-primary" onclick="moveani(-1,\'id-switch-on\', \'id-switchtop3-container\')"> ON</span> <span class="bootstrap-switch-label">&nbsp;</span> <span id="id-switch-off" class="bootstrap-switch-handle-off bootstrap-switch-default" onclick="moveani(-1,\'id-switch-off\', \'id-switchtop3-container\')"> OFF</span> <input type="checkbox" checked=""></div></div> </h3> <div id="privay-box" style="display:none;  margin: 11px;"><div class="text-box-outer textBox-placeholder-italic border-all" style="  clear: both;"> '
                    + ' <input id="id-overlayprivacy" type="search" class="opensans-regular" placeholder="Search" onkeyup="privacykeyup(event)"  onkeypress="privacykeyup(event)" /> <div id="id-privacysearchicon" class="c-privacysearch-icon search-icon sprite-im p-absolute"></div></div> <div class="success1" style=" display:none; color: green;"></div><div class="error1" style=" display:none; color: red;"></div> <div class="rep-block"> <div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold" style="width:30%;">Member Names</div> <div class="nameRepId opensans-regular t-upper left text-color-overlay bold">Rep ID</div> <div class="name-title opensans-regular t-upper right text-color-overlay bold">Private / Public</div> </div> <div class="rep-content-blk" style="  margin-top: -10px;"> <form> '

                    ;
            return html;
        }, showPhotsOverlayTemplate: function (alertID) {
            clearInterval(homePageUpdate);
            RESPONSE.LOCATION = "";
            var incidentDateForPrint = "", incidentTimeForPrint = "";
            RESPONSE.MEDIAIDFORPICTURE = [], RESPONSE.IMAGEURLS = [], RESPONSE.PICTUREDETAILS = [], RESPONSE.IMGETEXT = [],
                    RESPONSE.ROOTELEMENT = [], RESPONSE.DATEOFINCIDENTALERT = [], RESPONSE.TIMEOFINCIDENTALERT = [], RESPONSE.LOCATIONOFINCIDENTALERT = [],
                    RESPONSE.CUSTOMERNAMEOFINCIDENTALERT = [], RESPONSE.CUSTOMEREMAILOFINCIDENTALERT = [], RESPONSE.CUSTOMERPHONEOFINCIDENTALERT = [];

            var rootElement = "";
            var numberOfPictures = 0, pictureThumbNailViewHTML = "", imageTextSavePrintHTML = "", originalImageHTML = "", sliderBar = "";
            var prefixValue = "";
            console.log("HOMEPAGERESPONSE.RECURRINGALERTDFEEDS showPhotsOverlayTemplate", HOMEPAGERESPONSE.RECURRINGALERTDFEEDS);
            if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
                photoFeedValues = HOMEPAGERESPONSE.RELATEDFEEDS;
            } else {
                photoFeedValues = HOMEPAGERESPONSE.RECURRINGALERTDFEEDS;
            }
            $.each(photoFeedValues, function (index, alertDetailsValue) {
                var alerIDValue = alertDetailsValue.alertDetails.alertId;
                if (alertID == alertDetailsValue.alertDetails.alertId) {

                    rootElement = alertDetailsValue;
                    RESPONSE.ROOTELEMENT = rootElement;
//                    if (alertDetailsValue.alertStatusDetails.policyId != undefined) {
//                        prefixValue = alertDetailsValue.alertStatusDetails.policyId;
//                    }
                    prefixValue = alertDetailsValue.alertStatusDetails.alertStatusId;
                    console.log("condition satisfied alertDetailsValue", alertDetailsValue);
                    numberOfPictures = alertDetailsValue.NoofPictureRecord;
                    RESPONSE.PICTUREDETAILS = alertDetailsValue.PictureDetails;
                    if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
                        RESPONSE.LOCATION = HOMEPAGERESPONSE.COMMONUSERDETAILS.residentialCity;
                    } else {
                        RESPONSE.LOCATION = alertDetailsValue.userDetails.residentialCity;
                    }
                    console.log("noOfPictureRecords", numberOfPictures);
                }
            });
            var tempCustomerName = "";
            var incidentDate = "", residentatlCity = "", residentatlState = "";
            $.each(HOMEPAGERESPONSE.RECURRINGALERTDFEEDS, function (index, feedValue) {
                if (feedValue.alertDetails.type == "incidentalert") {

                    if (prefixValue != "") {
                        //  prefixValue = element.alertStatusDetails.policyId;
                    } else {
                        if (feedValue.userDetails.residentialCity !== undefined) {
                            residentatlCity = (feedValue.userDetails.residentialCity);
                        }
                        if (feedValue.userDetails.residentialState !== undefined) {
                            residentatlState = (feedValue.userDetails.residentialState);
                        }
                        prefixValue = residentatlCity + "_" + residentatlState;
                    }



                    tempCustomerName = feedValue.userDetails.firstName;
                    try {
                        if (feedValue.userDetails.lastName != undefined) {
                            tempCustomerName = tempCustomerName + "_" + feedValue.userDetails.lastName;
                        }
                    } catch (e) {

                    }
                    if (alertID == feedValue.alertDetails.alertId) {
                        if (feedValue.IncidentDetails.timeStamp != undefined) {
                            var value = feedValue.IncidentDetails.timeStamp;
                            var audioTime1 = moment(Number(value)).tz('America/New_York').format('MM-DD-YYYY');
                            incidentDateForPrint = audioTime1;
                            incidentTimeForPrint = moment(Number(value)).tz('America/New_York').format('h:mmA');
                        }
                        customerCity = feedValue.userDetails.residentialCity;
                        indcidentCityForPrint = feedValue.IncidentDetails.incidentCity;
                        incidentStateForPrint = feedValue.IncidentDetails.incidentState;
                        customerName = feedValue.userDetails.firstName;
                        customerState = feedValue.userDetails.residentialState;
                        customerEmailId = feedValue.userDetails.emailId.email;
                        try {
                            customerPhoneNumber = feedValue.userDetails.phone.number;
                        } catch (e) {
                            customerPhoneNumber = "";
                        }
                    }
                }
            })
            RESPONSE.STATENAME = [];
            //console.log("RESPONSE.PICTUREDETAILS Length", RESPONSE.PICTUREDETAILS.length);
            console.log("numberOfPictures", numberOfPictures);
            $.each(RESPONSE.PICTUREDETAILS, function (i, element) {

                console.log("media id", element.mediaId);
                RESPONSE.MEDIAIDFORPICTURE.push(element.mediaId);
                RESPONSE.IMAGEURLS.push(element.file);
                RESPONSE.IMGETEXT.push(element.fileName);
            });
            for (var i = 0, j = 0; i <= numberOfPictures - 1; i++, j++) {
                console.log("in for loop");
                var pictureValue = HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.IMAGEURLS[i];
                pictureThumbNailViewHTML = pictureThumbNailViewHTML
                        + '<div style="margin-bottom: 10px;cursor:pointer;max-height: 115px;" class="overalyPhots" data-type="thumbNail" name=' + RESPONSE.MEDIAIDFORPICTURE[i] + '><img src=' + pictureValue + ' style="max-width:100%;height: 79px;  width: 200px;" /></div>';
            }

            if (rootElement.IncidentDetails.timeStamp !== undefined) {
                var audioTimeStamp1 = rootElement.IncidentDetails.timeStamp;
                var audioTime1 = moment(Number(audioTimeStamp1)).tz('America/New_York').format('MM/DD/YYYY');
                RESPONSE.DATEOFINCIDENTALERT.push(audioTime1);
            }
            if (rootElement.IncidentDetails.timeStamp !== undefined) {
                var audioTimeStamp1 = rootElement.IncidentDetails.timeStamp;
                var audioTime1 = moment(Number(audioTimeStamp1)).tz('America/New_York').format('h:mm:ss');
                RESPONSE.TIMEOFINCIDENTALERT.push(audioTime1);
            }
            if (rootElement.IncidentDetails.incidentState !== undefined) {
                var incidentLocation = rootElement.IncidentDetails.incidentCity + "," + rootElement.IncidentDetails.incidentState;
                incidentLocation = incidentLocation.replace("undefined,", "");
                RESPONSE.LOCATIONOFINCIDENTALERT.push(incidentLocation);
            } else if (rootElement.IncidentDetails.incidentCity != undefined) {
                var incidentLocation = rootElement.IncidentDetails.incidentCity;
                RESPONSE.LOCATIONOFINCIDENTALERT.push(incidentLocation);
            } else {
                RESPONSE.LOCATIONOFINCIDENTALERT.push("");
            }

            try {
                if (rootElement.userDetails.firstName !== undefined) {
                    var firstname = rootElement.userDetails.firstName;
                    if (rootElement.userDetails.lastName !== undefined) {
                        firstname = firstname + " " + rootElement.userDetails.lastName;
                    }
                    RESPONSE.CUSTOMERNAMEOFINCIDENTALERT.push(firstname);
                } else {
                    RESPONSE.CUSTOMERNAMEOFINCIDENTALERT.push("");
                }
            } catch (e) {
                try {
                    if (rootElement.userDetails.name !== undefined) {
                        var firstname = rootElement.userDetails.name;
                        RESPONSE.CUSTOMERNAMEOFINCIDENTALERT.push(firstname);
                    } else {
                        RESPONSE.CUSTOMERNAMEOFINCIDENTALERT.push("");
                    }
                } catch (e1) {
                    RESPONSE.CUSTOMERNAMEOFINCIDENTALERT.push("");
                }
            }
            try {
                if (rootElement.userDetails.emailId.email !== undefined) {
                    RESPONSE.CUSTOMEREMAILOFINCIDENTALERT.push(rootElement.userDetails.emailId.email);
                } else {
                    RESPONSE.CUSTOMEREMAILOFINCIDENTALERT.push("");
                }
            } catch (e) {
                RESPONSE.CUSTOMEREMAILOFINCIDENTALERT.push("");
            }

            try {
                if (rootElement.userDetails.phone.number !== undefined) {
                    RESPONSE.CUSTOMERPHONEOFINCIDENTALERT.push(rootElement.userDetails.phone.number);
                } else {
                    RESPONSE.CUSTOMERPHONEOFINCIDENTALERT.push("");
                }
            } catch (e) {
                RESPONSE.CUSTOMERPHONEOFINCIDENTALERT.push("");
            }




            sessionStorage.MEDIAFILENAME = "";
            sessionStorage.MEDIAFILENAME = prefixValue;
            var downloadFileName = "http://2-dot-proto-call-test.appspot.com/downloadforpicture?key=" + RESPONSE.IMAGEURLS[0] + "&fileName=" + prefixValue + "&downloadType=.jpg&count=1";
            var html = '<div class="o-sub-content p-relative">'
                    + '<div style="display:none;width:200px;" class="printHeaderForText">'
                    + '<p>' + incidentDateForPrint + '</p>'
                    + '<p>' + incidentTimeForPrint + '</p>'
                    + '<p>' + indcidentCityForPrint + ',' + incidentStateForPrint + '</p>'
                    + '<p>' + customerName + '</p>'
                    + '<p>' + customerEmailId + '</p>'
                    + '<p>' + customerPhoneNumber + '</p>'
                    + '</div>'
                    + '<div style="position:relative;width:100%;">'
                    + '<div style="min-width: 17%;width: 24%;overflow: auto;position: absolute;left: -32px;height: 476px;">'
                    + '<div style="width:67.1%;margin:auto;max-height: 431px;" id="thumbNailViewForImages">'
                    + pictureThumbNailViewHTML
                    + '</div>'
                    + '</div>'
                    + '<div style="width:80%;background:white;position: absolute;left: 131px;min-height:544px;">'
                    + '<div style="height:70px;color:#585858;position: absolute;;width: 100%;background:white;">'
                    + '<div style="width:32%;float:left;margin-top:25px;margin-left:25px;color:#939393" class="opensans-regular">'
                    + '<span id="imageinformation" style="color:rgb(47,156,161);">' + RESPONSE.IMGETEXT[0] + '</span><span style="margin-left:5px;display:none;">' + RESPONSE.LOCATION + '</span>'
                    + '</div>'
                    + '<a id="downloadImageLink" class="sprite-im download-icon" style="float:left;margin-left:20px;margin-top:15px;" '
                    + 'href=' + downloadFileName + ' download>&nbsp;</a>'
                    + '<a id="printImageICON" class="sprite-im printImage-icon" style="float:left;margin-left:23px;margin-top:15px;" href="#" data-type="printPage">&nbsp;</a>'
                    + '</div>'
                    + '<div style="width:100%;position: absolute;top: 69px;background:white;border-top:2px solid #939393">'
                    + '<div style="width:80%;position: absolute;  margin: auto;  top: 35px;  left: 17px;">'
                    + '<div style="margin: auto;position: absolute;top: -3px;left: 113px;">'

                    + '<div style="max-height: 220px;  width: 350px;  margin-left: -91px;  margin-right: auto;  margin-bottom: 15%;">'
                    + '<p id="photoOverlayIncidentDate">'
                    + '<span class="firstSpan" style="font-size: 14px;width:58%;">Date Of Incident Alert </span>'
                    + '<span class="secondSpan" style="font-size: 14px;">' + RESPONSE.DATEOFINCIDENTALERT[0] + '</span>'
                    + '</p>'

                    + '<p id="photosOverlayIncidentTime">'
                    + '<span class="firstSpan" style="font-size: 14px;width:58%;">Time Of Incident Alert </span>'
                    + '<span class="secondSpan" style="font-size: 14px;">' + RESPONSE.TIMEOFINCIDENTALERT[0] + '</span>'
                    + '</p>'

                    + '<p id="photosOverlayIncidentLocation">'
                    + '<span class="firstSpan" style="font-size: 14px;width:58%;">Location Of Incident Alert </span>'
                    + '<span class="secondSpan" style="font-size: 14px;">' + RESPONSE.LOCATIONOFINCIDENTALERT[0] + '</span>'
                    + '</p>'

                    + '<p id="photosOverlayCustomerName">'
                    + '<span class="firstSpan" style="font-size: 14px;width:58%;">Customer\'s Name </span>'
                    + '<span class="secondSpan" style="font-size: 14px;">' + RESPONSE.CUSTOMERNAMEOFINCIDENTALERT[0] + '</span>'
                    + '</p>'

                    + '<p id="photosOverlayCustomerEmail">'
                    + '<span class="firstSpan" style="font-size: 14px;width:58%;">Customer\'s Email Address </span>'
                    + '<span class="secondSpan" style="font-size: 14px;">' + RESPONSE.CUSTOMEREMAILOFINCIDENTALERT[0] + '</span>'
                    + '</p>'

                    + '<p id="photosOverlayCustomerPhone">'
                    + '<span class="firstSpan" style="font-size: 14px;width:58%;">Customer\'s Phone </span>'
                    + '<span class="secondSpan" style="font-size: 14px;">' + RESPONSE.CUSTOMERPHONEOFINCIDENTALERT[0] + '</span>'
                    + '</p>'

                    + '</div>'


                    + '<div style="max-height: 220px;  max-width: 300px;  margin-left: auto;  margin-right: auto;" id="viewImage">'
                    + '<img src=' + HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.IMAGEURLS[0] + ' style="max-height: 220px;max-width: 300px;"/>'
                    + '</div>'
                    + '<div style="position: absolute;top: 77px;">'
                    + '<div style="position: absolute;left: -78px;display:none;" id="previousICON">'
                    + '<a href="javascript:void(0)" class="overalyPhots previous" data-type="previous"><img src="images/backwardArrow.png" /></a>'
                    + '</div>'
                    + '<div style="position: absolute;right: -353px;top:10px;" id="nextICON">'
                    + '<a href="javascript:void(0)" class="overalyPhots next" data-type="next"><img src="images/frontArrow.png" /></a>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            return html;
        },
        showAudioOverlayTemplate: function (alertID) {
            clearInterval(homePageUpdate);
            console.log("in audio");
            RESPONSE.STATENAME = "";
            var prefixValue = "", alertstatusvalue = "";
            RESPONSE.FILENAME = [], RESPONSE.DOWNLOADFILENAME = [], RESPONSE.AUDIODETAILS = [], RESPONSE.MEDIAID = [], RESPONSE.AUDIOTEXT = [], RESPONSE.TIMESTAMPAUDIO = [], RESPONSE.AUDIOURLS = [];
            var numberOfAudio = 0, voiceThumbNailViewHTML = "", resultThumbNail = "", originalAudioFileHTML = "", resultOriginaAudioFile = "", sliderBar = "", voiceFeedValues = {};
            if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
                voiceFeedValues = HOMEPAGERESPONSE.RELATEDFEEDS;
            } else {
                voiceFeedValues = HOMEPAGERESPONSE.RECURRINGALERTDFEEDS;
            }
            $.each(voiceFeedValues, function (index, alertDetailsValue) {
                var alerIDValue = alertDetailsValue.alertDetails.alertId;
                if (alertID == alertDetailsValue.alertDetails.alertId) {
//                    if (alertDetailsValue.alertStatusDetails.policyId != undefined) {
//                        prefixValue = alertDetailsValue.alertStatusDetails.policyId;
//                    }
                    prefixValue = alertDetailsValue.alertStatusDetails.alertStatusId;
//                    alertstatusvalue = alertDetailsValue.alertStatusDetails.alertStatusId;
                    RESPONSE.FILENAME = alertDetailsValue.userDetails;
                    console.log("condition satisfied alertDetailsValue", alertDetailsValue);
                    numberOfAudio = alertDetailsValue.NoofAudioRecord;
                    RESPONSE.AUDIODETAILS = alertDetailsValue.AudioDetails;
                    if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
                        RESPONSE.STATENAME = HOMEPAGERESPONSE.COMMONUSERDETAILS.residentialCity;
                    } else {
                        RESPONSE.STATENAME = alertDetailsValue.userDetails.residentialCity;
                    }
                }
            });
            console.log("audioDetailsArray", RESPONSE.AUDIODETAILS.length);
            RESPONSE.AUDIODETAILTIME = [];
            $.each(RESPONSE.AUDIODETAILS, function (i, element) {
                audioTimeStamp = element.lastModified;
                audioTime = moment(Number(audioTimeStamp)).tz('America/New_York').tz('America/New_York').format('h:mmA');
                var timeValue = element.lastModified;
                console.log("media id", element.mediaId);

                RESPONSE.MEDIAID.push(element.mediaId);
                RESPONSE.AUDIOTEXT.push(element.fileName);
                RESPONSE.TIMESTAMPAUDIO.push(audioTime);
                RESPONSE.AUDIOURLS.push(element.file);
                RESPONSE.AUDIODETAILTIME.push(JSON.parse(JSON.stringify(moment(Number(timeValue)).tz('America/New_York').format("Do MMM YY, h:mm A")).replace("th", " ")));
            });
            console.log("RESPONSE.MEDIAID", RESPONSE.MEDIAID);

//            var element = RESPONSE.FILENAME;
//            var firstName = "", lastName = "", residentialCity = "", residentialState = "", timeValue = "", residentatlCity = "", residentatlState = "";
//
//            if (prefixValue != "") {
//                //  prefixValue = element.alertStatusDetails.policyId;
//            } else {
//                if (element.residentialCity !== undefined) {
//                    residentatlCity = (element.residentialCity);
//                }
//                if (element.residentialState !== undefined) {
//                    residentatlState = (element.residentialState);
//                }
//                prefixValue = residentatlCity + "_" + residentatlState;
//            }
//
//
//            if (element.lastModified !== undefined) {
//                var audioTimeStamp1 = element.lastModified;
//                var audioTime1 = moment(Number(audioTimeStamp1)).format('MM-DD-YYYY');
//                timeValue = audioTime1;
//            }
//
//
//            if (element.firstName !== undefined) {
//                firstName = (element.firstName);
//            }
//
//            if (element.lastName !== undefined) {
//                lastName = (element.lastName);
//            }
//
//            firstName = prefixValue + "_" + firstName + "_" + lastName;

//            if (element.residentialCity !== undefined) {
//                residentialCity = (element.residentialCity);
//            }
//
//            if (element.residentialState !== undefined) {
//                residentialState = (element.residentialState);
//            }
//
//            residentialCity = residentialCity + "-" + residentialState;



            RESPONSE.DOWNLOADFILENAME.push(prefixValue + "&downloadType=");
            //---------------------

            for (var i = 0, j = 0; i <= numberOfAudio - 1; i++, j++) {
                var audioValue = HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.AUDIOURLS[i];

                var audioValueToBeDownloaded = "http://2-dot-proto-call-test.appspot.com/downloadforpicture?key=" + RESPONSE.AUDIOURLS[0] + "&fileName=" + RESPONSE.DOWNLOADFILENAME[0] + ".m4a&count=1";
                voiceThumbNailViewHTML = voiceThumbNailViewHTML
                        + '<div style="text-align:center;color:#939393;margin-bottom:10px;background:white;cursor:pointer;  height: 82px;" class="opensans-regular audioOverlay" data-type="thumbNail" name=' + RESPONSE.MEDIAIDFORPICTURE[i] + '>'
                        + '<img src="images/voiceRecording.png" style="max-width:30px;  margin-top: 3px;margin-bottom: 5px;"/>'
                        + '<p id="mediaID" name=' + audioValue + '>' + RESPONSE.MEDIAID[i] + '</p>'
                        + '<p style="">' + RESPONSE.TIMESTAMPAUDIO[i] + '</p>'
                        + '</div>';
            }
            console.log("voiceThumbNailViewHTML", voiceThumbNailViewHTML);
            var html = '<div class="o-sub-content p-relative">'
                    + '<div style="position:relative;width:100%;">'
                    + '<div style="min-width: 17%;width: 24%;overflow: auto;position: absolute;left: -32px;height: 476px;">'
                    + '<div style="width:67.1%;margin:auto;max-height: 431px;" id="thumbNailViewForVoice">'
                    + voiceThumbNailViewHTML
                    + '</div>'
                    + '</div>'
                    + '<div style="width:80%;background:white;position: absolute;left: 131px;min-height:544px;">'
                    + '<div style="height:70px;color:#585858;position: absolute;;width: 100%;background:white;>'
                    + '<div style="height:70px;height:70px;color:#585858;position: absolute;;width: 100%;background:white;">'
                    + '<div style="width:38%;float:left;margin-top:25px;margin-left:25px;color:#939393" class="opensans-regular">'
                    + '<span id="voiceinformation" style="color:rgb(47,156,161);">' + RESPONSE.AUDIOTEXT[0] + '</span><span id="locationInformation" style="color:rgb(47,156,161);font-style:italic;font-size:12px;">,&nbsp' + RESPONSE.STATENAME + '</span>'
                    + '</div>'
                    + '<a id="downloadAudioLink" style="float:left;margin-left:20px;margin-top:15px;" href=' + audioValueToBeDownloaded + ' class="sprite-im download-icon" download>&nbsp;</a>'
                    + '<div style="width:50%;float:left;margin-top:-15px;margin-left:25px;color:#939393" class="audiodetailestime">' + RESPONSE.AUDIODETAILTIME[0] + '</div>'
                    + '</div>'
                    + '<div id="samplediv" style="overflow:auto;overflow-x:hidden;width:100%;position: absolute;top: 69px;background:white;border-top:1px solid #b9b8b8;min-height:406px;">'
                    + '<div style="width:80%;position: absolute;  margin: auto;  top: 160px;  left: 120px;" id="viewVoice">'
                    + '<audio id="music" preload="none" controls style="">'
                    + '<source id="id-media_source" src=' + HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.AUDIOURLS[0] + '>'
                    + '<source id="id-media_source" src=' + HOMEPAGERESPONSE.PROFILEAPI + RESPONSE.AUDIOURLS[0] + '>'
                    + '</audio>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';


            return html;
        },
        showDocumentOverlayTemplate: function (alertID) {
            clearInterval(homePageUpdate);
            RESPONSE.ROOTELEMENT = [], RESPONSE.FILENAME = [], RESPONSE.NAMES = [], RESPONSE.OTHERPARTYNAMES = [], RESPONSE.ROLE = [], RESPONSE.PHONE = [], RESPONSE.ADDRESS = [], RESPONSE.INSURANCECO = [], RESPONSE.POLICY = [], RESPONSE.VEHICLENO = [], RESPONSE.VEHICLEMODEL = [], RESPONSE.DRIVINGLICENCESTATE = [], RESPONSE.DRIVINGLICENCENUMBER = [], RESPONSE.INJURIES = [], RESPONSE.OTHERINFORMATION = [], RESPONSE.OTHERPARTYIDS = [],
                    RESPONSE.DOWNLOADFILENAME = [], RESPONSE.DATEOFINCIDENTALERT = [], RESPONSE.TIMEOFINCIDENTALERT = [], RESPONSE.LOCATIONOFINCIDENTALERT = [],
                    RESPONSE.CUSTOMERNAMEOFINCIDENTALERT = [], RESPONSE.CUSTOMEREMAILOFINCIDENTALERT = [], RESPONSE.CUSTOMERPHONEOFINCIDENTALERT = [];
            ;
            var resultThumbNail = "", noofDocuments = 0, sliderBar = "", resultDocumentFile = "", documentThumbNailViewHTML = "", originalImageHTML = "", imageTextSavePrintHTML = "", docFeedValues = {}, incidentCityForPrint = "", incidentDateForPrint = "", incidentTimeForPrint = "", incidentStateForPrint = "", incidentCityForPrint = "";
            if (HOMEPAGERESPONSE.RELATEDFEEDSLOADED) {
                docFeedValues = HOMEPAGERESPONSE.RELATEDFEEDS;
            } else {
                docFeedValues = HOMEPAGERESPONSE.RECURRINGALERTDFEEDS;
            }

            var count = 0;
            var prefixValue = "";

            var rootElement = "";

            $.each(docFeedValues, function (i, element) {
                //RESPONSE.FILENAME = element;

                var alerIDValue = element.alertDetails.alertId;
                if (alertID == element.alertDetails.alertId) {
//                    if (element.alertStatusDetails.policyId != undefined) {
//                        prefixValue = element.alertStatusDetails.policyId;
//                    }

                    rootElement = element;
                    RESPONSE.ROOTELEMENT = rootElement;
                    prefixValue = element.alertStatusDetails.alertStatusId;
                    console.log("in static method", element);
                    console.log("Audio Details", element.OtherPartyDetails);
                    noofDocuments = element.NoofOtherPartyRecord;
                    console.log("noofDocuments", noofDocuments);
                    //RESPONSE.FILENAME = element.alertDetails;
                    RESPONSE.OTHERPARTYDETAILS = element.OtherPartyDetails;
                }
            });
            $.each(HOMEPAGERESPONSE.RECURRINGALERTDFEEDS, function (index, feedValue) {
                if (feedValue.alertDetails.type == "incidentalert") {
//                    if (count == 0) {
//                        RESPONSE.FILENAME = feedValue;
//                    }
                    customerCity = feedValue.userDetails.residentialCity;
                    customerState = feedValue.userDetails.residentialState;
                    customerEmailId = feedValue.userDetails.emailId.email;
                    try {
                        customerPhoneNumber = feedValue.userDetails.phone.number;
                    } catch (e) {
                        customerPhoneNumber = "";
                    }
                    if (alertID == feedValue.alertDetails.alertId) {
                        if (feedValue.IncidentDetails.timeStamp != undefined) {
                            var value = feedValue.IncidentDetails.timeStamp;
                            var audioTime1 = moment(Number(value)).tz('America/New_York').format('MM-DD-YYYY');
                            incidentDateForPrint = audioTime1;
                            incidentTimeForPrint = moment(Number(value)).tz('America/New_York').format('h:mmA');
                        }
                        customerName = feedValue.userDetails.firstName;
                        indcidentCityForPrint = feedValue.IncidentDetails.incidentCity;
                        incidentStateForPrint = feedValue.IncidentDetails.incidentState;
                    }
                }
            });


            console.log("RESPONSE.OTHERPARTYDETAILS", RESPONSE.OTHERPARTYDETAILS.length);
            $.each(RESPONSE.OTHERPARTYDETAILS, function (i, element) {
                count++;
                console.log("media id", element.fileName);
                console.log("role", element.role);
                console.log("carrier", element.carrier);
                console.log("policyNumber", element.policyNumber);
                console.log("vehicleIdentificationNumber", element.vehicleIdentificationNumber);
                console.log("model", element.model);
                console.log("driverLicenseState", element.driverLicenseState);
                console.log("driverLicenseNumber", element.driverLicenseNumber);
                console.log("injuries", element.injuries);
                console.log("otherInformation", element.otherInformation);


                if (rootElement.IncidentDetails.timeStamp !== undefined) {
                    var audioTimeStamp1 = rootElement.IncidentDetails.timeStamp;
                    var audioTime1 = moment(Number(audioTimeStamp1)).tz('America/New_York').format('MM/DD/YYYY');
                    RESPONSE.DATEOFINCIDENTALERT.push(audioTime1);
                } else {
                    RESPONSE.DATEOFINCIDENTALERT.push("");
                }
                if (rootElement.IncidentDetails.timeStamp !== undefined) {
                    var audioTimeStamp1 = rootElement.IncidentDetails.timeStamp;
                    var audioTime1 = moment(Number(audioTimeStamp1)).tz('America/New_York').format('h:mm:ss');
                    RESPONSE.TIMEOFINCIDENTALERT.push(audioTime1);
                } else {
                    RESPONSE.TIMEOFINCIDENTALERT.push("");
                }
                if (rootElement.IncidentDetails.incidentState !== undefined) {
                    var incidentLocation = rootElement.IncidentDetails.incidentCity + "," + rootElement.IncidentDetails.incidentState;
                    incidentLocation = incidentLocation.replace("undefined,", "");
                    RESPONSE.LOCATIONOFINCIDENTALERT.push(incidentLocation);
                } else if (rootElement.IncidentDetails.incidentCity != undefined) {
                    var incidentLocation = rootElement.IncidentDetails.incidentCity;
                    RESPONSE.LOCATIONOFINCIDENTALERT.push(incidentLocation);
                } else {
                    RESPONSE.LOCATIONOFINCIDENTALERT.push("");
                }

                try {
                    if (rootElement.userDetails.firstName !== undefined) {
                        var firstname = rootElement.userDetails.firstName;
                        if (rootElement.userDetails.lastName !== undefined) {
                            firstname = firstname + " " + rootElement.userDetails.lastName;
                        }
                        RESPONSE.CUSTOMERNAMEOFINCIDENTALERT.push(firstname);
                    } else {
                        RESPONSE.CUSTOMERNAMEOFINCIDENTALERT.push("");
                    }
                } catch (e) {
                    try {
                        if (rootElement.userDetails.name !== undefined) {
                            var firstname = rootElement.userDetails.name;
                            RESPONSE.CUSTOMERNAMEOFINCIDENTALERT.push(firstname);
                        } else {
                            RESPONSE.CUSTOMERNAMEOFINCIDENTALERT.push("");
                        }
                    } catch (e1) {
                        RESPONSE.CUSTOMERNAMEOFINCIDENTALERT.push("");
                    }
                }
                try {
                    if (rootElement.userDetails.emailId.email !== undefined) {
                        RESPONSE.CUSTOMEREMAILOFINCIDENTALERT.push(rootElement.userDetails.emailId.email);
                    } else {
                        RESPONSE.CUSTOMEREMAILOFINCIDENTALERT.push("");
                    }
                } catch (e) {
                    RESPONSE.CUSTOMEREMAILOFINCIDENTALERT.push("");
                }

                try {
                    if (rootElement.userDetails.phone.number !== undefined) {
                        RESPONSE.CUSTOMERPHONEOFINCIDENTALERT.push(rootElement.userDetails.phone.number);
                    } else {
                        RESPONSE.CUSTOMERPHONEOFINCIDENTALERT.push("");
                    }
                } catch (e) {
                    RESPONSE.CUSTOMERPHONEOFINCIDENTALERT.push("");
                }



                if (element.otherPartyId !== undefined) {
                    RESPONSE.OTHERPARTYIDS.push(element.otherPartyId);
                } else {
                    RESPONSE.OTHERPARTYIDS.push("");
                }
                console.log("element.otherPartyName", element.otherPartyName);
                if (element.otherPartyName !== undefined) {
                    console.log("if");
                    RESPONSE.OTHERPARTYNAMES.push(element.otherPartyName);
                } else {
                    RESPONSE.OTHERPARTYNAMES.push("");
                }
                if (element.fileName !== undefined) {
                    console.log("if");
                    RESPONSE.NAMES.push(element.fileName);
                } else {
                    RESPONSE.NAMES.push("");
                }
                if (element.role !== undefined) {
                    RESPONSE.ROLE.push(element.role);
                } else {
                    RESPONSE.ROLE.push("");
                }
                if (element.phone !== undefined) {
                    RESPONSE.PHONE.push(element.phone.number);
                } else {
                    RESPONSE.PHONE.push("");
                }
                if (element.address !== undefined) {
                    RESPONSE.ADDRESS.push(element.address.address);
                } else {
                    RESPONSE.ADDRESS.push("");
                }
                if (element.carrier !== undefined) {
                    RESPONSE.INSURANCECO.push(element.carrier);
                } else {
                    RESPONSE.INSURANCECO.push("");
                }
                if (element.policyNumber !== undefined) {
                    RESPONSE.POLICY.push(element.policyNumber);
                } else {
                    RESPONSE.POLICY.push("");
                }
                if (element.autoPlateNumber !== undefined) {
                    RESPONSE.VEHICLENO.push(element.autoPlateNumber);
                } else {
                    RESPONSE.VEHICLENO.push("");
                }
                if (element.model !== undefined) {
                    RESPONSE.VEHICLEMODEL.push(element.model);
                } else {
                    RESPONSE.VEHICLEMODEL.push("");
                }
                if (element.driverLicenseState !== undefined) {
                    RESPONSE.DRIVINGLICENCESTATE.push(element.driverLicenseState);
                } else {
                    RESPONSE.DRIVINGLICENCESTATE.push("");
                }
                if (element.driverLicenseNumber !== undefined) {
                    RESPONSE.DRIVINGLICENCENUMBER.push(element.driverLicenseNumber);
                } else {
                    RESPONSE.DRIVINGLICENCENUMBER.push("");
                }
                if (element.injuries !== undefined) {
                    RESPONSE.INJURIES.push(element.injuries);
                } else {
                    RESPONSE.INJURIES.push("");
                }
                if (element.otherInformation !== undefined) {
                    RESPONSE.OTHERINFORMATION.push(element.otherInformation);
                } else {
                    RESPONSE.OTHERINFORMATION.push("");
                }
            });

            RESPONSE.DOWNLOADFILENAME.push(prefixValue);
            //}

            var textDownload = HOMEPAGERESPONSE.TEXTDOWNLOADURL;
            for (var i = 0, j = 0; i <= noofDocuments - 1; i++, j++) {
                console.log("in for loop");
                documentThumbNailViewHTML = documentThumbNailViewHTML
                        + '<div style="text-align:center;color:#939393;margin-bottom: 10px;background: white;height: 82px;cursor:pointer;" class="opensans-regular overlayDocs" data-type="thumbNail"><p style="padding-top: 50%;font-size: 17px;" id=' + RESPONSE.OTHERPARTYIDS[i] + '>' + RESPONSE.NAMES[i] + '</p></div>';
            }
            originalDocumentHTML = '<div class="leftDiv" style="  width: 100%;">'
                    + '<p id="textOverlayIncidentAlert">'
                    + '<span class="firstSpan" style="font-size: 14px;">Date Of Incident Alert</span>'
                    + '<span class="secondSpan" style="font-size: 14px;">' + RESPONSE.DATEOFINCIDENTALERT[0] + '</span>'
                    + '</p>'

                    + '<p id="textOverlayIncidentTime">'
                    + '<span class="firstSpan" style="font-size: 14px;">Time Of Incident Alert</span>'
                    + '<span class="secondSpan" style="font-size: 14px;">' + RESPONSE.TIMEOFINCIDENTALERT[0] + '</span>'
                    + '</p>'

                    + '<p id="textOverlayIncidentLocation">'
                    + '<span class="firstSpan" style="font-size: 14px;">Location Of Incident Alert</span>'
                    + '<span class="secondSpan" style="font-size: 14px;">' + RESPONSE.LOCATIONOFINCIDENTALERT[0] + '</span>'
                    + '</p>'

                    + '<p id="textOverlayCustomerName">'
                    + '<span class="firstSpan" style="font-size: 14px;">Customer\'s Name</span>'
                    + '<span class="secondSpan" style="font-size: 14px;">' + RESPONSE.CUSTOMERNAMEOFINCIDENTALERT[0] + '</span>'
                    + '</p>'

                    + '<p id="textOverlayCustomerMailId">'
                    + '<span class="firstSpan" style="font-size: 14px;">Customer\'s Email Address</span>'
                    + '<span class="secondSpan" style="font-size: 14px;">' + RESPONSE.CUSTOMEREMAILOFINCIDENTALERT[0] + '</span>'
                    + '</p>'

                    + '<p id="textOverlayPhoneNumber">'
                    + '<span class="firstSpan" style="font-size: 14px;">Customer\'s Phone</span>'
                    + '<span class="secondSpan" style="font-size: 14px;">' + RESPONSE.CUSTOMERPHONEOFINCIDENTALERT[0] + '</span>'
                    + '</p>'


                    + '<p id="textOverlayOtherPartyName" style="padding-top: 18px;">'
                    + '<span class="firstSpan">Name</span>'
                    + '<span class="secondSpan">' + RESPONSE.OTHERPARTYNAMES[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayRole">'
                    + '<span class="firstSpan">Role</span>'
                    + '<span class="secondSpan">' + RESPONSE.ROLE[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayPhone">'
                    + '<span class="firstSpan">Phone</span>'
                    + '<span class="secondSpan">' + RESPONSE.PHONE[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayAddress">'
                    + '<span class="firstSpan">Address</span>'
                    + '<span class="secondSpan">' + RESPONSE.ADDRESS[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayInsurence">'
                    + '<span class="firstSpan">Insurance co</span>'
                    + '<span class="secondSpan">' + RESPONSE.INSURANCECO[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayPolicy">'
                    + '<span class="firstSpan">Policy #</span>'
                    + '<span class="secondSpan">' + RESPONSE.POLICY[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayModel">'
                    + '<span class="firstSpan">Auto Yr/make/model</span>'
                    + '<span class="secondSpan">' + RESPONSE.VEHICLEMODEL[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayAutoLicensePlate">'
                    + '<span class="firstSpan">Auto License plate state & Number</span>'
                    + '<span class="secondSpan">' + RESPONSE.VEHICLENO[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayDriversLicenseState">'
                    + '<span class="firstSpan">Drivers License State</span>'
                    + '<span class="secondSpan">' + RESPONSE.DRIVINGLICENCESTATE[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayDriversLicenseNumber">'
                    + '<span class="firstSpan">Drivers License Number</span>'
                    + '<span class="secondSpan">' + RESPONSE.DRIVINGLICENCENUMBER[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayInjuries">'
                    + '<span class="firstSpan">Injuries</span>'
                    + '<span class="secondSpan">' + RESPONSE.INJURIES[0] + '</span>'
                    + '</p>'
                    + '<p id="textOverlayOtherInfo">'
                    + '<span class="firstSpan">Other info</span>'
                    + '<span class="secondSpan">' + RESPONSE.OTHERINFORMATION[0] + '</span>'
                    + '</p>'
                    + '</div>';
            var firstTextDownload = textDownload + RESPONSE.OTHERPARTYIDS[0];

            var downloadFileName = RESPONSE.DOWNLOADFILENAME[0] + "&count=1";



            sessionStorage.overflowAuto = "false";
            if (RESPONSE.ADDRESS[0].length > 32) {
                sessionStorage.overflowAuto = "true";
            }

//            var downloadFileName = RESPONSE.DOWNLOADFILENAME[0] + "(1)";
//            
//            
//            
// var downloadFileName = "x_y_3274.txt";
            var html = '<div class="o-sub-content p-relative">'
                    + '<div style="display:none;width:200px;" class="printHeaderForText">'
                    + '<p>' + incidentDateForPrint + '</p>'
                    + '<p>' + incidentTimeForPrint + '</p>'
                    + '<p>' + indcidentCityForPrint + ',' + incidentStateForPrint + '</p>'
                    + '<p>' + customerName + '</p>'
                    + '<p>' + customerEmailId + '</p>'
                    + '<p>' + customerPhoneNumber + '</p>'
                    + '</div>'
                    + '<div style="position:relative;width:100%;"  id="overlaydiv">'
                    + '<div style="min-width: 17%;width: 24%;overflow: auto;position: absolute;left: -32px;height: 476px;">'
                    + '<div style="width:67.2%;margin:auto;max-height: 431px;" id="thumbNailViewForText">'
                    + documentThumbNailViewHTML
                    + '</div>'
                    + '</div>'
                    + '<div style="width:80%;background:white;position: absolute;left: 131px;min-height:476x;">'
                    + '<div style="height:70px;color:#585858;position: absolute;;width: 100%;background:white;>'
                    + '<div style="height:70px;height:70px;color:#585858;position: absolute;;width: 100%;background:white;">'
                    + '<div style="width:26.4%;float:left;margin-top:25px;margin-left:25px;color:#939393" class="opensans-regular">'
                    + '<span id="textinformation" style="color:rgb(47,156,161);">' + RESPONSE.NAMES[0] + '</span>'
                    + '</div>'
                    + '<a id="copyTextOverlay" class="sprite-im copy-clipBoard-icon" style="float:left;margin-left:20px;margin-top:15px;" href="javascript:void(0);" data-type="copyText">&nbsp;</a>'
                    + '<a id="downloadTextLink" class="sprite-im download-icon" style="float:left;margin-left:20px;margin-top:15px;" '
                    + 'href=' + firstTextDownload + '?fileName=' + downloadFileName + '  download>&nbsp;</a>'
                    + '<a id="printTextOverlay" class="sprite-im printImage-icon" style="float:left;margin-left:20px;margin-top:15px;" href="javascript:void(0)" data-type="printPage">&nbsp;</a>'
                    + '</div>'
                    + '<div id="samplediv" style="  overflow-x: hidden;overflow-y: auto;width:100%;position: absolute;top: 69px;background:white;border-top:1px solid #b9b8b8;min-height:406px;">'
                    + '<div style="max-width:120%;width:120%;position: absolute;  margin: auto;  top: 33px;  left: -65px;" id="viewText">'
                    + originalDocumentHTML
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';

            return html;
        },
        shareWithRepTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Share with Representatives</h2>'
                    + ' <div class="o-sub-content p-relative" style="margin: 4px;"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="text-box-outer p-relative textBox-placeholder-italic"  style="margin-top: 17px;">  <input type="search"'
                    + 'class="opensans-regular"  id="id-overlaysharewithrep"  placeholder="Search" onkeyup="sharewithrepkeyup(event)"  onkeypress="sharewithrepkeypress(event)"  style="  margin-top: 1px;"/> <div id="id-sharewithrepsearchicon" class="c-search-icon search-icon sprite-im  p-absolute"></div></div> <div class="range-box clr-fl"> <div class="opensans-regular'
                    + ' f-sz-14 range-color left f-italic range-title">Select Range</div> <div class="text-box-outer p-relative textBox-placeholder-italic left range-sel1">'
                    + '<div id="timepicker" class="none-1 opensans-regular left" onchange="Sharewithrep_sortbyBox1(\'sharewithrep\')"> '
                    + 'None </div>  '
                    + '<div class="drop-down-icon-1 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> <div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel2"> '
                    + '<div id="timepicker2" class="none-1 opensans-regular left" onchange="sharewithRepSortbyBox2()">  None </div>'
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> </div> <div class="rep-block">'
                    + '<div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">NAMES</div>'
                    + '<div class="name-title opensans-regular t-upper right text-color-overlay bold">CITY, STATE</div> </div>'
                    + '<div class="rep-content-blk"> <form id="id-sharewithrep">';
            return html;
        },
        assignCustomersTemplate: function (e) {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Assign Customers</h2>'
                    + ' <div class="o-sub-content p-relative" style="margin:4px;"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="text-box-outer p-relative textBox-placeholder-italic" style="margin-top: 17px;"> <input type="search"'
                    + 'class="opensans-regular" style="padding-left:5px;"  id="id-overlayaiigncustomers"   onkeyup="assignToCustomerkeyup(event)" placeholder="Search" /> <div id="id-assignCustomersSearchIcon" class="c-search-icon search-icon sprite-im  p-absolute" ></div></div> <div class="range-box clr-fl" style="display:none;"> <div class="opensans-regular'
                    + ' f-sz-14 range-color left f-italic range-title">Select Range</div> <div class="text-box-outer p-relative textBox-placeholder-italic left range-sel1">'
                    + '<div id="timepicker" class="none-1 opensans-regular left" onchange="sortbyBox1()"> None </div>  '
                    + '<div class="drop-down-icon-1 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> <div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel2">'
                    + '<div id="timepicker2" class="none-1 opensans-regular left" onchange="sortbyBox2()">  None </div>  '
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div>'
                    + '<div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel3" style="display:none;">'
                    + '<div id="timepicker3" class="none-1 opensans-regular left" onchange="sortbyBox3()">  None </div>  '
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div>'
                    + '</div> '
                    + '<div class="rep-block" style="margin-top:5px;">'
                    + '<div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">NAMES</div>'
                    + '<div class="name-title opensans-regular t-upper right text-color-overlay bold">CITY, STATE</div> </div>'
                    + '<div class="cls-select-all"><div class="rep-grp-blk opensans-regular border-bot text-color-overlay p-relative" style="border:none;">'
                    +'<input type="checkbox" value="value-selectall" id="name-selectall" name="selectall" class="checkbox">'
                    +'<label for="name-selectall" id="clr-name-selectall" class=" rep-label_temp"> <div class="lbl-in-block p-relative" style="margin-left: 10px;"> '
                    +'<div class="f-sz-14 text-color-overlay left rep-name" id="id-assign-cus-selectall">Select All</div> '
                    +'</div> </label> </div></div>'
                    +'<div class="rep-content-blk"> <form>';
            return html;
        },
        assignToRepTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Assign Representatives</h2>'
                    + ' <div class="o-sub-content p-relative" style="margin:4px;"> <div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div><div class="text-box-outer p-relative textBox-placeholder-italic"  style="  margin-top: 17px;"> <input type="search"'
                    + 'class="opensans-regular"  id="id-overlaysharewithrep"  placeholder="Search" onkeyup="sharewithrepkeyup(event)"  onkeypress="sharewithrepkeypress(event)" /> <div id="id-sharewithrepsearchicon" class="c-search-icon search-icon sprite-im  p-absolute"></div></div> <div class="range-box clr-fl" style="display:none;"> <div class="opensans-regular'
                    + ' f-sz-14 range-color left f-italic range-title">Select Range</div> <div class="text-box-outer p-relative textBox-placeholder-italic left range-sel1">'
                    + '<div id="timepicker" class="none-1 opensans-regular left" onchange="Sharewithrep_sortbyBox1(\'sharewithrep\')"> None   </div>  '
                    + '<div class="drop-down-icon-1 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> <div class="text-box-outer '
                    + 'textBox-placeholder-italic p-relative left range-sel2"> <div id="timepicker2" class="none-1 opensans-regular left" onchange="sharewithRepSortbyBox2()"> '
                    + ' None </div>'
                    + '<div class="drop-down-icon-2 sprite-im drop-down-icon dropdown-icon p-absolute"></div> </div> </div> <div class="rep-block" style="margin-top:5px;">'
                    + '<div class="rep-title-blk clr-fl"> <div class="name-title opensans-regular t-upper left text-color-overlay bold">NAMES</div>'
                    + '<div class="name-title opensans-regular t-upper right text-color-overlay bold">CITY, STATE</div> </div>'
                    + '<div class="rep-content-blk"> <form>';
            return html;
        },
        showPoliciesTemplate: function (j) {
//            
            var vehicleProductHTML = "", propertyProductHTML = "", otherProductHTML = "", carrierName = "", carrierNumber = "", dueAmount = "", dueDate = "", startDate = "", endDate = "", carrierPolicyNumber = "", commonPolicyDetailsHTML = "", someValue = 0, counterForVehicleModel = 0;
            /* dueDate = moment.tz(new Date(parseInt(HOMEPAGERESPONSE.NEXTPAYMENTDUEDATE[j])),'America/New_York').format('MMM DD, YYYY');
            startDate = moment.tz(new Date(parseInt(HOMEPAGERESPONSE.EFFECTIVEDATE[j])),'America/New_York').format('MMM DD, YYYY');
            endDate = moment.tz(new Date(parseInt(HOMEPAGERESPONSE.EXPIRYDATE[j])),'America/New_York').format('MMM DD, YYYY'); */
			/* dueDate = moment(new Date(parseInt(HOMEPAGERESPONSE.NEXTPAYMENTDUEDATE[j]))).tz('America/New_York').format('MMM DD, YYYY');
            startDate = moment(new Date(parseInt(HOMEPAGERESPONSE.EFFECTIVEDATE[j]))).tz('America/New_York').format('MMM DD, YYYY');
            endDate = moment(new Date(parseInt(HOMEPAGERESPONSE.EXPIRYDATE[j]))).tz('America/New_York').format('MMM DD, YYYY'); */
			dueDate = moment.utc(new Date(parseInt(HOMEPAGERESPONSE.NEXTPAYMENTDUEDATE[j]))).format('MMM DD, YYYY');
            startDate = moment.utc(new Date(parseInt(HOMEPAGERESPONSE.EFFECTIVEDATE[j]))).format('MMM DD, YYYY');
            endDate = moment.utc(new Date(parseInt(HOMEPAGERESPONSE.EXPIRYDATE[j]))).format('MMM DD, YYYY');
            dueAmount = HOMEPAGERESPONSE.NEXTPAYMENTAMOUNTDUE[j];
            policyNumber = HOMEPAGERESPONSE.POLICYNUMBERDETAILS[j];
            carrierName = HOMEPAGERESPONSE.CARRIERNAME[j];
            carrierNumber = HOMEPAGERESPONSE.CARRIERNUMBER[j];
            if (carrierName == undefined) {
                carrierName = "";
            }
            if (carrierNumber == undefined) {
                carrierNumber = "";
            }
            if (dueAmount == undefined) {
                dueAmount = "";
            } else {
                dueAmount = '$' + dueAmount;
            }
            if (dueDate == undefined) {
                dueDate = "";
            }
            if (startDate == undefined) {
                startDate = "";
            }
            if (endDate == undefined) {
                endDate = "";
            }
            if (carrierPolicyNumber == undefined) {
                carrierPolicyNumber = "";
            }
            commonPolicyDetailsHTML = '<div class="policyContentBlock"><div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Carrier Name</div> <div class="policy-value t-left right f-sz-16">' + carrierName + '</div> </div><div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Policy Number</div> <div class="policy-value t-left right f-sz-16">' + policyNumber + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Carrier Number</div> <div class="policy-value t-left right f-sz-16">' + carrierNumber + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Due Amount</div> <div class="policy-value t-left right f-sz-16">' + dueAmount + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Next Due Date</div> <div class="policy-value t-left right date-format f-sz-16">' + dueDate + '</div> </div><div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Effective Date </div> <div class="policy-value t-left right f-sz-16">' + startDate + '</div> </div><div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Expiration Date</div> <div class="policy-value t-left right f-sz-16">' + endDate + '</div> </div></div>';
            if (j == 0) {
                counterForVehicleModel = 0;
            } else {
                counterForVehicleModel = 0;
				for(var someValueForJ = 0; someValueForJ < j;someValueForJ++){
					counterForVehicleModel += HOMEPAGERESPONSE.VEHICLEPRODUCTCOUNT[someValueForJ];
				}
				console.log("counterForVehicleModel",counterForVehicleModel);
            }
			console.log("counterForVehicleModel",counterForVehicleModel);
            for (var i = 0; i < HOMEPAGERESPONSE.VEHICLEPRODUCTCOUNT[j]; i++) {
                var counterForVehicle = 0, valueToCalForVehicle = 0;
                var coverageHTML = "";
                var vehicleCoverage = "", vehicleCoverageLimit = "", vehicleCoverageDeduct = "", coverageHTML = "";
                var vehicleModel = HOMEPAGERESPONSE.MODELNAME[i + counterForVehicleModel];
                console.log("vehicleModel>>>>>>>>>>>>.", vehicleModel);
                console.log("counterForVehicleModel>>>>>>>>>>>>.", counterForVehicleModel);
                var vehicleMake = HOMEPAGERESPONSE.VEHICLEMAKE[i + counterForVehicleModel];
                console.log("vehicleModel>>>>>>>>>>>>.", vehicleMake);
                var vehicleYear = HOMEPAGERESPONSE.VEHICLEYEAR[i + counterForVehicleModel];
                var vehicleVin = HOMEPAGERESPONSE.VEHICLEIDENTIFICATIONNUMBER[i + counterForVehicleModel];
                if (j == 0) {
                    counterForVehicle = 0;
                }
                if (i > 0) {
                    var tempValue = i;
                    if (HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORVEHICLE[tempValue--] != 0) {
                        valueToCalForVehicle += HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORVEHICLE[tempValue--];
                    } else {
                        valueToCalForVehicle = HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORVEHICLE[tempValue--];
                    }
                }
                if (vehicleModel == undefined) {
                    vehicleModel = "";
                }
                if (vehicleMake == undefined) {
                    vehicleMake = "";
                }
                if (vehicleYear == undefined) {
                    vehicleYear = "";
                }
                if (vehicleVin == undefined) {
                    vehicleVin = "";
                }
                for (var k = 0; k < HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORVEHICLE[i + counterForVehicle]; k++) {
                    if (j == 0 && i == 0) {
                        if (HOMEPAGERESPONSE.VEHICLECOVERAGE[k] != undefined) {
                            vehicleCoverage = HOMEPAGERESPONSE.VEHICLECOVERAGE[k];
                        } else {
                            vehicleCoverage = "";
                        }
                        if (HOMEPAGERESPONSE.VEHICLECOVERAGELIMIT[k] != undefined) {
                            vehicleCoverageLimit = HOMEPAGERESPONSE.VEHICLECOVERAGELIMIT[k];
                        } else {
                            vehicleCoverageLimit = "";
                        }
                        if (HOMEPAGERESPONSE.VEHICLECOVERAGEDEDUCTIBLE[k] != undefined) {
                            vehicleCoverageDeduct = HOMEPAGERESPONSE.VEHICLECOVERAGEDEDUCTIBLE[k];
                        } else {
                            vehicleCoverageDeduct = "";
                        }
                    } else {
                        if (HOMEPAGERESPONSE.VEHICLECOVERAGE[valueToCalForVehicle + k] != undefined) {
                            vehicleCoverage = HOMEPAGERESPONSE.VEHICLECOVERAGE[valueToCalForVehicle + k];
                        } else {
                            vehicleCoverage = "";
                        }
                        if (HOMEPAGERESPONSE.VEHICLECOVERAGELIMIT[valueToCalForVehicle + k] != undefined) {
                            vehicleCoverageLimit = HOMEPAGERESPONSE.VEHICLECOVERAGELIMIT[valueToCalForVehicle + k];
                        } else {
                            vehicleCoverageLimit = "";
                        }
                        if (HOMEPAGERESPONSE.VEHICLECOVERAGEDEDUCTIBLE[valueToCalForVehicle + k] != undefined) {
                            vehicleCoverageDeduct = HOMEPAGERESPONSE.VEHICLECOVERAGEDEDUCTIBLE[valueToCalForVehicle + k];
                        } else {
                            vehicleCoverageDeduct = "";
                        }
                    }
                    if (vehicleCoverageDeduct != "") {
                        deductableValue = '(' + vehicleCoverageDeduct + ')';
                    } else {
                        deductableValue = "";
                    }
                    coverageHTML += '<div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl" style="width:90% !important;"> <div class="policy-title t-left left f-sz-16" style="width:100%;">' + vehicleCoverage + '&nbsp&nbsp&nbsp' + vehicleCoverageLimit + '  ' + deductableValue + '</div></div>'
                }
                vehicleProductHTML += '<h2 id="vehicleDetailsPolicyToggle' + j + '" class="t-left f-color-green opensans-regular" style="">Vehicles/Watercrafts</h2>'
                        /* +'<div class="sprite-im drop-down-icon submenu-drop-icon" style="position:relative;left:96%;top:-35px;">&nbsp;</div>' */
                        + '<div class="overlay-multipleCoverage policyDetailsForall vehicleDetailsToggle"> <div class="o-sub-content p-relative"><div class="policyContentBlock">'
                        + '<div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16 ">Policy type</div> <div class="policy-value t-left right f-sz-16">Vehicle</div> </div><div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Vehicle Year</div> <div class="policy-value t-left right f-sz-16">' + vehicleYear + '</div> </div><div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Vehicle Make</div> <div class="policy-value t-left right f-sz-16">' + vehicleMake + '</div> </div><div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Vehicle Model</div> <div class="policy-value t-left right f-sz-16">' + vehicleModel + '</div> </div><div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">VIN</div> <div class="policy-value t-left right f-sz-16">' + vehicleVin + '</div> </div>'
                        + coverageHTML
                        + '</div></div></div>';
                counterForVehicle++;
                //valueToCalForVehicle+ = HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORVEHICLE[j];
                //counterForVehicleModel++;
            }
            for (var i = 0; i < HOMEPAGERESPONSE.OTHERPRODUCTCOUNT[j]; i++) {
                var counterForOther = 0, valueToCalForOther = 0;
                var carrierName = "", carrierNumber = "", dueAmount = "", coverageHTML = "";
                var html = "", otherCoverage = "", otherCoverageLimit = "", otherCoverageDeduct = "", otherProductType = "";
				if (j == 0) {
					counterForOtherProduct = 0;
				} else {
					counterForOtherProduct = 0;
					for(var someValueForJ = 0; someValueForJ < j;someValueForJ++){
						counterForOtherProduct += HOMEPAGERESPONSE.VEHICLEPRODUCTCOUNT[someValueForJ];
					}
					console.log("counterForVehicleModel",counterForOtherProduct);
				}
                if (j == 0) {
                    counterForOther = 0;
                }
                if (i > 0) {
                    var tempValue = i;
                    if (HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFOROTHER[tempValue--] != 0) {
                        valueToCalForOther += HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFOROTHER[tempValue--];
                    } else {
                        valueToCalForOther = HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFOROTHER[tempValue--];
                    }
                }
                for (var k = 0; k < HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFOROTHER[i + counterForOther]; k++) {
                    otherProductType = HOMEPAGERESPONSE.OTHERPRODUCTTYPE[k+counterForOtherProduct];
                    if (otherProductType == undefined) {
                        otherProductType = "";
                    }
                    if (j == 0 && i == 0) {
                        if (HOMEPAGERESPONSE.OTHERCOVERAGE[k] != undefined) {
                            otherCoverage = HOMEPAGERESPONSE.OTHERCOVERAGE[k];
                        } else {
                            otherCoverage = "";
                        }
                        if (HOMEPAGERESPONSE.OTHERCOVERAGELIMIT[k] != undefined) {
                            otherCoverageLimit = HOMEPAGERESPONSE.OTHERCOVERAGELIMIT[k];
                        } else {
                            otherCoverageLimit = "";
                        }
                        if (HOMEPAGERESPONSE.OTHERCOVERAGEDEDUCTIBLE[k] != undefined) {
                            otherCoverageDeduct = HOMEPAGERESPONSE.OTHERCOVERAGEDEDUCTIBLE[k];
                        } else {
                            otherCoverageDeduct = "";
                        }
                    } else {
                        valueToCalForOther += HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFOROTHER[j];
                        if (HOMEPAGERESPONSE.OTHERCOVERAGE[valueToCalForOther + k] != undefined) {
                            otherCoverage = HOMEPAGERESPONSE.OTHERCOVERAGE[valueToCalForOther + k];
                        } else {
                            otherCoverage = "";
                        }
                        if (HOMEPAGERESPONSE.OTHERCOVERAGELIMIT[valueToCalForOther + k] != undefined) {
                            otherCoverageLimit = HOMEPAGERESPONSE.OTHERCOVERAGELIMIT[valueToCalForOther + k];
                        } else {
                            otherCoverageLimit = "";
                        }
                        if (HOMEPAGERESPONSE.OTHERCOVERAGEDEDUCTIBLE[valueToCalForOther + k] != undefined) {
                            otherCoverageDeduct = HOMEPAGERESPONSE.OTHERCOVERAGEDEDUCTIBLE[valueToCalForOther + k];
                        } else {
                            otherCoverageDeduct = "";
                        }
                    }
                    if (otherCoverageDeduct != "") {
                        otherCoverageDeduct = '(' + otherCoverageDeduct + ')';
                    } else {
                        otherCoverageDeduct = '';
                    }
                    coverageHTML += '<div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl" style="width:90% !important;"> <div class="policy-title t-left left f-sz-16" style="width:100%;">' + otherCoverage + '&nbsp&nbsp&nbsp' + otherCoverageLimit + '&nbsp&nbsp&nbsp' + otherCoverageDeduct + '</div></div>'
                    /* +'<div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Limit/Amount</div> <div class="policy-value t-left right f-sz-16">' + otherCoverageLimit + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Deductible/Retention</div> <div class="policy-value t-left right f-sz-16">' + otherCoverageDeduct + '</div> </div>' */
                }
                otherProductHTML += '<div ><h2 id="otherPolicyDetailsToggle' + j + '" class="t-left f-color-green opensans-regular" style="">Others</h2>'
                        /* +'<div class="sprite-im drop-down-icon submenu-drop-icon" style="position:relative;left:96%;top:-35px;">&nbsp;</div>' */
                        + '<div class="o-sub-content p-relative policyDetailsForall otherDetailsToggle"><div class="policyContentBlock">'
                        + '<div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16 ">Policy type</div> <div class="policy-value t-left right f-sz-16">Other</div> </div><div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Product Type</div> <div class="policy-value t-left right f-sz-16">' + otherProductType + '</div> </div>'
                        + coverageHTML
                        + '</div></div></div>';
                counterForOther++;
            }
            for (var i = 0; i < HOMEPAGERESPONSE.PROPERTYPRODUCTCOUNT[j]; i++) {
                var counterForProperty = 0, valueToCalForProperty = 0;
                var carrierName = "", carrierNumber = "", dueAmount = "", coverageHTML = "";
                var html = "", otherCoverage = "", otherCoverageLimit = "", otherCoverageDeduct = "";
				if (j == 0) {
					counterForPropertyInfo = 0;
				} else {
					counterForPropertyInfo = 0;
					for(var someValueForJ = 0; someValueForJ < j;someValueForJ++){
						counterForPropertyInfo += HOMEPAGERESPONSE.PROPERTYPRODUCTCOUNT[someValueForJ];
					}
					console.log("counterForVehicleModel",counterForPropertyInfo);
				}
                var propertyCityAndState = HOMEPAGERESPONSE.PROPERTYINSURENCECITYANDSTATE[i+counterForPropertyInfo];
                var propertyZipcode = HOMEPAGERESPONSE.PROPERTYZIPCODE[i+counterForPropertyInfo];
                var propertyLocationAddress = HOMEPAGERESPONSE.PROPERTYLOCATIONADDRESS[i+counterForPropertyInfo];
                if (j == 0) {
                    counterForProperty = 0;
                }
                if (j != 0) {
					var tempValue;
					if(i == 0){
						tempValue = j;
					} else {
						tempValue = i+1;
					}
                    //var tempValue = i;
                    if (HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORPROPERTYPOLICY[tempValue--] != 0) {
                        valueToCalForProperty += HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORPROPERTYPOLICY[tempValue--];
                    } else {
                        valueToCalForProperty = HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORPROPERTYPOLICY[tempValue--];
                    }
                }
                if (propertyCityAndState == undefined) {
                    propertyCityAndState = "";
                }
                if (propertyLocationAddress == undefined) {
                    propertyLocationAddress = "";
                }
                for (var k = 0; k < HOMEPAGERESPONSE.COVERAGEDETAILSLENGTHFORPROPERTYPOLICY[i + counterForProperty]; k++) {
                    if ((j == 0 && i == 0) || (j == 1 && i == 0)) {
                        if (HOMEPAGERESPONSE.PROPERTYCOVERAGELIMIT[k] != undefined) {
                            propertyCoverageLimit = HOMEPAGERESPONSE.PROPERTYCOVERAGELIMIT[k];
                        } else {
                            propertyCoverageLimit = "";
                        }
                        if (HOMEPAGERESPONSE.PROPERTYCOVERAGEDEDUCTIBLE[k] != undefined) {
                            propertyCoverageDeduct = HOMEPAGERESPONSE.PROPERTYCOVERAGEDEDUCTIBLE[k];
                        } else {
                            propertyCoverageDeduct = "";
                        }
                        if (HOMEPAGERESPONSE.PROPERTYCOVERAGE[k] != undefined) {
                            propertyCoverage = HOMEPAGERESPONSE.PROPERTYCOVERAGE[k];
                        } else {
                            propertyCoverage = "";
                        }
                    } else {
                        if (HOMEPAGERESPONSE.PROPERTYCOVERAGELIMIT[valueToCalForProperty + k] != undefined) {
                            propertyCoverageLimit = HOMEPAGERESPONSE.PROPERTYCOVERAGELIMIT[valueToCalForProperty + k];
                        } else {
                            propertyCoverageLimit = "";
                        }
                        if (HOMEPAGERESPONSE.PROPERTYCOVERAGEDEDUCTIBLE[valueToCalForProperty + k] != undefined) {
                            propertyCoverageDeduct = HOMEPAGERESPONSE.PROPERTYCOVERAGEDEDUCTIBLE[valueToCalForProperty + k];
                        } else {
                            propertyCoverageDeduct = "";
                        }
                        if (HOMEPAGERESPONSE.PROPERTYCOVERAGE[valueToCalForProperty + k] != undefined) {
                            propertyCoverage = HOMEPAGERESPONSE.PROPERTYCOVERAGE[valueToCalForProperty + k];
                        } else {
                            propertyCoverage = "";
                        }
                    }
                    if (propertyCoverageDeduct != "") {
                        propertyCoverageDeduct = '(' + propertyCoverageDeduct + ')';
                    } else {
                        propertyCoverageDeduct = "";
                    }
                    coverageHTML += '<div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl" style="width:90% !important;"> <div class="policy-title t-left left f-sz-16" style="width:100%;">' + propertyCoverage + '&nbsp&nbsp&nbsp' + propertyCoverageLimit + '&nbsp&nbsp&nbsp' + propertyCoverageDeduct + '</div></div>'
                            /* +'<div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Limit/Amount</div> <div class="policy-value t-left right f-sz-16">' + propertyCoverageLimit + '</div> </div> <div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Deductible/Retention</div> <div class="policy-value t-left right f-sz-16">' + propertyCoverageDeduct + '</div> </div>' */;
                }
                propertyProductHTML += '<div ><h2 id="propertyDetailsPolicyToggle' + j + '" class="t-left f-color-green opensans-regular" style="">Property Policy</h2>'
                        /* +'<div class="sprite-im drop-down-icon submenu-drop-icon" style="position:relative;left:96%;top:-35px;">&nbsp;</div>' */
                        + '<div class="o-sub-content p-relative policyDetailsForall propertyDetailsToggle"> <div class="policyContentBlock">'
                        + '<div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16 ">Policy type</div> <div class="policy-value t-left right f-sz-16">Property</div> </div><div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">Location Address</div> <div class="policy-value t-left right f-sz-16">' + propertyLocationAddress + '</div> </div><div class="policy-group p-relative opensans-regular text-color-overlay f-sz-14 clr-fl"> <div class="policy-title t-left left f-sz-16">City&State,Zipcode</div> <div class="policy-value t-left right f-sz-16">' + propertyCityAndState + ',' + propertyZipcode + '</div> </div>'
                        + coverageHTML
                        + '</div></div></div>';
                counterForProperty++;
            }
            var html = '<div id="slideshow">'
                    + '<div id="slideshowWindow" style="width:89% !important;">'
                    + '<div class="slide">'
                    + '<div class="sprite-im drop-down-icon submenu-drop-icon" style="position:absolute;right:0px;top:15px;">&nbsp;</div>'
                    + '<h2 class="t-left f-color-green opensans-regular" id="policyDetailsBlock">Policy Number :' + policyNumber + '</h2>'
                    + '<div id="showPoliciesForCustomer" style="overflow-x:hidden;overflow-y:auto;height:450px;width:100%;">'
                    + commonPolicyDetailsHTML
                    + '<div>'
                    + vehicleProductHTML
                    + propertyProductHTML
                    + otherProductHTML
                    + '</div>'
                    + '</div>'
                    + '<div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="closeOverlay" style="position:fixed;top:88%;left:38%;">Done</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            return html;
        },
        addVendorDetailsTemplate: function () {
            var html = ' <h2 class="t-left f-color-green opensans-regular" style="">Add Vendor details</h2> <div class="o-sub-content p-relative" style="margin:4px;min-height: 205px;"> <div class="success2" style=" display:none; color: green;"></div><div class="error2" style=" display:none; color: red;"></div><div class="left-sub-content left p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Type</div> <div id="id-vendortype-box" class="url-box text-box-outer textBox-placeholder-italic border-all">'
                    + '<div tabindex="1" class="opensans-regular" id="id-vendortype" style="  padding: 11px;">Towing Service</div>'
                    + '</div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 1</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input tabindex="3" id="id-vendoraddress1" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">City</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input tabindex="5" id="id-vendorcity" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Zip</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input tabindex="7" id="id-vendorzip" type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> <div class="right-sub-content right p-relative"> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Name</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input tabindex="2" id="id-vendorname" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Address 2</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input tabindex="4" id="id-vendoraddress2" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">State</div> <div class="url-box text-box-outer textBox-placeholder-italic border-all"> <input tabindex="6"  id="id-vendorstate" type="text" class="opensans-regular" placeholder="" /> </div> </div> <div class="vendorbox"> <div class="link opensans-regular t-right f-sz-14">Phone</div> <div class="url-box right text-box-outer textBox-placeholder-italic border-all"> <input tabindex="8" id="id-vendorphone" type="text" class="opensans-regular" placeholder="" /> </div> </div> </div> </div> <div class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="overlaybtn_addvendordetails">Save</div> ';
            return html;
        },
        staticFeedViewTemplate: function (tempObj) {
            console.log("alertType");
            console.log("tempObj", tempObj.alertType);
            var genderDiv = "";
            console.log("data is -------------?", tempObj);

            if (tempObj.alertType == "incidentalert") {
                if (noOfOtherPartyRecordsCount === undefined && noOfPictureRecord === undefined && noOfAudioRecordCount === undefined) {
                    console.log("condition satisfied");
                    tempObj.noOfOtherPartyRecordsCount = 0;
                    tempObj.noOfPictureRecord = 0;
                    tempObj.noOfAudioRecordCount = 0;
                }
                alertFeed = '<div id="box-1" class="inline-block v-align-mid" style="margin-right:15px;width:140px;height: 104px;">'
                        + '<a href="/text" class="snap feed-doc-btn block f-sz-14 opensans-light textDoc p-relative" data-type="textDoc" name="textDocView" id=' + tempObj.alertId + '   style="  height: 104px;">'
                        + '<div class="t-center p-relative bg-color-white f-color-green"  style="  height: 40px;">'
                        + '<div class="doc-icon-box inline-block"  style="margin-top: 10px;">'
                        + '<div class="sprite-im text-icon doc-icon-placement">&nbsp;</div>'
                        + '</div>'
                        + '<div class="feed-menu-text inline-block f-color-green">Files</div>'
                        + '</div>'
                        + '<div class="t-center p-relative bg-color-green f-color-w"  style="  height: 31px;">'
                        + '<div class="file-count inline-block" style="  margin-top: 6px;">' + tempObj.noOfOtherPartyRecordsCount + '</div>'
                        + '<div class="inline-block">View</div>'
                        + '</div>'
                        + '</a>'
                        + '</div>'
                        + '<div id="box-2" class="inline-block v-align-mid" style="  margin-right: 15px;width:140px;height: 104px;">'
                        + '<a href="/photos" class="snap feed-doc-btn block f-sz-14 opensans-light photosDoc p-relative" data-type="photosDoc" name="photosDocView" id=' + tempObj.alertId + '  style="width:100%;height: 104px;">'
                        + '<div class="t-center p-relative bg-color-white f-color-green" style="  height: 40px;">'
                        + '<div class="doc-icon-box inline-block" style="  margin-left: -13px;margin-top: 10px;">'
                        + '<div class="sprite-im photos-icon doc-icon-placement">&nbsp;</div>'
                        + '</div>'
                        + '<div class="feed-menu-text inline-block f-color-green" style="  margin-right: -13px;">Photos</div>'
                        + '</div>'
                        + '<div class="t-center p-relative bg-color-green f-color-w"  style="  height: 31px;">'
                        + '<div class="file-count inline-block" style="  margin-top: 6px;">' + tempObj.noOfPictureRecord + '</div>'
                        + '<div class="inline-block">View</div>'
                        + '</div>'
                        + '</a>'
                        + '</div>'
                        + '<div id="box-3" class="inline-block v-align-mid" style="margin-top:0px;width:140px;height: 104px;">'
                        + '<a href="/voice" class="snap feed-doc-btn block f-sz-14 opensans-light voiceDoc p-relative" data-type="voiceDoc" name="voiceDocView"  id=' + tempObj.alertId + '  style="  height: 104px;">'
                        + '<div class="t-center p-relative bg-color-white f-color-green"  style="  height: 40px;">'
                        + '<div class="doc-icon-box inline-block"  style="margin-top: 10px;">'
                        + '<div class="sprite-im voice-icon doc-icon-placement">&nbsp;</div>'
                        + '</div>'
                        + '<div class="feed-menu-text inline-block f-color-green">Voice</div>'
                        + '</div>'
                        + '<div class="t-center p-relative bg-color-green f-color-w"  style="  height: 31px;">'
                        + '<div class="file-count inline-block" style="  margin-top: 6px;">' + tempObj.noOfAudioRecordCount + '</div>'
                        + '<div class="inline-block">View</div>'
                        + '</div>'
                        + '</a>'
                        + '</div>';
            } else {
                console.log("policy message--->", tempObj.policyMessage);

                alertFeed = '<a href="/changecoverage" class="snap feed-doc-btn block f-sz-17 opensans-regular f-color-green changeCoverage p-relative" data-type="changeCoverage"  style="margin-left: 24%;max-width: 320px;width: 100%;">'
                        + '<div class="t-center p-relative">'
                        + '<div class="sprite-im message-green-icon center-icon">&nbsp;</div>'
                        + '</div>'
                        + '<div class="feed-addRemove-text t-center p-relative t-caps" id="policyMessageForPolicyAlert">' + tempObj.policyMessage + '</div>'
                        + '</a>';
            }
            if (tempObj.gender == undefined) {
                genderDiv = '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-name t-caps gender">' + tempObj.gender + '</div>';
            } else {
                genderDiv = "";
            }
            var html = '<div class="view-feed-block">'
                    + '<div id="viewfeed-box1" class="view-in-blocks inline-block v-align-mid bg-color-dblue p-relative" style="  width: 45%;">'
                    + '<div class="p-relative">'
                    + '<div class="feed-user-top-details"  style="height:160px">'
                    + '<div class="feed-pic-b inline-block v-align-mid">'
                    + '<div id="" class="feed-user-pic-box border-all">'
                    + '<img src=' + profilePicture + ' alt="" class="feeduserpic">'
                    + '</div>'
                    + '</div>'
                    + '<div class="feed-user-details-top inline-block v-align-mid" style="width:70.8%;color: #3e3e3e;margin-left: -1px;height: 160px;">'
                    + '<div class="line1" style="margin-bottom:3px;">'
                    + '<div class="p-relative inline-block v-align-top" style="margin-right: 2px;">'
                    + '<div class="sprite-im mobile-icon mobile-icon-pos">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-16 cust-name t-caps bold" style="margin-left:9px;  font-size: 17px;  margin-top: -1px;">' + tempObj.firstName + '&nbsp' + tempObj.lastName + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-time t-upper" style="  margin-bottom: 1px;">' + tempObj.alertTime + '<span style="margin-left:5px;">[' + tempObj.timeZone + ']</span></div>'
                    + '<div class="sprite-im archieve-icon" id="id-achieveicon">&nbsp;</div>';
            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                if (localStorage.LoginType == 'Representatives') {
                    html += '<div class="archieve-icon" id="id-achieveicon" style="margin-right:20px;">Archive</div>';
                }
            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Representatives') {
                    html += '<div class="archieve-icon" id="id-achieveicon" style="margin-right:20px;">Archive</div>';
                }
            }

            var alertType = tempObj.alertType;

            if (alertType == "policyalert") {
                alertType = "Policy Alert";

            } else if (alertType == "incidentalert") {
                alertType = "Incident Alert";

            } else {
                alertType = "";
            }
            html += '</div>'
                    + '<div class="line1">' + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-name t-caps">' + tempObj.gender + '</div>'
                    + '<div class="p-relative inline-block v-align-top">'
                    + '<div class="sprite-im birthday-icon">&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-bday t-upper">' + tempObj.birthday + '</div>'
                    + '</div>'
                    + '<div class="feed-user-other-details" style="margin-top:10px !important;  width: 107%;">'
                    + '<div class="p-relative inline-block v-align-bot" style="margin-right: 14px;">'
                    + '<div class="sprite-im calendar-icon calendar-icon-pos" >&nbsp;</div>'
                    + '</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-date t-caps" style="  min-width: 45px;line-height: 19px;margin-right: 35px;font-size: 16px !important;color: #404040;">' + tempObj.alertDate + '</div>';

            var flag1 = false, flag2 = false;
            if (tempObj.residentialCity != "") {
                var location = tempObj.residentialCity;
                location.replace("undefined", "");
                flag1 = true;
                html += '<div class="p-relative inline-block v-align-bot"  style="margin-right: 14px;">'
                        + '<div class="sprite-im map-icon map-icon-pos" style="margin-right: 0px;">&nbsp;</div>'
                        + '</div>'
                        + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 feed-location t-caps" style="  min-width: 40px;  line-height: 19px;margin-right: 28px;font-size: 16px !important;color: #404040;">' + location + '</div>';
            }

            if (tempObj.phoneNumber != "") {
                flag2 = true;
                html += '<div class="p-relative inline-block v-align-bot"  style="margin-right: 14px;">'
                        + '<div class="sprite-im phone-icon phone-icon-pos" style="float:left;margin-right: 15px;">&nbsp;</div>'
                        + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-phone t-caps" style="margin-top: -1px;float:left;min-width: 45px;  line-height: 19px;margin-right: 20px;font-size: 16px !important;color: #404040;" >' + tempObj.phoneNumber + '</div>'
                        + '</div>';
            }

            var styleText = "";
            if (flag1 == true && flag2 == true) {
                styleText = "style='margin-top: 22px;'";
            } else if (flag1 == true) {
                styleText = "style='margin-top: 22px;'";
            }
            html += '<div class="p-relative inline-block v-align-bot"  ' + styleText + '>'
                    + '<div class="sprite-im email-icon email-icon-pos" style="float:left;margin-top: 5px;  margin-right: 6px;">&nbsp;</div>'
                    + '<div class="p-relative inline-block opensans-regular v-align-bot f-sz-12 cust-email no-right-margin"  style="float:left;margin-left: 10px;  margin-top: -1px;font-size: 16px !important;color: #404040;">' + tempObj.userEmail + '</div>'
                    + '</div>'

                    + '</div>'
                    + '</div>'
                    + '</div>' + '<div class="feed-user-bottom-details" style="width: 100%;height:93px;">'
                    + '<div class="inline-block v-align-mid" style="  width: 160px;">'
                    + '<a href="/share" class="snap feed-btn bg-color-green block f-sz-14 opensans-light f-color-w share p-relative t-center" data-type="share">'
                    + '<div class="t-center mid-align" style="margin-top: 7px;">'
                    + '<div class="sprite-im inline-block v-align-mid share-icon">&nbsp;</div>'
                    + '<span id="id-sharetorep" class="feed-menu-text inline-block v-align-mid f-color-w"  style="font-size:16px;">Share</span>'
                    + '</div>'
                    + '</a>'
                    + '<div class="bg-color-green block feed-btn f-sz-14 opensans-regular f-color-w p-relative t-center alert-type-box t-caps" style="font-size:16px;"><div style="margin-top:7px;">' + alertType + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div class="inline-block v-align-mid"  style="height: 104px;">'
                    + alertFeed
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div id="id-view-in-blocks-two" class="view-in-blocks inline-block v-align-mid bg-color-dblue p-relative" style="width: 50%;  padding: 0px; height: 323px; padding-bottom: 0px;">'
                    + '<div class="p-relative policy-main-blk">'
                    + '</div>'
                    + '</div>'
                    + '<div class="related-feeds p-relative">'
                    + '<div class="rel-feeds-title border-bot text-color-overlay">'
                    + '<div class="f-sz-14 opensans-regular t-upper" style="font-size:15px;">Related Feeds</div>'
                    + '</div>'
                    + '<div class="rel-feeds-content">'
                    + '</div>'
                    + '</div>'

                    + '</div>';
            return html;
        },
        insurencePolicyDetails: function (insurencePolicyDetail, matchedPolicyID) {
            var matchedRadioButtonHTML = "";
            console.log("insurencePolicyDetail>>>>>>>>>>>>", insurencePolicyDetail);
            var policyDetailsValue = insurencePolicyDetail.policyDetails,
                    carrierName = insurencePolicyDetail.carrierDetails.carrierName,
                    carrierPolicyNumber = insurencePolicyDetail.policyDetails.carrierPolicyNumber,
                    carrierId = insurencePolicyDetail.policyDetails.carrierId,
                    dueAmount = insurencePolicyDetail.policyDetails.nextPaymentAmountDue,
                    dueDate = insurencePolicyDetail.policyDetails.nextPaymentDueDate,
                    dueDateOfPolicy = moment(new Date(parseInt(dueDate))).tz('America/New_York').format('MMM D, YYYY'),
                    effectiveDate = insurencePolicyDetail.policyDetails.effectiveDate,
                    effectiveDateOfPolicy = moment(new Date(parseInt(effectiveDate))).tz('America/New_York').format('MMM D, YYYY'),
                    expiryDate = insurencePolicyDetail.policyDetails.expirationDate,
                    matchAndOrReleaseClaimHTML = "",
                    policyType = "",
                    policyId = insurencePolicyDetail.policyDetails.policyId;
            RESPONSE.POLICYIDS.push(policyId);
            exipryDateOfPolicy = moment(new Date(parseInt(expiryDate))).tz('America/New_York').format('MMM D, YYYY'),
                    policyCoverageDetails = insurencePolicyDetail.PolicyCoverageDetails,
                    incidentId = HOMEPAGERESPONSE.COMMONUSERDETAILS.incidentIdValue;
            if (policyCoverageDetails) {
                $.each(policyCoverageDetails, function (index, value) {
                    console.log("value>>>>>>>>>>>>>>>", value);
                    if (value.carrierVehiclesWatercraftsId !== undefined) {
                        policyType = "Vehicle";
                        return false;
                    } else if (value.carrierPropertyId !== undefined) {
                        policyType = "Property";
                        return false;
                    } else {
                        policyType = "Other Product";
                        return false;
                    }
                });
            }
            var hiddenPolicyDetailsHTML = '<div class="matchAndReleaseClaim" style="display:none;">'
                    + '<span class="incidentDateSpan">' + incidentId + '</span>'
                    + '<span class="carrierIdSpan">' + carrierId + '</span>'
                    + '<span class="policyIdSpan">' + policyId + '</span>'
                    + '<span class="policyTypeSpan">' + policyType + '</span>'
                    + '</div>';
            /* if (HOMEPAGERESPONSE.COMMONUSERDETAILS.alertType == "incidentalert" && localStorage.getItem("LOGIN_LABEL") == "Agency") {
             matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
             + '<a href="/matchReleaseClaim" class="snap bg-color-green block f-sz-12 opensans-light t-upper t-center matchReleaseClaim p-relative f-color-w" data-type="matchReleaseClaim" id=' + policyId + '>'
             + '<div>Match & Release Claim</div>'
             + hiddenPolicyDetailsHTML
             + '</a>'
             + '</div>';
             } else {
             matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
             + '<a href="/matchClaim" class="snap bg-color-green block f-sz-12 opensans-light t-upper t-center matchReleaseClaim p-relative f-color-w" data-type="matchClaim" id=' + policyId + '>'
             + '<div>Match</div>'
             + hiddenPolicyDetailsHTML
             + '</a>'
             + '</div>';
             } */
            console.log("count value is");
            if (HOMEPAGERESPONSE.COMMONUSERDETAILS.alertType == "policyalert") {
                if (HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy != undefined && HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy == "Matched") {
                    if (matchedPolicyID == policyId) {
                        matchedRadioButtonHTML = '<input type="radio" checked="checked" id=' + policyId + ' name="policyRadioValue" class="id-policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                                + '<label for=' + policyId + '>'
                        matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                                + '<a href="javascrip:void(0)" class="selected-tab match snap bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" data-type="matchClaim" id=' + policyId + '>'
                                + '<div>Match</div>'
                                + hiddenPolicyDetailsHTML
                                + '</a>'
                                + '</div>';
                    }  /* else if (localStorage.getItem("matchedAndReleasedPolicyId") == policyId) {
                     matchedRadioButtonHTML = '<input type="radio" checked="checked" id=' + policyId + ' name="policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                     + '<label for=' + policyId + '>'
                     matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                     + '<a href="javascrip:void(0)" class="selected-tab snap bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + '>'
                     + '<div>Match</div>'
                     + hiddenPolicyDetailsHTML
                     + '</a>'
                     + '</div>';
                     } */ else {
                        matchedRadioButtonHTML = '<input type="radio" id=' + policyId + ' name="policyRadioValue"  class="id-policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                                + '<label for=' + policyId + '>'
                        matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                                + '<a href="javascrip:void(0)" class="snap match bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + ' data-type="matchClaim">'
                                + '<div>Match</div>'
                                + hiddenPolicyDetailsHTML
                                + '</a>'
                                + '</div>';
                    }
                } else {
                    matchedRadioButtonHTML = '<input type="radio" id=' + policyId + ' name="policyRadioValue"  class="id-policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                            + '<label for=' + policyId + '>'
                    matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                            + '<a href="javascrip:void(0)" class="snap match bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + ' data-type="matchClaim">'
                            + '<div>Match</div>'
                            + hiddenPolicyDetailsHTML
                            + '</a>'
                            + '</div>';
                }
            } else {
                if (HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy != undefined && HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy == "MatchedReleased") {
                    if (matchedPolicyID == policyId) {
                        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                            matchedRadioButtonHTML = '<input type="radio" checked="checked" id=' + policyId + ' name="policyRadioValue"  class="id-policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                                    + '<label for=' + policyId + '>'
                            matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                                    + '<a href="javascrip:void(0)" class="selected-tab matchandrelease snap bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + ' data-type="matchReleaseClaim">'
                                    + '<div>Match</div>'
                                    + hiddenPolicyDetailsHTML
                                    + '</a>'
                                    + '</div>';
                        } else {
                            matchedRadioButtonHTML = '<input type="radio" checked="checked" id=' + policyId + ' name="policyRadioValue"  class="id-policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                                    + '<label for=' + policyId + '>'
                            matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                                    + '<a href="javascrip:void(0)" class="selected-tab matchandrelease snap bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + '>'
                                    + '<div>Match & Release Claim</div>'
                                    + hiddenPolicyDetailsHTML
                                    + '</a>'
                                    + '</div>';
                        }
                    } /* else if (localStorage.getItem("matchedAndReleasedPolicyId") == policyId) {
                     matchedRadioButtonHTML = '<input type="radio" checked="checked" id=' + policyId + ' name="policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                     + '<label for=' + policyId + '>'
                     matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                     + '<a href="javascrip:void(0)" class="selected-tab snap bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + '>'
                     + '<div>Match & Release Claim</div>'
                     + hiddenPolicyDetailsHTML
                     + '</a>'
                     + '</div>';
                     }  */ else {
                        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                            matchedRadioButtonHTML = '<input type="radio" id=' + policyId + ' name="policyRadioValue"  class="id-policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                                    + '<label for=' + policyId + '>'
                            matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                                    + '<a href="javascrip:void(0)" class="snap matchandrelease bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + ' data-type="matchReleaseClaim">'
                                    + '<div>Match</div>'
                                    + hiddenPolicyDetailsHTML
                                    + '</a>'
                                    + '</div>';
                        } else {
                            matchedRadioButtonHTML = '<input type="radio" id=' + policyId + ' name="policyRadioValue"  class="id-policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                                    + '<label for=' + policyId + '>'
                            matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                                    + '<a href="javascrip:void(0)" class="snap matchandrelease bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + ' data-type="matchReleaseClaim">'
                                    + '<div>Match & Release Claim</div>'
                                    + hiddenPolicyDetailsHTML
                                    + '</a>'
                                    + '</div>';
                        }
                    }
                } else if (HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy != undefined && HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy == "Completed") {
                    if (matchedPolicyID == policyId) {
                        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                            matchedRadioButtonHTML = '<input type="radio" checked="checked" id=' + policyId + ' name="policyRadioValue" class="id-policyRadioValue"  style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                                    + '<label for=' + policyId + '>'
                            matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                                    + '<a href="javascrip:void(0)" class="selected-tab matchandrelease snap bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + ' data-type="matchReleaseClaim">'
                                    + '<div>Match</div>'
                                    + hiddenPolicyDetailsHTML
                                    + '</a>'
                                    + '</div>';
                        } else {
                            matchedRadioButtonHTML = '<input type="radio" checked="checked" id=' + policyId + ' name="policyRadioValue"  class="id-policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                                    + '<label for=' + policyId + '>'
                            matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                                    + '<a href="javascrip:void(0)" class="selected-tab matchandrelease snap bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + ' data-type="matchReleaseClaim">'
                                    + '<div>Match & Release Claim</div>'
                                    + hiddenPolicyDetailsHTML
                                    + '</a>'
                                    + '</div>';
                        }
                    } else {
                        if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                            matchedRadioButtonHTML = '<input type="radio" id=' + policyId + ' name="policyRadioValue"  class="id-policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                                    + '<label for=' + policyId + '>'
                            matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                                    + '<a href="javascrip:void(0)" class="snap matchandrelease bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + ' data-type="matchReleaseClaim">'
                                    + '<div>Match</div>'
                                    + hiddenPolicyDetailsHTML
                                    + '</a>'
                                    + '</div>';
                        } else {
                            matchedRadioButtonHTML = '<input type="radio" id=' + policyId + ' name="policyRadioValue" class="id-policyRadioValue"  style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                                    + '<label for=' + policyId + '>'
                            matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                                    + '<a href="javascrip:void(0)" class="snap matchandrelease bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + ' data-type="matchReleaseClaim">'
                                    + '<div>Match & Release Claim</div>'
                                    + hiddenPolicyDetailsHTML
                                    + '</a>'
                                    + '</div>';
                        }
                    }
                } else {
                    if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                        matchedRadioButtonHTML = '<input type="radio" id=' + policyId + ' name="policyRadioValue"  class="id-policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                                + '<label for=' + policyId + '>'
                        matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                                + '<a href="javascrip:void(0)" class="snap matchandrelease bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + ' data-type="matchReleaseClaim">'
                                + '<div>Match</div>'
                                + hiddenPolicyDetailsHTML
                                + '</a>'
                                + '</div>';
                    } else {
                        matchedRadioButtonHTML = '<input type="radio" id=' + policyId + ' name="policyRadioValue"  class="id-policyRadioValue" style="box-sizing: border-box;padding: 0.5px;-webkit-appearance: none;width: 18px;height: 18px;border: 0px solid darkgray; border-radius: 32px;outline: none;box-shadow: 0 0 1px 0px gray inset;"/>'
                                + '<label for=' + policyId + '>'
                        matchAndOrReleaseClaimHTML = '<div class="match-blk p-relative">'
                                + '<a href="javascrip:void(0)" class="snap matchandrelease bg-color-green block f-sz-12 opensans-light t-upper t-center p-relative f-color-w" id=' + policyId + ' data-type="matchReleaseClaim">'
                                + '<div>Match & Release Claim</div>'
                                + hiddenPolicyDetailsHTML
                                + '</a>'
                                + '</div>';
                    }
                }
            }

            /* else if(HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy != undefined && (HOMEPAGERESPONSE.COMMONUSERDETAILS.statusOfPolicy == "Matched" && HOMEPAGERESPONSE.COMMONUSERDETAILS.alertType == "policyalert")) {
             else {
             
             }
             } */
            var html = "";
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (insurencePolicyDetail.carrierDetails.carrierId == sessionStorage.ownerId) {
                    html = '<div class="insurance-policy-blk">'
                            + '<div class="policy-det-blk inline-block  v-align-mid" style="  margin-left: 5px;">'
                            + matchedRadioButtonHTML
                            + '<div class="p-relative insurance-main-det inline-block v-align-top">'
                            + '<div class="insurance-tit-blk" style="  margin-top: -4px;">'
                            + '<div id="id-carriername" class="inline-block opensans-regular bold" style="margin-left:10px;font-size: 18px;" >' + carrierName + ',&nbsp; </div>'
                            + '<div id="id-carrierno" class="f-sz-17	inline-block opensans-regular">#' + carrierPolicyNumber + '</div>'
                            + '</div>'
                            + '<div class="insurance-det-blk">'
                            + '<ul class="ins-sub-det-group f-sz-12 opensans-regular">'
                            + '<li class="t-left" style="margin-bottom:3px;width: 130%;">'
                            + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head opensans-italic" title="Due Amount" style="  margin-left: 15px;width: 92.4px;  color: #5e5b5b;">Due Amount</span>'
                            + '<span class="inline-block v-align-mid t-center" style="margin-right:10px;">:</span>'
                            + '<span class="t-left inline-block v-align-mid bold opensans-sbold" color: #262424;">$' + dueAmount + '</span>'
                            + '</li>'
                            + '<li class="t-left" style="margin-bottom:3px;width: 130%;">'
                            + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head opensans-italic" title="Next Due Date" style=" margin-left: 15px; color: #5e5b5b;">Next Due Date</span>'
                            + '<span class="inline-block v-align-mid t-center" style="width: 24px;">:</span>'
                            + '<span class="t-left inline-block v-align-mid bold opensans-sbold" style="color: #262424;">' + dueDateOfPolicy + '</span>'
                            + '</li>'
                            + '<li class="t-left" style="margin-bottom:3px;width: 130%;">'
                            + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head opensans-italic" title="Policy Type" style=" margin-left: 15px; color: #5e5b5b;margin-right: -2px;">Policy Type</span>'
                            + '<span class="inline-block v-align-mid t-center" style="margin-right:-21px;  width: 66px;">:</span>'
                            + '<span class="t-left inline-block v-align-mid bold opensans-sbold" style="color: #262424;">' + policyType + '</span>'
                            + '</li>' + '</ul></div>'
                            + '</div>'
                            + '</label>'
                            + '</div>'
                            + '<div class="policy-btn-blk inline-block p-relative v-align-mid" style="width:35%">'
                            + '<div class="p-relative f-sz-12 opensans-regular t-center">'
                            + '<div class="date-blk p-relative" style="margin-bottom:24px;font-style: italic;">'
                            + '<span class="opensans-italic">' + effectiveDateOfPolicy + '</span>'
                            + '<span class="opensans-sbold">to</span>'
                            + '<span class="opensans-italic">' + exipryDateOfPolicy + '</span>'
                            + '</div>'
                            + matchAndOrReleaseClaimHTML
                            + '</div>'
                            + '</div>'
                            + '</div>';
                } else {
                    html = "";
                }
            } else {
                html = '<div class="insurance-policy-blk">'
                        + '<div class="policy-det-blk inline-block  v-align-mid" style="  margin-left: 5px;">'
                        + matchedRadioButtonHTML
                        + '<div class="p-relative insurance-main-det inline-block v-align-top">'
                        + '<div class="insurance-tit-blk" style="  margin-top: -4px;">'
                        + '<div  id="id-carriername" class="inline-block opensans-regular bold" style="margin-left:10px;font-size: 18px;" >' + carrierName + ',&nbsp; </div>'
                        + '<div  id="id-carrierno" class="f-sz-17	inline-block opensans-regular">#' + carrierPolicyNumber + '</div>'
                        + '</div>'
                        + '<div class="insurance-det-blk">'
                        + '<ul class="ins-sub-det-group f-sz-12 opensans-regular">'
                        + '<li class="t-left" style="margin-bottom:3px;width: 130%;">'
                        + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head opensans-italic" title="Due Amount" style="  width: 92.4px; margin-left: 15px; color: #5e5b5b;">Due Amount</span>'
                        + '<span class="inline-block v-align-mid t-center" style="margin-right:10px;">:</span>'
                        + '<span class="t-left inline-block v-align-mid bold opensans-sbold" style="color: #262424;">$' + dueAmount + '</span>'
                        + '</li>'
                        + '<li class="t-left" style="margin-bottom:3px;width: 130%;">'
                        + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head opensans-italic" title="Next Due Date" style=" margin-left: 15px; color: #5e5b5b;">Next Due Date</span>'
                        + '<span class="inline-block v-align-mid t-center" style="width: 24px;">:</span>'
                        + '<span class="t-left inline-block v-align-mid bold opensans-sbold" style="color: #262424;">' + dueDateOfPolicy + '</span>'
                        + '</li>'
                        + '<li class="t-left" style="margin-bottom:3px;width: 130%;">'
                        + '<span class="f-italic t-left text-ellipsis inline-block v-align-mid ins-sub-head opensans-italic" title="Policy Type" style=" margin-left: 15px; color: #5e5b5b;margin-right: -2px;">Policy Type</span>'
                        + '<span class="inline-block v-align-mid t-center" style="margin-right:-21px;  width: 66px;">:</span>'
                        + '<span class="t-left inline-block v-align-mid bold opensans-sbold" style="color: #262424;">' + policyType + '</span>'
                        + '</li>' + '</ul></div>'
                        + '</div>'
                        + '</label>'
                        + '</div>'
                        + '<div class="policy-btn-blk inline-block p-relative v-align-mid" style="width:35%">'
                        + '<div class="p-relative f-sz-12 opensans-regular t-center">'
                        + '<div class="date-blk p-relative" style="margin-bottom:24px;font-style: italic;">'
                        + '<span class="opensans-italic">' + effectiveDateOfPolicy + '</span>'
                        + '<span class="opensans-sbold">to</span>'
                        + '<span class="opensans-italic">' + exipryDateOfPolicy + '</span>'
                        + '</div>'
                        + matchAndOrReleaseClaimHTML
                        + '</div>'
                        + '</div>'
                        + '</div>';
            }
            return html;
        }
    },
    carriers: {
        staticCarrierTemplate: function () {
            var html = '<div class="carrier-home-parent p-relative"><div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular"><div class="carrier-name t-caps t-center">way to safe</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>'
                    + '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular"><div class="carrier-name t-caps t-center">health plus</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>'
                    + '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular">'
                    + '<div class="carrier-name t-caps t-center">auto owners insurance</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>'
                    + '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular">'
                    + '<div class="carrier-name t-caps t-center">safe co insurance</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>'
                    + '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular">'
                    + '<div class="carrier-name t-caps t-center">IEE master corp</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>'
                    + '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular">'
                    + '<div class="carrier-name t-caps t-center">auto owner insurance</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div>'
                    + '<div class="carrier-profile-screen left border-all p-relative"><div class="carrier-logo p-relative  opensans-regular"><div class="carrierlogo-pic">'
                    + '<img src="http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" class="carrier-img-width"></div></div><div class="carrier-info bg-color-white p-relative carrier-groupblock  opensans-regular">'
                    + '<div class="carrier-name t-caps t-center">way to safe</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div>'
                    + '<div class="carrier-view p-relative  bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="viewcarrierfeedview">view</div></div></div></div>';
            return html;
        },
        staticCarrierFeedViewTemplate: function (Carrieremail) {

            console.log("bbb", Carrieremail);

//            resultCarrier = RESPONSE.users[0];
            for (var rc = 0; rc < AGENCY.CARRIERDATA.length; rc++) {
                var result = AGENCY.CARRIERDATA[rc];

                $.each(result, function (i, val) {

                    if (val.carrierId == Carrieremail) {
                        viewdata = val;
                    }
                });



            }

            if (viewdata.emailId.email == undefined) {
                var carrieremail = '';
            } else {
                var carrieremail = viewdata.emailId.email;
            }

            var name, address1, address2, state, city, number, mail;

            if (viewdata.carrierName == undefined) {
                name = "";
            } else {
                name = viewdata.carrierName;
            }
            if (viewdata.address == undefined) {
                address1 = "";
            } else {
                address1 = viewdata.address;
            }
            if (viewdata.address2 == "undefined") {
                address2 = "";
            } else {
                address2 = viewdata.address2;
            }
            if (viewdata.state == "undefined") {
                state = "";
            } else {
                state = viewdata.state;
            }
            if (viewdata.city == undefined) {
                city = "";
            } else {
                city = viewdata.city;
            }
            if (viewdata.phone.number == undefined) {
                number = "";
            } else {
                number = viewdata.phone.number;
            }
            if (viewdata.zip == undefined) {
                zip = "";
            } else {
                zip = viewdata.zip;
            }
            if (viewdata.facebookPage == undefined) {
                facebookPage = "#";
            } else {
                facebookPage = viewdata.facebookPage;
            }

            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="carrier-view-leftbloack inline-block v-align-mid p-relative"> <div class="carrier-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-caps">CARRIER ID :</div> <div class="carrier-view-id inline-block">' + viewdata.carrierId + '</div> </div> <div class="carrier-logo-view p-relative"> <div class="carrierlogo-viewpic"> <img src="' + HOMEPAGERESPONSE.PROFILEAPI + viewdata.carrierLogo + '" alt="" class="carrier-img-width"> </div> </div> <div class="carrier-view-social p-relative clr-fr"> <div class="carrier-view-website p-relative left bg-color-green"  style="cursor:pointer;"    onClick="window.open(\'' + viewdata.website.value + '\',\'_newtab\');"> <div class="p-relative inline-block v-align-top" style="margin-left: 11%;"> <div class="sprite-im pop-out" >&nbsp;</div> </div> <div class="carrier-website-name inline-block t-caps opensans-light "><a class="f-color-w" href="' + viewdata.website.value + '" target="_blank">WEBSITE</a></div> </div> <div class="carrier-view-facebook p-relative left bg-color-green" style="cursor:pointer;"  onClick="window.open(\'' + viewdata.facebookPage + '\',\'_newtab\');"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out" style="  margin-left: 30px">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-light f-color-w"><a class="f-color-w" href="' + facebookPage + '" target="_blank">FACEBOOK</a></div> </div> </div> </div> <div class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">agency name</div> '
                    + '<div class="carrier-left-content t-left right ">' + name + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div>'
                    + '<div class="carrier-left-content t-left right">' + address1 + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right ">' + address2 + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div>'
                    + '<div class="carrier-left-content t-left right">' + state + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> '
                    + '<div class="carrier-left-content t-left right ">' + city + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right">'
                    + '<a href="tel:' + viewdata.phone.number + '">' + number + '</a></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div>'
                    + '<div class="carrier-left-content t-left right ">' + zip + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">email</div> '
                    + '<div class="carrier-left-content t-left right"><a title=' + carrieremail.replace("\"\"", "") + '  href="mailto:' + carrieremail + '">' + carrieremail + '</a></div> </div> </div> </div> </div> </div> </div> '
            localStorage.setItem("TEMP_CARRIERNAME", viewdata.carrierName);
            var Omega = '\u003E';
            $("#id-carrierpage-headertext").text(Omega + "   " + viewdata.carrierName);
            // $('#id-carrierpage-headertext').prop(Omega + "   " + viewdata.carrierName);
            return html;
        }

    },
    customers: {
        staticCustomerTemplate: function () {
            var html = '<div class="customer-home-parent clr-fl p-relative"><div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">James jeo</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w  snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '<div class="customer-feed-screen clr-fl left border-all p-relative"><div class="customer-feed-info clr-fl p-relative">'
                    + '<div class="customer-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="customer-profile-info left  opensans-regular f-color-w p-relative">'
                    + '<div class="carrier-name t-caps t-center">Mano abram</div>'
                    + '<div class="carrier-location  t-caps t-center">location</div><div class="carrier-email t-center">carrier@mail.com</div></div><div class="customer-checkbox left"></div>'
                    + '</div><div class="customer-feed-view p-relative bg-color-green  t-caps t-center opensans-regular f-color-w snap" data-type="customerprofileviewfeed">View</div></div>'
                    + '</div>';
            return html;
        },
        staticHomeIndividulaViewTemplate: function (viewdata) {
            var firstname, address1, address2, city, state, zipcode, phone, preferredVendorId = "";
            var profilePicture = "";

            if (viewdata.name != undefined) {
                firstname = viewdata.name;
            } else {
                firstname = "";
            }

            if (viewdata.address != undefined) {
                address1 = viewdata.address;
            } else {
                address1 = "";
            }
            if (viewdata.address2 != undefined) {
                address2 = viewdata.address2;
            } else {
                address2 = "";
            }
            if (viewdata.city != undefined) {
                city = viewdata.city;
            } else {
                city = "";
            }
            if (viewdata.state != undefined) {
                state = viewdata.state;
            } else {
                state = "";
            }
            if (viewdata.zipcode != undefined) {
                zipcode = viewdata.zipcode;
            } else {
                zipcode = "";
            }
            if (viewdata.phone != undefined) {
                phone = viewdata.phone;
            } else {
                phone = "";
            }
            if (viewdata.preferredVendorId != undefined) {
                preferredVendorId = viewdata.preferredVendorId;
            } else {
                preferredVendorId = "";
            }
            var html = '<div class="carrier-view-parent bg-color-white p-relative"><div class="carrier-view-rightblock inline-block v-align-mid p-relative " style="width:100% !important;"> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left"> name</div> <div class="carrier-left-content t-left right ">' + firstname + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right">' + address1 + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right ">' + address2 + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div class="carrier-left-content t-left right">' + state + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div class="carrier-left-content t-left right ">' + city + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right">'
                    + '<a href="tel:' + phone + '">' + phone + '</a></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> '
                    + '<div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div class="carrier-left-content t-left right ">' + zipcode + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">preferred VendorId</div> '
                    + '<div class="carrier-left-content t-left right">' + preferredVendorId + '</div> </div> </div> </div> </div> </div> </div> ';

            var Omega = '\u003E';
            $("#id-customers-headername").text(Omega + "   " + firstname);
            localStorage.setItem("id-customers-headername", firstname);
            $(".pushmessage").css("display", "none");
            protocall.events.GlobalContainerScrollevent();
            return html;
        },
        staticAegnciesViewTemplate: function (viewdata) {
            var firstname, lastename, gender, occupation, dob, city, state, zipcode, email, phone = "";
            var profilePicture = "";
            if (viewdata.agencyName != undefined) {
                firstname = viewdata.agencyName;
            } else {
                firstname = "";
            }
            if (viewdata.zipcode != undefined) {
                zipcode = viewdata.zipcode;
            } else {
                if (viewdata.zip != undefined) {
                    zipcode = viewdata.zip;
                } else {
                    zipcode = "";
                }

            }
            if (viewdata.agencyLogo != undefined) {
                profilePicture = "https://proto-call-test.appspot.com/file/" + viewdata.agencyLogo;
            } else {
                profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
            }
            var dropdownHtml = "";
            if (localStorage.LoginType == undefined) {
                dropdownHtml = '<div id="id-customers-dropdown-parent" style="width: 235px;"><div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED REPS</div>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '</div><div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
            }
            if (localStorage.LoginType == 'Admin') {
                dropdownHtml = '<div id="id-customers-dropdown-parent" style="width: 235px;"><div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED REPS</div>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '</div><div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
            }
            if (localStorage.LoginType == 'Representatives') {
                dropdownHtml = '<div id="id-customers-dropdown-parent" style="width: 235px;"><div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED CARRIER</div>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:none;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '</div><div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
            }

            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Admin') {
                    dropdownHtml = '<div id="id-customers-dropdown-parent" style="width: 235px;"><div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED CUSTOMERS</div>'
                            + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                            + '</div><div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
                }
                if (localStorage.LoginType == 'Representatives') {
                    dropdownHtml = '<div id="id-customers-dropdown-parent" style="width: 235px;"><div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED CUSTOMERS</div>'
                            + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                            + '</div><div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
                }
            }
            if (viewdata.address2 == "undefined") {
                address2 = "";
            } else {
                address2 = viewdata.address2;
            }

            if (address2 == undefined) {
                address2 = "";
            }


            console.log("viewdataaa", viewdata);

            if (viewdata.website == undefined) {
                website = "#";
            } else {
                website = viewdata.website.value;
            }
            if (viewdata.facebookPage == undefined) {
                facebook = "#";
            } else {
                facebook = viewdata.facebookPage;
            }

            if (viewdata.phone == undefined) {
                phonenum = "#";
            } else {
                phonenum = viewdata.phone.number;
            }

            if (viewdata.emailId == undefined) {
                email = "#";
            } else {
                email = viewdata.emailId.email;
            }

            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="carrier-view-leftbloack inline-block v-align-mid p-relative"> <div class="carrier-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-caps">AGENCY ID :</div> <div class="carrier-view-id inline-block">' + viewdata.agencyId + '</div> </div> <div class="carrier-logo-view p-relative"> <div class="carrierlogo-viewpic"> <img src="' + profilePicture + '" alt="" class="carrier-img-width"> </div> </div> <div class="carrier-view-social p-relative clr-fr"> <div class="carrier-view-website p-relative left bg-color-green"  style="cursor:pointer;"    onClick="window.open(\'' + website + '\',\'_newtab\');"> <div class="p-relative inline-block v-align-top" style="margin-left: 11%;"> <div class="sprite-im pop-out" >&nbsp;</div> </div> <div class="carrier-website-name inline-block t-caps opensans-light ">'
                    + '<a class="f-color-w" href="' + website + '" target="_blank">WEBSITE</a></div> </div> <div class="carrier-view-facebook p-relative left bg-color-green" style="cursor:pointer;"  onClick="window.open(\'' + facebook + '\',\'_newtab\');"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out" style="  margin-left: 30px;">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-light f-color-w"><a class="f-color-w" href="' + facebook + '" target="_blank">FACEBOOK</a></div> </div> </div> </div> <div class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">agency name</div> <div class="carrier-left-content t-left right ">' + firstname + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right">' + viewdata.address + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> <div class="carrier-left-content t-left right ">' + address2 + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> <div class="carrier-left-content t-left right">' + viewdata.state + '</div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> <div class="carrier-left-content t-left right ">' + viewdata.city + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> <div class="carrier-left-content t-left right">'
                    + '<a href="tel:' + phonenum + '">' + phonenum + '</a></div> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div class="carrier-border-view clr-fl"> <div class="carrier-view-left p-relative left"> '
                    + '<div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> <div class="carrier-left-content t-left right ">' + zipcode + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">email</div> '
                    + '<div class="carrier-left-content t-left right"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div> </div> </div> </div> </div> </div> </div> ' + dropdownHtml;
            var Omega = '\u003E';
            $("#id-customers-headername").text(Omega + "   " + firstname);
            localStorage.setItem("id-customers-headername", firstname);
            $(".pushmessage").css("display", "none");
            protocall.events.GlobalContainerScrollevent();
            return html;
        },
        staticAgencyRepViewTemplate: function (data) {


            var firstname, lastename, gender, occupation, dob, city, state, zipcode, email, phone = "";
            var profilePicture = "";
            //undefined
            if (data.name != undefined) {
                firstname = data.name;
            } else {
                firstname = "";
            }
            if (data.lastName != undefined) {
                lastename = data.lastName;
            } else {
                lastename = "";
            }
            if (data.gender != undefined) {
                gender = data.gender;
            } else {
                gender = "";
            }
            if (data.occupation != undefined) {
                occupation = data.occupation;
            } else {
                occupation = "";
            }
            if (data.birthDate != undefined) {
                dob = data.birthDate;
            } else {
                dob = "";
            }
            if (data.residentialCity != undefined) {
                city = data.residentialCity;
            } else {
                city = "";
            }
            if (data.residentialState != undefined) {
                state = data.residentialState;
            } else {
                state = "";
            }
            if (data.residentialZipcode != undefined) {
                zipcode = data.residentialZipcode;
            } else {
                zipcode = "";
            }
            if (data.agencyRepresentativeId.email != undefined) {
                email = data.agencyRepresentativeId.email;
            } else {
                email = "";
            }
            var phoneHtml = "";
            try {
                if (data.customerRegistered == true) {
                    //phone = data.phone.number;
                    phoneHtml = "<a href=\"tel:" + data.customerRegistered + "\"><div class=\"sprite-im carrier-mobile-icon\" style=\"float:left;display:block;\">&nbsp;</div></a>";
                } else {
                    phone = "";
                    phoneHtml = "<div class=\"sprite-im carrier-mobile-icon\" style=\"float:left;display:none;\">&nbsp;</div>";
                }
            } catch (err) {
                phone = "";
                phoneHtml = "<div class=\"sprite-im carrier-mobile-icon\" style=\"float:left;display:none;\">&nbsp;</div>";
            }

            if (data.profilePicture != undefined) {
                profilePicture = "https://proto-call-test.appspot.com/file/" + data.profilePicture;
            } else {
                profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
            }

            var dropdownHtml = "";
            dropdownHtml = '<div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block"><option>ASSOCIATED CUSTOMERS</option></div>'
                    + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:none;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                    + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';

            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="customer-view-feed inline-block v-align-mid p-relative"> <div class="customer-logo-view p-relative"> <div class="customerlogo-viewpic"> <img src=' + profilePicture + ' alt="" class="carrier-img-width"> </div> </div> '
                    + '<div class="customer-view-name opensans-regular t-caps t-center p-relative">' + firstname + '</div>';
            html = html + '</div> <div id="id-carrier-view-rightblock" class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"  style="  margin-top: -1.8px;"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">first name</div> <div class="carrier-left-content t-left right ">' + firstname + '</div> '
                    + '</div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">last name</div> <div class="carrier-left-content t-left right">' + lastename + '</div> <div class="customer-view-mbapp p-relative inline-block v-align-top right" style="  margin-top: -18px;"> '
                    + phoneHtml + '</div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">gender</div> <div class="carrier-left-content t-left right ">' + gender + '</div>'
                    + '</div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">occupation</div> <div class="carrier-left-content t-left right">' + occupation + '</div> '
                    + '</div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">year of birth</div>'
                    + '<div class="carrier-left-content t-left right ">' + dob + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">residential city</div> <div class="carrier-left-content t-left right">' + city + '</div>'
                    + '</div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">residential state</div> '
                    + '<div class="carrier-left-content t-left right t-upper ">' + state + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">residential zipcode</div>'
                    + '<div class="carrier-left-content t-left right">' + zipcode + '</div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right t-caps left">email</div> '
                    + '<div class="carrier-left-content t-left right"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> '
                    + '<div class="carrier-left-content t-left right" style="><a href="tel:' + phone + '">' + phone + '</a></div> </div> </div> </div> </div> <div class="customer-view-button p-relative" > <div style="display:none;" class="customer-view-policy inline-block t-caps t-center opensans-regular">policies</div> <div class="customer-policy-button p-relative inline-block bg-color-green t-caps t-center opensans-light f-color-w snap " data-type="dt-propertypolicy" id="showPolicies" style="display:none;">Show Policies</div></div> </div> </div> <div class="associated-carrierview p-relative"> <div class="p-relative "  > '
                    + dropdownHtml;

            var Omega = '\u003E';
            $(".sub-menu-text").text("MY REPS " + "     " + Omega + "   " + firstname);

            return html;
        },
        staticCustomerViewTemplate: function (data) {

            var firstname, lastename, gender, occupation, dob, city, state, zipcode, email, phone = "";
            var profilePicture = "";
            //undefined
            if (data.firstName != undefined) {
                firstname = data.firstName;
            } else {
                firstname = "";
            }
            if (data.lastName != undefined) {
                lastename = data.lastName;
            } else {
                lastename = "";
            }
            if (data.gender != undefined) {
                gender = data.gender;
            } else {
                gender = "";
            }
            if (data.occupation != undefined) {
                occupation = data.occupation;
            } else {
                occupation = "";
            }
            if (data.birthDate != undefined) {
                dob = data.birthDate;
            } else {
                dob = "";
            }
            if (data.residentialCity != undefined) {
                city = data.residentialCity;
            } else {
                city = "";
            }
            if (data.residentialState != undefined) {
                state = data.residentialState;
            } else {
                state = "";
            }
            if (data.residentialZipcode != undefined) {
                zipcode = data.residentialZipcode;
            } else {
                zipcode = "";
            }
            try {
                if (data.emailId.email != undefined) {
                    email = data.emailId.email;
                } else {
                    email = "";
                }
            } catch (error) {
                email = "";
            }
            /* if (data.emailId.email != undefined) {
             email = data.emailId.email;
             } else {
             email = "";
             } */
            var phoneHtml = "";
            try {
                if (data.customerRegistered == true) {
                    phone = data.customerRegistered;
                    phoneHtml = "<a href=\"tel:" + data.customerRegistered + "\"><div class=\"sprite-im carrier-mobile-icon\" style=\"float:left;display:block;\">&nbsp;</div></a>";
                } else {
                    phone = "";
                    phoneHtml = "<div class=\"sprite-im carrier-mobile-icon\" style=\"float:left;display:none;\">&nbsp;</div>";
                }
            } catch (err) {
                phone = "";
                phoneHtml = "<div class=\"sprite-im carrier-mobile-icon\" style=\"float:left;display:none;\">&nbsp;</div>";
            }

            if (data.profilePicture != undefined) {
                profilePicture = "https://proto-call-test.appspot.com/file/" + data.profilePicture;
            } else {
                profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
            }

            var dropdownHtml = "";
            if (localStorage.LoginType == undefined) {
                dropdownHtml = '<div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED REPS</div>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
            }
            if (localStorage.LoginType == 'Admin') {
                dropdownHtml = '<div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block" style="cursor:pointer;">ASSOCIATED REPS</div>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
            }
            if (localStorage.LoginType == 'Representatives') {
                dropdownHtml = '<div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED REPS</div>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
//                dropdownHtml = '<div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED CARRIER</div>'
//                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:none;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
//                        + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
            }
            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Representatives') {
                    dropdownHtml = '<div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED AGENCIES</div>'
                            + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:none;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                            + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
                }
                if (localStorage.LoginType == 'Admin') {
                    dropdownHtml = '<div id="id-customers-dropdown1" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED REPS</div>'
                            + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:block;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                            + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';
                }
            }

            var html = '<div class="carrier-view-parent bg-color-white p-relative"> <div class="customer-view-feed inline-block v-align-mid p-relative"> <div class="customer-logo-view p-relative"> <div class="customerlogo-viewpic" style="background-image : url(' + profilePicture + ');background-position:center;background-size:cover;"> <img src=' + profilePicture + ' alt="" style="display:none;"> </div> </div> '
                    + '<div class="customer-view-name opensans-regular t-caps t-center p-relative">' + firstname + '</div>';

            if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                if (localStorage.LoginType == 'Representatives') {
                    html += "<div class=\"sprite-im carrier-mobile-icon\" style=\"    margin-left: 30%;    margin-top: -17px;\"></div>";
                    phoneHtml = "";
                }

            } else if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                if (localStorage.LoginType == 'Representatives') {
                    html += "<div class=\"sprite-im carrier-mobile-icon\" style=\"    margin-left: 30%;    margin-top: -17px;\"></div>";
                    phoneHtml = "";
                }
            }

            html += '</div> <div id="id-carrier-view-rightblock" class="carrier-view-rightblock inline-block v-align-mid p-relative "> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"  style="  margin-top: -1.8px;"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">first name</div> <div class="carrier-left-content t-left right ">' + firstname + '</div> '
                    + '</div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">last name</div> <div class="carrier-left-content t-left right">' + lastename + '</div> <div class="customer-view-mbapp p-relative inline-block v-align-top right" style="  margin-top: -18px;"> '
                    + phoneHtml + '</div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">gender</div> <div class="carrier-left-content t-left right ">' + gender + '</div>'
                    + '</div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">occupation</div> <div class="carrier-left-content t-left right">' + occupation + '</div> '
                    + '</div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">year of birth</div>'
                    + '<div class="carrier-left-content t-left right ">' + dob + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">residential city</div> <div class="carrier-left-content t-left right">' + city + '</div>'
                    + '</div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">residential state</div> '
                    + '<div class="carrier-left-content t-left right t-upper ">' + state + '</div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">residential zipcode</div>'
                    + '<div class="carrier-left-content t-left right">' + zipcode + '</div> </div> </div> </div> </div> <div class="customer-view-block p-relative "> <div class="customer-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right t-caps left">email</div> '
                    + '<div class="carrier-left-content t-left right"><a title=' + email + ' href="mailto:' + email + '">' + email + '</a></div> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> '
                    + '<div class="carrier-left-content t-left right"><a href="tel:' + phone + '">' + phone + '</a></div> </div> </div> </div> </div> <div class="customer-view-button p-relative" > <div class="customer-view-policy inline-block t-caps t-center opensans-regular">policies</div> <div class="customer-policy-button p-relative inline-block bg-color-green t-caps t-center opensans-light f-color-w snap " data-type="dt-propertypolicy" id=' + data.userId + '  >Show Policies</div></div> </div> </div> <div class="associated-carrierview p-relative"> <div id="id-customers-dropdown-parent"  style="width: 230px;"  class="p-relative "  > '
                    + dropdownHtml;

            var Omega = '\u003E';
            $("#id-customers-headername").text(Omega + "   " + firstname);
            localStorage.setItem("id-customers-headername", firstname);
            $(".pushmessage").css("display", "none");
            return html;
        },
        staticSettingsTemplate: function (data) {
            var html = "";
            var website = "";
            var faceBook = "";
            var editButtonHTML = "";

            if (localStorage.getItem("LOGIN_LABEL") == "Carriers") {
                /* if (localStorage.LoginType == 'Admin') {
                 editButtonHTML = '<div class="settings-edit-bar right inline-block p-relative bg-color-green snap" data-type="agency-edit-load" style="display:none;"><div class="p-relative inline-block"> <div class="edit-icon sprite-im" style="margin-top:7px !important;">&nbsp;</div> </div><div class="p-relative inline-block t-caps t-right opensans-light f-color-w" style="margin-left: 25px;"> <a id="id-carrier-edits" class="f-color-w" href="javascript:void(0)" >edit</a></div></div><div class="removevendor-bar right inline-block p-relative bg-color-green snap" data-type="agency-remove-load" style="display:none"> <div class="p-relative inline-block"> <div class="remove-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-light f-color-w"><a class="f-color-w" href="javascript:void(0)"  >remove</a></div> </div> <div class="addvendor-bar right inline-block p-relative bg-color-green snap" data-type="agency-addvendor-load" style="display:none"> <div class="p-relative inline-block"> <div class="add-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"><a class="f-color-w" href="javascript:void(0)"  >add vendor</a></div></div></div>';
                 } else {
                 editButtonHTML = "";
                 } */
                try {
                    if (data.resultMap.carrierDetails.website.value == undefined) {
                        website = "";
                    } else {
                        website = data.resultMap.carrierDetails.website.value;
                    }
                } catch (err) {

                }

                try {
                    if (data.resultMap.carrierDetails.facebookPage == undefined) {
                        faceBook = "";
                    } else {
                        faceBook = data.resultMap.carrierDetails.facebookPage;
                    }
                } catch (err) {

                }

                var address = "", address2 = "";
                if (data.resultMap.carrierDetails.address != "undefined") {
                    address = data.resultMap.carrierDetails.address;
                }

                if (data.resultMap.carrierDetails.address2 != "undefined") {
                    address2 = data.resultMap.carrierDetails.address2;
                }
                if (address == "undefined") {
                    address = "";
                }

                if (address2 == "undefined") {
                    address2 = "";
                }

                var carrierAgencyId = "";

                if (data.resultMap.carrierDetails.carrierId != "undefined") {
                    carrierAgencyId = data.resultMap.carrierDetails.carrierId;
                }

                var roadSideNumber = "";
                try {
                    if (data.resultMap.carrierDetails.roadsideAssistanceNumber.number != undefined) {
                        roadSideNumber = data.resultMap.carrierDetails.roadsideAssistanceNumber.number;
                    }
                } catch (e) {

                }
                html = ' <form id="carrier-form"> <div class="settings-click-button clr-fl"><div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div> <div class="settings-agency-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" id="id-agency-view-load" data-type="agency-view-load" >CARRIER</a></div> <div class="settings-vendor-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" id="id-preferred-vendors-view-load" data-type="preferred vendors-view-load" >PREFERRED VENDORS</a></div>'
                        + '<div class="settings-edit-bar right inline-block p-relative bg-color-green snap" data-type="agency-edit-load" style="display:none;"><div class="p-relative inline-block"> <div class="edit-icon sprite-im" style="margin-top:7px !important;">&nbsp;</div> </div><div class="p-relative inline-block t-caps t-right opensans-light f-color-w" style="margin-left: 25px;"> <a id="id-carrier-edits" class="f-color-w" href="javascript:void(0)" >edit</a></div></div><div class="removevendor-bar right inline-block p-relative bg-color-green snap" data-type="agency-remove-load" style="display:none"> <div class="p-relative inline-block"> <div class="remove-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-light f-color-w"><a class="f-color-w" href="javascript:void(0)"  >remove</a></div> </div> <div class="addvendor-bar right inline-block p-relative bg-color-green snap" data-type="agency-addvendor-load" style="display:none"> <div class="p-relative inline-block"> <div class="add-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"><a class="f-color-w" href="javascript:void(0)"  >add vendor</a></div></div></div>'
                        + '<div class="bg-color-white"><div class="agency-view-block"><div class="settings-view-leftblock inline-block v-align-mid p-relative"> <div class="settings-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-upper">Carrier id</div> '
                        + '<div class="carrier-view-id inline-block">' + data.resultMap.carrierDetails.carrierId + '</div> </div> <div class="settings-logo-view p-relative"> '
                        + '<div class="settingslogo-viewpic"> <img id="id-agencypic" src= ' + ((data.resultMap.carrierDetails.carrierLogo != undefined) ? 'http://2-dot-proto-call-test.appspot.com/file/' + data.resultMap.carrierDetails.carrierLogo : 'http://www.sdpb.org/s/photogallery/img/no-image-available.jpg') + '  alt="" class="carrier-img-width" style="height: auto;"> <div id="id-edit-agency-pic" class=\"edit-agency-pic p-absolute anim bg-color-red f-color-w snap\" data-type=\"editAgencyPic\" style=\"display: none;\"> <div class=\"p-relative t-center\" style=\" margin-left: -9px;\"> <div class=\"sprite-im Edit-icon inline-block v-align-mid\"> &nbsp; </div><div class=\"inline-block f-sz-12 v-align-mid opensans-regular \"> Edit </div></div></div></div> </div> <div class="settings-view-social p-relative clr-fr"> <div class="settings-view-website p-relative left bg-color-green"  style="cursor:pointer;"  onClick="window.open(\'' + website + '\',\'_newtab\');"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out" >&nbsp;</div> </div> '
                        + '<div class="carrier-website-name inline-block t-caps opensans-light f-color-w t-center"><a target="_blank" href="' + website + '" class="f-color-w">WEBSITE</a></div> </div> <div class="settings-view-facebook p-relative left bg-color-green" style="cursor:pointer;"  onClick="window.open(\'' + faceBook + '\',\'_newtab\');"> <div class="p-relative inline-block v-align-top" style="margin-left:10px;"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-light f-color-w t-center"><a target="_blank" href="' + faceBook + '" class="f-color-w">FACEBOOK</a></div> </div> </div> </div> <div class="settings-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">carrier  id</div> '
                        + '<div id="id-c-agencyid" class="carrier-left-content t-left right " style="visibility: visible"></div> <input id="id-carrier-agencyid" class="carrier-left-content-textbox t-left right p-absoalute" type="text" value="" style="visibility: hidden;margin-right:11%;"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">Master Carrier id</div> '
                        + '<div class="carrier-left-content t-left right" id="id-c-masteragencyid" title=' + carrierAgencyId + ' style="visibility: visible">' + carrierAgencyId + '</div> <input id="id-carrier-masteragencyid" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden" readonly> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">Carrier Type</div> '
                        + '<div id="id-c-agencytype" class="carrier-left-content t-left right " style="visibility: visible"></div> '
                        + '<select id="id-carrier-agencytype" class="carrier-left-content-textbox t-left right p-absolute" style="visibility: hidden"><option>Master Type</option><option>Branch</option></select> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">name</div> '
                        + '<div id="id-c-agencyname" class="carrier-left-content t-left right" style="visibility: visible">' + data.resultMap.carrierDetails.carrierName + '</div> <input id="id-carrier-agencyname" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                        + '<div id="id-c-agencyaddress1" class="carrier-left-content t-left right " style="visibility: visible">' + address + '</div> <input id="id-carrier-agencyaddress1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                        + '<div id="id-c-agencyaddress2" class="carrier-left-content t-left right" style="visibility: visible">' + address2 + '</div> <input id="id-carrier-agencyaddress2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> '
                        + '<div id="id-c-agencycity" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.carrierDetails.city + '</div> <input id="id-carrier-agencycity" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> '
                        + '<div id="id-c-agencystate" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.resultMap.carrierDetails.state + '</div> <input id="id-carrier-agencystate" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> '
                        + '<div id="id-c-agencyzip" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.carrierDetails.zip + '</div> <input id="id-carrier-agencyzipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> '
                        + '<div id="id-c-agencyphone" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.resultMap.carrierDetails.phone.number + '</div> <input id="id-carrier-agencyphone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div>'

                        + '<div class=\"carrier-view-block p-relative \"> <div id=\"id-carrier-border-view\" class=\"carrier-border-view border-bot clr-fl\"> <div class=\"carrier-view-left p-relative left\" style="  width: 50%;"> <div class=\"carrier-left-width t-caps opensans-regular clr-fl\"> <div class=\"carrier-left-title t-right left\">Website</div><div id=\"id-c-agencywebsite\" class=\"carrier-left-content t-left right \" style=\"visibility: visible\">' + website + '</div><input id=\"id-carrier-agencywebsite\" class=\"carrier-left-content-textbox t-left right p-absolute\" type=\"text\" value=\"\" style=\"visibility: hidden\"> </div></div><div class=\"carrier-view-right right t-caps opensans-regular\"> <div class=\"carrier-left-width clr-fl\"> <div class=\"carrier-left-title t-right left\">Facebook</div>'
                        + '<div id=\"id-c-agencyfacebook\" class=\"carrier-left-content t-left right t-upper\" style=\"visibility: visible\">' + faceBook + '</div><input id=\"id-carrier-agencyfacebook\" class=\"carrier-left-content-textbox t-left right p-absolute\" type=\"text\" value=\"\" style=\"visibility: hidden\"> </div></div></div></div>'
                        + '<div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right left t-caps">email</div>'
                        + '<div id="id-c-agencyemail" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.carrierDetails.emailId.email + '</div> <input id="id-carrier-agencyemail" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> '
                        + '</div>'
                        + '<div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right left t-caps">Roadside Assistance Number</div>'
                        + '<div id="id-c-agencyroadside" class="carrier-left-content t-left right " style="visibility: visible">' + roadSideNumber + '</div> <input id="id-carrier-agencyroadside" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> '
                        + '</div>'

                        + '</div></div> '
                        + '</div></div>'
                        + '<div class="preferred-vendor-block inline-block v-align-mid p-relative clr-fl">'
                        + '<div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-upper opensans-regular "> <div id ="id-vendornamebox" class="carrier-left-title t-upper t-left inline-block " style="text-align: left;margin-left: 4%;color:black">name</div> '
                        + '<div id ="id-vendortypebox" class="carrier-left-title t-right inline-block" style="color:black">type</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-upper opensans-regular"> <div class="carrier-left-title t-left inline-block" style="color:black;text-align:left;width:45%;">phone</div> <div class="carrier-left-title t-right inline-block" style="color:black;width: 45%;text-align:left;">state,city</div> </div> </div> </div>';

                if (data.resultMap.listOfPreferredVendor[0].preferredVendorId == undefined) {
                    html += "<div>There were no preferredVendor for this carrier</div>";
                } else {
                    for (var index = 0; index < data.resultMap.listOfPreferredVendor.length; index++) {

                        html += '<div id="item_' + index + '" class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular ">'
                                + '<input type="checkbox" id="removevendor_' + index + '" value=' + data.resultMap.listOfPreferredVendor[index].preferredVendorId + ' class="checkbox remove-vendor"> <label for="removevendor_' + index + '" class="vendor-label" style="display:none;"></label>'
                                + '<div id="id-prefeeredvendorbox" class="carrier-left-title t-left inline-block " style="margin-left: 29px;  text-align: left;width:45% !important;">'
                                + '<a id=' + data.resultMap.listOfPreferredVendor[index].preferredVendorId + ' class="preferredvendor snap name-color" href="javascript:void(0)" data-type="vendor-profile-info" >' + data.resultMap.listOfPreferredVendor[index].name + '</a></div> '
                                + '<div id="id-vendortypebox" class="carrier-left-title t-right inline-block" margin-left:-10px;>' + data.resultMap.listOfPreferredVendor[index].serviceType + '</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-caps opensans-regular"> '
                                + '<div class="carrier-left-title t-left inline-block"  style="text-align: left;width: 45%;"><a href="tel:' + data.resultMap.listOfPreferredVendor[index].phone + '">' + (data.resultMap.listOfPreferredVendor[index].phone).replace(/(\d\d\d)\s*(\d\d\d)\s*(.*?)$/, '$1-$2-$3') + '</a></div> '
                                + '<div class="carrier-left-title t-right inline-block" style="text-align:left;">' + data.resultMap.listOfPreferredVendor[index].city + "," + data.resultMap.listOfPreferredVendor[index].state + '</div> </div> </div> </div> ';
                    }
                }

                //}
            } else if (localStorage.getItem("LOGIN_LABEL") == "Agency") {
                if (localStorage.LoginType == 'Admin') {
                    var agencyTypeValue = "";
                    editButtonHTML = '<div class=\"settings-edit-bar right inline-block p-relative bg-color-green snap\" data-type=\"agency-edit-load\" style=\"display: block;\"><div class=\"p-relative inline-block\"> <div class=\"edit-icon sprite-im\" style="margin-top:7px !important;">&nbsp;</div></div><div class=\"p-relative inline-block t-caps t-right opensans-light f-color-w\" style=\"margin-left: 25px;\"> <a id=\"id-carrier-edit\" class=\"f-color-w\" href=\"javascript:void(0)\">Edit</a></div></div>'
                            + '<div id="id-canecelbutton" class="settings-edit-bar right inline-block p-relative bg-color-green snap" data-type="" style="margin-right: 8px;display:none;"><div class="p-relative inline-block"> <div class="edit-icon sprite-im" style="display:none;">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-light f-color-w" style="margin-left: 25px;  margin-top: 9px;"> <a id="" class="f-color-w" href="javascript:void(0)" >Cancel</a></div>'
                            + '</div><div id="id-editremovebar" class="removevendor-bar right inline-block p-relative bg-color-green snap" data-type="agency-remove-load"> <div class="p-relative inline-block"> <div class="remove-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-light f-color-w"><a id="id-preffervendoreditremovebar" class="f-color-w" href="javascript:void(0)"  >Edit</a></div> </div> <div class="addvendor-bar right inline-block p-relative bg-color-green snap" data-type="agency-addvendor-load"> <div class="p-relative inline-block"> <div class="add-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-light f-color-w"><a class="f-color-w" href="javascript:void(0)"  >add vendor</a></div></div></div>';
                } else {
                    editButtonHTML = "";
                }
                try {
                    if (data.resultMap.agencyDetails.website.value == undefined) {
                        website = "";
                    } else {
                        website = data.resultMap.agencyDetails.website.value;
                    }
                } catch (err) {

                }

                try {
                    if (data.resultMap.agencyDetails.facebookPage == undefined) {
                        faceBook = "";
                    } else {
                        faceBook = data.resultMap.agencyDetails.facebookPage;
                    }
                } catch (err) {

                }
                if (data.resultMap.agencyDetails.color != undefined) {
                    RESPONSE.BACKGROUNDCOLORVALUE = data.resultMap.agencyDetails.color;
                } else {
                    console.log("no color");
                }
                if (data.resultMap.agencyDetails.themeColor != undefined) {
                    RESPONSE.THEMECOLOR = data.resultMap.agencyDetails.themeColor;
                } else {
                    console.log("no color");
                }
                if (data.resultMap.agencyDetails.frameColor != undefined) {
                    RESPONSE.FRAMECOLOR = data.resultMap.agencyDetails.frameColor;
                } else {
                    console.log("no color");
                }
                var address2 = "";

                if (data.resultMap.agencyDetails.address2 != undefined) {
                    address2 = data.resultMap.agencyDetails.address2;
                }

                if (address2 == "undefined") {
                    address2 = "";
                }

                var carrierAgencyId = "";

                if (data.resultMap.agencyDetails.carrierAgencyId != "undefined") {
                    carrierAgencyId = data.resultMap.agencyDetails.carrierAgencyId;
                }

                var agencyEmailId = "";
                try {
                    if (data.resultMap.agencyDetails.emailId.email != "undefined") {
                        agencyEmailId = data.resultMap.agencyDetails.emailId.email;
                    }
                } catch (e) {

                }
                if (data.resultMap.agencyDetails.agencyType != undefined) {
                    agencyTypeValue = data.resultMap.agencyDetails.agencyType;
                } else {
                    agencyTypeValue = "";
                }
                html = ' <form id="carrier-form"> <div class="carrier-view-parent p-relative"> <div class="app-link t-upper opensans-regular p-relative opensans-sbold">app download link</div> <div class="app-parent p-relative"> '
                        + '<div class="app-download-bar inline-block p-relative bg-color-white">' + data.resultMap.appDownloadLink + '</div> <div class="send-app-bar inline-block p-relative border-all bg-color-green t-caps t-center opensans-light f-color-w snap"  data-type="sendapplink" ><a class="f-color-w" href="javascript:void(0)" >send app link</a></div> </div> <div class="settings-click-button clr-fl"><div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div> <div class="settings-agency-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" id="id-agency-view-load" data-type="agency-view-load" >AGENCY</a></div> <div class="settings-vendor-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" id="id-preferred-vendors-view-load" data-type="preferred vendors-view-load" >PREFERRED VENDORS</a></div>'
                        + editButtonHTML
                        + '<div class="bg-color-white"><div class="agency-view-block"><div class="settings-view-leftblock inline-block v-align-mid p-relative"> <div class="settings-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-upper">agency id</div> '
                        + '<div class="carrier-view-id inline-block">' + data.resultMap.agencyDetails.agencyId + '</div> </div> <div class="settings-logo-view p-relative"> '
                        + '<div class="settingslogo-viewpic"> <img id="id-agencypic"  src= ' + ((data.resultMap.agencyDetails.agencyLogo != undefined) ? 'http://2-dot-proto-call-test.appspot.com/file/' + data.resultMap.agencyDetails.agencyLogo : 'http://www.sdpb.org/s/photogallery/img/no-image-available.jpg') + '   alt="" class="carrier-img-width" style="height: auto;"> <div id="id-edit-agency-pic" class=\"edit-agency-pic p-absolute anim bg-color-red f-color-w snap\" data-type=\"editAgencyPic\" style=\"display: none;\"> <div class=\"p-relative t-center\" style=\" margin-left: -9px;\"> <div class=\"sprite-im Edit-icon inline-block v-align-mid\"> &nbsp; </div><div class=\"inline-block f-sz-12 v-align-mid opensans-regular \"> Edit </div></div></div></div> </div> <div class="settings-view-social p-relative clr-fr"> <div class="settings-view-website p-relative left bg-color-green"  style="cursor:pointer;"  onClick="window.open(\'' + website + '\',\'_newtab\');"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out" >&nbsp;</div> </div> '
                        + '<div class="carrier-website-name inline-block t-caps opensans-light f-color-w t-center"><a target="_blank" href="' + website + '" class="f-color-w">WEBSITE</a></div> </div> <div class="settings-view-facebook p-relative left bg-color-green"  style="cursor:pointer;"  onClick="window.open(\'' + faceBook + '\',\'_newtab\');"> <div class="p-relative inline-block v-align-top" style="margin-left:10px;"> <div class="sprite-im pop-out">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-light f-color-w t-center"><a target="_blank" href="' + faceBook + '" class="f-color-w">FACEBOOK</a></div> </div> </div> </div> <div class="settings-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">carrier Agency ID</div> '
                        + '<div id="id-c-agencyid" class="carrier-left-content t-left right " style="visibility: visible">' + carrierAgencyId + '</div> <input id="id-carrier-agencyid" class="carrier-left-content-textbox t-left right p-absoalute" type="text" value="" style="visibility: hidden;margin-right:11%;"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">master agency ID</div> '
                        + '<div class="carrier-left-content t-left right" id="id-c-masteragencyid" title=' + data.resultMap.agencyDetails.agencyId + ' style="visibility: visible">' + data.resultMap.agencyDetails.agencyId + '</div> <input id="id-carrier-masteragencyid" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden" readonly> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">agency type</div> '
                        + '<div id="id-c-agencytype" class="carrier-left-content t-left right " style="visibility: visible">' + agencyTypeValue + '</div> '
                        + '<select id="id-carrier-agencytype" class="carrier-left-content-textbox t-left right p-absolute" style="visibility: hidden"><option>Master Type</option><option>Branch</option></select></div> </div> <div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">name</div> '
                        + '<div id="id-c-agencyname" class="carrier-left-content t-left right" style="visibility: visible">' + data.resultMap.agencyDetails.agencyName + '</div> <input id="id-carrier-agencyname" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                        + '<div id="id-c-agencyaddress1" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.address + '</div> <input id="id-carrier-agencyaddress1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                        + '<div id="id-c-agencyaddress2" class="carrier-left-content t-left right" style="visibility: visible">' + address2 + '</div> <input id="id-carrier-agencyaddress2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> '
                        + '<div id="id-c-agencycity" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.city + '</div> <input id="id-carrier-agencycity" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> '
                        + '<div id="id-c-agencystate" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.resultMap.agencyDetails.state + '</div> <input id="id-carrier-agencystate" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative " > <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> '
                        + '<div id="id-c-agencyzip" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.agencyDetails.zipcode + '</div> <input id="id-carrier-agencyzipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> '
                        + '<div id="id-c-agencyphone" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.resultMap.agencyDetails.phone.number + '</div> <input id="id-carrier-agencyphone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> '

                        + '<div class=\"carrier-view-block p-relative \"> <div id=\"id-carrier-border-view\" class=\"carrier-border-view border-bot clr-fl\"> <div class=\"carrier-view-left p-relative left\" style="  width: 50%;"> <div class=\"carrier-left-width t-caps opensans-regular clr-fl\"> <div class=\"carrier-left-title t-right left\">Website</div><div id=\"id-c-agencywebsite\" class=\"carrier-left-content t-left right \" style=\"visibility: visible\">' + website + '</div><input id=\"id-carrier-agencywebsite\" class=\"carrier-left-content-textbox t-left right p-absolute\" type=\"text\" value=\"\" style=\"visibility: hidden\"> </div></div><div class=\"carrier-view-right right t-caps opensans-regular\" style="width: 50%;"> <div class=\"carrier-left-width clr-fl\"> <div class=\"carrier-left-title t-right left\">Facebook</div>'
                        + '<div id=\"id-c-agencyfacebook\" class=\"carrier-left-content t-left right t-upper\" style=\"visibility: visible\">' + faceBook + '</div><input id=\"id-carrier-agencyfacebook\" class=\"carrier-left-content-textbox t-left right p-absolute\" type=\"text\" value=\"\" style=\"visibility: hidden\"> </div></div></div></div>'
                        + '<div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right left t-caps">email</div>'

                        + '<div id="id-c-agencyemail" class="carrier-left-content t-left right " style="visibility: visible">' + agencyEmailId + '</div> <input id="id-carrier-agencyemail" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl" style="height:31px;"> <div class="carrier-left-title t-right left">Background Color</div> <div class="carrier-left-content t-left right t-upper" style="margin-top:-4px;margin-right:0px;" ><div class=' + ((data.resultMap.agencyDetails.color != undefined) ? data.resultMap.agencyDetails.color : "#E8423E") + '  id="color_Name" style="width:187px;height:31px;background-color:' + ((data.resultMap.agencyDetails.color != undefined) ? data.resultMap.agencyDetails.color : "#E8423E") + '"  /></div></div> </div> </div> </div>'
                        + '<div class="carrier-view-block p-relative ">'
                        + '<div id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl" style="  float: left;  width: 66%;">'
                        + '<div class="carrier-view-left p-relative left" style="  margin-left: 71px;">'
                        + '<div class="carrier-left-width t-caps opensans-regular clr-fl" style="height:31px;">'
                        + '<div class="carrier-left-title t-right left">Emergency Popup Color</div>'
                        + '<div id="themeColorValue" class="carrier-left-content t-left right " style="visibility: visible"><div  id="theme_color_value" style="width:187px;height:31px;margin-top:-4px;background-color: ' + ((data.resultMap.agencyDetails.themeColor != undefined) ? data.resultMap.agencyDetails.themeColor : "#9C2C2A") + '"  class = ' + ((data.resultMap.agencyDetails.themeColor != undefined) ? data.resultMap.agencyDetails.themeColor : "#9C2C2A") + ' /></div></div>'
                        + '</div>'
                        + '</div>'
                        + '<div class="carrier-view-right right t-caps opensans-regular" style="width: 32%;float: left;">'
                        + '<div class="carrier-left-width clr-fl" style="height:31px;  padding: 16px;margin-left: -106px;">'
                        + '<div class="carrier-left-title t-right left">CardDetails Color</div>'
                        + '<div id="frameColorValue" class="carrier-left-content t-left right t-upper" style="visibility: visible"><div  id="frame_color_value" style="width:187px;height:31px;margin-top:-4px;background-color:' + ((data.resultMap.agencyDetails.frameColor != undefined) ? data.resultMap.agencyDetails.frameColor : "#C63B31") + '"  class = ' + ((data.resultMap.agencyDetails.frameColor != undefined) ? data.resultMap.agencyDetails.frameColor : "#C63B31") + ' /></div></div>'
                        + '</div>'
                        + '</div>'
                        + '</div>'
                        + '</div>'
                        + '</div></div>'
                        + '<div class="preferred-vendor-block inline-block v-align-mid p-relative clr-fl">'
                        + '<div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-upper opensans-regular "> <div id ="id-vendornamebox" class="carrier-left-title t-upper t-left inline-block " style="text-align: left;margin-left: 4%;color:black">name</div> '
                        + '<div id ="id-vendortypebox" class="carrier-left-title t-right inline-block" style="color:black">type</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-upper opensans-regular"> <div class="carrier-left-title t-left inline-block" style="color:black;text-align:left;width:45%;">phone</div> <div class="carrier-left-title t-right inline-block" style="color:black;width: 45%;text-align:left;">state,city</div> </div> </div> </div>';
                for (var index = 0; index < data.resultMap.listOfPreferredVendor.length; index++) {

                    html += '<div id="item_' + index + '" class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular ">'
                            + '<input type="checkbox" id="removevendor_' + index + '" value=' + data.resultMap.listOfPreferredVendor[index].preferredVendorId + ' class="checkbox remove-vendor"> <label for="removevendor_' + index + '" class="vendor-label" style="display:none"></label>'
                            + '<div id="id-prefeeredvendorbox" class="carrier-left-title t-left inline-block " style="margin-left: 29px;  text-align: left;width:45% !important;">'
                            + '<a id=' + data.resultMap.listOfPreferredVendor[index].preferredVendorId + ' class="preferredvendor snap name-color" href="javascript:void(0)" data-type="vendor-profile-info" >' + data.resultMap.listOfPreferredVendor[index].name + '</a></div> '
                            + '<div id="id-vendortypebox" class="carrier-left-title t-right inline-block" style="margin-left:-10px;">' + data.resultMap.listOfPreferredVendor[index].serviceType + '</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-caps opensans-regular"> '
                            + '<div class="carrier-left-title t-left inline-block"  style="text-align: left;width: 45%;"><a href="tel:' + data.resultMap.listOfPreferredVendor[index].phone + '">' + (data.resultMap.listOfPreferredVendor[index].phone).replace(/(\d\d\d)\s*(\d\d\d)\s*(.*?)$/, '$1-$2-$3') + '</a></div> '
                            + '<div class="carrier-left-title t-right inline-block" style="text-align: left;width: 45%;">' + data.resultMap.listOfPreferredVendor[index].city + "," + data.resultMap.listOfPreferredVendor[index].state + '</div> </div> </div> </div> ';
                }
            } else {
                try {
                    if (data.resultMap.companyDetails.website.value == undefined) {
                        website = "";
                    } else {
                        website = data.resultMap.companyDetails.website.value;
                    }
                } catch (err) {

                }
                try {
                    if (data.resultMap.companyDetails.facebookPage == undefined) {
                        faceBook = "";
                    } else {
                        faceBook = data.resultMap.companyDetails.facebookPage;
                    }
                } catch (err) {

                }
                /* RESPONSE.BACKGROUNDCOLORVALUE = data.resultMap.agencyDetails.color;
                 RESPONSE.THEMECOLOR = data.resultMap.agencyDetails.themeColor;
                 RESPONSE.FRAMECOLOR = data.resultMap.agencyDetails.frameColor; */


                var address2 = "";

                if (data.resultMap.companyDetails.address2 != undefined) {
                    address2 = data.resultMap.companyDetails.address2;
                }

                if (address2 == "undefined") {
                    address2 = "";
                }

                var companyId = "";

                if (data.resultMap.companyDetails.companyId != "undefined") {
                    companyId = data.resultMap.companyDetails.companyId;
                }
                html = ' <form id="carrier-form"> <div class="carrier-view-parent p-relative"> <div class="app-link t-upper opensans-regular p-relative">app download link</div> <div class="app-parent p-relative"> '
                        + '<div class="app-download-bar inline-block p-relative bg-color-white">' + data.resultMap.appDownloadLink + '</div> <div class="send-app-bar inline-block p-relative border-all bg-color-green t-caps t-center opensans-regular f-color-w snap"  data-type="sendapplink" ><a class="f-color-w" href="javascript:void(0)" >send app link</a></div> </div> <div class="settings-click-button clr-fl"><div class="success" style=" display:none; color: green;"></div><div class="error" style=" display:none; color: red;"></div> <div class="settings-agency-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" id="id-agency-view-load" data-type="agency-view-load" >Company</a></div> <div class="settings-vendor-bar inline-block p-relative bg-color-gray t-caps t-center opensans-regular f-color-w snap"><a class="snap" href="javascript:void(0)" id="id-preferred-vendors-view-load" data-type="preferred vendors-view-load" >PREFERRED VENDORS</a></div> '
                        + '<div class=\"settings-edit-bar right inline-block p-relative bg-color-green snap\" data-type=\"agency-edit-load\" style=\"display: block;\"><div class=\"p-relative inline-block\"> <div class=\"edit-icon sprite-im\" style="margin-top:7px !important;">&nbsp;</div></div><div class=\"p-relative inline-block t-caps t-right opensans-regular f-color-w\" style=\"margin-left: 25px;\"> <a id=\"id-carrier-edit\" class=\"f-color-w\" href=\"javascript:void(0)\">Edit</a></div></div>'
                        + '<div id="id-canecelbutton" class="settings-edit-bar right inline-block p-relative bg-color-green snap" data-type="" style="margin-right: 8px;display:none;"><div class="p-relative inline-block"> <div class="edit-icon sprite-im" style="display:none;">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w" style="margin-left: 25px;  margin-top: 9px;"> <a id="" class="f-color-w" href="javascript:void(0)" >Cancel</a></div>'
                        + '</div><div id="id-editremovebar" class="removevendor-bar right inline-block p-relative bg-color-green snap" data-type="agency-remove-load"> <div class="p-relative inline-block"> <div class="remove-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"><a id="id-preffervendoreditremovebar" class="f-color-w" href="javascript:void(0)"  >Edit</a></div> </div> <div class="addvendor-bar right inline-block p-relative bg-color-green snap" data-type="agency-addvendor-load"> <div class="p-relative inline-block"> <div class="add-icon sprite-im">&nbsp;</div> </div> <div class="p-relative inline-block t-caps t-right opensans-regular f-color-w"><a class="f-color-w" href="javascript:void(0)"  >add vendor</a></div></div></div> <div class="bg-color-white"><div class="agency-view-block"><div class="settings-view-leftblock inline-block v-align-mid p-relative"> <div class="settings-view-auth opensans-regular p-relative"> <div class="carrier-view-name inline-block t-upper">company id</div> '
                        + '<div class="carrier-view-id inline-block">' + data.resultMap.companyDetails.companyId + '</div> </div> <div class="settings-logo-view p-relative"> '
                        + '<div class="settingslogo-viewpic"> <img id="id-agencypic"   src= ' + ((data.resultMap.companyDetails.companyLogo != undefined) ? 'http://2-dot-proto-call-test.appspot.com/file/' + data.resultMap.companyDetails.companyLogo : 'http://www.sdpb.org/s/photogallery/img/no-image-available.jpg') + '    alt="" class="carrier-img-width" style="height: auto;"> <div id="id-edit-agency-pic" class=\"edit-agency-pic p-absolute anim bg-color-red f-color-w snap\" data-type=\"editAgencyPic\" style=\"display: none;\"> <div class=\"p-relative t-center\" style=\" margin-left: -9px;\"> <div class=\"sprite-im Edit-icon inline-block v-align-mid\"> &nbsp; </div><div class=\"inline-block f-sz-12 v-align-mid opensans-regular \"> Edit </div></div></div></div> </div> <div class="settings-view-social p-relative clr-fr"> <div class="settings-view-website p-relative left bg-color-green"   style="cursor:pointer;"  onClick="window.open(\'' + website + '\',\'_newtab\');"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out" style="  margin-left: 45%;">&nbsp;</div> </div> '
                        + '<div class="carrier-website-name inline-block t-caps opensans-regular f-color-w t-center" style="margin-left: 15px;"><a target="_blank" href="' + website + '" class="f-color-w">WEBSITE</a></div> </div> <div class="settings-view-facebook p-relative left bg-color-green" style="cursor:pointer;"  onClick="window.open(\'' + faceBook + '\',\'_newtab\');"> <div class="p-relative inline-block v-align-top"> <div class="sprite-im pop-out" style="  margin-left: 45%;">&nbsp;</div> </div> <div class="carrier-facebook-name inline-block t-caps opensans-regular f-color-w t-center" style="margin-left: 18px;"><a target="_blank" href="' + faceBook + '" class="f-color-w">FACEBOOK</a></div> </div> </div> </div> <div class="settings-view-rightblock inline-block v-align-mid p-relative "> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">Company id</div> '
                        + '<div id="id-c-agencyid" class="carrier-left-content t-left right " style="visibility: visible">' + companyId + '</div> <input id="id-carrier-agencyid" class="carrier-left-content-textbox t-left right p-absoalute" type="text" value="" style="visibility: hidden;margin-right:11%;"> </div> </div><div class="carrier-view-right right t-caps opensans-regular"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">name</div> '
                        + '<div id="id-c-agencyname" class="carrier-left-content t-left right" style="visibility: visible">' + data.resultMap.companyDetails.companyName + '</div> <input id="id-carrier-agencyname" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-block p-relative "> <div id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view clr-fl border-bot"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                        + '<div id="id-c-agencyaddress1" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.companyDetails.address + '</div> <input id="id-carrier-agencyaddress1" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">address</div> '
                        + '<div id="id-c-agencyaddress2" class="carrier-left-content t-left right" style="visibility: visible">' + address2 + '</div> <input id="id-carrier-agencyaddress2" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">city</div> '
                        + '<div id="id-c-agencycity" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.companyDetails.city + '</div> <input id="id-carrier-agencycity" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">state</div> '
                        + '<div id="id-c-agencystate" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.resultMap.companyDetails.state + '</div> <input id="id-carrier-agencystate" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> <div class="carrier-view-block p-relative " > <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width t-caps opensans-regular clr-fl"> <div class="carrier-left-title t-right left">zip</div> '
                        + '<div id="id-c-agencyzip" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.companyDetails.zipcode + '</div> <input id="id-carrier-agencyzipcode" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> <div class="carrier-view-right right t-caps opensans-regular" style="width: 50%;"> <div class="carrier-left-width clr-fl"> <div class="carrier-left-title t-right left">phone</div> '
                        + '<div id="id-c-agencyphone" class="carrier-left-content t-left right t-upper" style="visibility: visible">' + data.resultMap.companyDetails.phone.number + '</div> <input id="id-carrier-agencyphone" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div> </div> '

                        + '<div class=\"carrier-view-block p-relative \"> <div id=\"id-carrier-border-view\" class=\"carrier-border-view border-bot clr-fl\"> <div class=\"carrier-view-left p-relative left\" style="  width: 50%;"> <div class=\"carrier-left-width t-caps opensans-regular clr-fl\"> <div class=\"carrier-left-title t-right left\">Website</div><div id=\"id-c-agencywebsite\" class=\"carrier-left-content t-left right \" style=\"visibility: visible\">' + website + '</div><input id=\"id-carrier-agencywebsite\" class=\"carrier-left-content-textbox t-left right p-absolute\" type=\"text\" value=\"\" style=\"visibility: hidden\"> </div></div><div class=\"carrier-view-right right t-caps opensans-regular\" style="width: 50%;"> <div class=\"carrier-left-width clr-fl\"> <div class=\"carrier-left-title t-right left\">Facebook</div>'
                        + '<div id=\"id-c-agencyfacebook\" class=\"carrier-left-content t-left right t-upper\" style=\"visibility: visible\">' + faceBook + '</div><input id=\"id-carrier-agencyfacebook\" class=\"carrier-left-content-textbox t-left right p-absolute\" type=\"text\" value=\"\" style=\"visibility: hidden\"> </div></div></div></div>'
                        + '<div class="carrier-view-block p-relative "> <div  id="id-carrier-border-view" class="carrier-border-view border-bot clr-fl"> <div class="carrier-view-left p-relative left" style="  width: 50%;"> <div class="carrier-left-width opensans-regular clr-fl"> <div class="carrier-left-title t-right left t-caps">email</div>'

                        + '<div id="id-c-agencyemail" class="carrier-left-content t-left right " style="visibility: visible">' + data.resultMap.companyDetails.emailId.email + '</div> <input id="id-carrier-agencyemail" class="carrier-left-content-textbox t-left right p-absolute" type="text" value="" style="visibility: hidden"> </div> </div> </div>'
                        + '</div></div></div>'
                        + '<div class="preferred-vendor-block inline-block v-align-mid p-relative clr-fl">'
                        + '<div class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-upper opensans-regular "> <div id ="id-vendornamebox" class="carrier-left-title t-upper t-left inline-block " style="text-align: left;margin-left: 4%;color:black">name</div> '
                        + '<div id ="id-vendortypebox" class="carrier-left-title t-right inline-block" style="color:black;  width: 34%;">type</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-upper opensans-regular"> <div class="carrier-left-title t-left inline-block" style="color:black;text-align:left;width:45%;">phone</div> <div class="carrier-left-title t-right inline-block" style="color:black;width: 45%;text-align:left;">state,city</div> </div> </div> </div>';
                for (var index = 0; index < data.resultMap.listOfPreferredVendor.length; index++) {

                    html += '<div id="item_' + index + '" class="preffered-border-view clr-fl border-bot left clr-fl"> <div class="preffered-view-left p-relative left"> <div class="carrier-left-width t-caps opensans-regular ">'
                            + '<input type="checkbox" id="removevendor_' + index + '" value=' + data.resultMap.listOfPreferredVendor[index].preferredVendorId + ' class="checkbox remove-vendor"> <label for="removevendor_' + index + '" class="vendor-label" style="display:none"></label>'
                            + '<div id="id-prefeeredvendorbox" class="carrier-left-title t-left inline-block " style="margin-left: 29px;  text-align: left;width:45% !important;">'
                            + '<a id=' + data.resultMap.listOfPreferredVendor[index].preferredVendorId + ' class="preferredvendor snap name-color" href="javascript:void(0)" data-type="vendor-profile-info" >' + data.resultMap.listOfPreferredVendor[index].name + '</a></div> '
                            + '<div id="id-vendortypebox" class="carrier-left-title t-right inline-block" style="margin-left:-10px;">' + data.resultMap.listOfPreferredVendor[index].serviceType + '</div> </div> </div> <div class="preffered-view-right right p-relative right "> <div class="carrier-left-width t-caps opensans-regular"> '
                            + '<div class="carrier-left-title t-left inline-block"  style="text-align: left;width: 45%;"><a href="tel:' + data.resultMap.listOfPreferredVendor[index].phone + '">' + (data.resultMap.listOfPreferredVendor[index].phone).replace(/(\d\d\d)\s*(\d\d\d)\s*(.*?)$/, '$1-$2-$3') + '</a></div> '
                            + '<div class="carrier-left-title t-right inline-block" style="text-align: left;">' + data.resultMap.listOfPreferredVendor[index].city + "," + data.resultMap.listOfPreferredVendor[index].state + '</div> </div> </div> </div> ';
                }

            }


            return html;
        },
        dynamicMyProfileViewTemplate: function (repDataValue) {


            /* var data = "";
             var tempCarriedId = localStorage.getItem("CARRIERADMIN_MYREPID");
             if ((RESPONSE.CARRIERAGENCYTOTALDETAILS).length != 0) {
             data = RESPONSE.CARRIERAGENCYTOTALDETAILS[0];
             } else {
             if (localStorage.LoginType == 'Representatives') {
             data = JSON.parse(localStorage.getItem("carrierRepData"));
             } else {
             data = JSON.parse(localStorage.getItem("customerDetailsValue"));
             }
             
             } */
            console.log("selected rep details", repDataValue);
            var html = "<div> No records </div>";

            //for (var index = 0; index < data.resultMap.myRepTab.length; index++) {
            var name, phone, email, profilepic = '';
            try {
                /* var carid = "";
                 try {
                 carid = data.resultMap.myRepTab[index].RepresentativeDetails.carrierRepresentativeId.email;
                 } catch (e) {
                 carid = data.resultMap.myRepTab[index].RepresentativeDetails.emailId.email;
                 } */

                //if (carid == tempCarriedId) {
                //var details = data.resultMap.myRepTab[index].RepresentativeDetails;
                if (repDataValue.firstName != undefined) {
                    name = repDataValue.firstName + " " + repDataValue.lastName;
                    name = name.replace("undefined", " ");
                } else {
                    name = '';
                }
                localStorage.setItem("id-customers-headername", name);

                try {
                    if (repDataValue.phone != undefined) {
                        phone = repDataValue.phone.number;
                    } else {
                        phone = '';
                    }
                } catch (e) {
                    phone = '';
                }
                try {
                    if (repDataValue.emailId != undefined) {
                        email = repDataValue.emailId.email;
                    } else if (repDataValue.carrierRepresentativeId.email != undefined) {
                        email = repDataValue.carrierRepresentativeId.email;
                    } else {
                        email = '';
                    }
                } catch (e) {
                    email = '';
                }
                if (localStorage.getItem("LOGIN_LABEL") != "Carriers") {
                    try {
                        if (repDataValue.agencyRepresentativeId != undefined) {
                            email = repDataValue.agencyRepresentativeId.email;
                        } else {
                            email = '';
                        }
                    } catch (e) {
                        email = '';
                    }
                }
                /* if (carid != undefined) {
                 email = carid;
                 }
                 else {
                 email = '';
                 } */
                if (repDataValue.profilePicture != undefined) {
                    profilepic = HOMEPAGERESPONSE.PROFILEAPI + repDataValue.profilePicture;
                } else {
                    profilepic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w';
                }
                html = "";

                localStorage.setItem("CARRIERREP_EMAILID", email);
                html = '<div class="agenyparent-class bg-color-white"> <div class="p-relative"> <form> <div class="agenyleft-profile inline-block v-align-mid p-relative"> '
                        + '<div class="agenyleft-image"> <div class="overflow-hidden"> <div class="agenypic-info"> <img src=' + profilepic + ' alt="" class="ageny-img-width"> </div><div id="id-changeimg" class="v-align-mid opensans-regular text-color-overlay f-sz-12 p-relative" style="padding:8px 14px;display:none;"> <div class="sprite-im profcamera-icon inline-block"> &nbsp; </div><div class="t-upper inline-block"> Change Image </div><input type="file" name="agency-prof-img" id="agency-prof-img" onchange="readURL(this);"/> </div></div></div></div><div class="agenyright-profile inline-block v-align-mid"> <div class="agenyparent-block"> <div class="agenyinternal-block"> <div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Name </div><div class="agenycontent-block inline-block p-relative"> '
                        + '<span class="profile-result-cls" id="nameview"> ' + name + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="namenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative" > Phone </div><div class="agenycontent-block inline-block p-relative"> '
                        + '<span class="profile-result-cls" id="phoneview"> ' + phone + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="phonenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Email </div><div class="agenycontent-block inline-block p-relative">'
                        + '<span class="profile-result-cls" id="emailview"> ' + email + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="emailnew" readonly> </div></div></div></div></div></form> </div></div>';

                var dropdownHtml = '<div id="id-customers-dropdown" class="associated-carrier-sort t-upper p-relative opensans-regular inline-block">ASSOCIATED CUSTOMERS</div>'
                        + '<div id="associatedcustomersdropdownarrow" class="p-relative inline-block" style="display:none;"> <div  class="associatedownarrow-customer sprite-im drop-down-icon">&nbsp;</div> </div> </div> '
                        + '<div id="id-carrierassociatedblock" class="associated-carrier-feed p-relative border-bot"> ';

                html = html + dropdownHtml;
                //break;
                //}
            } catch (err) {
                html = "<div> No records </div>";
            }

            //}

            return html;
        },
        staticMyProfileViewTemplate: function () {

            var lastName = "";
            if (sessionStorage.userFirstName == undefined) {
                userName = "";
            } else {
                userName = sessionStorage.userFirstName;
            }

            if (sessionStorage.userLastName == undefined) {
                lastName = "";
            } else {
                lastName = sessionStorage.userLastName;
            }
            if (sessionStorage.userPhoneNumber == undefined) {
                agencyPhone = "";
            } else {
                agencyPhone = sessionStorage.userPhoneNumber;
            }
            if (sessionStorage.loginType == "SuperAdmin") {
                if (sessionStorage.superAdminEmailId == undefined) {
                    agencyEmail = "";
                } else {
                    agencyEmail = sessionStorage.superAdminEmailId;
                }
            } else {
                if (sessionStorage.userEmailId == undefined) {
                    agencyEmail = "";
                } else {
                    agencyEmail = sessionStorage.userEmailId;
                }
            }


            if (sessionStorage.profilePic == undefined) {
                profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zfBfV0zBRmjltZfQowBP2Uo_DVnENyvKzQenY6ofyfSvk-Cb8w";
            } else {
                profilePic = sessionStorage.profilePic;
            }

            if (sessionStorage.residentialCity == "undefined") {
                sessionStorage.residentialCity = "";
            }
            if (sessionStorage.residentialCity == undefined) {
                sessionStorage.residentialCity = "";
            }

            if (sessionStorage.residentialState == "undefined") {
                sessionStorage.residentialState = "";
            }
            if (sessionStorage.residentialState == undefined) {
                sessionStorage.residentialState = "";
            }

            var html = '<div class="agenyparent-class bg-color-white"> <div class="p-relative"> <form> <div class="agenyleft-profile inline-block v-align-mid p-relative"> <div class="agenyleft-image"> <div class="overflow-hidden"> <div class="agenypic-info">'
                    + '<img src=' + profilePic + ' alt="" class="ageny-img-width"> </div><div class="v-align-mid opensans-regular text-color-overlay f-sz-12 p-relative"  id="id-changeimg"  style="padding:8px 14px;display:none;"> <div class="sprite-im profcamera-icon inline-block"> &nbsp; </div><div class="t-upper inline-block"> Change Image </div><input type="file" name="agency-prof-img" id="agency-prof-img" onchange="readURL(this);"/> </div></div></div></div><div class="agenyright-profile inline-block v-align-mid"> <div class="agenyparent-block"> <div class="agenyinternal-block"> <div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> First Name </div><div class="agenycontent-block inline-block p-relative">'
                    + '<span class="profile-result-cls" id="firstnameview" style="  font-family:OpenSansSemibold;"> ' + userName + ' </span> </div><input type="text" name="profilefirstName" value="" class="agencyprofinput" id="firstnamenew"> </div></div>'
                    + '<div class=\"agenygroup-block border-bot opensans-regular\"> <div class=\"agenychild-block\"> <div class=\"agenytitle-block inline-block p-relative\"> Last Name </div><div class=\"agenycontent-block inline-block p-relative\"><span class=\"profile-result-cls\" id=\"lastnameview\" style="font-family:OpenSansSemibold;"> ' + lastName + ' </span> </div><input type=\"text\" name=\"profilelastName\" value=\"\" class=\"agencyprofinput\" id=\"lastnamenew\"> </div></div>'
                    + '<div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative" > Phone </div><div class="agenycontent-block inline-block p-relative">'
                    + '<span class="profile-result-cls" id="phoneview" style="  font-family:OpenSansSemibold;"> ' + agencyPhone + ' </span> </div><input type="text" name="profileName" value="" class="agencyprofinput" id="phonenew"> </div></div><div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> City </div><div class="agenycontent-block inline-block p-relative"> '
                    + '<span class="profile-result-cls" id="cityview" style="  font-family:OpenSansSemibold;"> ' + sessionStorage.residentialCity + ' </span> </div><input type="text" name="profileCity" value="" class="agencyprofinput" id="citynew"> </div></div>'
                    + '<div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> State </div><div class="agenycontent-block inline-block p-relative"> '
                    + '<span class="profile-result-cls" id="stateview" style="  font-family:OpenSansSemibold;"> ' + sessionStorage.residentialState + ' </span> </div>'
                    + '<select name="profileState" value="" class="agencyprofinput" id="statenew">'
                    + '<option value="AL">AL</option>'
                    + '<option value="AK">AK</option>'
                    + '<option value="AZ">AZ</option>'
                    + '<option value="AR">AR</option>'
                    + '<option value="CA">CA</option>'
                    + '<option value="CO">CO</option>'
                    + '<option value="CT">CT</option>'
                    + '<option value="DE">DE</option>'
                    + '<option value="DC">DC</option>'
                    + '<option value="FL">FL</option>'
                    + '<option value="GA">GA</option>'
                    + '<option value="HI">HI</option>'
                    + '<option value="ID">ID</option>'
                    + '<option value="IN">IN</option>'
                    + '<option value="IN">IN</option>'
                    + '<option value="IA">IA</option>'
                    + '<option value="KS">KS</option>'
                    + '<option value="KY">KY</option>'
                    + '<option value="LA">LA</option>'
                    + '<option value="ME">ME</option>'
                    + '<option value="MD">MD</option>'
                    + '<option value="MA">MA</option>'
                    + '<option value="MI">MI</option>'
                    + '<option value="MN">MN</option>'
                    + '<option value="MS">MS</option>'
                    + '<option value="MO">MO</option>'
                    + '<option value="MT">MT</option>'
                    + '<option value="NE">NE</option>'
                    + '<option value="NV">NV</option>'
                    + '<option value="NH">NH</option>'
                    + '<option value="NJ">NJ</option>'
                    + '<option value="NM">NM</option>'
                    + '<option value="NY">NY</option>'
                    + '<option value="NC">NC</option>'
                    + '<option value="ND">ND</option>'
                    + '<option value="OH">OH</option>'
                    + '<option value="OK">OK</option>'
                    + '<option value="OR">OR</option>'
                    + '<option value="PA">PA</option>'
                    + '<option value="RI">RI</option>'
                    + '<option value="SC">SC</option>'
                    + '<option value="SD">SD</option>'
                    + '<option value="TN">TN</option>'
                    + '<option value="TX">TX</option>'
                    + '<option value="UT">UT</option>'
                    + '<option value="VT">VT</option>'
                    + '<option value="VA">VA</option>'
                    + '<option value="WA">WA</option>'
                    + '<option value="WV">WV</option>'
                    + '<option value="WI">WI</option>'
                    + '<option value="WY">WY</option>'
                    + '</select> </div></div>'
                    + '<div class="agenygroup-block border-bot opensans-regular"> <div class="agenychild-block"> <div class="agenytitle-block inline-block p-relative"> Email </div><div class="agenycontent-block inline-block p-relative"> '
                    + '<span class="profile-result-cls" id="emailview" style="  font-family:OpenSansSemibold;"> ' + agencyEmail + ' </span> </div>'
                    + '<input type="text" name="profileName" value="" class="agencyprofinput" id="emailnew" readonly> </div></div></div></div></div></form> </div></div>';
            return html;
        }
    },
    myreps: {
        forgotPasswordTemplate: function () {
            var html = '<h2 class="t-left f-color-green opensans-regular" style="">Forgot Password</h2>'
                    + '<div class="o-sub-content p-relative" style="  margin: 4px;">'
                    + '<div class="f-sz-14 t-left opensans-regular invite-reps-text">To reset your password, type your full email address</div>'
                    + '<div class="f-sz-14 t-left opensans-regular forgotpassword-errortext"> <b> Invalid email address </b> </div>'
                    + '<div class="text-box-outer" style="padding-left:10px;">'
                    + '<input type="text" class="opensans-regular" id="forgotPasswordEmail" placeholder="Mail Address" />'
                    + '</div>'
                    + '<div id="id-forgotPassword-submit" class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="dt-forgotpassword-submit"> Submit </div>'
                    + '</div>';

            return html;
        },
        inviteRepsTemplate: function () {
            var html = "";
            if (sessionStorage.loginType == 'SuperAdmin') {
                html = '<h2 class="t-left f-color-green opensans-regular" style="">Invite ' + localStorage.getItem("TABNAME") + '</h2>'
                        + '<div class="o-sub-content p-relative" style="  margin: 4px;">'
                        + '<div class="f-sz-14 t-left opensans-regular invite-reps-text">User will have access to all the features of Dashboard</div>'
                        + '<div class="text-box-outer">'
                        + '<input type="text" class="opensans-regular" id="inviterepemail" placeholder="Mail Address" style="padding-left: 10px;" />'
                        + '</div>'
                        + '<div id="id-invitemyreps" class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="InvitemyRep">Send Invite</div>'
                        + '</div>';
            } else {
                html = '<h2 class="t-left f-color-green opensans-regular" style="">Invite Reps</h2>'
                        + '<div class="o-sub-content p-relative" style="  margin: 4px;">'
                        + '<div class="f-sz-14 t-left opensans-regular invite-reps-text">User will have access to all the features of Dashboard</div>'
                        + '<div class="text-box-outer">'
                        + '<input type="text" class="opensans-regular" id="inviterepemail" placeholder="Mail Address" style="padding-left: 10px;" />'
                        + '</div>'
                        + '<div id="id-invitemyreps" class="o-btn snap opensans-regular p-relative t-center bg-color-red f-color-w" data-type="InvitemyRep">Send Invite</div>'
                        + '</div>';
            }
            return html;
        },
        staticRepsTemplate: function () {
            var html = '<div class="customer-home-parent clr-fl p-relative"> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> <div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div><div class="reps-feed-screen clr-fl left border-all p-relative"><div class="reps-feed-info clr-fl p-relative"><div class="reps-feed-pic left "><img src="http://johnjournal.bravesites.com/files/images/Profile_Score_Photo.jpg" alt="" class="carrier-img-width"></div><div class="reps-profile-info t-left left opensans-regular f-color-w p-relative"><div class="carrier-name t-caps">james jeo</div><div class="carrier-location t-caps">location</div><div class="carrier-email">carrier@mail.com</div> <div class="carrier-location t-caps">#QA387</div> </div></div><div class="reps-feed-view p-relative bg-color-green t-caps t-center opensans-light f-color-w snap" data-type="dt-assigncustomer">assign customer</div></div> </div>';
            return html;
        }
    }
};

/*
    MAIN SCRIPTS - Last updated: 02.06.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar
});

$(window).load(function() {
    NProgress.done();
});

//-----------------------------------------------------------------
// Offcanvas Menu
//-----------------------------------------------------------------

$("#off-canvas-menu").mmenu({ "offCanvas": { "position": "right" }});

//-----------------------------------------------------------------
// Hamburger Trigger
//-----------------------------------------------------------------

$('.hamburger').bind('click', function(e) {
    e.preventDefault();
    $('#off-canvas-menu').trigger('open.mm');
});

//-----------------------------------------------------------------
// <= IE8 Caution Message
//-----------------------------------------------------------------

$('.lv-alert .close-btn').click(function(){$(this).parent().hide();});

//-----------------------------------------------------------------
// +++ HELPERS +++
//-----------------------------------------------------------------
//==================================================
// Developer: COMMAND+S for theme swap - see site index for info
//==================================================

if ($('.dev-mode-enabled').length) {
    $(document).keydown(function(event) {
        // If Control or Command key is pressed and the S key is pressed
        // run save function. 83 is the key code for S.
        if ((event.ctrlKey || event.metaKey) && event.which == 83) {
            event.preventDefault();
            $('body').toggleClass('legacy-theme');
            return false;
        }
    });
}

//==================================================
//
//==================================================
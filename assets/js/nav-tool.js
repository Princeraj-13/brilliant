"use strict";

jQuery(document).ready(function ($) {
    // Check for offset-side-bar and add click event
    if ($(".offset-side-bar").length > 0) {
        $(".offset-side-bar").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(".cart-group").addClass("isActive");
        });
    }

    // Check for close-side-widget and add click event
    if ($(".close-side-widget").length > 0) {
        $(".close-side-widget").on("click", function (e) {
            e.preventDefault();
            $(".cart-group").removeClass("isActive");
        });
    }

    // Check for navSidebar-button and add click event
    if ($(".navSidebar-button").length > 0) {
        $(".navSidebar-button").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(".info-group").addClass("isActive");
        });
    }

    // Close info-group on clicking close-side-widget
    if ($(".close-side-widget").length > 0) {
        $(".close-side-widget").on("click", function (e) {
            e.preventDefault();
            $(".info-group").removeClass("isActive");
        });
    }

    // Remove isActive class on body click
    $("body").on("click", function () {
        $(".info-group").removeClass("isActive");
        $(".cart-group").removeClass("isActive");
    });

    // Prevent propagation for xs-sidebar-widget clicks
    $(".xs-sidebar-widget").on("click", function (e) {
        e.stopPropagation();
    });

    // Initialize magnificPopup for xs-modal-popup
    if ($(".xs-modal-popup").length > 0) {
        $(".xs-modal-popup").magnificPopup({
            type: "inline",
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: "auto",
            closeBtnInside: false,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                }
            }
        });
    }

    // Add contact menu item dynamically
    const contactMenuItem = 
        '<br><li class=""><a href="contact.html" style="color: #fff; text-decoration: none; margin-left:25px;">CONTACT</a></li>';
    $('.menu-outer').append(contactMenuItem);
});

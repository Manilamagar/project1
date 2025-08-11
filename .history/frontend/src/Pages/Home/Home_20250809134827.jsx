<div>
  {/* header */}
  <meta charSet="UTF-8" />
  <title>Green Peace Academy Secondary School</title>
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
  {/* bootstrap 3.0.2 */}
  <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  {/* font Awesome */}
  <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
  {/* Ionicons */}
  <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/ionicons.min.css" rel="stylesheet" type="text/css" />
  {/* Morris chart */}
  <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/morris/morris.css" rel="stylesheet" type="text/css" />
  {/* jvectormap */}
  <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/jvectormap/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />
  {/* Date Picker */}
  <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/plugins/datepicker/datepicker3.css" rel="stylesheet" type="text/css" />
  {/* Daterange picker */}
  {/* Bootstrap time Picker */}
  <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/timepicker/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css" />
  <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css" />
  {/* bootstrap wysihtml5 - text editor */}
  <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css" rel="stylesheet" type="text/css" />
  {/* Theme style */}
  <link href="https://ingrails.com/school/admin_panel/css/AdminLTEServer.css" rel="stylesheet" type="text/css" />
  {/* <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/AdminLTE.css" rel="stylesheet" type="text/css" /> */}
  <link href="https://ingrails.com/school/admin_panel/css/custom.css" rel="stylesheet" type="text/css" />
  <link href="https://ingrails.com/school/admin_panel/css/app.css?v=1.2" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  {/*for preview screen */}
  <link rel="stylesheet" href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/preview/css/reset.css" />
  <link rel="stylesheet" href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/preview/css/style.css" />
  <link rel="stylesheet" href="https://ingrails.com/school/admin_panel/css/wysiwyg.css" />
  {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/driver.js@1.0.1/dist/driver.css" /> */}
  <link rel="stylesheet" href="https://ingrails.com/school/admin_panel/css/driver.css" />
  {/* favicon */}
  <link rel="apple-touch-icon" sizes="180x180" href="https://ingrails.com/school/admin_panel/img/logo/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="https://ingrails.com/school/admin_panel/img/logo/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="https://ingrails.com/school/admin_panel/img/logo/favicon-16x16.png" />
  {/* venobox lightbox*/}
  <link href="https://ingrails.com/school/admin_panel/css/venobox/venobox.min.css" rel="stylesheet" type="text/css" />
  {/* whatsNew CSS*/}
  <link href="https://ingrails.com/school/admin_panel/css/whats-new.css" rel="stylesheet" type="text/css" />
  <style dangerouslySetInnerHTML={{__html: "\n        /* to remove double scroll bar  */\n        html,\n        body {\n            overflow-x: unset !important;\n        }\n\n        .header .navbar {\n            top: 0;\n        }\n\n        @media (max-width: 560px) {\n            .header .navbar {\n                position: fixed!important;\n            }\n        }\n        @media (max-width: 560px) {\n            .navbar-right .switch-app {\n                display: none !important;\n            }\n        }\n        .header .navbar.collapsed {\n            margin-left: 0px;\n        }\n\n        .feedback-modal-overlay {\n            /* display: none; */\n            position: fixed;\n            z-index: 99999;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            overflow: auto;\n            background: rgba(217, 217, 217, 0.80);\n            opacity: 0;\n            visibility: hidden;\n            scale: 0;\n            transition: opacity 0.25s, visibility 0.25s;\n        }\n\n        .left-side.sidebar-offcanvas {\n            scroll-behavior: smooth;\n        }\n\n\n\n        .feedback-modal-overlay.open {\n            display: block;\n            opacity: 1;\n            scale: 1;\n            visibility: visible;\n            transition: opacity 0.25s, visibility 0.25s;\n        }\n\n        #modal-log .modal-content {\n            border-radius: 4px;\n            border: 2px solid #E7E7E7;\n            background: #FFF;\n            -webkit-box-shadow: none !important;\n            -moz-box-shadow: none !important;\n            box-shadow: none !important;\n        }\n\n        #modal-log button.close {\n            opacity: 1;\n        }\n\n        #modal-log button.close:hover {\n            opacity: 0.5;\n        }\n\n        @media (min-width: 992px) {\n            .modal-lg {\n                width: 900px;\n            }\n        }\n\n        .copyright-wrapper p {\n            font-size: 15px;\n            font-style: normal;\n            font-weight: 400;\n            line-height: 130%;\n            /* 19.5px */\n            margin: 0 !important;\n        }\n\n        .copyright-wrapper {\n            display: flex;\n            color: #7E7E7E;\n            align-items: center;\n            gap: 8px;\n            justify-content: center;\n            padding: 18px 26px;\n            border-radius: 4px;\n            background-color: #f9f9f9;\n            margin-left: 220px;\n        }\n\n        .copyright-wrapper .veda-app {\n            text-underline-offset: 4px;\n            text-decoration-line: underline;\n            color: #7E7E7E;\n        }\n\n        .copyright-wrapper .veda-app:hover {\n            color: #0675e0;\n        }\n\n        @media screen and (min-width:992px) {\n            .right-side.strech+.copyright-wrapper {\n                margin-left: 0px;\n            }\n        }\n\n        @media screen and (max-width:992px) {\n            .copyright-wrapper {\n                margin-left: 0px;\n            }\n        }\n\n        @media only screen and (max-width: 600px) {\n            .copyright-wrapper {\n                padding: 12px;\n            }\n\n            .copyright-wrapper p {\n                font-size: 12px;\n            }\n        }\n    " }} />
  {/* for calendar*/}
  <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/fullcalendar/fullcalendar.css" rel="stylesheet" type="text/css" />
  <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/fullcalendar/fullcalendar.print.css" rel="stylesheet" type="text/css" media="print" />
  <link href="https://ingrails.com/school/admin_panel/css/tailwind_custom.css?v=1.0" rel="stylesheet" />
  {/*  */}
  <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet" />
  {/*  */}
  {/* Google Tag Manager */}
  {/*  */}
  {/* Start of HubSpot Embed Code */}
  {/* End of HubSpot Embed Code */}
  {/* End Google Tag Manager */}
  <style dangerouslySetInnerHTML={{__html: "\n    ._table thead tr th,\n    ._table tbody tr td {\n        border: 1px solid #ccc !important;\n        vertical-align: middle;\n        padding: 3px 5px;\n    }\n\n    ._table thead tr th {\n        background: #eee;\n    }\n\n    .alert-warning-edit {\n        color: #8a6d3b;\n        background-color: #fcf8e3;\n        border-color: #faebcc;\n        margin-top: 10px;\n    }\n\n    .alert-success-edit {\n        color: #3c763d;\n        background-color: #dff0d8;\n        border-color: #d6e9c6;\n        margin-top: 10px;\n    }\n\n    .active__dot {\n        z-index: 9999;\n        position: absolute;\n        height: 20px;\n        width: 20px;\n        background-color: #e84118;\n        border-radius: 50%;\n        left: 35;\n        bottom: 30;\n    }\n\n    .active__dot__feedback {\n        height: 16px;\n        width: 16px;\n        background-color: #e84118;\n        border-radius: 50%;\n    }\n\n    .mt-15px {\n        margin-top: 15px;\n    }\n\n    .mt-5px {\n        margin-top: 5px;\n    }\n\n    .nav_icon_top {\n        width: 21px;\n        display: inline-block;\n    }\n\n    .fixed {\n        position: fixed;\n        top: 55px;\n        /* left: 321px; */\n        right: 0;\n        background-color: #a6e0cbf5;\n        width: 300px;\n        padding: 20px;\n        z-index: 9999;\n    }\n\n    #click-to-view:hover {\n        background-color: #528bff !important;\n    }\n\n    .notice-badge {\n        background: red;\n        color: #ffff;\n        padding: 1px 5px 1px 5px;\n        border-radius: 50%;\n        display: inline-block;\n    }\n\n    .sidebar .sidebar-menu li a {\n        display: flex;\n        align-items: center;\n        gap: 5px;\n        line-height: 1.2;\n    }\n\n    .sidebar-menu>li>a span {\n        all: unset;\n    }\n\n    .loading-wrapper {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        flex-direction: column;\n        gap: 10px;\n        height: 90vh;\n        width: 100%;\n    }\n\n    .toast-top-right {\n        top: 60px;\n    }\n\n    sup.new {\n        font-size: 11px;\n        color: #fff;\n        padding: 2px 7px;\n        border-radius: 10px;\n        background: #528BFF;\n    }\n\n    /* fa-trash-o not available in font awesome 5.15.3 so overwriting */\n    .fa-trash-o:before {\n        content: \"\\f2ed\";\n    }\n\n    .fa-plus-square-o::before {\n        content: \"\\f0fe\";\n        font-weight: 400;\n    }\n\n    .dashboard-toggle-wrapper {\n        height: 100%;\n        display: flex !important;\n        align-items: center !important;\n    }\n\n    /*.feedback\n    \n.support_ticket_floating_button .fac{\n    visibility: hidden;\n}\n.support_ticket_floating_button input:checked ~ .fac {\n    visibility: visible;\n}\n\n.support_ticket_floating_button .fab-child {\n    visibility: hidden;\n}\n\n.support_ticket_floating_button input:not(:checked):hover ~ .fab-child {\n    visibility: visible;\n}\n*/\n" }} /><style dangerouslySetInnerHTML={{__html: ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}" }} /><style type="text/css" dangerouslySetInnerHTML={{__html: ".jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)\";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}" }} /><style data-emotion="css" data-s dangerouslySetInnerHTML={{__html: "" }} />
  {/* body */}
  <div className="pace  pace-inactive"><div className="pace-progress" data-progress-text="100%" data-progress={99} style={{width: '100%'}}>
      <div className="pace-progress-inner" />
    </div>
    <div className="pace-activity" /></div>
  {/* Google Tag Manager (noscript) */}
  <noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=G-VT1ZTE7KPJ" height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
  {/* End Google Tag Manager (noscript) */}
  {/* header logo: style can be found in header.less */}
  {/*-topnavbar*/}
  <header className="header">
    <a href="https://ingrails.com/school/client?token=1754726545" className="logo" style={{fontFamily: 'sans-serif', overflow: 'hidden', fontSize: 'inherit'}}>
      Green Peace Academy Secondary School        {/* Add the class icon to your logo image or logo icon to add the margining */}
    </a>
    {/* Header Navbar: style can be found in header.less */}
    <nav className="navbar navbar-static-top" role="navigation">
      {/* Sidebar toggle button*/}
      <a href="#" className="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </a>
      <div className="navbar-right">
        <ul className="nav navbar-nav">
          {/* to enable the toggle admin_panel/js/client/switch-component.js uncomment  */}
          <li style={{height: '100%', display: 'flex', alignItems: 'center', marginRight: 10}}>
            <switch-component id="dashboard-switch" checked="true" />
          </li>
          {/* <li class="dropdown tasks-menu">
              <a href="#" onclick="showFeedbackForm()" data-source="floating" data-fetch-url="https://ingrails.com/school/client/viewFeedbackFrom" style="position: relative;">
                    <i class="fa fa-comment"></i> Feedback
                  </a>
              </li>
              <li class="dropdown tasks-menu hidden">
              <a href="#" onclick="showFeedbackForm()" data-fetch-url="https://ingrails.com/school/client/getFeedbackFormTemplate" style="position: relative;">
                    <i class="fa fa-comment"></i> Feedback Form
                  </a>
              </li> */}
          {/* <li class="dropdown tasks-menu">
                      <a href="#" onclick="changeLog()" style="position: relative;">
                          Whats' New?
                      </a>
                  </li> */}
          <li className="dropdown tasks-menu">
            <a href="#" onclick="activeOffers()" style={{position: 'relative'}} data-count={0} className="bottom-tooltip" data-content="Offers">
              {/* <img style="width: 20px;" src="https://ingrails.com/school/admin_panel/icons/gift-icon2.svg" alt=""
                          class="nav_icon"> */}
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                <path d="M18.4615 5.60101H15.0885C15.126 5.56801 15.1644 5.53601 15.201 5.50101C15.493 5.23121 15.7283 4.90164 15.8923 4.53293C16.0563 4.16422 16.1453 3.76429 16.1538 3.35816C16.1665 2.91387 16.0917 2.47158 15.934 2.05844C15.7763 1.6453 15.5391 1.27004 15.2369 0.955695C14.9347 0.641347 14.5739 0.394544 14.1767 0.23044C13.7795 0.0663363 13.3542 -0.0116068 12.9269 0.00139604C12.5362 0.0101473 12.1515 0.102674 11.7967 0.273184C11.442 0.443694 11.1249 0.688517 10.8654 0.992327C10.5062 1.42519 10.2143 1.9137 10 2.44023C9.78574 1.9137 9.49377 1.42519 9.13462 0.992327C8.87506 0.688517 8.558 0.443694 8.20327 0.273184C7.84854 0.102674 7.46378 0.0101473 7.07308 0.00139604C6.64584 -0.0116068 6.22055 0.0663363 5.82332 0.23044C5.4261 0.394544 5.06531 0.641347 4.76312 0.955695C4.46094 1.27004 4.22372 1.6453 4.06603 2.05844C3.90835 2.47158 3.83352 2.91387 3.84615 3.35816C3.8547 3.76429 3.94374 4.16422 4.1077 4.53293C4.27166 4.90164 4.50701 5.23121 4.79904 5.50101C4.83558 5.53401 4.87404 5.56601 4.91154 5.60101H1.53846C1.13044 5.60101 0.739122 5.76956 0.450605 6.0696C0.162087 6.36964 0 6.77658 0 7.20089V10.4007C0 10.825 0.162087 11.2319 0.450605 11.532C0.739122 11.832 1.13044 12.0006 1.53846 12.0006V18.4001C1.53846 18.8244 1.70055 19.2314 1.98907 19.5314C2.27758 19.8314 2.6689 20 3.07692 20H16.9231C17.3311 20 17.7224 19.8314 18.0109 19.5314C18.2994 19.2314 18.4615 18.8244 18.4615 18.4001V12.0006C18.8696 12.0006 19.2609 11.832 19.5494 11.532C19.8379 11.2319 20 10.825 20 10.4007V7.20089C20 6.77658 19.8379 6.36964 19.5494 6.0696C19.2609 5.76956 18.8696 5.60101 18.4615 5.60101ZM12.0192 2.05225C12.141 1.91238 12.2893 1.80021 12.4548 1.72278C12.6203 1.64534 12.7993 1.60432 12.9808 1.60228H13.0279C13.2405 1.60367 13.4508 1.64918 13.6463 1.73615C13.8419 1.82312 14.0187 1.9498 14.1666 2.10876C14.3144 2.26773 14.4303 2.45579 14.5074 2.66191C14.5844 2.86804 14.6211 3.08809 14.6154 3.30917C14.6134 3.49785 14.574 3.68408 14.4995 3.85615C14.4251 4.02823 14.3172 4.18244 14.1827 4.3091C13.2702 5.14904 11.7558 5.44502 10.8173 5.54901C10.9327 4.49008 11.25 2.95119 12.0192 2.05225ZM5.85673 2.08825C6.15475 1.77836 6.55837 1.60335 6.97981 1.60128H7.02692C7.20836 1.60332 7.38744 1.64434 7.55291 1.72178C7.71838 1.79921 7.86667 1.91138 7.98846 2.05125C8.79519 2.99919 9.07981 4.57108 9.17981 5.54301C8.24519 5.44302 6.73365 5.14304 5.82212 4.3041C5.68762 4.17744 5.57975 4.02323 5.50529 3.85115C5.43083 3.67908 5.39138 3.49285 5.38942 3.30417C5.38346 3.07942 5.42147 2.85575 5.50113 2.64673C5.5808 2.43772 5.70047 2.24772 5.85288 2.08825H5.85673ZM1.53846 7.20089H9.23077V10.4007H1.53846V7.20089ZM3.07692 12.0006H9.23077V18.4001H3.07692V12.0006ZM16.9231 18.4001H10.7692V12.0006H16.9231V18.4001ZM18.4615 10.4007H10.7692V7.20089H18.4615V10.4007Z" fill="black" />
              </svg>
            </a>
          </li>
          <style dangerouslySetInnerHTML={{__html: "\n                    @keyframes pulse {\n                        0% {\n                            transform: scale(0.95);\n                            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);\n                        }\n                        70% {\n                            transform: scale(1.1);\n                            box-shadow: 0 0 0 8px rgba(255, 0, 0, 0);\n                        }\n                        100% {\n                            transform: scale(0.95);\n                            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);\n                        }\n                    }\n\n                    #notificationDot {\n                        width: 10px;\n                        height: 10px;\n                        background-color: red;\n                        border-radius: 50%;\n                        display: none;\n                    }\n\n                    .blinking {\n                        animation: pulse 1.5s ease-in-out infinite;\n                    }\n                " }} />
          <li className="dropdown tasks-menu">
            <a href="#" onclick="myNotification()" style={{position: 'relative'}} className="bottom-tooltip" data-content="Notification">
              <div id="bellWrapper">
                <svg id="notificationBell" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6012 12.9633C16.923 11.7969 16.5629 10.1227 16.5629 8.125C16.5629 6.38452 15.8715 4.71532 14.6408 3.48461C13.4101 2.2539 11.7409 1.5625 10.0004 1.5625C8.2599 1.5625 6.59071 2.2539 5.36 3.48461C4.12929 4.71532 3.43789 6.38452 3.43789 8.125C3.43789 10.1234 3.07929 11.7969 2.40117 12.9633C2.2628 13.2012 2.18945 13.4713 2.18849 13.7465C2.18753 14.0218 2.25899 14.2924 2.3957 14.5312C2.53155 14.7702 2.72872 14.9687 2.96686 15.106C3.20501 15.2433 3.47549 15.3146 3.75039 15.3125H6.57695C6.65447 16.1669 7.04868 16.9614 7.68213 17.54C8.31558 18.1186 9.14248 18.4394 10.0004 18.4394C10.8583 18.4394 11.6852 18.1186 12.3186 17.54C12.9521 16.9614 13.3463 16.1669 13.4238 15.3125H16.2504C16.5249 15.3142 16.7949 15.2427 17.0326 15.1054C17.2703 14.9681 17.4671 14.7699 17.6027 14.5312C17.74 14.2927 17.8122 14.0223 17.8119 13.7471C17.8116 13.4718 17.7389 13.2015 17.6012 12.9633ZM10.0004 16.5625C9.64018 16.5626 9.29102 16.4382 9.01198 16.2104C8.73294 15.9826 8.54118 15.6654 8.46914 15.3125H11.5316C11.4596 15.6654 11.2678 15.9826 10.9888 16.2104C10.7098 16.4382 10.3606 16.5626 10.0004 16.5625ZM4.2707 13.4375C4.96211 12.0312 5.31289 10.2453 5.31289 8.125C5.31289 6.8818 5.80675 5.68951 6.68582 4.81044C7.5649 3.93136 8.75719 3.4375 10.0004 3.4375C11.2436 3.4375 12.4359 3.93136 13.315 4.81044C14.194 5.68951 14.6879 6.8818 14.6879 8.125C14.6879 10.2445 15.0379 12.0312 15.7293 13.4375H4.2707Z" fill="black" />
                </svg>
                <span id="notificationDot" style={{display: 'none', position: 'absolute', top: 14, right: 13, height: 10, width: 10, backgroundColor: 'red', borderRadius: '50%'}}>
                </span>
              </div>
            </a>
          </li>
          <li style={{height: '100%', display: 'flex', alignItems: 'center', marginRight: 10}} className="switch-app">
            <nav-menu-component />
          </li>
          <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" style={{display: 'flex', alignItems: 'center'}}>
              {/* <img style="width: 20px; margin-right: 5px; "
                          src="https://ingrails.com/school/admin_panel/icons/students.svg" alt="" class="nav_icon"> */}
              <svg width={20} height={20} viewBox="0 0 20 20" style={{marginRight: 4}} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 16.6665C17.5 15.2148 16.1083 13.9807 14.1667 13.5223M12.5 16.6665C12.5 14.8248 10.2617 13.3332 7.5 13.3332C4.73833 13.3332 2.5 14.8248 2.5 16.6665M12.5 10.8332C13.3841 10.8332 14.2319 10.482 14.857 9.85686C15.4821 9.23174 15.8333 8.38389 15.8333 7.49984C15.8333 6.61578 15.4821 5.76794 14.857 5.14281C14.2319 4.51769 13.3841 4.1665 12.5 4.1665M7.5 10.8332C6.61594 10.8332 5.7681 10.482 5.14298 9.85686C4.51786 9.23174 4.16667 8.38389 4.16667 7.49984C4.16667 6.61578 4.51786 5.76794 5.14298 5.14281C5.7681 4.51769 6.61594 4.1665 7.5 4.1665C8.38405 4.1665 9.2319 4.51769 9.85702 5.14281C10.4821 5.76794 10.8333 6.61578 10.8333 7.49984C10.8333 8.38389 10.4821 9.23174 9.85702 9.85686C9.2319 10.482 8.38405 10.8332 7.5 10.8332Z" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span> GPNREJINA<i className="caret" /></span>
            </a>
            <style dangerouslySetInnerHTML={{__html: "\n                        .user-footer:hover {\n                            background-color: #cfcfcf !important;\n                        }\n\n                        .navbar-nav>.user-menu>.dropdown-menu>li.user-footer {\n                            border-bottom: 1px solid #d3cfcf;\n                        }\n                    " }} />
            <ul className="dropdown-menu">
              <li className="dashboard-toggle-wrapper">
              </li>
              <li className="user-footer">
                <a href="javascript:void(0);" style={{fontSize: 14}} onclick="handleHashClick('staff-profile')">
                  <span style={{fontWeight: 'bold'}}>My Profile</span>
                </a>
              </li>
              <li className="user-footer">
                <a href="javascript:void(0);" onclick="exploreProducts()" style={{fontSize: 14}} className><span style={{fontWeight: 'bold'}}>Explore Products</span><br /> <span>See
                    other services provided by Veda</span></a>
              </li>
              <li className="user-footer">
                <a style={{color: 'red!important'}} id="logout" href="https://ingrails.com/school/client/logout" className>Logout</a>
              </li>
            </ul>
            {/* <ul class="dropdown-menu">
                      <li class="user-footer">
                          <div class="pull-right">
                              <a href="https://ingrails.com/school/client/logout" class="btn btn-default btn-flat">Sign out</a>
                          </div>
                      </li>
                  </ul> */}
          </li>
        </ul>
      </div>
    </nav>
  </header>
  {/*-sidenavbar*/}
  <div className=" row-offcanvas row-offcanvas-left">
    {/* Left side column. contains the logo and sidebar */}
    <aside className="left-side sidebar-offcanvas" style={{minHeight: 751}}>
      {/* sidebar: style can be found in sidebar.less */}
      <style dangerouslySetInnerHTML={{__html: "\n    .main-menu-text {\n        font-size: 14px;\n        padding: 18px 0;\n        color: #545353 !important;\n        cursor: default;\n        padding-left: 5px;\n        background: var(--inputRadius);\n        -moz-user-select: none;\n        -khtml-user-select: none;\n        -webkit-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    }\n\n    /* .sidebar .sidebar-menu .menu-lists .treeview-menu>li:not(.active) a {\n        border-top: 1px solid var(--borderLight) !important;\n    } */\n\n    .sidebar .sidebar-menu .menu-group li>a {\n        padding: 12px 5px 12px 15px;\n    }\n\n    .sidebar .sidebar-menu .menu-group li.active>a {\n        border-radius: var(--inputRadius);\n        background: #eaedf0 !important;\n        margin-top: 1px;\n    }\n\n    .sidebar-menu .menu-group li>a span {\n        width: 18px;\n        position: relative;\n        top: -5px;\n    }\n\n    .sidebar>.sidebar-menu .menu-group li>a,\n    .skin-blue .sidebar>.sidebar-menu .menu-group li {\n        /* border: none !important; */\n    }\n\n    .skin-blue .sidebar>.sidebar-menu .menu-group li>a {\n        font-size: 14px !important;\n        position: relative;\n        color: #44566c;\n    }\n\n    .sidebar-menu .menu-group li>a span {\n        all: unset;\n        color: #44566c;\n    }\n\n    .sidebar .sidebar-menu .menu-group li>a>.fa,\n    .sidebar .sidebar-menu .menu-group li>a>.glyphicon,\n    .sidebar .sidebar-menu .menu-group li>a>.ion {\n        width: 20px;\n    }\n\n    .sidebar .sidebar-menu hr {\n        margin-block: 10px !important;\n    }\n\n    .main-menu-text {\n        gap: 5px;\n        color: var(--textMidColor) !important;\n        font-weight: 500;\n    }\n\n    .sidebar .sidebar-menu .treeview-menu>li>a {\n        color: #3d4b5c;\n    }\n\n    .sidebar .sidebar-menu .menu-group .main-menu-text.active {\n        border-radius: var(--inputRadius);\n        background: #eaedf0 !important;\n    }\n\n    .sidebar .sidebar-menu .menu-group .main-menu-text.active .side-line::before {\n        content: '';\n        position: absolute;\n        left: 0;\n        width: 2px;\n        height: 80%;\n        display: inline-block;\n        background: #ED4554;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    .sidebar-menu .menu-group {\n        animation: 5s linear;\n    }\n" }} />
      <section className="sidebar">
        {/* Sidebar user panel */}
        <div className="user-panel" data-placement="bottom" title="Green Peace Academy Secondary School">
          <a data-app={304} href="https://ingrails.com/school/client?token=1754726545" className="image" style={{textAlign: 'center', display: 'block'}}>
            <img data-app={304} src="https://s3.veda-app.com/veda-app/assets/304/home/2024-08-04/ce3ssZ2nCCuA5M4T-1722751849.png" className="img" style={{border: 0, height: '60px!important', width: 'auto !important'}} alt="User Image" />
            <p className="logo-text">Green Peace Academy Secondary School</p>
          </a>
          <div className="text-align-center mt-1">
            <p className style={{padding: '4px 16px', fontSize: 15}}>Client ID:&nbsp;<span className="font-bold">N-0191</span></p>
          </div>
          <div className="text-align-center">
            <p className style={{padding: '4px 16px', fontSize: 15}}>Academic Year:&nbsp;<span className="font-bold academicYearSpan">2082</span>
            </p>
          </div>
          <div className="search-sidebar mt-1">
            <input style={{width: '100%'}} type="search" autoComplete="off" className="form-control" id="searchSidebarItems" placeholder="Search menus" />
          </div>
        </div>
        {/* sidebar menu: : style can be found in sidebar.less */}
        <ul className="sidebar-menu">
          <div className="menu-group">
            <p className="main-menu-text pointer relative flex align-items-center">
              <span className="side-line" />
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Course Management.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Academic</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Course Management.svg" alt className="nav_icon" />
                  <span>
                    Classroom Activities                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="teachers-routine" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Routine                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* end menu_groups loop */}
              <hr />
            </section>
          </div> {/* end group*/}
          <div className="menu-group">
            <p className="main-menu-text pointer relative flex align-items-center">
              <span className="side-line" />
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Student.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Student Management</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Student.svg" alt className="nav_icon" />
                  <span>
                    Student                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="students-lite" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Student List                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="student-performance-evaluation" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Student Evaluation                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Reports.svg" alt className="nav_icon" />
                  <span>
                    Report                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="students-print" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Print Data                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="students-group" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Students Group                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="students-record" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Previous Record                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="remarks-record" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Remarks Report                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="analytics-student-enrollment-wise" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Student Enrollment Report                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* end menu_groups loop */}
              <hr />
            </section>
          </div> {/* end group*/}
          <div className="menu-group">
            <p className="main-menu-text pointer relative flex align-items-center">
              <span className="side-line" />
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Books Management.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Library Management</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Books Management.svg" alt className="nav_icon" />
                  <span>
                    Book Management                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="library-book" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Book                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-bar-code" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Barcode                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-spine" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Spine                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Book Issue_Return.svg" alt className="nav_icon" />
                  <span>
                    Book Issue/Return                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="library-issue" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Manual Issue/Return                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-issue-barcode" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Auto Issue/Return                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="student-issue-return" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Student/Staff                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-reservation" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Reservation                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Report.svg" alt className="nav_icon" />
                  <span>
                    Report                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="library-report" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Report                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="download-books" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Download                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Setup.svg" alt className="nav_icon" />
                  <span>
                    Setup                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="library-book-type" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Book Type                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-room" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Room                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-rack" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Rack                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="import-books" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Import Book                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="update-books" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Update Book                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-setting" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Settings                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* end menu_groups loop */}
              <hr />
            </section>
          </div> {/* end group*/}
          <div className="menu-group">
            <p className="main-menu-text pointer relative flex align-items-center">
              <span className="side-line" />
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/online class.svg" alt className="nav_icon" width={20} />
              <span className="group-name">E-Learning</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/online class.svg" alt className="nav_icon" />
                  <span>
                    Online Class                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="online-class" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Start Class                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="online-class-account" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Account Configuration                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="online-class-report" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Report                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* end menu_groups loop */}
              <hr />
            </section>
          </div> {/* end group*/}
          <div className="menu-group">
            <p className="main-menu-text pointer relative flex align-items-center">
              <span className="side-line" />
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Academics.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Settings</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Academics.svg" alt className="nav_icon" />
                  <span>
                    Academics                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="subjects" style={{marginLeft: 10}}>
                      <i className="fa fa-laptop" /> <span>
                        Subjects                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* end menu_groups loop */}
              <hr />
            </section>
          </div> {/* end group*/}
          <div className="menu-group">
            <p className="main-menu-text pointer relative flex align-items-center">
              <span className="side-line" />
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Widgets.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Tools/Extras</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* single menu */}
              <li className>
                <a href="javascript:void(0);" data="widgets">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Widgets.svg" alt className="nav_icon" />
                  <span>Widgets</span>
                </a>
              </li>
              {/* end menu_groups loop */}
              <hr />
            </section>
          </div> {/* end group*/}
          <div className="menu-group">
            <p className="main-menu-text pointer relative flex align-items-center">
              <span className="side-line" />
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Account.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Account</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* single menu */}
              <li className>
                <a href="javascript:void(0);" data="res-password">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Account.svg" alt className="nav_icon" />
                  <span>Change Password</span>
                </a>
              </li>
              {/* end menu_groups loop */}
              <hr />
            </section>
          </div> {/* end group*/}
          {/* end menus loop */}
        </ul>
      </section>
      {/* /.sidebar */}
    </aside>
    {/* Right side column. Contains the navbar and content of the page */}
    <aside className="right-side" style={{paddingTop: 0, display: 'block'}}>
      <main className="app-container ">
        {/*  */}
        {/* <exam-session-notice-banner-component 
      id="modal__new_support_ticket" 
      class="cols-span-12" 
      showSupportMessage="true">
  </exam-session-notice-banner-component> */}
        <section className="cols-span-3 uptolg-cols-span-6">
          <quicklink-component style={{flex: 1}} id="quicklink-component" />
        </section>
        <overview-component id="overview-component" className="cols-span-5  uptolg-cols-span-6">
          <select-component id="gender-select" />
        </overview-component>
        <events-component className="cols-span-4 row-span-2 uptolg-cols-span-6" />
        <insights-component id="insights-component" className="cols-span-2  uptolg-cols-span-6 " />
        <birthday-component className="cols-span-6 uptolg-cols-span-6" />
        <dashboard-tab-component className="cols-span-8  uptolg-cols-span-12 uptolg-order-2">{/**/}
          <style dangerouslySetInnerHTML={{__html: "\n        .dashboard-tab-wrapper {\n          min-height: 427px;\n          border-radius: 4px;\n          border: 1px solid #e2e2e2;\n          padding: 13px 21px;\n        }\n        .dashboard-tab-wrapper .tab-header {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          flex-wrap: wrap;\n          gap: 10px;\n        }\n        .dashboard-tab-wrapper .tab-header .start {\n          display: flex;\n          align-items: center;\n          gap: 20px;\n          overflow-x: auto;\n        }\n        .dashboard-tab-wrapper .tab-header .end {\n          display: flex;\n          align-items: center;\n          gap: 4px;\n        }\n        .dashboard-tab-wrapper .tab {\n          color: #323232;\n          font-size: 14px;\n          font-weight: 600;\n          line-height: 130%; /* 18.2px */\n          padding: 10px 0px;\n          border: none;\n          background: transparent;\n          border-bottom: 2px solid transparent;\n        }\n        .dashboard-tab-wrapper .tab.active {\n          color: #0675e0;\n          border-bottom: 2px solid #0675e0;\n        }\n        .dashboard-tab-wrapper .tab-body {\n          margin-top: 20px;\n        }\n\n        .library-wrapper {\n          display: grid;\n          grid-template-columns: 1fr 1fr;\n          gap: 20px;\n        }\n        .library-wrapper h2 {\n        }\n        .library-wrapper .library-card {\n          border-radius: 4px;\n          border: 1px solid #e2e2e2;\n          height: 100%;\n          padding: 15px 20px;\n        }\n        .library-card-header {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          margin-bottom: 10px;\n        }\n        .library-card-body p {\n          color: var(--Alias-token-content-primary, #323232);\n          font-family: \"Fira Sans\";\n          font-size: 14px;\n          font-style: normal;\n          font-weight: 400;\n          line-height: 120%; /* 16.8px */\n          letter-spacing: -0.35px;\n        }\n        .form-control,\n        input[type=\"text\"].input-primary {\n          font-size: 15px;\n          font-weight: 400 !important;\n          padding: 2px 12px;\n          height: 33px;\n          border-radius: 4px !important;\n          border: 1px solid #e2e2e2;\n          background: #fbfbfb;\n          color: #323232;\n        }\n        tr .today {\n          background: var(\n            --Alias-token-background-accent01-normal,\n            #0675e0\n          ) !important;\n          color: #ffffff !important;\n        }\n        .scrollbar-sm::-webkit-scrollbar {\n          /* width: 2px; */\n          height: 2px;\n        }\n\n        .scrollbar-sm::-webkit-scrollbar-track {\n          background-color: #edeced;\n          border-radius: 100px;\n        }\n\n        .scrollbar-sm::-webkit-scrollbar-thumb {\n          background-color: #cbcacb;\n          border-radius: 100px;\n        }\n        @media only screen and (max-width: 800px) {\n          .library-wrapper {\n            grid-template-columns: 1fr;\n          }\n        }\n        @media only screen and (max-width: 600px) {\n          .form-control,\n          input[type=\"text\"].input-primary {\n            padding: 8px;\n            font-size: 12px;\n          }\n          .dashboard-tab-wrapper {\n            padding: 12px;\n          }\n        }\n      " }} />
          <section className="dashboard-tab-wrapper">
            <div className="tab-header">
              <div className="start scrollbar-sm">
                {/*?lit$009471226$*/}{/**/}
                <button className="tab active">
                  {/*?lit$009471226$*/}Attendance
                </button>
                {/**/}{/**/}
                <button className="tab ">
                  {/*?lit$009471226$*/}Assignments
                </button>
                {/**/}{/**/}
                <button className="tab ">
                  {/*?lit$009471226$*/}Homework
                </button>
                {/**/}{/**/}
                <button className="tab ">
                  {/*?lit$009471226$*/}Library
                </button>
                {/**/}
              </div>
              <div className="end">
                <select-component style={{visibility: 'visible'}}>
                </select-component>
                <input className="input-primary" type="text" id="dashboard-tab-datepicker" style={{display: 'inline-block'}} defaultValue="2025-08-09" />
                {/* <button-component
        type="anchor"
        href="lit$009471226$"
        onclick="localStorage.setItem('openAttendanceTab', 'true')"
      >
        View All
      </button-component> */}
                <button-component type="anchor" href="?token=1754726547237&&from=dashboard#attendance">
                  View All
                </button-component>
                {/* <button-component type="anchor" @click="lit$009471226$">
        View All
      </button-component> */}
              </div>
            </div>
            <div className="tab-body">
              {/*?lit$009471226$*/} <table-component>
              </table-component>
            </div>
          </section>
        </dashboard-tab-component>
        <notification-component className="cols-span-4 uptolg-cols-span-6 uptolg-order-1" />
        <new-dashboard-message-component className="cols-span-12  uptolg-order-2" />
        <dynamic-modal-component />
      </main>
      <style dangerouslySetInnerHTML={{__html: "\n    .app-container {\n        display: grid;\n        grid-template-columns: repeat(12, 1fr);\n        /* grid-template-columns: 1fr 2fr 1fr; */\n        row-gap: 16px;\n        column-gap: 16px;\n        width: 100%;\n        padding: 16px 30px;\n        background-color: #fff;\n        margin-top: 8px;\n    }\n\n    .component-wrapper {\n        border-radius: 4px;\n        padding: 20px;\n        border: 1px solid #E2E2E2;\n    }\n\n    quicklink-component {\n        height: 100%;\n    }\n\n    .cols-span-2 {\n        grid-column: span 2;\n    }\n\n    .cols-span-3 {\n        grid-column: span 3;\n    }\n\n    .cols-span-4 {\n        grid-column: span 4;\n    }\n\n    .cols-span-5 {\n        grid-column: span 5;\n    }\n\n    .cols-span-6 {\n        grid-column: span 6;\n    }\n\n    .cols-span-8 {\n        grid-column: span 8;\n    }\n\n    .cols-span-12 {\n        grid-column: span 12;\n    }\n\n    .row-span-2 {\n        grid-row: span 2;\n    }\n\n    .app-container> :first-child {\n        display: flex;\n        flex-direction: column;\n        gap: 14px;\n    }\n\n    @media screen and (max-width: 1400px) {\n\n        .uptolg-cols-span-6 {\n            grid-column: span 6;\n        }\n\n        .uptolg-cols-span-12 {\n            grid-column: span 12;\n        }\n\n        .uptolg-order-1 {\n            order: 1\n        }\n\n        .uptolg-order-2 {\n            order: 2\n        }\n\n    }\n\n    @media screen and (max-width: 700px) {\n\n        .uptolg-cols-span-6 {\n            grid-column: span 12;\n        }\n\n\n\n\n    }\n" }} />
      <div className="modal fade modal__new_support_ticket" tabIndex={-1} role="dialog" aria-labelledby="New Support Ticket" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{width: 560, overflow: 'hidden'}}>
            <form method="POST" action="https://ingrails.com/school/support_ticket_management/supportTicket/create" onsubmit="createNewSupportTicket()" encType="multipart/form-data">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">×</span><span className="sr-only">Close</span>
                </button>
                <h4 className="modal-title">Create New Ticket</h4>
              </div>
              <div className="modal-body" />
              <div className="modal-footer">
                <button id="ticket-submit-button" type="submit" className="btn btn-primary">Create Ticket</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </aside>
    <footer className="copyright-wrapper">
      <p>
        Copyright
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" id="Copyright--Streamline-Micro" height={10} width={10}>
        <desc>Copyright Streamline Icon: https://streamlinehq.com</desc>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M0.5 5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0" strokeWidth={1} />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.355 3.615a1.039 1.039 0 0 0 -0.98 -0.692h-0.692c-0.573 0 -1.038 0.465 -1.038 1.039v2.076c0 0.574 0.465 1.039 1.038 1.039h0.693c0.452 0 0.837 -0.289 0.98 -0.692" strokeWidth={1} />
      </svg>
      <p>
        2024
        <a className="veda-app" target="_blank" href="https://www.veda-app.com/">Veda App</a>
        . All Rights Reserved
      </p>
    </footer>
    {/* /.right-side */}
  </div>{/* ./wrapper */}
  {/* footer */}
  <div className="modal fade modal-edit-student" id="modal-edit-student" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" style={{width: 900}}>
      <div className="modal-content" style={{overflowX: 'auto'}}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          <h4 className="modal-title">Edit Student Detail</h4>
        </div>
        <div className="modal-edit-student-alert">
          <div className="alert alert-warning-edit alert-dismissable" style={{display: 'none'}}>
            <button type="button" className="close" onclick="javascript:hideMessageBox();">×</button>
            <p id="error-message-edit" />
          </div>
          <div className="alert alert-success-edit alert-dismissable" id="success-message-box" style={{display: 'none'}}>
            <button type="button" className="close" onclick="javascript:hideMessageBox();">×</button>
            <p id="success-message-edit" />
          </div>
        </div>
        <div className="modal-body" id="editBoxStudent">
        </div>
      </div>
      {/* /.modal-content */}
    </div>
  </div>
  <div className="modal fade modal-edit" id="modal-edit" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content" style={{overflowX: 'auto'}}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          <h4 className="modal-title">Edit Content</h4>
        </div>
        <div className="modal-edit-alert">
          <div className="alert alert-warning-edit alert-dismissable" style={{display: 'none'}}>
            <button type="button" className="close" onclick="javascript:hideMessageBox();">×</button>
            <p id="error-message-edit" />
          </div>
          <div className="alert alert-success-edit alert-dismissable" id="success-message-box" style={{display: 'none'}}>
            <button type="button" className="close" onclick="javascript:hideMessageBox();">×</button>
            <p id="success-message-edit" />
          </div>
        </div>
        <div className="modal-body" id="editBox">
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
  {/* *********************************** Default Modal,Feedback Modal ************************************* */}
  <div className="modal fade modal-log" id="modal-log" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content" style={{overflowX: 'auto'}}>
        {/* <div class="modal-header">
              <button type="button" class="close"  data-dismiss="modal">
                  <img src="https://ingrails.com/school/admin_panel/icons/x.svg" alt="close">
              </button>
              <h4 class="modal-title-log">Edit Content</h4>
          </div> */}
        <div className="modal-log-alert">
          <div className="alert alert-warning-edit alert-dismissable" style={{display: 'none'}}>
            <button type="button" className="close" onclick="javascript:hideMessageBox();">×</button>
            <p id="error-message-edit" />
          </div>
          <div className="alert alert-success-edit alert-dismissable" id="success-message-box" style={{display: 'none'}}>
            <button type="button" className="close" onclick="javascript:hideMessageBox();">×</button>
            <p id="success-message-edit" />
          </div>
        </div>
        <div className="modal-body-log" id="changeLog">
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
  <div className="modal fade modal-detail" id="modal-detail" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog" style={{width: '100%', padding: 30}}>
      <div className="modal-content" style={{overflow: 'hidden'}}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          <h4 className="modal-title">Detail</h4>
        </div>
        <div>
          <div className="alert alert-warning alert-dismissable" style={{display: 'none'}}>
            <button type="button" className="close" onclick="javascript:hideMessageBox();">×</button>
            <p id="error-message">
            </p><p />
            <p />
          </div>
          <div className="alert alert-success alert-dismissable" id="success-message-box" style={{display: 'none'}}>
            <button type="button" className="close" onclick="javascript:hideMessageBox();">×</button>
            <p id="success-message" />
          </div>
          <div className="modal-body" id="detailBox">
          </div>
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
  <div className="modal fade modal-sms-advertisement" id="modal-sms-advertisement" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content" style={{width: 900, overflow: 'hidden', right: 125}}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          <h4 className="modal-title">SMS - Reach Every Parents on Time</h4>
        </div>
        <div className="modal-body" id="smsDetailBox">
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
  <div id="feedback-modal-id" className="feedback-modal-overlay">
    <style dangerouslySetInnerHTML={{__html: "\n#multi-step-form {\n    max-width: 1350px;\n    margin: 0 auto;\n}\n.survey-box.hide {\n  display: none !important;\n}\n\n#feedback-title{\n    color: #000;\n    font-family: \"Fira Sans\";\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 26px; /* 162.5% */\n}\n\n#veda-header, .survey-box-title{\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n}\n\n#feedback {\n\n    /* background-color: white; */\n    /* min-height: 100vh;\n    min-width: 100vw;\n    max-width: 100vw; */\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\ndiv:where(.swal2-container) {\n    z-index: 99999 !important;\n}\n\n.progress {\n    /* width: 60px; */\n    height: 1px;\n}\n\n.container__box {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    padding-top: 120px;\n    flex-direction: column;\n}\n\n.goback-btn {\n    display: inline-flex;\n    padding: 12px 18px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    background: #ECECEC;\n    color: #000 !important;\n    /* width: 218px; */\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.quiz__box,.survey-box {\n    position: absolute;\n    margin-top: 120px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: block;\n    max-width: 518px;\n    width: 100%;\n    min-height: 428px;\n    height: auto;\n    overflow-y: auto;\n    border-radius: 16px;\n    background: #FFF;\n}\n\n\n.d-flex {\n    display: flex;\n}\n\n.justify-content-center {\n    justify-content: center;\n}\n\n.align-items-center {\n    align-items: center;\n}\n\n.survey-box-desc {\n    /* width: 528px; */\n    color: #303030;\n    font-family: \"Fira Sans\";\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 28px; /* 200% */\n    margin-top: 16px;\n}\n\n.step {\n    margin-top: 0px;\n    padding: 30px 40px 38px 40px;\n    display: flex;\n    flex-direction: column;\n    min-height: 400px;\n}\n\n.radio-list {\n    width: 100%;\n    padding: 12px 24px;\n    text-align: center;\n    background: #ECECEC;\n}\n\n.radio-list p {\n    text-align: left;\n    word-break: break-all;\n}\n\n.question-heading {\n    color: #000;\nfont-size: 16px;\nfont-style: normal;\nfont-weight: 400;\nline-height: normal;\n}\n\n.prev-btn,\n.next-btn,\n.submit-btn,\n.survey-btn, .later-btn {\n    display: flex;\n    min-width: 115px;\n    padding: 12px 24px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    border-radius: 4px;\n    background: #0675E0;\n    border:none;\n    color:#fff;\n    width: fit-content;\n}\n.later-btn,.prev-btn{\n    background: #7e7e7e;\n}\n\n.prev-btn:hover, .next-btn:hover, .submit-btn:hover, .survey-btn:hover, .later-btn:hover {\n    filter: brightness(0.9);\n    cursor: pointer;\n    transition: filter 200ms ease;\n}\n.error-message-container {\n    margin-top: 10px;\n}\n\n.error-message {\n    color: red;\n}\n\n.rate {\n    /* float: left; */\n    height: 46px;\n    width: 230px;\n    margin-right: 300;\n    margin-top: 10px;\n}\n\n.rate:not(:checked)>input {\n    position: absolute;\n    top: -9999px;\n}\n\n.rate:not(:checked)>label {\n    float: right;\n    width: 1em;\n    overflow: hidden;\n    white-space: nowrap;\n    cursor: pointer;\n    font-size: 30px;\n    color: #ccc;\n}\n\n.rate:not(:checked)>label:before {\n    content: '★ ';\n}\n\n.rate>input:checked~label {\n    color: #ff9f43;\n}\n\n.rate:not(:checked)>label:hover,\n.rate:not(:checked)>label:hover~label {\n    color: #ff9f43;\n}\n\n.rate>input:checked+label:hover,\n.rate>input:checked+label:hover~label,\n.rate>input:checked~label:hover,\n.rate>input:checked~label:hover~label,\n.rate>label:hover~input:checked~label {\n    color: #ff9f43;\n}\n\n/* .form-group>label {\n    bottom: 32px;\n    left: 15px;\n    position: relative;\n    background-color: white;\n    padding: 0px 5px 0px 5px;\n    font-size: 14px;\n    transition: 0.2s;\n    pointer-events: none;\n    color: #949494;\n} */\n\n.form-control-2 {\n    height: 48px;\n    background-color: #fff;\n    width: 500px;\n}\n\n.form-control-2:focus~label {\n    font-size: 10px;\n    bottom: 52px;\n    color: blue;\n}\n\n.form-control-2:valid~label {\n    bottom: 52px;\n    font-size: 10px;\n    color: blue;\n}\n\n.rate>label:not(:last-child) {\n    margin-left: 20px;\n}\n\n.emoji__label {\n    filter: grayscale(1);\n    font-size: 32px;\n    cursor: pointer;\n    opacity: 0.7;\n}\n\n.emoji__label:hover {\n    opacity: 1;\n    filter: grayscale(0.3);\n    transform: scale(1.1);\n    transition: 100ms ease;\n}\n\n.emoji__label:checked {\n    filter: grayscale(0);\n    opacity: 1;\n    transition: all 100ms ease;\n}\n\n.emoji {\n    display: grid;\n    grid-template-columns: repeat(5, 78px);\n\n    margin-bottom: 60px;\n}\n\n.emoji-box {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    text-align: center;\n}\n\n.emoji__title {\n    font-size: 14px;\n}\n\n.emoji input[type=\"radio\"] {\n    display: none;\n}\n\n.emoji input[type=\"radio\"]:checked+label {\n    filter: grayscale(0);\n    opacity: 1;\n    transition: all 100ms ease;\n}\n\n@media only screen and (max-width: 600px) {\n    .step{\n        padding: 10px 20px;\n\n    }\n    .emoji__label {\n        font-size:24px;\n    }\n    .emoji {\n        display: grid;\n        grid-template-columns: repeat(5, 62px);\n    }\n    .emoji__title {\n        font-size: 12px;\n    }\n\n}\n" }} />
    <div id="feedback" className="row">
      <div className="survey-box">
        <div style={{borderBottom: '1px solid #ECECEC', textAlign: 'start', display: 'flex', justifyContent: 'space-between', padding: '19px 30px 12px 30px'}}>
          <p className="survey-box-title">Take a Feedback</p>
          <div onclick="closeModal()" style={{cursor: 'pointer', height: 16, width: 16}}>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </a>
          </div>
        </div>
        <div style={{padding: '24px 29px 34px 29px', display: 'flex', flexDirection: 'column', minHeight: 400}}>
          <div style={{flex: 1}}>
            <h2 id="feedback-title">Tell us about your experience so far</h2>
            {/* <p class="survey-box-desc">Hi GPNREJINA,</p> */}
            <p className="survey-box-desc">Dear Sir/Ma'am</p>
            <p id="feedback-desc" className="survey-box-desc" style={{whiteSpace: 'pre-line'}}>
              We would appreciate your feedback. It has been a certain period since you started using the Veda system in your institute. Can you share your experience and how things have been progressing during this time?                  </p>
          </div>
          <div style={{marginTop: 32, gap: 14}} className="d-flex justify-content-center"> 
            {/* <button class="later-btn" onclick="closeModal()">Later</button> */}
            <button data-fetch-url="https://ingrails.com/school/client/getFeedbackFromJsonData" className="survey-btn">Start Feedback</button>
          </div>
        </div>
      </div>
      <div style={{display: 'none'}} className="quiz__box">
        <div style={{borderBottom: '1px solid #ECECEC', textAlign: 'start', display: 'flex', justifyContent: 'space-between', padding: '19px 30px 12px 30px'}}>
          <p id="veda-header">Veda Survey</p>
          <div onclick="closeModal()" style={{cursor: 'pointer', height: 16, width: 16}}>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </div>
        </div>
        <form id="multi-step-form">
        </form>
      </div>
      {/* <div style="position: absolute; bottom: 120px; right:30px">
<a href="https://ingrails.com/school/client?token=1754726545" class="goback-btn">Back To Dashboard</a>

</div> */}
    </div>
  </div>
  <div className="modal fade modal-reservation" id="modal-reservation" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content" style={{width: 560, overflow: 'hidden'}}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          <h4 className="modal-title">Detail</h4>
        </div>
        <div className="modal-body" id="reservationBox">
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
  <style dangerouslySetInnerHTML={{__html: "\n    #modal-official-email .container {\n        position: relative;\n    }\n\n    .popup {\n        background-color: #ffff;\n        border-radius: 10px;\n        /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */\n        padding: 40px;\n        position: relative;\n        /* text-align: center; */\n    }\n\n    .modal-one {\n        width: 600px;\n    }\n\n    .modal-two {\n        width: 500px;\n    }\n\n    .popup h2 {\n        font-size: 24px;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n    }\n\n    .popup p,\n    #modal-official-email li {\n        color: #797676;\n        font-family: \"Fira Sans\";\n        font-size: 18px;\n        font-style: normal;\n        font-weight: 400;\n        line-height: normal;\n    }\n\n    .popup input[type=\"email\"] {\n        width: 100%;\n        padding: 10px;\n        margin: 10px 0;\n        font-size: 16px;\n        border-radius: 4px;\n        border: 1px solid #C5C3C3;\n        background: #FFF;\n    }\n\n    .popup .otp-inputs input[type=\"text\"] {\n        border-radius: 2px;\n        background: #f9f9f9;\n        border: 1px solid transparent;\n        font-size: 18px;\n    }\n\n    .popup input::placeholder {\n        color: #C5C3C3;\n    }\n\n    .popup input:focus,\n    .popup .otp-inputs input[type=\"text\"]:focus {\n        border-color: #528BFF;\n        outline: none;\n        box-shadow: 0 0 0;\n    }\n\n    .popup .otp-inputs {\n        display: flex;\n        justify-content: center;\n        gap: 24px;\n    }\n\n    .popup .otp-inputs input[type=\"text\"] {\n        height: 60px;\n        width: 60px;\n        text-align: center;\n    }\n\n    #official_email:disabled:hover {\n        cursor: not-allowed;\n    }\n\n    #official_email:disabled {\n        background-color: #f9f9f9;\n    }\n\n    .popup .buttons {\n        display: flex;\n        justify-content: flex-end;\n        gap: 18px;\n        margin-top: 20px;\n        /* padding: 0 30px; */\n    }\n\n    .popup button {\n        padding: 10px 20px;\n        border: none;\n        border-radius: 8px;\n        cursor: pointer;\n        font-size: 18px;\n    }\n\n    .popup button.cancel {\n        background-color: #7e7e7e;\n        color: #fff;\n    }\n\n    .popup button:hover {\n        filter: brightness(90%);\n    }\n\n    .popup button.send {\n        background-color: #195ce3;\n        color: #fff;\n    }\n\n    .popup button.resend {\n        display: block;\n        margin: 24px auto;\n        color: #528bff;\n        text-decoration: underline;\n        font-size: 18px;\n        text-align: center;\n        background-color: transparent;\n    }\n\n    .popup button.resend:hover {\n        text-decoration: underline;\n    }\n\n    .cross-btn {\n        cursor: pointer;\n        font-size: 22px;\n        color: #C5C3C3;\n        font-weight: 700;\n        position: absolute;\n        top: 20;\n        right: 20;\n    }\n\n    .otp-buttons .btn-verify-otp {\n        margin: auto;\n    }\n\n    .modal-official-email,.modal-otp-code {\n        background: rgba(217, 217, 217, 0.80) !important;\n    }\n\n\n    .modal-official-email li {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        margin-bottom: 4px;\n    }\n\n    .modal-official-email .tick-icon {\n        width: 24px;\n        height: 24px;\n    }\n\n    #otp-valid-time-message {\n        text-align: center;\n        margin-bottom: 12px;\n    }\n\n    .tooltipTemp {\n        position: relative;\n        display: inline-block;\n        margin-top: 4px;\n        cursor: pointer;\n    }\n\n    /* Tooltip text */\n    .tooltipTemp .tooltiptextTempLeft {\n        visibility: hidden;\n        width: 300px;\n        background-color: #454443;\n        color: #fff;\n        text-align: center;\n        padding: 5px 0;\n        border-radius: 6px;\n        left: 0;\n        top: -30px;\n        position: absolute;\n        z-index: 1;\n    }\n\n    .tooltipTemp:hover .tooltiptextTempLeft {\n        visibility: visible;\n    }\n\n    .note-text {\n        font-weight: 600;\n        color: #1b1b1b;\n    }\n\n    .verification-modal {\n        width: 600px;\n    }\n\n    @media screen and (max-width: 768px) {\n        .verification-modal {\n            width: 100% !important;\n        }\n\n        .modal-one {\n            width: 100% !important;\n        }\n        .popup{\n            padding: 20px !important;\n        }\n\n        .popup h2{\n            font-size: 18px !important;\n        }\n\n        .popup p{\n            font-size: 14px !important;\n        }\n        .popup button{\n            font-size: 14px;\n            padding: 8px 12px;\n        }\n        .popup p, #modal-official-email li{\n            font-size: 14px !important;\n        }\n        .modal-dialog{\n            margin: 20px 0 !important;\n        }\n    }\n" }} />
  {/* otp modal start */}
  <div className="modal fade modal-official-email" id="modal-official-email" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
    <div className="modal-dialog modal-lg verification-modal">
      <section style={{padding: 10}}>
        <div className="container">
          <div className="popup modal-one" id="email-verification"><span className="cross-btn" onclick="closeVerificationModal('modal-official-email')">
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0575 9.00002L14.7825 4.28252C14.9237 4.14129 15.0031 3.94974 15.0031 3.75002C15.0031 3.55029 14.9237 3.35874 14.7825 3.21752C14.6413 3.07629 14.4497 2.99695 14.25 2.99695C14.0503 2.99695 13.8587 3.07629 13.7175 3.21752L9.00002 7.94252L4.28252 3.21752C4.14129 3.07629 3.94974 2.99695 3.75002 2.99695C3.55029 2.99695 3.35874 3.07629 3.21752 3.21752C3.07629 3.35874 2.99695 3.55029 2.99695 3.75002C2.99695 3.94974 3.07629 4.14129 3.21752 4.28252L7.94252 9.00002L3.21752 13.7175C3.14722 13.7872 3.09142 13.8702 3.05335 13.9616C3.01527 14.053 2.99567 14.151 2.99567 14.25C2.99567 14.349 3.01527 14.4471 3.05335 14.5384C3.09142 14.6298 3.14722 14.7128 3.21752 14.7825C3.28724 14.8528 3.37019 14.9086 3.46158 14.9467C3.55298 14.9848 3.65101 15.0044 3.75002 15.0044C3.84902 15.0044 3.94705 14.9848 4.03845 14.9467C4.12984 14.9086 4.21279 14.8528 4.28252 14.7825L9.00002 10.0575L13.7175 14.7825C13.7872 14.8528 13.8702 14.9086 13.9616 14.9467C14.053 14.9848 14.151 15.0044 14.25 15.0044C14.349 15.0044 14.4471 14.9848 14.5384 14.9467C14.6298 14.9086 14.7128 14.8528 14.7825 14.7825C14.8528 14.7128 14.9086 14.6298 14.9467 14.5384C14.9848 14.4471 15.0044 14.349 15.0044 14.25C15.0044 14.151 14.9848 14.053 14.9467 13.9616C14.9086 13.8702 14.8528 13.7872 14.7825 13.7175L10.0575 9.00002Z" fill="#C5C3C3" />
              </svg>
            </span>
            <h2>Official Email Verification</h2>
            <div style={{marginTop: 24, paddingBottom: 24}}>
              <p>
                Dear user,
              </p>
              <p>
                We’re working on improving your Veda experience, and one way we can do that is by making sure we have current email address of our users.
              </p>
              <p style={{marginTop: 16, marginBottom: 9}}>This email address will be used for:</p>
              <ul>
                <li>
                  <div className="tick-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M18.71 7.21001C18.617 7.11628 18.5064 7.04189 18.3846 6.99112C18.2627 6.94035 18.132 6.91422 18 6.91422C17.868 6.91422 17.7373 6.94035 17.6154 6.99112C17.4936 7.04189 17.383 7.11628 17.29 7.21001L9.84001 14.67L6.71001 11.53C6.61349 11.4368 6.49955 11.3635 6.37469 11.3143C6.24984 11.2651 6.11651 11.2409 5.98233 11.2432C5.84815 11.2456 5.71574 11.2743 5.59266 11.3278C5.46959 11.3813 5.35825 11.4585 5.26501 11.555C5.17177 11.6515 5.09846 11.7655 5.04925 11.8903C5.00005 12.0152 4.97592 12.1485 4.97824 12.2827C4.98056 12.4169 5.00929 12.5493 5.06278 12.6724C5.11628 12.7954 5.19349 12.9068 5.29001 13L9.13001 16.84C9.22297 16.9337 9.33358 17.0081 9.45543 17.0589C9.57729 17.1097 9.708 17.1358 9.84001 17.1358C9.97202 17.1358 10.1027 17.1097 10.2246 17.0589C10.3464 17.0081 10.457 16.9337 10.55 16.84L18.71 8.68001C18.8115 8.58637 18.8925 8.47272 18.9479 8.34622C19.0033 8.21972 19.0319 8.08312 19.0319 7.94501C19.0319 7.80691 19.0033 7.67031 18.9479 7.54381C18.8925 7.41731 18.8115 7.30366 18.71 7.21001Z" fill="#797676" />
                    </svg>
                  </div>
                  Sending you important Veda updates
                </li>
                <li>
                  <div className="tick-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M18.71 7.21001C18.617 7.11628 18.5064 7.04189 18.3846 6.99112C18.2627 6.94035 18.132 6.91422 18 6.91422C17.868 6.91422 17.7373 6.94035 17.6154 6.99112C17.4936 7.04189 17.383 7.11628 17.29 7.21001L9.84001 14.67L6.71001 11.53C6.61349 11.4368 6.49955 11.3635 6.37469 11.3143C6.24984 11.2651 6.11651 11.2409 5.98233 11.2432C5.84815 11.2456 5.71574 11.2743 5.59266 11.3278C5.46959 11.3813 5.35825 11.4585 5.26501 11.555C5.17177 11.6515 5.09846 11.7655 5.04925 11.8903C5.00005 12.0152 4.97592 12.1485 4.97824 12.2827C4.98056 12.4169 5.00929 12.5493 5.06278 12.6724C5.11628 12.7954 5.19349 12.9068 5.29001 13L9.13001 16.84C9.22297 16.9337 9.33358 17.0081 9.45543 17.0589C9.57729 17.1097 9.708 17.1358 9.84001 17.1358C9.97202 17.1358 10.1027 17.1097 10.2246 17.0589C10.3464 17.0081 10.457 16.9337 10.55 16.84L18.71 8.68001C18.8115 8.58637 18.8925 8.47272 18.9479 8.34622C19.0033 8.21972 19.0319 8.08312 19.0319 7.94501C19.0319 7.80691 19.0033 7.67031 18.9479 7.54381C18.8925 7.41731 18.8115 7.30366 18.71 7.21001Z" fill="#797676" />
                    </svg>
                  </div>Two factor authentication (an extra layer of security for your account)
                </li>
                <li>
                  <div className="tick-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M18.71 7.21001C18.617 7.11628 18.5064 7.04189 18.3846 6.99112C18.2627 6.94035 18.132 6.91422 18 6.91422C17.868 6.91422 17.7373 6.94035 17.6154 6.99112C17.4936 7.04189 17.383 7.11628 17.29 7.21001L9.84001 14.67L6.71001 11.53C6.61349 11.4368 6.49955 11.3635 6.37469 11.3143C6.24984 11.2651 6.11651 11.2409 5.98233 11.2432C5.84815 11.2456 5.71574 11.2743 5.59266 11.3278C5.46959 11.3813 5.35825 11.4585 5.26501 11.555C5.17177 11.6515 5.09846 11.7655 5.04925 11.8903C5.00005 12.0152 4.97592 12.1485 4.97824 12.2827C4.98056 12.4169 5.00929 12.5493 5.06278 12.6724C5.11628 12.7954 5.19349 12.9068 5.29001 13L9.13001 16.84C9.22297 16.9337 9.33358 17.0081 9.45543 17.0589C9.57729 17.1097 9.708 17.1358 9.84001 17.1358C9.97202 17.1358 10.1027 17.1097 10.2246 17.0589C10.3464 17.0081 10.457 16.9337 10.55 16.84L18.71 8.68001C18.8115 8.58637 18.8925 8.47272 18.9479 8.34622C19.0033 8.21972 19.0319 8.08312 19.0319 7.94501C19.0319 7.80691 19.0033 7.67031 18.9479 7.54381C18.8925 7.41731 18.8115 7.30366 18.71 7.21001Z" fill="#797676" />
                    </svg>
                  </div>Keeping you informed about new features
                </li>
                <li style={{marginTop: 12}}>
                  <div className="tick-icon">
                  </div>
                  *Don’t worry, updating your email won’t change your login email.
                </li>
              </ul>
            </div>
            <div style={{paddingTop: 24, borderTop: '1px solid #D8D8D8', marginBottom: 24}}>
              <p>
                Please take a moment to enter your valid email address
              </p>
            </div>
            <input type="email" id="official_email" name="official_email" placeholder="Enter your official email" defaultValue />
            <div style={{paddingTop: 24, marginBottom: 24}}>
              <input type="checkbox" id="use-primary-mail" onchange="usePrimaryEmail(this.checked,this.value)" defaultValue="GPNREJINA@ingrails.com" />
              <label htmlFor="use-primary-mail">
                Use my primary email (GPN******@ingrails.com)
              </label>
            </div>
            <div className="buttons d-flex gap-2">
              <li className="dropdown user user-menu" style={{listStyle: 'none', marginBottom: 0}}>
                <button data-toggle="dropdown" className="btn btn-secondary dropdown-toggle cancel" style={{display: 'flex', alignItems: 'center', gap: 8}} type="button" id="remindDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Remind Me Later
                  <i className="fa fa-chevron-down" aria-hidden="true" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="remindDropdown">
                  <li style={{display: 'none'}}><a style={{width: '100%'}} className="dropdown-item remind-me-later-test" href="javascript:void(0)" onclick="closeVerificationModal('modal-official-email','10sec')">After 10 seconds</a></li>
                  <li><a style={{width: '100%'}} className="dropdown-item" href="javascript:void(0)" onclick="closeVerificationModal('modal-official-email','1hr')">After 1 Hour</a></li>
                  <li><a onclick="closeVerificationModal('modal-official-email','4hr')" style={{width: '100%'}} className="dropdown-item" href="javascript:void(0)">After 4 Hours</a></li>
                  <li><a onclick="closeVerificationModal('modal-official-email','6hr')" style={{width: '100%'}} className="dropdown-item" href="javascript:void(0)">After 6 Hours</a></li>
                  <li><a onclick="closeVerificationModal('modal-official-email','tomorrow')" style={{width: '100%'}} className="dropdown-item" href="javascript:void(0)">Tomorrow</a></li>
                </ul>
              </li>
              <button type="submit" className="btn btn-send-otp send" onclick="sendOtp('GPNREJINA@ingrails.com');">Send OTP</button>
            </div></div>
        </div>
      </section>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
  {/* otp model end */}
  {/* otp modal start */}
  <div className="modal fade modal-otp-code" id="modal-otp-code" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" style={{width: 500}}>
      <section style={{padding: 10}}>
        <div className="container">
          <div className="popup modal-two" id="otp-verification">
            <span className="cross-btn" onclick="closeVerificationModal('modal-otp-code')">
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0575 9.00002L14.7825 4.28252C14.9237 4.14129 15.0031 3.94974 15.0031 3.75002C15.0031 3.55029 14.9237 3.35874 14.7825 3.21752C14.6413 3.07629 14.4497 2.99695 14.25 2.99695C14.0503 2.99695 13.8587 3.07629 13.7175 3.21752L9.00002 7.94252L4.28252 3.21752C4.14129 3.07629 3.94974 2.99695 3.75002 2.99695C3.55029 2.99695 3.35874 3.07629 3.21752 3.21752C3.07629 3.35874 2.99695 3.55029 2.99695 3.75002C2.99695 3.94974 3.07629 4.14129 3.21752 4.28252L7.94252 9.00002L3.21752 13.7175C3.14722 13.7872 3.09142 13.8702 3.05335 13.9616C3.01527 14.053 2.99567 14.151 2.99567 14.25C2.99567 14.349 3.01527 14.4471 3.05335 14.5384C3.09142 14.6298 3.14722 14.7128 3.21752 14.7825C3.28724 14.8528 3.37019 14.9086 3.46158 14.9467C3.55298 14.9848 3.65101 15.0044 3.75002 15.0044C3.84902 15.0044 3.94705 14.9848 4.03845 14.9467C4.12984 14.9086 4.21279 14.8528 4.28252 14.7825L9.00002 10.0575L13.7175 14.7825C13.7872 14.8528 13.8702 14.9086 13.9616 14.9467C14.053 14.9848 14.151 15.0044 14.25 15.0044C14.349 15.0044 14.4471 14.9848 14.5384 14.9467C14.6298 14.9086 14.7128 14.8528 14.7825 14.7825C14.8528 14.7128 14.9086 14.6298 14.9467 14.5384C14.9848 14.4471 15.0044 14.349 15.0044 14.25C15.0044 14.151 14.9848 14.053 14.9467 13.9616C14.9086 13.8702 14.8528 13.7872 14.7825 13.7175L10.0575 9.00002Z" fill="#C5C3C3" />
              </svg>
            </span>
            <h2>Official Email Verification</h2>
            <p style={{margin: '24px 0'}}>Please enter the One Time Password (OTP) you received from us.</p>
            <div className="otp-inputs">
              <input type="text" id="otp_code_1" maxLength={1} />
              <input type="text" id="otp_code_2" maxLength={1} />
              <input type="text" id="otp_code_3" maxLength={1} />
              <input type="text" id="otp_code_4" maxLength={1} />
            </div>
            <input type="hidden" id="valid_official_email" />
            <input type="hidden" id="valid_primary_email" />
            <button className="resend" id="resend-otp" onclick="resendOtp();">Resend OTP</button>
            <p id="otp-valid-time-message">
              OTP sent! Please check your email.<br />
              OTP valid for <span id="otp-valid-time" />
            </p>
            <div className="buttons otp-buttons">
              {/* <button class="cancel btn-verify-cancel" onclick="closeVerificationModal('modal-otp-code')">Cancel</button> */}
              <button type="submit" className="btn btn-verify-otp send" onclick="verifyOtp();">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* /.modal-dialog */}
  </div>
  <div className="support_ticket_floating_button" style={{position: 'fixed', bottom: 30, right: 30}} data-enable-feedback="no">
    <input type="checkbox" className="simple" id="floating_button_checkbox" />
    <div className="fab">
      <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" style={{top: 6, left: 6, color: 'white'}} viewBox="0 0 600 600">
        <path d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={28}>
        </path>
        <circle cx={250} cy={348} r={20} fill="currentColor" />
      </svg>
    </div>
    <div className="fab-child">Help and Resource</div>
    <div className="fac">
      <a href="javascript:void(0);" className="fac-item" id="get-dashboard-tour" style={{display: 'block'}}>Get a Tour</a>
      <a href="javascript:void(0);" onclick="changeLog()" className="fac-item">What's New</a>
      <a href="javascript:void(0);" onclick="javascript:videoGuide()" className="fac-item">Help</a>
    </div>
  </div>
  {/* jQuery 2.0.2 */}
  {/*  */}
  {/*  */}
  {/*  */}
  {/* Bootstrap */}
  {/*  */}
  {/* Morris.js charts */}
  {/*        */}
  {/* Sparkline */}
  {/* jvectormap */}
  {/*
  */}
  {/* jQuery Knob Chart */}
  {/* daterangepicker */}
  {/* datepicker */}
  {/* Bootstrap WYSIHTML5 */}
  {/* iCheck */}
  {/*venobox lightbox*/}
  {/* AdminLTE App */}
  {/* AdminLTE dashboard demo (This is only for demo purposes) */}
  {/**/}
  {/* AdminLTE for demo purposes */}
  {/*  */}
  {/*  */}
  <link rel="stylesheet" href="https://ingrails.com/school/admin_panel/css/select2/select2.min.css" />
  {/*  */}
  {/*to remove cache in every ajax request*/}
  {/*for google map */}
  {/*  */}
  <style dangerouslySetInnerHTML={{__html: "\n    /* .feedback-modal-overlay {\n        transition: all 1s;\n        visibility: hidden;\n        display: block;\n        position: fixed;\n        z-index: 99999;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        overflow: auto;\n        background-color: rgb(0, 0, 0, 0.6);\n        opacity: 0;\n\n    }\n\n    .feedback-modal-overlay.open {\n        opacity: 1;\n        visibility: visible;\n\n    } */\n\n\n    .single-question-div b,\n    .single-question-div strong {\n        font-weight: bold !important;\n    }\n\n    .single-question-div em,\n    .single-question-div i:not(.fa) {\n        font-style: italic !important;\n    }\n\n    #retest-exam-form table,\n    #learning-exam-form table {\n        border: 1px solid #000;\n        border-collapse: collapse;\n        margin: 10px 0;\n    }\n\n    #retest-exam-form table th,\n    #learning-exam-form table th,\n    #retest-exam-form table td,\n    #learning-exam-form table td {\n        border: 1px solid #000;\n        padding: 3px;\n    }\n\n    #retest-exam-form table td,\n    #learning-exam-form table td {\n        font-weight: 400;\n    }\n\n    .form-control[disabled],\n    .form-control[readonly] {\n        pointer-events: none;\n    }\n" }} />
  <link href="https://ingrails.com/school/admission_assets/nepali_datepicker/nepaliDatePicker.min.css" rel="stylesheet" type="text/css" />
  {/*  */}
  {/*  */}
  {/* for navbar marginleft adjustment on sidebar collapse  */}
</div>

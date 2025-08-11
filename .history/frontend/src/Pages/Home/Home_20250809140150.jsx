import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Settings, 
  User, 
  Bell, 
  Search,
  ChevronLeft,
  ChevronRight,
  Plus,
  MoreVertical,
  Menu
} from 'lucide-react';

const INCPustakalaya = () => {
  const [selectedDate, setSelectedDate] = useState(9);
  const [currentMonth] = useState('Aug');
  const [currentYear] = useState(2025);
  const [activeTab, setActiveTab] = useState('Attendance');

  // Sample data
  const insights = {
    activeStudents: 762,
    iosDevice: 259,
    androidDevice: 1873
  };

  const notifications = {
    general: 1,
    custom: 430,
    staff: 0
  };

  const todayBirthday = {
    name: "ROHAN BISHWOKARMA",
    class: "12-Management 'Business-A'"
  };

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const sidebarItems = [
    { name: 'Academic', icon: BookOpen, active: false },
    { name: 'Student Management', icon: Users, active: false },
    { name: 'Library Management', icon: BookOpen, active: true },
    { name: 'E-Learning', icon: BookOpen, active: false },
    { name: 'Settings', icon: Settings, active: false },
    { name: 'Tools/Extras', icon: MoreVertical, active: false },
    { name: 'Account', icon: User, active: false },
  ];

  const attendanceTabs = ['Attendance', 'Assignments', 'Homework', 'Library'];

  return (
    <></>
     <style>
        /* to remove double scroll bar  */
        html,
        body {
            overflow-x: unset !important;
        }

        .header .navbar {
            top: 0;
        }

        @media (max-width: 560px) {
            .header .navbar {
                position: fixed!important;
            }
        }
        @media (max-width: 560px) {
            .navbar-right .switch-app {
                display: none !important;
            }
        }
        .header .navbar.collapsed {
            margin-left: 0px;
        }

        .feedback-modal-overlay {
            /* display: none; */
            position: fixed;
            z-index: 99999;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background: rgba(217, 217, 217, 0.80);
            opacity: 0;
            visibility: hidden;
            scale: 0;
            transition: opacity 0.25s, visibility 0.25s;
        }

        .left-side.sidebar-offcanvas {
            scroll-behavior: smooth;
        }



        .feedback-modal-overlay.open {
            display: block;
            opacity: 1;
            scale: 1;
            visibility: visible;
            transition: opacity 0.25s, visibility 0.25s;
        }

        #modal-log .modal-content {
            border-radius: 4px;
            border: 2px solid #E7E7E7;
            background: #FFF;
            -webkit-box-shadow: none !important;
            -moz-box-shadow: none !important;
            box-shadow: none !important;
        }

        #modal-log button.close {
            opacity: 1;
        }

        #modal-log button.close:hover {
            opacity: 0.5;
        }

        @media (min-width: 992px) {
            .modal-lg {
                width: 900px;
            }
        }

        .copyright-wrapper p {
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            /* 19.5px */
            margin: 0 !important;
        }

        .copyright-wrapper {
            display: flex;
            color: #7E7E7E;
            align-items: center;
            gap: 8px;
            justify-content: center;
            padding: 18px 26px;
            border-radius: 4px;
            background-color: #f9f9f9;
            margin-left: 220px;
        }

        .copyright-wrapper .veda-app {
            text-underline-offset: 4px;
            text-decoration-line: underline;
            color: #7E7E7E;
        }

        .copyright-wrapper .veda-app:hover {
            color: #0675e0;
        }

        @media screen and (min-width:992px) {
            .right-side.strech+.copyright-wrapper {
                margin-left: 0px;
            }
        }

        @media screen and (max-width:992px) {
            .copyright-wrapper {
                margin-left: 0px;
            }
        }

        @media only screen and (max-width: 600px) {
            .copyright-wrapper {
                padding: 12px;
            }

            .copyright-wrapper p {
                font-size: 12px;
            }
        }
    </style>
    <!-- for calendar-->
    <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/fullcalendar/fullcalendar.css" rel="stylesheet"
        type="text/css" />
    <link href="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/css/fullcalendar/fullcalendar.print.css" rel="stylesheet"
        type="text/css" media='print' />
    <link href="https://ingrails.com/school/admin_panel/css/tailwind_custom.css?v=1.0" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.8.5/tinymce.min.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.8.5/tinymce.min.js"></script> -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet" />
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-VT1ZTE7KPJ"></script> -->
    <!-- Google Tag Manager -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-SZPRD3LCLM"></script>
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-240309232-1"></script> -->

    <script>
        if (window.location.hostname == "ingrails.com") {
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-SZPRD3LCLM');
            // gtag('config', 'UA-240309232-1');
            //     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:     '';j.async=true;j.src=
            // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            // })(window,document,'script','dataLayer','G-VT1ZTE7KPJ');
        }
        const invoiceId = ``;
    </script>
    <!-- Start of HubSpot Embed Code -->
    <!-- End of HubSpot Embed Code -->
    <!-- End Google Tag Manager -->
</head>
<style>
    ._table thead tr th,
    ._table tbody tr td {
        border: 1px solid #ccc !important;
        vertical-align: middle;
        padding: 3px 5px;
    }

    ._table thead tr th {
        background: #eee;
    }

    .alert-warning-edit {
        color: #8a6d3b;
        background-color: #fcf8e3;
        border-color: #faebcc;
        margin-top: 10px;
    }

    .alert-success-edit {
        color: #3c763d;
        background-color: #dff0d8;
        border-color: #d6e9c6;
        margin-top: 10px;
    }

    .active__dot {
        z-index: 9999;
        position: absolute;
        height: 20px;
        width: 20px;
        background-color: #e84118;
        border-radius: 50%;
        left: 35;
        bottom: 30;
    }

    .active__dot__feedback {
        height: 16px;
        width: 16px;
        background-color: #e84118;
        border-radius: 50%;
    }

    .mt-15px {
        margin-top: 15px;
    }

    .mt-5px {
        margin-top: 5px;
    }

    .nav_icon_top {
        width: 21px;
        display: inline-block;
    }

    .fixed {
        position: fixed;
        top: 55px;
        /* left: 321px; */
        right: 0;
        background-color: #a6e0cbf5;
        width: 300px;
        padding: 20px;
        z-index: 9999;
    }

    #click-to-view:hover {
        background-color: #528bff !important;
    }

    .notice-badge {
        background: red;
        color: #ffff;
        padding: 1px 5px 1px 5px;
        border-radius: 50%;
        display: inline-block;
    }

    .sidebar .sidebar-menu li a {
        display: flex;
        align-items: center;
        gap: 5px;
        line-height: 1.2;
    }

    .sidebar-menu>li>a span {
        all: unset;
    }

    .loading-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        gap: 10px;
        height: 90vh;
        width: 100%;
    }

    .toast-top-right {
        top: 60px;
    }

    sup.new {
        font-size: 11px;
        color: #fff;
        padding: 2px 7px;
        border-radius: 10px;
        background: #528BFF;
    }

    /* fa-trash-o not available in font awesome 5.15.3 so overwriting */
    .fa-trash-o:before {
        content: "\f2ed";
    }

    .fa-plus-square-o::before {
        content: "\f0fe";
        font-weight: 400;
    }

    .dashboard-toggle-wrapper {
        height: 100%;
        display: flex !important;
        align-items: center !important;
    }

    /*.feedback
    
.support_ticket_floating_button .fac{
    visibility: hidden;
}
.support_ticket_floating_button input:checked ~ .fac {
    visibility: visible;
}

.support_ticket_floating_button .fab-child {
    visibility: hidden;
}

.support_ticket_floating_button input:not(:checked):hover ~ .fab-child {
    visibility: visible;
}
*/
</style>

<!-- body -->

<body class="skin-blue">

    <script type="text/javascript" src="https://ingrails.com/school/admin_panel/js/client/interact/interact.min.js"></script>

    
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=G-VT1ZTE7KPJ" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <!-- header logo: style can be found in header.less -->


    <!---topnavbar-->
    <header class="header">
    <a href="https://ingrails.com/school/client?token=1754727104" class="logo"
        style="font-family:sans-serif;overflow:hidden;font-size:inherit">
        ITAHARI NAMUNA COLLEGE        <!-- Add the class icon to your logo image or logo icon to add the margining -->
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>

        </a>

        <div class="navbar-right">

            <ul class="nav navbar-nav">
                                <!-- to enable the toggle admin_panel/js/client/switch-component.js uncomment  -->
                <li style="height: 100%; display: flex; align-items: center;margin-right: 10px; ">
                    <switch-component id="dashboard-switch" checked=true></switch-component>
                </li>
                
                <!-- <li class="dropdown tasks-menu">
                    <a href="#" onclick="showFeedbackForm()" data-source="floating" data-fetch-url="https://ingrails.com/school/client/viewFeedbackFrom" style="position: relative;">
                          <i class="fa fa-comment"></i> Feedback
                        </a>
                    </li>
                    <li class="dropdown tasks-menu hidden">
                    <a href="#" onclick="showFeedbackForm()" data-fetch-url="https://ingrails.com/school/client/getFeedbackFormTemplate" style="position: relative;">
                          <i class="fa fa-comment"></i> Feedback Form
                        </a>
                    </li> -->

                                                    <!-- <li class="dropdown tasks-menu">
                            <a href="#" onclick="changeLog()" style="position: relative;">
                                Whats' New?
                            </a>
                        </li> -->
                
                                    <li class="dropdown tasks-menu">
                        <a href="#" onclick="activeOffers()" style="position: relative;"
                            data-count="0"
                            class="bottom-tooltip" data-content="Offers">
                                                        <!-- <img style="width: 20px;" src="https://ingrails.com/school/admin_panel/icons/gift-icon2.svg" alt=""
                                class="nav_icon"> -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M18.4615 5.60101H15.0885C15.126 5.56801 15.1644 5.53601 15.201 5.50101C15.493 5.23121 15.7283 4.90164 15.8923 4.53293C16.0563 4.16422 16.1453 3.76429 16.1538 3.35816C16.1665 2.91387 16.0917 2.47158 15.934 2.05844C15.7763 1.6453 15.5391 1.27004 15.2369 0.955695C14.9347 0.641347 14.5739 0.394544 14.1767 0.23044C13.7795 0.0663363 13.3542 -0.0116068 12.9269 0.00139604C12.5362 0.0101473 12.1515 0.102674 11.7967 0.273184C11.442 0.443694 11.1249 0.688517 10.8654 0.992327C10.5062 1.42519 10.2143 1.9137 10 2.44023C9.78574 1.9137 9.49377 1.42519 9.13462 0.992327C8.87506 0.688517 8.558 0.443694 8.20327 0.273184C7.84854 0.102674 7.46378 0.0101473 7.07308 0.00139604C6.64584 -0.0116068 6.22055 0.0663363 5.82332 0.23044C5.4261 0.394544 5.06531 0.641347 4.76312 0.955695C4.46094 1.27004 4.22372 1.6453 4.06603 2.05844C3.90835 2.47158 3.83352 2.91387 3.84615 3.35816C3.8547 3.76429 3.94374 4.16422 4.1077 4.53293C4.27166 4.90164 4.50701 5.23121 4.79904 5.50101C4.83558 5.53401 4.87404 5.56601 4.91154 5.60101H1.53846C1.13044 5.60101 0.739122 5.76956 0.450605 6.0696C0.162087 6.36964 0 6.77658 0 7.20089V10.4007C0 10.825 0.162087 11.2319 0.450605 11.532C0.739122 11.832 1.13044 12.0006 1.53846 12.0006V18.4001C1.53846 18.8244 1.70055 19.2314 1.98907 19.5314C2.27758 19.8314 2.6689 20 3.07692 20H16.9231C17.3311 20 17.7224 19.8314 18.0109 19.5314C18.2994 19.2314 18.4615 18.8244 18.4615 18.4001V12.0006C18.8696 12.0006 19.2609 11.832 19.5494 11.532C19.8379 11.2319 20 10.825 20 10.4007V7.20089C20 6.77658 19.8379 6.36964 19.5494 6.0696C19.2609 5.76956 18.8696 5.60101 18.4615 5.60101ZM12.0192 2.05225C12.141 1.91238 12.2893 1.80021 12.4548 1.72278C12.6203 1.64534 12.7993 1.60432 12.9808 1.60228H13.0279C13.2405 1.60367 13.4508 1.64918 13.6463 1.73615C13.8419 1.82312 14.0187 1.9498 14.1666 2.10876C14.3144 2.26773 14.4303 2.45579 14.5074 2.66191C14.5844 2.86804 14.6211 3.08809 14.6154 3.30917C14.6134 3.49785 14.574 3.68408 14.4995 3.85615C14.4251 4.02823 14.3172 4.18244 14.1827 4.3091C13.2702 5.14904 11.7558 5.44502 10.8173 5.54901C10.9327 4.49008 11.25 2.95119 12.0192 2.05225ZM5.85673 2.08825C6.15475 1.77836 6.55837 1.60335 6.97981 1.60128H7.02692C7.20836 1.60332 7.38744 1.64434 7.55291 1.72178C7.71838 1.79921 7.86667 1.91138 7.98846 2.05125C8.79519 2.99919 9.07981 4.57108 9.17981 5.54301C8.24519 5.44302 6.73365 5.14304 5.82212 4.3041C5.68762 4.17744 5.57975 4.02323 5.50529 3.85115C5.43083 3.67908 5.39138 3.49285 5.38942 3.30417C5.38346 3.07942 5.42147 2.85575 5.50113 2.64673C5.5808 2.43772 5.70047 2.24772 5.85288 2.08825H5.85673ZM1.53846 7.20089H9.23077V10.4007H1.53846V7.20089ZM3.07692 12.0006H9.23077V18.4001H3.07692V12.0006ZM16.9231 18.4001H10.7692V12.0006H16.9231V18.4001ZM18.4615 10.4007H10.7692V7.20089H18.4615V10.4007Z" fill="black" />
                            </svg>
                        </a>
                    </li>
                
                <style>
                    @keyframes pulse {
                        0% {
                            transform: scale(0.95);
                            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
                        }
                        70% {
                            transform: scale(1.1);
                            box-shadow: 0 0 0 8px rgba(255, 0, 0, 0);
                        }
                        100% {
                            transform: scale(0.95);
                            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
                        }
                    }

                    #notificationDot {
                        width: 10px;
                        height: 10px;
                        background-color: red;
                        border-radius: 50%;
                        display: none;
                    }

                    .blinking {
                        animation: pulse 1.5s ease-in-out infinite;
                    }
                </style>
                

                <li class="dropdown tasks-menu">
                    <a href="#" onclick="myNotification()" style="position: relative;"
                        class="bottom-tooltip" data-content="Notification">
                        <div id="bellWrapper">
                            <svg id="notificationBell" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6012 12.9633C16.923 11.7969 16.5629 10.1227 16.5629 8.125C16.5629 6.38452 15.8715 4.71532 14.6408 3.48461C13.4101 2.2539 11.7409 1.5625 10.0004 1.5625C8.2599 1.5625 6.59071 2.2539 5.36 3.48461C4.12929 4.71532 3.43789 6.38452 3.43789 8.125C3.43789 10.1234 3.07929 11.7969 2.40117 12.9633C2.2628 13.2012 2.18945 13.4713 2.18849 13.7465C2.18753 14.0218 2.25899 14.2924 2.3957 14.5312C2.53155 14.7702 2.72872 14.9687 2.96686 15.106C3.20501 15.2433 3.47549 15.3146 3.75039 15.3125H6.57695C6.65447 16.1669 7.04868 16.9614 7.68213 17.54C8.31558 18.1186 9.14248 18.4394 10.0004 18.4394C10.8583 18.4394 11.6852 18.1186 12.3186 17.54C12.9521 16.9614 13.3463 16.1669 13.4238 15.3125H16.2504C16.5249 15.3142 16.7949 15.2427 17.0326 15.1054C17.2703 14.9681 17.4671 14.7699 17.6027 14.5312C17.74 14.2927 17.8122 14.0223 17.8119 13.7471C17.8116 13.4718 17.7389 13.2015 17.6012 12.9633ZM10.0004 16.5625C9.64018 16.5626 9.29102 16.4382 9.01198 16.2104C8.73294 15.9826 8.54118 15.6654 8.46914 15.3125H11.5316C11.4596 15.6654 11.2678 15.9826 10.9888 16.2104C10.7098 16.4382 10.3606 16.5626 10.0004 16.5625ZM4.2707 13.4375C4.96211 12.0312 5.31289 10.2453 5.31289 8.125C5.31289 6.8818 5.80675 5.68951 6.68582 4.81044C7.5649 3.93136 8.75719 3.4375 10.0004 3.4375C11.2436 3.4375 12.4359 3.93136 13.315 4.81044C14.194 5.68951 14.6879 6.8818 14.6879 8.125C14.6879 10.2445 15.0379 12.0312 15.7293 13.4375H4.2707Z" fill="black" />
                                </svg>
                            <span id="notificationDot"
                                style="display: none;position: absolute;top: 14px;right: 13px;height: 10px;width: 10px;background-color: red;border-radius: 50%;">
                            </span>
                        </div>
                    </a>
                </li>

                <li style="height: 100%; display: flex; align-items: center;margin-right: 10px; " class="switch-app">
                    <nav-menu-component></nav-menu-component>
                </li>


                <li class="dropdown user user-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                        style="display: flex; align-items: center;">
                        <!-- <img style="width: 20px; margin-right: 5px; "
                                src="https://ingrails.com/school/admin_panel/icons/students.svg" alt="" class="nav_icon"> -->
                        <svg width="20" height="20" viewBox="0 0 20 20" style="margin-right: 4px;" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 16.6665C17.5 15.2148 16.1083 13.9807 14.1667 13.5223M12.5 16.6665C12.5 14.8248 10.2617 13.3332 7.5 13.3332C4.73833 13.3332 2.5 14.8248 2.5 16.6665M12.5 10.8332C13.3841 10.8332 14.2319 10.482 14.857 9.85686C15.4821 9.23174 15.8333 8.38389 15.8333 7.49984C15.8333 6.61578 15.4821 5.76794 14.857 5.14281C14.2319 4.51769 13.3841 4.1665 12.5 4.1665M7.5 10.8332C6.61594 10.8332 5.7681 10.482 5.14298 9.85686C4.51786 9.23174 4.16667 8.38389 4.16667 7.49984C4.16667 6.61578 4.51786 5.76794 5.14298 5.14281C5.7681 4.51769 6.61594 4.1665 7.5 4.1665C8.38405 4.1665 9.2319 4.51769 9.85702 5.14281C10.4821 5.76794 10.8333 6.61578 10.8333 7.49984C10.8333 8.38389 10.4821 9.23174 9.85702 9.85686C9.2319 10.482 8.38405 10.8332 7.5 10.8332Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span> increjana<i class="caret"></i></span>
                    </a>
                    <style>
                        .user-footer:hover {
                            background-color: #cfcfcf !important;
                        }

                        .navbar-nav>.user-menu>.dropdown-menu>li.user-footer {
                            border-bottom: 1px solid #d3cfcf;
                        }
                    </style>
                    <ul class="dropdown-menu">
                        <li class="dashboard-toggle-wrapper">
                        </li>
                        
                                                    <li class="user-footer">
                                <a href="javascript:void(0);" style="font-size: 14px;" onclick="handleHashClick('staff-profile')">
                                    <span style="font-weight: bold;">My Profile</span>
                                </a>
                            </li>
                        
                        <li class="user-footer">
                            <a href="javascript:void(0);" onclick="exploreProducts()" style="font-size: 14px;"
                                class=""><span style="font-weight: bold;">Explore Products</span><br> <span>See
                                    other services provided by Veda</span></a>
                        </li>
                        <li class="user-footer">
                            <a style="color: red!important;" id="logout" href="https://ingrails.com/school/client/logout"
                                class="">Logout</a>
                        </li>
                    </ul>
                    <!-- <ul class="dropdown-menu">
                            <li class="user-footer">
                                <div class="pull-right">
                                    <a href="https://ingrails.com/school/client/logout" class="btn btn-default btn-flat">Sign out</a>
                                </div>
                            </li>
                        </ul> -->
                </li>
            </ul>
        </div>
    </nav>
</header>
    <!---sidenavbar-->
    <div class=" row-offcanvas row-offcanvas-left">
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="left-side sidebar-offcanvas">
            <!-- sidebar: style can be found in sidebar.less -->
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<style>
    .main-menu-text {
        font-size: 14px;
        padding: 18px 0;
        color: #545353 !important;
        cursor: default;
        padding-left: 5px;
        background: var(--inputRadius);
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* .sidebar .sidebar-menu .menu-lists .treeview-menu>li:not(.active) a {
        border-top: 1px solid var(--borderLight) !important;
    } */

    .sidebar .sidebar-menu .menu-group li>a {
        padding: 12px 5px 12px 15px;
    }

    .sidebar .sidebar-menu .menu-group li.active>a {
        border-radius: var(--inputRadius);
        background: #eaedf0 !important;
        margin-top: 1px;
    }

    .sidebar-menu .menu-group li>a span {
        width: 18px;
        position: relative;
        top: -5px;
    }

    .sidebar>.sidebar-menu .menu-group li>a,
    .skin-blue .sidebar>.sidebar-menu .menu-group li {
        /* border: none !important; */
    }

    .skin-blue .sidebar>.sidebar-menu .menu-group li>a {
        font-size: 14px !important;
        position: relative;
        color: #44566c;
    }

    .sidebar-menu .menu-group li>a span {
        all: unset;
        color: #44566c;
    }

    .sidebar .sidebar-menu .menu-group li>a>.fa,
    .sidebar .sidebar-menu .menu-group li>a>.glyphicon,
    .sidebar .sidebar-menu .menu-group li>a>.ion {
        width: 20px;
    }

    .sidebar .sidebar-menu hr {
        margin-block: 10px !important;
    }

    .main-menu-text {
        gap: 5px;
        color: var(--textMidColor) !important;
        font-weight: 500;
    }

    .sidebar .sidebar-menu .treeview-menu>li>a {
        color: #3d4b5c;
    }

    .sidebar .sidebar-menu .menu-group .main-menu-text.active {
        border-radius: var(--inputRadius);
        background: #eaedf0 !important;
    }

    .sidebar .sidebar-menu .menu-group .main-menu-text.active .side-line::before {
        content: '';
        position: absolute;
        left: 0;
        width: 2px;
        height: 80%;
        display: inline-block;
        background: #ED4554;
        top: 50%;
        transform: translateY(-50%);
    }

    .sidebar-menu .menu-group {
        animation: 5s linear;
    }
</style>

<section class="sidebar">
    <!-- Sidebar user panel -->
    <div class="user-panel" data-placement="bottom" title="ITAHARI NAMUNA COLLEGE">
        <a data-app="308"
            href="https://ingrails.com/school/client?token=1754727104" class="image"
            style="text-align:center; display: block;">
            <img data-app="308"
                src="https://s3.veda-app.com/veda-app/assets/308/home/2024-07-09/qRqYmSCoqE5E0abV-1720505071.png" class="img"
                style="border:0px;height:60px!important;width:auto !important;" alt="User Image" />
            <p class="logo-text">ITAHARI NAMUNA COLLEGE</p>
        </a>
        <div class="text-align-center mt-1">
            <p class="" style="padding: 4px 16px; font-size:15px;">Client ID:&nbsp;<span
                    class="font-bold">N-0195</span></p>
        </div>
        <div class="text-align-center">
            <p class="" style="padding: 4px 16px; font-size:15px;">Academic Year:&nbsp;<span
                    class="font-bold academicYearSpan">2082</span>
            </p>
        </div>
        <div class="search-sidebar mt-1">
            <input style="width: 100%;" type="search" autocomplete="off" class="form-control"
                id="searchSidebarItems" placeholder="Search menus">
        </div>
    </div>

    <!-- sidebar menu: : style can be found in sidebar.less -->
    <ul class="sidebar-menu">
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Course Management.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">Academic</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Course Management.svg" alt="" class="nav_icon">
                                    <span>
                                        Classroom Activities                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="project-assignment">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Assignment                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="homework">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Homework                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="homework-check">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Check Homework                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="reading-materials">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Reading Materials                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="pdr">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Daily Report                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="teachers-routine">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Routine                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Class Evaluation.svg" alt="" class="nav_icon">
                                    <span>
                                        Class Evaluation                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="class-evaluation-area">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Evaluation Areas                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="assign-evaluation-area">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Assign Evaluation Areas                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="add-evaluation">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Add Evaluation                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Analytics.svg" alt="" class="nav_icon">
                                    <span>
                                        Analytics                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="monitor-supervisor">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Monitor Supervisor                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="analytics-homework-v2">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Homework                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="analytics-staff-v2">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Staff                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="analytics-onlineclass-teacher">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Online Class Report                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="weekly-report">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Weekly Report                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Push Notification.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">Notifications</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- single menu -->
                            <li class="">
                                <a href="javascript:void(0);" data="res-notification">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Push Notification.svg" alt="" class="nav_icon">
                                    <span>Push Notification</span>
                                                                    </a>
                            </li>
                        
                                             <!-- single menu -->
                            <li class="">
                                <a href="javascript:void(0);" data="suggestion-appreciation">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Notification.svg" alt="" class="nav_icon">
                                    <span>Suggestion/Appreciation</span>
                                                                    </a>
                            </li>
                        
                                             <!-- single menu -->
                            <li class="">
                                <a href="javascript:void(0);" data="sms-notification">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/SMS Notification.svg" alt="" class="nav_icon">
                                    <span>SMS Notification</span>
                                                                    </a>
                            </li>
                        
                                             <!-- single menu -->
                            <li class="">
                                <a href="javascript:void(0);" data="visitors-record">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Visitors Records.svg" alt="" class="nav_icon">
                                    <span>Visitor's Record</span>
                                                                    </a>
                            </li>
                        
                                             <!-- single menu -->
                            <li class="">
                                <a href="javascript:void(0);" data="import-account-notification">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Import Notification.svg" alt="" class="nav_icon">
                                    <span>Import Account</span>
                                                                    </a>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Student.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">Student Management</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Student.svg" alt="" class="nav_icon">
                                    <span>
                                        Student                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="search-students">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Search                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="students-lite">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Student List                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="add-student">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Add Student                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="import">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Import Students (Add/Update)                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="bulk-edit">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Bulk Edit                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="student-image-bulk">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Student Image Bulk Upload                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="student-document-bulk">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Student Document Bulk Upload                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="res-student-group">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Group                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="student-performance-evaluation">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Student Evaluation                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="admit-card">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Admit Card                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="character-certificate">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Certificates                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Reports.svg" alt="" class="nav_icon">
                                    <span>
                                        Report                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="students-print">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Print Data                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="students">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Download Data                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="students-group">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Students Group                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="new-students-record">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        New Student                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="left-students-record">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Left Student                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="analytics-student-gender-wise">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Gender Report                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="analytics-student-team-category-wise">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Team Report                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="remarks-record">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Remarks Report                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="uploaded-students-document">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Uploaded Documents                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="lunch-students">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Lunch Students                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="merit">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Merit                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Staff.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">Staff Management</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Staff.svg" alt="" class="nav_icon">
                                    <span>
                                        Staff                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="staff">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Add/Edit                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="staff-list-view">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        List                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="staff-level">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Staff Position                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="staff-qualification">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Staff Qualification                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="user-type">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        User Type                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="import-staff">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Import Staffs                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="assign-user-type">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Assign User Type                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="vacancy">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Vacancy                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="update-staff">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Update Staff                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Reports.svg" alt="" class="nav_icon">
                                    <span>
                                        Reports                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="staff-print-data">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Print Data                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="staff-list">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Download Data                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="recruitment-report">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Recruitment Report                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="uploaded-staffs-document">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Staff Documents                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="absent-notes-staff">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Staff Leave Notes                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Attendance.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">Attendance Management</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Attendance.svg" alt="" class="nav_icon">
                                    <span>
                                        Attendance                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="attendance">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Daily Attendance                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="qr-attendance">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Daily Attendance (QR)                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="qr-bus-attendance">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Bus Attendance (QR)                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="group-attendance">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Group Attendance                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="absent-notes">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Leave Notes                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Lunch.svg" alt="" class="nav_icon">
                                    <span>
                                        Lunch                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="qr-lunch">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Lunch Attendance                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="lunch-report">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Lunch Report                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="lunch-form">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Lunch Form                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Reports.svg" alt="" class="nav_icon">
                                    <span>
                                        Reports                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="bus-attendance">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Bus Attendance                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="group-attendance">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Group Attendance                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Exam Configuration.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">Exam Management</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Exam Configuration.svg" alt="" class="nav_icon">
                                    <span>
                                        Exam Configuration                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="exams">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Add Exam                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="print-exams-routine">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Print Exam Routine                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="result-remarks">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Selective Remarks                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="result-remarks-list">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Selective Remarks List                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="student-specific-remarks">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Student Specific Remarks                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="student-subject-specific-remarks">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Subject Specific Remarks                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="manual-attendance">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Manual Attendance                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="subject-based-manual-attendance">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Subject Attendance                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="group-class-association">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Group Class Association                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="result-type-mobile">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Mobile App Settings                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Normal Exam.svg" alt="" class="nav_icon">
                                    <span>
                                        Exams                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="result-new">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Add/Edit Marks                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="group-import-result">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Import Group Result                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="result-show-all">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        All Report Card                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Ledgers.svg" alt="" class="nav_icon">
                                    <span>
                                        Ledgers                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="ledger-default">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Detail Ledger                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="ledger-top-ten">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Top-10                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="ledger-failed-students">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Failure List                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="ledger-result-analysis">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Result Analysis                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="comparative-ledger">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Comparative Ledger                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="ledger-border-students">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Boarder Students                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="ledger-group">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Group Ledger                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/General Evaluation.svg" alt="" class="nav_icon">
                                    <span>
                                        General Evaluation                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="ge-objective-copy">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Copy Objectives                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/CAS.svg" alt="" class="nav_icon">
                                    <span>
                                        CAS                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="cas-questions">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Add Objective                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="cas-result">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        CAS Result                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="cas-catagory-copy">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Copy Objective/Question                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="cas-import-result">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Import Result                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Selective Exam.svg" alt="" class="nav_icon">
                                    <span>
                                        Selective Exam                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="se-objective">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Add Objective                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="se-objective-copy">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Copy Objectives                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="se-marks">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Add/Edit Answers                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="student-selective-exam">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Studentwise Answers                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="se-ledger">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Ledger                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Books Management.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">Library Management</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Books Management.svg" alt="" class="nav_icon">
                                    <span>
                                        Book Management                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="library-book">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Book                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="library-bar-code">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Barcode                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="library-spine">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Spine                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Book Issue_Return.svg" alt="" class="nav_icon">
                                    <span>
                                        Book Issue/Return                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="library-issue">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Manual Issue/Return                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="library-issue-barcode">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Auto Issue/Return                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="student-issue-return">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Student/Staff                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="library-reservation">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Reservation                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Report.svg" alt="" class="nav_icon">
                                    <span>
                                        Report                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="library-report">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Report                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="download-books">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Download                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Setup.svg" alt="" class="nav_icon">
                                    <span>
                                        Setup                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="library-book-type">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Book Type                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="library-room">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Room                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="library-rack">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Rack                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="import-books">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Import Book                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="update-books">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Update Book                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="library-setting">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Settings                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Admission Management.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">Admission Portal</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Admission Management.svg" alt="" class="nav_icon">
                                    <span>
                                        Admission                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="admission-request">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Admission Request                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/online class.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">E-Learning</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/online class.svg" alt="" class="nav_icon">
                                    <span>
                                        Online Class                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="online-class">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Start Class                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="online-class-account">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Account Configuration                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="online-class-report">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Report                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/E classroom.svg" alt="" class="nav_icon">
                                    <span>
                                        E-Classroom                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="learning-exam">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Exam                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="chapters">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Chapters                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="learning-exam-detail">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Exam Detail                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="mcq-chapter-wise-report">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        List                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="learning-questions">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Add Questions/Answer                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="copy-learning-questions">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Copy Questions/Answer                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="e-classroom-report-card">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Ledger                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="question-answer-stat">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Statistics                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Website.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">Content Management</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Website.svg" alt="" class="nav_icon">
                                    <span>
                                        Website                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="res-videos">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Videos                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="res-events">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Events                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Gallery.svg" alt="" class="nav_icon">
                                    <span>
                                        Gallery                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="gallery-category">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Albums                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="res-gallery">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Images                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Download.svg" alt="" class="nav_icon">
                                    <span>
                                        Downloads                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="downloads-category">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Category                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="downloads">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Files                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Blog-Article.svg" alt="" class="nav_icon">
                                    <span>
                                        Blog-Article                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="blog-category">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Add Blog Category                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="blog">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Add Blog/Article                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Organization.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">Settings</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Organization.svg" alt="" class="nav_icon">
                                    <span>
                                        Organization                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="res-home">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Home                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="res-about">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        About                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Academics.svg" alt="" class="nav_icon">
                                    <span>
                                        Academics                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="class">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Class                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="section">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Section                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="subjects">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Subjects                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="routine">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Class Routine                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Mobile.svg" alt="" class="nav_icon">
                                    <span>
                                        Mobile                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="res-color">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Color Setting                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="res-splash">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Launching Image                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Calender.svg" alt="" class="nav_icon">
                                    <span>
                                        Calendar                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="calendar-cat">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Calendar Category                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="calendar">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Calendar                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="calendar-events-bs">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Calendar Events - BS                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/bus.svg" alt="" class="nav_icon">
                                    <span>
                                        Bus                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="bus-routes">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Bus-Routes                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="javascript:void(0);" data="bus-map">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Routes-Map                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                                                                                <li class="">
                                                <a href="https://gpsnepal.com.np/login" target="_blank" data="nav_header">
                                                    <span>GPS Tracker</span>
                                                                                                    </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                                             <!-- menu with submenus -->
                            <li class="treeview">
                                <a href="#" data="nav_header">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Others.svg" alt="" class="nav_icon">
                                    <span>
                                        Others                                                                            </span>
                                    <i class="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul class="treeview-menu">
                                                                                                                        <li class="">
                                                <a href="javascript:void(0);" data="upload-document-category">
                                                    <i class="fa fa-laptop"></i> <span>
                                                        Documents Category                                                                                                            </span>
                                                </a>
                                            </li>
                                                                                                            </ul>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Widgets.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">Tools/Extras</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- single menu -->
                            <li class="">
                                <a href="javascript:void(0);" data="widgets">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Widgets.svg" alt="" class="nav_icon">
                                    <span>Widgets</span>
                                                                    </a>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
                    <div class="menu-group">
                <p class="main-menu-text pointer relative flex align-items-center">
                                        <span class="side-line"></span>
                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Account.svg" alt="" class="nav_icon" width="20">
                    <span class="group-name">Account</span>
                    <i class="fa fa-angle-left pull-right" style="right: 3px;"></i>
                </p>

                <section class="menus-list" style="display: none;">
                                             <!-- single menu -->
                            <li class="">
                                <a href="javascript:void(0);" data="res-password">
                                    <img src="https://ingrails.com/school/admin_panel/icons/dash2/Account.svg" alt="" class="nav_icon">
                                    <span>Change Password</span>
                                                                    </a>
                            </li>
                        
                     <!-- end menu_groups loop -->
                    <hr>
                </section>
            </div> <!-- end group-->
         <!-- end menus loop -->
    </ul>
</section>

<script>

document.addEventListener('DOMContentLoaded', function () {
    const treeviews = document.querySelectorAll('.treeview');

    treeviews.forEach(treeview => {
        const anchor = treeview.querySelector('a[data="nav_header"]');
        if (anchor) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const isActive = treeview.classList.contains('active');
                
                if (isActive) {
                    treeviews.forEach(otherTreeview => {
                        if (otherTreeview !== treeview) {
                            const otherAnchor = otherTreeview.querySelector('a[data="nav_header"]');
                            const otherMenu = otherTreeview.querySelector('.treeview-menu');
                            const otherIsActive = otherTreeview.classList.contains('active');
                            const otherIsExpanded = otherMenu && otherMenu.style.display === 'block';
                            
                            if (otherAnchor && (otherIsActive || otherIsExpanded)) {
                                otherAnchor.click();
                            }
                        }
                    });
                }
            });
        }
    });
});
</script>            <!-- /.sidebar -->
        </aside>

        <!-- Right side column. Contains the navbar and content of the page -->
        <aside class="right-side">
            <!-- style="height: calc(100vh - 50px) !important;" -->
            <!--content here-->
        </aside>
        <footer class="copyright-wrapper">
            <p>
                Copyright
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" id="Copyright--Streamline-Micro" height="10" width="10">
                <desc>Copyright Streamline Icon: https://streamlinehq.com</desc>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M0.5 5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0" stroke-width="1"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.355 3.615a1.039 1.039 0 0 0 -0.98 -0.692h-0.692c-0.573 0 -1.038 0.465 -1.038 1.039v2.076c0 0.574 0.465 1.039 1.038 1.039h0.693c0.452 0 0.837 -0.289 0.98 -0.692" stroke-width="1"></path>
            </svg>
            <p>
                2024
                <a class="veda-app" target="_blank" href="https://www.veda-app.com/">Veda App</a>
                . All Rights Reserved
            </p>
        </footer>
        <!-- /.right-side -->
    </div><!-- ./wrapper -->

    <!-- footer -->
    <div class="modal fade modal-edit-student" id="modal-edit-student" tabindex="-1" role="dialog"
    aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" style="width: 900px;">
        <div class="modal-content" style="overflow-x:auto;">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span
                        aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">Edit Student Detail</h4>
            </div>
            <div class="modal-edit-student-alert">
                <div class="alert alert-warning-edit alert-dismissable" style="display:none">
                    <button type="button" class="close" onclick="javascript:hideMessageBox();">×</button>
                    <p id="error-message-edit"></p>
                </div>
                <div class="alert alert-success-edit alert-dismissable" id="success-message-box"
                    style="display:none">
                    <button type="button" class="close" onclick="javascript:hideMessageBox();">×</button>
                    <p id="success-message-edit"></p>
                </div>
            </div>
            <div class="modal-body" id="editBoxStudent">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
</div>
<div class="modal fade modal-edit" id="modal-edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="overflow-x:auto;">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span
                        aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">Edit Content</h4>
            </div>
            <div class="modal-edit-alert">
                <div class="alert alert-warning-edit alert-dismissable" style="display:none">
                    <button type="button" class="close" onclick="javascript:hideMessageBox();">×</button>
                    <p id="error-message-edit"></p>
                </div>
                <div class="alert alert-success-edit alert-dismissable" id="success-message-box"
                    style="display:none">
                    <button type="button" class="close" onclick="javascript:hideMessageBox();">×</button>
                    <p id="success-message-edit"></p>
                </div>
            </div>
            <div class="modal-body" id="editBox">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<!-- *********************************** Default Modal,Feedback Modal ************************************* -->
<div class="modal fade modal-log" id="modal-log" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="overflow-x:auto;">
            <!-- <div class="modal-header">
                    <button type="button" class="close"  data-dismiss="modal">
                        <img src="https://ingrails.com/school/admin_panel/icons/x.svg" alt="close">
                    </button>
                    <h4 class="modal-title-log">Edit Content</h4>
                </div> -->
            <div class="modal-log-alert">
                <div class="alert alert-warning-edit alert-dismissable" style="display:none">
                    <button type="button" class="close" onclick="javascript:hideMessageBox();">×</button>
                    <p id="error-message-edit"></p>
                </div>
                <div class="alert alert-success-edit alert-dismissable" id="success-message-box"
                    style="display:none">
                    <button type="button" class="close" onclick="javascript:hideMessageBox();">×</button>
                    <p id="success-message-edit"></p>
                </div>
            </div>
            <div class="modal-body-log" id="changeLog">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>


<div class="modal fade modal-detail" id="modal-detail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" style="width:100%;padding:30px;">
        <div class="modal-content" style="overflow:hidden">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span
                        aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">Detail</h4>
            </div>
            <div>
                <div class="alert alert-warning alert-dismissable" style="display:none">
                    <button type="button" class="close" onclick="javascript:hideMessageBox();">×</button>
                    <p id="error-message">
                    <p></p>
                    </p>
                </div>
                <div class="alert alert-success alert-dismissable" id="success-message-box" style="display:none">
                    <button type="button" class="close" onclick="javascript:hideMessageBox();">×</button>
                    <p id="success-message"></p>
                </div>

                <div class="modal-body" id="detailBox">

                </div>

            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<div class="modal fade modal-sms-advertisement" id="modal-sms-advertisement" tabindex="-1" role="dialog"
    aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="width:900px;overflow:hidden;right:125px">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span
                        aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">SMS - Reach Every Parents on Time</h4>
            </div>
            <div class="modal-body" id="smsDetailBox">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<div id="feedback-modal-id" class="feedback-modal-overlay">
    
<style>
#multi-step-form {
    max-width: 1350px;
    margin: 0 auto;
}
.survey-box.hide {
  display: none !important;
}

#feedback-title{
    color: #000;
    font-family: "Fira Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 162.5% */
}

#veda-header, .survey-box-title{
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

#feedback {

    /* background-color: white; */
    /* min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw; */
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

div:where(.swal2-container) {
    z-index: 99999 !important;
}

.progress {
    /* width: 60px; */
    height: 1px;
}

.container__box {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    padding-top: 120px;
    flex-direction: column;
}

.goback-btn {
    display: inline-flex;
    padding: 12px 18px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #ECECEC;
    color: #000 !important;
    /* width: 218px; */
    text-decoration: none;
    cursor: pointer;
}

.quiz__box,.survey-box {
    position: absolute;
    margin-top: 120px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    max-width: 518px;
    width: 100%;
    min-height: 428px;
    height: auto;
    overflow-y: auto;
    border-radius: 16px;
    background: #FFF;
}


.d-flex {
    display: flex;
}

.justify-content-center {
    justify-content: center;
}

.align-items-center {
    align-items: center;
}

.survey-box-desc {
    /* width: 528px; */
    color: #303030;
    font-family: "Fira Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 200% */
    margin-top: 16px;
}

.step {
    margin-top: 0px;
    padding: 30px 40px 38px 40px;
    display: flex;
    flex-direction: column;
    min-height: 400px;
}

.radio-list {
    width: 100%;
    padding: 12px 24px;
    text-align: center;
    background: #ECECEC;
}

.radio-list p {
    text-align: left;
    word-break: break-all;
}

.question-heading {
    color: #000;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.prev-btn,
.next-btn,
.submit-btn,
.survey-btn, .later-btn {
    display: flex;
    min-width: 115px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    background: #0675E0;
    border:none;
    color:#fff;
    width: fit-content;
}
.later-btn,.prev-btn{
    background: #7e7e7e;
}

.prev-btn:hover, .next-btn:hover, .submit-btn:hover, .survey-btn:hover, .later-btn:hover {
    filter: brightness(0.9);
    cursor: pointer;
    transition: filter 200ms ease;
}
.error-message-container {
    margin-top: 10px;
}

.error-message {
    color: red;
}

.rate {
    /* float: left; */
    height: 46px;
    width: 230px;
    margin-right: 300;
    margin-top: 10px;
}

.rate:not(:checked)>input {
    position: absolute;
    top: -9999px;
}

.rate:not(:checked)>label {
    float: right;
    width: 1em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 30px;
    color: #ccc;
}

.rate:not(:checked)>label:before {
    content: '★ ';
}

.rate>input:checked~label {
    color: #ff9f43;
}

.rate:not(:checked)>label:hover,
.rate:not(:checked)>label:hover~label {
    color: #ff9f43;
}

.rate>input:checked+label:hover,
.rate>input:checked+label:hover~label,
.rate>input:checked~label:hover,
.rate>input:checked~label:hover~label,
.rate>label:hover~input:checked~label {
    color: #ff9f43;
}

/* .form-group>label {
    bottom: 32px;
    left: 15px;
    position: relative;
    background-color: white;
    padding: 0px 5px 0px 5px;
    font-size: 14px;
    transition: 0.2s;
    pointer-events: none;
    color: #949494;
} */

.form-control-2 {
    height: 48px;
    background-color: #fff;
    width: 500px;
}

.form-control-2:focus~label {
    font-size: 10px;
    bottom: 52px;
    color: blue;
}

.form-control-2:valid~label {
    bottom: 52px;
    font-size: 10px;
    color: blue;
}

.rate>label:not(:last-child) {
    margin-left: 20px;
}

.emoji__label {
    filter: grayscale(1);
    font-size: 32px;
    cursor: pointer;
    opacity: 0.7;
}

.emoji__label:hover {
    opacity: 1;
    filter: grayscale(0.3);
    transform: scale(1.1);
    transition: 100ms ease;
}

.emoji__label:checked {
    filter: grayscale(0);
    opacity: 1;
    transition: all 100ms ease;
}

.emoji {
    display: grid;
    grid-template-columns: repeat(5, 78px);

    margin-bottom: 60px;
}

.emoji-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
}

.emoji__title {
    font-size: 14px;
}

.emoji input[type="radio"] {
    display: none;
}

.emoji input[type="radio"]:checked+label {
    filter: grayscale(0);
    opacity: 1;
    transition: all 100ms ease;
}

@media only screen and (max-width: 600px) {
    .step{
        padding: 10px 20px;

    }
    .emoji__label {
        font-size:24px;
    }
    .emoji {
        display: grid;
        grid-template-columns: repeat(5, 62px);
    }
    .emoji__title {
        font-size: 12px;
    }

}
</style>
<div id="feedback" class="row">
        <div class="survey-box">
        <div style="border-bottom: 1px solid #ECECEC; text-align: start;display: flex;
    justify-content: space-between;
    padding:19px 30px 12px 30px;">
            <p class="survey-box-title">Take a Feedback</p>
            <div onclick="closeModal()" style="
            cursor:pointer;
         
            height:16px; width:16px;
           ">
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </a>
            </div>
        </div>
         
        <div style="padding:24px 29px 34px 29px; display: flex; flex-direction: column; min-height: 400px;">
            <div style="flex:1;">
                <h2 id="feedback-title">Tell us about your experience so far</h2>
                <!-- <p class="survey-box-desc">Hi increjana,</p> -->
                 <p class="survey-box-desc">Dear Sir/Ma'am</p>
                 <p id="feedback-desc" class="survey-box-desc" style="white-space: pre-line;">
                    We would appreciate your feedback. It has been a certain period since you started using the Veda system in your institute. Can you share your experience and how things have been progressing during this time?                    </p>
            </div>
                <div style="margin-top: 32px;gap:14px;" class="d-flex justify-content-center"> 
                    <!-- <button class="later-btn" onclick="closeModal()">Later</button> -->
                    <button
                        data-fetch-url="https://ingrails.com/school/client/getFeedbackFromJsonData" class="survey-btn">Start Feedback</button>
                </div>
            </div>
        </div>
    <div style="display: none;" class="quiz__box">
    <div style="border-bottom: 1px solid #ECECEC; text-align: start;display: flex;
    justify-content: space-between;
    padding:19px 30px 12px 30px; ">
            <p id="veda-header">Veda Survey</p>
            <div onclick="closeModal()" style="
            cursor:pointer;
            height:16px; width:16px;
           ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>


                </a>
            </div>
        </div>
        <form id="multi-step-form">
        </form>
    </div>
    <!-- <div style="position: absolute; bottom: 120px; right:30px">
      <a href="https://ingrails.com/school/client?token=1754727104" class="goback-btn">Back To Dashboard</a>
      
      </div> -->
</div>
<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/jquery-1.10.2.js"></script>

<script>
    
$(document).ready(function() {

    async function getDataForForm() {

        const res = await axios.get('https://ingrails.com/school/client/getFeedbackFromJsonData');

        const title = res?.data?.activeUserFeedbackTopicRow?.title || '';

        const desc = res?.data?.activeUserFeedbackTopicRow?.description || '';

        if (title !== '') {

            $('#feedback-title').text(title)
            $('#veda-header').text(title)
        }

        if (desc !== '') {

            $('#feedback-desc').text(desc)


        }

    }

    // getDataForForm()

});
</script>

<script>
let feedbackForm = document.getElementById('feedback-modal-id');
let formContainer = document.getElementById('multi-step-form')

function closeModal() {
    document.body.style.overflow = 'auto';
    document.body.style.height = "auto";
    feedbackForm.style.opacity = '0';
    setTimeout(() => {
        feedbackForm.style.removeProperty('opacity')
        feedbackForm.classList.remove('open');
    }, 500);
    document.querySelector('.quiz__box').style.display = 'none';
    formContainer.replaceChildren();

}
</script>
<script type="text/javascript" src="https://ingrails.com/school/admin_panel/js/feedback.js"></script>
</div>
<div class="modal fade modal-reservation" id="modal-reservation" tabindex="-1" role="dialog"
    aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="width:560px;overflow:hidden">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span
                        aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">Detail</h4>
            </div>
            <div class="modal-body" id="reservationBox">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<style>
    #modal-official-email .container {
        position: relative;
    }

    .popup {
        background-color: #ffff;
        border-radius: 10px;
        /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
        padding: 40px;
        position: relative;
        /* text-align: center; */
    }

    .modal-one {
        width: 600px;
    }

    .modal-two {
        width: 500px;
    }

    .popup h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .popup p,
    #modal-official-email li {
        color: #797676;
        font-family: "Fira Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .popup input[type="email"] {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid #C5C3C3;
        background: #FFF;
    }

    .popup .otp-inputs input[type="text"] {
        border-radius: 2px;
        background: #f9f9f9;
        border: 1px solid transparent;
        font-size: 18px;
    }

    .popup input::placeholder {
        color: #C5C3C3;
    }

    .popup input:focus,
    .popup .otp-inputs input[type="text"]:focus {
        border-color: #528BFF;
        outline: none;
        box-shadow: 0 0 0;
    }

    .popup .otp-inputs {
        display: flex;
        justify-content: center;
        gap: 24px;
    }

    .popup .otp-inputs input[type="text"] {
        height: 60px;
        width: 60px;
        text-align: center;
    }

    #official_email:disabled:hover {
        cursor: not-allowed;
    }

    #official_email:disabled {
        background-color: #f9f9f9;
    }

    .popup .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 18px;
        margin-top: 20px;
        /* padding: 0 30px; */
    }

    .popup button {
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
    }

    .popup button.cancel {
        background-color: #7e7e7e;
        color: #fff;
    }

    .popup button:hover {
        filter: brightness(90%);
    }

    .popup button.send {
        background-color: #195ce3;
        color: #fff;
    }

    .popup button.resend {
        display: block;
        margin: 24px auto;
        color: #528bff;
        text-decoration: underline;
        font-size: 18px;
        text-align: center;
        background-color: transparent;
    }

    .popup button.resend:hover {
        text-decoration: underline;
    }

    .cross-btn {
        cursor: pointer;
        font-size: 22px;
        color: #C5C3C3;
        font-weight: 700;
        position: absolute;
        top: 20;
        right: 20;
    }

    .otp-buttons .btn-verify-otp {
        margin: auto;
    }

    .modal-official-email,.modal-otp-code {
        background: rgba(217, 217, 217, 0.80) !important;
    }


    .modal-official-email li {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 4px;
    }

    .modal-official-email .tick-icon {
        width: 24px;
        height: 24px;
    }

    #otp-valid-time-message {
        text-align: center;
        margin-bottom: 12px;
    }

    .tooltipTemp {
        position: relative;
        display: inline-block;
        margin-top: 4px;
        cursor: pointer;
    }

    /* Tooltip text */
    .tooltipTemp .tooltiptextTempLeft {
        visibility: hidden;
        width: 300px;
        background-color: #454443;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        left: 0;
        top: -30px;
        position: absolute;
        z-index: 1;
    }

    .tooltipTemp:hover .tooltiptextTempLeft {
        visibility: visible;
    }

    .note-text {
        font-weight: 600;
        color: #1b1b1b;
    }

    .verification-modal {
        width: 600px;
    }

    @media screen and (max-width: 768px) {
        .verification-modal {
            width: 100% !important;
        }

        .modal-one {
            width: 100% !important;
        }
        .popup{
            padding: 20px !important;
        }

        .popup h2{
            font-size: 18px !important;
        }

        .popup p{
            font-size: 14px !important;
        }
        .popup button{
            font-size: 14px;
            padding: 8px 12px;
        }
        .popup p, #modal-official-email li{
            font-size: 14px !important;
        }
        .modal-dialog{
            margin: 20px 0 !important;
        }
    }
</style>
<!-- otp modal start -->
<div class="modal fade modal-official-email" id="modal-official-email" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg verification-modal">
        <section style="padding: 10px">
            <div class="container">
                <div class="popup modal-one" id="email-verification">

                </div>
            </div>
        </section>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- otp model end -->

<!-- otp modal start -->
<div class="modal fade modal-otp-code" id="modal-otp-code" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" style="width: 500px;">
        <section style="padding: 10px">
            <div class="container">
                <div class="popup modal-two" id="otp-verification">
                    <span class="cross-btn" onclick="closeVerificationModal('modal-otp-code')">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0575 9.00002L14.7825 4.28252C14.9237 4.14129 15.0031 3.94974 15.0031 3.75002C15.0031 3.55029 14.9237 3.35874 14.7825 3.21752C14.6413 3.07629 14.4497 2.99695 14.25 2.99695C14.0503 2.99695 13.8587 3.07629 13.7175 3.21752L9.00002 7.94252L4.28252 3.21752C4.14129 3.07629 3.94974 2.99695 3.75002 2.99695C3.55029 2.99695 3.35874 3.07629 3.21752 3.21752C3.07629 3.35874 2.99695 3.55029 2.99695 3.75002C2.99695 3.94974 3.07629 4.14129 3.21752 4.28252L7.94252 9.00002L3.21752 13.7175C3.14722 13.7872 3.09142 13.8702 3.05335 13.9616C3.01527 14.053 2.99567 14.151 2.99567 14.25C2.99567 14.349 3.01527 14.4471 3.05335 14.5384C3.09142 14.6298 3.14722 14.7128 3.21752 14.7825C3.28724 14.8528 3.37019 14.9086 3.46158 14.9467C3.55298 14.9848 3.65101 15.0044 3.75002 15.0044C3.84902 15.0044 3.94705 14.9848 4.03845 14.9467C4.12984 14.9086 4.21279 14.8528 4.28252 14.7825L9.00002 10.0575L13.7175 14.7825C13.7872 14.8528 13.8702 14.9086 13.9616 14.9467C14.053 14.9848 14.151 15.0044 14.25 15.0044C14.349 15.0044 14.4471 14.9848 14.5384 14.9467C14.6298 14.9086 14.7128 14.8528 14.7825 14.7825C14.8528 14.7128 14.9086 14.6298 14.9467 14.5384C14.9848 14.4471 15.0044 14.349 15.0044 14.25C15.0044 14.151 14.9848 14.053 14.9467 13.9616C14.9086 13.8702 14.8528 13.7872 14.7825 13.7175L10.0575 9.00002Z" fill="#C5C3C3" />
                        </svg>
                    </span>
                    <h2>Official Email Verification</h2>
                    <p style="margin:24px 0;">Please enter the One Time Password (OTP) you received from us.</p>
                    <div class="otp-inputs">
                        <input type="text" id="otp_code_1" maxlength="1">
                        <input type="text" id="otp_code_2" maxlength="1">
                        <input type="text" id="otp_code_3" maxlength="1">
                        <input type="text" id="otp_code_4" maxlength="1">
                    </div>
                    <input type="hidden" id="valid_official_email">
                    <input type="hidden" id="valid_primary_email">
                    <button class="resend" id="resend-otp" onclick="resendOtp();">Resend OTP</button>
                    <p id="otp-valid-time-message">
                        OTP sent! Please check your email.<br />
                        OTP valid for <span id="otp-valid-time"></span>
                    </p>
                    <div class="buttons otp-buttons">
                        <!-- <button class="cancel btn-verify-cancel" onclick="closeVerificationModal('modal-otp-code')">Cancel</button> -->
                        <button type="submit" class="btn btn-verify-otp send" onclick="verifyOtp();">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- /.modal-dialog -->
</div>
    <div class="support_ticket_floating_button" style="position: fixed;bottom: 30px;right: 30px;" data-enable-feedback="no">
        <input type="checkbox" class="simple" id="floating_button_checkbox" />
                <div class="fab">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" style="top: 6px; left: 6px; color: white"
                viewBox="0 0 600 600">
                <path
                    d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296"
                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28">
                </path>
                <circle cx="250" cy="348" r="20" fill="currentColor"></circle>
            </svg>
        </div>
        <div class="fab-child">Help and Resource</div>
        <div class="fac">
                                    <a href="javascript:void(0);" class="fac-item" id="get-dashboard-tour">Get a Tour</a>
            <a href="javascript:void(0);" onclick="changeLog()" class="fac-item">What's New</a>
            <a href="javascript:void(0);" onclick="javascript:videoGuide()" class="fac-item">Help</a>
        </div>
    </div>

<!-- jQuery 2.0.2 -->
<!-- <script src="https://ingrails.com/school/admin_panel/js/client/axios.js"></script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> -->

<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/jquery-1.10.2.js"></script>

<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/jquery-ui-1.10.3.min.js" type="text/javascript"></script>



<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.13.5/js/standalone/selectize.js" integrity="sha512-JFjt3Gb92wFay5Pu6b0UCH9JIOkOGEfjIi7yykNWUwj55DBBp79VIJ9EPUzNimZ6FvX41jlTHpWFUQjog8P/sw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->
<script src="https://ingrails.com/school/admin_panel/js/selectize.js"></script>

<!-- Bootstrap -->
<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/bootstrap.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"
    integrity="sha256-R4pqcOYV8lt7snxMQO/HSbVCFRPMdrhAFMH+vr9giYI=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/patternomaly/1.3.2/patternomaly.js"
    integrity="sha512-gNM40ajr/bSi3Af8i6D4dV2CUWZrkm2zhgeWf46H91zOwWoH8Wwsyf6kQ4syfNyOrnjATrjKkP4ybWD7eKp2KA=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0" rel="preload"></script> -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
<!-- Morris.js charts -->

<!--        <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js" type="text/javascript"></script>-->
<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/raphael-min.js" type="text/javascript"></script>
<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/plugins/morris/morris.js" type="text/javascript"></script>
<!-- Sparkline -->
<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/plugins/sparkline/jquery.sparkline.min.js"
    type="text/javascript"></script>
<!-- jvectormap -->
<!--<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js" type="text/javascript"></script>
        <script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js" type="text/javascript"></script>-->
<!-- jQuery Knob Chart -->
<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/plugins/jqueryKnob/jquery.knob.js" type="text/javascript">
</script>
<!-- daterangepicker -->
<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/plugins/daterangepicker/daterangepicker.js"
    type="text/javascript"></script>
<!-- datepicker -->
<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/plugins/timepicker/bootstrap-timepicker.min.js"
    type="text/javascript"></script>
<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/plugins/datepicker/bootstrap-datepicker.js"
    type="text/javascript"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"
    type="text/javascript"></script>
<!-- iCheck -->
<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/plugins/iCheck/icheck.min.js" type="text/javascript">
</script>

<!--venobox lightbox-->
<script src="https://ingrails.com/school/admin_panel/js/plugins/venobox/venobox.min.js"></script>

<!-- AdminLTE App -->
<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/AdminLTE/app.js" type="text/javascript"></script>

<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<!--<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/AdminLTE/dashboard.js" type="text/javascript"></script>-->

<script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/plugins/fullcalendar/fullcalendar.js" type="text/javascript">
</script>


<!-- AdminLTE for demo purposes -->
<!-- <script src="https://veda-app.s3.ap-south-1.amazonaws.com/admin_panel/js/AdminLTE/demo.js" type="text/javascript"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/printThis/1.15.0/printThis.min.js"
    integrity="sha512-d5Jr3NflEZmFDdFHZtxeJtBzk0eB+kkRXWFQqEc1EKmolXjHm2IKCA7kTvXBNjIYzjXfD5XzIjaaErpkZHCkBg=="
    crossorigin="anonymous"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> -->
<script src="https://ingrails.com/school/admin_panel/js/sweetalert2@11.js"></script>


<link rel="stylesheet" href="https://ingrails.com/school/admin_panel/css/select2/select2.min.css">
<script src="https://ingrails.com/school/admin_panel/js/select2/select2.min.js"></script>
<script type="text/javascript" src="https://ingrails.com/school/admin_panel/js/client/generateInitalAvatar.js"></script>

<!-- <script src="https://cdn.jsdelivr.net/npm/driver.js@1.0.1/dist/driver.js.iife.js"></script> -->
<script src="https://ingrails.com/school/admin_panel/js/driver.js.iife.js"></script>

<script type="text/javascript">
    var site_url = "https://ingrails.com/school/";
</script>

<!--to remove cache in every ajax request-->
<script>
    $.ajaxSetup({
        cache: false
    });
    var addOfficialEmail = 1;
    const userLevel = "staff";
    $(document).ready(function() {
        if (addOfficialEmail == 1 && userLevel == 'staff') {
            checkSnoozeAndAskEmail();
        } else {
            showChangeLogAlert();
        }
    });
    (function() {
        const originalLog = console.log;

        function handleConsoleLog() {
            if (window.location.hostname === "ingrails.com" || window.location.hostname === "www.ingrails.com") {
                ['log', 'info', 'debug'].forEach(method => {
                    console[method] = function() {};
                });
            } else {
                console.log = originalLog;
            }
        }

        handleConsoleLog();
        window.addEventListener('hashchange', handleConsoleLog);
    })();

    function fix_sidebar() {
        //Make sure the body tag has the .fixed class
        if (!$("body").hasClass("fixed")) {
            $("aside.right-side").css('paddingTop', '0px');
            return;
        }

        $("aside.right-side").css('paddingTop', '50px');

        //Add slimscroll
        $(".sidebar").slimscroll({
            height: (window.innerHeight - $(".header").height()) + "px",
            color: "rgba(0,0,0,0.2)"
        });
    }
</script>

<script async>
    var dashboardServerStates = {"is_tour_complete":"1","is_new_dashboard":"1"};

    function _updateDashboard(val) {
        var loadingImgUrl = "<img src='" + site_url + "admin_panel/img/ajax-loader.gif' style='margin:255px auto;display:block;'>";
        $(".right-side").html(loadingImgUrl);

        var url = site_url + "client/welcomeMsg";
        $.get(url, {
                _: $.now(),
                isNewDashboard: val,
            },
            function(data) {
                $(".right-side").html(data).hide();
                $('.right-side').fadeIn();
            })
    }
    $(document).ready(function() {
        // if (dashboardServerStates.is_new_dashboard) {
        //     _updateDashboard(true)
        //     // $('switch-component').prop('checked', true)
        // } else {
        //     _updateDashboard(false)
        //     // $('switch-component').prop('checked', false)
        // }

        const getDashboardTourBtn = $('#get-dashboard-tour');
        //*Checking if overview component exists .inorder to ensure if the dashboard is new or not
        //*this also removes the get dashboard tour button from pages other than New Dashboard
        if (dashboardServerStates.is_new_dashboard == "1" && $("overview-component").length) {
            getDashboardTourBtn.show();
        } else {
            getDashboardTourBtn.hide();
        }

        // // $('switch-component').on('change', function(event) {
        //     // document.getElementById('dashboard-switch').disabled = false;

        //     // _updateDashboard(event.originalEvent.detail.checked)
        //     //*update dashboad server states
        //     $.post(site_url + "dashboard/insightsConfig/", {
        //         dashboard_toggle: 1,
        //         dashboard_tour: dashboardServerStates.is_tour_complete
        //     },

        //     ).done( function(data) {
        //             const response = JSON.parse(data);
        //             dashboardServerStates={
        //                 is_new_dashboard: response.dashboardToggle,
        //                 is_tour_complete: response.dashboardTour
        //             }
        //             if($("overview-component").length){
        //                 getDashboardTourBtn.show();
        //             }else{
        //                 getDashboardTourBtn.hide();
        //             }
        //         }).always(function() {
        //         // document.getElementById('dashboard-switch').disabled = false;
        //         // window.location.reload()
        //     })
        // // })


        function showDashboardTour() {
            //*reset tour
            $.post(site_url + "dashboard/insightsConfig/", {
                dashboard_toggle: 1,
                dashboard_tour: 0
            }).done(function(data) {
                // toastrMessage('success', 'Dashboard Tour About To Start!')
                const response = JSON.parse(data);
                dashboardServerStates = {
                    is_new_dashboard: response.dashboardToggle,
                    is_tour_complete: response.dashboardTour
                }
                //*invoke tour function
                dashboardJourney()
            })
        }
        getDashboardTourBtn.click(function() {
            showDashboardTour()
        })

        var rightSideElement = $('.right-side')[0];
        const observerCallback = (mutationsList, observer) => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    //*check if overview component exists for newDashboard check
                    if (dashboardServerStates.is_new_dashboard == "1" && $("overview-component").length) {
                        getDashboardTourBtn.show();
                    } else {
                        getDashboardTourBtn.hide();
                    }
                }
            }
        };
        const observer = new MutationObserver(observerCallback);
        const observerOptions = {
            childList: true,
            subtree: false
        };

        observer.observe(rightSideElement, observerOptions);
    });
</script>

<script src="https://ingrails.com/school/admin_panel/js/client.js?v=1.0.2" type="text/javascript"></script>
<!--for google map -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFVIiNhrYb9qCMmOAeb6TtFA6DQj8WQzQ">
</script>

<script>
    //toastr
    function toastrMessage(type = 'sucess', message = '', closeButton = true, showDuration = '1000', timeOut = '5000') {
        // type = success,info,warning,error
        // positionClass = toast-top-right,toast-bottom-right,toast-bottom-left,toast-top-left,toast-top-full-width,toast-bottom-full-width,toast-top-center,toast-bottom-center
        toastr.options = {
            'closeButton': closeButton,
            'debug': false,
            'newestOnTop': true,
            'progressBar': true,
            'positionClass': 'toast-top-right',
            'preventDuplicates': false,
            'showDuration': showDuration,
            'hideDuration': '1000',
            'timeOut': timeOut,
            'extendedTimeOut': '1000',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut',
            "tapToDismiss": false
        }
        switch (type) {
            case 'success':
                toastr.success(message);
                break;
            case 'error':
                toastr.error(message);
                break;
            case 'info':
                toastr.info(message);
                break;
            case 'warning':
                toastr.warning(message);
                break;
            default:
                toastr.error("Error in Toastr");
                break;
                // code block
        }

    }
    //toastr
    //            window.onbeforeunload = function(){
    //                return 'Are you sure you want to leave this page?';
    //            };

    $(document).on('mousedown', 'a[href]', offBeforeUnload)
        .on('mouseleave', 'a[href]', function() {
            $(window).on('beforeunload', windowBeforeUnload);
        });



    function offBeforeUnload(event) {
        $(window).off('beforeunload');
    }

    function windowBeforeUnload() {
        if (!confirm("Leaving the page")) {
            return "Are you sure?";
        } else {
            return false;
        }

    }
    //toastr
    //            window.onbeforeunload = function(){
    //                return 'Are you sure you want to leave this page?';
    //            };

    $(document).on('mousedown', 'a[href]', offBeforeUnload)
        .on('mouseleave', 'a[href]', function() {
            $(window).on('beforeunload', windowBeforeUnload);
        });



    function offBeforeUnload(event) {
        $(window).off('beforeunload');
    }

    function windowBeforeUnload() {
        if (!confirm("Leaving the page")) {
            return "Are you sure?";
        } else {
            return false;
        }
    }

    if (invoiceId) {
        setTimeout(() => {
            myNotices(invoiceId)
        }, 300);
    }

    function myNotices(id = '') {
        var loadingImgUrl = "<img src='" + site_url +
            "admin_panel/img/ajax-loader.gif' style='margin:255px auto;display:block;'>";
        $(".right-side").html(loadingImgUrl);

        var url = site_url + "client/notices/" + id;
        $.get(url, function(data) {
            $(".right-side").html(data).hide();
            $('.right-side').fadeIn();
        });
        // document.querySelector(".support_ticket_floating_button > input").checked = false;
    }

    function myNotification() {
        var loadingImgUrl = "<img src='" + site_url +
            "admin_panel/img/ajax-loader.gif' style='margin:255px auto;display:block;'>";
        $(".right-side").html(loadingImgUrl);

        var url = site_url + "client/myNotification";
        $.get(url, function(data) {
            $(".right-side").html(data).hide();
            $('.right-side').fadeIn();
        });

        // document.querySelector(".support_ticket_floating_button > input").checked = false;
    }

    function activeOffers() {
        var loadingImgUrl = "<img src='" + site_url +
            "admin_panel/img/ajax-loader.gif' style='margin:255px auto;display:block;'>";
        $(".right-side").html(loadingImgUrl);

        var url = site_url + "client/activeOffers";
        $.get(url, function(data) {
            $(".right-side").html(data).hide();
            $('.right-side').fadeIn();
        });

        // document.querySelector(".support_ticket_floating_button > input").checked = false;
    }

    function exploreProducts() {
        var loadingImgUrl = "<img src='" + site_url +
            "admin_panel/img/ajax-loader.gif' style='margin:255px auto;display:block;'>";
        $(".right-side").html(loadingImgUrl);

        var url = site_url + "client/exploreProducts";
        $.get(url, function(data) {
            $(".right-side").html(data).hide();
            $('.right-side').fadeIn();
        });
        // document.querySelector(".support_ticket_floating_button > input").checked = false;
    }

    /*
    function showSupportTicketView() {
        var loadingImgUrl = "<img src='" + site_url +
            "admin_panel/img/ajax-loader.gif' style='margin:255px auto;display:block;'>";
        $(".right-side").html(loadingImgUrl);
        var url = site_url + "support_ticket_management/supportTicket/view";
        $.get(url, function (data) {
            $(".right-side").html(data).hide();
            $('.right-side').fadeIn();
        });
    }
    */
    if ($('#floating_button_checkbox').length) {
        const checkbox = document.querySelector('#floating_button_checkbox');
        document.addEventListener('click', (e) => {

            // console.log('asd');
            c = e.target.parentElement.classList.contains('support_ticket_floating_button');
            if (!c) {
                checkbox.checked = false;
            }
        });
    }

    $('#show-support-ticket-view').on('click', function() {
        var loadingImgUrl = "<img src='" + site_url +
            "admin_panel/img/ajax-loader.gif' style='margin:255px auto;display:block;'>";
        $(".right-side").html(loadingImgUrl);
        data = $(this).attr("data");
        let clickedMenuItem = $(this).prop("innerText");
        window.scrollTo(0, 0);
        $.ajax({
            //async: true,
            type: "POST",
            url: site_url + "client/ajax_load",
            data: {
                page: data,
                menu_item: clickedMenuItem
            },
            success: function(data1) {
                $('.right-side').html(data1).hide().fadeIn();
                window.location.hash = data
                currentHash = data
            }
        });
    });

    function changeLog() {
        var loadingImgUrl = "<img src='" + site_url +
            "admin_panel/img/ajax-loader.gif' style='margin:255px auto;display:block;'>";
        $(".right-side").html(loadingImgUrl);

        var url = site_url + "client/getChangeLog";
        $.get(url, function(data) {
            $(".right-side").html(data).hide();
            $('.right-side').fadeIn();
            document.querySelector(".support_ticket_floating_button > input").checked = false;
            window.scrollTo(0, 0);
        });
    }

    function getSupportTicketView() {
        var loadingImgUrl = "<img src='" + site_url +
            "admin_panel/img/ajax-loader.gif' style='margin:255px auto;display:block;'>";
        $(".right-side").html(loadingImgUrl);

        var url = site_url + "client/ticketList";
        $.get(url, function(data) {
            $(".right-side").html(data).hide();
            $('.right-side').fadeIn();

            document.querySelector(".support_ticket_floating_button > input").checked = false;
        });
    }

    function removeHTMLTags(str) {
        if ((str === null) || (str === '')) {
            return false;
        } else {
            str = str.toString();
        }
        return str.replace(/(<([^>]+)>)/ig, '');
    }
    $(window).on('beforeunload', windowBeforeUnload);
</script>
<!-- <script>
    var sidebar = $('.left-side.sidebar-offcanvas'),
        userPanel = sidebar.find(".user-panel"),
        logoText = sidebar.find(".logo-text");
    var sidebarController = (function() {
        var toggleSchoolName = function() {
            if (sidebar.scrollTop() > userPanel.height() - 20) {
                logoText.fadeOut();
            } else {
                logoText.fadeIn();
            }
        }
        return {
            toggleSchoolName: toggleSchoolName
        }

    })()
    sidebarController.toggleSchoolName();
    sidebar.on("scroll", function() {
        // console.log("scroll")
        sidebarController.toggleSchoolName();
    });
    </script> -->
    <script>
    window.getBase64FromUrl = function(img) {
        var img = $(img);
        var url = img.attr('src');
        if (img.hasClass("on_error_called")) {
            img.unbind('onerror');
            return;
        }
        if (url) {
            var newId = Math.random().toString(36).substring(7);
            img.after("<span id='" + newId + "'> Loading images please wait ....<span>")
            img.addClass("on_error_called")
            $.post("https://ingrails.com/school/awsWeb/imageUrlTobase64Img", {
                url: url
            }, function(text) {
                img.addClass("on_error_called_success")
                if (text) {
                    img.attr('src', text)
                    $("#" + newId).remove();
                }
            })
        }
    }
</script>
<script src="https://unpkg.com/compressorjs@1.0.6/dist/compressor.js"></script>
<script src="https://ingrails.com/school/admin_panel/js/client/axios.js"></script>
<script>
     /* 
        input settings 
        name="string" required
        data-setindex="1" to get index wise data (Array of objects) ex. [{index: string, url: url}]
        data-indexfilename="1" to get index as filename required  data-setindex="1"
        data-resize="number" to resize image // problem in large size image
        Support multiple upload
     */
     window.awsVeda = (function() {
         function isArray(a) {
             return (!!a) && (a.constructor === Array);
         }

         function isNumeric(str) {
             if (typeof str != "string") return false // we only process strings!  
             return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
                 !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
         }
         var nameWiseFile = {};

         function getFileName(file, parent) {
             var fName = [];
             if (parent) {
                 var _input = $(parent).find(`input[name='${file}']`);
             } else {
                 var _input = $(`input[name='${file}']`)
             }
             _input.each(function(index) {
                 var el = $(this);
                 var resize = el.data('resize');
                 var inputFiles = el.prop('files');
                 var requiredIndex = el.data('setindex') == 1;
                 if (inputFiles !== null) {
                     Object.values(inputFiles).forEach(function(_file) {
                         fName.push(_file.name)
                         _file.resize = resize;
                         if (requiredIndex) {
                             if (el.data('indexfilename') == 1) {
                                 _file.index = _file.name.split('.').slice(0, -1).join('.').toString()
                                 _file.index_type = "string"
                             } else if (el.data('indexkey') == 1) {
                                 _file.index = el.data('indexkeyname')
                                 _file.index_type = "string"
                             } else {
                                 _file.index_type = "number"
                                 _file.index = index
                             }
                         }
                         nameWiseFile[_file.name] = _file;
                     })
                 }
             });
             return fName;
         }
        function getPresignedUrl(fileUrl) {
            var url = 'https://ingrails.com/school/' + "client/getPresignedUrl";
            var formData = new FormData();
             formData.append('url', fileUrl)
            return axios.post(url,formData)
            .then(function(res) {
                return res;
            })
            .catch(function(error) {
                return fileUrl; // fallback if request fails
            });
        }

         function isImg(filename) {
             var ext = filename.split('.').pop();
             console.log(filename, ext)
             return ext == 'jpg' || ext == 'png' || ext == 'jpeg';
         }

         function getSignedUrl(FILE, featureName, fileNameData = {}, parent = null) {
             var formData = new FormData(),
                 fileName = [],
                 binaryFiles = [];

             var promises = [],
                 publicUrl = [];

             if (Object.keys(fileNameData).length !== 0) {
                 console.log('Getting info of file ')
                 var fileName = fileNameData.fileName;
                 nameWiseFile = fileNameData.nameWiseFile
                 console.log(fileName)
             } else {
                 var fileName = getFileName(FILE, parent);
             }
             if (fileName.length == 0) {
                 return $.Deferred().resolve()
                     .then(function() {
                         return fileName;
                     });
             }
             var url = 'https://ingrails.com/school/' + "awsWeb/getSignedUrl";

             var formData = new FormData();
             formData.append('feature_name', featureName)
             formData.append('files_name', JSON.stringify(fileName))
             var request = axios.post(url, formData);

             request.then(function(res) {
                     var response = res.data;
                     if (response.status === 'true') {
                         response.message.forEach(function(fileRes) {
                             var resFile = nameWiseFile[fileRes.file];
                             if (typeof resFile.index !== 'undefined') {
                                 if (isNumeric(resFile.index) && resFile.index_type === "number") {
                                     publicUrl[resFile.index] = fileRes.public_url;
                                 } else {
                                     publicUrl.push({
                                         index: resFile.index,
                                         url: fileRes.public_url
                                     });
                                 }
                             } else {
                                 publicUrl.push(fileRes.public_url)
                             }
                             console.log("public url", publicUrl)
                             if (resFile.resize && isImg(resFile.name)) {
                                 promises.push(new Promise(function(resolve) {
                                     new Compressor(resFile, {
                                         quality: 0.8,
                                         maxWidth: parseInt(resFile.resize),
                                         success(result) {
                                             var uploadReq = axios.put(fileRes.put_url, result, {
                                                 headers: {
                                                     'Content-Type': result.type,
                                                     "Access-Control-Allow-Origin": "*"
                                                 }
                                             }).then(function(data) {
                                                 resolve();
                                                 return fileRes.public_url;
                                             })
                                             promises.push(uploadReq)
                                         },
                                         error(err) {
                                             resolve();
                                             console.log(err.message);
                                         },
                                     });
                                 }))
                             } else {
                                 var uploadReq = axios.put(fileRes.put_url, resFile, {
                                     headers: {
                                         'Content-Type': resFile.type,
                                         "Access-Control-Allow-Origin": "*"
                                     }
                                 }).then(function(data) {
                                     return fileRes.public_url;
                                 })
                                 promises.push(uploadReq)
                             }

                         })
                         console.log("return public url", publicUrl)
                         return publicUrl;

                     }
                     return null;
                 })
                 .catch(function(error) {
                     console.log(error);
                 });
             return request.then(function(data) {
                 return Promise.all(promises)
                     .then(function(results) {
                         return publicUrl
                     });
             })
         }

         return {
             getSignedUrl: getSignedUrl,
             getPresignedUrl: getPresignedUrl
         }
     })();
     function stripPresignedParams(presignedUrl) {
        const url = new URL(presignedUrl);
        url.search = ""; // Remove all query params
        return url.toString();
    }

 </script><script>
    $(document).ready(function() {
        $('#modal-official-email').on('hidden.bs.modal', function() {
            setTimeout(function() {
                if (!$('#modal-otp-code').is(':visible')) {
                    showChangeLogAlert();
                }
            }, 300);
        });

        $('#modal-otp-code').on('hidden.bs.modal', function() {
            showChangeLogAlert();
        });
    });

    $(".login-submit-btn").click(function(e) {
        console.log('asdf');
        e.stopImmediatePropagation();
        $('.submit-btn').attr("disabled", true);
        loading();
        var formObj = $(this);
        var formURL = 'https://ingrails.com/school/login/userLoginv2';

        var formData = new FormData(this);
        $.ajax({
            url: formURL,
            type: 'POST',
            data: formData,
            mimeType: "multipart/form-data",
            contentType: false,
            cache: false,
            processData: false,
            success: function(data, textStatus, jqXHR) {
                $('.submit-btn').attr("disabled", false);
                loading();
                obj = JSON.parse(data);
                console.log(obj);
                if (obj.status == "false") {
                    $('.alert-warning').fadeOut().fadeIn();
                    $('#errorMessage').html(obj.message).fadeOut().fadeIn();
                } else if (obj.status == "true") {
                    $('.alert-warning').fadeOut();
                    $('.alert-success').fadeOut().fadeIn();
                    $('#successMessage').html(obj.message).fadeOut().fadeIn();

                } else {
                    $('.alert-warning').fadeOut().fadeIn();
                    $('#errorMessage').html('something went wrong').fadeOut().fadeIn();
                }



            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#errorMessage').html(
                    '<pre><code class="prettyprint">AJAX Request Failed<br/> textStatus=' +
                    textStatus + ', errorThrown=' + errorThrown + '</code></pre>');
            }
        });
        e.preventDefault();

    });
    (function() {
        var menuItems = $(".sidebar-menu li a");
        var treeview = $(".treeview");
        const debouncedSearch = debounce((query) => searchMenus(query), 400);
        const menuGroupItems = $(".sidebar-menu .menu-group");
        $("#searchSidebarItems").on("input", function() {
            var query = $(this).val().toLowerCase();
            debouncedSearch(query);
        })

        function debounce(func, timeout = 200) {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func(...args);
                }, timeout);
            };
        }

        function searchMenus(query) {
            if (query.length >= 3) {
                menuGroupItems.each(function() {
                    const groupItem = $(this);
                    const groupMenuText = groupItem.find('.main-menu-text');
                    if (groupMenuText.find('.group-name').text().trim().toLowerCase().includes(query)) {
                        groupItem.show().addClass("search-found direct");
                    } else {
                        groupItem.hide().removeClass("search-found direct");
                    }
                })

                menuItems.each(function() {
                    const item = $(this);
                    const parentLi = item.parent('li');
                    const groupMenuText = item.closest('.menu-group').find('.main-menu-text');
                    if (item.find('span').text().trim().toLowerCase().includes(query)) {
                        parentLi.show().addClass("search-found direct");
                        
                        // show group
                        item.closest('.menu-group').show()
                        if (!groupMenuText.hasClass('active')) { // expand group, if menu matches
                            groupMenuText.trigger('click');
                        }
                    } else {
                        parentLi.removeClass("search-found direct");
                        if (!item.closest('.menu-group').hasClass('search-found')) { // hide li if group name doesnot match with serach string only
                            parentLi.hide();
                        }
                    }
                })

                watchForFoundItems();

            } else {
                $(".sidebar-menu li").show().removeClass("search-found direct")
                $(".sidebar-menu li.active").find('[data="nav_header"]').trigger('click'); // collapse menus
                // menuGroupItems.show().removeClass("search-found") // clear search-found
                menuGroupItems.find('.main-menu-text.active').trigger('click'); // collapse group
                menuGroupItems.show().removeClass('search-found direct')
            }
        }

        function watchForFoundItems() {
            treeview.each(function() {
                var tree = $(this);
                let showGroup = false;
                if (tree.find('.search-found').length) {
                    tree.show().addClass("search-found");
                    if (!tree.hasClass('active')) {
                        tree.find('[data="nav_header"]').trigger('click');
                    }
                    showGroup = true;
                }
                if (tree.hasClass("search-found") && tree.hasClass("direct")) {
                    tree.find("li").show().addClass("search-found direct");
                    showGroup = true;
                }

                if (showGroup) {
                    const menuGroup = tree.closest('.menu-group');
                    const groupMenuText = menuGroup.find('.main-menu-text');
                    menuGroup.addClass("search-found");
                    menuGroup.show();
                    if (!groupMenuText.hasClass('active')) { // expand group, if menu matches
                        groupMenuText.trigger('click')
                    }
                }

                // console.log("found lenth",$(".treeview.search-found").length);
                // if($(".treeview.search-found").length  <= 2) {
                //     $(".treeview.search-found").click()
                // }

                // menuGroupItems.each(function() {
                //     const groupItem = $(this);
                //     if (groupItem.find('.search-found').length) {
                //         groupItem.show().addClass("search-found");
                //         if (groupItem.find('.main-menu-text.active').length == 0) {
                //             groupItem.find('.main-menu-text').trigger('click');
                //         }
                //     } else {
                //         groupItem.hide().removeClass("search-found");
                //     }
                // })
            })
        }

    })()
    $(document).on('hidden.bs.modal', function() {
        if ($('.modal.show').length === 0) { // Check if any modal is still open
            $('body').removeClass('modal-open'); // Allow scrolling again
            $('.modal-backdrop').remove(); // Remove any remaining backdrop
        }
    });

    // check change log for alert
    function showChangeLogAlert() {
        if (currentHash !== '') return;
        // console.log('asdfasdf');
        var loadingImgUrl = "<img src='" + site_url + "admin_panel/img/ajax-loader.gif' style='margin:255px auto;display:block;'>";

        var url = site_url + "client/getChangeLogAlert";

        $.get(url, function(data) {
            let parsedData;
            var dataIsViewFile = false;
            //response can be either json or a view file
            try {
                parsedData = JSON.parse(data);
            } catch (e) {
                dataIsViewFile = true;
            }

            if (!dataIsViewFile && typeof parsedData.status !== 'undefined' && parsedData.status == false) {
                var modalOpenEvent = new CustomEvent('notice-modal-status', {
                    detail: {
                        message: 'close'
                    }
                });
                document.dispatchEvent(modalOpenEvent);
                return false;
            } else {
                $('.modal-body-log').css('padding', '0');
                $('#modal-log').modal('toggle');
                $('#changeLog').html(data);
            }
        });
    }

    $('.otp-inputs input').on('input', function() {
        if ($(this).val().length == 1) {
            $(this).next('input').focus();
        }
    });

    $('.otp-inputs input').on('keydown', function(e) {
        if (e.key === "Backspace" && $(this).val() === '') {
            $(this).prev('input').focus();
        }
    });

    $(document).ready(function() {
        if ($('.modal.show').length === 0) {
            $('body').removeClass('modal-open');
        }
    });

    function askOfficialEmail() {
            // revertEmailVerification();
            // $('#modal-official-email').modal('show');
        var official_email_test_user = "308";
        // if(official_email_test_user == 962894){
        // if(official_email_test_user == 2){
            revertEmailVerification();
            $('#modal-official-email').modal('show');
        // }
    }

    function revertEmailVerification() {
        $.post("https://ingrails.com/school/client/getEmailVerificationForm", {
            primary_email: "increjana@ingrails.com",
            primary_email_masked: "inc******@ingrails.com",
            official_email: ""
        }, function(data) {
            var res = JSON.parse(data);
            if (res?.data && document.getElementById('email-verification')) {
                document.getElementById('email-verification').innerHTML = res?.data;
            }
        });
    }

    function usePrimaryEmail(checked, value) {
        if (checked) {
            $('#official_email').val(value);
        } else {
            $('#official_email').val('');
        }
    }

    function sendOtp() {
        var officialEmail = $('#official_email').val();
        var officialEmailFlag = $('#use-official-mail');
        if (officialEmailFlag.prop('checked')) {
            primary_email = officialEmailFlag.val();
        }
        var isChecked = $('#use-official-mail').is(":checked");
        if (officialEmail == '') {
            toastrMessage('error', 'Please enter your official email', true, 0);
        } else {
            $('.btn-send-otp').attr('disabled', true);
            $('.btn-send-otp').text('Sending..');

            $('#btn-proceed').attr('disabled', true);
            $('#btn-proceed').text('Proceeding..');

            $.post("https://ingrails.com/school/client/sendOtpViaEmail", {
                official_email: officialEmail,
            }, function(data) {
                var res = JSON.parse(data);
                $('.btn-send-otp').removeAttr('disabled');
                $('.btn-send-otp').text('Send OTP');

                $('#btn-proceed').removeAttr('disabled');
                $('#btn-proceed').text('Send OTP');

                // if (res?.content_replace) {
                //     document.getElementById('email-verification').innerHTML = res?.data;
                // } else {

                if (res.status) {
                    $('#modal-official-email').modal('hide');
                    $('#modal-otp-code').modal('toggle');
                    $('#valid_official_email').val(res.email);
                    $('#valid_primary_email').val(res.email);
                    toastrMessage('success', 'OTP sent in your email', true, 0);
                } else {
                    toastrMessage('error', res.message, true, 0);
                    // }
                }
            });
        }
    }

    $('#modal-log').on('show.bs.modal', function(e) {
        if (!$.trim($('#changeLog').html())) { // Check if modal content is empty
            e.preventDefault(); // Stop the modal from opening
            $('body').removeClass('modal-open'); // Ensure body can scroll again
            $('.modal-backdrop').remove(); // Remove any leftover backdrop
        }
    });


    var validOtpCountdown;

    function startOtpCountdown() {
        if (validOtpCountdown) clearInterval(validOtpCountdown);
        // Set the initial countdown time in seconds
        let otpTimeLeft = 5 * 60; // 5 minutes in seconds

        // Function to update the timer display
        function updateTimer() {
            const minutes = Math.floor(otpTimeLeft / 60);
            const seconds = otpTimeLeft % 60;

            // Display time in minutes:seconds format
            document.getElementById("otp-valid-time").textContent =
                `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            // Decrement the time
            otpTimeLeft--;

            // Stop the countdown at 0
            if (otpTimeLeft < 0) {
                clearInterval(validOtpCountdown);
                // document.getElementById("otp-valid-time").textContent = ""; 
                // document.getElementById("otp-valid-time-message").textContent = "Please resend OTP";
            }
        }

        // Start the countdown and update every second
        validOtpCountdown = setInterval(updateTimer, 1000);
    }

    function stopOtpCountdown() {
        if (validOtpCountdown) clearInterval(validOtpCountdown);
    }

    $('#modal-otp-code').on('show.bs.modal', function() {
        startOtpCountdown();
    })

    $('#modal-otp-code').on('hide.bs.modal', function() {
        stopOtpCountdown();
    })

    function getEnvironment() {
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname.startsWith('localhost')) return true;
        if (/^dev\d*\.veda-app\.com$/.test(hostname)) return 'development';
        return false;
    }

    function checkSnoozeAndAskEmail() {
        const data = localStorage.getItem('remind-me-later');
        const parsedData = data ? JSON.parse(data) : {};
        const addedBy = "296172";
        const userId = "increjana";
        const snoozeUntilStr = parsedData[`official_email_verification_${userId}_${addedBy}`];
        console.log(`official_email_verification_${userId}_${addedBy}`)
        console.log(snoozeUntilStr)
        if (!snoozeUntilStr) {
            console.log('not snooze')
            askOfficialEmail();
            return;
        }

        const snoozeDate = new Date(snoozeUntilStr);
        const currentDate = new Date();

        if (currentDate.getTime() >= snoozeDate.getTime()) {
            delete parsedData[`official_email_verification_${userId}_${addedBy}`];
            localStorage.setItem('remind-me-later', JSON.stringify(parsedData));
            askOfficialEmail();
            return;
        }

        showChangeLogAlert();
    }

    function closeVerificationModal(modal_name, snooze_duration) {
        if (snooze_duration) {
            const currentTime = new Date().getTime();
            let delay;
            switch (snooze_duration) {
                case '10sec':
                    delay = 10000;
                    break;
                case '1hr':
                    delay = 60 * 60 * 1000;
                    break;
                case '4hr':
                    delay = 4 * 60 * 60 * 1000;
                    break;
                case '6hr':
                    delay = 6 * 60 * 60 * 1000;
                    break;
                case 'tomorrow':
                    const now = new Date();
                    const tomorrow = new Date(now);
                    tomorrow.setDate(now.getDate() + 1);
                    tomorrow.setHours(23, 59, 0, 0); // 11:59 PM tomorrow
                    delay = tomorrow.getTime() - now.getTime();
                    break;
                default:
                    delay = 24 * 60 * 60 * 1000;
                    return;
            }

            const remindAt = currentTime + delay;
            const currentStorageData = localStorage.getItem('remind-me-later');
            const parsedData = currentStorageData ? JSON.parse(currentStorageData) : {};
            const addedBy = "296172";
            const userId = "increjana";
            parsedData[`official_email_verification_${userId}_${addedBy}`] = remindAt;
            localStorage.setItem('remind-me-later', JSON.stringify(parsedData));
        }
        $('.' + modal_name).modal('hide');
    }

    function verifyOtp() {
        var officialEmail = $('#valid_official_email').val();
        var primaryEmail = $('#valid_primary_email').val();
        if (!primaryEmail) {
            primaryEmail = officialEmail;
        }
        var otpCode1 = $('#otp_code_1').val();
        var otpCode2 = $('#otp_code_2').val();
        var otpCode3 = $('#otp_code_3').val();
        var otpCode4 = $('#otp_code_4').val();
        var fullOtpCode = otpCode1 + otpCode2 + otpCode3 + otpCode4;

        $.post("https://ingrails.com/school/client/verifyEmailOtp", {
            official_email: officialEmail,
            otp_code: fullOtpCode,
            primary_email: primaryEmail,
        }, function(data) {
            var res = JSON.parse(data);
            if (res.status) {
                $('#modal-otp-code').modal('toggle');
                toastrMessage('success', res.message, true, 0);
                if (res.email_different_status) {
                    $('#modal-different-email').modal('toggle');
                }
            } else {
                toastrMessage('error', res.message, true, 0);
            }
        });
    }

    function changePrimaryEmail() {
        var primaryEmail = $('#primary_email').val();
        $.post("https://ingrails.com/school/client/changePrimaryEmail", {
            primary_email: primaryEmail,
        }, function(data) {
            var res = JSON.parse(data);
            if (res.status) {
                $('#modal-different-email').modal('toggle');
                toastrMessage('success', res.message, true, 0);
            } else {
                toastrMessage('error', res.message, true, 0);
            }
        });
    }

    function samePrimaryEmail() {
        $.post("https://ingrails.com/school/client/changePrimaryEmail", function(data) {
            var res = JSON.parse(data);
            if (res.status) {
                toastrMessage('success', res.message, true, 0);
            } else {
                toastrMessage('error', res.message, true, 0);
            }
        });
    }

    function differentPrimaryEmail() {
        $('#modal-different-email').modal('toggle');
        $('#modal-primary-email').modal('toggle');
    }

    function resendOtp() {
        var officialEmail = $('#valid_official_email').val();
        //*hide otp timer 
        stopOtpCountdown();
        $('#otp-valid-time').text('');
        $('#otp-valid-time-message').hide();

        //*disable button
        $('#resend-otp').attr('disabled', true);
        $('#resend-otp').text('Sending...');

        $.post("https://ingrails.com/school/client/sendOtpViaEmail", {
            official_email: officialEmail
        }, function(data) {
            var res = JSON.parse(data);
            if (res.status) {
                toastrMessage('success', 'OTP sent in your email', true, 0);
            } else {
                toastrMessage('error', 'Please enter your official email', true, 0);
            }
            $('#resend-otp').text('Resend OTP');
            $('#resend-otp').attr('disabled', false);
            //*start countdown
            startOtpCountdown();
            $('#otp-valid-time-message').show();
        });
    }


    //*listen modal-log close 
    function handleNoticeModalClose() {
        var modalOpenEvent = new CustomEvent('notice-modal-status', {
            detail: {
                message: 'open'
            }
        });
        document.dispatchEvent(modalOpenEvent);
    }
    $('#modal-log').on('hidden.bs.modal', function() {
        handleNoticeModalClose();
    })
</script>

<style>
    /* .feedback-modal-overlay {
        transition: all 1s;
        visibility: hidden;
        display: block;
        position: fixed;
        z-index: 99999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0, 0.6);
        opacity: 0;

    }

    .feedback-modal-overlay.open {
        opacity: 1;
        visibility: visible;

    } */


    .single-question-div b,
    .single-question-div strong {
        font-weight: bold !important;
    }

    .single-question-div em,
    .single-question-div i:not(.fa) {
        font-style: italic !important;
    }

    #retest-exam-form table,
    #learning-exam-form table {
        border: 1px solid #000;
        border-collapse: collapse;
        margin: 10px 0;
    }

    #retest-exam-form table th,
    #learning-exam-form table th,
    #retest-exam-form table td,
    #learning-exam-form table td {
        border: 1px solid #000;
        padding: 3px;
    }

    #retest-exam-form table td,
    #learning-exam-form table td {
        font-weight: 400;
    }

    .form-control[disabled],
    .form-control[readonly] {
        pointer-events: none;
    }
</style>

<script type="text/javascript"
    src="https://ingrails.com/school/admission_assets/nepali_datepicker/jquery.nepaliDatePicker.min.js"></script>
<link href="https://ingrails.com/school/admission_assets/nepali_datepicker/nepaliDatePicker.min.css" rel="stylesheet"
    type="text/css" />

<!-- <script type="text/javascript" src="https://ingrails.com/school/admin_panel/js/support_ticket.js"></script> -->
<script src="https://ingrails.com/school/admin_panel/js/utility/utility.js"></script>

<script>
    const BASE_URL = "https://ingrails.com/school/";
    const TODAY_DATE_YMD = getDateInYMD("Asia/Kathmandu");

    function showSupportTicketCreateModal() {
        const el = event.target;
        // $('.modal__new_support_ticket').modal('show');
        const buttonEl = el.closest('button');

        const URL = buttonEl.dataset.fetchUrl;
        const linkedModalClassName = buttonEl.dataset.linkedModal;
        const appendTo = buttonEl.dataset.appendTo;

        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.text();
            })
            .then(data => {

                $(appendTo).html(data);
                $(linkedModalClassName).modal('show');

                // console.log(data);

            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    function showFeedbackForm() {
        let feedbackForm = document.getElementById('feedback-modal-id');

        feedbackForm.style.display = 'block';

        // setTimeout(() => {
        //     feedbackForm.classList.add('open');
        // }, 1000)
        requestAnimationFrame(() => {
            feedbackForm.classList.add('open');
        });
        document.body.style.overflow = 'hidden';
        document.body.style.height = "100%";



        let el = event.target;
        let fetchUrl = el.dataset.fetchUrl;

        let loadingImgUrl =
            `<img src='${site_url}admin_panel/img/ajax-loader.gif' style='margin:255px auto;display:block;'>`;

        // $(".right-side").html(loadingImgUrl);

        //check where the user came from, if user came from modal, close the modal first
        // console.log(el);
        var source = el.dataset.source;
        if (source == 'notice') {
            document.querySelector('.survey-box').style.visibility = 'hidden';
            console.log('source', source);
            $(".survey-btn").click();
            $("#modal-log").modal('hide');
        } else {
            document.querySelector('.survey-box').style.visibility = 'visible';
        }
        document.querySelector('.survey-box').classList.remove('hide');

        document.querySelector('.survey-box').style.display = 'block';
    }

    function getDateInYMD(tz) {
        // console.log(new Date().toLocaleString("en-US", { timeZone: tz}), tz)
        let TODAY_DATE_OBJ = new Date().toLocaleString("en-US", {
            timeZone: tz,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        let dateParts = TODAY_DATE_OBJ.split('/');

        // Format the date as YYYY-MM-DD
        let DATE_YMD = `${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`;
        return DATE_YMD;
    }
</script>


<!-- <script type="module" defer src="https://ingrails.com/school/admin_panel/js/client/switch-component.js"></script> -->

<script type="text/javascript" defer src="https://ingrails.com/school/admin_panel/js/client/dashboard-journey.js"></script>
<script type="module" defer src="https://ingrails.com/school/admin_panel/js/client/nav-menu-component.js"></script>
<script>
    //scroll to active link when page first loads
$(document).ready(function () {
    setTimeout(function () {
        const activeLink = $(".sidebar-menu li.active");
        const parentUlofActiveLink = activeLink.closest("ul.treeview-menu");

        if (parentUlofActiveLink.length > 0) {
            parentUlofActiveLink.show();

            const parentLiWrapper = parentUlofActiveLink.closest('.treeview');
            parentLiWrapper.addClass('active');
            parentLiWrapper.find('[data="nav_header"]').trigger('click'); // change icon to fa-angle-down
        }

        const sidebarMenuWrapper = $(".left-side.sidebar-offcanvas");
        if (activeLink.length > 0) {
            const menuGroup = activeLink.closest('.menu-group');
            menuGroup.find('.main-menu-text').trigger('click');
            console.log(menuGroup, menuGroup.offset().top, sidebarMenuWrapper.offset().top);
            const scrollTopTarget = menuGroup.offset().top - 210;

            sidebarMenuWrapper.animate({
                scrollTop: scrollTopTarget
            }, 300);
        }
    }, 300);
});


    //ends
</script>

<!-- for navbar marginleft adjustment on sidebar collapse  -->
<script>
    const asideElement = document.querySelector('aside.left-side.sidebar-offcanvas');

    const observer = new MutationObserver(function(mutationsList) {
        mutationsList.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                if (asideElement.classList.contains('collapse-left')) {
                    console.log('Class collapse-left added');
                    $('.header .navbar').addClass('collapsed');
                } else {
                    console.log('Class collapse-left removed');
                    $('.header .navbar').removeClass('collapsed');
                }
            }
        });
    });
    observer.observe(asideElement, {
        attributes: true
    });

    //initial  load disable switch
    document.getElementById('dashboard-switch').disabled = true;

    window.onload = function() {
        // Enable the button once the page has fully loaded
        document.getElementById('dashboard-switch').disabled = false;
    };

    $(window).keydown(function(event) {
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault();
            $('#searchSidebarItems').focus();
        }
        if (event.key === 'Escape') {
            $('#searchSidebarItems').blur();
        }
    });
</script>

<script type="text/javascript" src="https://ingrails.com/school/admin_panel/js/helper.js"></script>

    </>
  );
};

export default INCPustakalaya;
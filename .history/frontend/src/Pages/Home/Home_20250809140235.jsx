<div>
  import React, {'{'} useState {'}'} from 'react';
  import {'{'} 
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
  {'}'} from 'lucide-react';
  const INCPustakalaya = () =&gt; {'{'}
  const [selectedDate, setSelectedDate] = useState(9);
  const [currentMonth] = useState('Aug');
  const [currentYear] = useState(2025);
  const [activeTab, setActiveTab] = useState('Attendance');
  // Sample data
  const insights = {'{'}
  activeStudents: 762,
  iosDevice: 259,
  androidDevice: 1873
  {'}'};
  const notifications = {'{'}
  general: 1,
  custom: 430,
  staff: 0
  {'}'};
  const todayBirthday = {'{'}
  name: "ROHAN BISHWOKARMA",
  class: "12-Management 'Business-A'"
  {'}'};
  const calendarDays = Array.from({'{'} length: 31 {'}'}, (_, i) =&gt; i + 1);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const sidebarItems = [
  {'{'} name: 'Academic', icon: BookOpen, active: false {'}'},
  {'{'} name: 'Student Management', icon: Users, active: false {'}'},
  {'{'} name: 'Library Management', icon: BookOpen, active: true {'}'},
  {'{'} name: 'E-Learning', icon: BookOpen, active: false {'}'},
  {'{'} name: 'Settings', icon: Settings, active: false {'}'},
  {'{'} name: 'Tools/Extras', icon: MoreVertical, active: false {'}'},
  {'{'} name: 'Account', icon: User, active: false {'}'},
  ];
  const attendanceTabs = ['Attendance', 'Assignments', 'Homework', 'Library'];
  return (
  &lt;&gt;
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
  <style dangerouslySetInnerHTML={{__html: "\n    ._table thead tr th,\n    ._table tbody tr td {\n        border: 1px solid #ccc !important;\n        vertical-align: middle;\n        padding: 3px 5px;\n    }\n\n    ._table thead tr th {\n        background: #eee;\n    }\n\n    .alert-warning-edit {\n        color: #8a6d3b;\n        background-color: #fcf8e3;\n        border-color: #faebcc;\n        margin-top: 10px;\n    }\n\n    .alert-success-edit {\n        color: #3c763d;\n        background-color: #dff0d8;\n        border-color: #d6e9c6;\n        margin-top: 10px;\n    }\n\n    .active__dot {\n        z-index: 9999;\n        position: absolute;\n        height: 20px;\n        width: 20px;\n        background-color: #e84118;\n        border-radius: 50%;\n        left: 35;\n        bottom: 30;\n    }\n\n    .active__dot__feedback {\n        height: 16px;\n        width: 16px;\n        background-color: #e84118;\n        border-radius: 50%;\n    }\n\n    .mt-15px {\n        margin-top: 15px;\n    }\n\n    .mt-5px {\n        margin-top: 5px;\n    }\n\n    .nav_icon_top {\n        width: 21px;\n        display: inline-block;\n    }\n\n    .fixed {\n        position: fixed;\n        top: 55px;\n        /* left: 321px; */\n        right: 0;\n        background-color: #a6e0cbf5;\n        width: 300px;\n        padding: 20px;\n        z-index: 9999;\n    }\n\n    #click-to-view:hover {\n        background-color: #528bff !important;\n    }\n\n    .notice-badge {\n        background: red;\n        color: #ffff;\n        padding: 1px 5px 1px 5px;\n        border-radius: 50%;\n        display: inline-block;\n    }\n\n    .sidebar .sidebar-menu li a {\n        display: flex;\n        align-items: center;\n        gap: 5px;\n        line-height: 1.2;\n    }\n\n    .sidebar-menu>li>a span {\n        all: unset;\n    }\n\n    .loading-wrapper {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        flex-direction: column;\n        gap: 10px;\n        height: 90vh;\n        width: 100%;\n    }\n\n    .toast-top-right {\n        top: 60px;\n    }\n\n    sup.new {\n        font-size: 11px;\n        color: #fff;\n        padding: 2px 7px;\n        border-radius: 10px;\n        background: #528BFF;\n    }\n\n    /* fa-trash-o not available in font awesome 5.15.3 so overwriting */\n    .fa-trash-o:before {\n        content: \"\\f2ed\";\n    }\n\n    .fa-plus-square-o::before {\n        content: \"\\f0fe\";\n        font-weight: 400;\n    }\n\n    .dashboard-toggle-wrapper {\n        height: 100%;\n        display: flex !important;\n        align-items: center !important;\n    }\n\n    /*.feedback\n    \n.support_ticket_floating_button .fac{\n    visibility: hidden;\n}\n.support_ticket_floating_button input:checked ~ .fac {\n    visibility: visible;\n}\n\n.support_ticket_floating_button .fab-child {\n    visibility: hidden;\n}\n\n.support_ticket_floating_button input:not(:checked):hover ~ .fab-child {\n    visibility: visible;\n}\n*/\n" }} />
  {/* body */}
  {/* Google Tag Manager (noscript) */}
  <noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=G-VT1ZTE7KPJ" height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
  {/* End Google Tag Manager (noscript) */}
  {/* header logo: style can be found in header.less */}
  {/*-topnavbar*/}
  <header className="header">
    <a href="https://ingrails.com/school/client?token=1754727104" className="logo" style={{fontFamily: 'sans-serif', overflow: 'hidden', fontSize: 'inherit'}}>
      ITAHARI NAMUNA COLLEGE        {/* Add the class icon to your logo image or logo icon to add the margining */}
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
              <span> increjana<i className="caret" /></span>
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
    <aside className="left-side sidebar-offcanvas">
      {/* sidebar: style can be found in sidebar.less */}
      <style dangerouslySetInnerHTML={{__html: "\n    .main-menu-text {\n        font-size: 14px;\n        padding: 18px 0;\n        color: #545353 !important;\n        cursor: default;\n        padding-left: 5px;\n        background: var(--inputRadius);\n        -moz-user-select: none;\n        -khtml-user-select: none;\n        -webkit-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    }\n\n    /* .sidebar .sidebar-menu .menu-lists .treeview-menu>li:not(.active) a {\n        border-top: 1px solid var(--borderLight) !important;\n    } */\n\n    .sidebar .sidebar-menu .menu-group li>a {\n        padding: 12px 5px 12px 15px;\n    }\n\n    .sidebar .sidebar-menu .menu-group li.active>a {\n        border-radius: var(--inputRadius);\n        background: #eaedf0 !important;\n        margin-top: 1px;\n    }\n\n    .sidebar-menu .menu-group li>a span {\n        width: 18px;\n        position: relative;\n        top: -5px;\n    }\n\n    .sidebar>.sidebar-menu .menu-group li>a,\n    .skin-blue .sidebar>.sidebar-menu .menu-group li {\n        /* border: none !important; */\n    }\n\n    .skin-blue .sidebar>.sidebar-menu .menu-group li>a {\n        font-size: 14px !important;\n        position: relative;\n        color: #44566c;\n    }\n\n    .sidebar-menu .menu-group li>a span {\n        all: unset;\n        color: #44566c;\n    }\n\n    .sidebar .sidebar-menu .menu-group li>a>.fa,\n    .sidebar .sidebar-menu .menu-group li>a>.glyphicon,\n    .sidebar .sidebar-menu .menu-group li>a>.ion {\n        width: 20px;\n    }\n\n    .sidebar .sidebar-menu hr {\n        margin-block: 10px !important;\n    }\n\n    .main-menu-text {\n        gap: 5px;\n        color: var(--textMidColor) !important;\n        font-weight: 500;\n    }\n\n    .sidebar .sidebar-menu .treeview-menu>li>a {\n        color: #3d4b5c;\n    }\n\n    .sidebar .sidebar-menu .menu-group .main-menu-text.active {\n        border-radius: var(--inputRadius);\n        background: #eaedf0 !important;\n    }\n\n    .sidebar .sidebar-menu .menu-group .main-menu-text.active .side-line::before {\n        content: '';\n        position: absolute;\n        left: 0;\n        width: 2px;\n        height: 80%;\n        display: inline-block;\n        background: #ED4554;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    .sidebar-menu .menu-group {\n        animation: 5s linear;\n    }\n" }} />
      <section className="sidebar">
        {/* Sidebar user panel */}
        <div className="user-panel" data-placement="bottom" title="ITAHARI NAMUNA COLLEGE">
          <a data-app={308} href="https://ingrails.com/school/client?token=1754727104" className="image" style={{textAlign: 'center', display: 'block'}}>
            <img data-app={308} src="https://s3.veda-app.com/veda-app/assets/308/home/2024-07-09/qRqYmSCoqE5E0abV-1720505071.png" className="img" style={{border: 0, height: '60px!important', width: 'auto !important'}} alt="User Image" />
            <p className="logo-text">ITAHARI NAMUNA COLLEGE</p>
          </a>
          <div className="text-align-center mt-1">
            <p className style={{padding: '4px 16px', fontSize: 15}}>Client ID:&nbsp;<span className="font-bold">N-0195</span></p>
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
                    <a href="javascript:void(0);" data="project-assignment">
                      <i className="fa fa-laptop" /> <span>
                        Assignment                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="homework">
                      <i className="fa fa-laptop" /> <span>
                        Homework                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="homework-check">
                      <i className="fa fa-laptop" /> <span>
                        Check Homework                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="reading-materials">
                      <i className="fa fa-laptop" /> <span>
                        Reading Materials                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="pdr">
                      <i className="fa fa-laptop" /> <span>
                        Daily Report                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="teachers-routine">
                      <i className="fa fa-laptop" /> <span>
                        Routine                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Class Evaluation.svg" alt className="nav_icon" />
                  <span>
                    Class Evaluation                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="class-evaluation-area">
                      <i className="fa fa-laptop" /> <span>
                        Evaluation Areas                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="assign-evaluation-area">
                      <i className="fa fa-laptop" /> <span>
                        Assign Evaluation Areas                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="add-evaluation">
                      <i className="fa fa-laptop" /> <span>
                        Add Evaluation                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Analytics.svg" alt className="nav_icon" />
                  <span>
                    Analytics                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="monitor-supervisor">
                      <i className="fa fa-laptop" /> <span>
                        Monitor Supervisor                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="analytics-homework-v2">
                      <i className="fa fa-laptop" /> <span>
                        Homework                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="analytics-staff-v2">
                      <i className="fa fa-laptop" /> <span>
                        Staff                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="analytics-onlineclass-teacher">
                      <i className="fa fa-laptop" /> <span>
                        Online Class Report                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="weekly-report">
                      <i className="fa fa-laptop" /> <span>
                        Weekly Report                                                                                                          </span>
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
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Push Notification.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Notifications</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* single menu */}
              <li className>
                <a href="javascript:void(0);" data="res-notification">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Push Notification.svg" alt className="nav_icon" />
                  <span>Push Notification</span>
                </a>
              </li>
              {/* single menu */}
              <li className>
                <a href="javascript:void(0);" data="suggestion-appreciation">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Notification.svg" alt className="nav_icon" />
                  <span>Suggestion/Appreciation</span>
                </a>
              </li>
              {/* single menu */}
              <li className>
                <a href="javascript:void(0);" data="sms-notification">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/SMS Notification.svg" alt className="nav_icon" />
                  <span>SMS Notification</span>
                </a>
              </li>
              {/* single menu */}
              <li className>
                <a href="javascript:void(0);" data="visitors-record">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Visitors Records.svg" alt className="nav_icon" />
                  <span>Visitor's Record</span>
                </a>
              </li>
              {/* single menu */}
              <li className>
                <a href="javascript:void(0);" data="import-account-notification">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Import Notification.svg" alt className="nav_icon" />
                  <span>Import Account</span>
                </a>
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
                    <a href="javascript:void(0);" data="search-students">
                      <i className="fa fa-laptop" /> <span>
                        Search                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="students-lite">
                      <i className="fa fa-laptop" /> <span>
                        Student List                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="add-student">
                      <i className="fa fa-laptop" /> <span>
                        Add Student                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="import">
                      <i className="fa fa-laptop" /> <span>
                        Import Students (Add/Update)                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="bulk-edit">
                      <i className="fa fa-laptop" /> <span>
                        Bulk Edit                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="student-image-bulk">
                      <i className="fa fa-laptop" /> <span>
                        Student Image Bulk Upload                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="student-document-bulk">
                      <i className="fa fa-laptop" /> <span>
                        Student Document Bulk Upload                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="res-student-group">
                      <i className="fa fa-laptop" /> <span>
                        Group                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="student-performance-evaluation">
                      <i className="fa fa-laptop" /> <span>
                        Student Evaluation                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="admit-card">
                      <i className="fa fa-laptop" /> <span>
                        Admit Card                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="character-certificate">
                      <i className="fa fa-laptop" /> <span>
                        Certificates                                                                                                          </span>
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
                    <a href="javascript:void(0);" data="students-print">
                      <i className="fa fa-laptop" /> <span>
                        Print Data                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="students">
                      <i className="fa fa-laptop" /> <span>
                        Download Data                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="students-group">
                      <i className="fa fa-laptop" /> <span>
                        Students Group                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="new-students-record">
                      <i className="fa fa-laptop" /> <span>
                        New Student                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="left-students-record">
                      <i className="fa fa-laptop" /> <span>
                        Left Student                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="analytics-student-gender-wise">
                      <i className="fa fa-laptop" /> <span>
                        Gender Report                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="analytics-student-team-category-wise">
                      <i className="fa fa-laptop" /> <span>
                        Team Report                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="remarks-record">
                      <i className="fa fa-laptop" /> <span>
                        Remarks Report                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="uploaded-students-document">
                      <i className="fa fa-laptop" /> <span>
                        Uploaded Documents                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="lunch-students">
                      <i className="fa fa-laptop" /> <span>
                        Lunch Students                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="merit">
                      <i className="fa fa-laptop" /> <span>
                        Merit                                                                                                          </span>
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
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Staff.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Staff Management</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Staff.svg" alt className="nav_icon" />
                  <span>
                    Staff                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="staff">
                      <i className="fa fa-laptop" /> <span>
                        Add/Edit                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="staff-list-view">
                      <i className="fa fa-laptop" /> <span>
                        List                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="staff-level">
                      <i className="fa fa-laptop" /> <span>
                        Staff Position                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="staff-qualification">
                      <i className="fa fa-laptop" /> <span>
                        Staff Qualification                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="user-type">
                      <i className="fa fa-laptop" /> <span>
                        User Type                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="import-staff">
                      <i className="fa fa-laptop" /> <span>
                        Import Staffs                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="assign-user-type">
                      <i className="fa fa-laptop" /> <span>
                        Assign User Type                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="vacancy">
                      <i className="fa fa-laptop" /> <span>
                        Vacancy                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="update-staff">
                      <i className="fa fa-laptop" /> <span>
                        Update Staff                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Reports.svg" alt className="nav_icon" />
                  <span>
                    Reports                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="staff-print-data">
                      <i className="fa fa-laptop" /> <span>
                        Print Data                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="staff-list">
                      <i className="fa fa-laptop" /> <span>
                        Download Data                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="recruitment-report">
                      <i className="fa fa-laptop" /> <span>
                        Recruitment Report                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="uploaded-staffs-document">
                      <i className="fa fa-laptop" /> <span>
                        Staff Documents                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="absent-notes-staff">
                      <i className="fa fa-laptop" /> <span>
                        Staff Leave Notes                                                                                                          </span>
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
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Attendance.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Attendance Management</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Attendance.svg" alt className="nav_icon" />
                  <span>
                    Attendance                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="attendance">
                      <i className="fa fa-laptop" /> <span>
                        Daily Attendance                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="qr-attendance">
                      <i className="fa fa-laptop" /> <span>
                        Daily Attendance (QR)                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="qr-bus-attendance">
                      <i className="fa fa-laptop" /> <span>
                        Bus Attendance (QR)                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="group-attendance">
                      <i className="fa fa-laptop" /> <span>
                        Group Attendance                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="absent-notes">
                      <i className="fa fa-laptop" /> <span>
                        Leave Notes                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Lunch.svg" alt className="nav_icon" />
                  <span>
                    Lunch                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="qr-lunch">
                      <i className="fa fa-laptop" /> <span>
                        Lunch Attendance                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="lunch-report">
                      <i className="fa fa-laptop" /> <span>
                        Lunch Report                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="lunch-form">
                      <i className="fa fa-laptop" /> <span>
                        Lunch Form                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Reports.svg" alt className="nav_icon" />
                  <span>
                    Reports                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="bus-attendance">
                      <i className="fa fa-laptop" /> <span>
                        Bus Attendance                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="group-attendance">
                      <i className="fa fa-laptop" /> <span>
                        Group Attendance                                                                                                          </span>
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
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Exam Configuration.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Exam Management</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Exam Configuration.svg" alt className="nav_icon" />
                  <span>
                    Exam Configuration                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="exams">
                      <i className="fa fa-laptop" /> <span>
                        Add Exam                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="print-exams-routine">
                      <i className="fa fa-laptop" /> <span>
                        Print Exam Routine                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="result-remarks">
                      <i className="fa fa-laptop" /> <span>
                        Selective Remarks                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="result-remarks-list">
                      <i className="fa fa-laptop" /> <span>
                        Selective Remarks List                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="student-specific-remarks">
                      <i className="fa fa-laptop" /> <span>
                        Student Specific Remarks                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="student-subject-specific-remarks">
                      <i className="fa fa-laptop" /> <span>
                        Subject Specific Remarks                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="manual-attendance">
                      <i className="fa fa-laptop" /> <span>
                        Manual Attendance                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="subject-based-manual-attendance">
                      <i className="fa fa-laptop" /> <span>
                        Subject Attendance                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="group-class-association">
                      <i className="fa fa-laptop" /> <span>
                        Group Class Association                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="result-type-mobile">
                      <i className="fa fa-laptop" /> <span>
                        Mobile App Settings                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Normal Exam.svg" alt className="nav_icon" />
                  <span>
                    Exams                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="result-new">
                      <i className="fa fa-laptop" /> <span>
                        Add/Edit Marks                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="group-import-result">
                      <i className="fa fa-laptop" /> <span>
                        Import Group Result                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="result-show-all">
                      <i className="fa fa-laptop" /> <span>
                        All Report Card                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Ledgers.svg" alt className="nav_icon" />
                  <span>
                    Ledgers                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="ledger-default">
                      <i className="fa fa-laptop" /> <span>
                        Detail Ledger                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="ledger-top-ten">
                      <i className="fa fa-laptop" /> <span>
                        Top-10                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="ledger-failed-students">
                      <i className="fa fa-laptop" /> <span>
                        Failure List                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="ledger-result-analysis">
                      <i className="fa fa-laptop" /> <span>
                        Result Analysis                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="comparative-ledger">
                      <i className="fa fa-laptop" /> <span>
                        Comparative Ledger                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="ledger-border-students">
                      <i className="fa fa-laptop" /> <span>
                        Boarder Students                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="ledger-group">
                      <i className="fa fa-laptop" /> <span>
                        Group Ledger                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/General Evaluation.svg" alt className="nav_icon" />
                  <span>
                    General Evaluation                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="ge-objective-copy">
                      <i className="fa fa-laptop" /> <span>
                        Copy Objectives                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/CAS.svg" alt className="nav_icon" />
                  <span>
                    CAS                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="cas-questions">
                      <i className="fa fa-laptop" /> <span>
                        Add Objective                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="cas-result">
                      <i className="fa fa-laptop" /> <span>
                        CAS Result                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="cas-catagory-copy">
                      <i className="fa fa-laptop" /> <span>
                        Copy Objective/Question                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="cas-import-result">
                      <i className="fa fa-laptop" /> <span>
                        Import Result                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Selective Exam.svg" alt className="nav_icon" />
                  <span>
                    Selective Exam                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="se-objective">
                      <i className="fa fa-laptop" /> <span>
                        Add Objective                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="se-objective-copy">
                      <i className="fa fa-laptop" /> <span>
                        Copy Objectives                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="se-marks">
                      <i className="fa fa-laptop" /> <span>
                        Add/Edit Answers                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="student-selective-exam">
                      <i className="fa fa-laptop" /> <span>
                        Studentwise Answers                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="se-ledger">
                      <i className="fa fa-laptop" /> <span>
                        Ledger                                                                                                          </span>
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
                    <a href="javascript:void(0);" data="library-book">
                      <i className="fa fa-laptop" /> <span>
                        Book                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-bar-code">
                      <i className="fa fa-laptop" /> <span>
                        Barcode                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-spine">
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
                    <a href="javascript:void(0);" data="library-issue">
                      <i className="fa fa-laptop" /> <span>
                        Manual Issue/Return                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-issue-barcode">
                      <i className="fa fa-laptop" /> <span>
                        Auto Issue/Return                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="student-issue-return">
                      <i className="fa fa-laptop" /> <span>
                        Student/Staff                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-reservation">
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
                    <a href="javascript:void(0);" data="library-report">
                      <i className="fa fa-laptop" /> <span>
                        Report                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="download-books">
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
                    <a href="javascript:void(0);" data="library-book-type">
                      <i className="fa fa-laptop" /> <span>
                        Book Type                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-room">
                      <i className="fa fa-laptop" /> <span>
                        Room                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-rack">
                      <i className="fa fa-laptop" /> <span>
                        Rack                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="import-books">
                      <i className="fa fa-laptop" /> <span>
                        Import Book                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="update-books">
                      <i className="fa fa-laptop" /> <span>
                        Update Book                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="library-setting">
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
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Admission Management.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Admission Portal</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Admission Management.svg" alt className="nav_icon" />
                  <span>
                    Admission                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="admission-request">
                      <i className="fa fa-laptop" /> <span>
                        Admission Request                                                                                                          </span>
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
                    <a href="javascript:void(0);" data="online-class">
                      <i className="fa fa-laptop" /> <span>
                        Start Class                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="online-class-account">
                      <i className="fa fa-laptop" /> <span>
                        Account Configuration                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="online-class-report">
                      <i className="fa fa-laptop" /> <span>
                        Report                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/E classroom.svg" alt className="nav_icon" />
                  <span>
                    E-Classroom                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="learning-exam">
                      <i className="fa fa-laptop" /> <span>
                        Exam                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="chapters">
                      <i className="fa fa-laptop" /> <span>
                        Chapters                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="learning-exam-detail">
                      <i className="fa fa-laptop" /> <span>
                        Exam Detail                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="mcq-chapter-wise-report">
                      <i className="fa fa-laptop" /> <span>
                        List                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="learning-questions">
                      <i className="fa fa-laptop" /> <span>
                        Add Questions/Answer                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="copy-learning-questions">
                      <i className="fa fa-laptop" /> <span>
                        Copy Questions/Answer                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="e-classroom-report-card">
                      <i className="fa fa-laptop" /> <span>
                        Ledger                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="question-answer-stat">
                      <i className="fa fa-laptop" /> <span>
                        Statistics                                                                                                          </span>
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
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Website.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Content Management</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Website.svg" alt className="nav_icon" />
                  <span>
                    Website                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="res-videos">
                      <i className="fa fa-laptop" /> <span>
                        Videos                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="res-events">
                      <i className="fa fa-laptop" /> <span>
                        Events                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Gallery.svg" alt className="nav_icon" />
                  <span>
                    Gallery                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="gallery-category">
                      <i className="fa fa-laptop" /> <span>
                        Albums                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="res-gallery">
                      <i className="fa fa-laptop" /> <span>
                        Images                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Download.svg" alt className="nav_icon" />
                  <span>
                    Downloads                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="downloads-category">
                      <i className="fa fa-laptop" /> <span>
                        Category                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="downloads">
                      <i className="fa fa-laptop" /> <span>
                        Files                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Blog-Article.svg" alt className="nav_icon" />
                  <span>
                    Blog-Article                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="blog-category">
                      <i className="fa fa-laptop" /> <span>
                        Add Blog Category                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="blog">
                      <i className="fa fa-laptop" /> <span>
                        Add Blog/Article                                                                                                          </span>
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
              <img src="https://ingrails.com/school/admin_panel/icons/dash2/Organization.svg" alt className="nav_icon" width={20} />
              <span className="group-name">Settings</span>
              <i className="fa fa-angle-left pull-right" style={{right: 3}} />
            </p>
            <section className="menus-list" style={{display: 'none'}}>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Organization.svg" alt className="nav_icon" />
                  <span>
                    Organization                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="res-home">
                      <i className="fa fa-laptop" /> <span>
                        Home                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="res-about">
                      <i className="fa fa-laptop" /> <span>
                        About                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
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
                    <a href="javascript:void(0);" data="class">
                      <i className="fa fa-laptop" /> <span>
                        Class                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="section">
                      <i className="fa fa-laptop" /> <span>
                        Section                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="subjects">
                      <i className="fa fa-laptop" /> <span>
                        Subjects                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="routine">
                      <i className="fa fa-laptop" /> <span>
                        Class Routine                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Mobile.svg" alt className="nav_icon" />
                  <span>
                    Mobile                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="res-color">
                      <i className="fa fa-laptop" /> <span>
                        Color Setting                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="res-splash">
                      <i className="fa fa-laptop" /> <span>
                        Launching Image                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Calender.svg" alt className="nav_icon" />
                  <span>
                    Calendar                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="calendar-cat">
                      <i className="fa fa-laptop" /> <span>
                        Calendar Category                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="calendar">
                      <i className="fa fa-laptop" /> <span>
                        Calendar                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="calendar-events-bs">
                      <i className="fa fa-laptop" /> <span>
                        Calendar Events - BS                                                                                                          </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/bus.svg" alt className="nav_icon" />
                  <span>
                    Bus                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="bus-routes">
                      <i className="fa fa-laptop" /> <span>
                        Bus-Routes                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="javascript:void(0);" data="bus-map">
                      <i className="fa fa-laptop" /> <span>
                        Routes-Map                                                                                                          </span>
                    </a>
                  </li>
                  <li className>
                    <a href="https://gpsnepal.com.np/login" target="_blank" data="nav_header">
                      <span>GPS Tracker</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* menu with submenus */}
              <li className="treeview">
                <a href="#" data="nav_header">
                  <img src="https://ingrails.com/school/admin_panel/icons/dash2/Others.svg" alt className="nav_icon" />
                  <span>
                    Others                                                                          </span>
                  <i className="fa fa-angle-left pull-right" />
                </a>
                <ul className="treeview-menu">
                  <li className>
                    <a href="javascript:void(0);" data="upload-document-category">
                      <i className="fa fa-laptop" /> <span>
                        Documents Category                                                                                                          </span>
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
    <aside className="right-side">
      {/* style="height: calc(100vh - 50px) !important;" */}
      {/*content here*/}
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
            {/* <p class="survey-box-desc">Hi increjana,</p> */}
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
<a href="https://ingrails.com/school/client?token=1754727104" class="goback-btn">Back To Dashboard</a>

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
  <div className="modal fade modal-official-email" id="modal-official-email" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg verification-modal">
      <section style={{padding: 10}}>
        <div className="container">
          <div className="popup modal-one" id="email-verification">
          </div>
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
      <a href="javascript:void(0);" className="fac-item" id="get-dashboard-tour">Get a Tour</a>
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
  );
  {'}'};
  export default INCPustakalaya;
</div>

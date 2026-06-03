var express = require('express');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
var validator = require('express-validator');

module.exports = function (app) {

      function isUserAllowed(req, res, next) {
            sess = req.session;
            if (sess.user) {
                  return next();
            }
            else { res.redirect('/login'); }
      }

      app.get('/', isUserAllowed, function (req, res) {
            res.locals = { title: 'Dashboard' };
            res.render('Dashboard/index');
      });

      // Layouts 

      app.get('/index-dark', isUserAllowed, function (req, res) {
            res.locals = { title: 'Horizontal Dark' };
            res.render('Dashboard/index', { layout: 'layoutsDark' });
      });
      app.get('/index-rtl', isUserAllowed, function (req, res) {
            res.locals = { title: 'Horizontal Rtl' };
            res.render('Dashboard/index', { layout: 'layoutsRtl' });
      });   
      app.get('/layouts-light-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Light Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsLightSidebar' });
      });
      app.get('/layouts-compact-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Compact Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsCompactSidebar' });
      });
      app.get('/layouts-scrollable', isUserAllowed, function (req, res) {
            res.locals = { title: 'Scollable Layout' };
            res.render('Dashboard/index', { layout: 'layoutsScrollable' });
      });
      app.get('/layouts-icon-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Icon Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsIconSidebar' });
      });
      app.get('/layouts-boxed', isUserAllowed, function (req, res) {
            res.locals = { title: 'Boxed Width' };
            res.render('Dashboard/index', { layout: 'layoutsBoxed' });
      });
      app.get('/layouts-colored-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Colored Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsColoredSidebar' });
      });

      app.get('/layouts-vertical', isUserAllowed, function (req, res) {
            res.locals = { title: 'Vertical' };
            res.render('Dashboard/index', { layout: 'layoutsVertical' });
      });

      app.get("/layouts-vertical-dark", isUserAllowed, function (req, res) {
            res.locals = { title: 'vertical Dark' };
            res.render("Dashboard/index", { layout: "layoutVDarkLayout" });
      });

      app.get("/layouts-vertical-rtl", isUserAllowed, function (req, res) {
            res.locals = { title: 'vertical Rtl' };
            res.render("Dashboard/index", { layout: "layoutVRtlLayout" });
      });
      app.get('/layouts-vertical-boxed', isUserAllowed, function (req, res) {
            res.locals = { title: 'vertical Boxed' };
            res.render('Dashboard/index', { layout: 'layoutsVBoxed' });
      });
      app.get('/layouts-vertical-scrollable', isUserAllowed, function (req, res) {
            res.locals = { title: 'vertical Scrollable' };
            res.render('Dashboard/index', { layout: 'layoutsVScrollable' });
      });
      app.get('/layouts-vertical-dark-topbar', isUserAllowed, function (req, res) {
            res.locals = { title: 'vertical Dark Topbar' };
            res.render('Dashboard/index', { layout: 'layoutsVTopbarDark' });
      });

      // Calendar
      app.get('/apps-calendar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Calendar' };
            res.render('Calendar/calendar');
      });

      // // Chat
      app.get('/apps-chat', isUserAllowed, function (req, res) {
            res.locals = { title: 'Chat' };
            res.render('Chat/apps-chat');
      });

      // // Email
      app.get('/email-inbox', isUserAllowed, function (req, res) {
            res.locals = { title: 'Inbox' };
            res.render('Email/email-inbox');
      });
      app.get('/email-read', isUserAllowed, function (req, res) {
            res.locals = { title: 'Email Read' };
            res.render('Email/email-read');
      });

      //Ecommerce
      app.get('/ecommerce-products', isUserAllowed, function (req, res) {
            res.locals = { title: 'Products' };
            res.render('Ecommerce/ecommerce-products');
      });
      app.get('/ecommerce-product-detail', isUserAllowed, function (req, res) {
            res.locals = { title: 'Product Detail' };
            res.render('Ecommerce/ecommerce-product-detail');
      });
      app.get('/ecommerce-orders', isUserAllowed, function (req, res) {
            res.locals = { title: 'Orders' };
            res.render('Ecommerce/ecommerce-orders');
      });
      app.get('/ecommerce-customers', isUserAllowed, function (req, res) {
            res.locals = { title: 'Customers' };
            res.render('Ecommerce/ecommerce-customers');
      });
      app.get('/ecommerce-cart', isUserAllowed, function (req, res) {
            res.locals = { title: 'Cart' };
            res.render('Ecommerce/ecommerce-cart');
      });
      app.get('/ecommerce-checkout', isUserAllowed, function (req, res) {
            res.locals = { title: 'Checkout' };
            res.render('Ecommerce/ecommerce-checkout');
      });
      app.get('/ecommerce-shops', isUserAllowed, function (req, res) {
            res.locals = { title: 'Shops' };
            res.render('Ecommerce/ecommerce-shops');
      });
      app.get('/ecommerce-add-product', isUserAllowed, function (req, res) {
            res.locals = { title: 'Add Product' };
            res.render('Ecommerce/ecommerce-add-product');
      });

      //  // Contact
       app.get('/contacts-grid', isUserAllowed, function (req, res) {
            res.locals = { title: 'User Grid' };
            res.render('Contacts/contacts-grid');
      });
      app.get('/contacts-list', isUserAllowed, function (req, res) {
            res.locals = { title: 'User List' };
            res.render('Contacts/contacts-list');
      });
      app.get('/contacts-profile', isUserAllowed, function (req, res) {
            res.locals = { title: 'User Settings' };
            res.render('Contacts/contacts-profile');
      });

      // //invoices
      app.get('/invoices-list', isUserAllowed, function (req, res) {
            res.locals = { title: 'Invoice List' };
            res.render('Invoices/invoices-list');
      });
      app.get('/invoices-detail', isUserAllowed, function (req, res) {
            res.locals = { title: 'Invoice Detail' };
            res.render('Invoices/invoices-detail');
      });

      // // Utility
      app.get('/pages-starter', isUserAllowed, function (req, res) {
            res.locals = { title: 'Starter Page' };
            res.render('Pages/pages-starter');
      });
      app.get('/pages-maintenance', isUserAllowed, function (req, res) {
            res.locals = { title: 'Maintenance' };
            res.render('Pages/pages-maintenance');
      });
      app.get('/pages-comingsoon', isUserAllowed, function (req, res) {
            res.locals = { title: 'Coming Soon' };
            res.render('Pages/pages-comingsoon');
      });
      app.get('/pages-timeline', isUserAllowed, function (req, res) {
            res.locals = { title: 'Timeline' };
            res.render('Pages/pages-timeline');
      });
      app.get('/pages-faqs', isUserAllowed, function (req, res) {
            res.locals = { title: 'FAQs' };
            res.render('Pages/pages-faqs');
      });
      app.get('/pages-pricing', isUserAllowed, function (req, res) {
            res.locals = { title: 'Pricing' };
            res.render('Pages/pages-pricing');
      });
      app.get('/pages-404', isUserAllowed, function (req, res) {
            res.locals = { title: 'Error 404' };
            res.render('Pages/pages-404');
      });
      app.get('/pages-500', isUserAllowed, function (req, res) {
            res.locals = { title: 'Error 500' };
            res.render('Pages/pages-500');
      });

      // // UI Elements
      app.get('/ui-alerts', isUserAllowed, function (req, res) {
            res.locals = { title: 'Alerts' };
            res.render('Ui/ui-alerts');
      });
      app.get('/ui-buttons', isUserAllowed, function (req, res) {
            res.locals = { title: 'Buttons' };
            res.render('Ui/ui-buttons');
      });
      app.get('/ui-cards', isUserAllowed, function (req, res) {
            res.locals = { title: 'Cards' };
            res.render('Ui/ui-cards');
      });
      app.get('/ui-carousel', isUserAllowed, function (req, res) {
            res.locals = { title: 'Carousel' };
            res.render('Ui/ui-carousel');
      });
      app.get('/ui-colors', isUserAllowed, function (req, res) {
            res.locals = { title: 'Colors' };
            res.render('Ui/ui-colors');
      });
      app.get('/ui-dropdowns', isUserAllowed, function (req, res) {
            res.locals = { title: 'Dropdowns' };
            res.render('Ui/ui-dropdowns');
      });
      app.get('/ui-general', isUserAllowed, function (req, res) {
            res.locals = { title: 'General' };
            res.render('Ui/ui-general');
      });
      app.get('/ui-grid', isUserAllowed, function (req, res) {
            res.locals = { title: 'Grid' };
            res.render('Ui/ui-grid');
      });
      app.get('/ui-images', isUserAllowed, function (req, res) {
            res.locals = { title: 'Images' };
            res.render('Ui/ui-images');
      });
      app.get('/ui-modals', isUserAllowed, function (req, res) {
            res.locals = { title: 'Modals' };
            res.render('Ui/ui-modals');
      });
      app.get('/ui-offcanvas', isUserAllowed, function (req, res) {
            res.locals = { title: 'Offcanvas' };
            res.render('Ui/ui-offcanvas');
      });
      app.get('/ui-placeholders', isUserAllowed, function (req, res) {
            res.locals = { title: 'Placeholders' };
            res.render('Ui/ui-placeholders');
      });
      app.get('/ui-progressbars', isUserAllowed, function (req, res) {
            res.locals = { title: 'Progress Bars' };
            res.render('Ui/ui-progressbars');
      });
      app.get('/ui-tabs-accordions', isUserAllowed, function (req, res) {
            res.locals = { title: 'Tabs & Accordions' };
            res.render('Ui/ui-tabs-accordions');
      });
      app.get('/ui-typography', isUserAllowed, function (req, res) {
            res.locals = { title: 'Typography' };
            res.render('Ui/ui-typography');
      });
      app.get('/ui-video', isUserAllowed, function (req, res) {
            res.locals = { title: 'Video' };
            res.render('Ui/ui-video');
      });

      // //Extended

      app.get('/extended-lightbox', isUserAllowed, function (req, res) {
            res.locals = { title: 'Lightbox' };
            res.render('Extended/extended-lightbox');
      });
      app.get('/extended-notifications', isUserAllowed, function (req, res) {
            res.locals = { title: 'Notifications' };
            res.render('Extended/extended-notifications');
      });
      app.get('/extended-rangeslider', isUserAllowed, function (req, res) {
            res.locals = { title: 'Range Slider' };
            res.render('Extended/extended-rangeslider');
      });
      app.get('/extended-rating', isUserAllowed, function (req, res) {
            res.locals = { title: 'Rating' };
            res.render('Extended/extended-rating');
      });
      app.get('/extended-sweet-alert', isUserAllowed, function (req, res) {
            res.locals = { title: 'SweetAlert 2' };
            res.render('Extended/extended-sweet-alert');
      });

      // // Forms
      app.get('/form-elements', isUserAllowed, function (req, res) {
            res.locals = { title: 'Basic Elements' };
            res.render('Form/form-elements');
      });
      app.get('/form-validation', isUserAllowed, function (req, res) {
            res.locals = { title: 'Validation' };
            res.render('Form/form-validation');
      });
      app.get('/form-advanced', isUserAllowed, function (req, res) {
            res.locals = { title: 'Advanced Plugins' };
            res.render('Form/form-advanced');
      });
      app.get('/form-editors', isUserAllowed, function (req, res) {
            res.locals = { title: 'Editor' };
            res.render('Form/form-editors');
      });
      app.get('/form-uploads', isUserAllowed, function (req, res) {
            res.locals = { title: 'File Upload' };
            res.render('Form/form-uploads');
      });
      app.get('/form-wizard', isUserAllowed, function (req, res) {
            res.locals = { title: 'Wizard' };
            res.render('Form/form-wizard');
      });
      app.get('/form-mask', isUserAllowed, function (req, res) {
            res.locals = { title: 'Mask' };
            res.render('Form/form-mask');
      });

      // // Tables
      app.get('/tables-basic', isUserAllowed, function (req, res) {
            res.locals = { title: 'Bootstrap Basic' };
            res.render('Tables/tables-basic');
      });
      app.get('/tables-advanced', isUserAllowed, function (req, res) {
            res.locals = { title: 'Advance Tables' };
            res.render('Tables/tables-advanced');
      });


      // // Charts
      app.get('/charts-apex', isUserAllowed, function (req, res) {
            res.locals = { title: 'Apex charts' };
            res.render('Charts/charts-apex');
      });
      app.get('/charts-chartjs', isUserAllowed, function (req, res) {
            res.locals = { title: 'Chartjs' };
            res.render('Charts/charts-chartjs');
      });

      // // Icons
      app.get('/icons-feather', isUserAllowed, function (req, res) {
            res.locals = { title: 'Feather' };
            res.render('Icons/icons-feather');
      });
      app.get('/icons-boxicons', isUserAllowed, function (req, res) {
            res.locals = { title: 'Boxicons' };
            res.render('Icons/icons-boxicons');
      });
      app.get('/icons-materialdesign', isUserAllowed, function (req, res) {
            res.locals = { title: 'Material Design Icons' };
            res.render('Icons/icons-materialdesign');
      });
      app.get('/icons-dripicons', isUserAllowed, function (req, res) {
            res.locals = { title: 'Dripicons' };
            res.render('Icons/icons-dripicons');
      });
      app.get('/icons-fontawesome', isUserAllowed, function (req, res) {
            res.locals = { title: 'Font Awesome 5' };
            res.render('Icons/icons-fontawesome');
      });

      // // Maps
      app.get('/maps-google', isUserAllowed, function (req, res) {
            res.locals = { title: 'Google' };
            res.render('Maps/maps-google');
      });
      app.get('/maps-leaflet', isUserAllowed, function (req, res) {
            res.locals = { title: 'leaflet' };
            res.render('Maps/maps-leaflet');
      });
      app.get('/maps-vector', isUserAllowed, function (req, res) {
            res.locals = { title: 'Vector' };
            res.render('Maps/maps-vector');
      });

}
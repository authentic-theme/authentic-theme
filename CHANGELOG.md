##Changelog

####Version 4.1.1 (Oct 13, 2014)
* Removed requirement for both, either using `Switch` module or `Feature` is no longer necessary. Replaced with simple `if/elsif/else` statements. Using `Switch` caused error messages on latest installations, e.g. CentOS 7, while using `Feature` caused errors on old installations

####Version 4.1.0 (Oct 12, 2014)

* :round_pushpin: Changed to using `Switch`(https://github.com/qooob/authentic-theme#troubleshoot) module, rather than `Feature` in `index.cgi` and `menu.cgi` to support old versions of _Perl_. [:paperclip:](https://github.com/qooob/authentic-theme/issues/2) In case, `Switch` module is not installed on your system, you will get an error. See [FAQ](https://github.com/qooob/authentic-theme#troubleshoot) for more details
* Changed `link` named _View changelog_ in _ConfigServer Security & Firewall_ module to a `button`
* Improved loader animation and behavior
* Added many missing _input_ stylings in some modules
* Added _German_ translation. Special thanks to _Michael Keck_ [:paperclip:](https://github.com/qooob/authentic-theme/issues/3)
* Fixed `theme_ui_form_end` generator to wrap buttons in _span_ not in _td_, which enables support for lower resolutions [:paperclip:](https://github.com/qooob/authentic-theme/issues/4)
* Removed redundant _fonts_ directory

####Version 4.0.0 (Oct 9, 2014)
 * Fixed lost pre-login banner option
 * Added support for _dataTables_. Now you can easily sort table rows based on the table header. It gets easier to manage data in such modules as _Bootup and Shutdown_, _Users and Groups_ and others, containing multi-row data. It also supports _ConfigServer Security & Firewall_, where you can also easily filter _Temporary IP Entries_ and _Listening Ports_
 * Added possibility to use automatic updates for **Authentic Theme**, with direct means of Webmin and its theme installation module - _no other server-side scripts are used_! Updates, when available, will be displayed in *System Information* tab.<br>*Warning!* In order to use automatic updates and check for new theme versions, your system _must have_ the following _Perl_ modules installed: _LWP::Simple_ and _Net::SSLeay_. You should be able to install it from official repos.<br>See [FAQ](https://github.com/qooob/authentic-theme#troubleshoot) for more details
 * Added ability to remove the page _loader_ and see what is happening before the page actually loaded/constructed or just in case of the _loader_ getting stuck. To prematurely remove the _loader_, click on it, using mouse `double-right-click`
 * Removed false dependency for `virtual-server-theme/virtual-server-theme-lib.pl`

####Version 3.0.1 (Oct 7, 2014)
 * Fixed malfunctioning `theme_ui_checkbox`, causing some _input_ fields disappear
 * Fixed few other small bugs

####Version 3.0.0 (Oct 5, 2014)
* Added popover tooltip for old `window.open` to process `help.cgi`
* Added theme information version (installed/update notice) in _System Information_ (works by just comparing `VERSION.txt` files, nothing more)
* Fixed error in _default.js_ script, throwing `NS_ERROR_NOT_AVAILABLE` in Firefox and other _Gecko_ browsers
* Fixed all problems with selecting and filtering _files/user/groups_ in `*_chooser.cgi`
* Fixed loaders being shown every time when waiting for server reply
* Fixed listing of virtual-servers in Virtualmin
* Fixed `checkboxes` margins in Virtualmin
* Fixed table `vertical-align: top` for selecting hours
* Fixed dozens of small bugs

####Version 2.0.1 (Oct 1, 2014)
* Fixed small bugs

####Version 2.0.0 (Oct 1, 2014)
* Added support for _Virtualmin_ module
* Added support for _ConfigServer Security & Firewall_ module
* Fixed/optimized images
* Fixed _Usermin_ not loading menu
* Fixed/added support for menu on mobile devices
* Fixed dozens of small bugs

####Version 1.1.0 (Sep 24, 2014)
* Added support for highlighting edited config files, with showing line numbers
* Fixed navigation menu problems, when using back (history) button
* Fixed/optimized favicons dimensions

####Version 1.0.0 by Ilia Rostovtsev (Sep 21, 2014)
* implemented full support for all elements: tables, forms, inputs, buttons and etc
* added stick menu to display which module was selected
* fixed problem when the changes/new settings were not submitted
* fixed missing radios/checkboxes because label tag isn't always used
* fixed/removed old/unnessesary icons/images all over the theme
* multiple small bug fixes
* added optional favicons to visually distinguish Webmin/Usermin

####Version v0.2 Alpha by Riccardo Nobile (May 19, 2014)
* Initial release

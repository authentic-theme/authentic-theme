/*!
 * Authentic Theme 18.00 (https://github.com/qooob/authentic-theme)
 * Copyright 2016 Ilia Rostovtsev <programming@rostovtsev.ru>
 * Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
 */
;
$__theme_name__ = "authentic";
$___________ready = 0;
t___wi = window;
t__wi_p = t___wi.parent;
t___wi.parent.$___________right = 0;
typeof t__wi_p.$___________lrs_r_l == "undefined" ? t__wi_p.$___________lrs_r_l = 0 : false;
if (t___wi.location == t__wi_p.location) {
    t___wi.parent.$___________left = 0
}
typeof t__wi_p.$___________initial == "undefined" ? t__wi_p.$___________initial = 1 : false;
typeof t__wi_p.$___ajax_requested_url == "undefined" ? t__wi_p.$___ajax_requested_url = "_blank" : false;
typeof settings_mailbox_slash_delimiter == "undefined" ? settings_mailbox_slash_delimiter = true : false;
typeof settings_window_autoscroll == "undefined" ? settings_window_autoscroll = true : false;
typeof settings_right_reload == "undefined" ? settings_right_reload = true : false;
typeof settings_right_default_tab_usermin == "undefined" ? settings_right_default_tab_usermin = "/" : false;
typeof settings_right_virtualmin_default == "undefined" ? settings_right_virtualmin_default = "sysinfo.cgi" : false;
typeof settings_right_cloudmin_default == "undefined" ? settings_right_cloudmin_default = "sysinfo.cgi" : false;
typeof settings_cm_view_palette == "undefined" ? settings_cm_view_palette = "elegant" : false;
typeof settings_cm_editor_palette == "undefined" ? settings_cm_editor_palette = "monokai" : false;
typeof settings_notification_color == "undefined" ? settings_notification_color = "grey" : false;
typeof settings_notification_slider_enabled == "undefined" ? settings_notification_slider_enabled = true : false;
typeof settings_notification_slider_fixed == "undefined" ? settings_notification_slider_fixed = false : false;
settings_thirdparty_filemanager_hide_actions = (typeof localStorage != "undefined" && localStorage.getItem("settings_thirdparty_filemanager_hide_actions") == "false" ? false : true);
settings_thirdparty_filemanager_hide_toolbar = (typeof localStorage != "undefined" && localStorage.getItem("settings_thirdparty_filemanager_hide_toolbar") == "true" ? true : false);
settings_thirdparty_filemanager_hovered_toolbar = (typeof localStorage != "undefined" && localStorage.getItem("settings_thirdparty_filemanager_hovered_toolbar") == "true" ? true : false);
settings_thirdparty_filemanager_notification_type = (typeof localStorage != "undefined" && localStorage.getItem("settings_thirdparty_filemanager_notification_type") ? localStorage.getItem("settings_thirdparty_filemanager_notification_type") : 1);
settings_thirdparty_filemanager_calculate_size = (typeof localStorage != "undefined" && localStorage.getItem("settings_thirdparty_filemanager_calculate_size") == "true" ? true : false);
settings_thirdparty_filemanager_remember_tabs = (typeof localStorage != "undefined" && localStorage.getItem("settings_thirdparty_filemanager_remember_tabs") == "false" ? false : true);
settings_thirdparty_xsql_fit_content_screen_height = (typeof localStorage != "undefined" && localStorage.getItem("settings_thirdparty_xsql_fit_content_screen_height") == "true" ? true : false);
typeof settings_hotkeys_active == "undefined" ? settings_hotkeys_active = true : false;
typeof settings_hotkey_toggle_modifier == "undefined" ? settings_hotkey_toggle_modifier = "altKey" : false;
typeof settings_hotkey_toggle_key_webmin == "undefined" ? settings_hotkey_toggle_key_webmin = "w" : false;
typeof settings_hotkey_toggle_key_virtualmin == "undefined" ? settings_hotkey_toggle_key_virtualmin = "v" : false;
typeof settings_hotkey_toggle_key_cloudmin == "undefined" ? settings_hotkey_toggle_key_cloudmin = "c" : false;
typeof settings_hotkey_toggle_key_usermin == "undefined" ? settings_hotkey_toggle_key_usermin = "u" : false;
typeof settings_hotkey_toggle_key_webmail == "undefined" ? settings_hotkey_toggle_key_webmail = "m" : false;
typeof settings_hotkey_sysinfo == "undefined" ? settings_hotkey_sysinfo = "i" : false;
typeof settings_hotkey_favorites == "undefined" ? settings_hotkey_favorites = "f" : false;
typeof settings_hotkey_focus_search == "undefined" ? settings_hotkey_focus_search = "s" : false;
typeof settings_hotkey_toggle_slider == "undefined" ? settings_hotkey_toggle_slider = "n" : false;
typeof settings_hotkey_reload == "undefined" ? settings_hotkey_reload = "r" : false;
typeof settings_window_replace_timestamps == "undefined" ? settings_window_replace_timestamps = true : false;
typeof settings_window_replaced_timestamp_format_full == "undefined" ? settings_window_replaced_timestamp_format_full = "LLLL" : false;
typeof settings_window_replaced_timestamp_format_short == "undefined" ? settings_window_replaced_timestamp_format_short = "L, LTS" : false;
typeof settings_hotkey_custom_1 == "undefined" ? settings_hotkey_custom_1 = false : false;
typeof settings_hotkey_custom_2 == "undefined" ? settings_hotkey_custom_2 = false : false;
typeof settings_hotkey_custom_3 == "undefined" ? settings_hotkey_custom_3 = false : false;
typeof settings_hotkey_custom_4 == "undefined" ? settings_hotkey_custom_4 = false : false;
typeof settings_hotkey_custom_5 == "undefined" ? settings_hotkey_custom_5 = false : false;
typeof settings_hotkey_custom_6 == "undefined" ? settings_hotkey_custom_6 = false : false;
typeof settings_hotkey_custom_7 == "undefined" ? settings_hotkey_custom_7 = false : false;
typeof settings_hotkey_custom_8 == "undefined" ? settings_hotkey_custom_8 = false : false;
typeof settings_hotkey_custom_9 == "undefined" ? settings_hotkey_custom_9 = false : false;
typeof settings_right_iconize_header_links == "undefined" ? settings_right_iconize_header_links = true : false;
typeof settings_sysinfo_background_call_timeout == "undefined" ? settings_sysinfo_background_call_timeout = 10 : false;
typeof settings_leftmenu_width == "undefined" ? settings_leftmenu_width = 260 : false;
typeof settings_sysinfo_easypie_charts == "undefined" ? settings_sysinfo_easypie_charts = true : false;
typeof settings_sysinfo_easypie_charts_width == "undefined" ? settings_sysinfo_easypie_charts_width = 4 : (settings_sysinfo_easypie_charts_width = parseInt(settings_sysinfo_easypie_charts_width));
typeof settings_sysinfo_easypie_charts_scale == "undefined" ? settings_sysinfo_easypie_charts_scale = 8 : (settings_sysinfo_easypie_charts_scale = parseInt(settings_sysinfo_easypie_charts_scale));
typeof settings_sysinfo_theme_updates == "undefined" ? settings_sysinfo_theme_updates = false : false;
typeof settings_sysinfo_csf_updates == "undefined" ? settings_sysinfo_csf_updates = false : false;
typeof settings_sysinfo_link_mini == "undefined" ? settings_sysinfo_link_mini = true : false;
typeof settings_loader_top == "undefined" ? settings_loader_top = true : false;
typeof settings_animation_left == "undefined" ? settings_animation_left = true : false;
settings_animation_left ? $settings_animation_left_slide_time = 280 : $settings_animation_left_slide_time = 0;
typeof settings_animation_tabs == "undefined" ? settings_animation_tabs = true : false;
settings_animation_tabs ? $settings_animation_tabs_slide_time = 280 : $settings_animation_tabs_slide_time = 0;
typeof settings_favorites == "undefined" ? settings_favorites = true : false;
try {
    t__wi_p.$
} catch (e) {
    t__wi_p = window
}

function n___p__f(b) {
    var a = t__wi_p.$("#wrapper").data("access-level");
    if (a != "0") {
        return
    }
    if (b) {
        t__wi_p.$("body .right-side-tabs-toggler").addClass("hidden");
        t__wi_p.$("body .right-side-tabs").css("right", "0px").addClass("right-side-tabs-fixed");
        t__wi_p.$("html").attr("data-slider-fixed", "1")
    } else {
        if (settings_notification_slider_enabled) {
            t__wi_p.$("body .right-side-tabs-toggler").removeClass("hidden opened").css("right", "0")
        }
        t__wi_p.$("body .right-side-tabs").css("right", "-302px").removeClass("right-side-tabs-fixed");
        t__wi_p.$("html").attr("data-slider-fixed", "0")
    }
}
if (t__wi_p.$(".mobile-menu-toggler:visible").length) {
    n___p__f(0)
}

function __slm() {
    if (t__wi_p.$("aside").css("transform") == "none") {
        t__wi_p.$("aside").transition({
            x: settings_leftmenu_width
        }, 600, function() {
            if (t__wi_p.$(".__logo") && t__wi_p.$(".__logo").css("transform") == "none" && !t__wi_p.$(".mobile-menu-toggler:visible").length) {
                t__wi_p.$(".__logo").transition({
                    y: "-140px"
                }, 900)
            }
        });
        setTimeout(function() {
            t__wi_p.$(".switch-toggle").css("display", "table")
        }, 1)
    }
}
__slm();

function arrayIntersect(g, d) {
    var f = [];
    $.each(g, function(b, a) {
        if (d.match(new RegExp(a, "gi"))) {
            f.push(a)
        }
    });
    return !$.isEmptyObject(f)
}

function is_module(a) {
    if ($.inArray(a, t__wi_p.$("body").data("available-modules")) > -1) {
        return true
    } else {
        return false
    }
}

function is__m(a) {
    return $('body[class*="' + a + '"]').length
}

function is__f(a) {
    return ($__source_file == a)
}

function is__mf(a, b) {
    return ($('body[class*="' + a + '"]').length && $__source_file == b)
}

function is__mfq(a, c, b) {
    return ($('body[class*="' + a + '"]').length && $__source_file == c && ($__source_query && $__source_query.indexOf(b) !== -1))
}

function lang(a) {
    return t__wi_p.$("body").data("language-strings") ? t__wi_p.$("body").data("language-strings")[a] : false
}

function __lrs(j, g) {
    var h = t__wi_p.document.getElementById("iframe"),
        k = t__wi_p.document.activeElement,
        i = ["export", "export as csv.", "download", "upload"];
    if (k) {
        if (($(k).is("a") && $(k).attr("href") && ($(k).attr("href").indexOf("awstats/view.cgi") > -1 || $(k).attr("href").indexOf("cwaf") > -1))) {
            return
        }
    }
    h ? h = h.contentDocument.activeElement : h = false;
    if (h) {
        if ((t__wi_p.$('iframe[name="page"]').attr("src") !== "/csf/") && (($(h).is("a") && $(h).attr("href") && ($(h).attr("href").indexOf("webminlog.csv") > -1 || $(h).attr("href").indexOf("detach.cgi") > -1 || $(h).attr("href").indexOf("download.cgi") > -1 || ($("body.virtualmin-awstats") && $("body.virtualmin-awstats").length && $(h).attr("href").indexOf("view.cgi?config") > -1))) || ($(h).is("a") && $(h).text() && (arrayIntersect(i, $(h).text()))) || ($(h).is("input") && $(h).val() && (arrayIntersect(i, $(h).val()) || $(h).parents('form[action="create_vpn.cgi"]').length)))) {
            return
        }
    }
    if (t__wi_p.$('iframe[name="page"]').attr("src") && t__wi_p.$('iframe[name="page"]').attr("src").indexOf("cwaf") > -1) {
        return
    }
    typeof j == "undefined" ? j = false : j = true;
    typeof g == "undefined" ? g = 80 : false;
    if (t__wi_p.$___________initial === 1) {
        t__wi_p.$('iframe[name="page"]').animate({
            opacity: 0
        }, g);
        t__wi_p.$(".loader-container").addClass("loading-started");
        if (((t__wi_p.$("aside").css("transform") == "none" || t__wi_p.$("aside").css("transform") != "matrix(1, 0, 0, 1, " + settings_leftmenu_width + ", 0)") && !t__wi_p.$(".btn-menu-toggler").is(":visible"))) {
            t__wi_p.$(".loader-container").css("background-color", "#ededed").css("display", "block")
        } else {
            t__wi_p.setTimeout(function() {
                if (t___wi.parent.$___________right === 0 && t__wi_p.$___________lrs_r_l === 0) {
                    t__wi_p.$___________lrs_r_l = 1;
                    if (t__wi_p.$(".loader-container").hasClass("loading-started")) {
                        if (settings_loader_top && t__wi_p.t___p__xhr_l === 0) {
                            t__wi_p.NProgress.remove();
                            t__wi_p.NProgress.start()
                        }
                        t__wi_p.$(".loader-container").css("background-color", "#ededed").css("display", "block")
                    }
                    t__wi_p.setTimeout(function() {
                        t__wi_p.$(".loader .loader-close").show();
                        t__wi_p.$___________lrs_r_l = 0
                    }, 1500)
                }
            }, 1500)
        }
    } else {
        if (settings_loader_top && t__wi_p.t___p__xhr_l === 0) {
            t__wi_p.NProgress.remove();
            t__wi_p.NProgress.start()
        }
    }
}

function product_name_lang(d) {
    if (t__wi_p.$("#wrapper").data("server-manager") != -1) {
        return lang("theme_xhred_titles_cm")
    } else {
        if (t__wi_p.$("#wrapper").data("virtual-server") != -1) {
            return lang("theme_xhred_titles_vm")
        } else {
            if (t__wi_p.$("#wrapper").data("webmail") != -1 && !d) {
                return lang("theme_xhred_titles_mail")
            } else {
                var c = t__wi_p.$("#wrapper").data("product");
                return (c == "webmin" ? lang("theme_xhred_titles_wm") : lang("theme_xhred_titles_um"))
            }
        }
    }
}

function product_name(d) {
    if (t__wi_p.$("#wrapper").data("server-manager") != -1) {
        return "Cloudmin"
    } else {
        if (t__wi_p.$("#wrapper").data("virtual-server") != -1) {
            return "Virtualmin"
        } else {
            if (t__wi_p.$("#wrapper").data("webmail") != -1 && !d) {
                return "Mail"
            } else {
                var c = t__wi_p.$("#wrapper").data("product");
                return c.charAt(0).toUpperCase() + c.slice(1)
            }
        }
    }
}

function __s___() {
    var f = t__wi_p.$('iframe[name="page"]').get(0);
    if (f && typeof f.contentWindow.$ != "function" || !__num()) {
        return
    }
    var b = false,
        d = false,
        c = false;
    if (f) {
        d = f.contentWindow.$("body");
        b = f.contentWindow.$("body").find(".container-fluid");
        c = f.contentWindow.$("head")
    } else {
        d = $("body");
        b = $("body").find(".container-fluid");
        c = $("head")
    }
    if (b.length) {
        b.animate({
            opacity: 1
        }, 240, function() {
            b.css("pointer-events", "auto");
            d.css("overflow", "auto");
            c.find("#__tmp_no_overflow").remove()
        })
    }
}

function __lre() {
    __s___();
    t__wi_p.$(".loader-container").removeClass("loading-started").css("background-color", "transparent").css("display", "none");
    t__wi_p.$('iframe[name="page"]').animate({
        opacity: 1
    }, 30, function() {});
    if (t__wi_p.$("aside").css("transform") == "none") {
        __slm()
    }
    if (__num()) {
        if (typeof t__wi_p.$('iframe[name="page"]').get(0).contentWindow.__dlm == "function") {
            t__wi_p.$('iframe[name="page"]').get(0).contentWindow.__dlm()
        }
    }
    t__wi_p.$(".loader .loader-close").hide();
    if (settings_loader_top && t__wi_p.t___p__xhr_l === 0 && __num()) {
        t__wi_p.NProgress.done()
    }
    if (typeof hide_mobile_menu == "function") {
        hide_mobile_menu()
    }
}

function ___csf() {
    var v = window,
        r = v.parent,
        w = r.document.getElementById("iframe"),
        n = w.contentDocument.getElementsByTagName("head")[0],
        u = w.contentDocument.createElement("script"),
        k = r.$load____ext;
    u.type = "text/javascript";
    u.src = "/unauthenticated/js/jquery." + k + ".js?1800";
    n.appendChild(u);
    var n = w.contentDocument.getElementsByTagName("head")[0],
        u = w.contentDocument.createElement("script");
    u.src = "/unauthenticated/js/codemirror." + k + ".js?1800";
    n.appendChild(u);
    if (r.$('iframe[name="page"]').contents().find("body.csf").length === 0) {
        w.contentWindow.onbeforeunload = function(a) {
            r.__lrs()
        };
        r.$('a[href="csf/"]').parent("li").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().prev("li").addClass("active");
        $csf = r.$('iframe[name="page"]').contents();
        $csf.find("html").attr("data-background-style", t__wi_p.$("html").attr("data-background-style"));
        $csf.find("head").append('			<link rel="shortcut icon" href="' + $_____link_full + '/images/favicon-webmin.ico">			<meta name="viewport" content="width=device-width, initial-scale=1.0">			<link href="' + $_____link_full + "/unauthenticated/css/bootstrap." + k + '.css?1800" rel="stylesheet" type="text/css">			<link href="' + $_____link_full + "/unauthenticated/css/codemirror." + k + '.css?1800" rel="stylesheet" type="text/css">			<link href="' + $_____link_full + "/unauthenticated/css/authentic." + k + '.css?1800" rel="stylesheet" type="text/css">		');
        $.each(r.$('link[href*="/styles.css"]'), function() {
            if ($(this)) {
                $csf.find("head").append('<link href="' + $_____link_full + '/unauthenticated/css/styles.css" rel="stylesheet" type="text/css">')
            }
        });
        $csf.find('body:not(".mobile-menu-toggler")').on("click", function() {
            r.hide_mobile_menu()
        });
        if (!$csf.find("body").attr("style")) {
            t__wi_p.location.reload();
            return
        }
        typeof t__wi_p.$____csf == "undefined" ? t__wi_p.$____csf = 1100 : t__wi_p.$____csf = 300;
        setTimeout(function() {
            $csf.find("body").animate({
                opacity: 1
            }, 240, function() {
                $csf.find("body").css("pointer-events", "auto")
            })
        }, t__wi_p.$____csf);
        $csf.find('fieldset.csf-box + div.csf-box[align="center"]').css("margin-top", "3px");
        $csf.find("style").remove();
        $csf.find("body").addClass("csf");
        $csf.find("body").wrapInner('<div class="container-fluid col-lg-10 col-lg-offset-1">');
        $csf.find(".container-fluid").wrapInner('<div class="panel panel-default">');
        $csf.find(".panel-default").wrapInner('<div class="panel-body">');
        $csf.find(".panel-default").css("border-color", "#e9e9e9").css("border-top-width", "4px").prepend('<div class="panel-heading" style="text-align:center"><font size="+2">ConfigServer Security & Firewall</font></div>');
        $csf.find(".panel-body > img:first-child, .panel-body > b").remove();
        $csf.find("#CSFajax").css("border", "1px solid #f0f0f0");
        $csf.find("body table").each(function() {
            $(this).addClass("table table-striped table-condensed").removeAttr("style")
        });
        $csf.find("body table tr td, body table tr th").each(function() {
            $(this).removeAttr("style")
        });
        $csf.find("body table tr").each(function() {
            $(this).removeAttr("bgcolor")
        });
        $csf.find(".panel-body > h2:first-child").each(function() {
            $(this).text($(this).text().replace(":", ""))
        });
        $csf.find(".csf table.table-striped.table-condensed th").each(function() {
            if ($(this).html() == "Time To Live") {
                $(this).css("min-width", "100px")
            }
            if ($(this).html() == "&nbsp;") {
                $(this).css("min-width", "70px")
            }
        });

        function p() {
            $csf.find("#CSFajax").css("max-height", $(window).outerHeight() - $(window).outerHeight() / 2.4 + "px");
            container_fluid_size()
        }
        var o;
        $(window).resize(function() {
            clearTimeout(o);
            o = setTimeout(function() {
                p()
            }, 1000)
        });
        p();
        $csf.find(".csf table.table-striped.table-condensed tbody > tr > td > p").each(function() {
            if ($(this).text().indexOf("Your Score") >= 0) {
                $(this).next("p").remove();
                $(this).next("table").remove();
                $(this).next("table").remove();
                $(this).next("p").css("text-align", "center")
            }
        });
        var m = {
            order: [],
            aaSorting: [],
            bDestroy: true,
            bPaginate: false,
            bInfo: false,
            destroy: true,
            oLanguage: {
                sEmptyTable: lang("theme_xhred_datatable_semptytable"),
                sInfo: lang("theme_xhred_datatable_sinfo"),
                sInfoEmpty: lang("theme_xhred_datatable_sinfoempty"),
                sLengthMenu: lang("theme_xhred_datatable_slengthmenu"),
                sLoadingRecords: lang("theme_xhred_datatable_sloadingrecords"),
                sProcessing: lang("theme_xhred_datatable_sprocessing"),
                sSearch: " ",
                sZeroRecords: lang("theme_xhred_datatable_szerorecords")
            }
        };
        if ($csf.find(".csf h2").text().indexOf("Ports listening for external connections and the executables running behind them") !== -1) {
            $csf.find('table:not(:contains("©2006-"))').each(function() {
                if (!$(this).find("thead").length) {
                    var b = $(this),
                        a = $(this).find("tbody tr:first-child");
                    b.attr("style", "width: 100% !important");
                    b.attr("style", "min-width: 100% !important");
                    b.prepend("<thead>" + a.html() + "</thead>");
                    $(this).find("thead td").replaceTagName("th");
                    a.remove();
                    $(this).dataTable(m);
                    $csf.find(".dataTables_filter input").attr("placeholder", "Filter")
                }
            })
        }
        if ($csf.find(".csf .table.table-striped.table-condensed tbody th:eq(1)").text().indexOf("A/D") !== -1 && $csf.find(".csf .table.table-striped.table-condensed tbody th:eq(2)").text().indexOf("IP address") !== -1) {
            $csf.find('table:not(:contains("©2006-"))').each(function() {
                if (!$(this).find("thead").length) {
                    var b = $(this),
                        a = $(this).find("tbody tr:first-child");
                    b.prepend("<thead>" + a.html() + "</thead>");
                    a.remove();
                    $(this).dataTable(m);
                    b.find('img[src^="csfimages/"]').each(function() {
                        $(this).attr("src", $(this).attr("src").replace("/csfimages/", "csfimages/"))
                    });
                    $csf.find(".dataTables_filter input").attr("placeholder", "Filter")
                }
            })
        }
        $csf.find(".csf td.section-gap:first-child").each(function() {
            $(this).parent("tr:first-child").remove();
            $(this).parent("tr:last-child").remove()
        });
        $csf.find(".csf td.section-title").each(function() {
            $(this).parent("tr").prev("tr").find("td.section-gap").parent("tr").remove();
            $(this).parent("tr").prev("tr").find("td.section-gap").parent("tr").remove()
        });
        $csf.find('.csf input[type="text"]').each(function() {
            if ($(this).attr("id") == "allowip") {
                $(this).removeAttr("style").attr("style", "border-color: #8cac8c; background-color: #93b893;")
            }
            if ($(this).attr("style") == "background-color: pink") {
                $(this).removeAttr("style").attr("style", "color: #fff; border-color: #d4a09f; background-color: #e0a9a8;")
            }
            if ($(this).attr("id") == "ignoreip") {
                $(this).removeAttr("style").attr("style", "border-color: #b3dae5; background-color: #bfd9e1;")
            }
        });
        $csf.find("body table tr th").each(function() {
            if (!$(this).parents("tbody").find("form").length && $(this).text().indexOf("Upgrade") >= 0) {
                $(this).parents("table").prev("br").remove();
                $(this).parents("table").remove()
            }
        });
        $csf.find('a[href$="/csf/changelog.txt"]').addClass("btn btn-xs btn-default").attr("style", "padding:0 12px; height:19px;font-size:11px").text("View changelog");
        var l = $csf.find('table:contains("©2006-")').find("tr").find('*:contains("csf:")').text().match(/((?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+))$/)[0];
        $csf.find(".csf .panel-heading font").each(function() {
            if ($(this).text().indexOf("ConfigServer Security & Firewall") >= 0) {
                $(this).html('<font size="+2">Firewall</font><span style="font-size:14px;display:block">ConfigServer Security & Firewall version ' + l + "</span>")
            }
        });
        $csf.find('table > tbody > tr:first-child > th:first-child, table[align="center"] > tbody > tr:first-child').each(function() {
            $(this).css("border-top", "3px solid #f0f0f0")
        });
        $csf.find('table[align="center"] > tbody > tr > td.section-title').each(function() {
            $(this).parent("tr").css("border-top", "3px solid #f0f0f0")
        });
        typeof settings_allowed_hostname == "undefined" ? settings_allowed_hostname = true : false;
        if ($hostname == settings_allowed_hostname) {
            $csf.find('table:contains("Development Contribution")').prev("br").remove();
            $csf.find('table:contains("Development Contribution")').parents(".dataTables_wrapper").remove();
            $csf.find('table:contains("Development Contribution")').remove();
            $csf.find('table:contains("©2006-")').prev("br").remove();
            $csf.find('table:contains("©2006-")').parents(".dataTables_wrapper").remove();
            $csf.find('table:contains("©2006-")').remove()
        } else {
            $csf.find('table:contains("©2006-")').removeClass("table-striped").css("border-color", "transparent").find("tr td").addClass("text-right").css("border-color", "#eaeaea").parent().parent("tbody").find("tr:first-child").remove()
        }
        var v = -Infinity;
        $csf.find("table").find("tr").each(function(a, b) {
            v = Math.max(v, parseFloat(a))
        });
        if (v < 10) {
            $csf.find("table").parents(".dataTables_wrapper").find(".dataTables_filter").remove()
        }
        $csf.find('big:contains("iptables logs")').parent("p").next().next().next(".table.table-striped.table-condensed").find("tbody tr:nth-child(2) td:first-child").css("min-width", "200px");
        if ($csf.find('.csf select[name="dur"]')[0]) {
            var q = $csf.find('.csf select[name="dur"]')[0].nextSibling;
            if (q.nodeValue == ".") {
                $(q).remove()
            }
        }
        $csf.find('.csf select:not([name="do"], [name="dur"]), .csf input:not([name="comment"], [name="ip"], [name="ports"], [name="timeout"], [aria-controls*="DataTables_Table_"])').each(function() {
            $(this).addClass("heighter-34")
        });
        $csf.find(".csf #paginatediv2.paginationstyle > select").each(function() {
            $(this).attr("style", "vertical-align: baseline !important")
        });
        $csf.find(".csf #paginatediv2 > a").each(function() {
            $(this).attr("style", "vertical-align: baseline !important")
        });
        $csf.find(".csf p > select").each(function() {
            $(this).attr("style", "vertical-align: baseline !important")
        });
        $csf.find('img[src="csfimages/loader.gif"]').each(function() {
            $(this).attr("src", "" + $_____link_full + "/images/loader-horizontal.gif").css("margin-left", "10px")
        });
        $csf.find(".paginationstyle a").each(function() {
            $(this).addClass("btn btn-default")
        });
        $csf.find('img[src^="lfd_"], img[src^="/csf/lfd_"]').each(function() {
            $(this).parents("table").removeClass("table-striped")
        });
        $csf.find('img[src^="csfimages/delete.png"]').each(function() {
            $(this).replaceWith('<i class="fa fa-unlock text-success" style="font-size: 1.1em; vertical-align: middle;"></i>')
        });
        $csf.find('img[src^="csfimages/perm.png"]').each(function() {
            $(this).replaceWith('<i class="fa fa-lock text-danger" style="font-size: 1.1em; vertical-align: middle;"></i>')
        });
        $csf.find('img[src^="csfimages/plus.png"]').each(function() {
            $(this).addClass("hidden");
            $(this).after('<i class="fa fa-plus-circle text-success margined-right-2" style="font-size: 1.1em; vertical-align: text-bottom;"></i>')
        });
        $csf.find('img[src^="csfimages/minus.png"]').each(function() {
            $(this).addClass("hidden");
            $(this).after('<i class="fa fa-minus-circle text-danger margined-right-2" style="font-size: 1.1em; vertical-align: text-bottom;"></i>')
        });
        $csf.find(".csf fieldset legend b").each(function() {
            if ($(this).text().indexOf("Edit ConfigServer Firewall") >= 0) {
                $submit_changes = $csf.find('input[value="Change"]');
                $submit_changes.addClass("csf-submit_changes");
                $submit_changes.on("click", function() {
                    $csf.find('input[value="saveconf"]').parent("form").submit()
                })
            }
        });
        if ($csf.find("#CSFgrep_D").length && $csf.find("#CSFgrep_E").length && $csf.find("#CSFgrep_i").length) {
            $csf.find('select, input[type="text"], button[onclick="CSFgrep()"]').removeClass("heighter-34").addClass("heighter-28");
            $csf.find("#CSFgrep_i, #CSFgrep_E, #CSFgrep_D").attr("style", "vertical-align: middle; margin-right: 4px;");
            $csf.find("#CSFajax").css("margin-bottom", "4px");
            $csf.find("#CSFlognum").attr("onchange", "javascript: document.getElementsByTagName('button')[0].click()");
            $csf.find("#CSFgrep_D").addClass("hidden");
            $csf.find(".csf-box").replaceText(/Detach/gi, "");
            $csf.find("li:contains('Use the \"Detach\" option to display the search results in a separate window')").remove()
        }
        $csf.find("#CSFajax.csf-box").addClass("csf_force_log_size");

        function t() {
            $csf.find('textarea[name="formdata"]').each(function(c, d) {
                var a = $(this);
                $parent_width = a.parent("td").width();
                var b = r.$('iframe[name="page"]').get(0).contentWindow.CodeMirror.fromTextArea(d, {
                    mode: {
                        name: "rpm-spec"
                    },
                    matchBrackets: true,
                    lineNumbers: true,
                    keyMap: "sublime",
                    highlightSelectionMatches: {
                        showToken: /\w/,
                        annotateScrollbar: true
                    },
                    indentUnit: 0,
                    autofocus: true,
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    extraKeys: {
                        "Ctrl-Space": "autocomplete"
                    },
                    styleActiveLine: true,
                    lineWrapping: true,
                    theme: t__wi_p.settings_cm_editor_palette
                });
                $window_height = ($(window).outerHeight() - ($(window).outerHeight() / 2));
                b.setSize($parent_width, $window_height);
                $(window).resize(function() {
                    $parent_width = a.parent("td").width();
                    $window_height = ($(window).outerHeight() - ($(window).outerHeight() / 2));
                    b.setSize($parent_width, $window_height)
                })
            })
        }
        setTimeout(function() {
            if (typeof r.$('iframe[name="page"]').get(0).contentWindow.CodeMirror == "function") {
                t()
            } else {
                setTimeout(function() {
                    if (typeof r.$('iframe[name="page"]').get(0).contentWindow.CodeMirror == "function") {
                        t()
                    } else {
                        setTimeout(function() {
                            t()
                        }, 10)
                    }
                }, 140)
            }
        }, 50);
        $("#iframe").contents().find("body").on("keydown", function(a) {
            r.search_control(a);
            r.shortcut_control(a)
        });
        if (r.$("#open_webmin").length > 0 && r.$(".switch-toggle input:checked").attr("id") != "open_webmin" && t__wi_p.$("body").data("dashboard") == "1") {
            r.t__s("open_webmin")
        }
        r.__dlm("csf/");
        if (r.$___________initial === 1) {
            setTimeout(function() {
                r.__lre()
            }, t__wi_p.$____csf)
        } else {
            setTimeout(function() {
                r.__lre()
            }, t__wi_p.$____csf)
        }
        setTimeout(function() {
            if (!r.$('ul.sub li.sub_active a[target="page"][href="csf/"]').length) {
                r.__dlm("csf/")
            }
        }, 200)
    }
}

function f__r__s(b, a) {
    if (typeof $.injectCSS == "function") {
        t__wi_p.$("#injected-css").remove();
        a ? (a = "translate(" + a + "px, 0px) !important") : (a = false);
        $.injectCSS({
            "#sidebar": {
                left: -b + "px",
                width: b + "px",
                transform: a
            },
            ".switch-toggle": {
                width: b + "px"
            },
            "#content.__page": {
                "margin-left": b + "px"
            },
            ".autocomplete-suggestions": {
                "min-width": (b - 23) + "px !important"
            },
            ".__logo": {
                width: b + "px",
                "max-width": b + "px"
            }
        });
        if (t__wi_p.$("aside select").length) {
            t__wi_p.$("aside select[data-autocomplete-title]").attr("style", "width:" + (b - 24) + "px; margin-top: 0 !important");
            t__wi_p.t_sel_i()
        }
    }
}

function f__c_view() {
    if (typeof t__wi_p.settings_leftmenu_width_initial == "undefined") {
        t__wi_p.settings_leftmenu_width_initial = t__wi_p.settings_leftmenu_width
    }
    if (t__wi_p.matchMedia("(max-width: 767px)").matches) {
        t__wi_p.settings_leftmenu_width = 260;
        t__wi_p.f__r__s(t__wi_p.settings_leftmenu_width, 0)
    } else {
        if (t__wi_p.$___________initial === 1) {
            return
        }
        t__wi_p.settings_leftmenu_width = t__wi_p.settings_leftmenu_width_initial;
        t__wi_p.f__r__s(t__wi_p.settings_leftmenu_width, t__wi_p.settings_leftmenu_width)
    }
}

function s(d) {
    var g = document.getElementsByTagName("head")[0];
    var f = document.createElement("script");
    f.type = "text/javascript";
    f.src = d;
    g.appendChild(f)
}
t__wi_p.$('iframe[name="page"]').unbind("load");
t__wi_p.$('iframe[name="page"]').on("load", function() {
    if (t__wi_p.$___________initial === 1) {
        __mss()
    }
    var c = t__wi_p.$('iframe[name="page"]').contents();
    if (c && c.find('iframe[name="page"]').length) {
        console.log("Error! Entered fail state.. Authentic Theme is reloading...");
        t___wi.top.location.reload();
        return
    }
    var d = false;
    if (c && c.find("title").text() && c.find("title").text().indexOf("ConfigServer Security & Firewall") > -1) {
        d = true
    }
    if (__num() && !d) {
        t__wi_p.__lre()
    }
    if ($("body").find(".form-signin-banner").length === 1 || $("body").find('form[action*="session_login"]').length === 1) {
        t__wi_p.location = t___wi.location.origin
    }
    ____iframe___ = t__wi_p.$("#iframe")[0];
    ____iframe___ && ____iframe___.contentWindow.focus();
    $("body").on("shown.bs.modal", ".modal.in", function() {
        $(this).focus()
    });
    setTimeout(function() {
        if (typeof t__m__m != "undefined" && typeof t__m__m == "function") {
            t__m__m(false, true)
        }
        t__wi_p.$___________m_locked = 0
    }, 200);
    setTimeout(function() {
        t__wi_p.$___________initial = 0
    }, 1000);
    $("body").find('a[href*="virtual-server/switch_user.cgi"]').attr("target", "_parent");
    if (c && !c.text().match(/___authentic_theme_footer___/)) {
        if (d) {
            t__wi_p.___csf();
            return
        }
        __lre();
        s("/unauthenticated/js/authentic.min.js?1800")
    }
    if (settings_loader_top && t__wi_p.t___p__xhr_l === 0 && __num()) {
        t__wi_p.NProgress.done()
    }
    if (typeof t__wi_p.__dpt == "function") {
        t__wi_p.__dpt()
    }
    $("body").unbind("mousewheel");
    !t__wi_p.$___________initial && __lre();
    delete __________was_runner___;
    t___wi.parent.$___________right = 1;
    $(function() {
        if (t__wi_p.location.search == "?theme-update-finished" || $("#wrapper").data("notice") == 1) {
            t__wi_p.$('.right-side-tabs-notification[data-type="authentic_remote_version"]').find("i.af-clear-all").trigger("click");
            $("#update_notice").modal("show");
            __s___()
        }
        var a = $("select[multiple]:visible"),
            b = a.length - 1;
        if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
            $.each(a, function(h, g) {
                setTimeout(function() {
                    $(g).focus();
                    if (b === h) {
                        $(g).blur()
                    }
                }, 20 + (h * 20))
            })
        }
    })
});
$(function() {
    if ($("html.session_login").length) {
        $("body").attr("style", $("body").data("style"));
        if (t__wi_p.$("aside").length) {
            t__wi_p.location.href = "/"
        }
        $("form").on("click", 'button[type="submit"]', function(b) {
            b.preventDefault();
            $(this).prop("disabled", "true").removeClass("btn-primary").addClass("btn-default").find(".fa-sign-in").removeClass("fa-sign-in").addClass("fa fa-circle-o-notch faa-spin faa-slow animated");
            $(this).parents("form").submit()
        })
    }
    if (t___wi.location == t__wi_p.location && window.matchMedia("(max-width: 767px)").matches) {
        f__c_view()
    }
    if (typeof $access_level != "undefined" && $access_level != 0) {
        settings_right_virtualmin_default = "sysinfo.cgi";
        settings_right_cloudmin_default = "sysinfo.cgi"
    }
    $___________ready = 1
});

function __num() {
    var d = $.url(t___wi.location),
        c = d.attr("path");
    if ((c && c.indexOf("/webmin/edit_themes.cgi") > -1 && t__wi_p.location.search == "?updating-webmin-theme") || (c && c.indexOf("/webmin/edit_themes.cgi") > -1 && t__wi_p.location.search == "?downloading-webmin-theme") || (c && c.indexOf("/webmin/install_theme.cgi") > -1 && t__wi_p.location.search == "?downloading-webmin-theme") || (c && c.indexOf("/webmin/install_theme.cgi") > -1 && t__wi_p.location.search == "?updating-usermin-theme") || (c && c.indexOf("/usermin/edit_themes.cgi") > -1 && t__wi_p.location.search == "?updating-usermin-theme") || (c && c.indexOf("/usermin/edit_themes.cgi") > -1 && t__wi_p.location.search == "?downloading-usermin-theme") || (c && c.indexOf("/usermin/install_theme.cgi") > -1 && t__wi_p.location.search == "?downloading-usermin-theme") || (c && c.indexOf("/webmin/install_theme.cgi") > -1 && t__wi_p.location.search == "?theme-update-finished") || (c && c.indexOf("/webmin/edit_webmincron.cgi") > -1 && (t__wi_p.location.search == "?recollect" || t__wi_p.location.search == "?recollecting" || t__wi_p.location.search == "?recollect-system-status" || t__wi_p.location.search == "?recollect" || t__wi_p.location.search == "?recollecting-system-status")) || (c && c.indexOf("/webmin/delete_webmincron.cgi") > -1 && (t__wi_p.location.search == "?recollecting-system-status" || t__wi_p.location.search == "?recollect-system-status" || t__wi_p.location.search == "?recollect-finished" || t__wi_p.location.search == "?recollecting-finished" || t__wi_p.location.search == "?recollecting-package-updates")) || (c && c.indexOf("/package-updates/index.cgi") > -1 && (t__wi_p.location.search == "?recollect" || t__wi_p.location.search == "?recollecting" || t__wi_p.location.search == "?recollecting-package-updates" || t__wi_p.location.search == "?recollecting-package-updates-processing")) || (c && c.indexOf("/package-updates/update.cgi") > -1 && (t__wi_p.location.search == "?recollect" || t__wi_p.location.search == "?recollecting" || t__wi_p.location.search == "?recollecting-package-updates" || t__wi_p.location.search == "?recollecting-package-updates-processing" || t__wi_p.location.search == "?recollecting-finished"))) {
        return false
    } else {
        return true
    }
}
var $__was = function() {
    var d = $.url(t___wi.location),
        c = d.attr("path");
    if (c && c.indexOf("/webmin_search.cgi") > -1 || c.indexOf("/virtual-server/import.cgi") > -1 || c.indexOf("/virtual-server/domain_setup.cgi") > -1 || c.indexOf("/virtual-server/mass_create.cgi") > -1 || c.indexOf("/virtual-server/restore.cgi") > -1 || c.indexOf("/virtual-server/mass_domains_change.cgi") > -1 || c.indexOf("/virtual-server/save_domain.cgi") > -1 || c.indexOf("/virtual-server/save_phpmode.cgi") > -1 || c.indexOf("/virtual-server/migrate.cgi") > -1 || c.indexOf("/virtual-server/mass_delete_domains.cgi") > -1 || c.indexOf("/virtual-server/delete_domain.cgi") > -1 || c.indexOf("/virtual-server/clone.cgi") > -1 || c.indexOf("/virtual-server/disable_domain.cgi") > -1 || c.indexOf("/virtual-server/edit_newlinks.cgi") > -1 || c.indexOf("/virtual-server/move.cgi") > -1 || c.indexOf("/virtual-server/enable_domain.cgi") > -1 || c.indexOf("/virtual-server/transfer.cgi") > -1 || c.indexOf("/virtual-server/rename.cgi") > -1 || c.indexOf("/virtual-server/check.cgi") > -1 || c.indexOf("/virtual-server/postsave.cgi") > -1 || c.indexOf("/virtual-server/unalias.cgi") > -1 || c.indexOf("/virtual-server/unsub.cgi") > -1 || c.indexOf("/virtual-server/validate.cgi") > -1 || c.indexOf("/virtual-server/backup.cgi") > -1 || c.indexOf("/virtual-server/script_install.cgi") > -1 || c.indexOf("/server-manager/backup.cgi") > -1 || c.indexOf("/server-manager/edit_serv.cgi") > -1 || c.indexOf("/server-manager/save_serv.cgi") > -1 || c.indexOf("/server-manager/mass.cgi") > -1 || c.indexOf("/server-manager/index.cgi") > -1 || c.indexOf("/server-manager/save_limits.cgi") > -1 || c.indexOf("/server-manager/save_pass.cgi") > -1 || c.indexOf("/server-manager/list_ifaces.cgi") > -1 || c.indexOf("/server-manager/mass_update.cgi") > -1 || c.indexOf("/server-manager/get_images.cgi") > -1 || c.indexOf("/server-manager/boot.cgi") > -1 || c.indexOf("/server-manager/save_ec2address.cgi") > -1 || c.indexOf("/server-manager/mass_move.cgi") > -1 || c.indexOf("/server-manager/edit_newlinks.cgi") > -1 || c.indexOf("/server-manager/move.cgi") > -1 || c.indexOf("/server-manager/list_gces.cgi") > -1 || c.indexOf("/server-manager/list_ec2s.cgi") > -1 || c.indexOf("/server-manager/failover.cgi") > -1 || c.indexOf("/server-manager/reset.cgi") > -1 || c.indexOf("/server-manager/unpause.cgi") > -1 || c.indexOf("/server-manager/find.cgi") > -1 || c.indexOf("/server-manager/pause.cgi") > -1) {
        $("html").data("data-pagescroll", true)
    }
    if (($("pre") && $("pre").length > 0 && $("pre").length <= 2) || $("html").data("data-pagescroll") === true) {
        if (__num()) {
            __s___()
        }
        $("body").bind("mousewheel", function() {
            return false
        });
        __________was_runner___ = t___wi.onbeforeunload = function(b) {
            return lang("theme_xhred_server_process_running")
        };
        t___wi.clearInterval($__was_runner);
        refresh = function() {
            $("body, html").animate({
                scrollTop: $(document).height()
            }, 400)
        };
        refresher = t___wi.setInterval(refresh, 401)
    }
};
if (t___wi.location == t__wi_p.location) {
    t__wi_p.f__r__s(settings_leftmenu_width, 0);
    t__wi_p.f__c_view()
} else {
    $("head").append('<style id="__tmp_no_overflow">body {overflow: hidden}</style>')
}
$("html").on("dblclick", "body", function() {
    if ($(this).find(".container-fluid").css("opacity") != 1) {
        __s___()
    }
});
if (settings_window_autoscroll && t___wi.location != t__wi_p.location) {
    $__was_runner = t___wi.setInterval($__was, 201)
};
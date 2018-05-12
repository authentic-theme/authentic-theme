/*!
 * Authentic Theme (https://github.com/qooob/authentic-theme)
 * Copyright Ilia Rostovtsev <programming@rostovtsev.ru>
 * Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
 */

/* jshint esversion: 6 */
/* jshint jquery: true */

// Mail module
const mail = (function() {
  let

    // Import globals
    _g = {
      load: load,
      load_content: get_pjax_content,
      link: v___location_origin + v___location_prefix + '/mailbox/index.cgi?id=',
      lang: {
        noRecords: theme_language('theme_xhred_datatable_szerorecords')
      },
      path: {
        extensions: v___server_extensions_path,
        css: v___server_css_path,
        js: v___server_js_path
      },
      var: {
        mail: function() {
          return $t_uri_webmail
        }
      }
    };

  // Folders sub-module ;;
  const folders = (function() {
    let

      // Define data
      data = {
        files: {
          fancytree: 'jquery.fancytree'
        },
        selectors: {
          navigation: 'aside .navigation',
          folders: 'data-mail-folders'
        },
      };

    // Get folders data
    function get(key) {
      key = key ? ('?key=' + key.replace(/&/g, '%26')) : String();

      $.post(_g.path.extensions + "/mail/folders.cgi" + key + "", function(source) {
        if (!!key) {
          tree.reload(source)
        } else {
          tree.init(source)
        }
      });
    }

    // Adjust folders into view
    function adjust() {
      tree.adjust();
    }

    // Tree object literal
    let tree = {
      container: '[' + data.selectors.folders + ']',
      init: function(source) {

        // Load dependencies
        if (typeof $.ui !== 'object') {
          this.load();
          return;
        }

        // Insert tree container
        if ($(data.selectors.navigation + ' ' + this.container).length === 0) {
          $(data.selectors.navigation).prepend('<div ' + data.selectors.folders + '></div>');
        } else {
          return;
        }

        // Instantiate tree
        $(this.container).fancytree({
          source: source,
          escapeTitles: false,
          autoActivate: false,
          autoScroll: true,
          keyboard: false,
          toggleEffect: false,
          init: (e, d) => {},
          activate: (e, d) => {
            this.adjust();
            this.expand(d.node);
            _g.load_content(_g.link + encodeURIComponent(d.node.key));
          }
        });

        // Make the container scrollable
        $(this.container).mCustomScrollbar({
          axis: "xy",
          theme: "minimal",
          keyboard: false,
          scrollInertia: 300,
          scrollButtons: true,
          autoHideScrollbar: false,
        });
      },
      expand: function(node) {
        let expanded = node.isExpanded();
        !expanded && node.toggleExpanded();
      },
      load: function() {
        _g.load.bundle(_g.path.js + "/" + data.files.fancytree,
          _g.path.css + "/" + data.files.fancytree,
          (_g.var.mail() ? [get] : 0), 1
        );
      },
      reload: function(source) {
        let tree = $(this.container).fancytree("getTree");
        tree.$container.empty();
        tree.reload(source);
        setTimeout(() => {
          this.adjust();
          this.expand(this.get_active_node());
        }, 1e2);
      },
      adjust: function() {
        let $_ = this.get_active_node();
        if ($_ && $_.li && $($_.li).length) {
          $(this.container).mCustomScrollbar("scrollTo", $($_.li), {
            scrollOffset: [$(this.container), 3, 4]
          })
        }
      },
      get_active_node: function() {
        return $(this.container).fancytree("getActiveNode");
      }
    }

    // Reveal sub-modules ;;
    return {
      get: get,
      adjust: adjust
    }
  })()

  // Reveal modules (API) ;;
  return {
    folders: {
      get: folders.get,
      adjust: folders.adjust
    }
  }
})();

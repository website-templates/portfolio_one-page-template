
/*
 * navigation script: sticky nav, anchor smooth scrolling, selecting current nav item
 */

(function() {
  (function($, window, document) {
    var NavKit, defaults;
    defaults = {
      navAnchor: 'js-anchor',
      navLink: 'js-link',
      navIcon: 'js-navcontrol',
      navClosed: 'is-closed',
      activeLink: 'is-selected',
      state: 'closed'
    };
    NavKit = function(element, options) {
      this.options = $.extend({}, defaults, options);
      this.element = element;
      this.init();
    };
    NavKit.prototype.init = function() {
      var $navAnchor, $navIcon, $navLink, $this, aArray, ahref, cond, headerHeight, i, link, navHeight;
      $this = $(this.element);
      $navAnchor = $('.' + this.options.navAnchor);
      $navLink = $('.' + this.options.navLink);
      $navIcon = $('.' + this.options.navIcon);
      cond = this.options.state;
      navHeight = $this.show().height();
      headerHeight = $this.show().outerHeight(true);
      aArray = [];
      i = void 0;
      if (!cond || cond === 'closed') {
        $this.show().toggleClass(this.options.navClosed);
        $navIcon.show().addClass(this.options.navClosed);
      } else {
        $navIcon.show();
      }
      $navIcon.on('click', $.proxy((function(e) {
        e.preventDefault();
        $this.add($navIcon).toggleClass(this.options.navClosed);
      }), this));
      $navAnchor.on('click', function() {
        var target;
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - navHeight
            }, 1000);
            return false;
          }
        }
      });
      i = 0;
      while (i < $navLink.length) {
        link = $navLink[i];
        ahref = $(link).attr('href');
        aArray.push(ahref);
        i += 1;
      }
      $(window).on('scroll', $.proxy((function() {
        var $firstSection, docHeight, sectHeight, sectPos, theID, windowHeight, windowPos;
        windowPos = $(window).scrollTop();
        windowHeight = $(window).height();
        docHeight = $(document).height();
        $firstSection = $('section').eq(0);
        i = 0;
        while (i < aArray.length) {
          theID = aArray[i];
          sectPos = $(theID).offset().top - headerHeight;
          sectHeight = $(theID).height();
          if (windowPos >= sectPos && windowPos < sectPos + sectHeight) {
            $navLink.filter('[href=\'' + theID + '\']').addClass(this.options.activeLink);
          } else {
            $navLink.filter('[href=\'' + theID + '\']').removeClass(this.options.activeLink);
          }
          i += 1;
        }
        if (windowPos + windowHeight === docHeight) {
          if (!$this.find('li').filter(':last-child').find($navLink).hasClass(this.options.activeLink)) {
            $navLink.filter('.' + this.options.activeLink).removeClass(this.options.activeLink);
            $this.find('li').filter(':last-child').find($navLink).addClass(this.options.activeLink);
          }
        }
        if (windowPos < $firstSection.offset().top) {
          if (!$this.find('li').filter(':first-child').find($navLink).hasClass(this.options.activeLink)) {
            $navLink.filter('.' + this.options.activeLink).removeClass(this.options.activeLink);
            $this.find('li').filter(':first-child').find($navLink).addClass(this.options.activeLink);
          }
        }
      }), this));
    };
    $.fn.navKit = function(options) {
      return this.each(function() {
        new NavKit(this, options);
      });
    };
  })(jQuery, window, document);

}).call(this);

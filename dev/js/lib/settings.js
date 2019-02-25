(function() {
  $(function() {

    /* jQuery navKit plugin init and settings
    *
    * navAnchor: "js-anchor"       anchor class name link for smooth scrolling
    * navLink: "js-link"           link class name for hightlight on current section
    * navIcon: "js-navcontrol"     icon class name for toggling navbar
    * iconOpen: "is-opened"        class name of "cross" icon, when navbar is open
    * iconClosed: "is-closed"      class name of "hamburger" icon, when navbar is closed
    * activeLink: "is-selected"    class name of active and highlighted link
    * state: "closed"              default state of navbar
     */
    $('.js-nav').navKit({
      state: 'closed'
    });
  });

}).call(this);

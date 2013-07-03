;(function ( $, window, document, undefined ) {

  var pluginName = "equalHeight",
  defaults = {
    columnsSelector: '.columns',
    breakPoint: 767
  };

  function Plugin( element, options ) {
    this.element = element;

    this.options = $.extend( {}, defaults, options );

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Plugin.prototype = {

    init: function() {

      var that = this;

      $(window).on('load resize', function() {
        that.resetHeight(that.element, that.options);
        var maxHeight = that.maxHeight(that.element, that.options);

        if ( $(window).width() > that.options.breakPoint ) {
          $(that.element).find(that.options.columnsSelector).height(maxHeight);

        } else {

          that.resetHeight(that.element, that.options);
        }
      });

    },

    maxHeight: function(el, options) {
      var maxHeight = 0;
      $(el).find(options.columnsSelector).each(function(){
        if ( $(this).height() > maxHeight ) {
          maxHeight = $(this).height();
        }
      });
      return maxHeight;
    },

    resetHeight: function(el, options) {
      $(el).find(options.columnsSelector).height('auto');
    }
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
      }
    });
  };

})( jQuery, window, document );

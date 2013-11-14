;(function($, window, document, undefined) {

  $.widget("cabana.equalHeightColumns", {

    options: {
      columnsSelector: '.columns',
      breakpoint: 767
    },

    _create: function () {
      var _this = this;

      _this._applyDataParams();

      $(window).on('load resize', function() {
        _this._render();
      });
    },

    _applyDataParams: function() {
      this._applyDataParam('breakpoint', 'equal-height-breakpoint');
      this._applyDataParam('columnsSelector', 'equal-height-column-selector');
    },

    _applyDataParam: function(optionToSet, dataParam) {
      if ($(this.element).data(dataParam)) {
        this.options[optionToSet] = $(this.element).data(dataParam);
      }
    },

    _maxHeight: function() {
      var maxHeight = 0;
      $(this.element).find(this.options.columnsSelector).each(function(){
        if ( $(this).height() > maxHeight ) {
          maxHeight = $(this).height();
        }
      });
      return maxHeight;
    },

    _resetHeight: function() {
      $(this.element).find(this.options.columnsSelector).height('auto');
    },

    _render: function() {
      var maxHeight = this._maxHeight();

      if ( $(window).width() > this.options.breakpoint ) {
        $(this.element).find(this.options.columnsSelector).height(maxHeight);
      } else {
        this._resetHeight();
      }
    },

    _destroy: function () {
      $(this.element).find(this.options.columnsSelector).each(function(){
        $(this).attr('style', '');
        $(window).off('load resize');
      });
    },

    _setOption: function (key, value) {
      this.options[ key ] = value;

      this._super( "_setOption", key, value );

      this._render();
    }

  });

})(jQuery, window, document);

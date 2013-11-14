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
        _this._resetHeight();
        var maxHeight = _this._maxHeight();

        if ( $(window).width() > _this.options.breakpoint ) {
          $(_this.element).find(_this.options.columnsSelector).height(maxHeight);

        } else {

          _this._resetHeight();
        }
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

    _destroy: function () {
      $(this.element).find(this.options.columnsSelector).each(function(){
        console.log("value");
        $(this).css('');
      });
    },

    _render: function () {
    }

  });

})(jQuery, window, document);

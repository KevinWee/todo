
(function(window){
  const _defaults = {
    instructionsPullToRefresh: 'pull to refresh', // text
    instructionsReleaseToRefresh: 'Release to refresh', //text
    instructionsRefreshing: 'refreshing', // text
    instructionsRefreshed: 'refreshed', // text
    threshold: 60, // minimum distance required to trigger the refresh.
    onPull: () => location.reload()
  };
  let	_pullLengh = 0;
  let	_startLength = 0;
  let _ptrEle = '';
  let _ptrTextEle = '';
  let _element = '';
  let _instructionsRefreshed = '';
  let pullToRefresh = {
    init: function(cfg){
      Object.keys(_defaults).forEach((key) => {
        cfg[key] = cfg[key] || _defaults[key];
      });
      _element = document.querySelector(cfg.targetElement);
      _ptrEle = document.querySelector(cfg.ptrElement);
      _ptrTextEle = document.querySelector(cfg.ptrTextElement);

      // init style
      _element.style.position = 'relative';
      _ptrEle.style.position = 'absolute';
      _ptrTextEle.innerText = cfg.instructionsPullToRefresh;
      _instructionsRefreshed = cfg.instructionsRefreshed;

      // blind event
      _element.addEventListener('touchstart', function(event) {
        _startLength = event.touches[0].pageY;
        // _element.removeAttribute('style');
        _element.style['transition'] = 'transform 0s';
        // 'pull to refresh'
        _ptrTextEle.innerText = cfg.instructionsPullToRefresh;
      });
      _element.addEventListener('touchmove', function(event) {
        _pullLengh = event.touches[0].pageY - _startLength;
        if(_pullLengh > 0){
          if(_pullLengh <= _ptrEle.offsetHeight){
            _element.style['transform'] = 'translate(0, ' + _pullLengh + 'px)';
            if(_pullLengh > cfg.threshold){
              // 'release to fresh'
              _ptrTextEle.innerText = cfg.instructionsReleaseToRefresh;
            }
          }
        }
      });
      _element.addEventListener('touchend', function() {
        if(_pullLengh > cfg.threshold){
          // 'refreshing'
          _ptrTextEle.innerText = cfg.instructionsRefreshing;
          cfg.onPull();
        }else{
          _element.style['transition'] = 'transform 0.6s ease';
          _element.style['transform'] = 'translate(0, 0px)';
        }
        _pullLengh = 0;
      });
      cfg.onPull();
    },
    end : function(){
      _ptrTextEle.innerText = _instructionsRefreshed;
      _element.style['transition'] = 'transform 0.6s ease';
      _element.style['transform'] = 'translate(0, 0px)';
    }
  };

  window.pullToRefresh = pullToRefresh;
})(window);

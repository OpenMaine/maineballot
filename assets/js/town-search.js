(function($) {
  function icontains(elem, text) {
    return (elem.textContent || '')
      .toLowerCase()
      .indexOf((text || '').toLowerCase()) > -1;
  }

  $.expr.pseudos.icontains = $.expr.createPseudo(function(text) {
    return function(elem) {
      return icontains(elem, text);
    };
  })
})(jQuery);

$(document).ready(function() {
  function sendSearchEvent(searchStr) {
    window.dataLayer.push(
      {'event': 'search-str-update', 'searchStr': searchStr }
    );
  }

  // Only call sendSearchEvent once the user has stopped typing for
  // at least SEARCH_EVENT_DEBOUNCE_INTERVAL milliseconds, and then
  // only if the value has changed since the last time sendSearchEvent
  // was called.
  var SEARCH_EVENT_DEBOUNCE_INTERVAL = 1000;
  var timeoutId;
  var lastEvent = { value: null }
  function debounceSendSearchEvent(searchStr) {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }
    if (searchStr && searchStr !== lastEvent.value) {
      timeoutId = window.setTimeout(function() {
        lastEvent.value = searchStr;
        sendSearchEvent(searchStr)
      }, SEARCH_EVENT_DEBOUNCE_INTERVAL);
    }
  }

  $('input#town-search').change(function() {
    var search_str = $(this).val().toLowerCase();

    if (search_str) {
      $('td:nth-child(2):icontains(' + search_str + ')').parent().show()
      $('td:nth-child(2):not(:icontains(' + search_str + '))').parent().hide()
    } else {
      $('tr').show()
    }
    debounceSendSearchEvent(search_str);
  }).keyup(function() {
    $(this).change();
  })
});

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
  $('input#town-search').change(function() {
    var search_str = $(this).val().toLowerCase();

    if (search_str) {
      $('td:nth-child(2):icontains(' + search_str + ')').parent().show()
      $('td:nth-child(2):not(:icontains(' + search_str + '))').parent().hide()
    } else {
      $('tr').show()
    }
  }).keyup(function() {
    $(this).change();
  })
});

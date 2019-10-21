$(document).ready(function() {
  function handleSearchStrChange() {
    var searchStr = $(this).val().toLowerCase();
    if (searchStr) {
      $('tbody > tr[data-index*="' + searchStr + '"]').show();
      $('tbody > tr:not([data-index*="' + searchStr + '"])').hide();
    } else {
      $('tbody > tr').show();
    }
  }

  $('input#town-search')
    .change(handleSearchStrChange)
    .keyup(handleSearchStrChange);
});

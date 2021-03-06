/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  let selectElement = document.querySelector('#uni-list-autocomplete')

accessibleAutocomplete.enhanceSelectElement({
  defaultValue: '',
  selectElement: selectElement
})
})


$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  let selectElement = document.querySelector('#org-list-autocomplete')

accessibleAutocomplete.enhanceSelectElement({
  defaultValue: '',
  selectElement: selectElement
})
})

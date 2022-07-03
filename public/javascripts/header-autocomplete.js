jQuery(() => {
    var availableTags = [
        "AMD",
        'Intel',
        'RTX',
        'Nvidia',
        'GTX',
        'RX',
        'Radeon',
        'GeForce'
      ]
    $("#input-search").autocomplete({
        source: availableTags,
        open: function(event, ui) {
            $(".ui-autocomplete > li").wrapAll("<div class='autocomplete-menu'></div>")
        }
    })
})
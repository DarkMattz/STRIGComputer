jQuery(() => {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ]
    $("#input-search").autocomplete({
        source: availableTags,
        open: function(event, ui) {
            $(".ui-autocomplete > li").wrapAll("<div class='autocomplete-menu'></div>")
        }
    })
})
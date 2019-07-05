$.fn.tab = function(options) {
    // Vars
    
    var button = 0;
    $selector = this;
    // Controllers

    function modal(value) {
        $('.tab .tab-group .tab-element').hide();
        for (var i = 0; i < value.length; i++) {
            $('.tab .tab-group .tab-element' + value[i]).slideDown(600);
        }
    };

    // Init

    // Action
    $(".site-content .tab .btn-group .btn").click(function() {
        

        $(".site-content .tab .btn-group .btn").removeClass('active');
        $(this).addClass('active');

        button = $(this).attr("data-tab").split(" ");

        modal(button);
    });
    
    
}
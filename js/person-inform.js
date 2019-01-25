$(document).ready(function diffInform() {
    //display different information
    $('.person-image').on('click', function (e) {
        e.preventDefault();

        var currentId = e.currentTarget.id;
        var $this = $(this);

        $('.section-person').css('display', 'block');
        $('.person-image').removeClass('is-active-img');
        $this.addClass('is-active-img');

        var personId = currentId.replace('img', 'person');
        // alert("id =" + personId);
        $('.hide-active').removeClass('is-active-person');
        $('#' + personId).addClass('is-active-person');
    });
});

//Close information block
$(document).ready(function () {
    $('.button-cross').on('click', function(e){
        e.preventDefault();
        $('.section-person').css('display', 'none');
    });
});
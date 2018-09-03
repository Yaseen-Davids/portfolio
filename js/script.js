$(document).ready(function(){

    $("#home-section-title").css('transform', 'scale(1)');
    
    const skillsPos = $("#skills_section").position().top - 50;
    const expPos = $("#exp_section").position().top - 50 ;


    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();

        if (scroll < skillsPos){
            $("#navbar_links a").removeClass('position');
        }
        if (scroll > skillsPos){
            $("#navbar_links a").removeClass('position');
            $("#navbar_links a:nth-child(1)").first().addClass('position');
        }
        if (scroll > expPos){
            $("#navbar_links a").removeClass('position');
            $("#navbar_links a:nth-child(2)").first().addClass('position');
        }
    });

    $("#arrow_skills").on('click', function(){
        $('html,body').animate({scrollTop: skillsPos + 20},1000);
    })

    $("#navbar_links a").on('click', function(){
        if ($(this).html() == "Skills"){
            $('html,body').animate({scrollTop: skillsPos + 20},1000);
        }
        if ($(this).html() == 'Experience'){
            $('html,body').animate({scrollTop: expPos + 20},1000);
        }
    })

})
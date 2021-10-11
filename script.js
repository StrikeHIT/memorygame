$( document ).ready(function() {
    var id = 0;
    var idtwo = 0;
    var state1;
    var state2;

    var cards = $(".topside .item");
    for(var i = 0; i < cards.length; i++){
        var target = Math.floor(Math.random() * cards.length -1) + 1;
        var target2 = Math.floor(Math.random() * cards.length -1) +1;
        cards.eq(target).before(cards.eq(target2));
    }
    var cards = $(".bottomside .item");
    for(var i = 0; i < cards.length; i++){
        var target = Math.floor(Math.random() * cards.length -1) + 1;
        var target2 = Math.floor(Math.random() * cards.length -1) +1;
        cards.eq(target).before(cards.eq(target2));
    }


    $('.topside .item').click(function(){
        state1 = $(this);
        $(this).addClass('active');
        $('.bottomside').removeClass('disabled');
        $('.topside').addClass('disabled');
        id =  $(this).data('id');
        if(idtwo != 0){
            if(id != idtwo){
                setTimeout(errou, 1000, state1, state2);
                $('body').addClass('error');
                setTimeout(function(){ 
                    $('body').removeClass('error');
                }, 1000);
                state1 = 0;
                state2 = 0;
                id = 0;
                idtwo = 0;
                $('.bottomside, .topside').removeClass('disabled');
            }else{
                $('body').addClass('acepted');
                setTimeout(function(){ 
                    $('body').removeClass('acepted');
                }, 1000);
                state1 = 0;
                state2 = 0;
                id = 0;
                idtwo = 0;
            }
        }
    });
    $('.bottomside  .item').click(function(){
        state2 = $(this);
        $(this).addClass('active');
        $('.topside').removeClass('disabled');
        $('.bottomside ').addClass('disabled');
        idtwo =  $(this).data('id');
        if(id != 0){
            if(id != idtwo){
                $('body').addClass('error');
                setTimeout(function(){ 
                    $('body').removeClass('error');
                }, 1000);
                setTimeout(errou, 1000, state1, state2);
           
                state1 = 0;
                state2 = 0;
                id = 0;
                idtwo = 0;
                $('.bottomside, .topside').removeClass('disabled');
            }else{
                $('body').addClass('acepted');
                setTimeout(function(){ 
                    $('body').removeClass('acepted');
                }, 1000);
                state1 = 0;
                state2 = 0;
                id = 0;
                idtwo = 0;
            }
        }
    });

    function errou(state1,state2) {
        state1.removeClass('active');
        state2.removeClass('active');
    }
});
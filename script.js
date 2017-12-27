var aboutMeString = 'aboutMe';
var myAnimalsString = 'myAnimals';
var myFamilyString = 'myFamily';


var aboutMe = function(){
    hideOthers();
    $("div[name='"+aboutMeString+"']").removeClass('hidden');
};

var myAnimals = function(){
    hideOthers();
    $("div[name='"+myAnimalsString+"']").removeClass('hidden');
};

var myFamily = function(){
    hideOthers();
    $("div[name='"+myFamilyString+"']").removeClass('hidden');
};

function hideOthers(){
    //Find all div elements in the 'sites'
    $('#sites').find('.site').each(function(index, element){
        var classes = $(element).attr('class');
        if(!classes.contains('hidden')){
            $(element).addClass('hidden');
        }


    })

}
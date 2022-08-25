var userContainers = document.querySelectorAll('[data-testid=UserCell]');
for (var i = 0; i < userContainers.length; i++) {
    var myf = function(){
        try{
            if (userContainers[i].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].innerHTML=='Follows you') {
                userContainers[i].style.display = "none";
            } else {
                userContainers[i].style = "background-color: green !important;";
            }
        }catch(e){

        }
    };
    myf();

    //test3
};


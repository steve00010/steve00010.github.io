$(function () {

    function checkimages() {
        $(".container").css("width", $(window).width() * 0.8 + "px");
        var wi = $(window).width() - ($(".container").width())
        var newwi = wi / 2;
        $(".container").css("margin-left", newwi + "px");
        $(".container").css("margin-right", newwi + "px");
        $(".container1").css("margin-left", newwi + "px");
        $(".container1").css("margin-right", newwi + "px");
        var bi = $(".container").width() - 66;

        var pwi = $(".container").width() - ($(".portcontainer").width())
        var pnewwi = pwi / 2;

        $(".portcontainer").css("margin-left", pnewwi + "px");
        $(".portcontainer").css("margin-right", pnewwi + "px");
        //$(".page").css("height",( $(window).height() - $("#LeftNavBar").height()));
        //$(".topbox1").css("height", $(window).height() - $("#LeftNavBar").height() - 50);


        wi = null;
        newwi = null;
    }
    checkimages();
    window.onresize = resize;
    function resize() {
        checkimages();
    }
    	

   
});
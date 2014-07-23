$(function () {
    var currentinfo = null;
    $(".skill").click(
        function () {
            fadeitclick(this.id)            
        }
    );
    function fadeitclick(id) {
        if (currentinfo != null) {
            if (currentinfo == id) {
                //fade everything out
                $('#Title').fadeOut("fast");
                $('#' + currentinfo + "Image").fadeOut("fast");
                $('#' + currentinfo + "experience").fadeOut("fast");
                $('#Exp').fadeOut("fast");
                //$(' .topbox2').css("height", "0px");
                currentinfo = null;
            }
            else {
                //current display fadeout
                $('#Title').fadeOut("fast");
                $('#' + currentinfo + "Image").fadeOut("fast");
                $('#' + currentinfo + "experience").fadeOut("slow");
                $('#Exp').fadeOut("fast");
                //new display fadein
                $('#Title h1').text($("#" + id).text());
                $('#Title').fadeIn("slow");
                $('#' + id + "experience").fadeIn("slow");
                $('#' + id + "Image").fadeIn("slow");
               // $(' .topbox2').css("height", "400px");
                //check if the current one is being hidden
                $('#Exp').fadeIn("slow");
                currentinfo = id;
            }
        }
        else {
            $(' .topbox2').css("height", "370px");
            $('#Title h1').text($("#" + id).text());
            $('#Title').fadeIn("slow");
            $('#' + id + "Image").fadeIn("slow");
            $('#' + id + "experience").fadeIn("slow");
            $('#Exp').fadeIn("slow");
            currentinfo = id;
        }
    }
});
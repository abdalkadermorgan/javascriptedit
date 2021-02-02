$(document).ready(function () {
})
$("ul li").mouseover(function () {
    $("ul li div.side-bar").hide();
    $(this).children("div.sub-list").show()
    
})

$("ul li").mouseout(function () {
    $("ul li div.side-bar").show();
    $(this).children("div.sub-list").hide()
    
})
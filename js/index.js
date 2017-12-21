
$(function(){
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        resize:true,
        anchors:["p1","p2","p3","p4","p5"],
        scrollingSpeed:1000,
        menu:"#menu",
        afterLoad:function (anchorLink,index) {
            if(index===1){

            }if(index==3){
                $(".jindutiao").css("display","block")
                function fn(canvas,color,max){
                    let cobj = canvas.getContext("2d")
                    cobj.save();
                    cobj.translate(100, 100)
                    cobj.lineWidth = 20
                    cobj.strokeStyle = color
                    cobj.lineCap = "round"
                    cobj.textAlign = "center"
                    cobj.textBaseline = "middle"
                    cobj.font = "20px 微软雅黑"
                    cobj.fillStyle = "#fff";
                    let num = 0;
                    function progress() {
                        num++;
                        let angle = num * Math.PI / 50;
                        cobj.clearRect(-100, -100, 200, 200)
                        cobj.save()
                        cobj.rotate(-Math.PI / 2)
                        cobj.beginPath();
                        cobj.arc(0, 0, 70, 0, angle)
                        cobj.stroke()
                        cobj.restore()
                        cobj.fillText(num + "%", 0, 0);
                        if (num < max) {
                            requestAnimationFrame(progress);
                        }else{
                            cobj.restore()
                        }
                    }
                    progress()
                }
                let can1 = document.querySelector('#canvas1');
                let can2 = document.querySelector('#canvas2');
                let can3 = document.querySelector('#canvas3');


                fn(can1,"red",80);
                fn(can2,"pink",90);
                fn(can3,"blue",90);
            }
        }
    });
});
//第二屏JS
$(".sbimg .tk img").click(function () {
    $(".tu-top").css("display","none");
    $(".sbimg").addClass("bianhua");
    $(".tk").css("display","none");
    $("#zk").css("margin-right",25);
    $(".sbimg").addClass("bianhua").delay(1500).queue(function () {
        $(".txk").css("display","block");
        $(".left-bottom").css("display","block");
        $(".right-top").css("display","block");
        $(".right-bottom").css("display","block");
        $(".sbimg").dequeue();
    }).delay(1).queue(function () {
        $(".left-bottom").animate({top:220});
        $(".right-top").animate({top:0})
        $(".right-bottom").animate({left:200})
        $(".sbimg").dequeue();
    })




})


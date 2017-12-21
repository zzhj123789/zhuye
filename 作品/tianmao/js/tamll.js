
window.onload = function () {
    function carousel(parent) {
        // 同上
        let indicatorChild = parent.querySelectorAll('.banner-indicator ul a');
        let boxChild = parent.querySelectorAll('.banner-image');
        let index = 0;
        // 设置自定义定时回调函数
        let rotation = function (){
            // 超出元素个数就重置
            if(index >= indicatorChild.length || index < 0){
                index = 0;
            }
            //清空每一个元素的激活状态
            for(let i = 0; i < boxChild.length; i++){
                indicatorChild[i].classList.remove("active");
                boxChild[i].classList.remove("active");
            }
            // 添加当前显示元素的激活状态
            indicatorChild[index].classList.add("active");
            boxChild[index].classList.add("active");
            box.style.background=colorarr[index];
            // 下标右移
            index++;
        };
        // 设置定时函数
        let theadId = window.setInterval(rotation, 3000);
        // 鼠标移入指示器监听
        indicatorChild.forEach(function (value, index1) {
            value.onmouseover = function () {
                for(let i = 0; i < boxChild.length; i++){
                    indicatorChild[i].classList.remove("active");
                    boxChild[i].classList.remove("active");
                }
                value.classList.add("active");
                boxChild[index1].classList.add("active");
                box.style.background=colorarr[index];
                index = index1;
            }
        });
        let boxBanner = parent.querySelector(".banner-main");
        // 鼠标移入banner监听
        boxBanner.onmouseover = function () {
            window.clearInterval(theadId);
        }
        // 鼠标移出banner监听
        boxBanner.onmouseout = function () {
            if(theadId != 0){
                theadId = window.setInterval(rotation, 1500);
            }
        }
        // boxBanner.onmouseover = function () {
        //     clearInterval(theadId);
        //     box.style.background=colorarr[index];
        // }
        // boxBanner.onmouseout = function () {
        //     theadId = setInterval(rotation, 1500);
        //     box.style.background=colorarr[index];
        // }


        let box=document.querySelector('.banner');
        let colorarr=["#F5C15B","#E8E8E8","#E26C9E","#E8E8E8","#E20F5F","#F6F6F6"];




        let xiaozi=document.querySelector('.button-box');
        console.log(xiaozi)
        setInterval(fun,1000);
        let num=0;
        function fun(){
             num++;
            if(num==3){
                num=0
            }
            xiaozi.style.marginTop=-num*15+"px";
        }












    }
    let bnbox1 = document.querySelector(".banner");
    carousel(bnbox1);

    // let scrollObject = document.body.scrollTop ? document.body : document.documentElement;
    let topSearch = document.querySelector(".top-search");
    let scrollObject =  document.body ;
    let leftmenu = document.querySelector(".leftmenu");
    let menuChilds = leftmenu.children;
    let menu = document.querySelector(".menu");
    let menuContents = menu.querySelectorAll(".menu-content");
    let currentIndex = -1;
    let isTopSearch = false;
    let isLeftMenu = false;
    window.onscroll = function () {
        if(scrollObject.scrollTop >= menu.offsetTop && !isTopSearch){
            isTopSearch = true;
            // animate(topSearch, {top: 0},300);
            $(topSearch).stop().animate({top: 0}, 200);
        }else if(scrollObject.scrollTop < menu.offsetTop && isTopSearch){
            isTopSearch = false;
            // animate(topSearch, {top: -parseInt(topSearch.offsetHeight)},300);
            $(topSearch).stop().animate({top: -parseInt(topSearch.offsetHeight)}, 200);
        }
        if(scrollObject.scrollTop + 300 >= menuContents[0].offsetTop && !isLeftMenu){
            isLeftMenu = true;
            leftmenu.style.display = "block";
            leftmenu.style.transform= "scaleY(1)";
            leftmenu.style.transition = "transform .3s ease";
        }else if(scrollObject.scrollTop + 300 < menuContents[0].offsetTop && isLeftMenu){
            isLeftMenu = false;
            leftmenu.style.display = "block";
            leftmenu.style.transform= "scale(0)";
            leftmenu.style.transition = "transform .3s ease";
        }
        menuContents.forEach(function (value, index) {
                if(scrollObject.scrollTop + 300 >= value.offsetTop){
                    if(index == 0){
                        return;
                    }else {
                        for(let i = 1; i < menuChilds.length - 1; i++){
                            menuChilds[i].style.backgroundColor = "rgba(66,66,66,.6)";
                        }
                        menuChilds[index].style.backgroundColor = menuChilds[index].getAttribute("ys");
                        currentIndex = index;
                    }
                }else if(index != 0) {
                    menuChilds[index].style.backgroundColor = "rgba(66,66,66,.6)";
                    // leftmenu.style.display = "none";
                    // leftmenu.style.transform= "scale(0)";
                    // leftmenu.style.transition = "transform .4s ease";
                }
        });
    };

    [...menuChilds].forEach(function (value, index) {
        if(index == menuChilds.length - 1){
            value.onclick = function () {
                animate(scrollObject, {scrollTop: 0}, 500);
            }
        }else if(index != 0){
            value.onmouseover = function () {
                value.style.backgroundColor = value.getAttribute("ys");
            }
            value.onmouseout = function () {
                if(index == currentIndex) return;
                value.style.backgroundColor = "rgba(66,66,66,.6)";
            }
            value.onclick = function () {
                animate(scrollObject, {scrollTop: menuContents[index].offsetTop}, 500);
            }
        }
    });


    {
        let top=document.querySelectorAll('.live-top-image img');
        let bot=document.querySelectorAll('.live-middle-img');
        let zhe=document.querySelectorAll('.zhe');
        let mao=document.querySelectorAll('.live-img')
        let middle=document.querySelector('.live-middle');
        let indic=document.querySelector('.indic');
        let indic2=document.querySelector('.indic2');
        bot.forEach(function(ele,index){
            ele.onmouseover=function(){
                top.forEach(function(ele,index){
                    ele.classList.remove('active2');
                    bot[index].classList.remove('active1');
                    zhe[index].classList.remove('active3');
                    mao[index].classList.remove('active4');
                });
                zhe[index].classList.add('active3');
                top[index].classList.add('active2');
                bot[index].classList.add('active1');
                mao[index].classList.add('active4');
            }
        })
        indic.onclick=function(){
            middle.style.marginLeft=-486+"px";
            indic.style.display="none";
            indic2.style.display="block";
        }
        indic2.onclick=function(){
            middle.style.marginLeft=0;
            indic.style.display="block";
            indic2.style.display="none";
        }
    }

}

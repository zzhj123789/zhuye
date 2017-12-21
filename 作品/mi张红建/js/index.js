window.onload=function(){
    //头部开始
    {
        const gouwu=document.querySelector(".gouwuche");
        const neirong=document.querySelector(".gouwushu");
        gouwu.onmouseover=function(){
            neirong.style.height=100+"px";
        };
        gouwu.onmouseout=function(){
            neirong.style.height="";
        }
    }

    //头部结束
    //导航开始
    {
        const daohang=document.querySelectorAll(".shouji")
        const cang=document.querySelectorAll(".yincang");
        cang.forEach(function(ele,index){
            daohang[index].onmouseover=function(){
                ele.style.height=230+"px";
                ele.style.borderTop="1px solid #e0e0e0";
            }
            daohang[index].onmouseout=function(){
                ele.style.height="";
                ele.style.borderTop="";
            }
        })
    }


    //导航结束
    // benner开始
    {
        const benners=document.querySelectorAll(".bentu")
        const lunbos=document.querySelectorAll(".lunbo1")
        const lefts=document.querySelector(".btn1");
        const rights=document.querySelector(".btn2");
        const benner=document.querySelector(".benner")
      lunbos.forEach(function(ele,index){
          ele.onmouseover=function(){
              benners.forEach(function(ele,index){
                  ele.classList.remove("active");
                  lunbos[index].classList.remove("active2");
              })
              ele.classList.add("active2");
              benners[index].classList.add("active");
              num=index;
          }

      })
        let num=0;
        let move=function () {
            num++;

            if(num==benners.length){
                num=0;
            }
            if(num==-1){
                num=lunbos.length-1
            }
            benners.forEach(function(ele,index) {
                ele.classList.remove("active");
                lunbos[index].classList.remove("active2");
            })
            lunbos[num].classList.add("active2");
            benners[num].classList.add("active");
        }
        let st=setInterval(move,3000);
        benners.onmouseover=function(){
            clearInterval(st);
        }
        benners.onmouseout=function(){
            st=setInterval(move,3000);
        }
        benner.onmouseover=function(){
            lefts.classList.remove("btn3");
            rights.classList.remove("btn3");

        }
        benner.onmouseout=function(){
            lefts.classList.add("btn3");
            rights.classList.add("btn3");

        }
        lefts.onclick=function(){
            num-=2;
            move()
        }
        rights.onclick=function(){
            move()
        }


    }
    // benner结束
    // 分类开始
    {
        const fenlei=document.querySelectorAll(".diyi");
        const cang=document.querySelectorAll(".dier");
        fenlei.forEach(function(ele,index){
            ele.onmouseover=function(){
                ele.style.background="#ff6700";
                cang[index].style.display="block";
            }
            ele.onmouseout=function(){
                ele.style.background="";
                cang[index].style.display="none";
            }
        })
    }
    // 分类结束
    //单品开始
    {
        const shopbox=document.querySelector(".tu");
        const arrowprev=document.querySelector(".left");
        const arrownext=document.querySelector(".right");
        var shopbigbox = document.querySelector(".danpintu")
        function prev() {
            arrowprev.style.color="red"
            arrownext.style.color="#ccc"
            shopbox.style.marginLeft = "0"
        }

        function next() {
            arrowprev.classList.add("btnactive")
            arrownext.classList.remove("btnactive")
            arrowprev.style.color="#ccc"
            arrownext.style.color="red"
            shopbox.style.marginLeft = "-1240px"
        }

        arrownext.onclick = function () {
            next()
        }
        arrowprev.onclick = function () {
            prev()
        }
        var i = 1;

        function fn() {
            i++;
            if (i % 2 == 0) {
                prev()
            } else if (i % 2 == 1) {
                next()
            }
        }

        var st = setInterval(fn, 3000)

        shopbigbox.onmouseover = function () {
            clearInterval(st)
        }

        shopbigbox.onmouseout = function () {
            setInterval(st = setInterval(fn, 3000))
        }


    }

    }

    //单品结束
    // 家电开始
    {
        const biaos = document.querySelectorAll(".biaojs");
        const jiadians = document.querySelectorAll(".jiadianjs")
        // biaos.forEach(function(ele,index){
        //     ele.onmouseover=function(){
        //         jiadians.forEach(function(ele,index){
        //             ele.classList.remove("active1");
        //             biaos[index].classList.remove("active");
        //         })
        //         biaos[index].classList.add("active");
        //         jiadians[index].classList.add("active1")
        //     }
        // })
        function xuanxiang(biao, neirong) {
            biao.forEach(function (ele, index) {
                ele.onmouseover = function () {
                    neirong.forEach(function (ele, index) {
                        ele.classList.remove("active1");
                        biao[index].classList.remove("active");
                    })
                    biao[index].classList.add("active");
                    neirong[index].classList.add("active1")
                }
            })
        }

        xuanxiang(biaos, jiadians);
    }
    // 家电结束
    // 智能开始
    {
        const biaos=document.querySelectorAll(".zhineng-biao")
        const zhinengs=document.querySelectorAll(".zhinengjs");
        // for(var i=0;i<biaos.length;i++){
        //     biaos[i].index=i;
        //     biaos[i].onmouseover=function(){
        //         for(var j=0;j<zhinengs.length;j++){
        //             biaos[j].classList.remove("active");
        //             zhinengs[j].classList.remove("active1");
        //         }
        //         this.classList.add("active");
        //         zhinengs[this.index].classList.add("active1");
        //     }
        // }
        xuanxiang(biaos,zhinengs);
    }
    // 智能结束
    //搭配开始
    {
    const biaos=document.querySelectorAll(".dapei-biao");
    const dapeis=document.querySelectorAll(".dapeijs");
    xuanxiang(biaos,dapeis);
    }
    // 搭配结束
    // 配件开始
    const biaos=document.querySelectorAll(".peijian-biao");
    const peijians=document.querySelectorAll(".peijianjs");

    xuanxiang(biaos,peijians);
    //配件结束
    // 周边开始
    {
        const biaos = document.querySelectorAll(".zhoubian-biao");
        const zhoubians = document.querySelectorAll(".zhoubianjs")
        xuanxiang(biaos, zhoubians);
    }
    //周边结束
    // 图书开始
    {
        const tushu=document.querySelectorAll(".tushu-kong")
        const left=document.querySelectorAll(".jiantou-left");
        const right=document.querySelectorAll(".jiantou-right");
        const kuang=document.querySelectorAll(".tushu");
        const lunbo=document.querySelectorAll(".bodianjs");
        const lunbo1=document.querySelectorAll(".bodian1js");
        const lunbo2=document.querySelectorAll(".bodian2js");
        const lunbo3=document.querySelectorAll(".bodian3js");
        // console.log(tushu)

            tushulunbo(tushu[0],left[0],right[0],kuang[0],lunbo)
            tushulunbo(tushu[1],left[1],right[1],kuang[1],lunbo1)
            tushulunbo(tushu[2],left[2],right[2],kuang[2],lunbo2)
            tushulunbo(tushu[3],left[3],right[3],kuang[3],lunbo3)



        function tushulunbo(tushus,lefts,rights,kuangs,lunbos){
            let now=0;
            lunbos.forEach(function(ele,index){
                ele.onclick=function(){
                    console.log(ele)
                    tushus.style.transition="all 0.8s";
                    tushus.style.marginLeft=-index*296+"px";
                    lunbos[now].classList.remove("active3");
                    ele.classList.add("active3");
                    now=index;
                }

            })
            kuangs.onmouseover=function(){
                lefts.style.display="block";
                rights.style.display="block";
            }
            kuangs.onmouseout=function(){
                lefts.style.display="";
                rights.style.display="";
            }
            rights.onclick=function(){
                if(now==lunbos.length-1){
                   return;
                }
                    lunbos[now].classList.remove("active3");
                    now++;
                    tushus.style.transition="all 0.8s";
                    tushus.style.marginLeft=-now*296+"px";
                    lunbos[now].classList.add("active3");
            };
            lefts.onclick=function(){
                if(now==0){
                    return;
                }
                lunbos[now].classList.remove("active3");
                now--;
                tushus.style.transition="all 0.8s";
                tushus.style.marginLeft=-now*296+"px";
                lunbos[now].classList.add("active3");
            };
        }
    }


    // 图书结束

//  js轮播图
     let num = 1;
  
        const swiperitem = document.getElementsByClassName('swiper-item');
        debugger;
        console.log(swiperitem)
        const swiperitem1 = document.querySelector('.swiper-items'); //Web API,它选择与传入的指定CSS选择器匹配的第一个元素。
        console.log(swiperitem1)
        const swiperitemWidth = 1226;
        //定义按钮
    
     
       const leftbutn = document.getElementById('left')
       if(leftbutn){
        leftbutn.addEventListener('click', () => {
            --num;
            if (num==0) {
                setTimeout(() => {
                    num = swiperitem.length-2;
                    console.log('定时器执行------')
                    swiperitem1.style.transform = `translateX(${-1226*6}px)`
                    swiperitem1.style.transition = 'none'
                }, 1000)
            }
            console.log(num)
            swiperitem1.style.transition = 'all 1s' 
            const translateX = swiperitemWidth * -num;
            swiperitem1.style.transform = `translateX(${translateX}px)`

        }
        )
    }
    const rightbutn = document.getElementById('right')
    if(rightbutn){
        rightbutn.addEventListener('click', () => {
            ++num;
            if (num == swiperitem.length - 1) {
                setTimeout(() => {
                    num = 1
                   console.log('定时器执行------')
                    swiperitem1.style.transform = `translateX(-1226px)`
                    swiperitem1.style.transition = 'none'
                }, 1000)

            }
            console.log(num)
            swiperitem1.style.transition = 'all 1s'
            const translateX = swiperitemWidth * -num;
            swiperitem1.style.transform = `translateX(${translateX}px)`



        }
        )}

    // let intervalId;
    // run()
    // function run() {
    //     intervalId = setInterval(() => {

    //         console.log('执行')
    //         for (var i = 0; i < 6; i++) {
    //             num++
    //             swiperitem1.style.transform = `translateX(${-1226 * i}px)`
    //         }
    //         if (num > 6)
    //             num = 1

    //     } , 2000)
    // }

//    swiperitem1.onmouseover = function () {
//         // 清除定时器
//         clearInterval(intervalId)
//     }

//     swiperitem1.onmouseout = function () {
//         // 移出再加上定时器
//         run()
//     }

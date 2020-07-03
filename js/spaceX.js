// 控制钢铁侠的动画
setTimeout(() => {
    $('.ironman').toggleClass('ironman-feixing')
    $('.ironman').toggleClass('ironman_huangdong')
},1500)
// 监听滚动
$(document).scroll(() => {
    // 输出高度
    if(Number($(document).scrollTop()) > 1200){
        // 添加动画
        let flag = $("#banner").hasClass('banner-keyframe')
        if(!flag){
            $('#banner').toggleClass("banner-keyframe")
        }
    }

})

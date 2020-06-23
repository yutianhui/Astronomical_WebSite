// 控制动画
$('document').ready(() => {
    let items = $("#we img")
    for(let i = 0;i < items.length;i++){
        $(items[i]).toggleClass("intro");
    }
    // 设置定时器取消动画
    setTimeout(() => {
        for(let i = 0;i < items.length;i++){
            // 切换类名
            $(items[i]).toggleClass("intro");
        }
    }, 2000);
})


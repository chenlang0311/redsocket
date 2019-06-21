/**
 * rem计算方式：设计图尺寸px / 100 = 实际rem  例: 100px = 1rem
 */
!function (window) {
    /* 设计图文档宽度 */
    var docWidth = 750;
    var doc = window.document,
        docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
       
    var recalc = (function refreshRem () {
        var clientWidth = docEl.getBoundingClientRect().width;
        var  height = document.documentElement.clientHeight;
        //需要JQUERY处理横屏
        var print = $('#app');
        if(clientWidth>height){
            docWidth = 1334;
            print.width(clientWidth);
            print.height(height);
            print.css('top',  0 );
            print.css('left',  0 );
            print.css('transform' , 'none');
            print.css('transform-origin' , '50% 50%');
        }else{
            docWidth = 750;
            print.width(height);
            print.height(clientWidth);
            print.css('top',  (height-clientWidth)/2 );
            print.css('left',  0-(height-clientWidth)/2 );
            print.css('transform' , 'rotate(90deg)');
            print.css('transform-origin' , '50% 50%');
        }
        /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
        docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 20), 8.55) * 5 + 'px';
        return refreshRem;
    })();

    /* 添加倍屏标识，安卓倍屏为1 */
    docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);

    if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
        /* 添加IOS标识 */
        doc.documentElement.classList.add('ios');
        /* IOS8以上给html添加hairline样式，以便特殊处理 */
        if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
            doc.documentElement.classList.add('hairline');
    }

    if (!doc.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

}(window);

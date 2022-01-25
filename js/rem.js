
//屏幕适应
(function (win, doc) {
    var docEl = doc.documentElement,
    isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),

    // 只针对IOS设备
    dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,

    // 检测支持的"缩放"事件
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEl.dataset.dpr = dpr;

    if (!win.addEventListener) return;
    function setFont() {
        var html = document.documentElement;
        var k = (html.clientWidth > html.clientHeight) ? 1334 : 750;
        html.style.fontSize = html.clientWidth / k * 100 + "px";
    }
    setFont();
    setTimeout(function () {
        setFont();
    }, 300);
    doc.addEventListener('DOMContentLoaded', setFont, false);
    win.addEventListener(resizeEvt, setFont, false);
    win.addEventListener('load', setFont, false);
})(window, document);
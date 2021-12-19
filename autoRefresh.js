/*
 * @Author: ShenLing
 * @Date: 2021-12-19 14:48:27
 * @LastEditors: ShenLing
 * @LastEditTime: 2021-12-19 15:34:50
 */
// 设置：刷新间隔、考试时间string
timeout=prompt('页面刷新间隔（秒）：'); // 每隔5s自动更新
compareText=prompt('考试时间', '2021年下半年')

// 初始化变量
count=0; // 已刷新次数
current=location.href; // 当前页面链接

// 刷新页面
if(timeout > 0) setTimeout('reload()', 1000 * timeout);
else location.replace(current);

// 自动重载页面
function reload() {
    // 刷新页面，更新刷新次数
    setTimeout('reload()', 1000 * timeout);
    count++;
    console.log(`每${timeout}秒自动刷新，刷新次数：${count}`);
    
    // 创建frame，保证刷新的是frame内容，而不会在刷新整个页面后清除掉本页执行代码，停止刷新
    fr4me='<frameset cols=\'*\'>\n<frame id src=\''+current+'\'/>';
    fr4me+='</frameset>';
    frameDOM = window.frames[0] ? window.frames[0].document : null;

    // 调用方法，检查是否满足条件
    checkInfo(frameDOM ? frameDOM : document)

    // 刷新嵌套的frame
    with(document) {
        write(fr4me);
        void(close());
    }
}

// 检查是否满足条件：包含xx字段，满足时开启浏览器通知提示
// 可根据实际情况调整该部分判断内容
function checkInfo(doc) {
    if (doc && doc.getElementsByTagName('li')) {
        targetDom=doc.getElementsByTagName('li');
        console.log(`当前查询：${compareText}`);

        for(var i = 0; i < targetDom.length; i++) {
            targetText=targetDom[i].innerText

            if (targetText && targetText === compareText) {
                console.log(`查询成功：${targetText}`);
                notify();
                break;
            }
        }
    }
}

// 浏览器通知提示
function notify() {
    // 判断是否开启了浏览器通知，若开启成功，则可以在自动刷新满足条件后正确发送通知
    // 可以打开 chrome://settings/content/notifications 设置“允许发送通知”链接
    if(window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission(function(status) {
            var n = new Notification(`${compareText}软考出成绩了`, { body: '页面已更新！！！快来看成绩' }); 
        });
    }
}
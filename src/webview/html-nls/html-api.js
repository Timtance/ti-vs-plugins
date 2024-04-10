const postMessage = function(message) {
    // 使用 postMessage 方法向插件发送消息
    window.parent.postMessage({...message, type: vscodePostType.htv}, '*');
}
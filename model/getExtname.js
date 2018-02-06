exports.getExtname = function (extName) {   // 获取扩展名方法
    switch (extName) {
        case '.html':
        return 'text/html';

        case '.css':
        return 'text/css';

        case '.js':
        return 'text/javascript';

        default:
        return 'text/html';
    }
}
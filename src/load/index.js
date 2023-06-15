var Crawler = require("crawler");

var c = new Crawler({
    uri: 'https://www.baidu.com',
    // 最大并发数默认为10
    maxConnections : 10,
    // 两次请求之间将闲置1000ms
    rateLimit: 1000,
    // 在每个请求处理完毕后将调用此回调函数
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ 默认为 Cheerio 解析器
            // 它是核心jQuery的精简实现，可以按照jQuery选择器语法快速提取DOM元素
            console.log($("title").text());
        }
        done();
    }
});

// 将一个URL加入请求队列，并使用默认回调函数
// c.queue('http://www.amazon.com');
//
// // 将多个URL加入请求队列
// c.queue(['http://www.google.com/','http://www.yahoo.com']);
//
// // 对单个URL使用特定的处理参数并指定单独的回调函数
// c.queue([{
//     uri: 'http://parishackers.org/',
//     jQuery: false,
//
//     // The global callback won't be called
//     callback: function (error, res, done) {
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);
# nodeSpider
 利用 nodejs 强大的异步特性，以异步高并发去爬取网站的数据

## 工具库

- async     
Async是一个流程控制工具包，提供了直接而强大的异步功能。Async提供了大约20个函数，包括常用的 map, reduce, filter, forEach 等，异步流程控制模式包括，串行(series)，并行(parallel)，瀑布(waterfall)等。
我使用了 async.mapLimit 来控制并发抓取。

- cheerio           
Node.js 版的 jquery，用来解析html非常方便，就像在浏览器中使用jquery一样。

- mongoose  
mongoDB数据库驱动

- superagent    
是个轻量的的 http 方面的库，是 nodejs 里一个非常方便的客户端请求代理模块，当我们需要进行 get 、 post 、 head 等网络请求时,使用它。

## 数据库mongoDB
MongoDB可能是现今NoSQL数据库中最著名的。选择是因为它数据存储以BSON/JSON文档，这对于Web应用程序有很大的意义。更喜欢以JSON形式传输，这使得数据表示可采用统一的模型。

## 展示

![可视化](http://ob6nlbpso.bkt.clouddn.com/nodeSprite.png)




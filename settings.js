module.exports = {
    delay: parseInt((Math.random() * 30000000) % 4000, 10) + 1000,  //请求延时，延时太短可能会有被封ip的危险
    modelName: "test1",   //数据库model名，存储集合名字
    job: "前端开发",
    pages: 1,
    city: ['南京','北京','上海','广州','深圳','杭州'],
    keyword: "性能,兼容,组件,github,scss,模板引擎,rquire.js,echarts,异步编程,html,javascript,es6,模块化,响应式,架构,移动,手机,面向对象,数据库,博客,微信,数据结构,算法,svn,git,oop,mobile,webapp,gulp,grunt,webpack,http,canvas,svg,backbone,ember,angular,react,vue,node,bootstrap,jquery,ajax,sass,less,stylus,require,sea,photoshop,firework,php,python,mvc,mvvm,dom,json,xml,zepto,dojo,d3,underscore,seo,oracle,sql,mongodb".split(',')

};
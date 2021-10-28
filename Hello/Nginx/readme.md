# Nginx 相关问题

记录Nginx相关的问题

## Nginx SSI

名词解释: 全称`Server Side Include`, 服务器端嵌入,是一种类似于 `ASP` 的基于服务器的网页制作技术.

为什么使用: 用个例子来说明，一个静态化的页面中，需要嵌入一小块实时变化的内容，。例如首页，大部分的页面内容需要缓存但是用户登录后的个人信息是动态信息，不能缓存。那么如何解决这个”页面部分缓存”问题，利用SSI就可以解决，在首页的静态页面中嵌入个人信息的动态页，由于是服务器端的嵌入，所以用户浏览的时候都是一个嵌入后的页面

相关链接:

- [Nginx SSI指令配置详解](https://cloud.tencent.com/developer/article/1472874)
- [Nginx docs](http://nginx.org/en/docs/http/ngx_http_ssi_module.html)


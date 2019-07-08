press=require('experss');
//引入用户路由器
const userRouter=require('./routes/lm.js');
//引入body-parser中间件
const bodyParser=require('body-parser');
var app=experss();
app.listen(8080);

//托管静态资源到yxlm目录下
app.use(expresss.static('public'));
//使用body-parser中间件
app.use( bodyParser.urlencoded({
	extended:false //不是第三方的qs模块，是ruerystring模块
}));
//使用路由器
app.use( '/lm',userRouter );


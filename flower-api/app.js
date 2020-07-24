var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// 引入接口文件
var homeRouter = require('./api/home')
var classifyRouter = require('./api/classify')
var youlikeRouter = require('./api/youlike')
var loginRouter = require('./api/login')
var userinfoRouter = require('./api/verify')
var registerRouter = require('./api/register')
var mygoodRouter = require('./api/mygood')
var getGoodsRouter = require('./api/getGoods')

var detailRouter = require('./api/detail')
var getUsersRouter = require('./api/getUsers')
var deleteUserRouter = require('./api/deleteUser')
// 购物车api
var getCartRouter = require('./api/getCart')
var deleteCartRouter = require('./api/deleteCart')
var addCartRouter = require('./api/addCart')

var app = express();

//后端添加请求头解决跨域
app.all('*', function (req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("X-Powered-By", ' 3.2.1');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 打印日志插件
app.use(logger('dev'));

// 中间件的安装body-parser
app.use(express.json());//转json
app.use(express.urlencoded({ extended: false }));//中间件req.body获取非地址栏的信息：post
// cookie
app.use(cookieParser());

// 静态资源托管
app.use(express.static(path.join(__dirname, 'public')));

// 资源引入
app.use('/home',homeRouter);
app.use('/classify',classifyRouter);
app.use('/cart/youlike',youlikeRouter);
// 登入验证注册
app.use('/user/login',loginRouter);
app.use('/user/verify',userinfoRouter);
app.use('/user/register',registerRouter);
// 用户信息查询,删除
app.use('/user/getusers',getUsersRouter)
app.use('/user/delete',deleteUserRouter)
// 购物车
app.use('/cart/get',getCartRouter)
app.use('/cart/delete',deleteCartRouter)
app.use('/cart/add',addCartRouter)

//商品查询
app.use('/mygood',mygoodRouter)
app.use('/detail',detailRouter)
app.use('/getgoods',getGoodsRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

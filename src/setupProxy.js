const {createProxyMiddleware}=require('http-proxy-middleware');
module.exports=function(app){
    app.use(
        createProxyMiddleware('/apis',{
            target:'http://123.56.9.154:8081',
            changeOrigin:true,
            //pathRewrite:{'^/api1':''}
        }),
    )
}
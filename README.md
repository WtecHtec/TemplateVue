# 使用

```
 
 
 npm install
 
```
# 结构介绍
### build 文件夹
  存放webpack 配置文件：
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200812102424128.png#pic_center)


### src 文件夹
 存放路由，vuex,页面，assets静态资源等
 
 ### router
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200812102642860.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTIyMA==,size_16,color_FFFFFF,t_70#pic_center)


### vuex
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200812102852744.png#pic_center)
### svg
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200812103320296.png#pic_center)
###### 使用
1. 在svg文件夹下创建一个name.svg文件
2. 在name.svg文件中，粘贴svg数据
3.   在页面 ```<svg-icon icon-class="logo"></svg-icon> ```

### 工具js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200812103051750.png#pic_center)
### views
存放vue文件

### postcss.config.js
 配置 px 转换 rem。如果想开启，放开注释，然后在 build文件夹中的webpack.base.js下 放开 new webpack. LoaderOptionsPlugin {..} 的注释。

# 地址
[npm 地址](https://www.npmjs.com/package/wtechtec-template-vue)
[git地址](https://github.com/WtecHtec/TemplateVue)

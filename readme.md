# wx-taro-ui
------------

## 文档 链接

#### taro: https://taro.js.org/

#### taroUI: https://taro-ui.jd.com/#/

#### 小程序api: https://developers.weixin.qq.com/miniprogram/dev/framework/
------------
## git分支管理
    线上分支: master

    线上bug修复分支: hotfix
    
    开发分支: develop

    开发功能分支: task-xxx
------------
## 运行项目(没有权限，请联系管理员)
    1.git clone git@39.97.113.128:wx-sale

    2.yarn global add @tarojs/cli   OR   npm install -g @tarojs/cli   OR     cnpm install -g @tarojs/cli        
     (tip: 注意版本tarojs/cli@1.3.10 当前的所有相关taro依赖版本必须一致  
       值得一提的是，如果安装过程出现sass相关的安装错误，请在安装mirror-config-china后重试。 eg: npm install -g mirror-config-china)

    3.yarn    OR    npm install   OR    cnpm install

    4.yarn dev:weapp    OR    npm dev:weapp   OR    cnpm dev:weapp

    5.自行下载微信开发工具预览，加载dist路径并执行指令启动本地服务器

    6.sass编译报错时可尝试安装 node-sass包解决

    7.项目对接官方指定ui库Taro-ui,目前个别组件存在功能缺陷，待版本迭代

    8.项目发布及其他配置权限归产品经理所有

    9.本地调试需配置host文件，增加配置192.168.128.5 testfenrun.yktour.com.cn

------------
## 运行环境 & 命令
    1.本地访问 测试环境    yarn dev:weapp
    2.本地访问 预生产环境    yarn dev:weapp:pre
    3.本地访问 线上环境    yarn dev:weapp:pro

    1.打包上线 yarn build:weapp
------------

## 工具(utils)
    1.同步状态更新使用Tools导出类的静态方法change避免回调地狱,实例如右: await Tools.change.bind(this)(入参)

    2.Tools内封装有:判断数据有效性,防抖,工具库版本比较,深拷贝等方法,无需重新编写

    3.Moment工具类中有各种计算及转化时间格式的工具方法，并对IOS进行了兼容性处理,无需重新编写
------------
## 资源(assets)
    1.styl/mixin内封装了wh(长宽),font(文本),fj(flex布局),ellips(省略)等样式块及泛用颜色变量,请尽量使用

    2.styl/custom-variables设置taro-ui自定义样式,全局生效，谨慎修改

    3.images内仅配置tabs用本地图片,其余图片均不存储本地,项目中所用图片可调用https://fileupload.yktour.com.cn/netty/file/upload接口获取路径

    4.font内配置有Awesome字体,亦可使用Aticon及Icon组件
------------------------------------
## 框架坑

    1.Input组件不支持async方法绑定,输入为空时会赋值[promise]

    2.命名同名属性或状态，后者不予识别。
    
    3.导出属性或状态时不建议简化this.state及this.props

    4.components内的组件样式,不识别text,view等基础DOM

    5.当前版本出现执行报错,或切换账号时需重启本地服务器

    6.列表渲染中的Image组件不支持绑定onError事件

    7.1.3之后的Taro事件必须绑定作用域

    8.Taro对于ts的支持有待提高，目前不推荐使用
------------------------------------
## 编写习惯
    1.组件内未使用的reducers可不必挂载,Image,Input等基础组件自动挂载不用在引入

    2.钩子函数尽量按照执行链写状态初始化之后，便于寻找修正，不需下拉刷新或分享的组件不写相关钩子

    3.render函数内尽显保障洁净输出，不要定义变量

    4.业务代码请尽量语义化以get(获取类),inite(初始化类),change(更新类),to(跳转类)命名并予以注释

    5.有明显分割的视图代码块请插入空格并予以注释

    6.js及styl文件统一命名index，其父级文件以功能命名。多模块共用页放于pages/common，复用组件放于components。
------------
## 状态树(store)
    1.pub(公共信息含openid,token等),目前登录判断pub.openid
    
    2.user(销售信息含user_id,org_id等)
    
    3.各产品模块支线如line,hotel存储相关搜索及必要产品信息
------------
## 拉新逻辑
    1. //introduce_id:推荐人id  introduce_type:推荐人类型1销售2用户
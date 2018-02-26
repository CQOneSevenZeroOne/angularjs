# 三大框架对比
|名称|Vue|Angular|React|jQuery|
|-|-|-|-|-|
|定义模块（容器）|`new Vue()`|`angular.module()`|`ReactDOM.render()`|
|数据绑定|`{{name}}`双向数据绑定|`{{name}}`双向数据绑定|`{name}`单向数据绑定|
|作用域|`el:"#demo"`配合id节点|`app.controller("indexCtrl",function($scope){})`配合`ng-controller`指令|`document.getElementById("demo")`配合id节点|
|驱动模式|基于数据驱动|基于数据驱动|基于数据驱动|基于节点驱动|
|机制|虚拟DOM配合Object.defineProperty数据劫持，通过对数据模型中对象set值get值，触发值数据在视图的变动|脏值检测，视图V和数据模型M通过指令，服务或者`$scope.$apply()`|虚拟DOM对比，对View和Model实现绑定|
|生命周期|create编译->mounte挂载->update更新->destory销毁|无|Mounting->Updating->Unmounting|
|内置指令|对操作相同DOM结构的封装v-model(input,select,textarea),@,:,v-text,v-html,v-show,v-if,v-for|ng-model,ng-controller,ng-app,ng-bind,ng-show,ng-if,ng-repeat|无 可以用`{(function(){return data.name})()}`模拟|$(el).val,$(el).html,$(el).text(),$(el).show(),$(el).remove()|
|自定义指令|`Vue.directive()`|`app.directive()`|无||
|内置过滤器|1.x有内置过滤器 2.x全部删除了|{{100|currency}} currency,uppercase,lowercase,filter,limitto,orderby,json,number|无|
|自定义过滤器|对处理相同数据的方法封装`Vue.filter()`|`app.filter()`|无 可以用{data.ing(data.name)}模拟||
|内置组件|理解为html自带的元素||||
|自定义组件|组件就是对相同的js，html和css的封装 1.`Vue.component` 2.webpack打包`.vue`组件文件|`app.component()`|1. `React.createClass()` 2. webpack配合.jsx文件`class xxx extends React.Component{}`|
|状态管理|Vuex(state action getter mumtation)组件之间通信 props和$emit,$on|redux或者服务service|redux (state, action)|
|路由|实现单页面spa应用vue-router,局部刷新|ui-router和angular-router|react-router  webpack用react-router-dom|
|模块化|webpack|自带模块化或者配合gulp|webpack|requirejs和gulp|

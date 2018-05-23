

var data = {};

var menu =  [{
      "path": '/',
      "component": "Home",
      "name": '用户管理',
      "menuShow": true,
      "leaf": true, // 只有一个节点
      "iconCls": 'iconfont icon-users', // 图标样式class
      "children": [
        {"path": '/user/list', "component": "user/list", "name": '用户列表', "menuShow": true, "leaf": true}
      ]
    },
    {
      "path": '/',
      "component": "Home",
      "name": '图书管理',
      "menuShow": true,
      "iconCls": 'iconfont icon-books',
      "children": [
        {"path": '/book/list', "component": "book/list", "name": '图书列表', "menuShow": true, "leaf": true},
        {"path": '/book/category', "component": "bookcategory/list", "name": '图书分类', "menuShow": true, "leaf": true}
      ]
    },
    {
      "path": '/',
      "component": "Home",
      "name": 'canvas学习',
      "menuShow": true,
      "iconCls": 'iconfont icon-books',
      "children": [
        {"path": '/canvas/list1', "component": "canvas/list1", "name": '基本绘制', "menuShow": true, "leaf": true},
        {"path": '/canvas/list2', "component": "canvas/list2", "name": '简单动画', "menuShow": true, "leaf": true},
        {"path": '/canvas/list3', "component": "canvas/list3", "name": '贪吃蛇', "menuShow": true, "leaf": true}
      ]
    },
    {
      "path": '/',
      "component": "Home",
      "name": '设置',
      "menuShow": true,
      "iconCls": 'iconfont icon-setting1',
      "children": [
        {"path": '/user/profile', "component": "user/profile", "name": '个人信息', "menuShow": true, "leaf": true},
        {"path": '/user/changepwd', "component": "user/changepwd", "name": '修改密码', "menuShow": true, "leaf": true}
      ]
    }]

    data.menu = menu


    export default data
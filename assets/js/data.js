const webData = {
  site_articles_author: "Luw Beow",
  site_title: "Eligarf's site",

  /**
   * 写完之后的blog添加步骤
   * - markdown导出到html
   * - 在json数组中添加
   * - 路径会在js中拼接
   */
  articles: [
    {
      title: "qt ubuntu cmake",
      brief: "ubuntu写qt必备",
      href: "ubuntucmakeqt.html",
      dataTime: "March.21 2021",
    },
    {
      title: "qtqmake",
      brief: "qt qmake 工程配置",
      href: "qtqmake.html",
      dataTime: "March.21 2021",
    },
    {
      title: "WPF资源使用",
      brief: "开始学一下WPF",
      href: "wpfresource.html",
      dataTime: "Feb.16 2021",
    },
    {
      title: "package.json package-lock.json 版本关系探索",
      brief: "没营养的一更，快一个月了，必须更一下",
      href: "packagelockjson.html",
      dataTime: "Jan.12 2021",
    },
    {
      title: "C#托管内存地址获取与转化",
      brief: "C#托管内存地址获取与转化",
      href: "csherpmemery.html",
      dataTime: "Dec.14 2020",
    },
    {
      title: "再看Js 和Ts模块",
      brief: "再看Js 和Ts模块",
      href: "jstsmd.html",
      dataTime: "Nov.27 2020",
    },
    {
      title: "javascript 原型链",
      brief: "javascript 原型链",
      href: "javascriptproto.html",
      dataTime: "Nov.26 2020",
    },
    {
      title: "跨域cookie",
      brief: "跨域cookie",
      href: "cocrcookie.html",
      dataTime: "Nov.11 2020",
    },
    {
      title: "C++ std::filesystem体验",
      brief: "C++ std::filesystem常用类和库函数，需要C++ 17",
      href: "cpp_stdfilesystem.html",
      dataTime: "Nov.10 2020",
    },
    {
      title: "React遇到的坑",
      brief: "React遇到的天坑",
      href: "react_problem.html",
      dataTime: "Nov.4 2020",
    },
    {
      title: "浏览器跨域访问的正确解决方式",
      brief: "R浏览器跨域访问的正确解决方式",
      href: "cors.html",
      dataTime: "Nov.2 2020",
    },
    {
      title: "React初体验",
      brief: "React初体验入门",
      href: "react_frist_try.html",
      dataTime: "Nov.2 2020",
    },
    {
      title: "Vue中的属性绑定",
      brief: "Vue中的属性绑定，外加一些简单的组件，及注意事项",
      href: "vuebindandcomponent.html",
      dataTime: "Oct.30 2020",
    },
    {
      title: "ASP.NET Core MVC中的 依赖注入方法",
      brief: "ASP.NET Core MVC中的 依赖注入方法",
      href: "aspnetcoremvcdependencynjection.html",
      dataTime: "Oct.29 2020",
    },
    {
      title: "ASP.NET Core MVC中的路由总结",
      brief: "ASP.NET Core MVC中的路由总结",
      href: "aspnetcoremvcroute.html",
      dataTime: "Oct.24 2020",
    },
    {
      title: "C#事件示例",
      brief: "C#事件。",
      href: "csevent.html",
      dataTime: "Oct.21 2020",
    },
    {
      title: "QT 多线程与信号槽传递对象",
      brief: "QT 多线程下使用信号槽传递对象、线程开启方法",
      href: "qt_thread_connect.html",
      dataTime: "Oct.15 2020",
    },
    {
      title: "C++拷贝构造和赋值构造探索",
      brief: "C++拷贝构造和赋值构造参数、返回值等",
      href: "cpp_operator_1011.html",
      dataTime: "Oct.10 2020, Oct.11 2020更新",
    },
    {
      title: "JavaScript异步与C#对比，Promise的作用",
      brief: "JavaScript async await Promise, C# async await Task<>",
      href: "javascript_promise.html",
      dataTime: "Oct.8 2020",
    },
    {
      title: "electron html页面引入javascript文件探索",
      brief: "script标签引入，和require引入，两种方法间的不同",
      href: "electron_html_javascrip_file_export.html",
      dataTime: "Sep.28 2020",
    },
    {
      title: "Git 基本常用命令",
      brief: "从自己的Github下载并更新代码的常用命令行收录",
      href: "first_try_git.html",
      dataTime: "Sep.20 2020",
    },
    {
      title: "node、electron调用C++、打包",
      brief: "node、electron调用C++、打包、ffi等",
      href: "electron_start.html",
      dataTime: "Sep.19 2020, Oct.9 2020更新",
    },
  ],
  repos: [
    {
      title: "electron_lite",
      brief:
        "基于electron-quick-start，加入必要依赖和修改，方便作为调取C++接口的electron引用模板",
      href: "https://github.com/eligarfzzz/electron_lite",
    },
    {
      title: "html_part",
      brief: "一些html ui组件，用于构建electron引用",
      href: "https://github.com/eligarfzzz/html_part",
    },
    {
      title: "ColorConsole",
      brief: "C++控制台输出彩色字符。对win32API的简单封装，方便使用",
      href: "https://github.com/eligarfzzz/ColorConsole",
    },
    {
      title: "HK_Control",
      brief:
        "海康威视相机SDk的简单封装。海康SDK采用C接口，使用并不方便，封装后简化了代码",
      href: "https://github.com/eligarfzzz/HK_Control",
    },
    {
      title: "Windows-Socket",
      brief:
        "基于Win32 Socket的简单封装，简化了Socket的使用，实现ServerSocekt ClientSocket",
      href: "https://github.com/eligarfzzz/Windows-Socket",
    },
  ],
};

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
      dataTime: "Sep.19 2020",
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
  ],
};

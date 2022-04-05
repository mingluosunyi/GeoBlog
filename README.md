# GeoBlog
## 第一步：新建项目
```shell
npm install @vue/cli
vue create client
```
##项目初始化
1. 封装`fetch`api到Vue。创建`plugins`目录，在该目录下创建`fetch.js`，编写插件，然后在`main.js`中导入插件。
2. 安装`moment.js`，在`src`目录下创建`utils`目录，在`utils`目录下创建`filters.js`，编写filters然后在`main.js`中导入。
3. 下载 styles 样式文件到`src`目录下。

> tips：`import * as filters from '@/utils/filters'` 是把`filters.js`文件中所有导出的内容放到`filters`对象中。
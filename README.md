JavaScript React "storybook" Demo
=================================

初始化及运行storybook，并手写了一个关于Hello的story.

整个过程：

1. 先准备一个可以正常运行的React项目
2. 安装`@storybook/cli`: `yarn add -D @storybook/cli`
3. 初始化storybook: `yarn sb init`，它会自动判断出是React项目，并安装相关依赖，然后创建所需要的文件，比如`.storybook/stories`等
4. 运行storybook: `yarn storybook`，会自动打开 <http://localhost:6006/?path=/story/welcome--to-storybook>，上面有示例组件，可以看可以点
5. 手动添加了一个Hello组件对应的story: `stories/hello.stories.js`，自动显示出来

简单使用一下，感觉还不错。

注意：

有时候会报`Error: Cannot find module '@emotion/core/package.json'`的错误，解决办法是：

```
yarn add -D @storybook/theming
```

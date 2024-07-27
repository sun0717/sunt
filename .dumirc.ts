import { defineConfig } from 'dumi';
import { join } from 'path';
const basePath = '/docs/';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@sunt-ui',
    //头部菜单栏
    nav: [
      {
        title: '规范',
        link: '/spec',
      },
      {
        title: 'components',
        link: '/components',
      },
      {
        title: 'hooks',
        link: '/hooks',
      },
    ],
    prefersColor: { default: 'light', switch: true }, //主题色
    socialLinks: {
      github: 'https://github.com/sun0717?tab=repositories',
    },
    base: basePath,
    publicPath: basePath,
    hash: true, //文档包名是否生成hash，防止浏览器缓存
    //解析目录
    resolve: {
      docDirs: ['docs'], //配置 Markdown 文档的解析目录
      atomDirs: [
        //配置子项目（例如组件、函数、工具等）Markdown 的解析目录。
        { type: 'components', dir: 'packages/components/src' },
        { type: 'hooks', dir: 'packages/hooks/src' },
        // { type: 'tools', dir: 'packages/tools/src' },
      ],
    },
    //别名：dumi 2不再感知 monorepo,需要手动配置包名到 src 的 alias。
    alias: {
      '@wjcao/components': join(__dirname, 'packages/components/src'),
      '@wjcao/hooks': join(__dirname, 'packages/hooks/src'),
      // '@wjcao/utils': join(__dirname, 'packages/tools/src'),
    },
  },
});

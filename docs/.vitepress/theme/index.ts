import DefaultTheme from 'vitepress/theme';
import '@fcc-ui/theme-chalk/src/index.scss';
import ZIcon from '@fcc-ui/components/icon';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ZIcon); // 注册组件
  },
};

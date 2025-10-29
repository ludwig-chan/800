# Vue 项目 800

这是一个使用 Vue 3 + Vite 构建的现代化单页应用程序。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Vue Router** - 官方路由管理器
- **Pinia** - 状态管理库
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化

## 项目设置

### 安装依赖
```bash
npm install
```

### 开发环境运行
```bash
npm run dev
```

### 生产环境构建
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

### 代码质量检查
```bash
npm run lint
```

### 代码格式化
```bash
npm run format
```

## 项目结构

```
├── public/                 # 静态资源
├── src/
│   ├── assets/            # 资源文件 (CSS, 图片等)
│   ├── components/        # 可复用组件
│   ├── router/           # 路由配置
│   ├── stores/           # Pinia 状态管理
│   ├── views/            # 页面组件
│   ├── App.vue           # 根组件
│   └── main.js           # 应用入口
├── index.html             # HTML 入口文件
├── vite.config.js         # Vite 配置
└── package.json           # 项目配置
```

## 开发建议

1. **组件命名**: 使用 PascalCase 命名组件文件
2. **代码风格**: 项目使用 ESLint 和 Prettier 保持代码一致性
3. **提交规范**: 建议使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范

## 浏览器支持

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 许可证

MIT License
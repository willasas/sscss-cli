# SSCSS Cli

- 使用node.js开发的scss cli工具，汇总了常用样式
## 安装

```bash
npm install -g sscss-cli
```

## 使用

```bash
sscss-cli -h
```

## 项目结构

```
sscss-cli/
├── bin/
│   └── index.js  # cli入口文件
|
├── src/           # 源码文件夹
│   ├── commands/  # 命令文件夹
│   ├── utils/     # 函数、工具文件夹
│   ├── lib/       # 与API交互或执行复杂逻辑的核心功能文件夹
|
├── package.json   # 项目配置文件
├── README.md      # 项目说明文件
```

## 协议

- 本项目遵循 MIT 协议开源

## 开发参考

-[nodejs-cli-apps-best-practices](https://github.com/lirantal/nodejs-cli-apps-best-practices)

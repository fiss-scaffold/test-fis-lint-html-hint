# test-fis-lint-html-hint

用于测试 [fis-lint-html-hint](https://github.com/fiss-plugins/fis-lint-html-hint) 的模块。

-----

## 使用方法

```cli
// 首先安装 fis3
npm install fis3 -g

```

----------


### 1. 测试使用 [HTMLHint 默认规则](https://github.com/yaniswang/HTMLHint/wiki/Usage#about-rules) 进行检测：

```cli
cd default

npm install // 本地安装 fis-lint-html-hint

npm test // 该命令将使用 fis3 命令

// 如果你安装了 fiss，可以使用下面命令进行测试
npm run test-on-fiss

```

对应 fis-conf.js ：

```javascript
fis.match('*.html', {
	lint: fis.plugin('html-hint') // 直接使用默认配置
});

```

-------------


### 2. 自定义测试规则及忽略掉的文件内容：

```cli
cd custom

npm install

npm test

// 如果你安装了 fiss，可以使用下面命令进行测试
npm run test-on-fiss
```

对应的 fis-conf.js:

```javascript
fis.match('*.html', {
	lint: fis.plugin('html-hint', {
		ignoreFiles: ['test-4-ignore.html'], // 忽略掉 test-4-ignore.html，html-hint 不对其进行校验
		rules: {
			'tag-pair': true // 标签需要闭合
		}
	})
});

```

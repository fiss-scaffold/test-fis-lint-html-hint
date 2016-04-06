// 设置 fis3 应该忽略的文件目录
fis.set('project.ignore', [
		'output/**',
		'node_modules/**'
	])

fis.match('*.html', {
	lint: fis.plugin('html-hint', {
		ignoreFiles: ['test-4-ignore.html'], // 忽略掉 test-4-ignore.html，html-hint 不对其进行校验
		rules: {
			'tag-pair': true // 标签需要闭合
		}
	})
});
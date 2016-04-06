
// 设置 fis3 应该忽略的文件目录
fis.set('project.ignore', [
		'output/**',
		'node_modules/**'
	])

fis.match('*.html', {
	lint: fis.plugin('html-hint') // 直接使用默认配置
});
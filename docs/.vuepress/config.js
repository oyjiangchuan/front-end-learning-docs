module.exports = {
	base: '/front-end-learning-docs/',
	title: '前端学习总结文档',
	head: [['meta', { name: 'referrer', content: 'no-referrer' }]],
	themeConfig: {
		sidebar: [
			'/',
			['/01', '1. 统一规范'],
			['/02', '2. 前端组件化'],
			['/03', '3. 测试'],
			['/04', '4. 构建工具'],
			['/05', '5. 自动化部署'],
			['/06', '6. 性能优化（一）'],
			['/07', '7. 性能优化（二）']
		],
		displayAllHeaders: true,
		repo: 'https://github.com/oyjiangchuan/front-end-learning-docs',
		repoLabel: '给作者的 Github 点个 star 吧！',
		smoothScroll: true
	}
}

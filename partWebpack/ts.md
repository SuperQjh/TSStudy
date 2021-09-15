1.tsconfig.json 配置
	{
		/*
			"include" 用来指定哪些ts文件需要被编译
			路径：**表示任意目录
				   *表示任意问价
		*/
		"include": {
		"./src/**/*"	
		},
		/*
			"exclude" 用来指定哪些ts文件不需要需要被编译  一般不设置
			路径：**表示任意目录
				   *表示任意问价
		*/
		"exclude": {
			"./src/hello/**/*"
		},
		//继承配置文件
		"extends": {
		
		},
		//指定需要被编译的配置文件 只在需要编译的文件少时才会用到
		"files": {
			
		},
		/*
			compilerOptions 编译器的选项
		*/
		"compilerOptions": {
			//target 用来指定ts被编译的ES的版本
			"target": "es2015",
			
			//module 指定要使用的模块化的规范
			"module": "es2015",
			
			// lib 用来指定项目中要使用的库
			"lib": ["dom"],
			
			//outDir 用来指定编译后的文件所在的目录
			"outDir": "./dist",
			
			// outFile 将代码合并成一个文件
			// 设置outFile后，所有的全局作用域中的代码会合并到同一个文件中
			// 用的不多 了解
			//"outFile": "./dist/app.js",
			
			// allowJs 是否对js文件进行编译， 默认是false
			"allowJs": false,
			
			//checkJs 是否检查js代码是否符合语法规范，默认是false
			"checkJs": false,
			
			//removeComments 是否移除注释
			"removeComments": false,
			
			// 不生成编译后的文件
			"noEmit": false,
			
			// 当有错误的时候不生成编译后的文件
			"noEmitOnError": "",
			
			//语法相关的配置
			
			// strict 所有严格检查的总开关
			"strict": true,
			
			// alwaysStrict 用来设置编译后的文件是否使用严格模式，默认为false
			// 引用模块后自动进入严格模式
			"alwaysStrict": false,
			
			// noImplicitAny 不允许隐式的any类型
			"noImplicitAny": false,
			
			// noImplicitThis 不允许不明确类型的this
			"noImplicitThis" false,
			
			// strictNullChecks 严格检查空值
			"strictNullChecks": true,
		}
	}
  2. 创建webpack ts项目
    一、npm init -y 新建package.json文件
    二、cnpm i -D webpack webpack-cli typescript ts-loader 下载包
    三、新建webpack.config.js 文件 添加相关配置
    四、新建tsconfig.json文件 添加相关配置
    五、在package.json 文件中加入打包命令
 const gulp =require('gulp'),
	   ugly =require('gulp-uglify'),
	   babel=require('gulp-babel'),
			 //webpack=require('webpack'),
	   webpack=require('gulp-webpack'),
	   jsmin=require('gulp-jsmin'),
	   rename=require('gulp-rename'),
	   connect = require('gulp-connect'),
	   opn = require('opn'),
	   eslint=require('gulp-eslint');
 //var mocha=require('gulp-mocha');

gulp.task('jsmin',function(){
	gulp.src('./client/components/**/*.js')
	.pipe(jsmin())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('minified/'));

});

gulp.task('ugly',function(){
		gulp.src('./client/components/**/*.js')
	.pipe(babel({presets:['react' , 'es2015']}))
	.pipe(ugly())
		.on('error',console.error.bind(console))
	.pipe(gulp.dest('uglified/'));
});

gulp.task('lint',()=>{

 let a=gulp.src(['./client/*.js','!node_modules/**'])
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failAfterError())
		 console.log(a);
		return a;
});
gulp.task('webpack',function(){
 gulp.src('./app.js')
	.pipe(webpack( require('./webpack.config.js')))
	.pipe(gulp.dest('build/'));

});
gulp.task('startserver', function() {
		return connect.server({
			port: 8080,
			root: './',
			fallback: 'index.html'
		});
});

gulp.task('openbrowser', function() {
		return opn('http://localhost:8080',{app:'firefox'});
});
gulp.task('default',['lint','ugly','jsmin','webpack','startserver','openbrowser']);

console.log('hala madrid');
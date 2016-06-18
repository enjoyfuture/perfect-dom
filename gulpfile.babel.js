import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import baseConfig from './webpack.config.babel';

const $ = gulpLoadPlugins();

/**
 * webpack 编译
 * @param config
 * @param callback 这里回调函数主要处理压缩编译
 */
function compiler(config, callback) {
  const webpackCompiler = webpack(config);
  // run webpack
  webpackCompiler.run((err, stats) => {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }
    $.util.log('[webpack]', stats.toString({
      colors: true
    }));

    if (callback) {
      return callback();
    }
  });
}

//清理临时和打包目录
gulp.task('clean', () => {
  return gulp.src(['dist', 'lib'])
    .pipe($.clean({force: true}));
});

//把 es6 解析为 es5
gulp.task('build:lib', () => {
  return gulp.src('src/**/*')
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('lib'));
});

// 用webpack 打包编译生成 js 文件，可以在页面中直接引用
/*eslint-disable camelcase*/
gulp.task('webpack', () => {
  let config = Object.create(baseConfig);
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ];

  //先无压缩编译
  compiler(config, () => {
    //在回调函数中再压缩编译
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          screw_ie8: true,
          warnings: false
        },
        mangle: {
          except: [] // 设置不混淆变量名
        }
      })
    );
    config.output.filename = '[name].min.js';
    compiler(config);
  })
});

gulp.task('build', ['clean'], () => {
  gulp.start('build:lib');
  gulp.start('webpack');
});

//默认任务
gulp.task('default', () => {
  gulp.start('build');
});

const gulp = require("gulp")
const coffee = require("gulp-coffee")
const consola = require("consola")
const browserSync = require("browser-sync").create()
const reload = browserSync.reload
const nodemon = require("gulp-nodemon")
const exec = require('child_process').exec

/* Default Task Called when you run
yarn watch or npm run watch
*/
gulp.task('default', cb => {
  consola.info('Starting to build files')
  exec('npm run build:fw', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
  nodemon({
    script: 'server.coffee',
    env: { 'NODE_ENV': 'development'}
  })
  consola.success('Successfully Started Back End Server')

  consola.info('Starting Front End')

  browserSync.init({
    proxy: {
      target: 'http://localhost:8000',
      ws: true
    },
    serveStatic: ['.', './public']
  })
   consola.info('Front End Listening')
   consola.success('App Set Up')

   gulp.watch('./src/example/**/*', gulp.task('build')).on('change', (file) => {
     consola.success('Reloaded due to change')
     console.log(file)
     return reload()
   });

   gulp.watch([
        './public/**/*',
        './public/*',
        './src/**/*'
   ]).on('change', (file) => {
     consola.success('Reloaded due to change')
     console.log(file)
     return reload()
   });

  cb();
})
/*
End Default task
*/
gulp.task('coffee', cb => {
  gulp.src('./src/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./lib/'));
  consola.success('Built from CoffeeScript to JavaScript');
  cb();
})

gulp.task('build', cb => {
	exec('yarn build:fw', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
  cb();
});

gulp.task('start', cb => {
  consola.info('Starting to build files');
  exec('npm run build:webpack', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  }).on('complete', ( ) => {
    return consola.success('Completed Awesome !!!')
  })

  consola.info('Serving Site');
  exec('coffee deployment.coffee', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
  consola.success('Awesome')
  cb();
})

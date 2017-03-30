const path = require('path')
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


const sources = {
  flot: [
//   'bower_components/Flot/jquery.flot.js',
//   'bower_components/Flot/jquery.flot.resize.js',
// 'bower_components/Flot/jquery.flot.fillbetween.js',
   //'bower_components/flot.orderbars/js/jquery.flot.orderBars.js',
   //'bower_components/Flot/jquery.flot.categories.js',
   //'bower_components/Flot/jquery.flot.pie.js',
   //'bower_components/Flot/jquery.flot.time.js',
   //'bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js',
   //

     "flot-legacy/jquery.flot.cust.min.js",
     "flot-legacy/jquery.flot.resize.min.js",
     "flot-legacy/jquery.flot.fillbetween.min.js",
     "flot-legacy/jquery.flot.orderBar.min.js",
     "flot-legacy/jquery.flot.pie.min.js",
     "flot-legacy/jquery.flot.time.min.js",
     "flot-legacy/jquery.flot.tooltip.min.js"
  ] ,
  datatables: [
        'bower_components/datatables.net/js/jquery.dataTables.js',
      'bower_components/datatables.net-bs/js/dataTables.bootstrap.js',
      'bower_components/datatables.net-buttons/js/dataTables.buttons.js',
      'bower_components/datatables.net-buttons/js/buttons.colVis.js',
      'bower_components/datatables.net-buttons/js/buttons.flash.js',
      'bower_components/datatables.net-buttons/js/buttons.html5.js',
      'bower_components/datatables.net-buttons/js/buttons.print.js',
      'bower_components/datatables.net-buttons-bs/js/buttons.bootstrap.js',
      'bower_components/datatables.net-colreorder/js/dataTables.colReorder.js',
      'bower_components/datatables.net-responsive/js/dataTables.responsive.js',
      'bower_components/datatables.net-responsive-bs/js/responsive.bootstrap.js',
  ]
}

const dest = {
  flot: 'flot-bundle'  ,
  datatables: 'datatables-bundle'
}

const concatBundle = (name)=>{
  return gulp.src(sources[name])
    .pipe(concat(dest[name]+'.js'))
    .pipe(gulp.dest(path.resolve(__dirname, dest[name] )))
}

const uglifyBundle = (name)=>{
  return gulp.src(sources[name])
        .pipe(uglify())
      .pipe(concat(dest[name]+'.min.js'))
    .pipe(gulp.dest(path.resolve(__dirname, dest[name] )))
}


gulp.task('concat', ()=>{
   concatBundle('flot');
 //  concatBundle('datatables')
})

gulp.task('uglify', ()=>{

   uglifyBundle('flot');
// uglifyBundle('datatables')
})

gulp.task
('default', ['concat', 'uglify'])

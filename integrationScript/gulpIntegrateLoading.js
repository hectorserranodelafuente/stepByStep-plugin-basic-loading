
const { task,series,src, dest,parallel } = require('gulp');
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const csso = require('gulp-csso')
const rename=require('gulp-rename')
const clean = require('gulp-clean')
const gulp = require('gulp')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const fsExtra= require('fs-extra')
//const del = require('del')
const htmlmin = require('gulp-htmlmin');
const viewsDeclaration = require(path.join(__dirname,'..','/modules/views/viewsDeclaration.js'))
const _env = require(path.join(__dirname,'..','env.js'))



task('integrateParticularLoading',function(){
    //...
    fsExtra.copySync(path.join(__dirname,'..',`/node_modules/${_env.development.nameLoadingNodeModules}/public/logicLoading.js`), path.join(__dirname,'..','/public/js/logicLoading.js'))
    fsExtra.copySync(path.join(__dirname,'..',`/node_modules/${_env.development.nameLoadingNodeModules}/front`), path.join(__dirname,'..',`/ejs/view8`))
    fsExtra.copySync(path.join(__dirname,'..',`/node_modules/${_env.development.nameLoadingNodeModules}/img/waitLoading.gif`), path.join(__dirname,'..',`/public/img/waitLoading.gif`))
})


exports.integrateLoading = series('integrateParticularLoading')
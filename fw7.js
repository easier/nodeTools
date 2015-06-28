#!/usr/bin/env node
require('shelljs/global');

/*
一个生成基于 framework7 项目结构的脚本
 */

// 建立一个文件夹
var dir = process.argv[2];
mkdir('-p',dir);

cd(dir);
mkdir('-p','src');
mkdir('-p','www');


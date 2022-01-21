//commonjs模块化导入
const {add,mul} = require('./js/mathUtils.js');

console.log(add(20,30));

console.log(mul(20,30));


//es6模块化导入
import {name,bingqi,car} from "./js/info"

console.log("姓名："+name+",兵器:"+bingqi+",坐骑:"+car)


require('./css/common.css')

require('./css/normal.less')

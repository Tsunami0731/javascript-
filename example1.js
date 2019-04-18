var name,renshu//赋值
name="火箭少女101"
renshu=11
alert(name)
var theCwei="美岐"//驼峰格式
alert("火箭少女的C位是"+theCwei)//拼接字符
var second="吴宣仪"
alert("\"火箭少女第二名是——"+second+"\"")//前方插入\以便再字段中输入引号
var piaoshu2=183754.303
alert(piaoshu2)//显示负数
var C=false
alert(C)
var Dier=true
alert(Dier)//布尔值
var racketGirl=Array(4)
racketGirl[0] = "美岐"
racketGirl[1] = "宣仪"
racketGirl[2] = "超越"
racketGirl[3] = "大娟"
racketGirl[4] = "yamy"
racketGirl[5] = "小七"
racketGirl[6] = "紫宁"
racketGirl[7] = "sunnee"
racketGirl[8] = "紫婷"
racketGirl[9] = "傅菁"
racketGirl[10] = "彩虹"
alert(racketGirl[2])//数组的第一种方式,下标从0开始
var racketgirl= Array("美岐","宣仪","超越","sunnee")
alert(racketgirl[3])//数组的第二种方式
var top3=[1,2,"超越"]
alert(top3[2])//数组的数据模型可以有很多种
var yuzhoushaonv=["美岐","宣仪"]
var Top3=[yuzhoushaonv,"超越"]
alert(Top3[0])//数组的元素可以是另一个数组
var meiqidexinxi=Object()
meiqidexinxi.name="美岐"
meiqidexinxi.palce=1
meiqidexinxi.style="美岐是全能型"
chengyuanxinxi=Array()
chengyuanxinxi[0]=meiqidexinxi
alert(chengyuanxinxi[0].name)
alert(chengyuanxinxi[0].palce)
alert(chengyuanxinxi[0].style)//对象的处理方法
top3renshu=renshu-8
alert(top3renshu)//算术
kuaXuanyi="宣仪的名次是"
xuanyiPlace=2
kuaXuanyi+=xuanyiPlace
alert(kuaXuanyi)//+=快捷拼接赋值
if (xuanyiPlace>meiqidexinxi.palce){
    alert("美岐名次高于宣仪")
}//条件语句
if (renshu<xuanyiPlace){
    alert("错了")
}else{
    alert("对啦！")
}//if-else语句
if (xuanyiPlace==chengyuanxinxi[0].palce){//相等符号“==”，同时还有不等于“！=”，严格等于“===”
    alert("美岐和宣仪都是C位")
}else{
    alert("美岐才是C位，宣仪不是")
}
if (xuanyiPlace!=1&&xuanyiPlace<11)
    alert("宣仪虽然没拿到第一，但也进了组合")//逻辑与：&&
if (xuanyiPlace!==9||xuanyiPlace<11)
     alert("再说一遍，宣仪虽然没拿到第一，但也进了组合")//逻辑或：||
if (!(xuanyiPlace>11))
    alert("骗你的")//逻辑非：！
var chengyuanshuliang=1
while(chengyuanshuliang<12){
    alert(chengyuanshuliang+"名是"+racketGirl[chengyuanshuliang-1])
chengyuanshuliang++
}//while循环语句
do{
    alert(chengyuanshuliang+"名是"+racketGirl[chengyuanshuliang-1])
    chengyuanshuliang++
}while(chengyuanshuliang<13)//do...while循环
    alert("再说一遍她们的名字：")
for (var chengyuanrenshu=0;chengyuanrenshu<racketGirl.length;chengyuanrenshu++){
    alert(racketGirl[chengyuanrenshu])
}


























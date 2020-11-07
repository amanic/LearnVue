var modulea = (function () {

    // 如果不通过这种module的方式去使用 ，nameflag等属性会互相影响作用于，
    // 这里通过var一个module，然后在return一个obj的方式，将flag赋值出去，别的js代码可以通过module来找到flag的引用
    var obj = {};
    var name = '小明';
    var age = 23;

    function sum(num1, num2) {
        console.log(num1 + num2);
    }

    var flag = true;

    if (flag) {
        sum(1, 2);
    }
    obj.age = age;
    obj.flag = flag;
    return obj;

})()
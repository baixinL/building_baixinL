const fn = (x,y)=>x*y;

class Demo {
    test(){
        // eslint-disable-next-line no-console
        console.log("demo func test");

    }
}
exports.module.fn = fn;
exports.module.Demo = Demo;

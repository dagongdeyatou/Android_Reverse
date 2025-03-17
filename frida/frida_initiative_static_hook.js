function exec_frida_initiative_static_hook(){
    var result = Java.use("com.xiaoeryu.lesson4_4.MainActivity").secret2();
    console.log(result);
}

function main(){
    exec_frida_initiative_static_hook()
}

setImmediate(main)
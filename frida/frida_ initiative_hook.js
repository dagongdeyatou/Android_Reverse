function exec_frida_initiative_hook(){
    Java.choose("com.xiaoeryu.lesson4_4.MainActivity",{
        onMatch:function(instance){
            console.log("found instance: ", instance)
            console.log("found instance: ", instance.secret())
        },onComplete:function(){}
    })
}

function main(){
    exec_frida_initiative_hook()
}

setImmediate(main)
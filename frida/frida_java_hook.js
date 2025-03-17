function exec_frida_hook_java(){
    Java.perform(function(){
        console.log("loading success ====== attack")
        const dgyatou = Java.use('com.example.junior.util.Arith');
        dgyatou.add.overload('java.lang.String').implementation = function(a,b){
            console.log("method coming success ====== attack")
            const result = this.add(a,b)
            console.log(`method exec result ====== ${result}`)
            return result
        }
    })
}



function main() {
    exec_frida_hook_java();
}

setImmediate(main)


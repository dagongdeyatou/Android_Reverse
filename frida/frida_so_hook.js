function exec_frida_hook_so(){
    Java.perform(function(){
        console.log("loading success ====== attack")
        var nativePointer = Module.findExportByName("librong360.so", "EVP_EncryptUpdate"); 
        if (!nativePointer){return}
        Interceptor.attach(nativePointer, {
            onEnter: function (args) {
                console.log("method coming success ====== attack")
                console.log('==a', args[0]);
                print_dump(args[0], 500);
                console.log('==b', args[1]);
                print_dump(args[1], 10);
                console.log('==c', args[2]);
                print_dump(args[2], 100);
                console.log('==d', args[3]);
                print_dump(args[3], 100);
                console.log('==e', args[4]);
                print_dump(args[4], 100);
    
            },
            onLeave: function (retval) {
                console.log("method outing success ====== attack")
                console.log('result', retval);
                // print_dump(retval, 500);
                // print_dump(retval, 100);
                return retval
    
            }
        });
    
    })
}


function main() {
    exec_frida_hook_so();
}

setImmediate(main)
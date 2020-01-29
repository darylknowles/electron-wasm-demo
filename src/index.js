const electron = require('electron');
const fs = require('fs');
const loader = require("@assemblyscript/loader");

const start = async () => {

    console.log('***start***');

    const imports = {
        env: {
            abort(_msg, _file, line, column) {
                console.error("abort called at:" + line + ":" + column);
            }
        },
        imports: {
            consoleLog: value => console.log(value)
        }
    };

    const myModule = await loader.instantiate(
        fs.readFileSync(__dirname + "/bin/test.wasm"),
        imports
    )

    console.log(myModule);

    console.log(myModule.magicnumber.value);

    console.log(myModule.add(11, 12));

    console.log(myModule.__getString(myModule.hello()));
    

}
start(); 
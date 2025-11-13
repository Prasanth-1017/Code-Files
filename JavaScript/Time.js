const time = setInterval(() => {
    const object = new Date();
    const hour = String(Obj.getHours()).padStart(2, '0');
    const minute = String(Obj.getMinutes()).padStart(2, '0');
    const second = String(Obj.getSeconds()).padStart(2, '0');
    process.stdout.write(`\r${hour}:${minute}:${second}`);
}, 1000)

setTimeout(() => {
    clearInterval(time);
}, 10000)
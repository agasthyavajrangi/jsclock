setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hourdiv.style.transform = `rotate(${hrrotation}deg)`;
    mindiv.style.transform = `rotate(${mrotation}deg)`;
    secdiv.style.transform = `rotate(${srotation}deg)`;
}, 1000);
var date,h,m,s;
setInterval(() => {
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    h_rotate = 30*h + m /2;
    m_rotate = 6*m;
    s_rotate = 6*s;

    hour.style.transform = `rotate(${h_rotate}deg)`;
    min.style.transform = `rotate(${m_rotate}deg)`;
    sec.style.transform = `rotate(${s_rotate}deg)`;
},1000);
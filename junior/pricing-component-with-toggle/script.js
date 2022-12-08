let setAnnually = document.getElementById('setAnnually');
let setMonthly= document.getElementById('setMonthly');
let set = document.getElementById('set');

set.addEventListener('click', () => {
    for(i=0;i<3;i++) {
        if(document.querySelectorAll('.annually')[i].style.display == 'flex') {
            document.querySelectorAll('.annually')[i].style.display = 'none'; 
            document.querySelectorAll('.monthly')[i].style.display = 'flex';
            document.querySelector('.set').style.justifyContent = 'flex-end';
        } else {
            document.querySelectorAll('.annually')[i].style.display = 'flex';
            document.querySelectorAll('.monthly')[i].style.display = 'none';
            document.querySelector('.set').style.justifyContent = 'flex-start';
        }
    }
});

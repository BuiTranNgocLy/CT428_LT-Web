function binhchon(){
    dschon.innerHTML = document.forms[0].hoten.value;
    for(i=0;i<document.forms[0].gioitinh.length;i++){
        if(document.forms[0].gioitinh[i].checked){
            dschon.innerHTML += " ("+ document.forms[0].gioitinh[i].value +")";
            break;
        }
    }

    dschon.innerHTML += "<br>-TP yêu thích:" ;
    for(i=0;i<document.forms[0].place.length;i++){
        if(document.forms[0].place[i].checked){
            dschon.innerHTML += document.forms[0].place[i].value+", ";
       
        }
    }
    i=document.forms[0].thichnhat.selectedIndex;
    thichnhat=document.forms[0].thichnhat[i].value;

    dschon.innerHTML += "<br>-" + "TP thích nhất: " + thichnhat;
}

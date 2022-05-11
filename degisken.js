function merhaba(){
    let ad,soyad,yas;

     ad=document.getElementById("txtad").value;
     soyad=document.getElementById("txtsoyad").value;
     yas=document.getElementById("txtyas").value;
       
       document.getElementById("sonucBaslik").innerHTML="";

     if(yas<18){
         sonucBaslik.innerHTML="Sitemize üye olmak için 18 yaşından büyük olmalısınız.";
     }   

     else{
         sonucBaslik.innerHTML="Sitemize üye olabilisiiz.";
     }

}


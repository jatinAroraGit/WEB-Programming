/*////////////
WEB222 
ASSIGNMENT 5
JATIN ARORA 
(136897162)
////////////*/
function validateForm(){
    var user = userValidate();//username validation
    var phn = phnValidate();//phonenumebr validation
    
    var pass = passwordValidation();//password validation
    var verify = verifyValidate()//confirm password validation
   
    var street=streetvalid();//validate street
    var city=cityvalid();//validate city
    var code=validZIP();// validate canadian zip
    if(user && phn && pass && verify  && street && city && code){
        return true;
    }
    else{
        return false;
    }
}
//function defintions
function userValidate() {
    var val = document.querySelector("#name").value;
  var f=0;
    for(var i=0;i<=9;i++)
    {
        if(val[0]==i)
        f=1;
    }
    if (val.trim().length==0 || val.trim().length<6) {
        var msg = document.getElementById('msg2');      
        document.getElementById("name").focus();
        document.getElementById('msg2').innerHTML="UserName must be atleast 6 characters long";
       
        return false;
    }
    
    else if(f==1){
          var msg = document.getElementById('msg2');      
        document.getElementById("msg2").innerHTML="First character must not be an integer";
        document.getElementById("name").focus();
        return false;
    }
    else
    {
         document.getElementById('msg2').innerHTML="";
        return true;
    }
    
}



function phnValidate()  
{  
  var val = document.querySelector("#pnum").value;    
  var chk;
  var tel = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;  
  chk = document.getElementById('pnum').value.substring(0, 3);
  if(tel.test(val) && val.trim().length>=10 && chk >= 100 && chk <=999){  
        document.getElementById('msg4').innerHTML=""
        return true;  
  }  
  else if(val.trim().length<10){  
        document.getElementById('msg4').innerHTML ="<b> X</b> The phone number must be 10 digit long.";  
        document.getElementById('pnum').focus();
        return false;  
  } 
  else{
        document.getElementById('msg4').innerHTML ="<b></b> The area code of phone number 999-999-9999 can't be all zeros.";  
        document.getElementById('pnum').focus();
        return false;  
  } 
}  

function passwordValidation(){

    var val = document.querySelector("#password").value;
    var  character = /[a-z]/;
    var  uppercase = /[A-Z]/; 
    var num = /[0-9]/;
    var blank = /[ ]/;
var t=0;
    for(var i=0;i<=9;i++)
    {
        if(val[0]==i)
        t=1;
    }

     if( character.test(val)!=true){
        document.getElementById('msg0').innerHTML ="Password Must contain at least one lower case.";  
        document.getElementById('password').focus(); 
        return false;
    }
else if(t==1){
          var msg = document.getElementById('msg0');      
        document.getElementById("msg0").innerHTML="First letter must be a character";
        document.getElementById("password").focus();
        return false;
    }
    else if( uppercase.test(val)!= true){
        document.getElementById('msg0').innerHTML ="Password Must contain at least one upper case.";  
        document.getElementById('password').focus(); 
        return false;
    }

    else if(num.test(val)!= true){
        document.getElementById('msg0').innerHTML ="Password Must contain at least one number.";  
        document.getElementById('password').focus(); 
        return false;
    }

    else if( character.test(val) &&  uppercase.test(val) && val.length>7 && num.test(val) && blank.test(val)==false){
        document.getElementById('msg0').innerHTML="";
        return true;  
    }

    else if(val.trim().length<8 || val.length==0){
        document.getElementById('msg0').innerHTML ="Password must be minimum 8 characters long.";  
        document.getElementById('password').focus(); 
        return false;
    }

    else{
        document.getElementById('msg0').innerHTML ="Password must be Alphanumeric.";  
        document.getElementById('password').focus();
        return false;  
    } 
  
}

function verifyValidate(){
    if(document.getElementById('password').value == document.getElementById('repassword').value){
        document.getElementById('msg1').innerHTML="";
        return true;
    }
    else if(document.getElementById('password').value ==""){
        document.getElementById('msg1').innerHTML ="Password and Confirm Password must be same and cannot empty.";  
        document.getElementById('password').focus();
    }
    else{
        document.getElementById('msg1').innerHTML ="Password and Confirm Password must be same.";  
        document.getElementById('repassword').focus();
        return false;
    }
}


function streetvalid()
{
    var val=document.querySelector("#str").value;
       if(val.match(/^\d+$/))
       {
           document.getElementById('msg5').innerHTML="Numbers Not Allowed. Use only Alpahbets";
        document.getElementById('str').focus();
        return false;
       

    }
    else{
        document.getElementById('msg5').innerHTML="";
    return true;
    }
}
function cityvalid()
{
    var val=document.querySelector("#city").value;
       if(val.match(/^\d+$/))
       {
           document.getElementById('msg6').innerHTML="Only Alpahabets are Allowed";
        document.getElementById('city').focus();
        return false;
       

    }
    else{
        document.getElementById('msg6').innerHTML="";
    return true;
    }
}
function validZIP(){
    var val=document.querySelector("#zip").value;
      var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
    if (regex.test(val))
    
    {
          document.getElementById('msg7').innerHTML="";
        return true;
    }
    else{
         document.getElementById('msg7').innerHTML="ZIP code is Invalid. Must Be according to the format A1A1A1";
       document.getElementById('zip').focus();
        code.focus();
        return false;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//JS for catalog.html
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/************************************************* *
WEB ASSIGNMENT 5 
JATIN ARORA (136897162)
***************************************************/
var albums = [
  {
    image: { src1: "http://cps-static.rovicorp.com/3/JPG_500/MI0004/159/MI0004159761.jpg?partner=allrovi.com",
    src2:"http://maddiewilsonmusic.com/wp-content/uploads/2016/10/spotify-button.png",
    src3:"https://open.spotify.com/album/2ODvWsOgouMbaA5xf0RkJe", alt: "Bella", width: 180, height: 140, wide:145, high:40 },
    name: "Starboy",
    release: 2016,
    description: "Artist: TheWeeknd  <br> Genre: RnB ",
   
    type: "album"
  }, {
    image: { src1: "http://cps-static.rovicorp.com/3/JPG_500/MI0004/054/MI0004054244.jpg?partner=allrovi.com",
    src2:"http://maddiewilsonmusic.com/wp-content/uploads/2016/10/spotify-button.png",
    src3:"https://open.spotify.com/album/2yIwhsIWGRQzGQdn1czSK0", alt: "Bella", width: 180, height: 140, wide:145, high:40 },
    name: "Views",
    release: 2016,
    description: "Artist: Drake <br> Genre: Hip-Hop",
    type: "album"
  }, {
    image: { src1: "http://cps-static.rovicorp.com/3/JPG_500/MI0004/194/MI0004194284.jpg?partner=allrovi.com", 
    src2:"http://maddiewilsonmusic.com/wp-content/uploads/2016/10/spotify-button.png",
    src3:"https://open.spotify.com/album/4JR29CNW14Zc4Z5vflxkoJ", alt: "Bella", width: 180, height: 140, wide:145, high:40 },
    name: "NAV",
    release: 2017,
    description: "Aritist: Nav <br> Genre: Rap",
    type: "album"
  }, {
    image: { src1: "http://cdn-s3.allmusic.com/release-covers/500/0004/720/0004720536.jpg",
     src2:"http://maddiewilsonmusic.com/wp-content/uploads/2016/10/spotify-button.png",
     src3:"https://open.spotify.com/album/2HaqChIDc5go3qxVunBDK0", alt: "Bella", width: 180, height: 140, wide:145, high:40 },
    name: "Funk Wav Bounce Vol 1",
    release: 2017,
    description: "Artist: Calvin Harris <br> Genre:Electronic",
    type: "album"
  }, {
    image: { src1: "http://cdn-s3.allmusic.com/release-covers/500/0003/570/0003570382.jpg", 
    src2:"http://maddiewilsonmusic.com/wp-content/uploads/2016/10/spotify-button.png",
    src3:"https://open.spotify.com/album/4TjPTVBmdyaowp08j2toa0", alt: "Bella", width: 180, height: 140, wide:145, high:40 },
    name: "18 Months",
    release: 2016,
    description: "Artist: Calvin Harris <br> Genre:Electronic",
    type: "album"
  }, {
    image: { src1: "http://cps-static.rovicorp.com/3/JPG_500/MI0002/023/MI0002023438.jpg?partner=allrovi.com",
     src2:"http://maddiewilsonmusic.com/wp-content/uploads/2016/10/spotify-button.png",
     src3:"https://open.spotify.com/album/7u6zL7kqpgLPISZYXNTgYk", alt: "Bella", width: 180, height: 140, wide:145, high:40 },
    name: "ALIVE 2007",
    release: 2007,
    description: "Artist: Daft Punk <br> Genre:Electronic",
    type: "album"
  }, {
    image: { src1: "http://cps-static.rovicorp.com/3/JPG_500/MI0004/188/MI0004188675.jpg?partner=allrovi.com",
     src2:"http://maddiewilsonmusic.com/wp-content/uploads/2016/10/spotify-button.png",
     src3:"https://open.spotify.com/album/0XAIjjN5qxViVS0Y5fYkar", alt: "Bella", width: 180, height: 140, wide:145, high:40 },
    name: "I Decided.",
    release: 2016,
    description: "Artist:Big Sean <br> Genre:Rap",
    type: "album"
  }, {
    image: { src1: "http://cps-static.rovicorp.com/3/JPG_500/MI0003/673/MI0003673550.jpg?partner=allrovi.com", 
    src2:"http://maddiewilsonmusic.com/wp-content/uploads/2016/10/spotify-button.png",
    src3:"https://open.spotify.com/album/1JVBHEnaaQeiu0fj5VVzFA", alt: "Bella", width: 180, height: 140, wide:145, high:40 },
    name: "Because The Internet",
    release: 2013,
    description: "Artist: Childish Gambino <br> Genre: Rap",
    type: "album"
  }, {
    image: { src1: "http://cps-static.rovicorp.com/3/JPG_500/MI0004/269/MI0004269467.jpg?partner=allrovi.com",
     src2:"http://maddiewilsonmusic.com/wp-content/uploads/2016/10/spotify-button.png",
     src3:"https://open.spotify.com/album/7xYiTrbTL57QO0bb4hXIKo", alt: "Bella", width: 180, height: 140, wide:145, high:40 },
    name: "Lust For Life",
    release: 2017,
    description: "Artist: Lana Del Rey <br> Genre: Pop",
    type: "album"
  }, {
    image: { src1: "http://cdn-s3.allmusic.com/release-covers/500/0004/555/0004555535.jpg", 
    src2:"http://maddiewilsonmusic.com/wp-content/uploads/2016/10/spotify-button.png",
    src3:"https://open.spotify.com/user/1242748003/playlist/0CL7tx2cQazXeg51fwjpN0", alt: "Bella", width: 180, height: 140, wide:145, high:40 },
    name: "Lemonade",
    release: 2016,
    description: "Artist: Beyonce <br> Genre: R&B",
    type: "album"
  }, {
    image: { src1: "http://cps-static.rovicorp.com/3/JPG_500/MI0004/124/MI0004124654.jpg?partner=allrovi.com", 
    src2:"http://maddiewilsonmusic.com/wp-content/uploads/2016/10/spotify-button.png",
    src3:"https://open.spotify.com/album/3wBabo4pmzsYjALMSKY7Iq", alt: "Bella", width: 180, height: 140, wide:145, high:40 },
    name: "Illuminate",
    release: 2016,
    description: "Aritist: Shawn Mendes <br> Genre : Pop",
    type: "album"
  }, {
    image: { src1: "http://cps-static.rovicorp.com/3/JPG_500/MI0004/245/MI0004245641.jpg?partner=allrovi.com",
     src2:"http://maddiewilsonmusic.com/wp-content/uploads/2016/10/spotify-button.png",
     src3:"https://open.spotify.com/album/0RprDFd8KN06rt0jyKXBsC", alt: "Bella", width: 180, height: 140, wide:145, high:40 },
    name: "Melodrama",
    release: 2017,
    description: "Artist: Lorde <br> Genre: R&B",
    type: "album"
  }
];





var filterAgeMax = Number.MAX_VALUE; 

var filterAgeMin = 0; 
var filterType = ""
window.onload=function(){
    viewAlbum();
}
function loadTable(){
     var contain = document.querySelector("#main-table-body");
      contain.innerHTML="";
      var i;
      for(i=0;i<albums.length;i++)
      {
        
         
                var row_ = document.createElement('tr');
                var col_ = document.createElement('td');
                var media_ = document.createElement('img');
                media_.setAttribute("src", albums[i].image.src1);
                media_.setAttribute("width",albums[i].image.width);
                media_.setAttribute("height",albums[i].image.height);
                media_.setAttribute("alt",albums[i].image.alt);
              
                 var media_2 = document.createElement('img');
                media_2.setAttribute("src", albums[i].image.src2);
                media_2.setAttribute("width",albums[i].image.wide);
                media_2.setAttribute("height",albums[i].image.high);
                media_2.setAttribute("alt",albums[i].image.alt);
                col_.appendChild(media_);
                row_.appendChild(col_);

                var col2 = document.createElement('td');
                row_.appendChild(col2);
                var head = document.createElement('h2');
                col2.appendChild(head);
                var name_ = document.createTextNode(""+albums[i].name+"");
                head.appendChild(name_);
                var p_ = document.createElement('p');
                var div = document.createElement('span');
                p_.innerHTML = albums[i].description;
                  var lnk=document.createElement('a');
                var adr=albums[i].image.src3;
                lnk.href=adr;
                lnk.appendChild(media_2);
                
                col2.appendChild(p_);
                var year_ = document.createTextNode("Year: " + albums[i].release + "");
                ///////////////////*
                var p2_=document.createElement('p');
                p2_.appendChild(lnk);
             
                /////////////////
                div.appendChild(year_);
                div.appendChild(p2_);
                col2.appendChild(div);
                contain.appendChild(row_);
              }
            
    }


function viewAlbum(){
    filterType="";

    loadTable();
}




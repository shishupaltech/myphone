// *********************** for button zero *****************************

var a=new Audio('music/Bike_stunt_&_racing_video_with_i_am_a_rider_2019.mp3');
var b=new Audio('music/Billie_Eilish_-_bad_guy_(with_Justin_Bieber)_[Audio] - Copy.mp3');
var c=new Audio('music/Camila_Cabello_-_Havana_(Audio)_ft._Young_Thug(128k).m4a');
var d=new Audio('music/Dil_Todne_Se_Pehle_REMiX__Jass_Manak__Goldie_Khristi_x_DJ_Mavis__[_PUNU_](48k) - Copy (3).mp3');
var e=new Audio('music/Dillon_Francis_-_Get_Low_ft._DJ_Snake_(Lyrics).mp3');
var f=new Audio('music/DJ_Snake_-_Magenta_Riddim - Copy.mp3');
var g=new Audio('music/DJ_Snake_-_Middle_(Lyrics)_ft._Bipolar_Sunshine.mp3');
var h=new Audio('music/DJ_Snake,_J._Balvin,_Tyga_-_Loco_Contigo_(Lyrics)_Letra - Copy.mp3');
var i=new Audio('music/Charlie_Puth_-_Attention_[Official_Video](128k).m4a');
var j=new Audio('music/Coldplay_-_Hymn_For_The_Weekend_(Official_Video)(128k) - Copy.m4a');
document.getElementById("zero").addEventListener("click", zero=()=>{
    z=0
    j.pause()
    i.pause()
    h.pause()
    g.pause()
    f.pause()
    e.pause()
    d.pause()
    c.pause()
    b.pause()
    a.play()
    if (z==0){
        document.getElementById("zero").addEventListener("click", pause=()=>{
            a.pause()
        });
        document.getElementById("zero").addEventListener("click", start=()=>{
            a.play()
        });
    }
});


// ********************** for button one *******************************

document.getElementById("one").addEventListener("click", one=()=>{
    y=1
    a.pause()
    j.pause()
    i.pause()
    h.pause()
    g.pause()
    f.pause()
    e.pause()
    d.pause()
    c.pause()
    b.play()
    if(y==1){
        document.getElementById("one").addEventListener("click", pause=()=>{

            b.pause()
        });
        document.getElementById("one").addEventListener("click", start=()=>{
            b.play()
        });
    }

});
// ********************** for button two *******************************

document.getElementById("two").addEventListener("click", two=()=>{
    x=2
   
    a.pause()
    b.pause()
    j.pause()
    i.pause()
    h.pause()
    g.pause()
    f.pause()
    e.pause()
    d.pause()
    c.play()
    if(x==2){
        document.getElementById("two").addEventListener("click", pause=()=>{

            c.pause()
        });
        document.getElementById("two").addEventListener("click", start=()=>{
            c.play()
        });
    }

});
// ********************** for button three *******************************

document.getElementById("three").addEventListener("click", three=()=>{
    w=3
    a.pause()
    b.pause()
    c.pause()
    j.pause()
    i.pause()
    h.pause()
    g.pause()
    f.pause()
    e.pause()
    d.play()
    
    if(w==3){
        document.getElementById("three").addEventListener("click", pause=()=>{

            d.pause()
        });
        document.getElementById("three").addEventListener("click", start=()=>{
            d.play()
        });
    }

});
// ********************* for button four **********************************

document.getElementById("four").addEventListener("click", four=()=>{
    v=4
  
    a.pause()
    b.pause()
    c.pause()
    d.pause()
    j.pause()
    i.pause()
    h.pause()
    g.pause()
    f.pause()
    e.play()
    if(v==4){
        document.getElementById("four").addEventListener("click", pause=()=>{

            e.pause()
        });
        document.getElementById("four").addEventListener("click", start=()=>{
            e.play()
        });
    }

});
// ********************* for button five **********************************

document.getElementById("five").addEventListener("click", five=()=>{
    u=5
    a.pause()
    b.pause()
    c.pause()
    d.pause()
    e.pause()
    j.pause()
    i.pause()
    h.pause()
    g.pause()
    f.play()
    if(u==5){
        document.getElementById("five").addEventListener("click", pause=()=>{

            f.pause()
        });
        document.getElementById("five").addEventListener("click", start=()=>{
            f.play()
        });
    }

});
// ********************* for button six **********************************

document.getElementById("six").addEventListener("click", six=()=>{
    t=6
    a.pause()
    b.pause()
    c.pause()
    d.pause()
    e.pause()
    f.pause()
    j.pause()
    i.pause()
    h.pause()
    g.play()
    if(t==6){
        document.getElementById("six").addEventListener("click", pause=()=>{

            g.pause()
        });
        document.getElementById("six").addEventListener("click", start=()=>{
            g.play()
        });
    }

});
// ********************* for button saven **********************************

document.getElementById("saven").addEventListener("click", saven=()=>{
    s=7
    a.pause()
    b.pause()
    c.pause()
    d.pause()
    e.pause()
    f.pause()
    g.pause()
    j.pause()
    i.pause()
    h.play()
    if(s==7){
        document.getElementById("saven").addEventListener("click", pause=()=>{

            h.pause()
        });
        document.getElementById("saven").addEventListener("click", start=()=>{
            h.play()
        });
    }

});
// ********************* for button eight **********************************

document.getElementById("eight").addEventListener("click", eight=()=>{
    r=8
    a.pause()
    b.pause()
    c.pause()
    d.pause()
    e.pause()
    f.pause()
    g.pause()
    h.pause()
    j.pause()
    i.play()
    if(r==8){
        document.getElementById("eight").addEventListener("click", pause=()=>{

            i.pause()
        });
        document.getElementById("eight").addEventListener("click", start=()=>{
            i.play()
        });
    }

});
// ********************* for button nine **********************************

document.getElementById("nine").addEventListener("click", nine=()=>{
    p=9
    a.pause()
    b.pause()
    c.pause()
    d.pause()
    e.pause()
    f.pause()
    g.pause()
    h.pause()
    i.pause()
    j.play()
    if(p==9){
        document.getElementById("nine").addEventListener("click", pause=()=>{

            j.pause()
        });
        document.getElementById("nine").addEventListener("click", start=()=>{
            j.play()
        });
    }

});

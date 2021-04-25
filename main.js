menu_list=["Chicken Tandoori Pizza","Veg Supreme Pizza","Panner Tikka Pizza","Deluxe Veggie Pizza","Veg Extra-Vaganza Pizza"];

function getmenu(){

    var piza;
    piza="<ol class='menulist'>";
    menu_list.sort();

    for(var display=0;display<menu_list.length;display++){
        piza=piza+"<li>"+ menu_list[display]+"</li>";
    }
    piza=piza+"</ol>"
    document.getElementById("display_menu").innerHTML=piza;}

    function add_item(){
        var store1;
        var item;
        item=document.getElementById("add_item").value;
        menu_list.push(item);
        menu_list.sort();
        store1="<section class='cards'>";
        for(var display1=0;display1<menu_list.length;display1++){
            store1=store1+"<div class='card'>"+"<img src='images/pizzaImg.png'>"+ menu_list[display1]+"</div>";
        }
        store1=store1+"</section>";
       document.getElementById("display_added_menu").innerHTML=store1;}
    
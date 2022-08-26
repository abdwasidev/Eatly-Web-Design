function buttonmenu() {
    const menu_item = [
        "Breakfast Recipes", 
        "Low-calorie Recipes", 
        "Holiday Recipes", 
        "Restriction Recipes",  
        "Afternoon Recipes", 
        "Night Recipes", 
        "Sport Recipes"
    ];

    var print = "";
    for (var i = 0; i < menu_item.length; i++) {
        print += "<button>" + menu_item[i] + "</button>";
    }
    return print;

}
document.getElementById('button-menu').innerHTML = buttonmenu();

function textfooter(){
    const footer_item = [
        "Submision Dicoding - Belajar Dasar Pemrograman Web"
    ];

    var print = "";
    for (var i = 0; i < footer_item.length; i++) {
        print += "<p>" + footer_item[i] + "</p>";
    }
    return print;

}
document.getElementById('footer').innerHTML = textfooter();
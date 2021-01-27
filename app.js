

var maldives = prompt('what do you want to visit in the maldives put on of this choices Maafushi or Biyadhoo or Fihalhohi to have more info about this place ');
document.write('<h1>'+maldives+'</h1>')
if (maldives=='Maafushi'){
document.write('<h4>'+'<em>'+'Maafushi is one of the biggest and most popular local islands in Maldives. It is located in South Male Atoll just 27 km away from Male. The size is 1270 x 265 m. The island itself has an elongated form. 2700 people live on the island. It’s amazing how so many people can live on such a small piece of land, but as on other islands, you won’t feel that the place is overcrowded.'+'</em>'+'</h4>');

document.write('<img src="images/Maafushi.jpg"/>')  
}else if(maldives=='Biyadhoo'){
    document.write('<h4>'+'<em>'+'There’s no pretence about Biyadhoo – if you’re looking for a simple escape at a good value, established resort with a wonderful natural environment, this is it. It’s why many of the guests here return year after year. The resort has recently improved many of its facilities, with changes including free Wi-Fi, twice-weekly snorkelling trips, as well as a refreshment of the rooms, reception, restaurant and bar.'+'</em>'+'</h4>');
    document.write('<img src="images/Biyadhoo.jpg"/>')     
}else if (maldives=='Fihalhohi'){
        document.write('<h4 font>'+'<em>'+'Come to a place where a captivating view of the Indian Ocean and the natural tropical beauty of the island is a constant setting. Fihalhohi Island Resort, Maldives is the absolute paradise island escape. A truly idyllic spot where mind and body are reinvigorating, and where the sands of time stand still.'+'</em>'+'</h4>');
        document.write('<img src="images/Fihalhohi.jpg"/>') 
    }
    else{
        alert('wrong insert')
    }


 
var color= prompt('insert a color');

function changeBackground(color) {
    document.body.style.background = color;
 }
if (color=='red'){
    window.addEventListener("load",function() { changeBackground('red') });
     
}else if(color=='yellow'){
    window.addEventListener("load",function() { changeBackground('yellow') });
}else if(color=='blue'){
    window.addEventListener("load",function() { changeBackground('blue') });
}else if(color=='green'){
    window.addEventListener("load",function() { changeBackground('green') });
}else if(color=='pink'){
    window.addEventListener("load",function() { changeBackground('pink') });
}else if(color=='orange'){
    window.addEventListener("load",function() { changeBackground('orange') });
}else{
    confirm('this color not available  '+color);
}
result = confirm('you change the background color ');

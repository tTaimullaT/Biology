const list=[];

// 1-22
for(let i=1;i<=22;i++){
  list.push({
    name:i+"-хромосома",
    img:"images/Chrm"+i+".jpg",
    info:"Аутосома<br>Тұқымқуалаушылық"
  });
}

// X Y
list.push({
  name:"X-хромосома",
  img:"images/ChrmXX.jpg",
  info:"Әйел Жынысы XX"
});

list.push({
  name:"Y-хромосома",
  img:"images/ChrmXY.jpg",
  info:"Ер жынысы XY"
});

const grid=document.getElementById("grid");

list.forEach(c=>{
  const d=document.createElement("div");
  d.className="card";

  d.innerHTML=`
    <img src="${c.img}">
    <h4>${c.name}</h4>
    <div class="info">${c.info}</div>
  `;

  grid.appendChild(d);
});
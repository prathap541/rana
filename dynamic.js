function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  information(data.career);
  education(data.education);
  skills(data.skills);

})
var info=document.querySelector('.info');
var left=document.querySelector('.left');
var right=document.querySelector('.right');

function profile (pro){

  var image=document.createElement('img');
  image.src= pro.img;
  left.appendChild(image);
  info.appendChild(left);

  var name1=document.createElement("h2");
  name1.textContent=pro.name;
  left.appendChild(name1);
  info.appendChild(left);

  var email1=document.createElement("h2");
  email1.textContent=pro.email;
  left.appendChild(email1);
  info.appendChild(left);

  var roll1=document.createElement("h2");
  roll1.textContent=pro.roll;
  left.appendChild(roll1);
  info.appendChild(left);
}
  function information(info){
  var infor1=document.createElement("h2");
  infor1.textContent=info.infor;
  right.appendChild(infor1);

}
function education(edu){
  var h2a=document.createElement('h2');
  h2a.textContent="education Details";
  right.append(h2a);

  var hr=document.createElement('hr');
  right.append(hr);

  var table=document.createElement('table');

let row='';
  row += "<tr>"+"<th>"+"s.no" +"</th>"+
  "<th>"+"degree"+"</th>"+
  "<th>"+"institute"+"</th>"+
  "<th>"+"percentage"+"</th>"+
  "</tr>";
for(i in edu){
row += "<tr>"+
"<td>"+edu[i].sno+"</td>"+
"<td>"+edu[i].degree+"</td>"+
"<td>"+edu[i].institute+"</td>"+
"<td>"+edu[i].percentage+"</td>"+
"</tr>";
}

table.innerHTML=row;
right.appendChild(table);
info.appendChild(right);

}
function skills(i){
  var ha=document.createElement("h2");
  ha.textContent="skills set";
  right.appendChild(ha);
  info.appendChild(right);

  var ul=document.createElement(ul);
  right.append(ul);
  for(i in 1){
    var li=document.createElement("li");
    li.textContent=l[i].one;
    ul.appendChild(li);

  }
  var d5=document.createElement("a");
  d5.setAttribute('href',"index.html");
  d5.innerHTML="static page";
  info.appendChild(right);
}

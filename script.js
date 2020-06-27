var i = 1;
var lis = [];
lis[0]='This is a Sample Text';
document.getElementById('addnew').onclick = function() {
  document.getElementById('boxadd').style.visibility = "visible";
};
document.getElementById('add').onclick = function() {
  document.getElementById('boxadd').style.visibility = "hidden";
  addnote();
  update();
};
document.getElementById('cancel').onclick = function() {
  document.getElementById('boxadd').style.visibility = "hidden";
};

function addnote() {
var s = document.getElementById('input').value;
if (s=="") {
  console.log("Sorry, We dont take empty notes");
}
else {
  lis[i] = s;
  i++;
}
}
function delnote(n) {
  // console.log("del called sucessfully");
  // console.log(n);
lis[n] = '';
update();
}
function update() {
  document.getElementById('listt').innerHTML = '';
  for(var i=0;i<lis.length;i++)
  { if(lis[i]!='') {
    document.getElementById('listt').innerHTML += "<li class='list-group-item'  >"+  lis[i]  + "<button class='float-right'" + "id=" + i
    +  " onclick='delnote(this.id)'" +
    "><svg width='45px' height='10%' viewBox='0 0 16 16' class='bi bi-x' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>"
    +"<path fill-rule='evenodd' d='M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z'/>" +
    "<path fill-rule='evenodd' d='M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z'/>" +
"</svg></button></li>" ;
      }

  }
}

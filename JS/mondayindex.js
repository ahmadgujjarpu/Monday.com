

function getEndPointData(endPointURL, bindingData,rowId){
    const xhr = new XMLHttpRequest();
    xhr.open("Get", endPointURL);
    xhr.onload = function () {
        const data = JSON.parse(xhr.responseText); 
        bindingData(data,rowId);
  
    }
    xhr.send();
  }
 


function generateCell(title,person,date,status) {
 let template=document.querySelector("template").content.cloneNode(true);
template.querySelector("#item").innerHTML=title;
template.querySelector("#person").innerHTML=person;
template.querySelector("#date").innerHTML=date;
template.querySelector("#status").innerHTML=status;
 return template;
}


function bindingData(data,rowId) {
    
    for(let i in data){
        var title=data[i].project_item;
        var person =data[i].person;
        var date=data[i].dates;
        var status=data[i].statuses;
        document.getElementById(`${rowId}`).append(generateCell(title,person,date,status));
    }
}


getEndPointData("http://localhost:3005/api/projectplan", bindingData,"project");
getEndPointData("http://localhost:3005/api/projectTwitter", bindingData,"projectTwitter");

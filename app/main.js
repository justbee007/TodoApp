//import '../scss/main.scss';
//import myimage from '../images/unorderedlist.png';
//let ima =document.getElementById("unorderedlist");

//ima.src={myimage};
const personsURI = '/data/todo.json';
//const personsURI = 'todo.json';
const personsXHR = new XMLHttpRequest();
personsXHR.open('GET', personsURI);
let arr_list =null;
let reararr = new Array;
personsXHR.onload = function() {
    if (this.status === 200) {
        const responseText = this.responseText;
        const persons = JSON.parse(responseText);
        arr_list = persons
        //console.log(persons);
        console.log(typeof(persons));
        console.log(persons);
        
        for(let i=0;i<persons.length;i++)
        { display(persons[i].title);
            console.log(persons[i].title);
            console.log(persons[i].details);
            console.log(persons[i]);
            console.log("!!!!!!");
            
            //document.createElement('li');
        }
        //loadList(persons);
    }
};

personsXHR.send();
function display(name)

{  
        //const bodyval = document.getElementById("body");
        const newdiv = document.createElement("div");
        newdiv.setAttribute("id",name);
        document.body.appendChild(newdiv);
        const appe = document.createElement("button");
        appe.textContent = name;
        appe.style.display="block";
        appe.style.margin="50px";
        newdiv.appendChild(appe);
        appe.onclick = function()
        {   if(document.getElementById(name+"ul")===null)
           {
               
            let samplediv = document.createElement("ul");
            samplediv.setAttribute("id",name+"ul");
            samplediv.textContent ="";
            newdiv.appendChild(samplediv);
 
            let detail = details(name);
            let datetimevalue = gettime(name);
            console.log(datetimevalue);
            console.log("Its printing");
            let spandetail = document.createElement("span");
            spandetail.setAttribute("id",name+"span");
            spandetail.textContent = "Due Time: "+datetimevalue;
            newdiv.appendChild(spandetail);
            let eachVal = detail.split(","); 
            eachVal.forEach(element => {
                let listElement = document.createElement("li");
                listElement.textContent = element;
                samplediv.appendChild(listElement);
                console.log("God please help me");
            });

        }
        else{
            document.getElementById(name+"ul").remove();
            samplediv = document.createElement("ul");
            samplediv.setAttribute("id",name+"ul");
            samplediv.textContent ="";
          //  samplediv.textContent= details(name);
            newdiv.appendChild(samplediv);
            let detail = details(name);
            eachVal = detail.split(","); 
            eachVal.forEach(element => {
                let listElement = document.createElement("li");
                listElement.textContent = element;
                samplediv.appendChild(listElement);
                console.log("God please help me");
            });
            

        }
        }
        console.log("@#########");

    
}

function details(name)
{   console.log(personsURI);
    const persons = arr_list;
    //console.log(persons);
    console.log(typeof(persons));
    console.log(persons);
    
    for(let i=0;i<persons.length;i++)
    { if(name===persons[i].title)
        {
       
        return persons[i].details;
       }
        
        //document.createElement('li');
    }

}

function gettime(name)
{
    const persons = arr_list;
    console.log(persons);
    console.log(typeof(persons));
    console.log(persons);
    
    for(let i=0;i<persons.length;i++)
    { if(name===persons[i].title)
        {
       
        return persons[i].createdTime;
       }
        
        //document.createElement('li');
    }
}

let btndiv =document.getElementById("addnote");
let inputval = document.getElementById("heading");
let noteval = document.getElementById("content");
//console.log(btndiv);

// Add a new item to notes on click of the button
btndiv.addEventListener("click",function()
{ //alert(inputval.textContent);
  alert(noteval.innerHTML);
  if(inputval.value==="")
  {
     // alert("Enter a valid name");
      let childh = document.getElementById("content");
      let val = childh.getElementsByTagName("ul");
      if(val.length>0)
      { for(let i=0;i<val.length;i++)
        {
            let qwert = val[i].id;
            reararr.push(qwert);
        }
      
          //alert("It contains a unordered list");
   
}
    
      let olval = childh.getElementsByTagName("ol");
      if(olval.length>0)
      {
        for(let i=0;i<olval.length;i++)
        {
            let qwert = olval[i].id;
            reararr.push(qwert);

        }
      
         // alert("It contains a ordered list");
      }
      childh.childNodes.forEach(element => {
        console.log(element.tagName);
      }
        );
  }
  else
  { 
//   console.log(noteval.value);
//   console.log("It came"); 
let datettime =document.getElementById("meeting-time");
console.log(datettime.value);
if(datettime.value.length>0)
{
// let datetimeval = document.createElement("p");
// datetimeval.setAttribute("id",inputval.value);
// datetimeval.value=datettime.value;   
let content = document.createElement("div")
let datetimeval = document.createElement("p");
datetimeval.innerHTML=datettime.value;
datetimeval.setAttribute("id",inputval.value+"p");


datetimeval.style.display="none";
console.log(content.textContent);
content.setAttribute =("id",inputval.value+"div")
let btnelement = document.createElement("button");
btnelement.setAttribute("id",inputval.value+"btn")
btnelement.innerText = inputval.value;
content.appendChild(btnelement);
let childh = document.getElementById("content");
let val = childh.getElementsByTagName("ul");
let olval = childh.getElementsByTagName("ol");
//val.setAttribute("id",inputval.value+"ul");
if(val.length>0)
      { 
          for(let i=0;i<val.length;i++)
        {   let qwert = val[i].id;
            let ulval = document.getElementById(qwert);
            ulval.setAttribute("id",inputval.value);
            let ulname = content.appendChild(document.getElementById(inputval.value));
            let visi = document.getElementById(inputval.value);
            ulval.style.display="none";
            content.appendChild(datetimeval);
            //let qwert = val[i].id;
            reararr.push(inputval.value);
        }      
alert("It contains a unordered list");
document.body.appendChild(content);
btnelement.style.display="block";
btnelement.style.margin="50px";
btnelement.onclick = function()
{   //alert("qwerggfg");
    //alert(btnelement.innerText);
    let val = btnelement.innerText;
    //val = val.replace("btn","");
    let ull = val
    let listval = document.getElementById(ull);
    listval.style.display= "block";
    let datee = document.getElementById(ull+"p");
datee.style.display = "block";
}
btnelement.ondblclick = function()
{
    let val = btnelement.innerText;
    //val = val.replace("btn","");
    let ull = val
    let listval = document.getElementById(ull);
    listval.style.textDecoration="line-through";
    btnelement.style.textDecoration = "line-through";

}

}

else if(olval.length>0)
{
    for(let i=0;i<olval.length;i++)
    {   let qwert = olval[i].id;
        let ulval = document.getElementById(qwert);
        ulval.setAttribute("id",inputval.value);
        let ulname = content.appendChild(document.getElementById(inputval.value));
        let visi = document.getElementById(inputval.value);
        ulval.style.display="none";
        //let qwert = val[i].id;
        content.appendChild(datetimeval);
        reararr.push(inputval.value);
    }      
alert("It contains a ordered list");
document.body.appendChild(content);
btnelement.style.display="block";
btnelement.style.margin="50px";
btnelement.onclick = function()
{   alert("qwerggfg");
alert(btnelement.innerText);
let val = btnelement.innerText;
val = val.replace("btn","");
let ull = val
let listval = document.getElementById(ull);
listval.style.display= "block";
let datee = document.getElementById(ull+"p");
datee.style.display = "block";
}
btnelement.ondblclick = function()
{   alert("coming here");
    let val = btnelement.innerText;
    //val = val.replace("btn","");
    let ull = val
    let listval = document.getElementById(ull);
    listval.style.textDecoration="line-through";
    btnelement.style.textDecoration = "line-through";

}

}
}
else{
    alert("Enter a due date and time before saving the note");
}
// document.body.appendChild(content);
// btnelement.style.display="block";
// btnelement.style.margin="50px";
// btnelement.onclick = function()
// {   alert("qwerggfg");
//     alert(btnelement.innerText);
//     let val = btnelement.innerText;
//     val = val.replace("btn","");
//     ull = val+"ul"
//     listval = document.getElementById(ull);
//     listval.style.display= "block";
// }
  }
})


 //Function ends here
// Helps in unordered list inside the DIV
let unorder =document.getElementById("unorderedlist");
let val = document.getElementById("content");
unorder.addEventListener('click',function(){
if(document.readyState=="complete")
{ //alert("@DFFS");
let ulval = document.createElement("ul");
ulval.setAttribute("id","newul")
val.appendChild(ulval);
let li = document.createElement("li");
ulval.appendChild(li);
}
    
});
//Helps in creating Ordered List inside the DIV
let order =document.getElementById("orderedlist");
//let val = document.getElementById("content");
order.addEventListener('click',function(){
if(document.readyState=="complete")
{ alert("@DFFS");
let olval = document.createElement("ol");
olval.setAttribute("id","newol");
val.appendChild(olval);
let li = document.createElement("li");
olval.appendChild(li);
}
    
});


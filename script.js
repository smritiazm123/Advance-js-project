document.getElementsByClassName("backup")[0].style.visibility="hidden";
document.getElementsByClassName("more_del")[0].style.visibility="hidden";
let add=document.querySelector(".add_btn");
var arr=[];
let all_notes=document.querySelector(".all_notes");//all_notes
let title=document.querySelector("#title");
let desc=document.querySelector('#desc');
add.addEventListener('click',(e)=>
{
    e.preventDefault();
    add_note();
});
if(arr.length==0)
{
    document.getElementById("demo").style.display="block";
}

function add_note()//obj
{
    document.getElementsByClassName("backup")[0].style.visibility="visible";
    document.getElementsByClassName("more_del")[0].style.visibility="visible";
    let card=document.createElement("div");
    card.classList.add("card");///card
    let titleVal=title.value;
    let descVal=desc.value;
    title.value="";
    desc.value="";
    var today=new Date();
    var month="";
    switch(today.getMonth())
    {
        case 1:month='January';
                break;
        case 2:month='February';
                break;
        case 3:month='March';
                break;
        case 4:month='April';
                break;
        case 5:month="June";
                break;
        case 6:month="July";
                break;
        case 7:month="August";
                break;
        case 8:month="September";
                break;
        case 9:month="October";
                break;
        case 10:month="November";
                break;
        default:month="December";
    }
    if(!titleVal && !descVal)
    {
       return alert("Please enter the tilte and note ,then click onto add note button");
    }
    if(!titleVal)
    {
        return alert("Please Enter the title also ");
    }
    if(titleVal)
    {
        card.innerHTML=`
                        <input type="checkbox" class="check">
                        <h3 class="t">${titleVal}</h3>
                        <p class="n">${descVal}</p>
                        <button class="delete">Delete</button>
                        <button class="edit">Edit Note</button>
                        <p class='date'>${today.getDate()} ${month} ${today.getFullYear()}
    ${today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>`;
        //all_notes.appendChild(card);
        all_notes.appendChild(card);
        updateLS();
    }
    let del=card.querySelector(".delete");
    del.addEventListener("click",()=>
    {
        card.style.display="none";
        //card.remove();
    });

    let t=document.querySelector(".t");
    let n=document.querySelector(".n");
    let ed_btn=card.querySelector('.edit');
    ed_btn.addEventListener('click',()=>{
    document.getElementById("title").value=card.querySelector('.t').innerHTML;
    document.getElementById("desc").value=card.querySelector('.n').innerHTML;
    //card.style.display='none';
    card.remove();
    //document.getElementById('note');
});

}
var arr=[];
function updateLS()
{
    let card=document.querySelectorAll(".card");
    //var arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[1].innerText,
            desc:element.children[2].innerText
        })
    });
    if(arr.length!=0)
{
    document.getElementById("demo").style.display="none";
}
    localStorage.setItem("notes", JSON.stringify(arr));
}


//checkbox delete
let d=document.querySelector(".more_del");
d.addEventListener("click",(e)=>
{
    
    e.preventDefault();
    var b=document.querySelectorAll(".card");
    for(var i=0;i<b.length;i++)
    {
        if(b[i].querySelector(".check").checked==true)
        {
            //b[i].style.visibility="hidden";
            b[i].style.display="none";
        }
        //document.getElementsByClassName("backup")[0].addEventListener("click",b[i].style.display="block");
    }
});

//backup
let back=document.getElementsByClassName("backup");
back[0].addEventListener("click",(e)=>
{
    
    e.preventDefault();
    var b=document.querySelectorAll(".card");
    for(var i=0;i<b.length;i++)
    {
       
            //b[i].style.visibility="visible";
            b[i].style.display="inline-block";
            b[i].querySelector(".check").checked=false;
        //document.getElementsByClassName("backup")[0].addEventListener("click",b[i].style.display="block");
    }
});


var new_card=0;
let search_btn=document.getElementById("search_btn");//search
search_btn.addEventListener("click",(e)=>//keyup search
{
    e.preventDefault();
    const search_value=document.getElementById("search");
    //f(search_value==e.value)//e.traget.value
    //{
        if(search_value.value=="back")
        {
            alert("Thank You :)")
            var base=document.querySelectorAll(".card");
            for(var i=0;i<base.length;i++)
            {
       
            //b[i].style.visibility="visible";
            base[i].style.display="inline-block";
            }
            /*console.log("back");
            var new_all=document.getElementsByClassName("card");
            console.log(new_all);
            for(var i=0;i<new_all.length;i++)
            {
                new_all[i].style.display="inline-block";
                console.log("visible now");//display="inline-block";
            }
            */
           new_card.remove();
           search_value.value="";
            return 1;
        }
        
        var all=document.getElementsByClassName("card");
        for(var i=0;i<all.length;i++)
        {
            all[i].style.display="none";
        }
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].title==search_value.value)
            {
                alert(`write "back" in box to go back`);
                //document.getElementsByClassName("card")[i].style.visibility="hidden";//quryselectorall(".card")
                new_card=document.createElement("div");
                new_card.classList.add("new_card");///card
                let titleVal=arr[i].title;
                let descVal=arr[i].desc;
                //console.log(titleVal);
                // title.value="";
                // desc.value="";
                var today=new Date();
                var month="";
                switch(today.getMonth())
                {
                    case 1:month='January';
                            break;
                    case 2:month='February';
                            break;
                    case 3:month='March';
                            break;
                    case 4:month='April';
                            break;
                    case 5:month="June";
                            break;
                    case 6:month="July";
                            break;
                    case 7:month="August";
                            break;
                    case 8:month="September";
                            break;
                    case 9:month="October";
                            break;
                    case 10:month="November";
                            break;
                    default:month="December";
                }
                if(titleVal)
                {
                    new_card.innerHTML=`
                                    <input type="checkbox" class="check">
                                    <h3 class="t">${titleVal}</h3>
                                    <p class="n">${descVal}</p>
                                    <button class="delete">Delete</button>
                                    <button class="edit">Edit Note</button>
                                    <p class='date'>${today.getDate()} ${month} ${today.getFullYear()}
                ${today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>`;
                    //all_notes.appendChild(card);
                    all_notes.appendChild(new_card);
                    return 1;
                    
                }
            }
            
        }
    //}*/
    });
   


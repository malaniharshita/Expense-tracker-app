let form = document.getElementById("addform");
let itemlist = document.getElementById("items");
form.addEventListener('submit',add);
//itemlist.addEventListener('click',removeItem);
itemlist.addEventListener('click',removeItem);
itemlist.addEventListener('click',editItem);
let selectedrow = null;
function add(e){
    e.preventDefault();
    if(selectedrow == null){
        let li = document.createElement("li");
        
        
        let newItem = document.getElementById("amount").value;
        li.appendChild(document.createTextNode(newItem));

        let newItem1 = document.getElementById("des").value;
        li.appendChild(document.createTextNode(" "+newItem1));

        let newItem2 = document.getElementById("cat").value;
        li.appendChild(document.createTextNode(" "+newItem2));

        let editbutton = document.createElement("button");
        editbutton.className = "ed"
        editbutton.appendChild(document.createTextNode('edit'));
        li.appendChild(editbutton);

        let delbutton = document.createElement("button");
        delbutton.className = "del";
        delbutton.appendChild(document.createTextNode('delete'));
        li.appendChild(delbutton);

        itemlist.append(li);
        
    }
    else{
        let a = document.getElementById("amount").value;
        let b = document.getElementById("des").value;
        let c = document.getElementById("cat").value;
        
        selectedrow.firstChild.textContent = a;
        selectedrow.firstChild.nextSibling.textContent = " "+b;
        selectedrow.firstChild.nextSibling.nextSibling.textContent = " "+c;
        
        //console.log(a);
        
    }
}
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains("del")){
        if(confirm("are you sure?")){
            let li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}
function editItem(e){   
    e.preventDefault();
    if(e.target.classList.contains("ed")){

        let a = e.target.parentElement;
        selectedrow = e.target.parentElement;
        //console.log(a.firstChild.nextSibling.nextSibling.textContent)
        document.getElementById('amount').value = a.firstChild.textContent; 
        document.getElementById('des').value = a.firstChild.nextSibling.textContent;  
        document.getElementById('cat').value = a.firstChild.nextSibling.nextSibling.textContent;
        
        
    }
}

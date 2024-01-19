var bookmark = document.getElementById("bookmark")
var urlfinder = document.getElementById ("urlfinder")
var trys = document.getElementById("demo")
var submitbutton = document.getElementById("submitbutton")
var updatebutton = document.getElementById("updatebutton")
// عملت دا جلوبال عشان اخد الاندكس فى الداله الى تحتو
var indexnumber = 0

var websites = []



if(localStorage.getItem("url" ) != null ) {
    websites = JSON.parse(localStorage.getItem("url"))
    display()
}


function add (){

    if(validName() == true && isValidURL() == true){
        var website = {
            Name: bookmark.value,
            url:urlfinder.value
        }
    
        websites.push(website)
        localStorage.setItem("url", JSON.stringify(websites))
        display()
        clear()
        trys.classList.add("d-none")
    }
    else{
        trys.classList.remove("d-none")
    }
  
}

function clear(){
    bookmark.value=""
    urlfinder.value=""
}


function display() {
    var cartona = ""

    for(var i  = 0 ; i<websites.length ; i++ ){
        cartona+= 
        `
        <tr>
        <td>${i}</td>
        <td>${websites[i].Name}</td>
        <td> <a target="_blank" href="${websites[i].url}"><button class="btn btn-success"> <i class="fa-solid fa-eye"></i> visit</button></a></td>
        <td><button onclick="deleteitem(${i})" class="btn btn-danger"> <i class="fa-solid fa-trash"></i>delete</button></td>
        <td><button onclick=" updatewebsite(${i})" class="btn btn-success"> <i class="fa-solid fa-wrench"></i>update</button></td>
       </tr>
        
        
        `
        
       
        
    }
    document.getElementById("tbody").innerHTML=cartona
}




function deleteitem(index){

    websites.splice(index,1)
    localStorage.setItem("url", JSON.stringify(websites))

    display()
    
}









function validName(){
    var text = bookmark.value
    var regexName = /^[a-z]{3,15}$/
    if(regexName.test(text)){
        bookmark.classList.add("is-valid")
        bookmark.classList.remove("is-invalid")
        
        return true 

    }
    else {
        bookmark.classList.add("is-invalid")
        bookmark.classList.remove("is-valid")
        return false
    }

}
    function isValidURL() {
        var text1 = urlfinder.value
        var urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-])\/?$/;
        if (urlPattern.test(text1)) {
            urlfinder.classList.add("is-valid")
            urlfinder.classList.remove("is-invalid")
            return true
        }
        else { 
            urlfinder.classList.add("is-invalid")
            urlfinder.classList.remove("is-valid")
            return false
        }
      }



 function remove() {
    trys.classList.add("d-none")
 } 
 
 

 function updatewebsite(index){
    indexnumber = index
    bookmark.value = websites[index].Name
    urlfinder.value = websites[index].url
    submitbutton.classList.add("d-none")
    updatebutton.classList.remove("d-none")
 }






 function updateanddisplay(){
    if(validName() == true && isValidURL() == true){
        var website = {
            Name: bookmark.value,
            url:urlfinder.value
            
        }
        websites.splice(indexnumber,1,website)
        localStorage.setItem("url", JSON.stringify(websites))
        display()
        clear()
        submitbutton.classList.remove("d-none")
        updatebutton.classList.add("d-none")
        trys.classList.add("d-none")
    }else{
        trys.classList.remove("d-none")
    }


}
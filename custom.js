
window.alert("page is responsiv in:(1200, 900, 600)px")
//steaky navbar//
let navbar=document.querySelectorAll("nav.nav")
    navbar.forEach(navbar=>{

    window.addEventListener("scroll",e=>{
        if (window.scrollY>1) {
        navbar.classList.add("navfix")
        }
        else{
            navbar.classList.remove("navfix")
        }
      
    })
})

//popup modal//
let pop=document.querySelector("button.a-box")
let popdiv=document.querySelector("div.popupmodal")
if (pop) {
    var wrapperdiv=document.createElement("div")
    wrapperdiv.className="pop-wrapper"
    document.body.prepend(wrapperdiv)
}
pop.addEventListener("click",e=>{
 popdiv.classList.add("showpop")
 wrapperdiv.classList.add("pop-wrappershow")
})

let popclose=document.querySelectorAll(".close")
popclose.forEach(Close=>{
    let functionClose= e=>{
        popdiv.classList.remove("showpop")
        wrapperdiv.classList.remove("pop-wrappershow") 
    }
    Close.addEventListener("click",functionClose)
    wrapperdiv.addEventListener("click",functionClose)
})

//up button//
let up=document.querySelector("button.up")
window.addEventListener("scroll",e=>{
    if (window.scrollY>700) {
        up.classList.add("showup")
        
    }else{
        up.classList.remove("showup")
    }
    up.addEventListener("click",e=>{
        window.scrollTo({top:0,behavior:"smooth"})
    })
})
//night mode//
let night=document.querySelector("button.nightbtn")
window.addEventListener("scroll",e=>{
    if (window.scrollY>1) {
        night.classList.add("nightshow")
        
    }else{
        night.classList.remove("nightshow")
    }
})

night.addEventListener("click",e=>{
    document.body.classList.toggle("bodynight")
})

// accordion////
let Acoordion=document.querySelector(".accordion")
Array.from(Acoordion.children).forEach(wrapper=>{
    wrapper.querySelector("span").addEventListener("click",e=>{
        let span=e.target
        let wrapper=span.parentElement
        let div=span.nextElementSibling
        wrapper.classList.toggle("showaco")
        if (wrapper.classList.contains("showaco")) {
            div.style.maxHeight=div.scrollHeight + 40 + 'px'
        }else{
            div.style.maxHeight=null
        }
        Array.from(Acoordion.children).forEach(w=>{
            if (w!=wrapper) {
                w.classList.remove("showaco")
                w.querySelector("div").style.maxHeight=null
            }
        })
    })
    
})

//form validation//

let form=document.querySelector(".form")
let ussername=document.querySelector("#Username1")


let upv = /^[A-Za-z\s]{4,15}$/

let upe=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let pval=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

let ep=false


let eE=false
let eu=false

form.addEventListener("submit",e=>{
    if (!(eu&&ep&&eE)) {
        e.preventDefault()
    }
    if (!eu) {
        form.username.classList.add('is-invalid')
    }
    if (!ep) {
        form.password.classList.add('is-invalid')
    }
    if (!eE) {
        form.Email.classList.add('is-invalid')
    }
})

form.username.addEventListener("keyup",e=>{
    
    if (e.target.value) {
        
        if (upv.test(e.target.value)) {
            eu= true
            e.target.classList.add('is-valid')
            e.target.classList.remove('is-invalid')
        }else{
            e.target.classList.add('is-invalid')
            eu=false
            
        }
        if (!upv.test(e.target.value)) {
            e.target.classList.add('is-invalid')
        }
    }
    
        
    
})


form.Email.addEventListener("keyup",e=>{
    if (upe.test(e.target.value)) {
        eE=true
        e.target.classList.add('is-valid')
        e.target.classList.remove('is-invalid')
    }else{
        eE=false
        e.target.classList.add('is-invalid')
    }
})
form.password.addEventListener("keyup",e=>{
    if (pval.test(e.target.value)) {
        ep=true
        e.target.classList.add('is-valid')
        e.target.classList.remove('is-invalid')
    }else{
        ep=false
        e.target.classList.add('is-invalid')
    }
})



//mobile menu//
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
const cmdIn = document.querySelector(".command-input")
const app = document.querySelector(".app")
const appOut = document.querySelector(".app-outputs")

const appWindow = document.querySelector(".app-o-window")

const warningCont = document.querySelector(".warning-popup-cont")

const keywords = ["help", "about", "resume", "cls", "projects", ""]

const projects = []

fetch("https://api.github.com/users/sdkeshavan/repos")
.then(res => res.json())
.then(data => {data.forEach(project => {
    projects.push(project)
});})


function showWarning(){

    if(warningCont.style.display == "none"){
        warningCont.style.display = "grid"
    }else{
        warningCont.style.display = "none"
    }
    

}


function resize(){

    if(appWindow.style.height == "60vh"){
        appWindow.style.height = "calc(100vh - 4px)"
        appWindow.style.width = "calc(100vw - 4px)"
        app.style.height = "calc(100vh - 20px - 35px)"
    }else{
        appWindow.style.height = "60vh"
        appWindow.style.width = "calc(40vw + 200px)"
        app.style.height = "calc(60vh - 20px - 35px)"
    }

}



function cls(){
    appOut.innerHTML = `                
        <div class="app-info">Devesh Keshavan S [Pre Final Year Undergraduate]</div>
        <div class="app-info">Copyright (C) sdkeshavan.github.io</div>
        <div class="app-info">Type 'help' to get more information.</div>`

}

function help(){

    appOut.innerHTML += `
        	<div class="app-info">
            Available commands :    
                <ul style="list-style-type: none;">
                    <li>--about</li>
                    <li>--projects</li>
                    <li>--resume</li>
                    <li>--cls</li>
                </ul>
            </div>
    `

}

function unknownCmd(cmd){

    appOut.innerHTML += `<div class="app-info">'${cmd}' is not recognized as a Command</div>`

}

function showProjects(){

    tempProjStr = ""

    projects.forEach(project => {

        tempProjStr += `<li><a href='${project["html_url"]}'> ${project["name"]}</a></li>`

    })

    appOut.innerHTML += `
        	<div class="app-info">  
            My Projects on github :
                <ul style="list-style-type: disc;">
                    ${tempProjStr}
                </ul>
            </div>
    `

}


function handleKeyPress(e){
    let enteredCmd
    enteredCmd = cmdIn.value
    console.log(e.key)
    
    if(e.key == "Enter"){
        console.log(enteredCmd)

        appOut.innerHTML += `<div class="app-info">255.255.255.255:\\Users\\guest1> ${enteredCmd}</div>`

        if(!(keywords.includes(enteredCmd))){
            unknownCmd(enteredCmd)
        }else if(enteredCmd == "cls"){
            cls()
        }else if(enteredCmd == "help"){
            help()
        }else if(enteredCmd == "projects"){
            showProjects()   
        }else{
            console.log("Valid")
            
        }
        
        app.scrollTo(0, app.scrollHeight)
        cmdIn.value = ""
    }

}

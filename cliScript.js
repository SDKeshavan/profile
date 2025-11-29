import { projectList } from "./projectList.js"


const cmdIn = document.querySelector(".command-input")
const app = document.querySelector(".app")
const appOut = document.querySelector(".app-outputs")
const closeBtn = document.querySelector(".window-close-btn")
const minimize = document.querySelector(".minimize")
const resizebtn = document.querySelector(".resize")
const popupClosebtn = document.querySelector(".popup-close-btn")
const popupokbtn = document.querySelector(".error-ok-btn")


const appWindow = document.querySelector(".app-o-window")

const warningCont = document.querySelector(".warning-popup-cont")

const keywords = ["help", "about", "resume", "cls", "projects", ""]

const projects = []




cmdIn.addEventListener("keypress", handleKeyPress)
closeBtn.addEventListener("click", showWarning)
minimize.addEventListener("click", showWarning)
resizebtn.addEventListener("click", resize)
popupClosebtn.addEventListener("click", showWarning)
popupokbtn.addEventListener("click", showWarning)

// fetch("https://api.github.com/users/sdkeshavan/repos")
// .then(res => res.json())
// .then(data => {data.forEach(project => {
//     projects.push(project)
// });})


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
        <div class="app-info">Devesh Keshavan S [Final Year Undergraduate]</div>
        <div class="app-info">Copyright (C) sdkeshavan.github.io</div>
        <div class="app-info">Type 'help' to get more information.</div>
        `

}

function help(){

    appOut.innerHTML += `
        	<div class="app-info">
            Available commands :    
                <ul style="list-style-type: disc;">
                    <li>about</li>
                    <li>projects</li>
                    <li>resume</li>
                    <li>cls</li>
                </ul>
            </div>
    `

}

function unknownCmd(cmd){

    appOut.innerHTML += `<div class="app-info">'${cmd}' is not recognized as a Command</div>`

}

function showProjects(){

    let tempProjStr = ""

    // projects.forEach(project => {

    //     tempProjStr += `<li><a href='${project["html_url"]}'> ${project["name"]}</a></li>`

    // })

    projectList.forEach(project =>{
        tempProjStr += `
                    <h3>${project.name}</h3>
                    <p><strong>Description:</strong> ${project.description}</p>
                    <p><strong>Skills:</strong> ${project.skills.join(', ')}</p>
                    <p><strong>Github:</strong> <a href="${project.github}" target="_blank">View on Github</a></p>
                    ${project.website ? `<p><strong>Website:</strong> <a href="${project.website}" target="_blank">Visit Website</a></p>` : ''}

        `   
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
    enteredCmd = cmdIn.value.trim()
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
        }else if(enteredCmd == "about"){
            aboutme()
        } else{
            console.log("Valid")
            
        }
        
        app.scrollTo(0, app.scrollHeight)
        cmdIn.value = ""
    }

}


function aboutme(){

    appOut.innerHTML += `

                <pre style="white-space: pre; line-height:15px;">
                     _   _      _ _       _ 
                    | | | | ___| | | ___ | |
                    | |_| |/ _ \\ | |/ _ \\| |
                    |  _  |  __/ | | (_) |_|
                    |_| |_|\\___|_|_|\\___/(_) 
                </pre>

                <span style="margin-left:20px;display:block;">

                    Hi, I'm Dev — currently in the final year of my Undergraduate program in Computer Science and Engineering.
                    I have a strong passion for Full-Stack Web Development and System Design. I love learning, building, and creating solutions that make life a little easier and more engaging.

                    I enjoy collaborating with teams that explore diverse ideas and perspectives, and I'm motivated by the process of bringing concepts to life through thoughtful design and engineering.

                    I would love the opportunity to contribute—please reach out if you think I'd be a good fit for your team.
                </span>
    `
}
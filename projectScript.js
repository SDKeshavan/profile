import { projectList } from "./projectList.js"

console.log(projectList)

function createProjectItem(project) {
    // Create main container
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item';

    // Image
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.name + ' Screenshot';
    img.className = 'project-image';
    projectItem.appendChild(img);

    // Text container
    const textDiv = document.createElement('div');
    textDiv.className = 'project-text';

    // Project name
    const title = document.createElement('h2');
    title.className = 'project-name';
    title.textContent = project.name;
    textDiv.appendChild(title);

    // Description
    const desc = document.createElement('p');
    desc.className = 'project-description';
    desc.textContent = project.description;
    textDiv.appendChild(desc);

    // Skill badges
    const skillSet = document.createElement('div');
    skillSet.className = 'skill-set';

    project.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-badge';
        span.textContent = skill;
        skillSet.appendChild(span);
    });

    textDiv.appendChild(skillSet);

    // Links
    const linksDiv = document.createElement('div');
    linksDiv.className = 'project-links';

    if (project.github) {
        const githubLink = document.createElement('a');
        githubLink.href = project.github;
        githubLink.target = "_blank"
        githubLink.className = 'project-link github';
        githubLink.textContent = 'GitHub';
        linksDiv.appendChild(githubLink);
    }

    if (project.website) {
        const websiteLink = document.createElement('a');
        websiteLink.href = project.website;
        websiteLink.target = "_blank";
        websiteLink.className = 'project-link web';
        websiteLink.textContent = 'Website';
        linksDiv.appendChild(websiteLink);
    }

    textDiv.appendChild(linksDiv);

    // Append text to main item
    projectItem.appendChild(textDiv);

    return projectItem;
}



const container = document.querySelector(".projects-page");

projectList.forEach(project => {
    const projectHTML = createProjectItem(project);
    container.appendChild(projectHTML);
});
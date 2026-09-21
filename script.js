// Loading Json file
let projectMedia;
fetch("project-media.json")
    .then(response => response.json())
    .then(data => {
        projectMedia = data;
    });


// Opening Demo videos,images
const watchDemo = document.querySelectorAll(".watchdemo");
const demoContainer = document.querySelector(".demo-container");

watchDemo.forEach(function (button) {

    button.addEventListener("click", function () {
        const SelectedProject = button.dataset.project;   
        const selectedProjectContent = projectMedia[SelectedProject];
        const demoGrid = document.querySelector(".demo-grid")
         demoGrid.innerHTML = "";

        // creating image space and displaying images from the fetched content
        selectedProjectContent.images.forEach(function (imagePath) {
        

        const divi = document.createElement("div");
        divi.classList.add("demo-item");

        const image = document.createElement("img");
        image.src = imagePath;
        image.alt = "Project screenshot";

        divi.appendChild(image);
        demoGrid.appendChild(divi);
        console.log("successfully added one image");
        });


        // creating space for video and adding video in it
        selectedProjectContent.videos.forEach(function (videoPath) {
    
        const divi = document.createElement("div");
        divi.classList.add("demo-item");

        const video = document.createElement("video");

        video.src = videoPath;
        video.controls = true;

        divi.appendChild(video);

        demoGrid.appendChild(divi);

});


        
        demoContainer.style.display = "block";
    });
});









//closing demo
const democlose = document.querySelector(".demo-close")

democlose.addEventListener("click", function() {
    demoContainer.style.display = "none";
});







//Implementing view source button

viewsource = document.querySelectorAll(".viewsource");

viewsource.forEach(function (viewsourcebutton) {


viewsourcebutton.addEventListener("click", function () {
        
    const githubLink = viewsourcebutton.dataset.github;
    window.open(githubLink, "_blank");

});


});
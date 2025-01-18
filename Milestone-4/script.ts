// script.ts

document.getElementById("resume-form")?.addEventListener("submit", function(event: Event) {
    event.preventDefault();  // Prevent the form from submitting traditionally

    // Collect form data
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Format the resume content dynamically
    const resumeContent = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Education</h3>
        <p>${education}</p>
        
        <h3>Experience</h3>
        <p>${experience}</p>
        
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the generated resume in the 'resumedisplay' div
    const resumeDisplay = document.getElementById("resumedisplay");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeContent;
    }
});
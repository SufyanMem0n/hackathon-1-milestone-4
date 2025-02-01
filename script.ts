// get 
const form = document.getElementById('Resume-form')as HTMLFormElement
const resumedisplayelement = document.getElementById('resume-display') as HTMLDivElement

// 

form.addEventListener('submit', (event:  Event) => {
     event.preventDefault(); 


// 


const Name = (document.getElementById('Name') as HTMLInputElement).value;
const email = (document.getElementById('email') as HTMLInputElement).value;
const phone = (document.getElementById('phone') as HTMLInputElement).value;
const Education = (document.getElementById('Education') as HTMLInputElement).value;
const Experience = (document.getElementById('Experience') as HTMLInputElement).value;
const Skills  = (document.getElementById('Skills') as HTMLInputElement).value;

// 

const ResumeHtml = `<h2><b>editableResume</b></h2>
 <h3><b>Personal information</b></h3> 
 <p><b>Name:</b><span contenteditable="true">${Name}</span></p>
  <p><b>email:</b><span contenteditable="true">${email}</span></p>
  <p><b>phone:</b><span contenteditable="true">${phone}</span></p>

  <h3>Education</h3>
  <p><b contenteditable="true">${Education }</b></p>
  
  <h3>Experience</h3>
<p><b contenteditable="true">${Experience }</b></p>
 
 <h3>skills</h3>
 <p><b contenteditable=true>${Skills }</b></p>
  `;

//   


if (resumedisplayelement){
    resumedisplayelement.innerHTML = ResumeHtml;
}else{ console.error('the resume display element is missing')

}
});




//local reviews data 
const reviews = [
    {
          id: 0,
          name: 'Sara Jones',
          job: 'DOCTOR',
          img: 'http://siga-aluminio.com.mx/wp-content/uploads/2019/01/person2.jpg',
          text: 'Really Amazing Website which helped me to sort out the cities with traffic!!!',
  
      },  
    {
          id: 1,
          name: 'susan smith',
          job: 'ENGINEER',
          img: 'https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg',
          text: 'It hepled me a lot!!!',
  
      },
      {
          id: 2,
          name: 'anna johnson',
          job: 'ENGINEER',
          img: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
          text: 'Never came across such a beautiful app..Really loved it!!',
  
      },
      {
          id: 3,
          name: 'peter jones',
          job: 'LAWYER',
          img: 'http://siga-aluminio.com.mx/wp-content/uploads/2019/01/person4.jpg',
          text: 'Good work and hands off to the developers of this website!!!',
      },
      {
          id: 4,
          name: 'bill anderson',
          job: 'TEACHER',
          img: 'https://media.istockphoto.com/id/1296158947/photo/portrait-of-creative-trendy-black-african-male-designer-laughing.jpg?s=612x612&w=0&k=20&c=1Ws_LSzWjYvegGxHYQkkgVytdpDcnmK0upJyGOzEPcg=',
          text: 'This is a good decision where public could see all the corruptions happening in huge cities!!',
      },
  ];
  
  // select items
  
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item 
  
  let currentItem = 0;
  
  // load initial item 
  window.addEventListener('DOMContentLoaded', function() {
      showPerson();
  });
  
  // show person based on item 
  
  function showPerson() {
      const item =  reviews[currentItem];
      img.src = item.img;
      author.textContent = item.name;
      job.textContent = item.job;
      info.textContent = item.text;
  }
  
  // show next person 
  
  nextBtn.addEventListener('click', function(){
      currentItem++;
      if (currentItem > reviews.length - 1){
          currentItem = 0;
      }
      showPerson(currentItem);
  });
  // show prev person 
  prevBtn.addEventListener('click', function(){
      currentItem--;
     if (currentItem < 0){
      currentItem = reviews.length -1;
     }
      
      showPerson(currentItem);
  });
  
  // show random person
  
  randomBtn.addEventListener('click',  function(){
      currentItem = Math.floor(Math.random() * reviews.length);
      console.log(currentItem);
      showPerson();
  });
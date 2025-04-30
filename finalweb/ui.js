const content = {
  
  home: `
    <div style="width: 100%; height: 100vh; background-color: white;"></div>
  `,

  resume: `
    <h1>Resume</h1>
    <img src="RESUMEFINAL25.jpg" style="width: 100%; height: auto;">
  `,

  posters: `
   <head>
 <title> posters </title/> 
  <style>

    .gallery-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2rem;
      color: #333;
    }

    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .gallery img {
      width: calc(33.333% - 20px);
      height: auto;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .gallery img:hover {
      transform: scale(1.05);
    }

    @media (max-width: 900px) {
      .gallery img {
        width: calc(50% - 20px);
      }
    }

    @media (max-width: 600px) {
      .gallery img {
        width: 100%;
      }
    }
  </style>
</head>
<body>


  <div class="gallery-container">
    <div class="gallery img">
      <img src="1.png"> 
      <img src="2.jpg">
      <img src="3.3.png">
      <img src="4.4.gif">
    </div>
  </div>

</body>
</html>
  `,

  sadgirl: `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Everybody Loves a Sad Girl</title>
  <style>
    .image-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }

    .image-grid img {
      width:auto
      height: 400px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .image-grid img:hover {
      transform: scale(1.05);
    }

    @media (max-width: 900px) {
      .image-grid img {
        width: calc(50% - 20px);
        height: auto;
      }
    }

    @media (max-width: 600px) {
      .image-grid img {
        width: 100%;
        height: auto;
      }
    }
  </style>
</head>
<body>

  <h1>Everybody Loves a Sad Girl</h1>

  <p>
    You know her, eccentric, free-spirited, outgoing, yet carrying a hidden pain.
    No one really wants to hear about her pain, but they love the ways in which she hurts.
    <strong>Everybody Loves a Sad Girl</strong> investigates society’s need to romanticize women’s sadness.
    In the attempt to normalize mental illness we as a society have come to a point where it is a hot commodity—
    time and time again we have proven that society loves a sad girl. Self-destructive traits have turned into sexy hobbies.
    Have we, as women, let our pain and darkness continue, because it is desired?
    What would happen if we dropped the idealism of pain? Are we stuck in a cycle of pain, causing our own demise?
    Can we change the way we look at ourselves and our pain? Deep down, do we hold onto our sadness?
  </p>
<br> <br> 
  <div class="image-grid">
    <img src="6.png">
    <img src="7.2.png">
    <img src="10.png">
  </div>
</body>


  `,

  text: `
<head>
  <title>Text</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    body {
      display: flex;
      height: 100vh;
      overflow: hidden;
    }


    .main-content {
      margin-left: 220px;
      width: calc(100% - 220px);
      height: 100vh;
      position: relative;
    }

    .text-background {
      background: url('text.gif') no-repeat center center;
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .overlay-text {
      color: white;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 20px;
      border-radius: 10px;
      max-width: 800px;
    }

    .overlay-text p {
      font-size: 1.2rem;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .overlay-text p {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      .overlay-text {
        padding: 15px;
      }

      .overlay-text p {
        font-size: 0.95rem;
      }
    }
  </style>
</head>
<body>

  <div class="main-content">
    <div class="text-background">
      <div class="overlay-text">
        <p>
          “Text” was a Republishing assignment. Choosing a 1000 word text, considering its entirety,
          and Republishing it in a fluid, but new way. I chose a text from one of my favorite books,
          <em>The Love of Impermanent Things</em> by Mary Rose O’Reilly. This text is all about the
          transparency of self and our connection to nature. Using the freehand embroidery sewing machine
          technique, I hand sewed the text onto a thin, transparent fabric.
        </p>
      </div>
    </div>
  </div>

</body>



  `,

  reinvent: `
  
  
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 20px;">
    <div style="flex: 1 1 20%; max-width 100%;">
      <img src="1.0.png" style="width: 100%; height: auto; border-radius: 8px;">
    </div>
    <div style="flex: 1 1 20%; max-width: 100%;">
      <img src="2.0.png" style="width: 100%; height: auto; border-radius: 8px;">
    </div>
    <div style="flex: 1 1 20%; max-width: 100%;">
      <img src="3.0.png" style="width: 100%; height: auto; border-radius: 8px;">
    </div>
    <div style="flex: 1 1 20%; max-width: 100%
  ;">
      <img src="4.0.png" style="width: 100%; height: auto; border-radius: 8px;">
    </div>
  </div>
 <p> Working to create a Brand new Printing Process. I combined my favorite things, paper embroidery + stamp/ lino printmaking to create this piece/ new process. I, backwards and upside down, hand embroidered letters into paper, which I then put against a stamp pad, then pushed against paper, creating a stamp. 
  `,

  potholes: `
  <style>
    img {
      width: 300px;
      height: 400px;
    }
  </style>
</head>
<body>
  <img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png"><img src="pothole.png">
  `,

  figuring: `
   <p>Still Figuring it Out, 2023, 285 Page, 8.5x11, Perfect Bind<p> <br> <br>
      <head>
 <title> Posters </title/> 
  <style>

    .gallery-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2rem;
      color: #333;
    }

    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .gallery img {
      width: calc(33.333% - 20px);
      height: auto;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .gallery img:hover {
      transform: scale(1.05);
    }

    @media (max-width: 900px) {
      .gallery img {
        width: calc(50% - 20px);
      }
    }

    @media (max-width: 600px) {
      .gallery img {
        width: 100%;
      }
    }
  </style>
</head>
<body>


  <div class="gallery-container">
    <div class="gallery img">
      <img src="b.jpg"> 
      <img src="c.jpg">
      <img src="d.jpg">
    
    </div>
  </div>

</body>
</html>
  `,

  college: `
    <h1>College Works</h1>
    <p>College projects content here.</p>
  `
};

const links = document.querySelectorAll('.sidebar a');
const mainContent = document.getElementById('main-content');

links.forEach(link => {
  const page = link.getAttribute('data-page');
  if (page) {
    link.addEventListener('click', e => {
      e.preventDefault();
      mainContent.innerHTML = content[page] || `<h1>Page not found</h1>`;
    });
  }
});

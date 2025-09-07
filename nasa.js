

     const main = document.querySelector("#main");
     const main2 = document.querySelectorAll(".main2"); 
     const btn = document.querySelector("#generate");
     let input = document.querySelector("#selector").value;
     
 
    function image(){
      let input = document.querySelector("#selector").value;
      const key = "aeDYRm7avRvjGvgXkI7QBm2KAx0UeRuqaC4wCS8i";
     
       let url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${input}`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        main2[0].innerHTML = `<h2> Title: ${data.title}</h2>`;
        main2[1].innerHTML = `<p> Date: ${data.date}</p>`;
        main2[2].innerHTML = `<p>Description: ${data.explanation}</p>`;
        const img = document.querySelector("#img");
        img.src = data.url;
        console.log(data.title, data.date, data.explanation);
      })
      .catch(err => console.log("Error:", err));
    }
        if(input === ""){
input=new Date().toISOString().split("T")[0]; 
      }
    console.log(input);
    image();
    btn.addEventListener("click", image);
  

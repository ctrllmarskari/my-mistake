const message=  ' i dont even know u read this.\ni Just wanted to say sorry for my mistake.\n\nmaafin aku ya sayang klo aku sering ninggalin kmu buat main atau bbo.\n\nmaafin aku klo aku kurang waktu buat kmu.';

function showletter() {
  document.getElementById("introText").style.opacity = 0 ;
  document.querySelector(".btn").style.display = "none";

setTimeout(() => {
  const letterBox = document.getElementById(letterBox") ;
  const typedText = document.getElementById("typedText") ;
  letterBox.style.display = "block";
  let i = 0;

           function typeWriter() {
             if (i < message.length) {
               typedText.innerHTML += message.charAt(i);
               i++;
               serTimeout(typeWriter, 30);
             }
           }
            typeWriter();
          }, 600);
}

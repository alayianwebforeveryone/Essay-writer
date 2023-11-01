document.addEventListener('DOMContentLoaded', function() {
      const loginLink = document.getElementById('loginLink');
        const loginOverlay = document.getElementById('loginOverlay');
        const signupOverlay = document.getElementById('signupOverlay');
        const closeButtonSignup = document.getElementById('closeButtonSignup');
        const signupLinkInLogin = document.getElementById('signupLinkInLogin');
        const loginLinkInSignup = document.getElementById('loginLinkInSignup');

        loginLink.addEventListener('click', function(event) {
            event.preventDefault();
            loginOverlay.style.display = 'block';
        });

        signupLinkInLogin.addEventListener('click', function(event) {
            event.preventDefault();
            loginOverlay.style.display = 'none';
            signupOverlay.style.display = 'block';
        });

        loginLinkInSignup.addEventListener('click', function(event) {
            event.preventDefault();
            signupOverlay.style.display = 'none';
            loginOverlay.style.display = 'block';
        });

        loginOverlay.addEventListener('click', function(event) {
            if (event.target === loginOverlay) {
                loginOverlay.style.display = 'none';
            }
        });

        signupOverlay.addEventListener('click', function(event) {
            if (event.target === signupOverlay) {
                signupOverlay.style.display = 'none';
            }
        });
});


 var technologyOne = document.getElementById("tech1");
   const paraOne = "This is First paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsum pariatur autem cum blanditiis veritatis velit. Dolor, ducimus, fugiat. Eaque cumque iure odit voluptates eveniet saepe accusantium non corrupti, minima soluta dolorum eum adipisci. Nemo totam fugiat qui soluta vel dignissimos quisquam, praesentium quae ipsam amet dolore suscipit maiores libero expedita harum nobis tenetur ullam dicta. Aliquid blanditiis dolores nesciunt cumque dolore nisi perspiciatis reprehenderit quo, itaque architecto beatae at illo! Voluptatum eum esse vel inventore quidem nihil quasi necessitatibus dolor quas consequatur eveniet, sunt amet. Sapiente, soluta ab reprehenderit repudiandae, accusantium, accusamus illum ex nihil totam libero repellendus, odit assumenda molestias ullam culpa dicta quaerat quasi! Nulla fuga debitis tenetur esse id animi voluptate cumque neque nihil eveniet at cum optio, delectus soluta magnam natus omnis recusandae, quisquam dicta voluptates earum? Maiores aut, dolorem corporis distinctio beatae, cumque perspiciatis, sequi voluptates sapiente numquam dolore. Asperiores aliquam dolorem nam esse eius dolore sapiente, soluta accusantium odit hic ex. Corporis nisi, exercitationem maxime aliquam ea quaerat provident magnam temporibus aspernatur sapiente cumque quisquam, quis. Dicta magnam architecto porro eum. Perferendis, nisi dicta illo quis dolore ad numquam dolores impedit placeat in. ";
           technologyOne.addEventListener("click", function(){

          // alert("hello");
           var techHead = document.getElementById("tech-head");
           var techpara =  document.getElementById("tech-p");
           techHead.textContent = "Impact of technology";
           techpara.textContent = paraOne;
           })

           
// signup validation

           const submitsignup = document.getElementById("signup");
               const passwordInput = document.getElementById("password");
               const confirmPasswordInput = document.getElementById("confirm_password");

               submitsignup.addEventListener("submit", function(event) {
                   if (passwordInput.value !== confirmPasswordInput.value) {
                       alert("Passwords do not match!");
                       event.preventDefault(); // Prevent form submission
                   }
               });


  

          
          function showTab(tabIndex) {
            const tabButtons = document.querySelectorAll('.dashboard-btn');
            const tabContents = document.querySelectorAll('.dashcontent');

            tabButtons.forEach((button, index) => {
              if (index === tabIndex) {
                button.classList.add('open');
                tabContents[index].classList.add('open');
              } else {
                button.classList.remove('open');
                tabContents[index].classList.remove('open');
              }
            });
          }


     
           



 
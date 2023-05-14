
document.addEventListener('DOMContentLoaded', () => {


const myForm = document.querySelector('#loginForm');
myForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const bookingcode = document.querySelector('#bookingcode').value;
      
      if(bookingcode!=''){
        window.location.href = `https://ontripstaging.onrender.com/login?bookingcode=${bookingcode}`;
      }
      
    //   console.log(bookingcode + lastName)

      if (bookingcode == "") {
        alert("Please Enter your Booking Code");
        return false;
      }
      
    })

})


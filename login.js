
document.addEventListener('DOMContentLoaded', () => {


const myForm = document.querySelector('#loginForm');
myForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const bookingcode = document.querySelector('#bookingcode').value;
      
      if(bookingcode!=''){
        window.location.href = `file:///C:/Users/hp4/Desktop/OnTrip%20Help%20Login%20v2.0.1/user.html?bookingcode=${bookingcode}`;
      }
      
    //   console.log(bookingcode + lastName)

      if (bookingcode == "") {
        alert("Please Enter your Booking Code");
        return false;
      }
      
    })

})


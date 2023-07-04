
document.addEventListener('DOMContentLoaded', () => {

const urlParams = new URLSearchParams(window.location.search);
const bcode = urlParams.get('bookingcode');



    const url = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=userData&bookingcode=${bcode}`;
        
        const output = document.querySelector('.output');
        const fakebody = document.querySelector('.fakebody');
        const formbody = document.querySelector('.formBody');
        const failedLogs = document.querySelector('.failedLogin');
				const otherways = document.querySelector('.otherlogin');
        const loader = document.querySelector('.loader');
        
        let bodyData = null;


        fetch(url, {
          method: 'GET',
      }).then(res => res.json()).then(data => {
        bodyData = data[0]
        console.log(bodyData)
        

        if(data.error){
          failedlogin();
          
      }
      else{
          builduserdata();
      }

      })
      
            
            
                function failedlogin(){
                  output.innerHTML = 'Oops! Incorrect Password';
                }   
           
                function builduserdata(){
                    output.innerHTML = '';
                    loader.style.display='none';
                    fakebody.setAttribute("style", "background-image: url('');");

                  
                    
             

                      //HERO SECTION
                      const section = elementMaker('div', output, 'section1','','');
                      const namedetails = elementMaker('div', section, 'innerdiv','','');
                      const traveldetails = elementMaker('div', section, 'innerdiv2','','');	
                      elementMaker('div', namedetails, 'name','',`Hello <b>${bodyData.leadPaxName}</b>`);
                      elementMaker('div', namedetails, 'bookingid','',`Booking ID: ${bodyData.bookingcode}`);
                      
                      const destination = elementMaker('div', traveldetails, 'tripdest','','');
                      const tripdate = elementMaker('div', traveldetails, 'tripdate','','');
                      const tripCta = elementMaker('div', traveldetails, 'tripCta','','');
                      elementMaker('div', section, 'message','',bodyData.message?bodyData.message:'We Hope You Have a Wonderful Journey');

                      
                      elementMaker('div', destination, 'destination','',bodyData.destination);
                      elementMaker('div', destination, 'tripstatus','','Trip Confirmed');
                      
                      const tripStart = elementMaker('div', tripdate, 'tripdates','','');
                      elementMaker('div', tripStart, 'smallheads','','Arrival Date');
                      elementMaker('div', tripStart, 'tripDates','',bodyData.tripStart);

                      const tripEnd = elementMaker('div', tripdate, 'tripdates','','');
                      elementMaker('div', tripEnd, 'smallheads','','Departure Date');
                      elementMaker('div', tripEnd, 'tripDates','',bodyData.tripEnd);

                      const downloadVoucher = elementMaker('a', tripCta, 'voucher','','Download Voucher');
                      downloadVoucher.setAttribute('href',bodyData.voucher);
                      downloadVoucher.setAttribute('target','_blank');
                      

                      const destinationGuide = elementMaker('a', tripCta, 'guide','','Destination Guide');
                      destinationGuide.setAttribute('href',bodyData.destinationGuide);
                      destinationGuide.setAttribute('target','_blank');
                    

                      //AIRPORT PICK UP DETAILS
                      const section2 = elementMaker('div', output, 'section2','','');
                      const innerSection = elementMaker('div', section2, 'innerSection','','');
                      const pickupLocation = elementMaker('div', innerSection, 'innerDiv','','');
                      const pickupLocationx = elementMaker('div', pickupLocation, 'innerDivx','','');
                      elementMaker('div', innerSection, 'divider','','');
                      const driverDetail = elementMaker('div', innerSection, 'innerDiv2','','');
                      const driverCall = elementMaker('a', driverDetail, 'dcall','','');
                      driverCall.setAttribute('href', `tel:+${bodyData.driver.driverCode} ${bodyData.driver.driverNumber}`);
                      driverCall.setAttribute('target','_blank');
                      const driverDetailx = elementMaker('div', driverDetail, 'innerDivx','','');

                      elementMaker('div', pickupLocationx, 'pickuploct','','Pick Up Location');
                      elementMaker('div', pickupLocationx, 'location','',bodyData.apLocation);
                      
                      elementMaker('div', driverDetailx, 'location','',`<b>${bodyData.driver.driverName}</b> will be at the Pick Up Location!`);
                      elementMaker('div', driverDetailx, 'location','',`+${bodyData.driver.driverCode} ${bodyData.driver.driverNumber}`);

                    



                      //TRIP HAPPINESS OFFICER
                      const section3 = elementMaker('div', output, 'section3','','');
                      const tripofficer = elementMaker('div', section3, 'innerdiv3','','');
                      elementMaker('div', tripofficer, 'tripofficer','','Trip Happiness Officer');
                      elementMaker('div', tripofficer, 'tripx','','Available 24x7 for a Smooth Trip!');
                      elementMaker('div', tripofficer, 'dividerx','','');
                      elementMaker('div', tripofficer, 'expertoverlay','','');
                      const officerContact = elementMaker('div', tripofficer, 'innerdiv4','','');

                      const captainCall = elementMaker('a', officerContact, 'dcall','','');
                      captainCall.setAttribute('href', `tel:+91 ${bodyData.supportData[0].phoneNumber}`);
                      captainCall.setAttribute('target','_blank');
                      
                      const captainChat = elementMaker('a', officerContact, 'dchat','','');
                      captainChat.setAttribute('href', bodyData.supportData[0].whatsapp);
                      captainChat.setAttribute('target','_blank');

                      elementMaker('span', officerContact, 'namecontact','',`+91 ${bodyData.supportData[0]. phoneNumber}`);

                      
                       
                      //Section3 - Restaurant Details
                      const section4 = elementMaker('div', output, 'section4','','');
                      elementMaker('h3', section4, 'headings2','',`Top Restaurants in ${bodyData.destination}`);
                      const restaurantGrid = elementMaker('div', section4, 'listinggrid','','');
                      
                     
                      
                          //Get Current Card Data
                          function getRestaurantDetails(e, cardName) {
                            const restaurant =  `${cardName}, ${bodyData.destination}`;
                            
                            const resturl = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=restaurantdetail&restaurant=${restaurant}`;

                                fetch(resturl, {
                                    method: 'GET',
                                }).then(res => res.json()).then(data => {
                                  // console.log(data);
                                  restdetails(data);
                                })
                          

                          }
                      
                      //POP FOR RESTAURANT
                      
                      const restaruantpopup = elementMaker('div', fakebody, 'detailsoverlay','','');
                      const popup = document.querySelector('.detailsoverlay');
                      popup.style.display="none"

                      
                      let innerPopUp; 
                     

                      
                        function restdetails(data){
                          
                          if(innerPopUp){
                            innerPopUp.remove()                            
                          }
                          
                          innerPopUp =  elementMaker('div', restaruantpopup, 'restpopup','','');
                          innerPopUp.style.display = "none"; // Set initial display to none

                          const restname = elementMaker('div', innerPopUp, 'restnameholder','','');
                                
                          elementMaker('div', restname, 'restname','',data[0].restName);
                          elementMaker('div', restname, 'back','','Back');
                          elementMaker('div', innerPopUp, 'restrating','',`${data[0].starrating} ⭐ Ratings | ${data[0].price} for Two`);
    
                          const cuisine =  elementMaker('div', innerPopUp, 'tagcontainer','','');
                          data[0].cuisines.forEach(items=>{
                            elementMaker('div', cuisine, 'tags','',items);

                          })
                          
                  
    
                          elementMaker('div', innerPopUp, 'restlocation','',data[0].location);
    
                          const restcta =  elementMaker('div', innerPopUp, 'restctacontainer','','');
                          const callnow = elementMaker('a', restcta, 'voucher','','Call Restaurant');
                          callnow.setAttribute('href', `tel:${data[0].countrycode}`);
                          callnow.setAttribute('target','_blank');
                          
    
                          const direction = elementMaker('a', restcta, 'guide','','View in Map');
                          direction.setAttribute('href', data[0].mapdirection);
                          direction.setAttribute('target','_blank');
                          
                          innerPopUp.style.display = "block"

                          const closepopup = document.querySelector('.back');
                      
                          closepopup.addEventListener('click', (e)=> {
                            popup.setAttribute('style','display:none');
                            // console.log(innerPopUp)
                            innerPopUp.remove();
                          });

                        }
                        
                
                      bodyData.restaurantListing.forEach((items) => {
                        const restaurantCard = elementMake('div', restaurantGrid, 'listingcard','','',items.coverimage);
                        restaurantCard.addEventListener('click', (e) => {
                          getRestaurantDetails(e, items.restName);
                          popup.setAttribute('style','display:flex');

                        });
        
        
                        const cardhead = elementMaker('div', restaurantCard, 'cardhead','','');
                        elementMaker('div', restaurantCard, 'cardoverlay','','');
                        const cardpricing = elementMaker('div', restaurantCard, 'cardpricing','','');
                        
                        elementMaker('div', cardhead, 'reviews','',`${items.reviews}+ Reviews`);
                        elementMaker('div', cardpricing, 'restaurantname','',items.restName);
                        elementMaker('div', cardpricing, 'fivider','','');
                        elementMaker('div', cardpricing, 'dishprices','',`${items.price} <span class="person">per person*</span>`);
                      });



                      
                      //Frequently Asked Question
                      const section5 = elementMaker('div', output, 'section5','','');
                      elementMaker('h3', section5, 'headings3','','Frequently Asked Question');
                      const faqData = elementMaker('div', section5, 'faqdata','','');

                      bodyData.faq.map((item, index)=> {
                        const faq = elementMaker('details', faqData, 'faqdataBlock', '', '');
                        const faqHeader = elementMaker('summary', faq, 'faqHeader', '', `Q. ${item.question}`);
                        const faqContent = elementMaker('div', faq, 'faqContent', '', item.answer);
                      
                        if (index === 0) { 
                            faq.setAttribute('open', '');
                          }
            
                        faqHeader.addEventListener('click', () => {
                            faqContent.classList.toggle('hidden');
                          });
                        
                      });
          
            }



       
     

        

             
       
          
       

        //Element Creator Function
        function elementMaker(t, p, c, i, h) {
            const el = document.createElement(t);
            if (typeof c === 'object') {
              c = c.className;
            }
            el.classList.add(c);
            if(i){
                el.setAttribute('id', i);  
            }
            el.innerHTML = h;
            return p.appendChild(el);
          }


          function elementMake(t, p, c, i, h, backgroundImageURL) {
            const el = document.createElement(t);
            if (typeof c === 'object') {
              c = c.className;
            }
            el.classList.add(c);
            if (i) {
              el.setAttribute('id', i);
            }
            el.innerHTML = h;
            
          
            if (backgroundImageURL) {
              el.style.backgroundImage = `url(${backgroundImageURL})`;
            }
            
            return p.appendChild(el);
          }
          

          
        
        
})


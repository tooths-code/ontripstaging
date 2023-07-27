
document.addEventListener('DOMContentLoaded', () => {

const urlParams = new URLSearchParams(window.location.search);
const bcode = urlParams.get('bookingcode');



    const url = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=userData&bookingcode=${bcode}`;
        
        const output = document.querySelector('.output');
        const fakebody = document.querySelector('.fakebody');
        const formbody = document.querySelector('.formBody');
        // const failedLogs = document.querySelector('.failedLogin');
				const otherways = document.querySelector('.otherlogin');
        const loader = document.querySelector('.hellox');
        const loadery = document.querySelector('.helloloader');
        
        let bodyData = null;

       

      fetch(url,{method:'GET'}).then(res=>res.json()).then(data=>{bodyData=data}).then(kee=>{fetch(`https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=todolist&destination=${bodyData.destination}`,{method:'GET'}).then(response => response.text()).then(loop => {const decode = JSON.parse(atob(loop));if(bodyData.error){failedlogin()}else{builduserdata(decode)}}).catch(error => {console.error('Error fetching checkbox items:', error)});})
     
   
            
                function failedlogin(){
                  output.innerHTML = '';
                  loader.style.display='none';
                  formbody.style.display='flex';
                  otherways.style.display='flex';
                }   
           
                function builduserdata(jsonData){
                  loader.style.display='none';
                    output.innerHTML = '';
                    // loader.style.display='none';
                    fakebody.setAttribute("style", "background-image: url('');");



                    //Section 0 Travel Agent Name
                    const section0 = elementMaker('div', output, 'section0','','');
                    elementMaker('div', section0, 'agencyName','',bodyData.agencyName);
             

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
                      
                      bodyData.destinationGuide ? voucherguide():voucheronly()

                      function voucherguide(){
                        const downloadVoucher = elementMaker('a', tripCta, 'voucher','','Download Voucher');
                        downloadVoucher.setAttribute('href',bodyData.voucher);
                        downloadVoucher.setAttribute('target','_blank');
                        
  
                        const destinationGuide = elementMaker('a', tripCta, 'guide','','Destination Guide');
                        destinationGuide.setAttribute('href',bodyData.destinationGuide);
                        destinationGuide.setAttribute('target','_blank');
                      }

                      function voucheronly(){
                        const downloadVoucher = elementMaker('a', tripCta, 'voucher','','Download Voucher');
                        downloadVoucher.setAttribute('href',bodyData.voucher);
                        downloadVoucher.setAttribute('target','_blank');
                      }
                      
                    

                      //AIRPORT PICK UP DETAILS
                      const section2 = elementMaker('div', output, 'section2','','');
                      const innerSection = elementMaker('div', section2, 'innerSection','','');
                      const pickupLocation = elementMaker('div', innerSection, 'innerDiv','','');
                      const pickupLocationx = elementMaker('div', pickupLocation, 'innerDivx','','');
                      elementMaker('div', pickupLocationx, 'pickuploct','','Pick Up Location');
                      elementMaker('div', pickupLocationx, 'location','',bodyData.apLocation);
                      elementMaker('div', innerSection, 'divider','','');

                      bodyData.driverStatus === "Driver Assigned"?driverDetials():remarks();

                      function driverDetials(){
                        const driverDetail = elementMaker('div', innerSection, 'innerDiv2','','');
                        const driverCall = elementMaker('a', driverDetail, 'dcall','','');
                        driverCall.setAttribute('href', `tel:+${bodyData.driver.driverCode} ${bodyData.driver.driverNumber}`);
                        driverCall.setAttribute('target','_blank');
                        const driverDetailx = elementMaker('div', driverDetail, 'innerDivx','','');
                        elementMaker('div', driverDetailx, 'locationname','',`Driver Name: <b>${bodyData.driver.driverName}</b>`);
                        elementMaker('div', driverDetailx, 'location','',`+${bodyData.driver.driverCode} ${bodyData.driver.driverNumber}`);

                        const driverRemarks = elementMaker('div', innerSection, 'innerDivy','','');
                        elementMaker('div', driverRemarks, 'locationx','',`<b>Remarks:</b> ${bodyData.driverRemarks}`);
                      }
                     
                      function remarks(){
                        const driverRemarks = elementMaker('div', innerSection, 'innerDivy','','');
                        elementMaker('div', driverRemarks, 'locationx','',`<b>Remarks:</b> ${bodyData.driverRemarks}`);
                      }

                     

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

                      
                       if(bodyData.restaurantListing[0]){
                            
                        //Section3 - Restaurant Details
                        const section4 = elementMaker('div', output, 'section4','','');
                        elementMaker('h3', section4, 'headings2','',`Top Restaurants in ${bodyData.destination}`);
                        const restaurantGrid = elementMaker('div', section4, 'listinggrid','','');

                              //SPINNER LOADER
                              function showSpinner() {
                                const spinner = document.querySelector('.hello');
                                spinner.style.display = 'flex';
                              }
                              
                              function hideSpinner() {
                                const spinner = document.querySelector('.hello');
                                spinner.style.display = 'none'; 
                              }

                            //Current Destination Restaurant Listing
                            async function getAllRestaurants() {
                              const destination = bodyData.destination;
                              const resturl = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=allrestaurantList&destination=${destination}`;
                            
                              const response = await fetch(resturl);
                              const data = await response.json();
                              return data;
                            }
                            

                            
                            
                            let currentRestaurant = null;

                            //Get Current Card Data Listing
                            async function getRestaurantDetails(e, cardName) {
                              showSpinner();

                              let data;
                              if (!currentRestaurant) {
                                data = await getAllRestaurants();
                                currentRestaurant = data;
                              } else {
                                data = currentRestaurant;
                              }
                              // console.log(data)
                              hideSpinner();
                              const foundItem = data.find(item => item.restName === cardName);
                              // console.log(foundItem);
                              restdetails(foundItem); 
                            }

                  

                            const restaruantpopup = elementMaker('div', fakebody, 'detailsoverlay','','');
                            const popup = document.querySelector('.detailsoverlay');
                            popup.style.display="none";
                      
                    



                      //POP FOR RESTAURANT
                      let innerPopUp; 

                      function restdetails(data){
                        
                        if(innerPopUp){
                          innerPopUp.remove()                            
                        }

                       
                        
                        innerPopUp =  elementMaker('div', restaruantpopup, 'restpopup','','');
                        innerPopUp.style.display = "none"; 

                        const restname = elementMaker('div', innerPopUp, 'restnameholder','','');
                              
                        elementMaker('div', restname, 'restname','',data.restName);
                        elementMaker('div', restname, 'back','','Back');
                        elementMaker('div', innerPopUp, 'restrating','',`${data.starrating} ⭐ Ratings | ${data.price} for Two`);
  
                        const cuisine =  elementMaker('div', innerPopUp, 'tagcontainer','','');
                        data.cuisines.forEach(items=>{
                          elementMaker('div', cuisine, 'tags','',items);

                        })
                        
                
  
                        elementMaker('div', innerPopUp, 'restlocation','',data.location);
  
                        const restcta =  elementMaker('div', innerPopUp, 'restctacontainer','','');
                        const callnow = elementMaker('a', restcta, 'voucher','','Call Restaurant');
                        callnow.setAttribute('href', `tel:${data.countrycode}`);
                        callnow.setAttribute('target','_blank');
                        
  
                        const direction = elementMaker('a', restcta, 'guide','','View in Map');
                        direction.setAttribute('href', data.mapdirection);
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
                          
                          popup.setAttribute('style','display:flex');
                          //After First Click I have removed a function to prevent multiple API Calls that pulls the entire destination restuarant data
                          
                          getRestaurantDetails(e, items.restName);
 
                          

                        });
        
        
                        const cardhead = elementMaker('div', restaurantCard, 'cardhead','','');
                        elementMaker('div', restaurantCard, 'cardoverlay','','');
                        const cardpricing = elementMaker('div', restaurantCard, 'cardpricing','','');
                        
                        elementMaker('div', cardhead, 'reviews','',`${items.reviews}+ Reviews`);
                        elementMaker('div', cardpricing, 'restaurantname','',items.restName);
                        elementMaker('div', cardpricing, 'fivider','','');
                        // elementMaker('div', cardpricing, 'dishprices','',`${items.price} <span class="person">per person*</span>`);
                        elementMaker('div', cardpricing, 'dishprices','',`${items.price}`);
                      });

                    }




                    //create Spot & Strike Task list
                    const section6 = elementMaker('div', output, 'section6','','');
                    elementMaker('h3', section6, 'labelheadings','','Spot & Strike');
                    const taskListDiv = elementMaker('div', section6, 'tasklizt','lizt','');
                    
                      jsonData.forEach(task => {
                        const checkboxwrapper = document.createElement('div');
                        checkboxwrapper.classList.add('checkwraper');
                        const checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.value = task.uniqueCode;
                        checkbox.name='taskLists';
                        const preSelected = bodyData.checklist.uniqueCode
                        checkbox.checked = preSelected.includes(task.uniqueCode);
        
                        checkbox.addEventListener('change', () => {
                          // loadery.style.display='flex';
                          sendCheckedValues();
                        });

                        const labelWrapper = document.createElement('div');
                        labelWrapper.classList.add('labelwrapper');
                        
                        const label = document.createElement('label');
                        label.classList.add('labelhead')
                        label.textContent = task.taskName;

                        const subLabel = document.createElement('div');
                        subLabel.classList.add('subLabel')
                        subLabel.innerText = task.description;
                        
                        labelWrapper.appendChild(label);
                        labelWrapper.appendChild(subLabel);

                        checkboxwrapper.appendChild(checkbox);
                        checkboxwrapper.appendChild(labelWrapper);;
                        taskListDiv.appendChild(checkboxwrapper)
                      });


                      //SET CHECKED VALUES
                      function sendCheckedValues() {
                        const checkedValues = Array.from(document.querySelectorAll('input[name="taskLists"]:checked'))
                          .map(checkbox => checkbox.value);

                          const tasks = JSON.stringify(checkedValues);

                          const urlder = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=userList&queryCode=${bodyData.bookingcode}&tasks=${tasks}`;

                          fetch(urlder,{method:'GET'}).then(res => res.json())
                          .then(data => { 
                            // loadery.style.display='none';
                            // console.log(data)
                          })
                          .catch(error => {
                            console.error('Error:', error);
                          });
                        
                          // console.log(tasks)
                        }
                      
                
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

                       //Footer
                       const section8 = elementMaker('div', output, 'section8','','');
                       const innerSection8 = elementMaker('div', section8, 'innersection8','','');
                       elementMaker('div', innerSection8, 'sectionheadings','','All rights reserved 2023');
          
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


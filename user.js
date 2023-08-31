document.addEventListener('DOMContentLoaded', () => {

const urlParams = new URLSearchParams(window.location.search);
const bcode = urlParams.get('bookingcode');

    const url = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=cacheUserData&bookingcode=${bcode}`;
        
        const output = document.querySelector('.output');
        const fakebody = document.querySelector('.fakebody');
        const formbody = document.querySelector('.formBody');
        // const failedLogs = document.querySelector('.failedLogin');
				const otherways = document.querySelector('.otherlogin');
        const loader = document.querySelector('.hellox');
        const loadery = document.querySelector('.helloloader');
        
        let bodyData = null;

      
           //LOADER FUNCTION JS
          function loaderJS(e){
            const wrapper = document.createElement('div');
            const ring = document.createElement('div');
            const loaderText = document.createElement('div');
            wrapper.classList.add('loader-wrapper')
            ring.classList.add('loader-ring');
            loaderText.classList.add('saving');
            loaderText.innerText = "Loading..."
            wrapper.appendChild(ring);
            wrapper.appendChild(loaderText);
            e.appendChild(wrapper);
          }

          function loaderJS2(e){
            const wrapper = document.createElement('div');
            const ring = document.createElement('div');
            const loaderText = document.createElement('div');
            wrapper.classList.add('loader-wrapper2')
            ring.classList.add('loader-ring');
            loaderText.classList.add('saving');
            loaderText.innerText = "Loading..."
            wrapper.appendChild(ring);
            wrapper.appendChild(loaderText);
            e.appendChild(wrapper);
          }

          function loaderJS3(e){
            const wrapper = document.createElement('div');
            const ring = document.createElement('div');
            const loaderText = document.createElement('div');
            wrapper.classList.add('loader-wrapper3')
            ring.classList.add('loader-ring');
            loaderText.classList.add('saving');
            loaderText.innerText = "Loading..."
            wrapper.appendChild(ring);
            wrapper.appendChild(loaderText);
            e.appendChild(wrapper);
          }

          function hideLoader() {
            const spinner = document.querySelector('.loader-wrapper');
            spinner.style.display = 'none'; 
          }

          function hideLoader2() {
            const spinner = document.querySelector('.loader-wrapper2');
            spinner.style.display = 'none'; 
          }

          function hideLoader3() {
            const spinner = document.querySelector('.loader-wrapper3');
            spinner.style.display = 'none'; 
          }
       

      // fetch(url,{method:'GET'}).then(res=>res.json()).then(data=>{bodyData=data}).then(kee=>{fetch(`https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=todolist&destination=${bodyData.destination}`,{method:'GET'}).then(response => response.text()).then(loop => {
      // // console.log(bodyData)
      // const decode = JSON.parse(atob(loop));
      // // console.log(bodyData)
      
      // if(bodyData.error){
      //   failedlogin()
      // }
      // else{
      //   if (window.innerWidth < 768) {
      //     builduserdata(decode)
      //   }    
      //   else{
      //     desktopMode(decode)
      //   }
        
      //   }}).catch(error => {console.error('Error fetching checkbox items:', error)});})

        fetch(url,{method:'GET'}).then(res=>res.json()).then(data=>{
          bodyData=data;
          if(bodyData.error){
            failedlogin()
          }
          else{
            if (window.innerWidth < 768) {
              builduserdata()
            }    
            else{
              desktopMode()
            }
          } 

        }).then(kee=>{fetch(`https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=todolist&destination=${bodyData.destination}`,{method:'GET'}).then(response => response.text()).then(loop => {
      // console.log(bodyData)
      const decode = JSON.parse(atob(loop));
      // console.log(decode)
      if (window.innerWidth < 768) {
        decode[0]?builduserdataTodoList(decode):hideLoader()
      }  
      else{
        decode[0]?desktopModeTodoList(decode):null;
      }
       
     
        
        }).catch(error => {console.error('Error fetching checkbox items:', error)});})
     
                function desktopMode(jsonData){
                  loader.style.display='none';
                  output.innerHTML = '';  
                  fakebody.setAttribute("style", "background-image: url('');");

                   //Section 0 Travel Agent Name
                   const section0 = elementMaker('div', output, 'section0','','');
                   elementMaker('div', section0, 'agencyName','',bodyData.agencyName);
            

                     //HERO SECTION
                     const section = elementMaker('div', output, 'section1','','');
                     const namedetails = elementMaker('div', section, 'innerdiv','','');
                     	
                     elementMaker('div', namedetails, 'name','',`Hello <b>${bodyData.leadPaxName}</b>`);
                     elementMaker('div', namedetails, 'bookingid','',`Booking ID: ${bodyData.bookingcode}`);

                     const wrapper = elementMaker('div', section,'wrapperHero','','');
                     
                     //Traveller Details
                     const travelWrapper = elementMaker('div', wrapper, 'innerdivWrapper','','');
                     bodyData.destHeroImagex[0]?elementMake('div', travelWrapper, 'innerDestImg','','',bodyData.destHeroImagex[0].heroImage):elementMake('div', travelWrapper, 'innerDestImg','','','https://ontriphelp.com/wp-content/uploads/2023/08/image-490.jpg');
                     const traveldetails = elementMaker('div', travelWrapper, 'innerdiv2','','');
                     const destination = elementMaker('div', traveldetails, 'tripdest','','');
                      const tripdate = elementMaker('div', traveldetails, 'tripdate','','');
                      const tripCta = elementMaker('div', traveldetails, 'tripCta','','');
                     

                      
                      elementMaker('div', destination, 'destination','',bodyData.destination);
                      elementMaker('div', destination, 'tripstatus','','Trip Confirmed');
                      
                      const tripStart = elementMaker('div', tripdate, 'tripdates','','');
                      elementMaker('div', tripStart, 'smallheads','','Arrival Date');
                      elementMaker('div', tripStart, 'tripDates','',bodyData.tripStart);

                      const tripEnd = elementMaker('div', tripdate, 'tripdates','','');
                      elementMaker('div', tripEnd, 'smallheads','','Departure Date');
                      elementMaker('div', tripEnd, 'tripDates','',bodyData.tripEnd);
                      
                      bodyData.voucher?voucherwithguidelogic():noVoucher()

                      function voucherwithguidelogic(){
                        bodyData.destinationGuide ? voucherguide():voucheronly()
                      }

                      function noVoucher(){
                        elementMaker('div',tripCta,'voucherprocessing','','Your Voucher is being Processed...Please wait')
                      }

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
                  
                     
                       const innerSection = elementMaker('div', wrapper, 'innerSection','','');
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


                       //Trip Happiness Officer
                      const section3 = elementMaker('div', output, 'section3','','');
                      const tripofficer = elementMaker('div', section3, 'innerdiv3','','');
                      const imageWrapper = elementMaker('div', tripofficer, 'imgwrapper','','');
                      elementMake('div', imageWrapper, 'imgOfficer','','','https://ontriphelp.com/wp-content/uploads/2023/07/image-19-1.jpg');
                      const headWrapper = elementMaker('div', imageWrapper, 'wrapperOfficer','','');
                      elementMaker('div', headWrapper, 'tripofficer','','Trip Happiness Officer');
                      elementMaker('div', headWrapper, 'tripx','','Available 24x7 for a Smooth Trip!');
                      const officerContact = elementMaker('div', tripofficer, 'innerdiv4','','');

                      const captainCall = elementMaker('a', officerContact, 'dcallx','','');
                      captainCall.setAttribute('href', `tel:+91 ${bodyData.supportData[0].phoneNumber}`);
                      captainCall.setAttribute('target','_blank');
                      
                      const captainChat = elementMaker('a', officerContact, 'dchat','','');
                      captainChat.setAttribute('href', bodyData.supportData[0].whatsapp);
                      captainChat.setAttribute('target','_blank');

                      const section9 = elementMaker('div', output, 'section90','','');
                      bodyData.quickGridLinks[0] ? quickLinksGrids():null;

                      //QUICK LINK GRID MAIN SECTION
                      function quickLinksGrids(){

                       const gridLinks = elementMaker('div', section9, 'sectionGridz','','');
                       elementMaker('div', gridLinks, 'innerHeads','','Quick Links');
                       const quickGrid = elementMaker('div', gridLinks, 'innerGrid','','');

                      
                           //DID YOU KNOW POPUP
                           const doknow = elementMaker('div', fakebody, 'gridoverlays','','');
                           doknow.style.display="none";
                           const innerGridData =  elementMaker('div', doknow, 'innerGridData','','');
                           const back = elementMaker('div', innerGridData, 'backInner','','');
                           const backx = elementMaker('div', back, 'backx','','Back');
                          

                           //LOOP FOR GROUPED GRID
                           bodyData.quickGridLinks.forEach(gridData=>{
                            if(gridData.gridTags === "Grouped"){
  
                              const gridContainer = document.createElement('a');
                              const innerGridContainer = document.createElement('div');
                              const innerHeadGrid = document.createElement('div');
                              const gridIconarrow = document.createElement('div');

                              gridContainer.classList.add('linkGrids');
                              innerGridContainer.classList.add('innerGridx');
                              innerHeadGrid.classList.add('innerHeadGrid');
                              gridIconarrow.classList.add('gridIconarrow');

                              gridContainer.setAttribute('href',`${gridData.gridUrl}`);
                              gridContainer.setAttribute('target','_blank');
                              gridIconarrow.setAttribute('style',`background-image: url("https://ontriphelp.com/wp-content/uploads/2023/07/Expand-Arrow.png");`)

                              innerHeadGrid.textContent = gridData.gridHead;

                              innerGridData.appendChild(gridContainer);
                              gridContainer.appendChild(innerGridContainer);
                              innerGridContainer.appendChild(innerHeadGrid);
                              innerGridContainer.appendChild(gridIconarrow);
                             
                            }
                           })



                       //Links for Quick Grid
                       const dyknow = elementMaker('a', quickGrid, 'linkGrids','','');
                       const container1 =  elementMaker('div', dyknow, 'gridcontainer','','');
                                            elementMake('div', container1, 'imgGrid','','','https://ontriphelp.com/wp-content/uploads/2023/07/My-project-30-1.png');
                                            elementMaker('div', container1, 'textGrid','','Did you<br>know');

                       dyknow.addEventListener('click', (e)=> {
                        doknow.style.display="flex";
                        document.body.classList.add('body-scroll-lock');
                        document.querySelector('.body-scroll-lock').style.overflow="hidden";
                       })

                       backx.addEventListener('click',(e)=>{
                        doknow.style.display="none";
                        document.querySelector('.body-scroll-lock').style.overflow="";
                       })


                      //LOOP FOR REMAINING GRID (UNGROUPED)
                        bodyData.quickGridLinks.forEach(gridData=>{
                          if(gridData.gridTags === "Ungrouped"){

                            const gridContainer = document.createElement('a');
                            const innerGridContainer = document.createElement('div');
                            const gridImg = document.createElement('div');
                            const textGrid = document.createElement('div');
                            
    
                            gridContainer.classList.add('linkGrids');
                            gridContainer.setAttribute('href',`${gridData.gridUrl}`);
                            gridContainer.setAttribute('target','_blank');
                            quickGrid.appendChild(gridContainer);
                            gridContainer.appendChild(innerGridContainer);
    
                            gridImg.classList.add('imgGrid');
                            gridImg.setAttribute('style',`background-image: url("${gridData.gridImage}");`)
    
                            innerGridContainer.classList.add('gridcontainer');
                            textGrid.classList.add('textGrid');
                            textGrid.textContent = gridData.gridHead;
                            innerGridContainer.appendChild(gridImg);
                            innerGridContainer.appendChild(textGrid);
                          }
                         })

                      }
                      
                      // let checkListItems = null;
                      const todoLinks = elementMaker('div', section9, 'todoGrid','toGrid','');
                      loaderJS2(todoLinks)
                      // const checkListUrl = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=userCheckedList&bookingcode=${bcode}`;
                      // fetch(checkListUrl,{method:'GET'}).then(res=>res.json()).then(async (data)=>{
                      //   checkListItems=data;
                      //   jsonData[0]? await userCheckList():null;
                      // });

                      // // jsonData[0]?userCheckList():null;

                      // async function userCheckList(){
  
                      // //create Spot & Strike Task list
                      // // const todoLinks = elementMaker('div', section9, 'todoGrid','','');
                      // elementMaker('h3', todoLinks, 'labelheadings','','Spot & Strike');
                      // const taskListDiv = elementMaker('div', todoLinks, 'tasklizt','lizt','');
                      
                      //   jsonData.forEach(task => {
                      //     const checkboxwrapper = document.createElement('div');
                      //     checkboxwrapper.classList.add('checkwraper');
                      //     const checkbox = document.createElement('input');
                      //     checkbox.type = 'checkbox';
                      //     checkbox.value = task.uniqueCode;
                      //     checkbox.name='taskLists';
                      //     const preSelected = checkListItems.uniqueCode
                      //     checkbox.checked = preSelected.includes(task.uniqueCode);
          
                      //     checkbox.addEventListener('change', () => {
                      //       sendCheckedValues();
                      //     });
  
                      //     const labelWrapper = document.createElement('div');
                      //     labelWrapper.classList.add('labelwrapper');
                          
                      //     const label = document.createElement('label');
                      //     label.classList.add('labelhead')
                      //     label.textContent = task.taskName;
  
                      //     const subLabel = document.createElement('div');
                      //     subLabel.classList.add('subLabel')
                      //     subLabel.innerText = task.description;
                          
                      //     labelWrapper.appendChild(label);
                      //     labelWrapper.appendChild(subLabel);
  
                      //     checkboxwrapper.appendChild(checkbox);
                      //     checkboxwrapper.appendChild(labelWrapper);;
                      //     taskListDiv.appendChild(checkboxwrapper)
                      //   });
  
  
                      //   //SET CHECKED VALUES
                      //   function sendCheckedValues() {
                      //     const checkedValues = Array.from(document.querySelectorAll('input[name="taskLists"]:checked'))
                      //       .map(checkbox => checkbox.value);
  
                      //       const tasks = JSON.stringify(checkedValues);
  
                      //       const urlder = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=userList&queryCode=${bodyData.bookingcode}&tasks=${tasks}`;
  
                      //       fetch(urlder,{method:'GET'}).then(res => res.json())
                      //       .then(data => { 
                      //         // loadery.style.display='none';
                      //         // console.log(data)
                      //       })
                      //       .catch(error => {
                      //         console.error('Error:', error);
                      //       });
                      //       // console.log(tasks)
                      //     }
  
                      // }

                        // if(bodyData.restaurantListing[0])

                        // RESTAURANT SECTION
                        const section4 = elementMaker('div', output, 'section4','','');
                        loaderJS(section4);
                        
                        let restaurantItems = null;
                        const restaurantURL = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=restaurants&destination=${bodyData.destination}`;
                        fetch(restaurantURL,{method:'GET'}).then(res=>res.json()).then((data)=>{
                          restaurantItems=data;
                          restaurantItems[0]? restaurantSection():hideLoader();
                        });

                        // bodyData.restaurantListing[0]?restaurantSection():null;

                        function restaurantSection(){
                            
                          const spinner = document.querySelector('.loader-wrapper');
                          spinner.style.display = 'none'; 
                          elementMaker('h3', section4, 'headings2','',`Top Restaurants in ${bodyData.destination}`);
                          const restaurantGrid = elementMaker('div', section4, 'listinggrid','','');
  
                                //SPINNER LOADER
                                function showSpinner() {
                                  const spinner = document.querySelector('.hello');
                                  // const spinnerx = document.querySelector('.helloloader');
                                  spinner.style.display = 'flex';
                                  // spinnerx.style.display = 'flex';
                                }
                                
                                function hideSpinner() {
                                  const spinner = document.querySelector('.hello');
                                  // const spinnerx = document.querySelector('.helloloader');
                                  spinner.style.display = 'none'; 
                                  // spinnerx.style.display = 'none'; 
                                }

                                function showSpinnerx() {
                                  const spinner = document.querySelector('.helloloader');
                                 
                                  spinner.style.display = 'flex';
                                 
                                }
                                
                                function hideSpinnerx() {
                                  const spinner = document.querySelector('.helloloader');
                                  
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
                                showSpinnerx();
  
                                let data;
                                if (!currentRestaurant) {
                                  data = await getAllRestaurants();
                                  currentRestaurant = data;
                                } else {
                                  data = currentRestaurant;
                                }
                                // console.log(data)
                                hideSpinnerx();
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
                          elementMaker('div', innerPopUp, 'restrating','',`${data.starrating} Star Ratings | ${data.price} for Two`);
    
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
                          document.body.classList.add('body-scroll-lock');
                          document.querySelector('.body-scroll-lock').style.overflow="hidden";
  
                          const closepopup = document.querySelector('.back');
                      
                          closepopup.addEventListener('click', (e)=> {
                            popup.setAttribute('style','display:none');
                            // console.log(innerPopUp)
                            document.querySelector('.body-scroll-lock').style.overflow="";
                            innerPopUp.remove();
                          });
  
                        }
  
                       
                        restaurantItems.forEach((items) => {
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

                //MOBILE
                function failedlogin(){
                  output.innerHTML = '';
                  loader.style.display='none';
                  formbody.style.display='flex';
                  otherways.style.display='flex';
                }   

                //MOBILE
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
                      

                      bodyData.voucher?voucherwithguidelogic():noVoucher()

                      function voucherwithguidelogic(){
                        bodyData.destinationGuide ? voucherguide():voucheronly()
                      }

                      function noVoucher(){
                        elementMaker('div',tripCta,'voucherprocessing','','Your Voucher is being Processed...Please wait')
                      }

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
                      
                      bodyData.arrivalPics?arrivalimages():null;
                      //ARRIVAL PICTURE SECTION
                      function arrivalimages(){
                      const section1_5 = elementMaker('a',output,'arrivalSection','','');
                      const gradientOverlay = elementMaker('a',section1_5,'gradientOverlay','','');
                      section1_5.setAttribute('href',bodyData.arrivalPics);
                      section1_5.setAttribute('target','_blank');
                      const image = elementMake('div', section1_5, 'arrivalimg','','','https://ontriphelp.com/wp-content/uploads/2023/08/Group-28.png');
                      const arrivaltext = elementMaker('div',section1_5,'arrivalText','',`Download your <b>Arrival Pictures</b>`);
                      const arrivalDownload = elementMake('div', section1_5, 'arrivaldownload','','','https://ontriphelp.com/wp-content/uploads/2023/08/arrow-1.png');
                      }
                      
                      //ITINERARY SECTION
                      const section1_6 = elementMaker('div',output,'itinerarySection','itineraryContainer','');
                      const section2 = elementMaker('div', output, 'section2','','');
                      loaderJS3(section1_6);
                      const itineraryurl = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=itineraryUpdates&bookingcode=${bcode}`;

                      fetch(itineraryurl,{method:'GET'}).then(res=>res.json()).then(data=>{
                        data.error?airportPickUpOnly():itineraryUpdate(data);
                        }).catch(error => {console.error('Error fetching checkbox items:', error)});

                      function itineraryUpdate(data){
                        hideLoader3()
                        const tabContainer = document.getElementById('itineraryContainer');
              
                                let defaultTabId = null;
                                let defaultTabbuttonId = null;
            
                                const tabButtonWrapper = document.createElement('div');
                                tabButtonWrapper.className = 'tabWrapper';
            
                                
                                  //For Tab Buttons
                                  for (const day in data) {
                                    const tabButton = document.createElement('div');
                                    const tabButtonHead = document.createElement('div');
                                    const tabButtonDate = document.createElement('div');
                                    
                                    tabButton.className = 'tab-button';
                                    tabButtonHead.className = 'tabHeadText';
                                    tabButtonDate.className = 'tabHeadDate';
                                  
                                    tabButton.id = day+1;                        
                                    tabButtonHead.textContent = `Day ${day.split('Day')[1]}`
                                    tabButtonDate.textContent = data[day][0].date;

                                    tabButton.onclick = () => {
                                        openTab(day);
                                    };
                                    tabButton.appendChild(tabButtonHead);
                                    tabButton.appendChild(tabButtonDate);
                                    tabButtonWrapper.appendChild(tabButton);
                                    tabContainer.appendChild(tabButtonWrapper);

                                    const inProgress = data[day].find(task => task.status === "In Progress");
                                    if (inProgress && defaultTabbuttonId === null) {
                                        defaultTabbuttonId = day+1;
                                        // console.log(defaultTabbuttonId)
                                    }
                                }


            
                                const tabContentWrapper = document.createElement('div');
                                tabContentWrapper.className = 'tabContentWrapper';
            
            
                                //For Tab Contents with Current Tab Logic
                                for (const day in data) {
                                    const tabContent = document.createElement('div');
                                    tabContent.className = 'tab-content';
                                    tabContent.id = day;
                                    tabContentWrapper.appendChild(tabContent);
                                    tabContainer.appendChild(tabContentWrapper);
            
                                    const inProgress = data[day].find(task => task.status === "In Progress");
                                    if (inProgress && defaultTabId === null) {
                                        defaultTabId = day;
                                    }
                                }
                            
                                
                                //Event Listner for Tab Buttons
                                function openTab(tabId) {
                                    let currentScrollValue = 0;
                                    const allButtons = document.querySelectorAll('.tab-button');
                                        allButtons.forEach(button => {
                                            button.classList.remove('active');
                                        });
            
                                    const tabContents = document.getElementsByClassName('tab-content');
                                    for (const content of tabContents) {
                                        content.style.display = 'none';
                                    }
            
                                    document.getElementById(tabId+1).classList.add('active');
                                    // tabButton.classList.add('active');
                                    document.getElementById(tabId).style.display = 'flex';
            
                                  
                                    const tabIdLenght = document.querySelectorAll('.tab-button').length
                                    console.log(tabIdLenght);

                                    currentScrollValue = (parseInt(`${tabId.split('Day')[1]}`) - 1) * 122;
                                    const tabContainer = document.querySelector('.tabWrapper');
                                    tabContainer.scrollTo({ left: currentScrollValue, behavior: 'smooth' });
            
                                }
            
                                // Current Tab is In-Progress ID
                                if (defaultTabId !== null) {
                                    openTab(defaultTabId);
                                }
                                
            
                            //Populating the Data in Tab Contents
                                for (const day in data) {
                     //Element Creator Function
                    
                    const tabContent = document.getElementById(day);
            
                    for (const task of data[day]) {
                        const taskInfo = document.createElement('div');
                        const detailWrapper = document.createElement('div');
                        
                        const status = document.createElement('div');
                        const itineraryTask = document.createElement('div');
                        const itineraryDescript = document.createElement('div');
            
                        taskInfo.className = `taskInfo ${task.status.toLowerCase()}`;
                        detailWrapper.className = 'detailWrapper';
                        status.className = `taskstatus ${task.status.toLowerCase()}`;
                        itineraryTask.className = 'itineraryTask';
                        itineraryDescript.className = 'itineraryDescript';
                        
            
                        status.textContent = task.status;
                        itineraryTask.textContent = task.task_name;
                        itineraryDescript.textContent = task.description;
            
                        detailWrapper.appendChild(status);
                        detailWrapper.appendChild(itineraryTask);
                        detailWrapper.appendChild(itineraryDescript);
                        taskInfo.appendChild(detailWrapper);
                        tabContent.appendChild(taskInfo);
            
                        task.driverNumber&&task.status!=='Completed'?drivers():null;
                        //DRIVER
                        function drivers(){
                        const driverDetails = document.createElement('div');
                        driverDetails.className = `driverDiv ${task.status.toLowerCase()}`;
                        const driverCall = document.createElement('a');
                        driverCall.className = 'driverCallIcon';
                        driverCall.setAttribute('href',`tel:${task.driverNumber}`)
                        driverCall.setAttribute('target','_blank');
            
                        driverDetails.appendChild(driverCall);
                        elementMaker('p',driverDetails,'taskdriverName','',`<b>Mr. ${task.driverName}</b> is on his way to pick you!`);
                        taskInfo.appendChild(driverDetails);
                        }
                    }
                }
                    }

                      // AIRPORT PICK UP DETAILS
                      function airportPickUpOnly(){
                          hideLoader3()
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

                      // elementMaker('span', officerContact, 'namecontact','',`+91 ${bodyData.supportData[0]. phoneNumber}`);


                      bodyData.quickGridLinks[0] ? quickLinksGrids():null;

                       //QUICK LINK GRID MAIN SECTION
                       function quickLinksGrids(){

                        const section98 = elementMaker('div', output, 'section10','','');
                        elementMaker('div', section98, 'innerHeads','','Quick Links');
                        const quickGrid = elementMaker('div', section98, 'innerGrid','','');
 
                       
                            //DID YOU KNOW POPUP
                            const doknow = elementMaker('div', fakebody, 'gridoverlays','','');
                            doknow.style.display="none";
                            const innerGridData =  elementMaker('div', doknow, 'innerGridData','','');
                            const back = elementMaker('div', innerGridData, 'backInner','','');
                            const backx = elementMaker('div', back, 'backx','','Back');
                           
 
                            //LOOP FOR GROUPED GRID
                            bodyData.quickGridLinks.forEach(gridData=>{
                             if(gridData.gridTags === "Grouped"){
   
                               const gridContainer = document.createElement('a');
                               const innerGridContainer = document.createElement('div');
                               const innerHeadGrid = document.createElement('div');
                               const gridIconarrow = document.createElement('div');
 
                               gridContainer.classList.add('linkGrids');
                               innerGridContainer.classList.add('innerGridx');
                               innerHeadGrid.classList.add('innerHeadGrid');
                               gridIconarrow.classList.add('gridIconarrow');
 
                               gridContainer.setAttribute('href',`${gridData.gridUrl}`);
                               gridContainer.setAttribute('target','_blank');
                               gridIconarrow.setAttribute('style',`background-image: url("https://ontriphelp.com/wp-content/uploads/2023/07/Expand-Arrow.png");`)
 
                               innerHeadGrid.textContent = gridData.gridHead;
 
                               innerGridData.appendChild(gridContainer);
                               gridContainer.appendChild(innerGridContainer);
                               innerGridContainer.appendChild(innerHeadGrid);
                               innerGridContainer.appendChild(gridIconarrow);
                              
                             }
                            })
 
 
 
                        //Links for Quick Grid
                        const dyknow = elementMaker('a', quickGrid, 'linkGrids','','');
                        const container1 =  elementMaker('div', dyknow, 'gridcontainer','','');
                                             elementMake('div', container1, 'imgGrid','','','https://ontriphelp.com/wp-content/uploads/2023/07/My-project-30-1.png');
                                             elementMaker('div', container1, 'textGrid','','Did you<br>know');
 
                        dyknow.addEventListener('click', (e)=> {
                         doknow.style.display="flex";
                         document.body.classList.add('body-scroll-lock');
                         document.querySelector('.body-scroll-lock').style.overflow="hidden";
                        })
 
                        backx.addEventListener('click',(e)=>{
                         doknow.style.display="none";
                         document.querySelector('.body-scroll-lock').style.overflow="";
                        })
 
 
                       //LOOP FOR REMAINING GRID (UNGROUPED)
                         bodyData.quickGridLinks.forEach(gridData=>{
                           if(gridData.gridTags === "Ungrouped"){
 
                             const gridContainer = document.createElement('a');
                             const innerGridContainer = document.createElement('div');
                             const gridImg = document.createElement('div');
                             const textGrid = document.createElement('div');
                             
     
                             gridContainer.classList.add('linkGrids');
                             gridContainer.setAttribute('href',`${gridData.gridUrl}`);
                             gridContainer.setAttribute('target','_blank');
                             quickGrid.appendChild(gridContainer);
                             gridContainer.appendChild(innerGridContainer);
     
                             gridImg.classList.add('imgGrid');
                             gridImg.setAttribute('style',`background-image: url("${gridData.gridImage}");`)
     
                             innerGridContainer.classList.add('gridcontainer');
                             textGrid.classList.add('textGrid');
                             textGrid.textContent = gridData.gridHead;
                             innerGridContainer.appendChild(gridImg);
                             innerGridContainer.appendChild(textGrid);
                           }
                          })

                       }
                       
                    //FOR RESTAURANTS
                    const section4 = elementMaker('div', output, 'section4','','');

                  
                    let restaurantItems = null;
                    const restaurantURL = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=restaurants&destination=${bodyData.destination}`;
                    fetch(restaurantURL,{method:'GET'}).then(res=>res.json()).then((data)=>{
                      restaurantItems=data;
                      restaurantItems[0]? restaurantSection():null;
                    });

                      //  bodyData.restaurantListing[0]?restaurantSection():null;

                      //  function restaurantSection(){
                      //   //Section3 - Restaurant Details
                      //   const section4 = elementMaker('div', output, 'section4','','');
                      //   elementMaker('h3', section4, 'headings2','',`Top Restaurants in ${bodyData.destination}`);
                      //   const restaurantGrid = elementMaker('div', section4, 'listinggrid','','');

                      //         //SPINNER LOADER
                      //         function showSpinner() {
                      //           const spinner = document.querySelector('.hello');
                      //           spinner.style.display = 'flex';
                      //         }
                              
                      //         function hideSpinner() {
                      //           const spinner = document.querySelector('.hello');
                      //           spinner.style.display = 'none'; 
                      //         }

                      //       //Current Destination Restaurant Listing
                      //       async function getAllRestaurants() {
                      //         const destination = bodyData.destination;
                      //         const resturl = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=allrestaurantList&destination=${destination}`;
                            
                      //         const response = await fetch(resturl);
                      //         const data = await response.json();
                      //         return data;
                      //       }
                            

                            
                            
                      //       let currentRestaurant = null;

                      //       //Get Current Card Data Listing
                      //       async function getRestaurantDetails(e, cardName) {
                      //         showSpinner();

                      //         let data;
                      //         if (!currentRestaurant) {
                      //           data = await getAllRestaurants();
                      //           currentRestaurant = data;
                      //         } else {
                      //           data = currentRestaurant;
                      //         }
                      //         // console.log(data)
                      //         hideSpinner();
                      //         const foundItem = data.find(item => item.restName === cardName);
                      //         // console.log(foundItem);
                      //         restdetails(foundItem); 
                      //       }

                  

                      //       const restaruantpopup = elementMaker('div', fakebody, 'detailsoverlay','','');
                      //       const popup = document.querySelector('.detailsoverlay');
                      //       popup.style.display="none";
                      
                    



                      // //POP FOR RESTAURANT
                      // let innerPopUp; 

                      // function restdetails(data){
                        
                      //   if(innerPopUp){
                      //     innerPopUp.remove()                            
                      //   }

                      //   innerPopUp =  elementMaker('div', restaruantpopup, 'restpopup','','');
                      //   innerPopUp.style.display = "none"; 

                      //   const restname = elementMaker('div', innerPopUp, 'restnameholder','','');
                              
                      //   elementMaker('div', restname, 'restname','',data.restName);
                      //   elementMaker('div', restname, 'back','','Back');
                      //   elementMaker('div', innerPopUp, 'restrating','',`${data.starrating} ⭐ Ratings | ${data.price} for Two`);
  
                      //   const cuisine =  elementMaker('div', innerPopUp, 'tagcontainer','','');
                      //   data.cuisines.forEach(items=>{
                      //     elementMaker('div', cuisine, 'tags','',items);

                      //   })
                        
                
  
                      //   elementMaker('div', innerPopUp, 'restlocation','',data.location);
  
                      //   const restcta =  elementMaker('div', innerPopUp, 'restctacontainer','','');
                      //   const callnow = elementMaker('a', restcta, 'voucher','','Call Restaurant');
                      //   callnow.setAttribute('href', `tel:${data.countrycode}`);
                      //   callnow.setAttribute('target','_blank');
                        
  
                      //   const direction = elementMaker('a', restcta, 'guide','','View in Map');
                      //   direction.setAttribute('href', data.mapdirection);
                      //   direction.setAttribute('target','_blank');
                        
                      //   innerPopUp.style.display = "block"
                      //   document.body.classList.add('body-scroll-lock');
                      //   document.querySelector('.body-scroll-lock').style.overflow="hidden";

                      //   const closepopup = document.querySelector('.back');
                    
                      //   closepopup.addEventListener('click', (e)=> {
                      //     popup.setAttribute('style','display:none');
                      //     // console.log(innerPopUp)
                      //     document.querySelector('.body-scroll-lock').style.overflow="";
                      //     innerPopUp.remove();
                      //   });

                      // }

                     
                      // bodyData.restaurantListing.forEach((items) => {
                      //   const restaurantCard = elementMake('div', restaurantGrid, 'listingcard','','',items.coverimage);
                      //   restaurantCard.addEventListener('click', (e) => {
                          
                      //     popup.setAttribute('style','display:flex');
                      //     //After First Click I have removed a function to prevent multiple API Calls that pulls the entire destination restuarant data
                          
                      //     getRestaurantDetails(e, items.restName);

                      //   });
        
        
                      //   const cardhead = elementMaker('div', restaurantCard, 'cardhead','','');
                      //   elementMaker('div', restaurantCard, 'cardoverlay','','');
                      //   const cardpricing = elementMaker('div', restaurantCard, 'cardpricing','','');
                        
                      //   elementMaker('div', cardhead, 'reviews','',`${items.reviews}+ Reviews`);
                      //   elementMaker('div', cardpricing, 'restaurantname','',items.restName);
                      //   elementMaker('div', cardpricing, 'fivider','','');
                      //   // elementMaker('div', cardpricing, 'dishprices','',`${items.price} <span class="person">per person*</span>`);
                      //   elementMaker('div', cardpricing, 'dishprices','',`${items.price}`);
                      // });

                      //  }

                       function restaurantSection(){
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
                        document.body.classList.add('body-scroll-lock');
                        document.querySelector('.body-scroll-lock').style.overflow="hidden";

                        const closepopup = document.querySelector('.back');
                    
                        closepopup.addEventListener('click', (e)=> {
                          popup.setAttribute('style','display:none');
                          // console.log(innerPopUp)
                          document.querySelector('.body-scroll-lock').style.overflow="";
                          innerPopUp.remove();
                        });

                      }

                     
                      restaurantItems.forEach((items) => {
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
                      
                    //Fetching userChecklist Items
                    const section6 = elementMaker('div', output, 'section6','asyncSection','');
                    loaderJS(section6);
                    
                  //   let checkListItems = null;
                  //   const checkListUrl = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=userCheckedList&bookingcode=${bcode}`;
                  //   fetch(checkListUrl,{method:'GET'}).then(res=>res.json()).then(async (data)=>{
                  //     checkListItems=data;
                  //     jsonData[0]? await userCheckList():null;
                  //   });

                  //  async function userCheckList(){

                  //     //create Spot & Strike Task list
                  //     elementMaker('h3', section6, 'labelheadings','','Spot & Strike');
                  //     const taskListDiv = elementMaker('div', section6, 'tasklizt','lizt','');
                  //       jsonData.forEach(task => {
                  //         const checkboxwrapper = document.createElement('div');
                  //         checkboxwrapper.classList.add('checkwraper');
                  //         const checkbox = document.createElement('input');
                  //         checkbox.type = 'checkbox';
                  //         checkbox.value = task.uniqueCode;
                  //         checkbox.name='taskLists';
                  //         const preSelected = checkListItems.uniqueCode;
                          
                  //         checkbox.checked = preSelected.includes(task.uniqueCode);
          
                  //         checkbox.addEventListener('change', async() => {
                  //           sendCheckedValues();
                  //         });
  
                  //         const labelWrapper = document.createElement('div');
                  //         labelWrapper.classList.add('labelwrapper');
                          
                  //         const label = document.createElement('label');
                  //         label.classList.add('labelhead')
                  //         label.textContent = task.taskName;
  
                  //         const subLabel = document.createElement('div');
                  //         subLabel.classList.add('subLabel')
                  //         subLabel.innerText = task.description;
                          
                  //         labelWrapper.appendChild(label);
                  //         labelWrapper.appendChild(subLabel);
  
                  //         checkboxwrapper.appendChild(checkbox);
                  //         checkboxwrapper.appendChild(labelWrapper);;
                  //         taskListDiv.appendChild(checkboxwrapper)
                  //       });
  
  
                  //       //SET CHECKED VALUES
                  //        async function sendCheckedValues() {
                  //         const checkedValues = Array.from(document.querySelectorAll('input[name="taskLists"]:checked'))
                  //           .map(checkbox => checkbox.value);
                            
                  //           const tasks = JSON.stringify(checkedValues);
  
                  //           const urlder = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=userList&queryCode=${bodyData.bookingcode}&tasks=${tasks}`;
                            
                  //           fetch(urlder,{method:'GET'}).then(res => res.json())
                  //           .then(data => { 
                  //             // loadery.style.display='none';
                  //           })
                  //           .catch(error => {
                  //             console.error('Error:', error);
                  //           });

                  //         }
  
                  //   }
                    
                    // jsonData[0]?userCheckList():null;
                    // function userCheckList(){

                    // //create Spot & Strike Task list
                    // const section6 = elementMaker('div', output, 'section6','','');
                    // elementMaker('h3', section6, 'labelheadings','','Spot & Strike');
                    // const taskListDiv = elementMaker('div', section6, 'tasklizt','lizt','');
                    
                    //   jsonData.forEach(task => {
                    //     const checkboxwrapper = document.createElement('div');
                    //     checkboxwrapper.classList.add('checkwraper');
                    //     const checkbox = document.createElement('input');
                    //     checkbox.type = 'checkbox';
                    //     checkbox.value = task.uniqueCode;
                    //     checkbox.name='taskLists';
                    //     const preSelected = bodyData.checklist.uniqueCode;
                        
                    //     checkbox.checked = preSelected.includes(task.uniqueCode);
        
                    //     checkbox.addEventListener('change', () => {
                    //       sendCheckedValues();
                    //     });

                    //     const labelWrapper = document.createElement('div');
                    //     labelWrapper.classList.add('labelwrapper');
                        
                    //     const label = document.createElement('label');
                    //     label.classList.add('labelhead')
                    //     label.textContent = task.taskName;

                    //     const subLabel = document.createElement('div');
                    //     subLabel.classList.add('subLabel')
                    //     subLabel.innerText = task.description;
                        
                    //     labelWrapper.appendChild(label);
                    //     labelWrapper.appendChild(subLabel);

                    //     checkboxwrapper.appendChild(checkbox);
                    //     checkboxwrapper.appendChild(labelWrapper);;
                    //     taskListDiv.appendChild(checkboxwrapper)
                    //   });


                    //   //SET CHECKED VALUES
                    //   function sendCheckedValues() {
                    //     const checkedValues = Array.from(document.querySelectorAll('input[name="taskLists"]:checked'))
                    //       .map(checkbox => checkbox.value);

                    //       const tasks = JSON.stringify(checkedValues);

                    //       const urlder = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=userList&queryCode=${bodyData.bookingcode}&tasks=${tasks}`;

                    //       fetch(urlder,{method:'GET'}).then(res => res.json())
                    //       .then(data => { 
                    //         // loadery.style.display='none';
                    //         // console.log(data)
                    //       })
                    //       .catch(error => {
                    //         console.error('Error:', error);
                    //       });
                    //       // console.log(tasks)
                    //     }

                    // }
                  
                    
                   
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

                        //MOBILE SECOND API TO DO LIST HIT ALSO SOME OF THE RESPONSE IS DEPENDENT ON FORMING THE HTML OR ELSE IT WILL CAUSE ERROR IN RENDERING THE HTML
                        function builduserdataTodoList(jsonData){
                                
                              
                                //Fetching userChecklist Items
                                // const section6 = elementMaker('div', output, 'section6','','');
                                const section6 = document.querySelector('#asyncSection');
                                // console.log(section6)
                                
                                let checkListItems = null;
                                const checkListUrl = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=userCheckedList&bookingcode=${bcode}`;
                                fetch(checkListUrl,{method:'GET'}).then(res=>res.json()).then((data)=>{
                                  checkListItems=data;
                                  // console.log(data)
                                  const spinner = document.querySelector('.loader-wrapper');
                                  spinner.style.display = 'none'; 
                                  data !== "not found"? userCheckList():userCheckListError();
                                  // jsonData[0]&&data[0]? userCheckList():userCheckListError();
                                })

                              function userCheckListError(){
                                const errorDiv = document.createElement('div');
                                const wrapper=document.createElement('div');
                                const errorLog = document.createElement('div');
                                const errorLogsubhead = document.createElement('div');

                                errorDiv.classList.add('errorBox');
                                wrapper.classList.add('errorWrapper')
                                errorLog.classList.add('errorLog');
                                errorLogsubhead.classList.add('errorsub');

                                errorLog.innerText = "Something went wrong";
                                errorLogsubhead.innerText = "Spot & Strike is not available for this query code.. ";
                                const parent = document.querySelector('#asyncSection');
                                errorDiv.appendChild(wrapper);
                                wrapper.appendChild(errorLog)
                                wrapper.appendChild(errorLogsubhead)
                                parent.appendChild(errorDiv);
                              }
            
                               function userCheckList(){
                                  //create Spot & Strike Task list
                                  elementMaker('h3', section6, 'labelheadings','','Spot & Strike');
                                  const taskListDiv = elementMaker('div', section6, 'tasklizt','lizt','');
                                    jsonData.forEach(task => {
                                      const checkboxwrapper = document.createElement('div');
                                      checkboxwrapper.classList.add('checkwraper');
                                      const checkbox = document.createElement('input');
                                      checkbox.type = 'checkbox';
                                      checkbox.value = task.uniqueCode;
                                      checkbox.name='taskLists';
                                      const preSelected = checkListItems.uniqueCode;
                                      
                                      checkbox.checked = preSelected.includes(task.uniqueCode);
                      
                                      checkbox.addEventListener('change', async () => {
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
                                    async function sendCheckedValues() {
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
              
                                }
               
                        }

                        //DESKTOP SECOND API TO DO LIST HIT
                        function desktopModeTodoList(jsonData){
                          
                          
                          let checkListItems = null;
                          const todoLinks = document.querySelector('#toGrid')
                          const checkListUrl = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=userCheckedList&bookingcode=${bcode}`;
                          fetch(checkListUrl,{method:'GET'}).then(res=>res.json()).then((data)=>{
                            checkListItems=data;
                            // console.log(data)
                            // jsonData[0]? userCheckList():null;
                            data !== "not found"? userCheckList():userCheckListError();
                          });
    
                          // jsonData[0]?userCheckList():null;
                          function userCheckListError(){
                            hideLoader2()
                            const errorDiv = document.createElement('div');
                            const wrapper=document.createElement('div');
                            const errorLog = document.createElement('div');
                            const errorLogsubhead = document.createElement('div');

                            errorDiv.classList.add('errorBox');
                            wrapper.classList.add('errorWrapper')
                            errorLog.classList.add('errorLog');
                            errorLogsubhead.classList.add('errorsub');

                            errorLog.innerText = "Something went wrong";
                            errorLogsubhead.innerText = "Spot & Strike is not available for this query code.. ";
                            const parent = document.querySelector('#toGrid');
                            errorDiv.appendChild(wrapper);
                            wrapper.appendChild(errorLog)
                            wrapper.appendChild(errorLogsubhead)
                            parent.appendChild(errorDiv);
                          }
    
                          async function userCheckList(){
                            hideLoader2()
                          //create Spot & Strike Task list
                          // const todoLinks = elementMaker('div', section9, 'todoGrid','','');
                          elementMaker('h3', todoLinks, 'labelheadings','','Spot & Strike');
                          const taskListDiv = elementMaker('div', todoLinks, 'tasklizt','lizt','');
                          
                            jsonData.forEach(task => {
                              const checkboxwrapper = document.createElement('div');
                              checkboxwrapper.classList.add('checkwraper');
                              const checkbox = document.createElement('input');
                              checkbox.type = 'checkbox';
                              checkbox.value = task.uniqueCode;
                              checkbox.name='taskLists';
                              const preSelected = checkListItems.uniqueCode
                              checkbox.checked = preSelected.includes(task.uniqueCode);
              
                              checkbox.addEventListener('change', () => {
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
      
                          }
                                          
                              
                              
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


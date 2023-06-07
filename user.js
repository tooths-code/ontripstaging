
document.addEventListener('DOMContentLoaded', () => {

const urlParams = new URLSearchParams(window.location.search);
    const bcode = urlParams.get('bookingcode');
    const lname = urlParams.get('lastName');

    const url = 'https://script.google.com/macros/s/AKfycbwzyq9glIWWLxQU-nZ4fAOiAqATBQxqLFpjo8GI1GfMrGj1EwJsi68IhjXJ_7mh7oUM/exec';
        
        const output = document.querySelector('.output');
        const fakebody = document.querySelector('.fakebody');
        const formbody = document.querySelector('.formBody');
        const failedLogs = document.querySelector('.failedLogin');
				const otherways = document.querySelector('.otherlogin');
        const loader = document.querySelector('.loader');
        // loader.innerHTML = 'LOADING DATA....';
        let bodyData = null;
//         fetch(`${url}?route=ontriphelp&bcode=${bcode}&lastName=${lname}`)
	 fetch(`${url}?bcode=${bcode}`)
        .then(res => res.json())
        .then(data => {
		
            [bodyData] = [...data];
            
            
            if(data.error){
                failedlogin();
                
            }
            else{
                builduserdata();
            }
            
            
                function failedlogin(){
                    output.innerHTML = ''
                    loader.style.display='none';
                    output.style.display = 'none';
                    formbody.style.display = 'flex';
										otherways.style.display='flex';
                    // elementMaker('div', output, 'main', '','Incorrect Booking Id/Last Name');
                    failedLogs.innerHTML = 'Incorrect Booking/Lead Code';
                fakebody.setAttribute("style", "background-image: url('https://ontriphelp.com/wp-content/uploads/2023/04/aeron-ng-car-ride-03.jpg'); background-color: #000000d4; background-blend-mode: multiply;");

                    
                }
           
                function builduserdata(){
                    loader.style.display='none';
                    fakebody.setAttribute("style", "background-image: url('');");

                    // output.innerHTML = ''
                    //Section1 - Passenger Name & Booking ID 
                const section = elementMaker('div', output, 'section1','','');
                const innerdiv1 = elementMaker('div', section, 'innerdiv','','');
                const innerdiv2 = elementMaker('div', section, 'innerdiv','','');
									
                const passengerdetail = elementMaker('div', innerdiv1, 'leadpaxname','','');
                elementMaker('div', passengerdetail, 'name','',`Hello ${bodyData.leadPaxName}`);
                elementMaker('div', passengerdetail, 'tripremark','',`Check your ${bodyData.destination} Trip details for Trip Date: ${bodyData.tripStart}`);
                elementMaker('div', innerdiv1, 'bgid','',`Booking ID - ${bodyData.bookingcode}`);
                elementMaker('div', innerdiv2, 'agencyname','',bodyData.agencyName);
                
                
                
                //Section3 - Driver, Support & Inclusion Details
                const section3 = elementMaker('div', output, 'section3','','');
                const children11 = elementMaker('div', section3, 'childrendetail1','','');
                const children12 = elementMaker('div', section3, 'childrendetail2','','');
        
                const innertextdiv = elementMaker('div', children11, 'innerdivcontent11','','');
                elementMaker('h1', innertextdiv, 'headings4','',`Airport Pick Up ${bodyData.apStatus}`);
                elementMaker('h3', innertextdiv, 'pickupremarks','',bodyData.driverStatus);
                elementMaker('h3', innertextdiv, 'pickupremarks1','',bodyData.driverRemarks);
                
                //SECTION3 - RIGHT DIV
                const tripcaptain = elementMaker('div', children12, 'tripcaptain','','');
                const inclusions = elementMaker('div', children12, 'inclusions','','');
        
                //SECTION3 - TRIP CAPTAIN
                elementMaker('h1', tripcaptain, 'headings','','Your Trip Captain is always<br>there to help you out');
                const tripcaptaindetail = elementMaker('div', tripcaptain, 'agentinfo','','');
                elementMaker('div', tripcaptaindetail, 'chatdivtextsubheading','',bodyData.support.tripOfficer);
                elementMaker('div', tripcaptaindetail, 'chatdivtextsubheading','',`+91 ${bodyData.support.tripOfficerNo}`);
                const buttondiv = elementMaker('div', tripcaptain, 'buttondiv','','');
                const tripCaptaincall = elementMaker('a', buttondiv, 'chatdivlink2','','Call Now');
                tripCaptaincall.setAttribute('href',`tel:+91-${bodyData.support.tripOfficerNo}`);
        
                const chatcall = elementMaker('a', buttondiv, 'chatdivlink3','','Whatsapp');
                chatcall.setAttribute('href', bodyData.support.whatsappLink);
                chatcall.setAttribute('target','_blank');
                
        
                //TRIP DETAIL v2
                const section2 = elementMaker('div', inclusions, 'tripdetail','','');
                elementMaker('h1', section2, 'headings5','',`${bodyData.destination} Trip Details`);
                
                const innerDiv1 = elementMaker('div', section2, 'agentinfo1','','');
        
                const innerDiv = elementMaker('div', innerDiv1, 'agentinfos','','');
                elementMaker('h3', innerDiv, 'subheaddetailhead','','Trip Start Date');
                elementMaker('h3', innerDiv, 'subheaddetailcontent','',bodyData.tripStart);
                
                const innerDiv2 = elementMaker('div', innerDiv1, 'agentinfos','','');
                elementMaker('h3', innerDiv2, 'subheaddetailhead','','Trip End Date');
                elementMaker('h3', innerDiv2, 'subheaddetailcontent','',bodyData.tripEnd);
        
                // //SECTION3 - TRIP INCLUSION
                
                const voucherdiv = elementMaker('div', inclusions, 'voucherdiv','','');
        elementMaker('div', voucherdiv, 'voucherdownload','',`Download Your Trip Voucher`);
        const downVoucher = elementMaker('a', voucherdiv, 'chatdivlinks','','Download Now');
        downVoucher.setAttribute('href', bodyData.inclusions);
        downVoucher.setAttribute('target','_blank');
               
        
              


                
                
        
        
                //SECTION3 - DRIVER DETAIL (IF-ELSE)
                if(bodyData.driverStatus === 'Driver Assigned'){
                    const agentdiv = elementMaker('div', children11, 'chatdiv','','');
                    const agentinnerdiv = elementMaker('div', agentdiv, 'chatdivtext','','');
                    elementMaker('div', agentinnerdiv, 'chatdivtextheading','','Driver Details');
                    const agentinfodiv = elementMaker('div', agentinnerdiv, 'agentinfo','','');
                    elementMaker('div', agentinfodiv, 'chatdivtextsubheading','',bodyData.driver.driverName);
                     elementMaker('div', agentinfodiv, 'chatdivtextsubheading','',`+${bodyData.driver.driverCode}-${bodyData.driver.drievrNumber}`);

									
                    const buttonholder = elementMaker('div', agentdiv, 'buttonholder','','');
            const agentcall = elementMaker('a', buttonholder, 'chatdivlink','','Chat Now');
            agentcall.setAttribute('href', bodyData.driver.driverWhatsapp);
            agentcall.setAttribute('target','_blank');

            
            const agentcall2 = elementMaker('a', buttonholder, 'chatdivlink4','','Call Now');
            agentcall2.setAttribute('href',`tel:+${bodyData.driver.driverCode} ${bodyData.driver.drievrNumber}`);
                    
                    
                }
        
                const agentdiv = elementMaker('div', children11, 'chatdiv1','','');
                const agentinnerdiv = elementMaker('div', agentdiv, 'chatdivtext','','');
                elementMaker('div', agentinnerdiv, 'chatdivtextheading','','Airport PickUp Details');
                const agentinfodiv = elementMaker('div', agentinnerdiv, 'agentinfo','','');
                elementMaker('div', agentinfodiv, 'chatdivtextsubheading','',`PickUp Location : ${bodyData.apLocation}`);
                elementMaker('div', agentinfodiv, 'chatdivtextsubheading','', `PickUp Time : ${bodyData.apTime}`);


                 //SECTION4 - FAQ
                 const section4 = elementMaker('div', output, 'section4','','');
                 elementMaker('h3', section4, 'headings3','','Frequently Asked Question');
                 const faqData = elementMaker('div', section4, 'faqdata','','');
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
               
                  //SECTION4 - FEEDBACK FORM
                  if(bodyData.feedbacktrigger==="Yes"){
                    const feedback = elementMaker('div', fakebody, 'feedbackoverlay','','');
                    feedback.setAttribute('style','display:flex');
                    const feedbackbox = elementMaker('div', feedback, 'feedbackbox','','');
                    // const check = elementMaker('img', feedbackbox, 'checkmark','','');
                    // check.setAttribute('style','display:none');
                    const feedbackinnerbox = elementMaker('div', feedbackbox, 'feedbackinnerbox','','');
                    feedbackinnerbox.setAttribute('style','display:flex')
                    const skipstep = elementMaker('div', feedback, 'skipthestep','','No,will do this later');
  
                    const innerDiv4 = elementMaker('div', feedbackinnerbox, 'feedbox','','');
                    elementMaker('div', innerDiv4, 'headertext','','Your Trip is about to Complete');
                    elementMaker('div', innerDiv4, 'subheadertext','','Rate your Experience');
                    const formc = elementMaker("form", feedbackinnerbox, "feedback-form", "feedbackform", "");
                    const starRatingDiv = elementMaker('div', formc, 'star-rating','','');
  
                    for (let i = 5; i >= 1; i--) {
                      const input = elementMaker('input', starRatingDiv, 'star', `star-${i}`, i);
                      input.type = 'radio';
                      input.name = 'rating';
                      input.value = `${i}-Star`;
  
                      const label = elementMaker('label', starRatingDiv, 'fas', `star-label-${i}`, '');
                      label.setAttribute('for', `star-${i}`);
                      label.classList.add("fa-star");      
                      
                    }
                    
                   
  
                    
                    
  
                    const innerDiv5 = elementMaker('div', formc, 'formfeed','','');
                   
                    const input = elementMaker('textarea', formc, 'feedinput', 'textfeed', '');
                    input.setAttribute('cols', 50);
                    input.setAttribute('placeholder', 'Give us a Feedback');
        
    
                    const submit = elementMaker('button', formc, 'my-submit', null, 'Submit Feedback');
                    submit.setAttribute('type', 'submit');
  
                  }
                  
  
                  const feedForm = document.querySelector('#feedbackform');
                  const skipstepx = document.querySelector('.skipthestep');
                  const hideoverlay = document.querySelector('.feedbackoverlay');
                  const mysubmit = document.querySelector('.my-submit');
                  
                  mysubmit.addEventListener('click', (e)=>{
                    const checkedRadio = document.querySelector('input[name="rating"]:checked');
                    if(checkedRadio){
                      console.log(checkedRadio);
                      hideoverlay.setAttribute('style','display:none');
                    }
                    
                  }) 
  
                 
  
                  skipstepx.addEventListener('click', (e)=>{
                      hideoverlay.setAttribute('style','display:none');
                  })
  
                  feedForm.addEventListener('submit', function(event) {
                    event.preventDefault();
                    const feedback = document.querySelector('#textfeed').value;
                    let starRating = null;
                    
                    document.getElementsByName('rating').forEach(e=>{
                          if (e.checked) {
                            starRating = e.value;
                          }
                    })
  
                    
                    
  
                    if (starRating !== null) {
                      
                      const url = 'https://script.google.com/macros/s/AKfycbwzyq9glIWWLxQU-nZ4fAOiAqATBQxqLFpjo8GI1GfMrGj1EwJsi68IhjXJ_7mh7oUM/exec';
  
                      fetch(`${url}?route=ontriphelppost&bcode=${bcode}&feedback=${feedback}&rating=${starRating}`)
                      .then(res => res.json())
                      .then(data => {
                        // const success = document.querySelector('.feedbackinnerbox');
                        // const checkmark = document.querySelector('.checkmark');
  
                        // if(starRating==='5-Star'||starRating==='4-Star'){
                        //   // checkmark.style.display = 'flex';
                        //   // document.querySelector('.skipthestep').style.display='none';
                        //   // checkmark.setAttribute('src','https://ontriphelp.com/wp-content/uploads/2023/05/beaming-face-with-smiling-eyes-2.png');
                        //   // success.innerHTML="Thankyou For your Feedback";
                          
                        // }
  
                        // else if(starRating==='1-Star'||starRating==='2-Star'||starRating==='3-Star'){
                        //   document.querySelector('.skipthestep').style.display='none';
                        //   // checkmark.style.display = 'flex';
                        //   checkmark.setAttribute('src','https://ontriphelp.com/wp-content/uploads/2023/05/frowning-face-2.png');
                        //   success.innerHTML="We deeply regret for this Experience, We'll try our Best"
                        // }
                        
                        
  
                      })
                    }
  
                    else{
                      alert("Please Rate your Experience");
                      return false;
                    }
                    
                  })
        
               
                
                }
      
          
        })
        .catch(error => console.error(error));
        
        
        
        
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

          
        
        
})


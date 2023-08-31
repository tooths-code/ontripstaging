<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Task Schedule</title>
    <style>
      
    </style>
</head>
<body>
    <div id="tab-container" class="tab-container"></div>

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        const bcode = urlParams.get('bookingcode');

        const url = `https://script.google.com/macros/s/AKfycbx9m5WHuo3S4iFsf6-b1yfzVIrH7B69G4Ha1OSUyK-vmwvx06r_bUiSCAdTMvOFKSPT/exec?route=itineraryUpdates&bookingcode=${bcode}`;

        fetch(url,{method:'GET'}).then(res=>res.json()).then(data=>{
            itineraryUpdate(data)
            }).catch(error => {console.error('Error fetching checkbox items:', error)});

        function itineraryUpdate(data){
            const tabContainer = document.getElementById('tab-container');
	
                    let defaultTabbuttonId = null;
                    let defaultTabId = null;

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
                        tabButtonHead.textContent = day;
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

            task.driverNumber?drivers():null;
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
    

           
       
    </script>
</body>
</html>

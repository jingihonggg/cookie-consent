const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const consentForm = document.getElementById('consent-form');
const modalInner = document.getElementById('modal-inner');
const modalCloseBtn = document.getElementById('modal-close-btn');
const declineBtn = document.getElementById('decline-btn');

setTimeout(function(){
modal.style.display='inline';
},2000)

declineBtn.addEventListener('click',function(){
    alert(`YOU HAVE OUTSMARTED ME! You are free to go noob!`)
    modal.style.display='none';
})

consentForm.addEventListener('submit',function(e){
    e.preventDefault();

    setTimeout(function(){
        modalText.innerHTML = `<div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">
        Looking to sell all your personal information for 1USD
        </p>
        </div>`
    }
    ,2000)
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `Selling your information to buyers! ^_^`
    },4000)

    setTimeout(function(){
        const consentFormData = new FormData(consentForm);
               const name = consentFormData.get('fullName');
               const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        modalInner.innerHTML = `<h2>Thanks <span class="modal-display-name">${capitalizedName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul for a DOLLAR LOL!</p>
        <div class="idiot-gif">
        <img src="images/pirate.gif">
        </div>`
        modalCloseBtn.disabled=false;
        modalCloseBtn.addEventListener('click',function(){
            modal.style.display='none';
        })
    },6000)
})




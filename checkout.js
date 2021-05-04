const form = document.querySelector("form");
form.addEventListener("submit", userSubmitted); 

function userSubmitted(evt) {
    evt.preventDefault();
    console.log(form.elements.firstname.value);
    console.log(form.elements.lastname.value);
    console.log(form.elements.address.value);
    console.log(form.elements.city.value);
    console.log(form.elements.zip.value);
    console.log(form.elements.country.value);
    console.log(form.elements.phonenumber.value);


    
    const payload = {
        firstname:form.elements.firstname.value,
        lastname:form.elements.lastname.value,
        address:form.elements.address.value,
        city:form.elements.city.value,
        zip:form.elements.zip.value,
        country:form.elements.country.value,
        phonenumber:form.elements.phonenumber.value,

}
    document.querySelector("input[type=submit]").disable = true;
    fetch("https://kea2s-c1e7.restdb.io/rest/checkout",
     {
  "method": "POST",
  "headers": {
    "x-apikey": "609090f9f2fc22523a42c7c0",

  },
  body: JSON.stringify(payload),
        
})
.then(response => {
 console.log(response);
 document.querySelector("input[type=submit]").disable = true;
 form.elements.firstname.value = "" ;
 form.elements.lastname.value = "" ;
 form.elements.address.value = "" ;
 form.elements.zip.value = "" ;
 form.elements.city.value = "" ;
 form.elements.country.value = "" ;
 form.elements.phonenumber.value = "" ;
 document.querySelector("p.hidden").classList.remove("hidden");

})
.catch(err => {
  console.error(err);
});

};



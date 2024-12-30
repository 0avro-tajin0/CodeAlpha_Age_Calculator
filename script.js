let main_panel =document.getElementById("container");
let panel = document.getElementById("popup_res");
let closepanel = document.getElementById("closePopup");

document.getElementById("calculatbtn").addEventListener("click",function(){
    

    let dob_getData = document.getElementById("dob").value;
    let line =document.getElementById("outp_line");
    let number_age = document.getElementById("outp_age");

    
    if(!dob_getData) {
        line.innerHTML ="Please select a valid date.";
        panel.style.display ="flex";
        main_panel.style.display = "none";
        return;
    }
    
    const dob = new Date(dob_getData);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const month_diff = today.getMonth() - dob.getMonth();
    const day_diff = today.getDate() - dob.getDate();


    number_age.innerHTML = age;
    panel.style.display ="flex";
    main_panel.style.display = "none";

});

closepanel.addEventListener("click",function(){
    panel.style.display ="none";
    main_panel.style.display = "flex ";
});

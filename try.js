let btnSubmit=document.getElementById("submit");

let fAdults = document.getElementById("no1");

btnSubmit.addEventListener("click",submit);

function submit(event){

    event.preventDefault();


    console.log("No. Of Tickets Foreigner(Adult):",document.getElementById("no1").value);

    let exf=document.querySelector("input[name='exf']:checked");
    console.log("Duration:"+exf);

    console.log("Extras Annual Pass:",document.getElementById("ex1").value);
    console.log("Extras Food Token:",document.getElementById("xx1").value); 
}

let btnSubmit1=document.getElementById("submit1");
btnSubmit.addEventListener("click",submit1);

function submit1(){

    console.log("No. Of Tickets Local (Adult)",document.getElementById("no4").value);
    console.log("No. Of Tickets Local(Child Below 16):",document.getElementById("no5").value);
    console.log("No. Of Tickets Local(Child Below 6):",document.getElementById("no6").value);


    let ex=0;

    let t1=document.getElementById("time1");
    let t2=document.getElementById("time2");
    let t3=document.getElementById("time3");
    let t4=document.getElementById("time4");

    if(t1.checked==true){
        ex=ex+0;
    }
    else if(t2.checked==true){
        ex=ex+250;
    }
    else if(t3.checked==true){
        ex=ex+500;
    }
    else if(t4.checked==true){
        ex=ex+1000;
    }

    console.log("EX:"+ ex);


    let exx=0;

    
    let t5=document.getElementById("time5");
    let t6=document.getElementById("time6");
    let t7=document.getElementById("time7");
    let t8=document.getElementById("time8");

    if(t5.checked==true){
        exx=exx+1000;
    }
    else if(t6.checked==true){
        exx=exx+500;
    }
    else if(t7.checked==true){
        exx=exx+1000;
    }
    else if(t8.checked==true){
        exx=exx+2000;
    }
    exx=exx;
    console.log("EXx:"+ exx);

    console.log("Extras Annual Pass:",document.getElementById("ex").value);
    console.log("Extras Food Token:",document.getElementById("xx").value);

    let totaltickets = parseInt(document.getElementById("no1").value) + parseInt(document.getElementById("no2").value) + parseInt(document.getElementById("no4").value) + parseInt(document.getElementById("no5").value) + parseInt(document.getElementById("no6").value) + parseInt(document.getElementById("ex1").value) + parseInt(document.getElementById("xx1").value) + parseInt(document.getElementById("ex").value) + parseInt(document.getElementById("xx").value);
    console.log(totaltickets);
    


    document.getElementById("price2").innerText = totaltickets;

    let totalPrice = parseInt(document.getElementById("no1").value * 3000) + parseInt(document.getElementById("no2").value * 2500) + parseInt(document.getElementById("no4").value * 2500) + parseInt(document.getElementById("no5").value * 1000) + parseInt(document.getElementById("no6").value * 500) + parseInt(document.getElementById("ex1").value * 5000) + parseInt(document.getElementById("xx1").value * 500) + parseInt(document.getElementById("ex").value * 5000) + parseInt(document.getElementById("xx").value * 500) + ex + exx;

    console.log(totalPrice);

    document.getElementById("price4").innerText = totalPrice;

}

    function myFunction() {

        let duration=document.getElementById("duration1").value;
        let time;
        if (duration == "Three Hours") {
            time = document.getElementById("t1").value 
        }
        else if (duration == "Half Day") {
            time = document.getElementById("t2").value
        }
        else if (duration == "Full Day") {
            time = document.getElementById("t3").value
        }
        else if (duration == "Two Days") {
            time = document.getElementById("t4").value
        }

            document.getElementById("price1").innerText = "";
            document.getElementById("price3").innerText = "";
        }

    let tickets = [];
    function addCurrent(){
        console.log("Price")

        let duration2=document.getElementById("duration2").value;
        let ex=0;;
        if (duration2 == "Three Hours") {
            ex = ex+0
    
        }
        else if (duration2 == "Half Day") {
            ex = ex+250
        }
        else if (duration2 == "Full Day") {
            ex = ex+500
        }
        else if (duration2 == "Two Days") {
            ex = ex+1000
        }
    
        let duration1=document.getElementById("duration1").value;
        let exx=0;;
    
        if (duration1 == "Three Hours") {
            exx = exx+1000
    
        }
        else if (duration1 == "Half Day") {
            exx = exx+500
        }
        else if (duration1 == "Full Day") {
            exx = exx+1000
        }
        else if (duration1 == "Two Days") {
            exx = exx+2000
        }

        let currentTickets = parseInt(document.getElementById("no1").value) + parseInt(document.getElementById("no2").value) + parseInt(document.getElementById("ex1").value) + parseInt(document.getElementById("xx1").value);
        console.log(currentTickets) + parseInt(document.getElementById("ex").value) + parseInt(document.getElementById("xx").value);
        

        document.getElementById("price1").innerText = currentTickets;

        let currentPrice = parseInt(document.getElementById("no1").value * 3000) + parseInt(document.getElementById("no2").value * 2500) + parseInt(document.getElementById("no4").value * 2500) + parseInt(document.getElementById("no5").value * 1000) + parseInt(document.getElementById("no6").value * 500) + parseInt(document.getElementById("ex1").value * 5000) + parseInt(document.getElementById("xx1").value * 500) + parseInt(document.getElementById("ex").value * 5000) + parseInt(document.getElementById("xx").value * 500 + ex + exx);
        console.log(currentPrice);

        document.getElementById("price3").innerText = currentPrice;
       
        
    }

    let abc= document.getElementById("abcd");
    abc.addEventListener("click",abcde)
    function abcde(){
        alert("Thnak you for Purchasing Tickets For Udarata Manike");
    }

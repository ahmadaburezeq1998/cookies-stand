"use strict";

let workingHours=['6am','7am','8am','9am','10am','11am','12pm',
'1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }//i got it from google

///////////////////////////////////////////////////////////////////
let seattle ={          //this is an object 
    location:'seattle',
    minCustomers:23,        //these are keys 
    maxCustomers:65,
    avgCookies:6.3,
    customersEachHour :[],
    cookiesEachHour:[],
    total:0,

    calculatingCustomersEachHour:function(){    //this is a method 
        for (let index = 0; index < workingHours.length; index++) {
           
            this.customersEachHour.push(
                random(this.minCustomers,this.maxCustomers));
        }
    },

    calculatingCookiesEachHOur:function(){//this is a method
        for (let index = 0; index < workingHours.length; index++) {
            this.cookiesEachHour.push(Math.floor(
                 this.customersEachHour[index] * this.avgCookies));
           this.total+=this.cookiesEachHour[index];
        }
    },

    render:function(){
        let parent =document.getElementById('parent');
        console.log(parent);//

        let hElement =document.createElement(`h1`);
        console.log(hElement);
        parent.appendChild(hElement);
        hElement.textContent=`${this.location} branch`;

        let ulist =document.createElement("ul");
        parent.appendChild(ulist);

        for (let index = 0; index < workingHours.length; index++) {
           let liCookies =document.createElement('li');
            ulist.appendChild(liCookies);

            liCookies.textContent=`${workingHours[index]}: ${this.cookiesEachHour[index]} coookies`;
           console.log(liCookies);
            
        }
        let totalcookieselement=document.createElement('li');

        ulist.appendChild(totalcookieselement);
        
        totalcookieselement.textContent=`total cookies for today : ${this.total} cookies`;

    }
    
}
seattle.calculatingCustomersEachHour();
seattle.calculatingCookiesEachHOur();
seattle.render();
console.log(seattle.customersEachHour);
console.log(seattle.cookiesEachHour);
///////////////////////////////////////////////////////////////////////////

let Tokyo ={          //this is an object 
    location:'Tokyo',
    minCustomers:3,        //these are keys 
    maxCustomers:24,
    avgCookies:1.2,
    customersEachHour :[],
    cookiesEachHour:[],
    total:0,

    calculatingCustomersEachHour:function(){    //this is a method 
        for (let index = 0; index < workingHours.length; index++) {
           
            this.customersEachHour.push(
                random(this.minCustomers,this.maxCustomers));
        }
    },

    calculatingCookiesEachHOur:function(){//this is a method
        for (let index = 0; index < workingHours.length; index++) {
            this.cookiesEachHour.push(Math.floor(
                 this.customersEachHour[index] * this.avgCookies));
           this.total+=this.cookiesEachHour[index];
        }
    },

    render:function(){
        let parent =document.getElementById('parent');
        console.log(parent);//

        let hElement =document.createElement(`h1`);
        console.log(hElement);
        parent.appendChild(hElement);
        hElement.textContent=`${this.location} branch`;

        let ulist =document.createElement("ul");
        parent.appendChild(ulist);

        for (let index = 0; index < workingHours.length; index++) {
           let liCookies =document.createElement('li');
            ulist.appendChild(liCookies);

            liCookies.textContent=`${workingHours[index]}: ${this.cookiesEachHour[index]} coookies`;
           console.log(liCookies);
            
        }
        let totalcookieselement=document.createElement('li');

        ulist.appendChild(totalcookieselement);
        
        totalcookieselement.textContent=`total cookies for today : ${this.total} cookies`;

    }
    
}
Tokyo.calculatingCustomersEachHour();
Tokyo.calculatingCookiesEachHOur();
Tokyo.render();
console.log(Tokyo.customersEachHour);
console.log(Tokyo.cookiesEachHour);

///////////////////////////////////////////////////////////////////////////

let Dubai ={          //this is an object 
    location:'Dubai',
    minCustomers:11,        //these are keys 
    maxCustomers:38,
    avgCookies:3.7,
    customersEachHour :[],
    cookiesEachHour:[],
    total:0,

    calculatingCustomersEachHour:function(){    //this is a method 
        for (let index = 0; index < workingHours.length; index++) {
           
            this.customersEachHour.push(
                random(this.minCustomers,this.maxCustomers));
        }
    },

    calculatingCookiesEachHOur:function(){//this is a method
        for (let index = 0; index < workingHours.length; index++) {
            this.cookiesEachHour.push(Math.floor(
                 this.customersEachHour[index] * this.avgCookies));
           this.total+=this.cookiesEachHour[index];
        }
    },

    render:function(){
        let parent =document.getElementById('parent');
        console.log(parent);//

        let hElement =document.createElement(`h1`);
        console.log(hElement);
        parent.appendChild(hElement);
        hElement.textContent=`${this.location} branch`;

        let ulist =document.createElement("ul");
        parent.appendChild(ulist);

        for (let index = 0; index < workingHours.length; index++) {
           let liCookies =document.createElement('li');
            ulist.appendChild(liCookies);

            liCookies.textContent=`${workingHours[index]}: ${this.cookiesEachHour[index]} coookies`;
           console.log(liCookies);
            
        }
        let totalcookieselement=document.createElement('li');

        ulist.appendChild(totalcookieselement);
        
        totalcookieselement.textContent=`total cookies for today : ${this.total} cookies`;

    }
    
}
Dubai.calculatingCustomersEachHour();
Dubai.calculatingCookiesEachHOur();
Dubai.render();
console.log(Dubai.customersEachHour);
console.log(Dubai.cookiesEachHour);


///////////////////////////////////////////////////////////////////////////

let Paris ={          //this is an object 
    location:'Paris',
    minCustomers:20,        //these are keys 
    maxCustomers:38,
    avgCookies:2.3,
    customersEachHour :[],
    cookiesEachHour:[],
    total:0,

    calculatingCustomersEachHour:function(){    //this is a method 
        for (let index = 0; index < workingHours.length; index++) {
           
            this.customersEachHour.push(
                random(this.minCustomers,this.maxCustomers));
        }
    },

    calculatingCookiesEachHOur:function(){//this is a method
        for (let index = 0; index < workingHours.length; index++) {
            this.cookiesEachHour.push(Math.floor(
                 this.customersEachHour[index] * this.avgCookies));
           this.total+=this.cookiesEachHour[index];
        }
    },

    render:function(){
        let parent =document.getElementById('parent');
        console.log(parent);//

        let hElement =document.createElement(`h1`);
        console.log(hElement);
        parent.appendChild(hElement);
        hElement.textContent=`${this.location} branch`;

        let ulist =document.createElement("ul");
        parent.appendChild(ulist);

        for (let index = 0; index < workingHours.length; index++) {
           let liCookies =document.createElement('li');
            ulist.appendChild(liCookies);

            liCookies.textContent=`${workingHours[index]}: ${this.cookiesEachHour[index]} coookies`;
           console.log(liCookies);
            
        }
        let totalcookieselement=document.createElement('li');

        ulist.appendChild(totalcookieselement);
        
        totalcookieselement.textContent=`total cookies for today : ${this.total} cookies`;

    }
    
}
Paris.calculatingCustomersEachHour();
Paris.calculatingCookiesEachHOur();
Paris.render();
console.log(Paris.customersEachHour);
console.log(Paris.cookiesEachHour);



///////////////////////////////////////////////////////////////////////////

let Lima ={          //this is an object 
    location:'Lima',
    minCustomers:2,        //these are keys 
    maxCustomers:16,
    avgCookies:4.6,
    customersEachHour :[],
    cookiesEachHour:[],
    total:0,

    calculatingCustomersEachHour:function(){    //this is a method 
        for (let index = 0; index < workingHours.length; index++) {
           
            this.customersEachHour.push(
                random(this.minCustomers,this.maxCustomers));
        }
    },

    calculatingCookiesEachHOur:function(){//this is a method
        for (let index = 0; index < workingHours.length; index++) {
            this.cookiesEachHour.push(Math.floor(
                 this.customersEachHour[index] * this.avgCookies));
           this.total+=this.cookiesEachHour[index];
        }
    },

    render:function(){
        let parent =document.getElementById('parent');
        console.log(parent);//

        let hElement =document.createElement(`h1`);
        console.log(hElement);
        parent.appendChild(hElement);
        hElement.textContent=`${this.location} branch`;

        let ulist =document.createElement("ul");
        parent.appendChild(ulist);

        for (let index = 0; index < workingHours.length; index++) {
           let liCookies =document.createElement('li');
            ulist.appendChild(liCookies);

            liCookies.textContent=`${workingHours[index]}: ${this.cookiesEachHour[index]} coookies`;
           console.log(liCookies);
            
        }
        let totalcookieselement=document.createElement('li');

        ulist.appendChild(totalcookieselement);
        
        totalcookieselement.textContent=`total cookies for today : ${this.total} cookies`;

    }
    
}
Lima.calculatingCustomersEachHour();
Lima.calculatingCookiesEachHOur();
Lima.render();
console.log(Lima.customersEachHour);
console.log(Lima.cookiesEachHour);
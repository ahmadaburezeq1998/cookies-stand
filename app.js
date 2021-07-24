"use strict";

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
    '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}//i got it from google


///////////////////////////////////////////////////////////////////
let allShops=[];
function Branches(location, minCustomers, maxCustomers, avgCookies) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.total = 0;
    this.calculatingCustomersEachHour();
    this.calculatingCookiesEachHOur();

    allShops.push(this);
}


Branches.prototype.calculatingCustomersEachHour = function () {
    for (let index = 0; index < workingHours.length; index++) {
        this.customersEachHour.push(
            random(this.minCustomers, this.maxCustomers));

    }
}


Branches.prototype.calculatingCookiesEachHOur = function () {
    
    for (let index = 0; index < workingHours.length; index++) {
        this.cookiesEachHour.push(
            Math.floor(this.customersEachHour[index] * this.avgCookies));

        console.log(this.cookiesEachHour[index]);
        this.total += this.cookiesEachHour[index];


    }

}

let Tokyo = new Branches('Tokyo',3,24,1.2);
let Lima =new Branches('Lima',2,16,4.6);
let Dubai = new Branches('Dubai',11,38,3.7);
let Seattle = new Branches('Seattle',23,65,6.3);
let Paris = new Branches('Paris',20,38,2.3);

let parent=document.getElementById('parent');

let mytitle=document.createElement('h1');
parent.appendChild(mytitle);
mytitle.textContent='Ahmad Cookie Stores';


let table =document.createElement('table');
parent.appendChild(table);

function maketheheader(){ 
    let headrow=document.createElement('tr');
    table.appendChild(headrow);
    ///
    let firstTH =document.createElement('th');
    headrow.appendChild(firstTH);
    firstTH.textContent='Branch/Time'


    for (let index = 0; index < workingHours.length; index++) {
        let timeH =document.createElement('th');
        headrow.appendChild(timeH);
        timeH.textContent=workingHours[index];
        
    }

    let lastTH =document.createElement('th');
    headrow.appendChild(lastTH);
    lastTH.textContent='Total Cookies'
}


maketheheader();


Branches.prototype.renderTable=function(){
    let dataRow=document.createElement('tr');
    table.appendChild(dataRow); 

    let BranchName=document.createElement('td');
     dataRow.appendChild(BranchName);
     BranchName.textContent=this.location;

     for (let index = 0; index < workingHours.length; index++) {
         let datacoloumn=document.createElement('td');
         dataRow.appendChild(datacoloumn);
         datacoloumn.textContent=this.cookiesEachHour[index];
         
     }

    let BranchTotal=document.createElement('td');
     dataRow.appendChild(BranchTotal);
     BranchTotal.textContent=this.total;
}


for (let index = 0; index < allShops.length; index++) {
    console.log(allShops[index]);
    allShops[index].calculatingCustomersEachHour();
    allShops[index].calculatingCookiesEachHOur();
    allShops[index].renderTable();
    
}

////////////////////////////////
function makethefooter(){ 
    let footrow=document.createElement('tr');
    table.appendChild(footrow);
    ///
    let firstTH =document.createElement('th');
    footrow.appendChild(firstTH);
    firstTH.textContent='Branches total/hour'

    let totalperdayforallbranches=0;
    for (let index = 0; index < workingHours.length; index++) {
        let totalPerHour =0;
        for (let index2 = 0; index2 < allShops.length; index2++) {
            totalPerHour+=allShops[index2].cookiesEachHour[index];
            
        }
        let footerth=document.createElement('th');
        footrow.appendChild(footerth);
        footerth.textContent=totalPerHour;
        totalperdayforallbranches+=totalPerHour;
        
    }
    
    let lastTH =document.createElement('th');
    footrow.appendChild(lastTH);
    lastTH.textContent= totalperdayforallbranches;
}

makethefooter();

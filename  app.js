/*const Ghazi = {

     EmployeeID : "1000"  ,
     FullName : "Ghazi Samer"   ,
     Department :  "administration"   ,
     Level : "senior"  ,

     ImageURL :   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"    ,
 
     Salarycalc: function(){
        var s = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        this.Salary=s;
     }    
     ,
     Salary: 0,
    
     uniqueNum : function () {
        var val = Math.floor(1000 + Math.random() * 9000);
      
       this.EmployeeID= val;
     }

}
Ghazi.uniqueNum();
Ghazi.Salarycalc();
const Lana = {
    EmployeeID :  "1001" ,
    FullName : "Lana Ali"   ,
    Department :  "Finance"   ,
    Level :  "senior" ,

    ImageURL :   "https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"  ,

    Salarycalc: function(){
        var s =  Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        this.Salary=s;
     }    
     ,
     Salary: 0,

    uniqueNum : function () {
        var val = Math.floor(1000 + Math.random() * 9000);
      
      this.EmployeeID= val;
    }
    
}
Lana.uniqueNum();
Lana.Salarycalc();

const Tamara = {
    EmployeeID :  "1002" ,
    FullName :   "Tamara Ayoub" ,
    Department : "Marketing"    ,
    Level : "Senior"  ,

    ImageURL :   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXSpQ9WydM6R7Z8djdgWmNPH_wmdL2DePnw&usqp=CAU"    ,

    Salarycalc: function(){
        var s =  Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        this.Salary=s;
     }    
     ,
     Salary: 0,

    uniqueNum : function () {
        var val = Math.floor(1000 + Math.random() * 9000);
      
      this.EmployeeID= val;
    }

    
}
Tamara.uniqueNum();
Tamara.Salarycalc();
const Safi = {
    EmployeeID : "1003"  ,
    FullName : "Safi Walid"   ,
    Department :  "Administration"   ,
    Level :  "Mid-Senior" ,

    ImageURL :   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILg48X1W2TnwhKbimLBfOmmjlFNARCJwDKQ&usqp=CAU"    ,

    Salarycalc: function(){
        var s =  Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        this.Salary=s;
     }    
     ,
    
     Salary: 0,

 uniqueNum : function () {
        var val = Math.floor(1000 + Math.random() * 9000);
      
      this.EmployeeID= val;
    }

    
}
Safi.uniqueNum();
Safi.Salarycalc();
const Omar = {
    EmployeeID : "1004" ,
    FullName : "Omar Zaid"   ,
    Department :  "Development	"   ,
    Level :  "senior" ,

    ImageURL :   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1HJ6b1g1vpv3mxaBS5951lrZOhIrfXSgvw&usqp=CAU"    ,

    Salarycalc: function(){
        var s =  Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        this.Salary=s;
     }    
     ,
     Salary: 0,

     uniqueNum : function () {
        var val = Math.floor(1000 + Math.random() * 9000);
     
      this.EmployeeID= val;
    }
    
}
Omar.uniqueNum();
Omar.Salarycalc();
const Rana = {
    EmployeeID :  "1005" ,
    FullName : "Rana Saleh"  ,
    Department :   "Development"  ,
    Level :  "Junior" ,

    ImageURL :     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2wUhWS-WwLKFsiscoCIVnz_WXYvbi0S-xA&usqp=CAU"  ,

    Salarycalc: function(){
        var s =  Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
        this.Salary=s;
     }    
     ,
     Salary: 0,

    uniqueNum : function () {
        var val = Math.floor(1000 + Math.random() * 9000);
      
      this.EmployeeID= val;
    }
    
}
 Rana.uniqueNum();
  Rana.Salarycalc();
const Hadi = {
    EmployeeID: "1006"   ,
    FullName:  "Hadi Ahmad"  ,
    Department:   "Finance"  ,
    Level: "Mid-Senior"  ,

    ImageURL:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sdWjJ3MVtWEFHlPvPNdSMkI1VqNd98udeQ&usqp=CAU"   ,

    Salarycalc: function(){
         var s = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        this.Salary=s;
     }    
     ,

     Salary: 0,
    

    uniqueNum: function () {
        var val = Math.floor(1000 + Math.random() * 9000);
      
      this.EmployeeID= val;
    }
    
    
}
Hadi.uniqueNum();
Hadi.Salarycalc();
console.log("Employee name: "+Ghazi.FullName);
console.log("Employee salary: " + (Ghazi.Salary - Ghazi.Salary*0.075))

console.log("Employee name: "+Lana.FullName);
console.log("Employee salary: " + (Lana.Salary - Lana.Salary*0.075))

console.log("Employee name: "+Tamara.FullName);
console.log("Employee salary: " + (Tamara.Salary - Tamara.Salary*0.075))

console.log("Employee name: "+Safi.FullName);
console.log("Employee salary: " + (Safi.Salary - Safi.Salary*0.075))

console.log("Employee name: "+Omar.FullName);
console.log("Employee salary: " + (Omar.Salary - Omar.Salary*0.075))

console.log("Employee name: "+Rana.FullName);
console.log("Employee salary: " + (Rana.Salary - Rana.Salary*0.075))

console.log("Employee name: "+Hadi.FullName);
console.log("Employee salary: " + (Hadi.Salary - Hadi.Salary*0.075))

*/
const body = document.getElementsByTagName('body');

const allEmployees = [];
function User(EmployeeID1,FullName1,Department1,Level1,ImageURL1,Salary1) {
   this.EmployeeID = EmployeeID1;
   this.FullName = FullName1;

   this.Department = Department1;

   this.Level = Level1;

   this.ImageURL = ImageURL1;
   this.Salary= Salary1;

   this.Salarycalc = function() {
    var s = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
   this.Salary=s;
}    
   this.uniqueNum = function () {
  var val = Math.floor(1000 + Math.random() * 9000);

this.EmployeeID= val;
}

allEmployees.push(this);

}

User.prototype.render = function(){
 const IMGS = document.createElement ('img');
 IMGS.className="images";
 
 IMGS.src= this.ImageURL;
 IMGS.alt = this.FullName;
 body[0].appendChild(IMGS);
 const NM = document.createElement('span')
 NM.className="frame";
 NM.textContent = `Name :  ${this.FullName}`;
 body[0].appendChild(NM); 
 const ID = document.createElement('span')
 ID.className="frame";
 ID.textContent = ` ID :  ${this.EmployeeID}`;
 body[0].appendChild(ID); 
 const dep = document.createElement('span')
 dep.className="frame";
 dep.textContent = ` Department :  ${this.Department}`;
 body[0].appendChild(dep); 
 const LVL = document.createElement('span')
 LVL.className="frame";
 LVL.textContent = ` Level :  ${this.Level}`;
 body[0].appendChild(LVL); 
 const slr = document.createElement('span')
 slr.className="frame";
 slr.textContent= ` Salary : ${this.Salary}`
 body[0].appendChild(slr);
}
const Ghazi = new User("1000","Ghazi Samer", "administration" ,"senior","./assets/Ghazi.jpg",0);

const Lana = new User ("1001", "Lana Ali","Finance","senior","./assets/Lana.jpg",0);

const Tamara = new User("1002", "Tamara Ayoub", "Marketing", "senior","./assets/Tamara.jpg",0);

const Safi = new User("1003","Safi Walid","Administration","Mid-Senior","./assets/Safi.jpg",0)

const Omar = new User("1004", "Omar Zaid", "Development", "senior","./assets/Omar.jpg",0)

const Rana = new User("1005","Rana Saleh","Development","Junior","./assets/Rana.jpg",0)

const Hadi = new User("1006","Hadi Ahmad","Finance","Mid-Senior","./assets/Hadi.jpg",0)
Ghazi.uniqueNum();
Ghazi.Salarycalc();
Lana.uniqueNum();
Lana.Salarycalc();
Tamara.uniqueNum();
Tamara.Salarycalc();
Safi.uniqueNum();
Safi.Salarycalc();
Omar.uniqueNum();
Omar.Salarycalc();
Rana.uniqueNum();
Rana.Salarycalc();
Hadi.uniqueNum();
Hadi.Salarycalc();


Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();

console.log(allEmployees);



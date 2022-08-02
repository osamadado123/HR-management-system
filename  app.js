const Ghazi = {
     EmployeeID : ""  ,
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
    EmployeeID :  "" ,
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
    EmployeeID :  "" ,
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
    EmployeeID : ""  ,
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
    EmployeeID : "" ,
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
    EmployeeID :  "" ,
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
    EmployeeID: 0   ,
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


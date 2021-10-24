var objName = {
    'firstName' : 'sachin',
    'lastName' : 'kumar',
    'Age' :  23,
    'Gender' : 'male'
  }
  
  console.log(objName)
  console.log(typeof(objName))
  console.log(objName.firstName)
  console.log(objName.Age)

  
  var car = {
    name : 'benz',
    manufacturer :{
      name : 'mercedesbenz',
      location : 'Germany'
    },
    topspeed : 300,
    color : 'black',
    applybrakes : function(){
      setTimeout(function(){
      console.log('car stopped')
      },3000)
    },
    price : '75 lakhs'
  }
  console.log(car.name)
  console.log(car.manufacturer)
  console.log(car.applybrakes)
  console.log(car.applybrakes())
  console.log(car.price)
  
  
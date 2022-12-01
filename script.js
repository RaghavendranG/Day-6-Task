//Class Movie:
class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        if(rating == undefined){
        this.rating = "PG";
        }else{
        this.rating = rating;
        }
    }
       getPG(array){
            var result = [];
            for(var i = 0 ; i < array.length ; i++){
                if(array[i].rating == "PG"){
                     result.push(array[i]);
                                }
        }
        return  result;
}
}
var movie = new Movie("Avengers","Marvel");
var movieOne = new Movie("Avengers-Eng Game","Marvel","PG13");
var movieTwo = new Movie("Casino Royale","Eon Productions","PG13");
var movieThree = new Movie("Batman","DC");
var getpg = new Movie();
var arr = [movie,movieOne,movieTwo,movieThree];
console.log(movie);
console.log(movieTwo);
console.log(getpg.getPG(arr));
//------------------------------------------------------------------------------------------------
// Class Circle:
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get radiusOfCircle() {
    return this.radius;
  }
  get colorOfCircle() {
    return this.color;
  }
  set radiusOfCircle(radius) {
    this.radius = radius;
  }
  set colorOfCircle(color) {
    this.color = color;
  }
  get toString() {
    return `"Circle[radius=${this.radius}, color=${this.color}]"`;
  }
  get areaCircle() {
    return Math.PI * this.radius * this.radius;
  }
  get circumferenceCircle() {
    return 2 * Math.PI * this.radius;
  }
}
var ObjCircle = new Circle(1.0, "red");
console.log(ObjCircle); 
console.log(`Radius of circle : ${ObjCircle.radiusOfCircle}`);
console.log(`Color of circle : ${ObjCircle.colorOfCircle}`);
console.log(ObjCircle.toString);
console.log(`Area of circle : ${ObjCircle.areaCircle}`);
console.log(`Cirumference of circle : ${ObjCircle.circumferenceCircle}`);
//------------------------------------------------------------------------------------------------
// Class Person
class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
}
}

var person = new Person("John", "Doe", "Male", 22);
var personTwo = new Person("Jessy", "Jane", "Female", 20);
console.log(person);
console.log(personTwo);
//---------------------------------------------------------------------------------------------------
// Class Uber
class Uber {
    constructor(distanceTravelled, pricePerKm) {
        this.distanceTravelled = distanceTravelled;
        this.pricePerKm = pricePerKm;
    }

    get price() {
        return this.pricePerKm * this.distanceTravelled;
    }
}

var uberPrice = new Uber(11, 10);
console.log(`Price for this ride is ${uberPrice.price}rs`);
//----------------------------------------------------------------------------------------------------------
const heading = 'Please Meet Our Team';
let i = 0;

const typing =() {
    if(i < heading.length){ 
        doocument.querySelector('.heading').innerHTML += heading.charAt(i);
    }
}
module.exports = function toReadable (number) {

   
    if( number >= 0 && number < 100 ) {
        return num1( number ) ;
        } ;
        
    if( number > 99 && number < 1000 ) {
        return num2( number ) ;
    } ;

    if( number > 999 && number < 20000 ) {
        return num3( number ) ;
    } ;  

} ; 


num1 = ( number ) => {
var ar10 = [ "zero" , "one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine" , "ten" , "eleven" , "twelve" , "thirteen" , "fourteen" , "fifteen" , "sixteen" , "seventeen" , "eighteen" , "nineteen" ] ;
var ar90 = [ 0 , 0 , "twenty" , "thirty" , "forty" , "fifty" , "sixty" , "seventy" , "eighty" , "ninety" ] ;

if( number >= 0 && number < 20 ) {
    return ar10[ number ] ;
    } ;
    
    if( number >= 20 && number < 100 ) {
    let k = number % 10 ;
    return k !== 0 ? ar90[ Math.trunc( number / 10 ) ] + ' ' + ar10[ number % 10 ] : ar90[ number / 10 ] ;
    } ;
} ;

num2 = ( number ) => {
var ar10 = [ "zero" , "one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine" , "ten" , "eleven" , "twelve" , "thirteen" , "fourteen" , "fifteen" , "sixteen" , "seventeen" , "eighteen" , "nineteen" ] ;
var ar90 = [ 0 , 0 , "twenty" , "thirty" , "forty" , "fifty" , "sixty" , "seventy" , "eighty" , "ninety" ] ;

let a100 = ar10[ Math.trunc( number / 100 ) ] + " hundred" ;
let k = number % 100 ;
return k !==0 ? a100 + " " + num1( k ) : a100 ;
} ;

num3 = ( number ) => {
    var ar10 = [ "zero" , "one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine" , "ten" , "eleven" , "twelve" , "thirteen" , "fourteen" , "fifteen" , "sixteen" , "seventeen" , "eighteen" , "nineteen" ] ;
    var ar90 = [ 0 , 0 , "twenty" , "thirty" , "forty" , "fifty" , "sixty" , "seventy" , "eighty" , "ninety" ] ;
    let a100 = ar10[ Math.trunc( number / 100 ) ] + " thousand" ;
    let k = number % 1000 ;
    return k !==0 ? a1000 + " " + num2( k ) : a1000 ;
} ;  
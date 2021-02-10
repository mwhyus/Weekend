// Output: 1 - 50
// perbilangan output print out bilangan output
// Tiap kelipatan 3 ganti dengan x
// Bilangan kelipatan 5 ganti dengan Y
// Bilangan kelipatan 3 & 5 ganti XY

// Mudah dibaca & di maintanance

// 1
// 2
// x
// 4
// y
// x
// 7
// 8
// x
// y
// 11
// x
// 13
// 14
// xy

//Pseudocode
// i <= 50 = print
// if else statment
//  kelipatan 3 console.log ('X')
//  kelipatan 5 console.log ('Y')
//  kelipatan 3 & 5 console.log ('XY')
// else print valuenya

function angka() {
    let k ;
      for (let i = 1 ; i <= 50 ; i++){
        k = ''
        if ( i % 3 == 0 ){
          k = 'X'
        } 
        if ( i % 5 == 0 ){
          k = k + 'Y' 
        } 
        if ( i % 7 == 0 ){
          k = k + 'Z' 
        } 
        if (k == ''){
          k = i
        }
        console.log(k)
      }
    }
    
    angka()
    
    // x = "X"
    // x = x + 'y'
    
    // console.log(x)
    
    
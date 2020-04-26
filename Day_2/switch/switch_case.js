'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch(s.charAt(0))
    {
        case ('a'||'e'||'i'||'o'||'u'):
        /*if(s.charAt(0)=='a'||s.charAt(0)=='e'||s.charAt(0)=='i'||s.charAt(0)=='o'||s.charAt(0)=='o')*/
        {
            letter='A'
        }
        break;
        
        case ('b'||'c'||'d'||'f'||'g'):
        /*if(s.charAt(0)=='b'||s.charAt(0)=='c'||s.charAt(0)=='d'||s.charAt(0)=='f'||s.charAt(0)=='g')*/
        {
            letter='B'
        }
        break;

        case ('h'||'j'||'k'||'l'||'m'):
        {
            letter='C'
        }
        break;

        case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y'):
        {
            letter='D'
        }
    }
    return letter;
}


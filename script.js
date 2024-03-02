
// შევქმნათ მასივი საიდანაც რენდომად ავირჩევთ სტრინგს.
const words = ["javascript", "hangman", "developer", "programming", "computer"];

// ავირჩიოთ რენდომად სტრინგი
let word = words[Math.floor(Math.random() * words.length)];

// შევქმნათ მასივი  მომხამრებლის მიერ შემოტანილი ასოების შესანახად
let array = [];

// მცდელობების რაოდენობა
let count = 6;

// ციკლი სანამ მოთამაშეს არამოეწურება მცდელობები ან არგამოიცნობს სიტყვას
while (count > 0) {
    // dashes the current state of the word
    let dashes = '';hangman 
    for (let letter of word) {//გადავუარეთ რენდომ სტრინგს
        if (array.includes(letter)) {//ვამოწმებთ რენდომ სტრინგის ელემენტი ემთხვევა თუარა მომხარებლის მიერ შემოტანილ ასოს.
            dashes += letter;
        } else {
            dashes += '_';
        }
    }
    console.log(dashes);
    
    //როცა ყველა ასოს შემოიტანს ვამოწმებთ ემთხვევა თუ არა მომხარებლის მიერ შედგენილი სიტყვა რენდომ სიტყვას
    if (dashes === word) {
        console.log('Congratulations! You guessed the word correctly.');
        break;
    }
    
    let guess = prompt("Guess a letter: "+dashes+" according to this dashes").toLowerCase();//dashes თავიდან ტოლია რენდომ რიცხვის სიგრძინდენი ტირეების
    
    // თუ მომხარებელი იგივე სიტყვას შემოიტანს
    if (array.includes(guess)) {
        alert("already used.");
        continue;
    }
    //მომხმარებლის მიერ შემოტანილ ასოს ვამატებთ ერეიში
    array.push(guess);
    for(let x of array){
        console.log(x)
    }
    //თუ ასოს არასწორად შევიყვან ცვენი მცდელობების რაოდენობა იკლებს.
    if (!word.includes(guess)) {
        count--;
        console.log( "The letter" +guess + "is not in the word. count:" +count);
    }
}

// თუ ჩვენი მცდელობების რაოდენობა ნული გახდა მაშინ წავაგეთ
if (count === 0) {
    console.log("you loose The word was"+ word);
}



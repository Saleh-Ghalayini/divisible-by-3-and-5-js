const num = parseInt(prompt("Please enter a number"))

for (let i = 1; i <= num; i++) {

    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i)
    }

}
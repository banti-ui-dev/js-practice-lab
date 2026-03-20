//Write a funtion to reverce the array

const ResverseArr = (arr) => {
    let reverse = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i])
    }
    return reverse.join("")
}
console.log(ResverseArr("Goodmornig Banti!"))

//Write logic to print greeting according to time like Goodmorning, Good Afternoon and Good evening

const Greeting = () => {
    const hour = new Date().getHours();

    let message = "";

    if (hour < 12) {
        message = "Good Morning"
    } else if (hour < 17) {
        message = "Good AfterNoon"
    } else if (hour < 21) {
        message = "Good Evening"
    } else {
        message = "Good Night"
    }
    return message


}
console.log(Greeting());

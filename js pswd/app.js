////selectors /////

const showpswd = document.querySelector('#pswdShow')

const totalchr = document.querySelector('#total-char')
const uppercase = document.querySelector('#Uppercase')
const lowercase = document.querySelector('#lowercase ')
const number = document.querySelector('#number')
const symbols = document.querySelector('#symbols')
const Emoji = document.querySelector('#emoji')



const btn = document.querySelector('#btn')


//////////////password setdata /////////////////

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"
const emojis = "😊🔥🌟🐾🎈🍀🎉🌺🍕🚀🎸🍔🍦🌈⚡💡🍭🏆🌍🎨";

//////////for random data /////////

const getRandom = (dataSet) => {
    const randomNo = Math.floor(Math.random() * dataSet.length);
    return dataSet[randomNo]

}



const genratepswd = (password = '') => {
    if (uppercase.checked) {
        password += getRandom(upperSet)
    }
    if (lowercase.checked) {
        password += getRandom(lowerSet)
    }
    if (number.checked) {
        password += getRandom(numberSet)
    }
    if (symbols.checked) {
        password += getRandom(symbolSet)
    }
    if (Emoji.checked) {
        password += getRandom(emojis)
    }

    if (password.length < totalchr.value) {
        /////jab tak chalao fn jab tak length se thoda kam nhi hota
        return genratepswd(password)
    }


    showpswd.innerText = truncateString(password, totalchr.value);

    setTimeout(() => {
        alert(`your strong password is  ${password}`)
    }, 100)

    function savePassword() {
        let save = confirm("Do you want to save your password?");
        if (save) {

            if (password !== null && password !== "") {
                localStorage.setItem("SavedPassword", password);
                alert("Password saved in localStorage!");
            } else {
                alert("No password entered. Password not saved.");
            }
        } else {
            alert("Password not saved.");
        }
    }
    setTimeout(savePassword, 2000)



}





btn.addEventListener('click', function () {


    genratepswd()




})
btn.addEventListener('keyup', (e) => {
    if (e.target.value === 'Enter') {
        genratepswd()
    }

})

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}








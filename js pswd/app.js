////selectors /////

const showpswd = document.querySelector('#pswdShow')

const totalchr = document.querySelector('#total-char')
const uppercase = document.querySelector('#Uppercase')
const lowercase = document.querySelector('#lowercase ')
const number = document.querySelector('#number')
const symbols = document.querySelector('#symbols')


const btn = document.querySelector('#btn')


//////////////password setdata /////////////////

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

//////////for random data /////////

const getRandom = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]

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

    if (password.length < totalchr.value) {
        return genratepswd(password)
    }

    showpswd.innerText= truncateString(password , totalchr.value);

}

 

btn.addEventListener('click',  function(){
    genratepswd()
})

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}





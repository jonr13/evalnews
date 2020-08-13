import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);

alert("I EXIST")

console.log("CHANGE!!");

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    checkForName,
    handleSubmit
   }


//Add event listener to Submit Button
document.getElementById('submit').addEventListener('click', clickFunc)

const ApiData = async (baseURL, zipCode, apiKey) => {
    const finalURL = `${baseURL}zip=${zipCode},${countryCode}&units=metric&appid=${apiKey}`;
    const response = await fetch (finalURL)
        try {const data = await response.json(); return data;}
        catch(error) {console.log("There was an error", error);}
    }

function clickFunc(e) {
    const zipCode = document.getElementById('zip').value;
    const userRespon = document.getElementById('feelings').value;
    weatherData(baseURL, zipCode, apiKey);
}


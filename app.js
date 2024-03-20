window.onload=()=>{
    const button =document.querySelector('#btn');
    button.addEventListener('click',CalculateBmi)
    }
    function CalculateBmi(){
        const height = document.querySelector('#height').value;
        const weight = document.querySelector('#weight').value; // value input field se nikalne k liye .value ka use
        const result= document.querySelector('#result');
        
        if(!height || isNaN(height) || height<0){
        result.innerHTML="Please provide a valid height";
        return;
        } else if (!weight || isNaN(weight) || weight < 0){
            result.innerText="please provide a valid weight";
            return;
        }
        const bmi=(weight / ((height*height) /10000)).toFixed(2);
        if(bmi < 18.5 ){
            result.innerText ='Under weight: ${bmi}'; //for increase readability
        }
        else if (bmi >= 18.5 && bmi < 24.9){
            result.innerText ='Normal: ${bmi}'; //for increase readability

        }
        else if (bmi >= 25.5 && bmi < 29.9){
            result.innerText ='Over weight:${BMI}'; //for increase readability

        }
        else if (bmi >= 30.5 && bmi < 34.9){
            result.innerText ='obesity(class I):${BMI}'; //for increase readability

        }
        else if (bmi >= 35.5 && bmi < 39.9){
            result.innerText ='obesity(class II):${BMI}'; //for increase readability

        }
        else {
            result.innerText ='Extreme obesity: ${BMI}'; //for increase readability

        }




    }


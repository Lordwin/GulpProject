function closeRegForm() {
    var displaySignForm = document.getElementById("authorization-div").style.display;

    if (displaySignForm == 'none') {
        document.getElementById("authorization-div").style.display = 'block';
    } else {
        document.getElementById("authorization-div").style.display = 'none';
    }
    document.getElementById("MyAccount").style.display = 'list-item';
}

function showRegForm() {
    document.getElementById("authorization-div").style.display = 'block';
    document.getElementById("MyAccount").style.display = 'none';
}

function addCountToCart() {
    document.getElementById('count-cart').value = "1";


}


function startGuessNumber() {
    document.getElementById('pc-take-number-1').innerHTML = 'The computer selected a number *** from 1 to ' + document.getElementById("number-1").value + '.';
}

function readUserNumber() {
    var answer = parseInt(Math.random() * +document.getElementById("number-1").value),
        count_answer = 0,
        userAnswer = +document.getElementById("number-2").value;
}

function showHidePass() {
    var checked = document.getElementById("show-password").checked;
    if (checked) {
        document.getElementById("checkin-password").type = "text";
    } else {
        document.getElementById("checkin-password").type = "password";
    }
   
}


//    while (true) {
//      
//        if (userAnswer > answer) {
//            window.document.getElementById('pc-take-number-2').innerHTML = 'Ваш ответ слишком большой.';
//            count_answer++;
//        } else if (userAnswer < answer) {
//             document.getElementById('pc-take-number-2').innerHTML = 'Ваш ответ слишком маленький.';
//            count_answer++;
//        } else if (userAnswer == answer) {
//            count_answer++;
//            document.getElementById('pc-take-number-2').innerHTML = 'Победа! Вы угадали! \nКомпьютер загадал число ' + answer + "\nКоличество ваших попыток составило: " + count_answer;
//            break;
//        } else {
//            document.getElementById('pc-take-number-2').innerHTML = 'Необходимо ввести число!';
//            count_answer++;
//        }
//
//    }



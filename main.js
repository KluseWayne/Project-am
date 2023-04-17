function checkOTP() {
    const input = document.getElementById("otp-input");
    const otp = input.value;
    const message = document.getElementById("message");
    const loader = document.querySelector(".lds-default")
    if (otp.length === 4) {
        if (otp === "8888") {
            message.classList.remove("red");
            message.classList.add("green");
            setTimeout(() => {
                input.value = "";
                message.textContent = "Bingo!";
            }, 1000);
        } else {
            message.classList.remove("green");
            message.classList.add("red");
            setTimeout(() => {
                input.value = "";
                message.textContent = "";
                message.textContent = "Wrong OTP";
            }, 1000);
        }
    } else {
        input.classList.remove("green", "red");
        message.textContent = "";
    }
}


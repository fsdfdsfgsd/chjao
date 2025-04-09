

// 验证码倒计时
const duanCode = document.querySelector(".duanCode");
let flag = true;
duanCode.addEventListener("click", () => {
    if(flag) {
        flag = false;
        let i =5;
        duanCode.innerHTML = `0${i}秒后重新获取`;
        let timerId =  setInterval(() => {
            i--;
            duanCode.innerHTML = `0${i}秒后重新获取`;
            if (i===0) {
                clearInterval(timerId);
                duanCode.innerHTML = `重新获取`;
                flag = true;
            }
        }, 1000); 
    }
})


const username = document.querySelector("[name='username']");
username.addEventListener("change", verifyName);

function verifyName() {
    const alert = document.querySelector(".alert");
    const reg = /^[a-zA-Z0-9_-]{6,10}$/;
    if(!reg.test(username.value)) {
        alert.style.opacity = 1;
        alert.style.backgroundColor = "red"; 
        alert.innerHTML = "用户名输入不正确，请输入6-10位字母、数字、下划线或减号";
        setTimeout(() => {
            alert.style.opacity = 0;
        }, 2000);
        return false;
    }       
    alert.style.opacity = 0;
    
    return true;
}


const phone = document.querySelector("[name='phone']");
phone.addEventListener("change", phoneName);
function phoneName() {
    const alert = document.querySelector(".alert");
    const reg = /^1(3\d|[5-9]|[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
    if(!reg.test(phone.value)) {
        alert.style.opacity = 1;
        alert.style.backgroundColor = "red"; 
        alert.innerHTML = "手机号输入不正确，请输入11位手机号";
        setTimeout(() => {
            alert.style.opacity = 0;
        }, 2000);
        return false;
    }
    alert.style.opacity = 0;
    return true;
}


const verificationCode = document.querySelector("[name='verificationCode']");
verificationCode.addEventListener("change", codeName);
function codeName() {
    const alert = document.querySelector(".alert");
    const reg = /^\d{6}$/;
    if(!reg.test(verificationCode.value)) {
        alert.style.opacity = 1;
        alert.style.backgroundColor = "red"; 
        alert.innerHTML = "输入不合法，请输入6位验证码";
        setTimeout(() => {
            alert.style.opacity = 0;
        }, 2000);
        return false;
    }
    alert.style.opacity = 0;
    return true;
}

const password = document.querySelector("[name='password']");
password.addEventListener("change", pwdName);
function pwdName() {
    const alert = document.querySelector(".alert");
    const reg = /^[a-zA-Z0-9_-]{6,20}$/;
    if(!reg.test(password.value)) {
        alert.style.opacity = 1;
        alert.style.backgroundColor = "red"; 
        alert.innerHTML = "输入不合法，请输入6-20位密码,字母、数字、下划线";
        setTimeout(() => {
            alert.style.opacity = 0;
        }, 2000);
        return false;
    }
    alert.style.opacity = 0;
    return true;
}


const confirmPassword = document.querySelector("[name='confirmPassword']");
confirmPassword.addEventListener("change", confirmName);
function confirmName() {
    const alert = document.querySelector(".alert");
    if(password.value !== confirmPassword.value) {
        alert.style.opacity = 1;
        alert.style.backgroundColor = "red"; 
        alert.innerHTML = "两次密码不一致，请重新输入";
        setTimeout(() => {
            alert.style.opacity = 0;
        }, 2000);
        return false;
    }
    alert.style.opacity = 0;
    return true;
}


const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    if(flexCheckDefault.checked !==true) {
        alert("请同意用户协议");
        e.preventDefault();
    }
    if (!verifyName()) e.preventDefault();
    if (!phoneName()) e.preventDefault();
    if (!codeName()) e.preventDefault();
    if (!pwdName()) e.preventDefault();
    if (!confirmName()) e.preventDefault();
    

})
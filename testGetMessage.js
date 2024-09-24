// testGetMessage.js

// 导入getMessage.js中的函数
const { randomCode, sendCode } = require('./src/utils/getMessage');

// 测试生成随机验证码
// 测试时只能使用1-4位验证码
const code = randomCode(4);
console.log("生成的验证码是：", code);

// 测试发送验证码
// 使用你想测试的手机号码
const testPhone = "YOUR_PHONE";
// e.g.
// const testPhone ="15567899876";

sendCode(testPhone, code, (success) => {
    if (success) {
        console.log("验证码发送成功");
    } else {
        console.log("验证码发送失败");
    }
});

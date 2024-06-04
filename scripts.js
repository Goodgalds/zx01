document.addEventListener("DOMContentLoaded", function () {
    // 表单提交事件监听器
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止默认表单提交行为
        alert('Message sent!'); // 弹出提示框
    });
    
 });


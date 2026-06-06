/*------------------------------------------------GoUp Btn----------------------------------------------------*/
const scrollBtn = document.querySelector(".GoUp");

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('DOMContentLoaded' , () => {
    scrollBtn.style.display = "none";
});
/*------------------------------------------------Support Btn----------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const supportBtn = document.querySelector('.Support > button');
    const supportForm = document.querySelector('.Support');
    const chatBox = document.querySelector('.SChat');
    const closeBtn = chatBox.querySelector('.closeSupport');
    const sendBtn = document.querySelector('.Send');
    const input = document.querySelector('.SFooter input');
    const messages = document.querySelector('.SMessages');

    // باز شدن چت
    supportBtn.addEventListener('click', function (e) {
        e.preventDefault(); // جلوگیری از submit فرم
        chatBox.style.display = 'flex';
        input.focus();
    });

    // بستن چت با ضربدر
    closeBtn.addEventListener('click', function () {
        chatBox.style.display = 'none';
    });

    // بستن چت وقتی فوکوس ازش خارج شد
    document.addEventListener('click', function (e) {
        const isClickInside = supportForm.contains(e.target);
        if (!isClickInside) {
            chatBox.style.display = 'none';
        }
    });

    function SentMessage()
    {
      const msg = input.value.trim();
        if (msg !== '') {
            const msgElement = document.createElement('div');
            msgElement.textContent = msg;
            msgElement.className = 'YourMessage';
            messages.appendChild(msgElement);
            messages.scrollTop = messages.scrollHeight;
            input.value = '';
        }
    }

    sendBtn.addEventListener('click', function (e){
      e.preventDefault();
      SentMessage();
    });

    input.addEventListener('keyup' , function(e){
      if(e.key === "Enter")
      {
        e.preventDefault();
        SentMessage();
      }
    });

    // ارسال پیام
    // sendBtn.addEventListener('click', function () {
    //     const msg = input.value.trim();
    //     if (msg !== '') {
    //         const msgElement = document.createElement('div');
    //         msgElement.textContent = msg;
    //         msgElement.className = 'YourMessage';
    //         messages.appendChild(msgElement);
    //         messages.scrollTop = messages.scrollHeight;
    //         input.value = '';
    //     }
    // });
});


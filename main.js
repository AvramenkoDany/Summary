const recipientEmail = 'dany2004688@gmail.com'; // Електронна адреса отримувача

document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Зупиняємо стандартну відправку форми

  const formData = new FormData(this); // Отримуємо дані форми

  formData.append('to', recipientEmail); // Додаємо електронну адресу отримувача до даних форми

  fetch('/send-email', {
    method: 'POST',
    body: formData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка відправки повідомлення');
        }
        alert('Повідомлення відправлено успішно!');
      })
      .catch(error => {
        console.error('Помилка:', error);
        alert('Сталася помилка при відправці повідомлення.');
      });
    });
const form = document.querySelector('form');

const getData = (form) => {
  const data = {
    name: form.name.value,
    email: form.email.value,
    phoneNumber: form.phoneNumber.value,
    subject: form.subject.value,
    clientMessage: form.clientMessage.value,
  };

  return data;
};

const mailTo = (emailReceiver, data) => {
  const a = document.createElement('a');
  a.href = `mailto:${emailReceiver}?subject=${data.subject}&body=Hello my name is ${data.name}, ${data.clientMessage}. you can contact me here ${data.phoneNumber}.`;
  a.click();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = getData(form);
  mailTo('muhmmdazmye@gmail.com', data);
});

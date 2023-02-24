let datas = [];
const form = document.querySelector('form');
const projectLists = document.querySelector('#projectLists');

const getData = (form) => {
  let data = {
    projectName: form.name.value,
    startDate: form.startDate.value,
    endDate: form.endDate.value,
    description: form.desc.value,
    duration: differenceInMonths(form.startDate.value, form.endDate.value),
    image: form.imageUpload.files[0] != undefined ? URL.createObjectURL(form.imageUpload.files[0]) : null,
    icons: {
      nodeJs: form.nodeJsIco.checked,
      nextJs: form.nextJs.checked,
      reactJs: form.reactJs.checked,
      typeScript: form.typeScript.checked,
    },
  };

  datas.push(data);
};

const generateCardTemplate = (data) => {
  const projectCard = `<div class="project-card">
  <div class="head">
    <img src="${data.image}" alt="" style="width: 100%" />
  </div>
  <div class="body">
    <h3>${data.projectName} - ${new Date(data.endDate).getFullYear()}</h3>
    <p>Duration : ${data.duration <= 0 ? 'Less than a month' : `${data.duration === 1 ? `${data.duration} month` : `${data.duration} months`}`} </p>
    <p>${data.description}</p>
    <div class="icons">
      <ul>
        ${data.icons.nextJs ? '<li><i class="cib-next-js"></i></li>' : ''}
        ${data.icons.reactJs ? '<li><i class="cib-react"></i></li>' : ''}
        ${data.icons.nodeJs ? '<li><i class="fa-brands fa-node-js"></i></li>' : ''}
        ${data.icons.typeScript ? '<li><i class="cib-typescript"></i></li>' : ''}
      </ul>
    </div>

    <div class="buttons">
      <button>edit</button>
      <button>delete</button>
    </div>
  </div>
</div>`;

  return projectCard;
};

const differenceInMonths = (date_1, date_2) => {
  let date1 = new Date(date_1);
  let date2 = new Date(date_2);
  const monthDiff = date2.getMonth() - date1.getMonth();
  const yearDiff = date2.getYear() - date1.getYear();

  return monthDiff + yearDiff * 12;
};

const updateUI = () => {
  projectLists.innerHTML = '';
  datas.map((index) => {
    projectLists.innerHTML += generateCardTemplate(index);
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getData(form);
  updateUI();
});

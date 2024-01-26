const downloadData = document.querySelector('.goal-download');
const loader = document.querySelector('.loader');
if (downloadData) {
  downloadData.addEventListener('click', (event) => {
    loader.hidden = false;
    console.log(loader.hidden)
  })
}

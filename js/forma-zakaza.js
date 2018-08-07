(function () {
  let shaterChoose = document.querySelectorAll('.shatri-item');
  let moadalChooseShater = document.querySelector('.choose-shater');
  for (let i = 0; i < shaterChoose.length; i++){
    shaterChoose[i].addEventListener('click', function (evt) {
      if (shaterChoose[i].id === 'pag'){
        shaterPagoda()
      }
    })
  }
  function shaterPagoda() {
    let pagoda9 = document.createElement('button');
    let pagoda25 = document.createElement('button');
    let pagoda64 = document.createElement('button');
    pagoda9.innerText ='Шатёр Пагода 3 на 3';
    pagoda25.innerText ='Шатёр Пагода 5 на 5';
    pagoda64.innerText ='Шатёр Пагода 64 кв.м';
    moadalChooseShater.style.display = 'block';
    moadalChooseShater.appendChild(pagoda9);
    moadalChooseShater.appendChild(pagoda25);
    moadalChooseShater.appendChild(pagoda64);
    let buttonChooseShater = document.querySelectorAll('.choose-shater button');
    for (let i = 0; i < buttonChooseShater.length; i++){
      //console.log(buttonChooseShater);
      buttonChooseShater[i].addEventListener('click', chooseGoods)
    }
  }
  function chooseGoods(evt) {
      let titleGood = document.querySelector('.title-goods');
      titleGood.innerText = this.innerText;
  }

})();
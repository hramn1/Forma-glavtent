(function () {
  let shaterChoose = document.querySelectorAll('.shatri-item');
  let moadalChooseShater = document.querySelector('.choose-shater');
  let formaZakaza = document.querySelector('.zakaz-forma');
  let modalOver = document.querySelector('.modal-overlay');
  let goodDiv = document.querySelector('.choose-goods');
  let btnChoose = document.querySelector('.choose-goods__btn');
  for (let i = 0; i < shaterChoose.length; i++){
    shaterChoose[i].addEventListener('click', displayShaterChoose);
    function displayShaterChoose (evt) {
      modalOver.style.display = 'block';
      if (shaterChoose[i].id === 'pag'){
        shaterPagoda()
      }
      else if (shaterChoose[i].id === 'sfera') {
        shaterSfera()
      }
      else if (shaterChoose[i].id === 'tent') {
        shaterTent();
      }
    }
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
      buttonChooseShater[i].addEventListener('click', chooseGoods)
    }
  }
  function shaterSfera() {
    let sfera6d = document.createElement('button');
    let sfera8d = document.createElement('button');
    let sfera10d = document.createElement('button');
    let sfera12d = document.createElement('button');
    sfera6d.innerText ='Шатёр Сфера диаметром 6 метров';
    sfera8d.innerText ='Шатёр Сфера диаметром 8 метров';
    sfera10d.innerText ='Шатёр Сфера диаметром 10 метров';
    sfera12d.innerText ='Шатёр Сфера диаметром 12 метров';
    moadalChooseShater.style.display = 'block';
    moadalChooseShater.appendChild(sfera6d);
    moadalChooseShater.appendChild(sfera8d);
    moadalChooseShater.appendChild(sfera10d);
    moadalChooseShater.appendChild(sfera12d);
    let buttonChooseShater = document.querySelectorAll('.choose-shater button');
    for (let i = 0; i < buttonChooseShater.length; i++){
      buttonChooseShater[i].addEventListener('click', chooseGoods)
    }
  }
  function shaterTent() {
    let tent6m = document.createElement('button');
    let tent8m = document.createElement('button');
    let tent10m = document.createElement('button');
    let tent15m = document.createElement('button');
    let tent20m = document.createElement('button');
    tent6m.innerText ='Тент шириной 6м';
    tent8m.innerText ='Тент шириной 8м';
    tent10m.innerText ='Тент шириной 10м';
    tent15m.innerText ='Тент шириной 15м';
    tent20m.innerText ='Тент шириной 20м';
    moadalChooseShater.style.display = 'block';
    moadalChooseShater.appendChild(tent6m);
    moadalChooseShater.appendChild(tent8m);
    moadalChooseShater.appendChild(tent10m);
    moadalChooseShater.appendChild(tent15m);
    moadalChooseShater.appendChild(tent20m);
    let buttonChooseShater = document.querySelectorAll('.choose-shater button');
    for (let i = 0; i < buttonChooseShater.length; i++){
      buttonChooseShater[i].className = "choose-shater__btn"
      buttonChooseShater[i].addEventListener('click', chooseGoods)
    }
  }
  function chooseGoods() {
    let rangeDay = document.querySelector('#arenda-range');
    let outRange = document.querySelector('#resultDay');
    let titleGood = document.querySelector('.title-goods');
    let checkedOption = document.querySelectorAll('input[type="checkbox"]');
    if(this.className === 'choose-shater__btn'){
      document.querySelector('.choose-goods__square-tent').style.display = 'block'
    }
    rangeDay.onchange = function(){
      outRange.innerText = rangeDay.value
    };
    moadalChooseShater.style.display = 'none';
    goodDiv.style.display = 'block';
    titleGood.innerText = this.innerText;
    while (moadalChooseShater.firstChild) {
      moadalChooseShater.removeChild(moadalChooseShater.firstChild);
    }
    btnChoose.onclick = function () {
      let arrDop = [];
      for (let i = 0; i < checkedOption.length; i++){
        if(checkedOption[i].checked){
          arrDop.push(' ' + checkedOption[i].nextSibling.innerText)
        }
      }
      addGoodsInForm(titleGood, arrDop, rangeDay);
    }

  }
  function addGoodsInForm(titleGood, arrDop, rangeDay) {
    let template = document.querySelector('template').content.cloneNode(true);
    template.querySelector('h2').textContent = titleGood.innerText;
    template.querySelector('.goods-zakaz__arenda-day').textContent = rangeDay.value;
    template.querySelector('.goods-zakaz__dop').textContent = arrDop;
    modalOver.style.display = 'none';
    goodDiv.style.display = 'none';
    formaZakaza.style.display = 'block';
    formaZakaza.appendChild(template);
  }
})();

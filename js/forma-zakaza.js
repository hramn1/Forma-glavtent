(function () {
  let shaterChoose = document.querySelectorAll('.shatri-item');
  let moadalChooseShater = document.querySelector('.choose-shater');
  let formaZakaza = document.querySelector('.zakaz-forma');
  let modalOver = document.querySelector('.modal-overlay');
  let goodDiv = document.querySelector('.choose-goods');
  let btnChoose = document.querySelector('.choose-goods__btn');
  let itemChoose = document.querySelectorAll('.item-panel__btn');
  let itemDiv = document.querySelector('.choose-items');
  const ESC_KEYCODE = 27;
  function onSuccessEscPress (evt){
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      window.location.reload();
      window.removeEventListener('keydown', onSuccessEscPress);
    }
  }
  for (let i = 0; i < shaterChoose.length; i++){
    shaterChoose[i].addEventListener('click', displayShaterChoose);
    function displayShaterChoose () {
      modalOver.style.display = 'block';
      if (shaterChoose[i].id === 'pag') {
        shaterPagoda()
      }
      else if (shaterChoose[i].id === 'sfera') {
        shaterSfera()
      }
      else if (shaterChoose[i].id === 'tent') {
        shaterTent()
      }
      else if (shaterChoose[i].id === 'mob') {
        shaterMob()
      }
      else if (shaterChoose[i].id === 'arc') {
        shaterArc()
      }
      else if (shaterChoose[i].id === 'pauk') {
        shaterPauk()
      }
      else if (shaterChoose[i].id === 'zvezda') {
        shaterZvezda()
      }
    }
  }
  for (let k = 0; k < itemChoose.length; k++){
    itemChoose[k].addEventListener('click', displayItem);
    function displayItem (){
      let titleItem = document.querySelector('.title-items');
      let btnChooseGoods = document.querySelector('#choose-btn-items');
      let rangeDay = document.querySelector('#arenda-range-items');
      let outRange = document.querySelector('#resultDayItem');
      let rangeKolvo = document.querySelector('#arenda-range-kolvo-items');
      let outKolvo = document.querySelector('#result-kolvo-items');
      titleItem.innerText = this.innerText;
      outRange.innerText = rangeDay.value;
      outKolvo.innerText = rangeKolvo.value;
      rangeDay.onchange = function(){
        outRange.innerText = rangeDay.value
      };
      rangeKolvo.onchange = function(){
        outKolvo.innerText = rangeKolvo.value
      };
      modalOver.style.display = 'block';
      itemDiv.style.display = 'block';
      btnChooseGoods.onclick = function () {
        addGoodsInForm(titleItem, '', rangeDay, rangeKolvo, '');
        itemDiv.style.display = 'none';
      };
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
    window.addEventListener('keydown', onSuccessEscPress);
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
      buttonChooseShater[i].className = "choose-shater__btn";
      buttonChooseShater[i].addEventListener('click', chooseGoods)
    }
  }
  function shaterMob() {
    let mob16 = document.createElement('button');
    let mob32 = document.createElement('button');
    mob16.innerText ='Мобильный шатёр 4*4';
    mob32.innerText ='мобильный шатёр 4*8';
    moadalChooseShater.style.display = 'block';
    moadalChooseShater.appendChild(mob16);
    moadalChooseShater.appendChild(mob32);
    let buttonChooseShater = document.querySelectorAll('.choose-shater button');
    for (let i = 0; i < buttonChooseShater.length; i++){
      buttonChooseShater[i].addEventListener('click', chooseGoods)
    }
  }
  function shaterArc() {
    let arc5x5 = document.createElement('button');
    let arc6x6 = document.createElement('button');
    let arc8x8 = document.createElement('button');
    let arc8x8Duna = document.createElement('button');
    let arc10x10 = document.createElement('button');
    let arc10x10Duna = document.createElement('button');
    let arc260 = document.createElement('button');
    let arcMod = document.createElement('button');
    arc5x5.innerText ='Арочный Шатёр 5x5';
    arc6x6.innerText ='Арочный Шатёр 6x6';
    arc8x8.innerText ='Арочный Шатёр 8x8';
    arc8x8Duna.innerText ='Арочный Шатёр 8x8 Дюна';
    arc10x10.innerText ='Арочный Шатёр 10x10';
    arc10x10Duna.innerText ='Арочный Шатёр 10x10 Дюна';
    arc260.innerText ='Арочный Шатёр гексагональ 260 кв.м';
    arcMod.innerText ='Арочный модуль 50 кв.м ';
    moadalChooseShater.style.display = 'block';
    moadalChooseShater.appendChild(arc5x5);
    moadalChooseShater.appendChild(arc6x6);
    moadalChooseShater.appendChild(arc8x8);
    moadalChooseShater.appendChild(arc8x8Duna);
    moadalChooseShater.appendChild(arc10x10);
    moadalChooseShater.appendChild(arc10x10Duna);
    moadalChooseShater.appendChild(arc260);
    moadalChooseShater.appendChild(arcMod);
    let buttonChooseShater = document.querySelectorAll('.choose-shater button');
    for (let i = 0; i < buttonChooseShater.length; i++){
      buttonChooseShater[i].addEventListener('click', chooseGoods)
    }
  }
  function shaterPauk() {
    let paukd11 = document.createElement('button');
    let paukd13 = document.createElement('button');
    let paukd17 = document.createElement('button');
    let paukd19 = document.createElement('button');
    let paukd21 = document.createElement('button');
    let paukd26 = document.createElement('button');
    paukd11.innerText ='Шатёр Паук D11';
    paukd13.innerText ='Шатёр Паук D13';
    paukd17.innerText ='Шатёр Паук D17';
    paukd19.innerText ='Шатёр Паук D19';
    paukd21.innerText ='Шатёр Паук D21';
    paukd26.innerText ='Шатёр Паук D26';
    moadalChooseShater.style.display = 'block';
    moadalChooseShater.appendChild(paukd11);
    moadalChooseShater.appendChild(paukd13);
    moadalChooseShater.appendChild(paukd17);
    moadalChooseShater.appendChild(paukd19);
    moadalChooseShater.appendChild(paukd21);
    moadalChooseShater.appendChild(paukd26);
    let buttonChooseShater = document.querySelectorAll('.choose-shater button');
    for (let i = 0; i < buttonChooseShater.length; i++){
      buttonChooseShater[i].addEventListener('click', chooseGoods)
    }
  }
  function shaterZvezda() {
    let zvezda10d = document.createElement('button');
    let zvezda12d = document.createElement('button');
    zvezda10d.innerText ='Шатёр Звезда D10';
    zvezda12d.innerText ='Шатёр Звезда D12';
    moadalChooseShater.style.display = 'block';
    moadalChooseShater.appendChild(zvezda10d);
    moadalChooseShater.appendChild(zvezda12d);
    let buttonChooseShater = document.querySelectorAll('.choose-shater button');
    for (let i = 0; i < buttonChooseShater.length; i++){
      buttonChooseShater[i].addEventListener('click', chooseGoods)
    }
  }
  function chooseGoods() {
    let rangeDay = document.querySelector('#arenda-range');
    let outRange = document.querySelector('#resultDay');
    let titleGood = document.querySelector('.title-goods');
    let checkedOption = document.querySelectorAll('input[type="checkbox"]');
    let rangeKolvo = document.querySelector('#arenda-range-kolvo');
    let outKolvo = document.querySelector('#result-kolvo');
    outRange.innerText = rangeDay.value;
    outKolvo.innerText = rangeKolvo.value;
    rangeDay.onchange = function(){
      outRange.innerText = rangeDay.value
    };
    rangeKolvo.onchange = function(){
      outKolvo.innerText = rangeKolvo.value
    };
    moadalChooseShater.style.display = 'none';
    goodDiv.style.display = 'block';
    titleGood.innerText = this.innerText;
    while (moadalChooseShater.firstChild) {
      moadalChooseShater.removeChild(moadalChooseShater.firstChild);
    }
    if(this.className === 'choose-shater__btn'){
      document.querySelector('.choose-goods__square-tent').style.display = 'inline-block';
      let squareTent = document.querySelector('#square-tent');
      squareTent.style.display = 'inline-block';
      btnChoose.onclick = function () {
        let arrDop = [];
        for (let i = 0; i < checkedOption.length; i++){
          if(checkedOption[i].checked){
            arrDop.push(' ' + checkedOption[i].nextSibling.innerText)
          }
        }
        addGoodsInForm(titleGood, arrDop, rangeDay, rangeKolvo, squareTent);
      }
    } else {
      btnChoose.onclick = function () {
          let arrDop = [];
          for (let i = 0; i < checkedOption.length; i++) {
            if (checkedOption[i].checked) {
              arrDop.push(' ' + checkedOption[i].nextSibling.innerText)
            }
          }
          addGoodsInForm(titleGood, arrDop, rangeDay, rangeKolvo);
        }
      }
  }
  function addGoodsInForm(titleGood, arrDop, rangeDay, rangeKolvo, squareTent) {
    let template = document.querySelector('template').content.cloneNode(true);
    let imgSrc;
    if(squareTent){
      template.querySelector('.goods-zakaz__square-tent').style.display = 'block';
      template.querySelector('.goods-zakaz__square-tent span').innerHTML = squareTent.value;
    }
    switch(titleGood.innerText){
      case 'Шатёр Пагода 3 на 3':
        imgSrc = 'img/pagoda.jpg';
        break;
      case 'Шатёр Пагода 5 на 5':
        imgSrc = 'img/pagoda5.jpg';
        break;
      case 'Шатёр Пагода 64 кв.м':
        imgSrc = 'img/pagoda64.jpg';
        break;
      case 'Шатёр Сфера диаметром 6 метров':
        imgSrc = 'img/sfera6.jpeg';
        break;
      case 'Шатёр Сфера диаметром 8 метров':
        imgSrc = 'img/sfera8.jpg';
        break;
      case 'Шатёр Сфера диаметром 10 метров':
        imgSrc = 'img/sfera10.jpg';
        break;
      case 'Шатёр Сфера диаметром 12 метров':
        imgSrc = 'img/sfera12.jpg';
        break;
      case 'Мобильный шатёр 4*4':
        imgSrc = 'img/mobilnie4.jpg';
        break;
      case 'мобильный шатёр 4*8':
        imgSrc = 'img/mobilniy8.jpg';
        break;
      case 'Арочный Шатёр 5x5':
        imgSrc = 'img/arc5.jpg';
        break;
      case 'Арочный Шатёр 6x6':
        imgSrc = 'img/arc6.jpg';
        break;
      case 'Арочный Шатёр 8x8':
        imgSrc = 'img/arc8.jpg';
        break;
      case 'Арочный Шатёр 8x8 Дюна':
        imgSrc = 'img/dyna8.jpg';
        break;
      case 'Арочный Шатёр 10x10':
        imgSrc = 'img/arc10.jpg';
        break;
      case 'Арочный Шатёр 10x10 Дюна':
        imgSrc = 'img/duna10.jpg';
        break;
      case 'Арочный Шатёр гексагональ 260 кв.м':
        imgSrc = 'img/geksogonal260.jpg';
        break;
      case 'Арочный модуль 50 кв.м ':
        imgSrc = 'img/modul50.jpg';
        break;
      case 'Шатёр Звезда D10':
        imgSrc = 'img/zvezda10.jpg';
        break;
      case 'Шатёр Звезда D12':
        imgSrc = 'img/zvezda12.jpg';
        break;
      case 'Шатёр Паук D11':
        imgSrc = 'img/pauk11.jpg';
        break;
      case 'Шатёр Паук D13':
        imgSrc = 'img/pauk13.jpg';
        break;
      case 'Шатёр Паук D17':
        imgSrc = 'img/pauk17.jpg';
        break;
      case 'Шатёр Паук D19':
        imgSrc = 'img/pauk19.jpg';
        break;
      case 'Шатёр Паук D21':
        imgSrc = 'img/pauk21.jpg';
        break;
      case 'Шатёр Паук D26':
        imgSrc = 'img/pauk26.jpg';
        break;
      case 'Тент шириной 6м':
        imgSrc = 'img/tent6.jpg';
        break;
      case 'Тент шириной 8м':
        imgSrc = 'img/tent8.jpg';
        break;
      case 'Тент шириной 10м':
        imgSrc = 'img/tent10.jpg';
        break;
      case 'Тент шириной 15м':
        imgSrc = 'img/tent15.jpg';
        break;
      case 'Тент шириной 20м':
        imgSrc = 'img/tent20.jpg';
        break;
      case 'Ярмарочный киоск 3x3':
        imgSrc = 'img/y-k.jpg';
        break;
      case 'Ярмарочный киоск 3x2':
        imgSrc = 'img/y-k.jpg';
        break;
      case 'Ярмарочный киоск 2x2':
        imgSrc = 'img/y-k.jpg';
        break;
      case 'Ярмарочный киоск 3x3':
        imgSrc = 'img/y-k.jpg';
        break;
      case 'Ярмарочный киоск 3x2':
        imgSrc = 'img/y-k.jpg';
        break;
      case 'Ярмарочный домик 3x3':
        imgSrc = 'yarm1.jpg';
        break;
      case 'Аренда пола брус ламинированная фанера':
        imgSrc = 'img/pol1.jpg';
        break;
      case 'Аренда ковролина с защитной плёнкой':
        imgSrc = 'img/pol2.jpg';
        break;
      case 'Аренда газонной травы':
        imgSrc = 'img/pol3.jpg';
        break;
      case 'Аренда ковролина':
        imgSrc = 'img/pol4.jpg';
        break;
      case 'Аренда выравнивающего пола':
        imgSrc = 'img/pol5.jpg';
        break;
      case 'Аренда сцен и порталов':
        imgSrc = 'img/scena-arenda.jpg';
        break;
      case 'Аренда Подиума':
        imgSrc = 'img/podium.jpg';
        break;
      case 'Стол коктейльный d 70 см':
        imgSrc = 'img/kokt-stol.jpg';
        break;
      case 'Стол прямоугольный 180х80':
        imgSrc = 'img/stol-pram.jpg';
        break;
      case 'Стол пластиковый круглый':
        imgSrc = 'img/stol-plastikoviy.jpg';
        break;
      case 'Пивной комплект':
        imgSrc = 'img/beer-komplect.jpg';
        break;
      case 'Стол деревянный пивной 180х60':
        imgSrc = 'img/beer-table.jpg';
        break;
      case 'Стол круглый D 180 см':
        imgSrc = 'img/stol-d-180.jpg';
        break;
      case 'Стол прямоугольный 120х60':
        imgSrc = 'img/stol-120x60.jpg';
        break;
      case 'Стол журнальный 45х45х50':
        imgSrc = 'img/stolik1.jpg';
        break;
      case 'Стол круглый d 90 см':
        imgSrc = 'img/stolD-90.jpg';
        break;
      case 'Стол круглый D 150 см':
        imgSrc = 'img/stol-d-150.jpg';
        break;
      case 'Аренда стандартного стула':
        imgSrc = 'img/stul-stndart.jpg';
        break;
      case 'Аренда складной скамьи':
        imgSrc = 'img/skamya.jpg';
        break;
      case 'Аренда пластикового стула':
        imgSrc = 'img/plastic-stul.png';
        break;
      case 'Аренда банкетного стула':
        imgSrc = 'img/banket-stul.jpg';
        break;
      case 'Стрейч наперон на коктейльный стол':
        imgSrc = 'img/stretch-koktelniyStol.jpg';
        break;
      case 'Стрейч чехол на коктейльный стол':
        imgSrc = 'img/stretch-koktelniy.jpg';
        break;
      case 'Бант на стул':
        imgSrc = 'img/bant-na-stul.jpg';
        break;
      case 'Стрейч чехол на стол прямоугольный':
        imgSrc = 'img/chehol-pryamougolnie.jpg';
        break;
      case 'Скатерть круглая d-270':
        imgSrc = 'img/skatert-d270.jpg';
        break;
      case 'Салфетка 45х45':
        imgSrc = 'img/salfetka45x45.jpg';
        break;
      case 'Шапочка на стул':
        imgSrc = 'img/shapochka-na-stul.jpg';
        break;
      case 'Стрейч чехол на круглый стол':
        imgSrc = 'img/stretch.jpg';
        break;
      case 'Фуршетная юбка 5м':
        imgSrc = 'img/furshtnaya-ubka.jpg';
        break;
      case 'Скатерть круглая d-300':
        imgSrc = 'img/skatert-krugkaya.jpg';
        break;
      case 'Чехол на стул универсальный':
        imgSrc = 'img/chehuniv2.jpg';
        break;
      case 'Скатерть прямоугольная 150х250см':
        imgSrc = 'img/skatpryam.jpg';
        break;
      case 'Чехол на стул':
        imgSrc = 'img/chehol1.jpg';
        break;
      case 'Скатерть квадратная 150х150':
        imgSrc = 'img/skatert-kvadrat.jpg';
        break;
      case 'Скатерть на коктейльный стол':
        imgSrc = 'img/cocktail-scatert.jpeg';
        break;
      case 'Стрейч чехол на стул':
        imgSrc = 'img/stretch-stul.jpg';
        break;
      case 'Аренда крёсел-мешков':
        imgSrc = 'img/kreslo-meshok.jpg';
        break;
      case 'Аренда кресла из кожзама':
        imgSrc = 'img/kreslo.jpg';
        break;
      case 'Аренда 2-x местного дивана':
        imgSrc = 'img/divan-2-mestniy.jpg';
        break;
      case 'Аренда 3-х местного дивана':
        imgSrc = 'img/arenda-divan.jpg';
        break;
      case 'Аренда Фан-барьеров':
        imgSrc = 'img/fan-barier.jpg';
        break;
      case 'Аренда оградительных столбиков с вытяжной лентой':
        imgSrc = 'img/ograditelnie-stolbiki-lenta.jpg';
        break;
      case 'Аренда оградительных столбиков':
        imgSrc = 'img/ograditelnie_stilbiki.jpg';
        break;
      case 'Аренда мобильных заборов':
        imgSrc = 'img/mobilnie-zabori.jpg';
        break;
      case 'Аренда офисных мобильных перегородок':
        imgSrc = 'img/arenda-mobilnih-peregorodok.jpg';
        break;
      case 'Кулер напольный':
        imgSrc = 'img/cooler-napolniy.jpg';
        break;
      case 'Аренда выездного гардероба':
        imgSrc = 'img/arenda-viezdnogo-garderoba.jpg';
        break;
      case 'Аренда зеркала':
        imgSrc = 'img/arenda-zerkala.jpg';
        break;

      case 'Аренда дизельной тепловой пушки':
        imgSrc = 'img/teplovaya-pushka.jpg';
        break;
      case 'Аренда инфракрасного обогревателя':
        imgSrc = 'img/arenda-dop.oborydovaniya.jpg';
        break;
      case 'Аренда мобильного кондиционера':
        imgSrc = 'img/arenda-mobilnogo-kondicionera.jpeg';
        break;
      case 'Аренда генератора':
        imgSrc = 'img/arenda-generatora.jpg';
        break;
      default:
        imgSrc = 'img/noimage.png';
    }
    template.querySelector('img').src = imgSrc;
    template.querySelector('h2').textContent = titleGood.innerText;
    template.querySelector('.goods-zakaz__arenda-day').textContent = rangeDay.value;
    template.querySelector('.goods-zakaz__dop').textContent = arrDop;
    template.querySelector('.goods-zakaz__kolvo').textContent = rangeKolvo.value;
    modalOver.style.display = 'none';
    goodDiv.style.display = 'none';
    formaZakaza.style.display = 'flex';
    formaZakaza.appendChild(template);
    window.removeEventListener('keydown', onSuccessEscPress);
    removeDublicate();
    let btnRemoveItem = document.querySelectorAll('.goods-zakaz__remove');
    for (let i = 0; i < btnRemoveItem.length; i++) {
      btnRemoveItem[i].onclick = function removeItem() {
        this.parentNode.remove()
      }
    }
  }
  function removeDublicate(){
    let tovar = document.querySelectorAll('.goods-zakaz');
    let arrGoods = [];
    for (let i = 0; i < tovar.length; i++){
      let titleTovar = tovar[i].querySelector('.goods-zakaz__title');
       arrGoods.push(titleTovar);

      if (arrGoods.length >= 2) {
        for (let k = 0; k < arrGoods.length; k++) {
          for (let j = k + 1; j < arrGoods.length; j++){
          if (arrGoods[k].textContent == arrGoods[j].textContent) {
            arrGoods[k].parentNode.querySelector('.goods-zakaz__arenda-day').textContent = (arrGoods[j].parentNode.querySelector('.goods-zakaz__arenda-day').textContent * 1) + (arrGoods[k].parentNode.querySelector('.goods-zakaz__arenda-day').textContent * 1);
            arrGoods[k].parentNode.querySelector('.goods-zakaz__kolvo').textContent = (arrGoods[j].parentNode.querySelector('.goods-zakaz__kolvo').textContent * 1) + (arrGoods[k].parentNode.querySelector('.goods-zakaz__kolvo').textContent * 1);
            tovar[k].querySelector('.goods-zakaz__dop').textContent = tovar[tovar.length-1].querySelector('.goods-zakaz__dop').textContent
            tovar[tovar.length-1].remove()
          }
          }
        }
      }

    }
  }
})();

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const plus = $$(".plus");
const itemDes = $$(".item-des");

const desHeader = $$(".des-header");

const desItem = $$(".des-item");

itemDes[0].onclick = function () {
  plus[0].classList.toggle("open");
};
itemDes[1].onclick = function () {
  plus[1].classList.toggle("open");
};
itemDes[2].onclick = function () {
  plus[2].classList.toggle("open");
};





desHeader[0].onclick = function () {
  desItem[0].classList.toggle("open");
};

desHeader[1].onclick = function () {
    desItem[1].classList.toggle("open");
  };
  desHeader[2].onclick = function () {
    desItem[2].classList.toggle("open");
  };
  desHeader[3].onclick = function () {
    desItem[3].classList.toggle("open");
  };
  desHeader[4].onclick = function () {
    desItem[4].classList.toggle("open");
  };

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const sliderBox = document.querySelector('.slider-Box1')
const BtnPrev = document.querySelector('.prev')
      BtnNext = document.querySelector('.next')

const imgBox = ['./img/iphone.jpg', './img/iphone1.jpg'];
let indexCurrent = 0;

function sliderFirst(index){
    if(index < 0){
        indexCurrent = imgBox.length - 1
    }else if(index >= imgBox.length){
        indexCurrent = 0
    }
    sliderBox.src = imgBox[indexCurrent]
}
function PrevSlide(){
    indexCurrent--;
    sliderFirst(indexCurrent)
    console.log('1');
}
function NextSlide(){
    indexCurrent++;
    sliderFirst(indexCurrent)
    console.log('2');
}
BtnPrev.addEventListener('click', PrevSlide)
BtnNext.addEventListener('click', NextSlide)
sliderFirst(indexCurrent)

const d = document.querySelector('.ad')
const f = document.querySelector('.f')
const gg = document.querySelector('.gg')
const ah = document.querySelector('.ah'),
    body = document.querySelector("body"),
    vvv = document.querySelector('.vvv'),
    dis = document.querySelector("container_box"),
    btn1 = document.querySelector(".btn1"),
    form = document.querySelector('.form')
    top = document.querySelector('.top')
    header = document.querySelector('header')
    x_btn1 = document.querySelector('.form img')

d.addEventListener("click",() => {
    f.style.display = "none"
    gg.style.display = "block"
    form.style.display = 'none'
    container.style.display = 'block'
    divcha.style.display = 'none'
    divcha1.style.display = 'none'
    container.style.display = 'block'
    vvv.style.background = 'linear-gradient(180deg, #393939 0%, #2E2E2E 100%)'
    header.style.borderRadius  = '20px'
})
ah.addEventListener("click",() => {
    f.style.display = "block"
    gg.style.display = "none"
    form.style.display = 'none'
    header.style.background = "none"
    divcha.style.display = 'none'
    divcha1.style.display = 'none'
    container.style.display = 'block'
    body.style.background = "linear-gradient(180deg, #393939 0%, #2E2E2E 100%)"
})
btn1.addEventListener("click", () => {
    f.style.display = "none"
    form.style.display = 'block'
    gg.style.display = "none"
    header.style.background = "none"
    divcha.style.display = 'none'
    divcha1.style.display = 'none'
    body.style.background = "linear-gradient(180deg, #393939 0%, #2E2E2E 100%)"
})
x_btn1.addEventListener('click', () => {
    f.style.display = "block"
    form.style.display = 'none'
    gg.style.display = "none"
    header.style.background = "block"
    container.style.display = 'block'
    divcha1.style.display = 'none'
    body.style.background = "linear-gradient(180deg, #393939 0%, #2E2E2E 100%)"
})
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = 'rgba(87, 43, 190, 0.3)';
navbar.style.boxShadow = '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )';
navbar.style.backdropFilter = 'blur( 8px )';
    } else {
      navbar.style.background = 'none';
    }
  });

const btn_test = document.querySelector('.aasd')
      input1 = document.querySelector('.form .change article input')
      div = document.querySelector('.check')
      form1 = document.querySelector('.form .change')
      div1 = document.querySelector('.check1')
      input10 = document.querySelector('.change .input10')
btn_test.addEventListener('click', () => {
    if(input1.value.length < 7 && input10.value.length < 100){
        div1.style.display = 'block'
        form1.style.display = 'none' 
    }
    else{
        div.style.display = 'block'
        form1.style.display = 'none' 
    }
})


const sliderBox1 = document.querySelector('.slider-Box11')
const BtnPrev1 = document.querySelector('.prev1')
      BtnNext1 = document.querySelector('.next1')

const imgBox1 = ['./img/img111.png', './img/immg.png'];
let indexCurrent1 = 0;

function sliderFirst1(index1){
    if(index1 < 0){
        indexCurrent1 = imgBox1.length - 1
    }else if(index1 >= imgBox1.length){
        indexCurrent1 = 0
    }
    sliderBox1.src = imgBox1[indexCurrent1]
}
function PrevSlide1(){
    indexCurrent1--;
    sliderFirst1(indexCurrent1)
    console.log('1');
}
function NextSlide1(){
    indexCurrent1++;
    sliderFirst1(indexCurrent1)
    console.log('2');
}
BtnPrev1.addEventListener('click', PrevSlide1)
BtnNext1.addEventListener('click', NextSlide1)
sliderFirst1(indexCurrent1)


const li = document.querySelector('.li1')
      divcha = document.querySelector('.divcha')
      container = document.querySelector('.container')

li.addEventListener('click', () => {
    divcha.style.display = 'block'
    container.style.display = 'none'
    divcha1.style.display = 'none'
    form.style.display = 'none'
})


const shopBoxBtn = document.querySelector(".shop-Box"),
  closeBoxBtn = document.querySelector(".close"),
  ModalCart = document.querySelector(".ModalCart"),
  ListcartHTML = document.querySelector(".Listcart"),
  iconCartSpan = document.querySelector(".quant"),
  removed = document.querySelector(".removed"),
  listProductHTML = document.querySelector(".ProductList");

let listProduct = [];
let carts = [];

shopBoxBtn.addEventListener("click", () => {
  ModalCart.classList.toggle("show");
});

closeBoxBtn.addEventListener("click", () => {
  ModalCart.classList.toggle("show");
});

const addDatatoHTML = () => {
  listProductHTML.innerHTML = "";
  if (listProduct.length > 0) {
    listProduct.forEach((product) => {
      let newProduct = document.createElement("div"); //yangi div yaratiladi ya'ni karobkasi
      newProduct.classList.add("item"); // yangi item qushilishi
      newProduct.dataset.id = product.id; //bosilgandagi elementni id sini olish
      newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">${product.price}</div>
            <button class="addBtn">Add to Cart</button>
            `; // apidan barcha ma'lumotlarni olib HTMLga chiqarish
      listProductHTML.append(newProduct); //va chiqarilgan har bir item oxiridan qushiladi append() orqali
    });
  }
};

//funksiyaning maqsadi click bulgan itemni id sini olib beradi
listProductHTML.addEventListener("click", (e) => {
  let positionClick = e.target;
  if (positionClick.classList.contains("addBtn")) {
    let product_id = positionClick.parentElement.dataset.id;
    addToCart(product_id);
  }
});

const addToCart = (product_id) => {
  let positionThisProductCart = carts.findIndex(
    (value) => value.product_id == product_id
  );
  if (carts.length <= 0) {
    carts = [
      {
        product_id: product_id,
        quantity: 1,
      },
    ];
  } else if (positionThisProductCart < 0) {
    carts.push({
      product_id: product_id,
      quantity: 1,
    });
  } else {
    carts[positionThisProductCart].quantity =
      carts[positionThisProductCart].quantity + 1;
  }
  addToCartHTML();
};
const addToCartHTML = () => {
  let totalQuantity = 0;
  ListcartHTML.innerHTML = "";
  if (carts.length > 0) {
    carts.forEach((cart, index) => {
      // indexni qo'shdingiz
      totalQuantity = totalQuantity + cart.quantity;
      let newCart = document.createElement("div");
      newCart.classList.add("item");
      let positionProduct = listProduct.findIndex(
        (val) => val.id == cart.product_id
      );
      let info = listProduct[positionProduct];
      newCart.innerHTML = `
            <div class="img">
                <img src="${info.image}" alt="">
            </div>
            <div class="name">${info.name}</div>
            <div class="total-price">${info.price * cart.quantity}</div>
            <span>${cart.quantity}</span>
            <button class="removed" onclick="removeItem(${index})">Remove</button> <!-- onClick qismini qo'shdingiz -->
            `;
      ListcartHTML.append(newCart);
    });
  }
  iconCartSpan.innerText = totalQuantity;
};

// Mahsulotni o'chirish funktsiyasi
const removeItem = (index) => {
  carts.splice(index, 1); // carts dan mahsulotni o'chiramiz
  addToCartHTML(); // Qayta yuklash
};

const initData = () => {
  fetch("api.json")
    .then((res) => res.json())
    .then((data) => {
      listProduct = data;
      addDatatoHTML();
    });
};

initData();

const button = document.querySelector('.divcha .zakas button'),
      divcha1 = document.querySelector('.divcha1')
button.addEventListener('click', () => {
  divcha1.style.display = 'block'
  divcha.style.display = 'none'
})  

const burger = document.querySelector('.burger'),
      nav = document.querySelector('.bbb')
burger.addEventListener("click", () => {
  nav.classList.toggle('bbb')
})

const btnl = document.querySelector(".btnl")
const li1d = document.querySelector('.li1d')
const dd = document.querySelector('.add')

btnl.addEventListener("click", () => {
  f.style.display = "none"
  form.style.display = 'block'
  gg.style.display = "none"
  header.style.background = "none"
  divcha.style.display = 'none'
  divcha1.style.display = 'none'
  body.style.background = "linear-gradient(180deg, #393939 0%, #2E2E2E 100%)"
})
li1d.addEventListener('click', () => {
  divcha.style.display = 'block'
  container.style.display = 'none'
  divcha1.style.display = 'none'
  form.style.display = 'none'
})
dd.addEventListener("click",() => {
  f.style.display = "none"
  gg.style.display = "block"
  form.style.display = 'none'
  container.style.display = 'block'
  divcha.style.display = 'none'
  divcha1.style.display = 'none'
  container.style.display = 'block'
  vvv.style.background = 'linear-gradient(180deg, #393939 0%, #2E2E2E 100%)'
  header.style.borderRadius  = '20px'
})
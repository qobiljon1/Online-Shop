let card = [];
let deleteItems = 0;
$(document).ready(function () {

    Array.isArray(products) ? products.map((value, index) => {

        $(".product").append(
            `
            <div class="col-auto">
                <div class="card" style="width: 18rem;">
                    <img src="${value.image}"
                        class="card-img-top" alt="jpg">
                    <div class="card-body">
                        <h5 class="card-title">${value.type}</h5>
                        <p>${value.name}</p>
                        <h6>${value.price}$</h6>
                        <button href="#" class="btn btn-success" onclick = AddShop(${index})>Add to Card</button>
                    </div>
                </div>
            </div>
          `
        )

    }) : " ";

})

const AddShop = (id) => {

    let bool = true
    card.map((item, key) => {
        if (item[0].sku == products[id].sku)
            bool = false
    })

    if (bool) {
        card.push([products[id], 1])
    }

    $('sup').html(card.length - deleteItems)

    addItem()
}

const addItem = () => {
    $(" .addCard .col-lg-9").html("")
    Array.isArray(card) ? card.map((value, key )=> {
        $(" .addCard .col-lg-9").append(
            `
                 <div class="card-item">
                <div class="row">
                    <div class="col-6 info">
                        <div class="img">
                            <img src="${value[0].image}"
                                alt="">
                                </div>
                            <div class="info_name">
                                <span>HardGood</span>
                                <a href="#!">${value[0].description}</a>
                            </div>
                        </div>
                            <div class="col-6 math">
                               <div class="btn_input">
                                <button type="button" onclick = 'increaseItem(${key})'>
                                    <i class="fa fa-plus" ></i>
                                </button>
                                <input type="text" value="${value[1]}" class="control" readonly>
                                    <button onclick = 'removeItem(${key})'>
                                        <i class="fa fa-minus" ></i>
                                    </button>
                               </div>
                                <span class="price">${value[0].price}$</span>
                                <button class="delete" onclick ='deleteItem(${key})'>
                                    <i class="fa fa-times"></i>
                                </button>
                            </div>
                        </div>

                    </div>
           `
        )
    }) : ""
    price()
}

const price = () => {
     let price = 0;
    card.map((value) => {
        price += value[0].price * value[1]
    })
    price = price.toFixed(3)
    $(".result_price").html(price + "$" )
}
const showCard = () => {
    $('.addCard').show(1000)
    $('.card_list').hide()
}
const hideCard = () => {
    $('.addCard').hide(1000)
    $('.card_list').show()
}
const increaseItem = (id) => {
    card[id][1] += 1
    addItem()
}
const removeItem = (id) => {
    card[id][1] > 1 ? card[id][1] -= 1 : " "
    addItem()
}
const deleteItem = (id) => {
    delete card[id];
    deleteItems++
    $('sup').html(card.length - deleteItems)
    addItem()
}
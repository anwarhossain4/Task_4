// Calculate Total
function total_cost() {
    const num = 1299 + parseInt(document.getElementById('case_total').innerText) + parseInt(document.getElementById('extra_storage').innerText) + parseInt(document.getElementById('charge').innerText);
    document.getElementById('total').innerText = num;
    document.getElementById('out_total').innerText = num;
}
//For 8GB memory
document.getElementById('add').addEventListener('click', function () {
    const total = document.getElementById('case_total');
    total.innerText = 180;
    total_cost();


});
//For 16GB memory
document.getElementById('no_add').addEventListener('click', function () {
    const total = document.getElementById('case_total');
    total.innerText = 0;
    total_cost();




})
//256GB SSD Storage
document.getElementById('add_no_storage').addEventListener('click', function () {
    const total = document.getElementById('extra_storage');
    total.innerText = 0;
    total_cost();




})
//512GB SSD Storage
document.getElementById('add_storage').addEventListener('click', function () {
    const total = document.getElementById('extra_storage');
    total.innerText = 100;
    total_cost();




})
//512GB SSD Storage
document.getElementById('add_more_storage').addEventListener('click', function () {
    const total = document.getElementById('extra_storage');
    total.innerText = 180;
    total_cost();




})
//No extra cost delivery charge
document.getElementById('no_cost').addEventListener('click', function () {
    const total = document.getElementById('charge');
    total.innerText = 0;
    total_cost();




})
//Extra cost delivery charge
document.getElementById('add_cost').addEventListener('click', function () {
    const total = document.getElementById('charge');
    total.innerText = 20;
    total_cost(); //call total_cost funcation

})

//Appy Cupon  code
document.getElementById('apply').addEventListener('keyup', function (event) {
    const applybtn = document.getElementById('apply-btn');
    if (event.target.value == 'stevekaku') {
        applybtn.removeAttribute('disabled');
        const call_id = parseInt(document.getElementById('total').innerText);
        const discount = (call_id * 20) / 100;
        const offer = call_id - discount;
        document.getElementById('total').innerText = offer;
        document.getElementById('out_total').innerText = offer;

    }
    else {
        applybtn.setAttribute('disabled', true)
    }

});

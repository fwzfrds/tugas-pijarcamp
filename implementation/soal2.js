/*
Demy membeli makanan menggunakan aplikasi PijarFood. Dimana terdapat 2 buah kode promo: 
- Promo ‘PIJARFOOD5’ dengan ketentuan pemesanan minimal 50rb akan mendapat diskon 50%, dengan maksimal potongan sebesar 50rb.
- Promo ‘DITRAKTIRPIJAR’ dengan ketentuan pemesanan minimal 25rb akan mendapatkan diskon 60%, dengan maksimal potongan sebesar 30rb.
  Jika tidak menggunakan kode promo tidak mendapatkan potongan (false)

Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb, dan setiap satu kilometer selanjutnya dikenakan penambahan 3rb. 
Untuk beberapa restoran dikenakan pajak yakni 5% dari harga makanan yang dipesan (true), jika tidak dikenakan pajak (false).

*/

const checkout = (price, promo, distance, tax) => {

    let discount, shippingCost, totalTax, subTotal;

    if (promo === 'PIJARFOOD5' && price >= 50000) {
        discount = price * 0.5
        if (discount > 50000) discount = 50000
    }
    else if (promo === 'DITRAKTIRPIJAR' && price >= 25000) {
        discount = price * 0.6
        if (discount > 30000) discount = 30000
    }
    else {
        discount = 0
    }

    shippingCost = distance > 2 ? ((Math.floor(distance) - 2) * 3000) + 5000 : 5000

    totalTax = tax ? price * 0.05 : 0

    subTotal = (price - discount) + shippingCost + totalTax

    console.log(`
        Price         : ${price}
        Discount      : ${discount}
        Shipping Cost : ${shippingCost}
        Total Tax     : ${totalTax}
        ---------------------------------
        Sub Total     : ${subTotal}
    `);
}

// checkout(75000, 'PIJARFOOD5', 5, true)
// checkout(49000, 'PIJARFOOD5', 5, true)
// checkout(35000, 'DITRAKTIRPIJAR', 3, true)
checkout(75000, false, 3.3, false)
// checkout(75000, false, 10, true)

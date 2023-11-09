 
    let imgBox = document.getElementById("imgBox")
    let qrImg = document.getElementById("qrImg")
    let qrText = document.getElementById("qrText")

function generateQR(){

    
    
    qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img")



}


// const arrNumbers = [1, 2, 3, 2, 4, 5, 4, 8, 9]
// const duplicates = arrNumbers.filter((ele, index, arr) => 
//    arr.indexOf(ele) != index
// )

// console.log(duplicates)
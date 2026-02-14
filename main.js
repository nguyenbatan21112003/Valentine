// Thay đổi nội dung búc thư ở đây
var letterContent = "Valentine này anh chỉ muốn nói rằng gặp được em là điều may mắn nhất trong cuộc đời anh. Cảm ơn em vì đã luôn ở bên, lắng nghe và yêu thương anh. Dù tương lai có thế nào, anh vẫn mong người đi cạnh anh sẽ luôn là em. Anh yêu em rất nhiều🩵❤️💚"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    var heartImg = document.querySelector(".heart-img");

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
        setTimeout(() => {
            heartImg.classList.add("active")
        }, 500 + letterContent.length * durationWrite)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
            heartImg.classList.remove("active")
        }, 1000)
    }
})
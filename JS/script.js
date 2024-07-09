// 定义当前显示的图像索引，初始值为0
let currentIndex = 0;

// 显示指定索引的图像
function showSlide(index) {
    // 获取所有的图像元素
    const slides = document.querySelectorAll('.carousel-images img');
    
    // 如果索引超出图像数量，则循环回到第一张
    if (index >= slides.length) {
        currentIndex = 0;
    } 
    // 如果索引小于0，则循环到最后一张
    else if (index < 0) {
        currentIndex = slides.length - 1;
    } 
    // 否则，更新当前索引
    else {
        currentIndex = index;
    }

    // 获取轮播容器的宽度
    const carouselWidth = document.querySelector('.carousel').offsetWidth;
    // 设置图像容器的transform属性，进行水平平移
    document.querySelector('.carousel-images').style.transform = `translateX(${-currentIndex * carouselWidth}px)`;
}

// 显示下一张图像
function nextSlide() {
    showSlide(currentIndex + 1);
}

// 显示上一张图像
function prevSlide() {
    showSlide(currentIndex - 1);
}

// 初始化轮播，显示第一张图像
showSlide(currentIndex);

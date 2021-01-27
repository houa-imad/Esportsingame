class Carousel {
    constructor(img, time) {
        this.img = img;
        this.time = time;
        this.contentImg = document.querySelector("#imgsld")

        this.i = 0;
        this.play();

        document.querySelector("#imgsld").src = this.img[this.i]
    }

    play() {
        // if (this.autoTime) {
        //     clearInterval(this.autoTime);
        //     this.autoTime = null;
        // } else {
        clearInterval(this.autoTime)
        this.autoTime = setInterval(() => {
            this.imgPlus();
        }, this.time);
        // }
    }

    imgPlus() {
        if (this.i < this.img.length - 1) {
            this.i++;
        } else {
            this.i = 0;
        }
        this.play();
        document.querySelector("#imgsld").src = this.img[this.i];
    }
}

let slideShow = new Carousel(
    ["images/spController.jpg", "images/dreamcastController.jpg", "images/playController.jpg", "images/xbox360.jpg", "images/logMouse.jpg"], 5000
);
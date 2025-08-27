this.nav = document.querySelector("nav");
this.lastScroll = 0;

window.addEventListener("scroll", () => {
    let current = window.scrollY;

    if (current > lastScroll) {
        nav.classList.add("translate-y-[-100%]");
    }
    else {
        nav.classList.remove("translate-y-[-100%]");
    }

    lastScroll = current;
});

const HeadBanner = function () {

    this.Head_banner = document.querySelector(".Head_Banner");
    this.Head_banner_List = document.querySelector(".Head_Banner .Head_Banner_List");
    this.Head_arrow_btn = Array.from(
        document.querySelectorAll(".arrow_left, .arrow_right")
    );

    this.HeadBanner_swipeTime;

    this.startX;
    this.Isdragging = false;
    this.Issliding = false;

    this.Head_arrow_btn.forEach(btn => {
        btn.addEventListener("click", () => {

            const isLeft = btn.classList.contains("arrow_left");

            if (isLeft) {
                this.swipeBanner("left");
            }
            else {
                this.swipeBanner("right");
            }
        })
    })

    this.Head_banner.addEventListener("touchstart", (e) => this.dragStart(e), { passive: false });
    this.Head_banner.addEventListener("touchmove", (e) => this.drag(e), { passive: false });
    this.Head_banner.addEventListener("touchend", (e) => this.dragEnd(e));
}

HeadBanner.prototype = {
    constructor: HeadBanner,

    swipeBanner: function (left) {
        this.reset_autoSwipe();
        this.items = document.querySelectorAll(".Head_Banner .Head_Banner_List .Head_side_Banner");

        if (left === "left") {
            this.Head_banner.classList.add("Prev");

            setTimeout(() => {
                this.Head_banner_List.prepend(this.items[this.items.length - 1]);
                this.Head_banner.classList.remove("Prev");
            }, 1000);
        }
        else {
            this.Head_banner.classList.add("Next");

            setTimeout(() => {
                this.Head_banner_List.append(this.items[0]);
                this.Head_banner.classList.remove("Next");
            }, 1000);
        }
    },

    dragStart: function (e) {
        this.startX = e.touches[0].pageX;
        if (!this.Issliding) {
            this.Isdragging = true;
        }
    },

    drag: function (e) {
        if (!this.Isdragging) return;
        e.preventDefault();

        const currentPageX = e.touches ? e.touches[0].pageX : this.startX;
        const diffX = currentPageX - this.startX;

        if (Math.abs(diffX) > 5) {
            if (diffX > 0) {
                this.swipeBanner("left");
            }
            else {
                this.swipeBanner("right");
            }
            this.Isdragging = false;
            this.Issliding = true;
        }

        setTimeout(() => {
            this.Issliding = false;
        }, 1000);
    },

    dragEnd: function (e) {
        if (!this.Isdragging) return;
        this.Isdragging = false;
    },

    autoSwipe: function () {
        this.HeadBanner_swipeTime = setInterval(() => {
            this.swipeBanner("right");
        }, 5000);
    },

    reset_autoSwipe: function () {

        clearInterval(this.HeadBanner_swipeTime);
        this.autoSwipe();
    }
}

const HeadBanner_Object = new HeadBanner();
HeadBanner_Object.autoSwipe();

// Kla_Banner

const bannerData = {
    // Access the banners with bannerData's property name
    // Access the slides by slide's number.

    shirt: {
        iconURL: "",
        slides: [
            {
                bgImage: "./src/assets/BannerAssets/BannerShirt1.png",
                modelImage: "./src/assets/BannerAssets/BannerShirtModel1.png",
                name: "The Maverick Bomber Jacket",
                detail: `เป็นแจ็คเก็ตหนังแท้ดีไซน์คลาสสิกที่ถูกปรับให้มีความเท่และโดดเด่นไม่เหมือนใคร
                            ตัวเสื้อทำจากหนังวัวคุณภาพสูงที่มีการทำฟอกสีแบบพิเศษ
                            ทำให้เกิดลวดลายและร่องรอยคล้ายผ่านการใช้งานจริง
                            ซึ่งช่วยเสริมบุคลิกที่ดูเข้มแข็งและมีเรื่องราว`,
                detailURL: "",
                buyURL: "",
            },
            {
                bgImage: "./src/assets/BannerAssets/BannerShirt2.png",
                modelImage: "./src/assets/BannerAssets/BannerShirtModel2.png",
                name: "Coastal Breeze",
                detail:
                    "เสื้อเชิ้ตสีฟ้าอ่อนที่มอบความรู้สึกสดชื่นและผ่อนคลายเหมือนลมทะเล ยกระดับลุคของคุณให้ดูดีมีสไตล์แต่ยังคงความสบาย ไม่ว่าจะสวมใส่ในวันทำงานหรือวันพักผ่อน ก็ดูดีได้อย่างไม่ซับซ้อน",
                detailURL: "https://rickrollwebsite.univer.se/secret",
                buyURL: "",
            },
            {
                bgImage: "./src/assets/BannerAssets/BannerShirt3.png",
                modelImage: "./src/assets/BannerAssets/BannerShirtModel3.png",
                name: "UnderNight Jacket",
                detail: `เสื้อแจ็คเก็ตหนังสีดำที่ออกแบบมาเพื่อความเท่เหนือกาลเวลา ด้วยดีไซน์ที่เรียบง่ายแต่แฝงไว้ด้วยความประณีต ตัวเสื้อทำจากหนังแท้คุณภาพสูง มอบสัมผัสที่นุ่มสบายและทนทาน
        โดดเด่นภายใต้แสงไฟ ณ ยามราตรี`,
                detailURL: "",
                buyURL: "",
            },
        ],
    },

    shoes: {
        iconURL: "",
        slides: [
            {
                bgImage: "./src/assets/BannerAssets/BannerShoes1.png",
                modelImage: "./src/assets/BannerAssets/BannerShoesModel1.png",
                name: "CONVERSE ADDICT 2024",
                detail:
                    "ตำนานสตรีทสไตล์ที่กลับมาในเวอร์ชันพรีเมียม พร้อมดีไซน์ที่ผสานความคลาสสิกกับความทันสมัยอย่างลงตัว! พร้อมพาคุณทะยานสู่ทุกการเดินทาง ด้วยสไตล์ที่ไม่เคยหยุดนิ่งและความสบายที่คุณวางใจได้ — รองเท้าคู่ใหม่ที่ทุกคนต้องมี!",
                detailURL: "",
                buyURL: "",
            },

            {
                bgImage: "./src/assets/BannerAssets/BannerShoes2.jpg",
                modelImage: "./src/assets/BannerAssets/BannerShoesModel2.png",
                name: "New Balance 327",
                detail:
                    "หยิบเอากลิ่นอายยุค 70 มาผสมกับดีไซน์โมเดิร์นได้อย่างลงตัว อัปเปอร์ผสมหนังกลับและไนลอนเบา สวมใส่สบายทุกย่างก้าว พร้อมพื้นลายดอกยางแบบ trail ที่ให้การยึดเกาะมั่นใจ — ไม่ว่าจะเดินเล่นในเมือง หรือลุยทริปเบา ๆ",
                detailURL: "",
                buyURL: "",
            },

            {
                bgImage: "./src/assets/BannerAssets/BannerShoes3.png",
                modelImage: "./src/assets/BannerAssets/BannerShoesModel3.png",
                name: "Adizero Evo SL",
                detail:
                    "รองเท้าวิ่งน้ำหนักเบาที่ออกแบบเพื่อความเร็วอย่างแท้จริง ผสานโฟม Lightstrike Pro เต็มความยาว ให้สัมผัสนุ่ม เด้ง และตอบสนองทุกจังหวะก้าวอย่างมีพลังพร้อม upper ที่โปร่งสบาย ระบายอากาศดีเยี่ยม ทะยานสู่เป้าหมายใหม่ ด้วยความเร็วที่ควบคุมได้ในทุกย่างก้าว",
                detailURL: "",
                buyURL: "",
            },
        ],
    },

    watch: {
        iconURL: "",
        slides: [
            {
                bgImage: "./src/assets/BannerAssets/BannerWatch1.png",
                modelImage: "./src/assets/BannerAssets/BannerWatchModel1.png",
                name: "The Maverick Bomber Jacket",
                detail: ` – ต้นกำเนิดแห่งความแกร่ง กลับมาอีกครั้งด้วยจิตวิญญาณของรุ่นแรกในแบบที่เข้มขึ้นกว่าเดิม

สืบทอดดีไซน์จาก DW-5000C รุ่นออริจินัลปี 1983 แต่อัปเกรดด้วยวัสดุสมัยใหม่และโครงสร้าง G-SHOCK แบบ Core Guard ที่ต้านทานแรงกระแทกได้เหนือระดับ หน้าจอดิจิทัลลายตารางในกรอบสี่เหลี่ยมอันเป็นเอกลักษณ์ ผสานสีดำด้านกับแถบสีแดงทองแบบเรโทร สะท้อนจิตวิญญาณของความ “ปฏิเสธความเปราะบาง” ที่ G-SHOCK ยึดมั่นมาตลอด`,
                detailURL: "",
                buyURL: "",
            },

            {
                bgImage: "./src/assets/BannerAssets/BannerWatch2.png",
                modelImage: "./src/assets/BannerAssets/BannerWatchModel2.png",
                name: "Seiko Astron SSH175",
                detail: `– ความแกร่งแนวใหม่ในร่างคอมแพกต์ เข้มทุกองศาในสไตล์ G-STEEL GST-B600 คือวิวัฒนาการล่าสุดจาก G-STEEL ที่ผสมผสานความแข็งแกร่งของโลหะเข้ากับความล้ำของเทคโนโลยีในขนาดที่กะทัดรัดกว่าเดิม โครงสร้าง Carbon Core Guard ช่วยให้ตัวเรือนบาง เบา แต่ยังทนทานในแบบที่ G-SHOCK ต้องเป็น
หน้าปัดแบบเลเยอร์ซ้อนด้วยลวดลายโลหะเฉียบคม พร้อม Bluetooth® Smart Link, Tough Solar และไฟ LED สว่างจัด ใช้งานง่ายในทุกสภาพแสง`,
                detailURL: "",
                buyURL: "",
            },

            {
                bgImage: "./src/assets/BannerAssets/BannerWatch3.png",
                modelImage: "./src/assets/BannerAssets/BannerWatchModel3.png",
                name: "EDIFICE WINDFLOW ECB-2200CB-2A",
                detail:
                    "– ความเร็วในทุกจังหวะ ดีไซน์แรงบันดาลใจจากมอเตอร์สปอร์ต \nโครงสร้างบางเบา วัสดุคุณภาพสูง พร้อม Smartphone Link, Tough Solar, จับเวลาแบบ Lap Timer และระบบบอกเวลาทั่วโลก — ไม่ว่าจะเป็นการเดินทาง ธุรกิจ หรือการใช้ชีวิตที่ไม่เคยหยุดนิ่ง WINDFLOW ก็พร้อมเคลื่อนที่ไปกับคุณทุกวินาที",
                detailURL: "",
                buyURL: "",
            },
        ],
    },
};

let bannerIndex = [0, 0, 0]; // เริ่มต้นที่ index 0
window.onload = () => {
    let bannerObj = Object.keys(bannerData);
    bannerObj.forEach((value) => {
        showBanner(0, value);
    });
};

function showBanner(nSlide, banner) {
    const bannerSlides = bannerData[banner].slides;
    const objKeys = Object.keys(bannerData);
    const index = objKeys.indexOf(banner);

    // ตรวจสอบขอบเขตของ nSlide ให้วนกลับ
    if (nSlide > bannerSlides.length - 1) {
        nSlide = 0; // กลับไปสไลด์แรก
    }
    if (nSlide < 0) {
        nSlide = bannerSlides.length - 1; // สไลด์สุดท้าย
    }

    const slideData = bannerSlides[nSlide]; // เข้าถึงสไลด์ถูกต้อง

    // บันทึกตำแหน่ง Slide ปัจจุบัน
    bannerIndex[index] = nSlide;

    // update DOM แบบ dynamic ตาม banner
    const bannerSelector = `.banner.${banner}`;

    // รูป background
    const bgImage = document.querySelector(`${bannerSelector} .banner-slide img`);
    if (bgImage) {
        bgImage.src = slideData.bgImage;

        bgImage.classList.remove("slideTo-Left"); // รีเซตก่อน
        void bgImage.offsetWidth; // trigger reflow เพื่อให้ animation เล่นใหม่
        bgImage.classList.add("slideTo-Left");
    }
    //ลิงก์ icon
    const iconLink = document.querySelector(`${bannerSelector} .banner-icon`);
    if (iconLink) {
        iconLink.onclick = () => {
            if (bannerData[banner].iconURL.trim() === "") {
                alert("There is no link now.");
                return;
            }
            window.open(slideData.iconURL, "_blank");
        };
    }

    // รูป model
    const modelImage = document.querySelector(`${bannerSelector} .model img`);
    if (modelImage) {
        //ดูว่ามี element นี้ไหม
        modelImage.src = slideData.modelImage;
        modelImage.classList.remove("slideTo-Left");
        void modelImage.offsetWidth;
        modelImage.classList.add("slideTo-Left");
    }

    // ลิงก์รูป model
    const modelLink = document.querySelector(`${bannerSelector} .model .image`);
    if (modelLink) {
        modelLink.onclick = () => {
            if (slideData.detailURL.trim() === "") {
                alert("There is no link now.");
                return;
            }
            window.open(slideData.detailURL, "_blank");
        };
    }

    // ชื่อสินค้า
    const prodName = document.querySelector(`${bannerSelector} .prodName`);
    if (prodName) {
        prodName.textContent = slideData.name;
        prodName.classList.remove("fadeIn-item");
        void prodName.offsetWidth;
        prodName.classList.add("fadeIn-item");
    }

    // รายละเอียดสินค้า
    const prodDetail = document.querySelector(`${bannerSelector} .prodDetail`);
    if (prodDetail) {
        prodDetail.textContent = slideData.detail;
        prodDetail.classList.remove("fadeIn-item");
        void prodDetail.offsetWidth;
        prodDetail.classList.add("fadeIn-item");
    }

    // ปุ่ม "ดูรายละเอียด"
    const prodBtn = document.querySelector(`${bannerSelector} .prodBtn`);
    if (prodBtn) {
        prodBtn.onclick = () => {
            if (slideData.detailURL.trim() === "") {
                alert("There is no link now.");
                return;
            }
            window.open(slideData.detailURL, "_blank");
        };
    }

    // ปุ่ม "ซื้อสินค้า"
    const buyBtn = document.querySelector(`${bannerSelector} .buyBtn`);
    if (buyBtn) {
        buyBtn.onclick = () => {
            if (slideData.detailURL.trim() === "") {
                alert("There is no link now.");
                return;
            }
            window.location.href = slideData.buyURL;
        };
    }

    // update dots
    const dots = document.querySelectorAll(`${bannerSelector} .banner-dot`);
    dots.forEach((dot, idx) => {
        if (idx === nSlide) {
            dot.classList.add("dot-active");
        } else {
            dot.classList.remove("dot-active");
        }
    });
}

function plusBanner(n, banner) {
    const objKeys = Object.keys(bannerData);
    const index = objKeys.indexOf(banner);
    showBanner(bannerIndex[index] + n, banner);
}

function getToBanner(slide, banner) {
    showBanner(slide, banner);
}

// Category

// เพิ่ม DOM ของ dot,button,page

document.addEventListener('DOMContentLoaded', () => {
    const catLeft = document.getElementById('catLeft');
    const catRight = document.getElementById('catRight');
    const catPage1 = document.getElementById('catPage1');
    const catPage2 = document.getElementById('catPage2');
    const dot1 = document.getElementById('dot1');
    const dot2 = document.getElementById('dot2');

    // ตั้ง currPage เริ่มที่ Page 1

    let currentPage = 1;

    // ตั้งค่าเวลากดปุ่มเมื่อเปลี่ยนหน้า

    const showPage = (pageNumber) => {
        // ลบคลาสแอนิเมชันก่อนเพื่อรีเซ็ต
        catPage1.classList.remove('fade-in-element1');
        catPage2.classList.remove('fade-in-element1');
        catPage1.classList.remove('fade-in-element2');
        catPage2.classList.remove('fade-in-element2');
        catPage1.classList.remove('fade-out-element1');
        catPage2.classList.remove('fade-out-element1');
        catPage1.classList.remove('fade-out-element2');
        catPage2.classList.remove('fade-out-element2');
        catPage2.classList.remove('translate-x-[100%]');

        // ตั้งค่าเวลากดปุ่มเมื่อเปลี่ยนหน้า
        // หากเป็นหน้าแรกจะ
        // remove - hidden Page 1 (เพื่อแสดง Page 1),active dot 2 (เพื่อปิดการ active)
        // และจะ add - hidden Page 2 (เพื่อซ่อน Page 2) active dot 1 (เพื่อบ่งบอกสถานะว่าอยู่ Page 1)

        // หากเป็นหน้าสองจะ
        // remove - hidden Page 2 (เพื่อแสดง Page 2),active dot 1 (เพื่อปิดการ active)
        // และจะ add - hidden Page 1 (เพื่อซ่อน Page 1) active dot 2 (เพื่อบ่งบอกสถานะว่าอยู่ Page 2)

        if (pageNumber === 1) {

            dot1.classList.add('active');
            dot2.classList.remove('active');

            // เพิ่มคลาสแอนิเมชันหลังจากการเปลี่ยนหน้า

            catPage1.classList.add('fade-in-element1');
            catPage2.classList.add('fade-in-element2');
        } else if (pageNumber === 2) {

            dot1.classList.remove('active');
            dot2.classList.add('active');

            // เพิ่มคลาสแอนิเมชันหลังจากการเปลี่ยนหน้า

            catPage2.classList.add('fade-out-element1');
            catPage1.classList.add('fade-out-element2');
        }
    };

    // เพิ่มการทำงานของปุ่มเมื่อกดแล้วจะเช็คการทำงานโดยที่
    // เนื่องจากมีสองหน้า

    // เมื่อคลิกขวาจะเช็คว่าอยู่หน้าแรกไหม ถ้าอยู่จะเปลี่ยนไปหน้า 2

    catRight.addEventListener('click', () => {
        if (currentPage === 1) {
            currentPage = 2;
            showPage(currentPage);
        }
    });

    // เมื่อคลิกซ้ายจะเช็คว่าอยู่หน้า 2 ไหม ถ้าอยู่จะกลับไปหน้าแรก

    catLeft.addEventListener('click', () => {
        if (currentPage === 2) {
            currentPage = 1;
            showPage(currentPage);
        }
    });

    // เพิ่มการทำงานของจุดสถานะให้กดได้เช่นกัน

    // เมื่อคลิกจุดแรกโดยตรงจะแสดงหน้าแรก

    dot1.addEventListener('click', () => {
        currentPage = 1;
        showPage(currentPage);
    });

    // เมื่อคลิกจุดสองโดยตรงจะแสดงหน้าสอง
    dot2.addEventListener('click', () => {
        currentPage = 2;
        showPage(currentPage);
    });
});





(function () {
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('dropdown__btn');
    if(btn) {
      btn.addEventListener('click', function(){
        this.classList.toggle('is-open');
      });
    }
  });
}());

// 要素の取得
const tabItem = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");

// tabItemに対してクリックイベントを追加
// クリックした時にtabToggle関数を発火
for (let i = 0; i < tabItem.length; i++) {
    tabItem[i].addEventListener("click", tabToggle);
}

function tabToggle() {
    // tabItemとtabContentの.activeを削除する
    for (let i = 0; i < tabItem.length; i++) {
        tabItem[i].classList.remove("is-active");
    }
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }

    // クリックしたtabItemに.activeを追加
    this.classList.add("is-active");

    // tabItemを配列にする
    // [<li class="tab-item active">About</li>, <li class="tab-item">Works</li>, <li class="tab-item">Contact</li>]
    const aryTabs = Array.prototype.slice.call(tabItem);

    // 配列に格納したキーワードと最初一致したインデックスを格納
    // <li class="tab-item active">About</li>の場合は「0」が返ってくる
    const index = aryTabs.indexOf(this);

    // インデックスに対応したtabContentに.activeを追加
    tabContent[index].classList.add("active");
}


document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});

// 文字起こしを表示
/*document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("courseVideo");
    var transcriptionElement = document.getElementById("transcription");

    video.addEventListener("timeupdate", function () {
        var currentTime = video.currentTime;

        // 時間に応じて表示するテキストを設定
        var textToShow = "";
        if (currentTime >= 0 && currentTime < 5) {
            textToShow = "text1";
        } else if (currentTime >= 5 && currentTime < 10) {
            textToShow = "text2";
        }

        // テキストを表示
        transcriptionElement.textContent = textToShow;
    });
});*/


// お気に入りボタンをクリックしたときの処理
const favoriteButtons = document.querySelectorAll('.favorite-button');

favoriteButtons.forEach(button => {
    let isFavorite = false; // 初期値はお気に入りではない

    button.addEventListener('click', () => {
        const icon = button.querySelector('.icon i');

        if (isFavorite) {
            icon.classList.remove('fas');
            icon.classList.add('far');
            button.classList.remove('is-favorite');
            isFavorite = false;
        } else {
            icon.classList.remove('far');
            icon.classList.add('fas');
            button.classList.add('is-favorite');
            isFavorite = true;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.dropdown'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});

// プロフィール画像の選択時に呼び出される関数
function handleProfileImageSelect(event) {
    const file = event.target.files[0]; // 選択されたファイルを取得
    if (file) {
        const reader = new FileReader();
        // ファイルの読み込みが完了したときの処理
        reader.onload = function () {
            const profileIcon = document.getElementById('profile-icon');
            profileIcon.src = reader.result; // 読み込んだアイコンを画像に表示
        };

        reader.readAsDataURL(file); // フィルのデータをDataURLとして読み込む
    }
}

// アコーディオンカーテン
const menu = document.querySelectorAll(".js-menu");

function toggle() {
    const content = this.nextElementSibling;
    this.classList.toggle("is-active");
    content.classList.toggle("is-open");
}

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
}

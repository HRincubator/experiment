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

// �v�f�̎擾
const tabItem = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");

// tabItem�ɑ΂��ăN���b�N�C�x���g��ǉ�
// �N���b�N��������tabToggle�֐��𔭉�
for (let i = 0; i < tabItem.length; i++) {
    tabItem[i].addEventListener("click", tabToggle);
};

function tabToggle() {
    // tabItem��tabContent��.active���폜����
    for (let i = 0; i < tabItem.length; i++) {
        tabItem[i].classList.remove("is-active");
    }
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }

    // �N���b�N����tabItem��.active��ǉ�
    this.classList.add("is-active");

    // tabItem��z��ɂ���
    // [<li class="tab-item active">1</li>, <li class="tab-item">2</li>, <li class="tab-item">3</li>...]
    const aryTabs = Array.prototype.slice.call(tabItem);

    // �z��Ɋi�[�����L�[���[�h�ƍŏ���v�����C���f�b�N�X���i�[
    // <li class="tab-item active">1</li>�̏ꍇ�́u0�v���Ԃ��Ă���
    const index = aryTabs.indexOf(this);

    // �C���f�b�N�X�ɑΉ�����tabContent��.active��ǉ�
    tabContent[index].classList.add("active");
};


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


// ���C�ɓ���{�^�����N���b�N�����Ƃ��̏���
const favoriteButtons = document.querySelectorAll('.favorite-button');

favoriteButtons.forEach(button => {
    let isFavorite = false; // �����l�͂��C�ɓ���ł͂Ȃ�

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

// �v���t�B�[���摜�̑I�����ɌĂяo�����֐�
function handleProfileImageSelect(event) {
    const file = event.target.files[0]; // �I�����ꂽ�t�@�C�����擾
    if (file) {
        const reader = new FileReader();
        // �t�@�C���̓ǂݍ��݂����������Ƃ��̏���
        reader.onload = function () {
            const profileIcon = document.getElementById('profile-icon');
            profileIcon.src = reader.result; // �ǂݍ��񂾃A�C�R�����摜�ɕ\��
        };

        reader.readAsDataURL(file); // �t�B���̃f�[�^��DataURL�Ƃ��ēǂݍ���
    }
};

// �A�R�[�f�B�I���J�[�e��
const menu = document.querySelectorAll(".js-menu");

function toggle() {
    const content = this.nextElementSibling;
    this.classList.toggle("is-active");
    content.classList.toggle("is-open");
};

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
};
// ���[�f�B���O�A�j���[�V����
const keyName = 'loadingviewed';
const keyValue = true;

if (!sessionStorage.getItem(keyName)) {
    sessionStorage.setItem(keyName, keyValue);
    // ����{����
    window.onload = function () {
        var popup = document.getElementById('firstTimeModal');
        if (!popup) return;
        popup.classList.add('is-show'); // ���[�_����is-show��class��t�^
    }
    const loadinglogo = document.getElementById("loadingLogo"); // 
    window.addEventListener('DOMContentLoaded', () => { //���[�h������C�x���g�J�n
        loadinglogo.className = "show";
        setTimeout(function () { loadinglogo.className = loadinglogo.className.replace("show", ""); }, 3500); // 3.5�b���\��
    });

} else {
    // 2��ڈȍ~�̏������e

};



// �V�K�o�^���
/* �o�^�{�^���̊������� */
const form = document.getElementById("form");
const button = document.getElementById("submit");
button.disabled = true;
button.classList.add('is-inactive');

form.addEventListener("input", update);
form.addEventListener("change", update);

function update() {
    const isRequired = form.checkValidity()

    if (isRequired) {
        button.disabled = false;
        button.classList.remove('is-inactive');
        button.classList.add('is-active');
        return
    } else {
        button.disabled = true;
        button.classList.remove('is-active');
        button.classList.add('is-inactive');
    }
};


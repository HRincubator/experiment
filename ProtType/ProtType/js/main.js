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
}

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
    // [<li class="tab-item active">About</li>, <li class="tab-item">Works</li>, <li class="tab-item">Contact</li>]
    const aryTabs = Array.prototype.slice.call(tabItem);

    // �z��Ɋi�[�����L�[���[�h�ƍŏ���v�����C���f�b�N�X���i�[
    // <li class="tab-item active">About</li>�̏ꍇ�́u0�v���Ԃ��Ă���
    const index = aryTabs.indexOf(this);

    // �C���f�b�N�X�ɑΉ�����tabContent��.active��ǉ�
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

// �����N������\��
/*document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("courseVideo");
    var transcriptionElement = document.getElementById("transcription");

    video.addEventListener("timeupdate", function () {
        var currentTime = video.currentTime;

        // ���Ԃɉ����ĕ\������e�L�X�g��ݒ�
        var textToShow = "";
        if (currentTime >= 0 && currentTime < 5) {
            textToShow = "text1";
        } else if (currentTime >= 5 && currentTime < 10) {
            textToShow = "text2";
        }

        // �e�L�X�g��\��
        transcriptionElement.textContent = textToShow;
    });
});*/


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

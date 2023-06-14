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
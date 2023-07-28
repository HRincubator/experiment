window.onload = function () {
    // ���[�J���X�g���[�W����^�C�}�[�̎c�莞�Ԃ��擾
    let timeRemainingStr = localStorage.getItem('timeRemaining');
    let timeRemaining = timeRemainingStr ? parseInt(timeRemainingStr) : 600;

    // �^�C�}�[�̍X�V�Ԋu�i�~���b�j
    const updateInterval = 1000;

    // �^�C�}�[�v�f���擾
    const timerElement = document.getElementById('timer');

    // �^�C�}�[��\������֐�
    function displayTimer() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // �^�C�}�[���J�n����֐�
    function startTimer() {
        displayTimer();
        if (timeRemaining > 0) {
            timeRemaining--;
            // �^�C�}�[�̎c�莞�Ԃ����[�J���X�g���[�W�ɕۑ��i������ɕϊ����ĕۑ��j
            localStorage.setItem('timeRemaining', timeRemaining.toString());
            setTimeout(startTimer, updateInterval);
        } else {
            alert('Time Up!');
            // �^�C�}�[���I�������烍�[�J���X�g���[�W����c�莞�Ԃ��폜
            localStorage.removeItem('timeRemaining');
        }
    }

    // �y�[�W���ǂݍ��܂ꂽ�Ƃ��Ƀ^�C�}�[���J�n
    startTimer();
};

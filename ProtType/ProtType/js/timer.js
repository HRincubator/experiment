window.onload = function () {
    // ローカルストレージからタイマーの残り時間を取得
    let timeRemainingStr = localStorage.getItem('timeRemaining');
    let timeRemaining = timeRemainingStr ? parseInt(timeRemainingStr) : 600;

    // タイマーの更新間隔（ミリ秒）
    const updateInterval = 1000;

    // タイマー要素を取得
    const timerElement = document.getElementById('timer');

    // タイマーを表示する関数
    function displayTimer() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // タイマーを開始する関数
    function startTimer() {
        displayTimer();
        if (timeRemaining > 0) {
            timeRemaining--;
            // タイマーの残り時間をローカルストレージに保存（文字列に変換して保存）
            localStorage.setItem('timeRemaining', timeRemaining.toString());
            setTimeout(startTimer, updateInterval);
        } else {
            alert('Time Up!');
            // タイマーが終了したらローカルストレージから残り時間を削除
            localStorage.removeItem('timeRemaining');
        }
    }

    // ページが読み込まれたときにタイマーを開始
    startTimer();
};

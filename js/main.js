// ジムデータの例
const gyms = [
    {
        id: 1,
        name: "フィットネスジムA",
        rating: 4.5,
        location: "東京都渋谷区",
        image: "images/gym-photos/gym-a.jpg",
        reviews: []
    },
    // 他のジムデータ
];

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    // ジム一覧の表示
    displayGyms();
    
    // レビューフォームの処理
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewSubmit);
    }
});

// ジム一覧を表示する関数
function displayGyms() {
    const gymGrid = document.querySelector('.gym-grid');
    if (!gymGrid) return;

    gymGrid.innerHTML = '';
    
    gyms.forEach(gym => {
        const gymCard = createGymCard(gym);
        gymGrid.appendChild(gymCard);
    });
}

// ジムカードを作成する関数
function createGymCard(gym) {
    const card = document.createElement('div');
    card.className = 'gym-card';
    
    card.innerHTML = `
        <img src="${gym.image}" alt="${gym.name}">
        <h3>${gym.name}</h3>
        <div class="rating">★★★★☆ ${gym.rating}</div>
        <p>${gym.location}</p>
    `;
    
    return card;
}

// レビュー送信の処理
function handleReviewSubmit(event) {
    event.preventDefault();
    
    // フォームデータの取得
    const formData = new FormData(event.target);
    const review = {
        gymId: formData.get('gym-id'),
        rating: formData.get('rating'),
        comment: formData.get('comment'),
        date: new Date().toISOString()
    };
    
    // レビューの保存（実際のアプリケーションではAPIを使用）
    console.log('レビューが送信されました:', review);
    
    // フォームのリセット
    event.target.reset();
    alert('レビューを送信しました！');
}

/* ==========================================================================
   京都北部 負動産有料引き取りサービスLP - インタラクションJS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. スクロール時のふわっとフェードイン表示 (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // 一度表示されたら監視を終了してパフォーマンス向上
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Intersection Observer非対応ブラウザの代替処理
        revealElements.forEach(el => el.classList.add('active'));
    }

    // 2. FAQ アコーディオン制御
    const faqItems = document.querySelectorAll('.faq-item, .faq-hybrid-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // 他の開いているアコーディオンを閉じる（アコーディオンスタイル）
            faqItems.forEach(i => i.classList.remove('active'));
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 3. 問い合わせフォーム バリデーション & デモ送信
    const form = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal');
    
    const inputs = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        tel: document.getElementById('tel'),
        location: document.getElementById('location'),
        propertyType: document.getElementById('property-type')
    };

    // リアルタイムバリデーションのためのイベント設定
    Object.keys(inputs).forEach(key => {
        const input = inputs[key];
        input.addEventListener('blur', () => validateInput(input));
        input.addEventListener('input', () => {
            // 入力中に入力エラーが解消された場合はエラー表示を解除
            const parent = input.closest('.form-group');
            if (parent.classList.contains('has-error')) {
                validateInput(input);
            }
        });
    });

    // 各入力フィールドの検証ロジック
    function validateInput(input) {
        const parent = input.closest('.form-group');
        let isValid = true;

        if (input.required) {
            if (!input.value.trim()) {
                isValid = false;
            } else if (input.type === 'email') {
                // メールアドレス簡易正規表現
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(input.value.trim());
            } else if (input.type === 'tel') {
                // 電話番号簡易チェック（数字、ハイフンなど）
                const telRegex = /^[0-9\-+()]{9,15}$/;
                isValid = telRegex.test(input.value.replace(/\s+/g, ''));
            }
        }

        if (isValid) {
            parent.classList.remove('has-error');
        } else {
            parent.classList.add('has-error');
        }

        return isValid;
    }

    // フォーム送信イベント
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isFormValid = true;

        // すべての項目をチェック
        Object.keys(inputs).forEach(key => {
            const input = inputs[key];
            if (!validateInput(input)) {
                isFormValid = false;
            }
        });

        // エラーがある場合は最初の要素にフォーカス
        if (!isFormValid) {
            const firstErrorInput = form.querySelector('.form-group.has-error input, .form-group.has-error select');
            if (firstErrorInput) {
                firstErrorInput.focus();
            }
            return;
        }

        // 送信デモ演出
        const submitBtn = form.querySelector('button[type="submit"]');
        const submitText = submitBtn.querySelector('.submit-text');
        const spinner = submitBtn.querySelector('.spinner');

        // ボタンを無効化し、ローディング表示
        submitBtn.disabled = true;
        submitText.style.display = 'none';
        spinner.style.display = 'flex';

        // 送信API通信を模した1.5秒の遅延
        setTimeout(() => {
            // ローディング表示をリセット
            submitBtn.disabled = false;
            submitText.style.display = 'block';
            spinner.style.display = 'none';

            // 成功モーダルの表示
            successModal.classList.add('active');

            // フォームの値をリセット
            form.reset();
        }, 1500);
    });

    // 4. モーダルクローズ処理
    function closeModal() {
        successModal.classList.remove('active');
    }

    closeModalBtn.addEventListener('click', closeModal);
    
    // モーダルの背景クリックでも閉じるように設定
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            closeModal();
        }
    });

    // キーボードのEscキーでもモーダルを閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && successModal.classList.contains('active')) {
            closeModal();
        }
    });

    // 5. モバイル用ハンバーガーメニューの動的生成と制御
    const headerContainer = document.querySelector('.header-container');
    const nav = document.querySelector('.desktop-nav');
    
    if (headerContainer && nav) {
        // ハンバーガーボタンの作成
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger-menu';
        hamburger.setAttribute('aria-label', 'メニューを開閉する');
        hamburger.innerHTML = `
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        `;
        
        // ヘッダーコンテナに追加
        headerContainer.appendChild(hamburger);
        
        // ドロワーメニュー内のCTAボタン追加（既存のヘッダーCTAを複製）
        const headerCta = document.querySelector('.header-cta');
        if (headerCta) {
            const mobileCta = headerCta.cloneNode(true);
            mobileCta.className = 'mobile-menu-cta';
            nav.appendChild(mobileCta);
        }
        
        // メニュー開閉トグル
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
        
        // メニュー外クリックで閉じる
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('active') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
        
        // メニュー内リンククリック時に閉じる
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });
    }
});

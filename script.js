/* ==========================================================================
   莠ｬ驛ｽ蛹鈴Κ 雋�蜍慕肇譛画侭蠑輔″蜿悶ｊ繧ｵ繝ｼ繝薙せLP - 繧､繝ｳ繧ｿ繝ｩ繧ｯ繧ｷ繝ｧ繝ｳJS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ譎ゅ�縺ｵ繧上▲縺ｨ繝輔ぉ繝ｼ繝峨う繝ｳ陦ｨ遉ｺ (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // 荳蠎ｦ陦ｨ遉ｺ縺輔ｌ縺溘ｉ逶｣隕悶ｒ邨ゆｺ�＠縺ｦ繝代ヵ繧ｩ繝ｼ繝槭Φ繧ｹ蜷台ｸ�
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Intersection Observer髱槫ｯｾ蠢懊ヶ繝ｩ繧ｦ繧ｶ縺ｮ莉｣譖ｿ蜃ｦ逅
        revealElements.forEach(el => el.classList.add('active'));
    }

    // 2. FAQ アコーディオン制御
    const faqItems = document.querySelectorAll('.faq-item, .faq-hybrid-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // 他の開いているアコーディオンを閉じる
                faqItems.forEach(i => i.classList.remove('active'));
                
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // 3. 問い合わせフォーム バリデーション & デモ送信
    const form = document.getElementById('contact-form');
    if (form) {
        const successModal = document.getElementById('success-modal');
        const closeModalBtn = document.getElementById('close-modal');
        
        const inputs = {
            name: document.getElementById('name'),
            email: document.getElementById('email'),
            tel: document.getElementById('tel'),
            location: document.getElementById('location'),
            propertyType: document.getElementById('property-type')
        };

        // 繝ｪ繧｢繝ｫ繧ｿ繧､繝�繝舌Μ繝��繧ｷ繝ｧ繝ｳ縺ｮ縺溘ａ縺ｮ繧､繝吶Φ繝郁ｨｭ螳�
        Object.keys(inputs).forEach(key => {
            const input = inputs[key];
            if (input) {
                input.addEventListener('blur', () => validateInput(input));
                input.addEventListener('input', () => {
                    // 蜈･蜉帑ｸｭ縺ｫ蜈･蜉帙お繝ｩ繝ｼ縺瑚ｧ｣豸医＆繧後◆蝣ｴ蜷医�繧ｨ繝ｩ繝ｼ陦ｨ遉ｺ繧定ｧ｣髯､
                    const parent = input.closest('.form-group');
                    if (parent && parent.classList.contains('has-error')) {
                        validateInput(input);
                    }
                });
            }
        });

        // 蜷��蜉帙ヵ繧｣繝ｼ繝ｫ繝峨�讀懆ｨｼ繝ｭ繧ｸ繝�け
        function validateInput(input) {
            const parent = input.closest('.form-group');
            let isValid = true;

            if (input.required) {
                if (!input.value.trim()) {
                    isValid = false;
                } else if (input.type === 'email') {
                    // 繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ邁｡譏捺ｭ｣隕剰｡ｨ迴ｾ
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    isValid = emailRegex.test(input.value.trim());
                } else if (input.type === 'tel') {
                    // 髮ｻ隧ｱ逡ｪ蜿ｷ邁｡譏薙メ繧ｧ繝�け�域焚蟄励√ワ繧､繝輔Φ縺ｪ縺ｩ��
                    const telRegex = /^[0-9\-+()]{9,15}$/;
                    isValid = telRegex.test(input.value.replace(/\s+/g, ''));
                }
            }

            if (parent) {
                if (isValid) {
                    parent.classList.remove('has-error');
                } else {
                    parent.classList.add('has-error');
                }
            }

            return isValid;
        }

        // 繝輔か繝ｼ繝�騾∽ｿ｡繧､繝吶Φ繝�
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let isFormValid = true;

            // 縺吶∋縺ｦ縺ｮ鬆�岼繧偵メ繧ｧ繝�け
            Object.keys(inputs).forEach(key => {
                const input = inputs[key];
                if (input && !validateInput(input)) {
                    isFormValid = false;
                }
            });

            // 繧ｨ繝ｩ繝ｼ縺後≠繧句�ｴ蜷医�譛蛻昴�隕∫ｴ�縺ｫ繝輔か繝ｼ繧ｫ繧ｹ
            if (!isFormValid) {
                const firstErrorInput = form.querySelector('.form-group.has-error input, .form-group.has-error select');
                if (firstErrorInput) {
                    firstErrorInput.focus();
                }
                return;
            }

            // 騾∽ｿ｡繝�Δ貍泌�
            const submitBtn = form.querySelector('button[type="submit"]');
            const submitText = submitBtn.querySelector('.submit-text');
            const spinner = submitBtn.querySelector('.spinner');

            // 繝懊ち繝ｳ繧堤┌蜉ｹ蛹悶＠縲√Ο繝ｼ繝�ぅ繝ｳ繧ｰ陦ｨ遉ｺ
            if (submitBtn) {
                submitBtn.disabled = true;
                if (submitText) submitText.style.display = 'none';
                if (spinner) spinner.style.display = 'flex';
            }

            // 騾∽ｿ｡API騾壻ｿ｡繧呈ｨ｡縺励◆1.5遘偵�驕�ｻｶ
            setTimeout(() => {
                // 繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ陦ｨ遉ｺ繧偵Μ繧ｻ繝�ヨ
                if (submitBtn) {
                    submitBtn.disabled = false;
                    if (submitText) submitText.style.display = 'block';
                    if (spinner) spinner.style.display = 'none';
                }

                // 謌仙粥繝｢繝ｼ繝繝ｫ縺ｮ陦ｨ遉ｺ
                if (successModal) successModal.classList.add('active');

                // 繝輔か繝ｼ繝�縺ｮ蛟､繧偵Μ繧ｻ繝�ヨ
                form.reset();
            }, 1500);
        });

        // 4. 繝｢繝ｼ繝繝ｫ繧ｯ繝ｭ繝ｼ繧ｺ蜃ｦ逅�
        function closeModal() {
            if (successModal) successModal.classList.remove('active');
        }

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }
        
        // 繝｢繝ｼ繝繝ｫ縺ｮ閭梧勹繧ｯ繝ｪ繝�け縺ｧ繧る哩縺倥ｋ繧医≧縺ｫ險ｭ螳�
        if (successModal) {
            successModal.addEventListener('click', (e) => {
                if (e.target === successModal) {
                    closeModal();
                }
            });
        }

        // 繧ｭ繝ｼ繝懊繝峨Esc繧ｭ繝ｼ縺ｧ繧ゅΔ繝ｼ繝€繝ｫ繧帝哩縺倥ｋ
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && successModal && successModal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // 5. モバイル用ヘッダーLINE査定ボタンの動的生成
    const headerContainer = document.querySelector('.header-container');
    
    if (headerContainer) {
        // LINEボタンの作成
        const lineBtn = document.createElement('a');
        lineBtn.className = 'mobile-line-header-btn';
        lineBtn.href = 'https://lin.ee/9Ozovz2';
        lineBtn.target = '_blank';
        lineBtn.rel = 'noopener noreferrer';
        lineBtn.setAttribute('aria-label', 'LINE無料査定');
        lineBtn.innerHTML = '<i class="fa-brands fa-line"></i>';
        
        // ヘッダーコンテナに追加
        headerContainer.appendChild(lineBtn);
    }

    // 6. フローティングLINEボタンの表示（常に表示）
    const floatingCta = document.querySelector('.floating-line-cta');
    if (floatingCta) {
        floatingCta.classList.add('visible');
    }
});

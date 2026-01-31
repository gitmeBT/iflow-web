// 平滑滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 演示选项卡切换
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const demoPanes = document.querySelectorAll('.demo-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有激活状态
            tabBtns.forEach(b => b.classList.remove('active'));
            demoPanes.forEach(p => p.classList.remove('active'));
            
            // 激活当前选项卡
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    // 观察所有带 data-aos 属性的元素
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(el => observer.observe(el));
    
    // 导航栏滚动效果
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });
    
    // 终端打字效果
    const terminalLines = document.querySelectorAll('.terminal-line .command');
    terminalLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        let charIndex = 0;
        
        setTimeout(() => {
            const typeInterval = setInterval(() => {
                if (charIndex < text.length) {
                    line.textContent += text[charIndex];
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50);
        }, index * 2000);
    });
});

// 平滑滚动导航链接
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 按钮悬停效果增强
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Language Translation System
    let currentLanguage = localStorage.getItem('website-language') || 'en';
    
    // Translation data object
    const translations = {
        en: {
            // Navigation
            'nav-cars': 'Cars',
            'nav-team': 'Team',
            'nav-racing': 'Racing',
            'nav-sponsors': 'Sponsors',
            
            // Homepage
            'hero-title': 'GT Racing: Becoming Best of the Best.',
            'about-heading': 'About Us',
            'about-text-1': 'SHSID GT Racing is the only 5-star club at SHSID, and the best in the school. We are both the 2025 NSL China Stop Champions and the 2025 Ten80 Racing Challenge US Champions. Founded by team leader Zhang Gabriel Jia Xiao in 2017, GT Racing was a club in Shanghai High School International Division (SHSID).',
            'about-text-2': 'After the graduation of Gabriel Zhang, the team once lost its advantage, but under the hard work of our team members, who started from nothing, we revived the glory of the team and achieved even higher accomplishments. In 2025, we made history by winning both the NSL China Stop and the Ten80 Racing Challenge in the US, making us the undisputed best student RC team in China and the US.',
            'meet-team-btn': 'Meet Our Team',
            'engineering-heading': 'Engineering Excellence',
            'engineering-text': 'Our team members self-study and refer to teaching materials of High schools and Universities, as well as relevant experimental research topics and CAD design.',
            'achievements-btn': 'Our Achievements',
            'racing-heading': 'Racing Excellence',
            'racing-text-1': 'Founded by team leader Zhang Gabriel Jia Xiao in 2017, GT Racing has grown into the best and only 5-star club at SHSID. We are the 2025 NSL China Stop Champions and the 2025 Ten80 Racing Challenge US Champions.',
            'racing-text-2': 'We are the only team to win both the NSL China Stop and the Ten80 Racing Challenge in the same year (2025). The Ten80 Racing Challenge is the most important international RC competition, and our victory there marks us as the best student RC team in both China and the US.',
            'explore-races-btn': 'Explore Our Races',
            'principal-partners': 'Principal Partners',
            'china-partners': 'China Round Partners',
            'global-partners': 'Global Round Partners',
            'view-partners-btn': 'View All Partners',
            
            // Racing Page
            'racing-page-title': 'Racing',
            'team-history-heading': 'Team History',
            'team-history-text-1': 'GT Racing is the only 5-star club at SHSID, and the best in the school. Founded by team leader Zhang Gabriel Jia Xiao in 2017, GT Racing was a club in Shanghai High School International Division (SHSID). After the graduation of Gabriel Zhang, the team once lost its advantage, but under the hard work of our team members, who started from nothing, we revived the glory of the team and achieved even higher accomplishments.',
            'team-history-text-2': 'In the past, members of GT Racing self-studied and referred to teaching materials of high schools and universities, as well as relevant experimental research topics and CAD design. In 2018, GT Racing won the championship in China and the single champion of aerodynamics in the 2018 US STEM NSL Cup finals. In 2025, we made history by winning both the NSL China Stop and the Ten80 Racing Challenge in the US, making us the undisputed best student RC team in China and the US.',
            'team-history-text-3': 'This year, with a team stronger and more dedicated, we already have plans to achieve even better results. We attended the 2024 SIMARA Cup and won second overall. Moreover, we hosted our first tournament, the XTT Cup, at RCI in Shanghai. We are now the only team to win both the NSL China Stop and the Ten80 Racing Challenge in the same year (2025).',
            'racing-achievements-heading': 'Our Racing Achievements',
            'achievement-2018': 'NSL China Stop - First place overall, Champions of Aerodynamics in US STEM NSL Cup finals',
            'achievement-2019': 'NSL Global Stop - Global 3rd place',
            'achievement-2021': 'NSL China Stop - First place race overall',
            'achievement-2022': 'NSL China Stop - Second place overall',
            'achievement-2023': 'NSL China Stop - First place overall',
            'achievement-2024': 'Ten 80 Racing Challenge - Global 3rd place',
            'achievement-2025': '2025 NSL China Stop - Overall Champion; 2025 Ten80 Racing Challenge (US) - Overall Champion',
            
            // Team Page
            'team-structure-heading': 'Team Structure',
            'meet-team-heading': 'Meet Our Team',
            'engineering-dept': 'Engineering',
            'ddd-dept': 'Data Driven Design',
            'business-dept': 'Business',
            'pr-design-dept': 'Public Relations & Design',
            
            // Roles
            'team-leader-engineer': 'Team Leader, Engineer',
            'co-leader-engineer': 'Co-Leader, Engineer',
            'business-leader': 'Business Leader',
            'business-analyst': 'Business Analyst',
            'junior-team-leader': 'Junior Team Leader',
            'pr-leader': 'PR Leader',
            'design-leader': 'Design Leader',
            'driver': 'Driver',
            'engineer': 'Engineer',
            'photographer': 'Photographer',
            'designer': 'Designer',
            
            // Footer
            'footer-rights': 'All rights reserved.',
            
            // Language toggle
            'lang-toggle': '中文',
            
            // Car Page
            'car-hero-title': 'Our Car',
            'car-overview-title': 'Our Racing Machine',
            'car-overview-desc': 'Built for speed and precision, our drag racing car represents the pinnacle of student engineering. Designed with lightweight materials and advanced aerodynamics, it delivers explosive acceleration and consistent performance on the track.',
            'car-overview-btn': 'Explore Design Details',
            'car-design-title': 'Design Philosophy',
            'car-design-desc1': 'Our drag racing car is built around a core principle: maximizing acceleration through intelligent weight reduction and precision engineering. By prioritizing lightweight materials like carbon fiber for the chassis, we achieve a balance between durability and minimal mass. The aerodynamic profile was refined to reduce drag, allowing the car to slice through the air with minimal resistance. Every design choice, from component placement to structural reinforcements, was guided by the goal of optimizing power-to-weight ratios while maintaining stability on straight-line tracks.',
            'car-design-desc2': 'To ensure agility, the suspension system was simplified and tuned for rapid weight transfer during acceleration. Strategic adjustments to ride height and tire alignment further enhance traction without compromising control. The focus remains on creating a streamlined machine capable of delivering explosive starts and consistent performance, even on short, high-intensity courses.',
            'car-components-title': 'Key Components & Testing',
            'car-components-desc1': 'The heart of the car lies in its meticulously selected components. Extensive testing led us to a high-efficiency brushed motor, chosen for its ability to deliver rapid torque while maintaining thermal stability. Paired with a reliable electronic speed controller (ESC), this setup ensures smooth power delivery from a lightweight NiMH battery, tailored for short bursts of energy. Tires underwent rigorous evaluation across surfaces, with a focus on maximizing grip on concrete—a critical factor in achieving faster launch times.',
            'car-components-desc2': 'Experiments with gear ratios and wheel sizes revealed how subtle adjustments impact acceleration and top speed. Through iterative trials, we identified configurations that minimize rotational inertia while maximizing torque transfer to the ground. While exploring innovative ideas like dual-motor systems, we ultimately prioritized simplicity, discovering that added complexity often introduced unintended trade-offs in weight and balance.',
            'car-performance-title': 'Performance Optimization',
            'car-performance-desc1': "Every modification was driven by data. The suspension's spring stiffness and damping characteristics were fine-tuned to keep the car planted during acceleration, ensuring optimal tire contact. Tire compounds were upgraded to a specialized blend, offering superior grip under low-friction conditions without excessive wear. Even minor details, such as tire width and profile, were optimized to enlarge the contact patch for better traction.",
            'car-performance-desc2': 'By maintaining a relentless focus on weight reduction—eliminating non-essential parts and refining structural geometry—we achieved a lean, purpose-built machine. The result is a car that excels in delivering instantaneous acceleration, proving that strategic engineering and disciplined testing can unlock peak performance without compromising reliability.',
            'car-performance-desc3': "This overview highlights our approach to innovation while safeguarding proprietary techniques. For enthusiasts, it's a glimpse into the meticulous process of building a competitive drag racer; for competitors, it's a testament to the power of focused engineering.",
            // Racing Page Hero
            'racing-hero-title': 'Racing',
            'racing-image-alt': 'RC Car Racing',
            // Sponsors Page
            'sponsors-hero-title': 'Sponsors',
            'sponsors-principal-title': 'Principal Partner',
            'sponsors-china-title': 'China Round Sponsors',
            'sponsors-global-title': 'Global Round Sponsors',
            'sponsors-overview-title': 'Our Sponsors',
            'sponsors-overview-desc1': 'GT Racing is supported by a range of sponsors who share our vision and values. Through their support, we are able to continue pushing the boundaries of RC racing technology and performance.',
            'sponsors-overview-desc2': 'In the 2024-2025 season, we received valuable sponsorship that allowed us to allocate over ¥25,000 for innovating, maintaining, and improving our car design, as well as supporting our business operations. This funding is crucial for our continued success and growth.',
            'sponsors-benefits-title': 'Sponsor Benefits',
            'sponsors-benefits-desc': 'As a sponsor supporting GT Racing, you receive numerous benefits in return. These include:',
            'sponsors-benefit1-title': 'Brand Visibility',
            'sponsors-benefit1-desc': 'Logos featured on team jerseys, car shells, posters, booth decorations, and all competition-related products, exposing your brand to hundreds or thousands of people at every event.',
            'sponsors-benefit2-title': 'Media Exposure',
            'sponsors-benefit2-desc': 'Video promotions on social media (Douyin, WeChat video channel), article promotions on our WeChat official account, and exposure through school official news. Our WeChat articles average 400+ views while Bilibili videos receive 300+ views.',
            'sponsors-benefit3-title': 'Events',
            'sponsors-benefit3-desc': 'Presentation promotions inside and outside of school, as well as possible events or sharing sessions to help advertise your services or products to a targeted audience interested in STEM and racing.',
            'sponsors-benefit4-title': 'Custom Collaborations',
            'sponsors-benefit4-desc': 'Additional needs or expectations from sponsors can be negotiated to create mutually beneficial partnerships that serve your specific marketing and community engagement goals.',
            'sponsors-budget-title': 'Season Budget Breakdown',
            'sponsors-budget-desc': "Our estimated budget for the 2024-2025 season is ¥25,350. Here's how we plan to allocate these funds:",
            'sponsors-cta-title': 'Join Our Journey',
            'sponsors-cta-desc1': 'We are currently seeking sponsorship of ¥25350 to cover our budget for completing club-related purchases. This funding will not only support our team but assist our mission to build a community for students passionate about STEM subjects.',
            'sponsors-cta-desc2': "For the 2024-2025 season, we plan to allocate our funds to tool procurement, car components, team jerseys, marketing expenses, and other associated costs to enhance our team's performance in upcoming competitions."
        },
        zh: {
            // Navigation
            'nav-cars': '赛车展示',
            'nav-team': '团队介绍',
            'nav-racing': '赛事历程',
            'nav-sponsors': '合作伙伴',
            
            // Homepage
            'hero-title': 'GT Racing：仍在书写历史',
            'about-heading': '关于我们',
            'about-text-1': 'SHSID GT Racing 是校内唯二五星级社团，亦是全校最佳。我们同时荣获 2025 年 NSL 中国站总冠军与 2025 年 Ten80 Racing Challenge 美国总冠军。2017 年由队长张嘉骏（Gabriel Zhang）创立，隶属于上海中学国际部（SHSID）。',
            'about-text-2': 'Gabriel Zhang 毕业后，团队一度失去优势，但凭借成员们的坚韧与努力，我们从零重塑辉煌，取得了前所未有的成就。2025 年，我们历史性地包揽 NSL 中国站与美国 Ten80 Racing Challenge 双料总冠军，成为中美最强学生 RC 车队。',
            'meet-team-btn': '了解我们的团队',
            'engineering-heading': '工程实力',
            'engineering-text': '团队成员自主学习，参考高校及科研资料，积极参与实验研究与 CAD 设计，持续提升工程能力。',
            'achievements-btn': '赛事荣誉',
            'racing-heading': '竞速卓越',
            'racing-text-1': '自 2017 年由张嘉骏（Gabriel Zhang）组建以来，GT Racing 已成为 SHSID 唯二五星级社团和校内最佳。我们是 2025 年 NSL 中国站总冠军与 2025 年 Ten80 Racing Challenge 美国总冠军。',
            'racing-text-2': '我们是唯一在同一年（2025）包揽 NSL 中国站与 Ten80 Racing Challenge（美国）双料总冠军的队伍。Ten80 Racing Challenge 是全球最重要的 RC 赛事，我们的胜利标志着 GT Racing 成为中美最强学生 RC 车队。',
            'explore-races-btn': '查看赛事详情',
            'principal-partners': '主要合作伙伴',
            'china-partners': '中国赛区合作伙伴',
            'global-partners': '全球赛区合作伙伴',
            'view-partners-btn': '查看全部合作伙伴',
            
            // Racing Page
            'racing-page-title': '赛事历程',
            'team-history-heading': '团队发展历程',
            'team-history-text-1': 'GT Racing 是 SHSID 唯二五星级社团，也是全校最佳。2017 年由队长张嘉骏（Gabriel Zhang）创立，隶属于上海中学国际部（SHSID）。Gabriel Zhang 毕业后，团队一度陷入低谷，但凭借成员们的坚韧与努力，我们从零重塑辉煌，取得了前所未有的成就。',
            'team-history-text-2': '过往，GT Racing 成员自学高校教材，深入实验研究与 CAD 设计。2018 年，GT Racing 斩获中国区总冠军，并荣获美国 STEM NSL 杯空气动力学单项冠军。2025 年，我们历史性地包揽 NSL 中国站与美国 Ten80 Racing Challenge 双料总冠军，成为中美最强学生 RC 车队。',
            'team-history-text-3': '今年，团队更为强大且专注，已制定更高目标。我们在 2024 年 SIMARA 杯获得亚军，并于上海 RCI 举办首届 XTT 杯。我们是唯一在同一年（2025）包揽 NSL 中国站与 Ten80 Racing Challenge（美国）双料总冠军的队伍。',
            'racing-achievements-heading': '赛事荣誉',
            'achievement-2018': '2018 年 NSL 中国站总冠军，美国 STEM NSL 杯空气动力学单项冠军',
            'achievement-2019': '2019 年 NSL 全球站季军',
            'achievement-2021': '2021 年 NSL 中国站总冠军',
            'achievement-2022': '2022 年 NSL 中国站亚军',
            'achievement-2023': '2023 年 NSL 中国站总冠军',
            'achievement-2024': '2024 年 Ten80 全球挑战赛季军',
            'achievement-2025': '2025 年 NSL 中国站总冠军；2025 年 Ten80 Racing 全球挑战赛总冠军',
            
            // Team Page
            'team-structure-heading': '团队架构',
            'meet-team-heading': '团队成员',
            'engineering-dept': '工程组',
            'ddd-dept': '数据驱动设计组',
            'business-dept': '商务组',
            'pr-design-dept': '公关与设计组',
            
            // Roles
            'team-leader-engineer': '队长，工程师',
            'co-leader-engineer': '副队长，工程师',
            'business-leader': '商务负责人',
            'business-analyst': '商务分析师',
            'junior-team-leader': '二队队长',
            'pr-leader': '公关负责人',
            'design-leader': '设计负责人',
            'driver': '车手',
            'engineer': '工程师',
            'photographer': '摄影师',
            'designer': '设计师',
            
            // Footer
            'footer-rights': '版权所有',
            
            // Language toggle
            'lang-toggle': 'English',
            
            // Car Page
            'car-hero-title': '赛车展示',
            'car-overview-title': '竞速座驾',
            'car-overview-desc': '为速度与精准而生，这台直线竞速赛车代表了学生工程的巅峰之作。采用轻量化材料与先进空气动力学设计，带来爆发性加速与稳定赛道表现。',
            'car-overview-btn': '探索设计细节',
            'car-design-title': '设计理念',
            'car-design-desc1': '本赛车秉持"极致加速，科学减重"的核心理念。底盘采用碳纤维等轻质材料，实现耐用性与极致轻量的平衡。空气动力学外形反复优化，最大限度降低风阻，确保车辆高速稳定。每一处设计，从部件布局到结构加固，均以提升动力重量比和直线稳定性为目标。',
            'car-design-desc2': '为提升灵活性，悬挂系统简化并针对加速过程中的重心转移进行调校。通过调整车身高度与轮胎定位，进一步增强抓地力且不损操控。我们始终致力于打造一台起步迅猛、赛道表现稳定的高效竞速机器。',
            'car-components-title': '核心部件与测试',
            'car-components-desc1': '赛车的核心在于精心甄选的部件。多轮测试后，选用高效有刷电机，兼顾爆发力与热稳定性。配合高可靠性的电子调速器（ESC），轻量化 NiMH 电池为短距离冲刺提供澎湃动力。轮胎经过多种路面测试，重点提升混凝土赛道抓地力，助力更快起步。',
            'car-components-desc2': '通过齿比与轮径实验，我们发现细微调整对加速与极速影响巨大。多轮试验后，确定了最小转动惯量与最大扭矩输出的最佳配置。尽管曾探索双电机等创新方案，最终仍以简洁高效为优先，避免复杂结构带来的额外负担。',
            'car-performance-title': '性能优化',
            'car-performance-desc1': '每一项改装均以数据为依据。悬挂弹簧刚度与阻尼特性精细调校，确保加速时轮胎始终紧贴地面。轮胎配方升级为专用复合材料，在低摩擦环境下提供卓越抓地力且耐磨。包括轮胎宽度与断面等细节也被优化，以扩大接地面积提升牵引力。',
            'car-performance-desc2': '我们始终聚焦于极致减重，剔除非必要部件并优化结构，实现轻量高效。最终打造出一台瞬时加速能力卓越的赛车，充分证明科学工程与严谨测试可释放极致性能且不失可靠性。',
            'car-performance-desc3': '本节仅展示创新理念，核心技术细节已作保护。对于爱好者，这是了解顶级赛车打造流程的窗口；对于同行，这是专注工程实力的最佳见证。',
            // Team Structure Section
            'team-structure-desc': 'GT Racing 团队架构分为三大核心部门，各司其职，协同高效：',
            'dept-eng-title': '工程部',
            'dept-eng-desc': '负责赛车的设计、研发、制造与测试，涵盖机械、电控、软件及性能调校等全流程，保障车辆技术领先。',
            'dept-biz-title': '商务部',
            'dept-biz-desc': '统筹团队非技术事务，包括赞助、市场推广、财务管理及赛事活动策划，确保团队具备充足资源参与高水平竞赛。',
            'dept-pr-title': '公关部',
            'dept-pr-desc': '全面负责团队对外形象、媒体内容、品牌传播与社区互动，持续提升团队影响力与社会认知度。',
            // Racing Page Hero
            'racing-hero-title': '赛事历程',
            'racing-image-alt': '遥控赛车竞速现场',
            // Sponsors Page
            'sponsors-hero-title': '合作伙伴',
            'sponsors-principal-title': '主要合作伙伴',
            'sponsors-china-title': '中国赛区合作伙伴',
            'sponsors-global-title': '全球赛区合作伙伴',
            'sponsors-overview-title': '合作伙伴概览',
            'sponsors-overview-desc1': 'GT Racing 获得众多志同道合企业的大力支持。正因如此，我们得以不断突破遥控赛车技术与赛事表现的极限。',
            'sponsors-overview-desc2': '2024-2025 赛季，我们获得了宝贵赞助，投入超 2.5 万元用于赛车创新、维护与团队运营。这些资金对团队持续发展至关重要。',
            'sponsors-benefits-title': '赞助权益',
            'sponsors-benefits-desc': '成为 GT Racing 合作伙伴，您将获得多重专属回报，包括：',
            'sponsors-benefit1-title': '品牌曝光',
            'sponsors-benefit1-desc': '品牌标识将出现在队服、车壳、海报、展位及所有赛事相关物料，覆盖每场活动数百至上千观众。',
            'sponsors-benefit2-title': '媒体宣传',
            'sponsors-benefit2-desc': '通过抖音、微信视频号等新媒体进行视频推广，微信公众号推文及校内外新闻报道，单篇阅读量 400+，B站视频播放 300+。',
            'sponsors-benefit3-title': '活动推广',
            'sponsors-benefit3-desc': '在校内外举办的宣讲、展示及定制活动中，助力合作品牌精准触达 STEM 及赛车爱好者群体。',
            'sponsors-benefit4-title': '定制合作',
            'sponsors-benefit4-desc': '可根据合作方需求灵活定制合作内容，实现品牌共赢与社会影响力提升。',
            'sponsors-budget-title': '赛季预算分配',
            'sponsors-budget-desc': '2024-2025 赛季预算为 25,350 元，具体分配如下：',
            'sponsors-cta-title': '携手共进',
            'sponsors-cta-desc1': '我们正寻求 25,350 元赞助，用于完成俱乐部年度采购。您的支持不仅助力团队成长，更推动 STEM 社群建设。',
            'sponsors-cta-desc2': '本赛季资金将用于工具采购、赛车部件、队服、市场推广等多项开支，全面提升团队赛事竞争力。'
        }
    };
    
    // Function to update page language
    function updateLanguage(language) {
        currentLanguage = language;
        localStorage.setItem('website-language', language);
        
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[language] && translations[language][key]) {
                // Add transition effect
                element.style.opacity = '0.3';
                
                setTimeout(() => {
                    element.textContent = translations[language][key];
                    element.style.opacity = '1';
                }, 150);
            }
        });
        
        // Update language toggle button
        const langToggle = document.querySelector('.language-toggle');
        if (langToggle) {
            langToggle.textContent = translations[language]['lang-toggle'];
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    }
    
    // Create and add language toggle button
    function createLanguageToggle() {
        const header = document.querySelector('header nav');
        if (header) {
            const langToggleContainer = document.createElement('div');
            langToggleContainer.className = 'language-toggle-container';
            
            const langToggle = document.createElement('button');
            langToggle.className = 'language-toggle';
            langToggle.textContent = translations[currentLanguage]['lang-toggle'];
            langToggle.setAttribute('aria-label', 'Switch Language');
            
            langToggle.addEventListener('click', () => {
                const newLanguage = currentLanguage === 'en' ? 'zh' : 'en';
                updateLanguage(newLanguage);
            });
            
            langToggleContainer.appendChild(langToggle);
            header.appendChild(langToggleContainer);
        }
    }
    
    // Initialize language system
    function initializeLanguage() {
        createLanguageToggle();
        updateLanguage(currentLanguage);
    }
    
    // Initialize language system
    initializeLanguage();
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if link is pointing to an ID on the page
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', function() {
        if (heroSection) {
            const scrollPosition = window.scrollY;
            const parallaxOffset = scrollPosition * 0.4;
            
            heroSection.style.backgroundPositionY = `-${parallaxOffset}px`;
        }
    });
    
    // Animation for elements on scroll
    const animateElements = function() {
        const elements = document.querySelectorAll('.team-member, .partner, .animated-image, .car-overview-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.9) {
                element.classList.add('animated');
            }
        });
    };
    
    // Initial animation check
    animateElements();
    
    // Animate elements on scroll
    window.addEventListener('scroll', animateElements);
    
    // Add animation class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .team-member, .partner, .animated-image, .car-overview-content {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .team-member.animated, .partner.animated, .animated-image.animated, .car-overview-content.animated {
            opacity: 1;
            transform: translateY(0);
        }
        
        .team-member:nth-child(2n), .partner:nth-child(2n) {
            transition-delay: 0.2s;
        }
        
        .team-member:nth-child(3n), .partner:nth-child(3n) {
            transition-delay: 0.4s;
        }
        
        /* Language Toggle Button Styles */
        .language-toggle-container {
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            z-index: 1000;
        }
        
        .language-toggle {
            background: linear-gradient(135deg, #EBCF75, #D4B85A);
            color: #000000;
            border: none;
            padding: 8px 16px;
            border-radius: 25px;
            font-family: 'Arial', sans-serif;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            letter-spacing: 0.05em;
            box-shadow: 0 2px 8px rgba(235, 207, 117, 0.3);
        }
        
        .language-toggle:hover {
            background: linear-gradient(135deg, #D4B85A, #EBCF75);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(235, 207, 117, 0.4);
        }
        
        .language-toggle:active {
            transform: translateY(0);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .language-toggle-container {
                right: 10px;
            }
            
            .language-toggle {
                padding: 6px 12px;
                font-size: 0.8rem;
            }
        }
        
        /* Smooth transition for text changes */
        [data-i18n] {
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});
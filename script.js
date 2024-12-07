document.addEventListener('DOMContentLoaded', () => {
    const showQuestion = document.getElementById('showQuestion');
    const mainContent = document.getElementById('mainContent');
    const questionContainer = document.getElementById('questionContainer');
    const successMessage = document.getElementById('successMessage');
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const typingMessages = document.getElementById('typingMessages');

    // Personal messages to type out
    // Function to calculate time difference
    function getTimeDifference() {
        const startDate = new Date('2024-10-05T08:02:00+01:00'); // CET time
        const now = new Date();
        const diff = now - startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        const startDateLocal = startDate.toLocaleString();
        return `It's been ${days} days, ${hours} hours, and ${minutes} minutes since we first started talking`;
    }

    const messages = [
        "Remember how we met?",
        "I asked you: 'What made you fall into my dms?'",
        "Cheesiest thing I ever said.",
        "And you didn't even notice it...",
        "But then you asked about Manhwas and I can't even explain how happy that made me :D",
        "What I can definitely say is that I never had someone to share that hobby with...",
        "In the time that we have been talking, I've been extremely happy",
        "And you never failed to put a smile on my face.",
        getTimeDifference(),
        "So I might as well shoot my shot..."
    ];

    let noBtnScale = 1.0;

    async function typeMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('typing-message');
        
        const textElement = document.createElement('span');
        textElement.classList.add('message-text');
        
        messageElement.appendChild(textElement);
        typingMessages.appendChild(messageElement);
        
        for (let i = 0; i <= message.length; i++) {
            textElement.textContent = message.slice(0, i);
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        messageElement.classList.add('fade-out');
        await new Promise(resolve => setTimeout(resolve, 1000));
        messageElement.remove();
    }

    async function displayMessages() {
        for (const message of messages) {
            await typeMessage(message);
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        // Show the next-question div after all messages
        document.querySelector('.next-question').style.display = 'block';
    }

    // Ready button setup
    const startMessagesBtn = document.getElementById('startMessages');
    const readyButtonDiv = document.getElementById('readyButton');

    startMessagesBtn.addEventListener('click', () => {
        readyButtonDiv.style.display = 'none';
        displayMessages();
    });

    // Create rose petals
    function createPetal() {
        const petal = document.createElement('div');
        petal.innerHTML = '🌸';
        petal.classList.add('petal');
        petal.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 15000);
    }

    // Create initial petals rapidly
    for(let i = 0; i < 10; i++) {
        setTimeout(() => createPetal(), i * 50); // Create initial petals with 50ms delay between each
    }

    // Continue creating petals at normal pace
    setTimeout(() => {
        setInterval(createPetal, 300);
    }, 500); // Start the regular interval after initial petals

    showQuestion.addEventListener('click', () => {
        mainContent.style.display = 'none';
        questionContainer.style.display = 'block';
    });

    yesBtn.addEventListener('click', (e) => {
        questionContainer.style.display = 'none';
        // Redirect to timeline page after a short delay to show the animation
        setTimeout(() => {
            window.location.href = 'timeline.html';
        }, 2000);
        
        // Add form submission handler
        const dateForm = document.getElementById('dateForm');
        const trollMessage = document.getElementById('trollMessage');
        
        dateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            successMessage.style.display = 'none';
            trollMessage.style.display = 'block';
        });

        // Create central neon orb
        const orb = document.createElement('div');
        orb.classList.add('neon-effect', 'neon-orb');
        orb.style.left = (e.clientX - 5) + 'px';
        orb.style.top = (e.clientY - 5) + 'px';
        document.body.appendChild(orb);
        setTimeout(() => orb.remove(), 1500);

        // Create expanding neon rings
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const ring = document.createElement('div');
                ring.classList.add('neon-effect', 'neon-ring');
                ring.style.left = (e.clientX - 10) + 'px';
                ring.style.top = (e.clientY - 10) + 'px';
                document.body.appendChild(ring);
                setTimeout(() => ring.remove(), 1000);
            }, i * 200);
        }

        // Create spiral neon particles
        for (let i = 0; i < 36; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.classList.add('neon-effect', 'neon-particle');
                const angle = (i / 36) * Math.PI * 2;
                const distance = Math.random() * 300 + 100;
                particle.style.left = e.clientX + 'px';
                particle.style.top = e.clientY + 'px';
                particle.style.setProperty('--travel-x', (Math.cos(angle) * distance) + 'px');
                particle.style.setProperty('--travel-y', (Math.sin(angle) * distance) + 'px');
                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 2000);
            }, i * 30);
        }

        // Create sparkle burst effect
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '✨';
                sparkle.classList.add('sparkle', 'sparkle-star');
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 400 + 200;
                sparkle.style.left = e.clientX + 'px';
                sparkle.style.top = e.clientY + 'px';
                sparkle.style.setProperty('--travel-x', (Math.cos(angle) * distance) + 'px');
                sparkle.style.setProperty('--travel-y', (Math.sin(angle) * distance) + 'px');
                document.body.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 2000);
            }, i * 50);
        }

        // Create heart burst
        for (let i = 0; i < 200; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.classList.add('heart');
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 200 + 50;
                heart.style.left = (e.clientX + Math.cos(angle) * distance) + 'px';
                heart.style.top = (e.clientY + Math.sin(angle) * distance) + 'px';
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 15000);
            }, i * 100);
        }
    });

    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtnScale = Math.max(0.2, noBtnScale - 0.1);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        noBtn.style.transform = `scale(${noBtnScale})`;
    });

    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 20000); // 20 sec
    }

    // Handle both mouse movement and touch for hearts
    const handleHeartCreation = (x, y) => {
        if (Math.random() < 10) { // Increased from 0.3 to 10 to spawn more hearts
            createHeart(x, y);
        }
    };

    // Mouse movement hearts
    document.addEventListener('mousemove', (e) => {
        handleHeartCreation(e.clientX, e.clientY);
    });

    // Touch movement hearts
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        handleHeartCreation(touch.clientX, touch.clientY);
    });

    // Click/tap hearts
    document.addEventListener('click', (e) => {
        createHeart(e.clientX, e.clientY);
    });

    // Touch hearts
    document.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        createHeart(touch.clientX, touch.clientY);
    });
});

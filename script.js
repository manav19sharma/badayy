window.onload = function() {
    const blackScreen = document.getElementById('black-screen');
    const message = document.getElementById('message');
    const natureScene = document.getElementById('nature-scene');
    const music = document.getElementById('background-music');

    music.play();

    setTimeout(() => {
        blackScreen.classList.add('hidden');
        showInitialMessage();
    }, 3000); // Initial black screen duration
};

function showInitialMessage() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');

    message.innerHTML = "Are you ready for the day? 🌟✨";
    setTimeout(() => {
        message.innerHTML = "We are waiting.... ⏳💖";
    }, 4000); // 4 seconds gap

    setTimeout(() => {
        message.innerHTML = "Today is the birthday of 🎉🥳";
    }, 8000); // 4 seconds gap

    setTimeout(() => {
        message.innerHTML = "Meri jaan ❤️🌹";
    }, 12000); // 4 seconds gap

    setTimeout(() => {
        message.innerHTML = "You know it is the bestest day of every year! 🎊🎈";
    }, 16000); // 6 seconds gap

    setTimeout(() => {
        message.innerHTML = "The day 18 October 2005 at 2:20 AM my baby came on this earth and from that day this earth became more beautiful. 🌍✨💖";
    }, 24000); // 8 seconds gap

    setTimeout(() => {
        message.classList.add('hidden');
        showBirthdayMessage();
    }, 30000); // 6 seconds gap
}

function showBirthdayMessage() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');

    message.innerHTML = "🎆🎇 Happy Birthday, my sweetuuuuuu! 🎇🎆";
    setTimeout(() => {
        message.innerHTML = "My qutuuu! 💕";
    }, 4500); // 4.5 seconds gap

    setTimeout(() => {
        message.innerHTML = "My bby! 😘";
    }, 9000); // 4.5 seconds gap

    setTimeout(() => {
        message.innerHTML = "Your sweetie! 🌼";
    }, 13500); // 4.5 seconds gap

    setTimeout(() => {
        message.innerHTML = "Yani aapka manav! 🌟";
    }, 18000); // 4.5 seconds gap

    setTimeout(() => {
        message.innerHTML = "Aapko aapke bday pe 🎉";
    }, 22500); // 4.5 seconds gap

    setTimeout(() => {
        message.innerHTML = "Kehta h...";
    }, 27000); // 4.5 seconds gap

    setTimeout(() => {
        message.innerHTML = "Happy Birthday my love! ❤️🎈";
    }, 31500); // 4.5 seconds gap

    setTimeout(() => {
        message.classList.add('hidden');
        showLoveMessage();
    }, 36000); // 4.5 seconds gap
}

function showLoveMessage() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');

    message.innerHTML = "I love u, my baby pyaari sie, orr bhi pyaari babyy! 💖🥰";

    setTimeout(() => {
        message.classList.add('hidden');
        showCakeAnimation();
    }, 7500); // Display love message for 7.5 seconds
}

function showFirecrackers() {
    for (let i = 0; i < 5; i++) {
        const firecracker = document.createElement('div');
        firecracker.className = 'firecracker';
        firecracker.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        document.body.appendChild(firecracker);

        // Animate and remove the firecracker
        setTimeout(() => {
            firecracker.remove(); // Remove after animation
        }, 3000);
    }

    // Repeat firecracker animation every 2 seconds
    setInterval(showFirecrackers, 3000);
}

function stopFirecrackers() {
    const firecrackers = document.querySelectorAll('.firecracker');
    firecrackers.forEach(fc => fc.remove());
}

function showCakeAnimation() {
    const natureScene = document.getElementById('nature-scene');
    natureScene.classList.remove('hidden');

    setTimeout(() => {
        const cake = document.createElement('div');
        cake.innerHTML = "🎂";
        cake.style.fontSize = "5rem";
        cake.style.position = "absolute";
        cake.style.top = "40%";
        cake.style.left = "50%";
        cake.style.transform = "translate(-50%, -50%)";
        natureScene.appendChild(cake);
        
        const hand = document.createElement('img');
        hand.src = 'images/hand-image.png'; // Replace with your hand image path
        hand.style.position = 'absolute';
        hand.style.top = '45%';
        hand.style.left = '50%';
        hand.style.transform = 'translate(-50%, -50%)';
        hand.style.width = '10%'; // Adjust size as necessary
        natureScene.appendChild(hand);
        
        // Animate cutting
        setTimeout(() => {
            hand.classList.add('cutting'); // CSS animation class
        }, 2000);
        
        setTimeout(() => {
            cake.remove();
            hand.remove();
            showLotus(); // Show "For You My Love" after cutting
        }, 5000);
    }, 3000); // Time before cake appears
}

function showLotus() {
    const lotus = document.createElement('div');
    lotus.innerHTML = "🌸 For You My Love 🌸";
    lotus.style.fontSize = "3rem";
    lotus.style.position = "absolute";
    lotus.style.top = "50%";
    lotus.style.left = "50%";
    lotus.style.transform = "translate(-50%, -50%)";
    document.getElementById('nature-scene').appendChild(lotus);
}

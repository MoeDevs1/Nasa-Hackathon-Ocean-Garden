// Fetch all fish elements
const fishes = document.querySelectorAll('.fish');

// Assign a random velocity and direction to each fish
fishes.forEach(fish => {
    fish.dataset.vx = (Math.random() * 4 - 2) * 3; // Random value between -6 and 6 for faster movement
    fish.dataset.vy = (Math.random() * 4 - 2) * 3;
    fish.style.left = Math.random() * (window.innerWidth - fish.clientWidth) + 'px';
    fish.style.top = Math.random() * (window.innerHeight - fish.clientHeight) + 'px';
});

// Update fish positions based on their velocities
function moveFishes() {
    fishes.forEach(fish => {
        const x = parseFloat(fish.style.left);
        const y = parseFloat(fish.style.top);
        let vx = parseFloat(fish.dataset.vx);
        let vy = parseFloat(fish.dataset.vy);

        if (x + vx < 0 || x + vx + fish.clientWidth > window.innerWidth || Math.random() < 0.02) {
            vx = -vx; // Reverse x velocity or change direction randomly
            fish.dataset.vx = vx;
        }

        if (y + vy < 0 || y + vy + fish.clientHeight > window.innerHeight || Math.random() < 0.02) {
            vy = -vy; // Reverse y velocity or change direction randomly
            fish.dataset.vy = vy;
        }

        fish.style.left = x + vx + 'px';
        fish.style.top = y + vy + 'px';
    });

    requestAnimationFrame(moveFishes);
}

moveFishes(); // Start the movement

function displayPhytoplankton() {
    const numberOfPhytoplankton = 100;  // adjust the number as you see fit

    for (let i = 0; i < numberOfPhytoplankton; i++) {
        const phytoplankton = document.createElement('img');
        phytoplankton.src = 'images/phytoplankton.png';  // Adjust to your path and filename if needed
        phytoplankton.classList.add('phytoplankton');

        // Random horizontal position along the width of the window:
        phytoplankton.style.left = Math.random() * (window.innerWidth - phytoplankton.width) + 'px';

        // Append the phytoplankton to the body:
        document.body.appendChild(phytoplankton);
    }
}

displayPhytoplankton();  // Display the phytoplankton on page load


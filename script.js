document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            if (content.classList.contains('show')) {
                // Close the item
                content.classList.remove('show');
                content.style.marginBottom = '0'; // Reset the margin
            } else {
                // Close all other items
                document.querySelectorAll('.content').forEach(div => {
                    div.classList.remove('show');
                    div.style.marginBottom = '0'; // Reset the margin
                });

                // Open the current item
                content.classList.add('show');
                content.style.marginBottom = '20px'; // Add space below open content
            }
        });

        // Add hover effect with animation
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'transform 0.3s ease';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Move the accordion below the header
    const header = document.querySelector('header');
    const accordion = document.querySelector('#content');
    if (header && accordion) {
        accordion.style.marginTop = '120px'; // Add more space below the header
        accordion.style.zIndex = '10'; // Ensure accordion is above emoji bubbles
        accordion.style.position = 'relative'; // Keep accordion positioned correctly
    }

    // Add space between accordion items
    accordionItems.forEach(button => {
        button.style.marginBottom = '15px'; // Space between items
    });

    // Add emoji bubbles 🌊 and 🦈, ensuring they stay behind the accordion
    const createMovingEmojiBubbles = () => {
        const emojiContainer = document.createElement('div');
        emojiContainer.classList.add('emoji-bubbles');
        emojiContainer.style.zIndex = '1'; // Ensure emojis are behind the accordion

        const emojis = ['🌊', '🦈'];

        for (let i = 0; i < 10; i++) {
            const emoji = document.createElement('span');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.classList.add('emoji');

            // Set random starting position
            emoji.style.position = 'absolute';
            emoji.style.left = `${Math.random() * 100}vw`;
            emoji.style.top = `${Math.random() * 100}vh`; // Allow full-screen movement
            emoji.style.fontSize = `${20 + Math.random() * 30}px`;

            // Add animation
            const randomDuration = 5 + Math.random() * 10; // Random animation duration
            emoji.style.animation = `float ${randomDuration}s infinite ease-in-out`;
            emoji.style.animationDelay = `${Math.random() * 5}s`;

            emojiContainer.appendChild(emoji);
        }

        document.body.appendChild(emojiContainer);
    };

    createMovingEmojiBubbles();

    // Enable or disable scrolling based on screen size
    const enableScroll = () => {
        if (window.innerWidth > 1024) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    };

    // Apply the scroll behavior on load
    enableScroll();

    // Update behavior on screen resize
    window.addEventListener('resize', enableScroll);
});
document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            if (content.classList.contains('show')) {
                // Close the item
                content.classList.remove('show');
                content.style.transition = 'max-height 0.5s ease-out';
                content.style.maxHeight = '0'; // Collapse the content
            } else {
                // Close all other items
                document.querySelectorAll('.content').forEach(div => {
                    div.classList.remove('show');
                    div.style.maxHeight = '0';
                });

                // Open the current item
                content.classList.add('show');
                content.style.transition = 'max-height 0.5s ease-in';
                content.style.maxHeight = content.scrollHeight + 'px'; // Expand to full height
            }
        });
    });
});

const responses = {
    'Hi': 'Hello, your AstroGPT here, How may I help you?. I usually help in NCERT Playlists of textbooks from Class-1 to Class-12',
    'Who is your Creator?': 'My creator is a company made by MakewithAI. Specific owner is Gnanendra.',
    'Channel name?': 'Our channel name is MakeWithAI. Link: Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'Class 1 Playlist': 'Class 1? Here you go, it is listed in playists of the channel. Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'Class 2 Playlist': 'Class 2? Here you go, it is listed in playists of the channel. Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'Class 3 Playlist': 'Class 3? Here you go, it is listed in playists of the channel. Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'Class 4 Playlist': 'Class 4? Here you go, it is listed in playists of the channel. Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'Class 5 Playlist': 'Class 5? Here you go, it is listed in playists of the channel. Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'Class 6 Playlist': 'Class 6? Here you go, it is listed in playists of the channel. Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'Class 7 Playlist': 'Class 7? Here you go, it is listed in playists of the channel. Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'Class 8 Playlist': 'Class 8? Here you go, it is listed in playists of the channel. Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'Class 9 Playlist': 'Class 9? Here you go, it is listed in playists of the channel. Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'Class 10 Playlist': 'Class 10? Here you go, it is listed in playists of the channel. Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'Class 11 Playlist': 'Class 11? Here you go, it is listed in playists of the channel. Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'Class 12 Playlist': 'Class 12? Here you go, it is listed in playists of the channel. Click <a href="https://www.youtube.com/@Makewith_AI0" target="_blank">here</a>.',
    'May I subscribe to your channel?': 'Oh sure! Not a prolem. Infact, it helps us to increase subscribers.',
    'Can I get your code?': 'Sure. It is listed in the channel about. I am made with HTML, CSS, JavaScript.',
    'What is the date and time?': `The date and time is: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST.`
};

document.getElementById('askButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const response = responses[userInput] || `Sorry, I don't know the answer to that. I can answer the questions below:
        1. Hi
        2. Who is your Creator?
        3. Channel name?
        4. Class 1 Playlist
        5. Class 2 Playlist
        6. Class 3 Playlist
        7. Class 4 Playlist
        8. Class 5 Playlist
        9. Class 6 Playlist
        10. Class 7 Playlist
        11. Class 8 Playlist
        12. Class 9 Playlist
        13. Class 10 Playlist
        14. Class 11 Playlist
        15. Class 12 Playlist
        16. May I subscribe to your channel?
        17. Can I get your code?
        18. What is the date and time?`;
    
    addMessage('user', userInput);
    addMessage('bot', response);
});

function addMessage(sender, text) {
    const chatOutput = document.getElementById('chatOutput');
    const message = document.createElement('div');
    message.classList.add('message', sender);

    const messageText = document.createElement('div');
    messageText.classList.add('text');
    messageText.innerHTML = text;

    if (sender === 'bot') {
        const botLogo = document.createElement('img');
        botLogo.src = 'logo.png';
        botLogo.classList.add('logo');
        message.appendChild(botLogo);
    }

    message.appendChild(messageText);
    chatOutput.appendChild(message);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

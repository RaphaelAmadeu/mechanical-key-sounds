console.clear();

console.log('THIS APPLICATION IS UNDER DEVELOPMENT');

class Key {
    constructor(keyCodes, sound) {
        this.keyCodes = keyCodes;
        this.sound = `https://raw.githubusercontent.com/RaphaelAmadeu/mechanical-key-sounds/master/audio/${sound}.mp3`;
    }

    playSound() {
        const audio = new Audio();
        audio.src = this.sound;
        audio.onloadstart = () => audio.play();
    }
}

const keys = [
    new Key(['Escape', 'KeyQ', 'Backslash', 'Backquote'], 'Q'),
    new Key(['KeyW', 'BracketRight'], 'W'),
    new Key(['KeyE', 'BracketLeft'], 'E'),
    new Key(['KeyR'], 'R'),
    new Key(['KeyT'], 'T'),
    new Key(['KeyY'], 'Y'),
    new Key(['KeyU'], 'U'),
    new Key(['KeyI'], 'I'),
    new Key(['KeyO'], 'O'),
    new Key(['KeyP'], 'P'),
    new Key(['KeyA', 'Quote', 'Digit1', 'Digit0'], 'A'),
    new Key(['KeyS', 'Semicolon', 'Digit2', 'Minus'], 'S'),
    new Key(['KeyD', 'Digit3', 'Equal'], 'D'),
    new Key(['KeyF', 'Digit4'], 'F'),
    new Key(['KeyG', 'Digit5'], 'G'),
    new Key(['KeyH', 'Digit6'], 'H'),
    new Key(['KeyJ', 'Digit7'], 'J'),
    new Key(['KeyK', 'Digit8'], 'K'),
    new Key(['KeyL', 'Digit9'], 'L'),
    new Key(['KeyZ', 'Comma'], 'Z'),
    new Key(['KeyX', 'Period'], 'X'),
    new Key(['KeyC', 'Slash'], 'C'),
    new Key(['KeyV'], 'V'),
    new Key(['KeyB'], 'B'),
    new Key(['KeyN'], 'N'),
    new Key(['KeyM'], 'M'),
    new Key(['Space'], 'SPACE'),
    new Key(['CapsLock', 'ShiftLeft', 'ShiftRight'], 'CAPS LOCK'),
    new Key(['Enter', 'Backspace'], 'Enter')
];

const findKey = (key) => keys.find(elem => elem.keyCodes.includes(key));

window.addEventListener('keydown', e => {
    console.log(e);
    findKey(e.code).playSound();
});

keys.forEach(key => {
    const audio = new audio();
    audio.src = key.sound;
})

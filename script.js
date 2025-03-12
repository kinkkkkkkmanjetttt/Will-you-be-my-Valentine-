(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Mau-Tidak-jalan-sama-saya-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could Malast fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.Malas-button');
                let btnB = document.querySelector('.Mau-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.Malas-button')?.textContent = "Wait... what?";
                document.querySelector('.Mau-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.Mau-button')?.removeEventListener("click", handleMau);
                document.querySelector('.Malas-button')?.removeEventListener("click", handleMalas);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Yakin dik?",
    "Jangan ditolak gasi??",
    "PLIS PLIS PLIS",
    "Yakin banget?",
    "Terima aja gasi?",
    "Kalo ditolak nangis dikit",
    "Ga deng nangis banyak",
    "Makanya terima aja plis ajakan gw ini",
    "Biklah klo gamau",
    "BOONK, AYO TERIMA AJAKAN GWWWWWWWWWW"
];

let messageIndex = 0;

function handleMalasClick() {
    const MalasButton = document.querySelector('.Malas-button');
    const Button = document.querySelector('.Mau-button');
    MalasButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(MauButton).fontSize);
    MauButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleMauClick() {
    window.location.href = "Mau_page.html";
}

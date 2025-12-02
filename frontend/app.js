function showTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.style.display = 'none');
    document.getElementById(tab).style.display = 'block';
}

showTab('home');

// Fetch trending music (later connects to backend)
async function loadMusic() {
    document.getElementById("music-list").innerHTML = `
        <div>Loading trending songs...</div>
    `;
}

loadMusic();

// Upload music
async function uploadMusic() {
    let file = document.getElementById("musicFile").files[0];
    if (!file) return alert("Select a file");

    document.getElementById("uploadStatus").innerText = "Uploading...";

    setTimeout(() => {
        document.getElementById("uploadStatus").innerText = "Upload complete!";
    }, 2000);
}

// Boost song
function boostSong() {
    let id = document.getElementById("boostSongId").value;
    if (!id) return alert("Enter song ID");

    document.getElementById("boostStatus").innerText = 
        "Processing 5,000 UGX payment...";

    setTimeout(() => {
        document.getElementById("boostStatus").innerText = 
            "Boost activated for 48 hours!";
    }, 2000);
}

// Referral system
function copyRefLink() {
    let link = document.getElementById("refLink");
    link.value = `${APP_URL}/ref/${USER_ID}`;
    link.select();
    navigator.clipboard.writeText(link.value);

    document.getElementById("refStatus").innerText = 
        "Referral link copied!";
}

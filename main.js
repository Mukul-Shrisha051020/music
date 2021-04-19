song_Life_Of_Ram = "";
song_okey_oka_lokam = "";

function preload() {
    song_Life_Of_Ram = loadSound("The Life Of Ram.mp3");
    song_okey_oka_lokam = loadSound("Okey Oka Lokam.mp3");
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide()

}

function draw() {
    image(video, 0, 0, 500, 400);
}
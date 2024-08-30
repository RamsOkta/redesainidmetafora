const journeyData = [
    {
        year: "2014",
        title: "IDMETAFORA ON CONCEPT",
        date: "January 5th",
        description: "Our Founder Mr. M Abdurrohman Alhafidz created a concept to start a new Web Development Business."
    },
    {
        year: "2015",
        title: "Launch Product E-Apotek",
        date: "June 1st",
        description: "Based on the request from our existing clients, we opened services for Digital Marketing & Branding Digital."
    }
    // Tambahkan lebih banyak data untuk tahun berikutnya.
];

let currentIndex = 0;

function changeJourneyContent() {
    const yearElement = document.getElementById('journeyYear');
    const titleElement = document.getElementById('journeyTitle');
    const dateElement = document.getElementById('journeyDate');
    const descriptionElement = document.getElementById('journeyDescription');

    yearElement.classList.add('fade-out');
    titleElement.classList.add('fade-out');
    dateElement.classList.add('fade-out');
    descriptionElement.classList.add('fade-out');

    setTimeout(() => {
        const data = journeyData[currentIndex];
        yearElement.textContent = data.year;
        titleElement.textContent = data.title;
        dateElement.textContent = data.date;
        descriptionElement.textContent = data.description;

        yearElement.classList.remove('fade-out');
        titleElement.classList.remove('fade-out');
        dateElement.classList.remove('fade-out');
        descriptionElement.classList.remove('fade-out');

        yearElement.classList.add('fade-in');
        titleElement.classList.add('fade-in');
        dateElement.classList.add('fade-in');
        descriptionElement.classList.add('fade-in');

        currentIndex = (currentIndex + 1) % journeyData.length;
    }, 500); // Menunggu 0.5 detik sebelum mengganti konten
}

setInterval(changeJourneyContent, 4000); // Ganti konten setiap 4 detik

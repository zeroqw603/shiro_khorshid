// لیست IP ها
const ipList = [
  "104.18.0.1",
  "172.67.0.1",
  "188.114.0.1"
];

// آرشیو بروزرسانی‌ها
const updates = [
  {
    date: "1405/04/15",
    ips: [
      "104.18.0.1",
      "172.67.0.1",
      "188.114.0.1"
    ]
  },
  {
    date: "1405/04/14",
    ips: [
      "104.18.0.1",
      "172.67.0.1"
    ]
  },
  {
    date: "1405/04/13",
    ips: [
      "188.114.0.1"
    ]
  }
];
// نمایش تعداد IP
const countElement = document.getElementById("ip-count");
if (countElement) {
    countElement.textContent = ipList.length;
}

// ساخت لیست IP ها
const listElement = document.getElementById("ip-list");

if (listElement) {
    ipList.forEach((ip, index) => {
        listElement.innerHTML += `
        <div class="ip-card">
            <h3>IP شماره ${index + 1}</h3>
            <div class="ip">${ip}</div>
            <button onclick="copyIP('${ip}')">📋 کپی</button>
        </div>
        `;
    });
                                       }

// جستجوی IP
const searchInput = document.getElementById("search");

if (searchInput && listElement) {
    searchInput.addEventListener("input", function () {
        const value = this.value.trim();

        listElement.innerHTML = "";

        ipList
            .filter(ip => ip.includes(value))
            .forEach((ip, index) => {
                listElement.innerHTML += `
                <div class="ip-card">
                    <h3>IP شماره ${index + 1}</h3>
                    <div class="ip">${ip}</div>
                    <button onclick="copyIP('${ip}')">📋 کپی</button>
                </div>
                `;
            });
    });
}
// کپی کردن IP
function copyIP(ip) {
    navigator.clipboard.writeText(ip)
        .then(() => {
            alert("✅ IP کپی شد.");
        })
        .catch(() => {
            alert("❌ خطا در کپی کردن.");
        });
}

// نمایش آرشیو
const archiveList = document.querySelector(".archive ul");

if (archiveList) {
    archiveList.innerHTML = "";

    updates.forEach(item => {
        archiveList.innerHTML += `
            <li>${item.date} - ${item.ips.length} IP</li>
        `;
    });
}

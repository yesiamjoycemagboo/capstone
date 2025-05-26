document.addEventListener("DOMContentLoaded", function () {
    const infoBtn = document.getElementById("infoBtn");
    const devBtn = document.getElementById("devBtn");
    const popupOverlay = document.getElementById("popupOverlay");
    const closePopup = document.getElementById("closePopup");

    infoBtn.addEventListener("click", () => {
        popupOverlay.style.display = "flex";
        document.getElementById("popupWindow").innerHTML = `
            <button class="close-btn" id="closePopup">&times;</button>
            <h1 style="
                font-family: Horizon;
                font-size: 52px;
                text-align: center;
                margin-top: 30px;
            ">ABOUT</h1>
            <p style="
                font-family: PlayfairDisplay;
                font-size: 24px;
                line-height: 1.6;
                margin-top: 20px;
                text-align: justify;
            ">
                InstruMentor is an educational setup designed to help BS ICE students learn instrumentation and control systems in a hands-on way. Our goal is to make learning more interactive and practical by allowing students to set up their own experiments based on their learning needs. This approach helps develop important skills like critical thinking, problem-solving, and hands-on experience with real industrial equipment. With InstruMentor, students can gain the knowledge and confidence they need for a successful career in the instrumentation and control industry.
            </p>
        `;
        bindCloseBtn();
    });
    
    

    devBtn.addEventListener("click", () => {
        const names = [
            "ARIEL JAY<br>GUMAPAC",
            "BUSH BILLY<br>ILAGAN",
            "JOYCE<br>MAGBOO",
            "ALTHEA NICHOLE MANALO",
            "CKOBE JEANTRY TATLONGHARI"
        ];
    
        const roles = [
            "Member",
            "Member",
            "Project Lead",
            "Member",
            "Member"
        ];
    
        popupOverlay.style.display = "flex";
        document.getElementById("popupWindow").innerHTML = `
            <button class="close-btn" id="closePopup">&times;</button>
            <h1 style="
                font-family: Horizon;
                font-size: 52px;
                text-align: center;
                margin-top: 30px;
            ">DEVELOPERS</h1>
    
            <div style="
                display: flex;
                justify-content: center;
                align-items: flex-start;
                margin-top: 40px;
                gap: 5px;
            ">
                ${names.map((name, index) => `
                    <div style="
                        width: 125px;
                        height: 300px;
                        background-color: #051d40;
                        border-radius: 60px;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 10px;
                        box-sizing: border-box;
                    ">
                        <div style="
                            width: 100px;
                            height: 100px;
                            border: 5px solid #17e3b2;
                            border-radius: 50%;
                            background-image: url('profile_0${index + 1}.jpg');
                            background-size: cover;
                            background-position: center;
                        "></div>
    
                        <div style="height: 30px;"></div>
    
                        <div style="
                            font-family: 'Almarai-Bold';
                            font-size: 13px;
                            color: white;
                            text-align: center;
                            padding: 0 5px;
                            line-height: 1.2;
                        ">
                            ${name}
                        </div>
    
                        <div style="height: 30px;"></div>
    
                        <div style="
                            font-family: 'Almarai-Bold';
                            font-size: 10px;
                            color: #17e3b2;
                            text-align: center;
                        ">
                            ${roles[index]}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        bindCloseBtn();
    });
    
    
    
    

    function bindCloseBtn() {
        document.getElementById("closePopup").addEventListener("click", () => {
            popupOverlay.style.display = "none";
        });
    }
});

// home.js
document.querySelector('.access-button').addEventListener('click', () => {
    const searchValue = document.querySelector('.search-box').value.trim();
    if (searchValue.toLowerCase() === "admin") {
        window.location.href = "admin.html";
    } else {
        localStorage.setItem('searchKey', searchValue);
        window.location.href = 'view_data.html';
    }
});

function handleAccess() {
    const searchValue = document.querySelector('.search-box').value.trim();
    
    if (searchValue === "") {
        alert("Please enter a name before proceeding.");
        return;
    }

    if (searchValue.toLowerCase() === "admin") {
        window.location.href = "admin.html";
    } else {
        localStorage.setItem('searchKey', searchValue);
        window.location.href = 'view_data.html';
    }
}


document.querySelector('.access-button').addEventListener('click', handleAccess);

document.querySelector('.search-box').addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        handleAccess();
    }
});

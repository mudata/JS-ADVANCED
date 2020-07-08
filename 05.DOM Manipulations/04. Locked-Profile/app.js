function lockedProfile() {
    let butons = document.getElementsByTagName("button");

    butons[0].addEventListener("click", function () {
        let elems = document.getElementsByName("user1Locked");
        butons[0].disabled = false;
        if (elems[0].checked === true) {
            console.log("checked");
            butons[0].disabled = true;

        } else if (elems[1].checked === true) {
            console.log("uncheked");

            if (butons[0].textContent === "Hide it") {
                butons[0].textContent = "Show more";
                document.getElementById("user1HiddenFields").style.display = "none";
            }
            else {
                document.getElementById("user1HiddenFields").style.display = "block";
                butons[0].textContent = "Hide it";
            }

        }

    });
    butons[1].addEventListener("click", function () {
        let elems2 = document.getElementsByName("user2Locked");
        if (elems2[0].checked === true) {
            console.log("checked");
            console.log("checked");
            butons[1].disabled = true;
        } else {
            console.log("uncheked");

            if (butons[1].textContent === "Hide it") {
                butons[1].textContent = "Show more";
                document.getElementById("user2HiddenFields").style.display = "none";
            }
            else {
                document.getElementById("user2HiddenFields").style.display = "block";
                butons[1].textContent = "Hide it";
            }
        }
    });
    butons[2].addEventListener("click", function () {
        let elems3 = document.getElementsByName("user3Locked");
        if (elems3[0].checked === true) {
            console.log("checked");
            butons[2].disabled = true;
        } else {
            console.log("uncheked");

            if (butons[2].textContent === "Hide it") {
                butons[2].textContent = "Show more";
                document.getElementById("user3HiddenFields").style.display = "none";
            }
            else {
                document.getElementById("user3HiddenFields").style.display = "block";
                butons[2].textContent = "Hide it";
            }
        }
    });

}
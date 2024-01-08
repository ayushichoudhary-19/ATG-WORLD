const groupButton = document.getElementById('groupButton');
let isJoining = true;

function toggleGroupStatus() {
    if (isJoining) {
        groupButton.innerHTML = '<div style="display: flex;align-items: center"><img src="assets/leaveicon.svg"">Leave Group</div>';
        groupButton.classList.add('leave');
    } else {
        groupButton.innerHTML = '<div style="display: flex;align-items: center"><img src="assets/joingrp.svg">Join Group</div>';
        groupButton.classList.remove('leave');
    }

    isJoining = !isJoining;
}

function toggleJoin(button) {
    if (button.classList.contains("joined")) {
        button.classList.remove("joined");
        button.textContent = "Join Group";
    } else {
        button.classList.add("joined");
        button.textContent = "Leave Group";
    }
}
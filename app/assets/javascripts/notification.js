const notifications = document.querySelectorAll('.notification');
notifications.forEach((notif) => notif.addEventListener("animationend", function() {
  notif.remove();
}));

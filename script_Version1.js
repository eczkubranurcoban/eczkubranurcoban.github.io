// Form gönderildiğinde ekrana uyarı çıkartır
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mesajınız gönderildi! Teşekkürler.");
});
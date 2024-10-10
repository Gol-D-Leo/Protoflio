// الحصول على عنصر الكانفاس
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// تعيين عرض وارتفاع الكانفاس
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// إنشاء مصفوفة من الأحرف
const characters = [
  "0",
  "1",
];

// إنشاء مصفوفة من الأعمدة
const columns = Math.floor(canvasWidth / 20);

// تهيئة مواضع Y للأعمدة
const yPositions = [];

for (let i = 0; i < columns; i++) {
  yPositions[i] = Math.random() * canvasHeight;
}

// تحديث الرسوم المتحركة للمصفوفة
function updateMatrix() {
  // تعيين لون الخلفية
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // تعيين لون النص والخط
  ctx.fillStyle = "#00ff00";
  ctx.font = "12px monospace";

  // التكرار عبر كل عمود
  for (let i = 0; i < columns; i++) {
    // اختيار حرف عشوائي من المصفوفة
    const character = characters[Math.floor(Math.random() * characters.length)];

    // تعيين موضع Y للعمود الحالي
    const y = yPositions[i];

    // رسم الحرف في الموضع الحالي
    ctx.fillText(character, i * 20, y);

    // تحريك العمود لأسفل بمقدار 20 وحدة
    yPositions[i] += 20;

    // إعادة تعيين الموضع إذا وصل إلى أسفل الكانفاس
    if (yPositions[i] > canvasHeight && Math.random() > 0.98) {
      yPositions[i] = 0;
    }
  }
}

// عرض الرسوم المتحركة للمصفوفة
function renderMatrix() {
  requestAnimationFrame(renderMatrix);
  updateMatrix();
}

// بدء الرسوم المتحركة
renderMatrix();

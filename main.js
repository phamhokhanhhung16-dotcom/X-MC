// Dữ liệu thông báo mục vụ đặc trưng cho Giáo xứ Bà Điểm
const notices = [
    {
        id: 1,
        title: "Đăng ký tham gia Lớp Giáo lý Dự tòng & Hôn nhân khóa mới",
        date: "11/09/2026",
        category: "Giáo lý",
        summary: "Văn phòng giáo lý bắt đầu phát đơn và tiếp nhận hồ sơ từ nay đến hết Chúa Nhật cuối tháng. Xin liên hệ văn phòng giáo xứ."
    },
    {
        id: 2,
        title: "Chương trình Bác ái Mùa Thu của Ban Caritas Giáo xứ",
        date: "08/09/2026",
        category: "Bác ái",
        summary: "Ban Bác ái Caritas Bà Điểm tiếp nhận gạo và quà để gửi đến các gia đình có hoàn cảnh khó khăn trên địa bàn ấp Nam Lân."
    },
    {
        id: 3,
        title: "Lịch giải tội chuẩn bị lễ bổn mạng các giới",
        date: "04/09/2026",
        category: "Phụng vụ",
        summary: "Quý Cha sẽ ngồi tòa giải tội vào các buổi chiều sau thánh lễ từ Thứ Tư đến Thứ Sáu trong tuần."
    }
];

function renderNotices(items) {
    const container = document.getElementById("church-notices");
    if (!container) return;

    container.innerHTML = items.map((item) => `
    <article class="bg-white p-4 md:p-5 rounded-xl border border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:border-amber-400 transition shadow-sm">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-semibold bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">${item.category}</span>
          <span class="text-xs text-stone-400">${item.date}</span>
        </div>
        <h3 class="text-sm md:text-base font-semibold text-stone-800">${item.title}</h3>
        <p class="text-xs text-stone-600">${item.summary}</p>
      </div>
      <button type="button" class="self-start md:self-center text-xs font-semibold text-amber-800 hover:text-amber-900 whitespace-nowrap">
        Xem chi tiết →
      </button>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderNotices(notices);
});

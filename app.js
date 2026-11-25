/**
 * 嶼光珈琲 Lumière Isle Café
 * 商業設計系 自然科學與人工智慧 期末專案主邏輯
 * 學生：11533208 邱也庭、黃容媗
 */

// ======================== INITIAL DEMO DATA ========================
const DEFAULT_MENU_ITEMS = [
  {
    id: "item-1",
    name: "日落海岸・衣索比亞 耶加雪菲",
    eng: "Sunset Isle Yirgacheffe G1",
    category: "pourover",
    price: 180,
    tags: ["淺焙", "茉莉花香", "蜜漬檸檬", "伯爵蜂蜜"],
    desc: "高海拔水洗處理，入口呈現優雅的茉莉白花香與橙花甜感，尾韻帶出細緻的伯爵紅茶風味。",
    status: "available",
    image: "☕"
  },
  {
    id: "item-2",
    name: "浪潮之聲・肯亞 AA 涅里水洗",
    eng: "Ocean Wave Kenya AA Nyeri",
    category: "pourover",
    price: 200,
    tags: ["淺中焙", "黑醋栗", "小紅莓", "明亮果酸"],
    desc: "標誌性黑醋栗與莓果酸香，汁液感豐沛如海浪拍岸，乾淨度極高，層次鮮明。",
    status: "available",
    image: "☕"
  },
  {
    id: "item-3",
    name: "暮光沉木・哥倫比亞 藝妓日曬",
    eng: "Twilight Gesha Natural",
    category: "pourover",
    price: 260,
    tags: ["限量精品", "水蜜桃", "佛手柑", "熟成熱帶水果"],
    desc: "慢速日曬處理莊園藝妓，撲鼻而來的芒果、水蜜桃與佛手柑香氣，甜感飽滿持久。",
    status: "available",
    image: "✨"
  },
  {
    id: "item-4",
    name: "海鹽焦糖厚乳燕麥拿鐵",
    eng: "Sea Salt Caramel Oat Latte",
    category: "espresso",
    price: 170,
    tags: ["招牌人氣", "Oatly燕麥奶", "自熬海鹽焦糖", "綿密拉花"],
    desc: "精選中深焙堅果香濃縮，搭配自製法國鹽之花慢熬焦糖與特濃燕麥奶，甜而不膩。",
    status: "available",
    image: "🥛"
  },
  {
    id: "item-5",
    name: "島嶼經典馥芮白 (Flat White)",
    eng: "Lumière Classic Flat White",
    category: "espresso",
    price: 150,
    tags: ["雙份精萃濃縮", "細緻微奶泡", "深邃堅果可可"],
    desc: "雙份 Ristretto 濃縮與極薄微奶泡的黃金交融，比一般拿鐵更能品嚐到深沉的咖啡脂香。",
    status: "available",
    image: "☕"
  },
  {
    id: "item-6",
    name: "蔚藍海岸・西西里海風氣泡特調",
    eng: "Ocean Breeze Sicilian Espresso Tonic",
    category: "signature",
    price: 160,
    tags: ["清爽氣泡", "小農手榨黃檸檬", "現磨檸檬皮屑"],
    desc: "鮮榨黃檸檬汁搭配氣泡水，緩緩注入單品濃縮咖啡，宛若在舌尖激盪出清涼海風。",
    status: "available",
    image: "🫧"
  },
  {
    id: "item-7",
    name: "暮色微光・煙燻海鹽焙茶拿鐵",
    eng: "Smoky Hojicha Sea Salt Cream",
    category: "signature",
    price: 165,
    tags: ["京都宇治焙茶", "無咖啡因", "厚海鹽奶蓋"],
    desc: "炭火直焙京都宇治焙茶，頂部覆蓋以北海道鮮奶油打發的微鹹海鹽雲朵奶蓋。",
    status: "available",
    image: "🍵"
  },
  {
    id: "item-8",
    name: "焦糖海鹽蘭姆巴斯克乳酪蛋糕",
    eng: "Sea Salt Rum Basque Cheesecake",
    category: "dessert",
    price: 160,
    tags: ["每日限量", "流心半熟", "日本十勝乳酪"],
    desc: "高溫炙烤出深琥珀色焦香外皮，中心保留絲滑半熟流心，微量陳年蘭姆酒引出成熟奶香。",
    status: "available",
    image: "🍰"
  },
  {
    id: "item-9",
    name: "小山園抹茶千層酥派",
    eng: "Matcha Mille-Feuille Pastry",
    category: "dessert",
    price: 180,
    tags: ["法式手作", "小山園若竹", "酥脆折疊"],
    desc: "72折手工酥皮夾入濃郁微苦的小山園抹茶卡士達，口感輕脆、回甘綿長。",
    status: "available",
    image: "🍃"
  },
  {
    id: "item-10",
    name: "煙燻鮭魚酸種酪梨開放三明治",
    eng: "Smoked Salmon Avocado Sourdough",
    category: "brunch",
    price: 240,
    tags: ["天然酵母酸種", "新鮮酪梨泥", "挪威冷燻鮭魚"],
    desc: "自培酵母裸麥酸種麵包烘烤酥脆，抹上厚層蒔蘿檸檬酪梨醬，佐挪威空運冷燻鮭魚。",
    status: "available",
    image: "🥪"
  },
  {
    id: "item-11",
    name: "松露野菇滑蛋可頌堡",
    eng: "Truffle Mushroom Scrambled Croissant",
    category: "brunch",
    price: 210,
    tags: ["法國AOP奶油", "黑松露油", "有機放牧蛋"],
    desc: "蜂巢結構酥脆可頌，搭配黑松露炒野菇與嫩滑歐姆蛋，早午餐最滿足的靈魂選擇。",
    status: "available",
    image: "🥐"
  },
  {
    id: "item-12",
    name: "海風冰滴單品冷萃 (季節限量)",
    eng: "Ocean Cold Drip Reserve",
    category: "pourover",
    price: 190,
    tags: ["慢滴8小時", "低溫發酵", "威士忌酒香微醺"],
    desc: "每秒一滴慢速萃取，於低溫冷藏發酵 48 小時，散發迷人威士忌熟成酒香。",
    status: "soldout",
    image: "🧊"
  }
];

const DEFAULT_RESERVATIONS = [
  {
    id: "RES-8801",
    name: "林小姐",
    phone: "0912-345-678",
    guests: "2",
    date: "2026-11-26",
    time: "15:00",
    zone: "海景窗邊景觀區",
    notes: "希望靠近窗邊、有拍照需求",
    status: "confirmed"
  },
  {
    id: "RES-8802",
    name: "張先生",
    phone: "0928-888-999",
    guests: "4",
    date: "2026-11-27",
    time: "11:30",
    zone: "綠植微風戶外庭院",
    notes: "攜帶一隻柴犬（已備牽繩）",
    status: "confirmed"
  },
  {
    id: "RES-8803",
    name: "陳設計師",
    phone: "0933-112-233",
    guests: "1",
    date: "2026-11-25",
    time: "13:30",
    zone: "靜謐木桌閱讀工作區",
    notes: "需要插座敲電腦做報告",
    status: "pending"
  }
];

const DEFAULT_ANNOUNCEMENT = "🍂 迎秋限定：藝妓手沖搭配焦糖海鹽巴斯克，平日享第二件 85 折優惠！";

// ======================== STATE STORE ========================
let state = {
  menuItems: [],
  reservations: [],
  cart: [],
  announcement: "",
  activeCategory: "all",
  activeView: "customer", // 'customer' or 'admin'
  quizAnswers: {},
  currentItemModalItem: null,
  modalQty: 1
};

// ======================== INITIALIZATION ========================
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  setupEventListeners();
  renderApp();
  initReservationDateConstraint();
});

function loadData() {
  const savedMenu = localStorage.getItem("lumiere_menu");
  state.menuItems = savedMenu ? JSON.parse(savedMenu) : DEFAULT_MENU_ITEMS;

  const savedRes = localStorage.getItem("lumiere_reservations");
  state.reservations = savedRes ? JSON.parse(savedRes) : DEFAULT_RESERVATIONS;

  const savedAnnounce = localStorage.getItem("lumiere_announcement");
  state.announcement = savedAnnounce || DEFAULT_ANNOUNCEMENT;

  const savedCart = localStorage.getItem("lumiere_cart");
  state.cart = savedCart ? JSON.parse(savedCart) : [];
}

function saveData(key) {
  if (key === "menu" || !key) {
    localStorage.setItem("lumiere_menu", JSON.stringify(state.menuItems));
  }
  if (key === "reservations" || !key) {
    localStorage.setItem("lumiere_reservations", JSON.stringify(state.reservations));
  }
  if (key === "announcement" || !key) {
    localStorage.setItem("lumiere_announcement", state.announcement);
  }
  if (key === "cart" || !key) {
    localStorage.setItem("lumiere_cart", JSON.stringify(state.cart));
  }
}

function resetToDefaultData() {
  if (confirm("確定要重置為初始範例展示資料嗎？此操作將恢復預設的 12 道菜單與 3 筆預約。")) {
    state.menuItems = JSON.parse(JSON.stringify(DEFAULT_MENU_ITEMS));
    state.reservations = JSON.parse(JSON.stringify(DEFAULT_RESERVATIONS));
    state.announcement = DEFAULT_ANNOUNCEMENT;
    state.cart = [];
    saveData();
    renderApp();
    showToast("已成功重置為展示預設資料！", "success");
  }
}

function setupEventListeners() {
  // Mobile nav toggling
  const mobileBtn = document.getElementById("mobile-menu-btn");
  if (mobileBtn) {
    mobileBtn.addEventListener("click", toggleMobileNav);
  }
}

// ======================== RENDER MAIN ========================
function renderApp() {
  renderAnnouncement();
  renderMenuCounts();
  renderMenuItems();
  renderCart();
  renderAdminDashboard();
}

function renderAnnouncement() {
  const banner = document.getElementById("promo-text");
  if (banner) banner.textContent = state.announcement;
  const adminInput = document.getElementById("admin-banner-input");
  if (adminInput) adminInput.value = state.announcement;
}

// ======================== CATEGORY & MENU RENDERING ========================
function renderMenuCounts() {
  const counts = {
    all: state.menuItems.length,
    pourover: 0,
    espresso: 0,
    signature: 0,
    dessert: 0,
    brunch: 0
  };

  state.menuItems.forEach(item => {
    if (counts[item.category] !== undefined) counts[item.category]++;
  });

  Object.keys(counts).forEach(cat => {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = counts[cat];
  });
}

function setCategoryFilter(category) {
  state.activeCategory = category;
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.classList.remove("border-brand-espresso", "bg-brand-espresso", "text-white");
    pill.classList.add("border-brand-border", "bg-white", "text-brand-espresso");
  });

  const activePill = event ? event.target.closest(".cat-pill") : null;
  if (activePill) {
    activePill.classList.remove("border-brand-border", "bg-white", "text-brand-espresso");
    activePill.classList.add("border-brand-espresso", "bg-brand-espresso", "text-white");
  }

  filterMenuItems();
}

function filterMenuItems() {
  const query = (document.getElementById("menu-search-input")?.value || "").trim().toLowerCase();
  const category = state.activeCategory;

  const filtered = state.menuItems.filter(item => {
    const matchCat = (category === "all" || item.category === category);
    const matchQuery = !query || 
      item.name.toLowerCase().includes(query) ||
      (item.eng && item.eng.toLowerCase().includes(query)) ||
      (item.desc && item.desc.toLowerCase().includes(query)) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(query)));
    return matchCat && matchQuery;
  });

  renderGrid(filtered);
}

function renderMenuItems() {
  filterMenuItems();
}

function renderGrid(items) {
  const grid = document.getElementById("menu-grid");
  const empty = document.getElementById("menu-empty");
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.classList.remove("hidden");
    return;
  }

  if (empty) empty.classList.add("hidden");

  grid.innerHTML = items.map(item => {
    const isSoldOut = item.status === "soldout";
    const tagsHtml = (item.tags || []).map(t => 
      `<span class="bg-brand-cream text-[11px] text-brand-espresso/80 border border-brand-border/70 px-2 py-0.5 rounded-md font-medium">${t}</span>`
    ).join("");

    return `
      <div class="bg-white rounded-3xl border border-brand-border p-5 flex flex-col justify-between hover:border-brand-amber/60 hover:shadow-lg transition-all duration-300 group ${isSoldOut ? 'opacity-70' : ''}">
        
        <div>
          <!-- Header info & status -->
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs uppercase tracking-wider text-brand-amber font-semibold">${getCategoryName(item.category)}</span>
            ${isSoldOut 
              ? `<span class="bg-rose-100 text-rose-600 text-[10px] font-bold px-2 py-0.5 rounded-full">已售完 Sold Out</span>`
              : `<span class="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>供應中</span>`
            }
          </div>

          <!-- Name & English Subtitle -->
          <h3 class="font-serif-tc text-lg font-bold text-brand-espresso group-hover:text-brand-amber transition-colors">
            ${item.name}
          </h3>
          <p class="text-[11px] text-brand-espresso/40 italic mb-3 font-display-en">${item.eng || ''}</p>

          <!-- Description -->
          <p class="text-xs text-brand-espresso/70 leading-relaxed font-light line-clamp-2 mb-4">
            ${item.desc || '精選原料，職人新鮮現做。'}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${tagsHtml}
          </div>
        </div>

        <!-- Footer: Price & CTA buttons -->
        <div class="pt-3 border-t border-brand-border/60 flex items-center justify-between">
          <div>
            <span class="text-xs text-brand-espresso/50">售價</span>
            <div class="font-serif-tc text-lg font-bold text-brand-espresso">NT$ ${item.price}</div>
          </div>

          <div class="flex items-center space-x-2">
            <button onclick="openItemModal('${item.id}')" class="px-3 py-1.5 rounded-xl border border-brand-border hover:border-brand-amber text-xs font-medium text-brand-espresso transition-colors">
              詳情
            </button>
            <button onclick="quickAddToCart('${item.id}')" ${isSoldOut ? 'disabled' : ''} class="px-3.5 py-1.5 rounded-xl bg-brand-amber hover:bg-brand-amberLight disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-xs font-semibold flex items-center space-x-1 transition-all shadow-sm">
              <i class="fa-solid fa-plus text-[10px]"></i>
              <span>點餐</span>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join("");
}

function getCategoryName(cat) {
  const map = {
    pourover: "手沖單品",
    espresso: "義式經典",
    signature: "季節特調",
    dessert: "手作甜點",
    brunch: "輕食早午餐"
  };
  return map[cat] || cat;
}

// ======================== ITEM MODAL & CUSTOMIZATION ========================
function openItemModal(itemId) {
  const item = state.menuItems.find(i => i.id === itemId);
  if (!item) return;

  state.currentItemModalItem = item;
  state.modalQty = 1;

  document.getElementById("modal-category").textContent = getCategoryName(item.category);
  document.getElementById("modal-title").textContent = item.name;
  document.getElementById("modal-eng").textContent = item.eng || "";
  document.getElementById("modal-desc").textContent = item.desc || "";
  document.getElementById("modal-qty").textContent = "1";
  
  // reset options
  const defaultTemp = document.querySelector('input[name="opt-temp"][value="熱飲 (Hot)"]');
  if (defaultTemp) defaultTemp.checked = true;
  const defaultSugar = document.querySelector('input[name="opt-sugar"][value="無糖 (Sugar-free)"]');
  if (defaultSugar) defaultSugar.checked = true;
  const oatEl = document.getElementById("opt-oatmilk");
  if (oatEl) oatEl.checked = false;
  const shotEl = document.getElementById("opt-shot");
  if (shotEl) shotEl.checked = false;

  updateModalPrice();
  document.getElementById("item-modal").classList.remove("hidden");
}

function closeItemModal() {
  document.getElementById("item-modal").classList.add("hidden");
  state.currentItemModalItem = null;
}

function adjustModalQty(delta) {
  const newQty = state.modalQty + delta;
  if (newQty >= 1 && newQty <= 20) {
    state.modalQty = newQty;
    document.getElementById("modal-qty").textContent = newQty;
    updateModalPrice();
  }
}

function updateModalPrice() {
  if (!state.currentItemModalItem) return;
  let unit = state.currentItemModalItem.price;
  if (document.getElementById("opt-oatmilk")?.checked) unit += 20;
  if (document.getElementById("opt-shot")?.checked) unit += 30;

  const total = unit * state.modalQty;
  const priceEl = document.getElementById("modal-total-price");
  if (priceEl) priceEl.textContent = `NT$ ${total}`;
}

// Update modal price when add-on toggled
document.addEventListener("change", (e) => {
  if (e.target.id === "opt-oatmilk" || e.target.id === "opt-shot") {
    updateModalPrice();
  }
});

function confirmAddToCart() {
  const item = state.currentItemModalItem;
  if (!item) return;

  if (item.status === "soldout") {
    showToast("該品項已售完，暫無法加購！", "error");
    return;
  }

  const temp = document.querySelector('input[name="opt-temp"]:checked')?.value || "熱飲";
  const sugar = document.querySelector('input[name="opt-sugar"]:checked')?.value || "無糖";
  const oat = document.getElementById("opt-oatmilk")?.checked || false;
  const shot = document.getElementById("opt-shot")?.checked || false;

  let unitPrice = item.price;
  const notes = [];
  notes.push(temp);
  notes.push(sugar);
  if (oat) { unitPrice += 20; notes.push("升級燕麥奶 (+20)"); }
  if (shot) { unitPrice += 30; notes.push("追加一份濃縮 (+30)"); }

  const cartEntry = {
    cartId: "cart-" + Date.now(),
    itemId: item.id,
    name: item.name,
    unitPrice: unitPrice,
    qty: state.modalQty,
    options: notes.join(" / ")
  };

  state.cart.push(cartEntry);
  saveData("cart");
  renderCart();
  closeItemModal();
  showToast(`已將 ${item.name} (${state.modalQty} 份) 加入訂單！`, "success");
}

function quickAddToCart(itemId) {
  const item = state.menuItems.find(i => i.id === itemId);
  if (!item) return;

  if (item.status === "soldout") {
    showToast("該品項已售完，暫無法加購！", "error");
    return;
  }

  const cartEntry = {
    cartId: "cart-" + Date.now(),
    itemId: item.id,
    name: item.name,
    unitPrice: item.price,
    qty: 1,
    options: "經典風味推薦 (標準微甜/適溫)"
  };

  state.cart.push(cartEntry);
  saveData("cart");
  renderCart();
  showToast(`已將 ${item.name} 加入訂單！`, "success");
}

function quickOrderDefaultItem() {
  quickAddToCart("item-1");
}

// ======================== CART & CHECKOUT ========================
function toggleCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) drawer.classList.toggle("hidden");
}

function renderCart() {
  const countBadge = document.getElementById("cart-count-badge");
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);

  if (countBadge) {
    countBadge.textContent = totalQty;
    if (totalQty > 0) {
      countBadge.classList.remove("scale-0");
      countBadge.classList.add("scale-100");
    } else {
      countBadge.classList.remove("scale-100");
      countBadge.classList.add("scale-0");
    }
  }

  const container = document.getElementById("cart-items-container");
  const emptyState = document.getElementById("cart-empty-state");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    if (checkoutBtn) checkoutBtn.disabled = true;
    updateCartTotals(0, 0, 0);
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");
  if (checkoutBtn) checkoutBtn.disabled = false;

  let subtotal = 0;
  container.innerHTML = state.cart.map((entry, idx) => {
    const itemTotal = entry.unitPrice * entry.qty;
    subtotal += itemTotal;

    return `
      <div class="bg-white rounded-2xl border border-brand-border p-4 shadow-sm flex items-start justify-between gap-3">
        <div class="space-y-1">
          <h4 class="font-serif-tc font-bold text-sm text-brand-espresso">${entry.name}</h4>
          <p class="text-[11px] text-brand-espresso/60">${entry.options}</p>
          <div class="text-xs font-semibold text-brand-amber">NT$ ${entry.unitPrice} × ${entry.qty} = NT$ ${itemTotal}</div>
        </div>

        <div class="flex flex-col items-end space-y-2">
          <button onclick="removeCartItem(${idx})" class="text-brand-espresso/30 hover:text-rose-500 text-xs" title="移除">
            <i class="fa-regular fa-trash-can"></i>
          </button>
          <div class="flex items-center space-x-2 bg-brand-cream px-2 py-0.5 rounded-lg border border-brand-border text-xs font-bold">
            <button onclick="changeCartQty(${idx}, -1)" class="w-4 text-center hover:text-brand-amber">-</button>
            <span class="w-4 text-center">${entry.qty}</span>
            <button onclick="changeCartQty(${idx}, 1)" class="w-4 text-center hover:text-brand-amber">+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const discount = subtotal > 300 ? 30 : 0;
  const total = Math.max(0, subtotal - discount);
  updateCartTotals(subtotal, discount, total);
}

function changeCartQty(index, delta) {
  if (state.cart[index]) {
    state.cart[index].qty += delta;
    if (state.cart[index].qty <= 0) {
      state.cart.splice(index, 1);
    }
    saveData("cart");
    renderCart();
  }
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  saveData("cart");
  renderCart();
  showToast("已從購物車移除品項", "info");
}

function updateCartTotals(subtotal, discount, total) {
  document.getElementById("cart-subtotal").textContent = `NT$ ${subtotal}`;
  document.getElementById("cart-discount").textContent = `- NT$ ${discount}`;
  document.getElementById("cart-total").textContent = `NT$ ${total}`;
  const chkAmount = document.getElementById("chk-amount");
  if (chkAmount) chkAmount.textContent = `NT$ ${total}`;
}

function openCheckoutModal() {
  if (state.cart.length === 0) return;
  toggleCartDrawer();
  document.getElementById("checkout-modal").classList.remove("hidden");
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal").classList.add("hidden");
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("chk-name").value;
  const phone = document.getElementById("chk-phone").value;
  const time = document.getElementById("chk-time").value;
  const pay = document.querySelector('input[name="chk-pay"]:checked')?.value || "現場付款";

  closeCheckoutModal();

  // Clear cart
  state.cart = [];
  saveData("cart");
  renderCart();

  const code = "#ORD-" + Math.floor(1000 + Math.random() * 9000);
  document.getElementById("success-title").textContent = "外帶點單成功！";
  document.getElementById("success-code").textContent = code;
  document.getElementById("success-name").textContent = `${name} (${phone})`;
  document.getElementById("success-details").innerHTML = `
    預計取餐：<strong class="text-brand-espresso">${time}</strong><br>
    付款方式：${pay}<br>
    餐點現做中，請至現場吧檯出示取餐號碼。
  `;
  document.getElementById("success-modal").classList.remove("hidden");
}

// ======================== ONLINE TABLE RESERVATION ========================
function initReservationDateConstraint() {
  const dateInput = document.getElementById("res-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    dateInput.value = today;
  }
}

function handleReservationSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("res-name").value.trim();
  const phone = document.getElementById("res-phone").value.trim();
  const guests = document.getElementById("res-guests").value;
  const date = document.getElementById("res-date").value;
  const time = document.getElementById("res-time").value;
  const zone = document.getElementById("res-zone").value;
  const notes = document.getElementById("res-notes").value.trim();

  // 防呆驗證
  if (!date) {
    showToast("請選擇有效的預約日期！", "error");
    return;
  }

  const newRes = {
    id: "RES-" + Math.floor(1000 + Math.random() * 9000),
    name: name,
    phone: phone,
    guests: guests,
    date: date,
    time: time,
    zone: zone,
    notes: notes || "無特殊備註",
    status: "confirmed"
  };

  // Add to state and save (CRUD - Create)
  state.reservations.unshift(newRes);
  saveData("reservations");
  renderAdminDashboard();

  // Reset form
  document.getElementById("reservation-form").reset();
  initReservationDateConstraint();

  // Show Success Confirmation Modal
  document.getElementById("success-title").textContent = "座席預約成功！";
  document.getElementById("success-code").textContent = newRes.id;
  document.getElementById("success-name").textContent = `${name} (${guests}位)`;
  document.getElementById("success-details").innerHTML = `
    預約時段：<strong class="text-brand-espresso">${date} ${time}</strong><br>
    安排區域：<strong class="text-brand-amber">${zone}</strong><br>
    座位已保留 15 分鐘，資料已即時同步至後台管理系統！
  `;
  document.getElementById("success-modal").classList.remove("hidden");
}

function closeSuccessModal() {
  document.getElementById("success-modal").classList.add("hidden");
}

// ======================== INTERACTIVE QUIZ ========================
function handleQuizAnswer(step, val) {
  state.quizAnswers[step] = val;

  if (step === 1) {
    document.getElementById("quiz-step-1").classList.add("hidden");
    document.getElementById("quiz-step-2").classList.remove("hidden");
  } else if (step === 2) {
    document.getElementById("quiz-step-2").classList.add("hidden");
    document.getElementById("quiz-step-3").classList.remove("hidden");
  } else if (step === 3) {
    document.getElementById("quiz-step-3").classList.add("hidden");
    calculateQuizResult();
  }
}

function calculateQuizResult() {
  const { 1: roast, 2: texture, 3: vibe } = state.quizAnswers;
  let matchId = "item-1";
  let title = "日落海岸・衣索比亞 耶加雪菲";
  let desc = "你的靈魂渴望清澈與靈感！淺焙手沖的茉莉花與柑橘明亮酸香，能為你喚醒沉睡的創意神經。";
  let tag = "淺焙手沖・靈感首選";
  let price = 180;
  let icon = "☕";

  if (texture === "milk") {
    matchId = "item-4";
    title = "海鹽焦糖厚乳燕麥拿鐵";
    desc = "你需要被溫柔包覆的綿密幸福感！自熬焦糖海鹽與特濃燕麥奶的絲滑交織，能撫平所有疲憊。";
    tag = "厚乳拿鐵・療癒犒賞";
    price = 170;
    icon = "🥛";
  } else if (texture === "creative" || vibe === "relax") {
    matchId = "item-6";
    title = "蔚藍海岸・西西里海風氣泡特調";
    desc = "面向大海就該來杯沁涼暢快！手榨黃檸檬清香與微氣泡濃縮，讓你瞬間沐浴在微風日光中。";
    tag = "清爽氣泡・海風特調";
    price = 160;
    icon = "🫧";
  } else if (roast === "dark" || vibe === "healing") {
    matchId = "item-8";
    title = "焦糖海鹽蘭姆巴斯克乳酪蛋糕 + 經典美式";
    desc = "深度醇厚的最佳伴侶！濃郁微苦的咖啡配上炙烤焦香半熟流心乳酪，是最完美的下午茶協奏。";
    tag = "手作甜點・極致療癒";
    price = 240;
    icon = "🍰";
  }

  state.matchedQuizItem = { id: matchId, title, price };

  document.getElementById("result-icon").textContent = icon;
  document.getElementById("result-title").textContent = title;
  document.getElementById("result-desc").textContent = desc;
  document.getElementById("result-tag").textContent = tag;
  document.getElementById("result-price").textContent = `NT$ ${price}`;

  document.getElementById("quiz-result").classList.remove("hidden");
}

function addQuizResultToCart() {
  if (state.matchedQuizItem) {
    quickAddToCart(state.matchedQuizItem.id);
  }
}

function resetQuiz() {
  state.quizAnswers = {};
  document.getElementById("quiz-result").classList.add("hidden");
  document.getElementById("quiz-step-2").classList.add("hidden");
  document.getElementById("quiz-step-3").classList.add("hidden");
  document.getElementById("quiz-step-1").classList.remove("hidden");
}

// ======================== ADMIN CRUD DASHBOARD ========================
function toggleAdminView() {
  const customerView = document.getElementById("customer-view");
  const adminView = document.getElementById("admin-view");
  const floatBtn = document.getElementById("floating-admin-toggle");
  const floatLabel = document.getElementById("floating-admin-label");

  if (state.activeView === "customer") {
    state.activeView = "admin";
    customerView.classList.add("hidden");
    adminView.classList.remove("hidden");
    if (floatBtn) {
      floatBtn.classList.remove("bg-brand-amber");
      floatBtn.classList.add("bg-brand-espresso");
    }
    if (floatLabel) floatLabel.textContent = "返回顧客前台";
    renderAdminDashboard();
    window.scrollTo({ top: 0, behavior: "smooth" });
    showToast("已切換至【後台資料管理中心 (CRUD)】", "info");
  } else {
    state.activeView = "customer";
    adminView.classList.add("hidden");
    customerView.classList.remove("hidden");
    if (floatBtn) {
      floatBtn.classList.remove("bg-brand-espresso");
      floatBtn.classList.add("bg-brand-amber");
    }
    if (floatLabel) floatLabel.textContent = "切換至後台 CRUD";
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function renderAdminDashboard() {
  // Update stats
  const statMenu = document.getElementById("stat-menu-count");
  if (statMenu) statMenu.textContent = state.menuItems.length;

  const statRes = document.getElementById("stat-res-count");
  if (statRes) statRes.textContent = state.reservations.length;

  const avgPrice = state.menuItems.length > 0 
    ? Math.round(state.menuItems.reduce((acc, cur) => acc + cur.price, 0) / state.menuItems.length)
    : 0;
  const statAvg = document.getElementById("stat-avg-price");
  if (statAvg) statAvg.textContent = `NT$ ${avgPrice}`;

  // Render Admin Menu Table (CRUD)
  const menuTbody = document.getElementById("admin-menu-tbody");
  if (menuTbody) {
    menuTbody.innerHTML = state.menuItems.map(item => {
      const isSoldOut = item.status === "soldout";
      return `
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="py-3 px-4">
            <div class="font-bold text-slate-900">${item.name}</div>
            <div class="text-[11px] text-slate-400 font-mono">${item.eng || item.id}</div>
          </td>
          <td class="py-3 px-4">
            <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px]">${getCategoryName(item.category)}</span>
          </td>
          <td class="py-3 px-4 font-bold text-slate-800">
            NT$ ${item.price}
          </td>
          <td class="py-3 px-4">
            <button onclick="toggleItemStockStatus('${item.id}')" class="px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${isSoldOut ? 'bg-rose-100 text-rose-700 hover:bg-rose-200' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'}">
              ${isSoldOut ? '✕ 已售完 (點擊切換供應)' : '✓ 供應中 (點擊標記售完)'}
            </button>
          </td>
          <td class="py-3 px-4 text-right space-x-2">
            <button onclick="openEditItemModal('${item.id}')" class="text-blue-600 hover:text-blue-800 font-medium">編輯</button>
            <button onclick="deleteMenuItem('${item.id}')" class="text-rose-600 hover:text-rose-800 font-medium">刪除</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  // Render Admin Reservation Table (CRUD)
  const resTbody = document.getElementById("admin-res-tbody");
  if (resTbody) {
    resTbody.innerHTML = state.reservations.map(res => {
      return `
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="py-3 px-4">
            <div class="font-bold text-slate-900">${res.name}</div>
            <div class="text-[11px] text-slate-400">${res.phone}</div>
          </td>
          <td class="py-3 px-4">
            <div class="text-slate-800">${res.date}</div>
            <div class="text-[11px] text-slate-500 font-semibold">${res.time}</div>
          </td>
          <td class="py-3 px-4">${res.guests} 位</td>
          <td class="py-3 px-4">
            <span class="bg-teal-50 text-teal-700 px-2 py-0.5 rounded text-[11px]">${res.zone}</span>
          </td>
          <td class="py-3 px-4 text-slate-500 max-w-xs truncate" title="${res.notes}">${res.notes}</td>
          <td class="py-3 px-4">
            <select onchange="updateReservationStatus('${res.id}', this.value)" class="text-[11px] border border-slate-300 rounded px-2 py-1 font-semibold focus:outline-none ${getStatusColor(res.status)}">
              <option value="confirmed" ${res.status === 'confirmed' ? 'selected' : ''}>已確認 (Confirmed)</option>
              <option value="seated" ${res.status === 'seated' ? 'selected' : ''}>已入座 (Seated)</option>
              <option value="pending" ${res.status === 'pending' ? 'selected' : ''}>待確認 (Pending)</option>
              <option value="cancelled" ${res.status === 'cancelled' ? 'selected' : ''}>已取消 (Cancelled)</option>
            </select>
          </td>
          <td class="py-3 px-4 text-right">
            <button onclick="deleteReservation('${res.id}')" class="text-rose-600 hover:text-rose-800 font-medium">刪除</button>
          </td>
        </tr>
      `;
    }).join("");
  }
}

function getStatusColor(status) {
  if (status === 'confirmed') return 'text-emerald-700 bg-emerald-50';
  if (status === 'seated') return 'text-blue-700 bg-blue-50';
  if (status === 'pending') return 'text-amber-700 bg-amber-50';
  return 'text-slate-400 bg-slate-100';
}

function saveAdminBanner() {
  const val = document.getElementById("admin-banner-input")?.value.trim();
  if (!val) {
    showToast("公告內容不能為空！", "error");
    return;
  }
  state.announcement = val;
  saveData("announcement");
  renderAnnouncement();
  showToast("首頁跑馬燈公告已即時更新！", "success");
}

// Menu CRUD: Add & Edit Modals
function openAddItemModal() {
  document.getElementById("admin-modal-title").textContent = "新增菜單品項";
  document.getElementById("admin-item-form").reset();
  document.getElementById("adm-item-id").value = "";
  document.getElementById("admin-item-modal").classList.remove("hidden");
}

function openEditItemModal(itemId) {
  const item = state.menuItems.find(i => i.id === itemId);
  if (!item) return;

  document.getElementById("admin-modal-title").textContent = "編輯菜單品項";
  document.getElementById("adm-item-id").value = item.id;
  document.getElementById("adm-item-name").value = item.name;
  document.getElementById("adm-item-eng").value = item.eng || "";
  document.getElementById("adm-item-category").value = item.category;
  document.getElementById("adm-item-price").value = item.price;
  document.getElementById("adm-item-tags").value = (item.tags || []).join(", ");
  document.getElementById("adm-item-desc").value = item.desc || "";
  document.getElementById("adm-item-status").value = item.status || "available";

  document.getElementById("admin-item-modal").classList.remove("hidden");
}

function closeAdminItemModal() {
  document.getElementById("admin-item-modal").classList.add("hidden");
}

function handleAdminItemSubmit(e) {
  e.preventDefault();
  const id = document.getElementById("adm-item-id").value;
  const name = document.getElementById("adm-item-name").value.trim();
  const eng = document.getElementById("adm-item-eng").value.trim();
  const category = document.getElementById("adm-item-category").value;
  const price = parseInt(document.getElementById("adm-item-price").value, 10);
  const tagsStr = document.getElementById("adm-item-tags").value;
  const tags = tagsStr ? tagsStr.split(",").map(t => t.trim()).filter(Boolean) : [];
  const desc = document.getElementById("adm-item-desc").value.trim();
  const status = document.getElementById("adm-item-status").value;

  if (id) {
    // Edit existing item (CRUD - Update)
    const index = state.menuItems.findIndex(i => i.id === id);
    if (index !== -1) {
      state.menuItems[index] = {
        ...state.menuItems[index],
        name, eng, category, price, tags, desc, status
      };
      showToast(`已成功更新品項：${name}`, "success");
    }
  } else {
    // Add new item (CRUD - Create)
    const newItem = {
      id: "item-" + Date.now(),
      name, eng, category, price, tags, desc, status,
      image: "☕"
    };
    state.menuItems.unshift(newItem);
    showToast(`已成功新增品項：${name}`, "success");
  }

  saveData("menu");
  closeAdminItemModal();
  renderAdminDashboard();
}

// Menu CRUD: Toggle Stock Status
function toggleItemStockStatus(itemId) {
  const item = state.menuItems.find(i => i.id === itemId);
  if (!item) return;

  item.status = item.status === "available" ? "soldout" : "available";
  saveData("menu");
  renderAdminDashboard();
  showToast(`已將 ${item.name} 狀態變更為：${item.status === 'soldout' ? '已售完' : '供應中'}`, "info");
}

// Menu CRUD: Delete
function deleteMenuItem(itemId) {
  const item = state.menuItems.find(i => i.id === itemId);
  if (!item) return;

  if (confirm(`確定要刪除「${item.name}」嗎？此操作將從前台即時移除。`)) {
    state.menuItems = state.menuItems.filter(i => i.id !== itemId);
    saveData("menu");
    renderAdminDashboard();
    showToast(`已刪除品項：${item.name}`, "info");
  }
}

// Reservation CRUD: Update Status
function updateReservationStatus(resId, newStatus) {
  const res = state.reservations.find(r => r.id === resId);
  if (res) {
    res.status = newStatus;
    saveData("reservations");
    renderAdminDashboard();
    showToast(`已將預約 ${resId} 狀態更新為 ${newStatus}`, "info");
  }
}

// Reservation CRUD: Delete
function deleteReservation(resId) {
  if (confirm(`確定要移除預約代號 ${resId} 嗎？`)) {
    state.reservations = state.reservations.filter(r => r.id !== resId);
    saveData("reservations");
    renderAdminDashboard();
    showToast(`已移除預約紀錄 ${resId}`, "info");
  }
}

// ======================== TOAST NOTIFICATION UTILITY ========================
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  const bg = type === "success" ? "bg-emerald-600" : (type === "error" ? "bg-rose-600" : "bg-brand-espresso");
  const icon = type === "success" ? "fa-circle-check" : (type === "error" ? "fa-circle-exclamation" : "fa-circle-info");

  toast.className = `${bg} text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-2 transform translate-y-2 opacity-0 transition-all duration-300 pointer-events-auto`;
  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  }, 10);

  // Remove after 3.5 seconds
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Mobile Nav Helper
function toggleMobileNav() {
  const nav = document.getElementById("mobile-nav");
  if (nav) nav.classList.toggle("hidden");
}

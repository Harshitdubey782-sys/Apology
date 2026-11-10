const openNoteButton = document.getElementById('open-note');
const letter = document.getElementById('letter');
const couponButton = document.getElementById('show-coupon');
const coupon = document.getElementById('coupon');

openNoteButton.addEventListener('click', () => {
  letter.hidden = false;
  openNoteButton.hidden = true;
  letter.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

couponButton.addEventListener('click', () => {
  coupon.hidden = !coupon.hidden;
  couponButton.textContent = coupon.hidden
    ? 'Achha, coupon bhi hai tere liye'
    : 'Hehe, ye raha tera coupon 🍟';
  if (!coupon.hidden) {
    coupon.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});

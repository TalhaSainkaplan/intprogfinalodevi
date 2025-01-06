function toggleAppointmentForm() {
  const form = document.getElementById('appointment-form');
  form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

function submitAppointment() {
  alert('Randevu talebiniz alınmıştır. En kısa sürede sizinle iletişime geçilecektir.');
  document.getElementById('appointment-form').reset();
  toggleAppointmentForm();
}

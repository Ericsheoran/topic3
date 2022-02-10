$('#navbar').load('navbar.html');
const Device = JSON.parse(localStorage.getItem('Device')) || [];


Device.forEach(function(device) {
  $('#Device tbody').append(`
    <tr>
      <td>${device.user}</td>
      <td>${device.number}</td>
      <td>${device.name}</td>
    </tr>`
  );
});

$('#add-device').on('click', function() {
    const user = $('#user').val();
    const number = $('#number').val();
    const name = $('#name').val();
    Device.push({ user, number, name });
    localStorage.setItem('Device', JSON.stringify(Device));
    location.href = '/';
});
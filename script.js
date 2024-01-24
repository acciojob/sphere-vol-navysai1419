function volume_sphere() {
  // Write your code here
  var radius = parseFloat(document.getElementById("radius").value);

  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the calculated volume in the volume input field
  document.getElementById("volume").value = volume.toFixed(2);
}

window.onload = function () {
  // Assign the volume_sphere function to the form's submit event
  document.getElementById('MyForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    volume_sphere(); // Call your function when the form is submitted
  });
};

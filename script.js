function volume_sphere() {
    //Write your code here
 var radius = parseFloat(document.getElementById("radius").value);


  // Calculate the volume of the sphere
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the calculated volume in the volume input field
  document.getElementById("volume").value = volume.toFixed(2);

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

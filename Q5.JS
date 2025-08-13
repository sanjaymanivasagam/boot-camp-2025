function calculateSphereVolume(radius)
 {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    return volume;
}
let radius = parseFloat(prompt("enter the radius of the SPHERE"));
let volume =calculateSphereVolume(radius);
console.log("Volume of the sphere with radius", radius, "is", volume.toFixed(2));
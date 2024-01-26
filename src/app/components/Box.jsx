import * as THREE from "three";

const box = new THREE.BoxGeometry(10, 10, 10);
const left = new THREE.MeshStandardMaterial({
  color: "rgb(32, 80, 100)",
  side: THREE.DoubleSide,
});
const right = new THREE.MeshStandardMaterial({
  color: "rgb(32, 80, 100)",
  side: THREE.DoubleSide,
});
const front = new THREE.MeshStandardMaterial({
  color: "rgb(110, 57, 43)",
  side: THREE.DoubleSide,
});
const back = new THREE.MeshStandardMaterial({
  color: "rgb(110, 57, 43)",
  side: THREE.DoubleSide,
});
const top = new THREE.MeshStandardMaterial({
  color: "rgb(19, 34, 61)",
  side: THREE.DoubleSide,
});
const bottom = new THREE.MeshStandardMaterial({
  color: "rgb(19, 34, 61)",
  side: THREE.DoubleSide,
});

export { box, left, right, front, back, top, bottom }
export function getStep() {
  return localStorage.getItem("step") || "1";
}

export function setStep(step) {
  localStorage.setItem("step", step);
}

export function clearStep() {
  localStorage.removeItem("step");
}
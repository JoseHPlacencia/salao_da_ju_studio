/**
 * Passagem do logo gigante da capa para o logo pequeno do topo.
 * A capa avisa quando o "Aura" terminou de encolher; o topo então mostra o seu logo.
 */
const EVENT = "aura:logo-docked";
let docked = false;

export function setHeroLogoDocked(value: boolean) {
  if (docked === value) return;
  docked = value;
  window.dispatchEvent(new CustomEvent<boolean>(EVENT, { detail: value }));
}

export function isHeroLogoDocked() {
  return docked;
}

export function onHeroLogoDocked(callback: (value: boolean) => void) {
  const handler = (e: Event) => callback((e as CustomEvent<boolean>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}

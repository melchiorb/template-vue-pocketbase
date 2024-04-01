import PocketBase from "pocketbase"

const pb = new PocketBase(import.meta.env.VITE_PB_URL)

export function usePB() {
  return {
    pb,
    col: pb.collection,
    auth: pb.authStore,
  }
}

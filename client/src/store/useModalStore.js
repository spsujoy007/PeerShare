import { create } from 'zustand'

export const useModalStore = create((set) => ({
  isOpen: false,
  text: '',
  fontSize: 20,
  openModal: (text, fontSize) => set({ isOpen: true, text, fontSize }),
  closeModal: () => set({ isOpen: false }),
}))

import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    activeIndex: 0,
    loadData: 10,
    visibleDotsRange: { start: 0, end: 4 },
  },
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
      const maxDots = 5;
      let start = Math.max(0, action.payload - 2);
      let end = start + maxDots - 1;
      if (end >= action.payload + 2) {
        end = action.payload + 2;
        start = Math.max(0, end - maxDots + 1);
      }
      state.visibleDotsRange = { start, end };
    },
    nextIndex: (state, action) => {
      const length = action.payload;
      state.activeIndex = (state.activeIndex + 1) % (length || 1);
      const maxDots = 5;
      let { start, end } = state.visibleDotsRange;
      if (state.activeIndex > end) {
        start = Math.max(0, state.activeIndex - 2);
        end = start + maxDots - 1;
      }
      state.visibleDotsRange = { start, end };
    },
    prevIndex: (state, action) => {
      const length = action.payload;
      state.activeIndex = (state.activeIndex - 1 + length) % (length || 1);
      const maxDots = 5;
      let { start, end } = state.visibleDotsRange;
      if (state.activeIndex < start) {
        end = Math.min(length - 1, state.activeIndex + 2);
        start = Math.max(0, end - maxDots + 1);
      }
      state.visibleDotsRange = { start, end };
    },
    loadMore: (state, action) => {
      state.loadData += 10;
    },
    resetCarousel: (state, action) => {
      const length = action.payload || 0;
      state.activeIndex = Math.min(state.activeIndex, Math.max(0, length - 1));
      const maxDots = 5;
      let start = Math.max(0, state.activeIndex - 2);
      let end = Math.min(length - 1, start + maxDots - 1);
      if (end < start) {
        start = Math.max(0, end - maxDots + 1);
      }
      state.visibleDotsRange = { start, end };
    },
  },
});

export const { setActiveIndex, nextIndex, prevIndex, loadMore, resetCarousel } =
  carouselSlice.actions;
export default carouselSlice.reducer;

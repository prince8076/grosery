import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  windowWidth: `${window.innerWidth}`,
  loginState: false,
  cartState: false,
  cartItemsCount: 0,
  stockReview: false,
  searchQuery: "",
  searchItems: [],
  recentSearches: JSON.parse(localStorage.getItem('recentSearches')) || [],
  loading: true,
  error: null,
  recommendations: [],
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  currentProduct: null
  // currentPage: 1,
  // hasMore: true,
}

// API Call
const fetchSearchData = createAsyncThunk(
  'general/fetchSearchData',
  async (searchText) => {
    try {
      const headers = new Headers({
        'Content-Type': 'application/json',
        'ModuleId': '1',
        'ZoneId': '[1]',
        'Latitude': localStorage.getItem('lat') || '21.1458004',
        'Longitude': localStorage.getItem('lng') || '79.0881546',
      });
      const response = await fetch(`https://6ammart-admin.6amtech.com/api/v1/items/item-or-store-search?name=${searchText}`, {
        method: 'GET',
        headers,
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const filteredData = data.items.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
      const recommendations = filteredData.slice(0, 5);
      return { filteredData, recommendations, hasMore: data.items.length > 0 };
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }
);

// Slice
const generalSlice = createSlice({
  name: "general",
  initialState: initialState,
  reducers: {
    setWindowWidth: (state, action) => {
      state.windowWidth = action.payload;
    },
    setLoginState: (state, action) => {
      state.loginState = action.payload;
    },
    setCartState: (state, action) => {
      state.cartState = action.payload;
    },
    setCartItemsCount: (state, action) => {
      state.cartItemsCount = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSearchItems: (state, action) => {
      state.searchItems = action.payload;
    },
    setStockReview: (state, action) => {
      state.stockReview = action.payload;
    },
    addRecentSearch: (state, action) => {
      const newSearch = action.payload;
      if (!state.recentSearches.includes(newSearch)) {
        state.recentSearches = [newSearch, ...state.recentSearches].slice(0, 8);
        localStorage.setItem('recentSearches', JSON.stringify(state.recentSearches));
      }
    },
    addtocart: (state, action) => {
      const newItem = action.payload;
      const existingItem = () => {
        if (state.cartItems && state.cartItems.length > 0) {
          return state.cartItems.find(item => item.product.id === newItem.product.id);
        } else {
          return false;
        }
      }
      // if cart item does not contain newitem
      if (!existingItem()) {
        state.cartItems.push(newItem);
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      } else {
        console.log("Already added to cart");
      }
    },

    incCart: (state, action) => {
      const incItem = action.payload;
      const index = state.cartItems.findIndex(item => item.product.id === incItem);
      if (index !== -1) {
        let oldval = state.cartItems[index].quantity
        state.cartItems[index].quantity = oldval + 1;
      } else {
        console.log('Product cart to increase not found');
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    decCart: (state, action) => {
      const decItem = action.payload;
      const index = state.cartItems.findIndex(item => item.product.id === decItem);

      if (index !== -1) {
        if (state.cartItems[index].quantity > 1) {
          state.cartItems[index].quantity -= 1;
        } else if (state.cartItems[index].quantity === 1) {
          console.log("delete executed");
          state.cartItems = state.cartItems.filter(item => item.product.id !== decItem);
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      } else {
        console.log('Product cart to decrease not found');
      }
    },
    removecart: (state, action) => {
      const deleteItem = action.payload;
      state.cartItems = state.cartItems.filter(x => x.product.id !== deleteItem.product.id);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    // removeOutOfStockItems: (state) => {
    //   state.cartItems = state.cartItems.filter(
    //     (item) => item.product.stock > 0
    //   );
    //   localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    // },


    clearRecentSearch: (state) => {
      state.recentSearches = [];
      localStorage.removeItem('recentSearches');
    },
    setRecommendations: (state, action) => {
      state.recommendations = action.payload
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload
    },


    // setPage: (state, action) => {
    //   state.currentPage = action.payload;
    // },
    // addSearchItems: (state, action) => {
    //   state.searchItems = [...state.searchItems, ...action.payload];
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchData.fulfilled, (state, action) => {
      state.searchItems = action.payload.filteredData;
      state.recommendations = action.payload.recommendations;
      state.loading = false;
      state.hasMore = action.payload.hasMore;
    });
    builder.addCase(fetchSearchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });
  },
});

export const generalReducer = generalSlice.reducer;
export const generalActions = { ...generalSlice.actions, fetchSearchData };
export const generalSelector = (state) => state.generalReducer;

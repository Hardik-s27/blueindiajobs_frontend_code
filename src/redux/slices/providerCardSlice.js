// import { createSlice } from "@reduxjs/toolkit";
// import {
//   addResourceCard,
//   editProfile,
//   editResourceCard,
//   getAllDistrict,
//   getAllJobRoles,
//   getAllState,
//   getAppliedJobsByUserId,
//   getCV,
//   getCVByUserId,
//   getHomeCount,
//   getProfile,
//   getProviderCard,
//   getProviderCardById,
//   getProviderCardWithSearch,
//   getResourceCategories,
//   providerSearch,
//   singleProviderResoCard,
//   getQuestionsOfQuiz,
//   getQuestionsOfPreJob,
//   getPartnersDetails,
// } from "../../services/providerService";
// import _ from "lodash";
// import { removeCookie } from "../../config/cookies";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";

// const initialState = {
//   isLoading: false,
//   isProviderLoading: false,
//   isFormLoading: false,
//   providerCards: {
//     next: "",
//     count: "",
//     data: [],
//   },
//   singleResoCard: [],
//   resourceCategories: [],
//   states: [],
//   districts: [],
//   profile: {},
//   cardDetails: {},
//   jobroles: [],
//   homePageCounts: {},
//   homeSearchCard: {
//     next: "",
//     count: "",
//     data: [],
//   },
//   CVRecord: {},
//   singleCVRecord: {},
//   pageCount: 1,
//   searchValue: {},
//   providerCardSlider: [],
//   isProfilePending: false,
//   quizQuestions: [],
//   partnerDetails: [],
// };

// //slice
// const providerCardSlice = createSlice({
//   name: "providercard",
//   initialState,
//   reducers: {
//     startLoading(state) {
//       state.isLoading = true;
//     },
//     stopLoading(state) {
//       state.isLoading = false;
//     },
//     startProviderLoading(state) {
//       state.isProviderLoading = true;
//     },
//     stopProviderLoading(state) {
//       state.isProviderLoading = false;
//     },
//     startFormLoading(state) {
//       state.isFormLoading = true;
//     },
//     stopFormLoading(state) {
//       state.isFormLoading = false;
//     },
//     usersSuccess: (state, action) => {
//       state.providerCards.data = [
//         ...state.providerCards.data,
//         ...action.payload.results,
//       ];
//       state.providerCards.count = action.payload.count;
//       state.providerCards.next = action.payload.next;
//       // state.isLoading = false;
//     },
//     removeUsersSuccess: (state, action) => {
//       state.providerCards.data = [];
//       state.providerCards.count = "";
//       state.providerCards.next = "";
//       // state.isLoading = false;
//     },
//     singResoCardSuccess: (state, action) => {
//       state.singleResoCard = action.payload;
//       // state.isLoading = false;
//     },
//     resourceCategorySuccess: (state, action) => {
//       state.resourceCategories = action.payload;
//       // state.isLoading = false;
//     },
//     stateSuccess: (state, action) => {
//       state.states = action.payload;
//       // state.isLoading = false;
//     },
//     districtSuccess: (state, action) => {
//       state.districts = action.payload;
//       // state.isLoading = false;
//     },
//     profileSuccess: (state, action) => {
//       state.profile = action.payload;
//       // state.isLoading = false;
//     },
//     isProfilePendingSuccess: (state, action) => {
//       state.isProfilePending = action.payload;
//       // state.isLoading = false;
//     },
//     cardDetailSuccess: (state, action) => {
//       state.cardDetails = action.payload;
//       // state.isLoading = false;
//     },
//     jobrolesSuccess: (state, action) => {
//       state.jobroles = action.payload;
//       // state.isLoading = false;
//     },
//     allAplliedJobs: (state, action) => {
//       state.jobroles = action.payload;
//       // state.isLoading = false;
//     },
//     homePageCountSuccess: (state, action) => {
//       state.homePageCounts = action.payload;
//       // state.isLoading = false;
//     },
//     // homeSearchSuccess: (state, action) => {
//     //   state.homeSearchCard = action.payload;
//     //   // state.isLoading = false;
//     // },
//     getCVSuccess: (state, action) => {
//       state.CVRecord = action.payload;
//       // state.isLoading = false;
//     },
//     getSingleCVSuccess: (state, action) => {
//       state.singleCVRecord = action.payload;
//       // state.isLoading = false;
//     },
//     clearResourcCategorySuccess: (state, action) => {
//       state.resourceCategories = action.payload;
//       // state.isLoading = false;
//     },
//     pageCountSuccess(state, action) {
//       // state.pageCount = action.payload;
//     },
//     homeSearchSuccess: (state, action) => {
//       state.homeSearchCard.data = [
//         ...state.homeSearchCard.data,
//         ...action.payload.results,
//       ];
//       state.homeSearchCard.count = action.payload.count;
//       state.homeSearchCard.next = action.payload.next;
//     },
//     removeHomeSearchSuccess: (state, action) => {
//       state.homeSearchCard.data = [];
//       state.homeSearchCard.count = "";
//       state.homeSearchCard.next = "";
//     },
//     removeProviderSearchSuccess: (state, action) => {
//       state.providerCards.data = [];
//       state.providerCards.count = "";
//       state.providerCards.next = "";
//     },
//     searchSuccess(state, action) {
//       state.isSearch = action.payload;
//     },
//     setSearchValue(state, action) {
//       state.searchValue = action.payload;
//     },
//     providerCardSliderSuccess(state, action) {
//       state.providerCardSlider = action.payload;
//     },
//     quizQuestionsSuccess(state, action) {
//       state.quizQuestions = action.payload;
//     },
//     partnerDetailsSuccess(state , action){
//       state.partnerDetails = action.payload;
//     }
//   },
// });

// // Reducer
// export default providerCardSlice.reducer;

// //Action
// const {
//   usersSuccess,
//   resourceCategorySuccess,
//   stateSuccess,
//   districtSuccess,
//   profileSuccess,
//   singResoCardSuccess,
//   cardDetailSuccess,
//   jobrolesSuccess,
//   allAplliedJobs,
//   homePageCountSuccess,
//   startLoading,
//   stopLoading,
//   homeSearchSuccess,
//   getCVSuccess,
//   getSingleCVSuccess,
//   clearResourcCategorySuccess,
//   startProviderLoading,
//   stopProviderLoading,
//   startFormLoading,
//   stopFormLoading,
//   pageCountSuccess,
//   searchSuccess,
//   setSearchValue,
//   removeHomeSearchSuccess,
//   removeUsersSuccess,
//   providerCardSliderSuccess,
//   removeProviderSearchSuccess,
//   isProfilePendingSuccess,
//   quizQuestionsSuccess,
//   partnerDetailsSuccess,
// } = providerCardSlice.actions;

// export const getAllProviderCards = (jobRoles, stateVal, page) => async (dispatch) => {
//     try {
//       dispatch(startLoading());
//       let response;
//       if (jobRoles || stateVal) {
//         response = await getProviderCardWithSearch(jobRoles, stateVal, page);
//       } else {
//         response = await getProviderCard(page);
//       }
//       if (response) {
//         // if (jobRoles || stateVal) {
//         //   dispatch(searchSuccess(true));
//         //   dispatch(setSearchValue({ jobRoles, stateVal }));
//         //   dispatch(homeSearchSuccess(response));
//         //   // dispatch(pageCountSuccess(page));
//         // } else {
//           dispatch(usersSuccess(response));
//           // dispatch(pageCountSuccess(page));
//         // }
//       }
//       dispatch(stopLoading());
//     } catch (e) {
//       if (e.code === 500) {
//         // removeCookie("authToken");
//       }
//     }
//   };

// export const clearAllproviderSearchCard = () => async (dispatch) => {
//   await dispatch(removeHomeSearchSuccess());
//   await dispatch(removeProviderSearchSuccess());
//   await dispatch(removeUsersSuccess());
//   await dispatch(searchSuccess(false));
// };

// export const clearAllproviderCard = () => async (dispatch) => {
//   await dispatch(removeUsersSuccess());
// };

// export const clearAllproviderSearchCardTabChange = () => async (dispatch) => {
//   await dispatch(removeHomeSearchSuccess());
//   await dispatch(removeProviderSearchSuccess());
//   await dispatch(removeUsersSuccess());
//   await dispatch(searchSuccess(false));
//   await dispatch(setSearchValue({}));
// };

// export const getAllProviderCardsSlider = (page) => async (dispatch) => {
//   try {
//     dispatch(startLoading());
//     let response = await getProviderCard(page);
//     if (response) {
//       dispatch(providerCardSliderSuccess(_.get(response, "results", [])));
//     }
//     dispatch(stopLoading());
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const getSignleProviderCards = (componentName) => async (dispatch) => {
//   try {
//     if (componentName == "createCard") {
//       dispatch(startLoading());
//       let response = await singleProviderResoCard();
//       if (response) {
//         dispatch(singResoCardSuccess(_.get(response, "data", [])));
//       }
//       dispatch(stopLoading());
//     } else {
//       dispatch(startProviderLoading());
//       let response = await singleProviderResoCard();
//       if (response) {
//         dispatch(singResoCardSuccess(_.get(response, "data", [])));
//       }
//       dispatch(stopProviderLoading());
//     }
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const addProviderCards = (reqData) => async (dispatch) => {
//   try {
//     dispatch(startFormLoading());
//     const response = await addResourceCard(reqData).catch((err) =>
//       toast.error(_.get(err, "message.message", "Something went wrong..!"))
//     );
//     if (_.get(response, "status", 0) === 1) {
//       toast.success(_.get(response, "message", ""));
//       dispatch(singResoCardSuccess([_.get(response, "data", [])]));
//     }
//     dispatch(stopFormLoading());
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const editProviderCards = (id, reqData) => async (dispatch) => {
//   try {
//     dispatch(startFormLoading());
//     const response = await editResourceCard(id, reqData).catch((err) =>
//       toast.error(_.get(err, "message.message", "Something went wrong..!"))
//     );
//     if (response.id) {
//       toast.success(_.get(response, "message", "Card succesfully udated..!"));
//       dispatch(singResoCardSuccess([response]));
//     }
//     dispatch(stopFormLoading());
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const getAllResourceCategories = () => async (dispatch) => {
//   try {
//     let response = await getResourceCategories();
//     if (response) {
//       dispatch(resourceCategorySuccess(_.get(response, "data", [])));
//     }
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const getState = () => async (dispatch) => {
//   try {
//     let response = await getAllState();
//     if (response) {
//       dispatch(stateSuccess(_.get(response, "data", [])));
//     }
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const getDistrict = (stateId) => async (dispatch) => {
//   try {
//     let response = await getAllDistrict(stateId);
//     if (response) {
//       dispatch(districtSuccess(response));
//     }
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const getProviderProfileDetails = (id) => async (dispatch) => {
//   try {
//     let response = await getProfile(id);
//     if (response) {
//       dispatch(profileSuccess(_.get(response, "data", {})));
//       dispatch(
//         isProfilePendingSuccess(
//           _.get(response, "data.is_profile_pending", false)
//         )
//       );
//     }
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const editProviderProfileDetails = (id, data) => async (dispatch) => {
//   try {
//     let response = await editProfile(id, data);
//     if (response) {
//       dispatch(profileSuccess(response));
//     }
//     if (response) {
//       toast.success(
//         _.get(response, "message", "Profile edited successfully..!")
//       );
//     }
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const getProviderCardSearch =
//   (jobRoles, stateId) => async (dispatch) => {
//     try {
//       dispatch(startLoading());
//       let response = await providerSearch(jobRoles, stateId);
//       if (response) {
//         dispatch(stopLoading());
//         dispatch(usersSuccess(response));
//       }
//     } catch (e) {
//       if (e.code === 500) {
//         // removeCookie("authToken");
//       }
//     }
//   };

// export const getSignleProviderCardDetails = (id) => async (dispatch) => {
//   try {
//     dispatch(startLoading());
//     let response = await getProviderCardById(id);
//     if (response) {
//       await dispatch(cardDetailSuccess(_.get(response, "data", {})));
//       dispatch(stopLoading());
//     }
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const getJobRoles = (catId) => async (dispatch) => {
//   try {
//     await dispatch(jobrolesSuccess([]));
//     let response = await getAllJobRoles(catId);
//     if (response) {
//       await dispatch(jobrolesSuccess(response));
//     }
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const getHomePageCount = () => async (dispatch) => {
//   try {
//     let response = await getHomeCount();
//     if (response) {
//       dispatch(homePageCountSuccess(response));
//     }
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const getHomeProviderCardSearch =
//   (jobRoles, stateId) => async (dispatch) => {
//     try {
//       dispatch(startLoading());
//       let response = await providerSearch(jobRoles, stateId);
//       if (response) {
//         dispatch(stopLoading());
//         dispatch(homeSearchSuccess(response));
//       }
//     } catch (e) {
//       if (e.code === 500) {
//         // removeCookie("authToken");
//       }
//     }
//   };

// export const getProviderCV = () => async (dispatch) => {
//   try {
//     dispatch(startLoading());
//     let response = await getCV();
//     if (response) {
//       dispatch(stopLoading());
//       dispatch(getCVSuccess(response));
//     }
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const getProviderCVById = (userId) => async (dispatch) => {
//   try {
//     let response = await getCVByUserId(userId);
//     if (response) { 
//       dispatch(getSingleCVSuccess(response));
//     }
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const clearResourceCategories = (id) => async (dispatch) => {
//   try {
//     dispatch(clearResourcCategorySuccess([]));
//   } catch (e) {
//     if (e.code === 500) {
//       // removeCookie("authToken");
//     }
//   }
// };

// export const getUserAppliedJobs = (currentPage) => async (dispatch) => {
//   try {
//     dispatch(startLoading());
//     let response = await getAppliedJobsByUserId(currentPage);
//     if (response) {
//       dispatch(allAplliedJobs(response));
//     }
//     dispatch(stopLoading());
//   } catch (e) {
//     if (e.code === 500) {
//     }
//   }
// }

// // for questions loading
// export const getQuizQuestions = () => async (dispatch) => {
//   const data = {category: 1};
//   try {
//     dispatch(startLoading());
//     let response = await getQuestionsOfQuiz(data);
//     // console.log(response);
//     if (response) {
//       dispatch(quizQuestionsSuccess(response));
//     }
//     dispatch(stopLoading());
//   } catch (e) {
//     if (e.code === 500) {
//     }
//   }
// }
// // for pre job assessment
// export const getPreJobQuestions = (data) => async (dispatch) => {
//   try {
//     dispatch(startLoading());
//     let response = await getQuestionsOfPreJob(data);
//     // console.log(response);
//     if (response) {
//       dispatch(quizQuestionsSuccess(response));
//     }
//     dispatch(stopLoading());
//   } catch (e) {
//     Swal.fire({
//       title: 'Already Attempted',
//       text: "You have already attempted the assessment.",
//       icon: 'info',
//       confirmButtonText: 'Ok'
//     })
//     // console.log(e);
//     if (e.code === 500) {
//     }
//   }
// }

// export const getPartners = () => async (dispatch) => {
//   try{
//     dispatch(startLoading());
//     let response = await getPartnersDetails();
//     if(response){
//       dispatch(partnerDetailsSuccess(response));
//     }
//     dispatch(stopLoading);
//   }
//   catch (e) {
//     if (e.code === 500) {
//       console.log(e);
//     }
//   }
// }
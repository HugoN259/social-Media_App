import LogInModal from '@/components/modals/LogInModal';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    SignUpModalOpen: false,
    LogInModalOpen: false,
    commentModalOpen: false,
    commentPostdetails: {
        name: "",
        username: "",
        id: "",
        text: "",

    }
}

const modalslice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignUpModal: (state) => {
        state.SignUpModalOpen = true;
    },
    closeSignUpModal: (state) =>{
        state.SignUpModalOpen = false;
    },
    openLogInModal: (state) => {
        state.LogInModalOpen = true;
    },
    closeLogInModal: (state) =>{
        state.LogInModalOpen = false;
    },
    openCommentModal: (state) => {
        state.commentModalOpen = true;
    },
    closeCommentModal: (state) =>{
        state.commentModalOpen = false;
    },
    setCommentDetails: (state, action) => {
        state.commentPostdetails.name = action.payload.name
        state.commentPostdetails.username = action.payload.username
        state.commentPostdetails.id = action.payload.id
        state.commentPostdetails.text = action.payload.text
    },
  },
});

export const { openSignUpModal, closeSignUpModal, openLogInModal, closeLogInModal,
openCommentModal, closeCommentModal, setCommentDetails
} = modalslice.actions

export default modalslice.reducer
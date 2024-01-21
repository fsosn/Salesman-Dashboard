import {createSlice} from '@reduxjs/toolkit';
import {profile1} from "../profile1.js";
import {profile2} from "../profile2.js";

let availableProfiles = [
    profile1,
    profile2
]

const initialState = {
    profile: profile1,
    availableProfiles: availableProfiles,
};

const multiAccountSlice = createSlice({
    name: 'multiAccount',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            let selectedProfileName = action.payload;
            handleProfileChange(state, selectedProfileName)
        }
    }
});

export const chooseProfile = (selectedProfileName) => {
    switch (selectedProfileName) {
        case profile1.profileName:
            return profile1
        case profile2.profileName:
            return profile2
    }
}

export const handleProfileChange = (state, selectedProfileName) => {
    state.profile = chooseProfile(selectedProfileName);
}

export const { setProfile } = multiAccountSlice.actions;

export default multiAccountSlice.reducer;

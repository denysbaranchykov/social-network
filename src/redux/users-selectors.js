import {createSelector} from "reselect";

export const getUsersOriginal = (state) => {
    return state.usersPage.users.filter(u => true);
}

export const getUsersSelector = createSelector(getUsersOriginal,
    (users) => {
        return users.filter(u => true)
    }
)

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}

export const countSomethingDifficult = (state) => {
    let count = 23;
    return count;
}


import {AppRootStateType} from "./redux-store";
// import {createSelector, Selector} from "reselect";

export const getUsers = (state: AppRootStateType) => {
    return state.usersPage.users
}
//пример использования и типизации мемоизированного селектора (для сложных вычисляемых селекторов)
// export const getUsersFilter  = createSelector<[Selector<AppRootStateType, UsersType[]>], UsersType[]>(getUsers, (users) => {
//    return users.filter(elem => true)
// });

export const getPageSize = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppRootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}
export const getFollowingInProgress = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}
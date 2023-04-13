export const GET_SEARCH_POSTS = 'GET_SEARCH_POSTS';

export type GetSearchPostsAction = {
  type: typeof GET_SEARCH_POSTS;
  payload: string;
};

export const getSearchPosts = (payload: string): GetSearchPostsAction => ({
  type: GET_SEARCH_POSTS,
  payload,
});

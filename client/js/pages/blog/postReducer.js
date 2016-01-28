const LOADALL = 'my-app/post/LOADALL';
const LOAD = 'my-app/post/LOAD';
const CREATE = 'my-app/post/CREATE';
const UPDATE = 'my-app/post/UPDATE';
const REMOVE = 'my-app/post/REMOVE';


function reducer(state, action) {
    switch (action.type) {
        // do reducer stuff
        case REMOVE:
            if (state.post.id === action.id) {
                state.post = null;
                
                console.log('post removed');
            }
            return state;
        default:
            return state;
    }
}

function loadPosts() {
    return {
        type: LOADALL
    };
}

function loadPost(id) {
    return {
        type: LOAD,
        id: id
    };
}

function createPost(post) {
    return {
        type: CREATE,
        post: post
    };
}

function updatePost(post) {
    return {
        type: UPDATE,
        post: post
    };
}

function removePost(id) {
    return {
        type: REMOVE,
        id: id
    };
}

module.exports = {
    reducer: reducer,
    loadPosts: loadPosts,
    loadPost: loadPost,
    createPost: createPost,
    updatePost: updatePost,
    removePost: removePost
}

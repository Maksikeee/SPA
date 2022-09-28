
export const getSlugOfHash = (hash) => {
    return hash ? hash.slice(1) : 'home'
}

export const getPageData = (slugOfHash) => {
    const localData = JSON.parse(localStorage.getItem('dataSPA'));
    const data = localData.find(({slug}) => slugOfHash.includes(slug));
    return data;
} 

export const hashChangeEvent = (actionFunction) => {
    window.addEventListener('hashchange', () => {
        actionFunction(location.hash)
    })
}